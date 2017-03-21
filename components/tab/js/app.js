/**
 * Created by linjie.jiang on 17/1/24.
 */
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Tabs from './Tabs'
import TabPane from './TabPane'
import QrCode from './QrCode'

// class App extends Component {
//     constructor(props) {
//         super(props);
//
//         this.handleChange = this.handleChange.bind(this);
//
//         this.state = {
//             activeIndex: 0,
//         };
//     }
//
//     static defaultProps = {
//         color: 'blue',
//         text: 'Confirm'
//     }
//
//     handleChange(e) {
//         this.setState({
//             activeIndex: parseInt(e.target.value, 10),
//         });
//     }
//
//     render() {
//
//         return (
//             <div>
//                 <div className="operator">
//                     <span>切换 Tab：</span>
//                     <select value={this.state.activeIndex} onChange={this.handleChange}>
//                         <option value={0}>Tab 1</option>
//                         <option value={1}>Tab 2</option>
//                         <option value={2}>Tab 3</option>
//                     </select>
//                 </div>
//
//                 <Tabs
//                     defaultActiveIndex={this.state.activeIndex}
//                     className="tabs-bar"
//                     onChange={function(activeIndex, prevIndex){
//                         console.log(activeIndex, prevIndex);
//                     }}
//                 >
//                     <TabPane order="0" tab={'Tab 1'}>第一个 Tab 里的内容</TabPane>
//                     <TabPane order="1" tab={'Tab 2'}>第二个 Tab 里的内容</TabPane>
//                     <TabPane order="2" tab={'Tab 3'}>第三个 Tab 里的内容</TabPane>
//                 </Tabs>
//
//                 <QrCode />
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(<App />, document.getElementById('root'));

class ListItem extends Component {
    static defaultProps = {
        text: '',
        checked: false
    }

    render() {
        return (
            <li>
                <input type="checkbox" checked={this.props.checked}
                       onChange={this.props.onChange}
                />
                <span>{this.props.value}</span>
            </li>
        )
    }
}

class List extends Component {
    static defaultProps = {
        list: [],
        handleItemChange: () => {
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            list: this.props.list.map(entry => (
                {
                    text: entry.text,
                    checked: entry.checked
                }
            ))
        }
    }

    onItemChange(entry) {
        const {list} = this.state;

        this.setState({
            list: list.map(prevEntry => ({
                text: prevEntry.text,
                checked: prevEntry.text === entry.text ?
                    !prevEntry.checked : prevEntry.checked
            }))
        }, function(){
            console.log(this.state);
        })

        this.props.handleClick(entry);
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((entry, index) => (
                            <ListItem
                                key = {`list-${index}`}
                                value={entry.text}
                                checked={entry.checked}
                                onChange={this.onItemChange.bind(this, entry)}
                            />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props);

        this.handleItemChange = this.handleItemChange.bind(this);
    }

    handleItemChange(item){
        // console.log(item);
    }

    render() {

        return (
            <List
                list={[{
                    text: 1
                }, {
                    text: 2
                }]}

                handleItemChange={this.handleItemChange}
            />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));