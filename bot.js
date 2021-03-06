var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});
bot.on('ready', function(evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function(user, userID, channelID, message, evt) {
    // It will listen for messages that will start with `%`
    if (message.substring(0, 1) == '%') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
	    case 'help':
		bot.sendMessage({
		    to: channelID,
		    message: ' Type % before the command\r\n help\r\n buang\r\n amaw\r\n ump\r\n dukanako\r\n sleep\r\n g or game\r\n emojilist\r\n hahay\r\n wru\r\n tobmirules\r\n kate\r\n chady\r\n'
		});
	    break;
            case 'buang':
                bot.sendMessage({
                    to: channelID,
                    message: 'amaw!'
                });
   	    break;
	    case 'amaw':
		bot.sendMessage({
		    to: channelID,
		    message: 'buang!'
		});
            break;
	    case 'ump':
		bot.sendMessage({
		    to: channelID,
		    message: 'hmp!'
		});
            break;
     	    case 'dukanako':
		bot.sendMessage({
		    to: channelID,
		    message: 'sleep > ster'		    
		});
            break;
	    case 'sleep':
		bot.sendMessage({
		    to: channelID,
		    message: '<:chazzz:476321612430311464><:chazzz:476321612430311464><:chazzz:476321612430311464><:chazzz:476321612430311464><:chazzz:476321612430311464>'
		});
	    break;
	    case 'g':
		bot.sendMessage({
		    to: channelID,
		    message: '\:poop:'
		});
            break;
	    case 'game':
		bot.sendMessage({
		    to: channelID,
		    message: '\:poop:\:poop:'
		});
            break;
	    case 'emojilist':
		bot.sendMessage({
		    to: channelID,
		    message: '<:chazzz:476321612430311464><:ster_kit:476596096592904224><:jonglts:476572807631732766><:ster_jr:476593940540424213><:isyot:476575339863343108>\r\n<:dannilow:476578101246033930><:ster_chad:476295692768509954><:owyh:476597541383962625><:MT:476597541245550593><:kit:476599862553608202>\r\n<:bleh:476597541861851136><:OT:476599864726388736><:sterfu:477031740851093524><:icelicks:477322049061126170><:jrlicks:477323612177563658>'
		});
            break;
	    case 'hahay':
		bot.sendMessage({
		    to: channelID,
		    message: 'rest in rip'
		});
	    break;
	    case 'wru':
		bot.sendMessage({
		    to: channelID,
		    message: 'w3r na u, d2 na me b3stfr13nd...'
		});
	    break;
	    case 'tobmirules':
		bot.sendMessage({
		    to: channelID,
		    message: '"Do not tobmilas others if you don\'t want others to tobmilas you."\r\n -Chad Y.'
		});
	    break;
	    case 'kate':
		bot.sendMessage({
		    to: channelID,
		    message: 'WOW > Ster \:poop:'
		});
	    break;
	    case 'chady':
		bot.sendMessage({
		    to: channelID,
		    message: 'reasons.co.qa/hahay.html'
		});
	    break;
	    default:
		bot.sendMessage({
		    to: channelID,
		    message: 'ayaw pataka suwat ug command dira!'
		});
         }
     }
});
