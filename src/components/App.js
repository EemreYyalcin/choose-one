import React from 'react';
import HomeComponent from "./home/HomeComponent";
import "semantic-ui-css/semantic.min.css";
import Route from "react-router-dom/es/Route";
import {QUESTION} from "../helper/PathHelper";
import QuestionComponent from "./question/QuestionComponent";
import HomeComponentV2 from "./home/HomeComponentV2";

const App = () => {
    return <div>
        <HomeComponentV2/>
        <Route path={QUESTION} exact strict component={QuestionComponent}/>
        {/*<Route path={GAME_PATH} exact strict component={GamePage}/>*/}
        {/*<Route path={SETTINGS_PATH} exact strict component={SettingsPage}/>*/}
    </div>
};

export default App;