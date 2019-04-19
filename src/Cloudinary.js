import React from 'react';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react'

const CLOUD_NAME = "dqklw4e9q",
  PRESET = "ncuacbjd";

function uploadFile(file) {

  var url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
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

          //response shape
          /**
          access_mode: "public"
          bytes: 20461
          created_at: "2019-04-17T01:29:30Z"
          etag: "5ae99eaa2f2dc1f794226fbf00b9665e"
          format: "jpg"
          height: 400
          original_filename: "image"
          placeholder: false
          public_id: "cqpsvifizclxhlrlv5ji"
          resource_type: "image"
          secure_url: "https://res.cloudinary.com/danu5qwvx/image/upload/v1555464570/cqpsvifizclxhlrlv5ji.jpg"
          signature: "69b29e0b9590c1927c107036defc689825220d08"
          tags: []
          type: "upload"
          url: "http://res.cloudinary.com/danu5qwvx/image/upload/v1555464570/cqpsvifizclxhlrlv5ji.jpg"
          version: 1555464570
          width: 600
          **/
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
  }

  onChange(event) {
    var file = event.target.files[0];
    uploadFile(file)
      .then(result => {
        this.props.onResult(`v${result.version}/${result.public_id}.${result.format}`);
      })
      .catch(err => {
        //todo error is swalloed for now
      })
  }

  openImagePicker() {
    this.inputRef.current.click();
  }

  render() {
    return (
      <div>
        <input  type="file" name="file"  onChange={this.onChange.bind(this)} ref={this.inputRef}/>

      </div>

    )
  }
}
