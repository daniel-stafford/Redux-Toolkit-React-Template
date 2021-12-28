import styled, { keyframes } from 'styled-components'

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: var(--primaryColor);
`

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`
