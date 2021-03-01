import React from 'react';
import './BackgroundAttactment.css';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
function BackgroundAttactment() {
  return (
    <div className="bgAttact">
      <div className="bgAttact__content">
        <h1>It’s more than just music. It’s the universal language.</h1>
        <button>
          <span>DONATE</span> <ArrowRightAltIcon />
        </button>
      </div>
    </div>
  );
}

export default BackgroundAttactment;
