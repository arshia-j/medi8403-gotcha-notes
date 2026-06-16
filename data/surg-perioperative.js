window.GOTCHA = window.GOTCHA || { modules: [] };
window.GOTCHA.modules.push(
{
 "id": "surg-perioperative",
 "name": "Perioperative Care",
 "category": "Surgery",
 "blurb": "Written-exam + VIVA. ASA/METs/RCRI risk, which drugs to stop/continue, fluids, VTE prophylaxis.",
 "cards": [
  {
   "topic": "Airway assessment — Mallampati, the 3-3-2 rule, and predictors of difficult intubation/ventilation",
   "subarea": "Preoperative assessment & risk",
   "discriminator": "- **Mallampati alone is a weak predictor** — high sensitivity/low specificity; never rely on it alone\n- Difficult **laryngoscopy/intubation** predictors differ from difficult **mask ventilation** predictors — do not conflate\n- **Mallampati** assessed: sitting, mouth open, tongue out, NO phonation\n- Discriminate **Mallampati** (what you see preop) from **Cormack–Lehane** (what the laryngoscopist sees at laryngoscopy):\n  - Cormack–Lehane is a different grade, intra-op, **not knowable preop**",
   "whatFirst": "- **Bundle the bedside tests (LEMON)**; a single abnormal test matters less than a constellation\n- If multiple predictors positive → plan **awake/difficult-airway approach BEFORE induction**",
   "cutoffs": [
    "**Mallampati I**: soft palate, uvula, fauces, pillars; **II**: soft palate, uvula, fauces; **III**: soft palate + base of uvula only; **IV**: hard palate only (III–IV predict difficulty)",
    "**3-3-2 rule**: mouth opening ≥3 fingerbreadths; chin–hyoid ≥3 fingerbreadths; hyoid–thyroid notch ≥2 fingerbreadths",
    "**Thyromental distance <6 cm** (≈3 fingerbreadths) = difficult",
    "**Inter-incisor (mouth opening) <3 cm** = difficult"
   ],
   "redFlags": "- **Stridor**\n- **Neck mass/goitre**\n- Prior **head-and-neck radiotherapy/surgery**\n- **Restricted neck** (rheumatoid C-spine, ankylosing spondylitis, hard collar)\n- **OSA**\n- Previous **difficult-intubation note**\n- Above → senior anaesthetist + **difficult-airway trolley / awake fibreoptic plan**",
   "trap": "- Most tempting wrong answer: choosing **Mallampati** as the 'best single predictor' of difficult intubation — it is **poor in isolation**\n- Difficult mask ventilation has its OWN predictors (**BONES**)",
   "mcqTrap": "- Confusing **Mallampati grade** with **Cormack–Lehane grade**\n  - Mallampati is the **preoperative bedside look**\n  - Cormack–Lehane is graded **at direct laryngoscopy** and is not knowable preop",
   "viva": "- Examiner: 'How do you assess this airway?'\n  - Run **LEMON** out loud: Look – Evaluate 3-3-2 – Mallampati – Obstruction – Neck\n- Anticipated difficult airway → **awake technique**, senior help, shared plan, **document**",
   "mnemonic": "LEMON: Look externally, Evaluate 3-3-2, Mallampati, Obstruction, Neck mobility. Difficult mask vent = BONES (Beard, Obese, No teeth, Elderly, Snores).",
   "source": "ANZCA airway management resources; modified Mallampati (Samsoon & Young) classification; LEMON / 3-3-2 rule (standard difficult-airway assessment)",
   "tags": [
    "airway",
    "Mallampati",
    "LEMON",
    "difficult intubation",
    "perioperative"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">L — Look externally</span><span class=\"gv-pill\">E — Evaluate 3-3-2</span><span class=\"gv-pill\">M — Mallampati</span><span class=\"gv-pill\">O — Obstruction</span><span class=\"gv-pill\">N — Neck mobility</span></div>",
   "title": "Airway assessment",
   "subtitle": "Mallampati, the 3-3-2 rule, and predictors of difficult intubation/ventilation",
   "id": "surg-perioperative-1",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Mallampati.svg/960px-Mallampati.svg.png",
     "caption": "Mallampati classification - classes I to IV oral view",
     "alt": "Side-by-side illustration of Mallampati classes I–IV showing progressive obscuration of the uvula, faucial pillars and soft palate - used in airway assessment but poor in isolation",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "ASA Physical Status classification — the exact category boundaries (and what it is NOT)",
   "subarea": "Preoperative assessment & risk",
   "discriminator": "- ASA grades the **PATIENT's systemic disease**, not the surgery and not anaesthetic/operative risk\n- Commonest error: equating a high ASA with a **difficult airway** or a **high-risk operation**\n- **ASA III vs IV** hinges on one phrase:\n  - III = substantive functional limitation but **NOT an immediate threat to life**\n  - IV = a **CONSTANT threat to life**\n- **ASA V** = moribund, not expected to survive ~24h **without** the operation\n- Mimic to separate: **RCRI/NSQIP** estimate the OPERATION's cardiac risk; **ASA** describes the patient",
   "whatFirst": "- Classify by **worst systemic disease**, then add '**E**' if delay would increase threat to life/limb\n  - E applies to ASA I–V, **never VI**",
   "cutoffs": [
    "**ASA I**: healthy, non-smoker, no/minimal alcohol",
    "**ASA II**: MILD systemic disease, no functional limitation — current smoker, social drinker, pregnancy, well-controlled HTN/DM, **BMI 30–40**",
    "**ASA III**: SEVERE systemic disease with substantive functional limitation — poorly controlled DM/HTN, COPD, BMI ≥40, ESRD on dialysis, MI/CVA/stent/TIA **>3 months ago**",
    "**ASA IV**: severe disease = CONSTANT threat to life — recent **(<3 months)** MI/CVA/stent, ongoing cardiac ischaemia, sepsis, severely reduced ejection fraction, ESRD not on scheduled dialysis",
    "**ASA V**: moribund, not expected to survive without the operation (ruptured AAA, massive trauma)",
    "**ASA VI**: brain-dead organ donor",
    "**E modifier**: emergency = delay increases threat to life/body part"
   ],
   "redFlags": "- Recent **MI/stroke/coronary stent within 3 months** → ASA IV (not III)\n  - Elective surgery should usually be **deferred**",
   "trap": "- Most tempting wrong answer: scoring **well-controlled hypertension** or **BMI 32** as ASA III\n  - Well-controlled single comorbidity with no functional limitation = **ASA II**\n- '**Substantive functional limitation**' is the dividing line for III",
   "mcqTrap": "- A stem describing a fit patient having **major/emergency surgery** asking for 'ASA' — bait is to upgrade ASA for the big operation\n  - The **operation does not change ASA**; only adding **'E'** does",
   "viva": "- Examiner probes: 'Why is this patient **ASA III not II**?'\n  - Answer with the **functional-limitation phrase**\n- An ASA IV/V emergency mandates **senior anaesthetist + consultant surgeon** involvement before theatre",
   "mnemonic": "II = mild, III = severe-but-stable, IV = severe-and-life-threatening, V = dying anyway, VI = donor. 'E' = Emergency on top.",
   "source": "ASA Physical Status Classification System (House of Delegates, last approved 2020, examples updated); ANZCA PG07 Guideline on pre-anaesthesia consultation and patient preparation 2024",
   "tags": [
    "ASA",
    "risk stratification",
    "perioperative"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>ASA</th><th>Definition</th><th>Australian-flavoured example</th></tr></thead><tbody><tr><td>I</td><td>Normal healthy</td><td>Non-smoker, fit, hernia repair</td></tr><tr><td>II</td><td>Mild systemic dz, no limitation</td><td>Controlled HTN, BMI 32, smoker, pregnancy</td></tr><tr><td>III</td><td>Severe dz, functional limitation</td><td>BMI ≥40, COPD, dialysis, MI/stent >3/12</td></tr><tr><td>IV</td><td>Severe dz, CONSTANT threat to life</td><td>MI/stent <3/12, sepsis, unstable angina</td></tr><tr><td>V</td><td>Moribund, won't survive w/o op</td><td>Ruptured AAA</td></tr><tr><td>VI</td><td>Brain-dead donor</td><td>Organ retrieval</td></tr></tbody></table>",
   "title": "ASA Physical Status classification",
   "subtitle": "the exact category boundaries (and what it is NOT)",
   "id": "surg-perioperative-2"
  },
  {
   "topic": "CA2.2 — which drugs to STOP vs CONTINUE perioperatively (the judgement card)",
   "subarea": "Preoperative assessment & risk",
   "discriminator": "- Default: **CONTINUE most chronic meds** — beta-blockers, statins, most antihypertensives, inhalers, antiepileptics, thyroxine, most psychotropics\n- Exam tests **SPECIFIC exceptions with specific timings** — three buckets:\n  - **STOP-and-time**: anticoagulants, P2Y12 antiplatelets, SGLT2i\n  - **WITHHOLD on the day**: ACEi/ARB (if for HTN), diuretics, metformin, oral hypoglycaemics\n  - **CONTINUE**: beta-blocker, statin, aspirin (if secondary prevention/stent), inhalers\n- **GLP-1/GIP RA** = continue but manage aspiration risk",
   "whatFirst": "- For anticoagulation: **weigh thrombotic vs bleeding risk** → decide on bridging\n- For diabetics: **SGLT2i needs the longest lead time** — cease ≥3 days before\n- **Never start a NEW beta-blocker** on the morning of surgery (POISE harm)",
   "cutoffs": [
    "**SGLT2i (gliflozins): cease ≥3 days** before surgery (i.e. 2 days prior + day of); ertugliflozin **4 days** — euglycaemic DKA risk; ADS perioperative guidance",
    "**Metformin: omit on day of surgery** (lactic acidosis risk if renal impairment/contrast)",
    "**ACEi/ARB: withhold morning of surgery** if taken for HTN (intraop hypotension); continue if for heart failure per anaesthetist",
    "**Warfarin: stop ~5 days** pre-op; bridge with LMWH/heparin only if high thrombotic risk; therapeutic LMWH last dose **≥24h** pre-op",
    "**DOAC: stop 1–3 days** pre-op depending on drug, renal function and bleeding risk",
    "**Clopidogrel: stop 5 days** pre-op; ticagrelor **5 days** (3–5 by thrombotic risk); prasugrel **7 days** — continue aspirin where possible",
    "**Aspirin: CONTINUE** if secondary prevention / coronary stent in situ — stopping risks stent thrombosis",
    "**Beta-blockers & statins: CONTINUE** perioperatively; do NOT start beta-blocker de novo day-of (POISE: ↓MI but ↑stroke/death)",
    "**GLP-1/GIP RA**: 2025 ADS/ANZCA/GESA/NACOS — CONTINUE the drug; manage aspiration risk (**24h clear-fluid diet** then standard 6h fast; gastric POCUS / treat as full stomach if solids not withheld)"
   ],
   "redFlags": "- Recent coronary stent on **DAPT for elective surgery** → defer if possible\n  - DES: ideally **6 months**, 12 months if for ACS\n  - BMS: **30 days**\n- **Never stop both antiplatelets** without cardiology input",
   "trap": "- Most tempting wrong answer: **stop the beta-blocker before surgery** — abrupt withdrawal causes rebound ischaemia; beta-blockers are CONTINUED\n- Classic trap 2: **stopping aspirin** in a patient with a coronary stent\n- Classic trap 3: **ceasing a GLP-1** — 2025 guidance is to continue it",
   "mcqTrap": "- Confusing **'continue aspirin (stent)'** with **'stop clopidogrel 5 days'**\n- In a stented patient: typically **continue aspirin** and individualise the P2Y12 inhibitor with cardiology — do NOT stop both",
   "viva": "- Pure **CA2.2**: examiner reads a med list — stop/continue/withhold + timing + reason for each\n- High thrombotic risk on warfarin → **haematology/anaesthetics for bridging plan**; document",
   "mnemonic": "Cease the 'flozins early (≥3d, ertug 4d) & the 'fibrins/'grels by their timers (clopidogrel & ticagrelor 5d, prasugrel 7d); WITHHOLD the morning ACE/ARB, diuretic & metformin; CONTINUE the beta-blocker, statin & stent-aspirin.",
   "source": "Therapeutic Guidelines (eTG, current) — perioperative drug management; Australian Prescriber antiplatelet cessation (clopidogrel 5d, ticagrelor 3–5d, prasugrel 7d); ADS perioperative diabetes guidance (SGLT2i ≥3d / ertugliflozin 4d, metformin); ACC/AHA 2024 DAPT-and-surgery timings; 2025 ADS/ANZCA/GESA/NACOS GLP-1 recommendations; POISE trial",
   "tags": [
    "medication management",
    "CA2.2",
    "anticoagulation",
    "SGLT2",
    "DAPT",
    "perioperative"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>STOP (timed)</th><th>WITHHOLD (day of)</th><th>CONTINUE</th></tr></thead><tbody><tr><td>SGLT2i ≥3d (ertug 4d)</td><td>ACEi/ARB (if HTN)</td><td>Beta-blocker</td></tr><tr><td>Warfarin ~5d (±bridge)</td><td>Metformin</td><td>Statin</td></tr><tr><td>Clopidogrel 5d / ticagrelor 5d / prasugrel 7d</td><td>Diuretics</td><td>Aspirin (stent/2°)</td></tr><tr><td>DOAC 1–3d (renal-dependent)</td><td>Oral hypoglycaemics</td><td>Inhalers, thyroxine, AEDs, GLP-1*</td></tr></tbody></table>",
   "title": "CA2.2",
   "subtitle": "which drugs to STOP vs CONTINUE perioperatively (the judgement card)",
   "id": "surg-perioperative-3"
  },
  {
   "topic": "Frailty — Clinical Frailty Scale (CFS) thresholds and why it beats age alone",
   "subarea": "Preoperative assessment & risk",
   "discriminator": "- **Frailty, not chronological age**, predicts postoperative mortality, delirium, institutionalisation and prolonged stay\n- **Rockwood Clinical Frailty Scale (CFS, v2.0)**: 9-point, based on the patient's state ~2 weeks before the acute illness\n- Discriminate from **sarcopenia** (muscle mass) and from **disability** — frailty is reduced physiological reserve/vulnerability\n- **CFS ≥5** is the common 'frail' cut-off triggering comprehensive geriatric assessment (CGA)",
   "whatFirst": "- **Screen with CFS** at preadmission\n- If frail (**CFS ≥5**) → trigger geriatric/perioperative medicine input, delirium-prevention bundle, goals-of-care/ceiling-of-treatment conversation BEFORE elective surgery",
   "cutoffs": [
    "**CFS 1** = very fit; **CFS 2** = fit/well; **CFS 3** = managing well",
    "**CFS 4** = living with very mild frailty (vulnerable / 'slowing up')",
    "**CFS 5** = living with mild frailty (needs help with high-order IADLs) — common surgical threshold for **'frail'**",
    "**CFS 6** = moderately frail; **CFS 7** = severely frail; **CFS 8** = very severely frail; **CFS 9** = terminally ill",
    "CFS scored on state **~2 weeks PRIOR** to acute presentation, not at the moment of acute illness"
   ],
   "redFlags": "- **CFS ≥7**, recurrent falls, polypharmacy, baseline cognitive impairment, unintentional weight loss → high risk of **postop delirium and death**\n- → Explicit shared decision-making, prehabilitation, consider non-operative options and **document ceiling of care**",
   "trap": "- Most tempting wrong answer: using **age >65 (or >80)** as the risk factor and ignoring frailty status\n- A fit 85-year-old (**CFS 2**) may be lower risk than a frail 70-year-old (CFS 6)\n- **Age alone** is the distractor",
   "mcqTrap": "- Scoring CFS on the patient's **current acutely-unwell state** — it must reflect the **baseline ~2 weeks before** the acute event, or you over-score",
   "viva": "- Examiner: 'This 82-year-old for elective bowel resection — how does frailty change your plan?'\n- Discuss **CFS, CGA, prehab, delirium prevention**, and a frank **goals-of-care/consent** conversation about realistic outcomes",
   "mnemonic": "CFS: 1–3 robust, 4 'vulnerable', 5+ frail → call geriatrics. Frailty = reserve, not age.",
   "source": "Rockwood Clinical Frailty Scale v2.0 (Dalhousie, 2020 revision); ANZCA perioperative care of the elderly principles; widely adopted CFS ≥5 'frail' threshold",
   "tags": [
    "frailty",
    "CFS",
    "elderly",
    "delirium",
    "perioperative"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>CFS</th><th>State</th><th>Action</th></tr></thead><tbody><tr><td>1–3</td><td>Fit / managing well</td><td>Standard care</td></tr><tr><td>4</td><td>Very mild frailty (vulnerable)</td><td>Watch, optimise</td></tr><tr><td>5–6</td><td>Mild–moderate frailty</td><td>CGA, prehab, delirium bundle</td></tr><tr><td>7–9</td><td>Severe → terminal</td><td>Goals of care, ceiling of treatment</td></tr></tbody></table>",
   "title": "Frailty",
   "subtitle": "Clinical Frailty Scale (CFS) thresholds and why it beats age alone",
   "id": "surg-perioperative-4"
  },
  {
   "topic": "Functional capacity / METs — the 4-MET gate that decides further cardiac testing",
   "subarea": "Preoperative assessment & risk",
   "discriminator": "- **4 METs** is THE perioperative threshold\n- **≥4 METs** and asymptomatic = proceed, no further cardiac testing regardless of risk factors\n- **<4 METs (or unknown)** AND elevated risk AND it will change management = consider stress testing/specialist referral\n- Discriminate from **RCRI**: METs = patient's exercise capacity; RCRI = points score for operation + comorbidity\n  - Used **together, not interchangeably**",
   "whatFirst": "- Ask **functional capacity FIRST** — climb a flight of stairs / walk up a hill without stopping = ≥4 METs\n- Only if **poor/unknown** AND elevated-risk surgery → escalate to objective testing (DASI, stress echo, CPET)",
   "cutoffs": [
    "**1 MET** = self-care, eating, dressing",
    "**4 METs** = climb one flight of stairs, walk up a hill, brisk walk ~6 km/h, heavy housework — the **GO/NO-GO threshold**",
    "**<4 METs** = poor capacity (cannot climb a flight of stairs / walk 2 blocks on the flat)",
    "**>10 METs** = excellent (strenuous sport: swimming, singles tennis)",
    "**DASI <34** ≈ unable to achieve 4 METs (objective surrogate when capacity unclear)"
   ],
   "redFlags": "- **New/unstable angina**, decompensated heart failure, significant arrhythmia, severe valvular disease (esp. **severe symptomatic aortic stenosis**) = active cardiac conditions\n- → Defer elective surgery, **cardiology referral irrespective of METs**",
   "trap": "- Most tempting wrong answer: ordering a **stress echo in a patient with good functional capacity** (climbs 2 flights)\n- If **≥4 METs** and asymptomatic — no test, proceed\n- Test only when it will **change management**",
   "mcqTrap": "- Stem gives multiple cardiac risk factors + patient 'walks 2 km daily up hills' — bait is to investigate because of risk factors\n- **Good METs overrides**; proceed to surgery",
   "viva": "- Examiner: 'How do you assess functional capacity at the bedside?' — **flights of stairs / hill without stopping**\n- Discriminator probed: does an **abnormal test change your plan**? If not, don't order it",
   "mnemonic": "'Four floors fine' — 4 METs = one flight of stairs = the green light.",
   "source": "ANZCA PG07 2024 (functional capacity assessment); ACC/AHA 2024 Perioperative Cardiovascular Guideline (4-MET threshold, MET categories) — METs is subjective; DASI/CPET used where capacity unknown",
   "tags": [
    "METs",
    "functional capacity",
    "cardiac risk",
    "perioperative"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Estimate METs (stairs/hill)</div><div class=\"gv-step\">≥4 METs &amp; asymptomatic → PROCEED, no further test</div><div class=\"gv-step\">&lt;4 or unknown + elevated-risk surgery + will change mgmt → DASI/stress echo/CPET/cardiology</div></div>",
   "title": "Functional capacity / METs",
   "subtitle": "the 4-MET gate that decides further cardiac testing",
   "id": "surg-perioperative-5"
  },
  {
   "topic": "Preoperative fasting — current ANZCA times, 'sip til send', and the GLP-1 exception",
   "subarea": "Preoperative assessment & risk",
   "discriminator": "- Australia **LIBERALISED clear-fluid fasting: 2 hours**, and many sites run **'sip til send'** (encouraged clear fluids until called to theatre) — prolonged fasting harms (dehydration, hypoglycaemia, discomfort)\n- Discriminate **clear fluids** (water, pulp-free juice, clear cordial, black tea/coffee, green tea, carbohydrate-rich clear drinks) from **NON-clear** (milk, milky tea/coffee, particulate/soluble-fibre/jelly = treated as solids)\n- The disruptor: **GLP-1/GIP agonists** delay gastric emptying — standard limited fasting / 'sip til send' is NOT appropriate",
   "whatFirst": "- Confirm **last solid** and **last clear fluid** times\n- For emergency/non-fasted patient → treat as **full stomach**: rapid sequence induction",
   "cutoffs": [
    "ADULTS — solids: **6 hours**; clear fluids: **2 hours** (sip til send where protocol allows)",
    "Infant <6 months — formula: **4 hours**; breast milk: **3 hours**; clear fluids: **2 hours**",
    "Child >6 months — limited solids/formula: **6 hours**; clear fluids: **1 hour** (≤3 mL/kg/hr) at many AU sites; breast milk per local policy",
    "**GLP-1/GIP RA** (semaglutide, tirzepatide, etc.): 2025 ADS/ANZCA/GESA/NACOS — CONTINUE the drug; recommend a **24h clear-fluid diet** ending into the standard 6h solid fast (clear fluids still to 2h); **'sip til send' NOT appropriate**; if solids not withheld 24h, mitigate risk (gastric POCUS / treat as full stomach / RSI)"
   ],
   "redFlags": "- **Bowel obstruction, pregnancy, hiatus hernia/significant GORD, diabetic gastroparesis, opioids, trauma, GLP-1/GIP RA** therapy → high aspiration risk\n- → **RSI** regardless of clock time",
   "trap": "- Most tempting wrong answer: **'8 hours nil-by-mouth from midnight'** — outdated; current adult clear-fluid fast is **2 hours**\n- Other classic: counting **milk or a flat white** as a 'clear fluid' — milk-containing drinks are treated as solids (**6h**)",
   "mcqTrap": "- Stem: patient on **semaglutide** fasted the standard 6h/2h and 'sip til send' — examiner asks if safe\n- Trap is 'yes, fasted appropriately'; correct answer flags **retained gastric contents/aspiration risk** and that limited fasting/SipTilSend is not appropriate on a GLP-1",
   "viva": "- Examiner: 'Last ate? Last drank? **On a GLP-1?**'\n- Unfasted emergency or GLP-1 risk → escalate to anaesthetist, plan **RSI**, suction ready; consent includes aspiration risk",
   "mnemonic": "6-2 for solids-fluids (adults); 'sip til send' — but NOT on a GLP-1. Infant breast milk = 3, formula = 4. Milk drink = a meal, not a fluid.",
   "source": "ANZCA PG07 Guideline on pre-anaesthesia consultation and patient preparation 2024; 2025 ADS/ANZCA/GESA/NACOS clinical practice recommendations on peri-procedural GLP-1/GIP RA use; Safer Care Victoria 'Sip til Send'",
   "tags": [
    "fasting",
    "aspiration",
    "GLP-1",
    "RSI",
    "perioperative"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Patient</th><th>Solids/Milk</th><th>Breast milk</th><th>Clear fluids</th></tr></thead><tbody><tr><td>Adult</td><td>6 h</td><td>—</td><td>2 h (sip til send)</td></tr><tr><td>Infant &lt;6/12</td><td>Formula 4 h</td><td>3 h</td><td>2 h</td></tr><tr><td>Child &gt;6/12</td><td>6 h</td><td>per policy</td><td>1 h (≤3 mL/kg/hr)</td></tr></tbody></table>",
   "title": "Preoperative fasting",
   "subtitle": "current ANZCA times, 'sip til send', and the GLP-1 exception",
   "id": "surg-perioperative-6"
  },
  {
   "topic": "RCRI vs NSQIP — which cardiac risk tool, six predictors, and the trap of treating the score as a verdict",
   "subarea": "Preoperative assessment & risk",
   "discriminator": "- **RCRI (Lee index)** = 6 equally-weighted clinical predictors; quick bedside MACE estimate\n- **NSQIP Surgical Risk Calculator / NSQIP-MICA** = procedure-specific, web-based, incorporates age, ASA, functional status and the exact operation → outperforms RCRI for non-cardiac risk granularity\n- Discriminate: **RCRI = fast and dirty**; **NSQIP = procedure-specific and more accurate** but needs the calculator\n- Neither replaces clinical judgement / functional capacity",
   "whatFirst": "- **Count RCRI predictors**; if ≥1–2 AND poor functional capacity for elevated-risk surgery → consider biomarkers/testing\n- The **score alone** is not the trigger — not the score alone",
   "cutoffs": [
    "**RCRI 6 predictors** (1 point each): (1) high-risk surgery — intraperitoneal, intrathoracic, or **suprainguinal vascular**; (2) ischaemic heart disease; (3) congestive heart failure; (4) cerebrovascular disease (stroke/TIA); (5) **insulin-treated** diabetes; (6) preop creatinine **>177 µmol/L** (>2.0 mg/dL)",
    "RCRI MACE risk rises with score: 0 ≈ very low; **≥2 points = elevated risk**",
    "NSQIP adds: **age, sex, ASA class, functional status, BMI, exact procedure (CPT)**"
   ],
   "redFlags": "- **RCRI ≥2** with poor/unknown METs before elevated-risk surgery → consider preop **hs-troponin/BNP** and cardiology input\n- Do **NOT start prophylactic beta-blockers de novo** on the morning of surgery (POISE harm signal — stroke/death)",
   "trap": "- Most tempting wrong answer: counting **NON-insulin (diet/oral) diabetes** as an RCRI point — only **insulin-treated DM** scores\n- Also: creatinine cut-off SI conversion is **>177 µmol/L** (≈>2.0 mg/dL), not a mmol/L value",
   "mcqTrap": "- A diabetic on **metformin scored as an RCRI point** — wrong, only **insulin-treated diabetes** counts\n- Vascular surgery: only **SUPRAinguinal vascular** is the high-risk-surgery point; infrainguinal/carotid is not that specific item",
   "viva": "- Examiner: 'Name the RCRI predictors and what you'd do with a score of 3'\n- Combine with METs, consider **troponin/NT-proBNP**, cardiology MDT; document shared decision and consent re: cardiac risk",
   "mnemonic": "RCRI = 'I CHaSeD Creatinine in the OR': Ischaemic heart dz, CHF, Stroke/TIA, Diabetes (insulin), Creatinine >177, OR = high-risk surgery.",
   "source": "Lee Revised Cardiac Risk Index (Circulation 1999); ACS-NSQIP Surgical Risk Calculator; endorsed as acceptable MACE tools in ACC/AHA 2024 perioperative guideline",
   "tags": [
    "RCRI",
    "NSQIP",
    "MACE",
    "cardiac risk",
    "perioperative"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">High-risk surgery</span><span class=\"gv-pill\">Ischaemic heart dz</span><span class=\"gv-pill\">CHF</span><span class=\"gv-pill\">Stroke/TIA</span><span class=\"gv-pill\">Insulin-treated DM</span><span class=\"gv-pill\">Creatinine &gt;177 µmol/L</span></div>",
   "title": "RCRI vs NSQIP",
   "subtitle": "which cardiac risk tool, six predictors, and the trap of treating the score as a verdict",
   "id": "surg-perioperative-7"
  },
  {
   "topic": "When to investigate before surgery — routine tests are NOT routine (low-value-test trap)",
   "subarea": "Preoperative assessment & risk",
   "discriminator": "- Modern Australian practice = **NO blanket preoperative bloods/ECG/CXR** for healthy patients having low-risk surgery\n- Tests ordered only if results would **change management**, guided by patient comorbidity, medication, and surgical magnitude\n- Discriminate **'active cardiac condition'** (defer + investigate) from **stable disease with good METs** (proceed)\n- This is the **Choosing Wisely / low-value-care** exam point",
   "whatFirst": "- **Match the test to a specific indication**\n- ASA I/II for minor surgery with good functional capacity → usually **NO routine investigations**",
   "cutoffs": [
    "**ECG**: consider if known cardiovascular disease, arrhythmia symptoms, or intermediate/high-risk surgery — **NOT routinely by age alone**",
    "**FBC**: if anaemia/bleeding risk, major surgery with expected blood loss, or relevant comorbidity",
    "**U&E**: on ACEi/ARB/diuretic, renal disease, diabetes, or major surgery",
    "**Group & hold / crossmatch**: anticipated significant blood loss",
    "**Pregnancy test**: offer to all people of childbearing potential",
    "**HbA1c**: known/suspected diabetes for optimisation",
    "**CXR**: NOT routine — only for new cardiorespiratory signs/symptoms"
   ],
   "redFlags": "- **Active cardiac conditions** — unstable coronary syndrome, decompensated HF, significant arrhythmia, severe symptomatic valve disease (esp. **severe aortic stenosis**)\n- → STOP, investigate, **cardiology before elective surgery**",
   "trap": "- Most tempting wrong answer: **'order routine FBC, U&E, ECG and CXR'** for a fit 70-year-old before a minor day-case\n- Current guidance: **no routine testing** without a specific indication",
   "mcqTrap": "- Ordering an ECG **'because the patient is over 65/over 80'** — age alone is not an indication; **surgical risk + cardiac history** drive it",
   "viva": "- Examiner: 'What bloods would you order and why?' — **justify each test by indication**\n- An unexpected severe abnormality (e.g. **new severe AS murmur**) → defer elective surgery, echo, cardiology",
   "mnemonic": "'Test to change management, not to tick a box.' No indication → no test.",
   "source": "ANZCA PG07 2024; Choosing Wisely Australia (preoperative testing); NICE NG45-aligned principles adapted to AU practice",
   "tags": [
    "preoperative investigations",
    "low-value care",
    "Choosing Wisely",
    "perioperative"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">ASA I–II + minor surgery + good METs → NO routine tests</div><div class=\"gv-step\">Comorbidity / meds / major surgery → targeted test (only if it changes mgmt)</div><div class=\"gv-step\">Active cardiac condition → DEFER + investigate + cardiology</div></div>",
   "title": "When to investigate before surgery",
   "subtitle": "routine tests are NOT routine (low-value-test trap)",
   "id": "surg-perioperative-8"
  },
  {
   "topic": "ACE inhibitors / ARBs — withhold morning of surgery (refractory hypotension)",
   "subarea": "Perioperative medication management",
   "trap": "- Killer wrong answer: **'continue ACEi/ARB on the morning of surgery to maintain BP control'** — WRONG when held for hypertension\n- Risks **refractory intra-op hypotension (vasoplegia)** poorly responsive to standard catecholamine vasopressors, often needing vasopressin/metaraminol\n- Standard practice: **WITHHOLD ACEi/ARB** on the morning of surgery\n- Nuance/contested: if ACEi/ARB is for **HEART FAILURE**, some continue — individualise\n- Restart post-op once **euvolaemic with stable renal function/K+** (watch for AKI/hyperkalaemia before restarting)",
   "whatFirst": "- Check the **INDICATION** → for hypertension: **withhold the morning dose**\n- For heart failure: **individualised decision**\n- Post-op: confirm **euvolaemia, normal K+ and renal function** before restarting",
   "redFlags": "- Persistent intra-op hypotension unresponsive to phenylephrine/metaraminol in a patient who took their ACEi = **ACEi-related vasoplegia** → **vasopressin**\n- Post-op restart with **AKI/hyperkalaemia** worsens renal injury",
   "discriminator": "- **ACEi/ARB vasoplegic hypotension** is refractory to catecholamines and responds to **vasopressin** — distinguish from hypovolaemia/anaphylaxis/anaesthetic overdose\n- **Beta-blockers**, by contrast, are CONTINUED peri-op",
   "cutoffs": [
    "**Withhold ACEi/ARB** on the morning of surgery (when treating hypertension)",
    "**Heart failure indication**: individualise — may continue (contested)",
    "**Restart post-op** once euvolaemic + normal K+ + stable renal function",
    "**Beta-blockers & statins: CONTINUE** perioperatively (contrast pearl)"
   ],
   "source": "ANZCA Perioperative Medicine resources & Therapeutic Guidelines (eTG, current); area of practice variation — flagged as contested for the heart-failure indication",
   "mnemonic": "ACE/ARB = 'Anaesthetic Causes Emptiness' → omit the morning dose or risk vasoplegia; vasopressin is the rescue.",
   "viva": "- Examiner: 'Intra-op BP won't come up despite metaraminol — what did they take?' = **ACEi/ARB** → **vasopressin**\n- Contrast with beta-blocker (continue)\n- Discriminate **vasoplegia from hypovolaemia**",
   "tags": [
    "ACEi",
    "ARB",
    "vasoplegia",
    "withhold",
    "vasopressin",
    "contested"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Drug</th><th>Peri-op rule</th></tr><tr><td>ACEi / ARB (for HTN)</td><td>WITHHOLD morning of surgery</td></tr><tr><td>ACEi / ARB (for HF)</td><td>Individualise (may continue) — contested</td></tr><tr><td>Beta-blocker</td><td>CONTINUE</td></tr><tr><td>Statin</td><td>CONTINUE</td></tr></table><div class=\"gv-pills\"><span class=\"gv-pill\">Refractory hypotension → vasopressin</span><span class=\"gv-pill\">Restart when euvolaemic, K+/renal OK</span></div>",
   "mcqTrap": "- **'Continue the ACE inhibitor on the morning of surgery to maintain perioperative blood pressure control'**",
   "title": "ACE inhibitors / ARBs",
   "subtitle": "withhold morning of surgery (refractory hypotension)",
   "id": "surg-perioperative-9"
  },
  {
   "topic": "DAPT & coronary stents — aspirin continue, P2Y12 stop, delay elective surgery",
   "subarea": "Perioperative medication management",
   "trap": "- Killer wrong answer: **'stop both antiplatelets and proceed'** soon after a stent — early DAPT cessation → **catastrophic stent thrombosis** (high mortality)\n- For most vascular/IHD patients **aspirin is CONTINUED** through surgery; the **P2Y12 inhibitor** is what you stop\n- Crucially **DEFER elective non-cardiac surgery**:\n  - ≥**1 month** after a bare-metal stent\n  - ≥**6 months** after a drug-eluting stent for stable disease\n  - ≥**12 months** if the stent/PCI was for ACS\n- If surgery is truly urgent within the window → **keep aspirin**, MDT cardiology decision on the P2Y12",
   "whatFirst": "- Establish **stent type + date + indication FIRST**\n  - Within the mandatory window → **defer elective surgery**\n  - If cannot defer → **keep aspirin**, discuss P2Y12 continuation/bridging with cardiology\n- Outside window → continue aspirin, stop **P2Y12 by its specific interval**",
   "redFlags": "- Stopping DAPT **inside the DES window** for non-urgent surgery = **stent thrombosis** → MI/death\n- New chest pain/ST changes peri-op in a stented patient off DAPT = **stent thrombosis** → urgent cardiology/PCI",
   "discriminator": "- **Aspirin (keep)** vs **P2Y12 (stop)** — NOT equivalent\n- Differing P2Y12 intervals:\n  - **Clopidogrel: 5 days**\n  - **Prasugrel: 7 days**\n  - **Ticagrelor: 3 days** (reversible, short offset)\n- **BMS 1 month** vs **DES 6 months** (12 if ACS) — don't conflate the windows",
   "cutoffs": [
    "**Aspirin: continue** through most surgery (stop only if intracranial / very high bleed risk)",
    "**Clopidogrel: stop 5 days** pre-op",
    "**Ticagrelor: stop 3 days** pre-op (reversible, shorter offset; some local protocols still cite 5)",
    "**Prasugrel: stop 7 days** pre-op",
    "Defer elective surgery: **≥1 month** post-BMS; **≥6 months** post-DES (**≥12 months** if DES/PCI for ACS)"
   ],
   "source": "Therapeutic Guidelines (eTG, current) — antiplatelet/perioperative; ANZCA Perioperative Medicine resources; 2024 ACC/AHA and ESC/CCS perioperative cardiac guidance adopted in Australian practice",
   "mnemonic": "'Aspirin stays, P2Y12 pays' (stop it). Stents: 'BMS = 1 month, DES = 6 months, ACS = 12'. Clopi = 5, Prasu = 7, Tica = 3.",
   "viva": "- Examiner: 'DES 2 months ago, needs elective hernia repair — proceed?' — **NO, defer to ≥6 months**\n- If urgent: MDT + keep aspirin\n- Discriminate **aspirin from P2Y12** and the differing offset times",
   "tags": [
    "DAPT",
    "stent",
    "clopidogrel",
    "ticagrelor",
    "prasugrel",
    "stent-thrombosis",
    "aspirin-continue"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Agent / Stent</th><th>Rule</th></tr><tr><td>Aspirin</td><td>Continue (rarely stopped)</td></tr><tr><td>Clopidogrel</td><td>Stop 5 days pre-op</td></tr><tr><td>Ticagrelor</td><td>Stop 3 days pre-op (reversible)</td></tr><tr><td>Prasugrel</td><td>Stop 7 days pre-op</td></tr><tr><td>Bare-metal stent</td><td>Defer elective surgery ≥1 month</td></tr><tr><td>Drug-eluting stent</td><td>Defer ≥6 months (≥12 if ACS)</td></tr></table>",
   "mcqTrap": "- **'Stop aspirin and clopidogrel and proceed with elective surgery 2 months after a drug-eluting stent'**",
   "title": "DAPT & coronary stents",
   "subtitle": "aspirin continue, P2Y12 stop, delay elective surgery",
   "id": "surg-perioperative-10",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_anterior_stemi.png",
     "caption": "Acute anterior STEMI — the index event requiring coronary stenting that mandates DAPT continuation",
     "alt": "ST elevation in anterior leads (V1–V4) representing the type of ACS for which a DES is placed, contextualising why early DAPT cessation causes catastrophic stent thrombosis",
     "credit": "Glenlarson, Wikimedia Commons, public domain (top diagnosis banner cropped for exam use) · Public domain"
    }
   ]
  },
  {
   "topic": "DOACs (apixaban/rivaroxaban/dabigatran) — cessation by bleeding risk & renal function; NO bridging",
   "subarea": "Perioperative medication management",
   "trap": "- Tempting wrong answer 1: **'bridge DOACs with LMWH'** — WRONG; fast on/off, no bridging needed\n- Tempting wrong answer 2: **'stop DOACs 5 days before like warfarin'** — WRONG; far shorter cessation\n- Standard (normal renal function):\n  - **LOW bleed-risk**: omit **~24h** (last dose 2 days pre-op, none the day before)\n  - **HIGH bleed-risk**: omit **~48h** (2 days)\n- Gotcha: **dabigatran** is ~80% renally cleared — in **renal impairment (CrCl <50)** it needs LONGER cessation than apixaban/rivaroxaban\n- Reversal: **dabigatran → idarucizumab**; **apixaban/rivaroxaban → andexanet alfa / PCC**",
   "whatFirst": "- Identify **DOAC + procedure bleed risk + renal function**\n  - Low-risk/normal renal: stop **~24h** before\n  - High-risk: stop **~48h**\n  - **Dabigatran + CrCl <50 + high bleed risk**: extend several days\n- **Do NOT bridge**",
   "redFlags": "- **Dabigatran + renal impairment** = prolonged anticoagulation\n- Emergency surgery on dabigatran → **idarucizumab (Praxbind)**\n- Apixaban/rivaroxaban emergency → **andexanet alfa or prothrombinex (PCC)**",
   "discriminator": "- **Dabigatran**: renal-cleared, direct thrombin inhibitor, reversible with **idarucizumab**\n- **Apixaban/rivaroxaban**: less renal-dependent, factor Xa inhibitors — reversal: **andexanet alfa / PCC**\n- **Renal function changes dabigatran timing the most**\n- **DOACs are NOT bridged** — separates from warfarin",
   "cutoffs": [
    "Low bleed-risk + normal renal: omit **~24h** (skip the dose the day before)",
    "High bleed-risk + normal renal: omit **~48h**",
    "**Dabigatran + CrCl <50**: extend cessation (**≈3–4 days** for high bleed risk)",
    "Restart DOAC **~24h** (low-risk) to **48–72h** (high-risk) post-op once haemostasis secure",
    "Reversal: **dabigatran → idarucizumab**; **apixaban/rivaroxaban → andexanet alfa / PCC**"
   ],
   "source": "Therapeutic Guidelines (eTG, current) — anticoagulation; ANZCA Perioperative Medicine resources; PAUSE study (standardised DOAC interruption) consistent with current Australian practice",
   "mnemonic": "DOAC = 'Don't bridge; Off a Couple of days' — ~1 day low-risk, ~2 days high-risk. Dabigatran = 'Dependent on kidneys' → stop longer if CrCl low.",
   "viva": "- Examiner: 'Do you bridge a DOAC?' — **NO** (fast on/off)\n- 'Which DOAC needs the kidney checked?' — **dabigatran**\n- What-first for emergency op on dabigatran = **idarucizumab**",
   "tags": [
    "DOAC",
    "apixaban",
    "rivaroxaban",
    "dabigatran",
    "no-bridging",
    "renal-function"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Scenario</th><th>Stop before surgery</th></tr><tr><td>Low bleed-risk, normal renal</td><td>~24h (1 day)</td></tr><tr><td>High bleed-risk, normal renal</td><td>~48h (2 days)</td></tr><tr><td>Dabigatran + CrCl &lt;50, high-risk</td><td>≈3–4 days</td></tr></table><div class=\"gv-pills\"><span class=\"gv-pill\">NO bridging</span><span class=\"gv-pill\">Dabigatran reversal: idarucizumab</span><span class=\"gv-pill\">Xa inhibitors: andexanet / PCC</span></div>",
   "mcqTrap": "- **'Stop the DOAC 5 days before surgery and bridge with LMWH'** (applies the warfarin rule to a DOAC)",
   "title": "DOACs (apixaban/rivaroxaban/dabigatran)",
   "subtitle": "cessation by bleeding risk & renal function; NO bridging",
   "id": "surg-perioperative-11"
  },
  {
   "topic": "Insulin perioperative dose adjustment (basal, pre-mixed, day-of-surgery)",
   "subarea": "Perioperative medication management",
   "trap": "- Seductive wrong answer: **'omit ALL insulin on the morning of surgery while fasting'** — DANGEROUS, especially T1DM (causes **DKA**)\n- ADS-ANZCA: **CONTINUE basal insulin** at usual dose/time (do NOT stop it)\n- Only reduce basal by **20%** if recent overnight hypoglycaemia\n- **Pre-mixed insulin**: usual evening dose the night before (−20% if recent overnight hypo), then **reduce MORNING dose by 50%** on the day of surgery + omit any lunchtime dose\n- **Never give a fasting patient their full bolus**\n- A T1DM patient must **NEVER have basal insulin fully withheld** (ketosis)",
   "whatFirst": "- **Day before**: continue usual regimen; recent nocturnal hypo? → cut basal **20%**\n- **Day of surgery (fasting)**:\n  - Basal: usual (or −20% if recent hypo)\n  - Pre-mixed: **halve morning dose**, omit lunch\n  - Correct pre-admission **BGL >12** with rapid-acting if patient normally self-corrects",
   "redFlags": "- **T1DM with withheld basal + fasting** → ketoacidosis even if BGL only mildly raised\n- **BGL <4.0 mmol/L** = treat hypo (start treatment when <5.0)\n- Intra-op: check **ketones/VBG in T1DM** if BGL >15",
   "discriminator": "- **Basal (glargine/detemir/degludec)**: keeps you out of ketosis — **never fully omit in T1DM**\n- **Bolus/rapid**: covers meals — **omit/reduce when fasting**\n- Don't confuse **pre-mixed (give half AM)** with **basal (give full)**",
   "cutoffs": [
    "**Basal: usual dose**; reduce **20%** only if recent overnight hypo (never zero in T1DM)",
    "**Pre-mixed evening** (night before): usual dose; **−20%** if recent overnight hypo",
    "**Pre-mixed AM dose on day of surgery: reduce by 50%**; omit lunchtime dose",
    "Pre-admission **BGL >12 mmol/L**: self-correct with rapid-acting; repeat corrections **≥3h apart**",
    "**Insulin pump**: temp basal **−20% (80%)** if HbA1c <48 mmol/mol (6.5%) or fasting glucose <5 mmol/L",
    "**T1DM intra-op**: check VBG + ketones if **BGL >15 mmol/L**"
   ],
   "source": "ADS-ANZCA Perioperative Diabetes & Hyperglycaemia Guidelines (Adults), Nov 2022 — §1.2 (pre-op 5a–c, 6d), pre-admission hyperglycaemia >12, §1.3 (intra-op 5), Appendix K",
   "mnemonic": "'Basal = Background = Keep Burning' (never zero in T1DM); 'Bolus = Banquet = Bin it when fasting'. Pre-mixed AM = HALF.",
   "viva": "- Examiner: 'Patient is fasting — do you stop their long-acting insulin?' — **NO for T1DM** (DKA)\n- Discriminate **basal vs bolus**; ISBAR if BGL <4 or ketotic",
   "tags": [
    "insulin",
    "basal-bolus",
    "pre-mixed",
    "T1DM",
    "ADS-ANZCA",
    "do-not-omit-basal"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Insulin type</th><th>Day of surgery (fasting)</th></tr><tr><td>Basal (glargine/detemir/degludec)</td><td>Usual dose (−20% if recent overnight hypo); NEVER zero in T1DM</td></tr><tr><td>Pre-mixed</td><td>AM dose −50%; omit lunchtime dose</td></tr><tr><td>Bolus / rapid</td><td>Omit while fasting; use only to correct BGL &gt;12</td></tr><tr><td>Pump</td><td>Temp basal 80% if HbA1c &lt;48 or fasting glucose &lt;5</td></tr></table>",
   "mcqTrap": "- **'Withhold all insulin including basal on the morning of surgery while the patient is fasting'**",
   "title": "Insulin perioperative dose adjustment (basal, pre-mixed, day-of-surgery)",
   "id": "surg-perioperative-12"
  },
  {
   "topic": "Long-term corticosteroids — perioperative stress-dose hydrocortisone (adrenal suppression)",
   "subarea": "Perioperative medication management",
   "trap": "- Tempting wrong answer 1: **'stop steroids before surgery'** to reduce infection/wound risk — WRONG; withdrawal precipitates **Addisonian crisis**\n- Tempting wrong answer 2: **'just continue their usual oral prednisolone, no supplementation needed'** — WRONG for moderate/major surgery\n- Patient on **prednisolone ≥5 mg/day for ≥1 month** or with known adrenal insufficiency cannot mount a cortisol stress response\n- → CONTINUE usual steroid PLUS **IV hydrocortisone stress cover**\n- Gotcha: **high-dose inhaled/topical and recent courses** can also suppress the HPA axis",
   "whatFirst": "- Identify at-risk patient (**prednisolone ≥5 mg/day ≥1 month**, primary/secondary AI)\n- → Give **usual dose on the day + IV hydrocortisone at induction**, scaled to surgical magnitude\n- → **Taper to baseline** post-op as recovery allows",
   "redFlags": "- Post-op hypotension **unresponsive to fluids/pressors** + hyponatraemia + hyperkalaemia + hypoglycaemia + drowsiness = **adrenal (Addisonian) crisis**\n- → Give **100 mg IV hydrocortisone STAT**, fluids; do not wait for cortisol result",
   "discriminator": "- **Refractory shock + electrolyte derangement** post-op in a steroid patient = **adrenal crisis**, NOT sepsis/hypovolaemia alone\n- **Hydrocortisone** (not dexamethasone) chosen for crisis because it has **mineralocorticoid activity**",
   "cutoffs": [
    "At-risk: **prednisolone ≥5 mg/day for ≥1 month**, or any diagnosed adrenal insufficiency",
    "**Major surgery** (Woodcock 2020): hydrocortisone **100 mg IV at induction**, then continuous infusion **200 mg/24h** (or 50 mg IV 6-hrly) until tolerating double usual oral dose",
    "**Minor surgery**: usual oral dose ± single **100 mg IV hydrocortisone** at induction",
    "**Crisis: hydrocortisone 100 mg IV STAT** + IV fluids",
    "**Recent steroid course within 3 months** can still suppress the HPA axis"
   ],
   "source": "Woodcock et al, Assoc. of Anaesthetists peri-operative adrenal-insufficiency guideline, Anaesthesia 2020 (the standard adopted in current Australian practice); Therapeutic Guidelines (eTG, current) — Endocrinology, perioperative corticosteroid cover",
   "mnemonic": "'Sick Day = Stress Dose': never STOP steroids peri-op. Crisis (and major-op induction) = '100 now', then 200/24h.",
   "viva": "- Examiner: 'Why **hydrocortisone not dexamethasone** in crisis?' (mineralocorticoid effect)\n- What-first for post-op refractory hypotension in a steroid patient = **stress-dose steroid + fluids**; ISBAR to ICU",
   "tags": [
    "corticosteroids",
    "adrenal crisis",
    "hydrocortisone",
    "stress dose",
    "do-not-stop"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Surgical stress</th><th>Hydrocortisone cover</th></tr><tr><td>Minor (e.g. day-stay)</td><td>Usual oral dose ± 100 mg IV at induction</td></tr><tr><td>Moderate</td><td>100 mg IV at induction, then ~50 mg 6-hrly ~24h</td></tr><tr><td>Major</td><td>100 mg IV at induction, then infusion 200 mg/24h until on double usual oral dose, then taper</td></tr><tr><td>Adrenal crisis</td><td>100 mg IV STAT + fluids</td></tr></table><div class=\"gv-pills\"><span class=\"gv-pill\">Never STOP steroids peri-op</span><span class=\"gv-pill\">Crisis: ↓Na ↑K ↓glucose refractory shock</span></div>",
   "mcqTrap": "- **'Withhold long-term prednisolone on the day of surgery to reduce wound-infection risk'**",
   "title": "Long-term corticosteroids",
   "subtitle": "perioperative stress-dose hydrocortisone (adrenal suppression)",
   "id": "surg-perioperative-13",
   "images": [
    {
     "src": "assets/img/endocrine_cushingoid_habitus_striae_01.jpg",
     "caption": "Cushingoid habitus — central obesity, moon face, buffalo hump, and wide purple striae from chronic steroid use",
     "alt": "Classic features of exogenous hypercortisolism from long-term corticosteroid therapy, identifying the patient population at risk of perioperative adrenal insufficiency requiring stress-dose hydrocortisone",
     "credit": "Klausur 123, Wikimedia Commons, CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "Metformin perioperatively — continue or withhold?",
   "subarea": "Perioperative medication management",
   "trap": "- Tempting wrong answer: **'stop metformin 48h before all surgery'** — this is over-stopping\n  - ADS-ANZCA: **continue** all non-insulin agents (incl. metformin) up to and INCLUDING the night before surgery\n  - **Withhold on the DAY of surgery** only\n- The real exam discriminator is the **RESTART rule**\n  - Metformin must be withheld post-op in **renal impairment — CKD stage 3B or below = eGFR <45 mL/min/1.73m²**\n  - Only resumed once **renal function returns to baseline**\n- Patients who eat and drink immediately after a **minor procedure** can restart **without re-measuring renal function**",
   "whatFirst": "- Day of surgery: **hold metformin**\n- Post-op: **check renal function / contrast exposure**\n- If **eGFR <45** or AKI/contrast and major surgery: withhold and recheck creatinine before restarting\n- If well, eating, **normal renal function** → restart",
   "redFlags": "- Lactic acidosis risk **amplified by AKI, sepsis, IV contrast, hypoperfusion**\n- **High anion gap metabolic acidosis with raised lactate** in a metformin patient post-op = withhold + investigate",
   "discriminator": "- Metformin's concern is **lactic acidosis** (rare) via renal accumulation\n- Distinguish from **euDKA** (ketones, SGLT2i — different mechanism)\n- Distinguish from **sulfonylurea-induced hypoglycaemia** (different drug class)\n- **Metformin alone does NOT cause hypoglycaemia**",
   "cutoffs": [
    "Continue up to & including the **night before** surgery; withhold **day of surgery**",
    "Exception (continue day of, 2-hrly BGL): T2DM on diet alone or metformin alone with **HbA1c <53 mmol/mol (7.0%)**",
    "Post-op: withhold metformin if **CKD stage 3B or below / eGFR <45 mL/min/1.73m²** until renal function back to baseline",
    "Restart **without measuring renal function** if patient eats/drinks immediately after a procedure",
    "Hold if **IV iodinated contrast** + renal impairment"
   ],
   "source": "ADS-ANZCA Perioperative Diabetes & Hyperglycaemia Guidelines (Adults), Nov 2022 — §1.2 (pre-op 4d/e), §1.4 (post-op 6a), §7.9 Oral Agents",
   "mnemonic": "Metformin = 'Mind the Kidney' — fine till the night before; post-op restart hinges on eGFR ≥45 + no contrast.",
   "viva": "- Examiner: **'When do you restart metformin?'**\n  - Answer keys on **eGFR <45 (CKD 3B)** and contrast, not a fixed number of days\n- Discriminate **lactic acidosis** (metformin) from **DKA** (SGLT2i/euDKA)",
   "tags": [
    "metformin",
    "lactic acidosis",
    "eGFR 45",
    "ADS-ANZCA",
    "restart-rule"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Night before: CONTINUE</div><div class=\"gv-step\">Day of surgery: WITHHOLD</div><div class=\"gv-step\">Post-op eGFR ≥45 + eating: RESTART</div><div class=\"gv-step\">Post-op eGFR &lt;45 / contrast / AKI: HOLD, recheck Cr</div></div>",
   "mcqTrap": "- '**Stop metformin 48 hours before surgery** in all patients to avoid lactic acidosis.'",
   "title": "Metformin perioperatively",
   "subtitle": "continue or withhold?",
   "id": "surg-perioperative-14"
  },
  {
   "topic": "Other oral antihyperglycaemics & GLP-1 agonists — sulfonylureas, DPP-4i, GLP-1 (aspiration/gastroparesis)",
   "subarea": "Perioperative medication management",
   "trap": "- Tempting wrong answer: **'continue the sulfonylurea on the morning of surgery'** — WRONG\n  - A fasting patient on a sulfonylurea (gliclazide/glimepiride) risks **prolonged hypoglycaemia**\n  - ADS-ANZCA: withhold **ALL oral anti-hyperglycaemic & non-insulin agents on the DAY of surgery** (continue up to the night before)\n- Emerging gotcha (contested): **GLP-1 receptor agonists** (semaglutide/Ozempic, dulaglutide)\n  - Delay **gastric emptying** → retained gastric contents and **aspiration risk** under anaesthesia even when fasted\n  - Increasing guidance to withhold: **weekly agents days before; daily agents on the day of surgery**",
   "whatFirst": "- Day of surgery: **withhold sulfonylurea, DPP-4i, GLP-1 agonist** (and metformin, SGLT2i per their rules)\n- Ask specifically about **GLP-1 agonists** → consider delayed gastric emptying / aspiration precautions\n- Consider **full-stomach induction** if GLP-1 agonist recently taken",
   "redFlags": "- **Sulfonylurea + fasting = hypoglycaemia** (treat BGL <4.0, start treatment when <5.0)\n- **GLP-1 agonist** patient with nausea/fullness or large gastric volume on US → aspiration risk\n  - Treat as **full stomach / RSI**",
   "discriminator": "- **Sulfonylurea** causes hypoglycaemia (unlike metformin/DPP-4i alone)\n- **GLP-1's** peri-op issue is **gastroparesis/aspiration**, not glycaemia\n- Don't lump all oral agents together — **SGLT2i (2 days prior + day of)**, the rest (day of only)",
   "cutoffs": [
    "All oral / non-insulin AHGs: continue to **night before**, withhold **day of surgery**",
    "**Sulfonylurea**: hold day of surgery (hypoglycaemia risk while fasting)",
    "**GLP-1 weekly agonist** (e.g. semaglutide): emerging guidance withhold **~1 week** / daily formulations on the day (contested, ASA/ANZCA evolving)",
    "Treat hypoglycaemia at **BGL <4.0 mmol/L** (begin treatment when <5.0)"
   ],
   "source": "ADS-ANZCA Perioperative Diabetes & Hyperglycaemia Guidelines (Adults), Nov 2022 — §1.2 (pre-op 4e); GLP-1 / aspiration guidance per ASA & ANZCA emerging statements (contested, post-date the 2022 guideline)",
   "mnemonic": "Sulfonylurea = 'Stops sugar, Starves you' → hold while fasting. GLP-1 = 'Gut Lingers Plenty' → aspiration risk, treat as full stomach.",
   "viva": "- Examiner: **'Patient on semaglutide, fasted overnight — safe to intubate?'**\n  - Beware **delayed gastric emptying/aspiration**, consider RSI\n- Discriminate **hypoglycaemia** (SU) from **aspiration** (GLP-1)",
   "tags": [
    "sulfonylurea",
    "DPP-4i",
    "GLP-1 agonist",
    "semaglutide",
    "aspiration",
    "hypoglycaemia",
    "contested"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Agent</th><th>Peri-op rule / risk</th></tr><tr><td>Sulfonylurea (gliclazide)</td><td>Withhold day of surgery — hypoglycaemia if fasting</td></tr><tr><td>DPP-4 inhibitor</td><td>Withhold day of surgery (low hypo risk)</td></tr><tr><td>GLP-1 agonist (semaglutide)</td><td>Withhold (weekly ~1wk / daily day-of); aspiration risk — contested</td></tr></table><div class=\"gv-pills\"><span class=\"gv-pill\">Treat hypo at BGL &lt;4.0</span><span class=\"gv-pill\">GLP-1 = delayed gastric emptying</span></div>",
   "mcqTrap": "- '**Continue the sulfonylurea** on the morning of surgery to maintain glycaemic control while fasting.'",
   "title": "Other oral antihyperglycaemics & GLP-1 agonists",
   "subtitle": "sulfonylureas, DPP-4i, GLP-1 (aspiration/gastroparesis)",
   "id": "surg-perioperative-15"
  },
  {
   "topic": "SGLT2 inhibitors (-gliflozins): WITHHOLD pre-op — euglycaemic DKA risk",
   "subarea": "Perioperative medication management",
   "trap": "- Tempting wrong MCQ answers: **'continue SGLT2i for cardiorenal benefit'** OR **'omit only the morning of surgery'** — both WRONG\n  - ADS-ANZCA: cease on the **two days prior AND the day of surgery**\n- The lethal gotcha is **euglycaemic DKA (euDKA)**\n  - Ketoacidosis with **BGL <11.1 mmol/L** — a near-normal glucose falsely reassures and the diagnosis is missed\n- If a patient has taken an SGLT2i within **72 hours** and is unwell, check **VBG + blood ketones REGARDLESS of BGL**",
   "whatFirst": "- Confirm **last SGLT2i dose and timing**\n- If within **72h** and unwell/acidotic/vomiting: check **VBG + blood ketones (fingerprick) NOW**\n  - Do NOT rely on glucose\n- **Ketones up + acidosis** = treat as DKA (IV fluids, **IV insulin-dextrose infusion**, find precipitant)",
   "redFlags": "- Within **72h of SGLT2i** + nausea/vomiting/malaise/tachypnoea/abdo pain + metabolic acidosis with near-normal glucose = **euDKA until proven otherwise**\n  - Escalate, VRII/insulin-dextrose, **endocrine/ICU**",
   "discriminator": "- **euDKA vs classic DKA**: euDKA has **BGL <11.1 mmol/L** (often normal) but raised ketones + HAGMA\n  - Glucose does **NOT track severity**\n- Don't confuse with **simple post-op nausea**",
   "cutoffs": [
    "Cease SGLT2i on the **two days prior + the day of surgery**",
    "Colonoscopy: cease **two days prior + day of** (supplements usually not needed given fluids-only day 2)",
    "Day-stay / gastroscopy: stop the **day of procedure only** (minimise fasting)",
    "**euDKA = ketoacidosis with BGL <11.1 mmol/L**",
    "Within **72h of SGLT2i** + unwell → check VBG + blood ketones regardless of BGL",
    "Do NOT recommence SGLT2i for **≥2 days after major surgery**, and only once eating a full diet (minor surgery: day after)"
   ],
   "source": "ADS-ANZCA Perioperative Diabetes & Hyperglycaemia Guidelines (Adults), Nov 2022 — §1.2 (pre-op 4a–c), §1.3 (intra-op 6), §1.4 (post-op 6b), Appendix L (ADS-ANZCA-ADEA-NZSSD periprocedural DKA with SGLT2i alert)",
   "mnemonic": "GLIFLOZIN: Glucose Looks Innocent, Find Ketones. Cease two days prior + day of; restart only ≥2 days post-major-op, eating full diet.",
   "viva": "- Examiner: **'Sugar's normal so it can't be DKA, agree?'** — say NO\n  - This is **euglycaemic DKA**; check **ketones and a gas**\n- ISBAR escalation to **endocrine** + decision to defer surgery",
   "tags": [
    "SGLT2i",
    "euglycaemic DKA",
    "ADS-ANZCA",
    "withhold",
    "high-yield"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Procedure</th><th>When to cease SGLT2i</th></tr><tr><td>Major surgery</td><td>Two days prior + day of surgery</td></tr><tr><td>Colonoscopy</td><td>Two days prior + day of (fluids only day 2)</td></tr><tr><td>Day-stay / gastroscopy</td><td>Day of procedure only (minimise fasting)</td></tr></table><div class=\"gv-pills\"><span class=\"gv-pill\">euDKA: BGL &lt;11.1</span><span class=\"gv-pill\">Within 72h + unwell → VBG + ketones</span><span class=\"gv-pill\">Restart ≥2d post-major-op, eating full diet</span></div>",
   "mcqTrap": "- '**Continue SGLT2i perioperatively** for cardiorenal benefit'\n- '**Omit only the morning of surgery**'",
   "title": "SGLT2 inhibitors (-gliflozins)",
   "subtitle": "WITHHOLD pre-op — euglycaemic DKA risk",
   "id": "surg-perioperative-16"
  },
  {
   "topic": "Warfarin — when to stop, INR target, and WHO needs bridging",
   "subarea": "Perioperative medication management",
   "trap": "- Tempting wrong answer: **'bridge ALL warfarin patients with LMWH'** — WRONG and harmful\n  - BRIDGE trial: bridging in AF **increased bleeding with no thromboembolic benefit**\n- Stop warfarin **5 days** before surgery; aim **INR <1.5** on the day of surgery\n  - Check ~day before; if still >1.5 give **vitamin K 1–2 mg**\n- Bridge with therapeutic LMWH/heparin ONLY for **HIGH thrombotic risk**:\n  - Mechanical mitral valve\n  - Any mechanical valve + risk factors\n  - Recent VTE (<3 months)\n  - Recent stroke/TIA\n  - AF with very high CHA₂DS₂-VASc / prior embolism",
   "whatFirst": "- **Stratify thrombotic risk FIRST**\n  - Low/moderate (most AF): stop 5 days, **no bridge**\n  - High risk: stop 5 days + **bridge with LMWH**, last therapeutic dose ~24h before\n- Confirm **INR <1.5** on day of surgery",
   "redFlags": "- **Mechanical mitral valve = highest thrombotic risk** — bridge\n- Emergency surgery with raised INR → **prothrombinex (PCC) + vitamin K**, not FFP alone",
   "discriminator": "- **AF (low/moderate) does NOT need bridging** (BRIDGE trial)\n- **Mechanical mitral valve / recent VTE DOES** need bridging\n- Discriminate a true bridging indication from reflexive **'all anticoagulated patients bridge'**",
   "cutoffs": [
    "Stop warfarin **5 days pre-op**",
    "Target **INR <1.5** on day of surgery",
    "If INR >1.5 day before: **vitamin K 1–2 mg** oral/IV",
    "Therapeutic LMWH last dose **~24h pre-op** (prophylactic ~12h)",
    "Restart warfarin **12–24h post-op**",
    "Bridge ONLY: **mechanical valve, VTE <3 months, recent stroke/TIA, very high-risk AF**"
   ],
   "source": "Therapeutic Guidelines (eTG, current) — Cardiovascular, perioperative anticoagulation; BRIDGE trial (NEJM 2015) underpins 'no routine bridging in AF'",
   "mnemonic": "'5 days, INR <1.5'. Bridge only the truly high-risk: 'Mechanical valve, VTE, recent stroke' — not every AF.",
   "viva": "- Examiner: **'Does this AF patient need bridging?'** — usually NO (cite **BRIDGE trial**)\n  - **Mechanical mitral valve** = YES\n- Consent: **bleeding vs clot trade-off**; ISBAR for raised INR + emergency surgery",
   "tags": [
    "warfarin",
    "bridging",
    "INR 1.5",
    "BRIDGE trial",
    "mechanical valve"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Step</th><th>Action</th></tr><tr><td>Day −5</td><td>Stop warfarin</td></tr><tr><td>Day −1</td><td>Check INR; if &gt;1.5 give vitamin K 1–2 mg</td></tr><tr><td>Day 0</td><td>Proceed if INR &lt;1.5</td></tr><tr><td>Post-op 12–24h</td><td>Restart warfarin</td></tr></table><div class=\"gv-pills\"><span class=\"gv-pill\">BRIDGE: don't bridge most AF</span><span class=\"gv-pill\">DO bridge: mech mitral valve, VTE &lt;3/12, recent CVA</span></div>",
   "mcqTrap": "- '**Bridge all warfarin patients** with therapeutic LMWH to prevent thromboembolism.'",
   "title": "Warfarin",
   "subtitle": "when to stop, INR target, and WHO needs bridging",
   "id": "surg-perioperative-17"
  },
  {
   "topic": "Maintenance vs resuscitation fluids — pick the right bag for the right job",
   "subarea": "Fluids, electrolytes & nutrition",
   "trap": "- Most tempting WRONG answer: giving a **hypotonic maintenance bag** (0.18% NaCl/4% glucose, or 5% glucose) to RESUSCITATE a hypovolaemic/hypotensive post-op patient\n- **RESUSCITATION** = a balanced **isotonic crystalloid** (Hartmann's / Plasma-Lyte 148; 0.9% saline acceptable) given as a rapid **250–500 mL bolus** then reassess\n- **MAINTENANCE** = background drip covering insensible + urinary losses in someone euvolaemic but NBM\n- Hypotonic fluid given fast = **iatrogenic hyponatraemia** (post-op ADH is high)\n- Also tempting & wrong: **5% glucose as a 'fluid bolus'**\n  - It is electrolyte-free water, distributes across total body water, and gives almost **no intravascular expansion**",
   "whatFirst": "- **Decide the QUESTION first**: under-filled (resuscitate) or just NBM and dry (maintain)?\n- Check **HR, BP, cap refill, lactate, urine output**\n- If shocked: **250–500 mL balanced crystalloid bolus** then reassess\n- If euvolaemic & NBM: **maintenance regimen**",
   "redFlags": "- **>2.5 L/day maintenance**, or any hypotonic fluid, in a post-op/elderly/SIADH-risk patient drives **hyponatraemia**\n- Resuscitating with large-volume **0.9% saline alone** drives **hyperchloraemic metabolic acidosis** (balanced crystalloid preferred)\n- No response to repeated boluses → think the **missing thing** (blood, source control, vasopressor), not more crystalloid",
   "discriminator": "- **Resuscitation** replaces what's LOST NOW (intravascular volume): isotonic, fast, reassess\n- **Maintenance** replaces what's lost SLOWLY (insensible + urine): low volume, slow, contains glucose to prevent ketosis\n- **Replacement** (3rd category) = ongoing abnormal losses (NG, fistula, diarrhoea) matched **mL-for-mL** with composition-matched fluid",
   "cutoffs": [
    "Maintenance water: **25–30 mL/kg/day**",
    "Maintenance Na+/K+/Cl-: **~1 mmol/kg/day** each",
    "Maintenance glucose: **50–100 g/day** (prevents ketosis, NOT nutrition)",
    "Resuscitation bolus: **250–500 mL** balanced crystalloid, reassess after each",
    "**>2.5 L/day** maintenance → rising hyponatraemia risk"
   ],
   "mnemonic": "3 R's of IV fluid: Resuscitation (fast, isotonic, reassess) / Routine maintenance (25-30 mL/kg/day) / Replacement (match abnormal losses).",
   "mcqTrap": "- 'A 72yo is hypotensive POD1 after bowel resection, which fluid?'\n  - Tempting wrong: 1 L 5% glucose / 1 L 0.18% NaCl–4% glucose\n  - Correct: **250–500 mL Hartmann's or Plasma-Lyte bolus then reassess**\n  - **Glucose/hypotonic bags do NOT resuscitate**",
   "viva": "- 'Talk me through your fluid prescription for this NBM 70 kg man':\n  - State the **3 R's**, give mL/kg numbers, name a balanced crystalloid\n  - Flag **hyponatraemia** from over-prescribing hypotonic fluid\n- 'How do you escalate if 3 boluses don't fix the BP?'\n  - Senior/ICU, look for **occult haemorrhage/sepsis**, not more crystalloid",
   "tags": [
    "fluids",
    "resuscitation",
    "maintenance",
    "hyponatraemia",
    "crystalloid"
   ],
   "source": "NICE CG174 (IV fluid therapy in adults in hospital): maintenance 25-30 mL/kg/day, Na/K/Cl ~1 mmol/kg/day, glucose 50-100 g/day, >2.5 L/day hyponatraemia risk — the figure-set used in Australian teaching/eTG. Balanced-crystalloid-first for resuscitation is current Australian practice.",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Job</th><th>Fluid</th><th>Rate/volume</th><th>Goal</th></tr></thead><tbody><tr><td>Resuscitation</td><td>Balanced crystalloid (Hartmann's / Plasma-Lyte 148; 0.9% NaCl ok)</td><td><span class=\"gv-num\">250-500 mL</span> bolus, reassess</td><td>Restore intravascular volume</td></tr><tr><td>Maintenance</td><td>Glucose-saline (e.g. 0.18% NaCl/4% glucose + KCl) for euvolaemic NBM</td><td><span class=\"gv-num\">25-30 mL/kg/day</span></td><td>Cover insensible + urine</td></tr><tr><td>Replacement</td><td>Composition-matched to the loss</td><td>mL-for-mL ongoing loss</td><td>Replace abnormal GI/drain losses</td></tr></tbody></table>",
   "title": "Maintenance vs resuscitation fluids",
   "subtitle": "pick the right bag for the right job",
   "id": "surg-perioperative-18"
  },
  {
   "topic": "Massive transfusion protocol (MTP) — ratios, biochemical targets & the lethal triad",
   "subarea": "Fluids, electrolytes & nutrition",
   "trap": "- Most tempting WRONG MCQ option: resuscitating major haemorrhage with **large-volume crystalloid** (or packed red cells alone) while waiting for the lab\n  - Dilutes clotting factors, **worsens coagulopathy**, and drops calcium\n- Current Australian (NBA) practice: **minimise crystalloid**, activate the major haemorrhage protocol early, and give a **balanced RATIO of RBC:FFP:platelets**\n- Other traps:\n  - Forgetting **ionised calcium** (citrate chelates Ca2+ → hypocalcaemia → worse bleeding & arrhythmia)\n  - Forgetting early **tranexamic acid**",
   "whatFirst": "- **Activate the institutional major haemorrhage protocol** / call for help (ISBAR to blood bank & senior)\n- Give **balanced ratio components**\n- Give **tranexamic acid early** (within 3 h of trauma/obstetric bleed)\n- **STOP THE BLEEDING** (source control by surgery/IR is definitive; products only buy time)\n- Monitor & correct the biochemistry: **temp, pH, ionised Ca2+, fibrinogen**",
   "redFlags": "- The **LETHAL TRIAD: hypothermia + acidosis + coagulopathy** (each worsens the others; actively warm, correct, treat)\n- **Ionised Ca2+ falling** (citrate toxicity) → arrhythmia\n- **Hyperkalaemia** from stored cells\n- Persistent bleeding despite products → **return to theatre / IR**\n- NBA derangement thresholds: **temp <35°C, pH <7.2, ionised Ca <1.0 mmol/L, PT/APTT/INR >1.5x, fibrinogen <2.0 g/L**",
   "discriminator": "- **Ratio-based MTP**: give empirically while bleeding uncontrolled\n- **Goal-directed** (ROTEM/TEG-guided): once results available\n- NBA: a ratio **no lower than 2:1:1**, with insufficient evidence to favour 1:1:1 over 2:1:1\n- Distinguish platelet target: **general bleeding >50** vs **CNS/eye >100**",
   "cutoffs": [
    "Ratio: **RBC:FFP:PLT no lower than 2:1:1** ASAP (NBA: insufficient evidence to favour 1:1:1 over 2:1:1)",
    "Platelet dose: minimum **1 adult unit with every 8 units of red cells**; maintain count **>50 ×10⁹/L** (>100 if intracranial/spinal/eye)",
    "Fibrinogen: maintain **>2.0 g/L** (NBA derangement threshold <2.0); replace with **3–4 g concentrate** or cryoprecipitate",
    "PT / APTT / INR: keep **≤1.5× ULN**",
    "Temperature: maintain core **≥35°C**",
    "pH: keep **>7.2** (base excess > -6, lactate <4)",
    "Ionised calcium: keep **>1.0 mmol/L** (NBA derangement threshold <1.0)",
    "Tranexamic acid: **1 g IV over 10 min then 1 g over 8 h**, within **3 h** of trauma/obstetric haemorrhage onset"
   ],
   "mnemonic": "Keep ABOVE: Platelets >50 (>100 CNS), Fibrinogen >2.0, Temp >=35, pH >7.2, iCa >1.0, ratio no lower than 2:1:1. Lethal triad = COLD + ACID + CLOT-FAIL.",
   "mcqTrap": "- 'Trauma, BP 80/50, ongoing haemorrhage, best initial resuscitation fluid?'\n  - Tempting wrong: 2 L Hartmann's / RBC alone\n  - Correct: activate major haemorrhage protocol, **balanced components no lower than 2:1:1 + early TXA**, and source control\n  - **Minimise crystalloid** (dilutional coagulopathy)",
   "viva": "- 'Why not just keep giving red cells?' → **dilutional coagulopathy, hypocalcaemia**\n- 'Name the **lethal triad** and how you fight each'\n- '**Platelet target**, and when higher?' → >100 intracranial\n- ISBAR to blood bank, emergency-blood discussion\n- '**Products buy time, what's definitive?**' → source control",
   "tags": [
    "massive-transfusion",
    "MTP",
    "lethal-triad",
    "tranexamic-acid",
    "hypocalcaemia",
    "fibrinogen"
   ],
   "source": "National Blood Authority (Australia), Patient Blood Management Guideline for Adults with Critical Bleeding (2024; MJA 2024;220(4):191) — ratio no lower than 2:1:1, 1 platelet unit per 8 RBC, derangement thresholds (temp <35C, pH <7.2, iCa <1.0, PT/APTT/INR >1.5x, fibrinogen <2.0 g/L). TXA dose per CRASH-2/WOMAN, within 3 h.",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Parameter</th><th>Keep above / at</th></tr></thead><tbody><tr><td>RBC:FFP:Plt ratio</td><td><span class=\"gv-num\">no lower than 2:1:1</span></td></tr><tr><td>Platelets</td><td><span class=\"gv-num\">&gt;50</span> (&gt;100 if CNS/eye); 1 unit per 8 RBC</td></tr><tr><td>Fibrinogen</td><td><span class=\"gv-num\">&gt;2.0</span> g/L</td></tr><tr><td>PT / APTT / INR</td><td><span class=\"gv-num\">&lt;=1.5x</span> ULN</td></tr><tr><td>Temperature</td><td><span class=\"gv-num\">&gt;=35</span> C</td></tr><tr><td>pH</td><td><span class=\"gv-num\">&gt;7.2</span></td></tr><tr><td>Ionised Ca</td><td><span class=\"gv-num\">&gt;1.0</span> mmol/L</td></tr><tr><td>TXA</td><td>1 g + 1 g/8 h, &lt;3 h of onset</td></tr></tbody></table>",
   "title": "Massive transfusion protocol (MTP)",
   "subtitle": "ratios, biochemical targets & the lethal triad",
   "id": "surg-perioperative-19",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_hyperkalaemia.jpg",
     "caption": "ECG — hyperkalaemia: peaked T waves and widened QRS from massive transfusion",
     "alt": "Peaked (tented) T waves and progressive QRS widening representing the hyperkalaemia that complicates massive transfusion of stored red cells",
     "credit": "Dr Michael-Joseph F. Agbayani & Dr Eddieson Gonzales, Wikimedia Commons, CC BY 4.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Trauma_triad_of_death.svg/960px-Trauma_triad_of_death.svg.png",
     "caption": "Lethal triad of trauma — hypothermia, acidosis, and coagulopathy vicious cycle",
     "alt": "Triangle/cycle diagram showing the interdependence of hypothermia, acidosis and coagulopathy in major haemorrhage, explaining why damage-control resuscitation with blood products (not crystalloid) is required",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Nutrition assessment (albumin, BMI) — why albumin is a TRAP marker",
   "subarea": "Fluids, electrolytes & nutrition",
   "trap": "- Most tempting WRONG MCQ option: using a **low albumin to diagnose malnutrition** — WRONG\n  - Albumin is **NOT a nutritional marker**; it is a **negative acute-phase reactant**\n  - Falls with **inflammation, sepsis, liver disease, and capillary leak** regardless of nutrition\n  - **Half-life ~20 days** means it lags actual nutritional status\n- A well-nourished septic patient can have **low albumin**; a chronically starved person can have **near-normal albumin**\n- Correct tools: validated screening (**MST**), **unintentional weight loss %**, BMI, and functional/muscle assessment (SGA/GLIM)",
   "whatFirst": "- **SCREEN with MST** (Malnutrition Screening Tool — Australian standard) on admission\n- Formal assessment (**SGA / GLIM criteria**) by a dietitian\n- Quantify **unintentional weight loss** and **BMI**\n- Use albumin/CRP only to gauge **INFLAMMATION**, not nutrition",
   "redFlags": "- **BMI <18.5** (underweight)\n- Unintentional weight loss **>10% in 3–6 months**\n- Minimal intake **>5–7 days** → high malnutrition + refeeding risk\n- Severe malnutrition feeds straight into **refeeding-syndrome precautions**\n- Pre-op severe malnutrition → consider **delaying elective surgery** for prehabilitation/optimisation",
   "discriminator": "- **Albumin (low) = inflammation/severity marker, NOT nutrition**\n- Prealbumin/transferrin: shorter half-life but still **inflammation-confounded**\n- True malnutrition markers = **weight loss %, BMI, muscle mass/grip strength**, reduced intake, validated screen (MST/SGA/GLIM)\n- Don't confuse **cachexia** (inflammation-driven, won't reverse with feeding alone) with **simple starvation** (reverses with feeding)",
   "cutoffs": [
    "**BMI <18.5 kg/m²** = underweight; **<16** = severe",
    "Unintentional weight loss **>5% in 1 month** or **>10% in 3–6 months** = significant",
    "Minimal/no intake **>5 days** (NICE) or **≥7 days** (AuSPEN) = at risk",
    "Albumin half-life **~20 days**, too slow & inflammation-confounded to track nutrition",
    "**MST score ≥2** = at risk → refer dietitian"
   ],
   "mnemonic": "Albumin = 'A Liar' for nutrition (it tracks inflammation). Assess nutrition with W-H-O-M: Weight loss, Height/BMI, Oral intake, Muscle.",
   "mcqTrap": "- 'Which best indicates this patient's nutritional status?'\n  - Tempting wrong: **serum albumin 24 g/L**\n  - Correct: **unintentional weight loss % + BMI + validated screen (MST/SGA)**\n  - Albumin reflects **inflammatory/illness state**, not nutrition",
   "viva": "- 'Is this low albumin telling you he's malnourished?' → **No, acute-phase reactant**\n- 'What WOULD you use?' → **MST/SGA, weight loss %, BMI**\n- 'Would you proceed with elective major surgery in a severely malnourished patient?' → **optimise/prehab first**",
   "tags": [
    "nutrition",
    "albumin-trap",
    "BMI",
    "malnutrition",
    "MST",
    "SGA",
    "GLIM"
   ],
   "source": "AuSPEN nutrition guidance; GLIM (Global Leadership Initiative on Malnutrition) criteria; Malnutrition Screening Tool (MST, Australian-developed, Ferguson et al.); NICE CG32 nutrition support thresholds (>5 days minimal intake, weight loss %).",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Marker</th><th>Use it for</th><th>Don't use it for</th></tr></thead><tbody><tr><td>Albumin (low)</td><td>Inflammation / illness severity</td><td><strong>Nutrition</strong> (negative acute-phase reactant, ~20-day t1/2)</td></tr><tr><td>BMI <span class=\"gv-num\">&lt;18.5</span></td><td>Underweight flag</td><td>Acute change (slow)</td></tr><tr><td>Weight loss <span class=\"gv-num\">&gt;10%</span>/3-6 mo</td><td>Significant malnutrition</td><td>-</td></tr><tr><td>MST / SGA / GLIM</td><td>Screening &amp; diagnosis</td><td>-</td></tr></tbody></table>",
   "title": "Nutrition assessment (albumin, BMI)",
   "subtitle": "why albumin is a TRAP marker",
   "id": "surg-perioperative-20"
  },
  {
   "topic": "Perioperative drugs: which to STOP vs CONTINUE (CA2.2 judgement)",
   "subarea": "Fluids, electrolytes & nutrition",
   "trap": "- Most tempting WRONG answers cluster around two errors:\n  - **(1) STOPPING drugs that should be CONTINUED**: beta-blockers (stopping risks **rebound tachycardia/ischaemia**), statins, and inhalers\n  - **(2) CONTINUING drugs that must be HELD**: ACE inhibitors/ARBs (omit morning of surgery → **refractory intra-op hypotension**) and metformin/SGLT2 inhibitors\n- Sneakiest single trap: the **SGLT2 inhibitor ('-gliflozin') causing euglycaemic DKA**\n  - Must be ceased before surgery and a **normal glucose does NOT reassure you**",
   "whatFirst": "- Build a **clean med list at pre-admission clinic** and classify each drug:\n  - **CONTINUE**: beta-blocker, statin, most antihypertensives except ACEi/ARB, inhalers, levothyroxine, anti-epileptics\n  - **HOLD**: ACEi/ARB morning of, metformin, SGLT2i, anticoagulants/antiplatelets per bleeding risk\n  - **SPECIAL PLAN**: insulin dose adjust, **steroids stress dosing**, DMARDs/biologics case-by-case",
   "redFlags": "- **SGLT2 inhibitor not ceased** → euglycaemic DKA peri-op (high anion gap acidosis with **near-normal glucose**, easy to miss)\n- **Abrupt beta-blocker cessation** → rebound ischaemia\n- **Long-term steroids stopped without stress cover** → Addisonian/adrenal crisis (hypotension unresponsive to fluids)\n- **ACEi/ARB continued** → vasoplegic intra-op hypotension",
   "discriminator": "- **ACEi/ARB**: HOLD morning of surgery (hypotension)\n- **Beta-blocker**: CONTINUE (don't stop established therapy)\n- **Metformin**: omit the day of surgery (lactic acidosis/contrast risk)\n- **SGLT2i ('flozins')**: OMIT for 3 days (2 days pre-procedure + day of procedure) per ADS; longer for bariatric\n- **Warfarin/DOAC/antiplatelet**: timing depends on thrombotic vs bleeding risk and renal function; **bridge high-risk only**",
   "cutoffs": [
    "**ACE inhibitor / ARB**: omit the **morning dose (day of surgery)**",
    "**SGLT2 inhibitor (-gliflozin)**: omit for **3 days = 2 days pre-procedure + day of procedure** (ADS); withhold earlier for bariatric surgery",
    "**Metformin**: omit on the **day of surgery** (and around contrast/major surgery)",
    "**Beta-blocker / statin**: CONTINUE peri-op",
    "Long-term prednisolone (e.g. **≥5 mg/day** or equivalent): **stress-dose steroid cover** for major surgery",
    "**DOAC**: stop **~24–48 h pre-op** (longer if CrCl reduced / high bleeding-risk surgery)"
   ],
   "mnemonic": "Hold the 'A's & 'flozins': ACEi/ARB (morning), Antidiabetics metformin + SGLT2i, Anticoagulants (risk-based). CONTINUE the heart drugs (Beta-blocker, statin). Steroids need a STRESS dose.",
   "mcqTrap": "- 'POD1 diabetic on empagliflozin, pH 7.1, glucose 8 mmol/L, ketones high, diagnosis?'\n  - Tempting wrong: **'not DKA, glucose normal'**\n  - Correct: **euglycaemic DKA** from the SGLT2 inhibitor, which should have been ceased pre-op (omit 3 days)\n  - **Normal glucose does NOT exclude DKA on a flozin**",
   "viva": "- 'Walk me through this patient's regular meds, what do you stop, continue, adjust, and why?'\n- Expect deep dive on: **ACEi/ARB hypotension**, **SGLT2i euglycaemic DKA** (3-day cessation), and **steroid stress cover** (consent + adrenal crisis)\n- ISBAR to anaesthetics if a **key drug wasn't withheld**",
   "tags": [
    "perioperative-medications",
    "SGLT2-euglycaemic-DKA",
    "ACE-inhibitor",
    "beta-blocker",
    "steroid-stress-dose",
    "CA2.2"
   ],
   "source": "ADS-ANZCA Perioperative Diabetes and Hyperglycaemia Guidelines (Adults) and ADS Periprocedural DKA with SGLT2 Inhibitor advice (CATAG/ADS 2024: omit SGLT2i 3 days = 2 days pre + day of procedure; metformin omit day of surgery). Therapeutic Guidelines (eTG, current) perioperative medication management.",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Drug</th><th>Peri-op plan</th><th>Why</th></tr></thead><tbody><tr><td>Beta-blocker, statin</td><td>CONTINUE</td><td>Rebound ischaemia / plaque effect</td></tr><tr><td>ACEi / ARB</td><td>HOLD morning of surgery</td><td>Refractory intra-op hypotension</td></tr><tr><td>SGLT2i (-gliflozin)</td><td>OMIT 3 days (2 pre + day of)</td><td>Euglycaemic DKA (normal glucose != safe)</td></tr><tr><td>Metformin</td><td>OMIT day of surgery</td><td>Lactic acidosis / contrast</td></tr><tr><td>Long-term steroid</td><td>STRESS-dose cover</td><td>Adrenal crisis</td></tr><tr><td>DOAC / warfarin / antiplatelet</td><td>Risk-based timing</td><td>Bleeding vs thrombosis balance</td></tr></tbody></table>",
   "title": "Perioperative drugs",
   "subtitle": "which to STOP vs CONTINUE (CA2.2 judgement)",
   "id": "surg-perioperative-21"
  },
  {
   "topic": "Post-op oliguria work-up — sequence before you reach for frusemide",
   "subarea": "Fluids, electrolytes & nutrition",
   "trap": "- Most tempting WRONG MCQ option: giving **frusemide to a post-op oliguric patient** to 'make them pee' — wrong and dangerous\n  - Most early post-op oliguria is **PRE-RENAL** (hypovolaemia + high ADH); a diuretic **worsens the volume deficit** and can precipitate AKI\n- Other classic trap: jumping to **'AKI, escalate to dialysis'** without first excluding cheap fixes:\n  - A **BLOCKED/kinked catheter** and **HYPOVOLAEMIA**",
   "whatFirst": "- **FLUSH/CHECK THE CATHETER FIRST** (rule out blocked IDC — commonest instantly-fixable cause)\n- Assess **volume status & perfusion** (HR, BP, JVP, cap refill, recent losses/drain output)\n- If volume-deplete and no overload signs: **250–500 mL balanced crystalloid fluid challenge** then reassess UO\n- Only then think **intrinsic/obstructive causes**",
   "redFlags": "- **Anuria** (obstruction/blocked catheter/vascular catastrophe)\n- **UO <0.3 mL/kg/hr** (threshold genuinely associated with post-op AKI)\n- Rising K+ with **ECG changes**, refractory acidosis, fluid overload/pulmonary oedema, uraemic features → urgent **senior/ICU/renal for possible RRT** (AEIOU indications)",
   "discriminator": "- **Pre-renal** (commonest post-op): responds to fluid, urine concentrated, **FeNa <1%**, bland sediment, high urea:Cr\n- **Intrinsic** (ATN from prolonged hypoperfusion, contrast, nephrotoxins, rhabdo): does NOT respond to fluid, **FeNa >2%**, muddy-brown casts\n- **Post-renal**: blocked catheter, clot, ureteric injury → palpable bladder or anuria, fixed by flushing/relieving obstruction\n- Distinguish **'permissive oliguria'** (transient, well-perfused, normal lactate, observe) from true hypoperfusion",
   "cutoffs": [
    "Oliguria = **UO <0.5 mL/kg/hr**",
    "**KDIGO Stage 1**: UO <0.5 mL/kg/hr for **6–12 h**, OR creatinine **1.5–1.9× baseline**, OR rise **≥26.5 micromol/L**",
    "**KDIGO Stage 2**: UO <0.5 mL/kg/hr **≥12 h**, OR creatinine **2.0–2.9× baseline**",
    "**KDIGO Stage 3**: UO <0.3 mL/kg/hr **≥24 h** OR anuria **≥12 h**, OR creatinine **≥3×** / **≥353.6 micromol/L** / RRT started",
    "Fluid challenge: **250–500 mL** balanced crystalloid, reassess"
   ],
   "mnemonic": "Oliguria ladder: Catheter (flush) -> Circulation (fill) -> Cause (pre/intra/post-renal). RRT indications AEIOU: Acidosis, Electrolytes (K+), Intoxications, Overload (fluid), Uraemia.",
   "mcqTrap": "- 'POD1, UO falls to 15 mL/hr in a 70 kg man, BP 95/60, HR 105, next step?'\n  - Tempting wrong: **IV frusemide 40 mg**\n  - Correct: **check/flush catheter**, then **250–500 mL crystalloid challenge** and reassess\n  - **Diuretic in a dry patient = harm**",
   "viva": "- 'Why not just give frusemide?' → **pre-renal hypovolaemia**, diuretic worsens it\n- ISBAR escalation when **UO <0.3 mL/kg/hr** or **K+ rising**\n- Differentiate **pre-renal vs ATN vs obstruction** and name **AEIOU dialysis triggers**",
   "tags": [
    "oliguria",
    "AKI",
    "KDIGO",
    "post-op",
    "fluid-challenge",
    "frusemide-trap"
   ],
   "source": "KDIGO 2012 AKI Clinical Practice Guideline (staging by creatinine + urine output) — the current standard used in Australian practice; perioperative oliguria literature (balanced crystalloid challenge, permissive oliguria concept).",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>KDIGO stage</th><th>Creatinine</th><th>Urine output</th></tr></thead><tbody><tr><td>1</td><td>1.5-1.9x baseline or >=26.5 micromol/L rise</td><td><span class=\"gv-num\">&lt;0.5</span> mL/kg/h for 6-12 h</td></tr><tr><td>2</td><td>2.0-2.9x baseline</td><td><span class=\"gv-num\">&lt;0.5</span> mL/kg/h >=12 h</td></tr><tr><td>3</td><td>>=3x or >=353.6 micromol/L or RRT</td><td><span class=\"gv-num\">&lt;0.3</span> mL/kg/h >=24 h / anuria >=12 h</td></tr></tbody></table><div class=\"gv-flow\"><span class=\"gv-step\">Flush catheter</span><span class=\"gv-step\">Assess volume</span><span class=\"gv-step\">250-500 mL challenge</span><span class=\"gv-step\">Reassess UO</span><span class=\"gv-step\">Escalate if &lt;0.3 / AEIOU</span></div>",
   "title": "Post-op oliguria work-up",
   "subtitle": "sequence before you reach for frusemide",
   "id": "surg-perioperative-22"
  },
  {
   "topic": "Refeeding syndrome — AuSPEN 2025 has changed the rules (no more 'start low go slow')",
   "subarea": "Fluids, electrolytes & nutrition",
   "trap": "- Most tempting WRONG (now OUTDATED) MCQ answer: **'start feeding at 5–10 kcal/kg/day and go slow'** (old NICE-derived advice)\n  - Current **AuSPEN 2025 consensus**: 'start low, go slow' is NOT supported by current evidence\n  - Recommends reaching **goal energy within 24–72 h** with monitoring\n- Classic trap: forgetting **THIAMINE BEFORE the first feed**\n  - Carbohydrate in a thiamine-deplete patient can precipitate **Wernicke's**\n- The hallmark electrolyte is **PHOSPHATE** (hypophosphataemia), not sodium",
   "whatFirst": "- Identify at-risk patient and give **THIAMINE + correct/replace electrolytes BEFORE/with starting feed**\n  - Never withhold feed waiting for normal electrolytes, but **give thiamine first**\n- Replace **K+/PO4/Mg** as you feed\n- Monitor **electrolytes daily**",
   "redFlags": "- A **≥30% fall in serum phosphate** from baseline within 72 h of meeting ≥50% of estimated requirements (AuSPEN diagnostic threshold) + clinical signs = **refeeding syndrome**\n- **Cardiac arrhythmia, respiratory failure, neuro signs** (confusion → **Wernicke's** if thiamine missed), fluid overload/oedema\n- Significant derangement → **stop advancing feed rate**, stabilise, escalate",
   "discriminator": "- **Refeeding vs ordinary post-op hypophosphataemia**: refeeding occurs specifically **within ~72 h of reintroducing nutrition**\n  - Insulin surge drives **K+/PO4/Mg intracellularly** + thiamine consumed\n- The **defining electrolyte is PHOSPHATE**\n- Distinguish from hyperglycaemia/HHS and from simple dilutional hyponatraemia\n- **AuSPEN 2025** requires all three: ≥50% of requirements provided over 24 h + **≥30% phosphate drop within 72 h** + clinical symptoms",
   "cutoffs": [
    "**AuSPEN 2025 diagnosis (all three)**: patient meeting **≥50% estimated nutrition requirements over 24 h** + **≥30% fall in serum phosphate within 72 h** of that + documented signs/symptoms of electrolyte imbalance",
    "Reach goal energy: within **24–72 h** of commencing nutrition support (if monitoring available)",
    "Thiamine: **IV 100 mg OR oral 100–300 mg daily**, before feed & for first **7–10 days**",
    "Risk factors include: **>10% weight loss** recently / malnutrition; minimal intake **≥7 days**; problematic alcohol use; ongoing GI losses",
    "**'Start low, go slow' is NOT supported** by current AuSPEN evidence"
   ],
   "mnemonic": "Refeeding = PHOSPHATE first. PO4/K/Mg drop; Thiamine before the spoon. AuSPEN 2025: reach goal in 24-72 h, NOT 'low and slow'.",
   "mcqTrap": "- 'Malnourished alcohol-dependent man, NBM 10 days, how to start feed?'\n  - Tempting wrong: **'start at 5 kcal/kg/day'** (old NICE) or 'give glucose immediately'\n  - Current Australian (AuSPEN 2025): **thiamine first**, monitor electrolytes daily, replace PO4/K/Mg, reach goal within 24–72 h\n  - Diagnosis = **≥30% phosphate drop** once ≥50% requirements given",
   "viva": "- 'Which electrolyte defines it?' → **phosphate**\n- 'What do you give before the first feed?' → **thiamine**\n- 'Has the advice changed?' → Flag **AuSPEN 2025 abandoning 'start low go slow'**\n- Escalate if **phosphate falls ≥30%** with arrhythmia",
   "tags": [
    "refeeding",
    "hypophosphataemia",
    "thiamine",
    "AuSPEN",
    "nutrition",
    "guideline-change"
   ],
   "source": "AuSPEN Consensus Statements on Refeeding Syndrome, Matthews-Rensch et al., Nutrition & Dietetics 2025 (PMC11973624) — current Australian standard. Older NICE CG32 'start low go slow' noted only for contrast.",
   "verified": true,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">>=50% requirements provided over 24 h</span><span class=\"gv-pill\">>=30% phosphate drop in 72 h</span><span class=\"gv-pill\">+ clinical symptoms</span></div><table class=\"gv-table\"><thead><tr><th>Step</th><th>Action</th></tr></thead><tbody><tr><td>Before feed</td><td>Thiamine IV <span class=\"gv-num\">100</span> mg / PO 100-300 mg daily x7-10 days</td></tr><tr><td>Reach goal</td><td>Within <span class=\"gv-num\">24-72</span> h (NOT 'low &amp; slow')</td></tr><tr><td>Monitor</td><td>K+ / PO4 / Mg daily; replace proactively</td></tr></tbody></table>",
   "title": "Refeeding syndrome",
   "subtitle": "AuSPEN 2025 has changed the rules (no more 'start low go slow')",
   "id": "surg-perioperative-23",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/ECG_long-QT_bionerd.jpg/960px-ECG_long-QT_bionerd.jpg",
     "caption": "Hypophosphataemia on ECG — prolonged QT, U waves (refeeding syndrome hallmark)",
     "alt": "Hypophosphataemia on ECG — prolonged QT, U waves (refeeding syndrome hallmark)",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Balancing bleeding vs clot risk + extended prophylaxis duration (the 'how long' MCQ)",
   "subarea": "VTE & thromboprophylaxis",
   "trap": "- Duration is examinable: most surgical inpatients continue pharmacological prophylaxis **until mobile/discharge**\n- **Extended prophylaxis** is indicated for:\n  - Major orthopaedic surgery (**THR / hip fracture ≈ 35 days**)\n  - Major abdominal/pelvic **cancer surgery (≈ 28 days / 4 weeks)**\n- The default **'stop on discharge'** is WRONG for these high-risk groups",
   "discriminator": "- Core CA2.2 judgement: **VTE risk vs bleeding risk is dynamic**\n  - Defer pharmacological prophylaxis when **bleeding risk is high** (use mechanical), then START once haemostasis is achieved (often **6–24h post-op**)\n- **'High bleeding risk'** (recent neurosurgery/spinal/ophthalmic, active bleed, platelets <50, coagulopathy) → mechanical-only and delayed pharmacological\n- Australian arthroplasty practice (**CRISTAL 2024**): **enoxaparin 40mg superior to aspirin** for symptomatic VTE after primary THR/TKR",
   "redFlags": "- Reassess if: **new bleeding**, **platelets fall (HIT)**, **epidural in situ**, **renal function deteriorates** (LMWH accumulation), or **planned return to theatre** — each may require holding pharmacological prophylaxis",
   "whatFirst": "- Daily reassessment:\n  - Is **bleeding risk now acceptable**?\n  - Has **mobility returned**?\n  - Does the surgery type mandate **extended (28–35 day) prophylaxis**?",
   "source": "eTG Therapeutic Guidelines (current); CRISTAL trial (2024, Australian THR/TKR); Arthroplasty Society of Australia VTE guidelines; Queensland Health / Safer Care Victoria",
   "viva": "- Examiner: 'THR patient, day of discharge — stop the enoxaparin?'\n  - Trap = yes. Correct = **NO**, extended prophylaxis **~35 days** (or switch to an oral agent for the duration)\n  - They probe how you **weigh bleeding vs clot day-to-day**",
   "mcqTrap": "- Most tempting wrong answer: **'stop prophylaxis at discharge after total hip replacement'** — WRONG; extended to **~35 days**\n- Second trap: starting LMWH **at the moment of incision** in a high-bleeding-risk case rather than after haemostasis",
   "mnemonic": "'Big bones & big cancer = extended.' THR/#NOF ≈ 35 days; major pelvic/abdo cancer surgery ≈ 28 days.",
   "cutoffs": [
    "Most inpatients: until **mobile/discharge**",
    "**THR / hip fracture**: extended **~35 days**",
    "**Total knee replacement**: **~14 days** (longer if high risk)",
    "**Major abdo/pelvic cancer surgery**: extended **~28 days (4 weeks)**",
    "Start pharmacological once **haemostasis secure** (often **6–24h post-op**)"
   ],
   "tags": [
    "duration",
    "extended-prophylaxis",
    "bleeding-vs-clot",
    "orthopaedic",
    "cancer"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Surgery</th><th>Duration of pharmacological prophylaxis</th></tr></thead><tbody><tr><td>General/abdominal (non-cancer)</td><td>Until mobile / discharge</td></tr><tr><td>Total hip replacement / #NOF</td><td><span class=\"gv-num\">~35 days</span> (extended)</td></tr><tr><td>Total knee replacement</td><td>~<span class=\"gv-num\">14 days</span> (longer in high risk)</td></tr><tr><td>Major abdominal/pelvic cancer surgery</td><td>~<span class=\"gv-num\">28 days</span> (4 weeks, extended)</td></tr></tbody></table>",
   "title": "Balancing bleeding vs clot risk + extended…",
   "id": "surg-perioperative-24"
  },
  {
   "topic": "DOAC cessation before surgery — the CrCl x bleeding-risk grid (and why you must NOT bridge a DOAC)",
   "subarea": "VTE & thromboprophylaxis",
   "trap": "- **Factor Xa inhibitors** (apixaban, rivaroxaban) and **dabigatran**: time-based stop intervals depend on CrCl and bleeding risk\n  - CrCl **≥50 mL/min**, LOW bleeding risk: stop **24h (1 day)** before\n  - CrCl **≥50 mL/min**, HIGH bleeding risk: stop **48h (2 days)** before\n  - CrCl **<50**: lengthen intervals (commonly **2 days** low / **≥3–4 days** high)\n  - **Dabigatran** (most renally cleared): longest intervals of all DOACs\n- Do **NOT bridge** with LMWH — DOACs have rapid on/off kinetics; bridging only adds bleeding\n- For **neuraxial** procedures: intervals are longer (often **~72h / 3 days**)",
   "discriminator": "- **DOAC vs warfarin** perioperative logic:\n  - DOAC = **simple time-based stop**, NO bridging\n  - Warfarin = stop **~5 days**, MAY bridge if high thrombotic risk\n- **Apixaban/rivaroxaban** (Xa inhibitors, less renal) vs **dabigatran** (heavily renal): the **renal-function discriminator** examiners test\n- **Neuraxial** procedures: longer intervals (often ~72h) for all DOACs",
   "redFlags": "- Emergency surgery on a DOAC → **reversal agent** urgently\n  - **Dabigatran** → **idarucizumab** (Praxbind)\n  - **Apixaban/rivaroxaban** → **PCC (prothrombinex)** is the practical Australian option (andexanet alfa supply discontinued)\n- Check **last dose time** + **renal function** urgently",
   "whatFirst": "- Identify the **DOAC** (apixaban/rivaroxaban vs dabigatran)\n- Identify the **CrCl**\n- Identify the **bleeding-risk category** (low vs high)\n- Read off the stop interval — do **NOT bridge**\n- Emergency presentation → use **reversal agent**",
   "source": "NSW CEC Periprocedural Anticoagulant/Antiplatelet Guideline (DOAC section under review 2025); THANZ / eTG (current); PAUSE study-informed practice",
   "viva": "- Examiner: 'Apixaban, CrCl 60, elective high-bleeding-risk surgery — when stop and do you bridge?'\n  - Answer: stop **48h before**, **no bridge**\n- Renal twist: 'Same patient on dabigatran, CrCl 40?'\n  - Answer: stop **longer** (≥72h+ for high risk)",
   "mcqTrap": "- Most tempting wrong answer: **'bridge the DOAC with therapeutic enoxaparin'** — DOACs are NOT bridged; bridging only increases bleeding\n- Second trap: applying **warfarin's 5-day rule** to a DOAC",
   "mnemonic": "'DOAC: don't bridge, just count days — 1 day low, 2 days high (CrCl≥50); dabigatran longer if kidneys weak.'",
   "cutoffs": [
    "Apixaban/rivaroxaban, CrCl **≥50**: stop **24h** (low risk) / **48h** (high risk)",
    "CrCl **<50**: lengthen (≈**2 days** low / ≥**3–4 days** high)",
    "Dabigatran (most renal): longest intervals, up to **~96h** if CrCl 30–50 + high risk",
    "Neuraxial: **~72h** (3 days)",
    "Do **NOT** bridge DOACs"
   ],
   "tags": [
    "DOAC",
    "perioperative-cessation",
    "no-bridging",
    "renal",
    "reversal"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>DOAC</th><th>CrCl</th><th>Low bleed risk</th><th>High bleed risk</th></tr></thead><tbody><tr><td>Apixaban / Rivaroxaban</td><td>≥50</td><td><span class=\"gv-num\">24 h</span></td><td><span class=\"gv-num\">48 h</span></td></tr><tr><td>Apixaban / Rivaroxaban</td><td>30–50</td><td><span class=\"gv-num\">~48 h</span></td><td><span class=\"gv-num\">~72 h</span></td></tr><tr><td>Dabigatran</td><td>≥50</td><td><span class=\"gv-num\">48 h</span></td><td><span class=\"gv-num\">72 h</span></td></tr><tr><td>Dabigatran</td><td>30–50</td><td><span class=\"gv-num\">~72 h</span></td><td><span class=\"gv-num\">72–96 h</span></td></tr></tbody></table>",
   "title": "DOAC cessation before surgery",
   "subtitle": "the CrCl x bleeding-risk grid (and why you must NOT bridge a DOAC)",
   "id": "surg-perioperative-25"
  },
  {
   "topic": "LMWH timing around neuraxial blockade — the spinal/epidural haematoma exam favourite",
   "subarea": "VTE & thromboprophylaxis",
   "trap": "- **Prophylactic LMWH**: wait **≥12h** after last dose before neuraxial needle insertion or catheter removal\n- **Therapeutic LMWH**: wait **≥24h** before block or catheter removal\n- Restart LMWH **≥4h AFTER** catheter removal/insertion\n- With epidural **catheter in situ**: do **NOT** give therapeutic-dose anticoagulation\n- Feared complication: **spinal/epidural haematoma** → permanent paraplegia",
   "discriminator": "- **Prophylactic (12h)** vs **therapeutic (24h)**: the single most-tested discriminator\n- **UFH SC prophylaxis**: block can proceed; ideally **≥4–6h** after dose\n- **Therapeutic IV UFH**: stop **≥4–6h**, check **aPTT/normal coagulation**\n- **Renal impairment** → extend LMWH interval beyond 12/24h",
   "redFlags": "- New **back pain** + bilateral leg weakness/numbness + bladder/bowel dysfunction after neuraxial in anticoagulated patient = **spinal/epidural haematoma**\n  - → **URGENT MRI** + neurosurgical decompression within hours\n  - Best outcomes if **decompressed early** — this is a **time-critical emergency**, not a 'review tomorrow'",
   "whatFirst": "- Before **needle**: confirm last LMWH dose timing meets the interval\n- Before **catheter removal**: same intervals apply\n- After removal: wait **≥4h** before next dose\n- New neurological deficit → **STAT MRI** + **neurosurgery**",
   "source": "ANZCA-endorsed ESRA/ASRA neuraxial antithrombotic intervals (Kietaibl et al. 2022); Australasian regional anaesthesia practice; eTG (current)",
   "viva": "- Examiner: 'Enoxaparin 40 mg, last dose 8h ago, wants spinal — proceed?'\n  - Answer: **No** — need **≥12h**\n- 'Epidural catheter in — can I give treatment-dose LMWH?'\n  - Answer: **No**\n- Then probes **haematoma red flags** + ISBAR escalation to neurosurgery",
   "mcqTrap": "- Most tempting wrong answer: **'24h after prophylactic LMWH before spinal'** — wrong; prophylactic is **12h**; 24h is for **therapeutic**\n- Reverse trap: **'12h after therapeutic dose'** — too short; therapeutic needs **24h**",
   "mnemonic": "'12 for prevent, 24 for treat, 4 to restart.' (12h prophylactic, 24h therapeutic, 4h after catheter out.)",
   "cutoffs": [
    "Prophylactic LMWH → wait **≥12h** before neuraxial / catheter removal",
    "Therapeutic LMWH → wait **≥24h** before neuraxial / catheter removal",
    "Restart LMWH **≥4h** after catheter removal/insertion",
    "**Renal impairment** → lengthen intervals"
   ],
   "tags": [
    "neuraxial",
    "LMWH-timing",
    "spinal-haematoma",
    "epidural"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Agent</th><th>Stop before block/removal</th><th>Restart after</th></tr></thead><tbody><tr><td>Prophylactic LMWH (enoxaparin 40 mg)</td><td><span class=\"gv-num\">≥12 h</span></td><td><span class=\"gv-num\">≥4 h</span> after catheter out</td></tr><tr><td>Therapeutic LMWH (1 mg/kg bd)</td><td><span class=\"gv-num\">≥24 h</span></td><td><span class=\"gv-num\">≥4 h</span> after catheter out</td></tr><tr><td>Therapeutic IV UFH</td><td>Stop <span class=\"gv-num\">4–6 h</span>, normal aPTT</td><td>≥1 h after</td></tr></tbody></table>",
   "title": "LMWH timing around neuraxial blockade",
   "subtitle": "the spinal/epidural haematoma exam favourite",
   "id": "surg-perioperative-26"
  },
  {
   "topic": "Mechanical vs pharmacological — when mechanical alone, when both, and the contraindications that flip the answer",
   "subarea": "VTE & thromboprophylaxis",
   "trap": "- **IPC (intermittent pneumatic compression)** > GCS: DEFAULT mechanical option\n- Mechanical is the **first choice** when pharmacological is contraindicated (high bleeding risk)\n- Mechanical should be **ADDED** to LMWH in high-risk surgery (combination is superior in major orthopaedic/cancer)\n- Mechanical is **NOT** a substitute for LMWH when LMWH is safe\n- Start mechanical at **induction/intra-op** and continue until mobile",
   "discriminator": "- **GCS contraindicated** in: significant peripheral arterial disease (**ABPI <0.8**), peripheral neuropathy, leg deformity, dermatitis/ulcers, recent skin graft\n- Classic stem: **diabetic with PAD** → do NOT put on TEDS; use IPC or pharmacological\n- **IPC preferred** (better evidence, fewer skin issues in arteriopaths)",
   "redFlags": "- Mechanical **contraindicated** in: established/critical limb ischaemia, severe leg oedema (e.g. acute CCF with massive swelling), dermatitis/cellulitis, recently grafted skin\n- **New/suspected DVT already present** → do NOT apply IPC (risk of dislodging clot)",
   "whatFirst": "- High bleeding risk → **mechanical first** (IPC)\n- High VTE-risk surgery + acceptable bleeding risk → **both** (combine)\n- Always check **legs/ABPI** before applying TEDS",
   "source": "Safer Care Victoria VTE Prevention Guideline; Queensland Health VTE Prevention Guideline; eTG (current)",
   "viva": "- Examiner: 'Patient with critical limb ischaemia and high bleeding risk — what prophylaxis?'\n  - Trap answer is **TEDS**\n  - Correct: **mechanical may be contraindicated** by PAD; weigh carefully; consider **IPC thigh-length only** if perfusion adequate; escalate/discuss",
   "mcqTrap": "- Most tempting wrong answer: **'graduated compression stockings for the diabetic vasculopath'** — PAD/neuropathy contraindicates GCS; use **IPC** or reassess pharmacological\n- Also wrong: **'mechanical instead of LMWH when LMWH is safe'** — combine in high-risk, do not downgrade",
   "mnemonic": "Mechanical is the BACKUP (bleeding risk) and the BOOSTER (added to LMWH in high-risk). Stockings off-limits if PAD/neuropathy/skin.",
   "tags": [
    "mechanical",
    "IPC",
    "GCS-contraindications",
    "PAD"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">High bleeding risk?</div><div class=\"gv-step\">YES → Mechanical only (prefer IPC); reassess pharmacological 24–48h</div><div class=\"gv-step\">NO + high-VTE surgery → LMWH + mechanical (combine)</div><div class=\"gv-step\">Check legs first: PAD / neuropathy / skin lesion → GCS contraindicated</div></div>",
   "title": "Mechanical vs pharmacological",
   "subtitle": "when mechanical alone, when both, and the contraindications that flip the answer",
   "id": "surg-perioperative-27",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/IPK.JPG/960px-IPK.JPG",
     "caption": "Intermittent pneumatic compression (IPC) device applied to lower limbs",
     "alt": "Pneumatic compression boots on a patient's legs — the gold-standard mechanical VTE prophylaxis",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Kompressionstruempfe.JPG/960px-Kompressionstruempfe.JPG",
     "caption": "Graduated compression stockings (TED stockings) — anti-embolic stockings",
     "alt": "Thigh-length anti-embolic compression stockings used as adjunct mechanical VTE prophylaxis",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Prophylactic enoxaparin — Australian dose, renal cut-off, weight extremes, and first-dose timing around surgery",
   "subarea": "VTE & thromboprophylaxis",
   "trap": "- Standard prophylactic enoxaparin = **40 mg SC once daily**\n- **Renal cut-off CrCl <30 mL/min**: reduce dose (AU/UK labelling = **20 mg SC daily**) OR switch to **UFH 5000 units SC bd/tds**\n  - LMWH is **renally cleared** → accumulates in renal failure → bleeding\n- First post-op dose timing: typically **6–12h post-op** once haemostasis secured (not immediately at incision)",
   "discriminator": "- **Enoxaparin vs UFH**: choose **UFH (5000 U SC bd–tds)** when CrCl <30 (no accumulation, shorter half-life, **protamine-reversible**)\n- UFH also preferred in very high bleeding risk needing rapid off-switch\n- **Low weight <50 kg** → consider dose reduction\n- **Obesity** → some protocols increase dose (e.g. **40 mg bd**) — flag local protocol",
   "redFlags": "- Falling platelets **>50% from baseline** at **day 5–10** of any heparin = **HIT**\n  - → **STOP heparin**, do NOT give platelets, start **non-heparin anticoagulant**\n- Unexpected bleeding on LMWH in renal failure → check **anti-Xa**, consider accumulation",
   "whatFirst": "- Check **CrCl** and **weight** BEFORE prescribing dose\n- Confirm **surgical haemostasis** before first post-op dose",
   "source": "eTG Therapeutic Guidelines (current); enoxaparin (Clexane) Australian Product Information (TGA); Queensland Health / Safer Care Victoria VTE guidelines",
   "viva": "- Examiner: 'eGFR 22, needs prophylaxis — what and how much?'\n  - Answer: **reduced-dose enoxaparin (20 mg daily** AU/UK labelling) OR **UFH 5000 U SC bd**\n  - State WHY: **renal accumulation** of LMWH; **protamine-reversibility** of UFH",
   "mcqTrap": "- Most tempting wrong answer: **'enoxaparin 40 mg daily regardless of renal function'** — at CrCl <30, reduce dose or use UFH\n- Second trap: giving the dose **at induction** — wait until haemostasis (usually post-op)",
   "mnemonic": "'40 normal, drop it for kidneys' (CrCl<30 → reduce, AU/UK = 20 mg). Renal failure → reach for UFH (Unaffected by Failing kidneys, Undoable with protamine).",
   "tags": [
    "enoxaparin-dose",
    "renal-CrCl",
    "UFH-alternative",
    "HIT"
   ],
   "verified": false,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Scenario</th><th>Agent / dose</th></tr></thead><tbody><tr><td>Standard prophylaxis</td><td>Enoxaparin <span class=\"gv-num\">40 mg</span> SC daily</td></tr><tr><td>CrCl &lt;30 mL/min</td><td>Reduced dose (AU/UK: <span class=\"gv-num\">20 mg</span> SC daily) OR UFH 5000 U SC bd</td></tr><tr><td>Weight &lt;50 kg</td><td>Consider dose reduction</td></tr><tr><td>Very high bleeding risk / needs reversibility</td><td>UFH 5000 U SC bd–tds (protamine-reversible)</td></tr></tbody></table>",
   "title": "Prophylactic enoxaparin",
   "subtitle": "Australian dose, renal cut-off, weight extremes, and first-dose timing around surgery",
   "id": "surg-perioperative-28"
  },
  {
   "topic": "VTE risk stratification — who actually needs pharmacological prophylaxis (and the 'low-risk day surgery' trap)",
   "subarea": "VTE & thromboprophylaxis",
   "trap": "- **EVERY admitted surgical patient** requires a documented **VTE risk assessment on admission** — the single examinable mandate\n- Pharmacological prophylaxis indicated when **VTE risk outweighs bleeding risk**\n- Default pharmacological ON for most major surgery (abdominal/pelvic, orthopaedic, cancer, prolonged/major) UNLESS bleeding risk is high\n- **Major orthopaedic** (THR/TKR, hip fracture) = **highest-risk group**\n- Catch: **'low-risk minor day-case surgery in a fully mobile patient'** needs only early mobilisation ± mechanical, NOT routine LMWH — but **assessment must still be documented**",
   "discriminator": "- Surgery-related risk drivers: **major/pelvic/orthopaedic/cancer/duration >90 min**\n- Patient-related risk drivers: prior VTE, active cancer, **age >60**, obesity BMI >30, thrombophilia, COCP/HRT, pregnancy/puerperium, immobility\n- **Prior VTE** + **active cancer** = two single biggest patient flags\n- Australian practice = **mandatory structured assessment**, agent tailored to surgery type",
   "redFlags": "- **No VTE risk assessment documented** = a never-event in audit\n- High bleeding risk (active bleeding, severe thrombocytopenia **<50**, untreated coagulopathy, recent intracranial/spinal/eye surgery)\n  - → withhold pharmacological, use **mechanical**, reassess in **24–48h**",
   "whatFirst": "- **Assess and document** VTE risk vs bleeding risk on admission\n- Choose **mechanical and/or pharmacological** prophylaxis accordingly\n- **Reassess daily**",
   "source": "Safer Care Victoria VTE Prevention Guideline; Queensland Health VTE Prevention Guideline; eTG Therapeutic Guidelines (current)",
   "viva": "- Examiner probes: 'When do you assess?'\n  - Answer: **on admission AND reassess daily** / with clinical change\n- Name the **high-bleeding-risk situations** that make you defer pharmacological prophylaxis",
   "mcqTrap": "- Most tempting wrong answer: **'all surgical patients should receive LMWH'** — truly low-risk fully-mobile minor day cases need only mobilisation ± mechanical\n- The **universal requirement is the assessment**, not the drug",
   "mnemonic": "Risk = SURGERY + PATIENT. 'CAMPO' patient flags: Cancer, Age>60, Mobility(immobile), Prior VTE, Obesity (+hormones, thrombophilia).",
   "tags": [
    "risk-stratification",
    "documentation",
    "bleeding-vs-clot"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Risk tier</th><th>Typical surgery</th><th>Prophylaxis</th></tr></thead><tbody><tr><td>Low</td><td>Minor day-case, fully mobile</td><td>Early mobilisation ± mechanical; document only</td></tr><tr><td>Moderate</td><td>Most general/abdominal/pelvic</td><td>LMWH + mechanical</td></tr><tr><td>High</td><td>Major orthopaedic (THR/TKR/#NOF), major cancer surgery</td><td>LMWH (extended) + mechanical</td></tr><tr><td>High bleeding risk</td><td>Any of above + active bleed/coagulopathy</td><td>Mechanical only; reassess pharmacological in 24–48h</td></tr></tbody></table>",
   "title": "VTE risk stratification",
   "subtitle": "who actually needs pharmacological prophylaxis (and the 'low-risk day surgery' trap)",
   "id": "surg-perioperative-29"
  },
  {
   "topic": "Warfarin perioperatively — stop 5 days, INR <1.5, and the BRIDGE-trial 'who to bridge' judgement",
   "subarea": "VTE & thromboprophylaxis",
   "trap": "- Stop warfarin **~5 days** before surgery; aim **INR <1.5** on the day\n- If INR **1.5–1.8** the day before: give **vitamin K 1–2 mg oral**\n- **Bridging** with therapeutic LMWH is reserved for **HIGH thrombotic risk ONLY**\n  - Most AF patients do **NOT** need bridging (**BRIDGE trial**: no thromboembolism reduction, roughly **tripled major bleeding**)\n- Restart warfarin **post-op** (usually evening of surgery if haemostasis secure)",
   "discriminator": "- **BRIDGE** indicated for: mechanical heart valve (esp. **mitral/older-generation**), VTE within last **3 months**, recent stroke/TIA/systemic embolism **<3 months**, severe thrombophilia, very high CHA2DS2-VASc with prior stroke\n- **NO BRIDGE**: uncomplicated AF for stroke prevention\n- Bridging LMWH: stop therapeutic dose **24h before** surgery; do NOT restart therapeutic dose until **≥48–72h post-op** if high bleeding risk",
   "redFlags": "- Emergency surgery on warfarin with high INR → **vitamin K 5–10 mg IV** PLUS **prothrombinex (PCC)** (immediate factor replacement) ± FFP\n  - Do NOT rely on vitamin K alone (takes **6–12h**)\n- Supratherapeutic INR + bleeding = **reverse now**",
   "whatFirst": "- **Stratify thrombotic risk** → decide bridge or not\n- Stop **warfarin 5 days** pre-op\n- Check **INR** day before / of surgery\n- Give **vitamin K** if INR still elevated\n- Restart warfarin post-op once haemostasis secure",
   "source": "eTG Therapeutic Guidelines (current); NSW CEC Periprocedural Guideline (current); BRIDGE trial (NEJM 2015) informing Australian practice",
   "viva": "- Examiner: 'AF on warfarin CHA2DS2-VASc 3, elective hernia — bridge?'\n  - Answer: **No** (BRIDGE trial)\n- 'Mechanical mitral valve?'\n  - Answer: **Yes, bridge**\n- Then: emergency-reversal pathway via ISBAR to haematology/anaesthetics",
   "mcqTrap": "- Most tempting wrong answer: **'bridge all warfarin patients with enoxaparin to prevent stroke'** — bridging uncomplicated AF causes more bleeding without benefit (**BRIDGE trial**)\n- Also wrong: **'give FFP to electively reverse'** — vitamin K ± PCC is Australian first-line; FFP is a volume-heavy adjunct",
   "mnemonic": "'5 days, INR under 1.5.' Bridge only the BIG clotters: Bad valve (mechanical), Blood clot <3mo, Brain event <3mo, Bad thrombophilia.",
   "cutoffs": [
    "Stop warfarin **~5 days** pre-op",
    "Target INR **<1.5** on day of surgery",
    "INR **1.5–1.8** → vitamin K **1–2 mg PO**",
    "Emergency reversal: vitamin K **5–10 mg IV** + **prothrombinex (PCC)**"
   ],
   "tags": [
    "warfarin",
    "bridging",
    "BRIDGE-trial",
    "INR",
    "PCC-reversal"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Stop warfarin ~5 days pre-op</div><div class=\"gv-step\">High thrombotic risk? (mechanical valve / VTE or stroke &lt;3mo / severe thrombophilia)</div><div class=\"gv-step\">YES → bridge with therapeutic LMWH (stop 24h pre-op)</div><div class=\"gv-step\">NO (e.g. uncomplicated AF) → do NOT bridge (BRIDGE trial)</div><div class=\"gv-step\">Check INR; target &lt;1.5; vit K 1–2mg if 1.5–1.8</div></div>",
   "title": "Warfarin perioperatively",
   "subtitle": "stop 5 days, INR <1.5, and the BRIDGE-trial 'who to bridge' judgement",
   "id": "surg-perioperative-30"
  }
 ]
}
);
