import '@mantine/core/styles.css';

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RetroPage from './pages/RetroPage';

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<LoginPage/>}/>
          <Route path={'/retro/:id'} element={<RetroPage/>}/>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
