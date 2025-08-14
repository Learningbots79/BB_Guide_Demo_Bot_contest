module.exports = function(bot, chatId, user) {
  const firstName = user?.first_name || "there";
  const message = `<b>👋 Hey ${firstName}!
Welcome to Bot Business Guide Bot......
❓ Are you an old user of our platform http://Bots.business or new to proceed further?

Wanna try a few of our bots on our platform? Type /getbot</b>`;

  const options = {
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [
          { text: "🎀 New User", callback_data: "/newuser" },
          { text: "🎀 Old User", callback_data: "/olduser" }
        ],
        [{ text: "🔒 Not Used Yet [🤔 Thinking]", callback_data: "notused" }]
      ]
    }
  };

  bot.sendMessage(chatId, message, options);
};
