import filtersJs from './base/filters'
import mapJs from './base/map'
import menuJs from './base/menu'
import sliders from './base/sliders'
import smoothScroll from "./base/smoothScroll"
import tabsJs from './base/tabs'
import tabsToDropdown from './base/tabsToDropdown'
import validateJS from './base/validate'


document.addEventListener('DOMContentLoaded', (event) => {
  smoothScroll();
  menuJs();
  filtersJs();
  sliders()
  tabsJs();
  tabsToDropdown();
  mapJs();
  validateJS()
})
