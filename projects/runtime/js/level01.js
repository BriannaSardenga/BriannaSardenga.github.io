var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        function sawBlade(sawX, bladeY){
        var hitZoneSize = 25;
        var damageFromObstacle = 10;  
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
             sawBladeHitZone.x = sawX;
             sawBladeHitZone.y = bladeY;
             game.addGameItem(sawBladeHitZone);
        var obstacleImage = draw.bitmap("img/sawblade.png");
        sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;}
    sawBlade(730, 320);
    sawBlade(630, 120);
    sawBlade(830, 210);

function obby(x, y){
    var hitZoneSize = 25;
    var damageFromObstacle = 10;  
        var obbyHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
         obbyHitZone.x = sawX;
         obbyHitZone.y = bladeY;
         game.addGameItem(obbyHitZone);
    var obstacleImage = draw.bitmap("img/sawblade.png");
    obbyHitZone.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;}
obby(730, 320);

}
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
