import React from 'react';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react'
import Loader from  './components/Loader';
const CLOUD_NAME = "dqklw4e9q",
  PRESET = "ncuacbjd";

function uploadFile(file) {

  var url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/video/upload`;
  var xhr = new XMLHttpRequest();
  var fd = new FormData();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

  fd.append('upload_preset', PRESET);
  fd.append('file', file);
  xhr.send(fd);

  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = function(e) {
      if (xhr.readyState == 4) {
        if (xhr.status < 200 || xhr.status > 299) {
          return reject();
        }
        else {
          // File uploaded successfully
          var response = JSON.parse(xhr.responseText);
          resolve(response);
        }
      }
    };
  });
}

export default class Cloudinary extends React.Component{

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {uploading: false, finised: false};
  }

  onChange(event) {
    var file = event.target.files[0];
    this.setState({finished: false});
    if(file){
    this.setState({uploading: true, finished: false});
    uploadFile(file)
      .then(result => {
        this.props.onResult(`v${result.version}/${result.public_id}.${result.format}`);
        this.setState({uploading: false, finished: true});
      })
      .catch(err => {
        this.setState({uploading: false});
        alert("Error Uploading");
      })
     }
  }

  openImagePicker() {
    this.inputRef.current.click();
  }

  render() {
    return (
      <div>
        <input  style={{display: "none"}} type="file" name="file"  onChange={this.onChange.bind(this)} ref={this.inputRef}/>
        {this.state.uploading? <Loader text={"Loading"}/> : null}
        {this.state.finished? <div><i className="material-icons blue-txt bold">done</i></div> : null}
      </div>

    )
  }
}
