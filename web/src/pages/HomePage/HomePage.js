// import { Link, routes } from '@redwoodjs/router'
import { gsap } from 'gsap'
import { useEffect } from 'react'

const HomePage = () => {
  useEffect(() => {
    gsap.from('.logoBox', { duration: 2.5, opacity: 0, x: 700 })
    // gsap.to('.logoBox', { duration: 1, x: 300 })
    // gsap.to('.logoBox', {
    //   keyframes: [
    //     { x: '-=3', duration: 0.03 },
    //     { x: '+=3', duration: 0.03 },
    //   ],
    //   repeat: 4,
    //   delay: 2.5,
    // })
    gsap.from('.infoBox', { duration: 2.5, y: -150 })
    gsap.from('.alertBox', { opacity: 0, duration: 1.5, delay: 2.8 })
  }, [])

  return (
    <div className="body">
      <header className="header">
        <div className="logoBox">
          <img src={require('src/img/logo.png')} alt="Logo" className="logo" />
        </div>
        <div className="titleBox"></div>
      </header>
      <main>
        <div className="alertBox">
          <h2>
            We are excited to announce our grand opening and will be accepting
            boarding applications starting in December.
            <br />
            <br />
            Contact the
            <a href="#manager"> Barn Manager</a> for more details.
          </h2>
        </div>
        <div className="infoBox">
          <div>
            <h1>Welcome to Little Fox Farm</h1>
            <p>
              Little Fox Farm is a small, exlusive equestrian facility spanning
              over 25 acres approximately one hour from New York City. Our
              horses are turned out in 6 paddocks with 4 board fencing. We are
              looking to build into a small but vibrant equestian community in
              the heart of Sussex County. The barn has 17 box box stalls with
              excellent ventilation.
            </p>

            <p>
              The main barn area also includes a heated tack room, bathroom, and
              laundry facilities. Accessible hot and cold water wash stall.
              Smoke detectors are located throughout the barn and the full
              property is a no-smoking area for safety.
            </p>
          </div>
          <div className="imageBox">
            <img src={require('src/img/aisle.jpg')} alt="aisle" />
          </div>
        </div>
        <div className="infoBox">
          <div className="imageBox">
            <img src={require('src/img/indoor.jpg')} alt="indoor" />
          </div>
          <div>
            <p>
              Our indoor ring is 72&apos; x 160&apos; with a viewing lounge at
              one end. Our outdoor ring measures approx. 100&apos; x 200&apos;
              w/sand footing, 2 gates and automatic sprinkler system.
            </p>
            <p>
              We are conveniently located close to the Appalachian Trail, Sussex
              Branch and Paulinskill rail trails, and ten minutes from the
              Sussex County Fairgrounds, home of the Sussex County Farm and
              Horse Show.
            </p>
          </div>
        </div>
        <div className="infoBox">
          <div id="manager">
            <p>
              Owners reside on site. All board, lesson and training inquiries
              can be directed to:
              <br />
              <br />
              Kim Rother, Barn Manager
              <ul>
                <li>
                  Email:&nbsp;
                  <a href="mailto:skylandmanor@hotmail.com">
                    skylandmanor@hotmail.com
                  </a>
                </li>
                <li>Cell: 845-559-4899</li>
              </ul>
            </p>
          </div>
          <div className="imageBox">
            <img src={require('src/img/outdoor.jpg')} alt="outdoor" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
