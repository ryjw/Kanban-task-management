export async function POST(req) {
  try {
    const data = await req.json();
    const { name, boardId } = data;
    if (!name || !boardId) {
      return Response.json({
        success: false,
        error: "Please name your column and include the id of the board",
      });
    }
    const isBoardExisting = await prisma.board.findUnique({
      where: { id: boardId },
    });
    if (!isBoardExisting) {
      return Response.json({
        success: false,
        error: "The board you have supplied an id for does not exist",
      });
    }
    const userId = req.headers.get("userId");
    if (!userId) {
      return Response.json({
        success: false,
        error: "Please log in to create a column",
      });
    }
    if (userId !== isBoardExisting.userId) {
      return Response.json({
        success: false,
        error: "You are not authorised to create a column for this board",
      });
    }
    const column = await prisma.column.create({
      data: {
        name,
        boardId,
      },
    });
    return Response.json({ success: true, column });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}

export async function PATCH(req) {
  try {
    const data = await req.json();
    const { name, id } = data;
    if (!name || !id) {
      return Response.json({
        success: false,
        error: "Please include the id of the column, and the new name",
      });
    }
    const isColumnExisting = await prisma.column.findUnique({ where: { id } });
    if (!isColumnExisting) {
      return Response.json({ success: false, error: "No such column exists" });
    }
    const userId = req.headers.get("userId");
    if (!userId) {
      return Response.json({
        success: false,
        error: "Please log in to edit this column",
      });
    }
    const board = await prisma.board.findUnique({
      where: {
        id: isColumnExisting.boardId,
      },
    });
    if (board.userId !== userId) {
      return Response.json({
        success: false,
        error: "You are not authorised to edit this column",
      });
    }
    const column = await prisma.column.update({
      where: { id },
      data: { name },
    });
    return Response.json({ success: true, column });
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
        error: "Please include the id of the column",
      });
    }
    const isColumnExisting = await prisma.column.findUnique({ where: { id } });
    if (!isColumnExisting) {
      return Response.json({
        success: false,
        error: "No such column exists, or is already deleted",
      });
    }
    const userId = req.headers.get("userId");
    if (!userId) {
      return Response.json({
        success: false,
        error: "Please log in to delete this column",
      });
    }
    const board = await prisma.board.findUnique({
      where: {
        id: isColumnExisting.boardId,
      },
    });
    if (board.userId !== userId) {
      return Response.json({
        success: false,
        error: "You are not authorised to edit this column",
      });
    }
    const column = await prisma.column.delete({
      where: { id },
    });
    return Response.json({ success: true, column });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
