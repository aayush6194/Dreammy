import React from 'react';
 const Audio = ({url}) =>
    <div style={{margin: "0.5em"}}>
            <audio controls>
              <source src={url} type="audio/ogg" />
              Your browser does not support the audio element.
              </audio>
                  <div>
           <a className="bold" href={url}>Download Link</a>
           </div>
    </div>


  export default Audio;
