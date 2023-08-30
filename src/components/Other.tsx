import React from 'react'
import {FormData} from'./Interface';

interface OtherProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}
const Other : React.FC<OtherProps>   = ({formData,setFormData}) => {
  return (
    <div className='mb-3'>
        <textarea className="form-control" id="other_info" rows={3} value={formData.other_information} onChange={(event)=>setFormData({...formData,other_information:event.target.value})}></textarea>
    </div>
  )
}
export default Other;