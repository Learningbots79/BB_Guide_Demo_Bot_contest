module.exports = (bot, chatId, user, data) => {
  const showMainMenu = () => {
    bot.sendMessage(
      chatId,
      "<b>❓ To Get Basic BJS Codes.. Tap Following Buttons or Type Bas, Bas2, Bas3, Bas4, Bas5</b>",
      {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        reply_markup: {
          inline_keyboard: [
            [{ text: "👋🏻 Set Of BB Codes Part 1", callback_data: "bas" }],
            [{ text: "👋🏻 Set Of BB Codes Part 2", callback_data: "bas2" }],
            [{ text: "👋🏻 Set Of BB Codes Part 3", callback_data: "bas3" }],
            [{ text: "👋🏻 Set Of BB Codes Part 4", callback_data: "bas4" }],
            [{ text: "👋🏻 Set Of BB Codes Part 5", callback_data: "bas5" }],
            [{ text: "❤️ Get Bots.business GPT AI", callback_data: "ai" }],
            [{ text: "🛑 How To Get Bot Token", callback_data: "howtobottoken" }]
          ]
        }
      }
    );
  };

  const snippets = {
    bas: {
      text: `🛠 *Bots.Business Basic Codes Cheat Sheet*
Think of this as your BB survival kit — the 'must-know' codes to get things done.
No async, no fancy stuff — just working basics.

1️⃣ *Send a Message*
📢 Say something to the user.
\`\`\`
Bot.sendMessage("Hello! Welcome to my bot 🤖");
\`\`\`

2️⃣ *Send a Keyboard*
🎯 Let users choose buttons instead of typing.
\`\`\`
Bot.sendKeyboard(
  "Option 1, Option 2",
  "Choose one:"
);
\`\`\`

3️⃣ *Send an Inline Keyboard*
🔗 Clickable buttons under your message.
\`\`\`
Api.sendMessage({
  text: "Click a button:",
  reply_markup: {
    inline_keyboard: [
      [{ text: "Google", url: "https://google.com" }],
      [{ text: "Next", callback_data: "next_step" }]
    ]
  }
});
\`\`\`

4️⃣ *Save Data*
💾 Remember something about the user.
\`\`\`
User.setProperty("name", "Alex", "string");
\`\`\`

5️⃣ *Get Saved Data*
📂 Read what you saved before.
\`\`\`
let name = User.getProperty("name");
Bot.sendMessage("Your name is: " + name);
\`\`\`

6️⃣ *Conditional Check*
⚖️ Do something only if a condition is true.
\`\`\`
let coins = User.getProperty("coins");
if (coins >= 10) {
  Bot.sendMessage("You have enough coins!");
} else {
  Bot.sendMessage("Not enough coins 😢");
}
\`\`\`

7️⃣ *Call Another Command*
📞 Jump to another bot command.
\`\`\`
Bot.runCommand("/start");
\`\`\`

8️⃣ *Work with Variables*
🧮 Store something temporarily.
\`\`\`
let score = 5;
score = score + 1;
Bot.sendMessage("Score: " + score);
\`\`\`

9️⃣ *Send a Photo*
📷 Share an image.
\`\`\`
Api.sendPhoto({
  photo: "https://example.com/photo.jpg",
  caption: "Nice view!"
});
\`\`\`

🔟 *HTTP Request (Get Data from Web)*
🌐 Fetch something from the internet.
\`\`\`
HTTP.get({
  url: "https://api.example.com/data",
  success: "/onSuccess",
  error: "/onError"
});
\`\`\``,
      parse: "Markdown"
    },

    bas2: {
      text: `🚀 *BB Basic Codes – Part 2*

11️⃣ *Store a List*
\`\`\`
let list = User.getProperty("myList");
if (!list) list = [];
list.push("New Item");
User.setProperty("myList", list, "json");
Bot.sendMessage("Item added!");
\`\`\`

12️⃣ *Show a List*
\`\`\`
let list = User.getProperty("myList");
if (list && list.length > 0) {
  Bot.sendMessage("Your list:\\n" + list.join("\\n"));
} else {
  Bot.sendMessage("Your list is empty.");
}
\`\`\`

13️⃣ *Cooldown (Delay Between Actions)*
\`\`\`
let cooldown = Libs.CooldownLib;
if (cooldown.isInCooldown("myAction", 60)) {
  Bot.sendMessage("⏳ Wait before doing this again!");
  return;
}
cooldown.setCooldown("myAction", 60);
Bot.sendMessage("✅ Action done!");
\`\`\`

14️⃣ *Leaderboard (Top Scores)*
\`\`\`
Libs.TopBoardLib.addUser({
  name: user.first_name,
  score: 50,
  board: "scores"
});
let top = Libs.TopBoardLib.getTopList("scores", 10);
Bot.sendMessage("🏆 Top Players:\\n" + top);
\`\`\`

15️⃣ *Random Pick*
\`\`\`
let items = ["Apple", "Banana", "Cherry"];
let choice = Libs.Random.randomOneFrom(items);
Bot.sendMessage("You got: " + choice);
\`\`\`

16️⃣ *Basic Payment*
\`\`\`
Libs.CoinPayments.createTransaction({
  currency1: "USD",
  currency2: "BTC",
  amount: 5,
  success: "/onPaymentSuccess"
});
\`\`\`

17️⃣ *Run After Delay*
\`\`\`
Bot.run({
  command: "/reminder",
  run_after: 3600,
  options: { text: "Drink water!" }
});
\`\`\`

18️⃣ *Handle Callback Data*
\`\`\`
if (request.data == "next_step") {
  Bot.sendMessage("You clicked Next!");
}
\`\`\``,
      parse: "Markdown"
    },

    bas3: {
      text: `🧠 *BB Basic Codes – Part 3*

19️⃣ *Track New Users*
\`\`\`
if (!User.getProperty("started")) {
  User.setProperty("started", true, "boolean");
  Bot.sendMessage("👋 Welcome! You are now registered.");
}
\`\`\`

20️⃣ *Save and Use Global Data*
\`\`\`
Bot.setProperty("totalUsers", 100, "integer");
let total = Bot.getProperty("totalUsers");
Bot.sendMessage("Total users: " + total);
\`\`\`

21️⃣ *Language Support*
\`\`\`
Libs.Lang.add({
  en: { hello: "Hello!" },
  es: { hello: "¡Hola!" }
});
Bot.sendMessage(Libs.Lang.t("hello"));
\`\`\`

22️⃣ *Guard Commands (Access Control)*
\`\`\`
Libs.GuardLib.onlyBotAdmins();
Bot.sendMessage("You are an admin!");
\`\`\`

23️⃣ *Date and Time Formatting*
\`\`\`
let date = new Date();
let formatted = Libs.DateTimeFormat.format(date, "dd/mm/yyyy HH:MM");
Bot.sendMessage("Current time: " + formatted);
\`\`\`

24️⃣ *Referral System*
\`\`\`
Libs.ReferralLib.currentUser.track({
  onA: "/onReferrerJoined"
});
\`\`\`

25️⃣ *Google Sheet Logging*
\`\`\`
Libs.GoogleTableSync.writeRow({
  sheet_name: "Logs",
  values: [user.telegramid, "Joined", Date.now()]
});
\`\`\`

26️⃣ *Webhook Listener*
\`\`\`
Libs.WebhooksLib.addWebhook({
  name: "myWebhook",
  url: "https://example.com/hook"
});
\`\`\`

27️⃣ *Encrypt & Decrypt Data*
\`\`\`
let encrypted = Libs.CryptoJS.encrypt("secret123", "password");
let decrypted = Libs.CryptoJS.decrypt(encrypted, "password");
Bot.sendMessage("Decrypted: " + decrypted);
\`\`\``,
      parse: "Markdown"
    },

    bas4: {
      text: `🎯 *BB Basic Codes – Part 4: Mini Projects*

28️⃣ *Simple Quiz Bot*
\`\`\`
// /start command
Bot.sendMessage("What is 2 + 2?");
Bot.runCommand("/checkAnswer");

// /checkAnswer command
if (message == "4") {
  Bot.sendMessage("✅ Correct!");
} else {
  Bot.sendMessage("❌ Wrong! The answer was 4.");
\`\`\`

29️⃣ *Shop Bot (Virtual Items)*
\`\`\`
// /buy command
let coins = User.getProperty("coins") || 0;
if (coins >= 10) {
  coins -= 10;
  User.setProperty("coins", coins, "integer");
  Bot.sendMessage("🎁 You bought an item!");
} else {
  Bot.sendMessage("Not enough coins. You need 10.");
\`\`\`

30️⃣ *Referral Reward Bot*
\`\`\`
// /start command
let referrer = Libs.ReferralLib.currentUser.referrer;
if (referrer) {
  let coins = referrer.getProperty("coins") || 0;
  coins += 5;
  referrer.setProperty("coins", coins, "integer");
  Bot.sendMessageToChatWithId(referrer.telegramid, "🎉 You got 5 coins from referral!");
\`\`\`

31️⃣ *Daily Reward Bot*
\`\`\`
let cooldown = Libs.CooldownLib;
if (cooldown.isInCooldown("daily", 86400)) {
  Bot.sendMessage("⏳ Come back tomorrow!");
} else {
  cooldown.setCooldown("daily", 86400);
  let coins = User.getProperty("coins") || 0;
  coins += 5;
  User.setProperty("coins", coins, "integer");
  Bot.sendMessage("✅ You claimed 5 coins!");
\`\`\`

32️⃣ *Feedback Collector Bot*
\`\`\`
let feedbacks = Bot.getProperty("feedbacks") || [];
feedbacks.push({ id: user.telegramid, text: message });
Bot.setProperty("feedbacks", feedbacks, "json");
Bot.sendMessage("✅ Thanks for your feedback!");
\`\`\`

33️⃣ *Random Winner Selector*
\`\`\`
let participants = Bot.getProperty("participants") || [];
let winner = Libs.Random.randomOneFrom(participants);
Bot.sendMessage("🎉 The winner is: " + winner);
\`\`\`

34️⃣ *Simple Poll Bot*
\`\`\`
if (!User.getProperty("voted")) {
  User.setProperty("voted", true, "boolean");
  let votes = Bot.getProperty("votes") || { yes: 0, no: 0 };
  if (message.toLowerCase() == "yes") votes.yes++;
  else votes.no++;
  Bot.setProperty("votes", votes, "json");
  Bot.sendMessage("✅ Vote recorded!");
} else {
  Bot.sendMessage("⚠ You already voted!");
\`\`\``,
      parse: "Markdown"
    },

    bas5: {
      text: `⚡ *BB Basic Codes – Part 5: Advanced Utilities & Pro Tricks*
💰 *BB Basic Codes – Part 6: Special Bot Types & Monetization*

35️⃣ *Store User Progress*
\`\`\`
User.setProperty("step", "askName", "string");
if (User.getProperty("step") == "askName") {
  Bot.sendMessage("What's your name?");
}
\`\`\`

36️⃣ *JSON API Parsing*
\`\`\`
HTTP.get({
  url: "https://api.example.com/user/123",
  success: "/parseUser"
});

// /parseUser command
let data = JSON.parse(content);
Bot.sendMessage("User name: " + data.name);
\`\`\`

37️⃣ *Store Complex Objects*
\`\`\`
let profile = { name: "Alex", coins: 15, level: 3 };
User.setProperty("profile", profile, "json");
\`\`\`

38️⃣ *Multi-Step Conversation*
\`\`\`
User.setProperty("step", "askEmail", "string");

// In another command:
if (User.getProperty("step") == "askEmail") {
  User.setProperty("email", message, "string");
  User.setProperty("step", "", "string");
  Bot.sendMessage("✅ Email saved!");
}
\`\`\`

39️⃣ *Send Audio*
\`\`\`
Api.sendAudio({
  audio: "https://example.com/song.mp3",
  caption: "🎶 Enjoy!"
});
\`\`\`

40️⃣ *Delete a Message*
\`\`\`
Api.deleteMessage({
  chat_id: chat.chatid,
  message_id: request.message.message_id
});
\`\`\`

41️⃣ *Use BB Options in Callbacks*
\`\`\`
Api.getUserProfilePhotos({
  user_id: user.telegramid,
  on_result: "/showProfile",
  bb_options: { custom: "data123" }
});
\`\`\`

42️⃣ *Subscription-Based Bot*
\`\`\`
let active = User.getProperty("sub_active");
if (!active) {
  Bot.sendMessage("❌ You need a subscription.");
  return;
}
Bot.sendMessage("✅ Access granted!");
\`\`\`

43️⃣ *Time-Limited Access*
\`\`\`
let expire = User.getProperty("expire_time");
if (Date.now() > expire) {
  Bot.sendMessage("⏳ Your access expired.");
} else {
  Bot.sendMessage("✅ You still have access!");
}
\`\`\`

44️⃣ *Sell Digital Files*
\`\`\`
Api.sendDocument({
  document: "https://example.com/paidfile.pdf",
  caption: "Thanks for your payment!"
});
\`\`\`

45️⃣ *Ad Rotator*
\`\`\`
let ads = ["Ad 1", "Ad 2", "Ad 3"];
Bot.sendMessage(Libs.Random.randomOneFrom(ads));
\`\`\`

46️⃣ *VIP Group Access*
\`\`\`
Bot.sendMessage("Join here: https://t.me/joinchat/example");
\`\`\`

47️⃣ *Sell Bot Commands*
\`\`\`
if (!User.getProperty("bought_pro")) {
  Bot.sendMessage("Buy Pro to use this command.");
  return;
}
Bot.sendMessage("Pro command activated!");
\`\`\`

48️⃣ *Affiliate Link Tracking*
\`\`\`
let clicks = Bot.getProperty("linkClicks") || 0;
clicks++;
Bot.setProperty("linkClicks", clicks, "integer");
Bot.sendMessage("Total clicks: " + clicks);
\`\`\``,
      parse: "Markdown"
    },

    ai: {
      text: "➡️ Try BB AI on Chat GPT\n⛓ Link: https://chat.openai.com/g/g-mW7CZYp2i-bb-ai-help\n🧑‍💻 Improve your coding!",
      parse: "Markdown"
    },

    howtobottoken: {
      text: `<b>✅ How to get your Bot Token — Step-by-step</b>\n\n<b>1️⃣ Step 1 — Talk to BotFather in Telegram</b>\n1. Open your Telegram app (mobile or desktop). 📱\n2. Search for <b>@BotFather</b> — the official Telegram bot for creating bots. 🤖\n3. Start a chat with BotFather.\n\n<b>2️⃣ Step 2 — Create a New Bot</b>\n1. In the BotFather chat, type: <b>/newbot</b>\n2. BotFather will ask you for:\n   • <b>Bot name</b> — shown to users (anything you like) ✨\n   • <b>Bot username</b> — must be unique and end with <b>bot</b> (e.g., <b>my_cool_bot</b>) 🔤\n\n<b>3️⃣ Step 3 — Get Your Bot Token</b>\n1. After creation, BotFather will send a message like:\n<code>Use this token to access the HTTP API:\n123456789:ABCdefGhIjkLmNoPQRstuVWxyZ</code>\n2. Copy that token and keep it safe — you’ll paste it into Bots.Business 🔐\n\n<b>4️⃣ Step 4 — Put the Token into Bots.Business</b>\n1. Log in to Bots.Business 🌐\n2. Open your bot’s <b>Settings</b> ⚙️\n3. Paste the token into the <b>Bot Token</b> field and save ✅\n\n<b>5️⃣ Step 5 — Test the Bot</b>\n1. In Telegram, search for your bot by username (e.g., <b>@my_cool_bot</b>) 🔍\n2. Click <b>Start</b> ▶️ — if you see this message, the bot is connected and working 🎉`,
      parse: "HTML"
    }
  };

    const key = (data || "").trim().toLowerCase();

    if (!key || key === "menu") {
        return showMainMenu();
    }

    if (snippets[key]) {
        const replyOptions = {
            parse_mode: snippets[key].parse,
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: [
                    [{ text: "🔙 Back to Menu", callback_data: "menu" }]
                ]
            }
        };

        // Remove Back button specifically for howtobottoken
        if (key === "howtobottoken") {
            delete replyOptions.reply_markup;
        }

        bot.sendMessage(chatId, snippets[key].text, replyOptions);
    } else {
        bot.sendMessage(chatId, "❌ Command not recognized inside learn.", {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "🔙 Back to Menu", callback_data: "menu" }]
                ]
            }
        });
    }
};
