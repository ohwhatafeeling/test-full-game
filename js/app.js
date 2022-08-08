const App = function() 
{
    'use strict';

    this.VERSION = '0.0.1';
    this.IS_DEV = true;
};

App.prototype.start = function()
{
    'use strict';

    // Scenes
    let scenes = [];

    scenes.push(Boot);
    scenes.push(Preload);
    scenes.push(Menu);

    // Game config
    const config = {
        type: Phaser.AUTO,
        parent: 'phaser-app',
        title: 'Test - full game',
        width: 360 / 2,
        height: 640 / 2,
        scene: scenes,
        backgroundColor: 0xb3f5f3
    };

    // Create game app
    var game = new Phaser.Game(config);

    // Globals
    game.IS_DEV = this.IS_DEV;
    game.VERSION = this.VERSION;

    game.url = '';

    game.CONFIG = {
        width: config.width,
        height: config.height,
        centerX: Math.round(0.5 * config.width),
        centerY: Math.round(0.5 * config.height),
        tile: 16
    };

};