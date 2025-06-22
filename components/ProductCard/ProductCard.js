import { useState } from 'react';
import styles from './ProductCard.module.css';
import Image from 'next/image';

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className={styles.productCard}>
      <Image src={product.image} alt={product.title} className={styles.productImage} height={250} width={250}/>
      <div className={styles.productDetails}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.desktopView}><p className={styles.signInText}>Sign in or Create an account to see pricing</p>
        <Image
        src={liked ? '/icons/red-heart.png' : '/icons/heart.png'}
        className={styles.heartIcon}
        onClick={() => setLiked(!liked)}
        alt="like"
        height={250} width={250}
      /></div>
        
      </div>
      
    </div>
  );
}
