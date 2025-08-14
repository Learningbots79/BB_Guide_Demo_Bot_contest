// startquiz.js

module.exports.quiz1 = function(bot, chatId) {
  bot.sendPoll(chatId, "In Bots.Business, what does BJS stand for?", 
    ["Basic JavaScript", "Bot Java Syntax", "Bot JavaScript", "Binary JS"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 2,
      explanation: "BJS means Bot JavaScript — the scripting language for Bots.Business."
  });

  bot.sendMessage(chatId, "Click Next to continue.", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Next ➡️", callback_data: "/quiz2" }]
      ]
    }
  });
};

module.exports.quiz2 = function(bot, chatId) {
  bot.sendPoll(chatId, "Which method is used in BJS to send a text message to a user?", 
    ["bot.sendPoll()", "Bot.write()", "console.log()", "send.Text()"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "bot.sendPoll() is the correct method to send a text message in Bots.Business."
  });

  bot.sendMessage(chatId, "Click Next to continue.", {
    reply_markup: { inline_keyboard: [[{ text: "Next ➡️", callback_data: "/quiz3" }]] }
  });
};

module.exports.quiz3 = function(bot, chatId) {
  bot.sendPoll(chatId, "How do you store and retrieve variables in BB bots?", 
    ["Using Bot.saveVar() and Bot.getVar()", "Using Api.store() and Api.read()", "By writing in a text file", "You cannot store variables in BB"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "Bot.saveVar(name, value) stores a variable and Bot.getVar(name) retrieves it in Bots.Business."
  });

  bot.sendMessage(chatId, "Click Next to continue.", {
    reply_markup: { inline_keyboard: [[{ text: "Next ➡️", callback_data: "/quiz4" }]] }
  });
};

module.exports.quiz4 = function(bot, chatId) {
  bot.sendPoll(chatId, "Which of these is TRUE about BJS in Bots.Business?", 
    ["It runs asynchronously", "It is fully synchronous", "It supports await/async functions", "It only works with Node.js"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 1,
      explanation: "BJS is fully synchronous — you cannot use async/await in Bots.Business scripts."
  });

  bot.sendMessage(chatId, "Click Next to continue.", {
    reply_markup: { inline_keyboard: [[{ text: "Next ➡️", callback_data: "/quiz5" }]] }
  });
};

module.exports.quiz5 = function(bot, chatId) {
  bot.sendPoll(chatId, "How do you call another command after an API request in BB?", 
    ["Using success or on_result fields", "Using nextCommand()", "Using Bot.goTo()", "It’s not possible"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "You can use 'success' (HTTP) or 'on_result' (Api methods) to call another command after an API request."
  });

  bot.sendMessage(chatId, "Click Next to continue.", {
    reply_markup: { inline_keyboard: [[{ text: "Next ➡️", callback_data: "/quiz6" }]] }
  });
};

module.exports.quiz6 = function(bot, chatId) {
  bot.sendPoll(chatId, "Which library in BB helps you work with date and time formatting?", 
    ["datetimeformat-lib", "timelib", "momentjs", "date-utils"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "datetimeformat-lib is the library used for date and time formatting in Bots.Business."
  });

  bot.sendMessage(chatId, "Continue Next Quiz!", {
    reply_markup: { inline_keyboard: [[{ text: "Next ⏭️", callback_data: "/quiz7" }]] }
  });
};

module.exports.quiz7 = function(bot, chatId) {
  bot.sendPoll(chatId, "Which method is used to send an inline keyboard in BB?", 
    ["bot.sendPoll() with reply_markup", "Bot.inlineKeyboard()", "Api.sendKeyboard()", "Bot.sendInline()"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "You attach reply_markup to bot.sendPoll() to send an inline keyboard in Bots.Business."
  });

  bot.sendMessage(chatId, "Click Next to continue.", {
    reply_markup: { inline_keyboard: [[{ text: "Next ➡️", callback_data: "/quiz8" }]] }
  });
};

module.exports.quiz8 = function(bot, chatId) {
  bot.sendPoll(chatId, "In BB, how can you get the current user's Telegram ID?", 
    ["user.telegramid", "Api.getUserId()", "Bot.userId", "msg.userId"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "user.telegramid stores the current user’s unique Telegram ID in Bots.Business."
  });

  bot.sendMessage(chatId, "Click Next to continue.", {
    reply_markup: { inline_keyboard: [[{ text: "Next ➡️", callback_data: "/quiz9" }]] }
  });
};

// Quiz 9
module.exports.quiz9 = function(bot, chatId) {
  bot.sendPoll(chatId, "Which object is used to get the text the user sent to the bot?", 
    ["message.text", "msg.text", "content.text", "input.text"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 1,
      explanation: "msg.text contains the text that the user sent in their message."
  });

  bot.sendMessage(chatId, "Click Next to continue.", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Next ➡️", callback_data: "/quiz10" }]
      ]
    }
  });
};

