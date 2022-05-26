import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import {createTheme,ThemeProvider} from '@material-ui/core'

const theme = createTheme({
  palette:{
    primary:{
      main:'#3f51b5'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/create" element={<Create />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
