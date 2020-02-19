import React from 'react';
import { Link } from 'react-router-dom';

function ExtraBass() {
  return (
    <div className="extra-bass-react">
      <Link to="/Wiless" className="offset-5 col-2 row mt-4"><button className="btn-react-custom btn btn-warning w-100">ExtraBass-wifi</button></Link>
    </div>
  );
}

export default ExtraBass;