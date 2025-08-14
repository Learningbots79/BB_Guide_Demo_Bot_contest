module.exports = (bot, chatId, user) => {
  const firstName = user?.first_name || "there";

  const message = `<b>🆕 Hey ${firstName}!
👀 View Our Just A Demo Bot Made By A Normal BB [Bots.business] User: @BbReferralEarnBot</b>`;

  const options = {
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [{ text: "BB Top Features", callback_data: "/features" }],
        [{ text: "🛑 GitHub Repo", url: "https://github.com/bots-business/BbReferralEarnBot" }]
      ]
    }
  };

  bot.sendMessage(chatId, message, options);
};
