import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className='footer' style={{display:'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '10vh'
                                    }} >
    <a href="https://github.com/devansh-m12" target="_blank" rel="noopener noreferrer">
      <FaGithub size={24} />
    </a>
    <a href="https://www.linkedin.com/in/devansh-m12/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={24} />
    </a>
    <p>Made by Devansh Mahant</p>
    <p>Made in India with ❤️ </p>
  </footer>
);

export default Footer;