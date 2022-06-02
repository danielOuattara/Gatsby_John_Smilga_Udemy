import React from 'react';
import { Link } from 'gatsby';

export default function NotFound() {
    return (
        <div>
            <Link to="/">Go back Home </Link>
            <h2>404</h2>
            <p>Sorry, page not found</p>
        </div>
    );
}
