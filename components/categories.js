import CategoryLink from "./category-link";
import styles from '../styles/Categories.module.scss'
import useSWR from "swr";
import { fetcher } from "../utils";

const Categories = () => {
  const { data, error } = useSWR('/api/categories', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div className={styles.list}>
      {data.map(category => <CategoryLink category={category} key={category.id}/>)}
    </div>
  )
}

export default Categories
