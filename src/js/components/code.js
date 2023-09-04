import filtersJs from './base/filters'
import sliders from './base/sliders'
import smoothScroll from "./base/smoothScroll"
import tabsJs from './base/tabs'
import tabsToDropdown from './base/tabsToDropdown'


document.addEventListener('DOMContentLoaded', (event) => {
  smoothScroll()
  filtersJs();
  sliders()
  tabsJs();
  tabsToDropdown();

})
