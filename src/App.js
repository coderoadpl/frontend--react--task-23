import React from 'react'

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export class App extends React.Component {
  state = {
    isShowed: true,
    filter: 'ALL'
  }

  toggle = () => {
    this.setState((prevState) => ({
      isShowed: !prevState.isShowed
    }))
  }

  setFilter = (newFilter) => {
    this.setState((prevState) => ({
      filter: newFilter
    }))
  }

  render () {
    const { isShowed, filter } = this.state

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
        <label>
          <input
            type={'radio'}
            name={'filter'}
            value={'ALL'}
            checked={filter === 'ALL'}
            onChange={() => this.setFilter('ALL')}
          />
          ALL
        </label>
        <label>
          <input
            type={'radio'}
            name={'filter'}
            value={'ODD'}
            checked={filter === 'ODD'}
            onChange={() => this.setFilter('ODD')}
          />
          ODD
        </label>
        <label>
          <input
            type={'radio'}
            name={'filter'}
            value={'EVEN'}
            checked={filter === 'EVEN'}
            onChange={() => this.setFilter('EVEN')}
          />
          EVEN
        </label>

        <ul
          style={{
            display: isShowed ? 'block' : 'none'
          }}
        >
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
