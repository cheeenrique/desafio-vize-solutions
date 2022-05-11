import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 72px);
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const BoxHeader = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  width: 100%;

  @media(max-width: 800px) {
    flex-direction: column;
  }
`;

export const BoxBreadcrumbs = styled.div`
  display: flex;
  flex-direction: column;

  span{
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    line-height: 15px;
    font-weight: 400;
    color: #8094ae;
  }
`;

export const BoxAction = styled.div`
  display: flex;
`;

export const BackgroundFull = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 9;

display: flex;
justify-content: center;
align-items: center;

background-color: rgba(0, 0 ,0 , 0.8);
`;
