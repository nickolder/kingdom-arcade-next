import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import AuthContext from '../contexts/AuthContext'

function MyApp ({ Component, pageProps }: AppProps) {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    if (localStorage.token !== undefined) {
      fetch('/api/token-verify/' + localStorage.token)
      .then(res => {
        if (res.status === 200) {
          setAuthenticated(true)
        }
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={[authenticated, setAuthenticated]}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  )
}

export default MyApp
