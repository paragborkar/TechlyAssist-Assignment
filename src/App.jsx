import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import VideoList from './components/VideoList';
import Footer from './components/Footer';
import VideoPage from './components/VideoPage';
const App = () => {
  let page;
  if(localStorage.getItem("page")>=0)
    {
      page=localStorage.getItem("page");
    }
    else{
      page=1;
    }
 
  return (
   <>
   <Header/>
   <Router>
    <Routes>
      <Route path='/' element={<VideoList page={'0'}/>}/>
      <Route path='/1' element={<VideoList page={'1'}/>}/>
      <Route path='/2' element={<VideoList page={'2'}/>}/>
      <Route path='/3' element={<VideoList page={'3'}/>}/>
      <Route path='/4' element={<VideoList page={'4'}/>}/>
      <Route path='/5' element={<VideoList page={'5'}/>}/>
      <Route path='/video' element={<VideoPage/>}/>
    </Routes>
    <Footer/>
   </Router>
   </>
  )
}

export default App
