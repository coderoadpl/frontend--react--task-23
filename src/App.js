import React from 'react'

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export class App extends React.Component {
  render () {
    return (
      <div>
        <button>
          HIDE
        </button>
        <ul>
          {
          numbers.map((number) => {
            return (
              <li key={number}>
                {number}
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}

export default App
