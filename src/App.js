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
    console.log(this.state)

    const { isShowed, filter } = this.state

    const filteredNumbers = numbers.filter((number) => {
      if (filter === 'ALL') return true
      if (filter === 'ODD') return number % 2 !== 0
      if (filter === 'EVEN') return number % 2 === 0
      return false
    })

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
            filteredNumbers.map((number) => {
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
