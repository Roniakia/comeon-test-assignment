import styles from '../styles/AppContainer.module.scss'

const AppContainer = ({ children }) => (
  <main className={styles.container}>
    {children}
  </main>
)

export default AppContainer
