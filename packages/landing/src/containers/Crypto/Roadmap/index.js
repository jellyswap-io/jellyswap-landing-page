import React from 'react';
import PropTypes from 'prop-types';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import RoadmapWrapper from "./roadmap.style";
import ScrollMenu from "react-horizontal-scrolling-menu";
import temp from 'common/assets/image/crypto/author-1.jpg';
import Fade from "react-reveal/Fade";
import Image from "../../../common/components/Image";

const RoadmapSection = ({
  title,
  sectionSubTitle,
  mainCardTitle,
  cardTitle,
  cardSubtitle,
}) => {
  const titleText = ["2021 - Q2", "2021 - Q3", "2021 - Q4", "2022 - Q1"];
  const descriptionText = [
    "Publish WhitePaper\nMarketing Campaign\nFinalize Tokenomics",
    "Publish Audit Results\nLaunch on Cardano Blockchain\nICO & Airdrops",
    "Introduce Prediction\nIntroduce Lottery",
    "ERC-20 Bridge\nBEP-20 Bridge",
  ];
  const pictures = [0, 0, 0, 0];
  return (
    <RoadmapWrapper id="roadmap">
      <Container>
        <Text {...sectionSubTitle} mb={"0px"} />
        <Text {...title} />
        <ScrollMenu
          arrowLeft={<div style={{ fontSize: "30px" }}>{" < "}</div>}
          arrowRight={<div style={{ fontSize: "30px" }}>{" > "}</div>}
          data={pictures.map((picture, index) => (
            <Fade up key={`roadmap-${index}`}>
              <div className="card">
                <Image src={temp} alt={"temp"}/>
                <Text style={index === 0 ? mainCardTitle : cardTitle} content={titleText[index]} mb={'0px'}/>
                <p style={cardSubtitle}> {descriptionText[index]}</p>
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
    paddingTop: "20px",
    textAlign: 'center',
  },
  mainCardTitle: {
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: '27px',
    color: '#34a385',
    paddingTop: "20px",
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
