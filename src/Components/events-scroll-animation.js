var observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        // console.log(entry)
      if(entry.isIntersecting){
        //   console.log("in")
        entry.target.style.opacity = "100%";
        entry.target.style.filter = "blur(0px)";
      }
      else{
        // console.log("out")
        entry.target.style.opacity = "0%";
        entry.target.style.filter = "blur(5px)";
      }
    })
  })

var cards = document.querySelectorAll(".event-card")
cards.forEach((card)=>{
    observer.observe(card)
})

console.log("loaded")