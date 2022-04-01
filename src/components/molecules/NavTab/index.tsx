import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import { BadgeCheckIcon, CollectionIcon, MenuAlt3Icon, XIcon } from '@heroicons/react/outline'

import { GhostButton } from '../ProjectCard/styles'
import CustomModal from 'components/atoms/CustomModal'
import { ModalHeader } from 'components/atoms/CustomModal/styles'
import { Input } from 'components/atoms/Input'

import { PolyRand } from 'poly-crypto'

import * as S from './styles'
import Router from 'next/router'
import useMedia from 'use-media'

interface user {
  username: string
  url_profileImg: string
  pro: boolean
  projects: number
}

interface NavTabProps {
  user: user
}

type NewProjectype = {
  name: string
  encryptionKey: string
}

const NewProjecSchema = yup.object().shape({
  name: yup
    .string()
    .min(5, 'Minimal length 8 characters')
    .required('Required name'),
  encryptionKey: yup.string().notRequired()
})

function NavTab({ user, ...rest }: NavTabProps) {
  const [newProjectModal, setNewProjectModal] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  const isMobile = useMedia({ maxWidth: '1280px' })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
    watch
  } = useForm({
    resolver: yupResolver(NewProjecSchema)
  })

  const handleCreateNewProject: SubmitHandler<NewProjectype> = async (
    values,
    event
  ) => {
    const data = {
      id: PolyRand.slug(15),
      name: values.name,
      encryptionKey: values.encryptionKey || PolyRand.slug(64)
    }

    try {
      const res = { status: 200 }

      if (res.status === 200 || res.status === 201) {
        toast.success('New project created', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })

        setNewProjectModal(false)
        reset({ name: '', encryptionKey: '' })
        Router.reload()
      }
    } catch (e) {
      return toast.error('Internal error', {
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

  // Modal novo projeto

  function handleOpenNewProjectModal() {
    setNewProjectModal(true)
  }

  function toggleNewProjectModal() {
    setNewProjectModal(!newProjectModal)
  }

  return (
    <>
      {/* Modal novo projeto */}
      <CustomModal
        title="New Project"
        setModalOpen={toggleNewProjectModal}
        modalVisible={newProjectModal}
      >
        <S.NewProjectModal onSubmit={handleSubmit(handleCreateNewProject)}>
          <ModalHeader>
            <h1>New Project</h1>
            <GhostButton onClick={toggleNewProjectModal}>
              <XIcon width={24} />
            </GhostButton>
          </ModalHeader>
          <section className="inputBox">
            <Input
              label="Project Name"
              placeholder="Project Name"
              errorMessage={errors.name?.message}
              error={errors.name}
              {...register('name')}
            />
            <Input
              label="Project Encryption Key"
              placeholder="Project Enc Key"
              errorMessage={errors.encryptionKey?.message}
              error={errors.encryptionKey}
              helpText="if you don't have an encryption key in mind, leave this field blank to create an automatically"
              {...register('encryptionKey')}
            />
          </section>
          <section className="buttonBox">
            <S.Button type="submit">Create</S.Button>
          </section>
        </S.NewProjectModal>
      </CustomModal>

      {isMobile && (
        <S.MobileMenuButton onClick={() => setOpenMenu(!openMenu)}>
          <MenuAlt3Icon width={24} color="#fff" />
        </S.MobileMenuButton>
      )}

      <S.Container open={openMenu}>
        <S.ProfileContainer>
          <S.Avatar src={user.url_profileImg} />
          <S.ProfileInfos>
            <p>{user.username}</p>
            <span>View Profile</span>
          </S.ProfileInfos>
        </S.ProfileContainer>
        <S.TabsContainer>
          <S.Button onClick={handleOpenNewProjectModal}>New Project</S.Button>
          <S.Spacer height={25} />
          {user.pro ? (
            <S.Badge>
              <BadgeCheckIcon width={24} /> Pro Member
            </S.Badge>
          ) : (
            <S.Badge>
              <BadgeCheckIcon width={24} /> Member
            </S.Badge>
          )}
          <S.Badge>
            <CollectionIcon width={24} /> {user.projects} Projects
          </S.Badge>
        </S.TabsContainer>
      </S.Container>
    </>
  )
}

export default NavTab
