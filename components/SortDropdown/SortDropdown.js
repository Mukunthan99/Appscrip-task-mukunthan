import { useState, useRef, useEffect } from 'react';
import styles from './SortDropdown.module.css';
import Image from 'next/image'; 

const SortDropdown = ({ sortOption, setSortOption }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    { label: 'Recommended', value: 'recommended' },
    { label: 'Newest First', value: 'newest' },
    { label: 'Popular', value: 'popular' },
    { label: 'Price : High to Low', value: 'price_high_to_low' },
    { label: 'Price : Low to High', value: 'price_low_to_high' },
  ];

  const handleSelect = (value) => {
    setSortOption(value);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button className={styles.toggle} onClick={() => setOpen(!open)}>
        {options.find(o => o.value === sortOption)?.label || 'Recommended'}
        <span className={styles.arrow}>{open ? <Image src={'/icons/arrow-up.png'} alt={'up-arraow'} width={16} height={16}/> : <Image src={'/icons/arrow-down.png'} alt={'up-arraow'} width={16} height={16}/> }</span>
      </button>
      {open && (
        <div className={styles.menu}>
          {options.map((opt) => (
            <div
              key={opt.value}
              className={`${styles.item} ${
                sortOption === opt.value ? styles.selected : ''
              }`}
              onClick={() => handleSelect(opt.value)}
            >
              {sortOption === opt.value && <Image src={'/icons/check-symbol.png'} alt={'check-symbol'} width={26} height={26}/>}
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
