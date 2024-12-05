import { screen } from '@testing-library/react';
import UserInfo from './UserInfo';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<UserInfo />', () => {
  function renderComponent() {
    renderWithProviders(<UserInfo />, {
      providers: ['ThemeProvider'],
    });

    return {
      userInfo: screen.getByRole('UserInfo'),
    };
  }

  it('should render UserInfo_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { userInfo } = renderComponent();

    expect(userInfo).toBeInTheDocument();

    // render(<UserInfo />);

    // expect(screen.getByRole('UserInfo')).toBeInTheDocument();
  });
});
