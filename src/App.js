//PAGES
import ReactBlog from './Pages/ReactBlog'
import Merch from './Pages/Merch'
import Minesweeper from './Pages/Minesweeper'
import Weather from './Pages/Weather'
import Notes from './Pages/Notes'
import Paddle from './Pages/Paddle.js'
import Snake from './Pages/Snake.js'
import FaceRecognition from './Pages/FaceRecognition'

import {Switch, Route} from 'react-router-dom'

import Header from './Components/Header/Header'
import CardsContainer from './Components/CardsContainer/CardsContainer'

import classes from './App.module.css'


function App() {
  return (
    <Switch>
     <Route exact path="/">
        <div className={classes.AppContainer}>
            <Header></Header>
            <CardsContainer></CardsContainer>
        </div>
     </Route>
     <Route path="/react-blog" component={ReactBlog} />
     <Route path="/merch" component={Merch} />
     <Route path="/minesweeper" component={Minesweeper} />
     <Route path="/weather" component={Weather} />
     <Route path="/notes" component={Notes} />
     <Route path="/paddle" component={Paddle} />
     <Route path="/snake" component={Snake} />
     <Route path="/face_recognition" component={FaceRecognition} />
    </Switch>
  );
}

export default App;
