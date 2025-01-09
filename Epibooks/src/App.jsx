import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./components/MyNav";
import MyFooter from './components/MyFooter';
import MyAlert from './components/MyAlert';
import BookList from './components/BookList';
function App() {
  return (
    <>
       <MyNav/>
       <MyAlert/>
       <BookList/>
       <MyFooter/>
    </>
  )
}

export default App
