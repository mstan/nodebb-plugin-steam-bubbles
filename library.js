var	fs = require('fs'),
	nconf = require('nconf'),
	user = require('../../src/user');
	

var steamBubbles = {};


steamBubbles.init = function(params, callback) {

	callback();
};


steamBubbles.addProfileInfo = function(profileInfo, callback) {

	user.getUserField(profileInfo.uid, 'int-steam-id', function(err, data) {
		profileInfo.profile.push({
			content: '<span><small>' + '<a href="http://www.steamcommunity.com/profiles/'  + data + '">' + '<img src="' + nconf.get('url') + '/plugins/nodebb-plugin-steam-bubbles/static/steam-icon.png"' + ' title="' + data + '" width="15" height="15" />' + '</a>' + '</small></span>'
		},
		{
			content: '<span><small>' + '<a href="steam://friends/message/' + data + '">' + '<img src="' + nconf.get('url') + '/plugins/nodebb-plugin-steam-bubbles/static/chat-bubble-icon.jpg"'  +  ' height="15" width="15" />' + '</a>' + '</small></span>'
		});
		callback(err, profileInfo);
	});		
};


module.exports = steamBubbles;
