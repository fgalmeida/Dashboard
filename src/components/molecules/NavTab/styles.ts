import styled from 'styled-components'
import sizes from 'utils/sizes'

interface ContainerProps {
  open?: boolean;
}

export const Container = styled.nav<ContainerProps>`
  width: 17%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background: #ffffff;

  border-right: 2px solid #e7e9ed;

  /* background-image: linear-gradient(
    135deg,
    rgba(60, 8, 118, 0.8) 0%,
    rgba(250, 0, 118, 0.8) 100%
  ); */

  ${sizes.down("lg")} {
    width: 100%;
    display: ${(props) => props.open ? 'flex' : 'none'};
    position: absolute;
  }
`

export const TabsContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 15px 30px;
`

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 20px;
  padding: 15px 30px;
`

export const Avatar = styled.img`
  width: 50px;
  height: 50px;

  border: 2px solid #4f46e5;
  padding: 3px;

  border-radius: 100%;
`

export const ProfileInfos = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;

    color: #222d3e;
  }

  span {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    color: #6f7683;

    cursor: pointer;
  }
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

export const Badge = styled.div`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  color: #6f7683;

  gap: 10px;
`

interface SpacerTypes {
  height: number
}

export const Spacer = styled.div<SpacerTypes>`
  width: 100%;
  height: ${(props) => props.height + 'px'};
`

export const NewProjectModal = styled.form`
  width: 100vw;
  max-width: 450px;
  height: auto;

  display: flex;
  flex-direction: column;

  padding: 5px;

  .inputBox {
    width: 100%;
    height: auto;
    margin: 5px 0;

    display: flex;
    flex-direction: column;

    gap: 35px;
  }

  .buttonBox {
    width: 30%;
    margin-top: 20px;
    align-self: flex-start;
  }
`

export const MobileMenuButton = styled.button`
  width: 40px;
  height: 40px;

  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  color: #fff;
  background: #4f46e5;

  border-radius: 5px;
  transition: 0.3s all;

  :hover {
    background: #473fcf;
  }
`
