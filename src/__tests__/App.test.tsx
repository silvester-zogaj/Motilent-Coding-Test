import { render, screen, fireEvent, cleanup } from '@testing-library/react';

import { App } from '../App';

afterEach(() => {
  cleanup();
});

describe('App', () => {
  render(<App />);
  it('should render all inputs', () => {
    const rows = screen.getByText('Rows');
    const columns = screen.getByText('Columns');
    expect(rows).toBeInTheDocument();
    expect(columns).toBeInTheDocument();
  });

  it('inputs should not be visible after Burger click', () => {
    render(<App />);
    const rows = screen.getByText('Rows');
    const columns = screen.getByText('Columns');
    fireEvent.click(screen.getByTestId('burger'));
    expect(rows).not.toBeVisible();
    expect(columns).not.toBeVisible();
  });
  it('should be visible again after clicking twice', () => {
    render(<App />);
    const rows = screen.getByText('Rows');
    const columns = screen.getByText('Columns');
    fireEvent.click(screen.getByTestId('burger'));
    fireEvent.click(screen.getByTestId('burger'));
    expect(rows).toBeVisible();
    expect(columns).toBeVisible();
  });
  it('should render grid container', () => {
    render(<App />);
    const element = screen.getByTestId('grid-container');
    expect(element).toBeInTheDocument();
  });
  it('should render grid item', () => {
    render(<App />);
    const element = screen.getByTestId('grid-item');
    expect(element).toBeInTheDocument();
  });
});
