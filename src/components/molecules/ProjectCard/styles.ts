import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 10px;

  padding-left: 30px;

  h1 {
    width: 100%;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    cursor: pointer;

    :hover {
      text-decoration: underline 2px #4f46e5;
    }
  }
`

export const ButtonBox = styled.div`
  width: 150px;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 15px;
`

export const GhostButton = styled.button`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
  border: none;

  border-radius: 3px;

  transition: 0.3s all;

  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`
