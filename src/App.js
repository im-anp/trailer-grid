import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {data} from './data';
import Card from './card';
import Video from './video';

var prev={};
var pr;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:data[1],
      obj_ref:{},
      cs:'',
      show:'',
      passData:{}
    }
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount(){
    
    let obj_ref= {};
    window.addEventListener("resize", this.updateDimensions);
    Object.keys(this.state.data).map(val => {
      obj_ref[val] = ReactDOM.findDOMNode(this[val]).getBoundingClientRect().top;
    })
    console.log(obj_ref)
    this.setState({
      obj_ref
    }) 
  }

  updateDimensions(){
    let obj_ref= {};
    Object.keys(this.state.data).map(val => {
      obj_ref[val] = ReactDOM.findDOMNode(this[val]).getBoundingClientRect().top;
    })
    this.setState({
      obj_ref
    })
  }

  videoClick(data, previ) {
    console.log(previ);
    
    this.setState({
      passData: data,
      show:previ,
    },() => {
      console.log('hello anoop',this.state.show)
      let top = this.vidio.offsetTop;
      console.log(top)
      window.scrollTo(0,top);
    } )
  }


  render(){
    
    return(
      
      <div className="container">
        { (this.state.obj_ref.length == 0)?
          Object.keys(this.state.data).map(val => <span ref={e => this[val] = e}><Card data={this.state.data[val]} /> </span>):
          Object.keys(this.state.data).map((val,i) => {
            if(i ==0){
              pr = this.state.obj_ref[val]
              prev[val] = this.state.obj_ref[val]
              return(
                <React.Fragment>
                {(this.state.show===pr)&&<span ref={e => this.vidio = e}><Video ref={e => this.vidio = e} data = {this.state.passData} /></span>}
                <div className={`trailerCardWrapper inline-flex-column`} >
                
                <span value={prev} onClick={()=> this.videoClick(this.state.data[val],prev[val])} ref={e => this[val] = e} style={{display:'inline-block',height:'100%'}}>
                  <Card data={this.state.data[val]} /> 
                </span>
                </div>
                </React.Fragment>
                )
            }
            else{
              if(pr != this.state.obj_ref[val]) {
                pr = this.state.obj_ref[val]
                prev[val] = this.state.obj_ref[val]
                return(
                  <React.Fragment>
                    {(this.state.show===pr)&&<span ref={e => this.vidio = e}><Video  data = {this.state.passData} /></span>}
                  <div className={`trailerCardWrapper inline-flex-column`} >
                  
                  <span value={prev} onClick={() => this.videoClick(this.state.data[val], prev[val])} ref={e => this[val] = e} style={{display:'inline-block',height:'100%'}}>
                    <Card data={this.state.data[val]} /> 
                  </span>
                  </div>
                  </React.Fragment>
                  )
              }
              else {
                prev[val] = this.state.obj_ref[val]
                return(
                  <React.Fragment>
                  <div className={`trailerCardWrapper inline-flex-column`} >
                  <span value={prev} onClick={()=> this.videoClick(this.state.data[val],prev[val])} ref={e => this[val] = e} style={{display:'inline-block',height:'100%'}}>
                    <Card data={this.state.data[val]} /> 
                  </span>
                  </div>
                  </React.Fragment>
                )
              }
            }
            
          })
        }
      </div>
      
    )
  }

}


export default App;
