# Justo to Discord

This app let you send commands from Justo app to Discord specific channel (webhook)

## Description

With Nodejs using Express and Discordjs we created a webhook app that holds the Json responses from Justo and send then back to Discord using an standar and basic userbot from that plataform (discord)

## Getting Started

### Dependencies

- First of all, we need to clone this repo using

  `git clone https://github.com/gurkenpoo/JustoToDiscord.git `

- Second one, is creating our Discord aplication to get a userBot, go a head to [this link](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot), then follow [this steps](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links) to add the bot into the server you want the integration

### Installing

- Once we got our bot, we have to copy our token bot to a file in
  `/src`
  called
  `TOKEN.js`
  ![tokenbot](https://user-images.githubusercontent.com/90875843/197061850-ce0ca416-d1a2-4b76-96a3-5f827f6f0ed1.png)
  <sub>Just press "reset"</sub>

### Running our App in localhost (to test it)

- Go ahead to `Webhook.js` and set up your Endpoint
  code blocks for commands

## Help

Any advise for common problems or issues.
command to run if program contains helper info

## Authors

Contributors names and contact info

- Bastian Poo A.K.A "gurkenpoo" | [@gurkenpoo](https://github.com/gurkenpoo) | Discord ID = _gurkenpoo#1786_

- Hans Poo | [@HansPoo](https://github.com/hanspoo)

## Version History

- 0.0.1
  - Initial Release

## PS

Im a newbie dev, so if you can help me polishing this proyect i would really appreciate.

### Inspirations and Documentation

- [Justo-documentation](http://docs.getjusto.com/docs/webhooks/introduction.html)
- [Discordjs](https://discord.js.org/#/)
- [Hans Poo, my god tier Dev](https://github.com/hanspoo)
- [Express-App](https://expressjs.com/en/5x/api.html#app)
