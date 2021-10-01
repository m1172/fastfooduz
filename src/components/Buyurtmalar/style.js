import styled from 'styled-components';
import { ReactComponent as plus } from '../../assets/icons/plus.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  background: white;
`;

export const Wrapper = styled.div`
  display: flex;
  width: ${({ center }) => (center ? '100%' : '300px')};
  height: 90px;
  align-items: center;
  border: 1px solid #e5e5e5;
  padding: 10px 40px;
`;

export const Add = styled.div`
  display: flex;
  cursor: pointer;
`;
Add.Plus = styled(plus)`
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  background: #20d472;
  padding: 9px;
  border-radius: 50%;
  cursor: pointer;
`;

Add.Title = styled.div`
  font-family: SFProDisplay;
  font-size: 12px;
  line-height: 16px;
  color: #2d3a45;
  margin-left: 14px;
  cursor: pointer;
`;
