export type BannerPropsType = {
  type: 'primary' | 'secondary';
  tagline: string;
  title: string;
  description: string;
  button: {
    text: string;
    link: string;
  };
  image: string;
};
