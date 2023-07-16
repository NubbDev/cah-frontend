import Image from 'next/image'
import style from '../styles/pages/page.module.css'
import { useState } from 'react'
import {useSelector} from 'react-redux'
import AuthSelector from '@/components/Auth/Selector'
import AuthForm from '@/components/Auth/Form'

export default function Home() {
  // const AuthOption = useSelector((state: any) => state.AuthOption)

  return (
    <main className={style.main}>
      <div className={style.title}>
        <h1>
          <span className={style.title_small}>Cards Against</span>
          <span className={style.title_big}>Humanity</span>
        </h1>
      </div>
      <div className={style.auth}>
        <AuthSelector/>
        <AuthForm/>
      </div>
    </main>
  )
}

const Guest = () => {
  return (
    <div className={style.guest}>
      <form>
        <input type="text" placeholder="Display Name" />
      </form>
    </div>
  )
}
const Login = () => {
  return (
    <div className={style.login}>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
      </form>
    </div>
  )
}
const Register = () => {
  return (
    <div className={style.register}>
      <form>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
      </form>
    </div>
  )
}
