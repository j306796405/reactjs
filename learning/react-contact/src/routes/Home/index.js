import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: '/',
  getComponent (nextState, cb) {
    const Home = require('./containers/HomeContainer').default
    const reducer = require('./modules/home').default
    injectReducer(store, { key: 'tasks', reducer })
    cb(null, Home)
  },
  component: HomeView
})
