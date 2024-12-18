import { DetailsPropsType } from './Details.type';
import {
  MenuWrapper,
  Image,
  ImageWrapper,
  P,
  StatsWrapper,
  Wrapper,
  Row,
} from './Details.styled';
import { Edit3, MoreVertical } from 'lucide-react';
import { Divider, Icon, Menu } from '../../../components';
import { useAuthContext } from '../../../context';

function Details({
  type,
  image,
  name,
  additionalInfo,
  stats,
  setShowEditModal = () => {},
}: DetailsPropsType) {
  const { state } = useAuthContext();
  const isSuperAdmin = state.roles.superAdmin;

  return (
    <Wrapper data-testid="Details" $span={[2, 1]}>
      <ImageWrapper>
        <Image
          src={image}
          alt={`${type === 'product' ? 'product' : 'user'} image`}
        />
        <P $bold>{name}</P>
        <P style={type === 'user' ? { textTransform: 'lowercase' } : {}}>
          {additionalInfo}
        </P>
      </ImageWrapper>
      <Divider />
      <StatsWrapper>
        {stats.map((stat, index) => (
          <Row key={index}>
            <P key={stat.stat} $bold>
              <Icon icon={stat.icon} size={16} /> {stat.stat}
            </P>
            <P>{stat.value}</P>
          </Row>
        ))}
      </StatsWrapper>
      {type === 'product' && (
        <>
          {isSuperAdmin && (
            <MenuWrapper>
              {
                <Menu
                  options={[
                    {
                      label: 'Edit',
                      onClick: () => setShowEditModal(true),
                      icon: Edit3,
                      type: 'button',
                    },
                    // TODO: enable delete when it's ready
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
              }
            </MenuWrapper>
          )}
        </>
      )}
    </Wrapper>
  );
}

export default Details;
