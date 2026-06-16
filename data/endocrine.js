window.GOTCHA = window.GOTCHA || { modules: [] };
window.GOTCHA.modules.push(
{
 "id": "endocrine",
 "name": "Endocrine & Diabetes",
 "category": "Medicine",
 "blurb": "Written-exam + VIVA. Diabetes emergencies and the endocrine-crisis 'first drug' traps (DKA, phaeo, thyroid storm, Addison).",
 "cards": [
  {
   "topic": "Diagnosing diabetes: the exact cut-offs AND the repeat-test trap",
   "subarea": "Diabetes & emergencies",
   "trap": "- Diagnostic thresholds:\n  - **HbA1c >=6.5%** (>=48 mmol/mol)\n  - **FPG >=7.0 mmol/L**\n  - **Random/2-hr OGTT >=11.1 mmol/L**\n- THE GOTCHA: in an **ASYMPTOMATIC person** a single abnormal result does **NOT** diagnose diabetes\n  - Requires a **SECOND abnormal test** on a **SEPARATE day**\n- A **symptomatic** person (polyuria/polydipsia/weight loss) + one random >=11.1 (or any one abnormal value) = diagnosed — **no repeat needed**\n- HbA1c is **UNRELIABLE** — must NOT be used in:\n  - **Pregnancy** / recent (<3 months) onset\n  - **Haemoglobinopathy/thalassaemia**\n  - **Haemolysis** or recent blood loss/transfusion\n  - **Iron/B12 deficiency**\n  - **Advanced CKD/dialysis**\n  - **HIV**/drugs affecting RBC turnover\n  - Use **FPG/OGTT** instead in these situations",
   "whatFirst": "- Decide **symptomatic vs asymptomatic FIRST**\n  - Symptomatic + one abnormal = **diagnosed**\n  - Asymptomatic = needs a **confirmatory second abnormal test** before labelling",
   "discriminator": "- HbA1c **6.0–6.4%** (42–47 mmol/mol) or FPG **6.1–6.9** = **pre-diabetes/IGT/IFG**, NOT diabetes\n- HbA1c **<6.5% does NOT exclude diabetes** (lacks sensitivity)\n  - If clinical suspicion high, do **FPG/OGTT**",
   "redFlags": "- Symptomatic hyperglycaemia with **ketones/dehydration** = not a 'diagnosis in clinic' question\n  - This is **DKA/HHS** until proven otherwise — check **ketones and venous gas now**",
   "mcqTrap": "- Picking **'diagnose diabetes'** on a single raised HbA1c in an **asymptomatic** patient — wrong, must repeat\n- Using **HbA1c in pregnancy** or a patient with recent transfusion/haemoglobinopathy",
   "viva": "- Say out loud: 'This patient is asymptomatic, so one elevated HbA1c is **not diagnostic** — I would repeat a confirmatory test on a separate day'\n- Add: 'Because they have [CKD/recent transfusion/haemoglobinopathy] I would **not rely on HbA1c** and would use a fasting glucose or OGTT'",
   "mnemonic": "Cut-offs '6.5 / 7 / 11': A1c six-and-a-half, Fasting seven, Random eleven-point-one.",
   "source": "RACGP Management of type 2 diabetes (GP guide, 2024-25); ADS/RACGP diagnostic criteria (WHO-aligned thresholds).",
   "verified": true,
   "tags": [
    "diagnosis",
    "HbA1c",
    "OGTT",
    "pre-diabetes"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Test</th><th>Diabetes</th><th>Pre-diabetes</th></tr><tr><td>HbA1c</td><td>&ge;6.5% (&ge;48 mmol/mol)</td><td>6.0-6.4% (42-47)</td></tr><tr><td>Fasting plasma glucose</td><td>&ge;7.0 mmol/L</td><td>IFG 6.1-6.9</td></tr><tr><td>Random / 2-hr OGTT</td><td>&ge;11.1 mmol/L</td><td>IGT 7.8-11.0 (2-hr)</td></tr></table>",
   "cutoffs": [
    "**HbA1c >=6.5%** (>=48 mmol/mol)",
    "**FPG >=7.0 mmol/L**",
    "**Random/2-hr OGTT >=11.1 mmol/L**",
    "Asymptomatic: **2 abnormal tests** on separate days",
    "Pre-diabetes **HbA1c 6.0–6.4%**"
   ],
   "title": "Diagnosing diabetes",
   "subtitle": "the exact cut-offs AND the repeat-test trap",
   "id": "endocrine-1"
  },
  {
   "topic": "DKA: FLUIDS before insulin, and the potassium rule that kills",
   "subarea": "Diabetes & emergencies",
   "trap": "- **Fluid resuscitation comes FIRST** — IV 0.9% saline to restore volume before/with insulin; do NOT lead with insulin\n- Insulin is a **fixed-rate infusion at 0.1 units/kg/hr**\n- THE KILLER GOTCHA — **potassium gate**: insulin drives K+ intracellularly\n  - If serum K+ **<3.3 mmol/L**: DELAY insulin and replace K+ first (insulin into a hypokalaemic patient → fatal arrhythmia)\n  - Once K+ is **3.3–5.0**: add KCl (commonly **10–40 mmol per litre** of fluid) with insulin\n  - If K+ **>5.0–5.5**: give insulin/fluids and withhold K+, recheck\n- Diagnostic triad:\n  - Glucose **>11 mmol/L** (often higher)\n  - Ketonaemia (blood beta-hydroxybutyrate **≥3.0 mmol/L**) or significant ketonuria\n  - Acidosis (venous **pH <7.3** OR bicarbonate **<15 mmol/L**)\n- Add **10% dextrose** (alongside saline) once glucose falls to **<14 mmol/L** so you can keep insulin running to clear ketones",
   "whatFirst": "- **A-B-C**, then IV fluid resuscitation (0.9% saline)\n- **CHECK POTASSIUM** before starting insulin\n- Start **fixed-rate insulin 0.1 U/kg/hr** only after confirming K+ ≥3.3\n- **Continue long-acting/basal insulin** if the patient is usually on it",
   "discriminator": "- **Euglycaemic DKA** (SGLT2i, pregnancy, starvation): ketoacidosis with glucose <14 — you will MISS it if you anchor on the glucose\n- **DKA vs HHS**:\n  - DKA: ketones + acidosis, usually **lower glucose**\n  - HHS: glucose **≥30**, osmolality **>320**, minimal ketones, **pH >7.3**",
   "redFlags": "- K+ **<3.3** = do NOT start insulin yet\n- Persistent acidosis/falling GCS in a child or young adult = **cerebral oedema** — escalate to ICU\n- **pH <7.0**, GCS drop, shock, K+ extremes = **ICU/HDU**",
   "mcqTrap": "- 'Start **IV insulin immediately**' as the first step — WRONG; fluids first and K+ must be checked\n- Also tempting and wrong: '**give IV bicarbonate**' for acidosis (not routine — see bicarb card)",
   "viva": "- First action: **large-bore IV access and 0.9% saline resuscitation** while getting a VBG and potassium\n- Will not start the **fixed-rate insulin infusion** until potassium is **above 3.3**\n- Will **add potassium** to the fluids once it is in range",
   "mnemonic": "'Fluids, Find K, then Feed insulin' - never insulin into an empty tank or a low potassium.",
   "source": "ADS DKA guidance; Therapeutic Guidelines (eTG, current); JBDS-aligned Australian state DKA protocols (e.g. WA Health Adult DKA Guideline).",
   "verified": true,
   "tags": [
    "DKA",
    "potassium",
    "insulin",
    "fluids",
    "sequence"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">1. ABC + IV access + VBG/ketones</div><div class=\"gv-step\">2. 0.9% saline resuscitation FIRST</div><div class=\"gv-step\">3. Check K+: if &lt;3.3 replace K+ and HOLD insulin</div><div class=\"gv-step\">4. Fixed-rate insulin 0.1 U/kg/hr</div><div class=\"gv-step\">5. Add KCl 10-40 mmol/L when K+ 3.3-5.0</div><div class=\"gv-step\">6. Add 10% dextrose when glucose &lt;14</div></div>",
   "cutoffs": [
    "Insulin **0.1 units/kg/hr** fixed-rate",
    "K+ **<3.3** → delay insulin",
    "K+ **3.3–5.0** → KCl 10–40 mmol/L in fluids",
    "Add 10% dextrose when glucose **<14 mmol/L**",
    "DKA: ketones **≥3.0**, pH **<7.3** or HCO3 **<15**"
   ],
   "title": "DKA",
   "subtitle": "FLUIDS before insulin, and the potassium rule that kills",
   "id": "endocrine-2",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_hyperkalaemia.jpg",
     "caption": "ECG hyperkalaemia - peaked T waves, widened QRS (the K+ gate that kills in DKA)",
     "alt": "Hyperkalaemia on ECG with tall peaked T waves and widened QRS - insulin must NOT be started if K+ <3.5 mmol/L in DKA as it will drive K+ further into cells",
     "credit": "Dr Michael-Joseph F. Agbayani & Dr Eddieson Gonzales, Wikimedia Commons, CC BY 4.0"
    }
   ]
  },
  {
   "topic": "DKA: NO routine bicarbonate, and the fluids-fix-the-acidosis logic",
   "subarea": "Diabetes & emergencies",
   "trap": "- Do **NOT give IV sodium bicarbonate** routinely in DKA, even with a low pH\n- Acidosis self-corrects with **fluids + insulin** (stop ketone production → ketones metabolised back to bicarbonate)\n- Bicarbonate is **harmful**:\n  - Paradoxical **CSF acidosis**\n  - Worsened **hypokalaemia**\n  - Increased **cerebral oedema** risk in children\n  - Delayed **ketone clearance**\n- Reserved (controversial, **senior/ICU decision only**) for extreme acidaemia: typically **pH <6.9** with haemodynamic instability\n- DKA resolution requires **ALL THREE** criteria — NOT just a normal glucose:\n  - Ketones **<0.6 mmol/L** (or anion gap normalised)\n  - Venous **pH >7.3**\n  - Bicarbonate **>15–18 mmol/L**\n- Keep the **insulin infusion running** until ketones clear, even after glucose normalises (hence the dextrose)",
   "whatFirst": "- Treat the acidosis with **fluids + insulin**, not bicarbonate\n- Reach for bicarbonate only on **senior/ICU advice** at **pH <6.9**",
   "discriminator": "- A normalised glucose with persistent ketosis/acidosis = **DKA NOT resolved**; do not stop insulin\n- **Anion-gap closure** tracks resolution better than glucose",
   "redFlags": "- **pH <7.0** (and especially **<6.9**), shock, reduced GCS → ICU referral\n- This is where the rare **bicarbonate discussion** happens, not on the ward alone",
   "mcqTrap": "- 'Patient with DKA and **pH 7.05** — what is the next step?' → picking IV bicarbonate — WRONG\n- Continue **fluids and insulin**; bicarbonate is not given at pH 7.05",
   "viva": "- Would **not give bicarbonate** — acidosis corrects as fluids and insulin shut off ketogenesis\n- Judge resolution by **ketones below 0.6** and bicarbonate **above 15–18**, not by the glucose\n- Keep the **insulin running with added dextrose** until ketones clear",
   "mnemonic": "'Ketones, not glucose, call the end' and 'Bicarb only below 6.9, and only with a boss.'",
   "source": "ADS / Therapeutic Guidelines (eTG, current); JBDS-aligned Australian DKA protocols.",
   "verified": true,
   "tags": [
    "DKA",
    "bicarbonate",
    "resolution",
    "anion gap"
   ],
   "cutoffs": [
    "**No routine bicarbonate**",
    "Consider only if **pH <6.9** (ICU/senior)",
    "DKA resolved: ketones **<0.6**, pH **>7.3**, HCO3 **>15–18**",
    "Keep **insulin running** until ketones clear"
   ],
   "title": "DKA",
   "subtitle": "NO routine bicarbonate, and the fluids-fix-the-acidosis logic",
   "id": "endocrine-3"
  },
  {
   "topic": "DKA cerebral oedema: the paediatric/young-adult catastrophe",
   "subarea": "Diabetes & emergencies",
   "trap": "- **Cerebral oedema** is the leading cause of DKA death in **children/adolescents**\n- Appears typically **4–12 hours AFTER treatment starts** — not at presentation, just when you think things are improving\n- Risk increased by:\n  - **Over-rapid fluid administration**\n  - Rapid **osmolality fall**\n  - **Bicarbonate** use\n  - Severe initial acidosis/hypocapnia/raised urea\n- Warning signs:\n  - **Headache**, recurrent vomiting, irritability/drowsiness\n  - Falling **GCS**\n  - **Bradycardia + hypertension** (Cushing response)\n  - Incontinence, abnormal pupils\n- TREATMENT — **do not wait for CT**:\n  - IV **mannitol 0.5–1 g/kg** OR **hypertonic (3%) saline**\n  - Reduce fluid rate\n  - Elevate head\n  - Call ICU — CT after stabilising\n- Prevent by **NOT correcting fluids/osmolality too fast**",
   "whatFirst": "- Suspect on **clinical signs** — treat empirically with **hyperosmolar therapy** (mannitol/3% saline) and slow the fluids BEFORE imaging\n- **Imaging must not delay treatment**",
   "discriminator": "- Hypoglycaemia and **hypocalcaemia** can also cause neuro deterioration during DKA treatment — check BGL and electrolytes\n- A deteriorating GCS **several hours into treatment** = **cerebral oedema until proven otherwise**",
   "redFlags": "- Any **GCS drop**, severe headache, **Cushing response** (bradycardia + hypertension), or new neuro signs during DKA treatment\n- → Immediate **hyperosmolar therapy + ICU**",
   "mcqTrap": "- '**Get an urgent CT head**' as the FIRST step in a deteriorating child with DKA — WRONG\n- Give **mannitol/hypertonic saline** and reduce fluids first; CT after stabilisation",
   "viva": "- A child with DKA becoming drowsy or developing headache 6 hours into treatment = **cerebral oedema until proven otherwise**\n- Give **mannitol or 3% saline**, reduce the fluid rate, nurse **head-up**, call ICU\n- **Imaging comes after stabilising**, not before",
   "mnemonic": "'Better an hour later than half a degree faster' - slow correction prevents cerebral oedema.",
   "source": "Therapeutic Guidelines (eTG, current); RCH Melbourne / ISPAD-aligned paediatric DKA guidelines.",
   "verified": false,
   "tags": [
    "DKA",
    "cerebral oedema",
    "paediatric",
    "mannitol"
   ],
   "cutoffs": [
    "Onset typically **4–12 hr** after starting treatment",
    "**Mannitol 0.5–1 g/kg** IV",
    "Alternative: **3% (hypertonic) saline**",
    "Treat **BEFORE CT**"
   ],
   "title": "DKA cerebral oedema",
   "subtitle": "the paediatric/young-adult catastrophe",
   "id": "endocrine-4"
  },
  {
   "topic": "Glucose-lowering agent SELECTION: the 'first drug' trap (metformin, SGLT2i, GLP-1)",
   "subarea": "Diabetes & emergencies",
   "trap": "- **Metformin** = first-line for almost everyone (cheap, weight-neutral, no hypos)\n- THE MODERN GOTCHA — add **SGLT2i or GLP-1 RA EARLY** (regardless of HbA1c) if established CVD, heart failure, or CKD/albuminuria:\n  - **SGLT2i** (-gliflozins) → heart failure and CKD/renal protection\n  - **GLP-1 RA** (semaglutide, dulaglutide) → established ASCVD and obesity/weight loss\n- Key contraindications/cautions:\n  - **Metformin**: withhold if eGFR **<30** (and around contrast/acute illness for lactic acidosis risk); long-term B12 deficiency; GI intolerance\n  - **SGLT2i**: euglycaemic DKA risk; genital mycotic infections; volume depletion; limited glucose-lowering at low eGFR (but renal/cardiac benefit persists); not approved for type 1 diabetes in Australia\n  - **Sulfonylureas** (gliclazide) and **insulin**: cause hypoglycaemia and weight gain; sulfonylureas are the classic 'wrong first add-on' when an SGLT2i/GLP-1 is indicated",
   "whatFirst": "- Start **metformin** (if eGFR ≥30) FIRST\n- Choose the **second agent by comorbidity**:\n  - HF/CKD → **SGLT2i**\n  - ASCVD/obesity → **GLP-1 RA**\n- Added **early**, not only when sugars are high",
   "discriminator": "- Stem mentions **heart failure, CKD/albuminuria, or established CVD** → best add-on is **SGLT2i or GLP-1 RA**, NOT a sulfonylurea (even if a sulfonylurea would lower HbA1c more)\n- **SGLT2i** preferred for HF/renal; **GLP-1** for atherosclerotic CVD/weight",
   "redFlags": "- **Metformin in eGFR <30** or peri-contrast/sepsis = **lactic acidosis** risk — withhold\n- **SGLT2i + sick/peri-op** = **euDKA** risk — withhold\n- **Sulfonylurea/insulin** in elderly faller/driver = dangerous **hypoglycaemia**",
   "mcqTrap": "- Adding **sulfonylurea (gliclazide)** as the second agent in T2DM with heart failure or CKD — WRONG; choose SGLT2i (HF/renal) or GLP-1 RA\n- Also wrong: continuing **metformin with eGFR 25** or before CT-contrast in acute illness",
   "viva": "- Start **metformin** first unless eGFR is under 30\n- Because of **heart failure and CKD**: add an **SGLT2i early** for cardiorenal protection, not a sulfonylurea\n- Counsel on **sick-day rules**: withhold SGLT2i when unwell or before surgery",
   "mnemonic": "'Metformin for all; gliflozin for the Heart & Kidney; -tide (GLP-1) for the Arteries & weight.'",
   "source": "RACGP Management of type 2 diabetes (GP guide, 2024-25); ADS / ADA-EASD consensus; PBS criteria (Australia).",
   "verified": true,
   "tags": [
    "metformin",
    "SGLT2i",
    "GLP-1",
    "drug selection",
    "CKD",
    "heart failure"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Driver</th><th>Preferred agent</th><th>Key caution</th></tr><tr><td>First-line, most patients</td><td>Metformin</td><td>Stop if eGFR &lt;30, peri-contrast, B12</td></tr><tr><td>Heart failure / CKD</td><td>SGLT2i (-gliflozin)</td><td>Euglycaemic DKA; hold when sick/peri-op</td></tr><tr><td>Established ASCVD / obesity</td><td>GLP-1 RA (-tide)</td><td>GI upset; pancreatitis; cost/PBS</td></tr><tr><td>Hypo risk patient (faller/driver)</td><td>Avoid SU & high-dose insulin</td><td>Hypoglycaemia + weight gain</td></tr></table>",
   "cutoffs": [
    "**Metformin first-line**; stop if eGFR **<30**",
    "**SGLT2i** = HF + CKD/renal protection",
    "**GLP-1 RA** = ASCVD + weight loss",
    "Add SGLT2i/GLP-1 **early** if CVD/HF/CKD regardless of HbA1c",
    "SU/insulin = **hypoglycaemia** + weight gain"
   ],
   "title": "Glucose-lowering agent SELECTION",
   "subtitle": "the 'first drug' trap (metformin, SGLT2i, GLP-1)",
   "id": "endocrine-5"
  },
  {
   "topic": "HHS: the numbers that separate it from DKA, and 'go slower'",
   "subarea": "Diabetes & emergencies",
   "trap": "- HHS defining numbers (older T2DM, days of illness):\n  - Glucose typically **≥30 mmol/L** (often much higher)\n  - Effective serum osmolality **≥320 mOsm/kg**\n  - **pH >7.3** and bicarbonate **>15** (NO significant acidosis)\n  - Ketones **absent/minimal**\n- Effective osmolality = **2×[Na+] + glucose** (all mmol/L)\n- THE GOTCHA: management is **FLUIDS FIRST** (large volume — severe water deficit), correct glucose/osmolality **SLOWLY**:\n  - Osmolality fall **≤3–8 mOsm/kg/hr**\n  - Glucose fall **~4–6 mmol/L/hr**\n  - Too-fast correction risks **cerebral oedema/osmotic demyelination**\n- Insulin given **LATER and at LOWER dose** than DKA (often only after fluids alone stop lowering glucose, **~0.05 U/kg/hr**)\n  - In DKA you need insulin to clear **ketones**; in HHS **fluids** do most of the work\n- **Mortality is HIGHER** than DKA\n- Always give **VTE prophylaxis** (very prothrombotic)",
   "whatFirst": "- **FLUIDS first** (0.9% saline, large deficit)\n- Then **cautious low-dose insulin** only once fluids alone are no longer dropping the glucose\n- Correct **sodium/osmolality SLOWLY**",
   "discriminator": "- vs DKA: HHS has **higher glucose (≥30)**, higher osmolality **(≥320)**, and **NO ketoacidosis** (pH >7.3, HCO3 >15)\n- Overlap 'mixed' pictures occur — if ketones/acidosis present, **treat the DKA component**",
   "redFlags": "- Reduced consciousness correlates with **osmolality** (coma usually only when osmolality very high)\n- Seizures, focal signs, AKI, **arterial/venous thrombosis**\n- Senior/ICU input — **mortality higher than DKA**",
   "mcqTrap": "- Treating HHS exactly like DKA with **immediate high-dose insulin** — WRONG\n- That drops glucose/osmolality too fast and risks **cerebral oedema**\n- **Fluids** do the heavy lifting; insulin is low-dose and later",
   "viva": "- HHS: glucose **over 30**, osmolality **over 320**, **no significant ketoacidosis**\n- Resuscitate with **saline first**, correct osmolality **slowly**\n- Add **low-dose insulin** only once fluids stop lowering the glucose\n- Give **VTE prophylaxis** because HHS is highly prothrombotic",
   "mnemonic": "HHS = 'High glucose, High osmolality, No ketones, go SLOW.' Osmolality = 2Na + glucose.",
   "source": "Therapeutic Guidelines (eTG, current); JBDS HHS guideline (Australian-aligned thresholds).",
   "verified": true,
   "tags": [
    "HHS",
    "osmolality",
    "fluids",
    "DKA-vs-HHS"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Feature</th><th>DKA</th><th>HHS</th></tr><tr><td>Glucose</td><td>>11 (can be &lt;14 if euglycaemic)</td><td>&ge;30 mmol/L</td></tr><tr><td>Osmolality</td><td>variable</td><td>&ge;320 mOsm/kg</td></tr><tr><td>pH</td><td>&lt;7.3</td><td>&gt;7.3</td></tr><tr><td>Bicarbonate</td><td>&lt;15</td><td>&gt;15</td></tr><tr><td>Ketones</td><td>&ge;3.0 (high)</td><td>absent/minimal</td></tr><tr><td>Insulin</td><td>0.1 U/kg/hr early</td><td>low-dose, later</td></tr></table>",
   "cutoffs": [
    "Glucose **≥30 mmol/L**",
    "Effective osmolality **≥320 mOsm/kg**",
    "**pH >7.3, HCO3 >15**",
    "Osmolality fall **≤3–8 mOsm/kg/hr**",
    "Glucose fall **~4–6 mmol/L/hr**",
    "Insulin **~0.05 U/kg/hr** (later)"
   ],
   "title": "HHS",
   "subtitle": "the numbers that separate it from DKA, and 'go slower'",
   "id": "endocrine-6"
  },
  {
   "topic": "Hypoglycaemia: the Rule of 15 and conscious-vs-not fork",
   "subarea": "Diabetes & emergencies",
   "trap": "- Hypoglycaemia = BGL **<4.0 mmol/L** ('four is the floor')\n- **CONSCIOUS + can swallow safely** — Rule of 15:\n  - **15 g rapid-acting carbohydrate** (e.g. 150 mL juice/soft drink, 6–7 jelly beans, 3 tsp sugar)\n  - Recheck in **10–15 min**; REPEAT if still <4\n  - Once recovered, give **longer-acting carbohydrate** (sandwich/next meal) to prevent rebound\n- **UNCONSCIOUS / unsafe swallow / seizing** — do NOT give oral anything:\n  - IV access available → **IV glucose** (~15–25 g: ~150–250 mL of 10%, or 50% only via large vein, slowly)\n  - No IV access → **IM/SC glucagon 1 mg**\n- THE GOTCHA: glucagon **FAILS** where glycogen stores are depleted:\n  - **Alcohol intoxication**, malnutrition/starvation, liver failure, sulfonylurea overdose with repeated dosing\n  - → Glucagon unreliable in these; **IV glucose is preferred**\n- **Sulfonylurea/long-acting-insulin** hypos can RELAPSE for hours → admit/observe\n- Consider **octreotide** for refractory sulfonylurea hypoglycaemia",
   "whatFirst": "- Confirm **BGL <4**, then branch on consciousness:\n  - Conscious → **15 g oral carb** + recheck\n  - Not conscious/unsafe → **IV glucose** (or IM glucagon if no access)\n- Give **complex carbohydrate** once awake",
   "discriminator": "- **Glucagon vs IV glucose**: glucagon is for the unconscious patient with NO IV access AND **intact glycogen**\n- **Useless in alcoholics**, starvation, liver failure\n- **Unreliable in sulfonylurea** hypos",
   "redFlags": "- **Sulfonylurea (e.g. gliclazide) or long-acting insulin** cause → recurrent/prolonged hypoglycaemia\n- Must **ADMIT and observe**, recheck repeatedly; do not discharge after one correction\n- Refractory sulfonylurea hypo → **octreotide**",
   "mcqTrap": "- Choosing **IM glucagon for an unconscious ALCOHOLIC** (or starved/liver-failure) patient — WRONG\n- Depleted glycogen means glucagon won't work → give **IV glucose**\n- Also wrong: **discharging a sulfonylurea hypo** after a single correction",
   "viva": "- BGL under 4\n- If conscious: **15 g quick carbohydrate**, recheck in 15 min, repeat if needed, then a **sandwich** to prevent relapse\n- If unconscious: **IV glucose** — or IM glucagon only if no IV access\n- Cause is a sulfonylurea → **admit for prolonged monitoring**",
   "mnemonic": "'Four is the floor; Rule of 15: 15 g, 15 min, repeat.' Glucagon needs glycogen - so it fails in the starved/drinker/liver/sulfonylurea.",
   "source": "Therapeutic Guidelines (eTG, current); ADS / Diabetes Australia hypoglycaemia guidance; NSW ACI adult hypoglycaemia protocol.",
   "verified": true,
   "tags": [
    "hypoglycaemia",
    "rule of 15",
    "glucagon",
    "sulfonylurea"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">BGL &lt;4.0 mmol/L</div><div class=\"gv-step\">Conscious + safe swallow? YES -> 15 g rapid carb, recheck 10-15 min, repeat if &lt;4, then complex carb</div><div class=\"gv-step\">NO -> IV access? YES -> IV glucose (10-50%)</div><div class=\"gv-step\">NO IV access -> IM glucagon 1 mg (fails if glycogen-depleted)</div></div>",
   "cutoffs": [
    "Hypoglycaemia = BGL **<4.0 mmol/L**",
    "**15 g** rapid carb, recheck **10–15 min**, repeat",
    "IV glucose **~15–25 g** (10% or 50%)",
    "**IM/SC glucagon 1 mg**",
    "**Sulfonylurea/long-acting insulin** hypo = admit & observe"
   ],
   "title": "Hypoglycaemia",
   "subtitle": "the Rule of 15 and conscious-vs-not fork",
   "id": "endocrine-7"
  },
  {
   "topic": "SGLT2i euglycaemic DKA: withhold peri-illness/surgery, and DON'T trust the glucose",
   "subarea": "Diabetes & emergencies",
   "trap": "- SGLT2 inhibitors (-gliflozins: dapagliflozin [Forxiga], empagliflozin [Jardiance], ertugliflozin [Steglatro]) cause **EUGLYCAEMIC DKA** — ketoacidosis with glucose **normal or only mildly raised**\n- Will MISS it if you screen on **glucose alone**\n- **RULE 1 (perioperative, ADS-ANZCA Nov 2022)**: cease the SGLT2i on the **two days prior to surgery AND the day of surgery** (omit ≥3 days)\n  - Same for **colonoscopy/bowel prep**; for day-stay without bowel prep, stop **just the day of procedure**\n- **RULE 2 (sick days)**: tell patients to STOP the SGLT2i during:\n  - Acute illness with **reduced oral intake**, vomiting/diarrhoea, dehydration, fasting\n  - Very-low-carb/ketogenic diet or heavy alcohol\n- **RULE 3**: in ANY unwell patient on an SGLT2i, check **BLOOD KETONES** (not urine) even if glucose is normal\n  - Australian alert: blood ketones **>1.0 mmol/L** in an unwell SGLT2i patient = concerning (take a blood gas)\n  - Ketones **>1.0 + base excess <-5** = presumed DKA\n- **RESTART** only when eating and drinking normally:\n  - At least **2 days after major surgery** (after full diet resumed)\n  - **Day after minor surgery**",
   "whatFirst": "- In a sick/post-op patient on a -gliflozin: check **BLOOD KETONES and a VBG/base-excess** regardless of glucose\n- If ketoacidotic: treat as **DKA** (fluids, insulin + dextrose — glucose is normal so dextrose is needed)\n- **STOP the SGLT2i**",
   "discriminator": "- **Euglycaemic DKA** vs 'not DKA because glucose normal' — discriminator is **KETONES + acidosis (base excess)**, not glucose\n- Anyone on a -gliflozin with **metabolic acidosis/raised ketones**, even with a normal sugar, has euDKA until excluded",
   "redFlags": "- Nausea/vomiting, malaise, **tachypnoea/Kussmaul**, abdominal pain in an SGLT2i user with a 'normal' glucose\n- → Measure **blood ketones NOW**; do not reassure on the glucose",
   "mcqTrap": "- 'Patient on empagliflozin, glucose **9 mmol/L**, vomiting and acidotic — DKA is excluded because glucose is normal.' WRONG\n- This IS **euglycaemic DKA**; treat with **insulin AND dextrose** (glucose is low so dextrose is needed to keep insulin running while clearing ketones)",
   "viva": "- On dapagliflozin → **normal glucose does not exclude DKA**\n- Check **blood ketones and a venous gas** now\n- Withhold the **SGLT2i**\n- Going forward: cease on the **two days before surgery and the day of surgery**\n- Stop during any **acute illness**; recommence only once eating and drinking normally — **at least two days after major surgery**",
   "mnemonic": "'-Gliflozin: cease the 2 days before + the day of surgery; stop when sick; check ketones not glucose.'",
   "source": "ADS-ADEA-ANZCA-NZSSD Periprocedural DKA / SGLT2i Alert (July 2022 update); ADS-ANZCA Perioperative Diabetes & Hyperglycaemia Guidelines (Adults), November 2022.",
   "verified": true,
   "tags": [
    "SGLT2i",
    "euglycaemic DKA",
    "perioperative",
    "sick day",
    "ketones"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Elective surgery / colonoscopy: CEASE SGLT2i on the 2 days before + the day of surgery (omit >=3 days)</div><div class=\"gv-step\">Day-stay (no bowel prep): stop just the day of procedure</div><div class=\"gv-step\">Acute illness / vomiting / fasting / dehydration: STOP SGLT2i (sick-day rule)</div><div class=\"gv-step\">Unwell on SGLT2i: check BLOOD KETONES + base excess even if glucose normal</div><div class=\"gv-step\">Restart: when eating/drinking normally; &gt;=2 days after major surgery, day after minor</div></div>",
   "cutoffs": [
    "Cease on the **2 days before surgery + the day of surgery** (omit ≥3 days)",
    "**Day-stay no bowel prep**: stop day of procedure only",
    "Stop during **acute illness/fasting/vomiting**",
    "euDKA: glucose **normal/mildly raised** WITH ketoacidosis",
    "Blood ketones **>1.0 mmol/L** in unwell SGLT2i patient = check base excess (>1.0 + **BE <-5** = presumed DKA)",
    "Restart when eating/drinking normally: **≥2 days after major surgery**, day after minor"
   ],
   "title": "SGLT2i euglycaemic DKA",
   "subtitle": "withhold peri-illness/surgery, and DON'T trust the glucose",
   "id": "endocrine-8"
  },
  {
   "topic": "Amiodarone & the thyroid — distinguish Type 1 vs Type 2 thyrotoxicosis (carbimazole vs prednisolone) and remember hypothyroidism is far commoner in Australia",
   "subarea": "Thyroid",
   "trap": "- The tempting WRONG answer: 'stop amiodarone and give **carbimazole to all** amiodarone thyrotoxicosis'\n- Must **subtype**:\n  - **TYPE 1** (iodine-induced excess synthesis in pre-existing abnormal gland — nodular/latent Graves; increased vascularity on colour Doppler) → **carbimazole** (± potassium perchlorate)\n  - **TYPE 2** (destructive thyroiditis — leak from amiodarone toxicity; low/absent vascularity) → **prednisolone/glucocorticoids**\n- Giving carbimazole to a pure **Type 2** patient won't work; giving steroid to pure **Type 1** won't work\n- **Mixed/uncertain** = both\n- Amiodarone's huge **iodine load + long half-life** (weeks–months): effects persist long after stopping\n- Stopping isn't always possible (may be the **only drug controlling the arrhythmia**)",
   "whatFirst": "- Confirm thyrotoxicosis, then **subtype with colour-flow Doppler** ultrasound (± uptake — usually low due to iodine load)\n- Pre-existing goitre → **Type 1**; previously normal gland → **Type 2**\n- Treat per type; involve **cardiology** re: continuing amiodarone\n- **Hypothyroidism** (commoner, esp. iodine-replete Australia) → add **levothyroxine** and CONTINUE amiodarone",
   "discriminator": "- **Type 1**: abnormal gland, goitre/nodules, **↑Doppler vascularity**, responds to thionamide\n- **Type 2**: normal gland, **↓/absent vascularity**, raised IL-6, responds to steroid, often followed by hypothyroid phase\n- **Hypothyroidism**: ↑TSH on amiodarone → treat with thyroxine, **no need to stop the drug**",
   "redFlags": "- Thyrotoxicosis can **destabilise the underlying arrhythmia/heart failure** amiodarone was treating\n- Severe/refractory → consider **thyroidectomy**\n- Do **NOT use amiodarone** in thyroid storm",
   "cutoffs": [
    "Amiodarone ~**37% iodine** by weight (200 mg tablet ≈ 75 mg iodine, ~6 mg released free); half-life **weeks–months** (effects persist after cessation)",
    "**Type 1** → carbimazole (± perchlorate); **Type 2** → prednisolone **~30–40 mg/day** weaning",
    "**Hypothyroidism** is the MORE common amiodarone thyroid effect in iodine-replete Australia → levothyroxine, continue amiodarone",
    "Colour Doppler: **↑vascularity = Type 1**, ↓/absent = Type 2"
   ],
   "mnemonic": "'Type 1 = too much Iodine fuel → carbImazole (gland makes it). Type 2 = Tissue destruction → sTeroid (gland leaks it).' Vascularity: HIGH = Type 1, LOW = Type 2.",
   "viva": "- Must **subtype on Doppler/clinical grounds** — carbimazole vs steroid depends on type\n- Discuss whether **amiodarone can be stopped** (cardiology decision)\n- **Hypothyroidism is commoner** and doesn't require stopping amiodarone",
   "source": "Therapeutic Guidelines (eTG complete, current 2026); Type 1/2 management + colour-Doppler vascularity confirmed against Endotext 'Amiodarone-induced thyrotoxicosis'. Web-verified June 2026.",
   "verified": true,
   "tags": [
    "amiodarone",
    "AIT type 1",
    "AIT type 2",
    "carbimazole",
    "prednisolone",
    "colour Doppler",
    "amiodarone hypothyroidism",
    "MEDI8403 written",
    "MEDI8401 viva"
   ],
   "mcqTrap": "- '**All amiodarone thyrotoxicosis: carbimazole.**' WRONG\n- **Type 2 (destructive)** needs glucocorticoids; subtype on **Doppler/vascularity first**",
   "visualHtml": "<table class=\"gv-table\"><tr><th></th><th>Type 1 AIT</th><th>Type 2 AIT</th></tr><tr><td>Mechanism</td><td>Iodine-induced excess synthesis</td><td>Destructive thyroiditis (leak)</td></tr><tr><td>Gland</td><td>Pre-existing abnormal/nodular</td><td>Normal</td></tr><tr><td>Colour Doppler</td><td>Increased vascularity</td><td>Low/absent vascularity</td></tr><tr><td>Treatment</td><td>Carbimazole (± perchlorate)</td><td>Prednisolone</td></tr><tr><td>Aftermath</td><td>Stays hyper</td><td>Often transient → hypothyroid</td></tr></table>",
   "title": "Amiodarone & the thyroid",
   "subtitle": "distinguish Type 1 vs Type 2 thyrotoxicosis (carbimazole vs prednisolone) and remember hypothyroidism is far commoner in Australia",
   "id": "endocrine-9",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Thyroid_scintigraphy.jpg/960px-Thyroid_scintigraphy.jpg",
     "caption": "Amiodarone thyrotoxicosis Type 1 - toxic nodular goitre on isotope scan (hot nodule)",
     "alt": "Radionuclide thyroid uptake scan showing a hot autonomous nodule (Type 1 amiodarone thyrotoxicosis substrate)",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ultrasound_of_thyroid_showing_right_lower_pole_cyst_and_a_calcified_nodule.jpg/960px-Ultrasound_of_thyroid_showing_right_lower_pole_cyst_and_a_calcified_nodule.jpg",
     "caption": "Amiodarone thyrotoxicosis Type 2 - destructive thyroiditis (thyroid ultrasound with Doppler)",
     "alt": "Colour-flow Doppler ultrasound of thyroid showing reduced vascularity (Type 2 destructive thyroiditis pattern)",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Hyperthyroidism — diagnose the CAUSE before treating (uptake scan distinguishes Graves from thyroiditis), carbimazole first-line, agranulocytosis rule",
   "subarea": "Thyroid",
   "trap": "- Classic WRONG answer: 'start **carbimazole for any thyrotoxicosis**'\n- Antithyroid drugs only work where the gland is **over-producing** (Graves, toxic nodule/MNG)\n- **USELESS in destructive thyroiditis** (subacute/De Quervain, postpartum, amiodarone type 2) — hormone is leaking from a damaged gland → treat with **β-blocker ± NSAID/steroid** and wait it out\n- Establish the cause: **TRAb** (positive = Graves) and/or **radionuclide uptake scan**:\n  - **High/diffuse uptake** = Graves\n  - **High focal** = toxic nodule\n  - **Low/absent uptake** = thyroiditis or exogenous/iodine\n- Second trap: forgetting the **agranulocytosis warning**",
   "whatFirst": "- Confirm biochemically (**↓TSH, ↑fT4/fT3**), then determine cause (**TRAb + uptake scan**)\n- **β-blocker** for symptom control immediately\n- For Graves: **carbimazole** (first-line in Australia) — titration or block-and-replace — for **12–18 months**\n- Definitive options: **radioiodine or surgery**\n- Counsel on **agranulocytosis**: STOP drug and get urgent FBC if sore throat/fever/mouth ulcers",
   "discriminator": "- **Graves** = diffuse goitre + orbitopathy/pretibial myxoedema + **TRAb positive** + diffuse high uptake\n- **Toxic MNG/adenoma** = older, nodular, focal uptake, no eye signs\n- **Thyroiditis** = painful tender gland (subacute) or recent pregnancy (postpartum), raised ESR/CRP, **low uptake**, often self-limiting biphasic (thyrotoxic → hypothyroid → recovery)",
   "redFlags": "- Sore throat/fever on carbimazole or PTU = possible **AGRANULOCYTOSIS** → cease + urgent FBC\n- **PTU hepatotoxicity**\n- Graves orbitopathy threatening vision (optic neuropathy/corneal exposure) = urgent ophthalmology + **high-dose steroid**\n- **Radioiodine can worsen active eye disease** (cover with steroid)",
   "cutoffs": [
    "**Carbimazole first-line** in Australia (prodrug of methimazole); PTU reserved for **1st-trimester pregnancy**, storm, or carbimazole intolerance",
    "Agranulocytosis **~0.3–0.6%** — neutrophils **<0.5 ×10⁹/L**; FBC if febrile/sore throat",
    "Antithyroid course **~12–18 months** for Graves; ~50% relapse",
    "Radioiodine **contraindicated** in pregnancy/breastfeeding and active moderate-severe orbitopathy"
   ],
   "mnemonic": "'Uptake HIGH = make too much (treat the gland); uptake LOW = it's leaking (just wait + β-block).' Carbimazole sick day rule: 'Sore throat → STOP and FBC.'",
   "viva": "- What determines whether to give carbimazole → the **uptake/cause**\n- Then the **agranulocytosis counselling** point and **radioiodine/orbitopathy** interaction\n- Consent for radioiodine: radiation precautions, **lifelong hypothyroidism** likely",
   "source": "Therapeutic Guidelines (eTG complete, Thyroid disorders, current 2026); carbimazole-first-line + agranulocytosis ~0.3–0.6% confirmed via Australian case literature/IMJ. Web-verified June 2026.",
   "verified": true,
   "tags": [
    "hyperthyroidism",
    "Graves",
    "carbimazole",
    "PTU",
    "agranulocytosis",
    "radioiodine",
    "thyroiditis",
    "uptake scan",
    "MEDI8403 written",
    "MEDI8401 viva"
   ],
   "mcqTrap": "- '**Start carbimazole for subacute (De Quervain's) thyroiditis**' — WRONG\n- Destructive thyroiditis has **low uptake**; treat with β-blocker/NSAID, antithyroid drugs don't help",
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Diffuse high uptake = Graves → carbimazole</span><span class=\"gv-pill\">Focal high uptake = toxic nodule/MNG → carbimazole then RAI/surgery</span><span class=\"gv-pill\">Low/absent uptake = thyroiditis/exogenous → β-blocker ± NSAID/steroid, NO antithyroid drug</span></div>",
   "title": "Hyperthyroidism",
   "id": "endocrine-10",
   "images": [
    {
     "src": "assets/img/ophthalmology_exophthalmos_graves_01.jpg",
     "caption": "Graves disease - exophthalmos and lid retraction",
     "alt": "Bilateral proptosis (exophthalmos) and lid retraction in Graves hyperthyroidism",
     "credit": "CDC/Dr. Sellers/Emory University, Wikimedia Commons, public domain · Public domain"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Thyroid_scintigraphy.jpg/960px-Thyroid_scintigraphy.jpg",
     "caption": "Thyroid radionuclide scan - diffuse uptake (Graves) vs hot nodule vs suppressed (thyroiditis)",
     "alt": "Three-pattern thyroid scintigraphy: diffuse homogeneous uptake (Graves), single hot nodule (toxic adenoma), and suppressed/absent uptake (destructive thyroiditis)",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Hypothyroidism — levothyroxine dosing, the recheck-at-6-weeks rule, start LOW in the elderly/cardiac, and absorption traps",
   "subarea": "Thyroid",
   "trap": "- Tempting WRONG answer: '**recheck TSH at 1–2 weeks** after a dose change'\n- T4 has a **~7-day half-life** and TSH lags — TSH takes **≥4 weeks to stabilise**; recheck only **~6 weeks** (Australian Prescriber: at least **4–6 weeks**) after starting or adjusting\n- Second trap: starting a **full replacement dose** in elderly or ischaemic-heart-disease patient\n  - → Start **LOW (25 mcg)** and go slow; rapid rise in metabolic demand can precipitate angina/AF/MI\n- Third trap: persistently high TSH despite 'adequate' dose = check **adherence and absorption**:\n  - Take **fasting**, ~30–60 min before food\n  - Separate **≥2–4 h from iron/calcium/antacids**\n  - **PPIs/coeliac** reduce absorption",
   "whatFirst": "- Confirm **primary hypothyroidism** (↑TSH, ↓fT4)\n- If suspected **central or panhypopituitarism**: exclude/treat **adrenal insufficiency FIRST** (cortisol) before thyroxine\n- Start **full weight-based dose (~1.6 mcg/kg/day)** in young healthy\n- Start **25 mcg** and titrate (by 25 mcg every 3–4 weeks) in **elderly/cardiac**\n- Recheck **TSH ~6 weeks** after start/change; titrate to lower end of normal (lower TSH target in pregnancy)",
   "discriminator": "- **Primary** (↑TSH): titrate to **TSH**\n- **Central** (↓/normal TSH, ↓fT4): titrate to **free T4** — TSH is useless\n- **Subclinical hypothyroidism** (↑TSH, normal fT4): treat if TSH **>10**, or symptomatic / TPO-Ab+ / pregnant or planning\n- 'Resistant' high TSH = **adherence/absorption**, not under-dosing",
   "redFlags": "- New **angina/AF/palpitations** after starting thyroxine in cardiac patient → reduce dose, slow titration\n- Profound hypothyroidism with **hypothermia/obtundation** → myxoedema coma pathway (**hydrocortisone first**)",
   "cutoffs": [
    "Full replacement **≈1.6 mcg/kg/day**; elderly/IHD start **~25 mcg** then ↑25 mcg q3–4 weeks",
    "Recheck TSH **~6 weeks** after start/dose change (Aust Prescriber: at least **4–6 weeks**; NOT 1–2 weeks)",
    "Treat subclinical hypothyroidism if TSH **>10 mIU/L** (or symptomatic/TPO-Ab+/pregnancy)",
    "Take on empty stomach **~30–60 min pre-food**; separate **≥2–4 h** from iron/calcium; PPIs reduce absorption"
   ],
   "mnemonic": "'Start low, go slow (old hearts); recheck about six weeks; fasting, far from iron.' Central disease = treat the ADRENALS before the THYROID.",
   "viva": "- TSH still high on 150 mcg → check **adherence/absorption/coeliac** before raising dose\n- Start **25 mcg in a 78-year-old with IHD** to avoid precipitating **angina/AF**",
   "source": "Australian Prescriber 'Modern management of thyroid replacement therapy' (tg.org.au, current): ~1.6 mcg/kg/day, elderly/cardiac start 25 mcg, TSH stabilises ≥4 wk (recheck 4–6 wk), aim lower end of normal. Web-verified June 2026.",
   "verified": true,
   "tags": [
    "hypothyroidism",
    "levothyroxine",
    "TSH monitoring",
    "subclinical",
    "absorption",
    "elderly cardiac",
    "MEDI8403 written"
   ],
   "mcqTrap": "- '**Recheck TSH 2 weeks** after a thyroxine dose change' — WRONG\n- TSH takes ≥4 weeks to stabilise; recheck **~6 weeks** (at least 4–6)",
   "title": "Hypothyroidism",
   "subtitle": "levothyroxine dosing, the recheck-at-6-weeks rule, start LOW in the elderly/cardiac, and absorption traps",
   "id": "endocrine-11"
  },
  {
   "topic": "Myxoedema coma — hydrocortisone BEFORE thyroid hormone; it is hypothermia + hyponatraemia + hypoventilation, not 'coma'",
   "subarea": "Thyroid",
   "trap": "- Tempting WRONG answer: '**give IV levothyroxine immediately** as the single first step'\n- If coexisting (easily masked) **adrenal insufficiency**: replacing thyroid hormone FIRST accelerates cortisol clearance and can precipitate **adrenal crisis**\n- → Give IV **hydrocortisone before/with** thyroid hormone\n- 'Coma' is a misnomer — most patients are **obtunded, not comatose**\n- Lethal triad: **hypothermia, hyponatraemia, and CO2 retention/hypoventilation**\n- Precipitants: **cold exposure/winter**, infection/sepsis, MI, stroke, sedatives/opioids, stopping thyroxine, amiodarone",
   "whatFirst": "- **ABC + passive rewarming**\n- IV **hydrocortisone 100 mg q8h FIRST**\n- THEN IV **levothyroxine loading (200–400 mcg**, lower in elderly/cardiac)\n- ± low-dose **liothyronine (T3 5–20 mcg)** for faster onset\n- Correct **hyponatraemia** (cautiously — osmotic demyelination risk), glucose, ventilatory support\n- Treat precipitant (**septic screen + empirical antibiotics**)\n- **ICU**",
   "discriminator": "- vs sepsis/hypothermia alone — look for **hypothyroid backdrop**: thyroidectomy/RAI scar, prior thyroxine, non-pitting myxoedema, bradycardia, **hyporeflexia with delayed relaxation**, low-voltage ECG\n- TSH is **HIGH (primary)** — but normal/low TSH does NOT exclude central hypothyroidism\n- Check **free T4 (low)** and **cortisol** before steroid",
   "redFlags": "- Core temp **persistently low** despite rewarming, CO2 narcosis/**respiratory failure**, Na **<120**, refractory hypotension/bradycardia → ICU + ventilation + vasopressors\n- Do **NOT aggressively surface-rewarm** (vasodilatory collapse)",
   "cutoffs": [
    "**Hydrocortisone 100 mg IV q8h** BEFORE/with thyroid hormone",
    "Levothyroxine IV load **200–400 mcg** (lower in elderly/cardiac), then **~50–100 mcg/day**",
    "**Liothyronine (T3) 5–20 mcg** load optional for speed (caution in cardiac disease)",
    "**Passive rewarming** (avoid active surface rewarming → collapse)"
   ],
   "mnemonic": "'STEROID before THYROID.' The 4 H's of myxoedema coma: Hypothermia, Hyponatraemia, Hypoventilation (hypercapnia), Hypoglycaemia/Hypotension.",
   "viva": "- Give **hydrocortisone FIRST** — to avoid precipitating adrenal crisis\n- ISBAR: hypothermic bradycardic obtunded patient, known/likely hypothyroid\n- Gave **hydrocortisone then IV T4**; ICU for **ventilation + rewarming**",
   "source": "Therapeutic Guidelines (eTG complete, current 2026); hormone doses/sequence confirmed against ATA-aligned Endotext & StatPearls (myxoedema coma). Web-verified June 2026.",
   "verified": true,
   "tags": [
    "myxoedema coma",
    "severe hypothyroidism",
    "hydrocortisone first",
    "hypothermia",
    "hyponatraemia",
    "IV levothyroxine",
    "emergency",
    "MEDI8401 viva"
   ],
   "mcqTrap": "- '**Start IV thyroxine immediately** as sole first-line' — WRONG\n- Give **hydrocortisone first/with it** to prevent adrenal crisis",
   "visualHtml": "<table class=\"gv-table\"><tr><th>Step</th><th>Action</th><th>Why</th></tr><tr><td>1</td><td>ABC, passive rewarming, glucose</td><td>Stabilise; avoid active rewarming collapse</td></tr><tr><td>2</td><td>Hydrocortisone 100 mg IV q8h</td><td>BEFORE thyroid hormone — prevents adrenal crisis</td></tr><tr><td>3</td><td>IV levothyroxine 200–400 mcg load ± T3</td><td>Replace hormone (after steroid given)</td></tr><tr><td>4</td><td>Treat precipitant (sepsis/MI), correct Na</td><td>Address trigger; avoid rapid Na shift</td></tr></table>",
   "title": "Myxoedema coma",
   "subtitle": "hydrocortisone BEFORE thyroid hormone; it is hypothermia + hyponatraemia + hypoventilation, not 'coma'",
   "id": "endocrine-12"
  },
  {
   "topic": "TFT pattern interpretation — TSH is the screening test; match the pattern, and know the 4 'traps' (sick euthyroid, central, subclinical, assay interference)",
   "subarea": "Thyroid",
   "trap": "- Tempting WRONG move: diagnosing thyroid disease off a **single abnormal TSH** in a hospital inpatient\n  - This is usually **NON-THYROIDAL ILLNESS (sick euthyroid)**: low T3 first, then low T4, with TSH normal/low and a TSH **REBOUND high** during recovery\n  - Do **NOT treat**\n- Second trap: a **LOW free T4** with a normal/low (inappropriately not-high) TSH = **CENTRAL hypothyroidism** (pituitary/hypothalamic)\n  - Must check the **cortisol/ACTH axis** and image the pituitary\n  - **TSH cannot be used** to monitor\n- Third trap: **HIGH T4/T3 + HIGH (non-suppressed) TSH** = NOT ordinary Graves\n  - Think **TSH-secreting adenoma** or **thyroid hormone resistance** (or assay interference/biotin)",
   "whatFirst": "- **Screen with TSH**; if abnormal → reflex **free T4** (± free T3)\n- Interpret as a **PATTERN**, not a single number\n- In an unwell inpatient, **defer interpretation/repeat after recovery**\n- If the pattern is 'impossible' (high T4 with high TSH, or discordant), suspect **biotin supplement interference**\n  - Stop biotin **≥2 days**, repeat before chasing rare tumours",
   "discriminator": "- **Primary hypo** = ↑TSH ↓fT4\n- **Subclinical hypo** = ↑TSH normal fT4\n- **Primary hyper** (Graves/toxic nodule) = ↓TSH ↑fT4/fT3\n- **Subclinical hyper** = ↓TSH normal fT4/fT3\n- **Central hypo** = ↓/normal TSH with ↓fT4\n- **Sick euthyroid** = ↓fT3 (±↓fT4), TSH normal/low\n- **TSH-oma/resistance** = ↑fT4/fT3 with non-suppressed TSH",
   "redFlags": "- Inappropriately normal/high TSH with **high free hormones** → pituitary MRI/specialist\n- **Central hypothyroidism** mandates **cortisol check BEFORE thyroxine**\n  - Same adrenal-crisis logic as myxoedema",
   "cutoffs": [
    "Adult TSH reference **~0.4–4.0 mIU/L** (lab-specific; some Australian labs upper limit ~5.0)",
    "Subclinical hypothyroid TSH **4–10** with normal fT4 — treat if symptomatic, TPO-Ab positive, or pregnant/planning; treat if TSH **>10**",
    "Sick euthyroid: **↓T3 earliest**; recovery TSH rebound can transiently exceed range",
    "**Biotin interference** falsely ↑fT4/fT3 and ↓TSH (mimics Graves) — stop biotin **≥2 days** then repeat"
   ],
   "mnemonic": "'TSH moves OPPOSITE to disease in primary disease, SAME direction in pituitary disease.' Inpatient deranged TFT = 'sick, not thyroid — repeat when better.'",
   "viva": "- Examiner shows a **discordant TFT** and asks the next step\n  - Identify the pattern, name **central hypothyroidism / sick euthyroid / biotin interference**\n  - State you'd **check cortisol before replacing thyroxine** in suspected central disease",
   "source": "Australian Prescriber 'Thyroid function tests' & 'Modern management of thyroid replacement therapy' (tg.org.au, current); NPS MedicineWise 'Managing thyroid conditions in primary care'. Web-verified June 2026.",
   "verified": true,
   "tags": [
    "TFT interpretation",
    "TSH",
    "free T4",
    "sick euthyroid",
    "central hypothyroidism",
    "subclinical",
    "biotin interference",
    "MEDI8403 written"
   ],
   "mcqTrap": "- '**High TSH in an ICU patient = start thyroxine.**' WRONG\n  - Non-thyroidal illness/recovery rebound; **repeat after recovery**",
   "visualHtml": "<table class=\"gv-table\"><tr><th>Pattern</th><th>TSH</th><th>free T4/T3</th><th>Dx</th></tr><tr><td>Primary hypo</td><td>High</td><td>Low fT4</td><td>Hashimoto/post-RAI</td></tr><tr><td>Subclinical hypo</td><td>High</td><td>Normal</td><td>Treat if &gt;10 / symptomatic / pregnant</td></tr><tr><td>Primary hyper</td><td>Low</td><td>High</td><td>Graves/toxic nodule</td></tr><tr><td>Central hypo</td><td>Low/normal</td><td>Low fT4</td><td>Pituitary — check cortisol first</td></tr><tr><td>Sick euthyroid</td><td>Normal/low</td><td>Low fT3 first</td><td>Don't treat; repeat later</td></tr><tr><td>TSH-oma / resistance / biotin</td><td>High/normal</td><td>High</td><td>Discordant — exclude biotin first</td></tr></table>",
   "title": "TFT pattern interpretation",
   "subtitle": "TSH is the screening test; match the pattern, and know the 4 'traps' (sick euthyroid, central, subclinical, assay interference)",
   "id": "endocrine-13"
  },
  {
   "topic": "Thyroid disease in pregnancy — PTU in 1st trimester then switch to carbimazole; target TSH below 2.5; increase levothyroxine ~25–30% as soon as pregnancy confirmed; NO radioiodine",
   "subarea": "Thyroid",
   "trap": "- Two opposing tempting WRONG answers:\n- (a) 'Use **carbimazole throughout pregnancy**' — WRONG\n  - Carbimazole/methimazole causes **EMBRYOPATHY** (aplasia cutis, choanal/oesophageal atresia) in the **1st trimester**\n  - Use **PTU in the 1st trimester**, then **SWITCH to carbimazole** in the 2nd trimester (because of PTU's **hepatotoxicity** risk)\n- (b) 'Keep the **SAME thyroxine dose**' in a known hypothyroid woman — WRONG\n  - Requirements **RISE early**; increase by **~25–30%** (often ~2 extra doses/week) **AS SOON AS pregnancy is confirmed**, don't wait for the next test\n- **Radioiodine** (diagnostic or therapeutic) is **absolutely CONTRAINDICATED** in pregnancy and breastfeeding",
   "whatFirst": "- **Hypothyroid + pregnant**: increase levothyroxine **~25–30% immediately** on confirming pregnancy\n  - Check TSH every **~4 weeks** until ~mid-gestation (and once between 26–32 weeks)\n- **Hyperthyroid + pregnant**: confirm cause (Graves vs gestational transient thyrotoxicosis of hCG/hyperemesis)\n  - Use **lowest effective PTU in T1** → **carbimazole from T2**\n  - Target **free T4 high-normal** with the lowest drug dose\n  - Monitor for **fetal/neonatal thyrotoxicosis** if TRAb high",
   "discriminator": "- **Gestational transient thyrotoxicosis** (hCG-driven, hyperemesis gravidarum, peaks ~end-T1, **TRAb negative**, no goitre/eye signs)\n  - = **supportive only, NO antithyroid drug**\n- vs **true Graves** (**TRAb positive**, goitre, orbitopathy) which needs PTU\n- **Don't reflexively treat** a low TSH in early pregnancy",
   "redFlags": "- **High maternal TRAb** (even if mother euthyroid post-thyroidectomy/RAI) crosses placenta → **fetal/neonatal thyrotoxicosis**\n  - Monitor fetal HR/growth\n- **Untreated maternal hypothyroidism** → impaired **neurodevelopment**, miscarriage",
   "cutoffs": [
    "Target TSH **<2.5 mIU/L** (use trimester/population-specific ranges where available)",
    "First-trimester: use lab/trimester-specific reference range (**upper limit lower** than non-pregnant)",
    "Increase pre-existing levothyroxine **~25–30%** on confirming pregnancy (broader literature 30–50%); recheck TSH **~q4 weeks**",
    "**PTU in 1st trimester → carbimazole from 2nd trimester**; radioiodine **contraindicated** in pregnancy/breastfeeding"
   ],
   "mnemonic": "'PTU early, Carbimazole late (by trimester).' 'Pregnant + hypothyroid = pump the dose up by a quarter, straight away.'",
   "viva": "- Examiner: 'Hyperthyroid woman wanting pregnancy — which drug and when?'\n  - **PTU T1 → carbimazole T2**\n- Examiner: 'Known hypothyroid, just pregnant — next step?'\n  - **Increase dose ~25–30% now**, TSH q4 weeks, target **<2.5**\n- Consent point: **radioiodine forbidden**, defer to surgery if definitive Rx needed",
   "source": "Australian Prescriber 'Thyroid disorders in pregnancy and postpartum' (tg.org.au, current) — PTU T1→carbimazole, ~25–30% dose rise, TSH <2.5; aligns with RANZCOG C-Obs 46 & ESA. Web-verified June 2026.",
   "verified": true,
   "tags": [
    "thyroid pregnancy",
    "PTU first trimester",
    "carbimazole embryopathy",
    "levothyroxine increase",
    "TSH 2.5",
    "TRAb",
    "gestational thyrotoxicosis",
    "MEDI8403 written",
    "MEDI8401 viva"
   ],
   "mcqTrap": "- '**Continue carbimazole through the first trimester.**' WRONG\n  - Risk of **carbimazole embryopathy**; use **PTU in T1**, switch to **carbimazole in T2**",
   "visualHtml": "<table class=\"gv-table\"><tr><th>Trimester</th><th>Hyperthyroid (Graves) drug</th><th>Hypothyroid</th></tr><tr><td>1st</td><td>PTU (avoid carbimazole embryopathy)</td><td>↑Levothyroxine ~25–30% at confirmation</td></tr><tr><td>2nd</td><td>Switch to carbimazole (PTU hepatotoxicity)</td><td>TSH q4 weeks, target &lt;2.5</td></tr><tr><td>3rd</td><td>Carbimazole, lowest dose; watch neonatal TRAb effect</td><td>Reassess; needs often drop postpartum</td></tr></table>",
   "title": "Thyroid disease in pregnancy",
   "id": "endocrine-14",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Aplasia_cutis_congenita.jpg/960px-Aplasia_cutis_congenita.jpg",
     "caption": "Aplasia cutis congenita - carbimazole embryopathy (scalp defect in neonate)",
     "alt": "Aplasia cutis congenita - focal absence of skin on the neonatal scalp, a recognised teratogenic effect of carbimazole/methimazole in the first trimester",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Thyroid nodule & cancer work-up — TSH FIRST (suppressed → scan, not FNA), then ultrasound/TIRADS to decide FNA; calcitonin/medullary clue",
   "subarea": "Thyroid",
   "trap": "- Single most tempting WRONG answer: '**do an FNA on every thyroid nodule**'\n- The **FIRST test is TSH**\n  - If TSH is **SUPPRESSED**, the nodule may be a **HOT (autonomous) nodule**\n  - Order a **radionuclide UPTAKE scan** — hot nodules are almost never malignant and **do NOT need FNA**\n- Only proceed to **ultrasound-guided FNA** when TSH is normal/high (cold/indeterminate nodule) AND ultrasound risk (**ACR TI-RADS**) + size cross threshold\n- Don't order **CT with iodinated contrast** before sorting thyroid status (iodine load)\n- Don't biopsy **purely cystic** low-risk nodules",
   "whatFirst": "- (1) **TSH** — if suppressed → uptake scan (hot = benign, treat hyperthyroidism, no FNA)\n- (2) If TSH normal/high → **thyroid ultrasound with ACR TI-RADS scoring**\n- (3) **FNA decision** driven by TI-RADS category + size threshold\n  - Higher-risk categories biopsied at smaller sizes\n- (4) Report cytology by **Bethesda**; indeterminate → endocrine surgery/molecular/diagnostic lobectomy",
   "discriminator": "- **Benign clues**: soft, hot on scan, spongiform/purely cystic, stable\n- **Malignant red flags**: hard fixed nodule, rapid growth, hoarseness/vocal cord palsy, cervical lymphadenopathy, age <20 or >60, male, prior **neck irradiation**, FHx (MEN2/medullary)\n- **Suspicious ultrasound** = solid hypoechoic, taller-than-wide, irregular/lobulated margins, **microcalcifications**, extrathyroidal extension",
   "redFlags": "- **Hoarseness/vocal cord paralysis**, fixed hard nodule, lymphadenopathy, stridor → urgent **ENT/endocrine surgery** referral and FNA regardless of size\n- **Raised calcitonin** → medullary carcinoma\n  - Screen for **phaeo/MEN2** — check **metanephrines before any surgery**",
   "cutoffs": [
    "**TSH is the FIRST test**; suppressed → uptake scan (NOT FNA)",
    "ACR TI-RADS: **TR5** (highly suspicious) FNA if **≥1 cm**; **TR4** if **≥1.5 cm**; **TR3** if **≥2.5 cm**; TR1–2 no FNA",
    "**Bethesda** category drives management (III/IV indeterminate → molecular/diagnostic lobectomy)",
    "Check **plasma metanephrines BEFORE thyroidectomy** if medullary (calcitonin↑/MEN2) suspected"
   ],
   "mnemonic": "'TSH then TI-RADS.' 'Suppressed TSH = scan it (hot = not), don't stick it.' Cancer red flags = the 'hard, fixed, hoarse, node' quartet.",
   "viva": "- Examiner: 'Solitary thyroid nodule — first investigation?' → **TSH** (then branch)\n- Examiner: 'When do you NOT FNA?' → **suppressed TSH/hot nodule**, low TI-RADS below size cut, **purely cystic**\n- Consent for thyroidectomy: **recurrent laryngeal nerve** (voice), **hypoparathyroidism/hypocalcaemia**, lifelong thyroxine",
   "source": "Australian Prescriber 'Investigating thyroid nodules' (tg.org.au, current); ACR TI-RADS FNA size cut-offs (TR5≥1cm, TR4≥1.5cm, TR3≥2.5cm) web-verified June 2026.",
   "verified": true,
   "tags": [
    "thyroid nodule",
    "thyroid cancer",
    "TSH first",
    "uptake scan",
    "ACR TIRADS",
    "FNA",
    "Bethesda",
    "medullary calcitonin",
    "MEN2",
    "MEDI8403 written",
    "MEDI8401 viva"
   ],
   "mcqTrap": "- '**Best initial step for a thyroid nodule is FNA biopsy.**' WRONG\n  - First do **TSH**; if suppressed, **scan** (hot nodule needs no FNA)",
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">1. Solitary nodule → TSH (FIRST)</div><div class=\"gv-step\">2a. TSH suppressed → uptake scan: HOT = benign, treat hyper, NO FNA</div><div class=\"gv-step\">2b. TSH normal/high → ultrasound + ACR TI-RADS</div><div class=\"gv-step\">3. FNA per TI-RADS + size (TR5≥1cm, TR4≥1.5cm, TR3≥2.5cm)</div><div class=\"gv-step\">4. Bethesda cytology → indeterminate = surgery/molecular; red flags → urgent ENT/surgery</div></div>",
   "title": "Thyroid nodule & cancer work-up",
   "subtitle": "TSH FIRST (suppressed → scan, not FNA), then ultrasound/TIRADS to decide FNA; calcitonin/medullary clue",
   "id": "endocrine-15",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Bojunga_et_al._2012_ARFI_papillary_thyroid_carcinoma.png/960px-Bojunga_et_al._2012_ARFI_papillary_thyroid_carcinoma.png",
     "caption": "Thyroid ultrasound - hypoechoic nodule with irregular margins (suspicious/TIRADS 4-5)",
     "alt": "Greyscale thyroid ultrasound showing a hypoechoic solid nodule with irregular margins and microcalcifications (high TIRADS score, FNA-worthy)",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Thyroid_scintigraphy.jpg/960px-Thyroid_scintigraphy.jpg",
     "caption": "Thyroid radionuclide scan - hot (autonomous) nodule with suppressed background",
     "alt": "Tc-99m thyroid scan showing a single hot autonomous nodule with suppression of the remaining thyroid - indicates benign functioning nodule, FNA not required",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Thyroid storm — the drug SEQUENCE is the whole exam (β-blocker + thionamide FIRST, iodine ONLY ≥1 h later, steroid throughout)",
   "subarea": "Thyroid",
   "trap": "- Single most tempting WRONG answer: '**give Lugol's iodine / potassium iodide first** to stop hormone release'\n  - Giving iodine BEFORE a thionamide provides **substrate that can fuel MORE hormone synthesis** (Jod-Basedow phenomenon) and worsen the storm\n  - **Iodine must wait ≥1 hour AFTER the thionamide**\n- Correct order:\n  - (1) **Propranolol** (β-blockade controls the lethal adrenergic/cardiac component; at high dose blocks **peripheral T4→T3**)\n  - (2) **PTU** (preferred over carbimazole in storm because PTU **ALSO blocks peripheral T4→T3** via deiodinase)\n  - (3) **≥1 h later, iodine** (Lugol's/SSKI — blocks hormone **RELEASE**)\n  - (4) **Hydrocortisone** (treats relative adrenal insufficiency + blocks T4→T3)\n- Plus aggressive **cooling, fluids**, and treat the **PRECIPITANT** (infection, surgery, contrast/iodine load, DKA, recent radioiodine, antithyroid drug withdrawal)",
   "whatFirst": "- **Resus + propranolol** IV/PO for the cardiac/adrenergic crisis\n- Then **PTU loading dose**\n- Then **iodine ≥1 h after PTU**\n- Then **hydrocortisone**\n- **Cooling** with **paracetamol** NOT aspirin\n  - Aspirin **displaces T4 from TBG** and raises free T4\n- Find/treat the **precipitant**\n- **ICU/HDU**",
   "discriminator": "- Storm vs uncomplicated thyrotoxicosis = **end-organ decompensation**:\n  - **Hyperpyrexia** (often >38.5°C, up to 41°C)\n  - **CNS** (agitation→delirium→coma/seizure)\n  - **CV** (AF/CCF/shock)\n  - **GI-hepatic** (vomiting/diarrhoea/jaundice)\n- **Burch–Wartofsky ≥45** highly suggestive; 25–44 impending; <25 unlikely\n- This is a **CLINICAL diagnosis**; TFTs are no more deranged than ordinary thyrotoxicosis\n  - Do **NOT wait for results** to treat",
   "redFlags": "- **Hyperpyrexia**, AF with rapid ventricular response/CCF, altered mental state, **jaundice** — escalate to ICU\n- Consider **plasmapheresis/emergency thyroidectomy** if refractory\n- **Aspirin** and **amiodarone** are contraindicated",
   "cutoffs": [
    "**Burch–Wartofsky ≥45** = thyroid storm likely; **25–44** = impending; **<25** = unlikely",
    "Temperature usually **>38.5°C** (may reach 41°C) is a hallmark",
    "Iodine timed **≥1 hour AFTER** the first thionamide dose",
    "**Propranolol** e.g. 60–80 mg PO q4–6h (or IV titrated); **PTU** ~500–1000 mg load then 250 mg q4h; **hydrocortisone** 100 mg IV q8h"
   ],
   "mnemonic": "Order = 'Block synthesis, Block release, Block conversion, Block adrenergic, Block adrenal' → ADMINISTER as B-T-I-S: Beta-blocker, then Thionamide (PTU), then Iodine (after ≥1 h), then Steroid. 'Thionamide before iodine, never the reverse.'",
   "viva": "- Examiner probes the **SEQUENCE and WHY**:\n  - 'Why **PTU not carbimazole** here?' (PTU blocks **peripheral conversion**)\n  - 'Why **not iodine first**?' (substrate for synthesis / Jod-Basedow)\n- ISBAR to ICU: febrile thyrotoxic patient with **AF + delirium**, Burch–Wartofsky X, started propranolol/PTU/steroid, requesting HDU and precipitant work-up",
   "source": "Therapeutic Guidelines (eTG complete, Thyroid emergencies, current 2026); confirmed against JCEM 'Approach to thyroid storm' (2026) and Burch–Wartofsky scoring. Sequence/doses web-verified June 2026.",
   "verified": true,
   "tags": [
    "thyroid storm",
    "thyrotoxic crisis",
    "PTU",
    "propranolol",
    "Lugol iodine",
    "hydrocortisone",
    "Burch-Wartofsky",
    "emergency",
    "MEDI8401 viva"
   ],
   "mcqTrap": "- '**First-line is potassium iodide to inhibit hormone release.**' WRONG\n  - Iodine first provides substrate for synthesis (**Jod-Basedow**); **thionamide must precede iodine by ≥1 h**",
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">1. RESUS + Propranolol (β-block: cardiac/adrenergic, blocks T4→T3)</div><div class=\"gv-step\">2. PTU load (blocks synthesis AND peripheral conversion)</div><div class=\"gv-step\">3. WAIT ≥1 h → Iodine / Lugol's (blocks release; never before thionamide)</div><div class=\"gv-step\">4. Hydrocortisone (adrenal cover + blocks conversion)</div><div class=\"gv-step\">5. Cooling (paracetamol NOT aspirin) + treat precipitant + ICU</div></div>",
   "title": "Thyroid storm",
   "subtitle": "the drug SEQUENCE is the whole exam (β-blocker + thionamide FIRST, iodine ONLY ≥1 h later, steroid throughout)",
   "id": "endocrine-16",
   "images": [
    {
     "src": "assets/img/ophthalmology_exophthalmos_graves_01.jpg",
     "caption": "Thyroid storm - severe Graves with exophthalmos and goitre",
     "alt": "Gross diffuse goitre with exophthalmos in a patient with Graves disease, the most common substrate for thyroid storm",
     "credit": "CDC/Dr. Sellers/Emory University, Wikimedia Commons, public domain · Public domain"
    }
   ]
  },
  {
   "topic": "Acromegaly — IGF-1 screens, OGTT-GH confirms (random GH does NOT)",
   "subarea": "Adrenal & pituitary",
   "trap": "- Diagnostic-sequence gotcha: **SCREEN with serum IGF-1** (age- and sex-matched)\n  - Integrates GH over time, so reliable\n  - Unlike **random GH** which is pulsatile and **useless as a single value**\n- **CONFIRM with an OGTT** measuring GH\n  - Normal: glucose load **SUPPRESSES GH**\n  - Acromegaly: GH **FAILS to suppress**\n- Then **localise with pituitary MRI** and assess for the rest of the syndrome\n- **TREATMENT**: first-line is **transsphenoidal surgery** (curative for most, especially microadenomas)\n  - Medical therapy (somatostatin analogues e.g. **octreotide/lanreotide**; **pegvisomant** a GH-receptor antagonist; **cabergoline**) = for residual/unresectable disease or pre-op\n- Screen for the **complications that kill**: cardiovascular disease, sleep apnoea, type 2 diabetes/impaired glucose tolerance, and **COLON CANCER** (offer colonoscopy)\n- GH excess **BEFORE epiphyseal fusion** = **gigantism**; **after fusion** = **acromegaly**",
   "cutoffs": [
    "Screen: elevated **age/sex-adjusted serum IGF-1**",
    "Confirm: **OGTT** (75 g glucose) — GH FAILS to suppress to **<1 microgram/L** (2014 guideline); with modern ultrasensitive assays nadir **<0.4 microgram/L** now used",
    "**Random/single GH is NOT diagnostic** (pulsatile)",
    "First-line treatment: **transsphenoidal surgical resection**",
    "Medical (residual/unresectable): **somatostatin analogues** (octreotide/lanreotide), **pegvisomant**, cabergoline",
    "Screen complications: HbA1c/glucose, BP/echo, sleep study, **COLONOSCOPY**"
   ],
   "discriminator": "- **Acromegaly** (post-fusion): acral/soft-tissue growth, prognathism, large hands/feet, sweating, OSA\n- **Gigantism** (pre-fusion): tall stature\n- Confirm by **failure of GH suppression on OGTT** — distinguishes true acromegaly from a high IGF-1 of other cause (puberty, pregnancy)\n- Pituitary **mass effect** can co-exist (visual fields, hypopituitarism)",
   "redFlags": "- **Visual field defect** (chiasm), symptoms of **OSA**, new/uncontrolled **diabetes**, cardiomyopathy\n  - Screen for **colorectal neoplasia**\n- **Sudden severe headache + visual loss** in a known somatotroph adenoma = **apoplexy**",
   "mcqTrap": "- 'Measure a **single random serum growth hormone** to diagnose acromegaly.' WRONG\n  - GH is pulsatile; a random level is **uninterpretable**\n  - Screen with **IGF-1** and confirm with **failure of GH suppression on OGTT**\n- Second trap: choosing **octreotide as first-line** when **surgery is first-line** for resectable tumours",
   "viva": "- What-first: 'Screen with **IGF-1**, confirm with **OGTT-GH**, MRI to localise, then **transsphenoidal surgery** as first-line; screen for OSA, diabetes, cardiac disease and **colon cancer**'\n- Examiner probes why **random GH is useless** and the **OGTT logic**",
   "mnemonic": "'IGF-1 to find, OGTT to confirm, surgery to cure.' Complications = 'BIG ABCD': BP, Insulin resistance/diabetes, Goitre/organomegaly, Apnoea, Bowel (colon) cancer, Cardiomyopathy, Degenerative arthritis.",
   "source": "Endocrine Society Clinical Practice Guideline (Acromegaly, JCEM 2014) and 2025 Acromegaly Consensus update; Endocrine Society of Australia; eTG (current).",
   "tags": [
    "acromegaly",
    "IGF-1",
    "OGTT GH suppression",
    "transsphenoidal surgery",
    "colon cancer screen"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">1. SCREEN: serum IGF-1 (age/sex-matched)</div><div class=\"gv-step\">2. CONFIRM: OGTT — GH fails to suppress &lt;1 microgram/L (&lt;0.4 ultrasensitive)</div><div class=\"gv-step\">3. LOCALISE: pituitary MRI + visual fields</div><div class=\"gv-step\">4. TREAT: transsphenoidal surgery (1st-line)</div><div class=\"gv-step\">5. SCREEN complications: diabetes, OSA, cardiac, COLONOSCOPY</div></div>",
   "title": "Acromegaly",
   "subtitle": "IGF-1 screens, OGTT-GH confirms (random GH does NOT)",
   "id": "endocrine-17",
   "images": [
    {
     "src": "assets/img/endocrine_acromegaly_hands_01.jpg",
     "caption": "Acromegaly - large spade-shaped hands with broad fingers",
     "alt": "Acromegaly - characteristically enlarged, spade-shaped hands with broad digits compared to a normal hand",
     "credit": "Philippe Chanson and Sylvie Salenave, CC BY 2.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Face_of_a_man_with_acromegaly_Wellcome_L0067013.jpg/960px-Face_of_a_man_with_acromegaly_Wellcome_L0067013.jpg",
     "caption": "Acromegaly - coarse facial features (frontal bossing, prognathism, macroglossia)",
     "alt": "Acromegaly facial features: frontal bossing, prominent supraorbital ridges, prognathism, broad nose and macroglossia",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Acromegaly_pituitary_macroadenoma.JPEG",
     "caption": "Acromegaly - pituitary macroadenoma on MRI",
     "alt": "Coronal T1-weighted MRI with gadolinium showing a pituitary macroadenoma (GH-secreting) with suprasellar extension compressing the optic chiasm",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Addisonian (adrenal) crisis — give hydrocortisone FIRST, never wait for cortisol/Synacthen",
   "subarea": "Adrenal & pituitary",
   "trap": "- Single biggest gotcha: **TREAT BEFORE you confirm**\n  - Suspected adrenal crisis = **IV/IM hydrocortisone 100 mg STAT, immediately**, before/while taking the random cortisol and ACTH\n  - **WITHOUT waiting for the Short Synacthen Test**\n  - Diagnostic testing must **NEVER delay treatment**\n- After the bolus: **hydrocortisone 50 mg IV/IM q6h** (= 200 mg/24h, or a 200 mg/24h continuous infusion)\n  - PLUS aggressive **IV 0.9% saline** (1 L in the first hour) and **IV glucose** for hypoglycaemia\n- Hydrocortisone at stress dose already provides **mineralocorticoid effect**\n  - **Fludrocortisone NOT needed acutely** (add later once on <50 mg/day hydro)\n- Classic biochemistry: **hyperkalaemia + hyponatraemia + hypoglycaemia + hypotension** unresponsive to fluids\n- You CAN draw a clotted serum for **cortisol/ACTH on the way in** (stays interpretable)\n  - But **hydrocortisone still given immediately** — do not substitute dexamethasone just to preserve a later Synacthen test\n  - Hydrocortisone also gives the **mineralocorticoid cover** the patient needs",
   "cutoffs": [
    "**Hydrocortisone 100 mg IV/IM STAT** bolus, then **50 mg q6h** IV/IM (= **200 mg/24h**, or 200 mg/24h continuous infusion)",
    "IV **0.9% saline**: **1 L in the first hour**, then guided by haemodynamics",
    "Random cortisol at crisis: **<100 nmol/L** strongly supports, **>500 nmol/L** makes it unlikely (draw but **DO NOT wait**)",
    "**Short Synacthen Test** (250 microgram IV/IM): 30/60-min cortisol **<420–500 nmol/L** = inadequate response (do **AFTER crisis resolves**)",
    "Precipitants: infection, missed steroid doses, surgery — sick-day rule = **DOUBLE the oral glucocorticoid dose**"
   ],
   "discriminator": "- **PRIMARY** (Addison's): **high ACTH**, hyperpigmentation, **hyperkalaemia**, salt-craving, needs fludrocortisone\n- **SECONDARY/pituitary**: **low ACTH**, **NO hyperpigmentation**, **NO hyperkalaemia** (aldosterone is renin-driven and intact), **no fludrocortisone** needed\n- **Hyperkalaemia + pigmentation** points to primary",
   "redFlags": "- **Hypotension not responding to fluids**, hypoglycaemia, hyponatraemia/hyperkalaemia\n  - In a patient on **long-term steroids** who stopped or is septic\n  - Treat as crisis even **without a known Addison's diagnosis**",
   "mcqTrap": "- '**Perform a Short Synacthen Test to confirm before starting steroids.**' WRONG\n  - Confirmatory testing delays **life-saving treatment**; give **hydrocortisone first**\n- Second trap: '**Give IV fludrocortisone**'\n  - No role acutely (stress-dose hydrocortisone covers mineralocorticoid need; **fludrocortisone is oral only**)",
   "viva": "- What-first: 'I'd give **IV hydrocortisone 100 mg** and a **0.9% saline bolus** immediately while drawing cortisol/ACTH/U&E/BSL — I would **not delay for the Synacthen test**'\n- ISBAR escalation to ICU/endocrine\n- Discriminator the examiner probes: **why no hyperkalaemia in secondary AI**",
   "mnemonic": "SHOCKED: Steroids (Hydrocortisone) first, Hydration (saline), O — don't wait, Cortisol drawn not awaited, K+ high (primary), Empty sugar (glucose), Don't give fludro acutely.",
   "source": "Therapeutic Guidelines (eTG, current) — Endocrinology, Adrenal insufficiency/crisis; RCH Clinical Practice Guideline (Adrenal crisis); Society for Endocrinology Adrenal Crisis emergency guidance (consistent: 100 mg hydrocortisone STAT then 50 mg q6h, treat before confirm).",
   "tags": [
    "adrenal crisis",
    "Addison's",
    "hydrocortisone",
    "what-first",
    "emergency"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Feature</th><th>Primary (Addison's)</th><th>Secondary (pituitary)</th></tr></thead><tbody><tr><td>ACTH</td><td>High</td><td>Low/inappropriately normal</td></tr><tr><td>Hyperpigmentation</td><td>Yes</td><td>No</td></tr><tr><td>K+</td><td>High</td><td>Normal</td></tr><tr><td>Aldosterone axis</td><td>Lost</td><td>Intact (renin-driven)</td></tr><tr><td>Fludrocortisone</td><td>Needed long-term</td><td>Not needed</td></tr></tbody></table>",
   "title": "Addisonian (adrenal) crisis",
   "subtitle": "give hydrocortisone FIRST, never wait for cortisol/Synacthen",
   "id": "endocrine-18"
  },
  {
   "topic": "Conn's syndrome / primary aldosteronism — screen with ARR; stop the interfering drugs",
   "subarea": "Adrenal & pituitary",
   "trap": "- Primary aldosteronism (PA) is the **commonest cause of secondary/resistant hypertension** (~5–10% of hypertensives) and is **UNDER-screened**\n  - Screen anyone with: resistant HTN, **hypokalaemia**, adrenal incidentaloma, HTN + OSA, or HTN <40y\n- Screen with the **ALDOSTERONE-TO-RENIN RATIO (ARR)**\n  - High aldosterone + **SUPPRESSED renin** = elevated ratio\n- Drug trap: **MINERALOCORTICOID RECEPTOR ANTAGONISTS** (spironolactone, eplerenone) must be **ceased ~4–6 weeks before ARR**\n  - They falsely raise renin and **mask PA**\n  - **Correct hypokalaemia first** (low K+ suppresses aldosterone → false-negative)\n  - Beta-blockers **raise ARR** (false-positive); ACEi/ARB/diuretics **lower** it\n- A positive ARR needs a **CONFIRMATORY suppression test** (saline infusion or fludrocortisone suppression) before subtyping with adrenal CT and **adrenal vein sampling**\n- **NORMOKALAEMIA is now common** — most PA patients are **NOT hypokalaemic**, so normal potassium **does NOT exclude** it",
   "cutoffs": [
    "ARR collected **mid-morning**, patient **upright** (sitting/standing/walking) ≥2h then seated **5–15 min**",
    "Elevated ARR threshold is **assay-dependent** (e.g. ~70 with aldosterone immunoassay to direct renin concentration) — interpret per local lab",
    "**Cease MRA** (spironolactone/eplerenone) **~4–6 weeks before ARR**; correct hypokalaemia first",
    "Confirmatory: **saline infusion test** (post-infusion aldosterone fails to suppress) OR **fludrocortisone suppression test**",
    "Subtyping: **adrenal CT + adrenal vein sampling (AVS)** to lateralise adenoma vs bilateral hyperplasia"
   ],
   "discriminator": "- **Unilateral aldosterone-producing adenoma** → surgically curable by adrenalectomy after **AVS lateralises**\n- **Bilateral adrenal hyperplasia** → medical Rx with MRA\n- PA vs essential HTN: PA has **suppressed renin** and inappropriately high aldosterone\n- Distinguish from **secondary hyperaldosteronism** (renal artery stenosis, diuretics, heart failure): renin is **HIGH**",
   "redFlags": "- **Resistant hypertension** on ≥3 agents\n- Spontaneous or diuretic-induced **hypokalaemia**\n- HTN with **adrenal incidentaloma**\n- **Young-onset HTN** or early CVA\n  - All should prompt **PA screening**",
   "mcqTrap": "- '**Normal serum potassium excludes primary aldosteronism.**' WRONG\n  - The **majority of PA patients are NORMOKALAEMIC**\n- Second trap: screening **while on spironolactone** (gives a false-negative because it raises renin)\n  - Must be **ceased before the ARR**",
   "viva": "- What-first: 'Screen with the **ARR** after ceasing MRAs and correcting K+, then a **confirmatory suppression test**, then **CT + AVS** before deciding surgery'\n- Examiner probes which drugs to stop and that **normokalaemia doesn't exclude PA**",
   "mnemonic": "Conn's = high Aldo, LOW renin = high ARR. 'Stop the SPIRO before you screen.' Confirm → CT → AVS → cut (adrenalectomy if unilateral).",
   "source": "AACB Aldosterone Renin Ratio sample processing & reporting guideline (endorsed, 2024); Endocrine Society of Australia; Endocrine Society (US) Primary Aldosteronism guideline.",
   "tags": [
    "primary aldosteronism",
    "Conn's",
    "ARR",
    "spironolactone cease",
    "normokalaemia myth"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th></th><th>Aldosterone</th><th>Renin</th><th>ARR</th></tr></thead><tbody><tr><td>Primary (Conn's)</td><td>High</td><td>Suppressed</td><td>High</td></tr><tr><td>Secondary hyperaldo (RAS, diuretic)</td><td>High</td><td>High</td><td>Normal/low</td></tr><tr><td>Essential HTN</td><td>Normal</td><td>Normal</td><td>Normal</td></tr></tbody></table>",
   "title": "Conn's syndrome / primary aldosteronism",
   "subtitle": "screen with ARR; stop the interfering drugs",
   "id": "endocrine-19",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/2/22/CT_of_adrenal_adenoma.jpg",
     "caption": "Conn's syndrome - adrenal adenoma on CT (unilateral adrenal mass)",
     "alt": "Axial CT abdomen showing a small low-density unilateral adrenal adenoma (aldosteronoma) in primary hyperaldosteronism",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Cushing's syndrome — screening test choice and the steroid-history trap",
   "subarea": "Adrenal & pituitary",
   "trap": "- **STEP 1 before any biochemistry**: exclude **EXOGENOUS glucocorticoid** (the commonest cause)\n  - Ask about oral/inhaled/topical/intra-articular steroids\n  - In exogenous: **ACTH and endogenous cortisol are SUPPRESSED**\n- Then screen for endogenous Cushing's with **ONE of three first-line tests**:\n  - (1) **1 mg overnight dexamethasone suppression test**\n  - (2) **Late-night salivary cortisol** (x2)\n  - (3) **24h urinary free cortisol** (x2)\n- Need **at least TWO abnormal** first-line tests before confirming\n- Only AFTER confirming hypercortisolism → measure **ACTH** to determine:\n  - **ACTH-dependent** (pituitary 'Cushing's disease' or ectopic) vs **ACTH-independent** (adrenal)\n- **High-dose dex suppression** and **inferior petrosal sinus sampling** localise pituitary vs ectopic\n- 'Cushing's disease' specifically = **pituitary ACTH-secreting adenoma**",
   "cutoffs": [
    "**1 mg overnight dexamethasone** (2300–2400h) → 0800–0900h serum cortisol: FAILS to suppress if **>50 nmol/L** (1.8 microgram/dL) = positive screen",
    "**24h urinary free cortisol**: **>3x upper limit of normal** = abnormal (collect x2)",
    "**Late-night salivary cortisol**: elevated x2 (loss of normal nadir)",
    "**ACTH measured AFTER confirming hypercortisolism**: suppressed = adrenal cause; normal/high = pituitary or ectopic",
    "Confirm with **at least two abnormal first-line tests** before diagnosis"
   ],
   "discriminator": "- **Cushing's syndrome** (any cause of cortisol excess) vs **Cushing's DISEASE** (pituitary ACTH adenoma specifically)\n- **Pseudo-Cushing's** (obesity, depression, alcohol, poorly controlled diabetes) can give false-positives\n  - Late-night salivary cortisol and clinical features help: **proximal myopathy**, **purple striae >1 cm**, **easy bruising**, supraclavicular fat\n- Exogenous steroid use = **suppressed ACTH + suppressed cortisol** on assay",
   "redFlags": "- Rapid onset, **severe hypokalaemic metabolic alkalosis**, marked pigmentation, **very high ACTH** and weight loss\n  - Suggests **ECTOPIC ACTH** (e.g. small cell lung cancer)\n  - **Investigate for malignancy urgently**",
   "mcqTrap": "- '**Measure a random serum cortisol**' or '**Measure ACTH first.**' WRONG\n  - Random cortisol is **uninterpretable** (diurnal)\n  - **ACTH is only useful AFTER** hypercortisolism is biochemically confirmed\n  - First step = a **screening test** (overnight dex suppression / late-night salivary / 24h UFC)\n  - **Exogenous steroids must be excluded first**",
   "viva": "- What-first: '**Exclude exogenous steroids** by history, then a screening test — I'd use the **1 mg overnight dexamethasone suppression test**'\n- Examiner probes the **syndrome-vs-disease distinction** and the logic of measuring **ACTH only after confirming cortisol excess**",
   "mnemonic": "Screen with 'DUS' — Dexamethasone (1 mg overnight), Urinary free cortisol (24h), Salivary (late-night). ACTH comes AFTER, never first.",
   "source": "Endocrine Society Clinical Practice Guideline (Diagnosis of Cushing's Syndrome, JCEM 2008) — adopted in Australian practice; Endocrine Society of Australia. Overnight dex cut-off <50 nmol/L (1.8 microgram/dL).",
   "tags": [
    "Cushing's",
    "dexamethasone suppression",
    "screening sequence",
    "ACTH after confirm"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">0. Exclude EXOGENOUS steroids (Hx)</div><div class=\"gv-step\">1. Screen: 1 mg ON dex OR late-night salivary OR 24h UFC (x2)</div><div class=\"gv-step\">2. Confirm with 2 abnormal tests</div><div class=\"gv-step\">3. THEN measure ACTH</div><div class=\"gv-step\">ACTH suppressed = adrenal | ACTH normal/high = pituitary (Cushing's disease) or ectopic</div></div>",
   "title": "Cushing's syndrome",
   "subtitle": "screening test choice and the steroid-history trap",
   "id": "endocrine-20",
   "images": [
    {
     "src": "assets/img/endocrine_cushingoid_habitus_striae_01.jpg",
     "caption": "Cushing's syndrome - central obesity, moon face, buffalo hump and wide purple striae",
     "alt": "Cushingoid habitus: central obesity, moon facies, dorsocervical fat pad (buffalo hump) and wide violaceous abdominal striae",
     "credit": "Klausur 123, Wikimedia Commons, CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "Hypopituitarism — replace CORTISOL before THYROXINE (sequence trap)",
   "subarea": "Adrenal & pituitary",
   "trap": "- Dangerous sequence gotcha: give **GLUCOCORTICOID (hydrocortisone) BEFORE levothyroxine**\n  - Starting thyroxine first in someone with **unrecognised secondary adrenal insufficiency** increases metabolic rate and cortisol clearance\n  - Can **PRECIPITATE AN ADRENAL CRISIS**\n  - Assess and **cover cortisol first**, then start thyroxine\n- Diagnostic pearl: in **SECONDARY (pituitary) hypothyroidism** you **CANNOT use TSH** to monitor/diagnose\n  - TSH is **low or inappropriately normal**\n  - Must use **FREE T4** (TSH-based titration is wrong here)\n- Causes: **pituitary adenoma/surgery/radiotherapy**, apoplexy, **Sheehan's syndrome** (post-partum haemorrhage → pituitary infarction; classically **failure to lactate + amenorrhoea**), trauma, infiltrative disease\n- Hormone loss order often classically: **GH and gonadotrophins early**, then TSH and ACTH",
   "cutoffs": [
    "Replacement ORDER: **glucocorticoid** (hydrocortisone **~15–25 mg/day** in divided doses) **BEFORE levothyroxine**",
    "Secondary hypothyroidism: monitor with **FREE T4**, NOT TSH (TSH is low/inappropriately normal)",
    "**Stress/sick-day rule**: double dose during intercurrent illness; **parenteral if vomiting**",
    "**Sheehan's**: post-partum failure to lactate + amenorrhoea + fatigue = pituitary infarction",
    "Assess **ACTH reserve** (Synacthen/insulin tolerance test) + **pituitary MRI**"
   ],
   "discriminator": "- **Secondary (pituitary/central)** vs primary endocrine failure:\n  - Secondary hypothyroidism: **TSH is LOW** (vs high in primary)\n  - Secondary adrenal insufficiency: **ACTH is LOW**, **NO hyperpigmentation**, **NO hyperkalaemia** (aldosterone preserved)\n- **Sheehan's** vs lymphocytic hypophysitis (both post-partum)\n  - Imaging and timing distinguish",
   "redFlags": "- **Hypotension, hyponatraemia, hypoglycaemia** in a patient with known pituitary disease\n  - Treat as **adrenal crisis** (hydrocortisone first)\n- **Visual field loss** or sudden headache = **mass effect/apoplexy** needing urgent MRI",
   "mcqTrap": "- '**Commence levothyroxine first** to treat the hypothyroidism.' WRONG\n  - In panhypopituitarism, starting thyroxine before glucocorticoid can **precipitate an adrenal crisis**\n  - **Cortisol replacement must come first**\n- Second trap: using **TSH to titrate thyroxine** in central hypothyroidism\n  - Must use **free T4**",
   "viva": "- What-first: '**Cover glucocorticoid before thyroxine**, and in central hypothyroidism titrate to **free T4 not TSH**'\n- Examiner probes the **crisis mechanism** and the secondary-vs-primary biochemistry (low TSH, no hyperkalaemia)",
   "mnemonic": "'Steroids before thyroxine — or you trigger a crisis.' Central hypothyroid = 'free T4, not TSH'. Sheehan's = 'no milk, no menses' post-PPH.",
   "source": "Therapeutic Guidelines (eTG, current) — Endocrinology, Hypopituitarism; Endocrine Society of Australia; Endocrine Society Hypopituitarism guidance (steroids before thyroid hormone).",
   "tags": [
    "hypopituitarism",
    "cortisol before thyroxine",
    "central hypothyroidism",
    "Sheehan's",
    "free T4 not TSH"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">1. Assess/cover GLUCOCORTICOID first (hydrocortisone)</div><div class=\"gv-step\">2. THEN start levothyroxine</div><div class=\"gv-step\">3. Monitor central hypothyroid with FREE T4 (not TSH)</div><div class=\"gv-step\">4. Replace sex steroids/GH as indicated; sick-day rule on steroids</div></div>",
   "title": "Hypopituitarism",
   "subtitle": "replace CORTISOL before THYROXINE (sequence trap)",
   "id": "endocrine-21",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Acromegaly_pituitary_macroadenoma.JPEG",
     "caption": "Pituitary macroadenoma - MRI coronal showing suprasellar extension and optic chiasm compression",
     "alt": "Coronal T1 MRI with gadolinium: large pituitary macroadenoma with suprasellar extension, compressing the optic chiasm (bitemporal hemianopia substrate)",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Visual_field_bitemporal_hemianopia.png/960px-Visual_field_bitemporal_hemianopia.png",
     "caption": "Bitemporal hemianopia - visual field defect diagram in hypopituitarism",
     "alt": "Visual field chart showing bitemporal hemianopia from optic chiasm compression by a pituitary adenoma",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Phaeochromocytoma — ALPHA-blockade BEFORE beta (never beta first)",
   "subarea": "Adrenal & pituitary",
   "trap": "- Classic 'first drug' trap: start **ALPHA-BLOCKADE FIRST**\n  - Phenoxybenzamine (non-competitive irreversible alpha-blocker) or a competitive alpha-1 agent such as **prazosin/doxazosin** (increasingly preferred due to phenoxybenzamine cost/availability)\n  - Typically **10–14 days pre-operatively**\n  - With liberal **salt and fluid** to re-expand the contracted plasma volume\n- Only AFTER adequate alpha-blockade (usually **2–3 days before surgery**) add a **beta-blocker** to control reflex tachycardia\n- Giving a **BETA-BLOCKER FIRST** is dangerous:\n  - Removes beta-2-mediated vasodilatation → **UNOPPOSED ALPHA vasoconstriction** → **severe hypertensive crisis**\n- Biochemical diagnosis = **plasma free metanephrines** or **24h urinary fractionated metanephrines** (most sensitive)\n- Then localise with **CT/MRI**; functional imaging with **68Ga-DOTATATE PET or MIBG** for metastatic/extra-adrenal\n- Surgery is definitive (**laparoscopic adrenalectomy**)\n- Avoid drugs that trigger catecholamine release: **metoclopramide**, unopposed beta-blockers, **glucagon**",
   "cutoffs": [
    "**Alpha-block ~10–14 days pre-op**; goal seated BP **<130/80**, standing systolic **>90**, controlled paroxysms",
    "**Phenoxybenzamine** start ~10 mg BD, titrate; OR **prazosin/doxazosin** (competitive alpha-1)",
    "**Beta-blocker added only AFTER alpha-blockade established**, usually last **2–3 days pre-op**",
    "Diagnosis: **plasma free metanephrines/normetanephrines** or **24h urinary fractionated metanephrines** (high sensitivity)",
    "**Rule of 10s** (classic teaching, less rigid now): ~10% bilateral, ~10% extra-adrenal (paraganglioma), ~10% malignant, **up to ~30–40% hereditary** (MEN2, VHL, NF1, SDH)"
   ],
   "discriminator": "- Episodic **headache + palpitations + sweating + paroxysmal/labile hypertension** = the triad\n- Distinguish from **essential HTN** (sustained, no paroxysms, **normal metanephrines**)\n- Distinguish from **anxiety/panic** (normal metanephrines)\n- Consider **hereditary syndrome** if young, bilateral, or extra-adrenal",
   "redFlags": "- **Hypertensive crisis on induction of anaesthesia**, or after a beta-blocker given first\n  - Treat acute crisis with **IV phentolamine** (alpha-blocker) or sodium nitroprusside, **NOT a beta-blocker**\n- New **phaeo in pregnancy** = maternal/fetal emergency",
   "mcqTrap": "- '**Commence metoprolol/atenolol** to control the tachycardia and hypertension.' WRONG and dangerous\n  - Beta-blockade before alpha-blockade causes **unopposed alpha vasoconstriction** and a **hypertensive crisis**\n  - Correct first drug = an **alpha-blocker**",
   "viva": "- What-first: '**Alpha-blockade first** (phenoxybenzamine or doxazosin) plus **volume/salt loading**, beta-blocker only once alpha-blocked'\n- Examiner probes **WHY** (unopposed alpha) and the **genetics question** (offer genetic counselling / screen for **MEN2, VHL, SDH**)",
   "mnemonic": "A before B, always — 'Alpha then Beta, or the BP gets greater.' Triad = Pounding (headache), Palpitations, Perspiration + Pressure (paroxysmal HTN).",
   "source": "Therapeutic Guidelines (eTG, current) — Endocrinology, Phaeochromocytoma; Endocrine Society of Australia; Endocrine Society (US) Pheochromocytoma/Paraganglioma guideline — consistent: alpha-blockade ~10–14 days pre-op before beta.",
   "tags": [
    "phaeochromocytoma",
    "alpha before beta",
    "phenoxybenzamine",
    "first-drug",
    "hypertensive crisis"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">1. Confirm: plasma/urine metanephrines</div><div class=\"gv-step\">2. Localise: CT/MRI (+/- DOTATATE/MIBG)</div><div class=\"gv-step\">3. ALPHA-block ~10–14 days (phenoxybenzamine or doxazosin) + salt/fluid load</div><div class=\"gv-step\">4. THEN add beta-blocker (last 2–3 days)</div><div class=\"gv-step\">5. Surgery: laparoscopic adrenalectomy</div></div>",
   "title": "Phaeochromocytoma",
   "subtitle": "ALPHA-blockade BEFORE beta (never beta first)",
   "id": "endocrine-22",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Pheochromocytoma.jpg",
     "caption": "Phaeochromocytoma - CT adrenal showing large enhancing adrenal mass",
     "alt": "Axial CT abdomen with contrast showing a large heterogeneous enhancing right adrenal mass (phaeochromocytoma) with central necrosis",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/9/90/Pheochromocytoma_Scan.jpg",
     "caption": "MIBG scan - phaeochromocytoma functional imaging",
     "alt": "I-123 MIBG scintigraphy showing intense focal uptake in a right adrenal phaeochromocytoma confirming catecholamine-secreting tumour",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Pituitary apoplexy — hydrocortisone FIRST, then urgent MRI (endocrine + neurosurgical emergency)",
   "subarea": "Adrenal & pituitary",
   "trap": "- Acute haemorrhage/infarction of the pituitary (often into a pre-existing adenoma) = **endocrine EMERGENCY**\n- The gotcha: give **IV HYDROCORTISONE IMMEDIATELY** (empirically, before biochemical confirmation)\n  - Acute **secondary adrenal insufficiency** is the life threat\n  - **Do NOT wait** for the cortisol result\n- Then arrange **URGENT MRI** (CT often misses it; MRI confirms in **>90%**)\n- Presentation = **sudden thunderclap headache** + **visual disturbance** (acuity loss, bitemporal field defect) + **ophthalmoplegia** (cranial nerves III/IV/VI in the cavernous sinus) +/- reduced consciousness\n  - Mimics **subarachnoid haemorrhage and meningitis**\n- Manage **fluids/electrolytes** (watch for **DI/SIADH**); involve **neurosurgery and ophthalmology**\n- **Surgery** (transsphenoidal decompression) indicated for **deteriorating vision/consciousness**\n  - Many stable cases managed **conservatively** with steroids\n- **Sheehan's** = the **post-partum infarction** variant",
   "cutoffs": [
    "**Hydrocortisone STAT: 100 mg IV/IM bolus** then **50 mg IV/IM q6h** (= **200 mg/24h**, or 200 mg/24h infusion) — give **before confirmation**",
    "**Urgent MRI pituitary** = investigation of choice (confirms **>90%**; CT may be normal)",
    "**Surgery** (transsphenoidal): **deteriorating visual acuity/fields or reduced GCS**",
    "**Conservative** (steroids + monitoring) reasonable if **neuro-ophthalmically stable**",
    "Watch sodium: secondary adrenal insufficiency, **SIADH or cranial DI** can develop"
   ],
   "discriminator": "- Pituitary apoplexy vs **subarachnoid haemorrhage** vs **bacterial meningitis** (all = sudden headache +/- reduced GCS)\n  - Apoplexy has **ophthalmoplegia + visual field loss** + a **pituitary mass on MRI** and **endocrine deficits**\n- Distinguish from **migraine** (no neuro-ophthalmic signs, normal imaging)",
   "redFlags": "- **Deteriorating visual acuity** or new ophthalmoplegia\n- **Declining GCS**\n- **Hypotension/hyponatraemia** (adrenal crisis)\n  - Escalate to **neurosurgery + endocrine + ophthalmology** urgently",
   "mcqTrap": "- '**Arrange urgent MRI / do a lumbar puncture and await results before any treatment.**' WRONG\n  - Give **IV hydrocortisone empirically first** (acute cortisol deficiency is the killer), THEN image\n- Also wrong: treating as **SAH and missing the steroid cover**\n- Also wrong: giving **thyroxine before steroids** in the recovery phase",
   "viva": "- What-first: '**IV hydrocortisone immediately** for presumed acute adrenal insufficiency, then **urgent MRI**, with **neurosurgery/ophthalmology and endocrine** involved'\n- Examiner probes the **SAH/meningitis mimic** and the **steroids-before-imaging** priority",
   "mnemonic": "Apoplexy ABC: 'Adrenal cover (hydrocortisone) first, Brain MRI urgent, Cut (surgery) if vision/GCS falls.' Mimic = thinks-SAH-but-has-ophthalmoplegia.",
   "source": "Society for Endocrinology Endocrine Emergency Guidance: Pituitary apoplexy (used in Australia); eTG (current); Endocrine Society of Australia — hydrocortisone 100 mg then 50 mg q6h, urgent MRI.",
   "tags": [
    "pituitary apoplexy",
    "hydrocortisone first",
    "urgent MRI",
    "ophthalmoplegia",
    "SAH mimic"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">1. IV HYDROCORTISONE 100 mg STAT (don't wait for cortisol)</div><div class=\"gv-step\">2. URGENT MRI pituitary (CT may miss it)</div><div class=\"gv-step\">3. Fluids/electrolytes — watch DI/SIADH</div><div class=\"gv-step\">4. Neurosurgery + ophthalmology</div><div class=\"gv-step\">5. Surgery if vision/GCS deteriorate; else conservative</div></div>",
   "title": "Pituitary apoplexy",
   "subtitle": "hydrocortisone FIRST, then urgent MRI (endocrine + neurosurgical emergency)",
   "id": "endocrine-23",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Pituitary_apoplexy.jpg/960px-Pituitary_apoplexy.jpg",
     "caption": "Pituitary apoplexy - MRI showing haemorrhage into pituitary adenoma",
     "alt": "Sagittal T1 MRI showing hyperintense signal (haemorrhage) within an enlarged pituitary gland (haemorrhagic infarction of a macroadenoma) with suprasellar extension",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Prolactinoma — exclude the mimics, then dopamine agonist FIRST (not surgery)",
   "subarea": "Adrenal & pituitary",
   "trap": "- First-line treatment for prolactinoma is a **dopamine agonist** — even for large macroadenomas with visual field defects\n  - **Cabergoline** preferred over bromocriptine (more effective at normalising prolactin and shrinking tumour, better tolerated, twice-weekly)\n- Surgery is **NOT first-line** even for big tumours, because dopamine agonists shrink them\n- Before diagnosing prolactinoma, **exclude common causes** of raised prolactin:\n  - **Pregnancy** (beta-hCG)\n  - **Hypothyroidism** (TRH stimulates prolactin — check TSH)\n  - **Medications** (antipsychotics, metoclopramide, antidepressants, oestrogens)\n  - **Renal failure**\n  - **Chest wall stimulation**\n- Beware the **HOOK EFFECT**: in a very large prolactinoma, assay saturation can give a FALSELY LOW prolactin\n  - Request **serial dilution** if a macroadenoma has only mildly raised prolactin\n- Non-functioning pituitary macroadenoma compressing the stalk causes mild prolactin elevation (**'stalk effect'**, usually <2000–5000 mIU/L)\n  - Distinguish from a true prolactinoma (often **>5000 mIU/L** and rising with tumour size)",
   "cutoffs": [
    "**Cabergoline** = first-line dopamine agonist (preferred over bromocriptine); twice-weekly dosing",
    "Always exclude: **pregnancy** (beta-hCG), hypothyroidism (TSH), drugs (antipsychotics/metoclopramide), renal failure",
    "Stalk-effect / non-functioning adenoma: prolactin usually mildly raised (commonly **<2000 mIU/L**, up to ~5000)",
    "Macroprolactinoma: prolactin often markedly raised (frequently **>5000 mIU/L**); level roughly tracks tumour size",
    "**Hook effect**: very high prolactin saturates assay → falsely low result; request serial dilution in large tumours"
   ],
   "discriminator": "- **True prolactinoma**: very high prolactin, dopamine-agonist-responsive shrinkage\n- **Non-functioning pituitary macroadenoma** causing stalk compression: mildly raised prolactin, won't shrink with dopamine agonist\n- **Macroprolactinaemia**: big inactive prolactin complexes give high lab prolactin but **no symptoms**",
   "redFlags": "- **Bitemporal hemianopia** = optic chiasm compression\n- **New severe headache** or sudden visual loss/ophthalmoplegia = suggests apoplexy\n  - Urgent MRI and endocrine/neurosurgical referral\n- **Galactorrhoea + amenorrhoea + visual field defect** = classic triad",
   "mcqTrap": "- Most tempting wrong answer: **'Refer for transsphenoidal surgery'** as first-line for the macroadenoma with visual field loss\n  - WRONG — dopamine agonists (cabergoline) shrink prolactinomas and are first-line even for macroadenomas\n  - Surgery reserved for **dopamine-agonist resistance/intolerance**, apoplexy, or progressive visual loss despite medical therapy\n- Also: forgetting to **exclude pregnancy/hypothyroidism/drugs** before calling it a prolactinoma",
   "viva": "- What-first: 'Exclude **pregnancy**, hypothyroidism and drug causes, confirm with prolactin and MRI, then start **cabergoline** — surgery only if resistant/intolerant or apoplexy'\n- Examiner probes the **hook effect** and prolactinoma-vs-stalk-effect distinction",
   "mnemonic": "'CAB before the knife' — Cabergoline first, surgery second. Causes of high PRL = 'Preg, Pills, Pituitary, hypoThyroid, Plumbing (renal)'.",
   "source": "Endocrine Society Clinical Practice Guideline (Diagnosis & Treatment of Hyperprolactinaemia, JCEM 2011) — used in Australia; Endocrine Society of Australia; eTG (current). Cabergoline first-line including macroadenomas.",
   "tags": [
    "prolactinoma",
    "cabergoline",
    "dopamine agonist first",
    "hook effect",
    "stalk effect"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Exclude: pregnancy</span><span class=\"gv-pill\">Exclude: hypothyroid (TSH)</span><span class=\"gv-pill\">Exclude: drugs (antipsychotics/metoclopramide)</span><span class=\"gv-pill\">Exclude: renal failure</span><span class=\"gv-pill\">1st-line: CABERGOLINE</span><span class=\"gv-pill\">Surgery only if resistant/apoplexy</span></div>",
   "title": "Prolactinoma",
   "subtitle": "exclude the mimics, then dopamine agonist FIRST (not surgery)",
   "id": "endocrine-24",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Adenome_hypophyse_esp.jpg/960px-Adenome_hypophyse_esp.jpg",
     "caption": "Prolactinoma - MRI pituitary microadenoma (hypointense focus on gadolinium-enhanced coronal)",
     "alt": "Coronal T1 MRI with gadolinium showing a small hypointense focus in the pituitary gland (microadenoma, prolactinoma) with pituitary stalk deviation",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Acromegaly_pituitary_macroadenoma.JPEG",
     "caption": "Prolactinoma - MRI pituitary macroadenoma with suprasellar extension",
     "alt": "Coronal T1 gadolinium-enhanced MRI showing a large prolactinoma macroadenoma with suprasellar extension compressing the optic chiasm",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "SIADH vs Diabetes Insipidus (AVP-D/AVP-R) — opposite ends of the ADH axis",
   "subarea": "Adrenal & pituitary",
   "trap": "- SIADH and DI are **mirror images** and the easy MCQ confusion\n- **SIADH** = too much ADH → water RETENTION → euvolaemic hyponatraemia\n  - **Concentrated urine** (high urine osmolality) despite low plasma osmolality\n  - Low serum urate, urine Na >30 mmol/L\n  - Diagnosis of **EXCLUSION** (normal thyroid, normal cortisol/adrenal axis, no diuretics, euvolaemia)\n- **Diabetes insipidus** (cranial DI = AVP-D; nephrogenic DI = AVP-R) = too little/ineffective ADH → water LOSS\n  - Polyuria, dilute urine (low urine osm), **HYPERNATRAEMIA**/high plasma osmolality if water not accessible\n- **CORRECTION-RATE GOTCHA** for SIADH: chronic hyponatraemia must be corrected SLOWLY\n  - Exceeding the limit risks **osmotic demyelination syndrome** (central pontine myelinolysis)\n- **Fluid restriction** is first-line for chronic SIADH\n- **Hypertonic 3% saline** only for severe symptomatic (seizures/coma) hyponatraemia",
   "cutoffs": [
    "SIADH: serum Na **<135** (often <130), plasma osmolality **<275 mOsm/kg**, urine osmolality **>100** (typically >300), urine Na >30 mmol/L, euvolaemic, low urate",
    "Na correction limit: NOT more than **8–10 mmol/L in 24h** (≤8 in high-risk) to avoid osmotic demyelination",
    "Severe symptomatic hyponatraemia (seizures, coma): **3% hypertonic saline 100–150 mL bolus**, aim ~4–6 mmol/L rise to abort symptoms",
    "DI/AVP-D vs AVP-R: water deprivation test then **desmopressin** — urine concentrates after dDAVP in AVP-D (cranial), does NOT in AVP-R (nephrogenic); copeptin assay increasingly used",
    "AVP-D treatment: **desmopressin (dDAVP)**, titrated carefully to avoid hyponatraemia"
   ],
   "discriminator": "- **SIADH**: LOW Na, concentrated urine, euvolaemic\n- **DI**: HIGH/high-normal Na, dilute urine, polyuria/polydipsia\n- **Water deprivation + dDAVP** separates cranial (AVP-D, responds to dDAVP) from nephrogenic (AVP-R, no response)\n- Always exclude **hypothyroidism and hypocortisolism** before diagnosing SIADH (both cause hyponatraemia and mimic it)",
   "redFlags": "- **Acute symptomatic hyponatraemia** (Na <120 with seizures/reduced GCS) = give 3% saline, do not just fluid-restrict\n- In DI, a **confused/unconscious patient** who cannot access water can rapidly become dangerously **hypernatraemic**",
   "mcqTrap": "- Most tempting wrong answer in SIADH: **'Give 0.9% (or 3%) saline as initial therapy'** for asymptomatic chronic hyponatraemia\n  - WRONG — fluid restriction is first-line\n  - Giving saline in SIADH can **paradoxically WORSEN hyponatraemia** (high urine osmolality excretes the salt and retains the water)\n  - **Over-rapid correction** causes osmotic demyelination\n- Hypertonic saline reserved for **severe symptomatic** cases only",
   "viva": "- What-first: 'Assess **volume status** and exclude hypothyroidism/adrenal insufficiency, then for euvolaemic hyponatraemia diagnose SIADH and **fluid-restrict**, watching the correction rate'\n- Examiner probes the **osmotic demyelination correction limit** and the SIADH-vs-DI biochemistry",
   "mnemonic": "SIADH = Sodium Is Always Down Here (low Na, concentrated urine). DI = Dilute & Increased output. 'Correct slow or the pons will go.'",
   "source": "Therapeutic Guidelines (eTG, current) — Fluids/electrolytes & Endocrinology; international hyponatraemia guidance (correction ≤8–10 mmol/L/24h, ≤8 high-risk); AVP-D/AVP-R nomenclature (2022 international consensus).",
   "tags": [
    "SIADH",
    "diabetes insipidus",
    "AVP-D",
    "AVP-R",
    "hyponatraemia",
    "osmotic demyelination"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Feature</th><th>SIADH</th><th>Diabetes insipidus (AVP-D/AVP-R)</th></tr></thead><tbody><tr><td>ADH effect</td><td>Excess</td><td>Deficient/ineffective</td></tr><tr><td>Serum Na</td><td>Low</td><td>High / high-normal</td></tr><tr><td>Plasma osm</td><td>Low (&lt;275)</td><td>High</td></tr><tr><td>Urine osm</td><td>High (&gt;100, conc.)</td><td>Low (dilute)</td></tr><tr><td>Volume</td><td>Euvolaemic</td><td>Volume-depleted if no water</td></tr><tr><td>Treat</td><td>Fluid restrict (3% saline if severe)</td><td>dDAVP (cranial); treat cause (nephrogenic)</td></tr></tbody></table>",
   "title": "SIADH vs Diabetes Insipidus (AVP-D/AVP-R)",
   "subtitle": "opposite ends of the ADH axis",
   "id": "endocrine-25"
  },
  {
   "topic": "Hypercalcaemia — malignancy vs primary hyperparathyroidism (the PTH discriminator) + crisis fluids-first sequence",
   "subarea": "Calcium, bone & metabolic",
   "trap": "- Two big traps:\n- (1) Most tempting WRONG MCQ answer in acute hypercalcaemic crisis: **'IV bisphosphonate (zoledronic acid) first'** or 'IV frusemide first'\n  - **WHAT-FIRST is aggressive IV 0.9% saline rehydration** (patients are profoundly volume-deplete)\n  - Bisphosphonate is given AFTER/with rehydration and takes **2–4 days to work** — never the immediate single corrective step\n  - **Frusemide is NOT routine** — only once euvolaemic and if fluid-overloaded\n- (2) Discriminator trap: do NOT order a malignancy work-up first — **ALWAYS measure PTH**\n- The number to act on is the **CORRECTED calcium**: mild <3.0, moderate 3.0–3.5, severe/crisis >3.5 mmol/L = emergency",
   "discriminator": "- **PTH** is THE discriminator\n- Inappropriately **HIGH/normal PTH** with high calcium = **primary hyperparathyroidism** (PTH-driven, ~90% community cause, usually chronic, mild, asymptomatic incidental, low-normal phosphate)\n- **SUPPRESSED/low PTH** with high calcium = NON-PTH cause = **malignancy until proven otherwise**\n  - PTHrP from squamous/breast/renal, or osteolytic myeloma/breast bone mets, or 1,25-OH-vit-D in lymphoma/granuloma\n- Malignancy = acute, symptomatic, higher Ca, weight loss\n- PHPT = chronic **'stones, bones, abdominal groans, psychic moans'**\n- If PTH high AND urine calcium low → think **FHH** (24h urine Ca:creatinine clearance ratio <0.01)",
   "whatFirst": "- **1) Confirm CORRECTED calcium + send PTH simultaneously**\n- **2) IV 0.9% saline rehydration** (e.g. 3–6 L/24h, titrated to volume status/renal/cardiac) — the immediate life-saving step\n- **3) Once rehydrated**: IV bisphosphonate (**zoledronic acid 4 mg IV** over ≥15 min, renally dosed) for malignancy/severe\n- **4) Calcitonin** for rapid (but transient, tachyphylaxis) lowering in crisis while bisphosphonate takes effect\n- **5) Treat the cause**\n- **Denosumab** if bisphosphonate-refractory or in renal failure",
   "redFlags": "- Corrected Ca **>3.5 mmol/L**, reduced GCS/confusion/coma\n- **ECG short QT** or arrhythmia\n- **AKI**, severe dehydration, malignancy with bony pain\n  - Admit, ECG monitor, IV fluids, senior/endocrine + treat as emergency\n- Acute symptomatic crisis is more typical of **malignancy** than PHPT",
   "source": "Therapeutic Guidelines (eTG, current) — Endocrinology, hypercalcaemia; Endocrine Society of Australia. Severity bands: mild <3.0, moderate 3.0-3.5, severe >3.5 mmol/L corrected.",
   "mnemonic": "'Fluids FIRST, drugs AFTER' for the crisis; 'PTH splits the table' for the cause (high PTH = parathyroid; low PTH = look for malignancy).",
   "mcqTrap": "- Distractor **'commence IV zoledronic acid'** as the immediate step in a hypotensive/dehydrated crisis patient\n  - Wrong because **rehydration must come first** and bisphosphonate effect is delayed 2–4 days\n- Distractor **'IV frusemide'** as routine — wrong, only after euvolaemia",
   "viva": "- Examiner probes: **'What's your FIRST action?'** (answer: IV saline, not the drug)\n- Then **'one blood test that tells you the cause?'** (PTH)\n- **ISBAR escalate** severe Ca with ECG + GCS\n- Show you'd **correct for albumin** before acting",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Feature</th><th>Primary hyperparathyroidism</th><th>Malignancy</th></tr></thead><tbody><tr><td>PTH</td><td>High / inappropriately normal</td><td>Suppressed / low</td></tr><tr><td>Onset</td><td>Chronic, often incidental</td><td>Acute, symptomatic</td></tr><tr><td>Ca level</td><td>Usually mild (&lt;3.0)</td><td>Often &gt;3.0-3.5</td></tr><tr><td>Phosphate</td><td>Low-normal</td><td>Variable (high if PTHrP)</td></tr><tr><td>Clues</td><td>Stones/bones/groans/moans</td><td>Weight loss, bone pain, known Ca</td></tr></tbody></table><div class=\"gv-flow\"><div class=\"gv-step\">1. Corrected Ca + PTH</div><div class=\"gv-step\">2. IV 0.9% saline (rehydrate FIRST)</div><div class=\"gv-step\">3. Zoledronic acid 4mg IV once euvolaemic</div><div class=\"gv-step\">4. ± Calcitonin (rapid bridge) / treat cause</div></div>",
   "tags": [
    "hypercalcaemia",
    "PTH",
    "malignancy",
    "hyperparathyroidism",
    "zoledronic acid",
    "crisis",
    "emergency"
   ],
   "cutoffs": [
    "Corrected Ca: mild **<3.0**, moderate **3.0–3.5**, severe/crisis **>3.5 mmol/L**",
    "Corrected Ca = measured Ca + **0.02 x (40 − albumin g/L)**",
    "**Zoledronic acid 4 mg IV** over ≥15 min (hypercalcaemia dose)",
    "Saline **~3–6 L/24h** titrated",
    "FHH: urine Ca:Cr clearance ratio **<0.01**"
   ],
   "verified": true,
   "title": "Hypercalcaemia",
   "subtitle": "malignancy vs primary hyperparathyroidism (the PTH discriminator) + crisis fluids-first sequence",
   "id": "endocrine-26",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/E281_%28CardioNetworks_ECGpedia%29.jpg/960px-E281_%28CardioNetworks_ECGpedia%29.jpg",
     "caption": "Hypercalcaemia - ECG changes (short QT interval)",
     "alt": "Short QT interval and J-point changes characteristic of hypercalcaemia",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Hyperparathyroidism_Brown_Tumors_of_Hands.jpg/960px-Hyperparathyroidism_Brown_Tumors_of_Hands.jpg",
     "caption": "Primary hyperparathyroidism - subperiosteal bone resorption on X-ray",
     "alt": "Radial aspect of middle phalanges showing classic subperiosteal bone resorption in hyperparathyroidism",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Hypocalcaemia — the post-thyroidectomy/parathyroidectomy crisis, Mg trap, and IV calcium gluconate",
   "subarea": "Calcium, bone & metabolic",
   "trap": "- Trap 1: forgetting to **CORRECT for albumin** — a low total Ca with low albumin may have normal ionised Ca; do not treat pseudo-hypocalcaemia\n- Trap 2 (classic exam catch): **refractory hypocalcaemia** that won't correct despite calcium replacement\n  - Missed cause: **HYPOMAGNESAEMIA** (low Mg impairs PTH secretion AND action)\n  - Must replace **magnesium** or calcium correction fails\n- Trap 3: most tempting WRONG drug in acute symptomatic tetany: **'oral calcium + calcitriol'**\n  - For acute tetany/seizure/laryngospasm/long QT → need **IV calcium gluconate**, not oral",
   "discriminator": "- **Post-surgical** (thyroid/parathyroid/neck) = commonest acquired surgical cause (transient or permanent hypoPTH) — check the timeline\n- Other causes: **hypoPTH** (low PTH, high-normal phosphate), **vitamin D deficiency** (low Ca, low phosphate, high PTH = secondary hyperPTH, high ALP), **CKD**, **hypomagnesaemia**, acute pancreatitis, tumour lysis, large blood transfusion (citrate)\n- **Chvostek** (facial twitch) and **Trousseau** (carpopedal spasm with BP cuff) signs = neuromuscular irritability",
   "whatFirst": "- **Symptomatic/severe** (tetany, seizures, laryngospasm, prolonged QT, Ca <1.9 mmol/L corrected):\n  - **IV calcium gluconate 10%** (10 mL = 2.2 mmol Ca) slow IV, then infusion, on cardiac monitor\n  - ALWAYS check and replace **magnesium**\n  - Then transition to **oral calcium + active vitamin D (calcitriol)** for ongoing/hypoPTH\n- **Asymptomatic mild**: oral calcium ± vitamin D and find the cause",
   "redFlags": "- **Laryngospasm/stridor**, seizure, tetany, prolonged QT/arrhythmia\n- **Post-thyroidectomy patient** with perioral/digital paraesthesia (early sign)\n  - → IV calcium gluconate, ECG monitor, escalate\n- **Calcium chloride** is more concentrated/irritant — **gluconate preferred peripherally**",
   "source": "Therapeutic Guidelines (eTG, current) — Endocrinology, hypocalcaemia; standard Australian surgical/endocrine practice.",
   "mnemonic": "'Can't fix Ca? Check the Mg.' For signs: CATs go numb — Convulsions, Arrhythmias, Tetany, numbness/paraesthesia. Chvostek = Cheek; Trousseau = Tourniquet (BP cuff).",
   "mcqTrap": "- Distractor **'give oral calcium and recheck in 24h'** in a patient with tetany/long QT — wrong, needs **IV calcium gluconate now**\n- Distractor of giving more calcium for refractory case while **ignoring magnesium**",
   "viva": "- Examiner probes the **post-thyroidectomy patient**: 'first symptom you'd warn nursing staff to watch for?' (**perioral/finger tingling**)\n- 'Why isn't your calcium correcting?' (**check Mg**)\n- IV gluconate **dose/route + cardiac monitoring**",
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Chvostek = cheek tap twitch</span><span class=\"gv-pill\">Trousseau = cuff carpal spasm</span><span class=\"gv-pill\">Long QT</span><span class=\"gv-pill\">Always check Mg</span></div><div class=\"gv-flow\"><div class=\"gv-step\">Corrected Ca low + symptoms</div><div class=\"gv-step\">IV calcium gluconate 10% slow + monitor</div><div class=\"gv-step\">Replace magnesium</div><div class=\"gv-step\">Oral Ca + calcitriol + treat cause (PTH, vit D)</div></div>",
   "tags": [
    "hypocalcaemia",
    "thyroidectomy",
    "hypoparathyroidism",
    "magnesium",
    "calcium gluconate",
    "tetany",
    "QT"
   ],
   "cutoffs": [
    "**Calcium gluconate 10%**: 10 mL = 2.2 mmol elemental Ca",
    "Severe/symptomatic threshold often corrected Ca **<1.9 mmol/L**",
    "Corrected Ca formula: measured + **0.02 x (40 − albumin)**",
    "Check **Mg** in any refractory hypocalcaemia"
   ],
   "verified": true,
   "title": "Hypocalcaemia",
   "subtitle": "the post-thyroidectomy/parathyroidectomy crisis, Mg trap, and IV calcium gluconate",
   "id": "endocrine-27",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Trousseau%27s_Sign_of_Latent_Tetany.jpg/960px-Trousseau%27s_Sign_of_Latent_Tetany.jpg",
     "caption": "Trousseau sign - carpal spasm during BP cuff inflation (hypocalcaemia)",
     "alt": "Carpal spasm / main d'accoucheur position elicited by inflating blood pressure cuff above systolic (Trousseau sign of hypocalcaemia)",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Segno_di_Chvostek_Punti.JPG",
     "caption": "Chvostek sign - facial twitch on tapping (hypocalcaemia)",
     "alt": "Facial muscle twitch elicited by tapping over the facial nerve anterior to the ear (Chvostek sign of hypocalcaemia)",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Lipids & absolute CVD risk — treat the RISK not the number (2023 Australian calculator), statin-first trap",
   "subarea": "Calcium, bone & metabolic",
   "trap": "- Trap 1 (central exam concept): treat **ABSOLUTE 5-year CVD risk**, NOT an isolated cholesterol value\n  - Most tempting WRONG MCQ answer: **'start a statin because LDL/total cholesterol is high'** in a low-absolute-risk patient — WRONG\n  - A moderately raised lipid in a young low-risk person does **not warrant a statin**\n- Trap 2: the 2023 guideline uses the **NEW Australian CVD risk calculator** (Aus CVD Risk Calculator, 5-year risk, replaces Framingham)\n  - **High ≥10%**, Intermediate 5 to <10%, Low <5%\n- Trap 3: some patients are automatically **HIGH risk / 'clinical determinants'** and SKIP the calculator entirely\n  - Established CVD, diabetes with end-organ damage/age criteria, eGFR <45 or significant albuminuria, familial hypercholesterolaemia, **total chol >7.5**",
   "discriminator": "- **Secondary prevention** (established ASCVD — prior MI/stroke/PAD/revascularisation) = automatically high risk → **statin (high-intensity) + lifestyle** regardless of calculated number\n- **Primary prevention** = run the calculator (assess all aged **45–79**; from **35** if diabetes; **First Nations from 30**)\n- Do NOT run the calculator on people who already qualify by a **clinical determinant**\n- **FH** suspected if very high LDL ± family history of premature CVD/tendon xanthomata → treat as high risk, **cascade screen**",
   "whatFirst": "- **1) Identify clinical determinants** that bypass the calculator (established CVD, FH, diabetes-with-criteria, CKD eGFR <45/albuminuria, total chol >7.5)\n- **2) Otherwise calculate 5-year risk** with the 2023 Aus CVD Risk Calculator\n- **3) High (≥10%)**: lifestyle + BP-lowering + **lipid-lowering (statin)**\n- **4) Intermediate (5–<10%)**: lifestyle, shared decision, consider statin (reclassifying factors e.g. CAC, family history, ethnicity)\n- **5) Low (<5%)**: lifestyle, reassess\n- **Statin** is first-line lipid drug; add **ezetimibe ± PCSK9** if target not met / secondary prevention",
   "redFlags": "- Suspected **FH** (tendon xanthomata, LDL very high, premature family CVD) — refer/cascade screen\n- **Acute coronary syndrome** — high-intensity statin regardless\n- **Statin myopathy/rhabdomyolysis** (severe muscle pain + dark urine + raised CK)",
   "source": "2023 Australian guideline for assessing and managing cardiovascular disease risk (Heart Foundation; MJA 2024, Nelson et al) + Aus CVD Risk Calculator (cvdcheck.org.au).",
   "mnemonic": "'Risk first, drug second.' Bands: 'High 10, Low 5' (≥10% high, <5% low, in between intermediate — 5-year).",
   "mcqTrap": "- Distractor: **'isolated total cholesterol 6.2 in a healthy 35-year-old → start atorvastatin'** — wrong, calculate absolute risk; likely low → lifestyle\n- Also wrongly **running the calculator** on a post-MI patient (they're already high-risk)",
   "viva": "- Examiner: 'how do you decide who gets a statin?' (**absolute 5-yr risk + clinical determinants**, not the lipid number alone)\n- Probe: which patients **skip the calculator** (established CVD, diabetes-criteria, CKD, FH, chol >7.5)",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>5-year CVD risk</th><th>Category</th><th>Action</th></tr></thead><tbody><tr><td>≥10%</td><td>High</td><td>Lifestyle + BP + lipid Rx</td></tr><tr><td>5 to &lt;10%</td><td>Intermediate</td><td>Lifestyle; consider Rx / reclassifiers</td></tr><tr><td>&lt;5%</td><td>Low</td><td>Lifestyle; reassess</td></tr></tbody></table><div class=\"gv-pills\"><span class=\"gv-pill\">Bypass calculator: established CVD</span><span class=\"gv-pill\">Diabetes w/ criteria</span><span class=\"gv-pill\">eGFR <45 / albuminuria</span><span class=\"gv-pill\">FH</span><span class=\"gv-pill\">Total chol >7.5</span></div>",
   "tags": [
    "lipids",
    "CVD risk",
    "absolute risk",
    "statin",
    "primary prevention",
    "familial hypercholesterolaemia"
   ],
   "cutoffs": [
    "5-yr risk: **High ≥10%**, Intermediate 5–<10%, Low <5%",
    "Clinical determinant bypass incl. **total cholesterol >7.5 mmol/L**, eGFR <45",
    "**Statin** first-line; add ezetimibe/PCSK9 if not at target"
   ],
   "verified": true,
   "title": "Lipids & absolute CVD risk",
   "subtitle": "treat the RISK not the number (2023 Australian calculator), statin-first trap",
   "id": "endocrine-28"
  },
  {
   "topic": "Metabolic syndrome — the IDF '1 mandatory + 2 of 4' rule, Australian waist cut-offs, and the 'it's not a diagnosis to treat directly' trap",
   "subarea": "Calcium, bone & metabolic",
   "trap": "- Trap 1: the **IDF diagnostic rule** — central obesity (waist circumference) is **MANDATORY**, plus any 2 of the other 4\n  - The older NCEP ATP III is 'any 3 of 5' with no mandatory component — **examiners exploit this difference**\n- Trap 2: the cut-offs\n  - **Waist** ≥94 cm (men) / ≥80 cm (women) Europid\n  - **Fasting glucose ≥5.6 mmol/L** (NOT the diabetes threshold of 7.0)\n  - **Triglycerides ≥1.7** mmol/L\n  - **HDL <1.03** (men) / **<1.29** (women) mmol/L\n  - **BP ≥130/85** mmHg\n- Trap 3: most tempting WRONG MCQ answer — **'start metformin/a glitazone to treat the metabolic syndrome'**\n  - There is **no single drug** for the syndrome; manage each component + intensive lifestyle; **weight loss is the cornerstone**",
   "discriminator": "- **Metabolic syndrome** (insulin-resistance cluster) vs overt type 2 diabetes:\n  - Fasting glucose **5.6–6.9** = impaired fasting glucose / metabolic-syndrome range\n  - **≥7.0** (or HbA1c ≥6.5%) = **diabetes**\n- Distinguish from isolated obesity (needs the **metabolic abnormalities** too) and from familial dyslipidaemia\n- The syndrome flags **FUTURE CVD + type 2 diabetes risk** — triggers an **ABSOLUTE CVD risk assessment**, not treated as a number",
   "whatFirst": "- **1) Confirm waist circumference** (mandatory) + count the other components\n- **2) Intensive lifestyle intervention** — weight loss (~5–10%), diet, exercise — is **FIRST-LINE and cornerstone**\n- **3) Treat each component** to target (BP, lipids via absolute CVD risk, dysglycaemia)\n- **4) Screen for / prevent type 2 diabetes** (OGTT/HbA1c) and assess absolute CVD risk\n- **No single 'metabolic syndrome' drug**",
   "redFlags": "- Fasting glucose **≥7.0** / HbA1c ≥6.5% = **diabetes** (re-categorise + manage as such)\n- Very high triglycerides (e.g. **>10 mmol/L**) = **pancreatitis risk** → fibrate/urgent management\n- **NAFLD/NASH** association — consider liver assessment",
   "source": "IDF consensus (harmonised) definition (Alberti et al, Diabetic Medicine 2006); Australian application of Europid waist cut-offs; aligns with 2023 Australian CVD risk guideline for component management.",
   "mnemonic": "'WHHTG' components: Waist (mandatory), HDL low, Hypertension ≥130/85, Triglycerides ≥1.7, Glucose ≥5.6. IDF = 'waist + 2 of 4'; ATP III = 'any 3 of 5'.",
   "mcqTrap": "- Distractor: **'fasting glucose ≥7.0'** as the metabolic-syndrome cut-off — wrong, it's **≥5.6** (7.0 is diabetes)\n- Distractor: **'prescribe a single agent to treat metabolic syndrome'** — wrong, lifestyle + treat each component",
   "viva": "- Examiner: 'how do you diagnose metabolic syndrome?' (**IDF: mandatory central obesity + 2 of 4** with the cut-offs)\n- Probe: why does it matter (**CVD + diabetes risk** → do absolute CVD risk + diabetes screen) and what's the first-line management (**lifestyle/weight loss**)",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Component (IDF, Europid)</th><th>Cut-off</th></tr></thead><tbody><tr><td>Waist circumference (MANDATORY)</td><td>≥94 cm men / ≥80 cm women</td></tr><tr><td>Triglycerides</td><td>≥1.7 mmol/L</td></tr><tr><td>HDL cholesterol</td><td>&lt;1.03 men / &lt;1.29 women</td></tr><tr><td>Blood pressure</td><td>≥130/85 mmHg</td></tr><tr><td>Fasting glucose</td><td>≥5.6 mmol/L</td></tr></tbody></table><div class=\"gv-pills\"><span class=\"gv-pill\">IDF = waist + ANY 2 of 4</span><span class=\"gv-pill\">ATP III = any 3 of 5</span><span class=\"gv-pill\">Lifestyle / weight loss first-line</span></div>",
   "tags": [
    "metabolic syndrome",
    "IDF",
    "waist circumference",
    "insulin resistance",
    "CVD risk",
    "type 2 diabetes"
   ],
   "cutoffs": [
    "Waist **≥94 (M)/≥80 (F) cm** Europid — mandatory",
    "Triglycerides **≥1.7 mmol/L**",
    "HDL **<1.03 (M)/<1.29 (F) mmol/L**",
    "BP **≥130/85 mmHg**",
    "Fasting glucose **≥5.6 mmol/L** (NOT 7.0)"
   ],
   "verified": true,
   "title": "Metabolic syndrome",
   "subtitle": "the IDF '1 mandatory + 2 of 4' rule, Australian waist cut-offs, and the 'it's not a diagnosis to treat directly' trap",
   "id": "endocrine-29",
   "images": [
    {
     "src": "assets/img/endocrine_acanthosis_nigricans_axilla_01.jpg",
     "caption": "Acanthosis nigricans - insulin resistance marker in metabolic syndrome",
     "alt": "Velvety hyperpigmented skin thickening in the axilla, a cutaneous marker of insulin resistance seen in metabolic syndrome",
     "credit": "Mark F. Brady; Prashanth Rawla, CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "Osteoporosis — DXA T-score definition, who to scan, PBS treatment triggers & first-line bisphosphonate",
   "subarea": "Calcium, bone & metabolic",
   "trap": "- Trap 1: confusing **T-score and Z-score**\n  - **T-score** (vs young adult peak) defines osteoporosis: **≤ −2.5** = osteoporosis; **−1.0 to −2.5** = osteopenia (low bone mass); **≥ −1.0** = normal\n  - Use **Z-score** (vs age-matched) in younger/premenopausal/men <50 to flag secondary causes\n- Trap 2 (biggest clinical catch): a **MINIMAL-TRAUMA (fragility) FRACTURE** in someone >50 = presumptive osteoporosis and warrants treatment **IRRESPECTIVE of T-score**\n  - Do not require the DXA to be ≤ −2.5 first\n- Trap 3: most tempting WRONG MCQ answer = **'start treatment based on osteopenia T-score alone'**\n  - Osteopenia alone is NOT an automatic treatment indication; use **absolute fracture risk / fracture history**",
   "discriminator": "- Distinguish **primary** (postmenopausal/age-related) from **SECONDARY osteoporosis** before just treating\n  - Screen for: hyperthyroidism, hyperparathyroidism, coeliac, myeloma, hypogonadism, glucocorticoid use, vitamin D deficiency, CKD\n- A **low Z-score** or osteoporosis in a young/male patient = **hunt secondary cause**\n- Before any antiresorptive: correct **vitamin D**, ensure calcium-replete, and do a **DENTAL review** (ONJ risk)",
   "whatFirst": "- **1) Confirm with DXA** + exclude/treat secondary causes + replete vitamin D/calcium + dental check\n- **2) First-line PBS antiresorptive**:\n  - **Oral bisphosphonate** (alendronate 70 mg weekly / risedronate)\n  - **Annual IV zoledronic acid 5 mg**\n  - **6-monthly denosumab 60 mg SC**\n- **3) Anabolic** (teriparatide/romosozumab) reserved for very high risk\n  - Romosozumab gained **first-line PBS listing Nov 2024** for very high fracture risk (e.g. T ≤ −2.5 with recent hip/vertebral fracture, or ≥2 fragility fractures)\n- **PBS subsidised if**: minimal-trauma fracture (any age >50, irrespective of BMD), OR age ≥70 with T-score ≤ −2.5",
   "redFlags": "- New **back pain/height loss** in osteoporosis = possible vertebral fracture\n- **Atypical femoral fracture** (thigh/groin pain) or **osteonecrosis of jaw** on long-term bisphosphonate/denosumab\n- **Denosumab MUST NOT be stopped** without transitioning to a bisphosphonate (e.g. 12 months oral bisphosphonate)\n  - Risk of **rebound vertebral fractures**",
   "source": "2024 RACGP & Healthy Bones Australia guideline for osteoporosis management (MJA 2025; PMC12088310); WHO T-score thresholds; PBS criteria current.",
   "mnemonic": "T-score thresholds: '−1 to −2.5 is the grey zone (osteopenia); past −2.5 = osteoporosis.' 'A fragility fracture trumps the DXA.'",
   "mcqTrap": "- Distractor: **'T-score −1.8, asymptomatic, no fracture → start alendronate'** — wrong, that's osteopenia; use absolute risk, lifestyle, recheck\n- Also distractor: **stopping denosumab and doing nothing**",
   "viva": "- Examiner: 'patient had a wrist fracture from standing-height fall — does a **normal DXA change management**?' (no — it's **presumptive osteoporosis, treat**)\n- Consent point: warn re **ONJ/atypical fracture**; dental review before bisphosphonate; correct **vit D first**",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>T-score</th><th>Category</th></tr></thead><tbody><tr><td>≥ −1.0</td><td>Normal</td></tr><tr><td>−1.0 to −2.5</td><td>Osteopenia (low bone mass)</td></tr><tr><td>≤ −2.5</td><td>Osteoporosis</td></tr><tr><td>≤ −2.5 + fragility fracture</td><td>Established/severe</td></tr></tbody></table><div class=\"gv-pills\"><span class=\"gv-pill\">PBS: minimal-trauma # at any age >50</span><span class=\"gv-pill\">PBS: age ≥70 + T ≤ −2.5</span><span class=\"gv-pill\">Replete vit D + dental check first</span><span class=\"gv-pill\">Never just stop denosumab</span></div>",
   "tags": [
    "osteoporosis",
    "DXA",
    "T-score",
    "bisphosphonate",
    "denosumab",
    "fragility fracture",
    "PBS"
   ],
   "cutoffs": [
    "T-score **≤ −2.5** = osteoporosis; **−1.0 to −2.5** = osteopenia",
    "**Z-score** for premenopausal/men <50 / secondary causes",
    "Alendronate **70 mg weekly**; zoledronic acid **5 mg IV yearly**; denosumab **60 mg SC 6-monthly**",
    "PBS: fragility # >50 (any BMD) OR **≥70 with T ≤ −2.5**"
   ],
   "verified": true,
   "title": "Osteoporosis",
   "subtitle": "DXA T-score definition, who to scan, PBS treatment triggers & first-line bisphosphonate",
   "id": "endocrine-30",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/8/8e/DXA_femoral_neck_with_osteoporosis.jpg",
     "caption": "DXA scan - osteoporosis T-score report",
     "alt": "Dual-energy X-ray absorptiometry (DXA) scan printout showing lumbar spine or hip T-score in the osteoporotic range (≤ −2.5)",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/L1_2_vertebral_fracture.jpg/960px-L1_2_vertebral_fracture.jpg",
     "caption": "Vertebral compression fracture on lateral spine X-ray",
     "alt": "Lateral thoracic or lumbar spine X-ray showing wedge compression fracture(s) — a complication of osteoporosis",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Vitamin D deficiency & osteomalacia — Australian nmol/L bands, the secondary-hyperPTH biochemistry, and the missed diagnosis",
   "subarea": "Calcium, bone & metabolic",
   "trap": "- Trap 1: the **cut-offs** (Australian)\n  - Adequate **25-OH-D >50 nmol/L**\n  - ANZBMS/Osteoporosis Australia: **deficient <30**, mildly deficient 30–50, sufficient >50\n  - ABS/lab classification: mild **30–49**, moderate **13–29**, severe **<13 nmol/L** (some labs use 12.5)\n  - Aim **≥50** (≥60–75 by end of winter / in osteoporosis)\n- Trap 2 (classic exam catch): low calcium + low phosphate + high ALP + high PTH\n  - Most tempting WRONG interpretation: **'primary hyperparathyroidism'**\n  - This biochemistry = **SECONDARY hyperparathyroidism from vitamin D deficiency / osteomalacia**, NOT primary\n  - Primary hyperparathyroidism = **HIGH calcium**\n- Trap 3: **osteomalacia ≠ osteoporosis**\n  - Osteomalacia = defective **MINERALISATION** (soft bone, Looser zones/pseudofractures, bone pain, proximal myopathy, waddling gait) with **abnormal biochemistry**\n  - Osteoporosis biochemistry is typically **NORMAL**",
   "discriminator": "- **Osteomalacia**: low/low-normal Ca, **LOW phosphate**, HIGH ALP, HIGH PTH, very low 25-OH-D, bone pain + proximal muscle weakness, **Looser zones** (pseudofractures) on X-ray\n- **Osteoporosis**: normal Ca/phosphate/ALP/PTH, painless until fracture, low BMD\n- **Primary hyperparathyroidism**: HIGH Ca, high PTH\n- The pattern of ALP + PTH **up** with **LOW calcium** points to vitamin-D-driven **secondary hyperPTH**",
   "whatFirst": "- **Replace vitamin D** (colecalciferol/cholecalciferol)\n- Moderate-severe deficiency: **loading then maintenance**\n  - e.g. ~3000–5000 IU/day for **6–12 weeks**, then **1000–2000 IU/day** maintenance; or high-dose intermittent regimens\n- Ensure **calcium intake adequate**\n- **CHECK and correct calcium/magnesium** — replacing vitamin D in a hypocalcaemic patient can unmask/worsen hypocalcaemia\n  - Correct **severe hypocalcaemia first**\n- Investigate cause of **malabsorption** (coeliac) if unexplained",
   "redFlags": "- **Severe deficiency with symptomatic hypocalcaemia** (tetany/seizure) — treat hypocalcaemia (**IV calcium**) before/with vitamin D\n- **Bone pain + proximal weakness + raised ALP** = osteomalacia; image for **pseudofractures**\n- Consider **malabsorption/CKD** if not responding",
   "source": "ANZBMS / Osteoporosis Australia vitamin D & health in adults position statement (MJA 2012); Australian Prescriber 'Vitamin D deficiency in adults'; ABS National Health Measures Survey deficiency bands.",
   "mnemonic": "'50 to thrive' (target >50 nmol/L). Osteomalacia biochem: 'Ca low, Phos low, ALP high, PTH high' = the soft-bone signature.",
   "mcqTrap": "- Distractor: labelling **low-Ca / high-PTH / high-ALP / low-phosphate** as **'primary hyperparathyroidism'** — wrong; primary has **HIGH calcium**\n- This pattern = secondary hyperPTH from **vitamin D deficiency**",
   "viva": "- Examiner: 'elderly nursing-home patient, bone pain, can't rise from chair — diagnosis and one test?' (**osteomalacia**; **25-OH-D + ALP/PTH/Ca/PO4**)\n- Discriminator probe: how does osteomalacia biochemistry differ from osteoporosis (**abnormal vs normal**)",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>25-OH-D (nmol/L)</th><th>Status (AUS)</th></tr></thead><tbody><tr><td>&gt;50</td><td>Adequate / sufficient</td></tr><tr><td>30-49</td><td>Mild deficiency</td></tr><tr><td>13-29</td><td>Moderate deficiency</td></tr><tr><td>&lt;13</td><td>Severe deficiency</td></tr></tbody></table><table class=\"gv-table\"><thead><tr><th>Pattern</th><th>Ca</th><th>PO4</th><th>ALP</th><th>PTH</th></tr></thead><tbody><tr><td>Osteomalacia</td><td>low/N</td><td>LOW</td><td>HIGH</td><td>HIGH</td></tr><tr><td>Osteoporosis</td><td>N</td><td>N</td><td>N</td><td>N</td></tr><tr><td>1° hyperPTH</td><td>HIGH</td><td>low</td><td>N/high</td><td>HIGH</td></tr></tbody></table>",
   "tags": [
    "vitamin D",
    "osteomalacia",
    "secondary hyperparathyroidism",
    "ALP",
    "colecalciferol",
    "Looser zones"
   ],
   "cutoffs": [
    "Adequate **>50**; mild **30–49**; moderate **13–29**; severe **<13 nmol/L** (ABS bands; some labs use 12.5)",
    "ANZBMS: deficient **<30**, mild **30–50**, sufficient **>50 nmol/L**",
    "Target **≥50** (≥60–75 in osteoporosis/end of winter)",
    "Maintenance **~1000–2000 IU/day** colecalciferol; loading **~3000–5000 IU/day x 6–12 wk**"
   ],
   "verified": true,
   "title": "Vitamin D deficiency & osteomalacia",
   "subtitle": "Australian nmol/L bands, the secondary-hyperPTH biochemistry, and the missed diagnosis",
   "id": "endocrine-31",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/b/b7/Severe_Osteomalacia_Related_to_Long-Term_Intravenous_Drug_Abuse_P01_radiograph_of_right_tibia_and_fibula.jpg",
     "caption": "Osteomalacia - Looser zone (pseudofracture) on X-ray",
     "alt": "Radiograph showing a Looser zone (pseudofracture / Milkman fracture) — a ribbon-like lucency perpendicular to the cortex, pathognomonic of osteomalacia / vitamin D deficiency",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/X-ray_of_Hands_Identifying_Rickets.jpg/960px-X-ray_of_Hands_Identifying_Rickets.jpg",
     "caption": "Rickets - cupped/frayed metaphyses and bowed legs in child",
     "alt": "Paediatric wrist X-ray showing widened, cupped and frayed metaphyses (rachitic changes) with bowing deformity from vitamin D deficiency rickets",
     "credit": "Wikimedia Commons"
    }
   ]
  }
 ]
}
);
