import React, { useState, Component } from 'react';

import ReactDOM from 'react-dom'

class Model extends Component{
  handleSubmit = () =>{
    this.props.onSubmit();
  }
  handleCancel = () =>{
    this.props.onCancel();
  }
  render(){
    return (
      <div style={{background: 'rgba(0,0,0,.3)', position: 'fixed', left: 0, top: 0,right:0,bottom:0}}>
        <div style={{width: '200px', background: '#fff', textAlign: 'center', position: "absolute", left: '50%', top: '50%', transform: 'translateX(-50%) translateY(-50%)'}}>
          <div style={{padding: '6px 0', borderBottom: '1px solid #333'}}>{this.props.title || '标题'}</div>
          <div style={{padding: '40px 0 20px'}}>
            <button onClick={this.handleCancel} style={{marginRight: '20px'}}>取消</button><button onClick={this.handleSubmit}>确定</button>
          </div>
        </div>
      </div>
    )
  }
}

function confirm(title) {
  let node = document.getElementById('__confirm');
  if (!node) {
    node = document.createElement('div');
    document.body.appendChild(node);
  }
  return new Promise((resolve, reject) => {
    ReactDOM.render(<Model onSubmit={() => {resolve(true)}} onCancel={() => {resolve(false)}}/>, node)
    // resolve('yes')
  }).finally(() => {
    ReactDOM.unmountComponentAtNode(node);
  })
}

export default class index extends Component {
  async componentDidMount() {
    let res = await confirm("确定删除吗")
    if (res) {
      console.log("是")
    } else {
      console.log("否")
    }
  }
  render() {
    return (
      <div></div>
    )
  }
}

