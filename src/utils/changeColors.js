const html = document.querySelector("html");

const transformKey = key => "--" + key;

export const changeColors = ({ colors }) => {
  Object.keys(colors).map(key => 
    html.style.setProperty(transformKey(key), colors[key]) 
  )
}
