import styled from '@emotion/styled';
import React, { FC } from 'react';
import ComponentWithChildren from '../types/ComponentWithChildren';

const StyledContent = styled('main')`
  // flex: 1 1 auto,
  // display: flex,
  // justifyContent: center,
  // alignItems: center,
  // flexDirection: column,
`;

const ContentWrapper: FC<ComponentWithChildren> = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

export default ContentWrapper;
