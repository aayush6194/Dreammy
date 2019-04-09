import React from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
  position: absolute;
  left: calc(50% - 40px);
  top: calc(50% - 40px);
  display: inline-block;
  width: 80px;
  height: 80px;
  padding: 67px;
  border: 4px;
  border-style: solid solid hidden hidden;
  border-radius: 50%;
  animation: rot 2s linear infinite;

  @keyframes rot {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    }
  }
`;

const LoaderText = styled.div`
  position: absolute;
  left: calc(50%);
  top: calc(50% + 15px);
`;
const Loader = ()=> (
  <div>
    <Spinner></Spinner>
    <LoaderText>Loading..</LoaderText>
  </div>);

export default Loader;
