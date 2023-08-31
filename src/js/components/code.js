import sliders from './base/sliders'
import smoothScroll from "./base/smoothScroll"
import tabsToDropdown from './base/tabsToDropdown'


document.addEventListener('DOMContentLoaded', (event) => {
  smoothScroll()
  tabsToDropdown();
  sliders()

})
