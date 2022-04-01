import Head from 'next/head'
import * as S from 'styles/pages/Dashboard'

import NavTab from 'components/molecules/NavTab'
import SearchTab from 'components/molecules/SearchTab'
import { api } from 'services/api/apiClient'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Dashboard = () => {
  const [projects, setProjects] = useState([])

  const data = [
    {
      id: '1',
      name: 'Project 1',
      encryptionKey: 'ohaUWHe1j3i1juhADkpwaoJ9w8131'
    },
    {
      id: '2',
      name: 'Project 2',
      encryptionKey: 'ohaUWHe1j3i1juhADkpwaoJ9w8131'
    }
  ]

  const user = {
    username: 'Felipe Almeida',
    url_profileImg: 'https://github.com/fgalmeida.png',
    pro: true,
    projects: data.length
  }

  async function loadData() {
    try {
      setProjects(data)
    } catch (e) {
      toast.error('Error on load projects', {
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

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <S.Container>
        <NavTab user={user} />
        <SearchTab projects={projects} />
      </S.Container>
    </>
  )
}
export default Dashboard
