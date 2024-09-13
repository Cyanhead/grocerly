import { DetailsPropsType } from './Details.type';
import Icon from '../../../components/Icon';
import {
  Divider,
  Image,
  ImageWrapper,
  P,
  Stats,
  StatsWrapper,
  Wrapper,
} from './Details.styled';
import { useState } from 'react';
import { Modal } from '../../../components';

function Details({ image, name, additionalInfo, stats }: DetailsPropsType) {
  const [showEditModal, setShowEditModal] = useState(false);
  return (
    <Wrapper data-testid="Details">
      <ImageWrapper>
        <Image src={image} alt="product image" />
        <P $bold>{name}</P>
        <P>{additionalInfo}</P>
      </ImageWrapper>
      <Divider />
      <StatsWrapper>
        {stats.map((stat, index) => (
          <Stats key={index}>
            <P key={stat.stat} $bold>
              <Icon icon={stat.icon} size={16} /> {stat.stat}
            </P>
            <P>{stat.value}</P>
          </Stats>
        ))}
      </StatsWrapper>
      <button onClick={() => setShowEditModal(true)}>Edit</button>
      {showEditModal && (
        <Modal closeModal={() => setShowEditModal(false)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Modal>
      )}
    </Wrapper>
  );
}

export default Details;
