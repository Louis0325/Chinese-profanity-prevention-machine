// -------------------------------------------------------------------
// 1. 網站設定與多語言內容
// -------------------------------------------------------------------

/**
 * 網站通用設定
 * 將所有可設定的資訊集中在此處，方便統一管理。
 */
const config = {
    botName: 'Chinese profanity prevention machine',
    admin: {
        name: 'jiaoyue',
        email: 'yumin20110325@gmail.com',
    },
    // 產生管理員聯絡字串的輔助函式
    getAdminInfo: function() {
        return `${this.admin.name} (${this.admin.email})`;
    }
};

/**
 * 建立隱私權政策的 HTML 內容。
 * @param {object} t - 包含該語言所有翻譯文字的物件。
 * @param {object} cfg - 通用設定物件。
 * @returns {string} - 組合好的 HTML 字串。
 */
const createPolicyHTML = (t, cfg) => `
    <p class="mb-4">${t.intro.p1.replace('{botName}', cfg.botName)}</p>
    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-md dark:bg-yellow-900/20 dark:border-yellow-600">
        <div class="flex">
            <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-yellow-500 dark:text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856a2 2 0 001.996-1.785L21.75 6.75A2 2 0 0020.004 5H3.996A2 2 0 002 6.75v10.465c0 .77.568 1.41 1.344 1.555z" />
                </svg>
            </div>
            <div class="ml-3">
                <p class="text-sm font-medium text-yellow-800 dark:text-yellow-200">${t.intro.note}</p>
            </div>
        </div>
    </div>

    <!-- 1. 收集的數據類型 -->
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100">${t.section1.title}</h2>
    <p>${t.section1.p1}</p>

    <h3 class="text-xl font-medium text-gray-800 dark:text-gray-100 mt-4 mb-2">${t.section1.subtitle1}</h3>
    <p>${t.section1.p2}</p>

    <div class="overflow-x-auto my-6">
        <table class="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-gray-700">
                <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">${t.table.header1}</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">${t.table.header2}</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">${t.table.header3}</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">${t.table.row1.cell1}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${t.table.row1.cell2}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${t.table.row1.cell3}</td>
                </tr>
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">${t.table.row2.cell1}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${t.table.row2.cell2}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${t.table.row2.cell3}</td>
                </tr>
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">${t.table.row3.cell1}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${t.table.row3.cell2}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${t.table.row3.cell3}</td>
                </tr>
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">${t.table.row4.cell1}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${t.table.row4.cell2}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${t.table.row4.cell3}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3 class="text-xl font-medium text-gray-800 dark:text-gray-100 mt-6 mb-2">${t.section1.subtitle2}</h3>
    <p>${t.section1.p3}</p>

    <!-- 2. 數據的使用 -->
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">${t.section2.title}</h2>
    <p>${t.section2.p1}</p>
    <ol class="list-decimal list-inside ml-4 space-y-2">
        <li>${t.section2.item1}</li>
        <li>${t.section2.item2}</li>
    </ol>

    <!-- 3. 數據的儲存與安全 -->
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">${t.section3.title}</h2>
    <p>${t.section3.p1}</p>
    <ul class="list-disc list-inside ml-4 space-y-2">
        <li>${t.section3.item1}</li>
        <li>${t.section3.item2}</li>
        <li>${t.section3.item3}</li>
    </ul>

    <!-- 4. 數據請求與刪除權利 -->
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">${t.section4.title}</h2>
    <p>${t.section4.p1}</p>
    <ul class="list-disc list-inside ml-4 space-y-2">
        <li>${t.section4.item1.replace('{adminInfo}', cfg.getAdminInfo())}</li>
    </ul>

    <!-- 5. 政策變更 -->
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">${t.section5.title}</h2>
    <p>${t.section5.p1}</p>

    <!-- 6. 聯繫我們 -->
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">${t.section6.title}</h2>
    <p>${t.section6.p1}</p>
    <ul class="list-none space-y-1 mt-4">
        <li>${cfg.admin.name}</li>
        <li>${cfg.admin.email}</li>
    </ul>
`;

