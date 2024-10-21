import kaboom from "kaboom"

const l = kaboom()

function block(x,y){
	l.add([
		l.pos(x, y),
		l.sprite("block"),
		l.scale(0.05)
	])
}



l.loadSprite("bean", "sprites/bean.png")
l.loadSprite("mario", "sprites/mario.png")
l.loadSprite("block", "sprites/block.png")

l.add([
	l.pos(120, 80),
	l.sprite("bean"),
    l.scale(2),
    l.rotate(30),
    l.color(200, 100, 255),
])
l.add([
	l.pos(200, 100),
	l.sprite("mario"),
])

// block(140,400);
// block(220,400);
// block(300,400);
// block(380,400);
// block(460,400);
// block(540,400);
// block(620,400);
// block(700,400);
// block(780,400);
// block(860,400);
// block(940,400);
// block(1020,400);
// block(1100,400);
// block(1180,400);

add([
    rect(width(), 70),
    pos(0, height() - 50),
    outline(8),
    area(),
    body({ isStatic: true }),
    color(200, 150, 255),
])

loadSpriteAtlas("sprites", {
    "bean": {
        x: 128,
        y: 68,
        width: 144,
        height: 28,
        sliceX: 9,
        anims: {
            idle: { from: 0, to: 3 },
            run: { from: 4, to: 7 },
            hit: 8,
        },
    },
})
onKeyPress("space", () => {
    bean.jump()
})

// l.onClick(() => l.addKaboom(l.mousePos()))
