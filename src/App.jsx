import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/Signin"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Header from "./component/Header"
import PrivateRoute from "./component/privateRoute"
import CreateListing from "./pages/CreateListing"
import UpdateListing from "./pages/UpdateListing"

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Sign-in" element={<SignIn/>} />
      <Route path="/Sign-Up" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route element={<PrivateRoute />} >
      <Route path="/profile" element={<Profile />} />
      <Route path="/create-listing" element={<CreateListing />} />
      <Route path="/update-listing" element={<UpdateListing />} />
    </Route>
    
    </Routes>
    </BrowserRouter>
  )
}
