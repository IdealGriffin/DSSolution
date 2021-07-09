import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import MainPage from './components/MainPage';
import MenuBar from './components/MenuBar';
import BottomBanner from './components/BottomBanner';
import Notice from './components/Notice';
import QnA from './components/QnA';
import FaQ from './components/FaQ';
import Question from './components/Question';
import Question_read from './components/Question_read';


import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div>
      <MenuBar/>
      <Route exact path="/" component={MainPage}></Route>
      <Route exact path='/notice' component={Notice}></Route>
      <Route exact path='/qna' component={QnA}></Route>
      <Route exact path='/faq' component={FaQ}></Route>
      <Route exact path='/question' component={Question}></Route>
      <Route exact path='/question/:id' component={Question_read}></Route>
      <BottomBanner/>
    </div>
  );
}

export default App;
