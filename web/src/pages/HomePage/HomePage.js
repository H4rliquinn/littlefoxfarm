// import { Link, routes } from '@redwoodjs/router'
import img from '../../img/cac9558f139212d6e1df03aaeaa75a1d230a833a_big.jpg'
const HomePage = () => {
  return (
    <>
      <header className="header">
        <img src="#" alt="Logo" />
        <h1>LITTLE FOX FARM</h1>
      </header>
      <main>
        <img src={img} alt="Farm Overview" width="400px" />

        <p className="infoBox">
          Little Fox Farm is a beautiful equestrian estate spanning over 25+
          acres approx. 1 hr from New York City. The barn has 17 stalls, indoor
          and outdoor rings. 4 paddocks w/4 board fence with electric.
        </p>
        <p className="infoBox">
          72&apos;x160&apos; indoor ring w/viewing room, heated tack room, hot
          or cold wash down, bath room and laundry.
        </p>
        <p className="infoBox">
          Outdoor ring measures approx. 100&apos;x200&apos; w/sand footing, 2
          gates and automatic sprinkler.
        </p>
        <p className="infoBox">
          WiFi and smoke detectors in barns. Spectacular farmland with the
          Appalachian Trail nearby. 10 minutes from NJ Fairgrounds. Beautiful
          fruit trees adorn the property. A horse lover’s paradise!
        </p>
        <p className="infoBox">
          We are excited to be accepting new boarders starting in November.
        </p>
        <p className="infoBox">
          Inquiries can be directed to Kim Rother at:
          <br />
          <a href="mailto:skylandmanor@hotmail.com">skylandmanor@hotmail.com</a>
          <p>Cell: 845-559-4899</p>
        </p>
      </main>
    </>
  )
}

export default HomePage
