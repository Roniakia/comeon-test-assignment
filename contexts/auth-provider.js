import * as React from 'react'
import PropTypes from 'prop-types'
import useSWR from "swr";
import { fetcher, Storage } from "../utils";

const AuthContext = React.createContext({})

export const Provider = (props) => {
  const [session, setSession] = React.useState({
    authenticated: false,
    player: {}
  })
  const [shouldLogin, setShouldLogin] = React.useState(null)
  const [shouldLogout, setShouldLogout] = React.useState(null)
  const loginRequest = useSWR(shouldLogin ? `http://localhost:3002/login` : null, url => fetcher(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(shouldLogin)
  }))

  const logoutRequest = useSWR(shouldLogout ? `http://localhost:3002/logout` : null, url => fetcher(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(shouldLogout)
  }))

  function logIn(credentials) {
    setShouldLogin(credentials)
    setShouldLogout(null)
  }

  function logOut() {
    setShouldLogin(null)
    setShouldLogout({ username: session.player.username })
    setSession({
      authenticated: false,
      player: {}
    })
  }

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setSession({
        authenticated: Storage.getValue('localStorage', 'authenticated') === 'true',
        player: {
          name: Storage.getValue('localStorage', 'name'),
          avatar: Storage.getValue('localStorage', 'avatar'),
          event: Storage.getValue('localStorage', 'event'),
          username: Storage.getValue('localStorage', 'username'),
        }
      })
    }
  }, [])

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      for (let key in session.player) {
        if (session.player.hasOwnProperty(key)) {
          Storage.setValue('localStorage', key, session.player[key])
        }
      }
    }
  }, [session])

  React.useEffect(() => {
    if (loginRequest.data && loginRequest.data.status === 'success') {
      setSession({
        authenticated: true,
        player: loginRequest.data.player
      })
      Storage.setValue('localStorage', 'authenticated', true)
    }
  }, [loginRequest.data])

  React.useEffect(() => {
    if (logoutRequest.data && logoutRequest.data.status === 'success') {
      setSession({
        authenticated: false,
        player: {}
      })
      Storage.setValue('localStorage', 'authenticated', false)
    }
  }, [logoutRequest.data])

  return (
    <AuthContext.Provider
      value={{
        session,
        logOut,
        logIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

Provider.displayName = 'Auth.Provider'

Provider.propTypes = {
  children: PropTypes.node,
}

export function useContext() {
  return React.useContext(AuthContext)
}
