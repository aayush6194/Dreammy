import React from 'react';
import styled from 'styled-components';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom'
import api from '../api';

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




class FixedNav extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      recording: false
    }
    this.play = React.createRef();
  }
//  start = () =>{this.setState({recording: true})}
//  stop = () =>{this.setState({recording: false})}
//
//  record = (start, stopp, el)=>{
//   let chunks = [];
//   let audio = new Audio();
//   const audioContext = window.AudioContext;
//   const audioCtx = new AudioContext();
//   let mediaRecorder;
//
//
//
// function upload (blob){
//     var url = `https://api.cloudinary.com/v1_1/dqklw4e9q/video/upload`;
//     var xhr = new XMLHttpRequest();
//     var fd = new FormData();
//     xhr.open('POST', url, true);
//     xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
//     fd.append('upload_preset', "ncuacbjd");
//     fd.append('file', blob);
//     xhr.send(fd);
//     return new Promise((resolve, reject) => {
//       xhr.onreadystatechange = function(e) {
//         if (xhr.readyState == 4) {
//           if (xhr.status < 200 || xhr.status > 299) {
//             return reject();
//           }
//           else {
//             var response = JSON.parse(xhr.responseText);
//             resolve(response);
//           }
//         }
//       };
//     });}
//
//
//   function errorCallBack(streamError){ alert("Recording is supported not Supported. " + streamError);}
//
//
//   let successCallBack = function(audioStream) {
//     start();
//     console.log("Start");
//     mediaRecorder = new MediaRecorder(audioStream);
//     mediaRecorder.start();
//
// el.current.addEventListener('click', ()=>{ stop(stopp)});
//      mediaRecorder.onstop = function(e) {
//        console.log("Stopped: 2");
//
//       let blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
//       chunks = [];
//           upload(blob).then(result => {
//               api.addPost({videoUrl: `v${result.version}/${result.public_id}.${result.format}` , visibility: "private"})
//                   console.log(`v${result.version}/${result.public_id}.${result.format}`);
//                 })
//                 .then(res=>{
//                  alert("You Recording Saved Privately. Please Refresh the page.");
//                  })
//                  .catch(err=>{alert("Error on Uploading the posts! ")});
//       }
//       mediaRecorder.ondataavailable = function(e) {
//         chunks.push(e.data);
//   }
//
//   function stop (stopp) {
//     if(mediaRecorder != null && mediaRecorder != undefined && mediaRecorder.state != "inactive"){
//       mediaRecorder.stop();
//     }
//     stopp();
//       console.log("Stopped: 1");
//   //   el.current.removeEventListener('click', stop);
//     }
// }
//
//   if (navigator.mediaDevices.getUserMedia) {
//     navigator.mediaDevices.getUserMedia({audio: true, video: false}).
//     then(successCallBack, errorCallBack);
//   } else {
//     alert("Recording is not supported on this browser");
//   }
//   }


componentDidMount(){

}


  render(){
          return( <div>
                <Float style={{display: !this.state.recording? "block": "none"}} className="hoverr white-txt pointer " href="mailto:dreammy.info@gmail.com" >
                  <i className="material-icons white-txt txt-xl">message</i>
                </Float>

                  <Float style={{display: this.state.recording? "block": "none"}} className="hoverr white-txt pointer " ref={this.play}>  <i className="material-icons white-txt txt-xl">fiber_manual_record</i> </Float>

                <Fixed className="blue-bg">
                   <Btn className="hoverr pointer grid"> <Link style={{display: "grid", placeItems: "center"}} to="/"><I  className="material-icons white-txt bold txt-xl">home</I></Link></Btn>
                    <Btn className="hover pointer grid"><Link style={{display: "grid", placeItems: "center"}} to="/chat"><I className="material-icons white-txt bold txt-xl disabled">chat_bubble</I></Link></Btn>
                    <Btn className="hover pointer grid"><Link style={{display: "grid", placeItems: "center"}} to="/setting"><I className="material-icons white-txt bold txt-xl">settings</I></Link></Btn>
                   <Btn className="hover pointer grid"><Link style={{display: "grid", placeItems: "center"}} to="/profile?user=me"><I className="material-icons white-txt bold txt-xl">person</I></Link></Btn>
                  </Fixed>
                </div>
            )}
  }
export default FixedNav;
