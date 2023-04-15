import React from 'react';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

export default function Sticky() {
  const handleButtonClick = () => {
    window.location.href = 'tel:8591807632';
  };

  return (
    <div>
      <a href="tel:8591807632" style={{ position: 'fixed', bottom: '20px', right: '10px' }} onClick={handleButtonClick}>
        <button
          style={{
            borderRadius: '500px',
            width: '70px',
            height: '70px',
            backgroundColor: 'transparent',
            color:"#0d6efd",
            borderColor:"#0d6efd",
          }}
        >
          <AddIcCallIcon style={{width:"40px",height:"40px"}} />
        </button>
      </a>
    </div>
  );
};
