import * as yup from 'yup'
import Head from 'next/head'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from 'components/atoms/Input'
import * as S from 'styles/pages/Auth'
import { useRouter } from 'next/router'

type SignInType = {
  email: string
  password: string
}

type SignUpType = {
  email: string
  password: string
  passwordConfirmation: string
}

const SignInSchema = yup.object().shape({
  email: yup.string().email().required('Required'),
  password: yup.string().required('Required')
})

const SignUpSchema = yup.object().shape({
  email: yup.string().required('Required').email("Invalid email"),
  password: yup
    .string()
    .required('Required')
    .min(7, 'Minimum 7 characters'),
    // .matches(/[A-Z]+/, 'Must contain, a capital character')
    // .matches(/[@$!%*#?&]+/, 'Must contain, a special character')
    // .matches(/\d+/, 'Must contain, a number'),
  passwordConfirmation: yup
    .string()
    .required('Required')
    .oneOf([yup.ref('password'), null], 'Different passwords')
})

const Home = () => {
  const [tab, setTab] = useState(0)
  const router = useRouter()

  const loginResolver = useForm({
    resolver: yupResolver(SignInSchema)
  })

  const registerResolver = useForm({
    resolver: yupResolver(SignUpSchema)
  })

  const handleSignIn: SubmitHandler<SignInType> = async (values, event) => {
    const data = {
      email: values.email,
      password: values.password
    }

    try {
      const res = { status: 200 }

      if (res.status === 200 || res.status === 201) {
        return router.push('/dashboard')
      }
    } catch (e) {
      if (e.message.includes(401) || e.message.includes(404)) {
        return loginResolver.setError('email', {
          type: 'manual',
          message: 'Incorrect email or password'
        })
      } else {
        toast.error('Internal error', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      }
    }
  }

  const handleSignUp: SubmitHandler<SignUpType> = async (values, event) => {
    const data = {
      email: values.email,
      password: values.password,
      passwordConfirmation: values.passwordConfirmation
    }

    try {
      const res = { status: 200 }

      if (res.status === 200 || res.status === 201) {
        return router.push('/dashboard')
      }
    } catch (e) {
      if (e.message.includes(401) || e.message.includes(404)) {
        return registerResolver.setError('email', {
          type: 'manual',
          message: 'Email or password already exist'
        })
      } else {
        toast.error('Internal error', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      }
    }
  }

  return (
    <>
      <Head>
        <title>{tab == 0 ? 'Login' : 'Register'} | Dashboard</title>
      </Head>
      <S.Container>
        {tab == 0 ? (
          <>
            <S.Title>Login</S.Title>
            <S.Form
              onSubmit={loginResolver.handleSubmit(handleSignIn)}
              className="inputBox"
            >
              <Input
                label="Email"
                placeholder="example@gmail.com"
                errorMessage={loginResolver.formState.errors.email?.message}
                error={loginResolver.formState.errors.email}
                {...loginResolver.register('email')}
              />
              <Input
                label="Password"
                placeholder="*********"
                errorMessage={loginResolver.formState.errors.password?.message}
                error={loginResolver.formState.errors.password}
                {...loginResolver.register('password')}
              />
              <S.Button>Login</S.Button>
              <S.GhostButton type="button" onClick={() => setTab(1)}>Register</S.GhostButton>
            </S.Form>
          </>
        ) : (
          <>
            <S.Title>Register</S.Title>
            <S.Form
              onSubmit={registerResolver.handleSubmit(handleSignUp)}
              className="inputBox"
            >
              <Input
                label="Email"
                placeholder="example@gmail.com"
                errorMessage={registerResolver.formState.errors.email?.message}
                error={registerResolver.formState.errors.email}
                {...registerResolver.register('email')}
              />
              <Input
                label="Password"
                placeholder="*********"
                errorMessage={
                  registerResolver.formState.errors.password?.message
                }
                error={registerResolver.formState.errors.password}
                {...registerResolver.register('password')}
              />
              <Input
                label="Confirm Password"
                placeholder="*********"
                errorMessage={
                  registerResolver.formState.errors.passwordConfirmation
                    ?.message
                }
                error={registerResolver.formState.errors.passwordConfirmation}
                {...registerResolver.register('passwordConfirmation')}
              />
              <S.Button>Register</S.Button>
              <S.GhostButton type="button" onClick={() => setTab(0)}>Login</S.GhostButton>
            </S.Form>
          </>
        )}
      </S.Container>
    </>
  )
}

export default Home
