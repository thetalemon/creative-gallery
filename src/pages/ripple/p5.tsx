import React from 'react'
import { P5CanvasInstance, ReactP5Wrapper } from 'react-p5-wrapper'

function randBoolean() {
  return Math.random() < 0.05
}

type Ripple = {
  center: { x: number; y: number }
  diameterList: number[]
}

const rippleList: Ripple[] = []

const P5: React.FC = () => {
  const sketch = (p: P5CanvasInstance) => {
    p.setup = () => {
      p.createCanvas(800, 500)
    }

    p.draw = () => {
      p.background(p.color('#add1ff'))
      p.noFill()
      rippleList.forEach((item, rippleIndex) => {
        if (item.diameterList.length === 0) {
          rippleList.splice(rippleIndex, 1)
          return
        }

        item.diameterList.forEach((diameter, diameterIndex) => {
          if (Math.max(...item.diameterList) > 600) {
            rippleList[rippleIndex].diameterList.splice(diameterIndex, 1)
            return
          }
          p.strokeWeight(1)
          p.stroke(44, 115, 255, 100 - (diameter - 300))
          p.ellipse(item.center.x, item.center.y, diameter)
          rippleList[rippleIndex].diameterList[diameterIndex] = diameter + 5
          if (0 === diameterIndex && randBoolean()) {
            rippleList[rippleIndex].diameterList.unshift(0)
          }
        })
      })
    }

    p.mouseClicked = () => {
      rippleList.push({
        center: { x: p.mouseX, y: p.mouseY },
        diameterList: [0],
      })
    }
  }

  return <ReactP5Wrapper sketch={sketch} />
}

export default P5
