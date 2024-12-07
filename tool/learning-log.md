# Tool Learning Log

## Tool: **Kaboom.js**

## Project: **SEP FREEDOM Project**

---

### 9/30/24:
* Imported CDN for Kaboom.js
* [kaboom](https://kaboomjs.com/doc/setup)
* Changed the positioning of the text and the text itself

### 10/6/24:
* Added NPM for Kaboom.js
* Tried adding a sprite into the code and so I added Mario

![alt text](img/image-1.png)

* Also messed around with the code and changed the variables to see if it would change anything
![alt text](img/image-2.png)
* Learned that `npm run dev` would start a local server like http-sever would but for Kaboom.js
* Note, scale(any number) will change a sprites size
* Note, functions and vairables are very useful becuase of how repetitive some of the code gets
![image](https://github.com/user-attachments/assets/3bb52b64-0b3b-4e6b-b152-0d30cabba1c9)
* `rect(width(), 70)` --> This command allows you make a rectangle and when you change the number within width, you can change the width, and the other number is to change the height
* `outline()` --> This makes an outline which is exactly the same as a border
* `pos(0, height() - 50)` --> This line of code allows the rectangle to sit on the bottom but subtracts from 0 to allow us to see it
* `area()` --> makes so that it can interact with other sprites
* `body({ isStatic: true })` --> This makes the rectangle unmoving and anything can't move past it as well
* `color(200, 150, 255)` --> This gives color to the rectangle

### 10/23/24 (for 10/28/24)
* By declaring the variable of the sprites name, then using the descriptions of the sprite, we are able to have the sprite be able to move and jump

![alt text](img/image-4.png)

* Having a bean that can just jump isn't enough so I looked at a tutorial that taught me how to implement obstacles onto the platform that kept moving and something you can jump over
* By using a loop conditonal I was able to loop an obstable multiple times in a row

```js
loop(1, () => {
    add([
        rect(20, 20),
        area(),
        outline(4),
        pos(width(), height() - 50),
        anchor("botleft"),
        color(255, 180, 255),
        move(LEFT, 400),
        "tree",
    ]);
});
```
* This code shows how I made a small rectangle with the rect code, specifying the height and width.
* Then I gave it area so it could interact with my sprites, the outline for a design look
* the pos specifies where it will be while the anchor keeps it there like an anchor
* move(LEFT,400) tells the obstacle where to move continiously, I specified Left and at a speed of 400 pixels per second
* And I learned about "name" so I can use that name to interact with other things in my world


``` js
bean.onCollide("block", () => {
    addKaboom(bean.pos);
    shake();
});
```
![alt text](img/image-5.png)

* This line of code allowed me to have a message "Kaboom" pop up when the bean collides with the obstacle I made while shaking the screen mildly
* I was able to change the size, length, width of the obstacle as well as its color
* I was also able to change the speed it was moving as well as the overall gravity of the entire "world"

### 11/5/24 (LL3)
* Trying to use what I learned so far, I tried impmenting obstacles on the roof to increase the challenge and make it more visually appealing by taking up the white space
* After repreatly trying, I couldn't get it to work, only after tinkering for a long time I got it to work
```js
 add([
    pos(0, 0),
    rect(2000, 300),
    outline(2),
    area(),
    color(255, 180, 255),
])
```
In this case, previously, I had thought that copying the previous code I had for the huge box would work and so I tried copy and pasting and moved the coordinates around
```js
add([
    rect(width(), 300),
    pos(0, height() - 300),
    outline(2),
    area(),
    body({ isStatic: true }),
    color(50, 100, 255),
])
```
* This to my suprise didn't work, it either brought me to an error screen or just would have nothing appear on my screen, this puzzled me and so I started doing a kind of rubber duck debugging and walked myself through each line of code and its function
* to my suprise, I actually figuered something out and it was that I had lots of unecessary code such as `pos(0, height() - 300),` and `pos(0, height() - 300)`, I would only need this if I was trying to erect a rectangle from the bottom to the top, and so I figuered that I can simply that by just simply stating where I wanted them to appear and the size of it towards the top.
* After a bit of tinkering, I eventually got it working which was nice
* Another feature I tried to add was a background color, I didn't like the png look of the background and tried to change it, through many different attempts and failures, I learned with each mistake
* I tried going on the official website which had all the code but it was put in a style that I couldn't understand

![](img/image-6.png)
* I started out with `setBackground(r: number, g: number, b: number, alpha?: number)` and kept trying untill it would work. It actually got to a point where I kept removing the code on the inside and got left with `add([rect(2000, 300]), color(0,0,255)` though this didn't work as it erected a giant shape on top of the entire game, I combined the official documentation's code as well as my own thought process and ended up with `setBackground(255, 255, 0);` this to my excitement worked, it changed the png background and changed the color to my desired color.

![alt text](img/image-7.png)



### 11/18/24 (LL4)
* This time I want to try to make levels for a game instead of having a game run continiously so that the user can see variations
* Started by importing a new game file to work on called mygame2, to test things out and see what I can acomplish
* As I tried working to find a solution to start making a level, looking through the documentation, they all used Replit and that was something I wasn't using
* Therefore I tried looking back on what I had done previously in mygame while also looking through the documentation
* I Tried really hard to understand how to create a level but it never happened, but it will become a goal for me
* So i tried to do the little bits first, such as trying to allow the bean to even move left to write, the previous game was a infinite game where the obstacles kept coming at you and you only had to jump
* Moving left to right was more difficult than I thought, it wasn't as simple as it seemed and tried looking online for what the answer might be, though I only got fragments.
* I had this code on the previous game and after looking
```js
onKeyPress("w", () => {
    if (bean.isGrounded()) {
        bean.jump();
    }
});
```
* I found a snippet of code while looking at the documentation `bean.move(-SPEED, 0)`, though it seemed simple and unordinary, this changed what I thought I could do, I thought about utilizing that snippet with what I already had because I had set a floor the bean could land on but it wasn't moving
* And after numerous attempts in Frankensteining the code together, something clicked and it worked.
```JS
const SPEED = 400;

onKeyDown("a", () => {
	if (bean.isGrounded()) {
		bean.move(-SPEED, 0)
	}
})

onKeyDown("d", () => {
	if (bean.isGrounded()) {
		bean.move(SPEED, 0)
	}
})
```
* With the conditional of pressing down a button, (not on key press) I could use a conditional exactly the same as the game from mygame and instead of using the ssme inside code, I changed it to where it would depending on the button you held, move your direction in a certain way by attatching thr button with a change in speed.
* I made it so that only when the bean was on the floor, it could move left and right using the keyboard
* As I had more code than I used to, I noticed while looking through documentation how everything had a comment to them, noting down their purpose, clarifying the code which was all bunched up together, and I took inspiration and included that into my coding



### 12/7/24 (LL5)
* Continuing on what I had previously, I sought out to create scene, not level as level indicates singular while a scene is composed of multiple
* To get started, I looked at official documentation on how to get started with a scene and on [kaboomjs.com](kaboomjs.com) I scrolled down to the scene() and level() section to read what its components were and how to use them
* At a surface level, it looked easy, all I had to do was set up some code and then by substituiting characters or letters as my sprites, I was able to create a level.
* Using what I saw on the official website and an additional informational [video](https://www.youtube.com/watch?v=Dkxwe_Gv7q4) I was able to have a sense of an idea of how to get started making levels

```JS
const LEVELS = [
	[
		"@  ^ $  ^^    $    $   >",
		"========================",
	],
	[
		"@   $   $   $   $   >",
		"=   =   =   =   =   =",
	],
]
```

* And so I started out simple and tried to create a layout with 2 levels inside, being able to move from level 1 to level 2
* Though I loaded up my code, expecting to see the bean on my grass block with all my other sprites loaded in. But I saw none of that
* As I saw nothing, obviously something was wrong and so I checked back with my sources to see what I did differently from them.
* As I inspected, I saw how they redefined their sprites within a function called "scene"

```JS
scene("game", ({ levelIdx, score }) => {

	// Use the level previously defined
	const level = addLevel(LEVELS[levelIdx || 0], {
		tileWidth: 64,
		tileHeight: 64,
		pos: vec2(100, 200),
		tiles: {
			"@": () => [
				sprite("bean"),
				area(),
				body(),
				anchor("bot"),
				"bean",
			],
			"=": () => [
				sprite("grass"),
				area(),
				body({ isStatic: true }),
				anchor("bot"),
				scale(.18),
			],
			"$": () => [
				sprite("coin"),
				area(),
				anchor("bot"),
				scale(.3),
				"coin",
			],
			"^": () => [
				sprite("spike"),
				area(),
				anchor("bot"),
				scale(.2),
				"danger",
			],
			">": () => [
				sprite("portal"),
				area(),
				anchor("bot"),
				scale(.3),
				"portal",
			],
		},
	})
```
* As I looked at the documentation in the video and website I realised how they set each symbol equal to a sprite and thats where you make the connection. And so I did that myself, writing the code above
* The "Level" I created had "@" as my Bean sprite; "^" as my spike; "$" as my coins; and "=" as my grass blocks with quotation marks defining the border
* With this addition and `const bean = level.get("bean")[0]` as my tag for bean
* I was able to start my game up with
```JS
function start() {
	// Start with the "game" scene, with initial parameters
	go("game", {
		levelIdx: 0,
		score: 0,
	})
}

start()
```
* Initializing my game and giving it a basic look with nothing special yet
![alt text](img/image-8.png)
