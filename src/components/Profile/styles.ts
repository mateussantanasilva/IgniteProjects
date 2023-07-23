import styled from 'styled-components'

export const ProfileContainer = styled.section`
  position: relative;
  width: min(86.4rem, 96%);
  margin: -9.2rem auto 0;
`

export const ProfileContent = styled.div`
  display: flex;
  gap: 3.2rem;
  align-items: center;

  background: ${(props) => props.theme['--base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  padding: 3.2rem;

  img {
    width: 14.8rem;
    height: 14.8rem;
    border-radius: 8px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`

export const ProfileInformation = styled.div`
  header {
    display: flex;
    justify-content: space-between;

    margin-bottom: 0.8rem;

    & > strong {
      font-size: 2.4rem;
      color: ${(props) => props.theme['--base-title']};
      line-height: 130%;
    }

    & > a {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      color: ${(props) => props.theme['--blue']};
      font-size: 1.2rem;
      line-height: 0;
      font-weight: 700;
      text-transform: uppercase;

      border-bottom: 1px solid transparent;
      transition: border-color 0.2s;

      &:hover {
        border-color: ${(props) => props.theme['--blue']};
      }

      & > svg {
        width: 1.2rem;
        height: 1.2rem;
        color: ${(props) => props.theme['--blue']};
      }
    }

    @media (max-width: 320px) {
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 1.4rem;
    }
  }

  & > ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 2.4rem;

    margin-top: 2.4rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      color: ${(props) => props.theme['--base-subtitle']};

      & > svg {
        color: ${(props) => props.theme['--base-label']};
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  }
`
