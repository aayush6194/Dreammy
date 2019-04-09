import React from 'react';
import styled from 'styled-components';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
//max-width:800px;
const Float = styled.a`
  position: fixed;
  bottom: 5em;
  right: 1.5em;
  background: #006666;
  border-radius: 50%;
  padding: 1em;
`;
const Btn = styled.div``;

const FixedNav = ()=>
             ( <div>
                <Float className="hoverr white-txt pointer "><i className="material-icons">add</i></Float>
                <Fixed className="blue-bg">
                   <Btn className="hover pointer grid"> <Link to="/"><i className="material-icons white-txt bold txt-xl">home</i></Link></Btn>
                    <Btn className="hover pointer grid"><Link to="/"><i className="material-icons white-txt bold txt-xl disabled">chat_bubble</i></Link></Btn>
                    <Btn className="hover pointer grid"><Link to="/setting"><i className="material-icons white-txt bold txt-xl">settings</i></Link></Btn>
                   <Btn className="hover pointer grid"><Link to="/profile"><i className="material-icons white-txt bold txt-xl">person</i></Link></Btn>
                  </Fixed>
                </div>
              );
export default FixedNav;
