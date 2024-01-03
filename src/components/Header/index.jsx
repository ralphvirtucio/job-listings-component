import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className='sr-only'>Job Listings</h1>
    </header>
  );
};

export default Header;
