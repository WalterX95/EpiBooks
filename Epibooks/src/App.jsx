import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./components/MyNav";
import MyFooter from './components/MyFooter';
import MyAlert from './components/MyAlert';
import MyBooks from './components/MyBooks';
function App() {
  return (
    <>
       <MyNav/>
       <MyAlert/>
       <MyBooks/>
       <MyFooter/>
    </>
  )
}

export default App
