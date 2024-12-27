import React from 'react';
import '../styles/Header.css';

function Header({sname}) {
  return (
    <header className="header">
      <div className="logo"><img src= "https://www.google.com/imgres?q=sahyadri%20college%20logo&imgurl=https%3A%2F%2Fres.cloudinary.com%2Fdfxpdpbvs%2Fimage%2Fupload%2Fv1720181979%2FSayhadri-Logo-02.jpg&imgrefurl=https%3A%2F%2Fwww.sahyadri.edu.in%2F&docid=TkWSzfDXFrc76M&tbnid=TdagdrBgb2MzoM&vet=12ahUKEwiSwOycusiKAxWp4jgGHQV_OdkQM3oECBgQAA..i&w=1000&h=1000&hcb=2&ved=2ahUKEwiSwOycusiKAxWp4jgGHQV_OdkQM3oECBgQAA"  />
      <span>  Digital Campus</span>
      </div>
      <div className="user-info">{sname}</div>
    </header>
  );
}

export default Header;