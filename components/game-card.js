import styles from '../styles/GameCard.module.scss'

import Link from "next/link";
import Pill from "./pill";

const GameCard = ({ game, categories }) => {

  return (
    <Link href={`/game/${game.code}`} className={styles.card}>
      <div className={styles.image} style={{
        backgroundImage: `url(/${game.icon})`
      }}/>
      <div className={styles.details}>
        <div className={styles.name}>
          {game.name}
        </div>
        <div className={styles.description}>
          {game.description}
        </div>
        <div className={styles.categories}>
          {game.categoryIds.map(id => <Pill size='xs' key={id}>{categories.find(cat => id === cat.id).name}</Pill>)}
        </div>
      </div>
    </Link>
  )
}

export default GameCard
