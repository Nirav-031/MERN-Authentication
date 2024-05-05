import * as Yup from 'yup';


const validationSchema = Yup.object({
    
    name: Yup.string().trim().min(2).max(24).required("name is must required"),
    email: Yup.string().email().required('email must be required'),
    password:Yup.string().trim().min(4).max(8).required('password must be required')
});

export default validationSchema;