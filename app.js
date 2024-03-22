console.log("Har Har Mahadev");
function initializeComparison(){
    const overlay = document.querySelector(".overlay");
       handleComparison(overlay);
}
function handleComparison(overlay){
     let clicked = 0;
     const slider = document.createElement("div");
     slider.setAttribute("class", "slider");
     const parentDiv = overlay.parentElement;
     parentDiv.insertBefore(slider, overlay);
     w = overlay.offsetWidth;
     h = overlay.offsetHeight;
     overlay.style.width = `${w / 2}px`;
     slider.style.left = `${(w/2) - (slider.offsetWidth / 2)}px`;
     slider.style.top = `${(h/2) - (slider.offsetHeight / 2)}px`
     slider.addEventListener("mousedown", slideReady)
     window.addEventListener("mouseup", slidefinish);
     function slideReady(e){
           e.preventDefault();
           clicked = 1;
           window.addEventListener("mousemove", slideMove);
     }
     function slidefinish(e){
          clicked = 0;
     }
     function slideMove(e){
          let pos;
          if(clicked == 0) return;
          pos = getCursorPosition(e);
          if(pos > w){
             pos = w;
          } 
          if(pos < 0){
               pos = 0;
          }
          slide(pos);
        }
     function getCursorPosition(e){
       let x, a;
        e = (e.changedTouches) ? e.changedTouches[0] : e;
        a = overlay.getBoundingClientRect();
        x = e.clientX - a.left;
        return x;
     }
     function slide(x){
        overlay.style.width = `${x}px`;
        console.log(overlay.offsetWidth);
        slider.style.left = `${(overlay.offsetWidth) - (slider.offsetWidth / 2)}px`;
     }
 }
initializeComparison();