let list = [
[
0,
3,
0,
3,
0
],
[
5,
0,
5,
0,
5
],
[
0,
2,
0,
2,
0
],
[
4,
0,
4,
0,
4
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
        led.plotBrightness(x, y, 51 * list[y][x])
        basic.pause(100)
    }
}
basic.pause(500)
for (let index = 0; index < 3; index++) {
    basic.clearScreen()
    basic.pause(200)
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plotBrightness(x, y, 51 * list[y][x])
        }
    }
    basic.pause(200)
}
basic.clearScreen()
while (true) {
    for (let index = 0; index < randint(10, 20); index++) {
        if (randint(0, 1) == 0) {
            list.unshift(list.pop())
        } else {
            list.insertAt(4, list.shift())
            list.shift()
        }
        basic.pause(100)
        for (let y = 0; y <= 4; y++) {
            for (let x = 0; x <= 4; x++) {
                led.plotBrightness(x, y, 51 * list[y][x])
            }
        }
    }
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
}
basic.forever(function () {
	
})
