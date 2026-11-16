/* ========= CONFIG: edit these ========= */
const CONFIG = {
  github: "https://github.com/harshad0096",
  linkedin: "https://www.linkedin.com/in/harshad-bade-0a629b375/",
  email: "harshadbade0096@gmail.com",
};
const PROJECTS = [
  {
    name: "Safsafaiwala",
    cat: "Home Cleaning Services Application",
    img: "assets/images/safsafaiwala.png",
    icon: "https://play-lh.googleusercontent.com/J3bBS1uTEpTmEVh4atUcWmmUE9CcriEmr0TtENjWTJXmXRgAVUDsAiwIHH8MLhtZFZMpK3Sj8v0KhFrwGa5kBg=w240-h240",
    g: "linear-gradient(135deg,#0a84ff,#22d3ee)",
    hl: "5K+ Downloads",
    tech: [
      "Flutter",
      "Dart",
      "BLoC",
      "Clean Architecture",
      "Razorpay",
      "Firebase",
      "FCM",
      "Exotel",
      "Google Maps",
      "Node.js",
      "Express",
    ],
    desc: "A home-services booking platform that allows customers to discover services, manage carts, apply coupons, schedule bookings, and track service requests.",
    feat: [
      "OTP authentication",
      "City-based service catalog",
      "Cart and coupon management",
      "Booking lifecycle management",
      "Razorpay payment integration",
      "Payment recovery and verification",
      "Google Maps integration",
      "Firebase notifications",
      "Exotel masked vendor calling",
    ],
    github: "",
    live: "",
    store:
      "https://play.google.com/store/apps/details?id=com.customerapp.safsafaiwala",
  },
  {
    name: "BrickZone",
    cat: "Real Estate CRM & Lead Management",
    img: "assets/images/brickzone.png",
    hl: "",
    tech: [
      "Flutter",
      "Riverpod",
      "Clean Architecture",
      "GoRouter",
      "Dio",
      "Firebase",
      "Node.js",
      "Express",
    ],
    desc: "A multi-role CRM application designed for real estate sales teams to manage leads, assignments, calling activities, and business analytics.",
    feat: [
      "Admin, Manager and Relationship Manager roles",
      "Dynamic permission management",
      "Lead assignment and reassignment",
      "Bulk lead upload with validation",
      "Calling and call-log tracking",
      "Dashboard and reporting",
      "Firebase notifications",
      "Session lifecycle management",
    ],
    github: "",
    live: "",
  },
  {
    name: "The Language Skool",
    cat: "Mobile Language Learning Platform",
    img: "assets/images/languageskool.png",
    icon: "https://play-lh.googleusercontent.com/fH4ogw9NFrUps4nN5uuymdi9zhV-YJ-QEdeUGFsq1n67d2Wxd3wFwYEHdD-8zmUAxRUwSUmuhsszaNefFjgEuQ=w240-h240",
    g: "linear-gradient(135deg,#bf5af2,#ff375f)",
    hl: "1K+ Downloads",
    tech: [
      "Flutter",
      "Riverpod",
      "GoRouter",
      "Dio",
      "Node.js",
      "Express",
      "Socket.IO",
      "Firebase",
    ],
    desc: "A cross-platform language-learning platform featuring real-time communication and interactive learning experiences.",
    feat: [
      "Real-time one-to-one chat",
      "Group messaging",
      "Typing indicators",
      "Read receipts",
      "Optimistic message sending",
      "Push notifications",
      "Node.js and Express backend integration",
    ],
    github: "",
    live: "",
    store: "https://play.google.com/store/apps/details?id=com.thelanguageskool",
  },
];
const D = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";
const dv = (n, v = "original") => `${D}${n}/${n}-${v}.svg`;
const si = (s) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/${s}.svg`;
const plain = (names) => names.map((n) => [n, null]);
const SKILLS = {
  "Programming Languages": [
    ["Dart", dv("dart")],
    ["Java", dv("java")],
    ["JavaScript", dv("javascript")],
  ],
  "Mobile Development": [
    ["Flutter", dv("flutter")],
    ["Android Development", dv("android")],
    ["iOS Development", dv("apple"), 1],
  ],
  "Web Development": [
    ["React", dv("react")],
    ["HTML5", dv("html5")],
    ["CSS3", dv("css3")],
    ["Figma", dv("figma")],
  ],
  "State Management": [["BLoC"], ["Riverpod"], ["GetX"]],
  Architecture: [
    ["Clean Architecture"],
    ["Dependency Injection"],
    ["Modular Architecture"],
    ["MVC"],
  ],
  Backend: [
    ["Node.js", dv("nodejs")],
    ["Express.js", dv("express"), 1],
    ["Prisma", dv("prisma")],
    ["Spring Boot", dv("spring")],
    ["Hibernate", dv("hibernate")],
  ],
  Database: [
    ["MySQL", dv("mysql")],
    ["SQLite", dv("sqlite")],
    ["Firebase Firestore", dv("firebase")],
  ],
  "Cloud & Platforms": [
    ["AWS Cloud", si("amazonaws"), 1],
    ["Amazon EC2", si("AWS Lambda"), 1],
    ["Amazon S3", dv("Amazon S3")],
  ],
  "DevOps & Infrastructure": [
    ["Docker", dv("docker")],
    ["Kubernetes", dv("kubernetes")],
    ["Jenkins", dv("jenkins")],
    ["Linux", dv("linux")],
    ["Apache", dv("apache")],
    ["Nginx", dv("nginx")],
    ["DevOps"],
  ],
  "Version Control": [
    ["Git", dv("git")],
    ["GitHub", dv("github"), 1],
    ["GitLab", dv("gitlab")],
    ["Bitbucket", dv("bitbucket")],
  ],
  "APIs & Integration": [
    ["REST APIs"],
    ["Postman", dv("postman")],
    ["OpenAPI"],
    ["GraphQL", dv("graphql", "plain")],
    ["JSON"],
    ["XML"],
    ["Socket.IO", dv("socketio"), 1],
  ],
  "Development Tools": [
    ["Android Studio", dv("androidstudio")],
    ["VS Code", dv("vscode")],
    ["IntelliJ IDEA", dv("intellij")],
    ["Postman", dv("postman")],
    ["npm", dv("npm", "original-wordmark")],
    ["Yarn", dv("yarn")],
  ],
  "Libraries & Services": [
    ["Firebase Authentication", dv("firebase")],
    ["Firebase Cloud Messaging", dv("firebase")],
    ["Dio"],
    ["Razorpay"],
    ["GoRouter"],
  ],
  "Development Concepts": plain([
    "OOP",
    "DSA",
    "DBMS",
    "REST APIs",
    "Microservices",
    "Authentication",
    "Cloud Computing",
    "CI/CD",
    "Agile",
    "System Design",
  ]),
  "Markup & Data Formats": [
    ["HTML", dv("html5")],
    ["XML"],
    ["JSON"],
    ["YAML", dv("yaml")],
    ["Markdown", dv("markdown"), 1],
  ],
};
const $ = (s, c = document) => c.querySelector(s),
  $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const play =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.6 1.8 14 12 3.6 22.2c-.4-.2-.6-.6-.6-1.1V2.9c0-.5.2-.9.6-1.1zm11.2 11.2 2.6 2.6-11.9 6.7 9.3-9.3zm0-2L5.5 1.7l11.9 6.7-2.6 2.6zM18.6 9l3 1.7c.8.5.8 1.7 0 2.2l-3 1.7-2.8-2.8L18.6 9z"/></svg>';
const esc = (t) =>
  String(t).replace(
    /[&<>"]/g,
    (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[m],
  );
document.documentElement.classList.add("js");
$("#year").textContent = new Date().getFullYear();

/* loader */
addEventListener("load", () =>
  setTimeout(() => $("#loader").classList.add("done"), reduce ? 0 : 900),
);
setTimeout(() => $("#loader").classList.add("done"), 3000);

/* social links */
$$("[data-link]").forEach((a) => {
  const url = CONFIG[a.dataset.link];
  if (url) {
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    const l = $("[data-label]", a);
    if (l) l.textContent = url.replace(/^https?:\/\/(www\.)?/, "");
  } else {
    a.title = `Add your ${a.dataset.link} URL in js/script.js (CONFIG)`;
    a.addEventListener("click", (e) => e.preventDefault());
  }
});

/* projects */
$("#projectGrid").innerHTML = PROJECTS.map(
  (p, i) => `
