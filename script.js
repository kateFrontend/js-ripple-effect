const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e)  {

    // specify where you click in the viewport
    const x = e.clientX;
    const y = e.clientY;
    //    console.log(x,y)
    
    // specify position of the button - where does it start on the x
    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft
    //    console.log(buttonTop, buttonLeft)

    // calculate where in the button you click
    const xInside = x - buttonLeft
    const yInside = y - buttonTop
    //    console.log(xInside, yInside)

    // create a circle element
    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    this.appendChild(circle)

    // remove it from the DOM after
    setTimeout(() => circle.remove(), 500)
  });
});
