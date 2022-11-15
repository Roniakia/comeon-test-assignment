import styles from '../styles/UserMenu.module.scss'
import * as Auth from '../contexts/auth-provider'
import LoginForm from "./login-form";
import Profile from "./profile";

const UserMenu = () => {
    const {
        session: { authenticated },
    } = Auth.useContext()

    return (
        <div className={styles.container}>
            {authenticated ? <Profile /> : <LoginForm/>}
        </div>
    )
}

export default UserMenu
