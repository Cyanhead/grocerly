import { Roles } from '../../../context/auth/types';
import { User } from '../../../types';

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
  User,
  'name' | 'address' | 'roles' | 'updatedAt'
> & { phone: string };
