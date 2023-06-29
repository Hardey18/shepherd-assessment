import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { Tutor } from "./pages/Tutor"
// import Home from "./Home"
// import About from "./About"
// import Contact from "./Contact"
// import Layout from "./components/Layout";

export function App() {
 return (
   <div className="App">
     <BrowserRouter>
       <Routes>
         <Route element={<Layout />} >
           <Route path="/" element={<Home />} />
           <Route path="tutor" element={<Tutor />} />
           {/* <Route path="contact" element={<Contact />} /> */}
         </Route>
       </Routes>
     </BrowserRouter>
   </div>
 )
}
