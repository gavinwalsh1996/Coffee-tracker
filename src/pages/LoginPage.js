import React from 'react'
import LoginForm from '../components/LoginForm'
import BackgroundImage from '../images/coffee-cover.jpg'

function LoginPage() {

  return (

    <div className='flex flex-col justify-center items-center gap-10 h-screen w-full bg-neutral-900'>
        <div className='sm:w-6/12 w-full'>
            <LoginForm />
        </div>
    </div>

  )
}

export default LoginPage