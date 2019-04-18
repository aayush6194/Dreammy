import React from 'react';
import Posts from  './Posts';

 const AllPosts = ({post}) =>{

        return   post.map((data, index) =><Posts key={index} post={data}/>  )
  }

  export default AllPosts;