<article class="glass card tilt reveal">
  <div class="thumb${p.icon ? " icon" : ""}"${p.icon ? ` style="background:${p.g}"` : ""}>${p.icon ? `<span class="tile"><img src="${p.icon}" alt="${esc(p.name)} logo" width="120" height="120" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentNode.textContent='${p.name[0]}'"></span>` : `<img src="${p.img}" alt="${esc(p.name)} app screenshot" loading="lazy" width="640" height="400" onerror="this.style.display='none'">`}${p.hl ? `<span class="hl">${p.hl}</span>` : ""}${p.store ? '<span class="avail">' + play + " Available on Google Play</span>" : ""}</div>
  <div class="card-b"><span class="cat">${esc(p.cat)}</span><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p>
  <div class="tags">${p.tech
    .slice(0, 5)
    .map((t) => `<span>${esc(t)}</span>`)
    .join(
      "",
    )}${p.tech.length > 5 ? `<span>+${p.tech.length - 5}</span>` : ""}</div>
  <div class="acts"><button class="btn btn-ghost btn-sm" data-i="${i}" aria-haspopup="dialog">View Details</button>${p.store ? `<a class="btn btn-primary btn-sm" href="${esc(p.store)}" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.6 1.8 14 12 3.6 22.2c-.4-.2-.6-.6-.6-1.1V2.9c0-.5.2-.9.6-1.1zm11.2 11.2 2.6 2.6-11.9 6.7 9.3-9.3zm0-2L5.5 1.7l11.9 6.7-2.6 2.6zM18.6 9l3 1.7c.8.5.8 1.7 0 2.2l-3 1.7-2.8-2.8L18.6 9z"/></svg> Google Play</a>` : ""}</div></div>
