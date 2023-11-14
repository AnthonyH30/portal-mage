import React from 'react'
import './styles.scss'
import Link from 'next/link'

const Logolink ="https://cdn.discordapp.com/attachments/809081452704432179/1174101880293576754/logo.png?ex=65665e96&is=6553e996&hm=46f94d3c65cb004f7ad668173aee5dc1c5cad0e7828b3c3990c7539c3f3c9517&"

export default function Header() {
  return (
    <header className='header'>
        <ul className='header--nav'>
          <Link href="/"><li className='header--nav-title'><img src={Logolink} />Portal Magé</li></Link>
          <Link href="/municipios"><li>Municípios</li></Link>
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
