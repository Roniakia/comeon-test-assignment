import styles from '../styles/MainContainer.module.scss'
import MainHeader from "./header";

const MainContainer = ({ children }) => (
  <main className={styles.container}>
    <MainHeader/>
    {children}
  </main>
)

export default MainContainer
