<<<<<<< HEAD
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

// GET Issue by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const issue = await prisma.issue.findUnique({
      where: { id: params.id },
    });

    if (!issue) {
      return NextResponse.json({ error: "Issue not found." }, { status: 404 });
    }

    return NextResponse.json(issue, { status: 200 });
  } catch (error) {
    console.error("Error fetching issue:", error);
    return NextResponse.json(
      { error: "Failed to fetch issue. Please try again later." },
      { status: 500 }
    );
  }
}

// PATCH Issue
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();

    const updatedIssue = await prisma.issue.update({
      where: { id: params.id },
      data: body,
    });

    return NextResponse.json(updatedIssue, { status: 200 });
  } catch (error) {
    console.error("Error updating issue:", error);
    return NextResponse.json(
      { error: "Failed to update issue. Please try again later." },
      { status: 500 }
    );
  }
}

// DELETE Issue
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const deletedIssue = await prisma.issue.delete({
      where: { id: params.id },
    });

    return NextResponse.json(deletedIssue, { status: 200 });
  } catch (error) {
    console.error("Error deleting issue:", error);
    return NextResponse.json(
      { error: "Failed to delete issue. Please try again later." },
      { status: 500 }
    );
  }
}
=======
import authOptions from "@/app/auth/authOptions";
import { patchIssueSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string }}) {
    // Check for an existing session
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({}, { status: 401 });
    }

    const body = await request.json()
    const validation = patchIssueSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 400 })
    }

    const {assignedToUserId, title, description} = body;
    if (assignedToUserId) {
      const user  = await prisma.user.findUnique({ where: { id: assignedToUserId}});

      if (!user) {
        return NextResponse.json({ error: "Invalid user." }, { status: 400 })
      }
    }

    const issue = await prisma.issue.findUnique({
      where: { id: parseInt(params.id) }
    });
    if (!issue) {
      return NextResponse.json({ error: "Invalid issue"} , { status: 404 })
    }

    const updatedIssue = await prisma.issue.update({
      where: { id: issue.id },
      data: {
        title,
        description,
        assignedToUserId
      }
    });

    return NextResponse.json(updatedIssue);
  }


export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string }}) {
    // Check for an existing session
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({}, { status: 401 });
    }

    const issue = await prisma.issue.findUnique({
      where: { id: parseInt(params.id) }
    });

    if (!issue) {
      return NextResponse.json({ error: "Invalid issue."}, { status: 404 })
    }

    await prisma.issue.delete({
      where: { id: issue.id }
    });

    return NextResponse.json({})
  }
>>>>>>> f25775c (Initial commit for issue-tracker)
