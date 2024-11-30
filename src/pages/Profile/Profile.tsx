import { LogOut, Mail, Package, User, UserCog } from 'lucide-react';
import {
  SidebarButton,
  Card,
  Container,
  Content,
  Detail,
  Heading,
  Key,
  Sidebar,
  Title,
  Wrapper,
} from './Profile.styled';
import { Button, Icon, Layout, Loader } from '../../components';
import { useState } from 'react';
import { useAuthContext } from '../../context';
import { useGetSingleUser, useLogoutUser } from '../../hooks';
import { parseTimestamp } from '../../helpers';
import EditUser from './EditUser';
import { Link } from 'react-router-dom';

function Profile() {
  const [activeTab, setActiveTab] = useState(0);
  const [showEditUser, setShowEditUser] = useState(false);

  const { state } = useAuthContext();
  const { user } = state;

  const { user: userData } = useGetSingleUser(user ? user.uid : '');

  if (!userData) return <Loader fullscreen />;
  const {
    name,
    email,
    address,
    roles,
    phone,
    createdAt,
    updatedAt,
    firstOrder,
  } = userData;

  const tabs = [
    {
      name: 'account',
      icon: User,
    },
    {
      name: 'orders',
      icon: Package,
    },
    {
      name: 'inbox',
      icon: Mail,
    },
  ];

  return (
    <Container data-testid="Profile">
      <Wrapper>
        <Sidebar>
          <ul>
            {tabs.map(({ name, icon }, index) => {
              return (
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
              );
            })}
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

          {activeTab === 0 && (
            <Layout.Grid $cols={2} $gap={16}>
              <Card>
                <Title>User</Title>
                <Layout.FlexCol>
                  <Detail>
                    <Key>Name:</Key> {name}
                  </Detail>
                  <Detail>
                    <Key>Email Address:</Key> {email}
                  </Detail>
                  <Detail>
                    <Key>Admin Status:</Key> {roles.admin ? 'Yes' : 'No'}
                  </Detail>
                </Layout.FlexCol>
              </Card>
              <Card>
                <Title>Contact</Title>
                <Layout.FlexCol>
                  <Detail>
                    <Key>Phone:</Key> {phone ?? 'None'}
                  </Detail>
                  <Detail>
                    <Key>Address 1:</Key> {address[0] ?? 'None'}
                  </Detail>
                  <Detail>
                    <Key>Address 2:</Key> {address[1] ?? 'None'}
                  </Detail>
                </Layout.FlexCol>
              </Card>
              <Card>
                <Layout.FlexCol>
                  <Title>Timestamps</Title>
                  <Detail>
                    <Key>Member Since:</Key> {parseTimestamp(createdAt)}
                  </Detail>
                  <Detail>
                    <Key>Last Updated:</Key>{' '}
                    {parseTimestamp(updatedAt) ?? 'Never'}
                  </Detail>
                  <Detail>
                    <Key>First Order:</Key>{' '}
                    {parseTimestamp(firstOrder) ?? 'Never'}
                  </Detail>
                </Layout.FlexCol>
              </Card>
            </Layout.Grid>
          )}
          {showEditUser && (
            <EditUser
              userId={user?.uid ?? ''}
              editableUserData={{
                name,
                isAdmin: roles.admin,
                phone: phone ?? '',
                address,
              }}
              setShowEditUser={setShowEditUser}
            />
          )}
          {activeTab !== 0 && <Detail>Feature coming soon.</Detail>}
        </Content>
      </Wrapper>
    </Container>
  );
}

export default Profile;
