import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

import style_config from '../styles/config.json'

export default function Prayers() {
  return (
    <>
      <Head>

      </Head>
      <Navbar />
      <main>
        <h1>The Rosary</h1>

        <h2>Symbolum Apostolicum</h2>
        <h3>The Creed</h3>
        <p>Credo in Deum, Patrem omnipotentem, creatorem caeli et terrae. Et in Iesum Christum, Filium eius unicum, Dominum nostrum, qui conceptus est de Spiritu Sancto, natus ex Maria Virgine, passus sub Pontio Pilato, crucifixus, mortuus et sepultus. Descendit ad inferos, tertia die resurrexit a mortuis. Ascendit ad caelos, sedet ad dextram Dei Patris omnipotentis. Inde venturus est iudicare vivos et mortuos. <em>Credo in Spiritum Sanctum, sanctam Ecclesiam catholicam, sanctorum communionem, remissionem peccatorum, carnis resurrectionem, vitam aeternam. Amen.</em></p>

        <h2>Pater Noster</h2>
        <h3>Our Father</h3>
        <p>Pater noster, qui es in caelis: Sanctificetur nomen tuum: Adveniat regnum tuum: Fiat voluntas tua, sicut in caelo, et in terra. <em>Panem nostrum quotidianum da nobis hodie: Et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris. Et ne nos inducas in tentationem, sed libera nos a malo. Amen.</em></p>

        <h2>Ave Maria</h2>
        <h3>Hail Mary</h3>
        <p>Ave Maria, gratia plena: Dominus tecum, benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus. <em>Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc et in hora mortis nostrae. Amen.</em></p>

        <h2>Gloria Patri</h2>
        <h3>Glory Be</h3>
        <p>Gloria Patri, et Filio, et Spiritui Sancto. <em>Sicut erat in principio, et nunc, et semper, et in saecula saeculorum. Amen.</em></p>

        <h2>Oratio Fatima</h2>
        <h3>Fatima Prayer</h3>
        <p>Domine Iesu, dimitte nobis debita nostra, salva nos ab igne inferiori, perduc in caelum omnes animas, praesertim eas quae misericordiae tuae maximae indigent.</p>
        
        {/* <h2>Oratio Fatima</h2> */}
        <h3>St. Michael Prayer</h3>
        <p>Sáncte Míchael Archángele, defénde nos in proélio, cóntra nequítiam et insídias diáboli ésto præsídium. Ímperet ílli Déus, súpplices deprecámur: tuque, prínceps milítiæ cæléstis, Sátanam aliósque spíritus malígnos, qui ad perditiónem animárum pervagántur in múndo, divína virtúte, in inférnum detrúde. Ámen.</p>

        <h2>Salve Regina</h2>
        <h3>Hail Holy Queen</h3>
        <p>Salve, Regina, mater misericordiae; vita, dulcedo et spes nostra, salve. Ad te clamamus exsules filii Hevae. Ad te suspiramus gementes et flentes in hac lacrimarum valle. Eia ergo, advocata nostra, illos tuos misericordes oculos ad nos converte. Et Iesum, benedictum fructum ventris tui, nobis post hoc exsilium ostende. O clemens, o pia, o dulcis Virgo Maria.</p>

        <p>V. Ora pro nobis, sancta Dei Genitrix.</p>
        <p>R. <em>Ut digni efficamur promissionibus Christi.</em></p>

        <h3>Final Prayer</h3>
        <p>[Oremus]</p>
        <p>Deus, cuius Unigenitus per vitam, mortem et resurrectionem suam nobis salutis aeternae praemia comparavit: concede, quaesumus; ut, haec mysteria sacratissimo beatae Mariae Virginis Rosario recolentes. et imitemur quod continent, et quod promittunt, assequamur. Per eundem Christum Dominum nostrum. Amen.</p>
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
          h2 {
            margin-bottom: 4px;
          }
          h3 {
            margin: 4px 0px;
          }
          p {
            line-height: 1.6;
            margin-top: 4px;
          }
        `}
      </style>
    </>
  )
}