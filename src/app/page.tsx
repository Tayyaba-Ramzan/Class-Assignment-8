import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

interface Post {
  id?: string;
  _id?: string;
  title: string;
  publishedAt: string;
  imageUrl: string;
  mainImage?: {
    alt?: string;
  };
  slug?: {
    current: string;
  };
  bodyText?: string;
}

export default async function Home() {
  const query = `*[_type == "post"] {
    _id,
    slug,
    title,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    mainImage { alt },
    "bodyText": body[].children[].text
  }`;

  const blogData: Post[] = await client.fetch(query);

  return (
    <div className="container mx-auto p-4">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogData.map((item) => (
          <div
            key={item.id || item._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            <Image
              src={item.imageUrl}
              alt={item.mainImage?.alt || item.title || "Blog Image"}
              width={400}
              height={200}
              objectFit="cover"
              className="rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-sm text-gray-500 mb-4">
              {new Date(item.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            {item.bodyText && (
              <p className="text-gray-700 text-sm line-clamp-3 flex-grow">
                {item.bodyText}
              </p>
            )}
            <div className="card-actions justify-center mt-4 flex-shrink-0">
              <Link href={`/blog/${item.slug?.current || ""}`}>
                <button className="btn bg-gradient-to-r from-purple-900 to-blue-400 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 text-white px-4 py-2 rounded-sm shadow-sm">
                  Explore Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

