'use client';
import React from 'react';
import styles from './rightbar.module.css';
import Image from 'next/image';
import Lottie from 'lottie-react';

const RightBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Lottie animationData="/astronaut.json" />
        </div>
      </div>
    </div>
  );
};

export default RightBar;
