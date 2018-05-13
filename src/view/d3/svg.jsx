import React, {Component} from 'react'

export default class SVG extends Component {

    render(){
      return (
        <svg width='200' height='200' viewBox='0 0 200 200'>
             <circle cx='50' cy='50' r='20'/>
             <circle cx='100' cy='50' r='20'/>
             <circle cx='75' cy='100' r='40'/>
             <circle cx='60' cy='90' r='10' fill='#fff' />
             <circle cx='90' cy='90' r='10' fill='#fff' />
        </svg>     )
    }
  }