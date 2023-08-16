import Header from '@/components/Header';
import BlogTitle from '@/components/BlogTitle';
import MainPost from '@/components/MainPost';
import BlogPost from '@/Data/BlogPosts.Json'

export default function Home() {

  const firstPost = BlogPost.BlogPost[0];

  return (
    <main>
      <Header />
      <BlogTitle />
      <MainPost firstPost={firstPost} />
    </main>
  )
}
