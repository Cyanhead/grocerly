import label1 from '../../assets/images/label1.svg';
import label2 from '../../assets/images/label2.svg';
import label3 from '../../assets/images/label3.svg';
import { Container, Image, ImageWrapper, Wrapper } from './Labels.styled';

const Labels = () => (
  <Container>
    <Wrapper>
      {[label1, label2, label3].map((img, index) => (
        <ImageWrapper key={index}>
          <Image src={img} alt="" />
        </ImageWrapper>
      ))}
    </Wrapper>
  </Container>
);

export default Labels;
