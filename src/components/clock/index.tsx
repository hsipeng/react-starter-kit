import * as React from 'react';
import moment from 'moment';

export interface IProps {}
export interface IState {
  date: Date;
}
export let TIMEID: any = {};

export default class Clock extends React.Component<
  IProps,
  IState
> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    TIMEID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(TIMEID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <span>
        {moment(this.state.date).format(
          'YYYY-MM-DD HH:mm:ss'
        )}
      </span>
    );
  }
}
