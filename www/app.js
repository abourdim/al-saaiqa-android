/* ============================================================
   AL-SAAIQA — THE THUNDERBOLT
   app.js — Complete Application Logic (Enriched v2)
   ============================================================ */

(function () {
  'use strict';

  /* ===================== i18n TRANSLATIONS ===================== */
  const i18n = {
    ar: {
      appTitle: 'الصاعقة',
      homeTitle: 'الحقيقة المرة اليوم',
      homeSubtitle: 'حقيقة واحدة تتغير كل يوم — تأمّلها',
      dailyLabel: 'حقيقة اليوم المرة',
      dailyThunderbolt: 'صاعقة اليوم — اضغط للقراءة',
      shareBtn: 'شارك',
      shareEssay: 'شارك',
      bookmarkAdd: 'احفظ',
      bookmarkRemove: 'محفوظ',
      bioTeaser: 'كتب الشيخ الغزالي مقدمة الجزء الأخير من "الحق المر" قبل وفاته بسبعة أيام فقط. رحل في ٩ مارس ١٩٩٦ ودُفن في المدينة المنورة.',
      deathCountdownTitle: 'الأيام السبعة الأخيرة',
      statVolumes: 'أجزاء',
      statEssays: 'مقالة',
      statYears: 'سنوات كتابة',
      statDays: 'أيام قبل الرحيل',
      impactQuotesTitle: 'صواعق الغزالي',
      impactQuotesSubtitle: 'عشرة محاور من صميم الكتاب',
      truthsTitle: 'الحقائق المرّة',
      truthsSubtitle: '٤٠ حقيقة مختارة من الكتاب — اضغط لتوسيع',
      searchPlaceholder: 'ابحث في الحقائق...',
      catAll: 'الكل',
      catSelf: 'نقد الذات',
      catWomen: 'حقوق المرأة',
      catPolitical: 'سياسة',
      catKnowledge: 'علم وإيمان',
      catCourage: 'شجاعة وصدق',
      catBookmarks: 'محفوظاتي',
      noResults: 'لا توجد نتائج',
      noBookmarks: 'لم تحفظ أي مقالة بعد',
      timelineTitle: 'المسيرة',
      timelineSubtitle: 'محطات في حياة الشيخ محمد الغزالي',
      aboutTitle: 'عن الكتاب',
      aboutSubtitle: 'الحق المر — محمد الغزالي',
      bookInfoTitle: '📚 عن الكتاب',
      bookInfoText: '"الحق المر" سلسلة من ٦ أجزاء تضم أكثر من ٩٧ مقالة قصيرة، كتبها الشيخ محمد الغزالي في العقد الأخير من حياته (١٩٨٨-١٩٩٦). استلهم أسلوبه من كتاب "صيد الخاطر" لابن الجوزي. كل مقالة هي "حقيقة مرة" عن إخفاقات المسلمين — نقد ذاتي صريح وليس تحميل الآخرين المسؤولية. كتب مقدمة الجزء الأخير قبل وفاته بسبعة أيام فقط.',
      authorBioTitle: '🖊️ عن المؤلف',
      authorBioText: 'الشيخ محمد الغزالي (١٩١٧-١٩٩٦) عالم ومفكر إسلامي مصري من قرية نكلا العنب. تخرج من الأزهر عام ١٩٤١. انضم إلى الإخوان المسلمين وكان قريبا من حسن البنا، ثم انفصل عنهم. صودرت كتبه أكثر من مرة. حصل على جائزة الملك فيصل عام ١٩٨٩. درّس في السعودية والجزائر. توفي في الرياض ودُفن في المدينة المنورة.',
      topicsTitle: '📋 موضوعات الكتاب',
      topicSelf: 'نقد ذاتي',
      topicIgnorance: 'الجهل',
      topicWomen: 'حقوق المرأة',
      topicDespotism: 'الاستبداد السياسي',
      topicExtremism: 'التطرف الديني',
      topicPalestine: 'فلسطين',
      topicImperialism: 'الاستعمار الثقافي',
      topicWeakness: 'الضعف الداخلي',
      disclaimerTitle: '⚠️ تنبيه',
      disclaimerText: 'لستُ عالمًا ولا متخصصًا. هذا جهد متواضع من أب/أم مسلم(ة). المحتوى مستوحى من الكتاب ومصادر إسلامية موثوقة. ليس فتوى ولا مرجعًا شرعيًا. يُرجى الرجوع دائمًا للعلماء المتخصصين.',
      sourcesTitle: '📖 المصادر',
      source1: 'الحق المر — محمد الغزالي (٦ أجزاء)',
      source2: 'صيد الخاطر — ابن الجوزي',
      source3: 'السنة النبوية بين أهل الفقه وأهل الحديث — محمد الغزالي',
      helpTitle: 'المساعدة',
      helpIntro: 'مرحبًا بك في تطبيق "الصاعقة" — دليلك التفاعلي لكتاب "الحق المر".',
      helpItem1: '🏠 الرئيسية: حقيقة مرة يومية تتغير كل يوم',
      helpItem2: '⛈️ الحقائق: ٤٠ مقالة مختارة — اضغط لتوسيع',
      helpItem3: '📅 المسيرة: محطات حياة الشيخ الغزالي',
      helpItem4: '📖 عن الكتاب: معلومات ومصادر',
      helpItem5: '🎨 اختر من ٣ ألوان: صاعقة، عاصفة، صحو',
      helpItem6: '🌐 ٣ لغات: العربية، English، Francais',
      helpItem7: '🤲 زر الدعاء العائم — اضغطه للدعاء',
      helpItem8: '🔍 ابحث في المقالات بالكلمات المفتاحية',
      helpItem9: '🔖 احفظ مقالاتك المفضلة في محفوظاتي',
      helpItem10: '📊 تابع تقدمك في القراءة',
      tabHome: 'الرئيسية',
      tabTruths: 'الحقائق',
      tabTimeline: 'المسيرة',
      tabAbout: 'عن الكتاب',
      themeThunderbolt: 'صاعقة',
      themeStorm: 'عاصفة',
      themeClear: 'صحو',
      truthLabel: 'الحقيقة المرة',
      bitterLabel: 'لماذا هي مرة؟',
      cureLabel: 'العلاج',
      toastCopied: 'تم النسخ!',
      toastTheme: 'تم تغيير اللون',
      toastBookmarkAdd: 'تمت الإضافة إلى المحفوظات',
      toastBookmarkRemove: 'تمت الإزالة من المحفوظات',
      soundOn: 'الصوت مفعّل',
      soundOff: 'الصوت مُعطّل'
    },
    en: {
      appTitle: 'The Thunderbolt',
      homeTitle: "Today\'s Bitter Truth",
      homeSubtitle: 'One truth that changes daily — reflect on it',
      dailyLabel: "Today\'s Bitter Truth",
      dailyThunderbolt: "Today\'s Thunderbolt — tap to read",
      shareBtn: 'Share',
      shareEssay: 'Share',
      bookmarkAdd: 'Save',
      bookmarkRemove: 'Saved',
      bioTeaser: 'Sheikh al-Ghazali wrote the preface to the final volume of "The Bitter Truth" just 7 days before his death. He passed away on March 9, 1996 and was buried in Medina.',
      deathCountdownTitle: 'The Last Seven Days',
      statVolumes: 'Volumes',
      statEssays: 'Essays',
      statYears: 'Years Writing',
      statDays: 'Days Before Death',
      impactQuotesTitle: "Al-Ghazali's Thunderbolts",
      impactQuotesSubtitle: '10 powerful themes from the book',
      truthsTitle: 'The Bitter Truths',
      truthsSubtitle: '40 curated essays from the book — tap to expand',
      searchPlaceholder: 'Search essays...',
      catAll: 'All',
      catSelf: 'Self-Critique',
      catWomen: "Women's Rights",
      catPolitical: 'Political',
      catKnowledge: 'Knowledge & Faith',
      catCourage: 'Courage & Honesty',
      catBookmarks: 'My Collection',
      noResults: 'No results found',
      noBookmarks: 'No saved essays yet',
      timelineTitle: 'The Journey',
      timelineSubtitle: "Milestones in Sheikh al-Ghazali's life",
      aboutTitle: 'About the Book',
      aboutSubtitle: 'The Bitter Truth — Mohammed al-Ghazali',
      bookInfoTitle: '📚 About the Book',
      bookInfoText: '"The Bitter Truth" is a 6-volume series of 97+ short essays written by Sheikh Mohammed al-Ghazali in the last decade of his life (1988-1996). Inspired by Ibn al-Jawzi\'s "Sayd al-Khatir." Each essay is a "bitter truth" about Muslim failures — honest self-critique, not blaming others. He wrote the preface to the final volume just 7 days before his death.',
      authorBioTitle: '🖊️ About the Author',
      authorBioText: 'Sheikh Mohammed al-Ghazali (1917-1996) was an Egyptian Islamic scholar and thinker from Nikla al-Inab village. He graduated from Al-Azhar in 1941. He joined the Muslim Brotherhood and was close to Hassan al-Banna, then separated from them. His books were confiscated multiple times. He received the King Faisal Award in 1989. He taught in Saudi Arabia and Algeria. He died in Riyadh and was buried in Medina.',
      topicsTitle: '📋 Book Topics',
      topicSelf: 'Self-Critique',
      topicIgnorance: 'Ignorance',
      topicWomen: "Women's Rights",
      topicDespotism: 'Political Despotism',
      topicExtremism: 'Religious Extremism',
      topicPalestine: 'Palestine',
      topicImperialism: 'Cultural Imperialism',
      topicWeakness: 'Internal Weakness',
      disclaimerTitle: '⚠️ Disclaimer',
      disclaimerText: 'I am not a scholar. This is a humble effort by a Muslim parent. Content from the book and trusted Islamic sources. Not a fatwa or religious authority. Always refer to qualified scholars.',
      sourcesTitle: '📖 Sources',
      source1: 'The Bitter Truth — Mohammed al-Ghazali (6 volumes)',
      source2: 'Sayd al-Khatir — Ibn al-Jawzi',
      source3: 'The Prophetic Sunnah Between the People of Fiqh and Hadith — Mohammed al-Ghazali',
      helpTitle: 'Help',
      helpIntro: 'Welcome to "The Thunderbolt" — your interactive guide to "The Bitter Truth."',
      helpItem1: '🏠 Home: A daily bitter truth that changes every day',
      helpItem2: '⛈️ Truths: 40 curated essays — tap to expand',
      helpItem3: "📅 Journey: Sheikh al-Ghazali's life milestones",
      helpItem4: '📖 About: Book info and sources',
      helpItem5: '🎨 Choose from 3 themes: Thunderbolt, Storm, Clear Sky',
      helpItem6: '🌐 3 languages: Arabic, English, French',
      helpItem7: '🤲 Floating dua button — tap for a prayer',
      helpItem8: '🔍 Search essays by keyword',
      helpItem9: '🔖 Save favorite essays to My Collection',
      helpItem10: '📊 Track your reading progress',
      tabHome: 'Home',
      tabTruths: 'Truths',
      tabTimeline: 'Journey',
      tabAbout: 'Book',
      themeThunderbolt: 'Thunderbolt',
      themeStorm: 'Storm',
      themeClear: 'Clear Sky',
      truthLabel: 'THE BITTER TRUTH',
      bitterLabel: "WHY IT'S BITTER",
      cureLabel: 'THE CURE',
      toastCopied: 'Copied!',
      toastTheme: 'Theme changed',
      toastBookmarkAdd: 'Added to collection',
      toastBookmarkRemove: 'Removed from collection',
      soundOn: 'Sound on',
      soundOff: 'Sound off'
    },
    fr: {
      appTitle: 'La Foudre',
      homeTitle: "La verite amere du jour",
      homeSubtitle: 'Une verite qui change chaque jour — meditez',
      dailyLabel: 'Verite amere du jour',
      dailyThunderbolt: "Foudre du jour — appuyez pour lire",
      shareBtn: 'Partager',
      shareEssay: 'Partager',
      bookmarkAdd: 'Sauver',
      bookmarkRemove: 'Sauve',
      bioTeaser: "Le Cheikh al-Ghazali a ecrit la preface du dernier volume de \"La Verite Amere\" seulement 7 jours avant sa mort. Il est decede le 9 mars 1996 et a ete enterre a Medine.",
      deathCountdownTitle: 'Les sept derniers jours',
      statVolumes: 'Volumes',
      statEssays: 'Essais',
      statYears: "Ans d'ecriture",
      statDays: 'Jours avant le deces',
      impactQuotesTitle: 'Les foudres d\'al-Ghazali',
      impactQuotesSubtitle: '10 themes puissants du livre',
      truthsTitle: 'Les Verites Ameres',
      truthsSubtitle: '40 essais selectionnes du livre — appuyez pour developper',
      searchPlaceholder: 'Rechercher des essais...',
      catAll: 'Tous',
      catSelf: 'Autocritique',
      catWomen: 'Droits des femmes',
      catPolitical: 'Politique',
      catKnowledge: 'Savoir et Foi',
      catCourage: 'Courage et Sincerite',
      catBookmarks: 'Ma collection',
      noResults: 'Aucun resultat',
      noBookmarks: 'Aucun essai sauvegarde',
      timelineTitle: 'Le Parcours',
      timelineSubtitle: 'Etapes de la vie du Cheikh al-Ghazali',
      aboutTitle: 'A propos du livre',
      aboutSubtitle: 'La Verite Amere — Mohammed al-Ghazali',
      bookInfoTitle: '📚 A propos du livre',
      bookInfoText: '"La Verite Amere" est une serie de 6 volumes contenant plus de 97 courts essais, ecrits par le Cheikh Mohammed al-Ghazali dans la derniere decennie de sa vie (1988-1996). Inspire du "Sayd al-Khatir" d\'Ibn al-Jawzi. Chaque essai est une "verite amere" sur les echecs des musulmans — une autocritique honnete. Il a ecrit la preface du dernier volume 7 jours seulement avant sa mort.',
      authorBioTitle: '🖊️ A propos de l\'auteur',
      authorBioText: "Le Cheikh Mohammed al-Ghazali (1917-1996) etait un erudit et penseur islamique egyptien du village de Nikla al-Inab. Diplome d'Al-Azhar en 1941. Il a rejoint les Freres Musulmans et etait proche de Hassan al-Banna, puis s'en est separe. Ses livres ont ete confisques plusieurs fois. Il a recu le prix Roi Faysal en 1989. Il a enseigne en Arabie Saoudite et en Algerie. Il est mort a Riyad et a ete enterre a Medine.",
      topicsTitle: '📋 Sujets du livre',
      topicSelf: 'Autocritique',
      topicIgnorance: 'Ignorance',
      topicWomen: 'Droits des femmes',
      topicDespotism: 'Despotisme politique',
      topicExtremism: 'Extremisme religieux',
      topicPalestine: 'Palestine',
      topicImperialism: 'Imperialisme culturel',
      topicWeakness: 'Faiblesse interne',
      disclaimerTitle: '⚠️ Avertissement',
      disclaimerText: "Je ne suis pas un savant. C'est un effort humble d\'un parent musulman. Contenu du livre et de sources islamiques fiables. Ce n'est pas une fatwa. Consultez toujours des savants qualifies.",
      sourcesTitle: '📖 Sources',
      source1: 'La Verite Amere — Mohammed al-Ghazali (6 volumes)',
      source2: "Sayd al-Khatir — Ibn al-Jawzi",
      source3: 'La Sunna prophetique entre les gens du Fiqh et du Hadith — Mohammed al-Ghazali',
      helpTitle: 'Aide',
      helpIntro: 'Bienvenue dans "La Foudre" — votre guide interactif de "La Verite Amere."',
      helpItem1: '🏠 Accueil : Une verite amere quotidienne',
      helpItem2: '⛈️ Verites : 40 essais selectionnes — appuyez pour developper',
      helpItem3: '📅 Parcours : Etapes de la vie du Cheikh al-Ghazali',
      helpItem4: '📖 A propos : Infos et sources',
      helpItem5: '🎨 3 themes : Foudre, Tempete, Ciel clair',
      helpItem6: '🌐 3 langues : Arabe, Anglais, Francais',
      helpItem7: '🤲 Bouton de dua flottant — appuyez pour une priere',
      helpItem8: '🔍 Rechercher des essais par mot-cle',
      helpItem9: '🔖 Sauvegardez vos essais preferes',
      helpItem10: '📊 Suivez votre progression de lecture',
      tabHome: 'Accueil',
      tabTruths: 'Verites',
      tabTimeline: 'Parcours',
      tabAbout: 'Livre',
      themeThunderbolt: 'Foudre',
      themeStorm: 'Tempete',
      themeClear: 'Ciel clair',
      truthLabel: 'LA VERITE AMERE',
      bitterLabel: 'POURQUOI EST-ELLE AMERE?',
      cureLabel: 'LE REMEDE',
      toastCopied: 'Copie!',
      toastTheme: 'Theme change',
      toastBookmarkAdd: 'Ajoute a la collection',
      toastBookmarkRemove: 'Retire de la collection',
      soundOn: 'Son active',
      soundOff: 'Son desactive'
    }
  };

  /* ===================== ESSAYS DATA (40 TOTAL) ===================== */
  const essays = [
    // ===== CATEGORY A: SELF-CRITIQUE (11) =====
    {
      id: 1, cat: 'self', emoji: '🪞',
      title: { ar: 'هزائمنا من صنع أيدينا', en: 'Our Defeats Are Self-Inflicted', fr: 'Nos defaites sont auto-infligees' },
      truth: { ar: 'يقول الغزالي في الصاعقة: كل هزيمة نعاني منها لم تأتِ من قوة العدو، بل من ضعفنا الداخلي. نبحث عن أعذار في المؤامرات والأعداء، بينما المرض فينا نحن.', en: 'Every defeat we suffer comes not from the enemy\'s strength but from our inner weakness. We look for excuses in conspiracies and enemies, while the disease is within us.', fr: 'Chaque defaite que nous subissons ne vient pas de la force de l\'ennemi mais de notre faiblesse interieure. Nous cherchons des excuses dans les complots, alors que la maladie est en nous.' },
      bitter: { ar: 'يصف الغزالي: لأننا نفضّل لوم الآخرين على مواجهة أنفسنا. الاعتراف بالضعف يحتاج شجاعة لا يملكها كثيرون.', en: 'Because we prefer blaming others to facing ourselves. Admitting weakness takes courage most don\'t have.', fr: 'Parce que nous preferons blamer les autres plutot que de nous confronter. Admettre sa faiblesse demande du courage.' },
      cure: { ar: 'يصف الغزالي الحل: ابدأ بنفسك. كل إصلاح حقيقي يبدأ من الداخل. المسلم القوي يواجه عيوبه قبل أن يُشير إلى عيوب غيره.', en: 'Start with yourself. Every real reform begins from within. A strong Muslim faces their own flaws before pointing at others.', fr: 'Commencez par vous-meme. Toute vraie reforme commence de l\'interieur. Un musulman fort affronte ses propres defauts.' }
    },
    {
      id: 2, cat: 'self', emoji: '🎭',
      title: { ar: 'الجوهر قبل المظهر', en: 'Substance Before Form', fr: 'Le fond avant la forme' },
      truth: { ar: 'يقول الغزالي في الصاعقة: نهتم بمظاهر الدين أكثر من جوهره. نحفظ الشكل ونضيع المضمون. الإيمان محتوى قبل أن يكون مظهرًا.', en: 'We care about the appearance of religion more than its essence. We preserve the form and lose the content. Faith is substance before appearance.', fr: 'Nous nous soucions de l\'apparence de la religion plus que de son essence. Nous preservons la forme et perdons le contenu.' },
      bitter: { ar: 'يصف الغزالي: لأن المظهر سهل، أما بناء الجوهر فيحتاج جهدًا حقيقيًا وصبرًا طويلًا.', en: 'Because appearance is easy, but building substance requires real effort and long patience.', fr: 'Parce que l\'apparence est facile, mais construire le fond demande un effort reel et de la patience.' },
      cure: { ar: 'يصف الغزالي الحل: اسأل نفسك: هل أنا أحسن خُلقًا وأكثر عدلًا؟ الأعمال الظاهرة بلا أخلاق كجسد بلا روح.', en: 'Ask yourself: Am I better in character and more just? Outward acts without ethics are like a body without a soul.', fr: 'Demandez-vous : suis-je meilleur en caractere et plus juste? Les actes exterieurs sans ethique sont un corps sans ame.' }
    },
    {
      id: 3, cat: 'self', emoji: '🧠',
      title: { ar: 'الضعف النفسي يسبق وسوسة الشيطان', en: 'Psychological Weakness Comes Before Satan', fr: 'La faiblesse psychologique precede les chuchotements de Satan' },
      truth: { ar: 'يقول الغزالي في الصاعقة: نلوم الشيطان على كل سقطة، لكن الشيطان لا يملك سلطانًا على نفس قوية. الضعف النفسي هو الباب الذي يدخل منه.', en: 'We blame Satan for every fall, but Satan has no power over a strong soul. Psychological weakness is the door through which he enters.', fr: 'Nous accusons Satan de chaque chute, mais Satan n\'a aucun pouvoir sur une ame forte. La faiblesse psychologique est la porte par laquelle il entre.' },
      bitter: { ar: 'يصف الغزالي: لأن الاعتراف بضعفنا النفسي أصعب من إلقاء اللوم على قوة خارجية.', en: 'Because admitting our psychological weakness is harder than blaming an external force.', fr: 'Parce qu\'admettre notre faiblesse psychologique est plus difficile que de blamer une force externe.' },
      cure: { ar: 'يصف الغزالي الحل: قوِّ نفسك بالعلم والعبادة الواعية. اجعل عقلك حصنًا قبل أن تبحث عن أعذار.', en: 'Strengthen yourself with knowledge and mindful worship. Make your mind a fortress before seeking excuses.', fr: 'Renforcez-vous par le savoir et l\'adoration consciente. Faites de votre esprit une forteresse.' }
    },
    {
      id: 4, cat: 'self', emoji: '🔍',
      title: { ar: 'نلوم الأعداء ولا ننظر في المرآة', en: 'We Blame Enemies Instead of Looking in the Mirror', fr: 'Nous accusons les ennemis au lieu de nous regarder dans le miroir' },
      truth: { ar: 'يقول الغزالي في الصاعقة: نقضي أوقاتنا في تحليل مؤامرات الآخرين، ونتجاهل أن أكبر مؤامرة هي جهلنا بأنفسنا وتقصيرنا في واجباتنا.', en: 'We spend our time analyzing others\' conspiracies while ignoring that the biggest conspiracy is our own ignorance and negligence.', fr: 'Nous passons notre temps a analyser les complots des autres, ignorant que le plus grand complot est notre propre ignorance.' },
      bitter: { ar: 'يصف الغزالي: لأن لوم الآخرين يريحنا من مسؤولية التغيير.', en: 'Because blaming others relieves us of the responsibility to change.', fr: 'Parce que blamer les autres nous libere de la responsabilite de changer.' },
      cure: { ar: 'يصف الغزالي الحل: خصص وقتًا لنقد ذاتك كما تخصصه لانتقاد غيرك. المرآة أصدق من النافذة.', en: 'Spend time critiquing yourself as you critique others. The mirror is more honest than the window.', fr: 'Consacrez du temps a vous critiquer comme vous critiquez les autres. Le miroir est plus honnete que la fenetre.' }
    },
    {
      id: 5, cat: 'self', emoji: '🏚️',
      title: { ar: 'صاحب البيت الجبان واللص الجريء', en: 'The Cowardly Homeowner and the Bold Thief', fr: 'Le proprietaire lache et le voleur audacieux' },
      truth: { ar: 'يقول الغزالي في الصاعقة: عندما يكون صاحب البيت جبانًا، يصبح اللص جريئًا. ضعفنا هو ما يجرّئ عدونا علينا، لا قوته.', en: 'When the homeowner is cowardly, the thief becomes bold. Our weakness emboldens the enemy, not their strength.', fr: 'Quand le proprietaire est lache, le voleur devient audacieux. Notre faiblesse encourage l\'ennemi, pas sa force.' },
      bitter: { ar: 'يصف الغزالي: لأننا نفضّل الشكوى على بناء القوة. الضعيف يستسهل البكاء.', en: 'Because we prefer complaining to building strength. The weak find it easier to cry.', fr: 'Parce que nous preferons nous plaindre plutot que de construire notre force.' },
      cure: { ar: 'يصف الغزالي الحل: كن قويًا في بيتك — في علمك، أخلاقك، إنتاجك. اللص لا يقترب من بيتٍ صاحبه يقظ.', en: 'Be strong in your house — in your knowledge, ethics, and productivity. A thief doesn\'t approach a home whose owner is alert.', fr: 'Soyez fort dans votre maison — en savoir, en ethique, en productivite. Le voleur n\'approche pas une maison dont le proprietaire est vigilant.' }
    },
    {
      id: 6, cat: 'self', emoji: '📖',
      title: { ar: 'جهل الحق سبب ضياعه', en: 'Ignorance of Truth Is Why It Is Lost', fr: 'L\'ignorance de la verite est la cause de sa perte' },
      truth: { ar: 'يقول الغزالي في الصاعقة: لا نضيع الحق لأن أعداءنا أقوياء، بل لأننا لا نعرف حقنا أصلًا. الجاهل بحقه لا يستطيع المطالبة به.', en: 'We don\'t lose our rights because enemies are strong, but because we don\'t even know our rights. Those ignorant of their rights cannot demand them.', fr: 'Nous ne perdons pas nos droits parce que les ennemis sont forts, mais parce que nous ne connaissons meme pas nos droits.' },
      bitter: { ar: 'يصف الغزالي: لأن التعلّم يحتاج وقتًا وجهدًا، والكسل أسهل.', en: 'Because learning takes time and effort, and laziness is easier.', fr: 'Parce que l\'apprentissage demande du temps et de l\'effort, et la paresse est plus facile.' },
      cure: { ar: 'يصف الغزالي الحل: تعلّم دينك وتاريخك وحقوقك. المعرفة سلاح لا يُهزم حامله.', en: 'Learn your religion, history, and rights. Knowledge is a weapon whose bearer cannot be defeated.', fr: 'Apprenez votre religion, votre histoire et vos droits. Le savoir est une arme invincible.' }
    },
    {
      id: 7, cat: 'self', emoji: '⏳',
      title: { ar: 'التخلف ذنب كالكبائر', en: 'Backwardness Is a Sin Like Major Sins', fr: 'Le retard est un peche comparable aux grands peches' },
      truth: { ar: 'يقول الغزالي في الصاعقة: التخلف العلمي والحضاري ليس قدرًا محتومًا بل هو ذنب عظيم. أمة تملك كل المقومات وتبقى متخلفة ارتكبت خطيئة بحق نفسها.', en: 'Scientific and civilizational backwardness is not fate — it is a great sin. A nation with all resources that remains backward has sinned against itself.', fr: 'Le retard scientifique et civilisationnel n\'est pas une fatalite — c\'est un grand peche. Une nation qui a toutes les ressources et reste en retard a peche contre elle-meme.' },
      bitter: { ar: 'يصف الغزالي: لأننا اعتدنا اعتبار التخلف قدرًا وليس مسؤولية.', en: 'Because we\'ve gotten used to treating backwardness as fate, not responsibility.', fr: 'Parce que nous nous sommes habitues a considerer le retard comme une fatalite, pas une responsabilite.' },
      cure: { ar: 'يصف الغزالي الحل: اعتبر طلب العلم عبادة والإنتاج جهادًا. لا عذر لأمة عندها القرآن وتبقى في الظلام.', en: 'Consider seeking knowledge as worship and productivity as jihad. No excuse for a nation with the Quran to remain in darkness.', fr: 'Considerez la quete du savoir comme une adoration et la productivite comme un jihad.' }
    },
    {
      id: 8, cat: 'self', emoji: '🏗️',
      title: { ar: 'ننقل هياكل الغرب بلا أسس', en: 'We Copy Western Structures Without Their Foundations', fr: 'Nous copions les structures occidentales sans leurs fondations' },
      truth: { ar: 'يقول الغزالي في الصاعقة: نستورد المباني والأنظمة من الغرب لكن بلا الأسس التي قامت عليها: حرية الفكر، المساءلة، سيادة القانون. ننسخ القشرة ونترك اللب.', en: 'We import buildings and systems from the West but without their foundations: freedom of thought, accountability, rule of law. We copy the shell and leave the core.', fr: 'Nous importons les batiments et les systemes de l\'Occident sans leurs fondations : liberte de pensee, responsabilite, etat de droit. Nous copions la coquille et laissons le noyau.' },
      bitter: { ar: 'يصف الغزالي: لأن بناء الأسس أصعب وأبطأ من نسخ الواجهات.', en: 'Because building foundations is harder and slower than copying facades.', fr: 'Parce que construire les fondations est plus difficile et plus lent que copier les facades.' },
      cure: { ar: 'يصف الغزالي الحل: ابنِ الإنسان قبل البنيان. أصلح التعليم والأخلاق، ثم سيأتي التقدم طبيعيًا.', en: 'Build the person before the building. Fix education and ethics, then progress will come naturally.', fr: 'Construisez l\'humain avant le batiment. Reformez l\'education et l\'ethique, et le progres viendra naturellement.' }
    },
    // NEW Self-Critique essays (3)
    {
      id: 31, cat: 'self', emoji: '🎓',
      title: { ar: 'أزمة التعليم الإسلامي — ننتج حفّاظًا لا مفكرين', en: 'The Crisis of Muslim Education — Producing Memorizers, Not Thinkers', fr: 'La crise de l\'education musulmane — produire des memorisateurs, pas des penseurs' },
      truth: { ar: 'مناهجنا التعليمية تصنع حافظًا يردد ولا تصنع عقلًا يفكر. نقيس النجاح بكمّ المحفوظ لا بجودة الفهم. التعليم الحقيقي يُنتج مبدعين لا ببغاوات.', en: 'Our educational curricula produce students who recite but do not think. We measure success by quantity memorized, not quality of understanding. True education produces creative minds, not parrots.', fr: 'Nos programmes educatifs produisent des eleves qui recitent mais ne pensent pas. Nous mesurons le succes par la quantite memorisee, pas la qualite de la comprehension.' },
      bitter: { ar: 'لأن تعليم الحفظ أسهل من تعليم التفكير. المعلم الكسول يفضّل الطالب الصامت.', en: 'Because teaching memorization is easier than teaching thinking. A lazy teacher prefers a silent student.', fr: 'Parce qu\'enseigner la memorisation est plus facile qu\'enseigner la reflexion.' },
      cure: { ar: 'أصلح المدرسة قبل المسجد. علّم أطفالك أن يسألوا "لماذا" لا أن يقولوا "سمعًا وطاعة" فقط.', en: 'Fix the school before the mosque. Teach your children to ask "why" not just say "I hear and obey."', fr: 'Reformez l\'ecole avant la mosquee. Enseignez a vos enfants a demander "pourquoi" et pas seulement "j\'entends et j\'obeis."' }
    },
    {
      id: 32, cat: 'self', emoji: '🏛️',
      title: { ar: 'نحتفل بأمجاد الماضي ولا نصنع شيئًا في الحاضر', en: 'Muslims Celebrate Past Glories While Doing Nothing in the Present', fr: 'Les musulmans celebrent les gloires passees sans rien faire dans le present' },
      truth: { ar: 'نفتخر بابن سينا وابن رشد والخوارزمي كأن إنجازاتهم إنجازاتنا. نعيش على ذكريات القرون الماضية ونعجز عن إنتاج عالم واحد اليوم يوازيهم.', en: 'We boast about Ibn Sina, Ibn Rushd, and al-Khwarizmi as if their achievements were ours. We live on memories of past centuries while failing to produce a single scientist of their caliber today.', fr: 'Nous nous vantons d\'Ibn Sina, Ibn Rushd et al-Khwarizmi comme si leurs realisations etaient les notres. Nous vivons sur les souvenirs des siecles passes.' },
      bitter: { ar: 'لأن التغني بالماضي لا يكلف جهدًا، أما البناء فيحتاج عملًا حقيقيًا.', en: 'Because singing about the past costs no effort, while building requires real work.', fr: 'Parce que chanter le passe ne coute aucun effort, tandis que construire demande un vrai travail.' },
      cure: { ar: 'اسأل نفسك: ما مساهمتي أنا؟ أمّة المليارين يجب أن تُنتج، لا أن تتفاخر بإنتاج الأموات.', en: 'Ask yourself: what is MY contribution? A nation of two billion must produce, not boast about what the dead accomplished.', fr: 'Demandez-vous : quelle est MA contribution? Une nation de deux milliards doit produire, pas se vanter de ce que les morts ont accompli.' }
    },
    {
      id: 33, cat: 'self', emoji: '📏',
      title: { ar: 'الفجوة بين المثل الإسلامية والواقع المسلم', en: 'The Gap Between Islamic Ideals and Muslim Reality', fr: 'L\'ecart entre les ideaux islamiques et la realite musulmane' },
      truth: { ar: 'الإسلام يأمر بالعدل والعلم والرحمة، وواقع المسلمين مليء بالظلم والجهل والقسوة. هذه الفجوة ليست عيبًا في الدين بل في أتباعه.', en: 'Islam commands justice, knowledge, and mercy, yet Muslim reality is filled with injustice, ignorance, and cruelty. This gap is not a flaw in the religion but in its followers.', fr: 'L\'Islam commande la justice, le savoir et la misericorde, mais la realite musulmane est remplie d\'injustice, d\'ignorance et de cruaute. Cet ecart n\'est pas un defaut de la religion mais de ses adeptes.' },
      bitter: { ar: 'لأن الاعتراف بأننا لا نمثل ديننا حقًا يُسقط القناع عن وجوهنا.', en: 'Because admitting we don\'t truly represent our religion tears the mask off our faces.', fr: 'Parce qu\'admettre que nous ne representons pas vraiment notre religion arrache le masque de nos visages.' },
      cure: { ar: 'كن مسلمًا حقيقيًا لا بالاسم فقط. طبّق القيم قبل أن ترفع الشعارات.', en: 'Be a real Muslim, not just in name. Apply the values before raising the slogans.', fr: 'Soyez un vrai musulman, pas seulement de nom. Appliquez les valeurs avant de brandir les slogans.' }
    },
    // ===== CATEGORY B: WOMEN'S RIGHTS (7) =====
    {
      id: 9, cat: 'women', emoji: '🔗',
      title: { ar: 'قيود المرأة من العادات لا من الإسلام', en: "Women's Restrictions Come from Customs, Not Islam", fr: 'Les restrictions des femmes viennent des coutumes, pas de l\'Islam' },
      truth: { ar: 'كثير من القيود المفروضة على المرأة مصدرها العادات والتقاليد الموروثة، لا النصوص الشرعية. نُلبس عاداتنا ثوب الدين.', en: 'Many restrictions on women come from inherited customs, not religious texts. We dress our customs in the garb of religion.', fr: 'Beaucoup de restrictions sur les femmes viennent des coutumes heritees, pas des textes religieux. Nous habillons nos coutumes du vetement de la religion.' },
      bitter: { ar: 'لأن التفريق بين العادة والدين يحتاج علمًا وشجاعة، وكلاهما نادر.', en: 'Because distinguishing between custom and religion requires knowledge and courage, both of which are rare.', fr: 'Parce que distinguer entre coutume et religion demande du savoir et du courage, tous deux rares.' },
      cure: { ar: 'ارجع إلى القرآن والسنة الصحيحة. المرأة في عهد النبي كانت تتعلم وتعمل وتشارك في الحياة العامة.', en: 'Return to the Quran and authentic Sunnah. Women in the Prophet\'s time learned, worked, and participated in public life.', fr: 'Revenez au Coran et a la Sunna authentique. Les femmes a l\'epoque du Prophete apprenaient, travaillaient et participaient a la vie publique.' }
    },
    {
      id: 10, cat: 'women', emoji: '🎓',
      title: { ar: 'تعليم المرأة ضرورة حضارية', en: "Women's Education Is Essential to Civilization", fr: "L'education des femmes est essentielle a la civilisation" },
      truth: { ar: 'أمة تمنع نصفها من التعلّم تسير بنصف عقل. تعليم المرأة ليس ترفًا بل ضرورة لبقاء الحضارة.', en: 'A nation that prevents half its people from learning walks with half a mind. Educating women is not a luxury but a necessity for civilization\'s survival.', fr: 'Une nation qui empeche la moitie de ses membres d\'apprendre marche avec la moitie d\'un cerveau. L\'education des femmes est une necessite.' },
      bitter: { ar: 'لأن الجاهل يخاف من المتعلمة. يخشى أن يفقد سيطرته الوهمية.', en: 'Because the ignorant fear the educated woman. They fear losing their imaginary control.', fr: 'Parce que l\'ignorant craint la femme eduquee. Il craint de perdre son controle imaginaire.' },
      cure: { ar: 'علّم بناتك كما تعلّم أبناءك. النبي قال: "طلب العلم فريضة" — ولم يستثنِ النساء.', en: 'Educate your daughters as you educate your sons. The Prophet said "Seeking knowledge is obligatory" — he did not exclude women.', fr: 'Eduquez vos filles comme vous eduquez vos fils. Le Prophete a dit "La quete du savoir est obligatoire" — il n\'a pas exclu les femmes.' }
    },
    {
      id: 11, cat: 'women', emoji: '⛓️',
      title: { ar: 'الإسلام حرّر المرأة والمسلمون أعادوا سجنها', en: 'Islam Liberated Women — Muslims Re-Imprisoned Them', fr: "L\'Islam a libere les femmes — les musulmans les ont re-emprisonnees" },
      truth: { ar: 'جاء الإسلام فأعطى المرأة حقوقًا لم تحلم بها أوروبا إلا بعد قرون. ثم جاء المسلمون وسلبوها ما أعطاها الله باسم الله.', en: 'Islam gave women rights that Europe didn\'t dream of for centuries. Then Muslims took away what God gave her — in the name of God.', fr: 'L\'Islam a donne aux femmes des droits dont l\'Europe n\'a reve que des siecles plus tard. Puis les musulmans leur ont enleve ce que Dieu leur a donne — au nom de Dieu.' },
      bitter: { ar: 'لأن المتسلطين يكرهون أن يفقدوا أدوات السيطرة.', en: 'Because the oppressive hate losing their tools of control.', fr: 'Parce que les oppresseurs detestent perdre leurs outils de controle.' },
      cure: { ar: 'ادرس كيف عامل النبي ﷺ النساء. هناك تجد الإسلام الحقيقي، لا في عادات القرى.', en: 'Study how the Prophet treated women. There you\'ll find true Islam, not in village customs.', fr: 'Etudiez comment le Prophete traitait les femmes. La vous trouverez le vrai Islam, pas dans les coutumes des villages.' }
    },
    {
      id: 12, cat: 'women', emoji: '⚖️',
      title: { ar: 'التوازن بين البيت والمجتمع', en: 'The Balance Between Family and Community', fr: "L'equilibre entre famille et communaute" },
      truth: { ar: 'الإسلام لم يحبس المرأة في البيت ولم يطلقها بلا ضوابط. طلب التوازن: بيت مستقر وإسهام في بناء المجتمع.', en: 'Islam neither imprisoned women at home nor released them without guidance. It asked for balance: a stable home and contribution to society.', fr: 'L\'Islam n\'a ni emprisonne les femmes a la maison ni les a liberees sans orientation. Il a demande l\'equilibre : un foyer stable et une contribution a la societe.' },
      bitter: { ar: 'لأن التوازن يحتاج حكمة، والتطرف في أي اتجاه أسهل.', en: 'Because balance requires wisdom, and extremism in either direction is easier.', fr: 'Parce que l\'equilibre demande de la sagesse, et l\'extremisme dans n\'importe quelle direction est plus facile.' },
      cure: { ar: 'لا تجعل البيت سجنًا ولا الشارع فوضى. الحكمة في الوسطية التي علّمنا إياها الإسلام.', en: 'Don\'t make the home a prison or the street chaos. Wisdom lies in the moderation Islam taught us.', fr: 'Ne faites pas de la maison une prison ni de la rue un chaos. La sagesse reside dans la moderation que l\'Islam nous a enseignee.' }
    },
    {
      id: 13, cat: 'women', emoji: '🎪',
      title: { ar: 'التديّن الفاسد سلاح ضد المرأة', en: 'Corrupt Religiosity Weaponized Against Women', fr: 'La religiosite corrompue utilisee contre les femmes' },
      truth: { ar: 'بعض من يدّعون التدين يستخدمون الدين سلاحًا لإذلال المرأة وحرمانها من حقوقها. تدين بلا عدل هو نفاق.', en: 'Some who claim religiosity use religion as a weapon to humiliate women and strip their rights. Religiosity without justice is hypocrisy.', fr: 'Certains qui pretendent etre religieux utilisent la religion comme arme pour humilier les femmes. La religiosite sans justice est de l\'hypocrisie.' },
      bitter: { ar: 'لأن المنافقين يختبئون خلف النصوص ولا يقبلون أن يُكشفوا.', en: 'Because hypocrites hide behind texts and refuse to be exposed.', fr: 'Parce que les hypocrites se cachent derriere les textes et refusent d\'etre devoiles.' },
      cure: { ar: 'التدين الحقيقي يُعرف بثماره: العدل، الرحمة، الاحترام. من يظلم باسم الدين يسيء إلى الدين.', en: 'True religiosity is known by its fruits: justice, mercy, respect. Those who oppress in religion\'s name harm religion itself.', fr: 'La vraie religiosite se reconnait a ses fruits : justice, misericorde, respect. Ceux qui oppriment au nom de la religion nuisent a la religion elle-meme.' }
    },
    // NEW Women's Rights essays (2)
    {
      id: 34, cat: 'women', emoji: '📚',
      title: { ar: 'عالمات الإسلام اللواتي درّسن العلماء', en: 'Women Scholars in Early Islam Who Taught Male Scholars', fr: 'Les savantes de l\'Islam primitif qui enseignaient aux hommes' },
      truth: { ar: 'عائشة رضي الله عنها كانت مرجعًا للصحابة في الفقه. فاطمة السمرقندية أفتت وزوجها يرجع إليها. المسلمون نسوا هذا التاريخ المشرّف وحرموا المرأة من العلم والتعليم.', en: 'Aisha was a reference for the Companions in Islamic law. Fatima al-Samarqandiyya issued fatwas while her husband deferred to her. Muslims forgot this honorable history and deprived women of knowledge and teaching.', fr: 'Aisha etait une reference pour les Compagnons en droit islamique. Fatima al-Samarqandiyya emettait des fatwas tandis que son mari s\'en remettait a elle. Les musulmans ont oublie cette histoire honorable.' },
      bitter: { ar: 'لأن الاعتراف بتفوق المرأة العلمي يهدد من بنى سلطته على جهلها.', en: 'Because acknowledging women\'s scholarly superiority threatens those who built their authority on her ignorance.', fr: 'Parce que reconnaitre la superiorite intellectuelle des femmes menace ceux qui ont bati leur autorite sur leur ignorance.' },
      cure: { ar: 'اقرأ تاريخ المحدّثات والفقيهات. حين عرفت المرأة دينها، لم يجرؤ أحد على ظلمها باسمه.', en: 'Read the history of women hadith scholars and jurists. When women knew their religion, no one dared oppress them in its name.', fr: 'Lisez l\'histoire des femmes specialistes du hadith et des juristes. Quand les femmes connaissaient leur religion, personne n\'osait les opprimer en son nom.' }
    },
    {
      id: 35, cat: 'women', emoji: '🧣',
      title: { ar: 'الفرق بين الحشمة الإسلامية والسجن الثقافي', en: 'The Difference Between Islamic Modesty and Cultural Imprisonment', fr: 'La difference entre la pudeur islamique et l\'emprisonnement culturel' },
      truth: { ar: 'الحشمة في الإسلام كرامة وحرية اختيار. لكن بعض الثقافات حوّلتها إلى أداة قمع وإذلال. الفرق بين الحجاب الطوعي والسجن الثقافي كالفرق بين السماء والأرض.', en: 'Modesty in Islam is dignity and freedom of choice. But some cultures turned it into a tool of oppression and humiliation. The difference between voluntary hijab and cultural imprisonment is like the difference between heaven and earth.', fr: 'La pudeur en Islam est dignite et liberte de choix. Mais certaines cultures l\'ont transformee en outil d\'oppression. La difference entre le hijab volontaire et l\'emprisonnement culturel est comme la difference entre le ciel et la terre.' },
      bitter: { ar: 'لأن التفريق بين حكم الله وعادات البشر يحتاج شجاعة تغيب عن كثير من العلماء أنفسهم.', en: 'Because distinguishing between God\'s command and human customs requires courage that even many scholars lack.', fr: 'Parce que distinguer entre le commandement de Dieu et les coutumes humaines demande un courage que meme beaucoup de savants n\'ont pas.' },
      cure: { ar: 'اسأل: هل هذا من الدين أم من ثقافتي؟ الحشمة لا تعني الإلغاء. المرأة المحتشمة يمكن أن تكون عالمة وقائدة ومؤثرة.', en: 'Ask: is this from religion or from my culture? Modesty does not mean erasure. A modest woman can be a scholar, a leader, and an influencer.', fr: 'Demandez-vous : est-ce de la religion ou de ma culture? La pudeur ne signifie pas l\'effacement. Une femme pudique peut etre savante, leader et influente.' }
    },
    // ===== CATEGORY C: POLITICAL TRUTHS (7) =====
    {
      id: 14, cat: 'political', emoji: '👑',
      title: { ar: 'الاستبداد قاتل الإسلام', en: 'Despotism Is the Killer of Islam', fr: "Le despotisme est le tueur de l'Islam" },
      truth: { ar: 'الاستبداد السياسي هو أخطر ما واجه المسلمين. حين يُكمّم الفم ويُقيّد العقل، يموت الإسلام في القلوب قبل المساجد.', en: 'Political despotism is the greatest danger Muslims have faced. When mouths are muzzled and minds are chained, Islam dies in hearts before mosques.', fr: 'Le despotisme politique est le plus grand danger que les musulmans aient affronte. Quand les bouches sont muselees, l\'Islam meurt dans les coeurs avant les mosquees.' },
      bitter: { ar: 'لأن المستبد يُقنع الناس أن طاعته من طاعة الله.', en: 'Because the despot convinces people that obeying him is obeying God.', fr: 'Parce que le despote convainc les gens que lui obeir, c\'est obeir a Dieu.' },
      cure: { ar: 'لا طاعة لمخلوق في معصية الخالق. الإسلام دين شورى لا استبداد.', en: 'No obedience to a creature in disobedience to the Creator. Islam is a religion of consultation, not tyranny.', fr: 'Pas d\'obeissance a une creature dans la desobeissance au Createur. L\'Islam est une religion de consultation, pas de tyrannie.' }
    },
    {
      id: 15, cat: 'political', emoji: '🎪',
      title: { ar: 'الحكّام يُلهون الناس بالتوافه', en: 'Rulers Distract Masses with Trivial Events', fr: 'Les dirigeants distraient les masses avec des futilites' },
      truth: { ar: 'حين يعجز الحاكم عن تقديم إنجاز حقيقي، يصنع أحداثًا تافهة ليُلهي الناس عن مشاكلهم الحقيقية. والناس يقبلون اللهو.', en: 'When a ruler fails to deliver real achievements, they manufacture trivial events to distract people from real problems. And the people accept the entertainment.', fr: 'Quand un dirigeant echoue a fournir de vrais accomplissements, il fabrique des evenements futiles pour distraire les gens. Et les gens acceptent le divertissement.' },
      bitter: { ar: 'لأن الإلهاء ممتع والحقيقة مؤلمة.', en: 'Because entertainment is pleasant and truth is painful.', fr: 'Parce que le divertissement est plaisant et la verite est douloureuse.' },
      cure: { ar: 'لا تنشغل بما يريدك الحاكم أن تنشغل به. اسأل: أين التعليم؟ أين العدل؟ أين الحرية؟', en: 'Don\'t busy yourself with what rulers want you busy with. Ask: Where is education? Justice? Freedom?', fr: 'Ne vous occupez pas de ce que les dirigeants veulent que vous vous occupiez. Demandez : ou est l\'education? La justice? La liberte?' }
    },
    {
      id: 16, cat: 'political', emoji: '⚔️',
      title: { ar: 'الطغيان الديني أخطر من العلماني', en: 'Religious Tyranny Is More Dangerous Than Secular', fr: 'La tyrannie religieuse est plus dangereuse que la laique' },
      truth: { ar: 'الطاغية العلماني يمكن كشفه ومقاومته. أما من يطغى باسم الدين فيجعل مقاومته كفرًا في نظر الناس.', en: 'A secular tyrant can be exposed and resisted. But one who tyrannizes in religion\'s name makes resistance seem like disbelief.', fr: 'Un tyran laique peut etre expose et combattu. Mais celui qui tyrannise au nom de la religion fait de la resistance une mecreance.' },
      bitter: { ar: 'لأن خلط الدين بالسلطة يجعل نقد الحاكم نقدًا للدين.', en: 'Because mixing religion with power makes criticizing the ruler seem like criticizing religion.', fr: 'Parce que melanger religion et pouvoir fait que critiquer le dirigeant semble critiquer la religion.' },
      cure: { ar: 'افصل بين كلام الله وكلام من يدّعي تمثيله. لا أحد فوق المساءلة في الإسلام.', en: 'Separate God\'s word from those who claim to represent Him. No one is above accountability in Islam.', fr: 'Separez la parole de Dieu de ceux qui pretendent Le representer. Personne n\'est au-dessus de la responsabilite en Islam.' }
    },
    {
      id: 17, cat: 'political', emoji: '🤝',
      title: { ar: 'الشورى ليست اختيارية', en: "Shura Is Not Optional", fr: "La Choura n'est pas optionnelle" },
      truth: { ar: 'الشورى في الإسلام ليست نصيحة يأخذها الحاكم إن شاء. إنها نظام حكم كامل. أمرهم شورى بينهم — هذا أمر لا اقتراح.', en: 'Shura (consultation) in Islam is not advice a ruler takes if they wish. It is a complete system of governance. "Their affairs are conducted by mutual consultation" — this is a command, not a suggestion.', fr: 'La Choura en Islam n\'est pas un conseil que le dirigeant prend s\'il le souhaite. C\'est un systeme de gouvernance complet.' },
      bitter: { ar: 'لأن من يملك السلطة لا يريد مشاركتها.', en: 'Because those who hold power don\'t want to share it.', fr: 'Parce que ceux qui detiennent le pouvoir ne veulent pas le partager.' },
      cure: { ar: 'طالب بحقك في المشاركة. الشورى بدأت من البيت والحي قبل القصر.', en: 'Demand your right to participate. Shura starts from the home and neighborhood before the palace.', fr: 'Exigez votre droit de participer. La Choura commence a la maison et dans le quartier avant le palais.' }
    },
    {
      id: 18, cat: 'political', emoji: '🕊️',
      title: { ar: 'الحرية شرط الحضارة', en: 'Freedom Is the Prerequisite for Civilization', fr: 'La liberte est le prealable de la civilisation' },
      truth: { ar: 'لا حضارة بلا حرية. العبد لا يبدع ولا يبتكر ولا يبني. المجتمع المقموع ينتج خوفًا لا علمًا.', en: 'No civilization without freedom. A slave cannot create, innovate, or build. An oppressed society produces fear, not knowledge.', fr: 'Pas de civilisation sans liberte. Un esclave ne peut ni creer, ni innover, ni construire. Une societe opprimee produit de la peur, pas du savoir.' },
      bitter: { ar: 'لأن الحرية تعني المسؤولية، والكثيرون يفضلون العبودية المريحة.', en: 'Because freedom means responsibility, and many prefer comfortable slavery.', fr: 'Parce que la liberte signifie la responsabilite, et beaucoup preferent l\'esclavage confortable.' },
      cure: { ar: 'حرّر عقلك أولًا. اقرأ، فكّر، اسأل. الحرية تبدأ من الداخل.', en: 'Free your mind first. Read, think, question. Freedom starts from within.', fr: 'Liberez votre esprit d\'abord. Lisez, pensez, questionnez. La liberte commence de l\'interieur.' }
    },
    // NEW Political essays (2)
    {
      id: 36, cat: 'political', emoji: '🏰',
      title: { ar: 'وهم الحكم الإسلامي بلا عدل حقيقي', en: 'The Illusion of Islamic Governance Without Actual Justice', fr: 'L\'illusion de la gouvernance islamique sans justice reelle' },
      truth: { ar: 'كثير من الأنظمة ترفع شعار "الحكم بالشريعة" وهي أبعد ما تكون عن العدل. يطبقون الحدود على الضعفاء ويعفون الأقوياء. هذا ليس حكمًا إسلاميًا بل استبدادًا بقناع ديني.', en: 'Many regimes raise the banner of "ruling by Sharia" while being the furthest from justice. They apply punishments on the weak and exempt the powerful. This is not Islamic governance but despotism wearing a religious mask.', fr: 'De nombreux regimes brandissent la banniere de "gouverner par la Charia" tout en etant les plus eloignes de la justice. Ils appliquent les punitions aux faibles et exemptent les puissants.' },
      bitter: { ar: 'لأن فضح هذا الوهم يعني مواجهة أنظمة تملك القوة والسلاح والإعلام.', en: 'Because exposing this illusion means confronting systems that hold power, weapons, and media.', fr: 'Parce que denoncer cette illusion signifie affronter des systemes qui detiennent le pouvoir, les armes et les medias.' },
      cure: { ar: 'الحكم الإسلامي الحقيقي يُعرف بالعدل لا بالشعارات. عمر بن الخطاب حكم بالعدل فعلًا لا قولًا.', en: 'True Islamic governance is known by justice, not slogans. Umar ibn al-Khattab ruled with actual justice, not words.', fr: 'La vraie gouvernance islamique se reconnait par la justice, pas par les slogans. Umar ibn al-Khattab a gouverne avec une justice reelle.' }
    },
    {
      id: 37, cat: 'political', emoji: '🦠',
      title: { ar: 'كيف أصبح الفساد طبيعيًا في مجتمعاتنا', en: 'How Corruption Became Normalized in Muslim Societies', fr: 'Comment la corruption est devenue normale dans les societes musulmanes' },
      truth: { ar: 'الفساد لم يعد استثناءً بل صار قاعدة. الرشوة أصبحت "إكرامية"، والمحسوبية صارت "واجب القرابة". حين تتعود الأمة على الفساد تفقد القدرة على التمييز بين الحلال والحرام.', en: 'Corruption is no longer the exception but the rule. Bribery became "tips," nepotism became "family duty." When a nation normalizes corruption, it loses the ability to distinguish halal from haram.', fr: 'La corruption n\'est plus l\'exception mais la regle. Le pot-de-vin est devenu un "pourboire", le nepotisme est devenu le "devoir familial." Quand une nation normalise la corruption, elle perd la capacite de distinguer le halal du haram.' },
      bitter: { ar: 'لأن محاربة الفساد تعني مواجهة شبكات مصالح ضخمة لا أحد يريد إزعاجها.', en: 'Because fighting corruption means confronting massive interest networks that no one wants to disturb.', fr: 'Parce que combattre la corruption signifie affronter d\'enormes reseaux d\'interets que personne ne veut deranger.' },
      cure: { ar: 'كن نظيف اليد ولو كنت وحدك. إصلاح المجتمع يبدأ من إصلاح الفرد. قل الحق ولو على نفسك.', en: 'Keep your hands clean even if you\'re alone. Reforming society starts with reforming the individual. Speak the truth even against yourself.', fr: 'Gardez les mains propres meme si vous etes seul. Reformer la societe commence par reformer l\'individu.' }
    },
    // ===== CATEGORY D: KNOWLEDGE & FAITH (7) =====
    {
      id: 19, cat: 'knowledge', emoji: '🔬',
      title: { ar: 'العلماء يتشاغلون بالفروع والأمة تنزف', en: 'Scholars Obsess Over Trivia While Muslims Suffer', fr: 'Les savants s\'obsedent des details pendant que les musulmans souffrent' },
      truth: { ar: 'يقضي بعض العلماء سنوات في مسائل فقهية جزئية بينما الأمة تعاني من الجهل والفقر والاستبداد. فقه الأولويات مفقود.', en: 'Some scholars spend years on minor juristic issues while the Ummah suffers from ignorance, poverty, and tyranny. The understanding of priorities is missing.', fr: 'Certains savants passent des annees sur des questions juridiques mineures tandis que la Oumma souffre de l\'ignorance, de la pauvrete et de la tyrannie.' },
      bitter: { ar: 'لأن الخلاف في الفروع أسهل من مواجهة المشاكل الكبرى.', en: 'Because disagreeing on minor issues is easier than confronting major problems.', fr: 'Parce que les desaccords sur les details sont plus faciles que d\'affronter les grands problemes.' },
      cure: { ar: 'فقه الأولويات: ما ينفع الأمة اليوم أَوْلى. علّم الناس كيف يعيشون بكرامة.', en: 'Prioritize what benefits the Ummah today. Teach people how to live with dignity.', fr: 'Priorisez ce qui beneficie a la Oumma aujourd\'hui. Enseignez aux gens a vivre dans la dignite.' }
    },
    {
      id: 20, cat: 'knowledge', emoji: '🩸',
      title: { ar: 'فقر الثقافة الدينية كفقر الدم', en: 'The Poverty of Religious Culture Is Like Anemia', fr: 'La pauvrete de la culture religieuse est comme l\'anemie' },
      truth: { ar: 'أمة ثقافتها الدينية فقيرة كمريض فقر الدم — يبدو حيًا لكنه ضعيف عاجز عن الحركة الحقيقية.', en: 'A nation with poor religious culture is like an anemia patient — appears alive but is too weak for real movement.', fr: 'Une nation a la culture religieuse pauvre est comme un patient anemique — elle semble vivante mais est trop faible pour un vrai mouvement.' },
      bitter: { ar: 'لأن الثقافة السطحية تُرضي الكسالى وتخدع الجهلة.', en: 'Because superficial culture satisfies the lazy and deceives the ignorant.', fr: 'Parce que la culture superficielle satisfait les paresseux et trompe les ignorants.' },
      cure: { ar: 'اقرأ القرآن بتدبر لا بتلاوة ميكانيكية. افهم مقاصد الشريعة لا مجرد أحكامها.', en: 'Read the Quran with reflection, not mechanical recitation. Understand the goals of Islamic law, not just its rulings.', fr: 'Lisez le Coran avec reflexion, pas par recitation mecanique. Comprenez les objectifs de la loi islamique, pas seulement ses regles.' }
    },
    {
      id: 21, cat: 'knowledge', emoji: '🔄',
      title: { ar: 'التقليد الأعمى ضد الفهم الحقيقي', en: 'Rigid Imitation vs. Genuine Understanding', fr: 'L\'imitation rigide contre la comprehension veritable' },
      truth: { ar: 'التقليد الأعمى للماضي قتل الإبداع في الأمة. الإسلام يريد عقولًا تفكر لا عقولًا تنسخ. اتباع الدليل أولى من اتباع الأشخاص.', en: 'Blind imitation of the past killed creativity in the Ummah. Islam wants thinking minds, not copying ones. Following evidence is better than following personalities.', fr: 'L\'imitation aveugle du passe a tue la creativite dans la Oumma. L\'Islam veut des esprits qui pensent, pas qui copient.' },
      bitter: { ar: 'لأن التفكير المستقل يحتاج شجاعة، والتقليد مريح.', en: 'Because independent thinking requires courage, and imitation is comfortable.', fr: 'Parce que la pensee independante demande du courage, et l\'imitation est confortable.' },
      cure: { ar: 'احترم العلماء لكن لا تؤلههم. اسأل عن الدليل. التقوى في اتباع الحق لا في اتباع الأشخاص.', en: 'Respect scholars but don\'t deify them. Ask for evidence. Piety is in following truth, not following people.', fr: 'Respectez les savants mais ne les deifiez pas. Demandez des preuves. La piete est de suivre la verite, pas les personnes.' }
    },
    {
      id: 22, cat: 'knowledge', emoji: '🌱',
      title: { ar: 'الإسلام دين الفطرة', en: 'Islam Is the Religion of Fitrah', fr: 'L\'Islam est la religion de la Fitrah' },
      truth: { ar: 'الإسلام يتوافق مع الفطرة السليمة. لكننا شوّهناه بتشددات جعلته يبدو غريبًا حتى على المسلمين أنفسهم.', en: 'Islam aligns with natural human disposition (fitrah). But we\'ve distorted it with rigidity until it seems alien even to Muslims themselves.', fr: 'L\'Islam s\'aligne avec la disposition humaine naturelle (fitrah). Mais nous l\'avons deforme avec de la rigidite jusqu\'a ce qu\'il semble etranger meme aux musulmans eux-memes.' },
      bitter: { ar: 'لأن التشدد يعطي إحساسًا زائفًا بالتقوى.', en: 'Because rigidity gives a false sense of piety.', fr: 'Parce que la rigidite donne un faux sentiment de piete.' },
      cure: { ar: 'الإسلام يسر لا عسر. النبي ما خُيّر بين أمرين إلا اختار أيسرهما.', en: 'Islam is ease, not hardship. The Prophet, whenever given two choices, chose the easier one.', fr: 'L\'Islam est facilite, pas difficulte. Le Prophete, chaque fois qu\'il avait deux choix, choisissait le plus facile.' }
    },
    {
      id: 23, cat: 'knowledge', emoji: '🤲',
      title: { ar: 'رحمة عمر بأهل الذمة قدوة', en: "Umar's Mercy Toward Minorities as a Model", fr: "La misericorde d'Umar envers les minorites comme modele" },
      truth: { ar: 'عمر بن الخطاب أعطى أهل الذمة حقوقًا كاملة وحمى أرواحهم وأموالهم. هذا هو الإسلام في أبهى صوره — عدل مع الجميع.', en: 'Umar ibn al-Khattab gave religious minorities full rights and protected their lives and property. This is Islam at its finest — justice for all.', fr: 'Umar ibn al-Khattab a donne aux minorites religieuses des droits complets et a protege leurs vies et proprietes. C\'est l\'Islam a son meilleur — la justice pour tous.' },
      bitter: { ar: 'لأن بعض المسلمين اليوم يتعاملون مع غير المسلمين بفوقية لا علاقة لها بالإسلام.', en: 'Because some Muslims today treat non-Muslims with superiority that has nothing to do with Islam.', fr: 'Parce que certains musulmans aujourd\'hui traitent les non-musulmans avec une superiorite qui n\'a rien a voir avec l\'Islam.' },
      cure: { ar: 'تعلّم من عمر: العدل لا يعرف دينًا ولا جنسية. حقوق الإنسان في الإسلام لكل إنسان.', en: 'Learn from Umar: justice knows no religion or nationality. Human rights in Islam are for every human.', fr: 'Apprenez d\'Umar : la justice ne connait ni religion ni nationalite. Les droits de l\'homme en Islam sont pour tout humain.' }
    },
    // NEW Knowledge & Faith essays (2)
    {
      id: 38, cat: 'knowledge', emoji: '📜',
      title: { ar: 'خطورة استخدام الحديث خارج سياقه', en: 'The Danger of Using Hadith Out of Context', fr: 'Le danger d\'utiliser le hadith hors contexte' },
      truth: { ar: 'يأخذ البعض حديثًا واحدًا فيبني عليه حكمًا كاملًا متجاهلًا عشرات الأحاديث الأخرى ومقاصد الشريعة. هذا ليس علمًا بل جهل مقنّع بالعلم.', en: 'Some take a single hadith and build an entire ruling on it, ignoring dozens of other hadiths and the objectives of Sharia. This is not knowledge but ignorance disguised as scholarship.', fr: 'Certains prennent un seul hadith et construisent une regle entiere dessus, ignorant des dizaines d\'autres hadiths et les objectifs de la Charia. Ce n\'est pas du savoir mais de l\'ignorance deguisee en erudition.' },
      bitter: { ar: 'لأن البتر أسهل من الفهم الشامل. ومن يبتر النصوص يستطيع تبرير أي شيء.', en: 'Because cherry-picking is easier than comprehensive understanding. And whoever cherry-picks texts can justify anything.', fr: 'Parce que choisir selectivement est plus facile que la comprehension globale. Et quiconque choisit selectivement les textes peut tout justifier.' },
      cure: { ar: 'اقرأ الحديث في سياقه الكامل. افهم لمن قيل ومتى ولماذا. الفقيه يجمع النصوص ولا يبترها.', en: 'Read hadith in its full context. Understand who it was said to, when, and why. A true scholar gathers texts, not fragments.', fr: 'Lisez le hadith dans son contexte complet. Comprenez a qui il a ete dit, quand et pourquoi. Un vrai savant rassemble les textes, pas les fragments.' }
    },
    {
      id: 39, cat: 'knowledge', emoji: '🧪',
      title: { ar: 'لماذا يخاف المسلمون من الفلسفة والتفكير النقدي', en: 'Why Muslims Fear Philosophy and Critical Thinking', fr: 'Pourquoi les musulmans craignent la philosophie et la pensee critique' },
      truth: { ar: 'حين أغلق المسلمون باب الفلسفة والتفكير النقدي، أغلقوا باب التقدم. الخوف من السؤال ليس إيمانًا بل ضعف في اليقين.', en: 'When Muslims closed the door to philosophy and critical thinking, they closed the door to progress. Fear of questioning is not faith but weakness of conviction.', fr: 'Quand les musulmans ont ferme la porte a la philosophie et a la pensee critique, ils ont ferme la porte au progres. La peur de questionner n\'est pas de la foi mais une faiblesse de conviction.' },
      bitter: { ar: 'لأن التفكير النقدي يهدد من بنى سلطته على طاعة بلا سؤال.', en: 'Because critical thinking threatens those who built their authority on obedience without questioning.', fr: 'Parce que la pensee critique menace ceux qui ont bati leur autorite sur l\'obeissance sans questionnement.' },
      cure: { ar: 'القرآن نفسه يأمر بالتفكر والتدبر. "أفلا يتدبرون" — التفكير عبادة في الإسلام، لا جريمة.', en: 'The Quran itself commands reflection and contemplation. "Do they not reflect?" — Thinking is worship in Islam, not a crime.', fr: 'Le Coran lui-meme commande la reflexion et la contemplation. "Ne reflechissent-ils pas?" — Penser est une adoration en Islam, pas un crime.' }
    },
    // ===== CATEGORY E: COURAGE & HONESTY (8) =====
    {
      id: 24, cat: 'courage', emoji: '🏠',
      title: { ar: 'حين يجبن صاحب البيت يضيع البيت', en: 'When the Homeowner Is Cowardly, the House Is Lost', fr: 'Quand le proprietaire est lache, la maison est perdue' },
      truth: { ar: 'لا تلم اللص إذا كان صاحب الدار نائمًا. أمة تنام عن حقوقها لا تستحق أن تشتكي من سرقتها.', en: 'Don\'t blame the thief if the homeowner is asleep. A nation that sleeps on its rights doesn\'t deserve to complain about being robbed.', fr: 'N\'accusez pas le voleur si le proprietaire dort. Une nation qui dort sur ses droits ne merite pas de se plaindre d\'etre volee.' },
      bitter: { ar: 'لأن اليقظة تحتاج تعبًا والنوم مريح.', en: 'Because vigilance requires effort and sleep is comfortable.', fr: 'Parce que la vigilance demande de l\'effort et le sommeil est confortable.' },
      cure: { ar: 'استيقظ. احرس بيتك بالعلم والعمل والمشاركة. لا أحد سيحرس بيتك عنك.', en: 'Wake up. Guard your house with knowledge, work, and participation. No one will guard your house for you.', fr: 'Reveillez-vous. Gardez votre maison par le savoir, le travail et la participation. Personne ne gardera votre maison pour vous.' }
    },
    {
      id: 25, cat: 'courage', emoji: '💰',
      title: { ar: 'المال لا يحدد المكانة عند الله', en: "Material Wealth Doesn't Determine Standing Before God", fr: 'La richesse ne determine pas le statut devant Dieu' },
      truth: { ar: 'نقيس الناس بأموالهم ومناصبهم، والله يقيسهم بتقواهم وأعمالهم. خلطنا معايير الدنيا بمعايير الآخرة.', en: 'We measure people by their wealth and positions, while God measures them by their piety and deeds. We\'ve confused worldly standards with divine ones.', fr: 'Nous mesurons les gens par leur richesse et leurs postes, tandis que Dieu les mesure par leur piete et leurs actes.' },
      bitter: { ar: 'لأن المال ملموس والتقوى خفية. نفضّل ما نراه على ما لا نراه.', en: 'Because money is tangible and piety is hidden. We prefer what we see over what we don\'t.', fr: 'Parce que l\'argent est tangible et la piete est cachee. Nous preferons ce que nous voyons.' },
      cure: { ar: 'قيّم نفسك بمقياس الآخرة: هل أنت عادل؟ صادق؟ نافع للناس؟', en: 'Evaluate yourself by the Hereafter\'s scale: Are you just? Honest? Useful to others?', fr: 'Evaluez-vous par l\'echelle de l\'Au-dela : etes-vous juste? Honnete? Utile aux autres?' }
    },
    {
      id: 26, cat: 'courage', emoji: '🎭',
      title: { ar: 'الفجوة بين ما نعظ وما نفعل', en: 'The Gap Between What We Preach and What We Practice', fr: 'L\'ecart entre ce que nous prechons et ce que nous pratiquons' },
      truth: { ar: 'نعظ الناس بأخلاق لا نلتزم بها. نأمر بالصدق ونكذب، ندعو للعدل ونظلم. كبر مقتًا عند الله أن تقولوا ما لا تفعلون.', en: 'We preach morals we don\'t follow. We command honesty and lie, call for justice and oppress.', fr: 'Nous prechons des morales que nous ne suivons pas. Nous commandons l\'honnetete et mentons, appelons a la justice et opprimons.' },
      bitter: { ar: 'لأن الوعظ سهل والالتزام صعب.', en: 'Because preaching is easy and commitment is hard.', fr: 'Parce que precher est facile et s\'engager est difficile.' },
      cure: { ar: 'كن قدوة صامتة. فعل واحد أبلغ من ألف خطبة.', en: 'Be a silent role model. One action speaks louder than a thousand sermons.', fr: 'Soyez un modele silencieux. Une action parle plus fort que mille sermons.' }
    },
    {
      id: 27, cat: 'courage', emoji: '🤥',
      title: { ar: 'خداع الذات: الإنسان بارع في اختلاق الأعذار', en: 'Self-Deception: Humans Excel at Making Excuses', fr: "L'auto-tromperie : l'humain excelle a trouver des excuses" },
      truth: { ar: 'أبرع ما يفعله الإنسان هو خداع نفسه. يصنع أعذارًا أنيقة لتبرير كسله وجبنه وأنانيته.', en: 'The thing humans do best is deceive themselves. They craft elegant excuses to justify their laziness, cowardice, and selfishness.', fr: 'Ce que les humains font le mieux, c\'est se tromper eux-memes. Ils fabriquent des excuses elegantes pour justifier leur paresse, leur lachete et leur egoisme.' },
      bitter: { ar: 'لأن مواجهة الحقيقة مؤلمة، والأعذار مسكنات رخيصة.', en: 'Because facing truth is painful, and excuses are cheap painkillers.', fr: 'Parce qu\'affronter la verite est douloureux, et les excuses sont des analgesiques bon marche.' },
      cure: { ar: 'حاسب نفسك قبل أن تُحاسب. اسأل: هل أنا صادق مع نفسي أم أكذب عليها؟', en: 'Hold yourself accountable before you are held accountable. Ask: Am I honest with myself or lying to myself?', fr: 'Rendez-vous des comptes avant d\'en rendre. Demandez-vous : suis-je honnete avec moi-meme ou est-ce que je me mens?' }
    },
    {
      id: 28, cat: 'courage', emoji: '💊',
      title: { ar: 'الحقيقة المرة خير من الكذبة الحلوة', en: 'The Bitter Truth Is Better Than a Sweet Lie', fr: 'La verite amere vaut mieux qu\'un doux mensonge' },
      truth: { ar: 'نفضّل من يكذب علينا بلطف على من يصدقنا بقسوة. لكن الطبيب الصادق ينقذك والكاذب يقتلك.', en: 'We prefer those who lie to us gently over those who tell us the truth harshly. But an honest doctor saves you while a lying one kills you.', fr: 'Nous preferons ceux qui nous mentent gentiment a ceux qui nous disent la verite durement. Mais un medecin honnete vous sauve, un menteur vous tue.' },
      bitter: { ar: 'لأن الحقيقة تجرح الكبرياء، والكذبة تداعبه.', en: 'Because truth wounds pride, while lies caress it.', fr: 'Parce que la verite blesse la fierte, tandis que les mensonges la caressent.' },
      cure: { ar: 'تقبّل النقد البنّاء. ابحث عن من يصدقك لا من يجاملك. هذا الكتاب نفسه حقيقة مرة.', en: 'Accept constructive criticism. Seek those who are honest with you, not those who flatter you. This very book is a bitter truth.', fr: 'Acceptez la critique constructive. Cherchez ceux qui sont honnetes avec vous, pas ceux qui vous flattent.' }
    },
    {
      id: 29, cat: 'courage', emoji: '🔧',
      title: { ar: 'الإصلاح الحقيقي يبدأ من الداخل', en: 'True Reform Starts from Within', fr: 'La vraie reforme commence de l\'interieur' },
      truth: { ar: 'لا إصلاح حقيقي بتغيير القوانين فقط. الإصلاح يبدأ من تغيير النفوس والعقول والقلوب. إن الله لا يغيّر ما بقوم حتى يغيّروا ما بأنفسهم.', en: 'No real reform comes from changing laws alone. Reform starts with changing souls, minds, and hearts.', fr: 'Aucune vraie reforme ne vient du seul changement des lois. La reforme commence par changer les ames, les esprits et les coeurs.' },
      bitter: { ar: 'لأن تغيير النفس أصعب مشروع يمكن أن يقوم به الإنسان.', en: 'Because changing oneself is the hardest project a person can undertake.', fr: 'Parce que se changer soi-meme est le projet le plus difficile qu\'une personne puisse entreprendre.' },
      cure: { ar: 'غيّر شيئًا واحدًا في نفسك اليوم. صغيرًا كان أو كبيرًا. كل رحلة تبدأ بخطوة.', en: 'Change one thing in yourself today. Small or large. Every journey starts with a step.', fr: 'Changez une chose en vous aujourd\'hui. Petite ou grande. Chaque voyage commence par un pas.' }
    },
    {
      id: 30, cat: 'courage', emoji: '🌅',
      title: { ar: 'رسالة الغزالي الأخيرة', en: "Al-Ghazali's Final Message", fr: 'Le dernier message d\'al-Ghazali' },
      truth: { ar: 'كتب الغزالي مقدمة الجزء الأخير وهو يعلم أن الأجل قريب. رسالته الأخيرة: لا تيأسوا. الحق لا يموت وإن تأخر نصره. هذه الأمة فيها خير كثير لكنها تحتاج من يوقظها.', en: 'Al-Ghazali wrote the final volume\'s preface knowing the end was near. His last message: Don\'t despair. Truth doesn\'t die even if its victory is delayed. This nation has much goodness but needs someone to awaken it.', fr: 'Al-Ghazali a ecrit la preface du dernier volume sachant que la fin etait proche. Son dernier message : ne desesperez pas. La verite ne meurt pas meme si sa victoire est retardee.' },
      bitter: { ar: 'لأنه رحل قبل أن يرى التغيير الذي حلم به. لكن الكلمة الصادقة لا تموت.', en: 'Because he left before seeing the change he dreamed of. But honest words never die.', fr: 'Parce qu\'il est parti avant de voir le changement dont il revait. Mais les mots honnetes ne meurent jamais.' },
      cure: { ar: 'كن أنت التغيير. اقرأ، تعلّم، أصلح نفسك، ثم أصلح من حولك. رسالة الغزالي لم تنتهِ بموته — بل بدأت.', en: 'Be the change. Read, learn, fix yourself, then fix those around you. Al-Ghazali\'s message didn\'t end with his death — it began.', fr: 'Soyez le changement. Lisez, apprenez, reformez-vous, puis reformez ceux autour de vous. Le message d\'al-Ghazali n\'a pas fini avec sa mort — il a commence.' }
    },
    // NEW Courage essay (1)
    {
      id: 40, cat: 'courage', emoji: '🛡️',
      title: { ar: 'رد الغزالي على من هاجموا كتابه عن السنة', en: "Al-Ghazali's Response to Those Who Attacked His Book on the Sunnah", fr: 'La reponse d\'al-Ghazali a ceux qui ont attaque son livre sur la Sunna' },
      truth: { ar: 'حين نشر كتاب "السنة النبوية بين أهل الفقه وأهل الحديث" هاجمه سبعة علماء سعوديين بسبعة كتب. لم يتراجع. قال: أنا لم أنكر السنة بل أنكرت سوء فهمها. الجبان يتراجع عند أول هجوم، والشجاع يثبت على ما يعتقد أنه الحق.', en: 'When he published "The Prophetic Sunnah Between the People of Fiqh and Hadith," seven Saudi scholars attacked him with seven response books. He did not back down. He said: I did not deny the Sunnah, I denied its misunderstanding. A coward retreats at the first attack; the brave stand firm on what they believe is truth.', fr: 'Quand il a publie "La Sunna prophetique entre les gens du Fiqh et du Hadith," sept savants saoudiens l\'ont attaque avec sept livres de reponse. Il n\'a pas recule. Il a dit : je n\'ai pas nie la Sunna, j\'ai nie sa mauvaise comprehension.' },
      bitter: { ar: 'لأن من يقف وحده أمام مؤسسة دينية بأكملها يحتاج شجاعة نادرة وإيمانًا عميقًا بالحق.', en: 'Because standing alone against an entire religious establishment requires rare courage and deep faith in truth.', fr: 'Parce que se dresser seul contre tout un etablissement religieux demande un courage rare et une foi profonde en la verite.' },
      cure: { ar: 'لا تخف من قول الحق. إذا كنت على بيّنة من ربك فلا تبالِ بمن يهاجمك. الحق لا يحتاج أغلبية ليكون حقًا.', en: 'Don\'t fear speaking truth. If you have clear evidence from your Lord, don\'t worry about attackers. Truth doesn\'t need a majority to be truth.', fr: 'N\'ayez pas peur de dire la verite. Si vous avez des preuves claires de votre Seigneur, ne vous souciez pas des attaquants. La verite n\'a pas besoin d\'une majorite pour etre vraie.' }
    }
  ];

  /* ===================== IMPACT QUOTES DATA ===================== */
  const impactQuotes = [
    { ar: 'هزائمنا ليست بسبب قوة الأعداء بل بسبب ضعفنا نحن', en: 'Our defeats are not caused by the strength of enemies but by our own weakness', fr: 'Nos defaites ne sont pas causees par la force des ennemis mais par notre propre faiblesse' },
    { ar: 'أمة تمنع نصفها من التعلم تسير بنصف عقل', en: 'A nation that prevents half its people from learning walks with half a mind', fr: 'Une nation qui empeche la moitie de ses membres d\'apprendre marche avec la moitie d\'un cerveau' },
    { ar: 'الاستبداد يقتل الإسلام في القلوب قبل المساجد', en: 'Despotism kills Islam in hearts before mosques', fr: 'Le despotisme tue l\'Islam dans les coeurs avant les mosquees' },
    { ar: 'الطبيب الصادق ينقذك والكاذب يقتلك', en: 'An honest doctor saves you, a lying one kills you', fr: 'Un medecin honnete vous sauve, un menteur vous tue' },
    { ar: 'التخلف العلمي ليس قدرًا بل ذنب عظيم', en: 'Scientific backwardness is not fate but a great sin', fr: 'Le retard scientifique n\'est pas une fatalite mais un grand peche' },
    { ar: 'من يطغى باسم الدين يجعل مقاومته كفرًا', en: 'Those who tyrannize in religion\'s name make resistance seem like disbelief', fr: 'Ceux qui tyrannisent au nom de la religion font de la resistance une mecreance' },
    { ar: 'ننسخ القشرة من الغرب ونترك اللب', en: 'We copy the shell from the West and leave the core', fr: 'Nous copions la coquille de l\'Occident et laissons le noyau' },
    { ar: 'المرآة أصدق من النافذة', en: 'The mirror is more honest than the window', fr: 'Le miroir est plus honnete que la fenetre' },
    { ar: 'الحق لا يموت وإن تأخر نصره', en: 'Truth does not die even if its victory is delayed', fr: 'La verite ne meurt pas meme si sa victoire est retardee' },
    { ar: 'غيّر شيئًا واحدًا في نفسك اليوم — كل رحلة تبدأ بخطوة', en: 'Change one thing in yourself today — every journey starts with a step', fr: 'Changez une chose en vous aujourd\'hui — chaque voyage commence par un pas' }
  ];

  /* ===================== TIMELINE DATA (EXPANDED) ===================== */
  const timelineData = [
    { year: '1917', text: { ar: 'ولد في قرية نكلا العنب، محافظة البحيرة، مصر', en: 'Born in Nikla al-Inab, Beheira Governorate, Egypt', fr: 'Ne a Nikla al-Inab, Gouvernorat de Beheira, Egypte' }, detail: { ar: 'نشأ في أسرة متدينة، وحفظ القرآن في صغره', en: 'Grew up in a religious family, memorized the Quran in childhood', fr: 'A grandi dans une famille religieuse, a memorise le Coran dans son enfance' } },
    { year: '1941', text: { ar: 'تخرج من جامعة الأزهر — كلية أصول الدين', en: 'Graduated from Al-Azhar University — Faculty of Theology', fr: "Diplome de l'Universite Al-Azhar — Faculte de Theologie" }, detail: { ar: 'كان من أوائل دفعته، بدأ التدريس والخطابة', en: 'Was among the top of his class, began teaching and public speaking', fr: 'Etait parmi les premiers de sa promotion, a commence a enseigner' } },
    { year: '1940s', text: { ar: 'انضم إلى الإخوان المسلمين، وكان قريبًا من مؤسسها حسن البنا', en: 'Joined the Muslim Brotherhood, was close to founder Hassan al-Banna', fr: 'A rejoint les Freres Musulmans, etait proche du fondateur Hassan al-Banna' }, detail: { ar: 'كان يشاركهم الرؤية الإصلاحية لكنه اختلف معهم لاحقًا في المنهج السياسي', en: 'He shared their reformist vision but later disagreed with their political methodology', fr: 'Il partageait leur vision reformiste mais a ensuite diverge sur la methodologie politique' } },
    { year: '1940s', text: { ar: 'كتاب "الإسلام والاستبداد السياسي" — صودر وسُجن', en: '"Islam and Political Despotism" — book confiscated, arrested', fr: '"L\'Islam et le despotisme politique" — livre confisque, arrete' }, detail: { ar: 'دفع ثمن جرأته مبكرًا. السلطات رأت في كتابه تهديدًا مباشرًا', en: 'He paid the price for his boldness early on. Authorities saw his book as a direct threat', fr: 'Il a paye le prix de son audace tres tot. Les autorites ont vu son livre comme une menace directe' }, highlight: true },
    { year: '1950s', text: { ar: 'فُصل من الإخوان المسلمين، واصل العمل الفكري المستقل', en: 'Dismissed from Muslim Brotherhood, continued independent scholarship', fr: 'Renvoye des Freres Musulmans, a continue le travail intellectuel independant' }, detail: { ar: 'لم ينضم لأي تنظيم بعدها. آمن بأن الفكر أقوى من التنظيم', en: 'He never joined any organization after that. Believed that ideas are more powerful than organizations', fr: 'Il n\'a jamais rejoint d\'organisation apres cela. Croyait que les idees sont plus puissantes que les organisations' } },
    { year: '1977', text: { ar: 'انتقد قانون السادات — أُسكت وصودرت كتبه', en: "Criticized Sadat's law — silenced, books confiscated", fr: 'A critique la loi de Sadate — reduit au silence, livres confisques' } },
    { year: '1980s', text: { ar: 'درّس في جامعات السعودية', en: 'Taught at universities in Saudi Arabia', fr: "A enseigne dans des universites en Arabie Saoudite" }, detail: { ar: 'عمل في جامعة أم القرى وجامعة الملك عبد العزيز. أحبه الطلاب لصراحته وعمق علمه', en: 'Worked at Umm al-Qura and King Abdulaziz universities. Students loved him for his frankness and depth', fr: 'A travaille aux universites Umm al-Qura et Roi Abdulaziz. Les etudiants l\'aimaient pour sa franchise' } },
    { year: '1984', text: { ar: 'انتقل للتدريس في الجزائر — جامعة الأمير عبد القادر للعلوم الإسلامية', en: 'Moved to teach in Algeria — Emir Abdelkader University of Islamic Sciences', fr: "S'est installe en Algerie — Universite Emir Abdelkader des Sciences Islamiques" }, detail: { ar: 'قضى سنوات مثمرة في قسنطينة. أثّر في جيل كامل من الطلبة الجزائريين. عُرف بمحاضراته النارية', en: 'Spent fruitful years in Constantine. Influenced an entire generation of Algerian students. Known for his fiery lectures', fr: 'A passe des annees fructueuses a Constantine. A influence toute une generation d\'etudiants algeriens' } },
    { year: '1988', text: { ar: 'نشر الجزء الأول من "الحق المر"', en: 'Published the first volume of "The Bitter Truth"', fr: 'A publie le premier volume de "La Verite Amere"' }, detail: { ar: 'بدأ سلسلة الحقائق المرة التي استمرت حتى آخر أيام حياته', en: 'Began the Bitter Truth series that continued until the last days of his life', fr: 'A commence la serie des Verites Ameres qui a continue jusqu\'aux derniers jours de sa vie' }, highlight: true },
    { year: '1989', text: { ar: '"السنة النبوية بين أهل الفقه وأهل الحديث" — أثار عاصفة', en: '"The Prophetic Sunnah" — caused a scholarly storm', fr: '"La Sunna prophetique" — a provoque une tempete' }, detail: { ar: 'سبعة علماء سعوديين نشروا سبعة كتب ردًا عليه. اتُهم بإنكار السنة وهو منها بريء. لم يتراجع وثبت على موقفه', en: 'Seven Saudi scholars published seven response books against him. He was accused of denying the Sunnah, which he was innocent of. He did not back down', fr: 'Sept savants saoudiens ont publie sept livres de reponse. Il a ete accuse de nier la Sunna, ce dont il etait innocent. Il n\'a pas recule' }, highlight: true },
    { year: '1989', text: { ar: 'حصل على جائزة الملك فيصل العالمية', en: 'Received the King Faisal International Prize', fr: 'A recu le Prix International du Roi Faysal' }, detail: { ar: 'تقديرًا لمساهماته في خدمة الإسلام. فاز بها رغم كل الهجمات عليه', en: 'In recognition of his contributions to serving Islam. Won it despite all attacks against him', fr: 'En reconnaissance de ses contributions au service de l\'Islam. L\'a gagne malgre toutes les attaques' } },
    { year: '2/3/1996', text: { ar: 'كتب مقدمة الجزء الأخير من "الحق المر" — قبل وفاته بسبعة أيام', en: 'Wrote the preface to the final volume of "The Bitter Truth" — 7 days before death', fr: 'A ecrit la preface du dernier volume de "La Verite Amere" — 7 jours avant sa mort' }, detail: { ar: 'كانت كلماته الأخيرة المكتوبة دعوة للأمل والعمل. كأنه كان يودّع الأمة بآخر صاعقة', en: 'His last written words were a call for hope and action. As if he was bidding farewell with one final thunderbolt', fr: 'Ses derniers mots ecrits etaient un appel a l\'espoir et a l\'action. Comme s\'il faisait ses adieux avec un dernier coup de foudre' }, highlight: true },
    { year: '9/3/1996', text: { ar: 'توفي في الرياض أثناء حضور مؤتمر، ودُفن في المدينة المنورة', en: 'Died in Riyadh while attending a conference, buried in Medina', fr: 'Decede a Riyad lors d\'une conference, enterre a Medine' }, detail: { ar: 'رحل وهو يعمل. مات كما عاش — في ميدان الفكر والدعوة. بكاه ملايين', en: 'He departed while working. Died as he lived — in the arena of thought and advocacy. Millions mourned him', fr: 'Il est parti en travaillant. Est mort comme il a vecu — dans l\'arene de la pensee et du plaidoyer. Des millions l\'ont pleure' } }
  ];

  /* ===================== DUAS DATA (9 total) ===================== */
  const duas = [
    { ar: 'اللَّهُمَّ أَرِنَا الحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ، وَأَرِنَا البَاطِلَ بَاطِلًا وَارْزُقْنَا اجْتِنَابَهُ', en: 'O Allah, show us the truth as truth and grant us the ability to follow it, and show us falsehood as falsehood and grant us the ability to avoid it.', fr: "O Allah, montre-nous la verite comme verite et accorde-nous de la suivre, et montre-nous le faux comme faux et accorde-nous de l'eviter." },
    { ar: 'رَبِّ زِدْنِي عِلْمًا', en: 'My Lord, increase me in knowledge.', fr: 'Mon Seigneur, augmente-moi en savoir.' },
    { ar: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ وَمِنْ قَلْبٍ لَا يَخْشَعُ', en: 'O Allah, I seek refuge in You from knowledge that does not benefit and from a heart that does not humble itself.', fr: "O Allah, je cherche refuge aupres de Toi contre un savoir inutile et un coeur qui ne s'humilie pas." },
    { ar: 'اللَّهُمَّ اجْعَلْنِي مِنَ الَّذِينَ يَسْتَمِعُونَ الْقَوْلَ فَيَتَّبِعُونَ أَحْسَنَهُ', en: 'O Allah, make me among those who listen to what is said and follow the best of it.', fr: "O Allah, fais de moi parmi ceux qui ecoutent la parole et suivent la meilleure." },
    { ar: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا', en: 'Our Lord, grant us from our spouses and offspring comfort to our eyes and make us leaders for the righteous.', fr: "Notre Seigneur, accorde-nous en nos epoux et nos enfants la joie de nos yeux et fais de nous un modele pour les pieux." },
    { ar: 'اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي', en: 'O Allah, set right my religion which is my safeguard, and set right my worldly life wherein is my livelihood.', fr: "O Allah, rectifie ma religion qui est ma sauvegarde et rectifie ma vie mondaine ou est ma subsistance." },
    // 3 new duas
    { ar: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الهُدَى وَالتُّقَى وَالعَفَافَ وَالغِنَى', en: 'O Allah, I ask You for guidance, piety, chastity, and self-sufficiency.', fr: 'O Allah, je Te demande la guidance, la piete, la chastete et l\'autosuffisance.' },
    { ar: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ', en: 'Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.', fr: 'Notre Seigneur, accorde-nous le bien dans ce monde et le bien dans l\'Au-dela, et protege-nous du chatiment du Feu.' },
    { ar: 'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا وَفِي سَمْعِي نُورًا', en: 'O Allah, place light in my heart, light in my sight, and light in my hearing.', fr: 'O Allah, place de la lumiere dans mon coeur, de la lumiere dans ma vue et de la lumiere dans mon ouie.' }
  ];

  /* ===================== STATE ===================== */
  let currentLang = localStorage.getItem('saaiqa-lang') || 'ar';
  let currentTheme = localStorage.getItem('saaiqa-theme') || 'thunderbolt';
  let soundEnabled = localStorage.getItem('saaiqa-sound') !== 'false';
  let activeTab = 'about';

  // Reading progress: set of essay IDs that have been read (opened)
  let readEssays = JSON.parse(localStorage.getItem('saaiqa-read') || '[]');
  // Bookmarks: set of essay IDs
  let bookmarks = JSON.parse(localStorage.getItem('saaiqa-bookmarks') || '[]');
  // Track which essays had lightning (first open)
  let lightningShown = JSON.parse(localStorage.getItem('saaiqa-lightning') || '[]');

  /* ===================== AUDIO CONTEXT ===================== */
  let audioCtx = null;
  function getAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  }

  function playClick() {
    if (!soundEnabled) return;
    try {
      var ctx = getAudioCtx();
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.frequency.value = 800; osc.type = 'sine';
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.08);
    } catch (e) {}
  }

  function playThunder() {
    if (!soundEnabled) return;
    try {
      var ctx = getAudioCtx();
      var bufferSize = ctx.sampleRate * 0.3;
      var buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      var data = buffer.getChannelData(0);
      for (var i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.15));
      var src = ctx.createBufferSource(); src.buffer = buffer;
      var gain = ctx.createGain();
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      var filter = ctx.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 600;
      src.connect(filter); filter.connect(gain); gain.connect(ctx.destination); src.start();
    } catch (e) {}
  }

  /* ===================== LIGHTNING STRIKE ANIMATION ===================== */
  function triggerLightning() {
    var overlay = document.getElementById('lightning-overlay');
    overlay.classList.remove('flash');
    void overlay.offsetWidth; // force reflow
    overlay.classList.add('flash');
    playThunder();
    setTimeout(function() { overlay.classList.remove('flash'); }, 700);
  }

  /* ===================== SPLASH SCREEN ===================== */
  function initSplash() {
    var splash = document.getElementById('splash-screen');
    var countdown = document.getElementById('splash-countdown');
    var bar = document.getElementById('splash-loader-bar');
    var count = 3;
    bar.style.width = '0%';

    var interval = setInterval(function () {
      count--;
      if (count > 0) {
        countdown.textContent = count;
        bar.style.width = ((3 - count) / 3 * 100) + '%';
      } else {
        clearInterval(interval);
        bar.style.width = '100%';
        countdown.textContent = '⚡';
        setTimeout(function () {
          splash.classList.add('hidden');
          triggerLightning();
        }, 400);
      }
    }, 1000);
  }

  /* ===================== LANGUAGE ===================== */
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('saaiqa-lang', lang);
    var isRTL = lang === 'ar';
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (i18n[lang] && i18n[lang][key]) el.textContent = i18n[lang][key];
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (i18n[lang] && i18n[lang][key]) el.placeholder = i18n[lang][key];
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    renderDailyTruth();
    renderEssays();
    renderTimeline();
    renderImpactQuotes();
    updateReadingProgress();
  }

  /* ===================== THEME ===================== */
  function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('saaiqa-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelectorAll('.theme-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-theme') === theme);
    });
    showToast(i18n[currentLang].toastTheme || 'Theme changed');
    playClick();
  }

  /* ===================== TABS ===================== */
  function switchTab(tab) {
    activeTab = tab;
    document.querySelectorAll('.tab-panel').forEach(function (p) { p.classList.remove('active'); });
    document.getElementById('panel-' + tab).classList.add('active');
    document.querySelectorAll('.tab-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tab);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    playClick();
    // Re-trigger scroll reveal for newly visible elements
    setTimeout(initScrollReveal, 100);
  }

  /* ===================== DAILY TRUTH ===================== */
  function getDailyIndex() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var day = Math.floor(diff / 86400000);
    return day % essays.length;
  }

  function renderDailyTruth() {
    var idx = getDailyIndex();
    var essay = essays[idx];
    var lang = currentLang;

    { const _e=document.getElementById('daily-number'); if(_e) _e.textContent='#' + essay.id; }
    { const _e=document.getElementById('daily-title'); if(_e) _e.textContent=essay.emoji + ' ' + essay.title[lang]; }

    var truthLabel = i18n[lang].truthLabel || 'THE BITTER TRUTH';
    var bitterLabel = i18n[lang].bitterLabel || "WHY IT'S BITTER";
    var cureLabel = i18n[lang].cureLabel || 'THE CURE';

    (document.getElementById('daily-truth')||{}).innerHTML=
      '<strong style="color:var(--accent)">\u26A1 ' + truthLabel + ':</strong>\n' + essay.truth[lang] +
      '\n\n<strong style="color:var(--accent)">\uD83D\uDC94 ' + bitterLabel + ':</strong>\n' + essay.bitter[lang] +
      '\n\n<strong style="color:var(--accent)">\uD83D\uDC8A ' + cureLabel + ':</strong>\n' + essay.cure[lang];
  }

  /* ===================== IMPACT QUOTES ===================== */
  function renderImpactQuotes() {
    var container = document.getElementById('impact-quotes-container');
    var lang = currentLang;
    container.innerHTML = impactQuotes.map(function(q, i) {
      return '<div class="impact-quote-card reveal-on-scroll">' +
        '<div class="impact-quote-number">#' + (i + 1) + '</div>' +
        '<div class="impact-quote-text">' + q[lang] + '</div>' +
      '</div>';
    }).join('');
    setTimeout(initScrollReveal, 50);
  }

  /* ===================== READING PROGRESS ===================== */
  function markAsRead(essayId) {
    if (readEssays.indexOf(essayId) === -1) {
      readEssays.push(essayId);
      localStorage.setItem('saaiqa-read', JSON.stringify(readEssays));
      updateReadingProgress();
    }
  }

  function updateReadingProgress() {
    var total = essays.length;
    var read = readEssays.length;
    var pct = Math.round((read / total) * 100);
    var badge = document.getElementById('reading-progress-badge');
    var bar = document.getElementById('reading-progress-fill');
    var text = document.getElementById('reading-progress-text');
    if (badge) badge.textContent = read + '/' + total;
    if (bar) bar.style.width = pct + '%';
    if (text) text.textContent = read + '/' + total + ' (' + pct + '%)';
  }

  /* ===================== BOOKMARKS ===================== */
  function toggleBookmark(essayId) {
    var idx = bookmarks.indexOf(essayId);
    if (idx === -1) {
      bookmarks.push(essayId);
      showToast(i18n[currentLang].toastBookmarkAdd || 'Added');
    } else {
      bookmarks.splice(idx, 1);
      showToast(i18n[currentLang].toastBookmarkRemove || 'Removed');
    }
    localStorage.setItem('saaiqa-bookmarks', JSON.stringify(bookmarks));
    renderEssays();
  }

  /* ===================== ESSAYS ===================== */
  function renderEssays() {
    var container = document.getElementById('essays-container');
    var lang = currentLang;
    var activeCat = document.querySelector('.cat-btn.active');
    var cat = activeCat ? activeCat.getAttribute('data-cat') : 'all';
    var searchTerm = (document.getElementById('search-input') || {}).value || '';
    searchTerm = searchTerm.trim().toLowerCase();

    var catNames = {
      self: i18n[lang].catSelf,
      women: i18n[lang].catWomen,
      political: i18n[lang].catPolitical,
      knowledge: i18n[lang].catKnowledge,
      courage: i18n[lang].catCourage
    };

    var filtered;
    if (cat === 'bookmarks') {
      filtered = essays.filter(function(e) { return bookmarks.indexOf(e.id) !== -1; });
    } else {
      filtered = cat === 'all' ? essays : essays.filter(function (e) { return e.cat === cat; });
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(function(e) {
        var haystack = (e.title[lang] + ' ' + e.truth[lang] + ' ' + e.bitter[lang] + ' ' + e.cure[lang]).toLowerCase();
        return haystack.indexOf(searchTerm) !== -1;
      });
    }

    if (filtered.length === 0) {
      var noMsg = cat === 'bookmarks' ? (i18n[lang].noBookmarks || 'No saved essays') : (i18n[lang].noResults || 'No results');
      container.innerHTML = '<div class="no-results">' + noMsg + '</div>';
      return;
    }

    var truthLabel = i18n[lang].truthLabel || 'THE BITTER TRUTH';
    var bitterLabel = i18n[lang].bitterLabel || "WHY IT'S BITTER";
    var cureLabel = i18n[lang].cureLabel || 'THE CURE';
    var shareLabel = i18n[lang].shareEssay || 'Share';
    var bookmarkAddLabel = i18n[lang].bookmarkAdd || 'Save';
    var bookmarkRemoveLabel = i18n[lang].bookmarkRemove || 'Saved';

    container.innerHTML = filtered.map(function (essay) {
      var isRead = readEssays.indexOf(essay.id) !== -1;
      var isBookmarked = bookmarks.indexOf(essay.id) !== -1;
      var readClass = isRead ? ' read-essay' : '';
      var bmClass = isBookmarked ? ' bookmarked' : '';
      var bmText = isBookmarked ? bookmarkRemoveLabel : bookmarkAddLabel;
      var bmIcon = isBookmarked ? '🔖' : '🔖';

      return '<div class="essay-card reveal-on-scroll' + readClass + '" data-id="' + essay.id + '">' +
        '<div class="essay-card-header" role="button" tabindex="0" aria-expanded="false">' +
          '<span class="essay-card-emoji">' + essay.emoji + '</span>' +
          '<span class="essay-card-title">' + essay.title[lang] + '</span>' +
          '<svg class="essay-card-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>' +
        '</div>' +
        '<div class="essay-card-body">' +
          '<div class="essay-card-content">' +
            '<div class="essay-section">' +
              '<div class="essay-section-label">\u26A1 ' + truthLabel + '</div>' +
              '<div class="essay-section-text">' + essay.truth[lang] + '</div>' +
            '</div>' +
            '<div class="essay-section">' +
              '<div class="essay-section-label">\uD83D\uDC94 ' + bitterLabel + '</div>' +
              '<div class="essay-section-text">' + essay.bitter[lang] + '</div>' +
            '</div>' +
            '<div class="essay-section">' +
              '<div class="essay-section-label">\uD83D\uDC8A ' + cureLabel + '</div>' +
              '<div class="essay-section-text">' + essay.cure[lang] + '</div>' +
            '</div>' +
            '<span class="essay-category-tag">' + (catNames[essay.cat] || essay.cat) + '</span>' +
            '<div class="essay-actions">' +
              '<button class="essay-action-btn essay-share-btn" data-essay-id="' + essay.id + '">\uD83D\uDCE4 ' + shareLabel + '</button>' +
              '<button class="essay-action-btn essay-bookmark-btn' + bmClass + '" data-essay-id="' + essay.id + '">' + bmIcon + ' ' + bmText + '</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');

    // Attach expand/collapse
    container.querySelectorAll('.essay-card-header').forEach(function (header) {
      header.addEventListener('click', function () {
        var card = header.closest('.essay-card');
        var wasExpanded = card.classList.contains('expanded');
        card.classList.toggle('expanded');
        header.setAttribute('aria-expanded', !wasExpanded);
        playClick();

        if (!wasExpanded) {
          var essayId = parseInt(card.getAttribute('data-id'));
          markAsRead(essayId);

          // Lightning on first open
          if (lightningShown.indexOf(essayId) === -1) {
            lightningShown.push(essayId);
            localStorage.setItem('saaiqa-lightning', JSON.stringify(lightningShown));
            triggerLightning();
          }
        }
      });
      header.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); header.click(); }
      });
    });

    // Share buttons
    container.querySelectorAll('.essay-share-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var id = parseInt(btn.getAttribute('data-essay-id'));
        shareEssay(id);
      });
    });

    // Bookmark buttons
    container.querySelectorAll('.essay-bookmark-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var id = parseInt(btn.getAttribute('data-essay-id'));
        toggleBookmark(id);
      });
    });

    setTimeout(initScrollReveal, 50);
  }

  /* ===================== SHARE ESSAY ===================== */
  function shareEssay(essayId) {
    var essay = essays.find(function(e) { return e.id === essayId; });
    if (!essay) return;
    var lang = currentLang;
    var text = essay.emoji + ' ' + essay.title[lang] + '\n\n' +
      essay.truth[lang] + '\n\n' +
      (lang === 'ar' ? '\u2014 \u0627\u0644\u062D\u0642 \u0627\u0644\u0645\u0631\u060C \u0645\u062D\u0645\u062F \u0627\u0644\u063A\u0632\u0627\u0644\u064A' :
       lang === 'en' ? '— The Bitter Truth, Mohammed al-Ghazali' :
       '— La Verite Amere, Mohammed al-Ghazali');

    if (navigator.share) {
      navigator.share({ title: i18n[lang].appTitle, text: text }).catch(function(){});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(function() {
        showToast(i18n[lang].toastCopied || 'Copied!');
      });
    }
    playClick();
  }

  /* ===================== TIMELINE ===================== */
  function renderTimeline() {
    var container = document.getElementById('timeline-container');
    var lang = currentLang;

    container.innerHTML = timelineData.map(function (item) {
      var cls = item.highlight ? ' highlight' : '';
      var detail = item.detail ? '<div class="timeline-detail">' + item.detail[lang] + '</div>' : '';
      return '<div class="timeline-item reveal-on-scroll' + cls + '">' +
        '<div class="timeline-dot"></div>' +
        '<div class="timeline-year">' + item.year + '</div>' +
        '<div class="timeline-text">' + item.text[lang] + '</div>' +
        detail +
      '</div>';
    }).join('');
    setTimeout(initScrollReveal, 50);
  }

  /* ===================== TOAST ===================== */
  function showToast(message) {
    var container = document.getElementById('toast-container');
    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(function () { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 3200);
  }

  /* ===================== DUA ===================== */
  function showDua() {
    var idx = Math.floor(Math.random() * duas.length);
    var dua = duas[idx];
    { const _e=document.getElementById('dua-arabic'); if(_e) _e.textContent=dua.ar; }
    { const _e=document.getElementById('dua-translation'); if(_e) _e.textContent=dua[currentLang === 'ar' ? 'en' : currentLang]; }
    document.getElementById('dua-modal').classList.add('show');
    playClick();
  }

  /* ===================== SHARE DAILY ===================== */
  function shareDailyTruth() {
    var idx = getDailyIndex();
    shareEssay(essays[idx].id);
  }

  /* ===================== SCROLL TO TOP ===================== */
  function initScrollToTop() {
    var btn = document.getElementById('scroll-top-btn');
    window.addEventListener('scroll', function () {
      btn.classList.toggle('visible', window.scrollY > 400);
    });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      playClick();
    });
  }

  /* ===================== SOUND TOGGLE ===================== */
  function initSoundToggle() {
    var toggle = document.createElement('button');
    toggle.className = 'sound-toggle' + (soundEnabled ? '' : ' muted');
    toggle.id = 'sound-toggle';
    toggle.setAttribute('aria-label', 'Toggle sound');
    toggle.textContent = soundEnabled ? '🔊' : '🔇';
    document.body.appendChild(toggle);

    toggle.addEventListener('click', function () {
      soundEnabled = !soundEnabled;
      localStorage.setItem('saaiqa-sound', soundEnabled);
      toggle.textContent = soundEnabled ? '🔊' : '🔇';
      toggle.classList.toggle('muted', !soundEnabled);
      showToast(soundEnabled ? (i18n[currentLang].soundOn || 'Sound on') : (i18n[currentLang].soundOff || 'Sound off'));
    });
  }

  /* ===================== SEARCH ===================== */
  function initSearch() {
    var input = document.getElementById('search-input');
    var clearBtn = document.getElementById('search-clear-btn');
    if (!input) return;

    input.addEventListener('input', function() {
      clearBtn.style.display = input.value ? 'block' : 'none';
      renderEssays();
    });

    clearBtn.addEventListener('click', function() {
      input.value = '';
      clearBtn.style.display = 'none';
      renderEssays();
      input.focus();
    });
  }

  /* ===================== SCROLL REVEAL (IntersectionObserver) ===================== */
  function initScrollReveal() {
    var elements = document.querySelectorAll('.reveal-on-scroll:not(.revealed)');
    if (!('IntersectionObserver' in window)) {
      elements.forEach(function(el) { el.classList.add('revealed'); });
      return;
    }
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    elements.forEach(function(el) { observer.observe(el); });
  }

  /* ===================== EVENT LISTENERS ===================== */
  function initEvents() {
    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLanguage(btn.getAttribute('data-lang'));
        playClick();
      });
    });

    // Theme switcher
    document.querySelectorAll('.theme-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setTheme(btn.getAttribute('data-theme'));
      });
    });

    // Bottom tabs
    document.querySelectorAll('.tab-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        switchTab(btn.getAttribute('data-tab'));
      });
    });

    // Category filter
    document.querySelectorAll('.cat-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.cat-btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        renderEssays();
        playClick();
      });
    });

    // Daily share
    document.getElementById('daily-share-btn').addEventListener('click', shareDailyTruth);

    // Daily thunderbolt area — tap to go to truths
    var thunderbolt = document.getElementById('daily-thunderbolt');
    if (thunderbolt) {
      thunderbolt.addEventListener('click', function() {
        switchTab('truths');
      });
    }

    // Help modal
    document.getElementById('help-btn').addEventListener('click', function () {
      document.getElementById('help-modal').classList.add('show');
      playClick();
    });
    document.getElementById('help-modal-close').addEventListener('click', function () {
      document.getElementById('help-modal').classList.remove('show');
    });
    document.getElementById('help-modal').addEventListener('click', function (e) {
      if (e.target === this) this.classList.remove('show');
    });

    // Dua
    document.getElementById('dua-float').addEventListener('click', showDua);
    document.getElementById('dua-modal-close').addEventListener('click', function () {
      document.getElementById('dua-modal').classList.remove('show');
    });
    document.getElementById('dua-modal').addEventListener('click', function (e) {
      if (e.target === this) this.classList.remove('show');
    });

    // Badge button
    document.getElementById('badge-btn').addEventListener('click', function () {
      window.open('https://workshop-diy.org', '_blank');
    });
  }

  /* ===================== INIT ===================== */
  function init() {
    initSplash();

    document.documentElement.setAttribute('data-theme', currentTheme);
    document.querySelectorAll('.theme-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-theme') === currentTheme);
    });

    setLanguage(currentLang);
    initEvents();
    initScrollToTop();
    initSoundToggle();
    initSearch();
    updateReadingProgress();

    // Kick off scroll reveal after a short delay
    setTimeout(initScrollReveal, 300);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();


