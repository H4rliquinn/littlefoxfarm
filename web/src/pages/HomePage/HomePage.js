// import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
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
            board applications starting in November. Contact the{' '}
            <a href="#manager">Barn Manager</a> for more details.
          </h2>
        </div>
        <div className="infoBox">
          <div>
            <h1>Welcome to Little Fox Farm</h1>
            <p>
              We are a beautiful equestrian facility spanning over 25+ acres
              approximately one hour from New York City. Our horses are kept in
              5 paddocks with 4 board fence lined with a hot wire. The barn has
              17 box stalls, with excellent ventilation.
            </p>
          </div>
          <img src={require('src/img/aisle.jpg')} alt="aisle" />
        </div>
        <div className="infoBox">
          <img src={require('src/img/indoor.jpg')} alt="indoor" />
          <div>
            <p>
              The indoor ring 72&apos;x160&apos; indoor ring w/viewing room,
              heated tack room, hot and cold wash stall, bathroom and laundry.
            </p>
            <p>
            <!--Update-->
              Outdoor ring measures approx. 100&apos;x200&apos; w/sand footing,
              2 gates and automatic sprinkler.
            </p>
            <p>
              <!--Update-->
              WiFi and smoke detectors in barns. Spectacular farmland with the
              Appalachian Trail nearby. 10 minutes from NJ Fairgrounds.
              Beautiful fruit trees adorn the property. A horse lover’s
              paradise!
            </p>
          </div>
        </div>
        <div className="infoBox">
          <div id="manager">
            <p>
              All board, lesson and training inquiries can be directed to:
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
          <img src={require('src/img/outdoor.jpg')} alt="outdoor" />
        </div>
      </main>
    </div>
  )
}

export default HomePage
