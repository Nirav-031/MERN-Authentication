function SendMail()
{
    return (
        <div className="w-screen h-screen flex justify-center mt-16 ">
            <div className="lg:w-1/3 w-[85%] h-1/3 bg-gray-200 space-y-8 p-4 rounded-xl">
                <p className="text-center text-2xl mt-2 font-dem">Recovery Of Password</p>
                <form method="post">
                     <div className='mb-3 '>
                    
                        <p className='mt-5 font-dem'>
                            Email
                        </p>
                        <input placeholder="Enter Email " required type="email" className='w-full h-10 rounded-lg border-[1px] border-[#96BFFF]' />
                    </div>
                    
                    
                </form>
                <div className='w-full h-10'>
                        <button className='w-full h-full bg-[#465FF1] font-dem text-white rounded-lg'>Send Mail</button>
                    </div>
            </div>
            
   </div>
    )
}


export default SendMail