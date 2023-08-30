import React from 'react';
import {Box} from '@mui/material';
import Form from './components/Form';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';



function App() {
  return (
    <>
      
      
      <div className='container'>
       
          <div className="parent">
            <div className="header">
              <img src={require('./images/paw.png')} style={{
                justifySelf:'end'
              }} width={50} height={50}/>
              <h1>Grooming Appointment Form</h1>
              <img src={require('./images/paw.png')} width={50} height={50}/>
            </div>
            <Form></Form>
          </div>
           
      </div>
      
    </>
  );
}
//<Header />
export default App;
