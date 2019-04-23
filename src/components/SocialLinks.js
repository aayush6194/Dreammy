import React from 'react';

const facebookUrl = "https://www.facebook.com/";
const instagramUrl = "https://www.facebook.com/";
const twitterUrl = "https://www.twitter.com/";


const SocialLinks = ({facebook, instagram, twitter})=>(
  <div>
  {facebook?
     <a href={facebookUrl + facebook}><i className="fab fa-facebook txt-xl"></i></a>
     :<i className="fab fa-facebook txt-xl disabled"></i>}&nbsp;&nbsp;
  {instagram?
   <a href={instagramUrl + instagram}><i className="fab fa-twitter-square txt-xl"></i></a>
   :<i className="fab fa-twitter-square txt-xl"></i>}&nbsp;&nbsp;
   {twitter?
    <a href={twitterUrl + twitter}><i className="fab fa-twitter-square txt-xl"></i></a>
    :<i className="fab fa-linkedin txt-xl disabled"></i>}&nbsp;&nbsp;
    </div>
)

export default SocialLinks;
