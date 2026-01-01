const stats = [
  { label: "Campaign templates", value: "5 starter sets" },
  { label: "Team coordination", value: "Multi-role access" },
  { label: "On-site check-in", value: "QR + auto reports" },
];

const flowItems = [
  { title: "Prayer & planning", detail: "24h relay · live updates" },
  { title: "Broadcast & lyrics", detail: "Slides, screens, and cues" },
  { title: "Band layout", detail: "BPM, keys, and rotations" },
  { title: "Serve & follow-up", detail: "Attendance + auto summaries" },
];

const features = [
  {
    title: "Service planner",
    desc: "Build run-of-show, message outline, and band sheets in one place.",
  },
  {
    title: "Team hub",
    desc: "Schedule volunteers, capture prayer points, and keep everyone synced.",
  },
  {
    title: "Room control",
    desc: "Seat maps, QR check-ins, and live reporting keep the floor moving.",
  },
];

const workflowSteps = [
  "Pick template",
  "Add speakers",
  "Build set + slides",
  "Check-in team",
  "Review reports",
];

const readiness = [
  { name: "Broadcast / slides", status: "Slide list locked · 95%" },
  { name: "Music / stage", status: "Patch list finalized" },
  { name: "Intercession", status: "Relay schedule · 80%" },
  { name: "Media recap", status: "Outline drafted · clips pending" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#4de1ff1f,transparent_35%),radial-gradient(circle_at_80%_0%,#ff7fd61a,transparent_35%),radial-gradient(circle_at_50%_90%,#9c7bff1f,transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01)),linear-gradient(0deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02))]" />
      </div>

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 shadow-lg shadow-cyan-500/20">
            <div className="h-2 w-7 rounded-full bg-white/90" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
              Revival Meeting
            </p>
            <p className="text-lg font-semibold text-white">Revival Meeting Hub</p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 sm:flex">
          <a className="transition hover:text-white" href="#features">
            Features
          </a>
          <a className="transition hover:text-white" href="#workflow">
            Workflow
          </a>
          <a className="transition hover:text-white" href="#cta">
            Get started
          </a>
        </nav>
        <div className="flex items-center gap-3 text-sm font-semibold">
          <a
            className="rounded-full px-4 py-2 text-slate-200 transition hover:text-white"
            href="/login"
          >
            Log in
          </a>
          <button className="rounded-full bg-white px-4 py-2 text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-[1px] hover:bg-cyan-50">
            Join team
          </button>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-20 pt-6 sm:px-10 sm:pb-28 sm:pt-10">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-8">
            <div className="inline-flex max-w-max items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-cyan-100 ring-1 ring-white/10">
              Fresh fire for every gathering
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Focused on the city
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Built for revival meetings
                <br />
                Move faster with clarity
              </h1>
              <p className="max-w-xl text-lg text-slate-200/80">
                Revival Meeting Hub keeps your concept decks, message outlines, stage plans,
                and volunteer scheduling in one place. Stay focused on prayer and people while the
                system keeps the details aligned.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-[1px] hover:brightness-105"
                href="#cta"
              >
                Start in 3 minutes
              </a>
              <a
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                href="#features"
              >
                View features
              </a>
              <span className="text-xs uppercase tracking-[0.2em] text-cyan-100/80">
                Prayer · Media · Serving
              </span>
            </div>
            <div className="grid w-full max-w-2xl grid-cols-3 gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/5">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-1 rounded-xl bg-white/5 px-3 py-3 text-sm"
                >
                  <span className="text-xs text-cyan-100/80">{item.label}</span>
                  <span className="text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-cyan-400/10 via-white/5 to-violet-500/10 blur-3xl" />
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">House of Fire 2025</p>
                <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-100">
                  Live Draft
                </span>
              </div>
              <div className="mt-6 space-y-4 text-sm text-slate-200">
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/80">Flow</p>
                  <p className="mt-1 font-semibold text-white">
                    Worship, message, and prayer requests in one run-sheet
                  </p>
                  <p className="text-slate-300/80">10:30 start · 95 minutes · ends by noon</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {flowItems.map((item) => (
                    <div key={item.title} className="rounded-xl bg-white/5 p-3">
                      <p className="text-xs text-cyan-100/80">{item.title}</p>
                      <p className="text-sm font-semibold text-white">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur sm:grid-cols-3"
        >
          {features.map((item) => (
            <div key={item.title} className="rounded-2xl bg-slate-900/60 p-5 ring-1 ring-white/10">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-100/80">{item.title}</p>
              <p className="mt-2 text-lg font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm text-slate-200/80">{item.desc}</p>
            </div>
          ))}
        </section>

        <section
          id="workflow"
          className="grid items-center gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-900 p-6 shadow-xl lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-100/80">Workflow</p>
            <h2 className="text-3xl font-semibold text-white">
              From idea to altar call without losing the team
            </h2>
            <p className="text-slate-200/80">
              Spin up a service plan, assign speakers, lock the set, and push cues to every
              volunteer. The backstage stays calm while the room stays engaged.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {workflowSteps.map((step, idx) => (
                <div
                  key={step}
                  className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-white ring-1 ring-white/10"
                >
                  <span className="text-xs text-cyan-100/80">0{idx + 1}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
            <div className="flex items-center justify-between text-sm text-slate-200">
              <span>Execution status</span>
              <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-100">
                On Track
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {readiness.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-xl bg-slate-900/80 px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{item.name}</p>
                    <p className="text-xs text-slate-200/70">{item.status}</p>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(74,222,128,0.15)]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="cta"
          className="flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-400 via-white to-violet-500 px-6 py-10 text-center text-slate-900 shadow-2xl"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-slate-700">Join the move</p>
          <h3 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Ready for your next gathering?
            <br />
            Build a focused hub for your team today.
          </h3>
          <p className="max-w-2xl text-base text-slate-800/80">
            Capture prayer, plan content, and keep rooms running from one hub. Sign up now and get a
            lightweight starter kit you can share with the crew in minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/30 transition hover:-translate-y-[1px]">
              Start free
            </button>
            <button className="rounded-full border border-slate-900/20 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-[1px]">
              See pricing
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
