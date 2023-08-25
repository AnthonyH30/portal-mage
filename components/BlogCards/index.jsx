import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import './styles.scss';
import Link from 'next/link';

export default function BlogCards({blogPosts}) {
  return (
    <section className='blogCards'>
        {blogPosts?.map((post) => 
        <div className='blogCards--card'>
            <img className='blogCards--card-img' src={post?.image_url} alt={`imagem do post ${post?.title}`} />
            <div className='blogCards--card-content'>
                <p className='date'>{post?.creation_date}</p>
                <Link style={{textDecoration: 'none', color: 'black'}} href={`posts/${post.slug}`}>            
                    <div className='title-container'>
                        <h3 className='title'>{post?.title}</h3>
                        <FiArrowUpRight size={20} />
                    </div>
                </Link>
                <p className='subtitle'>{post?.subtitle}</p>
                <ul className='tags'>
                    {post.tags.map((tag) => <li className='tag' key={tag}>{tag}</li>)}
                </ul>
            </div>
        </div>
        )}
    </section>
  )
}
