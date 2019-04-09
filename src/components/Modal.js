import React from 'react';

const Modal = props =>{
if(props.show){
    return (<div className="modal-wrapper">
              <div className="modal" >
                <center>
                <button onClick={props.close} className="bt right-corner"> &nbsp;X&nbsp; </button>
                <input type="text" className="pad" />
                <button onClick={props.submit} className="btn">Submit</button>
                  </center>
              </div>
          </div>);
} else{
  return null;
}
  };

  export default Modal;
