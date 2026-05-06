export default function MatsuokaLabSite() {
  const services = [
    {
      title: "AI活用・技術相談",
      text: "生成AI，画像AI，データ活用，業務改善などについて，目的整理から実装方針まで支援します。",
    },
    {
      title: "研修・セミナー",
      text: "学校，自治体，企業向けに，生成AI活用，AIリテラシー，STEAM教育，DX人材育成に関する研修を行います。",
    },
    {
      title: "教育・探究活動支援",
      text: "AI時代の学び，探究活動，高大連携，STEAM教育プログラムの設計を支援します。",
    },
    {
      title: "研究開発・PoC支援",
      text: "画像処理，信号処理，衛星画像解析，AIモデル活用など，研究開発初期の技術検討を支援します。",
    },
  ];

  const audiences = [
    "学校・教育機関",
    "自治体・教育委員会",
    "中小企業・地域企業",
    "研究開発部門",
    "学童・STEAM教育団体",
    "生成AI活用を検討する組織",
  ];

  const menus = [
    {
      title: "初回相談",
      price: "オンライン 60分",
      text: "AI活用，研修，技術相談，教育プログラムなどについて，課題整理と方向性の確認を行います。",
    },
    {
      title: "研修・講演",
      price: "半日〜1日程度",
      text: "生成AI，AIリテラシー，STEAM教育，画像AI，データ活用など，対象者に合わせて内容を設計します。",
    },
    {
      title: "技術アドバイス",
      price: "単発・継続相談",
      text: "AI導入，画像解析，データ分析，PoC設計，研究開発テーマの整理などを支援します。",
    },
    {
      title: "顧問・伴走支援",
      price: "月次相談",
      text: "AI活用や教育DX，技術戦略について，継続的に相談できる外部アドバイザーとして支援します。",
    },
  ];

  const steps = [
    "お問い合わせ・相談内容の共有",
    "目的・課題・対象者の整理",
    "支援内容・実施方法の確認",
    "必要に応じた兼業手続き等の確認",
    "研修・相談・技術支援の実施",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-lg font-semibold tracking-tight">Matsuoka Lab</div>
            <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Human-AI Design</div>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#message" className="hover:text-slate-950">Message</a>
            <a href="#services" className="hover:text-slate-950">Services</a>
            <a href="#menu" className="hover:text-slate-950">Menu</a>
            <a href="#flow" className="hover:text-slate-950">Flow</a>
            <a href="#profile" className="hover:text-slate-950">Profile</a>
            <a href="#contact" className="hover:text-slate-950">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-20 md:grid-cols-[1.1fr_0.9fr] md:pt-28">
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-slate-500">Human-AI Design</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            AI時代における<br />
            <span className="text-slate-600">人・学び・技術</span><br />
            の関係をデザインする。
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Matsuoka Lab は，生成AI，画像AI，データ活用，STEAM教育，研究開発支援を通して，
            学校・自治体・企業のAI活用と人材育成を支援する個人活動の窓口です。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-700">
              相談する
            </a>
            <a href="#services" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100">
              できることを見る
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="rounded-[1.5rem] bg-slate-100 p-8">
            <p className="text-sm font-semibold text-slate-500">Concept</p>
            <p className="mt-4 text-2xl font-semibold leading-relaxed">
              AIを導入するだけでなく，<br />
              人がどう学び，考え，活用するかまで設計する。
            </p>
            <p className="mt-6 leading-7 text-slate-600">
              技術だけではなく，教育・研究・社会実装をつなぎ，
              AIを現場で意味ある形にするための支援を行います。
            </p>
          </div>
        </div>
      </section>

      <section id="message" className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Message</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">AIを「使う」から，「活かす」へ。</h2>
          <div className="mt-8 space-y-5 text-lg leading-9 text-slate-650">
            <p>
              生成AIの普及により，誰もがAIを使える時代になりました。一方で，AIをどのように学びに取り入れるか，
              どの業務や研究に活かすか，どこから始めればよいかに悩む現場も増えています。
            </p>
            <p>
              Matsuoka Lab では，大学教員・AI研究者としての知見をもとに，教育，研究，技術活用を横断しながら，
              人とAIがより良く協働するための設計を支援します。
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Services</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">できること</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Menu</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">相談メニュー</h2>
          <p className="mt-6 max-w-3xl leading-8 text-slate-600">
            内容や規模に応じて，単発相談，研修・講演，技術アドバイス，継続的な伴走支援に対応します。
            まずは目的や課題を整理したうえで，適切な支援方法を提案します。
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {menus.map((menu) => (
              <article key={menu.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold">{menu.title}</h3>
                  <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-500">{menu.price}</span>
                </div>
                <p className="mt-4 leading-7 text-slate-600">{menu.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="flow" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Flow</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">ご相談の流れ</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {steps.map((step, index) => (
              <div key={step} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <p className="font-semibold leading-7 text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">For whom</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">対象</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-slate-100">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="profile" className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Profile</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">運営者</h2>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-2xl font-bold">松岡 諒</h3>
            <p className="mt-2 text-slate-500">大学教員／AI研究者／Human-AI Design</p>
            <p className="mt-6 leading-8 text-slate-650">
              画像処理，信号処理，AI，リモートセンシング，生成AI活用，STEAM教育などを専門とし，
              教育・研究・社会実装をつなぐ活動に取り組んでいます。
              学校・自治体・企業向けに，AI活用支援，研修，講演，技術相談を行います。
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-600">
              <span className="rounded-full bg-white px-4 py-2">生成AI</span>
              <span className="rounded-full bg-white px-4 py-2">画像AI</span>
              <span className="rounded-full bg-white px-4 py-2">STEAM教育</span>
              <span className="rounded-full bg-white px-4 py-2">データ活用</span>
              <span className="rounded-full bg-white px-4 py-2">研究開発支援</span>
            </div>
          </div>
        </div>
      </section>

<section id="contact" className="py-20">
  <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
      Contact
    </p>

    <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
      ご相談・お問い合わせ
    </h2>

    <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600">
      AI活用，研修，講演，技術相談，教育プログラム設計などについて，
      まずは内容を整理してご相談ください。
    </p>

    <a
      href="Googleフォームの公開URL"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 inline-flex rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
    >
      フォームを別タブで開く
    </a>

    <p className="mt-8 text-sm leading-7 text-slate-500">
      ※ 所属大学とは別の個人活動として対応する内容については，
      必要に応じて兼業手続き等を行います。
    </p>
  </div>
</section>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© Matsuoka Lab</p>
          <p>Human-AI Design</p>
        </div>
      </footer>
    </main>
  );
}