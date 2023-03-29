import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import AboutUsPage from './pages/AboutUsPage';

describe('AboutUsPage', () => {
  it('Renders something', () => {
    //arange
    render(<AboutUsPage />);
    //act
    //expect
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    );
  });
});
