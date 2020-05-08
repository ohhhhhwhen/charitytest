import PropTypes from 'prop-types';
import React from 'react';

function Jumbotron({ children }) {
    return (
        <div
            style={{
                height: 200,
                clear: `both`,
                paddingTop: 65,
                textAlign: `center`
            }}
            className="jumbotron"
        >
            {children}
        </div>
    );
}
Jumbotron.propTypes = {
    children: PropTypes.node
};

export default Jumbotron;
