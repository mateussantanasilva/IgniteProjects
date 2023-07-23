'use client'

import Image from 'next/image'
import { ProfileContainer, ProfileContent, ProfileInformation } from './styles'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { apiGithub } from '@/libs/axios'
import { useQuery } from 'react-query'

interface GithubProfile {
  avatar_url: string
  name: string
  html_url: string
  bio: string
  login: string
  company: string
  followers: number
}

export function Profile() {
  const { data: profile } = useQuery<GithubProfile>(
    'profileKey',
    async () => {
      const userAgent = process.env.NEXT_PUBLIC_USER_AGENT

      const response = await apiGithub.get(`/users/${userAgent}`)

      return response.data
    },
    {
      staleTime: 1000 * 60, // 1 minute to fetch again
    },
  )

  return (
    <ProfileContainer>
      <ProfileContent>
        {profile?.avatar_url ? (
          <Image
            src={profile.avatar_url}
            alt="Foto de perfil"
            width={148}
            height={148}
          />
        ) : (
          <p>Carregando...</p>
        )}

        <ProfileInformation>
          <header>
            <strong>{profile?.name}</strong>

            <Link href={`${profile?.html_url}`} target="_blank">
              <span>Github</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </header>

          <p>{profile?.bio}</p>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              <span>{profile?.login}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{!profile?.company && 'FATEC Zona Leste'}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{`${profile?.followers} seguidores`}</span>
            </li>
          </ul>
        </ProfileInformation>
      </ProfileContent>
    </ProfileContainer>
  )
}
