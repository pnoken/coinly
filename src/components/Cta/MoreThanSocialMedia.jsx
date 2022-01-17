import socialInteraction from "../../images/social_interaction.svg";
import Features from "../Styled/Features.styled";
import { Flex } from "../Styled/Flex";

function SocialMedia() {
  return (
    <Features>
      <Flex>
        <div>
          <img src={socialInteraction} alt="crypto strategy" />
        </div>
        <header>
          <h1>More than just a social media for crypto ethusiasts</h1>
          <h2>
            Manage and track all your top cryptos in one place, Get informed and
            autoparticipate in top airdrops. Interact with top crypto peers,
            learn from each other, challenge yourselves and build together. Top
            performers get rewarded with tokens occassionally.
          </h2>
        </header>
      </Flex>
    </Features>
  );
}

export default SocialMedia;
