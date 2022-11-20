import useSWR from 'swr'

import Categories from "../../components/categories";
import GameCard from "../../components/game-card";
import { fetcher } from "../../utils";

const Games = () => {
  const games = useSWR('/api/games', fetcher)
  const categories = useSWR('/api/categories', fetcher)

  if (games.error || categories.error) return <div>failed to load</div>
  if (!games.data || !categories.data) return <div>loading...</div>

  return (
    <>
      <Categories/>
      <div>
        {games.data.map(game => <GameCard game={game} key={game.code} categories={categories.data}/>)}
      </div>
    </>
  )
}

export default Games
