import React from 'react';

const facebookUrl = "https://www.facebook.com/";
const instagramUrl = "https://www.instagram.com/";
const twitterUrl = "https://www.twitter.com/";


const SocialLinks = ({facebook, instagram, twitter})=>(
  <div>
  {facebook?
     <a  target="_blank" rel="noopener noreferrer" href={facebookUrl + facebook}><i className="fab fa-facebook txt-xl"></i></a>
     :<i className="fab fa-facebook txt-xl disabled"></i>}&nbsp;&nbsp;
  {instagram?
   <a  target="_blank" rel="noopener noreferrer" href={instagramUrl + instagram}><i className="fab fa-instagram txt-xl"></i></a>
   :<i className="fab fa-instagram txt-xl disabled"></i>}&nbsp;&nbsp;
   {twitter?
    <a  target="_blank" rel="noopener noreferrer" href={twitterUrl + twitter}><i className="fab fa-twitter-square txt-xl"></i></a>
    :<i className="fab fa-twitter-square txt-xl disabled"></i>}&nbsp;&nbsp;
    </div>
)

export default SocialLinks;
