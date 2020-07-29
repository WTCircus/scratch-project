import React from 'react';
import '../scss/app.scss';

const Landing = (props) => {
  return (
    <div className="loginWrapper container loginAndSignUp">
      <div className="row" style={{ height: '15vh' }}></div>
      <div className="col" style={{ maxWidth: '90%' }}>
        <h3 style={{ textAlign: 'center', margin: '30px', color: '$warmGray' }}>feeling generous?</h3>
        <button className="btn btn-primary loginAndSignUpBtn">signup</button>
        <button className="btn btn-primary loginAndSignUpBtn">login</button>
      </div>
      <div className="row" style={{ height: '20vh' }}></div>
    </div>
  );
};

export default Landing;
