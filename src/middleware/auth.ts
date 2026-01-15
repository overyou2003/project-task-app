import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function verifyToken() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  return jwt.verify(token, process.env.JWT_SECRET!);
}
