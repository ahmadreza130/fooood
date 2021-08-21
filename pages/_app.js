import '../styles/globals.css'
import NavBar from '../components/Navbar'
import Store from '../components/Store'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Store>
        <NavBar />
        <Component {...pageProps} />
      </Store>
    </>
  )
}

export default MyApp
