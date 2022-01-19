document.addEventListener("mousemove", (e) => {
  const xpct = e.pageX / window.innerWidth
  const ypct = e.pageY / window.innerHeight
  const scene = document.getElementById("bg")
  scene.style.perspectiveOrigin = `${xpct * -20 + 58}% ${ypct * -20 + 60}%`

  const sky = document.getElementById("sky")
  sky.style.height = `${ypct * -20 + 56}%`

  const logo = document.getElementById("logo")

  logo.style.filter = `drop-shadow(${26 - (52 * xpct)}px ${26 - (52 * ypct)}px 6px rgba(255,255,255,0.8))`
})