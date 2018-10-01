import * as React from 'react';
import HTTP from '@/utils/http';
export interface IProps {}

export interface IState {
  data?: String
}

export default class AjaxDemo extends React.Component<
  IProps,
  IState
> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      data: '',
    };
  }

  onHandleAjaxClick = () => {
    const _this = this;
    HTTP.get('/todos/1', {}).then((response: any) => {
      _this.setState({
        data: response.data,
      });
    });
  };

  render() {
    return (
      <div>
        {JSON.stringify(this.state.data)}
        <span onClick={this.onHandleAjaxClick}>
          请求数据
        </span>
      </div>
    );
  }
}