/* TICKER — rich content */
function startTicker(){
  var el=document.getElementById('tickerText');if(!el)return;
  var tips={
    ar:['⛈️ ٤٠ حقيقة مُرّة','📅 كتب حتى ٧ أيام قبل وفاته رحمه الله','🔖 احفظ مقالاتك المفضلة','📖 الحق المر — الشيخ محمد الغزالي','🤲 اللّهُمّ أَرِنا الحَقَّ حَقّاً وارزُقنا اتِّباعَهُ','💡 Powered by workshop-diy.org'],
    en:['⛈️ 40 bitter truths','📅 Wrote until 7 days before his death','🔖 Bookmark your favorites','📖 The Bitter Truth — Sheikh al-Ghazali','🤲 O God, show us truth as truth','💡 Powered by workshop-diy.org'],
    fr:['⛈️ 40 vérités amères','📅 A écrit jusqu\'à 7 jours avant sa mort','📖 La Vérité Amère — Sheikh al-Ghazali','💡 Powered by workshop-diy.org']
  };
  var lang=document.documentElement.lang||'ar';var msgs=tips[lang]||tips.ar;
  var txt=msgs.join('  ✦  ');
  el.innerHTML='<span class="tc">'+txt+'  ✦  </span><span class="tc" aria-hidden="true">'+txt+'  ✦  </span>';
  el.style.animation='tickerMarquee '+Math.max(25,txt.length*0.12)+'s linear infinite';
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',startTicker)}else{startTicker()}
