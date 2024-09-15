import React, { useState } from 'react';
import user from './images/person.png';
import emailicon from './images/email.png';
import passwordicon from './images/password.png';
import './Login.css';

const Login = () => {
    const [action, setAction] = useState('sign up');

    return (
        <div className='login-container'>
            <div className='form-container'>
                <div className='form-header'>
                    <h1>{action === 'login' ? 'Login' : 'Sign Up'}</h1>
                    <div className='underline'></div>
                </div>
                <div className='input-fields'>
                    {action === 'sign up' && (
                        <div className='input-group'>
                            <img src={user} alt="User Icon" />
                            <input type="text" placeholder="Username" />
                        </div>
                    )}
                    <div className='input-group'>
                        <img src={emailicon} alt="Email Icon" />
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className='input-group'>
                        <img src={passwordicon} alt="Password Icon" />
                        <input type="password" placeholder="Password" />
                    </div>
                </div>
                {action === 'login' && (
                    <div className='forgot-password'>
                        Lost password? <span>Click here</span>
                    </div>
                )}
                <div className='action-buttons'>
                    <button 
                        className={`action-button ${action === 'login' ? 'inactive' : ''}`}
                        onClick={() => setAction('sign up')}
                    >
                        Sign Up
                    </button>
                    <button 
                        className={`action-button ${action === 'sign up' ? 'inactive' : ''}`}
                        onClick={() => setAction('login')}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
