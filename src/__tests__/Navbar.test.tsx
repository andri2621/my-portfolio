import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'; // Import Jest DOM matchers

import Navbar from '@/components/navbar/Navbar'; // Adjust the import path as needed

test('NavbarTop renders correctly', () => {
  // Render the NavbarTop component
  const { getByText } = render(<Navbar />);

  // Use queries from React Testing Library to check if specific content is present
  const logoText = getByText('Awandri');
  const navigationLink = getByText('Home'); // Adjust the text as per your navigation data

  // Assert that the logo and navigation link are present
  expect(logoText).toBeInTheDocument();
  expect(navigationLink).toBeInTheDocument();

  // You can add more assertions as needed
});
