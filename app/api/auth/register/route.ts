import prisma from "@/src/lib/prisma";
import bcrypt from "bcryptjs";

export async function GET() {
  const users = await prisma.user.findMany();
  return Response.json(users);
}

export async function POST(req: Request) {
  const { email, password, name } = await req.json();
  const checkUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (checkUser) {
    return Response.json({ error: "อีเมลนี้ถูกใช้งานแล้ว" }, { status: 400 });
  }
  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { email, password: hashed, name },
  });

  return Response.json(user);
}
