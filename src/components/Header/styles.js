import styled from 'styled-components';

export const Head = styled.header`
  padding: 10px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 65px;
  justify-content: center;
  align-items: center;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);   
  background: linear-gradient(0deg,#461978,#461978);
`;

export const Container = styled.div`
  padding: 0px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .MuiButton-text {
    color: #FFFFFF !important;
  }
`;

export const Logo = styled.div`
  padding: 0px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  img {
    width: 74px;
  }
`;
