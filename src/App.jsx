export default function MatsuokaLabHomepage() {
  const principles = [
    {
      title: "責任の所在を曖昧にしない",
      text: "誰が判断し、誰が実行し、誰が責任を持つのかを明確にします。支援と責任は分けて考えます。",
    },
    {
      title: "失敗は許される、学ばないことは許されない",
      text: "失敗は挑戦の一部です。ただし、振り返り、改善し、次に活かすことを重視します。",
    },
    {
      title: "見かけではなく本質を育てる",
      text: "表面的な整い方ではなく、理解・思考・改善・継続の積み重ねを重視します。",
    },
  ];

  const systemItems = [
    {
      title: "理念",
      items: [
        "自分で考え、根拠をもって判断する力を育てる",
        "失敗から学びながら、自立して前に進める力を育てる",
        "生成AIは思考の代行ではなく、思考補助として活用する",
      ],
    },
    {
      title: "制度",
      items: [
        "自立支援型指導",
        "段階的成長を重視した教育設計",
        "成果だけでなく過程も見る評価方針",
        "責任分離型の運営",
      ],
    },
    {
      title: "役割",
      items: [
        "教員：方向性・判断基準・最終判断を担う",
        "学生：整理・提案・実行・説明に責任を持つ",
        "支援者：初期整理や日常的助言を補助する",
      ],
    },
    {
      title: "評価",
      items: [
        "主体性",
        "思考力",
        "調査・理解力",
        "改善力",
        "表現力",
        "責任感・継続力",
      ],
    },
    {
      title: "運用ルール",
      items: [
        "丸投げを前提とした相談はしない",
        "相談時は現状・課題・自分の考えを整理する",
        "フィードバックには必ず応答する",
        "重要事項は曖昧なままチャットで決めない",
      ],
    },
  ];

  const visionItems = [
    "自分で考えて動ける人",
    "失敗しても立ち直り、改善できる人",
    "事実と意見を分けて考えられる人",
    "自分の言葉で説明できる人",
    "責任を持って行動できる人",
    "他者と建設的に関われる人",
  ];

  const features = [
    {
      title: "Research Mindset",
      text: "問いを立て、調べ、試し、失敗し、改善する。この循環を通して研究者としての土台を育てます。",
    },
    {
      title: "Practical Independence",
      text: "教員がすべてを与えるのではなく、自分で整理し、判断し、進める力を身につけます。",
    },
    {
      title: "Responsible Use of AI",
      text: "生成AIを活用しつつも、最終的な理解・判断・説明責任は人が持つという姿勢を徹底します。",
    },
  ];

  const researchThemes = [
    {
      title: "画像・信号処理",
      text: "画像復元、異常検知、セグメンテーション、最適化ベースの信号処理などを扱います。",
    },
    {
      title: "AI・深層学習",
      text: "深層学習や生成AIを活用し、画像解析や時系列解析に応用します。",
    },
    {
      title: "リモートセンシング",
      text: "衛星画像やマルチモーダルデータを用いた環境・農業・災害分野への応用を検討します。",
    },
    {
      title: "実社会応用",
      text: "製造、医療・福祉、教育支援など、社会課題につながるテーマを重視します。",
    },
  ];

  const joinPoints = [
    "受け身ではなく、自分で考えながら取り組みたい人",
    "失敗を恐れず、改善を重ねたい人",
    "AIやツールを使っても、自分の理解と責任を大切にしたい人",
    "見かけの成果ではなく、本質的な成長を求める人",
  ];

  const processSteps = [
    {
      step: "01",
      title: "整理する",
      text: "現状・課題・分からない点を言語化する。",
    },
    {
      step: "02",
      title: "考える",
      text: "自分なりの仮説や案を持って相談する。",
    },
    {
      step: "03",
      title: "試す",
      text: "実装・実験・検証を通して仮説を確かめる。",
    },
    {
      step: "04",
      title: "改善する",
      text: "失敗や指摘を振り返り、次の行動に活かす。",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xs tracking-[0.25em] text-slate-500">MATSUOKA LABORATORY</div>
            <div className="text-lg font-semibold">松岡研究室</div>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#message" className="hover:text-slate-900">Message</a>
            <a href="#principles" className="hover:text-slate-900">Principles</a>
            <a href="#research" className="hover:text-slate-900">Research</a>
            <a href="#system" className="hover:text-slate-900">System</a>
            <a href="#vision" className="hover:text-slate-900">Vision</a>
            <a href="#join" className="hover:text-slate-900">Join</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-16 top-16 h-72 w-72 rounded-full bg-cyan-400 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-[1.3fr_0.7fr] md:items-end">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-white/20 px-4 py-1 text-xs tracking-[0.2em] text-slate-200">
                Laboratory Policy & Identity
              </div>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                自分で考え、
                <br />
                失敗から学び、
                <br />
                自立して前に進める人を育てる。
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                松岡研究室は、表面的な成果の量だけを競う場ではありません。問いを立て、調べ、試し、失敗し、改善し、
                自分の言葉で説明できる力を育てる研究室です。
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
                <div className="text-sm text-slate-300">Core Message</div>
                <div className="mt-3 text-2xl font-semibold leading-snug">
                  責任の所在を曖昧にしない。
                  <br />
                  失敗を学びに変える。
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="message" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <div className="text-sm font-semibold tracking-[0.2em] text-slate-500">MESSAGE</div>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">研究室が大切にしていること</h2>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <p className="text-base leading-8 text-slate-700">
              研究や開発では、最初から正解が見えているとは限りません。だからこそ松岡研究室では、
              誰かに与えられた答えをなぞるのではなく、自分で状況を整理し、考え、試し、振り返り、改善する力を重視します。
            </p>
            <p className="mt-5 text-base leading-8 text-slate-700">
              生成AIや各種ツールも活用しますが、それらは思考の代行ではなく補助です。最終的に何を判断し、どう説明し、
              その結果に誰が責任を持つのかを曖昧にしないことを、研究室運営の基本に置いています。
            </p>
          </div>
        </div>
      </section>

      <section id="principles" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <div className="text-sm font-semibold tracking-[0.2em] text-slate-500">PRINCIPLES</div>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">中核となる原則</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title} className="rounded-[2rem] bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
                <div className="text-xl font-semibold leading-snug">{item.title}</div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <div className="text-sm font-semibold tracking-[0.2em] text-slate-500">FEATURES</div>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">研究室の特徴</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item) => (
            <div key={item.title} className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="text-xs tracking-[0.2em] text-slate-400">{item.title}</div>
              <p className="mt-4 text-base leading-8 text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="research" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
            <div>
              <div className="text-sm font-semibold tracking-[0.2em] text-slate-500">RESEARCH</div>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">研究内容</h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                松岡研究室では、画像処理・信号処理・AIを基盤としながら、基礎研究と社会応用の両方を見据えたテーマに取り組みます。
                数理的な考え方と実装の両輪で、現実の課題に向き合う研究を重視しています。
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {researchThemes.map((item) => (
                <div key={item.title} className="rounded-[2rem] bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
                  <div className="text-xl font-semibold">{item.title}</div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl md:p-10">
            <div className="text-sm font-semibold tracking-[0.2em] text-slate-400">PROFESSOR'S MESSAGE</div>
            <h2 className="mt-4 text-3xl font-bold leading-tight">教員メッセージ</h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              研究室は、単に成果物を出すためだけの場所ではなく、人が成長するための場でもあると考えています。
              私は、学生が最初から完璧であることよりも、自分で考え、試し、失敗し、その経験を次に活かせるようになることを大切にしています。
            </p>
            <p className="mt-5 text-base leading-8 text-slate-300">
              そのため、松岡研究室では、支援は行っても責任を曖昧にしません。見かけだけ整った成果ではなく、理解・思考・改善の伴った成長を重視します。
              将来どの道に進んでも、自分の力で前に進める人になってほしいと考えています。
            </p>
          </div>
          <div className="rounded-[2rem] bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
            <div className="text-sm font-semibold tracking-[0.2em] text-slate-500">PROCESS</div>
            <h2 className="mt-4 text-3xl font-bold leading-tight">研究室での成長プロセス</h2>
            <div className="mt-6 space-y-5">
              {processSteps.map((item) => (
                <div key={item.step} className="flex gap-4 border-t border-slate-200 pt-5 first:border-t-0 first:pt-0">
                  <div className="text-sm font-semibold tracking-[0.2em] text-slate-400">{item.step}</div>
                  <div>
                    <div className="text-lg font-semibold text-slate-900">{item.title}</div>
                    <div className="mt-1 text-sm leading-7 text-slate-600">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="system" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <div className="text-sm font-semibold tracking-[0.2em] text-slate-400">SYSTEM</div>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">研究室の設計</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {systemItems.map((section) => (
              <div key={section.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
                <div className="text-xl font-semibold">{section.title}</div>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                  {section.items.map((item) => (
                    <li key={item} className="border-t border-white/10 pt-3 first:border-t-0 first:pt-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vision" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm font-semibold tracking-[0.2em] text-slate-500">VISION</div>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">活動を終えたときの到達イメージ</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              この研究室で得てほしいのは、単なる知識や技術だけではありません。どの進路に進んでも通用する、考える力、改善する力、伝える力、責任を持つ力です。
            </p>
          </div>
          <div className="grid gap-4">
            {visionItems.map((item, index) => (
              <div key={item} className="flex items-start gap-4 rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="pt-1 text-base leading-7 text-slate-700">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="text-sm font-semibold tracking-[0.2em] text-slate-500">JOIN US</div>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">配属希望者へ</h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                松岡研究室は、手取り足取りすべてを与える場所ではありません。
                その代わり、自分で考え、挑戦し、成長したい人にとっては、大きく伸びることができる環境です。
              </p>
            </div>
            <div className="rounded-[2rem] bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
              <div className="text-lg font-semibold text-slate-900">このような人を歓迎します</div>
              <div className="mt-5 space-y-4">
                {joinPoints.map((item) => (
                  <div key={item} className="flex items-start gap-3 border-t border-slate-200 pt-4 first:border-t-0 first:pt-0">
                    <div className="mt-2 h-2.5 w-2.5 rounded-full bg-slate-900" />
                    <div className="text-sm leading-7 text-slate-700">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[2.5rem] bg-gradient-to-r from-slate-900 to-slate-700 px-8 py-12 text-white md:px-12 md:py-16">
            <div className="max-w-4xl">
              <div className="text-sm font-semibold tracking-[0.2em] text-slate-300">SUMMARY</div>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                見かけの完成度ではなく、
                <br />
                中身のある成長を重視する研究室へ。
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-300">
                松岡研究室は、自分で考え、自分の言葉で説明し、自分の責任で前に進める人を育てることを目指します。
                挑戦を歓迎し、失敗を責めず、しかし学びのない停滞は許さない。その姿勢を研究室全体で共有します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-semibold text-slate-700">松岡研究室</div>
            <div>Laboratory Policy Website Prototype</div>
          </div>
          <div>© Matsuoka Laboratory</div>
        </div>
      </footer>
    </div>
  );
}