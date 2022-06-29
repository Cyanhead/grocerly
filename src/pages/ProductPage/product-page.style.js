import styled from 'styled-components';

const primary = props => props.theme.color.primary;
const primaryLite = props => props.theme.color.primaryLite;
const primaryHover = props => props.theme.color.primaryHover;
const white = props => props.theme.color.white;

const bold = props => props.theme.fontWght.bold;
const medium = props => props.theme.fontWght.medium;

const greyBorder = '1px solid rgba(0, 0, 0, 0.1)';

export const ProductPageContainer = styled.div`
  width: 100%;
`;

export const ProductPageWrap = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1200px;
  margin: 0 auto;
`;

export const ProductLanding = styled.div`
  display: flex;
  align-items: stretch;

  width: 100%;
`;

export const ProductPageLeft = styled.div`
  flex: 2;
  /* border: 1px solid black; */
`;

export const ProductImagePreviewWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: blanchedalmond; */

  padding: 16px;
`;

export const ProductImagePreview = styled.img`
  width: 100%;
  height: auto;
`;

export const ProductImageSlide = styled.div`
  display: flex;
  align-items: center;

  margin-top: 16px;

  /* border: 1px solid black; */
`;

export const ProductImageWrap = styled.div`
  margin-right: 10px;
  padding: 4px;

  border: 2px solid transparent;
  border: ${props => (props.active ? '2px solid #3BB77E' : '')};

  &:last-child {
    margin-right: 0;
  }
`;

export const ProductImage = styled.img`
  width: 80px;
  height: auto;
`;

export const ProductPageRight = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  padding: 10px 0;
  padding-left: 20px;
  /* border: 1px solid black; */
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductName = styled.h2`
  text-transform: capitalize;
`;

export const AddToWishlistBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductCategory = styled.p`
  text-transform: capitalize;
`;

export const ProductBrief = styled.p`
  border-top: ${greyBorder};
  margin: 8px 0;
  padding-top: 8px;
`;

export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: ${bold};
`;

export const QuantityWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;
`;

export const DiscountWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const OldPrice = styled.p`
  color: grey;

  font-weight: ${medium};
  text-decoration: line-through;
`;

export const DiscountPercent = styled.p`
  background-color: ${primaryLite};
  color: ${primary};

  padding: 4px 8px;
  margin-left: 16px;

  font-weight: ${medium};
`;

export const AddToCartBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${primary};
  color: ${white};

  width: 100%;
  margin-bottom: 16px;
  padding: 16px;
  border: none;
  outline: none;

  border-radius: 2px;

  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);

  &:hover {
    background-color: ${primaryHover};
  }
`;

export const BtnSpan = styled.span`
  flex: 1;
`;

export const Promotional = styled.div`
  border-top: ${greyBorder};
  padding-top: 8px;
`;

export const ProductDetailsWrap = styled.div`
  padding: 32px 0;
`;

export const ProductDetailsHeading = styled.h2`
  margin: 16px 0;
  padding-top: 16px;
  border-top: ${greyBorder};

  text-transform: capitalize;
`;

export const ProductDetails = styled.p``;

export const SimilarProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 32px 0;

  overflow-x: hidden;
`;

export const SimilarProductsHeading = styled.h2`
  margin: 16px 0;
  padding-top: 16px;
  border-top: ${greyBorder};

  text-transform: capitalize;
`;

export const SimilarProductsMarquee = styled.div`
  display: flex;
  align-items: center;

  white-space: nowrap;
  will-change: transform;
  /* animation: marquee 20s linear infinite; */
  animation: marquee 5s linear infinite;
  /* width: 140%; */

  &:hover {
    animation-play-state: paused;
  }
  @keyframes marquee {
    from {
      transform: translateX(5%);
    }
    // todo: tweak some more to allow more products and marquee restarts at last product
    to {
      transform: translateX(-10%);
    }
  }
`;
