import React from 'react';
 import styled from 'styled-components';
import Comments from  './Comments';
import { cloudinaryUrl } from '../utils/utils';
import '../App.css';
const ProfileImg = styled.img`
 border-radius: 50%;
 display: block;
 border: 2px solid #006666;
 margin: 0 auto;
 padding: 0.5em;
 width: 10em;
`;
const Post = styled.div`
  border-top: 1px solid #2B547E;
  margin: 0.7em;
  box-shadow: 0 .25em .5em rgba(0,0,0,.5);
  border-radius: .5em;
  border: 3px solid transparent;
`;

const User = styled.div`
  display: grid;
 grid-template-columns: auto 1fr;
`;

 const SmImg = styled(ProfileImg)`
  width: 4em;
  height: 4em;
  display: inline-block;
  padding: 0;
  margin: 0.5em;
  grid-row: 1 / span 3;
`;

const Badge = styled.div`
  color: white;
  background: #42a5f5;
  padding: 0.3em;
  margin: 0.4em;
  text-align: center;
  border-radius: 7px;
  font-weight: bold
`;

  const Posts =({post})=>{

    const {firstName, lastName, imageUrl} = post.userId;
    const date = new Date(post.createdAt).toDateString();
    const limit = 300;
    return(
    <Post>
        <div style={{background: "linear-gradient(45deg, #E0E0E0, #BFC9CA)"}}>
         <User>
                <SmImg className="sm" src={imageUrl} alt="user" />
                <div className="blue-txt bold txt-md capitalize align-end"> {firstName + " " + lastName}  </div>
                <div className="" style={{alignSelf: "top", color: "gray"}}>{date}</div>
          </User>
          {post.caption.length > 0? <div style={{padding: "0 0.7em 0.5em 0.7em", whiteSpace: "pre-wrap"}}>{post.caption.substring(0, limit)}</div> : null}
          {post.caption.length> limit?
             <span style={{justifySelf: "end", cursor: "pointer"}} className="blue-txt bold"> See More&nbsp;<i className="material-icons br-50">expand_more</i>&nbsp; </span> : null}
          {post.imageUrl && post.imageUrl.length > 0?  <img src={cloudinaryUrl(post.imageUrl[0])} alt="user" /> : null}
        </div>
        <div className="blue-bg ">
              <button className="btn hoverr blue-bg half" style={{background: "#006666"}}><i className="material-icons">thumb_up</i></button>
              <button className="btn hover blue-bg half" style={{background: "#006666"}}><i className="material-icons">comment</i></button>
        </div>
        <User><SmImg className="sm" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" /><input name="comment" placeholder="Type Your Comment Here..."/></User>
        {post.comments.map(({text}, index) =>
          <Comments  key={index} name={"name"} comment={text} limit={200}/>
        )}
       </Post>

    );
  }

  export default Posts;
