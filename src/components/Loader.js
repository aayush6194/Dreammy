import React from 'react';
import mySvg from './loader1.svg'
const Loader = ({text})=> (
  <div className="blue-txt bold">
<span className="">  {text} </span>&nbsp; <img style={{display:"inline", verticalAlign:"middle"}} width="20" src={mySvg} alt="A Loader" />
  </div>);

export default Loader;
