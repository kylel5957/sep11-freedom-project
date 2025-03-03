# Entry 3
##### 2/8/25

## History

Since the last winter break, I have continued refining my skills from using Kaboom still using their [documentation](https://kaboomjs.com). During that time, I added sound effects into my interations throughout my levels using the website, [zapsplat](https://www.zapsplat.com/sound-effect-categories/) to import the numerous sound effects. From extensive research, I was able to understand how importing sounds worked and I realized that it was extremely similar to importing sprites, but instead was a sound had a slight variation in code.

### Levels and Sprites 

Previously I had added new sprites and levels, but besides that, an additional thing I wanted to add was a score counter, and I was able to achieve this through this code

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

I was able to insert a new counter that would update when the user enters a new level with my new variable `score2`. I declared `score2` in the beginning of the `function start()`. Then I made it so that each time the bean entered the portal, leading to a new level, one level was passed. At the end of the entire series of levels, the amount of levels the users passed would be displayed on a text underneath the amount of coins the user grabbed. 

```JS
scene("win", ({ score, score2 }) => {
	add([
		text(`You grabbed ${score} coins!!! You also passed ${score2} levels!!`, {
			width: width(),
		}),
		pos(12),
	])
	onKeyPress(start)
})
```

This code shows the ending where the user passes all the levels, and there would be an additional text where the amount of levels, which is represented by score2, would be displayed along side the amount of coins the user had collected. And to test the functionality of my code, I added a new level to test it out and it worked perfectly.

### Future Plans
During the next break, I plan to add a new certain type of level, one where the layout would make it so that the user would have to choose a way, one leading to the next level and one leading to death. This in-fact would lead us one step closer to our current overarching freedom project which entails a trivia game of sorts. Additionally, in the near future, I want to add new sprites without any sort of background to make them more aesthetically pleasing inside the different levels. 

I have already started collaborating with Joe further, by creating a new repository where we can merge the different aspects of the things we have learned so far. Soon our plan is to develop that file into something presentable. We have already started importing sprites and our code, in fact, I imported a new sprite that we already started to use, and so in the future we will continue to collaborate and finish the project.

### EDP 
We are finally fully on stage 3, Brainstorming possible solutions. This means that we now must solely brainstorm possibilities on how to capture the users attention. Our goal is to make a fun and an interactive game to educate kids in different way. This step is one of the most cruicial as this would give us choices on which path to focus on and go down.

### Skills

#### Organization 
As my code will merge with Joe's and we both have worked on different things focusing on different aspects of Kaboom, inevitably, the code will be a bit messy and conflicting. Though because of how me and Joe organized all parts of our code into manageable chunks, we were able to sucessfully start to merge our code, taking what we liked from each others code and putting them into one bigger and better repository

#### Communication
With the creation of the new repository, having conflicting ideas would be detrimental to our entire project, and thats why I have been using my communication skills. To convey with Joe, when to push, when to pull, and how we each see the future of this project, all in order to not conflict with each others and make problems 

[Previous](entry02.md) | [Next](entry04.md)

[Home](../README.md)