const CIRCLE = Math.PI * 2;

const tiles = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
]

const map = {
  size: Math.sqrt(tiles.length),
  wallGrid: Uint8Array.from(tiles)
}

const keys = { 'left': false, 'right': false, 'forward': false, 'backward': false };

const player = {
  x: 15,
  y: 15,
  direction: Math.PI * 0.3
}

const getTile = (map, xraw, yraw) => {
  const x = Math.floor(xraw)
  const y = Math.floor(yraw)
  if (x < 0 || x > map.size - 1 || y < 0 || y > map.size - 1) return -1;
  return map.wallGrid[y * map.size + x];
}

const cast = (map, point, angle, range) => {
  const sin = Math.sin(angle)
  const cos = Math.cos(angle)
  const noWall = { length2: Infinity }

  const ray = (origin) => {
    const stepX = step(sin, cos, origin.x, origin.y)
    const stepY = step(cos, sin, origin.y, origin.x, true)
    const nextStep = stepX.length2 < stepY.length2
      ? inspect(stepX, 1, 0, origin.distance, stepX.y)
      : inspect(stepY, 0, 1, origin.distance, stepY.x)

    if (nextStep.distance > range) return [origin]
    return [origin].concat(ray(nextStep))
  }

  const step = (rise, run, x, y, inverted) => {
    if (run === 0) return noWall
    var dx = run > 0 ? Math.floor(x + 1) - x : Math.ceil(x - 1) - x
    var dy = dx * (rise / run)
    return {
      x: inverted ? y + dy : x + dx,
      y: inverted ? x + dx : y + dy,
      length2: dx * dx + dy * dy
    }
  }

  const inspect = (step, shiftX, shiftY, distance, offset) => {
    var dx = cos < 0 ? shiftX : 0
    var dy = sin < 0 ? shiftY : 0
    step.height = getTile(map, step.x - dx, step.y - dy)
    step.distance = distance + Math.sqrt(step.length2)
    if (shiftX) {
      step.shading = cos < 0 ? 2 : 0
    } else {
      step.shading = sin < 0 ? 2 : 1
    }
    step.offset = offset - Math.floor(offset)
    return step
  }

  return ray({ x: point.x, y: point.y, height: 0, distance: 0 })
}

const resolution = 320
const focalLength = 0.8
const range = 30
const drawHeight = window.innerHeight
const drawWidth = window.innerWidth
const spacing = drawWidth / resolution

const project = (height, angle, distance) => {
  var z = distance * Math.cos(angle)
  var wallHeight = drawHeight * height / z
  var bottom = drawHeight / 2 * (1 + 1 / z)
  return {
    top: bottom - wallHeight,
    height: wallHeight
  }
}

const rotate = (angle) => {
  player.direction = (player.direction + angle + CIRCLE) % (CIRCLE);
}

const walk = (distance, map) => {
  const dx = Math.cos(player.direction) * distance;
  const dy = Math.sin(player.direction) * distance;
  if (getTile(map, player.x + dx, player.y) <= 0) player.x += dx;
  if (getTile(map, player.x, player.y + dy) <= 0) player.y += dy;
  player.paces += distance;
}

const updatePlayer = (seconds) => {
  if (keys.left) rotate(-Math.PI * seconds);
  if (keys.right) rotate(Math.PI * seconds);
  if (keys.forward) walk(3 * seconds, map);
  if (keys.backward) walk(-3 * seconds, map);
}
const render = (seconds) => {
  for (var column = 0; column < resolution; column++) {
    var x = column / resolution - 0.5;
    var angle = Math.atan2(x, focalLength);
    var ray = cast(map, player, player.direction + angle, range);
    drawColumn(column, ray, angle, map);
  }
}

const drawColumn = (column, ray, angle, map) => {
  const lightRange = 0.3
  const left = Math.floor(column * spacing)
  const width = Math.ceil(spacing);
  const hit = ray.find(r => r.height > 0)
  if (!hit) return

  //var textureX = Math.floor(texture.width * step.offset);
  var wall = project(hit.height, angle, hit.distance);

  //ctx.drawImage(texture.image, textureX, 0, 1, texture.height, left, wall.top, width, wall.height);
  const currentWall = document.getElementById(`wall${column}`) || document.getElementById("bg").appendChild(document.createElement('div'))
  const alpha = Math.max((hit.distance + hit.shading) / lightRange, 0) / 100;
  currentWall.id = `wall${column}`
  currentWall.className = "column"
  currentWall.style.left = `${left}px`
  currentWall.style.top = `${wall.top}px`
  currentWall.style.width = `${width}px`
  currentWall.style.height = `${wall.height}px`
  currentWall.style.backgroundColor = `rgba(255,0,0,${1 - alpha})`
}

const update = (seconds) => {
  updatePlayer(seconds)
  render(seconds)
}

let lastTime = 0


const start = () => {
  const codes = { 37: 'left', 39: 'right', 38: 'forward', 40: 'backward' };
  const onKey = (val) => {
    return (e) => {
      const state = codes[e.keyCode];
      if (typeof state === 'undefined') return;
      keys[state] = val;
      e.preventDefault && e.preventDefault();
      e.stopPropagation && e.stopPropagation();
    }
  }
  document.addEventListener('keydown', onKey(true), false);
  document.addEventListener('keyup', onKey(false), false);
  requestAnimationFrame(frame)
}

const frame = (time) => {
  var seconds = (time - lastTime) / 1000
  lastTime = time
  if (seconds < 0.2) update(seconds)
  requestAnimationFrame(frame)
}

start()