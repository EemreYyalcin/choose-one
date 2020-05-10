import React from 'react';
import "semantic-ui-css/semantic.min.css";
import HomeComponentV3 from "./home/HomeComponentV3";

const App = () => {
    return <div>
        <HomeComponentV3/>
        {/*<Route path={QUESTION} exact strict component={QuestionComponent}/>*/}
        {/*<Route path={LOGIN} exact strict component={LoginComponent}/>*/}
        {/*<Route path={SETTINGS_PATH} exact strict component={SettingsPage}/>*/}
    </div>
};

export default App;