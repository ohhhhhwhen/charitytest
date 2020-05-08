import React from 'react';

function Nav() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                <h4>Charity Search</h4>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/">Charity Search</a>
                    <a className="nav-item nav-link" href="/books">Favorite Charity/Organization</a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
