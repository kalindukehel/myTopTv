import React from "react"
import App from "./App"
import Rendered from "./Rendered"
import { Route, Switch } from 'react-router-dom';
function Router(){
    return(
        <main>
            <Switch>
                <Route path="/" component={App} exact />
                <Route path="/rendered" component={Rendered} exact />
            </Switch>
        </main>
    )
}

export default Router