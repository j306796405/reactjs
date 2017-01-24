/**
 * Created by linjie.jiang on 17/1/24.
 */
import React, { Component, PropTypes } from 'react';
import '../css/style.scss';
import classnames from 'classnames';
import TabNav from './TabNav'
import TabContent from './TabContent'


class Tabs extends Component{
    static propTypes = {
        className: PropTypes.string,
        classPrefix: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]),
        defaultActiveIndex: PropTypes.number,
        activeIndex: PropTypes.number,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        classPrefix: 'tabs',
        onChange: () => {},
    };

    constructor(props) {
        super(props);

        const currProps = this.props;

        this.handleTabClick = this.handleTabClick.bind(this);

        let activeIndex;
        if ('activeIndex' in currProps) {
            activeIndex = currProps.activeIndex;
        } else if ('defaultActiveIndex' in currProps) {
            activeIndex = currProps.defaultActiveIndex;
        }

        this.state = {
            activeIndex,
            prevIndex: activeIndex,
        };
    }

    componentWillReceiveProps(nextProps){
        if('activeIndex' in nextProps){
            this.setState({
                activeIndex: nextProps.activeIndex
            })
        }
    }

    //在此处创建该方法用于传递更新
    handleTabClick(activeIndex){
        const prevIndex = this.state.activeIndex;

        if (prevIndex !== activeIndex &&
            'defaultActiveIndex' in this.props) {
            this.setState({
                activeIndex,
                prevIndex,
            });

            this.props.onChange({ activeIndex, prevIndex });
        }
    }

    renderTabNav() {
        const {classPrefix, children} = this.props;

        return (
            <TabNav
                key="tabBar"
                classPrefix={classPrefix}
                onTabClick={this.handleTabClick}
                panels={children}
                activeIndex={this.state.activeIndex}
            />
        )
    }

    renderTabContent() {
        const { classPrefix, children } = this.props;

        return (
            <TabContent
                key="tabcontent"
                classPrefix={classPrefix}
                activeIndex={this.state.activeIndex}
                panels={children}
            />
        );
    }

    render(){
        const { className } = this.props;
        const cx = classnames(className, 'ui-tabs');

        return (
            <div className={cx}>
                {this.renderTabNav()}
                {this.renderTabContent()}
            </div>
        )
    }
}

export default Tabs;