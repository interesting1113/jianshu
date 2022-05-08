import { fromJS, set } from 'immutable';
import { act } from 'react-dom/test-utils';
import * as constants from './constants';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
    case constants.ADD_HOME_LIST:nextPage
      return state.merge({
        'articleList': state.set('articleList', state.get('articleList').concat(action.list)),
        'articlePage': nextPage
      }) 
    default:
      return state;
  }
}