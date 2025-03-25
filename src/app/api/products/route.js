let products = [
    { id: 1, title: "Product 1" },
    { id: 2, title: "Product 2" },
  ];
  
  export async function GET() {
    return Response.json(products);
  }
  
  export async function POST(req) {
    const { title } = await req.json();
    const newProduct = { id: products.length + 1, title };
    products.push(newProduct);
    return Response.json(newProduct, { status: 201 });
  }
  
  export async function PUT(req) {
    const { id, title } = await req.json();
    const index = products.findIndex((p) => p.id === id);
    if (index !== -1) {
      products[index].title = title;
      return Response.json(products[index]);
    } else {
      return Response.json({ message: "Product not found" }, { status: 404 });
    }
  }
  
  export async function DELETE(req) {
    const { id } = await req.json();
    products = products.filter((p) => p.id !== id);
    return Response.json({ message: "Deleted successfully" });
  }
  