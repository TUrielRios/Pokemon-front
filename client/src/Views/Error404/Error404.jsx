import React from 'react';
import error from '../../assets/notFound.gif'

const Error404 = () => {
    return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Error 404</h1>
        <p>Page not found.</p>
        {<img src={error} alt="Error 404" /> }
    </div>
    );
};

export default Error404;
