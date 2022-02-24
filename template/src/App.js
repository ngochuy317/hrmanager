import MainLayout from "./components/layout/MainLayout";
import {useEffect} from "react"
import { useDispatch} from "react-redux"
import { loadUser } from "./redux/actions/authActions";
import { BrowserRouter } from "react-router-dom";

function App() {

  const dispatch = useDispatch()  
  useEffect(()=>{
    dispatch(loadUser());
  },[dispatch])

  return (
    <BrowserRouter>
        <MainLayout />  
    </BrowserRouter>
  );
}

export default App;
