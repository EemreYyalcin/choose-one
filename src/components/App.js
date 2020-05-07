import React from 'react';
import HomeComponent from "./home/HomeComponent";
import "semantic-ui-css/semantic.min.css";
import Route from "react-router-dom/es/Route";

const App = () => {
    return <div>
        <HomeComponent/>
        {/*<Route path={HOME_PATH} exact strict component={HomePage}/>*/}
        {/*<Route path={GAME_PATH} exact strict component={GamePage}/>*/}
        {/*<Route path={SETTINGS_PATH} exact strict component={SettingsPage}/>*/}
    </div>
};

export default App;