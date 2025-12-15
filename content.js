// -------------------------------------------------------------------
// 1. 多語言內容數據
// -------------------------------------------------------------------

// !!! 更改您的機器人名稱：已從 'ProfanityGuard' 替換為 'ModGuard' !!!
const BOT_NAME = 'Chinese profanity prevention machine'; 

// !!! 更改您的聯繫資訊：已將 placeholder 替換為實際的聯繫資訊 !!!
// 中文 (繁體) 版本聯繫資訊
const ADMIN_INFO_ZH = 'jiaoyue (yumin20110325@gmail.com)';
const ADMIN_NAME_ZH = 'jiaoyue';
const ADMIN_EMAIL_ZH = 'yumin20110325@gmail.com';

// 英文及日文版本聯繫資訊
const ADMIN_INFO_EN = 'jiaoyue (yumin20110325@gmail.com)';
const ADMIN_NAME_EN = 'jiaoyue';
const ADMIN_EMAIL_EN = 'yumin20110325@gmail.com';


const policyContent = {
    'zh-tw': {
        langLabel: "語言選擇:",
        title: "Discord 違規字詞偵測機器人 - 隱私權政策",
        date: "生效日期：2025 年 12 月 15 日",
        content: `
            <p class="mb-4">
                本隱私權政策旨在說明 ${BOT_NAME}（以下簡稱「本機器人」）在您使用本機器人服務時，如何收集、使用和儲存使用者的數據。
            </p>
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-md dark:bg-yellow-900/20 dark:border-yellow-600">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <svg class="h-5 w-5 text-yellow-500 dark:text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856a2 2 0 001.996-1.785L21.75 6.75A2 2 0 0020.004 5H3.996A2 2 0 002 6.75v10.465c0 .77.568 1.41 1.344 1.555z" />
                        </svg>
                    </div>
                    <div class="ml-3">
                        <p class="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                            **請注意：**本機器人是一個自動化審核工具，主要用於維護伺服器秩序。
                        </p>
                    </div>
                </div>
            </div>

            <!-- 1. 收集的數據類型 -->
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100">1. 收集的數據類型</h2>
            <p>本機器人僅在執行其核心功能（即不雅字詞偵測與懲罰）時收集和儲存數據。</p>

            <h3 class="text-xl font-medium text-gray-800 dark:text-gray-100 mt-4 mb-2">1.1 必需收集的數據</h3>
            <p>當使用者在安裝本機器人的伺服器中發布訊息並觸發不雅字詞偵測時，本機器人會收集並儲存以下資訊：</p>

            <div class="overflow-x-auto my-6">
                <table class="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 dark:divide-gray-700">
                    <thead class="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                數據類型
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                收集目的
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                儲存期限
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                **用戶 ID (User ID)**
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                識別違規用戶，以便執行 Timeout 懲罰。
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                無限制 (直到管理員刪除)
                            </td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                **訊息內容**
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                作為偵測不雅字詞的依據，並作為違規證據記錄。
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                無限制 (直到管理員刪除)
                            </td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                **頻道 ID/名稱**
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                記錄違規事件發生的地點。
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                無限制 (直到管理員刪除)
                            </td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                **時間戳 (Timestamp)**
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                記錄違規事件發生的精確時間。
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                無限制 (直到管理員刪除)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-medium text-gray-800 dark:text-gray-100 mt-6 mb-2">1.2 不收集的數據</h3>
            <p>本機器人不收集任何個人身份敏感資訊，包括但不限於：電子郵件地址、IP 地址、密碼、出生日期或其他與 Discord 服務無關的個人資料。</p>

            <!-- 2. 數據的使用 -->
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">2. 數據的使用</h2>
            <p>本機器人收集的數據僅用於以下目的：</p>
            <ol class="list-decimal list-inside ml-4 space-y-2">
                <li>**審核與執行：** 根據伺服器設定的規則，即時刪除違規訊息並對違規用戶執行暫時限制發言 (Timeout)。</li>
                <li>**管理審查：** 將違規事件記錄到本地檔案 (<code>profanity_log.txt</code>)，供伺服器管理員事後審查和追蹤違規行為。</li>
            </ol>

            <!-- 3. 數據的儲存與安全 -->
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">3. 數據的儲存與安全</h2>
            <p>本機器人收集的數據：</p>
            <ul class="list-disc list-inside ml-4 space-y-2">
                <li>**本地儲存：** 數據儲存在運行機器人的主機（例如您的 VPS 或本地電腦）上的 **<code>profanity_log.txt</code>** 文件中。</li>
                <li>**管理員訪問：：** 只有伺服器主機的擁有者（即您本人）才能直接訪問和查閱這些日誌文件。</li>
                <li>**不分享：** 本機器人不會將任何收集到的用戶數據出售、交易或出租給任何第三方。</li>
            </ul>

            <!-- 4. 數據請求與刪除權利 -->
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">4. 數據請求與刪除權利</h2>
            <p>作為數據控制者，伺服器管理員有責任確保日誌檔案的隱私。</p>
            <ul class="list-disc list-inside ml-4 space-y-2">
                <li>**資料存取與刪除：** 如果您希望請求查看或刪除本機器人日誌中儲存的關於您的任何數據，請聯繫伺服器管理員 ${ADMIN_INFO_ZH}。管理員將負責在日誌檔案中查找並移除您的用戶 ID 相關記錄。</li>
            </ul>

            <!-- 5. 政策變更 -->
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">5. 政策變更</h2>
            <p>我們保留隨時更新本隱私權政策的權利。所有變更將在本政策發布後立即生效。我們建議使用者定期查閱本政策以了解任何更新。</p>

            <!-- 6. 聯繫我們 -->
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">6. 聯繫我們</h2>
            <p>如果您對本隱私權政策有任何疑問或疑慮，請透過以下方式聯繫伺服器管理員：</p>
            <ul class="list-none space-y-1 mt-4">
                <li>${ADMIN_NAME_ZH}</li>
                <li>${ADMIN_EMAIL_ZH}</li>
            </ul>
        `
    },
    'en': {
        langLabel: "Language Selection:",
        title: "Discord Profanity Bot - Privacy Policy",
        date: "Effective Date: December 15, 2025",
        content: `
            <p class="mb-4">
                This Privacy Policy explains how ${BOT_NAME} (the "Bot") collects, uses, and stores user data while you use its services.
            </p>
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-md dark:bg-yellow-900/20 dark:border-yellow-600">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <svg class="h-5 w-5 text-yellow-500 dark:text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856a2 2 0 001.996-1.785L21.75 6.75A2 2 0 0020.004 5H3.996A2 2 0 002 6.75v10.465c0 .77.568 1.41 1.344 1.555z" />
                        </svg>
                    </div>
                    <div class="ml-3">
                        <p class="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                            **Please Note:** This Bot is an automated moderation tool primarily used to maintain server order.
                        </p>
                    </div>
                </div>
            </div>

            <!-- 1. Types of Data Collected -->
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">1. Types of Data Collected</h2>
            <p>The Bot only collects and stores data necessary to perform its core functions (i.e., profanity detection and punishment).</p>

            <h3 class="text-xl font-medium text-gray-800 dark:text-gray-100 mt-4 mb-2">1.1 Data Required for Operation</h3>
            <p>When a user posts a message that triggers profanity detection on a server where the Bot is installed, the Bot collects and stores the following information:</p>

            <div class="overflow-x-auto my-6">
                <table class="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 dark:divide-gray-700">
                    <thead class="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Data Type
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Purpose of Collection
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Storage Duration
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                **User ID**
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                To identify the violating user for applying the Timeout punishment.
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                Indefinite (Until manually deleted by administrator)
                            </td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                **Message Content**
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                To serve as the basis for profanity detection and as proof of violation.
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                Indefinite (Until manually deleted by administrator)
                            </td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                **Channel ID/Name**
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                To log the location where the violation occurred.
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                Indefinite (Until manually deleted by administrator)
                            </td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                **Timestamp**
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                To record the precise time of the violation event.
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                Indefinite (Until manually deleted by administrator)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-medium text-gray-800 dark:text-gray-100 mt-6 mb-2">1.2 Data Not Collected</h3>
            <p>The Bot does not collect any sensitive personal identification information, including but not limited to: email addresses, IP addresses, passwords, date of birth, or other personal data unrelated to the Discord service.</p>

            <!-- 2. Data Usage -->
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">2. Data Usage</h2>
            <p>The data collected by the Bot is used exclusively for the following purposes:</p>
            <ol class="list-decimal list-inside ml-4 space-y-2">
                <li>**Moderation and Enforcement:** Immediately deleting violating messages and executing temporary restriction (Timeout) on violating users based on server rules.</li>
                <li>**Administrative Review:** Logging violation incidents to a local file (<code>profanity_log.txt</code>) for post-facto review and tracking by the server administrator.</li>
            </ol>

            <!-- 3. Data Storage and Security -->
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">3. Data Storage and Security</h2>
            <p>Data collected by the Bot:</p>
            <ul class="list-disc list-inside ml-4 space-y-2">
                <li>**Local Storage:** Data is stored in the **<code>profanity_log.txt</code>** file on the host running the Bot (i.e., your VPS or local computer).</li>
                <li>**Administrator Access:** Only the owner of the server host (you, the administrator) has direct access to view these log files.</li>
                <li>**No Sharing:** The Bot will not sell, trade, or rent any collected user data to any third party.</li>
            </ul>

            <!-- 4. Data Request and Deletion Rights -->
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">4. Data Request and Deletion Rights</h2>
            <p>As the Data Controller, the server administrator is responsible for ensuring the privacy of the log files.</p>
            <ul class="list-disc list-inside ml-4 space-y-2">
                <li>**Data Access and Deletion:** If you wish to request viewing or deletion of any data stored about you in the Bot's logs, please contact the server administrator ${ADMIN_INFO_EN}. The administrator is responsible for finding and removing records related to your User ID in the log file.</li>
            </ul>

            <!-- 5. Policy Changes -->
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">5. Policy Changes</h2>
            <p>We reserve the right to update this Privacy Policy at any time. All changes will take effect immediately upon posting of the updated policy. We encourage users to review this policy periodically for any updates.</p>

            <!-- 6. Contact Us -->
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">6. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact the server administrator via the following methods:</p>
            <ul class="list-none space-y-1 mt-4">
                <li>${ADMIN_NAME_EN}</li>
                <li>${ADMIN_EMAIL_EN}</li>
            </ul>
        `
    },
    'ja': {
        langLabel: "言語選択:",
        title: "Discord 暴言検出 Bot - プライバシーポリシー",
        date: "発効日：2025年12月15日",
        content: `
            <p class="mb-4">
                本プライバシーポリシーは、${BOT_NAME}（以下「本Bot」）がサービスをご利用いただく際に、ユーザーデータをどのように収集、使用、保存するかについて説明するものです。
            </p>
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-md dark:bg-yellow-900/20 dark:border-yellow-600">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <svg class="h-5 w-5 text-yellow-500 dark:text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856a2 2 0 001.996-1.785L21.75 6.75A2 2 0 0020.004 5H3.996A2 2 0 002 6.75v10.465c0 .77.568 1.41 1.344 1.555z" />
                        </svg>
                    </div>
                    <div class="ml-3">
                        <p class="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                            **ご注意：**本Botは、主にサーバーの秩序維持を目的とした自動モデレーションツールです。
                        </p>
                    </div>
                </div>
            </div>

            <!-- 1. 収集するデータの種類 -->
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100">1. 収集するデータの種類</h2>
            <p>本Botは、そのコア機能（暴言検出とペナルティ）を実行するために必要なデータのみを収集および保存します。</p>

            <h3 class="text-xl font-medium text-gray-800 dark:text-gray-100 mt-4 mb-2">1.1 必須の収集データ</h3>
            <p>ユーザーが本Botが導入されているサーバーでメッセージを投稿し、暴言検出がトリガーされた場合、本Botは以下の情報を収集および保存します。</p>

            <div class="overflow-x-auto my-6">
                <table class="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 dark:divide-gray-700">
                    <thead class="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                データ種類
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                収集目的
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                保存期間
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                **ユーザーID (User ID)**
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                違反ユーザーを識別し、タイムアウトペナルティを実行するため。
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                無期限（管理者が手動で削除するまで）
                            </td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                **メッセージ内容**
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                暴言検出の根拠、および違反の証拠として記録するため。
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                無期限（管理者が手動で削除するまで）
                            </td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                **チャンネルID/名前**
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                違反が発生した場所を記録するため。
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                無期限（管理者が手動で削除するまで）
                            </td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                **タイムスタンプ (Timestamp)**
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                違反イベントの正確な発生時刻を記録するため。
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                無期限（管理者が手動で削除するまで）
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-medium text-gray-800 dark:text-gray-100 mt-6 mb-2">1.2 収集しないデータ</h3>
            <p>本Botは、Eメールアドレス、IPアドレス、パスワード、生年月日、その他Discordサービスに関係のない個人データなど、機密性の高い個人識別情報は収集しません。</p>

            <!-- 2. データ利用 -->
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">2. データ利用</h2>
            <p>本Botが収集したデータは、以下の目的のみに使用されます。</p>
            <ol class="list-decimal list-inside ml-4 space-y-2">
                <li>**モデレーションと執行：** サーバーの設定ルールに基づき、違反メッセージを即座に削除し、違反ユーザーに一時的な制限（タイムアウト）を実行するため。</li>
                <li>**管理者による確認：** 違反インシデントをローカルファイル（<code>profanity_log.txt</code>）に記録し、サーバー管理者が事後確認および違反行為の追跡を行うため。</li>
            </ol>

            <!-- 3. データ保存とセキュリティ -->
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">3. データ保存とセキュリティ</h2>
            <p>本Botが収集したデータ：</p>
            <ul class="list-disc list-inside ml-4 space-y-2">
                <li>**ローカル保存：** データは、Botが動作しているホスト（例：お客様のVPSまたはローカルコンピューター）上の **<code>profanity_log.txt</code>** ファイルに保存されます。</li>
                <li>**管理者アクセス：** これらのログファイルに直接アクセスして閲覧できるのは、サーバーホストの所有者（お客様ご自身）のみです。</li>
                <li>**非共有：** 本Botは、収集したユーザーデータを第三者に販売、取引、または貸し出すことはありません。</li>
            </ul>

            <!-- 4. データリクエストと削除権 -->
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">4. データリクエストと削除権</h2>
            <p>データ管理者として、サーバー管理者はログファイルのプライバシーを確保する責任があります。</p>
            <ul class="list-disc list-inside ml-4 space-y-2">
                <li>**データアクセスと削除：** If you wish to request viewing or deletion of any data stored about you in the Bot's logs, please contact the server administrator ${ADMIN_INFO_EN}. The administrator is responsible for finding and removing records related to your User ID in the log file.</li>
            </ul>

            <!-- 5. ポリシー変更 -->
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">5. ポリシー変更</h2>
            <p>当方は、本プライバシーポリシーをいつでも更新する権利を留保します。すべての変更は、更新されたポリシーの掲示後直ちに有効になります。ユーザーの皆様には、定期的に本ポリシーを確認し、更新内容を把握していただくことを推奨いたします。</p>

            <!-- 6. お問い合わせ -->
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">6. お問い合わせ</h2>
            <p>本プライバシーポリシーに関するご質問や懸念事項がある場合は、以下の方法でサーバー管理者にご連絡ください。</p>
            <ul class="list-none space-y-1 mt-4">
                <li>${ADMIN_NAME_EN}</li>
                <li>${ADMIN_EMAIL_EN}</li>
            </ul>
        `
    }
};