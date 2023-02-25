import { Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { HomePage } from './pages/HomePage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} />

        <Route path='HomePage' element={<HomePage />} />

        <Route path='*' element={<Layout />} />
      </Route>
    </Routes>
  );
}

export default App;