import { useRouter } from 'next/router'
import GameCard from "../../components/game-card";
import useSWR from "swr";
import { fetcher } from "../../utils";

const Search = () => {
  const router = useRouter()
  const { query } = router.query
  const search = useSWR(query ? `http://localhost:3002/search?query=${query}` : null, fetcher)
  const categories = useSWR('http://localhost:3002/categories', fetcher)

  if (search.error || categories.error) return <div>failed to load</div>
  if (!search.data || !categories.data) return <div>loading...</div>

  return (
    <>
      <h2>Search results for {query}</h2>
      <hr/>
      <div>
        {search.data.result.length > 0 ?
          search.data.result.map(game => <GameCard game={game} key={game.code} categories={categories.data}/>)
          :
          <>Nothing found!</>
        }
      </div>
    </>
  )
}

export default Search
