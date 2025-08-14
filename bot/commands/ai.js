module.exports = (bot, chatId, user, data) => {
  const message = `*➡️ You can try BB AI on Chat GPT,\n\n⛓ Link:- https://chat.openai.com/g/g-mW7CZYp2i-bb-ai-help\n🧑‍💻 Now Improve Your Coding. \n\n❤️ Thanks To:- @BotsBusinessAdmin\n☣ Posted By:- @Swastik_Raj*`;

  bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
};
