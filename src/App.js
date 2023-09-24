import React, { useContext } from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Context } from './Context'

function App() {
  const { toggleNav, isNavOpen } = useContext(Context)

  return (
    <body className={isNavOpen ? 'nav-open' : ''}>
      <header>
        <div className='logo'>
          <img src='developervah.png' alt='teachervah' />
        </div>
        <button
          className='nav-toggle'
          aria-label='toggle navigation'
          onClick={toggleNav}
        >
          <span className='hamburger'></span>
        </button>
        <nav className='nav'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href='#home' className='nav__link' onClick={toggleNav}>
                Home
              </a>
            </li>
            <li className='nav__item'>
              <a href='#services' className='nav__link' onClick={toggleNav}>
                My Services
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' className='nav__link' onClick={toggleNav}>
                About Me
              </a>
            </li>
            <li className='nav__item' onClick={toggleNav}>
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
          Hi, I am <strong> Simon </strong>
        </h1>
        <p className='section__subtitle section__subtitle--intro'>
          Web-Developer
        </p>
        <img src='../images/vah.jpg' alt='image' className='intro__img' />
      </section>

      {/* My Services */}

      <section className='my-services' id='services'>
        <h2 className='section__title section__title--services'>What I do</h2>
        <div className='services'>
          <div className='service'>
            <h3>Web-development</h3>
            <p>
              As an aspiring web developer, my experience in IT is limited, but
              I am fueled by honesty and patience. My goal is to secure a job
              where I can work hard and apply the skills I have acquired through
              a personal project. Though lacking professional experience, I am
              eager to contribute and learn. Thank you for considering me.
            </p>
          </div>
          {/* Close Service */}
          <div className='service'>
            <h3>Teaching English</h3>
            <p>
              Experienced English teacher committed to providing quality
              education. Skilled in creating engaging lesson plans,
              incorporating interactive activities, and promoting effective
              language learning. Dedicated to helping students develop strong
              language skills in speaking, listening, reading, and writing.
              Passionate about fostering a supportive and inclusive learning
              environment.
            </p>
          </div>
          {/* Close Service */}
          {/* <div className='service'>
            <h3>Design</h3>
            <p>
              Competent designer with a strong passion for delivering
              exceptional visual solutions. Proficient in various design tools
              and software, including Adobe Creative Suite. Skilled in creating
              visually appealing graphics, layouts, and user interfaces.
              Dedicated to understanding client needs and translating them into
              creative designs that effectively communicate messages. Committed
              to staying updated with design trends and continuously refining
              skills.
            </p>
          </div> */}
          {/* Close Services */}
        </div>

        <a href='#work' className='btn'>
          My Work
        </a>
      </section>

      {/* About Me */}
      <section className='about-me' id='about'>
        <h2 className='section__title section__title--about'>Who I am</h2>
        <p className='section__subtitle section__subtitle--about'>
          Experienced Global English Teacher
        </p>
        <div className='about-me__body'>
          <p>
            I am an experienced English teacher with 5 years of teaching
            experience in China, Cambodia, and Moscow. Throughout my career, I
            have been dedicated to helping students learn and improve their
            English language skills.
          </p>
          <p>
            As an enthusiastic and dedicated educator, I am eager to continue
            making a difference in students' lives through the power of
            language.
          </p>
        </div>
        <img
          src='../images/Kampot.jpg'
          alt='Kids in Cambodia'
          className='about-me__img'
        />
      </section>

      {/* My Work */}

      <section className='my-work' id='work'>
        <h2 className='section__title section__title--work'>My Work</h2>
        <p className='section__subtitle section__subtitle--work'>
          A selection of my work
        </p>
        <div className='portfolio'>
          {/* Portfolio item 01 */}
          <Link className='portfolio__item' to={'/portfolio'}>
            <img src='../images/work01.jpg' alt='' className='portfolio__img' />
          </Link>

          {/* Portfolio item 02 */}
          <Link className='portfolio__item' to={'/game'}>
            <img src='../images/fast.png' alt='' className='portfolio__img' />
          </Link>

          {/* Portfolio item 03 */}
          <Link className='portfolio__item' to={'/shop'}>
            <img src='../images/ishop.jpg' alt='' className='portfolio__img' />
          </Link>

          {/* Portfolio item 04 */}
          <Link className='portfolio__item' to={'/cambodia'}>
            <img src='../images/kids.jpg' alt='' className='portfolio__img' />
          </Link>
        </div>
      </section>

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

// AiFillInstagram
// AiFillLinkedin
// AiFillTwitterSquare

export default App
