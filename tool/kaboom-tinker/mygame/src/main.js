import kaboom from "kaboom"

const l = kaboom()

l.loadSprite("bean", "sprites/bean.png")
l.loadSprite("mario", "sprites/mario.png")

l.add([
	l.pos(120, 80),
	l.sprite("bean"),
])
l.add([
	l.pos(200, 100),
	l.sprite("mario"),
])
l.onClick(() => l.addKaboom(l.mousePos()))
