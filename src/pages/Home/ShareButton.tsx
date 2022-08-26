import { FC } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share-rc-18";

interface ShareButtonProps {
  baseUrl:string;
  fbQuote:string;
  fbHashtag:string;
  twitterTitle:string;
  titterVia:string;
  twitterHashtag:string;
  linkedinSummery:string;
  linkedinSource:string;
}

const ShareButton: FC<ShareButtonProps> = ({
  baseUrl,
  fbQuote,
  fbHashtag,
  twitterTitle,
  titterVia,
  twitterHashtag,
  linkedinSummery,
  linkedinSource,
}) => {
  return (
    <>
      <div className="pt-8 flex space-x-2">
        <FacebookShareButton
          url={baseUrl}
          quote={fbQuote}
          hashtag={`#${fbHashtag}`}
        >
          <FacebookIcon size={30} round={true} />
        </FacebookShareButton>
        <TwitterShareButton
          url={baseUrl}
          title={twitterTitle}
          via={titterVia}
          hashtags={[`${twitterHashtag}`]}
        >
          <TwitterIcon size={30} round={true} />
        </TwitterShareButton>
        <LinkedinShareButton
          url={baseUrl}
          summary={linkedinSummery}
          source={linkedinSource}
        >
          <LinkedinIcon size={30} round={true} />
        </LinkedinShareButton>
        <WhatsappShareButton url={baseUrl}>
          <WhatsappIcon size={30} round={true} />
        </WhatsappShareButton>
      </div>
    </>
  );
};

export default ShareButton;
