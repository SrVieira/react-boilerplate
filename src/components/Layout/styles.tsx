import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }
`

export const Container = styled.div`
  display: flex;
`
