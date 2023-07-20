import { SearchFormContainer, SearchFormContent } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormContent>
        <header>
          <strong>Publicações</strong>
          <span>6 publicações</span>
        </header>

        <input type="text" placeholder="Buscar conteúdo" />
      </SearchFormContent>
    </SearchFormContainer>
  )
}
