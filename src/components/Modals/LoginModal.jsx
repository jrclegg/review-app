import React from 'react'
import styled from 'styled-components'
import '../../index.css'

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`

const LoginModal = ({ handleClose, children }) => {
    return (
      <ModalWrapper>
        <section className="modal-main">
          {children}
          Email: <input></input>
          Password: <input></input>
          <button onClick={handleClose}>close</button>
        </section>
      </ModalWrapper>
    );
  };

  export default LoginModal