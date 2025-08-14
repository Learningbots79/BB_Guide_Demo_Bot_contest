module.exports = (bot, chatId, user) => {
  const firstName = user?.first_name || "there";

  const message = `<b>👋 Hey : ${firstName}
✔️ As You Are Using Our Platform From Past......
🤯 Attempt Our Quiz Service If You Fail Then Try Out A Basic Learning Mode</b>`;

  const options = {
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [
          { text: "💥 Try Bb Quiz With Solutions", callback_data: "startquiz" },
          { text: "🛑 Basic Learning Mode With Codes", callback_data: "menu" }
        ],
        [
          { text: "♥️ Getting Errors Use Ai Gpt", callback_data: "/ai" }
        ]
      ]
    }
  };

  bot.sendMessage(chatId, message, options);
};
