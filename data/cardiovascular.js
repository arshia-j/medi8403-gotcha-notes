window.GOTCHA = window.GOTCHA || { modules: [] };
window.GOTCHA.modules.push(
{
 "id": "cardiovascular",
 "name": "Cardiovascular",
 "category": "Medicine",
 "blurb": "Written-exam + VIVA. ECG/troponin interpretation and the time-critical ACS, heart-failure, arrhythmia and aortic decisions.",
 "cards": [
  {
   "topic": "ACS secondary prevention bundle — the 2025 Australian numbers and the beta-blocker / colchicine / ARNI shifts",
   "subarea": "Acute coronary syndromes",
   "trap": "The bundle MOVED in the **2025 Australian guideline** and old reflex answers are now wrong.\n- **LDL-C target <1.4 mmol/L AND ≥50% reduction** from baseline\n  - Use highest tolerated statin first\n  - Add **ezetimibe** if suboptimal or intolerant to statin\n  - Then add a **PCSK9 inhibitor** (evolocumab or inclisiran) if still suboptimal despite max statin + ezetimibe\n- **Beta-blockers** are no longer routine for everyone\n  - **LV impairment** → beta-blocker recommended\n  - **Preserved LV systolic function**, revascularised, on optimal medical therapy → 2025 guideline gives a **weak recommendation to consider withholding** beta-blocker (exam-catcher vs old 'beta-blocker for all post-MI')\n- **ACE inhibitor/ARB** indicated for HF symptoms, **LVEF ≤40%**, diabetes, hypertension, or CKD\n  - Add a **mineralocorticoid receptor antagonist (MRA)** if LVEF ≤40% + HF\n  - **ARNI is NOT recommended** post-ACS (new 2025 change)\n- **Colchicine 0.5 mg daily** long-term is a new weak recommendation\n- Refer ALL patients to a **multidisciplinary exercise-based cardiac rehabilitation** program before discharge\n- Plus **DAPT**, smoking cessation, and influenza/respiratory vaccination",
   "source": "NHFA/CSANZ ACS Guideline 2025, Table 4 (post-ACS pharmacotherapy); Australian Prescriber 2025 'Secondary prevention of ACS' summary",
   "discriminator": "- **LV impairment** post-ACS → beta-blocker indicated\n- **Preserved LV function**, fully revascularised, on OMT → consider **withholding** beta-blocker (2025 shift)\n- Statin + ezetimibe insufficient → **PCSK9 inhibitor** (not just up-titrate statin)\n- **LVEF ≤40% + HF** → add MRA\n- **ARNI not recommended** post-ACS",
   "whatFirst": "Before discharge confirm the pillars are charted:\n- **Highest-tolerated statin** (LDL <1.4 + ≥50% drop)\n- **ACEi/ARB**\n- **Beta-blocker** if LV impairment\n- **DAPT**\n- **MRA** if LVEF ≤40% + HF\n- Plus **cardiac rehab** referral, smoking cessation, and vaccination",
   "redFlags": "- **LDL-C remaining above 1.4 mmol/L** on max oral therapy → escalate to PCSK9 inhibitor\n- **Recurrent events** despite optimal therapy → reassess adherence/inflammatory risk (consider colchicine)",
   "mcqTrap": "- '**Start a beta-blocker in every post-MI patient**' — now wrong for preserved-LV-function revascularised patients (2025 weak rec to consider withholding)\n- '**LDL target <1.8 mmol/L**' — outdated; current Australian target is <1.4 mmol/L + ≥50% reduction\n- '**Just up-titrate statin** if not at target' — guideline adds ezetimibe then PCSK9i\n- '**Give sacubitril-valsartan post-ACS**' — not recommended",
   "viva": "Out loud: 'On discharge I'd ensure the **highest tolerated statin** aiming for LDL <1.4 and ≥50% reduction, an **ACE inhibitor**, **DAPT**, and a **beta-blocker** if there's LV impairment — but in a preserved-function revascularised patient the 2025 guideline supports **considering withholding** it. I'd add an **MRA** if EF ≤40% with heart failure, refer everyone to **cardiac rehab** and address smoking and vaccination.'",
   "mnemonic": "ABCDE: Aspirin+P2Y12, Beta-blocker (only if LV impaired), Cholesterol <1.4 + Colchicine 0.5 + Cardiac rehab, ACE-inhibitor (+MRA if EF≤40), Exercise rehab & vaccinate.",
   "tags": [
    "secondary prevention",
    "statin",
    "LDL target",
    "beta-blocker",
    "colchicine",
    "cardiac rehab",
    "ACE inhibitor",
    "MRA"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Pillar</th><th>2025 Australian target / rule</th></tr><tr><td>Statin (highest tolerated)</td><td>LDL-C <span class=\"gv-num\">&lt;1.4 mmol/L</span> AND ≥50% drop</td></tr><tr><td>If not at target</td><td>Add ezetimibe → then PCSK9 inhibitor</td></tr><tr><td>Beta-blocker</td><td>Yes if LV impairment; preserved LV + revasc + OMT → consider withholding</td></tr><tr><td>ACEi/ARB; MRA</td><td>HF/LVEF≤40/DM/HTN/CKD; add MRA if LVEF ≤40%+HF; ARNI NOT recommended</td></tr><tr><td>Colchicine</td><td><span class=\"gv-num\">0.5 mg</span> daily long-term — weak rec</td></tr><tr><td>Cardiac rehab</td><td>Refer ALL before discharge</td></tr></table>",
   "title": "ACS secondary prevention bundle",
   "subtitle": "the 2025 Australian numbers and the beta-blocker / colchicine / ARNI shifts",
   "id": "cardiovascular-1"
  },
  {
   "topic": "Dual antiplatelet therapy in ACS — Australian choice, doses and the prasugrel/clopidogrel-with-lysis traps",
   "subarea": "Acute coronary syndromes",
   "trap": "Three Australian-specific gotchas on P2Y12 agent selection:\n- For **primary PCI / routine invasive NSTE-ACS** → default P2Y12 is a **potent agent** (ticagrelor or prasugrel) over clopidogrel\n  - Clopidogrel reserved for those in whom potent agents are **contraindicated** or those on **oral anticoagulant**\n- For a **selective invasive (non-PCI / conservative)** strategy → **ticagrelor OR clopidogrel** (NOT prasugrel — prasugrel is procedure-bound)\n- **Prasugrel** also avoided with **prior stroke/TIA**; relatively avoided in **≥75 y** or **<60 kg**\n- With **fibrinolysis** → P2Y12 is **clopidogrel** (aspirin + clopidogrel)\n  - Potent agents weren't studied with lysis; switch later if PCI follows\n- **Doses:**\n  - Aspirin: **300 mg load** (chewed/dissolved) then 100 mg daily\n  - Ticagrelor: **180 mg load** then 90 mg BD\n  - Clopidogrel: **600 mg load** (300 mg with/after lysis; 75 mg if >75 y with lysis) then 75 mg daily\n- **Maintenance DAPT duration:**\n  - **6–12 months** default\n  - **1–3 months** if low ischaemic/high bleeding risk\n  - Consider **>12 months** if high ischaemic/low bleeding risk",
   "source": "NHFA/CSANZ ACS Guideline 2025, Table 3 + post-discharge antiplatelet recs; Australian Prescriber 2025 secondary prevention summary; product information for prasugrel restrictions",
   "discriminator": "- **Prasugrel** → PCI/routine-invasive only; avoid prior stroke/TIA\n- **Ticagrelor** → PCI, routine OR selective invasive\n- **Clopidogrel** → the lysis/contraindication/OAC agent\n- **Fibrinolysis = clopidogrel** (not ticagrelor)\n- **Selective invasive = ticagrelor or clopidogrel, not prasugrel**",
   "whatFirst": "- **Aspirin 300 mg** now for everyone without contraindication\n- Then pick the P2Y12 by pathway:\n  - **PCI/routine invasive** → ticagrelor or prasugrel\n  - **Lysis** → clopidogrel\n  - **Selective invasive** → ticagrelor or clopidogrel\n  - **Can't tolerate potent agent or on OAC** → clopidogrel",
   "redFlags": "- **Prior intracranial haemorrhage / recent stroke / active bleeding** → reconsider agent\n- **High bleeding risk** → shorten DAPT duration",
   "mcqTrap": "- '**STEMI for thrombolysis → load with ticagrelor 180 mg**' — wrong; clopidogrel is the lysis P2Y12\n- '**Selectively-managed NSTE-ACS → prasugrel**' — wrong; that pathway is ticagrelor or clopidogrel\n- '**Prasugrel for the 80-year-old with prior TIA**' — avoid (age ≥75 + prior TIA both relative/absolute contraindications)",
   "viva": "Out loud: '**Aspirin 300 mg** load for all; for PCI I'd add **ticagrelor or prasugrel**, but with fibrinolysis I use **clopidogrel** because the potent agents aren't validated there. **Prasugrel is procedure-bound** and I'd avoid it with prior stroke or TIA.'",
   "mnemonic": "Lysis → cLopidogreL. Prasugrel → PCI/Procedure only. Ticagrelor → PCI or selective, but Talks back (dyspnoea).",
   "tags": [
    "DAPT",
    "ticagrelor",
    "prasugrel",
    "clopidogrel",
    "fibrinolysis",
    "loading dose"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Pathway</th><th>P2Y12 choice</th><th>Aspirin load</th></tr><tr><td>Primary PCI / routine invasive</td><td>Ticagrelor or prasugrel</td><td>300 mg, then 100 mg/day</td></tr><tr><td>Fibrinolysis</td><td>Clopidogrel</td><td>300 mg, then 100 mg/day</td></tr><tr><td>Selective invasive (non-PCI)</td><td>Ticagrelor or clopidogrel (NOT prasugrel)</td><td>300 mg, then 100 mg/day</td></tr><tr><td>Potent agent C/I or on OAC</td><td>Clopidogrel</td><td>300 mg, then 100 mg/day</td></tr></table>",
   "title": "Dual antiplatelet therapy in ACS",
   "subtitle": "Australian choice, doses and the prasugrel/clopidogrel-with-lysis traps",
   "id": "cardiovascular-2"
  },
  {
   "topic": "NSTE-ACS — risk stratification and the timing of invasive angiography (the 2 h / 24 h / 72 h gotcha)",
   "subarea": "Acute coronary syndromes",
   "trap": "The catch is matching the **timing of angiography** to risk category and recognising very-high-risk features that mean 'treat like a STEMI':\n- **Very-high-risk features** → mandate **immediate invasive strategy within 2 h** of diagnosis (STEMI-like urgency):\n  - **Haemodynamic instability/cardiogenic shock**\n  - **Refractory/ongoing chest pain** despite medical therapy\n  - **Life-threatening arrhythmia/cardiac arrest**\n  - **Mechanical complication**\n  - **Acute heart failure** due to NSTE-ACS\n- **High-risk** (troponin rise/fall = confirmed NSTEMI, dynamic ST/T changes, **GRACE >140**) → consider **early invasive strategy within 24 h**\n- **Lower/intermediate risk** → not routine invasive; test for **inducible ischaemia** (e.g. stress testing) to guide need for angiography (selective/ischaemia-guided strategy)\n- Exam trap: treating an unstable NSTEMI 'later' because there's no ST elevation, or quoting a single rigid **'24 h for everyone'**\n- Use the **GRACE score** (weak rec) rather than gestalt",
   "source": "NHFA/CSANZ ACS Guideline 2025, Table 3 (NSTE-ACS risk-based invasive timing; GRACE)",
   "discriminator": "- **Very-high-risk** NSTE-ACS (shock, refractory pain, arrhythmia, mechanical complication, acute HF) → **immediate (within 2 h**, STEMI-like urgency)\n- **High-risk NSTEMI** → **within 24 h**\n- **Intermediate risk** → **selective/ischaemia-guided** (not routine invasive)",
   "whatFirst": "- Screen for **very-high-risk features** and calculate **GRACE score** → assign the angiography window\n- Start **aspirin + ticagrelor + anticoagulation** and anti-ischaemic therapy meanwhile",
   "redFlags": "- **Ongoing/refractory pain** → immediate invasive within 2 h, do not wait\n- **Haemodynamic or electrical instability** → immediate invasive within 2 h\n- **Acute HF or mechanical complication** → immediate invasive within 2 h",
   "mcqTrap": "- '**NSTEMI with refractory chest pain and hypotension → admit and book angiography for tomorrow (within 24 h)**' — wrong; very-high-risk features mandate an **immediate strategy within 2 h**\n- '**No ST elevation so it's not time-critical**' — wrong; very-high-risk features override this",
   "viva": "Out loud: 'I'd calculate a **GRACE score** and screen for **very-high-risk features**; refractory pain or instability means an **immediate invasive strategy within 2 hours** like a STEMI, a high-risk NSTEMI **within 24 hours**, and lower-risk patients get an **ischaemia-guided selective strategy**.'",
   "mnemonic": "Very-high → 2 h; High → 24 h; Lower → selective/ischaemia-guided.",
   "tags": [
    "NSTEMI",
    "NSTE-ACS",
    "GRACE",
    "invasive timing",
    "risk stratification"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Very-high-risk (shock, refractory pain, arrhythmia, mechanical complication, acute HF) → invasive within 2 h</div><div class=\"gv-step\">High-risk (troponin rise/fall, dynamic ST/T, GRACE &gt;140) → consider early invasive within 24 h</div><div class=\"gv-step\">Lower/intermediate → selective, ischaemia-guided (stress testing)</div></div>",
   "title": "NSTE-ACS",
   "subtitle": "risk stratification and the timing of invasive angiography (the 2 h / 24 h / 72 h gotcha)",
   "id": "cardiovascular-3"
  },
  {
   "topic": "Posterior STEMI — the 'STE-negative' MI hiding behind anterior ST depression",
   "subarea": "Acute coronary syndromes",
   "trap": "Posterior infarcts are missed because the standard 12-lead shows **depression not elevation**:\n- Horizontal **ST depression in V1-V3** (often with tall/broad R waves and upright T waves) is the mirror image of posterior ST elevation\n  - This is a **STEMI-equivalent (ACOMI)** requiring reperfusion, NOT an NSTEMI for medical management\n- Confirm with **posterior leads V7-V9** — threshold is lower:\n  - **STE ≥0.5 mm** (≥1 mm in men <40) is diagnostic\n- The **2025 guideline** lists posterior MI as an ACOMI pattern and recommends recording posterior leads when the 12-lead is non-diagnostic\n- Posterior MI commonly accompanies **inferior or lateral STEMI** (RCA or circumflex)\n- Exam trap: downgrading it to '**anterior ischaemia / NSTEMI**' and missing time-critical reperfusion",
   "source": "NHFA/CSANZ ACS Guideline 2025 (posterior MI as ACOMI pattern; record posterior leads); Universal Definition posterior-lead thresholds",
   "discriminator": "- **Anterior subendocardial ischaemia (NSTEMI)** vs **true posterior STEMI**:\n  - Posterior STEMI: ST depression maximal in V1-V3 + **tall R waves** + **upright T** + confirmatory **STE in V7-V9**\n  - Isolated rate-related ST depression resolves and **lacks posterior-lead elevation**",
   "whatFirst": "- See **ST depression maximal in V1-V3**?\n  - Record **posterior leads V7-V9 immediately** before calling it NSTEMI",
   "redFlags": "- **ST depression V1-V3 + ongoing pain + tall R waves** → treat as STEMI-equivalent, activate reperfusion",
   "mcqTrap": "- '**ST depression V1-V3 → NSTEMI**, start fondaparinux and book early invasive workup' — tempting wrong answer\n  - Correct: recognise posterior STEMI-equivalent → **urgent reperfusion**",
   "viva": "Out loud: 'Anterior ST depression maximal in V1-V3 with tall R waves is the **mirror of posterior injury** — I'd record **posterior leads V7-V9** and if there's ≥0.5 mm elevation, treat it as a **STEMI and reperfuse**.'",
   "mnemonic": "Posterior STEMI = the MCQ's 'V1-V3 ST DEPRESSION' — flip the ECG over.",
   "tags": [
    "posterior STEMI",
    "V7-V9",
    "ST depression",
    "STEMI equivalent",
    "ACOMI"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Clue (standard 12-lead)</th><th>Confirm</th></tr><tr><td>ST DEPRESSION max in V1-V3</td><td>Record V7-V9</td></tr><tr><td>Tall/broad R in V1-V2</td><td>STE ≥0.5 mm in V7-V9 = STEMI</td></tr><tr><td>Upright T waves V1-V3</td><td>Often with inferior/lateral STEMI</td></tr></table>",
   "title": "Posterior STEMI",
   "subtitle": "the 'STE-negative' MI hiding behind anterior ST depression",
   "id": "cardiovascular-4",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flipped_Posterior_STEMI_ECG.png/960px-Flipped_Posterior_STEMI_ECG.png",
     "caption": "Posterior STEMI — horizontal ST depression V1-V3 with tall broad R waves (mirror image of posterior STE)",
     "alt": "Horizontal ST depression maximal in V1-V3 with tall R waves and upright T waves, representing the reciprocal pattern of posterior STEMI",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "RV infarction — the 'AVOID GTN' card and the V4R diagnosis",
   "subarea": "Acute coronary syndromes",
   "trap": "Highest-yield gotcha: in **right ventricular infarction** the RV is **preload-dependent**:\n- **GTN/nitrates** (and other preload-reducers: opioids, diuretics) cause **catastrophic hypotension** — withhold them\n- Classic scenario: inferior STEMI (II, III, aVF) where you give a nitrate and the **BP crashes**\n- Suspect RV infarct in any inferior STEMI with:\n  - **Hypotension + raised JVP + clear lungs**\n- Confirm with **right-sided leads** — **STE ≥1 mm in V4R** is the most sensitive single sign\n  - 2025 guideline explicitly recommends recording right-sided and/or posterior leads when standard 12-lead is non-diagnostic\n- Management is the **opposite of usual MI**:\n  - **IV fluid bolus** to load the RV\n  - **Avoid nitrates/opioids/diuretics**\n  - Add **inotrope (dobutamine)** if still hypotensive\n  - **Reperfuse urgently**\n- Inferior STEMIs are **bradycardia/AV-block prone** (RCA supplies the AV node)",
   "source": "NHFA/CSANZ ACS Guideline 2025 (RV MI listed as an ACOMI pattern; recommends right-sided/posterior leads); standard RV infarct physiology",
   "discriminator": "- **RV infarct** vs **LV-failure cardiogenic shock**:\n  - RV infarct: **clear lungs** + raised JVP + hypotension **responsive to fluids**\n  - LV failure: **pulmonary oedema** and worsens with fluid",
   "whatFirst": "- Inferior STEMI + hypotension → record **right-sided leads (V4R)** and **withhold nitrate**\n  - Give a **fluid bolus** before anything that drops preload",
   "redFlags": "- **Profound hypotension after a single GTN dose** in inferior STEMI → suspect RV infarct\n- **New high-grade AV block** (RCA territory) → may need atropine/pacing",
   "mcqTrap": "- '**Inferior STEMI, BP 85/50 → give GTN infusion for ongoing pain**' — the dangerous wrong answer\n  - Correct: **fluids + reperfusion, NO nitrate**\n- '**Give frusemide**' — wrong in RV infarct",
   "viva": "Out loud: 'Inferior STEMI with hypotension makes me think **RV involvement** — I'd record right-sided leads for **STE in V4R**, **withhold nitrates and opioids**, give a **fluid challenge**, and arrange urgent reperfusion.'",
   "mnemonic": "RV = Really Volume-dependent → fluids in, nitrates OUT.",
   "tags": [
    "RV infarct",
    "inferior STEMI",
    "V4R",
    "nitrate contraindication",
    "preload"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Inferior STEMI + hypotension</span><span class=\"gv-pill\">Clear lungs + raised JVP</span><span class=\"gv-pill\">V4R STE ≥1 mm</span><span class=\"gv-pill\">FLUIDS in</span><span class=\"gv-pill\">Nitrate/opioid/diuretic OUT</span></div>",
   "title": "RV infarction",
   "subtitle": "the 'AVOID GTN' card and the V4R diagnosis",
   "id": "cardiovascular-5",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_inferior_stemi.png",
     "caption": "Inferior STEMI with RV infarction — ST elevation II, III, aVF",
     "alt": "Acute inferior STEMI (STE in II, III, aVF) which is the most common setting for RV infarction",
     "credit": "Glenlarson, Wikimedia Commons, public domain (top diagnosis banner cropped for exam use) · Public domain"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Inferior_and_RtV_MI_with_PVC_15_lead.jpg/960px-Inferior_and_RtV_MI_with_PVC_15_lead.jpg",
     "caption": "Right-sided ECG V4R — ST elevation confirming RV infarction",
     "alt": "ST elevation in lead V4R (right-sided precordial lead) — the diagnostic criterion for right ventricular infarction",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "STEMI ECG criteria — exact mm thresholds, contiguous leads, and the LBBB trap",
   "subarea": "Acute coronary syndromes",
   "trap": "The catch is the **sex/age-specific V2-V3 thresholds** and that a presumed-new LBBB is NOT automatically a STEMI:\n- Diagnostic STE = new STE at the **J-point in ≥2 contiguous leads**:\n  - **≥1 mm (0.1 mV)** in all leads EXCEPT V2-V3\n  - In **V2-V3**: **≥2 mm (0.2 mV)** in men ≥40; **≥2.5 mm (0.25 mV)** in men <40; **≥1.5 mm (0.15 mV)** in women\n- Old teaching **'new LBBB = treat as STEMI'** is outdated\n  - 2025 Australian guideline lists **'LBBB with modified Sgarbossa criteria'** as an ACOMI pattern\n  - Apply **Sgarbossa/Smith-modified Sgarbossa** criteria:\n    - **Concordant STE ≥1 mm**\n    - **Concordant ST depression ≥1 mm** in V1-V3\n    - **Excessively discordant STE** (Smith: ST/S ratio **≤ -0.25**)\n  - NOT mere presence of LBBB\n- Guideline reframes all this under **ACOMI** so occlusion patterns without classic STE still trigger reperfusion",
   "source": "NHFA/CSANZ ACS Guideline 2025 (ACOMI patterns incl. LBBB+modified Sgarbossa); Fourth Universal Definition of MI ECG thresholds",
   "discriminator": "- **True LBBB STEMI vs old/rate-related LBBB**: use **modified Sgarbossa**, not LBBB alone\n- **Benign early repolarisation vs STEMI**: BER has **concave STE**, no reciprocal change, stable on serial ECGs",
   "whatFirst": "- Count the **mm at the J-point** in 2 contiguous leads against the correct **sex/age cut-off**\n- Check for **reciprocal ST depression** (raises specificity for occlusion)",
   "redFlags": "- **Reciprocal change** → activate reperfusion\n- **Ongoing pain with evolving ST** → activate reperfusion\n- **Sgarbossa-positive LBBB** → activate reperfusion",
   "mcqTrap": "- '**New LBBB with chest pain → automatic thrombolysis/PCI**' — outdated; apply **modified Sgarbossa**\n- '**1 mm STE in V2 in a young man = STEMI**' — wrong; men <40 need **≥2.5 mm** in V2-V3",
   "viva": "Out loud: 'I look for **≥1 mm in two contiguous leads** or the **sex-specific V2-V3 cut-off**, plus reciprocal change; a new LBBB I assess with **modified Sgarbossa** rather than treating it as an automatic STEMI.'",
   "mnemonic": "V2-V3 is the fussy one: men ≥40 → 2, men <40 → 2.5, women → 1.5; everywhere else → 1.",
   "tags": [
    "STEMI",
    "ECG criteria",
    "LBBB",
    "Sgarbossa",
    "ACOMI"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Leads</th><th>STE threshold</th></tr><tr><td>All except V2-V3</td><td><span class=\"gv-num\">≥1 mm</span></td></tr><tr><td>V2-V3 men ≥40</td><td><span class=\"gv-num\">≥2 mm</span></td></tr><tr><td>V2-V3 men &lt;40</td><td><span class=\"gv-num\">≥2.5 mm</span></td></tr><tr><td>V2-V3 women</td><td><span class=\"gv-num\">≥1.5 mm</span></td></tr><tr><td>LBBB</td><td>Use modified Sgarbossa, not LBBB alone</td></tr></table>",
   "title": "STEMI ECG criteria",
   "subtitle": "exact mm thresholds, contiguous leads, and the LBBB trap",
   "id": "cardiovascular-6",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_anterior_stemi.png",
     "caption": "Anterior STEMI — ST elevation V1-V6 meeting diagnostic threshold criteria",
     "alt": "Acute anterior STEMI with ST elevation in contiguous precordial leads V1-V6 illustrating J-point elevation thresholds",
     "credit": "Glenlarson, Wikimedia Commons, public domain (top diagnosis banner cropped for exam use) · Public domain"
    },
    {
     "src": "assets/img/cardiology_ecg_inferior_stemi.png",
     "caption": "Inferior STEMI — ST elevation in leads II, III, aVF",
     "alt": "Acute inferior STEMI with ST elevation in II, III, aVF illustrating contiguous inferior lead involvement",
     "credit": "Glenlarson, Wikimedia Commons, public domain (top diagnosis banner cropped for exam use) · Public domain"
    },
    {
     "src": "assets/img/cardiology_ecg_lbbb_01.jpg",
     "caption": "New LBBB — the STEMI-mimic that is NOT automatically a STEMI equivalent",
     "alt": "Left bundle branch block (LBBB) morphology illustrating why presumed-new LBBB alone does not automatically activate the cath lab",
     "credit": "Sameem Arif, Wikimedia Commons, CC BY-SA 4.0 (header/footer text cropped)"
    }
   ]
  },
  {
   "topic": "STEMI reperfusion — the exact Australian time targets (60 / 90 / 120 / 30 min) and the choose-fibrinolysis rule",
   "subarea": "Acute coronary syndromes",
   "trap": "Students quote the old 'door-to-balloon <90 min' and stop. The **2025 Australian numbers** are more granular:\n- **Primary PCI at a PCI-capable centre** → within **60 min** of arrival\n- **Primary PCI for patients transferred** from a non-PCI centre → within **90 min** of first hospital arrival\n- **PCI-vs-fibrinolysis rule = the 120-minute rule**:\n  - Choose **primary PCI** if deliverable within **120 min of first medical contact (FMC)**\n  - Otherwise give **fibrinolysis**\n- **Fibrinolysis** should be delivered within **30 min of FMC** (consider pre-hospital)\n  - Only within **12 h** of symptom onset\n  - Beyond 12 h: reperfuse only if **continuing ischaemia/instability**, and then by PCI\n- After **successful fibrinolysis**: routinely transfer to PCI-capable centre; perform angiography within **2–24 h** (pharmaco-invasive strategy)\n- **Failed fibrinolysis** → consider transfer for **rescue PCI**\n- **≥70 years** → **half-dose tenecteplase** in the pharmaco-invasive strategy",
   "source": "NHFA/CSANZ ACS Guideline 2025, Table 3 (reperfusion timing recommendations)",
   "discriminator": "- **PCI-capable site** (within 60 min) vs **non-PCI site needing transfer** (within 90 min)\n- **PCI vs lysis** decided by the **120-min FMC-to-PCI feasibility**, not by how sick the patient looks",
   "whatFirst": "- Confirm **STEMI/ACOMI on ECG** → ask 'can I deliver **primary PCI within 120 min of FMC**?'\n  - Yes → **primary PCI**\n  - No → **fibrinolysis within 30 min**, then transfer for angio **2–24 h**",
   "redFlags": "- **Failed lysis** (ongoing pain, no ST resolution, shock/arrhythmia) → transfer for **rescue PCI**\n- **Cardiogenic shock or mechanical complication** → urgent angiography regardless of time",
   "mcqTrap": "- '**Give fibrinolysis because the cath lab is 100 min away**' — wrong: 100 min is within the **120-min window**, so primary PCI is still preferred\n- '**Don't transfer after successful lysis**' — wrong; routine **angio at 2–24 h**",
   "viva": "ISBAR: 'Recommendation — this is an **inferior STEMI**, FMC 15 min ago; our nearest PCI centre can deliver **primary PCI within 120 minutes**, so I'm activating primary PCI and giving **aspirin + ticagrelor + heparin** now.'",
   "mnemonic": "60 here, 90 there, 120 decides, 30 to lyse — then transfer 2-to-24.",
   "tags": [
    "STEMI",
    "primary PCI",
    "fibrinolysis",
    "reperfusion timing",
    "pharmaco-invasive"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">STEMI/ACOMI on ECG</div><div class=\"gv-step\">Primary PCI deliverable within 120 min of FMC?</div><div class=\"gv-step\">YES → primary PCI (within 60 min at PCI site, within 90 min if transferred)</div><div class=\"gv-step\">NO → fibrinolysis within 30 min of FMC, only if &lt;12 h symptoms</div><div class=\"gv-step\">After successful lysis → transfer, angio 2-24 h (rescue PCI if unsuccessful)</div></div>",
   "title": "STEMI reperfusion",
   "subtitle": "the exact Australian time targets (60 / 90 / 120 / 30 min) and the choose-fibrinolysis rule",
   "id": "cardiovascular-7"
  },
  {
   "topic": "STEMI vs NSTEMI vs unstable angina — what the troponin + ECG actually decide",
   "subarea": "Acute coronary syndromes",
   "trap": "Students treat troponin as the thing that decides reperfusion — it does NOT:\n- **STEMI/ACOMI is a diagnosis made on the ECG** (ST elevation OR an occlusion pattern)\n  - Activate the cath lab **BEFORE troponin is back** — never wait for it\n- **Troponin only separates NSTEMI from unstable angina**:\n  - **NSTEMI** = no STE + troponin **elevated** (rise/fall above sex-specific 99th percentile)\n  - **Unstable angina** = no STE + troponin **normal** on serial testing\n- Three-way split:\n  1. **STEMI/ACOMI** = ECG → act now\n  2. **NSTEMI** = no STE + troponin elevated\n  3. **Unstable angina** = no STE + troponin normal on serial\n- A **single normal first troponin does NOT exclude ACS** — use a **0/1h or 0/2h hs-troponin pathway**\n- 2025 guideline mandates **sex-specific >99th-percentile cut-offs**\n  - Example (Abbott Architect hs-cTnI): **16 ng/L female** vs **34 ng/L male**\n  - A value read against the male cut-off can **miss MI in a woman**",
   "source": "NHFA/CSANZ Australian Clinical Guideline for Diagnosing and Managing Acute Coronary Syndromes 2025 (MJA 2026;224(2), Tables 1-2)",
   "discriminator": "- **NSTEMI vs unstable angina** = the **troponin** (elevated vs not)\n- **STEMI/ACOMI vs NSTE-ACS** = the **ECG** (STE/occlusion pattern vs none)\n- **Reperfusion rides on the ECG, not the troponin**",
   "whatFirst": "- **ECG within 10 min** of first medical contact\n  - Interpret it yourself\n  - Repeat if ongoing pain and first is non-diagnostic\n- **Troponin sent in parallel** but never gates STEMI reperfusion",
   "redFlags": "- Ongoing pain with a **non-diagnostic first ECG** → repeat serial ECGs, add posterior/right-sided leads\n- **Dynamic ST changes**\n- **Haemodynamic/electrical instability**",
   "mcqTrap": "- '**Wait for the troponin before activating the cath lab**' in diagnostic ST elevation — wrong; **STEMI is an ECG diagnosis**\n- '**A single normal troponin rules out ACS**' — wrong; need a **serial 0/1h or 0/2h pathway**",
   "viva": "Out loud: 'I'd get an **ECG within 10 minutes** and read it myself; if there's ST elevation I **activate the cath lab now** and don't wait for troponin. Troponin tells me **NSTEMI vs unstable angina**, not whether to reperfuse.'",
   "mnemonic": "ECG opens the door (STEMI); troponin sorts the room (NSTEMI vs UA).",
   "tags": [
    "STEMI",
    "NSTEMI",
    "unstable angina",
    "troponin",
    "ECG"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th></th><th>ST elevation</th><th>hs-Troponin</th><th>Action</th></tr><tr><td>STEMI / ACOMI</td><td>Yes (or occlusion pattern)</td><td>Don't wait for it</td><td>Reperfuse NOW</td></tr><tr><td>NSTEMI</td><td>No</td><td>Elevated (rise/fall)</td><td>Risk-stratify, invasive</td></tr><tr><td>Unstable angina</td><td>No</td><td>Normal on serial</td><td>Ischaemic w/up</td></tr></table>",
   "title": "STEMI vs NSTEMI vs unstable angina",
   "subtitle": "what the troponin + ECG actually decide",
   "id": "cardiovascular-8",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_anterior_stemi.png",
     "caption": "STEMI — ST elevation on ECG (cath lab activated before troponin)",
     "alt": "Acute anterior STEMI demonstrating that reperfusion decision is made on ECG findings, not troponin",
     "credit": "Glenlarson, Wikimedia Commons, public domain (top diagnosis banner cropped for exam use) · Public domain"
    }
   ]
  },
  {
   "topic": "Wellens & de Winter — the STEMI-equivalents with NO ST elevation",
   "subarea": "Acute coronary syndromes",
   "trap": "Both are proximal-LAD danger patterns an MCQ disguises as 'no STEMI, looks benign':\n- **Wellens syndrome** = deeply **inverted (Type B)** or **biphasic (Type A) T waves** in V2-V3 (±V1-V6)\n  - Typically recorded when the patient is **pain-free**\n  - Preserved R waves and little/no troponin rise\n  - Signals a **critical proximal LAD lesion** that will infarct soon\n  - Crucial gotcha: **do NOT stress-test** a Wellens patient — provokes a large anterior MI\n  - → Needs **urgent inpatient angiography**\n- **de Winter pattern** = **upsloping ST depression at the J-point (1–3 mm)** in V1-V6 with **tall symmetric T waves**, often with slight STE in aVR\n  - An **acute proximal LAD occlusion** — listed by 2025 guideline as an **ACOMI pattern**\n  - Needs the **same urgent reperfusion as a STEMI**\n- 2025 guideline also flags as high-risk patterns: **Wellens T waves**, **diffuse ST depression with STE in aVR**, and **hyperacute T waves**\n- Do not be reassured by the **absence of ST elevation**",
   "source": "NHFA/CSANZ ACS Guideline 2025 (de Winter listed as ACOMI; Wellens/aVR/hyperacute T flagged as high-risk progression patterns); ECG literature",
   "discriminator": "- **Wellens** = **T-wave changes** (inverted/biphasic) usually **pain-free** = warning of impending occlusion → urgent angio (not stress test)\n- **de Winter** = **ST depression + tall T during pain** = active occlusion = **immediate reperfusion like STEMI**",
   "whatFirst": "- Recognise the pattern in precordial leads\n  - **de Winter** → treat as STEMI (activate **reperfusion now**)\n  - **Wellens** → admit for **urgent inpatient angiography**; do NOT exercise-test",
   "redFlags": "- **de Winter with ongoing pain** = active LAD occlusion → cath lab\n- **Wellens with recurrent pain or evolving STE** → acute occlusion",
   "mcqTrap": "- '**Wellens pattern, pain-free, troponin normal → discharge with outpatient stress test**' — dangerous wrong answer (can precipitate **massive anterior MI**)\n- '**de Winter, no ST elevation → manage as NSTEMI medically**' — wrong; it's an **ACOMI/STEMI-equivalent**",
   "viva": "Out loud: 'Biphasic/deep T inversions in V2-V3 in a now pain-free patient are **Wellens** — a proximal LAD warning; I'd admit for **urgent angiography** and **avoid stress testing**. Upsloping ST depression with tall T waves is **de Winter** — an LAD occlusion equivalent I'd **reperfuse like a STEMI**.'",
   "mnemonic": "Wellens = Warning (T waves, pain-free, no treadmill); de Winter = Down-then-tall = occlusion NOW.",
   "tags": [
    "Wellens",
    "de Winter",
    "LAD occlusion",
    "STEMI equivalent",
    "ACOMI"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th></th><th>Wellens</th><th>de Winter</th></tr><tr><td>ECG</td><td>Deep/biphasic T inversion V2-V3</td><td>Upsloping ST depression + tall T V1-V6, STE aVR</td></tr><tr><td>Timing</td><td>Usually pain-FREE</td><td>During pain (active)</td></tr><tr><td>Means</td><td>Critical proximal LAD, will occlude</td><td>Proximal LAD OCCLUDED now</td></tr><tr><td>Do</td><td>Urgent angio; NO stress test</td><td>Reperfuse as STEMI</td></tr></table>",
   "title": "Wellens & de Winter",
   "subtitle": "the STEMI-equivalents with NO ST elevation",
   "id": "cardiovascular-9",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_wellens_biphasic_t_01.jpg",
     "caption": "Wellens syndrome — biphasic (Type A) or deeply inverted (Type B) T waves V2-V3 indicating critical proximal LAD stenosis",
     "alt": "Wellens pattern: deeply inverted or biphasic T waves in V2-V3 recorded in a pain-free window, signalling critical proximal LAD stenosis",
     "credit": "James Heilman MD (Jmh649), Wikimedia Commons, CC BY-SA 3.0 (edge smudge cropped)"
    }
   ]
  },
  {
   "topic": "Acute pulmonary oedema — the management SEQUENCE and exact Australian doses",
   "subarea": "Heart failure",
   "trap": "Reaching for **morphine and lying the patient flat**:\n- **Morphine is NO LONGER recommended routinely** (associated with more ventilation, ICU admission and mortality)\n- **Oxygen only if SpO2 <92%** (target 92–96%, or 88–92% if COPD) — routine high-flow O2 in a normally-saturating patient is wrong\n- **Real first-line vasodilator is GTN** when SBP >90",
   "whatFirst": "- **Sit upright**\n- **O2 ONLY if SpO2 <92%** (target 92–96%; COPD 88–92%)\n- **GTN** (sublingual 300–600 microg, repeat q5min, max 1800 microg; or IV infusion 5–10 microg/min doubling q5min, max 200 microg/min) — provided **SBP >90**\n- **IV furosemide 40–80 mg** slow bolus (repeat at 20 min)\n- **CPAP/NIV** if distress/acidosis/hypoxia despite O2\n- **Inotrope (dobutamine)** + ICU if **hypotensive/hypoperfused**",
   "discriminator": "- **Hypertensive flash pulmonary oedema** (SBP high) → workhorse is **nitrates** (preload/afterload reduction); diuretic is secondary\n- **Cold-and-wet hypotensive cardiogenic-shock patient** (SBP <90) → **nitrates CONTRAINDICATED**; need **inotropes/ICU**\n- **SBP is the fork in the road**",
   "redFlags": "- **SBP <90** with cool peripheries/oliguria = cardiogenic shock → **ICU, inotropes, do NOT give GTN**\n- **Persistent hypercapnia/hypoxia** despite NIV, or exhaustion → **intubate**\n- Hunt for and treat **ACS/STEMI immediately** (ECG + troponin)",
   "mcqTrap": "- '**Give IV morphine and furosemide**' as the best initial step — WRONG\n  - Correct: **upright posture + GTN (if SBP >90) + IV frusemide ± NIV**; morphine is no longer routine",
   "viva": "ISBAR escalation: 'I have a patient in acute pulmonary oedema, SpO2 84%, BP 170/95 — I've **sat them up**, started **GTN and IV frusemide**, and I'm requesting **CPAP** and an urgent **ECG/troponin** to exclude an ischaemic precipitant.'",
   "source": "Australian Prescriber 'Managing acute pulmonary oedema' (australianprescriber.tg.org.au); eTG (current)",
   "verified": true,
   "mnemonic": "'Sit up, Squeeze off preload with nitrates, Shift fluid with frusemide, Support with NIV'.",
   "tags": [
    "acute",
    "pulmonary-oedema",
    "emergency",
    "GTN",
    "frusemide",
    "NIV"
   ],
   "cutoffs": [
    "**O2 only if SpO2 < 92%** (target 92–96%; COPD 88–92%)",
    "**GTN SL 300–600 microg** q5min (max 1800 microg); IV **5–10 microg/min** doubling q5min (max **200 microg/min**)",
    "Need **SBP > 90** for nitrates",
    "IV frusemide **40–80 mg** slow, repeat 20 min (up to 160–200 mg)",
    "**Morphine NOT routine**"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Sit upright</div><div class=\"gv-step\">O2 only if SpO2 &lt; 92% (target 92–96%)</div><div class=\"gv-step\">GTN if SBP &gt; 90</div><div class=\"gv-step\">IV frusemide 40–80 mg slow</div><div class=\"gv-step\">CPAP/NIV if distress/acidosis</div><div class=\"gv-step\">SBP &lt; 90 → inotrope (dobutamine) + ICU; no nitrates</div></div>",
   "title": "Acute pulmonary oedema",
   "subtitle": "the management SEQUENCE and exact Australian doses",
   "id": "cardiovascular-10",
   "images": [
    {
     "src": "assets/img/cardiology_cxr_pulmonary_oedema_01.jpg",
     "caption": "Cardiogenic pulmonary oedema — CXR showing bat-wing shadowing, upper lobe diversion, Kerley B lines",
     "alt": "Acute cardiogenic pulmonary oedema on chest X-ray with perihilar bat-wing alveolar shadowing, cardiomegaly, upper lobe blood diversion and pleural effusions",
     "credit": "Hellerhoff / Wikimedia Commons · CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "Acute pulmonary oedema — the precipitant hunt (don't just treat the oedema)",
   "subarea": "Heart failure",
   "trap": "Treating the pulmonary oedema and **forgetting WHY it happened** — the exam answer is almost always '**find and treat the precipitant**':\n- Biggest miss is an **ischaemic trigger**:\n  - Every patient needs an **immediate ECG + troponin** (ACS/STEMI is a top precipitant and changes management entirely — e.g. cath lab)\n- Do not anchor on '**just fluid overload / missed diuretic**'",
   "whatFirst": "- Concurrent with stabilisation:\n  - **12-lead ECG + troponin**\n  - **CXR, U&E, FBC**\n  - Focused history for **medication non-adherence** and new **rate-control/NSAID use**\n- **Treat the trigger**, not just the symptom",
   "discriminator": "- **New AF with rapid ventricular response** is both a common precipitant AND something to **rate/rhythm control**\n- A **negative troponin** doesn't exclude a tachyarrhythmia or hypertensive emergency as the cause — keep hunting",
   "redFlags": "- **STEMI/NSTEMI** on ECG-troponin → urgent reperfusion pathway\n- **New severe MR / aortic dissection / acute valve failure** → surgical/structural emergency\n- **Bilateral oedema with renal artery stenosis pattern** → 'flash' recurrent APO",
   "mcqTrap": "- Choosing '**increase the regular diuretic and discharge**' without ECG/troponin — WRONG; misses an **ACS precipitant**",
   "viva": "Out loud: 'After stabilising I always **hunt the precipitant** — **ECG and troponin** first for ischaemia, then **arrhythmia**, **non-adherence**, infection, anaemia, renal failure, uncontrolled hypertension, valve dysfunction and offending drugs like NSAIDs or verapamil.'",
   "source": "Australian Prescriber 'Managing acute pulmonary oedema' (australianprescriber.tg.org.au); eTG (current); NHFA/CSANZ 2018",
   "verified": true,
   "mnemonic": "'FAILURE': Forgot meds/Fluids, Arrhythmia, Ischaemia/Infection, Lifestyle (Na+/fluid), Upregulation (anaemia/thyroid/pregnancy), Renal failure/stenosis, Embolus(PE)/Endocarditis + drugs (NSAIDs, verapamil/diltiazem).",
   "tags": [
    "acute",
    "precipitant",
    "ACS",
    "arrhythmia",
    "ECG",
    "troponin"
   ],
   "cutoffs": [
    "**Mandatory work-up**: ECG + troponin, CXR, U&E, FBC",
    "**Top precipitants**: ischaemia/ACS, arrhythmia (AF), non-adherence, infection, anaemia, renal/RAS, hypertension, valve, NSAIDs/verapamil/diltiazem"
   ],
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Ischaemia / ACS</span><span class=\"gv-pill\">Arrhythmia (AF)</span><span class=\"gv-pill\">Non-adherence</span><span class=\"gv-pill\">Infection</span><span class=\"gv-pill\">Anaemia</span><span class=\"gv-pill\">Renal failure / RAS</span><span class=\"gv-pill\">Uncontrolled HTN</span><span class=\"gv-pill\">Valve</span><span class=\"gv-pill\">NSAIDs / verapamil</span></div>",
   "title": "Acute pulmonary oedema",
   "subtitle": "the precipitant hunt (don't just treat the oedema)",
   "id": "cardiovascular-11",
   "images": [
    {
     "src": "assets/img/cardiology_cxr_pulmonary_oedema_01.jpg",
     "caption": "Pulmonary oedema CXR — the starting point for identifying a precipitant (ischaemia, arrhythmia, hypertension, etc.)",
     "alt": "Chest X-ray in acute pulmonary oedema — confirms the diagnosis while the clinician hunts for the underlying precipitant (ACS, AF, hypertensive crisis, valvular failure)",
     "credit": "Hellerhoff / Wikimedia Commons · CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "Beta-blockers in HFrEF — which agents 'count' and the don't-start-in-decompensation rule",
   "subarea": "Heart failure",
   "trap": "- Picking **atenolol or any beta-blocker** as equivalent — only FOUR have HFrEF outcome trial evidence in Australia\n  - **carvedilol**, bisoprolol, metoprolol SUCCINATE (CR), and nebivolol\n- **Metoprolol TARTRATE** (immediate-release) is NOT proven and should not be the answer\n- Second trap: starting/uptitrating a beta-blocker in a patient who is **acutely fluid-overloaded and wet**",
   "whatFirst": "- Achieve **euvolaemia first**\n- Start the beta-blocker only when the patient is **stable/dry**, at low dose, then uptitrate slowly\n  - Roughly **every 2 weeks** as tolerated\n- In acute decompensation, **continue** an existing beta-blocker if tolerated rather than stopping it\n  - Abrupt cessation **worsens outcomes**\n- Do **NOT initiate** a new beta-blocker mid-flare",
   "discriminator": "- **Decompensated vs stable**: opposite actions depending on volume state\n  - Acute pulmonary oedema: do **NOT** start or uptitrate a beta-blocker\n  - Compensated chronic HFrEF: beta-blocker is a **core mortality pillar**",
   "redFlags": "- **Heart rate <50**, symptomatic hypotension, high-grade AV block, or cardiogenic shock → hold/down-titrate\n- **Cardiogenic shock** is a contraindication to initiation",
   "mcqTrap": "- **'Start metoprolol tartrate 25 mg BD'** in HFrEF — WRONG agent\n  - Immediate-release tartrate lacks the outcome evidence; use **succinate CR**",
   "viva": "- Only **carvedilol, bisoprolol, metoprolol succinate or nebivolol**\n- Only once the patient is **euvolaemic**\n- **Continue, not stop**, an existing beta-blocker during a mild decompensation",
   "source": "MJA Consensus Statement 2022 (217:4); NHFA/CSANZ 2018; eTG (current)",
   "verified": true,
   "mnemonic": "'Can Beta-Block More Nicely' = Carvedilol, Bisoprolol, Metoprolol succinate, Nebivolol.",
   "tags": [
    "beta-blocker",
    "pharmacology",
    "decompensation"
   ],
   "cutoffs": [
    "Proven agents: **carvedilol** / **bisoprolol** / **metoprolol succinate CR** / **nebivolol**",
    "Initiate only when **euvolaemic**",
    "Uptitrate ~**q2weekly**"
   ],
   "visualHtml": "",
   "title": "Beta-blockers in HFrEF",
   "subtitle": "which agents 'count' and the don't-start-in-decompensation rule",
   "id": "cardiovascular-12"
  },
  {
   "topic": "BNP / NT-proBNP interpretation — rule-OUT thresholds, acute vs non-acute, and the confounders",
   "subarea": "Heart failure",
   "trap": "- BNP is a **RULE-OUT** (high negative predictive value) test — not a rule-in\n- Treating a single mildly raised value as **diagnostic** is a trap\n- Treating a normal value as **guaranteeing no HF** is equally wrong\n- Confounders that **RAISE** levels independent of HF: age, AF, renal impairment, PE, sepsis\n- Confounder that **LOWERS** BNP: **obesity**\n- **ARNI raises BNP** but lowers NT-proBNP → use **NT-proBNP** to monitor patients on sacubitril/valsartan",
   "whatFirst": "- If level is **below the rule-out threshold** and pre-test probability is low → HF is unlikely, look elsewhere\n  - Don't echo everyone\n- If **raised or clinically suspicious** → proceed to **echocardiography** to confirm and categorise",
   "discriminator": "- **Acute (ED, dyspnoea)** uses a higher rule-out cut-off than non-acute (GP/chronic)\n- Non-acute: **NT-proBNP <125 ng/L** makes HF very unlikely (high NPV)\n- Acute: single rule-out around **NT-proBNP ~300 ng/L**\n- **BNP rule-out**: ~<100 ng/L (acute) / <35–50 ng/L (chronic)",
   "redFlags": "- Very **high NT-proBNP** with a structurally near-normal heart → think PE, severe renal failure, or **amyloid**\n  - Escalate imaging; do not dismiss",
   "mcqTrap": "- **'Normal BNP in an obese patient excludes heart failure'** — WRONG\n  - Obesity **falsely lowers** BNP; a 'normal' value can mask HF\n- **'Raised BNP = diagnostic of HF'** is equally wrong given AF/renal/age confounders",
   "viva": "- Natriuretic peptides are a **rule-out** test with high negative predictive value\n- Interpret against **age, AF, and renal function**\n- Remember **obesity lowers** them\n- Confirm with **echo** if raised",
   "source": "NHFA/CSANZ Australian HF Guidelines 2018; MBS NT-proBNP item (non-hospital)",
   "verified": false,
   "mnemonic": "'BNP rules OUT, echo rules IN.' Confounders up: Age, AF, Renal, PE; down: fat (obesity).",
   "tags": [
    "BNP",
    "NT-proBNP",
    "diagnosis",
    "biomarker",
    "rule-out"
   ],
   "cutoffs": [
    "Non-acute NT-proBNP **< 125 ng/L** → HF unlikely (high NPV)",
    "Acute NT-proBNP rule-out ~ **< 300 ng/L**",
    "BNP rule-out ~ **< 100 ng/L** (acute), **< 35–50 ng/L** (chronic)",
    "Confounders ↑: **age, AF, renal impairment, PE, sepsis**",
    "Confounder ↓: **obesity**; ARNI raises BNP but lowers NT-proBNP"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Setting</th><th>NT-proBNP rule-out</th><th>Interpretation</th></tr><tr><td>Non-acute (GP)</td><td>&lt; <span class=\"gv-num\">125 ng/L</span></td><td>HF very unlikely (high NPV)</td></tr><tr><td>Acute (ED)</td><td>&lt; <span class=\"gv-num\">300 ng/L</span></td><td>Acute HF unlikely</td></tr><tr><td>Raised</td><td>—</td><td>Proceed to echo; weigh age/AF/renal</td></tr></table>",
   "title": "BNP / NT-proBNP interpretation",
   "subtitle": "rule-OUT thresholds, acute vs non-acute, and the confounders",
   "id": "cardiovascular-13"
  },
  {
   "topic": "HFrEF vs HFmrEF vs HFpEF — the exact LVEF cut-offs (and the trap of '40 vs 50')",
   "subarea": "Heart failure",
   "trap": "- Most tempting wrong MCQ: calling **LVEF <50% 'HFrEF'** — wrong; the 40s are a SEPARATE category\n- **HFrEF** = LVEF **≤40%**\n- **HFmrEF** (mildly reduced) = LVEF **41–49%**\n- **HFpEF** = LVEF **≥50%** PLUS objective evidence of structural/diastolic abnormality + raised natriuretic peptides\n  - A normal echo + raised BNP is NOT automatically HFpEF — must exclude non-cardiac causes\n- HFpEF is a **diagnosis of structured exclusion**, not just 'breathless + preserved EF'",
   "whatFirst": "- Get a **transthoracic echo** to measure LVEF — this is the single test that categorises the patient\n  - Drives which drugs reduce mortality\n- Do not commit to a HF subtype label on **clinical grounds alone**",
   "discriminator": "- Mortality-reducing **'pillars'** proven only in **HFrEF (≤40%)**\n- In HFpEF the agent with the firmest outcome benefit is an **SGLT2i** (all EF)\n- **ACEi/ARB/beta-blocker do NOT reduce mortality in HFpEF** — do not pick them as the 'evidence-based' HFpEF answer",
   "redFlags": "- New HFpEF label in a **young patient** OR very high BNP + **low voltage + thick walls** on ECG/echo → think **infiltrative mimic (cardiac amyloid)**\n  - Refer; do not just start a diuretic and discharge",
   "mcqTrap": "- **'LVEF 45% = HFrEF, start full quadruple therapy for mortality'** — WRONG\n  - LVEF 45% is **HFmrEF**; only **SGLT2i** has a firm recommendation here; others are 'may be considered'",
   "viva": "- Categorise by **LVEF on echo**: ≤40 reduced, 41–49 mildly reduced, ≥50 preserved\n  - This decides which therapies **actually reduce mortality**",
   "source": "NHFA/CSANZ–aligned MJA Consensus Statement 2022 (217:4); 2021 Universal Definition of HF",
   "verified": true,
   "mnemonic": "'40–50 is the mid-zone' — ≤40 reduced, the 40s are 'mid', 50+ preserved.",
   "tags": [
    "definition",
    "echo",
    "LVEF",
    "classification"
   ],
   "cutoffs": [
    "HFrEF LVEF **≤40%**",
    "HFmrEF LVEF **41–49%**",
    "HFpEF LVEF **≥50%** + structural/diastolic evidence + raised NP"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Category</th><th>LVEF</th><th>Mortality drugs proven?</th></tr><tr><td>HFrEF</td><td><span class=\"gv-num\">≤ 40%</span></td><td>Yes — all 4 pillars</td></tr><tr><td>HFmrEF</td><td><span class=\"gv-num\">41–49%</span></td><td>SGLT2i recommended; others 'may consider'</td></tr><tr><td>HFpEF</td><td><span class=\"gv-num\">≥ 50%</span></td><td>SGLT2i (others no mortality benefit)</td></tr></table>",
   "title": "HFrEF vs HFmrEF vs HFpEF",
   "subtitle": "the exact LVEF cut-offs (and the trap of '40 vs 50')",
   "id": "cardiovascular-14"
  },
  {
   "topic": "Iron deficiency in HFrEF — the exact ferritin/TSAT criteria and 'IV not oral'",
   "subarea": "Heart failure",
   "trap": "- Requiring **anaemia before treating iron deficiency** — wrong; treat even WITHOUT anaemia\n- Giving **oral iron** — ineffective in HF; use IV\n- Iron deficiency definition has **two limbs**:\n  - **Ferritin <100 microg/L**, OR\n  - Ferritin **100–300 microg/L** with **TSAT <20%**",
   "whatFirst": "- **Screen iron studies** in symptomatic HFrEF\n- If criteria met, give **IV ferric carboxymaltose**\n  - Improves symptoms, 6-minute walk, QoL and reduces HF hospitalisation\n- Do **NOT** use oral iron",
   "discriminator": "- HF iron-deficiency criteria differ from general medicine\n  - Ferritin up to **300** still counts as deficient if **TSAT <20%** (functional iron deficiency from inflammation)\n  - Elsewhere ferritin >100 would be called **replete**",
   "redFlags": "- Do **not infuse IV iron** during active **infection/sepsis**\n- Watch for **hypophosphataemia** with ferric carboxymaltose",
   "mcqTrap": "- **'Ferritin 150, so iron stores adequate — no treatment'** — WRONG in HF if **TSAT <20%**\n  - That's functional iron deficiency warranting IV iron",
   "viva": "- Treat iron deficiency in HFrEF **even without anaemia**\n  - Ferritin **<100**, or **100–300 with TSAT <20%**\n- Use **IV ferric carboxymaltose** — oral iron doesn't work here",
   "source": "NHFA/CSANZ 2018 (IV ferric carboxymaltose); FAIR-HF/CONFIRM-HF criteria used in Australian practice",
   "verified": false,
   "mnemonic": "'100, or 300 with 20' — ferritin <100, or 100–300 + TSAT <20%.",
   "tags": [
    "iron-deficiency",
    "ferritin",
    "TSAT",
    "ferric-carboxymaltose"
   ],
   "cutoffs": [
    "Iron deficient: ferritin **< 100 microg/L**",
    "OR ferritin **100–300 microg/L** with TSAT **< 20%**",
    "Treat even if **NOT anaemic**",
    "Use **IV ferric carboxymaltose** (oral ineffective)"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Ferritin</th><th>TSAT</th><th>Iron deficient?</th></tr><tr><td>&lt; <span class=\"gv-num\">100</span></td><td>any</td><td>Yes → IV iron</td></tr><tr><td><span class=\"gv-num\">100–300</span></td><td>&lt; <span class=\"gv-num\">20%</span></td><td>Yes (functional) → IV iron</td></tr><tr><td>&gt; 300</td><td>≥ 20%</td><td>No</td></tr></table>",
   "title": "Iron deficiency in HFrEF",
   "subtitle": "the exact ferritin/TSAT criteria and 'IV not oral'",
   "id": "cardiovascular-15"
  },
  {
   "topic": "MRA (spironolactone/eplerenone) — the exact K+ and eGFR safety thresholds",
   "subarea": "Heart failure",
   "trap": "- Do NOT start MRA if baseline **K+ >5.0 mmol/L** or **eGFR <30 mL/min/1.73m²**\n- Most tempting wrong move: continuing/uptitrating MRA despite **rising K+**\n- Check **U&E + K+** at baseline, then ~**1 week** and ~**4 weeks** after starting or any dose increase\n- **STOP (or halve)** if K+ **≥5.5**; cease if K+ **≥6.0**",
   "whatFirst": "- Before prescribing: check **K+ and eGFR**\n- After starting: recheck **U&E within ~1 week**\n- Counsel to avoid **NSAIDs, potassium supplements, and 'salt substitutes' (KCl)**\n- Hold if **dehydrated/unwell** ('sick day' guidance)",
   "discriminator": "- **Gynaecomastia/breast tenderness** on spironolactone → switch to **eplerenone** (selective MRA, no anti-androgen effect)\n  - Both equally reduce mortality\n- **Finerenone** (non-steroidal MRA) = HFpEF-context agent, not the classic HFrEF MRA",
   "redFlags": "- **K+ ≥6.0 mmol/L** → cease MRA, treat hyperkalaemia, ECG\n- **Rising creatinine + rising K+** on triple RAAS blockade → review whole regimen",
   "mcqTrap": "- **'Continue spironolactone and add a potassium supplement'** in HFrEF with K+ 5.4 — WRONG and dangerous\n  - Drives **life-threatening hyperkalaemia**",
   "viva": "- Would not start MRA if **K+ above 5.0** or **eGFR under 30**\n- Recheck potassium at **one week**; cease if it reaches **6**",
   "source": "eTG (current, Cardiovascular); NHFA/CSANZ 2018; MJA Consensus 2022",
   "verified": false,
   "mnemonic": "'5-0 to start, 6-0 to stop' (K+ ceiling 5.0 at initiation, cease at 6.0).",
   "tags": [
    "MRA",
    "potassium",
    "renal",
    "monitoring",
    "hyperkalaemia"
   ],
   "cutoffs": [
    "Don't start if K+ **> 5.0**",
    "Don't start if eGFR **< 30**",
    "Recheck K+ **~1 wk** & **~4 wk**",
    "Halve/hold K+ **≥ 5.5**",
    "Cease K+ **≥ 6.0**"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>K+ (mmol/L)</th><th>Action</th></tr><tr><td>&gt; <span class=\"gv-num\">5.0</span></td><td>Do not initiate MRA</td></tr><tr><td>≥ <span class=\"gv-num\">5.5</span></td><td>Halve dose / hold, recheck</td></tr><tr><td>≥ <span class=\"gv-num\">6.0</span></td><td>Cease, treat hyperkalaemia + ECG</td></tr></table>",
   "title": "MRA (spironolactone/eplerenone)",
   "subtitle": "the exact K+ and eGFR safety thresholds",
   "id": "cardiovascular-16",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_hyperkalaemia.jpg",
     "caption": "Hyperkalaemia ECG — peaked T waves, widened QRS (danger of MRA-induced hyperkalaemia)",
     "alt": "ECG changes of hyperkalaemia (peaked symmetrical T waves, PR prolongation, wide QRS) — the cardiac consequence of not monitoring potassium during MRA therapy",
     "credit": "Dr Michael-Joseph F. Agbayani & Dr Eddieson Gonzales, Wikimedia Commons, CC BY 4.0"
    }
   ]
  },
  {
   "topic": "NYHA class & WHEN to start each drug (and what NYHA does NOT decide)",
   "subarea": "Heart failure",
   "trap": "- Do NOT wait for symptoms before starting pillars — indicated by **LVEF ≤40%**, NOT symptom class\n  - Started even in **NYHA I** (asymptomatic LV dysfunction) for ACEi/ARNI/beta-blocker/SGLT2i\n- MRA nuance: outcome trials in **symptomatic patients (NYHA II–IV)**, but contemporary practice adds it early\n- **NYHA** is about SYMPTOMS, not EF, and it **fluctuates**",
   "whatFirst": "- Categorise by **LVEF first** (drives drugs)\n- Use **NYHA to track symptom burden** over time and to flag device eligibility and advanced-HF referral\n- Do NOT use NYHA class to decide whether patient 'qualifies' for basic pillars",
   "discriminator": "- **Device timing** uses NYHA + EF + QRS together\n  - **ICD** (primary prevention) and **CRT**: considered in NYHA II–III + LVEF **≤35%** + **≥3 months** optimal medical therapy\n  - **CRT** additionally needs **LBBB/wide QRS**\n- **NYHA IV** truly end-stage → advanced therapies/palliation, not necessarily a new ICD",
   "redFlags": "- Persisting **NYHA III–IV** despite optimised quadruple therapy\n- Recurrent admissions, hypotension limiting uptitration, rising creatinine, need for inotropes → **refer to advanced HF/transplant-LVAD service**",
   "mcqTrap": "- **'Patient is NYHA I with LVEF 30%, so withhold drugs until symptomatic'** — WRONG\n  - Asymptomatic HFrEF (≤40%) still warrants the **mortality pillars**",
   "viva": "- NYHA grades **symptoms, not ejection fraction**\n- Start pillars on the basis of **LVEF at or below 40%** even when asymptomatic\n- Use **NYHA + EF + QRS** to time devices after **≥3 months** of optimal therapy",
   "source": "NHFA/CSANZ Australian HF Guidelines 2018; MJA Consensus Statement 2022 (217:4)",
   "verified": false,
   "mnemonic": "'EF picks the pills, NYHA picks the device (and the referral).'",
   "tags": [
    "NYHA",
    "timing",
    "devices",
    "ICD",
    "CRT",
    "advanced-HF"
   ],
   "cutoffs": [
    "Pillars indicated by LVEF **≤ 40%** regardless of NYHA (incl. **NYHA I**)",
    "ICD/CRT: LVEF **≤ 35%** + symptomatic (NYHA **II–III**) + **≥ 3 months** optimal medical therapy",
    "CRT additionally needs **LBBB / wide QRS**",
    "MRA evidence base = **NYHA II–IV**"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>NYHA</th><th>Limitation</th></tr><tr><td>I</td><td>No limitation (start pillars anyway if LVEF ≤40%)</td></tr><tr><td>II</td><td>Slight — symptoms on ordinary activity</td></tr><tr><td>III</td><td>Marked — symptoms on less-than-ordinary activity</td></tr><tr><td>IV</td><td>Symptoms at rest</td></tr></table>",
   "title": "NYHA class & WHEN to start each…",
   "id": "cardiovascular-17"
  },
  {
   "topic": "Sacubitril/valsartan (ARNI) specific gotchas — angioedema, washout, and the BNP monitoring trap",
   "subarea": "Heart failure",
   "trap": "- Co-prescribing **ARNI WITH an ACEi** → additive bradykinin → **angioedema**\n- Starting ARNI without the **≥36-hour ACEi washout** — same risk\n- Monitoring an ARNI patient with **BNP** — neprilysin inhibition RAISES BNP (its substrate)\n  - Use **NT-proBNP** to monitor patients on sacubitril/valsartan",
   "whatFirst": "- Confirm **no history of angioedema**\n- **Stop the ACEi** and wait **≥36 hours**\n- Check baseline **K+, renal function, and SBP** (need SBP generally **≥100**)\n- Start **low dose** and uptitrate",
   "discriminator": "- **ARNI preferred and superior** for mortality in HFrEF\n- Contraindicated with **prior angioedema**\n- Switching from **ACEi → ARNI**: needs **≥36-hour washout**\n- Switching from **ARB → ARNI**: **NO washout** needed",
   "redFlags": "- **Lip/tongue/airway swelling** → stop drug, airway management, **never rechallenge** after angioedema\n- Symptomatic hypotension or hyperkalaemia → down-titrate",
   "mcqTrap": "- **'Add sacubitril/valsartan to the existing ramipril'** — WRONG\n  - Must stop ACEi and observe **≥36-hour washout** (angioedema risk)",
   "viva": "- Stop the ACE inhibitor, wait **at least 36 hours**, then start the ARNI\n- Monitor with **NT-proBNP**, not BNP — neprilysin inhibition **raises BNP**",
   "source": "MJA Consensus Statement 2022 (217:4); eTG (current)",
   "verified": true,
   "mnemonic": "'36 hours, NT not B' — 36h washout; follow NT-proBNP.",
   "tags": [
    "ARNI",
    "sacubitril-valsartan",
    "angioedema",
    "washout",
    "NT-proBNP"
   ],
   "cutoffs": [
    "ACEi→ARNI washout **≥ 36 hours**",
    "Prior angioedema = **contraindication**",
    "Monitor with **NT-proBNP** (BNP rises on ARNI)",
    "Need adequate SBP (~**≥100**) to initiate"
   ],
   "visualHtml": "",
   "title": "Sacubitril/valsartan (ARNI) specific gotchas",
   "subtitle": "angioedema, washout, and the BNP monitoring trap",
   "id": "cardiovascular-18"
  },
  {
   "topic": "SGLT2i in heart failure — the 'all-EF, non-diabetic too' pillar and its gotchas",
   "subarea": "Heart failure",
   "trap": "- Two traps:\n  - **Withholding SGLT2i** because the patient is NOT diabetic — wrong; benefit is **independent of diabetes**\n  - Thinking **SGLT2i only works in HFrEF** — wrong; empagliflozin/dapagliflozin benefit extends across **HFmrEF and HFpEF**\n    - Making it the **one drug recommended across the whole EF spectrum**",
   "whatFirst": "- Add SGLT2i **early alongside the other pillars**\n- Does **NOT require titration** — single fixed dose\n  - **Dapagliflozin 10 mg daily** or **empagliflozin 10 mg daily**\n- Warn about **euglycaemic DKA**, genital mycotic infection, and **'sick day' rules** (hold when acutely unwell/fasting/before major surgery)",
   "discriminator": "- Expect a small **early dip in eGFR** after starting — haemodynamic and reversible\n  - NOT a reason to stop; distinct from true nephrotoxicity\n- Mild osmotic diuresis → may be able to **reduce loop diuretic dose**",
   "redFlags": "- **Euglycaemic ketoacidosis** — ketones/acidosis with near-normal or only mildly raised glucose\n- **Recurrent severe genital/perineal infection** (Fournier's gangrene rare)\n- **Hold peri-operatively** and during acute illness",
   "mcqTrap": "- **'Patient is not diabetic, so an SGLT2i is not indicated'** — WRONG\n  - It is a **mortality/morbidity pillar in HFrEF** irrespective of diabetes status",
   "viva": "- SGLT2i is the **one HF drug proven across all ejection fractions**\n- Given at **fixed dose regardless of diabetes**\n- Sick-day rules for **euglycaemic DKA**",
   "source": "MJA Consensus Statement 2022 (217:4); EMPEROR-Preserved / DELIVER trials (SGLT2i across all EF)",
   "verified": false,
   "mnemonic": "'Flozins For Everyone' — every EF, diabetic or not.",
   "tags": [
    "SGLT2i",
    "pharmacology",
    "HFpEF",
    "euglycaemic-DKA"
   ],
   "cutoffs": [
    "**Dapagliflozin 10 mg daily** or **empagliflozin 10 mg daily** — no titration",
    "Benefit **independent of diabetes**",
    "Recommended across **HFrEF, HFmrEF, HFpEF**"
   ],
   "visualHtml": "",
   "title": "SGLT2i in heart failure",
   "subtitle": "the 'all-EF, non-diabetic too' pillar and its gotchas",
   "id": "cardiovascular-19"
  },
  {
   "topic": "The 4 mortality pillars of HFrEF — what they are and the ARNI-over-ACEi preference",
   "subarea": "Heart failure",
   "trap": "- Classic outdated trap: naming **'ACEi, beta-blocker, diuretic, digoxin'** as pillars\n  - **Loop diuretic** = symptom control only, NO mortality benefit\n  - **Digoxin** = NOT a pillar\n- The four **mortality/morbidity pillars**:\n  - **(1) ARNI** (sacubitril/valsartan) preferred OVER ACEi/ARB\n  - **(2) HF-proven beta-blocker**\n  - **(3) MRA**\n  - **(4) SGLT2i**\n- **SGLT2i benefit is independent of diabetes** — withholding because patient isn't diabetic is a common error",
   "whatFirst": "- Start **ALL four classes** 'as soon as clinically possible' at low dose and uptitrate\n- Modern practice: **rapid simultaneous/overlapping initiation**\n  - NOT the old slow 'one drug fully titrated then add the next' ladder\n- Outcome benefit statistically significant within **~30 days**",
   "discriminator": "- **ARNI is preferred first-line** in HFrEF over ACEi\n- Switching FROM ACEi to sacubitril/valsartan: **≥36-hour washout** mandatory\n  - Overlapping ACEi + neprilysin inhibition → **angioedema**\n- Switching from **ARB → ARNI**: **no washout** needed",
   "redFlags": "- History of **ACEi-induced angioedema** = absolute contraindication to ARNI\n- Symptomatic hypotension, **SBP <100**, eGFR/K+ derangement → slow or hold\n  - Do not **abandon the whole regimen**",
   "mcqTrap": "- **'Add a loop diuretic to reduce mortality'** — WRONG: diuretics are symptomatic only\n- **'Optimise ACEi fully before starting beta-blocker'** — WRONG: four pillars started **early and together, low-dose**",
   "viva": "- Four pillars: **ARNI** (preferred over ACEi/ARB), **beta-blocker**, **MRA**, and **SGLT2i**\n- Started **early and low-dose**\n- **36-hour ACEi washout** before sacubitril/valsartan",
   "source": "MJA Consensus Statement on pharmacological management of HF 2022 (217:4)",
   "verified": true,
   "mnemonic": "'ABAS' — ARNI, Beta-blocker, Aldosterone antagonist (MRA), SGLT2i. (Diuretic is the 5th wheel: comfort, not survival.)",
   "tags": [
    "pharmacology",
    "mortality",
    "ARNI",
    "SGLT2i",
    "MRA"
   ],
   "cutoffs": [
    "ACEi→ARNI washout **≥ 36 hours**",
    "Beta-blockers proven: **carvedilol, bisoprolol, metoprolol succinate (CR), nebivolol**",
    "SGLT2i: **dapagliflozin or empagliflozin**",
    "Benefit significant within **~30 days**"
   ],
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">ARNI &gt; ACEi/ARB</span><span class=\"gv-pill\">Beta-blocker</span><span class=\"gv-pill\">MRA</span><span class=\"gv-pill\">SGLT2i</span></div>",
   "title": "The 4 mortality pillars of HFrEF",
   "subtitle": "what they are and the ARNI-over-ACEi preference",
   "id": "cardiovascular-20",
   "images": [
    {
     "src": "assets/img/cardiology_cxr_cardiomegaly_dcm_01.jpg",
     "caption": "Dilated cardiomyopathy (HFrEF) — cardiomegaly on CXR",
     "alt": "Cardiomegaly with increased cardiothoracic ratio in dilated cardiomyopathy / HFrEF",
     "credit": "MBq, Wikimedia Commons, CC0 (left/affected panel cropped)"
    }
   ]
  },
  {
   "topic": "AF anticoagulant choice: when DOAC is WRONG and only warfarin works (valvular AF)",
   "subarea": "Arrhythmias & syncope",
   "trap": "- Only **TWO situations mandate warfarin** (DOACs contraindicated):\n  - **Mechanical (metallic) prosthetic heart valve**\n  - **Moderate-to-severe (rheumatic) mitral stenosis**\n- Everything else (bioprosthetic >3 months post-op, MR, AR, AS, MV repair, TAVI) = **non-valvular → DOAC is fine/preferred**\n- Tempting wrong answers:\n  - Making ANY valve lesion = warfarin\n  - Picking a **DOAC for a metallic mitral valve**\n    - RE-ALIGN: dabigatran caused **MORE thrombosis AND bleeding** than warfarin\n- DOACs are **renally cleared** — dose-reduce/avoid in renal impairment\n  - **Dabigatran avoid if CrCl <30**",
   "whatFirst": "- Ask: **mechanical valve** or **moderate-severe/rheumatic MS**? → warfarin (valve-specific INR target)\n- Otherwise → **DOAC first-line**; check renal function and dose-adjust",
   "discriminator": "- **Bioprosthetic valve, AS/MR, MV-repair, TAVI** = non-valvular → **DOAC OK**\n- **Mechanical valve** or **rheumatic moderate-severe MS** = **warfarin only**\n- The word **'valvular' alone is a trap** — pin down WHICH lesion",
   "redFlags": "- **Mechanical valve on a DOAC** → stop and switch to warfarin urgently (thrombosis risk)\n- Supratherapeutic INR with bleeding → **vitamin K ± prothrombinex**",
   "viva": "- DOAC first-line for **non-valvular AF**\n- **Metallic valve** or **moderate-to-severe mitral stenosis** = absolute **warfarin indications**\n- Bridge appropriately and target the **valve-specific INR**",
   "mnemonic": "'Metal & Mitral stenosis = Must use warfarin' (the two M's).",
   "source": "NHFA/CSANZ AF Guidelines 2018; Australian Prescriber AF update; eTG Cardiovascular (current). RE-ALIGN trial = basis for mechanical-valve contraindication.",
   "tags": [
    "AF",
    "DOAC",
    "warfarin",
    "valvular AF",
    "mitral stenosis"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Lesion</th><th>Anticoagulant</th></tr><tr><td>Mechanical (metallic) valve</td><td>Warfarin ONLY</td></tr><tr><td>Mod-severe / rheumatic mitral stenosis</td><td>Warfarin ONLY</td></tr><tr><td>Bioprosthetic valve (&gt;3 mo)</td><td>DOAC OK</td></tr><tr><td>AS / MR / MV repair / TAVI</td><td>DOAC OK</td></tr></table>",
   "cutoffs": [
    "Mechanical valve → **warfarin**",
    "Moderate-severe (rheumatic) MS → **warfarin**",
    "All other valve lesions → **DOAC permitted**",
    "Dabigatran avoid if CrCl **<30 mL/min**"
   ],
   "mcqTrap": "- Selecting a **DOAC for a metallic mitral valve**\n- Labelling **all valve disease as warfarin-requiring**",
   "title": "AF anticoagulant choice",
   "subtitle": "when DOAC is WRONG and only warfarin works (valvular AF)",
   "id": "cardiovascular-21",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_atrial_fibrillation.jpg",
     "caption": "Atrial fibrillation — irregular rhythm ECG",
     "alt": "Atrial fibrillation with irregularly irregular rhythm and absent P waves",
     "credit": "Ewingdo, Wikimedia Commons, CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "AF stroke prophylaxis: CHA2DS2-VA (Australia dropped the sex point) — thresholds & DOAC-first",
   "subarea": "Arrhythmias & syncope",
   "trap": "- Australia (NHFA/CSANZ) uses **CHA2DS2-VA** (sexless) — do NOT add a point for female sex\n- Score **0** = no anticoagulation; **1** = OAC strongly considered; **≥2** = OAC recommended\n- **Aspirin is NOT recommended** for AF stroke prevention at ANY score\n- **DOAC preferred** over warfarin in eligible patients\n- **CHA2DS2-VA is a stroke-risk score**, not a bleeding score\n  - High **HAS-BLED** is NOT a reason to withhold OAC — it flags **modifiable bleeding factors**",
   "whatFirst": "- Calculate **CHA2DS2-VA** (no sex point)\n  - **≥2** → DOAC unless contraindicated\n  - **1** → strongly consider\n  - **0** → none\n- Screen for **warfarin-only exceptions** (mechanical valve, moderate-severe/rheumatic MS) before defaulting to a DOAC",
   "discriminator": "- **CHA2DS2-VA** (Australian, sexless) vs **CHA2DS2-VASc** (older, +1 for female)\n  - A woman with no other risk factors: VASc=1 but **VA=0 → no OAC**\n  - The exam loves this **discrepancy**",
   "redFlags": "- Active major bleeding, recent **ICH**, severe uncontrolled HTN → involve cardiology/haematology re timing\n- Do not reflexively withhold long-term OAC for **fall risk alone**",
   "viva": "- Use **CHA2DS2-VA** score — Australia removed the sex criterion\n- At a score of **2 or more** → DOAC first-line\n- First exclude **mechanical valve or moderate-severe mitral stenosis** which mandate warfarin",
   "mnemonic": "CHA2DS2-VA: CHF, Hypertension, Age>=75 (2), Diabetes, Stroke/TIA (2), Vascular disease, Age 65-74. ('VA' = no sex/'Sc').",
   "source": "NHFA/CSANZ Australian Clinical Guidelines for the Diagnosis & Management of AF 2018 (MJA/Heart Lung Circ); Australian Prescriber AF update; eTG Cardiovascular (current).",
   "tags": [
    "AF",
    "anticoagulation",
    "CHA2DS2-VA",
    "DOAC",
    "stroke prevention"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>CHA2DS2-VA (sexless)</th><th>Action</th></tr><tr><td><span class=\"gv-num\">0</span></td><td>No anticoagulation</td></tr><tr><td><span class=\"gv-num\">1</span></td><td>Strongly consider OAC (individualise)</td></tr><tr><td><span class=\"gv-num\">&ge;2</span></td><td>OAC recommended (DOAC first-line)</td></tr></table>",
   "cutoffs": [
    "Score **0** = no OAC",
    "Score **1** = strongly consider OAC",
    "Score **≥2** = OAC recommended",
    "Female sex = **0 points** (dropped in Australia)",
    "**Aspirin** = not recommended at any score"
   ],
   "mcqTrap": "- Choosing **aspirin** for a low-moderate score\n- **Adding a point for female sex** (using VASc not VA)",
   "title": "AF stroke prophylaxis",
   "subtitle": "CHA2DS2-VA (Australia dropped the sex point) — thresholds & DOAC-first",
   "id": "cardiovascular-22",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_atrial_fibrillation.jpg",
     "caption": "Atrial fibrillation — ECG for CHA2DS2-VA stroke risk context",
     "alt": "Atrial fibrillation — the rhythm requiring CHA2DS2-VA scoring for anticoagulation decision",
     "credit": "Ewingdo, Wikimedia Commons, CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "AF with rapid ventricular response: rate vs rhythm + the 48-hour cardioversion rule",
   "subarea": "Arrhythmias & syncope",
   "trap": "- **Haemodynamically STABLE** patient with AF >48 h or UNKNOWN duration: do NOT cardiovert (electrical or chemical) without:\n  - **3 weeks** of therapeutic anticoagulation first, OR\n  - **TOE excluding LA thrombus** — then 4 weeks anticoagulation after (atrial stunning)\n- Tempting wrong option: **'urgent DC cardioversion'** for a stable patient of unclear onset — risk is embolic stroke\n- **Rate control first** in stable patients\n- If **UNSTABLE** (hypotension, ischaemia, pulmonary oedema, shock): answer IS immediate **synchronised DC cardioversion** regardless of the 48-h rule\n- Rate target = **lenient, resting HR <110 bpm** (RACE II), not <80\n- First-line rate drug = **beta-blocker** (e.g. metoprolol) OR **non-DHP CCB** (verapamil/diltiazem)\n  - CCBs are **CONTRAINDICATED in HFrEF**/LV dysfunction — use beta-blocker +/- digoxin instead\n- **Avoid IV beta-blocker AND IV verapamil together** (asystole risk)",
   "whatFirst": "- **Assess haemodynamics FIRST**\n- Unstable → **synchronised DC cardioversion** now\n- Stable → **rate control to <110 bpm**; defer cardioversion unless:\n  - Onset clearly **<48 h**, OR\n  - **3 weeks OAC** completed, OR\n  - **TOE clear** of thrombus",
   "discriminator": "- Stable AF **>48 h/unknown** = rate control + anticoagulate, **NO immediate cardioversion**\n- **Unstable AF** = immediate DCCV\n- AF with **pre-excitation (WPW)** = **AVOID AV-node blockers** (BB/CCB/digoxin/adenosine)\n  - They accelerate the accessory pathway and can precipitate **VF**\n  - Use **procainamide** or DC cardioversion instead",
   "redFlags": "- **Hypotension, ischaemic chest pain, acute pulmonary oedema, reduced GCS** → immediate synchronised DCCV\n- Irregular **broad-complex tachy at very fast rates (>200)** → think **pre-excited AF**, get cardiology help",
   "viva": "- Stable → **rate-control to under 110**, anticoagulate\n- Only cardiovert after **3 weeks of OAC** or a **clear TOE**\n- If she becomes unstable → move straight to **synchronised DC cardioversion**",
   "mnemonic": "'3 before, 4 after' for cardioversion anticoagulation; '<110 is fine' for rate.",
   "source": "NHFA/CSANZ AF Guidelines 2018; Australian Prescriber AF update; RACE II (lenient <110); eTG Cardiovascular (current).",
   "tags": [
    "AF",
    "RVR",
    "cardioversion",
    "rate control",
    "WPW"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Stable or unstable?</div><div class=\"gv-step\">UNSTABLE -> synchronised DC cardioversion NOW</div><div class=\"gv-step\">STABLE -> rate control to HR &lt;110</div><div class=\"gv-step\">Cardiovert only if &lt;48h OR 3wk OAC OR TOE clear -> then 4wk OAC</div></div>",
   "cutoffs": [
    "Rate target resting HR **<110 bpm** (lenient)",
    "**48 h** = cardioversion safety cut-off",
    "**3 weeks** OAC before / **4 weeks** after cardioversion",
    "Non-DHP CCB **contraindicated** in HFrEF"
   ],
   "mcqTrap": "- **Urgent cardioversion** of a STABLE patient with AF of unknown/>48 h duration without anticoagulation or TOE\n  - Risk: **embolic stroke**",
   "title": "AF with rapid ventricular response",
   "subtitle": "rate vs rhythm + the 48-hour cardioversion rule",
   "id": "cardiovascular-23",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_atrial_fibrillation.jpg",
     "caption": "Atrial fibrillation with rapid ventricular response",
     "alt": "AF with rapid ventricular response — irregularly irregular broad-rate tachycardia",
     "credit": "Ewingdo, Wikimedia Commons, CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "Bradyarrhythmia & AV block: which blocks need pacing, and atropine that won't work",
   "subarea": "Arrhythmias & syncope",
   "trap": "- Key gotcha: distinguish **HIGH-RISK** (infranodal, progress to complete heart block, need pacing) vs **benign** blocks\n- **PACE** these:\n  - **Third-degree (complete) AV block**\n  - **Mobitz II** second-degree block\n  - **Symptomatic bradycardia** not due to reversible cause\n- **DON'T pace** (observe if asymptomatic):\n  - **First-degree AV block**\n  - **Mobitz I (Wenckebach)** — usually nodal/vagal/benign\n- Tempting wrong answer: **atropine for Mobitz II or complete heart block** with a wide escape\n  - Atropine acts at the **AV NODE** → ineffective (may paradoxically worsen) for infranodal block\n  - Right bridge = **transcutaneous pacing** or **isoprenaline/adrenaline infusion** while arranging transvenous wire/permanent pacemaker\n- Atropine for symptomatic bradycardia = **500–600 mcg IV**, repeat every **3–5 min** to max **3 mg**\n- ALWAYS exclude **reversible causes** first:\n  - Drugs (beta-blocker/CCB/digoxin)\n  - **Hyperkalaemia**\n  - **Hypothyroidism**\n  - Ischaemia (esp. **inferior MI** → RCA/AV-node)\n  - **Raised ICP**",
   "whatFirst": "- Treat **reversible causes** first (stop AV-nodal drugs, fix K+, treat ischaemia)\n- Symptomatic/unstable bradycardia: **atropine 500–600 mcg IV** first\n- If infranodal (Mobitz II/CHB) or **atropine fails**:\n  - → **Transcutaneous pacing**\n  - → **Isoprenaline 2–5 mcg/min** or **adrenaline 2–10 mcg/min** infusion\n  - → Transvenous then **permanent pacemaker**",
   "discriminator": "- **Mobitz I (Wenckebach)**: progressive PR then dropped beat, usually narrow QRS, nodal → often benign, **atropine-responsive**\n- **Mobitz II**: constant PR, sudden dropped beat, often wide QRS, infranodal → high-risk, **atropine-resistant**, need pacing\n- **Complete heart block** = high-risk, need pacing\n- **Inferior MI** bradycardia/CHB = often transient/atropine-responsive (vagal/nodal)\n- **Anterior MI** with new block = infranodal, ominous",
   "redFlags": "- **Syncope, hypotension, ischaemic chest pain, heart failure**, or ventricular escape rhythm → urgent **transcutaneous pacing** + cardiology\n- New **bifascicular/trifascicular block** post-anterior-MI",
   "viva": "- Mobitz II with wide escape → **atropine won't help** an infranodal block\n- Go to **transcutaneous pacing** or **isoprenaline infusion** as a bridge to temporary wire and permanent pacemaker\n- First exclude **drugs, hyperkalaemia and ischaemia**",
   "mnemonic": "'Mobitz I = Watch (Wenckebach), Mobitz II = Wire'; atropine works at the Node only.",
   "source": "ANZCOR Guideline 11.9 (Managing Acute Dysrhythmias); eTG Cardiovascular (current); NHFA/CSANZ.",
   "tags": [
    "bradycardia",
    "heart block",
    "Mobitz II",
    "pacing",
    "atropine"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Block</th><th>Risk / Action</th></tr><tr><td>1st-degree</td><td>Benign - observe</td></tr><tr><td>Mobitz I (Wenckebach)</td><td>Usually benign - observe if asymptomatic</td></tr><tr><td>Mobitz II</td><td>High-risk infranodal - PACE</td></tr><tr><td>Complete (3rd-degree)</td><td>PACE (atropine often fails)</td></tr></table>",
   "cutoffs": [
    "Atropine **500–600 mcg IV**, repeat q3–5 min to max **3 mg**",
    "Pace: **CHB, Mobitz II**, symptomatic bradycardia",
    "Atropine **ineffective** for infranodal (Mobitz II/CHB)",
    "Isoprenaline **2–5 mcg/min** or adrenaline **2–10 mcg/min** as bridge"
   ],
   "mcqTrap": "- Giving **atropine as definitive treatment** for Mobitz II or complete heart block\n  - Atropine is **ineffective infranodally** — correct answer is **pacing**",
   "title": "Bradyarrhythmia & AV block",
   "subtitle": "which blocks need pacing, and atropine that won't work",
   "id": "cardiovascular-24",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_complete_heart_block.jpg",
     "caption": "Complete (third-degree) AV block — requires pacing",
     "alt": "Complete heart block with dissociated P waves and slow escape rhythm — definitive pacing indication",
     "credit": "James Heilman MD (Jmh649), Wikimedia Commons, CC BY-SA 3.0"
    },
    {
     "src": "assets/img/cardiology_ecg_bifascicular_block_01.png",
     "caption": "Bifascicular block — high-risk syncope / step toward complete block",
     "alt": "Bifascicular block (RBBB + left axis deviation) — high-risk finding mandating monitoring/pacing assessment",
     "credit": "Steven Fruitsmaak, Wikimedia Commons, CC BY-SA 3.0 (machine-text strip cropped)"
    }
   ]
  },
  {
   "topic": "Broad-complex tachycardia: VT vs SVT-with-aberrancy — assume VT",
   "subarea": "Arrhythmias & syncope",
   "trap": "- Classic trap: stable patient in regular **broad-complex (wide-QRS) tachycardia** → tempting wrong answer is 'SVT with aberrancy' → give CCB/adenosine\n- Exam rule: **regular monomorphic broad-complex tachycardia = VT until proven otherwise**\n  - ESPECIALLY with known **IHD/prior MI/structural heart disease/age >35** (massively raise pre-test probability of VT)\n- **IV VERAPAMIL given to VT** can cause haemodynamic collapse and death — the **lethal distractor**\n- Features favouring **VT**:\n  - **AV dissociation**\n  - **Capture/fusion beats**\n  - Very wide QRS (**>140 ms RBBB-like / >160 ms LBBB-like**)\n  - **Extreme (northwest) axis**\n  - **Precordial concordance**\n- Management:\n  - **UNSTABLE** (or any sustained VT with compromise) → synchronised **DC cardioversion**\n  - **STABLE monomorphic VT** → IV **amiodarone** (or DCCV)\n  - **PULSELESS VT** → unsynchronised **defibrillation** + CPR (ALS algorithm)",
   "whatFirst": "- Treat regular broad-complex tachy as **VT**\n- **Unstable with pulse** → synchronised DCCV\n- **Pulseless** → defibrillate + CPR\n- **Stable monomorphic VT** → IV amiodarone or elective DCCV; correct electrolytes; senior/cardiology",
   "discriminator": "- **VT vs SVT-with-aberrancy**: AV dissociation, fusion/capture beats, NW axis, concordance = **VT**\n- History of **MI/structural heart disease** = VT until proven otherwise\n- **Polymorphic VT with long QT** = torsades → give **magnesium**\n- **Pre-excited AF** = irregular broad-complex → avoid AV-blockers",
   "redFlags": "- **Pulseless** → immediate defibrillation + CPR\n- **Hypotension/ischaemia/pulmonary oedema with a pulse** → synchronised DC cardioversion\n- **Polymorphic VT** → magnesium + look for ischaemia/long QT",
   "viva": "- Regular broad-complex tachycardia = **VT until proven otherwise**, particularly with prior MI\n- **Would NOT give verapamil**\n- Unstable → **synchronise-cardiovert**\n- Stable → give **IV amiodarone** and call cardiology",
   "mnemonic": "'When in doubt, it's VT' / 'Old heart + wide QRS = VT'.",
   "source": "ANZCOR Guideline 11.9 / ALS guidelines; eTG Cardiovascular (current); NHFA arrhythmia guidance.",
   "tags": [
    "VT",
    "broad complex",
    "aberrancy",
    "amiodarone",
    "defibrillation"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Clue</th><th>Favours</th></tr><tr><td>AV dissociation / capture / fusion beats</td><td>VT</td></tr><tr><td>Prior MI / structural heart disease</td><td>VT</td></tr><tr><td>Concordance, NW axis, QRS very wide</td><td>VT</td></tr><tr><td>Irregular broad-complex</td><td>Pre-excited AF (no AV-blockers)</td></tr></table>",
   "cutoffs": [
    "Stable monomorphic VT → **IV amiodarone** or DCCV",
    "Unstable VT with pulse → **synchronised DCCV**",
    "Pulseless VT → **unsynchronised defibrillation**",
    "QRS **>140 ms** (RBBB-type) / **>160 ms** (LBBB-type) favours VT"
   ],
   "mcqTrap": "- Treating regular broad-complex tachycardia as **SVT with aberrancy** and giving **verapamil/CCB**\n  - Can be **fatal in VT**",
   "title": "Broad-complex tachycardia",
   "subtitle": "VT vs SVT-with-aberrancy — assume VT",
   "id": "cardiovascular-25",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_ventricular_tachycardia.jpg",
     "caption": "Monomorphic ventricular tachycardia — broad-complex regular tachycardia",
     "alt": "Monomorphic VT — wide QRS regular tachycardia; always assume VT until proven otherwise",
     "credit": "Matador3020, Wikimedia Commons, CC BY-SA 3.0"
    }
   ]
  },
  {
   "topic": "Long QT & torsades de pointes: magnesium first, and the drug/electrolyte triggers",
   "subarea": "Arrhythmias & syncope",
   "trap": "- Torsades (polymorphic VT on long-QT background) → **IV MAGNESIUM SULFATE** is first-line EVEN IF serum magnesium is normal\n  - **1–2 g IV** over 1–2 min if unstable, or over ~15 min; repeat/infuse if recurrent\n- Tempting wrong MCQ answers:\n  - (a) **Amiodarone or sotalol** — these PROLONG the QT and **worsen torsades**\n  - (b) Reflexively **defibrillating a stable patient** instead of giving magnesium (defibrillate only if pulseless/sustained)\n- Other key moves:\n  - Correct **K+** (aim high-normal **~4.5–5 mmol/L**) and Ca2+\n  - **STOP all QT-prolonging drugs**\n  - For recurrent/pause-dependent torsades: **overdrive pacing** or **isoprenaline** to raise rate and shorten QT\n- **QTc danger threshold**: torsades risk climbs once **QTc >500 ms**\n- Classic QT-prolonging culprits:\n  - **Macrolides** (azithro/erythro/clarithro)\n  - **Fluoroquinolones**\n  - **Antipsychotics** (haloperidol, quetiapine)\n  - **Ondansetron**\n  - **Methadone**\n  - **Citalopram/escitalopram**\n  - **Sotalol, amiodarone**\n  - **Antifungals** (fluconazole)\n  - Worsened by **hypokalaemia, hypomagnesaemia, hypocalcaemia and bradycardia**",
   "whatFirst": "- **Pulseless** polymorphic VT → defibrillate + CPR\n- With a pulse:\n  - **IV magnesium sulfate 1–2 g**\n  - **Stop QT-prolonging drugs**\n  - Correct **K+/Mg2+/Ca2+**\n  - If recurrent/pause-dependent → **overdrive pacing** or **isoprenaline**\n- **Avoid QT-prolonging antiarrhythmics**",
   "discriminator": "- **Polymorphic VT WITH long QT** = torsades → **magnesium** + correct electrolytes/withdraw drugs\n- **Polymorphic VT WITHOUT long QT** = usually ischaemia → treat as ACS/standard VT (**amiodarone**, revascularise)\n- **Monomorphic VT** = scar/structural → amiodarone\n- Do NOT give magnesium reflexively to **monomorphic VT** as 'the answer'",
   "redFlags": "- Recurrent syncope with documented **QTc >500 ms**\n- **Congenital long QT** with family history of sudden death\n- **Torsades storm** → cardiology/EP, ICD consideration\n- Pulseless → **defibrillate**",
   "viva": "- This is torsades on a long QT → give **1–2 g IV magnesium** even with a normal level\n- **Stop the offending drugs** (e.g. macrolide)\n- Keep **potassium high-normal**\n- If recurrent → **overdrive pacing**\n- Would **NOT use amiodarone** — it prolongs the QT",
   "mnemonic": "'Torsades -> Mag, even if normal'; QTc >500 = danger.",
   "source": "eTG Cardiovascular (current); ANZCOR ALS / Guideline 11.9. Magnesium sulfate 1-2 g IV.",
   "tags": [
    "long QT",
    "torsades",
    "magnesium",
    "polymorphic VT",
    "drug-induced"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Polymorphic VT + long QT = torsades</div><div class=\"gv-step\">Pulse: MgSO4 1-2 g IV (even if Mg normal)</div><div class=\"gv-step\">Correct K+ (4.5-5), Ca2+; STOP QT drugs</div><div class=\"gv-step\">Recurrent/pause-dependent -> overdrive pace / isoprenaline</div><div class=\"gv-step\">Pulseless -> defibrillate + CPR</div></div>",
   "cutoffs": [
    "MgSO4 **1–2 g IV** (over 1–2 min if unstable; ~15 min otherwise)",
    "QTc **>500 ms** = high torsades risk",
    "Keep K+ **~4.5–5 mmol/L**",
    "**Avoid** amiodarone/sotalol (prolong QT)"
   ],
   "mcqTrap": "- Choosing **amiodarone/sotalol** (QT-prolonging) for torsades\n- **Omitting magnesium** when serum Mg is 'normal'\n  - Magnesium is first-line regardless of serum level",
   "title": "Long QT & torsades de pointes",
   "subtitle": "magnesium first, and the drug/electrolyte triggers",
   "id": "cardiovascular-26",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_torsades_polymorphic_vt_01.jpg",
     "caption": "Torsades de pointes — polymorphic VT on prolonged QT",
     "alt": "Torsades de pointes: polymorphic VT with twisting QRS axis on a background of prolonged QT interval",
     "credit": "CardioNetworks (ECGpedia), Wikimedia Commons, CC BY-SA 3.0"
    }
   ]
  },
  {
   "topic": "Regular narrow-complex SVT: vagal -> adenosine sequence and exact doses",
   "subarea": "Arrhythmias & syncope",
   "trap": "- Stable regular narrow-complex SVT: **vagal manoeuvres FIRST**\n  - **Modified Valsalva with supine leg-raise** has the best evidence\n  - Or carotid sinus massage if no bruit/recent stroke\n- If that fails: **adenosine 6 mg** rapid IV push into a large/proximal vein with immediate **>=20 mL saline flush**\n  - If no conversion in 1–2 min → **12 mg**, then **12 mg** again\n- Tempting wrong answers:\n  - (a) Giving adenosine **slowly or without a flush** (half-life ~10 s — it won't work)\n  - (b) **Verapamil** for an undifferentiated broad-complex tachy (lethal if it's VT)\n  - (c) **Adenosine in known/suspected WPW** with IRREGULAR broad complexes (pre-excited AF) — can precipitate **VF**\n- Warn the patient: transient **chest tightness/flushing/'sense of doom'/brief asystole**\n- **CAUTION/avoid in asthma** (bronchospasm) → use **verapamil/diltiazem**\n- **UNSTABLE SVT** = synchronised DC cardioversion",
   "whatFirst": "- Stable regular narrow-complex: continuous ECG → **modified Valsalva** → **adenosine 6 mg/12 mg/12 mg** with flush\n- **Unstable** → synchronised DCCV\n- **Asthmatic** → avoid adenosine, use **verapamil/diltiazem**",
   "discriminator": "- Adenosine is **diagnostic AND therapeutic**:\n  - Terminates **AVNRT/AVRT**\n  - In **atrial flutter/atrial tachy**: only transiently blocks AV node and **unmasks flutter waves** (doesn't convert) — aids diagnosis\n- A **REGULAR broad-complex tachy** = VT until proven otherwise, NOT 'SVT with aberrancy'",
   "redFlags": "- **Hypotension/ischaemia/altered mental state** → synchronised DC cardioversion\n- **Irregular broad-complex** (pre-excited AF) → NO adenosine/AV-node blockers; **DCCV or procainamide**",
   "viva": "- Stable, regular, narrow → try **modified Valsalva**, then **adenosine 6 then 12 then 12 mg** as a rapid push with a saline flush\n- Warn about **transient flushing and chest tightness**\n- If she destabilises → **synchronise-cardiovert**",
   "mnemonic": "'6-12-12, flush fast' for adenosine; 'Valsalva before vial'.",
   "source": "ANZCOR Guideline 11.9 (Managing Acute Dysrhythmias); eTG Cardiovascular (current); NHFA arrhythmia guidance.",
   "tags": [
    "SVT",
    "AVNRT",
    "adenosine",
    "vagal manoeuvre",
    "narrow complex"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Stable regular narrow-complex SVT</div><div class=\"gv-step\">Modified Valsalva (leg-raise)</div><div class=\"gv-step\">Adenosine 6 mg rapid IV + &ge;20 mL flush</div><div class=\"gv-step\">No conversion 1-2 min -> 12 mg</div><div class=\"gv-step\">Still SVT -> 12 mg (repeat once)</div></div>",
   "cutoffs": [
    "Adenosine **6 mg** → **12 mg** → **12 mg**",
    "Minimum **20 mL** saline flush, large proximal vein",
    "Half-life **~10 sec** (must push fast)",
    "**Avoid in asthma** → use verapamil/diltiazem"
   ],
   "mcqTrap": "- Giving adenosine **slowly/without flush**\n- Using **adenosine/verapamil** for an undifferentiated **broad-complex tachycardia** (likely VT)",
   "title": "Regular narrow-complex SVT",
   "subtitle": "vagal -> adenosine sequence and exact doses",
   "id": "cardiovascular-27",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_svt_fresh.jpg",
     "caption": "Regular narrow-complex SVT — adenosine cardioversion target",
     "alt": "Supraventricular tachycardia — regular narrow-complex tachycardia at ~180 bpm with no visible P waves",
     "credit": "SVT_Lead_II.JPG: Displaced derivative work: James Heilman, MD (talk), Wikimedia Commons, Public domain"
    }
   ]
  },
  {
   "topic": "Syncope: cardiac vs vasovagal red flags — who gets admitted/monitored",
   "subarea": "Arrhythmias & syncope",
   "trap": "- CARDIAC (high-risk) red flags:\n  - Syncope **DURING EXERTION** or while **SUPINE/sitting**\n  - **NO or very brief prodrome** (sudden)\n  - Preceded by **PALPITATIONS**\n  - With **chest pain/dyspnoea**\n  - Known **structural heart disease**/prior MI/heart failure/reduced EF\n  - **Abnormal ECG** (any conduction disease, Brugada, long/short QT, pre-excitation, pathological Q waves, ischaemia)\n  - **FAMILY HISTORY of sudden cardiac death** (esp. <40–50 yrs) or inherited channelopathy\n- VASOVAGAL (reassuring):\n  - **Upright posture**\n  - Clear **trigger** (pain, emotion, heat, prolonged standing, micturition/cough)\n  - Classic **prodrome** (nausea, warmth, diaphoresis, tunnel vision)\n  - **Rapid full recovery**\n- Tempting wrong MCQ option: discharging a young athlete with **EXERTIONAL syncope** as 'vasovagal'\n  - Exertional syncope = cardiac red flag (HCM, AS, anomalous coronary, catecholaminergic VT) until proven otherwise\n  - Needs ECG +/- echo and cardiology\n- A few seconds of **myoclonic jerks/incontinence does NOT make it a seizure** (convulsive syncope is common)\n- First investigation in ALL syncope = **12-lead ECG**",
   "whatFirst": "- **12-lead ECG** in everyone\n- Any **cardiac red flag** (exertional/supine, palpitations, abnormal ECG, structural disease, FHx SCD) → admit/monitor + echo + cardiology\n- Pure **vasovagal** pattern with normal ECG/exam → reassure, discharge, conservative advice",
   "discriminator": "- Exertional or supine + no prodrome + palpitations + FHx sudden death = **CARDIAC**\n- Upright + identifiable trigger + autonomic prodrome + quick recovery = **VASOVAGAL**\n- **Lateral tongue-biting** + postictal confusion **>minutes** = seizure rather than syncope",
   "redFlags": "- **Exertional syncope**\n- Syncope while **supine**\n- Syncope preceded by **palpitations or chest pain**\n- **Abnormal ECG**\n- Known **structural heart disease/low EF**\n- **Family history of sudden cardiac death** → urgent cardiac workup, do not discharge",
   "viva": "- Worrying features: **exertional onset, no prodrome, palpitations beforehand, abnormal ECG, family history of sudden death**\n  - Any one of those = **cardiac syncope**\n- Get a **12-lead ECG**, admit for monitoring, arrange an echo, involve cardiology",
   "mnemonic": "Cardiac red flags = 'EXIT': EXertional/supine, no prodrome, abnormal ECG, structural disease, palpitations, family hX of SCD.",
   "source": "eTG Cardiovascular (current); NHFA/CSANZ; ESC Syncope Guidelines (as applied in Australian ED risk-stratification practice).",
   "tags": [
    "syncope",
    "vasovagal",
    "cardiac syncope",
    "red flags",
    "ECG"
   ],
   "verified": false,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Cardiac (high-risk)</th><th>Vasovagal (reassuring)</th></tr><tr><td>During exertion or supine</td><td>Upright posture</td></tr><tr><td>No/brief prodrome, sudden</td><td>Autonomic prodrome (nausea, sweat, warmth)</td></tr><tr><td>Preceded by palpitations / chest pain</td><td>Clear trigger (pain, emotion, standing)</td></tr><tr><td>Abnormal ECG / structural HD / FHx SCD</td><td>Normal ECG, rapid full recovery</td></tr></table>",
   "cutoffs": [
    "**12-lead ECG** in EVERY syncope",
    "**Exertional or supine** syncope = cardiac red flag → admit",
    "FHx sudden cardiac death (esp. **<40–50 yrs**) = red flag",
    "**Palpitations** before LOC = red flag"
   ],
   "mcqTrap": "- Labelling **exertional syncope** (esp. young athlete) as vasovagal and discharging without **ECG/echo/cardiology**",
   "title": "Syncope",
   "subtitle": "cardiac vs vasovagal red flags — who gets admitted/monitored",
   "id": "cardiovascular-28",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_bifascicular_block_01.png",
     "caption": "Bifascicular block — cardiac high-risk syncope ECG pattern",
     "alt": "Bifascicular block — a high-risk ECG pattern in syncope patients warranting admission and monitoring",
     "credit": "Steven Fruitsmaak, Wikimedia Commons, CC BY-SA 3.0 (machine-text strip cropped)"
    }
   ]
  },
  {
   "topic": "Acute limb ischaemia: 6 Ps and the complete-vs-incomplete (Rutherford) decision",
   "subarea": "Valves, aorta, pericardium & vascular",
   "trap": "- Critical fork: **VIABLE (Rutherford I)**, **THREATENED (IIa marginal / IIb immediate)** or **IRREVERSIBLE (III)**\n  - Decided by **motor/sensory deficit and Doppler signals**, NOT just by pulses\n- **Late Ps** (Paralysis, Paraesthesia) = threatened/dead limb → EMERGENCY revascularisation\n- **Early Ps** (Pain, Pallor, Pulselessness) are less ominous\n- **IIb** (sensory loss beyond toes + any motor weakness, inaudible arterial Doppler, audible venous) = immediate threat → revascularise **within hours** (surgical embolectomy or thrombolysis)\n- **III** (fixed mottling/staining, profound paralysis, anaesthetic, inaudible arterial AND venous Doppler) = irreversible\n  - Revascularising risks **lethal reperfusion** (hyperkalaemia, myoglobinuria)\n  - → **Primary amputation**\n- Give **therapeutic heparin immediately** on diagnosis (unless contraindicated)\n- Embolic vs thrombotic origin changes management:\n  - **Embolic** (AF, sudden, no claudication history, normal contralateral pulses)\n  - **Thrombotic** (known PVD, prior claudication, abnormal contralateral pulses)",
   "source": "Rutherford classification for acute limb ischaemia; current Australian vascular surgery practice",
   "discriminator": "- **Embolic** ALI: sudden onset, AF/recent MI source, NO prior claudication, normal pulses in the OTHER leg, sharp demarcation → **embolectomy**\n- **Thrombotic** ALI: background of PVD, prior claudication, abnormal contralateral pulses, less clear demarcation → often needs **imaging/bypass**",
   "redFlags": "- **Paralysis + sensory loss + inaudible arterial Doppler** = IIb/III = limb-threatening emergency\n- **Fixed skin mottling that does not blanch** + tense compartments = irreversible → **amputation, NOT revascularisation**\n- Sudden cold pulseless leg in **AF** = arterial embolus",
   "whatFirst": "- **IV therapeutic heparin** immediately + analgesia + urgent **vascular surgery referral**\n- Classify by **motor/sensory/Doppler (Rutherford)** to decide embolectomy/thrombolysis vs amputation\n- Keep limb **dependent and warm** (do not actively heat)",
   "mcqTrap": "- 'Attempt urgent revascularisation' for a limb with **fixed staining, profound paralysis and inaudible arterial AND venous Doppler (Rutherford III)**\n  - Wrong — reperfusing a dead limb risks **fatal hyperkalaemia/rhabdomyolysis**; this needs **amputation**",
   "viva": "- **Heparinise immediately**\n- Decide by **motor and sensory findings and Doppler** whether viable, threatened or irreversible\n- **IIb limb** needs revascularisation **within hours**\n- **Rutherford III** with fixed staining needs **amputation, not reperfusion**",
   "mnemonic": "6 Ps: Pain, Pallor, Pulselessness, Perishing cold (Poikilothermia), Paraesthesia, Paralysis - the LAST two Ps mean the limb is in danger.",
   "tags": [
    "acute limb ischaemia",
    "6 Ps",
    "Rutherford",
    "embolus",
    "heparin"
   ],
   "verified": false,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Rutherford</th><th>Sensory</th><th>Motor</th><th>Arterial Doppler</th><th>Venous Doppler</th><th>Action</th></tr><tr><td>I Viable</td><td>None</td><td>None</td><td>Audible</td><td>Audible</td><td>Workup, not emergent</td></tr><tr><td>IIa Marginal</td><td>Toes / minimal</td><td>None</td><td>Inaudible</td><td>Audible</td><td>Salvageable - urgent</td></tr><tr><td>IIb Immediate</td><td>Beyond toes + rest pain</td><td>Mild-mod weakness</td><td>Inaudible</td><td>Audible</td><td>Revascularise within hours</td></tr><tr><td>III Irreversible</td><td>Profound/anaesthetic</td><td>Paralysis/rigor</td><td>Inaudible</td><td>Inaudible</td><td>Amputation (not reperfusion)</td></tr></table>",
   "title": "Acute limb ischaemia",
   "subtitle": "6 Ps and the complete-vs-incomplete (Rutherford) decision",
   "id": "cardiovascular-29"
  },
  {
   "topic": "Acute pericarditis & cardiac tamponade: colchicine is the gotcha, tamponade is clinical",
   "subarea": "Valves, aorta, pericardium & vascular",
   "trap": "- Pericarditis treatment: high-dose **NSAID/aspirin PLUS colchicine**\n  - Colchicine is the easily-forgotten add-on that **halves recurrence**\n  - Aspirin or ibuprofen (e.g. **600 mg 8-hourly**), tapered to CRP normalisation\n  - **Colchicine 0.5 mg daily** if <70 kg, or **0.5 mg twice daily** if >=70 kg, for **~3 months**\n- **AVOID NSAIDs** in early post-MI pericarditis (Dressler) and in patients on anticoagulation\n- **AVOID corticosteroids first-line** (they increase recurrence) — reserve for refractory disease or NSAID contraindication\n- Cardiac **TAMPONADE** is a **CLINICAL diagnosis** (Beck's triad: hypotension, muffled heart sounds, raised JVP; plus **pulsus paradoxus >10 mmHg**, tachycardia)\n  - Do NOT wait for echo if the patient is crashing → urgent **pericardiocentesis**\n- Do NOT give large fluid boluses thinking 'shock' — the obstructed heart can't fill\n- **Aggressive diuresis/vasodilation/intubation with positive-pressure ventilation** can precipitate arrest\n- **Electrical alternans** + low-voltage QRS on ECG = large effusion",
   "source": "ESC 2015 pericardial disease guideline (current); current Australian cardiology/emergency practice",
   "discriminator": "- **Pericarditis ECG vs STEMI**:\n  - Pericarditis = **WIDESPREAD (not territorial) concave 'saddle-shaped' ST elevation** + PR depression (and PR elevation in aVR), no reciprocal changes, no Q waves\n  - STEMI = territorial ST elevation with reciprocal depression\n- **Tamponade vs tension pneumothorax/RV-MI**: all cause raised JVP + hypotension\n  - Tamponade adds **muffled sounds + pulsus paradoxus** + globular heart/electrical alternans",
   "redFlags": "- **Hypotension + raised JVP + muffled heart sounds** (Beck's triad) or **pulsus paradoxus** = tamponade → urgent **pericardiocentesis**\n- Pericarditis high-risk features (admit):\n  - **Fever >38**, large effusion/tamponade, subacute onset, immunosuppression\n  - Anticoagulation, trauma, failure of NSAID at **1 week**\n  - **Troponin rise** = myopericarditis",
   "whatFirst": "- Pericarditis: **NSAID/aspirin + colchicine**, find/treat cause, restrict exercise\n- Tamponade: recognise clinically, **cautious fluids** only as a bridge → urgent **echo-guided pericardiocentesis**\n  - Avoid **intubation/PPV** if avoidable until drained",
   "mcqTrap": "- Wrong answer for pericarditis: **'commence prednisolone'**\n  - Steroids first-line **increase recurrence** — correct is NSAID + colchicine\n- Wrong answer for tamponade: **'arrange urgent echo before treating'** in a peri-arrest patient\n  - If crashing, **pericardiocentesis is the priority**",
   "viva": "- Pericarditis: prescribe **NSAID plus colchicine**, not steroids; watch for myopericarditis with a **troponin**\n- Tamponade = **clinical diagnosis** (Beck's triad + pulsus paradoxus)\n- Deteriorating patient → proceed to **urgent pericardiocentesis** rather than wait for imaging",
   "mnemonic": "Pericarditis = NSAID + Colchicine (Colchicine = the marks-winning add-on). Tamponade Beck's triad: 'Drop, Muffle, Distend' (low BP, muffled sounds, distended neck veins).",
   "tags": [
    "pericarditis",
    "cardiac tamponade",
    "colchicine",
    "pericardiocentesis",
    "Beck triad"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Pericarditis: NSAID/aspirin + COLCHICINE (avoid steroids first-line)</div><div class=\"gv-step\">Check troponin (myopericarditis) + look for effusion</div><div class=\"gv-step\">Effusion + Beck's triad / pulsus paradoxus &gt;10 mmHg = tamponade</div><div class=\"gv-step\">Crashing &rarr; urgent pericardiocentesis (don't wait for echo)</div></div>",
   "title": "Acute pericarditis & cardiac tamponade",
   "subtitle": "colchicine is the gotcha, tamponade is clinical",
   "id": "cardiovascular-30",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_pericarditis_diffuse_01.jpg",
     "caption": "Acute pericarditis — diffuse saddle-shaped ST elevation ECG",
     "alt": "Acute pericarditis: diffuse concave (saddle-shaped) ST elevation in multiple leads with PR depression",
     "credit": "Wikimedia Commons (see file page), CC BY-SA 4.0"
    },
    {
     "src": "assets/img/cardiology_cxr_pericardial_effusion_01.png",
     "caption": "Cardiac tamponade — large pericardial effusion on CXR",
     "alt": "Large pericardial effusion producing globular flask-shaped cardiomegaly — tamponade context",
     "credit": "James Heilman MD (Jmh649) / Wikimedia Commons · CC BY-SA 3.0"
    }
   ]
  },
  {
   "topic": "Aortic dissection: control HR before BP, NEVER thrombolyse, and the missed-MI trap",
   "subarea": "Valves, aorta, pericardium & vascular",
   "trap": "- Sequence matters: lower **HEART RATE FIRST** (IV beta-blocker, e.g. esmolol or labetalol) to target **HR <60 bpm**\n  - THEN add a **vasodilator** (e.g. GTN or sodium nitroprusside) to target **SBP 100–120 mmHg**\n  - Giving vasodilator first causes **reflex tachycardia** → increased aortic wall shear (dP/dt) → propagation\n- Target: **SBP 100–120** (lowest tolerated maintaining cerebral/renal perfusion), **HR <60**\n- **Type A (ascending)** = EMERGENCY **SURGERY**\n- **Type B (descending)** = **medical management** unless complicated (malperfusion, rupture, refractory pain/HTN → **TEVAR**)\n- THE MISSED-MI TRAP: type A dissection can occlude the **RCA ostium** and present as an **inferior STEMI**\n  - **Thrombolysing this is catastrophic** (rupture, tamponade)\n  - Before lysing any inferior STEMI with red flags → think **dissection**",
   "source": "ESC 2014 aortic disease guideline (current); IRAD registry data; current Australian emergency/cardiology practice",
   "discriminator": "- **Dissection vs STEMI**:\n  - Dissection: **tearing/migrating pain** (front to back), **pulse/BP differential between arms (>20 mmHg)**, widened mediastinum on CXR, new early-diastolic **AR murmur**, chest pain out of proportion to near-normal/non-ischaemic ECG\n  - An inferior STEMI from **RCA-ostial dissection** is the killer overlap — look for the extra-cardiac clues",
   "redFlags": "- **Tearing chest/back pain + pulse deficit + widened mediastinum** = CT aortogram now\n- **Inferior STEMI with any dissection feature** = bedside echo + CT **before thrombolysis**\n- **Hypotension/syncope/new diastolic murmur** = type A with tamponade or AR → call cardiothoracics immediately",
   "whatFirst": "- Two large-bore IVs\n- **IV beta-blocker to HR <60 FIRST**\n- Then **vasodilator to SBP 100–120**\n- Urgent **CT aortogram**\n- Involve **cardiothoracic surgery** for any ascending (type A) involvement\n- Adequate **analgesia** (reduces sympathetic drive)",
   "mcqTrap": "- **'Commence GTN infusion to lower BP'** as the first step\n  - Wrong — **beta-blocker (HR control) comes before vasodilator**\n- **'Thrombolyse the inferior STEMI'**\n  - Wrong — **thrombolysis in dissection is lethal**",
   "viva": "- **Rate-control with IV beta-blocker to HR under 60** before adding a vasodilator to SBP 100–120\n- Get a **CT aortogram**\n- Crucially **avoid thrombolysis** — in an inferior STEMI, actively **exclude type A dissection** occluding the RCA ostium",
   "mnemonic": "Beta-blocker BEFORE vasodilator - rate before pressure (reverse order causes reflex tachycardia and propagation).",
   "tags": [
    "aortic dissection",
    "thrombolysis contraindication",
    "missed MI",
    "type A",
    "type B"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Suspect dissection: tearing pain, pulse deficit, widened mediastinum</div><div class=\"gv-step\">IV beta-blocker FIRST &rarr; HR &lt;60 bpm</div><div class=\"gv-step\">THEN vasodilator &rarr; SBP 100-120 mmHg</div><div class=\"gv-step\">CT aortogram</div><div class=\"gv-step\">Type A (ascending) = surgery | Type B = medical unless complicated</div></div>",
   "title": "Aortic dissection",
   "subtitle": "control HR before BP, NEVER thrombolyse, and the missed-MI trap",
   "id": "cardiovascular-31"
  },
  {
   "topic": "Aortic stenosis: symptom onset is the trigger for AVR (the moment, not the number)",
   "subarea": "Valves, aorta, pericardium & vascular",
   "trap": "- Severe AS by numbers (**AVA <=1.0 cm2, mean gradient >=40 mmHg, peak velocity >=4 m/s**) is NOT itself the indication to operate\n- Intervention (**SAVR or TAVI**) is triggered by:\n  - **SYMPTOM ONSET** (exertional dyspnoea, angina, syncope) in severe AS, OR\n  - **LV dysfunction (LVEF <50%)**\n- Untreated symptomatic severe AS carries high 2-year mortality:\n  - Classic survival after symptom onset: **angina ~5y, syncope ~3y, heart failure ~2y**\n- Other operate triggers even when asymptomatic:\n  - Very severe AS (**Vmax >5 m/s / mean gradient >=60**)\n  - **Abnormal exercise test** (symptoms or fall in BP on exercise)\n  - **Rapid progression**\n- **Vasodilators/GTN are dangerous** in severe AS (fixed obstruction → syncope); avoid aggressive afterload reduction\n- TAVI: established for **elderly and intermediate-to-high** (and increasingly low) surgical-risk patients; decided by **Heart Team** via TTE-confirmed severity",
   "source": "ESC/EACTS 2021 valvular heart disease guideline; CSANZ/ANZSCTS TAVI accreditation framework; RACGP AJGP 2023 review of AS and TAVI in the elderly",
   "discriminator": "- **AS vs HOCM murmur**:\n  - AS: **softens/diminishes with Valsalva and standing** (less preload); radiates to carotids with **slow-rising pulse** (pulsus parvus et tardus)\n  - HOCM: murmur **INCREASES with Valsalva/standing**; has a **sharp, jerky pulse**",
   "redFlags": "- **New exertional syncope, angina or dyspnoea** in known AS = urgent echo + cardiology referral (symptom onset = the clock starts)\n- **Syncope or HF in severe AS** = expedite intervention, do not just discharge",
   "whatFirst": "- Confirm **severity AND symptom status** with TTE\n- If severe + symptomatic → refer for **Heart Team** assessment (SAVR vs TAVI)\n- **Avoid GTN/high-dose vasodilators** while obstructed",
   "mcqTrap": "- **'Asymptomatic severe AS → proceed to AVR now'**\n  - Wrong — asymptomatic severe AS with normal LVEF and normal exercise test is generally **watched** (unless very severe/rapid progression/LVEF <50%)\n  - Trigger is **symptoms or LV dysfunction**",
   "viva": "- Decision to replace the valve is driven by **symptom onset or LV dysfunction, not the gradient alone**\n- Take careful history for **exertional dyspnoea, angina and syncope**\n- Get a **TTE**; refer to **Heart Team** for SAVR versus TAVI",
   "mnemonic": "SAD = Syncope (~3y), Angina (~5y), Dyspnoea/HF (~2y) survival once symptomatic - HF carries the shortest survival.",
   "tags": [
    "aortic stenosis",
    "AVR",
    "TAVI",
    "valvular"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Severity</th><th>Vmax</th><th>Mean gradient</th><th>AVA</th></tr><tr><td>Severe</td><td>&ge;4 m/s</td><td>&ge;40 mmHg</td><td>&le;1.0 cm&sup2;</td></tr><tr><td>Very severe</td><td>&gt;5 m/s</td><td>&ge;60 mmHg</td><td>&mdash;</td></tr><tr><td>Operate when</td><td colspan=\"3\">Symptoms OR LVEF &lt;50% OR very severe / abnormal exercise test / rapid progression</td></tr></table>",
   "title": "Aortic stenosis",
   "subtitle": "symptom onset is the trigger for AVR (the moment, not the number)",
   "id": "cardiovascular-32",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_lvh_voltage_01.jpg",
     "caption": "Aortic stenosis — LVH on ECG (voltage criteria)",
     "alt": "Left ventricular hypertrophy voltage criteria on ECG — the electrocardiographic correlate of pressure-overload AS",
     "credit": "Andrewmeyerson, Wikimedia Commons, CC BY-SA 3.0"
    }
   ],
   "cutoffs": [
    "Severe AS: AVA **<=1.0 cm2**, mean gradient **>=40 mmHg**, peak velocity **>=4 m/s**",
    "Operate trigger: **symptoms** or **LVEF <50%**",
    "Very severe: Vmax **>5 m/s** / mean gradient **>=60 mmHg**",
    "Survival after symptoms: angina **~5y**, syncope **~3y**, HF **~2y**"
   ]
  },
  {
   "topic": "Hypertensive emergency vs urgency: the rate of BP lowering is the whole answer",
   "subarea": "Valves, aorta, pericardium & vascular",
   "trap": "- **EMERGENCY** = severe hypertension (often **>180/120**) WITH **acute end-organ damage**:\n  - Encephalopathy, ischaemic/haemorrhagic stroke, ACS, acute LV failure/pulmonary oedema, aortic dissection, AKI, eclampsia, papilloedema\n- **URGENCY** = severely raised BP WITHOUT acute end-organ damage\n- Decisive distinction = **target-organ damage**, NOT the absolute number\n- In emergency: IV titratable agents, controlled lowering:\n  - Reduce MAP by **~no more than 20–25% in the first hour**\n  - Then to **~160/100–110 over the next 2–6 hours**\n  - Then normalise over **24–48 h**\n- **DROPPING BP TOO FAST** causes watershed cerebral/coronary/renal hypoperfusion (stroke, MI)\n- EXCEPTIONS needing **rapid lowering**:\n  - **Aortic dissection** (SBP 100–120, HR <60 fast)\n  - **Acute pulmonary oedema**\n- In **acute ischaemic stroke**: do NOT lower aggressively — **permissive hypertension**\n  - Only treat if **SBP >220 or DBP >120**\n  - Or if thrombolysis planned, lower to **<185/110**\n- Urgency: **oral agents**, gradual lowering over **24–48 h**, outpatient follow-up — do NOT give a big IV/sublingual dose",
   "source": "Heart Foundation of Australia hypertension guideline; Therapeutic Guidelines (eTG, current) - hypertensive emergencies; Stroke Foundation Clinical Guidelines (BP in acute stroke)",
   "discriminator": "- **Emergency vs urgency** = presence vs absence of **acute target-organ damage**\n- The number alone (e.g. 220/130) does NOT make it an emergency if asymptomatic with no end-organ injury = **urgency**\n- **Pseudo-emergency** (anxiety/pain) resolves with analgesia/reassurance",
   "redFlags": "- Severe HTN + **chest pain/tearing pain, focal neurology, breathlessness/pulmonary oedema, visual change/papilloedema, confusion, or rising creatinine** = emergency → IV therapy + monitored bed\n- **Pregnancy + severe HTN + symptoms** = pre-eclampsia/eclampsia pathway",
   "whatFirst": "- Decide **emergency vs urgency** by hunting for acute end-organ damage (history, exam, ECG, troponin, fundoscopy, creatinine, urinalysis, CXR/CT as indicated)\n- Emergency → **IV titratable agent** in a monitored setting, lower MAP **~20–25% in hour 1**\n- Urgency → **oral, gradual, follow-up**",
   "mcqTrap": "- **'Rapidly normalise blood pressure with IV/sublingual nifedipine'**\n  - Wrong — precipitous lowering (especially **short-acting sublingual nifedipine**) causes stroke/MI from hypoperfusion\n  - Lower controlled (**~20–25% in first hour**) except in dissection/pulmonary oedema",
   "viva": "- First look for **acute end-organ damage** to separate emergency from urgency\n- If emergency: lower MAP by **no more than ~a quarter in the first hour** with a titratable IV agent\n- Except in **aortic dissection or pulmonary oedema** where I lower faster\n- In **acute ischaemic stroke**: permit higher pressures unless **thrombolysis is planned**",
   "mnemonic": "'Damage decides, not the digits' - end-organ damage = emergency; and 'a quarter in an hour' for the first-hour MAP drop.",
   "tags": [
    "hypertensive emergency",
    "hypertensive urgency",
    "MAP",
    "end-organ damage"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th></th><th>Emergency</th><th>Urgency</th></tr><tr><td>Acute end-organ damage</td><td>YES</td><td>NO</td></tr><tr><td>Route</td><td>IV titratable</td><td>Oral</td></tr><tr><td>Speed</td><td>MAP &darr; ~<span class=\"gv-num\">20-25%</span> in 1st hour</td><td>Gradual over 24-48 h</td></tr><tr><td>Exceptions (lower fast)</td><td colspan=\"2\">Aortic dissection (SBP 100-120), acute pulmonary oedema</td></tr></table>",
   "title": "Hypertensive emergency vs urgency",
   "subtitle": "the rate of BP lowering is the whole answer",
   "id": "cardiovascular-33",
   "images": [
    {
     "src": "assets/img/cardiology_cxr_pulmonary_oedema_01.jpg",
     "caption": "Hypertensive emergency — acute pulmonary oedema on CXR",
     "alt": "Cardiogenic pulmonary oedema (bat-wing pattern) as an end-organ manifestation of hypertensive emergency",
     "credit": "Hellerhoff / Wikimedia Commons · CC BY-SA 4.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Hypertensiveretinopathy.jpg/960px-Hypertensiveretinopathy.jpg",
     "caption": "Hypertensive retinopathy — fundus in hypertensive emergency",
     "alt": "Hypertensive retinopathy with flame haemorrhages, cotton-wool spots and papilloedema in hypertensive emergency",
     "credit": "Wikimedia Commons"
    }
   ],
   "cutoffs": [
    "Reduce MAP **~20–25%** in first hour (emergency)",
    "Then to **~160/100–110** over 2–6 hours",
    "Normalise over **24–48 h**",
    "Acute ischaemic stroke: only treat if SBP **>220** or DBP **>120** (or **<185/110** if thrombolysing)"
   ]
  },
  {
   "topic": "Infective endocarditis: Australian (eTG) prophylaxis indications and modified Duke criteria",
   "subarea": "Valves, aorta, pericardium & vascular",
   "trap": "- IE prophylaxis in Australia covers only a **few high-risk cardiac groups** — NOT mitral valve prolapse, bicuspid valve, isolated AS/MS, HOCM, or non-cyanotic repaired defects\n- High-risk groups requiring prophylaxis:\n  - **Prosthetic valve** or prosthetic material used for valve repair\n  - **Previous IE**\n  - Specific **congenital heart disease**: unrepaired cyanotic; completely repaired with prosthetic material in the first 6 months; repaired with residual defect adjacent to prosthetic material\n  - **Cardiac transplant** with valvulopathy\n  - **Rheumatic heart disease** in Aboriginal and Torres Strait Islander people\n- Australian regimen for at-risk dental/oral procedures:\n  - First-line: **amoxicillin 2 g** orally (child 50 mg/kg) 1 hour before\n  - Penicillin allergy non-severe: **cefalexin 2 g**\n  - Severe/immediate hypersensitivity: **clindamycin 600 mg**\n- Prophylaxis only for procedures involving **manipulation of the gingiva/periapical region or perforation of the oral mucosa**\n  - NOT routine cleaning\n  - NOT GI/GU procedures",
   "source": "Therapeutic Guidelines (eTG, current) - Antibiotic: prevention of endocarditis; Australian Prescriber endocarditis prophylaxis articles",
   "discriminator": "- Duke **major criteria**:\n  - **(a)** Typical organism on 2 separate blood cultures (Strep viridans, S. gallolyticus/bovis, HACEK, S. aureus, community-acquired enterococci) OR persistent bacteraemia\n  - **(b)** Echo evidence (vegetation, abscess, new dehiscence) OR **new valvular regurgitation**\n- Duke **minor criteria**: predisposing heart condition/IVDU; fever >=38; vascular phenomena (Janeway, emboli); immunologic phenomena (Osler nodes, Roth spots, RF, GN); microbiologic not meeting major\n- **Definite IE** = 2 major OR 1 major + 3 minor OR 5 minor",
   "redFlags": "- **S. aureus bacteraemia** = echo + endocarditis workup (do NOT dismiss)\n- New **murmur + fever + embolic phenomena** = blood cultures x3 before antibiotics if stable\n- New **conduction block (PR prolongation)** suggests aortic root abscess\n  - Urgent surgical referral",
   "whatFirst": "- **3 sets of blood cultures from separate sites** BEFORE antibiotics (if haemodynamically stable)\n- Then start **empirical therapy** + urgent TTE/TOE\n- **Involve cardiology and ID early**",
   "mcqTrap": "- Tempting wrong answer: **'give prophylaxis for mitral valve prolapse / bicuspid aortic valve'** before dental work\n  - WRONG — these are NOT on the Australian high-risk list\n- Also wrong: **'amoxicillin 3 g'** (old pre-2008 figure)\n  - Current eTG dose is **2 g** (adult)",
   "viva": "- Say out loud: '**Only a few high-risk cardiac conditions** plus prior IE — and RHD in Aboriginal and Torres Strait Islander people — get prophylaxis in Australia'\n- 'I would give **amoxicillin 2 g one hour before** a high-risk dental procedure'\n- 'But for this patient with isolated MVP, **prophylaxis is not indicated** under eTG'",
   "mnemonic": "Duke minors = FROM JANE: Fever, Roth spots, Osler nodes, Murmur (predisposition), Janeway lesions, Anaemia/Arterial emboli, Nail haemorrhages, Emboli/positive culture (minor).",
   "tags": [
    "infective endocarditis",
    "Duke criteria",
    "prophylaxis",
    "eTG"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Australian eTG prophylaxis - who</th></tr><tr><td>Prosthetic valve / prosthetic material for valve repair</td></tr><tr><td>Previous infective endocarditis</td></tr><tr><td>Specific congenital heart disease (cyanotic unrepaired; prosthetic material &lt;6 mo; residual defect)</td></tr><tr><td>Cardiac transplant with valvulopathy</td></tr><tr><td>RHD in Aboriginal &amp; Torres Strait Islander people</td></tr></table><div class=\"gv-pills\"><span class=\"gv-pill\">Amoxicillin 2 g PO, 1 h before</span><span class=\"gv-pill\">Allergy (non-severe): cefalexin 2 g</span><span class=\"gv-pill\">Severe allergy: clindamycin 600 mg</span></div>",
   "title": "Infective endocarditis",
   "subtitle": "Australian (eTG) prophylaxis indications and modified Duke criteria",
   "id": "cardiovascular-34",
   "images": [
    {
     "src": "assets/img/cardiology_splinter_haemorrhages_01.jpg",
     "caption": "Splinter haemorrhages — infective endocarditis peripheral sign",
     "alt": "Subungual splinter haemorrhages (longitudinal dark streaks under nails) — peripheral embolic sign of IE",
     "credit": "Splarka, Wikimedia Commons, public domain · Public domain"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Osler_Nodules_Hand.jpg/960px-Osler_Nodules_Hand.jpg",
     "caption": "Osler nodes — tender nodules on fingertips (IE)",
     "alt": "Osler nodes — painful erythematous nodules on the finger pulps in infective endocarditis",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Ruptured AAA: permissive (hypotensive) resuscitation - do NOT over-fill",
   "subarea": "Valves, aorta, pericardium & vascular",
   "trap": "- In a hypotensive patient with suspected/known ruptured AAA, the aim is **permissive hypotension** (hypotensive haemostatic resuscitation)\n- Target: **lowest pressure that maintains consciousness and a radial pulse** (typically SBP ~70–90 mmHg)\n  - Just enough cerebral perfusion\n- Aggressive crystalloid to 'normalise' BP:\n  - **Dislodges clot**, dilutes clotting factors, precipitates fatal exsanguination\n- The decisive action is **immediate transfer to theatre/endovascular suite** (EVAR increasingly favoured)\n  - NOT fluid resuscitation in the ED\n- Do **NOT delay surgery for CT** in a crashing patient\n  - Known AAA + hypotension + abdo/back pain = **clinical diagnosis**\n- Note: IMPROVE trial data suggest **<70 mmHg is too low** (independently linked to mortality)\n  - 'Permissive' does NOT mean 'profoundly hypotensive'",
   "source": "IMPROVE trial; Cochrane review on hypotensive resuscitation in ruptured AAA; current Australian vascular surgery practice",
   "discriminator": "- Ruptured AAA vs renal colic: both give flank/back pain\n- Features pointing to **AAA**: pulsatile expansile abdominal mass, hypotension, syncope, age >60 with vascular risk factors\n- **NEVER anchor** on 'renal colic' in an older patient's first-ever loin pain\n  - Image or examine for AAA first",
   "redFlags": "- **Known AAA + sudden abdo/back pain + hypotension/syncope** = ruptured until proven otherwise\n  - Theatre/vascular NOW\n- **Pulsatile mass + collapse** = do not wait\n- **Avoid large-volume fluid boluses**",
   "whatFirst": "- **Call vascular surgery immediately**\n- Large-bore access + group and hold/crossmatch + **activate massive transfusion protocol**\n- Resuscitate to permissive targets: **SBP ~70–90 / palpable radial pulse / talking**\n- Expedite to **EVAR or open repair**\n- CT only if **stable enough**",
   "mcqTrap": "- Tempting wrong answer: **'aggressive IV fluid boluses to restore normal blood pressure'**\n  - WRONG — disrupts clot and worsens haemorrhage\n  - Correct approach: **permissive hypotension + rapid surgical control**",
   "viva": "- Say out loud: 'I would **not chase a normal blood pressure**'\n- 'I would resuscitate to a **systolic around 80**, keep the patient talking with a palpable radial pulse'\n- '**Activate massive transfusion** and get them to the vascular surgeons for EVAR or open repair without delay'",
   "mnemonic": "'Permit a low pressure, prioritise the theatre' - fill the surgeon's hands, not the patient's veins.",
   "tags": [
    "ruptured AAA",
    "permissive hypotension",
    "vascular emergency",
    "EVAR"
   ],
   "verified": false,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Target SBP <span class=\"gv-num\">70-90 mmHg</span></span><span class=\"gv-pill\">Keep patient conscious + radial pulse</span><span class=\"gv-pill\">Avoid large fluid boluses</span><span class=\"gv-pill\">Theatre/EVAR first, CT only if stable</span></div>",
   "title": "Ruptured AAA",
   "subtitle": "permissive (hypotensive) resuscitation - do NOT over-fill",
   "id": "cardiovascular-35",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/CTRupturedTA.PNG/960px-CTRupturedTA.PNG",
     "caption": "Ruptured AAA — CT showing retroperitoneal haematoma and aneurysm",
     "alt": "CT of ruptured abdominal aortic aneurysm with large retroperitoneal haematoma and irregular aortic wall",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Ultrasonography_of_abdominal_aortic_aneurysm_in_axial_plane.jpg",
     "caption": "AAA — ultrasound showing dilated aorta >3 cm",
     "alt": "Abdominal ultrasound demonstrating an aneurysmal aorta (>3 cm diameter) — screening/first-line imaging",
     "credit": "Wikimedia Commons"
    }
   ]
  }
 ]
}
);
