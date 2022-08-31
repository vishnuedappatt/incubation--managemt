import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home_Page from "./pages/Homepage";
import {AuthProvider} from  './context/AuthContext'
import Adminpage from "./pages/AdminPage";
import Applicationpage from "./pages/Applicationpage";
import {AppProvider} from './context/AppContext'
import PostViewPage from "./pages/PostViewPage";
import RecordPage from "./pages/RecordPage";
import SlotBooking from "./pages/SlotBooking";
import { SlotProvider } from "./context/SlotContext";
import UserPage from "./pages/UserPage";
import UserHome from "./pages/UserHome";
import ShowAppStatusPage from "./pages/ShowAppStatusPage";
import PrivetRouter from "./PrivetRouts/PrivetRouter";
import AdminRouter from "./PrivetRouts/AdminRouter";
import CaseOfLogin from "./PrivetRouts/CaseOfLogin";
import AdminSafe from "./PrivetRouts/AdminSafe";

function App() { 
  
  return (
   <div>
    
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <SlotProvider >
          <Routes>
              <Route element={<CaseOfLogin />}>
                <Route path='/' element={<Home_Page/>}/>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />  
              </Route>              
              <Route element={<PrivetRouter />} >
                <Route element={<AdminRouter />}>
                  <Route path="/admin" element={<Adminpage />} />   
                  <Route path="/apps/:id" element={<PostViewPage />} />   
                  <Route path='/records' element={<RecordPage />} /> 
                  <Route path='/slot' element={<SlotBooking />} /> 
                  <Route path='/users' element={<UserPage />} />   
                </Route>  
                  <Route path="/application" element={<Applicationpage />} />              
                  <Route path='/userhome' element={<UserHome/>} />
                  <Route path='/userstatus' element={<ShowAppStatusPage />}/>   
              </Route>       
          </Routes>   
          </SlotProvider>
        </AppProvider> 
      </AuthProvider>
    </BrowserRouter>   
   
   </div>
  
  );
}

export default App;
