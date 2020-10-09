import React from 'react';
import Interactive from 'react-interactive';
import { HashLink } from 'react-router-hash-link';
import { Li, linkStyle, childLinkStyle } from './style';

function Home() {
  return (
    <div style={{ padding: '2.5vw 3.5vw 12vh 3.5vw' }}>
      <h1 style={{ fontSize: '24px' }}>React Router Hash Link Scroll</h1>
      <div style={{ marginTop: '2px', fontSize: '14px', color: '#A0A0A0' }}>
        <Interactive
          as="a"
          {...linkStyle}
          href="https://github.com/rafgraph/react-router-hash-link"
        >
          https://github.com/rafgraph/react-router-hash-link
        </Interactive>
      </div>

      <nav>
        <h3 style={{ fontSize: '18px', marginTop: '2.5vh' }}>Go to example page:</h3>
        <ul>
          <Li><Interactive as={HashLink} {...linkStyle} to="/foo#section-one">Section One</Interactive></Li>
          <Li><Interactive as={HashLink} {...linkStyle} to="/bar#section-two">Section Two</Interactive></Li>
          <Li><Interactive as={HashLink} {...linkStyle} to="/baz#section-three">Section Three</Interactive></Li>
        </ul>
      </nav>

      <div style={{ fontSize: '12px', marginTop: '10vh', color: '#A0A0A0' }}>
        <div>
          <Interactive
            as="a"
            interactiveChild
            focus={{}}
            touchActive={{}}
            touchActiveTapOnly
            href="https://github.com/rafgraph/spa-github-pages"
          >
            Site built with {' '}
            <span {...childLinkStyle}>
              Single Page Apps for GitHub Pages
            </span>
          </Interactive>
        </div>
      </div>
    </div>
  );
}

export default Home;
