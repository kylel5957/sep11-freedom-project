# Entry 4
##### 3/12/25

### New Update
Previously I had added new levels and new sprites into my freedom project, but this time, I had finally merged many of my features into the repository shared with me and Joe. Mainly using [Kabooms](kaboomjs.com) documentation, me and Joe are able to piece together a cool functioning big project. Additionally, we finally cleaned up our sprites and levels, we got rid of the unecessary levels and sprites, replacing them with cleaner and interesting sprites. Previously, the file was also iffy, with the file path having some issues, but this time, we got everything resolved and so we could finally add our new features.

### Start Button
While looking through the documentation for new things to add, I stumbled across a button feature, like in many games where you press start to start playing the game. As we are building a game, I felt that it would only fit that in our game, we also make a start button that would be displayed at the beginning of the game. I started to this by first thinking back to the dom lessons, which we just had completed, thinking back to the eventListeners and functions. In the example code they gave, it had 3 different parameters, txt, p, f.
```JS
function addButton(txt, p, f) {
const btn = add({
  rect()
  anchor("center")
  })

btn.onClick(f)

return btn
}
```
Here is the basic structure of the entire button, with a parameter for the text, the position, and an eventListener to run the function when the button is pressed. All I had to add was the text, using 

```JS
    btn.add([
        text(txt),
        anchor("center"),
        color(0, 0, 0),
    ])
```

With that inclusion, I was able to have text on my button while also allowing it to be functional when calling it using, `addButton("Start", vec2(700, 300), () => start())`. With it creating a button with the text "Start" at that exactly location, and when pressed, it will run the start() function which is the entirety of my game. This will be loaded first and so with this inclusion, this means that I can add additional screens that lead to different places, giving life to my game and not keeping it static.

### Additional Features
As we had looked for a new default sprite, we scoured the internet to find a good sprite, fit to be in our game, and we ended up with a cool nerd emoji sprite. Additionally, we added a locked camera positioning so that the view would generally look the same across all screen sizes. We changed the background color into something thats more visually soothing and the sprites resized so that the game will be fun and a challenge.

![image](https://github.com/user-attachments/assets/af8fb183-ad0f-40b1-a096-53d7fa27560f)

![image](https://github.com/user-attachments/assets/6308532c-9b06-495e-a4ee-13f263412faa)

### Plans
I plan to continue to add new features into our game, and the next step is to make more levels and add another functioning portal. 


[Previous](entry03.md) | [Next](entry05.md)

[Home](../README.md)
