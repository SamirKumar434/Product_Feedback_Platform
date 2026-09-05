"use client";
import { Badge, MessageSquare, ThumbsUp, User } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useState } from "react";
import { STATUS_GROUPS } from "@/app/data/status-data";
import { formatDistanceToNow } from "date-fns";
import { getCategoryDesign } from "@/app/data/category-data";
import { Content } from "next/font/google";
import { Button } from "./ui/button";
import { toast } from "sonner";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function FeedbackList({
  initialPosts,
  userId,
}: {
  initialPosts: any[];
  userId: string | null;
}) {
  const [posts, setPosts] = useState(initialPosts);
  const handleVote = async (postId: number | string) => {
    if (!userId) {
      toast.error("Please sign in to vote on feedback");
      return;
    }

    // Show loading toast
    const loadingToast = toast.loading("Submitting vote...");

    try {
      const response = await fetch("/api/votes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId }),
      });

      if (!response.ok) {
        throw new Error("Vote failed");
      }

      const data = await response.json();

      // Update UI optimistically / from response
      setPosts((prevPosts) =>
        prevPosts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              votes: data.voted
                ? [...post.votes, { userId, postId }]
                : post.votes.filter((v: any) => v.userId !== userId),
            };
          }
          return post;
        }),
      );

      toast.dismiss(loadingToast);
      toast.success(data.voted ? "Vote added!" : "Vote removed!");
    } catch (error) {
      console.error(error);
      toast.dismiss(loadingToast);
      toast.error("Failed to submit. Please try again.");
    }
  };

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card
          key={post.id}
          className="hover:shadow-md transition-shadow border"
        >
          <CardHeader>
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <CardTitle className="text-lg">{post.title}</CardTitle>
                <CardDescription className="flex items-center gap-1.5 mt-1">
                  <User className="h-3 w-3" />
                  {post.author.name}
                  <span>•</span>
                  <span className="whitespace-nowrap">
                    {formatDistanceToNow(new Date(post.createdAt), {
                      addSuffix: true,
                    })}
                  </span>
                </CardDescription>
              </div>
              <div className="flex gap-1.5">
                {/* Status Badge */}
                {(() => {
                  const statusGroup =
                    STATUS_GROUPS[post.status as keyof typeof STATUS_GROUPS];
                  if (!statusGroup) return null;
                  const StatusIcon = statusGroup.icon;

                  return (
                    <Badge
                      className={`${statusGroup.countColor} border ${statusGroup.color}`}
                    >
                      <StatusIcon className="h-3 w-3" />
                      {statusGroup.title}
                    </Badge>
                  );
                })()}
                {/* Category Badge */}
                {(() => {
                  const design = getCategoryDesign(post.category);
                  const Icon = design.icon;

                  return (
                    <Badge
                      fontVariant="outline"
                      className={`text-xs ${design.border} ${design.text} flex items-center gap-1`}
                    >
                      <Icon className="h-3 w-3" />
                      {post.category}
                    </Badge>
                  );
                })()}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-3">{post.description}</p>
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleVote(post.id)}
                className="gap-2"
              >
                <ThumbsUp
                  className={`h-4 w-4 ${
                    post.votes.some((v: any) => v.userId === userId)
                      ? "fill-current"
                      : ""
                  }`}
                />
                {post.votes.length} Votes
              </Button>
              <div>
                <div className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1.5 cursor-pointer">
                  <MessageSquare className="h-4 w-4" />
                  Comment
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
