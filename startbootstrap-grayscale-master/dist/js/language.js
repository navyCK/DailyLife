// 언어별 JSON 파일 (간략화)
const lang = {
    en: {
        title: "Hello.",
        content: "This is a content area",
        now_sys_lang: "System locale",
        category1: "History",
        category2: "Product",
        category3: "Patent",
    },
    ko: {
        title: "안녕하세요.",
        content: "여기는 컨텐츠 구역입니다.",
        now_sys_lang: "시스템 로캘",
        category1: "회사 소개",
        category2: "제품",
        category3: "특허 및 인증",
    }
}

// ** 현재 브라우저의 언어 가져오기 **
function getLanguage() {
    return navigator.language || navigator.userLanguage;
}

// 언어별 적용
function init(localeStr) {
    document.getElementById("locale").textContent = localeStr
}

// 초기 작업
const currentLang = getLanguage()
init(currentLang)
render(currentLang.substr(0, 2))

// 언어별 렌더링
function render(locale) {
    const $lang = document.querySelectorAll("[data-lang]")
    $lang.forEach(el => {
        const code = el.dataset.lang
        el.textContent = lang[locale][code]
    })
}

// 버튼 이벤트
document.getElementById("btn-en").addEventListener("click", e => {
    render("en")
})
document.getElementById("btn-ko").addEventListener("click", e => {
    render("ko")
})
