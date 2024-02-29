import prisma from "@/lib/prisma";

export async function GET(req) {
  try {
    const userId = req.headers.get("userId");
    if (!userId) {
      return Response.json({
        success: false,
        error: "Please log in to view boards",
      });
    }
    const boards = await prisma.board.findMany({
      where: { userId },
      include: {
        columns: { include: { tasks: { include: { subtasks: true } } } },
      },
    });
    return Response.json({ success: true, boards });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const { name } = data;
    if (!name) {
      return Response.json({
        success: false,
        error: "Please include a name for the board",
      });
    }
    const userId = req.headers.get("userId");
    if (!userId) {
      return Response.json({
        success: false,
        error: "Please log in to create boards",
      });
    }
    const board = await prisma.board.create({
      data: {
        name,
        userId,
      },
    });
    return Response.json({ success: true, board });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}

// changes name of board
export async function PATCH(req) {
  try {
    const data = await req.json();
    const { name, id } = data;
    if (!name || !id) {
      return Response.json({
        success: false,
        error:
          "Please include the ID of the existing board and what you want to name it",
      });
    }
    const board = await prisma.board.findUnique({ where: { id } });
    const userId = req.headers.get("userId");
    if (!userId) {
      return Response.json({
        success: false,
        error: "Please log in to edit boards",
      });
    }
    if (userId !== board.userId) {
      return Response.json({
        success: false,
        error: "You are not authorised to edit this board",
      });
    }
    if (board) {
      const board = await prisma.board.update({
        where: { id },
        data: { name },
      });
      return Response.json({ success: true, board });
    } else {
      return Response.json({
        success: false,
        error: "The board you are trying to modify doesn't exist",
      });
    }
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}

export async function DELETE(req) {
  try {
    const data = await req.json();
    const { id } = data;
    if (!id) {
      return Response.json({
        success: false,
        error: "Please provide the ID of the board you are deleting",
      });
    }
    const isBoardExisting = await prisma.board.findUnique({ where: { id } });
    const userId = req.headers.get("userId");
    if (!userId) {
      return Response.json({
        success: false,
        error: "Please log in to delete boards",
      });
    }
    if (isBoardExisting.userId !== userId) {
      return Response.json({
        success: false,
        error: "Not authorised to delete this board",
      });
    }
    if (isBoardExisting) {
      const board = await prisma.board.delete({
        where: { id },
      });
      return Response.json({ success: true, board });
    } else {
      return Response.json({
        success: false,
        error: "No such board, or board already deleted",
      });
    }
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
