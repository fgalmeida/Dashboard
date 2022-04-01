import { PencilIcon, TrashIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import * as S from './styles'

interface ProjectCardProps {
  id: string
  title: string
  editBtn: Function
  excludeBtn: Function
}

function ProjectCard({ id, title, editBtn, excludeBtn }: ProjectCardProps) {
  return (
    <S.CardContainer>
      <Link href={`/dashboard/project/${id}`}>
        <h1>{title}</h1>
      </Link>
      <S.ButtonBox>
        <S.GhostButton onClick={editBtn}>
          <PencilIcon color="#4F46E5" width={24} />
        </S.GhostButton>
        <S.GhostButton onClick={excludeBtn}>
          <TrashIcon color="#F75A68" width={24} />
        </S.GhostButton>
      </S.ButtonBox>
    </S.CardContainer>
  )
}

export default ProjectCard
