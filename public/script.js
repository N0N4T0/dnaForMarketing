// var widthResolution = window.innerWidth 
//     || document.documentElement.clientWidth
//     || document.body.clientWidth

// if(widthResolution <= 800){
//     alert("Js is running")
// }    


class SlideResults {
  constructor(id) {
      this.slide = document.querySelector(`[data-slide="${id}"]`);
      this.active = 0
      this.init();
  }

  activeSlide(index){
      this.active = index;
      this.items.forEach(item => item.classList.remove("active"))
      this.items[index].classList.add('active')
      this.autoSlide()
  }

  next(){
    if (this.active < this.items.length - 1) {
        this.activeSlide(this.active + 1);
    } else {
        this.activeSlide(0);
    }
  }

  autoSlide(){
      setTimeout(this.next, 5000)
  }

  // inicia configurações gerais
  init(){
      this.next = this.next.bind(this);

      this.items = this.slide.querySelectorAll(".slide-items > *")

      this.activeSlide(0)
  }
}

new SlideResults('slide')

