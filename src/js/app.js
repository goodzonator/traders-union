import Swiper from "swiper";
import {FreeMode} from "swiper/modules";
import './loadTableData.js';
import './chart.js';
import './mobile-menu.js';
import './search.js';
import './language.js';
import './resizeTransfer.js';

/* support webp */
import BaseHelpers from "./helpers/BaseHelpers.js";

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();
/* // support webp */


/* TABS */

function activateTab(event) {
    let parentContainer = event.target.closest(".tabs-js");

    let tabs;
    if (event.target.parentElement.classList.contains('swiper-slide')) {
        tabs = parentContainer.querySelectorAll(":scope > .swiper .tab-js");
    } else {
        tabs = parentContainer.querySelectorAll(":scope > ul > li > .tab-js");
    }

    tabs.forEach(function (tab) {
        tab.classList.remove("active");
    });

    event.target.classList.add("active");

    let contents = parentContainer.querySelectorAll(":scope > .tabs-content-js");
    contents.forEach(function (content) {
        content.classList.remove("active");
    });

    let targetId = event.target.getAttribute("data-target");
    let targetContent = parentContainer.querySelector(targetId);

    if (targetContent) {
        targetContent.classList.add("active");
    }
}

document.querySelectorAll(".tab-js").forEach(function (tabButton) {
    tabButton.addEventListener("click", activateTab);
});

/* end TABS */

/* SELECT  */

if (window.innerWidth < 768) {
    document.querySelectorAll('.select-js').forEach(select => {
        new Choices(select, {
            searchEnabled: false,
            itemSelectText: '',
            shouldSort: false,
            placeholderValue: 'Please select...',
        });
    });
}

document.querySelectorAll('.converter-select-js').forEach(select => {
    new Choices(select, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
        placeholderValue: 'Please select...',
    });
});

/* end SELECT  */


/* FORECASTS */
if (window.innerWidth < 768) {
    const swiperContainer = document.querySelector('.forecasts__tabs-swiper');
    const slides = swiperContainer.querySelectorAll('.swiper-slide');
    const lastSlideIndex = slides.length - 1;

    new Swiper('.forecasts__tabs-swiper', {
        modules: [FreeMode],
        slidesPerView: 'auto',
        freeMode: true,
        initialSlide: lastSlideIndex
    });
}
/* end FORECASTS */

/* CURRENCY DETAILED INFORMATION */

if (window.innerWidth < 1200) {
    const currencyDetailedInformationLists = document.querySelectorAll('.currency-detailed-information-list');

    currencyDetailedInformationLists.forEach(function (currencyDetailedInformationList) {
        new Swiper(currencyDetailedInformationList, {
            modules: [FreeMode],
            slidesPerView: 'auto',
            spaceBetween: 6,
            freeMode: true,
            breakpoints: {
                768: {
                    spaceBetween: 10,
                },
            }
        });
    });
}

if (window.innerWidth < 768) {

    const currencyDetailedInformationSelect = document.querySelector('#currency-detailed-information');

    currencyDetailedInformationSelect.addEventListener('change', function (event) {
        let parentContainer = event.target.closest(".tabs-js");

        let contents = parentContainer.querySelectorAll(":scope > .tabs-content-js");
        contents.forEach(function (content) {
            content.classList.remove("active");
        });

        let targetId = event.target.value;
        let targetContent = parentContainer.querySelector(targetId);

        if (targetContent) {
            targetContent.classList.add("active");
        }
    });
}

/* end CURRENCY DETAILED INFORMATION */