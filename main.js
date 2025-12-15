document.addEventListener('DOMContentLoaded', () => {
    // --- 元素選擇 ---
    const selectElement = document.getElementById('language-select');
    const policyContentElement = document.getElementById('policy-content');
    const policyTitleElement = document.getElementById('policy-title');
    const policyDateElement = document.getElementById('policy-date');
    const langLabelElement = document.getElementById('lang-label');
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');

    // 確保 policyContent 變數存在
    if (typeof policyContent === 'undefined') {
        console.error('Error: policyContent is not defined. Make sure content.js is loaded correctly before main.js.');
        return;
    }


    // --- 語言切換功能 ---

    const updateLanguage = (langCode) => {
        const content = policyContent[langCode];

        if (content) {
            policyTitleElement.textContent = content.title;
            policyDateElement.textContent = content.date;
            langLabelElement.textContent = content.langLabel;
            policyContentElement.innerHTML = content.content;
            document.title = content.title; // 動態更新瀏覽器分頁標題

            // 設置 HTML lang 屬性以符合當前語言
            document.documentElement.lang = langCode.startsWith('zh') ? 'zh-TW' : langCode;

        } else {
            console.error(`Language content for '${langCode}' not found.`);
        }
    };

    // 處理選擇器變化
    selectElement.addEventListener('change', (event) => {
        const newLang = event.target.value;
        updateLanguage(newLang);
        localStorage.setItem('language', newLang); // 儲存用戶選擇
    });


    // --- 深色模式功能 ---

    // 函數：根據主題狀態更新圖標
    const updateThemeIcon = (isDark) => {
        moonIcon.classList.toggle('hidden', isDark);
        sunIcon.classList.toggle('hidden', !isDark);
    };

    // 函數：切換深色/淺色模式
    const toggleDarkMode = () => {
        const isCurrentlyDark = htmlElement.classList.toggle('dark');
        localStorage.setItem('theme', isCurrentlyDark ? 'dark' : 'light');
        updateThemeIcon(isCurrentlyDark);
    };

    // 深色模式按鈕事件監聽器
    themeToggle.addEventListener('click', toggleDarkMode);


    // --- 頁面初始載入邏輯 ---

    const initializePage = () => {
        // 1. 設置初始主題 (深色/淺色模式)
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');
        const isInitialDark = savedTheme === 'dark' || (savedTheme === null && prefersDark);

        htmlElement.classList.toggle('dark', isInitialDark);
        updateThemeIcon(isInitialDark);

        // 2. 設置初始語言
        const savedLang = localStorage.getItem('language') || 'zh-tw'; // 從 localStorage 讀取，若無則預設為 'zh-tw'
        selectElement.value = savedLang;
        updateLanguage(savedLang);
    };

    // 執行頁面初始化
    initializePage();
});