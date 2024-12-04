import { Roles } from '../../../context/auth/types';
import { Users } from '../../../types';

export type EditUserPropsType = {
  userId: string;
  editableUserData: {
    name: string;
    isAdmin: boolean;
    phone: string;
    address: string[];
    roles: Roles;
  };
  setShowEditUser: React.Dispatch<React.SetStateAction<boolean>>;
};

export type UpdatedUserType = Pick<
  Users[0],
  'name' | 'address' | 'roles' | 'updatedAt'
> & { phone: string };
