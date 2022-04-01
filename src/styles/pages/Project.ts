import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const Header = styled.header`
  width: 100vw;
  height: auto;

  padding: 15px 30px;
  border-bottom: 2px solid #e7e9ed;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`
