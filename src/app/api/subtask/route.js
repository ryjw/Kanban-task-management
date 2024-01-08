export async function POST(req) {
  try {
    const data = await req.json();
    const { name, taskId, isFulfilled } = data;
    if (!name || !taskId) {
      return Response.json({
        success: false,
        error: "Please name your subtask and include the id of the task",
      });
    }
    const isTaskExisting = await prisma.column.findUnique({
      where: { id: taskId },
    });
    if (!isTaskExisting) {
      return Response.json({
        success: false,
        error: "The task you have supplied an id for does not exist",
      });
    }
    const subtask = await prisma.subtask.create({
      data: {
        name,
        taskId,
        isFulfilled, // optional
      },
    });
    return Response.json({ success: true, subtask });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}

// to change either the name or the fulfiled status of the subtask
// but not the task ID (doesn't make sense)
export async function PUT(req) {
  try {
    const data = await req.json();
    const { id, name, isFulfilled } = data;
    if (!id) {
      return Response.json({
        success: false,
        error: "Please include the id of the subtask",
      });
    }
    if (!name && isFulfilled === undefined) {
      return Response.json({
        success: false,
        error:
          "You need to choose either a new isFulfilled status or a new name",
      });
    }
    const isSubtaskExisting = await prisma.subtask.findUnique({
      where: { id },
    });
    if (!isSubtaskExisting) {
      return Response.json({ success: false, error: "No such subtask exists" });
    }
    const subtask = await prisma.subtask.update({
      where: { id },
      data: { name, isFulfilled },
    });
    return Response.json({ success: true, subtask });
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
        error: "Please include the id of the subtask",
      });
    }
    const isSubtaskExisting = await prisma.subtask.findUnique({
      where: { id },
    });
    if (isSubtaskExisting) {
      const task = await prisma.subtask.delete({
        where: { id },
      });
      return Response.json({ success: true, subtask });
    } else {
      return Response.json({
        success: false,
        error: "No such subtask exists, or is already deleted",
      });
    }
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
