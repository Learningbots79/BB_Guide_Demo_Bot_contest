module.exports = (bot, chatId, user) => {
  bot.sendMessage(chatId, "<b>Watch Out First Dude 😎</b>", {
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [
          { text: "✨ Tap here to Watch [1]", url: "https://youtu.be/cVho03EVxY4?si=eUAD9t_QCKtRtyUo" }
        ],
        [
          { text: "✨ Tap here to Watch [2]", url: "https://youtu.be/8H_JlTzNpro?si=CP7WKXARj-50Tmrr" }
        ],
        [
          { text: "Give it A Try, Next ⏭️", callback_data: "host" }
        ]
      ]
    }
  });
};
