// JS
import './js/'

// SASS
import './assets/sass/main.sass'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

// Vue.js
window.Vue = require('vue')


const dinosaurs = [
  {
    id: 1,
    name: 'Tyrannosaurus rex',
    family: 'Tyrannosauridae',
    weight: '4500 - 14000 kg',
    speed: '27 km/h',
    price: '15 000$',
    image: './assets/img/dino1.png',
    about: 'The species Tyrannosaurus rex (rex meaning "king" in Latin), often called T. rex or colloquially T-Rex, is one of the most well-represented of the large theropods. ... Like other tyrannosaurids, Tyrannosaurus was a bipedal carnivore with a massive skull balanced by a long, heavy tail.'
  },
  {
    id: 2,
    name: 'Triceratops',
    family: 'Ceratopsidae',
    weight: '6000 - 12000 kg',
    speed: '32 km/h',
    price: '10 000$',
    image: './assets/img/dino2.png',
    about: 'The Triceratops is one of the most easily recognizable dinosaurs due to its large body, unique frill and three horns. It needed its three horns to try and protect itself from the Tyrannosaurus Rex which lived during the same time period. ... The Triceratops was a plant eating (herbivore) dinosaur.'
  },
  {
    id: 3,
    name: 'Velociraptor',
    family: 'Dromaeosauridae',
    weight: '15 kg',
    speed: '64 km/h',
    price: '2 000$',
    image: './assets/img/dino3.png',
    about: 'Velociraptor is one of the most bird-like dinosaurs ever discovered. It was small and fast, and the sickle-shaped claw on the second toe of each foot made it a formidable predator. A special bone in its wrist allowed it to swivel its wrist sideways in a flapping motion and to fold its arm against its body like a bird.'
  }
]


// Vue init
const app = new Vue({
  el: '#app',
  data: {
    dinosaurs,
    dinosaurCard: dinosaurs[0],
    visiblePhone: false,
    searchDino: '',
    showModal: false,
    status: [],
    cartValue: 0,
    dinoCartFlies: false
  },

  computed: {
    filterSearch() {
      return this.dinosaurs.filter(dino => {
        return dino.name.toLowerCase().indexOf(this.searchDino.toLowerCase().trim()) > -1
      })
    }
  },

  methods: {
    activateDino(index) {
      this.dinosaurCard = this.filterSearch[index]
    },
    buyOrder() {
      let statusObj = {
        date: new Date().toLocaleString(),
        text: 'Congratulation! You have bought a dinosaur'
      }

      this.status.push(statusObj)

      setTimeout(() => {
        this.status.splice(statusObj, 1)
      }, 5000)

      this.showModal = !this.showModal
      this.dinoCartFlies = true
      this.cartValue++

      setTimeout(() => {
        this.dinoCartFlies = false
      }, 2000)
    }
  }
});

