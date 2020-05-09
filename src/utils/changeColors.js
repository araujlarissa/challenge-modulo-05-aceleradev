const html = document.querySelector("html");

export const changeColors = ({ colors }) => {
  Object.keys(colors).map(key => 
    html.style.setProperty(`--${key}`, colors[key]) 
  )
}
