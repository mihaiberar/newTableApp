import { EditPage } from './editPage.jsx'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
import { Context } from '../Context/context'

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useParams: jest.fn()
// }))

describe('componentToTest', () => {
  // beforeEach(() => {
  //   useParamsMock.mockImplementation(() => {
  //     return {
  //       id: ''
  //     }
  //   })
  //   useContextMock.mockImplementation(() => ['my data'])
  // })
  // afterEach(() => {
  //   jest.clearAllMocks()
  // })
  it('should capture Snapshot of <EditPage/> component', () => {
    // useContextMock.mockReturnValue('Test Value')

    const history = createMemoryHistory()
    const data = [{ name: 'Mihai' }]
    const { container } = render(
      <Router history={history}>
        <Context.Provider value={[data]}>
          <EditPage />
        </Context.Provider>
      </Router>
    )
    expect(container).toMatchSnapshot()
  })
})
