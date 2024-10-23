import kaboom from "kaboom"

const l = kaboom()
l.setGravity(1500)
function block(x,y){
	l.add([
		l.pos(x, y),
		l.sprite("block"),
		l.scale(0.05)
	])
}

loadSprite("bean", "sprites/bean.png")
loadSprite("mario", "sprites/mario.png")
loadSprite("block", "sprites/block.png")

const bean = add([
	pos(120, 80),
	sprite("bean"),
    color(255, 255, 0),
    area(),
    body(),
])

onKeyPress("w", () => {
    if (bean.isGrounded()) {
        bean.jump();
    }
});
onKeyPress("d", () => {
    if (bean.isGrounded()) {
        bean.jump();
    }
});


add([
    rect(width(), 48),
    pos(0, height() - 50),
    outline(2),
    area(),
    body({ isStatic: true }),
    color(50, 100, 255),
])


loop(1, () => {
    add([
        rect(20, 20),
        area(),
        outline(2),
        pos(width(), height() - 50),
        anchor("botleft"),
        color(255, 180, 255),
        move(LEFT, 400),
        "tree",
    ]);
});

bean.onCollide("tree", () => {
    addKaboom(bean.pos);
    shake();
});

// addLevel ([
// "@   "
// "===="
// ]

// )










// l.add([
// 	l.pos(200, 100),
// 	l.sprite("mario"),
// ])

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





// l.onClick(() => l.addKaboom(l.mousePos()))
