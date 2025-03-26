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
        anchor(D"center"),
        color(0, 0, 0),
    ])
```

With that inclusion, I was able to have text on my button while also allowing it to be functional when calling it using, `addButton("Start", vec2(700, 300), () => start())`. With it creating a button with the text "Start" at that exactly location, and when pressed, it will run the start() function which is the entirety of my game. This will be loaded first and so with this inclusion, this means that I can add additional screens that lead to different places, giving life to my game and not keeping it static.

### Additional Features
As we had looked for a new default sprite, we scoured the internet to find a good sprite, fit to be in our game, and we ended up with a cool nerd emoji sprite. Additionally, we added a locked camera positioning so that the view would generally look the same across all screen sizes. We changed the background color into something thats more visually soothing and the sprites resized so that the game will be fun and a challenge.

![image](https://github.com/user-attachments/assets/af8fb183-ad0f-40b1-a096-53d7fa27560f)

![image](https://github.com/user-attachments/assets/6308532c-9b06-495e-a4ee-13f263412faa)

### Next Plans
I plan to continue to add new features into our game, and the next step is to make more levels and add another functioning portal. Additionally, we plan to add spikes and coins back into our fused repositiory to make the game more fun. We have many more things in mind, and we will try to achieve all our goals, one step at a time.

### EDP (Engineer Design Process)
Right now we are on step 5. We are actively building the game that we are envisioning, to build a unique game that educates kids while also being fun. As we are on the building the prototype stage, we plan to do the best we can to make the game visually appealing and have all the features be cool and functioning. 

### Skills 

#### Time Management 
As it's junior year, 2 AP classes and extracurriculars can be overwhelming sometimes. However, I manage my time carefully, alloting a certain amount of time to tasks and homeworks so that I still have enough time to do the things I want to. With copius amounts of works from other classes, I manage by prioritizing assignments based off their due dates. With proper time management, I am able to work freely on the Freedom project with Joe and thats how I achieve progress even with tons of work, through careful time management and minimal procrastination.

#### Embracing Failure
As me and Joe were trying to get our HTML file to load, in order to work on our freedom project, we repeated ended up with a wall of error. Relentlessly, we tried different things, different sprites, different code, different file path, and yet, each time it never worked. Despite that, we continued, trying everything untill it worked, and we eventually did find the solution, and through that entire ordeal, we learned that it was a bit of the code's fault and our fault. Throughout this painful journey, we never gave up in the face of failure and kept on pushing forward, because of that, we achieved our goal, the debugging of our file, allowing us to implement our features such as a change in background color, locked camera, start button, and many more to come.

[Previous](entry03.md) | [Next](entry05.md)

[Home](../README.md)
