import { UserInfoPropsType } from './UserInfo.type';
import { Layout } from '../../../components';
import { parseTimestamp } from '../../../helpers';
import { Card, Detail, Key, Title } from '../Profile.styled';

function UserInfo({
  name,
  email,
  address,
  roles,
  phone,
  createdAt,
  updatedAt,
  firstOrder,
  lastOrder,
}: UserInfoPropsType) {
  return (
    <Layout.Grid $cols={2} $gap={16}>
      {[
        {
          title: 'User',
          details: [
            { key: 'Name:', value: name },
            { key: 'Email Address:', value: email },
            { key: 'Admin Status:', value: roles.admin ? 'Yes' : 'No' },
          ],
        },
        {
          title: 'Contact',
          details: [
            { key: 'Phone:', value: phone || 'None' },
            { key: 'Address 1:', value: address[0] || 'None' },
            { key: 'Address 2:', value: address[1] || 'None' },
          ],
        },
        {
          title: 'Timestamps',
          details: [
            {
              key: 'Member Since:',
              value: parseTimestamp(createdAt, {
                hour: 'numeric',
                minute: 'numeric',
              }),
            },
            {
              key: 'Last Updated:',
              value:
                parseTimestamp(updatedAt, {
                  hour: 'numeric',
                  minute: 'numeric',
                }) ?? 'Never',
            },
            {
              key: 'First Order:',
              value:
                parseTimestamp(firstOrder, {
                  hour: 'numeric',
                  minute: 'numeric',
                }) ?? 'Never',
            },
            {
              key: 'Last Order:',
              value:
                parseTimestamp(lastOrder, {
                  hour: 'numeric',
                  minute: 'numeric',
                }) ?? 'Never',
            },
          ],
        },
      ].map(({ title, details }, index) => (
        <Card key={index}>
          <Title>{title}</Title>
          <Layout.FlexCol>
            {details.map(({ key, value }, i) => (
              <Detail key={i}>
                <Key>{key}</Key> {value}
              </Detail>
            ))}
          </Layout.FlexCol>
        </Card>
      ))}
    </Layout.Grid>
  );
}

export default UserInfo;
