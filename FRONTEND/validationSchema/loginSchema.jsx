import * as Yup from 'yup'

const loginSchema = Yup.object({
    email: Yup.string().email().required('email must be required'),
    password:Yup.string().trim().min(4).max(8).required('password must be required')
})

export default loginSchema;