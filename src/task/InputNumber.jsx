import React, { Component , useState} from 'react'


class InputNumber extends Component{
  constructor(){
    super();
    this.state = {
      value: ''
    }
  }

  componentDidMount(){
    if(typeof this.props.value === 'string'){
      this.isControlled = true;
      this.setState({
        value: this.props.value
      })
    }else{
      this.isControlled = false;
      if(typeof this.props.defaultValue === 'string'){
        this.setState({
          value: this.props.defaultValue
        })
      }
    }
  }

  handleChange = (e) => {
    let {onChange} = this.props;
    let v = e.target.value;
    this.setState({
      value: v
    })
    if(onChange) onChange(v)
  }

  render(){
    return (
      <input type="text" value={this.isControlled ? this.props.value : this.state.value} onChange={this.handleChange}/>
    )
  }
}


function App(){
  const [value,setValue] = useState('aaa')
  return (
      <div style={{margin: '200px auto', width: '400px'}}>
        <div><InputNumber value={value} onChange={e=>{ setValue(e)}}/></div>
        <div style={{marginTop: '20px'}}><InputNumber defaultValue={value} onChange={e=>{}}/></div>
        <button style={{marginTop: '20px'}} onClick = {() => {setValue('bbb')}}>按钮 设置 value值为bbb</button>
      </div>
  )
}

export default App