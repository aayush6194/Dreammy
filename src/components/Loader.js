import React from 'react';
import styled from 'styled-components';
import mySvg from './loader1.svg'
const Loader = ()=> (
  <div className="blue-txt bold">
  Loading Image &nbsp; <img style={{display:"inline", verticalAlign:"middle"}} width="20" src={mySvg} alt="A Loader" />
  </div>);

export default Loader;
