import type { NextApiRequest, NextApiResponse } from "next";
import { ApiError } from "next/dist/server/api-utils";
import prisma, { type Prisma, type User } from "database";

type UserApiResponse = Pick<User, "email">;

/**
 * Users
 *
 * @description A basic API endpoint to retrieve all the users in the database
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void | NextApiResponse<UserApiResponse>> {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // Build 'select' object
  const userEmail: Prisma.UserSelect = {
    email: true,
  };

  try {
    const users = await prisma.user.findMany({
      select: userEmail,
    });

    if (!users) throw new ApiError(500, "Failed to retrieve users");

    return res.status(200).json({ users });
  } catch (error: any) {
    console.error({ message: error.message, status: error.statusCode });
    return res.status(error.statusCode).end(error.message);
  }
}
