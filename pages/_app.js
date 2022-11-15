import '../styles/globals.scss'
import 'css-reset-and-normalize/css/reset-and-normalize.css'

import { GlobalProvider } from "../contexts/global-provider";
import MainContainer from "../components/main-container";
import Logo from '../components/main-logo'
import Footer from "../components/footer";

const MyApp = ({ Component, pageProps }) => (
  <GlobalProvider>
    <Logo/>
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
    <Footer/>
  </GlobalProvider>
)

export default MyApp
