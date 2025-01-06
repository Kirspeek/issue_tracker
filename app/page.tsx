import prisma from "@/prisma/client";
import IssueSummary from "./IssueSummary";
import IssueChart from "./IssueChart";
import LatestIssues from "./LatestIssues";
import { Grid, Flex } from "@radix-ui/themes";
import { Metadata } from "next";

// Metadata for the page
export const metadata: Metadata = {
  title: "Issue Tracker - Dashboard",
  description: "View a summary of project issues.",
};

// Fetch issue counts asynchronously
async function fetchIssueCounts() {
  const [open, inProgress, closed] = await Promise.all([
    prisma.issue.count({ where: { status: "OPEN" } }),
    prisma.issue.count({ where: { status: "IN_PROGRESS" } }),
    prisma.issue.count({ where: { status: "CLOSED" } }),
  ]);

  return { open, inProgress, closed };
}

// Main component
export default async function Home() {
  const { open, inProgress, closed } = await fetchIssueCounts();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Flex direction="column" gap="5">
        <IssueSummary open={open} inProgress={inProgress} closed={closed} />
        <IssueChart open={open} inProgress={inProgress} closed={closed} />
      </Flex>
      <LatestIssues />
    </Grid>
  );
}

// Force dynamic rendering to ensure real-time data
export const dynamic = "force-dynamic";
