# Justo to Discord

This app let you send commands from Justo app to Discord specific channel (webhook)

## Description

With Nodejs using Express and Discordjs we created a webhook app that holds the Json responses from Justo and send then back to Discord using an standar and basic userbot from that plataform (discord)

## Getting Started

### Dependencies

- First of all, we need to clone this repo using

  ```
  git clone https://github.com/gurkenpoo/JustoToDiscord.git
  ``` 
  
* Then, lets do some npm i
  ``` 
  npm i express
  npm i node
  npm i discord.js
  npm i body-parser
  npm i nodemon
  ``` 

- Second one, is creating our Discord aplication to get a userBot, go a head to [this link](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot), then follow [this steps](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links) to add the bot into the server you want the integration

### Installing

- Once we got our bot, we have to copy our token bot to a file in
  `/src`
  called
  `TOKEN.js`
  
  ![tokenbot](https://user-images.githubusercontent.com/90875843/197061850-ce0ca416-d1a2-4b76-96a3-5f827f6f0ed1.png)
  <sub>Just press "reset"</sub>
  
- And paste it here:

  ![tokenbot](https://user-images.githubusercontent.com/90875843/197087170-58fe01f9-cdc7-49c1-a576-e04687e72481.png)

  

## Running our App in localhost (to test it)

- Go ahead to `Webhook.js` and set up your Endpoint
  
  ![imagen](https://user-images.githubusercontent.com/90875843/197087605-9d1e7796-1f7f-4e0d-bdbd-8f7480a87cca.png)
  
- Add the ChannelID that you want to integrate here in `botBrain.js`:

  ![imagen](https://user-images.githubusercontent.com/90875843/197088461-72dc059a-6fca-43cb-ba43-6b586b45b3a0.png)



  
  > **Now we are ready to go**

### TEST!


  - Lets use nodemon in this instance, go ahead and run:
      ```
      nodemon src/webhook.js 
      ```
      > If its all okay, you should see in the terminal `yourBot#0000 online!`, if you encounter an error, let me know in discord or here (im new)

  - Well, now with our bot Online, let's slap it with a `curl`

     ```
        curl -H "Content-Type: application/json" -d @src/exampleData.json localhost:3000/yourEndPoint
  
      ```
      > If its all okay, look in your discord Channel...is should look like this: 

      ![prueba02](https://user-images.githubusercontent.com/90875843/197651228-1f74e467-56c8-4e8b-bbbb-f940e86d7bf5.png)


## Help
   > If the imports and modules spam you an error, try to add `"type": "module"` in the `package.json`
           
   > if it throws other and more errors, send me a md in discord || contact me to help you or help me

## Authors

Contributors names and contact info

  - Bastian Poo A.K.A "gurkenpoo" | [@gurkenpoo](https://github.com/gurkenpoo) | Discord ID = gurkenpoo#1786
  
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
