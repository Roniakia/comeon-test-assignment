import 'css-reset-and-normalize'
import '../styles/globals.scss'

import GlobalProvider from "../contexts/global-provider";

import AppContainer from "../components/app-container";

const App = ({ Component, pageProps }) => (
  <GlobalProvider>
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
  </GlobalProvider>
)

export default App
