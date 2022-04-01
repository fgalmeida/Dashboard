import { ReactElement, useState } from 'react'

import * as S from './styles'

interface SearchInputProps {
  placeholder: string
  icon?: ReactElement
  searchString: string
  setSearchString: (value: string) => void
}

function SearchInput({
  placeholder,
  icon,
  searchString,
  setSearchString,
  ...rest
}: SearchInputProps) {
  return (
    <S.Container>
      {icon ? icon : null}
      <input
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        placeholder={placeholder}
        type="text"
        {...rest}
      />
    </S.Container>
  )
}

export default SearchInput
