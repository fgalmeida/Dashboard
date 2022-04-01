import styled from 'styled-components'

interface ContainerProps {
  under?: boolean
  redTitle?: boolean
}

export const Container = styled.div<ContainerProps>`
  .modal {
    ${(props) => props.under && 'padding: .5rem 1rem;'}
  }
`

export const ModalHeader = styled.header<ContainerProps>`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 5px;

  h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;

    color: #4f46e5;
    ${(props) => props.redTitle && 'color: #F46666;'}
  }
`
