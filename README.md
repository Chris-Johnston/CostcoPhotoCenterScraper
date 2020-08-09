# CostcoPhotoCenterScraper

Tampermonkey script to download your photos automatically from Costco Photo Center.

## Install

[Click here to install this extension.][install]

This will open the user script in your browser, which prompts Tampermonkey to confirm the installation.

[install]: https://github.com/Chris-Johnston/CostcoPhotoCenterScraper/raw/master/costco_scraper.user.js

## Usage

This script is made for downloading **your** images from the [Costco Photo Center][costco] website.
You must have an account.

0. Install and enable the extension.
1. Log in.
2. Navigate to ["My Photos"][photos].
3. Click on one of your albums. Your URL should be in the format: `https://www.costcophotocenter.com/MyPhotos/Album/XXXXXXX`
4. After 5 seconds, your photos should start to download. Open the JavaScript console to confirm this.
5. Check for your photos under: `Downloads/scraper` (or wherever your browser normally downloads files)

If you wish to download more than one album, you must refresh the page in order to restart the script.
You can reload the page and navigate away while images are being downloaded.

[costco]: https://www.costcophotocenter.com/
[photos]: https://www.costcophotocenter.com/MyPhotos/

## Image Quality Remarks

It seems that the downloaded images have some compression and potentially other processing applied to them,
as they are not identical to the originally uploaded images. They do retain their original resolution, and most
of their quality. File sizes are reduced.

Because of this, uploading files here should not be considered a viable replacement for proper storage and backups.

Costco does sell 16gb flash drives and DVDs with images on them. While paying $10 for a 16gb flash drive seems a bit much,
from what I can tell the images on the flash drive are in their original quality. This is likely the best option if you need the
highest quality images. I haven't tested the DVDs (I don't have any DVD drives anymore),
but they are a better value if you only need a few photos.

## Contributing and Support

This is a one-off project, so do not expect any support. Feel free to fork the repo and modify as you wish.
I'd be very interested to see if anyone knows how to get the original quality images.
