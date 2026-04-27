# Play Store listing — al-Saaiqa (الصاعقة)

Draft copy for Google Play Console "Main store listing" page. Play Console accepts separate translations per language — upload all three.

---

## Metadata (common to all languages)

- **Package name**: `org.workshopdiy.alsaaiqa`
- **Category**: `Books & Reference` (primary), `Education` (secondary if allowed)
- **Tags**: Islamic studies, Arabic, trilingual, education, al-Ghazali
- **Contact email**: `abdelhak.bourdim@gmail.com`
- **Website**: `https://workshop-diy.org`
- **Privacy policy URL**: REQUIRED — host a simple page (see template at end of this file).
- **Content rating**: Everyone (no violence, no gambling, no mature content).
- **Ads**: No.
- **In-app purchases**: No.
- **Data safety**: No data collected, no data shared.

---

## Arabic (ar) — primary

### App name (≤30 chars)
```
الصاعقة
```

### Short description (≤80 chars)
```
الصاعقة — مقالات الشيخ الغزالي من "الحق المر"
```

### Full description (≤4000 chars)
```
⛈️ الصاعقة

تطبيق تفاعلي ثلاثي اللغة (عربي/إنجليزي/فرنسي) مستوحى من كتاب "الحق المر" للشيخ محمد الغزالي رحمه الله (1917-1996).

📚 عن الكتاب

٤٠ مقالاً مختاراً في خمس فئات. متعقّب القراءة، إشارات مرجعية، البحث، خط زمني لحياة الشيخ، وعدّاد ٧ أيام لذكراه.

✨ المزايا

• ٤٠ مقالا منسقا في ٥ فئات
• ثلاث لغات: عربية، إنجليزية، فرنسية
• ثلاث سمات لونية
• وضع القراءة، قارئ صوتي، واجهة عربية بدعم كامل (RTL)
• يعمل بدون اتصال بالإنترنت

من workshop-diy.org
```

---

## English (en)

### App name
```
al-Saaiqa — The Thunderbolt
```

### Short description
```
The Thunderbolt — Sheikh al-Ghazali essays from "The Bitter Truth"
```

### Full description
```
⛈️ al-Saaiqa — The Thunderbolt

Interactive trilingual app (Arabic/English/French) based on the book "The Bitter Truth" (الحق المر) by Sheikh Mohammed al-Ghazali (1917-1996).

📚 About the book

40 curated essays in 5 categories. Bookmarks, reading-progress tracker, search, al-Ghazali life timeline, and 7-day memorial countdown.

✨ Features

• 40 curated essays in 5 categories
• Three languages: Arabic, English, French
• Three color themes
• Reading mode, audio narrator, full RTL Arabic support
• Works offline — no internet required

From workshop-diy.org
```

---

## French (fr)

### App name
```
al-Saaiqa — La Foudre
```

### Short description
```
La Foudre — essais d'al-Ghazali tirés de "La Vérité Amère"
```

### Full description
```
⛈️ al-Saaiqa — La Foudre

Application interactive trilingue (arabe/anglais/français) inspirée du livre « La Vérité Amère » (الحق المر) du Cheikh Mohammed al-Ghazali (1917-1996).

📚 À propos du livre

40 essais sélectionnés en 5 catégories. Marque-pages, suivi de lecture, recherche, chronologie biographique, compte à rebours mémoriel de 7 jours.

✨ Fonctionnalités

• 40 essais sélectionnés en 5 catégories
• Trois langues : arabe, anglais, français
• Trois thèmes visuels
• Mode lecture, narrateur audio, prise en charge complète de l'arabe (RTL)
• Fonctionne hors ligne — aucune connexion requise

De workshop-diy.org
```

---

## Graphics needed (minimum)

| Asset | Size | Source |
|---|---|---|
| App icon | 512×512 PNG | `store-assets/play-store-icon-512.png` (regenerate per book) |
| Feature graphic | 1024×500 PNG | `store-assets/feature-graphic.png` (render from `feature-graphic.html`) |
| Phone screenshots | min 2, 320–3840px, 16:9 portrait | Capture from emulator / real device |
| 7" tablet screenshots (optional) | min 2, 1024×600+ | Run emulator with tablet profile |

Screenshots to capture (book-specific — adjust list to actual app screens):
1. Home / cover / introduction
2. Main content navigation
3. Reading or interaction mode
4. Quiz or self-assessment (if applicable)
5. Theme switch (optional — shows the 3 variants)

---

## Privacy policy template

Copy to a public page (GitHub Pages works). Change email + date.

```
Privacy Policy — al-Saaiqa
Last updated: 2026-04-27

The al-Saaiqa app does not collect, store, transmit, or share any personal
data. All content is bundled with the app and runs entirely on your device.
The app does not use analytics, advertising networks, crash reporters, or
third-party SDKs.

The app requires no special permissions beyond internet access, which is
used only to load the occasional external link (e.g. workshop-diy.org) if
you tap it — never silently in the background.

If you have questions, contact: abdelhak.bourdim@gmail.com
```
