export const LvContainer = () => import('../../components/common/LvContainer.vue' /* webpackChunkName: "components/lv-container" */).then(c => wrapFunctional(c.default || c))
export const About = () => import('../../components/About.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c))
export const AddToCartBtn = () => import('../../components/AddToCartBtn.vue' /* webpackChunkName: "components/add-to-cart-btn" */).then(c => wrapFunctional(c.default || c))
export const Containter = () => import('../../components/Containter.vue' /* webpackChunkName: "components/containter" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Galery = () => import('../../components/Galery.vue' /* webpackChunkName: "components/galery" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const HeaderContacts = () => import('../../components/HeaderContacts.vue' /* webpackChunkName: "components/header-contacts" */).then(c => wrapFunctional(c.default || c))
export const HeaderText = () => import('../../components/HeaderText.vue' /* webpackChunkName: "components/header-text" */).then(c => wrapFunctional(c.default || c))
export const MainSlider = () => import('../../components/MainSlider.vue' /* webpackChunkName: "components/main-slider" */).then(c => wrapFunctional(c.default || c))
export const Menu = () => import('../../components/Menu.vue' /* webpackChunkName: "components/menu" */).then(c => wrapFunctional(c.default || c))
export const MobileMenu = () => import('../../components/MobileMenu.vue' /* webpackChunkName: "components/mobile-menu" */).then(c => wrapFunctional(c.default || c))
export const Product = () => import('../../components/Product.vue' /* webpackChunkName: "components/product" */).then(c => wrapFunctional(c.default || c))
export const ProductAddData = () => import('../../components/ProductAddData.vue' /* webpackChunkName: "components/product-add-data" */).then(c => wrapFunctional(c.default || c))
export const ProductAddDataItem = () => import('../../components/ProductAddDataItem.vue' /* webpackChunkName: "components/product-add-data-item" */).then(c => wrapFunctional(c.default || c))
export const ProductBreadcrumbs = () => import('../../components/ProductBreadcrumbs.vue' /* webpackChunkName: "components/product-breadcrumbs" */).then(c => wrapFunctional(c.default || c))
export const ProductCompound = () => import('../../components/ProductCompound.vue' /* webpackChunkName: "components/product-compound" */).then(c => wrapFunctional(c.default || c))
export const ProductDescription = () => import('../../components/ProductDescription.vue' /* webpackChunkName: "components/product-description" */).then(c => wrapFunctional(c.default || c))
export const ProductList = () => import('../../components/ProductList.vue' /* webpackChunkName: "components/product-list" */).then(c => wrapFunctional(c.default || c))
export const ProductListItem = () => import('../../components/ProductListItem.vue' /* webpackChunkName: "components/product-list-item" */).then(c => wrapFunctional(c.default || c))
export const ProductSubTitle = () => import('../../components/ProductSubTitle.vue' /* webpackChunkName: "components/product-sub-title" */).then(c => wrapFunctional(c.default || c))
export const Sku = () => import('../../components/Sku.vue' /* webpackChunkName: "components/sku" */).then(c => wrapFunctional(c.default || c))
export const SkuBtn = () => import('../../components/SkuBtn.vue' /* webpackChunkName: "components/sku-btn" */).then(c => wrapFunctional(c.default || c))
export const SkuBtnList = () => import('../../components/SkuBtnList.vue' /* webpackChunkName: "components/sku-btn-list" */).then(c => wrapFunctional(c.default || c))
export const SkuSlider = () => import('../../components/SkuSlider.vue' /* webpackChunkName: "components/sku-slider" */).then(c => wrapFunctional(c.default || c))
export const WhyWe = () => import('../../components/WhyWe.vue' /* webpackChunkName: "components/why-we" */).then(c => wrapFunctional(c.default || c))
export const WhyWeItem = () => import('../../components/WhyWeItem.vue' /* webpackChunkName: "components/why-we-item" */).then(c => wrapFunctional(c.default || c))

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
