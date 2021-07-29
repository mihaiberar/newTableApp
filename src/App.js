import React from 'react'
import './App.css'
import { Table } from './Components/Table/table.jsx'
import { EditPage } from './Components/EditPage/editPage.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { DataProvider } from './Components/Context/context.js'

function App() {
  return (
    <DataProvider>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <Table />
            </Route>
            <Route path="/edit/:id" exact>
              <EditPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </DataProvider>
  )
}

export default App
