import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {
  return (
    <header className='header'>
        <h1 className='logo'>
          <Link to="/" >
                CoinMe
          </Link>
        </h1>
        <div>
          <a href="https://github.com/devansh-m12" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/devansh-m12/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <p>Made by Devansh 🤠</p>
        </div>
    </header>
  )
}