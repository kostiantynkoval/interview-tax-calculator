import styled from "styled-components";

export const StyledNotification = styled.div`
  display: block;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.5);
  overflow-x: auto;
`;

export const StyledNotificationBody = styled.div`
  display: block;
  margin: 60px auto 0;
  width: 80%;
  padding: 40px;
  background: slategrey;
  
`;