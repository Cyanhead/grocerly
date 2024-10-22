import { Circle, Group, Image, Row } from './PhotoGroup.styled';
import { PhotoGroupPropsType } from './PhotoGroup.type';
import defaultPhoto from '../../assets/images/default_product.svg';

function PhotoGroup({ photos }: PhotoGroupPropsType) {
  switch (photos.length) {
    case 0:
      return null;
    case 1:
      return <Image src={photos[0] || defaultPhoto} />;
    case 2:
      return (
        <Row>
          <Image src={photos[0] || defaultPhoto} />
          <Image src={photos[1] || defaultPhoto} />
        </Row>
      );
    case 3:
      return (
        <Group $gap="0px">
          <Row>
            <Image src={photos[0] || defaultPhoto} />
          </Row>
          <Row>
            <Image src={photos[1] || defaultPhoto} />
            <Image src={photos[2] || defaultPhoto} />
          </Row>
        </Group>
      );
    case 4:
      return (
        <Group>
          <Row>
            <Image src={photos[0] || defaultPhoto} />
            <Image src={photos[1] || defaultPhoto} />
          </Row>
          <Row>
            <Image src={photos[2] || defaultPhoto} />
            <Image src={photos[3] || defaultPhoto} />
          </Row>
        </Group>
      );

    default:
      return (
        <Group>
          <Row>
            <Image src={photos[0] || defaultPhoto} />
            <Image src={photos[1] || defaultPhoto} />
          </Row>
          <Row>
            <Image src={photos[3] || defaultPhoto} />
            <Circle>+{photos.length - 4}</Circle>
          </Row>
        </Group>
      );
  }
}

export default PhotoGroup;
