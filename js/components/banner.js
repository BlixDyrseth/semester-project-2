import { apiBanner } from "../settings/api.js";

const bannerContainer = document.querySelector(".banner-container");

export async function getBanner() {
  try {
    const response = await fetch(apiBanner);
    const json = await response.json();

    const banner = json.data.attributes.banner;

    bannerContainer.innerHTML = "";

    console.log(banner);

    bannerHtml(banner);
  } catch (error) {
    console.log(error);
  }
}

function bannerHtml(banner) {
  bannerContainer.innerHTML = `<img class="banner" src="${banner.data.attributes.formats.large.url}" alt="${banner.data.attributes.alternativeText}">`;
}
