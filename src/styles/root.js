import styled from "styled-components";

export const Header = styled.div`
  background: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 ${(props) => `${props.ww(8)}rem`};

  z-index: 2;
  height: ${(props) => `${props.ww(3)}rem`};
  width: 100%;
`;

export const Container = styled.div`
  background: #ffffff;
`;
export const Group = styled.div`
  display: flex;
  align-items: center;
`;
