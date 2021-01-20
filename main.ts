radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        xValue = value
    } else {
        yValue = value
    }
})
let rightwheel = 0
let leftwheel = 0
let yValue = 0
let xValue = 0
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.showIcon(IconNames.Triangle)
radio.setGroup(90)
xValue = 0
yValue = 0
basic.forever(function () {
    leftwheel = yValue + xValue
    rightwheel = yValue - xValue
    RingbitCar.freestyle(leftwheel, rightwheel)
})
