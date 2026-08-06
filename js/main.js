(function () {
  const d = PORTFOLIO_DATA;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const allowFancyMotion = !prefersReducedMotion && finePointer;

  // ---- Hero / About ---------------------------------------------------
  document.getElementById("heroRole").textContent = d.profile.role;
  document.getElementById("heroPitch").textContent = d.profile.pitch;
  document.getElementById("aboutBio").textContent = d.profile.bio;
  document.getElementById("aboutLocation").textContent = d.profile.location;

  // ---- Intereses: marquee continuo (o lista estática si hay motion reducido) --
  const interestWrap = document.getElementById("interestWrap");
  if (prefersReducedMotion) {
    const ul = document.createElement("ul");
    ul.className = "interest-strip";
    d.profile.interests.forEach((interest) => {
      const li = document.createElement("li");
      li.textContent = interest;
      ul.appendChild(li);
    });
    interestWrap.appendChild(ul);
  } else {
    const marquee = document.createElement("div");
    marquee.className = "interest-marquee";
    const track = document.createElement("ul");
    track.className = "interest-track";
    // Se duplica la lista para lograr un loop continuo sin salto.
    [...d.profile.interests, ...d.profile.interests].forEach((interest) => {
      const li = document.createElement("li");
      li.textContent = interest;
      track.appendChild(li);
    });
    marquee.appendChild(track);
    interestWrap.appendChild(marquee);
  }

  // ---- Skills -----------------------------------------------------------
  const skillsWrap = document.getElementById("skillsWrap");
  d.skills.forEach((group, gi) => {
    const groupEl = document.createElement("div");
    groupEl.className = "skills__group reveal";
    groupEl.style.setProperty("--i", gi);

    const label = document.createElement("p");
    label.className = "skills__group-label";
    label.textContent = group.category;
    groupEl.appendChild(label);

    const grid = document.createElement("div");
    grid.className = "skills__grid";

    group.items.forEach((item, i) => {
      const tag = document.createElement("div");
      tag.className = "tag";
      tag.innerHTML = `
        <span class="tag__name">${item}</span>
        <span class="tag__code">${group.code}-${String(i + 1).padStart(2, "0")}</span>
      `;
      grid.appendChild(tag);
    });

    groupEl.appendChild(grid);
    skillsWrap.appendChild(groupEl);
  });

  // ---- Experience ---------------------------------------------------
  const rack = document.getElementById("experienceRack");
  d.experience.forEach((job, i) => {
    const item = document.createElement("div");
    item.className = "rack__item reveal";
    item.style.setProperty("--i", i);
    item.innerHTML = `
      <div class="rack__card">
        <div class="rack__top">
          <span class="rack__role">${job.role}</span>
          <span class="rack__dates mono">${job.start} — ${job.end}</span>
        </div>
        <p class="rack__org">${job.org}</p>
        <p class="rack__desc">${job.description}</p>
      </div>
    `;
    rack.appendChild(item);
  });

  // ---- Education ---------------------------------------------------
  const eduList = document.getElementById("educationList");
  d.education.forEach((edu, i) => {
    const row = document.createElement("div");
    row.className = "edu-row reveal";
    row.style.setProperty("--i", i);
    row.innerHTML = `
      <span class="edu-row__main">${edu.title}<span class="edu-row__org">${edu.org}</span></span>
      <span class="edu-row__dates">${edu.start} — ${edu.end}</span>
    `;
    eduList.appendChild(row);
  });

  // ---- Projects ---------------------------------------------------
  const projectsWrap = document.getElementById("projectsWrap");
  if (d.projects.length === 0) {
    const messages = [
      "Próximo proyecto",
      "Mandame una carpeta y la cargo acá",
      "Espacio reservado",
    ];
    messages.forEach((msg, i) => {
      const slot = document.createElement("div");
      slot.className = "project-slot reveal";
      slot.style.setProperty("--i", i);
      slot.innerHTML = `<p>${msg}</p>`;
      projectsWrap.appendChild(slot);
    });
  } else {
    d.projects.forEach((project, i) => {
      const card = document.createElement("div");
      card.className = "project-card reveal";
      card.style.setProperty("--i", i);
      card.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
      projectsWrap.appendChild(card);
    });
  }

  // ---- Contact ---------------------------------------------------
  const contactLinks = document.getElementById("contactLinks");
  contactLinks.innerHTML = `
    <a class="btn btn--stamp" href="mailto:${d.contact.email}">${d.contact.email}</a>
    <a class="btn btn--outline" href="${d.contact.whatsappHref}" target="_blank" rel="noopener">WhatsApp — ${d.contact.phone}</a>
  `;

  // ---- Stats strip (conteo animado con datos reales) ---------------------------------------------------
  const statsWrap = document.getElementById("statsStrip");
  const totalSkills = d.skills.reduce((sum, g) => sum + g.items.length, 0);
  const firstYear = 2023; // primer rol registrado (Vendedor, Feb 2023)
  const years = Math.max(1, new Date().getFullYear() - firstYear);
  const stats = [
    { value: years, suffix: "+", label: "años de trayectoria" },
    { value: d.experience.length, suffix: "", label: "roles distintos" },
    { value: totalSkills, suffix: "", label: "habilidades activas" },
  ];
  stats.forEach((stat) => {
    const el = document.createElement("div");
    el.className = "stat";
    el.innerHTML = `<span class="stat__value" data-target="${stat.value}" data-suffix="${stat.suffix}">0</span><p class="stat__label mono">${stat.label}</p>`;
    statsWrap.appendChild(el);
  });

  function countUp(el) {
    const target = Number(el.dataset.target || 0);
    const suffix = el.dataset.suffix || "";
    if (prefersReducedMotion || target === 0) {
      el.textContent = target + suffix;
      return;
    }
    const duration = 1100;
    const start = performance.now();
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    function tick(now) {
      const p = Math.min(1, (now - start) / duration);
      const value = Math.round(easeOutCubic(p) * target);
      el.textContent = value + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // ---- Print / download ---------------------------------------------------
  document.getElementById("printBtn").addEventListener("click", () => window.print());

  // ---- Scroll reveal (con stagger por --i y conteo animado en stats) ---------------------------------------------------
  const revealEls = document.querySelectorAll(".reveal, .section__head");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".stat__value").forEach(countUp);
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    if (statsWrap) statsObserver.observe(statsWrap);
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
    document.querySelectorAll(".stat__value").forEach(countUp);
  }

  // ---- Header: encoge al scrollear + barra de progreso de lectura ---------------------------------------------------
  const header = document.querySelector(".site-header");
  const progressBar = document.getElementById("progressBar");
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      header.classList.toggle("is-scrolled", y > 40);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (y / docHeight) * 100 : 0;
      progressBar.style.width = pct + "%";
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- Tilt 3D en tags / tarjetas (solo con mouse real) ---------------------------------------------------
  function enableTilt(selector, max) {
    document.querySelectorAll(selector).forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const ry = (px - 0.5) * max * 2;
        const rx = (0.5 - py) * max * 2;
        el.style.setProperty("--rx", rx.toFixed(2) + "deg");
        el.style.setProperty("--ry", ry.toFixed(2) + "deg");
        el.style.setProperty("--ty", "-4px");
        el.classList.add("is-tracking");
      });
      el.addEventListener("pointerleave", () => {
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
        el.style.setProperty("--ty", "0px");
        el.classList.remove("is-tracking");
      });
    });
  }

  // ---- Botones "magnéticos" ---------------------------------------------------
  function enableMagnetic(selector, strength) {
    document.querySelectorAll(selector).forEach((btn) => {
      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - 0.5) * strength;
        const y = ((e.clientY - r.top) / r.height - 0.5) * strength;
        btn.style.transform = `translate(${x.toFixed(1)}px, ${(y - 2).toFixed(1)}px)`;
      });
      btn.addEventListener("pointerleave", () => {
        btn.style.transform = "";
      });
    });
  }

  // ---- Spotlight que sigue el cursor sobre el fondo ---------------------------------------------------
  const cursorGlow = document.getElementById("cursorGlow");
  function enableCursorGlow() {
    let raf = null;
    document.addEventListener("pointermove", (e) => {
      cursorGlow.classList.add("is-active");
      if (raf) return;
      raf = requestAnimationFrame(() => {
        cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        raf = null;
      });
    });
    document.addEventListener("pointerleave", () => cursorGlow.classList.remove("is-active"));
  }

  if (allowFancyMotion) {
    // Se llama tras render para que existan los .tag / .rack__card / .project-card generados arriba.
    enableTilt(".tag", 8);
    enableTilt(".rack__card, .project-card", 4);
    enableMagnetic(".btn", 10);
    enableCursorGlow();
  }
})();
