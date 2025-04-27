# Entry 5
##### 4/26/25

### Recent Additions
Me and Joe have added many new features since the last blog. Previously, we planned to add more levels, a trap portal, spikes, and coins into our levels in order to add depth into the game. Since then, we have added all those features and more! We also added an array for the start button so that it will cycle between three different start texts for the button. For the levels, we now have a total of 8 levels, 7 have a question and an answer with 2 portals seperating the answer choices. Additionally, we added coins and a counter for the coins and the levels the user passes. On top of that, we have added sounds for many actions the player does, from an easter egg sound to picking up coins and entering portals, finishing with a victory sound as well.

### Texts and Portals
As we had planned to add questions into our levels, we never bothered to ask how we could even add text into our levels. We tried various different methods but all the methods either failed or only appeared on the start screen. Only untill we had a realization after looking at the button and our character assignment that he could combine them both by using the parts he needed. By assigning a letter/number, we can give a text a specific spot on each level. This solved our issue for questions and answers as we figured out how to add levels with texts in specific spots where we want them to be.

#### Text and Answers
```JS
"0": () => [
    text("What is the square root of 81?")
],
"q": () => [
    text("It is 7")
],
"Q": () => [
    text("It is 9")
],
```


With a question meant having two answers--one right and one wrong. We first thought about how to complete this task. The first thought we had was to import a different portal and assign it a tag where if interacting with the user, would act the same as a spike. But then as we implemented it, we realized it would be permanante and would only really work for one level as if we tried to reuse the portal, the user can just remember that a specific portal is always the answer while the other kills you. To get around this, we figured out that we can reimport the same portal sprite we had, and we just needed to change the tag and name we assigned it for it to function differently. As we tried it out, we gave it the same tag as a spike, meaning touching the wrong portal would be the same as jumping face first into a spike. This worked perfectly and paired with our 7 questions, we had perfect portals that worked how its supposed to, leading to our Minimal Viable Product (MVP).

#### The Wrong Answer Portal
```JS
"(": () => [
                    sprite("pov"),
                    area(),
                    anchor("bot"),
                    scale(.15),
                    pos(0, 220),
                    "danger",
                ],
```

### Easter Egg & Small Stuff
Me and Joe wanted to hide a little secret within the game and so if the player starts clicking random letters, once they reach "r" a special popup would show, unlocking the easter egg. Additionally, we have lowered the threshold for the fall to death requirement as sometimes, when our levels get low, the user dies from being too low of a Y-level when they are standing on a block.

![image](https://github.com/user-attachments/assets/4fc551e7-b5a0-40b2-a6f1-6cf8bfd6a334)

### Future Plans
We plan on fixing any bugs in our code by reviewing all our code and then we will try to make additional features such as a help screen. We plan on making our game refined and polished and so won't rush with adding new features as got the base game down and so want to make the game as enjoyable as possible while being very educational for those who play.

### EDP (Engineer Design Process) 
We are currently on step 6 and 7 of the EDP process, testing and evaluating while also thinking about ways to improve our product. We now need to fix any bugs we find and polish the levels in order to achieve the perfect state. Additionally, while that happens, we can think about how we can keep on improving with a different feature, but only after polishing the base game can we think about adding more.

### Skills

#### Logical Reasoning
While adding the new functions such as text and portals, it was a difficult task at first. There was no mention of how to do it in the documentation nor videos and so we had to think of a way to do it ourselves. By understanding how scenes work, we could then understand how to add additional code to it, such as adding a new letter in order to represent text. The logical reasoning behind the two different portals was simple after long thought and trial and error. As we couldn't just keep adding 2 different portals for each level because it would be so inefficient, we thought of a logical way to fix that. Having the exact same portal while giving the trap portal the same tag as a spike allowed the trap portal look the exact same as the safe one while killing if entered. This all was possible through logical reasoning and using what we learned so far in kaboom to add a feature of our own in.

#### Collaboration
Working alone is hard, but working with a partner lightens the load and makes big tasks easier to manage with the right amount of collaboration. Throughout the development of the entire game, we split apart the work, based on our strong suits. On different days and in school, we would slowly work on the project untill it started to resemble a game. We communicated on when we would push and pull and which tasks we would work on. For example, while I worked on adding the text and questions onto the levels, Joe would work on the levels, and in the meantime we would keep each other updated whenever we made progress. If I finished first, I would help with whatever Joe is doing and vice versa, by collaborating, it made the entire project less of a headache and actually a fun project that me and Joe worked hard on together.



[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)
