import { screen } from '@testing-library/react';
import Banner from './Banner';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<Banner />', () => {
  function renderComponent() {
    renderWithProviders(
      <Banner
        type="primary"
        tagline="sample tagline"
        title="Promotional Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        button={{
          text: 'buy now',
          link: '#',
        }}
        image={''}
      />,
      {
        providers: ['ThemeProvider', 'MemoryRouter'],
      }
    );

    return {
      heading: screen.getByRole('heading', { name: 'Promotional Title' }),
      link: screen.getByRole('link', { name: 'buy now' }),
    };
  }

  it('should render promotional banner with passed props', () => {
    const { heading, link } = renderComponent();
    expect(heading).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
});
