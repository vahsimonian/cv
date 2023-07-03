import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'

function Portfolio() {
  return (
    <body>
      <header>
        <div className='logo'>
          <img src='developervah.png' alt='teachervah' />
        </div>
        <button className='nav-toggle' aria-label='toggle navigation'>
          <span className='hamburger'></span>
        </button>
        <nav className='nav'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href='#home' className='nav__link'>
                Home
              </a>
            </li>
            <li className='nav__item'>
              <a href='#services' className='nav__link'>
                My Services
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' className='nav__link'>
                About Me
              </a>
            </li>
            <li className='nav__item'>
              <a href='#work' className='nav__link'>
                My Work
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Introduction */}

      <section className='intro' id='home'>
        <h1 className='section__title section__title--intro'>
          Title <strong> project </strong>
        </h1>
        <p className='section__subtitle section__subtitle--intro'>
          A short subtitle
        </p>
        <img src='../images/work01.jpg' alt='image' className='intro__img' />
      </section>

      {/* <section className='intro' id='home'>
        <h1 className='section__title section__title--intro'>
          Hi, I am <strong> Simon </strong>
        </h1>
        <p className='section__subtitle section__subtitle--intro'>
          English Teacher
        </p>
        <img src='vah.jpg' alt='image' className='intro__img' />
      </section> */}

      {/* Footer */}

      <footer className='footer'>
        <a href='mailto:vahsimonian@gmail.com' className='footer__link'>
          vahsimonian@gmail.com
        </a>
        <ul className='social-list'>
          <li className='social-list__item'>
            <a
              href='http://twitter.com'
              className='social-list__link'
              target='_blank'
            >
              <AiFillTwitterSquare />
            </a>
          </li>
          <li className='social-list__item'>
            <a
              href='http://facebook.com'
              className='social-list__link'
              target='_blank'
            >
              <AiFillFacebook />
            </a>
          </li>
          <li className='social-list__item'>
            <a
              href='http://instagram.com'
              className='social-list__link'
              target='_blank'
            >
              <AiFillInstagram />
            </a>
          </li>
          <li className='social-list__item'>
            <a
              href='http://linked.in'
              className='social-list__link'
              target='_blank'
            >
              <AiFillLinkedin />
            </a>
          </li>
        </ul>
      </footer>
    </body>
  )
}

export default Portfolio
