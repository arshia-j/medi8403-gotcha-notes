window.GOTCHA = window.GOTCHA || { modules: [] };
window.GOTCHA.modules.push(
{
 "id": "respiratory",
 "name": "Respiratory",
 "category": "Medicine",
 "blurb": "Written-exam + VIVA. ABG/CXR/spirometry interpretation; asthma/COPD, pneumonia, PE and pneumothorax what-first calls.",
 "cards": [
  {
   "topic": "ABG in acute asthma — why a 'normal' CO2 is the scariest result",
   "subarea": "Asthma & COPD",
   "discriminator": "- In acute asthma patient hyperventilates → expected ABG is **LOW PaCO2** (respiratory alkalosis)\n- A **NORMAL or RISING PaCO2** = patient can no longer maintain that minute ventilation = tiring = **impending respiratory failure**\n  - It is NOT reassuring — it is **ominous**",
   "whatFirst": "- A **normalising/rising PaCO2** in a fatiguing patient → treat as **life-threatening**\n  - Call **senior/ICU** help\n  - Maximise **bronchodilators + steroid + MgSO4**\n  - Prepare for **intubation**\n- Decision to intubate is **CLINICAL** (exhaustion, decreasing conscious state), not a single ABG number",
   "trap": "- Tempting wrong MCQ answer: '**PaCO2 40 mmHg (normal)** — patient is stable/improving' — WRONG\n  - In a still-symptomatic asthmatic, a normal CO2 signals **exhaustion**\n  - The respiratory alkalosis has been **'used up'**",
   "redFlags": "- **PaCO2 rising** into or above normal range\n- **Falling pH**\n- Falling **respiratory effort**\n- **Drowsiness**",
   "viva": "- Say: 'The worrying feature is a **normalising CO2** — in asthma I expect hypocapnia, so a normal or high CO2 in a still-breathless patient means they're tiring and heading for **type 2 failure**'\n- Examiner probes whether you'd intubate on the gas alone: **no — clinical picture** drives that decision",
   "mnemonic": "In asthma, a 'normal' CO2 is an abnormal CO2.",
   "source": "Australian Asthma Handbook (NACA, current) — hypercapnoea indicates the patient is tiring and may need ventilatory support; TSANZ acute oxygen guidance",
   "tags": [
    "asthma",
    "ABG",
    "CO2",
    "respiratory failure"
   ],
   "mcqTrap": "- '**Normal PaCO2**' offered as the reassuring/stable option — it is actually a **pre-arrest sign** in an active asthma attack",
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Early attack: low PaCO2 (hyperventilating) = expected</div><div class=\"gv-step\">Tiring: PaCO2 climbs to 'normal' = WARNING</div><div class=\"gv-step\">Failing: PaCO2 high + pH falling = peri-arrest → intubate</div></div>",
   "title": "ABG in acute asthma",
   "subtitle": "why a 'normal' CO2 is the scariest result",
   "id": "respiratory-1",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Davenport_fig_1_Important_acid-base_reactions_involving_carbon_dioxide.jpg",
     "caption": "ABG pH-PaCO2 nomogram — acute asthma respiratory alkalosis progressing to normalisation (danger zone)",
     "alt": "Acid-base nomogram illustrating that a 'normal' PaCO2 in a still-symptomatic asthmatic indicates fatigue and impending respiratory failure rather than improvement",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Acute asthma drug escalation — exact Australian doses and the order",
   "subarea": "Asthma & COPD",
   "discriminator": "- **Salbutamol** first-line for ALL severities\n- **Ipratropium** is ADD-ON for severe/life-threatening (not solo)\n- **IV MgSO4** reserved for severe/life-threatening with POOR response to repeated bronchodilators — not first-line\n- **Systemic steroid** given EARLY (within 1 hour) to everyone regardless of severity (takes hours to work)",
   "whatFirst": "- **O2** only if SpO2 <92%, titrate to **93–95%**\n- **Salbutamol**: pMDI+spacer **4–12 actuations** (12 if severe) repeated every 20 min in the first hour\n  - Life-threatening → **continuous nebulised (2 x 5 mg nebules)** driven by O2\n- Add **ipratropium 8 actuations** (21 microg each) via spacer every 20 min for the first hour, then 4–6 hourly\n- **Systemic steroid early**: prednisone/prednisolone **37.5–50 mg PO** (or IV hydrocortisone if can't swallow)\n- Severe/poor response → **IV MgSO4 0.2 mmol/kg** (max 10 mmol) over 20 min, single dose",
   "trap": "- Tempting wrong MCQ answer: '**give IV salbutamol**' or '**give IV aminophylline**' early — WRONG\n  - Australian first-line is **inhaled/nebulised salbutamol**\n  - IV agents and aminophylline are later/ICU-level and not routine\n- Also tempting: giving **ipratropium as monotherapy** — it is an add-on only",
   "redFlags": "- No response to repeated bronchodilators → add **IV MgSO4** and escalate to ICU",
   "viva": "- Say doses out loud confidently: 'Salbutamol **12 actuations** via spacer repeated every 20 minutes, add **ipratropium 8 actuations**, early **prednisolone 37.5–50 mg**, and for poor response **IV magnesium 0.2 mmol/kg** up to 10 mmol over 20 minutes'\n- Examiner probes role of magnesium: **reserve, single dose**\n- Examiner probes why steroid given early: **slow onset** (takes hours to work)",
   "mnemonic": "O SHM — Oxygen, Salbutamol, +ipratropium, Hydrocortisone/steroid, Magnesium.",
   "source": "Australian Asthma Handbook (NACA, current); NAC 'Asthma in Adults' Quick Reference Guide Oct 2024 (Table 5 doses)",
   "tags": [
    "asthma",
    "salbutamol",
    "ipratropium",
    "magnesium",
    "steroid",
    "doses"
   ],
   "mcqTrap": "- **Early IV salbutamol or IV aminophylline** picked as escalation — WRONG; Australian practice is inhaled/nebulised salbutamol first, with **IV MgSO4** reserved for poor responders",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Drug</th><th>Dose (adult)</th><th>When</th></tr><tr><td>Salbutamol pMDI+spacer</td><td>4-12 actuations, repeat q20min x1hr</td><td>All; 12 if severe</td></tr><tr><td>Salbutamol nebulised</td><td>2 x 5 mg, continuous, O2-driven</td><td>Life-threatening</td></tr><tr><td>Ipratropium spacer</td><td>8 actuations (21 microg ea) q20min x1hr, then 4-6 hrly</td><td>Severe / life-threatening (add-on)</td></tr><tr><td>Prednisolone PO</td><td>37.5-50 mg within 1hr, then daily 5-10 days</td><td>Early, ALL severities</td></tr><tr><td>IV MgSO4</td><td>0.2 mmol/kg (max 10 mmol) over 20 min, single</td><td>Severe + poor response</td></tr></table>",
   "title": "Acute asthma drug escalation",
   "subtitle": "exact Australian doses and the order",
   "id": "respiratory-2"
  },
  {
   "topic": "Acute asthma severity — the signs that mean IMMINENT arrest (not just 'bad')",
   "subarea": "Asthma & COPD",
   "discriminator": "- **SEVERE** (any one):\n  - Can't complete a **sentence in one breath**\n  - Accessory muscle use / tracheal tug / subcostal recession\n  - Obvious distress\n  - SpO2 **90–94%**\n- **LIFE-THREATENING** (any one):\n  - Reduced **consciousness**/collapse\n  - **Exhaustion**\n  - **Cyanosis**\n  - SpO2 **<90%**\n  - Poor respiratory effort with **soft/absent breath sounds** ('silent chest')\n- Wheeze **LOUDNESS does NOT track severity** — a quiet/silent chest is worse than a loud wheeze (no air moving)",
   "whatFirst": "- Recognise **life-threatening features** → call for help/resus\n- **Oxygen** titrated to target\n- **Continuous nebulised salbutamol** driven by O2 + ipratropium\n- **Systemic steroid**\n- **IV MgSO4**\n- Escalate to **ICU/anaesthetics** for possible ventilatory support\n- Do NOT wait for an **ABG** to treat",
   "trap": "- Tempting wrong MCQ answer: choosing the patient with the **LOUDEST wheeze** + visible distress as 'most severe'\n  - Exam-catching answer: the **drowsy patient with soft/absent breath sounds** and falling respiratory effort — that is peri-arrest\n  - **Loud wheeze** = air still moving; **soft/absent breath sounds** = it isn't",
   "redFlags": "- **Soft/absent breath sounds**\n- **Cyanosis**\n- **Exhaustion**\n- Drowsiness/confusion/collapse\n- SpO2 **<90%**\n- Normalising or **rising PaCO2**",
   "viva": "- Say out loud: 'This is **life-threatening asthma** — soft/absent breath sounds and exhaustion. I'd call for senior/ICU help, give **continuous nebulised salbutamol and ipratropium** driven by oxygen, **systemic steroid and IV magnesium**, and prepare for **ventilatory support**'\n- Examiner probes why absent chest is dangerous: **no airflow**\n- Examiner probes why tiring patient is pre-arrest: can no longer maintain **minute ventilation**",
   "mnemonic": "Silent chest = the calm before the crash.",
   "source": "Australian Asthma Handbook (NACA, current); National Asthma Council 'Asthma in Adults' Quick Reference Guide, Oct 2024 — Table 5 acute asthma severity (primary care)",
   "tags": [
    "asthma",
    "acute",
    "severity",
    "silent chest",
    "life-threatening"
   ],
   "mcqTrap": "- The most distressed-looking, **loudest-wheezing patient** labelled 'most severe' — WRONG; the **drowsy patient with soft/absent breath sounds** is peri-arrest",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Feature</th><th>Severe (any)</th><th>Life-threatening (any)</th></tr><tr><td>Speech</td><td>Cannot complete a sentence in one breath</td><td>Cannot speak / exhausted</td></tr><tr><td>SpO2 (RA)</td><td>90-94%</td><td>&lt;90%</td></tr><tr><td>Chest/effort</td><td>Accessory muscles, tracheal tug, recession</td><td>Soft/absent breath sounds, poor effort</td></tr><tr><td>Conscious state</td><td>Alert, distressed</td><td>Reduced consciousness / collapse</td></tr><tr><td>Other</td><td>Obvious respiratory distress</td><td>Cyanosis</td></tr></table>",
   "title": "Acute asthma severity",
   "subtitle": "the signs that mean IMMINENT arrest (not just 'bad')",
   "id": "respiratory-3"
  },
  {
   "topic": "Asthma preventer — the 2025 game-changer: SABA-only is DEAD",
   "subarea": "Asthma & COPD",
   "discriminator": "- The big change (**Australian Asthma Handbook 2025 update**): treatment solely with as-needed SABA is **NO LONGER recommended** for ANY adult/adolescent (12+), even with infrequent symptoms\n- First-line is now **AIR** (Anti-inflammatory Reliever) = as-needed low-dose **budesonide-formoterol**\n- **Every treatment step** now contains an ICS",
   "whatFirst": "- Newly diagnosed mild asthma → **as-needed low-dose ICS-formoterol (AIR-only)**\n  - Not controlled / symptoms most days or frequent exacerbations → **MART** (Maintenance And Reliever Therapy)\n  - MART = regular low-dose ICS-formoterol PLUS extra as-needed doses from the **same inhaler**\n- Step up → **medium-dose MART**, then targeted intensive (ICS-LABA ± LAMA or biologic)",
   "trap": "- Tempting wrong MCQ answer: **'mild/infrequent asthma → as-needed salbutamol (SABA) alone'**\n  - This was correct under old guidelines but is now **explicitly WRONG** in Australia\n- Also wrong: using a **SABA as the reliever** within a MART regimen\n  - The reliever must be the **ICS-formoterol itself**",
   "redFlags": "- Reliance on **SABA overuse** (≥1 canister/month, or ≥3 canisters/year) signals poor control and higher **exacerbation/death risk**",
   "viva": "- Say: 'Under the current handbook I would **not use SABA alone** — even mild asthma gets as-needed budesonide-formoterol as anti-inflammatory reliever, stepping up to MART if uncontrolled'\n- Examiner probes **why**:\n  - SABA-only increases severe exacerbations/death\n  - ICS-formoterol reduces them — **AIR cuts severe exacerbations needing OCS by ~55%** vs SABA",
   "mnemonic": "Every step has a steroid: AIR → low MART → medium MART → targeted.",
   "source": "Australian Asthma Handbook 2025 update (NACA, published Sept 2025) — adult/adolescent treatment; Asthma Australia health-professional summary",
   "tags": [
    "asthma",
    "preventer",
    "ICS-formoterol",
    "AIR",
    "MART",
    "stepwise",
    "2025 change"
   ],
   "mcqTrap": "- **'As-needed salbutamol alone'** for mild asthma — the classic answer, now **explicitly NOT recommended** in the current Australian Asthma Handbook",
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Start: as-needed low-dose budesonide-formoterol (AIR-only)</div><div class=\"gv-step\">Step up: low-dose MART</div><div class=\"gv-step\">Step up: medium-dose MART</div><div class=\"gv-step\">Targeted intensive: ICS-LABA ± LAMA / biologic</div></div>",
   "title": "Asthma preventer",
   "subtitle": "the 2025 game-changer: SABA-only is DEAD",
   "id": "respiratory-4"
  },
  {
   "topic": "Asthma vs COPD exacerbation — the oxygen target flips, don't mix them up",
   "subarea": "Asthma & COPD",
   "discriminator": "- Acute **ASTHMA** O2 target = **93-95%** (start O2 if SpO2 <92%; avoid >95% over-oxygenation), UNLESS that patient is at hypercapnia risk\n- Acute **COPD** / any T2RF-risk patient = **88-92%**\n- Don't reflexively apply 88-92% to an asthmatic, and don't reflexively flood a COPD patient\n  - The **flip** is a favourite MCQ discriminator",
   "whatFirst": "- Identify **T2RF risk**: COPD, obesity hypoventilation, neuromuscular, chest-wall, severe bronchiectasis/CF, prior NIV/hypercapnia\n  - Risk present → **88-92%**\n  - No risk (typical asthma) → start O2 if SpO2 **<92%** and titrate to **93-95%**",
   "trap": "- Tempting wrong MCQ answer: applying **88-92%** to a young asthmatic (under-oxygenating a hypoxic asthmatic) OR **94-98%** to a COPD retainer\n  - The same vignette can be **flipped just by changing the diagnosis**",
   "redFlags": "- Asthmatic with **rising CO2** may THEN warrant the lower target + **ventilatory support** — judgement, not reflex",
   "viva": "- Say: 'Target depends on hypercapnia risk: **93-95%** for the asthmatic, **88-92%** for the COPD patient at risk of type 2 failure'\n- Examiner may **switch the diagnosis mid-question** to see if you switch the target",
   "mnemonic": "Asthma low-90s-up, COPD high-80s.",
   "source": "NAC 'Asthma in Adults' Quick Reference Guide Oct 2024 (asthma target 93-95%, O2 if SpO2 <92%); COPD-X X3.1 (88-92%); TSANZ Acute Oxygen Guidelines",
   "tags": [
    "oxygen",
    "asthma",
    "COPD",
    "target",
    "discriminator",
    "T2RF"
   ],
   "mcqTrap": "- Using the **88-92% COPD target for an acute asthmatic** (or 94-98% for a COPD patient) — the target **flips with the diagnosis**/hypercapnia risk",
   "verified": true,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Acute asthma (no T2RF risk): 93-95%</span><span class=\"gv-pill\">Start O2 if SpO2 &lt;92%</span><span class=\"gv-pill\">COPD / T2RF risk: 88-92%</span></div>",
   "title": "Asthma vs COPD exacerbation",
   "subtitle": "the oxygen target flips, don't mix them up",
   "id": "respiratory-5",
   "images": [
    {
     "src": "assets/img/respiratory_cxr_hyperinflation_copd_01.jpg",
     "caption": "COPD exacerbation CXR — hyperinflation with emphysematous changes",
     "alt": "Chest X-ray in COPD exacerbation showing hyperinflated lungs, flattened hemidiaphragms, barrel chest and bullous emphysematous changes — a different disease to asthma requiring different oxygen targets",
     "credit": "James Heilman MD (Jmh649), Wikimedia Commons, CC BY-SA 3.0 (cropped)"
    }
   ]
  },
  {
   "topic": "COPD exacerbation — drugs, antibiotics (purulent sputum) and the NIV trigger",
   "subarea": "Asthma & COPD",
   "discriminator": "- Bundle: **controlled O2** + nebulised/spacer salbutamol ± ipratropium + systemic steroid (**prednisolone 30-50 mg PO daily for 5 days**) + antibiotics ONLY for purulent sputum / Anthonisen criteria\n- Antibiotics are **NOT for every exacerbation** — COPD-X gives them for **purulent sputum**\n  - Anthonisen criteria: increased dyspnoea, increased sputum **volume**, increased sputum **purulence**\n- First-line Australian antibiotic: **amoxycillin or doxycycline** for 5 days",
   "whatFirst": "- **O2 to 88-92%** → bronchodilators → prednisolone 30-50 mg daily x5 days → antibiotics if sputum **purulent** → ABG\n- If respiratory acidosis persists despite optimal therapy → **NIV (bilevel)**:\n  - Acidosis **pH ~7.30-7.35** with **PaCO2 >45 mmHg**\n  - NIV reduces intubation and mortality",
   "trap": "- Tempting wrong MCQ answer: **'give antibiotics to every COPD exacerbation'** or a **'10-14 day steroid course'**\n  - Australian practice: antibiotics only if **purulent sputum**\n  - **Prednisolone 30-50 mg for 5 days** (longer adds harm, not benefit — may increase mortality/pneumonia)\n- Another trap: **intubate first** — NIV is first-line for hypercapnic acidotic exacerbations",
   "redFlags": "- **pH ≤7.35 + PaCO2 >45** despite therapy → **NIV**\n- Declining conscious state, exhaustion, or NIV contraindication/failure → **intubation**",
   "viva": "- Say: 'Controlled O2 to **88-92%**, nebulised bronchodilators, **prednisolone 30-50 mg for 5 days**, antibiotics only if the sputum is **purulent**, and if there's a respiratory acidosis (**pH 7.30-7.35** with a high CO2) despite treatment I'd start NIV'\n- Examiner probes **who gets antibiotics** (purulence) and the **NIV numbers**",
   "mnemonic": "Anthonisen 'increased x3': Dyspnoea, sputum Volume, sputum Purulence → consider antibiotics; purulence is the key trigger.",
   "source": "COPD-X Plan X2.2 / X3.2 (Lung Foundation Australia / TSANZ, current — prednisolone 30-50 mg x5 days; amoxycillin or doxycycline x5 days for purulent sputum; NIV for acidosis); eTG (Therapeutic Guidelines, current)",
   "tags": [
    "COPD",
    "exacerbation",
    "antibiotics",
    "Anthonisen",
    "prednisolone",
    "NIV",
    "BiPAP"
   ],
   "mcqTrap": "- Antibiotics + a **2-week steroid course** for every exacerbation — Australian practice is **5-day prednisolone 30-50 mg** and antibiotics only for **purulent sputum**",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Step</th><th>Detail</th></tr><tr><td>Oxygen</td><td>Controlled, SpO2 88-92%</td></tr><tr><td>Bronchodilators</td><td>Salbutamol ± ipratropium (spacer or nebulised)</td></tr><tr><td>Steroid</td><td>Prednisolone 30-50 mg PO daily x5 days</td></tr><tr><td>Antibiotics</td><td>If purulent sputum (Anthonisen): amoxycillin or doxycycline x5 days</td></tr><tr><td>NIV (bilevel)</td><td>Respiratory acidosis pH ~7.30-7.35 + PaCO2 &gt;45 mmHg despite optimal Rx</td></tr></table>",
   "title": "COPD exacerbation",
   "subtitle": "drugs, antibiotics (purulent sputum) and the NIV trigger",
   "id": "respiratory-6"
  },
  {
   "topic": "COPD exacerbation oxygen — the 88-92% target and the fatal high-flow trap",
   "subarea": "Asthma & COPD",
   "discriminator": "- In patients at risk of **type 2 (hypercapnic) respiratory failure** — COPD, obesity hypoventilation, neuromuscular/chest-wall, bronchiectasis/CF — target SpO2 **88-92%**, NOT 94-98%\n- Acute asthma (no hypercapnia risk) targets **~93-95%** (avoid >95%)\n- General TSANZ acutely-unwell target: **92-96%** ('swimming between the flags')\n- Controlled O2 delivery: **nasal prongs 0.5-2.0 L/min or 24-28% Venturi**; titrate\n- **AVOID** routine high-flow Hudson/non-rebreather",
   "whatFirst": "- Give **controlled O2 to 88-92%**, get an ABG\n- Do **NOT withhold oxygen** from a hypoxaemic COPD patient (hypoxia kills faster than hypercapnia) — but **titrate, don't flood**\n- **Recheck gas** after starting/changing O2",
   "trap": "- Tempting wrong MCQ answer: **'breathless COPD patient → 15 L/min via non-rebreather'**\n  - Can worsen **V/Q mismatch** / abolish hypoxic drive → CO2 narcosis, acidosis, increased mortality\n- Equally wrong: **withholding O2 entirely** from a hypoxic patient",
   "redFlags": "- Falling conscious level + **rising PaCO2** + falling pH after O2 = **over-oxygenation/CO2 retention** → reduce FiO2, recheck gas, consider **NIV**",
   "viva": "- Say: 'I'd give controlled oxygen targeting **88-92%** via nasal prongs or a Venturi, then check an ABG. I would **not use high-flow non-rebreather** because of the risk of worsening hypercapnia'\n- Examiner probes both errors: **flooding with O2 AND withholding O2**",
   "mnemonic": "88-92 keeps the drive alive.",
   "source": "COPD-X Plan X3.1 controlled oxygen delivery (Lung Foundation Australia, current — 'target SpO2 88-92%, nasal prongs 0.5-2.0 L/min or Venturi 24%/28%'); TSANZ Acute Oxygen Guidelines",
   "tags": [
    "COPD",
    "oxygen",
    "88-92",
    "T2RF",
    "TSANZ",
    "controlled oxygen"
   ],
   "mcqTrap": "- **'High-flow O2 via non-rebreather for the breathless COPD patient'** — overshoots, risks **CO2 narcosis**; target **88-92%** with controlled delivery",
   "verified": true,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">At risk T2RF: 88-92%</span><span class=\"gv-pill\">Acute asthma: 93-95%</span><span class=\"gv-pill\">General acutely unwell: 92-96%</span><span class=\"gv-pill\">Nasal prongs 0.5-2.0 L/min</span><span class=\"gv-pill\">Venturi 24-28%</span><span class=\"gv-pill\">Avoid non-rebreather</span></div>",
   "title": "COPD exacerbation oxygen",
   "subtitle": "the 88-92% target and the fatal high-flow trap",
   "id": "respiratory-7",
   "images": [
    {
     "src": "assets/img/respiratory_cxr_hyperinflation_copd_01.jpg",
     "caption": "COPD CXR — hyperinflated emphysematous lungs",
     "alt": "Chest X-ray in COPD showing hyperinflation, flattened hemidiaphragms and emphysema — the background disease in which uncontrolled high-flow oxygen can cause CO2 narcosis",
     "credit": "James Heilman MD (Jmh649), Wikimedia Commons, CC BY-SA 3.0 (cropped)"
    }
   ]
  },
  {
   "topic": "Reversibility — does it cleanly separate asthma from COPD? (No)",
   "subarea": "Asthma & COPD",
   "discriminator": "- Significant bronchodilator reversibility = increase in FEV1 **≥12% AND ≥200 mL**\n- **FULL reversibility** (ratio normalises) favours asthma\n- BUT most COPD patients show **SOME reversibility**, and a subset reach ≥12%/200 mL\n  - A **positive test does NOT exclude COPD**, and a negative test does not exclude asthma\n- The discriminator is whether obstruction **FULLY resolves** plus the clinical pattern (variability, atopy, smoking, age)",
   "whatFirst": "- Use reversibility as **ONE input** alongside history (smoking pack-years, atopy, age of onset, symptom variability/diurnal PEF)\n- **Persistent post-BD ratio <0.7** that doesn't normalise = COPD even if FEV1 improved by **12%/200 mL**",
   "trap": "- Tempting wrong MCQ answer: **'FEV1 improved 15% post-bronchodilator → therefore asthma, COPD excluded'**\n  - Wrong — **COPD can show reversibility**\n  - What matters is whether obstruction is **FULLY reversible** and the whole clinical picture",
   "redFlags": "- **Fixed obstruction** in an ex/current smoker with **low DLCO** and hyperinflation points to COPD **regardless of some reversibility**",
   "viva": "- Say: 'Reversibility of **12% and 200 mL** is significant, but it doesn't cleanly separate the two — COPD usually has some reversibility. I'd diagnose on the full picture: **persistence of obstruction**, age, atopy, smoking and symptom variability'\n- Examiner probes the **overlap** and the **12%/200 mL numbers**",
   "mnemonic": "12 & 200 = reversible; but reversible ≠ automatically asthma.",
   "source": "COPD-X Plan (Lung Foundation Australia / TSANZ, current) — most COPD patients have some reversibility; FEV1 increase ≥12% and ≥200 mL is the conventional significant-reversibility threshold",
   "tags": [
    "reversibility",
    "asthma",
    "COPD",
    "spirometry",
    "12%",
    "200mL"
   ],
   "mcqTrap": "- A positive reversibility test offered as **'proves asthma / excludes COPD'** — overlap is real; **COPD commonly shows partial reversibility**",
   "verified": true,
   "title": "Reversibility",
   "subtitle": "does it cleanly separate asthma from COPD? (No)",
   "id": "respiratory-8",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/6/6b/COPD.png",
     "caption": "Spirometry flow-volume loops — asthma (reversible) vs COPD (fixed obstruction)",
     "alt": "Flow-volume loop comparison: asthma showing obstruction that fully reverses post-bronchodilator versus COPD with persistent obstruction — illustrating that reversibility alone does not distinguish the two",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Spirometry — the FEV1/FVC <0.7 obstruction cut-off and what comes before it",
   "subarea": "Asthma & COPD",
   "discriminator": "- Obstruction / COPD = **POST-bronchodilator FEV1/FVC <0.70** (COPD-X uses the fixed ratio)\n  - FVC is normal/preserved → ratio falls\n- **RESTRICTION ≠ low ratio**: restriction lowers FVC AND FEV1 so the **ratio is normal/high**\n  - Need a **low TLC on lung volumes** to confirm restriction, not spirometry alone",
   "whatFirst": "- Always read **POST-bronchodilator values** to diagnose COPD\n- Check **ratio first** (obstruction?) → then **FEV1 % predicted** for severity → then **reversibility** to lean asthma vs COPD",
   "trap": "- Tempting wrong MCQ answer: calling a **low FEV1 with NORMAL ratio 'COPD/obstruction'**\n  - A low FEV1 with preserved/raised FEV1/FVC = **restriction, not obstruction**\n- Also: diagnosing COPD on a **PRE-bronchodilator ratio** — must be **post-BD**",
   "redFlags": "- **Very low FEV1 % predicted** = severe disease, lower threshold to escalate\n  - COPD-X grades severity by **post-BD FEV1 % predicted**",
   "viva": "- Say: 'The ratio is post-bronchodilator **FEV1/FVC below 0.7**, confirming airflow limitation; **FEV1 % predicted** then grades severity'\n- Examiner probes the **obstruction-vs-restriction pattern** and why **post-BD** matters",
   "mnemonic": "Ratio Obstructs (low = obstruction); FVC restricts (low FVC, normal ratio = restriction).",
   "source": "COPD-X Plan (Lung Foundation Australia / TSANZ, current) — 'Confirm COPD with spirometry (post-bronchodilator FEV1/FVC <0.7)'",
   "tags": [
    "spirometry",
    "COPD",
    "obstruction",
    "FEV1/FVC",
    "restriction"
   ],
   "mcqTrap": "- **Low FEV1 with a NORMAL FEV1/FVC ratio** labelled 'obstructive' — that pattern is **restrictive**; obstruction needs **post-BD ratio <0.7**",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Pattern</th><th>FEV1/FVC</th><th>FVC</th><th>FEV1</th></tr><tr><td>Obstructive (COPD/asthma)</td><td>&lt;0.70 (post-BD)</td><td>Normal/low</td><td>Low</td></tr><tr><td>Restrictive</td><td>Normal / high</td><td>Low</td><td>Low (proportionate)</td></tr></table>",
   "title": "Spirometry",
   "subtitle": "the FEV1/FVC <0.7 obstruction cut-off and what comes before it",
   "id": "respiratory-9",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Spirometry.png",
     "caption": "Spirometry interpretation — obstruction vs restriction vs normal",
     "alt": "Spirometry chart comparing FEV1/FVC ratio and flow-volume loops for normal, obstructive (low ratio) and restrictive (low FVC, preserved/raised ratio) patterns — the key diagnostic distinction",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Aspiration pneumonia / lung abscess — the Australian anaerobic regimen and the metronidazole-alone trap",
   "subarea": "Pneumonia & respiratory infection",
   "discriminator": "- When anaerobic cover IS indicated (lung abscess, empyema, putrid sputum, necrotising pneumonia), the Australian regimen **pairs a penicillin WITH metronidazole**\n  - **Metronidazole alone has high failure rates** because it misses **microaerophilic streptococci**",
   "whatFirst": "- Confirm a **genuine indication for anaerobic cover** (abscess/empyema/necrosis) before adding metronidazole\n- For **uncomplicated community aspiration pneumonia**, standard CAP cover (benzylpenicillin/amoxicillin ± atypical) is often sufficient",
   "cutoffs": [
    "Severe aspiration / lung abscess: **benzylpenicillin 1.2 g IV 4–6 hourly** + metronidazole 500 mg IV 12-hourly",
    "Penicillin allergy: **clindamycin 600 mg IV 8-hourly** (covers anaerobes alone)",
    "Suspected Gram-negatives: add **gentamicin**, OR use **piperacillin-tazobactam**"
   ],
   "redFlags": "- **Cavitation/air-fluid level** on CXR (abscess), loculated effusion with pus (empyema) → **drainage/source control**, not antibiotics alone",
   "trap": "- Using **metronidazole as monotherapy** for anaerobic lung infection — significant treatment failure\n  - It must be **combined with a penicillin**\n  - **Clindamycin can stand alone**, metronidazole cannot",
   "mcqTrap": "- Choosing **'metronidazole alone'** for a lung abscess\n  - Correct = **benzylpenicillin + metronidazole** (or clindamycin monotherapy if penicillin-allergic)",
   "mnemonic": "Metro never alone in the lung — always pair with penicillin; Clinda can fly solo.",
   "viva": "- Out loud: 'For a lung abscess I'd give **benzylpenicillin plus metronidazole** — metronidazole alone fails because it misses **microaerophilic strep** — and arrange drainage if there's an associated empyema'",
   "source": "Australian Prescriber 'Aspiration pneumonia and pneumonitis'; Therapeutic Guidelines (eTG) Antibiotic — lung abscess/aspiration, current",
   "tags": [
    "aspiration",
    "lung abscess",
    "metronidazole",
    "anaerobes",
    "clindamycin"
   ],
   "verified": false,
   "title": "Aspiration pneumonia / lung abscess",
   "subtitle": "the Australian anaerobic regimen and the metronidazole-alone trap",
   "id": "respiratory-10",
   "images": [
    {
     "src": "assets/img/respiratory_cxr_consolidation_pneumonia_01.jpg",
     "caption": "Aspiration pneumonia CXR — right lower lobe consolidation",
     "alt": "Chest X-ray showing consolidation in the dependent right lower lobe (most common aspiration site in a supine patient), the typical radiological appearance of aspiration pneumonia",
     "credit": "James Heilman MD (Jmh649), Wikimedia Commons, CC BY-SA 4.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Chest_X-ray_of_right_upper_to_mid_zone_lung_cavity_with_air_fluid_level.jpg/960px-Chest_X-ray_of_right_upper_to_mid_zone_lung_cavity_with_air_fluid_level.jpg",
     "caption": "Lung abscess CXR — cavitating lesion with air-fluid level",
     "alt": "Chest X-ray showing a thick-walled cavitating lesion with an air-fluid level in the right lower lobe — classic appearance of anaerobic lung abscess following aspiration",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Aspiration PNEUMONITIS vs PNEUMONIA — the antibiotics-or-not decision",
   "subarea": "Pneumonia & respiratory infection",
   "discriminator": "- **Pneumonitis** = chemical injury from **sterile gastric acid** (Mendelson's), onset **minutes–hours**, often resolves in **24–48 h**, **NO antibiotics initially**\n- **Pneumonia** = bacterial infection from **colonised oropharyngeal secretions**, indolent over **days–weeks**, **antibiotics ARE the mainstay**",
   "whatFirst": "- Witnessed acute aspiration with rapid distress = **pneumonitis** → **SUPPORTIVE care** + airway/oxygen\n  - Do **NOT start prophylactic antibiotics**\n- **Reassess at 48 h**; treat only if not improving or features of infection",
   "cutoffs": [
    "Pneumonitis onset: **minutes to ~2 hours**; typically resolves **24–48 h**",
    "Pneumonia onset: **indolent, days to weeks**",
    "Start empirical antibiotics for pneumonitis **ONLY if no improvement after 48 h** or bacterial infection cannot be excluded",
    "Anaerobic-specific cover reserved for **lung abscess, empyema, or necrotising/putrid-sputum disease**"
   ],
   "redFlags": "- Persistent fever/infiltrate beyond **48 h**, cavitation, putrid sputum, empyema → now **bacterial/anaerobic**; treat and image",
   "trap": "- Giving **prophylactic antibiotics** for a witnessed acid aspiration\n  - There is **NO evidence** prophylaxis improves outcomes in pneumonitis\n  - It just selects resistance and risks **C. difficile**\n- **Routine anaerobic cover** for ALL aspiration pneumonia is **no longer recommended**",
   "mcqTrap": "- Choosing **'start IV antibiotics immediately'** after a witnessed aspiration during intubation in a previously well patient\n  - Right answer is **supportive care + observe**; antibiotics only if it fails to settle by **48 h**",
   "mnemonic": "Acid = chemical = wait (pneumonitis); Bacteria = days = treat (pneumonia).",
   "viva": "- Out loud: 'A witnessed acid aspiration is a **chemical pneumonitis** — I'd manage supportively with oxygen and airway protection and reassess at **48 hours**, rather than reflex antibiotics. Anaerobic cover only if **abscess or empyema** develops'",
   "visualHtml": "<table class=\"gv-table\"><tr><th></th><th>Pneumonitis</th><th>Pneumonia</th></tr><tr><td>Cause</td><td>Sterile gastric acid</td><td>Oropharyngeal bacteria</td></tr><tr><td>Onset</td><td>Minutes–hours</td><td>Days–weeks</td></tr><tr><td>Antibiotics</td><td>No (observe 48 h)</td><td>Yes, mainstay</td></tr><tr><td>Anaerobic cover</td><td>No</td><td>Only if abscess/empyema/necrosis</td></tr></table>",
   "source": "Australian Prescriber 'Aspiration pneumonia and pneumonitis'; Therapeutic Guidelines (eTG) Antibiotic, current",
   "tags": [
    "aspiration",
    "pneumonitis",
    "Mendelson",
    "anaerobes",
    "metronidazole"
   ],
   "verified": false,
   "title": "Aspiration PNEUMONITIS vs PNEUMONIA",
   "subtitle": "the antibiotics-or-not decision",
   "id": "respiratory-11",
   "images": [
    {
     "src": "assets/img/respiratory_cxr_consolidation_pneumonia_01.jpg",
     "caption": "Aspiration pneumonia CXR — unilateral consolidation right lower lobe",
     "alt": "Chest X-ray with unilateral right lower lobe consolidation representing bacterial aspiration pneumonia — the entity that requires antibiotics, contrasting with pneumonitis",
     "credit": "James Heilman MD (Jmh649), Wikimedia Commons, CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "CAP severity in Australia: SMART-COP / CORB are AIDS, not the rule",
   "subarea": "Pneumonia & respiratory infection",
   "discriminator": "- CURB-65/PSI are **UK/US tools**; Australian eTG deliberately does **NOT mandate a single score**\n- **SMART-COP** predicts need for **Intensive Respiratory or Vasopressor Support (IRVS/ICU)**\n- **CORB** is a simpler **bedside admission aid**\n- Use the score to **support — never override** — clinical judgement and red flags",
   "whatFirst": "- Assess **severity at first contact** (it dictates BOTH disposition AND antibiotic spectrum) **BEFORE choosing the drug**\n- Calculate **SMART-COP** and look for **ICU red flags**; do not anchor on how 'well' the patient looks",
   "cutoffs": [
    "**SMART-COP ≥3** = high risk of needing IRVS (ICU-level care)",
    "SMART-COP **0–2** low risk; **3–4** moderate; **5–6** high; **≥7** very high risk of IRVS",
    "**CORB ≥2** of 4 = severe pneumonia → consider ICU/HDU",
    "Australian guidelines do **NOT recommend a single mandatory scoring tool** — red-flag clinical features drive the decision"
   ],
   "redFlags": "- **Hypotension** needing fluids/pressors, **hypoxia <90%** despite O2, **acute confusion**, rising lactate, **multilobar CXR**, pH <7.35 → escalate to **ICU regardless of total score**",
   "trap": "- Treating **SMART-COP/CORB as a rigid admit/discharge rule**\n  - These are **decision SUPPORTS** layered on clinical judgement and red flags\n  - A **low score in a deteriorating or comorbid patient** does NOT mandate discharge",
   "mcqTrap": "- Picking **'CURB-65 ≥2 → admit'** as the Australian standard\n  - CURB-65 is the **UK NICE tool**; Australian-derived/preferred tools are **SMART-COP** (ICU prediction) and **CORB**\n  - Australian practice **overrides UK** here",
   "mnemonic": "SMART-COP: S=Systolic <90 (2), M=Multilobar CXR (1), A=Albumin <35 g/L (1), R=Resp rate high (1), T=Tachycardia ≥125 (1), C=Confusion (1), O=Oxygen low, age-adjusted (2), P=pH <7.35 (2).",
   "viva": "- Out loud: 'I'd grade severity using **SMART-COP** — a score of **three or more** flags likely need for ICU-level support — but I treat it as a **decision aid alongside red-flag observations** and my clinical gestalt, not a discharge rule'",
   "visualHtml": "<table class=\"gv-table\"><tr><th>SMART-COP item</th><th>Threshold</th><th>Points</th></tr><tr><td>Systolic BP</td><td>&lt;90 mmHg</td><td>2</td></tr><tr><td>Multilobar CXR</td><td>≥2 lobes</td><td>1</td></tr><tr><td>Albumin</td><td>&lt;35 g/L</td><td>1</td></tr><tr><td>Resp rate</td><td>≥25 (age ≤50) / ≥30 (&gt;50)</td><td>1</td></tr><tr><td>Tachycardia</td><td>≥125/min</td><td>1</td></tr><tr><td>Confusion (new)</td><td>present</td><td>1</td></tr><tr><td>Oxygen low</td><td>age-adjusted PaO2/FiO2 or SpO2</td><td>2</td></tr><tr><td>pH</td><td>&lt;7.35</td><td>2</td></tr><tr><td colspan=\"2\">≥3 = high risk for ICU support</td><td>—</td></tr></table>",
   "source": "Charles PGP et al, SMART-COP, Clin Infect Dis 2008; Therapeutic Guidelines (eTG) Antibiotic, CAP, current",
   "tags": [
    "CAP",
    "severity",
    "SMART-COP",
    "CORB",
    "ICU"
   ],
   "verified": false,
   "title": "CAP severity in Australia",
   "subtitle": "SMART-COP / CORB are AIDS, not the rule",
   "id": "respiratory-12",
   "images": [
    {
     "src": "assets/img/respiratory_cxr_consolidation_pneumonia_01.jpg",
     "caption": "Community-acquired pneumonia CXR — lobar consolidation",
     "alt": "Chest X-ray with air-space consolidation representing community-acquired pneumonia, the typical presentation for which SMART-COP/CORB severity scoring is applied",
     "credit": "James Heilman MD (Jmh649), Wikimedia Commons, CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "CORB bedside severity score — the simple Australian 4-item tool (don't confuse with CURB-65)",
   "subarea": "Pneumonia & respiratory infection",
   "discriminator": "- **CORB** = **C**onfusion, **O**xygen, **R**espiratory rate, **B**lood pressure — **4 items, each 1 point**, NO urea and NO age (unlike CURB-65)\n- It is a fast bedside severity aid; **≥2 features** suggests severe disease/consider ICU",
   "whatFirst": "- Use CORB when you need a **rapid bedside read without labs/ABG**\n  - Needs only obs and a **conscious-state check**\n- If positive features stack, get an **ABG and senior/ICU review**",
   "cutoffs": [
    "**C** = acute Confusion",
    "**O** = Oxygen: SpO2 **≤90%**",
    "**R** = Respiratory rate **≥30/min**",
    "**B** = Blood pressure: systolic **<90** OR diastolic **≤60 mmHg**",
    "**CORB ≥2** of 4 → severe; consider ICU/HDU"
   ],
   "redFlags": "- **Two or more CORB features**, or any single feature with **rapid deterioration** → escalate and consider critical care",
   "trap": "- Mixing up **CORB with CURB-65**\n  - CORB has **NO urea** and **NO age cut-off**\n  - It is **purely bedside** (confusion, sats, RR, BP)\n  - Adding **'urea >7' to CORB** is wrong",
   "mcqTrap": "- Selecting **'urea > 7 mmol/L'** as a CORB component\n  - That belongs to **CURB-65**, not CORB",
   "mnemonic": "CORB = the bedside 4: Confusion, O2 ≤90%, Resp rate ≥30, BP low (sys <90 / dia ≤60).",
   "viva": "- Out loud: 'CORB gives me a **labs-free bedside severity read** — **two of four features** and I'm thinking severe pneumonia and ICU referral'",
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">C: new confusion</span><span class=\"gv-pill\">O: SpO2 ≤90%</span><span class=\"gv-pill\">R: RR ≥30</span><span class=\"gv-pill\">B: SBP &lt;90 or DBP ≤60</span><span class=\"gv-pill\">≥2 = severe</span></div>",
   "source": "Buising KL et al, CORB derivation, Thorax 2006; Therapeutic Guidelines (eTG) Antibiotic, CAP, current",
   "tags": [
    "CAP",
    "CORB",
    "severity",
    "bedside"
   ],
   "verified": false,
   "title": "CORB bedside severity score",
   "subtitle": "the simple Australian 4-item tool (don't confuse with CURB-65)",
   "id": "respiratory-13"
  },
  {
   "topic": "eTG empirical antibiotics for CAP by severity — the regimens and the atypical-cover gotcha",
   "subarea": "Pneumonia & respiratory infection",
   "discriminator": "- **Severity tier** (low / moderate / high-ICU) selects the regimen:\n  - **Low severity** = amoxicillin alone; add doxycycline ONLY if atypical suspected\n  - **Moderate** = benzylpenicillin + doxycycline (or macrolide)\n  - **Severe/ICU** = ceftriaxone + azithromycin (broadens for Legionella + Gram-negatives)",
   "whatFirst": "- **Grade severity first**, THEN pick the tier\n- Don't reflexively add atypical cover to every outpatient — **low-severity CAP is amoxicillin monotherapy** in Australia",
   "cutoffs": [
    "Low severity (outpatient): **amoxicillin 1 g oral 8-hourly for 5 days**",
    "Low severity, atypical suspected: ADD **doxycycline 100 mg oral 12-hourly**, or use doxycycline/clarithromycin",
    "Moderate (ward IV): **benzylpenicillin 1.2 g IV 6-hourly** + doxycycline 100 mg 12-hourly (or azithromycin)",
    "High severity/ICU: **ceftriaxone 1 g IV daily** + azithromycin 500 mg IV daily",
    "Duration: **5 days** for uncomplicated CAP if clinically stable at review (not the old 7–10 days)"
   ],
   "redFlags": "- **No clinical improvement at 48–72 h** → reassess diagnosis (empyema, abscess, resistant/atypical organism, TB, PE)\n  - Don't just **blindly escalate antibiotics**",
   "trap": "- Believing **every CAP needs 'atypical cover'**\n  - Australian low-severity CAP is **amoxicillin MONOTHERAPY**\n  - Routine dual therapy is **not recommended** for mild outpatient disease\n- Modern duration is **5 days**, not 7–10",
   "mcqTrap": "- Choosing **'amoxicillin + azithromycin for all CAP'** or **'roxithromycin monotherapy'** for mild CAP\n  - Macrolide monotherapy is **inadequate for pneumococcus**; mild CAP gets **amoxicillin alone**",
   "mnemonic": "Ladder: mild = Amox alone → +Doxy if atypical → moderate = Benzylpen + Doxy → ICU = Ceftriaxone + Azithro.",
   "viva": "- Out loud: 'Low-severity CAP: **oral amoxicillin 1 g 8-hourly for 5 days**. I only add doxycycline for suspected atypicals. Severe/ICU: **ceftriaxone plus azithromycin** to cover Legionella and Gram-negatives'",
   "visualHtml": "<table class=\"gv-table\"><tr><th>Severity</th><th>Regimen</th><th>Atypical cover?</th></tr><tr><td>Low (outpatient)</td><td>Amoxicillin 1 g oral 8-hourly</td><td>Only if suspected → add doxy 100 mg</td></tr><tr><td>Moderate (ward)</td><td>Benzylpenicillin 1.2 g IV 6-hourly + doxycycline 100 mg 12-hourly</td><td>Yes (built in)</td></tr><tr><td>High / ICU</td><td>Ceftriaxone 1 g IV daily + azithromycin 500 mg IV daily</td><td>Yes (Legionella + GNB)</td></tr><tr><td colspan=\"3\">Duration 5 days if stable at review</td></tr></table>",
   "source": "Therapeutic Guidelines (eTG) Antibiotic — Community-acquired pneumonia in adults, current edition",
   "tags": [
    "CAP",
    "eTG",
    "antibiotics",
    "atypical",
    "amoxicillin"
   ],
   "verified": false,
   "title": "eTG empirical antibiotics for CAP by severity",
   "subtitle": "the regimens and the atypical-cover gotcha",
   "id": "respiratory-14"
  },
  {
   "topic": "Parapneumonic effusion / empyema — when to DRAIN (pH 7.2 / glucose / pus thresholds)",
   "subarea": "Pneumonia & respiratory infection",
   "discriminator": "- **Drain** if the fluid meets any of the following:\n  - Frank **pus**\n  - Positive **Gram stain/culture**\n  - Pleural **pH <7.2**\n  - Glucose **<2.2 mmol/L**\n  - Large or **loculated** effusion\n- **Uncomplicated** effusion (clear, pH >7.2, sterile) → antibiotics alone, no drain",
   "whatFirst": "- Any pneumonia with a significant effusion → **diagnostic pleural tap FIRST** (under ultrasound)\n- Send: **pH** (in a blood-gas syringe), glucose, Gram stain/culture, LDH, cytology\n- The **pH result** decides whether to drain",
   "cutoffs": [
    "Pleural fluid **pH <7.2** → drain (most important single number)",
    "**Frank pus** or positive Gram stain/culture → empyema → drain regardless of pH",
    "Glucose **<2.2 mmol/L** (≈ <40 mg/dL) → complicated → drain",
    "**Loculated** effusion or occupying >50% hemithorax → drain (consider intrapleural fibrinolytics ± VATS)",
    "**Uncomplicated** (pH >7.2, glucose normal, sterile, free-flowing) → antibiotics alone, no drain"
   ],
   "redFlags": "- **Loculations**, failure to improve, or organising/thick rind → early **thoracic surgery** (VATS/decortication) referral\n- Do not keep flogging a **blocked small drain**",
   "trap": "- Waiting for **cultures** before draining an empyema is wrong\n  - Frank pus or pH <7.2 mandates drainage **NOW**; cultures are irrelevant to the drain decision\n- **pH must be measured on a blood-gas analyser**, not a dipstick",
   "mcqTrap": "- Selecting **'continue IV antibiotics and repeat CXR in 48 h'** for a pleural fluid pH of 7.1 is wrong\n  - pH 7.1 = complicated effusion → the answer is **intercostal chest drain**",
   "mnemonic": "Drain triggers — Pus, pH <7.2, Poor glucose (<2.2), Positive culture, Pockets (loculated). The 5 P's.",
   "viva": "- 'I'd do an **ultrasound-guided diagnostic tap** and send pH urgently'\n- '**pH under 7.2**, pus, or a positive Gram stain means I drain with an **intercostal catheter** and involve respiratory/surgery, not just continue antibiotics'",
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Pneumonia + effusion</div><div class=\"gv-step\">US-guided diagnostic tap → pH, glucose, Gram/culture</div><div class=\"gv-step\">pH &lt;7.2 OR pus OR +culture OR glucose &lt;2.2 → DRAIN</div><div class=\"gv-step\">Loculated/not improving → fibrinolytics ± VATS/decortication</div></div>",
   "source": "BTS Pleural Disease Guideline (pleural infection, pH <7.2 drainage criterion); used in Australian respiratory practice/TSANZ",
   "tags": [
    "empyema",
    "parapneumonic effusion",
    "pleural pH",
    "chest drain",
    "VATS"
   ],
   "verified": true,
   "title": "Parapneumonic effusion / empyema",
   "subtitle": "when to DRAIN (pH 7.2 / glucose / pus thresholds)",
   "id": "respiratory-15",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Pleural_effusion.jpg",
     "caption": "Empyema CXR — unilateral pleural effusion with loculation",
     "alt": "Chest X-ray showing a large unilateral pleural effusion with loculation — the typical radiographic appearance of parapneumonic effusion or empyema requiring drainage assessment",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "TB — notification, airborne isolation, and the diagnostic sequence (GeneXpert vs culture)",
   "subarea": "Pneumonia & respiratory infection",
   "discriminator": "- TB is a **NOTIFIABLE disease** in every Australian jurisdiction — notify on clinical suspicion, not just confirmation\n- **Smear-positive** (AFB seen) = most infectious → airborne (negative-pressure) isolation + N95\n- **GeneXpert MTB/RIF** gives a same-day molecular answer plus rifampicin resistance\n- **Culture** remains the gold standard but takes weeks",
   "whatFirst": "- Suspected pulmonary TB: place in a **negative-pressure room** with airborne precautions (N95/P2 respirator) FIRST\n- Then collect specimens — do NOT let the patient sit in an **open ward** awaiting tests",
   "cutoffs": [
    "**Notify** the disease per jurisdiction (routine notifiable condition; typically within ~5 days of diagnosis/suspicion)",
    "Specimens: **3 sputum samples** (often including an early-morning) for smear (AFB), GeneXpert MTB/RIF Ultra (NAAT), and mycobacterial culture",
    "**GeneXpert**: same-day TB DNA + rifampicin-resistance marker; culture: gold standard, ~2–6 weeks",
    "**Airborne precautions**: negative-pressure room + fit-tested N95/P2 respirator; continue until non-infectious"
   ],
   "redFlags": "- **Rifampicin resistance** on GeneXpert → MDR-TB → urgent TB-service/ID involvement and strict isolation\n- **HIV co-infection**\n- Drug-resistant or smear-positive on a ward **without isolation**",
   "trap": "- Waiting for **culture confirmation** before notifying or isolating is wrong\n  - Notify and isolate on clinical **SUSPICION**\n- A negative **GeneXpert/smear does NOT exclude TB** — culture can still be positive",
   "mcqTrap": "- Choosing **'await positive culture before notifying public health'** is wrong\n  - TB is notified on **suspicion/diagnosis** within the jurisdiction's window\n  - Isolation begins **immediately**",
   "mnemonic": "TB suspicion → ISOLATE (negative pressure + N95), INVESTIGATE (smear, GeneXpert, culture ×3), INFORM (notify public health on suspicion).",
   "viva": "- 'Suspected pulmonary TB — I isolate in a **negative-pressure room** with an N95 immediately'\n- 'Send **three sputums** for smear, GeneXpert and culture'\n- 'Notify **public health on clinical suspicion**; I don't wait for culture'",
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Negative-pressure room</span><span class=\"gv-pill\">Fit-tested N95/P2</span><span class=\"gv-pill\">×3 sputum: smear + GeneXpert + culture</span><span class=\"gv-pill\">Notify on suspicion</span><span class=\"gv-pill\">Culture = gold standard (weeks)</span></div>",
   "source": "State/Territory TB control guidelines; CDNA national TB guidelines; GeneXpert MTB/RIF Ultra use in Australian labs",
   "tags": [
    "TB",
    "tuberculosis",
    "notifiable",
    "airborne isolation",
    "GeneXpert"
   ],
   "verified": false,
   "title": "TB",
   "subtitle": "notification, airborne isolation, and the diagnostic sequence (GeneXpert vs culture)",
   "id": "respiratory-16",
   "images": [
    {
     "src": "assets/img/respiratory_cxr_ruL_cavitating_tb_01.jpg",
     "caption": "Pulmonary TB CXR — right upper lobe cavitating consolidation",
     "alt": "Chest X-ray showing right upper lobe cavitating consolidation — the classic appearance of reactivation pulmonary tuberculosis, the finding that mandates immediate notification and airborne isolation",
     "credit": "CDC Public Health Image Library (PHIL #2543), Wikimedia Commons, Public domain"
    },
    {
     "src": "assets/img/respiratory_cxr_miliary_tb_01.jpg",
     "caption": "Miliary TB CXR — innumerable tiny nodules throughout both lungs",
     "alt": "Chest X-ray showing the miliary pattern of TB with countless tiny uniform nodules throughout both lungs — haematogenous dissemination requiring same urgent notification and isolation",
     "credit": "Benjamin Herreros et al., Wikimedia Commons, CC BY 4.0"
    }
   ]
  },
  {
   "topic": "TB treatment basics and the directly observed therapy (DOT) / monitoring gotchas",
   "subarea": "Pneumonia & respiratory infection",
   "discriminator": "- Standard drug-susceptible pulmonary TB = **2 months intensive RIPE** (Rifampicin, Isoniazid, Pyrazinamide, Ethambutol) then **4 months Rifampicin + Isoniazid** = 6 months total\n- **Pyridoxine (B6)** co-prescribed with isoniazid to prevent peripheral neuropathy\n- **Ethambutol** → baseline + monitoring visual acuity/colour vision",
   "whatFirst": "- Before starting RIPE: baseline **LFTs**, visual acuity/colour vision (ethambutol)\n- Arrange **DOT** through the state TB service\n- Counsel on **orange discolouration** of secretions (rifampicin) and adherence",
   "cutoffs": [
    "Intensive phase: **2 months RIPE**",
    "Continuation phase: **4 months** rifampicin + isoniazid (6 months total for drug-susceptible)",
    "**Pyridoxine 25 mg daily** with isoniazid (neuropathy prophylaxis)",
    "Ethambutol: baseline + periodic **visual acuity & red-green colour vision** (optic neuritis)",
    "Monitor **LFTs** (isoniazid, rifampicin, pyrazinamide all hepatotoxic)"
   ],
   "redFlags": "- Rising transaminases **>3–5× ULN** with symptoms (or >5× asymptomatic) → stop hepatotoxic drugs\n- **Visual change** on ethambutol → stop\n- **Rifampicin resistance** → MDR-TB pathway",
   "trap": "- Forgetting **pyridoxine** with isoniazid\n- Attributing isoniazid's hepatotoxicity to **ethambutol** is wrong\n  - Ethambutol's signature toxicity is **OPTIC NEURITIS** (colour vision), not hepatitis",
   "mcqTrap": "- Choosing **'ethambutol'** as the cause of new hepatitis is wrong\n- Choosing **'isoniazid'** as the cause of red-green colour blindness is wrong\n- Match toxicities:\n  - **Ethambutol** → Eyes (optic neuritis)\n  - **Isoniazid** → neuropathy (give B6) + hepatitis\n  - **Rifampicin** → orange secretions + enzyme inducer\n  - **Pyrazinamide** → hyperuricaemia/hepatitis",
   "mnemonic": "RIPE: Rifampicin=Red/oRange + inducer; Isoniazid=neuropathy→give B6 + hepatitis; Pyrazinamide=Painful joints (urate)/liver; Ethambutol=Eyes (optic neuritis).",
   "viva": "- 'Drug-susceptible TB is **six months** — two of RIPE then four of rifampicin and isoniazid'\n- With **pyridoxine**, baseline LFTs, and **ethambutol eye checks**\n- All delivered under **directly observed therapy** via the TB service",
   "visualHtml": "<table class=\"gv-table\"><tr><th>Drug</th><th>Signature toxicity</th><th>Monitor/measure</th></tr><tr><td>Rifampicin</td><td>Orange secretions, enzyme inducer</td><td>LFTs, drug interactions</td></tr><tr><td>Isoniazid</td><td>Peripheral neuropathy, hepatitis</td><td>Give pyridoxine; LFTs</td></tr><tr><td>Pyrazinamide</td><td>Hyperuricaemia, hepatitis</td><td>Urate, LFTs</td></tr><tr><td>Ethambutol</td><td>Optic neuritis (colour vision)</td><td>Visual acuity + colour</td></tr></table>",
   "source": "CDNA National TB guidelines; Therapeutic Guidelines (eTG) Antibiotic — Tuberculosis, current; TSANZ position statements",
   "tags": [
    "TB",
    "RIPE",
    "DOT",
    "ethambutol",
    "isoniazid",
    "pyridoxine"
   ],
   "verified": true,
   "title": "TB treatment basics and the directly observed…",
   "id": "respiratory-17",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Eight_Ishihara_charts_for_testing_colour_blindness%2C_Europe_Wellcome_L0059155.jpg/960px-Eight_Ishihara_charts_for_testing_colour_blindness%2C_Europe_Wellcome_L0059155.jpg",
     "caption": "Ethambutol optic neuritis — loss of red-green colour discrimination",
     "alt": "Ishihara colour vision test plate illustrating red-green colour discrimination loss — the hallmark early symptom of ethambutol-induced optic neuritis that must be monitored during TB treatment",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Papilledema.jpg",
     "caption": "Fundus — optic neuritis (pale optic disc / disc swelling)",
     "alt": "Fundus photograph showing optic neuritis with disc oedema or pallor — the ocular end-organ damage caused by ethambutol toxicity, distinct from isoniazid's hepatotoxicity",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Tropical / northern Australia CAP — the melioidosis (Burkholderia pseudomallei) override on empirical cover",
   "subarea": "Pneumonia & respiratory infection",
   "discriminator": "- In the **wet season in tropical northern Australia** (especially with risk factors: diabetes, hazardous alcohol use, CKD, immunosuppression), severe CAP empirical cover must include **Burkholderia pseudomallei** (melioidosis) and Acinetobacter\n- Standard **ceftriaxone does NOT reliably cover** B. pseudomallei",
   "whatFirst": "- For severe CAP in/from **tropical Australia in the wet season**, ESCALATE the empirical regimen to cover **melioidosis** BEFORE assuming standard pneumococcal cover suffices",
   "cutoffs": [
    "Severe CAP, tropical north + wet season/risk factors: **meropenem IV** (covers B. pseudomallei + Acinetobacter) + azithromycin (Legionella)",
    "Standard severe-CAP **ceftriaxone does NOT** reliably cover B. pseudomallei"
   ],
   "redFlags": "- Severe CAP + **cavitating/multifocal CXR** + diabetes/alcohol + tropical exposure in wet season → think **melioidosis**\n  - Take blood cultures, notify, broaden to a **carbapenem**",
   "trap": "- Applying the temperate severe-CAP regimen (**ceftriaxone + azithromycin**) to a tropical wet-season patient misses melioidosis\n  - **Geographic/seasonal history** changes the empirical choice",
   "mcqTrap": "- Choosing **ceftriaxone + azithromycin** for severe CAP in a Darwin diabetic in the wet season is wrong\n  - The better answer uses **meropenem** for B. pseudomallei coverage",
   "mnemonic": "Wet season + Top End + diabetic = think MELIOIDOSIS → MEROpenem.",
   "viva": "- 'Severe CAP from tropical northern Australia in the wet season with diabetes — I'd cover for **melioidosis with meropenem IV** plus azithromycin'\n- Take **blood cultures** and notify if confirmed",
   "source": "Therapeutic Guidelines (eTG) Antibiotic — CAP, tropical/severe; B. pseudomallei and A. baumannii relevance in wet-season tropical Australia",
   "tags": [
    "CAP",
    "tropical",
    "melioidosis",
    "Burkholderia",
    "meropenem"
   ],
   "verified": false,
   "title": "Tropical / northern Australia CAP",
   "subtitle": "the melioidosis (Burkholderia pseudomallei) override on empirical cover",
   "id": "respiratory-18",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Tuberculosis_-_Tuberculoma_with_cavitation_%286596009867%29.jpg/960px-Tuberculosis_-_Tuberculoma_with_cavitation_%286596009867%29.jpg",
     "caption": "Melioidosis CXR - upper lobe consolidation with cavitation",
     "alt": "Upper-lobe consolidation with early cavitation typical of pulmonary melioidosis (Burkholderia pseudomallei)",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Age-adjusted D-dimer: the formula, who it applies to, and the Australian caveat",
   "subarea": "PE & pleural disease",
   "trap": "- In patients **>50** with non-high (PE-unlikely/low-moderate) pre-test probability, the D-dimer cut-off is **age × 10 microg/L (FEU)**\n  - A 78-year-old's cut-off is **780**, not the standard 500\n- Using the **fixed 500 cut-off** in an elderly patient = classic over-imaging error the MCQ tests\n- The catch: age-adjustment **ONLY raises the threshold in those >50**; does NOT apply to **high pre-test probability** patients (who get CTPA regardless of D-dimer)\n- Australian-specific nuance: **THANZ/Australasian VTE guideline** is more conservative — historically did NOT explicitly mandate age-adjusted cut-offs the way ESC does\n  - Know the formula but state it is **widely used/validated** rather than universally guideline-mandated in Australia",
   "whatFirst": "- Confirm **assay units** (most Australian labs report FEU)\n- Apply **age × 10 only** if age >50 AND pre-test probability is **non-high**",
   "discriminator": "- Standard cut-off: **500 microg/L FEU** (any age ≤50)\n- Age-adjusted cut-off: **age × 10** for >50\n- A 'positive' age-adjusted D-dimer (above the raised cut-off) still mandates **CTPA**",
   "redFlags": "- Do **NOT** use any D-dimer (standard or age-adjusted) to exclude PE in a **high-probability/Wells >4** patient\n  - Go straight to **CTPA**",
   "viva": "- 'For my 72-year-old with PE-unlikely Wells, I'd use an **age-adjusted D-dimer cut-off of 720** rather than 500'\n  - Safely reduces unnecessary CTPA without missing clinically significant PE",
   "mcqTrap": "- Tempting wrong answer: 'D-dimer of 620 in a 75-year-old = positive, arrange CTPA'\n  - Wrong if PE-unlikely — age-adjusted cut-off is **750**, so 620 is **NEGATIVE** and excludes PE",
   "mnemonic": "Over 50? Multiply your age by 10.",
   "source": "ADJUST-PE study (Righini, JAMA 2014); THANZ/Australasian VTE guideline (Tran, MJA 2019) - more conservative re: age-adjustment",
   "tags": [
    "PE",
    "D-dimer",
    "age-adjusted",
    "elderly",
    "MEDI8403"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Patient</th><th>D-dimer cut-off (FEU)</th></tr><tr><td>≤50 yrs</td><td><span class=\"gv-num\">500 µg/L</span></td></tr><tr><td>72 yrs</td><td><span class=\"gv-num\">720 µg/L</span></td></tr><tr><td>88 yrs</td><td><span class=\"gv-num\">880 µg/L</span></td></tr></table>",
   "title": "Age-adjusted D-dimer",
   "subtitle": "the formula, who it applies to, and the Australian caveat",
   "id": "respiratory-19"
  },
  {
   "topic": "CTPA vs V/Q scan: choosing the right PE imaging test (renal function, contrast, pregnancy, CXR)",
   "subarea": "PE & pleural disease",
   "trap": "- **CTPA is first-line** in most adults\n- The exam wants you to pick **V/Q** (or perfusion-only Q scan) when CTPA is contraindicated or suboptimal:\n  - Significant **renal impairment** (eGFR low / iodinated-contrast risk)\n  - **Contrast allergy**\n  - **Pregnancy/young women** with normal CXR — lower **breast radiation** than CTPA (breast dose, not foetal dose, drives this choice)\n- **V/Q is uninterpretable** if CXR is abnormal (e.g. consolidation, effusion) — then must use CTPA\n- Classic catch: **pregnancy alone does not automatically mean V/Q**; it is pregnancy + **NORMAL CXR**\n- **Bilateral leg Dopplers** are a reasonable first step in pregnancy if leg symptoms are present, sparing any chest radiation",
   "whatFirst": "- Check **CXR and renal function** first\n  - Abnormal CXR → **CTPA**\n  - Normal CXR + pregnancy/young woman or renal/contrast issue → **V/Q** (or leg ultrasound if DVT symptoms)",
   "discriminator": "- **CTPA**: fast, shows alternative diagnoses, needs contrast (renal/allergy limits)\n- **V/Q**: no contrast, useful in renal impairment/pregnancy, but useless with **abnormal CXR** and gives indeterminate results in chronic lung disease",
   "redFlags": "- **Massive/unstable PE**: do not delay for V/Q\n  - Bedside **echo** (RV strain) then CTPA when stabilised, or treat **empirically**",
   "viva": "- 'In this 28-week pregnant woman with a **normal CXR** I'd favour a **perfusion (V/Q) scan** over CTPA to minimise maternal breast radiation'\n- 'If she had leg symptoms I'd start with **bilateral leg Doppler ultrasound** to avoid any chest radiation altogether'",
   "mcqTrap": "- Tempting wrong answer: '**Pregnant patient → always V/Q**'\n  - Wrong — if her CXR is abnormal, V/Q is uninterpretable and **CTPA is required**",
   "source": "THANZ/Australasian VTE guideline (MJA 2019); RANZCR imaging guidance; NSW ACI ECI PE pathway (current)",
   "tags": [
    "PE",
    "CTPA",
    "VQ-scan",
    "pregnancy",
    "imaging",
    "MEDI8403",
    "MEDI8401"
   ],
   "verified": false,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Suspected PE → do CXR + renal function</div><div class=\"gv-step\">Abnormal CXR / no contrast issue → CTPA</div><div class=\"gv-step\">Normal CXR + pregnancy/contrast/renal issue → V/Q scan</div><div class=\"gv-step\">Pregnant + leg symptoms → leg Doppler first</div></div>",
   "title": "CTPA vs V/Q scan",
   "subtitle": "choosing the right PE imaging test (renal function, contrast, pregnancy, CXR)",
   "id": "respiratory-20",
   "images": [
    {
     "src": "assets/img/respiratory_ctpa_segmental_pe_01.jpg",
     "caption": "CTPA - pulmonary embolism filling defect",
     "alt": "CT pulmonary angiogram demonstrating intraluminal filling defects (acute PE) - the standard first-line PE imaging modality",
     "credit": "Aung Myat and Arif Ahsan, Wikimedia Commons, CC BY 2.0 (cropped to axial panel)"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Missmatch_V-P_Szintigrahie_der_Lunge_bei_Lungenembolie_58M_-_NM_-_001.jpg/960px-Missmatch_V-P_Szintigrahie_der_Lunge_bei_Lungenembolie_58M_-_NM_-_001.jpg",
     "caption": "V/Q scan - PE mismatch defect",
     "alt": "Ventilation-perfusion scan showing a ventilation-perfusion mismatch (perfusion defect with preserved ventilation) in pulmonary embolism",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Massive (high-risk) PE: when to thrombolyse, the alteplase dose, and the BP cut-off",
   "subarea": "PE & pleural disease",
   "trap": "- Thrombolysis is indicated for **MASSIVE/high-risk PE** = haemodynamic instability:\n  - **SBP <90 mmHg**\n  - Fall in SBP **≥40 mmHg for >15 min**\n  - Need for **vasopressors/inotropes**\n  - **Cardiac arrest**\n- It is **NOT routinely indicated** for submassive/intermediate-risk PE (RV strain but normotensive) — that is the key catch\n- Australian regimen: **alteplase 100 mg IV over 2 hours** (a 10 mg bolus then 90 mg over ~2 h is also used)\n  - In **cardiac arrest** from suspected PE: **50 mg IV bolus**\n- **Heparin (UFH)** accompanies/follows thrombolysis — not a DOAC during the acute high-risk phase\n- **Reduced-dose 50 mg** is considered when bleeding risk is higher",
   "whatFirst": "- Confirm **haemodynamic instability** and confirm/strongly suspect PE\n  - Bedside **echo for RV strain** if too unstable for CT\n- Resuscitate, give **UFH**, then thrombolyse if no **absolute contraindication**",
   "discriminator": "- **Massive** (unstable, SBP <90) = thrombolyse\n- **Submassive** (normotensive + RV strain/raised troponin) = anticoagulate + monitor in HDU; thrombolysis only if deteriorates\n- **Low-risk** (sPESI 0) = consider outpatient DOAC",
   "redFlags": "- Absolute contraindications to lysis:\n  - Prior **haemorrhagic stroke**/unknown-cause stroke\n  - **Ischaemic stroke <6 months**\n  - **CNS neoplasm**\n  - Recent major trauma/surgery/**head injury <3 weeks**\n  - **Active bleeding**\n  - **Aortic dissection**\n- If contraindicated → **catheter-directed therapy** or **surgical embolectomy**",
   "viva": "- ISBAR escalation: 'I have a haemodynamically unstable patient, **SBP 82**, with confirmed large bilateral PE and RV strain on echo'\n- 'I'm commencing **UFH** and want urgent ICU/medical reg review for systemic **thrombolysis with alteplase 100 mg over 2 hours**, having screened for contraindications'",
   "mcqTrap": "- Tempting wrong answer: '**Thrombolyse the normotensive patient** with RV dilatation and raised troponin'\n  - Wrong — that is **submassive/intermediate-risk**; default is anticoagulation with close monitoring, not routine lysis",
   "mnemonic": "Lyse only if 'SHOCKED': SBP <90 / Hypotension sustained / Output needs pressors / Cardiac arrest from PE / Knocked-down perfusion / Established (confirmed) PE.",
   "source": "THANZ/Australasian VTE guideline (MJA 2019); Therapeutic Guidelines (eTG) cardiovascular - PE thrombolysis; ESC 2019 dose-aligned",
   "tags": [
    "PE",
    "thrombolysis",
    "alteplase",
    "massive-PE",
    "emergency",
    "MEDI8401"
   ],
   "verified": false,
   "visualHtml": "<table class=\"gv-table\"><tr><th>PE class</th><th>Definition</th><th>Treatment</th></tr><tr><td>Massive / high-risk</td><td>SBP <90, or SBP drop ≥40 mmHg, or shock/arrest</td><td>Thrombolysis (alteplase 100 mg/2 h) + UFH</td></tr><tr><td>Submassive / intermediate</td><td>Normotensive + RV strain/↑troponin</td><td>Anticoagulate, monitor HDU; lyse only if deteriorates</td></tr><tr><td>Low-risk</td><td>sPESI 0, stable</td><td>DOAC, consider outpatient</td></tr></table>",
   "title": "Massive (high-risk) PE",
   "subtitle": "when to thrombolyse, the alteplase dose, and the BP cut-off",
   "id": "respiratory-21",
   "images": [
    {
     "src": "assets/img/respiratory_ctpa_saddle_pe_01.jpg",
     "caption": "Saddle/massive PE on CTPA",
     "alt": "Large saddle embolus straddling the pulmonary artery bifurcation - high-risk/massive PE requiring thrombolysis consideration",
     "credit": "Rvahudson, Wikimedia Commons, CC BY-SA 4.0 (cropped)"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Pulmonary_embolism_ECG.jpg",
     "caption": "ECG in massive PE - S1Q3T3 pattern / right heart strain",
     "alt": "ECG showing right heart strain pattern (S1Q3T3, sinus tachycardia, RBBB) associated with massive/high-risk pulmonary embolism",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "PE anticoagulation choice: DOAC default and the exceptions (cancer, pregnancy, severe renal, APS)",
   "subarea": "PE & pleural disease",
   "trap": "- First-line for most confirmed PE in Australia is a **DOAC** (apixaban or rivaroxaban) — with a loading phase:\n  - **Apixaban**: 10 mg BD for 7 days then 5 mg BD\n  - **Rivaroxaban**: 15 mg BD for 21 days then 20 mg daily\n- High-yield **EXCEPTIONS** where DOACs are NOT first choice:\n  - **Antiphospholipid syndrome** (esp. triple-positive) → use **warfarin**, not a DOAC\n  - **Pregnancy/breastfeeding** → **LMWH** (enoxaparin); DOACs contraindicated\n  - **Severe renal impairment** (CrCl <30, esp <15) → caution/avoid; often UFH or dose-adjusted\n  - **Active cancer-associated VTE** → DOAC OR LMWH (avoid DOAC with **luminal GI/GU malignancy** due to bleeding)\n- Minimum treatment duration: **3 months**\n  - Provoked by **major transient factor** → 3 months then stop\n  - **Unprovoked** → consider extended/indefinite",
   "whatFirst": "- Confirm no thrombolysis need, then **start a DOAC** unless an exception applies\n  - In **pregnancy** → LMWH\n  - In suspected **APS** or severe renal disease → warfarin/heparin",
   "discriminator": "- **DOAC** default vs **warfarin** (APS, mechanical valves) vs **LMWH** (pregnancy, some cancer)\n- **Apixaban vs rivaroxaban** differ in loading regimen — know both",
   "redFlags": "- Recurrent VTE on **therapeutic DOAC** → reassess adherence, consider switch to **LMWH** and screen for malignancy/APS",
   "viva": "- 'I'd start **apixaban 10 mg twice daily for one week** then 5 mg twice daily, treating for a minimum of **three months**'\n- 'If she were pregnant I'd use **enoxaparin** instead'\n- 'If I suspected **antiphospholipid syndrome** I'd use warfarin rather than a DOAC'",
   "mcqTrap": "- Tempting wrong answer: '**Start a DOAC in a pregnant woman** with PE'\n  - Wrong — DOACs are contraindicated in pregnancy; use **LMWH (enoxaparin)**",
   "mnemonic": "DOAC for most; 'WALP' exceptions: Warfarin (APS), LMWH (pregnancy/some cancer).",
   "source": "THANZ/Australasian VTE guideline (MJA 2019); Therapeutic Guidelines (eTG) - anticoagulation for VTE (current)",
   "tags": [
    "PE",
    "anticoagulation",
    "DOAC",
    "pregnancy",
    "APS",
    "MEDI8403",
    "MEDI8401"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Scenario</th><th>Agent</th><th>Regimen / note</th></tr><tr><td>Most PE</td><td>Apixaban</td><td>10 mg BD x7d → 5 mg BD</td></tr><tr><td>Most PE (alt)</td><td>Rivaroxaban</td><td>15 mg BD x21d → 20 mg daily</td></tr><tr><td>Pregnancy</td><td>LMWH (enoxaparin)</td><td>DOAC contraindicated</td></tr><tr><td>Antiphospholipid synd.</td><td>Warfarin</td><td>Target INR 2–3</td></tr></table>",
   "title": "PE anticoagulation choice",
   "subtitle": "DOAC default and the exceptions (cancer, pregnancy, severe renal, APS)",
   "id": "respiratory-22"
  },
  {
   "topic": "PE risk stratification for disposition: sPESI and the outpatient/HDU decision",
   "subarea": "PE & pleural disease",
   "trap": "- After confirming PE, stratify severity using **simplified PESI (sPESI)**\n- sPESI = 1 point each for:\n  - Age **>80**\n  - **Cancer**\n  - Chronic **cardiopulmonary disease**\n  - HR **≥110**\n  - SBP **<100**\n  - SpO2 **<90%**\n- **sPESI = 0** → low-risk, eligible for outpatient/home DOAC (with social suitability, per HESTIA-type checks)\n- **sPESI ≥1** → admit\n- The catch: a normotensive patient can still be **intermediate-risk** if there is **RV dysfunction** (echo/CT) AND **raised troponin** — that's **intermediate-HIGH risk** needing HDU monitoring, NOT outpatient management, even though BP is fine\n  - Do not send home a normotensive patient with **RV strain** just because BP is normal",
   "whatFirst": "- Confirm PE, check **haemodynamics**, then calculate **sPESI**\n  - sPESI 0 → consider outpatient\n  - Any positive or **RV strain/raised troponin** → admit/monitor",
   "discriminator": "- **Low-risk** (sPESI 0, no RV strain) = outpatient DOAC\n- **Intermediate** (sPESI ≥1 or RV strain/troponin, normotensive) = admit/HDU\n- **High-risk** (hypotensive/massive) = thrombolysis",
   "redFlags": "- Normotensive + **RV dilatation** + **raised troponin** = intermediate-high\n  - Watch for deterioration that triggers **rescue thrombolysis**",
   "viva": "- 'With a confirmed PE I'd calculate the **simplified PESI**'\n- 'A score of **zero** with no RV strain and adequate social support makes her suitable for **outpatient anticoagulation** with a DOAC'\n- 'Any positive criterion, or **RV dysfunction with a raised troponin**, and I'd admit for monitoring'",
   "mcqTrap": "- Tempting wrong answer: '**Normotensive PE with RV strain and raised troponin → discharge on a DOAC**'\n  - Wrong — that is **intermediate-high risk** and warrants admission/monitoring, not outpatient care",
   "mnemonic": "sPESI - 1 point each: Age>80, Cancer, Cardiopulmonary disease, HR≥110, SBP<100, SpO2<90. Zero = consider home.",
   "source": "Simplified PESI (Jimenez et al., 2010); THANZ/Australasian VTE guideline (MJA 2019); eTG VTE management",
   "tags": [
    "PE",
    "sPESI",
    "disposition",
    "outpatient",
    "risk-stratification",
    "MEDI8403"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Risk</th><th>Criteria</th><th>Disposition</th></tr><tr><td>Low</td><td>sPESI 0, no RV strain</td><td>Outpatient DOAC</td></tr><tr><td>Intermediate</td><td>sPESI ≥1 or RV strain/↑troponin, normotensive</td><td>Admit / HDU monitor</td></tr><tr><td>High (massive)</td><td>SBP <90 / shock</td><td>Thrombolysis</td></tr></table>",
   "title": "PE risk stratification for disposition",
   "subtitle": "sPESI and the outpatient/HDU decision",
   "id": "respiratory-23"
  },
  {
   "topic": "PERC rule: when it is allowed and the 8 criteria - the SpO2 and age traps",
   "subarea": "PE & pleural disease",
   "trap": "- **PERC is only valid** in a patient your gestalt has ALREADY judged LOW pre-test probability (and in a low-prevalence setting)\n- If all 8 criteria are negative you can rule out PE **WITHOUT a D-dimer**\n- Catchable thresholds — PERC fails if ANY of these apply:\n  - Age **≥50** (so age 50 itself FAILS PERC)\n  - HR **≥100**\n  - SpO2 **<95%** on room air\n  - **Haemoptysis**\n  - **Oestrogen use**\n  - Prior **DVT/PE**\n  - Unilateral **leg swelling**\n  - Surgery/trauma needing hospitalisation in **past 4 weeks**\n- The gotcha: a **50-year-old** or SpO2 of **94%** breaks PERC even if everything else is reassuring\n  - Cannot PERC-out; must **D-dimer**",
   "whatFirst": "- Apply PERC **ONLY** after gestalt says low-risk\n  - If you are not already low-risk, PERC is **invalid** — go to D-dimer or CTPA per Wells",
   "discriminator": "- **PERC** rules out with ZERO blood test (8 negatives)\n- **Age-adjusted D-dimer** is the next step when PERC fails or Wells is unlikely\n- Do not conflate the age numbers:\n  - PERC uses **age <50** as a binary criterion\n  - Age-adjusted D-dimer uses **age × 10** as the cut-off in >50s",
   "redFlags": "- Any **PERC positive** = cannot exclude on clinical grounds\n  - Proceed to **D-dimer** (if PE-unlikely) or CTPA",
   "viva": "- 'In a **low-gestalt patient** I'd apply PERC'\n- 'If all **eight are negative**, the post-test probability is low enough that no further testing is needed'\n  - Avoids an unnecessary D-dimer and **incidental-positive cascade**",
   "mcqTrap": "- Tempting wrong answer: **applying PERC to a moderate/high-risk patient** to avoid imaging\n  - Wrong — PERC is only validated in **clinician-judged low-risk, low-prevalence** patients",
   "mnemonic": "PERC = 'HAD CLOTS': Hormones, Age ≥50, DVT/PE prior, Coughing blood (haemoptysis), Leg swelling, O2 <95%, Tachycardia ≥100, Surgery/trauma <4wk. Any present → fails PERC.",
   "source": "Kline PERC rule (original validation, 2008); referenced in NSW ACI ECI PE pathway and THANZ VTE guidance (MJA 2019)",
   "tags": [
    "PE",
    "PERC",
    "rule-out",
    "D-dimer",
    "MEDI8403"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Age <50</span><span class=\"gv-pill\">HR <100</span><span class=\"gv-pill\">SpO2 ≥95% RA</span><span class=\"gv-pill\">No haemoptysis</span><span class=\"gv-pill\">No oestrogen</span><span class=\"gv-pill\">No prior VTE</span><span class=\"gv-pill\">No unilat leg swelling</span><span class=\"gv-pill\">No recent surg/trauma</span></div>",
   "title": "PERC rule",
   "subtitle": "when it is allowed and the 8 criteria - the SpO2 and age traps",
   "id": "respiratory-24"
  },
  {
   "topic": "Pleural effusion: Light's criteria exact cut-offs and the false-exudate rescue test",
   "subarea": "PE & pleural disease",
   "trap": "- An effusion is an **EXUDATE** if it meets **ANY ONE** of Light's three criteria:\n  - Pleural protein / serum protein **>0.5**\n  - Pleural LDH / serum LDH **>0.6**\n  - Pleural LDH > **two-thirds (0.67×)** of the upper limit of the lab's serum LDH reference range\n- Meeting **just one = exudate**\n- Classic catch: Light's is very sensitive but **over-calls exudates**\n  - In a patient on **diuretics** with clinically obvious transudate (e.g. heart failure) misclassified as exudate, use the **serum-minus-pleural albumin gradient**\n  - If **>12 g/L** (1.2 g/dL), it is actually a **transudate**\n- Always send **paired SERUM samples** at the same time — forgetting serum LDH/protein makes the ratios uninterpretable",
   "whatFirst": "- Send **pleural AND simultaneous serum** protein + LDH\n- Apply **Light's criteria**\n- If it looks transudative clinically but flags exudate, calculate the **serum-pleural albumin gradient**",
   "discriminator": "- **Transudate** (Starling imbalance: HF, cirrhosis, nephrotic) vs **Exudate** (pleural pathology: infection, malignancy, PE, TB)\n- **Diuretics** can convert a transudate's chemistry toward exudate-range — the **albumin gradient >12 g/L** rescues this",
   "redFlags": "- Exudate that is **pus**, pH <7.2, or organisms/positive Gram stain = **empyema/complicated parapneumonic effusion** → needs chest drainage, not just antibiotics\n- **Low pleural glucose + low pH** suggests empyema, malignancy, RA, or TB",
   "viva": "- 'I'd take **paired serum and pleural samples**, apply Light's criteria'\n- 'An exudate meets any one of: protein ratio **>0.5**, LDH ratio **>0.6**, or pleural LDH >**two-thirds** the serum upper limit'\n- 'If she's on **diuretics** with suspected cardiac failure but Light's calls exudate, I'd check the **serum-pleural albumin gradient**; >12 g/L confirms transudate'",
   "mcqTrap": "- Tempting wrong answer: '**Effusion is a transudate because it meets only one Light's criterion**'\n  - Wrong — meeting just **ONE criterion** makes it an **EXUDATE**",
   "mnemonic": "'P-Ex point-5, L-Ex point-6, LDH two-thirds' (Protein ratio >0.5, LDH ratio >0.6, LDH >2/3 ULN). Any one = exudate.",
   "source": "Light's criteria (Light et al., 1972); BTS Pleural Disease Guideline 2023; Therapeutic Guidelines (eTG) respiratory",
   "tags": [
    "pleural-effusion",
    "Lights-criteria",
    "exudate",
    "transudate",
    "MEDI8403",
    "MEDI8401"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Light's criterion (any ONE = exudate)</th><th>Cut-off</th></tr><tr><td>Pleural / serum protein</td><td><span class=\"gv-num\">> 0.5</span></td></tr><tr><td>Pleural / serum LDH</td><td><span class=\"gv-num\">> 0.6</span></td></tr><tr><td>Pleural LDH vs serum ULN</td><td><span class=\"gv-num\">> 2/3 ULN</span></td></tr><tr><td>Rescue: serum − pleural albumin</td><td>> <span class=\"gv-num\">12 g/L</span> → transudate</td></tr></table>",
   "title": "Pleural effusion",
   "subtitle": "Light's criteria exact cut-offs and the false-exudate rescue test",
   "id": "respiratory-25",
   "images": [
    {
     "src": "assets/img/respiratory_cxr_bilateral_pleural_effusions_01.jpg",
     "caption": "Pleural effusion on CXR - blunting of costophrenic angle",
     "alt": "Bilateral pleural effusions with blunting of costophrenic angles on chest X-ray (Light's criteria applied to distinguish transudate from exudate)",
     "credit": "Chloe Kupelian, Wikimedia Commons, CC BY 4.0 (frontal panel cropped)"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Pleural_effusion_editted.jpg/960px-Pleural_effusion_editted.jpg",
     "caption": "Pleural effusion ultrasound - anechoic collection",
     "alt": "Ultrasound of pleural space showing an anechoic pleural effusion above the diaphragm, used to guide diagnostic thoracentesis",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Pneumothorax: aspiration vs intercostal catheter vs conservative - who gets what",
   "subarea": "PE & pleural disease",
   "trap": "- **PSP** (primary spontaneous pneumothorax): if symptomatic and large, **needle aspiration** (14-16G cannula, aspirate up to ~2.5 L) is first-line — NOT immediate ICC\n  - aspiration succeeds in ~**50-70%** and avoids a chest drain\n- If aspiration fails (**≥2 cm residual** or persistent symptoms) → **ICC** (small-bore Seldinger drain)\n- **SSP** (secondary spontaneous pneumothorax): aspiration much less reliable; most need **ICC and admission** even if relatively small\n- BTS 2023 catch: **conservative (observation)** management is now accepted for selected minimally symptomatic PSP **regardless of size**\n- **Ambulatory devices** (e.g. Heimlich/one-way valve) are an alternative to ICC\n- ICC is inserted in the **'safe triangle'** (lateral border pec major, lateral border lat dorsi, line at nipple/5th ICS)",
   "whatFirst": "- **PSP large + symptomatic** → aspirate first\n- **SSP** → ICC + admit\n- **Minimally symptomatic** → consider conservative/ambulatory",
   "discriminator": "- **Aspiration** is for PSP\n- **ICC** is the default for SSP and for:\n  - failed aspiration\n  - large symptomatic effusion/haemo-pneumothorax\n  - ventilated patients",
   "redFlags": "- **Bilateral pneumothorax**, haemopneumothorax, or any tension → ICC (after decompression if tension)\n- **SSP in COPD** with hypoxia → admit, ICC, do not just aspirate and discharge",
   "viva": "- For a young patient with a large symptomatic PSP → attempt **needle aspiration first**\n- If that fails or it's a **secondary pneumothorax** (e.g. COPD) → insert a **small-bore intercostal catheter** in the safe triangle and admit",
   "mcqTrap": "- Tempting wrong answer: '**Insert an intercostal catheter** for a large symptomatic PRIMARY spontaneous pneumothorax'\n  - Often wrong as the first step — guidelines favour **aspiration first** (or conservative care) in PSP, reserving ICC for failure or SSP",
   "mnemonic": "Primary → try Pricking (aspirate); Secondary → Stick a drain (ICC).",
   "source": "BTS Pleural Disease Guideline 2023; TSANZ; NSW ACI ECI spontaneous pneumothorax (current)",
   "tags": [
    "pneumothorax",
    "aspiration",
    "ICC",
    "conservative",
    "MEDI8403",
    "MEDI8401"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">PSP, large + symptomatic → needle aspiration first</div><div class=\"gv-step\">Aspiration fails (≥2 cm / symptoms) → small-bore ICC</div><div class=\"gv-step\">SSP (COPD etc.) → ICC + admit even if small</div><div class=\"gv-step\">Minimally symptomatic PSP → conservative / ambulatory valve</div></div>",
   "title": "Pneumothorax",
   "subtitle": "aspiration vs intercostal catheter vs conservative - who gets what",
   "id": "respiratory-26",
   "images": [
    {
     "src": "assets/img/respiratory_cxr_pneumothorax_01.png",
     "caption": "Large pneumothorax on CXR - visible lung edge with absent lung markings",
     "alt": "Large primary spontaneous pneumothorax with clearly visible visceral pleural edge and absent lung markings peripherally - candidate for aspiration vs ICC decision",
     "credit": "Bonilla A, Blair AJ, Alamro SM, Ward RA, Feldman MB et al., Wikimedia Commons, CC BY 4.0"
    }
   ]
  },
  {
   "topic": "Pneumothorax: flying and diving advice - the timing numbers and the permanent ban",
   "subarea": "PE & pleural disease",
   "trap": "- **Diving** is PERMANENTLY contraindicated after any spontaneous pneumothorax UNLESS:\n  - patient has had **definitive bilateral surgical pleurectomy/pleurodesis**\n  - with normal lung function and CT\n  - this is an **absolute, lifelong restriction** and the most commonly missed fact\n- **Flying**: BTS advises wait at least **1 week (7 days)** AFTER radiographic confirmation of complete resolution\n  - the older **'6 weeks' figure is no longer supported**\n- A pneumothorax that has **not resolved** = absolute contraindication to flying (gas expands at altitude → tension)\n- After surgery, fly once **recovered/resolved**",
   "whatFirst": "- Confirm **radiographic resolution** on CXR BEFORE clearing for flight\n- For diving, **refer for surgical opinion** — do not simply time-gate it",
   "discriminator": "- **Flying** = time-limited restriction (**1 week** post-resolution)\n- **Diving** = **permanent contraindication** unless definitive surgery\n- Do not quote the obsolete **6-week** flying rule",
   "redFlags": "- **Unresolved/current pneumothorax** = do not fly (risk of tension at altitude)",
   "viva": "- Counsel that they must **not dive again for life** unless they have definitive surgical management\n- May **fly only once CXR confirms full resolution**, waiting at least **one week** after that",
   "mcqTrap": "- Tempting wrong answer: '**Avoid flying for 6 weeks**'\n  - Outdated — BTS now advises ~**1 week** after confirmed radiographic resolution\n  - The **diving ban (permanent)** is the higher-yield discriminator",
   "mnemonic": "'Fly after a week, never dive again.'",
   "source": "BTS guidance on air travel and pneumothorax (current); TSANZ; SPUMS/DAN diving medicine consensus",
   "tags": [
    "pneumothorax",
    "flying",
    "diving",
    "counselling",
    "MEDI8401"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Activity</th><th>Advice</th></tr><tr><td>Flying</td><td>Wait ≥<span class=\"gv-num\">1 week</span> after CXR-confirmed resolution (not 6 weeks)</td></tr><tr><td>Current/unresolved PTX</td><td>Absolute contraindication to fly</td></tr><tr><td>Diving</td><td>PERMANENT contraindication unless definitive surgery</td></tr></table>",
   "title": "Pneumothorax",
   "subtitle": "flying and diving advice - the timing numbers and the permanent ban",
   "id": "respiratory-27"
  },
  {
   "topic": "Pneumothorax size thresholds and the symptom-over-size shift (BTS 2023 / TSANZ)",
   "subarea": "PE & pleural disease",
   "trap": "- Classic measured threshold: **'large'** = interpleural distance **≥2 cm at the level of the hilum** on PA CXR (BTS), roughly equals ≥50% hemithorax volume; **<2 cm = 'small'**\n- BTS 2023 update: management is now driven by **SYMPTOMS and clinical compromise** MORE than by the 2 cm number\n  - a breathless patient with a 'small' pneumothorax still warrants intervention\n  - a comfortable patient with a 'large' PSP **may be managed conservatively**\n- The **2 cm figure is measured at the hilum**, not the apex\n  - measuring at the **apex is a common error** that overcalls size",
   "whatFirst": "- Assess **clinical stability and breathlessness FIRST**\n- Use the **2 cm-at-hilum** measurement as a supporting factor, not the sole determinant",
   "discriminator": "- **Small <2 cm** vs **large ≥2 cm** (measured at hilum)\n- **Primary spontaneous** (no lung disease) vs **secondary spontaneous** (underlying COPD/emphysema)\n  - secondary treated more aggressively (lower threshold for ICC and admission) because **reserve is poor**",
   "redFlags": "- Any **haemodynamic compromise** → treat as tension\n- **SSP + breathless** → admit and usually ICC even if 'small'",
   "viva": "- Classify as large if interpleural distance is **≥2 cm at the hilum**\n- Current BTS guidance prioritises the **patient's symptoms** — breathless patient managed actively regardless of size\n- **Asymptomatic large PSP** can be observed",
   "mcqTrap": "- Tempting wrong answer: '**Measure the apex-to-cupola distance** to size the pneumothorax'\n  - Wrong — BTS measures the interpleural distance at the level of the **HILUM**",
   "source": "BTS Pleural Disease Guideline 2023; TSANZ position; NSW ACI Emergency Care Institute spontaneous pneumothorax (current)",
   "tags": [
    "pneumothorax",
    "size",
    "threshold",
    "BTS-2023",
    "MEDI8403"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Measure</th><th>Small</th><th>Large</th></tr><tr><td>Interpleural distance at hilum</td><td><span class=\"gv-num\">< 2 cm</span></td><td><span class=\"gv-num\">≥ 2 cm</span></td></tr><tr><td>Approx hemithorax</td><td>< 50%</td><td>≥ 50%</td></tr><tr><td>Driver of management</td><td colspan=\"2\">Symptoms / compromise > size (BTS 2023)</td></tr></table>",
   "title": "Pneumothorax size thresholds and the symptom-over-size shift…",
   "id": "respiratory-28",
   "images": [
    {
     "src": "assets/img/respiratory_cxr_pneumothorax_01.png",
     "caption": "CXR pneumothorax - measuring interpleural distance at hilum",
     "alt": "Chest X-ray demonstrating a pneumothorax with measurement of interpleural distance at the level of the hilum (BTS 2 cm threshold for 'large')",
     "credit": "Bonilla A, Blair AJ, Alamro SM, Ward RA, Feldman MB et al., Wikimedia Commons, CC BY 4.0"
    }
   ]
  },
  {
   "topic": "Tension pneumothorax: decompress BEFORE imaging - and the changed needle landmark",
   "subarea": "PE & pleural disease",
   "trap": "- Tension pneumothorax is a **CLINICAL diagnosis** (tracheal deviation away, hypotension, distended neck veins, absent breath sounds, hyper-resonance, hypoxia)\n  - must **DECOMPRESS IMMEDIATELY** — NEVER wait for or order a CXR\n- Updated landmark: needle decompression now recommended at **4th/5th ICS, anterior/mid-axillary line** (ATLS 10th ed) using a **longer ≥8 cm cannula**\n  - traditional **2nd ICS mid-clavicular line frequently fails** to reach the pleura in adults\n- Definitive treatment is then an **ICC**\n- In **peri-arrest/trauma**: **finger thoracostomy** preferred over needle",
   "whatFirst": "- **Treat (decompress) before you investigate**\n- Do NOT send the patient for a CXR if tension is clinically suspected\n  - decompress at the bedside → ICC → image to confirm position",
   "discriminator": "- **Tension** vs simple pneumothorax: tension has **haemodynamic compromise + tracheal/mediastinal shift**; simple does not\n- **Tension vs cardiac tamponade**: both have distended neck veins + hypotension, but tension has **unilateral absent breath sounds + hyper-resonance + tracheal deviation**",
   "redFlags": "- **Hypotension + raised JVP + unilateral silent hyper-resonant chest** in a ventilated or trauma patient = decompress now\n- Sudden deterioration after **central line insertion** or **positive-pressure ventilation** = classic trigger",
   "viva": "- This is a **clinical diagnosis** — do not delay for imaging\n- Immediately perform **needle decompression in the 5th ICS anterior axillary line** with a large-bore cannula (or **finger thoracostomy** if peri-arrest)\n- Then insert a **definitive intercostal catheter** and confirm with CXR afterwards",
   "mcqTrap": "- Tempting wrong answer: '**Arrange urgent portable CXR** to confirm'\n  - Wrong — imaging delays life-saving decompression; tension pneumothorax is treated **on clinical grounds**",
   "mnemonic": "Tension = 'Treat first, X-ray later.'",
   "source": "ATLS 10th edition (decompression site update to 5th ICS); BTS/TSANZ pleural disease guidance; eTG emergency management",
   "tags": [
    "pneumothorax",
    "tension",
    "decompression",
    "emergency",
    "what-first",
    "MEDI8401"
   ],
   "verified": true,
   "cutoffs": [
    "Needle decompression: **4th/5th ICS**, anterior or mid-axillary line, **≥8 cm** cannula"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Clinical signs of tension (shift, hypotension, ↑JVP, silent hyper-resonant hemithorax)</div><div class=\"gv-step\">DECOMPRESS now — 5th ICS ant/mid-axillary, ≥8 cm cannula (or finger thoracostomy)</div><div class=\"gv-step\">Insert definitive ICC</div><div class=\"gv-step\">THEN CXR to confirm</div></div>",
   "title": "Tension pneumothorax",
   "subtitle": "decompress BEFORE imaging - and the changed needle landmark",
   "id": "respiratory-29",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tension-pneumothorax.png/960px-Tension-pneumothorax.png",
     "caption": "Tension pneumothorax CXR - tracheal deviation and mediastinal shift",
     "alt": "Chest X-ray showing tension pneumothorax with ipsilateral complete lung collapse, tracheal deviation to the contralateral side, and mediastinal shift (obtained only if haemodynamically stable - otherwise clinical diagnosis and immediate decompression)",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Wells score for PE: the actual cut-offs (two-tier vs three-tier) and the single point that flips it",
   "subarea": "PE & pleural disease",
   "trap": "- Most exam-relevant Wells item: the **3-point subjective criterion** — 'PE is the #1 or equally likely diagnosis'\n- **TWO-TIER model**: Wells **>4** = PE likely (go straight to **CTPA**, D-dimer cannot exclude); Wells **≤4** = PE unlikely (**D-dimer** next; negative excludes PE)\n- **THREE-TIER**: low **0-1**, moderate **2-6**, high **>6** (i.e. ≥7)\n- Do **NOT order a D-dimer** in the 'PE likely' / high-probability group\n  - a negative result does NOT exclude PE there and just delays CTPA\n- Two heaviest single drivers (each **+3**): 'clinical signs of DVT' and '**alternative dx less likely than PE**' (clinician gestalt)\n  - NOT the objective findings like tachycardia (+1.5)",
   "whatFirst": "- Decide **pre-test probability FIRST** (Wells two-tier)\n- Then choose: **D-dimer** (unlikely) vs **straight-to-CTPA** (likely)\n- Never order D-dimer in a **high-probability** patient",
   "discriminator": "- **Two-tier** (Australian ED pathways): **>4 likely** vs **≤4 unlikely**\n- **Three-tier**: **0-1** low / **2-6** moderate / **>6** high\n- Mixing the two cut-offs is the **classic error**",
   "redFlags": "- **Haemodynamic instability** (SBP <90) overrides all scoring\n  - bypasses Wells/D-dimer → bedside echo/immediate imaging for **high-risk PE**",
   "viva": "- Risk-stratify with **two-tier Wells**\n- If **PE-unlikely (≤4)** → use **age-adjusted D-dimer** to exclude\n- If **PE-likely (>4)** → go directly to **CTPA** because a negative D-dimer cannot exclude PE in this group",
   "mcqTrap": "- Tempting wrong answer: '**Order D-dimer**' in a Wells = 6 (PE-likely) patient\n  - Wrong — delays definitive CTPA and a negative D-dimer would **not exclude PE**",
   "mnemonic": "Wells +3 items = clinical signs of DVT and 'PE most likely diagnosis'; the rest (HR>100, immobilisation/surgery, prior VTE = 1.5; haemoptysis, malignancy = 1) are lighter.",
   "source": "NSW ACI Emergency Care Institute PE diagnosis pathway (current); THANZ/Australasian VTE guideline (Tran et al., MJA 2019)",
   "tags": [
    "PE",
    "Wells",
    "risk-stratification",
    "D-dimer",
    "MEDI8403",
    "MEDI8401"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Model</th><th>Cut-off</th><th>Next step</th></tr><tr><td>Two-tier: PE unlikely</td><td>Wells ≤4</td><td>D-dimer (age-adjusted); if neg → PE excluded</td></tr><tr><td>Two-tier: PE likely</td><td>Wells >4</td><td>CTPA directly (skip D-dimer)</td></tr><tr><td>Three-tier: low / mod / high</td><td>0–1 / 2–6 / >6</td><td>D-dimer for low–mod; image if high</td></tr></table>",
   "title": "Wells score for PE",
   "subtitle": "the actual cut-offs (two-tier vs three-tier) and the single point that flips it",
   "id": "respiratory-30"
  },
  {
   "topic": "ABG / acid-base - the body never OVER-compensates; if pH flips, there are TWO disorders",
   "subarea": "Airway/ILD/cancer & gas exchange",
   "trap": "- The body **NEVER overcompensates** — if pH is on the 'wrong' side (e.g. acidaemic AND a high bicarbonate) → there are **TWO disorders**, not over-compensation\n- A 'normal' pH with deranged CO2 AND HCO3 = a **MIXED disorder**\n- In **acute respiratory acidosis** only a small bicarbonate rise is expected\n  - a big rise means **chronic (renal) compensation** = a coexisting metabolic process",
   "whatFirst": "- Read in order:\n  - 1) **pH** (acidaemic <7.35 / alkalaemic >7.45)\n  - 2) **primary driver** (CO2 vs HCO3)\n  - 3) is **compensation appropriate?**\n  - 4) **anion gap**\n  - 5) if raised AG → **delta-delta** +/- osmolar gap\n- Always tie to the **clinical picture**",
   "cutoffs": [
    "Normal: **pH 7.35-7.45**; PaCO2 **35-45 mmHg**; HCO3 **22-26 mmol/L**",
    "Anion gap = Na - (Cl + HCO3); normal **~8-12 mmol/L**",
    "Winter's formula (metabolic acidosis): expected PaCO2 = **1.5 x HCO3 + 8 (+/-2) mmHg**",
    "Acute resp acidosis: HCO3 rises **~1** per 10 mmHg CO2 rise; chronic **~4** per 10",
    "Severe acidaemia: **pH <7.1**"
   ],
   "redFlags": "- **High anion gap metabolic acidosis** (lactate, ketones, toxins, urate)\n- Rising CO2 with falling pH in an **asthmatic** = imminent respiratory arrest\n- Severe acidaemia **pH <7.1**",
   "discriminator": "- **Raised vs normal anion gap** acidosis:\n  - raised AG = added acid (lactate, DKA, toxins)\n  - normal AG (hyperchloraemic) = HCO3 loss (diarrhoea, RTA)\n- **Acute vs chronic respiratory**: degree of bicarbonate compensation (**1 vs 4** per 10 mmHg CO2)",
   "mcqTrap": "- Tempting wrong answer: labelling an acidaemic patient with a high bicarbonate as '**metabolic alkalosis with respiratory compensation**'\n  - Wrong — if pH is low it's a **primary acidosis**; the high bicarbonate means a **SECOND (metabolic alkalosis) disorder** coexists, because compensation never overshoots to flip the pH",
   "viva": "- pH 7.30, CO2 60, HCO3 30 → **acidaemic, respiratory driver**\n- HCO3 of 30 is **too high for acute compensation** → this is **chronic respiratory acidosis**\n- Likely a **COPD patient** — check a previous gas and **avoid over-oxygenating**",
   "mnemonic": "ROME - Respiratory Opposite (pH & CO2 opposite), Metabolic Equal (pH & HCO3 same direction). Compensation never flips the pH.",
   "source": "Australian clinical biochemistry reference ranges (RCPA); Winter's formula (consensus); TSANZ acute oxygen/acid-base guidance.",
   "verified": false,
   "tags": [
    "ABG",
    "acid-base",
    "anion gap",
    "Winters formula",
    "compensation"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">1. pH: acidaemia &lt;7.35 / alkalaemia &gt;7.45</div><div class=\"gv-step\">2. Driver: CO2 (resp) or HCO3 (metabolic)?</div><div class=\"gv-step\">3. Compensation appropriate? (never overshoots)</div><div class=\"gv-step\">4. Anion gap = Na - (Cl + HCO3)</div><div class=\"gv-step\">5. If high AG: delta-delta + clinical cause</div></div>",
   "title": "ABG / acid-base",
   "subtitle": "the body never OVER-compensates; if pH flips, there are TWO disorders",
   "id": "respiratory-31"
  },
  {
   "topic": "Hypercalcaemia of malignancy (squamous NSCLC, PTHrP) - fluids first, bisphosphonate is slow",
   "subarea": "Airway/ILD/cancer & gas exchange",
   "trap": "- **IV fluids (rehydration) come FIRST** — zoledronic acid takes ~**2-4 days** to work\n  - candidates who 'give zoledronic acid' as the immediate fix miss that **aggressive 0.9% saline** is the first and fastest move\n- Always use **CORRECTED calcium** (adjust for albumin)",
   "whatFirst": "- 1) **IV 0.9% saline** rehydration\n- 2) Then **IV zoledronic acid**\n- 3) **Calcitonin** only if you need a rapid (hours) drop while the bisphosphonate takes effect\n- Treat the **cancer** for durable control\n- **Avoid routine loop diuretics** unless fluid-overloaded",
   "cutoffs": [
    "Corrected Ca = measured Ca + **0.02 x (40 - albumin g/L)**",
    "Hypercalcaemia: corrected Ca **>2.60 mmol/L**",
    "Severe / treat actively: corrected Ca **>3.0 mmol/L** or symptomatic",
    "Bisphosphonate (zoledronic acid) onset **~2-4 days**; nadir **~4-7 days**",
    "Zoledronic acid **dose reduced/withheld** in renal impairment"
   ],
   "redFlags": "- Corrected Ca **>3.5 mmol/L**, drowsiness/confusion, arrhythmia, AKI, severe vomiting → emergency\n- **Renal impairment** → reduce/withhold zoledronic acid",
   "discriminator": "- **Malignant hypercalcaemia**: PTHrP high, **PTH SUPPRESSED**, often unwell\n- **Primary hyperparathyroidism**: PTH inappropriately **normal/high**, often well, incidental\n- Discriminator = the **PTH level**",
   "mcqTrap": "- Tempting wrong answer: '**IV zoledronic acid**' as the single best immediate management of a dehydrated confused patient with Ca 3.4\n  - Wrong — **rehydration with saline** acts within hours and must precede/accompany the bisphosphonate\n  - giving bisphosphonate to a **dry patient** also risks nephrotoxicity",
   "viva": "- Corrected calcium 3.4 with **suppressed PTH** → **hypercalcaemia of malignancy**, likely PTHrP from squamous lung cancer\n- First step: **aggressive 0.9% saline rehydration**\n- Then: **IV zoledronic acid** for sustained control\n- Reserve **calcitonin** if faster drop needed",
   "mnemonic": "Fluids first, bisphosphonate second, calcitonin for the impatient.",
   "source": "Therapeutic Guidelines (eTG, current) - hypercalcaemia; eviQ, Hypercalcaemia of malignancy.",
   "verified": false,
   "tags": [
    "hypercalcaemia",
    "lung cancer",
    "PTHrP",
    "zoledronic acid",
    "paraneoplastic"
   ],
   "title": "Hypercalcaemia of malignancy (squamous NSCLC, PTHrP)",
   "subtitle": "fluids first, bisphosphonate is slow",
   "id": "respiratory-32",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Lung_Cancer_on_Chest_X-Ray.jpg/960px-Lung_Cancer_on_Chest_X-Ray.jpg",
     "caption": "Squamous cell carcinoma of lung - CXR cavitating mass",
     "alt": "Chest X-ray showing a large cavitating mass in the lung (squamous cell carcinoma NSCLC - the primary tumour type causing PTHrP-mediated hypercalcaemia)",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/1/14/Basaloid_squamous_cell_carcinoma_CT_scan_Case_275_%289571653129%29.jpg",
     "caption": "Lung mass CT - squamous cell carcinoma with central necrosis",
     "alt": "CT chest demonstrating a large central squamous cell carcinoma with central necrosis/cavitation and associated mediastinal involvement",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "IPF - antifibrotics, NOT steroids (steroids cause harm)",
   "subarea": "Airway/ILD/cancer & gas exchange",
   "trap": "- **IPF is NOT treated** with high-dose corticosteroids/immunosuppression\n  - PANTHER-IPF showed **increased death/hospitalisation** with prednisone + azathioprine + N-acetylcysteine\n- **Antifibrotics** (pirfenidone or nintedanib) are the disease-modifying therapy\n- Candidates default to **'prednisolone'** as in other ILDs (HP, CTD-ILD) — **wrong for IPF**",
   "whatFirst": "- Suspected fibrotic ILD → **HRCT**\n- UIP pattern (basal/subpleural reticulation, honeycombing, traction bronchiectasis; **NO significant ground-glass**) + clinical context → **MDT diagnosis of IPF** → antifibrotic\n- **Atypical pattern** → consider biopsy/alternative ILD",
   "cutoffs": [
    "Antifibrotics **SLOW FVC decline**; they do NOT improve lung function",
    "Long-term home O2 if **PaO2 ≤55 mmHg** (or ≤59 mmHg with cor pulmonale/polycythaemia)"
   ],
   "redFlags": "- **Acute exacerbation of IPF** (sudden dyspnoea + new ground-glass on HRCT, no infection/PE) = **high mortality**\n- Rapidly falling **FVC**, resting hypoxaemia → transplant referral / palliative input",
   "discriminator": "- **IPF/UIP**: honeycombing, basal/subpleural, **NO ground-glass**, older male smoker\n- **NSIP**: ground-glass predominant, more uniform, younger, often CTD-associated, **steroid-responsive**\n- **Hypersensitivity pneumonitis**: mosaic/air-trapping, upper-mid zone, antigen exposure\n- **Ground-glass** and **steroid-responsiveness** point AWAY from IPF",
   "mcqTrap": "- Tempting wrong answer: '**high-dose prednisolone + azathioprine + N-acetylcysteine**' for confirmed IPF\n  - Wrong — this combination **increased mortality/hospitalisation** (PANTHER-IPF)\n  - IPF gets **antifibrotics**, not triple immunosuppression",
   "viva": "- HRCT shows definite UIP pattern — basal honeycombing **without ground-glass**\n- After MDT confirmation → start **antifibrotic** (pirfenidone or nintedanib), **NOT steroids**\n- Refer early for **transplant assessment** and pulmonary rehab",
   "mnemonic": "IPF: antifibrotics in, steroids out (PANTHER said steroids harm).",
   "source": "TSANZ / Lung Foundation Australia position statement on IPF & progressive pulmonary fibrosis; PBS Schedule (pirfenidone/nintedanib authority listings).",
   "verified": false,
   "tags": [
    "IPF",
    "ILD",
    "antifibrotics",
    "UIP",
    "HRCT"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Feature</th><th>UIP / IPF</th><th>NSIP</th></tr><tr><td>Distribution</td><td>Basal, subpleural</td><td>Basal, more uniform</td></tr><tr><td>Honeycombing</td><td>Yes (hallmark)</td><td>Minimal/absent</td></tr><tr><td>Ground-glass</td><td>Minimal</td><td>Predominant</td></tr><tr><td>Steroid response</td><td>No (harm)</td><td>Often yes</td></tr><tr><td>Treatment</td><td>Antifibrotic</td><td>Immunosuppression</td></tr></table>",
   "title": "IPF",
   "subtitle": "antifibrotics, NOT steroids (steroids cause harm)",
   "id": "respiratory-33",
   "images": [
    {
     "src": "assets/img/respiratory_ct_uip_honeycombing_01.jpg",
     "caption": "HRCT UIP pattern - basal subpleural honeycombing (IPF)",
     "alt": "High-resolution CT chest showing bilateral peripheral subpleural basal reticulation with honeycombing and traction bronchiectasis - the UIP pattern of idiopathic pulmonary fibrosis",
     "credit": "Yale Rosen, Wikimedia Commons, CC BY-SA 2.0 (cropped)"
    }
   ]
  },
  {
   "topic": "Lung cancer: a NORMAL chest X-ray does NOT exclude it",
   "subarea": "Airway/ILD/cancer & gas exchange",
   "trap": "- A **NORMAL CXR does NOT exclude lung cancer**\n- If clinical suspicion persists (haemoptysis, persistent/changed cough, unexplained weight loss in a smoker) → **refer for chest CT and/or respiratory physician REGARDLESS** of a clear CXR\n- Examiners reward the candidate who does NOT '**reassure and discharge**' on a normal film",
   "whatFirst": "- New/changed cough, dyspnoea, chest/shoulder pain or recurrent/persistent chest infection **>3 weeks** in a smoker/ex-smoker or age **≥40** → **urgent CXR**\n- Any **haemoptysis** → urgent CXR + referral even if young\n- **Normal CXR + ongoing suspicion** → **CT chest**, do NOT stop",
   "cutoffs": [
    "Symptom duration prompting CXR: **>3 weeks**",
    "Age threshold for unexplained respiratory symptoms: **≥40 yr**",
    "Haemoptysis: refer at **ANY age** regardless of CXR"
   ],
   "redFlags": "- **Haemoptysis**\n- Unexplained **weight loss/anorexia**\n- **Finger clubbing**\n- Persistent **cervical/supraclavicular lymphadenopathy**\n- **Thrombocytosis**\n- **SVC obstruction** features or **hoarseness** (recurrent laryngeal nerve) → expedite",
   "discriminator": "- **Recurrent pneumonia in the SAME lobe** in a smoker = **endobronchial obstructing tumour** until proven otherwise (not 'another chest infection')\n- **Hoarse voice** = left recurrent laryngeal nerve from a left hilar/AP-window mass",
   "mcqTrap": "- Tempting wrong answer: '**CXR normal, reassure and review in 6 weeks**'\n  - Wrong — a normal CXR has **poor sensitivity** for central/small tumours\n  - persistent haemoptysis or weight loss mandates **CT and specialist referral now**",
   "viva": "- A normal CXR doesn't reassure me — given **persistent haemoptysis** in a 30-pack-year smoker\n- Arrange **urgent contrast CT chest/upper abdomen** and refer to **lung MDT**\n- Screen for **paraneoplastic and metastatic** features",
   "mnemonic": "Normal film never clears the smoker - if suspicion persists, scan.",
   "source": "Cancer Australia, Investigating Symptoms of Lung Cancer (GP resource); Cancer Council Australia Optimal Care Pathway for people with lung cancer (2nd ed).",
   "verified": false,
   "tags": [
    "lung cancer",
    "referral",
    "haemoptysis",
    "red flags"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Trigger</th><th>Action</th></tr><tr><td>Cough/dyspnoea/chest pain &gt;3 wk in smoker or age &gt;=40</td><td>Urgent CXR</td></tr><tr><td>Haemoptysis (any age)</td><td>Urgent CXR + referral</td></tr><tr><td>Normal CXR but ongoing suspicion</td><td>CT chest + respiratory referral (do not delay)</td></tr><tr><td>Confirmed/suspected cancer</td><td>Lung MDT specialist review</td></tr></table>",
   "title": "Lung cancer",
   "subtitle": "a NORMAL chest X-ray does NOT exclude it",
   "id": "respiratory-34",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Normal_posteroanterior_%28PA%29_chest_radiograph_%28X-ray%29.jpg/960px-Normal_posteroanterior_%28PA%29_chest_radiograph_%28X-ray%29.jpg",
     "caption": "Normal chest X-ray (with occult lung cancer)",
     "alt": "Apparently normal or near-normal chest X-ray - illustrating that a normal CXR does NOT exclude lung cancer, especially small/central tumours",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/d/d9/CT_of_spiculated_lung_nodule_with_bubble-like_lucencies.png",
     "caption": "CT chest - small peripheral lung nodule (early lung cancer)",
     "alt": "CT chest demonstrating a small spiculated peripheral pulmonary nodule (early-stage lung cancer not visible on plain CXR)",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "National Lung Cancer Screening Program (NLCSP) - asymptomatic only; the eligibility number set",
   "subarea": "Airway/ILD/cancer & gas exchange",
   "trap": "- NLCSP is for **ASYMPTOMATIC high-risk people only** — it is NOT a work-up tool for someone WITH symptoms\n  - symptomatic patients go **straight to diagnostic CXR/CT**\n- Candidates wrongly funnel a **symptomatic patient** into 'screening'",
   "whatFirst": "- Confirm patient is **asymptomatic AND meets ALL eligibility criteria** → **low-dose CT (LDCT)** via Medicare-funded referral\n- If **symptomatic** → bypass screening, go **diagnostic**",
   "cutoffs": [
    "Age **50-70 years**",
    "Currently smoke OR **quit within the last 10 years**",
    "**≥30 pack-year** history",
    "**Asymptomatic** (no signs/symptoms of lung cancer)",
    "Modality: **low-dose CT (LDCT)**, Medicare-funded",
    "Commenced: **1 July 2025**"
   ],
   "redFlags": "- Any symptom (haemoptysis, weight loss, persistent cough) = **NOT a screening candidate**\n  - investigate **diagnostically** instead",
   "discriminator": "- **Screening** (LDCT, asymptomatic, **50-70**, **≥30 pack-yr**, smoke now or **quit ≤10 yr**) vs **diagnostic pathway** (any symptom/red flag → CXR then CT)\n- Pack-year + quit-window cut-offs are the **examinable detail**\n- Note: once enrolled, a participant may keep screening even if **>10 yr since quitting** — but the **ENTRY criterion** is quit within 10 years",
   "mcqTrap": "- Tempting wrong answer: enrolling a **symptomatic 45-year-old** smoker into screening\n  - Wrong on two counts: **under age 50** AND has symptoms (needs **diagnostic imaging**, not screening)",
   "viva": "- Patient is 58, smokes **40 pack-years**, and is **asymptomatic** → eligible for **National Lung Cancer Screening Program**\n- Refer for **Medicare-funded low-dose CT** rather than a plain CXR",
   "mnemonic": "50-70, 30, 10 - age 50-70, 30 pack-years, quit within 10 years, asymptomatic.",
   "source": "Australian Government Dept of Health / Cancer Australia, National Lung Cancer Screening Program (commenced 1 July 2025).",
   "verified": true,
   "tags": [
    "lung cancer",
    "screening",
    "NLCSP",
    "low-dose CT"
   ],
   "title": "National Lung Cancer Screening Program (NLCSP)",
   "subtitle": "asymptomatic only; the eligibility number set",
   "id": "respiratory-35"
  },
  {
   "topic": "OSA & fitness to drive - sleepiness, NOT the AHI number, grounds the driver",
   "subarea": "Airway/ILD/cancer & gas exchange",
   "trap": "- For fitness-to-drive it is NOT the **AHI alone** that grounds a driver — it's **EXCESSIVE DAYTIME SLEEPINESS** (especially sleepiness/inattention while driving)\n  - a patient can have a severe AHI but if **asymptomatic and treated** may drive\n  - conversely **sleepiness causing crashes** mandates not driving + notifying the licensing authority, even before diagnosis\n- Candidates wrongly key driving solely to the **AHI number**",
   "whatFirst": "- Suspected OSA → assess **daytime sleepiness (Epworth)** + risk **(STOP-Bang)** → refer for **sleep study (polysomnography)** if sleepy/high risk\n- If **sleepiness causing/likely to cause crashes** → advise **not to drive** and **notify the licensing authority**\n- **CPAP** is first-line for moderate-severe OSA",
   "cutoffs": [
    "AHI: normal **<5**, mild **5-15**, moderate **15-30**, severe **>30** events/h",
    "Epworth Sleepiness Scale: out of **24**; higher score = greater sleepiness",
    "STOP-Bang: **≥3** intermediate risk, **≥5** high risk",
    "CPAP: **first-line** for moderate-severe OSA",
    "**Commercial** driving standards are STRICTER than private"
   ],
   "redFlags": "- **Self-reported sleepiness/inattention while driving**, prior sleep-related crash\n- **Commercial driver** with untreated symptomatic OSA → do not drive, urgent specialist + **notify licensing authority**",
   "discriminator": "- **OSA**: apnoeas, snoring, witnessed pauses, obesity, AHI high\n- **Central sleep apnoea**: no respiratory effort during pauses — heart failure, opioids, Cheyne-Stokes\n- **Obesity-hypoventilation**: daytime hypercapnia, raised bicarbonate\n- Discriminator = **effort during apnoeas** + **daytime CO2**",
   "mcqTrap": "- Tempting wrong answer: '**AHI of 32 therefore he must immediately stop driving** and notify the authority'\n  - Wrong as a blanket statement — the restriction hinges on **excessive daytime sleepiness / crash risk**, not the AHI per se\n  - an alert, well-controlled patient **may continue to drive**",
   "viva": "- Epworth is high and he's **fallen asleep at the wheel** → regardless of AHI, **advise him not to drive**\n- Expedite **sleep study and CPAP**\n- Discuss his obligation to **notify the licensing authority**\n- Apply the **stricter commercial standard** as he drives trucks",
   "mnemonic": "AHI 5/15/30 = mild/moderate/severe. Driving = sleepiness, not the number.",
   "source": "Austroads, Assessing Fitness to Drive (current edition); Australasian Sleep Association OSA resources.",
   "verified": false,
   "tags": [
    "OSA",
    "AHI",
    "STOP-Bang",
    "Epworth",
    "fitness to drive"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>AHI (events/h)</th><th>Severity</th></tr><tr><td><span class=\"gv-num\">&lt;5</span></td><td>Normal</td></tr><tr><td><span class=\"gv-num\">5-15</span></td><td>Mild</td></tr><tr><td><span class=\"gv-num\">15-30</span></td><td>Moderate</td></tr><tr><td><span class=\"gv-num\">&gt;30</span></td><td>Severe</td></tr></table>",
   "title": "OSA & fitness to drive",
   "subtitle": "sleepiness, NOT the AHI number, grounds the driver",
   "id": "respiratory-36"
  },
  {
   "topic": "Paraneoplastic SIADH (small cell lung cancer) - don't give saline; don't over-correct",
   "subarea": "Airway/ILD/cancer & gas exchange",
   "trap": "- **SIADH requires euvolaemia** — if the patient is hypovolaemic or oedematous, it is NOT SIADH\n- **Over-rapid Na correction** in chronic hyponatraemia causes osmotic demyelination\n- **Normal saline** can paradoxically WORSEN SIADH hyponatraemia\n  - Kidney excretes the sodium load but retains the water, dropping serum Na further",
   "whatFirst": "- **Asymptomatic/mild chronic SIADH** → fluid restriction\n- **Severe symptoms** (seizures, GCS drop) → **hypertonic (3%) saline** to raise Na ~4-6 mmol/L acutely\n  - Then cap the total 24h rise",
   "cutoffs": [
    "SIADH dx: serum osmolality **<275 mmol/kg**; urine osmolality **>100 mmol/kg**; urine Na **>30 mmol/L**; euvolaemic",
    "Correction limit: **≤8 mmol/L per 24 h** (stricter, ~6, if high osmotic-demyelination risk)",
    "Acute symptomatic target: raise Na **~4-6 mmol/L** with 3% saline"
   ],
   "redFlags": "- **Seizures, coma, vomiting** from acute severe hyponatraemia → hypertonic saline\n- **Over-rapid Na rise** → osmotic demyelination\n  - Delayed onset: dysarthria, dysphagia, quadriparesis",
   "discriminator": "- **Volume status + urine osmolality** is the key discriminator\n- **SIADH**: euvolaemic, low serum osm, inappropriately concentrated urine, urine Na high\n- **Hypovolaemic hyponatraemia**: urine Na <20, clinically dry, responds to saline\n- **Psychogenic polydipsia**: urine osm LOW (dilute)",
   "mcqTrap": "- Tempting wrong answer: **'IV normal saline'** for euvolaemic SIADH hyponatraemia\n- In SIADH, isotonic saline can **lower** serum Na further\n  - Kidney excretes the salt, retains the water\n- **Fluid restriction** is first-line",
   "viva": "- Euvolaemic + serum osm 260 + urine osm 450 + urine Na 50 = **SIADH**, likely paraneoplastic from **small cell lung cancer**\n- No seizures → **fluid restrict**, do not give saline\n- Cap correction at **≤8 mmol/L over 24 hours** to avoid osmotic demyelination",
   "mnemonic": "Euvolaemic + dilute serum + concentrated urine = SIADH; restrict, don't drown. '6 a day keeps demyelination away.'",
   "source": "Therapeutic Guidelines (eTG, current) - Electrolytes / hyponatraemia (SIADH).",
   "verified": false,
   "tags": [
    "SIADH",
    "small cell lung cancer",
    "hyponatraemia",
    "paraneoplastic"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Test</th><th>SIADH value</th></tr><tr><td>Volume status</td><td>Euvolaemic</td></tr><tr><td>Serum osmolality</td><td><span class=\"gv-num\">&lt;275 mmol/kg</span></td></tr><tr><td>Urine osmolality</td><td><span class=\"gv-num\">&gt;100 mmol/kg</span></td></tr><tr><td>Urine sodium</td><td><span class=\"gv-num\">&gt;30 mmol/L</span></td></tr><tr><td>Na correction ceiling</td><td><span class=\"gv-num\">&le;8 mmol/L / 24 h</span></td></tr></table>",
   "title": "Paraneoplastic SIADH (small cell lung cancer)",
   "subtitle": "don't give saline; don't over-correct",
   "id": "respiratory-37",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Lung_Cancer_on_Chest_X-Ray.jpg/960px-Lung_Cancer_on_Chest_X-Ray.jpg",
     "caption": "Small cell lung cancer — central hilar mass on CXR",
     "alt": "Large central/hilar mass with mediastinal widening typical of SCLC causing paraneoplastic SIADH",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/1/11/Chest_CT_limited_stage_small_cell_lung_carcinoma.jpg",
     "caption": "SCLC — CT chest showing central mass",
     "alt": "Central perihilar mass with mediastinal involvement characteristic of SCLC",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Respiratory failure Type 1 vs 2 - in CO2 retainers target SpO2 88-92% (but never withhold O2)",
   "subarea": "Airway/ILD/cancer & gas exchange",
   "trap": "- In a **CO2-retainer** (COPD, OHS, neuromuscular) do NOT chase SpO2 >94%\n  - Over-oxygenation worsens hypercapnia via V/Q mismatch and the Haldane effect, causing narcosis\n- Target **SpO2 88-92%** in at-risk patients\n- Corollary: **NEVER withhold O2** from a critically hypoxic patient out of fear of CO2\n  - Titrate, do not deny",
   "whatFirst": "- Confirm with **ABG**\n  - Hypoxia without hypercapnia = **Type 1**\n  - Hypoxia WITH hypercapnia = **Type 2**\n- In at-risk patients give **controlled O2** to SpO2 88-92% (Venturi 28% or nasal prongs)\n- Repeat ABG in **~30-60 min**\n- If **pH <7.35** with rising CO2 despite treatment → **NIV (BiPAP)**",
   "cutoffs": [
    "Type 1: PaO2 **<60 mmHg**, PaCO2 normal/low",
    "Type 2: PaCO2 **>45 mmHg** (with PaO2 <60 mmHg)",
    "SpO2 target NOT at risk of hypercapnia: **92-96%**",
    "SpO2 target AT RISK (COPD/OHS): **88-92%**",
    "NIV trigger: respiratory acidosis **pH <7.35** + PaCO2 >45 despite optimal therapy",
    "Long-term O2: PaO2 **≤55 mmHg** (or ≤59 mmHg + cor pulmonale/polycythaemia)"
   ],
   "redFlags": "- **Falling pH with rising CO2** → ICU/NIV/intubation\n- **Drowsiness/asterixis** = CO2 narcosis\n- **Exhaustion, silent chest**, falling RR in a tiring asthmatic\n- **pH <7.25 on NIV** → consider intubation",
   "discriminator": "- Discriminator = **the PaCO2**\n- **Type 1**: V/Q mismatch or shunt (pneumonia, PE, oedema, ILD); CO2 low/normal from tachypnoea\n- **Type 2**: alveolar hypoventilation (COPD, sedation, neuromuscular, OHS); CO2 high",
   "mcqTrap": "- Tempting wrong answer: **'high-flow 15 L/min non-rebreather'** for a drowsy COPD patient with SpO2 86%\n- In a known retainer, titrate controlled O2 to **88-92%** and recheck ABG\n  - Flooding with O2 risks worsening hypercapnia and narcosis\n- Equally wrong: **withholding O2 entirely**",
   "viva": "- PaO2 52, PaCO2 68, pH 7.28 = **Type 2 respiratory failure** with acute-on-chronic acidosis in COPD\n- Give **controlled O2** targeting 88-92%\n- Treat the exacerbation\n- If acidosis persists on repeat gas → start **BiPAP** and escalate to ICU",
   "mnemonic": "Type ONE - O2 low, no CO2 fun; Type TWO - CO2 too. Retainer target = 88 to 92.",
   "source": "TSANZ guideline for acute oxygen use in adults (Med J Aust); COPD-X (Lung Foundation Australia, current) for COPD exacerbation/NIV.",
   "verified": true,
   "tags": [
    "respiratory failure",
    "oxygen target",
    "COPD",
    "NIV",
    "hypercapnia"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th></th><th>Type 1</th><th>Type 2</th></tr><tr><td>PaO2</td><td><span class=\"gv-num\">&lt;60 mmHg</span></td><td><span class=\"gv-num\">&lt;60 mmHg</span></td></tr><tr><td>PaCO2</td><td>Normal / low</td><td><span class=\"gv-num\">&gt;45 mmHg</span></td></tr><tr><td>Mechanism</td><td>V/Q mismatch, shunt</td><td>Alveolar hypoventilation</td></tr><tr><td>SpO2 target</td><td>92-96%</td><td>88-92% (if at-risk)</td></tr></table>",
   "title": "Respiratory failure Type 1 vs 2",
   "subtitle": "in CO2 retainers target SpO2 88-92% (but never withhold O2)",
   "id": "respiratory-38",
   "images": [
    {
     "src": "assets/img/respiratory_cxr_hyperinflation_copd_01.jpg",
     "caption": "Type 2 respiratory failure — COPD hyperinflated lungs on CXR",
     "alt": "Hyperinflated lungs with flattened hemidiaphragms in a CO2 retainer (COPD), illustrating the physiological background for SpO2 targeting 88-92%",
     "credit": "James Heilman MD (Jmh649), Wikimedia Commons, CC BY-SA 3.0 (cropped)"
    }
   ]
  },
  {
   "topic": "Superior vena cava (SVC) obstruction - tissue first UNLESS airway/CNS threatened",
   "subarea": "Airway/ILD/cancer & gas exchange",
   "trap": "- Most SVC obstruction is **NOT an immediate emergency**\n- Get a **tissue diagnosis FIRST** — treatment depends on tumour type\n  - SCLC and lymphoma are chemo/radiosensitive\n- True emergency overriding 'biopsy first': **stridor/airway compromise** or **cerebral oedema** (drowsiness, severe headache)\n  - → stent/treat immediately",
   "whatFirst": "- **Sit patient up**, give oxygen\n- **Risk-stratify**:\n  - Stridor / laryngeal or cerebral oedema → **emergency endovascular stent** +/- corticosteroid NOW\n  - Otherwise → **urgent CT + histology** before definitive oncological therapy",
   "cutoffs": [
    "**Sit upright** (reduce hydrostatic pressure)",
    "**Dexamethasone** used pragmatically for airway/cerebral oedema (evidence weak)",
    "**Endovascular stent** = fastest symptom relief (within days)"
   ],
   "redFlags": "- **Stridor**, respiratory distress at rest\n- **Laryngeal oedema**\n- **Confusion/drowsiness**, severe headache, visual change\n- → life-threatening: treat before biopsy",
   "discriminator": "- **SVCO**: facial/arm swelling, distended non-pulsatile neck veins, Pemberton's sign, collateral chest-wall veins; subacute onset\n- **Acute angio-oedema**: rapid onset, urticaria, lips/tongue swelling — no chest-wall collaterals",
   "mcqTrap": "- Tempting wrong answer: **'urgent radiotherapy immediately'** in a stable patient without tissue diagnosis\n- Empirical RT can **obscure histology**\n- Chemo-sensitive tumours (SCLC, lymphoma) may be better served by **chemo**\n- Get tissue first unless airway/CNS is threatened",
   "viva": "- Stable, no stridor, no confusion → **prioritise CT and tissue diagnosis** before definitive therapy\n- If she develops **stridor or altered conscious state** → oncological emergency\n  - Arrange emergent **SVC stenting** and steroids",
   "mnemonic": "Biopsy before beam - unless the airway or brain screams.",
   "source": "eviQ oncological emergencies; Cancer Council Australia Optimal Care Pathway (lung cancer).",
   "verified": false,
   "tags": [
    "lung cancer",
    "SVC obstruction",
    "oncological emergency",
    "stent"
   ],
   "title": "Superior vena cava (SVC) obstruction",
   "subtitle": "tissue first UNLESS airway/CNS threatened",
   "id": "respiratory-39",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/SVCcombo.JPG/960px-SVCcombo.JPG",
     "caption": "SVC obstruction — facial oedema and distended neck veins",
     "alt": "Facial plethora, oedema of face and neck, and distended neck/chest veins from superior vena cava obstruction",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/3/36/Anterior_mediastinal_mass_thymoma.jpg",
     "caption": "SVC syndrome — CXR with widened mediastinum",
     "alt": "Widened superior mediastinum indicating mediastinal mass causing SVC obstruction",
     "credit": "Wikimedia Commons"
    }
   ]
  }
 ]
}
);
