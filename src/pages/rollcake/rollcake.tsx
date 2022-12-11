import React from 'react'
import '../../App.css'
import { P5CanvasInstance, ReactP5Wrapper } from 'react-p5-wrapper'

type Roll = {
  center: { x: number; y: number }
}

const rollList: Roll[] = [
  {
    center: { x: 0, y: 450 },
  },
]
const diamterList = [90, 70, 45, 20, 0]

const Roll: React.FC = () => {
  let rowFlg = false

  const sketch = (p: P5CanvasInstance) => {
    p.setup = () => {
      p.createCanvas(800, 500)
      p.frameRate(10)
    }

    p.draw = () => {
      p.background(p.color('#e0ddb8'))
      p.noFill()
      rollList.forEach((item, index) => {
        diamterList.forEach((dia, index) => {
          if (index % 2 === 1) {
            p.strokeWeight(10)
            p.stroke(255, 255, 255, 255)
          } else {
            p.strokeWeight(15)
            p.stroke(0, 84, 56, 255)
          }
          p.ellipse(item.center.x, item.center.y, dia)
        })
        if (index === rollList.length - 1) {
          if (item.center.x + 100 < 900) {
            rollList.push({
              center: { x: item.center.x + 100, y: item.center.y },
            })
          } else {
            if (item.center.y - 90 < 250) {
              rollList.forEach((roll) => {
                roll.center.y = roll.center.y + 90
              })
            } else {
              rowFlg = !rowFlg
              rollList.push({
                center: {
                  x: rowFlg ? 50 : 0,
                  y: item.center.y - 90,
                },
              })
            }
          }
        }
      })
    }
  }

  return <ReactP5Wrapper sketch={sketch} />
}

export default Roll
