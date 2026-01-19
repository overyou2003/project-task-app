import prisma from "@/src/lib/prisma";
import { verifyToken } from "@/src/middleware/auth";

export async function POST(req: Request) {
  try {
    const user = await verifyToken(req);
    const { title, description, dueDate } = await req.json();

    const task = await prisma.task.create({
      data: {
        title,
        description,
        dueDate,
        userId: user.userId,
      },
    });

    return Response.json(task);
  } catch {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
}
