// broadcast.js
module.exports = async (bot, chatId, user, msg) => {
  const admin_id = "5016109398"; // Replace with your Telegram ID

  if (user.id.toString() !== admin_id.toString()) {
    return bot.sendMessage(chatId, "🚫 Only admin can use it.");
  }

  // Get text from command or reply
  let textToBroadcast = "";
  if (msg.reply_to_message) {
    textToBroadcast = msg.reply_to_message.text || "📢 Broadcast message";
  } else {
    const args = msg.text.split(" ").slice(1); // remove /broadcast
    if (!args.length) {
      return bot.sendMessage(chatId, "╰┈➤ Please reply to a message or type /broadcast <text> to send.");
    }
    textToBroadcast = args.join(" ");
  }

  // Example: list of user IDs to broadcast
  const usersToBroadcast = Bot.getProperty("users_list") || []; // array of chat IDs

  if (!usersToBroadcast.length) {
    return bot.sendMessage(chatId, "❌ No users to broadcast to.");
  }

  // Send to all users
  let sentCount = 0;
  for (const id of usersToBroadcast) {
    try {
      await bot.sendMessage(id, textToBroadcast, {
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [{ text: "✨ Check Here", url: "https://example.com" }]
          ]
        }
      });
      sentCount++;
    } catch (e) {
      console.error("Failed to send to", id, e.message);
    }
  }

  bot.sendMessage(chatId, `✅ Broadcast sent to ${sentCount}/${usersToBroadcast.length} users.`);
};

// Optional: handle inline buttons
module.exports.handleButton = (bot) => {
  bot.on("callback_query", (query) => {
    if (query.data === "broadcast_next") {
      bot.sendMessage(query.from.id, "Next broadcast triggered!");
      bot.answerCallbackQuery(query.id);
    }
  });
};
