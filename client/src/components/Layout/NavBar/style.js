import styled from '@emotion/styled';

export const Navbar = styled('nav')`
  background-color: white;
  padding-left: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: none;
  ${({ theme }) => theme.media.mobile} {
    display: block;
  }
`;
