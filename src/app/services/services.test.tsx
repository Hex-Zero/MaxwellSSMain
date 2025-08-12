import { render, screen } from '@testing-library/react';
import ServicesPage from './page';

describe('Services page', () => {
  it('lists Code Quality Audit', () => {
    render(<ServicesPage />);
    expect(screen.getByText(/Code Quality Audit/i)).toBeInTheDocument();
  });
});
