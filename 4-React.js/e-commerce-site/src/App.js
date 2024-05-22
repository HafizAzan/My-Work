import './App.css';
import NavBar from './components/NavBar';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UNATHENTICATED_URL } from './Utils/Route.define';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { AuthApiService } from './Utils/auth';



const queryClient = new QueryClient()
function App() {
  // const userLogin = AuthApiService.IsLoggedIn()
  const userLogin = true
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<NavBar />}>
              {userLogin &&
                <>
                  <Route path={UNATHENTICATED_URL.HOME} element={<Home />} />
                  <Route path={UNATHENTICATED_URL.LOGIN} element={<Login />} />
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
