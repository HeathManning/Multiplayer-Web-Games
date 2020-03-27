var socket = io.connect("http://101.186.164.176");
socket.on("connection", function() 
{
    socket.emit("new player", "player name here");
});





//testing lightpath functions
var lightPath = new LightPath(new Vec2(0, 0), null);
var lightPath = new LightPath(new Vec2(1, 0), lightPath);
var lightPath = new LightPath(new Vec2(2, 0), lightPath);
var lightPath = new LightPath(new Vec2(3, 0), lightPath);
var lightPath = new LightPath(new Vec2(3, -1), lightPath);
var lightPath = new LightPath(new Vec2(3, -2), lightPath);
var lightPath = new LightPath(new Vec2(4, -2), lightPath);
var lightPath = new LightPath(new Vec2(5, -2), lightPath);

console.log(lightPath.IsOverlapping(new Vec2(0, 1)));
console.log(lightPath.IsOverlapping(new Vec2(4, -2)));

console.log(lightPath.stringify());