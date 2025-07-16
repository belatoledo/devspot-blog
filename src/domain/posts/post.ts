// Define a estrutura de um objeto Post
export type Post = {
  id: string;
  title: string;
  date: string;
  author: string;
  coverImage: string;
  excerpt: string;
  contentHtml: string;
};

export type PostPreview = Omit<Post, 'contentHtml'>;