</article>`,
).join("");

/* skills */
$("#skillGrid").innerHTML = Object.entries(SKILLS)
  .map(
    ([cat, items]) => `
<div class="glass skill-cat reveal"><h3>${esc(cat)}</h3><div class="chips">${items
      .map(
        ([n, i, inv]) =>
          `<span class="chip">${i ? `<img class="${inv ? "inv" : ""}" src="${i}" alt="" loading="lazy" width="20" height="20" onerror="this.outerHTML='<i class=dot></i>'">` : i === null ? "" : `<i class="dot"></i>`}${esc(n)}</span>`,
      )
      .join("")}</div></div>`,
  )
  .join("");

/* modal */
const modal = $("#modal");
let lastFocus;
function openModal(i) {
  const p = PROJECTS[i];
  lastFocus = document.activeElement;
  const links = [
    p.store &&
      `<a class="btn btn-primary btn-sm" href="${esc(p.store)}" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.6 1.8 14 12 3.6 22.2c-.4-.2-.6-.6-.6-1.1V2.9c0-.5.2-.9.6-1.1zm11.2 11.2 2.6 2.6-11.9 6.7 9.3-9.3zm0-2L5.5 1.7l11.9 6.7-2.6 2.6zM18.6 9l3 1.7c.8.5.8 1.7 0 2.2l-3 1.7-2.8-2.8L18.6 9z"/></svg> Google Play</a>`,
    p.github &&
      `<a class="btn btn-ghost btn-sm" href="${esc(p.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>`,
    p.live &&
      `<a class="btn btn-primary btn-sm" href="${esc(p.live)}" target="_blank" rel="noopener noreferrer">Live Project</a>`,
  ]
    .filter(Boolean)
    .join("");
  $("#modalBody").innerHTML =
    `<span class="cat">${esc(p.cat)}</span><h3 id="mTitle">${esc(p.name)}</h3>${p.hl ? `<p><strong>${p.hl}</strong></p>` : ""}<p style="margin-top:10px">${esc(p.desc)}</p>
  <h4>Key Features</h4><ul>${p.feat.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
  <h4>Technologies</h4><div class="tags">${p.tech.map((t) => `<span>${esc(t)}</span>`).join("")}</div>${links ? `<div class="m-links">${links}</div>` : ""}`;
  modal.hidden = false;
  requestAnimationFrame(() => modal.classList.add("show"));
  document.body.style.overflow = "hidden";
  $("#modalX").focus();
}
function closeModal() {
  modal.classList.remove("show");
  document.body.style.overflow = "";
  setTimeout(() => (modal.hidden = true), 300);
  lastFocus && lastFocus.focus();
}
$("#projectGrid").addEventListener("click", (e) => {
  const b = e.target.closest("[data-i]");
  if (b) openModal(+b.dataset.i);
});
$("#modalX").onclick = closeModal;
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) closeModal();
});

