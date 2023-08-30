import React from 'react';
import {FormData} from'./Interface';
import {Errors} from './Erros';

interface PersonalProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  error : Errors;
}

const Personal : React.FC<PersonalProps>  =({formData,setFormData,error})=>{
  return(
    <>
      <div className='mb-3 mt-3'>
          <input type = 'text' className='form-control' id='name' placeholder='first name' value={formData.f_name} onChange={(event)=>setFormData({...formData,f_name:event.target.value})}/>
          {error.f_name && <span className='error'>{error.f_name}</span>}
      </div>
      <div className='mb-3 mt-3'>
          <input type = 'text' className='form-control' id='last_name' placeholder='last name' value={formData.last_name} onChange={(event)=>setFormData({...formData,last_name:event.target.value})}/>
          {error.last_name && <span className='error'>{error.last_name}</span>}
      </div>
      <div className='mb-3 mt-3'>
          <input type = 'email' className='form-control' id='email' placeholder='email' value={formData.email} onChange={(event)=>setFormData({...formData,email:event.target.value})}/>
          {error.email && <span className='error'>{error.email}</span>}
      </div>
      <div className='mb-3 mt-3'>
          <input type = 'text' className='form-control' id='cell_phone' placeholder='cell phone' value={formData.cell_phone} onChange={(event)=>setFormData({...formData,cell_phone:event.target.value})}/>
          {error.cell_phone && <span className='error'>{error.cell_phone}</span>}
      </div>
    </>
  );
}
export default Personal;