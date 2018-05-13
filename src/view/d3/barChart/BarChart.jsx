import React, {Component} from 'react'
import { scaleLinear, scaleBand } from 'd3-scale';


class BarChart extends Component {
    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        data: PropTypes.arrayOf(PropTypes.number),
        margin: PropTypes.shape({
            top: PropTypes.number,
            right: PropTypes.number,
            left: PropTypes.number,
            right: PropTypes.number,
        }),
    };

    static defaultProps = {
        margin: { top: 0, right: 0, bottom: 0, left: 0};
    };

    // 创建 X轴比例尺
const getXScale = (data, width, height, margin) => {
    return scaleBand()
            .domain(d3.range(data.length))
            .range([margin.left, width - margin.right]);
}
const getYScale = (data, width, height, margin) => {
    return scaleLinear() // 线性比例尺
            .domain(0, d3.max(data))
            .range([height - margin.bottom, margin.top]);
}


componentDidMount() {
    const { width, height, margin, data, fillColor } = this.props;
    const xScale = getXScale(data, width, height, margin);
    const yScale = getYScale(data, width, height, margin);

    const yRange = yScale.range();

    const container = this.refs.container;
    // 使用 d3
    const chart = d3.select(container)
                    .append('svg')
                    .attr('width', width)
                    .attr('height', height);

    const barWidth = xScale.bandWidth();
    const bars = chart.selectAll('.bar')
                .data(data);

    bars.enter() // 数据绑定
        .append('g') // 获取 selectAll() 创建的空占元素，并且追加到相应的DOM中
        .classed('.bar', true)
        .attr('transform', (d, i) => `translate(${margin.left + i * barWidth}, 0)`) // 每一个小矩形柱形图右偏移
        .append('react')
        .attr('y', d => yScale(d)) // 使用 y轴比例尺 缩放
        .attr('height', d => yRange[0] - yScale(d))
        .attr('width', d => barWidth -1 )
        .attr('fill', fillColor);        
}

    render() {
        return <div className='bar-chart' ref='contaniner'></div>     }
}