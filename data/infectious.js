window.GOTCHA = window.GOTCHA || { modules: [] };
window.GOTCHA.modules.push(
{
 "id": "infectious",
 "name": "Infectious Diseases & Sepsis",
 "category": "Medicine",
 "blurb": "Written-exam + VIVA. Sepsis recognition, empirical antibiotics, source control and the returned traveller.",
 "cards": [
  {
   "topic": "Antibiotics within 1 hour (shock) vs 3 hours (no shock) — and cultures FIRST",
   "subarea": "Sepsis & antimicrobial principles",
   "trap": "- **'Within 1 hour'** is NOT universal in the current Australian standard\n- **1-hour target** applies to: septic shock OR sepsis with organ dysfunction\n- Suspected sepsis **without shock**: Sepsis Clinical Care Standard allows **up to 3 hours** from initial clinical review (to rapidly investigate alternative diagnoses first)\n- **Blood cultures (×2 sets)** go BEFORE antibiotics — but only if they do not delay the antibiotic\n- **Never hold antibiotics** waiting for cultures in shock",
   "whatFirst": "- **Two sets of blood cultures** → then empiric IV antibiotics\n- In **shock**: antibiotics within **1 hour**, do not wait for any investigation",
   "discriminator": "- **Septic shock/organ dysfunction** → antibiotics within **1 hour**\n- **Suspected sepsis without shock** → as soon as possible, no later than **3 hours** from initial clinical review\n- The UK Sepsis Six's blanket '1 hour for all' is **NOT** the current Australian nuance",
   "redFlags": "- If obtaining cultures or imaging would push antibiotics past the target in a **shocked patient** — give **antibiotics first**",
   "mcqTrap": "- Trap 1: 'Give antibiotics immediately **before** taking blood cultures' — **WRONG**\n- Trap 2: 'Delay antibiotics until **cultures are back**' — **WRONG**\n- Cultures first **IF** they do not delay; never wait for the result",
   "mnemonic": "Culture, then cover — shock = 1 hour, no-shock = up to 3.",
   "viva": "- Out loud: 'I'd take **two sets of blood cultures**, then give empiric IV antibiotics — within **1 hour** because he's in shock — without waiting for the lactate or imaging'\n- Examiner probes: would you ever delay antibiotics for the LP/CT? In shock, **no**",
   "source": "ACSQHC Sepsis Clinical Care Standard 2022 (Quality statement 3 – Management of antimicrobial therapy); Surviving Sepsis Campaign 2026; eTG Antibiotic (current)",
   "tags": [
    "antibiotics",
    "timing",
    "blood cultures",
    "septic shock"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Scenario</th><th>Antibiotic target</th></tr><tr><td>Septic SHOCK / organ dysfunction</td><td>Within <span class=\"gv-num\">1 hour</span></td></tr><tr><td>Suspected sepsis WITHOUT shock</td><td>Within <span class=\"gv-num\">3 hours</span> of initial review</td></tr><tr><td>Blood cultures</td><td>×2 sets BEFORE antibiotics (if no delay)</td></tr></table>",
   "title": "Antibiotics within 1 hour (shock) vs 3 hours (no shock)",
   "subtitle": "and cultures FIRST",
   "id": "infectious-1"
  },
  {
   "topic": "Antimicrobial stewardship — review at 48 h, de-escalate, duration, and the IV-to-oral switch",
   "subarea": "Sepsis & antimicrobial principles",
   "trap": "- Empiric broad-spectrum cover is started fast, but stewardship demands a formal **antimicrobial review at 48–72 hours**\n- At review: **de-escalate** to the narrowest agent per culture/susceptibility\n- Stop unnecessary drugs (e.g. cease the single **gentamicin** dose, stop anaerobic cover if not needed)\n- Set a **STOP/REVIEW date**\n- Switch **IV→oral** once criteria met (improving, afebrile ~24–48 h, tolerating oral, source controlled)\n- Exam trap: continuing broad empirical therapy for a fixed long course 'to be safe' — current Australian practice favours **shorter courses** and active de-escalation",
   "whatFirst": "- Document **indication + planned duration/review date** at the time of prescribing\n- At **48–72 h** review cultures and de-escalate or stop",
   "discriminator": "- **Day 0** = broad + fast\n- **Day 2–3** = narrow per culture, switch IV→oral, set stop date\n- Persisting broad-spectrum without review = **stewardship failure**, not caution",
   "redFlags": "- No clinical improvement at **48–72 h** → reconsider **source control** (drainage/imaging), resistant organism, or wrong diagnosis\n- Broadening **blindly** is wrong without reassessing source",
   "mcqTrap": "- Trap: 'Continue empiric **meropenem** for the full course because the patient is septic' — **WRONG**\n- Steward's answer: review at **48–72 h**, de-escalate to a **narrow agent** on susceptibilities, switch to oral",
   "mnemonic": "Start smart, then FOCUS: 48-h review → de-escalate, IV→oral, set a stop date.",
   "viva": "- Out loud: 'I started broad empirically; at **48 hours** I'd review the cultures, de-escalate to a targeted narrow-spectrum agent, switch to **oral** once stable, and set a **stop date** — and if he's not improving I'd look for an undrained source'\n- Examiner probes de-escalation logic and source control",
   "source": "ACSQHC Antimicrobial Stewardship Clinical Care Standard; eTG Antibiotic — Principles of antimicrobial use (current); AURA national AMR surveillance reports",
   "tags": [
    "stewardship",
    "de-escalation",
    "review",
    "IV to oral"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Day 0: broad empiric cover + document indication & review date</div><div class=\"gv-step\">48–72 h: review cultures → de-escalate to narrowest agent</div><div class=\"gv-step\">Switch IV→oral when stable; set STOP date; reassess source if not improving</div></div>",
   "title": "Antimicrobial stewardship",
   "subtitle": "review at 48 h, de-escalate, duration, and the IV-to-oral switch",
   "id": "infectious-2"
  },
  {
   "topic": "Empirical antibiotics in PENICILLIN ALLERGY — non-severe vs immediate/severe substitutions",
   "subarea": "Sepsis & antimicrobial principles",
   "trap": "- The branch point is whether the reaction was **immediate/severe hypersensitivity** (anaphylaxis, angioedema, SCAR) vs a **non-severe** history\n- **Non-severe** penicillin allergy → **cephalosporins** (e.g. ceftriaxone, cefazolin) are still SAFE — cross-reactivity with modern, dissimilar-side-chain cephalosporins is low\n- **Immediate/severe** reactions mandate avoiding all beta-lactams:\n  - Unknown source → ciprofloxacin/moxifloxacin + vancomycin ± aztreonam\n  - GI/biliary → metronidazole + ciprofloxacin/gentamicin\n  - Skin → clindamycin or vancomycin\n- Classic error: giving a non-beta-lactam (cipro/clindamycin) to someone whose 'allergy' was just a rash — denying them **better, narrower beta-lactam therapy**",
   "whatFirst": "- Take an **allergy history FIRST**: severe/immediate vs non-severe → this decides whether **cephalosporins are allowed**",
   "discriminator": "- **Non-severe** (rash, GI upset, unknown) → **cephalosporins generally fine**\n- **Immediate** (anaphylaxis/angioedema) or **SCAR** (SJS/TEN/DRESS) → avoid ALL beta-lactams incl. cephalosporins\n- **Aztreonam** is the safer Gram-negative beta-lactam option in true penicillin anaphylaxis",
   "redFlags": "- History of **anaphylaxis, angioedema, or SCAR** (SJS/TEN/DRESS) → never re-challenge\n- Use a **non-beta-lactam regimen** and seek **ID advice**",
   "mcqTrap": "- Trap 1: 'Patient had a childhood rash on amoxicillin → avoid all cephalosporins and give ciprofloxacin' — **WRONG**; a non-severe history still allows **cephalosporins**\n- Trap 2 (opposite): giving a **cephalosporin** in documented **penicillin anaphylaxis**",
   "mnemonic": "Ask 'how bad?': non-severe = cephalosporins OK; anaphylaxis/SCAR = no beta-lactams (aztreonam/cipro/vanc).",
   "viva": "- Out loud: 'I'd clarify the reaction — a **non-severe rash** still lets me use a cephalosporin, but for documented **anaphylaxis** I'd switch to a non-beta-lactam regimen and involve ID'\n- Examiner probes the cross-reactivity figure and what counts as 'severe'",
   "source": "Therapeutic Guidelines: Antibiotic (eTG, current); ASCIA penicillin allergy guidance; NSW LHD adult sepsis IV antibiotic guidelines",
   "tags": [
    "penicillin allergy",
    "cephalosporin cross-reactivity",
    "empirical",
    "ASCIA"
   ],
   "verified": false,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Allergy type</th><th>Empiric approach</th></tr><tr><td>Non-severe (rash, GI, unknown)</td><td>Cephalosporins generally SAFE (low, side-chain-dependent cross-react)</td></tr><tr><td>Immediate (anaphylaxis/angioedema)</td><td>No beta-lactams: cipro/moxi + vancomycin ± aztreonam</td></tr><tr><td>SCAR (SJS/TEN/DRESS)</td><td>Avoid ALL beta-lactams; non-beta-lactam + ID advice</td></tr></table>",
   "title": "Empirical antibiotics in PENICILLIN ALLERGY",
   "subtitle": "non-severe vs immediate/severe substitutions",
   "id": "infectious-3"
  },
  {
   "topic": "Empirical eTG antibiotic selection BY SOURCE — the source-specific cover you must memorise",
   "subarea": "Sepsis & antimicrobial principles",
   "trap": "- eTG empiric choice is **source-driven**, not one-size-fits-all\n- Typical Australian regimens (no penicillin allergy):\n  - **Unknown source/community septic shock** → ceftriaxone + gentamicin (single dose)\n  - **GI/biliary** → ampicillin + gentamicin + metronidazole\n  - **Skin/cellulitis or surgical site** → flucloxacillin (add vancomycin if MRSA risk)\n  - **Urinary** → gentamicin ± ampicillin\n- Most-missed point: **gentamicin is given as a SINGLE empiric dose** (weight-based) — not a regular q8h course — and reviewed at 48 h\n- Add **anaerobic cover** (metronidazole) only for GI/biliary/pelvic sources",
   "whatFirst": "- Identify the **likely source** from history/exam → pick the **eTG source-specific regimen**\n- Give gentamicin as a **single weight-based dose** and reassess at 48 h",
   "discriminator": "- **Skin/SSTI** → antistaphylococcal (**flucloxacillin**), no Gram-negative needed unless septic\n- **Urinary/biliary/GI** → Gram-negative ± anaerobe cover (**gentamicin ± metronidazole**)\n- **Unknown source** → broad cover (**ceftriaxone + gentamicin**)",
   "redFlags": "- **MRSA risk** or known colonisation → add **vancomycin**\n- Significant **renal impairment** → gentamicin caution; substitute as per eTG",
   "mcqTrap": "- Trap 1: 'Give **piperacillin-tazobactam** to everyone' — **WRONG**\n- Trap 2: 'Add **metronidazole** for a urinary/skin source' — **WRONG**; anaerobic cover is for **GI/biliary/pelvic** sources, not cystitis or cellulitis",
   "mnemonic": "Source picks the drug: Skin=fluclox, Gut/biliary=amp+gent+metro, Urine=gent, Unknown=ceftriaxone+gent.",
   "viva": "- Out loud: 'The likely source is biliary, so per eTG I'd give **ampicillin**, a **single dose of gentamicin** and **metronidazole**, and review at 48 hours when cultures return'\n- Examiner probes WHY **anaerobic cover** here but not in a UTI",
   "source": "Therapeutic Guidelines: Antibiotic (eTG, current) — sepsis/septic shock; corroborated by NSW LHD adult sepsis IV antibiotic guidelines",
   "tags": [
    "empirical antibiotics",
    "eTG",
    "source control",
    "gentamicin"
   ],
   "verified": false,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Source</th><th>Empiric (no pen allergy)</th></tr><tr><td>Unknown / community shock</td><td>ceftriaxone + gentamicin single dose</td></tr><tr><td>GI / biliary</td><td>ampicillin + gentamicin + metronidazole</td></tr><tr><td>Urinary</td><td>gentamicin single dose (± ampicillin)</td></tr><tr><td>Skin / surgical site</td><td>flucloxacillin (+ vancomycin if MRSA risk)</td></tr></table>",
   "title": "Empirical eTG antibiotic selection BY SOURCE",
   "subtitle": "the source-specific cover you must memorise",
   "id": "infectious-4"
  },
  {
   "topic": "Fluid resuscitation — the volume, fluid choice, and when to STOP",
   "subarea": "Sepsis & antimicrobial principles",
   "trap": "- Give a **weight-based crystalloid challenge** and **reassess after each bolus** — do not flog fluids into a non-responder\n- **Crystalloid** (balanced or 0.9% saline) is first-line\n- **Albumin** is second-line, NOT first\n- **Starches** are contraindicated\n- **STOP/withhold** further boluses if signs of **pulmonary oedema**\n- If still hypotensive after fluids → start **vasopressors (noradrenaline)** to a target **MAP ≥65 mmHg** — do NOT keep giving fluid\n- Note: the **30 mL/kg** figure is the US Surviving Sepsis number; Australian pathways frame resuscitation as weight-based crystalloid challenges with reassessment, and current guidance increasingly favours a **more restrictive, reassess-driven approach**",
   "whatFirst": "- **Crystalloid challenge STAT** → reassess (BP, perfusion, lactate, overload) → repeat if responding and no oedema\n- If still hypotensive → start **noradrenaline** targeting **MAP ≥65**",
   "discriminator": "- **Reassess after EACH bolus**\n- Failure to respond to repeated fluid → **vasopressors**, not more fluid\n- **MAP target ≥65 mmHg**\n- Avoid **starches**; albumin is **second-line**, not first",
   "redFlags": "- **Pulmonary oedema/rising O2 needs** after fluid → **stop boluses**\n- Persistent **MAP <65** after fluids → **noradrenaline** + ICU",
   "mcqTrap": "- Trap 1: 'Continue repeated large fluid boluses despite **no BP response**' — **WRONG**; after fluids fail, the answer is **vasopressors and ICU referral**\n- Trap 2: choosing **albumin or a starch** as first-line resuscitation fluid",
   "mnemonic": "Bolus, reassess, then noradren: crystalloid challenges, then a pressor to MAP ≥65.",
   "viva": "- Out loud: 'I'll give a **weight-based crystalloid challenge** and reassess; if she doesn't respond I won't keep giving fluid — I'll start **noradrenaline** to a MAP of at least **65** and call ICU'\n- Examiner probes overload signs and the **pressor trigger**",
   "source": "NSW CEC Adult Sepsis Pathway 2024 (Resuscitation guidance); Surviving Sepsis Campaign 2026",
   "tags": [
    "fluids",
    "resuscitation",
    "vasopressors",
    "MAP"
   ],
   "verified": false,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Crystalloid challenge STAT → reassess</div><div class=\"gv-step\">Responding & no oedema → repeat; oedema → stop boluses</div><div class=\"gv-step\">Still hypotensive → noradrenaline to MAP ≥65 mmHg + ICU</div></div>",
   "title": "Fluid resuscitation",
   "subtitle": "the volume, fluid choice, and when to STOP",
   "id": "infectious-5"
  },
  {
   "topic": "Gentamicin in sepsis — the dose, the single-dose rule, and the renal/duration gotcha",
   "subarea": "Sepsis & antimicrobial principles",
   "trap": "- Empiric gentamicin in Australian sepsis is dosed by **ideal/adjusted body weight**, with a higher mg/kg for **severe sepsis/septic shock**\n- Given as a **SINGLE empiric dose**; whether a 2nd/3rd dose follows is decided by **renal function and levels**\n- Empiric aminoglycoside should generally not exceed **~48 hours (or ~3 days short-course)** without clear indication and monitoring\n- Gotcha 1: students wrongly **withhold** gentamicin in mild renal impairment — one empiric dose is usually still **safe and indicated** for Gram-negative cover in shock\n- Gotcha 2 (opposite): continuing it as a **regular standing course**",
   "whatFirst": "- Calculate dose on **ideal body weight**\n- Give the **severe-sepsis dose** as a **single empiric dose**\n- Then reassess **renal function and levels** before any further dose",
   "discriminator": "- **Single empiric dose** = generally safe even with mild renal impairment; needs **no pre-emptive level**\n- **Repeated dosing/courses** = need **levels** and renal-adjusted intervals\n- Use **actual weight** only if below ideal",
   "redFlags": "- **Anuria**, significant pre-existing renal impairment, or concurrent **nephrotoxins** → seek advice / consider a non-aminoglycoside\n- **Never** give repeated empiric doses without **levels**",
   "mcqTrap": "- Trap 1: 'Withhold gentamicin entirely because creatinine is mildly raised' — usually **WRONG** for a **single empiric dose** in shock\n- Trap 2: 'Continue regular **q8h gentamicin** empirically' — **WRONG**; it is a single dose then review",
   "mnemonic": "ONE then review — ideal body weight, higher dose for shock, ~48 h cap.",
   "viva": "- Out loud: 'I'd give a **single weight-based gentamicin dose** on **ideal body weight** for Gram-negative cover in shock, then reassess **renal function and levels** before any further dose — I would not continue it blindly'\n- Examiner probes **weight basis** and the **single-dose principle**",
   "source": "Therapeutic Guidelines: Antibiotic (eTG, current) — aminoglycoside dosing; Australian state-health aminoglycoside dosing guidelines",
   "tags": [
    "gentamicin",
    "aminoglycoside",
    "dosing",
    "renal"
   ],
   "verified": false,
   "title": "Gentamicin in sepsis",
   "subtitle": "the dose, the single-dose rule, and the renal/duration gotcha",
   "id": "infectious-6"
  },
  {
   "topic": "NSW sepsis pathway 'Could it be sepsis?' — the recognise/respond/escalate structure and what the gotcha actually is",
   "subarea": "Sepsis & antimicrobial principles",
   "trap": "- Current CEC branding is **'Could it be sepsis?' (Listen, Look, Act)** since Feb 2024\n  - The older **'Sepsis Kills' / Recognise–Resuscitate–Refer** three-R framework is legacy\n- Recognition, resuscitation, and escalation happen **simultaneously**, not sequentially\n  - Do NOT finish resuscitating before escalating\n- Classic stem trap: **'soft' obs + clear infection** → treat-and-reassess, do not discharge\n- Trigger to act = **risk factors/clinical signs of infection PLUS abnormal observations**\n- Any single **RED flag** = treat as septic shock until proven otherwise and escalate immediately",
   "whatFirst": "- Ask **'Could it be sepsis?'** first\n- If infection plus abnormal obs: act on the pathway\n  - Take **VBG/lactate**\n  - **Escalate to the senior doctor** while resuscitating — do not wait",
   "discriminator": "- Yellow/amber abnormal observations = **'patient may have sepsis'** → reassess and treat\n- Any single **RED flag** = act as septic shock + senior + critical-care referral now\n  - **SBP <90 mmHg**\n  - **Lactate ≥4 mmol/L**\n  - Marked **altered mentation**\n  - Mottled/cyanotic\n  - **Anuria**",
   "redFlags": "- Single red criterion → **expedite to resus** + senior + ICU referral\n  - **SBP <90 mmHg**\n  - **Lactate ≥4 mmol/L**\n  - New **altered mentation**\n  - **Immunocompromised** + unwell",
   "mcqTrap": "- 'Obs only mildly deranged and lactate normal → reassure and discharge' — **WRONG**\n- The pathway's explicit safety net is **treat-and-reassess**\n- Do not discharge a patient with clear infection just because the score is sub-threshold",
   "mnemonic": "'Could it be sepsis?' — Listen, Look, Act: recognise, respond and escalate at the same time, not in sequence.",
   "viva": "- Say out loud: **'I'm worried about sepsis — I'll act on the adult sepsis pathway'**\n  - Take **blood cultures** and a **lactate**\n  - Give **empiric antibiotics**\n  - Start a **fluid challenge**\n  - Escalate to **senior doctor and critical care now**\n- Examiner probes whether you act **before the lactate returns**",
   "source": "NSW Clinical Excellence Commission Adult Sepsis Pathway ('Could it be sepsis?', updated Feb 2024); ACSQHC Sepsis Clinical Care Standard 2022",
   "tags": [
    "sepsis",
    "recognition",
    "CEC",
    "pathway"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">RECOGNISE: infection + abnormal obs → ask 'Could it be sepsis?'</div><div class=\"gv-step\">RESPOND: cultures, lactate, empiric antibiotics, fluid challenge</div><div class=\"gv-step\">ESCALATE: senior doctor + ICU; any 1 RED flag = treat as septic shock</div></div>",
   "title": "NSW sepsis pathway 'Could it be sepsis?'",
   "subtitle": "the recognise/respond/escalate structure and what the gotcha actually is",
   "id": "infectious-7"
  },
  {
   "topic": "Penicillin-allergy DELABELLING — PEN-FAST score, exact cut-off, and direct oral challenge",
   "subarea": "Sepsis & antimicrobial principles",
   "trap": "- **PEN-FAST** is the Australian-developed penicillin allergy risk tool\n- Three items, **maximum 5 points**:\n  - **+2** — Five or fewer YEARS since reaction\n  - **+2** — Anaphylaxis/angioedema OR severe cutaneous reaction (SCAR)\n  - **+1** — Treatment required for the reaction\n- Cut-off: score **<3 = LOW risk** (NPV ~96%) → eligible for direct oral amoxicillin challenge (no skin testing needed)\n- Score **≥3 = moderate/high** → formal allergy assessment\n- Exam trap: a score of **exactly 3 is NOT low-risk** — it is the threshold for referral\n- PEN-FAST is for **assessment/delabelling**, NOT for the acute septic patient\n  - Do not run an oral challenge mid-sepsis",
   "whatFirst": "- In the **stable patient**, calculate PEN-FAST\n- If **<3**, offer a **direct oral amoxicillin challenge** to delabel\n  - Do not reflexively refer everyone for skin testing",
   "discriminator": "- **PEN-FAST <3** = low risk → direct **oral challenge**\n- **PEN-FAST ≥3** = specialist allergy assessment\n- **Delabelling is elective** — in active sepsis treat empirically and delabel later",
   "redFlags": "- History of **SCAR** (SJS/TEN/DRESS) or **anaphylaxis** → do NOT oral-challenge regardless\n  - Refer to **immunology**",
   "mcqTrap": "- 'PEN-FAST 3 is low risk, proceed to oral challenge' — **WRONG**\n  - **<3** is the low-risk cut-off; 3 is not\n- Performing delabelling during an **acute septic illness** — also WRONG",
   "mnemonic": "PEN-FAST: Five years (+2), Anaphylaxis/SCAR (+2), Treatment needed (+1); <3 = challenge, ≥3 = refer.",
   "viva": "- Out loud: **'His PEN-FAST is 1 — low risk'**\n  - Offer a **direct oral amoxicillin challenge** to delabel\n  - Allows safe use of **first-line beta-lactams** in future\n- Examiner probes the **score components** and why delabelling matters for **antimicrobial stewardship**",
   "source": "Trubiano et al. PEN-FAST (JAMA Intern Med 2020; NPV of <3 = 96.3%); ASCIA penicillin allergy guidance; eTG Antibiotic (current)",
   "tags": [
    "delabelling",
    "PEN-FAST",
    "penicillin allergy",
    "oral challenge"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>PEN-FAST item</th><th>Points</th></tr><tr><td>Five years or less since reaction</td><td>+2</td></tr><tr><td>Anaphylaxis/angioedema OR SCAR</td><td>+2</td></tr><tr><td>Treatment required for reaction</td><td>+1</td></tr><tr><td><b>Score &lt;3</b></td><td>LOW risk → direct oral challenge</td></tr><tr><td><b>Score ≥3</b></td><td>Refer for allergy assessment</td></tr></table>",
   "title": "Penicillin-allergy DELABELLING",
   "subtitle": "PEN-FAST score, exact cut-off, and direct oral challenge",
   "id": "infectious-8"
  },
  {
   "topic": "qSOFA and lactate — what the numbers actually are and why qSOFA is NOT a screening tool",
   "subarea": "Sepsis & antimicrobial principles",
   "trap": "- **qSOFA = 3 items**, each 1 point:\n  - **RR ≥22**\n  - Altered mentation (**GCS <15**)\n  - **SBP ≤100 mmHg**\n- Score **≥2** = higher mortality risk\n- Critical trap: qSOFA is a **PROGNOSTIC/risk-stratification tool**, NOT a screening or diagnostic test\n  - Current Surviving Sepsis guidance and Australian practice explicitly advise **AGAINST** using qSOFA alone to screen\n  - **qSOFA 0–1 does NOT exclude sepsis**\n- Lactate thresholds:\n  - **≥2 mmol/L** = tissue-hypoperfusion / sepsis concern\n  - **≥4 mmol/L** = RED flag (severe sepsis/shock)\n- **Septic shock (Sepsis-3)** = vasopressors needed for **MAP ≥65** PLUS **lactate >2** despite adequate fluid",
   "whatFirst": "- Measure a **venous lactate early**\n- Do NOT use qSOFA to decide whether to investigate\n  - Use **clinical suspicion** plus the pathway's abnormal-observation criteria",
   "discriminator": "- **qSOFA ≥2** predicts deterioration but a **low qSOFA never rules sepsis out**\n- **Lactate ≥2 mmol/L** = perfusion concern\n- **Lactate ≥4 mmol/L** = red flag mandating resus\n- **Hyperlactataemia ≥4 with normal BP** still = high risk",
   "redFlags": "- **Lactate ≥4 mmol/L** → escalate to ICU\n- **Lactate failing to clear** on repeat after fluids → escalate to ICU",
   "mcqTrap": "- 'qSOFA is 0, therefore **sepsis is excluded**' — WRONG\n  - qSOFA is not a rule-out tool\n- Treating qSOFA as the **screening trigger** instead of clinical suspicion + abnormal vitals — also WRONG",
   "mnemonic": "qSOFA = '22-100-confused': RR ≥22, SBP ≤100, altered mentation. Lactate: 2 = worry, 4 = war.",
   "viva": "- Out loud: **'His qSOFA is 2, which flags high risk'**\n  - But: 'I treat on **clinical suspicion plus a lactate** — I wouldn't use qSOFA to rule sepsis out'\n- Examiner probes the difference between **screening vs prognostic tools** and the **septic shock definition**",
   "source": "Sepsis-3 (Singer et al., JAMA 2016); Surviving Sepsis Campaign 2026; NSW CEC Adult Sepsis Pathway 2024",
   "tags": [
    "qSOFA",
    "lactate",
    "Sepsis-3",
    "septic shock"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>qSOFA (1 pt each, ≥2 = high risk)</th><th>Lactate</th></tr><tr><td>RR ≥22/min</td><td><span class=\"gv-num\">≥2 mmol/L</span> = perfusion concern</td></tr><tr><td>SBP ≤100 mmHg</td><td><span class=\"gv-num\">≥4 mmol/L</span> = RED / severe sepsis</td></tr><tr><td>Altered mentation (GCS &lt;15)</td><td>Septic shock = pressors for MAP ≥65 + lactate &gt;2</td></tr></table>",
   "title": "qSOFA and lactate",
   "subtitle": "what the numbers actually are and why qSOFA is NOT a screening tool",
   "id": "infectious-9"
  },
  {
   "topic": "Source control — the step antibiotics cannot replace, and the timing trigger",
   "subarea": "Sepsis & antimicrobial principles",
   "trap": "- Antibiotics + fluids will **FAIL** if there is an undrained or obstructed source\n- **Source control** is a SEPARATE mandatory limb of sepsis management\n  - Drain the **abscess/empyema**\n  - Relieve **obstructed pyelonephritis** (stent/nephrostomy)\n  - **Remove the infected line**\n  - **Debride necrotising fasciitis**\n  - **Decompress obstructed biliary tree**\n- Source control should be achieved as soon as feasible — typically within **6–12 hours** where practical\n- Exam trap: patient 'not responding to appropriate antibiotics' → answer is usually a **missed source needing drainage**, NOT escalating/broadening antibiotics",
   "whatFirst": "- Once resuscitating, actively **hunt the source** (exam, urine, imaging)\n- Arrange **definitive drainage/removal early**\n  - Antibiotics alone will not fix a collection",
   "discriminator": "- Failure to improve on correct antibiotics → think **undrained collection**, obstructed system, retained device, or necrotising infection\n  - Escalate to **surgery/IR**, not to a broader antibiotic",
   "redFlags": "- **Obstructed infected kidney** → urgent urology referral\n- **Biliary sepsis with obstruction** → urgent IR/surgery\n- **Necrotising soft-tissue infection** → surgical emergency\n- **Infected prosthesis/line** → urgent device removal",
   "mcqTrap": "- 'Patient deteriorating despite appropriate IV antibiotics → broaden to **meropenem**' — WRONG when there is an undrained abscess or obstructed system\n- Correct answer = **source control** (drainage/decompression/device removal)",
   "mnemonic": "Drugs don't drain pus — find it, drain it, remove the device.",
   "viva": "- Out loud: **'He's not responding to appropriate antibiotics — I'm concerned about an undrained or obstructed source'**\n  - Image urgently\n  - Involve **surgery/IR/urology for source control**\n  - Rather than just broadening antibiotic cover\n- Examiner probes the **'not responding'** deteriorating-patient scenario",
   "source": "Surviving Sepsis Campaign 2026 (source control as soon as feasible); eTG Antibiotic (current); ACSQHC Sepsis Clinical Care Standard 2022",
   "tags": [
    "source control",
    "drainage",
    "deteriorating patient",
    "surgery"
   ],
   "verified": true,
   "title": "Source control",
   "subtitle": "the step antibiotics cannot replace, and the timing trigger",
   "id": "infectious-10",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/LargeHepaticAbscess.png/960px-LargeHepaticAbscess.png",
     "caption": "Undrained intra-abdominal abscess on CT",
     "alt": "Hypodense rim-enhancing collection representing an intra-abdominal abscess requiring surgical/radiological source control",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Bacterial meningitis - empirical regimen, dexamethasone timing & 'don't delay'",
   "subarea": "Common & serious infections",
   "whatFirst": "- Suspected bacterial meningitis = give **antibiotics IMMEDIATELY**\n- Adult empirical regimen:\n  - **Ceftriaxone 4 g/day IV** (2 g 12-hourly)\n  - **Dexamethasone 10 mg IV** with or just before the first antibiotic dose\n- Add **amoxicillin (or benzylpenicillin)** for Listeria cover in at-risk groups\n- Add **aciclovir** if encephalitis is suspected\n- Take **blood cultures first**; LP only if it will not delay treatment and no contraindication",
   "trap": "- Do **NOT withhold antibiotics** for CT/LP if this delays treatment **>30 minutes**\n- CT first required only if: **focal deficit**, immunocompromise, seizure, falling GCS, papilloedema\n  - In these cases or if LP is delayed: give **antibiotics + dexamethasone FIRST**\n- **Dexamethasone** must be given **WITH or BEFORE the first antibiotic dose**\n  - Giving it after loses the benefit\n  - **Avoided in confirmed Listeria meningitis**",
   "discriminator": "- Add **amoxicillin/benzylpenicillin** for Listeria risk in:\n  - Neonates, age **>50**, pregnancy, immunocompromised/steroids, alcohol excess, debilitated\n  - Ceftriaxone alone does **NOT cover Listeria**\n- Add **vancomycin** if Gram-positive cocci on CSF Gram stain or pneumococcal resistance concern\n- Add **IV aciclovir** if encephalitic features (altered behaviour, seizures, focal/temporal signs)",
   "redFlags": "- **Non-blanching purpuric rash** (meningococcaemia) → give **benzylpenicillin** and don't delay\n- **Rapidly falling GCS**, shock, focal neurology → ICU + early antibiotics\n  - Image only **after** treatment started",
   "mcqTrap": "- 'Perform CT head and LP, **then** commence antibiotics' — WRONG\n  - Antibiotics (+ dexamethasone) must **precede** imaging/LP when these would delay treatment\n- **Ceftriaxone alone** in a 70-year-old — WRONG\n  - Must add **amoxicillin/benzylpenicillin** for Listeria",
   "viva": "- Out loud: **'Cultures, then ceftriaxone 4 g/day plus dexamethasone 10 mg given together immediately'**\n  - 'I will not delay antibiotics for CT/LP'\n  - 'Because she's over 50 I'm adding **amoxicillin for Listeria**'\n  - 'Adding **aciclovir** as she has encephalitic features'\n- Examiner probes: who needs **CT before LP**, and why **dexamethasone timing** matters",
   "source": "MJA narrative review 2018 (Beaman) Box 3, citing Therapeutic Guidelines: Antibiotic v15 - ceftriaxone 4 g/day, dexamethasone 10 mg with/before first dose, amoxicillin for Listeria-risk groups.",
   "tags": [
    "meningitis",
    "ceftriaxone",
    "dexamethasone",
    "Listeria",
    "aciclovir"
   ],
   "mnemonic": "Steroids go FIRST or WITH, never AFTER the bug-killer.",
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Suspect meningitis</div><div class=\"gv-step\">Blood cultures</div><div class=\"gv-step\">Ceftriaxone 4 g/day IV + dexamethasone 10 mg (together)</div><div class=\"gv-step\">+/- amoxicillin (Listeria), +/- aciclovir (encephalitis)</div><div class=\"gv-step\">CT/LP only if no delay; if CT needed, treat first</div></div>",
   "title": "Bacterial meningitis",
   "subtitle": "empirical regimen, dexamethasone timing & 'don't delay'",
   "id": "infectious-11",
   "images": [
    {
     "src": "assets/img/ophthalmology_fundus_papilloedema_01.jpg",
     "caption": "Papilloedema - fundus photograph",
     "alt": "Swollen optic disc with blurred margins and venous engorgement — contraindication to immediate LP in suspected meningitis",
     "credit": "DocSee04, Wikimedia Commons, CC BY 4.0"
    },
    {
     "src": "assets/img/dermatology_purpura_nonblanching_01.jpg",
     "caption": "Petechial rash - meningococcal meningitis",
     "alt": "Non-blanching petechial/purpuric rash of meningococcal septicaemia",
     "credit": "DrFO.Jr.Tn, Wikimedia Commons, CC BY-SA 3.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/2/23/Tuberculous-meningitis-scan.jpg",
     "caption": "Bacterial meningitis - CT head (pre-LP)",
     "alt": "Bacterial meningitis - CT head (pre-LP)",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Cellulitis vs necrotising fasciitis (pain out of proportion = surgical emergency)",
   "subarea": "Common & serious infections",
   "whatFirst": "- If nec fas suspected: **phone the surgeon NOW** for urgent operative exploration and debridement\n- Simultaneously:\n  - Start **broad-spectrum IV antibiotics**\n  - Start **resuscitation**\n- **Surgery is definitive** — antibiotics alone do not cure it",
   "trap": "- Do **NOT wait for imaging** (CT/MRI/US) or the **LRINEC score** to 'confirm' necrotising fasciitis before calling surgery\n  - Both are **insensitive**; a normal result does NOT exclude it\n- **Absence of soft-tissue gas** does NOT rule it out\n- Diagnosis is **clinical/operative**; imaging must not delay theatre",
   "discriminator": "- Red flags separating nec fas from cellulitis:\n  - **Pain OUT OF PROPORTION** (or skin anaesthesia)\n  - **Rapid progression** (hours)\n  - **Systemic toxicity/shock**\n  - **Dusky skin/haemorrhagic bullae/crepitus**\n  - **Oedema beyond the erythema margin**\n  - 'Dishwater' fluid + **non-bleeding fascia** on exploration\n- Cellulitis: pain matches erythema, slower course, systemically well",
   "redFlags": "- **Pain out of proportion** → immediate surgical referral\n- **Crepitus** → immediate surgical referral\n- **Haemorrhagic bullae** → immediate surgical referral\n- **Skin anaesthesia** → immediate surgical referral\n- **Rapid spread** → immediate surgical referral\n- **Hypotension/shock** → immediate surgical referral",
   "mcqTrap": "- 'Order an urgent **MRI to confirm** necrotising fasciitis before operating' — WRONG\n  - Imaging is insensitive and delays life-saving debridement\n- Correct = **urgent surgical exploration** + broad-spectrum IV antibiotics including an antitoxin agent (**clindamycin/lincomycin**)",
   "viva": "- Out loud: **'Pain out of proportion plus systemic toxicity worries me for necrotising fasciitis'**\n  - 'I will not delay for imaging — **calling surgery for urgent debridement**'\n  - Starting broad-spectrum IV antibiotics with **clindamycin/lincomycin** while resuscitating\n- Examiner probes WHY clindamycin: it **suppresses streptococcal exotoxin production**\n  - Overcomes the **penicillin Eagle effect** at high bacterial loads",
   "source": "Therapeutic Guidelines: Antibiotic (eTG, current) - necrotising skin and soft-tissue infections.",
   "tags": [
    "necrotising fasciitis",
    "cellulitis",
    "surgical emergency",
    "clindamycin",
    "LRINEC"
   ],
   "mnemonic": "Pain Out of Proportion = Phone the surgeon (the 3 P's).",
   "verified": false,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Feature</th><th>Cellulitis</th><th>Necrotising fasciitis</th></tr><tr><td>Pain</td><td>Matches erythema</td><td>OUT of proportion / anaesthesia</td></tr><tr><td>Course</td><td>Days</td><td>Hours, rapid</td></tr><tr><td>Systemic</td><td>Usually well</td><td>Toxic / shock</td></tr><tr><td>Skin</td><td>Erythema, warmth</td><td>Dusky, bullae, crepitus, necrosis</td></tr><tr><td>Management</td><td>Antibiotics</td><td>Urgent surgery + antibiotics</td></tr></table>",
   "title": "Cellulitis vs necrotising fasciitis (pain out of…",
   "id": "infectious-12",
   "images": [
    {
     "src": "assets/img/dermatology_cellulitis_erysipelas_leg_01.jpg",
     "caption": "Cellulitis - erythema and swelling",
     "alt": "Spreading erythema, warmth and swelling of cellulitis — contrast with the necrotic appearance of NF",
     "credit": "Poupou l'quourouce, Wikimedia Commons, CC BY-SA 3.0 (cropped)"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Necrotizing_fasciitis_left_leg.JPEG/960px-Necrotizing_fasciitis_left_leg.JPEG",
     "caption": "Necrotising fasciitis - clinical appearance",
     "alt": "Dusky/grey skin discolouration with bullae and demarcated necrosis typical of necrotising fasciitis",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Necrotising_fascitis_producing_gas_in_soft_tissues.jpg/960px-Necrotising_fascitis_producing_gas_in_soft_tissues.jpg",
     "caption": "CT soft tissue gas - necrotising fasciitis",
     "alt": "Gas tracking along fascial planes on CT — when present, confirms NF, but absence does NOT exclude it",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Empirical antibiotics for cellulitis & MRSA-risk modifiers (the de-escalation layer)",
   "subarea": "Common & serious infections",
   "whatFirst": "- **Mark the leading edge** to track progression\n- **Elevate the limb**\n- Mild/moderate cellulitis: **di/flucloxacillin orally** (or cefalexin) targeting Streptococcus and MSSA\n- Severe/systemic features: **IV flucloxacillin** (or cefazolin)",
   "trap": "- **Bilateral 'cellulitis'** is almost never bilateral infection\n  - Usually **venous stasis dermatitis** — don't reflexively give antibiotics\n- Do NOT add **MRSA cover routinely**\n  - Only with risk factors: prior MRSA, recent hospitalisation, high local prevalence, IVDU, beta-lactam failure",
   "discriminator": "- Cellulitis mimics to exclude:\n  - **Stasis dermatitis** (bilateral, chronic, itchy, afebrile)\n  - **DVT** (Doppler)\n  - **Gout**\n  - **Necrotising fasciitis** (pain out of proportion, toxicity) — critically important\n- Fever + systemic upset → pushes to **IV therapy**",
   "redFlags": "- Failure to improve at **48 hours** → reassess\n  - Look for **abscess** (needs drainage)\n  - Look for **resistant organism**\n  - Look for **necrotising infection**\n- **Rapidly advancing margin**\n- **Pain out of proportion**\n- **Systemic sepsis**",
   "mcqTrap": "- Adding **vancomycin or trimethoprim-sulfamethoxazole** for MRSA to EVERY cellulitis — WRONG\n  - Unless MRSA **risk factors** are present\n  - First-line is **flucloxacillin/cefalexin** targeting Strep + MSSA",
   "viva": "- Out loud: **'Uncomplicated cellulitis — mark the margin, elevate, start flucloxacillin'**\n  - Reserve **MRSA cover** for specific risk factors\n  - **Reassess at 48 hours** with a low threshold to look for abscess or a necrotising process",
   "source": "Therapeutic Guidelines: Antibiotic (eTG, current) - cellulitis and erysipelas.",
   "tags": [
    "cellulitis",
    "flucloxacillin",
    "MRSA",
    "de-escalation",
    "mimics"
   ],
   "mnemonic": "Bilateral = NOT bacterial (think stasis).",
   "verified": false,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Mild: di/flucloxacillin or cefalexin PO</span><span class=\"gv-pill\">Severe: flucloxacillin IV</span><span class=\"gv-pill\">MRSA risk: add vancomycin</span><span class=\"gv-pill\">Bilateral: think stasis, not infection</span></div>",
   "title": "Empirical antibiotics for cellulitis & MRSA-risk modifiers…",
   "id": "infectious-13",
   "images": [
    {
     "src": "assets/img/dermatology_cellulitis_erysipelas_leg_01.jpg",
     "caption": "Cellulitis - unilateral lower leg",
     "alt": "Unilateral spreading erythema, warmth and oedema of true cellulitis — compare with bilateral stasis dermatitis",
     "credit": "Poupou l'quourouce, Wikimedia Commons, CC BY-SA 3.0 (cropped)"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/9/98/Stasis_dermatitis_%28Gravitational_eczema%29.jpg",
     "caption": "Venous stasis dermatitis - bilateral lower legs",
     "alt": "Bilateral lower limb erythema with hyperpigmentation, haemosiderin staining and scaling — mimics bilateral cellulitis but is venous stasis dermatitis",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Infective endocarditis - organism-directed therapy & surgical triggers",
   "subarea": "Common & serious infections",
   "whatFirst": "- Take **≥3 sets of blood cultures** from separate sites BEFORE antibiotics (unless septic shock)\n- Then **echocardiography**:\n  - **TTE first**\n  - TOE if negative / prosthetic valve / high suspicion\n- **Tailor therapy to the organism** — IE is the prototype of organism-DIRECTED therapy, not blind broad-spectrum",
   "trap": "- Do NOT start antibiotics before **culturing** in the stable patient\n  - Premature antibiotics cause **'culture-negative' IE** and you lose organism-directed therapy\n- **S. aureus** on a native valve → **flucloxacillin** (NOT vancomycin) if methicillin-susceptible\n  - **Vancomycin** only for MRSA or true penicillin allergy",
   "discriminator": "- Organism steers the regimen:\n  - Viridans/other streptococci → **benzylpenicillin** (+/- gentamicin synergy)\n  - MSSA → **flucloxacillin**\n  - MRSA → **vancomycin**\n  - Enterococcus → **benzylpenicillin/amoxicillin + gentamicin** synergy\n- Empirical native-valve regimen pending cultures: **benzylpenicillin + flucloxacillin + gentamicin**\n  - Vancomycin + gentamicin if penicillin allergy / MRSA risk / prosthetic valve",
   "redFlags": "- Surgical referral triggers:\n  - **Heart failure** from valve dysfunction\n  - **Uncontrolled infection** (persistent bacteraemia/abscess/fungal/resistant organism, or new conduction block from root abscess)\n  - **Prevention of embolism** (large vegetation with embolic events)",
   "mcqTrap": "- 'Start IV **vancomycin** empirically for all suspected endocarditis' — WRONG\n  - Vancomycin is inferior for **MSSA native-valve** disease; flucloxacillin is superior\n- Starting antibiotics **before drawing cultures** in a stable patient — also WRONG",
   "viva": "- Out loud: **'Three sets of cultures from separate sites before antibiotics, urgent echo'**\n  - Then **organism-directed therapy**: flucloxacillin for MSSA, benzylpenicillin +/- gentamicin for strep\n  - Involve cardiology/cardiothoracics early for surgical triggers: **heart failure, uncontrolled infection, recurrent emboli**\n- Examiner probes the **modified Duke criteria** and which valve organisms need **gentamicin synergy**",
   "source": "Therapeutic Guidelines: Antibiotic (eTG, current) - infective endocarditis; modified Duke criteria; ESC 2023 IE surgical indications (heart failure / uncontrolled infection / embolism prevention).",
   "tags": [
    "endocarditis",
    "blood cultures",
    "flucloxacillin",
    "Duke criteria",
    "surgery"
   ],
   "mnemonic": "Surgery for the 3 H's: Heart failure, Hard-to-control infection, Hurling emboli.",
   "verified": false,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Organism</th><th>Directed therapy</th></tr><tr><td>Viridans / other strep</td><td>Benzylpenicillin (+/- gentamicin synergy)</td></tr><tr><td>MSSA (native valve)</td><td>Flucloxacillin</td></tr><tr><td>MRSA</td><td>Vancomycin</td></tr><tr><td>Enterococcus</td><td>Benzylpenicillin/amoxicillin + gentamicin</td></tr><tr><td>Empirical (native, pre-culture)</td><td>Benzylpenicillin + flucloxacillin + gentamicin</td></tr></table>",
   "title": "Infective endocarditis",
   "subtitle": "organism-directed therapy & surgical triggers",
   "id": "infectious-14",
   "images": [
    {
     "src": "assets/img/cardiology_splinter_haemorrhages_01.jpg",
     "caption": "Splinter haemorrhages - infective endocarditis",
     "alt": "Linear splinter haemorrhages beneath the fingernails — peripheral stigmata of infective endocarditis",
     "credit": "Splarka, Wikimedia Commons, public domain · Public domain"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Endocarditis_ultrasound.JPG/960px-Endocarditis_ultrasound.JPG",
     "caption": "Echocardiogram - vegetation on heart valve",
     "alt": "Transoesophageal echo showing mobile echogenic vegetation on a cardiac valve (infective endocarditis)",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Janeway_lesion.JPG/960px-Janeway_lesion.JPG",
     "caption": "Osler nodes and Janeway lesions - endocarditis",
     "alt": "Tender Osler nodes on fingertips and non-tender Janeway lesions on palms — immune complex embolic phenomena of IE",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Listeria, penicillin allergy & meningococcal contacts (the meningitis sub-traps)",
   "subarea": "Common & serious infections",
   "whatFirst": "- Decide three add-ons quickly:\n  1. **Listeria cover** (amoxicillin/benzylpenicillin) if neonate, age **>50**, pregnant, or immunocompromised\n  2. **Aciclovir** if encephalitis\n  3. **Vancomycin** if Gram-positive diplococci on Gram stain or resistant pneumococcus\n- For severe penicillin/cephalosporin allergy: use alternative regimen\n  - e.g. **meropenem**, or moxifloxacin + vancomycin, with **trimethoprim-sulfamethoxazole for Listeria**",
   "trap": "- **Ceftriaxone does NOT cover Listeria monocytogenes**\n  - Classic MCQ: elderly/pregnant/immunosuppressed patient where the 'complete' answer must add **amoxicillin or benzylpenicillin**\n- In true **severe beta-lactam allergy** — do NOT pick ceftriaxone",
   "discriminator": "- **Listeria** favours: extremes of age, pregnancy, immunosuppression, unpasteurised dairy/deli meats\n- **Meningococcal disease** = notifiable + chemoprophylaxis for close contacts:\n  - **Ciprofloxacin 500 mg PO single dose** (adults)\n  - Rifampicin 600 mg BD for 2 days\n  - **Ceftriaxone 250 mg IM** preferred in pregnancy\n- **Pneumococcal disease** does NOT need contact prophylaxis",
   "redFlags": "- **Pregnant patient** with suspected meningitis → think **Listeria**, avoid contraindicated agents\n- **Immunocompromise** broadens the differential: **cryptococcus, TB**\n  - Get the LP and ID input once stabilised",
   "mcqTrap": "- In an elderly patient: **'ceftriaxone alone'** — WRONG\n  - Must add **amoxicillin/benzylpenicillin** for Listeria\n- In a penicillin-anaphylaxis patient: picking **ceftriaxone** — WRONG\n  - Use a **non-beta-lactam regimen**",
   "viva": "- Out loud: **'Notifiable disease — I'll inform public health'**\n  - Arrange **contact chemoprophylaxis** (single-dose ciprofloxacin 500 mg, or ceftriaxone IM if pregnant) for close contacts of meningococcal disease\n  - Patient also needs **Listeria cover** given age/pregnancy\n- Examiner probes which organisms need contact prophylaxis:\n  - **Meningococcus, Hib** — YES\n  - **Pneumococcus** — NO",
   "source": "MJA narrative review 2018 (Beaman) Box 3 / CDNA Invasive Meningococcal Disease national guidelines - meningococcal contact chemoprophylaxis; Therapeutic Guidelines: Antibiotic (eTG, current) for Listeria cover & penicillin-allergy alternatives.",
   "tags": [
    "Listeria",
    "penicillin allergy",
    "meningococcal",
    "chemoprophylaxis",
    "pregnancy"
   ],
   "mnemonic": "Listeria loves the 3 P's: Pregnant, Past-50, immunocomPromised.",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Add-on</th><th>Trigger</th></tr><tr><td>Amoxicillin / benzylpenicillin</td><td>Listeria: neonate, &gt;50, pregnant, immunocompromised</td></tr><tr><td>Vancomycin</td><td>GPC on Gram stain / resistant pneumococcus</td></tr><tr><td>Aciclovir</td><td>Encephalitis features</td></tr><tr><td>Contact ciprofloxacin 500 mg PO</td><td>Close contacts of meningococcal disease</td></tr></table>",
   "title": "Listeria, penicillin allergy & meningococcal contacts (the…",
   "id": "infectious-15"
  },
  {
   "topic": "Osteomyelitis - sample/biopsy before antibiotics & the diabetic foot trap",
   "subarea": "Common & serious infections",
   "whatFirst": "- In the **stable (non-septic) patient**: obtain **bone biopsy/deep tissue sample** for culture BEFORE starting antibiotics\n  - Superficial swabs mislead\n- Empirical (when treatment can't wait or patient septic):\n  - **IV flucloxacillin** (or cefazolin)\n  - Add **vancomycin** for MRSA risk\n- Typically IV then oral, total often **4–6 weeks**",
   "trap": "- Do NOT culture a **superficial wound swab** and treat on it — it grows colonisers, not the bone pathogen\n  - Need **deep bone/tissue culture**\n- In diabetic foot:\n  - **Positive probe-to-bone test** raises osteomyelitis\n  - **Ulcer >2 cm2** / chronic non-healing raises osteomyelitis — do not dismiss as 'just an ulcer'\n- **Normal plain X-ray does NOT exclude early osteomyelitis**\n  - Changes lag **~2 weeks**",
   "discriminator": "- **Acute haematogenous** (children, long-bone metaphysis, S. aureus) vs **contiguous/diabetic foot** (polymicrobial, probe-to-bone)\n- **MRI** is most sensitive imaging\n- **Vertebral osteomyelitis**: back pain + fever + raised inflammatory markers, often IVDU or bacteraemia\n  - Image the spine and **culture before antibiotics**",
   "redFlags": "- **Vertebral osteomyelitis with new neurological deficit** → emergency MRI for **epidural abscess** (cord compression)\n  - Urgent **spinal/neurosurgical referral**\n- **Systemic sepsis** → treat as sepsis (antibiotics within the hour), don't wait for biopsy",
   "mcqTrap": "- 'Send a wound swab and start **oral antibiotics**' — WRONG\n  - Superficial swabs mislead\n  - Oral monotherapy is inadequate for established osteomyelitis\n  - Obtain **bone culture** and give **IV therapy**",
   "viva": "- Out loud: **'In a stable patient I'd get a bone biopsy for culture before antibiotics'** so therapy is organism-directed\n  - **MRI** for extent\n  - IV then oral for a total **4–6 weeks**\n  - 'If septic or there's cord compression, I escalate and treat immediately'\n- Examiner probes why a **superficial swab is unreliable**",
   "source": "Therapeutic Guidelines: Antibiotic (eTG, current) - osteomyelitis (bone culture before antibiotics in stable patients; flucloxacillin/cefazolin, IV then oral).",
   "tags": [
    "osteomyelitis",
    "bone biopsy",
    "diabetic foot",
    "vertebral",
    "flucloxacillin"
   ],
   "mnemonic": "Sample the bone, not the swab.",
   "verified": false,
   "cutoffs": [
    "**Probe-to-bone** positive or ulcer **>2 cm2** raises osteomyelitis risk",
    "Plain X-ray changes lag **~2 weeks**",
    "Typical total duration **4–6 weeks** (IV then oral)"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Suspect osteomyelitis</div><div class=\"gv-step\">Stable? -> bone biopsy/culture FIRST</div><div class=\"gv-step\">MRI for extent</div><div class=\"gv-step\">IV flucloxacillin (+/- vancomycin), then oral</div><div class=\"gv-step\">Total 4-6 weeks; septic/cord -> treat now</div></div>",
   "title": "Osteomyelitis",
   "subtitle": "sample/biopsy before antibiotics & the diabetic foot trap",
   "id": "infectious-16",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Neuropathic_heel_ulcer_diabetic.jpg",
     "caption": "Diabetic foot ulcer - deep with probe-to-bone",
     "alt": "Deep neuropathic plantar ulcer in diabetic foot — positive probe-to-bone test indicates high probability of osteomyelitis",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Sepsis recognition & the 'golden hour' bundle (the timing every MCQ tests)",
   "subarea": "Common & serious infections",
   "whatFirst": "- Recognise sepsis, escalate, and within **1 hour** deliver the bundle\n- Highest-yield number: IV antibiotics within **60 minutes of sepsis RECOGNITION** (not 60 min of admission)\n- Bundle =\n  - **Blood cultures** (before antibiotics, but do not delay)\n  - **Venous lactate**\n  - **Empirical IV broad-spectrum antibiotics**\n  - **IV fluid resuscitation**\n  - **Reassess**",
   "trap": "- The **sequence error** is the trap: do NOT delay antibiotics to wait for blood cultures, lactate, imaging or senior review\n- Cultures first **IF immediately available**, but **antibiotics take priority** if cultures cannot be drawn promptly\n- Do **NOT** order CT/LP before starting antibiotics in suspected sepsis/meningitis",
   "discriminator": "- **Lactate >2 mmol/L** signals hypoperfusion\n- **Lactate >4 mmol/L** or hypotension persisting after fluids = **septic shock**\n- **qSOFA** (RR ≥22, SBP ≤100, altered mentation; ≥2 = high risk):\n  - A prompt to escalate, NOT a **diagnostic rule-in**\n  - NOT a **screen-out tool**",
   "redFlags": "- **Lactate >4 mmol/L** → ICU/MET escalation\n- **SBP <90** or needing vasopressors after adequate fluids → ICU/MET escalation\n- **Altered conscious state** → ICU/MET escalation\n- **Mottling** → ICU/MET escalation\n- **New oliguria** → ICU/MET escalation",
   "mcqTrap": "- 'Obtain CT and lactate, **then commence antibiotics** once results return' — WRONG\n  - Antibiotics must not be delayed for investigations\n- Correct = cultures + **empirical IV antibiotics within the hour**, in parallel with fluids and lactate",
   "viva": "- ISBAR out loud: **'Suspected sepsis meeting red-zone criteria with lactate X and SBP Y'**\n  - 'I have taken cultures, started **broad-spectrum IV antibiotics** and a fluid bolus'\n  - 'I am **escalating to the registrar/MET**'\n- Examiner probes: **antibiotic timing target** (within 60 min of recognition) and why",
   "source": "Sepsis Clinical Care Standard (ACSQHC, 2022); CEC Adult Sepsis Pathway / SEPSIS KILLS (NSW, current).",
   "tags": [
    "sepsis",
    "lactate",
    "bundle",
    "timing",
    "qSOFA"
   ],
   "mnemonic": "BUFALO - Blood cultures, Urine output, Fluids, Antibiotics, Lactate, Oxygen (within the hour).",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Step (within 60 min)</th><th>Action</th></tr><tr><td>Cultures</td><td>Blood cultures BEFORE antibiotics if no delay</td></tr><tr><td>Lactate</td><td>Venous lactate; <span class=\"gv-num\">&gt;2</span> = hypoperfusion, <span class=\"gv-num\">&gt;4</span> = shock</td></tr><tr><td>Antibiotics</td><td>Empirical IV broad-spectrum within <span class=\"gv-num\">60 min</span></td></tr><tr><td>Fluids</td><td>IV fluid bolus, reassess, repeat</td></tr><tr><td>Reassess/Refer</td><td>Senior/MET review, escalate to ICU</td></tr></table>",
   "title": "Sepsis recognition & the 'golden hour' bundle…",
   "id": "infectious-17"
  },
  {
   "topic": "Septic arthritis - aspirate BEFORE antibiotics & the not-to-miss diagnosis",
   "subarea": "Common & serious infections",
   "whatFirst": "- **Aspirate the joint** (and take blood cultures) BEFORE starting antibiotics\n  - Synovial fluid for urgent Gram stain, culture, cell count, and crystals\n- Then start empirical **IV flucloxacillin** (or cefazolin)\n  - Add **vancomycin** if MRSA risk\n- Septic arthritis is an **orthopaedic emergency** requiring joint drainage/washout, not antibiotics alone",
   "trap": "- Do **NOT give antibiotics before aspirating** a native joint in a stable patient — it sterilises cultures\n- Assuming a hot joint with crystals is 'just gout' is dangerous — **septic arthritis and crystal arthritis CAN coexist**\n  - Send fluid for both crystals AND culture",
   "discriminator": "- Synovial **WCC >50,000/mm3** (often >100,000) with >90% neutrophils = septic\n  - Inflammatory: 2,000–50,000\n  - Non-inflammatory: <2,000\n- **Gonococcal arthritis** (young, sexually active, migratory/tenosynovitis, pustular rash)\n  - Needs **ceftriaxone** and may be culture-negative\n  - Take genital/throat/rectal swabs",
   "redFlags": "- Hot, swollen, restricted joint with fever = **septic arthritis until proven otherwise**\n  - Urgent aspiration + orthopaedic referral\n- **Prosthetic joint** — do NOT aspirate blindly in ED; involve orthopaedics",
   "mcqTrap": "- Most tempting wrong answer: '**Commence IV flucloxacillin then arrange joint aspiration**' — wrong order; aspirate first, then antibiotics\n- Also wrong: 'diagnose gout and give **NSAIDs**' when crystals are seen but infection is not excluded",
   "viva": "- 'Hot joint plus fever — I'm treating this as **septic arthritis**: urgent aspiration and blood cultures BEFORE antibiotics'\n- Then empirical **flucloxacillin** and an orthopaedic referral for washout\n- Examiner probes the synovial **WCC cut-off** and that crystals do not exclude infection",
   "source": "Therapeutic Guidelines: Antibiotic (eTG, current) - septic arthritis (sample before antibiotics; flucloxacillin/cefazolin empirical, add vancomycin if MRSA risk).",
   "tags": [
    "septic arthritis",
    "aspirate first",
    "synovial WCC",
    "flucloxacillin",
    "gonococcal"
   ],
   "mnemonic": "TAP before you ZAP (aspirate before antibiotics).",
   "verified": false,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Synovial WCC (/mm3)</th><th>Interpretation</th></tr><tr><td><span class=\"gv-num\">&lt;2,000</span></td><td>Non-inflammatory</td></tr><tr><td><span class=\"gv-num\">2,000-50,000</span></td><td>Inflammatory (e.g. crystal, RA)</td></tr><tr><td><span class=\"gv-num\">&gt;50,000</span></td><td>Septic until proven otherwise</td></tr></table>",
   "title": "Septic arthritis",
   "subtitle": "aspirate BEFORE antibiotics & the not-to-miss diagnosis",
   "id": "infectious-18",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gout_-_Sodium_Urate_Crystals_-_Polarized_%2849274750631%29.jpg/960px-Gout_-_Sodium_Urate_Crystals_-_Polarized_%2849274750631%29.jpg",
     "caption": "Urate crystals - gout (polarised light microscopy)",
     "alt": "Negatively birefringent needle-shaped monosodium urate crystals under polarised light — distinguishes gout from septic arthritis (which can coexist)",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "AIDS-defining illnesses & the CD4 thresholds that should trigger prophylaxis",
   "subarea": "Specific pathogens & travel/BBV",
   "whatFirst": "- In advanced HIV, the **CD4 count** drives both the differential AND prophylaxis\n- Know the threshold ladder:\n  - Start **PCP prophylaxis** (cotrimoxazole) at CD4 <200\n  - **Toxoplasma prophylaxis** at CD4 <100 (if seropositive)\n  - **MAC prophylaxis** at CD4 <50",
   "trap": "- **AIDS** = AIDS-defining illness OR CD4 <200\n- The number-to-condition mapping is the classic MCQ:\n  - **~<200**: PCP and oesophageal candidiasis\n  - **~<100**: cerebral toxoplasmosis and cryptococcus\n  - **~<50**: CMV retinitis and MAC\n- **PCP prophylaxis** is also indicated with oral thrush or an AIDS illness even if CD4 is just above 200\n- Prophylaxis can **stop** once CD4 >200 for ≥3 months on ART",
   "discriminator": "- CD4 <200 + bilateral interstitial infiltrates + raised LDH + exertional desaturation = **PCP** (not bacterial pneumonia)\n- **Ring-enhancing brain lesions** at CD4 <100 = toxoplasmosis\n  - vs primary CNS lymphoma — EBV PCR/imaging/response to anti-toxo trial discriminates",
   "redFlags": "- PCP with **hypoxia** (low PaO2 / high A-a gradient) — add adjunctive **corticosteroids**\n- New neuro signs / visual symptoms at low CD4 — urgent imaging/ophthalmology\n  - Consider **toxo, cryptococcus, CMV**",
   "mcqTrap": "- Tempting wrong answer: '**oral thrush alone is AIDS-defining**' — it is NOT; oesophageal candidiasis is\n- Also wrong: '**start MAC prophylaxis at CD4 <200**' — MAC threshold is <50\n- Mixing the thresholds is the trap",
   "viva": "- 'I use CD4 as both a **risk map and a prophylaxis trigger**'\n  - Cotrimoxazole for PCP under **200**\n  - Toxoplasma cover under **100** if seropositive\n  - MAC under **50**\n- AIDS = CD4 under 200 or an **AIDS-defining illness**\n- For suspected PCP with hypoxia I add **steroids**",
   "mnemonic": "'200-100-50 = PCP - Toxo - MAC' (descending CD4, descending number).",
   "tags": [
    "AIDS-defining",
    "CD4",
    "PCP prophylaxis",
    "toxoplasmosis",
    "MAC",
    "cotrimoxazole"
   ],
   "cutoffs": [
    "AIDS = **CD4 <200** or AIDS-defining illness",
    "PCP prophylaxis: **CD4 <200** (or thrush/AIDS illness)",
    "Toxoplasma prophylaxis: **CD4 <100** (IgG+)",
    "MAC prophylaxis: **CD4 <50**",
    "Stop prophylaxis if **CD4 >200** for ≥3 months on ART",
    "PCP + hypoxia → adjunctive **steroids**"
   ],
   "source": "ASHM HIV management guidance (Australia, current); US DHHS/NIH OI prophylaxis CD4 thresholds (adopted internationally)",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>CD4</th><th>Risk / Prophylaxis</th></tr><tr><td>&lt;200</td><td>AIDS; PCP, oesophageal candida - start cotrimoxazole</td></tr><tr><td>&lt;100</td><td>Cerebral toxoplasmosis, cryptococcus - toxo prophylaxis</td></tr><tr><td>&lt;50</td><td>CMV retinitis, MAC - MAC prophylaxis</td></tr></table>",
   "title": "AIDS-defining illnesses & the CD4 thresholds that…",
   "id": "infectious-19",
   "images": [
    {
     "src": "assets/img/respiratory_cxr_pcp_bilateral_01.jpg",
     "caption": "PCP - bilateral ground-glass infiltrates on CXR",
     "alt": "Bilateral perihilar ground-glass / interstitial infiltrates in Pneumocystis jirovecii pneumonia (CD4 <200)",
     "credit": "Samir (User:Samir धर्म), Wikimedia Commons, CC BY-SA 3.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Fundus_photograph-CMV_retinitis_EDA07.JPG/960px-Fundus_photograph-CMV_retinitis_EDA07.JPG",
     "caption": "CMV retinitis - fundus (CD4 <50)",
     "alt": "Pizza-pie/brushfire appearance of CMV retinitis with haemorrhages and exudates along vessel arcades — occurs at CD4 <50",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Human_tongue_infected_with_oral_candidiasis.jpg/960px-Human_tongue_infected_with_oral_candidiasis.jpg",
     "caption": "Oral candidiasis (thrush) - HIV/AIDS",
     "alt": "White plaques on tongue and buccal mucosa (oropharyngeal candidiasis) — AIDS-defining illness at CD4 <200 (oesophageal candidiasis)",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Dengue in the returned traveller: warning signs & the platelet/fluid gotcha",
   "subarea": "Specific pathogens & travel/BBV",
   "whatFirst": "- Suspect dengue with fever + travel to SE Asia/Pacific/South America + myalgia, retro-orbital pain, rash, leucopenia + thrombocytopenia\n- Confirm acutely with **NS1 antigen** (+/- PCR) early; serology later\n- **Always exclude malaria** in parallel",
   "trap": "- The danger is NOT the platelet count itself but **plasma leakage** (dengue haemorrhagic fever/shock)\n- Leakage classically begins around **defervescence** — the 'critical phase', roughly days 4–7 — just as the patient seems to be improving\n- Manage with **judicious crystalloid**\n- **Avoid NSAIDs/aspirin** (bleeding risk)\n- Avoid **routine platelet transfusion**\n- A **rising haematocrit with falling platelets** signals the leak",
   "discriminator": "- **Dengue**: NS1 positive, retro-orbital pain, marked leucopenia + thrombocytopenia, no parasites\n- **Malaria**: parasites on film\n- **Chikungunya**: severe arthralgia dominates\n- **Zika**: mild, rash, pregnancy concern",
   "redFlags": "- Warning signs → admit, IV fluids, close monitoring:\n  - **Abdominal pain/tenderness**\n  - Persistent vomiting\n  - Mucosal bleeding\n  - Lethargy/restlessness\n  - **Hepatomegaly >2 cm**\n  - Rising haematocrit with rapid platelet fall\n  - Clinical fluid accumulation",
   "mcqTrap": "- Tempting wrong answer: '**give NSAIDs/aspirin for the myalgia**' — precipitates bleeding\n- Also wrong: '**transfuse platelets for thrombocytopenia**' — not indicated unless bleeding/very low; leakage and fluid management matter more\n- Use **paracetamol only**",
   "viva": "- 'I watch for the **critical phase around defervescence**, roughly days 4–7, when plasma leakage causes shock despite apparent improvement'\n- I **avoid NSAIDs and aspirin**, use paracetamol\n- Give **judicious crystalloid**\n- Act on **warning signs** rather than the platelet number alone",
   "mnemonic": "Dengue danger = 'when the fever breaks, the leak begins.' No NSAIDs - paraCETamol only.",
   "tags": [
    "dengue",
    "NS1 antigen",
    "plasma leakage",
    "critical phase",
    "thrombocytopenia",
    "returned traveller"
   ],
   "cutoffs": [
    "Critical phase ~**days 4–7**, around defervescence",
    "Warning signs: **abdo pain**, vomiting, bleeding, HCT rise + platelet fall, hepatomegaly **>2 cm**",
    "**Paracetamol only** — avoid NSAIDs/aspirin"
   ],
   "source": "WHO dengue classification (adopted in Australian practice); Australian Prescriber returned-traveller guidance; eTG complete (current)",
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Febrile phase (days 1-3): NS1/PCR</div><div class=\"gv-step\">Defervescence ~days 4-7 = CRITICAL phase / leak</div><div class=\"gv-step\">Watch warning signs -> admit + crystalloid</div><div class=\"gv-step\">Recovery phase</div></div><div class=\"gv-pills\"><span class=\"gv-pill\">No NSAIDs</span><span class=\"gv-pill\">No aspirin</span><span class=\"gv-pill\">Paracetamol OK</span></div>",
   "title": "Dengue in the returned traveller",
   "subtitle": "warning signs & the platelet/fluid gotcha",
   "id": "infectious-20",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Early_Dengue_Fever_Rash_2014.jpg/960px-Early_Dengue_Fever_Rash_2014.jpg",
     "caption": "Dengue haemorrhagic fever - petechiae and rash",
     "alt": "Petechial rash and positive tourniquet test (Rumpel-Leede sign) in dengue haemorrhagic fever indicating plasma leakage phase",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Dengue_recovery_rash_%28White_islands_in_red_sea%29.jpg/960px-Dengue_recovery_rash_%28White_islands_in_red_sea%29.jpg",
     "caption": "Dengue - maculopapular rash with islands of white",
     "alt": "Classic dengue maculopapular rash with white islands of normal skin — appears during febrile phase",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Fever in the returned traveller: malaria thick & thin films - what to order first and how often",
   "subarea": "Specific pathogens & travel/BBV",
   "whatFirst": "- ANY fever in a traveller from an endemic area = **malaria until excluded**\n- Order **thick + thin films AND a rapid antigen test (RDT)** urgently, same day\n- **One negative film does NOT exclude malaria** — repeat films 12–24 hourly ×3 (over ~48–72 h) before calling it negative",
   "trap": "- **Thick film** = SCREENING/detection (concentrates parasites, more sensitive, tells you IF malaria)\n- **Thin film** = SPECIATION + PARASITAEMIA % (which species, how severe)\n  - Students reverse these\n- A **single negative film is NOT enough** — need 3 negatives over 48–72 h\n- **Falciparum** can be missed early because parasites sequester\n- **Parasitaemia >2%** (non-immune) flags severe disease",
   "discriminator": "- **Falciparum**: most lethal, no liver hypnozoites\n- **Vivax/ovale**: relapsing, liver hypnozoites needing **primaquine**\n- Thin film distinguishes:\n  - Ring forms\n  - **Banana-shaped gametocytes** (falciparum)\n  - **Schuffner's dots** (vivax/ovale)",
   "redFlags": "- Severe/complicated falciparum = ANY of:\n  - Impaired consciousness/seizures\n  - **Parasitaemia >2%**\n  - Hypoglycaemia\n  - Acidosis/high lactate\n  - AKI\n  - ARDS\n  - Shock, DIC\n  - **Hb <70**\n  - High bilirubin\n- → **IV artesunate** (TGA Special Access Scheme) + ICU; NOT oral\n- Discuss with ID immediately",
   "mcqTrap": "- Tempting wrong answer: '**a single negative thick and thin film excludes malaria**' — WRONG; one film's sensitivity is inadequate; repeat ×3 over 48–72 h\n- Also wrong: **empirical antibiotics for presumed typhoid** before excluding malaria",
   "viva": "- 'My single most important step is to **exclude malaria** — thick and thin films plus a rapid antigen test today, repeated **three times over 48–72 hours**'\n- Because **one negative film does not exclude it**\n- I speciate, quantify parasitaemia, and screen for **severe-disease criteria** that mandate IV artesunate and ICU",
   "mnemonic": "THICK = THief catcher (detect/screen); THIN = THIngs identified (species + %). 'Three negatives to be safe.'",
   "tags": [
    "malaria",
    "returned traveller",
    "thick film",
    "thin film",
    "falciparum",
    "parasitaemia"
   ],
   "cutoffs": [
    "Films repeated **×3 over 48–72 h** before excluding malaria",
    "Parasitaemia **>2%** = severe (non-immune)",
    "Severe falciparum → **IV artesunate** + ICU",
    "**Hb <70**, GCS drop, AKI, high lactate, hypoglycaemia = severe markers"
   ],
   "source": "eTG complete - Malaria (Therapeutic Guidelines, current); Australian Prescriber 'Fever in the returned traveller'; RACGP/ASID travel medicine guidance",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Film</th><th>Purpose</th><th>Reads</th></tr><tr><td>Thick</td><td>Screen / detect</td><td>Presence + parasite density (higher sensitivity)</td></tr><tr><td>Thin</td><td>Speciate + quantify</td><td>Species, parasitaemia %, RBC morphology</td></tr></table><div class=\"gv-flow\"><div class=\"gv-step\">Febrile traveller</div><div class=\"gv-step\">Thick+thin film + RDT TODAY</div><div class=\"gv-step\">If negative: repeat 12-24h x3</div><div class=\"gv-step\">Positive + severe criteria -> IV artesunate + ICU</div></div>",
   "title": "Fever in the returned traveller",
   "subtitle": "malaria thick & thin films - what to order first and how often",
   "id": "infectious-21",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Thick_blood_film_with_Plasmodium_falciparum_rings_and_schizonts.png",
     "caption": "Thick blood film - malaria parasites",
     "alt": "Thick blood film concentrating malaria parasites for screening/detection — more sensitive than thin film",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Plasmodium_falciparum_%28malaria%29_parasite_in_blood.jpg/960px-Plasmodium_falciparum_%28malaria%29_parasite_in_blood.jpg",
     "caption": "Thin blood film - Plasmodium falciparum ring forms",
     "alt": "Thin blood film showing P. falciparum ring-form trophozoites and parasitaemia percentage — used for speciation",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Hepatitis B serology interpretation - the window period & 'isolated anti-HBc' gotcha",
   "subarea": "Specific pathogens & travel/BBV",
   "whatFirst": "- Read the panel in order:\n  - **HBsAg** — current infection?\n  - **Anti-HBs** — immune?\n  - **Anti-HBc total + IgM** — exposed? acute?\n- **Acute vs chronic** = HBsAg persisting >6 months = chronic",
   "trap": "- **(1) Window period**: HBsAg has cleared but anti-HBs not yet positive — only positive marker is **anti-HBc IgM**\n- **(2) 'Vaccinated'** = anti-HBs POSITIVE, anti-HBc NEGATIVE (vaccine is surface antigen only, no core)\n- **(3) 'Past resolved infection'** = anti-HBs+ AND anti-HBc+\n- **(4) Isolated anti-HBc** (core+ only) = occult/resolving infection, false positive, or window period\n  - HBV can **REACTIVATE** with immunosuppression/chemo even with isolated anti-HBc",
   "discriminator": "- **Vaccinated**: anti-HBs+, anti-HBc NEGATIVE\n- **Resolved natural infection**: anti-HBs+, anti-HBc POSITIVE\n- The **core antibody** is the discriminator — vaccine never produces it",
   "redFlags": "- HBsAg+ patient about to start **chemotherapy/rituximab/immunosuppression** → antiviral prophylaxis to prevent reactivation\n- Even **isolated anti-HBc+** patients can reactivate — flag before immunosuppression\n- Acute liver failure (coagulopathy, encephalopathy) → **transplant unit**",
   "mcqTrap": "- Tempting wrong answer: '**anti-HBs positive means the patient had natural infection**' — WRONG; if anti-HBc is negative it is VACCINATION\n- Classic trap: forgetting to use **anti-HBc** to separate vaccine from past infection",
   "viva": "- 'I distinguish vaccination from past infection by the **core antibody** — vaccine gives anti-HBs without anti-HBc'\n- In the window period the only marker is **anti-HBc IgM**\n- Before immunosuppression I screen for HBV because **surface-antigen-positive or even isolated core-antibody-positive** patients can reactivate and need antiviral prophylaxis",
   "mnemonic": "'Core = caught it (natural infection or window); Surface-only = Shot (vaccine).' Chronic = HBsAg >6 months.",
   "tags": [
    "hepatitis B",
    "HBsAg",
    "anti-HBc",
    "anti-HBs",
    "window period",
    "reactivation"
   ],
   "cutoffs": [
    "Chronic = HBsAg persists **>6 months**",
    "Window period: only **anti-HBc IgM** positive",
    "Vaccinated = **anti-HBs+ / anti-HBc NEGATIVE**",
    "Resolved infection = **anti-HBs+ / anti-HBc+**",
    "Screen + **antiviral prophylaxis** before immunosuppression"
   ],
   "source": "eTG complete - Hepatitis B (Therapeutic Guidelines, current); ASHM HBV management; GESA consensus",
   "verified": false,
   "visualHtml": "<table class=\"gv-table\"><tr><th>HBsAg</th><th>anti-HBc</th><th>anti-HBs</th><th>Interpretation</th></tr><tr><td>+</td><td>+ (IgM)</td><td>-</td><td>Acute infection</td></tr><tr><td>+</td><td>+ (IgG)</td><td>-</td><td>Chronic (if &gt;6 mo)</td></tr><tr><td>-</td><td>+</td><td>+</td><td>Resolved past infection</td></tr><tr><td>-</td><td>-</td><td>+</td><td>Vaccinated</td></tr><tr><td>-</td><td>+</td><td>-</td><td>Window / isolated core / occult</td></tr></table>",
   "title": "Hepatitis B serology interpretation",
   "subtitle": "the window period & 'isolated anti-HBc' gotcha",
   "id": "infectious-22",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hepatitis_B_virus_phases_of_chronic_infection.png/960px-Hepatitis_B_virus_phases_of_chronic_infection.png",
     "caption": "Hepatitis B serology interpretation chart",
     "alt": "Chart mapping HBsAg / anti-HBs / anti-HBc IgM/IgG combinations to clinical states: acute infection, window period, resolved, vaccinated, chronic",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Hepatitis C - antibody vs RNA, and the 'cure' definition gotcha",
   "subarea": "Specific pathogens & travel/BBV",
   "whatFirst": "- Test **anti-HCV antibody** first; if positive, confirm active infection with **HCV RNA (PCR)**\n- Positive antibody alone = exposure, NOT necessarily current infection\n- **Genotyping** is largely unnecessary now with pan-genotypic DAAs",
   "trap": "- **(1) anti-HCV stays positive FOR LIFE** even after cure/clearance — antibody cannot confirm cure or active infection; **only RNA can**\n- **(2) 'Cure'** = **SVR12** = undetectable HCV RNA 12 weeks after finishing direct-acting antivirals (DAAs), which cure >95%\n- **(3) DAAs** are accessible in Australia on the PBS, prescribable by GPs for most patients\n- **(4) Reinfection is possible** — antibodies are not protective",
   "discriminator": "- **Active HCV**: antibody+ AND **RNA+**\n- **Past cleared/cured**: antibody+, **RNA NEGATIVE**\n- **RNA is the discriminator**\n- After successful DAAs the antibody persists — don't misread it as failed treatment",
   "redFlags": "- **Cirrhosis / decompensation** → needs HCC surveillance (6-monthly ultrasound) and specialist input even after cure\n- **Acute HCV post-needlestick** → repeat RNA testing (window) and refer",
   "mcqTrap": "- Tempting wrong answer: '**positive HCV antibody confirms current infection / treatment failure**' — WRONG; antibodies persist for life; check RNA\n- Also wrong: '**genotype must be determined before treatment**' — pan-genotypic DAAs make this largely redundant",
   "viva": "- 'Antibody tells me about exposure but **persists for life**, so I confirm active infection with **HCV RNA**'\n- Cure = **SVR12** — undetectable RNA twelve weeks after pan-genotypic DAAs\n- I can prescribe on the **PBS as a GP**\n- After cure the antibody stays positive and **reinfection is still possible**",
   "mnemonic": "'Antibody = ever exposed; RNA = currently active; SVR12 = cured.'",
   "tags": [
    "hepatitis C",
    "anti-HCV",
    "HCV RNA",
    "DAA",
    "SVR12",
    "cure"
   ],
   "cutoffs": [
    "Antibody+ → confirm with **HCV RNA**",
    "Antibody **persists for life** (cannot confirm cure)",
    "Cure = **SVR12** (undetectable RNA 12 wks post-treatment)",
    "DAAs cure **>95%**; pan-genotypic, GP-prescribable on PBS"
   ],
   "source": "Australian Recommendations for the Management of Hepatitis C Virus Infection (ASHM/GESA consensus, current); PBS DAA listings",
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">anti-HCV antibody</div><div class=\"gv-step\">If + -> HCV RNA (PCR)</div><div class=\"gv-step\">RNA+ = active -> pan-genotypic DAAs</div><div class=\"gv-step\">SVR12 (RNA undetectable 12 wks post) = CURED</div></div><div class=\"gv-pills\"><span class=\"gv-pill\">Antibody lifelong</span><span class=\"gv-pill\">Reinfection possible</span></div>",
   "title": "Hepatitis C",
   "subtitle": "antibody vs RNA, and the 'cure' definition gotcha",
   "id": "infectious-23"
  },
  {
   "topic": "HIV PEP (non-occupational & occupational) - the 72-hour window & current Australian regimen",
   "subarea": "Specific pathogens & travel/BBV",
   "whatFirst": "- Assess exposure risk and **SOURCE status FAST**\n- PEP must start as soon as possible and **within 72 hours** of exposure\n- Take a **baseline HIV test** before starting\n- Standard course = **28 days**",
   "trap": "- Preferred regimen: **tenofovir disoproxil/emtricitabine + dolutegravir** daily for 28 days\n- PEP is **NOT offered** if the source has an undetectable viral load (**U=U**)\n- Not offered for negligible-risk exposures (intact-skin, oral sex, community discarded-needle)\n- After **72 h** it is generally too late",
   "discriminator": "- **PEP**: after exposure, 28-day treatment course, time-critical 72 h window\n- **PrEP**: before/ongoing exposure, preventive\n- Person with repeated high-risk exposure presenting **>72 h** → transition to **PrEP**, not PEP",
   "redFlags": "- Source known HIV+ with **detectable/unknown viral load** + high-risk exposure (receptive anal, needle-sharing) = **strong PEP indication** — start now, refine with ID/sexual health\n- Always offer **hepatitis B/C and STI screening** + emergency contraception as relevant",
   "mcqTrap": "- Tempting wrong answer: '**offer PEP regardless of source viral load**' — NOT if source undetectable (U=U)\n- Also wrong: '**PEP can start up to 7 days later**' — window is **72 hours**\n- Also wrong: starting PEP without a **baseline HIV test**",
   "viva": "- 'PEP must begin within **72 hours** — sooner is better'\n- Baseline HIV test, then **28-day dolutegravir-based three-drug course**\n- Do NOT offer PEP if source is virally suppressed — **U=U**\n- Screen for hepatitis B/C and STIs; arrange follow-up testing\n- Transition to **PrEP** if exposure is ongoing",
   "mnemonic": "'PEP = 72 hours, 28 days, baseline test, but not if source U=U.'",
   "tags": [
    "PEP",
    "nPEP",
    "72 hours",
    "dolutegravir",
    "tenofovir emtricitabine",
    "U=U",
    "occupational exposure"
   ],
   "cutoffs": [
    "Start within **72 h** (sooner = better)",
    "Course = **28 days**",
    "**3-drug**: tenofovir disoproxil/emtricitabine + dolutegravir (preferred)",
    "**NOT offered** if source viral load undetectable (U=U)",
    "**Baseline HIV test** before starting; repeat follow-up testing"
   ],
   "source": "ASHM National Guidelines for PEP after Non-Occupational and Occupational Exposure to HIV (pep.guidelines.org.au, current)",
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Exposure</div><div class=\"gv-step\">Within 72h: baseline HIV test</div><div class=\"gv-step\">Assess source: undetectable VL = NO PEP (U=U)</div><div class=\"gv-step\">High risk -> 28-day tenofovir disoproxil/emtricitabine + dolutegravir</div><div class=\"gv-step\">Follow-up testing; transition to PrEP if ongoing</div></div>",
   "title": "HIV PEP (non-occupational & occupational)",
   "subtitle": "the 72-hour window & current Australian regimen",
   "id": "infectious-24"
  },
  {
   "topic": "HIV PrEP - eligibility, regimens & monitoring gotcha (vs PEP)",
   "subarea": "Specific pathogens & travel/BBV",
   "whatFirst": "- PrEP is PREVENTIVE for **HIV-negative people at substantial ongoing risk**\n- **Confirm HIV-negative** (including excluding acute HIV) BEFORE starting — starting PrEP during undiagnosed acute HIV risks **resistance**\n- Check baseline **renal function and hepatitis B status**\n- Then review **3-monthly** (HIV/STI/renal)",
   "trap": "- Standard PrEP = **daily oral tenofovir disoproxil/emtricitabine (TDF/FTC)**\n- **'On-demand' 2-1-1 dosing** is an option only for cis men having anal sex — NOT for vaginal/receptive-front-hole exposure\n- Must **exclude acute HIV first** (4th-gen +/- RNA) before starting\n- Check **hepatitis B** — stopping TDF can cause an **HBV flare**\n- **Doxy-PEP** (doxycycline post-exposure for bacterial STI prevention) is a separate emerging recommendation, not HIV PrEP",
   "discriminator": "- **PrEP**: HIV-negative, ongoing prevention, daily or 2-1-1\n- **PEP**: after a discrete exposure, 28-day course, 72 h window\n- If high-risk exposure within 72 h and needs cover NOW → **PEP first**, then bridge to PrEP",
   "redFlags": "- Symptoms of **acute HIV at PrEP initiation** → do NOT start until acute HIV excluded (resistance risk)\n- **Declining eGFR** → review TDF\n- New **HIV seroconversion on PrEP** → switch to full treatment urgently",
   "mcqTrap": "- Tempting wrong answer: '**start PrEP immediately without confirming HIV-negative status**' — risks resistance if acute HIV\n- Also wrong: '**on-demand 2-1-1 dosing is fine for receptive vaginal sex**' — evidence supports event-based only for anal sex in cis men",
   "viva": "- 'Before PrEP I confirm the person is **HIV-negative including excluding acute infection**, check renal function and hepatitis B'\n- Then review **3-monthly** for HIV, STIs, and renal function\n- **Daily TDF/FTC** is standard; **event-based 2-1-1** only for anal sex in cis men\n- If exposure in the last 72 hours → **PEP first then bridge to PrEP**",
   "mnemonic": "'PrEP = Prevent (negative, ongoing). 3-monthly review. Exclude acute HIV first.'",
   "tags": [
    "PrEP",
    "tenofovir emtricitabine",
    "2-1-1 on-demand",
    "HIV prevention",
    "hepatitis B",
    "doxy-PEP"
   ],
   "cutoffs": [
    "Confirm **HIV-negative** (exclude acute) before starting",
    "Daily **TDF/FTC** standard; **2-1-1** event-based only for anal sex (cis men)",
    "Baseline + **3-monthly** HIV/STI/renal monitoring",
    "Check **HBV** — TDF cessation flare risk"
   ],
   "source": "ASHM PrEP Guidelines (prepguidelines.com.au, current); pep.guidelines.org.au (PEP-to-PrEP transition)",
   "verified": false,
   "visualHtml": "<table class=\"gv-table\"><tr><th></th><th>PrEP</th><th>PEP</th></tr><tr><td>When</td><td>Before / ongoing risk</td><td>After exposure (&lt;72h)</td></tr><tr><td>Status</td><td>HIV-negative</td><td>HIV-negative, post-exposure</td></tr><tr><td>Regimen</td><td>Daily TDF/FTC (or 2-1-1)</td><td>TDF/FTC + dolutegravir x28d</td></tr></table>",
   "title": "HIV PrEP",
   "subtitle": "eligibility, regimens & monitoring gotcha (vs PEP)",
   "id": "infectious-25"
  },
  {
   "topic": "HIV seroconversion (acute retroviral syndrome) & the window-period testing gotcha",
   "subarea": "Specific pathogens & travel/BBV",
   "whatFirst": "- Consider acute HIV in anyone with a **mononucleosis-like / flu-like illness** (fever, rash, pharyngitis, lymphadenopathy, mucocutaneous ulcers) 2–4 weeks after a risk exposure\n- Order a **4th-generation HIV Ag/Ab combo** (p24 antigen + antibody)\n- **AND consider HIV RNA viral load** if very early",
   "trap": "- In the earliest window, antibodies may be **NEGATIVE** but p24 antigen / HIV RNA **POSITIVE**\n- **4th-gen Ag/Ab test** detects most infections by ~2–4 weeks and effectively all by **6 weeks** (~45-day lab window)\n- If acute HIV is strongly suspected but the combo test is negative/indeterminate very early → order **HIV RNA**\n- A **negative antibody-only test early does NOT exclude acute HIV**",
   "discriminator": "- **Acute HIV** vs EBV/CMV mononucleosis:\n  - HIV more often has **maculopapular rash + painful mucocutaneous ulcers + diarrhoea**\n  - Discriminating test: **4th-gen Ag/Ab combo / HIV RNA**\n  - Don't anchor on 'glandular fever'",
   "redFlags": "- **Very high transmissibility** during acute seroconversion (high viral load)\n- Diagnosing here enables **early treatment + partner protection**\n- **Notifiable disease** — confidential notification required",
   "mcqTrap": "- Tempting wrong answer: '**a negative HIV antibody test 10 days post-exposure excludes HIV**' — WRONG\n  - Antibodies lag; need **p24 antigen / RNA** in the window\n  - Repeat **4th-gen testing at 6 weeks**",
   "viva": "- 'For suspected acute HIV I use a **4th-generation antigen/antibody assay** and, if very early, an **HIV RNA**'\n- Because antibodies may not yet be detectable\n- I explain consent and confidentiality, discuss the **high transmissibility of seroconversion**, and **notify confidentially**\n- A negative antibody-only test does **not exclude it**",
   "mnemonic": "'p24 before the antibody' - antigen rises first; combo test by 6 weeks is definitive.",
   "tags": [
    "HIV",
    "seroconversion",
    "acute retroviral syndrome",
    "p24 antigen",
    "4th generation test",
    "window period"
   ],
   "cutoffs": [
    "4th-gen Ag/Ab combo: most detected **~2–4 wk**, ~all by **6 wk** (~45-day window)",
    "Acute phase: **RNA/p24 positive** before antibody",
    "Repeat testing at **6 weeks** if early negative",
    "HIV is a **notifiable condition**"
   ],
   "source": "ASHM HIV testing guidance (Australia, current); Australasian STI/BBV testing standards; 4th-gen assay window per laboratory standards",
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Exposure</div><div class=\"gv-step\">HIV RNA detectable ~10-11 days</div><div class=\"gv-step\">p24 antigen positive next (~2 wk)</div><div class=\"gv-step\">Antibody positive last (combo by 6 wk)</div></div>",
   "title": "HIV seroconversion (acute retroviral syndrome) & the…",
   "id": "infectious-26"
  },
  {
   "topic": "Influenza & COVID antivirals - the timing windows that decide eligibility",
   "subarea": "Specific pathogens & travel/BBV",
   "whatFirst": "- For at-risk patients, treat **EARLY**: confirm symptom-onset timing because antivirals only help inside their window\n- Influenza → **oseltamivir within 48 h**\n- COVID-19 → **nirmatrelvir/ritonavir (Paxlovid)** or molnupiravir, started ASAP and **no later than day 5** of symptoms",
   "trap": "- Two windows differ: **influenza oseltamivir = within 48 hours**; **COVID nirmatrelvir/ritonavir = within 5 days**\n- Antivirals target **HIGH-RISK groups** (≥70, or ≥50 for ATSI, pregnancy, immunocompromise, chronic disease, residential aged care) — not routinely healthy young adults\n- **Paxlovid has major CYP3A drug interactions** (statins, anticoagulants, some immunosuppressants) — check before prescribing\n- Influenza antivirals are **NOT on the PBS**; COVID antivirals are **PBS-subsidised** for eligible patients",
   "discriminator": "- **Influenza**: 48 h oseltamivir window\n- **COVID**: 5-day window\n- Both notifiable\n- **Do not apply the COVID 5-day window to influenza or vice versa**",
   "redFlags": "- Severe respiratory distress / hypoxia / sepsis → **hospital** regardless of antiviral window\n- **Paxlovid + contraindicated interacting drug** → use molnupiravir or seek advice\n- **Severe renal impairment** → dose-adjust/avoid Paxlovid",
   "mcqTrap": "- Tempting wrong answer: '**start oseltamivir 4 days into influenza for maximal benefit**' — window is **48 h**\n- Also wrong: '**prescribe Paxlovid without checking the patient's statin/anticoagulant**' — serious CYP3A interactions\n- Also wrong: treating all healthy adults rather than **risk groups**",
   "viva": "- 'Timing decides eligibility: **oseltamivir within 48 hours** for influenza, **nirmatrelvir/ritonavir within five days** for COVID, both targeted at high-risk patients'\n- Before Paxlovid I screen for **CYP3A interactions** like statins and anticoagulants\n- Both are **notifiable conditions**",
   "mnemonic": "'Flu = 48 (2 days); COVID = 5 days.' Paxlovid = check the drug interactions.",
   "tags": [
    "influenza",
    "oseltamivir",
    "COVID-19",
    "nirmatrelvir ritonavir",
    "Paxlovid",
    "antiviral window",
    "drug interactions"
   ],
   "cutoffs": [
    "Oseltamivir: start within **48 h** of symptoms",
    "Nirmatrelvir/ritonavir or molnupiravir: ASAP, by **day 5**",
    "Target **high-risk groups** (age, ATSI, pregnant, immunocompromised, chronic disease, RACF)",
    "Paxlovid: major **CYP3A interactions** — review meds; **renal dose-adjust**"
   ],
   "source": "Australian PBS criteria for COVID-19 oral antivirals; eTG complete - Influenza & COVID-19 (current); healthdirect / NSW Health antiviral factsheets",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Illness</th><th>Drug</th><th>Window</th></tr><tr><td>Influenza</td><td>Oseltamivir</td><td>Within 48h</td></tr><tr><td>COVID-19</td><td>Nirmatrelvir/ritonavir (or molnupiravir)</td><td>By day 5</td></tr></table><div class=\"gv-pills\"><span class=\"gv-pill\">High-risk only</span><span class=\"gv-pill\">Paxlovid = CYP3A interactions</span></div>",
   "title": "Influenza & COVID antivirals",
   "subtitle": "the timing windows that decide eligibility",
   "id": "infectious-27"
  },
  {
   "topic": "Malaria chemoprophylaxis & the 'no prophylaxis is 100%' gotcha",
   "subarea": "Specific pathogens & travel/BBV",
   "whatFirst": "- At a pre-travel consult, **match agent to destination resistance + traveller factors**\n- Options:\n  - **Atovaquone-proguanil**: daily, start 1–2 days before, stop **7 days** after leaving\n  - **Doxycycline**: daily, also covers leptospirosis/rickettsia, stop **4 weeks** after\n  - **Mefloquine**: weekly, start ~1–2 weeks before, stop **4 weeks** after; neuropsychiatric caution\n- Reinforce **bite avoidance** regardless of agent",
   "trap": "- **No chemoprophylaxis is 100% effective** — bite avoidance (DEET, nets, covering) is essential alongside drugs\n- ANY fever during or after travel still needs **malaria excluded with films** even if prophylaxis was taken\n- Duration after leaving differs by agent:\n  - **Atovaquone-proguanil**: only **7 days** (causal/liver-stage activity)\n  - **Doxycycline and mefloquine**: **4 weeks** (blood-stage only; must outlast liver-to-blood emergence)\n- Standard prophylaxis does **NOT prevent vivax/ovale relapse** — terminal prophylaxis (**primaquine**, after G6PD testing) is a separate consideration for heavy exposure",
   "discriminator": "- **Atovaquone-proguanil**: daily, stop **7 days** after leaving\n- **Doxycycline/mefloquine**: stop **4 weeks** after leaving\n- The **7-day vs 4-week tail** is the classic MCQ catch — reflects causal vs suppressive activity",
   "redFlags": "- **Pregnancy and young children**: doxycycline contraindicated; agent choice is restricted — specialist/travel-clinic input\n- **Mefloquine neuropsychiatric history** → avoid\n- **Fever post-travel despite prophylaxis** → still exclude malaria (breakthrough/non-adherence)",
   "mcqTrap": "- Tempting wrong answer: '**chemoprophylaxis was taken so malaria is excluded**' — NO prophylaxis is fully protective; still do films\n- Also wrong: '**atovaquone-proguanil must be continued 4 weeks after return**' — only **7 days**; it is doxycycline/mefloquine that need 4 weeks",
   "viva": "- 'I match the agent to destination resistance and the traveller, but I stress that **no prophylaxis is one hundred percent**'\n- Bite avoidance is essential and any **post-travel fever still needs malaria films**\n- **Atovaquone-proguanil stops seven days** after leaving, whereas doxycycline and mefloquine continue for **four weeks** because they only act on the blood stage",
   "mnemonic": "'Atovaquone = 7 days; doxy/mefloquine = 4 weeks.' No prophylaxis is 100% - always do films for fever.",
   "tags": [
    "malaria prophylaxis",
    "atovaquone-proguanil",
    "doxycycline",
    "mefloquine",
    "bite avoidance",
    "pre-travel"
   ],
   "cutoffs": [
    "Atovaquone-proguanil: start 1–2 days before, stop **7 days** after leaving",
    "Doxycycline: daily, stop **4 weeks** after leaving",
    "Mefloquine: weekly, start ~1–2 weeks before, stop **4 weeks** after",
    "No regimen **100%** — bite avoidance + films for any fever"
   ],
   "source": "RACGP 'Prevention of malaria in travellers'; eTG complete - Malaria prophylaxis (Therapeutic Guidelines, current); CDC Yellow Book (dosing tails)",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Agent</th><th>Schedule</th><th>Stop after leaving</th></tr><tr><td>Atovaquone-proguanil</td><td>Daily, start 1-2 days before</td><td>7 days</td></tr><tr><td>Doxycycline</td><td>Daily</td><td>4 weeks</td></tr><tr><td>Mefloquine</td><td>Weekly, start ~1-2 wk before</td><td>4 weeks</td></tr></table><div class=\"gv-pills\"><span class=\"gv-pill\">No regimen 100%</span><span class=\"gv-pill\">Bite avoidance</span><span class=\"gv-pill\">Fever = films anyway</span></div>",
   "title": "Malaria chemoprophylaxis & the 'no prophylaxis is…",
   "id": "infectious-28",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Malaria_falciparum_ring_forms.jpg/960px-Malaria_falciparum_ring_forms.jpg",
     "caption": "Malaria - Plasmodium falciparum thick and thin blood film",
     "alt": "Ring-form trophozoites of Plasmodium falciparum on Giemsa-stained blood film",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Malaria treatment by species & severity (Australian eTG)",
   "subarea": "Specific pathogens & travel/BBV",
   "whatFirst": "- Decide **two things** in order:\n  - (1) Is it **severe/complicated falciparum**? → IV artesunate + ICU\n  - (2) Is it **vivax/ovale**? → blood-stage treatment THEN check G6PD before primaquine 'radical cure' to kill liver hypnozoites",
   "trap": "- Uncomplicated falciparum (and most species) in Australia = oral **artemether-lumefantrine** (Riamet)\n- Vivax/ovale need a **second drug — primaquine** — for the hypnozoite liver stage to prevent relapse\n  - Must **test G6PD first** (haemolysis risk)\n- Severe falciparum = **IV artesunate** (imported via TGA Special Access Scheme; not standard-registered)",
   "discriminator": "- **Relapse** (vivax/ovale): weeks-months later, from liver hypnozoites — needs primaquine\n- **Recrudescence** (falciparum/malariae): inadequate blood-stage clearance — no liver stage\n- Only **vivax/ovale** can truly relapse",
   "redFlags": "- Severe falciparum criteria → **IV artesunate immediately**, do NOT wait for oral:\n  - GCS drop, parasitaemia **>2%**, lactate/acidosis, AKI, ARDS, hypoglycaemia, shock\n- **Pregnancy**: avoid primaquine and some agents — specialist input required",
   "mcqTrap": "- Wrong: '**give primaquine before checking G6PD**' — causes severe haemolysis in G6PD deficiency\n- Wrong: '**primaquine alone** treats acute vivax' — does NOT clear the blood stage; need a blood schizonticide too\n- Wrong: **oral therapy** for severe falciparum",
   "viva": "- Uncomplicated infection → oral **artemether-lumefantrine**\n- Severe falciparum → **IV artesunate** + ICU\n- Vivax: treat blood stage then add **primaquine for radical cure** of liver hypnozoites\n  - Only after confirming **G6PD status** to avoid haemolysis",
   "mnemonic": "'vivax = liVer relapse needs Primaquine; check G6PD before Primaquine.'",
   "tags": [
    "malaria treatment",
    "artesunate",
    "artemether-lumefantrine",
    "primaquine",
    "G6PD",
    "vivax relapse"
   ],
   "cutoffs": [
    "Uncomplicated → oral **artemether-lumefantrine** (Riamet)",
    "Severe falciparum → **IV artesunate** (TGA SAS) + ICU",
    "Vivax/ovale → blood schizonticide + **primaquine** radical cure",
    "**G6PD test** mandatory before primaquine/tafenoquine"
   ],
   "source": "eTG complete - Malaria treatment (Therapeutic Guidelines, current); ASID guidance",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Scenario</th><th>Treatment</th></tr><tr><td>Uncomplicated falciparum/most</td><td>Oral artemether-lumefantrine (Riamet)</td></tr><tr><td>Severe/complicated falciparum</td><td>IV artesunate + ICU</td></tr><tr><td>Vivax/ovale acute</td><td>Blood schizonticide + primaquine (after G6PD)</td></tr></table>",
   "title": "Malaria treatment by species & severity (Australian eTG)",
   "id": "infectious-29",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Plasmodium_vivax_with_characteristic_Schuffners_Dots.jpg/960px-Plasmodium_vivax_with_characteristic_Schuffners_Dots.jpg",
     "caption": "Plasmodium vivax blood film - enlarged erythrocytes with Schüffner dots",
     "alt": "Plasmodium vivax trophozoites in enlarged red cells with Schüffner stippling",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/P._falciparum_thin_smear_ring_forms_and_gametocyte.jpg/960px-P._falciparum_thin_smear_ring_forms_and_gametocyte.jpg",
     "caption": "Plasmodium falciparum blood film - multiple ring forms, no Schüffner dots",
     "alt": "Falciparum malaria ring forms, multiple per cell, no stippling, smaller red cells",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Needlestick / BBV occupational exposure - immediate steps & relative transmission risks",
   "subarea": "Specific pathogens & travel/BBV",
   "whatFirst": "- **Immediate first aid**: wash with soap/water (do NOT squeeze or suck); irrigate mucosa/eyes with saline/water\n- Then **risk-assess** source and recipient\n- Take **baseline bloods** (HIV, HBV, HCV) on both with consent\n- Decide **HIV PEP within 72 h**",
   "trap": "- Per-exposure transmission risks from a positive-source percutaneous injury (highest to lowest):\n  - **HBV ~6–30%** (up to ~1 in 3 if HBeAg+)\n  - **HCV ~3%** (~1 in 30)\n  - **HIV ~0.3%** (~1 in 300)\n- Students reverse these and assume **HIV is the biggest risk** — it is the smallest\n- HBV: if recipient has documented **anti-HBs ≥10** → protected; if non-immune → HBIG + vaccine\n- **No PEP exists for HCV** — monitor with RNA and treat if seroconversion occurs",
   "discriminator": "- **HBV**: most transmissible AND has effective post-exposure prophylaxis (HBIG + vaccine)\n- **HIV**: needs the **72 h PEP decision**\n- **HCV**: **no prophylaxis** — surveillance only; do NOT give 'HCV PEP'",
   "redFlags": "- High-risk HIV source (detectable VL, hollow-bore deep injury, visible blood) → **start PEP now**\n- Source with **undetectable HIV VL** → PEP generally not indicated (U=U)\n- Escalate to occupational health / ID / sexual health **same day**",
   "mcqTrap": "- Wrong: '**HIV is the highest transmission risk** from a needlestick' — HBV is highest (~1 in 3 if e-antigen positive), HIV ~1 in 300\n- Wrong: '**give HCV immunoglobulin**' — none exists",
   "viva": "- First aid and irrigation, then **baseline serology** on source and recipient with consent\n- **HBV** most transmissible — prophylaxis with immunoglobulin and vaccine\n- **HIV** — PEP decision within 72 hours; not if source is undetectable\n- **HCV** — no prophylaxis; monitor RNA and treat if seroconversion occurs",
   "mnemonic": "'30-3-0.3 = HBV, HCV, HIV' (rough per-exposure % from positive source).",
   "tags": [
    "needlestick",
    "occupational exposure",
    "BBV",
    "transmission risk",
    "HBIG",
    "PEP"
   ],
   "cutoffs": [
    "**HBV ~6–30%** (up to ~1 in 3 if HBeAg+); HCV ~3% (~1 in 30); HIV ~0.3% (~1 in 300)",
    "**HIV PEP decision within 72 h** (not if source U=U)",
    "HBV: **anti-HBs ≥10** = protected; else HBIG + vaccine",
    "HCV: **no PEP** — surveillance with RNA"
   ],
   "source": "ASHM PEP Guidelines (pep.guidelines.org.au, current); CEC/NSW Health BBV exposure management; eTG complete (current)",
   "verified": false,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Virus</th><th>~Risk (percutaneous, +source)</th><th>Prophylaxis</th></tr><tr><td>HBV</td><td>up to ~1 in 3</td><td>HBIG + vaccine (if non-immune)</td></tr><tr><td>HCV</td><td>~1 in 30</td><td>NONE - monitor RNA</td></tr><tr><td>HIV</td><td>~1 in 300</td><td>PEP within 72h (not if U=U)</td></tr></table>",
   "title": "Needlestick / BBV occupational exposure",
   "subtitle": "immediate steps & relative transmission risks",
   "id": "infectious-30"
  },
  {
   "topic": "Notifiable disease obligations - who notifies, how urgently, and confidentiality",
   "subarea": "Specific pathogens & travel/BBV",
   "whatFirst": "- Notification is a **legal obligation** under the relevant Public Health Act\n- Some conditions require **urgent notification** (phone/same day on suspicion — do not wait for confirmation)\n- Most are **routine written notification**\n- Both **treating doctors AND laboratories** must notify",
   "trap": "- **(1) URGENT** (notify on suspicion, by phone, immediately/same day):\n  - **Measles, meningococcal disease**, acute viral haemorrhagic fevers, diphtheria, cholera, plague, rabies/lyssavirus, polio, pertussis, foodborne illness in 2+ related cases\n  - Rationale: public-health action (contact tracing/prophylaxis) is **time-critical**\n- **(2) Routine**: HIV, hepatitis B/C, malaria, dengue, typhoid (TB often urgent)\n- Notification **overrides usual confidentiality** (lawful disclosure) — data are protected/de-identified\n- **HIV notification** is confidential/coded",
   "discriminator": "- **Urgent** (suspect measles/meningococcus → phone public health NOW, before confirmation)\n  - Needed when immediate public-health control (contacts, prophylaxis, outbreak) is required\n- **Routine** (HIV/HCV → standard notification)",
   "redFlags": "- Suspected **meningococcaemia or measles** → give treatment AND phone the local public health unit **same day** to enable contact tracing/chemoprophylaxis; do not wait for lab confirmation\n- Returned-traveller **VHF risk** → isolate + urgent notification",
   "mcqTrap": "- Wrong: '**wait for laboratory confirmation** before notifying suspected meningococcal disease' — urgent conditions notified on clinical suspicion\n- Wrong: '**notification requires patient consent**' — it is a lawful mandatory disclosure that overrides confidentiality",
   "viva": "- Notification is a **legal duty** for both clinicians and labs\n- For urgent conditions (e.g. suspected meningococcal disease or measles) → **phone the public health unit same day on clinical suspicion**, before lab confirmation\n  - Enables contact tracing and prophylaxis to start immediately\n- This is a **lawful disclosure** that overrides usual confidentiality\n- **HIV** is notified confidentially",
   "mnemonic": "'Urgent = ring; routine = write.' Suspect meningococcus/measles -> phone, don't wait.",
   "tags": [
    "notifiable disease",
    "public health act",
    "meningococcal",
    "measles",
    "mandatory notification",
    "confidentiality"
   ],
   "cutoffs": [
    "**Urgent** (phone, on suspicion, same day): measles, meningococcal, VHF, diphtheria, cholera, plague, rabies/lyssavirus, polio",
    "**Routine** (written): HIV (confidential), HBV, HCV, malaria, dengue, typhoid",
    "Both **clinician AND laboratory** must notify",
    "**Lawful disclosure** — overrides usual confidentiality"
   ],
   "source": "NSW Public Health Act 2010 notifiable conditions schedule; National Notifiable Diseases Surveillance System (NNDSS); state Health notification guidance (current)",
   "verified": false,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Tempo</th><th>Examples</th><th>Why</th></tr><tr><td>URGENT (phone, on suspicion)</td><td>Measles, meningococcal, VHF, diphtheria, cholera, polio, rabies</td><td>Time-critical contact tracing/prophylaxis</td></tr><tr><td>Routine (written)</td><td>HIV (confidential), HBV, HCV, malaria, dengue, typhoid</td><td>Surveillance</td></tr></table><div class=\"gv-pills\"><span class=\"gv-pill\">Clinician notifies</span><span class=\"gv-pill\">Lab notifies</span><span class=\"gv-pill\">Lawful - no consent needed</span></div>",
   "title": "Notifiable disease obligations",
   "subtitle": "who notifies, how urgently, and confidentiality",
   "id": "infectious-31"
  },
  {
   "topic": "Rickettsial infection (scrub/spotted fever) - the eschar & doxycycline gotcha",
   "subarea": "Specific pathogens & travel/BBV",
   "whatFirst": "- In a febrile traveller (SE Asia, rural; or northern Australia) hunt for:\n  - **Eschar** (black painless scab at a bite/tick site)\n  - Regional **lymphadenopathy**\n  - **Rash**\n- If suspected, **start empirical doxycycline early** — do not wait for serology (retrospective)",
   "trap": "- Serology confirms only in **convalescence** — treatment is **clinical**, not serological\n- **Doxycycline** is first-line and dramatically effective — rapid defervescence supports the diagnosis\n- Eschar is often **small and painless** and easily missed\n- **Beta-lactams** and usual sepsis antibiotics do **NOT cover rickettsia**",
   "discriminator": "- **Rickettsia**: eschar + rash + headache, responds fast to doxycycline\n- **Typhoid**: no eschar, relative bradycardia\n- **Malaria**: parasites on blood film, no eschar\n- The **eschar** is the giveaway",
   "redFlags": "- Severe scrub typhus → **encephalitis, ARDS, multi-organ failure**\n- Add **doxycycline** to empirical sepsis cover in a returned traveller even when source is unclear",
   "mcqTrap": "- Wrong: '**wait for confirmatory serology** before treating' — serology is retrospective; delay kills\n- Wrong: '**treat with ceftriaxone**' — no rickettsial cover; needs doxycycline",
   "viva": "- Look specifically for an **eschar**\n- If rickettsia suspected, **start doxycycline empirically** rather than waiting for retrospective serology\n  - Response is rapid; disease can be **fatal if untreated**",
   "mnemonic": "'Eschar + fever = doxy now, serology later.'",
   "tags": [
    "rickettsia",
    "scrub typhus",
    "eschar",
    "doxycycline",
    "spotted fever"
   ],
   "cutoffs": [
    "Treat **empirically** on clinical suspicion",
    "**Doxycycline** first-line",
    "**Serology is retrospective** — do not delay"
   ],
   "source": "eTG complete - Rickettsial infections (Therapeutic Guidelines, current); ASID; Australian Prescriber returned-traveller guidance",
   "verified": false,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Eschar</span><span class=\"gv-pill\">Rash</span><span class=\"gv-pill\">Headache</span><span class=\"gv-pill\">-> Doxycycline NOW</span></div>",
   "title": "Rickettsial infection (scrub/spotted fever)",
   "subtitle": "the eschar & doxycycline gotcha",
   "id": "infectious-32",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Scalp_Eschar.jpg",
     "caption": "Rickettsial eschar - tache noire at site of mite bite (scrub typhus/spotted fever)",
     "alt": "Rickettsial eschar - tache noire at site of mite bite (scrub typhus/spotted fever)",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Typhoid / enteric fever: when to give empirical antibiotics & the relative bradycardia clue",
   "subarea": "Specific pathogens & travel/BBV",
   "whatFirst": "- Suspect enteric fever in a traveller from the **Indian subcontinent** with:\n  - Progressive fever, abdominal pain, **relative bradycardia**, ± rose spots, constipation OR diarrhoea\n- **Exclude malaria first**\n- Diagnose by **blood cultures** (bone marrow if needed) — Widal serology is unreliable",
   "trap": "- (1) **Widal serology is unreliable** — culture is the diagnostic standard\n- (2) Empirical therapy given only **after malaria excluded**\n- (3) **Fluoroquinolone (ciprofloxacin) resistance** is now widespread in South Asian S. Typhi, including XDR strains\n  - XDR susceptible only to **azithromycin and carbapenems**\n  - Empirically prefer **ceftriaxone/azithromycin**, NOT cipro",
   "discriminator": "- **Typhoid**: relative bradycardia (Faget sign), rose spots, GI ± constipation early, blood culture positive\n- **Malaria**: parasites on film, no rose spots\n- **Relative bradycardia** = pulse lower than expected for the fever height",
   "redFlags": "- **Week 3 complications**: GI haemorrhage and intestinal **perforation** (peritonitis), encephalopathy\n- Perforation/peritonism → **surgical emergency** + resuscitation + broaden antibiotic cover",
   "mcqTrap": "- Wrong: '**empirical ciprofloxacin**' — fluoroquinolone resistance now common/XDR in South Asian Typhi; use ceftriaxone or azithromycin\n- Wrong: '**diagnose with Widal serology**' — unreliable; use cultures",
   "viva": "- **Exclude malaria first**, then take blood cultures — not Widal serology\n- Given widespread **fluoroquinolone resistance** in South Asian S. Typhi → treat empirically with **ceftriaxone or azithromycin**\n- Watch for **week-3 intestinal perforation** — surgical emergency",
   "mnemonic": "Typhoid = 'Faget's (relative brady) + Rose spots + Resistant to cipro from South Asia.'",
   "tags": [
    "typhoid",
    "enteric fever",
    "Salmonella Typhi",
    "relative bradycardia",
    "ceftriaxone",
    "fluoroquinolone resistance"
   ],
   "cutoffs": [
    "Diagnosis = **blood cultures** (Widal unreliable)",
    "Empirical: **ceftriaxone IV or azithromycin** (NOT cipro due to resistance)",
    "**XDR** South Asian Typhi: susceptible only to azithromycin + carbapenems",
    "**Week 3** = perforation/haemorrhage risk"
   ],
   "source": "eTG complete - Gastrointestinal infections/Salmonella (Therapeutic Guidelines, current); CDC Yellow Book; Australian Prescriber returned-traveller article",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Clue</th><th>Significance</th></tr><tr><td>Relative bradycardia (Faget)</td><td>Classic typhoid sign</td></tr><tr><td>Indian subcontinent travel</td><td>High prior probability</td></tr><tr><td>Blood culture +</td><td>Diagnostic (Widal unreliable)</td></tr><tr><td>Week 3 perforation</td><td>Surgical emergency</td></tr></table>",
   "title": "Typhoid / enteric fever",
   "subtitle": "when to give empirical antibiotics & the relative bradycardia clue",
   "id": "infectious-33",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Salmonella_typhi_typhoid_fever_PHIL_2215_lores.jpg/960px-Salmonella_typhi_typhoid_fever_PHIL_2215_lores.jpg",
     "caption": "Typhoid - rose spots on abdomen",
     "alt": "Salmon-coloured rose spots on the abdomen in typhoid fever",
     "credit": "Wikimedia Commons"
    }
   ]
  }
 ]
}
);
