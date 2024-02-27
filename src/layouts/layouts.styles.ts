import styled from "@emotion/styled";

export const Wrapper = styled.div`
  label: layout-wrapper;
  display: flex;
  flex-direction: column;
  width: 100%;
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    flex: 1;
  }
  &.empty {
    min-height: auto;
    height: 100vh;
    overflow: hidden;
  }
`;
