const robot = require('robotjs')

const sleep = second => new Promise(
  resolve => setTimeout(() => resolve(true), (second * 1000))
)

robot.setMouseDelay(0)

async function run() {

  const operation = async () => {
    // Change date.
    await robot.moveMouseSmooth(200, 200)
    await robot.mouseClick()
    await sleep(1)
    await robot.moveMouseSmooth(200, 345)
    await robot.mouseClick()

    // Save
    await robot.moveMouseSmooth(760, 140)
    await robot.mouseClick()

    // Dont send
    await robot.moveMouseSmooth(830, 580)
    await robot.mouseClick()
  }

  const action = async (x, y, ex, ey, first = false) => {
    // Change first date
    // Open date modal
    await robot.moveMouseSmooth(x, y)
    await robot.mouseClick()
    if(first === true) await robot.mouseClick()
    await sleep(1)
    // Click on edit button
    await robot.moveMouseSmooth(ex, ey)
    await robot.mouseClick()
    await sleep(1)
    await operation()
    await sleep(1)
    await robot.moveMouseSmooth(630, 130)
    await robot.mouseClick()
    await sleep(1)
  }

  await robot.moveMouseSmooth(380, 130)
  await robot.mouseClick()

  // for(const a of [1,2]) {
    // await robot.moveMouseSmooth(380, 130)
    // await robot.mouseClick()
    await sleep(1)
    await action(550, 440, 860, 440)
    await action(650, 440, 1020, 440)
    await action(800, 440, 1170, 440)
    // await action(940, 440, 720, 440)
    // await action(1180, 440, 870, 440)
  // }

}

run()