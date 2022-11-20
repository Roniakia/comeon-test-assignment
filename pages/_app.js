import 'css-reset-and-normalize'
import '../styles/globals.scss'

import GlobalProvider from "../contexts/global-provider";

import AppContainer from "../components/app-container";
import AppLogo from "../components/app-logo";
import Footer from "../components/footer";

const App = ({ Component, pageProps }) => (
  <GlobalProvider>
    <AppLogo/>
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
    <Footer/>
  </GlobalProvider>
)

export default App
