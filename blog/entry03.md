# Entry 3
##### 2/8/25

## History

Since the last winter break, I have continued refining my skills from using Kaboom still using their [documentation](https://kaboomjs.com). During that time, I added sound effects into my interations throughout my levels using the website [zapsplat](https://www.zapsplat.com/sound-effect-categories/) to import the numerous sound effects. From extensive research, I was able to understand how importing sounds worked and I realized that it was extremely similar to importing sprites, but instead was a sound had a slight variation in code.

### Levels and Sprites 

An additional thing I wanted to add was a score counter, I was able to achieve this through 

```JS
function start() {
	go("game", {
		levelIdx: 0,
		score: 0,
		score2: 1,
	});
}

const scoreStage = add([
		text(score2),
		pos(15, 60),
	])

bean.onCollide("portal", () => {
    play("portal")
    score2++;
    scoreStage.text = score2;
    if (levelIdx < LEVELS.length - 1) {
        go("game", {
            levelIdx: levelIdx + 1,
            score: score,
            score2: score2,
        })
    }
}
```

I was able to insert a new counter that would update when the user enters a new level. At the end of the entire series of levels, the amount of levels the users passed would be displayed on a text underneath the amount of coins the user grabbed. And to test the functionality of my code, I added a new level to test it out and it worked perfectly.

### Future Plans
During the next break, I plan to add a new certain type of level, one where the layout would make it so that the user would have to choose a way, one leading to the next level and one leading to death. This in-fact would lead us one step closer to our current overarching 

[Previous](entry02.md) | [Next](entry04.md)

[Home](../README.md)