import Auth from './components/Auth/Auth';
import Counter from './components/Counter/Counter';
import Header from './components/Header/Header';
import { useSelector } from 'react-redux';
import { RootState } from './store';

function App() {
  const isAuth = useSelector((state: RootState) => state.auth.isLoggedIn);
  return (
    <>
    <Header/>
    {!isAuth && <Auth/>}
    {isAuth && <Counter/>}
    <Counter />
    </>
  );
}

export default App;
