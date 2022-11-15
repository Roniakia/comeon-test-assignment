import Link from 'next/link'
import styles from '../styles/CategoryLink.module.scss'
import { useRouter } from 'next/router'
import Pill from "./pill";

const isActive = (path, category) => {
  if (path === '/games' && category.name.toLowerCase() === 'all') {
    return true
  }
  return path.includes(category.slug);
}

const CategoryLink = ({ category }) => {
  const router = useRouter()
  return (
    <Link href={`/games/${category.slug}`} className={styles.link}>
      <Pill active={isActive(router.asPath, category)}>
        {category.name}
      </Pill>
    </Link>
  )
}

export default CategoryLink
