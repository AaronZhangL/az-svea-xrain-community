const configFile = './config/config.json';
module.exports = {
	getConfigData: function() {
		var config = require(configFile)[process.env.NODE_ENV];
		return config;
	}
};
