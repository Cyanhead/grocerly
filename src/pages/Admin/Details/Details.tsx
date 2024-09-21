import { DetailsPropsType } from './Details.type';
import {
  Divider,
  MenuWrapper,
  Image,
  ImageWrapper,
  P,
  Stats,
  StatsWrapper,
  Wrapper,
} from './Details.styled';
import { Edit3, MoreVertical } from 'lucide-react';
import { Icon, Menu } from '../../../components';

function Details({
  image,
  name,
  additionalInfo,
  stats,
  setShowEditModal,
}: DetailsPropsType) {
  return (
    <Wrapper data-testid="Details" $span={[2, 1]}>
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
      <MenuWrapper>
        <Menu
          options={[
            {
              label: 'Edit',
              onClick: () => setShowEditModal(true),
              icon: Edit3,
              type: 'button',
            },
            // {
            //   label: 'Delete',
            //   onClick: () => {},
            //   icon: Trash2,
            //   type: 'button',
            // },
          ]}
        >
          <Icon
            icon={MoreVertical}
            size={20}
            visuallyHidden="Product Menu"
            isIconStandalone
          />
        </Menu>
      </MenuWrapper>
    </Wrapper>
  );
}

export default Details;
