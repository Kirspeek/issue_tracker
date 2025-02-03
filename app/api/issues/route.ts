import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
<<<<<<< HEAD
import { issueSchema } from "@/app/validationSchemas"; // Adjust the import path if necessary
=======
import { issueSchema } from '../../validationSchemas';
>>>>>>> f25775c (Initial commit for issue-tracker)
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";

export async function POST(request: NextRequest) {
  // Check for an existing session
  const session = await getServerSession(authOptions);
  if (!session) {
<<<<<<< HEAD
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
=======
    return NextResponse.json({}, { status: 401 });
>>>>>>> f25775c (Initial commit for issue-tracker)
  }

  const body = await request.json();
  const validation = issueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

<<<<<<< HEAD
  // Set a default status if not provided
  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
      status: body.status || "OPEN", // Default to "OPEN" if status is not provided
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
=======
  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description }
  });

  return NextResponse.json(newIssue, { status: 201 })
}
>>>>>>> f25775c (Initial commit for issue-tracker)
