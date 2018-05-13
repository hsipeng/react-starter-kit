import React, {Component} from 'react'
import ReactDom from 'react-dom'


export default class Cavans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'green'
        }
    }

    componentDidMount(){
        const context = ReactDom.findDOMNode(document.getElementById('canvas')).getContext('2d');
        this.paint(context);
    }

    componentDidUpdate(){
        const context = ReactDom.findDOMNode(document.getElementById('canvas')).getContext('2d');
        context.clearRect(0, 0, 200, 200);
        this.paint(context);
    }

    paint(context) {
        context.save();
        context.fillStyle = this.state.color;
        context.fillRect(0, 0, 100, 100);
        context.restore();
    }

    onChangeColor(e){
        console.log(e)
        this.setState({
            color: e.target.value
        });
    }

    render() {
        return (<div>
            <canvas id='canvas' width='200' height='200'></canvas>

            <input type='color' value={this.state.color} onChange={this.onChangeColor.bind(this)}/>
        </div>)
    }
}