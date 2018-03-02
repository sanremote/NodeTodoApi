var configValues = require('./config');

module.exports = {

    getDbConnectString: function () {
        return `mongodb://${configValues.uname}:${configValues.pwd}@ds251598.mlab.com:51598/nodetodosample`;
    }

}
