window.GOTCHA = window.GOTCHA || { modules: [] };
window.GOTCHA.modules.push(
{
 "id": "oncology",
 "name": "Oncology & Palliative",
 "category": "Medicine",
 "blurb": "Written-exam + VIVA. Oncological emergencies, Australian screening programs and palliative symptom prescribing.",
 "cards": [
  {
   "topic": "Febrile neutropenia — the antibiotic clock and the exact dual definition",
   "subarea": "Oncological emergencies",
   "trap": "- Exact eviQ cut-offs:\n  - **Neutropenia**: neutrophils <**0.5 x10^9/L**, OR <**1.0 x10^9/L** AND predicted to fall below 0.5\n  - **Fever**: single temp **≥38.3°C**, OR ≥38.0°C sustained over 1 hour\n  - Do NOT wait for a sustained temp if it is **38.3°C once**\n  - A 'normal' neutrophil count today still counts if **predicted to crash**\n- Antibiotic timing is a **two-tier clock**, not a flat hour:\n  - **Systemically compromised** (hypotension, hypoxia, confusion, organ dysfunction / septic) = antibiotics within **30 min**\n  - **Clinically stable** = within **1 hour**\n- Empirical therapy: **beta-lactam monotherapy** (pip-taz 4.5 g IV q6h, or cefepime 2 g IV q8h)\n  - NOT beta-lactam + aminoglycoside by default\n  - Add **gentamicin** only if systemically compromised/septic\n  - Do **NOT add vancomycin** routinely",
   "whatFirst": "- Take **blood cultures** (peripheral + each lumen of any CVAD) then give the first IV antibiotic dose\n  - **Never delay antibiotics** waiting for cultures, FBC, imaging or the neutrophil result\n  - Cultures-then-antibiotics is the order, but the **antibiotic is the time-critical step**",
   "discriminator": "- Distinguish from simple sepsis-without-neutropenia: same A-to-E resuscitation, but FN mandates **empirical anti-pseudomonal cover** regardless of obvious source\n- Threshold to escalate is **far lower** than standard sepsis\n- Discriminate **stable vs unstable** FN — changes the clock (**1 h vs 30 min**) and whether you add gentamicin",
   "redFlags": "- Hypotension, raised **lactate**, hypoxia, confusion, mucositis/perianal pain, or a CVAD\n  - → escalate to MET/ICU and shorten clock to **30 min**\n- Persistent fever at **48-72 h** despite broad-spectrum cover\n  - → consider **invasive fungal infection** / add antifungal and re-image, do not just 'wait'",
   "mcqTrap": "- Tempting wrong: '**pip-taz + gentamicin + vancomycin**' for a well-looking, haemodynamically stable febrile neutropenic patient\n  - Correct empirical choice: **anti-pseudomonal beta-lactam monotherapy**\n  - Gentamicin reserved for systemic compromise; **vancomycin NOT routine** (only for suspected line/skin/MRSA or shock)\n- Classic distractor: 'wait for **FBC/neutrophil count** before starting antibiotics' — wrong, treat empirically",
   "viva": "- Say out loud: 'This is **febrile neutropenia** until proven otherwise — I will take blood cultures and give IV pip-taz within the hour, sooner if septic.'\n- **ISBAR** the haem/oncology registrar\n- State the **regimen**, the **timing tier**, and your re-assessment plan at **48-72 h**",
   "mnemonic": "FN 1-2-3: ONE hour (stable) / under 30 min (sick) / TWO-or-three days = think fungal.",
   "source": "eviQ Oncological emergencies — Immediate management of neutropenic fever (Cancer Institute NSW, current); Therapeutic Guidelines (eTG) Antibiotic — Neutropenic fever (current)",
   "verified": true,
   "tags": [
    "febrile neutropenia",
    "antibiotics",
    "sepsis",
    "pip-taz",
    "eviQ"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Element</th><th>Exact cut-off</th></tr><tr><td>Neutropenia</td><td>ANC <span class=\"gv-num\">&lt;0.5 x10^9/L</span> (or <span class=\"gv-num\">&lt;1.0</span> &amp; falling)</td></tr><tr><td>Fever</td><td>single <span class=\"gv-num\">&ge;38.3 C</span> OR <span class=\"gv-num\">&ge;38.0 C</span> for 1 h</td></tr><tr><td>Antibiotic — stable</td><td>within <span class=\"gv-num\">1 hour</span></td></tr><tr><td>Antibiotic — septic</td><td>within <span class=\"gv-num\">30 min</span></td></tr><tr><td>Empirical drug</td><td>pip-taz 4.5 g IV q6h (or cefepime 2 g q8h)</td></tr><tr><td>Add gentamicin?</td><td>only if systemically compromised</td></tr></table>",
   "title": "Febrile neutropenia",
   "subtitle": "the antibiotic clock and the exact dual definition",
   "id": "oncology-1"
  },
  {
   "topic": "Febrile neutropenia — risk stratification (MASCC) and who can go home",
   "subarea": "Oncological emergencies",
   "trap": "- **MASCC score**: HIGH risk = <21; LOW risk = **≥21** (max possible score 26)\n  - Catch: a **HIGH score = LOW risk** (counter-intuitive — points are 'good')\n- Key weighted items:\n  - Burden of illness none/mild **+5**\n  - No hypotension **+5**\n  - No COPD **+4**\n  - Solid tumour or no prior fungal infection **+4**\n  - No dehydration **+3**\n  - Outpatient at fever onset **+3**\n  - Age <60 **+2**\n- Low-risk oral regimen (if eligible, tolerating oral, good support, can return fast): **amoxicillin-clavulanate + ciprofloxacin**\n- Do NOT send home anyone with a **CVAD infection**, ALL/AML/marrow transplant, or expected prolonged deep neutropenia",
   "whatFirst": "- Give the **first IV dose and stabilise FIRST**; calculate MASCC and decide disposition SECOND\n  - Never let **risk-scoring delay the antibiotic**",
   "discriminator": "- MASCC stratifies who may **step down to oral/ambulatory care** — it does NOT decide whether to give antibiotics (everyone gets them)\n- Distinguish from **CISNE score** (used for clinically stable solid-tumour patients to refine low-risk)",
   "redFlags": "- Even a 'low-risk' MASCC score is **overridden** by clinical instability, profound/prolonged neutropenia, GI mucositis, haematological malignancy or **line sepsis**\n  - These stay **inpatient on IV**",
   "mcqTrap": "- Tempting wrong: '**MASCC <21 = low risk**, discharge on oral antibiotics'\n  - Inverted: **<21 is HIGH risk** and mandates admission/IV\n  - The counter-intuitive score direction trips up candidates every time",
   "viva": "- 'I would **risk-stratify with MASCC**, but only after empirical IV antibiotics; a score of **21 or more** in a stable solid-tumour patient with good supports may allow an ambulatory oral pathway.'",
   "mnemonic": "MASCC: 21-up is LOW risk (high score = healthy patient).",
   "source": "eviQ Oncological emergencies — Patient evaluation, risk assessment and initial management of febrile neutropenia (Cancer Institute NSW, current); MASCC scoring tool (max 26)",
   "verified": true,
   "tags": [
    "febrile neutropenia",
    "MASCC",
    "risk stratification",
    "outpatient"
   ],
   "cutoffs": [
    "MASCC **≥21** = low risk",
    "MASCC **<21** = high risk",
    "max score **26**"
   ],
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">MASCC &ge;21 = LOW risk</span><span class=\"gv-pill\">MASCC &lt;21 = HIGH risk</span><span class=\"gv-pill\">High score = well</span></div>",
   "title": "Febrile neutropenia",
   "subtitle": "risk stratification (MASCC) and who can go home",
   "id": "oncology-2"
  },
  {
   "topic": "Malignant hypercalcaemia — FLUIDS first, bisphosphonate second; severity by corrected calcium",
   "subarea": "Oncological emergencies",
   "trap": "- Step 1 is **aggressive IV 0.9% saline rehydration** (patients are profoundly volume-deplete from calcium-driven nephrogenic diabetes insipidus)\n  - typically 0.9% saline bolus then maintenance, titrated to urine output and avoiding overload\n- Step 2 is **IV bisphosphonate** — but mean normalisation of calcium is around **day 4**, so it does NOTHING acutely; fluids are what drop the calcium today\n  - **zoledronic acid 4 mg IV** over >=15 min, dose-reduced for renal impairment\n  - OR **pamidronate 60-90 mg IV**\n- Severity classified by **corrected calcium**: mild <3.0, moderate 3.0-3.5, severe >=3.5 mmol/L\n- Always correct for albumin: **corrected Ca = serum Ca + 0.02 x (40 - albumin g/L)**, i.e. ~+0.20 mmol/L per 10 g/L below 40\n- **Loop diuretics are NOT routine** — only if fluid-overloaded once rehydrated\n- **Denosumab 120 mg SC** is the option if renal impairment contraindicates a bisphosphonate or for bisphosphonate-refractory disease",
   "whatFirst": "- **Rehydrate with normal saline FIRST** and monitor for overload — then give the bisphosphonate\n- Check **renal function** (dose-adjust zoledronic acid by eGFR, or use denosumab if eGFR too low)\n- **Correct calcium for albumin** before acting",
   "discriminator": "- Discriminate by mechanism:\n  - **humoral hypercalcaemia of malignancy** (PTHrP — squamous lung, renal, H&N — most common)\n  - **local osteolysis** (myeloma, breast mets)\n  - **1,25-OH vitamin D excess** (lymphoma)\n- **PTH is SUPPRESSED** in malignancy — distinguishes from primary hyperparathyroidism where PTH is high/inappropriately normal\n- Distinguish from **thiazide/lithium-induced** and **granulomatous** causes",
   "redFlags": "- **Corrected Ca >=3.5 mmol/L** -> admit, IV fluids + IV bisphosphonate, cardiac monitoring\n- **Drowsiness/confusion/coma**\n- **Severe dehydration**\n- **Arrhythmia** (short QT)\n- **Calcitonin 4 IU/kg SC/IM** can be added for rapid but transient (tachyphylaxis ~**48 h**) lowering while the bisphosphonate takes effect",
   "mcqTrap": "- Most tempting wrong answer: **'give IV frusemide (loop diuretic)'** to promote calciuresis as an early step\n  - Wrong — frusemide is NOT first-line; reserved for fluid overload after rehydration\n  - Aggressive saline + bisphosphonate is the answer\n- Second trap: **'bisphosphonate alone'** — forgetting that fluids precede it and produce the acute effect",
   "viva": "- **'Rehydrate aggressively with normal saline first'**\n- Give **IV zoledronic acid 4 mg** after checking renal function and dose-adjusting by eGFR\n- Monitor for **fluid overload and arrhythmia**\n- Use **denosumab** if renal impairment precludes a bisphosphonate\n- The bisphosphonate takes **days** to work — fluids do the acute lifting",
   "mnemonic": "'Fluids fix it fast, bisphosphonates finish it' — saline now, zoledronate for the day-4 nadir.",
   "source": "eviQ Oncological emergencies #1504 Hypercalcaemia of malignancy (HCM) zoledronic acid (Cancer Institute NSW, current); Therapeutic Guidelines (eTG complete) — Hypercalcaemia of malignancy / palliative care (current)",
   "verified": true,
   "tags": [
    "hypercalcaemia",
    "zoledronic acid",
    "saline",
    "denosumab",
    "PTHrP",
    "corrected calcium"
   ],
   "cutoffs": [
    "Mild **<3.0 mmol/L**",
    "Moderate **3.0-3.5 mmol/L**",
    "Severe **>=3.5 mmol/L**",
    "Zoledronic acid **4 mg** IV (reduce for eGFR <60; not <30)",
    "Pamidronate **60-90 mg** IV",
    "Denosumab **120 mg** SC",
    "corrected Ca = Ca + **0.02** x (40 - albumin)"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Correct Ca for albumin</div><div class=\"gv-step\">0.9% saline rehydration (acts NOW)</div><div class=\"gv-step\">Zoledronic acid 4 mg IV (calcium nadir ~day 4)</div><div class=\"gv-step\">Renal impairment -> denosumab 120 mg SC</div></div><table class=\"gv-table\"><tr><th>Severity</th><th>Corrected Ca</th></tr><tr><td>Mild</td><td><span class=\"gv-num\">&lt;3.0</span> mmol/L</td></tr><tr><td>Moderate</td><td><span class=\"gv-num\">3.0-3.5</span> mmol/L</td></tr><tr><td>Severe</td><td><span class=\"gv-num\">&ge;3.5</span> mmol/L</td></tr></table>",
   "title": "Malignant hypercalcaemia",
   "subtitle": "FLUIDS first, bisphosphonate second; severity by corrected calcium",
   "id": "oncology-3"
  },
  {
   "topic": "Malignant spinal cord compression — dexamethasone FIRST, then MRI whole spine, then definitive Rx",
   "subarea": "Oncological emergencies",
   "trap": "- Give **dexamethasone immediately on clinical suspicion** — do NOT wait for the MRI\n- Standard Australian practice: **dexamethasone 16 mg/day** (commonly 8 mg IV/PO BD, or a one-off 16 mg loading dose then 16 mg daily) with PPI cover and BSL monitoring\n  - High-dose 96 mg/day (TROG SuperDEX) is NOT routine — extra toxicity, no clear benefit\n- Imaging = **MRI of the WHOLE spine** (not just the symptomatic level) within 24 h\n  - ~1/3 have **multiple levels**\n- Definitive treatment = **radiotherapy OR surgical decompression**\n  - Surgery (Patchell) preferred if: good performance status, single level, spinal instability, unknown histology needing tissue, or radioresistant tumour",
   "whatFirst": "- **Steroids first** (within minutes of suspicion)\n- **MRI whole spine within 24 h** second\n- **Neurosurgery/radiation oncology referral** third\n- Pre-treatment **ambulatory status** is the strongest predictor of post-treatment walking — time-to-treatment is everything",
   "discriminator": "- Discriminate **cord compression** (UMN: hyperreflexia, up-going plantars, sensory level, a level on the trunk) from **cauda equina** (LMN: areflexia, saddle anaesthesia, early bladder/bowel — below L1/L2)\n  - Both are emergencies; both get steroids + urgent MRI\n- Distinguish **new back pain in a cancer patient** (red flag) from mechanical back pain\n  - Nocturnal/recumbent worsening and **thoracic pain** point to metastatic cord compression",
   "redFlags": "- **New/worsening back pain** in any cancer patient\n- **Radicular pain**\n- **Leg weakness**\n- **Sensory level**\n- **Urinary retention/incontinence**\n- **Saddle anaesthesia** -> treat as MSCC, give steroids, urgent MRI\n- Established paraplegia **>24-48 h** has poor recovery prognosis — but still image and treat for pain/stability",
   "mcqTrap": "- Most tempting wrong answer: **'arrange urgent MRI, then start dexamethasone once compression is confirmed'** — wrong order; steroids are given on clinical suspicion BEFORE imaging\n- Another distractor: **'plain X-ray / CT'** as the imaging of choice\n  - MRI whole spine is the standard; CT/X-ray miss soft-tissue cord compression",
   "viva": "- Give **dexamethasone 16 mg now**\n- Arrange urgent **MRI of the whole spine within 24 hours**\n- Refer to **radiation oncology and neurosurgery**\n- Document **neurology and ambulatory status** as baseline\n- Mention consent considerations for surgery vs radiotherapy and the prognostic value of **pre-treatment mobility**",
   "mnemonic": "'Steroids Move Radiotherapy' = Steroids -> MRI whole spine -> Radiotherapy/surgery, in that order.",
   "source": "eviQ Radiation Oncology Palliative #296 Spinal cord compression palliative EBRT (Cancer Institute NSW, current); TROG 01.05 SuperDEX; Patchell RCT (Lancet 2005, surgery+RT)",
   "verified": true,
   "tags": [
    "spinal cord compression",
    "dexamethasone",
    "MRI whole spine",
    "radiotherapy",
    "Patchell",
    "cauda equina"
   ],
   "cutoffs": [
    "Dexamethasone **16 mg/day**",
    "MRI whole spine within **24 h**"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Clinical suspicion</div><div class=\"gv-step\">Dexamethasone <span class=\"gv-num\">16 mg</span>/day NOW (+PPI)</div><div class=\"gv-step\">MRI WHOLE spine &lt;24 h</div><div class=\"gv-step\">RadOnc + Neurosurg -> RT or decompression</div></div>",
   "title": "Malignant spinal cord compression",
   "subtitle": "dexamethasone FIRST, then MRI whole spine, then definitive Rx",
   "id": "oncology-4"
  },
  {
   "topic": "Neutropenic sepsis source control & antifungal escalation (the 48-72 h rule)",
   "subarea": "Oncological emergencies",
   "trap": "- Persistent fever at **48-72 h** despite appropriate broad-spectrum antibiotics in a still-neutropenic patient -> think **invasive fungal infection** (Candida, Aspergillus)\n- Add **empirical antifungal** (e.g. an echinocandin or liposomal amphotericin per local protocol)\n- **Re-image** (HRCT chest for Aspergillus halo/air-crescent sign)\n- **Repeat cultures**; send **beta-D-glucan/galactomannan**\n- Do NOT just keep waiting on the same antibiotic\n- Add **vancomycin ONLY** for specific triggers:\n  - suspected line infection\n  - skin/soft-tissue source\n  - severe mucositis\n  - MRSA colonisation\n  - haemodynamic instability\n  - a Gram-positive culture\n  - NOT routinely\n- **G-CSF is NOT routinely given** to treat established febrile neutropenia — only selected high-risk/deteriorating cases",
   "whatFirst": "- **Reassess and re-culture at 48-72 h**\n- **Escalate antifungal cover and re-image** rather than passively continuing\n- Remove/consider removing an **infected line**",
   "discriminator": "- Discriminate persistent fever from:\n  - **inadequate Gram-positive cover** (add vancomycin for the right triggers)\n  - **occult fungal infection** (add antifungal + HRCT)\n  - **undrained collection** (source control)\n- Distinguish **drug fever** and **tumour fever** as diagnoses of exclusion",
   "redFlags": "- **New hypotension**\n- **New infiltrate**\n- **Sinus pain/black eschar** (mucormycosis)\n- **Persistent fungaemia**\n- **Line-tunnel infection** -> ICU + source control + targeted antimicrobial",
   "mcqTrap": "- Most tempting wrong answer: **'continue current antibiotics and review tomorrow'** for a still-febrile neutropenic patient at day 3 — wrong; the correct move is to ADD an antifungal and re-image\n- Also tempting: **'add G-CSF'** to treat the established episode — not routine",
   "viva": "- If febrile neutropenic patient stays febrile at **48-72 hours** on broad-spectrum antibiotics -> think **invasive fungal infection**\n- Add an **empirical antifungal**\n- **Re-image with HRCT chest**\n- Repeat cultures and **review the line**",
   "mnemonic": "'Day 3 still hot = fungus until proven otherwise.'",
   "source": "eviQ Oncological emergencies — Neutropenic fever management (Cancer Institute NSW, current); Therapeutic Guidelines (eTG) Antibiotic — persistent neutropenic fever / empirical antifungal therapy (current)",
   "verified": true,
   "tags": [
    "febrile neutropenia",
    "invasive fungal infection",
    "antifungal",
    "vancomycin",
    "G-CSF"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Broad-spectrum beta-lactam</div><div class=\"gv-step\">Add vanc ONLY for line/skin/mucositis/MRSA/shock</div><div class=\"gv-step\">Still febrile 48-72 h -> add antifungal + HRCT chest</div></div>",
   "title": "Neutropenic sepsis source control & antifungal escalation…",
   "id": "oncology-5",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/a/a4/CT_Halo_sign_around_a_right_lower_lobe_pulmonary_nodule.png",
     "caption": "Invasive pulmonary aspergillosis - CT halo sign",
     "alt": "High-resolution CT chest showing nodule surrounded by ground-glass halo (halo sign) indicating invasive aspergillosis in neutropenic patient",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Raised intracranial pressure from brain metastases — dexamethasone + the seizure-prophylaxis trap",
   "subarea": "Oncological emergencies",
   "trap": "- Symptomatic vasogenic oedema around brain mets -> **dexamethasone** (commonly 8-16 mg/day, e.g. 4 mg q6h; loading 8-10 mg) with PPI cover\n  - Steroids treat the **oedema**, not the tumour\n- The gotcha: do **NOT give prophylactic anticonvulsants** to brain-met patients who have NOT had a seizure — no proven benefit, drug interactions, toxicity\n  - Only treat those who HAVE seized\n- Definitive options:\n  - **whole-brain RT**\n  - **stereotactic radiosurgery** (limited number of mets)\n  - **surgery** (single accessible met / mass effect / unknown primary)\n- **Avoid over-aggressive BP lowering**\n- For impending herniation: add ICP-lowering measures (**head up**, consider mannitol/hypertonic saline) and **urgent neurosurgical referral**",
   "whatFirst": "- **Dexamethasone + airway/neuro support first**\n- Urgent **CT/MRI brain**\n- Involve **radiation oncology/neurosurgery**\n- Treat seizures if they occur — **do not prophylax**",
   "discriminator": "- Distinguish **raised-ICP headache** (worse lying/morning, with vomiting, papilloedema, focal signs) from tension/migraine\n- Distinguish **leptomeningeal disease** (multifocal cranial nerve/spinal signs, normal-ish imaging, diagnosed on LP cytology / MRI with contrast) from a **focal parenchymal met**",
   "redFlags": "- **Reduced GCS**\n- **Fixed/dilated pupil**\n- **Cushing response** (hypertension + bradycardia)\n- **New focal deficit**\n- **Seizures** -> impending herniation — urgent neurosurgery + ICP-lowering",
   "mcqTrap": "- Most tempting wrong answer: **'start levetiracetam/phenytoin prophylaxis'** in a brain-met patient who has not had a seizure — wrong; anticonvulsant prophylaxis is NOT recommended without a seizure\n- Another distractor: **'mannitol as first-line'** for routine symptomatic oedema\n  - Dexamethasone is first-line for vasogenic oedema\n  - Mannitol/hypertonic saline are for acute herniation",
   "viva": "- Give **dexamethasone** for the vasogenic oedema\n- Image with **contrast MRI**\n- Refer to **radiation oncology/neurosurgery**\n- Importantly: do **NOT start prophylactic anticonvulsants** unless the patient has had a seizure",
   "mnemonic": "'Steroids for swelling, anticonvulsants only after a seizure.'",
   "source": "CNS/ASCO/SNO guideline — Anticonvulsant prophylaxis and steroid use in adults with metastatic brain tumors (no prophylaxis without seizure; dexamethasone for symptomatic mass effect); Cancer Council Australia / eviQ CNS metastases guidance (current); eTG",
   "verified": true,
   "tags": [
    "brain metastases",
    "raised ICP",
    "dexamethasone",
    "seizure prophylaxis",
    "herniation"
   ],
   "cutoffs": [
    "Dexamethasone **8-16 mg/day**"
   ],
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Dexamethasone for vasogenic oedema</span><span class=\"gv-pill\">NO seizure prophylaxis unless seized</span><span class=\"gv-pill\">Mannitol/hypertonic saline = herniation only</span></div>",
   "title": "Raised intracranial pressure from brain metastases",
   "subtitle": "dexamethasone + the seizure-prophylaxis trap",
   "id": "oncology-6"
  },
  {
   "topic": "SVC obstruction — usually NOT a true emergency; get tissue before treating",
   "subarea": "Oncological emergencies",
   "trap": "- The big gotcha: malignant SVC obstruction is usually **NOT an immediate life threat**\n  - Classic teaching to 'irradiate immediately' is outdated\n- Commonest causes (SCLC, NHL/lymphoma, germ cell) are **exquisitely chemo/radiosensitive**\n  - Tissue diagnosis is changed by prior radiotherapy\n- Rule: **OBTAIN A TISSUE DIAGNOSIS FIRST** and treat the underlying tumour\n  - EXCEPT when there is true **airway compromise** (stridor, laryngeal oedema) or **cerebral oedema** — do NOT wait in those cases\n- First-line for life-threatening symptoms = endovascular **STENT** (works in hours, independent of histology) +/- radiotherapy\n- Lymphoma/SCLC/germ cell respond to **chemotherapy**",
   "whatFirst": "- **Assess for genuine emergency features first** (stridor, laryngeal/cerebral oedema, haemodynamic compromise)\n  - If present -> **urgent stent** +/- steroids, secure airway\n  - If absent -> CT chest with contrast, then **biopsy for histology BEFORE definitive treatment**\n    - Radiotherapy can render tissue undiagnosable and may forfeit a curable chemo-sensitive diagnosis",
   "discriminator": "- Discriminate cause by tempo:\n  - **Lymphoma/SCLC/germ-cell** (chemosensitive, often curable — biopsy first, chemo)\n  - **Non-small-cell lung cancer** (less chemosensitive — stent/RT)\n- Distinguish **SVC oedema** (facial/neck/arm swelling, distended neck veins, Pemberton sign) from cardiac failure or angioedema\n- A **thrombotic SVCO** around an indwelling catheter is treated differently (anticoagulation +/- catheter removal)",
   "redFlags": "- **Stridor**\n- **Laryngeal oedema**\n- **Respiratory distress**\n- **Altered conscious state / cerebral oedema**\n- **Haemodynamic compromise** = the SVCO that IS a true emergency -> urgent stent, steroids, airway\n- Otherwise there is time to biopsy",
   "mcqTrap": "- Most tempting wrong answer: **'start emergency mediastinal radiotherapy immediately'** for a stable patient with facial swelling and a new mediastinal mass\n  - Wrong — in a stable patient, **biopsy FIRST**\n  - RT can obliterate the diagnosis; the underlying tumour may be a curable lymphoma needing chemo\n- Emergency RT/stent without tissue is reserved for **airway/cerebral compromise**",
   "viva": "- SVC obstruction is rarely immediately fatal\n- Unless there is **airway or cerebral compromise**, prioritise a **tissue diagnosis** with contrast CT and biopsy\n  - Lymphoma or small-cell lung cancer are chemosensitive; **radiotherapy first could prevent a definitive diagnosis**\n- If the airway is threatened: **stent and give steroids without delay**",
   "mnemonic": "'Tissue before zapping' — biopsy first unless the airway or brain is swelling.",
   "source": "OzRadOnc Superior Vena Cava Obstruction; Cancer Council Australia / eviQ oncological emergencies guidance (current); contemporary SVCS reviews (J Thorac Oncol 2023; stent first-line for life-threatening SVCS)",
   "verified": true,
   "tags": [
    "SVC obstruction",
    "tissue diagnosis",
    "stent",
    "lymphoma",
    "SCLC",
    "airway"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Scenario</th><th>Action</th></tr><tr><td>Airway/cerebral oedema, stridor</td><td>TRUE emergency -> stent +/- steroids, secure airway, do NOT wait for biopsy</td></tr><tr><td>Stable, new mediastinal mass</td><td>CT contrast -> BIOPSY first -> treat tumour</td></tr><tr><td>Lymphoma / SCLC / germ cell</td><td>chemosensitive -> chemotherapy</td></tr><tr><td>NSCLC</td><td>stent / radiotherapy</td></tr></table>",
   "title": "SVC obstruction",
   "subtitle": "usually NOT a true emergency; get tissue before treating",
   "id": "oncology-7"
  },
  {
   "topic": "Tumour lysis syndrome — Cairo-Bishop numbers and the rasburicase/allopurinol trap",
   "subarea": "Oncological emergencies",
   "trap": "- **Laboratory TLS** (Cairo-Bishop) = >=2 of the following within 3 days before to 7 days after therapy:\n  - Uric acid **>=0.476 mmol/L** (>=8 mg/dL)\n  - K **>=6.0 mmol/L**\n  - Phosphate **>=1.45 mmol/L** (adult)\n  - Corrected calcium **<=1.75 mmol/L**\n  - Each either at that absolute level OR a **25% change** from baseline\n- **Clinical TLS** = lab TLS PLUS creatinine >=1.5x ULN, cardiac arrhythmia/sudden death, OR seizure\n- **Calcium goes DOWN** (the only electrolyte that falls — secondary to hyperphosphataemia)\n- Killer gotcha: **rasburicase and allopurinol must NOT be combined**\n  - Allopurinol blocks xanthine->uric acid upstream — no rationale to add it to rasburicase and it can blunt rasburicase efficacy\n- **CHECK G6PD before rasburicase** — contraindicated; causes haemolysis/methaemoglobinaemia",
   "whatFirst": "- **Aggressive IV hydration** is the single most important intervention\n  - Target ~**3 L/m2/day**, urine output >=**100 mL/m2/h**\n- Choose ONE urate agent by risk:\n  - **Allopurinol** — prevention, low/intermediate risk\n  - **Rasburicase** — high risk or established hyperuricaemia\n- Treat **hyperkalaemia** as the immediately life-threatening abnormality",
   "discriminator": "- Mechanism splits the two urate drugs:\n  - **Allopurinol** PREVENTS new uric acid formation (does nothing to existing urate, takes days)\n  - **Rasburicase** ENZYMATICALLY destroys existing uric acid (works in hours)\n  - Therefore: rasburicase for treatment/high risk; allopurinol for low-risk prophylaxis\n- Distinguish **AKI of TLS** (uric acid + calcium-phosphate crystal nephropathy) from contrast/sepsis AKI",
   "redFlags": "- **K >=6.0**, ECG changes\n- **Rising creatinine**, oliguria\n- **Symptomatic hypocalcaemia** (tetany/seizure) -> renal/ICU referral for possible dialysis\n- Do **NOT give IV calcium** for asymptomatic hypocalcaemia — worsens calcium-phosphate deposition\n  - Only treat **symptomatic** hypocalcaemia",
   "mcqTrap": "- Most tempting wrong answer: **'start allopurinol AND rasburicase together'** in a high-risk patient — wrong; they are not combined\n- Second classic trap: **'urinary alkalinisation with sodium bicarbonate'** — NO LONGER recommended\n  - Promotes calcium-phosphate and xanthine precipitation\n  - Plain isotonic fluids are preferred",
   "viva": "- Highest TLS risk: **bulky, rapidly proliferating disease** — Burkitt lymphoma, ALL, high-grade lymphoma with high LDH/WCC\n- **Hydrate aggressively**\n- Give **rasburicase** if high risk — after **checking G6PD**\n- Do **not combine** rasburicase with allopurinol",
   "mnemonic": "'High K, high P, high U, low Ca' + ROAST: Rasburicase Only — Avoid Simultaneous allopurinol; Test G6PD.",
   "source": "eviQ Oncological emergencies — Prevention and management of tumour lysis syndrome (Cancer Institute NSW, current); Cairo-Bishop criteria (Br J Haematol 2004)",
   "verified": true,
   "tags": [
    "tumour lysis syndrome",
    "Cairo-Bishop",
    "rasburicase",
    "allopurinol",
    "G6PD",
    "hyperkalaemia"
   ],
   "cutoffs": [
    "Uric acid **>=0.476 mmol/L** (>=8 mg/dL)",
    "K **>=6.0 mmol/L**",
    "Phosphate **>=1.45 mmol/L**",
    "Corrected Ca **<=1.75 mmol/L**",
    "or **25%** change from baseline",
    "Cr **>=1.5x ULN** for clinical TLS"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Analyte</th><th>Cairo-Bishop lab cut-off</th><th>Direction</th></tr><tr><td>Uric acid</td><td><span class=\"gv-num\">&ge;0.476 mmol/L</span></td><td>up</td></tr><tr><td>Potassium</td><td><span class=\"gv-num\">&ge;6.0 mmol/L</span></td><td>up</td></tr><tr><td>Phosphate</td><td><span class=\"gv-num\">&ge;1.45 mmol/L</span></td><td>up</td></tr><tr><td>Corrected Ca</td><td><span class=\"gv-num\">&le;1.75 mmol/L</span></td><td>DOWN</td></tr></table><div class=\"gv-flow\"><div class=\"gv-step\">Hydrate ~3 L/m2/day</div><div class=\"gv-step\">Low/int risk -> allopurinol</div><div class=\"gv-step\">High risk -> rasburicase (check G6PD; not with allopurinol)</div></div>",
   "title": "Tumour lysis syndrome",
   "subtitle": "Cairo-Bishop numbers and the rasburicase/allopurinol trap",
   "id": "oncology-8",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_hyperkalaemia.jpg",
     "caption": "Hyperkalaemia ECG changes - peaked T waves, widened QRS",
     "alt": "ECG showing peaked/tented T waves and broadened QRS complex in severe hyperkalaemia (relevant to tumour lysis syndrome)",
     "credit": "Dr Michael-Joseph F. Agbayani & Dr Eddieson Gonzales, Wikimedia Commons, CC BY 4.0"
    }
   ]
  },
  {
   "topic": "Australian BreastScreen program - the 50-74 invite vs the 40-49 / 75+ 'eligible but not invited' trap",
   "subarea": "Cancer principles & screening",
   "trap": "- BreastScreen Australia actively **invites women aged 50-74** for a free mammogram every **2 years**\n- Women aged **40-49 AND 75+** are ELIGIBLE for free screening but are **NOT invited** — must self-refer (call 13 20 50)\n- Screening is for **ASYMPTOMATIC** women only\n- Target/invited band: **50-74**; eligible band extends to **40+** with no upper bar",
   "whatFirst": "- Woman with a breast **LUMP or other symptom** -> this is NOT screening\n- Use the **triple test** (clinical exam + imaging [mammogram +/- ultrasound] + biopsy/FNA) via a **diagnostic pathway**, not BreastScreen",
   "discriminator": "- **Screening mammography** (BreastScreen, asymptomatic, 50-74 invited) vs **diagnostic work-up** (symptomatic -> triple test)\n- **High-risk women** (BRCA, strong family history, prior chest RT) need a separate **high-risk surveillance pathway** (often MRI +/- annual mammogram) — not the routine 2-yearly program",
   "redFlags": "- Any **breast lump**\n- **Nipple change/bloody discharge**\n- **Skin tethering/peau d'orange**\n- **Axillary node** = diagnostic triple test regardless of a recent 'normal' screening mammogram",
   "mcqTrap": "- Tempting wrong answer: **'reassure — she had a normal BreastScreen 6 months ago'** in a woman who now has a discrete lump\n  - A normal screening mammogram does **NOT exclude cancer** in a symptomatic woman — proceed to triple test",
   "mnemonic": "50-74 = INVITED; 40-49 & 75+ = eligible but must phone; symptomatic = TRIPLE test not screen.",
   "viva": "- BreastScreen invites asymptomatic women **50-74** for 2-yearly mammography; **40-49 and 75+** can self-refer\n- A **palpable lump** needs the triple test — clinical exam, imaging and tissue — even if her screening mammogram was recently normal",
   "source": "Australian Government Dept of Health (BreastScreen Australia); Cancer Council Australia breast screening",
   "tags": [
    "screening",
    "BreastScreen",
    "mammography",
    "breast cancer",
    "triple test"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Age</th><th>Status</th></tr><tr><td>40-49</td><td>Eligible, NOT invited (self-refer)</td></tr><tr><td><span class=\"gv-num\">50-74</span></td><td>INVITED, free 2-yearly mammogram</td></tr><tr><td>75+</td><td>Eligible, NOT invited (self-refer)</td></tr></table>",
   "title": "Australian BreastScreen program",
   "subtitle": "the 50-74 invite vs the 40-49 / 75+ 'eligible but not invited' trap",
   "id": "oncology-9",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Mammogram_showing_cancer.jpg/960px-Mammogram_showing_cancer.jpg",
     "caption": "Screening mammogram - BreastScreen Australia - spiculated mass (breast cancer)",
     "alt": "Craniocaudal and mediolateral oblique mammogram views showing a spiculated irregular mass consistent with invasive breast carcinoma found on screening",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Australian National Bowel Cancer Screening Program (NBCSP) - iFOBT cut-offs, the 45 vs 50 nuance, and the colonoscopy trigger",
   "subarea": "Cancer principles & screening",
   "trap": "- Since **1 July 2024** the program start age dropped from 50 to **45** — but two age bands are accessed differently:\n  - Ages **45-49**: NOT automatically invited — must **REQUEST their first kit** (then auto-invited thereafter)\n  - Ages **50-74**: automatically **mailed a kit every 2 years**\n- Test = **immunochemical FOBT (iFOBT)**, **biennial** (every 2 years)\n- A **positive iFOBT** means **COLONOSCOPY** (target within **30 days**) — NOT a repeat FOBT\n- Program is for **ASYMPTOMATIC AVERAGE-RISK** people only",
   "whatFirst": "- **Symptomatic patient** (rectal bleeding, change in bowel habit, iron-deficiency anaemia) -> do NOT use the screening iFOBT\n- Refer for **colonoscopy directly**\n- Screening tests are for **asymptomatic people**",
   "discriminator": "- **Average risk** (general population) = NBCSP iFOBT from **45/50-74**\n- **Moderate/high risk** (strong family history, known polyposis/Lynch, IBD) = **colonoscopy-based surveillance** on a different schedule — not the mailed kit\n- A **positive iFOBT** in an asymptomatic person still needs **colonoscopy**, not reassurance",
   "redFlags": "- **Iron-deficiency anaemia** in a man or post-menopausal woman\n- **Rectal bleeding**\n- **Change in bowel habit** >6 weeks\n- **Positive iFOBT** = colonoscopy referral",
   "mcqTrap": "- Tempting wrong answer: **'repeat the iFOBT'** after a positive result — wrong; positive screen -> colonoscopy\n- Also: **'a 47-year-old is too young / not eligible'** — 45-49 ARE eligible but must request the kit",
   "mnemonic": "45 = ASK for it; 50 = SENT to you; positive = SCOPE (not re-test).",
   "viva": "- For asymptomatic average-risk patients: recommend biennial **iFOBT**\n  - **45-49** request the kit; **50-74** are auto-invited\n- A **positive result** means colonoscopy within about **30 days**, not a repeat test\n- A 60-year-old with **iron-deficiency anaemia** is symptomatic — screening doesn't apply; refer for colonoscopy",
   "source": "Australian Government Dept of Health (NBCSP, age lowered to 45 from 1 July 2024); Cancer Council Australia colorectal screening guidelines (2023 population-screening revision)",
   "tags": [
    "screening",
    "NBCSP",
    "iFOBT",
    "bowel cancer",
    "colonoscopy"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Age</th><th>Access</th><th>Test</th></tr><tr><td><span class=\"gv-num\">45-49</span></td><td>REQUEST first kit</td><td>iFOBT every 2 yr</td></tr><tr><td><span class=\"gv-num\">50-74</span></td><td>Auto mailed kit</td><td>iFOBT every 2 yr</td></tr><tr><td>Positive iFOBT</td><td colspan=\"2\">Colonoscopy (target &lt;<span class=\"gv-num\">30 days</span>)</td></tr></table>",
   "title": "Australian National Bowel Cancer Screening Program (NBCSP)",
   "subtitle": "iFOBT cut-offs, the 45 vs 50 nuance, and the colonoscopy trigger",
   "id": "oncology-10",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/2/21/Tubulovillous_Polyp_of_the_Colon_1.jpg",
     "caption": "Colonoscopy - pedunculated colonic polyp (adenoma)",
     "alt": "Colonoscopic view of a pedunculated adenomatous polyp in the colon - the lesion that iFOBT-positive patients are investigated for",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Colorectal_cancer_endo_2.jpg",
     "caption": "Colorectal cancer - colonoscopy showing annular/apple-core lesion",
     "alt": "Colonoscopic view of an obstructing annular colorectal carcinoma",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Australian National Cervical Screening Program (NCSP) - HPV primary test 25-74, 5-yearly, and universal self-collection",
   "subarea": "Cancer principles & screening",
   "trap": "- Since **Dec 2017**: primary **HPV test** (not a Pap/cytology)\n- Start at age **25** (not 18-20), every **5 years** (not 2), continue to **74** with an **exit test at 70-74**\n- Since **1 July 2022**: **self-collection** (own vaginal swab) available to EVERYONE eligible — same accuracy for the primary HPV test\n- **Reflex liquid-based cytology** is only done by the lab IF oncogenic HPV is detected\n- First test due at **25**, OR **2 years after the last Pap test** if transitioning",
   "whatFirst": "- If **HPV 16/18** detected -> refer for **COLPOSCOPY** (regardless of cytology)\n- If **non-16/18 oncogenic HPV** detected -> reflex cytology decides:\n  - High-grade -> **colposcopy**\n  - Low-grade/negative -> **repeat HPV test in 12 months**\n- **Symptomatic** (abnormal bleeding, postcoital, intermenstrual) -> investigate; do NOT rely on screening",
   "discriminator": "- **HPV 16/18** = straight to colposcopy\n- **Non-16/18 oncogenic HPV** = triaged by reflex cytology\n- **Self-collected sample** is valid for the HPV test but if HPV positive a **clinician-collected sample** is needed for cytology\n  - Cannot do cytology on the self-collected swab in most pathways",
   "redFlags": "- **Postcoital, intermenstrual or postmenopausal bleeding**\n- **Visible cervical lesion** = clinical assessment/colposcopy regardless of screening status",
   "mcqTrap": "- Tempting wrong answer: **'do a Pap smear every 2 years from age 18/20'** — that's the OLD pre-2017 program\n- Also wrong: **'self-collection is less accurate / only for under-screened women'** — self-collection is now universal and equally accurate for HPV",
   "mnemonic": "25 to 74, every 5; HPV first, cytology only if HPV+; 16/18 = colposcopy now.",
   "viva": "- Australia uses a primary **HPV test from 25 to 74**, every **5 years**, with **self-collection available to everyone**\n- **HPV 16 or 18** found -> refer straight to colposcopy\n- **Other oncogenic HPV types** -> reflex cytology decides: colposcopy or **12-month repeat**\n- Woman with **postcoital bleeding** needs assessment now, independent of screening",
   "source": "Australian Government Dept of Health / National Cervical Screening Program; Cancer Council Australia / ACPCC NCSP clinical guidelines (current); self-collection universal since 1 July 2022",
   "tags": [
    "screening",
    "NCSP",
    "HPV",
    "cervical cancer",
    "self-collection"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">HPV test (age 25-74, q5y; self-collect OK)</div><div class=\"gv-step\">HPV 16/18 -> colposcopy</div><div class=\"gv-step\">Other oncogenic HPV -> reflex cytology</div><div class=\"gv-step\">HPV negative -> rescreen in 5 yr</div></div>",
   "title": "Australian National Cervical Screening Program (NCSP)",
   "subtitle": "HPV primary test 25-74, 5-yearly, and universal self-collection",
   "id": "oncology-11",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/b/bc/VIAPosCIN1.gif",
     "caption": "Colposcopy with aceto-white change - CIN / cervical dysplasia",
     "alt": "Colposcopic image after acetic acid application showing dense aceto-white area at the cervical transformation zone indicating high-grade CIN (the lesion detected downstream of a positive HPV primary screen)",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Cancer referral RED FLAGS - the symptoms that mandate urgent work-up regardless of a normal screen",
   "subarea": "Cancer principles & screening",
   "trap": "- The single biggest exam trap: using a **screening test** (or a recent normal screen) for a **SYMPTOMATIC patient**\n  - Screening is for the asymptomatic — any red-flag symptom needs a **DIAGNOSTIC pathway**\n- Key Australian red flags by site:\n  - **Unexplained weight loss** / night sweats / new lump\n  - **Iron-deficiency anaemia** (esp. men/postmenopausal women) -> GI work-up\n  - **Rectal bleeding** or change in bowel habit\n  - **Postmenopausal, postcoital or intermenstrual bleeding**\n  - **Haematuria** (visible, painless) -> urology\n  - **Persistent cough/haemoptysis** in a smoker\n  - **Dysphagia**\n  - **Jaundice**\n  - **New bone pain**\n  - **Breast lump**/nipple change/skin tethering\n  - **Unexplained lymphadenopathy**",
   "whatFirst": "- **Red-flag symptom** -> diagnostic referral/imaging now\n- Do NOT reassure on the basis of a normal screening test\n- **Painless visible haematuria**, **dysphagia**, and a **breast lump** are 'refer regardless' flags",
   "discriminator": "- **Screening** (asymptomatic, programmatic) vs **diagnostic assessment** (symptomatic)\n- A normal screening mammogram/iFOBT/HPV does **NOT exclude cancer** in a person with symptoms\n  - The false-negative rate is real and the lesion may be **interval/new**",
   "redFlags": "- **Visible painless haematuria**\n- **Dysphagia**\n- **Haemoptysis**\n- **Postmenopausal bleeding**\n- **Iron-deficiency anaemia**\n- **Unexplained weight loss**\n- **Hard fixed lymph node**\n- **Breast lump** = urgent referral",
   "mcqTrap": "- Tempting wrong answer: **'reassure and rescreen at the routine interval'** for a patient with new red-flag symptoms and a recently normal screen\n  - **Symptoms override screening** — investigate",
   "mnemonic": "Bleed from anywhere unexplained + Lump + Lose weight + Anaemia (iron) = think CANCER, refer now.",
   "viva": "- Screening is only for **asymptomatic** people\n- This patient has a red flag — **painless visible haematuria / postmenopausal bleeding / iron-deficiency anaemia**\n- Refer for **diagnostic work-up urgently**\n- Do not rely on the recent **normal screening result**",
   "source": "Cancer Council Australia / Cancer Australia Optimal Care Pathways; RACGP red-flag guidance (current)",
   "tags": [
    "referral",
    "red flags",
    "weight loss",
    "haematuria",
    "anaemia"
   ],
   "verified": false,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Red flag</th><th>Think / refer</th></tr><tr><td>Iron-deficiency anaemia (man/postmenopausal)</td><td>GI malignancy -> scopes</td></tr><tr><td>Painless visible haematuria</td><td>Urological cancer -> CT urogram + cystoscopy</td></tr><tr><td>Postmenopausal / postcoital bleeding</td><td>Endometrial/cervical -> gynae</td></tr><tr><td>Persistent cough / haemoptysis (smoker)</td><td>Lung cancer -> CT chest</td></tr><tr><td>Dysphagia, jaundice, new bone pain</td><td>Upper GI / pancreatic / mets</td></tr></table>",
   "title": "Cancer referral RED FLAGS",
   "subtitle": "the symptoms that mandate urgent work-up regardless of a normal screen",
   "id": "oncology-12",
   "images": [
    {
     "src": "assets/img/dermatology_pigmented_lesion_melanoma_01.jpg",
     "caption": "Malignant melanoma - asymmetric pigmented lesion with irregular border and variegated colour",
     "alt": "Asymmetric, irregularly bordered, multicoloured pigmented lesion (malignant melanoma) - key red flag skin lesion",
     "credit": "Dermanonymous, Wikimedia Commons, CC BY-SA 4.0 (cropped to centre on the lesion, removing margin-marker dots)"
    },
    {
     "src": "assets/img/dermatology_derm_paget_nipple_01.jpg",
     "caption": "Paget disease of the nipple - eczematous eroded nipple-areola complex",
     "alt": "Unilateral eczematous, scaling and eroded change of the nipple and areola - red flag breast lesion that must not be treated as simple eczema",
     "credit": "Lily Chu, National Naval Medical Center Bethesda, Wikimedia Commons, Public domain (PD US Navy)"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Colorectal_cancer_endo_2.jpg",
     "caption": "Rectal cancer - fresh blood PR / colonoscopy",
     "alt": "Colonoscopic view of a rectal carcinoma - representing the red flag of rectal bleeding or change in bowel habit requiring urgent diagnostic work-up",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Febrile neutropenia - the definition cut-offs and the 'antibiotics within 60 minutes' rule (oncological emergency)",
   "subarea": "Cancer principles & screening",
   "trap": "- Most time-critical oncology emergency; key numbers:\n  - **Neutropenia** = ANC **<0.5 x10^9/L**\n  - **Fever** = single temp **>=38.3°C** OR **>=38.0°C** sustained over ~1 hour\n- Timing rule (eviQ):\n  - **Broad-spectrum IV antibiotics within 30 minutes** if systemically compromised (hypotension, hypoxia, confusion, organ dysfunction)\n  - **Within 60 minutes** if clinically stable\n  - Take cultures but do **NOT wait** for results\n- First-line empirical agent in Australia: **piperacillin-tazobactam 4.5 g IV q6h**\n  - Cefepime 2 g IV q8h if penicillin issue\n- Add **vancomycin ONLY** for specific indications:\n  - line sepsis\n  - MRSA risk\n  - shock\n  - mucositis\n  - NOT routinely",
   "whatFirst": "- Suspected febrile neutropenia -> **cultures** (peripheral + each lumen of any central line)\n- Then **IV broad-spectrum antibiotic** (within **30 min** if unwell, **60 min** if stable)\n- Do NOT delay antibiotics for **FBC result or imaging**\n- **Resuscitate per sepsis**",
   "discriminator": "- Do not be reassured by a **normal-looking patient** or absent localising signs — neutropenic patients mount little inflammatory response; fever may be the **ONLY sign**\n- **Avoid PR exams/suppositories** (translocation risk)\n- **MASCC score** risk-stratifies for possible oral/outpatient management — but default for unwell or uncertain is **IV in hospital**",
   "redFlags": "- **Hypotension**\n- **Lactate rise**\n- **Altered conscious state**\n- **Rigors during line flush** = septic shock -> escalate, ICU review, antibiotics within **30 min**",
   "mcqTrap": "- Tempting wrong answer: **'wait for blood culture / FBC result before starting antibiotics'** or **'give oral antibiotics and review tomorrow'**\n- Also: quoting fever cut-off as **38.5°C** — eviQ uses **>=38.3°C** once (or **>=38.0°C** sustained 1 h)\n- The intervention is **empirical IV broad-spectrum antibiotics, urgently**",
   "mnemonic": "38.3 + 0.5, antibiotics in 60 (or 30 if shocked) - temp 38.3C, ANC 0.5, pip-tazo fast.",
   "viva": "- ISBAR out loud: 'I'm calling about a patient **day 10 post-chemo**, febrile at **38.6** with a neutrophil count of **0.3**'\n- Treating **febrile neutropenia**\n- Taken **blood cultures** and started **IV piperacillin-tazobactam within the hour**\n- Request **senior/oncology review** and sepsis monitoring",
   "source": "eviQ (Cancer Institute NSW) 'Immediate management of neutropenic fever' (current); eTG (Therapeutic Guidelines, current) - febrile neutropenia",
   "tags": [
    "oncological emergency",
    "febrile neutropenia",
    "sepsis",
    "neutropenia",
    "antibiotics"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Criterion</th><th>Cut-off</th></tr><tr><td>Neutropenia (ANC)</td><td>&lt; <span class=\"gv-num\">0.5</span> x10^9/L</td></tr><tr><td>Fever</td><td>>= <span class=\"gv-num\">38.3C</span> once, or >= <span class=\"gv-num\">38.0C</span> sustained 1 h</td></tr><tr><td>Antibiotics</td><td><span class=\"gv-num\">30 min</span> if unstable, <span class=\"gv-num\">60 min</span> if stable; empirical IV</td></tr><tr><td>First-line</td><td>Piperacillin-tazobactam <span class=\"gv-num\">4.5 g</span> IV q6h</td></tr></table>",
   "title": "Febrile neutropenia",
   "subtitle": "the definition cut-offs and the 'antibiotics within 60 minutes' rule (oncological emergency)",
   "id": "oncology-13"
  },
  {
   "topic": "Immunotherapy (immune checkpoint inhibitor) immune-related adverse events - grade-based hold/steroid/discontinue thresholds",
   "subarea": "Cancer principles & screening",
   "trap": "- irAEs are **NOT dose-related** and NOT immediate\n- Can appear **weeks to months** after the drug\n- Can occur **after the ICI has been stopped**\n- Grade-based management rule:\n  - **Grade 1** = continue ICI + monitor\n  - **Grade 2** = HOLD ICI + start **prednis(ol)one 0.5–1 mg/kg/day**; resume when back to ≤grade 1 and steroid tapered to ≤10 mg/day\n  - **Grade 3** = HOLD + **high-dose steroid 1–2 mg/kg/day** (IV methylprednisolone if severe); if no response in **48–72 h** escalate to second-line immunosuppression (infliximab for colitis, mycophenolate for hepatitis)\n  - **Grade 4** (and ANY grade myocarditis) = **PERMANENTLY DISCONTINUE**\n- Key discriminator vs ordinary chemo toxicity: irAE looks like **autoimmune organ inflammation** (colitis, hepatitis, pneumonitis, hypophysitis, thyroiditis, myocarditis), treated with STEROIDS not dose reduction\n- Endocrinopathies (hypophysitis, primary hypothyroidism, adrenal insufficiency, T1DM) are usually **IRREVERSIBLE**\n  - Give **lifelong hormone replacement**\n  - ICI can often **continue** because hormone replacement controls it",
   "whatFirst": "- Suspected irAE: **grade the severity** first\n- Exclude **infection/progression**\n- For anything ≥ grade 2: **HOLD the ICI** and start corticosteroid — do not just observe\n- **Myocarditis/neuro/severe pneumonitis** = treat as emergency: admit, IV methylprednisolone, permanent cessation",
   "discriminator": "- ICI colitis vs infective colitis: both cause diarrhoea, but ICI colitis responds to **steroids** (and infliximab if refractory)\n  - Stool cultures/C. diff are **negative** in ICI colitis\n  - Never give steroids until **infection excluded**\n- ICI hypophysitis (low ACTH/TSH/gonadotrophins, headache, fatigue) vs sepsis:\n  - Check a **9am cortisol**\n  - Treat adrenal crisis with **hydrocortisone BEFORE thyroxine** to avoid precipitating crisis",
   "redFlags": "- **Myocarditis** (troponin rise, arrhythmia, new heart failure on an ICI) = highest-mortality irAE → emergency, permanent discontinuation, high-dose steroids\n- New **dyspnoea/cough** = pneumonitis until proven otherwise\n- New **severe diarrhoea/abdo pain** = colitis (risk of perforation)",
   "mcqTrap": "- Tempting wrong answer: **'reduce the immunotherapy dose'** or 'give an anti-diarrhoeal and continue'\n- irAEs are NOT managed by dose reduction (unlike cytotoxic chemo)\n- Management is **HOLD + corticosteroids**\n- Loperamide alone can **mask worsening colitis/perforation**",
   "mnemonic": "STEROIDS not dose-cut; 'itis' everywhere; Myocarditis = Must stop forever.",
   "viva": "- 'This patient on pembrolizumab with new diarrhoea has **immune-mediated colitis** until proven otherwise'\n- Exclude infection with stool cultures and C. diff\n- **Grade the toxicity** using CTCAE\n- **Hold the checkpoint inhibitor**\n- For grade 2 or above: start **prednisolone 1 mg/kg**\n- If no response in **48–72 hours**: escalate to infliximab and involve the treating oncologist",
   "source": "eviQ (Cancer Institute NSW) immune checkpoint inhibitor toxicity management (current; aligns with ASCO/SITC consensus); Australian Prescriber 'Immune checkpoint inhibitors and immune-related adverse events' (mechanism/timing); CTCAE v5",
   "tags": [
    "immunotherapy",
    "irAE",
    "checkpoint inhibitor",
    "oncological emergency"
   ],
   "verified": false,
   "visualHtml": "<table class=\"gv-table\"><tr><th>CTCAE grade</th><th>ICI</th><th>Treatment</th></tr><tr><td>Grade 1</td><td>Continue</td><td>Monitor only</td></tr><tr><td>Grade 2</td><td>HOLD</td><td>Prednisolone <span class=\"gv-num\">0.5-1 mg/kg/day</span>; resume when <=G1 &amp; steroid <=<span class=\"gv-num\">10 mg/day</span></td></tr><tr><td>Grade 3</td><td>HOLD</td><td>Methylpred <span class=\"gv-num\">1-2 mg/kg/day</span>; if no response in <span class=\"gv-num\">48-72 h</span> -> infliximab/MMF</td></tr><tr><td>Grade 4 or any myocarditis</td><td>STOP permanently</td><td>High-dose IV steroid, admit</td></tr></table>",
   "title": "Immunotherapy (immune checkpoint inhibitor) immune-related adverse events…",
   "id": "oncology-14"
  },
  {
   "topic": "Immunotherapy irAE - onset timing and the combination-ICI risk multiplier",
   "subarea": "Cancer principles & screening",
   "trap": "- Exam loves the **TIMING pattern** of irAEs:\n  - **Skin** (rash/pruritus) = earliest, **2–5 weeks**\n  - **Colitis/hepatitis** = 6–15 weeks\n  - **Endocrinopathies** = later\n  - irAEs can be **delayed for months-to-years**, including after stopping the drug\n    - Up to ~**35%** still experiencing an irAE a year after completing ICI\n- **Combination ipilimumab + nivolumab** gives MUCH higher and earlier irAE rates than PD-1/PD-L1 monotherapy\n- **Anti-CTLA-4 (ipilimumab)** is the biggest driver of colitis and hypophysitis",
   "whatFirst": "- Any new symptom in a patient on (or **recently on**) an ICI → first **reframe it as a possible irAE**, not an unrelated medical problem\n- Take a **drug history including a drug stopped months ago**",
   "discriminator": "- **PD-1/PD-L1 agents** (nivolumab, pembrolizumab, atezolizumab, durvalumab) → more **pneumonitis and thyroid disease**\n- **CTLA-4 (ipilimumab)** → more **colitis and hypophysitis**\n- **Combination** = additive/earlier toxicity",
   "redFlags": "- A patient who **finished immunotherapy 6 months ago** presenting with adrenal insufficiency or pneumonitis\n  - The **link is easily missed** because the drug was stopped",
   "mcqTrap": "- Tempting wrong answer: **ruling out an irAE** because 'the immunotherapy was stopped weeks/months ago'\n- irAEs can be **delayed and occur after cessation**",
   "mnemonic": "Skin SOONest, gut/liver next, glands last, but ALL can be late. CTLA-4 = Colitis; PD-1 = Pneumonitis/thyroid.",
   "viva": "- 'Onset of irAEs is variable — **skin first**, then colitis and hepatitis, then endocrine effects'\n- They can be **delayed even after the drug is ceased**\n- Always ask about **recent or recently-ceased immunotherapy** in anyone with new organ inflammation",
   "source": "Australian Prescriber 'Immune checkpoint inhibitors and immune-related adverse events' (current); eviQ checkpoint inhibitor toxicity management",
   "tags": [
    "immunotherapy",
    "irAE",
    "timing",
    "ipilimumab",
    "nivolumab"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Skin (rash, pruritus) 2-5 wk</div><div class=\"gv-step\">Colitis / hepatitis 6-15 wk</div><div class=\"gv-step\">Endocrine (thyroid, hypophysitis) later</div><div class=\"gv-step\">Can be DELAYED months-years, even after stopping</div></div>",
   "title": "Immunotherapy irAE",
   "subtitle": "onset timing and the combination-ICI risk multiplier",
   "id": "oncology-15"
  },
  {
   "topic": "Malignant spinal cord compression & malignant hypercalcaemia - the emergency numbers (oncology principles)",
   "subarea": "Cancer principles & screening",
   "trap": "- Two emergencies with **exam-favourite figures**:\n- **(1) Malignant Spinal Cord Compression (MSCC):**\n  - Give **dexamethasone 16 mg/day immediately** on clinical suspicion — do NOT wait for imaging\n  - Arrange **urgent whole-spine MRI within 24 hours**\n  - Refer for definitive treatment (radiotherapy ± surgery)\n  - **Neurological function at presentation** predicts recovery → motor/sensory level + bladder/bowel assessed NOW\n- **(2) Hypercalcaemia of malignancy:**\n  - Rehydrate with **IV 0.9% saline FIRST** (several litres/24h)\n  - Then **IV bisphosphonate (zoledronic acid 4 mg over ~15 min)**\n  - Calcium nadir/maximal effect takes **5–7 days** (onset ~2–4 days)\n  - **AVOID routine frusemide**\n  - Use **corrected calcium** = measured Ca + 0.02 × (40 − albumin g/L)\n    - Approximately **+0.2 mmol/L per 10 g/L albumin drop**",
   "whatFirst": "- **MSCC:** dexamethasone + urgent MRI whole spine within 24 h + lie flat/spinal precautions + oncology/radiation-onc/neurosurg referral\n- **Hypercalcaemia:** IV saline first, THEN zoledronic acid\n  - **Never bisphosphonate before rehydration**",
   "discriminator": "- **MSCC back pain** = often thoracic, worse lying/at night, with a sensory level and UMN signs below the lesion\n  - Distinguish from **mechanical back pain** (no neuro signs, no red flags)\n- **Malignant hypercalcaemia (PTHrP)** = suppressed PTH, acute presentation\n- **Primary hyperparathyroidism** = high PTH, chronic, milder",
   "redFlags": "- New **leg weakness, sensory level, urinary retention/incontinence or saddle anaesthesia** in a cancer patient = MSCC until excluded — emergency\n- **Corrected Ca > 3.5 mmol/L** or drowsy/arrhythmic = emergency",
   "mcqTrap": "- **MSCC trap:** 'arrange outpatient MRI' or 'wait for imaging before steroids'\n  - Give **dexamethasone now** and MRI within 24 h\n- **Hypercalcaemia trap:** 'give the bisphosphonate first' or 'add frusemide'\n  - **Rehydrate with saline first**; frusemide is not routine",
   "mnemonic": "MSCC: Dex 16, MRI in 24, treat the spine. HyperCa: Salt before the drip-drug (saline then zoledronate).",
   "viva": "- 'A cancer patient with new back pain and leg weakness has **cord compression until proven otherwise**'\n- Give **dexamethasone 16 mg**, arrange urgent whole-spine MRI within 24 hours\n- Refer for radiotherapy or surgery\n- **Function at presentation determines recovery**",
   "source": "eviQ (Cancer Institute NSW) oncological emergencies - MSCC & hypercalcaemia of malignancy (zoledronic acid); eTG (current)",
   "tags": [
    "oncological emergency",
    "spinal cord compression",
    "hypercalcaemia",
    "dexamethasone",
    "zoledronic acid"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Emergency</th><th>Step 1</th><th>Step 2</th></tr><tr><td>Spinal cord compression</td><td>Dexamethasone <span class=\"gv-num\">16 mg</span> now</td><td>MRI whole spine &lt;<span class=\"gv-num\">24 h</span> + RT/surgery</td></tr><tr><td>Malignant hypercalcaemia</td><td>IV 0.9% saline (rehydrate)</td><td>Zoledronic acid <span class=\"gv-num\">4 mg</span> over 15 min</td></tr></table>",
   "title": "Malignant spinal cord compression & malignant hypercalcaemia",
   "subtitle": "the emergency numbers (oncology principles)",
   "id": "oncology-16"
  },
  {
   "topic": "Palliative symptom-control prescribing - opioid conversions, the breakthrough rule, and opioid-induced toxicity (high-yield numbers)",
   "subarea": "Cancer principles & screening",
   "trap": "- Oral-to-subcut **morphine ~2:1** (oral dose ÷ 2 = subcut/24h via syringe driver)\n- Oral morphine to oral **oxycodone ~1.5:1**\n- **Breakthrough (PRN) dose = 1/10 to 1/6** of total 24-hour oral opioid dose\n  - 1/6 is the classic teaching figure; some Australian charts use 1/10–1/12\n  - Given ~hourly-to-4-hourly PRN\n- When **rotating opioids for toxicity**: reduce calculated equivalent dose by **~25–50%** for incomplete cross-tolerance\n- In **renal impairment**: AVOID morphine (active metabolite **M6G accumulates** → neurotoxicity)\n  - Use **hydromorphone or fentanyl**\n- Always co-prescribe a **regular laxative** (no tolerance develops to opioid constipation)\n- Always co-prescribe an **as-needed antiemetic**",
   "whatFirst": "- New cancer pain on stable background opioid → calculate the **24-hour total**, set breakthrough at 1/10–1/6, and titrate\n- **Opioid toxicity** (drowsiness, myoclonus, pinpoint pupils, confusion, RR depression) → reduce/rotate opioid, ensure hydration, treat reversible causes\n- **Naloxone ONLY** if life-threatening respiratory depression\n  - Use **small titrated doses** to avoid acute pain/withdrawal",
   "discriminator": "- **Opioid toxicity/neurotoxicity** (myoclonus, hyperalgesia, delirium — often with renal decline or dehydration) vs disease progression\n  - Former improves with **dose reduction/rotation + hydration**\n- **Terminal delirium** vs reversible delirium (opioids, hypercalcaemia, sepsis, urinary retention)\n  - Look for the **reversible cause first**",
   "redFlags": "- **RR < 8 with reduced consciousness** = significant opioid-induced respiratory depression → titrated naloxone\n- **Persistent myoclonus/agitation** on rising opioid = neurotoxicity → rotate and reduce",
   "mcqTrap": "- Tempting wrong answer: 'continue full-dose morphine' in a patient with **rising creatinine and myoclonus**\n  - Morphine metabolites accumulate — **switch to fentanyl/hydromorphone**\n- Giving a **full naloxone ampoule** — precipitates severe pain/withdrawal; use small titrated doses\n- **Forgetting the regular laxative**",
   "mnemonic": "Breakthrough ~1/10-1/6; oral->subcut morphine HALVE; rotate = drop 25-50%; renal = ditch morphine.",
   "viva": "- 'Total the 24-hour oral morphine, set the **breakthrough dose at one-sixth** given PRN, always co-prescribe a regular laxative'\n- If drowsy with **myoclonus as renal function drops** = opioid neurotoxicity\n- Switch from morphine to **hydromorphone or fentanyl**\n- Reduce dose for **incomplete cross-tolerance**",
   "source": "eTG Palliative Care (Therapeutic Guidelines, current) - opioid analgesia & symptom management; CareSearch / Australian palliative care opioid conversion charts",
   "tags": [
    "palliative",
    "opioid",
    "breakthrough dose",
    "opioid rotation",
    "renal impairment"
   ],
   "verified": false,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Rule</th><th>Figure</th></tr><tr><td>Breakthrough (PRN) dose</td><td><span class=\"gv-num\">1/10-1/6</span> of 24-h oral total</td></tr><tr><td>Oral -> subcut morphine</td><td>divide by <span class=\"gv-num\">2</span></td></tr><tr><td>Oral morphine -> oral oxycodone</td><td>approx <span class=\"gv-num\">1.5:1</span></td></tr><tr><td>Opioid rotation</td><td>reduce equivalent by <span class=\"gv-num\">25-50%</span></td></tr><tr><td>Renal impairment</td><td>avoid morphine -> fentanyl/hydromorphone</td></tr></table>",
   "title": "Palliative symptom-control prescribing",
   "subtitle": "opioid conversions, the breakthrough rule, and opioid-induced toxicity (high-yield numbers)",
   "id": "oncology-17"
  },
  {
   "topic": "Paraneoplastic syndromes - SIADH vs hypercalcaemia (the two most-tested) and the cancers behind them",
   "subarea": "Cancer principles & screening",
   "trap": "- Match the **biochemistry to the tumour**, not just the symptom\n- **SCLC** (small cell lung) = classic cause of BOTH:\n  - **SIADH** (ectopic ADH → euvolaemic HYPOnatraemia, low serum osmolality, inappropriately high urine osmolality >100 and urine Na >30)\n  - **Ectopic ACTH** (Cushing's)\n- **HYPERcalcaemia of malignancy** = most often **squamous cell carcinoma** (lung, head & neck) via PTHrP\n  - With **SUPPRESSED PTH** (the discriminator from primary hyperparathyroidism)\n- **Lambert-Eaton myasthenic syndrome (LEMS)**:\n  - Proximal weakness that **IMPROVES with repeated effort**, areflexia, autonomic features\n  - = SCLC, **anti-VGCC antibodies**\n  - Distinguish from **myasthenia gravis** which WORSENS with effort",
   "whatFirst": "- New paraneoplastic syndrome in a **smoker** → investigate for underlying (often occult) malignancy, classically **SCLC**\n- Treating the **cancer** treats the syndrome\n- Paraneoplastic effect is NOT due to **local tumour spread**",
   "discriminator": "- **Malignant hypercalcaemia (PTHrP)** = PTH SUPPRESSED, often acute/symptomatic, high calcium\n- **Primary hyperparathyroidism** = PTH high/inappropriately normal, chronic, milder\n- **SIADH** = euvolaemic with concentrated urine despite hyponatraemia\n  - Differentiate from hypovolaemic (dry, urine Na <20) and hypervolaemic (oedema) hyponatraemia\n- **LEMS improves with use**; MG fatigues with use",
   "redFlags": "- **Severe symptomatic hyponatraemia** (seizure, GCS drop) = emergency\n- **Corrected calcium > 3.5 mmol/L** (or symptomatic) = emergency",
   "mcqTrap": "- Tempting wrong answer for malignant hypercalcaemia: 'measure and treat as **primary hyperparathyroidism**'\n- In malignancy **PTH is SUPPRESSED** (PTHrP-driven)\n- A high/normal PTH **points away from cancer**",
   "mnemonic": "Squamous Sucks calcium up (PTHrP); Small cell Soaks up water (SIADH) and makes ACTH; LEMS Lifts with effort.",
   "viva": "- 'In a smoker with euvolaemic hyponatraemia, concentrated urine and low serum osmolality, I'd suspect **SIADH from small cell lung cancer** and image the chest'\n- In hypercalcaemia: check **PTH** — a suppressed PTH with high calcium points to **PTHrP-mediated malignant hypercalcaemia**, usually squamous cell",
   "source": "eTG (Therapeutic Guidelines, current) endocrine/oncology; Cancer Council Australia / Cancer Australia clinical resources; eviQ oncological emergencies",
   "tags": [
    "paraneoplastic",
    "SIADH",
    "hypercalcaemia",
    "SCLC",
    "LEMS"
   ],
   "verified": false,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Paraneoplastic</th><th>Tumour</th><th>Catch</th></tr><tr><td>SIADH (euvolaemic hypoNa)</td><td>Small cell lung</td><td>Urine osmol &gt;<span class=\"gv-num\">100</span>, urine Na &gt;<span class=\"gv-num\">30</span></td></tr><tr><td>Ectopic ACTH (Cushing)</td><td>Small cell lung</td><td>Hypokalaemic alkalosis, hyperpigment</td></tr><tr><td>Hypercalcaemia (PTHrP)</td><td>Squamous (lung, H&amp;N)</td><td>PTH SUPPRESSED</td></tr><tr><td>LEMS</td><td>Small cell lung</td><td>Improves with effort (anti-VGCC)</td></tr></table>",
   "title": "Paraneoplastic syndromes",
   "subtitle": "SIADH vs hypercalcaemia (the two most-tested) and the cancers behind them",
   "id": "oncology-18"
  },
  {
   "topic": "PSA testing in Australia - no NHMRC-approved population program, shared decision-making, and the draft 2025 shift",
   "subarea": "Cancer principles & screening",
   "trap": "- There is **NO NHMRC-approved population PSA screening program** (unlike bowel/breast/cervical) — because of overdiagnosis/overtreatment\n- The **expired 2016 guidelines** said: offer PSA only after shared decision-making; if average risk and opts in, PSA every **2 years from 50–69**\n- The **draft 2025 PCFA/Cancer Council guidelines** (NHMRC approval pending):\n  - Strong recommendation for GPs to **OFFER 2-yearly PSA** to all men aged 50–69\n  - Plus a **baseline PSA at age 40** to risk-stratify\n  - PSA from **40 (2-yearly) for higher-risk/Aboriginal and Torres Strait Islander men**\n  - Drops **routine DRE** in primary care in favour of **mpMRI before biopsy**\n- PSA is **NOT cancer-specific** — rises with BPH, prostatitis, UTI, recent ejaculation, DRE and instrumentation",
   "whatFirst": "- Before any PSA in an asymptomatic man: have the **benefits/harms conversation** (overdiagnosis → biopsy complications, treatment-related incontinence/erectile dysfunction)\n- A raised PSA → **repeat to confirm** + arrange **mpMRI before deciding on biopsy** (modern pathway)\n  - Not automatic immediate biopsy",
   "discriminator": "- **Screening** (asymptomatic, shared decision/offer, opportunistic) vs **investigating symptoms** (LUTS, bone pain, weight loss → investigate regardless)\n- **Benign PSA rise** (BPH/prostatitis/recent ejaculation) vs cancer\n  - Avoid testing within **~48 h of ejaculation/DRE/cycling**\n  - Treat and recheck if infection suspected",
   "redFlags": "- **Bone pain**, very high PSA, hard craggy nodular prostate on DRE, obstructive renal failure → urgent **urology referral** for likely advanced disease",
   "mcqTrap": "- Tempting wrong answer: **'a normal PSA excludes prostate cancer'** — it does not\n- Treating PSA as a **mandated mailed-out population program** like bowel/breast/cervical — it is NOT; testing is offered/opt-in after discussion\n- **'Do a DRE first to decide on PSA'** — draft 2025 guidance no longer recommends routine primary-care DRE, favouring **mpMRI before biopsy**",
   "mnemonic": "No mailed program - it's OFFERED; 50-69 every 2 yr; 2025 draft adds baseline PSA at 40; PSA isn't cancer-specific.",
   "viva": "- 'Australia has **no NHMRC-approved population PSA program** because of overdiagnosis'\n- Have a **shared-decision conversation** about benefits and harms\n- For an average-risk man who opts in: **PSA every 2 years from 50 to 69**\n- Draft 2025 guidelines now also support offering a **baseline PSA at 40**\n- A raised PSA: **confirm on repeat** and arrange **MRI before any biopsy**",
   "source": "Cancer Council Australia / PCFA PSA Testing guidelines (2016, expired 2021) and DRAFT 2025 Early Detection of Prostate Cancer guidelines (PCFA/Cancer Council, NHMRC approval pending); RACGP Red Book",
   "tags": [
    "screening",
    "PSA",
    "prostate cancer",
    "shared decision",
    "overdiagnosis"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">No mailed population program</span><span class=\"gv-pill\">Offer + shared decision</span><span class=\"gv-pill\">Average risk: q2y, age 50-69</span><span class=\"gv-pill\">Draft 2025: baseline PSA at 40</span><span class=\"gv-pill\">mpMRI before biopsy (DRE not routine)</span><span class=\"gv-pill\">PSA not cancer-specific</span></div>",
   "title": "PSA testing in Australia",
   "subtitle": "no NHMRC-approved population program, shared decision-making, and the draft 2025 shift",
   "id": "oncology-19"
  },
  {
   "topic": "Tumour lysis syndrome - the metabolic quartet, the urate-lowering choice, and what NOT to give",
   "subarea": "Cancer principles & screening",
   "trap": "- TLS most common in **bulky, rapidly-proliferating, chemo-sensitive cancers** (high-grade lymphoma — Burkitt, ALL/AML) shortly after starting treatment\n- **Diagnostic quartet:**\n  - **HYPERkalaemia**\n  - **HYPERphosphataemia**\n  - **HYPERuricaemia**\n  - **HYPOcalcaemia** (calcium falls as phosphate rises)\n  - → risk of **AKI and fatal arrhythmia**\n- Prevention/treatment:\n  - Aggressive **IV hydration** + urate-lowering\n  - **Allopurinol** for prophylaxis (low–moderate risk)\n  - **Rasburicase** for high-risk/established TLS (enzymatically degrades EXISTING urate; allopurinol does not)\n  - Do **NOT give calcium for asymptomatic hypocalcaemia** (calcium-phosphate precipitation → worsens AKI); only treat symptomatic hypocalcaemia/arrhythmia\n  - Do **NOT co-administer allopurinol with rasburicase** (reduces rasburicase effectiveness)",
   "whatFirst": "- High-risk patient starting chemo → **IV fluids + allopurinol** (or rasburicase if high risk) **BEFORE/with first cycle**, plus close electrolyte monitoring\n- Established TLS → **hydrate, rasburicase**, manage hyperkalaemia, **dialysis** if refractory AKI/K+",
   "discriminator": "- **Allopurinol** PREVENTS new urate formation (xanthine oxidase inhibitor) — doesn't clear existing urate\n- **Rasburicase** ENZYMATICALLY degrades existing uric acid — use when urate is already high or risk is high\n- **Rasburicase contraindicated in G6PD deficiency** (haemolysis/methaemoglobinaemia)\n  - Test **G6PD** in at-risk patients first",
   "redFlags": "- **Rising K+**, falling urine output/rising creatinine, **ECG changes (peaked T waves)** in a patient just started on chemo for a bulky haematological malignancy = TLS — emergency",
   "mcqTrap": "- Tempting wrong answer: **'give IV calcium to correct the hypocalcaemia'** — don't, unless symptomatic; precipitates with phosphate and worsens renal injury\n- Choosing **'allopurinol'** when urate is already very high/high-risk — **rasburicase** is the better answer\n- **Adding allopurinol on top of rasburicase**",
   "mnemonic": "High K, high PO4, high urate, LOW Ca; Allopurinol prevents, Rasburicase rescues (not in G6PD); don't chase the calcium.",
   "viva": "- 'In a patient with bulky high-grade lymphoma starting chemo I'd anticipate **tumour lysis**'\n- Hydrate aggressively, give urate-lowering agent (**allopurinol prophylactically, or rasburicase if high-risk**)\n- Monitor electrolytes closely\n- Would **NOT replace asymptomatic hypocalcaemia** because of the risk of **calcium-phosphate precipitation**",
   "source": "eviQ (Cancer Institute NSW) oncological emergencies - tumour lysis syndrome; eTG (current); BCSH TLS guideline (international, aligned)",
   "tags": [
    "oncological emergency",
    "tumour lysis syndrome",
    "rasburicase",
    "allopurinol",
    "hyperkalaemia"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">High K+</span><span class=\"gv-pill\">High phosphate</span><span class=\"gv-pill\">High urate</span><span class=\"gv-pill\">LOW calcium</span><span class=\"gv-pill\">Allopurinol = prevent</span><span class=\"gv-pill\">Rasburicase = rescue (not in G6PD)</span></div>",
   "title": "Tumour lysis syndrome",
   "subtitle": "the metabolic quartet, the urate-lowering choice, and what NOT to give",
   "id": "oncology-20",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_hyperkalaemia.jpg",
     "caption": "Hyperkalaemia ECG — peaked T waves, widened QRS (tumour lysis syndrome)",
     "alt": "Peaked T waves, widened QRS, and sine-wave pattern of severe hyperkalaemia",
     "credit": "Dr Michael-Joseph F. Agbayani & Dr Eddieson Gonzales, Wikimedia Commons, CC BY 4.0"
    },
    {
     "src": "assets/img/haematology_film_aml_blasts_fresh.jpg",
     "caption": "Peripheral blood film — leukaemia blasts (ALL/AML, high TLS risk)",
     "alt": "Numerous large blast cells characteristic of acute leukaemia — the tumour type most prone to TLS",
     "credit": "Prof Osaro Erhabor, Wikimedia Commons, CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "BREAKTHROUGH dose = 1/6 (range 1/12–1/6) of the total 24-hour opioid dose",
   "subarea": "Palliative & symptom control",
   "whatFirst": "- Calculate breakthrough (rescue) dose as **~1/6 of total 24-hour opioid dose**\n- Given as the **immediate-release form of the SAME opioid**\n- Repeatable **~q1h PRN** (oral) / more frequently parenterally\n- If patient needs **>3–4 breakthrough doses/day consistently**, increase the regular (background) dose",
   "trap": "- Forgetting to add the **background PLUS all breakthrough doses** when totalling 24h requirement before recalculating\n- Giving the breakthrough as a **long-acting/MR form** — wrong; breakthrough must be **immediate-release**\n- Calculating breakthrough off the **single MR tablet strength** rather than the 24h total",
   "discriminator": "- **Breakthrough/incident pain** (transient, often movement-related) → IR rescue dose **1/6 of 24h dose**\n- **Persistent background pain** → adjust the **regular MR dose**\n- **End-of-dose failure** (pain returning before next MR dose) → increase MR dose or shorten interval, not just more breakthrough",
   "redFlags": "- **Escalating breakthrough requirement** (rapidly rising doses, poor response) → reassess for opioid-poorly-responsive pain (neuropathic, bone, incident)\n- Consider **adjuvant/specialist palliative referral**\n- Screen for **opioid neurotoxicity** (myoclonus, delirium, hyperalgesia)",
   "mcqTrap": "- Patient on MS Contin 60 mg BD (= **120 mg/24h**)\n- Tempting wrong answer: breakthrough = **10 mg of MR**\n- Correct: breakthrough = **120 ÷ 6 = 20 mg IR morphine PO PRN**\n- Trap option often uses **1/10 or the MR formulation**",
   "source": "eTG Palliative (current); Australian Prescriber 'Opioids — clinical applications in palliative care'; WA Cancer & Palliative Care Network guidelines.",
   "viva": "- Examiner: 'Calculate this patient's breakthrough dose'\n- Show: **total 24h dose → divide by 6 → give as IR of same opioid**\n- '>3–4/day means **uptitrate background**'",
   "mnemonic": "SIX for breakthrough: 24h ÷ 6, Immediate-release, repeat hourly; >3-4/day → up the background.",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Regular opioid</th><th>24h total</th><th>Breakthrough (IR, /6)</th></tr></thead><tbody><tr><td>MS Contin 30 mg BD</td><td><span class=\"gv-num\">60 mg</span></td><td><span class=\"gv-num\">10 mg</span> morphine IR</td></tr><tr><td>MS Contin 60 mg BD</td><td><span class=\"gv-num\">120 mg</span></td><td><span class=\"gv-num\">20 mg</span> morphine IR</td></tr><tr><td>Targin 40/20 BD (oxycodone)</td><td><span class=\"gv-num\">80 mg oxy</span></td><td><span class=\"gv-num\">~13 mg</span> oxycodone IR</td></tr></tbody></table>",
   "tags": [
    "breakthrough",
    "rescue dose",
    "one-sixth",
    "titration",
    "incident pain"
   ],
   "verified": true,
   "cutoffs": [
    "Breakthrough = total **24h dose ÷ 6** (range 1/12–1/6)",
    "Given as **IMMEDIATE-RELEASE** of the SAME opioid",
    "Repeat **~hourly PRN** (oral)",
    ">**3–4** breakthrough doses/day → increase the regular dose"
   ],
   "title": "BREAKTHROUGH dose = 1/6 (range 1/12–1/6) of…",
   "id": "oncology-21"
  },
  {
   "topic": "BREATHLESSNESS in palliative care — low-dose oral morphine first; O2 ONLY if hypoxaemic",
   "subarea": "Palliative & symptom control",
   "whatFirst": "- Refractory breathlessness (despite treating reversible causes):\n  - **Non-pharmacological first**: handheld FAN to the face, positioning sitting up, reassurance, pacing\n  - PLUS **regular low-dose oral morphine** — opioid-naive ~**2.5 mg IR PO** (or 2 mg oral solution; ≤2 mg parenteral); titrate\n  - Add a **benzodiazepine** (e.g. lorazepam SL or clonazepam) when there is a strong anxiety component\n- Treat reversibles (effusion, anaemia, bronchospasm, PE, infection) where appropriate to goals",
   "trap": "- Reaching for **oxygen as first-line in a NON-hypoxaemic** breathless patient\n- Oxygen only helps if the patient is **hypoxaemic**\n- In non-hypoxaemic dyspnoea, **room air via a fan** (air movement on face, trigeminal stimulation) is as effective as oxygen and far less burdensome\n- Also wrong: **high-dose opioids** — low dose is the evidence base (benefit plateaus ~**30 mg oral morphine/day**)",
   "discriminator": "- **Hypoxaemic (SpO2 low)** → trial oxygen\n- **Non-hypoxaemic breathlessness** → fan + low-dose opioid (NOT oxygen)\n- **Breathlessness with prominent panic/anxiety cycle** → add benzodiazepine\n- **Pure air-hunger without anxiety** → opioid is the primary drug\n- Morphine reduces the **SENSATION of breathlessness** without dangerous CO2 retention at these low doses",
   "redFlags": "- New, severe, or **rapidly progressive breathlessness** → look for reversible/acute cause appropriate to goals: PE, pneumothorax, effusion, SVC obstruction, pulmonary oedema, infection\n- **Stridor/SVC obstruction** (facial swelling, distended neck veins) → urgent **dexamethasone + oncology/radiotherapy**",
   "mcqTrap": "- **'Apply oxygen 4 L/min'** for a normoxic breathless palliative patient — tempting 'do something' answer\n- But **handheld fan + low-dose morphine** is the evidence-based choice\n- **Oxygen reserved for documented hypoxaemia**",
   "source": "eTG Palliative (current); CareSearch/PalliAGED dyspnoea guidance; RACGP 'Chronic refractory dyspnoea'.",
   "viva": "- Examiner: 'Normoxic but very breathless — what first?'\n- Answer: **fan + low-dose oral morphine**; oxygen only if hypoxaemic; benzo if anxiety-driven\n- Discriminator: **oxygen vs air**; opioid mechanism (reduces sensation, low dose)",
   "mnemonic": "FAB for breathlessness: FAN to the face first, Add low-dose morphine, Benzo if anxious — Oxygen only if hypOXaemic.",
   "tags": [
    "breathlessness",
    "dyspnoea",
    "morphine",
    "oxygen",
    "fan",
    "benzodiazepine",
    "hypoxaemia"
   ],
   "verified": true,
   "cutoffs": [
    "Opioid-naive dyspnoea: morphine **~2.5 mg IR PO** / 2 mg oral solution (≤2 mg parenteral), titrate",
    "**Handheld fan** to face = first-line non-pharmacological",
    "Oxygen **ONLY if hypoxaemic** (no benefit over air if normoxic)",
    "**Benzodiazepine** added for anxiety/panic component"
   ],
   "title": "BREATHLESSNESS in palliative care",
   "subtitle": "low-dose oral morphine first; O2 ONLY if hypoxaemic",
   "id": "oncology-22"
  },
  {
   "topic": "GOALS-OF-CARE & BREAKING BAD NEWS — SPIKES, patient sets the agenda, capacity & ACD before substitute consent",
   "subarea": "Palliative & symptom control",
   "whatFirst": "- Breaking bad news: use **SPIKES**\n  - **S**etting (private, sit, no interruptions, support person)\n  - **P**erception ('what's your understanding?')\n  - **I**nvitation ('how much would you like to know?')\n  - **K**nowledge (warning shot, plain language, small chunks, no jargon)\n  - **E**mpathy (acknowledge emotion, silence)\n  - **S**trategy/Summary (plan + follow-up)\n- Goals-of-care: explore the patient's **VALUES first**, then frame realistic options\n- Do NOT lead with a **checklist of interventions**",
   "trap": "- Jumping to **a list of interventions** ('do you want CPR / intubation / dialysis?') before exploring understanding and values — classic error\n- Assuming **the family decides** while the patient HAS capacity\n- A **competent patient's wishes override family**\n- **Capacity is decision-specific** and presumed present unless assessed otherwise",
   "discriminator": "- Who consents/decides:\n  - **(1) Patient WITH capacity** → **patient decides**, full stop\n  - **(2) Patient WITHOUT capacity** → follow a valid & applicable **Advance Care Directive** (refusals are legally binding) FIRST; if none applicable → legally recognised **substitute decision-maker/person responsible** (terminology and hierarchy vary by Australian state/territory)\n  - **(3) CPR/resuscitation** = a **medical decision** — a doctor can determine CPR is not clinically indicated; must communicate it and should discuss, but **consent is not required** to withhold non-beneficial treatment",
   "redFlags": "- **Capacity fluctuating** (delirium) → reassess, use lucid intervals, involve substitute decision-maker per state law\n- **Family conflict/demand for non-beneficial treatment** → second opinion, clinical ethics, clear documentation\n- **Cultural/communication needs** → professional interpreter (not family)\n- Always **document** the conversation, the decision, who was present, and the plan",
   "mcqTrap": "- **'Ask the family what they want done'** when the patient is COMPETENT — wrong; the patient decides\n- **'A DNR/NFR order requires family consent'** — wrong; not offering non-beneficial CPR can be a clinical decision (communicated and discussed, not consented)\n- Starting bad news with the **diagnosis before assessing** what the patient already understands/wants to know",
   "source": "eTG Palliative (current); SPIKES protocol (Baile 2000); QUT End of Life Law in Australia (state/territory ACD law); ACSQHC end-of-life standards.",
   "viva": "- Examiner role-plays a relative or asks 'how do you run this family meeting?' — they probe:\n  - **SPIKES structure**\n  - Eliciting **understanding/values BEFORE options**\n  - Capacity & who consents\n  - **ACD vs substitute decision-maker**\n  - Documentation\n- **ISBAR to senior** if conflict",
   "mnemonic": "SPIKES (Setting, Perception, Invitation, Knowledge, Empathy, Strategy). Decision ladder: Patient (if capacity) → ACD → Substitute decision-maker. CPR can be a clinical (not consented) decision.",
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Does the PATIENT have capacity for THIS decision? (presumed yes)</div><div class=\"gv-step\">YES → patient decides (values explored first)</div><div class=\"gv-step\">NO → valid &amp; applicable Advance Care Directive?</div><div class=\"gv-step\">ACD present → follow it (binding for refusals)</div><div class=\"gv-step\">No ACD → substitute decision-maker / person responsible (per state law)</div></div>",
   "tags": [
    "goals of care",
    "breaking bad news",
    "SPIKES",
    "capacity",
    "advance care directive",
    "substitute decision-maker",
    "DNR",
    "NFR",
    "consent"
   ],
   "verified": true,
   "cutoffs": [
    "Bad news framework = **SPIKES**",
    "Explore **understanding & VALUES** before listing interventions",
    "Decision order: **capable patient → valid & applicable ACD → substitute decision-maker**",
    "Capacity is **decision-specific** and presumed until assessed",
    "**CPR/NFR can be a clinical decision** (communicate & discuss; consent not mandatory to withhold non-beneficial Rx)",
    "Use a **professional interpreter**, not family"
   ],
   "title": "GOALS-OF-CARE & BREAKING BAD NEWS",
   "subtitle": "SPIKES, patient sets the agenda, capacity & ACD before substitute consent",
   "id": "oncology-23"
  },
  {
   "topic": "Mechanism-based ANTIEMETIC choice — match the receptor/cause, don't default to metoclopramide",
   "subarea": "Palliative & symptom control",
   "whatFirst": "- Identify the **CAUSE/PATHWAY**, then pick the matching antiemetic:\n  - **(1) Gastric stasis/functional gut** (e.g. opioids slowing gut, squashed stomach) → **prokinetic = metoclopramide** (D2 + 5HT4)\n  - **(2) Chemical/metabolic** (opioids, hypercalcaemia, uraemia, drugs) acting on the CTZ → **haloperidol** (D2)\n  - **(3) Vestibular/raised ICP/bowel obstruction (mechanical)** → **cyclizine** (antihistamine/antimuscarinic)\n  - **(4) Broad/unknown or refractory** → **levomepromazine** (methotrimeprazine) as broad-spectrum",
   "trap": "- Defaulting to **metoclopramide or ondansetron for everything**\n- **Ondansetron** (5HT3 antagonist) is largely for CHEMO/radiotherapy-induced N&V\n  - NOT first-line for general palliative nausea\n  - **CAUSES constipation** (bad with opioids)\n- **Metoclopramide** is a prokinetic\n  - Contraindicated/avoided in **complete bowel obstruction**\n  - Contraindicated in **Parkinson's disease** (D2 blockade worsens it)",
   "discriminator": "- **Metoclopramide vs cyclizine in BOWEL OBSTRUCTION:** in COMPLETE mechanical obstruction with colic, AVOID prokinetics (metoclopramide) — they worsen colic\n  - Use an antiemetic that is NOT prokinetic (**haloperidol/cyclizine**) ± antisecretory (hyoscine butylbromide/octreotide)\n- **Parkinson's/Lewy body** → AVOID metoclopramide & haloperidol (D2 blockers)\n  - Use **cyclizine, domperidone, or ondansetron**",
   "redFlags": "- Don't combine two drugs with the **SAME mechanism** (metoclopramide + haloperidol = double D2 blockade → extrapyramidal/akathisia, no added benefit)\n- **Raised ICP nausea** (early-morning headache, vomiting, focal signs) → **dexamethasone + cyclizine**, image\n- **Metoclopramide extrapyramidal/dystonia risk** (especially young, high dose, prolonged)",
   "mcqTrap": "- **'Ondansetron'** offered for opioid-induced nausea — tempting but WRONG mechanism (5HT3 is for chemo) and **worsens opioid constipation**\n- Correct for opioid-induced (chemical, CTZ) nausea = **haloperidol low dose**\n- For gastric stasis = **metoclopramide**",
   "source": "eTG Palliative (current); Australian Prescriber 'Antiemetic drugs: what to prescribe and when'.",
   "viva": "- Examiner: 'What antiemetic and WHY?' — they want **mechanism/pathway reasoning**\n  - Gut stasis → **metoclopramide**\n  - CTZ/chemical → **haloperidol**\n  - Vestibular/obstruction → **cyclizine**\n- Discriminator: **obstruction & Parkinson's cautions**",
   "mnemonic": "Match cause to receptor: Gut→metoclopramide (prokinetic, D2/5HT4); Chemical/CTZ→Haloperidol (D2); Cortex/vestibular/obstruction→Cyclizine (H1/ACh); Chemo→ondansetron (5HT3); Can't tell→levomepromazine.",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Cause</th><th>Receptor</th><th>First-line drug</th></tr></thead><tbody><tr><td>Opioid / metabolic (uraemia, hyperCa) — CTZ</td><td>D2</td><td>Haloperidol (low dose)</td></tr><tr><td>Gastric stasis / functional gut</td><td>D2 + 5HT4</td><td>Metoclopramide (prokinetic)</td></tr><tr><td>Vestibular / raised ICP / bowel obstruction</td><td>H1 / ACh</td><td>Cyclizine</td></tr><tr><td>Chemo / radiotherapy</td><td>5HT3</td><td>Ondansetron (+ dexamethasone)</td></tr><tr><td>Broad / refractory / unknown</td><td>Multiple</td><td>Levomepromazine</td></tr></tbody></table>",
   "tags": [
    "antiemetic",
    "nausea",
    "metoclopramide",
    "haloperidol",
    "cyclizine",
    "ondansetron",
    "bowel obstruction",
    "Parkinson"
   ],
   "verified": true,
   "cutoffs": [
    "Opioid/chemical (CTZ) → **haloperidol**",
    "Gastric stasis → **metoclopramide** (prokinetic)",
    "Vestibular / raised ICP / obstruction → **cyclizine**",
    "Chemo/RT → **ondansetron** (5HT3)",
    "AVOID **metoclopramide** in complete bowel obstruction & Parkinson's",
    "Don't stack **two D2 blockers**"
   ],
   "title": "Mechanism-based ANTIEMETIC choice",
   "subtitle": "match the receptor/cause, don't default to metoclopramide",
   "id": "oncology-24"
  },
  {
   "topic": "Opioid CONVERSION & ROTATION — oral:SC ratios + 25-50% dose reduction for incomplete cross-tolerance",
   "subarea": "Palliative & symptom control",
   "whatFirst": "- **Total the current 24h dose** (background + breakthrough)\n- **Convert** to the new opioid/route using the equianalgesic ratio\n- **Reduce** the calculated new dose by **25-50%** for incomplete cross-tolerance\n  - Especially if pain is currently controlled or doses are high\n- **Recalculate** the new breakthrough (**1/6** of new 24h dose)\n- **Titrate**\n- Note: oral morphine → SC morphine dose roughly **HALVES** (ratio 2:1 to 3:1)",
   "trap": "- The dominant trap is NOT reducing for **incomplete cross-tolerance** when rotating to a DIFFERENT opioid → overdose\n- Second trap: forgetting the **oral→parenteral conversion**\n  - Oral morphine is ~**2-3x more potent by mg** than SC morphine\n  - Giving the same number of mg SC roughly **doubles-triples** the effective dose\n- Always **reduce** when changing the DRUG\n- Route-only switch of the same drug still needs the **route ratio** applied",
   "discriminator": "- **Route switch only** (same drug, e.g. oral→SC morphine): apply the **2:1–3:1 ratio** (no big cross-tolerance reduction needed)\n- **Drug rotation** (e.g. morphine→hydromorphone): apply equianalgesic ratio THEN **reduce 25-50%**\n- Reasons to rotate: **neurotoxicity**, intolerable side-effects, renal impairment, or loss of oral route (→ syringe driver)",
   "redFlags": "- **Renal impairment** → avoid morphine (M3G/M6G accumulate)\n  - Rotate to **fentanyl** (or hydromorphone with caution)\n- **Opioid neurotoxicity**: myoclonus + delirium + hyperalgesia + hallucinations → rotate to a structurally different opioid at **REDUCED dose** + hydrate\n  - Usually settles within **~24h**",
   "mcqTrap": "- Patient on oral morphine **60 mg/24h**, now NBM → 'prescribe SC morphine 60 mg/24h'\n- **WRONG** — oral:SC morphine is ~2:1 to 3:1, so SC dose ≈ **20-30 mg/24h**\n- Giving 60 mg SC is a **2-3x overdose**\n- The tempting wrong option is always the **same mg number**",
   "source": "Safer Care Victoria 'Opioid conversion ratios' guidance (Feb 2021); Syrmis et al. (Australian consensus, IMJ 2014); eTG Palliative (current).",
   "viva": "- Examiner: 'Patient can no longer swallow — convert their morphine to a syringe driver.'\n- Show the **oral:SC halving**\n- Show the **new breakthrough** calculation\n- State '**reduce for cross-tolerance** if rotating drugs'\n- **ISBAR** escalation if uncertain → palliative/pharmacy",
   "mnemonic": "ROTATE = Recalc 24h, Equianalgesic ratio, then REDUCE 25-50%; oral→SC morphine = HALVE (down to a third).",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Conversion</th><th>Approx ratio</th><th>Example</th></tr></thead><tbody><tr><td>Oral morphine → SC morphine</td><td><span class=\"gv-num\">2–3 : 1</span></td><td>30 mg PO → 10-15 mg SC</td></tr><tr><td>Oral morphine → oral oxycodone</td><td><span class=\"gv-num\">1.5 : 1</span></td><td>15 mg morphine → 10 mg oxycodone</td></tr><tr><td>Oral morphine → oral hydromorphone</td><td><span class=\"gv-num\">5 : 1</span></td><td>25 mg morphine → 5 mg hydromorphone</td></tr><tr><td>Oral oxycodone → SC oxycodone</td><td><span class=\"gv-num\">1.5–2 : 1</span></td><td>30 mg PO → 15-20 mg SC</td></tr><tr><td>Oral hydromorphone → SC</td><td><span class=\"gv-num\">2–3 : 1</span></td><td>24 mg PO → 8-12 mg SC</td></tr></tbody></table>",
   "tags": [
    "conversion",
    "rotation",
    "equianalgesic",
    "oral to subcut",
    "cross-tolerance",
    "renal impairment"
   ],
   "verified": true,
   "cutoffs": [
    "Oral morphine : SC morphine = **2-3** : 1 (dose roughly halves)",
    "Oral morphine : oral oxycodone = ~**1.5** : 1",
    "Oral morphine : oral hydromorphone = ~**5** : 1",
    "Reduce calculated dose **25-50%** when ROTATING drug (incomplete cross-tolerance)",
    "Recalculate breakthrough (**1/6**) after conversion"
   ],
   "title": "Opioid CONVERSION & ROTATION",
   "subtitle": "oral:SC ratios + 25-50% dose reduction for incomplete cross-tolerance",
   "id": "oncology-25"
  },
  {
   "topic": "Opioid INITIATION in the opioid-naive palliative patient — start IR, titrate, then convert to MR",
   "subarea": "Palliative & symptom control",
   "whatFirst": "- Opioid-naive + uncontrolled cancer pain: start **immediate-release oral morphine 2.5-5 mg** every 4 hours (q4h regularly if continuous pain) + same dose PRN for breakthrough\n- Titrate over **2-3 days** (increase in ~**30-50%** increments)\n- Then convert the stable 24h requirement to a **modified-release (MR/SR)** preparation BD\n- Co-prescribe a **regular stimulant laxative** from day 1\n- Co-prescribe a **PRN antiemetic**",
   "trap": "- Classic MCQ trap: starting a NAIVE patient on **modified-release morphine** (e.g. MS Contin 10 mg BD) or a **fentanyl patch** up front\n- Wrong: you cannot titrate a **slow-release drug** quickly\n- A patch has a **~12-24h onset** and long offset — dangerous if you over/under-shoot\n- **IR first**, then convert\n- Fentanyl patches are **NEVER** for opioid-naive patients or acute/unstable pain",
   "discriminator": "- **IR** (morphine elixir/Sevredol): onset ~**20-30 min**, lasts ~4h — used to FIND the dose and for breakthrough\n- **MR** (MS Contin/Kapanol): lasts **12-24h** — used only once the requirement is STABLE\n- **Patch** (fentanyl/buprenorphine): for stable chronic pain, opioid-tolerant, often when oral route lost\n  - **NOT for titration**",
   "redFlags": "- **Renal impairment** (low eGFR) → morphine metabolites (M3G/M6G) accumulate → neurotoxicity/sedation\n  - Prefer **hydromorphone** (caution), **oxycodone** (caution) or **fentanyl**\n- **Frail/elderly/cachectic** → start at **lowest end (2.5 mg)** and lengthen the interval\n- **Respiratory depression** with pinpoint pupils + reduced consciousness → **titrated naloxone** (small repeated doses to reverse RR without precipitating severe pain/withdrawal)",
   "mcqTrap": "- 'Commence **MS Contin 30 mg BD**' in a naive patient — tempting because it looks like 'proper' pain control, but it is **unsafe and untitratable**\n- Correct = **IR morphine 2.5-5 mg q4h + PRN**",
   "source": "eTG Palliative (Therapeutic Guidelines, current); Australian Prescriber 'Opioids — clinical applications in palliative care'; RACGP pain management in palliative care.",
   "viva": "- Examiner probes: 'How do you start an opioid in a naive cancer patient?'\n- Answer: **IR first** → titrate → convert to MR, plus mandatory **laxative** + PRN antiemetic + breakthrough script\n- Discriminator: why **NOT a patch** up front",
   "mnemonic": "START SLOW: Short-acting first, Titrate, Aperient always, Rescue (breakthrough) dose, Then convert to slow-release.",
   "tags": [
    "opioid",
    "initiation",
    "morphine",
    "immediate-release",
    "titration",
    "cancer pain"
   ],
   "verified": true,
   "cutoffs": [
    "Naive start: morphine IR **2.5-5 mg** PO q4h (± PRN same dose)",
    "Titrate ~**30-50%** per day; stabilise over **2-3 days**, then convert to MR BD",
    "**NO** fentanyl/buprenorphine patch in opioid-naive or unstable pain",
    "Lowest dose (**2.5 mg**) + longer interval in frail/elderly/renal impairment"
   ],
   "title": "Opioid INITIATION in the opioid-naive palliative patient",
   "subtitle": "start IR, titrate, then convert to MR",
   "id": "oncology-26"
  },
  {
   "topic": "OPIOID NEUROTOXICITY (OIN) — myoclonus + delirium + hyperalgesia → ROTATE & hydrate, don't just keep escalating",
   "subarea": "Palliative & symptom control",
   "whatFirst": "- Recognise the cluster: **MYOCLONUS** (jerks), **DELIRIUM**/agitation, **HYPERALGESIA** + allodynia (pain worsens/spreads despite more opioid), vivid dreams/hallucinations, sometimes seizures\n- **Reduce** the opioid dose if pain allows\n- **HYDRATE** (helps clear metabolites)\n- Treat reversibles (renal function, dehydration, sepsis)\n- **ROTATE** to a structurally different opioid at a **REDUCED dose**\n- Consider adjuvants\n- Often improves within **~24h**",
   "trap": "- Interpreting worsening pain (actually **hyperalgesia**) as UNDER-treatment and giving MORE opioid → **vicious cycle**\n- The exam wants you to recognise that escalating the same opioid **makes it worse**\n- The answer is **rotate + reduce + hydrate**",
   "discriminator": "- **OIN vs disease progression**: in OIN, more opioid **worsens** pain (hyperalgesia) and there's myoclonus/delirium\n  - Metabolites (**M3G**) and **renal impairment** are key drivers\n- **OIN myoclonus vs terminal restlessness vs seizure**: OIN myoclonus is multifocal jerking with the other features and a clear **opioid/renal context**",
   "redFlags": "- **Renal impairment** / dehydration / high parenteral morphine doses = high risk (esp. morphine via M3G/M6G accumulation)\n  - In renal failure prefer **fentanyl** (or cautious hydromorphone)\n- **Seizures, severe delirium** → urgent review, **benzodiazepine** for myoclonus (e.g. clonazepam/midazolam), specialist palliative input",
   "mcqTrap": "- '**Increase the morphine dose**' for a patient whose pain is worsening AND who is jerking/confused on high-dose morphine with renal impairment\n- Tempting 'treat the pain' answer, but it is **OIN**\n- Correct = **rotate** to a different opioid at reduced dose + **hydrate** (e.g. switch morphine→fentanyl/hydromorphone in renal failure)",
   "source": "eTG Palliative (current); Australian Prescriber 'Opioids — clinical applications in palliative care'; CareSearch opioid neurotoxicity references.",
   "viva": "- Examiner: 'On high-dose morphine, now jerking and more pain — what's happening and what do you do?'\n- Answer: **opioid neurotoxicity** → reduce/rotate to different opioid at lower dose + hydrate + treat reversibles\n- Pick **fentanyl** in renal failure\n- Discriminator: **hyperalgesia vs under-treatment**",
   "mnemonic": "MAD-H = Myoclonus, Agitation/delirium, Drowsiness, Hyperalgesia → ROTATE (different opioid, REDUCED dose) + HYDRATE; never just escalate.",
   "tags": [
    "opioid neurotoxicity",
    "myoclonus",
    "hyperalgesia",
    "delirium",
    "opioid rotation",
    "renal impairment",
    "M3G",
    "fentanyl"
   ],
   "verified": true,
   "cutoffs": [
    "Triad clue: **myoclonus** + delirium + hyperalgesia",
    "Driver: **renal impairment** / dehydration / high morphine dose (M3G/M6G)",
    "Manage: reduce dose, **HYDRATE**, treat reversibles, ROTATE opioid (different drug, reduced dose)",
    "Renal failure → switch to **fentanyl** (or cautious hydromorphone)",
    "Do **NOT** keep escalating the same opioid"
   ],
   "title": "OPIOID NEUROTOXICITY (OIN)",
   "subtitle": "myoclonus + delirium + hyperalgesia → ROTATE & hydrate, don't just keep escalating",
   "id": "oncology-27"
  },
  {
   "topic": "Opioid-induced constipation — PROPHYLACTIC stimulant ± osmotic laxative from day 1; AVOID bulk-forming",
   "subarea": "Palliative & symptom control",
   "whatFirst": "- Start a regular laxative **AT THE SAME TIME** as the opioid (prophylaxis, not waiting for symptoms)\n- First-line = a **STIMULANT** (senna or bisacodyl) ± an **OSMOTIC** (macrogol/Movicol or, if needed, lactulose), titrated to effect\n- There is **NO tolerance** to opioid constipation — it persists for the **duration** of opioid therapy",
   "trap": "- Prescribing **docusate alone** (softener/surfactant) — not recommended as monotherapy; no good evidence of efficacy in OIC\n- **BULK-FORMING agents** (psyllium/fibre) are CONTRAINDICATED in opioid/advanced palliative patients\n  - Poor fluid intake + reduced gut motility → risk of **obstruction/impaction**\n- Also wrong: **waiting until the patient is constipated** before starting any aperient",
   "discriminator": "- **Simple OIC** → stimulant ± osmotic, titrate\n- **Refractory OIC** despite optimised laxatives, with confirmed opioid cause → **PERIPHERAL opioid antagonist** (methylnaltrexone SC, or naloxegol/naldemedine PO)\n- Must **EXCLUDE bowel OBSTRUCTION first** (colicky pain, vomiting, no flatus, distension)\n  - Give opioid antagonist **only if not obstructed**",
   "redFlags": "- Suspected **bowel obstruction** (absolute constipation + vomiting + distension + colic) → STOP stimulant/prokinetic laxatives\n- Do **NOT** give a peripheral opioid antagonist into an obstruction\n- Manage as **malignant bowel obstruction** (anti-secretory + antiemetic, consider hyoscine/octreotide)\n- **PR exam** for impaction/overflow",
   "mcqTrap": "- 'Prescribe **docusate**' or 'add **psyllium/fibre supplement**' for a patient starting morphine — tempting because they sound gentle, but docusate alone is **ineffective** and bulk-forming laxatives are **unsafe** in this group\n- Correct = **regular senna ± macrogol** started with the opioid",
   "source": "eTG Palliative (current); CareSearch/PalliAGED OIC guidance; standard Australian palliative practice.",
   "viva": "- Examiner: 'You start morphine — what else must you prescribe?'\n- Answer: **regular stimulant laxative** (prophylactic) + PRN antiemetic + breakthrough\n- Discriminator: why **not docusate alone** / why **not fibre**; exclude obstruction before methylnaltrexone",
   "mnemonic": "Every opioid script needs a STIMULANT, not a softener — 'No senna, no opioid'. Fibre and docusate-only FAIL in OIC.",
   "tags": [
    "constipation",
    "laxative",
    "prophylaxis",
    "senna",
    "macrogol",
    "docusate",
    "methylnaltrexone"
   ],
   "verified": true,
   "cutoffs": [
    "Start laxative **SAME TIME** as opioid (prophylactic)",
    "First-line = **stimulant** (senna/bisacodyl) ± osmotic (macrogol)",
    "**AVOID** bulk-forming (psyllium/fibre) — risk impaction",
    "**Docusate alone** = ineffective in OIC",
    "Refractory + not obstructed → **methylnaltrexone SC** / naloxegol PO"
   ],
   "title": "Opioid-induced constipation",
   "subtitle": "PROPHYLACTIC stimulant ± osmotic laxative from day 1; AVOID bulk-forming",
   "id": "oncology-28"
  },
  {
   "topic": "SYRINGE DRIVER (CSCI) — when oral route is lost; what NOT to mix and how to convert",
   "subarea": "Palliative & symptom control",
   "whatFirst": "- Use a continuous SC infusion (syringe driver, e.g. Niki T34/CADD) when the **ORAL route fails** (unable to swallow, vomiting, reduced consciousness, malabsorption, last days of life)\n- Convert the 24h oral opioid to the SC equivalent (**oral morphine → SC morphine ÷ ~2-3**)\n- Set the breakthrough as **1/6 of the SC 24h dose** given as SC PRN\n- Combine **compatible drugs** (opioid + antiemetic ± antisecretory ± sedative) in one driver\n- Continue **regular PRN charting** alongside",
   "trap": "- Assuming a syringe driver is **only for 'the actively dying'** — it is simply a delivery route for any patient who can't take oral meds; starting one does **not** mean imminent death\n- Putting **INCOMPATIBLE drugs** together in the driver\n  - Notably **cyclizine + hyoscine butylbromide** → crystallisation/precipitation\n  - **Cyclizine at high concentration** → precipitation\n- **Dexamethasone** precipitates with most other drugs — usually given **separately**",
   "discriminator": "- **Syringe driver** (continuous SC): steady levels, flexible titration of multiple symptoms\n- **PRN SC bolus**: for episodic/breakthrough symptoms\n- **Transdermal patch**: suits STABLE pain with intact requirements but **slow to adjust**\n- If already on a **fentanyl patch** and now dying: **LEAVE the patch on** and add a driver for additional/other symptoms",
   "redFlags": "- **Site reaction** (erythema, swelling, leakage) → resite\n- **Precipitation/cloudiness** in the syringe → review combination (incompatibility)\n- **Breakthrough still required** → ensure PRN doses charted (**1/6 of 24h SC dose**)\n- Sudden uncontrolled symptoms → **ISBAR** to palliative care/after-hours",
   "mcqTrap": "- 'A syringe driver is indicated because the **patient is dying**' — partially true but the EXAM point is the indication is **LOSS OF THE ORAL ROUTE**, not prognosis\n- Also trap: 'give the **same mg** of morphine SC as they took orally' — ignores the oral→SC ratio → **overdose**",
   "source": "eTG Palliative (current); CareSearch/PalliAGED CSCI guidance; NSW CEC Last Days of Life resources.",
   "viva": "- Examiner: 'Patient can't swallow their morphine and metoclopramide — what now?'\n- Answer: convert to **SC syringe driver** (apply oral→SC ratio), combine compatible drugs, set **SC breakthrough at 1/6**, chart PRNs\n- Discriminator: **incompatible mixes**; patch + driver **coexistence**",
   "mnemonic": "DRIVER = Delivery route when oral lost; Recalc oral→SC (halve morphine); Incompatibles out (watch cyclizine, dexamethasone); Verify breakthrough 1/6; Evaluate site; Reassure (not a death sentence).",
   "tags": [
    "syringe driver",
    "CSCI",
    "subcutaneous infusion",
    "compatibility",
    "oral route lost",
    "conversion"
   ],
   "verified": true,
   "cutoffs": [
    "Indication = **ORAL route lost** (not prognosis per se)",
    "Oral morphine → SC morphine **÷ ~2-3** for the driver",
    "Breakthrough = **1/6** of the 24h SC dose, given SC PRN",
    "Watch **incompatibilities** (cyclizine ppt; dexamethasone usually separate)",
    "Keep a **fentanyl patch ON** and add the driver alongside"
   ],
   "title": "SYRINGE DRIVER (CSCI)",
   "subtitle": "when oral route is lost; what NOT to mix and how to convert",
   "id": "oncology-29"
  },
  {
   "topic": "TERMINAL (death rattle) SECRETIONS — antimuscarinic EARLY + reposition; don't suction deeply",
   "subarea": "Palliative & symptom control",
   "whatFirst": "- **Reposition** (lateral/semi-prone) to drain secretions\n- **Reduce/cease IV fluids**\n- Give an **ANTIMUSCARINIC EARLY** (works best before secretions pool):\n  - **Hyoscine BUTYLbromide (Buscopan)**: 20 mg SC stat, then 20 mg q1-2h PRN or **60-120 mg/24h** via syringe driver\n  - OR **glycopyrronium**: 200-400 microg SC stat, **0.6-1.2 mg/24h** infusion\n- **Reassure family** the noise distresses them more than the (usually unconscious) patient",
   "trap": "- Choosing **hyoscine HYDRObromide** thinking it is the same as butylbromide\n  - Hydrobromide **CROSSES the blood-brain barrier** → sedation/delirium/paradoxical agitation\n  - Butylbromide and glycopyrronium do **NOT** (quaternary, peripheral)\n- Aggressive **deep oropharyngeal SUCTIONING** — distressing, ineffective, can **worsen** secretions\n  - Only gentle oral suction if pooled secretions are visible",
   "discriminator": "- **Hyoscine butylbromide / glycopyrronium** = peripheral, **non-sedating** (preferred)\n- **Hyoscine hydrobromide** = central, **sedating**, more delirium risk\n- Antimuscarinics **dry NEW secretions only** — they do NOT clear secretions already present (hence give **EARLY**)\n- **True death rattle** (pooled upper-airway secretions in dying, unconscious patient) vs **pulmonary OEDEMA/pneumonia** → treat differently\n  - e.g. diuretic if appropriate to goals of care",
   "redFlags": "- If 'rattle' is actually **pulmonary oedema** (frothy, exertional history) or **aspiration/pneumonia**, antimuscarinics **won't help** — reassess\n- Antimuscarinic adverse effects: urinary retention, dry mouth, tachycardia, and (**hydrobromide**) **confusion**",
   "mcqTrap": "- '**Hyoscine hydrobromide**' selected for terminal secretions — looks correct (it IS an antisecretory) but it is **centrally sedating/deliriogenic**\n  - Cleaner answer in a delirium-prone patient: **hyoscine BUTYLbromide** or **glycopyrronium**\n- Also trap: '**deep suction**' as first action",
   "source": "eTG Palliative (current); EMRPCC 'Management of Respiratory Secretions in the Terminal Phase' (April 2024); NSW CEC Last Days of Life flowchart.",
   "viva": "- Examiner: 'Dying patient, noisy gurgling breathing — what do you do?'\n- Answer: **reposition** + give antimuscarinic **EARLY** + reassure family\n- Choose **butylbromide/glycopyrronium** over hydrobromide\n- Avoid **deep suction**\n- Discriminator: distinguishing **rattle from oedema/pneumonia**",
   "mnemonic": "RATTLE: Reposition, Antimuscarinic EARLY (Buscopan/glyco), Tell family it's not distressing the patient, Limit fluids, no aggressive suction.",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Drug</th><th>Stat / 24h SC</th><th>CNS / sedation</th></tr></thead><tbody><tr><td>Hyoscine BUTYLbromide (Buscopan)</td><td><span class=\"gv-num\">20 mg</span> stat; <span class=\"gv-num\">60-120 mg</span>/24h</td><td>No (peripheral) — preferred</td></tr><tr><td>Glycopyrronium</td><td><span class=\"gv-num\">200-400 microg</span> stat; <span class=\"gv-num\">0.6-1.2 mg</span>/24h</td><td>No (peripheral) — preferred</td></tr><tr><td>Hyoscine HYDRObromide</td><td>SC stat / 24h</td><td>YES — sedating, delirium risk</td></tr></tbody></table>",
   "tags": [
    "terminal secretions",
    "death rattle",
    "hyoscine butylbromide",
    "glycopyrronium",
    "hyoscine hydrobromide",
    "antimuscarinic",
    "syringe driver"
   ],
   "verified": true,
   "cutoffs": [
    "Hyoscine butylbromide **20 mg SC stat**; **60-120 mg/24h** infusion",
    "Glycopyrronium **200-400 microg SC stat**; **0.6-1.2 mg/24h**",
    "Give **EARLY** — dries new secretions, doesn't clear existing",
    "Prefer **butylbromide/glycopyrronium** (peripheral) over hydrobromide (sedating)",
    "**Reposition**; avoid deep suctioning"
   ],
   "title": "TERMINAL (death rattle) SECRETIONS",
   "subtitle": "antimuscarinic EARLY + reposition; don't suction deeply",
   "id": "oncology-30"
  }
 ]
}
);
