import styles from '../styles/MainHeader.module.scss'
import UserMenu from "./user-menu";
import Search from "./search";

const MainHeader = () => (
  <header className={styles.header}>
    <UserMenu/>
    <Search/>
  </header>
)

export default MainHeader
