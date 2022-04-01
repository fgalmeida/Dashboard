import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const SearchBox = styled.div`
  max-width: 600px;
  width: 100%;
  height: 60%;
`

export const HeaderSearchBox = styled.header`
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 5px 20px;

  border-bottom: 2px solid #e7e9ed;
`

export const ProjectsList = styled.div`
  width: 100%;
  height: calc(100% - 100px);

  overflow-y: auto;
`

export const EditModalContainer = styled.div`
  width: 100vw;
  max-width: 450px;
  height: auto;

  display: flex;
  flex-direction: column;

  padding: 5px;

  .buttonBox {
    width: 20%;
    margin-top: 20px;
    align-self: flex-end;
  }
`

export const ExcludeModalContainer = styled.div`
  width: 100vw;
  max-width: 300px;
  height: auto;

  display: flex;
  flex-direction: column;

  padding: 5px;

  .buttonBox {
    width: 100%;
    margin-top: 20px;
    align-self: flex-end;
  }
`

export const ExcludeButton = styled.button`
  width: 100%;
  height: 40px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  color: #fff;
  background: #f46666;

  border-radius: 5px;
  transition: 0.3s all;

  border: none;
  outline: none;

  :hover {
    background: #dd5a5a;
  }
`
