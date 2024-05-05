import axios from 'axios';
import { useEffect } from 'react';
import {useCookies} from 'react-cookie'
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
    const [cookie, setJWT] = useCookies();
    const navigate = useNavigate();
    // console.log(cookie.jwt);
    useEffect(() => {
       
        if (cookie.jwt)
        {
            axios.post('http://localhost:3000/dashboard',
                {
                    tocken:cookie.jwt
                }
            ).then((result) => {
            
                
            if(!result.status==200)  navigate('/login');
                console.log(result.email);
            }).catch((err) => {
                console.log(err.response.data);
            })
        }
        else
        {
            navigate('/login');
        }
    },[])
    return <>
        <div>nirav</div>
    </>
}


export default Dashboard