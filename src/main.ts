import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBolt,
  faBriefcase,
  faChevronDown,
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
  faServer,
  faSun,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faReact, faVuejs, faYoutube } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'
import i18n from './i18n'
import './assets/main.css'

library.add(
  faArrowUpRightFromSquare,
  faBolt,
  faBriefcase,
  faChevronDown,
  faCode,
  faEnvelope,
  faFileLines,
  faFolderOpen,
  faGears,
  faGithub,
  faGlobe,
  faLaptopCode,
  faLinkedin,
  faLocationDot,
  faMoon,
  faPhone,
  faPlug,
  faReact,
  faServer,
  faSun,
  faVuejs,
  faYoutube,
)

createApp(App).component('FaIcon', FontAwesomeIcon).use(i18n).mount('#app')
