import React, { PropTypes } from 'react';
import Interactive from 'react-interactive';
// import { Link } from 'react-router-dom';
import { HashLink as HLink } from './HashLink';
import objectAssign from 'object-assign';
import { li, linkStyle } from './style';

const propTypes = {
  location: PropTypes.object.isRequired,
};

// function hashLinkScroll() {
//   console.log(window.location.hash);
//   // Push onto callback queue so it runs after the DOM is updated,
//   setTimeout(() => {
//     const { hash } = window.location;
//     if (hash !== '') {
//       const id = hash.replace('#', '');
//       const element = document.getElementById(id);
//       if (element) element.scrollIntoView();
//     }
//   }, 0);
// }
//
// // Could wrap Link component to add hash link scroll functionality,
// // PROB THIS ONE-> or, in RRv4 add to link component (would have to know if using BrowserRouter)
// // or, add to BrowserRouter componentDidUpdate (if it's updated every time a link is clicked)
// // Note that the issue is caused by calling preventDefault in Link component
//
// // THIS WORKS and for back/forward navigation too!!!
// class HLink extends React.Component {
//   render() {
//     return (
//       <Link {...this.props} onClickCapture={hashLinkScroll} />
//     );
//   }
// }

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
          {li(<Interactive as={HLink} {...linkStyle} to="/">Home</Interactive>)}
          {li(<Interactive as={HLink} {...linkStyle} to={`${location.pathname}#section-two`}>Section Two</Interactive>)}
          {li(<Interactive as={HLink} {...linkStyle} to={`${location.pathname}#section-three`}>Section Three</Interactive>)}
        </ul>
      </section>
      <section style={objectAssign({ backgroundColor: '#D0D0D0' }, sectionStyle)} id="section-two">
        <h2 style={h2Style}>Section Two</h2>
        <h3 style={h3Style}>Go to:</h3>
        <ul>
          {li(<Interactive as={HLink} {...linkStyle} to="/">Home</Interactive>)}
          {li(<Interactive as={HLink} {...linkStyle} to={`${location.pathname}#section-one`}>Section One</Interactive>)}
          {li(<Interactive as={HLink} {...linkStyle} to={`${location.pathname}#section-three`}>Section Three</Interactive>)}
        </ul>
      </section>
      <section style={objectAssign({ backgroundColor: '#C0C0C0' }, sectionStyle)} id="section-three">
        <h2 style={h2Style}>Section Three</h2>
        <h3 style={h3Style}>Go to:</h3>
        <ul>
          {li(<Interactive as={HLink} {...linkStyle} to="/">Home</Interactive>)}
          {li(<Interactive as={HLink} {...linkStyle} to={`${location.pathname}#section-one`}>Section One</Interactive>)}
          {li(<Interactive as={HLink} {...linkStyle} to={`${location.pathname}#section-two`}>Section Two</Interactive>)}
        </ul>
      </section>
    </div>
  );
}

HashLinkPage.propTypes = propTypes;

export default HashLinkPage;
