import React, { useState, useEffect } from 'react';
import { Mail, ArrowRight, ExternalLink, MapPin, BarChart3, Briefcase, TrendingUp, Lightbulb, Globe, Download, CheckCircle2, Calendar, Users, Award, Smartphone, FileText, Building2, Landmark, ShoppingBag, Map } from 'lucide-react';

// --- CONFIGURATION: WordPress Setup ---
const WORDPRESS_URL = ""; 

// --- Multi-language Content System ---
const content = {
    en: {
        nav: { about: "About", reels: "Reels", social: "Social", articles: "Articles", events: "Events", cv: "Resume", contact: "Contact" },
        hero: {
            badge: "Account Servicing • Business Development • Project Management",
            title: "Turning Creative Vision into",
            titleHighlight: "Commercial Precision",
            subtitle: "Bridging the gap between creative strategy and commercial results. I manage Tier-1 accounts and execute complex projects that deliver ROI.",
            cta: "View Selected Works"
        },
        clients: {
            title: "Trusted By Tier-1 Brands",
            desc: "Delivering strategic campaigns and account management for industry leaders across diverse sectors.",
            cats: {
                travel: "Travel & Hospitality",
                fnb: "FMCG, Retail & Property",
                finance: "Finance & Government",
                tech: "Telecom & Tech",
                gba: "GBA & Leisure"
            }
        },
        expertise: {
            title: "Professional Expertise",
            desc: "A holistic approach combining commercial acumen, rigorous project management, and tech-enabled creativity.",
            cards: [
                { 
                    title: "Account Servicing & Biz Dev", 
                    desc: "Managing end-to-end client relationships for Tier-1 brands (Cathay, HSBC). Crafting persuasive pitch decks that secure budgets and drive revenue.",
                    icon: <TrendingUp size={24} />
                },
                { 
                    title: "Project & Event Management", 
                    desc: "Orchestrating large-scale events and digital campaigns. Overseeing logistics, timelines, and P&L to ensure seamless execution from brief to launch.",
                    icon: <Briefcase size={24} />
                },
                { 
                    title: "Creative & AI Intelligence", 
                    desc: "Directing engaging content strategies while leveraging AI tools for concept visualization and workflow efficiency, ensuring creativity meets speed.",
                    icon: <Lightbulb size={24} />
                }
            ]
        },
        cv: {
            title: "Digital Resume",
            download: "Download PDF",
            summary: "Project Executive with a unique hybrid background: Media Agency (Data & Strategy) + Publisher (Content & Sales). Proven track record in driving ad revenue, managing tier-1 accounts (Cathay, HSBC), and orchestrating large-scale events.",
            expTitle: "Professional Experience",
            eduTitle: "Education",
            skillsTitle: "Core Competencies",
            jobs: [
                {
                    role: "Project Executive",
                    company: "New Media Group HK (BU: GOtrip)",
                    period: "Nov 2024 – Present",
                    desc: "Managing full-cycle digital campaigns and large-scale events for travel & lifestyle clients.",
                    points: [
                        "**Account Strategy:** Structure customized advertising packages based on client briefs, transforming creative ideas into revenue-generating proposals.",
                        "**Event Management:** Orchestrate major industry events like 'GOtrip Travel Awards 2025' and coordinate expo booth logistics (Klook, AirAsia).",
                        "**Content Production:** Direct social feeds and video campaigns, monitoring performance via Meta Ads Manager."
                    ]
                },
                {
                    role: "Media Executive",
                    company: "Omnicom Media Group",
                    period: "Oct 2023 – Oct 2024",
                    desc: "Specialized in market intelligence and performance marketing for finance clients (HSBC).",
                    points: [
                        "**Market Intelligence:** Conducted competitive research and media trend analysis to identify consumer insights.",
                        "**Performance Marketing:** Managed SEM performance boosting and generated data-driven optimization reports.",
                        "**Project Management:** Coordinated end-to-end campaign workflows and financial documentation."
                    ]
                }
            ]
        },
        portfolio: {
            title: "Selected Works",
            subtitle: "Curated works featuring Social Feeds, Reels, Articles, and Events.",
            sections: {
                reel: { title: "Reels & Video", desc: "Short-form video strategies engaging Gen Z audiences." },
                social_feed: { title: "Social Feeds", desc: "High-performance posts for Tier-1 clients." },
                article: { title: "Editorial Articles", desc: "SEO-driven long-form content & storytelling." },
                event: { title: "Event Management", desc: "O2O activations, awards ceremonies & expos." }
            }
        }
    },
    zh: {
        nav: { about: "關於我", reels: "短影音", social: "社群", articles: "文章", events: "活動", cv: "履歷", contact: "聯絡" },
        hero: {
            badge: "客戶服務 • 業務拓展 • 項目管理",
            title: "精準佈局",
            titleHighlight: "極致變現",
            subtitle: "連結創意策略與商業成效。我專注於管理一線客戶，執行能帶來實質投資回報 (ROI) 的複雜項目。",
            cta: "查看精選作品"
        },
        clients: {
            title: "合作品牌與機構",
            desc: "為各行業的一線品牌與官方機構提供策略性行銷與專業客戶服務。",
            cats: {
                travel: "旅遊與航空",
                fnb: "快消、零售與地產",
                finance: "金融與政府機構",
                tech: "電訊與科技",
                gba: "大灣區與文旅"
            }
        },
        expertise: {
            title: "專業領域",
            desc: "結合商業敏銳度、嚴謹項目管理與科技賦能創意的全方位行銷專家。",
            cards: [
                { 
                    title: "客戶服務與業務拓展", 
                    desc: "管理一線品牌（國泰、HSBC）的端對端客戶關係。製作具說服力的提案簡報 (Pitch Decks)，成功爭取預算並推動營收增長。",
                    icon: <TrendingUp size={24} />
                },
                { 
                    title: "項目與活動統籌", 
                    desc: "策劃大型活動與數位行銷專案。監控物流、時間表及損益表 (P&L)，確保從 Brief 到上線的執行流程無縫銜接。",
                    icon: <Briefcase size={24} />
                },
                { 
                    title: "創意策略與 AI 應用", 
                    desc: "指導具吸引力的內容策略，並運用 AI 工具進行概念視覺化與提升工作流效率，確保創意與速度兼備。",
                    icon: <Lightbulb size={24} />
                }
            ]
        },
        cv: {
            title: "個人履歷",
            download: "下載 PDF",
            summary: "擁有獨特混合背景的 Project Executive：兼具 Media Agency（數據與策略）及 Publisher（內容與銷售）經驗。擅長推動廣告營收、管理一線客戶（國泰、HSBC），並策劃大型行業活動。",
            expTitle: "工作經歷",
            eduTitle: "教育背景",
            skillsTitle: "核心競爭力",
            jobs: [
                {
                    role: "項目主任 (Project Executive)",
                    company: "新傳企劃 New Media Group (GOtrip)",
                    period: "2024年11月 – 現在",
                    desc: "負責旅遊及生活品牌的全方位數位行銷活動及大型線下活動管理。",
                    points: [
                        "**客戶策略：** 根據客戶需求構建客製化廣告方案，將創意轉化為具商業價值的提案。",
                        "**活動管理：** 策劃大型行業活動如《GOtrip Travel Awards 2025》，並統籌旅遊展攤位物流（Klook, AirAsia）。",
                        "**內容製作：** 指導社交媒體貼文及影片製作，並透過 Meta Ads Manager 監控成效。"
                    ]
                },
                {
                    role: "媒介主任 (Media Executive)",
                    company: "宏盟媒體集團 Omnicom Media Group",
                    period: "2023年10月 – 2024年10月",
                    desc: "專注於金融客戶 (HSBC) 的市場情報分析及成效行銷。",
                    points: [
                        "**市場情報：** 進行競品研究及媒體趨勢分析，發掘消費者洞察。",
                        "**成效行銷：** 管理 SEM 廣告投放優化，並製作數據驅動的成效報告。",
                        "**項目管理：** 協調端對端廣告活動流程及財務文件管理。"
                    ]
                }
            ]
        },
        portfolio: {
            title: "精選作品",
            subtitle: "展示社群貼文、短影音、文章及活動策劃。",
            sections: {
                reel: { title: "Reels & Video"},
                social_feed: { title: "Social Feeds", desc: "一線品牌的高效能貼文。" },
                article: { title: "Editorial Articles", desc: "SEO 導向的長文與故事行銷。" },
                event: { title: "Event Management", desc: "O2O 活動、頒獎典禮與展覽統籌。" }
            }
        }
    }
};

