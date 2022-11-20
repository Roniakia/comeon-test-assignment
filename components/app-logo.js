import styles from '../styles/AppLogo.module.scss'

import Link from 'next/link'

const AppLogo = () => (
  <Link className={styles.container} href='/'/>
)

export default AppLogo
