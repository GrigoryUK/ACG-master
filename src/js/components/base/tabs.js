import GraphTabsCustom from './helpers'


export default function tabsJs() {
  tabsProducts()
  tabsSearch();
  tabsProduct();
}

function tabsProducts() {

  const tabs = document.querySelector('.tabs__products');

  if (tabs) {
    const tabsProducts = new GraphTabsCustom('tabs__products', '.tabs__secondary--nav', '.tabs__secondary--btn', '.tabs__secondary--panel');
  }
}


function tabsSearch() {

  const tabs = document.querySelector('.tabs__search');

  if (tabs) {
    const tabsSearch = new GraphTabsCustom('tabs__search', '.tabs__secondary--nav', '.tabs__secondary--btn', '.tabs__secondary--panel');
  }
}


function tabsProduct() {

  const tabs = document.querySelector('.tabs__product');

  if (tabs) {
    const tabsSearch = new GraphTabsCustom('tabs__product', '.tabs__third--nav', '.tabs__third--btn', '.tabs__third--panel');
  }
}
