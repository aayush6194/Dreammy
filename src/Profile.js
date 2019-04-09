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

const Bar = styled.div`
   border: 1px solid #B0BEC5;
   margin: 1.2em;
   opacity: 0.4;
`;

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
  constructor(props) {super(props);

    this.state = {
                   data: {
                     post: [{
                            image: "",
                            url: "",
                            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor d Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                            time: 10,
                            limit: 500,
                            year: 2019,
                            location: "US",
                            poster: "",
                            posterImg:"",
                            link: "",
                            comments: [{name: "Jane Doe", comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor d Lor", limit: 170, pic: "https://randomuser.me/api/portraits/women/79.jpg", time: 0},
                                        {name: "Jane eDoe", comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed", limit: 120},
                                       {name: "Jane eDsoe", comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",limit: 120},
                                      ]
                      }
                           ]
                    }
                   }

  }

  render() {
    return (
       <div className="containerr">
          <div className="profile-box border">
          <ProfileImg src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
          <div className="bold blue-txt txt-md">Jane Doe</div>
          <div className="pad">Lives in <span className="blue-txt bold">Colarado, Denver</span></div>
          <div className="pad">Works at <span className="blue-txt bold">Google</span></div>
         <div> <button className="hover bordered">Add</button> <button className="bordered hover">Message </button></div>

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
             {this.state.data.post.map((props) =><Posts key={props.toString()} post={props}/> )}
        <div style={{ height: "9em"}}></div>
        </div>

        </div>

    );
  }
}

export default Profile;
