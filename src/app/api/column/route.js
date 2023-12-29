export async function POST(req) {
  try {
    const data = await req.json();
    const { name, boardId } = data;
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
  const data = await req.json();
  const { id } = data;
  const column = await prisma.column.findUnique({ where: { id } });
  if (column) {
    const deleted = await prisma.column.delete({
      where: { id },
    });
    return Response.json({ success: true, deleted });
  }
  try {
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
