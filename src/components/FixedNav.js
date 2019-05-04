import React from 'react';
import styled from 'styled-components';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AudioRecorder from 'react-audio-recorder';
import ReactDOM from 'react-dom'


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
 start = () =>{this.setState({recording: true})}
 stop = () =>{this.setState({recording: false})}
 record = ()=>{
//  this.setState({recording: true});
  let chunks = [];
  let audio = new Audio();
  const audioContext = window.AudioContext;
  const audioCtx = new AudioContext();

  function errorCallBack(streamError){ alert("Recording is supported not Supported. " + streamError);}

  let successCallBack = function(audioStream) {
    let start = this.start();
    let stop = this.stop();
    let mediaRecorder = new MediaRecorder(audioStream);
    mediaRecorder.start();

    this.play.current.addEventListener('click', ()=>  {
        mediaRecorder.stop();
        start();
        console.log("Stopped: 1");
      });

     mediaRecorder.onstop = function(e) {
       console.log("Stopped: 2");
       stop();
      let blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
      chunks = [];
      var url = `https://api.cloudinary.com/v1_1/dqklw4e9q/video/upload`;
      var xhr = new XMLHttpRequest();
      var fd = new FormData();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      fd.append('upload_preset', "ncuacbjd");
      fd.append('file', blob);
      xhr.send(fd);
      return new Promise((resolve, reject) => {
        xhr.onreadystatechange = function(e) {
          if (xhr.readyState == 4) {
            if (xhr.status < 200 || xhr.status > 299) {
              return reject();
            }
            else {
              var response = JSON.parse(xhr.responseText);
              resolve(response);
            }
          }
        };
      });
      }
      mediaRecorder.ondataavailable = function(e) {
        chunks.push(e.data);
  }
}

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({audio: true, video: false}).
    then(successCallBack, errorCallBack);
  } else {
    alert("Recording is not supported on this browser");
  }
  }

componentDidMount(){

}


  render(){
          return( <div>
                <Float className="hoverr white-txt pointer " onClick={this.record} ref={this.play}>
                {!this.state.recording? <i className="material-icons white-txt txt-xl">mic</i>: <i className="material-icons white-txt txt-xl">fiber_manual_record</i> }
                </Float>

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
