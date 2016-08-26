import React, {Component} from 'react'
import Header from './../../../components/Header'
import classes from './HomeView.scss'

export default class HomeView extends Component {

  renderLoading() {
    return (this.props.tasks.fetching)
      ? <div className={classes.loader}><Loader color='#26A65B'/></div>
      : ''
  }

  componentDidMount() {
    const {fetchTasks, tasks} = this.props;
    fetchTasks();
  } 

  render() {
    const {fetchTasks, tasks} = this.props;
    const {fetching, datas} = tasks

    return (
      <div className="c-wrap">
        <Header />
        <div className="list-block">
          <div className="list-group">
            <ul>
              <li className="h2">First group</li>
              {datas.map((item, index) => {
                return (
                  <li className="issue" key={item.id}>
                    <a href="#" className="item-link">
                      <div className="item-content">
                        <div className="item-inner">
                          <div className="item-title-row">
                            <div className="item-title title">{item.title}</div>
                          </div>
                          <div className="description">{item.desc}</div>
                        </div>
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        {/*{this.renderLoading()}*/}
      </div>
    )
  }
}
