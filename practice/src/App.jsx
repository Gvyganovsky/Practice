import { Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { HomePage } from './pages/HomePage';
import { RegistrationPage } from './pages/RegistrationPage';
import { LoginPage } from './pages/LoginPage';
import { ProfilePage } from './pages/ProfilePage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='HomePage' element={<HomePage />} />
        <Route path='RegistrationPage' element={<RegistrationPage />} />
        <Route path='LoginPage' element={<LoginPage />} />
        <Route path='ProfilePage' element={<ProfilePage />} />
        <Route path='ForgotPasswordPage' element={<ForgotPasswordPage />} />
        <Route path='*' element={<Layout />} />
      </Route>
    </Routes>
  );
}

export default App;
