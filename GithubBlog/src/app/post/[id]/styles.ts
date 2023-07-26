import styled from 'styled-components'

export const PostInfoContainer = styled.section`
  position: relative;
  width: min(86.4rem, 96%);
  margin: -9.2rem auto 0;
`

export const PostInfoContent = styled.div`
  background: ${(props) => props.theme['--base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  padding: 3.2rem;

  header {
    display: flex;
    justify-content: space-between;

    margin-bottom: 2rem;

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
  }
`

export const PostInfoPresentation = styled.div`
  h2 {
    color: ${(props) => props.theme['--base-title']};
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 3.2rem;

    margin-top: 0.8rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      color: ${(props) => props.theme['--base-span']};

      & > svg {
        color: ${(props) => props.theme['--base-label']};
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  }
`

export const PostContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  width: min(80rem, 96%);
  margin: 4rem auto 2rem;

  img {
    max-width: 100%;
  }
`
