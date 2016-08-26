import { connect } from 'react-redux'
import { fetchTasks } from './../modules/home'

import HomeView from '../components/HomeView'

const mapDispatchtoProps = {
  fetchTasks
}

const mapStateToProps = (state) => ({
  tasks: state.tasks
})

export default connect(mapStateToProps, mapDispatchtoProps)(HomeView)
