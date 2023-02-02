'use client';

import styled, { css, ThemeProvider } from 'styled-components';
import { myTheme } from '~/styles/my-theme';

const Title = styled.h1`
  width: 0%;
  height: 0%;
  justify-content: center;
  align-items: center;
  display: flex;

  ${({ theme }) =>
    css`
      height: 0%;
      width: 0%;
      color: ${theme.borderRadius};
      text-align: center;
      background: linear-gradient(to bottom, transparent, rgb(var(--background-end-rgb)))
        rgb(var(--background-start-rgb));
      font-size: 1.5em;
      background-color: rgba(0, 0, 0, 0);
    `}
`;

const Wrapper = styled.section`
  padding: 4em;
  background: rgba(255, 255, 255, 1);
`;

export default function Home() {
  return (
    <ThemeProvider theme={myTheme}>
      <Wrapper
        css={css`
          background-color: rgba(0, 0, 0, 0);
          width: 0%;
          text-align: center;
          height: 0%;
          font-size: 1.5em;
        `}
      >
        <Title>타이틀</Title>
      </Wrapper>
    </ThemeProvider>
  );
}
