import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

interface JwtUserPayload {
  userId: string;
}

export async function verifyToken(req: Request): Promise<JwtUserPayload> {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET as string
  ) as JwtUserPayload;

  return decoded;
}
