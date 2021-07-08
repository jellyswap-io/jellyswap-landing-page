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
import Dex from 'containers/Crypto/Dex';
import ValueSections from 'containers/Crypto/ValueSection';
import Footer from 'containers/Crypto/Footer';
import SocialSection from "../containers/Crypto/SocialSection";
import RoadmapSection from "../containers/Crypto/Roadmap";
import {mascotWrapper} from "../mascots/mascots.style";

const Main = () => {
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
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          {/*<BannerSlider />*/}
          <Dex />
          <mascotWrapper>
            <div className="jellyBread"/>
          </mascotWrapper>
          {/*<ControlSections />
          <TrustedProofSections />
          <ScalableSections />
          <SlideSections />*/}
          <ValueSections />
          <RoadmapSection/>
          <SocialSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Main;
