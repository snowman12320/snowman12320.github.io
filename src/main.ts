import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBolt,
  faBriefcase,
  faChevronDown,
  faCloud,
  faCode,
  faEnvelope,
  faFileLines,
  faFolderOpen,
  faGears,
  faGlobe,
  faLaptopCode,
  faLocationDot,
  faMoon,
  faPhone,
  faPlug,
  faPrint,
  faRobot,
  faServer,
  faSun,
  faVial,
  faXmark,
  faChartLine,
  faRocket,
  faLink,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faReact, faVuejs, faYoutube } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'
import i18n from './i18n'
import router from './router'
import './assets/main.css'

library.add(
  faArrowUpRightFromSquare,
  faBolt,
  faBriefcase,
  faChevronDown,
  faCloud,
  faCode,
  faEnvelope,
  faFileLines,
  faFolderOpen,
  faGears,
  faChartLine,
  faGithub,
  faGlobe,
  faLaptopCode,
  faLinkedin,
  faLocationDot,
  faMoon,
  faPhone,
  faPlug,
  faPrint,
  faReact,
  faRobot,
  faRocket,
  faServer,
  faSun,
  faVial,
  faXmark,
  faVuejs,
  faYoutube,
  faLink,
)

createApp(App).component('FaIcon', FontAwesomeIcon).use(i18n).use(router).mount('#app')
