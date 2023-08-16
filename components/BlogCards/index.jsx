import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import './styles.scss';

export default function BlogCards({blogPosts}) {
  return (
    <section className='blogCards'>
        {blogPosts?.map((post) => 
        <div className='blogCards--card'>
            <img className='blogCards--card-img' src={post?.image_url} alt={`imagem do post ${post?.title}`} />
            <div className='blogCards--card-content'>
                <p className='date'>{post?.creation_date}</p>
                <div className='title-container'>            
                    <h3 className='title'>{post?.title}</h3>
                    <FiArrowUpRight size={20} />
                </div>
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
