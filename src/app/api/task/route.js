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
export async function PUT(req) {
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
    const isTaskExisting = await prisma.column.findUnique({ where: { id } });
    if (isTaskExisting) {
      const task = await prisma.task.delete({
        where: { id },
      });
      return Response.json({ success: true, task });
    } else {
      return Response.json({
        success: false,
        error: "No such task exists, or is already deleted",
      });
    }
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
