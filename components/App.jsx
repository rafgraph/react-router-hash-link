import { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.element.isRequired,
};

function App({ children }) {
  return children;
}

App.propTypes = propTypes;

export default App;