/**
 * 多語言內容數據
 * 將每種語言的文字分離出來，方便維護和翻譯。
 */
const translations = {
    'zh-tw': {
        langLabel: "language:",
        title: "Discord 違規字詞偵測機器人 - 隱私權政策",
        date: "生效日期：2025 年 12 月 15 日",
        intro: {
            p1: "本隱私權政策旨在說明 {botName}（以下簡稱「本機器人」）在您使用本機器人服務時，如何收集、使用和儲存使用者的數據。",
            note: "**請注意：**本機器人是一個自動化審核工具，主要用於維護伺服器秩序。"
        },
        section1: {
            title: "1. 收集的數據類型",
            p1: "本機器人僅在執行其核心功能（即不雅字詞偵測與懲罰）時收集和儲存數據。",
            subtitle1: "1.1 必需收集的數據",
            p2: "當使用者在安裝本機器人的伺服器中發布訊息並觸發不雅字詞偵測時，本機器人會收集並儲存以下資訊：",
            subtitle2: "1.2 不收集的數據",
            p3: "本機器人不收集任何個人身份敏感資訊，包括但不限於：電子郵件地址、IP 地址、密碼、出生日期或其他與 Discord 服務無關的個人資料。"
        },
        table: {
            header1: "數據類型",
            header2: "收集目的",
            header3: "儲存期限",
            row1: { cell1: "**用戶 ID (User ID)**", cell2: "識別違規用戶，以便執行 Timeout 懲罰。", cell3: "無限制 (直到管理員刪除)" },
            row2: { cell1: "**訊息內容**", cell2: "作為偵測不雅字詞的依據，並作為違規證據記錄。", cell3: "無限制 (直到管理員刪除)" },
            row3: { cell1: "**頻道 ID/名稱**", cell2: "記錄違規事件發生的地點。", cell3: "無限制 (直到管理員刪除)" },
            row4: { cell1: "**時間戳 (Timestamp)**", cell2: "記錄違規事件發生的精確時間。", cell3: "無限制 (直到管理員刪除)" }
        },
        section2: {
            title: "2. 數據的使用",
            p1: "本機器人收集的數據僅用於以下目的：",
            item1: "**審核與執行：** 根據伺服器設定的規則，即時刪除違規訊息並對違規用戶執行暫時限制發言 (Timeout)。",
            item2: "**管理審查：** 將違規事件記錄到本地檔案 (<code>profanity_log.txt</code>)，供伺服器管理員事後審查和追蹤違規行為。"
        },
        section3: {
            title: "3. 數據的儲存與安全",
            p1: "本機器人收集的數據：",
            item1: "**本地儲存：** 數據儲存在運行機器人的主機（例如您的 VPS 或本地電腦）上的 **<code>profanity_log.txt</code>** 文件中。",
            item2: "**管理員訪問：** 只有伺服器主機的擁有者（即您本人）才能直接訪問和查閱這些日誌文件。",
            item3: "**不分享：** 本機器人不會將任何收集到的用戶數據出售、交易或出租給任何第三方。"
        },
        section4: {
            title: "4. 數據請求與刪除權利",
            p1: "作為數據控制者，伺服器管理員有責任確保日誌檔案的隱私。",
            item1: "如果您希望請求查看或刪除本機器人日誌中儲存的關於您的任何數據，請聯繫伺服器管理員 {adminInfo}。管理員將負責在日誌檔案中查找並移除您的用戶 ID 相關記錄。"
        },
        section5: {
            title: "5. 政策變更",
            p1: "我們保留隨時更新本隱私權政策的權利。所有變更將在本政策發布後立即生效。我們建議使用者定期查閱本政策以了解任何更新。"
        },
        section6: {
            title: "6. 聯繫我們",
            p1: "如果您對本隱私權政策有任何疑問或疑慮，請透過以下方式聯繫伺服器管理員：",
        }
    },
    'en': {
        langLabel: "Language Selection:",
        title: "Discord Profanity Bot - Privacy Policy",
        date: "Effective Date: December 15, 2025",
        intro: {
            p1: "This Privacy Policy explains how {botName} (the \"Bot\") collects, uses, and stores user data while you use its services.",
            note: "**Please Note:** This Bot is an automated moderation tool primarily used to maintain server order."
        },
        section1: {
            title: "1. Types of Data Collected",
            p1: "The Bot only collects and stores data necessary to perform its core functions (i.e., profanity detection and punishment).",
            subtitle1: "1.1 Data Required for Operation",
            p2: "When a user posts a message that triggers profanity detection on a server where the Bot is installed, the Bot collects and stores the following information:",
            subtitle2: "1.2 Data Not Collected",
            p3: "The Bot does not collect any sensitive personal identification information, including but not limited to: email addresses, IP addresses, passwords, date of birth, or other personal data unrelated to the Discord service."
        },
        table: {
            header1: "Data Type",
            header2: "Purpose of Collection",
            header3: "Storage Duration",
            row1: { cell1: "**User ID**", cell2: "To identify the violating user for applying the Timeout punishment.", cell3: "Indefinite (Until manually deleted by administrator)" },
            row2: { cell1: "**Message Content**", cell2: "To serve as the basis for profanity detection and as proof of violation.", cell3: "Indefinite (Until manually deleted by administrator)" },
            row3: { cell1: "**Channel ID/Name**", cell2: "To log the location where the violation occurred.", cell3: "Indefinite (Until manually deleted by administrator)" },
            row4: { cell1: "**Timestamp**", cell2: "To record the precise time of the violation event.", cell3: "Indefinite (Until manually deleted by administrator)" }
        },
        section2: {
            title: "2. Data Usage",
            p1: "The data collected by the Bot is used exclusively for the following purposes:",
            item1: "**Moderation and Enforcement:** Immediately deleting violating messages and executing temporary restriction (Timeout) on violating users based on server rules.",
            item2: "**Administrative Review:** Logging violation incidents to a local file (<code>profanity_log.txt</code>) for post-facto review and tracking by the server administrator."
        },
        section3: {
            title: "3. Data Storage and Security",
            p1: "Data collected by the Bot:",
            item1: "**Local Storage:** Data is stored in the **<code>profanity_log.txt</code>** file on the host running the Bot (i.e., your VPS or local computer).",
            item2: "**Administrator Access:** Only the owner of the server host (you, the administrator) has direct access to view these log files.",
            item3: "**No Sharing:** The Bot will not sell, trade, or rent any collected user data to any third party."
        },
        section4: {
            title: "4. Data Request and Deletion Rights",
            p1: "As the Data Controller, the server administrator is responsible for ensuring the privacy of the log files.",
            item1: "If you wish to request viewing or deletion of any data stored about you in the Bot's logs, please contact the server administrator {adminInfo}. The administrator is responsible for finding and removing records related to your User ID in the log file."
        },
        section5: {
            title: "5. Policy Changes",
            p1: "We reserve the right to update this Privacy Policy at any time. All changes will take effect immediately upon posting of the updated policy. We encourage users to review this policy periodically for any updates."
        },
        section6: {
            title: "6. Contact Us",
            p1: "If you have any questions or concerns about this Privacy Policy, please contact the server administrator via the following methods:",
        }
    },
    'ja': {
        langLabel: "言語選択:",
        title: "Discord 暴言検出 Bot - プライバシーポリシー",
        date: "発効日：2025年12月15日",
        intro: {
            p1: "本プライバシーポリシーは、{botName}（以下「本Bot」）がサービスをご利用いただく際に、ユーザーデータをどのように収集、使用、保存するかについて説明するものです。",
            note: "**ご注意：**本Botは、主にサーバーの秩序維持を目的とした自動モデレーションツールです。"
        },
        section1: {
            title: "1. 収集するデータの種類",
            p1: "本Botは、そのコア機能（暴言検出とペナルティ）を実行するために必要なデータのみを収集および保存します。",
            subtitle1: "1.1 必須の収集データ",
            p2: "ユーザーが本Botが導入されているサーバーでメッセージを投稿し、暴言検出がトリガーされた場合、本Botは以下の情報を収集および保存します。",
            subtitle2: "1.2 収集しないデータ",
            p3: "本Botは、Eメールアドレス、IPアドレス、パスワード、生年月日、その他Discordサービスに関係のない個人データなど、機密性の高い個人識別情報は収集しません。"
        },
        table: {
            header1: "データ種類",
            header2: "収集目的",
            header3: "保存期間",
            row1: { cell1: "**ユーザーID (User ID)**", cell2: "違反ユーザーを識別し、タイムアウトペナルティを実行するため。", cell3: "無期限（管理者が手動で削除するまで）" },
            row2: { cell1: "**メッセージ内容**", cell2: "暴言検出の根拠、および違反の証拠として記録するため。", cell3: "無期限（管理者が手動で削除するまで）" },
            row3: { cell1: "**チャンネルID/名前**", cell2: "違反が発生した場所を記録するため。", cell3: "無期限（管理者が手動で削除するまで）" },
            row4: { cell1: "**タイムスタンプ (Timestamp)**", cell2: "違反イベントの正確な発生時刻を記録するため。", cell3: "無期限（管理者が手動で削除するまで）" }
        },
        section2: {
            title: "2. データ利用",
            p1: "本Botが収集したデータは、以下の目的のみに使用されます。",
            item1: "**モデレーションと執行：** サーバーの設定ルールに基づき、違反メッセージを即座に削除し、違反ユーザーに一時的な制限（タイムアウト）を実行するため。",
            item2: "**管理者による確認：** 違反インシデントをローカルファイル（<code>profanity_log.txt</code>）に記録し、サーバー管理者が事後確認および違反行為の追跡を行うため。"
        },
        section3: {
            title: "3. データ保存とセキュリティ",
            p1: "本Botが収集したデータ：",
            item1: "**ローカル保存：** データは、Botが動作しているホスト（例：お客様のVPSまたはローカルコンピューター）上の **<code>profanity_log.txt</code>** ファイルに保存されます。",
            item2: "**管理者アクセス：** これらのログファイルに直接アクセスして閲覧できるのは、サーバーホストの所有者（お客様ご自身）のみです。",
            item3: "**非共有：** 本Botは、収集したユーザーデータを第三者に販売、取引、または貸し出すことはありません。"
        },
        section4: {
            title: "4. データリクエストと削除権",
            p1: "データ管理者として、サーバー管理者はログファイルのプライバシーを確保する責任があります。",
            item1: "本Botのログに保存されているご自身のデータに関する閲覧または削除を希望される場合は、サーバー管理者 {adminInfo} にご連絡ください。管理者は、ログファイル内でお客様のユーザーIDに関連する記録を検索し、削除する責任を負います。" // Original English: "If you wish to request viewing or deletion of any data stored about you in the Bot's logs, please contact the server administrator {adminInfo}. The administrator is responsible for finding and removing records related to your User ID in the log file."
        },
        section5: {
            title: "5. ポリシー変更",
            p1: "当方は、本プライバシーポリシーをいつでも更新する権利を留保します。すべての変更は、更新されたポリシーの掲示後直ちに有効になります。ユーザーの皆様には、定期的に本ポリシーを確認し、更新内容を把握していただくことを推奨いたします。"
        },
        section6: {
            title: "6. お問い合わせ",
            p1: "本プライバシーポリシーに関するご質問や懸念事項がある場合は、以下の方法でサーバー管理者にご連絡ください。",
        }
    }
};

/**
 * 根據 translations 和 config 動態生成最終的 policyContent 物件。
 */
const policyContent = Object.keys(translations).reduce((acc, lang) => {
    const t = translations[lang];
    acc[lang] = {
        langLabel: t.langLabel,
        title: t.title,
        date: t.date,
        content: createPolicyHTML(t, config)
    };
    return acc;

}, {});
