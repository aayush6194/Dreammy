import React from 'react';
import Cloudinary from './Cloudinary';
import CloudinaryAudio from './CloudinaryAudio';
import styled from 'styled-components';
import Posts from  './components/Posts';
import AllPosts from  './components/AllPosts';
import './App.css';
import { cloudinaryUrl } from './utils/utils';
import { timingSafeEqual } from 'crypto';
import Loader2 from  './components/Loader2';
import Loader from  './components/Loader';
import Modal from  './components/Modal';
import SelectInput from './components/SelectInput';
import TextField from '@material-ui/core/TextField';
const Post = styled.div`
  border-top: 1px solid #2B547E;
  margin: 0.7em;
  box-shadow: 0 .25em .5em rgba(0,0,0,.5);
  border-radius: .5em;
  border: 3px solid transparent;`;

const Grid = styled(Post)`
  display: grid;
  grid-template-columns: 8em 1fr;
  width: 100%;
  min-height: 15em;
  border-color: #006666;
  padding: 0.5em;`;

 const MdImg = styled.img`
 border-radius: 50%;
 display: block;
 border: 2px solid #006666;
 width: 7em;
  height: 7em;
  object-fit: cover;
  display: inline-block;
  padding: 0;
  margin-right: 1em;
  grid-row: 1 / span 3;`;

 const Grid3 = styled.div`
justify-self: stretch;
display: grid;
grid-template-columns: 1fr auto auto auto;
 `;

 const Grid2 = styled.div`
  display: grid;
  margin: .5em;

  color: #006666;
  justify-items: start;
  grid-column: 1 / span 3;
  grid-template-columns: 1fr auto auto  auto;
 `;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.cloudinaryRef = React.createRef();
    this.cloudinaryRef2 = React.createRef();
    this.textBox = React.createRef();
    this.category = ["Dreams", "Thoughts","Meditation", "Altered states", "Help Me out"];
    this.state ={
      text: ""
    };
  }

  componentWillMount(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    this.props.contentNotLoaded();
  }

  componentDidMount(){
    this.props.refreshPosts("all");
  }

  onCloudinaryResult2(result) {
    if (result)
      this.props.onChange({target: { name: "videoUrl", value: [result] }});
    }

  onAttachmentClick2 = () => {this.cloudinaryRef2.current.openImagePicker();
  }

  onCloudinaryResult(result) {
    if (result)
      this.props.onChange({target: { name: "imageUrl", value: [result] }});
    }

  onAttachmentClick = () => {
    this.cloudinaryRef.current.openImagePicker();
  }

  refresh = ()=>{
    this.props.refreshPosts("all");
  }

  render() {
    const {contentLoaded, data, submitting, user, onChange} = this.props;
    return (
       <div className="containerr">
        <div className="profile-box full">
          <Grid>
           <MdImg className="md" src={cloudinaryUrl(user.imageUrl)} alt="user" />
          <div style={{gridRow: "1 / span 2", alignSelf: "end"}}>
            <label htmlFor="textarea2">Share Your Dreams</label>

            <TextField  value={this.state.text}multiline  style={{width:"100%"}}
               onChange={(e)=>{this.setState({text: e.target.value}); this.props.onChange(e)}}
               name="caption"
               inputRef={this.textBox}
               margin="normal"  />
          </div>

            <Grid2>
              <div className="stretch">Share &nbsp; &nbsp; &nbsp;<SelectInput arr={["Private", "Public"]} required={true} name={"visibility"} action={onChange}/></div>
              <div>
              <div style={{height: "2.4em"}}>
                {submitting? <Loader text={"Uploading"}/> : <Cloudinary onResult={this.onCloudinaryResult.bind(this)} ref={this.cloudinaryRef}/>}
                {submitting? <Loader text={"Uploading"}/> :<CloudinaryAudio onResult={this.onCloudinaryResult2.bind(this)} ref={this.cloudinaryRef2}/>}
              </div>
              </div>


              <div className="pointer end" style={{height: "2.7em", paddingRight:"1em"}} onClick={this.onAttachmentClick2} ><span className="hide-on-sm">Audio </span><i  className="material-icons blue-txt">audiotrack</i> &nbsp; </div>
              <div className="pointer end" style={{height: "2.7em"}} onClick={this.onAttachmentClick} ><span className="hide-on-sm">Photo </span><i  className="material-icons blue-txt">image</i> &nbsp; </div>
           </Grid2>
          <Grid3   style={{gridColumn: "1 / span 2"}}  className="blue-txt">
            <div>Cateogry <SelectInput arr={this.category} required={false} name={"category"} action={onChange}/></div>
            <button className="bordered" onClick={e =>{this.setState({text: ""});   this.props.submitPost();}}>Post</button>
          </Grid3>
          </Grid>
        <div className="main full" >
            <Post style={{display: "grid", gridTemplateColumns: "1fr 45px"}}>
              <input id="search"  type="text" placeholder=" Search your dreams.."/>
               <i className="material-icons txt-lg blue-txt bold v-center pointer center">search</i>
            </Post>
            {!contentLoaded? <div><Loader2 /><div style={{height: "80em"}}></div></div> : null}
            {contentLoaded && data.post.length == 0?
          <Post className="pad"><h4 className="center bold blue-txt">No Post to Show!</h4></Post> : data.post.map((data, i) =><Posts key={i} refresh={this.refresh} addComments={this.props.addComments} user={user._id} userImage={user.imageUrl} post={data}/>)}
        </div>
         <div style={{ height: "9em"}}></div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
