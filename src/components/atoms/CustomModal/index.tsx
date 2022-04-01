import { Container } from './styles'
import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import { GhostButton } from 'components/molecules/ProjectCard/styles'
import { XIcon } from '@heroicons/react/outline'

interface CustomModal extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string
  modalVisible: boolean
  setModalOpen: () => void
  under?: boolean
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    color: '#000000',
    borderRadius: '5px',
    border: 'none',
    boxShadow: '0px 0px 20px rgba(54, 63, 78, 0.2)'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(5px)',
    zIndex: 1000
  }
}

const customStylesUnder = {
  content: {
    ...customStyles.content,
    bottom: '-50%',
    left: '50%',
    right: 0,
    top: '75%'
  },
  overlay: {
    ...customStyles.overlay
  }
}

const CustomModal = ({
  title,
  modalVisible,
  setModalOpen,
  under = false,
  ...rest
}: CustomModal) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(modalVisible)
  }, [modalVisible])

  return (
    <ReactModal
      shouldCloseOnOverlayClick={true}
      onRequestClose={setModalOpen}
      isOpen={visible}
      ariaHideApp={false}
      style={under ? customStylesUnder : customStyles}
    >
      <Container under={under}>
        <div className="modal">
          {rest.children}
        </div>
      </Container>
    </ReactModal>
  )
}

export default CustomModal
