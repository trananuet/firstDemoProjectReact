import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header(cla = {}) {
  const { className } = cla;
  return (
    <header className={[className, 'container'].join(' ')}>
      <h3 className="view-tiles bg-info text-white">SONY - REACT</h3>
      <h3 className="bg-success text-white ">XB</h3>
      <div className="row m-0">
        <Link to="/Wifi" className="offset-2 col-3"><button className="btn-react-custom btn btn-primary">WIFI</button></Link>
        <Link to="/ExtraBass" className="offset-2 col-3"><button className="btn-react-custom btn btn-primary">EXTRA BASS</button></Link>
      </div>
    </header>
  );
}

export default styled(Header)`
  .btn-react-custom {
    color: #fff;
    width: 100%;
  }
`;