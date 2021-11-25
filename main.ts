let list2 = [
[
0,
2,
0,
2,
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
        led.plotBrightness(x, y, 51 * list2[y][x])
        basic.pause(100)
    }
}
basic.pause(500)
for (let index = 0; index < 3; index++) {
    basic.clearScreen()
    basic.pause(200)
    for (let y2 = 0; y2 <= 4; y2++) {
        for (let x2 = 0; x2 <= 4; x2++) {
            led.plotBrightness(x2, y2, 51 * list2[y2][x2])
        }
    }
    basic.pause(200)
}
basic.clearScreen()
while (true) {
    for (let index = 0; index < randint(10, 20); index++) {
        list2.unshift(list2.pop())
        basic.pause(100)
        for (let y3 = 0; y3 <= 4; y3++) {
            for (let x3 = 0; x3 <= 4; x3++) {
                led.plotBrightness(x3, y3, 51 * list2[y3][x3])
            }
        }
    }
    list2 = [
    [
    randint(0, 5),
    1,
    0,
    1,
    list2[0][0]
    ],
    [
    randint(0, 5),
    0,
    list2[1][0],
    0,
    list2[1][0]
    ],
    [
    0,
    randint(0, 5),
    list2[2][1],
    list2[2][1],
    0
    ],
    [
    randint(0, 5),
    list2[3][0],
    0,
    list2[3][0],
    0
    ],
    [
    randint(0, 5),
    list2[4][0],
    randint(0, 5),
    list2[4][0],
    list2[4][2]
    ]
    ]
}
basic.forever(function () {
	
})
