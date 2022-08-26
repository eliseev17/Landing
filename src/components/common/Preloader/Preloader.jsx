import React from 'react';
import preloader from '../../../assets/images/preloader.svg';

const Preloader = (props) => {
    return <div style={ { backgroundColor: 'transparent', textAlign: 'center' } }>
        <img src={preloader}/>
    </div>
}

export default Preloader;