import React from 'react';
import styled from 'styled-components';
import Posts from  './components/Posts';
import './App.css';

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
  grid-template-columns: auto 1fr;
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

class Dashboard extends React.Component {
  constructor(props) {
   super(props);
}
  componentDidMount(){

     let API = "http://localhost:3009/posts";
      fetch(API, {
          method: 'POST', headers: {"Content-Type": "application/x-www-form-urlencoded"},
          body: `email=${localStorage.getItem('email')}&token=${localStorage.getItem('token')}`,
          }).then(function(response) {
              return response.json();
         }).then((data)=>{

        this.props.setPosts(data[0].post);

         }).catch(function(err) {});
  }

  render() {
    return (
       <div className="containerr">
        <div className="profile-box full">
          <Grid>

           <MdImg className="md" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
          <div style={{gridRow: "1 / span 2", alignSelf: "end"}}>
            <label htmlFor="textarea2">Share Your Dreams</label>
            <textarea id="textarea2"  defaultValue="" className="materialize-textarea" data-length="1000" ></textarea>
       </div><div  style={{justifySelf: "stretch"}}>
            <button style={{ float: "right"}} className="bordered">Post</button>
            <span style={{ float: "right"}}><i className="material-icons blue-txt">attachment</i> &nbsp; </span></div>
          </Grid>
        <div className="main full" >
            <Post style={{display: "grid", gridTemplateColumns: "1fr 45px"}}>
              <input id="search"  type="text" placeholder=" Search your dreams.."/>
               <i className="material-icons txt-lg blue-txt bold v-center pointer center">search</i>
            </Post>
            {this.props.data.post.map((data) =><Posts key={data.toString()} post={data}/>)}
            {this.props.data.post.length == 0? <Post style={{marginTop: "2%", padding:"3em 0"}}><h4 className="center bold blue-txt">No Post to Show!</h4></Post> : null}
        </div>
         <div style={{ height: "9em"}}></div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
