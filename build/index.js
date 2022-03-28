"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.listen(3000);
app.get('/', function (req, res) {
  res.send('Server working!!');
});
console.log('Server listen on port', 3000);