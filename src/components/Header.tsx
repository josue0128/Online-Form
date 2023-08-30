import React from 'react';

const headerStyle = {
    //borderBottom:'2px solid black',
    margin:'0',
    backgroundColor:'#cccc',
    padding:'10px',
   boxShadow:'5px 10px 8px #888888',
    color:'black'
  }
export const Header = () => {
  return (
    <div className="main-header" style={headerStyle}>
        <h1>Rosa's Pet Grooming</h1>
    </div>
  )
}
export default Header;