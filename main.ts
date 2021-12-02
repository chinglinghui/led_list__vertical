input.onButtonPressed(Button.A, function () {
    list = [
    [
    randint(0, 5),
    1,
    0,
    1,
    list[0][0]
    ],
    [
    randint(0, 5),
    0,
    list[1][0],
    0,
    list[1][0]
    ],
    [
    0,
    randint(0, 5),
    list[2][1],
    list[2][1],
    0
    ],
    [
    randint(0, 5),
    list[3][0],
    0,
    list[3][0],
    0
    ],
    [
    randint(0, 5),
    list[4][0],
    randint(0, 5),
    list[4][0],
    list[4][2]
    ]
    ]
})
input.onButtonPressed(Button.B, function () {
    if (_type == 0) {
        _type = 1
    } else {
        _type = 0
    }
})
let _type = 0
let list: number[][] = []
list = [
[
0,
2,
0,
2,
0
],
[
3,
0,
3,
0,
3
],
[
0,
1,
0,
1,
0
],
[
2,
0,
2,
0,
2
],
[
0,
3,
0,
3,
0
]
]
for (let y = 0; y <= 4; y++) {
    for (let x = 0; x <= 4; x++) {
        led.plotBrightness(x, y, 102 * list[y][x])
        basic.pause(100)
    }
}
basic.pause(500)
for (let index = 0; index < 3; index++) {
    basic.clearScreen()
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plotBrightness(x, y, 102 * list[y][x])
        }
    }
    basic.pause(400)
}
basic.pause(200)
_type = randint(0, 1)
while (true) {
    if (_type == 0) {
        list.push(list.shift())
    } else {
        list.unshift(list[list.length - 1])
    }
    basic.pause(100)
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plotBrightness(x, y, 102 * list[y][x])
        }
    }
}
basic.forever(function () {
	
})
