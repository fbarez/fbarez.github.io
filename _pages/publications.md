---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
---

Selected publications by research direction, followed by the full list. Also on [Google Scholar](https://scholar.google.com/citations?user=EAjpNIMAAAAJ).

<div class="publications">

<div class="pub-section">
<div class="pub-category">Interpretability</div>
<div class="pub-entries">
{% bibliography -f papers --query @*[category=Interpretability, selected=true] %}
</div>
</div>

<div class="pub-section">
<div class="pub-category">Safety &amp; Alignment</div>
<div class="pub-entries">
{% bibliography -f papers --query @*[category=Safety, selected=true] %}
</div>
</div>

<div class="pub-section">
<div class="pub-category">Technical Governance</div>
<div class="pub-entries">
{% bibliography -f papers --query @*[category=Governance, selected=true] %}
</div>
</div>

<div class="pub-section">
<div class="pub-category">Societal Impact</div>
<div class="pub-entries">
{% bibliography -f papers --query @*[category=Society, selected=true] %}
</div>
</div>

</div>

## All publications

<div class="publications">
{% bibliography -f papers %}
</div>
