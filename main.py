def on_button_pressed_a():
    global list2
    list2 = [[randint(0, 5), 1, 0, 1, list2[0][0]],
        [randint(0, 5), 0, list2[1][0], 0, list2[1][0]],
        [0, randint(0, 5), list2[2][1], list2[2][1], 0],
        [randint(0, 5), list2[3][0], 0, list2[3][0], 0],
        [randint(0, 5),
            list2[4][0],
            randint(0, 5),
            list2[4][0],
            list2[4][2]]]
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global _type
    if _type == 0:
        _type = 1
    else:
        _type = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

_type = 0
list2: List[List[number]] = []
list2 = [[0, 2, 0, 2, 0],
    [3, 0, 3, 0, 3],
    [0, 1, 0, 1, 0],
    [2, 0, 2, 0, 2],
    [0, 3, 0, 3, 0]]
for y in range(5):
    for x in range(5):
        led.plot_brightness(x, y, 102 * list2[y][x])
        basic.pause(100)
basic.pause(500)
for index in range(3):
    basic.clear_screen()
    for y2 in range(5):
        for x2 in range(5):
            led.plot_brightness(x2, y2, 102 * list2[y2][x2])
    basic.pause(400)
basic.pause(200)
_type = randint(0, 1)
while True:
    if _type == 0:
        list2.append(list2.shift())
    else:
        list2.unshift(list2.pop())
    basic.pause(100)
    for y3 in range(5):
        for x3 in range(5):
            led.plot_brightness(x3, y3, 102 * list2[y3][x3])

def on_forever():
    pass
basic.forever(on_forever)
