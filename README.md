<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563eb,100:f97316&height=170&section=header&text=Image%20Carousel%20Slider&fontSize=40&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Abhishek%20Jadhav%20%7C%20Veda%20Technology%20Internship%20Day%2022&descAlignY=62&descSize=17" alt="Image Carousel Slider header" />

  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=20&pause=1000&color=2563eb&center=true&vCenter=true&width=760&lines=Veda+Technology+Internship+%E2%80%A2+Day+22;HTML5+%E2%80%A2+CSS3+%E2%80%A2+Vanilla+JavaScript;Image+Carousel+%E2%80%A2+Autoplay+%E2%80%A2+Responsive" alt="Typing introduction" />

  <p><b>Light Theme &#183; Blue/Orange Accent &#183; Responsive &#183; Accessible &#183; No Frameworks</b></p>

  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![No Frameworks](https://img.shields.io/badge/No_Frameworks-2563eb?style=for-the-badge)
  ![Accessible](https://img.shields.io/badge/Accessible-2563eb?style=for-the-badge)
  ![Responsive](https://img.shields.io/badge/Responsive-16a34a?style=for-the-badge)

</div>

---

Image Carousel / Slider by **Abhishek Jadhav** — Web Developer and first-year BCA student at VIIT, Baramati. Built with **HTML5 + CSS3 + Vanilla JavaScript**: a responsive, accessible image slider with autoplay, hover-pause, clickable indicators, keyboard navigation, slide counter, and per-slide titles. No frameworks, no build step, no backend.

> **Internship attribution:** 45-day Web Development Internship at **Veda Technology** — Day 22: Image Carousel/Slider.

## Features

- **5 distinct slides** (architecture, mountains, workspace, ocean, city) with high-quality imagery.
- **Previous / Next buttons** positioned over the image with hover and focus states.
- **Autoplay** via `setInterval()` starting automatically on load.
- **Hover pause / resume** (also pauses on focus for keyboard users).
- **Clickable indicator dots** with active state and ARIA selection.
- **Slide counter** formatted as `01 / 05`.
- **Per-slide title and description** updated with each slide.
- **Smooth slide transition** using CSS transform, no layout jumps.
- **Modulo wrap-around** at both boundaries.
- **Timer reset** after every manual navigation or indicator click.
- **Keyboard navigation** with Left / Right arrow keys.
- **Reduced-motion** respected (transitions disabled).
- **Graceful image fallback** if an image fails to load.
- **Responsive** layout for mobile, tablet, and desktop.
- **No horizontal overflow**; tested down to 320px.

## Technologies

| Technology | Use |
|------------|-----|
| HTML5 | Semantic `section`, `article`, `figure`-style markup, ARIA attributes (`index.html`) |
| CSS3 | Custom properties, Flexbox, aspect-ratio, transitions, media queries, focus states (`style.css`) |
| JavaScript | Slide logic, autoplay, indicators, keyboard, image fallback (`script.js`) |
| SVG | Brand mark and favicon (`assets/favicon.svg`) |
| No Frameworks | Zero dependencies |

## Project Structure

```text
internship-task-22/
├── index.html          # Semantic structure and carousel markup
├── style.css           # Responsive styling and transitions
├── script.js           # Carousel logic and accessibility
├── README.md           # This file
├── Veda_Technology_Task_22_Project_Report.docx
└── assets/
    └── favicon.svg     # Carousel favicon
```

## How to Run

1. Open the `internship-task-22` folder.
2. Double-click `index.html` — opens in Chrome / Edge / Firefox.
3. Or serve it: `python -m http.server 8000` → http://localhost:8000
4. Or VS Code **Live Server**: right-click `index.html` → **Open with Live Server**.

No install, no build, no dependencies.

Quick syntax check:

```powershell
node --check script.js
```

## Testing Checklist

- [x] All 5 slides display correctly.
- [x] Previous / Next buttons work at both boundaries (wrap-around).
- [x] Indicators navigate to the correct slides.
- [x] Autoplay advances slides automatically.
- [x] Hover pauses autoplay; leaving resumes.
- [x] Manual navigation resets the autoplay timer.
- [x] Keyboard Left / Right arrows navigate slides.
- [x] Slide counter updates (`01 / 05`).
- [x] Title and description update per slide.
- [x] Image fallback handles load failures.
- [x] Layout works at 320px, 375px, 768px, 1024px+.
- [x] No JavaScript console errors.
- [x] `prefers-reduced-motion` respected.

## Limitations

- Uses remote images (requires network connection); graceful fallback provided.
- No touch-swipe gestures (button/keyboard/dot navigation only).
- No dark mode variant.

---

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563eb,100:f97316&height=120&section=footer" alt="Footer wave" />
  <p><sub>Veda Technology Internship — Day 22: Image Carousel / Slider — HTML5 · CSS3 · Vanilla JavaScript</sub></p>
</div>