import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData, PostMetadata } from '@/lib/posts';

function PostCard({ post }: { post: PostMetadata }) {
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
          <small className="mt-4 block text-gray-500">{post.date} - {post.author}</small>
        </div>
      </Link>
    </li>
  );
}

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold">DevSpot Blog</h1>
        <p className="text-xl text-gray-700 mt-2">
          Sua fonte de conhecimento sobre desenvolvimento de software.
        </p>
      </section>

      <section>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPostsData.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </div>
  );
}