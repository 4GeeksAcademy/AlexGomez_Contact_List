import React from 'react';

export const Alert = (props) => {
  return (
<div className={`alert ${props.danger=="#exclamation-triangle-fill"?'alert-danger':'alert-success'} d-flex align-items-center container`} role="alert">
    
      <svg
        className="bi flex-shrink-0 me-2"
        width="24"
        height="24"
        role="img"
        aria-label="Danger:"
      >
        <use xlinkHref={props.danger} />
      </svg>
      <div>
        {props.message}
      </div>
    </div>
  );
};


