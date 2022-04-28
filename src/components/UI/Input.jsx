import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'

export const Inputs = forwardRef((props, ref) => {
   const {
      type,
      maxLength,
      name,
      email,
      value,
      autoFocus,
      password,
      select,
      id,
      className,
      pattern,
      lung,
      onChange,
      href,
      placeholder,
   } = props
   return (
      <Input
         {...props}
         ref={ref}
         type={type}
         maxLength={maxLength}
         name={name}
         email={email}
         value={value}
         autoFocus={autoFocus}
         password={password}
         select={select}
         id={id}
         className={className}
         pattern={pattern}
         lang={lung}
         onChange={onChange}
         href={href}
         placeholder={placeholder}
      />
   )
})
const Input = styled.input`
   ${(
      props,
      {
         width,
         height,
         padding,
         margin,
         background,
         color,
         border,
         borderRadius,
         hoverBack,
         boxShodow,
      } = props
   ) =>
      css`
         outline: none;
         width: ${width || ''};
         height: ${height || ''};
         padding: ${padding || ''} !important;
         margin: ${margin || ''} !important ;
         background-color: ${background || ''} !important;
         color: ${color || 'black'};
         border: ${border || ''}!important;
         border-radius: ${borderRadius || ''} !important;
         &:hover {
            background-color: ${hoverBack || ''} !important;
         }
         &:focus {
            color: ${({ hoverColor }) => hoverColor || 'black'};
         }
         &:after {
            box-shadow: ${boxShodow || ''};
         }
      `}
`
