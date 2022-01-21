import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

import style_config from '../styles/config.json'

export default function Home() {
  return (
    <>
      <Head>
      <script defer data-domain="rcrosary.org" src="https://plausible.io/js/plausible.js"></script>
      <title>Latin Rosary</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <main>
        <h2>About</h2>
        <p>RosaryRC&#39;s purpose is to encourage the laity to pray the Rosary in Latin. We have seen bishops target priests who say the Traditional Latin Mass. Please pray for the preservation of the Traditional Latin Mass, and teach others about it, in part by teaching them the universal language of Holy Mother Church—Latin.</p>
        <p><em>The laity have not sworn a solemn vow of obedience; if you are a layperson, take the initiative to pray in Latin and demonstrate that the Traditions of the faith are important to you, including the language</em> and <em>the Traditional Mass.</em></p>

        <p>From Fulton Sheen:</p>
        <blockquote cite='https://www.churchpop.com/2019/09/07/who-will-save-our-future-church-abp-fulton-sheen-nails-it-with-this-one-powerful-quote/'>Who&#39;s going to save our Church? It&#39;s not our bishops, it&#39;s not our priests and it is not the religious. It is up to you, the people. You have the minds, the eyes and the ears to save the Church. Your mission is to see that the priests act like priests, your bishops act like bishops, and the religious act like religious.</blockquote>

        <h4>Why does the language in which we pray matter?</h4>
        <p>It is possible to pray to God in any language; Latin, specifically, is special for several reasons:</p>
        <ul>
          <li>Latin is one of the languages of Calvary (Latin, Greek, Hebrew/Aramaic). It is special in the Mass because the Mass is the re-presentation of the Lord's sacrifice on Calvary.</li>
          <li>Latin is especially hated by demons (a fact which is supported by the testimony of exorcists). [<a href="https://www.ncregister.com/blog/why-the-devil-hates-latin" target="_blank">Why the Devil Hates Latin</a>]</li>
          <li>Latin is a symbol of the universiality of the Roman Catholic Church—we are united in one language when we pray in Latin. [&#8220;Particular law remaining in force, the use of the Latin language is to be preserved in the Latin rites.&#8221; <a href="https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_en.html" target="_blank">Sacrosanctum Concilium</a>]</li>
        </ul>
        <h4>Which mysteries should I pray?</h4>
        <p>The Traditional schedule for the mysteries of the Rosary is the following:</p>
        <ul>
          <li>Sunday: Glorious (or that which the liturgical season dictates)</li>
          <li>Monday: Joyful</li>
          <li>Tuesday: Sorrowful</li>
          <li>Wednesday: Glorious</li>
          <li>Thursday: Joyful</li>
          <li>Friday: Sorrowful</li>
          <li>Saturday: Glorious</li>
        </ul>
        <p>There is some debate about whether or not the schedule should be changed to accomodate the Luminous mysteries, which were promulgated under Pope Saint John Paul II. RosaryRC encourages the faithful to pray according to the Traditional schedule because Mary requested St. Dominic to propagate her <em>Psalter</em>, and the Traditional mysteries make 150 Ave Marias, as there are 150 Psalms in the Psalter (the Rosary evolved from the tradition of praying the Psalms).</p>
        <h2 id="schedule">Schedule</h2>
        <p>I am planning on livestreaming Rosaries in Latin. When I begin, I will post a schedule here so that it is possible to see when I will be praying and when you can join. If you are interested in leading a Rosary in Latin, <a href="mailto:christopher@kapic.io">email me</a>. I am hoping to have groups of faithful praying the Rosary in Latin all around the world, and especially in my home country of the United States of America.</p>
      </main>
      <Footer />
      <style jsx>
        {`
          main {
            background-color: ${style_config.primary_background_color};
            max-width: 800px;
            display: block;
            margin: auto;
            padding: 28px;
          }
          a {
            text-decoration: underline;
          }
        `}
      </style>
    </>
  )
}
