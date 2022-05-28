import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import {createTheme,ThemeProvider} from '@material-ui/core'
import Layout from './components/Layout';

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
      <Layout>
          <Routes>
            <Route path="/create" element={<Create />} />
            <Route path="/" element={<Notes />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
