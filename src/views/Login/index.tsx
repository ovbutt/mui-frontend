import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CustomButton, CustomInput } from '../../components'
import { useNavigate } from 'react-router-dom'

type Props = {}

const Login = (props: Props) => {
  const [username, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const login = () => {
    alert('login ' + username + password)
  }

  const navigate = useNavigate()

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
