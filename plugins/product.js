class ProductUtil {
  getSkuList(product) {
    let resp = [];
    if (product?.attributes?.sku_choco_candle?.length) {
      resp = product?.attributes?.sku_choco_candle;
    }
    return resp;
  }
}

export default ({}, inject) => {
  inject("productUtil", new ProductUtil());
};
