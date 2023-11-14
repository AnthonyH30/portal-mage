import React from 'react';
import municipality from '@/Data/Municipality.json'
import './styles.scss'

export default function Municipality() {

  const locals = municipality.municipality;

  return (
    <section className='municipality-wrapper'>
        <ul>
            {locals?.map(local => 
            <li className='municipality--card' key={local.name}>
              <figure className='card--image'>
                <img src={local.image_url} alt="imagem dos municípios" />
              </figure>
              <div className='card--content'>
                <p>{local.name}</p>
              </div>
            </li>)}
        </ul>
    </section>
  )
}
