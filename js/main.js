(function () {
  const d = PORTFOLIO_DATA;

  // ---- Hero / About ---------------------------------------------------
  document.getElementById("heroRole").textContent = d.profile.role;
  document.getElementById("heroPitch").textContent = d.profile.pitch;
  document.getElementById("aboutBio").textContent = d.profile.bio;
  document.getElementById("aboutLocation").textContent = d.profile.location;

  const interestStrip = document.getElementById("interestStrip");
  d.profile.interests.forEach((interest) => {
    const li = document.createElement("li");
    li.textContent = interest;
    interestStrip.appendChild(li);
  });

  // ---- Skills -----------------------------------------------------------
  const skillsWrap = document.getElementById("skillsWrap");
  d.skills.forEach((group) => {
    const groupEl = document.createElement("div");
    groupEl.className = "skills__group reveal";

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
  d.experience.forEach((job) => {
    const item = document.createElement("div");
    item.className = "rack__item reveal";
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
  d.education.forEach((edu) => {
    const row = document.createElement("div");
    row.className = "edu-row reveal";
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
    messages.forEach((msg) => {
      const slot = document.createElement("div");
      slot.className = "project-slot reveal";
      slot.innerHTML = `<p>${msg}</p>`;
      projectsWrap.appendChild(slot);
    });
  } else {
    d.projects.forEach((project) => {
      const card = document.createElement("div");
      card.className = "project-card reveal";
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

  // ---- Print / download ---------------------------------------------------
  document.getElementById("printBtn").addEventListener("click", () => window.print());

  // ---- Scroll reveal ---------------------------------------------------
  const revealEls = document.querySelectorAll(".reveal");
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
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }
})();
