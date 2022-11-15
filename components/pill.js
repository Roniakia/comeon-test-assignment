import styles from '../styles/Pill.module.scss'
import cx from 'classnames'

const Pill = ({ children, size, active }) => (
  <div className={cx(styles.pill, {
    [styles.xs]: size === 'xs',
    [styles.active]: active
  })}>
    {children}
  </div>
)

export default Pill
