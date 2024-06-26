'use client';
import React from 'react';
import Lottie from 'lottie-react';
import AstronautLottie from '../../../../../public/astronaut.json';
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md';
import styles from './rightbar.module.css';

const RightBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Lottie animationData={AstronautLottie} style={{ opacity: '0.3' }} />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>🚀 Coming Soon</span>
          <h3 className={styles.title}>New server actions are available!</h3>
          <span className={styles.subtitle}>Boost your productivity</span>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
