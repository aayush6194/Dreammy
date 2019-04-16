import React from 'react';
 import styled from 'styled-components';
import Comments from  './Comments';

const ProfileImg = styled.img`
 border-radius: 50%;
 display: block;
 border: 2px solid #006666;
 margin: 0 auto;
 padding: 0.5em;
 width: 10em;
 height: 10em;
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
  grid-row: 1 / span 2;
`;


  const Posts =({post})=>{
    return(
    <Post>
        <div style={{background: "linear-gradient(45deg, #E0E0E0, #BFC9CA)",}}>
         <User>
                <SmImg className="sm" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
                <div className="blue-txt bold txt-md" style={{alignSelf: "end"}}>{} Jane Doe</div>
                <div className="" style={{alignSelf: "top", color: "gray"}}>{} 8:00, Today</div>
               {//<div className="blue-txt" style={{alignSelf: "center"}}>{} CA, US</div>
               }
          </User>
          {post.caption.length > 0? <div style={{padding: "0 0.7em 0.5em 0.7em"}}>{post.caption.substring(0, post.limit)}</div> : null}
           {post.caption.length> post.limit?
             <span style={{justifySelf: "end", cursor: "pointer"}} className="blue-txt bold"> See More&nbsp;<i className="material-icons br-50">expand_more</i>&nbsp; </span> : null}
          {post.url.length > 0?  <img src={post.url} alt="user" /> : null}
          </div>
            <div className="blue-bg ">
              <button className="btn hover blue-bg half" style={{background: "#006666"}}><i className="material-icons">thumb_up</i></button>
              <button className="btn hover blue-bg half" style={{background: "#006666"}}><i className="material-icons">comment</i></button>
            </div>
             {post.comments.map(({name, comment, limit}) =>
               <Comments  key={name.toString()+comment.toString()} name={name} comment={comment} limit={limit}/>
             )}
       </Post>

    );
  }

  export default Posts;
