import { BriefcaseBusiness, CalendarCheck2, Mail, MessageCircleMore } from "lucide-react"

function App() {
  const services = [
    "Inbox and calendar management for founders and teams",
    "Travel planning, meeting coordination, and schedule cleanup",
    "Client follow-up workflows using clear, warm communication",
    "Administrative support for small businesses and solo professionals",
  ]

  const articles = [
    {
      title: "How I Cut a Busy Founder’s Inbox by 42% in Four Weeks",
      date: "March 12, 2026",
      excerpt:
        "Most inboxes are not heavy because of volume. They are heavy because every message looks equally urgent. Here is the triage system I use to reduce noise without missing important requests.",
      body: "In my first week with a startup founder, I noticed that the inbox had become a second to-do list. Messages from clients, payroll reminders, and low-priority newsletters all sat together. The founder checked email every 20 minutes, which broke focus and delayed real work.\n\nI created a three-layer approach. First, I set filters for recurring senders and newsletters. Second, I built priority labels: Today, This Week, and Delegate. Third, I drafted response templates for common requests so replies were consistent and quick.\n\nAfter four weeks, total unread count dropped from 1,870 to 312 and average response time on priority client emails moved from 19 hours to under 6 hours. The biggest win was not just fewer emails. It was clearer decision-making because the founder could see what mattered immediately.",
    },
    {
      title: "The Weekly Admin Reset: A 90-Minute Routine That Saves Me Hours",
      date: "January 26, 2026",
      excerpt:
        "I run this reset every Friday afternoon for clients. It keeps Monday calm and removes last-minute chaos. The process is simple, repeatable, and works across industries.",
      body: "The weekly admin reset starts with a calendar sweep: I confirm next week’s meetings, check time zones, and send any needed reminders. Then I move to task boards and close completed items, flag overdue tasks, and add missing notes from call summaries.\n\nIn the second block, I review expenses, receipts, and small approvals that tend to pile up. I also check key shared folders so documents are named clearly and easy to find. If a team member will need a file next week, it should already be in place.\n\nThe final 20 minutes are for communication. I send one clean status update to the client with three parts: what got done, what needs input, and what is planned next week. This prevents Monday firefighting and gives everyone confidence that operations are under control.",
    },
    {
      title: "Client Follow-Ups Without Sounding Robotic",
      date: "November 18, 2025",
      excerpt:
        "Follow-up emails are often either too cold or too long. I use a short framework that feels professional and human while still moving conversations forward.",
      body: "When I handle follow-ups, I keep one goal in mind: make it easy for the other person to respond. That means reducing cognitive load. I avoid long paragraphs and instead give context in one line, action in one line, and a clear closing question.\n\nFor example, after a proposal call, I summarize one key point from the conversation so the message feels personal. Then I include next options with dates. Instead of saying 'Please advise,' I ask, 'Would Tuesday 10:00 or Thursday 14:00 work for your review call?'\n\nThis approach has improved reply rates for my clients because it balances warmth and direction. People respond faster when the message respects their time. Good follow-up is not pressure. It is clarity.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <p className="text-sm font-semibold tracking-wide text-primary">Frank Bruno</p>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#articles" className="transition-colors hover:text-foreground">Articles</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-18 px-6 py-12 md:py-16">
        <section className="grid gap-10 rounded-2xl border border-border bg-card px-6 py-10 shadow-sm md:grid-cols-2 md:px-10">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-medium tracking-wide text-primary">
              Virtual Assistant | 2 Years Experience
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              Reliable virtual support that gives busy professionals their time back.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              I help founders and small teams stay organized, communicate faster, and run smoother back-office operations. Calm execution, clean systems, and consistent follow-through.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/frank-bruno-va-cv.txt"
                download
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <BriefcaseBusiness className="size-4" />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
              >
                <MessageCircleMore className="size-4" />
                Book a Discovery Call
              </a>
            </div>
          </div>
          <div className="space-y-4 rounded-xl border border-border/70 bg-gradient-to-br from-primary/10 via-background to-background p-6">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
              alt="Virtual assistant working on a laptop with planner notes"
              className="h-48 w-full rounded-lg object-cover"
            />
            <p className="text-sm font-semibold text-primary">At a glance</p>
            <div className="mt-5 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <CalendarCheck2 className="mt-0.5 size-4 text-primary" />
                <p className="text-muted-foreground">200+ calendar events coordinated across time zones.</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 text-primary" />
                <p className="text-muted-foreground">Inbox, response, and follow-up workflows tailored per client.</p>
              </div>
              <div className="flex items-start gap-3">
                <BriefcaseBusiness className="mt-0.5 size-4 text-primary" />
                <p className="text-muted-foreground">Trusted by coaches, consultants, and small business owners.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight">About Frank</h2>
            <p className="leading-relaxed text-muted-foreground">
              Over the past two years, I have worked behind the scenes with professionals who needed structure in their day-to-day operations. My work combines practical admin support with proactive communication, so clients spend less time chasing details and more time on growth.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I am especially strong at managing moving parts: scheduling, follow-ups, records, recurring tasks, and simple process documentation. When things are clear and predictable, teams perform better.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-muted/30 p-6">
            <h3 className="text-lg font-medium">Core tools</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Google Workspace, Notion, Trello, Asana, Slack, Zoom, and Calendly.
            </p>
            <h3 className="mt-6 text-lg font-medium">Work style</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Detail-oriented, discreet, and deadline-conscious with clean handover notes.
            </p>
          </div>
        </section>

        <section id="services" className="space-y-5">
          <h2 className="text-3xl font-semibold tracking-tight">Services</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="rounded-xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground shadow-sm">
                {service}
              </div>
            ))}
          </div>
        </section>

        <section id="articles" className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Articles on Virtual Assistance</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Short field notes from real client operations: what works, what fails, and what saves time.
            </p>
          </div>
          <div className="grid gap-6">
            {articles.map((article) => (
              <article key={article.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <p className="text-xs font-medium tracking-wide text-primary">{article.date}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">{article.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
                <div className="mt-4 border-l-2 border-primary/25 pl-4 text-sm leading-relaxed whitespace-pre-line text-muted-foreground">
                  {article.body}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="rounded-2xl border border-border bg-primary/8 px-6 py-8">
          <h2 className="text-3xl font-semibold tracking-tight">Get in touch</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Need help running your daily operations smoothly? I am available for part-time and retainer support.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a className="rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground" href="mailto:brunoagak@gmail.com">brunoagak@gmail.com</a>
            <a className="rounded-md border border-border bg-background px-4 py-2 font-medium" href="https://wa.me/254757355589">WhatsApp: 0757355589</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Frank Bruno. Virtual Assistant Portfolio.
      </footer>
    </div>
  )
}

export default App
