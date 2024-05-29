import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UNATHENTICATED_URL } from './Utils/Route.define';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Layout from './Pages/Layout/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Kid from './Pages/Kid';
import ClothesDetail from './Pages/ClothesDetail';

const queryClient = new QueryClient()
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  // const userLogin = AuthApiService.IsLoggedIn()
  const userLogin = true
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              {userLogin &&
                <>
                  <Route path={UNATHENTICATED_URL.HOME} element={<Home />} />
                  <Route path={UNATHENTICATED_URL.MEN} element={<Men />} />
                  <Route path={UNATHENTICATED_URL.WOMEN} element={<Women />} />
                  <Route path={UNATHENTICATED_URL.KID} element={<Kid />} />
                  <Route path={UNATHENTICATED_URL.LOGIN} element={<Login />} />
                  <Route path={UNATHENTICATED_URL.POST_DETAIL} element={<ClothesDetail />} />
                </>
              }
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