// --- Client Data ---
const clientList = {
    travel: ["Cathay Pacific 國泰航空", "Singapore Airlines 新加坡航空", "Tourism Australia 澳洲旅遊局", "MGTO 澳門旅遊局", "Taiwan Tourism Board 台灣觀光署", "Sands 金沙集團", "Galaxy Macau 澳門銀河", "Melco 新濠", "St. Regis Macao 澳門瑞吉酒店", "HK Express 香港快運", "AirAsia 亞洲航空", "Vietnam Airlines 越南航空", "Jetour 捷旅", "EGL Tours 東瀛遊", "Jebsen Travel 捷成旅遊", "Goldjoy 金怡假期", "Kwoon Chung Bus 冠忠巴士"],
    fnb: ["Keeta", "Vitasoy 維他奶", "Lay's 樂事", "Aptamil 愛他美", "SHKP 新鴻基地產", "Link 領展", "Plaza Hollywood 荷里活廣場", "YATA 一田", "Circle K OK便利店", "Garden 嘉頓"],
    finance: ["HKMA 香港金融管理局", "Octopus 八達通","OneDegree","AEON Credit Card AEON信貸財務", "Crefit"],
    tech: ["csl", "3HK", "Airsim 無國界上網卡"],
    gba: ["Chimelong 長隆", "華發冰雪熱雪奇蹟", "望海樓"]
};

