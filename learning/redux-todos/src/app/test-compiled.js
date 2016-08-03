"use strict";

var _console;

/**
 * FileName test
 * Date 2016-07-01
 * Created by jianglinj
 */
// good
function divide(a, b) {
  var _ref = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  var _ref$option = _ref.option;
  var option = _ref$option === undefined ? false : _ref$option;

  console.log(a);
  console.log(b);
  console.log(option);
}

divide(1, 2, { option: true });

var someArray = ["a", "b", "c"];

(_console = console).log.apply(_console, someArray);

//# sourceMappingURL=test-compiled.js.map