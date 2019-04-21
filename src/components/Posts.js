import React from 'react';
 import styled from 'styled-components';
import Comments from  './Comments';
import { cloudinaryUrl } from '../utils/utils';
import '../App.css';
import api from '../api';
import { getLocalStorage}  from '../utils/utils';
const ProfileImg = styled.img`
 border-radius: 50%;
 display: block;
 border: 2px solid #006666;
 margin: 0 auto;
 padding: 0.5em;
 width: 10em;`;

const Post = styled.div`
  border-top: 1px solid #2B547E;
  margin: 2em 0.7em;
  box-shadow: 0 .25em .5em rgba(0,0,0,.5);
  border-radius: .5em;
  border: 3px solid transparent;
  `;

const User = styled.div`
display: grid;
 grid-template-columns: auto 1fr;`;

const Grid = styled(User)`
grid-template-columns: auto 1fr auto;`;

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
  font-weight: bold`;

  const Posts =(props)=>{
    const post = props.post;
    const {firstName, lastName, imageUrl} = post.userId;
    const isImage = (/\.(gif|jpg|jfif|bmp|jpeg|tiff|png|svg)$/i).test(post.imageUrl[0]);
  //  alert(isImage);
    const textInput = React.createRef()
    const date = new Date(post.createdAt).toDateString();
    const limit = 300;
    const fetch = (e)=>{
                  const obj = {text: textInput.current.value, _id: post._id, createdAt: new Date(), user:  getLocalStorage("user")};
                  api.comment({text: textInput.current.value, _id: post._id, token:  getLocalStorage("user")._id})
                  .then(res => {if(res.success){textInput.current.value = ""; props.addComments(post._id, obj )}})
                  .catch(err => {alert(err)})
   }
    return(
    <Post>
        <div style={{background: "linear-gradient(45deg, #E0E0E0, #BFC9CA)", paddingTop: "0.5em"}}>
         <User>
                <SmImg className="sm" src={cloudinaryUrl(imageUrl)} alt="user" />
                <div className="blue-txt bold txt-md capitalize align-end" style={{paddingTop: "0.5em"}}> {firstName + " " + lastName}  </div>
                <div className="" style={{alignSelf: "top", color: "gray"}}>{date}</div>
          </User>
          {post.caption.length > 0? <div style={{padding: "0 0.7em 0.5em 0.7em", whiteSpace: "pre-wrap"}}>{post.caption.substring(0, limit)}</div> : null}
          {post.caption.length> limit?
             <span style={{justifySelf: "end", cursor: "pointer"}} className="blue-txt bold"> See More&nbsp;<i className="material-icons br-50">expand_more</i>&nbsp; </span> : null}

          {isImage && post.imageUrl && post.imageUrl.length > 0?  <img  src={cloudinaryUrl(post.imageUrl[0])} alt="user" /> : null}
          {!isImage? <a href={cloudinaryUrl(post.imageUrl[0])}>{post.imageUrl[0]}</a>: null}
        </div>
        <div className="blue-bg ">
              <button className="btn hoverr blue-bg half" style={{background: "#006666"}}><i className="material-icons">thumb_up</i></button>
              <button className="btn hover blue-bg half" style={{background: "#006666"}}><i className="material-icons">comment</i></button>
        </div>
        <Grid>
          <SmImg className="sm" src={cloudinaryUrl(imageUrl)} alt="user" />
          <textarea className="materialize-textarea" placeholder="Type Your Comment Here..."  name="comment" ref={textInput}></textarea>
          <button className="btn" style={{alignSelf: "center"}} onClick={()=>fetch("poop")}><i className="material-icons">add</i></button>
        </Grid>
        {post.comments.map((data, index) =>
          <Comments  key={index} name={data.user.firstName + " " + data.user.lastName} imageUrl={cloudinaryUrl(data.user.imageUrl)}  comment={data.text} limit={200}/>
        )}
       </Post>

    );
  }

  export default Posts;
