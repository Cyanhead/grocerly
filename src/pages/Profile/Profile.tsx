import { LogOut, Mail, Package, User, UserCog } from 'lucide-react';
import {
  SidebarButton,
  Container,
  Content,
  Detail,
  Heading,
  Sidebar,
  Wrapper,
} from './Profile.styled';
import { Button, Icon, Layout, Loader } from '../../components';
import { useState } from 'react';
import { useAuthContext } from '../../context';
import { useGetSingleUser, useLogoutUser } from '../../hooks';
import EditUser from './EditUser';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';
import Orders from './Orders';

function Profile() {
  const [activeTab, setActiveTab] = useState(0);
  const [showEditUser, setShowEditUser] = useState(false);

  const { state } = useAuthContext();
  const { user } = state;
  const { user: userData } = useGetSingleUser(user ? user.uid : '');

  if (!userData) return <Loader fullscreen />; // TEST

  const { id, name, address, roles, phone } = userData;

  const tabs = [
    { name: 'account', icon: User },
    { name: 'orders', icon: Package },
    { name: 'inbox', icon: Mail },
  ];

  const renderTabContent = () => {
    if (activeTab === 0) {
      return <UserInfo {...userData} />;
    }

    if (activeTab === 1) {
      return <Orders userId={id} />;
    }

    return <Detail>Feature coming soon.</Detail>;
  };

  return (
    <Container data-testid="Profile">
      <Wrapper>
        <Sidebar>
          <ul>
            {tabs.map(({ name, icon }, index) => (
              <li key={index}>
                <SidebarButton
                  $variant="normal"
                  $active={activeTab === index}
                  onClick={() => setActiveTab(index)}
                >
                  <Icon icon={icon} />
                  {name}
                </SidebarButton>
              </li>
            ))}
          </ul>
          <ul>
            {roles.admin && (
              <li>
                <SidebarButton as={Link} to="/admin" $variant="normal">
                  <Icon icon={UserCog} />
                  Admin
                </SidebarButton>
              </li>
            )}
            <li>
              <SidebarButton $variant="normal" onClick={useLogoutUser}>
                <Icon icon={LogOut} />
                Logout
              </SidebarButton>
            </li>
          </ul>
        </Sidebar>
        <Content>
          <Layout.FlexRow
            $justify="space-between"
            $align="center"
            style={{ height: '56px' }}
          >
            <Heading>{tabs[activeTab].name}</Heading>
            {activeTab === 0 && (
              <Button $variant="normal" onClick={() => setShowEditUser(true)}>
                Edit
              </Button>
            )}
          </Layout.FlexRow>
          {renderTabContent()}
          {showEditUser && (
            <EditUser
              userId={user?.uid ?? ''}
              editableUserData={{
                name,
                isAdmin: roles.admin,
                phone,
                address,
                roles,
              }}
              setShowEditUser={setShowEditUser}
            />
          )}
        </Content>
      </Wrapper>
    </Container>
  );
}

export default Profile;
