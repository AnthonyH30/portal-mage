import React from 'react';
import BlogPost from '@/Data/BlogPosts.json';

export default function BlogPostPage({params}) {

    const slug = params.slug
    const BlogPosts = BlogPost.BlogPost

    const filteredPosts = BlogPosts.filter((post) => post.slug == slug)
    const currentPost= filteredPosts[0]

    console.log(currentPost)

  return (
    <div style={{fontSize: '5rem'}}>{currentPost.title}</div>
  )
}
