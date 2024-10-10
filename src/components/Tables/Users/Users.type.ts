import { Users } from '../../../types';
import { TablePropsType } from '../Tables.type';

export type UsersPropsType = TablePropsType & {
  users: Users;
};
