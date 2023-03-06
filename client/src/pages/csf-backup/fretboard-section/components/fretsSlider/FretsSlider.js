// import React from 'react';

// import './FretsSlider.scss';


// class Slider {
//   constructor (rangeElement, valueElement, options) {
//     this.rangeElement = rangeElement
//     this.valueElement = valueElement
//     this.options = options

//     // Attach a listener to "change" event
//     this.rangeElement.addEventListener('input', this.updateSlider.bind(this))
//   }

//   // Initialize the slider
//   init() {
//     this.rangeElement.setAttribute('min', options.min)
//     this.rangeElement.setAttribute('max', options.max)
//     this.rangeElement.value = options.cur

//     this.updateSlider()
//   }

//   // Format the money
//   asMoney(value) {
//     return '$' + parseFloat(value)
//       .toLocaleString('en-US', { maximumFractionDigits: 2 })
//   }

//   generateBackground(rangeElement) {   
//     if (this.rangeElement.value === this.options.min) {
//       return
//     }

//     let percentage =  (this.rangeElement.value - this.options.min) / (this.options.max - this.options.min) * 100
//     return 'background: linear-gradient(to right, #50299c, #7a00ff ' + percentage + '%, #d3edff ' + percentage + '%, #dee1e2 100%)'
//   }

//   updateSlider (newValue) {
//     this.valueElement.innerHTML = this.asMoney(this.rangeElement.value)
//     this.rangeElement.style = this.generateBackground(this.rangeElement.value)
//   }
// }

// let rangeElement = document.querySelector('.range [type="range"]')
// let valueElement = document.querySelector('.range .range__value span') 

// let options = {
//   min: 2000,
//   max: 75000,
//   cur: 37500
// }

// if (rangeElement) {
//   let slider = new Slider(rangeElement, valueElement, options)

//   slider.init()
// }

// const FretsSlider = () => {
//   return (
//     <div className="container">
//       <input id="frets" type="range" min="0" max="24" list="values"/>
//       {/* <div className='display'>
//         <label for="frets">Volume</label>
//         <h4>Count</h4>
//       </div> */}
//       <datalist id="values">
//         <option value="0" label="0"></option>
//         <option value="25" label="25"></option>
//         <option value="50" label="50"></option>
//         <option value="75" label="75"></option>
//         <option value="100" label="100"></option>
//       </datalist>
//     </div>
//   );
// };

// export default FretsSlider;


