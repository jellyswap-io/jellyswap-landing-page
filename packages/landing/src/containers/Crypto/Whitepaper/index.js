import React from 'react';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import { WhitepaperWrapper, FeatureSection } from './whitepaper.style';
import {textAlign} from "styled-system";
import Image from "../../../common/components/Image";
import Figure1 from "./figure1.png";
import Figure2 from "./figure2.png";
import Figure3 from "./figure3.png";
import Equation1 from "./equation1.png";
import Equation2 from "./equation2.png";
import Equation3 from "./equation3.png";
import Equation4 from "./equation4.png";

const WhitepaperSection = ({
  title,
  subtitle,
  sectionTitle,
  text,
  figureText,
}) => {
  return (
    <WhitepaperWrapper id="whitepaper">
      <Container>
        <Text {...subtitle} />
        <Heading {...title} />
        <Text {...sectionTitle} content={"Abstract"} />
        <Text {...text} textAlign={"center"} content={"With Smart Contracts being released on the Cardano network later this year, there is a great need for a market to trade the new currencies that will pop up. This whitepaper describes JellySwap, a decentralized exchange (DEX) built on the Cardano blockchain. It will be modeled after the popular Uniswap on the Ethereum blockchain but will offer more attractive fees due to Cardano’s greater efficiency. Anyone can serve as a liquidity provider on JellySwap, creating a market for others to exchange their Cardano tokens. Traders pay a small fee of 0.25%, giving liquidity providers profit in return for providing liquidity. "} />
        <Text {...sectionTitle} content={"1 Background"} />
        <p style={text}>{"\tJellySwap is a “Decentralized Exchange” (DEX), an application running on smart contracts on the Cardano Blockchain. Rather than relying on a central entity such as a bank, JellySwap aims to create a free financial market relying on these smart contracts to manage transactions. \n" +
        "\tWithout a central authority determining the price of coins, a DEX relies on liquidity providers to create a market. Thus, the price of coins are mathematically determined based on the quantity of each coin in the liquidity pool. Anyone can serve as a liquidity provider, receiving a small fee from each transaction and generating passive income. This will motivate Cardano holders to provide liquidity and create a stronger, more liquid market.\n" +
        "\tSeveral DEXs have been built on existing blockchains such as Uniswap on Ethereum and PancakeSwap on the Binance Smart Chain. However, JellySwap aims to be the primary DEX of choice on the Cardano blockchain. We at JellySwap chose to create a DEX on the Cardano blockchain because Cardano is a project we truly believe in. At the time of writing this, Cardano’s market cap is only beaten by Bitcoin, Ethereum, Tether, and Binance. We can discount Tether as it is a stable coin that depends on the US dollar. Each of the other three mentioned coins have their own fatal flaws:\n" +
        "• Bitcoin does not have Smart Contracts and uses Proof of Work\n" +
        "• Ethereum uses Proof of Work\n" +
        "• Binance is centralized\n" +
        "\tIn contrast, the Cardano blockchain was created using proof of stake with a focus on energy efficiency. With a network that is 1.6 million times more energy efficient than Bitcoin, Cardano has significantly lower fees, faster transaction times, and a higher transaction/second limit. Created by Ethereum co-founder Charles Hoskinson, ran by a non-profit organization, and with regular collaboration with academic institutions, Cardano is a project that could overtake Bitcoin and Ethereum and become the primary blockchain of choice for investors and businesses.\n"}</p>

        <Text {...sectionTitle} content={"2 Efficiency: PoW vs PoS"} />
        <p style={text}>{"\tEthereum and Bitcoin run using Proof of Work, which requires huge amounts of energy leading to expensive mining costs, slow transactions, and high transaction fees. It is bad for the environment and is not a realistic long-term solution. The Proof of Work algorithm works by having all miners attempt to solve a cryptographic code, rewarding the first to solve it. This leads to a massive waste of energy by all of the other miners who were unable to solve the code first. Furthermore, miners collaborate together creating “mining pools,” leading to a more centralized blockchain.\n" +
        "\tCardano runs using Proof of Stake where “validators” are randomly chosen based on the amount of stake (similar to a security deposit) they provide. They validate the transaction in return for a fee. However, if a validator approves a fraudulent transaction, part of their stake will be confiscated, ensuring that validators correctly do their job. With a single validator solving each problem, Proof of Stake uses considerably less energy than Proof of Work. Additionally, Proof of Stake does not provide an incentive to create mining pools, ensuring that the network stays decentralized and secure. \n"}</p>

        <Text {...sectionTitle} content={"3 Liquidity Pools"} />
        <p style={text}>{"\tTraditional financial markets rely on a central authority to act as the market maker, matching buyers and sellers together. However, this entity has the potential to manipulate the market, resulting in the existing regulations of the financial market. In contrast, a decentralized exchange relies on mathematical algorithms to determine the price of two tokens relative to each other, using liquidity pools.\n" +
        "\tTo understand how liquidity pools work, suppose a BTC/ETH liquidity pool has 9 BTC and 90 ETH and has issued a total of 9 tracking tokens to liquidity providers. For every tracking token a liquidity provider redeems, they can withdraw 1 BTC and 10 ETH from the liquidity pool. \n"}</p>

        <p style={figureText}> {"Figure 1: Example user and liquidity pool"}</p>
        <Image src={Figure1} alt={"Example user and liquidity pool"}/>
        <p style={text}>{"\tIf a user now deposits 1 BTC and 10 ETH into the liquidity pool, they will be issued 1 tracking token out of a total of 10 tracking tokens in the entire liquidity pool. \n"}</p>
        <p style={figureText}> {"Figure 2: Depositing liquidity"}</p>
        <Image src={Figure2} alt={"Depositing liquidity"}/>
        <p style={text}>{"\tThis pool also allows swaps to happen. For example, a trader can swap BTC for ETH. If they swap 0.1 BTC for 1 ETH, the pool now has 10.1 BTC and 99 ETH. However, the number of tracking tokens, 10, does not change. Now, instead of each BTC being worth 10 ETH, a BTC is worth ~9.8 ETH. Since the trader “bought” ETH and “sold” BTC, the value of BTC has dropped while the value of ETH has risen.\n"}</p>
        <p style={figureText}> {"Figure 3: Example of swapping 0.1 BTC for 1 ETH"}</p>
        <Image src={Figure3} alt={"Example of swapping 0.1 BTC for 1 ETH"}/>
        <p style={text}>{"\tHowever, this linear price calculation opens the market up for abuse. If enough BTC were traded for ETH such that there was hardly any ethereum left in the liquidity pool, the price of ETH would be near infinity. Instead, liquidity pools rely on a market maker function. In a “constant product pool,” which is the formula JellySwap will use, the product of the two assets must remain constant after a swap. "}</p>
        <Image src={Equation1} alt={"Equation1"}/>
        <p style={text}> {"\tBy depositing 0.1 BTC, the total balance of BTC would become 10.1, and we can calculate the amount of ETH to withdraw to balance the equation. The amount of ETH left in the pool after the swap must be:"}</p>
        <Image src={Equation2} alt={"Equation2"}/>
        <p style={text}> {"\tThus, the user can withdraw up to"}</p>
        <Image src={Equation3} alt={"Equation3"}/>
        <p style={text}> {"\tSince the expected ETH for .1 BTC was 1 ETH but the user only got 0.99 ETH, there was a “price slippage” of 1%. User B got 99% of the expected value at the current price. However, as the size of the liquidity pool grows, regular traders would face a far lower price slippage. \n" +
        "\n" +
        "\tNow suppose a user tries to swap 5 BTC for ETH in a pool that originally has 10 BTC and 100 ETH. The expected quantity of ETH received is 50 ETH. However, since the swap makes up such a large percentage of the original quantity of BTC in the pool, there will be a large price slippage. \n"}</p>
        <Image src={Equation4} alt={"Equation4"}/>
        <p style={text}> {"\tSince the expected ETH was 50 but the user only got 33, there was 33/50 = 66% efficiency, or a price slippage of 33%. Thus, it is beneficial to encourage as much liquidity as possible to give swappers the most efficient trades possible. That is why a small fee of each transaction will be returned to liquidity providers, expanding the liquidity pool and encouraging people to provide liquidity. \n"}</p>

        <Text {...sectionTitle} content={"4 Bringing Value to Jelly Token"} />
        <p style={text}>{"\tWe will take several measures to capture value for the $JELLY token. \n" +
        "Each transaction will have a fee of 0.25%:\n" +
        "• 0.17% transaction fee returned to liquidity providers to encourage people to provide more liquidity. This will also bring new investors to $JELLY, increasing demand\n" +
        "• 0.05% transaction fee used to buy back and burn $JELLY tokens, creating a stable source of demand while reducing the supply of $JELLY on the market\n" +
        "• 0.03% transaction fee for the $JELLY treasury, used to build infrastructure and develop the project further\n"}</p>

        <Text {...sectionTitle} content={"5 Conclusion"} />
        <p style={text}>{"\tThe Cardano blockchain has lower fees, faster transaction times, a higher transaction/second limit, and greater energy efficiency. With worldwide adoption of cryptocurrencies in motion, Cardano could likely be the cryptocurrency of choice for businesses and individuals alike. \n" +
        "With Smart Contracts launching later this year, there will be a huge surge in economic activity on the Cardano blockchain, and JellySwap aims to fulfill the need of a market to trade these tokens.\n"}</p>

      </Container>
    </WhitepaperWrapper>
  );
};

// Whitepaper default style
WhitepaperSection.defaultProps = {
  // Whitepaper section title default style
  title: {
    content: 'JellySwap Finance',
    fontSize: ['36px', '39px', '45px', '54px', '54px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    textAlign: ['left', 'left'],
  },
  subtitle: {
    content: 'June 23, 2021',
    as: 'span',
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: '27px',
    color: '#525f7f',
    textAlign: ['left', 'left'],
  },
  sectionTitle: {
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '100%', '100%'],
    textAlign: ['center', 'center'],
  },
  text: {
    whiteSpace: 'pre-wrap',
    fontSize: '22px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['30px', '30px', '40px', '40px', '55px'],
    textAlign: ['left', 'left'],
    maxWidth: '90%',
    paddingLeft: '10%',
  },
  figureText: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['30px', '30px', '40px', '40px', '55px'],
    maxWidth: ['100%', '100%', '100%', '100%', '100%'],
    textAlign: 'center',
  },
};

export default WhitepaperSection;
