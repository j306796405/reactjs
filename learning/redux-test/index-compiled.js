'use strict';

var _actions = require('./actions');

// 打印初始状态
console.log(store.getState());

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
var unsubscribe = store.subscribe(function () {
    return console.log(store.getState());
});

// 发起一系列 action
store.dispatch((0, _actions.addTodo)('Learn about actions'));
store.dispatch((0, _actions.addTodo)('Learn about reducers'));
store.dispatch((0, _actions.addTodo)('Learn about store'));
store.dispatch((0, _actions.toggleTodo)(0));
store.dispatch((0, _actions.toggleTodo)(1));
store.dispatch((0, _actions.setVisibilityFilter)(_actions.VisibilityFilters.SHOW_COMPLETED));

// 停止监听 state 更新
unsubscribe();

//# sourceMappingURL=index-compiled.js.map