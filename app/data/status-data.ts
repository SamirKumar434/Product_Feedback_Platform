import { Eye, Calendar, Clock, CheckCircle2 } from "lucide-react";

export const STATUS_ORDER = [
  "under_review",
  "planned",
  "in_progress",
  "completed",
] as const;

export type StatusType = (typeof STATUS_ORDER)[number];

export const STATUS_GROUPS = {
  under_review: {
    title: "Under Review",
    description: "New suggestions being evaluated",
    icon: Eye,
    color: "border-gray-400 dark:border-gray-500",
    bgColor:
      "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50",
    textColor: "text-gray-700 dark:text-gray-300",
    countColor: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
  },
  planned: {
    title: "Planned",
    description: "Scheduled for development",
    icon: Calendar,
    color: "border-blue-400 dark:border-blue-500",
    bgColor:
      "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50",
    textColor: "text-blue-700 dark:text-blue-300",
    countColor: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
  },
  in_progress: {
    title: "In Progress",
    description: "Currently being built",
    icon: Clock,
    color: "border-amber-400 dark:border-amber-500",
    bgColor:
      "bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/50 dark:to-amber-900/50",
    textColor: "text-amber-700 dark:text-amber-300",
    countColor:
      "bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300",
  },
  completed: {
    title: "Completed",
    description: "Shipped and live in product",
    icon: CheckCircle2,
    color: "border-emerald-400 dark:border-emerald-500",
    bgColor:
      "bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/50 dark:to-emerald-900/50",
    textColor: "text-emerald-700 dark:text-emerald-300",
    countColor:
      "bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300",
  },
};
