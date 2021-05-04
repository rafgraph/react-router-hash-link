import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App } from './App';

describe('renders links', () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const links = container.getElementsByTagName('a');
  const hrefs = Object.values(links).map((link) => link.getAttribute('href'));

  test('renders link to the react router hash link repo', () => {
    expect(hrefs).toContain(
      'https://github.com/rafgraph/react-router-hash-link',
    );
  });
});
