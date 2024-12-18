import { screen } from '@testing-library/react';
import PhotoGroup from './PhotoGroup';
import { renderWithProviders } from '../../tests/testUtils';

describe('<PhotoGroup />', () => {
  function renderComponent() {
    renderWithProviders(<PhotoGroup />, {
      providers: ['ThemeProvider'],
    });

    return {
      photoGroup: screen.getByRole('PhotoGroup'),
    };
  }

  it('should render PhotoGroup_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { photoGroup } = renderComponent();

    expect(photoGroup).toBeInTheDocument();

    // render(<PhotoGroup />);

    // expect(screen.getByRole('PhotoGroup')).toBeInTheDocument();
  });
});
