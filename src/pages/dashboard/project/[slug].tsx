import Head from 'next/head'
import * as S from 'styles/pages/Project'

import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { GhostButton } from 'components/molecules/ProjectCard/styles'
import { ChevronDoubleLeftIcon } from '@heroicons/react/outline'
import {
  Avatar
} from 'components/molecules/NavTab/styles'

export default function Project() {
  const router = useRouter()
  const { slug } = router.query

  function goToDashboard() {
    router.push('/dashboard')
  }

  useEffect(() => {
    if (slug) true
  }, [slug])

  return (
    <>
      <Head>
        <title>{slug} | Dashboard</title>
      </Head>
      <S.Container>
        <S.Header>
          <GhostButton onClick={goToDashboard}>
            <ChevronDoubleLeftIcon width={24} color="#6f7683" />
          </GhostButton>
          <S.Title>{slug}</S.Title>
          <Avatar src={"http://github.com/fgalmeida.png"}/>
        </S.Header>
      </S.Container>
    </>
  )
}
