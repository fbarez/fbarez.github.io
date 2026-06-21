---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
---

Selected publications by research direction. Full list on [Google Scholar](https://scholar.google.com/citations?user=EAjpNIMAAAAJ).

<div class="publications">

<div class="pub-section">
<div class="pub-category">Interpretability</div>
<div class="pub-entries">
{% bibliography -f selected --query @*[category=Interpretability] %}
</div>
</div>

<div class="pub-section">
<div class="pub-category">Safety &amp; Alignment</div>
<div class="pub-entries">
{% bibliography -f selected --query @*[category=Safety] %}
</div>
</div>

<div class="pub-section">
<div class="pub-category">Technical Governance</div>
<div class="pub-entries">
{% bibliography -f selected --query @*[category=Governance] %}
</div>
</div>

<div class="pub-section">
<div class="pub-category">Societal Impact</div>
<div class="pub-entries">
{% bibliography -f selected --query @*[category=Society] %}
</div>
</div>

</div>
