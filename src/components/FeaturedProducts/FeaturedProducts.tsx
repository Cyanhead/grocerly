import React from 'react';
import Preview from '../Preview';

// todo: feature not yet imlpemented

const FeaturedProducts = () => {
  const FeaturedProductGenerator = () => {
    return (
      <>
        <p>featured</p>
      </>
    );
  };

  return (
    <>
      <Preview heading="featured products">
        <FeaturedProductGenerator />
      </Preview>
    </>
  );
};

export default FeaturedProducts;
