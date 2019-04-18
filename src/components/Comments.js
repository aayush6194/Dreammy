import React from 'react';
import styled from 'styled-components';

const ProfileImg = styled.img`
 border-radius: 50%;
 display: block;
 border: 2px solid #006666;
 margin: 0 auto;
 padding: 0.5em;
 width: 10em;
`;

const CommentBox = styled.div``;
const Comment = styled.div`
  display: grid;
  border-top: 1px solid #2B547E;
  grid-template-columns: auto 1fr;
`;

 const SmImg = styled(ProfileImg)`
  width: 4em;
  height: 4em;
  display: inline-block;
  padding: 0;
  margin: 0.5em;
  grid-row: 1 / span 2;
`;

 const Comments = ({name, comment, limit})=>{
  return (
              <CommentBox>
              <Comment>
                <SmImg className="" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
                <div  className="blue-txt bold" style={{alignSelf: "center"}}>{name}</div>
                <div style={{alignSelf: "start"}}>{comment.substring(0, limit-50)}</div><span></span>
              { comment.length > limit-50? <span style={{justifySelf: "end", cursor: "pointer"}} className="blue-txt bold"> See More&nbsp;<i className="material-icons br-50">expand_more</i>&nbsp; </span> : null}
              </Comment>
            </CommentBox>
   )
}
export default Comments;
