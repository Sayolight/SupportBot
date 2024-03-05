# 💭 SupportBot
![Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-FFC0CB?style=for-the-badge&logo=apache&logoColor=white)
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://telegram.org/) 
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)

**A simple Telegram bot designed to assist with support-related tasks.**

![](assets/screenshot.png)

## 🚀 Running
1. Copy `example.env` to `.env` and fill it with your data.
2. Install dependencies:
```bash
npm install
```
3. Start:
```bash
npm run bot
```

## ⚒ Configuring
- `BOT_TOKEN` Telegram bot token
- `SUPPORT_CHAT_ID` Chat ID for directing support messages
- `LOGGING_LEVEL` Options: debug / info 
- `MYSQL_HOST` Your db hostname or ip
- `MYSQL_DATABASE` Your db name         
- `MYSQL_USERNAME` Your db username 
- `MYSQL_PASSWORD` Your db user password
- `MYSQL_ROOT_PASSWORD` Your db root password

## 📄 Commands
- `start` - start command ¯\\\_(ツ)\_\/¯
- `ban` - add user to blacklist
- `pardon` - remove user from blacklist

###### Example bot: <a href="https://t.me/SayoSupportBot">@SayoSupportBot</a>
