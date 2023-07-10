export interface ICoord {
  x: number
  y: number
  delay: number
  width: number
}

const arr: ICoord[] = []

for (let i = 0; i < 100; i++) {
  arr.push({
    x: Math.floor(Math.random() * 100),
    y: 140 - Math.floor(Math.random() * 190),
    delay: Math.floor(Math.random() * 3000),
    width: Math.floor(Math.random() * 200) + 100
  })
}

export { arr }