/* typing */
const words = [
  "Software Developer",
  "Full Stack Developer",
  "Mobile Application Developer",
  "Problem Solver",
];
const typed = $("#typed");
if (reduce) typed.textContent = words[0];
else {
  let w = 0,
    c = 0,
    del = false;
  (function tick() {
    const t = words[w];
    typed.textContent = t.slice(0, c);
    if (!del && c === t.length) {
      del = true;
      return setTimeout(tick, 1400);
    }
    if (del && c === 0) {
      del = false;
      w = (w + 1) % words.length;
    }
    c += del ? -1 : 1;
    setTimeout(tick, del ? 40 : 85);
  })();
}

/* reveal + counters */
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        const t = e.target;
        t.classList.add("in");
        io.unobserve(t);
        setTimeout(() => {
          t.classList.remove("reveal", "in");
          t.style.transitionDelay = "";
        }, 1300);
      }
    }),
  { threshold: 0.15 },
);
$$(".reveal").forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 80 + "ms";
  io.observe(el);
});
const cio = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (!e.isIntersecting) return;
      cio.unobserve(e.target);
      const el = e.target,
        end = +el.dataset.count,
        suf = el.dataset.suffix || "";
      if (reduce) return (el.textContent = end + suf);
      const t0 = performance.now();
      (function f(t) {
        const k = Math.min((t - t0) / 1400, 1);
        el.textContent =
          Math.round(end * (1 - Math.pow(1 - k, 3))) + (k === 1 ? suf : "");
        if (k < 1) requestAnimationFrame(f);
      })(t0);
    }),
  { threshold: 0.6 },
);
$$("[data-count]").forEach((el) => cio.observe(el));

/* nav, active link, back to top, timeline progress */
const nav = $("#nav"),
  toTop = $("#toTop"),
  links = $$("#menu a[href^='#']"),
  secs = $$("main section");
function onScroll() {
  nav.classList.toggle("scrolled", scrollY > 30);
  toTop.classList.toggle("show", scrollY > 600);
  let cur = secs[0].id;
  secs.forEach((s) => {
    if (s.getBoundingClientRect().top <= innerHeight * 0.4) cur = s.id;
  });
  links.forEach((a) =>
    a.classList.toggle("active", a.getAttribute("href") === "#" + cur),
  );
  $$(".timeline").forEach((t) => {
    const r = t.getBoundingClientRect();
    t.style.setProperty(
      "--prog",
      Math.max(
        0,
        Math.min(100, ((innerHeight * 0.6 - r.top) / r.height) * 100),
      ) + "%",
    );
  });
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();
toTop.onclick = () =>
  scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });

/* mobile menu */
const burger = $("#burger"),
  menu = $("#menu");
