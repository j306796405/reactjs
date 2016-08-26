import React from 'react'
import Header from './../../../components/Header'
import classes from './HomeView.scss'

export default class HomeView extends Component {

  renderLoading () {
    return (this.props.tasks.fetching)
      ? <div className={classes.loader}><Loader color='#26A65B' /></div>
      : ''
  }

  render () {
    const { fetchTasks, datas } = this.props
    const { fetching, tasks } = datas

    return (
      <div>
        <div>
          <button className='btn btn-default' onClick={fetchTasks}>
            {fetching ? 'Fetching...' : 'Fetch'}
          </button>
        </div>
        {this.renderLoading()}
      </div>
    )
  }
}
