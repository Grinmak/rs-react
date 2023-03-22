import Header from './Header';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React, { FC } from 'react';
import '../App.css';

const ContentWrapper = styled(Box)`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

interface ComponentWithChildren {
  children?: React.ReactElement | React.ReactNode;
}

const Main: FC<ComponentWithChildren> = ({ children }) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};
export default Layout;
