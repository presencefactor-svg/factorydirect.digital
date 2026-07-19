const HIDDEN_PRO_ZIPS = new Set([
  '/downloads/woo/marketplace-connector-pl-pro-for-woocommerce.zip',
  '/downloads/woo/marketplace-connector-ro-pro-for-woocommerce.zip',
  '/downloads/woo/marketplace-connector-pt-pro-for-woocommerce.zip',
  '/downloads/woo/marketplace-connector-ua-pro-for-woocommerce.zip',
]);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (HIDDEN_PRO_ZIPS.has(url.pathname)) {
      return new Response('PRO download is not publicly available. Please contact Factory Direct Multimedia for PRO access.', {
        status: 404,
        headers: {
          'content-type': 'text/plain; charset=utf-8',
          'cache-control': 'no-store, max-age=0',
        },
      });
    }

    return env.ASSETS.fetch(request);
  },
};
