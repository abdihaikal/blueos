ferret.module('blueos.rest.file', function (require, exports, module) {
  // function get(name, cb) {
  //     $.ajax({
  //         type: 'get',
  //         url: 'rest/app',
  //         dataType: 'json',
  //         data: { name: name },
  //         success: function (data) {
  //             cb(data);
  //         },
  //         error: function () {
  //             throw "request app failed: " + name;
  //         }
  //     });
  // }

  function query(data, cb) {
    $.ajax({
      type: 'get',
      url: 'rest/file',
      dataType: 'json',
      success: function (data) {
        cb(data);
      },
      error: function () {
        cb([]);
      }
    });
  }

  exports.get = query;
  exports.query = query;
});