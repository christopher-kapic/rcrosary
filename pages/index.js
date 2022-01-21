import Head from 'next/head'
import { Navbar } from '../components/Navbar'

import style_config from '../styles/config.json'

export default function Home() {
  return (
    <>
      <Head>

      </Head>
      <Navbar />
      <main>
        <h2>About</h2>
          <p>RosaryRC&aposs purpose is to encourage the laity to pray the Rosary in Latin. We have seen bishops target priests who say the Traditional Latin Mass. Please pray for the preservation of the Traditional Latin Mass, and teach others about it, in part by teaching them the universal language of Holy Mother Church—Latin.</p>
        <h2 id="schedule">Schedule</h2>
      </main>
      <style jsx>
        {`
          main {
            background-color: ${style_config.primary_background_color};
            max-width: 800px;
            display: block;
            margin: auto;
            padding: 28px;
          }
        `}
      </style>
    </>
  )
}
