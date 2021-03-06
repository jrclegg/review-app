import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  display: flex;
`

const Wrapper = ({ children }) => {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  )
}
 
export default Wrapper;