// --- Projects Data ---
const projects = [
    // --- REELS (Short Video) ---
    {
        id: 1,
        type: "reel", 
        client: "Chimelong (長隆)",
        campaign: "Gen Z Holiday Rebranding",
        role: "Creative Director",
        description: {
            en: "Rebranded Chimelong as a Gen Z hotspot. Curated 'Couple's Day Out' vlogs (Guangzhou & Zhuhai) focusing on holiday planning topics.",
            zh: "將長隆重塑為 Z 世代旅遊熱點。策劃廣州與珠海「情侶拍一日拖」Vlog 系列，聚焦假期規劃話題，吸引年輕客群。"
        },
        metrics: "Gen Z Engagement | Rebranding",
        mediaUrl: "https://i.imgur.com/THnBmxs.png", 
        links: [
             { label: "Vlog: GZ & Qingyuan", url: "https://www.instagram.com/p/DReiUTxE2VF/" },
             { label: "Vlog: Zhuhai", url: "https://www.instagram.com/p/DR_5RGlDG1f/" }
        ],
        tags: ["Reels", "Travel", "Gen Z"],
        isVideo: false 
    },
    {
        id: 2,
        type: "reel", 
        client: "HKMA (金管局)",
        campaign: "Anti-scam Campaign 2025",
        role: "Creative Strategist",
        description: {
            en: "Showcased AI capability by generating the 'Moving Banana' visual. Revitalized government PSA with a humorous, viral-friendly hook.",
            zh: "展示 AI 應用能力，生成「動感香蕉」視覺素材。以幽默、具傳播力的創意重塑政府防騙宣傳。"
        },
        metrics: "AI Generation | Viral Creativity",
        mediaUrl: "https://i.imgur.com/jIw2y88.png",
        link: "https://www.instagram.com/p/DS194iikzGN/",
        tags: ["Reels", "Gov Client", "AI Tools"],
        isVideo: false
    },
    {
        id: 3,
        type: "reel", 
        client: "Aptamil",
        campaign: "Infant Nutrition Series",
        role: "Content Producer",
        description: {
            en: "Produced engaging social reels for infant nutrition, translating product benefits into relatable content for parents.",
            zh: "製作嬰幼兒營養品社群 Reels，將產品優勢轉化為家長有共鳴的內容。"
        },
        metrics: "Brand Awareness | Parenting",
        mediaUrl: "https://i.imgur.com/g3tTn0b.png",
        links: [
            { label: "Episode 1", url: "https://www.instagram.com/reel/DIal5EFBA2b/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
            { label: "Episode 2", url: "https://www.instagram.com/reel/DMFzxdgSerG/" }
       ],
        tags: ["FMCG", "Reels", "Parenting"],
        isVideo: false
    },

    // --- SOCIAL FEED (Photo Posts) ---
    {
        id: 6,
        type: "social_feed", 
        client: "Cathay Pacific",
        campaign: "Multi-Platform Route Campaigns",
        role: "Account Executive",
        description: {
            en: "Orchestrated a comprehensive series of social media campaigns across top-tier lifestyle publishers. Managed complex deliverables and maintained strict brand safety for multiple new flight routes.",
            zh: "統籌並執行國泰航空跨平台大型社群推廣，覆蓋《新假期》、《Sunday Kiss》等頭部媒體。在嚴格的品牌規範下，針對多條新航線進行精準曝光，成功帶動極高社群互動率與品牌聲量。"
        },
        metrics: "Tier 1 Client | Multi-Platform",
        mediaUrl: "https://i.imgur.com/DpAWmTr.png", 
        links: [
            { label: "海外留學", url: "https://www.facebook.com/SundayKiss/posts/1190286423143567" },
            { label: "亞拉伯直航", url: "https://www.facebook.com/WeekendWeekly/posts/1157086466461655" },
            { label: "東京馬拉松", url: "https://www.instagram.com/p/DOID2Vwk9e0/?img_index=1" },
            { label: "Fly with Miles", url: "https://www.instagram.com/p/DPEMTNUEbeM/" },
            { label: "渣打國泰Mastercard®", url: "https://www.facebook.com/weekendweekly/posts/1230690449101256" },
            { label: "長沙新航點", url: "https://www.instagram.com/p/DQVrYV4iIFK/" },
            { label: "連結里賞", url: "https://www.facebook.com/weekendweekly/posts/1248838377286463" }
        ],
        tags: ["Social Feed", "Aviation", "Brand"],
        isVideo: false
    },
    {
        id: 41,
        type: "social_feed", 
        client: "The Manor (St. Regis Macao)",
        campaign: "Premium Dining Experience",
        role: "Content Lead",
        description: {
            en: "Crafted a compelling social media promotion focusing exclusively on The Manor, the high-end restaurant at St. Regis Macao, showcasing its exquisite culinary offerings to drive reservations and brand prestige.",
            zh: "專注推廣澳門瑞吉酒店內的高級餐廳 The Manor（雅舍），透過極具吸引力的社群圖文及影音展現其極致奢華的餐飲體驗，成功提升品牌格調與訂座率。"
        },
        metrics: "Fine Dining | Brand Prestige",
        mediaUrl: "https://i.imgur.com/jRAZF79.jpeg", 
        links: [
            { label: "The Manor FB Feed", url: "https://www.facebook.com/gotrip/posts/1153283460158698" },
            { label: "The Manor Reels", url: "https://www.instagram.com/p/DPBWYdGE6HY/" },
        ],
        tags: ["Social Feed", "Fine Dining", "Luxury"],
        isVideo: false
    },
    {
        id: 42,
        type: "social_feed", 
        client: "Keeta",
        campaign: "Seasonal & Brand Partnership Campaigns",
        role: "Account Executive",
        description: {
            en: "Managed a series of high-impact promotional posts for Keeta, integrating cultural moments (CNY Poon Choi) and brand partnerships (MOS Burger) to drive app engagement.",
            zh: "管理 Keeta 的一系列高曝光推廣貼文，巧妙結合節慶文化（如農曆新年盆菜）及品牌合作（MOS Burger），有效提升 App 的互動與使用率。"
        },
        metrics: "Brand Awareness | F&B",
        mediaUrl: "https://i.imgur.com/UWI843M.png",
        links: [
            { label: "盆菜", url: "https://www.instagram.com/p/DFC-_ksh8x8/?igsh=MXN1dWQxOHV1azFnbg==" },
            { label: "年初四咁嘅樣", url: "https://www.instagram.com/p/DFpSQMohCG_/?utm_source=ig_web_copy_link" },
            { label: "MOS BURGER", url: "https://www.instagram.com/p/DIQEKfnPCBJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D" },
            { label: "無門檻餐飲券", url: "https://www.facebook.com/WeekendWeekly/posts/1097634722406830" }
        ],
        tags: ["Social Feed", "F&B", "Promotions"],
        isVideo: false
    },

    // --- ARTICLES ---
    {
        id: 75,
        type: "article", 
        client: "Tourism Tasmania",
        campaign: "Tasmania Travel Guide 《塔斯曼尼亞潮什麼》",
        role: "Content Lead",
        description: {
            en: "A comprehensive SEO-driven travel guide complementing the TVB show 'Tasmania', featuring 11 must-visit spots, seafood adventures, and farm stays.",
            zh: "配合TVB旅遊節目《塔斯曼尼亞潮什麼》，為讀者精選11大必去景點而撰寫的深度自駕遊懶人包，有效帶動極高搜尋流量。"
        },
        metrics: "SEO Ranking | Travel Guide",
        mediaUrl: "https://i.imgur.com/hGW7D1T.png", 
        link: "https://www.weekendhk.com/3353346/",
        tags: ["Article", "Travel", "SEO"],
        isVideo: false
    },
    {
        id: 8,
        type: "article", 
        client: "Jetour (捷旅)",
        campaign: "High-End European Tour",
        role: "Content Lead",
        description: {
            en: "Editorial feature for a luxury European tour, focusing on in-depth itinerary details to drive high-value leads.",
            zh: "針對高端歐洲旅行團的深度編輯文章，詳盡介紹行程特色以吸引高價值潛在客戶 (High-End)。"
        },
        metrics: "High-End Travel | Lead Gen",
        mediaUrl: "https://i.imgur.com/NNu5AWU.png",
        link: "https://www.gotrip.hk/1601976",
        tags: ["Article", "Luxury", "SEO"],
        isVideo: false
    },
    {
        id: 9,
        type: "article", 
        client: "OneDegree",
        campaign: "Hot Topic Integration for Home Insurance",
        role: "Content Strategist",
        description: {
            en: "Leveraged trending social topics to introduce home insurance concepts, making complex terms relatable.",
            zh: "結合熱門社會話題 (Hot Topic) 切入家居保險概念，將複雜條款轉化為貼近生活的內容。"
        },
        metrics: "Hot Topic | Education",
        mediaUrl: "https://i.imgur.com/JFt4gG9.png",
        link: "https://www.weekendhk.com/weekspecial/%e5%ae%b6%e5%b1%85%e4%bf%9d%e9%9a%aa-3062663/",
        tags: ["Article", "Finance", "Education"],
        isVideo: false
    },

    // --- EVENTS ---
    {
        id: 101,
        type: "event", 
        client: "GOtrip Luxe x Goldjoy (金怡假期) / Jetour (捷旅) / Travel Expert (專業旅運)",
        campaign: "VIP Luncheon Event",
        role: "Event Lead",
        description: {
            en: "Organized an exclusive O2O luncheon connecting travel agency with affluent customers to promote cruises package. Managed precise digital recruitment targeting VIPs with monthly incomes of HK$100k - 200k+.",
            zh: "為金怡假期策劃獨家 VIP 午宴，結合線上招募與線下活動 (O2O)。精準鎖定並邀請月入 10 萬至 20 萬以上的高淨值客戶，提升品牌與高端受眾的深度互動。"
        },
        metrics: "Target Recruitment | HNW",
        mediaUrl: "https://i.imgur.com/GiVKej9.jpeg", 
        links: [
            { label: "Recruitment Post Goldjoy (金怡假期) ", url: "https://www.facebook.com/gotrip/posts/1007557334731312" },
            { label: "Event Showcase Goldjoy (金怡假期)", url: "https://www.facebook.com/gotrip/posts/1027839216036457" },
            { label: "Recruitment Post Jetour (捷旅) ", url: "https://www.facebook.com/gotrip/posts/1092905552863156" },
            { label: "Event Showcase Jetour (捷旅)", url: "https://www.facebook.com/gotrip/posts/1142070261280018" },
            { label: "Recruitment Post Travel Expert (專業旅運)", url: "https://www.facebook.com/gotrip/posts/989953679825011" },
            { label: "Event Showcase Travel Expert (專業旅運)", url: "https://www.facebook.com/gotrip/posts/1005956101558102" }
        ],
        tags: ["Event", "Luxury", "B2C"],
        isVideo: false
    },
    {
        id: 102,
        type: "event", 
        client: "GOtrip GoMedal Travel Awards (GOtrip金牌旅遊產品選舉)",
        campaign: "Industry Ceremony",
        role: "Event Orchestrator",
        description: {
            en: "Orchestrated an exclusive award ceremony for 50+ industry winners. Managed stage production, rundown, and winner coordination.",
            zh: "統籌 50+ 位得獎者的獨家頒獎典禮。負責舞台製作、活動流程及得獎者聯絡協調。"
        },
        metrics: "50+ Winners | Ceremony",
        mediaUrl: "https://i.imgur.com/7TFFRHN.jpeg", 
        links: [
            { label: "Campaign Website ", url: "https://www.gotrip.hk/awards/travelawards2025/" },
            { label: "Event Showcase", url: "https://www.facebook.com/gotrip/posts/-gotrip%E9%87%91%E7%89%8C%E6%97%85%E9%81%8A%E7%94%A2%E5%93%81%E9%81%B8%E8%88%892025-%E5%A4%A7%E7%8D%8E%E5%90%8D%E5%96%AE%E5%87%BA%E7%88%90%E5%95%A6%E5%8D%B3%E7%9D%87%E5%BE%97%E7%8D%8E%E5%90%8D%E5%96%AE-httppnmgcomhkhkmt58gotrip%E9%87%91%E7%89%8C%E6%97%85%E9%81%8A%E7%94%A2%E5%93%81%E9%81%B8%E8%88%892025%E5%98%85%E7%B5%90%E6%9E%9C%E7%B5%82%E6%96%BC%E5%85%AC%E4%BD%88%E5%96%87%E9%A0%92/1051350660351979/" },
        ],
        tags: ["Event", "B2B", "Logistics"],
        isVideo: false
    },
    {
        id: 103,
        type: "event", 
        client: "HK Holiday & Travel Expo",
        campaign: "Booth Activation",
        role: "Logistics Coordinator",
        description: {
            en: "Managed booth production and on-site logistics for key partners (Klook, AirAsia). Ensured brand visibility and smooth operations within the booth area.",
            zh: "管理合作夥伴（Klook, AirAsia）的展覽攤位製作及現場物流。確保攤位區域內的品牌曝光及運作順暢。"
        },
        metrics: "Booth Production | Logistics",
        mediaUrl: "https://i.imgur.com/0A8Tiam.jpeg",
        tags: ["Event", "Booth", "Coordination"],
        isVideo: false
    }
];

// --- Components ---

const ClientsSection = ({ lang, t }) => (
    <section className="py-16 bg-white border-t border-slate-100 relative z-20 shadow-sm">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full text-blue-700 text-xs font-bold uppercase tracking-wide mb-4">
                    <Award size={14} /> Client Portfolio
                </div>
                <h2 className="text-2xl md:text-3xl font-serif-display font-bold text-slate-900 mb-3">{t.clients.title}</h2>
                <p className="text-slate-500 text-sm">{t.clients.desc}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                {Object.entries(clientList).map(([key, brands]) => (
                    <div key={key} className="flex flex-col">
                        <div className="flex items-center gap-2 mb-4 text-blue-700 font-bold border-b border-slate-100 pb-3">
                            {key === 'travel' && <Map size={18} />}
                            {key === 'fnb' && <ShoppingBag size={18} />}
                            {key === 'finance' && <Landmark size={18} />}
                            {key === 'tech' && <Smartphone size={18} />}
                            {key === 'gba' && <Building2 size={18} />}
                            <h3 className="text-sm tracking-wide">{t.clients.cats[key]}</h3>
                        </div>
                        <ul className="space-y-3 flex-grow">
                            {brands.map((brand, idx) => (
                                <li key={idx} className={`text-sm flex items-start gap-2 ${idx < 3 ? 'text-slate-900 font-semibold' : 'text-slate-500 hover:text-slate-800 transition'}`}>
                                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${idx < 3 ? 'bg-blue-500' : 'bg-slate-200'}`}></span>
                                    {brand}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const ProjectCard = ({ project, lang }) => (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-blue-100 overflow-hidden flex flex-col h-full">
        <div className={`relative overflow-hidden bg-slate-200 ${
            project.type === 'reel' ? 'aspect-[4/5]' : 
            project.type === 'article' ? 'aspect-[16/9]' : 
            'aspect-[4/3]'
        }`}>
            {project.isVideo ? (
                <video src={project.mediaUrl} className="w-full h-full object-cover" muted loop autoPlay playsInline />
            ) : (
                <img src={project.mediaUrl} alt={project.campaign} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            )}
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-800 uppercase tracking-wider">
                {project.type.replace('_', ' ')}
            </div>
            
            {project.link && !project.links && (
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                     <a href={project.link} target="_blank" rel="noreferrer" className="bg-white/90 p-2 rounded-full text-slate-900 hover:text-blue-600 block shadow-sm">
                        <ExternalLink size={16} />
                     </a>
                </div>
            )}
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-serif-display text-xl font-bold mb-1 text-slate-900">{project.client}</h3>
            <p className="text-sm font-medium text-slate-500 mb-3">{project.campaign}</p>
            <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                {project.description[lang]}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded border border-slate-200">#{tag}</span>
                ))}
            </div>
            <div className="pt-4 border-t border-slate-100 mt-auto flex flex-col gap-3">
                <span className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded font-bold w-fit">
                    {project.metrics}
                </span>
                
                {project.links ? (
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.links.map((link, idx) => (
                            <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="flex items-center text-xs font-bold bg-slate-50 text-blue-600 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-lg transition border border-blue-100">
                                {link.label} <ArrowRight size={12} className="ml-1" />
                            </a>
                        ))}
                    </div>
                ) : project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition group-hover:translate-x-1 mt-2">
                        View Project <ArrowRight size={16} className="ml-1" />
                    </a>
                ) : null}
            </div>
        </div>
    </div>
);

const CVSection = ({ lang, t }) => (
    <section id="cv" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex justify-between items-center mb-10 border-b border-slate-100 pb-6">
                <h2 className="text-3xl font-serif-display font-bold text-slate-900">{t.cv.title}</h2>
                <button className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition shadow-lg hover:shadow-xl">
                    <Download size={16} /> {t.cv.download}
                </button>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-1 space-y-10">
                    <div>
                        <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Profile</h3>
                        <p className="text-slate-600 text-sm leading-relaxed bg-slate-50 p-5 rounded-xl border border-slate-100">
                            {t.cv.summary}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">{t.cv.skillsTitle}</h3>
                        <div className="flex flex-wrap gap-2">
                             {['Meta Ads Manager', 'SEO', 'Generative AI', 'Pitch Deck', 'Client Relations'].map(s => (
                                 <span key={s} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">{s}</span>
                             ))}
                        </div>
                    </div>
                    
                    <div>
                         <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">{t.cv.eduTitle}</h3>
                         <div className="mb-4">
                             <p className="font-bold text-slate-900">HKBU</p>
                             <p className="text-xs text-slate-500">Bachelor of Communication (Journalism)</p>
                             <p className="text-xs text-slate-400">2019 - 2023</p>
                         </div>
                         <div>
                             <p className="font-bold text-slate-900">Nagasaki University</p>
                             <p className="text-xs text-slate-500">Exchange Program</p>
                             <p className="text-xs text-slate-400">2023</p>
                         </div>
                    </div>
                </div>

                <div className="md:col-span-2">
                    <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-6">{t.cv.expTitle}</h3>
                    <div className="space-y-10 border-l-2 border-slate-100 ml-3 pl-8">
                        {t.cv.jobs.map((job, i) => (
                            <div key={i} className="relative">
                                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-white border-4 border-blue-500 rounded-full"></div>
                                <div className="flex flex-wrap justify-between items-baseline mb-2">
                                    <h4 className="text-xl font-bold text-slate-900">{job.role}</h4>
                                    <span className="text-sm font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full">{job.period}</span>
                                </div>
                                <p className="text-blue-700 font-medium mb-3">{job.company}</p>
                                <p className="text-slate-600 text-sm mb-4 italic">{job.desc}</p>
                                <ul className="space-y-3">
                                    {job.points.map((pt, idx) => {
                                        const [bold, rest] = pt.split('**').filter(Boolean);
                                        return (
                                            <li key={idx} className="text-sm text-slate-700 flex gap-3">
                                                <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                                                <span><strong className="text-slate-900">{bold}</strong>{rest}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default function App() {
    const [lang, setLang] = useState('en');
    const [isScrolled, setIsScrolled] = useState(false);
    
    // State for projects data
    const [projectsData, setProjectsData] = useState(projects);

    useEffect(() => {
        const handleScroll = () => { setIsScrolled(window.scrollY > 50); };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const t = content[lang];
    const categories = ['reel', 'social_feed', 'article', 'event'];

    return (
        <div className="min-h-screen text-slate-800 bg-[#FAFAF9] font-sans-inter">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap');
                .font-serif-display { font-family: 'Playfair Display', serif; }
                .font-sans-inter { font-family: 'Inter', sans-serif; }
            `}</style>
            
            <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="font-bold text-xl tracking-tight font-serif-display text-slate-900">May Chan.</div>
                    
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
                            className="flex items-center gap-1 bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-full text-xs font-bold transition"
                        >
                            <Globe size={14} /> {lang === 'en' ? '中文' : 'EN'}
                        </button>

                        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                            <a href="#about" className="hover:text-blue-600 transition">{t.nav.about}</a>
                            {categories.map(cat => (
                                <a key={cat} href={`#${cat}`} className="hover:text-blue-600 transition">{t.nav[cat === 'social_feed' ? 'social' : cat + 's']}</a>
                            ))}
                            <a href="#cv" className="hover:text-blue-600 transition">{t.nav.cv}</a>
                            
                            <a href="mailto:clkmay2@gmail.com" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30">
                                {t.nav.contact}
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

                <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-6 uppercase tracking-wide border border-blue-100">
                            <MapPin size={12} className="mr-1" /> Based in Hong Kong
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-slate-900 font-serif-display">
                            {t.hero.title} <br/>
                            <span className="italic text-blue-600 relative inline-block">
                                {t.hero.titleHighlight}
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>.
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            {t.hero.subtitle}
                        </p>
                        <div className="flex gap-4">
                            <a href="#reel" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-lg hover:shadow-blue-600/30">
                                {t.hero.cta} <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>
                    
                    <div className="relative">
                        <div className="relative aspect-[4/5] md:aspect-square bg-white p-3 rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition duration-500">
                            <div className="w-full h-full bg-slate-100 rounded-xl overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=800&q=80" alt="Meta Ads Manager Dashboard" className="object-cover w-full h-full opacity-90" />
                                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg border border-white/50">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="bg-blue-100 p-2 rounded-full text-blue-700"><BarChart3 size={18} /></div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-400 uppercase">Strategy</p>
                                            <p className="font-bold text-slate-900">Revenue Growth</p>
                                        </div>
                                    </div>
                                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-blue-600 w-[85%] h-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <ClientsSection lang={lang} t={t} />

            {/* Professional Expertise Section */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden" id="about">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-blue-300 text-xs font-bold uppercase tracking-wide mb-4">
                            <Briefcase size={14} /> Value Proposition
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif-display font-bold mb-4">{t.expertise.title}</h2>
                        <p className="text-slate-400 text-lg">{t.expertise.desc}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {t.expertise.cards.map((card, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition group">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 font-serif-display">{card.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Sections - Divided into 4 separate blocks */}
            <div className="bg-[#F5F5F0]">
                {categories.map((category) => (
                    <section key={category} id={category} className="py-20 border-b border-slate-200/50 last:border-0 scroll-mt-20">
                        <div className="container mx-auto px-6">
                            <div className="mb-12 max-w-3xl">
                                <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-blue-700 text-sm font-bold uppercase tracking-widest mb-4 shadow-sm border border-blue-50">
                                    {category === 'reel' && <Smartphone size={16} />}
                                    {category === 'social_feed' && <Users size={16} />}
                                    {category === 'article' && <FileText size={16} />}
                                    {category === 'event' && <Calendar size={16} />}
                                    {t.portfolio.sections[category].title}
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif-display font-bold text-slate-900 mb-3">{t.portfolio.sections[category].title}</h2>
                                <p className="text-slate-500 text-lg">{t.portfolio.sections[category].desc}</p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {projectsData.filter(p => p.type === category).map((project) => (
                                    <div key={project.id} className="h-full">
                                        <ProjectCard project={project} lang={lang} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            <CVSection lang={lang} t={t} />

            <footer className="bg-slate-900 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-3xl font-serif-display mb-8">Ready to elevate your brand strategy?</h3>
                    <div className="flex justify-center gap-6 mb-10">
                        <a href="mailto:clkmay2@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition flex items-center gap-2">
                            <Mail size={20} /> clkmay2@gmail.com
                        </a>
                        <a href="https://maylokchan.wixsite.com/chanlokkiu" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition flex items-center gap-2">
                            <ExternalLink size={20} /> Old Portfolio
                        </a>
                    </div>
                    <p className="text-slate-500 text-sm">© 2026 May Chan. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}