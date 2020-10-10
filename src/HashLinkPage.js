import React from 'react';
import PropTypes from 'prop-types';
import Interactive from 'react-interactive';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import objectAssign from 'object-assign';
import { Li, linkStyle } from './style';

const propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

function HashLinkPage({ location }) {
  const sectionStyle = {
    padding: '2.5vw 3.5vw 12vh 3.5vw',
    boxSizing: 'border-box',
    height: '100vh',
  };
  const h2Style = { fontSize: '22px' };
  const h3Style = { fontSize: '18px', marginTop: '2.5vh' };

  return (
    <div>
      <section style={objectAssign({ backgroundColor: '#E0E0E0' }, sectionStyle)} id="section-one">
        <h2 style={h2Style}>Section One</h2>
        <h3 style={h3Style}>Go to:</h3>
        <ul>
          <Li><Interactive as={HashLink} {...linkStyle} to="/">Home</Interactive></Li>
          <Li><Interactive as={HashLink} smooth {...linkStyle} to={`${location.pathname}#section-two`}>Section Two</Interactive></Li>
          <Li><Interactive as={HashLink} scroll={el => el.scrollIntoView({ behavior: 'smooth' })} {...linkStyle} to={`${location.pathname}#section-three`}>Section Three</Interactive></Li>
        </ul>
      </section>
      <section style={objectAssign({ backgroundColor: '#D0D0D0' }, sectionStyle)} id="section-two">
        <h2 style={h2Style}>Section Two</h2>
        <h3 style={h3Style}>Go to:</h3>
        <ul>
          <Li><Interactive as={HashLink} {...linkStyle} to="/">Home</Interactive></Li>
          <Li><Interactive as={HashLink} smooth {...linkStyle} to={`${location.pathname}#section-one`}>Section One</Interactive></Li>
          <Li><Interactive as={NavHashLink} smooth {...linkStyle} activeStyle={{ fontWeight: 'bold' }} to={`${location.pathname}#section-two`}>Section Two NavHashLink</Interactive></Li>
          <Li><Interactive as={HashLink} smooth {...linkStyle} to={`${location.pathname}#section-three`}>Section Three</Interactive></Li>
          <Li><Interactive as={HashLink} smooth {...linkStyle} to={`${location.pathname}#top`}>Top of Page</Interactive></Li>
        </ul>
      </section>
      <section style={objectAssign({ backgroundColor: '#C0C0C0' }, sectionStyle)} id="section-three">
        <h2 style={h2Style}>Section Three</h2>
        <h3 style={h3Style}>Go to:</h3>
        <ul>
          <Li><Interactive as={HashLink} {...linkStyle} to="/">Home</Interactive></Li>
          <Li><Interactive as={HashLink} smooth {...linkStyle} to={`${location.pathname}#section-one`}>Section One</Interactive></Li>
          <Li><Interactive as={HashLink} smooth {...linkStyle} to={`${location.pathname}#section-two`}>Section Two</Interactive></Li>
          <Li><Interactive as={NavHashLink} smooth {...linkStyle} activeStyle={{ fontWeight: 'bold' }} to={`${location.pathname}#section-three`}>Section Three NavHashLink</Interactive></Li>
          <Li><Interactive as={HashLink} smooth {...linkStyle} to="#top">Top of Page</Interactive></Li>
        </ul>
      </section>
    </div>
  );
}

HashLinkPage.propTypes = propTypes;

export default HashLinkPage;
