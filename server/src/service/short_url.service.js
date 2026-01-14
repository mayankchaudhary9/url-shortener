import { generateNanoId } from "../utils/helper.js";
import short_urlDao from "../dao/short_url.dao.js";

class shortUrlService {
  async createShortUrlWithoutUser(url) {
    const shortUrl = generateNanoId(7);
    if (!shortUrl) throw new Error("Short URL not generated");
    await short_urlDao.saveShortUrl(shortUrl, url);
    return shortUrl;
  }

  async createShortUrlWithtUser(url, userId, slug = null) {
    const shortUrl = slug || generateNanoId(7);
    const exists = await short_urlDao.getCustomShortUrl(slug);

    if (exists) throw new Error("This custom url already exists");

    await short_urlDao.saveShortUrl(shortUrl, url, userId);
    return shortUrl;
  }
}

export default new shortUrlService();

export const createShortUrlWithoutUser = async () => {};
export const createShortUrlWithtUser = async () => {};
