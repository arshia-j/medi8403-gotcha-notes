window.GOTCHA = window.GOTCHA || { modules: [] };
window.GOTCHA.modules.push(
{
 "id": "neurology",
 "name": "Neurology",
 "category": "Medicine",
 "blurb": "Written-exam + VIVA. Stroke/thrombolysis windows, the headache and spinal-cord emergencies, status epilepticus.",
 "cards": [
  {
   "topic": "BP in acute ISCHAEMIC stroke: do NOT lower aggressively (permissive hypertension)",
   "subarea": "Stroke & TIA",
   "whatFirst": "- Acute ischaemic stroke **NOT receiving reperfusion**: **tolerate the BP**\n- Only treat if **>220/120 mmHg**, then lower **cautiously by no more than ~15–20% over 24 h**\n  - Aggressive lowering reduces penumbral perfusion and worsens outcome",
   "trap": "- Most tempting wrong answer: '**give IV antihypertensive to normalise the BP**' — wrong, because high BP maintains collateral flow to the penumbra\n- Exception — **reperfusion patients**: BP must be **<185/110** before/with thrombolysis or thrombectomy, then kept **<180/105 for 24 h**\n- Do **NOT** intensively lower SBP toward 140 in acute ischaemic stroke — no benefit, possible harm (ENCHANTED / ENCHANTED2-MT)",
   "discriminator": "- **Ischaemic stroke**: permissive hypertension — treat only **>220/120**, or lower to **<185/110** to enable lysis\n- **Intracerebral haemorrhage**: the opposite — actively lower SBP toward **~140**\n- Confusing the two is the **classic exam trap**",
   "cutoffs": [
    "No reperfusion: treat only if **>220/120**, lower ≤15–20% over 24 h",
    "Pre/peri-reperfusion: **<185/110** before, **<180/105** for 24 h after",
    "Do **NOT** target SBP <140 (no benefit/possible harm)"
   ],
   "redFlags": "- If BP cannot be brought below **185/110** with cautious IV agents (labetalol/GTN) → patient is **ineligible for thrombolysis** — escalate",
   "source": "Stroke Foundation Australia Living Clinical Guidelines (InformMe/MAGICapp, current), BP recommendations; ENCHANTED / ENCHANTED2-MT",
   "viva": "- Examiner: 'BP is 200/105 in acute ischaemic stroke, no lysis planned — what do you do?'\n- Answer: '**Nothing antihypertensive** — it's below the 220/120 threshold; aggressive lowering harms the penumbra'",
   "mnemonic": "Ischaemic: leave it high (220/120). Lysis: drop below 185/110. Haemorrhage: lower toward 140.",
   "tags": [
    "blood-pressure",
    "permissive-hypertension",
    "thresholds",
    "MCQ-trap"
   ],
   "verified": false,
   "mcqTrap": "- Wrong: '**Start IV labetalol to bring SBP to 140**' in acute ischaemic stroke not for lysis — harmful over-treatment",
   "visualHtml": "<table class=\"gv-table\"><tr><th>Scenario</th><th>BP rule</th></tr><tr><td>Ischaemic, no reperfusion</td><td>Treat only if >220/120; lower <=20%/24h</td></tr><tr><td>Eligible for thrombolysis</td><td>Must be <185/110 before lysis</td></tr><tr><td>During/after lysis or thrombectomy</td><td>Keep <180/105 for 24 h</td></tr><tr><td>Intracerebral haemorrhage</td><td>Lower SBP toward ~140</td></tr></table>",
   "title": "BP in acute ISCHAEMIC stroke",
   "subtitle": "do NOT lower aggressively (permissive hypertension)",
   "id": "neurology-1",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Right_dense_MCA_sign_as_seen_on_CT_brain.jpg/960px-Right_dense_MCA_sign_as_seen_on_CT_brain.jpg",
     "caption": "Ischaemic stroke CT - hyperdense MCA sign (early ischaemia)",
     "alt": "Non-contrast CT brain showing hyperdense right MCA sign indicating acute large vessel occlusion",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Carotid disease: symptomatic >=70% stenosis -> endarterectomy WITHIN 2 WEEKS",
   "subarea": "Stroke & TIA",
   "whatFirst": "- TIA or non-disabling ischaemic stroke in the carotid territory WITH ipsilateral **70–99% internal carotid stenosis**:\n  - Refer urgently for **carotid endarterectomy (CEA)**, ideally **within 2 weeks** of the index event\n  - Benefit is greatest when done early and **falls steeply with delay**",
   "trap": "- Trap: treating **asymptomatic** stenosis as urgently/surgically as symptomatic — asymptomatic disease has much smaller, debated benefit and is usually managed **medically**\n- Trap: operating on a **near-occlusion** (string sign) or **100% occluded** artery — no benefit\n- Trap: '**delay surgery until things settle**' — highest recurrence risk is in the **first 2 weeks**; delay loses the benefit\n- 50–69% symptomatic = **modest, individualised benefit**; **<50% = medical management**",
   "discriminator": "- **Symptomatic** (TIA/stroke in that territory) → **CEA if 70–99%**, within 2 weeks\n- **Asymptomatic** → mostly **medical**\n- **CEA** generally preferred over stenting for most symptomatic patients (lower periprocedural stroke)\n  - Exception: selected younger patients / surgically hostile necks",
   "cutoffs": [
    "Symptomatic **70–99%** stenosis → **CEA**",
    "Timing: **within 2 weeks** of event",
    "**50–69%** symptomatic = individualised benefit",
    "**<50%** or near-occlusion = medical Mx",
    "**Asymptomatic** any % = usually medical"
   ],
   "redFlags": "- **Crescendo TIA + tight carotid stenosis** = emergency referral\n- Always confirm it's the **symptomatic side** — operating on the wrong (asymptomatic) side is harmful",
   "source": "Stroke Foundation Australia Living Clinical Guidelines (InformMe/MAGICapp, current); NASCET/ECST-derived thresholds",
   "viva": "- 'Right-territory TIA with ipsilateral **80% ICA stenosis** — refer for **CEA within two weeks**, alongside antiplatelet, statin and risk-factor control; the benefit is **time-critical**'",
   "mnemonic": "Symptomatic, Seventy, Same side, Surgery in Seven-to-fourteen days - the five S's.",
   "tags": [
    "carotid",
    "endarterectomy",
    "stenosis-threshold",
    "timing",
    "MCQ-trap"
   ],
   "verified": true,
   "mcqTrap": "- Wrong: '**Asymptomatic 80% stenosis — book urgent endarterectomy**' — asymptomatic disease is largely medically managed, not urgently operated",
   "visualHtml": "<table class=\"gv-table\"><tr><th>Stenosis (symptomatic)</th><th>Action</th></tr><tr><td>70-99%</td><td>CEA within 2 weeks + best medical Tx</td></tr><tr><td>50-69%</td><td>Individualised (modest benefit)</td></tr><tr><td>&lt;50% or near-occlusion</td><td>Medical management</td></tr><tr><td>Asymptomatic any %</td><td>Usually medical (surgery debated)</td></tr></table>",
   "title": "Carotid disease",
   "subtitle": "symptomatic >=70% stenosis -> endarterectomy WITHIN 2 WEEKS",
   "id": "neurology-2",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/RICA_Stenosis_174302500.jpg/960px-RICA_Stenosis_174302500.jpg",
     "caption": "Carotid Doppler ultrasound - severe internal carotid stenosis",
     "alt": "Carotid duplex ultrasound demonstrating high-grade ICA stenosis with elevated peak systolic velocity",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Endovascular thrombectomy: selected patients out to 24 h with perfusion imaging",
   "subarea": "Stroke & TIA",
   "whatFirst": "- For anterior-circulation **large vessel occlusion** (ICA / proximal MCA-M1), offer endovascular clot retrieval:\n  - **Within 6 h** on standard imaging\n  - **6–24 h** in SELECTED patients with favourable perfusion imaging (small ischaemic core, large salvageable penumbra)\n- Thrombectomy is **IN ADDITION** to thrombolysis when both indicated — do not withhold lysis while arranging it",
   "trap": "- Catch: **late-window candidates (6–24 h)** are selected by **CT/MR perfusion** (or core-penumbra/clinical mismatch), not just the clock\n- Trap: thinking thrombectomy **replaces** thrombolysis — eligible patients get **both**\n- **Basilar (posterior) occlusion** is increasingly treated but is a specialist decision",
   "discriminator": "- **Thrombolysis**: dissolves clot pharmacologically — **≤4.5 h**, any vessel size\n- **Thrombectomy**: mechanically retrieves clot — **LVO only**, up to 24 h selected\n- LVO on CTA = **thrombectomy pathway**; no LVO = **lysis alone**",
   "cutoffs": [
    "**≤6 h**: standard imaging selection",
    "**6–24 h**: SELECTED with perfusion mismatch (DAWN/DEFUSE-3 derived)",
    "Target = anterior LVO (**ICA/M1**)",
    "Favourable ischaemic core typically **<70 mL**"
   ],
   "redFlags": "- High NIHSS + cortical signs + **gaze deviation** = suspect LVO → urgent **CTA** and stroke/neurointervention call",
   "source": "Stroke Foundation Australia Living Clinical Guidelines (InformMe/MAGICapp, current); selection evidence from DAWN/DEFUSE-3",
   "viva": "- 'Likely large-vessel occlusion — activate the clot-retrieval pathway, get **CT angiography and perfusion**, and discuss urgent transfer to a comprehensive stroke centre even though it's now **9 hours** since onset'",
   "mnemonic": "Big clot, big artery, up to twenty-four - thrombectomy at the door (if perfusion says salvageable).",
   "tags": [
    "thrombectomy",
    "LVO",
    "time-window",
    "perfusion",
    "MCQ-trap"
   ],
   "verified": false,
   "mcqTrap": "- Wrong: '**Thrombectomy window closes at 6 hours**' — FALSE; selected patients with perfusion mismatch treated up to **24 h**",
   "title": "Endovascular thrombectomy",
   "subtitle": "selected patients out to 24 h with perfusion imaging",
   "id": "neurology-3",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Tmax_by_MRI_perfusion_in_cerebral_artery_occlusion.jpg",
     "caption": "CT perfusion - ischaemic core vs penumbra mismatch",
     "alt": "CT perfusion maps showing small infarct core (CBF/CBV deficit) with large penumbra (Tmax prolongation) in late-window stroke",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "First imaging in suspected stroke: non-contrast CT to exclude haemorrhage BEFORE any antithrombotic",
   "subarea": "Stroke & TIA",
   "whatFirst": "- **Non-contrast CT brain (NCCT)** is the FIRST investigation in suspected acute stroke\n  - Job: **exclude haemorrhage** before giving aspirin/thrombolysis\n  - NOT to confirm infarct (often normal early)\n- **CT angiography** (± CT perfusion) follows immediately if reperfusion is on the table",
   "trap": "- Tempting wrong answers: '**MRI brain**' (more sensitive but slower/less available) or '**give aspirin now**'\n- Time-critical first step is **NCCT** — no antithrombotic until ICH is excluded\n- A **normal CT** does NOT exclude ischaemic stroke and does NOT delay thrombolysis\n- Early ischaemic signs may be **subtle or absent**:\n  - Loss of grey-white differentiation, hyperdense MCA sign, insular ribbon loss",
   "discriminator": "- **Hyperdense vessel / loss of grey-white differentiation** = early ischaemic\n- **Hyperdense parenchymal/extra-axial collection** = haemorrhage\n- **Normal scan + focal deficit** = presumed ischaemic — proceed to reperfusion assessment",
   "redFlags": "- Reduced GCS, severe headache/vomiting, or **anticoagulant use** raises haemorrhage suspicion\n  - Still **confirm with CT** — do not assume",
   "source": "Stroke Foundation Australia, Australian & NZ Living Clinical Guidelines for Stroke Management (InformMe/MAGICapp, current), acute medical & surgical management",
   "viva": "- 'Priority is a **non-contrast CT** to exclude haemorrhage before any antithrombotic, with **CT angiography** in the same sitting to assess for large vessel occlusion if the patient is a reperfusion candidate'",
   "mnemonic": "CT First, Clot-buster Second - never reverse the order.",
   "tags": [
    "imaging",
    "what-first",
    "haemorrhage",
    "MCQ-trap"
   ],
   "verified": true,
   "mcqTrap": "- Wrong: '**Order MRI to confirm ischaemia**' — slower, less available, and unnecessary before thrombolysis; NCCT is the gatekeeper",
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Suspected stroke + onset known</div><div class=\"gv-step\">Non-contrast CT brain (exclude ICH)</div><div class=\"gv-step\">CT angiography (+/- CT perfusion) for LVO / late window</div><div class=\"gv-step\">Decide thrombolysis &/or thrombectomy</div></div>",
   "title": "First imaging in suspected stroke",
   "subtitle": "non-contrast CT to exclude haemorrhage BEFORE any antithrombotic",
   "id": "neurology-4",
   "images": [
    {
     "src": "assets/img/neurology_ct_extradural_haematoma_fresh.jpg",
     "caption": "Non-contrast CT brain - intracerebral haemorrhage (hyperdense clot)",
     "alt": "NCCT brain showing hyperdense intraparenchymal haematoma - contraindication to antithrombotics",
     "credit": "Jpogi, Wikimedia Commons, CC BY-SA 3.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/d/da/Head_CT_scan.jpg",
     "caption": "Non-contrast CT brain - normal scan (no haemorrhage) in acute stroke",
     "alt": "Normal NCCT brain (no hyperdensity, no haemorrhage) - must be confirmed before giving antithrombotics",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Intracerebral haemorrhage vs ischaemic: opposite BP rule + reverse anticoagulation FAST",
   "subarea": "Stroke & TIA",
   "whatFirst": "- CT shows ICH → act on **four things simultaneously**:\n  - (1) Actively **lower SBP toward ~140 mmHg** (INTERACT-derived)\n  - (2) **Reverse anticoagulant urgently**:\n    - Warfarin → **vitamin K + prothrombin complex concentrate** (PCC)\n    - Dabigatran → **idarucizumab**\n    - Factor-Xa inhibitor → **PCC ± andexanet**\n  - (3) **Stop all antithrombotics**\n  - (4) Refer to **neurosurgery** for posterior fossa / large lobar clot / hydrocephalus\n- A **care-bundle approach** (BP, reversal, glucose, temperature) is now recommended",
   "trap": "- Trap: applying ischaemic-stroke logic to a bleed — it is the **exact opposite**\n- **Aspirin/lysis/heparin** are HARMFUL in ICH\n- Do **not over-lower**: target SBP **~140**, not <110\n- Do **not forget reversal** — delayed INR reversal kills",
   "discriminator": "- **Ischaemic**: tolerate BP, give antithrombotics, consider reperfusion\n- **Haemorrhagic**: lower BP toward **~140**, reverse anticoagulation, neurosurgery\n- **NCCT** distinguishes them instantly — exactly why CT comes first",
   "cutoffs": [
    "ICH SBP target **~140 mmHg** (avoid large/rapid drops below ~130)",
    "Reverse warfarin: **vitamin K + PCC** (target INR <1.5)",
    "Dabigatran: **idarucizumab**",
    "Xa inhibitor: **PCC ± andexanet alfa**"
   ],
   "redFlags": "- **Posterior fossa/cerebellar haemorrhage**, GCS drop, hydrocephalus, or **>3 cm cerebellar clot** = emergency **neurosurgical referral** for evacuation",
   "source": "Stroke Foundation Australia Living Clinical Guidelines (InformMe/MAGICapp, current), acute ICH BP-lowering & care-bundle recommendations (Dec 2024 update); INTERACT/INTERACT3; eTG Neurology (current)",
   "viva": "- 'Haemorrhagic stroke — lower **systolic BP toward 140**, urgently reverse warfarin with **vitamin K and PCC**, hold antithrombotics, and call neurosurgery'",
   "mnemonic": "Bleed = Lower the pressure, Reverse the thinner, Ring the surgeon.",
   "tags": [
    "haemorrhage",
    "blood-pressure",
    "anticoagulant-reversal",
    "neurosurgery",
    "discriminator"
   ],
   "verified": false,
   "mcqTrap": "- Wrong: '**Give aspirin / tolerate the high BP**' after CT showing haemorrhage — applies ischaemic logic to a bleed; both are harmful",
   "title": "Intracerebral haemorrhage vs ischaemic",
   "subtitle": "opposite BP rule + reverse anticoagulation FAST",
   "id": "neurology-5",
   "images": [
    {
     "src": "assets/img/neurology_ct_extradural_haematoma_fresh.jpg",
     "caption": "CT brain - intracerebral haemorrhage with surrounding oedema",
     "alt": "NCCT showing large hyperdense intraparenchymal haematoma with surrounding hypodense oedema and midline shift",
     "credit": "Jpogi, Wikimedia Commons, CC BY-SA 3.0"
    }
   ]
  },
  {
   "topic": "IV thrombolysis: tenecteplase now preferred in Australia, within 4.5 h, for DISABLING stroke",
   "subarea": "Stroke & TIA",
   "whatFirst": "- Disabling ischaemic stroke within **4.5 h of last-known-well**, no contraindication, ICH excluded:\n  - Give IV **tenecteplase 0.25 mg/kg** (max 25 mg), single bolus — **now preferred** over alteplase\n  - Alteplase alternative: **0.9 mg/kg**, max 90 mg (10% bolus then infusion over 60 min)\n- Do **not wait** for thrombolysis to organise thrombectomy if LVO present — **both** can occur ('bridging')",
   "trap": "- Classic reflex: '**alteplase** is the thrombolytic for stroke' — current Living Guideline now makes **tenecteplase the preferred agent** (simpler single bolus)\n- Catch (1): the clock runs from **time last known well**, not when deficit was discovered\n  - Wake-up stroke: onset = **time they went to sleep** unless advanced imaging (perfusion/DWI-FLAIR mismatch) is used\n- Catch (2): **non-disabling deficits** are NOT thrombolysed — guideline recommends against lysis in nondisabling stroke",
   "discriminator": "- **Tenecteplase**: single weight-based bolus\n- **Alteplase**: bolus + 1-hour infusion\n- **Streptokinase**: NOT used for stroke (contraindicated — bleeding)\n- Stroke dose of tenecteplase (**0.25 mg/kg**) is **lower** than the cardiac STEMI dose",
   "cutoffs": [
    "Window: **≤4.5 h** from last-known-well",
    "**Tenecteplase 0.25 mg/kg**, max 25 mg, single bolus (preferred)",
    "Alteplase **0.9 mg/kg**, max 90 mg (alternative)",
    "BP must be **<185/110** before lysis",
    "Only **disabling** stroke — not nondisabling"
   ],
   "redFlags": "- Beyond **4.5 h** tenecteplase is outside standard approval — escalate to a stroke physician\n  - Consider thrombectomy or perfusion-guided extended-window lysis **only via a stroke service**",
   "source": "Stroke Foundation Australia Living Clinical Guidelines (InformMe/MAGICapp, current); tenecteplase recommendations added in Dec 2024 living update; TGA product information",
   "viva": "- ISBAR the stroke physician: 'Onset **90 minutes ago**, disabling deficit NIHSS 12, CT no haemorrhage, BP 168/92, no contraindications — give **tenecteplase 0.25 mg/kg** and arrange CTA for thrombectomy'",
   "mnemonic": "TNK is the new king: one bolus, 0.25, under 4.5.",
   "tags": [
    "thrombolysis",
    "tenecteplase",
    "dose",
    "time-window",
    "MCQ-trap"
   ],
   "verified": false,
   "mcqTrap": "- '**Alteplase 0.9 mg/kg**' — still a valid alternative, but current Australian practice single-best-answer is **tenecteplase preferred**",
   "visualHtml": "<table class=\"gv-table\"><tr><th>Agent</th><th>Dose</th><th>Admin</th><th>Status</th></tr><tr><td>Tenecteplase</td><td>0.25 mg/kg (max 25 mg)</td><td>Single bolus</td><td>Preferred</td></tr><tr><td>Alteplase</td><td>0.9 mg/kg (max 90 mg)</td><td>10% bolus + 60-min infusion</td><td>Alternative</td></tr></table>",
   "title": "IV thrombolysis",
   "subtitle": "tenecteplase now preferred in Australia, within 4.5 h, for DISABLING stroke",
   "id": "neurology-6",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/b/bd/INFARCT.jpg",
     "caption": "IV thrombolysis - CT before and after: resolving ischaemia",
     "alt": "CT brain pre- and post-thrombolysis demonstrating reperfusion and resolving ischaemic change",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Secondary prevention after TIA / minor stroke: short-course DUAL antiplatelet (21 days)",
   "subarea": "Stroke & TIA",
   "whatFirst": "- After **high-risk TIA (ABCD2 >=4)** or minor ischaemic stroke (ICH excluded): start aspirin + clopidogrel within **24 h**\n  - Aspirin: **300 mg load** then 100 mg daily\n  - Clopidogrel: **300 mg load** then 75 mg daily\n- Continue **DUAL therapy for ~21 DAYS**, then drop to a SINGLE agent long-term\n- For most non-cardioembolic strokes the long-term agent is **clopidogrel** (or aspirin)\n- Add a **high-intensity statin**",
   "trap": "- Two classic traps:\n  - (1) continuing **dual antiplatelet long-term** — it must STOP at ~21 days (CHANCE/POINT) because prolonged DAPT raises bleeding without added benefit\n  - (2) giving **DAPT to a patient who actually has AF** — that patient needs ANTICOAGULATION (a DOAC), not antiplatelets\n- A **major (non-minor) stroke** or one needing lysis does NOT get immediate dual therapy the same way",
   "discriminator": "- Non-cardioembolic TIA/minor stroke -> **short DAPT then single antiplatelet**\n- AF-related stroke -> **anticoagulate** (DOAC preferred; timing by infarct size — the '1-3-6-12 day' approach by severity)\n- Do **NOT** routinely combine antiplatelet + anticoagulant",
   "cutoffs": [
    "**DAPT duration ~21 days** then single agent",
    "Indication = **high-risk TIA (ABCD2 >=4)** or minor stroke",
    "Aspirin **300 mg** load -> 100 mg; clopidogrel **300 mg** load -> 75 mg",
    "Statin: **high-intensity**; LDL target **<1.8 mmol/L**"
   ],
   "redFlags": "- New **AF on monitoring** = switch to anticoagulation\n- **Recurrent events** on antiplatelet = re-image carotids and reconsider source",
   "source": "Stroke Foundation Australia Living Clinical Guidelines (InformMe/MAGICapp, current); CHANCE/POINT trials; Australian Prescriber secondary-stroke-prevention review",
   "viva": "- Say: 'High-risk TIA — I'd **load aspirin and clopidogrel today**, continue both for ~21 days, then single-agent antiplatelet, add a high-intensity statin, and screen for **AF and carotid disease**.'",
   "mnemonic": "Two for three weeks, then one for life - ~21 days of dual, single thereafter.",
   "tags": [
    "secondary-prevention",
    "DAPT",
    "clopidogrel",
    "duration",
    "MCQ-trap"
   ],
   "verified": false,
   "mcqTrap": "- '**Continue aspirin + clopidogrel indefinitely**' — wrong\n  - Long-term dual therapy raises bleeding risk without benefit — stop at **~21 days**",
   "title": "Secondary prevention after TIA / minor stroke",
   "subtitle": "short-course DUAL antiplatelet (21 days)",
   "id": "neurology-7"
  },
  {
   "topic": "Stroke unit care, dysphagia screen and VTE prophylaxis: the 'mundane' steps that score marks",
   "subarea": "Stroke & TIA",
   "whatFirst": "- Every stroke patient should be admitted to an organised **STROKE UNIT** — the single intervention with the broadest mortality/disability benefit\n- Before any oral intake (food, fluids, or oral meds) perform a validated **SWALLOW SCREEN** — aspiration risk is high and early\n- Use **INTERMITTENT PNEUMATIC COMPRESSION (IPC)** for VTE prophylaxis, NOT graduated compression stockings",
   "trap": "- Two favourite MCQ traps:\n  - (1) prescribing **graduated compression stockings** for DVT prevention — CLOTS trials showed they DON'T WORK in stroke and cause skin breaks; correct answer is **intermittent pneumatic compression**\n  - (2) giving **usual oral meds / a drink before a swallow assessment** — causes aspiration pneumonia\n- **Pharmacological heparin** VTE prophylaxis is withheld until haemorrhage excluded and weighed against bleeding risk",
   "discriminator": "- Mechanical VTE prophylaxis: **IPC** (works in stroke) vs TED stockings (don't)\n- Feeding: **NBM** until swallow screen passed\n  - If failed: **NG feeding** while speech pathology reviews",
   "cutoffs": [
    "**Stroke unit** admission for all",
    "**Swallow screen** BEFORE any oral intake",
    "VTE: **intermittent pneumatic compression** (not stockings)",
    "**Mobilise early** but avoid very-early high-intensity mobilisation (AVERT)"
   ],
   "redFlags": "- **Failed swallow + ongoing oral intake** = aspiration pneumonia risk\n- **Drowsiness/new deficit** post-stroke = re-image (haemorrhagic transformation, oedema)",
   "source": "Stroke Foundation Australia Living Clinical Guidelines (InformMe/MAGICapp, current); CLOTS trials; AVERT trial",
   "viva": "- Examiner: 'How do you prevent DVT in an immobile stroke patient?'\n- Answer: '**Intermittent pneumatic compression** — not graduated stockings, which the CLOTS trials showed are ineffective and harmful in stroke.'",
   "mnemonic": "Stroke Unit, Swallow screen, Squeeze with IPC (not stockings).",
   "tags": [
    "stroke-unit",
    "dysphagia",
    "VTE-prophylaxis",
    "MCQ-trap"
   ],
   "verified": true,
   "mcqTrap": "- '**Graduated compression stockings** for DVT prophylaxis' — disproven in stroke (CLOTS)\n  - Use **intermittent pneumatic compression**",
   "title": "Stroke unit care, dysphagia screen and VTE prophylaxis",
   "subtitle": "the 'mundane' steps that score marks",
   "id": "neurology-8"
  },
  {
   "topic": "Thrombolysis contraindications: the bleeding-risk checklist that catches you",
   "subarea": "Stroke & TIA",
   "whatFirst": "- Before lysis, screen contraindications:\n  - **ICH on CT**\n  - **BP that won't drop below 185/110** despite treatment\n  - Glucose **<2.8 or persistently >22 mmol/L**\n  - Platelets **<100**\n  - INR **>1.7** / therapeutic DOAC within **48 h**\n  - Recent major surgery/GI bleed\n  - Prior **ICH**\n  - Ischaemic stroke or significant **head trauma within 3 months**",
   "trap": "- Tempting wrong moves:\n  - (1) thrombolysing a stroke-mimicking **hypoglycaemia** instead of giving glucose — always check BSL first\n  - (2) excluding a patient solely for **age >80** — NOT a contraindication in current guidelines\n  - (3) lysing a patient on a **DOAC taken within the last 48 h**\n- **Minor non-disabling and rapidly improving** deficits are relative reasons to withhold\n  - A **fluctuating/disabling deficit** should still be treated",
   "discriminator": "- Mimic vs stroke: hypoglycaemia, seizure with Todd's paresis, migraine aura, functional/conversion — all can fake a deficit\n- **BSL** and onset history (sudden vs spreading/marching) discriminate\n- **Lyse the stroke, not the mimic**",
   "cutoffs": [
    "BP **>185/110** (uncontrolled) = no lysis",
    "Glucose **<2.8 or >22 mmol/L**",
    "Platelets **<100 x10^9/L**",
    "INR **>1.7**; therapeutic DOAC within **48 h**",
    "Stroke/head trauma/ICH within **3 months**"
   ],
   "redFlags": "- **Therapeutic anticoagulation** or known ICH = hard stop\n- If on **dabigatran** and otherwise eligible, idarucizumab reversal then lysis can be considered via a stroke service",
   "source": "Stroke Foundation Australia Living Clinical Guidelines (InformMe/MAGICapp, current); eTG Neurology (current)",
   "viva": "- Examiner probe: 'What single bedside test must you never skip before stroke-code thrombolysis?'\n- Answer: **blood glucose** — hypoglycaemia is the great mimic",
   "mnemonic": "BP, Bleeding, BSL, Brain bleed, Blood thinners - the 5 B's that block the bolus.",
   "tags": [
    "thrombolysis",
    "contraindications",
    "mimics",
    "glucose"
   ],
   "verified": false,
   "mcqTrap": "- '**Age over 80 contraindicates thrombolysis**' — FALSE\n  - Advanced age alone is not a contraindication in Australian guidelines",
   "title": "Thrombolysis contraindications",
   "subtitle": "the bleeding-risk checklist that catches you",
   "id": "neurology-9"
  },
  {
   "topic": "TIA risk stratification (ABCD2) and the 'no time to lose' principle",
   "subarea": "Stroke & TIA",
   "whatFirst": "- ABCD2 stratifies early stroke risk after TIA:\n  - **Age >=60** (1 point)\n  - **BP >=140/90** (1 point)\n  - Clinical: **unilateral weakness** (2) or speech disturbance without weakness (1)\n  - **Duration >=60 min** (2) or 10-59 min (1)\n  - **Diabetes** (1)\n- Score **>=4** = higher risk\n- Current Australian practice: any suspected TIA gets **URGENT assessment**, brain + carotid imaging, and antiplatelet started immediately — don't let a low score delay workup",
   "trap": "- The catch: **ABCD2 is de-emphasised as a triage gate** — a LOW score does NOT make a TIA 'safe' to send home without imaging\n- A **crescendo pattern or AF** needs admission regardless of score\n- Don't confuse **ABCD2** (TIA prognosis) with **NIHSS** (stroke severity) or **CHA2DS2-VASc** (AF stroke risk)",
   "discriminator": "- TIA vs stroke = **tissue, not time**: a transient deficit with infarct on MRI is a **stroke**, not a TIA\n- TIA vs mimic:\n  - TIA = sudden, maximal at onset, **negative symptoms** (loss of function)\n  - Migraine aura = **spreads/marches** with positive symptoms\n  - Seizure = **positive motor activity**",
   "cutoffs": [
    "ABCD2 **>=4** = higher risk",
    "Duration **>=60 min** = 2 points; **10-59 min** = 1",
    "Highest-risk features: **crescendo TIA**, AF, carotid stenosis"
   ],
   "redFlags": "- **Crescendo** (multiple in 24-48 h), **AF**, or **>=70% carotid stenosis** = admit/urgent specialist\n- Same-day TIA clinic for the rest",
   "source": "Stroke Foundation Australia Living Clinical Guidelines (InformMe/MAGICapp, current); eTG Neurology (current)",
   "viva": "- Examiner: 'TIA, ABCD2 of 2 — discharge?'\n- Answer: '**No** — a low score doesn't exclude high-risk pathology; I'd still arrange urgent carotid imaging, brain imaging and **start antiplatelet today**.'",
   "mnemonic": "ABCD2 = Age, BP, Clinical, Duration, Diabetes (the 2 marks the doubled items: weakness & >=60 min).",
   "tags": [
    "TIA",
    "ABCD2",
    "risk-score",
    "triage"
   ],
   "verified": true,
   "mcqTrap": "- '**ABCD2 of 3 — reassure and review in 6 weeks**' — unsafe\n  - Urgent imaging and antiplatelet are needed **regardless of a low score**",
   "title": "TIA risk stratification (ABCD2) and the 'no…",
   "id": "neurology-10",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Cerebral_infarction_after_4_hours_on_DWI_MRI.jpg",
     "caption": "MRI DWI - acute TIA/minor stroke with restricted diffusion",
     "alt": "MRI brain DWI sequence showing small area of restricted diffusion (bright signal) confirming acute ischaemic event in TIA workup",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Bacterial meningitis: antibiotics BEFORE imaging — never delay",
   "subarea": "Headache & raised ICP",
   "whatFirst": "- Suspected bacterial meningitis (fever + headache + neck stiffness +/- rash/altered conscious state):\n  - Take **blood cultures**\n  - Give **DEXAMETHASONE + empirical IV antibiotics IMMEDIATELY**\n  - Do LP only if it won't **delay antibiotics** and there is no contraindication\n  - If CT is needed before LP, **antibiotics MUST be given first**",
   "trap": "- The single most tempting WRONG MCQ option: '**CT head, then LP, then antibiotics**' — WRONG\n  - Every hour of delay increases mortality; imaging and LP must NOT delay antibiotics\n- The other trap: **omitting dexamethasone or giving it AFTER antibiotics**\n  - Dexamethasone must be given **WITH or JUST BEFORE** the first antibiotic dose (no benefit if given after)",
   "cutoffs": [
    "Empirical adult therapy: **ceftriaxone 2 g IV 12-hourly** (i.e. 4 g/day). Add **benzylpenicillin 2.4 g IV 4-hourly OR amoxy/ampicillin 2 g IV 4-hourly** for Listeria cover if **>=50 y**, pregnant, or immunocompromised (ceftriaxone does NOT cover Listeria).",
    "Add **vancomycin** if penicillin/cephalosporin-resistant pneumococcus is a concern (e.g. recent travel/risk factors).",
    "**Dexamethasone 10 mg (0.15 mg/kg) IV 6-hourly**, given with or just before the first antibiotic dose (continue if S. pneumoniae confirmed).",
    "In the community / pre-hospital with non-blanching rash (meningococcal) and delay to hospital -> **benzylpenicillin (or ceftriaxone) IM/IV stat** before transfer.",
    "**CT-before-LP only if**: GCS reduced/altered conscious state, focal neurology, new seizures, papilloedema, or significant immunocompromise — and **antibiotics go in FIRST**."
   ],
   "discriminator": "- Bacterial vs viral meningitis CSF:\n  - Bacterial = **high neutrophils**, HIGH protein, **LOW glucose** (CSF:serum ratio <0.4), high opening pressure, turbid\n  - Viral = **lymphocytes**, mildly raised protein, **NORMAL glucose**, clear\n- Meningitis (neck stiffness, photophobia) vs encephalitis (**altered behaviour/cognition, seizures** -> add aciclovir)",
   "redFlags": "- **Non-blanching purpuric rash** (meningococcaemia), reduced GCS, shock, seizures, focal signs -> sepsis/resus pathway, ICU\n- **Notify public health** (notifiable disease) + contact prophylaxis",
   "viva": "- Examiner probes: 'Patient needs a CT before LP — what do you do first?'\n- Correct answer: **blood cultures, then dexamethasone + IV ceftriaxone immediately**, THEN CT/LP\n- Don't forget **Listeria cover** (benzylpenicillin or amoxy/ampicillin) in the elderly/pregnant/immunocompromised and **public-health notification**",
   "mnemonic": "'Cultures, Dex, Ceftriaxone — then scan.' Dex goes WITH the first dose, never after.",
   "source": "Therapeutic Guidelines (eTG) Australia — Antibiotic, acute community-acquired bacterial meningitis (current).",
   "verified": true,
   "tags": [
    "bacterial meningitis",
    "ceftriaxone",
    "dexamethasone",
    "Listeria",
    "benzylpenicillin",
    "emergency",
    "LP"
   ],
   "mcqTrap": "- '**CT before antibiotics**' is the classic trap — antibiotics always precede imaging\n- **Dexamethasone must be with/before** the first dose\n- **Ceftriaxone alone misses Listeria**",
   "visualHtml": "<table class=\"gv-table\"><tr><th>CSF</th><th>Bacterial</th><th>Viral</th></tr><tr><td>Cells</td><td>Neutrophils (high)</td><td>Lymphocytes</td></tr><tr><td>Protein</td><td>High</td><td>Normal/mildly high</td></tr><tr><td>Glucose (CSF:serum)</td><td>Low (&lt;0.4)</td><td>Normal</td></tr><tr><td>Appearance</td><td>Turbid</td><td>Clear</td></tr></table><div class=\"gv-pills\"><span class=\"gv-pill\">Ceftriaxone 2 g IV q12h</span><span class=\"gv-pill\">+ benzylpenicillin or amoxy/ampicillin for Listeria (&gt;=50/pregnant/immunocompromised)</span><span class=\"gv-pill\">Dexamethasone 10 mg IV q6h with 1st dose</span></div>",
   "title": "Bacterial meningitis",
   "subtitle": "antibiotics BEFORE imaging — never delay",
   "id": "neurology-11",
   "images": [
    {
     "src": "assets/img/dermatology_purpura_nonblanching_01.jpg",
     "caption": "Meningococcal meningitis — non-blanching petechial/purpuric rash",
     "alt": "Non-blanching petechiae and purpura on the skin — the classic dermatological emergency sign of meningococcaemia that should trigger immediate antibiotics",
     "credit": "DrFO.Jr.Tn, Wikimedia Commons, CC BY-SA 3.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/d/da/Head_CT_scan.jpg",
     "caption": "CT head — normal scan (does not exclude meningitis; must not delay antibiotics)",
     "alt": "Normal CT head — illustrating that a normal CT does not exclude bacterial meningitis and antibiotics must never be delayed for imaging",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Giant cell arteritis (GCA): steroids BEFORE biopsy",
   "subarea": "Headache & raised ICP",
   "whatFirst": "- Suspected GCA (new headache + age >50 + jaw claudication / scalp tenderness / visual symptoms / PMR):\n  - **START high-dose corticosteroid IMMEDIATELY** — do NOT wait for ESR/CRP result or biopsy\n  - Then arrange **temporal artery biopsy within ~1-2 weeks**\n  - Get bloods (ESR/CRP) at presentation but **treat empirically**",
   "trap": "- The most tempting WRONG MCQ option: '**Arrange temporal artery biopsy and start steroids once GCA is confirmed**' — WRONG\n  - Delaying steroids risks **irreversible blindness** (anterior ischaemic optic neuropathy), which can become **bilateral within days**\n  - Steroids do NOT abolish biopsy yield for **~1-2 weeks**, so treating first is free\n- Second trap: '**normal ESR rules it out**' — CRP may be the only raised marker, and a small minority have **both normal**",
   "cutoffs": [
    "No visual symptoms: **prednis(ol)one ~1 mg/kg/day** (commonly 40-60 mg/day) PO.",
    "Visual loss / amaurosis / diplopia: **IV methylprednisolone 500-1000 mg/day for 3 days**, then high-dose oral prednisolone — SIGHT-SAVING emergency.",
    "Temporal artery biopsy stays diagnostic for **~1-2 weeks** after starting steroids (skip lesions -> need adequate length, **~1-2 cm**).",
    "ESR classically **>50 mm/h** (often very high, ~100); CRP usually raised and more sensitive — don't rely on ESR alone.",
    "Co-prescribe **low-dose aspirin** (reduces ischaemic events), **PPI**, and **bone protection** (calcium/vit D +/- bisphosphonate) with prolonged steroids."
   ],
   "discriminator": "- GCA vs tension/migraine: GCA is **NEW headache in over-50s** with systemic features\n  - **Jaw claudication** = most specific symptom\n  - Scalp tenderness, constitutional symptoms, PMR overlap, raised inflammatory markers\n- Migraine = recurrent, younger, **normal ESR/CRP**",
   "redFlags": "- Any **visual symptom** (transient visual loss/amaurosis fugax, diplopia), jaw claudication, new headache >50 with raised ESR/CRP\n- Visual symptoms = **ophthalmic emergency, IV methylprednisolone**",
   "viva": "- Examiner probes: 'TAB is booked for Thursday — do you wait to treat?'\n- Correct answer: **NO, start high-dose steroid now** (IV methylpred if any visual symptom), biopsy still valid for ~1-2 weeks\n- Consent point: warn re steroid adverse effects; ISBAR to ophthalmology/rheumatology",
   "mnemonic": "'Treat the eye, then take the artery' — steroids first, biopsy within 1-2 weeks.",
   "source": "Therapeutic Guidelines (eTG) Australia — Rheumatology, polymyalgia rheumatica and giant cell arteritis (current); aligned with ACR/EULAR GCA management principles.",
   "verified": true,
   "tags": [
    "GCA",
    "temporal arteritis",
    "corticosteroids",
    "ESR",
    "CRP",
    "blindness",
    "biopsy"
   ],
   "mcqTrap": "- '**Confirm with biopsy before starting steroids**' — wrong, this risks blindness\n  - Biopsy yield is **preserved for 1-2 weeks**",
   "title": "Giant cell arteritis (GCA)",
   "subtitle": "steroids BEFORE biopsy",
   "id": "neurology-12",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Papilledema.jpg",
     "caption": "Fundus — anterior ischaemic optic neuropathy (AION) — the blindness GCA causes",
     "alt": "Pale, swollen optic disc with haemorrhages — AION from GCA; the irreversible visual loss that is prevented by NOT delaying steroids",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Idiopathic intracranial hypertension (IIH): the opening-pressure cut-off + vision threat",
   "subarea": "Headache & raised ICP",
   "whatFirst": "- Typical patient = young, obese woman of childbearing age + headache + visual obscurations/pulsatile tinnitus + papilloedema\n- WHAT FIRST: **neuroimaging (MRI + MRV)** to EXCLUDE mass and venous sinus thrombosis\n  - THEN **LP** for opening pressure + normal CSF constituents\n- Refer **ophthalmology** for formal visual fields — vision, not headache, is what you're protecting",
   "trap": "- The most tempting WRONG MCQ option: 'Diagnose IIH and start acetazolamide' WITHOUT excluding **cerebral venous sinus thrombosis (CVST)**\n  - CVST mimics IIH exactly and is missed if you don't do **MRV**\n- Second trap: stopping at LP when CSF pressure is raised but you haven't documented **visual fields** — fulminant vision loss is the real danger\n- Third: forgetting **OCP/tetracyclines/retinoids/vitamin A** as secondary causes",
   "cutoffs": [
    "Diagnostic LP opening pressure: **>=25 cmH2O** in adults (>=28 cmH2O in children, or >=25 if not sedated and not obese), with NORMAL CSF composition.",
    "Imaging must be normal — no mass, no hydrocephalus; **MRV needed** to exclude venous sinus thrombosis (modified Dandy / Friedman criteria).",
    "First-line drug: **acetazolamide** (carbonic anhydrase inhibitor reduces CSF production); titrate up (often to **~1-2 g/day** as tolerated); **weight loss** is disease-modifying.",
    "Fulminant IIH with rapid visual loss -> urgent surgery: **optic nerve sheath fenestration** or **CSF shunt** (VP/LP shunt); therapeutic LP can be a temporising measure."
   ],
   "discriminator": "- IIH vs raised ICP from mass: IIH has raised pressure but **NORMAL brain imaging** (no mass, slit/normal ventricles) and **normal CSF** — by definition idiopathic\n- IIH vs migraine: IIH has **papilloedema + transient visual obscurations + pulsatile tinnitus** + the demographic; migraine does not cause papilloedema",
   "redFlags": "- **Progressive/severe visual field loss**, decreased acuity, fulminant onset -> emergency ophthalmology + neurosurgery (sight-threatening)\n- **6th nerve palsy** (false localising sign) can occur",
   "viva": "- Examiner probes: 'Young obese woman, papilloedema, normal CT — diagnosis?'\n- They want you to:\n  - (1) **Exclude CVST with MRV** before calling it idiopathic\n  - (2) Quote opening pressure **>=25 cmH2O** with normal CSF\n  - (3) Prioritise **visual fields** and acetazolamide + weight loss\n- Discriminator: it is a **diagnosis of EXCLUSION**",
   "mnemonic": "Modified Dandy: papilloEDema + raised pressure (>=25) + NORMAL imaging + NORMAL CSF + no other cause. Drug = 'Acetazolamide for the Idiopathic'.",
   "source": "Friedman 2013 revised diagnostic criteria for pseudotumor cerebri / IIH (opening pressure >=25 cmH2O adults / >=28 children), used in current Australian neurology/ophthalmology practice.",
   "verified": true,
   "tags": [
    "IIH",
    "pseudotumor cerebri",
    "acetazolamide",
    "papilloedema",
    "opening pressure",
    "MRV",
    "CVST"
   ],
   "mcqTrap": "- '**Start acetazolamide**' before MRV excludes CVST — **CVST is the killer mimic** of IIH",
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Young, obese, female, childbearing age</span><span class=\"gv-pill\">Papilloedema + visual obscurations + pulsatile tinnitus</span></div><div class=\"gv-flow\"><div class=\"gv-step\">MRI + MRV (exclude mass &amp; CVST)</div><div class=\"gv-step\">LP: opening pressure &gt;=<span class=\"gv-num\">25</span> cmH2O, normal CSF</div><div class=\"gv-step\">Formal visual fields (ophthalmology)</div><div class=\"gv-step\">Acetazolamide + weight loss</div><div class=\"gv-step\">Fulminant vision loss -> ONSF / shunt</div></div>",
   "title": "Idiopathic intracranial hypertension (IIH)",
   "subtitle": "the opening-pressure cut-off + vision threat",
   "id": "neurology-13",
   "images": [
    {
     "src": "assets/img/ophthalmology_fundus_papilloedema_iih_fresh.jpg",
     "caption": "Fundus — severe papilloedema in IIH (swollen optic disc, blurred margins, venous engorgement)",
     "alt": "Bilateral papilloedema with blurred optic disc margins, disc hyperaemia, and engorged retinal veins — the key examination finding in IIH that reflects chronically elevated ICP",
     "credit": "Shveta Bansal , Timothy Dabbs  and Vernon Long, Wikimedia Commons, CC BY 2.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/f/f7/SVT%2C_axial_T1w_MR_image_with_highlighting.jpg",
     "caption": "MRV brain — cerebral venous sinus thrombosis (CVST) — the must-exclude mimic",
     "alt": "MR venography showing absence of flow in a dural venous sinus (superior sagittal or transverse) — CVST must be excluded before diagnosing IIH as it presents identically",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Migraine vs sinister secondary headache: the red-flag screen (SNNOOP10)",
   "subarea": "Headache & raised ICP",
   "whatFirst": "- Every headache presentation: **screen for secondary-cause RED FLAGS first**\n- If none and pattern fits primary headache (recurrent, stereotyped, normal exam) -> **diagnose migraine clinically** (no imaging needed)\n- If ANY red flag -> **investigate** (CT/MRI, LP, ESR/CRP as indicated) before attributing to migraine",
   "trap": "- The most tempting WRONG MCQ option: ordering a **CT/MRI for a textbook migraine** with a normal exam (over-investigation)\n- OR the reverse, more dangerous trap: **labelling a thunderclap/new-onset-over-50/immunocompromised/postural headache as 'just a migraine'** and missing SAH, GCA, meningitis, mass, or CVST\n- The exam tests whether you can tell apart **benign-recurrent from must-not-miss**",
   "cutoffs": [
    "Migraine diagnostic feature set **(POUND)**: **Pulsatile**, **O**ne-day duration (4-72 h), **U**nilateral, **N**ausea/vomiting, **D**isabling — plus photophobia/phonophobia; aura **<60 min**, fully reversible.",
    "Red flags **(SNNOOP10)**: **S**ystemic symptoms/fever; **N**eoplasm history; **N**euro deficit/reduced consciousness; sudden/**O**nset thunderclap (<1 min); **O**lder age >50; **P**attern change/Progressive; **P**apilloedema; **P**ositional; **P**recipitated by Valsalva; **P**regnancy/puerperium; Painful eye/autonomic; Post-trauma; Painkiller overuse; immune compromise.",
    "Acute migraine treatment (eTG): **aspirin 900-1000 mg / ibuprofen / paracetamol** +/- antiemetic (metoclopramide/prochlorperazine), then **triptans** (e.g. sumatriptan) for moderate-severe; **avoid opioids**; limit triptans to **<10 days/month** and simple analgesics to **<15 days/month** (medication-overuse headache).",
    "Triptans contraindicated in **ischaemic heart disease**, uncontrolled hypertension, **hemiplegic/basilar migraine**."
   ],
   "discriminator": "- Migraine = recurrent, stereotyped, episodic, **normal neuro exam**, often family history, triggers, reversible aura\n- Sinister = **NEW, FIRST/WORST, thunderclap, progressive, positional**, with fever/papilloedema/focal signs/systemic features, or **new headache after age 50**",
   "redFlags": "- **Thunderclap** (-> SAH)\n- New headache **>50 + jaw claudication/visual** (-> GCA)\n- **Fever + neck stiffness** (-> meningitis)\n- **Positional + papilloedema** (-> raised ICP/IIH/mass)\n- Focal deficit/seizure (-> mass/CVST)\n- **Pregnancy/puerperium** (-> CVST/pre-eclampsia)",
   "viva": "- Examiner probes: 'How do you decide this headache is safe to call migraine?'\n- They want:\n  - A structured **red-flag screen (SNNOOP10)**\n  - **Normal neuro exam** incl. fundoscopy\n  - Explicit naming of the **must-not-miss mimics** you've excluded\n  - Then no imaging if all clear",
   "mnemonic": "SNNOOP10 for red flags; POUND for migraine likelihood (>=4/5 features strongly suggests migraine).",
   "source": "Therapeutic Guidelines (eTG) Australia — Neurology, migraine (current); Australian Prescriber, migraine management; SNNOOP10 red-flag list (widely used in Australian practice).",
   "verified": true,
   "tags": [
    "migraine",
    "red flags",
    "SNNOOP10",
    "POUND",
    "secondary headache",
    "triptans",
    "medication overuse"
   ],
   "mcqTrap": "- Calling a **NEW headache in someone over 50**, or a **thunderclap/positional/febrile headache**, 'migraine' — the red flags are designed to be the trap",
   "visualHtml": "<table class=\"gv-table\"><tr><th>Feature</th><th>Migraine (benign)</th><th>Sinister secondary</th></tr><tr><td>Onset</td><td>Recurrent, builds over minutes</td><td>Thunderclap (&lt;1 min) / new</td></tr><tr><td>Course</td><td>Stereotyped, episodic</td><td>Progressive / pattern change</td></tr><tr><td>Position</td><td>No clear positional link</td><td>Worse lying / Valsalva</td></tr><tr><td>Exam</td><td>Normal incl. fundi</td><td>Papilloedema / focal signs / fever</td></tr><tr><td>Age/context</td><td>Younger, FHx, triggers</td><td>&gt;50, pregnancy, immunocompromised, cancer</td></tr></table>",
   "title": "Migraine vs sinister secondary headache",
   "subtitle": "the red-flag screen (SNNOOP10)",
   "id": "neurology-14",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Subarachnoid_haemorrhage.jpg",
     "caption": "CT head — subarachnoid haemorrhage (hyperdense blood in basal cisterns)",
     "alt": "Non-contrast CT showing hyperdense (white) blood filling the basal cisterns and Sylvian fissures — the sinister secondary cause a 'thunderclap headache' demands you exclude",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/0/04/CT_of_a_normal_brain%2C_coronal_12.png",
     "caption": "CT head — normal scan with visual aura migraine (does not exclude SAH at >6h)",
     "alt": "Normal non-contrast CT head — illustrating that for thunderclap headache, a negative CT does not exclude SAH beyond 6 hours and LP for xanthochromia is still required",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Raised intracranial pressure (ICP): recognition and emergency management",
   "subarea": "Headache & raised ICP",
   "whatFirst": "- Headache worse on lying/morning/Valsalva + vomiting + papilloedema +/- reduced GCS / new focal signs:\n  - URGENT **non-contrast CT** (look for mass/bleed/hydrocephalus)\n  - **DO NOT do LP** until imaging excludes a mass lesion / impending herniation\n  - Manage ABC, **nurse head-up 30 degrees**, escalate to **neurosurgery**",
   "trap": "- The single most tempting WRONG answer: '**Perform LP to measure opening pressure**' — WRONG when a space-occupying lesion is suspected\n  - LP can precipitate **fatal coning (tonsillar herniation)**; image first\n- Another trap: **misreading the Cushing response** (HYPERtension + BRADYcardia + irregular respiration) as 'shock' and giving fluids/treating the BP down",
   "cutoffs": [
    "Normal ICP **~7-15 mmHg** (recumbent); sustained **>20-22 mmHg** = treat in neuro-critical care.",
    "Cushing's triad (LATE sign of impending herniation): **HYPERtension** (widened pulse pressure) + **BRADYcardia** + irregular/Cheyne-Stokes respiration.",
    "Acute herniation/deterioration: hyperosmolar therapy — **mannitol 0.25-1 g/kg IV** OR **hypertonic (3%) saline**; keep head midline & elevated **30 degrees**; aim normocapnia (transient hyperventilation to **PaCO2 ~30-35 mmHg** only as a bridge); treat fever/seizures.",
    "Pupil findings: **unilateral fixed dilated pupil** = uncal herniation compressing CN III -> neurosurgical emergency."
   ],
   "discriminator": "- Raised-ICP headache vs primary headache: raised-ICP = **positional** (worse lying/morning/Valsalva), wakes from sleep, with **papilloedema/vomiting/focal signs**\n- IIH is a subtype with raised pressure but **NO mass and NO ventriculomegaly** (see IIH card)",
   "redFlags": "- Reduced/declining GCS, new focal deficit, **pupillary asymmetry**, Cushing's triad, posturing, papilloedema -> **herniation pathway, neurosurgery NOW**",
   "viva": "- Examiner probes: 'Papilloedema and headache — would you LP?'\n- Correct answer: **NOT before imaging excludes a mass**; LP risks coning\n- Recognise **Cushing's triad** as impending herniation (do NOT treat the hypertension)\n- ISBAR to neurosurgery/ICU",
   "mnemonic": "Cushing = 'HIGH pressure, HIGH BP, LOW & SLOW pulse, ODD breathing' — and it's a LATE sign.",
   "source": "Brain Trauma Foundation-aligned neurocritical care principles adopted in Australian ICU/neurosurgical practice; Therapeutic Guidelines (eTG) Australia (raised ICP / hyperosmolar therapy).",
   "verified": true,
   "tags": [
    "raised ICP",
    "Cushing triad",
    "herniation",
    "papilloedema",
    "mannitol",
    "hypertonic saline"
   ],
   "mcqTrap": "- '**LP to measure opening pressure**' when a mass is suspected — wrong, risks coning\n- And **never lower the BP** in Cushing's triad",
   "title": "Raised intracranial pressure (ICP)",
   "subtitle": "recognition and emergency management",
   "id": "neurology-15",
   "images": [
    {
     "src": "assets/img/ophthalmology_fundus_papilloedema_01.jpg",
     "caption": "Fundus — papilloedema (raised ICP — blurred disc margins, disc elevation, venous engorgement)",
     "alt": "Papilloedema with swollen hyperaemic optic discs and obscured disc margins — the fundoscopic hallmark of raised ICP; presence mandates imaging before any LP",
     "credit": "DocSee04, Wikimedia Commons, CC BY 4.0"
    },
    {
     "src": "assets/img/neurology_ct_extradural_haematoma_fresh.jpg",
     "caption": "CT head — extradural haematoma (biconvex hyperdense collection) causing raised ICP",
     "alt": "Biconvex (lens-shaped) hyperdense extra-axial collection with midline shift — classic space-occupying lesion that makes LP dangerous (risk of coning/herniation)",
     "credit": "Jpogi, Wikimedia Commons, CC BY-SA 3.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Sliding_uncus_syndrome.tif/lossless-page1-960px-Sliding_uncus_syndrome.tif.png",
     "caption": "CT head — uncal (transtentorial) herniation causing coning",
     "alt": "CT showing effacement of basal cisterns and downward herniation of the uncus — the fatal consequence of LP without imaging in the context of a mass lesion",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Subarachnoid haemorrhage (SAH): the CT-then-LP timing trap",
   "subarea": "Headache & raised ICP",
   "whatFirst": "- Thunderclap/worst-ever headache (max intensity **<1 min**) -> URGENT **non-contrast CT head FIRST**\n  - If CT is positive -> **neurosurgery/CTA**, do NOT do LP\n  - If CT is negative -> the decision depends ENTIRELY on **time-from-onset**",
   "trap": "- The single most tempting WRONG answer: '**CT is negative, headache resolved, discharge / reassure**' — WRONG\n  - A normal CT only effectively excludes SAH if done **<6 h from onset** (modern scanner + competent reader) — sensitivity falls progressively after that\n- The other classic distractor: '**do the LP immediately**' — too early an LP **misses xanthochromia**\n- The whole gotcha is the **TIME-DEPENDENT sequence**, not the CT result alone",
   "cutoffs": [
    "Non-contrast CT sensitivity approaches **~100% if performed within 6 h** of headache onset (modern scanner + competent reader); declines progressively thereafter and is low by **~1 week**.",
    "CT negative + presentation **>6 h** (or any diagnostic doubt) -> do LP.",
    "LP timing: wait until **at least 12 h** after headache onset before tapping — xanthochromia (oxyhaemoglobin->bilirubin) takes **~12 h** to form reliably.",
    "**Xanthochromia** present in nearly all by 12 h and persists **~2 weeks**, so a late presenter can still be caught on LP.",
    "**Spectrophotometry** for xanthochromia is the lab gold standard but is NOT available in most Australian labs — **visual inspection / RBC count in successive tubes** is what is actually used; flag this lab-availability caveat."
   ],
   "discriminator": "- SAH vs benign thunderclap / migraine: SAH = **instantaneous peak**, often with neck stiffness, photophobia, transient LOC, vomiting, sentinel headache days earlier\n- RBC count **NOT falling** between CSF tubes 1 and 4 favours true SAH over a traumatic tap\n  - Traumatic tap: **clears** between tubes",
   "redFlags": "- Thunderclap onset, reduced GCS, focal deficit, **3rd nerve palsy** (PCom aneurysm), seizure, neck stiffness, on anticoagulants\n- Any of these -> resus + **neurosurgical referral**",
   "viva": "- Examiner probes: 'Your CT at 8 hours is normal — are you reassured?'\n- Correct answer: **NO, proceed to LP** (timed **>12 h from onset**) for xanthochromia/RBCs\n- Escalate via ISBAR to neurosurgery if positive\n- Discriminator they want: **time-from-onset governs CT reliability**",
   "mnemonic": "'6 to scan, 12 to tap' — CT within 6 h rules out; LP not before 12 h.",
   "source": "Stroke Foundation Australia Living Clinical Guidelines (current); Australasian (ACEM) emergency practice on SAH workup (CT <6 h, LP >12 h for xanthochromia).",
   "verified": true,
   "tags": [
    "SAH",
    "thunderclap",
    "CT",
    "lumbar puncture",
    "xanthochromia",
    "emergency"
   ],
   "mcqTrap": "- '**Normal CT excludes SAH**' is only reliable within the **6-hour window** — examiners set the scan at 8-12 h to catch you",
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Thunderclap headache</div><div class=\"gv-step\">Non-contrast CT FIRST</div><div class=\"gv-step\">CT positive -> neurosurgery + CTA (NO LP)</div><div class=\"gv-step\">CT negative &amp; &lt;6 h -> SAH effectively excluded</div><div class=\"gv-step\">CT negative &amp; &gt;6 h -> LP at &gt;12 h from onset</div><div class=\"gv-step\">LP: xanthochromia / RBCs not clearing tube1->tube4 -> SAH</div></div><div class=\"gv-pills\"><span class=\"gv-pill\">CT rules out only if &lt;6 h</span><span class=\"gv-pill\">LP not before 12 h</span><span class=\"gv-pill\">Xanthochromia lasts ~2 wk</span></div>",
   "title": "Subarachnoid haemorrhage (SAH)",
   "subtitle": "the CT-then-LP timing trap",
   "id": "neurology-16",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Subarachnoid_haemorrhage.jpg",
     "caption": "CT head — subarachnoid haemorrhage (hyperdense blood in basal cisterns and Sylvian fissures)",
     "alt": "Non-contrast CT showing hyperdense subarachnoid blood in the basal cisterns — positive within 6 hours in >98% of SAH; negative after 6h mandates LP for xanthochromia",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Xanthochromia.jpg",
     "caption": "CSF xanthochromia — yellow discolouration on spectrophotometry (LP positive >6 h after SAH)",
     "alt": "Yellow (xanthochromic) CSF in a tube compared to clear CSF — the diagnostic finding on LP after a normal CT in suspected SAH presenting >6 hours from symptom onset",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Brain_Scan-Angiogram_With_Brain_Anatomy_Diagram.jpg/960px-Brain_Scan-Angiogram_With_Brain_Anatomy_Diagram.jpg",
     "caption": "CT angiography — berry aneurysm at Circle of Willis (most common SAH cause)",
     "alt": "CT angiogram showing a saccular berry aneurysm at the junction of the posterior communicating artery — the underlying cause identified after confirming SAH",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Viral (HSV) encephalitis: empirical aciclovir within the hour",
   "subarea": "Headache & raised ICP",
   "whatFirst": "- Fever + headache + **ALTERED behaviour/cognition/personality**, confusion, or seizures (i.e. ENCEPHALOPATHY, not just meningism):\n  - Start **empirical IV aciclovir AND empirical antibiotics within ~60 min**, alongside cultures\n  - Do **MRI + EEG + LP** (HSV PCR on CSF) — but **treatment is not delayed** for them",
   "trap": "- The most tempting WRONG MCQ option: '**Await CSF HSV PCR before starting aciclovir**' — WRONG\n  - Early aciclovir reduces mortality and disability\n  - HSV PCR can be **FALSE-NEGATIVE in the first 24-72 h**, so a negative early PCR does NOT stop treatment\n  - Repeat LP / continue aciclovir if clinical suspicion remains high\n- Also: **do not withhold aciclovir** because LP is contraindicated",
   "cutoffs": [
    "**Aciclovir 10 mg/kg IV 8-hourly** (dose on ideal/adjusted body weight; ensure good hydration to avoid crystal nephropathy) — neonates **20 mg/kg q8h**.",
    "Treat for **14-21 days** (HSV); confirm CSF HSV PCR negativity before stopping in many protocols.",
    "Start empirical antibiotics + aciclovir within **60 min** of presentation; do not delay for imaging or LP.",
    "MRI: **temporal lobe** (medial temporal/insular) changes favour HSV; EEG may show **temporal periodic discharges**.",
    "CSF HSV PCR can be **negative if done very early** — repeat at **3-7 days** if still suspected."
   ],
   "discriminator": "- Encephalitis vs meningitis:\n  - Encephalitis = **brain parenchyma** -> altered mental state, personality change, focal deficits, **seizures**\n  - Meningitis = meninges -> headache, neck stiffness, photophobia with **preserved cognition**\n  - Overlap = **meningoencephalitis** (cover both: aciclovir + ceftriaxone +/- dexamethasone)",
   "redFlags": "- **Confusion/behavioural change with fever**, focal seizures, dysphasia, focal neurology -> treat as HSV encephalitis until excluded",
   "viva": "- Examiner probes: 'CSF HSV PCR came back negative at 12 hours — stop aciclovir?'\n- Correct answer: **NO** if clinical/MRI suspicion persists — early PCR can be **falsely negative**; continue and **repeat LP**\n- Start aciclovir within **60 min** empirically",
   "mnemonic": "'Confused + febrile = aciclovir first, PCR later (it can lie early).'",
   "source": "Britton et al., Consensus guidelines for investigation & management of encephalitis in adults and children in Australia & New Zealand, IMJ 2015; Therapeutic Guidelines (eTG) Australia.",
   "verified": true,
   "tags": [
    "HSV encephalitis",
    "aciclovir",
    "encephalopathy",
    "CSF PCR",
    "temporal lobe",
    "emergency"
   ],
   "mcqTrap": "- '**Wait for HSV PCR before aciclovir**' — wrong; PCR can be falsely negative early, and delay costs brain\n  - Give **aciclovir 10 mg/kg IV q8h** empirically",
   "title": "Viral (HSV) encephalitis",
   "subtitle": "empirical aciclovir within the hour",
   "id": "neurology-17",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Hsv_encephalitis.jpg",
     "caption": "MRI brain — HSV encephalitis (T2/FLAIR hyperintensity in temporal lobes)",
     "alt": "MRI FLAIR sequence showing high signal (oedema/inflammation) in the medial temporal lobes and cingulate gyrus — the hallmark imaging finding of HSV encephalitis",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Delirium vs dementia — discriminators, CAM, must-rule-out causes",
   "subarea": "Seizures & altered consciousness",
   "trap": "- **Acute onset + fluctuating course + inattention** = delirium; insidious, progressive, attention relatively preserved early = dementia\n- **Consciousness/alertness impaired** in delirium but CLEAR in early-mid dementia\n- Diagnose delirium with **CAM**: need feature 1 (acute onset/fluctuating) AND feature 2 (inattention) PLUS either feature 3 (disorganised thinking) OR feature 4 (altered level of consciousness)\n- **4AT** (Alertness, AMT4, Attention 'months backwards', Acute change/fluctuation) is the rapid Australian screen\n- **Hypoactive delirium** (quiet, withdrawn, drowsy) is the MOST COMMONLY MISSED and has the worst prognosis — do not be reassured by a calm patient\n- Single most tempting WRONG MCQ option: attributing new acute confusion in a known-dementia patient to **'progression of dementia'** — superimposed DELIRIUM until proven otherwise; find the trigger",
   "source": "Therapeutic Guidelines (eTG) — delirium, current; Delirium Clinical Care Standard (ACSQHC, 2021); Confusion Assessment Method (CAM); 4AT",
   "mnemonic": "Delirium = 'I WATCH DEATH' causes (Infection, Withdrawal, Acute metabolic, Trauma, CNS, Hypoxia, Deficiencies, Endocrine, Acute vascular, Toxins/drugs, Heavy metals). CAM = 1+2 + (3 or 4).",
   "viva": "- Frame acute confusion as **'delirium = medical emergency, find the cause'**\n- What-first: **screen + treat the trigger**, non-pharmacological measures first (reorientation, sleep, mobilise, hydrate, review meds)\n- Examiner probes the discriminators (onset, course, attention, consciousness) and 'what's your first-line management?' — non-drug; **antipsychotic only for severe distress/risk**\n- **Collateral history** for baseline cognition is key",
   "redFlags": "- New fluctuating confusion → **septic screen** + glucose + electrolytes (Na), medication review (anticholinergics, opioids, benzos), urinary retention/constipation, hypoxia\n- Sudden focal signs → **stroke/CNS**\n- Hyperactive + autonomic instability post-alcohol → **delirium tremens** (benzos, thiamine)",
   "mcqTrap": "- Tempting wrong answer: **'reassure family this is dementia progressing'**\n- Correct: acute change on a dementia background = delirium; investigate the precipitant",
   "discriminator": "- Delirium: **acute, fluctuating**, inattention, clouded consciousness, often reversible\n- Dementia: **chronic, progressive**, consciousness preserved early\n- Depression ('pseudodementia'): **'don't know' answers**, low mood predates cognitive change\n- Lewy body dementia mimics with fluctuation + hallucinations but is **chronic**",
   "cutoffs": [
    "**CAM positive** = feature 1 (acute/fluctuating) + feature 2 (inattention) + (3 disorganised thinking OR 4 altered consciousness)",
    "**4AT >=4** = possible delirium",
    "Onset: **hours-days** (delirium) vs months-years (dementia)",
    "**Antipsychotic** only if severe agitation/risk, lowest dose shortest duration"
   ],
   "tags": [
    "delirium",
    "dementia",
    "CAM",
    "4AT",
    "altered consciousness",
    "geriatrics"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Feature</th><th>Delirium</th><th>Dementia</th></tr></thead><tbody><tr><td>Onset</td><td>Acute (hours-days)</td><td>Insidious (months-years)</td></tr><tr><td>Course</td><td>Fluctuating (worse at night)</td><td>Slowly progressive</td></tr><tr><td>Attention</td><td>Markedly impaired</td><td>Preserved early</td></tr><tr><td>Consciousness</td><td>Altered/clouded</td><td>Clear until late</td></tr><tr><td>Reversibility</td><td>Usually reversible</td><td>Generally not</td></tr></tbody></table>",
   "title": "Delirium vs dementia",
   "subtitle": "discriminators, CAM, must-rule-out causes",
   "id": "neurology-18"
  },
  {
   "topic": "First seizure — driving rules (Austroads) + when to image/EEG/treat",
   "subarea": "Seizures & altered consciousness",
   "trap": "- Default private-licence standard after a single **unprovoked** seizure = **no driving for 12 months** seizure-free\n- The **6-month** figure is NOT the standard for an unprovoked first seizure — it is a CONDITIONAL variant for **acute symptomatic / provoked** seizures (metabolic, drug/alcohol withdrawal) on specialist assessment\n- **Commercial (vocational)** is far stricter:\n  - Single seizure = **5 years** seizure-free off medication\n  - Established epilepsy = **10 years** seizure-free off ASM\n- Medication withdrawal/change = **no driving during the taper AND for 3 months** after the new/ceased dose (private)\n- Patient must **self-report** to the driver licensing authority — doctor's duty is to **advise and document**\n  - Mandatory reporting only in **SA & NT**\n- Every first unprovoked seizure gets **EEG + MRI** (CT acutely if focal deficit, head injury, anticoagulated, immunocompromised, or fails to recover)\n- Treat after **ONE seizure** when recurrence risk is high: epileptiform EEG, structural MRI lesion, focal-onset semiology, nocturnal seizure, or abnormal neuro exam\n- Single most tempting WRONG MCQ option: **'6 months no driving after a first unprovoked seizure'** (that's the provoked/conditional figure) or 'always start an antiseizure med after the first seizure'",
   "source": "Austroads Assessing Fitness to Drive (AFTD), current edition — seizures & epilepsy; eTG Neurology first seizure; cross-checked via Austroads-derived clinical summaries June 2026",
   "mnemonic": "Private = 12 months unprovoked single OR epilepsy; 6 months is the PROVOKED/conditional variant. Commercial = 5 yrs single / 10 yrs epilepsy. 'Withdraw = no drive +3.' SELF-report (not doctor, except SA/NT).",
   "viva": "- Lead with **patient safety + legal duty** — advise NOT to drive, document the advice, give the 12-month private default\n- State the patient must **notify the licensing authority**\n- Examiner probes: 'Is reporting your responsibility?' — advise + document; **mandatory reporting only SA/NT**\n- 'When can a provoked seizure return earlier?' — **conditional ~6 months**, specialist-assessed\n- Consent/capacity angle for the conversation",
   "redFlags": "- Focal neuro deficit, persistent reduced GCS, fever/headache/immunocompromise → **CNS infection** (urgent CT, not just outpatient MRI)\n- **Status or clustering** → admit\n- **GCS 9-13** (moderate head injury) needs CT and observation",
   "mcqTrap": "- Tempting wrong answer: **'6 months'** for a first single UNPROVOKED seizure (private)\n- Correct default is **12 months**; 6 months is the conditional variant for PROVOKED/acute symptomatic seizures",
   "discriminator": "- **Provoked/acute symptomatic** seizure (hypoglycaemia, hyponatraemia, alcohol withdrawal, drugs, eclampsia) is NOT epilepsy — treat the cause\n  - Recurrence risk is lower once corrected; conditional licence (~6 months) may be considered\n- **Unprovoked** seizure = default **12-month** no-driving standard",
   "cutoffs": [
    "Private, single **unprovoked** seizure: **12 months** seizure-free (default standard)",
    "Private, established epilepsy: **12 months** seizure-free",
    "Private, **provoked**/acute symptomatic seizure: conditional return possible **~6 months** (specialist)",
    "Medication withdrawal/change: no driving during taper + **3 months** after",
    "Commercial, single seizure: **5 years** seizure-free off ASM",
    "Commercial, epilepsy: **10 years** seizure-free off ASM",
    "**MRI + EEG** for every first unprovoked seizure",
    "Treat after 1 seizure if high recurrence risk (**epileptiform EEG** / MRI lesion / focal onset / nocturnal)"
   ],
   "tags": [
    "first seizure",
    "driving",
    "Austroads",
    "neuroimaging",
    "EEG",
    "antiseizure medication"
   ],
   "verified": false,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Scenario</th><th>Private licence</th><th>Commercial licence</th></tr></thead><tbody><tr><td>Single UNPROVOKED seizure</td><td>12 months seizure-free (default)</td><td>5 years seizure-free, off ASM</td></tr><tr><td>Provoked / acute symptomatic seizure</td><td>Conditional return ~6 months (specialist)</td><td>Specialist + DLA assessment</td></tr><tr><td>Established epilepsy</td><td>12 months seizure-free</td><td>10 years seizure-free, off ASM</td></tr><tr><td>Withdrawing / changing ASM</td><td>No driving during taper + 3 months after</td><td>Specialist + DLA assessment</td></tr></tbody><tfoot><tr><td colspan=\"3\">Patient self-reports to licensing authority. Doctor advises + documents (mandatory reporting only SA &amp; NT).</td></tr></tfoot></table>",
   "title": "First seizure",
   "subtitle": "driving rules (Austroads) + when to image/EEG/treat",
   "id": "neurology-19",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/2/26/Spike-waves.png",
     "caption": "EEG — interictal epileptiform discharges (spike-and-wave) after first seizure",
     "alt": "EEG showing 3 Hz spike-and-wave epileptiform discharges — the key investigation after a first seizure that may confirm epileptiform tendency and guide treatment decisions",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "GCS — exact scoring, the airway threshold, common scoring traps",
   "subarea": "Seizures & altered consciousness",
   "trap": "- GCS = **Eyes (4) + Verbal (5) + Motor (6)**, range **3–15** (minimum 3, never 0)\n- **GCS <=8** = consider/secure airway (intubate)\n- **Best motor response** is the most prognostic component\n- Motor scoring traps:\n  - **Localises to pain (M5)** vs **withdraws/flexion (M4)** vs **abnormal flexion/decorticate (M3)** vs **extension/decerebrate (M2)**\n  - **Decorticate (flexion=3) is BETTER than decerebrate (extension=2)** — extension is worse\n- Verbal traps: **confused (V4)** vs **inappropriate words (V3)** vs **incomprehensible sounds (V2)**\n- Always record the **BEST response** and note modifiers (T = intubated, C = eyes closed by swelling, E = endotracheal)\n- Single most tempting WRONG MCQ option: stating **decerebrate (extension) scores higher than decorticate** (flexion) — it's the reverse",
   "source": "Glasgow Coma Scale (Teasdale); Australian trauma (EMST-aligned) and eTG head injury guidance",
   "mnemonic": "Motor 6->1: Obeys / Localises / Withdraws / Flexion(decorticate) / Extension(decerebrate) / None. Eyes: Spontaneous / Voice / Pain / None. 'GCS 8 = intubate.' Decorticate(3) > Decerebrate(2): 'core(tex) is better than the cellar(brainstem).'",
   "viva": "- State the three components and ranges, then apply the threshold: **'GCS 8 or less, protect the airway / call anaesthetics'**\n- Examiner probes the **localise-vs-withdraw** distinction and whether you record best response + modifiers\n- ISBAR: report the **component breakdown (E_V_M_)**, not just the total",
   "redFlags": "- **GCS <=8**, or a drop of **>=2 points**, or rapid deterioration → urgent CT head + airway protection + neurosurgical referral\n- **Anisocoria/blown pupil + falling GCS** → herniation\n- Head injury **GCS 9–13** (moderate) needs CT and observation",
   "mcqTrap": "- Tempting wrong answer: **'decerebrate posturing scores higher than decorticate'**\n- Correct: flexion/decorticate = **3**, extension/decerebrate = **2** (extension is worse)",
   "discriminator": "- **Localising to pain (M5)** = purposeful movement toward stimulus (hand crosses midline)\n- **Withdrawal (M4)** = pulls away non-purposefully\n- This single distinction is the **most common scoring error** and a favourite MCQ",
   "cutoffs": [
    "Eyes max **4**, Verbal max **5**, Motor max **6**",
    "Total range **3–15** (minimum 3, never 0)",
    "**GCS <=8** → intubate/protect airway",
    "Severe head injury **<=8**; moderate **9–13**; mild **14–15**",
    "Motor: obeys **6**/localises **5**/withdraws **4**/flexion **3**/extension **2**/none **1**",
    "Drop **>=2 points** = re-image + escalate"
   ],
   "tags": [
    "GCS",
    "Glasgow Coma Scale",
    "airway",
    "head injury",
    "altered consciousness",
    "trauma"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Score</th><th>Eyes (E)</th><th>Verbal (V)</th><th>Motor (M)</th></tr></thead><tbody><tr><td>6</td><td>-</td><td>-</td><td>Obeys commands</td></tr><tr><td>5</td><td>-</td><td>Oriented</td><td>Localises to pain</td></tr><tr><td>4</td><td>Spontaneous</td><td>Confused</td><td>Withdraws (flexion) to pain</td></tr><tr><td>3</td><td>To voice</td><td>Inappropriate words</td><td>Abnormal flexion (decorticate)</td></tr><tr><td>2</td><td>To pain</td><td>Incomprehensible sounds</td><td>Extension (decerebrate)</td></tr><tr><td>1</td><td>None</td><td>None</td><td>None</td></tr></tbody><tfoot><tr><td colspan=\"4\">Total 3-15. GCS &lt;=8 -&gt; protect airway (intubate). Record best response + modifiers (T/C/E).</td></tr></tfoot></table>",
   "title": "GCS",
   "subtitle": "exact scoring, the airway threshold, common scoring traps",
   "id": "neurology-20",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Escala_de_Coma_de_Glasgow_-_ECG.png/960px-Escala_de_Coma_de_Glasgow_-_ECG.png",
     "caption": "GCS scoring chart — Eyes (1-4), Verbal (1-5), Motor (1-6) with GCS ≤8 = intubate threshold",
     "alt": "Glasgow Coma Scale table showing all 15 components and scores; minimum 3 (never 0); GCS ≤8 = airway at risk; best motor response scored from the best limb",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Provoked/acute symptomatic seizure vs epilepsy + safe-discharge of a first seizure",
   "subarea": "Seizures & altered consciousness",
   "trap": "- A **provoked (acute symptomatic) seizure is NOT epilepsy** and does NOT warrant long-term antiseizure meds — find and fix the cause\n- Must-screen reversibles: **hypoglycaemia**, hyponatraemia (and hyper-/hypo-Na, Ca, Mg), **alcohol withdrawal** (peak 6–48 h), drug toxicity/withdrawal (tramadol, bupropion, TCAs, cocaine), **eclampsia**, hypoxia, CNS infection, uraemia\n- Epilepsy can be diagnosed after **ONE unprovoked seizure** if recurrence risk is **>=60% over 10 yrs** (ILAE 2014)\n  - 'Must have 2 seizures to diagnose epilepsy' is **outdated**\n- Single most tempting WRONG MCQ option: **'start lifelong sodium valproate after a single alcohol-withdrawal seizure'** — wrong; treat withdrawal with **benzodiazepines + thiamine**, no long-term ASM\n- **Valproate is contraindicated** in people of childbearing potential without strict pregnancy-prevention — a recurring MCQ trap",
   "source": "ILAE 2014 operational definition of epilepsy; Therapeutic Guidelines (eTG) Neurology — seizures/first seizure; eTG alcohol withdrawal",
   "mnemonic": "Provoked = treat the cause, not the seizure. Epilepsy after 1 seizure if recurrence risk >=60% (lesion/epileptiform EEG). Withdrawal seizure -> diazepam + thiamine, NOT lifelong ASM.",
   "viva": "- Separate **'provoked vs unprovoked'** explicitly; list reversible metabolic/toxic precipitants\n- State the **ILAE rule**: one seizure = epilepsy if recurrence risk >=60% over 10 yrs\n- Examiner probes **valproate-in-pregnancy** and the **alcohol-withdrawal pathway**\n- Safe discharge: witnessed normal recovery, normal exam, bloods/glucose normal, **first-seizure clinic referral**, driving + safety advice (no swimming alone, heights, baths)",
   "redFlags": "- Seizure + fever/headache/neck stiffness → **CNS infection** (treat empirically)\n- Persistent altered consciousness after convulsion stops → **non-convulsive status** (EEG)\n- Focal deficit, head trauma, anticoagulation, immunocompromise, pregnancy → **urgent imaging / specialist**",
   "mcqTrap": "- Tempting wrong answer: starting **lifelong antiseizure medication** after a single provoked (e.g. alcohol-withdrawal or hyponatraemic) seizure\n- Correct: **correct the precipitant**; no long-term ASM",
   "discriminator": "- **Provoked/acute symptomatic** = identifiable acute insult within **~7 days** (metabolic, toxic, withdrawal, acute brain injury)\n  - Low long-term recurrence once fixed; earlier conditional driving return (~6 months)\n- **Unprovoked** = no acute cause → assess recurrence risk for epilepsy diagnosis/treatment\n- Distinguish from **syncope** (brief, rapid recovery, no true post-ictal confusion) and **psychogenic non-epileptic seizures**",
   "cutoffs": [
    "Epilepsy after **1 seizure** if recurrence risk **>=60% over 10 yrs** (ILAE 2014)",
    "Acute symptomatic = insult within **~7 days**",
    "Alcohol withdrawal seizures peak **6–48 h**",
    "Treat after 1 unprovoked seizure if **epileptiform EEG** / MRI lesion / nocturnal / focal",
    "**Valproate contraindicated** in childbearing potential without pregnancy-prevention program"
   ],
   "tags": [
    "first seizure",
    "provoked seizure",
    "epilepsy definition",
    "ILAE 2014",
    "alcohol withdrawal",
    "valproate"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Glucose</span><span class=\"gv-pill\">Na / Ca / Mg</span><span class=\"gv-pill\">Alcohol/benzo withdrawal</span><span class=\"gv-pill\">Drug toxicity</span><span class=\"gv-pill\">Eclampsia</span><span class=\"gv-pill\">Hypoxia</span><span class=\"gv-pill\">CNS infection</span><span class=\"gv-pill\">Uraemia</span></div>",
   "title": "Provoked/acute symptomatic seizure vs epilepsy + safe-discharge…",
   "id": "neurology-21",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/8/81/Normalt_EEG_vaken_vuxen.PNG",
     "caption": "EEG — normal interictal EEG in provoked/acute symptomatic seizure (no epileptiform activity)",
     "alt": "Normal EEG after a provoked seizure (e.g. hypoglycaemia, hyponatraemia) — supports the diagnosis of acute symptomatic seizure rather than epilepsy; treat the cause not the EEG",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Low_Blood_Sugar_-_Glucose_Monitor_-_50191694906.jpg/960px-Low_Blood_Sugar_-_Glucose_Monitor_-_50191694906.jpg",
     "caption": "BGL (fingerprick glucose) — hypoglycaemia as reversible provoked seizure cause",
     "alt": "Glucometer reading showing critical hypoglycaemia — a correctable provoked seizure cause; must always be checked first in any seizure presentation (DEFG protocol)",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Reversible causes of coma — empiric DEFG/coma cocktail + structured ddx",
   "subarea": "Seizures & altered consciousness",
   "trap": "- After A-B-C, immediate empiric reversibles = **'DEFG: Don't Ever Forget Glucose'**\n- **Check bedside BGL FIRST** — mandatory before everything else\n- Targeted reversal:\n  - **Glucose** (50 mL 50% / 10% dextrose) for hypoglycaemia\n  - **Naloxone 0.4–2 mg** for opioid toxicity (pinpoint pupils, low RR)\n  - **Thiamine 100 mg IV BEFORE/with glucose** in alcoholic/malnourished (prevents Wernicke)\n  - +/- **oxygen** for hypoxia\n- **Flumazenil is NOT routine** — precipitates seizures in mixed/chronic-benzo/TCA overdose\n- Single most tempting WRONG MCQ option: **'give flumazenil for the obtunded poly-overdose patient'** — risk of seizures\n- Also reverse: **hyponatraemia** cautiously, **hypercapnia** (CO2 narcosis), **hypothermia/hyperthermia**",
   "source": "Therapeutic Guidelines (eTG) — poisoning & coma, current; Australian toxicology (NSW Poisons Information / clinical toxinology)",
   "mnemonic": "DEFG = Don't Ever Forget Glucose. Reversibles cocktail: Glucose + Naloxone + Thiamine (+ O2). Coma ddx = 'TIPS on the AEIOU': Trauma, Infection, Psychiatric, Stroke / Alcohol, Epilepsy, Insulin (glucose), Opiates/Overdose, Uraemia & other metabolic.",
   "viva": "- Structure = **ABC → glucose → empiric reversibles → systematic AEIOU-TIPS ddx** → targeted Ix (CT head, ABG, electrolytes, tox screen, ammonia)\n- Examiner probes: **'why thiamine before glucose?'** (Wernicke) and **'why not flumazenil?'** (seizure risk)\n- Escalation: **GCS <=8 → secure the airway** (intubate)",
   "redFlags": "- **GCS <=8** → intubate to protect airway\n- Unequal/fixed pupils, **Cushing reflex** (hypertension + bradycardia + irregular breathing) → raised ICP / herniation → urgent CT + neurosurgery\n- Fever + reduced consciousness → empiric **ceftriaxone +/- aciclovir** for meningoencephalitis; do NOT delay for LP",
   "mcqTrap": "- Tempting wrong answer: **'flumazenil for undifferentiated overdose coma'**\n- Correct: avoid — **precipitates seizures**; treat supportively + targeted reversal",
   "discriminator": "- **Structural coma** (focal signs, asymmetric pupils, lateralising) → imaging/neurosurgery\n- **Metabolic/toxic coma** (symmetrical, preserved pupillary reflexes, multifocal) → bloods/tox\n- **Pinpoint pupils** = opioids/pons; **fixed dilated** = anoxia/atropine/severe injury",
   "cutoffs": [
    "**Bedside glucose BEFORE** anything else",
    "Glucose: **50 mL 50% dextrose** (or 100–250 mL 10%)",
    "**Naloxone 0.4–2 mg** IV/IM, repeat (short t1/2)",
    "**Thiamine 100 mg IV**, before/with glucose if at-risk",
    "**GCS <=8** → intubate",
    "**Flumazenil NOT routine** (seizure risk)"
   ],
   "tags": [
    "coma",
    "reversible causes",
    "DEFG",
    "naloxone",
    "thiamine",
    "altered consciousness",
    "toxicology"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">A-B-C, O2, monitor</div><div class=\"gv-step\">Bedside glucose FIRST</div><div class=\"gv-step\">Empiric reversibles: glucose + naloxone + thiamine (NOT routine flumazenil)</div><div class=\"gv-step\">GCS &lt;=8 -&gt; intubate</div><div class=\"gv-step\">Systematic ddx (AEIOU-TIPS) + CT head / ABG / bloods / tox</div></div>",
   "title": "Reversible causes of coma",
   "subtitle": "empiric DEFG/coma cocktail + structured ddx",
   "id": "neurology-22",
   "images": [
    {
     "src": "assets/img/neurology_ct_extradural_haematoma_fresh.jpg",
     "caption": "CT head — extradural haematoma (structural reversible cause of coma)",
     "alt": "CT showing biconvex hyperdense extra-axial haematoma — structural emergency cause of coma that requires urgent neurosurgical decompression",
     "credit": "Jpogi, Wikimedia Commons, CC BY-SA 3.0"
    }
   ]
  },
  {
   "topic": "Status epilepticus ladder (adult) — exact timings, doses, escalation",
   "subarea": "Seizures & altered consciousness",
   "trap": "- Time-defined emergency = continuous seizure **>=5 min** OR **>=2 seizures without recovery** of consciousness (NOT the old 30-min number — 30 min is the threshold for neuronal injury, not for starting treatment)\n- What-first sequence:\n  1. **ABC + glucose check + IV access**; FIRST-LINE benzo: **IV midazolam OR IV diazepam OR IV clonazepam**\n     - Australian prehospital / no IV: **IM midazolam 10 mg** (adult >40 kg)\n  2. Still seizing at ~5 min after first dose → **REPEAT benzo ONCE** (max 2 benzo doses total)\n  3. Still seizing → **SECOND-LINE IV antiseizure**: levetiracetam 60 mg/kg (max 4.5 g) OR phenytoin 20 mg/kg (max 2 g, <=50 mg/min with cardiac monitoring) OR sodium valproate 40 mg/kg\n  4. **Refractory** (failed benzo + 1 second-line, ~20–30 min) → **RSI/intubation + anaesthetic infusion** (propofol/midazolam/thiopentone) + EEG + ICU\n- Single most tempting WRONG MCQ option: jumping to phenytoin/levetiracetam after the FIRST benzo dose, or giving a **THIRD benzo** — repeat benzo once THEN escalate to second-line\n- Don't forget **IV thiamine** before/with glucose in alcohol/malnourished, and **pyridoxine** in isoniazid toxicity / neonates",
   "source": "Therapeutic Guidelines (eTG) Neurology — status epilepticus, current; ESETT trial (levetiracetam/valproate/fosphenytoin equivalent); Queensland Health adult status epilepticus guideline",
   "mnemonic": "Two benzos then a big gun: BENZO-BENZO-LEV/PHENY-RSI. 'Five to start, thirty for harm.'",
   "viva": "- State the **>=5 min definition** out loud, call for help early, verbalise the **max 2 benzo doses** before escalation\n- Examiner probes: 'how long do you wait between doses?' (**~5 min**) and 'when do you call ICU/anaesthetics?' (refractory after benzo + one second-line)\n- ISBAR to ICU: ongoing seizure despite 2 benzos + levetiracetam, needs **RSI + EEG**",
   "redFlags": "- **Refractory after benzo + second-line** = call anaesthetics/ICU NOW for RSI\n- **Non-convulsive status** (persistent altered consciousness post-seizure, subtle eye/face twitching) needs urgent EEG\n- Always exclude/treat: **hypoglycaemia, hyponatraemia, eclampsia (MgSO4!), drug toxicity, hypoxia**",
   "mcqTrap": "- Tempting wrong answer: **'load phenytoin'** immediately after the first benzo dose\n- Correct: **repeat the benzo once first**, THEN a second-line agent",
   "discriminator": "- **Eclamptic seizure** (pregnant/postpartum, BP up, proteinuria) → **magnesium sulfate**, NOT the standard benzo→levetiracetam ladder",
   "cutoffs": [
    "Definition to treat: seizure **>=5 min**, or **>=2** without recovery",
    "Neuronal injury threshold: **~30 min**",
    "Repeat benzo at **~5 min**; max **2 benzo doses**",
    "**IM midazolam 10 mg** (>40 kg) when no IV",
    "**Levetiracetam 60 mg/kg** (max 4.5 g)",
    "**Phenytoin 20 mg/kg** (max 2 g), <=50 mg/min, cardiac monitor",
    "**Valproate 40 mg/kg**",
    "Refractory/RSI at **~20–30 min**"
   ],
   "tags": [
    "status epilepticus",
    "emergency",
    "eTG",
    "benzodiazepine",
    "levetiracetam",
    "phenytoin"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Step / time</th><th>Action</th><th>Agent &amp; dose</th></tr></thead><tbody><tr><td>0 min</td><td>ABC, glucose, IV, thiamine if at risk; 1st benzo</td><td>IV midazolam / IV diazepam / IM midazolam 10 mg if no IV</td></tr><tr><td>~5 min</td><td>Repeat benzo ONCE (max 2 total)</td><td>Same benzo, 2nd dose</td></tr><tr><td>~10-15 min</td><td>Second-line IV load</td><td>Levetiracetam 60 mg/kg (max 4.5 g) OR phenytoin 20 mg/kg (cardiac monitor) OR valproate 40 mg/kg</td></tr><tr><td>~20-30 min (refractory)</td><td>RSI + ICU + continuous EEG</td><td>Propofol / midazolam / thiopentone infusion</td></tr></tbody></table>",
   "title": "Status epilepticus ladder (adult)",
   "subtitle": "exact timings, doses, escalation",
   "id": "neurology-23",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/2/26/Spike-waves.png",
     "caption": "EEG — status epilepticus (continuous ictal activity / seizure pattern on EEG)",
     "alt": "EEG during generalised convulsive status epilepticus showing continuous high-amplitude rhythmic spike-and-wave discharge — confirms non-convulsive SE when clinically uncertain",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Bell's palsy (idiopathic LMN facial palsy)",
   "subarea": "Neuromuscular, movement & spine",
   "trap": "- **Start prednisolone within 72 hours** of onset — the benefit window\n  - Adult regimen: **prednisolone 50–60 mg/day for ~10 days** (alternatively 1 mg/kg/day, max 80 mg)\n  - Raises complete-recovery rate: **94% recover by 9 months** with prednisolone vs 81.6% untreated; NNT ~11\n- **Antivirals are NOT routine** — no proven benefit alone; at best <7% added benefit when combined with steroids; the single mandatory drug is the **STEROID**\n- **Eye protection is essential** and frequently the forgotten mark:\n  - **Lubricating drops** (hypromellose) by day\n  - **Ointment + tape/patch** the eye closed at night\n  - Incomplete eye closure → **exposure keratopathy/corneal ulcer**\n- Diagnosis is **clinical**: acute (<72 h) unilateral **LMN facial weakness INCLUDING the forehead**",
   "discriminator": "- **Bell's palsy = LMN**: forehead INVOLVED — cannot wrinkle forehead/raise eyebrow, cannot close eye on affected side\n- **UMN/stroke facial palsy**: **forehead SPARED** — bilateral cortical innervation; look for limb weakness/other deficits\n- Mimics that are NOT Bell's:\n  - **Ramsay Hunt**: vesicles in ear/palate + pain → add antivirals, worse prognosis\n  - **Bilateral facial palsy**: think GBS, Lyme, sarcoidosis\n  - **Slowly progressive palsy**: tumour (parotid/cerebellopontine angle)\n  - Recurrent palsy; palsy with other cranial nerves",
   "redFlags": "- **Forehead SPARED** = UMN → stroke pathway\n- **Bilateral palsy**, vesicles (Ramsay Hunt), slowly progressive over weeks, other cranial nerve/limb signs, **no recovery by ~3–4 months** → image / refer\n- Inability to close the eye → **urgent eye-protection** to prevent corneal damage",
   "mcqTrap": "- Tempting WRONG answer: **'prescribe an antiviral (aciclovir/valaciclovir) as the key treatment'** — evidence-based mainstay is the STEROID; antivirals are adjunct at best\n- Also wrong: **'forehead-sparing = Bell's palsy'** (that's UMN → stroke workup)\n- Also wrong: **'no need for eye care'** (corneal exposure is the avoidable harm)",
   "mnemonic": "'Steroid within 72 hours, protect the eye, antiviral optional.' Forehead moves = UMN (stroke); forehead frozen = LMN (Bell's).",
   "viva": "- Examiner probes: **'How do you know it's Bell's and not a stroke?'** (forehead involvement = LMN)\n- 'What are the two things you must do?' → **prednisolone <72 h + eye protection**\n- Consent/counsel re steroid side effects and expected recovery; safety-net the **corneal-protection advice**\n- Mention **Ramsay Hunt** as the can't-miss alternative",
   "source": "Australian Prescriber — Management of Bell's palsy (tg.org.au); Therapeutic Guidelines (eTG, current)",
   "tags": [
    "Bell's palsy",
    "prednisolone",
    "72 hours",
    "eye protection",
    "forehead sparing",
    "Ramsay Hunt",
    "UMN vs LMN"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th></th><th>Bell's palsy (LMN)</th><th>Stroke (UMN)</th></tr></thead><tbody><tr><td>Forehead/eyebrow</td><td>INVOLVED (can't wrinkle)</td><td>SPARED (can wrinkle)</td></tr><tr><td>Other signs</td><td>Isolated facial</td><td>Limb/speech deficits</td></tr><tr><td>Action</td><td>Prednisolone &lt;72 h + eye care</td><td>Stroke pathway / imaging</td></tr></tbody></table><div class=\"gv-pills\"><span class=\"gv-pill\">Prednisolone 50-60 mg ~10d</span><span class=\"gv-pill\">Within 72 h</span><span class=\"gv-pill\">Antiviral NOT routine</span><span class=\"gv-pill\">Tape eye at night</span><span class=\"gv-pill\">Vesicles = Ramsay Hunt</span></div>",
   "title": "Bell's palsy (idiopathic LMN facial palsy)",
   "id": "neurology-24",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Man_suffering_from_right_facial_palsy_Wellcome_L0062879.jpg/960px-Man_suffering_from_right_facial_palsy_Wellcome_L0062879.jpg",
     "caption": "Bell's palsy — LMN facial nerve palsy (inability to close eye, forehead involved, drooping corner of mouth)",
     "alt": "Unilateral lower motor neuron facial palsy: ipsilateral forehead sparing absent (forehead wrinkles lost), lagophthalmos (cannot close eye), drooped corner of mouth — classic Bell's palsy appearance",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Herpes_zoster_back.jpg/960px-Herpes_zoster_back.jpg",
     "caption": "Ramsay Hunt syndrome — vesicles in ear (geniculate ganglion VZV — a must-exclude cause of facial palsy)",
     "alt": "Vesicular eruption in the external ear canal and pinna (herpes zoster oticus / Ramsay Hunt) — a VZV-caused facial palsy treated with aciclovir + prednisolone, not steroids alone",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Cauda equina syndrome (CES)",
   "subarea": "Neuromuscular, movement & spine",
   "trap": "- **Surgical EMERGENCY** — emergency (out-of-hours, same-day) **MRI lumbosacral spine** + immediate **spinal surgical referral**; do NOT wait for outpatient imaging\n- **Decompression aim within 48 h**, ideally **<24 h** (earlier = better continence outcome)\n- RED FLAGS (any one mandates emergency MRI):\n  - **Saddle/perineal anaesthesia**\n  - **Bilateral sciatica/leg symptoms**\n  - **Urinary retention with overflow incontinence** (late, ominous)\n  - **Faecal incontinence/loss of anal tone**\n  - **Sexual dysfunction**\n- WHAT FIRST: targeted exam — **perianal sensation**, **anal tone (PR)**, and a **post-void bladder scan**\n  - High post-void residual / painless retention = most reliable warning sign\n- Commonest cause = large central **L4/5 or L5/S1** disc prolapse\n- **CES-Incomplete (CES-I)** (urinary difficulty/altered sensation but still voiding) has far better prognosis than **CES-Retention (CES-R)** (painless retention + overflow) — operate before it becomes CES-R",
   "discriminator": "- **Cauda equina** (LMN: flaccid, areflexic, saddle anaesthesia, EARLY bladder retention, often bilateral)\n- **Conus medullaris** (mixed UMN+LMN, early sphincter loss, symmetric)\n- **Spinal cord compression above L1** (UMN: sensory level, spastic, hyperreflexia, upgoing plantars)\n- **Simple mechanical sciatica** (unilateral, no saddle/bladder, normal anal tone)",
   "redFlags": "- Saddle anaesthesia, bilateral leg symptoms, **urinary retention/overflow**, faecal incontinence/lax anal tone, sexual dysfunction\n- Any one → **emergency MRI** same presentation + urgent spinal referral",
   "mcqTrap": "- Tempting WRONG answer: **'reassure, analgesia, physiotherapy and outpatient MRI in 2 weeks'** for low back pain with subtle saddle numbness — that delay loses the surgical window\n- Also wrong: **'plain X-ray' or 'CT'** — MRI is required\n- Also wrong: **'CES is excluded by intact unilateral straight-leg raise'** — it is not",
   "mnemonic": "Red flags = 'Saddle, Sphincters, Sex, Sciatica (bilateral)'. Post-void residual is the bedside tell.",
   "viva": "- Examiner probes: **'Young patient with back pain — what makes you scan tonight rather than refer for physio?'** (the red flags + post-void residual + anal tone)\n- Demonstrate you'd do **PR and bladder scan**; ISBAR to on-call spinal/neurosurgery for **emergency MRI and decompression aiming <24–48 h**\n- Consent for surgery and the **continence/sexual-function risk discussion**",
   "source": "Standard Australian/UK spinal surgical practice; NICE/GIRFT CES red-flag and timing principles (emergency MRI, decompression <48 h)",
   "tags": [
    "cauda equina",
    "red flags",
    "emergency MRI",
    "post-void residual",
    "saddle anaesthesia",
    "spinal surgery"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Sign</th><th>Cauda equina (LMN)</th><th>Cord compression &gt;L1 (UMN)</th></tr></thead><tbody><tr><td>Tone/reflexes</td><td>Flaccid, areflexic</td><td>Spastic, hyperreflexic</td></tr><tr><td>Plantars</td><td>Down/absent</td><td>Upgoing</td></tr><tr><td>Sensory</td><td>Saddle anaesthesia</td><td>Sensory LEVEL</td></tr><tr><td>Bladder</td><td>EARLY painless retention</td><td>Later</td></tr><tr><td>Pattern</td><td>Bilateral, asymmetric</td><td>Below the level</td></tr></tbody></table><div class=\"gv-pills\"><span class=\"gv-pill\">Emergency MRI &lt;24h</span><span class=\"gv-pill\">Decompress &lt;48h (ideally &lt;24h)</span><span class=\"gv-pill\">Do a post-void residual</span></div>",
   "title": "Cauda equina syndrome (CES)",
   "id": "neurology-25",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/MRI_of_the_lumbar_spine_with_abscess_in_the_posterior_epidural_space%2C_causing_cauda_equina_syndrome.jpg/960px-MRI_of_the_lumbar_spine_with_abscess_in_the_posterior_epidural_space%2C_causing_cauda_equina_syndrome.jpg",
     "caption": "MRI lumbar spine — cauda equina compression (disc prolapse compressing cauda equina)",
     "alt": "Sagittal MRI lumbar spine showing a large central disc herniation at L4/5 or L5/S1 with compression of the cauda equina nerve roots — the emergency imaging that confirms CES diagnosis",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Grant_1962_663.png/960px-Grant_1962_663.png",
     "caption": "Cauda equina anatomy — sacral dermatomes (saddle anaesthesia distribution)",
     "alt": "Dermatome chart showing S2-S4 saddle anaesthesia distribution (perineum, inner thighs, genitalia) and S1 distribution — the clinical area of sensory loss in cauda equina syndrome",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Guillain-Barre syndrome (GBS) — respiratory monitoring & ICU trigger",
   "subarea": "Neuromuscular, movement & spine",
   "trap": "- Monitor **FVC (forced vital capacity)**, NOT SpO2/ABG\n  - In neuromuscular respiratory failure, **SpO2 and PaCO2 stay normal until the patient is about to arrest** — by the time SpO2 drops, it is a CRASH intubation\n- The **'20/30/40 rule'** is a GUIDE (not a rigid sole trigger) to ICU/elective intubation:\n  - **FVC <20 mL/kg**, OR\n  - **MIP less negative than -30 cmH2O**, OR\n  - **MEP <40 cmH2O**\n  - Decision must also weigh a rapidly **falling FVC trend**, bulbar weakness with aspiration risk, and autonomic instability\n- WHAT FIRST: **serial bedside FVC** (single-breath count: counting to <20 in one breath suggests low FVC) + **cardiac monitoring** for dysautonomia (arrhythmia/labile BP = leading cause of death)\n- TREATMENT: **IVIG 0.4 g/kg/day x5 days** OR **plasma exchange** — equivalent and NOT combined\n  - **Corticosteroids do NOT work** (proven ineffective — common distractor)\n- Diagnosis: **albuminocytological dissociation** (high CSF protein, normal cell count) — may be normal in the first week",
   "discriminator": "- **GBS**: ascending areflexic flaccid weakness, post-infective (~Campylobacter/CMV), autonomic\n- **Myasthenia**: fatigable, ocular/bulbar, reflexes preserved, no sensory signs\n- **Transverse myelitis/cord compression**: sensory LEVEL, sphincter loss early, UMN signs/extensor plantars\n- **Miller-Fisher variant**: **ophthalmoplegia + ataxia + areflexia** (anti-GQ1b)",
   "redFlags": "- **Falling FVC**, bulbar weakness (can't protect airway), **autonomic instability** (arrhythmia, labile BP) — escalate to ICU EARLY, before SpO2 falls",
   "mcqTrap": "- Tempting WRONG answer: **'order ABG / monitor SpO2 / give supplemental oxygen'** or 'add corticosteroids'\n  - Oxygen **masks impending neuromuscular failure** (normal sats until arrest)\n  - **Steroids are ineffective** in GBS\n- The right monitor is **serial FVC**",
   "mnemonic": "20/30/40 rule — FVC<20 mL/kg, MIP>-30, MEP<40 → intubate. 'Sats lie, FVC tells the truth.'",
   "viva": "- Examiner probes: **'What single bedside test guides ICU transfer?'** (serial FVC, not SpO2) and 'Why not just watch the oxygen sats?'\n- ISBAR escalation to ICU for airway/ventilatory support; mention **dysautonomia monitoring** as the silent killer",
   "source": "Therapeutic Guidelines (eTG, current) — Neurology; Lawn et al, Arch Neurol 2001 (20/30/40 rule); standard Australian ICU/neurology practice",
   "tags": [
    "GBS",
    "FVC",
    "ICU",
    "IVIG",
    "plasma exchange",
    "emergency"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>20/30/40 rule (intubate if any)</th><th>Value</th></tr></thead><tbody><tr><td>FVC (Forced Vital Capacity)</td><td class=\"gv-num\">&lt; 20 mL/kg</td></tr><tr><td>MIP (max inspiratory pressure)</td><td class=\"gv-num\">&gt; -30 cmH2O (less negative)</td></tr><tr><td>MEP (max expiratory pressure)</td><td class=\"gv-num\">&lt; 40 cmH2O</td></tr></tbody></table><div class=\"gv-pills\"><span class=\"gv-pill\">SpO2 normal until arrest</span><span class=\"gv-pill\">Watch FALLING trend</span><span class=\"gv-pill\">Bulbar = airway risk</span><span class=\"gv-pill\">Dysautonomia = top killer</span></div>",
   "title": "Guillain-Barre syndrome (GBS)",
   "subtitle": "respiratory monitoring & ICU trigger",
   "id": "neurology-26",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/0/05/Spirometry_NIH.jpg",
     "caption": "Spirometry / bedside FVC monitoring — the 20-30-40 GBS ICU intubation rule",
     "alt": "Forced vital capacity (FVC) trend chart showing declining respiratory reserve in GBS — the 20-30-40 rule: FVC <20 mL/kg, MIP <30, MEP <40 = intubate (SpO2 stays normal until arrest)",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Malignant (metastatic) spinal cord compression — MSCC",
   "subarea": "Neuromuscular, movement & spine",
   "trap": "- **Give dexamethasone immediately on clinical suspicion** — do NOT wait for imaging\n  - Loading **16 mg**, then **dexamethasone 16 mg/day** (with PPI cover) while definitive treatment is planned\n- **Urgent MRI of the WHOLE SPINE within 24 hours** — multiple non-contiguous lesions in ~one-third; never image just the symptomatic level\n- Definitive Rx:\n  - **Neurosurgical decompression** (good performance status, single level, radioresistant tumour, spinal instability)\n  - OR **urgent radiotherapy** (e.g. 20 Gy/5#, 8 Gy/1#)\n- **Pre-treatment ambulatory/neurological status** = single best predictor of outcome\n  - Once complete paraplegia established **>24–48 h**, useful recovery is rare\n- Earliest symptom = **NEW or worsening back pain** (often thoracic, worse lying/at night/on straining) PRECEDING neurology\n  - Back pain in a **known cancer patient** = MSCC until proven otherwise",
   "discriminator": "- **MSCC** (UMN below the lesion: sensory LEVEL, spastic weakness, hyperreflexia, extensor plantars, **late** bladder/bowel)\n- **Cauda equina** (conus/below L1–L2: LMN, saddle anaesthesia, areflexia, **EARLY** painless urinary retention, flaccid)\n- Cancer history + back pain + any leg/bladder change = **MSCC pathway**",
   "redFlags": "- Known malignancy + **new thoracic back pain**, band-like pain, leg weakness/numbness, sphincter disturbance, a sensory level\n- Escalate **same-hour**: **steroids now**, MRI whole spine within 24 h, refer radiation oncology + spinal surgery",
   "mcqTrap": "- Tempting WRONG answer: **'arrange MRI first, then start steroids once confirmed'** — steroids must be given on **suspicion BEFORE imaging**\n- Also wrong: **'MRI of the symptomatic region only'** (must be whole spine)\n- Also wrong: **'plain X-ray / CT is adequate'** (MRI is the investigation of choice)",
   "mnemonic": "'Dex first, MRI whole spine within 24h, then surgery or RT.' Back pain in a cancer patient = MSCC until proven otherwise.",
   "viva": "- Examiner probes: **'A breast-cancer patient has new thoracic back pain and leg heaviness — what do you do in the next hour?'**\n  - **High-dose dexamethasone NOW** + urgent whole-spine MRI within 24h + refer rad-onc/neurosurgery\n  - Explain time-critical window for ambulation\n- ISBAR to oncology/spinal on-call; consent for **steroids (glucose, mood) and surgery**",
   "source": "eviQ (Cancer Institute NSW) — Metastatic Spinal Cord Compression; NICE NG234 corticosteroid dosing (dexamethasone 16 mg load then 16 mg/day) — consistent with Australian practice",
   "tags": [
    "MSCC",
    "dexamethasone",
    "MRI whole spine",
    "radiotherapy",
    "oncological emergency",
    "back pain"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">1. Suspect (cancer + back pain/neuro) → DEXAMETHASONE 16 mg load NOW (don't wait)</div><div class=\"gv-step\">2. URGENT MRI WHOLE spine &lt;24 h (one-third multi-level)</div><div class=\"gv-step\">3. Surgery (decompress) vs Radiotherapy (20 Gy/5#, 8 Gy/1#)</div><div class=\"gv-step\">4. Pre-Rx neuro status = best outcome predictor — TIME CRITICAL</div></div>",
   "title": "Malignant (metastatic) spinal cord compression",
   "subtitle": "MSCC",
   "id": "neurology-27",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Spinal_cord_compression.jpg",
     "caption": "MRI spine — metastatic spinal cord compression (epidural metastasis with cord compression)",
     "alt": "Sagittal MRI thoracic spine showing an epidural metastatic deposit compressing the spinal cord with associated cord signal change — the imaging that confirms MSCC and guides radiotherapy or surgery",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Lung_cancer.jpg",
     "caption": "CXR — lung cancer (most common primary causing MSCC)",
     "alt": "Chest X-ray showing a hilar/peripheral lung mass — lung cancer is the most common primary tumour causing metastatic spinal cord compression",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Multiple sclerosis (MS) — acute relapse & mimics",
   "subarea": "Neuromuscular, movement & spine",
   "trap": "- **ALWAYS exclude/treat INFECTION first** — a 'pseudorelapse' (recrudescence of old deficits from fever/UTI = **Uhthoff phenomenon**) is NOT a true relapse; treat the infection, NOT with steroids\n- True relapse = **new/worsening neurological symptoms >24 h**, not explained by fever/infection, after **>=30 days** of stability\n- Acute relapse Rx = **methylprednisolone 1000 mg/day** (IV, or oral at equipotent dose — oral is non-inferior) for **3–5 days**\n  - Do NOT add a **prolonged oral taper** (no benefit, more harm)\n  - Steroids **speed recovery but do NOT change long-term disability**\n- Diagnosis = **McDonald criteria**: dissemination in **SPACE and TIME** on MRI (+CSF oligoclonal bands can substitute for DIT)\n- Classic presentations: **optic neuritis** (painful monocular vision loss, RAPD, colour desaturation), **INO**, transverse myelitis, sensory/cerebellar\n- **DMTs prevent relapses** but are NOT the acute treatment",
   "discriminator": "- **MS relapse**: new deficit, >24 h, no fever\n- **Pseudorelapse/Uhthoff**: OLD deficit re-emerging with **heat/fever/infection** — resolves when temp normalises; treat the trigger\n- **NMOSD** (aquaporin-4 Ab): longitudinally extensive transverse myelitis **>=3 segments**, severe bilateral optic neuritis — DIFFERENT treatment; some MS DMTs **WORSEN it**\n- Optic neuritis: MS-type usually **unilateral, mild-moderate, pain on eye movement**; **bilateral/severe** → think NMOSD",
   "redFlags": "- **Fever/infection masquerading as relapse** (treat infection, not steroids)\n- Longitudinally extensive cord lesion or **severe bilateral optic neuritis** → test for **NMOSD/MOG** before labelling MS\n- Acute severe/disabling relapse → consider **plasma exchange** if steroid-refractory",
   "mcqTrap": "- Tempting WRONG answer: **'give IV methylprednisolone'** to an MS patient who has worsened in the setting of a UTI/fever — that's a **pseudorelapse; treat the infection first**\n- Also wrong: **'methylprednisolone followed by a 2-week oral prednisone taper'** (taper adds toxicity, no benefit)\n- Also wrong: **'start a DMT to treat this acute attack'** (DMTs are preventive, not acute rescue)",
   "mnemonic": "Relapse criteria: NEW deficit, >24 h, >30 days from last, NO fever. Rx = 'methylpred 1 g x3-5 days, no taper, rule out infection first.'",
   "viva": "- Examiner probes: **'MS patient feels worse — before you reach for steroids, what must you exclude?'** (infection/fever → pseudorelapse)\n- Discriminator probe: **MS vs NMOSD** optic neuritis and why it matters (different treatment)\n- ISBAR for admission; consent/counselling re steroid side effects and that **steroids speed but don't alter long-term outcome**",
   "source": "Therapeutic Guidelines (eTG, current) — Neurology; McDonald 2017 criteria; standard Australian MS practice",
   "tags": [
    "multiple sclerosis",
    "relapse",
    "methylprednisolone",
    "pseudorelapse",
    "Uhthoff",
    "NMOSD",
    "optic neuritis",
    "McDonald"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Worsening MS symptoms → FEVER/INFECTION? → YES = pseudorelapse (Uhthoff): treat infection, NO steroids</div><div class=\"gv-step\">NO infection + NEW deficit &gt;24 h, &gt;30 days stable = true RELAPSE</div><div class=\"gv-step\">Methylprednisolone 1000 mg/day (IV or oral) x 3-5 days — NO taper</div><div class=\"gv-step\">Severe/refractory → consider plasma exchange; check NMOSD if atypical</div></div>",
   "title": "Multiple sclerosis (MS)",
   "subtitle": "acute relapse & mimics",
   "id": "neurology-28",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Axial_DIR_MRI_of_a_brain_with_multiple_sclerosis_lesions.jpg/960px-Axial_DIR_MRI_of_a_brain_with_multiple_sclerosis_lesions.jpg",
     "caption": "MRI brain — multiple sclerosis (periventricular white matter plaques on T2/FLAIR)",
     "alt": "MRI FLAIR sequence showing multiple periventricular ovoid hyperintense plaques (Dawson fingers) perpendicular to the ventricles — the hallmark imaging finding of MS",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Papilledema.jpg",
     "caption": "Fundus — optic neuritis (disc pallor / swelling from MS — a common initial presentation)",
     "alt": "Fundus photograph showing optic disc pallor or acute disc swelling in optic neuritis — a common initial MS presentation causing painful monocular visual loss",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/5/5a/MULTIPLE_SCLEROSIS.JPG",
     "caption": "MRI spine — MS spinal cord demyelinating lesion (short T2 cord lesion)",
     "alt": "Sagittal MRI cervical spine showing a focal T2 hyperintense intramedullary lesion (demyelinating plaque) spanning less than 2 vertebral segments — spinal cord MS lesion",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Myasthenia gravis & myasthenic crisis",
   "subarea": "Neuromuscular, movement & spine",
   "trap": "- In **myasthenic crisis**, management mirrors GBS — monitor **FVC** (not SpO2)\n- Treat crisis with **PLEX or IVIG**, NOT steroids first-line\n  - **PLEX works faster** than IVIG (improvement within days)\n- **CRITICAL**: starting/increasing high-dose oral prednisolone can cause **transient worsening** in first 1-2 weeks → can precipitate crisis\n  - High-dose steroids usually started cautiously under cover in hospital, not in acutely respiratory-compromised patient\n- **Pyridostigmine** is symptomatic only — often **WITHHELD in crisis** (excess secretions worsen airway)\n- Hallmark: **fatigable weakness** — worse at end of day\n  - Ocular: ptosis, diplopia\n  - Bulbar: dysphagia, dysarthria, nasal speech\n  - Proximal limb weakness\n- Antibodies: **anti-AChR** (most common), **anti-MuSK**\n- **ALWAYS CT chest** for thymoma\n- Drugs that **precipitate crisis** (must-know list):\n  - **Aminoglycosides**, fluoroquinolones, macrolides\n  - **Beta-blockers**, IV magnesium, procainamide\n  - Anaesthetic **neuromuscular blockers**",
   "discriminator": "- **Myasthenic crisis**: weakness, normal/large pupils, dry, FVC falling\n- **Cholinergic crisis** (excess pyridostigmine): **SLUDGE** — salivation, lacrimation, miosis, bradycardia, fasciculations, cramps\n  - Key distinguisher: **miosis** vs normal/large pupils\n- Edrophonium (Tensilon) test historically distinguished but **rarely used now**\n- **Lambert-Eaton**: weakness **IMPROVES with use**, reflexes return after exercise, autonomic features, associated with small-cell lung cancer\n- **GBS**: areflexic, sensory, ascending",
   "redFlags": "- **Falling FVC** → ICU\n- **Bulbar weakness**: dysphagia/inability to clear secretions → ICU\n- **Respiratory distress** → ICU\n- Any new drug from the **precipitant list**\n- Recent **infection/surgery/pregnancy** as triggers",
   "mcqTrap": "- Tempting WRONG answer in crisis: **'start high-dose IV/oral prednisolone'** — can WORSEN acutely\n- Also wrong: **'increase pyridostigmine'** in crisis\n- Correct acute therapy: **PLEX or IVIG** + airway/FVC monitoring; withhold pyridostigmine\n- Another trap: giving **IV magnesium** for an unrelated reason — blocks the NMJ and worsens MG",
   "mnemonic": "Crisis Rx = 'PLEX or IVIG, not steroids first' (PLEX faster). Precipitants: 'Mg + the -mycins, -floxacins, -olols block the junction'. SLUDGE = cholinergic crisis.",
   "viva": "- Examiner probes: **'Myasthenic vs cholinergic crisis?'** → SLUDGE/miosis vs dry/normal pupils\n- **'What do you monitor?'** → FVC, single-breath count, bulbar function\n- ISBAR to ICU; consent for **PLEX line / IVIG**\n- Discriminator probe: **which antibiotic would you NEVER give** (aminoglycosides, fluoroquinolones, macrolides)",
   "source": "Therapeutic Guidelines (eTG, current) — Neurology; Australian neurology practice",
   "tags": [
    "myasthenia gravis",
    "crisis",
    "FVC",
    "IVIG",
    "plasma exchange",
    "thymoma",
    "drug precipitants"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th></th><th>Myasthenic crisis</th><th>Cholinergic crisis</th></tr></thead><tbody><tr><td>Cause</td><td>Under-treated / NMJ blockade</td><td>Excess pyridostigmine</td></tr><tr><td>Pupils</td><td>Normal/large</td><td>Miosis (small)</td></tr><tr><td>Secretions</td><td>Dry</td><td>SLUDGE (wet)</td></tr><tr><td>HR</td><td>Normal/up</td><td>Bradycardia</td></tr><tr><td>Acute Rx</td><td>PLEX/IVIG, support airway</td><td>STOP pyridostigmine; atropine</td></tr></tbody></table>",
   "title": "Myasthenia gravis & myasthenic crisis",
   "id": "neurology-29",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Myasthenia_gravis_ptosis_reversal.jpg/960px-Myasthenia_gravis_ptosis_reversal.jpg",
     "caption": "Myasthenia gravis — bilateral ptosis and fatigable weakness",
     "alt": "Bilateral ptosis with partial eye closure demonstrating the classic ocular presentation of myasthenia gravis",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Parkinson disease — inpatient & prescribing gotchas",
   "subarea": "Neuromuscular, movement & spine",
   "trap": "- **NEVER abruptly stop/withhold levodopa** (nil-by-mouth, missed ward doses, surgery)\n  - Abrupt withdrawal can precipitate **parkinsonism-hyperpyrexia syndrome** (NMS-like: rigidity, hyperthermia, autonomic instability, raised CK — life-threatening)\n  - Give doses **ON TIME**; if NBM, use **transdermal rotigotine patch** or NG tube\n- **AVOID dopamine-blocking antiemetics/antipsychotics** — all worsen parkinsonism:\n  - **Metoclopramide** and **prochlorperazine (Stemetil)** — NEVER use\n  - Typical antipsychotics: **haloperidol**, risperidone, olanzapine, chlorpromazine\n- Safe antiemetic: **domperidone 10-20 mg TDS** (doesn't cross BBB) or **ondansetron**\n- Safe antipsychotic for PD psychosis: **quetiapine** or **clozapine**\n- Diagnosis pearls:\n  - Asymmetric **resting 'pill-rolling' tremor** (4-6 Hz)\n  - **Bradykinesia + rigidity** (cogwheel)\n  - **Good levodopa response**",
   "discriminator": "- **Idiopathic PD**: asymmetric, resting tremor, levodopa-responsive\n- **Drug-induced parkinsonism**: symmetric, recent metoclopramide/antipsychotic — **REVERSIBLE**\n- **Essential tremor**: action/postural tremor, symmetric, improves with **alcohol**, no bradykinesia, family history\n- **PD-plus syndromes** (atypical) — red flag = poor levodopa response:\n  - **PSP**: early falls, vertical gaze palsy\n  - **MSA**: early autonomic failure, poor levodopa response\n  - **Vascular parkinsonism**: lower-body, stepwise\n- Red flags for atypical/secondary: symmetry, **early falls**, early autonomic/cognitive failure, **poor levodopa response**",
   "redFlags": "- Hospitalised PD patient with **missed levodopa doses** developing rigidity + fever + confusion = **parkinsonism-hyperpyrexia** (emergency)\n  - Restart dopaminergic therapy, supportive care, exclude infection/NMS\n- Newly worsened parkinsonism after starting **metoclopramide/antipsychotic** → stop the offending drug",
   "mcqTrap": "- Tempting WRONG answer: prescribing **metoclopramide or prochlorperazine** for nausea in a Parkinson patient\n- Also wrong: **haloperidol for delirium** in a PD patient — blocks dopamine, worsens disease\n- Also wrong: **'hold levodopa overnight as patient is NBM'** without a substitute\n- Correct:\n  - **Domperidone/ondansetron** for nausea\n  - **Quetiapine** for psychosis\n  - Keep **dopaminergic therapy uninterrupted**",
   "mnemonic": "TRAP = Tremor (resting), Rigidity, Akinesia/bradykinesia, Postural instability. Forbidden drugs: 'No Metoclopramide, No Maxolon, No Stemetil, No Haloperidol' — use Domperidone + Quetiapine.",
   "viva": "- Examiner probes: **'Admitted PD patient, nil-by-mouth for surgery and nauseated — write the orders'**\n  - Do NOT stop levodopa (use **patch/NG**, time-critical medication)\n  - Choose **domperidone/ondansetron**, NOT metoclopramide\n- Discriminator probe: **PD vs essential tremor vs drug-induced**\n- ISBAR if **hyperpyrexia syndrome** develops",
   "source": "Australian Prescriber — Drugs for / Management of Parkinson's disease (tg.org.au); Therapeutic Guidelines (eTG, current); Australian Parkinson hospital 'time-critical medication' guidance",
   "tags": [
    "Parkinson",
    "levodopa",
    "do not stop",
    "metoclopramide contraindicated",
    "domperidone",
    "parkinsonism-hyperpyrexia",
    "time-critical med"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Situation</th><th>AVOID</th><th>USE</th></tr></thead><tbody><tr><td>Nausea/antiemetic</td><td>Metoclopramide, prochlorperazine</td><td>Domperidone 10-20 mg TDS, ondansetron</td></tr><tr><td>Psychosis</td><td>Haloperidol, risperidone, olanzapine</td><td>Quetiapine, clozapine</td></tr><tr><td>NBM / missed doses</td><td>Stopping levodopa</td><td>Rotigotine patch / NG, on-time dosing</td></tr></tbody></table><div class=\"gv-pills\"><span class=\"gv-pill\">Levodopa = time-critical med</span><span class=\"gv-pill\">Abrupt stop → hyperpyrexia syndrome</span></div>",
   "title": "Parkinson disease",
   "subtitle": "inpatient & prescribing gotchas",
   "id": "neurology-30",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Dopamine_pathways.svg/960px-Dopamine_pathways.svg.png",
     "caption": "Parkinson disease — classic resting tremor, stooped posture and masked facies",
     "alt": "Patient with Parkinson disease demonstrating flexed posture, masked facies and pill-rolling tremor at rest",
     "credit": "Wikimedia Commons"
    }
   ]
  }
 ]
}
);
