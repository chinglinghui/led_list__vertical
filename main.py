list2 = [[0, 2, 0, 2, 0],
    [5, 0, 5, 0, 5],
    [0, 2, 0, 2, 0],
    [4, 0, 4, 0, 4],
    [0, 3, 0, 3, 0]]
for y in range(5):
    for x in range(5):
        led.plot_brightness(x, y, 51 * list2[y][x])
        basic.pause(100)
basic.pause(500)
for index in range(3):
    basic.clear_screen()
    basic.pause(200)
    for y2 in range(5):
        for x2 in range(5):
            led.plot_brightness(x2, y2, 51 * list2[y2][x2])
    basic.pause(200)
basic.clear_screen()
while True:
    for index2 in range(randint(30, 50)):
        if randint(0, 1) == 0:
            list2.unshift(list2.pop())
        else:
            list2.append(list2.shift())
        basic.pause(100)
        for y3 in range(5):
            for x3 in range(5):
                led.plot_brightness(x3, y3, 51 * list2[y3][x3])
    list2 = [[randint(0, 5), 1, 0, 1, list2[0][0]],
        [randint(0, 5), 0, list2[1][0], 0, list2[1][0]],
        [0, randint(0, 5), list2[2][1], list2[2][1], 0],
        [randint(0, 5), list2[3][0], 0, list2[3][0], 0],
        [randint(0, 5),
            list2[4][0],
            randint(0, 5),
            list2[4][0],
            list2[4][2]]]

def on_forever():
    pass
basic.forever(on_forever)
