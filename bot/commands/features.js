module.exports = (bot, chatId, user) => {
  const message = `*😎 Bot.Business App – Key Features*\n\n` +
    `*⏭️ Telegram Bot Creation*\n` +
    `Build your own bot either via mobile app or the web interface. It’s designed for easy use.\n\n` +
    `*⏭️ Bot Store Access*\n` +
    `Browse and install a variety of pre-built bots from the platform’s Bot Store—whether it's for referral tracking, chatting with users, and more.\n\n` +
    `*⏭️ Programmable Logic with Bot JavaScript (BJS)*\n` +
    `Employ BJS to define custom logic and scenarios—think of it as JavaScript minus setTimeout and setInterval.\n\n` +
    `*⏭️ Google Sheets / CSV Import*\n` +
    `Define your bot’s commands in a spreadsheet (like Google Sheets), publish it as CSV, and import it to automatically generate commands.\n\n` +
    `*⏭️ GitHub Sync*\n` +
    `Easily export or import bot code to/from Git repositories like GitHub for version control.\n\n` +
    `*⏭️ Cross-Platform Accessibility*\n` +
    `Use it on both desktop and mobile, providing flexibility and editing convenience.\n\n` +
    `*⏭️ Cloud-based Performance*\n` +
    `The bot runs in the cloud—always on and not tied to your local device.\n\n` +
    `*⏭️ Scalable Pricing Plans*\n` +
    `Offers plans ranging from free (with ads or limited iterations) to paid tiers supporting millions of interactions—suitable for growing usage needs.`;

  const options = {
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [{ text: "Learning BJS Coding [Basics]", callback_data: "menu" }]
      ]
    }
  };

  bot.sendMessage(chatId, message, options);
};
