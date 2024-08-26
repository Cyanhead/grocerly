import styled from 'styled-components';
import { getBreakpoint, getColor } from '../../theme';

export const Container = styled.header`
  width: 100%;
  background-color: ${getColor('white')};

  position: sticky;
  top: 0;
  z-index: 3;
`;

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  max-width: 1280px;
  margin: 0 auto;
`;

export const TopRow = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  border-bottom: 1px solid rgba(173, 173, 173, 0.2);
  padding: 8px 16px;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    padding: 12px 24px;
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    padding: 16px 40px;
  }
`;

export const WishlistAndCart = styled.div`
  display: none;

  @media screen and (min-width: ${getBreakpoint('xl')}) {
    display: flex;
  }
`;

export const BottomRow = styled.nav`
  display: none;
  justify-content: space-between;

  padding: 8px 16px;
  border-bottom: 1px solid rgba(173, 173, 173, 0.2);

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    display: flex;
    padding: 16px 40px;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  list-style-type: none;
`;
