import React from 'react';
import {connect} from 'react-redux'
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

class Counter2 extends React.Component{
  render() {
    return (
      <div>
        <p id="counter">{this.props.number}</p>
        <button id="increaseBtn" onClick={(ev) => this.props.onIncrease(ev, 1)}>+</button>
        <button id="decreaseBtn" onClick={this.props.onDecrease}>-</button>
      </div>
    )
  }
}
let mapStateToProps = (state) => {
  return {
    number: state.counter.number
  }
}
// let mapStateToProps = (state) => ({number: state.number}) //! 这一行等于 上面的  注意 加了()  也是return了的 
let mapDispatchToProps = (dispatch) => {
  return {
    onIncrease: (ev, index) => {
      //console.log(ev)
      //console.log(index)
      //dispatch({type: INCREASE, amount: 1})

      dispatch(function(dispatch) { // ! 异步 要配合  applyMiddleware  redux-thunk
        setTimeout(() => {
          dispatch({type: INCREASE, amount: 1})
        }, 1000)
      })

      // dispatch(new Promise(function(resolve, reject){  // ! 异步 要配合  applyMiddleware  redux-promise
      //   setTimeout(() => {
      //     resolve({type: INCREASE, amount: 1})
      //   }, 1000)
      // }))
    },
    onDecrease: () => dispatch({type: DECREASE, amount: 1})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter2)