import { User } from '../../../types';
import { TablePropsType } from '../Tables.type';

export type UsersPropsType = TablePropsType & {
  users: User[];
};
