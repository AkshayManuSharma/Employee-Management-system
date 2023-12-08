import React from 'react';
import {createRoot} from 'react-dom/client'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmployeeDirectory from './components/EmployeeDirectory.jsx'
import EmployeeCreate from './components/EmployeeCreate.jsx'

export default class App extends React.Component{
    constructor(){
        super()
    }

    render(){
        return <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <EmployeeDirectory/>
                        </Route>
                        <Route path="/:mode/:id" >
                            <EmployeeCreate/>
                        </Route>
                        <Route path="/:mode">
                            <EmployeeCreate/>
                        </Route>
                    </Switch>
                </BrowserRouter>
    }
}
const root = createRoot(document.getElementById("app"))
root.render(<App/>)