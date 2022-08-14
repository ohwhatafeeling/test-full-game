class Preload extends Phaser.Scene
{
    constructor()
    {
        super({key: 'Preload', active: false});
    }

    init()
    {
        // Globals
        this.URL = this.sys.game.URL;
        this.CONFIG = this.sys.game.CONFIG;
    }

    preload()
    {
        // Create loading bar
        this.createLoadingBar();

        // Spritesheets...
        // ...path
        this.load.setPath(this.URL + 'assets/Main Characters/');

        // ...files
        this.load.spritesheet('maskDudeRun', 'Mask Dude/Run (32x32).png', {frameWidth: 32, frameHeight: 32});
        this.load.spritesheet('maskDudeIdle', 'Mask Dude/Idle (32x32).png', {frameWidth: 32, frameheight: 32});
        this.load.spritesheet('maskDudeJump', 'Mask Dude/Jump (32x32).png', {frameWidth: 32, frameheight: 32});
    }

    create()
    {
        // Go to menu
        this.time.addEvent({
            delay: 2000,
            callback: () => {this.scene.start('Menu');},
            callabackScope: this
        });
    }

    createLoadingBar()
    {
        // Title
        this.title = new Text(
            this,
            this.CONFIG.centerX,
            75,
            'Loading Game hello',
            'preload',
            0.5
        );

        // Progress text
        this.txt_progress = new Text(
            this,
            this.CONFIG.centerX,
            this.CONFIG.centerY - 5,
            'Loading...',
            'preload',
            {x: 0.5, y: 1}
        );

        // Progress Bar
        let x = 10;
        let y = this.CONFIG.centerY + 5;
        let w = this.CONFIG.width - (2 * x);
        let h = 18;

        this.progress = this.add.graphics({x: x, y: y});
        this.border = this.add.graphics({x: x, y: y});

        // Progress callback
        this.load.on('progress', this.onProgress, this);
    }

    onProgress(val)
    {
        // Width of progress bar
        let w = this.CONFIG.width - 2 * this.progress.x;
        let h = 18;

        this.progress.clear();
        this.progress.fillStyle('0xffffff', 1);
        this.progress.fillRect(0, 0, w * val, h);

        this.border.clear();
        this.border.lineStyle(2, '0x4d6592', 1);
        this.border.strokeRect(0, 0, w * val, h);

        // Precentage in progress text
        this.txt_progress.setText(Math.round(val * 100) + '%');

        console.log(this.txt_progress.text);
    }
}