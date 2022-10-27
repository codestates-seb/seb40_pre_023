import React, { useEffect, useState } from 'react';
import { Container, Categories, Categoriy, SocialsAndCopy } from './style';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const [needFooter, setNeedFooter] = useState(true);

  useEffect(() => {
    if (
      location.pathname === '/' ||
      location.pathname.indexOf('questions') !== -1 ||
      location.pathname.indexOf('answers') !== -1
    ) {
      setNeedFooter(true);
    } else {
      setNeedFooter(false);
    }
  }, [location, needFooter]);

  return (
    <Container className={needFooter ? '' : 'remove'}>
      <Link to="/">
        <svg aria-hidden="true" width="32" height="37" viewBox="0 0 32 37">
          <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
          <path
            d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
            fill="#F48024"
          ></path>
        </svg>
      </Link>
      <Categories>
        <Categoriy>
          <p>STACK OVERFLOW</p>
          <ul>
            <li>
              <Link to="/">Questions</Link>
            </li>
            <li>Help</li>
          </ul>
        </Categoriy>
        <Categoriy>
          <p>PRODUCTS</p>
          <ul>
            <li>Teams</li>
            <li>Advertising</li>
            <li>Collectives</li>
            <li>Talent</li>
          </ul>
        </Categoriy>
        <Categoriy>
          <p>COMPANY</p>
          <ul>
            <li>About</li>
            <li>Press</li>
            <li>Work Here</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
            <li>Cookis Settings</li>
            <li>Cookis Policy</li>
          </ul>
        </Categoriy>
        <Categoriy>
          <p>STACK EXCHANGE NETWORK</p>
          <ul>
            <li>Technology</li>
            <li>Culture &#38; recreation</li>
            <li>Life &#38; arts</li>
            <li>Science</li>
            <li>Professional</li>
            <li>Business</li>
            <li>API</li>
            <li>Data</li>
          </ul>
        </Categoriy>
      </Categories>
      <SocialsAndCopy>
        <li>
          <ul>
            <li>Blog</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </li>
        <li>
          Site design / logo © 2022 Stack Exchange Inc; user contributions
          licensed under CC BY-SA. rev 2022.10.25.33519
        </li>
      </SocialsAndCopy>
    </Container>
  );
};

export default Footer;
