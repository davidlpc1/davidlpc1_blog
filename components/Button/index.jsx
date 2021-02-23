/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 100%;
    height: 3.5rem;

    margin-top: 2rem;

    cursor:pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    background: var(--primary);
    color: var(--secondary);

    font-size: 1.5rem;
    font-weight: 600;

    transition:  230ms;

    &:hover {
        background: var(--primary-light);
    }
`;

export default function Button({
  children, onClick, type, disabled, ...props
}) {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
}
