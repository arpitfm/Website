import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FaUser, FaLock, FaFacebook, FaGithub } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri'

const Login = () => {
    return (
        <div className='login'>
            <div className="loginbox">
                <h5 className='loginheader'>Login</h5>
                <div className="user">
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <FaUser className="icon" sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Enter Your Username" variant="standard" />
                    </Box>
                </div>
                <div className="pass">
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <FaLock className="icon" sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Enter Your Username" variant="standard" />
                    </Box>
                </div>
                <p className='forget'>Forget Password?</p>
                <button type="button">Login</button>
                <p className='sign'>or signup using</p>
                <div className="social">
                    <div><FaFacebook className='icon' /></div>
                    <div><RiInstagramFill className='icon' /></div>
                    <div><FaGithub className='icon' /></div>
                </div>
            </div>
        </div>
    )
}

export default Login
