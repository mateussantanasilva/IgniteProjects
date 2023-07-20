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

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileContent>
        <Image
          src="https://github.com/mateussantanasilva.png"
          alt="Foto de perfil"
          width={148}
          height={148}
        />

        <ProfileInformation>
          <header>
            <strong>Mateus Santana</strong>

            <Link
              href={'https://github.com/mateussantanasilva'}
              target="_blank"
            >
              <span>Github</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </header>

          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              <span>mateussantanasilva</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              <span>FATEC Zona Leste</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>27 seguidores</span>
            </li>
          </ul>
        </ProfileInformation>
      </ProfileContent>
    </ProfileContainer>
  )
}
