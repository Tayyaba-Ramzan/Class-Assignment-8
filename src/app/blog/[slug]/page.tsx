import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';
import Image from 'next/image';
import React from 'react';

type BlogPost = {
  slug: string;
  title: string;
  publishedAt: string;
  authorName: string;
  imageUrl: string;
  authorImage: string;
  mainImage: { alt: string };
  body: PortableTextBlock[];
};

const fetchBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const query = `*[_type == "post" && slug.current == $slug] {
      "slug": slug.current,
      title,
      publishedAt,
      "imageUrl": mainImage.asset->url,
      mainImage { alt },
      body,
      "authorName": author->name,
      "authorImage": author->image.asset->url
    }`;
    const result = await client.fetch(query, { slug });
    return result?.[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};

export default async function BlogPostPage({
  params: rawParams,
}: {
  params: Promise<{ slug: string }>;
}) {
  const params = await rawParams;
  const { slug } = params;

  if (!slug) {
    return <div className="text-center text-red-500">Post not found</div>;
  }

  const blogPost = await fetchBlogPostBySlug(slug);

  if (!blogPost) {
    return <div className="text-center text-red-500">Post not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-5xl font-bold text-gray-900">{blogPost.title}</h1>
      <p className="text-lg text-gray-500">
        Published on {new Date(blogPost.publishedAt).toDateString()}
      </p>

      <div className="flex items-center space-x-4 mt-6">
        {blogPost.authorImage && (
          <Image
            src={blogPost.authorImage}
            alt={`${blogPost.authorName}'s photo`}
            className="rounded-full"
            width={70}
            height={70}
          />
        )}
        <p className="text-lg font-medium text-gray-700">{blogPost.authorName}</p>
      </div>

      {blogPost.imageUrl && (
        <div className="mt-8">
          <Image
            src={blogPost.imageUrl}
            alt={blogPost.mainImage?.alt || 'Blog image'}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
            width={1200}
            height={600}
          />
        </div>
      )}

      <div className="prose prose-xl mt-8">
        <PortableText value={blogPost.body} />
      </div>
    </div>
  );
}
