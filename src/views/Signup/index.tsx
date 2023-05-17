import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CustomButton, CustomInput } from '../../components'
import { useNavigate } from 'react-router-dom'
import { userSignup } from '../../services/authServices'

type Props = {}

const Signup = (props: Props) => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [username, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigate = useNavigate()

  const signup = async () => {
    try {
      const payload = {
        firstName,
        lastName,
        username,
        password,
      }
      const userData = await userSignup(payload)
      console.log(' userData: ', userData)
      if (userData !== null) {
        localStorage.setItem('user', JSON.stringify(userData))
        navigate('/')
      } else {
        alert('User Signup failed')
      }
    } catch (error) {
      alert('User Singup error: ' + error)
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
        SignUp
      </Typography>

      <CustomInput
        name="firstName"
        id="firstName-input"
        label="First Name"
        onChange={(e: { target: { value: React.SetStateAction<string> } }) => setFirstName(e.target.value)}
        value={firstName}
        style={{ margin: 10, width: '30%' }}
      />
      <CustomInput
        name="lastName"
        id="lastName-input"
        label="Last name"
        onChange={(e: { target: { value: React.SetStateAction<string> } }) => setLastName(e.target.value)}
        value={lastName}
        style={{ margin: 10, width: '30%' }}
      />
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
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          margin: 30,
        }}>
        <Typography fontSize={14} style={{ cursor: 'pointer' }} onClick={() => navigate('/login')}>
          Already have an account
        </Typography>
      </Box>

      <CustomButton variant="contained" text={'SignUp'} onClick={() => signup()} style={{ width: '30%' }} />
    </Box>
  )
}

export default Signup
