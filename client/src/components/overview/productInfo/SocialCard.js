import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton
} from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitterSquare,
  faPinterestSquare
} from '@fortawesome/free-brands-svg-icons';

const SocialCard = () => {
  const ulStyles = {
    display: 'inline',
    padding: '0px'
  };

  const liStyles = {
    display: 'inline',
    margin: '2px'
  };

  return (
    <div data-testid="socialCard">
      <ul style={ulStyles}>
        <li style={liStyles}>
          <FacebookShareButton url="https://google.com" quote={'i <3 google'}>
            <FontAwesomeIcon icon={faFacebookSquare} size="lg" color="gray" />
          </FacebookShareButton>
        </li>
        <li style={liStyles}>
          <TwitterShareButton url="https://google.com" quote={'i <3 google'}>
            <FontAwesomeIcon icon={faTwitterSquare} size="lg" color="gray" />
          </TwitterShareButton>
        </li>
        <li style={liStyles}>
          <PinterestShareButton url="https://google.com" quote={'i <3 google'}>
            <FontAwesomeIcon icon={faPinterestSquare} size="lg" color="gray" />
          </PinterestShareButton>
        </li>
      </ul>
    </div>
  );
};

export default SocialCard;
