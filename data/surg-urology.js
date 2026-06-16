window.GOTCHA = window.GOTCHA || { modules: [] };
window.GOTCHA.modules.push(
{
 "id": "surg-urology",
 "name": "Urology (Surgical)",
 "category": "Surgery",
 "blurb": "Written-exam + VIVA. Testicular torsion (theatre before USS), obstructed-infected stone, retention, haematuria.",
 "cards": [
  {
   "topic": "Bilateral orchidopexy — always fix BOTH testes",
   "subarea": "Acute scrotum & torsion",
   "trap": "Fixing only the affected testis. The underlying cause is usually a BELL-CLAPPER deformity (horizontal lie, high investment of tunica vaginalis) which is bilateral — the unaffected testis carries the same risk of future torsion. Also a trap: at orchidectomy for a dead testis, forgetting the contralateral fixation because 'the problem is solved'.",
   "whatFirst": "At exploration: detorse, assess viability (wrap in warm swab, observe reperfusion). Viable -> bilateral orchidopexy (fix the affected testis AND the contralateral). Non-viable -> orchidectomy of the dead side + orchidopexy of the remaining (contralateral) testis.",
   "discriminator": "Bell-clapper deformity is bilateral -> bilateral fixation. Contrast neonatal (perinatal) torsion which is usually EXTRAvaginal (the whole cord including tunica twists) — management of the contralateral side and timing is more debated, but the contralateral testis is still typically fixed.",
   "redFlags": "Never close the scrotum having fixed only one side in an intravaginal (bell-clapper) torsion.",
   "cutoffs": [
    "Affected testis viable: bilateral orchidopexy",
    "Affected testis non-viable: orchidectomy + contralateral orchidopexy",
    "Consent must explicitly include possible orchidectomy AND fixation of both testes"
   ],
   "mcqTrap": "'Fix the affected testis only' — wrong. Correct: fix both (or orchidectomy + fix the remaining one).",
   "viva": "Consent angle: examiner probes whether you consented for 'scrotal exploration, possible orchidectomy, and bilateral orchidopexy'. Discriminator probed: why fix the other side (bilateral bell-clapper).",
   "source": "RACS Position Paper — Acute scrotal pain and suspected testicular torsion (2022)",
   "tags": [
    "torsion",
    "orchidopexy",
    "bilateral-fixation",
    "consent",
    "bell-clapper"
   ],
   "mnemonic": "'One twists, both get pinned.'",
   "verified": true,
   "title": "Bilateral orchidopexy",
   "subtitle": "always fix BOTH testes",
   "id": "surg-urology-1"
  },
  {
   "topic": "Epididymo-orchitis — Australian antibiotic choice by age/risk (when it is NOT torsion)",
   "subarea": "Acute scrotum & torsion",
   "trap": "Giving the wrong empirical antibiotic by missing the age/exposure split. The trap MCQ option is a quinolone-only or amoxicillin regimen for a sexually active 22-year-old — wrong, because <35 / sexually active is STI-driven (chlamydia/gonorrhoea) and needs ceftriaxone + doxycycline, not an enteric-coverage regimen. The deeper trap is treating 'epididymo-orchitis' empirically while a torsion was never excluded.",
   "whatFirst": "First EXCLUDE torsion clinically. Then stratify: sexually active/<35 -> treat presumptively for gonorrhoea + chlamydia; older/non-STI/post-instrumentation -> cover enteric Gram-negatives (per eTG). For men who engage in insertive anal sex, treat as for STI empirically but if response is poor, cover enteric organisms (seek specialist advice). Send first-pass urine NAAT (chlamydia/gonorrhoea) +/- MSU.",
   "discriminator": "STI pattern (<35, urethral discharge, contact history) -> ceftriaxone IM + doxycycline. Enteric/UTI pattern (>35, recent catheter/instrumentation, known UTI, dipstick leuks/nitrites) -> Gram-negative cover (fluoroquinolone preferred for testicular penetration; choice per current eTG). Mumps orchitis = post-pubertal, parotitis, supportive only.",
   "redFlags": "Systemically unwell / abscess / Fournier features -> IV antibiotics + surgical review. Failure to respond -> reconsider missed torsion or abscess and re-image.",
   "cutoffs": [
    "STI more likely <35 y; enteric/UTI more likely >35 y (with low-risk sexual history / instrumentation / positive dipstick)",
    "STI regimen (STI Guidelines Australia): ceftriaxone 500 mg IM stat (in 2 mL 1% lignocaine) PLUS doxycycline 100 mg BD for 14 days",
    "STI regimen alternative: azithromycin 1 g PO stat, repeated 1 week later (substitutes doxycycline)",
    "Enteric/older pattern: fluoroquinolone preferred — confirm exact agent/dose against current eTG"
   ],
   "mcqTrap": "'Sexually active 22-year-old with epididymitis -> oral ciprofloxacin alone' — wrong; needs ceftriaxone + doxycycline to cover gonorrhoea + chlamydia.",
   "viva": "Examiner probes: 'What if he doesn't settle on antibiotics?' Answer: re-evaluate for missed torsion/abscess; and the consent/safety point that torsion must be excluded before labelling it epididymo-orchitis.",
   "source": "STI Guidelines Australia — Epididymo-orchitis (ASHM); Therapeutic Guidelines (eTG, current)",
   "tags": [
    "epididymo-orchitis",
    "antibiotics",
    "STI",
    "age-cutoff",
    "mimic"
   ],
   "mnemonic": "'<35 = STI (Ceft + Doxy 14d); >35 / instrumentation = coliforms (quinolone per eTG).'",
   "verified": false,
   "title": "Epididymo-orchitis",
   "subtitle": "Australian antibiotic choice by age/risk (when it is NOT torsion)",
   "id": "surg-urology-2"
  },
  {
   "topic": "Manual detorsion + theatre logistics (transfer / interrupt the list)",
   "subarea": "Acute scrotum & torsion",
   "trap": "Treating manual detorsion as definitive, or using logistics ('list is full', 'no paeds anaesthetist', 'send to the bigger hospital') as a reason to delay. Manual detorsion is only a temporising bridge and MUST NOT delay surgery — fixation is still required. RACS explicitly states it is appropriate to INTERRUPT the elective list for scrotal exploration and that suspected torsion should NOT be transferred (managed at hospital of presentation).",
   "whatFirst": "If theatre access is delayed, attempt manual detorsion as a bridge (classically 'open book' — medial-to-lateral), guided by pain relief. Then still proceed to exploration + bilateral fixation. Do not transfer; interrupt the list if needed.",
   "discriminator": "Manual detorsion success (pain relief, testis descends/lengthens) does NOT remove the need for surgical fixation; partial/failed detorsion still needs theatre. Direction can be atypical (some torsions are lateral-to-medial), so use clinical response, not dogma.",
   "redFlags": "Do not delay theatre for transfer, for ultrasound, or for the elective list. Exception per RACS: a child under 5 with no anaesthetist credentialed for that age group may be transferred only if transport time is under 1 hour.",
   "cutoffs": [
    "Manual detorsion = temporising only; surgery/fixation still required",
    "No transfer for suspected torsion — manage at hospital of presentation",
    "Under-5 with no credentialed paeds anaesthetist: transfer only if <1 h transport (RACS)",
    "Interrupting the elective list for suspected torsion is appropriate (RACS)"
   ],
   "mcqTrap": "'Successful manual detorsion with pain relief — discharge with urology follow-up' — wrong; bilateral surgical fixation is still required.",
   "viva": "Escalation/ISBAR angle: 'Your only theatre is running an elective list and the nearest paeds centre is 90 min away — what do you do?' Answer: interrupt the local list and operate; do not transfer 90 min away.",
   "source": "RACS Position Paper — Acute scrotal pain and suspected testicular torsion (2022)",
   "tags": [
    "torsion",
    "manual-detorsion",
    "transfer-policy",
    "escalation",
    "logistics"
   ],
   "mnemonic": "'Open the book medial-to-lateral — then still pin it in theatre.'",
   "verified": true,
   "title": "Manual detorsion + theatre logistics (transfer /…",
   "id": "surg-urology-3"
  },
  {
   "topic": "Suspected testicular torsion = STRAIGHT TO THEATRE — do NOT wait for ultrasound",
   "subarea": "Acute scrotum & torsion",
   "trap": "The single most tempting wrong MCQ answer is 'urgent scrotal Doppler ultrasound' for the classic 14-year-old with sudden severe scrotal pain. WRONG: a clinically suspected torsion goes to the operating theatre — imaging that delays surgery is a management error. RACS is explicit that ultrasound cannot reliably exclude torsion and must not delay surgical intervention. A normal/negative scan does NOT exclude torsion. Imaging is only justified once torsion has been clinically EXCLUDED, to investigate an alternative diagnosis.",
   "whatFirst": "Clinical diagnosis -> NIL by mouth, IV access, analgesia, urgent surgical/urology referral, consent, to theatre for scrotal exploration. Do NOT order USS first; do NOT transfer.",
   "discriminator": "Torsion vs epididymo-orchitis: torsion = sudden severe pain, ABSENT cremasteric reflex, high-riding/horizontal testis, nausea/vomiting, normal urinalysis. If you cannot confidently exclude torsion, you explore.",
   "redFlags": "Sudden severe pain + absent cremasteric reflex + high-riding testis + nausea = explore now. Do not let a 'reassuring' Doppler or borderline urinalysis talk you out of theatre.",
   "cutoffs": [
    "Urgent exploration recommended within 2 hours (RACS 2022)",
    "USS meta-analysis sensitivity ~0.86 for torsion — NOT high enough to rule out; RACS: USS cannot reliably exclude torsion",
    "Do NOT transfer suspected torsion (manage at hospital of presentation)"
   ],
   "mcqTrap": "'Arrange urgent scrotal ultrasound to confirm the diagnosis' — wrong because it delays salvage and cannot reliably exclude torsion. Correct answer: immediate scrotal exploration in theatre.",
   "viva": "Examiner probes: 'Doppler is normal — what now?' Answer: still explore if clinically suspected. ISBAR to on-call surgeon/urologist; do not transfer; interrupt the elective list if needed.",
   "source": "RACS Position Paper — Acute scrotal pain and suspected testicular torsion (2022)",
   "tags": [
    "torsion",
    "ultrasound-trap",
    "straight-to-theatre",
    "what-first"
   ],
   "mnemonic": "'Time is testis, not ultrasound.'",
   "verified": true,
   "visualHtml": "<div class='gv-flow'><div class='gv-step'>Sudden severe scrotal pain (peri-pubertal boy)</div><div class='gv-step'>Clinical exam: cremasteric reflex / lie / nausea</div><div class='gv-step'>Torsion suspected or cannot exclude</div><div class='gv-step'>NBM + IV + analgesia + consent — NO USS, NO transfer</div><div class='gv-step'>THEATRE: scrotal exploration within ~2 h</div></div>",
   "title": "Suspected testicular torsion = STRAIGHT TO THEATRE",
   "subtitle": "do NOT wait for ultrasound",
   "id": "surg-urology-4"
  },
  {
   "topic": "The 6-hour salvage window (and why you still explore at 24-48 h)",
   "subarea": "Acute scrotum & torsion",
   "trap": "Two opposite traps. (1) Thinking salvage is only 6 hours, so the boy who presents at 18-24 hours is 'too late, no point operating' — WRONG, you STILL explore (RACS: salvage remains a possibility up to 48 h, and you must fix the contralateral testis regardless). (2) Thinking you have 6 comfortable hours — the clock runs from PAIN ONSET, not from arrival, so the apparent window at presentation is already partly spent.",
   "whatFirst": "Estimate time from PAIN ONSET (history), not from ED arrival. Any duration -> still urgent exploration; never write off a late presenter without surgical review.",
   "discriminator": "Salvage rate is duration-dependent: 80-100% if detorsed within 6 h from onset; declines sharply thereafter; salvage still possible up to 48 h. Intermittent torsion (recurrent self-resolving pain) is an indication for elective bilateral fixation even when currently pain-free.",
   "redFlags": "Late presentation is NOT a reason to delay — non-viable testis is removed (orchidectomy) AND the other side is fixed at the same operation.",
   "cutoffs": [
    "Within 6 h from pain onset: 80-100% salvage (RACS)",
    "6-24 h: salvage declines sharply but still attempted",
    "Up to 48 h: salvage remains a possibility — explore",
    "Clock starts at pain onset, NOT arrival"
   ],
   "mcqTrap": "'Pain for 20 hours, so manage conservatively / discharge' — wrong. Correct: still explore (salvage may be possible; contralateral fixation mandatory; confirm diagnosis).",
   "viva": "Examiner: 'He's had pain 20 hours — worth operating?' Answer: yes — explore, detorse/assess viability, orchidectomy if non-viable, and fix the contralateral testis regardless.",
   "source": "RACS Position Paper — Acute scrotal pain and suspected testicular torsion (2022)",
   "tags": [
    "torsion",
    "salvage-time",
    "6-hour-rule",
    "timing-trap"
   ],
   "mnemonic": "'6 hours = best, 48 hours = still go, the clock started at the pain.'",
   "verified": true,
   "title": "The 6-hour salvage window (and why you…",
   "id": "surg-urology-5"
  },
  {
   "topic": "Torsion vs epididymo-orchitis vs torsion of appendix testis — the discriminator table",
   "subarea": "Acute scrotum & torsion",
   "trap": "Anchoring on a single sign. Prehn sign (pain relief on elevation = epididymitis) and the cremasteric reflex are UNRELIABLE individually and must never be used to rule out torsion. Initial clinical evaluation of the acute scrotum is frequently wrong. The exam wants the PATTERN, plus the rule: if torsion cannot be confidently excluded -> explore.",
   "whatFirst": "Pattern-match age + onset + exam + urinalysis. If the pattern is torsion OR torsion cannot be excluded -> theatre. If clearly epididymo-orchitis -> antibiotics. If clearly appendix testis torsion (blue dot, well child) -> conservative/analgesia.",
   "discriminator": "Torsion: peri-pubertal, sudden severe pain, N&V, absent cremasteric reflex, high/horizontal testis, normal urinalysis. Epididymo-orchitis: gradual onset, fever, tender posterolateral epididymis, cremasteric reflex present, pyuria, often sexually active (<35 STI) or older (enteric/UTI). Appendix testis torsion: pre-pubertal (7-12 y), well child, focal upper-pole tenderness, BLUE DOT sign, cremasteric present, self-limiting (5-10 days).",
   "redFlags": "Absent cremasteric reflex + high-riding testis + N&V = torsion until proven otherwise in theatre. Fever/pyuria does NOT exclude torsion.",
   "cutoffs": [
    "Appendix testis torsion age: ~7-12 y (pre-pubertal)",
    "Epididymo-orchitis: STI more likely <35 y, enteric/UTI more likely >35 y",
    "Peak torsion age ~14-18 y"
   ],
   "mcqTrap": "'Pain relieved by elevating the testis (positive Prehn sign), therefore epididymitis — treat with antibiotics' — wrong, Prehn is unreliable; if torsion not excluded, explore.",
   "viva": "Examiner probes the discriminator directly: 'How do you tell torsion from epididymo-orchitis at the bedside, and what tips you to theatre?' Lead with age/onset/cremasteric/lie/urinalysis and the safety rule.",
   "source": "RCH Clinical Practice Guideline — Acute scrotal pain or swelling; RACS Position Paper (2022)",
   "tags": [
    "torsion",
    "epididymo-orchitis",
    "appendix-testis",
    "blue-dot",
    "discriminator"
   ],
   "mnemonic": "Blue dot = appendix (pre-pubertal, well); High & horizontal + no cremaster = TORSION; Hot & posterolateral + pyuria = epididymitis.",
   "verified": false,
   "visualHtml": "<table class='gv-table'><thead><tr><th>Feature</th><th>Testicular torsion</th><th>Epididymo-orchitis</th><th>Appendix testis torsion</th></tr></thead><tbody><tr><td>Typical age</td><td>Peri-pubertal (also neonate)</td><td>&lt;35 STI / &gt;35 enteric; infants</td><td>Pre-pubertal 7-12 y</td></tr><tr><td>Onset</td><td>Sudden, severe</td><td>Gradual / subacute</td><td>Sub-acute, mild</td></tr><tr><td>Cremasteric reflex</td><td>Absent</td><td>Present</td><td>Present</td></tr><tr><td>Testis lie</td><td>High-riding / horizontal</td><td>Normal</td><td>Normal</td></tr><tr><td>Special sign</td><td>N&amp;V; tender whole testis</td><td>Tender posterolateral epididymis; fever; pyuria</td><td>Blue dot at upper pole</td></tr><tr><td>Action</td><td>THEATRE</td><td>Antibiotics</td><td>Analgesia / conservative</td></tr></tbody></table>",
   "title": "Torsion vs epididymo-orchitis vs torsion of appendix testis",
   "subtitle": "the discriminator table",
   "id": "surg-urology-6"
  },
  {
   "topic": "Definitive stone treatment modalities — ESWL vs URS vs PCNL (which size/site picks which)",
   "subarea": "Stones & obstruction",
   "trap": "Easy-to-forget modality mapping for the MCQ: ESWL (extracorporeal shock wave lithotripsy) = non-invasive, best for SMALLER stones (good stone-free rates up to ~20mm, except lower-pole) in kidney or proximal ureter; fails on hard stones (cystine, calcium oxalate monohydrate) and obese patients; contraindicated in pregnancy, uncorrected coagulopathy/anticoagulation, active UTI, and obstruction distal to the stone. URETEROSCOPY (URS) + laser (holmium) = scope up, fragment/basket; best for ureteric stones (esp mid/distal) and increasingly first-line; preferred in pregnancy and is the safer option in anticoagulated patients. PCNL (percutaneous nephrolithotomy) = gold standard for LARGE (>20mm) renal stones and staghorn calculi — track into the kidney. A JJ stent is a TEMPORISER (relieves obstruction) not definitive stone removal. Active UTI must be treated/drained before any elective lithotripsy.",
   "whatFirst": "Match modality to size+site: small kidney/proximal stone → ESWL or URS; ureteric stone → URS; large renal/staghorn → PCNL. Treat infection first.",
   "discriminator": "ESWL vs URS vs PCNL chosen by stone size & location and patient factors (pregnancy/anticoagulation push you to URS). Stent = drains, doesn't remove.",
   "redFlags": "Never lithotripsy with active infection (showers sepsis) or in pregnancy (ESWL contraindicated). Staghorn calculus → infection/struvite (urease-producing organisms, esp Proteus mirabilis) → PCNL + treat the urea-splitting organism.",
   "mcqTrap": "Tempting wrong answer: 'ESWL for a 25mm staghorn calculus' (wrong — that's PCNL) or 'ESWL in pregnancy' (contraindicated → URS). Also: thinking a JJ stent is definitive treatment — it only relieves obstruction.",
   "cutoffs": [
    "ESWL: kidney/proximal ureter stones, good stone-free rates up to ~20mm (except lower-pole); contraindicated pregnancy, coagulopathy, active UTI, distal obstruction",
    "URS + holmium laser: ureteric stones (mid/distal); preferred in pregnancy & anticoagulation",
    "PCNL: gold standard for large renal stones >20mm + staghorn calculi",
    "JJ stent = temporising drainage, not stone removal"
   ],
   "mnemonic": "'Small Shock (ESWL), Ureter Scope (URS), Big Bore (PCNL)'.",
   "viva": "Examiner: 'How would you definitively treat a 25mm renal stone vs a 6mm distal ureteric stone?' (PCNL vs URS/ESWL). Consent: bleeding & sepsis for PCNL; stent symptoms; possible need for second procedure. Discriminator probe: 'why not ESWL here?'",
   "tags": [
    "ESWL",
    "ureteroscopy",
    "PCNL",
    "staghorn",
    "stent",
    "definitive-treatment",
    "MEDI8403",
    "MEDI8401"
   ],
   "source": "EAU Urolithiasis Guidelines 2025; AUA Surgical Management of Stones guideline. Size cut-offs (ESWL up to ~20mm; PCNL >20mm/staghorn), pregnancy/coagulopathy/UTI contraindications, and struvite/Proteus link verified via web 2026-06.",
   "verified": true,
   "title": "Definitive stone treatment modalities",
   "subtitle": "ESWL vs URS vs PCNL (which size/site picks which)",
   "id": "surg-urology-7",
   "images": [
    {
     "src": "assets/img/gastrointestinal_kub_staghorn_calculus_01.jpg",
     "caption": "Staghorn calculus on plain KUB radiograph",
     "alt": "Large branching calculus filling the renal pelvis and calyces (staghorn stone) — the type requiring PCNL rather than ESWL",
     "credit": "Nevit Dilmen, Wikimedia Commons, CC BY-SA 3.0"
    }
   ]
  },
  {
   "topic": "Obstructed + INFECTED stone = surgical EMERGENCY → urgent decompression (nephrostomy or stent), NOT lithotripsy/definitive stone Rx",
   "subarea": "Stones & obstruction",
   "trap": "An obstructing stone WITH infection above it (fever, rigors, pyuria, SIRS/sepsis, raised WCC/CRP) is pus under pressure = obstructed/infected pyonephrosis — a true UROLOGICAL EMERGENCY. The kidney can be irreversibly destroyed and patient progress to septic shock within HOURS (mortality 2-9% once urosepsis/shock). Treatment = (1) resuscitate + IV antibiotics + cultures (sepsis pathway), AND (2) URGENT DECOMPRESSION of the collecting system the SAME admission, ideally within hours. Decompression = retrograde JJ ureteric stent OR percutaneous nephrostomy — both considered of equivalent drainage efficacy; choice depends on local expertise, patient stability and anatomy (nephrostomy often preferred if too unstable for theatre/GA or if stent likely to fail). CRITICAL: do NOT attempt to treat/remove the stone itself (no ureteroscopy fragmentation, no ESWL/lithotripsy) during sepsis — manipulating an infected stone showers bacteria/endotoxin and precipitates shock. Drain first; definitive stone treatment is DELAYED until infection cleared (after a full antibiotic course).",
   "whatFirst": "Sepsis Six / resuscitate + IV broad-spectrum antibiotics + cultures, AND call urology for emergency decompression (stent OR nephrostomy) — do NOT wait, do NOT treat the stone.",
   "discriminator": "Plain obstructing stone (no infection) = can manage conservatively/MET. Obstructed + INFECTED (fever, pyuria, SIRS) = emergency decompression. The discriminator is SEPSIS/INFECTION + OBSTRUCTION together. Pyonephrosis (frank pus) and emphysematous pyelonephritis are the extreme ends.",
   "redFlags": "Fever/rigors + obstructing stone, hypotension/tachycardia, oliguria, raised lactate, immunosuppression/diabetes (can mask signs), solitary kidney.",
   "mcqTrap": "Most tempting wrong answer: 'urgent ureteroscopy and stone extraction' or 'ESWL/lithotripsy now'. WRONG — never definitively treat the stone during active infection; you decompress and antibiotic first, treat stone later. Another trap: 'IV antibiotics alone and observe' — antibiotics CANNOT adequately penetrate an obstructed, undrained system → must drain.",
   "cutoffs": [
    "Decompress urgently — same admission, ideally within hours of recognising obstructed+infected",
    "Stent vs nephrostomy = equivalent drainage efficacy; nephrostomy often if too unstable for GA/theatre",
    "Definitive stone Rx DELAYED until infection cleared (full antibiotic course)",
    "Urosepsis/septic shock mortality 2-9%"
   ],
   "mnemonic": "'DRAIN don't treat': Decompress, Resuscitate, Antibiotics, Investigate (cultures), No stone manipulation.",
   "viva": "Examiner classic: 'Febrile patient + obstructing stone — what do you do RIGHT NOW?' (resuscitate + abx + EMERGENCY decompression, NOT stone removal). ISBAR call to on-call urologist/registrar; escalate to ICU if shocked. Consent for nephrostomy/stent emergency procedure.",
   "visualHtml": "<div class='gv-flow'><div class='gv-step'>Obstructing stone + fever/SIRS/pyuria</div><div class='gv-step'>= Obstructed/infected system — EMERGENCY</div><div class='gv-step'>Resuscitate + IV antibiotics + cultures (Sepsis pathway)</div><div class='gv-step'>URGENT decompression: JJ stent OR percutaneous nephrostomy (equivalent)</div><div class='gv-step'>Do NOT treat the stone (no URS / no ESWL) during sepsis</div><div class='gv-step'>Definitive stone Rx AFTER infection cleared</div></div>",
   "tags": [
    "obstructed-infected",
    "pyonephrosis",
    "emergency",
    "nephrostomy",
    "stent",
    "urosepsis",
    "MEDI8403",
    "MEDI8401"
   ],
   "source": "EAU Urolithiasis Guidelines 2025; AUA; eTG (Therapeutic Guidelines, current). Equivalent-efficacy of stent vs nephrostomy and 2-9% urosepsis mortality verified via web 2026-06.",
   "verified": true,
   "title": "Obstructed + INFECTED stone = surgical EMERGENCY…",
   "id": "surg-urology-8"
  },
  {
   "topic": "Renal colic: CT-KUB is the first-line imaging (low-dose, non-contrast) — not USS, not IVP",
   "subarea": "Stones & obstruction",
   "trap": "Non-contrast (low-dose) CT-KUB is the GOLD-STANDARD first investigation for acute flank pain/suspected renal colic in an adult: ~95-97% sensitivity (and ~96-99% specificity), identifies stone size + exact location + degree of obstruction (hydronephrosis) AND finds the dangerous mimics (leaking AAA, appendicitis, ovarian pathology) in one scan. NO contrast needed (stone is the target; contrast obscures it). KUB plain X-ray alone MISSES radiolucent uric-acid stones and small/overlying-bone stones and gives no obstruction info. Order URINE dipstick first (haematuria in ~80-90% but its ABSENCE does NOT exclude a stone — a fully obstructing stone can give a clear dip). bHCG in any woman of reproductive age BEFORE imaging. Use ultrasound first-line only in pregnancy and children (radiation-sparing).",
   "whatFirst": "Analgesia + antiemetic + bHCG (if female) FIRST, then low-dose non-contrast CT-KUB. Do not delay analgesia waiting for the scan.",
   "discriminator": "vs leaking AAA — the great killer mimic in a man >60 with 'first ever renal colic': new flank/back pain, hypotension, pulsatile mass → CT-KUB (non-contrast) still shows the AAA; if AAA suspected get contrast/CT-angio. A first presentation of 'renal colic' over age 60 is AAA until proven otherwise.",
   "redFlags": "Age >60 first presentation (AAA), fever/sepsis (infected obstruction), solitary/transplant kidney, AKI, bilateral obstruction, pregnancy.",
   "mcqTrap": "The tempting wrong answer is 'IV urogram (IVP)' or 'CT WITH contrast'. IVP is obsolete (slow, contrast load, less sensitive); contrast HIDES the calcium stone. The other trap: 'plain KUB X-ray' — misses radiolucent stones and shows no obstruction.",
   "cutoffs": [
    "Low-dose non-contrast CT-KUB sensitivity ~95-97%, specificity ~96-99%",
    "Microscopic haematuria present in ~80-90% — its absence does NOT exclude stone",
    "USS first-line only in pregnancy & children"
   ],
   "mnemonic": "'CT-KUB = Catches The Killer + Knows the Unobstructed-vs-Blocked' (size, site, obstruction, AAA mimic).",
   "viva": "Examiner probes: 'Why not contrast?' (stone is radio-opaque, contrast masks it) and 'A 64yo man, first colic — what must you exclude?' (leaking AAA). ISBAR escalate if haemodynamically unstable.",
   "visualHtml": "<table class='gv-table'><thead><tr><th>Imaging</th><th>Role in renal colic</th></tr></thead><tbody><tr><td>Low-dose non-contrast CT-KUB</td><td>FIRST-LINE adult: size, site, obstruction, mimics</td></tr><tr><td>Ultrasound (KUB)</td><td>Pregnancy & children first-line; hydronephrosis screen</td></tr><tr><td>Plain KUB X-ray</td><td>Only to track a KNOWN radio-opaque stone over time</td></tr><tr><td>CT with contrast / IVP</td><td>NOT first-line — contrast masks calcium stone</td></tr></tbody></table>",
   "tags": [
    "renal-colic",
    "CT-KUB",
    "imaging",
    "MEDI8403",
    "MEDI8401"
   ],
   "source": "RACGP (AFP) renal colic update; eTG (Therapeutic Guidelines, current); EAU Urolithiasis Guidelines 2025. Sensitivity/specificity figures verified via web 2026-06.",
   "verified": true,
   "title": "Renal colic",
   "subtitle": "CT-KUB is the first-line imaging (low-dose, non-contrast) — not USS, not IVP",
   "id": "surg-urology-9",
   "images": [
    {
     "src": "assets/img/gastrointestinal_kub_staghorn_calculus_01.jpg",
     "caption": "Staghorn renal calculus on plain KUB",
     "alt": "Radiopaque staghorn calculus visible on plain KUB radiograph — demonstrating the appearance of a large renal stone",
     "credit": "Nevit Dilmen, Wikimedia Commons, CC BY-SA 3.0"
    }
   ]
  },
  {
   "topic": "Renal colic analgesia: NSAID is FIRST-LINE (superior to opioids) — not morphine first",
   "subarea": "Stones & obstruction",
   "trap": "An NSAID is the FIRST-LINE analgesic for renal colic and is SUPERIOR to opioids: better pain scores, less re-medication, less vomiting (opioids worsen nausea), and it reduces ureteric smooth-muscle/prostaglandin-driven spasm and renal pelvic pressure. Australian practice: parenteral/PR NSAID such as diclofenac (75mg IM, or 100mg PR suppository), indomethacin, or parenteral ketorolac/parecoxib if oral not tolerated. Opioid (e.g. oxycodone orally, or IV fentanyl/morphine titrated) is the ADD-ON / second-line when NSAID is contraindicated or pain not controlled. NSAID contraindicated/caution: AKI or renal impairment (and renal colic itself can cause AKI), active GI bleed, severe heart failure, dehydration, pregnancy (esp. 3rd trimester). Do NOT push IV fluids to 'flush the stone out' — no evidence, and may worsen pain by increasing proximal pressure.",
   "whatFirst": "NSAID first (PR/IM/IV), antiemetic, then opioid as add-on/rescue. Reassess renal function before/with NSAID.",
   "discriminator": "NSAID vs opioid choice: pick opioid first ONLY if NSAID contraindicated (AKI, GI bleed, pregnancy). 'Antispasmodics' (e.g. hyoscine/buscopan) are NOT recommended for ureteric colic.",
   "redFlags": "Pain refractory to adequate analgesia is itself an indication for urological referral/intervention (uncontrolled pain = relative emergency).",
   "mcqTrap": "Most tempting wrong answer: 'IV morphine as first-line analgesia'. Opioids are second-line — NSAIDs win on efficacy AND less nausea. Second trap: 'IV fluid bolus to flush the stone' — not evidence-based.",
   "cutoffs": [
    "NSAID first-line: e.g. diclofenac 75mg IM or 100mg PR, indomethacin, or ketorolac/parecoxib parenterally",
    "Opioid = add-on/second-line or if NSAID contraindicated",
    "NSAID avoid in AKI, GI bleed, severe HF, dehydration, pregnancy (esp 3rd trimester)"
   ],
   "mnemonic": "'NSAID beats Narcotic' — Needs-no-extra (less re-dosing) + No-vomiting.",
   "viva": "Examiner: 'First-line analgesia and why?' (NSAID — superior efficacy + anti-prostaglandin, less nausea) and 'When would you NOT give the NSAID?' (AKI, the colic itself can cause renal impairment).",
   "tags": [
    "renal-colic",
    "analgesia",
    "NSAID",
    "opioid",
    "MEDI8403",
    "MEDI8401"
   ],
   "source": "eTG (Therapeutic Guidelines, current) — analgesia for renal colic; RACGP renal colic update; EAU/NICE (NSAID first-line, antispasmodics not recommended). Verified via web 2026-06.",
   "verified": true,
   "title": "Renal colic analgesia",
   "subtitle": "NSAID is FIRST-LINE (superior to opioids) — not morphine first",
   "id": "surg-urology-10"
  },
  {
   "topic": "Stone size & spontaneous passage — the threshold numbers + when to refer for intervention + tamsulosin (MET)",
   "subarea": "Stones & obstruction",
   "trap": "Spontaneous passage depends mainly on SIZE and SITE. Guideline figures: stones <5mm pass spontaneously in the majority (~68% overall; distal ureteric small stones up to ~71-98%) — manage conservatively (analgesia + watchful waiting, sieve urine) for up to ~4-6 weeks. Stones 5-10mm pass in only ~25-50% (~47%) and often need intervention. Stones >10mm are UNLIKELY to pass and should be referred for definitive treatment (ESWL / ureteroscopy / PCNL for large/renal stones). SITE matters: distal (vesico-ureteric junction) stones pass best (~75-79%); proximal pass less well (~48%). MEDICAL EXPULSIVE THERAPY (MET): tamsulosin (alpha-blocker, 0.4mg daily) — benefit is for DISTAL ureteric stones, and the evidence is strongest for the LARGER passable stones (>5mm, up to ~10mm); little/no added benefit for small ≤5mm stones (those pass anyway). Counsel re postural hypotension/retrograde ejaculation; it is off-label for this use.",
   "whatFirst": "Decide on size+site from CT-KUB: <5mm uncomplicated → conservative + analgesia ± tamsulosin (if distal); 5-10mm → trial of passage/MET vs refer; >10mm → refer for definitive treatment.",
   "discriminator": "Size cut-offs are the discriminator: <5mm = watchful waiting; >10mm = won't pass, intervene. Conservative passage is ONLY for the well, afebrile, normal-renal-function patient with controlled pain — ANY complicating feature (see red flags) overrides size and mandates referral/decompression.",
   "redFlags": "Override 'just wait' if: infection/fever, solitary or transplant kidney, bilateral obstruction, AKI/rising creatinine, uncontrolled pain, or no passage after ~4-6 weeks → urology referral.",
   "mcqTrap": "Most tempting wrong answer: giving tamsulosin to a small <5mm stone and claiming big benefit — MET benefit is for distal stones ~5-10mm, NOT the tiny ones (they pass regardless). Another trap: 'an 8mm stone will pass, just wait' — 5-10mm often needs intervention; and 'watchful waiting' for a febrile patient (that's an emergency, not observation).",
   "cutoffs": [
    "<5mm: ~68% pass spontaneously (distal small stones higher, up to ~71-98%) — conservative",
    "5-10mm: ~25-50% (~47%) pass — often need intervention",
    ">10mm: unlikely to pass — refer for definitive Rx",
    "Watchful-waiting window ~4-6 weeks (if no complication)",
    "Tamsulosin 0.4mg daily (MET) — distal ureteric stones, benefit mainly >5mm"
   ],
   "mnemonic": "'5 and 10': under 5 = let it go; over 10 = intervene; 5-to-10 = trial ± tamsulosin. Tamsulosin helps the BIGGER distal ones.",
   "viva": "Examiner: 'CT shows a 4mm distal ureteric stone, afebrile, pain controlled — plan?' (discharge, analgesia, fluids, sieve urine, ± tamsulosin, safety-net for fever/uncontrolled pain, urology follow-up). Then 'What changes your plan?' (fever, single kidney, AKI → admit/decompress). Consent angle: tamsulosin off-label + side effects.",
   "visualHtml": "<table class='gv-table'><thead><tr><th>Stone size</th><th>Spontaneous passage</th><th>Plan (if uncomplicated)</th></tr></thead><tbody><tr><td><span class='gv-num'>&lt;5mm</span></td><td>High (~68%; distal higher)</td><td>Conservative + analgesia ± tamsulosin (distal)</td></tr><tr><td><span class='gv-num'>5-10mm</span></td><td>~25-50%</td><td>Trial of passage / MET vs refer</td></tr><tr><td><span class='gv-num'>&gt;10mm</span></td><td>Unlikely</td><td>Refer: ESWL / URS / PCNL</td></tr></tbody></table>",
   "tags": [
    "stone-size",
    "spontaneous-passage",
    "tamsulosin",
    "MET",
    "watchful-waiting",
    "MEDI8403",
    "MEDI8401"
   ],
   "source": "EAU Urolithiasis Guidelines 2025; RACGP renal colic update; AUA. Passage rates by size/site and MET-benefit-in-larger-distal-stones verified via web 2026-06.",
   "verified": true,
   "title": "Stone size & spontaneous passage",
   "subtitle": "the threshold numbers + when to refer for intervention + tamsulosin (MET)",
   "id": "surg-urology-11"
  },
  {
   "topic": "Acute vs chronic urinary retention — the two clinical pictures and why the distinction changes everything",
   "subarea": "Retention, haematuria & urological cancers",
   "trap": "The gotcha is PAIN and SPEED, not just inability to void. ACUTE retention = sudden, PAINFUL, often only 400–700 mL, normal renal function, usually a precipitant (post-op, anticholinergic/opioid, constipation, alcohol, UTI, BPH). CHRONIC retention = PAINLESS, large-volume (often >1000–1500 mL, sometimes several litres), develops over months, may have raised creatinine (hydronephrosis) and overflow incontinence. The exam catches you by giving a man with 2.5 L drained who is comfortable and calling it 'acute' — it is acute-on-chronic at best. Chronic high-pressure retention (bilateral hydronephrosis + AKI) is the dangerous one and mandates admission, not discharge with a leg bag.",
   "whatFirst": "Immediate urethral catheter to decompress, measure the RESIDUAL volume drained (this number defines the diagnosis), then send U&E/creatinine + renal tract ultrasound to detect hydronephrosis. Volume drained + creatinine + symptoms = your classification.",
   "discriminator": "Acute = painful, small volume, normal creatinine. Chronic (esp. high-pressure) = painless, huge volume, raised creatinine ± bilateral hydronephrosis. Acute-on-chronic = acutely painful episode on a background of incomplete emptying (large residual + some renal change).",
   "redFlags": "Bilateral hydronephrosis + AKI = high-pressure chronic retention → admit, monitor for post-obstructive diuresis, do NOT discharge. Fever/sepsis with retention = obstructed infected system → emergency drainage + antibiotics.",
   "mcqTrap": "Tempting wrong answer: 'discharge with catheter and outpatient follow-up' for the man who drained 2.8 L with a creatinine of 220. Wrong — high-pressure chronic retention with AKI is admitted for monitored decompression and post-obstructive diuresis.",
   "viva": "Examiner probes: 'What volume did you drain and what was the creatinine?' — they want you to classify acute vs chronic-high-pressure on the spot and justify admit vs discharge.",
   "mnemonic": "Acute = Ay! (painful, small). Chronic = Calm but Creatinine up (painless, large).",
   "source": "Therapeutic Guidelines (eTG, current) — urinary retention; USANZ urology practice (definitions are practice-standard)",
   "tags": [
    "retention",
    "acute",
    "chronic",
    "high-pressure",
    "hydronephrosis"
   ],
   "cutoffs": [
    "Acute retention drained volume typically 400–700 mL",
    "Chronic retention residual commonly >800 mL, often 1000–1500 mL+",
    "High-pressure chronic retention = retention + bilateral hydronephrosis + raised creatinine"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Feature</th><th>Acute</th><th>Chronic (high-pressure)</th></tr></thead><tbody><tr><td>Pain</td><td>Painful</td><td>Painless</td></tr><tr><td>Volume drained</td><td><span class=\"gv-num\">400–700 mL</span></td><td><span class=\"gv-num\">&gt;1000–1500 mL</span></td></tr><tr><td>Creatinine</td><td>Normal</td><td>Raised</td></tr><tr><td>Hydronephrosis</td><td>No</td><td>Bilateral</td></tr><tr><td>Disposition</td><td>Catheter ± TWOC, discharge</td><td>Admit, monitor diuresis</td></tr></tbody></table>",
   "title": "Acute vs chronic urinary retention",
   "subtitle": "the two clinical pictures and why the distinction changes everything",
   "id": "surg-urology-12"
  },
  {
   "topic": "BPH — absolute surgical indications (TURP) you must not 'try medical therapy' on first",
   "subarea": "Retention, haematuria & urological cancers",
   "trap": "BPH is usually managed medically (alpha-blocker e.g. tamsulosin/prazosin ± 5-alpha-reductase inhibitor e.g. finasteride/dutasteride for larger prostates), but there is a defined set of ABSOLUTE/complication indications where surgery (TURP, the benchmark) is the answer and 'optimise medical therapy' is the WRONG choice. Memorise them: Refractory/recurrent acute retention, Recurrent UTIs, Bladder stones, Recurrent gross Haematuria from the prostate, Renal impairment due to obstruction (RUSHR). Also: refractory bothersome LUTS despite maximal medical therapy.",
   "whatFirst": "Confirm BPH-related obstruction (history, DRE, U&E, post-void residual, exclude cancer with PSA/DRE). If any absolute indication present → refer for TURP rather than escalating medical therapy.",
   "discriminator": "BPH-related haematuria/retention vs malignancy: always exclude prostate/bladder cancer (DRE, PSA, cystoscopy if haematuria) before attributing complications to BPH. 5-ARIs both shrink the prostate AND roughly halve PSA — remember to double a PSA in a man on finasteride/dutasteride when interpreting it.",
   "redFlags": "Renal impairment from chronic retention, recurrent urosepsis, bladder calculi, recurrent clot retention → surgical, not medical, management.",
   "mcqTrap": "Tempting wrong answer: 'add a 5-alpha-reductase inhibitor and review' for a man with BPH causing recurrent UTIs, bladder stones and a rising creatinine. Wrong — these are absolute surgical indications (TURP).",
   "viva": "Examiner probes: 'List the absolute indications for surgery in BPH' (RUSHR) and consent for TURP — name retrograde ejaculation, TUR syndrome (hyponatraemia with monopolar), bleeding, incontinence, recurrence.",
   "mnemonic": "RUSHR to surgery: Retention (refractory/recurrent), UTIs (recurrent), Stones (bladder), Haematuria (recurrent gross), Renal impairment.",
   "source": "Therapeutic Guidelines (eTG, current) urology — BPH/LUTS; absolute TURP indications corroborated by AUA BPH surgical guideline & CUA MLUTS/BPH guideline (practice-standard list)",
   "tags": [
    "BPH",
    "TURP",
    "surgical-indications",
    "retention",
    "TUR-syndrome",
    "5-ARI-PSA"
   ],
   "cutoffs": [
    "Absolute surgical indications = RUSHR (Retention, UTIs, Stones, Haematuria, Renal impairment)",
    "5-alpha-reductase inhibitors halve PSA — double the value when interpreting",
    "TURP (monopolar/bipolar) is the benchmark surgical procedure for BPH (prostate ~30–80 mL)"
   ],
   "verified": true,
   "title": "BPH",
   "subtitle": "absolute surgical indications (TURP) you must not 'try medical therapy' on first",
   "id": "surg-urology-13"
  },
  {
   "topic": "Decompression (catheter-related) haematuria after rapid bladder emptying",
   "subarea": "Retention, haematuria & urological cancers",
   "trap": "After catheterising a hugely distended chronically retained bladder, blood can appear in the bag (decompression/ex-vacuo haematuria) from rupture of dilated submucosal vessels as the over-stretched wall collapses. The classic teaching is 'clamp and drain gradually to prevent this' — the gotcha is that EVIDENCE does NOT support gradual decompression preventing haematuria/POD/hypotension, so do NOT clamp a patient in painful retention. Drain fully; manage haematuria if it happens.",
   "whatFirst": "Decompress fully (don't clamp). If frank haematuria develops, upsize to a 3-way catheter and start continuous bladder irrigation to prevent clot retention; check FBC/coags.",
   "discriminator": "Decompression haematuria = appears immediately on emptying a large chronic retention, usually transient and self-limiting. Distinguish from clot retention (catheter blocked, recurrent pain, bladder re-distends) and from a bleeding malignancy/visible haematuria that pre-dated the catheter.",
   "redFlags": "Heavy bleeding with clot retention → 3-way catheter + irrigation, urology review. Persistent/recurrent visible haematuria after the episode settles still mandates the visible-haematuria cancer workup.",
   "mcqTrap": "Tempting wrong answer: 'clamp the catheter and release 100 mL every 15 min to prevent haematuria.' Wrong — gradual decompression is not evidence-based and risks leaving a septic/obstructed patient under-drained; drain completely.",
   "viva": "Examiner probes: 'Do you decompress slowly?' — they want you to know gradual decompression is a myth and to manage bleeding reactively (3-way + irrigation) rather than prophylactically clamping.",
   "source": "StatPearls / urology literature: no high-quality evidence gradual decompression reduces haematuria/POD/hypotension (deliberately corrected dogma); not a single Australian-specific directive",
   "tags": [
    "decompression-haematuria",
    "catheter",
    "clot-retention",
    "irrigation",
    "myth-buster"
   ],
   "cutoffs": [
    "No evidence-based 'volume to clamp at' — gradual decompression is not supported",
    "Frank haematuria/clots → 3-way catheter + continuous bladder irrigation"
   ],
   "verified": false,
   "title": "Decompression (catheter-related) haematuria after rapid bladder emptying",
   "id": "surg-urology-14"
  },
  {
   "topic": "Painless visible (macroscopic) haematuria → bladder cancer pathway",
   "subarea": "Retention, haematuria & urological cancers",
   "trap": "Painless VISIBLE haematuria is bladder/urothelial cancer until proven otherwise, even if it stops, even if there is a UTI, even if the patient is anticoagulated. The gotcha: a single episode of visible haematuria warrants full urological referral and workup; do NOT attribute it to anticoagulation or a treated UTI and stop there. The workup is CYSTOSCOPY (gold standard for the bladder) PLUS upper-tract imaging (CT urogram in higher-risk patients; ultrasound has poor sensitivity for bladder lesions so is used in young/low-risk/radiation-sensitive only and is combined with cystoscopy). Cytology is adjunct, not a rule-out.",
   "whatFirst": "Refer ALL visible haematuria to urology regardless of age. Arrange flexible cystoscopy + upper-tract imaging (CT urogram). Send urine MCS to exclude infection and urine cytology as an adjunct — but a negative cytology does NOT cancel cystoscopy.",
   "discriminator": "Visible (macroscopic) haematuria = mandatory urology referral + cystoscopy + imaging regardless of risk factors. Persistent non-visible (microscopic) haematuria = investigate too but lower threshold/risk-stratified. Distinguish true haematuria from pigmenturia (beetroot, rifampicin, myoglobin, dipstick-positive but microscopy shows no RBCs) and from menstrual contamination.",
   "redFlags": "Visible haematuria + smoking/occupational amine exposure/age >40 = high pre-test probability → CT urogram + cystoscopy, do not delay. Clot retention = urological emergency (3-way catheter).",
   "mcqTrap": "Tempting wrong answer: 'treat the UTI / stop the warfarin and review in 6 weeks.' Wrong — anticoagulants unmask, they don't cause, and a UTI does not excuse a man with painless visible haematuria from cystoscopy.",
   "viva": "Examiner probes: 'What is the single most important investigation?' — answer cystoscopy (gold standard for bladder); then justify upper-tract imaging choice (CT urogram vs US) by risk.",
   "mnemonic": "Visible haematuria = 'See it, scope it' (cystoscopy) + image the upper tracts.",
   "source": "USANZ practice + WA Diagnostic Imaging Pathways (imagingpathways.health.wa.gov.au); Medicine Today (Dec 2025) microscopic haematuria GP guide — refer ALL visible haematuria; CT urogram + cystoscopy for >40/infection-excluded",
   "tags": [
    "visible-haematuria",
    "bladder-cancer",
    "cystoscopy",
    "CT-urogram",
    "urothelial"
   ],
   "cutoffs": [
    "Any single episode of VISIBLE haematuria → urology referral + cystoscopy + upper-tract imaging",
    "Higher risk (smoker, age >40, occupational amines) → CT urogram + cystoscopy",
    "Ultrasound has poor sensitivity for bladder lesions — combined with cystoscopy in low-risk only"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Painless VISIBLE haematuria</div><div class=\"gv-step\">Urine MCS (exclude UTI) + cytology (adjunct)</div><div class=\"gv-step\">Flexible cystoscopy (bladder, GOLD standard)</div><div class=\"gv-step\">Upper-tract imaging: CT urogram (high-risk) or US (young/low-risk)</div></div>",
   "title": "Painless visible (macroscopic) haematuria → bladder cancer pathway",
   "id": "surg-urology-15"
  },
  {
   "topic": "Post-obstructive diuresis (POD) after relieving chronic high-pressure retention",
   "subarea": "Retention, haematuria & urological cancers",
   "trap": "After draining a high-pressure chronically obstructed bladder, the kidneys dump huge volumes — this is mostly a physiological off-loading of retained salt/water/urea, but a minority become PATHOLOGICAL and cause hypovolaemia, hypotension, electrolyte derangement and worsening AKI. The gotcha: do NOT reflexively match urine output mL-for-mL with IV fluid — that perpetuates the diuresis. Replace only when output is genuinely excessive AND the patient shows haemodynamic/biochemical compromise.",
   "whatFirst": "Monitor hourly urine output, daily weights, postural BP, and serial U&E after decompression. Define POD (>200 mL/hr for ≥2 consecutive hours, or >3000 mL/24h), then assess whether the patient is actually compensating or decompensating before giving fluid.",
   "discriminator": "Physiological POD = patient stable, tolerating oral intake, output settles within 24–48h — let it self-limit. Pathological POD = ongoing >200 mL/hr with rising creatinine, hypotension, postural drop, weight loss — needs IV replacement (replace a fraction of output, conventionally not exceeding ~2/3) and electrolyte correction.",
   "redFlags": "Hypotension, postural drop, rising creatinine despite relief of obstruction, hyponatraemia/hypokalaemia → escalate, IV fluids, monitor closely; can be life-threatening if missed.",
   "mcqTrap": "Tempting wrong answer: 'replace urine output 1:1 with IV normal saline' — wrong, this drives ongoing diuresis. Correct approach is monitored partial replacement (replace only a fraction, not 1:1, conventionally up to ~2/3 of output) for confirmed pathological POD with compromise; allow physiological diuresis to self-limit.",
   "viva": "Examiner probes: 'How would you fluid-manage this patient after draining 3 litres?' — they want you to NOT give blanket 1:1 replacement and to name the >200 mL/hr threshold + monitoring plan.",
   "mnemonic": "POD = 200 / 2 / 3000 (>200 mL/hr for ≥2 h, or >3000 mL/24h).",
   "source": "Therapeutic Guidelines (eTG, current) / standard urology practice; POD thresholds (>200 mL/hr for ≥2h or >3000 mL/24h) per StatPearls Postobstructive Diuresis & Urology News review",
   "tags": [
    "post-obstructive-diuresis",
    "chronic-retention",
    "AKI",
    "fluids"
   ],
   "cutoffs": [
    ">200 mL/hr for ≥2 consecutive hours = POD",
    ">3000 mL in 24 hours = alternative POD definition",
    "If pathological, replace only a fraction of excess output (conventionally ≤2/3), never 1:1"
   ],
   "verified": true,
   "title": "Post-obstructive diuresis (POD) after relieving chronic high-pressure retention",
   "id": "surg-urology-16"
  },
  {
   "topic": "Prostate cancer red flags + current Australian PSA testing thresholds (2025 guideline update)",
   "subarea": "Retention, haematuria & urological cancers",
   "trap": "Two gotchas. (1) Red flags = a HARD/NODULAR/asymmetric prostate on DRE if performed, bone pain/pathological fracture, unexplained anaemia or weight loss, lymphoedema — these warrant referral regardless of PSA, because high-grade cancers can have a near-normal PSA. (2) Australian PSA practice changed in 2025: offer a BASELINE PSA at age 40 to interested men, two-yearly testing 50–69, and start at 40 for high-risk (strong family history / BRCA2 / high-risk ancestry). Two further 2025 shifts: routine DRE in primary care is NO LONGER recommended as a screening test, and the pathway is MRI BEFORE biopsy. The classic trap is quoting the old 2016 'don't test over 70 / start at 50 / DRE everyone' rules.",
   "whatFirst": "Offer age-appropriate PSA with shared decision-making (DRE is no longer a routine primary-care screening test under the 2025 guidelines, though it is used in assessing symptomatic men and after abnormal PSA). Abnormal DRE OR persistently/age-inappropriately raised PSA → refer to urology; current pathway uses multiparametric MRI BEFORE biopsy (not biopsy-first).",
   "discriminator": "BPH vs cancer on DRE: BPH = smooth, rubbery, symmetrically enlarged; cancer = hard, irregular, nodular, loss of median sulcus. Raised PSA is non-specific (UTI, retention, recent DRE/ejaculation, prostatitis all elevate it) — repeat before acting.",
   "redFlags": "Hard nodular prostate, bone pain, pathological fracture, cord compression, unexplained weight loss/anaemia → urgent referral even with 'normal' PSA.",
   "mcqTrap": "Tempting wrong answer: 'PSA testing is not recommended over age 70 / only start at 50 / do a routine DRE on every man.' Wrong under the 2025 Australian guidance — baseline at 40, individualised testing (including selected men >70 by life expectancy), start at 40 if high risk, and NO routine screening DRE in primary care.",
   "viva": "Examiner probes: 'Would you offer this 42-year-old with a brother who had prostate cancer a PSA?' — yes, high-risk men start at 40; and they probe MRI-before-biopsy as the modern pathway and that routine DRE is no longer the screening test.",
   "mnemonic": "DRE cancer = Hard, Nodular, No sulcus. PSA ages (2025): 40 baseline, 40 if high-risk, 50–69 routine 2-yearly. MRI before biopsy.",
   "source": "2025 Clinical Guidelines for the Early Detection of Prostate Cancer in Australia (PCFA, with USANZ; supersedes 2016) — baseline PSA at 40, 2-yearly 50–69, high-risk from 40, NO routine primary-care DRE, MRI before biopsy",
   "tags": [
    "prostate-cancer",
    "PSA",
    "DRE",
    "screening",
    "MRI-pathway"
   ],
   "cutoffs": [
    "Baseline PSA offered at age 40 to interested men",
    "High-risk (strong family history / BRCA2 / high-risk ancestry) start at 40",
    "Two-yearly PSA for average-risk men aged 50–69; high-risk interval driven by PSA (≥2.5 ng/mL → annual, <2.5 → 2-yearly)",
    "Routine DRE NO LONGER recommended as a primary-care screening test (2025)",
    "Pathway: multiparametric MRI BEFORE biopsy, not biopsy-first"
   ],
   "verified": false,
   "title": "Prostate cancer red flags + current Australian…",
   "id": "surg-urology-17"
  },
  {
   "topic": "Renal cell carcinoma red flags — the classic triad is a LATE/rare finding, most are incidental",
   "subarea": "Retention, haematuria & urological cancers",
   "trap": "The classic triad (flank pain + haematuria + palpable flank mass) occurs in <10% and signals ADVANCED disease — if an MCQ describes the full triad, think 'late presentation', not 'typical'. The gotcha: most RCC today is found INCIDENTALLY on imaging done for something else (~25–30% asymptomatic at diagnosis). Other catch-points: a NEW LEFT-SIDED VARICOCELE that does not decompress when lying down (left gonadal vein drains into left renal vein → obstructed by tumour thrombus), and paraneoplastic syndromes (hypercalcaemia, polycythaemia from EPO, hypertension, pyrexia of unknown origin).",
   "whatFirst": "Triple-phase (contrast) CT of abdomen/pelvis to characterise the renal mass and assess vena caval/renal vein tumour thrombus and staging; refer to urology. Don't biopsy most solid enhancing renal masses first-line — image and refer for surgery.",
   "discriminator": "RCC mass vs simple cyst: an enhancing solid mass on contrast CT is malignant until proven otherwise; a simple Bosniak I cyst is benign. New non-reducible left varicocele = think renal vein obstruction by RCC, not idiopathic varicocele.",
   "redFlags": "Non-reducing/right-sided/new varicocele, paraneoplastic hypercalcaemia or polycythaemia, IVC tumour thrombus, bone pain → urgent urology/oncology referral.",
   "mcqTrap": "Tempting wrong answer: 'the absence of the classic triad makes RCC unlikely.' Wrong — the triad is present in <10% and is a feature of advanced disease; most RCC is asymptomatic/incidental.",
   "viva": "Examiner probes: 'Why does a new left varicocele worry you?' — left gonadal vein → left renal vein; tumour thrombus obstructs it. They also probe contrast CT (not biopsy) as the key investigation.",
   "mnemonic": "RCC triad = rare & late (<10%). New left varicocele lying down? Look at the left renal vein.",
   "source": "USANZ / standard Australian urology practice; presentation statistics per Medscape RCC clinical & peer-reviewed reviews (triad ~10% = advanced; ~25–30% incidental/asymptomatic)",
   "tags": [
    "renal-cell-carcinoma",
    "varicocele",
    "paraneoplastic",
    "incidental",
    "tumour-thrombus"
   ],
   "cutoffs": [
    "Classic triad present in <10% of RCC and indicates advanced disease",
    "Majority of RCC diagnosed incidentally on imaging (~25–30% asymptomatic at diagnosis)",
    "New/non-reducible (esp. left) varicocele → suspect renal vein tumour thrombus"
   ],
   "verified": true,
   "title": "Renal cell carcinoma red flags",
   "subtitle": "the classic triad is a LATE/rare finding, most are incidental",
   "id": "surg-urology-18",
   "images": [
    {
     "src": "assets/img/renal_ct_renal_cell_carcinoma_fresh.jpg",
     "caption": "Renal cell carcinoma - CT showing heterogeneous enhancing renal mass",
     "alt": "Contrast-enhanced CT demonstrating a large heterogeneous/cystic enhancing mass arising from the kidney — classic incidental renal cell carcinoma appearance",
     "credit": "Hellerhoff, Wikimedia Commons, CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "Testicular cancer red flags + the markers-BEFORE-orchidectomy rule",
   "subarea": "Retention, haematuria & urological cancers",
   "trap": "Red flag = a PAINLESS, FIRM, intratesticular lump in a young man (peak 15–35) that does not transilluminate. The single biggest exam gotchas: (1) send serum tumour markers (AFP, beta-hCG, LDH) BEFORE orchidectomy — they are diagnostic, prognostic and the baseline for monitoring; (2) do NOT biopsy the testis trans-scrotally (seeds tumour / alters lymphatic drainage) — the diagnostic operation is a radical INGUINAL orchidectomy; (3) marker pattern discriminates type: a RAISED AFP means it is NOT a pure seminoma (pure seminoma does not raise AFP — a true elevation reclassifies it as non-seminomatous/mixed).",
   "whatFirst": "Scrotal ultrasound to confirm intratesticular solid mass, THEN serum AFP/beta-hCG/LDH BEFORE any surgery, then radical inguinal orchidectomy. Staging CT chest/abdomen/pelvis.",
   "discriminator": "Cancer vs benign scrotal lump: cancer = firm, intratesticular, painless, non-transilluminating. Hydrocele transilluminates; epididymal cyst is separate/superior to testis; varicocele = 'bag of worms', reducible. Pure seminoma = AFP normal; raised AFP ⇒ non-seminomatous (or mixed).",
   "redFlags": "Painless firm testicular mass = urgent referral; back pain/abdominal mass (para-aortic nodes), gynaecomastia (hCG), respiratory symptoms (lung mets) → urgent oncology.",
   "mcqTrap": "Tempting wrong answer: 'perform a trans-scrotal needle biopsy to confirm the diagnosis.' Wrong and dangerous — never biopsy through the scrotum; do markers then radical INGUINAL orchidectomy.",
   "viva": "Examiner probes: 'What do you do BEFORE the orchidectomy?' — send AFP/beta-hCG/LDH; and 'why not a scrotal biopsy?' — seeding/altered lymphatic drainage.",
   "mnemonic": "Markers before metal (operate). AFP up = Absolutely not Pure seminoma.",
   "source": "USANZ / standard Australian urology practice; marker behaviour (AFP not raised in pure seminoma — elevation reclassifies as NSGCT; markers pre-orchidectomy) per EAU & AUA testicular cancer guidelines",
   "tags": [
    "testicular-cancer",
    "tumour-markers",
    "AFP",
    "beta-hCG",
    "inguinal-orchidectomy",
    "seminoma"
   ],
   "cutoffs": [
    "Peak incidence age 15–35",
    "Markers AFP/beta-hCG/LDH BEFORE orchidectomy",
    "Radical INGUINAL orchidectomy — never trans-scrotal biopsy",
    "Raised AFP reclassifies a tumour as non-seminoma (pure seminoma does not raise AFP)"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Marker</th><th>Seminoma</th><th>NSGCT</th></tr></thead><tbody><tr><td>AFP</td><td>Not raised</td><td>May be raised</td></tr><tr><td>beta-hCG</td><td>Can be mildly raised</td><td>Often raised</td></tr><tr><td>LDH</td><td>Tumour bulk marker</td><td>Tumour bulk marker</td></tr></tbody></table>",
   "title": "Testicular cancer red flags + the markers-BEFORE-orchidectomy rule",
   "id": "surg-urology-19"
  }
 ]
}
);
