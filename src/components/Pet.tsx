import React from 'react';
import {FormData} from'./Interface';
import {Errors} from './Erros';

interface PetProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  error : Errors;
}
const Pet : React.FC<PetProps>  = ({formData,setFormData,error}) => {
  return (
    <>
      <div className='mb-3'>
          <input type = 'text' className='form-control' id='pet_name' placeholder='pet name' value={formData.pet_name} onChange={(event)=>setFormData({...formData,pet_name:event.target.value})}/>
          {error.pet_name && <span className='error'>{error.pet_name}</span>}
      </div>
      <div className='mb-3'>
        <input type = 'text' className='form-control' id='breed' placeholder='breed' value={formData.breed} onChange={(event)=>setFormData({...formData,breed:event.target.value})} />
        {error.breed && <span className='error'>{error.breed}</span>}
      </div>
      <div className='mb-3'>
        <input type = 'number' className='form-control' id='age' placeholder='age' value={formData.age} onChange={(event)=>setFormData({...formData,age:parseInt(event.target.value)})}/>
        {error.age && <span className='error'>{error.age}</span>}
      </div>
    </>
  )
}
export default Pet;