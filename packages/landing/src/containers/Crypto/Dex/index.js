import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Fade from 'react-reveal/Fade';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import { DEX_FEATURE } from 'common/data/Crypto';
import { DexWrapper, FeatureSection } from './dex.style';

const DexHistory = ({
  row,
  col,
  title,
  description,
  sectionSubTitle,
  cardArea,
}) => {
  return (
    <DexWrapper id="dex" className={"glow-pink"}>
      <Container>
        <Box className="row" {...row}>
          <Box className="colleft" {...col} style={{ flexDirection: 'column' }}>
            <Text {...sectionSubTitle} />
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />}
              /*button={<Button title="GET DOCS" {...btnStyle} />}*/
            />
          </Box>
          <Box className="colright" {...col} {...cardArea}>
            <FeatureSection>
              {DEX_FEATURE.map((item, index) => (
                <Fade up key={`feature-${index}`}>
                  <div className="featureWrapper">
                    <Image src={item.image} alt={item.title} />
                    <Heading
                      className="featureTitleStyle"
                      as="h3"
                      content={item.title}
                    />
                    <Text content={item.des} className="featureDescriptionStyle" />
                  </div>
                </Fade>
              ))}
            </FeatureSection>
          </Box>
        </Box>
      </Container>
    </DexWrapper>
  );
};

// Dex style props
DexHistory.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  featureTitleStyle: PropTypes.object,
  featureDescriptionStyle: PropTypes.object,
};

// Dex default style
DexHistory.defaultProps = {
  // Dex section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Dex section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1 / 2, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center',
  },

  // Dex section title default style
  title: {
    content: 'A Decentralized Exchange (DEX)',
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '100%', '415px'],
    textAlign: ['left', 'left'],
  },
  // Dex section description default style
  description: {
    content:
      'A peer-to-peer, ownerless marketplace for cryptocurrency transactions.',
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['30px', '30px', '40px', '40px', '55px'],
    textAlign: ['left', 'left'],
    maxWidth: ['100%', '100%', '100%', '100%', '430px'],
  },
  sectionSubTitle: {
    content: 'How JellySwap Works',
    as: 'span',
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: '27px',
    color: '#525f7f',
    textAlign: ['left', 'left'],
  },
};

export default DexHistory;
