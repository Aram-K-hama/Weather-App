const translate = {
    en: {
        header: "Today's Weather",
        inp: "Insert a location",
        windText: "Wind Speed",
        humidityText: "Humidity",
        error: "Location not found !!!!"
    }
    ,
    krd: {
        header: "کەشوهەوای ئەمڕۆ",
        inp: "ناونیشان بنووسە",
        windText: "خێرایی با",
        humidityText: "ڕادەی شێ",
        error: "!!!!!ناونیشاناکەت نەدۆزرایەوە"
    }
}

const h1 = document.querySelector('#h1');
const inp = document.querySelector('#inp');
const wind1 = document.querySelector('#wind');
const humidity1 = document.querySelector('#humidity');
const errorMsg = document.querySelector('#errorMsg');

const languageSelect = document.querySelector('select');
languageSelect.addEventListener('change', (event) => {
    setLanguage(event.target.value)
})
const setLanguage = (language) => {
    if (language == 'en') {
        h1.innerText = translate.en.header;
        inp.placeholder = translate.en.inp;
        wind1.innerText = translate.en.windText;
        humidity1.innerText = translate.en.humidityText;
        errorMsg.innerText = translate.en.error;
    } else if (language == 'krd') {
        h1.innerText = translate.krd.header;
        inp.placeholder = translate.krd.inp;
        wind1.innerText = translate.krd.windText;
        humidity1.innerText = translate.krd.humidityText;
        errorMsg.innerText = translate.krd.error;
    }
}