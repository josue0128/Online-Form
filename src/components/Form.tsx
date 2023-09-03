import React, { useState } from 'react';
import Personal from './Personal';
import Pet from './Pet';
import Other from './Other';
import { Step, StepLabel, Stepper,Box } from '@mui/material';
import {Errors} from './Erros';


export const Form = () => {

  const stylebtn = {
    marginLeft:'10px'
  }
  
  const Titles = ['Personal Information','Pet Information','Additional Information'];
  const [page,setCurrentPage] = useState(0);
  const [errors,setErrors] = useState({})

  const [formData,setFormData] = useState({
    f_name:'',
    last_name:'',
    email:'',
    cell_phone: '',
    pet_name:'',
    breed:'',
    age:0,
    other_information:''
  })
  

  const validInputs = ()=>{
    const err_arr: Errors = {
      
    };

    if(page === 0){
      if(formData.f_name.trim() === ''){
          err_arr.f_name = 'please enter valid name';
      }
      if(formData.last_name.trim()=== ''){
        err_arr.last_name = 'please enter valid last name';
      }
      if(formData.email.trim() === ''){
        err_arr.email = 'please enter email address';
      }else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email.trim())) {
        err_arr.email = 'Invalid email format';
      }
      if(formData.cell_phone.trim() === ''){
        err_arr.cell_phone = 'please enter cell phone number';
      }
    }
    if(page === 1){
        if(formData.pet_name === ''){
          err_arr.pet_name = 'please enter pet name'
        }
        if(formData.breed === ''){
          err_arr.breed = 'please specify breed'
        }
        if(formData.age === 0){
          err_arr.age = 'please enter pet age';
        }
    }
  
    

    setErrors(err_arr);
    return Object.keys(err_arr).length === 0;
  }
  const back = () =>{
    setCurrentPage((currentPage)=> currentPage - 1)
  }
  const next = () =>{
    if(validInputs()){
      setCurrentPage((currentPage)=> currentPage + 1)
    }
  }
  const submit = () =>{
    fetch("http://localhost:8080/appointment/",{
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
    alert('submitting form')
    console.log(formData);
  }

  const display = ()=>{
    if(page === 0){
      return <Personal formData={formData} setFormData={setFormData} error={errors}/>
    }else if(page === 1){
      return <Pet formData={formData} setFormData={setFormData} error={errors}/>
    }else if(page === 2){
      return <Other formData={formData} setFormData={setFormData}/>
    }
  }

 
  return (
    
    <div className='container'>
       <div className='row mt-3'>
          <Stepper activeStep={page} alternativeLabel>
            {Titles.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
       </div>
       <div className="body mt-5">
                {display()}
       </div>
       <div className="footer mb-3">
          <button type='button' className='btns' disabled = {(page === 0)?true:false} onClick={()=>back()}>Back</button>
          <button type='button' className='btns' style={stylebtn} onClick={
            ()=> {
                  if(page === (Titles.length - 1)){
                      submit();
                  }else{
                      next();
                  }
                  
                 }} >

              {(page === (Titles.length -1))?'Submit':'Next'}</button>
       </div>
    </div>
    
  )
}
export default Form