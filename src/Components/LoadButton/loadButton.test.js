import { LoadButton } from './loadButton.jsx'
import { render } from '@testing-library/react'

describe('<LoadButton> Snapshot', () => {
  it('should capture Snapshot of <LoadButton/> component', () => {
    const { container } = render(<LoadButton />)
    expect(container).toMatchSnapshot()
  })
})

it('should render with a className equal to the variant', () => {
  const { container } = render(<LoadButton />)
  expect(container.firstChild.classList.contains('loadBtn')).toBe(true)
})
