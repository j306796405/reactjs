/**
 * Created by linjie.jiang on 17/1/24.
 */
import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class TabContent extends Component {
    static propTypes = {
        classPrefix: React.PropTypes.string,
        panels: PropTypes.node,
        activeIndex: PropTypes.number,
        isActive: PropTypes.bool,
    };

    //isActive并没有用到
    getTabPanes(){
        const { classPrefix, activeIndex, panels } = this.props;

        return React.Children.map(panels, (child) => {
            if (!child) { return; }

            const order = parseInt(child.props.order, 10);
            const isActive = activeIndex === order;

            return React.cloneElement(child, {
                classPrefix,
                isActive,
                children: child.props.children,
                key: `tabpane-${order}`
            })
        })
    }

    render() {
        const { classPrefix } = this.props;

        const classes = classnames({
            [`${classPrefix}-content`]: true,
        });

        return (
            <div className={classes}>
                {this.getTabPanes()}
            </div>
        );
    }
}

export default TabContent;