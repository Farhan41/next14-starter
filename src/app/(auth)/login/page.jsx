import {auth, signIn } from '@/lib/auth'
import React from 'react'

import { handleGithubLogin} from '@/lib/action';
import LoginForm from '@/components/loginForm/loginForm';
import styles from './login.module.css'

const Login = () => {
  // const session = await auth();
  // console.log(session)

  // auth?.user?.isAdmin && router.push('/')
 
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <form action={handleGithubLogin}>
        <button className={styles.github}>Login with Github</button>
      </form>
      <LoginForm/>
    </div>
    </div>
  )
}

export default Login