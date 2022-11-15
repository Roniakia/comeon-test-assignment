import formStyles from '../styles/forms.module.scss'
import styles from '../styles/login-form.module.scss'

import cx from 'classnames'
import * as Auth from "../contexts/auth-provider";

const LoginForm = () => {
  const {
    logIn
  } = Auth.useContext()

  return (
    <form className={cx(styles.form, formStyles.form, formStyles.horizontal)} onSubmit={(e) => {
      e.preventDefault()
      logIn({
        username: e.target.username.value,
        password: e.target.password.value
      })
    }}>
      <input name='username' placeholder='Username' type="text"/>
      <input name='password' placeholder='Password' type="password"/>
      <button>Login</button>
    </form>
  )
}

export default LoginForm
