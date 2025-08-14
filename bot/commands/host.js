module.exports = (bot, chatId, user) => {
  bot.sendMessage(chatId, 
    `<b>🚀 Why You Should Try Bots.Business</b>\n\n` +
    `1️⃣ <b>Runs 24/7 in the Cloud</b> – No hosting or server setup needed, your bot is always online.\n` +
    `2️⃣ <b>Built for JavaScript</b> – Use BJS (Bot JavaScript) with features tailored for bot development.\n` +
    `3️⃣ <b>Huge Library of Ready Features</b> – Add payments, referrals, leaderboards, and more instantly.\n` +
    `4️⃣ <b>Multiple Payment Options</b> – Accept cards, PayPal, and even cryptocurrency with ease.\n` +
    `5️⃣ <b>Easy API & Webhook Integration</b> – Connect your bot to almost any service or tool.\n` +
    `6️⃣ <b>Scales With Your Idea</b> – Start small, then grow to a full-scale business solution.\n` +
    `7️⃣ <b>Beginner-Friendly</b> – Simple commands let you start without coding experience.\n` +
    `8️⃣ <b>Pro-Developer Ready</b> – Full customization for advanced bot builders.\n` +
    `9️⃣ <b>Automated User Growth</b> – Built-in referral tools help you attract more users.\n` +
    `🔟 <b>No Technical Hassles</b> – Bots.Business handles hosting, updates, and reliability.\n` +
    `1️⃣1️⃣ <b>Flexible Monetization</b> – Offer subscriptions, one-time purchases, or premium features.\n` +
    `1️⃣2️⃣ <b>Perfect for Everyone</b> – Entrepreneurs, educators, community managers, or hobbyists.\n` +
    `1️⃣3️⃣ <b>Fast Development</b> – Launch and improve your bot quickly without delays.\n` +
    `1️⃣4️⃣ <b>Active and Supported</b> – Tools, documentation, and examples to help you succeed.\n` +
    `1️⃣5️⃣ <b>Start Today</b> – Build at Bots.Business and bring your idea to life.`,
    {
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_markup: {
        inline_keyboard: [
          [
            { text: "✨ Login Or Register", url: "http://app.bots.business" }
          ],
          [
            { text: "✨ App Details Help", url: "https://help.bots.business/howto" }
          ],
          [
            { text: "🔙 Back", callback_data: "start" }
          ]
        ]
      }
    }
  );
};
