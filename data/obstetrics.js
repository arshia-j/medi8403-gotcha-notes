window.GOTCHA = window.GOTCHA || { modules: [] };
window.GOTCHA.modules.push(
{
 "id": "obstetrics",
 "name": "Obstetrics",
 "category": "Obstetrics",
 "blurb": "Written-exam (MCQ) only. Antenatal care, complicated pregnancy, labour & CTG, operative delivery and the intrapartum emergencies — Australian thresholds and the “what-first” reflexes (eclampsia = magnesium, shoulder dystocia = McRoberts, PPH = the 4 Ts).",
 "cards": [
  {
   "topic": "Routine 18-20 week morphology (anatomy) scan",
   "subarea": "Preconception & antenatal care",
   "trap": "- The **18-20 week morphology scan** is for STRUCTURAL anatomy and placental localisation\n- It is **NOT an aneuploidy screen** (that's CFTS/NIPT, done earlier)\n- Practical gotcha: a **low-lying placenta/praevia found at 20 weeks** is re-checked at **~32 weeks**\n  - ~**90% migrate upward** as the lower segment grows\n  - Do NOT plan delivery off the 20-week placental position alone",
   "whatFirst": "- If **low-lying placenta at 20 weeks**: arrange **repeat scan at ~32 weeks** (often transvaginal)\n  - Do not act on the 20-week finding alone",
   "cutoffs": [
    "Morphology scan: **18-20** (up to 22) weeks",
    "Re-image a low-lying placenta at **~32 weeks**",
    "It is **structural** — not chromosomal screening"
   ],
   "mcqTrap": "- '20-week scan shows low-lying placenta → **plan caesarean now**' — WRONG; **rescan ~32 weeks**, most resolve\n- Treating the **morphology scan as the test that rules out Down syndrome** — WRONG",
   "discriminator": "- **Morphology scan (18-20 wk)**: structure and placenta\n- **Aneuploidy screen (NIPT/CFTS)**: chromosomes — done **earlier**",
   "mnemonic": "Twenty looks at the build; thirty-two re-checks the placenta.",
   "source": "RANZCOG Prenatal assessment of fetal structural conditions; Queensland Clinical Guidelines (Routine antenatal care)",
   "tags": [
    "morphology-scan",
    "anatomy",
    "placenta-praevia",
    "20-week"
   ],
   "verified": true,
   "id": "obs-8",
   "title": "18-20 Week Morphology Scan",
   "subtitle": "It is anatomy, not an aneuploidy screen",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Fetal_Anomaly_Ultrasound_Scan_in_Navi_Mumbai.jpg/960px-Fetal_Anomaly_Ultrasound_Scan_in_Navi_Mumbai.jpg",
     "caption": "18–20 week morphology scan — fetal anatomy survey",
     "alt": "Standard 18–20 week anomaly scan showing fetal structures including four-chamber cardiac view and cranial anatomy",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Placenta_Previa.png",
     "caption": "Low-lying placenta / placenta praevia on morphology scan",
     "alt": "Transvaginal ultrasound demonstrating placenta praevia with placenta covering the internal os at 20 weeks",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Aneuploidy SCREENING: NIPT vs combined first-trimester screen",
   "subarea": "Preconception & antenatal care",
   "trap": "- **NIPT** (cell-free fetal DNA) is a **SCREENING** test, not diagnostic\n  - A 'high-chance' NIPT must be confirmed by **invasive diagnostic test (CVS/amnio)** before any irreversible decision\n- NIPT can be done from **10 weeks**\n- Publicly funded standard screen in Australia: **combined first-trimester screen (CFTS)**\n  - Nuchal translucency + bHCG + PAPP-A at **11-13+6 weeks**\n- **NIPT is NOT Medicare-rebated** (self-funded, ~$500+)\n- Do not confuse the **morphology scan (18-20 wk, structural)** with aneuploidy screening",
   "whatFirst": "- If NIPT/CFTS is high-chance: **counsel and offer DIAGNOSTIC test (CVS or amnio)**\n  - Do not act on the screening result alone",
   "cutoffs": [
    "NIPT: from **10 weeks** (screening only, ~99% T21 detection)",
    "Combined FTS: **11-13+6 weeks** (NT + bHCG + PAPP-A)",
    "CFTS = **publicly funded** standard; NIPT **self-funded** (no Medicare rebate)"
   ],
   "mcqTrap": "- '**High-chance NIPT, so terminate / so the baby has Down syndrome**' — WRONG; confirm with CVS/amnio\n- Offering NIPT **'at 8 weeks'** — WRONG; too early (**from 10 weeks** minimum)",
   "discriminator": "- **Screening** (NIPT, CFTS, maternal serum): gives a **probability**\n- **Diagnostic** (CVS, amnio): gives a **karyotype** — only diagnostic tests confirm",
   "mnemonic": "NIPT = 'Not In Place of Testing' - it screens, it does not diagnose.",
   "source": "RANZCOG/HGSA Prenatal Screening and Diagnostic Testing for Fetal Chromosomal and Genetic Conditions (C-Obs 59), 2024",
   "tags": [
    "aneuploidy",
    "NIPT",
    "screening",
    "combined-first-trimester",
    "Down"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Test</th><th>Timing</th><th>Type</th></tr></thead><tbody><tr><td>Combined FTS (NT+bHCG+PAPP-A)</td><td><span class=\"gv-num\">11-13+6 wk</span></td><td>Screen (MBS funded)</td></tr><tr><td>NIPT (cfDNA)</td><td>from <span class=\"gv-num\">10 wk</span></td><td>Screen (self-funded)</td></tr><tr><td>CVS</td><td><span class=\"gv-num\">11-14 wk</span></td><td>Diagnostic</td></tr><tr><td>Amniocentesis</td><td><span class=\"gv-num\">&ge;15 wk</span></td><td>Diagnostic</td></tr></tbody></table>",
   "id": "obs-6",
   "title": "Aneuploidy Screening: NIPT vs CFTS",
   "subtitle": "NIPT is screening only; confirm with CVS or amnio",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Nuchal_translucency_Dr._Wolfgang_Moroder.jpg/960px-Nuchal_translucency_Dr._Wolfgang_Moroder.jpg",
     "caption": "Nuchal translucency measurement on first-trimester ultrasound (CFTS)",
     "alt": "First-trimester ultrasound with calipers measuring nuchal translucency thickness as part of combined first-trimester screening",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Anti-D within 72h of a SENSITISING EVENT (and the first-trimester dose twist)",
   "subarea": "Preconception & antenatal care",
   "trap": "- Any **sensitising event** in an RhD-negative unsensitised woman needs **anti-D within 72 hours** — REGARDLESS of routine doses\n- **'She already had her 28-week dose, so she's covered'** — WRONG: a fresh bleed/trauma/ECV/procedure still needs event-driven anti-D\n- Dose is **gestation-dependent**:\n  - **<13 weeks**: **250 IU**, NO Kleihauer (fetal blood volume <2.5 mL)\n  - **>=13 weeks**: **625 IU** AND a **Kleihauer** to check for large feto-maternal haemorrhage\n- Even if just over 72h, **anti-D up to ~9-10 days post-event** has some benefit — do not withhold",
   "whatFirst": "- RhD-neg + sensitising event → give **anti-D within 72h**\n  - **<13 wk**: 250 IU, no Kleihauer\n  - **>=13 wk**: 625 IU PLUS Kleihauer to quantify FMH and titrate extra dose",
   "cutoffs": [
    "Within **72h** of event (still give late if missed, up to ~9-10 days)",
    "**<13 weeks**: 250 IU, no Kleihauer",
    "**Multiple pregnancy <13 wk**: 625 IU + Kleihauer",
    "**>=13 weeks**: 625 IU + Kleihauer",
    "Events: APH, abdo trauma, ECV, CVS/amnio, abruption, miscarriage/TOP, ectopic, delivery"
   ],
   "mcqTrap": "- '**She had her 28-week routine dose, so the 30-week car accident needs nothing**' — WRONG; give event-driven anti-D within 72h\n- Giving **625 IU + Kleihauer for an 8-week singleton miscarriage** — WRONG; **250 IU with no Kleihauer** suffices",
   "discriminator": "- **First-trimester singleton event**: **250 IU**, no Kleihauer (fetal blood <2.5 mL)\n- **>=13 weeks**: **625 IU + Kleihauer** (FMH can exceed one ampoule's cover)",
   "mnemonic": "72 hours, dose by trimester: 'Two-fifty before thirteen; six-two-five and Kleihauer after.'",
   "redFlags": "- **Large APH/abruption/major trauma** — one 625 IU ampoule may be **inadequate**\n  - **Kleihauer** quantifies FMH and dictates extra anti-D",
   "source": "National Blood Authority / RANZCOG Anti-D in pregnancy guideline 2024; WA (KEMH) / Qld Health RhD immunoglobulin guidelines",
   "tags": [
    "anti-D",
    "sensitising-event",
    "72-hours",
    "Kleihauer",
    "dose"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Event gestation</th><th>Dose</th><th>Kleihauer?</th></tr></thead><tbody><tr><td>&lt;13 weeks (singleton)</td><td><span class=\"gv-num\">250 IU</span></td><td>No</td></tr><tr><td>&ge;13 weeks</td><td><span class=\"gv-num\">625 IU</span></td><td>Yes (titrate extra)</td></tr></tbody></table>",
   "id": "obs-10",
   "title": "Anti-D for Sensitising Events",
   "subtitle": "Within 72h, even if the routine dose was given"
  },
  {
   "topic": "DIAGNOSTIC tests: CVS (11-14 wk) vs amniocentesis (>=15 wk) and miscarriage risk",
   "subarea": "Preconception & antenatal care",
   "trap": "- **CVS** is done **earlier** (11-14 weeks, placental/chorionic tissue)\n- **Amniocentesis** is done **later** (>=15 weeks, amniotic fluid)\n- **Amnio before 15 weeks** (early amnio) raises risk of **talipes and pregnancy loss** — that's why it's deferred to >=15 weeks\n- Modern procedure-related miscarriage risk is **LOW**:\n  - CVS: **~0.2%**\n  - Amniocentesis: **~0.3%** (and near-background ~0.1% vs matched controls)\n- The old quoted **'1%'** is **OUTDATED** — a trap\n- CVS also carries a small risk of **confined placental mosaicism** (false result)",
   "whatFirst": "- Choose by gestation:\n  - **<15 weeks** and need a diagnosis → **CVS**\n  - **>=15 weeks** → **amniocentesis**\n- Confirm a screen-positive result before counselling on management",
   "cutoffs": [
    "CVS: **11-14 weeks**",
    "Amniocentesis: **>=15 weeks** (NOT earlier)",
    "Procedure-related loss: CVS **~0.2%**, amnio **~0.3%** (near-background ~0.1% vs matched controls)",
    "Old textbook **'~1%'** figure is outdated"
   ],
   "mcqTrap": "- Quoting amniocentesis miscarriage risk as **'1%'** — current figure is **~0.3%** (near-background ~0.1% vs matched controls)\n- Offering **amniocentesis at 13 weeks** — WRONG; too early; that window is **CVS**",
   "discriminator": "- **CVS**: chorionic villi (placenta), earlier, **mosaicism risk**\n- **Amnio**: amniocytes (fluid), >=15 wk\n- Both losses are **well under 1%**",
   "mnemonic": "Alphabetical = chronological: CVS Comes before amnio; amnio Always >=15.",
   "source": "RANZCOG/HGSA Prenatal Screening and Diagnostic Testing (C-Obs 59), 2024; Salomon et al. UOG 2019 meta-analysis",
   "tags": [
    "CVS",
    "amniocentesis",
    "diagnostic",
    "miscarriage-risk"
   ],
   "verified": true,
   "id": "obs-7",
   "title": "CVS vs Amniocentesis",
   "subtitle": "CVS earlier at 11-14 wk; amnio deferred to >=15 wk",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Amniocentesis.png/960px-Amniocentesis.png",
     "caption": "Amniocentesis — ultrasound-guided transabdominal needle in amniotic fluid",
     "alt": "Ultrasound showing needle entering amniotic cavity for amniocentesis at ≥15 weeks avoiding the fetus",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Dating: EDD, Naegele's rule & the redate-by-USS rule",
   "subarea": "Preconception & antenatal care",
   "trap": "- **Naegele's rule**: EDD = first day of LMP + 7 days − 3 months (+1 year)\n  - Only reliable with **regular, known cycles**\n- The examined rule: the **first-trimester ultrasound (CRL)** overrides the LMP if they differ by more than **~5-7 days**\n  - Then **RE-DATE to the scan**\n- Beyond **~14 weeks**, dating is less precise\n- Trap 1: **keeping the LMP date** when the early scan disagrees by more than the threshold\n- Trap 2: **re-dating off a late-pregnancy scan** (unreliable: +/- 2-3 weeks in T3)",
   "whatFirst": "- Calculate EDD by LMP (Naegele) but **RE-DATE to first-trimester CRL** if it differs by **>~5-7 days**",
   "discriminator": "- **T1 CRL (+/-5-7 days)** is the gold standard and **overrides LMP**\n- **Late scans cannot redate** — too imprecise",
   "cutoffs": [
    "Naegele: **LMP + 7 days − 3 months**",
    "T1 CRL accurate **+/- 5-7 days**",
    "Redate to USS if LMP-USS differ by **>~5-7 days**",
    "Do **not** redate off third-trimester scans"
   ],
   "redFlags": "- Uncertain LMP, **irregular cycles**, or recent hormonal contraception → rely on the **dating scan**",
   "trapAnswer": "'Keep the LMP-based EDD' when the early scan differs by more than a week - the scan wins.",
   "mcqTrap": "- **Retaining LMP dates** over a discordant first-trimester scan\n- **Re-dating from a late scan**",
   "mnemonic": "Scan beats LMP if off by a week; the earlier the scan, the truer the date.",
   "source": "RANZCOG / ACOG-aligned dating guidance (Australian practice) (current)",
   "verified": true,
   "tags": [
    "obstetrics",
    "dating",
    "EDD",
    "ultrasound"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">EDD by LMP (Naegele)</div><div class=\"gv-step\">T1 CRL scan (+/- 5-7 days)</div><div class=\"gv-step\">Differ by &gt;~5-7 days?</div><div class=\"gv-step\">Re-date to the scan</div></div>",
   "id": "obs-18",
   "title": "EDD and Naegele's Rule",
   "subtitle": "First-trimester ultrasound overrides an unreliable LMP"
  },
  {
   "topic": "Dating: crown-rump length in the first trimester is most accurate",
   "subarea": "Preconception & antenatal care",
   "trap": "- **First-trimester CRL** is the MOST accurate way to date a pregnancy (**~+/-5-7 days**), more reliable than LMP\n- Establishes/confirms the **EDD**\n- Once an early dating scan is done, the EDD is **NOT re-dated by later scans**\n- Trap 1: **re-dating off a 20-week or third-trimester scan**\n- Trap 2: **trusting LMP over an early CRL**\n- CRL valid up to and including **13+6 weeks**\n  - Beyond that, dating shifts to **head circumference/biparietal diameter** (less accurate)",
   "whatFirst": "- Date by **earliest accurate measurement**: CRL if scanned **<=13+6 weeks**\n  - Do not re-date from later scans once an early dating scan exists",
   "cutoffs": [
    "CRL valid up to and including **13+6 weeks**",
    "First-trimester CRL accuracy **~+/-5-7 days**",
    "Don't re-date EDD from **2nd/3rd-trimester scans**"
   ],
   "mcqTrap": "- '**Reassign the due date based on the 28-week growth scan**' — WRONG; the early CRL stands\n- '**Use LMP**' when an early CRL is available — WRONG; **CRL is more accurate**",
   "discriminator": "- **CRL**: first trimester — most accurate\n- **HC/BPD/FL**: second/third trimester — used only if no early scan; wider error",
   "mnemonic": "CRL = 'Correct Reliable Length' - first-trimester gold standard, never overruled later.",
   "source": "RANZCOG / ISUOG first-trimester dating guidance (CRL to 13+6 wk, +/-5-7 days)",
   "tags": [
    "dating",
    "CRL",
    "ultrasound",
    "EDD"
   ],
   "verified": true,
   "id": "obs-5",
   "title": "First-Trimester Dating by CRL",
   "subtitle": "Once EDD is set early, later scans never re-date",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/CRL_Crown_rump_length_12_weeks_ecografia_Dr._Wolfgang_Moroder.jpg/960px-CRL_Crown_rump_length_12_weeks_ecografia_Dr._Wolfgang_Moroder.jpg",
     "caption": "Crown-rump length (CRL) measurement — first-trimester dating ultrasound",
     "alt": "First-trimester ultrasound with electronic calipers measuring crown-rump length from vertex to rump for accurate gestational age dating",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Folate dose: 0.4-0.8 mg standard vs 5 mg high-risk",
   "subarea": "Preconception & antenatal care",
   "trap": "- The catch is giving the **LOW dose to a HIGH-RISK woman**\n- **High-risk** criteria (all need **5 mg/day**):\n  - Previous **NTD-affected pregnancy** or family history\n  - **Pre-existing diabetes** (type 1 or 2)\n  - **Antiepileptics** (valproate, carbamazepine)\n  - **BMI >=30**\n  - **Malabsorption**\n- Second trap — **timing**: start at least **1 month (ideally 3 months) preconception** and continue to **12 weeks**\n  - Neural tube closes by **~day 28**\n  - First prescribing folate at the booking visit (8-10 weeks) is **already too late** for NTD prevention",
   "whatFirst": "- **Risk-stratify FIRST** (any NTD/diabetes/antiepileptic/BMI>=30/malabsorption?)\n  - Then choose dose\n  - Default **0.4-0.8 mg** only if none apply",
   "cutoffs": [
    "Standard: **0.4-0.8 mg/day** (RANZCOG)",
    "High-risk: **5 mg/day**",
    "Start **>=1 month pre-conception**, continue to **12 weeks**",
    "High-risk = prior/family NTD, pre-pregnancy diabetes, antiepileptics, **BMI>=30**, malabsorption"
   ],
   "mcqTrap": "- **Low-dose folic acid** offered for a woman on **sodium valproate** or with a previous spina bifida baby — WRONG; she needs **5 mg**\n- Starting folate **'at the first antenatal visit'** — WRONG; the neural tube has **already closed by ~day 28**",
   "discriminator": "- **Folate** prevents **NTDs** (tube closes by day 28)\n- **Iodine** is for fetal **neurodevelopment**\n  - Separate supplements, both recommended, not interchangeable",
   "mnemonic": "Five reasons for FIVE mg: prior NTD, Diabetes, Drugs (antiepileptics), Dimensions (BMI>=30), poor absorption (malabsorption).",
   "source": "RANZCOG Vitamin and Mineral Supplementation in Pregnancy (C-Obs 25); RANZCOG Planning for Pregnancy patient resource",
   "tags": [
    "folate",
    "preconception",
    "NTD",
    "high-risk",
    "dose"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Risk</th><th>Dose/day</th><th>Examples</th></tr></thead><tbody><tr><td>Standard</td><td><span class=\"gv-num\">0.4-0.8 mg</span></td><td>All other pregnancies</td></tr><tr><td>High</td><td><span class=\"gv-num\">5 mg</span></td><td>Prior/family NTD, diabetes, antiepileptics, BMI&ge;30, malabsorption</td></tr></tbody></table>",
   "id": "obs-1",
   "title": "Folate Dosing in Pregnancy",
   "subtitle": "High-risk women need 5 mg, not the standard dose"
  },
  {
   "topic": "Iodine 150 microg - the second routine supplement (and its exception)",
   "subarea": "Preconception & antenatal care",
   "trap": "- **Iodine 150 microg/day** is recommended for ALL women planning pregnancy, pregnant, AND **breastfeeding**\n- Gotcha exception: women with **pre-existing thyroid disease** (Graves, Hashimoto's, on thyroxine) should seek **specialist/medical advice before** iodine supplementation\n  - Excess iodine can trigger **thyroid dysfunction** in susceptible women",
   "whatFirst": "- Recommend **iodine 150 microg alongside folate** at preconception counselling\n  - Flag known **thyroid disease** for medical/endocrine review first",
   "cutoffs": [
    "Iodine **150 microg/day**",
    "Throughout preconception, pregnancy AND **breastfeeding**",
    "Caution / seek medical advice if **pre-existing thyroid disease**"
   ],
   "mcqTrap": "- **Forgetting iodine entirely** (only mentioning folate)\n- **Stopping iodine after delivery** — WRONG; must continue through **lactation**\n- Giving iodine to a woman with **thyroid disease without specialist input** — WRONG",
   "discriminator": "- **Folate window** stops at **~12 weeks**\n- **Iodine** continues the whole pregnancy and through **breastfeeding**",
   "mnemonic": "Folate Finishes at 12 weeks; Iodine Is for the whole journey (incl. breastfeeding).",
   "source": "NHMRC Iodine Supplementation for Pregnant and Breastfeeding Women (public statement); RANZCOG C-Obs 25",
   "tags": [
    "iodine",
    "supplement",
    "thyroid",
    "breastfeeding"
   ],
   "verified": true,
   "id": "obs-2",
   "title": "Iodine Supplementation in Pregnancy",
   "subtitle": "150 microg for all, except pre-existing thyroid disease"
  },
  {
   "topic": "Kleihauer for large feto-maternal haemorrhage - one ampoule isn't always enough",
   "subarea": "Preconception & antenatal care",
   "trap": "- After **large feto-maternal haemorrhage** (abruption, major trauma >=20 weeks, manual removal of placenta) the standard **625 IU may be inadequate**\n  - One 625 IU ampoule covers **~6 mL of fetal red cells** (~12 mL fetal whole blood)\n- Gotcha: do a **Kleihauer (or flow cytometry)** to QUANTIFY the FMH and give **additional anti-D titrated to volume**\n  - Don't just give one ampoule and assume cover\n- Kleihauer is **NOT needed for first-trimester events** (fetal blood volume too small to exceed cover)",
   "whatFirst": "- Large bleed **>=20 wk** in RhD-neg woman → give **625 IU within 72h** AND send **Kleihauer**\n  - Add further anti-D per calculated FMH volume",
   "cutoffs": [
    "1 x 625 IU covers **~6 mL fetal RBC** (~12 mL fetal whole blood)",
    "**Kleihauer** quantifies FMH to titrate extra dose",
    "**Not required** for first-trimester events"
   ],
   "mcqTrap": "- Giving a **single 625 IU after a major abruption** and assuming the woman is protected — WRONG\n  - FMH may exceed one ampoule's cover; **Kleihauer-guided extra dosing** is needed",
   "discriminator": "- **Routine prophylaxis / small events**: fixed dose\n- **Large FMH**: **Kleihauer-titrated dose** — don't apply fixed dose blindly to a big bleed",
   "mnemonic": "Big Bleed -> Big think: Kleihauer Counts the cells, then top up anti-D.",
   "source": "National Blood Authority / RANZCOG Anti-D guideline 2024; Queensland Clinical Guidelines",
   "tags": [
    "Kleihauer",
    "FMH",
    "anti-D",
    "abruption",
    "dose-titration"
   ],
   "verified": true,
   "id": "obs-11",
   "title": "Kleihauer Test for Large FMH",
   "subtitle": "One ampoule covers ~6 mL fetal cells; quantify the bleed",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/KB_stain%2C_annotated.jpg/960px-KB_stain%2C_annotated.jpg",
     "caption": "Kleihauer-Betke test — fetal red cells (pink) among maternal red cells (ghost cells)",
     "alt": "Kleihauer-Betke acid elution stain showing fetal haemoglobin-containing cells as dense pink cells among pale ghost maternal red cells, used to quantify feto-maternal haemorrhage",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Perinatal mental health screening - EPDS",
   "subarea": "Preconception & antenatal care",
   "trap": "- **EPDS is used antenatally** too, recommended as early as practical in pregnancy and again later/postpartum\n- A score **>=13** warrants further assessment\n- **Killer gotcha — item 10** (self-harm thoughts): ANY non-zero response mandates immediate/same-day mental health risk assessment regardless of total score\n  - A 'normal' total does **not** override a positive item 10\n- **EPDS is a screen**, not a diagnosis",
   "whatFirst": "- Always check **item 10 first** when scoring\n- Positive item 10 -> **immediate further mental health assessment / escalation** per local protocol, even if total score is low",
   "cutoffs": [
    "EPDS **>=13** = arrange further assessment (COPE)",
    "Item 10 (self-harm) **ANY non-zero** score = immediate risk assessment",
    "Screen **early in pregnancy** AND again later/postnatally",
    "**10-item** self-report tool"
   ],
   "mcqTrap": "- 'EPDS total is **8** (below threshold), so reassure and rescreen' — **WRONG** if item 10 is positive\n  - Positive item 10 needs urgent safety assessment regardless of total",
   "discriminator": "- **Total score** flags likely depression\n- **Item 10** flags acute self-harm risk — assessed separately\n- A reassuring total **never cancels** a positive item 10",
   "mnemonic": "Ten is the trap: always read item 10 before you trust the total.",
   "redFlags": "- Any thoughts of **self-harm (item 10)**\n- Expressed **intent**\n- **Psychotic symptoms** (e.g. postpartum psychosis)\n  - All require urgent same-day mental health response",
   "source": "COPE 2023 National Perinatal Mental Health Guideline (Mental Health Care in the Perinatal Period)",
   "tags": [
    "EPDS",
    "perinatal-mental-health",
    "screening",
    "self-harm",
    "item-10"
   ],
   "verified": true,
   "id": "obs-12",
   "title": "Perinatal Depression Screening (EPDS)",
   "subtitle": "Item 10 self-harm overrides any reassuring total score"
  },
  {
   "topic": "Red-cell alloimmunisation (anti-D/anti-Kell/anti-c): titres + MCA-PSV, NOT anti-D",
   "subarea": "Preconception & antenatal care",
   "trap": "- Once a woman is **already sensitised** (positive antibody screen with immune red-cell antibody), **anti-D is useless** — cannot un-sensitise her\n- Correct pathway is **surveillance for fetal anaemia**:\n  - Serial **antibody titres** (monthly to 28 wk, then fortnightly)\n  - Fetal **MCA-PSV Doppler** from ~16-18 wk\n- MCA-PSV **>1.5 MoM** = significant fetal anaemia -> refer for fetal blood sampling +/- intrauterine transfusion\n- **Anti-Kell is special**: titres correlate poorly (Kell suppresses erythropoiesis)\n  - Escalate on **antibody presence**, not titre level — go straight to MCA-PSV monitoring",
   "whatFirst": "- Sensitised woman -> **serial titres + MCA-PSV Doppler**\n- Do **NOT give anti-D** (prevention only, futile once immunised)",
   "discriminator": "- **Anti-D prophylaxis** = the non-sensitised RhD-neg woman (28/34 wk + sensitising events)\n- **Established alloimmunisation** = different, surveillance pathway (titres + MCA-PSV)",
   "cutoffs": [
    "MCA-PSV **>1.5 MoM** = significant fetal anaemia",
    "Start MCA-PSV **~16-18 wk**",
    "Titres: **monthly to 28 wk**, then fortnightly",
    "**Anti-Kell**: act on presence, not titre"
   ],
   "redFlags": "- **MCA-PSV >1.5 MoM** in an alloimmunised pregnancy\n- **Fetal hydrops** on USS in an alloimmunised pregnancy",
   "trapAnswer": "'Give anti-D immunoglobulin' for a woman who already has anti-D antibodies - it does nothing once sensitised.",
   "mcqTrap": "- Selecting **anti-D prophylaxis** for an already-alloimmunised woman — she needs **MCA-PSV surveillance** instead",
   "mnemonic": "Anti-D the drug prevents anti-D the antibody; once the antibody exists, you measure (MCA-PSV), you don't prevent.",
   "source": "RCOG/RANZCOG Red Cell Antibodies in Pregnancy; BSH 2025 red-cell antibodies guideline; Australian Red Cross Lifeblood (current)",
   "verified": true,
   "tags": [
    "obstetrics",
    "alloimmunisation",
    "anti-D",
    "fetal anaemia"
   ],
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Not sensitised -> anti-D prophylaxis</span><span class=\"gv-pill\">Sensitised -> titres + MCA-PSV</span><span class=\"gv-pill\">PSV &gt;1.5 MoM -> IUT</span></div>",
   "id": "obs-16",
   "title": "Red-Cell Alloimmunisation",
   "subtitle": "Already sensitised: titres and MCA-PSV, anti-D is useless"
  },
  {
   "topic": "Reduced fetal movements - present same day, CTG first",
   "subarea": "Preconception & antenatal care",
   "trap": "- **Reduced fetal movements (RFM)** must be assessed the **same day** — trap is 'kick chart for a week then review' or telephone reassurance\n- On presentation: do a **CTG** (after confirming fetal heart by auscultation/handheld Doppler) plus risk-factor assessment\n- If RFM persist/recur, or CTG is abnormal -> proceed to **ultrasound** (growth, liquor, Dopplers)\n- There is **no validated single 'count to 10' threshold** — any maternal perception of reduced movement warrants review",
   "whatFirst": "- RFM -> **see same day**\n- **CTG first** (after confirming fetal heart)\n- Recurrent/persistent RFM or abnormal CTG -> **USS** for growth/liquor/Dopplers",
   "cutoffs": [
    "**Same-day assessment** — no 'wait and watch'",
    "**CTG** is the first investigation",
    "**USS** if recurrent RFM or abnormal CTG",
    "**No validated single** kick-count cut-off"
   ],
   "mcqTrap": "- 'Advise a **kick chart and review in a week**' or 'reassure over the phone' — **WRONG**\n  - Same-day in-person assessment with CTG is required",
   "discriminator": "- RFM can be the **only warning before stillbirth** — treat as a red flag, not a reassurance opportunity",
   "mnemonic": "Felt Less? Front of queue Today - same-day CTG.",
   "redFlags": "- **Recurrent RFM**\n- RFM + **abnormal CTG**\n- RFM + **FGR/oligohydramnios** — escalate; consider delivery",
   "source": "Safer Care Victoria / Stillbirth CRE 'Movements Matter'; RANZCOG; Queensland Clinical Guideline",
   "tags": [
    "reduced-fetal-movements",
    "RFM",
    "CTG",
    "stillbirth",
    "same-day"
   ],
   "verified": true,
   "id": "obs-13",
   "title": "Reduced Fetal Movements",
   "subtitle": "Assess the same day with CTG, not a kick chart",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/a/a5/CTG_Output.jpg",
     "caption": "Cardiotocograph (CTG) — reassuring normal trace for reduced fetal movements",
     "alt": "Normal CTG trace with baseline 110–160 bpm, normal variability, accelerations present and no decelerations, used to assess fetal wellbeing after reduced fetal movements",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Anti-D: routine antenatal prophylaxis (28 & 34 weeks)",
   "subarea": "Preconception & antenatal care",
   "trap": "- **RAADP** in RhD-negative women = **625 IU IM at 28 weeks AND again at 34 weeks** (two doses) — trap is remembering only one\n- **Anti-D is for the unsensitised woman only**\n- If antibody screen already shows anti-D antibodies (sensitised/isoimmunised) -> prophylaxis is **useless**\n  - Answer becomes **fetal surveillance with MCA-PSV Dopplers** (>1.5 MoM = moderate-severe fetal anaemia), not more anti-D\n- New twist: **fetal RHD genotyping (cffDNA)** can spare anti-D if the fetus is RhD-negative",
   "whatFirst": "- Check the **antibody screen first**\n- Unsensitised RhD-neg -> give **RAADP at 28 & 34 wk**\n- Already sensitised -> refer for **MCA Doppler surveillance** (anti-D won't help)",
   "cutoffs": [
    "**625 IU IM at 28 weeks AND at 34 weeks**",
    "Only for RhD-negative, **unsensitised** women",
    "Sensitised -> **MCA-PSV >1.5 MoM** = moderate/severe fetal anaemia"
   ],
   "mcqTrap": "- Giving **anti-D to an already-alloimmunised woman** — useless; she needs MCA-Doppler surveillance\n- Giving only a **single 28-week dose** and forgetting the 34-week dose",
   "discriminator": "- **Unsensitised** = give prophylaxis (prevents sensitisation)\n- **Sensitised** = surveillance (MCA Doppler) — anti-D cannot un-sensitise",
   "mnemonic": "Anti-D is a PREVENTER not a TREATER: only works before antibodies form.",
   "source": "National Blood Authority / RANZCOG Guideline for the prophylactic use of Rh D immunoglobulin in pregnancy care, 2024",
   "tags": [
    "anti-D",
    "rhesus",
    "prophylaxis",
    "RAADP",
    "MCA-Doppler"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">RhD-neg woman: antibody screen</div><div class=\"gv-step\">No anti-D antibodies (unsensitised) -> 625 IU at 28 & 34 wk</div><div class=\"gv-step\">Anti-D antibodies present (sensitised) -> MCA-PSV Doppler surveillance</div></div>",
   "id": "obs-9",
   "title": "Routine Antenatal Anti-D Prophylaxis",
   "subtitle": "Two doses (28 and 34 wk); only for unsensitised women"
  },
  {
   "topic": "Routine antenatal screening bloods & schedule - the often-forgotten items",
   "subarea": "Preconception & antenatal care",
   "trap": "- **Booking bloods** include: FBC, blood group + antibody screen, ferritin, rubella & varicella immunity, hepatitis B, hepatitis C, HIV, syphilis, and MSU for asymptomatic bacteriuria\n- **Forgotten gotcha**: asymptomatic bacteriuria IS **treated in pregnancy** (unlike non-pregnant adults) — risk of pyelonephritis and preterm birth\n  - Trap distractor is 'no treatment, recheck'\n- **GBS screening** at ~35-37 weeks (or risk-based)\n- **OGTT** for GDM at 24-28 weeks\n- **Repeat antibody screen** at 28 weeks\n- **Hep B status** determines neonatal immunoglobulin + vaccine at birth",
   "whatFirst": "- Booking visit: **full screening panel + MSU**\n- Positive asymptomatic bacteriuria -> **TREAT** per sensitivities\n  - **Cephalexin** first-line; avoid nitrofurantoin near term\n  - Re-culture after treatment",
   "cutoffs": [
    "MSU asymptomatic bacteriuria: **TREAT in pregnancy**",
    "OGTT for GDM: **24-28 weeks**",
    "GBS screen: **35-37 weeks** (or risk-based)",
    "Antibody screen at **booking + 28 weeks**"
   ],
   "mcqTrap": "- 'Asymptomatic bacteriuria on booking MSU -> **no treatment, repeat in 4 weeks**' — **WRONG** in pregnancy\n  - Must treat (risk of pyelonephritis and preterm birth)",
   "discriminator": "- **Non-pregnant** adult with asymptomatic bacteriuria = don't treat\n- **Pregnant** = treat — the pregnancy flips the rule",
   "mnemonic": "In pregnancy, even SILENT bugs get treated.",
   "source": "RANZCOG Routine antenatal assessment; Therapeutic Guidelines (eTG, Antibiotic 2025) - UTI in pregnancy; Queensland Clinical Guidelines",
   "tags": [
    "antenatal-screening",
    "asymptomatic-bacteriuria",
    "booking-bloods",
    "GBS",
    "OGTT"
   ],
   "verified": true,
   "id": "obs-14",
   "title": "Routine Antenatal Booking Bloods",
   "subtitle": "Treat asymptomatic bacteriuria found on the booking MSU"
  },
  {
   "topic": "Symphysis-fundal height (SFH): the lag-triggers-USS rule",
   "subarea": "Preconception & antenatal care",
   "trap": "- Exam wants the **next step for 'fundus small for dates'**, not the diagnosis\n- Measure SFH from the **variable point (fundus) DOWN to the fixed point** (top of symphysis pubis), tape upside-down/blinded, single value, once per visit from **24 weeks**\n- SFH in cm should roughly **equal gestation in weeks**\n- A single SFH **>=3 cm below gestation**, or static/falling on the customised GROW chart, or plotting **<10th centile** = book a **growth-assessment ultrasound** (biometry + umbilical artery Doppler)\n- Do NOT just reassure, re-measure next month, or jump to delivery — the answer is **USS**",
   "whatFirst": "- Fundus small for dates -> **growth-assessment USS** (EFW + umbilical artery Doppler)\n  - NOT immediate delivery or watchful waiting",
   "discriminator": "- SFH discrepancy is a **screen that triggers imaging**; it is not itself a diagnosis of FGR\n- **Serial plotting on a customised chart** (not the absolute cm) doubles SGA detection",
   "cutoffs": [
    "Plot serially from **24 weeks**",
    "SFH (cm) **~= gestation (weeks)**",
    "**>=3 cm lag**, or static/falling, or <10th centile -> USS",
    "**Tape blinded/upside-down**, single measure per visit"
   ],
   "redFlags": "- **Static or reducing SFH** across visits\n- SFH plotting under the **10th customised centile**",
   "trapAnswer": "'Repeat SFH in 2-4 weeks' or 'reassure' - wrong; a single discordant measure already mandates ultrasound.",
   "mcqTrap": "- Choosing **reassurance/repeat measurement** instead of arranging an **ultrasound**",
   "mnemonic": "'Centimetres = weeks; out by 3, scan to see.'",
   "source": "RANZCOG / Safer Care Victoria fetal growth surveillance; KEMH (WA) Fundal Height guideline; Australian customised GROW/GAP charts (current)",
   "verified": true,
   "tags": [
    "obstetrics",
    "FGR",
    "screening",
    "antenatal"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>SFH finding</th><th>Action</th></tr><tr><td>cm within +/-3 of weeks, rising</td><td>Continue routine</td></tr><tr><td>>=3 cm below weeks, OR static/falling, OR &lt;10th centile</td><td>Growth USS + umbilical artery Doppler</td></tr></table>",
   "id": "obs-15",
   "title": "Symphysis-Fundal Height",
   "subtitle": "Lag from dates triggers an ultrasound, not a diagnosis",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Fundal_height.jpg/960px-Fundal_height.jpg",
     "caption": "Symphysis-fundal height measurement technique — tape from fundus to symphysis pubis",
     "alt": "Clinician measuring SFH with tape measure from the uterine fundus downward to the fixed point of the symphysis pubis with tape held upside-down",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Gestational_age_and_fundal_height.svg/960px-Gestational_age_and_fundal_height.svg.png",
     "caption": "SFH customised growth chart — lag triggering ultrasound referral",
     "alt": "Customised SFH growth chart showing serial measurements falling below the 10th centile, indicating small for gestational age requiring ultrasound biometry",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Drugs to AVOID in pregnancy",
   "subarea": "Preconception & antenatal care",
   "trap": "- Exam loves a 'safe' default that is actually **teratogenic**\n- **Avoid** in pregnancy:\n  - **ACEi/ARB** — renal dysgenesis, oligohydramnios (especially 2nd/3rd trimester)\n  - **Warfarin** — fetal warfarin syndrome, CNS bleeds\n  - **Sodium valproate** — NTD, lowest IQ, autism (worst antiepileptic)\n  - **Isotretinoin** — highly teratogenic\n  - **Tetracyclines** — tooth/bone damage (avoid after ~18 weeks)\n  - **Trimethoprim** — folate antagonist (avoid 1st trimester)\n  - **Nitrofurantoin** — neonatal haemolysis (avoid at term from ~36 weeks, and in G6PD)\n  - **Live vaccines**\n- **Cephalexin** is the safe default UTI antibiotic across pregnancy",
   "whatFirst": "- When asked the safe choice:\n  - **HTN** -> methyldopa / labetalol / nifedipine (not ACEi)\n  - **VTE** -> LMWH (not warfarin/DOAC)\n  - **UTI** -> cephalexin (not trimethoprim in T1 / not nitrofurantoin at term)",
   "cutoffs": [
    "**Trimethoprim**: avoid 1st trimester (folate antagonist)",
    "**Nitrofurantoin**: avoid from ~36 wk & in labour (neonatal haemolysis)",
    "**Tetracyclines**: avoid after ~18 wk",
    "**Valproate**: avoid in any woman of childbearing potential if possible"
   ],
   "mcqTrap": "- Prescribing **trimethoprim** for a 1st-trimester UTI (folate antagonist)\n- Prescribing **nitrofurantoin at 38 weeks** (neonatal haemolysis)\n  - **Cephalexin** is the answer\n- Continuing an **ACEi** in a newly pregnant hypertensive woman — switch to labetalol/methyldopa",
   "discriminator": "- **Trimethoprim** is dangerous **early** (folate antagonist, 1st trimester)\n- **Nitrofurantoin** is dangerous **late** (haemolysis at term)\n  - Do not swap them",
   "mnemonic": "'We All Value Infant Teratogen Talk Now' = Warfarin, ACEi/ARB, Valproate, Isotretinoin, Tetracyclines, Trimethoprim(early), Nitrofurantoin(late).",
   "redFlags": "- Newly pregnant woman still on **ACEi, valproate, isotretinoin or warfarin** — urgent medication review/switch",
   "source": "Therapeutic Guidelines (eTG, Antibiotic 2025) - UTI in pregnancy; TGA Australian categorisation of drugs in pregnancy",
   "tags": [
    "teratogen",
    "prescribing",
    "antibiotics",
    "trimethoprim",
    "nitrofurantoin"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Avoid</th><th>Harm</th><th>Safe alternative</th></tr></thead><tbody><tr><td>ACEi/ARB</td><td>Renal dysgenesis, oligohydramnios</td><td>Labetalol/methyldopa/nifedipine</td></tr><tr><td>Warfarin/DOAC</td><td>Fetal warfarin syndrome / unknown</td><td>LMWH</td></tr><tr><td>Trimethoprim (T1)</td><td>Folate antagonist -> NTD</td><td>Cephalexin</td></tr><tr><td>Nitrofurantoin (term)</td><td>Neonatal haemolysis</td><td>Cephalexin</td></tr></tbody></table>",
   "id": "obs-3",
   "title": "Teratogenic Drugs to Avoid",
   "subtitle": "ACEi, warfarin and valproate are not safe defaults",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Spina-bifida.jpg/960px-Spina-bifida.jpg",
     "caption": "Valproate teratogenicity — spina bifida / neural tube defect",
     "alt": "Lumbar myelomeningocele illustrating neural tube defect associated with sodium valproate exposure in the first trimester",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "TORCH / congenital infections: which test/action for which exposure",
   "subarea": "Preconception & antenatal care",
   "trap": "- 'Rash/exposure in pregnancy — what next?' hinges on **matching infection to action**\n- **CMV** = the commonest congenital infection (leading non-genetic cause of sensorineural deafness)\n- **Parvovirus B19** (slapped-cheek/fifth disease) -> fetal anaemia and hydrops -> monitor with **MCA-PSV Doppler** +/- intrauterine transfusion\n- **Toxoplasma** (cat litter/undercooked meat) -> **spiramycin**; add avoidance counselling\n- **Listeria** (soft/unpasteurised cheese, deli meats, pate) -> the **food-avoidance** answer\n- **Syphilis** -> **benzathine penicillin** (only adequate treatment in pregnancy)\n- **Rubella/varicella vaccines are LIVE** -> contraindicated in pregnancy; give postnatally",
   "whatFirst": "- Match the exposure:\n  - **Parvovirus** -> MCA-PSV for anaemia\n  - **Toxoplasma** -> spiramycin\n  - **Syphilis** -> benzathine penicillin\n  - **Live vaccines** (rubella/varicella) -> defer to postpartum",
   "discriminator": "- **Parvovirus and alloimmunisation** share the MCA-PSV anaemia pathway\n- **CMV** = most common congenital infection\n- **Listeria** = the food-avoidance answer",
   "cutoffs": [
    "**CMV** = commonest congenital infection",
    "**Parvovirus B19** -> MCA-PSV Doppler for fetal anaemia/hydrops",
    "**Toxoplasma** -> spiramycin (cat litter/raw meat avoidance)",
    "**Listeria** -> avoid soft cheese/deli meat/pate",
    "**Syphilis** -> benzathine penicillin",
    "**Rubella/varicella vaccines**: LIVE — give postnatally, not in pregnancy"
   ],
   "redFlags": "- **Fetal hydrops** after parvovirus exposure\n- Non-immune pregnant contact of **varicella/rubella**",
   "trapAnswer": "Giving MMR or varicella vaccine DURING pregnancy (live - contraindicated), or forgetting MCA-PSV for parvovirus.",
   "mcqTrap": "- Selecting a **live vaccine** in pregnancy\n- Missing that **parvovirus** is monitored like alloimmunisation (**MCA-PSV**)",
   "mnemonic": "Parvovirus = Pale baby (anaemia, MCA-PSV). Listeria = soft cheese & deli. CMV = Commonest.",
   "source": "RANZCOG Pre-Pregnancy & Pregnancy Vaccinations (C-Obs 44); Australian Immunisation Handbook; eTG (current)",
   "verified": true,
   "tags": [
    "obstetrics",
    "TORCH",
    "congenital infection",
    "vaccination"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Exposure</th><th>Key action</th></tr><tr><td>Parvovirus B19</td><td>MCA-PSV Doppler (anaemia/hydrops)</td></tr><tr><td>CMV</td><td>Commonest; counsel hygiene</td></tr><tr><td>Toxoplasma</td><td>Spiramycin; avoid cat litter/raw meat</td></tr><tr><td>Listeria</td><td>Avoid soft cheese/deli/pate</td></tr><tr><td>Syphilis</td><td>Benzathine penicillin</td></tr><tr><td>Rubella/varicella</td><td>Live vaccine -> postnatal only</td></tr></table>",
   "id": "obs-17",
   "title": "TORCH Congenital Infections",
   "subtitle": "CMV commonest; parvovirus B19 causes fetal anaemia/hydrops",
   "images": [
    {
     "src": "assets/img/paediatrics_photo_parvovirus_slapped_cheek_fresh.jpg",
     "alt": "Slapped-cheek facial erythema of parvovirus B19 infection",
     "credit": "Sandyjameslord, Wikimedia Commons, CC BY-SA 4.0"
    },
    {
     "src": "assets/img/paediatrics_derm_slapped_cheek_parvovirus_01.jpg",
     "caption": "Parvovirus B19 - slapped cheek rash (erythema infectiosum)",
     "alt": "Confluent bright erythema of both cheeks with circumoral pallor — the classic slapped-cheek appearance of parvovirus B19 (erythema infectiosum)",
     "credit": "Gzzz, Wikimedia Commons, CC BY-SA 4.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Infant_with_skin_lesions_from_congenital_rubella.jpg",
     "caption": "Congenital CMV - blueberry muffin rash (purpuric petechiae in neonate)",
     "alt": "Widespread petechiae and purpuric macules ('blueberry muffin' rash) on a neonate — associated with congenital CMV and other TORCH infections causing extramedullary haematopoiesis",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/1/14/Newborn_infant_with_severe_hemolytic_disease_%28erythroblastosis_foetalis%29_resulting_in_hydrops_foetalis.png",
     "caption": "Fetal hydrops - ultrasound showing ascites, skin oedema and pleural effusion",
     "alt": "Fetal hydrops on ultrasound — skin oedema, ascites and pleural effusion caused by severe fetal anaemia from parvovirus B19 infection",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Vaccines IN pregnancy - dTpa and influenza (and what's contraindicated)",
   "subarea": "Preconception & antenatal care",
   "trap": "- Two vaccines are **recommended in every pregnancy**:\n  - **dTpa** (pertussis) optimally at **20-32 weeks each pregnancy** — even closely spaced ones\n    - Purpose: transplacental antibody to protect the newborn, not the mother\n    - If missed by 32 weeks: still give any time **up to delivery** (though <2 weeks before birth may not fully protect newborn)\n  - **Inactivated influenza** at any trimester\n- **COVID and maternal RSV** are also recommended\n- **LIVE vaccines are contraindicated** in pregnancy: MMR, varicella, live zoster — give postpartum/preconception",
   "whatFirst": "- Offer **dTpa 20-32 weeks** (give later, up to delivery, if missed)\n- Offer **flu vaccine** at the visit regardless of trimester\n- **Defer MMR/varicella** to postpartum",
   "cutoffs": [
    "**dTpa**: single dose **each pregnancy**, optimal 20-32 wk",
    "**dTpa if missed**: any time up to delivery",
    "**Influenza**: any trimester",
    "**MMR, varicella, live zoster**: CONTRAINDICATED"
   ],
   "mcqTrap": "- 'She had dTpa last pregnancy 18 months ago, so **doesn't need it**' — **WRONG**, given every pregnancy\n- Offering **MMR** to a non-immune pregnant woman — contraindicated (live); give **postpartum**",
   "discriminator": "- **Inactivated vaccines** (dTpa, flu, COVID, RSV) = recommended\n- **Live vaccines** (MMR, varicella, BCG, live zoster, yellow fever) = avoid in pregnancy",
   "mnemonic": "Live = no Life in womb: MMR + Varicella are the live two to remember as contraindicated.",
   "source": "Australian Immunisation Handbook - Vaccination for women planning pregnancy, pregnant or breastfeeding (online edition, current 2026)",
   "tags": [
    "vaccines",
    "dTpa",
    "pertussis",
    "influenza",
    "live-vaccine"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">dTpa 20-32 wk EACH preg</span><span class=\"gv-pill\">Influenza ANY trimester</span><span class=\"gv-pill\">COVID/RSV recommended</span><span class=\"gv-pill\">MMR / varicella CONTRAINDICATED</span></div>",
   "id": "obs-4",
   "title": "Vaccines in Pregnancy",
   "subtitle": "dTpa every pregnancy at 20-32 weeks; live vaccines banned"
  },
  {
   "topic": "Anaemia in pregnancy — trimester-specific Hb thresholds + ferritin",
   "subarea": "Medical & complicated pregnancy",
   "trap": "- The diagnostic Hb cut-off **changes by trimester** due to physiological haemodilution\n  - **T1**: anaemia = Hb **<110 g/L**\n  - **T2/T3**: anaemia = Hb **<105 g/L**\n  - Using a flat non-pregnant <120 over-diagnoses; using <110 throughout under-diagnoses in T2/T3\n- **Iron deficiency** is defined by **ferritin <30 ug/L**\n  - Ferritin falls **before Hb** — a normal Hb with low ferritin still warrants iron\n- FBC + ferritin checked at **booking** and again **~28 weeks**",
   "source": "Australian Pregnancy Care Guidelines (Dept of Health, ALEC); RACGP 'Anaemia in pregnancy'; WHO-derived thresholds",
   "discriminator": "- **Microcytic + low ferritin** = iron deficiency (commonest)\n- Normal-range Hb with **normal ferritin** in T2 = physiological haemodilution, not true iron-deficiency anaemia\n- **Macrocytic** -> B12/folate",
   "whatFirst": "- Check **ferritin alongside Hb** — treat iron deficiency on **ferritin** even if Hb is still 'normal'",
   "redFlags": "- **Hb <70 g/L**, or symptomatic anaemia near term -> consider IV iron / transfusion / haematology",
   "mcqTrap": "- 'Hb **108 g/L at 30 weeks** = anaemia' is **WRONG** (T2/T3 cut-off is <105)\n- '**Normal Hb so no iron needed**' is WRONG if ferritin is low",
   "mnemonic": "First trimester ONE-TEN, later trimesters ONE-OH-FIVE (110 -> 105). Ferritin falls First.",
   "cutoffs": [
    "T1 anaemia: Hb **<110 g/L**",
    "T2/T3 anaemia: Hb **<105 g/L**",
    "Iron deficiency: ferritin **<30 ug/L**",
    "Screen FBC/ferritin **booking + ~28 wk**"
   ],
   "verified": true,
   "tags": [
    "anaemia",
    "haemoglobin",
    "ferritin",
    "iron"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Timing</th><th>Anaemia if Hb &lt;</th></tr></thead><tbody><tr><td>1st trimester</td><td>110 g/L</td></tr><tr><td>2nd / 3rd trimester</td><td>105 g/L</td></tr><tr><td>Iron deficiency (any)</td><td>ferritin &lt;30 ug/L</td></tr></tbody></table>",
   "id": "obs-24",
   "title": "Anaemia in Pregnancy",
   "subtitle": "Hb cut-off changes: <110 T1, <105 T2/T3",
   "images": [
    {
     "src": "assets/img/dermatology_photo_koilonychia_iron_fresh.jpg",
     "caption": "Koilonychia (spoon nails) - sign of iron deficiency",
     "alt": "Spoon-shaped concave nails with everted edges (koilonychia) — a clinical sign of iron deficiency",
     "credit": "CHeitz, Wikimedia Commons, CC BY 2.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Iron_deficiency_Anaemia.jpg/960px-Iron_deficiency_Anaemia.jpg",
     "caption": "Iron deficiency anaemia - hypochromic microcytic red cells on blood film",
     "alt": "Hypochromic microcytic red cells with pencil cells and anisocytosis — the peripheral blood film appearance of iron deficiency anaemia, the commonest cause of anaemia in pregnancy",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Aspirin for pre-eclampsia prevention — the diabetic/obese overlap (and the <16 wk window)",
   "subarea": "Medical & complicated pregnancy",
   "trap": "- Almost every 'medical disorder' antenatal woman qualifies for **low-dose aspirin pre-eclampsia prophylaxis**\n  - Indications: pre-existing **diabetes**, **chronic hypertension**, **renal disease**, **prior pre-eclampsia**, **APS**, **multiple pregnancy**, **raised BMI**\n- Dose: **100-150 mg nocte**\n- **Critical timing**: start **before 16 weeks** (ideally 12-16 wk) — starting later loses most of the benefit\n  - For pre-existing **diabetes**: ADIPS specifies offering aspirin from **12 weeks**\n- The trap: starting aspirin at ~24 weeks 'because BP is creeping up' — **too late** for prevention\n- **SOMANZ** advises continuing aspirin to at least **36 weeks**",
   "source": "SOMANZ Hypertension in Pregnancy Guideline 2023; ADIPS 2020; RANZCOG C-Obs 49",
   "discriminator": "- Aspirin is **prevention** (start <16 wk in at-risk)\n- Once pre-eclampsia is **established**, aspirin is not the treatment — **antihypertensives, MgSO4 and timing of delivery** are",
   "whatFirst": "- Identify high-risk at **booking** and start aspirin **<16 wk** (from 12 wk for pre-existing diabetes)",
   "redFlags": "- **Multiple high-risk factors** -> definitely aspirin\n- **Missed window** (>16-20 wk) -> reduced efficacy",
   "mcqTrap": "- 'Start aspirin at **22 weeks** for pre-eclampsia prevention' is **WRONG** — the preventive window is **<16 weeks**",
   "mnemonic": "Aspirin before SIXTEEN, or the benefit's not seen.",
   "cutoffs": [
    "Aspirin **100-150 mg nocte**",
    "Start **<16 wk** (ideally 12-16 wk)",
    "From **12 wk** if pre-existing diabetes",
    "Continue to at least **36 wk**"
   ],
   "verified": true,
   "tags": [
    "aspirin",
    "pre-eclampsia",
    "prevention",
    "diabetes",
    "timing"
   ],
   "id": "obs-29",
   "title": "Aspirin for Pre-eclampsia Prevention",
   "subtitle": "Start before 16 weeks; almost every medical disorder qualifies"
  },
  {
   "topic": "Asymptomatic bacteriuria & pyelonephritis in pregnancy",
   "subarea": "Medical & complicated pregnancy",
   "trap": "- Unlike non-pregnant adults, in pregnancy you **SCREEN and TREAT** asymptomatic bacteriuria\n  - Non-pregnant adult: do NOT treat asymptomatic bacteriuria\n- Untreated asymptomatic bacteriuria progresses to **pyelonephritis** and raises **preterm-birth risk**\n- After treatment, perform a **test-of-cure**\n- **Nitrofurantoin**: safe mid-pregnancy but AVOID at **>=36 wk** / labour\n  - Risk: **neonatal haemolysis**\n- **Trimethoprim**: AVOID in the **first trimester**\n  - Mechanism: folate antagonist\n- **Pyelonephritis in pregnancy = admit** for IV antibiotics; do not manage as outpatient",
   "whatFirst": "- Positive asymptomatic-bacteriuria culture -> **TREAT** (then test of cure)\n- Pyelonephritis -> **ADMIT** for IV antibiotics",
   "discriminator": "- **Pregnant**: treat asymptomatic bacteriuria\n- **Non-pregnant adult**: do NOT treat asymptomatic bacteriuria\n- **Agent choice is gestation-dependent**\n  - Nitrofurantoin: avoid >=36 wk\n  - Trimethoprim: avoid 1st trimester",
   "cutoffs": [
    "Screen with **early-pregnancy** urine MCS",
    "Nitrofurantoin: avoid **>=36 wk** / term / labour",
    "Trimethoprim: avoid in **1st trimester** (folate antagonist)",
    "Pyelonephritis -> **IV antibiotics** + admission"
   ],
   "redFlags": "- Fever, loin pain, vomiting, rigors in a pregnant woman = **pyelonephritis**\n- Action: **admit + IV antibiotics**\n- Watch for **preterm labour** and **sepsis**",
   "trapAnswer": "'No treatment needed - asymptomatic' (correct for non-pregnant, WRONG in pregnancy), or nitrofurantoin at term, or trimethoprim in T1.",
   "mcqTrap": "- Applying the non-pregnant **'don't treat asymptomatic bacteriuria'** rule to a pregnant patient\n- Choosing a **trimester-inappropriate antibiotic** (nitrofurantoin at term, or trimethoprim in 1st trimester)",
   "mnemonic": "Nitrofurantoin Not Near term; Trimethoprim Terminated in Trimester one.",
   "source": "Therapeutic Guidelines (eTG) antibiotic; Australian antenatal care guidelines (current)",
   "verified": true,
   "tags": [
    "obstetrics",
    "UTI",
    "bacteriuria",
    "prescribing"
   ],
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Pregnant: TREAT asx bacteriuria</span><span class=\"gv-pill\">Nitrofurantoin: avoid &gt;=36 wk</span><span class=\"gv-pill\">Trimethoprim: avoid T1</span><span class=\"gv-pill\">Pyelonephritis: IV + admit</span></div>",
   "id": "obs-35",
   "title": "Asymptomatic Bacteriuria in Pregnancy",
   "subtitle": "Screen and treat it, unlike in non-pregnant adults"
  },
  {
   "topic": "Cardiac disease in pregnancy — the contraindicated drugs & danger lesions",
   "subarea": "Medical & complicated pregnancy",
   "trap": "- **ACE-inhibitors/ARBs**: cause fetal renal damage, oligohydramnios, skull defects — STOP\n- **Spironolactone, statins, amiodarone, warfarin**: avoid in pregnancy\n  - Warfarin exception: mechanical valves (specialist decision)\n- Safe alternatives: **labetalol, methyldopa, nifedipine, hydralazine, metoprolol, digoxin, LMWH**\n- Haemodynamic stress peaks not only in labour but in **early postpartum** (autotransfusion from contracting uterus)\n  - Watch for **pulmonary oedema** in this window\n- Lesions tolerating pregnancy **POORLY** (may advise against pregnancy):\n  - **Pulmonary hypertension / Eisenmenger**\n  - **Severe aortic / mitral stenosis**\n  - **Marfan with dilated aortic root**\n  - **Severe LV dysfunction**",
   "source": "RANZCOG; SOMANZ; eTG (cardiac disease in pregnancy); modified WHO / ESC 2018 cardiovascular-in-pregnancy classification",
   "discriminator": "- Normal pregnancy breathlessness: exertional, no orthopnoea, no signs of failure\n- **Cardiac disease**: orthopnoea, PND, raised JVP, new murmur, desaturation, or signs of failure\n  - These features point to pathology, not physiology",
   "whatFirst": "- **Pre-pregnancy counselling** + switch off teratogenic cardiac drugs before conception\n- Stop: **ACEi, ARB, statin, amiodarone, spironolactone**\n- Start safe alternatives: labetalol / methyldopa / nifedipine",
   "redFlags": "- **Pulmonary hypertension / Eisenmenger** — high maternal mortality\n- **Severe stenotic lesions** (aortic or mitral)\n- **Marfan aortic root >4–4.5 cm** — high maternal mortality\n- These require MDT/specialist care; may advise **against pregnancy**",
   "mcqTrap": "- '**Continue ACE inhibitor**' in a pregnant cardiac patient is WRONG — teratogenic\n- '**Start a statin**' for a pregnant cardiac patient is WRONG\n- Switch to **labetalol / methyldopa / nifedipine**",
   "mnemonic": "Stop the 'ASSAW' drugs: ACEi/ARB, Spironolactone, Statin, Amiodarone, Warfarin (valve-exception). Danger lesions = 'PH, tight valves, Marfan'.",
   "cutoffs": [
    "Severe LV dysfunction / **EF <30%** high risk",
    "Marfan aortic root **>4–4.5 cm** high risk",
    "**Early postpartum** autotransfusion = peak decompensation risk"
   ],
   "verified": false,
   "tags": [
    "cardiac",
    "ACE-inhibitor",
    "contraindicated-drugs",
    "pulmonary-hypertension"
   ],
   "id": "obs-27",
   "title": "Cardiac Disease in Pregnancy",
   "subtitle": "Stop ACEi/ARB, statins, amiodarone, spironolactone"
  },
  {
   "topic": "FGR vs SGA, umbilical artery Doppler & end-diastolic flow as delivery trigger",
   "subarea": "Medical & complicated pregnancy",
   "trap": "- **SGA** = EFW or AC <10th centile but OTHERWISE WELL\n  - Normal Doppler, normal growth velocity; often constitutionally small but healthy\n- **FGR** = pathological subset: small PLUS at least one of:\n  - Abnormal umbilical artery Doppler\n  - Slowing / static growth velocity\n  - Oligohydramnios\n- Doppler progression is the **timed delivery trigger**:\n  - Raised UA **pulsatility index** (earliest)\n  - **Absent end-diastolic flow (AEDF)**\n  - **Reversed end-diastolic flow (REDF)** (most severe)\n- Deliver **AEDF by ~34 weeks**\n- Deliver **REDF by ~32 weeks**\n- If <30–32 wk: give **antenatal corticosteroids + MgSO4** for neuroprotection\n- **Abnormal ductus venosus a-wave** = trigger for even earlier delivery\n- **REDF is emergency-grade** — NOT 'repeat in a week'",
   "whatFirst": "- **Reversed end-diastolic flow** -> plan DELIVERY\n- Do NOT defer surveillance\n- Ensure **steroids + MgSO4** cover if preterm",
   "discriminator": "- Small + **normal** Doppler/velocity = **SGA** (monitor)\n- Small + **abnormal** Doppler/velocity = **FGR** (escalate)\n- Severity: **REDF** outranks **AEDF** outranks raised PI",
   "cutoffs": [
    "SGA: EFW/AC **<10th centile**, well",
    "FGR: small + **abnormal UA Doppler** / static growth / oligo",
    "AEDF -> deliver by **~34 wk**",
    "REDF -> deliver by **~32 wk**",
    "Steroids + MgSO4 neuroprotection if **<30–32 wk**"
   ],
   "redFlags": "- **Reversed end-diastolic flow**\n- **Abnormal ductus venosus a-wave**\n- Abnormal **CTG / STV** in a growth-restricted fetus",
   "trapAnswer": "Treating an isolated <10th-centile fetus with normal Doppler as FGR needing delivery - it is SGA, monitor. Or 'rescan in 1 week' for REDF - too late.",
   "mcqTrap": "- **Conflating SGA with FGR** — they are not synonymous\n- **Under-escalating reversed end-diastolic flow** (treating it as 'watch and wait')",
   "mnemonic": "PI up -> Absent -> Reversed = worse and worse; 'Reversed = remove' (deliver).",
   "source": "ISUOG FGR guideline (Australian-aligned); RANZCOG/Safer Care Victoria FGR surveillance (current)",
   "verified": true,
   "tags": [
    "obstetrics",
    "FGR",
    "SGA",
    "Doppler"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Raised UA PI</div><div class=\"gv-step\">Absent EDF -> deliver ~34wk</div><div class=\"gv-step\">Reversed EDF -> deliver ~32wk</div></div>",
   "id": "obs-32",
   "title": "FGR versus SGA",
   "subtitle": "Absent/reversed end-diastolic flow triggers delivery"
  },
  {
   "topic": "GDM diagnostic cut-offs (75g OGTT) — the numbers AND the 2025 change",
   "subarea": "Medical & complicated pregnancy",
   "trap": "- Classic **ADIPS/IADPSG** cut-offs: fasting **>=5.1**, 1h **>=10.0**, 2h **>=8.5** mmol/L\n- **ANY ONE** value met-or-exceeded = diagnostic\n  - Do NOT require two abnormal values\n  - Do NOT require a confirmatory repeat\n- **ADIPS 2025 RAISES** thresholds to fasting **>=5.3**, 1h **>=10.6**, 2h **>=9.0** mmol/L\n  - Not yet universally implemented in Australian labs/exams\n  - For MCQs: use **5.1/10.0/8.5** unless stem explicitly invokes ADIPS 2025\n- Common errors:\n  - Confusing the **1h (10.0)** and **2h (8.5)** values\n  - Calling a single abnormal value 'borderline, repeat the test' — a single value at/over cut-off **IS diagnostic**",
   "source": "ADIPS/IADPSG criteria (Qld Clinical Guideline GDM, MN21.33-V2-R26); ADIPS 2025 Consensus recommendations for screening/diagnosis/classification of GDM (MJA 2025;223:3)",
   "discriminator": "- **GDM**: any single value at/over cut-off on 75g OGTT at 24–28 wk\n- **Overt diabetes in pregnancy**: early fasting **>=7.0**, HbA1c **>=6.5%**, or random **>=11.1**\n  - Overt is managed as pre-existing diabetes, NOT GDM",
   "whatFirst": "- A **SINGLE abnormal OGTT value** confirms GDM\n- Do not repeat or require a second value",
   "redFlags": "- Early fasting **>=7.0** mmol/L\n- **HbA1c >=6.5%**\n- Random **>=11.1** mmol/L\n- These = treat as **overt (pre-existing) diabetes**, not GDM",
   "mcqTrap": "- 'Fasting 5.4, 1h normal, 2h normal — **repeat OGTT**' is WRONG\n  - One abnormal value is diagnostic (under 5.1 criteria)\n- Requiring **two abnormal values** is also wrong",
   "mnemonic": "Classic cut-offs climb then dip: 5.1 -> 10.0 -> 8.5 ('five-one, ten, eight-five'). ADIPS 2025 = each nudged up: 5.3 / 10.6 / 9.0.",
   "cutoffs": [
    "Classic fasting **>=5.1** mmol/L",
    "Classic 1h **>=10.0** mmol/L",
    "Classic 2h **>=8.5** mmol/L",
    "ADIPS 2025: **5.3 / 10.6 / 9.0**",
    "**ANY single value** = diagnostic"
   ],
   "verified": true,
   "tags": [
    "GDM",
    "OGTT",
    "diagnosis",
    "ADIPS",
    "changing-guideline"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>75g OGTT</th><th>Classic (>=)</th><th>ADIPS 2025 (>=)</th></tr></thead><tbody><tr><td>Fasting</td><td>5.1</td><td>5.3</td></tr><tr><td>1 hour</td><td>10.0</td><td>10.6</td></tr><tr><td>2 hour</td><td>8.5</td><td>9.0</td></tr></tbody></table>",
   "id": "obs-19",
   "title": "GDM Diagnostic Cut-offs (75g OGTT)",
   "subtitle": "Any ONE value met is diagnostic; no repeat needed"
  },
  {
   "topic": "GDM management targets and step-up to pharmacotherapy",
   "subarea": "Medical & complicated pregnancy",
   "trap": "- First-line is ALWAYS **diet/exercise (lifestyle)** with ~1–2 weeks of glucose monitoring\n- If targets not met -> **insulin** is the preferred pharmacotherapy\n- **Metformin** is an option but **CROSSES THE PLACENTA**\n  - Counsel regarding uncertain long-term offspring data\n- Traps:\n  - **Jumping straight to insulin** before a lifestyle trial\n  - Refusing metformin on a false belief it is **contraindicated** (it is not)\n- Two legitimate Australian **capillary target sets**:\n  - Australian Prescriber: fasting **<5.3**, 1h **<7.8**, 2h **<6.7** mmol/L\n  - TARGET-trial tight set: fasting **<=5.0**, 1h **<=7.4**, 2h **<6.7** mmol/L\n  - A '1h 7.5' could be on-target or over-target depending on which set the stem uses\n- These capillary **TREATMENT targets** are NOT the venous **OGTT DIAGNOSTIC** numbers",
   "source": "Australian Prescriber 'Gestational diabetes: update on screening, diagnosis and maternal management' (2023, eTG-aligned); TARGET trial (NZ/Aus); Qld Clinical Guideline GDM",
   "discriminator": "- **Glycaemic TARGETS** (capillary treatment goals ~fasting <5.3 / 1h <7.8 / 2h <6.7) are NOT the venous **DIAGNOSTIC OGTT cut-offs** (5.1/10.0/8.5)\n- Mixing them up is the **classic error**",
   "whatFirst": "- **Lifestyle + glucose monitoring FIRST**\n- Escalate to **insulin** (preferred) if targets missed",
   "redFlags": "- **Persistent fasting hyperglycaemia**\n- Fetal **AC >95th centile** or **polyhydramnios**\n- These indicate: escalate pharmacotherapy",
   "mcqTrap": "- '**Newly diagnosed GDM, start insulin**' is WRONG as first step\n  - Unless markedly high or overt, trial diet/exercise first\n- '**Metformin contraindicated in pregnancy**' is also WRONG",
   "mnemonic": "Capillary targets are LOWER than diagnostic numbers; the common set is '5-3, 7-8, 6-7' (Aus Prescriber).",
   "cutoffs": [
    "Fasting **<5.3** (TARGET tight **<=5.0**) mmol/L",
    "1h post-prandial **<7.8** (TARGET tight **<=7.4**) mmol/L",
    "2h post-prandial **<6.7** mmol/L",
    "**Insulin** = preferred drug; metformin **crosses placenta**"
   ],
   "verified": true,
   "tags": [
    "GDM",
    "management",
    "insulin",
    "metformin",
    "targets"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Diet + exercise + BGL monitor</div><div class=\"gv-step\">Targets missed?</div><div class=\"gv-step\">Insulin (preferred) +/- metformin</div></div>",
   "id": "obs-21",
   "title": "GDM Management & Pharmacotherapy",
   "subtitle": "Insulin is preferred; metformin crosses the placenta"
  },
  {
   "topic": "GDM screening — who gets screened early vs at 24-28 weeks",
   "subarea": "Medical & complicated pregnancy",
   "trap": "- Universal screen: **75g OGTT at 24–28 weeks**\n- **High-risk women** get EARLY testing:\n  - Prior GDM, raised BMI, prior macrosomia, PCOS, high-risk ethnicity, FHx, age, prior poor outcome, elevated early HbA1c\n  - ADIPS 2025: before **20 weeks**, ideally **10–14 weeks**\n- Critical catch: an early-pregnancy OGTT that is **NORMAL must still be REPEATED at 24–28 weeks**\n  - Early-normal does NOT exclude later GDM\n- Many clinicians **drop the repeat** — this is the trap",
   "source": "ADIPS 2025 Consensus (MJA 2025;223:3); Qld Clinical Guideline GDM (MN21.33)",
   "discriminator": "- Early test markedly abnormal (high fasting/HbA1c) -> think **overt diabetes**\n- Early test **NEGATIVE** -> still **re-test at 24–28 wk**",
   "whatFirst": "- **Risk-stratify at booking**\n- If high-risk: test early (**ideally 10–14 wk**) AND again at **24–28 wk** if the early test is normal",
   "mcqTrap": "- '**High-risk woman, normal early OGTT, no further testing needed**' is WRONG\n- Must **repeat at 24–28 weeks**",
   "mnemonic": "Early screen is a SCREEN not a CLEAR — normal early still needs the 24-28 wk repeat.",
   "cutoffs": [
    "Universal: 75g OGTT **24–28 wk**",
    "High-risk: early test, **before 20 wk** (ideally 10–14 wk)",
    "Normal early test -> **repeat at 24–28 wk**"
   ],
   "verified": true,
   "tags": [
    "GDM",
    "screening",
    "ADIPS"
   ],
   "id": "obs-20",
   "title": "GDM Screening Timing",
   "subtitle": "High-risk = test early; universal OGTT at 24-28 weeks"
  },
  {
   "topic": "Hyperemesis gravidarum: thiamine before dextrose, antiemetic ladder",
   "subarea": "Medical & complicated pregnancy",
   "trap": "- **HG** (vs simple morning sickness) = persistent vomiting PLUS:\n  - **Weight loss >5%**\n  - Dehydration + ketosis\n  - **Electrolyte derangement**: hypokalaemia, hyponatraemia, hypochloraemic metabolic alkalosis\n- **LETHAL GOTCHA**: give **THIAMINE BEFORE any glucose/dextrose infusion**\n  - Dextrose without thiamine in a malnourished vomiting woman precipitates **Wernicke's encephalopathy**\n- Antiemetic ladder (all pregnancy-appropriate):\n  - **Pyridoxine** (+/- doxylamine) first\n  - Then: **metoclopramide** or prochlorperazine or promethazine\n  - Then: **ondansetron**\n  - Then: **corticosteroids** (refractory)\n- Rehydrate with **normal saline + potassium**, NOT glucose-only fluids",
   "whatFirst": "- **Thiamine BEFORE dextrose**\n- Rehydrate with **normal saline + K+**\n- Start the antiemetic ladder",
   "discriminator": "- **HG**: weight loss + ketosis + electrolyte derangement\n- **Morning sickness**: no metabolic disturbance\n- **Wernicke's** is precipitated by giving **glucose without thiamine**",
   "cutoffs": [
    "Weight loss **>5%** + ketonuria + electrolyte derangement",
    "**Thiamine BEFORE** any dextrose",
    "Ladder: **pyridoxine** +/- doxylamine -> metoclopramide/prochlorperazine/promethazine -> ondansetron -> steroids",
    "Rehydrate with **normal saline + KCl**"
   ],
   "redFlags": "- Confusion, ataxia, ophthalmoplegia after dextrose = **Wernicke's encephalopathy**\n- **Severe hypokalaemia**",
   "trapAnswer": "'Start IV dextrose for rehydration' first - precipitates Wernicke's; glucose-only fluid is wrong.",
   "mcqTrap": "- Giving **dextrose/glucose before thiamine**\n- Using **glucose-containing fluid** as the resuscitation fluid",
   "mnemonic": "Thiamine before the sugar; saline, not dextrose.",
   "source": "SOMANZ 2019 Nausea & Vomiting in Pregnancy / HG guideline (current)",
   "verified": true,
   "tags": [
    "obstetrics",
    "hyperemesis",
    "Wernicke",
    "antiemetics"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Thiamine FIRST</div><div class=\"gv-step\">Normal saline + K+</div><div class=\"gv-step\">Pyridoxine +/- doxylamine</div><div class=\"gv-step\">Metoclopramide / prochlorperazine</div><div class=\"gv-step\">Ondansetron -> steroids</div></div>",
   "id": "obs-36",
   "title": "Hyperemesis Gravidarum",
   "subtitle": "Thiamine BEFORE any dextrose to prevent Wernicke's"
  },
  {
   "topic": "Macrosomia & neonatal hypoglycaemia in the diabetic pregnancy",
   "subarea": "Medical & complicated pregnancy",
   "trap": "- Neonate of a diabetic mother needs **early feeding + scheduled BGL monitoring** after birth\n  - Do NOT apply a 'well baby, no checks' approach\n- Mechanism: fetal **hyperinsulinaemia** keeps driving glucose down after cord clamping\n- Also watch for:\n  - **Polycythaemia**\n  - **Hypocalcaemia**\n  - **Jaundice**\n  - **RDS**\n  - Later **T2DM risk**\n- Trap: assuming a **vigorous-looking macrosomic baby** does not need glucose surveillance",
   "source": "Qld Clinical Guidelines (Newborn hypoglycaemia; GDM); Safer Care Victoria neonatal hypoglycaemia",
   "discriminator": "- **Diabetes-driven macrosomia**: symmetrically large + organomegaly + maternal hyperglycaemia\n- **Constitutionally large baby**: no maternal hyperglycaemia, normal neonatal BGL course",
   "whatFirst": "- For the infant of a diabetic mother: **early feed + scheduled BGL monitoring**\n- Do NOT skip glucose checks",
   "redFlags": "- Neonatal BGL **<2.6 mmol/L** (Australian action threshold)\n- Features: jittery, poor feeding, **seizures**",
   "mcqTrap": "- '**Macrosomic infant of GDM mother, feeding well, no glucose monitoring required**' is WRONG\n- These babies need **BGL surveillance** for hypoglycaemia",
   "mnemonic": "Big baby, low sugar: insulin made it grow, insulin makes it crash.",
   "cutoffs": [
    "Neonatal hypoglycaemia action **<2.6 mmol/L**",
    "Macrosomia **>4.0–4.5 kg** / AC >95th centile"
   ],
   "verified": true,
   "tags": [
    "GDM",
    "macrosomia",
    "neonatal-hypoglycaemia"
   ],
   "id": "obs-22",
   "title": "Neonatal Hypoglycaemia of the Diabetic Mother",
   "subtitle": "Early feed plus scheduled BGLs, not a 'well baby'"
  },
  {
   "topic": "Obesity / raised BMI in pregnancy — the bundle of extra steps",
   "subarea": "Medical & complicated pregnancy",
   "trap": "- Management bundle for obesity in pregnancy (all easy to forget):\n  - **High-dose FOLATE 5 mg** if BMI >30 (C-Obs 49 Rec 2)\n  - Check/replace **vitamin D** and **iron**\n  - **Low-dose ASPIRIN** from early pregnancy for pre-eclampsia prevention (continue to ~36 wk)\n  - **VTE risk-assess** for thromboprophylaxis (LMWH), especially higher BMI and postpartum\n  - **EARLY GDM screen** (C-Obs 49 Rec 8)\n  - BMI >40: **anaesthetic referral** antenatally (Rec 10)\n- Trap: giving standard **0.5 mg folate** and omitting aspirin / VTE assessment / early GDM screen",
   "source": "RANZCOG C-Obs 49 'Management of Obesity in Pregnancy' (current March 2022, review 2027); Qld Clinical Guideline (Obesity); Safer Care Victoria; KEMH BMI>40 guideline",
   "discriminator": "- Do not attribute new hypertension/proteinuria in an obese woman to 'just her weight'\n- Work up as possible **pre-eclampsia**\n  - Baseline bloods set early help discriminate",
   "whatFirst": "- At booking:\n  - **5 mg folate** (BMI >30)\n  - **Aspirin** in early pregnancy\n  - **VTE risk-assess**\n  - **Early GDM screen**\n  - Vit D / iron check\n  - Anaesthetic referral if **BMI >40**",
   "redFlags": "- **BMI >40**: anaesthetic referral antenatally\n- Heightened **VTE** and **pre-eclampsia** surveillance\n- **BMI >=50**: offer delivery before due date",
   "mcqTrap": "- '**BMI 34 — standard 0.5 mg folate**' is WRONG (needs **5 mg**)\n- Omitting **aspirin**, **VTE risk-assessment**, and **early GDM screen** are the other classic misses",
   "mnemonic": "Big-BMI bundle = FAVID: Folate 5mg, Aspirin early, VTE risk-assess, Iron, vit-D.",
   "cutoffs": [
    "Folate **5 mg** if BMI **>30**",
    "**Aspirin** from early pregnancy, continue to **~36 wk**",
    "BMI **>40**: anaesthetic referral antenatally",
    "**VTE prophylaxis** risk-assessed (esp. higher BMI / postpartum)",
    "**Early GDM screen**"
   ],
   "verified": true,
   "tags": [
    "obesity",
    "BMI",
    "folate",
    "aspirin",
    "VTE",
    "pre-eclampsia"
   ],
   "id": "obs-28",
   "title": "Obesity in Pregnancy",
   "subtitle": "5mg folate, aspirin, VTE assessment; don't skip the bundle"
  },
  {
   "topic": "Obstetric cholestasis (ICP): bile acids drive timing",
   "subarea": "Medical & complicated pregnancy",
   "trap": "- Third-trimester itch WORST on **palms and soles**, typically worse at night\n- **Normal skin** (no rash) — presence of a rash is the give-away it is NOT cholestasis\n- Diagnose by **raised serum bile acids** (+/- raised LFTs)\n- **Bile acids** drive the stillbirth risk and delivery timing (NOT LFTs alone)\n- **Ursodeoxycholic acid**: maternal symptom relief only — does NOT clearly prevent stillbirth\n- **Timed delivery** is what prevents stillbirth:\n  - Bile acids **<40**: deliver ~**38–39 wk**\n  - Bile acids **40–99**: deliver ~**36–37 wk**\n  - Bile acids **>=100** micromol/L: deliver by ~**36 wk** (steep stillbirth risk)\n- Trap: giving a steroid/antihistamine for itch, or treating an itchy rash as cholestasis",
   "whatFirst": "- Check **serum bile acids + LFTs**\n- Stratify **delivery timing** by bile-acid level\n- **Ursodeoxycholic acid** for symptoms",
   "discriminator": "- **ICP** = itch + **NO rash** + raised bile acids\n- **PUPPP / pemphigoid gestationis** = itch + **visible rash**\n- **Bile acids**, not LFTs, drive the stillbirth risk",
   "cutoffs": [
    "Bile acids **<40** -> deliver **~38–39 wk**",
    "Bile acids **40–99** -> deliver **~36–37 wk**",
    "Bile acids **>=100 micromol/L** -> deliver **~36 wk** (highest stillbirth risk)",
    "Ursodeoxycholic acid **10–15 mg/kg/day** for symptoms"
   ],
   "redFlags": "- Bile acids **>=100 micromol/L** — highest stillbirth risk, expedite delivery\n- Any associated **pre-eclampsia** features -> expedite delivery",
   "trapAnswer": "'Topical steroid / antihistamine and reassure to term' - misses the stillbirth risk and the need for timed delivery and bile-acid stratification.",
   "mcqTrap": "- **Treating symptomatically and continuing to 40 weeks** — wrong, delivery timing is the life-saving intervention\n- **Diagnosing cholestasis when a rash is present** — rash excludes ICP",
   "mnemonic": "Itchy palms, no rash, high bile acids -> deliver early; '100 = 36'.",
   "source": "RCOG/RANZCOG-aligned + SMFM ICP delivery thresholds; Australian maternity practice (current)",
   "verified": true,
   "tags": [
    "obstetrics",
    "cholestasis",
    "ICP",
    "stillbirth"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Bile acids (micromol/L)</th><th>Deliver</th></tr><tr><td>&lt;40</td><td>~38-39 wk</td></tr><tr><td>40-99</td><td>~36-37 wk</td></tr><tr><td>&gt;=100</td><td>~36 wk</td></tr></table>",
   "id": "obs-34",
   "title": "Obstetric Cholestasis",
   "subtitle": "Palms/soles itch, NO rash; bile acids drive timing"
  },
  {
   "topic": "Overt diabetes detected in pregnancy vs GDM — different disease, different pathway",
   "subarea": "Medical & complicated pregnancy",
   "trap": "- If early testing shows any of the following, this is **OVERT (pre-existing, undiagnosed) diabetes**, NOT GDM:\n  - Fasting **>=7.0** mmol/L\n  - **HbA1c >=6.5%** (48 mmol/mol)\n  - Random **>=11.1** mmol/L\n- Even though it was 'found in pregnancy', manage as **pre-existing diabetes**:\n  - Tight targets\n  - **Retinal / renal review**\n  - **Aspirin from 12 wk**\n  - Often **immediate insulin**\n- **Postpartum**: arrange OGTT/HbA1c to confirm ongoing diabetes — do NOT assume resolution\n- Trap: labelling a markedly high early result 'GDM' and applying the **gentler GDM pathway**",
   "source": "ADIPS 2025 Consensus (classification, MJA 2025;223:3); ADIPS 2020 pre-existing diabetes paper; WHO criteria",
   "discriminator": "- **Overt**: early fasting **>=7.0** / HbA1c **>=6.5%** / random **>=11.1** — does NOT reliably resolve after delivery\n- **GDM**: lesser OGTT elevations at 24–28 wk that **typically normalise postpartum**",
   "whatFirst": "- Recognise **overt thresholds** early -> manage as **pre-existing diabetes**\n- Arrange: retinal/renal review, aspirin from 12 wk, insulin\n- Plan **postpartum diabetes confirmation**",
   "redFlags": "- Random **>=11.1** with symptoms\n- **HbA1c >=6.5%** in first trimester",
   "mcqTrap": "- '**Early HbA1c 6.7% -> diagnose GDM, lifestyle only**' is WRONG\n  - HbA1c 6.7% = **overt diabetes**; manage as pre-existing",
   "mnemonic": "7 - 6.5 - 11.1 = the OVERT trio (fasting 7.0 / HbA1c 6.5% / random 11.1).",
   "cutoffs": [
    "Fasting **>=7.0 mmol/L**",
    "HbA1c **>=6.5%** (48 mmol/mol)",
    "Random **>=11.1 mmol/L**"
   ],
   "verified": true,
   "tags": [
    "overt-diabetes",
    "GDM",
    "classification",
    "HbA1c"
   ],
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Fasting >=7.0</span><span class=\"gv-pill\">HbA1c >=6.5%</span><span class=\"gv-pill\">Random >=11.1</span></div>",
   "id": "obs-30",
   "title": "Overt Diabetes in Pregnancy",
   "subtitle": "Fasting >=7, HbA1c >=6.5%: it's pre-existing, not GDM"
  },
  {
   "topic": "Postpartum follow-up after GDM — the forgotten OGTT",
   "subarea": "Medical & complicated pregnancy",
   "trap": "- **GDM is not 'over' at delivery** — insulin/agents are usually stopped post-delivery, but follow-up is mandatory\n- A **75g OGTT** (NOT fasting glucose or HbA1c) must be done at **6-12 weeks postpartum** to detect persistent diabetes or impaired glucose tolerance\n- Then **lifelong screening** (e.g. HbA1c every 1-3 years) because ~**50%** develop T2DM within 10-20 years\n- Trap 1: **discharging with no follow-up plan**\n- Trap 2: using **HbA1c at 6 weeks** instead of OGTT — too soon and insensitive postpartum",
   "source": "ADIPS; RACGP; Qld Clinical Guideline GDM (MN21.33)",
   "discriminator": "- At 6-12 weeks postpartum: best test is **75g OGTT**\n  - NOT fasting glucose alone\n  - NOT early HbA1c",
   "whatFirst": "- **Book the 6-12 week postpartum 75g OGTT** before discharge\n- **Counsel** re lifelong T2DM risk and recurrence in future pregnancies",
   "redFlags": "- **Persistent hyperglycaemia** on postpartum OGTT = ongoing diabetes\n  - Refer for further management",
   "mcqTrap": "- **'GDM resolved at delivery, no follow-up needed'** is WRONG\n- **'Check HbA1c at 6 weeks'** is WRONG\n- Correct answer: **75g OGTT at 6-12 weeks** postpartum",
   "mnemonic": "GDM today, OGTT in 6-12 weeks, and T2DM may stay.",
   "cutoffs": [
    "**Postpartum 75g OGTT** at 6-12 weeks",
    "Then **HbA1c every 1-3 years**",
    "**~50% lifetime T2DM risk**"
   ],
   "verified": true,
   "tags": [
    "GDM",
    "postpartum",
    "OGTT",
    "T2DM",
    "follow-up"
   ],
   "id": "obs-31",
   "title": "Postpartum Follow-up After GDM",
   "subtitle": "75g OGTT at 6-12 weeks, not fasting glucose"
  },
  {
   "topic": "Postpartum thyroiditis & postpartum thyroid dysfunction",
   "subarea": "Medical & complicated pregnancy",
   "trap": "- **Postpartum thyroiditis** = painless, transient autoimmune thyroiditis after delivery\n- Classically **BIPHASIC**: transient **HYPERthyroid** phase (~1-4 months postpartum) → transient **HYPOthyroid** phase → usually recovers\n  - A minority remain permanently hypothyroid\n- Gotcha 1: hyperthyroid phase is from **preformed hormone release** (gland destruction), NOT excess synthesis\n  - Therefore do **NOT** treat with carbimazole/PTU\n  - Use a **beta-blocker (propranolol)** for symptoms only\n- Gotcha 2: **distinguish from Graves' disease**\n  - Thyroiditis: **LOW/absent radioiodine uptake**, TRAb negative\n  - Graves: **HIGH uptake**, TRAb positive — needs antithyroid drugs\n- Often **misattributed to postnatal depression/anxiety** — check TFTs\n- Hypothyroid phase may need **transient thyroxine**",
   "whatFirst": "- Hyperthyroid phase → **beta-blocker (propranolol)** for symptoms\n  - NOT antithyroid drugs\n- Check **radioiodine uptake** and **TRAb** to exclude Graves",
   "discriminator": "- Postpartum thyroiditis: **LOW radioiodine uptake**, TRAb negative, self-limiting\n- Graves: **HIGH radioiodine uptake**, TRAb positive, needs antithyroid drugs",
   "cutoffs": [
    "Onset **~1-4 months postpartum** (hyper phase), then hypo phase",
    "Hyperthyroid phase: **propranolol only**, no carbimazole/PTU",
    "**Low radioiodine uptake** + negative TRAb",
    "**~3-4% remain permanently hypothyroid**"
   ],
   "redFlags": "- **Persistent hypothyroidism beyond 12 months**\n- Features suggesting **Graves** (orbitopathy, high uptake)",
   "trapAnswer": "'Start carbimazole/PTU' for the hyperthyroid phase - ineffective (destructive, not overproduction); or attributing symptoms to PND without TFTs.",
   "mcqTrap": "- **Treating thyrotoxic phase with antithyroid drugs** instead of beta-blocker is WRONG\n- **Missing it as postnatal depression** without checking TFTs is WRONG",
   "mnemonic": "Destruction not production -> beta-block, don't carbimazole; low uptake = thyroiditis, high uptake = Graves.",
   "source": "Endocrine Society / Australian thyroid-in-pregnancy guidance (current)",
   "verified": true,
   "tags": [
    "obstetrics",
    "postpartum thyroiditis",
    "puerperium",
    "thyroid"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">~1-4 mo postpartum: HYPER (propranolol)</div><div class=\"gv-step\">Then HYPO (transient thyroxine if needed)</div><div class=\"gv-step\">Usually recovers</div></div>",
   "id": "obs-37",
   "title": "Postpartum Thyroiditis",
   "subtitle": "Biphasic: transient hyper- then hypothyroid phase"
  },
  {
   "topic": "Pre-existing (type 1/2) diabetes in pregnancy — preconception & monitoring",
   "subarea": "Medical & complicated pregnancy",
   "trap": "- Pre-existing diabetes requires **tighter targets** than GDM\n- Target **HbA1c <=6.5% (48 mmol/mol)** preconception/early; aim **<=6.0% (42)** later if achievable without hypos\n- **Strongly advise against pregnancy** if HbA1c >9.0%\n- Easy-to-miss step 1: **RETINAL screening** preconception/early AND repeat in T3\n  - Pregnancy can rapidly **progress retinopathy**, especially with abrupt tight control\n- Easy-to-miss step 2: **high-dose FOLATE 5 mg** (not 0.5 mg)\n- Easy-to-miss step 3: **ASPIRIN from 12 weeks** for pre-eclampsia prevention\n- Easy-to-miss step 4: **STOP teratogenic drugs** — ACE-inhibitors/ARBs, statins, non-insulin agents (except metformin) — switch to **insulin**\n- Trap: applying the **looser GDM target set**, or **forgetting retinal review**",
   "source": "ADIPS 2020 'Managing pre-existing diabetes prior to and during pregnancy' (Australian Prescriber / ADIPS position paper)",
   "discriminator": "- Pre-existing diabetes (known before pregnancy or overt picture early): requires **preconception care**, retinal/renal review, and **5 mg folate**\n  - GDM does NOT start with these requirements",
   "whatFirst": "- Preconception: **optimise HbA1c**\n- Start **5 mg folate**\n- **Retinal + renal screen**\n- **Stop ACEi/ARB/statin**\n- Switch to **insulin**",
   "redFlags": "- **HbA1c >9.0%** — advise against conception until improved\n- **New or worsening retinopathy** in pregnancy → ophthalmology referral",
   "mcqTrap": "- **'Continue ramipril/atorvastatin through pregnancy'** is WRONG — teratogenic, stop them\n- **'Use 0.5 mg folate'** is WRONG for pre-existing diabetes — needs **5 mg**",
   "mnemonic": "Pre-existing diabetes preconception = AFRES: Aspirin (from 12wk), Folate 5mg, Retinal screen, Eyes/Renal review, Stop teratogens (ACEi/ARB/statin) + switch to insulin.",
   "cutoffs": [
    "**HbA1c <=6.5%** preconception/early; **<=6.0%** later",
    "Avoid pregnancy if **HbA1c >9.0%**",
    "**Folate 5 mg**",
    "**Aspirin from 12 weeks**",
    "**Retinal screen** preconception/early + T3"
   ],
   "verified": false,
   "tags": [
    "pre-existing-diabetes",
    "preconception",
    "retinopathy",
    "folate",
    "aspirin"
   ],
   "id": "obs-23",
   "title": "Pre-existing Diabetes in Pregnancy",
   "subtitle": "Don't forget preconception retinal screening",
   "images": [
    {
     "src": "assets/img/ophthalmology_fundus_diabetic_retinopathy_01.jpg",
     "alt": "Fundus photograph showing sight-threatening diabetic retinopathy",
     "credit": "MarkPanin, Wikimedia Commons, CC BY-SA 4.0 (timestamp cropped)"
    }
   ]
  },
  {
   "topic": "Thyroid disease in pregnancy — do NOT stop thyroxine; increase it 30-50%",
   "subarea": "Medical & complicated pregnancy",
   "trap": "- In a hypothyroid woman on levothyroxine, requirements **RISE in pregnancy**\n- Gotcha: do NOT stop or reduce thyroxine 'to be safe'\n- Instead, on confirming pregnancy **increase dose ~30-50%**\n  - RANZCOG C-Obs 46: 'two extra doses/week' = **9 tablets instead of 7**\n- Check **TSH** and target the **lower half** of the trimester-specific range\n- For **HYPERthyroidism (Graves)**:\n  - **PTU preferred in T1** — carbimazole causes embryopathy/aplasia cutis\n  - Switch to **carbimazole in T2/T3** — PTU causes hepatotoxicity",
   "source": "RANZCOG C-Obs 46 'Subclinical hypothyroidism and hypothyroidism in pregnancy' (current March 2022, review 2027); eTG; ATA-aligned",
   "discriminator": "- Hypothyroid on thyroxine → **INCREASE dose**\n- Hyperthyroid Graves → antithyroid drug, trimester-specific: **PTU T1**, carbimazole **T2/T3**\n  - Do not apply the 'increase' rule to hyperthyroidism",
   "whatFirst": "- On confirming pregnancy: **increase levothyroxine ~30-50%** (e.g. 2 extra tablets/week)\n- **Check TSH** immediately\n- Do NOT wait for the next routine review",
   "redFlags": "- **TSH rising / symptomatic hypothyroidism** in pregnancy\n- In Graves: **thyroid storm** or fetal tachycardia/goitre\n- **Overt hypothyroidism = TSH >10 mIU/L** irrespective of FT4 — treat",
   "mcqTrap": "- **'Stop thyroxine in early pregnancy until TSH checked'** is WRONG — continue and increase\n- **'Carbimazole in first trimester'** is WRONG — use PTU in T1\n- **'Screen all women for/treat subclinical hypothyroidism'** is WRONG per C-Obs 46 (not recommended)",
   "mnemonic": "Pregnant thyroxine goes UP ~a Third-to-Half: Two extra Tablets a week. Hyperthyroid: PTU is for the Pregnant T1 (PTU First, carbimazole the rest).",
   "cutoffs": [
    "Increase levothyroxine **~30-50%** on confirming pregnancy (**2 extra tablets/week**)",
    "Target = **lower half of trimester-specific TSH range** (TSH 0.5 mU/L below non-pregnant in T1; upper limit ~4 mU/L if no local range)",
    "Overt hypothyroidism = **TSH >10 mIU/L**",
    "**PTU in T1**, carbimazole T2/T3"
   ],
   "verified": true,
   "tags": [
    "thyroid",
    "hypothyroidism",
    "levothyroxine",
    "PTU",
    "carbimazole"
   ],
   "id": "obs-25",
   "title": "Thyroid Disease in Pregnancy",
   "subtitle": "Increase thyroxine 30-50%; never stop it"
  },
  {
   "topic": "Twin pregnancy: chorionicity, MCDA surveillance & delivery timing",
   "subarea": "Medical & complicated pregnancy",
   "trap": "- **Chorionicity must be determined in T1** (ideally 11-13+6 weeks) — unreliable later\n- **Lambda/'twin-peak' sign = DICHORIONIC**; **T-sign = MONOCHORIONIC**\n- Monochorionic = share one placenta = risk of **twin-twin transfusion syndrome (TTTS)**\n  - Therefore: **fortnightly (2-weekly) ultrasound from ~16 weeks** for TTTS/sFGR/TAPS\n- **Delivery timing by chorionicity**:\n  - DCDA: **~37-38 weeks**\n  - MCDA: **~36-37 weeks**\n  - MCMA: **~32-34 weeks by caesarean**\n- Trap: ordering invasive monitoring or applying **singleton growth charts**",
   "whatFirst": "- Determine **chorionicity in T1** by membrane sign\n- If monochorionic → **2-weekly USS from 16 weeks** for TTTS",
   "discriminator": "- **Lambda/twin-peak = DCDA**; **T-sign = MC**\n- TTTS only occurs in **MONOchorionic** (shared placenta) twins — never DCDA",
   "cutoffs": [
    "Chorionicity at **11-13+6 weeks**",
    "MC twins: USS **every 2 weeks from ~16 weeks**",
    "Delivery: **DCDA ~37-38 wk**; **MCDA ~36-37 wk**; **MCMA ~32-34 wk (CS)**"
   ],
   "redFlags": "- **Polyhydramnios in one sac + oligohydramnios in the other** (poly-oli sequence) = TTTS\n  - → Tertiary fetal medicine referral (**laser treatment**)",
   "trapAnswer": "Assuming a dichorionic pair can develop TTTS, or using a single growth chart and routine term delivery for MCDA twins.",
   "mcqTrap": "- **Mixing up lambda (DC) and T-sign (MC)** is the classic error\n- **Delivering monochorionic twins at term** like singletons is WRONG",
   "mnemonic": "Lambda Looks Like a peak = 2 placentas (Di); T is Thin = 1 placenta (Mono, TTTS risk).",
   "source": "RANZCOG Management of Monochorionic Twin Pregnancy; ISUOG twins (Australian-aligned) (current)",
   "verified": true,
   "tags": [
    "obstetrics",
    "twins",
    "TTTS",
    "chorionicity"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Sign / Type</th><th>Meaning</th><th>Delivery</th></tr><tr><td>Lambda / twin-peak</td><td>DCDA</td><td>~37-38 wk</td></tr><tr><td>T-sign</td><td>MCDA (TTTS risk, 2-wkly USS from 16wk)</td><td>~36-37 wk</td></tr><tr><td>Single sac</td><td>MCMA</td><td>~32-34 wk CS</td></tr></table>",
   "id": "obs-33",
   "title": "Twin Pregnancy & Chorionicity",
   "subtitle": "Lambda sign = DCDA; T-sign = monochorionic; date it early",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Ultrasound_Scan_ND_034.jpg",
     "caption": "Lambda (twin-peak) sign — dichorionic diamniotic twins",
     "alt": "Triangular wedge of placental tissue projecting into the base of the inter-twin membrane — lambda/twin-peak sign indicating DCDA chorionicity",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "VTE in pregnancy — LMWH, never warfarin/DOAC; D-dimer is useless",
   "subarea": "Medical & complicated pregnancy",
   "trap": "- Treatment/prophylaxis = **LMWH** (e.g. enoxaparin), dosed on **early-pregnancy/booking weight**\n- **WARFARIN is teratogenic** (fetal warfarin syndrome, T1) and crosses the placenta — avoid\n- **DOACs are avoided** — insufficient safety data, cross placenta\n- **D-dimer is physiologically raised in pregnancy** — NOT useful to exclude VTE\n  - Do not order D-dimer to rule out VTE\n- For suspected PE: **image despite pregnancy** (CXR first, then V/Q or CTPA)\n  - Do not withhold imaging over radiation fears\n- **Risk-assess every woman** at booking, on admission, and postpartum (highest-risk period)",
   "source": "RANZCOG/SOMANZ VTE in pregnancy guidance; ANZJOG; eTG",
   "discriminator": "- Suspected DVT → **compression USS**\n- Suspected PE → **CTPA or V/Q** (choice by local protocol/CXR)\n- **Do not use D-dimer** to rule out VTE in pregnancy",
   "whatFirst": "- Start **therapeutic LMWH empirically** if VTE strongly suspected, then image\n- **Risk-assess for prophylaxis** at booking and postpartum",
   "redFlags": "- **Postpartum is peak risk**\n- **LSCS, obesity, immobility, prior VTE/thrombophilia** raise risk and lower the threshold to anticoagulate",
   "mcqTrap": "- **'Negative D-dimer excludes PE in pregnancy'** is WRONG\n- **'Start warfarin/apixaban for pregnancy VTE'** is WRONG — use **LMWH**\n  - Warfarin reserved for postpartum/breastfeeding-safe use or mechanical heart valves under specialist care",
   "mnemonic": "In pregnancy: LMWH Lives, Warfarin is Wrong, DOACs are Dangerous, D-dimer is Decoration.",
   "cutoffs": [
    "LMWH dosed by **booking/early-pregnancy weight**",
    "**Warfarin & DOAC avoided antenatally**",
    "**D-dimer not used** to exclude VTE in pregnancy"
   ],
   "verified": true,
   "tags": [
    "VTE",
    "LMWH",
    "warfarin",
    "DOAC",
    "D-dimer",
    "PE"
   ],
   "id": "obs-26",
   "title": "VTE in Pregnancy",
   "subtitle": "LMWH only; warfarin/DOAC out; D-dimer useless",
   "images": [
    {
     "src": "assets/img/respiratory_ctpa_segmental_pe_01.jpg",
     "alt": "CT pulmonary angiogram showing intraluminal filling defect of acute pulmonary embolism",
     "credit": "Aung Myat and Arif Ahsan, Wikimedia Commons, CC BY 2.0 (cropped to axial panel)"
    }
   ]
  },
  {
   "topic": "Acute fatty liver of pregnancy (AFLP) vs HELLP",
   "subarea": "Hypertensive disorders",
   "trap": "- **AFLP** = acute liver failure; dangerous HELLP/pre-eclampsia mimic\n- Discriminators pointing to **AFLP** (not HELLP):\n  - Profound **HYPOGLYCAEMIA**\n  - Marked **coagulopathy/DIC with LOW fibrinogen**\n  - Raised **AMMONIA**\n  - **Lactic acidosis**\n  - **AKI**\n  - **Hyperbilirubinaemia**\n  - Prominent **nausea/vomiting/malaise**\n- **HELLP** = haemolysis + raised LFTs + **LOW platelets**, often with hypertension/proteinuria\n  - Platelet drop is the lead finding\n  - Hypoglycaemia and very high ammonia are **NOT features of HELLP**\n- Diagnose AFLP clinically via **Swansea criteria**\n- Treatment of BOTH = prompt **DELIVERY** (plus supportive correction of glucose/coagulopathy)\n  - NOT conservative/expectant management",
   "whatFirst": "- **Stabilise** (correct glucose, correct coagulopathy)\n- Then **DELIVER**\n- Check **glucose/ammonia/fibrinogen** to separate AFLP from HELLP",
   "discriminator": "- **Hypoglycaemia + raised ammonia + low fibrinogen/DIC = AFLP** (liver failure)\n- **Low platelets + haemolysis + raised LFTs, normoglycaemic = HELLP**",
   "cutoffs": [
    "AFLP: **hypoglycaemia, raised ammonia, coagulopathy/DIC**, AKI, lactic acidosis",
    "HELLP: **platelets <100**, LDH up, AST/ALT up, haemolysis",
    "Both: definitive treatment = **delivery**",
    "AFLP diagnosed by **Swansea criteria**"
   ],
   "redFlags": "- **Hypoglycaemia + encephalopathy + coagulopathy** in late pregnancy = AFLP until proven otherwise\n  - → **Deliver**",
   "trapAnswer": "Labelling a hypoglycaemic, coagulopathic, hyperammonaemic woman as 'HELLP' and managing expectantly - it's AFLP and needs delivery.",
   "mcqTrap": "- **Picking HELLP when hypoglycaemia/raised ammonia is present** is WRONG\n  - Hypoglycaemia + raised ammonia = the discriminating clue for **AFLP**",
   "mnemonic": "AFLP = A Failing Liver -> hypoglycaemia, ammonia, clotting failure. HELLP = platelets and haemolysis.",
   "source": "Swansea criteria; SOMANZ hypertension/HELLP-aligned; The Obstetrician & Gynaecologist 2025 AFLP review (current)",
   "verified": true,
   "tags": [
    "obstetrics",
    "AFLP",
    "HELLP",
    "liver"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th></th><th>AFLP</th><th>HELLP</th></tr><tr><td>Glucose</td><td>LOW (profound)</td><td>Normal</td></tr><tr><td>Ammonia</td><td>Raised</td><td>Normal</td></tr><tr><td>Fibrinogen</td><td>Low / DIC</td><td>Often preserved</td></tr><tr><td>Lead finding</td><td>Liver failure</td><td>Low platelets + haemolysis</td></tr></table>",
   "id": "obs-47",
   "title": "Acute Fatty Liver of Pregnancy",
   "subtitle": "Hypoglycaemia and low fibrinogen point away from HELLP",
   "images": [
    {
     "src": "assets/img/gastrointestinal_photo_scleral_icterus_fresh.jpg",
     "caption": "Scleral icterus — jaundice in acute fatty liver of pregnancy",
     "alt": "Deep yellow scleral discolouration indicating hepatic failure, a key discriminating feature of AFLP over HELLP",
     "credit": "Bobjgalindo, Wikimedia Commons, CC BY-SA 4.0"
    },
    {
     "src": "assets/img/haematology_film_schistocytes_01.jpg",
     "caption": "Blood film — schistocytes in DIC/microangiopathy (HELLP comparison)",
     "alt": "Red cell fragments (schistocytes) and reduced platelets as seen in DIC/HELLP-associated microangiopathic haemolytic anaemia",
     "credit": "Ed Uthman, MD, Wikimedia Commons, CC BY 2.0"
    }
   ]
  },
  {
   "topic": "Antihypertensives safe vs contraindicated in pregnancy",
   "subarea": "Hypertensive disorders",
   "trap": "- Safe oral antihypertensives in pregnancy (SOMANZ 2023): **labetalol, methyldopa, nifedipine** (oral hydralazine as add-on)\n- **ACE inhibitors and ARBs are CONTRAINDICATED** antenatally — fetal renal dysgenesis, oligohydramnios, skull defects\n- Trap: **ACEi may be RESTARTED postpartum**\n  - SOMANZ lists enalapril as a postpartum/breastfeeding-compatible option\n  - 'Contraindicated' applies to the **pregnant** woman, NOT the lactating woman",
   "whatFirst": "- On finding a pregnant woman on an ACEi/ARB: **STOP it immediately**\n- Switch to a safe agent: **labetalol/methyldopa/nifedipine**",
   "discriminator": "- Antenatal → **labetalol/methyldopa/nifedipine**\n- Postpartum → beta-blockers, methyldopa, hydralazine, nifedipine, **enalapril** or clonidine (shared decision, esp. if breastfeeding)\n- Routine NSAID use postpartum in PET is **only conditionally recommended** (review renal/BP)",
   "redFlags": "- Any pregnant woman still taking **ACEi/ARB or an unlisted agent** — flag and change",
   "mcqTrap": "- **'Continue ramipril because her BP is well controlled'** is WRONG — stop ACEi/ARB in pregnancy\n- **'Methyldopa is unsafe'** is WRONG — it is a classic safe choice",
   "mnemonic": "Safe = 'LMN' (Labetalol, Methyldopa, Nifedipine). Avoid the 'A-team' (ACEi/ARB) until after delivery.",
   "cutoffs": [
    "Oral target (chronic/gestational HTN): **SBP <=135 / DBP <=85**",
    "**Enalapril** is a listed postpartum/breastfeeding option (ACEi)",
    "**NSAIDs postpartum in PET**: only conditionally recommended — individualise"
   ],
   "source": "SOMANZ Hypertension in Pregnancy Guideline 2023 (Part 5 stable HTN; Part 7 postpartum)",
   "tags": [
    "antihypertensives",
    "ACEi",
    "ARB",
    "methyldopa",
    "teratogen"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Safe in pregnancy</th><th>Contraindicated antenatally</th></tr></thead><tbody><tr><td>Labetalol</td><td>ACE inhibitors</td></tr><tr><td>Methyldopa</td><td>ARBs</td></tr><tr><td>Nifedipine (+/- oral hydralazine)</td><td>(NSAIDs - only conditional postpartum)</td></tr></tbody></table>",
   "id": "obs-42",
   "title": "Antihypertensives in Pregnancy",
   "subtitle": "ACE inhibitors and ARBs are contraindicated"
  },
  {
   "topic": "Aspirin prophylaxis: start BEFORE 16 weeks, 150 mg nocte (SOMANZ 2023)",
   "subarea": "Hypertensive disorders",
   "trap": "- **Low-dose aspirin reduces pre-eclampsia** when started before 16 weeks\n- SOMANZ 2023 strongly recommends initiation in high-risk women **prior to 16 weeks**\n- Dose: **150 mg/day** (strong recommendation), taken at **bedtime** (conditional)\n- **Cease between 34 weeks and birth**\n- Add **calcium** if dietary intake <1 g/day",
   "whatFirst": "- At booking, **risk-stratify**\n- If high-risk: start **aspirin 150 mg nocte BEFORE 16 weeks**\n  - Do not wait for symptoms or a high BP",
   "discriminator": "- **Aspirin = PREVENTION** (before 16 weeks)\n- **Magnesium = seizure treatment/prevention**\n- **Calcium = adjunct prevention** when dietary calcium is low\n  - Different drugs, different jobs",
   "redFlags": "- High-risk (1 or more): **prior hypertensive disorder of pregnancy**, chronic kidney disease, multi-fetal gestation, chronic HTN, pre-existing T1/T2 diabetes, autoimmune disease (SLE/APLS)\n- Moderate-risk (2 or more): **age >40**, BMI >35, nulliparity, family history, interpregnancy interval >=10 years, ART, BP >130/80",
   "mcqTrap": "- **'Start aspirin at 24 weeks'** is WRONG — must initiate **<16 weeks**\n- **'100 mg morning'** is WRONG — SOMANZ specifies **150 mg/day at bedtime**",
   "mnemonic": "Aspirin before the Sweet 16 (weeks), 150 mg at night.",
   "cutoffs": [
    "**Aspirin 150 mg/day** (strong recommendation)",
    "At **bedtime** (conditional recommendation)",
    "Start **prior to 16 weeks** (strong recommendation)",
    "**Cease between 34 weeks and birth**",
    "Add **calcium if dietary intake <1 g/day**"
   ],
   "source": "SOMANZ Hypertension in Pregnancy Guideline 2023 (Part 2 screening; Part 3A.1 aspirin, 3A.2 calcium)",
   "tags": [
    "aspirin",
    "prevention",
    "high-risk",
    "calcium"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Parameter</th><th>SOMANZ 2023</th></tr></thead><tbody><tr><td>Dose</td><td>Aspirin <span class=\"gv-num\">150 mg</span> nocte</td></tr><tr><td>Start by</td><td><span class=\"gv-num\">&lt;16 weeks</span></td></tr><tr><td>Stop</td><td>Between <span class=\"gv-num\">34 weeks</span> and birth</td></tr><tr><td>Adjunct</td><td>Calcium if intake <span class=\"gv-num\">&lt;1 g/day</span></td></tr></tbody></table>",
   "id": "obs-45",
   "title": "Aspirin Prophylaxis for Pre-eclampsia",
   "subtitle": "Start before 16 weeks, 150 mg nocte"
  },
  {
   "topic": "Definitive treatment of pre-eclampsia = delivery of the placenta",
   "subarea": "Hypertensive disorders",
   "trap": "- The only cure for pre-eclampsia/eclampsia/HELLP = **delivery (removal of the placenta)**\n  - Antihypertensives, magnesium, and steroids are **temporising only**\n- Subtler gotcha: disease can **first present or worsen early postpartum**\n  - Eclampsia/HELLP can occur **weeks after delivery**\n  - Delivery does NOT end the danger\n  - **Magnesium continues for 24 hours after birth**",
   "whatFirst": "- Balance **maternal severity vs fetal gestation**\n- **Stabilise the mother first** (BP control, magnesium), then deliver\n- At term or severe disease → **deliver**\n- Remote from term + stable → **expectant with surveillance**; give corticosteroids if <34 weeks",
   "discriminator": "- **Eclampsia is NOT only antenatal** — a large share of seizures are postpartum\n- New severe headache/HTN/seizure days after birth = consider **postpartum eclampsia**, not just 'tired new mum'",
   "redFlags": "- Uncontrollable BP, **eclampsia**, HELLP/falling platelets, pulmonary oedema, abnormal fetal status, abruption → **expedite delivery**",
   "mcqTrap": "- **'She delivered yesterday, so stop magnesium / pre-eclampsia is cured'** is WRONG\n  - Continue **magnesium 24 hours postpartum**; postpartum eclampsia and HELLP still occur",
   "mnemonic": "Deliver the placenta = the cure; but the curtain can fall 24-48 h LATER (postpartum vigilance).",
   "cutoffs": [
    "**Magnesium continued until 24 h after birth** or last seizure",
    "**Corticosteroid** (betamethasone/dexamethasone) if birth **<34 weeks**",
    "Severe/term disease → **deliver**",
    "Postpartum BP can peak **~day 3-5**"
   ],
   "source": "SOMANZ Hypertension in Pregnancy Guideline 2023 (Part 6 management; corticosteroid Rec)",
   "tags": [
    "delivery",
    "definitive-treatment",
    "postpartum",
    "placenta"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Stabilise mother (BP + magnesium)</div><div class=\"gv-step\">Corticosteroid if &lt;34 wk & time</div><div class=\"gv-step\">Deliver placenta = cure</div><div class=\"gv-step\">Continue magnesium 24h after birth + watch</div></div>",
   "id": "obs-44",
   "title": "Definitive Treatment of Pre-eclampsia",
   "subtitle": "Only cure is delivery; can worsen postpartum"
  },
  {
   "topic": "Eclampsia = MAGNESIUM, not an antihypertensive (the classic trap)",
   "subarea": "Hypertensive disorders",
   "trap": "- **Magnesium sulfate = anticonvulsant** for eclamptic seizures and seizure prophylaxis\n  - It is **NOT an antihypertensive** and does NOT meaningfully lower BP\n- An eclamptic patient needs **BOTH**:\n  - **Magnesium** (for the seizures)\n  - A **separate antihypertensive** (for the BP)",
   "whatFirst": "- Seizing/eclamptic: **ABC + left lateral + MgSO4 4g IV loading over 20 minutes**\n- Give the **antihypertensive alongside, separately**, for severe BP",
   "discriminator": "- **Magnesium** treats/prevents the seizure\n- **Hydralazine/labetalol/nifedipine** treat the BP\n  - Two different drugs for two different problems — do not let one substitute for the other",
   "redFlags": "- Prolonged seizure on magnesium → **diazepam 5-10 mg IV** or **midazolam 5-10 mg IV/IM** + airway support\n  - NOT a routine repeat magnesium bolus (per SOMANZ)",
   "mcqTrap": "- Choosing **magnesium 'to control her blood pressure'** is WRONG\n- Choosing **first-line phenytoin/diazepam** for the initial eclamptic seizure is WRONG\n  - **Magnesium is first-line for the fit** (beats diazepam and phenytoin — Collaborative Eclampsia Trial)\n  - Antihypertensive is for the BP",
   "mnemonic": "Magnesium stops the Movement (seizure); it does NOT mind the Manometer (BP).",
   "cutoffs": [
    "**MgSO4 loading 4 g IV over 20 min**",
    "Maintenance **1 g/hr** until 24 h after birth or last seizure",
    "**Reduce dose 50% in renal impairment**",
    "Prolonged seizure: **diazepam OR midazolam 5-10 mg** + airway support"
   ],
   "source": "SOMANZ Hypertension in Pregnancy Guideline 2023 (Rec 6.6.1; Flowchart 6.6); Collaborative Eclampsia Trial",
   "tags": [
    "eclampsia",
    "magnesium",
    "anticonvulsant",
    "seizure"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Seizure -> MAGNESIUM</span><span class=\"gv-pill\">High BP -> antihypertensive</span><span class=\"gv-pill\">Mg is NOT a BP drug</span></div>",
   "id": "obs-40",
   "title": "Eclampsia Management",
   "subtitle": "Magnesium is the anticonvulsant, not an antihypertensive"
  },
  {
   "topic": "HELLP syndrome: low platelets without big proteinuria or high BP",
   "subarea": "Hypertensive disorders",
   "trap": "- **HELLP** can present with RUQ/epigastric pain, nausea/malaise and only **mild or even absent hypertension and proteinuria**\n- A near-normal BP does **NOT exclude** HELLP\n- Diagnosis is clinched by **falling platelets + rising LDH/transaminases + haemolysis**\n  - Haemolysis confirmed by: blood film, raised bilirubin, low haptoglobin",
   "whatFirst": "- Suspected HELLP: send **bloods immediately** (FBC + film, LFTs, LDH, haptoglobin, coags, Cr)\n- Plan **delivery** — HELLP is an indication for delivery **regardless of how mild the BP looks**",
   "discriminator": "- vs **AFLP** (acute fatty liver of pregnancy): AFLP has **hypoglycaemia**, high ammonia, marked coagulopathy, often higher bilirubin\n- vs **TTP/HUS**: more profound thrombocytopenia + neuro/renal features, and does **NOT resolve with delivery**\n- HELLP can **transiently worsen for 24-48 h postpartum**",
   "redFlags": "- **Epigastric/RUQ pain**\n- **Falling platelets**\n- **Rising LDH**\n- Any sign of **hepatic capsule haematoma/rupture**",
   "mcqTrap": "- Most tempting wrong answer: 'BP only 138/86 and minimal protein — **reassure**'\n- WRONG — HELLP can have unremarkable BP; the **platelets/LFTs/haemolysis** make the diagnosis",
   "mnemonic": "HELLP: Haemolysis, Elevated Liver enzymes, Low Platelets - and BP may be near-normal.",
   "cutoffs": [
    "Platelets typically **<100 x10^9/L**",
    "**LDH elevated** / haptoglobin decreased (haemolysis)",
    "**AST/ALT elevated**",
    "Corticosteroid for HELLP **NOT recommended** (SOMANZ 2023, insufficient evidence)",
    "**Delivery** is the treatment regardless of BP severity"
   ],
   "source": "SOMANZ Hypertension in Pregnancy Guideline 2023 (HELLP as severe PET variant; Rec 6.7)",
   "tags": [
    "HELLP",
    "thrombocytopenia",
    "haemolysis",
    "liver"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Haemolysis (LDH up, film, low haptoglobin)</span><span class=\"gv-pill\">Elevated Liver enzymes</span><span class=\"gv-pill\">Low Platelets &lt;100</span><span class=\"gv-pill\">BP may be near-normal!</span></div>",
   "id": "obs-43",
   "title": "HELLP Syndrome",
   "subtitle": "Normal BP and proteinuria do not exclude it",
   "images": [
    {
     "src": "assets/img/gastrointestinal_photo_scleral_icterus_fresh.jpg",
     "caption": "Scleral icterus — hepatic involvement in HELLP",
     "alt": "Yellow scleral discolouration from haemolysis and hepatic dysfunction, a feature of HELLP syndrome",
     "credit": "Bobjgalindo, Wikimedia Commons, CC BY-SA 4.0"
    },
    {
     "src": "assets/img/haematology_film_schistocytes_hus_fresh.jpg",
     "caption": "Blood film — schistocytes in HELLP (microangiopathic haemolytic anaemia)",
     "alt": "Fragmented red cells (schistocytes/helmet cells) reflecting haemolysis — the H in HELLP",
     "credit": "Erhabor Osaro (Associate Professor), Wikimedia Commons, CC BY-SA 3.0"
    }
   ]
  },
  {
   "topic": "Magnesium for FETAL NEUROPROTECTION - different indication and window",
   "subarea": "Hypertensive disorders",
   "trap": "- Do not conflate **fetal neuroprotection** with eclampsia seizure prophylaxis — these are **different indications** for magnesium\n- Neuroprotection (reduces cerebral palsy) is given when **very preterm birth is imminent** (established preterm labour or planned birth within 24 h)\n- **NHMRC-endorsed Australian national guideline**: recommended for ALL women at risk of preterm birth **<30 weeks**\n- **SOMANZ 2023**: strongly recommends <30 weeks; **individualises** 30–34 weeks",
   "whatFirst": "- Imminent birth **<30 weeks**: give **magnesium for neuroprotection** ideally before birth\n- Give even if **delivery is very close** — do not withhold because birth seems imminent",
   "discriminator": "- **Neuroprotection window** = <30 weeks (Australian national guideline; SOMANZ strong rec)\n- **Seizure prophylaxis/treatment** = any gestation with severe PET/eclampsia\n- A woman can need magnesium for **both reasons at once** — one regimen covers both",
   "redFlags": "- Anticipated very preterm birth (spontaneous or planned) **<30 weeks within 24 h**",
   "mcqTrap": "- Most tempting wrong answer: applying the eclampsia rationale ('to prevent her seizures') to a **stable normotensive woman in preterm labour**\n  - The indication here is **FETAL neuroprotection**\n- Also wrong: '**too late, she's about to deliver**' — give it anyway",
   "mnemonic": "Magnesium for the baby's BRAIN before 30 vs magnesium for MUM's seizures any time.",
   "cutoffs": [
    "Neuroprotection if birth **<30 weeks** expected within 24 h (NHMRC national guideline; SOMANZ strong rec)",
    "**30–34 weeks**: individualise (SOMANZ practice point)",
    "**4 g IV load** over ~15 min then **1 g/hr** until birth or 24 h (whichever sooner)"
   ],
   "source": "Antenatal Magnesium Sulphate Prior to Preterm Birth for Neuroprotection (NHMRC-endorsed ANZ guideline); SOMANZ 2023 Rec 6.5",
   "tags": [
    "magnesium",
    "neuroprotection",
    "preterm",
    "cerebral-palsy"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th></th><th>Neuroprotection</th><th>Eclampsia/PET</th></tr></thead><tbody><tr><td>Why</td><td>Protect fetal brain (reduce CP)</td><td>Treat/prevent maternal seizure</td></tr><tr><td>When</td><td>Birth <span class=\"gv-num\">&lt;30 wk</span> within 24 h</td><td>Any gestation, severe PET/eclampsia</td></tr><tr><td>BP-lowering?</td><td>No</td><td>No (not an antihypertensive)</td></tr></tbody></table>",
   "id": "obs-46",
   "title": "Magnesium for Fetal Neuroprotection",
   "subtitle": "Different indication: imminent very preterm birth"
  },
  {
   "topic": "Magnesium toxicity: monitor reflexes/RR/urine clinically; antidote = calcium gluconate",
   "subarea": "Hypertensive disorders",
   "trap": "- Magnesium toxicity is monitored **clinically** — SOMANZ does **NOT recommend routine serum levels**\n  - Serum levels reserved for **compromised renal function** only\n- Toxicity features: **decreased/absent reflexes**, reduced respiratory rate, drowsiness, slurred speech\n- Urine output matters: magnesium is **renally cleared**\n- Antidote is **calcium gluconate** (NOT calcium chloride)",
   "whatFirst": "- If toxicity suspected: **STOP the magnesium infusion first**\n- Then: check serum Mg, give **calcium gluconate**, and support ventilation",
   "discriminator": "- Order of toxicity by rising level:\n  - **Loss of reflexes** (first warning)\n  - **Respiratory depression**\n  - **Cardiac/conduction arrest** (last)\n- Reflexes disappear **before** breathing stops — use as early warning",
   "redFlags": "- **Decreased/absent deep tendon reflexes**\n- **RR ≤12/min** for 15 min\n- **Drowsiness** or slurred speech\n- Stop infusion and assess immediately",
   "mcqTrap": "- Most tempting wrong answer: '**check serum magnesium level**' as the routine monitor\n  - WRONG — SOMANZ monitoring is **clinical**: reflexes hourly, RR/pulse ox 30-minutely, urine output hourly\n- Also wrong: give '**calcium chloride**' as antidote\n  - Antidote is **calcium gluconate**",
   "mnemonic": "Toxicity climbs bottom-up: Reflexes go, then Respirations go, then the Rhythm/heart goes (R-R-R).",
   "cutoffs": [
    "**Reflexes + urine output** checked hourly; BP/pulse ox/HR/RR every **30 min**",
    "Toxicity: **RR ≤12/min** for 15 min, decreased/absent reflexes, drowsiness, slurred speech",
    "Routine serum Mg **NOT recommended** unless renal function compromised (toxicity if **>3.5 mmol/L**)",
    "Antidote: **calcium gluconate 10%** (10 mL in 100 mL normal saline) IV over 10 min"
   ],
   "source": "SOMANZ Hypertension in Pregnancy Guideline 2023 (Flowchart 6.6 monitoring/toxicity)",
   "tags": [
    "magnesium-toxicity",
    "calcium-gluconate",
    "monitoring",
    "reflexes"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Monitor</th><th>Action / threshold</th></tr></thead><tbody><tr><td>Deep tendon reflexes</td><td>Decreased/absent -> stop infusion (earliest sign)</td></tr><tr><td>Respiratory rate</td><td><span class=\"gv-num\">&lt;=12/min for 15 min</span> -> stop, calcium gluconate</td></tr><tr><td>Urine output</td><td>Oliguria -> review (renal clearance); reduce dose 50% if renal impairment</td></tr><tr><td>Antidote</td><td>Calcium gluconate <span class=\"gv-num\">10% 10 mL</span> in 100 mL NS IV over 10 min</td></tr></tbody></table>",
   "id": "obs-41",
   "title": "Magnesium Sulfate Toxicity",
   "subtitle": "Monitor reflexes/RR clinically; antidote is calcium gluconate"
  },
  {
   "topic": "Pre-eclampsia diagnosis: proteinuria is NOT mandatory (SOMANZ 2023)",
   "subarea": "Hypertensive disorders",
   "trap": "- Under **SOMANZ 2023**, pre-eclampsia = new HTN (sBP ≥140 and/or dBP ≥90) after 20 weeks **PLUS any one feature** of maternal organ OR placental dysfunction\n- **Proteinuria is NOT mandatory** — SOMANZ states it 'should not be considered mandatory to make the diagnosis'\n- New HTN at 30 weeks + thrombocytopenia, OR raised transaminases, OR FGR with abnormal umbilical artery Doppler, OR sustained clonus/persistent headache, OR Cr >90 = **pre-eclampsia even with normal urine PCR**",
   "whatFirst": "- Confirm BP is genuinely **new and ≥20 weeks**\n- Then **hunt for ANY end-organ/uteroplacental feature** — do not stop at the urine dipstick",
   "discriminator": "- **Gestational HTN** = new HTN ≥20 wk with **NO organ involvement**\n- Add **any one organ/placental feature** → becomes **pre-eclampsia**\n- **Chronic HTN** = HTN <20 wk or pre-pregnancy",
   "redFlags": "- **Persistent headache** or visual disturbance\n- **Hyperreflexia with sustained clonus**\n- **RUQ/epigastric pain**\n- Platelets **<150**\n- Cr **>90**\n- Raised **ALT/AST**\n- **FGR + abnormal Doppler**\n- **Pulmonary oedema** or seizure",
   "mcqTrap": "- Most tempting wrong answer: 'urine PCR normal, therefore **not pre-eclampsia** — reassure/discharge'\n- WRONG — **proteinuria is not mandatory**; the organ feature already makes the diagnosis",
   "mnemonic": "PRE-ECLAMPSIA organs: brain, liver, kidney, blood, lungs, placenta - tick ANY one box with new HTN >=20wk.",
   "cutoffs": [
    "New HTN **≥140/90** after 20 weeks",
    "**uPCR ≥30 mg/mmol** (one of several features, NOT required)",
    "**uACR ≥8 mg/mmol** as alternative if uPCR unavailable",
    "Serum creatinine **>90 micromol/L**",
    "Platelets **<150 x10^9/L**",
    "**sFlt-1/PlGF ≤38** rules OUT PET for 1–4 weeks"
   ],
   "source": "SOMANZ Hypertension in Pregnancy Guideline 2023 (Part 1 Definitions; Part 4 Diagnosis)",
   "tags": [
    "pre-eclampsia",
    "diagnosis",
    "SOMANZ",
    "proteinuria"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>System</th><th>Qualifying feature (any ONE + new HTN >=20wk = PET)</th></tr></thead><tbody><tr><td>Renal</td><td>uPCR <span class=\"gv-num\">>=30 mg/mmol</span> OR Cr <span class=\"gv-num\">>90 micromol/L</span></td></tr><tr><td>Haematological</td><td>Platelets <span class=\"gv-num\">&lt;150</span>, haemolysis or DIC</td></tr><tr><td>Hepatic</td><td>Raised transaminases (+/- RUQ pain)</td></tr><tr><td>Neurological</td><td>Seizure, sustained clonus/hyperreflexia, persistent headache, visual change, stroke</td></tr><tr><td>Pulmonary</td><td>Pulmonary oedema</td></tr><tr><td>Uteroplacental</td><td>FGR + abnormal umbilical artery Doppler / oligohydramnios</td></tr></tbody></table>",
   "id": "obs-38",
   "title": "Pre-eclampsia Diagnosis (SOMANZ 2023)",
   "subtitle": "Proteinuria is NOT mandatory for diagnosis"
  },
  {
   "topic": "Severe hypertension >=160/110: lower the BP FIRST, do not rush to delivery",
   "subarea": "Hypertensive disorders",
   "trap": "- BP **≥160/110** is a hypertensive **EMERGENCY** — what-first is **acute BP control**, NOT immediate delivery\n- SOMANZ 2023 first-line short-acting agents: **IV hydralazine**, **IV labetalol**, **oral immediate-release nifedipine**, or **IV diazoxide** (choose by unit familiarity/access)\n- **Stabilise mother first**, then plan delivery",
   "whatFirst": "- Treat to a target of **<160/110** BEFORE arranging delivery\n- Concurrently commence/uptitrate a **regular oral agent** to avoid rebound\n- **Maternal stabilisation** precedes fetal delivery",
   "discriminator": "- Severe-range BP → needs the **antihypertensive**\n- Severe PET with cerebral irritation/eclampsia → needs **magnesium ADDED** (for seizures, not BP)\n- **Magnesium does not lower BP**",
   "redFlags": "- **sBP ≥160 or dBP ≥110** — do not let it persist\n- **Cerebral haemorrhage** is a leading cause of maternal death in pre-eclampsia",
   "mcqTrap": "- Most tempting wrong answer: 'BP 175/115 at 33 weeks → **deliver immediately**'\n- Also wrong: '**give magnesium to lower the BP**'\n- WRONG — control the BP acutely first; magnesium does not lower BP",
   "mnemonic": "160/110 = treat-then-think: antihypertensive now, delivery is a separate decision.",
   "cutoffs": [
    "Severe HTN threshold **≥160/110**",
    "Acute target **<160/110**",
    "**Nifedipine IR** 10–20 mg oral every 30 min, max 45 mg",
    "**IV hydralazine** 5–10 mg every 20 min, max 30 mg",
    "**IV labetalol** 20–40 mg every 10–15 min, max 80 mg",
    "**IV diazoxide** 15 mg every 5–10 min",
    "Refractory: IV infusion **labetalol 20–160 mg/hr** or **hydralazine 10–20 mg/hr**"
   ],
   "source": "SOMANZ Hypertension in Pregnancy Guideline 2023 (Flowchart 6.2, acute hypertension)",
   "tags": [
    "severe-hypertension",
    "emergency",
    "labetalol",
    "nifedipine",
    "hydralazine"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">BP >=160/110</div><div class=\"gv-step\">Acute antihypertensive (hydralazine / labetalol / nifedipine / diazoxide)</div><div class=\"gv-step\">Add magnesium IF cerebral irritation / eclampsia risk</div><div class=\"gv-step\">THEN plan delivery</div></div>",
   "id": "obs-39",
   "title": "Severe Hypertension in Pregnancy",
   "subtitle": "Control BP first; delivery is not the immediate step"
  },
  {
   "topic": "Antenatal corticosteroids: the gestational window + the dose",
   "subarea": "Antepartum emergencies",
   "trap": "- Australian dose is **betamethasone 11.4 mg IM x2 doses 24 hours apart** (Celestone Chronodose)\n  - NOT '12 mg' (that is the UK figure)\n  - NOT a single dose\n- Standard course: **24+0 to 34+6 weeks** when preterm birth expected within 7 days\n- **Late-preterm** single course: **34+0 to 36+6** if no prior course and birth likely within 7 days\n- 'Too late' trap: even if delivery seems **imminent, give the first dose** — partial courses still confer benefit\n  - Do NOT withhold steroids because there may not be 24–48 h\n- Maximal benefit: **24 h after first dose up to 7 days**",
   "whatFirst": "- Threatened preterm birth **24+0–34+6 wk** → give **betamethasone first dose now**\n- Do not wait; give even if delivery may precede the second dose",
   "discriminator": "- **Steroids** = fetal lung maturity (reduce RDS and mortality)\n- **MgSO4** = neuroprotection\n- **Tocolysis** = buys time for the steroids\n- Do not conflate these three",
   "redFlags": "- **Repeat (rescue) course**: consider if still <32–34 wk AND >7 days since first course with renewed imminent-birth risk\n- Avoid **multiple repeated courses** (growth/neurodevelopment concerns)",
   "mnemonic": "Betamethasone Buys Breathing. 11.4 x 2, 24h apart, 24+0-34+6.",
   "source": "RANZCOG 'Antenatal Corticosteroids' / Liggins statement (betamethasone 11.4 mg IM x2, 24h apart); Queensland 'Antenatal corticosteroids' & 'Preterm labour and birth'.",
   "verified": true,
   "tags": [
    "antenatal-corticosteroids",
    "betamethasone",
    "RDS",
    "gestational-window"
   ],
   "cutoffs": [
    "**Betamethasone 11.4 mg IM x2**, 24 h apart",
    "**24+0 to 34+6 weeks** (standard course)",
    "Late-preterm single course **34+0–36+6** if no prior course",
    "Benefit from **24 h to 7 days** after first dose"
   ],
   "mcqTrap": "- '**Withhold steroids because delivery is imminent**' — give the first dose anyway; partial benefit\n- Also: **'12 mg'** (UK) vs Australian **11.4 mg**",
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Betamethasone 11.4 mg IM</span><span class=\"gv-pill\">x2 doses, 24h apart</span><span class=\"gv-pill\">24+0 - 34+6 wk</span><span class=\"gv-pill\">Benefit 24h-7d</span><span class=\"gv-pill\">Reduces RDS + mortality</span></div>",
   "id": "obs-54",
   "title": "Antenatal Corticosteroids",
   "subtitle": "Betamethasone 11.4mg IM x2; given 24+0 to 34+6 weeks",
   "images": [
    {
     "src": "assets/img/paediatrics_cxr_rds_neonate_fresh.png",
     "caption": "Neonatal RDS — CXR ground-glass pattern (indication for antenatal corticosteroids)",
     "alt": "Diffuse reticulogranular ground-glass opacification with air bronchograms and reduced lung volumes in a preterm neonate with respiratory distress syndrome — the condition corticosteroids are given to prevent",
     "credit": "Mikael Häggström, M.D. Author info - Reusing images- Conflicts of interest:  None Mikael Häggström, M.D.Consent note: Written informed consent was obtained from a parent of the individual, including for online publication., Wikimedia Commons, CC0"
    }
   ]
  },
  {
   "topic": "Anti-D after a sensitising APH: one ampoule may NOT be enough",
   "subarea": "Antepartum emergencies",
   "trap": "- **'Already had 28-week anti-D so she is covered'** — WRONG: anti-D required within **72 hours of EVERY sensitising event** (APH/abruption IS a sensitising event), regardless of routine prophylaxis\n- After **large feto-maternal haemorrhage** (abruption, trauma), the standard **625 IU dose may be inadequate**\n  - One 625 IU dose covers only ~**6 mL fetal red cells** (~12 mL fetal whole blood)\n  - Must do a **Kleihauer** (or flow cytometry) to quantify FMH and titrate additional anti-D within 72 h\n- If already **sensitised** (anti-D antibodies on screen): prophylactic anti-D is useless\n  - Answer becomes **fetal surveillance with MCA Doppler** (PSV >1.5 MoM = fetal anaemia)",
   "whatFirst": "- Rh-neg woman with APH after 12+6 weeks:\n  - Check **antibody screen**\n  - Give **anti-D 625 IU within 72 h**\n  - Send **Kleihauer** to determine if more is needed\n- If already **sensitised**: prophylaxis unhelpful → perform **MCA Dopplers**",
   "discriminator": "- **Unsensitised D-negative** → prophylactic anti-D (titrate dose to Kleihauer result)\n- **Already sensitised** → no benefit from anti-D; do **MCA Dopplers**",
   "redFlags": "- **Large abruption/trauma** = potentially large FMH — do not assume one ampoule suffices",
   "mnemonic": "625 IU = ~6 mL fetal cells. Big bleed -> Kleihauer -> more anti-D.",
   "source": "NBA 'Guideline for the prophylactic use of Rh D immunoglobulin in pregnancy care' (2024); RANZCOG. 625 IU IM within 72h; Kleihauer to quantify FMH.",
   "verified": true,
   "tags": [
    "anti-D",
    "kleihauer",
    "rhesus",
    "sensitising-event"
   ],
   "cutoffs": [
    "**625 IU IM** Australian dose",
    "Within **72 h**",
    "1 dose covers ~**6 mL fetal RBC** / ~12 mL whole blood",
    "**MCA-PSV >1.5 MoM** = fetal anaemia"
   ],
   "mcqTrap": "- '**No further anti-D needed — she had her routine 28-week dose**' after an abruption",
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Rh-neg + APH</div><div class=\"gv-step\">Antibody screen</div><div class=\"gv-step\">If unsensitised: anti-D <span class=\"gv-num\">625 IU</span> within <span class=\"gv-num\">72h</span></div><div class=\"gv-step\">Kleihauer -> titrate extra anti-D</div></div>",
   "id": "obs-51",
   "title": "Anti-D After Sensitising APH",
   "subtitle": "Required after every event; routine dose may not cover"
  },
  {
   "topic": "Cervical insufficiency & cerclage / progesterone",
   "subarea": "Antepartum emergencies",
   "trap": "- Classic history = **painless mid-trimester (16–24 wk)** pregnancy loss or extreme preterm birth with painless cervical dilatation\n- Two cerclage routes the exam separates:\n  - **History-indicated cerclage**: placed ~12–14 wk for strong recurrent painless-loss history\n  - **Ultrasound-indicated cerclage**: placed if TVS cervical length **≤25 mm before 24 wk** in a woman with prior preterm birth\n- Short cervix **WITHOUT** prior preterm-birth history → answer is usually **vaginal progesterone**, NOT cerclage\n- Do not confuse with **rescue/emergency cerclage** for already-dilated cervix with exposed membranes\n- Trap: **jumping to cerclage** for an incidental short cervix in a low-risk nullip",
   "whatFirst": "- **Risk-stratify first**:\n  - Strong painless-loss history → **history-indicated cerclage ~12–14 wk**\n  - Short cervix + prior PTB → **USS-indicated cerclage**\n  - Short cervix, no PTB history → **vaginal progesterone**",
   "discriminator": "- **Painless** mid-trimester loss = cervical insufficiency\n- **Painful contractions** = preterm labour\n- **Cerclage vs progesterone** depends on prior preterm-birth history",
   "cutoffs": [
    "TVS cervical length **≤25 mm** before 24 wk = short",
    "History-indicated cerclage **~12–14 wk**",
    "USS-indicated cerclage: **short cervix + prior PTB**",
    "Short cervix, no PTB → **vaginal progesterone**"
   ],
   "redFlags": "- **Painless cervical dilatation** with bulging/exposed membranes mid-trimester → consider **rescue cerclage**",
   "trapAnswer": "'Cervical cerclage' for an incidental short cervix in a woman with NO prior preterm birth - progesterone is preferred.",
   "mcqTrap": "- Offering **cerclage** to a low-risk woman with an **isolated short cervix** instead of **vaginal progesterone**",
   "mnemonic": "Painless loss + history -> stitch; short cervix alone -> progesterone.",
   "source": "RANZCOG/Safer Care Victoria preterm-birth prevention; international consensus (Australian-aligned) (current)",
   "verified": true,
   "tags": [
    "obstetrics",
    "cervical insufficiency",
    "cerclage",
    "progesterone"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Situation</th><th>Intervention</th></tr><tr><td>Strong painless-loss history</td><td>History-indicated cerclage ~12-14 wk</td></tr><tr><td>Cervix &lt;=25 mm + prior PTB</td><td>USS-indicated cerclage</td></tr><tr><td>Cervix &lt;=25 mm, no PTB history</td><td>Vaginal progesterone</td></tr></table>",
   "id": "obs-59",
   "title": "Cervical Insufficiency",
   "subtitle": "Painless mid-trimester loss; history- vs ultrasound-indicated cerclage",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Cervix_length_measurement.jpg",
     "caption": "Transvaginal ultrasound — short cervix with funnelling (cervical insufficiency)",
     "alt": "Short endocervical canal length with funnelling of the internal os — classic ultrasound appearance of cervical insufficiency in the mid-trimester",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Chorioamnionitis in a preterm woman: DELIVER, do not continue expectant management",
   "subarea": "Antepartum emergencies",
   "trap": "- Trap: choosing '**continue steroids and expectant management** because she is only 30 weeks' — WRONG\n- Once **chorioamnionitis is diagnosed** (maternal fever PLUS ≥1 of: maternal/fetal tachycardia, uterine tenderness, offensive/purulent liquor, raised WCC/CRP):\n  - Answer is **broad-spectrum IV antibiotics AND DELIVERY** regardless of gestation\n  - **Tocolysis is contraindicated**\n  - Do **NOT delay** for a full steroid course\n- **Prematurity does not outweigh active intrauterine sepsis**",
   "whatFirst": "- Diagnose chorioamnionitis → **IV broad-spectrum antibiotics + expedite delivery**\n- Mode determined by obstetric factors\n- Do **NOT tocolyse**, do not delay for a full steroid course",
   "discriminator": "- **Uncomplicated PPROM** = expectant management + erythromycin\n- **PPROM + chorioamnionitis** = deliver + IV antibiotics\n- Fever/tenderness/tachycardia **flips the plan**",
   "redFlags": "- **Maternal sepsis features**\n- **Fetal tachycardia**\n- **Foul/purulent liquor**",
   "mnemonic": "Infected uterus = empty the uterus.",
   "source": "Queensland Clinical Guideline; RANZCOG (chorioamnionitis -> deliver + IV antibiotics regardless of gestation).",
   "verified": true,
   "tags": [
    "chorioamnionitis",
    "preterm",
    "sepsis",
    "deliver"
   ],
   "mcqTrap": "- '**Continue expectant management with antibiotics until 34 weeks**' once chorioamnionitis is established",
   "id": "obs-58",
   "title": "Chorioamnionitis in Preterm Pregnancy",
   "subtitle": "Deliver; do not continue expectant management"
  },
  {
   "topic": "MgSO4 for fetal neuroprotection: a DIFFERENT window from the eclampsia dose",
   "subarea": "Antepartum emergencies",
   "trap": "- Do not conflate magnesium's **two obstetric uses**:\n  - **Fetal neuroprotection** (reduces cerebral palsy): given when very preterm birth **<30 weeks** (Australian/Queensland guidance) is expected/planned within 24 h\n  - Ideally started **as close as possible to 4 hours before birth** — still give if birth is sooner\n- **Dose is the same as eclampsia**: 4 g IV load over 20–30 min, then 1 g/hr maintenance until birth, stop at 24 h if undelivered\n- Tempting wrong answer: giving neuroprotective magnesium at **33–34 weeks** (outside the Australian window)\n- Magnesium is **NEITHER** a tocolytic NOR an antihypertensive",
   "whatFirst": "- Imminent birth **<30 wk within 24 h** → start **MgSO4 4 g IV load then 1 g/hr**\n- Do **not delay delivery** for magnesium if baby/mother is compromised",
   "discriminator": "- **Neuroprotection**: <30 wk\n- **Steroids**: 24–34+6 wk\n- **Eclampsia**: any gestation with seizure\n- Same drug, **different indication and gestational cut-off**",
   "redFlags": "- If also giving MgSO4 for eclampsia/severe pre-eclampsia: **do NOT double-dose** — one infusion serves both purposes",
   "mnemonic": "Mag for the Mini brain - under 30 weeks, neuroprotection.",
   "source": "Queensland Clinical Guideline 'Preterm labour and birth' (MgSO4 neuroprotection to <30 wk; 4 g load + 1 g/hr, stop at 24h); national Antenatal MgSO4 guideline.",
   "verified": true,
   "tags": [
    "magnesium-sulfate",
    "neuroprotection",
    "cerebral-palsy",
    "gestational-window"
   ],
   "cutoffs": [
    "Birth expected **<30 weeks** within 24 h",
    "**4 g IV load** over 20–30 min, then **1 g/hr**",
    "Commence as close as possible to **4 h before birth**",
    "Stop at **24 h** if undelivered"
   ],
   "mcqTrap": "- Giving neuroprotective MgSO4 at **33–34 weeks** (outside the Australian <30 wk window)\n- Calling magnesium a **tocolytic** or **antihypertensive**",
   "id": "obs-55",
   "title": "Magnesium for Fetal Neuroprotection",
   "subtitle": "Different window: very preterm birth, not the eclampsia dose"
  },
  {
   "topic": "Placenta accreta spectrum: praevia + prior caesarean = anticipate massive haemorrhage",
   "subarea": "Antepartum emergencies",
   "trap": "- Trap: failure to **anticipate** placenta accreta in praevia + prior CS\n- Accreta risk climbs steeply with each prior caesarean:\n  - **1 prior CS** ~3%\n  - **2 prior CS** ~11%\n  - **3 prior CS** ~40%\n  - **4 prior CS** ~61%\n  - **≥5 prior CS** ~67% (Silver et al. / RANZCOG C-Obs 20)\n- Note: **11% is the figure for TWO prior CS**, not one\n- Tempting wrong answer: 'reassure and plan **routine repeat CS at term**' — WRONG\n  - These need MDT planning, antenatal imaging (USS ± MRI), delivery in a centre with **interventional radiology/cell salvage/blood bank**, and consent for possible **caesarean hysterectomy**\n- Do **NOT attempt to forcibly remove** an adherent placenta",
   "whatFirst": "- Antenatally: identify the at-risk woman (praevia + prior CS), **image to confirm**, refer to **MDT**, plan **elective delivery ~34–36+0 wk** with senior staff + massive transfusion protocol ready\n- Intra-op: if accreta confirmed and placenta will not separate → **leave in situ** and proceed to **planned hysterectomy** rather than piecemeal removal",
   "discriminator": "- **Praevia alone** = bleeding risk\n- **Praevia + uterine scar** = accreta/abnormal invasion risk → placenta will not separate → **torrential PPH**",
   "redFlags": "- Placenta **covering os + anterior + previous CS** on USS\n- Loss of **retroplacental clear zone**\n- **Lacunae** on USS\n- **Bladder-wall interruption** on imaging",
   "mnemonic": "Scar + praevia = Stuck Placenta. Risk by prior CS: ~3 / 11 / 40 / 61 / 67%.",
   "source": "RANZCOG Placenta Accreta Spectrum (C-Obs 20); Queensland Clinical Guideline 'Placenta praevia and accreta'. Risk %s per Silver et al. cohort.",
   "verified": true,
   "tags": [
    "placenta-accreta",
    "praevia",
    "prior-caesarean",
    "anticipation"
   ],
   "cutoffs": [
    "Praevia + **1 prior CS** ~**3%**",
    "+**2** prior CS ~**11%**",
    "+**3** prior CS ~**40%**",
    "+**4** prior CS ~**61%**",
    "+**≥5** prior CS ~**67%**",
    "Elective delivery **~34–36 wk**"
   ],
   "mcqTrap": "- '**Routine vaginal delivery / routine CS with manual removal**' — high accreta risk demands MDT + hysterectomy readiness\n- Also: **11%** is the **2-prior-CS** figure, NOT 1",
   "id": "obs-50",
   "title": "Placenta Accreta Spectrum",
   "subtitle": "Praevia plus prior caesarean; anticipate massive haemorrhage",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/5/54/Placenta_accreta.png",
     "caption": "Placenta accreta spectrum - MRI showing myometrial invasion",
     "alt": "MRI sagittal view showing placenta with loss of normal myometrial signal / 'dark intraplacental bands' indicating accreta spectrum disorder",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Placenta praevia vs placental abruption: the no-digital-VE rule",
   "subarea": "Antepartum emergencies",
   "trap": "- The single most tempting wrong answer in a painless APH stem is **'perform a speculum AND digital vaginal examination to assess the os'**\n  - In any APH where praevia is not yet excluded, **no digital vaginal exam** (and no rectal exam) until ultrasound has excluded a low-lying placenta\n  - A digit through a praevia can provoke **catastrophic haemorrhage**\n- Mimic trap: a large **concealed abruption** can present with little external bleeding but shock and pain out of proportion\n  - Do NOT be reassured by a 'small' visible loss\n  - A **normal ultrasound does NOT exclude abruption** — it is a clinical diagnosis",
   "whatFirst": "- **Resuscitate first**: large-bore IV x2, FBC/coags/fibrinogen, group & crossmatch, Kleihauer, anti-D if Rh-neg\n- Assess fetus with **CTG** before any examination\n- **Ultrasound to locate placenta** before any digital VE",
   "discriminator": "- Painless + soft uterus + bright bleed → think **praevia** (scan first)\n- Painful + **woody/tender uterus** + dark or concealed bleed +/- fetal distress + clotting derangement → abruption",
   "redFlags": "- **Hard tender uterus**\n- Maternal shock **disproportionate** to visible loss\n- **Fetal bradycardia**/loss of variability\n- Falling **fibrinogen (<2 g/L)** — ominous in pregnancy\n  - All of the above = abruption with evolving DIC → activate massive transfusion / expedite delivery",
   "mnemonic": "PRaevia = Painless & Relaxed uterus; abRUPTion = paiN, RUmbling-hard uterus, may be concealed.",
   "source": "Queensland Clinical Guideline 'Antepartum haemorrhage' (2024); RANZCOG. No digital VE until praevia excluded by USS.",
   "verified": true,
   "tags": [
    "antepartum-haemorrhage",
    "placenta-praevia",
    "abruption",
    "what-first"
   ],
   "cutoffs": [
    "**Fibrinogen <2 g/L** ominous in pregnancy"
   ],
   "mcqTrap": "- '**Digital vaginal exam** to assess cervical dilatation' in a painless-bleed stem — never until praevia excluded by USS",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Feature</th><th>Praevia</th><th>Abruption</th></tr></thead><tbody><tr><td>Pain</td><td>Painless</td><td>Painful</td></tr><tr><td>Uterus</td><td>Soft, non-tender</td><td>Tense, woody, tender</td></tr><tr><td>Bleeding</td><td>Fresh, visible</td><td>Dark, may be concealed</td></tr><tr><td>Fetus</td><td>Usually well</td><td>Distress / demise</td></tr><tr><td>DIC risk</td><td>Low</td><td>High</td></tr><tr><td>Digital VE</td><td>FORBIDDEN until USS</td><td>Avoid until praevia excluded</td></tr></tbody></table>",
   "id": "obs-48",
   "title": "Placenta Praevia",
   "subtitle": "No digital VE in unexcluded APH",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/2906_Placenta_Previa-02.jpg/960px-2906_Placenta_Previa-02.jpg",
     "caption": "Placenta praevia - transvaginal ultrasound",
     "alt": "Transvaginal ultrasound showing the placenta overlying or abutting the internal cervical os (major/complete praevia)",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "PPROM timing of delivery & no-tocolysis-if-infection",
   "subarea": "Antepartum emergencies",
   "trap": "- Two timing traps:\n- (1) **Tocolysis is NOT indicated** if there is infection (chorioamnionitis), active bleeding, or non-reassuring fetal status\n  - Prolonging the pregnancy in sepsis harms mother and baby\n- (2) For uncomplicated PPROM, expectant management continues to roughly **37 weeks**; do NOT keep going to term/40 weeks 'because she is not in labour'\n  - Rising infection risk eventually outweighs prematurity\n- Tempting wrong answer: **'tocolyse to prolong pregnancy'** in a febrile woman, or 'await spontaneous labour to term'",
   "whatFirst": "- Uncomplicated PPROM: **admit**, corticosteroids if appropriate gestation, erythromycin, surveil for infection\n- **MgSO4** if birth <30 wk imminent\n- Plan **delivery ~37 wk**\n- Any infection → **deliver**, do NOT tocolyse",
   "discriminator": "- Tocolysis in PPROM only ever to buy time for steroids/transfer in the **absence of infection**\n- Presence of **infection** flips management to expedited delivery",
   "redFlags": "- **Chorioamnionitis**, abruption, cord prolapse, non-reassuring CTG = **immediate delivery** (no tocolysis)",
   "mnemonic": "Waters broken + fever = baby out, not drugs in.",
   "source": "Queensland Clinical Guideline 'PPROM'; Safer Care Victoria - expectant to ~37 wk if uncomplicated, deliver if infection.",
   "verified": true,
   "tags": [
    "PPROM",
    "tocolysis",
    "timing-of-delivery",
    "chorioamnionitis"
   ],
   "cutoffs": [
    "Deliver uncomplicated PPROM **~37 weeks**"
   ],
   "mcqTrap": "- '**Give tocolytics** to prolong the pregnancy' in a PPROM woman with maternal fever and fetal tachycardia",
   "id": "obs-53",
   "title": "PPROM Delivery Timing",
   "subtitle": "No tocolysis if infection, bleeding or non-reassuring fetus"
  },
  {
   "topic": "PPROM antibiotics: erythromycin YES, co-amoxiclav NO (NEC)",
   "subarea": "Antepartum emergencies",
   "trap": "- The single most tempting wrong MCQ option is **'co-amoxiclav (amoxicillin-clavulanate / Augmentin)'** as the latency antibiotic\n  - The ORACLE I trial linked co-amoxiclav to a significant increase in **neonatal necrotising enterocolitis (NEC)** — specifically AVOIDED in PPROM\n- Correct Australian latency antibiotic: **erythromycin 250 mg orally every 6 hours** for up to 7 days or until birth\n  - Azithromycin 1 g single dose is an accepted alternative\n- This is distinct from **intrapartum GBS prophylaxis** with penicillin",
   "whatFirst": "- Confirmed PPROM (preterm, no labour, no infection): give **erythromycin** + antenatal corticosteroids\n- Add **MgSO4** for neuroprotection if birth <30 wk likely\n- Do **NOT** routinely tocolyse\n- **Deliver** if chorioamnionitis develops",
   "discriminator": "- Latency antibiotic in PPROM = **erythromycin** (macrolide)\n- The wrong instinct 'broad-spectrum is better' picks **co-amoxiclav**, which causes NEC",
   "redFlags": "- Maternal fever, tachycardia, uterine tenderness, offensive liquor, fetal tachycardia, rising **CRP/WCC** = chorioamnionitis\n  - Stop expectant management, give **IV antibiotics**, DELIVER regardless of gestation",
   "mnemonic": "ERY for the EARly waters (erythromycin); Augmentin Aggravates the gut (NEC) - avoid.",
   "source": "Queensland Clinical Guideline 'Preterm prelabour rupture of membranes (PPROM)'; ORACLE I (erythromycin benefit; co-amoxiclav -> NEC).",
   "verified": true,
   "tags": [
    "PPROM",
    "erythromycin",
    "co-amoxiclav",
    "NEC",
    "antibiotics"
   ],
   "cutoffs": [
    "**Erythromycin 250 mg** every 6h for up to 7 days or until birth",
    "**Azithromycin 1 g** single dose = alternative",
    "**Avoid co-amoxiclav** (NEC)"
   ],
   "mcqTrap": "- '**Commence co-amoxiclav** for latency' — causes neonatal NEC; erythromycin is correct",
   "id": "obs-52",
   "title": "PPROM Latency Antibiotics",
   "subtitle": "Erythromycin yes; co-amoxiclav causes neonatal NEC"
  },
  {
   "topic": "Preterm labour: tocolysis ONLY buys time for steroids/transfer",
   "subarea": "Antepartum emergencies",
   "trap": "- Conceptual trap: tocolysis does **NOT improve neonatal outcome** by itself\n  - Its ONLY job is to delay birth **~48h** to allow antenatal corticosteroids to work, magnesium neuroprotection (if <30 wk), and in-utero transfer to a centre with NICU\n- The 'package' answer for threatened preterm labour <34 wk: **corticosteroids + MgSO4** (if <30 wk) + in-utero transfer + consider short-course tocolysis\n- Wrong answer: **'long-term/maintenance tocolysis'** to keep her pregnant\n- Tocolysis is **CONTRAINDICATED** with chorioamnionitis, significant APH/abruption, or non-reassuring fetal status\n- **Nifedipine** = common Australian first-line tocolytic; atosiban = alternative\n  - **AVOID combining nifedipine with magnesium** (cardiovascular collapse risk)\n  - Avoid **beta-agonists** (maternal pulmonary oedema)",
   "whatFirst": "- Confirmed preterm labour <34 wk, no contraindication → **steroids** + MgSO4 (if <30 wk) + arrange transfer\n- Tocolysis only to enable these, **max ~48h**",
   "discriminator": "- Tocolysis = a **48h time-buyer**, not a treatment\n- The neonatal benefit comes from the **steroids**, not the tocolytic",
   "redFlags": "- **Infection**, abruption, fetal compromise = do NOT tocolyse; **deliver**",
   "mnemonic": "Tocolysis = a Taxi: just buys time to get steroids on board and reach the NICU.",
   "source": "Queensland Clinical Guideline 'Preterm labour and birth'; RANZCOG (tocolysis to facilitate steroids/transfer; nifedipine first-line, atosiban alternative).",
   "verified": true,
   "tags": [
    "preterm-labour",
    "tocolysis",
    "nifedipine",
    "in-utero-transfer"
   ],
   "cutoffs": [
    "Tocolysis max **~48h**"
   ],
   "mcqTrap": "- '**Commence maintenance tocolysis** to prolong the pregnancy to term' — tocolysis only buys ~48h for steroids",
   "id": "obs-56",
   "title": "Tocolysis in Preterm Labour",
   "subtitle": "Only buys ~48h for steroids and transfer"
  },
  {
   "topic": "Cord prolapse: relieve cord pressure FIRST, then immediate delivery",
   "subarea": "Antepartum emergencies",
   "trap": "- What-first trap: on finding a prolapsed cord, immediate priority is to **relieve pressure OFF the cord** — NOT to rush a digital examination or attempt to replace it\n- Do this by:\n  - **Manually elevating the presenting part** off the cord (gloved hand in vagina, keep it there during transfer)\n  - Positioning **knee-chest or head-down/left-lateral**\n  - **Filling the bladder** with ~500-750 mL saline (empty before delivery)\n- **Minimise handling** of the cord — handling causes vasospasm\n- Tempting wrong answers:\n  - '**Attempt to manually reduce/replace the cord** into the uterus'\n  - '**Expedite vaginal delivery**' when not imminently deliverable\n- Default = **category-1 CS** (aim delivery within 30 min)",
   "whatFirst": "- 1) **Call for help** / emergency buzzer\n- 2) **Elevate presenting part** off cord + knee-chest or head-down + fill bladder ~500-750 mL\n- 3) **Continuous fetal monitoring** + stop oxytocin / give tocolytic if needed\n- 4) **Immediate delivery** — usually category-1 CS within 30 min\n  - Instrumental only if fully dilated & safe/imminent",
   "discriminator": "- Cord prolapse = **mechanical emergency**: fix is keeping pressure OFF the cord until delivery\n- **Funic reduction** (replacing the cord) is not routine",
   "redFlags": "- Persistent **fetal bradycardia** despite decompression manoeuvres → proceed to delivery without delay",
   "mnemonic": "CORD: Call help, Off-load the cord, Reposition (knee-chest) + fill bladdeR, Deliver (CS).",
   "source": "Queensland Clinical Guideline; RCOG GTG No.50 (Umbilical Cord Prolapse) - elevate presenting part, knee-chest, fill bladder 500-750 mL, category-1 CS within 30 min.",
   "verified": true,
   "tags": [
    "cord-prolapse",
    "intrapartum-emergency",
    "knee-chest",
    "what-first"
   ],
   "cutoffs": [
    "Bladder fill **~500-750 mL**",
    "**Category-1 CS within 30 min**"
   ],
   "mcqTrap": "- '**Manually replace the cord** into the uterus' or 'handle/check the cord pulsation repeatedly'\n  - Minimise handling; relieve pressure and deliver",
   "id": "obs-57",
   "title": "Umbilical Cord Prolapse",
   "subtitle": "Relieve cord pressure first, then immediate delivery",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Cord.prolaps.jpg/960px-Cord.prolaps.jpg",
     "caption": "Umbilical cord prolapse - clinical photograph",
     "alt": "Prolapsed umbilical cord visibly presenting through or beyond the cervical os / vaginal introitus",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Vasa praevia: painless bleed at ROM + acute fetal compromise = FETAL blood",
   "subarea": "Antepartum emergencies",
   "trap": "- Tempting wrong answer: '**maternal resuscitation + transfuse mother + expectant management**' — WRONG\n  - The blood lost at membrane rupture is **FETAL** — even a modest loss is rapidly exsanguinating for the baby\n- Answer = **IMMEDIATE category-1 caesarean** — there is no time for an Apt/Kleihauer test in the acute bleed\n- Other trap: failing to recognise that **antenatally-diagnosed vasa praevia** is managed by planned admission, corticosteroids from ~32 weeks, and elective CS at **34-36 weeks BEFORE labour/ROM**\n  - **Never** awaiting spontaneous labour",
   "whatFirst": "- Bleeding + **fetal bradycardia/sinusoidal trace** at ROM → obstetric emergency\n- **Immediate category-1 caesarean**\n- Alert **neonatal team** for likely fetal anaemia (may need volume + transfusion)",
   "discriminator": "- Vasa praevia = **small maternal bleed**, catastrophic **FETAL** effect (fetal distress dominates)\n- Praevia/abruption = maternal bleed, **maternal haemodynamic** effect\n- **Sinusoidal CTG** points to fetal anaemia (vasa praevia / fetomaternal haemorrhage / rhesus)\n  - NOT maternal opioid — that is pseudosinusoidal",
   "redFlags": "- **Sinusoidal trace**\n- Sudden **fetal bradycardia** at the moment of ROM\n- Dark/fresh PV blood with **painless onset**",
   "mnemonic": "Vasa = Vessels (fetal). Vessel rupture at waters breaking = baby bleeds, deliver NOW.",
   "source": "RANZCOG Vasa Praevia C-Obs 47 v3 (July 2025): antenatally diagnosed -> steroids from ~32 wk + elective CS 34-36 wk; acute bleed at ROM -> immediate CS.",
   "verified": true,
   "tags": [
    "vasa-praevia",
    "sinusoidal-CTG",
    "fetal-anaemia",
    "what-first"
   ],
   "cutoffs": [
    "Corticosteroids from **~32 wk**",
    "Elective CS **34-36 wk** if antenatally diagnosed"
   ],
   "mcqTrap": "- '**Transfuse the mother** and continue labour' — the blood is fetal; immediate CS is the only answer",
   "id": "obs-49",
   "title": "Vasa Praevia",
   "subtitle": "Bleed at ROM is fetal; immediate category-1 caesarean",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Vasaprevia.jpg",
     "caption": "Vasa praevia - colour Doppler ultrasound showing fetal vessels over os",
     "alt": "Colour Doppler transvaginal ultrasound demonstrating fetal blood vessels running across the internal cervical os (vasa praevia)",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Active management of the third stage - prophylactic oxytocin (the biggest PPH preventer)",
   "subarea": "Labour & CTG monitoring",
   "trap": "- GOTCHA: **prophylactic oxytocin** is the component that does the heavy lifting for PPH reduction\n  - Given **prophylactically** to every woman — not reserved for when bleeding starts\n- Queensland 'modified active management':\n  - (1) **Oxytocin 10 IU IM** shortly after birth of the baby\n  - (2) **Deferred (delayed) cord clamping** — wait at least 1 minute or until cord pulsation ceases\n    - Deferred clamping and the uterotonic are **NOT mutually exclusive**\n  - (3) **Controlled cord traction** with uterine guarding after signs of separation\n- Prolonged third stage = **>30 min** with active management (>60 min with physiological/expectant) → consider retained placenta\n- **Ergometrine/Syntometrine raises BP** — avoided in hypertension and pre-eclampsia",
   "mnemonic": "Modified active 3rd stage: Oxytocin 10 IU IM, deferred Clamp (>=1 min), Controlled cord traction. Oxytocin first, before bleeding.",
   "source": "Queensland Clinical Guideline Normal Birth - third stage (2022); Queensland Clinical Guideline Primary Postpartum Haemorrhage",
   "verified": true,
   "whatFirst": "- FIRST give **prophylactic oxytocin 10 IU IM** shortly after birth of the baby\n  - Key PPH-prevention step — done **BEFORE** the placenta delivers and before any bleeding",
   "discriminator": "- **Active management** (uterotonic + CCT) markedly reduces PPH/blood loss vs physiological/expectant management\n- Choose active unless the woman declines after counselling",
   "mcqTrap": "- **Reserving oxytocin** until PPH begins\n- Choosing **ergometrine/Syntometrine in a pre-eclamptic/hypertensive** woman — oxytocin is the prophylactic agent and ergometrine is contraindicated in hypertension",
   "tags": [
    "third-stage",
    "active-management",
    "oxytocin",
    "PPH-prevention"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Birth of baby -> oxytocin 10 IU IM</div><div class=\"gv-step\">Deferred cord clamping >=1 min / until pulsation ceases</div><div class=\"gv-step\">Signs of separation -> controlled cord traction + guard uterus</div><div class=\"gv-step\">Placenta out; if not by 30 min (active) -> retained placenta pathway</div></div>",
   "id": "obs-73",
   "title": "Active Third-Stage Management",
   "subtitle": "Prophylactic oxytocin for every woman, not just bleeders"
  },
  {
   "topic": "Group B Strep: the automatic intrapartum-prophylaxis indications",
   "subarea": "Labour & CTG monitoring",
   "trap": "- Two indications give **intrapartum IV benzylpenicillin AUTOMATICALLY**, regardless of (or in the absence of) a swab result:\n  - (1) **GBS bacteriuria** at ANY concentration in the CURRENT pregnancy\n  - (2) A **previous infant with invasive GBS disease**\n- These **override** a negative or unavailable swab — do NOT re-swab and do NOT withhold\n- Other intrapartum indications:\n  - Positive **35-37 wk swab** (universal-screening pathway)\n  - Risk factors (preterm labour, **ROM >18 h**, intrapartum fever >=38) in the risk-based pathway\n- Australia uses EITHER **universal-screening** (swab 35-37 wk) OR **risk-based** pathway (varies by state — Qld is risk-based)",
   "whatFirst": "- GBS bacteriuria this pregnancy OR **previous GBS-affected baby** → give **intrapartum penicillin** regardless of swab",
   "discriminator": "- These two are **absolute indications** — a negative/absent swab does NOT cancel them\n- Screening vs risk-based pathways differ only for **everyone else**",
   "cutoffs": [
    "**GBS bacteriuria (any concentration)** this pregnancy → IAP",
    "**Previous infant with invasive GBS** → IAP",
    "Screening pathway: swab **35-37 wk**",
    "Risk-based: preterm labour / **ROM >18 h** / fever **>=38**",
    "**Penicillin** (clindamycin if severe allergy)"
   ],
   "redFlags": "- **Intrapartum fever**, prolonged ROM, or preterm labour in a GBS-carrier",
   "trapAnswer": "'Swab is negative, so no antibiotics' in a woman with GBS bacteriuria this pregnancy or a prior affected baby - wrong, treat anyway.",
   "mcqTrap": "- **Withholding prophylaxis** because of a negative/absent swab despite an absolute indication",
   "mnemonic": "Bacteriuria now or a Baby Before = treat regardless of the swab.",
   "source": "Queensland Clinical Guidelines (Early-onset GBS); Safer Care Victoria GBS (current)",
   "verified": true,
   "tags": [
    "obstetrics",
    "GBS",
    "intrapartum prophylaxis"
   ],
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">GBS bacteriuria this pregnancy -> IAP</span><span class=\"gv-pill\">Previous GBS baby -> IAP</span><span class=\"gv-pill\">Positive 35-37wk swab -> IAP</span><span class=\"gv-pill\">Negative swab does NOT override the first two</span></div>",
   "id": "obs-74",
   "title": "Automatic GBS Prophylaxis Indications",
   "subtitle": "GBS bacteriuria or a previous affected infant: treat regardless of swab"
  },
  {
   "topic": "CTG baseline and variability - the current Australian numbers",
   "subarea": "Labour & CTG monitoring",
   "trap": "- GOTCHA (recently CHANGED): RANZCOG defines normal variability as **6-25 bpm** — the old figure many students memorised was 5-25 bpm\n- Normal baseline: **110-160 bpm**\n- Reduced variability **3-5 bpm** is UNLIKELY to signify compromise in isolation for up to **~40 minutes** (think fetal sleep cycle)\n  - Becomes significant when sustained beyond ~40 min or combined with decelerations\n- **Absent variability (<3 bpm)** = 'likely fetal compromise' category\n- **Increased variability >25 bpm** is also abnormal",
   "mnemonic": "Baseline 110-160; variability SIX-to-25 (not five). 3-5 bpm benign in isolation up to ~40 min; <3 bpm = ominous.",
   "source": "RANZCOG Intrapartum Fetal Surveillance (C-Obs 1) Clinical Guideline v5.1 (2026)",
   "verified": true,
   "whatFirst": "- Reduced variability: FIRST **exclude a benign cause** (fetal sleep cycle, typically <40 min; recent opioid/sedation)\n- Consider **fetal scalp/abdominal stimulation**\n- Persistent reduced variability or with other abnormalities needs **escalation**",
   "discriminator": "- Transient reduced variability (<40 min, otherwise normal trace) = likely **fetal sleep**\n- **Sustained reduced/absent variability** or with late decels = hypoxia",
   "mcqTrap": "- Writing **'5-25 bpm'** as the normal variability range — the current RANZCOG figure is 6-25\n- Calling a brief **sleep-cycle dip** in variability pathological",
   "tags": [
    "CTG",
    "baseline",
    "variability",
    "guideline-change"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Feature</th><th>Normal (current AU)</th><th>Concerning</th></tr></thead><tbody><tr><td>Baseline</td><td><span class=\"gv-num\">110-160 bpm</span></td><td>Tachy >160 / Brady (>5 min below baseline)</td></tr><tr><td>Variability</td><td><span class=\"gv-num\">6-25 bpm</span></td><td>3-5 bpm if sustained; absent &lt;3 bpm; increased >25 bpm</td></tr></tbody></table>",
   "id": "obs-66",
   "title": "CTG Baseline and Variability",
   "subtitle": "RANZCOG normal variability is 6-25 bpm, not 5-25",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/a/a5/CTG_Output.jpg",
     "caption": "CTG - normal baseline and variability (6-25 bpm)",
     "alt": "Cardiotocograph trace showing a normal baseline rate (110-160 bpm) with normal beat-to-beat variability of 6-25 bpm",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Cardiotocography.jpg/960px-Cardiotocography.jpg",
     "caption": "CTG - reduced variability (sinusoidal / flat trace)",
     "alt": "Cardiotocograph trace demonstrating reduced/absent variability (less than 5 bpm) indicating possible fetal compromise",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "CTG framework - DR C BRAVADO (read it in order)",
   "subarea": "Labour & CTG monitoring",
   "trap": "- GOTCHA: the single most-marked element is **timing decelerations against contractions** — that is what separates benign early from ominous late\n- **'Contractions per 10 minutes'** is read from the toco trace\n- Excessive uterine activity (**tachysystole, >5 contractions in 10 min**) is itself a cause of fetal compromise — often iatrogenic from oxytocin\n  - The fix may be to **STOP/reduce the oxytocin**, not to deliver",
   "mnemonic": "DR C BRAVADO: Define Risk, Contractions, Baseline RAte, Variability, Accelerations, Decelerations, Overall.",
   "source": "RANZCOG Intrapartum Fetal Surveillance (C-Obs 1) Clinical Guideline v5.1 (2026); Queensland Clinical Guideline Intrapartum Fetal Surveillance",
   "verified": true,
   "whatFirst": "- If a CTG is abnormal, FIRST **address reversible causes** before deciding on delivery:\n  - **Stop/reduce oxytocin**\n  - **Reposition** off the back (avoid aortocaval compression)\n  - **IV fluids**\n  - Correct **maternal hypotension**\n  - Exclude **cord prolapse/abruption**",
   "discriminator": "- Excessive uterine activity (**>5 contractions/10 min**) causing FHR abnormality → **reduce/stop oxytocin** +/- tocolysis (iatrogenic), not immediate CS",
   "mcqTrap": "- Skipping straight to **caesarean** on an abnormal trace while an obvious reversible cause is uncorrected\n  - e.g. **oxytocin-driven excessive uterine activity**, supine hypotension",
   "tags": [
    "CTG",
    "DR-C-BRAVADO",
    "reversible-causes"
   ],
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">DR - Define Risk</span><span class=\"gv-pill\">C - Contractions/10min</span><span class=\"gv-pill\">BRa - Baseline Rate</span><span class=\"gv-pill\">V - Variability</span><span class=\"gv-pill\">A - Accelerations</span><span class=\"gv-pill\">D - Decelerations</span><span class=\"gv-pill\">O - Overall</span></div>",
   "id": "obs-65",
   "title": "CTG Framework",
   "subtitle": "Time decelerations against contractions to separate early from late",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Cardiotocography_diagram.jpg/960px-Cardiotocography_diagram.jpg",
     "caption": "CTG - annotated trace with contractions (DR C BRAVADO features)",
     "alt": "Cardiotocograph paper showing fetal heart rate channel and toco (contraction) channel with labelled features: baseline, variability, accelerations, decelerations timed against contractions",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "CTG overall classification - feature-based, not the old three-tier grid",
   "subarea": "Labour & CTG monitoring",
   "trap": "- GOTCHA: current Australian (RANZCOG v5.1) approach is **feature-based**, NOT the old rigid NICE-style 'normal/suspicious/pathological' three-tier grid\n- RANZCOG feature groups:\n  - **Low probability of compromise** (normal)\n  - **Unlikely to be associated in isolation**: baseline 100-109, reduced variability 3-5 bpm up to 40 min, absent accelerations, early decels, uncomplicated variable decels\n  - **May be associated**: tachycardia >160, rising baseline, complicated variable or late decels, prolonged decels >90 s\n  - **Likely associated with compromise** (requiring immediate management): bradycardia >5 min, **absent variability <3 bpm**, increased variability >25 bpm, sinusoidal, complicated variable/late decels with reduced/absent variability\n- Management ladder: **identify and treat reversible cause** → intrauterine resuscitation → further assessment (FBS/scalp stimulation) → expedite birth if no improvement",
   "mnemonic": "Group features: Low / Unlikely-in-isolation / May-be / Likely -> then Resuscitate, Reassess, (Sample), Rescue (deliver).",
   "source": "RANZCOG Intrapartum Fetal Surveillance (C-Obs 1) Clinical Guideline v5.1 (2026); Queensland Clinical Guideline Intrapartum Fetal Surveillance",
   "verified": true,
   "whatFirst": "- On an abnormal CTG: FIRST **identify and correct the reversible cause** and perform intrauterine resuscitation\n  - Before escalating to **FBS or delivery**",
   "discriminator": "- An isolated **'unlikely-in-isolation'** feature (e.g. early decels) is reviewed but rarely needs delivery\n- Multiple **'likely compromise'** features = high suspicion = **expedite**",
   "mcqTrap": "- Forcing a trace into **'suspicious vs pathological'** boxes\n  - Missing that the current Australian answer is to act on the **abnormal feature(s)** and the likely cause",
   "tags": [
    "CTG",
    "classification",
    "escalation"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Assess features (DR C BRAVADO)</div><div class=\"gv-step\">Group: low / unlikely-in-isolation / may-be / likely compromise</div><div class=\"gv-step\">Abnormal -> treat reversible cause + intrauterine resuscitation</div><div class=\"gv-step\">No improvement -> FBS/scalp stim (if feasible) or expedite birth</div></div>",
   "id": "obs-70",
   "title": "CTG Overall Classification",
   "subtitle": "RANZCOG is feature-based, not the old three-tier grid",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Kardiotokogramm.jpg/960px-Kardiotokogramm.jpg",
     "caption": "CTG - RANZCOG feature-based classification example",
     "alt": "Cardiotocograph trace illustrating a combination of reassuring and non-reassuring features as classified by the RANZCOG feature-based (not three-tier) system",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "CTG vs intermittent auscultation: who gets which",
   "subarea": "Labour & CTG monitoring",
   "trap": "- The upstream decision before any CTG interpretation: **LOW-RISK** women in established labour should have **INTERMITTENT AUSCULTATION** (Pinard or Doppler), NOT continuous CTG\n  - Routine continuous EFM in low-risk labour increases instrumental births and caesareans **without reducing cerebral palsy**\n- **IA technique**: listen for **>=1 minute** immediately AFTER a contraction\n  - Every **~15 min** in first stage\n  - Every **~5 min** (or after every contraction) in second stage\n- Shift to **CONTINUOUS CTG** if any risk factor appears:\n  - **Meconium**, intrapartum bleeding, maternal fever/sepsis\n  - **Oxytocin/induction**, abnormal IA\n  - **Hypertension**/pre-eclampsia, prior CS/VBAC\n  - **Prematurity**, FGR, multiple pregnancy\n- Trap: putting **every labouring woman** on continuous CTG",
   "whatFirst": "- Low-risk + normal IA -> **continue intermittent auscultation**\n- A risk factor appears -> **switch to continuous CTG**",
   "discriminator": "- **Continuous CTG** is for risk factors, not for everyone\n- Routine CTG in low-risk labour **raises intervention without benefit**",
   "cutoffs": [
    "IA: **>=1 min** after a contraction",
    "First stage: every **~15 min**; second stage: every **~5 min** / each contraction",
    "Switch to CTG: **meconium**, fever, bleeding, oxytocin/IOL, FGR, twins, VBAC, hypertension, abnormal IA"
   ],
   "redFlags": "- Any new **intrapartum risk factor** or an abnormality heard on auscultation -> **continuous CTG**",
   "trapAnswer": "'Commence continuous CTG' for a healthy low-risk woman in spontaneous labour - IA is the standard.",
   "mcqTrap": "- Defaulting **every labouring woman** to continuous CTG rather than reserving it for risk factors",
   "mnemonic": "Low-risk = listen (IA); risk appears = continuous.",
   "source": "RANZCOG Intrapartum Fetal Surveillance (IFS); Queensland Clinical Guideline IFS (current)",
   "verified": true,
   "tags": [
    "obstetrics",
    "CTG",
    "intermittent auscultation",
    "fetal surveillance"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Risk status</th><th>Monitoring</th></tr><tr><td>Low-risk, normal IA</td><td>Intermittent auscultation</td></tr><tr><td>Meconium / fever / bleed / oxytocin / FGR / twins / VBAC / abnormal IA</td><td>Continuous CTG</td></tr></table>",
   "id": "obs-75",
   "title": "CTG vs Intermittent Auscultation",
   "subtitle": "Low-risk labour gets auscultation, not continuous CTG",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Pinard_horn_Uganda_US_Army_nurse.jpg/960px-Pinard_horn_Uganda_US_Army_nurse.jpg",
     "caption": "Intermittent auscultation - Pinard stethoscope in use",
     "alt": "Midwife using a Pinard horn (fetoscope) against the maternal abdomen for intermittent auscultation of fetal heart in low-risk labour",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/a/a5/CTG_Output.jpg",
     "caption": "Continuous CTG trace - comparison with auscultation",
     "alt": "Continuous electronic fetal monitoring (CTG) strip showing the difference between continuous EFM and the intermittent auscultation approach in low-risk labour",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Decelerations - early vs variable vs LATE (the most-tested discriminator)",
   "subarea": "Labour & CTG monitoring",
   "trap": "- The entire distinction is **TIMING relative to the contraction**\n  - **Early** = onset/nadir WITH the contraction (head compression, benign)\n  - **Late** = onset/nadir/recovery LAG *behind* the contraction (uteroplacental insufficiency, ominous)\n  - **Variable** = abrupt, contraction-independent (cord)\n- Do NOT be reassured by a **'shallow' late decel** — late decelerations are ominous regardless of depth\n- Late decelerations + **complicated variable decelerations** = 'likely fetal compromise', especially when combined with **reduced or absent baseline variability**\n- **Uncomplicated variable decelerations** are unlikely to signify compromise in isolation",
   "mnemonic": "Early = head, Variable = cord (V for Variable AND V-shaped), Late = placenta.",
   "source": "RANZCOG Intrapartum Fetal Surveillance (C-Obs 1) Clinical Guideline v5.1 (2026); Queensland Clinical Guideline Intrapartum Fetal Surveillance",
   "verified": true,
   "whatFirst": "- Late or complicated-variable decels: FIRST do **intrauterine resuscitation**\n  - Stop **oxytocin**, reposition off back, IV fluids, correct hypotension\n- If not resolving -> **fetal blood sampling** (where feasible) or expedite birth",
   "discriminator": "- Nadir **WITH** peak = early (head, benign)\n- Abrupt and contraction-independent = **variable** (cord)\n- Onset/nadir/recovery **AFTER** the contraction = late (**placental insufficiency**)",
   "mcqTrap": "- Labelling late decelerations **'benign head compression'**\n- Confusing **early** (mirrors contraction, benign) with **late** (lags the contraction, ominous)",
   "tags": [
    "CTG",
    "decelerations",
    "early",
    "variable",
    "late"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Type</th><th>Timing vs contraction</th><th>Cause</th><th>Significance</th></tr></thead><tbody><tr><td>Early</td><td>Nadir = contraction peak (mirrors it)</td><td>Head compression (vagal)</td><td>Benign</td></tr><tr><td>Variable</td><td>Abrupt, V-shaped, variable/independent</td><td>Cord compression</td><td>OK if uncomplicated; bad if complicated</td></tr><tr><td>Late</td><td>Onset/nadir/recovery AFTER contraction</td><td>Uteroplacental insufficiency</td><td>Ominous (esp. with reduced variability)</td></tr></tbody></table>",
   "id": "obs-67",
   "title": "Decelerations: Early vs Variable vs Late",
   "subtitle": "Timing is everything: late decels lag the contraction",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Cardiotocography_diagram.jpg/960px-Cardiotocography_diagram.jpg",
     "caption": "Early decelerations - CTG",
     "alt": "CTG trace showing early decelerations: uniform, gradual onset deceleration that mirrors the contraction shape, nadir coinciding with contraction peak (head compression, benign)",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Failure to progress in the active first stage - the number",
   "subarea": "Labour & CTG monitoring",
   "trap": "- The discriminator between prolonged labour and arrest is whether there is **ANY cervical change**\n- **Slow progress** = LESS THAN **2 cm dilatation in 4 hours** (from >=5 cm)\n- **ARREST** = **NO cervical change** over ~4 hours at **>=6 cm** despite adequate contractions, especially with ruptured membranes\n- Some progress = **augment** (amniotomy +/- oxytocin)\n- Zero progress with good contractions = **obstruction/arrest** = **caesarean**, NOT more oxytocin",
   "mnemonic": "'<2 in 4' for slow labour; 'zero in 4 = no more syntho' for arrest.",
   "source": "Queensland Clinical Guideline Prolonged and/or Obstructed Labour; RANZCOG provision of routine intrapartum care",
   "verified": false,
   "whatFirst": "- FIRST exclude inadequate **Power** (palpate/quantify contractions) and a **full bladder** before labelling it Passenger/Passage obstruction",
   "discriminator": "- **Prolonged labour** (some progress, often inadequate contractions) -> amniotomy +/- oxytocin\n- **Arrest** (no progress with adequate contractions) -> **caesarean**",
   "mcqTrap": "- Augmenting with **oxytocin** when there is genuine arrest with good contractions and a thick caput/moulding (obstruction)\n  - This risks **uterine rupture**; the answer is **caesarean**",
   "tags": [
    "failure-to-progress",
    "first-stage",
    "3-Ps",
    "arrest"
   ],
   "id": "obs-63",
   "title": "Failure to Progress, First Stage",
   "subtitle": "Arrest = no cervical change over ~4 h at >=6 cm",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Partogramm_Modell_NSIONI_2005.JPG/960px-Partogramm_Modell_NSIONI_2005.JPG",
     "caption": "Partogram - showing prolonged/arrested labour",
     "alt": "WHO/standard partogram with cervical dilatation plotted against time, showing a plot crossing the alert line and approaching the action line, illustrating slow/arrested progress",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Fetal blood sampling (scalp lactate/pH) - the what-next numbers",
   "subarea": "Labour & CTG monitoring",
   "trap": "- FBS is for an **abnormal CTG** when birth is NOT immediately needed and there is no contraindication\n- FBS should be **BYPASSED** when delivery is needed now:\n  - Bradycardia **>5 min**, suspected abruption/uterine rupture, **sinusoidal**, or serious sustained compromise\n- **RANZCOG-listed contraindications** to FBS:\n  - Risk of **fetal bleeding disorder**\n  - **Non-vertex presentation** (face/brow/breech)\n  - **Maternal blood-borne infection** (HIV, HTLV-1, hep B/C, recent/untreated syphilis, active primary herpes)\n  - Gestation **<34 weeks**\n- **KEY EXAM POINT**: **GBS carrier status does NOT preclude FBS**\n- FBS also requires **cervix >=3 cm** dilated with ruptured membranes\n- **LACTATE** (Queensland-type thresholds):\n  - **<4.2 mmol/L** = normal\n  - **4.2–4.8 mmol/L** = borderline (repeat ~30 min)\n  - **>4.8 mmol/L** = abnormal = expedite\n- **pH** thresholds:\n  - **>=7.25** = normal\n  - **7.21–7.24** = borderline\n  - **<=7.20** = deliver\n- RANZCOG defers exact cut-offs to local protocol",
   "mnemonic": "Lactate 4.2 / 4.8 (normal / abnormal). pH 7.25 normal, <=7.20 = go. Sample to delay the knife - unless the knife can't wait. GBS does NOT block FBS.",
   "source": "Queensland Clinical Guideline Intrapartum Fetal Surveillance (lactate/pH cut-offs); RANZCOG IFS (C-Obs 1) Clinical Guideline v5.1 (2026) (indications/contraindications)",
   "verified": true,
   "whatFirst": "- FIRST decide whether **delivery is needed NOW** (bradycardia >5 min, abruption, rupture, sinusoidal, serious sustained compromise)\n  - If yes, **SKIP FBS** and deliver\n- Only sample when there is time, **cervix >=3 cm**, and no contraindication",
   "discriminator": "- **Borderline result** -> repeat in **~30 min** (and consider trend)\n- **Abnormal result** OR rapidly rising lactate -> **deliver**",
   "mcqTrap": "- Performing FBS during a **sustained bradycardia** or suspected abruption (deliver instead)\n- Withholding FBS solely because the woman is a **GBS carrier** (carriage does NOT contraindicate it)",
   "tags": [
    "CTG",
    "fetal-blood-sampling",
    "lactate",
    "pH",
    "contraindications"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>FBS result</th><th>Lactate (mmol/L)</th><th>pH</th><th>Action</th></tr></thead><tbody><tr><td>Normal</td><td><span class=\"gv-num\">&lt;4.2</span></td><td>>=7.25</td><td>Continue, re-sample if CTG persists</td></tr><tr><td>Borderline</td><td>4.2-4.8</td><td>7.21-7.24</td><td>Repeat in ~30 min</td></tr><tr><td>Abnormal</td><td><span class=\"gv-num\">>4.8</span></td><td>&lt;=7.20</td><td>Expedite birth</td></tr></tbody></table>",
   "id": "obs-71",
   "title": "Fetal Blood Sampling",
   "subtitle": "Bypass FBS when immediate delivery is needed"
  },
  {
   "topic": "Group B Strep - intrapartum prophylaxis indications & the Australian dose",
   "subarea": "Labour & CTG monitoring",
   "trap": "- **GBS colonisation is NOT treated antenatally** — antenatal antibiotics do not prevent neonatal disease because she re-colonises\n- The answer is **intrapartum IV antibiotics only**\n- Australia uses **universal vaginal-rectal swab at 35–37 weeks**\n- Give **intrapartum prophylaxis (IAP)** for:\n  - **Positive GBS screen** this pregnancy\n  - **GBS bacteriuria** any time this pregnancy\n  - **Previous infant** with invasive GBS disease\n  - If status unknown, risk factors: preterm labour **<37 wk**, ruptured membranes **>=18 hours**, or intrapartum fever **>=38°C**\n- **DOSE** (Queensland): **benzylpenicillin 3 g IV** loading then **1.8 g IV every 4 hours** until birth\n  - Aim first dose **>=4 hours** before birth\n- **Penicillin allergy**:\n  - **Cefazolin** (low-risk allergy)\n  - **Clindamycin/lincomycin** or **vancomycin** if severe allergy (check susceptibility)\n- **Planned/elective caesarean BEFORE labour** with intact membranes does **NOT need GBS IAP**, regardless of carriage",
   "mnemonic": "Screen 35-37; treat in labour not before. Benzylpen 3 g then 1.8 g q4h, aim 4 h ahead. Risk factors: PROM>=18h, preterm, fever>=38. Elective CS, intact membranes = no IAP.",
   "source": "Queensland Clinical Guideline Early Onset Group B Streptococcal Disease; Safer Care Victoria GBS screening and management",
   "verified": true,
   "whatFirst": "- When labour starts, FIRST check **GBS status/risk factors**\n- If positive screen or any risk factor present, start **IV benzylpenicillin immediately** to maximise the **>=4 h** pre-birth window",
   "discriminator": "- **Antenatal GBS colonisation** = no antibiotics now\n- **Intrapartum** positive screen/bacteriuria/prior affected baby/risk factor = **IV antibiotics**\n- **Pre-labour elective CS** with intact membranes = **no IAP**",
   "mcqTrap": "- Prescribing **oral antibiotics in the antenatal clinic** to 'eradicate' a positive GBS swab\n  - Antenatal treatment doesn't prevent neonatal disease; the answer is **intrapartum IV benzylpenicillin**",
   "tags": [
    "GBS",
    "intrapartum-prophylaxis",
    "benzylpenicillin",
    "screening"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Give intrapartum IV penicillin if...</th></tr></thead><tbody><tr><td>Positive GBS vaginal-rectal screen (35-37 wk) this pregnancy</td></tr><tr><td>GBS bacteriuria any time this pregnancy</td></tr><tr><td>Previous infant with invasive GBS disease</td></tr><tr><td>Unknown status + risk factor: preterm &lt;37 wk, ROM >=18 h, or fever >=38C</td></tr><tr><td>NOT needed: elective CS before labour with intact membranes</td></tr></tbody></table>",
   "id": "obs-72",
   "title": "Group B Strep Prophylaxis",
   "subtitle": "Intrapartum IV only; antenatal antibiotics do not work"
  },
  {
   "topic": "Partogram - alert line vs action line (what crossing each means)",
   "subarea": "Labour & CTG monitoring",
   "trap": "- Crossing the **ALERT line** is NOT itself an indication for syntocinon or caesarean — that over-reaction is the trap\n- The alert line (slower-than-expected progress) is a **WARNING** prompting review:\n  - **Amniotomy** if membranes intact\n  - Reassess the 3 Ps and bladder\n  - Repeat assessment in **~2–4 hours**\n- The **ACTION line** is the one that mandates escalation to a senior/obstetric decision-maker and active management\n- **Action line = act**",
   "mnemonic": "ALERT = be Alert (watch + amniotomy); ACTION = take Action (escalate/augment).",
   "source": "Queensland Clinical Guideline Normal Birth (2022); WHO labour care guide / partograph principles",
   "verified": true,
   "whatFirst": "- Crossing the alert line: FIRST offer **amniotomy** (if intact) and review the **3 Ps + bladder**, rather than jumping to oxytocin",
   "discriminator": "- Slow but ongoing progress = **prolonged labour** (augmentable)\n- **NO progress** over the action-line interval despite good contractions = **arrest/obstruction** (think caesarean, not more syntocinon)",
   "mcqTrap": "- Going straight to **oxytocin augmentation or caesarean** the moment the cervimetric plot crosses the **alert line**\n  - The alert line triggers **reassessment/amniotomy**, not intervention",
   "tags": [
    "partogram",
    "alert-line",
    "action-line",
    "first-stage"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Plot dilatation vs time (active 1st stage)</div><div class=\"gv-step\">Cross ALERT line -> amniotomy + reassess 3 Ps/bladder</div><div class=\"gv-step\">Cross ACTION line -> escalate to obstetric/senior + augment / consider CS</div></div>",
   "id": "obs-62",
   "title": "Partogram Alert vs Action Line",
   "subtitle": "Crossing alert line means review, not syntocinon or caesarean"
  },
  {
   "topic": "Prolonged deceleration & fetal bradycardia - the time triggers",
   "subarea": "Labour & CTG monitoring",
   "trap": "- A **prolonged deceleration** = **>90 seconds** and up to 5 minutes ('may be associated with compromise')\n- A deceleration/bradycardia lasting **MORE THAN 5 MINUTES** = 'likely associated with **fetal compromise**' and demands immediate management including possible urgent delivery\n- A **sustained bradycardia** is one of the few CTG findings that justifies **bypassing fetal blood sampling** and proceeding to urgent birth\n- Sustained bradycardia should trigger immediate hunt for acute catastrophe:\n  - **Cord prolapse** (do a VE)\n  - **Placental abruption**\n  - **Uterine rupture** (especially with prior CS)\n  - **Maternal hypotension** after epidural top-up",
   "mnemonic": "90 seconds = prolonged; >5 minutes = move (resuscitate + find the cause: cord, abruption, rupture, hypotension).",
   "source": "RANZCOG Intrapartum Fetal Surveillance (C-Obs 1) Clinical Guideline v5.1 (2026)",
   "verified": true,
   "whatFirst": "- Acute prolonged bradycardia: FIRST **simultaneously**:\n  - **Resuscitate** (stop oxytocin, reposition off back, IV fluids/BP)\n  - Perform a **vaginal exam** to exclude cord prolapse and assess for rapid delivery",
   "discriminator": "- Recovering prolonged decel after a reversible cause is corrected = **continue**\n- Bradycardia **>5 min** not recovering = **urgent delivery** (category 1 CS / instrumental)",
   "mcqTrap": "- Sending a woman with a **sustained bradycardia** for fetal blood sampling instead of preparing for **immediate delivery** and excluding cord prolapse/abruption/rupture",
   "tags": [
    "CTG",
    "prolonged-deceleration",
    "bradycardia",
    "cord-prolapse"
   ],
   "id": "obs-68",
   "title": "Prolonged Deceleration and Bradycardia",
   "subtitle": "Over 5 minutes is the likely-compromise threshold",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Cardiotocography.jpg/960px-Cardiotocography.jpg",
     "caption": "Prolonged deceleration on CTG - deceleration lasting 90 seconds to 5 minutes",
     "alt": "CTG strip showing a prolonged deceleration dipping below 100 bpm lasting over 90 seconds with gradual return to baseline",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Cardiotocography_diagram.jpg/960px-Cardiotocography_diagram.jpg",
     "caption": "Fetal bradycardia on CTG - sustained deceleration >5 minutes",
     "alt": "CTG strip showing fetal heart rate falling below 100 bpm and remaining there for more than 5 minutes (bradycardia / likely fetal compromise)",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Second-stage delay - exact time limits (nulliparous vs multiparous)",
   "subarea": "Labour & CTG monitoring",
   "trap": "- Delay in the **ACTIVE second stage** (active pushing) is diagnosed at:\n  - **>2 hours** in a nulliparous woman\n  - **>1 hour** in a multiparous woman\n  - Prompting medical review\n- With an **epidural** the urge to push is blunted, so a period of **DELAYED (passive) pushing of at least 1 hour** is allowed first\n  - AFTER which the same active-pushing time limits apply\n  - The net effect is a **longer total second stage**\n- Only the **ACTIVE pushing time** counts toward the delay clock; the **passive phase does not**",
   "mnemonic": "Nullip 2, Multip 1 (active pushing). Epidural = delay pushing ~1 h first, THEN the same clock.",
   "source": "KEMH (WA) Second stage of labour - management of delay (2018, NICE-aligned); RANZCOG provision of routine intrapartum care",
   "verified": true,
   "whatFirst": "- On reaching the time limit, FIRST assess the **3 Ps** (Power/contractions, Passenger/position-size, Passage), **empty the bladder**, and obtain obstetric review for instrumental vs caesarean\n  - Do not simply keep waiting",
   "discriminator": "- **Passive second stage** (descent without active pushing) is allowed and does **not start the delay clock**\n- Only **ACTIVE pushing time** counts",
   "mcqTrap": "- Diagnosing delay at **1 hour of active pushing** in a nulliparous woman — that is still within the **normal 2-hour window**",
   "tags": [
    "second-stage",
    "failure-to-progress",
    "parity",
    "epidural"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Diagnose active 2nd-stage delay when active pushing exceeds</th><th>Nulliparous</th><th>Multiparous</th></tr></thead><tbody><tr><td>Time limit (medical review)</td><td><span class=\"gv-num\">2 h</span></td><td><span class=\"gv-num\">1 h</span></td></tr><tr><td>With epidural</td><td colspan=\"2\">Allow delayed (passive) pushing >=1 h first, then same active-pushing limits -> longer total</td></tr></tbody></table>",
   "id": "obs-61",
   "title": "Second-Stage Delay",
   "subtitle": "Delay >2 h nullip, >1 h multip; epidural blunts urge"
  },
  {
   "topic": "Sinusoidal CTG - fetal anaemia, not artefact",
   "subarea": "Labour & CTG monitoring",
   "trap": "- A true **sinusoidal pattern** = 'likely fetal compromise' feature\n  - Smooth, regular sine-wave at **2–5 cycles/min**, amplitude **~5–15 bpm**\n  - **ABSENT baseline variability** and **no accelerations**\n- Signifies fetal **ANAEMIA** or severe hypoxia:\n  - Severe **rhesus alloimmunisation**\n  - **Fetomaternal haemorrhage**\n  - **Vasa praevia bleed**\n- Requires **urgent delivery** + neonatal/transfusion preparation\n- Do NOT dismiss it as a maternal **opioid effect**:\n  - Opioids produce a **PSEUDO-sinusoidal** pattern (less regular, with intervening normal variability and accelerations, transient)",
   "mnemonic": "Sinusoidal = Sanguine loss (anaemia). Smooth + regular + 2-5 cycles/min + absent variability = deliver.",
   "source": "RANZCOG Intrapartum Fetal Surveillance (C-Obs 1) Clinical Guideline v5.1 (2026)",
   "verified": true,
   "whatFirst": "- True sinusoidal: FIRST prepare for **urgent delivery** and alert **neonatal team** for possible transfusion\n- Consider acute **fetal blood loss** causes (vasa praevia, FMH)",
   "discriminator": "- **True sinusoidal** = regular, 2–5 cycles/min, absent variability, no accelerations (**anaemia**, deliver)\n- **Pseudosinusoidal** = irregular, normal variability/accelerations between, transient (**opioid**, observe)",
   "mcqTrap": "- Attributing a regular sustained sinusoidal trace to **recent pethidine** and continuing to observe\n  - True sinusoidal = **fetal anaemia** = urgent delivery",
   "tags": [
    "CTG",
    "sinusoidal",
    "fetal-anaemia",
    "vasa-praevia"
   ],
   "id": "obs-69",
   "title": "Sinusoidal CTG",
   "subtitle": "Sine-wave pattern signifies fetal anaemia, not artefact"
  },
  {
   "topic": "Stages of labour - the exact boundaries and timings",
   "subarea": "Labour & CTG monitoring",
   "trap": "- Contemporary Australian guidance places the start of the **ACTIVE first stage** at **~5–6 cm** (not the old 3–4 cm)\n  - A woman at **4 cm** with painful contractions is still **LATENT**\n  - A slow latent phase is **NOT failure to progress** and does NOT warrant augmentation\n- The second-stage clock starts at **full dilatation**, but the meaningful 'delay' clock is the **ACTIVE (pushing) phase**, not the passive phase",
   "mnemonic": "1 = dilate to 10, 2 = deliver baby, 3 = deliver placenta.",
   "source": "Queensland Clinical Guideline Normal Birth (MN22.25-V6, 2022); RANZCOG provision of routine intrapartum care",
   "verified": true,
   "whatFirst": "- If labour seems slow, FIRST establish **which phase** she is actually in (**latent vs active**) before diagnosing delay\n  - Misclassifying a long latent phase as 'failure to progress' leads to **unnecessary intervention**",
   "discriminator": "- **Latent phase** (cervix **<5 cm**, irregular/variable change) = **expectant care**\n- **Active phase** (**>=5–6 cm**, regular contractions) = the **partogram clock** applies",
   "mcqTrap": "- Calling a woman at **3–4 cm** with painful contractions 'in established/active labour and failing to progress'\n  - She is in the **LATENT phase**; the trap option is **augmentation/syntocinon**",
   "tags": [
    "stages-of-labour",
    "latent-vs-active",
    "second-stage",
    "third-stage"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Stage</th><th>From -> To</th><th>Key sub-divisions</th></tr></thead><tbody><tr><td>First</td><td>Onset of labour -> full dilatation (10 cm)</td><td>Latent (up to ~4-5 cm) vs Active (~5-6 cm -> 10 cm)</td></tr><tr><td>Second</td><td>Full dilatation -> birth of baby</td><td>Passive (no urge) vs Active (pushing)</td></tr><tr><td>Third</td><td>Birth of baby -> delivery of placenta + membranes</td><td>Active vs physiological management</td></tr></tbody></table>",
   "id": "obs-60",
   "title": "Stages of Labour",
   "subtitle": "Active first stage now starts at ~5-6 cm"
  },
  {
   "topic": "Term prelabour rupture of membranes (term PROM)",
   "subarea": "Labour & CTG monitoring",
   "trap": "- Do NOT confuse with **PPROM** (preterm) — different pathway entirely\n- At **TERM (>=37 wk)**, about **60–85%** labour spontaneously within **24–48 h**\n- Management: **OFFER** induction now OR expectant management for up to **~24 h** (woman's choice)\n- **Active management (IOL)** reduces chorioamnionitis/endometritis, so most Australian guidance favours offering IOL\n- Threshold to recommend IOL: **~24 h** after rupture\n- Do **NOT** do **digital vaginal examinations** (introduces infection) until labour is established\n- **GBS-positive** woman with term PROM: induce **PROMPTLY** (don't run the clock out) + give **intrapartum penicillin**\n- Watch for **chorioamnionitis** (fever, tachycardia, offensive liquor) -> expedite delivery + antibiotics",
   "whatFirst": "- Offer **IOL** (esp. by ~24 h) vs expectant up to ~24 h\n- If **GBS-positive** -> induce promptly + **intrapartum penicillin**\n- **Avoid digital VE**",
   "discriminator": "- **Term PROM (>=37 wk)** = offer IOL/expectant\n- **PPROM (<37 wk)** = different pathway (steroids, latency, expectant)\n- **GBS+** shortens the timeline",
   "cutoffs": [
    "**>=37+0 wk** = term PROM",
    "**~60–85%** labour within 24–48 h",
    "Offer/recommend IOL by **~24 h**",
    "**GBS-positive** -> prompt IOL + intrapartum penicillin",
    "**Avoid digital VE** until in labour"
   ],
   "redFlags": "- Maternal **fever**, tachycardia, uterine tenderness or **offensive liquor** = **chorioamnionitis** -> deliver + IV antibiotics",
   "trapAnswer": "Managing term PROM with the PPROM playbook (steroids/latency antibiotics/expectant to 37 wk) - it's already term; offer delivery.",
   "mcqTrap": "- Confusing **term PROM** management with **PPROM**\n- Delaying IOL in a **GBS-positive** woman",
   "mnemonic": "Term PROM: most labour in a day; if GBS+, don't delay.",
   "source": "Queensland Clinical Guidelines Term PROM; RANZCOG Term PROM (current)",
   "verified": true,
   "tags": [
    "obstetrics",
    "term PROM",
    "GBS",
    "chorioamnionitis"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Term PROM >=37 wk, no labour</div><div class=\"gv-step\">Offer IOL vs expectant (~24 h)</div><div class=\"gv-step\">GBS+ -> prompt IOL + penicillin</div><div class=\"gv-step\">Fever/offensive liquor -> chorioamnionitis -> deliver + ABx</div></div>",
   "id": "obs-76",
   "title": "Term Prelabour Rupture of Membranes",
   "subtitle": "Term, not PPROM; offer induction or up to ~24 h expectant",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Positive_Fern_Test.jpg/960px-Positive_Fern_Test.jpg",
     "caption": "Pooling of amniotic fluid on speculum exam - term PROM",
     "alt": "Speculum examination showing pooling of clear amniotic fluid in the posterior vaginal fornix, confirming rupture of membranes at term",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "The 3 Ps of poor progress",
   "subarea": "Labour & CTG monitoring",
   "trap": "- **Oxytocin** only fixes the **Power** problem\n  - Augmenting a Passenger (malposition/size) or Passage (pelvic/soft-tissue) obstructive problem with oxytocin is **dangerous**\n  - Particularly in a **multiparous woman** or prior **caesarean**, where it risks **uterine rupture**\n- Always reassess **presentation, position, and caput/moulding** before augmenting",
   "mnemonic": "3 Ps: Power, Passenger, Passage. Oxytocin only powers up Power.",
   "source": "Queensland Clinical Guideline Prolonged and/or Obstructed Labour; RANZCOG provision of routine intrapartum care",
   "verified": true,
   "whatFirst": "- **First assess Power** (contraction frequency/strength)\n  - If contractions are **inadequate** and there is no obstruction -> **augment**\n  - If Power is **adequate** but no progress -> suspect **Passenger/Passage** = obstruction",
   "discriminator": "- **Inadequate contractions** = Power problem -> **augment**\n- **Good contractions + caput/moulding + no descent** = obstruction -> **do NOT augment**, deliver by CS",
   "mcqTrap": "- Reaching for **oxytocin** in a multip with arrest and a **Bandl's ring** / excessive moulding\n  - Obstruction + augmentation risks **rupture**",
   "tags": [
    "3-Ps",
    "failure-to-progress",
    "obstruction"
   ],
   "id": "obs-64",
   "title": "The 3 Ps of Poor Progress",
   "subtitle": "Oxytocin only fixes Power, not Passenger or Passage",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Breech_presentation%2C_from_Ramsbotham%2C_Principals...1841_Wellcome_L0004298.jpg/960px-Breech_presentation%2C_from_Ramsbotham%2C_Principals...1841_Wellcome_L0004298.jpg",
     "caption": "Occiput posterior malposition - fetal head CT or diagram",
     "alt": "Diagram or ultrasound showing occiput posterior position of the fetal head as a classic Passenger cause of poor progress",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Operative vaginal delivery: when to abandon & no sequential instruments",
   "subarea": "Delivery, operative & intrapartum emergencies",
   "trap": "- The high-yield judgment point is **WHEN TO STOP**, not the prerequisites checklist\n- Abandon and proceed to **caesarean** if:\n  - No **progressive descent** with each pull\n  - Delivery not imminent after **3 contractions/pulls** with correct application\n  - Vacuum cup detaches **3 times** (the '3-pull / 3-detach' rule)\n- The dangerous trap is **sequential instrumentation**\n  - Using **forceps after a failed vacuum** (or vice versa) markedly increases **intracranial haemorrhage**, subgaleal bleed, and facial/brachial nerve injury\n- Correct answer after a failed vacuum is usually **caesarean**, NOT 'try forceps'\n- **Senior/experienced operator** decision",
   "whatFirst": "- Failed vacuum (no descent / cup off x3 / no birth in 3 pulls) -> **caesarean**, NOT a second different instrument",
   "discriminator": "- Single appropriate instrument **with descent** = continue\n- **No descent / detachment / failed attempt** = abandon to CS, **never stack instruments**",
   "cutoffs": [
    "Stop if **no descent** with each pull",
    "Cup detaches **x3** -> abandon",
    "No delivery after **~3 pulls/contractions** -> abandon",
    "Avoid **forceps after failed vacuum** (and vice versa)"
   ],
   "redFlags": "- **Cup pop-offs**\n- **No descent**\n- Escalating **fetal compromise** mid-attempt",
   "trapAnswer": "'Try forceps after the failed ventouse' - sequential instrumentation carries high fetal injury; go to caesarean.",
   "mcqTrap": "- Choosing a **second instrument** after a failed first instrument instead of **caesarean**",
   "mnemonic": "One tool, three tries; if it fails, theatre - not the other instrument.",
   "source": "RANZCOG Operative Vaginal Birth; ACOG/SMFM-aligned (current)",
   "verified": true,
   "tags": [
    "obstetrics",
    "instrumental delivery",
    "vacuum",
    "forceps"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Apply instrument correctly</div><div class=\"gv-step\">No descent / cup off x3 / no birth in 3 pulls</div><div class=\"gv-step\">ABANDON -> caesarean</div><div class=\"gv-step\">(NOT a second instrument)</div></div>",
   "id": "obs-92",
   "title": "Abandoning Operative Vaginal Delivery",
   "subtitle": "No descent after three pulls: stop, no sequential instruments",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/%22Burton%22_obstetical_forceps_Wellcome_L0008317.jpg/960px-%22Burton%22_obstetical_forceps_Wellcome_L0008317.jpg",
     "caption": "Forceps applied to fetal head - operative vaginal delivery",
     "alt": "Diagram or photo showing obstetric forceps correctly applied to the fetal head in the left and right occiput anterior position",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Uterine inversion: STOP uterotonics, replace FAST (the counter-intuitive step)",
   "subarea": "Delivery, operative & intrapartum emergencies",
   "trap": "- Hugely **counter-intuitive sequence** on diagnosing acute uterine inversion\n  - Fundus through the cervix +/- PPH + neurogenic **SHOCK** out of proportion to blood loss, often profound **bradycardia** from vagal stretch\n- Step 1: **STOP all uterotonics**\n- Step 2: Give a **tocolytic/relaxant** (GTN first-line, or terbutaline/magnesium)\n- Step 3: **REPLACE the uterus immediately** by manual pushing (**Johnson manoeuvre** - push fundus up through cervix toward the umbilicus)\n- **Do NOT remove an attached placenta first** (increases bleeding)\n- **ONLY AFTER** uterus is replaced: restart **uterotonics** (to clamp it down) and resuscitate\n- Delay -> **constriction ring** forms -> manual replacement fails -> theatre",
   "whatFirst": "- Recognise + call help + resuscitate\n- **STOP uterotonics**\n- Relax uterus (**GTN/tocolytic**)\n- **Replace immediately** (Johnson manoeuvre, placenta still attached)\n- Then restart **uterotonics** + treat shock",
   "discriminator": "- Shock **OUT OF PROPORTION** to visible blood loss + **bradycardia** (vagal) + 'mass at introitus' + **fundus not palpable** abdominally = inversion\n  - A 'Trauma' cause of PPH\n- **Atony** = boggy fundus still palpable abdominally\n- Uterotonic logic is **INVERTED** vs atony: here you **relax, not contract**, until replaced",
   "redFlags": "- **Profound bradycardia/hypotension** disproportionate to loss\n- Failed manual replacement -> **hydrostatic (O'Sullivan)** or **surgical replacement** under GA",
   "mcqTrap": "- 'Give an **oxytocin bolus / ergometrine** to contract the uterus' before replacing it\n  - Uterotonics before replacement makes replacement **impossible** (constriction ring)\n- 'Remove the **placenta** first'\n  - Removing placenta before replacement **worsens bleeding**\n- Correct sequence: **relax first, replace, THEN give uterotonics**",
   "mnemonic": "Inversion = the ONE PPH where you RELAX before you contract: \"Replace, THEN contract.\"",
   "source": "RANZCOG / O&G Magazine 'Uterine inversion' (stop uterotonics, tocolysis with GTN first-line, immediate Johnson manoeuvre, restart uterotonics after replacement). Verified 2026.",
   "verified": true,
   "tags": [
    "uterine-inversion",
    "stop-uterotonics",
    "tocolytic",
    "Johnson-manoeuvre",
    "neurogenic-shock"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Diagnose inversion (shock > blood loss, bradycardia)</div><div class=\"gv-step\">STOP uterotonics + give tocolytic (GTN)</div><div class=\"gv-step\">Replace uterus (Johnson, placenta attached)</div><div class=\"gv-step\">THEN restart uterotonics + resuscitate</div></div>",
   "id": "obs-87",
   "title": "Acute Uterine Inversion",
   "subtitle": "Stop uterotonics and replace fundus immediately",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/7/7a/InvertedUterus.jpg",
     "caption": "Acute uterine inversion - fundus through cervix, diagram",
     "alt": "Diagram or clinical photograph showing the inverted uterine fundus visible or palpable through the cervix/vagina, often with placenta still attached",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Amniotic fluid embolism: sudden collapse + DIC (recognise, don't over-investigate)",
   "subarea": "Delivery, operative & intrapartum emergencies",
   "trap": "- AFE is a **clinical diagnosis of exclusion** — there is **NO confirmatory test**\n  - Do not wait for a blood film/biomarker\n- Sequence: around labour or immediately postpartum\n  - Sudden **hypoxia** + **hypotension**/cardiovascular collapse\n  - Followed by **coagulopathy (DIC)** and often seizures\n- Management is purely **supportive and multidisciplinary**:\n  - **High-quality CPR** (left-lateral tilt / manual uterine displacement)\n  - **100% O2**/intubation\n  - Aggressive **circulatory support**\n  - Early/aggressive **blood-product resuscitation** for DIC\n  - Maternal cardiac arrest -> **perimortem caesarean within ~4 minutes** (relieves aortocaval compression and aids maternal resuscitation)",
   "whatFirst": "- Call for help + start **ALS/CPR** with left-lateral tilt or manual uterine displacement\n- Secure airway/**100% O2**, support circulation\n- If no maternal output by **~4 min** -> **perimortem caesarean**\n- Treat **DIC aggressively** with blood products",
   "discriminator": "- AFE mimics:\n  - **Eclampsia** (seizure but preceding HTN/proteinuria)\n  - **PE** (no early DIC)\n  - **High/total spinal**\n  - **Anaphylaxis**\n  - **Sepsis**\n- Combination of sudden collapse + **early profound DIC** in temporal relation to labour/delivery points to **AFE**",
   "redFlags": "- Sudden maternal **collapse** around delivery with hypoxia then **catastrophic bleeding/DIC**\n- Maternal cardiac arrest -> **perimortem CS within 4 min** (delivery by 5 min)",
   "mcqTrap": "- 'Send urgent maternal blood for fetal squames / a **confirmatory AFE assay** before treating'\n  - Wrong — AFE is a **clinical diagnosis of exclusion** with no confirmatory test\n  - Management is **immediate supportive resuscitation**, not waiting for a test",
   "mnemonic": "AFE = \"Hypoxia, Hypotension, Haemorrhage (DIC)\" - the 3 H's, around labour.",
   "source": "RANZCOG / Australian-New Zealand AFE study (clinical diagnosis, supportive management); ANZCOR Guideline 11.10 (perimortem CS by 4 min if no ROSC). Verified 2026.",
   "verified": true,
   "tags": [
    "amniotic-fluid-embolism",
    "DIC",
    "collapse",
    "perimortem-caesarean"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Sudden hypoxia + hypotension (peri-delivery)</div><div class=\"gv-step\">CPR + 100% O2 + manual uterine displacement</div><div class=\"gv-step\">DIC -> aggressive blood products</div><div class=\"gv-step\">Arrest -> perimortem CS within 4 min (delivery by 5)</div></div>",
   "id": "obs-86",
   "title": "Amniotic Fluid Embolism",
   "subtitle": "Clinical diagnosis of exclusion; no confirmatory test",
   "images": [
    {
     "src": "assets/img/cardiology_cxr_pulmonary_oedema_01.jpg",
     "caption": "Amniotic fluid embolism - CXR showing acute pulmonary oedema",
     "alt": "Chest X-ray showing bilateral pulmonary oedema/infiltrates consistent with the acute respiratory collapse of AFE",
     "credit": "Hellerhoff / Wikimedia Commons · CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "Breech: ECV timing (~37 weeks) and planned CS as default",
   "subarea": "Delivery, operative & intrapartum emergencies",
   "trap": "- Offer **ECV from 37+0 weeks** (term) — NOT earlier as a default\n  - Early ECV does not reduce caesarean rate and **increases preterm birth**\n- For persistent term breech, **planned caesarean** is the usual recommendation\n- Elective CS for breech timed at **39 weeks** (not 37/38) to minimise **neonatal respiratory morbidity**\n- Give **anti-D** after ECV if **Rh-negative** (it is a sensitising event)",
   "whatFirst": "- Confirm breech on **USS**\n- Offer **ECV from 37 weeks**\n- If fails/declined -> plan **elective CS at 39 weeks** (or counsel re vaginal breech if criteria/experienced unit)",
   "discriminator": "- ECV offered **'from 37 weeks'** (term) is the examined number\n  - Do not confuse with 34–36 week 'early ECV' — **NOT recommended** routinely\n- Elective CS at **39 weeks** for breech vs 37 weeks (too early -> TTN/RDS)\n- **Footling breech** and **hyperextended head** = contraindications to vaginal breech",
   "redFlags": "- After ECV: do **CTG** and give **anti-D** if Rh-negative\n- ECV contraindications: **APH**, abnormal CTG, ruptured membranes, multiple pregnancy, recent abruption",
   "mcqTrap": "- 'Offer ECV at **34–35 weeks**' — Wrong, ECV is offered from **37 weeks**\n- 'Book elective caesarean at **37 weeks**' — Wrong, elective breech CS is timed at **39 weeks**",
   "mnemonic": "\"ECV at 37, CS at 39\" - the two-number breech rule.",
   "source": "RANZCOG Management of Breech Presentation; Safer Care Victoria Breech. Verified 2026.",
   "verified": true,
   "tags": [
    "breech",
    "ECV",
    "37-weeks",
    "elective-caesarean",
    "39-weeks"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Breech confirmed on USS</div><div class=\"gv-step\">Offer ECV from 37 wk</div><div class=\"gv-step\">ECV fails/declined</div><div class=\"gv-step\">Elective CS at 39 wk</div></div>",
   "id": "obs-81",
   "title": "Breech Presentation Management",
   "subtitle": "ECV from 37 weeks; planned CS the default",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Breechpre.jpg",
     "caption": "Breech presentation on ultrasound - frank breech",
     "alt": "Ultrasound scan showing frank breech presentation with fetal buttocks presenting, legs extended, head in fundus",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Caesarean urgency categories 1-4 (which is the \"crash\" CS?)",
   "subarea": "Delivery, operative & intrapartum emergencies",
   "trap": "- The Australian gotcha: RANZCOG uses the **4-category urgency system** but deliberately attaches **NO fixed decision-to-delivery interval (DDI)** to any category\n  - The **30-minute figure** is RCOG/ACOG custom, **NOT an Australian standard**\n- Cat 1 = **immediate threat to life** of woman or fetus\n- The aim is **'deliver as rapidly as is safely possible'**",
   "whatFirst": "- **Classify urgency** -> communicate the category clearly to theatre/anaesthetics -> mobilise\n- For Cat 1, deliver **as rapidly as safely possible** (RANZCOG sets no fixed number)",
   "discriminator": "- **Category 1**: cord prolapse / placental abruption with fetal distress / scar rupture / prolonged bradycardia\n- **Category 2**: non-reassuring CTG in a stable fetus, or failure to progress\n- **Category 3**: severe PET / stable IUGR\n- **Category 4**: maternal request / booked breech",
   "redFlags": "- Cat 1 triggers: sustained **fetal bradycardia**, **cord prolapse**, suspected **uterine rupture**, major abruption, scalp pH **<7.20**",
   "mcqTrap": "- 'RANZCOG mandates delivery within **30 minutes** of decision for a Category 1 caesarean'\n  - Wrong for Australia — RANZCOG explicitly attaches **no fixed time** to any category\n  - The 30-min benchmark is **RCOG/ACOG**\n  - The Australian answer is **'deliver as rapidly as is safely possible'**",
   "mnemonic": "1 = Life now, 2 = Compromise (not life-threatening), 3 = Early but stable, 4 = Elective. \"Life, Limb, Later, Leisure.\"",
   "source": "RANZCOG Categorisation of urgency for caesarean section (4-category system, no mandated DDI); O&G Magazine 'Crash caesarean'. Verified 2026.",
   "verified": true,
   "tags": [
    "caesarean",
    "urgency-category",
    "decision-to-delivery",
    "category-1"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Cat</th><th>Meaning</th><th>Example</th></tr></thead><tbody><tr><td>1</td><td>Immediate threat to life</td><td>Cord prolapse, uterine rupture, prolonged bradycardia, major abruption</td></tr><tr><td>2</td><td>Compromise, not immediately life-threatening</td><td>Non-reassuring CTG, failure to progress</td></tr><tr><td>3</td><td>Needs early delivery, no compromise</td><td>Severe PET, stable IUGR</td></tr><tr><td>4</td><td>Elective / at woman's convenience</td><td>Maternal request, booked breech</td></tr></tbody></table>",
   "id": "obs-78",
   "title": "Caesarean Urgency Categories",
   "subtitle": "RANZCOG sets no fixed decision-to-delivery interval"
  },
  {
   "topic": "Bishop score: when does the cervix need ripening BEFORE oxytocin?",
   "subarea": "Delivery, operative & intrapartum emergencies",
   "trap": "- The gotcha is **sequence + threshold**\n- A **low Bishop score** (unfavourable cervix, Bishop **<6**) means you must **ripen first**\n  - Use vaginal **prostaglandin PGE2/dinoprostone** OR a **balloon/Foley catheter**\n  - Before usefully starting oxytocin or doing an ARM\n- Starting **oxytocin** on an unfavourable, closed, posterior, firm cervix produces a **long, failed induction** and fetal distress\n- A **favourable score** (Bishop **>=7**) = cervix is ripe -> proceed to **amniotomy +/- oxytocin** without a ripening agent",
   "whatFirst": "- **Score the cervix**\n- If **unfavourable** (Bishop <6) -> **RIPEN first** (prostaglandin or balloon)\n- Only then **ARM + oxytocin**\n- **Do not start oxytocin** on an unripe cervix",
   "discriminator": "- **Favourable (ripe)** cervix = soft, anterior, effaced, dilating, low station -> go straight to **ARM/oxytocin**\n- **Unfavourable** = firm, posterior, long, closed, high -> needs **ripening agent first**\n- **Balloon catheter** (mechanical) preferred if prior **caesarean** or **hyperstimulation risk** (avoids prostaglandin; lower tachysystole rates)",
   "redFlags": "- **Uterine tachysystole** (>5 contractions/10 min) after prostaglandin -> fetal bradycardia\n  - Remove the **PG pessary** and consider **tocolysis** (terbutaline/salbutamol)",
   "mcqTrap": "- 'Commence **IV oxytocin infusion**' on a woman with a closed, firm, posterior cervix (Bishop 2)\n  - Wrong — oxytocin on an **unripe cervix** is ineffective and risks failed induction\n  - Ripen with **prostaglandin or a balloon catheter** first",
   "mnemonic": "Bishop components = Dilation, Effacement, Station, Consistency, Position (\"Don't Even Start Cervical Procedures\"). LOW score = needs a Lubricant (ripening agent) first.",
   "source": "RANZCOG/Safer Care Victoria Induction of Labour (unfavourable cervix = Bishop <6 -> prostaglandin or balloon catheter). Verified 2026.",
   "verified": true,
   "tags": [
    "induction",
    "Bishop",
    "cervical-ripening",
    "oxytocin"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Bishop score</th><th>Cervix</th><th>Action</th></tr></thead><tbody><tr><td><span class=\"gv-num\">&lt; 6</span> (low)</td><td>Unfavourable</td><td>Ripen FIRST: prostaglandin (PGE2) or balloon catheter</td></tr><tr><td><span class=\"gv-num\">>= 7</span></td><td>Favourable</td><td>ARM +/- oxytocin (no ripening needed)</td></tr></tbody></table>",
   "id": "obs-77",
   "title": "Cervical Ripening Before Oxytocin",
   "subtitle": "Bishop <6: ripen with PGE2 or Foley first"
  },
  {
   "topic": "Genital herpes in pregnancy: mode-of-delivery decision",
   "subarea": "Delivery, operative & intrapartum emergencies",
   "trap": "- Decision turns on **timing** and whether lesions are present at labour\n- **Primary (first-episode) HSV in the third trimester** (esp. within **6 wk of delivery**)\n  - Highest **neonatal transmission risk**\n  - Mother lacks protective antibody to pass to fetus\n  - Recommend **caesarean**\n- **Active genital lesions or prodrome** at onset of labour (any type) -> **caesarean**\n- **Recurrent HSV with no lesions** at labour -> **vaginal birth** is fine (low transmission)\n- Offer suppressive **aciclovir 400 mg TDS** from **36 weeks** to reduce recurrences/shedding at delivery\n- Trap: recommending caesarean for a woman with a **remote history of recurrent herpes** but **no lesions in labour**",
   "whatFirst": "- Assess for **active lesions/prodrome** at labour\n- Determine whether infection is **primary T3** vs **recurrent**\n- Decide **CS vs vaginal birth**",
   "discriminator": "- **Primary HSV in T3** OR **active lesions at labour** = **caesarean**\n- **Recurrent HSV with NO lesions** at labour = **vaginal birth**",
   "cutoffs": [
    "Suppressive **aciclovir 400 mg TDS** from **36 wk**",
    "Primary HSV in **T3** (esp. **<6 wk** pre-delivery) -> CS",
    "**Active lesions/prodrome** at labour -> CS",
    "Recurrent, **no lesions in labour** -> vaginal birth ok"
   ],
   "redFlags": "- **Primary infection near term**\n- **Active vesicles/ulcers** at onset of labour",
   "trapAnswer": "Offering caesarean to a woman with recurrent herpes but NO active lesions at labour - vaginal birth is appropriate.",
   "mcqTrap": "- Recommending **CS for recurrent HSV without lesions**\n- Or recommending **vaginal birth** despite active lesions/primary T3 infection",
   "mnemonic": "New (primary, T3) or showing (lesions) = section; old and quiet = vaginal.",
   "source": "RANZCOG/ASHM-aligned HSV in pregnancy; NZ Sexual Health guideline (Australian-aligned) (current)",
   "verified": true,
   "tags": [
    "obstetrics",
    "HSV",
    "mode of delivery"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Scenario at labour</th><th>Delivery</th></tr><tr><td>Primary HSV in T3</td><td>Caesarean</td></tr><tr><td>Active lesions / prodrome (any type)</td><td>Caesarean</td></tr><tr><td>Recurrent, no lesions</td><td>Vaginal</td></tr></table>",
   "id": "obs-91",
   "title": "Genital Herpes in Pregnancy",
   "subtitle": "Primary third-trimester HSV: recommend caesarean delivery",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/c/c1/SOA-Herpes-genitalis-female.jpg",
     "caption": "Primary genital herpes lesions - vulval HSV vesicles and ulcers",
     "alt": "Clinical photograph showing multiple painful vesicles and shallow ulcers on the vulva/perineum representing primary genital HSV infection in pregnancy",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Herpes_n%C3%A9onatal_Herpes_simplex_a.jpg",
     "caption": "Neonatal herpes - disseminated HSV skin vesicles neonate",
     "alt": "Clinical photograph showing vesicular skin lesions of neonatal herpes simplex infection, illustrating the consequence of vertical transmission",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Instrumental delivery (forceps/vacuum): the prerequisites checklist",
   "subarea": "Delivery, operative & intrapartum emergencies",
   "trap": "- MCQs give a scenario where **one prerequisite is missing** and the safe answer is 'do not attempt instrumental -> **caesarean**'\n- Mandatory prerequisites:\n  - Cervix **fully dilated**\n  - Membranes **ruptured**\n  - Head **engaged** (<=1/5 palpable abdominally; bony part at or below **ischial spines**)\n  - **Position known**\n  - Adequate **analgesia**\n  - Bladder **empty** (catheterise)\n  - No severe **caput/moulding**\n  - Adequate contractions/maternal effort\n  - Skilled operator with a defined **back-up plan** (theatre ready)\n- **Vacuum avoided** at <**34 weeks** (fetal scalp/intracranial haemorrhage risk)",
   "whatFirst": "- Run the **prerequisite checklist**\n- If head is **NOT engaged** (>=2/5 palpable, or station above spines) -> instrumental is **unsafe** -> **caesarean**\n- **Empty the bladder** first",
   "discriminator": "- **Mid-cavity / station 0** = experienced operator in theatre (trial of instrumental)\n- **High head** (above spines, palpable abdominally) = **NEVER instrumental** -> CS\n- **Vacuum vs forceps**:\n  - Vacuum needs maternal effort + **>=34 weeks**\n  - Forceps can be used at lower gestation / no maternal effort but more **maternal trauma** (3rd/4th-degree tear)",
   "redFlags": "- **3 contractions / 3 pulls** with no descent = abandon, do not persist\n- **Sequential vacuum THEN forceps** markedly raises neonatal injury — avoid",
   "mcqTrap": "- 'Attempt **vacuum extraction**' when head is **2/5 palpable abdominally** (not engaged) or cervix only **9 cm**\n  - Wrong — prerequisites not met -> the answer is **caesarean section**",
   "mnemonic": "Prerequisites = \"FORCEPS\": Fully dilated, O (position) known, Ruptured membranes, Cephalic & engaged, Empty bladder, Pain relief adequate, Skilled operator/back-up.",
   "source": "RANZCOG Instrumental Vaginal Birth (C-Obs 16); Queensland Clinical Guideline 'Instrumental vaginal birth'. Verified 2026.",
   "verified": true,
   "tags": [
    "instrumental",
    "forceps",
    "vacuum",
    "prerequisites",
    "engagement"
   ],
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Fully dilated</span><span class=\"gv-pill\">Membranes ruptured</span><span class=\"gv-pill\">Head engaged &lt;= 1/5</span><span class=\"gv-pill\">Position known</span><span class=\"gv-pill\">Bladder empty</span><span class=\"gv-pill\">Analgesia</span><span class=\"gv-pill\">Skilled operator + back-up</span></div>",
   "id": "obs-80",
   "title": "Instrumental Delivery Prerequisites",
   "subtitle": "Any prerequisite missing means caesarean, not instrument"
  },
  {
   "topic": "Perimortem caesarean / maternal collapse in pregnancy",
   "subarea": "Delivery, operative & intrapartum emergencies",
   "trap": "- Two specifics examiners want:\n- (1) During CPR in a pregnant woman >~**20 wk** (uterus at/above umbilicus): apply **manual left uterine displacement** (or **15–30 degree left lateral tilt**) to relieve **aortocaval compression**\n  - Otherwise compressions are **ineffective**\n- (2) The **'4-minute rule'**: if no return of spontaneous circulation, perform **resuscitative hysterotomy (perimortem caesarean)** aiming to deliver by **~4–5 minutes** of arrest\n- Crucially: done to save the **mother** (emptying the uterus restores venous return/ROSC), **not primarily the baby**\n  - Performed **regardless of fetal viability**\n  - Performed **WITHOUT moving the woman to theatre**",
   "whatFirst": "- **Manual left uterine displacement** during CPR\n- If no ROSC -> start **resuscitative hysterotomy by ~4 min**, at the **resuscitation site**",
   "discriminator": "- Resuscitative hysterotomy is a **maternal resuscitation manoeuvre** (improves cardiac output), not a neonatal one\n  - Do it **even if the fetus is non-viable**",
   "cutoffs": [
    "**Manual left uterine displacement** / **15–30 deg left tilt** if uterus >= umbilicus",
    "Deliver within **~4–5 min** of arrest if no ROSC",
    "Perform **at the arrest site**, do NOT transfer to theatre",
    "**Continue CPR** throughout"
   ],
   "redFlags": "- No ROSC after **~4 min** of effective CPR in a visibly pregnant woman = **do the hysterotomy now**",
   "trapAnswer": "'Transfer to theatre for caesarean' or 'await an obstetrician' - delay is the commonest fatal error; deliver where she lies.",
   "mcqTrap": "- **Delaying for transfer/imaging**\n- Or **omitting left uterine displacement** during CPR",
   "mnemonic": "Tilt the uterus, then deliver by 4 - to save HER, not just the baby.",
   "source": "ANZCOR maternal cardiac arrest guidance; RANZCOG/Resuscitation Council aligned (current)",
   "verified": true,
   "tags": [
    "obstetrics",
    "maternal collapse",
    "resuscitative hysterotomy",
    "ANZCOR"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">CPR + manual LEFT uterine displacement</div><div class=\"gv-step\">No ROSC?</div><div class=\"gv-step\">Resuscitative hysterotomy by ~4 min, at scene</div><div class=\"gv-step\">(to restore maternal circulation)</div></div>",
   "id": "obs-93",
   "title": "Perimortem Caesarean Section",
   "subtitle": "Left uterine displacement; deliver within 4 minutes of arrest",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/A_baby_being_removed_from_its_dying_mother%27s_womb_via_Caesar_Wellcome_V0014915.jpg/960px-A_baby_being_removed_from_its_dying_mother%27s_womb_via_Caesar_Wellcome_V0014915.jpg",
     "caption": "Perimortem caesarean section - left uterine displacement during CPR",
     "alt": "Clinical photograph or diagram showing manual left uterine displacement applied during CPR in a pregnant cardiac arrest patient to relieve aortocaval compression",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Post-term pregnancy: when to offer induction",
   "subarea": "Delivery, operative & intrapartum emergencies",
   "trap": "- Offer a **membrane sweep** from **~41 weeks**\n- Offer **induction of labour** for prolonged pregnancy between **41+0 and 42+0 weeks**\n  - Most Australian units aim for IOL by **41+0 to 41+3**, and certainly by **42+0**\n  - Rationale = rising **stillbirth** and **meconium-aspiration** risk beyond term\n- If woman **declines IOL**, the alternative is **increased surveillance** (CTG + amniotic fluid/USS)\n  - NOT simply 'wait indefinitely'\n- Trap: choosing **40 weeks** (too early — that's just EDD) or waiting to **43 weeks**",
   "whatFirst": "- Offer **membrane sweep** ~41 wk\n- Offer **IOL** by **41+0 to 42+0 wk**\n- If declined -> offer **increased fetal surveillance**",
   "discriminator": "- **EDD (40+0)** is NOT an induction trigger\n- The threshold is **41+ weeks**; **42+0** is the outer limit",
   "cutoffs": [
    "Membrane sweep offered from **~41 wk**",
    "IOL offered **41+0 to 42+0 wk**",
    "Absolute stillbirth risk climbs notably beyond **42 wk**",
    "Decline IOL -> increased surveillance (**CTG + AFI/USS**)"
   ],
   "redFlags": "- Reduced **fetal movements**, reduced **liquor**, or post-dates with any **growth concern** -> expedite",
   "trapAnswer": "'Induce at 40 weeks' (that's just the due date) or 'await spontaneous labour to 43 weeks' (unsafe).",
   "mcqTrap": "- Picking **40 weeks** as the induction threshold\n- Or open-ended **expectant management past 42 weeks**",
   "mnemonic": "Sweep at 41, deliver by 42.",
   "source": "RANZCOG / Safer Care Victoria Induction of Labour; KEMH (WA) Prolonged Pregnancy (current)",
   "verified": true,
   "tags": [
    "obstetrics",
    "post-term",
    "induction"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Gestation</th><th>Offer</th></tr><tr><td>~41+0 wk</td><td>Membrane sweep</td></tr><tr><td>41+0 to 42+0 wk</td><td>IOL (or increased surveillance if declined)</td></tr></table>",
   "id": "obs-89",
   "title": "Post-Term Pregnancy Induction",
   "subtitle": "Offer induction between 41 and 42 weeks"
  },
  {
   "topic": "Postpartum haemorrhage: the 4 T causes (Tone is #1)",
   "subarea": "Delivery, operative & intrapartum emergencies",
   "trap": "- Causes of primary PPH = the **4 Ts**: Tone, Trauma, Tissue, Thrombin\n- **Tone (uterine atony)** ~70% and the #1 cause — always assume atony first\n- The gotcha: a **well-contracted uterus** that keeps bleeding means it is NOT tone\n  - Do NOT keep giving uterotonics — look for Trauma or Tissue instead\n- Australian definitions:\n  - Primary PPH = **≥500 mL** after vaginal birth\n  - Primary PPH = **≥1000 mL** after caesarean (within 24 h)\n  - **'Major' PPH** = ≥1000 mL OR signs of shock",
   "whatFirst": "- Simultaneously call for **help** + **ABC** + two large-bore IV cannulas + bloods/crossmatch\n- **'Rub up' the fundus** (bimanual massage)\n- **Empty the bladder**\n- Give a **uterotonic**\n- While examining for the cause:\n  - Palpate **tone**\n  - Inspect **tract** for trauma\n  - Check **placenta complete** (tissue)\n  - Check **clotting** (thrombin/DIC)",
   "discriminator": "- **Boggy/soft uterus** = Tone (atony)\n- **Firm/contracted uterus** still bleeding = Trauma or Tissue\n- **Oozing from puncture sites / non-clotting blood** = Thrombin (DIC)\n- Sudden severe pain + non-palpable fundus + lump in vagina = **uterine inversion** (a Trauma cause)",
   "redFlags": "- Ongoing bleeding despite a **well-contracted uterus** = retained tissue or genital trauma\n- Persistent **non-clotting blood** = DIC\n  - Activate **massive transfusion protocol** + give blood products/fibrinogen",
   "mcqTrap": "- Giving repeated **oxytocin/ergometrine** when the uterus is already firm and contracted — WRONG\n  - A contracted uterus excludes atony\n  - Examine for **trauma** (tears) and **retained tissue** instead",
   "mnemonic": "4 Ts in order of frequency: TONE, TRAUMA, TISSUE, THROMBIN (Tone first, biggest).",
   "source": "Queensland Clinical Guideline 'Primary postpartum haemorrhage' (MN24.1, 2024); RANZCOG Management of PPH (C-Obs 43). Verified 2026.",
   "verified": true,
   "tags": [
    "PPH",
    "4-Ts",
    "atony",
    "tone-first"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>T</th><th>Cause</th><th>Clue</th></tr></thead><tbody><tr><td>Tone (#1, ~70%)</td><td>Atony</td><td>Boggy, soft uterus</td></tr><tr><td>Trauma</td><td>Tears, rupture, inversion</td><td>Firm uterus, still bleeding</td></tr><tr><td>Tissue</td><td>Retained placenta/clots</td><td>Placenta incomplete</td></tr><tr><td>Thrombin</td><td>Coagulopathy / DIC</td><td>Oozing, non-clotting blood</td></tr></tbody></table>",
   "id": "obs-83",
   "title": "Postpartum Haemorrhage Causes",
   "subtitle": "Well-contracted uterus still bleeding is not tone"
  },
  {
   "topic": "Shoulder dystocia: what to do FIRST (and what NEVER to do)",
   "subarea": "Delivery, operative & intrapartum emergencies",
   "trap": "- The whole question is **sequence** — first manoeuvres are McRoberts + suprapubic pressure\n- **McROBERTS** (hyperflex maternal hips onto abdomen) + **SUPRAPUBIC pressure** — these alone resolve a large majority\n- **NEVER apply FUNDAL pressure** — impacts the shoulder further onto the pubic symphysis\n  - Worsens dystocia, risks uterine rupture and brachial plexus injury\n- Do **NOT pull harder** on the head — causes **Erb's palsy**\n- Buzzword sign = **TURTLE SIGN** (head retracts against perineum)\n- **Episiotomy** creates room for internal manoeuvres but does NOT itself relieve a bony obstruction",
   "whatFirst": "- Call for help + **stop pushing**\n- **McRoberts** (hyperflex hips)\n- **Suprapubic pressure**\n- Consider **episiotomy**\n- Internal rotational manoeuvres: **Rubin II / Woods screw**\n- **Deliver posterior arm**\n- All-fours (**Gaskin** manoeuvre)\n- Last resort: **Zavanelli** / symphysiotomy",
   "discriminator": "- **SUPRApubic pressure** (just above symphysis, adducts the anterior shoulder) = correct\n- **FUNDAL pressure** = forbidden\n- McRoberts/suprapubic = **EXTERNAL first-line**\n- Rubin/Woods/posterior-arm = **INTERNAL second-line**",
   "redFlags": "- Bony **'turtle sign'** with failure to deliver shoulders after gentle axial traction\n- Document **time** — risk of HIE rises with head-to-body delivery interval",
   "mcqTrap": "- **'Apply fundal pressure'** — the single most tempting wrong answer; worsens impaction and causes injury\n  - **Suprapubic**, not fundal\n- **'Proceed straight to caesarean'** — also wrong; the head is already out",
   "mnemonic": "HELPERR: Help, Evaluate for Episiotomy, Legs (McRoberts), Pressure (suprapubic), Enter (internal rotation), Remove posterior arm, Roll (all-fours). -> Legs & Pressure come before hands inside.",
   "source": "RANZCOG/Queensland Clinical Guideline & SA Perinatal Practice Guideline 'Shoulder dystocia' (McRoberts + suprapubic first; fundal pressure contraindicated). Verified 2026.",
   "verified": true,
   "tags": [
    "shoulder-dystocia",
    "McRoberts",
    "suprapubic",
    "no-fundal-pressure",
    "HELPERR"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Call help + stop pushing</div><div class=\"gv-step\">McRoberts (legs)</div><div class=\"gv-step\">Suprapubic pressure</div><div class=\"gv-step\">Internal rotation / deliver posterior arm</div><div class=\"gv-step\">All-fours -> last-resort manoeuvres</div></div>",
   "id": "obs-82",
   "title": "Shoulder Dystocia",
   "subtitle": "McRoberts plus suprapubic first; never fundal pressure",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/McRoberts_maneuver.svg/960px-McRoberts_maneuver.svg.png",
     "caption": "McRoberts manoeuvre - maternal hips hyperflexed onto abdomen",
     "alt": "Clinical photograph or diagram showing McRoberts manoeuvre with the mother's thighs sharply flexed onto the abdomen to widen the pelvic outlet in shoulder dystocia",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/9/98/Suprapubic-pressureforSD.jpg",
     "caption": "Suprapubic pressure technique for shoulder dystocia",
     "alt": "Diagram or photograph showing suprapubic pressure applied downward and laterally above the pubic symphysis to dislodge the anterior shoulder in shoulder dystocia",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/6/62/ShoulderDystociaFig1.jpg",
     "caption": "Turtle sign - shoulder dystocia at delivery",
     "alt": "Clinical photograph showing the turtle sign - fetal head retracting against the perineum after delivery, indicating impacted shoulder dystocia",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "PPH escalation, tranexamic acid timing & massive transfusion",
   "subarea": "Delivery, operative & intrapartum emergencies",
   "trap": "- Two timing gotchas:\n- (1) **Tranexamic acid 1 g IV** given EARLY — within **3 hours** of birth\n  - WOMAN trial: benefit falls sharply after 3 h\n  - Give a **2nd 1 g dose** if bleeding continues after 30 min or restarts within 24 h\n  - Do **NOT withhold TXA** waiting for coagulation results\n- (2) Activate **Massive Transfusion Protocol** early for ongoing major haemorrhage\n  - Transfuse in ratios approaching **1:1:1** (RBC:FFP:platelets)\n  - Keep **fibrinogen >2 g/L** — early cryoprecipitate/fibrinogen concentrate (fibrinogen falls first and predicts severity)\n  - Keep **platelets >50**\n  - Avoid the **lethal triad**: hypothermia, acidosis, coagulopathy\n  - Replace **calcium** (citrate chelation)",
   "whatFirst": "- Activate **MTP**\n- Give **TXA 1 g IV** early — do not wait for labs\n- Give **warmed fluids/blood**\n- Correct **fibrinogen** early (target **>2 g/L**)",
   "discriminator": "- TXA is an **ANTIFIBRINOLYTIC** (reduces clot breakdown) — adjunctive, NOT a substitute for uterotonics or stopping the source\n- **Fibrinogen** is the first clotting factor to drop in obstetric haemorrhage (unlike trauma)",
   "redFlags": "- Estimated loss **≥1000 mL** ongoing, HR >100, BP <90 systolic, or clinical shock → activate **MTP**\n- Persistently low **fibrinogen <2 g/L** → give cryoprecipitate/fibrinogen concentrate",
   "mcqTrap": "- '**Withhold tranexamic acid** until coagulation studies are available' — WRONG\n- '**TXA can be given any time within 24 hours** with equal benefit' — WRONG\n  - Give 1 g IV immediately; benefit is greatest within **3 hours** and declines thereafter",
   "mnemonic": "TXA = \"1 gram, within 3 hours, repeat if still bleeding.\" Obstetric bleeding: \"Fibrinogen falls First.\"",
   "source": "WOMAN trial (Lancet 2017, TXA 1 g IV within 3 h); Queensland Clinical Guideline 'Primary PPH' (MN24.1) & National Blood Authority Patient Blood Management (fibrinogen >2 g/L). Verified 2026.",
   "verified": true,
   "tags": [
    "PPH",
    "tranexamic-acid",
    "massive-transfusion",
    "fibrinogen",
    "WOMAN-trial"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Intervention</th><th>Number</th></tr></thead><tbody><tr><td>Tranexamic acid IV</td><td><span class=\"gv-num\">1 g</span>, within <span class=\"gv-num\">3 h</span></td></tr><tr><td>MTP transfusion ratio</td><td>~<span class=\"gv-num\">1:1:1</span> RBC:FFP:plt</td></tr><tr><td>Fibrinogen target</td><td>><span class=\"gv-num\">2 g/L</span></td></tr><tr><td>Platelet target</td><td>><span class=\"gv-num\">50</span></td></tr></tbody></table>",
   "id": "obs-85",
   "title": "Tranexamic Acid in PPH",
   "subtitle": "Give 1g IV within 3 hours of birth"
  },
  {
   "topic": "Cord prolapse: relieve cord compression FIRST (knee-chest), don't reduce the cord",
   "subarea": "Delivery, operative & intrapartum emergencies",
   "trap": "- High-yield **Category-1 emergency**\n- Diagnosis: cord palpable/visible below the presenting part after ROM, usually with sudden fetal **BRADYCARDIA**/variable decelerations\n- What-first is to **RELIEVE COMPRESSION** immediately:\n  - (1) Call help + **Category 1 caesarean**\n  - (2) **Manually elevate** the presenting part off the cord (keep hand in vagina) AND/OR position mother **knee-chest** or steep Trendelenburg/left-lateral head down\n  - (3) Fill the **bladder (~500 mL)** to lift the head if delivery is delayed\n  - (4) **Minimal handling** of the cord — handling causes vasospasm; keep it warm\n- Do **NOT try to push the cord back in**\n- **Tocolysis** if uterus contracting and delay to theatre",
   "whatFirst": "- **Manually elevate** the presenting part off the cord\n- **Knee-chest/Trendelenburg** position\n- Call **Category 1 CS**\n- Fill **bladder (~500 mL)** if transfer is delayed\n- **Minimise cord handling**",
   "discriminator": "- **Overt prolapse** = cord past presenting part, often after ROM\n- **Occult prolapse** = cord alongside, intermittent variable decelerations\n- Either way: immediate manoeuvre = **relieving compression** and expediting delivery, not waiting\n- **Knee-chest** gives the greatest elevation effect",
   "redFlags": "- Sudden fetal **bradycardia/variable decelerations** immediately after spontaneous or artificial ROM = look/feel for cord prolapse\n- If **fully dilated and head low** → expedite instrumental\n- Otherwise → **Category 1 CS**",
   "mcqTrap": "- '**Gently replace the cord** into the uterus' — WRONG; handling causes vasospasm\n- '**Reassess in 30 minutes**' — WRONG; any delay risks fetal death\n  - Elevate the presenting part and proceed to **immediate delivery**",
   "mnemonic": "Cord prolapse = \"Hands up, bum up, call for the knife\" (elevate presenting part, knee-chest, Category 1 CS).",
   "source": "RANZCOG/RCOG Umbilical Cord Prolapse (Green-top 50, RANZCOG-endorsed) & Queensland intrapartum emergencies (elevate, knee-chest, bladder fill ~500 mL, Category 1 CS). Verified 2026.",
   "verified": true,
   "tags": [
    "cord-prolapse",
    "relieve-compression",
    "knee-chest",
    "category-1",
    "bladder-filling"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">ROM + sudden fetal bradycardia -> feel for cord</div><div class=\"gv-step\">Manually elevate presenting part off cord</div><div class=\"gv-step\">Knee-chest / Trendelenburg + fill bladder (~500 mL)</div><div class=\"gv-step\">Category 1 caesarean (or instrumental if fully dilated)</div></div>",
   "id": "obs-88",
   "title": "Umbilical Cord Prolapse",
   "subtitle": "Relieve compression with knee-chest; do not reduce cord",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Cord.prolaps.jpg/960px-Cord.prolaps.jpg",
     "caption": "Umbilical cord prolapse - cord visible at vulva",
     "alt": "Umbilical cord prolapsed through the cervix and visible at the vaginal introitus",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/a/a5/CTG_Output.jpg",
     "caption": "CTG - variable decelerations with cord compression",
     "alt": "Cardiotocograph showing variable decelerations characteristic of cord compression",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Uterine atony: the drug + intervention ladder (doses)",
   "subarea": "Delivery, operative & intrapartum emergencies",
   "trap": "- The exact **sequence and contraindications** are the gotcha\n- Ladder:\n  - (1) **Massage** / 'rub up' a contraction + empty bladder\n  - (2) **Oxytocin** IM 10 IU or IV, then infusion 40 IU in 500 mL–1 L\n  - (3) **Ergometrine** 250 microg IV/IM (max total 750 microg including any Syntometrine)\n    - **CONTRAINDICATED in hypertension/pre-eclampsia** (vasospasm)\n  - (4) **Carboprost** (PGF2alpha) 250 microg IM, repeat q15 min to max 2 mg (8 doses)\n    - **CONTRAINDICATED in asthma** (bronchospasm)\n  - (5) **Misoprostol** 1000 microg PR or 400 microg sublingual\n  - Plus **tranexamic acid 1 g IV** early\n  - Then intrauterine **balloon tamponade** (Bakri)\n  - Then **B-Lynch suture**\n  - Then **uterine/internal iliac artery ligation**\n  - Finally **hysterectomy**",
   "whatFirst": "- **Massage** + bladder empty + **oxytocin** first\n- Escalate through uterotonics\n- Then **balloon tamponade**\n- Then surgical: **B-Lynch → ligation → hysterectomy** if bleeding continues",
   "discriminator": "- **Ergometrine** = avoid if **HYPERTENSIVE/pre-eclamptic**\n- **Carboprost** = avoid if **ASTHMATIC**\n- **Misoprostol** = safe in **both** (the answer when hypertensive AND asthmatic)\n- Don't forget **tranexamic acid 1 g IV** — give EARLY (within 3 h)",
   "redFlags": "- Failure of medical therapy + balloon → escalate to **theatre** for surgical management\n- Ongoing loss with **coagulopathy** → massive transfusion protocol",
   "mcqTrap": "- '**Give ergometrine**' to a pre-eclamptic/hypertensive woman — WRONG; contraindicated in hypertension\n- '**Give carboprost**' to an asthmatic — WRONG; contraindicated in asthma\n  - Reach for **oxytocin/misoprostol** instead",
   "mnemonic": "Uterotonic order - \"Oh My Easy Cute Mum\": Oxytocin -> (Massage) -> Ergometrine -> Carboprost -> Misoprostol. Ergometrine-hypertension, Carboprost-asthma.",
   "source": "Queensland Clinical Guideline 'Primary postpartum haemorrhage' (MN24.1, 2024): oxytocin 40 IU IV infusion; ergometrine 250 microg, max total 750 microg; carboprost 250 microg q15min max 2 mg; misoprostol 1000 microg PR / 400 microg SL; TXA 1 g IV. Verified 2026.",
   "verified": true,
   "tags": [
    "atony",
    "uterotonic-ladder",
    "ergometrine-HTN",
    "carboprost-asthma",
    "balloon"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Massage + empty bladder</div><div class=\"gv-step\">Oxytocin 10 IU IM, then 40 IU IV infusion</div><div class=\"gv-step\">Ergometrine 250 microg, max total 750 microg (NOT if HTN)</div><div class=\"gv-step\">Carboprost 250 microg q15min, max 2 mg (NOT if asthma)</div><div class=\"gv-step\">Misoprostol 1000 microg PR / 400 microg SL + TXA 1 g IV</div><div class=\"gv-step\">Balloon -> B-Lynch -> ligation -> hysterectomy</div></div>",
   "id": "obs-84",
   "title": "Uterine Atony Drug Ladder",
   "subtitle": "Ergometrine contraindicated in hypertension and pre-eclampsia"
  },
  {
   "topic": "IOL complications: uterine tachysystole/hyperstimulation",
   "subarea": "Delivery, operative & intrapartum emergencies",
   "trap": "- **Tachysystole** = >5 contractions in 10 minutes averaged over 30 minutes (with or without FHR change)\n- The killer: tachysystole WITH **fetal compromise** (decelerations/bradycardia) during induction\n- 'CTG abnormal during induction — what first?' Management depends on the **agent**:\n  - If on **PROSTAGLANDIN** (Cervidil/dinoprostone) → **REMOVE the pessary**\n  - If on **OXYTOCIN** → **STOP/reduce the infusion**\n- Then: reposition (left lateral), IV fluids, O2\n- If it persists → acute **TOCOLYSIS**: terbutaline 250 microg SC (single dose)\n- The trap: reaching for **tocolysis or crash caesarean FIRST** — remove/stop the agent first; tocolyse only if that fails",
   "whatFirst": "- **Remove the prostaglandin / stop the oxytocin FIRST** + reposition\n- If compromise persists → **terbutaline 250 microg SC**",
   "discriminator": "- **Tachysystole alone** (normal CTG) = reduce/stop agent\n- **Tachysystole + abnormal FHR** = the emergency needing tocolysis if not resolving",
   "cutoffs": [
    "Tachysystole = **>5 contractions**/10 min averaged over 30 min",
    "Terbutaline **250 microg** (0.5 mL) SC single dose",
    "Sequence: **stop agent** → reposition/fluids/O2 → tocolysis → deliver if no response"
   ],
   "redFlags": "- **Prolonged deceleration/fetal bradycardia** not recovering after removing the agent",
   "trapAnswer": "'Immediate caesarean' or 'give terbutaline' as the FIRST step before removing the PGE2 / stopping oxytocin.",
   "mcqTrap": "- Skipping straight to **tocolysis or caesarean** instead of first ceasing the uterotonic",
   "mnemonic": "Stop the stimulant before you tocolyse.",
   "source": "Queensland Clinical Guidelines (IOL); SA Perinatal Practice Guideline Tocolysis; KEMH Terbutaline guideline (current)",
   "verified": true,
   "tags": [
    "obstetrics",
    "induction",
    "tachysystole",
    "CTG"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Remove PGE2 / stop oxytocin</div><div class=\"gv-step\">Left lateral, IV fluids, O2</div><div class=\"gv-step\">Persists -> terbutaline 250 mcg SC</div><div class=\"gv-step\">No response -> deliver</div></div>",
   "id": "obs-90",
   "title": "Uterine Tachysystole",
   "subtitle": "Over 5 contractions per 10 minutes; stop oxytocin",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Cardiotocography_diagram.jpg/960px-Cardiotocography_diagram.jpg",
     "caption": "CTG - uterine tachysystole with fetal decelerations",
     "alt": "Cardiotocograph demonstrating more than 5 contractions in 10 minutes (tachysystole) with associated fetal heart rate decelerations",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "VBAC: the cardinal risk is uterine rupture - what raises it and what's the sign?",
   "subarea": "Delivery, operative & intrapartum emergencies",
   "trap": "- The single defining hazard of birth after caesarean is **UTERINE RUPTURE**\n- Background rupture risk with one prior lower-segment CS in spontaneous labour = **~0.5%**\n- The gotcha — what AMPLIFIES it:\n  - Induction with **PROSTAGLANDINS** roughly triples the risk (**~1.4%**)\n  - Prostaglandins are **AVOIDED** for cervical ripening in a scarred uterus\n  - Use a **mechanical (balloon/Foley)** method instead\n  - **Oxytocin** (~0.8–1.1%) is higher than spontaneous but lower than PG\n- **Continuous CTG** is mandatory\n- **≥2 prior CS** or a previous **classical (vertical) incision** generally contraindicates planned vaginal birth",
   "whatFirst": "- If a scarred uterus needs ripening, use a **MECHANICAL method** (balloon/Foley catheter), NOT prostaglandin\n- In labour: **continuous CTG**\n- If rupture suspected → immediate **Category 1 CS** + resuscitation",
   "discriminator": "- Scar rupture triad:\n  - (1) Abnormal CTG — classically sudden fetal **BRADYCARDIA** (most consistent sign)\n  - (2) Constant abdominal **PAIN** (breakthrough pain despite epidural)\n  - (3) **LOSS OF STATION** / presenting part recedes + maternal tachycardia/hypotension + scar tenderness + vaginal bleeding\n- Mimic = **abruption**: woody tender uterus, but NO recession of presenting part / no scar history",
   "redFlags": "- Fetal bradycardia + **breakthrough abdominal pain** through epidural + presenting part no longer palpable vaginally (**rising station**) = rupture until proven otherwise → crash CS",
   "mcqTrap": "- '**Use prostaglandin (PGE2) gel** to ripen the cervix before induction' in a woman with one previous caesarean — WRONG\n  - Prostaglandins markedly increase rupture risk in a scarred uterus\n  - Use a **balloon catheter** for mechanical ripening",
   "mnemonic": "Rupture = the 3 B's: fetal Bradycardia, abdominal pain/Belly, loss of station/Baby recedes.",
   "source": "RANZCOG Birth After Caesarean (C-Obs 38, v4.1 Aug 2025); Australian population cohort rupture rates. Verified 2026.",
   "verified": true,
   "tags": [
    "VBAC",
    "uterine-rupture",
    "prostaglandin-avoid",
    "fetal-bradycardia"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Labour onset</th><th>Approx rupture risk</th></tr></thead><tbody><tr><td>Spontaneous</td><td><span class=\"gv-num\">~0.5%</span></td></tr><tr><td>Oxytocin induction</td><td><span class=\"gv-num\">~0.8-1.1%</span></td></tr><tr><td>Prostaglandin (+/-oxytocin)</td><td><span class=\"gv-num\">~1.4%</span> (AVOID)</td></tr></tbody></table>",
   "id": "obs-79",
   "title": "VBAC and Uterine Rupture",
   "subtitle": "Prostaglandin induction roughly triples rupture risk",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Cesarean_section.jpg/960px-Cesarean_section.jpg",
     "caption": "Uterine rupture - intraoperative finding",
     "alt": "Intraoperative photograph showing complete uterine wall rupture with fetal parts visible in the abdominal cavity",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Kardiotokogramm.jpg/960px-Kardiotokogramm.jpg",
     "caption": "CTG - sudden severe bradycardia (uterine rupture)",
     "alt": "Cardiotocograph showing abrupt onset of prolonged fetal bradycardia preceding uterine rupture",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Breastfeeding contraindications in Australia — the genuinely absolute ones",
   "subarea": "Puerperium & postnatal",
   "trap": "- Almost everything is compatible with breastfeeding — the trap is **over-calling contraindications**\n- Truly absolute contraindications:\n  - Infant **GALACTOSAEMIA**\n  - Active **untreated TB** (separate mother/baby until non-infectious; expressed milk is safe)\n  - Certain drugs: **cytotoxics/chemo, radioactive isotopes, lithium, oral retinoids, amiodarone**\n- Maternal **HIV** is now NUANCED in Australia — not a blanket ban (see discriminator)\n- **Mastitis** is NOT a contraindication\n- Most **antibiotics/analgesics** ARE safe",
   "whatFirst": "- Do NOT reflexively **stop breastfeeding** — check the specific drug/condition against a lactation resource (**LactMed** / Australian guidance)\n- Active untreated TB: **separate** but give expressed breast milk\n  - TB does NOT pass into milk\n  - Resume direct feeding once mother is treated and **non-infectious**",
   "discriminator": "- **HIV**: Australian ASHM guidance now SUPPORTS informed/supported breastfeeding for women on **ART with a sustained undetectable viral load** and engaged care\n  - Formula feeding recommended when NOT on treatment or NOT virally suppressed\n  - **'HIV = never breastfeed'** is no longer correct\n- **Galactosaemia**: an INFANT contraindication\n- **Hepatitis B**: vaccinate + HBIg, **breastfeed** — NOT a contraindication\n- **Hepatitis C**: breastfeed unless **cracked/bleeding nipples** — NOT a contraindication",
   "redFlags": "- Do NOT confuse 'medication crosses into milk in trace amounts' with **'contraindicated'** — most do not require cessation\n- Drugs that DO require cessation: **chemotherapy, radioisotopes, lithium, amiodarone, oral retinoids**",
   "mcqTrap": "- 'Mother has **mastitis / hepatitis B / is on flucloxacillin** → stop breastfeeding' — all WRONG\n- Note the updated **HIV nuance**: a virally-suppressed woman on ART may breastfeed with support\n- The absolute **infant contraindication** is galactosaemia",
   "mnemonic": "Stop breastfeeding for: Galactosaemia (baby), active untreated TB (direct feeding), and Toxic drugs (chemo, radioiodine, lithium, retinoids). HIV = depends on viral suppression.",
   "cutoffs": [
    "**Galactosaemia**: infant contraindication",
    "Active untreated **TB**: separate until non-infectious; expressed milk safe",
    "**HIV**: formula if not virally suppressed; supported breastfeeding possible if sustained undetectable on ART",
    "Contraindicated drugs: **chemo, radioisotopes, lithium, amiodarone, retinoids**"
   ],
   "tags": [
    "breastfeeding",
    "contraindications",
    "HIV",
    "TB",
    "high-yield"
   ],
   "source": "NHMRC Australian Infant Feeding Guidelines; ASHM Australian HIV Management Guidelines (mode of feeding); LactMed",
   "verified": false,
   "id": "obs-102",
   "title": "Breastfeeding Contraindications",
   "subtitle": "Truly absolute: infant galactosaemia and active untreated TB"
  },
  {
   "topic": "EPDS — the score that triggers action and the question that overrides the total",
   "subarea": "Puerperium & postnatal",
   "trap": "- Two independent triggers:\n  - **Total score ≥13** needs further assessment\n  - **Question 10** (self-harm) scoring **>0** demands urgent assessment REGARDLESS of the total\n    - A woman can score low overall yet flag on Q10 and still needs immediate action\n- The EPDS is a **screening tool**, NOT diagnostic\n- EPDS does **NOT detect postpartum psychosis**",
   "whatFirst": "- Any **positive Q10** → assess **safety of the woman and infant immediately** and take urgent action per local protocol if suicidal thoughts disclosed\n- **Total ≥13** → arrange clinical assessment for depression/anxiety\n  - Do NOT just 'rescreen later'",
   "discriminator": "- EPDS screens **depression AND anxiety** (not depression-only)\n- A high score flags **assessment**, not a diagnosis — confirm clinically\n- **Psychosis** is NOT captured by EPDS — never reassure on a 'normal' EPDS in a woman with **psychotic features**",
   "redFlags": "- **Q10 score of 1, 2 or 3** → assess safety of woman and any children in her care\n  - Arrange **mental-health assessment / urgent action** per clinical judgement",
   "mcqTrap": "- '**EPDS total is 9** (below 13), so no action needed' when Q10 is positive — WRONG; **Q10 overrides the total**\n- Also wrong: treating EPDS as **diagnostic** of depression",
   "mnemonic": "13 = think (assess). Q10 = act now (self-harm overrides the total).",
   "cutoffs": [
    "EPDS total **≥13** → further assessment",
    "**Q10** (self-harm) >0 → urgent action at any total",
    "**10-item** self-report scale, screening not diagnostic"
   ],
   "tags": [
    "EPDS",
    "perinatal-mental-health",
    "screening",
    "high-yield"
   ],
   "source": "COPE Australian Clinical Practice Guideline: Mental Health Care in the Perinatal Period (2023)",
   "verified": true,
   "id": "obs-100",
   "title": "EPDS Screening",
   "subtitle": "Q10 self-harm overrides the total score"
  },
  {
   "topic": "Mastitis vs breast abscess — CONTINUE breastfeeding; exact antibiotic and the abscess pivot",
   "subarea": "Puerperium & postnatal",
   "trap": "- The single biggest trap: '**STOP breastfeeding**' is the WRONG answer for both mastitis AND abscess\n- **Continue feeding/expressing** from the affected breast — milk stasis worsens it and abrupt cessation promotes abscess\n- Antibiotic = **di/flucloxacillin 500 mg QID** for at least **5 days**\n  - Penicillin allergy → **cephalexin (cefalexin)**\n  - Severe/immediate allergy → **clindamycin**\n- The pivot: not settling in **24–48 h** or a fluctuant lump → **ultrasound** to find an abscess",
   "whatFirst": "- **Conservative first** (effective milk removal, analgesia) — many resolve without antibiotics\n- Add antibiotics if **systemic features** OR not improving after **24–48 h** of effective drainage\n- Discrete fluctuant lump or no response to antibiotics → **USS**\n- Abscess = **US-guided needle aspiration** first-line\n  - Incision and drainage if large / not settling / aspiration unavailable",
   "discriminator": "- **Mastitis** = diffuse tender erythematous wedge, fever, flu-like\n- **Abscess** = additional discrete tense/fluctuant lump\n- Not responding to appropriate antibiotics → think **abscess** OR **inflammatory breast cancer**\n  - Mimics mastitis: peau d'orange, non-resolving\n  - **Biopsy** if persistent",
   "redFlags": "- **Systemic sepsis** features → admit for IV antibiotics\n- Mastitis not resolving despite correct antibiotics → USS + consider **inflammatory breast cancer** (core biopsy)\n- **Bloodstained aspirate** or residual mass after aspiration → core biopsy for malignancy",
   "mcqTrap": "- '**Cease breastfeeding** and prescribe antibiotics' — WRONG; continue breastfeeding (antibiotics and milk are safe for the baby)\n- '**Incision and drainage**' for an abscess as first-line — WRONG; **US-guided needle aspiration** is first-line in Australia",
   "mnemonic": "Mastitis: keep the milk moving + di/floxacillin 500 QID ×5+ days. Abscess: Aspirate first (not auto-incise).",
   "cutoffs": [
    "**Di/flucloxacillin 500 mg QID** for ≥5 days",
    "Penicillin allergy: **cefalexin**; severe allergy: **clindamycin**",
    "Review in **24–48 h**; USS if not settling"
   ],
   "tags": [
    "mastitis",
    "breast-abscess",
    "breastfeeding",
    "antibiotics",
    "high-yield"
   ],
   "source": "Therapeutic Guidelines: Antibiotic (mastitis); RACGP 'Lactational mastitis and breast abscess' (AFP)",
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Tender erythematous wedge + fever</div><div class=\"gv-step\">Effective milk removal + analgesia; KEEP feeding</div><div class=\"gv-step\">Not better in 24-48h or systemic → di/flucloxacillin 500 mg QID ≥5d</div><div class=\"gv-step\">Fluctuant lump / no response → USS</div><div class=\"gv-step\">Abscess → US-guided aspiration (I&D if fails)</div></div>",
   "id": "obs-98",
   "title": "Mastitis vs Breast Abscess",
   "subtitle": "Keep breastfeeding; stopping promotes abscess",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Atlas_of_clinical_surgery%3B_with_special_reference_to_diagnosis_and_treatment_for_practitioners_and_students_%281908%29_%2814768289625%29.jpg/960px-Atlas_of_clinical_surgery%3B_with_special_reference_to_diagnosis_and_treatment_for_practitioners_and_students_%281908%29_%2814768289625%29.jpg",
     "caption": "Mastitis - unilateral breast erythema and swelling",
     "alt": "Unilateral segmental erythema, warmth and swelling of the breast consistent with infective mastitis in a breastfeeding woman",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Ultrasound_image_of_breast_110323101432_1023480.jpg",
     "caption": "Breast abscess - ultrasound with hypoechoic collection",
     "alt": "Breast ultrasound showing a well-defined hypoechoic/anechoic collection with thick walls representing a lactational breast abscess",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Perineal tears — 3rd/4th degree = anal sphincter (OASIS), theatre repair, and aftercare",
   "subarea": "Puerperium & postnatal",
   "trap": "- Grading hinges on the **ANAL SPHINCTER**:\n  - **3a**: <50% external sphincter torn\n  - **3b**: >50% external sphincter torn\n  - **3c**: external sphincter + **internal sphincter** also torn\n  - **4th degree**: through to **anorectal mucosa/epithelium**\n- The trap: a '**3c**' is still 3rd-degree (involves internal sphincter)\n  - **4th degree only** when the anal epithelium is breached\n- **3rd/4th degree (OASIS)** need repair in **THEATRE** by a trained clinician\n  - Plus prophylactic **broad-spectrum antibiotics** AND **laxatives** (avoid constipation/straining on the repair)",
   "whatFirst": "- **Recognise and grade** with a rectal exam — sphincter injuries are missed without one\n  - If in doubt, **classify to the higher degree**\n- 3rd/4th degree → **repair in theatre** under regional/general anaesthesia with good lighting\n- Give prophylactic **broad-spectrum antibiotics**\n- Prescribe **laxatives** + analgesia\n- Arrange **physiotherapy and follow-up**",
   "discriminator": "- **3a** (<50% EAS) vs **3b** (>50% EAS) vs **3c** (EAS + internal anal sphincter) vs **4th** (anal mucosa/epithelium breached)\n- Whether the **internal sphincter** is involved and whether the **mucosa** is involved is the whole game",
   "redFlags": "- Future **faecal urgency/incontinence**, repair breakdown, infection\n- Subsequent pregnancy after OASIS with ongoing symptoms or a poor repair → may warrant **elective caesarean** discussion\n- **AVOID constipation** post-repair (laxatives)\n  - Bulking agents are NOT given routinely with laxatives",
   "mcqTrap": "- Labelling a tear involving the **internal anal sphincter (3c) as '4th degree'** — WRONG; 4th degree requires **anal epithelium** involvement\n- '**Repair at the bedside** in the birth suite' for a 3rd/4th degree — WRONG; these go to **theatre**",
   "mnemonic": "Degrees: 1 skin, 2 muscle, 3 Sphincter (a<50% / b>50% / c+internal), 4 'all the way' to anal mucosa. Aftercare = Antibiotics + Aperients (laxatives) + Analgesia + physio.",
   "cutoffs": [
    "**3a**: <50% external anal sphincter torn",
    "**3b**: >50% external anal sphincter torn",
    "**3c**: external + internal anal sphincter torn",
    "**4th**: anal/rectal epithelium breached",
    "**OASIS** = 3rd/4th degree → theatre repair"
   ],
   "tags": [
    "perineal-tear",
    "OASIS",
    "anal-sphincter",
    "high-yield"
   ],
   "source": "RANZCOG-endorsed RCOG Green-top Guideline 29 (Management of Third- and Fourth-degree Perineal Tears); ACSQHC Third and Fourth Degree Perineal Tears Clinical Care Standard (2021)",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Degree</th><th>Structures involved</th><th>Repair</th></tr></thead><tbody><tr><td>1st</td><td>Skin / vaginal mucosa only</td><td>May not need suturing</td></tr><tr><td>2nd</td><td>Perineal muscles (sphincter intact)</td><td>Delivery room</td></tr><tr><td>3a / 3b / 3c</td><td>External AS &lt;50% / &gt;50% / + internal AS</td><td>Theatre (OASIS)</td></tr><tr><td>4th</td><td>+ Anal/rectal epithelium</td><td>Theatre (OASIS)</td></tr></tbody></table>",
   "id": "obs-105",
   "title": "Perineal Tears and OASIS",
   "subtitle": "3c is still 3rd-degree; 4th reaches anorectal mucosa",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/5/56/Hirst-1898-Obstetrics-fig428-Perforations-and-lacerations-of-the-nymphce-Bar.jpg",
     "caption": "Perineal tear grading diagram (1st through 4th degree / OASIS)",
     "alt": "Anatomical diagram illustrating the four grades of perineal tears with particular emphasis on 3a, 3b, 3c and 4th-degree OASIS involvement of the anal sphincter complex and anorectal mucosa",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/1/14/Hirst-1898-Obstetrics-fig427-Perforations-and-lacerations-of-the-nymphce-Bar.jpg",
     "caption": "4th-degree perineal tear - anorectal mucosa visible",
     "alt": "Clinical photograph of a 4th-degree perineal tear showing complete disruption of the anal sphincter complex with exposure of anorectal mucosa",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Postnatal mental health — baby blues vs PND vs postpartum PSYCHOSIS (the emergency)",
   "subarea": "Puerperium & postnatal",
   "trap": "- Three distinct conditions examiners separate:\n  - **Baby blues**: peaks day 3-5, resolves by ~day 10-14, no treatment beyond support\n  - **Postnatal depression**: needs treatment\n  - **Postpartum psychosis**: psychiatric EMERGENCY, abrupt onset usually within first 2 weeks, needs urgent admission\n- Trap: managing psychosis as **'severe baby blues'** or arranging outpatient follow-up",
   "whatFirst": "- **Postpartum psychosis** = urgent psychiatric assessment + admission\n  - Risk of suicide AND infanticide\n  - Never send home / 'GP review next week'\n- **Baby blues** = reassure + support + safety-net\n- **PND** = assess severity, psychological therapy ± SSRI\n  - **Sertraline** favoured in breastfeeding",
   "discriminator": "- Strongest risk factor for postpartum psychosis: **bipolar disorder** / prior postpartum psychosis\n- Psychosis features: delusions, hallucinations, confusion, **mania**, rapid fluctuation, often bizarre beliefs about the baby\n- PND features: persistent **low mood/anhedonia**\n- Baby blues: **self-limiting**, not psychotic",
   "redFlags": "- Thoughts of **self-harm**, harming the baby, command hallucinations, beliefs the baby is evil/swapped → emergency\n- **EPDS Q10 positive** at ANY total score → immediate assessment regardless of total\n- New postpartum psychotic symptoms = **psychosis until proven otherwise**",
   "mcqTrap": "- Woman day 6 postpartum, confused, not sleeping, believing her baby is possessed\n  - Tempting wrong: 'reassure, this is baby blues' or 'commence sertraline as outpatient'\n  - Correct: **urgent psychiatric admission** (postpartum psychosis)",
   "mnemonic": "Blues = days (3-5). Depression = weeks-months. Psychosis = emergency (admit). Timing and urgency escalate together.",
   "cutoffs": [
    "Baby blues peak **day 3-5**, resolve ~day **10-14**",
    "Postpartum psychosis incidence ~**1-2 per 1000** births",
    "Psychosis onset usually within first **2 weeks**",
    "EPDS total **≥13** = further assessment",
    "EPDS **Q10 >0** (any total) = urgent assessment"
   ],
   "tags": [
    "perinatal-mental-health",
    "postpartum-psychosis",
    "EPDS",
    "psychiatric-emergency",
    "high-yield"
   ],
   "source": "COPE Australian Clinical Practice Guideline: Mental Health Care in the Perinatal Period (2023)",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th></th><th>Baby blues</th><th>PND</th><th>Postpartum psychosis</th></tr></thead><tbody><tr><td>Onset</td><td>Day 3-5</td><td>Weeks-months</td><td>Usually &lt;2 weeks, abrupt</td></tr><tr><td>Course</td><td>Self-limiting (~10-14d)</td><td>&gt;2 weeks, persistent</td><td>Fluctuating, severe</td></tr><tr><td>Features</td><td>Tearful, labile</td><td>Low mood, anhedonia, guilt</td><td>Delusions, hallucinations, mania, confusion</td></tr><tr><td>Action</td><td>Reassure + support</td><td>Therapy ± sertraline</td><td>URGENT admission (MBU)</td></tr></tbody></table>",
   "id": "obs-99",
   "title": "Postnatal Mental Health",
   "subtitle": "Postpartum psychosis is a psychiatric emergency"
  },
  {
   "topic": "Postpartum contraception timing — the oestrogen embargo and the 'start now' methods",
   "subarea": "Puerperium & postnatal",
   "trap": "- **Oestrogen-containing contraception** (combined pill/ring/patch) is CONTRAINDICATED in early puerperium for VTE risk\n  - Avoid for at least the first **21 days** postpartum\n  - If other VTE risk factors OR breastfeeding, defer to **6 weeks**\n- **Progestogen-only methods** (POP, implant, DMPA) and LARC can start essentially immediately\n- Ovulation can return **before 6 weeks** — do not rely on lactational amenorrhoea casually",
   "whatFirst": "- **Progestogen-only pill**, etonogestrel implant, and DMPA: can begin straight away postpartum, including while breastfeeding\n- **IUD/IUS**: insert within 48h of birth (immediate postpartum) OR wait ≥4 weeks\n  - Avoid the **48h-to-4-week window** (higher expulsion/perforation risk)\n- **Combined hormonal**: not before 21 days (not before 6 weeks if breastfeeding/VTE risk)",
   "discriminator": "- Breastfeeding + early postpartum + wants the pill → give **progestogen-only pill**, not combined pill\n- Discriminator: **VTE risk** (oestrogen + recent delivery) plus theoretical milk-supply concerns with oestrogen",
   "redFlags": "- Do NOT insert IUD between **48 hours and 4 weeks** postpartum (expulsion/perforation risk)\n- Do NOT start combined hormonal contraception **<21 days** (VTE)",
   "mcqTrap": "- Breastfeeding woman at 2-week check wants reliable contraception\n  - Tempting wrong: **combined oral contraceptive pill**\n  - Correct: **progestogen-only method** or LARC (avoid oestrogen this early)",
   "mnemonic": "Oestrogen: 21 days minimum, 6 weeks if breastfeeding/VTE. Progestogen/LARC: anytime. IUD: ≤48h or ≥4 weeks (never in between).",
   "cutoffs": [
    "Combined (oestrogen): avoid **<21 days**; defer to **6 weeks** if breastfeeding/VTE risk",
    "POP / implant / DMPA: **any time** postpartum",
    "IUD/IUS: within **48h** or **≥4 weeks** postpartum"
   ],
   "tags": [
    "contraception",
    "postpartum",
    "VTE",
    "LARC",
    "breastfeeding"
   ],
   "source": "UKMEC (followed in Australian family-planning practice); Australian Prescriber contraception guidance; RANZCOG / Sexual & Reproductive Health (Family Planning) Australia",
   "verified": true,
   "id": "obs-103",
   "title": "Postpartum Contraception Timing",
   "subtitle": "No oestrogen for at least 21 days postpartum"
  },
  {
   "topic": "Postpartum sepsis / endometritis — the 'antibiotics within 1 hour' rule and the regimen",
   "subarea": "Puerperium & postnatal",
   "trap": "- Maternal mortality rises **~8%** for EVERY hour antibiotics are delayed\n  - Broad-spectrum IV antibiotics go in within the **first hour** — do NOT wait for cultures/imaging\n- Pregnant/postpartum women mount a **blunted response**\n  - Normal-looking BP can hide profound sepsis (already vasodilated/tachycardic)\n- **Lactate and tachycardia** are more sensitive than BP",
   "whatFirst": "- **Sepsis Six within 1h**: blood cultures (before abx), broad-spectrum IV antibiotics, IV fluids, measure lactate, monitor urine output, give oxygen\n- Empirical regimen per SOMANZ: **piperacillin-tazobactam 4.5 g IV 8-hourly** ± gentamicin\n  - Add **clindamycin/lincomycin** if necrotising/toxin-mediated (Group A strep) suspected\n- Endometritis without severe sepsis: **amoxy/ampicillin + gentamicin + metronidazole** (or amoxicillin-clavulanate) per eTG",
   "discriminator": "- Endometritis (tender uterus, offensive lochia, fever) vs other postpartum fever sources — the **'7 Ws'**:\n  - Womb, Wind (chest), Water (UTI), Wound, Walk (DVT/PE), Wonder-drugs, Wean (breast)\n- Examine **breasts, legs and wounds**, not just the uterus",
   "redFlags": "- **Group A Streptococcus** (S. pyogenes) postpartum sepsis is fulminant — can kill in hours; add clindamycin (anti-toxin)\n- Pain out of proportion + crepitus → **necrotising fasciitis**, surgical emergency\n- Lactate **>2 mmol/L** = hypoperfusion; **>4** = septic shock territory",
   "mcqTrap": "- 'Await blood culture and imaging before starting antibiotics' — wrong\n  - **Antibiotics within 1 hour**, cultures first but do not delay\n- Also tempting: a narrow-spectrum agent\n  - Postpartum sepsis is **polymicrobial**, needs broad cover",
   "mnemonic": "7 Ws of postpartum fever: Womb, Wind, Water, Wound, Walk, Wonder-drugs, Wean (breast).",
   "cutoffs": [
    "Antibiotics within **1 hour** of recognition",
    "**~8%** rise in mortality per hour of antibiotic delay",
    "Lactate **>2** = hypoperfusion; **>4** = shock",
    "**Pip-tazo 4.5 g IV 8-hourly** (empirical)"
   ],
   "tags": [
    "sepsis",
    "endometritis",
    "SOMANZ",
    "obstetric-emergency",
    "high-yield"
   ],
   "source": "SOMANZ guidelines for the investigation and management of sepsis in pregnancy (2017; position statement updated 2023); eTG Antibiotic (endometritis)",
   "verified": true,
   "id": "obs-97",
   "title": "Postpartum Sepsis and Endometritis",
   "subtitle": "IV antibiotics within 1 hour; do not wait for cultures"
  },
  {
   "topic": "Postpartum VTE — risk stays HIGH for ~6 weeks; LMWH, and why D-dimer is useless",
   "subarea": "Puerperium & postnatal",
   "trap": "- VTE risk is **highest in the puerperium** (especially first 1-2 weeks), remains elevated for ~6 weeks postpartum\n  - Not just antenatally\n- **PE** is a leading direct cause of maternal death\n- Thromboprophylaxis is **LMWH**\n  - Warfarin and DOACs avoided antenatally\n  - **DOACs avoided in lactation**\n  - Often continued the full 6 weeks postnatally if high-risk\n- **D-dimer is unhelpful** (physiologically raised in pregnancy/puerperium) — do not use it to rule out VTE; image instead",
   "whatFirst": "- Reassess VTE risk **at delivery** and again postnatally\n- High-risk (e.g. ≥4 risk factors, prior VTE, thrombophilia, caesarean + risk factors) → **prophylactic LMWH**, typically 6 weeks postpartum\n- Suspected **PE** → CTPA or V/Q despite pregnancy\n- Suspected **DVT** → compression duplex ultrasound",
   "discriminator": "- Postpartum dyspnoea/pleuritic chest pain/leg swelling → investigate for **VTE**, don't attribute to deconditioning\n- **Left leg DVT** is over-represented (left iliac vein compression / May-Thurner)",
   "redFlags": "- Sudden collapse, hypoxia, **pleuritic chest pain**, unilateral leg swelling postpartum = PE/DVT until excluded\n- Treat empirically with **therapeutic LMWH** while awaiting imaging if high clinical suspicion",
   "mcqTrap": "- '**D-dimer is normal** so PE is excluded' — wrong in pregnancy/puerperium (raised at baseline)\n- Also wrong: a **DOAC** for postpartum VTE prophylaxis/treatment in a breastfeeding woman\n  - LMWH is the agent; warfarin is acceptable postpartum/breastfeeding for treatment; DOACs avoided in lactation",
   "mnemonic": "Puerperium = peak VTE; Prophylaxis with LMWH; D-dimer = Don't (use it).",
   "cutoffs": [
    "VTE risk elevated **~6 weeks** postpartum (highest first **1-2 weeks**)",
    "Prophylactic LMWH often for **6 weeks** postnatal if high-risk",
    "**Caesarean** ↑ risk vs vaginal birth"
   ],
   "tags": [
    "VTE",
    "thromboprophylaxis",
    "LMWH",
    "maternal-mortality",
    "high-yield"
   ],
   "source": "RCOG Green-top Guideline 37a (Reducing the Risk of VTE during Pregnancy and the Puerperium) — used in Australian practice; SOMANZ",
   "verified": true,
   "id": "obs-101",
   "title": "Postpartum VTE",
   "subtitle": "D-dimer useless; LMWH, not warfarin or DOAC",
   "images": [
    {
     "src": "assets/img/respiratory_ctpa_segmental_pe_01.jpg",
     "alt": "CT pulmonary angiogram showing intraluminal filling defects of acute pulmonary embolism",
     "credit": "Aung Myat and Arif Ahsan, Wikimedia Commons, CC BY 2.0 (cropped to axial panel)"
    }
   ]
  },
  {
   "topic": "PPH drug ladder — exact Australian doses and the two killer contraindications",
   "subarea": "Puerperium & postnatal",
   "trap": "- Contraindication trap:\n  - **Ergometrine**: contraindicated in hypertension/pre-eclampsia (vasoconstriction → stroke)\n  - **Carboprost** (PGF2α / Hemabate): contraindicated in **asthma** (bronchospasm)\n- In a pre-eclamptic woman bleeding from atony: do NOT reach for ergometrine/Syntometrine — use oxytocin then carboprost/misoprostol\n- In an **asthmatic**: avoid carboprost",
   "whatFirst": "- **Oxytocin first-line**: 5 IU IV slow or infusion (e.g. 40 IU in 1000 mL / 30 IU in 500 mL crystalloid)\n- Then **ergometrine 250 mcg IM/IV** (NOT if hypertensive)\n- Then **carboprost 250 mcg IM**, repeat q15min to max 2 mg / 8 doses (NOT if asthmatic)\n- **Misoprostol 800-1000 mcg PR**\n- **Tranexamic acid 1 g IV** over 10 min early",
   "discriminator": "- Oxytocin → ergometrine → carboprost are **sequential escalation**, not interchangeable alternatives\n- **Syntometrine** = ergometrine 500 mcg + oxytocin 5 IU (combined IM)\n  - Carries the same ergometrine **HTN contraindication**",
   "redFlags": "- Give **tranexamic acid EARLY** (within 3h of birth) — benefit falls sharply with delay\n- Persistent atonic bleeding despite drugs → **mechanical** (bimanual compression, intrauterine balloon) → surgical (B-Lynch, uterine/internal iliac artery ligation, hysterectomy)",
   "mcqTrap": "- Pre-eclamptic woman BP 165/110 bleeding from a boggy uterus\n  - Tempting wrong: **'ergometrine'** or **'Syntometrine'**\n  - Correct: **oxytocin** (then carboprost if needed)\n- Asthmatic → avoid carboprost, use **misoprostol**",
   "mnemonic": "Ergometrine = Elevated BP forbidden; Carboprost = Cannot in asthma (Constricts airways).",
   "cutoffs": [
    "**Oxytocin 5 IU IV** slow + infusion (e.g. 40 IU/1000 mL)",
    "Ergometrine **250 mcg IM/IV**, max 1 mg — avoid in HTN/PET",
    "Carboprost **250 mcg IM q15min**, max **2 mg (8 doses)** — avoid in asthma",
    "Misoprostol **800-1000 mcg PR**",
    "Tranexamic acid **1 g IV** over 10 min, within **3h**"
   ],
   "tags": [
    "PPH",
    "uterotonics",
    "pharmacology",
    "contraindications"
   ],
   "source": "Queensland Clinical Guidelines: Primary PPH (MN24.1-V12-R29, 2024); WOMAN trial (Lancet 2017) / WOMAN-2 (Lancet 2024) for TXA",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Drug</th><th>Dose</th><th>Do NOT give if</th></tr></thead><tbody><tr><td>Oxytocin</td><td>5 IU IV + infusion</td><td>(first-line, safe)</td></tr><tr><td>Ergometrine</td><td>250 mcg IM/IV (max 1 mg)</td><td>Hypertension / pre-eclampsia</td></tr><tr><td>Carboprost</td><td>250 mcg IM q15min (max 2 mg)</td><td>Asthma</td></tr><tr><td>Misoprostol</td><td>800-1000 mcg PR</td><td>—</td></tr><tr><td>Tranexamic acid</td><td>1 g IV over 10 min</td><td>(give early, &lt;3h)</td></tr></tbody></table>",
   "id": "obs-95",
   "title": "PPH Drug Ladder",
   "subtitle": "Ergometrine avoid in HTN; carboprost avoid in asthma"
  },
  {
   "topic": "Primary vs secondary PPH — the time cut-off AND the volume cut-offs",
   "subarea": "Puerperium & postnatal",
   "trap": "- **Primary PPH** = within 24h of birth; **Secondary PPH** = >24h up to 6 weeks (Qld)\n  - Many quote 12 weeks (wider international window), but Australian Qld guideline = 24h to 6 weeks\n- Volume thresholds: **≥500 mL** vaginal, **≥1000 mL** caesarean\n  - Volume alone is misleading: ANY blood loss causing **haemodynamic compromise** is a PPH regardless of measured mL\n  - Estimated blood loss is routinely **UNDER-estimated**\n- Treat the woman, not the number",
   "whatFirst": "- **Call for help + ABC** + work the 4 Ts simultaneously\n- First step for commonest cause (Tone, ~70%): **rub up a contraction** (fundal massage) + empty the bladder + give a uterotonic (oxytocin)\n- **Resuscitate first**; do NOT chase the cause before resuscitating",
   "discriminator": "- **Primary** (<24h, usually Tone/atony) vs **Secondary** (>24h, usually retained Products/endometritis)\n- Soft boggy poorly-contracted uterus = **atony**\n- Well-contracted uterus that still bleeds → **Trauma** (genital tract laceration) or Tissue",
   "redFlags": "- **Tachycardia and narrowing pulse pressure** precede hypotension\n  - Young fit woman compensates until ~30-40% loss then crashes\n- Ongoing bleeding despite a contracted uterus = look for **trauma or coagulopathy**\n- Activate **Massive Haemorrhage Protocol** if ≥1500 mL or ongoing",
   "mcqTrap": "- 'Blood loss was only 450 mL so this is not a PPH' — wrong\n  - Definition met by any loss causing **haemodynamic instability**, and EBL is underestimated\n- Do not pick **'12 weeks'** as the secondary cut-off on an Australian paper (Qld says 6 weeks)",
   "mnemonic": "4 Ts in order of frequency: Tone (70%) > Trauma (20%) > Tissue (10%) > Thrombin (1%).",
   "cutoffs": [
    "Primary PPH: within **24h** of birth",
    "Secondary PPH: **>24h to 6 weeks** postpartum (Qld)",
    "**≥500 mL** vaginal birth",
    "**≥1000 mL** caesarean (major/severe ≥1000 mL)",
    "MHP consideration: **≥1500 mL** or ongoing"
   ],
   "tags": [
    "PPH",
    "obstetric-emergency",
    "4Ts",
    "high-yield"
   ],
   "source": "Queensland Clinical Guidelines: Primary postpartum haemorrhage (MN24.1-V12-R29, 2024)",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Feature</th><th>Primary PPH</th><th>Secondary PPH</th></tr></thead><tbody><tr><td>Timing</td><td>&lt;24h of birth</td><td>&gt;24h to 6 weeks</td></tr><tr><td>Usual cause</td><td>Tone (atony, 70%)</td><td>Retained products / endometritis</td></tr><tr><td>Volume</td><td>≥500 mL vaginal / ≥1000 mL CS</td><td>Any excessive loss</td></tr><tr><td>Key action</td><td>4 Ts + uterotonics</td><td>USS uterus + antibiotics ± evacuation</td></tr></tbody></table>",
   "id": "obs-94",
   "title": "Primary vs Secondary PPH",
   "subtitle": "Secondary = 24h to 6 weeks (Qld), not 12"
  },
  {
   "topic": "Secondary PPH — retained products vs endometritis (the 24h-to-6-week bleed)",
   "subarea": "Puerperium & postnatal",
   "trap": "- Secondary PPH ≠ **atony**\n- Two big causes: **retained products of conception** and **endometritis** — and they coexist\n- Treat BOTH with **antibiotics**\n  - Heterogeneous intrauterine mass on USS points to RPOC needing evacuation\n- Over-calling RPOC on ultrasound leads to **unnecessary surgical evacuation**\n  - Risks: perforation and **Asherman's syndrome**",
   "whatFirst": "- Assess haemodynamics + uterine tenderness + offensive lochia + fever\n- **Pelvic USS** for retained products\n- Start **broad-spectrum antibiotics** (covers concurrent endometritis)\n- **Surgical evacuation** only if significant RPOC or ongoing heavy bleeding\n  - Ideally after antibiotics started",
   "discriminator": "- **Endometritis**: tender bulky uterus, fever, offensive lochia, raised WCC/CRP\n- **RPOC**: persistent/heavy PV bleeding, open os, heterogeneous mass on USS\n  - Classic RPOC bleed timing: **day 7-14**",
   "redFlags": "- **Sepsis features** (fever, tachycardia, hypotension, raised lactate) → treat as postpartum sepsis\n- Heavy ongoing bleeding → resuscitate as for **primary PPH**",
   "mcqTrap": "- 'Give a uterotonic and discharge' — wrong for secondary PPH with fever/offensive lochia\n  - Correct: **USS + antibiotics ± evacuation**\n- Do not omit **antibiotics** even when retained tissue looks obvious\n  - Superimposed endometritis is common",
   "mnemonic": "Secondary PPH = 'Products + Pus' (retained Products + endometritis).",
   "cutoffs": [
    "Secondary PPH: **>24h to 6 weeks**",
    "Classic timing of RPOC bleed: **day 7-14**"
   ],
   "tags": [
    "PPH",
    "secondary-PPH",
    "RPOC",
    "endometritis"
   ],
   "source": "Queensland Clinical Guidelines: Secondary postpartum haemorrhage (Qld Health, current); RANZCOG/eTG principles",
   "verified": false,
   "id": "obs-96",
   "title": "Secondary PPH",
   "subtitle": "Heterogeneous uterine mass = retained products needing evacuation"
  },
  {
   "topic": "Sheehan syndrome — postpartum hypopituitarism after massive PPH",
   "subarea": "Puerperium & postnatal",
   "trap": "- Classic earliest clue: **failure to lactate** (loss of prolactin) after severe PPH/hypovolaemic shock\n  - Then failure to resume menses (loss of FSH/LH)\n- Presents **insidiously** (sometimes months-years later) — frequently missed\n- Acute danger: **secondary adrenal insufficiency** (ACTH loss) → adrenal crisis/hypotension, plus secondary hypothyroidism\n- Acutely: replace **hydrocortisone BEFORE thyroxine**\n  - Giving thyroxine first can precipitate **adrenal crisis**",
   "whatFirst": "- Suspect after **massive PPH + failure to lactate**\n- Check anterior pituitary axis: **cortisol/ACTH**, free T4/TSH, prolactin, FSH/LH/oestradiol\n- In acute crisis: **IV hydrocortisone first**, then thyroxine\n  - Never thyroxine before steroid cover",
   "discriminator": "- **Sheehan's**: post-PPH, panhypopituitarism, failure to lactate\n- **Lymphocytic hypophysitis**: autoimmune, peripartum but not PPH-driven\n- **Postpartum thyroiditis**: isolated thyroid, transient hyper- then hypothyroid, normal lactation\n- Discriminator: **PPH history + failure to lactate**",
   "redFlags": "- Persistent hypotension, hyponatraemia, hypoglycaemia, lethargy postpartum after a big bleed = possible **adrenal crisis** from undiagnosed Sheehan → treat with hydrocortisone\n- **Diabetes insipidus** is uncommon (posterior pituitary usually spared)",
   "mcqTrap": "- 'Start **levothyroxine**' as first step in hypothyroid-looking post-PPH woman — wrong\n  - Give **hydrocortisone first** (risk of precipitating adrenal crisis)\n- Also: attributing failure to lactate to **'stress'** and missing the diagnosis",
   "mnemonic": "Sheehan = Shock (PPH) → Stops Suckling (no lactation) → Steroids before thyroxine.",
   "cutoffs": [
    "Trigger: **massive PPH** / hypovolaemic shock",
    "Earliest sign: **failure to lactate** (low prolactin)",
    "Acute Rx: **hydrocortisone BEFORE thyroxine**"
   ],
   "tags": [
    "Sheehan",
    "hypopituitarism",
    "PPH-complication",
    "endocrine"
   ],
   "source": "Standard endocrine/obstetric medicine teaching (universally accepted principle; no Australian-specific guideline)",
   "verified": false,
   "id": "obs-106",
   "title": "Sheehan Syndrome",
   "subtitle": "Failure to lactate after massive PPH",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Pituitary_apoplexy.jpg/960px-Pituitary_apoplexy.jpg",
     "caption": "Sheehan syndrome - empty sella on MRI pituitary",
     "alt": "MRI of the pituitary fossa demonstrating an empty or partially empty sella turcica consistent with pituitary infarction following postpartum haemorrhage (Sheehan syndrome)",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Six-week postnatal check — what must be covered (and the easily-forgotten items)",
   "subarea": "Puerperium & postnatal",
   "trap": "- It is a **structured maternal review**, not just 'are you ok'\n- Easily-forgotten components:\n  - **Mood** (EPDS)\n  - **Contraception** (and the oestrogen/breastfeeding rules)\n  - Perineal/CS **wound healing**\n  - Urinary AND **faecal continence** (especially after OASIS)\n  - **Pelvic-floor exercises**\n  - Breastfeeding\n  - **BP check** (especially after a hypertensive disorder)\n  - **GDM follow-up** (OGTT at 6-12 weeks postpartum)\n  - Ensuring cervical screening is up to date\n- The baby is reviewed **separately**",
   "whatFirst": "- History: bleeding/lochia, wound pain, urinary/bowel symptoms, mood, breastfeeding, fatigue, sex/contraception\n- Exam as indicated: **BP**, perineum/wound, abdomen\n- Arrange: contraception, **EPDS**, postnatal GDM OGTT, BP follow-up for hypertensive disorders, immunisations if due",
   "discriminator": "- Women with a **hypertensive disorder** or **GDM** need specific follow-up — commonly omitted:\n  - Postnatal **BP review**\n  - **75 g OGTT at 6-12 weeks** for prior GDM to detect persisting type 2 diabetes",
   "redFlags": "- Persisting hypertension/proteinuria, secondary PPH, breast lump not settling, **low mood/EPDS flag**, faecal incontinence after OASIS\n  - → escalate/refer rather than reassure",
   "mcqTrap": "- Forgetting that a woman with GDM needs a **75 g OGTT at 6-12 weeks** postpartum\n  - Not just an HbA1c, and not 'no follow-up'\n- Prior **pre-eclampsia** mandates postnatal BP review AND lifelong cardiovascular risk counselling",
   "mnemonic": "6-week check 'MUM CHECC': Mood (EPDS), Uterus/lochia/wound, Micturition/bowels, Contraception, Hypertension follow-up, Examination (BP/perineum), Cervical screening, Coexisting (GDM OGTT).",
   "cutoffs": [
    "Postnatal OGTT for prior GDM: **6-12 weeks** postpartum (**75 g**)",
    "**EPDS** at the check",
    "Combined contraception only if **≥6 weeks** when breastfeeding",
    "Timing **~6 weeks** (4-8 weeks)"
   ],
   "tags": [
    "postnatal-check",
    "six-week-check",
    "screening",
    "GDM-followup"
   ],
   "source": "RACGP postnatal care guidance; ADIPS 2025 consensus recommendations (postnatal 75 g OGTT at 6-12 weeks); COPE perinatal mental health (2023)",
   "verified": true,
   "id": "obs-104",
   "title": "Six-Week Postnatal Check",
   "subtitle": "Don't forget mood, continence, and contraception"
  }
 ]
}
);
