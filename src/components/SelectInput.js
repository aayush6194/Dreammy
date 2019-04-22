import React from 'react';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';

const SelectInput = ({arr, action})=>(<Select native name="category" onChange={action}
                                        input={<Input />}>
                                        <option value= "" />
                                        {arr.map((data,index)=><option key={index} value={data}>{data}</option>)}
                                       </Select>);
 export default SelectInput;
