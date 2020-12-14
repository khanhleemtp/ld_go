import React from 'react';
import { Container, Check, Ignore } from './styles/button';

export default function Button({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

 Button.Check = function ButtonCheck({ children, ...restProps }) {
  return <Check {...restProps}>{children}</Check>;
}

Button.Ignore = function ButtonIgnore({ children, ...restProps }) {
  return <Ignore {...restProps}>{children}</Ignore>;
}