import React from 'react';
import styled from 'styled-components';

const CommentBox = styled.div``;
const Comment = styled.div`
  display: grid;
  border-top: 1px solid #2B547E;
  grid-template-columns: auto 1fr;`;

 const SmImg = styled.img`
  border-radius: 50%;
  border: 2px solid #006666;
  width: 4em;
  height: 4em;
  display: inline-block;
  padding: 0;
  object-fit: cover;
  margin: 0.5em;
  grid-row: 1 / span 2;`;

 const Comments = ({name, comment, limit, imageUrl, createdAt, id})=>{
   const date = new Date(createdAt).toDateString();
  return ( <CommentBox>
              <Comment>
                <SmImg className="" src={imageUrl} alt="user" />
                <div style={{alignSelf: "center"}}>
                  <div className="blue-txt bold"><a href={"/profile?user="+ id}>{name}</a></div>
                  <div className="" style={{alignSelf: "top", color: "gray", fontSize: "90%"}}>{date}</div>
                </div>
                <div style={{alignSelf: "start", whiteSpace: "pre-wrap"}}>{comment.substring(0, limit-50)}</div><span></span>
              { comment.length > limit-50? <span style={{justifySelf: "end", cursor: "pointer"}} className="blue-txt bold"> See More&nbsp;<i className="material-icons br-50">expand_more</i>&nbsp; </span> : null}

              </Comment>
            </CommentBox>
   )
}
export default Comments;
