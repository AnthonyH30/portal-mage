import React from 'react'
import './styles.scss'

export default function MainPost({firstPost}) {

  return (
    <section className='poster'>
        <img className='poster--img' src={firstPost.image_url} alt={`imagem do post ${firstPost?.title}`} />
        <div className='poster--content'>
            <p className='poster--content-date'>{firstPost?.creation_date}</p>
            <h2 className='poster--content-title'>{firstPost?.title}</h2>
            <p className='poster--content-subtitle'>{firstPost?.subtitle}</p>
            <ul className='poster--content-tags'>
                {firstPost?.tags.map((tag) => <li className='tag' key={tag}>{tag}</li>)}
            </ul>
        </div>
    </section>
  )
}
