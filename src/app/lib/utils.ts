import mongoose from 'mongoose';

interface IConnection {
  isConnected?: boolean;
}

export const connectToDB = async (): Promise<void> => {
  const connection: IConnection = {};

  try {
    if (connection.isConnected) return;
    const db: any = await mongoose.connect(process.env.MONGO_DB as string);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
  }
};
