// import React from 'react';
import '@fontsource/plus-jakarta-sans';
import '@fontsource/plus-jakarta-sans/700.css';
import './styles/popups/app.scss';
import '/public/styles.css';
// import { ArrowCircleRight } from 'phosphor-react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="parent">
        <div className="header">
            <div className="nav-buttons">
                <Link to='/login' style={{textDecoration: "none"}}>
                    <div className="login-btn">Login</div>
                </Link>
                <button className="trial-button animated-btn">
                    Start Free Trial

                    <img
                        src="/Assets/ArrowRight.svg"
                        alt="arrow"
                        style={{background: "white", borderRadius: "50%", padding: "2px"}}
                        width="25px"
                    />
                </button>

            </div>
        </div>
    </div>
  );
};

export default App;
