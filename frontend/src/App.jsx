import {Routes, Route, Navigate} from 'react-router'
import HomePage from './pages/HomePage.jsx';
import ProblemsPage from './pages/ProblemsPage.jsx';
import { useUser } from '@clerk/clerk-react';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const {isSignedIn} = useUser();

  return (
    <>
    <button className='btn' onClick={() => toast.success('Prescription sent')}>Click me</button>
    <Toaster toastOptions={{duration: 3000}}/>
    
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/problems' element={isSignedIn ? <ProblemsPage/> : <Navigate to={"/"}/>}/>
    </Routes>
    </>

  )
}

export default App
