import { useState, useEffect } from 'react';
import * as C from './styled';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

const App = () => {

  const char = useCharacter();

  useEffect(()=> {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();
      break;

      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();
      break;

      case 'KeyS':
      case 'ArrowDown':
        char.moveDown();
      break;
      
      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();
      break;
    }
  };

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side}/>
      </C.Map>
    </C.Container>
  );
};

export default App;