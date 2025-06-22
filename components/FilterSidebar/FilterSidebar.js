import { useState } from 'react';
import styles from './FilterSidebar.module.css';

export default function FilterSidebar({ selectedCategories, handleCategoryChange, handleUnselectAll }) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const categories = ['men\'s clothing', 'women\'s clothing', 'jewelery', 'electronics'];

  return (
    <aside className={styles.sidebar} style={{borderBottom: '1px solid #E5E5E5'}}>
      <div className={styles.filterSection}>
        <label><input type="checkbox" /> CUSTOMIZBLE</label>
      </div>

      <div className={styles.accordion}>
        <div className={styles.accordionHeader} onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
          <strong>IDEAL FOR</strong>
          <span>{isCategoryOpen ? <img src={'/icons/arrow-up.png'}/>:<img src={'/icons/arrow-down.png'}/>}</span>
        </div>

        <div className={styles.filterList}>
          {isCategoryOpen ? (
            <>
            <div onClick={handleUnselectAll} className={styles.unselectAll}>Unselect all</div>
            {categories.map(category => (
            <label key={category}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </label>
          ))}
          </>
          ):'All'}
        </div>
      </div>

      {['OCCASION', 'WORK', 'FABRIC', 'SEGMENT', 'SUITABLE FOR', 'RAW MATERIALS','PATTERN'].map(label => (
        <div key={label} className={styles.filterSection}>
          <div className={styles.accordionHeader}><span>{label}</span><img src={'/icons/arrow-down.png'}/></div>
          <div>All</div>
        </div>
      ))}
    </aside>
  );
}
