import contact_config from '../contact.json';
import style_config from '../styles/config.json';

import Link from 'next/link'

export const Footer = () => {

  return (
    <>
        <footer>
            Created by <a href="https://kapic.io">Christopher Kapic</a>.
        </footer>
        <style jsx>
        {`
          footer {
              padding: 8px;
              background-color: ${style_config.secondary_background_color};
              color: ${style_config.secondary_text_color};
              text-align: center;
          }
        `}
        </style>
    </>
  )
}