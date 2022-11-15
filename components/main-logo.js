import styles from '../styles/MainLogo.module.scss'
import Link from 'next/link'

const MainLogo = () => (
  <Link className={styles.container} href='/'/>
)

export default MainLogo
