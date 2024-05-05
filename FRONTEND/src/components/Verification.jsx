import {Link} from 'react-router-dom'
const Verification = () => {
    return(<div className="w-screen h-screen flex justify-center mt-16 ">
            <div className="lg:w-1/3 w-[85%] h-1/3 bg-gray-100 flex flex-col justify-around space-y-8 p-4 rounded-xl">
             
                     <div className='mb-3 '>
                    
                        <p className='mt-5 font-dem text-center text-xl  text-green-600'>
                            Your Email Verify Successfully 
                        </p>
                    </div>
                    
                    
               
                <div className='w-full h-10'>
                <Link to='/login' >
                
                    <button className='w-full h-full bg-[#465FF1] font-dem text-white rounded-lg'>Login Here</button>
                </Link>
                    </div>
            </div>
            
   </div>)
}

export default Verification