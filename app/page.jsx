import Header from '@/components/Header';
import BlogTitle from '@/components/BlogTitle';
import MainPost from '@/components/MainPost';
import BlogPost from '@/Data/BlogPosts.Json'
import BlogCards from '@/components/BlogCards';

export default function Home() {

  const posts = BlogPost.BlogPost;
  const firstPost = posts[0];

  return (
    <main>
      <Header />
      <BlogTitle />
      <MainPost firstPost={firstPost} />
      <BlogCards blogPosts={posts} />
    </main>
  )
}
