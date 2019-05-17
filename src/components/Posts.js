import React from 'react';
 import styled from 'styled-components';
import Comments from  './Comments';
import Audio from  './Audio';
import { cloudinaryUrl, cloudinaryVideoUrl } from '../utils/utils';
import '../App.css';
import api from '../api';
import { getLocalStorage}  from '../utils/utils';
import Modal from  './Modal';
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

 const SmImg = styled.img`
 border-radius: 50%;
 border: 2px solid #006666;
  width: 4em;
  height: 4em;
  object-fit: cover;
  display: inline-block;
  padding: 0;
  margin: 0.5em;
  grid-row: 1 / span 3;`;

const Badge = styled.div`
  color: #55595A;
  background: transparent;
  padding: 0.3em;
  font-size: 1.2em,
  display: inline-block,
  margin: 0.4em;
  max-width: 10em;
  text-align: center;
  font-weight: bolder`;

  class Posts extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        limit: 200,
        showMore: true,
        commentLimit: 3,
        showMoreComments: true,
        modal: false,
        //comments: this.props.post.comments
      }
  }

  render(){
    const props = this.props;
   const post = props.post;

    const modalText = "Do you want to Delete your Post?";
    const {comments} = post;
  //  const comments = this.state.comments;
    const allComments =   comments.map((data, index) =>
    <Comments  key={index} id={data.user._id} name={data.user.firstName + " " + data.user.lastName} imageUrl={cloudinaryUrl(data.user.imageUrl)} createdAt={data.createdAt} comment={data.text} limit={200}/>)
    const limitedComments =   comments.slice(0,3).map((data, index) =>
    <Comments  key={index} id={data.user._id} name={data.user.firstName + " " + data.user.lastName} imageUrl={cloudinaryUrl(data.user.imageUrl)} createdAt={data.createdAt} comment={data.text} limit={200}/>)
    const {firstName, lastName, imageUrl, _id} = post.userId;
    const mine = props.user === _id;
    const isImage = (/\.(gif|jpg|jfif|bmp|jpeg|tiff|png|svg)$/i).test(post.imageUrl[0]);
    const textInput = React.createRef()
    const date = new Date(post.createdAt).toDateString();
    const fetch = ()=>{
                  const obj = {text: textInput.current.value, _id: post._id, createdAt: new Date(), user:  getLocalStorage("user")};
                  api.comment({text: textInput.current.value, _id: post._id, token:  getLocalStorage("user")._id})
                  .then(res => {if(res.success)
                    {
                    this.props.refresh();
                    textInput.current.value = "";
                        this.setState({comments: [...comments, obj] })}})
                  .catch(err => {alert(err)})
                }
   const savePost = ()=>{
                api.savePost({_id: post._id})
                .then(res => {
                    if(res.success){
                  //  alert("Post Liked!");
                  }else{
                    alert(res.message);
                }}).catch(err=>{alert(err)});
   }

   const deletePost = ()=>{
                api.deletePost({_id: post._id})
                .then(res => {
                    if(res.success){
                    this.props.refresh();
                  }else{
                    alert(res.message);
                }}).catch(err=>{alert(err)});

                this.setState({modal: false});
   }

    return(
    <Post>
        <div style={{background: "linear-gradient(45deg, #E0E0E0, #BFC9CA)", paddingTop: "0.5em"}}>
          <Modal show={this.state.modal}
          text={modalText} buttonText={"Confirm"}
          onConfirm={()=>{deletePost()}}
          onClose={()=>{this.setState({modal:false})}}/>
          <div style={{float: "right" , display:"grid"}}>
        {post.category && post.category.length > 3? <Badge><span style={{fontSize:"1.18em"}}>{post.category}</span></Badge>: null}
        {post.visibility && post.visibility == "private"? <div className="white-txt" style={{color: "#55595A", fontSize:".92em", justifySelf:"end", padding:".1em", marginRight: ".4em", textAlign:"center", width:"4em", borderRadius: "7px", border: "2px solid #55595A"}}>Private</div>: null}
        </div>
         <User>
                <SmImg className="sm" src={cloudinaryUrl(imageUrl)} alt="user" />
                <div className="blue-txt bold txt-md capitalize align-end" style={{paddingTop: "0.5em"}}><a href={"/profile?user="+_id}> {firstName + " " + lastName}</a> </div>
                <div className="" style={{alignSelf: "top", color: "gray"}}>{date} </div>
          </User>
          {post.caption.length > 0? <div style={{padding: "0 0.7em 0.5em 0.7em", maxHeight: "300em",  overflow: "hidden",textOverflow: "ellipsis" ,whiteSpace: "pre-wrap"}}>{post.caption.substring(0, this.state.limit)}</div> : null}
          {post.caption.length > this.state.limit && this.state.showMore?
             <span style={{display:"block", textAlign:"center"}} onClick={()=>{this.setState({limit : 3000, showMore: false})}} className="blue-txt bold pointer"> See More&nbsp;<i className="material-icons br-50">expand_more</i>&nbsp; </span> : null}
          {!this.state.showMore?
             <span style={{display:"block", textAlign:"center"}} onClick={()=>{this.setState({limit : 200, showMore: true})}} className="blue-txt bold pointer"> See Less&nbsp;<i className="material-icons br-50">expand_less</i>&nbsp; </span> : null}

          {isImage && post.imageUrl && post.imageUrl.length > 0?  <img  src={cloudinaryUrl(post.imageUrl[0])} alt="user" /> : null}
          {!isImage? <a href={cloudinaryUrl(post.imageUrl[0])}>{post.imageUrl[0]}</a>: null}
          {post.videoUrl && post.videoUrl.length > 0? <Audio url={cloudinaryVideoUrl(post.videoUrl[0])} /> : null}
        </div>
        <div className="blue-bg ">
              <button className="btn hoverr blue-bg half" onClick={()=>savePost()}><i className="material-icons">thumb_up</i></button>
              {mine?
                <button className="btn hover blue-bg half" onClick={()=>{this.setState({modal: true})}}>
                <i className="material-icons">delete</i>
                </button>:
                <button className="btn hover blue-bg half" >
                  <i className="material-icons">report</i>
                </button>}
        </div>

        <Grid>
          <SmImg className="sm" src={cloudinaryUrl(props.userImage)} alt="user" />
          <textarea className="materialize-textarea" placeholder="Type Your Comment Here..."  name="comment" ref={textInput}></textarea>
          <button className="btn-sp" style={{alignSelf: "center"}} onClick={()=>fetch()}><i className="material-icons bold txt-md">add</i></button>
        </Grid>
        {this.state.showMoreComments?
        limitedComments:  allComments
        }
        {comments.length > this.state.commentLimit && this.state.showMoreComments?
           <span style={{display:"block", textAlign:"center"}}
           onClick={()=>{this.setState({showMoreComments: false})}} className="blue-txt bold pointer"> See More&nbsp;<i className="material-icons br-50">expand_more</i>&nbsp; </span> : null}
        {!this.state.showMoreComments?
           <span style={{display:"block", textAlign:"center"}}
           onClick={()=>{this.setState({showMoreComments: true})}} className="blue-txt bold pointer "> See Less&nbsp;<i className="material-icons br-50">expand_less</i>&nbsp; </span> : null}
       </Post>
    );
  }
}
  export default Posts;