// Quiz 10
module.exports.quiz10 = function(bot, chatId) {
  bot.sendPoll(chatId, "What is the correct way to call another BB command manually in your script?", 
    ["Bot.runCommand('commandName')", "Api.runCommand('commandName')", "run.command('commandName')", "nextCommand('commandName')"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "Bot.runCommand('commandName') executes another BB command from within a script."
  });

  bot.sendMessage(chatId, "Click Next to continue.", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Next ➡️", callback_data: "/quiz11" }]
      ]
    }
  });
};

// Quiz 11
module.exports.quiz11 = function(bot, chatId) {
  bot.sendPoll(chatId, "Which method is used to make HTTP GET requests in BB?", 
    ["HTTP.get()", "Api.httpGet()", "Bot.getRequest()", "net.get()"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "HTTP.get() is the correct method for making GET requests in Bots.Business."
  });

  bot.sendMessage(chatId, "Click Next to continue.", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Next ➡️", callback_data: "/quiz12" }]
      ]
    }
  });
};

// Quiz 12
module.exports.quiz12 = function(bot, chatId) {
  bot.sendPoll(chatId, "What data type is returned by Api.getUserProfilePhotos() in BB?", 
    ["Array of photos", "Object with photo info", "String URL", "Boolean"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 1,
      explanation: "Api.getUserProfilePhotos() returns an object containing photo information."
  });

  bot.sendMessage(chatId, "Click Next to continue.", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Next ➡️", callback_data: "/quiz13" }]
      ]
    }
  });
};

// Quiz 13
module.exports.quiz13 = function(bot, chatId) {
  bot.sendPoll(chatId, "Which BB feature lets you create multi-step conversations?", 
    ["Wizard", "StepCommands", "Conversation Flow", "MultiCommand"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "Wizard commands in BB enable creating multi-step guided conversations."
  });

  bot.sendMessage(chatId, "Next quiz coming up!", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Next ➡️", callback_data: "/quiz14" }]
      ]
    }
  });
};

// Quiz 14
module.exports.quiz14 = function(bot, chatId) {
  bot.sendPoll(chatId, "What is the command to delete a message in BB?", 
    ["Api.deleteMessage()", "Bot.remove()", "Api.removeMessage()", "Bot.delete()"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "Api.deleteMessage() deletes a message in Bots.Business."
  });

  bot.sendMessage(chatId, "Click Next to continue.", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Next ➡️", callback_data: "/quiz15" }]
      ]
    }
  });
};

// Quiz 15
module.exports.quiz15 = function(bot, chatId) {
  bot.sendPoll(chatId, "How do you check if a variable exists in BB script?", 
    ["if (Bot.getVar('name') !== undefined)", "if (typeof Bot.var('name') === 'defined')", "if (Bot.hasVar('name'))", "if (Bot.varExists('name'))"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "Checking if Bot.getVar('name') returns undefined is the common way to test variable existence."
  });

  bot.sendMessage(chatId, "Continue to next quiz.", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Next ➡️", callback_data: "/quiz16" }]
      ]
    }
  });
};

// Quiz 16
module.exports.quiz16 = function(bot, chatId) {
  bot.sendPoll(chatId, "Which BB method sends a photo to a user?", 
    ["Api.sendPhoto()", "Bot.sendImage()", "Api.sendMedia()", "Bot.uploadPhoto()"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "Api.sendPhoto() is used to send photos to users."
  });

  bot.sendMessage(chatId, "Keep going!", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Next ➡️", callback_data: "/quiz17" }]
      ]
    }
  });
};

// Quiz 17
module.exports.quiz17 = function(bot, chatId) {
  bot.sendPoll(chatId, "What does the 'callback_data' field represent in an inline keyboard button?", 
    ["Data sent back to bot when clicked", "Text displayed on the button", "URL to open", "Tooltip message"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "callback_data is the data sent back to the bot when the inline button is clicked."
  });

  bot.sendMessage(chatId, "Almost there!", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Next ➡️", callback_data: "/quiz18" }]
      ]
    }
  });
};

// Quiz 18
module.exports.quiz18 = function(bot, chatId) {
  bot.sendPoll(chatId, "In BB, which command can you use to stop the current script execution?", 
    ["Bot.exit()", "Bot.stop()", "Api.abort()", "Bot.end()"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "Bot.exit() stops the execution of the current BB script."
  });

  bot.sendMessage(chatId, "You’re doing great!", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Next ➡️", callback_data: "/quiz19" }]
      ]
    }
  });
};

// Quiz 19
module.exports.quiz19 = function(bot, chatId) {
  bot.sendPoll(chatId, "Which of these is NOT a valid message type in BB?", 
    ["Audio note", "Photo", "Text", "Sticker"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "Audio note is not a standard message type in Bots.Business."
  });

  bot.sendMessage(chatId, "Almost done!", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Next ➡️", callback_data: "/quiz20" }]
      ]
    }
  });
};

