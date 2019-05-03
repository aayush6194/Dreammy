import React from 'react';
import styled from 'styled-components';
import Posts from  './components/Posts';
import './App.css';
import { cloudinaryUrl } from './utils/utils';
import Loader2 from  './components/Loader2';
import Modal from  './components/Modal';
import SelectInput from './components/SelectInput';
import api from './api';
import cloud from './images/001-cloud.svg';
import yoga from './images/002-yoga.svg';
import charity from './images/003-charity.svg';
import dream from './images/004-dream.svg';
import mortar from './images/005-mortar.svg';
import thinking from './images/006-thinking.svg';
import ufo from './images/009-ufo.svg';
const Post = styled.div`
  border-top: 1px solid #2B547E;
  margin: 0.7em;
  box-shadow: 0 .25em .5em rgba(0,0,0,.5);
  border-radius: .5em;
  border: 3px solid transparent;`;

  const Btn= styled.span`
  color: #006666;
  display: inline-block;
  place-self: stretch;
  padding: 1em;
  border: 2px solid  #006666;
  `;
  const Img= styled.img`
    height: 7em;
    width: 7em;
  `;

  const Grid6= styled.div`
 display: grid;
 width: 100%;
 grid-template-columns: repeat(2, 1fr);

  `;
class Category extends React.Component {
  constructor(props) {
    super(props);
    this.category = ["Dreams", "Thoughts","Meditation", "Altered states", "Help Me out", "Various"];
    this.textBox = React.createRef();
    this.state ={
       category: ""
   }
  }

  componentWillMount(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    this.props.contentNotLoaded();
  }

  componentDidMount(){
        this.props.refreshPosts("me")
  }
  refresh = ()=>{
    this.props.refreshPosts("me");
  }
  render() {
    const {contentLoaded, data, user} = this.props;
    return (
       <div className="containerr">
        <div className="profile-box full">
        <Grid6>
        <Btn className="hover" onClick={()=>{this.setState({category:"Dreamm"})}}><Img src={dream} alt="Dream Icon"/><div className="bold center txt-md"> Dreams</div></Btn>
        <Btn className="hover" onClick={()=>{this.setState({category:"Meditation"})}}><Img src={yoga} alt="Meditation Icon"/><div className="bold center txt-md">Meditation</div></Btn>
        <Btn className="hover" onClick={()=>{this.setState({category:"Altered states"})}}><Img src={mortar} alt="Alter States"/><div className="bold center txt-md">Altered States</div></Btn>
        <Btn className="hover" onClick={()=>{this.setState({category:"Thoughts"})}}><Img src={thinking} alt="Thoughts Icon"/><div className="bold center txt-md">Thoughts</div></Btn>
        <Btn className="hover" onClick={()=>{this.setState({category:"Help Me out"})}}><Img src={charity} alt="Help Me out Icon"/><div className="bold center txt-md">Help Me out</div></Btn>
        <Btn className="hover" onClick={()=>{this.setState({category:"Various"})}}><Img src={ufo} alt="UFO Icon"/><div className="bold center txt-md">Various</div></Btn>

        </Grid6>
        <div className="main full" >
            <Post style={{display: "grid", gridTemplateColumns: "1fr 45px"}}>
            <input/>
               <i className="material-icons txt-lg blue-txt bold v-center pointer center" onClick={()=>alert(this.textBox.current.value)}>search</i>
            </Post>
            {!contentLoaded? <div><Loader2 /><div style={{height: "80em"}}></div></div> : null}
            {contentLoaded && data.post.length == 0?
           <Post className="pad"><h4 className="center bold blue-txt">No Post to Show!</h4></Post> :
           data.post.map((data, i) =>{
           if(data.category == this.state.category){
           return(
           <Posts key={i}  refresh={this.refresh}  user={user._id} userImage={this.props.user.imageUrl} addComments={this.props.addComments} post={data}/>)
         }else if(data.category && (data.category.length >  2 &&  this.state.category.length < 2)){
           return(
            <Posts key={i}  refresh={this.refresh}  user={user._id}  userImage={this.props.user.imageUrl} addComments={this.props.addComments} post={data}/>)
         }else{
           return null;
         }
       }
         )}
        </div>
         <div style={{ height: "9em"}}></div>
        </div>
      </div>
    );
  }
}
export default Category;
