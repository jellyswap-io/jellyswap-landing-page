import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { cryptoTheme } from 'common/theme/crypto';
import { ResetCSS } from 'common/assets/css/style';
import { GlobalStyle, ContentWrapper } from 'containers/Crypto/crypto.style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Navbar from 'containers/Crypto/Navbar';
import Banner from 'containers/Crypto/BannerSection';
import BannerSlider from 'containers/Crypto/BannerSlider';
import Dex from 'containers/Crypto/Dex';
import ControlSections from 'containers/Crypto/ControlSection';
import TrustedProofSections from 'containers/Crypto/TrustedProof';
import ScalableSections from 'containers/Crypto/ScalableSection';
import SlideSections from 'containers/Crypto/CryptoSlides';
import ValueSections from 'containers/Crypto/ValueSection';
import Footer from 'containers/Crypto/Footer';
import SocialSection from "../containers/Crypto/SocialSection";
import WhitepaperBanner from "../containers/Crypto/WhitepaperBanner";
import WhitepaperSection from "../containers/Crypto/Whitepaper";
import NavbarFromAltPage from "../containers/Crypto/NavbarFromAltPage";

const WhitepaperPage = () => {
  return (
    <ThemeProvider theme={cryptoTheme}>
      <Fragment>
        <Head>
          <title>JellySwap | Cardano DEX</title>
          <meta name="Description" content="React next landing page" />
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
