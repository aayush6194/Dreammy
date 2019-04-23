import styled from 'styled-components';
import React from 'react';

const Bar = styled.div`
   border: 1px solid #B0BEC5;
   margin: 1.2em;
   opacity: 0.4;`;

const Container = styled.div`
     display: grid;
     width: 100%;
     grid-template-columns: 1fr auto 1fr auto 1fr;
     justify-items: stretch;
     text-align: center;
   `;

const Stats = ({numPosts})=>(
<Container className="bold">
  <div className="blue-txt pointer">  <br/>Posts <div className=" txt-lg">{numPosts}</div></div>
  <Bar></Bar>
  <div className="blue-txt pointer">  <br/>Friends <div className="txt-lg">0</div></div>
  <Bar></Bar>
  <div className="blue-txt pointer">  <br/>Likes  <div className="txt-lg">0</div></div>
</Container>);

export default Stats;
