import React from 'react';
import PropTypes from 'prop-types';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { bullhorn } from 'react-icons-kit/fa/bullhorn';
import { cubes } from 'react-icons-kit/fa/cubes';
import { dice } from 'react-icons-kit/icomoon/dice';
import { arrows_horizontal } from 'react-icons-kit/ikons/arrows_horizontal';
import RoadmapWrapper from './roadmap.style';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Fade from 'react-reveal/Fade';
import Icon from 'react-icons-kit';
import {justifyContent} from "styled-system";

const RoadmapSection = ({
  title,
  sectionSubTitle,
  cardTitle,
  cardSubtitle,
}) => {
  const titleText = ['2021 - Q2', '2021 - Q3', '2021 - Q4', '2022 - Q1'];
  const descriptionText = [
    <p style={cardSubtitle} className="card-text">
      Publish Whitepaper
      <br />
      Finalize Tokenomics
      <br />
      Begin Development
    </p>,
    <p style={cardSubtitle} className="card-text">
      Marketing Campaign
      <br />
      Publish Audit Results
      <br />
      Launch on Cardano
      <br />
      ICO & Airdrops
    </p>,
    <p style={cardSubtitle} className="card-text">
      Introduce Prediction
      <br />
      Introduce Lottery
    </p>,
    <p style={cardSubtitle} className="card-text">
      Limit Orders
      <br />
      ERC-20 Bridge
      <br />
      BEP-20 Bridge
    </p>,
  ];
  const activeQuarterIndex = 1;
  const pictures = [
    <Icon icon={bullhorn} size={'50px'} className="card-icon" />,
    <Icon icon={cubes} size={'50px'} className="card-icon" />,
    <Icon icon={dice} size={'50px'} className="card-icon" />,
    <Icon icon={arrows_horizontal} size={'50px'} className="card-icon" />,
  ];

  return (
    <RoadmapWrapper id="roadmap">
      <div>
        <Text {...sectionSubTitle} mb={'0px'} />
        <Text {...title} />
        <ScrollMenu
          menuStyle={{justifyContent: "center"}}
          inertiaScrolling={true}
          wheel={false}
          data={pictures.map((picture, index) => (
            <div
              className={
                index === activeQuarterIndex
                  ? 'card card-selected'
                  : 'card card-unselected'
              }
            >
              {pictures[index]}
              <Text
                style={cardTitle}
                content={titleText[index]}
                mb={'0px'}
                className="card-title"
              />
              {descriptionText[index]}
            </div>
          ))}
        />
      </div>
    </RoadmapWrapper>
  );
};

RoadmapSection.propTypes = {
  title: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  cardTitle: PropTypes.object,
  cardSubtitle: PropTypes.object
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
    paddingTop: '20px',
  },
  cardSubtitle: {
    whiteSpace: 'pre-wrap',
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontFamily: 'Poppins',
    fontWeight: '400',
    lineHeight: '27px',
  },
};

export default RoadmapSection;
