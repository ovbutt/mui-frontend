import { Button } from '@mui/material'
import React from 'react'

type CustomButtonProps = { variant: 'text' | 'outlined' | 'contained'; text: string; onClick: () => void; style?: {} }

function CustomButton({ variant, text, onClick, style }: CustomButtonProps) {
  return (
    <Button variant={variant} onClick={onClick} style={style}>
      {text}
    </Button>
  )
}

export default CustomButton
