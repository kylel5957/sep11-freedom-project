import kaboom from "kaboom"

const k = kaboom()

// Build levels with addLevel()

// Start game
kaboom()

// Load assets
loadSprite("bean", "../www/sprites/bean.png")
loadSprite("block", "../www/sprites/block.png")
// loadSprite("bean", "../../../mygame/www/sprites/bean.png")


const SPEED = 480

setGravity(2400)

const level = addLevel([
	// Design the level layout with symbols
	"@      ",
	"=======",
], {
	// The size of each grid
	tileWidth: 64,
	tileHeight: 64,
	// The position of the top left block
	pos: vec2(100, 200),
	// Define what each symbol means (in components)
	tiles: {
		"@": () => [
			sprite("bean"),
			area(),
			body(),
			anchor("bot"),
			"player",
		],
		"=": () => [
			sprite("block"),
			area(),
			body({ isStatic: true }),
			anchor("bot"),
		],
		// "$": () => [
		// 	sprite("coin"),
		// 	area(),
		// 	anchor("bot"),
		// 	"coin",
		// ],
		// "^": () => [
		// 	sprite("spike"),
		// 	area(),
		// 	anchor("bot"),
		// 	"danger",
		// ],
	},
})

// Get the player object from tag
const player = level.get("player")[0]

// Movements
onKeyPress("space", () => {
	if (player.isGrounded()) {
		player.jump()
	}
})

onKeyDown("left", () => {
	player.move(-SPEED, 0)
})

onKeyDown("right", () => {
	player.move(SPEED, 0)
})

// Back to the original position if hit a "danger" item
player.onCollide("danger", () => {
	player.pos = level.tile2Pos(0, 0)
})
