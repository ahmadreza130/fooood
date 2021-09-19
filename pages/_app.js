import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from '../components/Navbar'
import Store from '../components/Store'
import StoreForUser from '../components/StoreForUser'
import { useState } from 'react'
import { AnimatePresence } from "framer-motion"
import Loading from '../components/Loading'
import Router from 'next/router'
import React from "react"
import Head from "next/head"
import { Provider, positions } from "react-alert"
import AlertTemplate from "react-alert-template-basic";

function MyApp({ Component, pageProps, router }) {

  const [isLoading, setIsLoading] = useState(false)
  Router.events.on("routeChangeStart", () => setIsLoading(true))
  Router.events.on("routeChangeComplete", () => setIsLoading(false))

  const options = {
    timeout: 4000,
    position: positions.BOTTOM_LEFT
  
  };

  return (
    <>
      <Provider template={AlertTemplate} {...options}>
        <StoreForUser>
          <Store>
            <NavBar />
            <AnimatePresence exitBeforeEnter  >
              <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                  name="viewport"
                  content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <meta name="description" content="Description" />
                <meta name="keywords" content="Keywords" />
                <title>Pizza Land</title>

                <link rel="manifest" href="/manifest.json" />

                <link
                  href="/icons/favicon-36x36.png"
                  rel="icon"
                  type="image/png"
                  sizes="36x36"
                />
                <meta name="theme-color" content="#317EFB" />
              </Head>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
            {isLoading && <Loading />}
          </Store>
        </StoreForUser>
      </Provider>
    </>
  )
}

export default MyApp
