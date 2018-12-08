# CIM640 - Fall 2018

## FINAL  12/7/2018

### "WHERE THEM FEDDERS?" Game

#### GAME
#### Why are you making this project? What is your motivation?
This idea came from our brainstorming session in class on November 6, 2018.
I was visualizing lots of feathers falling from the beginning of the session and
wanted to make a little game where the feathers were falling and using an image
tracking library, the user would wave a color wand over the camera which would
capture the color specified and the feathers would catch on to the wand and then
the user would then attach the specific color feather to the designated color bird.

I came across some challenges when I was making the 'game' because the tracking
was specific to the CMYK range of colors. I decided to create RGB colors because the
wands I was able to create were in the RGB color ranges.

I played with the tracking code by changing the threshold of the colors and decided
to bring it down to two colors and two birds. They were a big challenge because the
camera would always pick up every range of color making it a bit difficult to pick
up solely the red or the green as I had specified.

The code works great with the mouse and the collide code I applied to it, but
the wands are a bit tricky because of this.

#### What are the inputs?
The inputs for the game are the video capture which picks up the colors of the wands
and tracks them with the feathers

#### What are your outputs?
The output of the game is seeing the birds get filled up with feathers as they
are picked up by the mouse or the wands.

#### Who is the target audience for your project?
The target audience for this project is kids, and adults who are kids at heart.

#### Where will your project be displayed?
This project could be displayed at an arcade or at an art installation to
entertain the kiddos. 
