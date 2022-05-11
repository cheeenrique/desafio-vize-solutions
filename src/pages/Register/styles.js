import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg,#461978,#461978);
`;

export const Box = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 100%;
  max-height: 560px;
  width: 100%;
  max-width: 1000px;
  border-radius: 4px;
`;

export const Item = styled.div`
  flex-grow: 0;
  width: 100%;
  max-width: 58%;

  @media(max-width: 900px) {
    display:none;
  }

  img {
    border-radius: 5px
  }
`;

export const ItemLogin = styled.div`
  background: #FFFFFF;
  width: 100%;
  max-width: 42%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  aling-items: center;
  border-radius: 0px 4px 4px 0px;

  @media(max-width: 900px) {
    max-width: 100%;
    border-radius: 4px;
    padding: 30px;
  }
`;

export const ItemLogo = styled.div`
  display: flex;
  flex-direction: row;  
  justify-content: center;
  width: 100%;
  padding-bottom: 30px;

  img{
    max-width: 132px;
  }
`;

export const TituloForm = styled.div`
  margin-bottom: 12px;
  width: 100%;

  h4{
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    line-height: 17px;
    font-weight: 600;
    color: #461978;
    padding-bottom: 12px;
    margin-bottom: 12px;
    border-bottom: 3px solid #461978;
    width: 50%;
  }
`;

export const BoxVoltarLogin = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  line-height: 15px;
  font-weight: 600;
  color: #999999;
  padding: 5px;
  width: 50%;
  border-bottom: 2px solid #999999;

  span{
    font-weight: 400;
  }

  a{
    text-decoration: none;
    outline: 0;
  }

  a:visited{
    color: #999999;
  }

  a:hover{
    color: #461978;
  }
`;

export const Copyright = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  line-height: 15px;
  font-weight: 600;
  color: #999999;
`;
