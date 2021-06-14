serial.setBaudRate(BaudRate.BaudRate9600)
basic.forever(function () {
    serial.writeNumber(330)
    basic.pause(200)
})
