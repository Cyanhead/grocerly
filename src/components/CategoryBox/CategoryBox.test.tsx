import { screen } from '@testing-library/react';
import CategoryBox from './CategoryBox';
import { renderWithProviders } from '../../tests/testUtils';

describe('<CategoryBox />', () => {
  function renderComponent() {
    renderWithProviders(
      <CategoryBox heading="Test Category" items={[]} card={'symbol'} />,
      {
        providers: ['ThemeProvider'],
      }
    );

    return {
      heading: screen.getByRole('heading', { name: 'Test Category' }),
      categoryButtons: screen.getAllByRole('button', { hidden: true }),
    };
  }

  it('should render a section with a heading and a list of category buttons', () => {
    const { heading, categoryButtons } = renderComponent();

    expect(heading).toBeInTheDocument();
    categoryButtons.forEach(button => {
      expect(button).toBeInTheDocument();
    });
  });
});
