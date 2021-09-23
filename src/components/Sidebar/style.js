import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  border: 1px solid red;
  padding: 30px 0;
`;

export const Header = styled.div`
  display: flex;
`;

Header.Logo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
