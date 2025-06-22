import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topStrip}>
        <span className={styles.topStripItem1}><Image src='/icons/top-strip.png' alt='top-strip icon' width={16} height={16}/> Lorem ipsum dolor</span>
        <span className={styles.topStripItem2}><Image src='/icons/top-strip.png' alt='top-strip icon' width={16} height={16}/>  Lorem ipsum dolor</span>
        <span className={styles.topStripItem3}><Image src='/icons/top-strip.png' alt='top-strip icon' width={16} height={16}/>  Lorem ipsum dolor</span>
      </div>
      <div className={styles.mainHeader}>
        
        <div className={styles.logoLeft}>
          <Image src={'/icons/solar-hamburger-menu.png'} alt={'hamberger-menu'} className={styles.mobileHamburgerMenu} height={20} width={20}/>
          <Image src='/icons/Logo.png' alt="Logo Icon" width={32} height={32} />
        </div>
        <div className={styles.logoCenter}>LOGO</div>
        <div className={styles.iconsRight}>
          <span title="Search"><Image src='/icons/search-normal.png' alt='search icon' width={24} height={24}/> </span>
          <span title="Wishlist"><Image src='/icons/heart.png' alt='heart icon' width={24} height={24}/> </span>
          <span title="Cart"><Image src='/icons/shopping-bag.png' alt='shopping-bag icon' width={24} height={24}/> </span>
          <span title="User" className={styles.user}><Image src='/icons/profile.png' alt='profile icon' width={24} height={24}/> </span>
          <select className={styles.langSelect}>
            <option>ENG</option>
            <option>TAM</option>
            <option>HIN</option>
            <option>ESP</option>
          </select>
        </div>
      </div>

      <nav className={styles.navMenu}>
        <Link href="#">SHOP</Link>
        <Link href="#">SKILLS</Link>
        <Link href="#">STORIES</Link>
        <Link href="#">ABOUT</Link>
        <Link href="#">CONTACT US</Link>
      </nav>
    </header>
  )
}