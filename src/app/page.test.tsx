import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home page', () => {
  it('renders the primary headline', () => {
    render(<Home />);
    expect(screen.getByText(/Build with confidence/i)).toBeInTheDocument();
  });
});
