import logo from '../../logo.svg';

const Left = () => {
    return (
        <div className='w-1/2 h-full bg-white flex flex-col justify-center'>
            <div></div>
            <div className='text-center '>
                <div className='mx-auto mb-12 w-fit'>
                    <img src={logo}/>
                </div>
                <div>
                    <from>
                        <div className='mb-6'>
                            <label for="user" className='hidden'>user name</label>
                            <input className='outline outline-0 max-w-md w-full focus:ring-0 border-solid border border-darkgray py-3 px-5' type="text" id='user' placeholder='User Name *'/>
                        </div>
                        <div className='mb-6'>
                            <label for='mail' className='hidden'>Email</label>
                            <input className='outline outline-0 max-w-md w-full focus:ring-0 border-solid border border-darkgray py-3 px-5' type="text" id='mail' placeholder='Email'/>
                        </div>
                        <div className='mb-6'>
                            <label for='pwd' className='hidden'>password</label>
                            <input className='outline outline-0 max-w-md w-full focus:ring-0 border-solid border border-darkgray py-3 px-5' type="password" id='pwd' placeholder='Passord'/>
                        </div>
                        <div className='mb-6'>
                            <label for='cnt' className='hidden'>Country</label>
                            <input className='outline outline-0 max-w-md w-full focus:ring-0 border-solid border border-darkgray py-3 px-5' type="text" id='cnt' placeholder='Country'/>
                        </div>
                        <button className='z-10 absolute border-white border-2 bg-darkgray text-white w-72 h-16 p-3 text-lg' style={{bottom: '10%', left: '50%', transform : 'translateX(-50%)', borderRadius: '2.5rem'}}>Log In</button>
                    </from>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Left