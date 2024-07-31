export interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  img?: string;
  isAdmin?: boolean;
  isActive?: boolean;
  phone?: string;
  address?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
