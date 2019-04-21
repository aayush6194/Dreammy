import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
position: fixed;
z-index: 1;
left: 0;
top: 0;
width: 100%;
height: 100%;
background-color: rgb(0,0,0);
background-color: rgba(0,0,0,0.4);
`;

const Modall = styled.div`
background-color: #fefefe;
margin: 10% auto;
padding: 2em;
border: 1px solid #888;
width: 80%;
color: black;`;

const Btn = styled.button`
border-radius: 50%;
color: white;
background: #006666;
border: 0;
width: 3em;
height: 3em;
`;


const Modal = props =>{
if(props.show){
    return (<Wrapper>
              <Modall>
                <Btn style={{float: "right"}} onClick={props.close} className="bt right-corner"> &nbsp;X&nbsp; </Btn>
                <input type="text" className="pad" />
                <div className="row">
                 <div className="col s1 offset-s11">
                 <button style={{float: "right"}} className="bordered">Submit</button>
                </div>
              </div>
              </Modall>
          </Wrapper>);
} else{
  return null;
}
  };

  export default Modal;
