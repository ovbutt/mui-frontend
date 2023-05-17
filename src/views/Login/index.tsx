import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CustomButton, CustomInput } from '../../components'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../../services/authServices'

type Props = {}

const Login = (props: Props) => {
  const [username, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()

  const login = async () => {
    try {
      const payload = {
        username,
        password,
      }
      const userData = await userLogin(payload)
      console.log(' userData: ', userData)
      if (userData !== null) {
        localStorage.setItem('user', JSON.stringify(userData))
        navigate('/')
      } else {
        alert('User not found')
      }
    } catch (error) {
      alert('User Login error: ' + error)
    }
  }

  return (
    <Box
      style={{
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '18%',
        padding: 10,
      }}>
      <Typography variant="h4" fontWeight={600} fontSize={24} style={{ marginBottom: 40 }}>
        Login
      </Typography>

      <CustomInput
        name="username"
        id="username-input"
        label="Username"
        onChange={(e: { target: { value: React.SetStateAction<string> } }) => setUserName(e.target.value)}
        value={username}
        style={{ margin: 10, width: '30%' }}
      />
      <CustomInput
        name="password"
        id="password-input"
        label="Password"
        onChange={(e: { target: { value: React.SetStateAction<string> } }) => setPassword(e.target.value)}
        value={password}
        style={{ margin: 10, width: '30%' }}
        type="password"
      />

      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          margin: 30,
          width: '30%',
        }}>
        <Typography fontSize={14} style={{ cursor: 'pointer' }} onClick={() => alert('Forgot Password')}>
          Forgot Password?
        </Typography>
        <Typography>OR</Typography>
        <Typography fontSize={14} style={{ cursor: 'pointer' }} onClick={() => navigate('/signup')}>
          Create a new account
        </Typography>
      </Box>

      <CustomButton variant="contained" text={'Login'} onClick={() => login()} style={{ width: '30%' }} />
    </Box>
  )
}

export default Login
