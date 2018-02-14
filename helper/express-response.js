
var { response } = require('express');
response.makeJson = function(obj, code) {
  if (obj instanceof Error) {
    this.json({
      success: false,
      code: 500,
      errDesc: obj.message
    })
  } else {
    this.json({
      success: true,
      code: code || 200,
      data: obj
    })
  }
}
