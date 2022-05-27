import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

const AppContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 1em 0;
`;

function App() {
  return (
    <AppContainer>
      <h2>React/Typesense</h2>
    </AppContainer>
  );
}

export default App;
