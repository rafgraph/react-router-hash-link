import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.element.isRequired,
};

function App({ children }) {
  return (
    <div
      style={{
        fontFamily: 'helvetica neue, helvetica, sans-serif',
        fontWeight: '300',
        fontSize: '16px',
        letterSpacing: '0.025em',
        WebkitTextSizeAdjust: 'none',
        MozTextSizeAdjust: 'none',
        msTextSizeAdjust: 'none',
        textSizeAdjust: 'none',
      }}
    >
      {children}
    </div>
  );
}

App.propTypes = propTypes;

export default App;
