"use client";
import { Badge, User } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";
import { STATUS_GROUPS } from "@/app/data/status-data";
import { formatDistanceToNow } from "date-fns";
import { getCategoryDesign } from "@/app/data/category-data";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function FeedbackList({
  initialPosts,
  userId,
}: {
  initialPosts: any[];
  userId: string | null;
}) {
  const [posts, setPosts] = useState(initialPosts);

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
        </Card>
      ))}
    </div>
  );
}
