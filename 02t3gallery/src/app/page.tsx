import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = 'force-dynamic'

// const mockUrls = [
 
//   "https://images.unsplash.com/photo-1712414951449-424e662f6e74?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1652496548876-caf6b53ea26e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1666718962939-0557ec54c981?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// ];

// const mockImages = mockUrls.map((url, index) => ({
//   id: index + 1,
//   url,
// }))


export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id),
  });


  return (
    <main className="">
      <h2 className="p-4">Hello (Gallery in progress)</h2>
      <div className="flex flex-wrap gap-2">
        {images.map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      
    </main>
  );
}
