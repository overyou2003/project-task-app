import prisma from "@/src/lib/prisma";
import { verifyToken } from "@/src/middleware/auth";

export async function GET(req: Request) {
  try {
    const user = await verifyToken(req);

    const profile = await prisma.user.findUnique({
      where: { id: user.userId },
      select: {
        id: true,
        email: true,
        name: true
      },
    });

    return Response.json(profile);
  } catch {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
}
