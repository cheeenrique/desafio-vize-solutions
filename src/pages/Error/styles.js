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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  border-radius: 4px;

    a {
        color: #FFFFFF;
    }
    
    img {
        max-width: 300px;
        animation: shake 1.5s;
    }

    @keyframes shake {
    10%, 90%{
        transform: translate3d(-1px, 0, 0);
    }

    20%, 80%{
        transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70%{
        transform: translate3d(-4px, 0, 0);
    }

    40%, 60%{
        transform: translate3d(4px, 0, 0);
    }
}
`;

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 25px;
  line-height: 28px;
  font-weight: 600;
  color: #FFFFFF;
  text-align: center;

  margin: 20px 0px;
`;
