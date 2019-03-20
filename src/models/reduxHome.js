export const reduxHome = {
  state: {
    num: 0,
  },
  reducers: {
    setValue(state, payload) {
      const data = {
        ...state,
      };
      // hack, 根据名字设置值
      data[payload.name] += payload.data;
      return data;
    },
  },
  effects: {
    onIncreaseClick() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.setValue({
            name: 'num',
            data: 1,
          });
          resolve(1);
        }, 200);
      });
    },
    onReduceClick() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.setValue({
            name: 'num',
            data: -1,
          });
          resolve(-1);
        }, 200);
      });
    },
  },
};
