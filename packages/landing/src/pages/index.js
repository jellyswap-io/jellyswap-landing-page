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
import {MascotWrapper} from "../common/assets/image/mascots/mascots.style";
import Image from "../common/components/Image";
import jellyBread from 'common/assets/image/mascots/jellybread2.svg';
import grapeBread from 'common/assets/image/mascots/grapejelly2.svg';
import pbBread from 'common/assets/image/mascots/pb&bread.png';
import strawberryCan from 'common/assets/image/mascots/StrawberryCan.png';
import grapeCan from 'common/assets/image/mascots/GrapeCan.png';
import pbJar from 'common/assets/image/mascots/PeanutbutterJar.png';
import purpleJellyfish from 'common/assets/image/mascots/PurpleJellyfish.png';
import tealJellyFish from 'common/assets/image/mascots/TealJellyfish.png';

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
          <MascotWrapper>
            <div className="jellyBread">
              <Image src={jellyBread} alt={"Jelly Bread"}/>
            </div>
            <div className="peanutButterBread">
              <Image src={grapeBread} alt={"Peanut Butter Bread"}/>
            </div>
          </MascotWrapper>
          {/*<ControlSections />
          <TrustedProofSections />
          <ScalableSections />
          <SlideSections />*/}
          <ValueSections />
          <RoadmapSection/>
          <MascotWrapper>
            <div className="tealJellyfish">
              <Image src={tealJellyFish} alt={"Teal Jellyfish"}/>
            </div>
          </MascotWrapper>
          <SocialSection />
          <MascotWrapper>
            <div className="strawberryCan">
              <Image src={strawberryCan} alt={"Strawberry Jelly Can"}/>
            </div>
          </MascotWrapper>
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Main;
