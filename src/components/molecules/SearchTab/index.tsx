import { useState } from 'react'
import * as S from './styles'

import { SearchIcon, XIcon } from '@heroicons/react/outline'
import SearchInput from 'components/atoms/SearchInput'

import { api } from 'services/api/apiClient'
import ProjectCard from '../ProjectCard'
import CustomModal from 'components/atoms/CustomModal'
import { Input } from 'components/atoms/Input'
import { Button } from '../NavTab/styles'
import { ModalHeader } from 'components/atoms/CustomModal/styles'
import { GhostButton } from '../ProjectCard/styles'

function SearchTab({ projects }) {
  const [searchString, setSearchString] = useState('')
  const [editModal, setEditModal] = useState(false)
  const [excludeModal, setExcludeModal] = useState(false)

  // Modal de edição

  function handleOpenEditModal() {
    setEditModal(true)
  }

  function toggleEditModal() {
    setEditModal(!editModal)
  }

  // Modal de exclusao

  function handleOpenExcludeModal() {
    setExcludeModal(true)
  }

  function toggleExcludeModal() {
    setExcludeModal(!excludeModal)
  }

  return (
    <>
      {/* Modal de edição */}
      <CustomModal
        title="Edit Project"
        setModalOpen={toggleEditModal}
        modalVisible={editModal}
      >
        <S.EditModalContainer>
          <ModalHeader>
            <h1>Edit Project</h1>
            <GhostButton onClick={toggleEditModal}>
              <XIcon width={24} />
            </GhostButton>
          </ModalHeader>
          <Input label="Name" placeholder="example" />
          <section className="buttonBox">
            <Button>Edit</Button>
          </section>
        </S.EditModalContainer>
      </CustomModal>

      {/* Modal de exclusao */}
      <CustomModal
        title="Exclude Project"
        setModalOpen={toggleExcludeModal}
        modalVisible={excludeModal}
      >
        <S.ExcludeModalContainer>
          <ModalHeader redTitle>
            <h1>Exclude Project</h1>
            <GhostButton onClick={toggleExcludeModal}>
              <XIcon width={24} />
            </GhostButton>
          </ModalHeader>
          <S.ExcludeButton>Confirm</S.ExcludeButton>
        </S.ExcludeModalContainer>
      </CustomModal>

      <S.Container>
        <S.HeaderSearchBox>
          <S.SearchBox>
            <SearchInput
              placeholder="Search Projects"
              searchString={searchString}
              setSearchString={(item: string) => setSearchString(item || '')}
              icon={<SearchIcon width={24} />}
            />
          </S.SearchBox>
        </S.HeaderSearchBox>
        <S.ProjectsList>
          {searchString ? (
            <>
              {projects
                .filter((project) => project.name.match(searchString))
                .map((e) => (
                  <ProjectCard
                    key={e.id + '--'}
                    id={e.id}
                    title={e.name}
                    editBtn={handleOpenEditModal}
                    excludeBtn={handleOpenExcludeModal}
                  />
                ))}
            </>
          ) : (
            <>
              {projects.map((e) => (
                <ProjectCard
                  key={e.id + '--'}
                  id={e.id}
                  title={e.name}
                  editBtn={handleOpenEditModal}
                  excludeBtn={handleOpenExcludeModal}
                />
              ))}
            </>
          )}
        </S.ProjectsList>
      </S.Container>
    </>
  )
}

export default SearchTab
