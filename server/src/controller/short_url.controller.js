import short_urlDao from "../dao/short_url.dao.js";
import short_urlService from "../service/short_url.service.js";

class shortUrlController {
  async createShortUrl(req, res) {
    const data = req.body;
    let shortUrl;
    if (req.user) {
      shortUrl = await short_urlService.createShortUrlWithoutUser(
        data.url,
        req.user._id,
        data.slug
      );
    } else {
      shortUrl = await short_urlService.createShortUrlWithtUser(data.url);
    }

    res.status(200).json({ shortUrl: process.env.APP_URL + shortUrl });
  }

  async redirectFromShortUrl(req, res) {
    const { id } = req.params;
    const url = await short_urlDao.getShortUrl(id);
    if (!url) throw new Error("Short URL not found");
    res.redirect(url.full_url);
  }

  async createCustomShortUrl(req, res) {
    const { url, slug } = req.body;
    const shortUrl = await short_urlService.createShortUrlWithoutUser(
      url,
      customUrl
    );
    res.status(200).json({ shortUrl: process.env.APP_URL + shortUrl });
  }
}

export default new shortUrlController();
