import kaboom from "kaboom"

const k = kaboom()


//loading sprites
k.loadSprite("bean", "sprites/bean.png")
k.loadSprite("grass", "sprites/grass.png")
k.loadSprite("coin", "sprites/coin.jpg")
k.loadSprite("portal", "sprites/portal.jpg")
k.loadSprite("spike", "sprites/spike.png")
k.loadSprite("green", "sprites/green.avif")



k.loadSound("pop", "sounds/pop.mp3")
k.loadSound("portal", "sounds/portal.mp3")
k.loadSound("fall", "sounds/fall.mp3")
k.loadSound("burp", "sounds/burp.mp3")



const SPEED = 400;
k.setGravity(1300);




const LEVELS = [
	[
		"@  ^ $  ^^    $    $   >",
		"========================",
	],
	[
		"@   $   $   $   $   >",
		"=   =   =   =   =   =",
	],
	[
		"  $               $   ",
		"  =     $         =   ",
		"   @    =      $      ",
		"   =        $  =      ",
		"     $      =      >  ",
		"     =             =  ",
	],
	[
		"       ^  $      $     ",
		" @                     ",
		"====================== ",
		"       ^  $            ",
		"                       ",
		"  =======================",
		"         $$$$          ",
		"                   >   ",
		"====^========^^========",

	],
]


// floor
// add([
//     rect(width(), 300),
//     pos(0, height() - 200),
//     outline(2),
//     area(),
//     body({ isStatic: true }),
//     color(50, 100, 255),
// ])




// Define a scene called "game". The callback will be run when we go() to the scene
// Scenes can accept argument from go()
scene("game", ({ levelIdx, score }) => {

	// Use the level passed, or first level
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
				sprite("green"),
				area(),
				body({ isStatic: true }),
				anchor("bot"),
				scale(.11),
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

	// Get the object from tag
	const bean = level.get("bean")[0]


	//movement
onKeyPress("space", () => {
	if (bean.isGrounded()) {
		bean.jump()
	}
})

onKeyDown("left", () => {
	bean.move(-SPEED, 0)
})

onKeyDown("right", () => {
	bean.move(SPEED, 0)
})


	bean.onCollide("danger", () => {
		bean.pos = level.tile2Pos(0, 0)
		play("burp")
		// Go to "lose" scene when we hit a "danger"
		go("lose")
	})

	bean.onCollide("coin", (coin) => {
		destroy(coin)
		play("pop")
		score++
		scoreLabel.text = score
	})

	// Fall death
	bean.onUpdate(() => {
		if (bean.pos.y >= 500) {
			go("lose")
			play("fall")
		}
	})

	// Enter the next level on portal
	bean.onCollide("portal", () => {
		play("portal")
		if (levelIdx < LEVELS.length - 1) {
			// If there's a next level, go() to the same scene but load the next level
			go("game", {
				levelIdx: levelIdx + 1,
				score: score,
			})
		} else {
			// Otherwise we have reached the end of game, go to "win" scene!
			go("win", { score: score })
		}
	})

	// Score counter text
	const scoreLabel = add([
		text(score),
		pos(12),
	])

})

scene("lose", () => {

	add([
		text("You Lose"),
		pos(12),
	])

	// Press any key to go back
	onKeyPress(start)

})

scene("win", ({ score }) => {

	add([
		text(`You grabbed ${score} coins!!!`, {
			width: width(),
		}),
		pos(12),
	])

	onKeyPress(start)

})

function start() {
	// Start with the "game" scene, with initial parameters
	go("game", {
		levelIdx: 0,
		score: 0,
	})
}

start()