const setMenu = (o) => {
  menu.classList.toggle("open", o);
  burger.classList.toggle("open", o);
  burger.setAttribute("aria-expanded", o);
  burger.setAttribute("aria-label", o ? "Close menu" : "Open menu");
};
burger.onclick = () => setMenu(!menu.classList.contains("open"));
links.forEach((a) => a.addEventListener("click", () => setMenu(false)));
addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});

/* 3D tilt + spotlight on every card (fine pointers only) */
if (!reduce && matchMedia("(hover:hover) and (pointer:fine)").matches) {
  $$(".glass").forEach((c) => {
    if (c.closest(".modal")) return;
    c.addEventListener("mousemove", (e) => {
      const r = c.getBoundingClientRect(),
        x = (e.clientX - r.left) / r.width,
        y = (e.clientY - r.top) / r.height;
      c.style.setProperty("--mx", x * 100 + "%");
      c.style.setProperty("--my", y * 100 + "%");
      if (c.classList.contains("card")) return;
      const k = Math.min(1, 360 / r.width) * 9;
      c.style.transform = `perspective(900px) rotateY(${(x - 0.5) * k * 2}deg) rotateX(${-(y - 0.5) * k * 2}deg) translateZ(10px)`;
    });
    c.addEventListener("mouseleave", () => (c.style.transform = ""));
  });
  /* hero stage follows the pointer */
  const st = $("#stage"),
    hero = $("#home");
  hero.addEventListener("mousemove", (e) => {
    const r = hero.getBoundingClientRect();
    st.style.setProperty(
      "--ry",
      ((e.clientX - r.left) / r.width - 0.5) * -40 + "deg",
    );
    st.style.setProperty(
      "--rx",
      ((e.clientY - r.top) / r.height - 0.5) * -22 + "deg",
    );
  });
  hero.addEventListener("mouseleave", () => {
    st.style.setProperty("--ry", "-14deg");
    st.style.setProperty("--rx", "5deg");
  });
  /* cursor */
  const cur = $("#cursor");
  let x = 0,
    y = 0,
    cx = 0,
    cy = 0;
  addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;
    cur.classList.add("on");
  });
  (function loop() {
    cx += (x - cx) * 0.2;
    cy += (y - cy) * 0.2;
    cur.style.transform = `translate(${cx}px,${cy}px)`;
    requestAnimationFrame(loop);
  })();
  document.addEventListener("mouseover", (e) =>
    cur.classList.toggle("big", !!e.target.closest("a,button,.chip,.card")),
  );
  document.addEventListener("mouseleave", () => cur.classList.remove("on"));
}

/* button ripple */
document.addEventListener("click", (e) => {
  const b = e.target.closest(".btn");
  if (!b || reduce) return;
  const r = b.getBoundingClientRect(),
    s = Math.max(r.width, r.height),
    d = document.createElement("span");
  d.className = "ripple";
  d.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - r.left - s / 2}px;top:${e.clientY - r.top - s / 2}px`;
  b.appendChild(d);
  setTimeout(() => d.remove(), 600);
});

/* hero: logos travel on an ellipse around the phone, never across the screen */
(() => {
  const box = $("#eorbit");
  if (!box) return;
  const orbs = $$(".eorb", box),
    n = orbs.length,
    rx = 226,
    ry = 326;
  let vis = true;
  const place = (t) =>
    orbs.forEach((el, i) => {
      const a = (t * Math.PI * 2) / 45 + (i * Math.PI * 2) / n,
        d = (Math.sin(a) + 1) / 2;
      el.style.transform = `translate3d(${Math.cos(a) * rx}px,${Math.sin(a) * ry}px,${30 + d * 50}px) scale(${0.88 + d * 0.22})`;
    });
  place(0);
  if (reduce) return;
  new IntersectionObserver(([e]) => (vis = e.isIntersecting)).observe(
    $("#home"),
  );
  const t0 = performance.now();
  (function f(ts) {
    requestAnimationFrame(f);
    if (vis && !document.hidden) place((ts - t0) / 1000);
  })(t0);
})();
