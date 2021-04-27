img = "";
noseX = "";
noseY = "";
GameStatus = "";
marioX = 325;
marioY = 325;

function startGame()
{
	GameStatus = "start";
	document.getElementById("status").innerHTML = "Game Is Loading";
}

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	img = loadImage("mario05.png")
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console')
}

function draw() {
	game()
}

function gotPoses(results)
{
	if(results.length > 0)
	{
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function game()
{
	console.log("noseX = " + noseX +" ,noseY = "+ noseY);
	instializeInDraw();
	moveEnvironment(mario);
	drawSprites();
}