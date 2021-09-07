// 언어별 설명
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
        address: "87, Dokgogae-gil, Gonjiam-eup, Gwangju-si, Gyeonggi-do, 12806 Republic of Korea",
        email: "woosungco@naver.com",
        phone1: "+82-31-762-8101 (TEL)",
        phone2: "+82-31-763-0922 (FAX)",
        box1: "ADDRESS",
        box2: "EMAIL",
        box3: "PHONE",
        language: "한국어",
        naver: "NAVER",
        google: "GOOGLE",
        history_01_text: "Woosung Electric Industries is a company that has produced consistent special wires and tubes since its foundation in 1974,",
        history_02_text: "It stands out in the material industry, which is the foundation of all industries, making it competitive globally.",
        voltage: "Normal voltage",
        temperature: "Rated temperature",
        w_temperature: "Working temperature",
        products_01_01_TFLW: "TFLW wire is outstanding at thermal resistance, cold resistance, chemical resistance as well as solvent resistance. Also, it causes least permittivity and dielectric loss. Lastly, there is rare change in electrical properties that TFLW wire can be replaced with SRGIW.",
        products_01_02_TFLW: "It is used at internal wiring appliance(microwave) such as electronic device, office machine, electric heating device, chemical plant, and wiring of thermal power plant.",
        products_02_SRGIW: "SRGIW is outstanding at thermal resistance, cold resistance, flame retardancy, flexibility and insulation. It is used at internal wiring of lighting device, office machine, wiring of various electric heating devices, wiring of kitchen device, heating device, high temperature parts of vehicles, ships and etc.",
        products_03_FSGT: "FSGT is outstanding as electrical insulation, heat resistance, oil resistance, flexibility and flame retardancy. It is mainly used for reinforcing withstand voltage and heat resistance of various motors, refrigeration, cooling, all kinds of appliances, all types of resistor heating element and lighting equipment.",
        products_04_FPGT: "FPGT has good electrical insulation, heat resistance, flame retardancy(vw-1) and water resistance that is able to replace Teflon Tube, Empire Tube or Glass Tube. It is mainly used for motors, dry Trans-Former and electrical equipment for automobiles.",
        products_05_PNT: "Pnt is insulated tube which is outstanding at dimensional stability, refrigerant resistance and heat resistance. It is used as insulation for the exposed part of refrigerant. It is spirally wound with Polyester film and Nomex film into a circular shape. Film is thin and it is commonly used for COMP MOTOR also it is very stable product so there is rarely no change in the electrical and mechanical properties of the products until 150℃.",
        products_06_PET: "It is outstanding at electrical insulation and refrigerant resistance, heat resistance so it is used as protection or insulation for all kinds of motor and lead wire.",
        products_07_PETHS: "PET-HS is outstanding at electrical insulation, heat resistance and shrinkage that is used as insulation for noise abatement of BLDC motor, motor protection, insulation of motor’s lead wire connections and insulation of various electronic components.",
        products_07_PETHS_01: "For insulation of motor’s lead wire connections",
        products_07_PETHS_02: "For noise prevention in dishwasher",
        products_07_PETHS_03: "For noise prevention in washing machine",
        products_07_PETHS_04: "For system air conditioning noise protection",
        products_08_PETHEL: "Superb thermal resistance (150℃) and electrical insulation. It is used for wiring protection of internal instrument, motor, generator, transformer lead protection.",
        products_09_NST: "it is outstanding at electronical insulation, refrigerant resistance and thermal resistance so it is used as withstand voltage protection or heat dissipation.",
        products_10_PIT: "It is outstanding at chemical, physical and mechanical properties such as cold resistance, withstand voltage, chemical resistance and wear resistance. It is suitable to use for all types of electronic equipment which is gradually slimmer, high density and compact due to developing IT industry. Practically, it is applied to be used for the purpose of consistent safety around poor circumstance for the industries of electricity, electronic, IT , heavy, automative, sunlight generation, nuclear power, aerospace.",
        products_11_PEN: "This special insulated tube is being used for automobile’s motor and so on as it withstands much more higher temperature than home appliance’s motor.",

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
        address: "경기도 광주시 곤지암읍 독고개길 87 (12806)",
        email: "woosungco@naver.com",
        phone1: "031-762-8101 (회사)",
        phone2: "031-763-0922 (팩스)",
        box1: "주소",
        box2: "이메일",
        box3: "연락처",
        language: "English",
        naver: "네이버",
        google: "구글",
        history_01_text: "우성전기공업 주식회사는 1974년 창립이래 한결같이 특수 전선 및 특수 내열 튜브와 수축 튜브를 생산해 온 업체로서,",
        history_02_text: "모든 산업의 기반이 되는 소재 산업 분야에서 기술력을 바탕으로 독보적인 두각을 나타낸 세계적인 경쟁력을 갖춘 회사입니다.",
        voltage: "정격전압",
        temperature: "정격온도",
        w_temperature: "사용온도",
        products_01_01_TFLW: "내열, 내한, 내유, 내약품성, 내구성, 내용제성이 뛰어나고 유전율, 유전체손실이  적으며 고온 및 고주파 에서 전기적 특성의 변화가 거의 없는 제품으로 실리콘 유리사 편조전선(SRGIW) 대체 가능한 제품입니다.",
        products_01_02_TFLW: "용도는 전자기기, 사무기기, 전열기기 등의 내부배선 가전제품용(전자레인지),화력발전소 화학공장 배선용 으로 사용됩니다.",
        products_02_SRGIW: "내열, 내한, 난연, 유연성을 가지고 있으며 절연성이 우수하다. 조명기기, 사무용 기기등의 내부배선과 각종 전열기기 등의 기기 내 배선, 주방기기, 난방기기 등의 배선, 차량, 선박등의 고온부에 사용됩니다.",
        products_03_FSGT: "전기 절연성, 내열성, 내유성, 내굴곡성, 유연성, 난연성이 우수한 제품으로 각종 MOTOR, 냉동, 냉방 기기류, 가정용 전열 기기류 등 각종 저항기 발열체, 조명 기기류 등의 내전압, 내열 보강용으로 주로 사용된다.",
        products_04_FPGT: "전기절연성, 내열성, 난연성(vw-1), 내수성이 양호하며 Teflon Tube, 엠파이어 튜브, 글라스 튜브 대체 가능한 제품으로 MOTOR, 건식 Trans-Fomer류, 자동차용 전장품에 사용된다.",
        products_05_PNT: "PNT (Polyester Nomex Tube)는 치수 안정성과 내냉매성 내열성이 뛰어난 절연 튜브 제품으로 냉매에 노출되는 부위에 절연용으로 사용되는 제품입니다. 폴리에스터 필름과 노멕스 필름을 나선형으로 감겨 원형으로 되어 있으며 피막이 얇고 COMP MOTOR용으로 상용하고 있고 150℃까지의 온도에서는 제품들의 전기적, 기계적 특성의 변화가 거의 없고 매우 안정적인 제품입니다.",
        products_06_PET: "이 제품은 전기 절연성이 우수하고 내냉매성, 내열성이 뛰어난 절연튜브로써 각종 MOTOR, LEAD WIRE 보호용 또는 절연용으로 사용됩니다.",
        products_07_PETHS: "전기적 절연성 및 내열, 수축성이 우수한 제품으로 BLDC모터의 소음방지 및 모터 보호용 및 모터 LEAD WIRE 연결부위의 절연용 및 각종전자 부품의 절연용으로 사용됩니다.",
        products_07_PETHS_01: "모터 LEAD WIRE 연결부위 절연용",
        products_07_PETHS_02: "식기세척기 소음방지용",
        products_07_PETHS_03: "세탁기 소음방지용",
        products_07_PETHS_04: "시스템에어컨 소음방지용",
        products_08_PETHEL: "내열성(150℃) 및 전기절연성이 우수하고, 수축성이 우수하며 기기내부 배선 보호용 MOTOR, GENERATOR, TRANSFORMER LEAD 보호용으로 사용됩니다.",
        products_09_NST: "내냉매성, 내열성이 뛰어난 절연튜브로써 LEAD WIRE 내전압 보호용 또는 방열용으로 사용되는 제품에 적용됩니다.",
        products_10_PIT: "내한, 내전압, 내화학, 내방사능, 내마모성 등 화학적, 물리적, 기계적 특성이 우수하여 전기 전자, IT, 중공업, 자동차, 태양광, 원자력 및 우주 항공 등 열악한 환경에서 안정적인 성능 유지가 필요한 모든 산업 분야에 적용되고 IT산업의 발달로 점차 고밀도, 소형화, Slim화 되는 각종 전자 기기에 상용되는 우수한 제품입니다.",
        products_11_PEN: "가전용 모터보다 고온에 견딜 수 있는 특수 절연용 튜브로, 자동차 모터 등에 사용됩니다.",
        
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
