import React from 'react';
import PropTypes from 'prop-types';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import RoadmapWrapper from './roadmap.style';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Fade from 'react-reveal/Fade';
import Icon from 'react-icons-kit';
import { bullhorn } from 'react-icons-kit/fa/bullhorn';

const RoadmapSection = ({
  title,
  sectionSubTitle,
  mainCardTitle,
  cardTitle,
  cardSubtitle,
}) => {
  const titleText = ['2021 - Q2', '2021 - Q3', '2021 - Q4', '2022 - Q1'];
  const descriptionText = [
    <p className="roadmap-text roadmap-text-1">
      Publish WhitePaper
      <br />
      Marketing Campaign
      <br />
      Finalize Tokenomics
    </p>,
    <p className="roadmap-text roadmap-text-2">
      Publish Audit Results
      <br />
      Launch on Cardano Blockchain
      <br />
      ICO & Airdrops
    </p>,
    <p className="roadmap-text roadmap-text-3">
      Introduce Prediction
      <br />
      Introduce Lottery
    </p>,
    <p className="roadmap-text roadmap-text-4">
      ERC-20 Bridge
      <br />
      BEP-20 Bridge
    </p>,
  ];
  const pictures = [
    <Icon icon={bullhorn} size={'50px'} className="roadmap-text-1" />,
    0,
    0,
    0,
  ];
  return (
    <RoadmapWrapper id="roadmap">
      <Container>
        <Text {...sectionSubTitle} mb={'0px'} />
        <Text {...title} />
        <ScrollMenu
          arrowLeft={<div style={{ fontSize: '30px' }}>{' < '}</div>}
          arrowRight={<div style={{ fontSize: '30px' }}>{' > '}</div>}
          data={pictures.map((picture, index) => (
            <Fade up key={`roadmap-${index}`}>
              <div className="card">
                {pictures[index]}
                <Text
                  style={index === 0 ? mainCardTitle : cardTitle}
                  content={titleText[index]}
                  mb={'0px'}
                />
                {descriptionText[index]}
              </div>
            </Fade>
          ))}
        />
      </Container>
    </RoadmapWrapper>
  );
};

RoadmapSection.propTypes = {
  title: PropTypes.object,
  sectionSubTitle: PropTypes.object,
};

RoadmapSection.defaultProps = {
  title: {
    content: 'Roadmap',
    fontSize: ['26px', '34px', '42px', '42px', '47px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.31',
    textAlign: 'center',
  },
  sectionSubTitle: {
    content: 'Our one-year plan',
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontFamily: 'Poppins',
    fontWeight: '400',
    lineHeight: '27px',
    color: '#fff',
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: '27px',
    color: '#33335E',
    paddingTop: '20px',
    textAlign: 'center',
  },
  mainCardTitle: {
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: '27px',
    color: '#34a385',
    paddingTop: '20px',
    textAlign: 'center',
  },
  cardSubtitle: {
    whiteSpace: 'pre-wrap',
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontFamily: 'Poppins',
    fontWeight: '400',
    lineHeight: '27px',
    color: '#53607F',
    textAlign: 'center',
  },
};

export default RoadmapSection;
