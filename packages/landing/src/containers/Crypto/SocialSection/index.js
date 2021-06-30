import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/components/Box';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import { SOCIAL_FEATURE } from 'common/data/Crypto';
import { SocialSectionWrapper, FeatureSection } from './socialSection.style';
import Button from '../../../common/components/Button';

const SocialSection = ({
  row,
  title,
  description,
  sectionSubTitle,
  featureTitleStyle,
  featureDescriptionStyle,
}) => {
  return (
    <SocialSectionWrapper id="socialsection">
      <Container noGutter mobileGutter>
        <Box className="row" {...row}>
          <FeatureBlock
            title={<Heading {...title} />}
            description={<Text {...description} />}
          />
        </Box>
        <Box className="SocialSection">
          <FeatureSection>
            {SOCIAL_FEATURE.map((item, index) => (
              <Fade up key={`feature-${index}`}>
                <a className="socialButton" href={item.link} target="_blank" rel="noreferrer">
                  <div
                    className="socialImage"
                    style={{backgroundImage: `url(${item.image})`}}
                  />
                  <p className={item.title + "Title"}>{item.title}</p>
                  <p className={item.title + "Description"}>{item.des}</p>
                </a>
                {/*<div>{
                  <Image src={item.image} alt={item.title} />
                  <Box className="contextPortion">
                    <Heading
                      as="h3"
                      content={item.title}
                      {...featureTitleStyle}
                    />

                    <Text content={item.des} {...featureDescriptionStyle} />
                  </Box>
                </div>*/}
              </Fade>
            ))}
          </FeatureSection>
        </Box>
      </Container>
    </SocialSectionWrapper>
  );
};

// Dex style props
SocialSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  row: PropTypes.object,
  featureTitleStyle: PropTypes.object,
  featureDescriptionStyle: PropTypes.object,
};

// Trusted default style
SocialSection.defaultProps = {
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
    content: 'Join the Community',
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
      'Keep up to date with development progress and engage with the JellySwap community.',
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
    textAlign: ['left', 'left'],
  },
  // Trusted section description default style
  featureDescriptionStyle: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '27px',
    textAlign: ['left', 'left'],
  },
};

export default SocialSection;
