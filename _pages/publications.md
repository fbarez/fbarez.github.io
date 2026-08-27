---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
---

<style>
  .pub-filters { margin: 1.5rem 0 0.5rem; }
  .pub-filter-row { display: flex; flex-wrap: wrap; align-items: baseline; gap: 0.4rem; margin-bottom: 0.6rem; }
  .pub-filter-label {
    font-size: 0.75rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
    color: var(--global-text-color-light); min-width: 3.5rem;
  }
  .pub-chip {
    font: inherit; font-size: 0.8rem; line-height: 1.2;
    padding: 0.28rem 0.65rem; border: 1px solid var(--global-divider-color);
    border-radius: 999px; background: transparent; color: var(--global-text-color);
    cursor: pointer; transition: border-color 0.15s, color 0.15s, background-color 0.15s;
  }
  .pub-chip:hover { border-color: var(--global-theme-color); color: var(--global-theme-color); }
  .pub-chip[aria-pressed="true"] {
    background: var(--global-theme-color); border-color: var(--global-theme-color); color: #fff;
  }
  .pub-count {
    font-size: 0.8rem; color: var(--global-text-color-light);
    margin: 0.9rem 0 0.2rem; font-variant-numeric: tabular-nums;
  }
  .pub-list { border-top: 1px solid var(--global-divider-color); }
  .pub-row {
    display: grid; grid-template-columns: 7.5rem 1fr; gap: 0 1.1rem;
    padding: 0.7rem 0; border-bottom: 1px solid var(--global-divider-color);
  }
  .pub-venue {
    font-size: 0.75rem; line-height: 1.5; color: var(--global-text-color-light);
    letter-spacing: 0.02em; padding-top: 0.12rem;
  }
  .pub-title { font-size: 0.98rem; font-weight: 600; line-height: 1.35; margin: 0; }
  .pub-title a { color: inherit; text-decoration: none; border-bottom: 1px solid transparent; }
  .pub-title a:hover { color: var(--global-theme-color); border-bottom-color: currentColor; }
  .pub-authors {
    font-size: 0.83rem; line-height: 1.45; color: var(--global-text-color-light); margin: 0.18rem 0 0;
  }
  .pub-authors strong { font-weight: 600; color: var(--global-text-color); }
  .pub-empty { padding: 1.5rem 0; color: var(--global-text-color-light); font-size: 0.9rem; }
  @media (max-width: 576px) {
    .pub-row { grid-template-columns: 1fr; gap: 0.15rem; }
    .pub-venue { order: 2; padding-top: 0.1rem; }
    .pub-title { order: 0; }
    .pub-authors { order: 1; }
  }
</style>

Peer-reviewed papers, workshop contributions, preprints and policy work. Also on [Google Scholar](https://scholar.google.com/citations?user=EAjpNIMAAAAJ).

<div class="pub-filters">
  <div class="pub-filter-row">
    <span class="pub-filter-label">Topic</span>
    {% assign topics = "All,Interpretability,Safety &amp; Alignment,Technical Governance,Societal Impact" | split: "," %}
    {% for t in topics %}
      <button class="pub-chip" data-filter="topic" data-value="{{ t }}" aria-pressed="{% if forloop.first %}true{% else %}false{% endif %}">{{ t }}</button>
    {% endfor %}
  </div>
  <div class="pub-filter-row">
    <span class="pub-filter-label">Type</span>
    {% assign types = "All,Conference,Journal,Workshop,Preprint,Policy" | split: "," %}
    {% for t in types %}
      <button class="pub-chip" data-filter="type" data-value="{{ t }}" aria-pressed="{% if forloop.first %}true{% else %}false{% endif %}">{{ t }}</button>
    {% endfor %}
  </div>
</div>

<p class="pub-count" id="pub-count"></p>

<div class="pub-list" id="pub-list">
{% for p in site.data.publications %}
  <div class="pub-row" data-topic="{{ p.topic | escape }}" data-type="{{ p.type | escape }}">
    <div class="pub-venue">{{ p.venue_label | escape }}</div>
    <div>
      <p class="pub-title">{% if p.url and p.url != "" %}<a href="{{ p.url }}">{{ p.title | escape }}</a>{% else %}{{ p.title | escape }}{% endif %}</p>
      <p class="pub-authors">{{ p.authors | join: ", " | escape | replace: "F. Barez", "<strong>F. Barez</strong>" }}</p>
    </div>
  </div>
{% endfor %}
  <p class="pub-empty" id="pub-empty" hidden>No publications match that combination.</p>
</div>

<script>
  (function () {
    var rows = Array.prototype.slice.call(document.querySelectorAll("#pub-list .pub-row"));
    var countEl = document.getElementById("pub-count");
    var emptyEl = document.getElementById("pub-empty");
    var active = { topic: "All", type: "All" };

    function apply() {
      var shown = 0;
      rows.forEach(function (row) {
        var okTopic = active.topic === "All" || row.dataset.topic === active.topic;
        var okType = active.type === "All" || row.dataset.type === active.type;
        var show = okTopic && okType;
        row.hidden = !show;
        if (show) shown++;
      });
      emptyEl.hidden = shown !== 0;
      countEl.textContent = shown === rows.length
        ? rows.length + " publications"
        : "Showing " + shown + " of " + rows.length;
    }

    document.querySelectorAll(".pub-chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        var group = chip.dataset.filter;
        active[group] = chip.dataset.value;
        document.querySelectorAll('.pub-chip[data-filter="' + group + '"]').forEach(function (c) {
          c.setAttribute("aria-pressed", String(c === chip));
        });
        apply();
      });
    });

    apply();
  })();
</script>
