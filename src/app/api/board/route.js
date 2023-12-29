import prisma from "@/lib/prisma";

export async function GET() {
  const boards = await prisma.board.findMany({
    include: {
      columns: { include: { tasks: { include: { subtasks: true } } } },
    },
  });
  return Response.json({ boards });
}

export async function POST(req) {
  try {
    const data = await req.json();
    const { name } = data;
    const board = await prisma.board.create({
      data: {
        name,
      },
    });
    return Response.json({ success: true, board });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}

export async function PUT(req) {
  const data = await req.json();
  const { name, id } = data;
  const board = await prisma.board.findUnique({ where: { id } });
  if (board) {
    const newName = await prisma.board.update({
      where: { id },
      data: { name },
    });
    return Response.json({ success: true, newName });
  }
  try {
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}

export async function DELETE(req) {
  const data = await req.json();
  const { id } = data;
  const board = await prisma.board.findUnique({ where: { id } });
  if (board) {
    const deleted = await prisma.board.delete({
      where: { id },
    });
    return Response.json({ success: true, deleted });
  }
  try {
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
