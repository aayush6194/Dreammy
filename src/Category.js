import React from 'react';
import styled from 'styled-components';
import Posts from  './components/Posts';
import './App.css';
import { cloudinaryUrl } from './utils/utils';
import Loader2 from  './components/Loader2';
import Modal from  './components/Modal';
import SelectInput from './components/SelectInput';
import api from './api';

const Post = styled.div`
  border-top: 1px solid #2B547E;
  margin: 0.7em;
  box-shadow: 0 .25em .5em rgba(0,0,0,.5);
  border-radius: .5em;
  border: 3px solid transparent;`;

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.category = ["Nature", "Meditation", "Outdoors", "Help Me out"]
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
        this.props.refreshPosts("saved")
    // api.getPosts("saved").
    // then(res=>{
    //   console.log(res);
    //   this.setState({post: [...post,res.posts]})}).
    //   catch(err=>{alert("Saver Error!")});
    // //

  }

  render() {
    const {contentLoaded, data, user} = this.props;
    return (
       <div className="containerr">

        <div className="profile-box full">
        <div className="main full" >
            <Post style={{display: "grid", gridTemplateColumns: "1fr 45px"}}>
                <SelectInput arr={this.category}     action={(e)=>{this.setState({category: e.target.value})}} inputRef={this.textBox}/>
               <i className="material-icons txt-lg blue-txt bold v-center pointer center" onClick={()=>alert(this.textBox.current.value)}>search</i>
            </Post>

            {!contentLoaded? <div><Loader2 /><div style={{height: "80em"}}></div></div> : null}
            {contentLoaded && data.post.length == 0?
           <Post className="pad"><h4 className="center bold blue-txt">No Post to Show!</h4></Post> :
           data.post.map((data, i) =>{
           if(data.category == this.state.category || this.state.category == ""){
           return(
           <Posts key={i} userImage={this.props.user.imageUrl} addComments={this.props.addComments} post={data}/>)
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
