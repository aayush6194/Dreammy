import React from 'react';
import Cloudinary from './Cloudinary';
import styled from 'styled-components';
import Posts from  './components/Posts';
import AllPosts from  './components/AllPosts';
import './App.css';
import { cloudinaryUrl } from './utils/utils';
import { timingSafeEqual } from 'crypto';
import Loader2 from  './components/Loader2';
import Modal from  './components/Modal';
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

const Grid = styled(Post)`
  display: grid;
  grid-template-columns: 7em 1fr;
  width: 100%;
  border-color: #006666;
  padding: 0.5em;
`;

 const SmImg = styled(ProfileImg)`
  width: 4em;
  height: 4em;
  display: inline-block;
  padding: 0;
  margin: 0.5em;
  grid-row: 1 / span 2;`;

 const MdImg = styled(SmImg)`
  width: 7em;
  height: 7em;
  display: inline-block;
  padding: 0;
  margin: 0.5em;
  grid-row: 1 / span 3;`;

 const Grid3 = styled.div`
justifySelf: stretch;
display: grid;
grid-template-columns: auto 1fr;
 `;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.cloudinaryRef = React.createRef();
  }

  componentWillMount(){
    this.props.contentNotLoaded();
  }

  componentDidMount(){
    this.props.refreshPosts("all");
  }
  //result is a string of format v1112313/abc.jpg
  onCloudinaryResult(result) {
    if (result)
      this.props.onChange({target: { name: "imageUrl", value: [result] }});
    }

  onAttachmentClick = () => {this.cloudinaryRef.current.openImagePicker();
  }

  render() {
    const {contentLoaded, data} = this.props;
    return (
       <div className="containerr">
       <Modal />
        <div className="profile-box full">
          <Grid>
           <MdImg className="md" src={cloudinaryUrl(this.props.user.imageUrl)} alt="user" />
          <div style={{gridRow: "1 / span 2", alignSelf: "end"}}>
            <label htmlFor="textarea2">Share Your Dreams</label>
            <textarea id="textarea2"  defaultValue="" name="caption" className="materialize-textarea" data-length="1000" onChange={this.props.onChange}></textarea>
          </div>
          <Grid3  className="blue-txt">
           <Cloudinary onResult={this.onCloudinaryResult.bind(this)} ref={this.cloudinaryRef}/>
           <div>
            <div style={{height: "2.7em", cursor:"pointer"}} onClick={this.onAttachmentClick} >Photo <i  className="material-icons blue-txt">image</i> &nbsp; </div>
            <button className="bordered" onClick={e =>{ e.preventDefault(); this.props.submitPost(); }}>Post</button>
          </div>
          </Grid3>
          </Grid>

        <div className="main full" >
            <Post style={{display: "grid", gridTemplateColumns: "1fr 45px"}}>
              <input id="search"  type="text" placeholder=" Search your dreams.."/>
               <i className="material-icons txt-lg blue-txt bold v-center pointer center">search</i>
            </Post>
            {!contentLoaded? <div><Loader2 /><div style={{height: "80em"}}></div></div> : null}
            {contentLoaded && data.post.length == 0?
              <Post className="pad"><h4 className="center bold blue-txt">No Post to Show!</h4></Post> : data.post.map((data, i) =><Posts key={i} addComments={this.props.addComments} post={data}/>)}
        </div>
         <div style={{ height: "9em"}}></div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
