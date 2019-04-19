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
 height: 10em;`;

const Bar = styled.div`
   border: 1px solid #B0BEC5;
   margin: 1.2em;
   opacity: 0.4;`;

const Stats = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  justify-items: stretch;
  text-align: center;
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


class Profile extends React.Component {
  constructor(props) {super(props);}
  componentWillMount(){
    this.props.contentNotLoaded();
  }

  componentDidMount(){
    this.props.refreshPosts();
  }
  render() {
    console.log(this.props);

    const {firstName, lastName} = this.props.user;
    return (
       <div className="containerr">

          <div className="profile-box border">
          <ProfileImg src={this.props.user.imageUrl} alt="user" />
          <div className="bold blue-txt txt-md capitalize">{firstName + " "+ lastName}</div>
          <div className="">Lives in <span className="blue-txt bold">{this.props.user.location}</span></div>
          <div className="">Works at <span className="blue-txt bold">Google</span></div>
         <div> <button className="hover bordered">Add</button> <button className="bordered hover" >Message </button></div>

          <Stats className="bold">
            <div className="blue-txt pointer">  <br/>Posts <div className=" txt-lg">25</div></div>
            <Bar></Bar>
            <div className="blue-txt pointer">  <br/>Friends <div className="txt-lg">25</div></div>
            <Bar></Bar>
            <div className="blue-txt pointer">  <br/>Likes  <div className="txt-lg">25</div></div>
          </Stats>
         <div className="blue-txt">
          <i className="fab fa-facebook txt-xl"></i>&nbsp;&nbsp;
          <i className="fab fa-twitter-square txt-xl"></i>&nbsp;&nbsp;
          <i className="fab fa-linkedin txt-xl"></i>&nbsp;&nbsp;
          </div>
          <div className="grid-2">
            <a className="blue-txt pointer start bold">Saved Posts</a>
            <a className="blue-txt pointer end bold">More Info</a>
          </div>

        </div>
        <div className="main">
         <div className="txt-lg blue-txt bold center">2019</div>
         {this.props.data.post.map((data) =><Posts key={data.toString()+ Math.random() * 100} post={data}/>)}
         {this.props.data.post.length == 0? <div style={{marginTop: "5%", padding:"3em 0"}}><h4 className="center bold blue-txt">No Post to Show!</h4></div> : null}
        <div style={{ height: "9em"}}></div>
        </div>

        </div>

    );
  }
}

export default Profile;
