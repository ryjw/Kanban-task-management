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

export async function PUT(req) {
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
    if (isColumnExisting) {
      const column = await prisma.column.delete({
        where: { id },
      });
      return Response.json({ success: true, column });
    } else {
      return Response.json({
        success: false,
        error: "No such column exists, or is already deleted",
      });
    }
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
