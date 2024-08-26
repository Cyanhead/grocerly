import { screen } from '@testing-library/react';
import Carousel from './Carousel';
import { renderWithProviders } from '../../tests/testUtils';

const colors = [
  'red',
  'green',
  'blue',
  'black',
  'pink',
  'hotpink',
  'purple',
  'rebeccapurple',
  'red',
  'green',
  'blue',
  'black',
];

function Card({ color }: { color: string }) {
  return (
    <div
      aria-label="card"
      style={{
        backgroundColor: color,
        height: '200px',
        width: '100%',
      }}
    >
      {color} card
    </div>
  );
}

describe('<Carousel />', () => {
  function renderComponent() {
    renderWithProviders(<Carousel items={colors} card={Card} />, {
      providers: ['ThemeProvider'],
    });

    return {
      cards: screen.getAllByLabelText('card'),
    };
  }

  it('should render a carousel with the same number of cards as the passed items', () => {
    const { cards } = renderComponent();

    expect(cards).toHaveLength(colors.length);

    cards.forEach(card => {
      expect(card).toHaveStyle({
        width: '100%',
        height: '200px',
      });
      expect(card).toHaveAttribute('aria-label', `card`);
    });
  });
});
