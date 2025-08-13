import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import ProcessPage from './page';

expect.extend(toHaveNoViolations);

describe('Consulting Process page', () => {
  it('renders the main heading', () => {
    render(<ProcessPage />);
    expect(screen.getByRole('heading', { name: /process/i })).toBeInTheDocument();
  });

  it('renders all process steps', () => {
    render(<ProcessPage />);
    expect(screen.getByText('Discover')).toBeInTheDocument();
    expect(screen.getByText('Audit')).toBeInTheDocument();
    expect(screen.getByText('Plan')).toBeInTheDocument();
    expect(screen.getByText('Implement')).toBeInTheDocument();
    expect(screen.getByText('Sustain')).toBeInTheDocument();
  });

  it('renders step descriptions', () => {
    render(<ProcessPage />);
    expect(screen.getByText(/Understand goals, constraints, and current state/i)).toBeInTheDocument();
    expect(screen.getByText(/Codebase analysis, tests, reliability posture/i)).toBeInTheDocument();
    expect(screen.getByText(/Prioritized roadmap with quick wins/i)).toBeInTheDocument();
    expect(screen.getByText(/Refactors, tests, observability/i)).toBeInTheDocument();
    expect(screen.getByText(/Docs, runbooks, metrics tracking/i)).toBeInTheDocument();
  });

  it('renders step numbers', () => {
    render(<ProcessPage />);
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('Step 3')).toBeInTheDocument();
    expect(screen.getByText('Step 4')).toBeInTheDocument();
    expect(screen.getByText('Step 5')).toBeInTheDocument();
  });

  it('has proper list structure', () => {
    render(<ProcessPage />);
    const orderedList = screen.getByRole('list');
    expect(orderedList).toBeInTheDocument();
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(5);
  });

  it('has proper heading hierarchy', () => {
    render(<ProcessPage />);
    const mainHeading = screen.getByRole('heading', { level: 1 });
    expect(mainHeading).toHaveTextContent('Process');
    
    const stepHeadings = screen.getAllByRole('heading', { level: 2 });
    expect(stepHeadings).toHaveLength(5);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<ProcessPage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

