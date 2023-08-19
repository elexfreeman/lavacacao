export { default as LvContainer } from '../../components/common/LvContainer.vue'
export { default as About } from '../../components/About.vue'
export { default as AddToCartBtn } from '../../components/AddToCartBtn.vue'
export { default as Containter } from '../../components/Containter.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Galery } from '../../components/Galery.vue'
export { default as Header } from '../../components/Header.vue'
export { default as HeaderContacts } from '../../components/HeaderContacts.vue'
export { default as HeaderText } from '../../components/HeaderText.vue'
export { default as MainSlider } from '../../components/MainSlider.vue'
export { default as Menu } from '../../components/Menu.vue'
export { default as MobileMenu } from '../../components/MobileMenu.vue'
export { default as WhyWe } from '../../components/WhyWe.vue'
export { default as WhyWeItem } from '../../components/WhyWeItem.vue'
export { default as SkuBtn } from '../../components/Sku/Btn.vue'
export { default as SkuBtnList } from '../../components/Sku/BtnList.vue'
export { default as SkuMain } from '../../components/Sku/Main.vue'
export { default as SkuSlider } from '../../components/Sku/Slider.vue'
export { default as ProductAddData } from '../../components/Product/AddData.vue'
export { default as ProductAddDataItem } from '../../components/Product/AddDataItem.vue'
export { default as ProductBreadcrumbs } from '../../components/Product/Breadcrumbs.vue'
export { default as ProductCompound } from '../../components/Product/Compound.vue'
export { default as ProductDescription } from '../../components/Product/Description.vue'
export { default as ProductList } from '../../components/Product/List.vue'
export { default as ProductListItem } from '../../components/Product/ListItem.vue'
export { default as ProductMain } from '../../components/Product/Main.vue'
export { default as ProductSubTitle } from '../../components/Product/SubTitle.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
