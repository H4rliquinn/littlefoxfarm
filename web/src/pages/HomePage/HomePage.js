// import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <div className="body">
      <header className="header">
        <div className="logoBox">
          <img src={require('src/img/logo.png')} alt="Logo" className="logo" />
        </div>
        <div className="titleBox">
          <h1 className="font2">LITTLE FOX FARM</h1>
          <h1 className="font3">LITTLE FOX FARM</h1>
          <h1 className="font4">LITTLE FOX FARM</h1>
        </div>
      </header>
      <main>
        <div className="infoBox">
          <div>
            <p>
              Little Fox Farm is a beautiful equestrian estate spanning over 25+
              acres approx. 1 hr from New York City. The barn has 17 stalls,
              indoor and outdoor rings. 4 paddocks w/4 board fence with
              electric.
            </p>
            <p>
              72&apos;x160&apos; indoor ring w/viewing room, heated tack room,
              hot or cold wash down, bath room and laundry.
            </p>
          </div>
          <img src={require('src/img/aisle.jpg')} alt="aisle" />
        </div>
        <div className="infoBox">
          <img src={require('src/img/indoor.jpg')} alt="indoor" />
          <div>
            <p>
              Outdoor ring measures approx. 100&apos;x200&apos; w/sand footing,
              2 gates and automatic sprinkler.
            </p>
            <p>
              WiFi and smoke detectors in barns. Spectacular farmland with the
              Appalachian Trail nearby. 10 minutes from NJ Fairgrounds.
              Beautiful fruit trees adorn the property. A horse lover’s
              paradise!
            </p>
          </div>
        </div>
        <div className="infoBox">
          <div>
            <p>
              We are excited to be accepting new boarders starting in November.
            </p>
            <p>
              Inquiries can be directed to:
              <br />
              <br />
              Kim Rother, Barn Manager
              <ul>
                <li>
                  Email:
                  <a href="mailto:skylandmanor@hotmail.com">
                    skylandmanor@hotmail.com
                  </a>
                </li>
                <li>Cell: 845-559-4899</li>
              </ul>
            </p>
          </div>
          <img src={require('src/img/outdoor.jpg')} alt="outdoor" />
        </div>
      </main>
    </div>
  )
}

export default HomePage
