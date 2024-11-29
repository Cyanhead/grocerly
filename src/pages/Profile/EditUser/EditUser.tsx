import { EditUserPropsType, UpdatedUserType } from './EditUser.type';
import { Button, Layout, Modal } from '../../../components';
import { Form, Input, Label } from './EditUser.styled';
import { useState } from 'react';
import { doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../../context/Firebase';
import { updateProfile } from 'firebase/auth';

function EditUser({
  userId,
  editableUserData,
  setShowEditUser,
}: EditUserPropsType) {
  const [isLoading, setIsLoading] = useState(false);
  const { name, isAdmin, phone, address } = editableUserData;
  const [editUserFormData, setEditUserFormData] = useState({
    name,
    isAdmin,
    phone,
    address,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    const userDocRef = doc(db, 'users', userId);

    const { isAdmin, ...rest } = editUserFormData;
    const updatedUser: UpdatedUserType = {
      ...rest,
      roles: {
        admin: isAdmin,
        user: true,
      },
      updatedAt: serverTimestamp(),
    };

    try {
      await updateDoc(userDocRef, updatedUser);
      setShowEditUser(false);
      setIsLoading(false);

      if (auth.currentUser === null) {
        console.error(
          'auth.currentUser is null. Could not update user profile.'
        );
        return;
      }

      await updateProfile(auth.currentUser, {
        displayName: editUserFormData.name,
      });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <Modal closeModal={() => setShowEditUser(false)}>
      <Form onSubmit={handleSubmit}>
        <Layout.Grid $cols={2} $gap={16}>
          <Layout.FlexCol>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              value={editUserFormData.name}
              onChange={e =>
                setEditUserFormData({
                  ...editUserFormData,
                  name: e.target.value,
                })
              }
              required
            />
          </Layout.FlexCol>

          <Layout.FlexCol>
            <Label htmlFor="isAdmin">Admin Status</Label>
            <Input
              id="isAdmin"
              type="checkbox"
              name="isAdmin"
              checked={editUserFormData.isAdmin}
              onChange={e =>
                setEditUserFormData({
                  ...editUserFormData,
                  isAdmin: e.target.checked,
                })
              }
            />
          </Layout.FlexCol>

          <Layout.FlexCol>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="text"
              name="phone"
              placeholder="Phone"
              value={editUserFormData.phone}
              onChange={e =>
                setEditUserFormData({
                  ...editUserFormData,
                  phone: e.target.value,
                })
              }
              required
            />
          </Layout.FlexCol>

          <Layout.FlexCol>
            <Label htmlFor="address1">Address 1</Label>
            <Input
              id="address1"
              type="text"
              name="address1"
              placeholder="Address 1"
              value={editUserFormData.address[0]}
              onChange={e =>
                setEditUserFormData({
                  ...editUserFormData,
                  address: [e.target.value, editUserFormData.address[1]],
                })
              }
              required
            />
          </Layout.FlexCol>

          <Layout.FlexCol>
            <Label htmlFor="address2">Address 2</Label>
            <Input
              id="address2"
              type="text"
              name="address2"
              placeholder="Address 2"
              value={editUserFormData.address[1]}
              onChange={e =>
                setEditUserFormData({
                  ...editUserFormData,
                  address: [editUserFormData.address[0], e.target.value],
                })
              }
            />
          </Layout.FlexCol>
        </Layout.Grid>
        <Button type="submit" style={{ marginTop: '16px' }}>
          {isLoading ? 'Updating...' : 'Update'}
        </Button>
      </Form>
    </Modal>
  );
}

export default EditUser;
