import socialInteraction from "../../images/social_interaction.svg";
import Features from "../Styled/Features.styled";
import { Flex } from "../Styled/Flex";

function Track() {
  return (
    <Features>
      <Flex>
        <div>
          <img src={socialInteraction} alt="crypto strategy" />
        </div>
        <header>
          <h1>Your trusted platform to track all your crypto activities</h1>
          <h2>
            Manage and track all your top cryptos in one place, Get informed and
            autoparticipate in top airdrops.
          </h2>
        </header>
      </Flex>
    </Features>
  );
}

export default Track;
