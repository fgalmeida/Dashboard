import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  gap: 15px;
  padding: 0px 20px;
  border-radius: 8px;

  background: rgba(0, 0, 0, 0.05);

  color: #6f7683;

  input {
    width: 100%;
    height: 100%;

    outline: none;
    border: none;

    border-radius: 8px;

    background: transparent;

    ::placeholder {
      color: #6f7683;
    }
  }
`
