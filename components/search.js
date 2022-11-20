import formStyles from '../styles/forms.module.scss'
import styles from '../styles/Search.module.scss'

import cx from "classnames";
import { useRouter } from 'next/router'

const Search = () => {
  const router = useRouter()

  return (
    <form className={cx(formStyles.form, formStyles.horizontal, styles.container)} onSubmit={e => {
      e.preventDefault()
    }}>
      <input placeholder='Search' type="text" name='search' required onChange={e => {
        router.push(`/search/${encodeURI(e.target.value)}`)
      }}/>
    </form>
  )
}

export default Search
