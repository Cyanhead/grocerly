import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('<Layout />', () => {
  const content =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aperiam incidunt consectetur culpa ? Sit exercitationem odit omnis cumque rem mollitia praesentium?';

  it('should render a div with "display: flex" and "flex-direction: col"', () => {
    render(<Layout.FlexCol>{content}</Layout.FlexCol>);

    expect(screen.getByText(content)).toHaveStyle({
      display: 'flex',
      'flex-direction': 'column',
    });
  });

  it('should render a div with "display: flex" and "flex-direction: row"', () => {
    render(<Layout.FlexRow>{content}</Layout.FlexRow>);

    expect(screen.getByText(content)).toHaveStyle({
      display: 'flex',
      'flex-direction': 'row',
    });
  });

  it('should render a div with "display: block"', () => {
    render(<Layout.Container>{content}</Layout.Container>);

    expect(screen.getByText(content)).not.toHaveStyle({
      display: 'flex',
      'flex-direction': 'row',
    });
    expect(screen.getByText(content)).toHaveStyle('display: block');
  });
});
