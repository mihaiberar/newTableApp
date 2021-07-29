import { LoadButton } from '../LoadButton/loadButton.jsx'
import { Table } from '../Table/table.jsx'
import { Context } from '../Context/context'
import { createMemoryHistory } from 'history'

import { render } from '@testing-library/react'
import { Router } from 'react-router'

it('should capture <Table /> snapshot', () => {
  const history = createMemoryHistory()
  const data = [{ name: 'Mihai' }]
  const { container } = render(
    <Router history={history}>
      <Context.Provider value={[data]}>
        <Table />
      </Context.Provider>
    </Router>
  )
  expect(container).toMatchSnapshot()
})

it('should render <LoadButton/> 5 times', () => {
  const history = createMemoryHistory()
  const data = [{ name: 'Mihai' }]
  const { container } = render(
    <Router history={history}>
      <Context.Provider value={[data]}>
        <Table />
      </Context.Provider>
    </Router>
  )
  expect(container.contains(LoadButton)).toHaveLength(5)
})
