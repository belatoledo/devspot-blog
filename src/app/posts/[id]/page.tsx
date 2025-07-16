import { getPostById, getAllPostIds } from '@/lib/posts-api';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPostIds();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const postData = await getPostById(params.id).catch(() => notFound());

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose lg:prose-xl mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight">
            {postData.title}
          </h1>
          <p className="mt-2 text-gray-500">
            {postData.date} por {postData.author}
          </p>
        </div>

        <Image
          src={postData.coverImage}
          alt={`Capa do post ${postData.title}`}
          width={800}
          height={400}
          className="mb-8 w-full rounded-lg shadow-lg"
        />

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
}