// Quiz 20
module.exports.quiz20 = function(bot, chatId) {
  bot.sendPoll(chatId, "How do you send a chat action like 'typing' in BB?", 
    ["Api.sendChatAction()", "Bot.chatAction()", "Api.typing()", "Bot.sendAction()"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "Api.sendChatAction() sends chat actions like 'typing' in Bots.Business."
  });

  bot.sendMessage(chatId, "Last few quizzes!", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Next ➡️", callback_data: "/quiz21" }]
      ]
    }
  });
};

// Quiz 21
module.exports.quiz21 = function(bot, chatId) {
  bot.sendPoll(chatId, "What is the correct way to log a message to the console in BB?",
    ["console.log()", "Bot.log()", "Api.debug()", "print()"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "console.log() outputs messages to the console in Bots.Business."
  });

  bot.sendMessage(chatId, "Keep it up!", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Next ➡️", callback_data: "/quiz22" }]
      ]
    }
  });
};

// Quiz 22
module.exports.quiz22 = function(bot, chatId) {
  bot.sendPoll(chatId, "How do you get the username of the current user in BB?",
    ["user.username", "Api.getUsername()", "Bot.username", "msg.username"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "user.username holds the current user's username."
  });

  bot.sendMessage(chatId, "Almost there!", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Next ➡️", callback_data: "/quiz23" }]
      ]
    }
  });
};

// Quiz 23
module.exports.quiz23 = function(bot, chatId) {
  bot.sendPoll(chatId, "Which BB method can be used to edit a sent message?",
    ["Api.editMessageText()", "Bot.update()", "Api.modifyMessage()", "Bot.edit()"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "Api.editMessageText() edits a message that was already sent."
  });

  bot.sendMessage(chatId, "Keep going!", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Next ➡️", callback_data: "/quiz24" }]
      ]
    }
  });
};

// Quiz 24
module.exports.quiz24 = function(bot, chatId) {
  bot.sendPoll(chatId, "In BB, which event triggers when a user presses an inline button?",
    ["callback_query", "button_press", "inline_click", "button_pressed"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "callback_query event fires when an inline button is pressed."
  });

  bot.sendMessage(chatId, "Almost finished!", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Next ➡️", callback_data: "/quiz25" }]
      ]
    }
  });
};

// Quiz 25
module.exports.quiz25 = function(bot, chatId) {
  bot.sendPoll(chatId, "Which BB method allows you to send location data?",
    ["Api.sendLocation()", "Bot.sendGeo()", "Api.locationSend()", "Bot.location()"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "Api.sendLocation() is used to send location data in Bots.Business."
  });

  bot.sendMessage(chatId, "Last two quizzes!", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Next ➡️", callback_data: "/quiz26" }]
      ]
    }
  });
};

// Quiz 26
module.exports.quiz26 = function(bot, chatId) {
  bot.sendPoll(chatId, "What type of data does Api.getMe() return?",
    ["Bot info object", "User ID string", "Boolean status", "String username"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "Api.getMe() returns information about the bot."
  });

  bot.sendMessage(chatId, "Penultimate quiz!", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Next ➡️", callback_data: "/quiz27" }]
      ]
    }
  });
};

// Quiz 27
module.exports.quiz27 = function(bot, chatId) {
  bot.sendPoll(chatId, "Which BB command sends a sticker to a user?",
    ["Api.sendSticker()", "Bot.stickerSend()", "Api.sendImage()", "Bot.sendSticker()"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "Api.sendSticker() sends a sticker to a user."
  });

  bot.sendMessage(chatId, "Almost done!", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Next ➡️", callback_data: "/quiz28" }]
      ]
    }
  });
};

// Quiz 28
module.exports.quiz28 = function(bot, chatId) {
  bot.sendPoll(chatId, "In BB, which object stores the entire message data from the user?",
    ["msg", "message", "input", "content"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "The 'msg' object contains the entire message data from the user."
  });

  bot.sendMessage(chatId, "One last quiz!", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Next ➡️", callback_data: "/quiz29" }]
      ]
    }
  });
};

// Quiz 29
module.exports.quiz29 = function(bot, chatId) {
  bot.sendPoll(chatId, "Which BB method would you use to stop sending notifications for a message?",
    ["Api.disableNotification()", "Bot.muteNotification()", "Api.noNotify()", "Bot.silence()"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "Api.disableNotification() stops notifications for a sent message."
  });

  bot.sendMessage(chatId, "Final quiz next!", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Next ➡️", callback_data: "/quiz30" }]
      ]
    }
  });
};

// Quiz 30
module.exports.quiz30 = function(bot, chatId) {
  bot.sendPoll(chatId, "What is the correct way to send a poll in BB?",
    ["bot.sendPoll()", "Bot.pollSend()", "Api.pollCreate()", "Bot.sendPoll()"], {
      is_anonymous: false,
      type: "quiz",
      correct_option_id: 0,
      explanation: "bot.sendPoll() sends a poll to the user in Bots.Business."
  });

  bot.sendMessage(chatId, "You have completed all quizzes! 🎉", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Restart Quiz", callback_data: "/quiz1" }]
      ]
    }
  });
};
