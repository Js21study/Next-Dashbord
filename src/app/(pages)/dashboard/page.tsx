import Card from '@/app/ui/dashboard/card/card';
import React from 'react';
import styles from '../../ui/dashboard/dashboard.module.css';
import RightBar from '@/app/ui/dashboard/rightbar/rightbar';
import Transactions from '@/app/ui/dashboard/transactions/transactions';
import Chart from '@/app/ui/dashboard/chart/chart';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard desc',
  icons:
    'https://static.vecteezy.com/system/resources/thumbnails/025/220/125/small_2x/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg',
};

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
};

export default Dashboard;
