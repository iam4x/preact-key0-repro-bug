import React, { PropTypes, Component } from 'react'
import { render } from 'react-dom'

import Rheostat from 'rheostat'

function PitComponent({ style, children }) {
  return (
    <div
      style={Object.assign({}, style, {
        background: '#a2a2a2',
        width: 1,
        height: children % 10 === 0 ? 12 : 8,
        top: 20,
      })}
    />
  )
}

PitComponent.propTypes = {
  style: PropTypes.object,
  children: PropTypes.number,
}

PitComponent.defaultProps = {
  style: null,
  children: null,
}

class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = { values: [40, 80] }
    this.updateValue = this.updateValue.bind(this)
  }

  updateValue(sliderState) {
    this.setState({
      values: sliderState.values,
    })
  }

  render() {
    return (
      <div
        style={{
          margin: '10% auto',
          height: '50%',
          width: '50%',
        }}
      >
        <h1>Bug with children with a `key={0}`</h1>
        <h4>Try to move the range</h4>
        <Rheostat
          pitComponent={PitComponent}
          pitPoints={[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]}
          snap
          snapPoints={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          values={this.state.values}
          onValuesUpdated={this.updateValue}
        />

        <hr style={{marginTop: 30}}/>

        <h1>Working one without children `key={0}`</h1>
        <Rheostat
          pitComponent={PitComponent}
          pitPoints={[1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]}
          snap
          snapPoints={[1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          values={this.state.values}
          onValuesUpdated={this.updateValue}
        />
      </div>
    )
  }
}

render(<Slider />, document.body)
