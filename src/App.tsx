import React from 'react';
import './App.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';

const App = () => {
  return (
    <Container>
      <Header heading="Pomodoro Timer" />
      <MainContent />
    </Container>
  );
};

export default App;
