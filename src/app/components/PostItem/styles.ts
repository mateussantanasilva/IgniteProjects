import styled from 'styled-components'

export const PostItemContainer = styled.article`
  & > a {
    display: flex;
    flex-direction: column;
    flex: 1 26rem;
    gap: 2rem;

    padding: 3.2rem;
    background: ${(props) => props.theme['--base-post']};
    border: 2px solid ${(props) => props.theme['--base-post']};
    border-radius: 10px;

    cursor: pointer;
    transition: border-color 0.2s;

    &:hover {
      border-color: ${(props) => props.theme['--base-label']};
    }

    header {
      display: flex;
      justify-content: space-between;
      gap: 1.6rem;

      h3 {
        font-size: 2rem;
        color: ${(props) => props.theme['--base-title']};
      }

      span {
        font-size: 1.4rem;
        color: ${(props) => props.theme['--base-span']};
        min-width: fit-content;
      }

      @media (max-width: 320px) {
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
`
