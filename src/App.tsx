/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
// 確保圖片在 GitHub Pages 正常顯示的引入方式
import pic1 from './assets/pic1.png';
import pic2 from './assets/pic2.png';
import { 
  BrainCircuit, 
  Stethoscope, 
  Ambulance, 
  Clock, 
  Microscope, 
  Activity, 
  Syringe, 
  BedDouble,
  Zap,
  Info,
  Pill,
  AlertCircle,
  CreditCard,
  Map,
  FlaskConical,
  MessageSquare,
  Sparkles,
  TriangleAlert,
  ChevronRight
} from 'lucide-react';

const dataScopes = [
  { title: '門診資料', desc: '五年內各科最新一筆', icon: Stethoscope, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  { title: '急診資料', desc: '五年內急診資料最新三筆', icon: Ambulance, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100' },
  { title: '歷程紀錄', desc: '七年內的科別及診斷 (門診/急診/住院)', icon: Clock, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100' },
  { title: '微生物資料', desc: '一年內', icon: Microscope, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
  { title: '手術資料', desc: '七年內', icon: Syringe, color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-100' },
  { title: '檢驗資料', desc: '五年內相同檢驗最新三筆（例如 Hb 只會帶入最新三筆）', icon: FlaskConical, color: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-100' },
  { title: '住院資料', desc: '近五年內各科最新一筆（含出院病摘、護理入院評估）；若同科別近期有多次住院，僅匯入最新一筆', icon: BedDouble, color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100' },
];

const summaryItems = [
  { id: '01', title: '急診快速摘要', desc: '30 秒掌握病人現況，AI 提供目前急診需注意之病況建議', icon: Zap },
  { id: '02', title: '基本資料', desc: '過去病史、手術史', icon: Info },
  { id: '03', title: '門診藥物資料', desc: '含健保 IC 卡雲端藥歷；因系統限制，藥物健保碼需點連結另開網頁查詢', icon: Pill },
  { id: '04', title: '急診關注藥物', desc: '篩選低血鈉風險、出血風險、低血糖風險、免疫抑制風險藥物，並列出近期抗生素使用紀錄', icon: AlertCircle },
  { id: '05', title: '健保卡資料', desc: '近期就醫紀錄、重大檢查（CT、MRI）', icon: CreditCard },
  { id: '06', title: '六個月院內就醫軌跡', desc: '門診／急診／住院紀錄，含關鍵檢查及報告', icon: Map },
  { id: '07', title: '關鍵檢驗及檢查報告', desc: '呈現重要檢驗數值與檢查報告結果', icon: Activity },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-800 selection:bg-blue-100 selection:text-blue-900 pb-12 sm:pb-24">
      {/* Article Header */}
      <header className="bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-20">
          <div className="flex flex-col items-start gap-5 sm:gap-6">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium tracking-wide">
              <BrainCircuit className="w-4 h-4 text-blue-600" />
              <span>目前預設模型：Azure GPT-5 (企業版 GPT-5 等級)</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
              病歷彙總 AI 介紹
            </h1>
            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl">
              這份文件將帶您了解系統如何整合病歷資料，並展示其實際的應用場景與彙總項目。
            </p>
            <div className="mt-2 bg-blue-50/50 border border-blue-100 rounded-2xl p-4 sm:p-5 flex gap-3 sm:gap-4 text-blue-900 shadow-sm">
              <Info className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5 text-blue-600" />
              <div className="text-sm sm:text-base leading-relaxed">
                <strong>版面說明：</strong>實際使用時，頁面左側為彙總結果，右側為原始資料。建議直接閱讀左側的彙總資料，右側可暫時忽略。
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16 space-y-16 sm:space-y-24">
        
        {/* Table of Contents */}
        <nav className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]" aria-label="目錄">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">本頁目錄 <span className="font-normal lowercase tracking-normal text-slate-400 ml-1">(點擊可以跳轉到章節)</span></h2>
          <ul className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
            <li>
              <a href="#summary-items" className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 font-medium transition-colors group">
                <div className="w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-xs group-hover:bg-emerald-50 group-hover:border-emerald-200 group-hover:text-emerald-600 transition-colors">1</div>
                目前彙總項目
              </a>
            </li>
            <li>
              <a href="#use-cases" className="flex items-center gap-2 text-slate-600 hover:text-purple-600 font-medium transition-colors group">
                <div className="w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-xs group-hover:bg-purple-50 group-hover:border-purple-200 group-hover:text-purple-600 transition-colors">2</div>
                適用場景
              </a>
            </li>
            <li>
              <a href="#data-scope" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-colors group">
                <div className="w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-xs group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-blue-600 transition-colors">3</div>
                資料匯入範圍
              </a>
            </li>
            <li>
              <a href="#feedback" className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-medium transition-colors group">
                <div className="w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-xs group-hover:bg-indigo-50 group-hover:border-indigo-200 group-hover:text-indigo-600 transition-colors">4</div>
                意見回饋
              </a>
            </li>
          </ul>
        </nav>

        {/* Section 1: Summary Items */}
        <section id="summary-items" className="scroll-mt-24">
          <header className="mb-6 sm:mb-10">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">目前彙總項目</h2>
            </div>
            <p className="text-base sm:text-lg text-slate-600">系統會自動統整以下關鍵醫療資訊，協助快速判讀：</p>
          </header>

          <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div className="divide-y divide-slate-50">
              {summaryItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="p-5 sm:p-8 flex flex-col sm:flex-row gap-3 sm:gap-8 items-start hover:bg-slate-50/50 transition-colors">
                    <div className="flex items-center gap-3 sm:gap-4 shrink-0 sm:w-56">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="text-base sm:text-lg font-bold text-slate-900">{item.title}</span>
                    </div>
                    <p className="text-slate-600 text-sm sm:text-lg leading-relaxed sm:pt-1.5 flex-1">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* Section 2: Use Cases */}
        <section id="use-cases" className="scroll-mt-24">
          <header className="mb-6 sm:mb-10">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">適用場景</h2>
            </div>
            <p className="text-base sm:text-lg text-slate-600">了解 AI 如何在實際臨床流程中發揮作用。</p>
          </header>
          
          <div className="space-y-6 sm:space-y-8">
            
            {/* Case 1 */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 sm:w-2 h-full bg-blue-500"></div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-md bg-blue-50 text-blue-700 font-bold text-xs sm:text-sm tracking-widest mb-3 sm:mb-4">
                SCENARIO 01
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">接新病人 / 上觀察班前</h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8">
                打開彙總頁面，用 <strong className="text-blue-600 font-semibold bg-blue-50 px-1.5 sm:px-2 py-0.5 rounded">30 秒</strong> 快速掌握病人病史，無須耗時翻閱各科紀錄。
              </p>
              
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white relative group shadow-sm">
                <div className="w-full flex items-center justify-center p-4 sm:p-8 bg-slate-50">
                  <img src={pic1} alt="病歷彙總 AI 按鈕位置" className="max-w-full h-auto rounded shadow-sm border border-slate-200" />
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 sm:w-2 h-full bg-purple-500"></div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-md bg-purple-50 text-purple-700 font-bold text-xs sm:text-sm tracking-widest mb-3 sm:mb-4">
                SCENARIO 02
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">右上角「詢問 AI」功能</h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8">
                系統會自動帶入病人所有病史及既有資料，您可以直接針對目前的臨床狀況進行提問與討論。
              </p>

              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white relative group mb-6 sm:mb-8 shadow-sm">
                <div className="w-full flex items-center justify-center p-4 sm:p-8 bg-slate-50">
                  <img src={pic2} alt="詢問 AI 與補充資料欄位" className="max-w-full h-auto rounded shadow-sm border border-slate-200" />
                </div>
              </div>
              
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 flex gap-3 sm:gap-4 text-amber-900">
                <TriangleAlert className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5 text-amber-600" />
                <div className="text-sm sm:text-base leading-relaxed">
                  <strong>注意事項：</strong>對話自動帶入之資料 <span className="underline decoration-amber-400 underline-offset-4 decoration-2">不含本次急診的現病史、當次抽血報告及檢驗結果</span>。如需納入做綜合判斷，請手動貼於「補充資料」欄位。
                </div>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 sm:mb-4">範例提問</h4>
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 sm:p-5 text-slate-700 text-sm sm:text-lg leading-relaxed flex items-start gap-3 sm:gap-4">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 mt-1 shrink-0" />
                    <p>「病人表示用目前的安眠藥還是睡不著，請建議二線藥物。」</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 sm:p-5 text-slate-700 text-sm sm:text-lg leading-relaxed flex items-start gap-3 sm:gap-4">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 mt-1 shrink-0" />
                    <p>「目前診斷是 UTI，根據之前的培養報告建議這次的抗生素。」</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <hr className="border-slate-100" />

        {/* Section 3: Data Scope */}
        <section id="data-scope" className="scroll-mt-24">
          <header className="mb-6 sm:mb-10">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">資料匯入範圍</h2>
            </div>
            <p className="text-base sm:text-lg text-slate-600">考量效率與匯入速度，目前系統撈取的資料範圍如下：</p>
          </header>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
            {dataScopes.map((scope, idx) => {
              const Icon = scope.icon;
              return (
                <div key={idx} className={`bg-white rounded-2xl p-5 sm:p-6 border ${scope.border} shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex items-start gap-3 sm:gap-4 transition-transform hover:-translate-y-1 duration-300`}>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${scope.bg} ${scope.color} flex items-center justify-center shrink-0`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">{scope.title}</h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{scope.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* Section 4: Feedback */}
        <section id="feedback" className="scroll-mt-24 pb-8">
          <div className="bg-blue-50 rounded-3xl p-8 sm:p-10 border border-blue-100 shadow-[0_4px_20px_-4px_rgba(59,130,246,0.1)] text-center flex flex-col items-center justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">我們需要您的寶貴建議</h2>
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl">
              若您在使用上有任何問題、功能建議，或發現需要修正的地方，歡迎透過下方的回饋表單與我們聯繫。
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdmG1lU2EZ0dIebMtatexqoE3PJ0B3WDxAsAbbuEE9g3VbM2w/viewform?usp=publish-editor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
            >
              <MessageSquare className="w-5 h-5" />
              <span>填寫意見回饋表單</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

