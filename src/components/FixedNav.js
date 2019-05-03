import React from 'react';
import styled from 'styled-components';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AudioRecorder from 'react-audio-recorder';



const Fixed = styled.div`
border-top: 1px solid #2B547E;
margin: 0.7em;
box-shadow: 0 .25em .5em rgba(0,0,0,.5);
border-radius: .5em;
border: 3px solid transparent;
  position: fixed;
  bottom: 0em;
  width: 100vw;
  margin: 0;
  padding: 0;
  height: 4em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: stretch;
`;

const Float = styled.a`
  position: fixed;
  bottom: 5em;
  right: 1.5em;
  background: #006666;
  border-radius: 50%;
  padding: 1.1em
`;
const Btn = styled.div`
width: 100%;
height: 100%;
`;
const I = styled.i`
display: block;
margin: auto;
vertical-align: baseline;
text-align: center;
margin: 0;
padding: 0;`;


const fun = ()=>{
  navigator.mediaDevices.getUserMedia()
.then(function(stream) {
  /* use the stream */
})
.catch(function(err) {
  /* handle the error */
  alert(err)
})

}
const FixedNav = ()=>
             ( <div>
            <Float className="hoverr white-txt pointer ">
                <i className="material-icons white-txt txt-xl">mic</i>
                <AudioRecorder onChange={(e)=>{alert(e)}}/>
                </Float>

                <Fixed className="blue-bg">
                   <Btn className="hoverr pointer grid"> <Link style={{display: "grid", placeItems: "center"}} to="/"><I  className="material-icons white-txt bold txt-xl">home</I></Link></Btn>
                    <Btn className="hover pointer grid"><Link style={{display: "grid", placeItems: "center"}} to="/chat"><I className="material-icons white-txt bold txt-xl disabled">chat_bubble</I></Link></Btn>
                    <Btn className="hover pointer grid"><Link style={{display: "grid", placeItems: "center"}} to="/setting"><I className="material-icons white-txt bold txt-xl">settings</I></Link></Btn>
                   <Btn className="hover pointer grid"><Link style={{display: "grid", placeItems: "center"}} to="/profile?user=me"><I className="material-icons white-txt bold txt-xl">person</I></Link></Btn>
                  </Fixed>
                </div>
              );
export default FixedNav;
