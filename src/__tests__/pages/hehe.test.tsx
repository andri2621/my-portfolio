import { render, screen } from '@testing-library/react';

import TesPage from '@/app/(main)/jest-tes/page';

describe('Homepage', () => {
  it('renders the Components', () => {
    render(<TesPage />);

    const text = screen.getByText(/Tes Page For Jest/i);

    expect(text).toBeInTheDocument();
  });
});
