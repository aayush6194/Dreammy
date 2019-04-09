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
  grid-row: 1 / span 2;
`;

 const MdImg = styled(SmImg)`
  width: 7em;
  height: 7em;
  display: inline-block;
  padding: 0;
  margin: 0.5em;
  grid-row: 1 / span 3;
`;

class Dashboard extends React.Component {
  constructor(props) {super(props);
    this.state = {
                   data: {
                       post: [{
                              image: "",
                              url: "https://images.unsplash.com/photo-1553531384-ab9ba1a8b1e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
                              caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet",
                              limit: 500,
                              time: 10,
                              year: 2019,
                              location: "US",
                              poster: "",
                              posterImg:"",
                              link: "",
                              comments: [{name: "Jane Doe", comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor d", limit: 280, pic: "https://randomuser.me/api/portraits/women/79.jpg", time: 0},
                                          {name: "Jane Doe", comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed", limit: 120},
                                         {name: "Jane Doe", comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",limit: 120},
                                        ]
                        },
                         {
                              image: "",
                              url: "https://images.unsplash.com/photo-1515683359900-6922e4964be1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                              caption: "",
                              link: "",
                              comments: [{name: "Jane Doe", comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed", limit: 120},
                                          {name: "Jane Doe", comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",limit: 120},
                                         {name: "Jane Doe", comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",limit: 120},
                                        ]
                        }


                             ]

                     }


  }

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
        <div className="main">
            <Post style={{display: "grid", gridTemplateColumns: "1fr 45px"}}>
              <input id="search"  type="text" placeholder=" Search your dreams.."/>
               <i className="material-icons txt-lg blue-txt bold v-center pointer center">search</i>
            </Post>
             {this.state.data.post.map((props) =><Posts key={props.toString()} post={props}/>)}
        </div>
         <div style={{ height: "9em"}}></div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
