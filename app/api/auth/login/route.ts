import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "@/src/lib/prisma";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return Response.json({ error: "Wrong password" }, { status: 401 });
  }

  const secret = process.env.JWT_SECRET;

  if (!secret) {
    return Response.json(
      { error: "JWT_SECRET is not defined" },
      { status: 500 }
    );
  }

  const token = jwt.sign({ userId: user.id }, secret, { expiresIn: "7d" });

  return Response.json({ token });
}
