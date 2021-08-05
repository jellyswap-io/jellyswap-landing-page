import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import { TokenomicsSectionWrapper, FeatureSection } from './tokenomicsSection.style';
import tokenomicsImage from 'common/assets/image/crypto/tokenomics.svg'


const TokenomicsSection = ({
  row,
  title,
  description,
}) => {
  return (
    <TokenomicsSectionWrapper id="tokenomicsSection">
      <Container noGutter mobileGutter>
        <Box {...row}>
          <FeatureBlock
            title={<Heading {...title} />}
            description={<Text {...description} />}
          />
        </Box>
        <Box className="Tokenomics Section">
          <FeatureSection>
            <div className="tokenomics glow-pink">
              <Fade up key={`feature-${index}`}>



              </Fade>

            </div>
          </FeatureSection>
        </Box>
      </Container>
    </TokenomicsSectionWrapper>
  );
};

// Dex style props
TokenomicsSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  row: PropTypes.object,
};

// Trusted default style
TokenomicsSection.defaultProps = {
  // Trusted section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  title: {
    content: 'Tokenomics',
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    textAlign: ['center', 'center'],
  },

  description: {
    content:
      'Unlike our competitors, the team is keeping none of the supply. All development is being funded by private investors, and all proceeds from the public sale will be used to fund the liquidity pool.',
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['25px', '25px', '30px', '30px', '45px'],
    textAlign: ['center', 'center'],
  },
};

export default TokenomicsSection;
