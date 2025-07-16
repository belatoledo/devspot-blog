import { getPostData, getAllPostIds } from '@/lib/posts';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id).catch(() => {
    notFound();
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose lg:prose-xl max-w-4xl mx-auto">
        <div className="mb-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight">{postData.title}</h1>
            <p className="text-gray-500 mt-2">{postData.date} por {postData.author}</p>
        </div>
        
        <Image
            src={postData.coverImage}
            alt={`Capa do post ${postData.title}`}
            width={800}
            height={400}
            className="w-full rounded-lg shadow-lg mb-8"
        />

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
}