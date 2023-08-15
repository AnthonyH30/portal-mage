import React from 'react'
import './styles.scss'

export default function Header() {
  return (
    <header className='header'>
        <ul className='header--nav'>
          <li className='header--nav-title'> <img src='https://cdn.discordapp.com/attachments/773364102071975976/1140834824580517888/logo2.png' alt='logo magé' />Portal Magé</li>
          <li>Municipios</li>
          <li>Passeios</li>
          <li>Contato</li>
        </ul>
        <ul className='header--buttons'>
          <li>sei la</li>
          <li>Não sei</li>
        </ul>
    </header>
  )
}
