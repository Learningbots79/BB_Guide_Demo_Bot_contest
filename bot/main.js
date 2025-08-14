const { BOT_TOKEN } = require("./utils");
const TelegramBot = require('node-telegram-bot-api');

// Initialize bot
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

// Import commands
const start = require("./commands/start");
const newUser = require("./commands/newUser");
const oldUser = require("./commands/oldUser");
const features = require("./commands/features");
const learn = require("./commands/learn");
const startQuiz = require("./commands/startquiz");
const ai = require("./commands/ai");
const notused = require("./commands/notused");
const host = require("./commands/host");
const broadcast = require("./commands/broadcast");



// Static commands
const commands = {
  "start": start,
  "newuser": newUser,
  "olduser": oldUser,
  "features": features,
  "learn": learn,
  "menu": learn, // Back to menu
  "startquiz": startQuiz.quiz1,
  "ai": ai,
  "host": host,
  "notused": notused,
  "broadcast": broadcast
};

// Quiz commands
for (let i = 1; i <= 30; i++) {
  commands[`quiz${i}`] = startQuiz[`quiz${i}`];
}

// Handle text messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text ? msg.text.trim().toLowerCase().replace("/", "") : '';
  const user = msg.from;

  if (commands[text]) {
    if (text.startsWith("quiz")) {
      commands[text](bot, chatId);
    } else {
      commands[text](bot, chatId, user, text);
    }
  } 
  // ✅ Auto-route to learn.js if lesson keyword
  else if (text.startsWith("bas") || text.startsWith("howto")) {
    learn(bot, chatId, user, text);
  } 
  else {
    bot.sendMessage(chatId, "❌ Command not recognized! Please use a valid command.");
  }
});

// Handle callback queries (inline button clicks)
bot.on('callback_query', (callbackQuery) => {
  const msg = callbackQuery.message;
  const chatId = msg.chat.id;
  const data = callbackQuery.data.toLowerCase().replace("/", "");
  const user = callbackQuery.from;

  try {
    if (commands[data]) {
      if (data.startsWith("quiz")) {
        commands[data](bot, chatId);
      } else {
        commands[data](bot, chatId, user, data);
      }
    } 
    // ✅ Auto-route to learn.js if lesson keyword
    else if (data.startsWith("bas") || data.startsWith("howto")) {
      learn(bot, chatId, user, data);
    }
    else {
      bot.sendMessage(chatId, "❌ Command not recognized! Please use a valid button.");
    }
  } catch (err) {
    console.error("Callback Error:", err);
    bot.sendMessage(chatId, "❌ Something went wrong with this button.");
  }

  bot.answerCallbackQuery(callbackQuery.id);
});

module.exports = bot;
