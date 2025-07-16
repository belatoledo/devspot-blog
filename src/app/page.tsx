import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/posts-api';
import { PostPreview } from '@/domain/posts/post';

function PostCard({ post }: { post: PostPreview }) {
  return (
    <li className="overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
      <Link href={`/posts/${post.id}`}>
        <Image
          src={post.coverImage}
          alt={`Capa do post ${post.title}`}
          width={400}
          height={200}
          className="w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold">{post.title}</h3>
          <p className="mt-2 text-gray-600">{post.excerpt}</p>
          <small className="mt-4 block text-gray-500">
            {post.date} - {post.author}
          </small>
        </div>
      </Link>
    </li>
  );
}

export default function Home() {
  const allPostsData = getAllPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold">DevSpot Blog</h1>
        <p className="mt-2 text-xl text-gray-700">
          Sua fonte de conhecimento sobre desenvolvimento de software.
        </p>
      </section>

      <section>
        {allPostsData.length > 0 ? (
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allPostsData.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">Nenhum post encontrado.</p>
        )}
      </section>
    </div>
  );
}
