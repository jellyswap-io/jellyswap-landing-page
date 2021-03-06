import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { cryptoTheme } from 'common/theme/crypto';
import { ResetCSS } from 'common/assets/css/style';
import { GlobalStyle, ContentWrapper } from 'containers/Crypto/crypto.style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Footer from 'containers/Crypto/Footer';
import WhitepaperBanner from "../containers/Crypto/WhitepaperBanner";
import WhitepaperSection from "../containers/Crypto/Whitepaper";
import NavbarFromAltPage from "../containers/Crypto/NavbarFromAltPage";

const WhitepaperPage = () => {
  return (
    <ThemeProvider theme={cryptoTheme}>
      <Fragment>
        <Head>
          <title>JellySwap | Whitepaper</title>
          <meta name="Description" content="The official whitepaper for JellySwap, the first decentralized exchange (DEX) on the Cardano blockchain." />
          <meta name="theme-color" content="#ec5555" />

          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Heebo:300,400,500,700"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <NavbarFromAltPage />
            </DrawerProvider>
          </Sticky>
          <WhitepaperBanner />
          <WhitepaperSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default WhitepaperPage;
