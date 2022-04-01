import Link from 'next/link'
import styled from 'styled-components'
import { useState, ForwardRefRenderFunction, forwardRef } from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

import { ReactElement } from 'react'

interface Input extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  password?: boolean
  forgetPassword?: boolean
  error?: boolean
  errorMessage?: string
  helpText?: string
  flex?: number
  icon?: ReactElement
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Input> = (
  {
    label,
    password,
    forgetPassword,
    error,
    errorMessage,
    helpText,
    flex = 1,
    icon,
    ...rest
  },
  ref
) => {
  const [isInputVisible, setIsInputVisible] = useState(true)

  return (
    <Container flex={flex} error={error}>
      {error && (
        <section className="errorMsg">
          <label>{errorMessage}</label>
        </section>
      )}

      <div className="inputContainter">
        <section className="labelContent">
          <label>{label}</label>
        </section>

        {!!icon && icon}

        <input
          type={password && isInputVisible ? 'password' : 'text'}
          ref={ref}
          {...rest}
        />

        {password &&
          (isInputVisible ? (
            <AiFillEye
              onClick={() => setIsInputVisible(false)}
              size={24}
              color="var(--gray)"
            />
          ) : (
            <AiFillEyeInvisible
              onClick={() => setIsInputVisible(true)}
              size={24}
              color="var(--gray)"
            />
          ))}
      </div>

      {forgetPassword && (
        <section className="text">
          <Link href="/recuperar-senha">
            <a>Esqueceu sua senha?</a>
          </Link>
        </section>
      )}

      {helpText && (
        <section className="text">
          <p>{helpText}</p>
        </section>
      )}
    </Container>
  )
}

export const Input = forwardRef(InputBase)

interface ContainerProps {
  error: boolean
  flex: number
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${(props) => 'flex: ' + props.flex + ';'}
  position: relative;

  margin-top: 5px;

  .errorMsg {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    top: -23px;
    right: 5px;
    margin-bottom: 5px;

    label {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      color: #424242;
      ${(props) => props.error && 'color: #F46666;'}
    }
  }

  .inputContainter {
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
    padding-left: 1rem;
    padding-right: 1rem;
    background: rgba(0, 0, 0, 0.05);
    overflow: hidden;

    .labelContent {
      position: absolute;
      display: flex;
      align-items: center;

      padding: 0 5px;

      top: -23px;
      left: 13px;

      label {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: normal;
        font-size: 13px;

        color: #424242;
      }
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
    }

    input {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 11px;
      font-size: 1rem;
      background: transparent;

      cursor: text;
      color: #424242;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
    }

    input:focus {
      outline: none;
    }

    svg {
      margin-right: 1rem;
      ${(props) => props.error && 'color: #F46666 !important;'}

      &:last-child:hover {
        cursor: pointer;
      }
    }
    border: 1px solid var(--orange);
    ${(props) => props.error && 'border: 1px solid #F46666;'}
  }

  .text {
    width: 100%;
    margin-top: 15px;

    a {
      color: #626262;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      text-decoration: none;

      &:hover {
        color: #424242;
      }
    }

    p {
      color: #a1a1a1;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
    }
  }
`
