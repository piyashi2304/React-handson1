import React , {Component} from 'react'
import ClassCompo23 from './ClassCompo23'
import FunctionCompo23 from './FunctionCompo23'
class Displaycompo extends Component{
    constructor(){
        super()
        this.state = {
            count1: false,
            count2: false
        }
    }
    render(){
        console.log(this.state.count1)
        console.log(this.state.count2)
        return(
            <>
             
             <div className='parent'>
             <button className='button1 button' onClick={() =>this.setState({count1:!this.state.count1})}>To see styling in function component</button>
             <button className='button2 button' onClick={() =>this.setState({count2:!this.state.count2})}>To see styling in class component</button>
             <div className='Container'>
             {this.state.count1 ? <FunctionCompo23 /> : null}
             {this.state.count2 ? <ClassCompo23 /> : null}
             </div>
             </div>
            </>
            
        )
    }
}
export default Displaycompo