---
layout: page
permalink: /#teaching
title: Teaching
description: Courses, workshops, and tutorial sessions I've taught.
nav: true
nav_order: 3
---

### Teaching Experience

<div class="teaching-container">
  <div class="teaching-item">
    <div class="teaching-year">2025</div>
    <div class="teaching-content">
      <div class="teaching-title"><a href="/AISAA/">AI Safety and Alignment</a></div>
      <div class="teaching-venue">Autonomous Intelligent Machines and Systems (AIMS), Information Engineering, University of Oxford</div>
      <div class="teaching-description">Intensive course on AI safety and alignment</div>
      <div class="teaching-links">
        <a href="/AISAA/" class="teaching-link"><i class="fas fa-link"></i> Course Website</a>
      </div>
    </div>
  </div>

  <div class="teaching-item">
    <div class="teaching-year">2024</div>
    <div class="teaching-content">
      <div class="teaching-title">Guest Lecturer - Oxford Machine Learning Summer School</div>
      <div class="teaching-venue">University of Oxford, UK</div>
      <div class="teaching-description">Lectured on AI Safety and Mechanistic Interpretability</div>
    </div>
  </div>

  <div class="teaching-item">
    <div class="teaching-year">2020</div>
    <div class="teaching-content">
      <div class="teaching-title">Introductory Applied Machine Learning (Semester 2)</div>
      <div class="teaching-venue">University of Edinburgh, UK</div>
      <div class="teaching-description">Tutor and Lab Demonstrator</div>
      <div class="teaching-links">
        <a href="https://www.inf.ed.ac.uk/teaching/courses/iaml/" class="teaching-link"><i class="fas fa-link"></i> Course Website</a>
        <a href="https://github.com/davidcsterratt/IAML2019-SEM2-Assignment2" class="teaching-link"><i class="fas fa-code-branch"></i> GitHub Repository</a>
      </div>
    </div>
  </div>

  <div class="teaching-item">
    <div class="teaching-year">2020</div>
    <div class="teaching-content">
      <div class="teaching-title">Reinforcement Learning</div>
      <div class="teaching-venue">University of Edinburgh, UK</div>
      <div class="teaching-description">Tutor and Lab Demonstrator</div>
      <div class="teaching-links">
        <a href="https://course.inf.ed.ac.uk/rl/" class="teaching-link"><i class="fas fa-link"></i> Course Website</a>
      </div>
    </div>
  </div>

  <div class="teaching-item">
    <div class="teaching-year">2019</div>
    <div class="teaching-content">
      <div class="teaching-title">Reinforcement Learning</div>
      <div class="teaching-venue">University of Edinburgh, UK</div>
      <div class="teaching-description">Tutor and Lab Demonstrator</div>
      <div class="teaching-links">
        <a href="https://course.inf.ed.ac.uk/rl/" class="teaching-link"><i class="fas fa-link"></i> Course Website</a>
      </div>
    </div>
  </div>

  <div class="teaching-item">
    <div class="teaching-year">2019</div>
    <div class="teaching-content">
      <div class="teaching-title">Introductory Applied Machine Learning (Semester 1)</div>
      <div class="teaching-venue">University of Edinburgh, UK</div>
      <div class="teaching-description">Tutor and Lab Demonstrator</div>
      <div class="teaching-links">
        <a href="https://www.inf.ed.ac.uk/teaching/courses/iaml/" class="teaching-link"><i class="fas fa-link"></i> Course Website</a>
      </div>
    </div>
  </div>
</div>

### Past Mentees

<div class="mentees-container">
  <div class="mentee-item">
    <div class="mentee-name">Minseon Kim</div>
    <div class="mentee-position">Now at Microsoft Research</div>
  </div>
  
  <div class="mentee-item">
    <div class="mentee-name">Michelle Lo</div>
    <div class="mentee-position">Now at DeepMind</div>
  </div>
  
  <div class="mentee-item">
    <div class="mentee-name">Michael Lan</div>
    <div class="mentee-position">Now at Martian</div>
  </div>
  
  <div class="mentee-item">
    <div class="mentee-name">Lovis Heindrich</div>
    <div class="mentee-position">Now at Epoch</div>
  </div>
  
  <div class="mentee-item">
    <div class="mentee-name">Philip Quirke</div>
    <div class="mentee-position">Now at Martian</div>
  </div>
  
  <div class="mentee-item">
    <div class="mentee-name">Clement Neo</div>
    <div class="mentee-position">Now at DTC Singapore</div>
  </div>
  
  <div class="mentee-item">
    <div class="mentee-name">Alex Foot</div>
    <div class="mentee-position">Now at Ripjar</div>
  </div>
  
  <div class="mentee-item">
    <div class="mentee-name">Luke Marks</div>
    <div class="mentee-position">Now at MATS</div>
  </div>
</div>

<style>
.teaching-container {
  margin-top: 20px;
}

.teaching-item {
  display: flex;
  margin-bottom: 25px;
  border-left: 3px solid #f0f0f0;
  padding-left: 15px;
}

.teaching-year {
  flex: 0 0 60px;
  font-weight: bold;
  color: #555;
}

.teaching-content {
  flex: 1;
}

.teaching-title {
  font-weight: bold;
  font-size: 1.05em;
  margin-bottom: 3px;
}

.teaching-venue {
  font-style: italic;
  color: #666;
  margin-bottom: 5px;
}

.teaching-description {
  margin-bottom: 5px;
}

.teaching-links {
  margin-top: 5px;
}

.teaching-link {
  margin-right: 15px;
  text-decoration: none;
  font-size: 0.9em;
}

.teaching-link i {
  margin-right: 4px;
}

/* Mentees section styling */
.mentees-container {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
}

.mentee-item {
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 12px 15px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.mentee-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.mentee-name {
  font-weight: bold;
  font-size: 1.05em;
  margin-bottom: 3px;
  color: var(--global-theme-color, #0076df);
}

.mentee-position {
  color: #666;
  font-size: 0.95em;
}
</style>