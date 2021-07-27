// 언어별 JSON 파일 (간략화)
const lang = {
    en: {
        title: "Hello.",
        content: "This is a content area",
        now_sys_lang: "current area",
        category1: "History",
        category2: "Product",
        category2_1: "wires",
        category2_2: "tubes",
        category3: "Patent",
        category3_1: "patent",
        category3_2: "certification",
        category3_3: "supplier",
        address: "87, Dokgogae-gil, Gonjiam-eup, Gwangju-si, Gyeonggi-do, Republic of Korea",
        email: "example@gmail.com",
        phone: "+82-10-1234-5678",
        box1: "ADDRESS",
        box2: "EMAIL",
        box3: "PHONE",
        language: "한국어",
        naver: "NAVER",
        google: "GOOGLE",


    },
    ko: {
        title: "안녕하세요.",
        content: "여기는 컨텐츠 구역입니다.",
        now_sys_lang: "현재 지역",
        category1: "회사 소개",
        category2: "제품",
        category2_1: "와이어",
        category2_2: "튜브",
        category3: "특허 및 인증",
        category3_1: "특허 현황",
        category3_2: "인증 현황",
        category3_3: "공급 업체",
        address: "경기도 광주시 곤지암읍 독고개길 87",
        email: "example@naver.com",
        phone: "010-1234-5678",
        box1: "주소",
        box2: "이메일",
        box3: "연락처",
        language: "English",
        naver: "네이버",
        google: "구글",



        
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

function changeLanguage() {
    var langSelect = document.getElementById("dropdown"); // select element에서 선택된 option의 value가 저장된다. 
    var selectValue = langSelect.options[langSelect.selectedIndex].value; // select element에서 선택된 option의 text가 저장된다. 
    var selectText = langSelect.options[langSelect.selectedIndex].text;
    // alert(selectValue)
    // alert(selectText)

    if (selectText == "한국어") {
        render("ko")
    } else {
        render("en")
    }
}
