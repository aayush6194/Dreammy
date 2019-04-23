
const Card = ({edit, value, onChange,field, toggle, done})=>(
  <Card>
    <span className="bold text-md sp-2-sm">{field}</span>

     {!edit?
       <span className="bold text-md">{value}</span> :
       <input value={value}  onChange={onChange}/>}

     {!3ameEdit?
     <i  className="material-icons pointer end blue-txt" style={{justifySelf: "end"}} onClick ={toggle}>edit</i> :
      <i className="material-icons pointer end blue-txt" style={{justifySelf: "end"}} onClick ={done}}>done</i>
     }
  </Card>

)
