import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import './styles.css';

const sand = '#e3c088';
const blue = '#3a899b';
const black = '#000000';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here TEST VERSION
        console.log(`Username: ${username}, Password: ${password}`);
    };
    return (
        <>
            <div className>
                <Navbar/>
            </div>

            <body className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
                <div className='form_container p-5 rounded bg-white'>
                    <form>
                        <h3 className='text-center'>Sign In</h3>
                        <div className='mb-2'>
                            <label htmlFor='name'>Email</label>
                            <input type='email' placeholder='Enter Email' className='form-control'/>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' placeholder='Enter Password' className='form-control'/>
                        </div>
                        <div className='mb-2'>
                            <input type='checkbox' className='custom-control custom-checkbox' id='check'/>
                            <label htmlFor='check' className='custom-input-label ms-2'>
                                Remember Me
                            </label>
                        </div>
                        <div className='d-grid'>
                            <button type='submit' className='btn btn-primary'>Login</button>
                        </div>
                        <p className='text-end mt-2'>
                            Forgot <a href=''>Password?</a><a href='' className='ms-2'>Sign Up</a>
                        </p>
                    </form>
                </div>
            </body>
        </>
    );
}