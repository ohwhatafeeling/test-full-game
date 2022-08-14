class Boot extends Phaser.Scene
{
    constructor()
    {
        super({key: 'Boot', active: true});
    }

    init()
    {
        this.URL = this.sys.game.URL;
        this.CONFIG = this.sys.game.CONFIG;
    }

    preload()
    {
        // bitmap font for PreloadScene...

        // ...path
        this.load.setPath(this.URL + 'assets/Menu/Text/Click_fnt/');

        // ...files
        this.load.bitmapFont('ClickPixel', 'click_0.png', 'click.xml')
    }

    create()
    {
        this.scene.start('Preload');
    }
}