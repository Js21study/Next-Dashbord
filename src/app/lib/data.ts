import { IProduct } from '../@types/Product';
import { IUser } from '../@types/User';
import { Product, User } from './models';
import { connectToDB } from './utils';

interface FetchUsersResponse {
  count: number;
  users: IUser[];
}

interface FetchProductsResponse {
  count: number;
  products: IProduct[];
}

// Function to fetch users
export const fetchUsers = async (q: string, page: number): Promise<FetchUsersResponse> => {
  const regex = new RegExp(q, 'i');
  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await User.countDocuments({ username: { $regex: regex } });
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch users!');
  }
};

// Function to fetch a single user
export const fetchUser = async (id: string): Promise<IUser | null> => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch user!');
  }
};

// Function to fetch products
export const fetchProducts = async (q: string, page: number): Promise<FetchProductsResponse> => {
  const regex = new RegExp(q, 'i');
  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await Product.countDocuments({ title: { $regex: regex } });
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch products!');
  }
};

// Function to fetch a single product
export const fetchProduct = async (id: string): Promise<IProduct | null> => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch product!');
  }
};

// Define types for dummy data
interface Card {
  id: number;
  title: string;
  number: number;
  change: number;
}

// DUMMY DATA
export const cards: Card[] = [
  {
    id: 1,
    title: 'Total Users',
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: 'Stock',
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: 'Revenue',
    number: 6.642,
    change: 18,
  },
];
