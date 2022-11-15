import { useRouter } from 'next/router'
import useSWR from "swr";
import { fetcher } from "../../utils";
import GameCard from "../../components/game-card";
import Categories from "../../components/categories";

const Game = () => {
  const router = useRouter()
  const { categorySlug } = router.query

  const category = useSWR(categorySlug ? `http://localhost:3002/category?query=${categorySlug}` : null, fetcher)
  const categories = useSWR('http://localhost:3002/categories', fetcher)

  if (category.error || categories.error) return <div>failed to load</div>
  if (!category.data || !categories.data) return <div>loading...</div>

  return (
    <>
      <Categories/>
      <div>
        {category.data.games.map(game => <GameCard game={game} key={game.code} categories={categories.data}/>)}
      </div>
    </>
  )
}

export default Game
