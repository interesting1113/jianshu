import { fromJS, set } from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1
  }]
});

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}