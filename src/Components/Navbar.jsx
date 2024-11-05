import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { isAuthenticated } = useAuth0();

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <nav style={styles.navbar}>
            <h1 style={styles.logo}>VidTranscribe</h1>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <Link to="/" style={styles.link}>Home</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/about" style={styles.link}>About Us</Link>
                </li>
                {
                    isAuthenticated ? (
                        <li>
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Log Out
                        </button>
                    </li>
                    ) : (
                        
                         <li>
                         <button onClick={() => loginWithRedirect()}>Log In</button>
                     </li>
                    )
                }



            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '1.5rem 2rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
    },
    logo: {
        fontSize: '1.8rem',
        fontWeight: '700',
        color: '#000',
    },
    navList: {
        display: 'flex',
        listStyleType: 'none',
        margin: 0,
        padding: 0,
    },
    navItem: {
        marginLeft: '1.5rem',
    },
    link: {
        color: '#000',
        textDecoration: 'none',
        fontSize: '1.1rem',
        fontWeight: '500',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        transition: 'background-color 0.3s',
    },
    button: {
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        padding: '0.5rem 1rem',
        fontSize: '1.1rem',
        fontWeight: '500',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
};

export default Navbar;
