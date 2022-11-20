import styles from '../styles/Profile.module.scss'
import Image from 'next/image'
import * as Auth from "../contexts/auth-provider";

const Profile = () => {
  const {
    logOut,
    session
  } = Auth.useContext()

  return (
    <div>
      <div className={styles.profile}>
        <div className={styles.avatarContainer}>
          <Image src={`/${session.player.avatar}`} alt="Your profile avatar" width={50} height={50}/>
        </div>
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
