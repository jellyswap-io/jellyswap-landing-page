import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Image from 'common/components/Image';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import Particles from '../Particle';
import { Icon } from 'react-icons-kit';
import { telegram } from 'react-icons-kit/icomoon/telegram';
import { socialDiscord } from 'common/icons/socialDiscord';
import BannerWrapper, { BgImageWrapper } from './bannerSection.style';
import jellyAnimation from 'common/assets/image/jelly-lighter2.gif'
import jellyfish from 'common/assets/image/jellyfish.svg'

const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  outlineBtnStyle,
  col2,
}) => {
  const ButtonGroup = () => (
    <Fragment>
      <Button
        title="View Updates"
        onClick={() => window.open('https://medium.com/')} //TODO
        {...btnStyle}
      />
      <Button
        title="Download Whitepaper"
        variant="textButton"
        icon={<i className="flaticon-next" />}
        onClick={() => window.open('/whitepaper', '_self')} //TODO
        {...outlineBtnStyle}
      />
    </Fragment>
  );
  const CommunityButtonGroup = () => (
    <Fragment className="social-button-container">
      <Button
        title="Join Our Discord"
        variant="textButton"
        iconPosition="left"
        icon={<Icon icon={socialDiscord} />}
        {...outlineBtnStyle}
        className="btnWithoutColor socialButton"
        onClick={() => window.open('https://discord.com/invite/nGFmaTY6z7')}
      />
      <Button
        title="Join Our Telegram"
        variant="textButton"
        iconPosition="left"
        icon={<Icon icon={telegram} />}
        {...outlineBtnStyle}
        className="btnWithoutColor socialButton"
        onClick={() => window.open('https://t.me/jellyswapfinance')}
      />
    </Fragment>
  );
  return (
    <BannerWrapper id="banner_section">
      <Particles />
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <FeatureBlock
              title={<Heading content="JellySwap" {...title} />}
              description={
                <Text
                  content="Introducing the first decentralized exchange on the Cardano Blockchain"
                  className='subtext'
                  {...description}
                />
              }
              button={<ButtonGroup />}
            />
            <div className='communityButtonsContainer'>
              <FeatureBlock button={<CommunityButtonGroup />} />
            </div>

          </Box>
          <Box className="col2" {...col2}>
            <Image className='jellyfish' src={jellyfish} alt="" style={{
              maxWidth: "20%",
              position: 'absolute',
              right: '10%',
              animationName: 'float',
              animationDuration: '4s',
              animationIterationCount: 'infinite',
              zIndex: -1,
            }}/>
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '100%', '100%', '60%', '65%'],
  },
  col2: {
    pr: '15px',
    pl: '15px',
    width: ['0%', '0%', '0%', '40%', '35%'],
  },
  title: {
    fontSize: ['52px', '68px', '84px', '84px', '94px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.31',
  },
  description: {
    fontSize: ['14px', '16px', '18px', '18px', '20px'],
    color: '#fff',
    lineHeight: '30px',
    mb: '0',
    maxWidth: '550px',
  },
  btnStyle: {
    minWidth: ['120px', '156px'],
    fontSize: '15px',
    fontWeight: '700',
    borderRadius: '6px',
  },
  outlineBtnStyle: {
    minWidth: ['130px', '156px'],
    fontSize: '16px',
    fontWeight: '700',
    color: '#fff',
    p: '5px 10px',
  },
};

export default BannerSection;
