import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const backdropToggle = ['Backdrop',props.show?'BackdropOpen':'BackdropClose']
    return(
    <div className={backdropToggle.join(' ')}></div>
    )
};

export default backdrop;