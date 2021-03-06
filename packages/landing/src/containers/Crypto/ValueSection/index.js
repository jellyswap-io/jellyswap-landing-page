import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/components/Box';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import { VALUE_FEATURE } from 'common/data/Crypto';
import { ValueSectionWrapper, FeatureSection } from './valueSection.style';

const ValueSection = ({
  row,
  title,
  description,
  featureTitleStyle,
  featureDescriptionStyle,
}) => {
  return (
    <ValueSectionWrapper id="valuesection">
      <Container noGutter mobileGutter>
        <Box className="featureTitleStyle" {...row}>
          <FeatureBlock
            title={<Heading {...title} />}
            description={<Text {...description} />}
          />
        </Box>
        <Box className="ValueSection glow-pink">
          <FeatureSection>
            <div className="values">
              {VALUE_FEATURE.map((item, index) => (
                <Fade up key={`feature-${index}`}>
                  <div className="featureWrapper">
                    <Image src={item.image} alt={item.title} />
                    <Heading
                      as="h3"
                      content={item.title}
                      {...featureTitleStyle}
                    />
                    <Text content={item.des} {...featureDescriptionStyle} />
                  </div>
                </Fade>
              ))}
            </div>
          </FeatureSection>
        </Box>
      </Container>
    </ValueSectionWrapper>
  );
};

// Value style props
ValueSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  row: PropTypes.object,
  featureTitleStyle: PropTypes.object,
  featureDescriptionStyle: PropTypes.object,
};

// Trusted default style
ValueSection.defaultProps = {
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
    content: 'Bringing Value to Jelly Token',
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
      'Every transaction will have a nominal fee of 0.30% to capture value for $JELLY. However, any token swapped using $JELLY instead of Cardano will only have a transaction fee of 0.1%, all of which will go to the liquidity pool.',
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['25px', '25px', '30px', '30px', '45px'],
    textAlign: ['center', 'center'],
  },
  featureTitleStyle: {
    fontSize: ['18px', '18px', '20px', '20px', '20px'],
    lineHeight: ['1', '1', '1', '1', '1'],
    fontWeight: '500',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '10px',
    textAlign: ['center', 'center'],
  },
  // Trusted section description default style
  featureDescriptionStyle: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '27px',
    textAlign: ['center', 'center'],
  },
};

export default ValueSection;
