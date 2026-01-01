import { signIn } from "@/auth";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,#4de1ff1f,transparent_35%),radial-gradient(circle_at_85%_10%,#ff7fd61a,transparent_35%),radial-gradient(circle_at_50%_90%,#9c7bff1f,transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01)),linear-gradient(0deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02))]" />
      </div>

      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-10 px-6 pb-16 pt-16 sm:px-10 sm:pt-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 shadow-lg shadow-cyan-500/20">
              <div className="h-2 w-7 rounded-full bg-white/90" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">Revival Meeting</p>
              <p className="text-lg font-semibold text-white">Revival Meeting Hub</p>
            </div>
          </div>
          <a
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-white/40"
            href="/"
          >
            Back to home
          </a>
        </div>

        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-100/80">Sign in</p>
                <h1 className="mt-2 text-3xl font-semibold text-white">Continue with Google</h1>
                <p className="mt-2 text-sm text-slate-200/80">
                  Use your Google account to manage services, teams, and follow-up in one hub.
                </p>
              </div>
              <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-100">
                Secure
              </span>
            </div>

            <div className="mt-8 space-y-4">
              <form
                action={async () => {
                  "use server";
                  await signIn("google");
                }}
              >
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-900/20 transition hover:-translate-y-[1px] hover:brightness-105"
                >
                  <span className="h-5 w-5 rounded-sm bg-gradient-to-br from-cyan-500 to-violet-500" />
                  Continue with Google
                </button>
              </form>
              <div className="flex items-center gap-2 text-xs text-slate-200/70">
                <span className="h-px flex-1 bg-white/10" />
                or set it up manually
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-sm text-slate-200/80">
                <p className="font-semibold text-white">Checklist for Google OAuth</p>
                <ul className="mt-3 space-y-2 list-disc pl-5">
                  <li>Create OAuth client ID in Google Cloud Console.</li>
                  <li>Redirect URL: `https://your-domain.com/api/auth/callback/google`</li>
                  <li>Set `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` in `.env`.</li>
                  <li>Add GoogleProvider in `/app/api/auth/[...nextauth]/route.ts`.</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-xs text-slate-200/60">
              By continuing, you agree to our privacy policy and allow Hub admins to manage your
              access.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-100/80">Options</p>
            <h2 className="mt-2 text-xl font-semibold text-white">Other sign-in providers</h2>
            <div className="mt-4 space-y-4 text-sm text-slate-200/80">
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-sm font-semibold text-white">NextAuth / Auth.js</p>
                <p className="mt-1">
                  Flexible for Google, Apple, Kakao, and more. Great if you want server-side control
                  and session customization.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-sm font-semibold text-white">Clerk</p>
                <p className="mt-1">
                  Hosted UI with drop-in widgets, MFA, and user management. Fastest time to market.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-sm font-semibold text-white">Supabase Auth</p>
                <p className="mt-1">
                  Postgres-native auth plus row-level security. Great when you are already on
                  Supabase.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-sm font-semibold text-white">Auth0</p>
                <p className="mt-1">
                  Enterprise-grade identity with SSO, rules, and extensive connector support.
                </p>
              </div>
            </div>
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-200/80">
              <p className="font-semibold text-white">Quick setup (Auth.js)</p>
              <ol className="mt-2 space-y-2 list-decimal pl-5">
                <li>Install: `npm i next-auth @auth/core`</li>
                <li>Add env: `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `AUTH_SECRET`</li>
                <li>Register GoogleProvider in `/app/api/auth/[...nextauth]/route.ts`</li>
                <li>
                  Wrap app with <code>{'<SessionProvider>'}</code> and trigger{" "}
                  <code>signIn("google")</code> on the button.
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
