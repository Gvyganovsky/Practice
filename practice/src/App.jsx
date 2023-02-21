import { Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { HomePage } from './pages/HomePage';
import { Page } from './pages/Page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} />

        <Route path='Page' element={<Page />} />

        <Route path='*' element={<Layout />} />
      </Route>
    </Routes>
  );
}

export default App;
