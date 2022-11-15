import styles from '../styles/Profile.module.scss'
import * as Auth from "../contexts/auth-provider";

const Profile = () => {
  const {
    logOut,
    session
  } = Auth.useContext()

  return (
    <div>
      <div className={styles.profile}>
        <img src={`/${session.player.avatar}`} className={styles.avatar}/>
        <div>
          <div className={styles.name}>{session.player.name}</div>
          <div className={styles.event}>{session.player.event}</div>
        </div>
      </div>
      <button onClick={() => {logOut()}} className={styles.logout}>Logout</button>
    </div>
  )
}

export default Profile
