import * as React from 'react';
import { HashLink, NavHashLink } from 'react-router-hash-link';

export const HashLinkPage: React.VFC = () => {
  return (
    <div>
      <section style={{ backgroundColor: '#F0F0F0' }} id="section-one">
        <h2>Section One</h2>
        <h3>Go to:</h3>
        <ul>
          <li>
            <HashLink to="/">Home</HashLink>
          </li>
          <li>
            <HashLink smooth to={'/page#section-two'}>
              Section Two
            </HashLink>
          </li>
          <li>
            <HashLink
              // example of custom scroll function using the scroll prop
              scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
              to={'/page#section-three'}
            >
              Section Three
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={'/page#focusable-heading'}>
              Focusable Heading
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={'/page#focusable-input'}>
              Text Input
            </HashLink>
          </li>
        </ul>
      </section>
      <section style={{ backgroundColor: '#E0E0E0' }} id="section-two">
        <h2>Section Two</h2>
        <h3>Go to:</h3>
        <ul>
          <li>
            <HashLink to="/">Home</HashLink>
          </li>
          <li>
            <HashLink smooth to={'/page#section-one'}>
              Section One
            </HashLink>
          </li>
          <li>
            <NavHashLink
              smooth
              activeStyle={{ fontWeight: 'bold' }}
              to={'/page#section-two'}
            >
              Section Two NavHashLink
            </NavHashLink>
          </li>
          <li>
            <HashLink smooth to={'/page#section-three'}>
              Section Three
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={'/page#top'}>
              Top of Page
            </HashLink>
          </li>
        </ul>
        <h3 id="focusable-heading" tabIndex={-1}>
          This is a <code>h3</code> with a <code>tabindex</code> of{' '}
          <code>-1</code> (linked to from Section One)
        </h3>
        <input
          type="text"
          id="focusable-input"
          style={{
            backgroundColor: 'white',
            border: '1px solid black',
            borderRadius: '4px',
            margin: '10px 0',
            padding: '4px 6px',
            width: '50%',
          }}
        />
      </section>
      <section style={{ backgroundColor: '#D0D0D0' }} id="section-three">
        <h2>Section Three</h2>
        <h3>Go to:</h3>
        <ul>
          <li>
            <HashLink to="/">Home</HashLink>
          </li>
          <li>
            <HashLink smooth to={'/page#section-one'}>
              Section One
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={'/page#section-two'}>
              Section Two
            </HashLink>
          </li>
          <li>
            <NavHashLink
              smooth
              activeStyle={{ fontWeight: 'bold' }}
              to={'/page#section-three'}
            >
              Section Three NavHashLink
            </NavHashLink>
          </li>
          <li>
            <HashLink smooth to="#top">
              Top of Page
            </HashLink>
          </li>
        </ul>
      </section>
    </div>
  );
};
