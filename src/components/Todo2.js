import React from 'react';
import {connect} from 'react-redux'

class Todo2 extends React.Component{
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     number: store.getState().counter.number
  //   }
  // }
  render() {
    return (
      <div>
        <input type="text" onKeyDown={(ev) => this.props.handleKeyDown(ev, this.props.list)} />
        <ul>
          {
            this.props.list.map((item, index) => {
              return <li key={index}>{item}<button onClick={(ev) => this.props.handleDelete(ev, index, this.props.list)}>删除</button></li>
            })
          }
        </ul>
      </div>
    )
  }
}
let mapStateToProps = (state) => {
  return {
    list: state.todo.list
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handleKeyDown: (ev, list) => {
      if (ev.keyCode === 13 && ev.target.value.length > 0) {
        dispatch({type: 'addList',list: [...list,ev.target.value]})
        ev.target.value = ''
      }
    },
    handleDelete: (ev, index, list) => {
      let listCopy = [...list]
      listCopy.splice(index, 1)
      dispatch({type: 'deleItem',list: listCopy})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo2)
