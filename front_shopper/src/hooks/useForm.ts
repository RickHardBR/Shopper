import { ChangeEvent, useState } from 'react'

export const useForm = <T>(initialState: T) => {
  const [form, setForm] = useState(initialState)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const clearInputs = () => {
    setForm(initialState)
  }

  return { form, onChange, clearInputs }
}