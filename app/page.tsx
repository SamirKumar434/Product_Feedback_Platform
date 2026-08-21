import { GradientHeader } from "@/components/gradient-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { BarChart, MessageSquare, User, Zap } from "lucide-react";
import { ArrowRight, MapIcon } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <GradientHeader
        title="Shape the future of our product"
        subtitle="Feedback Fusion is where your ideas come to life. Suggest features, vote on priorities, and track what we build next."
      >
        <div className="flex justify-center gap-4 pt-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            <Link href="/feedback/new">
              Submit Feedback <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-gray-100"
          >
            <Link href="/roadmap">
              View Roadmap <MapIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </GradientHeader>
      {/* Feature Section */}
      {/* Feature Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <MessageSquare className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Submit Ideas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Share your suggestions and feature requests with the community
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <BarChart className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Vote & priortize</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Upvote your ideas you love to help us understand what matters
                most.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <User className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Track Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Follow our public roadmap to see what we are working on next.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-primary mb-2" />
              <CardTitle>See Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Watch as your feedback transforms into real features and
                improvements
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Stats Section */}
      <section className="text-center">
        <div className="inline-grid grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold">1,234+</div>
            <div className="text-muted-foreground text-sm">Suggestions</div>
          </div>
          <div>
            <div className="text-3xl font-bold">5,678+</div>
            <div className="text-muted-foreground text-sm">Votes Cast</div>
          </div>
          <div>
            <div className="text-3xl font-bold">254+</div>
            <div className="text-muted-foreground text-sm">
              Features Shipped
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
