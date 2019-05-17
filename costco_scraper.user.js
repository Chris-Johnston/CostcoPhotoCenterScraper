// ==UserScript==
// @name         Costco Photo Center Scraper
// @namespace    https://github.com/Chris-Johnston/CostcoPhotoCenterScraper
// @source       https://github.com/Chris-Johnston/CostcoPhotoCenterScraper
// @website      https://github.com/Chris-Johnston/CostcoPhotoCenterScraper
// @version      0.1.0
// @description  Automatically downloads your photos from Costco Photo Center.
// @author       github.com/Chris-Johnston
// @match        https://www.costcophotocenter.com/MyPhotos/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @grant        GM_download
// ==/UserScript==

// Please refer to the license in this projects GitHub repository.
// This script is provided with no warranty and no promise of support.

// Refer to the README for detailed instructions.

// 1. Enable the script
// 2. Navigate to an album. Url should resemble https://www.costcophotocenter.com/MyPhotos/*
// 3. Open the console to verify that everything is working.
// 4. Check Downloads/scraper directory for files

// Requires the page to be reloaded when navigating to a different album.

(function() {
    console.log("Scraping photos in 5 seconds...");
    function scrape()
    {
        console.log("Scraping...");
        // get each of the image thumbnails
        $(".gallery .img-wrap .thumbnail").each(function (index)
        {
            var nicename = "scraper/" + this.alt;
            // as far as I can tell, &hires=1 is all you need to get as close to the original image as you can
            // it seems that they must be doing some compression and possibly other modifications
            // as images don't look identical to the original copies :/
            var filename = this.src + "&hires=1";
            console.log({ nice: nicename, file: filename });
            // downloads **automatically** under Downloads/scraper/filename, automatically resolves duplicate names
            var result = GM_download({url: filename, name: nicename, saveAs: false, onerror: function(err) { alert(`Download error: ${err}`); } });
        });
        console.log("All downloads started.");
    };
    // HACK: wait 5s so that everything on the page is fully loaded
    setTimeout(scrape, 5000);
})();