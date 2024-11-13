controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    James.vy = -111
})
let James: Sprite = null
James = sprites.create(img`
    . . . . . . . c c . . . . . . . 
    . . . . . . . c 2 c . . . . . . 
    . . . . c c c 2 2 2 c c . . . . 
    . . c c b c 2 2 2 2 c c c c . . 
    . c b b 2 b 2 2 2 2 b 2 b b c . 
    . c b 2 2 b b 2 2 b b 2 2 b c . 
    . . f 2 2 2 b b b b 2 2 2 c . . 
    . . f f 2 2 2 2 2 2 2 2 f . . . 
    . . f f 5 5 b f b f 5 f . . . . 
    . . f f f 5 5 5 5 5 5 f . . . . 
    . . . f f 5 f 5 5 f 5 f . . . . 
    . . . 5 5 f 5 f f 5 f . . . . . 
    . . . 5 b b 5 b b 2 f . . . . . 
    . . . 5 b b 5 2 2 2 2 f . . . . 
    . . . . 5 5 2 2 2 2 b c . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(James, 100, 0)
James.ay = 300
James.setStayInScreen(true)
let cocopop = sprites.create(img`
    .............ccfff..............
    ............cddbbf..............
    ...........cddbbf...............
    ..........fccbbcf............ccc
    ....ffffffccccccff.........ccbbc
    ..ffbbbbbbbbbbbbbcfff.....cdbbc.
    ffbbbbbbbbbcbcbbbbcccff..cddbbf.
    fbcbbbbbffbbcbcbbbcccccfffdbbf..
    fbbb1111ff1bcbcbbbcccccccbbbcf..
    .fb11111111bbbbbbcccccccccbccf..
    ..fccc33cc11bbbbccccccccfffbbcf.
    ...fc131c111bbbcccccbdbc...fbbf.
    ....f33c111cbbbfdddddcc.....fbbf
    .....ff1111fbdbbfddcc........fff
    .......cccccfbdbbfc.............
    .............fffff..............
    `, SpriteKind.Enemy)
cocopop.setPosition(115, 17)
cocopop.follow(James, 30)
