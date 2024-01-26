export async function POST(req) {
  try {
    const data = await req.json();
    const { name, description, columnId } = data;
    if (!name || !columnId) {
      return Response.json({
        success: false,
        error: "Please name your task and include the id of the column",
      });
    }
    const isColumnExisting = await prisma.column.findUnique({
      where: { id: columnId },
    });
    if (!isColumnExisting) {
      return Response.json({
        success: false,
        error: "The column you have supplied an id for does not exist",
      });
    }
    const userId = req.headers.get("userId");
    if (!userId) {
      return Response.json({
        success: false,
        error: "Please log in to create this task",
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
        error: "You are not authorised to create a task on this board",
      });
    }
    const task = await prisma.task.create({
      data: {
        name,
        columnId,
        description, // optional
      },
    });
    return Response.json({ success: true, task });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}

// to change any attribute of the task, including the column id
export async function PATCH(req) {
  try {
    const data = await req.json();
    const { id, name, description, columnId } = data;
    if (!id) {
      return Response.json({
        success: false,
        error: "Please include the id of the task",
      });
    }
    if (!name && !description && !columnId) {
      return Response.json({
        success: false,
        error:
          "You need to choose either a new name, description, or column id to make changes",
      });
    }
    const isTaskExisting = await prisma.task.findUnique({ where: { id } });
    if (!isTaskExisting) {
      return Response.json({ success: false, error: "No such task exists" });
    }
    const userId = req.headers.get("userId");
    if (!userId) {
      return Response.json({
        success: false,
        error: "Please log in to edit this task",
      });
    }
    const column = await prisma.column.findUnique({
      where: { id: isTaskExisting.columnId },
    });
    const board = await prisma.board.findUnique({
      where: { id: column.boardId },
    });
    if (!board) {
      return Response.json({
        success: false,
        error: "Not authorised to edit this task",
      });
    }
    if (board.userId !== userId) {
      return Response.json({
        success: false,
        error: "You are not authorised to edit this task",
      });
    }
    const task = await prisma.task.update({
      where: { id },
      data: { name, description, columnId },
    });
    return Response.json({ success: true, task });
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
        error: "Please include the id of the task you are deleting",
      });
    }
    const isTaskExisting = await prisma.task.findUnique({ where: { id } });
    if (!isTaskExisting) {
      return Response.json({
        success: false,
        error: "No such task exists, or is already deleted",
      });
    }
    const userId = req.headers.get("userId");
    if (!userId) {
      return Response.json({
        success: false,
        error: "Please log in to delete this task",
      });
    }
    const column = await prisma.column.findUnique({
      where: { id: isTaskExisting.columnId },
    });
    const board = await prisma.board.findUnique({
      where: { id: column.boardId },
    });
    if (!board) {
      return Response.json({
        success: false,
        error: "You are not authorised to delete this task",
      });
    }
    if (board.userId !== userId) {
      return Response.json({
        success: false,
        error: "You are noth authorised to edit this task",
      });
    }
    const task = await prisma.task.delete({
      where: { id },
    });
    return Response.json({ success: true, task });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
