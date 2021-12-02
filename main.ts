function 點亮 (間隔: number) {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plotBrightness(x, y, 51 * list[y][x])
            basic.pause(間隔)
        }
    }
}
// 隨機形成圖案
// 還是有一些限制
// 避免太過雜亂，並且保持左右對稱
// 
input.onButtonPressed(Button.AB, function () {
    list = [
    [
    randint(0, 5),
    3,
    0,
    3,
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
    0,
    randint(0, 5),
    0,
    list[3][1],
    0
    ],
    [
    randint(0, 5),
    list[4][0],
    randint(0, 5),
    list[4][0],
    list[4][0]
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
0,
5,
0,
0
],
[
0,
4,
4,
4,
0
],
[
0,
3,
0,
3,
0
],
[
2,
2,
0,
2,
2
],
[
1,
0,
0,
0,
1
]
]
點亮(100)
basic.pause(500)
for (let index = 0; index < 3; index++) {
    basic.clearScreen()
    點亮(0)
    basic.pause(400)
}
basic.pause(200)
_type = randint(0, 1)
while (true) {
    if (_type == 0) {
        list.push(list.shift())
    } else {
        list.unshift(list.pop())
    }
    點亮(0)
    basic.pause(50)
}
basic.forever(function () {
	
})
