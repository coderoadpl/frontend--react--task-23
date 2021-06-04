import React from 'react'

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export class App extends React.Component {
  state = {
    isShowed: true
  }

  toggle = () => {
    this.setState((prevState) => ({
      isShowed: !prevState.isShowed
    }))
  }

  render () {
    const { isShowed } = this.state

    return (
      <div>
        <button
          style={{
            cursor: 'pointer'
          }}
          onClick={this.toggle}
        >
          {isShowed ? 'HIDE' : 'SHOW'}
        </button>
        {
          isShowed ?
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
            :
            null
      }
      </div>
    )
  }
}

export default App
