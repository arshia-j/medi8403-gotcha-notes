window.GOTCHA = window.GOTCHA || { modules: [] };
window.GOTCHA.modules.push(
{
 "id": "surg-vascular",
 "name": "Vascular Surgery",
 "category": "Surgery",
 "blurb": "Written-exam + VIVA. Ruptured AAA, dissection, acute limb ischaemia (6 Ps) and the time windows.",
 "cards": [
  {
   "topic": "AAA screening & repair thresholds — Australian cut-offs (>=5.5 cm men, >=5.0 cm women) + NO national screening program",
   "subarea": "Aneurysm & dissection",
   "trap": "- Two Australian-specific gotchas\n- **(1) THRESHOLDS**: elective repair indicated at **≥5.5 cm in MEN**, lower (**≥5.0 cm**) in WOMEN (relatively higher rupture risk per diameter)\n  - OR **rapid expansion >5 mm in 6 months / >1 cm per year**\n  - OR **symptomatic/tender at ANY size**\n  - Below threshold = **surveillance + risk-factor control**, NOT surgery\n- **(2) SCREENING**: Australia has **NO national AAA screening program**; ANZSVS/RACGP have not endorsed one (unlike UK/Sweden one-off scan for 65-yr-old men)\n  - Screening is **opportunistic/targeted** via MBS-funded ultrasound (e.g. men >65 who have smoked, or >65 with first-degree-relative history)\n  - Do not write **'all men 65 are screened'** on an Australian paper",
   "source": "RACGP (AJGP) 'AAA screening and surveillance' update — no national/endorsed Australian program; SVS 2018 practice guidelines (thresholds & surveillance intervals)",
   "discriminator": "- **Symptomatic AAA** (tender, back pain, distal embolisation) → repair **regardless of size** — do NOT just keep watching\n- **Asymptomatic <5.5 cm** → ultrasound surveillance:\n  - **3.0–3.9 cm** ~3-yearly\n  - **4.0–4.9 cm** ~12-monthly\n  - **5.0–5.4 cm** ~6-monthly\n- Repair decision = **diameter OR growth OR symptoms** — any one triggers",
   "redFlags": "- New back/abdominal pain or tenderness over a known AAA = **symptomatic/impending rupture** → urgent repair, not surveillance\n- **Rapid growth** on surveillance\n- **Distal embolic 'trash foot'** from mural thrombus",
   "mcqTrap": "- Tempting wrong answer: 'Refer for elective repair of a **4.8 cm asymptomatic AAA**' — below threshold → surveillance + smoking cessation/BP/statin, not surgery\n- Wrong: '**Australia screens all 65-year-old men**' — no national program\n- Wrong: applying the **5.5 cm male cut-off to a woman** (she crosses threshold earlier at 5.0 cm)",
   "mnemonic": "'5-5 to survive': 5.5 cm (men) is the line; women 5.0. Plus the 3 triggers = Size, Speed (growth), Symptoms.",
   "viva": "- Examiner probes: repair is multifactorial (**size OR growth OR symptoms**), the sex difference, and the Australian screening reality (no national program — MBS-targeted)\n- Counsel patient on **EVAR vs open** trade-offs (EVAR lower early mortality, needs lifelong surveillance for endoleak; open more durable)",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>AAA diameter</th><th>Action</th></tr></thead><tbody><tr><td>3.0-3.9 cm</td><td>US surveillance ~3-yearly</td></tr><tr><td>4.0-4.9 cm</td><td>US surveillance ~12-monthly</td></tr><tr><td>5.0-5.4 cm</td><td>US surveillance ~6-monthly</td></tr><tr><td>>=5.5 cm MEN / >=5.0 cm WOMEN</td><td>Refer for elective repair</td></tr><tr><td>Growth >5 mm/6 mo or >1 cm/yr</td><td>Refer for repair (any size)</td></tr><tr><td>Symptomatic / tender (any size)</td><td>Urgent repair</td></tr></tbody></table>",
   "cutoffs": [
    "**≥5.5 cm** = elective repair threshold (men)",
    "**≥5.0 cm** = elective repair threshold (women)",
    "Growth **>5 mm/6 months** or >1 cm/year = repair regardless of size",
    "Surveillance: **3.0–3.9 cm** ~3-yearly; **4.0–4.9 cm** ~12-monthly; **5.0–5.4 cm** ~6-monthly"
   ],
   "tags": [
    "AAA",
    "screening",
    "5.5 cm threshold",
    "surveillance",
    "EVAR vs open",
    "Australian practice",
    "MEDI8403",
    "MEDI8401"
   ],
   "verified": true,
   "title": "AAA screening & repair thresholds",
   "subtitle": "Australian cut-offs (>=5.5 cm men, >=5.0 cm women) + NO national screening program",
   "id": "surg-vascular-1",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Ultrasonography_of_abdominal_aortic_aneurysm_with_mural_thrombus.jpg",
     "caption": "AAA - abdominal ultrasound showing aortic aneurysm",
     "alt": "Abdominal ultrasound (B-mode) demonstrating a fusiform dilation of the infrarenal abdominal aorta >3 cm — the first-line screening and surveillance modality for AAA",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Contrast-enhanced_CT_scan_demonstrating_abdominal_aortic_aneurysm.jpg/960px-Contrast-enhanced_CT_scan_demonstrating_abdominal_aortic_aneurysm.jpg",
     "caption": "AAA - CT angiogram showing large infrarenal abdominal aortic aneurysm",
     "alt": "CT angiogram demonstrating a large (>5.5 cm) infrarenal abdominal aortic aneurysm with intraluminal thrombus — the pre-operative planning modality and indication for elective repair",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Aortic dissection — Stanford A vs B: what each gets (A = emergency surgery; B = medical first)",
   "subarea": "Aneurysm & dissection",
   "trap": "- Stanford **TYPE A** (involves ASCENDING aorta +/- arch — DeBakey I/II) = **EMERGENCY cardiothoracic SURGERY** (open repair)\n  - Kills ~**1–2% per hour** untreated from tamponade, aortic regurgitation, coronary occlusion or rupture\n- Stanford **TYPE B** (descending only, distal to left subclavian — DeBakey III) = **MEDICAL management first** (aggressive BP/HR control)\n  - UNLESS complicated (malperfusion of gut/kidney/limb, rupture, refractory pain/hypertension, rapid expansion) → then **TEVAR/intervention**\n- Do NOT reflexively send every dissection to surgery; do NOT 'manage medically' a type A\n- Investigation in the **STABLE** patient = **CT aortogram** (study of choice in ED)\n- **Unstable peri-arrest** = bedside **TOE**",
   "source": "eTG (current); 2022 ACC/AHA aortic disease guideline (Stanford/DeBakey classification, A=surgical, uncomplicated B=medical)",
   "discriminator": "- **ASCENDING involved = A = theatre**; descending only (after left subclavian) = B = medical first\n- **Uncomplicated B** → medical\n- **Complicated B** (malperfusion/rupture/refractory) → TEVAR\n- Classification is **anatomical** (ascending or not), NOT about where pain is felt",
   "redFlags": "- **Any type A** = surgical emergency\n- In type B: new **limb/visceral/renal ischaemia**, oligo-anuria, rising lactate, refractory pain, refractory hypertension, expanding diameter, rupture signs → escalate for intervention\n- **Aortic regurgitation murmur**, pulse/BP differential between arms, neuro deficit, tamponade = type A features",
   "mcqTrap": "- Tempting wrong answer: '**Type B dissection → urgent surgical repair**' — wrong; uncomplicated type B is medical first; surgery/TEVAR only if complicated\n- Reverse trap: '**Type A → control BP and admit to monitor**' — wrong, type A is a surgical emergency\n- Wrong: '**MRI is first-line** in the unstable patient' — too slow; CT aortogram (stable) or TOE (unstable/peri-arrest)",
   "mnemonic": "'A for Aorta-ascending = Axe (surgery); B for Below = BP meds (Blood-pressure control).'",
   "viva": "- Examiner probes: classify from CT (**ascending involved?**) and assign disposition\n- List complications that **flip a type B** from medical to interventional\n- **ISBAR** to cardiothoracics (type A) vs vascular (type B)\n- Consent for emergency open repair / TEVAR",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Stanford</th><th>Anatomy</th><th>DeBakey</th><th>First-line management</th></tr></thead><tbody><tr><td>Type A</td><td>Ascending aorta +/- arch</td><td>I / II</td><td>EMERGENCY cardiothoracic surgery</td></tr><tr><td>Type B</td><td>Descending only (distal to L subclavian)</td><td>III</td><td>Medical (BP/HR control); TEVAR only if complicated</td></tr></tbody></table>",
   "tags": [
    "aortic dissection",
    "Stanford A vs B",
    "DeBakey",
    "TEVAR",
    "cardiothoracic emergency",
    "CT aortogram",
    "MEDI8403",
    "MEDI8401"
   ],
   "verified": true,
   "title": "Aortic dissection",
   "subtitle": "Stanford A vs B: what each gets (A = emergency surgery; B = medical first)",
   "id": "surg-vascular-2",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/AoDiss_CT_A-Diss.jpg/960px-AoDiss_CT_A-Diss.jpg",
     "caption": "Stanford Type A aortic dissection - CT aortogram showing intimal flap in ascending aorta",
     "alt": "Intimal dissection flap extending through the ascending aorta (Stanford A / DeBakey I) on contrast CT aortogram",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Descending_%28Type_B_Stanford%29_Aortic_Dissection.PNG/960px-Descending_%28Type_B_Stanford%29_Aortic_Dissection.PNG",
     "caption": "Stanford Type B aortic dissection - CT aortogram showing flap confined to descending aorta",
     "alt": "Intimal flap confined to the descending thoracic aorta distal to left subclavian origin (Stanford B) on contrast CT",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Aortic dissection — what-FIRST: heart RATE before BP (beta-blockade FIRST), then BP control",
   "subarea": "Aneurysm & dissection",
   "trap": "- Sequence gotcha: control **HEART RATE FIRST** with an IV beta-blocker, THEN add a vasodilator for BP\n- If you give a vasodilator (GTN/nitroprusside/hydralazine) **first/alone**, the reflex tachycardia **INCREASES aortic wall shear** and can EXTEND the dissection\n- **TARGETS**:\n  - Heart rate **~60 bpm** (classic/eTG: HR <60; 2022 ACC/AHA guideline: 60–80 bpm)\n  - Systolic BP **<120 mmHg** (classically 100–120) — lowest tolerated maintaining cerebral/coronary/renal perfusion (conscious, making urine)\n- **Agents**: IV **beta-blocker first** (esmolol — short-acting/titratable, or labetalol = combined alpha+beta); vasodilator only after rate is controlled\n- Plus **generous opioid analgesia** — pain drives catecholamines/BP\n- This rate-then-pressure rule applies to **BOTH type A** (pre-op) **and type B**",
   "source": "eTG (current; HR <60, SBP 100-120, beta-blocker first); 2022 ACC/AHA aortic disease guideline (updated HR target 60-80, SBP <120, IV beta-blocker class I first-line)",
   "discriminator": "- **Beta-blocker FIRST** (lowers dP/dt and HR), **vasodilator SECOND**\n- If beta-blocker contraindicated (severe asthma, bradycardia, high-grade AV block) → **non-dihydropyridine Ca-channel blocker** (diltiazem/verapamil) for rate\n- **Labetalol** is a convenient single agent (does both)\n- **Never vasodilator monotherapy**\n- **Analgesia** is part of BP control, not an afterthought",
   "redFlags": "- Falling conscious level/urine output/rising lactate while lowering BP = **over-treatment, end-organ malperfusion** — re-titrate up\n- **Widening pulse pressure**, new AR murmur, tamponade, neuro deficit = type A complication → theatre",
   "mcqTrap": "- Tempting wrong answer: 'Start **IV GTN / sodium nitroprusside** to lower the blood pressure' — wrong as the first/sole agent\n  - Reflex tachycardia raises shear and can **propagate the dissection**; give the beta-blocker first\n- Wrong: 'target **SBP <90 / MAP very low**' — must preserve organ perfusion",
   "mnemonic": "'RATE before pressure' / beta-Block, THEN dilate. Rate ~60, SBP <120.",
   "viva": "- Examiner probes: **beta-blocker FIRST** and justify it (dP/dt / shear)\n- Dual targets: **rate then SBP <120**\n- Asthma alternative: **diltiazem**\n- **Analgesia is therapeutic**\n- Bonus: flag the HR target nuance (classic **<60** vs 2022 guideline **60–80**)\n- ISBAR to ICU/cardiothoracics; **arterial line** + 2 IV",
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">1. IV beta-blocker FIRST (esmolol/labetalol) -> rate ~60, lower dP/dt</div><div class=\"gv-step\">2. THEN add vasodilator (e.g. GTN) if SBP still high</div><div class=\"gv-step\">3. Target SBP <120 (conscious, perfusing)</div><div class=\"gv-step\">4. Generous opioid analgesia (pain drives BP)</div><div class=\"gv-step\">5. Beta-blocker contraindicated? -> diltiazem/verapamil for rate</div></div>",
   "cutoffs": [
    "Heart rate target **~60 bpm** (classic/eTG: HR <60; 2022 ACC/AHA: **60–80 bpm**)",
    "SBP target **<120 mmHg** (classically 100–120), lowest tolerated maintaining end-organ perfusion",
    "**Beta-blocker FIRST**, then vasodilator — never vasodilator monotherapy"
   ],
   "tags": [
    "aortic dissection",
    "beta-blocker first",
    "dP/dt",
    "heart rate target",
    "SBP <120",
    "esmolol",
    "labetalol",
    "MEDI8403",
    "MEDI8401"
   ],
   "verified": false,
   "title": "Aortic dissection",
   "subtitle": "what-FIRST: heart RATE before BP (beta-blockade FIRST), then BP control",
   "id": "surg-vascular-3"
  },
  {
   "topic": "Ruptured AAA — what-first: permissive (hypotensive) resuscitation, DON'T over-fill, straight to theatre",
   "subarea": "Aneurysm & dissection",
   "trap": "- Catastrophic exam error: **aggressive crystalloid bolus 'to normalise BP'** in a hypotensive ruptured AAA\n  - Raising BP and diluting clot **pops the contained retroperitoneal tamponade** → free rupture and exsanguination\n- What-first in a haemodynamically unstable rupture: **permissive (hypotensive) resuscitation**\n  - Titrate **blood** (not crystalloid) to keep the patient conscious and talking\n  - Practical surrogate: palpable radial pulse / **SBP roughly 70–90 mmHg**\n- **Large-bore IV access**, activate **massive transfusion protocol**, go **straight to theatre**\n- **Unstable patient does NOT get a CT first** — diagnosis is clinical (known/pulsatile AAA + hypotension + back/abdo pain)\n- Only the **STABLE** patient gets CT aortogram to plan EVAR vs open\n- **Definitive haemorrhage control IS the resuscitation**",
   "source": "ANZSVS / eTG (current); Cochrane review on controlled hypotension / permissive resuscitation in ruptured AAA",
   "discriminator": "- **Stable + known AAA** → CT aortogram to triage EVAR vs open\n- **Unstable** → NO imaging, **theatre now**\n- Classic triad (hypotension + back/flank pain + pulsatile mass) present in **<50%** — absence does not exclude\n- Beware the **'renal colic' misdiagnosis** in an older arteriopath: any first-presentation 'renal colic' over ~60 = **ruptured AAA until proven otherwise**",
   "redFlags": "- **Hypotension + abrupt severe abdo/back pain** in anyone >60 with vascular risk factors\n- **Transient hypotension** that 'responded to fluids' (contained leak about to blow)\n- **Syncope**; new pulsatile mass\n- Escalate to **vascular surgery + theatre + ICU + blood bank** simultaneously",
   "mcqTrap": "- Tempting wrong answer: 'Give **2 L of warmed crystalloid** to restore a normal blood pressure before transfer' — wrong; over-resuscitation dislodges the tamponade and worsens haemorrhage\n- **Permissive hypotension + immediate operative control** is correct\n- Wrong: '**urgent CT to confirm**' in the UNSTABLE patient",
   "mnemonic": "'Talk, don't top-up' — keep them conscious/talking, not normotensive.",
   "viva": "- Examiner probes the what-first ladder: (1) **clinical Dx**, (2) **permissive hypotension + MTP**, (3) **theatre**\n- Tests whether you'll incorrectly **CT an unstable patient**\n- ISBAR straight to vascular consultant + activate MTP; consent is **emergency/no-delay** (proceed under duty of care if unable to consent)",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Ruptured AAA status</th><th>Imaging?</th><th>Resuscitation</th><th>Destination</th></tr></thead><tbody><tr><td>UNSTABLE (hypotensive/syncope)</td><td>NO — clinical Dx</td><td>Permissive: keep conscious/talking, palpable radial, SBP ~70-90; blood not crystalloid; activate MTP</td><td>Theatre NOW (open or rEVAR)</td></tr><tr><td>STABLE</td><td>CT aortogram</td><td>Minimal fluids, avoid over-fill</td><td>Theatre — EVAR if anatomy suits, else open</td></tr></tbody></table>",
   "cutoffs": [
    "Permissive SBP target **~70–90 mmHg** (practical surrogate; titrate to conscious level, not a hard guideline cut-off)"
   ],
   "tags": [
    "ruptured AAA",
    "permissive hypotension",
    "resuscitation",
    "MTP",
    "vascular emergency",
    "MEDI8403",
    "MEDI8401"
   ],
   "verified": true,
   "title": "Ruptured AAA",
   "subtitle": "what-first: permissive (hypotensive) resuscitation, DON'T over-fill, straight to theatre",
   "id": "surg-vascular-4",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/RupturedAAA.png/960px-RupturedAAA.png",
     "caption": "Ruptured AAA - CT showing periaortic retroperitoneal haematoma",
     "alt": "Large abdominal aortic aneurysm with surrounding retroperitoneal haematoma indicating rupture on axial CT",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "The missed-MI trap — aortic dissection masquerading as inferior STEMI; thrombolysis/anticoagulation is LETHAL",
   "subarea": "Aneurysm & dissection",
   "trap": "- Highest-stakes diagnostic trap: Stanford type A dissection can dissect proximally into the **RIGHT coronary ostium** → genuine **INFERIOR STEMI** on ECG (II, III, aVF)\n- If you anchor on the ECG and give **THROMBOLYSIS** (or full anticoagulation/dual antiplatelet) → **catastrophic aortic rupture and death**\n- **ALWAYS screen for dissection before lysing**:\n  - Tearing chest pain radiating to the **back/interscapular**\n  - Pain **maximal at ONSET**\n  - **Inter-arm SBP differential** (>20 mmHg)\n  - **Pulse deficit**\n  - New early-diastolic **AR murmur**\n  - **Syncope**, focal neuro deficit\n  - **Widened mediastinum** on CXR\n- If any are present → **CT aortogram / bedside TOE BEFORE reperfusion therapy**\n- Reverse trap: don't dismiss a true dissection as 'just an MI'",
   "source": "eTG / 2022 ACC/AHA aortic disease guideline (consider dissection before thrombolysis in inferior STEMI); case literature (thrombolysed type-A dissection presenting as inferior MI, fatal)",
   "discriminator": "- **MI pain**: builds/crescendos, central crushing, often exertional\n- **Dissection pain**: maximal at **onset** ('worst instantly'), tearing, migrates to back, +/- pulse/BP asymmetry, AR murmur, neuro/limb signs, widened mediastinum\n- **Inferior STEMI + ANY dissection feature** (esp. back pain, inter-arm difference, AR murmur) = image the aorta first\n- The rule: **think aorta before you lyse**",
   "redFlags": "- Inferior STEMI + **back pain / inter-arm BP difference / AR murmur / pulse deficit / syncope / widened mediastinum** = STOP\n- Do **NOT thrombolyse** — image the aorta and call **cardiothoracics**",
   "mcqTrap": "- Tempting wrong answer: '**Inferior STEMI at a non-PCI hospital → immediate thrombolysis**'\n- Wrong if dissection features present — **lysis is potentially fatal**\n- Correct: assess for dissection (back pain, inter-arm BP, AR murmur, wide mediastinum); if suspected, **CT aortogram/TOE before any reperfusion or anticoagulation**",
   "mnemonic": "'Before you lyse, check both sides' — both arms' BP + back pain + AR murmur; RCA-territory (inferior) STEMI is the dissection chameleon.",
   "viva": "- Examiner probes the safety check before thrombolysis: '**What would make you NOT lyse this inferior STEMI?**'\n- Wants: tearing/back/migratory pain, **inter-arm BP differential**, AR murmur, pulse deficit, widened mediastinum → image aorta first\n- ISBAR escalation; **documents the dissection screen**",
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Tearing pain -> back</span><span class=\"gv-pill\">Max at onset</span><span class=\"gv-pill\">Inter-arm SBP diff >20</span><span class=\"gv-pill\">Pulse deficit</span><span class=\"gv-pill\">New AR murmur</span><span class=\"gv-pill\">Syncope / neuro deficit</span><span class=\"gv-pill\">Widened mediastinum</span></div>",
   "cutoffs": [
    "Inter-arm SBP difference **>20 mmHg** = dissection red flag",
    "Inferior STEMI = leads **II, III, aVF** (RCA territory) — the dissection mimic"
   ],
   "tags": [
    "aortic dissection",
    "missed MI",
    "inferior STEMI",
    "thrombolysis contraindication",
    "RCA ostium",
    "inter-arm BP",
    "MEDI8403",
    "MEDI8401"
   ],
   "verified": true,
   "title": "The missed-MI trap",
   "subtitle": "aortic dissection masquerading as inferior STEMI; thrombolysis/anticoagulation is LETHAL",
   "id": "surg-vascular-5",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_inferior_stemi.png",
     "caption": "Inferior STEMI - ST elevation in II, III, aVF mimicking RCA territory infarction",
     "alt": "Acute ST elevation in leads II, III and aVF (inferior STEMI pattern) — can be caused by right coronary ostium involvement in type A dissection",
     "credit": "Glenlarson, Wikimedia Commons, public domain (top diagnosis banner cropped for exam use) · Public domain"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Dissection2018WithPericardial.jpg/960px-Dissection2018WithPericardial.jpg",
     "caption": "Stanford Type A dissection - CT showing ascending aortic flap and pericardial effusion/tamponade",
     "alt": "Type A aortic dissection with pericardial haemorrhage on CT — the dissection masquerading as inferior STEMI; thrombolysis would be lethal",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Acute vs chronic limb ischaemia — don't treat one like the other",
   "subarea": "Acute limb ischaemia & PVD",
   "trap": "- The biggest organisational gotcha: **timeframe dictates the entire pathway**\n- **ACUTE** (hours, the 6 Ps, no time for collaterals → severe) = surgical **EMERGENCY**\n  - heparin now + revascularisation/embolectomy same day\n- **CHRONIC** (weeks-months, collaterals developed) = claudication/CLTI pathway\n  - best medical therapy ± planned revascularisation\n- The dangerous overlap is **ACUTE-ON-CHRONIC**\n  - a known claudicant whose leg suddenly becomes cold/painful\n  - usually **in-situ thrombosis** on diseased vessels\n  - still an emergency but managed with **imaging ± bypass** rather than simple embolectomy",
   "whatFirst": "- Establish the **TIMECOURSE first** (sudden vs gradual)\n- Check the **contralateral leg**\n- This single decision routes the patient to **emergency theatre** vs outpatient PVD management",
   "discriminator": "- Sudden + 6 Ps + **clean other leg** → acute (embolic) emergency\n- Gradual + claudication history → **chronic**\n- Sudden deterioration on a chronic background → **acute-on-chronic thrombosis**\n  - image first, don't just embolectomise",
   "redFlags": "- Sudden **cold, painful, paralysed leg** = ALI emergency regardless of background\n- **Mottling/paralysis** = imminent limb loss",
   "mcqTrap": "- Tempting wrong answer: managing a sudden cold pulseless leg with **'aspirin, statin and supervised exercise'** (chronic pathway)\n  - Wrong — acute presentation = heparin + emergency vascular referral\n- Conversely, **rushing a stable claudicant to theatre** is the opposite error",
   "mnemonic": "Hours = Heparin + theatre. Weeks = Walk (exercise) + meds.",
   "viva": "- Examiner: **'Acute or chronic — and how does that change your next 30 minutes?'**\n- Answer with timecourse + contralateral pulses + the divergent pathways",
   "tags": [
    "acute vs chronic",
    "acute-on-chronic",
    "limb ischaemia",
    "triage"
   ],
   "source": "ESVS 2020 Acute Limb Ischaemia CPG; eTG (current) — Peripheral arterial disease; ANZSVS-aligned teaching",
   "verified": true,
   "title": "Acute vs chronic limb ischaemia",
   "subtitle": "don't treat one like the other",
   "id": "surg-vascular-6",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/GangreneFoot.JPG/960px-GangreneFoot.JPG",
     "caption": "Chronic limb ischaemia - tissue loss and gangrene of toes",
     "alt": "Chronic limb-threatening ischaemia with dry gangrene and tissue loss of toes, chronic skin changes",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Chronic limb-threatening ischaemia (CLTI) — the rest-pain/tissue-loss tipping point",
   "subarea": "Acute limb ischaemia & PVD",
   "trap": "- **CLTI** (formerly 'critical limb ischaemia') is NOT just bad claudication — it is the **limb-threat endpoint** of chronic PVD\n- Demands **URGENT vascular referral** for revascularisation, not just medical therapy\n- Defined by **ischaemic REST PAIN** (>2 weeks) and/or **TISSUE LOSS** (ulcer >2 weeks or gangrene), PLUS objective severe ischaemia\n  - Rest pain classically at night, relieved by **HANGING the foot over the bed/dependency** — gravity aids perfusion\n- Contrast with **ACUTE limb ischaemia**\n  - CLTI is chronic/weeks with collaterals → staged with WIfI/revascularisation planning\n  - ALI is sudden/hours → same-day surgical emergency",
   "whatFirst": "- Recognise **rest pain/tissue loss** → objective tests (ankle pressure, toe pressure, ABI/TBI)\n- **Urgent vascular referral** for imaging (duplex/CTA) and revascularisation\n- Continue best medical therapy and treat any infection",
   "cutoffs": [
    "Ankle pressure **<50 mmHg**",
    "Toe pressure **<30 mmHg**",
    "TcPO2 **<30 mmHg**",
    "ABI **<0.40** (severe)",
    "Rest pain duration: **>2 weeks**; ulcer/gangrene defines tissue loss"
   ],
   "discriminator": "- **REST pain relieved by DEPENDENCY** (dangling foot) = ischaemic\n- Pain **relieved by ELEVATION** / worse on dependency = venous or neuropathic, NOT critical ischaemia\n- **Toe pressures** unmask disease when ABI is falsely high (diabetes/CKD)",
   "redFlags": "- Rest pain, non-healing ulcer, or gangrene = **limb at risk** → same-week vascular referral\n- Sudden worsening to cold/pulseless = **acute-on-chronic ischaemia** (emergency)",
   "mcqTrap": "- Tempting wrong answer: **'continue medical management and review in clinic'** for a patient with night rest pain and a non-healing toe ulcer\n  - Wrong — that's CLTI; needs urgent referral for revascularisation assessment\n- Another trap: using a **normal ABI to exclude CLTI in a diabetic**\n  - Use toe pressures instead",
   "mnemonic": "CLTI = Rest pain + Tissue loss; pain eases when the foot HANGS DOWN ('dangle to dull the pain').",
   "viva": "- Examiner: **'Claudication or critical ischaemia?'**\n- Distinguish by rest pain/tissue loss + objective pressures\n- Then escalate (referral + revascularisation)\n- Consent **angiography risks**: contrast nephropathy, access-site complications",
   "tags": [
    "CLTI",
    "critical limb ischaemia",
    "rest pain",
    "tissue loss",
    "toe pressure",
    "revascularisation"
   ],
   "source": "Global Vascular Guidelines on CLTI (2019, JVS/EJVES); ANZSVS-aligned Australian practice",
   "verified": true,
   "visualHtml": "<table class='gv-table'><tr><th>Parameter</th><th>CLTI threshold</th></tr><tr><td>Ankle pressure</td><td>&lt;50 mmHg</td></tr><tr><td>Toe pressure</td><td>&lt;30 mmHg</td></tr><tr><td>TcPO2</td><td>&lt;30 mmHg</td></tr><tr><td>Symptoms</td><td>Rest pain &gt;2 wks OR ulcer/gangrene</td></tr></table>",
   "title": "Chronic limb-threatening ischaemia (CLTI)",
   "subtitle": "the rest-pain/tissue-loss tipping point",
   "id": "surg-vascular-7",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Infected_diabetic_foot_1.jpg/960px-Infected_diabetic_foot_1.jpg",
     "caption": "CLTI - rest pain with dependent rubor and tissue loss",
     "alt": "Chronic limb-threatening ischaemia showing dependent rubor, tissue necrosis and non-healing ulcer at the forefoot",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Embolic vs thrombotic ALI — the discriminator that picks embolectomy vs angiogram/bypass",
   "subarea": "Acute limb ischaemia & PVD",
   "trap": "- **EMBOLIC** (classically AF, or recent MI/mural thrombus)\n  - SUDDEN onset, NO prior claudication, **NORMAL contralateral pulses**, no chronic PVD\n  - Treat with urgent **embolectomy** (Fogarty catheter)\n- **THROMBOTIC** (on pre-existing atherosclerotic plaque)\n  - More insidious/less severe (collaterals exist)\n  - HISTORY of claudication, **ABSENT contralateral pulses** + bilateral PVD signs\n  - Usually needs **angiography ± bypass/endovascular**, not simple embolectomy\n- The **contralateral limb exam** is the cheapest discriminator",
   "whatFirst": "- Examine the **OTHER leg's pulses**\n- Ask about **pre-existing claudication**\n- Check **rhythm** (ECG for AF)\n- These sort embolic from thrombotic at the bedside",
   "discriminator": "- **Normal pulses in the OTHER leg** + AF + sudden onset → embolus → embolectomy\n- **Absent pulses both legs** + claudication history → in-situ thrombosis → angiogram/bypass",
   "redFlags": "- **New AF with an acutely cold leg** = arterial embolus until proven otherwise\n- Cardiac source workup (**echo**) after the limb is saved",
   "mcqTrap": "- Tempting wrong answer: **'Fogarty embolectomy'** for the patient with claudication history + absent contralateral pulses\n  - Wrong — that's thrombotic disease on diseased vessels; embolectomy alone fails\n  - They need **imaging ± bypass/endovascular**\n- Embolectomy is the answer for the **AF patient with a clean contralateral leg**",
   "mnemonic": "Embolus = 'sudden, AF, clean other leg.' Thrombosis = 'gradual, claudicant, both legs bad.'",
   "viva": "- Examiner: **'What's the source?'**\n- For embolic: name **AF** (commonest), then MI/mural thrombus, prosthetic valve, aortic aneurysm/atheroembolism\n- For thrombotic: **atherosclerotic plaque rupture** / graft occlusion",
   "tags": [
    "embolic",
    "thrombotic",
    "AF",
    "embolectomy",
    "Fogarty"
   ],
   "source": "ESVS 2020 Acute Limb Ischaemia CPG; ANZSVS-aligned Australian teaching",
   "verified": true,
   "visualHtml": "<table class='gv-table'><tr><th></th><th>Embolic</th><th>Thrombotic (in-situ)</th></tr><tr><td>Onset</td><td>Sudden (seconds-mins)</td><td>More gradual (hrs-days)</td></tr><tr><td>Prior claudication</td><td>No</td><td>Yes</td></tr><tr><td>Contralateral pulses</td><td>Normal</td><td>Absent (bilateral PVD)</td></tr><tr><td>Source</td><td>AF / MI / valve</td><td>Atherosclerotic plaque</td></tr><tr><td>Severity</td><td>Severe (no collaterals)</td><td>Often less (collaterals)</td></tr><tr><td>Treatment</td><td>Embolectomy (Fogarty)</td><td>Angiogram ± bypass/endo</td></tr></table>",
   "title": "Embolic vs thrombotic ALI",
   "subtitle": "the discriminator that picks embolectomy vs angiogram/bypass",
   "id": "surg-vascular-8"
  },
  {
   "topic": "Intermittent claudication — Australian medical management & ABI cut-offs",
   "subarea": "Acute limb ischaemia & PVD",
   "trap": "- Claudication is a **CARDIOVASCULAR risk marker first**, a leg problem second\n  - The leg rarely needs surgery but the patient is high-risk for MI/stroke\n- Australian (eTG-aligned) best medical therapy for ALL PAD:\n  - **SMOKING CESSATION** (the single most important)\n  - **SUPERVISED EXERCISE** (first-line for symptoms — walk through the pain)\n  - **ANTIPLATELET** (single agent — eTG: clopidogrel 75 mg OR aspirin 100–150 mg; DAPT NOT recommended in stable PAD)\n  - **STATIN** regardless of baseline LDL\n  - Plus BP and glycaemic control\n- **Cilostazol** is only an add-on for persistent symptoms\n  - **CONTRAINDICATED IN HEART FAILURE** (a PDE-3 inhibitor — Australian-specific high-yield catch)\n- Revascularisation reserved for **lifestyle-limiting symptoms failing medical therapy**, or limb-threatening disease",
   "whatFirst": "- Confirm with **resting ABI**\n- Start best medical therapy: **stop smoking + supervised exercise + single antiplatelet + statin**\n- NOT a referral for angioplasty as the first move in stable claudication",
   "cutoffs": [
    "ABI normal **~0.90–1.40**",
    "ABI **<0.90** = PAD; 0.41–0.90 mild-moderate; ≤0.40 severe",
    "ABI **>1.40** = non-compressible/calcified vessels (diabetes, CKD) — falsely high; use toe pressures/toe-brachial index instead",
    "Antiplatelet (single agent): **clopidogrel 75 mg** daily OR aspirin 100–150 mg daily",
    "**Cilostazol 100 mg BD** add-on only — CONTRAINDICATED in heart failure"
   ],
   "discriminator": "- Falsely **NORMAL or HIGH ABI (>1.40)** in a diabetic with classic symptoms = calcified incompressible arteries\n  - Do NOT exclude PAD\n  - Measure **toe-brachial index** instead",
   "redFlags": "- Rest pain, ulceration, or gangrene = **no longer 'claudication'**\n- This is **chronic limb-threatening ischaemia** → refer urgently",
   "mcqTrap": "- Tempting wrong answer: **'refer for angioplasty/bypass'** for stable intermittent claudication\n  - Wrong — first-line is risk-factor modification + supervised exercise + single antiplatelet + statin\n  - Intervention is for failure of medical therapy or limb threat\n- Trap: **'prescribe cilostazol'** in a patient with heart failure — contraindicated\n- Trap: **'aspirin + clopidogrel' (DAPT)** for stable PAD — not recommended",
   "mnemonic": "Claudication BMT = 'SEAS': Stop Smoking, Exercise (supervised), Antiplatelet (single), Statin.",
   "viva": "- Examiner: **'Why does this leg matter for the heart?'**\n- PAD = systemic atherosclerosis\n- Quote the **single-antiplatelet + statin + smoking cessation** triad\n- Quote the **ABI cut-offs**",
   "tags": [
    "claudication",
    "PVD",
    "ABI",
    "antiplatelet",
    "statin",
    "cilostazol",
    "exercise"
   ],
   "source": "eTG (current) — Peripheral arterial disease; Australian Prescriber (cilostazol — contraindicated in heart failure); ABI thresholds per ESC/ANZSVS-aligned values",
   "verified": true,
   "visualHtml": "<table class='gv-table'><tr><th>ABI</th><th>Interpretation</th></tr><tr><td>0.90–1.40</td><td>Normal</td></tr><tr><td>0.41–0.90</td><td>Mild–moderate PAD (claudication)</td></tr><tr><td>≤0.40</td><td>Severe PAD / limb-threatening</td></tr><tr><td>&gt;1.40</td><td>Non-compressible (Ca++ vessels) — use toe pressures</td></tr></table>",
   "title": "Intermittent claudication",
   "subtitle": "Australian medical management & ABI cut-offs",
   "id": "surg-vascular-9",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Pad_abi.jpg",
     "caption": "ABI measurement - ankle-brachial index Doppler technique",
     "alt": "Doppler probe at the ankle for ankle-brachial index (ABI) measurement — key non-invasive test for peripheral arterial disease severity",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Reperfusion syndrome, hyperkalaemia & compartment syndrome — the post-revasc killers",
   "subarea": "Acute limb ischaemia & PVD",
   "trap": "- The danger is **AFTER you restore flow**, not before\n- Washout of ischaemic muscle releases:\n  - **POTASSIUM** → peaked T waves, VF/cardiac arrest\n  - **MYOGLOBIN** → AKI / pigmented casts\n  - **HYDROGEN ions** → metabolic acidosis\n  - **LACTATE**\n- **Hyperkalaemia** is the immediate life-threat\n  - Treat with **IV calcium gluconate** (cardioprotection) + insulin/dextrose + monitor ECG\n- Reperfusion oedema in a tight fascial compartment → **COMPARTMENT SYNDROME**\n  - Cardinal sign: **PAIN OUT OF PROPORTION** + pain on passive stretch\n  - Appears LONG BEFORE pulses are lost — pulselessness is a **LATE, unreliable sign**\n- Management = **urgent fasciotomy** (often prophylactic at the time of revascularisation in prolonged ischaemia)",
   "whatFirst": "- After revascularisation: **ECG + venous K+** immediately\n- If hyperkalaemic with ECG changes → **IV calcium gluconate first** (membrane stabilisation), then insulin-dextrose\n- For the calf: assess **pain on passive stretch**\n  - If compartment syndrome suspected → urgent fasciotomy",
   "cutoffs": [
    "Hyperkalaemia ECG changes: **peaked T waves** → P-wave loss/wide QRS → sine wave/VF",
    "Compartment syndrome: clinical Dx; compartment pressure **>30 mmHg** (or within ~30 mmHg of diastolic) supports it — don't wait for pressures if clinically obvious",
    "**Myoglobinuria** → urine dip 'blood' positive but NO red cells on micro"
   ],
   "discriminator": "- Compartment syndrome PAIN is **disproportionate and worsens on passive stretch**\n- The '6 Ps' (esp. pulselessness/paralysis) are **LATE**\n- Don't reassure yourself because the **foot pulse is present**",
   "redFlags": "- **Peaked T waves** on ECG post-revasc → treat hyperkalaemia immediately\n- **Tense calf + pain on passive dorsiflexion** → fasciotomy\n- **Dark urine + rising K+/creatinine** → rhabdomyolysis: IV fluids, monitor renal function",
   "mcqTrap": "- Tempting wrong answer for compartment syndrome: **'wait for loss of pulses / order Doppler to confirm'**\n  - Wrong — diagnosis is clinical (pain on passive stretch); pulselessness is a LATE sign\n  - Answer is **urgent fasciotomy**\n- For hyperkalaemia with ECG changes, the trap is **'insulin-dextrose first'**\n  - Calcium gluconate first",
   "mnemonic": "Reperfusion releases 'K-MAL': Potassium, Myoglobin, Acid, Lactate. Compartment = '5 P's are late, Pain-on-stretch is early.'",
   "viva": "- Examiner: **'The leg is reperfused, now what kills the patient?'** — hyperkalaemic arrest\n- **'What kills the limb?'** — missed compartment syndrome\n- State you'd consider **on-table fasciotomy** for prolonged (>4–6 h) ischaemia",
   "tags": [
    "reperfusion syndrome",
    "hyperkalaemia",
    "compartment syndrome",
    "rhabdomyolysis",
    "fasciotomy"
   ],
   "source": "ESVS 2020 Acute Limb Ischaemia CPG; eTG (current) — hyperkalaemia management",
   "verified": true,
   "visualHtml": "<div class='gv-flow'><div class='gv-step'>Revascularise ischaemic limb</div><div class='gv-step'>Washout: K+, myoglobin, H+, lactate</div><div class='gv-step'>Hyperkalaemia → Ca gluconate FIRST, then insulin-dextrose</div><div class='gv-step'>Oedema in compartment → pain on passive stretch → FASCIOTOMY</div><div class='gv-step'>Myoglobin → AKI: IV fluids, monitor renal fn</div></div>",
   "title": "Reperfusion syndrome, hyperkalaemia & compartment syndrome",
   "subtitle": "the post-revasc killers",
   "id": "surg-vascular-10",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_hyperkalaemia.jpg",
     "caption": "Hyperkalaemia ECG - peaked T waves and widened QRS from reperfusion washout",
     "alt": "Peaked tall narrow T waves, widened QRS and shortened PR interval characteristic of hyperkalaemia — occurs after revascularisation of ischaemic muscle",
     "credit": "Dr Michael-Joseph F. Agbayani & Dr Eddieson Gonzales, Wikimedia Commons, CC BY 4.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Compartment_syndrome_with_fasciotomy_procedure.jpg/960px-Compartment_syndrome_with_fasciotomy_procedure.jpg",
     "caption": "Compartment syndrome - tense swollen calf after revascularisation",
     "alt": "Tense, woody, swollen lower leg post-revascularisation indicating compartment syndrome requiring urgent fasciotomy",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Rutherford acute classification — the table that decides theatre vs CT angiogram",
   "subarea": "Acute limb ischaemia & PVD",
   "trap": "- Students memorise the category names but forget the **DISCRIMINATING column is the Doppler signal + motor finding**\n- **IIa**: sensory loss minimal/toes, NO motor loss, arterial Doppler often inaudible but **VENOUS audible**\n  - Marginally threatened, salvageable, time for imaging/thrombolysis planning\n- **IIb**: sensory loss beyond toes + rest pain, **MILD-MODERATE motor loss**, arterial Doppler inaudible\n  - Immediately threatened → urgent revascularisation\n- **III**: profound sensory + motor loss/paralysis, **BOTH arterial AND venous Doppler inaudible**\n  - Irreversible → amputation",
   "whatFirst": "- **Handheld (continuous-wave) Doppler** over pedal arteries\n- Ask the patient to **wiggle toes** / test light touch\n- This single bedside step **sorts IIa from IIb from III**",
   "discriminator": "- **Venous Doppler signal**: AUDIBLE in I/IIa/IIb but **INAUDIBLE in III**\n- Loss of the venous signal is the **bedside marker of irreversibility**",
   "redFlags": "- **Any motor deficit** = IIb or worse = vascular emergency\n- Do not delay revascularisation for non-essential imaging",
   "mcqTrap": "- Tempting wrong answer: **'category IIb → routine CT angiogram to plan'**\n  - Wrong — IIb is immediately threatened and needs **urgent revascularisation** (with IV heparin)\n  - Definitive imaging obtained without delaying reperfusion (often on-table angiography)\n  - A standalone diagnostic CTA that delays theatre is the **IIa-style answer**, not IIb",
   "mnemonic": "Venous Doppler GONE = limb GONE (Rutherford III). Arterial gone but venous present = still time.",
   "viva": "- Examiner: **'You have no formal imaging at 2am — how do you triage?'**\n- Use Rutherford by **bedside Doppler + motor exam** to justify urgent revasc vs imaging",
   "tags": [
    "Rutherford",
    "acute limb ischaemia",
    "Doppler",
    "classification"
   ],
   "source": "Rutherford classification (SVS 1997); ESVS 2020 Acute Limb Ischaemia CPG",
   "verified": true,
   "visualHtml": "<table class='gv-table'><tr><th>Category</th><th>Sensory</th><th>Motor</th><th>Arterial Doppler</th><th>Venous Doppler</th><th>Action</th></tr><tr><td>I Viable</td><td>None</td><td>None</td><td>Audible</td><td>Audible</td><td>No immediate threat; image/optimise</td></tr><tr><td>IIa Marginal</td><td>Minimal (toes)</td><td>None</td><td>Inaudible</td><td>Audible</td><td>Salvageable; urgent imaging/thrombolysis planning</td></tr><tr><td>IIb Immediate</td><td>&gt; toes + rest pain</td><td>Mild/mod</td><td>Inaudible</td><td>Audible</td><td>EMERGENCY revasc NOW</td></tr><tr><td>III Irreversible</td><td>Profound/anaesthetic</td><td>Paralysis</td><td>Inaudible</td><td>Inaudible</td><td>Amputation, not revasc</td></tr></table>",
   "title": "Rutherford acute classification",
   "subtitle": "the table that decides theatre vs CT angiogram",
   "id": "surg-vascular-11"
  },
  {
   "topic": "The 6 Ps of acute limb ischaemia — and the 2 that change your management",
   "subarea": "Acute limb ischaemia & PVD",
   "trap": "- All 6 Ps are NOT equal\n- Pain, Pallor, Pulselessness, Perishing cold are early/sensitive but **don't time-stamp viability**\n- The two that determine theatre vs salvage are the **NEUROLOGICAL** ones:\n  - **Paraesthesia** (sensory loss)\n  - **Paralysis** (motor loss)\n- Fixed mottling that does **NOT blanch** + paralysis + a **woody/tender calf** = irreversible (Rutherford III)\n  - Revascularising a dead limb can kill the patient via reperfusion\n  - This is the scenario where **primary amputation**, not revascularisation, is correct",
   "whatFirst": "- Assess **sensory then MOTOR function**\n- Check the **OTHER leg's pulses** (absent contralateral pulses point to thrombosis-on-PVD, not embolus)\n- **Motor deficit** = Rutherford IIb = immediate revascularisation",
   "discriminator": "- Sensory/motor intact + Doppler signals present = **Rutherford I/IIa** (time to image)\n- ANY motor loss or sensory loss beyond toes = **IIb** (emergency revasc)\n- Fixed mottling + rigid muscles + no Doppler = **III** (primary amputation)",
   "redFlags": "- **New motor weakness**, sensory loss beyond the toes, calf tenderness/rigidity, **fixed (non-blanching) mottling**\n- Escalate to vascular on-call NOW",
   "mcqTrap": "- Tempting wrong answer: **'pulselessness is the most important sign for deciding urgency'**\n  - Wrong — pulselessness is present in essentially everyone with ALI\n  - It's the **motor/sensory deficit** (paralysis/paraesthesia) that stratifies salvageability and dictates theatre vs imaging",
   "mnemonic": "6 Ps: Pain, Pallor, Pulseless, Paraesthesia, Perishing cold, Paralysis. The last 2 P's (Paraesthesia, Paralysis) = 'Point of no return' clock — they decide the limb.",
   "viva": "- Examiner probes: **'How do you know this limb is salvageable?'**\n- Answer with **sensory + motor exam + handheld (continuous-wave) Doppler**\n- Then state your **Rutherford category** and the action it triggers",
   "tags": [
    "acute limb ischaemia",
    "6 Ps",
    "Rutherford",
    "neurological deficit"
   ],
   "source": "ESVS 2020 Acute Limb Ischaemia CPG; ANZSVS-aligned Australian vascular teaching",
   "verified": true,
   "visualHtml": "<div class='gv-pills'><span class='gv-pill'>Pain</span><span class='gv-pill'>Pallor</span><span class='gv-pill'>Pulseless</span><span class='gv-pill'>Paraesthesia</span><span class='gv-pill'>Perishing cold</span><span class='gv-pill'>Paralysis</span></div>",
   "title": "The 6 Ps of acute limb ischaemia",
   "subtitle": "and the 2 that change your management",
   "id": "surg-vascular-12",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Arterial_thrombosis_causing_cyanosis.jpg/960px-Arterial_thrombosis_causing_cyanosis.jpg",
     "caption": "Acute limb ischaemia - classic pale, cold, pulseless limb (6 Ps)",
     "alt": "Acutely ischaemic lower limb demonstrating pallor, pulselessness and early skin changes — the 6 Ps clinical finding",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "The 6-hour window & the FIRST drug — give IV heparin immediately",
   "subarea": "Acute limb ischaemia & PVD",
   "trap": "- The very first management step in ALI, **BEFORE imaging, BEFORE the surgeon arrives, BEFORE fasting**, is **immediate IV bolus of unfractionated heparin** then an infusion\n  - To stop clot propagation while you arrange definitive treatment\n- Students lose the mark by jumping to **'CT angiogram'** or 'thrombolysis' as the first step\n- The **~6-hour figure** is the rough window for skeletal muscle before irreversible necrosis with complete occlusion\n  - It is a guide, NOT a hard switch\n  - Viability is judged **clinically (Rutherford)**, not by the clock alone",
   "whatFirst": "- **IV unfractionated heparin bolus + infusion** immediately on diagnosis\n- Also: **analgesia** (opioid), IV fluids, oxygen\n- **FBC/U&E/coags/group&hold**, ECG (look for AF)\n- **Nil by mouth** and call vascular",
   "cutoffs": [
    "IV unfractionated heparin bolus (**~5000 U**, or weight-based ~70–100 U/kg) then infusion titrated to APTT — give to ALL ALI immediately unless contraindicated",
    "**~6 h**: rough window of muscle viability with COMPLETE occlusion (teaching guide, not a hard cutoff)",
    "**Heparin** used (not LMWH/DOAC) because rapidly reversible (protamine) + titratable pre-theatre"
   ],
   "discriminator": "- Heparin is given **REGARDLESS** of whether the plan is surgery or angiography\n  - It does not preclude either, because it's **short-acting and reversible with protamine**",
   "redFlags": "- Don't **delay heparin for imaging**\n- Don't give **LMWH/DOAC** instead in the acute phase (not readily reversible/titratable)\n- Confirm no absolute contraindication (active major haemorrhage, recent intracranial bleed)",
   "mcqTrap": "- Tempting wrong answer: **'urgent CT angiography'** as the FIRST step\n  - Wrong — first step is **IV heparin** (anticoagulation prevents propagation); imaging follows in viable/IIa limbs\n- Another trap: **'commence apixaban/enoxaparin'** — wrong agent for the acute pre-op phase",
   "mnemonic": "ALI first move = 'Heparinise then organise.'",
   "viva": "- ISBAR to vascular reg: state **Rutherford category**, that heparin is running, **AF status**, renal function (contrast for CTA), and last ate/anticoagulant\n- Then ask **theatre vs imaging**",
   "tags": [
    "heparin",
    "acute limb ischaemia",
    "6 hour window",
    "first step"
   ],
   "source": "ESVS 2020 Acute Limb Ischaemia CPG (UFH at diagnosis); eTG (current) — antithrombotic therapy in acute arterial occlusion",
   "verified": true,
   "title": "The 6-hour window & the FIRST drug",
   "subtitle": "give IV heparin immediately",
   "id": "surg-vascular-13"
  },
  {
   "topic": "Carotid artery disease — endarterectomy (CEA) timing after TIA/minor stroke and the symptomatic vs asymptomatic decision",
   "subarea": "Venous & carotid",
   "whatFirst": "- SYMPTOMATIC (TIA or non-disabling stroke in carotid territory) with ipsilateral **50-99% ICA stenosis**: TIME-CRITICAL\n  1. Start **best medical therapy immediately** (antiplatelet, high-intensity statin, BP control, smoking cessation, diabetes control)\n  2. **Image the carotids urgently** (duplex ± CTA/MRA)\n  3. **Operate EARLY** — CEA ideally **within 2 weeks (14 days)** of the index event\n     - Stroke recurrence risk is highest in the first days\n     - Absolute benefit of CEA falls sharply with **delay beyond 2 weeks**",
   "trap": "- The single most tempting WRONG MCQ option:\n  - **'operate on the asymptomatic high-grade stenosis'** (e.g. '80% asymptomatic stenosis → urgent CEA') — wrong, most managed medically\n  - **'delay the symptomatic patient'** ('let the stroke settle for 6 weeks') — wrong, window is ~2 weeks\n- Asymptomatic stenosis: annual stroke ~1%; CEA gives only **marginal benefit**, reserved for selected >70% with low perioperative risk\n- Symptomatic patient must **NOT be delayed** — waiting discards the benefit\n- Another trap: offering CEA for a **TOTALLY OCCLUDED (100%) ICA** — you cannot/should not endarterectomise a chronic total occlusion",
   "discriminator": "- **SYMPTOMATIC vs ASYMPTOMATIC** is the whole decision\n  - Symptomatic = ipsilateral TIA/stroke/amaurosis fugax within ~6 months → benefit from CEA at **50-99%** (greatest at **70-99%**)\n  - Asymptomatic → medical therapy for most; CEA only selectively at **>70%**\n- Operate the side **ipsilateral to symptoms**, matched to the stenosis on imaging\n- Exclude **TIA mimics** (migraine aura, focal seizure, hypoglycaemia, syncope)\n  - These are NOT carotid-territory events and do not justify CEA\n- Stenosis graded by **NASCET method** on duplex/CTA\n- In the **50-69% symptomatic band**: benefit is modest; greatest in men, those with a recent stroke (vs TIA), and hemispheric (vs retinal) symptoms",
   "redFlags": "- **Crescendo TIAs or stroke-in-evolution** with critical stenosis → emergency vascular/stroke discussion; may warrant expedited intervention if neurologically stable\n- **Disabling/large completed stroke** (poor mRS, large infarct) → CEA usually deferred/not offered (reperfusion-haemorrhage risk, limited benefit)\n- **New neuro deficit post-CEA** → urgent imaging for flap/thrombosis/hyperperfusion → return to theatre\n- Post-op **severe unilateral headache/seizure/BP surge** = cerebral hyperperfusion syndrome → aggressive BP control",
   "source": "Stroke Foundation Australia — Clinical Guidelines for Stroke Management (current, InformMe); RACGP carotid referral guidance; NASCET/ECST evidence (NEJM 1998/1991); CREST (CEA vs stenting)",
   "mnemonic": "'Symptomatic = Slice it Soon (≤2 weeks); Asymptomatic = Aspirin/Atorva (medical)'. CEA preferred over stenting in most >70 yr / standard-risk symptomatic patients (CREST: stenting → more strokes, CEA → more MIs).",
   "viva": "- Examiner probes: **'Is this carotid disease symptomatic or asymptomatic — and how does that change urgency?'**\n- Then: **'how soon should this symptomatic patient have surgery?'** (within 2 weeks)\n- ISBAR escalation for **crescendo TIA**\n- Consent for CEA: **~2-3% periprocedural stroke/death** risk, cranial nerve injury\n  - Hypoglossal → tongue deviation\n  - Recurrent laryngeal → hoarse voice\n  - Marginal mandibular\n  - MI, hyperperfusion syndrome, restenosis",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Scenario</th><th>Stenosis</th><th>Management</th></tr></thead><tbody><tr><td>Symptomatic (TIA / non-disabling stroke / amaurosis, &lt;6 mo)</td><td><span class=\"gv-num\">70–99%</span></td><td>CEA + BMT, ideally <span class=\"gv-num\">≤2 weeks</span></td></tr><tr><td>Symptomatic</td><td><span class=\"gv-num\">50–69%</span></td><td>CEA benefit smaller — individualise (favours men, recent stroke, hemispheric Sx)</td></tr><tr><td>Symptomatic</td><td>&lt;50%</td><td>Best medical therapy (no CEA)</td></tr><tr><td>Asymptomatic</td><td>&gt;70%</td><td>BMT for most; CEA only in selected low-risk patients</td></tr><tr><td>Any</td><td>100% occluded ICA</td><td>No CEA — medical therapy</td></tr></tbody></table><div class=\"gv-flow\"><div class=\"gv-step\">Carotid-territory TIA/stroke</div><div class=\"gv-step\">Start BMT now + urgent duplex/CTA</div><div class=\"gv-step\">Ipsilateral 50–99% stenosis</div><div class=\"gv-step\">CEA within 2 weeks</div></div>",
   "tags": [
    "carotid",
    "endarterectomy",
    "CEA",
    "TIA",
    "stroke",
    "NASCET",
    "stenting",
    "stroke foundation"
   ],
   "cutoffs": [
    "Symptomatic **50-99%** ipsilateral stenosis = CEA indicated",
    "Greatest benefit **70-99%**; 50-69% modest benefit (men, recent stroke, hemispheric Sx)",
    "TIMING: CEA ideally **within 2 weeks (14 days)** of the index event",
    "Symptomatic window for benefit: event within **6 months**",
    "Asymptomatic: BMT for most; CEA selectively at **>70%** low-risk",
    "**<50% symptomatic** or **100% occluded** = no CEA",
    "CEA periprocedural stroke/death risk **~2-3%**",
    "CEA generally preferred over stenting in **>70 yr** / standard-risk symptomatic"
   ],
   "mcqTrap": "- **'Asymptomatic 80% stenosis → urgent CEA'** — wrong; most managed medically\n- **'Delay symptomatic CEA ~6 weeks to let stroke settle'** — wrong; window is ~2 weeks, delay loses benefit\n- Also wrong: **CEA for a 100% occluded ICA**",
   "verified": true,
   "title": "Carotid artery disease",
   "subtitle": "endarterectomy (CEA) timing after TIA/minor stroke and the symptomatic vs asymptomatic decision",
   "id": "surg-vascular-14",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Internal_carotid_artery_stenosis_in_ultrasound_near_occlusion.jpg",
     "caption": "Carotid artery stenosis - Doppler ultrasound showing high-grade stenosis",
     "alt": "Duplex Doppler ultrasound of the internal carotid artery showing high-grade stenosis with elevated peak systolic velocity",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Carotid_Plaque.jpg/960px-Carotid_Plaque.jpg",
     "caption": "Carotid endarterectomy specimen - atherosclerotic plaque",
     "alt": "Carotid endarterectomy specimen showing large ulcerated atherosclerotic plaque — the embolic source for TIA/stroke",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "DVT anticoagulation duration — provoked vs unprovoked (the 3-month rule and when to go indefinite)",
   "subarea": "Venous & carotid",
   "whatFirst": "- **Classify the event FIRST** — duration follows cause, not severity\n  1. **Provoked by a MAJOR TRANSIENT/surgical** risk factor now resolved (surgery, trauma, immobilising plaster, hospital admission) → **3 months then STOP**\n  2. **Unprovoked OR provoked by a non-surgical transient/persistent factor** → 3-6 months, then assess bleeding risk and consider **INDEFINITE low-intensity anticoagulation**\n  3. **Cancer-associated** (active malignancy) → **extended/indefinite** while cancer active\n  4. **Isolated distal/calf DVT**, symptomatic, low bleed risk\n     - Provoked by a major factor now resolved → **6 weeks**; up to 3 months\n     - Alternatively: serial USS surveillance and only treat if it **extends to the proximal veins**",
   "trap": "- The single most tempting WRONG MCQ answer: **'unprovoked proximal DVT → 6 months then stop'**\n  - Stopping a TRUE unprovoked proximal DVT/PE at 3-6 months ignores the **~10%/yr recurrence**\n  - Current Australian practice (THANZ/eTG): after 3-6 months the decision is **treat indefinitely vs stop**, NOT a fixed 6-month course\n- Other classic trap: **indefinite = full-dose forever**\n  - Extended phase commonly uses **LOW-intensity DOAC** (apixaban 2.5 mg BD or rivaroxaban 10 mg daily)\n  - As effective as full dose with less bleeding",
   "discriminator": "- **Provoked-by-MAJOR-surgical/transient** (1-yr recurrence ~1%) vs **unprovoked/non-surgical-transient** (~10% at 1 yr, rising long-term) vs **cancer** (>10%)\n- 'Provoked' for the clean 3-month stop means a **MAJOR reversible (especially surgical) provocateur**\n- **Oestrogen/COCP, long-haul flight, leg plaster, pregnancy** = non-surgical/minor transient factors\n  - These sit in the **3-6-month intermediate basket**, NOT the clean 3-month stop\n- First-line agent in Australia = a **DOAC (apixaban or rivaroxaban)** as monotherapy\n  - **NO initial heparin lead-in** with these two\n  - Unlike **dabigatran/edoxaban**, which need **5-10 days parenteral anticoagulation** first",
   "redFlags": "- **Massive/iliofemoral** or limb-threatening (**phlegmasia cerulea dolens** — tense swollen blue painful leg, threatened venous gangrene) → urgent vascular/IR for **catheter-directed thrombolysis/thrombectomy**, NOT just a DOAC\n- **Unprovoked VTE** → age-appropriate **occult-cancer screening**\n- **Recurrent VTE on therapeutic anticoagulation** → escalate, consider **antiphospholipid syndrome**\n  - Warfarin preferred over DOAC in confirmed **triple-positive APS**",
   "source": "THANZ (Thrombosis & Haemostasis Society of ANZ) VTE guidelines, Tran et al. MJA 2019;210(5):227-235; Therapeutic Guidelines (eTG, current) — Cardiovascular/VTE",
   "mnemonic": "'Provoked & big & gone = 3 and done; Unprovoked = think for-EVER (low dose)'. Recurrence ladder: Provoked-major ~1% < Unprovoked ~10%/yr < Cancer >10%.",
   "viva": "- Examiner probes the discriminator: **'Is this DVT provoked or unprovoked, and what makes you say so?'**\n  - Name the major (surgical) transient factor\n- Then: **'how long will you anticoagulate and what agent?'**\n- Safety-net: **occult cancer in unprovoked VTE**, and bleeding-risk assessment before committing to indefinite therapy",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>VTE category</th><th>Duration</th><th>~1-yr recurrence if stopped</th></tr></thead><tbody><tr><td>Proximal DVT/PE provoked by MAJOR surgical/transient factor, now resolved</td><td><span class=\"gv-num\">3 months</span> then stop</td><td>~1%</td></tr><tr><td>Distal/calf DVT (provoked by major factor now resolved)</td><td><span class=\"gv-num\">6 weeks</span> (or serial USS)</td><td>Low</td></tr><tr><td>Unprovoked proximal DVT/PE, or non-surgical transient factor</td><td><span class=\"gv-num\">3–6 mo</span> → consider INDEFINITE low-dose</td><td>~10%</td></tr><tr><td>Active cancer-associated VTE</td><td>Extended/indefinite while cancer active</td><td>&gt;10%</td></tr></tbody></table><div class=\"gv-pills\"><span class=\"gv-pill\">1st line: apixaban or rivaroxaban (no heparin lead-in)</span><span class=\"gv-pill\">Extended/low-intensity: apixaban 2.5mg BD or rivaroxaban 10mg daily</span></div>",
   "tags": [
    "DVT",
    "VTE",
    "anticoagulation",
    "DOAC",
    "provoked",
    "unprovoked",
    "eTG",
    "THANZ"
   ],
   "cutoffs": [
    "Provoked-major surgical/transient proximal: **3 months** then stop",
    "Unprovoked proximal / non-surgical transient factor: **3-6 months**, then consider indefinite",
    "Cancer-associated: **extended/indefinite** while cancer active",
    "Distal/calf (provoked, major factor resolved): **6 weeks** (or serial USS surveillance)",
    "Extended low-intensity: **apixaban 2.5 mg BD** / rivaroxaban 10 mg daily",
    "Recurrence: provoked-major **~1%/yr** vs unprovoked **~10%** at 1 yr"
   ],
   "mcqTrap": "- **'Unprovoked proximal DVT → 6 months then stop'** — wrong; after 3-6 months the real decision is **indefinite low-dose vs stop**, not a fixed 6-month course\n- Also wrong: **'indefinite = full-dose forever'** (extended phase is typically LOW-dose DOAC)",
   "verified": true,
   "title": "DVT anticoagulation duration",
   "subtitle": "provoked vs unprovoked (the 3-month rule and when to go indefinite)",
   "id": "surg-vascular-15",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Ultrasonography_of_deep_vein_thrombosis_of_the_femoral_vein.jpg",
     "caption": "Deep vein thrombosis - compression ultrasound showing non-compressible femoral vein",
     "alt": "Compression duplex ultrasound of the proximal femoral vein showing failure to compress (non-compressible lumen) diagnostic of DVT",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Varicose veins — when to refer, when it's urgent, and what intervention",
   "subarea": "Venous & carotid",
   "whatFirst": "- Decide the **TIER first**\n  1. **EMERGENCY/same-day**\n     - Significant **haemorrhage from a varicosity** → elevate leg + direct compression + bandage, then refer\n     - **Ascending superficial thrombophlebitis within 7 cm of the saphenofemoral junction** → contact vascular registrar (risk of propagation into deep system → DVT)\n  2. **ROUTINE specialist referral** — symptomatic varicose veins with skin changes/complications = **CEAP C3-C6**\n  3. **Conservative/reassure** — cosmetic-only, telangiectasia/reticular, or uncomplicated symptomatic varicosities (C1-C2) → **compression + lifestyle**",
   "trap": "- Most tempting WRONG MCQ option: **'refer all symptomatic varicose veins for surgery'** or 'ligation & stripping is first-line'\n  - Wrong (a): referral threshold for intervention is **skin/complication involvement (C3-C6)** or failed conservative management, not mere symptoms\n  - Wrong (b): modern first-line intervention is **ENDOVENOUS THERMAL ABLATION** (EVLA/RFA), NOT open ligation & stripping\n- Other trap: treating a **bleeding varix as 'minor'**\n  - A ruptured varicosity in an elderly anticoagulated patient can **exsanguinate**\n  - It is a **same-day vascular problem**",
   "discriminator": "- **CEAP class** is the discriminator the examiner wants\n  - C0 no signs, C1 telangiectasia/reticular, C2 varicose veins, C3 oedema\n  - **C4** skin changes (pigmentation, eczema, lipodermatosclerosis, atrophie blanche)\n  - **C5** healed ulcer, **C6** ACTIVE ulcer\n- Distinguish **primary varicose veins** (superficial venous reflux on duplex — the investigation of choice) from **secondary** (post-DVT deep venous obstruction/reflux)\n- Distinguish **venous ulcer** (gaiter area, shallow, exudative, ABPI normal) from **arterial ulcer** (toes/pressure points, punched-out, painful, low ABPI)\n  - **Never compress before checking ABPI**",
   "redFlags": "- **Bleeding/ruptured varix** (esp. anticoagulated elderly) = immediate compression + elevation + refer\n- **Active or non-healing venous ulcer (C6)**\n- Suspected **DVT masquerading as 'sudden new varicosity'/unilateral swelling** → duplex\n- Superficial thrombophlebitis **extending toward the SFJ (within 7 cm)** → vascular registrar (anticoagulation may be needed)",
   "source": "Victorian Statewide Referral Criteria — Varicose veins (health.vic.gov.au, current); CEAP classification (international, used in ANZ practice); endovenous-thermal-ablation-first per ANZ/NICE-aligned vascular practice",
   "mnemonic": "CEAP C-grade: '0 none, 1 spider, 2 varicose, 3 oedema, 4 skin, 5 healed ulcer, 6 active ulcer'. Three RED referrals = 'Bleed, Burning-up-to-the-SFJ (phlebitis within 7cm), Broken skin (ulcer)'. Treatment order: compression → endovenous ablation → (open surgery last).",
   "viva": "- Examiner probes: **'This varix is bleeding — what do you do RIGHT NOW?'**\n  - Elevate + direct pressure, not a tourniquet; the scoring answer is **immediate compression + elevation**\n- Then the discriminator: **'venous vs arterial ulcer — and would you compress?'**\n  - Check **ABPI first**\n- Consent angle for ablation: recurrence, skin staining/pigmentation, **transient paraesthesia** (saphenous/sural nerve), and rare DVT",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>CEAP</th><th>Finding</th><th>Action</th></tr></thead><tbody><tr><td>C0–C1</td><td>No signs / telangiectasia, reticular veins</td><td>Reassure; cosmetic only</td></tr><tr><td>C2</td><td>Varicose veins</td><td>Compression + lifestyle; refer if symptomatic & conservative fails</td></tr><tr><td>C3</td><td>Oedema</td><td>Refer (duplex)</td></tr><tr><td>C4</td><td>Skin changes (pigment, eczema, lipodermatosclerosis)</td><td>Refer</td></tr><tr><td>C5</td><td>Healed venous ulcer</td><td>Refer</td></tr><tr><td>C6</td><td>ACTIVE venous ulcer</td><td>Refer (treat ulcer + reflux)</td></tr></tbody></table><div class=\"gv-pills\"><span class=\"gv-pill\">URGENT: bleeding varix</span><span class=\"gv-pill\">URGENT: phlebitis within 7cm of SFJ</span><span class=\"gv-pill\">1st-line intervention: endovenous thermal ablation</span></div>",
   "tags": [
    "varicose veins",
    "CEAP",
    "endovenous ablation",
    "venous ulcer",
    "thrombophlebitis",
    "referral",
    "duplex"
   ],
   "cutoffs": [
    "Referral for intervention: symptomatic **CEAP C3-C6** (skin changes/complications)",
    "Urgent: ascending superficial thrombophlebitis **within 7 cm** of saphenofemoral junction",
    "Urgent: **significant haemorrhage** from a varicosity",
    "First-line intervention = **endovenous thermal ablation (EVLA/RFA)**, not open stripping",
    "Investigation of choice = **venous duplex ultrasound**",
    "Check **ABPI** before any compression of an ulcerated leg"
   ],
   "mcqTrap": "- **'Ligation and stripping is the first-line treatment'** — wrong; **endovenous thermal ablation** is first-line in current ANZ practice\n- Also **'refer all symptomatic varicose veins for surgery'** over-treats C1-C2",
   "verified": true,
   "title": "Varicose veins",
   "subtitle": "when to refer, when it's urgent, and what intervention",
   "id": "surg-vascular-16",
   "images": [
    {
     "src": "assets/img/dermatology_venous_leg_ulcer_01.jpg",
     "caption": "Venous leg ulcer - gaiter area ulceration from chronic venous hypertension",
     "alt": "Venous leg ulcer in the gaiter distribution with shallow sloughy base and surrounding lipodermatosclerosis — the skin/complication endpoint requiring urgent referral",
     "credit": "Ashashyou, Wikimedia Commons, CC BY-SA 4.0 (gauze edge cropped)"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Varicose_veins_affecting_the_lower_leg_Wellcome_L0061800.jpg/960px-Varicose_veins_affecting_the_lower_leg_Wellcome_L0061800.jpg",
     "caption": "Varicose veins with venous skin changes - lipodermatosclerosis and haemosiderin deposition",
     "alt": "Tortuous varicose veins with chronic venous insufficiency changes — lipodermatosclerosis, haemosiderin staining and early skin breakdown",
     "credit": "Wikimedia Commons"
    }
   ]
  }
 ]
}
);
