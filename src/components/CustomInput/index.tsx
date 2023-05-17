import { TextField } from '@mui/material'

type InputProps = {
  name: string
  id: string
  label: string
  variant?: 'outlined'
  onChange: any
  placeholder?: string
  value: string
  style?: {}
  type?: string
}

const CustomInput = ({ id, label, variant, onChange, placeholder, name, value, style, type }: InputProps) => {
  return (
    <TextField
      name={name}
      id={id}
      label={label}
      variant={variant}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      style={style}
      type={type}
    />
  )
}

export default CustomInput
