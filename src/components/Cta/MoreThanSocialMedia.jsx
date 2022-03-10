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
        <header id="learn-more">
          <h1>More than just a social media for crypto ethusiasts</h1>
          <h2>
            Interact with your crypto peers and learn from each other, challenge
            yourselves and build together. Get rewarded with tokens
            occassionally for active engagement.
          </h2>
        </header>
      </Flex>
    </Features>
  );
}

export default SocialMedia;
