import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  height: auto;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 30px;
`

export const Title = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;

  color: #222d3e;

  margin-bottom: 40px;
`

export const Button = styled.button`
  width: 100%;
  height: 40px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  color: #fff;
  background: #4f46e5;

  border-radius: 5px;
  transition: 0.3s all;
  border: none;
  outline: none;

  :hover {
    background: #473fcf;
  }
`

export const GhostButton = styled.button`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  color: #222d3e;

  outline: none;
  border: none;

  border-radius: 3px;

  transition: 0.3s all;

  background: transparent;

  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`

