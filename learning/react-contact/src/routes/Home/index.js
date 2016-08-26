import {injectReducer} from '../../store/reducers'

export default (store) => {
  return function (partialNextState, cb) {
    require.ensure([], (require) => {
      const Home = require('./containers/HomeContainer').default
      const reducer = require('./modules/home').default
      injectReducer(store, {key: 'tasks', reducer})
      // cb(null, Home);
      cb(null, {
        getComponent(loc, callback) {
          callback(null, Home)
        }
      }) 
    })
  }
}

/*
import HomeView from './components/HomeView'

// Sync route definition
export default {
  component: HomeView
}
*/
