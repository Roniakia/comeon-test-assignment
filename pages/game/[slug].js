'use client';
import { useRouter } from 'next/router'
import Script from "next/script";
import React, { useEffect } from "react";
import styles from '../../styles/Game.module.scss'
import * as Auth from "../../contexts/auth-provider";
import useSWR from "swr";
import { fetcher } from "../../utils";

const Game = () => {
  const {
    session: { authenticated },
  } = Auth.useContext()

  const router = useRouter()
  const { slug } = router.query
  const gameContainer = React.useRef(null);
  const [isReady, setIsReady] = React.useState(false)

  const { data, error } = useSWR(slug ? `http://localhost:3002/game?query=${slug}` : null, fetcher)

  useEffect(() => {
    if (isReady && authenticated && data) {
      window.comeon.game.launch(slug)
    }
  }, [data, isReady, authenticated])

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <>
      {authenticated ?
        <>
          <h1>{data.game.name}</h1>
          <div id='game-launch' ref={gameContainer} className={styles.container}>
          </div>
          <Script src='/scripts/comeon.game-1.0.min.js' onLoad={() => {
            setIsReady(true)
          }}/>
          <p>{data.game.description}</p>
        </> :
        <>
          Please, login!
        </>
      }
    </>
  )
}

export default Game
