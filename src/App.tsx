import { BriefcaseBusiness, CalendarCheck2, Headset, Mail, MessageCircleMore } from "lucide-react"

function App() {
  const coreSkills = [
    "Executive and administrative support",
    "Operations and workflow coordination",
    "Task and project tracking systems",
    "CRM and client engagement tracking",
    "Email and calendar management",
    "Data tracking, reporting, and dashboards",
    "Social media content support (Canva)",
    "Research and information synthesis",
    "AI tools (ChatGPT for content and workflows)",
    "Google Workspace (Docs, Sheets, Drive, Calendar)",
    "Attention to detail and process improvement",
  ]

  const systemsExperience = [
    "Task and workflow tracking: designed simple To-do/In-progress/Completed systems to manage multiple activities and ensure accountability.",
    "Client/activity tracking: maintained structured records from initiation to completion with consistent follow-ups.",
    "Reporting systems: developed structured weekly and monthly update formats to improve visibility and decision-making.",
    "Content support: created presentations and visual content in Canva for reporting and communication.",
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
        <div className="flex w-full items-center justify-between px-6 py-4 lg:px-12">
          <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-primary">
            <span className="inline-flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Headset className="size-4" />
            </span>
            Frank Bruno
          </p>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#skills" className="transition-colors hover:text-foreground">Skills</a>
            <a href="#experience" className="transition-colors hover:text-foreground">Experience</a>
            <a href="#articles" className="transition-colors hover:text-foreground">Articles</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex w-full flex-col gap-16 px-6 py-12 md:py-16 lg:px-12">
        <section className="grid gap-10 border-b border-border/70 pb-12 md:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-medium tracking-wide text-primary">
              Executive Assistant | Operations and Administration
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              Proactive executive support for fast-paced, project-based teams.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              Detail-oriented Executive Assistant with strong experience in operations support, financial administration, and workflow coordination. I support leadership with calendar and communication management, structured tracking systems, and seamless task execution across workstreams.
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
                Get in Touch
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
              alt="Virtual assistant working on a laptop with planner notes"
              className="h-72 w-full rounded-xl object-cover shadow-sm"
            />
            <p className="text-sm font-semibold text-primary">At a glance</p>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <CalendarCheck2 className="mt-0.5 size-4 text-primary" />
                <p className="text-muted-foreground">Strong leadership support through scheduling, follow-ups, and communication coordination.</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 text-primary" />
                <p className="text-muted-foreground">Hands-on experience in reporting, budget/expense tracking, and structured documentation workflows.</p>
              </div>
              <div className="flex items-start gap-3">
                <BriefcaseBusiness className="mt-0.5 size-4 text-primary" />
                <p className="text-muted-foreground">Google Workspace, Canva, and practical use of ChatGPT to streamline tasks and research.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-8 border-b border-border/70 pb-12 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight">About Frank</h2>
            <p className="leading-relaxed text-muted-foreground">
              Proactive and detail-oriented Executive Assistant with a strong background in operations support, financial administration, and workflow coordination within fast-paced, project-based environments. Experienced in supporting leadership through calendar and communication management, building structured tracking systems, and ensuring seamless execution of tasks across multiple workstreams.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Skilled in Google Workspace, data tracking, reporting, and content creation using Canva, with growing experience in AI tools such as ChatGPT to streamline workflows, draft content, and accelerate research. Currently pursuing CPA certification to strengthen analytical and financial management capabilities.
            </p>
          </div>
          <div className="space-y-4 border-l border-border pl-6">
            <h3 className="text-lg font-medium">Education</h3>
            <p className="text-sm text-muted-foreground">
              Maseno University (2019 - 2023)
              <br />
              Bachelor of Art in Economics with IT
            </p>
            <h3 className="text-lg font-medium">Professional training</h3>
            <p className="text-sm text-muted-foreground">
              Humanitarian Leadership Academy (2025)
              <br />
              Monitoring, Evaluation, Accountability and Learning for Development Professionals
            </p>
            <h3 className="text-lg font-medium">Languages</h3>
            <p className="text-sm text-muted-foreground">
              Kiswahili (Fluent), English (Fluent)
            </p>
          </div>
        </section>

        <section id="skills" className="space-y-5 border-b border-border/70 pb-12">
          <h2 className="text-3xl font-semibold tracking-tight">Core Skills</h2>
          <div className="grid gap-x-12 gap-y-4 text-muted-foreground md:grid-cols-2">
            {coreSkills.map((skill) => (
              <p key={skill} className="border-b border-border/60 pb-3 text-sm leading-relaxed">
                {skill}
              </p>
            ))}
          </div>
        </section>

        <section id="experience" className="space-y-8 border-b border-border/70 pb-12">
          <h2 className="text-3xl font-semibold tracking-tight">Experience</h2>

          <article className="space-y-3 border-b border-border/60 pb-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold tracking-tight">Operations and Executive Support Assistant (Finance and Administration)</h3>
              <p className="text-sm text-primary">Jan 2024 - Sep 2025</p>
            </div>
            <p className="text-sm font-medium text-muted-foreground">Geno Community Development Initiative (GCDI)</p>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>Supported leadership and program teams by coordinating communication, scheduling activities, and ensuring timely follow-ups across multiple operational regions.</li>
              <li>Built and maintained structured tracking systems in Google Sheets to monitor project activities, financial flows, and reporting timelines.</li>
              <li>Managed documentation workflows and ensured all records were accurate, organized, and accessible in Google Drive.</li>
              <li>Coordinated with internal teams and external stakeholders to ensure smooth execution of tasks and timely deliverables.</li>
              <li>Assisted in preparing reports by compiling operational and financial data into structured formats for decision-making.</li>
              <li>Tracked budgets, expenses, and supporting documentation to align with project plans and compliance requirements.</li>
              <li>Identified process gaps and introduced improvements in tracking/reporting systems, reducing delays and improving efficiency.</li>
            </ul>
          </article>

          <article className="space-y-3 border-b border-border/60 pb-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold tracking-tight">Administrative and Operations Support Assistant</h3>
              <p className="text-sm text-primary">May 2020 - May 2023</p>
            </div>
            <p className="text-sm font-medium text-muted-foreground">World Vision</p>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>Provided administrative and operational support including email coordination, scheduling, and document management for program teams.</li>
              <li>Maintained organized records and tracking systems for activities, financial data, and reporting requirements.</li>
              <li>Supported data entry, reconciliation, and validation processes to ensure accuracy and completeness of records.</li>
              <li>Assisted in coordinating meetings, preparing documentation, and following up action points.</li>
              <li>Contributed to structured reports and presentations for internal and external stakeholders.</li>
              <li>Improved document organization and accessibility with clear filing systems and standardized templates.</li>
            </ul>
          </article>

          <article className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight">Project and Systems Experience</h3>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              {systemsExperience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
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
              <article key={article.title} className="border-b border-border/70 pb-6 last:border-none">
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

        <section id="contact" className="border-t border-border/70 pt-6">
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
