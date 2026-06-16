window.GOTCHA = window.GOTCHA || { modules: [] };
window.GOTCHA.modules.push(
{
 "id": "surg-breast-endocrine",
 "name": "Breast, Endocrine-surgical & Onc",
 "category": "Surgery",
 "blurb": "Written-exam + VIVA. Breast triple assessment, thyroid/parathyroid/adrenal surgery, surgical oncology.",
 "cards": [
  {
   "topic": "Breast cancer staging investigations — when NOT to over-stage early disease",
   "subarea": "Breast surgery",
   "trap": "For asymptomatic EARLY breast cancer (clinical Stage I–II), routine systemic staging (CT chest/abdo/pelvis, bone scan, PET) is NOT recommended — low yield, false positives. Reserve systemic staging for locally advanced (Stage III), clinically node-positive, inflammatory, or symptomatic/biochemically suspicious disease, and before neoadjuvant therapy. Mandatory on every invasive cancer: ER, PR and HER2 receptor status (+/- Ki-67) — these define molecular subtype and drive treatment, and core biopsy (not FNA) is required to obtain them.",
   "source": "Cancer Australia — 'Stages of breast cancer' (Stage I/IIA/IIB = early breast cancer; routine staging not needed); AJCC 8th ed TNM (anatomical + biomarkers)",
   "discriminator": "Stage I–II asymptomatic → no routine CT/bone scan; staging = clinical + imaging + receptors. Stage III / node-positive / inflammatory / pre-neoadjuvant → staging CT (chest CT has largely replaced CXR in AU) + bone scan +/- PET. Sentinel node biopsy is for clinically/radiologically node-NEGATIVE axilla; clinically positive nodes → US-guided core/FNA then axillary clearance (not SLNB as the staging step).",
   "redFlags": "Bone pain, abnormal LFTs/ALP, dyspnoea, hypercalcaemia, or large/node-positive tumour → these JUSTIFY systemic staging.",
   "mcqTrap": "Tempting wrong answer: a fit woman with a 1.5cm node-negative invasive ductal carcinoma → 'arrange staging CT and bone scan'. Wrong — routine systemic staging is not indicated in asymptomatic early (Stage I–II) disease. Also wrong: relying on FNA cytology for receptor status (need core histology).",
   "mnemonic": "'Small & node-negative → don't go hunting.' Staging scans follow Stage III, symptoms, or neoadjuvant plans.",
   "viva": "Examiner: 'Newly diagnosed T1N0 invasive cancer — do you order a bone scan and CT?' Say no for asymptomatic early disease; explain you'd ensure ER/PR/HER2 from core, and reserve systemic staging for advanced/symptomatic disease or neoadjuvant candidates. Mention MDT discussion.",
   "whatFirst": "Confirm diagnosis + ER/PR/HER2 on core biopsy and assess axilla; reserve systemic staging (CT/bone scan/PET) for advanced, symptomatic, node-positive, inflammatory or pre-neoadjuvant disease.",
   "cutoffs": [
    "Routine systemic staging not recommended for asymptomatic clinical Stage I–II",
    "Stage I, IIA and IIB = early breast cancer (Cancer Australia)",
    "ER/PR/HER2 mandatory on all invasive cancers (core biopsy)",
    "SLNB if clinically node-negative; axillary US-guided biopsy if node-positive"
   ],
   "verified": true,
   "tags": [
    "staging",
    "TNM",
    "ER PR HER2",
    "sentinel node",
    "early breast cancer"
   ],
   "title": "Breast cancer staging investigations",
   "subtitle": "when NOT to over-stage early disease",
   "id": "surg-breast-endocrine-1"
  },
  {
   "topic": "Breast imaging by age — ultrasound vs mammography first-line (Australian rule)",
   "subarea": "Breast surgery",
   "trap": "The age threshold examiners test is 35. For a symptomatic woman UNDER 35: ULTRASOUND is first-line (dense young breast tissue makes mammography insensitive). For a symptomatic woman 35 and OVER: mammography is first-line, usually with targeted ultrasound. This is for SYMPTOMATIC investigation — do not confuse with BreastScreen (asymptomatic screening, free mammogram, target age 50–74, available from 40). A symptomatic lump is investigated diagnostically, NOT sent to BreastScreen.",
   "source": "Cancer Australia — 'Investigation of a new breast symptom: a guide for General Practitioners'; BreastScreen Australia program (target 50–74, eligible from 40)",
   "discriminator": "Symptomatic <35 → US first (add mammo only if US/clinical findings suspicious). Symptomatic ≥35 → mammo + targeted US. Asymptomatic screening = BreastScreen mammogram (50–74 actively invited; women aged 40–49 and 75+ also eligible to attend) — never the answer for a NEW lump.",
   "redFlags": "A young woman's lump dismissed because 'too young for cancer' — still triple-assess with US-led imaging if clinically indicated.",
   "mcqTrap": "Tempting wrong answer for a 28-year-old with a new lump: 'arrange a mammogram' or 'refer to BreastScreen'. Wrong — first-line imaging under 35 is ultrasound; BreastScreen is for asymptomatic women, not a diagnostic pathway.",
   "mnemonic": "Under 35 = Ultrasound (both have 'U'-ish young vibe); 35+ = Mammogram first. 'Young breast, sound it; older breast, x-ray it.'",
   "viva": "Examiner: '28-year-old, new 2cm lump — first imaging?' Say ultrasound first-line, then triple-assess; clarify you would not use BreastScreen for a symptomatic patient.",
   "whatFirst": "Symptomatic <35 → ultrasound first; ≥35 → mammography + targeted ultrasound; then complete triple assessment.",
   "verified": true,
   "tags": [
    "imaging",
    "age cutoff 35",
    "ultrasound",
    "mammography",
    "BreastScreen"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Scenario</th><th>First-line imaging</th></tr></thead><tbody><tr><td>Symptomatic, &lt; 35 yrs</td><td>Ultrasound (mammo only if suspicious)</td></tr><tr><td>Symptomatic, &ge; 35 yrs</td><td>Mammography + targeted ultrasound</td></tr><tr><td>Asymptomatic screening</td><td>BreastScreen mammogram (50&ndash;74 invited; eligible from 40)</td></tr></tbody></table>",
   "title": "Breast imaging by age",
   "subtitle": "ultrasound vs mammography first-line (Australian rule)",
   "id": "surg-breast-endocrine-2"
  },
  {
   "topic": "Lactational breast abscess — continue feeding + drainage (aspiration before incision)",
   "subarea": "Breast surgery",
   "trap": "Two exam-catching points. (1) CONTINUE BREASTFEEDING from the affected breast (or express if feeding is too painful / drain near nipple) — stopping causes engorgement and worsens the abscess; milk is safe for the infant. (2) First-line drainage in Australia where ultrasound/specialist access exists is ULTRASOUND-GUIDED NEEDLE ASPIRATION under antibiotic cover (better cosmesis, preserves feeding), with incision & drainage reserved for failed/recurrent aspiration, large/multiloculated, skin necrosis/'pointing', or where US is unavailable. Crucial safety net: if aspiration yields NO fluid, or blood-stained (not purulent) fluid, or a residual lump persists → CORE BIOPSY to exclude inflammatory breast cancer.",
   "source": "Cusack & Brennan, Aust Fam Physician 2011 (RACGP) 'Lactational mastitis and breast abscess'; eTG (Therapeutic Guidelines: Antibiotic, current); Australian Breastfeeding Association",
   "discriminator": "Mastitis = diffuse tender erythema, systemic flu-like symptoms, NO discrete fluctuant collection (clinical diagnosis, no imaging needed initially). Abscess = additional discrete tense/fluctuant tender lump +/- pointing → confirm + drain with ultrasound. Mastitis/abscess NOT settling on appropriate antibiotics → ultrasound + consider inflammatory breast cancer (peau d'orange, persistent erythema). Non-lactational/periductal abscess (subareolar) strongly linked to SMOKING and to anaerobes/mixed flora → recurs/fistula (mammary duct fistula); needs anaerobic cover and smoking cessation.",
   "redFlags": "Systemic sepsis (fever, tachycardia, hypotension) → IV antibiotics/admission; abscess not resolving, no pus on aspiration, or persistent mass → core biopsy for inflammatory cancer; recurrent subareolar abscess in a smoker → duct excision.",
   "mcqTrap": "Most tempting wrong answer: 'stop breastfeeding from the affected side until the abscess resolves'. Wrong — continue feeding/expressing. Second trap: jumping straight to formal incision & drainage in theatre when US-guided aspiration under antibiotic cover is the appropriate first-line in a unit with imaging.",
   "mnemonic": "Abscess A-B-C: Aspirate (US-guided, abx cover) first; Breastfeed/express — keep emptying; Cancer (inflammatory) excluded by Core if no/bloody pus or persistent lump.",
   "viva": "Examiner: 'Breastfeeding woman, fluctuant tender mass, febrile — manage.' What-first: confirm abscess on ultrasound, US-guided aspiration with antibiotic cover, KEEP breastfeeding/expressing, analgesia; escalate to I&D if aspiration fails. Safety-net/discriminator the examiner wants: if no pus or persistent mass → core biopsy to exclude inflammatory cancer. ISBAR breast surgeon if not settling or septic.",
   "whatFirst": "Confirm abscess on ultrasound → US-guided needle aspiration with antibiotic cover, continue breastfeeding/expressing, analgesia; escalate to I&D only if aspiration fails/large/multiloculated/skin necrosis.",
   "cutoffs": [
    "~3% of lactational mastitis progresses to abscess",
    "eTG mastitis: flucloxacillin OR dicloxacillin 500 mg orally 6-hourly (5 days if rapid resolution, otherwise up to 10 days)",
    "Penicillin allergy: cefalexin 500 mg 6-hourly (non-severe) OR clindamycin 450 mg 8-hourly (severe/immediate)",
    "US-guided aspiration first-line where available; I&D if aspiration fails/unavailable, large/multiloculated (>3–5 cm) or skin necrosis"
   ],
   "verified": true,
   "tags": [
    "lactational abscess",
    "mastitis",
    "continue breastfeeding",
    "needle aspiration",
    "incision and drainage",
    "inflammatory breast cancer",
    "eTG antibiotics"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Tender fluctuant mass in lactating breast</div><div class=\"gv-step\">Ultrasound to confirm abscess</div><div class=\"gv-step\">US-guided needle aspiration + antibiotic cover; CONTINUE feeding/expressing</div><div class=\"gv-step\">If fails / recurs / large-multiloculated / skin necrosis &rarr; incision &amp; drainage</div><div class=\"gv-step\">If NO pus, blood-stained fluid, or residual lump &rarr; CORE BIOPSY (exclude inflammatory cancer)</div></div>",
   "title": "Lactational breast abscess",
   "subtitle": "continue feeding + drainage (aspiration before incision)",
   "id": "surg-breast-endocrine-3"
  },
  {
   "topic": "Lactational mastitis — antibiotic thresholds, organism and the conservative-first rule",
   "subarea": "Breast surgery",
   "trap": "Mastitis is a CLINICAL diagnosis — no imaging or culture needed initially. Conservative measures come FIRST and are not optional: continued effective milk drainage (feed/express — the single most important step), warm compress before feeds, cold packs after, analgesia (paracetamol/NSAID, both safe in lactation). Antibiotics are added when there are systemic features, no improvement after ~24 hours of effective drainage, or a cracked-nipple source. Commonest organism is Staphylococcus aureus, so cover accordingly. Review at 24–48 hours; failure to settle on appropriate antibiotics triggers ultrasound for abscess AND consideration of inflammatory breast cancer.",
   "source": "eTG (Therapeutic Guidelines: Antibiotic, current); Cusack & Brennan, Aust Fam Physician 2011 (RACGP)",
   "discriminator": "Mastitis (responds to drainage +/- antibiotics) vs candidal nipple pain (intense burning pain especially after the breast empties, NO erythema — treat antifungal, not flucloxacillin) vs blocked duct/galactocoele (localised lump, no systemic upset) vs inflammatory cancer (erythema/peau d'orange NOT settling, older/non-lactating). Tetracyclines, ciprofloxacin and chloramphenicol are AVOIDED in breastfeeding.",
   "redFlags": "Systemic sepsis → IV antibiotics +/- admission; not settling at 48h → US + ?abscess + ?inflammatory cancer; recurrent → consider underlying mass.",
   "mcqTrap": "Tempting wrong answer: 'advise to stop feeding from the affected breast and start antibiotics' for early mastitis. Wrong on two counts — continue/intensify drainage, and antibiotics are not automatically first if there are no systemic features and drainage hasn't been optimised. Also wrong: doxycycline/ciprofloxacin in a breastfeeding woman.",
   "mnemonic": "Mastitis = 'Milk out first' — Drainage > Drugs. Drug of choice for Staph: Di/Flu-cloxacillin. Burning pain + no redness after emptying = think Candida, not antibiotics.",
   "viva": "Examiner: 'Day-10 postpartum, segmental red tender breast, low-grade fever — antibiotic?' Say flucloxacillin/dicloxacillin 500mg orally 6-hourly (cefalexin if non-severe pen allergy, clindamycin if severe/immediate), but lead with continued effective drainage + analgesia and 24–48h review; flag inflammatory cancer if it fails to settle.",
   "whatFirst": "Optimise milk drainage (feed/express) + analgesia first; add flucloxacillin/dicloxacillin if systemic features, cracked-nipple source, or no improvement after ~24h; review at 24–48h.",
   "cutoffs": [
    "Most common organism: Staphylococcus aureus",
    "Flucloxacillin / dicloxacillin 500 mg orally 6-hourly (5 days if rapid resolution, otherwise up to 10 days) — eTG",
    "Non-severe penicillin allergy: cefalexin 500 mg 6-hourly; severe/immediate: clindamycin 450 mg 8-hourly",
    "Review 24–48 h; if not settling → ultrasound + consider inflammatory cancer",
    "Avoid tetracyclines / ciprofloxacin / chloramphenicol in lactation"
   ],
   "verified": true,
   "tags": [
    "mastitis",
    "antibiotics",
    "S. aureus",
    "flucloxacillin",
    "lactation-safe",
    "candida nipple"
   ],
   "title": "Lactational mastitis",
   "subtitle": "antibiotic thresholds, organism and the conservative-first rule",
   "id": "surg-breast-endocrine-4"
  },
  {
   "topic": "Triple assessment (triple test) of a breast lump — what it is and the >99.6% rule",
   "subarea": "Breast surgery",
   "trap": "Triple test = (1) clinical history + examination, (2) imaging, (3) non-excisional biopsy (core or FNAC) — all three, not just imaging + biopsy. When all three components are performed AND concordant, it detects/excludes >99.6% of breast cancers (Cancer Australia figure). The exam-catching point: the triple test is graded — ANY single discordant or indeterminate/suspicious component overrides the others. A 'benign' imaging + 'benign' FNA do NOT clear a clinically suspicious lump: discordance mandates excision biopsy (or repeat core), not reassurance.",
   "source": "Cancer Australia — 'Investigation of a new breast symptom: a guide for General Practitioners' (RACGP Accepted Clinical Resource; endorsed by BreastSurgANZ, RCPA, RANZCR)",
   "discriminator": "Concordant-benign triple test → safe to reassure/avoid open biopsy. Discordant (e.g. clinically/radiologically suspicious but benign FNA, or FNA inadequate) → proceed to core biopsy and/or diagnostic open excision. FNA gives cytology only (cannot distinguish invasive from in-situ); core biopsy gives histology + receptor status — core is preferred when malignancy is plausible.",
   "redFlags": "Persistent discrete lump despite 'benign' tests; clinically suspicious lump with inadequate/benign cytology; symptom not explained by the benign result.",
   "mcqTrap": "Tempting wrong answer: 'reassure and review in 6 weeks' (or 'no further action') because mammogram + FNA were benign in a woman with a clinically suspicious hard fixed lump. Wrong — discordant triple test requires tissue diagnosis (excision/core), not watchful waiting.",
   "mnemonic": "Triple test = Touch (exam) + Take a picture (imaging) + Tissue (biopsy). 'All three agree → 99 reasons to relax; one disagrees → cut it out.'",
   "viva": "Examiner probes: 'Mammogram and FNA came back benign but the lump feels malignant — what now?' Answer the discordance: this is a discordant triple test, I would not reassure; I would arrange core biopsy and refer for diagnostic open excision. Mention you never rely on imaging alone.",
   "whatFirst": "Clinical history + examination, then imaging (US +/- mammo by age), then non-excisional biopsy — all three; act on the most suspicious component.",
   "verified": true,
   "tags": [
    "triple test",
    "breast lump",
    "FNA vs core",
    "discordance"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Triple test component</th><th>What it adds</th><th>Gotcha</th></tr></thead><tbody><tr><td>1. Clinical exam (+ history)</td><td>Risk factors, fixation, skin/nipple change, nodes</td><td>A normal exam never overrides suspicious imaging/biopsy</td></tr><tr><td>2. Imaging (US +/- mammo)</td><td>Characterise, guide biopsy, screen other breast</td><td>Cancer can be imaging-occult</td></tr><tr><td>3. Non-excisional biopsy</td><td>Core = histology + ER/PR/HER2; FNAC = cytology only</td><td>FNA cannot tell invasive from DCIS; inadequate sample &ne; benign</td></tr></tbody><tfoot><tr><td colspan=\"3\">All 3 concordant-benign &rarr; &gt;99.6% reliable. <strong>Any discordance &rarr; tissue diagnosis (core/excision), not reassurance.</strong></td></tr></tfoot></table>",
   "title": "Triple assessment (triple test) of a breast lump",
   "subtitle": "what it is and the >99.6% rule",
   "id": "surg-breast-endocrine-5"
  },
  {
   "topic": "Urgent breast referral red flags — what makes it a 'see within 1 week' / DO NOT delay",
   "subarea": "Breast surgery",
   "trap": "URGENT (seen within ~1 week) triggers: new discrete lump with imaging/biopsy suggestive of malignancy, clinically suspicious lump, breast abscess, new dimpling with a mass, suspicious nipple changes (unilateral inversion/retraction of short duration, scaling/ulceration = ?Paget), and suspicious nipple discharge (unilateral, spontaneous, blood-stained, single-duct, or with a lump). The under-examined catch: in the GP/specialist pathway 'DO NOT BIOPSY PRIOR TO CLINICAL REVIEW BY A SPECIALIST' — refer the suspicious lump, do not pre-empt the surgeon's assessment. Peau d'orange + diffuse erythema = inflammatory breast cancer = urgent, not 'trial antibiotics indefinitely'.",
   "source": "Cancer Australia GP guide ('Investigation of a new breast symptom'); statewide breast clinic referral guidelines (e.g. St Vincent's Breast Clinic)",
   "discriminator": "Suspicious nipple discharge (urgent): unilateral, spontaneous, single-duct, clear/bloodstained, +nipple surface change or lump. Benign discharge (routine): bilateral, multi-duct, only on expression, creamy/green/brown, normal nipple. Suspicious nipple retraction: recent, unilateral, slit-like, with scaling/ulceration. Benign retraction: longstanding, bilateral, nipple-stalk alone, post-inflammatory.",
   "redFlags": "Hard fixed lump; skin dimpling/tethering/peau d'orange; bloody single-duct discharge; nipple eczema/ulceration (Paget); axillary mass; diffuse erythematous swollen breast not settling on antibiotics (inflammatory cancer).",
   "mcqTrap": "Tempting wrong answer: a 55-year-old with a red, swollen, peau d'orange breast → 'prescribe oral antibiotics and review in 2 weeks'. Wrong — at this age with no lactation, suspect inflammatory breast cancer: urgent referral + biopsy. Another trap: GP doing FNA on a suspicious lump before specialist review.",
   "mnemonic": "Red flags = 'BLUNDS': Bloody single-duct discharge, Lump (hard/fixed), Ulcer/eczema of nipple (Paget), New dimpling/peau d'orange, Distortion/retraction (new), Swollen red breast not settling.",
   "viva": "Examiner: 'When do you refer urgently and what would you NOT do?' Give the suspicious-feature list, state 'within one week', and add you would not biopsy ahead of specialist clinical review; ISBAR the surgeon/breast care nurse if features of inflammatory cancer.",
   "whatFirst": "Identify any single suspicious feature → urgent specialist breast referral (within ~1 week); do not biopsy ahead of specialist clinical review.",
   "verified": true,
   "tags": [
    "red flags",
    "urgent referral",
    "inflammatory breast cancer",
    "Paget",
    "nipple discharge"
   ],
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Hard/fixed lump</span><span class=\"gv-pill\">Skin dimpling / peau d'orange</span><span class=\"gv-pill\">Bloody single-duct discharge</span><span class=\"gv-pill\">New unilateral nipple retraction</span><span class=\"gv-pill\">Nipple eczema/ulcer (Paget)</span><span class=\"gv-pill\">Axillary mass</span><span class=\"gv-pill\">Red swollen breast not settling</span></div>",
   "title": "Urgent breast referral red flags",
   "subtitle": "what makes it a 'see within 1 week' / DO NOT delay",
   "id": "surg-breast-endocrine-6",
   "images": [
    {
     "src": "assets/img/dermatology_derm_paget_nipple_01.jpg",
     "caption": "Paget disease of the nipple - eczematous, eroded, scaly nipple-areola change",
     "alt": "Unilateral eczematous, crusted erosion of the nipple-areola complex - a suspicious nipple change mandating urgent referral",
     "credit": "Lily Chu, National Naval Medical Center Bethesda, Wikimedia Commons, Public domain (PD US Navy)"
    }
   ]
  },
  {
   "topic": "Adrenal mass / incidentaloma — exclude function FIRST; phaeo = alpha-block BEFORE beta",
   "subarea": "Endocrine surgery",
   "trap": "Two killer traps. (1) The single most dangerous MCQ answer: start a beta-blocker (or label as 'essential hypertension' and give a beta-blocker) in a patient with a phaeochromocytoma — unopposed alpha stimulation causes a hypertensive crisis. You ALWAYS establish alpha-blockade (e.g. phenoxybenzamine) FIRST for ~10-14 days, then add a beta-blocker only after, and only if needed for tachycardia. (2) Never biopsy an adrenal mass until phaeo is biochemically excluded — biopsy can precipitate fatal crisis.",
   "whatFirst": "Every adrenal incidentaloma -> two questions: Is it functioning? Is it malignant? Functional screen = plasma free (or 24-h urine) metanephrines (phaeo), 1 mg overnight dexamethasone suppression test (Cushing), and aldosterone:renin ratio if hypertensive/hypokalaemic (Conn). Imaging: non-contrast CT attenuation. For phaeo prep: ALPHA before BETA.",
   "cutoffs": [
    "CT attenuation <=10 HU on non-contrast = lipid-rich benign adenoma (no further imaging follow-up needed irrespective of size)",
    "Absolute washout >60% or relative washout >40% at 15 min delay = adenoma",
    "Size: <4 cm low malignancy risk; many centres resect >=4 cm or any with suspicious imaging/function; larger heterogeneous masses strongly favour adrenalectomy",
    "Phaeo prep: alpha-blockade ~10-14 days BEFORE surgery; beta-blocker only AFTER alpha established"
   ],
   "discriminator": "Benign adenoma: small, homogeneous, <=10 HU, rapid contrast washout. Phaeo: high metanephrines, often >3 cm, high non-contrast HU, avid enhancement/slow washout, classic episodic headache/palpitations/sweating + paroxysmal hypertension. Adrenocortical carcinoma: large (>4 cm), heterogeneous, high HU, poor washout. Conn: hypertension + hypokalaemia + high ARR.",
   "redFlags": "Paroxysmal severe hypertension + headache/palpitations/diaphoresis = phaeo crisis risk; never give unopposed beta-blocker, never biopsy. Rapidly enlarging or >4 cm heterogeneous mass -> suspect adrenocortical carcinoma -> refer for resection (avoid biopsy — seeding).",
   "mcqTrap": "'Start metoprolol/propranolol' or 'commence beta-blocker for the tachycardia' in a phaeo patient before alpha-blockade — provokes hypertensive crisis. Also: 'CT-guided biopsy' of an adrenal mass before excluding phaeo.",
   "viva": "Examiner: 'Adrenal incidentaloma — what first?' Say: screen for function (metanephrines, 1mg DST, ARR) + characterise on CT. For phaeo: 'alpha before beta, fluid load, then operate.' Consent: intraop BP swings; ISBAR to anaesthetics/endocrine for perioperative crisis plan.",
   "mnemonic": "'A before B' (Alpha-blockade Before Beta-blockade). Functional screen = Metanephrines, Dex test, ARR.",
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Adrenal mass found</div><div class=\"gv-step\">Functioning? Metanephrines + 1mg DST + ARR</div><div class=\"gv-step\">Malignant? CT &le;10 HU &amp; washout &amp; size</div><div class=\"gv-step\">If phaeo: ALPHA-block 10-14d, then BETA, fluid-load, then resect</div></div><div class=\"gv-pills\"><span class=\"gv-pill\">Never beta before alpha</span><span class=\"gv-pill\">Never biopsy a phaeo</span></div>",
   "source": "eTG (Therapeutic Guidelines, current) — phaeochromocytoma preoperative management; ESE/ENSAT adrenal incidentaloma guideline 2023 (Eur J Endocrinol) — HU/washout/size; RACGP 'Adrenal disease'",
   "tags": [
    "adrenal incidentaloma",
    "phaeochromocytoma",
    "alpha blockade",
    "Conn",
    "Cushing",
    "ARR",
    "Hounsfield"
   ],
   "verified": true,
   "title": "Adrenal mass / incidentaloma",
   "subtitle": "exclude function FIRST; phaeo = alpha-block BEFORE beta",
   "id": "surg-breast-endocrine-7"
  },
  {
   "topic": "Hypercalcaemia / primary hyperparathyroidism — the FHH discriminator (urine calcium) before you operate",
   "subarea": "Endocrine surgery",
   "trap": "Most tempting wrong answer: refer for parathyroidectomy as soon as you see high calcium + inappropriately high/normal PTH. You MUST first exclude familial hypocalciuric hypercalcaemia (FHH) — it has the IDENTICAL biochemistry (high Ca + high/normal PTH) but is benign, autosomal dominant (CaSR mutation) and surgery does nothing. The discriminator is the 24-h urine calcium / calcium-creatinine clearance ratio (CCCR): low in FHH, high/normal in primary HPT. Operating on FHH is a classic exam 'never event.'",
   "whatFirst": "Confirm true hypercalcaemia (corrected/ionised Ca), then PTH. If PTH high/inappropriately normal -> measure 24-h urine calcium + CCCR to exclude FHH BEFORE imaging/surgery. PTH low/suppressed -> hunt for malignancy (PTHrP, myeloma, bone mets) or vitamin D excess.",
   "cutoffs": [
    "Calcium-creatinine clearance ratio (CCCR) <0.01 suggests FHH; >0.02 favours primary HPT (0.01-0.02 = indeterminate -> CaSR genetics)",
    "FHH: 24-h urine calcium typically low (~<100 mg/day, <2.5 mmol/day)",
    "Localisation (sestamibi +/- 4D-CT/USS) is to plan surgery, NOT to make the diagnosis — diagnosis is biochemical"
   ],
   "discriminator": "Primary HPT (PTH-driven): high Ca, high/normal PTH, high/normal urine Ca, low phosphate -> surgery candidate. FHH: high Ca, high/normal PTH, LOW urine Ca (CCCR <0.01), strong family history, lifelong -> no surgery. Malignancy hypercalcaemia: high Ca, SUPPRESSED PTH (PTHrP-mediated).",
   "redFlags": "Corrected Ca >3.5 mmol/L, or symptomatic (confusion, dehydration, arrhythmia, renal impairment) = hypercalcaemic crisis -> IV 0.9% saline rehydration first, then IV bisphosphonate; this is the acute emergency, separate from the surgical work-up.",
   "mcqTrap": "Sending high-Ca/high-PTH patient straight to parathyroidectomy without urine calcium -> miss FHH. Or attributing high Ca + SUPPRESSED PTH to hyperparathyroidism (that pattern = malignancy).",
   "viva": "Examiner: 'High calcium, high PTH — operate?' Say: not until I exclude FHH with 24-h urine calcium/CCCR. Escalation: symptomatic crisis -> ISBAR to medical/renal, IV saline + bisphosphonate. Consent point: parathyroidectomy risks RLN injury + hypocalcaemia.",
   "mnemonic": "'CHIMPANZEES' for hypercalcaemia causes; but the surgical gate is: high PTH + LOW urine Ca = FHH = Hands Off.",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th></th><th>Serum Ca</th><th>PTH</th><th>Urine Ca / CCCR</th><th>Surgery?</th></tr></thead><tbody><tr><td>Primary HPT</td><td>High</td><td>High / inappropriately normal</td><td>High-normal, CCCR &gt;0.02</td><td>Yes (if criteria)</td></tr><tr><td>FHH</td><td>High</td><td>High / normal</td><td>LOW, CCCR &lt;0.01</td><td>No</td></tr><tr><td>Malignancy</td><td>High</td><td>SUPPRESSED</td><td>variable</td><td>Treat cancer</td></tr></tbody></table>",
   "source": "eTG (Therapeutic Guidelines, current) hypercalcaemia; CCCR cut-off per FHH exclusion literature (StatPearls; JBMR Plus FHH case series)",
   "tags": [
    "hypercalcaemia",
    "primary hyperparathyroidism",
    "FHH",
    "CCCR",
    "urine calcium",
    "PTH"
   ],
   "verified": true,
   "title": "Hypercalcaemia / primary hyperparathyroidism",
   "subtitle": "the FHH discriminator (urine calcium) before you operate",
   "id": "surg-breast-endocrine-8"
  },
  {
   "topic": "Neck lump approach — triple assessment by age + the 3-week rule for malignant cervical node",
   "subarea": "Endocrine surgery",
   "trap": "Tempting wrong move: aspirate or excise a persistent lateral neck lump in an adult as the first step. In an adult >40 with a persistent (>3 weeks) firm lateral neck mass, the over-riding fear is METASTATIC squamous cell carcinoma from an occult head/neck mucosal primary — so the correct pathway is ENT panendoscopy + biopsy of the primary, and the node should be sampled by FNA (or core), NEVER by open excisional biopsy first (open biopsy of an SCC node seeds the neck and worsens prognosis). 'Persistent neck lump in an adult = cancer until proven otherwise.'",
   "whatFirst": "History/exam to localise (midline vs lateral, thyroid vs lymph node vs salivary). Adult persistent lump: USS + FNA (or core), and ENT referral for panendoscopy to find a mucosal primary — NOT open excisional biopsy.",
   "cutoffs": [
    "Persistent neck lump >3 weeks in an adult (esp. >40, smoker/drinker) -> urgent ENT/head&neck referral",
    "Midline mass that moves with tongue protrusion = thyroglossal cyst; moves with swallowing = thyroid",
    "Lateral, pulsatile, splays carotid on USS = carotid body tumour (paraganglioma) — do NOT biopsy"
   ],
   "discriminator": "Midline + elevates on tongue protrusion = thyroglossal duct cyst. Anterior triangle + moves with swallow = thyroid. Lateral upper neck cystic in adult = assume metastatic SCC (cystic node), NOT branchial cyst, until proven. Pulsatile at carotid bifurcation = paraganglioma (no FNA/biopsy — vascular).",
   "redFlags": "Unilateral persistent firm node + hoarseness/odynophagia/otalgia/weight loss/smoking -> occult aerodigestive primary; do not delay with antibiotics. Pulsatile lateral mass -> imaging before any needle.",
   "mcqTrap": "'Excisional biopsy of the neck node' as first step in suspected metastatic SCC (correct = FNA + panendoscopy first). Or labelling a cystic lateral neck mass in a 55-yr-old as a benign branchial cyst.",
   "viva": "Examiner: 'Adult with a 3-week lateral neck lump — what first and what must you NOT do?' Say FNA + ENT panendoscopy; must NOT open-biopsy (seeds SCC). Discriminator probed: thyroglossal vs thyroid vs metastatic node vs paraganglioma.",
   "mnemonic": "Neck lump rule: 'persistent 3 weeks = scope it, needle it, never open it.'",
   "source": "General head & neck surgical principles; eviQ head & neck pathways; consistent with ENT/HN Australia practice (current)",
   "tags": [
    "neck lump",
    "triple assessment",
    "metastatic SCC",
    "thyroglossal cyst",
    "paraganglioma"
   ],
   "verified": false,
   "title": "Neck lump approach",
   "subtitle": "triple assessment by age + the 3-week rule for malignant cervical node",
   "id": "surg-breast-endocrine-9"
  },
  {
   "topic": "Post-thyroidectomy AIRWAY HAEMATOMA — the bedside open-the-wound emergency",
   "subarea": "Endocrine surgery",
   "trap": "Most tempting wrong answer: 'rush the patient to theatre' or 'call anaesthetics for intubation' as the FIRST action when a post-thyroidectomy neck is swelling and the patient is in respiratory distress. The life-saving first move is to OPEN THE WOUND AT THE BEDSIDE — cut the skin and strap/deep sutures, evacuate clot, relieve the compression — THEN go to theatre. Waiting for theatre kills; the obstruction is venous/laryngeal oedema from the expanding haematoma, and decompression must be immediate. Emergency removal kit must be at the bedside.",
   "whatFirst": "Recognise expanding neck swelling + respiratory distress/stridor/tight neck (usually <6-24 h post-op) -> sit up, high-flow O2, call for help/airway team -> IMMEDIATELY open the wound at the bedside (remove skin sutures/clips, then deep/strap sutures), evacuate haematoma, finger-sweep -> then transfer to theatre for definitive haemostasis. Anticipate difficult airway.",
   "cutoffs": [
    "Most haematomas present within the first 6 hours; majority within 24 h post-op (basis for the bedside emergency-box / clip-remover)",
    "SCOOP at bedside: Skin exposure, Cut sutures, Open skin, Open straps, Pack/evacuate",
    "Bedside emergency kit (stitch cutter/clip remover) mandated at bedside after thyroid/parathyroid surgery"
   ],
   "discriminator": "Airway haematoma: rapid neck swelling, tense wound, respiratory distress/stridor, often within hours — a MECHANICAL/venous-congestion emergency relieved by decompression. Hypocalcaemia (other card): tingling, Chvostek/Trousseau, later (24-72 h), treated with calcium. Recurrent laryngeal nerve injury: hoarse voice (unilateral) or stridor/airway compromise (bilateral) at extubation — not a swelling. Don't mix them up.",
   "redFlags": "Any stridor, tracheal tug, falling SpO2, agitation, or a visibly tense/expanding neck post-thyroidectomy = decompress NOW; do not wait for imaging or theatre. Even after decompression, laryngeal oedema may persist -> definitive airway in theatre.",
   "mcqTrap": "'Transfer immediately to operating theatre' or 'urgent CT neck' chosen as the FIRST step instead of opening the wound at the bedside.",
   "viva": "Examiner: 'PACU, neck swelling, can't breathe after thyroidectomy — what first?' Open the wound at the bedside, evacuate clot, then theatre; call airway team early. ISBAR escalation to anaesthetics/surgeon. Consent (pre-op) point: bleeding/airway haematoma is why patients are observed and not same-day discharged unsupervised.",
   "mnemonic": "'SCOOP it out at the bedside' (Skin exposure, Cut sutures, Open skin, Open straps, Pack) — decompress THEN theatre.",
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Expanding neck + airway distress post-thyroidectomy</div><div class=\"gv-step\">Sit up, O2, call airway team</div><div class=\"gv-step\">OPEN WOUND AT BEDSIDE: remove clips/sutures, evacuate clot</div><div class=\"gv-step\">THEN theatre for haemostasis + definitive airway</div></div><div class=\"gv-pills\"><span class=\"gv-pill\">Decompress before transfer</span><span class=\"gv-pill\">Bedside clip-remover mandatory</span></div>",
   "source": "DAS/BAETS/ENT-UK multidisciplinary consensus on management of haematoma after thyroid surgery (Anaesthesia 2022; Iliff et al.); RCSI neck haematoma guideline; consistent with ANZ surgical/anaesthetic practice (current)",
   "tags": [
    "post-thyroidectomy",
    "airway haematoma",
    "neck haematoma",
    "SCOOP",
    "surgical emergency",
    "decompression"
   ],
   "verified": true,
   "title": "Post-thyroidectomy AIRWAY HAEMATOMA",
   "subtitle": "the bedside open-the-wound emergency",
   "id": "surg-breast-endocrine-10"
  },
  {
   "topic": "Post-thyroidectomy HYPOCALCAEMIA — timing, signs, and the threshold to act",
   "subarea": "Endocrine surgery",
   "trap": "Tempting wrong answer: reassure and discharge the day-1 post-total-thyroidectomy patient with perioral/fingertip tingling as 'anxiety.' Paraesthesia (circumoral, fingers, toes) is the EARLIEST sign of hypoparathyroid hypocalcaemia from devascularised/removed parathyroids, typically appearing 24-72 h post-op. Check corrected calcium (and many units check an early post-op PTH at ~4 h as a predictor). A low PTH/Ca trajectory predicts symptomatic hypocalcaemia. Don't dismiss tingling.",
   "whatFirst": "Symptomatic tingling post-thyroidectomy -> measure corrected (or ionised) calcium + Mg now; many protocols use early PTH (1-6 h post-op, classically ~4 h) to predict. Treat per severity: oral calcium +/- calcitriol for mild; IV calcium gluconate for severe/tetany/arrhythmia. Always correct low magnesium (refractory hypocalcaemia).",
   "cutoffs": [
    "Hypocalcaemia tends to nadir at 24-72 h post-op (parathyroids slowest); a PTH at ~4-6 h <10 pg/mL is highly predictive of postoperative hypocalcaemia (spec ~100%)",
    "Treat asymptomatic patient if corrected Ca <=1.9 mmol/L (<=7.5 mg/dL), or any symptomatic/severe -> IV",
    "IV: ~10 mL 10% calcium gluconate (approx 2.2 mmol elemental Ca) slow IV for acute symptomatic; oral maintenance ~1500-2000 mg elemental Ca/day +/- calcitriol",
    "Correct hypomagnesaemia — low Mg causes PTH resistance/refractory hypocalcaemia"
   ],
   "discriminator": "Hypocalcaemia (this card): perioral/peripheral tingling, Chvostek (tap facial nerve -> facial twitch), Trousseau (carpopedal spasm with BP cuff), prolonged QT, +/- stridor (laryngospasm). Distinguish from airway HAEMATOMA (next card): haematoma = visible swelling/tight neck/respiratory distress within hours, NOT tingling. Don't confuse the two emergencies.",
   "redFlags": "Tetany, seizures, laryngospasm/stridor, prolonged QT or arrhythmia, carpopedal spasm -> IV calcium gluconate + cardiac monitoring immediately. Refractory despite calcium -> check and replace magnesium.",
   "mcqTrap": "Attributing day-1 perioral tingling to 'anxiety/hyperventilation' and not checking calcium; or giving IV calcium without cardiac monitoring; or forgetting magnesium in refractory cases.",
   "viva": "Examiner: 'Day-1 post-total-thyroidectomy, tingling fingers — what first?' Corrected Ca + Mg now, assess Chvostek/Trousseau/ECG, treat by severity. Escalation ISBAR if tetany/QT. Consent (pre-op) discriminator: permanent hypoparathyroidism risk after total thyroidectomy.",
   "mnemonic": "'CATs go numb': Chvostek, Trousseau, perioral/peripheral paraesthesia = hypoCalcaemia. Refractory? 'Magnesium is the master.'",
   "source": "eTG (Therapeutic Guidelines, current) hypocalcaemia; post-thyroidectomy PTH-predictor literature (Gland Surgery; 4-6 h PTH cut-offs)",
   "tags": [
    "post-thyroidectomy",
    "hypocalcaemia",
    "hypoparathyroidism",
    "Chvostek",
    "Trousseau",
    "magnesium",
    "PTH"
   ],
   "verified": true,
   "title": "Post-thyroidectomy HYPOCALCAEMIA",
   "subtitle": "timing, signs, and the threshold to act",
   "id": "surg-breast-endocrine-11"
  },
  {
   "topic": "Thyroid nodule work-up — the ORDER (TSH first, then USS; FNA is NOT the first test)",
   "subarea": "Endocrine surgery",
   "trap": "The single most tempting wrong answer is to send the palpable thyroid nodule straight for FNA. WRONG SEQUENCE. The correct first investigations are TSH (thyroid function) + dedicated thyroid ultrasound. The TSH result branches the pathway: a SUPPRESSED/low TSH means the nodule may be autonomously hyperfunctioning ('hot') — you do a Tc-99m pertechnetate (radionuclide) uptake scan, NOT an FNA, because hot nodules are almost never malignant and FNA is uninterpretable. Only if TSH is normal/high do you proceed to ultrasound risk-stratification (ACR TI-RADS) and FNA. So: never FNA before you know the TSH.",
   "whatFirst": "TSH + dedicated thyroid USS. If TSH suppressed -> Tc-99m uptake scan (look for hot nodule), do NOT FNA. If TSH normal/high -> TI-RADS stratify -> FNA per size threshold.",
   "cutoffs": [
    "FNA size thresholds by ACR TI-RADS: TR5 (high suspicion, >20% malignancy) >=1 cm; TR4 (moderate, 5-20%) >=1.5 cm; TR3 (mild, ~2-5%) >=2.5 cm; TR1-2 no FNA",
    "Suppressed TSH -> radionuclide scan first (hot nodule = ~no FNA)",
    "Bethesda V-VI (suspicious/malignant) -> refer thyroid surgeon; Bethesda III-IV (indeterminate, ~10-40% risk) -> repeat FNA / molecular / diagnostic lobectomy"
   ],
   "discriminator": "Hot (hyperfunctioning, suppressed TSH) nodule = benign, scan not FNA. Cold/normal-TSH solid hypoechoic nodule = FNA. Molecular testing (Afirma/ThyroSeq) for Bethesda III/IV is routine in USA but NOT subsidised/routinely available in Australia.",
   "redFlags": "Hard fixed nodule, rapid growth, hoarseness (recurrent laryngeal nerve), dysphagia, cervical lymphadenopathy, prior head/neck irradiation, family history MEN2/medullary cancer -> urgent surgical referral regardless of size.",
   "mcqTrap": "'Next best step = FNA' chosen before TSH/USS, OR doing FNA on a patient with suppressed TSH (should be uptake scan).",
   "viva": "Examiner probes the sequence: 'You have a 2 cm thyroid nodule — what first?' Answer TSH + USS, then explain the suppressed-TSH branch to scintigraphy. Discriminator probed: hot vs cold nodule.",
   "mnemonic": "TSH-USS-FNA in that order: 'Think, Look, then Stick.' Suppressed TSH = 'Hot = Not' (not for FNA).",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>TI-RADS</th><th>Malignancy risk</th><th>FNA if nodule</th></tr></thead><tbody><tr><td>TR1-2</td><td>benign / not suspicious</td><td>No FNA</td></tr><tr><td>TR3</td><td>~2-5%</td><td>&ge;2.5 cm</td></tr><tr><td>TR4</td><td>5-20%</td><td>&ge;1.5 cm</td></tr><tr><td>TR5</td><td>&gt;20%</td><td>&ge;1 cm</td></tr></tbody></table>",
   "source": "Australian Prescriber 'Investigating thyroid nodules'; ACR TI-RADS white paper (J Am Coll Radiol); used in Australia/NZ per Mater/SVPH thyroid nodule guidance",
   "tags": [
    "thyroid",
    "nodule",
    "TI-RADS",
    "FNA",
    "TSH",
    "scintigraphy"
   ],
   "verified": true,
   "title": "Thyroid nodule work-up",
   "subtitle": "the ORDER (TSH first, then USS; FNA is NOT the first test)",
   "id": "surg-breast-endocrine-12"
  },
  {
   "topic": "Multidisciplinary team (MDT) — when discussion is mandated and the 'who decides surgery' trap",
   "subarea": "Surgical oncology principles",
   "trap": "Australian standard: EVERY breast cancer should be discussed at an MDT meeting at least once, IDEALLY BEFORE any treatment (including surgery) so neoadjuvant therapy can be considered. The exam trap is the patient who is 'keen for surgery next week' — the gotcha is that booking definitive surgery before MDT/biomarker results can deny appropriate neoadjuvant therapy (e.g. HER2+/TNBC) and is the wrong answer.",
   "whatFirst": "Triple assessment complete (clinical + imaging + core biopsy with ER/PR/HER2 and grade) → MDT discussion → THEN treatment sequencing decision (neoadjuvant vs upfront surgery).",
   "discriminator": "Core biopsy (gives histology + receptors, preserves architecture for grading) is the diagnostic standard — distinguish from FNA, which gives cytology only (cannot reliably grade, cannot assess invasion vs in-situ, no receptor architecture). MCQ favourite: FNA is NOT adequate to plan definitive cancer management.",
   "redFlags": "Proceeding to mastectomy/WLE without receptor status or without MDT in a patient who may benefit from neoadjuvant systemic therapy.",
   "mcqTrap": "'Book WLE + SLNB now' for a 3cm HER2+ or triple-negative tumour — wrong; these should go to MDT for neoadjuvant therapy consideration first.",
   "mnemonic": "MDT core members: 'SPRO-N-C' — Surgeon, Pathologist, Radiologist, Radiation + medical Oncologist, breast care Nurse, Coordinator (+ patient preferences).",
   "viva": "ISBAR a new biopsy-proven cancer for MDT: Situation (new T2 N0 grade-3 ER−/HER2+), Background, Assessment (triple-assessment concordant), Recommendation (discuss neoadjuvant). Examiner discriminator: 'Why MDT before surgery?' → to avoid committing to surgery in a tumour where neoadjuvant therapy changes the operation/axilla and improves outcomes.",
   "source": "Cancer Australia — Multidisciplinary care principles; Guidance for the management of early breast cancer (current).",
   "tags": [
    "MDT",
    "multidisciplinary",
    "triple-assessment",
    "core-biopsy",
    "MEDI8403",
    "MEDI8401"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Triple assessment (clinical + imaging + core biopsy w/ ER/PR/HER2 + grade)</div><div class=\"gv-step\">MDT discussion (before treatment)</div><div class=\"gv-step\">Sequencing decision: neoadjuvant vs upfront surgery</div></div>",
   "title": "Multidisciplinary team (MDT)",
   "subtitle": "when discussion is mandated and the 'who decides surgery' trap",
   "id": "surg-breast-endocrine-13"
  },
  {
   "topic": "Neoadjuvant vs adjuvant — definitions, the indications that flip the sequence, and the residual-disease escalation",
   "subarea": "Surgical oncology principles",
   "trap": "Neoadjuvant = systemic therapy BEFORE surgery; adjuvant = AFTER. The high-yield gotcha is the modern indication: neoadjuvant chemo (± anti-HER2) is now standard-of-care for HER2-positive and triple-negative tumours that are >2cm and/or node-positive — not just 'inoperable/locally advanced' disease. The other gotcha: neoadjuvant does NOT improve overall survival vs adjuvant for the same regimen — its wins are downstaging (more breast-conserving surgery, more axillary de-escalation) and giving in-vivo response/pCR information.",
   "whatFirst": "If HER2+ or TNBC and >2cm or node+ → neoadjuvant systemic therapy first, then surgery. If hormone-receptor+/HER2− low-risk early disease → usually surgery first, adjuvant therapy after.",
   "discriminator": "pCR (pathological complete response, no residual invasive disease) is prognostic and guides ESCALATION of adjuvant therapy if NOT achieved: HER2+ with residual invasive disease → switch to adjuvant T-DM1 (KATHERINE); TNBC with residual disease → adjuvant capecitabine (CREATE-X). Mimic to avoid: pCR does not mean 'stop all therapy' — anti-HER2 still completes ~1yr; endocrine therapy still given if ER+.",
   "redFlags": "Inflammatory breast cancer and locally advanced/inoperable disease = neoadjuvant FIRST, never upfront surgery.",
   "mcqTrap": "'Neoadjuvant chemotherapy improves overall survival compared with adjuvant' — FALSE for equivalent regimens; survival is equivalent. The benefit is downstaging + response information (and response-adapted escalation).",
   "mnemonic": "Neo for 'HOT' tumours that respond: Her2+, triple-neg, Operable-but-large/node+. Residual disease escalation: HER2 → T-DM1; TNBC → capecitabine.",
   "cutoffs": [
    "Neoadjuvant SOC threshold (HER2+/TNBC): >2cm and/or node-positive",
    "KATHERINE: HER2+ residual invasive disease → 14 cycles adjuvant T-DM1 (~50% lower recurrence/death vs trastuzumab)",
    "CREATE-X: HER2-negative (esp. TNBC) residual disease → ~6–8 cycles adjuvant capecitabine"
   ],
   "viva": "Consent/escalation angle: counsel a HER2+ patient pre-neoadjuvant that the surgery + pathology will determine whether they need a SWITCH of adjuvant drug (T-DM1) if residual disease remains. Examiner discriminator: 'Survival benefit of neoadjuvant?' Answer: equivalent OS to adjuvant; benefit is BCS rate + de-escalated axilla + prognostic pCR guiding escalation.",
   "source": "Cancer Australia — Neoadjuvant therapy (current); KATHERINE (NEJM 2019); CREATE-X (NEJM 2017); eviQ protocols (current).",
   "tags": [
    "neoadjuvant",
    "adjuvant",
    "pCR",
    "KATHERINE",
    "CREATE-X",
    "sequencing",
    "MEDI8403",
    "MEDI8401"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">HER2+ or TNBC, >2cm and/or node+</div><div class=\"gv-step\">Neoadjuvant systemic therapy</div><div class=\"gv-step\">Surgery + assess pathology</div><div class=\"gv-step\">pCR? No residual → complete planned Rx · Residual: HER2+ → T-DM1 / TNBC → capecitabine</div></div>",
   "title": "Neoadjuvant vs adjuvant",
   "subtitle": "definitions, the indications that flip the sequence, and the residual-disease escalation",
   "id": "surg-breast-endocrine-14"
  },
  {
   "topic": "Positive sentinel node — when you can STOP (Z0011/AMAROS) vs proceed to ALND (the de-escalation trap)",
   "subarea": "Surgical oncology principles",
   "trap": "A positive sentinel node no longer automatically means completion ALND. Z0011: clinical T1–T2, cN0, having BREAST-CONSERVING surgery + whole-breast radiotherapy + systemic therapy, with 1–2 positive sentinel nodes → can OMIT completion ALND (no survival difference). AMAROS: a positive sentinel node can be managed with axillary RADIOTHERAPY instead of ALND with equivalent control and less lymphoedema. The gotcha: these de-escalation criteria are narrow — they do NOT apply to mastectomy-without-RT, ≥3 positive nodes, or matted/clinically positive nodes.",
   "whatFirst": "Positive SLN → check Z0011 eligibility (BCS + planned whole-breast RT + cT1–2 + 1–2 +SLN + systemic therapy). If all met → omit ALND. If criteria not met → ALND or axillary RT (AMAROS) per MDT.",
   "discriminator": "Z0011 (omit axillary treatment entirely in the eligible BCS group) vs AMAROS (substitute axillary RT for ALND when axillary treatment is still wanted, e.g. mastectomy or >2 nodes). Macrometastasis vs micrometastasis (>0.2–2mm, pN1mi) vs isolated tumour cells (≤0.2mm, pN0(i+)) — ITCs/micromets generally don't mandate ALND.",
   "redFlags": "≥3 positive sentinel nodes, gross extranodal extension, matted/clinically positive nodes, or no planned radiotherapy → completion ALND / fuller axillary management.",
   "mcqTrap": "'Completion ALND' for a woman having lumpectomy + WBRT with 1 positive sentinel node — wrong in the Z0011 era; omit ALND.",
   "mnemonic": "'1 or 2 + lumpectomy + radiation = leave the axilla (Z0011).' Need axillary control but want low morbidity → radiate it (AMAROS).",
   "cutoffs": [
    "Z0011: cT1–2, cN0, BCS+WBRT, 1–2 +SLN → omit ALND",
    "AMAROS: +SLN → axillary RT non-inferior to ALND (lymphoedema ~11% RT vs ~23% ALND)",
    "Micromet pN1mi >0.2–2mm; ITC pN0(i+) ≤0.2mm"
   ],
   "viva": "Examiner discriminator: 'One sentinel node positive — what next?' Lead with whether Z0011 criteria are met (BCS + WBRT) → omit ALND; if mastectomy or ineligible, offer AMAROS-style axillary RT vs ALND, framing the trade-off as equivalent control with markedly less lymphoedema from RT.",
   "source": "ACOSOG Z0011 (10-yr, JAMA/JCO 2016–17); EORTC 10981-22023 AMAROS (Lancet Oncol 2014; 10-yr 2023); Cancer Australia axillary guidance (current).",
   "tags": [
    "axilla",
    "Z0011",
    "AMAROS",
    "ALND",
    "de-escalation",
    "MEDI8403",
    "MEDI8401"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">+SLN + BCS + WBRT + 1–2 nodes → omit ALND (Z0011)</span><span class=\"gv-pill\">Need axillary Rx, want less morbidity → axillary RT (AMAROS)</span><span class=\"gv-pill\">≥3 nodes / matted / no RT → ALND</span></div>",
   "title": "Positive sentinel node",
   "subtitle": "when you can STOP (Z0011/AMAROS) vs proceed to ALND (the de-escalation trap)",
   "id": "surg-breast-endocrine-15"
  },
  {
   "topic": "Principles of oncological resection — R-status, en-bloc excision, and the 'debulk it' trap",
   "subarea": "Surgical oncology principles",
   "trap": "Curative cancer surgery aims for an R0 resection (microscopically clear margins). R1 = microscopic tumour at margin; R2 = macroscopic residual tumour. The gotcha: in curative-intent solid-tumour surgery you do NOT 'debulk' — incomplete (R2) resection of a potentially curable cancer is the wrong answer; you either achieve R0 or convert to a different strategy (neoadjuvant downsizing, or palliative intent). Also: never breach/incise the tumour ('do not violate the tumour') — biopsy tracts and skin over the tumour are excised en bloc.",
   "whatFirst": "Define intent (curative vs palliative) at MDT before cutting. Curative → plan for R0 with en-bloc excision of biopsy tract; if R0 not achievable upfront → neoadjuvant downstaging rather than a planned incomplete operation.",
   "discriminator": "R-status (margin-based, applies to the resection) vs T/N staging (tumour burden). Distinguish curative debulking myth (not done in most solid tumours) from genuine cytoreduction indications (e.g. ovarian cancer, some neuroendocrine) — those are the exception, not breast/most solid tumours.",
   "redFlags": "Tumour spillage / capsule breach intra-op, positive R1 margins on frozen/final path → re-excision or adjuvant escalation; macroscopic residual (R2) means the curative plan has failed — re-stage and re-plan.",
   "mcqTrap": "'Debulk the primary to relieve burden' offered as curative management of an operable solid tumour — wrong; aim R0 or neoadjuvant downstage. (Debulking is appropriate mainly in ovarian cancer.)",
   "mnemonic": "R0 = Right (clear) · R1 = Residual microscopic · R2 = Really there (macroscopic). 'Don't cut into cancer, cut around it (en bloc).'",
   "cutoffs": [
    "R0: no residual tumour (margins clear)",
    "R1: microscopic residual (tumour at ink)",
    "R2: macroscopic residual tumour"
   ],
   "viva": "Examiner discriminator: 'Margins come back R1 — implications?' Answer: microscopic residual → re-excision to R0 if feasible, otherwise adjuvant radiotherapy/systemic escalation per MDT; contrast with R2 (macroscopic) which signals the curative resection was not achieved. Consent point: discuss possibility of needing more surgery once final margins known.",
   "source": "UICC R-classification (general surgical-oncology principle); RACS/BreastSurgANZ principles of curative resection; Cancer Australia MDT guidance (current).",
   "tags": [
    "R0",
    "margins",
    "resection",
    "en-bloc",
    "curative-intent",
    "MEDI8403",
    "MEDI8401"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>R</th><th>Meaning</th><th>Implication</th></tr></thead><tbody><tr><td>R0</td><td>No residual tumour</td><td>Goal of curative surgery</td></tr><tr><td>R1</td><td>Microscopic at margin</td><td>Re-excise to R0 / adjuvant Rx</td></tr><tr><td>R2</td><td>Macroscopic residual</td><td>Curative plan failed → re-stage/re-plan</td></tr></tbody></table>",
   "title": "Principles of oncological resection",
   "subtitle": "R-status, en-bloc excision, and the 'debulk it' trap",
   "id": "surg-breast-endocrine-16"
  },
  {
   "topic": "Sentinel lymph node biopsy (SLNB) — who gets it, who does NOT, and the 'palpable node' trap",
   "subarea": "Surgical oncology principles",
   "trap": "SLNB is the axillary staging standard for clinically/radiologically NODE-NEGATIVE early invasive breast cancer — it replaces routine ALND and reduces lymphoedema. Gotcha: SLNB is NOT for a clinically/biopsy-positive axilla (those need ALND or neoadjuvant pathway), and is generally NOT done for pure DCIS (no metastatic risk) — EXCEPT when mastectomy is planned for DCIS, or there is a mass/high-grade extensive DCIS suspicious for occult invasion (because SLNB can't be done later once the breast is removed).",
   "whatFirst": "Confirm axilla is clinically/US node-negative (and FNA/core negative if a node was sampled) → SLNB at the time of breast surgery. If node is biopsy-proven positive → ALND or neoadjuvant therapy pathway, NOT primary SLNB.",
   "discriminator": "Dual-tracer SLNB = blue dye + radioisotope (technetium-99m). Identify the sentinel node as the first-draining node. Distinguish SLNB (staging, low morbidity) from ALND (therapeutic clearance, high lymphoedema risk). Contraindication trap: clinically positive nodes, inflammatory cancer.",
   "redFlags": "Blue-dye anaphylaxis risk (consent); avoid blue dye in pregnancy (use isotope); radioisotope is safe in pregnancy at low dose but discuss.",
   "mcqTrap": "'Perform ALND' for a clinically node-negative T1 tumour — wrong; SLNB is correct and ALND over-treats. Also wrong: routine SLNB for small low-grade DCIS treated by WLE.",
   "mnemonic": "SLNB = for the 'quiet axilla' (cN0). Positive axilla = no shortcut. DCIS-going-to-mastectomy → do SLNB now (can't go back).",
   "cutoffs": [
    "Indication: clinically/US node-negative early invasive breast cancer",
    "DCIS: SLNB if mastectomy planned or suspicion of invasion",
    "Dual tracer: blue dye + Tc-99m"
   ],
   "viva": "Consent for SLNB: explain blue dye (transient blue urine/skin tattoo, rare anaphylaxis), small lymphoedema risk (lower than ALND), and that a positive sentinel node may change management. Examiner discriminator: 'Why SLNB not ALND?' → equivalent staging/survival in cN0 with far less lymphoedema/arm morbidity.",
   "source": "BreastSurgANZ position; Cancer Australia, Guidance for the management of early breast cancer — Axillary surgery (current).",
   "tags": [
    "sentinel-node",
    "SLNB",
    "ALND",
    "axilla",
    "DCIS",
    "MEDI8403",
    "MEDI8401"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">cN0 early invasive → SLNB (dual tracer)</span><span class=\"gv-pill\">Biopsy-proven node+ → ALND / neoadjuvant pathway</span><span class=\"gv-pill\">DCIS → SLNB only if mastectomy planned or suspected invasion</span></div>",
   "title": "Sentinel lymph node biopsy (SLNB)",
   "subtitle": "who gets it, who does NOT, and the 'palpable node' trap",
   "id": "surg-breast-endocrine-17"
  },
  {
   "topic": "SLNB after neoadjuvant chemotherapy — timing and the false-negative-rate trap",
   "subarea": "Surgical oncology principles",
   "trap": "For a patient who is cN0 at presentation and gets neoadjuvant chemo, SLNB is done AFTER neoadjuvant therapy (at surgery), not before — this avoids two axillary operations and lets chemo clear the axilla. The gotcha is the patient who was NODE-POSITIVE then converted to clinically negative after chemo: SLNB has a higher false-negative rate here, so techniques to lower it are required — dual tracer, removing ≥3 sentinel nodes, and targeted axillary dissection (retrieving the originally-biopsied clipped node).",
   "whatFirst": "cN0 at baseline + neoadjuvant → single SLNB after chemo at definitive surgery. Biopsy-proven node-positive at baseline → clip the positive node; after chemo, if clinically responding, do targeted axillary dissection (SLNB + clipped node retrieval), and if residual nodal disease → ALND.",
   "discriminator": "Targeted axillary dissection (clip + retrieve) vs plain SLNB — TAD lowers the false-negative rate to acceptable levels in node-positive-converted-to-negative patients. Distinguish from upfront-surgery SLNB where false-negative concerns are lower.",
   "redFlags": "Residual nodal disease after neoadjuvant (non-pCR axilla) → completion ALND; this is also a trigger for adjuvant escalation (T-DM1 / capecitabine per receptor type).",
   "mcqTrap": "'Do SLNB before starting neoadjuvant chemotherapy' in a cN0 patient — generally wrong; do it after, to avoid two operations and benefit from nodal downstaging.",
   "mnemonic": "Node+ converting to node−: 'CLIP it, then grab ≥3' (TAD + dual tracer) to beat the false-negative rate.",
   "cutoffs": [
    "Acceptable SLNB FNR target: <10%",
    "Retrieve ≥3 sentinel nodes + dual tracer in post-neoadjuvant node-positive→negative",
    "Residual nodal disease → ALND"
   ],
   "viva": "Examiner discriminator: 'Node-positive at diagnosis, clinical CR after chemo — how do you stage the axilla surgically?' Answer: targeted axillary dissection (retrieve clipped node + sentinel nodes, dual tracer, ≥3 nodes); ALND if residual disease found. Consent: explain higher uncertainty and possible conversion to full clearance.",
   "source": "Cancer Australia/BreastSurgANZ axillary guidance (current); SENTINA & ACOSOG Z1071 (FNR reduced with ≥3 nodes/dual tracer/TAD).",
   "tags": [
    "sentinel-node",
    "neoadjuvant",
    "TAD",
    "targeted-axillary-dissection",
    "false-negative",
    "MEDI8403",
    "MEDI8401"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">cN0 at baseline → single SLNB AFTER neoadjuvant</div><div class=\"gv-step\">Node+ at baseline → clip node, give chemo</div><div class=\"gv-step\">Clinical response → TAD (clipped node + ≥3 SLN, dual tracer)</div><div class=\"gv-step\">Residual nodal disease → ALND</div></div>",
   "title": "SLNB after neoadjuvant chemotherapy",
   "subtitle": "timing and the false-negative-rate trap",
   "id": "surg-breast-endocrine-18"
  },
  {
   "topic": "Surgical margins — the exact mm thresholds (invasive vs DCIS) and the 'wider is better' trap",
   "subarea": "Surgical oncology principles",
   "trap": "Two DIFFERENT rules and exams swap them. INVASIVE cancer: adequate margin = 'NO INK ON TUMOUR' (0mm clear is acceptable) — re-excision for tumour AT the inked margin. DCIS: adequate margin = 2mm (with whole-breast radiotherapy). The gotcha trap: a wider margin (e.g. 5mm/10mm) for invasive disease does NOT reduce local recurrence over 'no ink on tumour' and means unnecessary tissue removal — so demanding a bigger clear margin for invasive cancer is the wrong answer.",
   "whatFirst": "Check histology type first. Invasive → 'no ink on tumour' clear = adequate. DCIS → need ≥2mm. If margin involved (or DCIS <2mm) → offer re-excision; consider mastectomy if re-excision won't give an acceptable cosmetic/oncological result.",
   "discriminator": "Cancer Australia practical thresholds (aligned NICE 2018): invasive or DCIS AT the radial margin (tumour on ink, 0mm) → offer further surgery; invasive/DCIS within >0 but <2mm of radial margin → CONSIDER further surgery (MDT decision). Distinguish radial (true surgical) margins from anterior (skin) and posterior (pectoral fascia) margins where 'no ink' may suffice.",
   "redFlags": "Persistently positive margins after re-excision, or extensive DCIS component → mastectomy discussion at MDT.",
   "mcqTrap": "Stating invasive breast cancer needs a '2mm' or '1cm' clear margin — wrong; invasive standard is no ink on tumour. The 2mm rule belongs to DCIS.",
   "mnemonic": "'INk = INvasive (no ink on tumour); 2 for the 2 letters that aren't there yet — DCIS needs 2mm.'",
   "cutoffs": [
    "Invasive (with WBRT): no ink on tumour (0mm clear adequate)",
    "DCIS (with WBRT): 2mm",
    "At margin (tumour on ink, 0mm): offer further surgery",
    ">0–<2mm radial: consider further surgery (MDT)"
   ],
   "viva": "Examiner discriminator: 'Your invasive margin is clear by 1mm — re-operate?' Answer: for invasive disease 'no ink on tumour' is adequate, so 1mm clear does not mandate re-excision; for DCIS the same 1mm would be inadequate (<2mm). Consent point: warn pre-op that a proportion of BCS may need re-excision for margins.",
   "source": "Cancer Australia, Guidance for the management of early breast cancer — Surgery (current, aligned NICE 2018); SSO–ASTRO consensus (invasive, no ink on tumour); SSO–ASTRO–ASCO DCIS consensus (2mm).",
   "tags": [
    "margins",
    "BCS",
    "DCIS",
    "no-ink-on-tumour",
    "re-excision",
    "MEDI8403",
    "MEDI8401"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Histology (with WBRT)</th><th>Adequate margin</th><th>Action if not met</th></tr></thead><tbody><tr><td>Invasive</td><td>No ink on tumour</td><td>Re-excise only if tumour AT ink (0mm)</td></tr><tr><td>DCIS</td><td>≥2 mm</td><td>Re-excise if <2 mm</td></tr></tbody></table>",
   "title": "Surgical margins",
   "subtitle": "the exact mm thresholds (invasive vs DCIS) and the 'wider is better' trap",
   "id": "surg-breast-endocrine-19"
  },
  {
   "topic": "TNM staging — the exact size cut-offs that get tested (T1 sub-stages, T2/T3, and the prognostic-stage trap)",
   "subarea": "Surgical oncology principles",
   "trap": "MCQs love the borderline numbers. T1 = ≤20mm, T2 = >20 to 50mm, T3 = >50mm. T1 SUBDIVIDES: T1mi ≤1mm (microinvasion), T1a >1–5mm, T1b >5–10mm, T1c >10–20mm. T4 is NOT about size at all — it is chest-wall (T4a), skin ulceration/satellite nodules (T4b), both (T4c), or inflammatory (T4d). The tempting wrong move is calling a 6cm tumour T4: a huge mobile tumour with no skin/chest-wall involvement is still T3.",
   "whatFirst": "Decide stage from the WORST feature: any skin/chest-wall/inflammatory finding overrides size → T4 regardless of cm. Then size for T1–T3; then nodes (cN clinical vs pN pathological); then M.",
   "discriminator": "T4b (skin ulceration/satellite skin nodules/peau d'orange limited) vs T4d inflammatory (diffuse erythema + oedema over ≥1/3 of breast, often no discrete mass) — inflammatory is a CLINICAL diagnosis and is always at least stage III.",
   "redFlags": "Peau d'orange / diffuse erythema = inflammatory (T4d) = locally advanced → straight to systemic therapy first, NOT upfront surgery. Supraclavicular nodes = N3c.",
   "mcqTrap": "Choosing T4 for a large (e.g. 6cm) tumour because it 'sounds advanced'. Size alone never makes T4 — 6cm with skin/chest-wall free is T3.",
   "mnemonic": "T sizes: 'TWO–FIVE' → 2cm and 5cm are the only size lines (≤2 / 2–5 / >5). T4 = skin/chest/inflam, no cm.",
   "cutoffs": [
    "T1mi: ≤1mm",
    "T1a: >1–5mm",
    "T1b: >5–10mm",
    "T1c: >10–20mm",
    "T2: >20–50mm",
    "T3: >50mm",
    "T4: chest wall/skin/inflammatory (size-independent)"
   ],
   "viva": "Examiner probe: 'Stage this clinically.' Lead with the discriminator — explicitly state you would exclude skin/chest-wall involvement and inflammatory change FIRST (overrides size), then quote the 20mm/50mm lines. Mention cTNM (clinical/pre-treatment) vs pTNM and that AJCC 8th adds a prognostic stage incorporating grade + ER/PR/HER2.",
   "source": "AJCC Cancer Staging Manual 8th edition (in use from 1 Jan 2018); Cancer Australia, Guidance for the management of early breast cancer (current).",
   "tags": [
    "staging",
    "TNM",
    "T-category",
    "inflammatory",
    "MEDI8403",
    "MEDI8401"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>T</th><th>Definition</th></tr></thead><tbody><tr><td>T1mi</td><td>≤1 mm (microinvasion)</td></tr><tr><td>T1a/b/c</td><td>>1–5 / >5–10 / >10–20 mm</td></tr><tr><td>T2</td><td>>20–50 mm</td></tr><tr><td>T3</td><td>>50 mm</td></tr><tr><td>T4a/b/c/d</td><td>chest wall / skin ulcer-nodules / both / inflammatory (size-independent)</td></tr></tbody></table>",
   "title": "TNM staging",
   "subtitle": "the exact size cut-offs that get tested (T1 sub-stages, T2/T3, and the prognostic-stage trap)",
   "id": "surg-breast-endocrine-20"
  }
 ]
}
);
