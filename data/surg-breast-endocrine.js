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
   "trap": "- Routine systemic staging (**CT chest/abdo/pelvis, bone scan, PET**) is NOT recommended for asymptomatic early breast cancer\n  - Low yield and high false-positive rate in **Stage I–II** disease\n- Reserve systemic staging for:\n  - **Locally advanced (Stage III)**\n  - Clinically **node-positive** disease\n  - **Inflammatory** breast cancer\n  - **Symptomatic or biochemically suspicious** disease\n  - Before **neoadjuvant therapy**\n- Mandatory on every invasive cancer: **ER, PR and HER2** receptor status (+/- Ki-67)\n  - These define **molecular subtype** and drive treatment\n  - Requires **core biopsy** (not FNA) to obtain receptor status",
   "source": "Cancer Australia — 'Stages of breast cancer' (Stage I/IIA/IIB = early breast cancer; routine staging not needed); AJCC 8th ed TNM (anatomical + biomarkers)",
   "discriminator": "- **Stage I–II asymptomatic** → no routine CT/bone scan; staging = clinical + imaging + receptors\n- **Stage III / node-positive / inflammatory / pre-neoadjuvant** → staging CT (chest CT has largely replaced CXR in AU) + bone scan +/- PET\n- **Sentinel node biopsy (SLNB)** is for clinically/radiologically node-NEGATIVE axilla\n- Clinically **node-positive** → US-guided core/FNA then axillary clearance (not SLNB as the staging step)",
   "redFlags": "- **Bone pain** → justify systemic staging\n- **Abnormal LFTs/ALP** → justify systemic staging\n- **Dyspnoea** → justify systemic staging\n- **Hypercalcaemia** → justify systemic staging\n- **Large/node-positive tumour** → justify systemic staging",
   "mcqTrap": "- Tempting wrong answer: fit woman with **1.5 cm node-negative invasive ductal carcinoma** → 'arrange staging CT and bone scan'\n  - Wrong — routine systemic staging is not indicated in **asymptomatic Stage I–II** disease\n- Also wrong: relying on **FNA cytology** for receptor status\n  - Need **core histology** for receptor status",
   "mnemonic": "'Small & node-negative → don't go hunting.' Staging scans follow Stage III, symptoms, or neoadjuvant plans.",
   "viva": "- Examiner: 'Newly diagnosed T1N0 invasive cancer — do you order a bone scan and CT?'\n- Say **no** for asymptomatic early disease\n- Explain you'd ensure **ER/PR/HER2 from core biopsy**\n- Reserve systemic staging for **advanced/symptomatic** disease or neoadjuvant candidates\n- Mention **MDT discussion**",
   "whatFirst": "- Confirm diagnosis with **core biopsy** including ER/PR/HER2\n- **Assess the axilla** clinically and radiologically\n- Reserve systemic staging (CT/bone scan/PET) for:\n  - **Advanced, symptomatic, node-positive, inflammatory**, or pre-neoadjuvant disease",
   "cutoffs": [
    "Routine systemic staging not recommended for asymptomatic clinical **Stage I–II**",
    "Stage I, IIA and IIB = **early breast cancer** (Cancer Australia)",
    "**ER/PR/HER2** mandatory on all invasive cancers (core biopsy)",
    "**SLNB** if clinically node-negative; axillary US-guided biopsy if node-positive"
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
   "trap": "- The age threshold examiners test is **35**\n- Symptomatic woman **under 35**: **ultrasound** is first-line\n  - Dense young breast tissue makes mammography insensitive\n- Symptomatic woman **35 and over**: **mammography** is first-line, usually with targeted ultrasound\n- This applies to **symptomatic investigation** — do not confuse with BreastScreen\n  - BreastScreen = asymptomatic screening, free mammogram, target age **50–74**, available from 40\n- A **symptomatic lump** is investigated diagnostically, NOT sent to BreastScreen",
   "source": "Cancer Australia — 'Investigation of a new breast symptom: a guide for General Practitioners'; BreastScreen Australia program (target 50–74, eligible from 40)",
   "discriminator": "- Symptomatic **<35** → US first (add mammo only if US/clinical findings suspicious)\n- Symptomatic **≥35** → mammo + targeted US\n- **Asymptomatic screening** = BreastScreen mammogram (**50–74** actively invited; women aged 40–49 and 75+ also eligible to attend)\n  - Never the answer for a **new lump**",
   "redFlags": "- A young woman's lump dismissed because **'too young for cancer'**\n  - Still triple-assess with **US-led imaging** if clinically indicated",
   "mcqTrap": "- Tempting wrong answer for a **28-year-old** with a new lump: 'arrange a mammogram' or 'refer to BreastScreen'\n  - Wrong — first-line imaging under 35 is **ultrasound**\n  - BreastScreen is for **asymptomatic** women, not a diagnostic pathway",
   "mnemonic": "Under 35 = Ultrasound (both have 'U'-ish young vibe); 35+ = Mammogram first. 'Young breast, sound it; older breast, x-ray it.'",
   "viva": "- Examiner: '28-year-old, new 2 cm lump — first imaging?'\n- Say **ultrasound** first-line, then triple-assess\n- Clarify you would **not use BreastScreen** for a symptomatic patient",
   "whatFirst": "- Symptomatic **<35** → **ultrasound** first\n- Symptomatic **≥35** → **mammography + targeted ultrasound** first\n- Then complete **triple assessment**",
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
   "id": "surg-breast-endocrine-2",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Breast_US_Fibroadenoma_0531092046875_Nevit.jpg",
     "caption": "Breast ultrasound — hypoechoic mass (young woman, <35 years)",
     "alt": "Breast ultrasound showing a hypoechoic mass with irregular margins in a young woman with dense breast tissue — first-line imaging under age 35",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Mammogram_showing_breast_cancer.jpg",
     "caption": "Mammogram — spiculated mass with microcalcifications (woman ≥35 years)",
     "alt": "Mammogram showing a spiculated breast mass with associated microcalcifications — first-line imaging in women aged 35 and over",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Lactational breast abscess — continue feeding + drainage (aspiration before incision)",
   "subarea": "Breast surgery",
   "trap": "- Two exam-catching points:\n- **(1) CONTINUE BREASTFEEDING** from the affected breast (or express if feeding too painful / drain near nipple)\n  - Stopping causes **engorgement** and worsens the abscess\n  - Milk is **safe for the infant**\n- **(2) First-line drainage** where ultrasound/specialist access exists = **ultrasound-guided needle aspiration** under antibiotic cover\n  - Better cosmesis, preserves feeding\n  - **Incision & drainage** reserved for: failed/recurrent aspiration, large/multiloculated, skin necrosis/'pointing', or US unavailable\n- Crucial safety net: if aspiration yields **no fluid**, or **blood-stained (not purulent)** fluid, or a **residual lump** persists → **core biopsy** to exclude inflammatory breast cancer",
   "source": "Cusack & Brennan, Aust Fam Physician 2011 (RACGP) 'Lactational mastitis and breast abscess'; eTG (Therapeutic Guidelines: Antibiotic, current); Australian Breastfeeding Association",
   "discriminator": "- **Mastitis**: diffuse tender erythema, systemic flu-like symptoms, NO discrete fluctuant collection\n  - Clinical diagnosis, no imaging needed initially\n- **Abscess**: additional discrete tense/fluctuant tender lump +/- pointing\n  - Confirm + drain with **ultrasound**\n- Mastitis/abscess **NOT settling** on appropriate antibiotics → ultrasound + consider **inflammatory breast cancer** (peau d'orange, persistent erythema)\n- **Non-lactational/periductal abscess** (subareolar): strongly linked to **smoking** and anaerobes/mixed flora\n  - Recurs/fistula (mammary duct fistula)\n  - Needs **anaerobic cover** and **smoking cessation**",
   "redFlags": "- **Systemic sepsis** (fever, tachycardia, hypotension) → IV antibiotics/admission\n- Abscess not resolving, **no pus on aspiration**, or **persistent mass** → core biopsy for inflammatory cancer\n- **Recurrent subareolar abscess** in a smoker → duct excision",
   "mcqTrap": "- Most tempting wrong answer: **'stop breastfeeding from the affected side'** until the abscess resolves\n  - Wrong — continue feeding/expressing\n- Second trap: jumping straight to **formal incision & drainage in theatre** when US-guided aspiration under antibiotic cover is appropriate first-line",
   "mnemonic": "Abscess A-B-C: Aspirate (US-guided, abx cover) first; Breastfeed/express — keep emptying; Cancer (inflammatory) excluded by Core if no/bloody pus or persistent lump.",
   "viva": "- Examiner: 'Breastfeeding woman, fluctuant tender mass, febrile — manage.'\n- What-first: confirm abscess on **ultrasound**, US-guided **aspiration** with antibiotic cover, **KEEP breastfeeding/expressing**, analgesia\n- Escalate to **I&D** if aspiration fails\n- Safety-net/discriminator the examiner wants: if **no pus or persistent mass** → core biopsy to exclude inflammatory cancer\n- **ISBAR** breast surgeon if not settling or septic",
   "whatFirst": "- Confirm abscess on **ultrasound**\n- **US-guided needle aspiration** with antibiotic cover\n- **Continue breastfeeding/expressing**\n- **Analgesia**\n- Escalate to **I&D** only if: aspiration fails, large/multiloculated, skin necrosis",
   "cutoffs": [
    "~**3%** of lactational mastitis progresses to abscess",
    "eTG mastitis: **flucloxacillin OR dicloxacillin 500 mg** orally 6-hourly (5 days if rapid resolution, otherwise up to 10 days)",
    "Penicillin allergy: **cefalexin 500 mg** 6-hourly (non-severe) OR **clindamycin 450 mg** 8-hourly (severe/immediate)",
    "**US-guided aspiration** first-line where available; I&D if aspiration fails/unavailable, large/multiloculated (**>3–5 cm**) or skin necrosis"
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
   "id": "surg-breast-endocrine-3",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Pecho_enrojecido.jpg/960px-Pecho_enrojecido.jpg",
     "caption": "Lactational breast abscess — fluctuant erythematous swelling",
     "alt": "Lactational breast abscess — localised area of erythema, induration and fluctuance in a breastfeeding woman",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Lactational mastitis — antibiotic thresholds, organism and the conservative-first rule",
   "subarea": "Breast surgery",
   "trap": "- Mastitis is a **clinical diagnosis** — no imaging or culture needed initially\n- Conservative measures come **FIRST** and are not optional:\n  - **Continued effective milk drainage** (feed/express) — the single most important step\n  - Warm compress before feeds\n  - Cold packs after feeds\n  - Analgesia (**paracetamol/NSAID**, both safe in lactation)\n- Antibiotics added when:\n  - **Systemic features** present\n  - No improvement after **~24 hours** of effective drainage\n  - **Cracked-nipple** source identified\n- Commonest organism: **Staphylococcus aureus** — cover accordingly\n- Review at **24–48 hours**; failure to settle triggers ultrasound for abscess AND consideration of **inflammatory breast cancer**",
   "source": "eTG (Therapeutic Guidelines: Antibiotic, current); Cusack & Brennan, Aust Fam Physician 2011 (RACGP)",
   "discriminator": "- **Mastitis** (responds to drainage +/- antibiotics): diffuse erythema, systemic upset\n- **Candidal nipple pain**: intense burning especially after breast empties, **NO erythema** — treat antifungal, not flucloxacillin\n- **Blocked duct/galactocoele**: localised lump, no systemic upset\n- **Inflammatory cancer**: erythema/peau d'orange NOT settling, older/non-lactating\n- **Avoid in breastfeeding**: tetracyclines, ciprofloxacin, chloramphenicol",
   "redFlags": "- **Systemic sepsis** → IV antibiotics +/- admission\n- Not settling at **48 h** → US + ?abscess + ?inflammatory cancer\n- **Recurrent** mastitis → consider underlying mass",
   "mcqTrap": "- Tempting wrong answer: **'stop feeding from the affected breast and start antibiotics'** for early mastitis\n  - Wrong on two counts: continue/intensify drainage; antibiotics not automatically first if no systemic features and drainage not yet optimised\n- Also wrong: **doxycycline/ciprofloxacin** in a breastfeeding woman",
   "mnemonic": "Mastitis = 'Milk out first' — Drainage > Drugs. Drug of choice for Staph: Di/Flu-cloxacillin. Burning pain + no redness after emptying = think Candida, not antibiotics.",
   "viva": "- Examiner: 'Day-10 postpartum, segmental red tender breast, low-grade fever — antibiotic?'\n- Lead with **continued effective drainage + analgesia** and 24–48 h review\n- Antibiotic: **flucloxacillin/dicloxacillin 500 mg orally 6-hourly**\n  - Non-severe pen allergy: **cefalexin**; severe/immediate: **clindamycin**\n- Flag **inflammatory cancer** if it fails to settle",
   "whatFirst": "- **Optimise milk drainage** (feed/express) + analgesia first\n- Add **flucloxacillin/dicloxacillin** if:\n  - Systemic features present\n  - Cracked-nipple source\n  - No improvement after **~24 h**\n- **Review at 24–48 h**",
   "cutoffs": [
    "Most common organism: **Staphylococcus aureus**",
    "**Flucloxacillin / dicloxacillin 500 mg** orally 6-hourly (5 days if rapid resolution, otherwise up to 10 days) — eTG",
    "Non-severe penicillin allergy: **cefalexin 500 mg** 6-hourly; severe/immediate: **clindamycin 450 mg** 8-hourly",
    "Review **24–48 h**; if not settling → ultrasound + consider inflammatory cancer",
    "**Avoid** tetracyclines / ciprofloxacin / chloramphenicol in lactation"
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
   "id": "surg-breast-endocrine-4",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Mama_con_drenaje.jpg/960px-Mama_con_drenaje.jpg",
     "caption": "Lactational mastitis — unilateral erythema, swelling, warmth of breast",
     "alt": "Lactational mastitis — unilateral breast with erythema, oedema and warmth in a breastfeeding woman, without a discrete fluctuant collection",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Triple assessment (triple test) of a breast lump — what it is and the >99.6% rule",
   "subarea": "Breast surgery",
   "trap": "- **Triple test** = (1) clinical history + examination, (2) imaging, (3) non-excisional biopsy (core or FNAC) — **all three**, not just imaging + biopsy\n- When all three components are performed AND **concordant**: detects/excludes **>99.6%** of breast cancers (Cancer Australia)\n- Exam-catching point: triple test is **graded** — ANY single discordant or indeterminate/suspicious component overrides the others\n- A 'benign' imaging + 'benign' FNA do **NOT clear** a clinically suspicious lump\n  - **Discordance mandates excision biopsy** (or repeat core), not reassurance",
   "source": "Cancer Australia — 'Investigation of a new breast symptom: a guide for General Practitioners' (RACGP Accepted Clinical Resource; endorsed by BreastSurgANZ, RCPA, RANZCR)",
   "discriminator": "- **Concordant-benign** triple test → safe to reassure/avoid open biopsy\n- **Discordant** (e.g. clinically/radiologically suspicious but benign FNA, or FNA inadequate) → proceed to **core biopsy and/or diagnostic open excision**\n- **FNA**: gives cytology only — cannot distinguish invasive from in-situ\n- **Core biopsy**: gives histology + receptor status — preferred when malignancy is plausible",
   "redFlags": "- Persistent discrete lump despite **'benign' tests**\n- Clinically suspicious lump with **inadequate/benign cytology**\n- Symptom not explained by the benign result",
   "mcqTrap": "- Tempting wrong answer: **'reassure and review in 6 weeks'** because mammogram + FNA were benign in a woman with a clinically suspicious hard fixed lump\n  - Wrong — discordant triple test requires **tissue diagnosis** (excision/core), not watchful waiting",
   "mnemonic": "Triple test = Touch (exam) + Take a picture (imaging) + Tissue (biopsy). 'All three agree → 99 reasons to relax; one disagrees → cut it out.'",
   "viva": "- Examiner probes: 'Mammogram and FNA came back benign but the lump feels malignant — what now?'\n- Answer the **discordance**: this is a discordant triple test, I would not reassure\n- Arrange **core biopsy** and refer for **diagnostic open excision**\n- Mention you **never rely on imaging alone**",
   "whatFirst": "- Clinical history + examination, then imaging (US +/- mammo by age), then non-excisional biopsy — **all three**\n- Act on the **most suspicious component**",
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
   "id": "surg-breast-endocrine-5",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/2015_14_Breast_Cancer-11_%2822146787830%29.jpg/960px-2015_14_Breast_Cancer-11_%2822146787830%29.jpg",
     "caption": "Triple assessment diagram — clinical exam, imaging, biopsy",
     "alt": "Schematic of the triple test: (1) clinical examination, (2) breast imaging (mammography or ultrasound), (3) core biopsy or FNAC — all three required for >99.6% diagnostic accuracy",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Urgent breast referral red flags — what makes it a 'see within 1 week' / DO NOT delay",
   "subarea": "Breast surgery",
   "trap": "- **URGENT** (seen within ~1 week) triggers:\n  - New discrete lump with imaging/biopsy **suggestive of malignancy**\n  - **Clinically suspicious** lump\n  - **Breast abscess**\n  - New **dimpling with a mass**\n  - Suspicious nipple changes: **unilateral inversion/retraction** of short duration, scaling/ulceration (?Paget)\n  - Suspicious nipple discharge: **unilateral, spontaneous, blood-stained, single-duct**, or with a lump\n- Under-examined catch: **'DO NOT BIOPSY PRIOR TO CLINICAL REVIEW BY A SPECIALIST'** in the GP/specialist pathway\n  - Refer the suspicious lump — do not pre-empt the surgeon's assessment\n- **Peau d'orange + diffuse erythema** = inflammatory breast cancer = **urgent**, not 'trial antibiotics indefinitely'",
   "source": "Cancer Australia GP guide ('Investigation of a new breast symptom'); statewide breast clinic referral guidelines (e.g. St Vincent's Breast Clinic)",
   "discriminator": "- **Suspicious nipple discharge** (urgent): unilateral, spontaneous, single-duct, clear/bloodstained, +nipple surface change or lump\n- **Benign discharge** (routine): bilateral, multi-duct, only on expression, creamy/green/brown, normal nipple\n- **Suspicious nipple retraction**: recent, unilateral, slit-like, with scaling/ulceration\n- **Benign retraction**: longstanding, bilateral, nipple-stalk alone, post-inflammatory",
   "redFlags": "- Hard **fixed lump**\n- Skin **dimpling/tethering/peau d'orange**\n- **Bloody single-duct discharge**\n- Nipple **eczema/ulceration** (Paget)\n- **Axillary mass**\n- **Diffuse erythematous swollen breast** not settling on antibiotics (inflammatory cancer)",
   "mcqTrap": "- Tempting wrong answer: 55-year-old with red, swollen, peau d'orange breast → **'prescribe oral antibiotics and review in 2 weeks'**\n  - Wrong — at this age with no lactation, suspect **inflammatory breast cancer**: urgent referral + biopsy\n- Another trap: **GP doing FNA** on a suspicious lump before specialist review",
   "mnemonic": "Red flags = 'BLUNDS': Bloody single-duct discharge, Lump (hard/fixed), Ulcer/eczema of nipple (Paget), New dimpling/peau d'orange, Distortion/retraction (new), Swollen red breast not settling.",
   "viva": "- Examiner: 'When do you refer urgently and what would you NOT do?'\n- Give the suspicious-feature list, state **'within one week'**\n- Add you would **not biopsy ahead of specialist clinical review**\n- **ISBAR** the surgeon/breast care nurse if features of inflammatory cancer",
   "whatFirst": "- Identify any single suspicious feature → **urgent specialist breast referral** (within ~1 week)\n- **Do not biopsy** ahead of specialist clinical review",
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
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Glande_mammaire_%C3%89pith%C3%A9lioma_%28vue_ant%C3%A9rieur%29_55-o.apatho-557a-gmammaire.jpg/960px-Glande_mammaire_%C3%89pith%C3%A9lioma_%28vue_ant%C3%A9rieur%29_55-o.apatho-557a-gmammaire.jpg",
     "caption": "Skin dimpling / peau d'orange - breast malignancy",
     "alt": "Skin tethering and peau d'orange dimpling overlying a breast mass, a red-flag sign for urgent referral",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Inverted-nipple-01.jpg/960px-Inverted-nipple-01.jpg",
     "caption": "Nipple retraction / inversion - breast cancer sign",
     "alt": "New nipple retraction/inversion associated with an underlying breast mass - urgent referral trigger",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Adrenal mass / incidentaloma — exclude function FIRST; phaeo = alpha-block BEFORE beta",
   "subarea": "Endocrine surgery",
   "trap": "- Two killer traps:\n- **(1)** Most dangerous MCQ answer: **start a beta-blocker** (or label as 'essential hypertension' and give beta-blocker) in a patient with phaeochromocytoma\n  - **Unopposed alpha stimulation** causes a hypertensive crisis\n  - ALWAYS establish **alpha-blockade** (e.g. phenoxybenzamine) FIRST for **~10–14 days**\n  - Add beta-blocker **only after** alpha established, and only if needed for tachycardia\n- **(2) Never biopsy** an adrenal mass until phaeo is **biochemically excluded**\n  - Biopsy can precipitate **fatal crisis**",
   "whatFirst": "- Every adrenal incidentaloma → two questions: **Is it functioning? Is it malignant?**\n- Functional screen:\n  - **Plasma free (or 24-h urine) metanephrines** (phaeo)\n  - **1 mg overnight dexamethasone suppression test** (Cushing)\n  - **Aldosterone:renin ratio** if hypertensive/hypokalaemic (Conn)\n- Imaging: non-contrast CT **attenuation**\n- For phaeo prep: **ALPHA before BETA**",
   "cutoffs": [
    "CT attenuation **≤10 HU** on non-contrast = lipid-rich benign adenoma (no further imaging follow-up needed irrespective of size)",
    "Absolute washout **>60%** or relative washout **>40%** at 15 min delay = adenoma",
    "Size: **<4 cm** low malignancy risk; many centres resect **≥4 cm** or any with suspicious imaging/function; larger heterogeneous masses strongly favour adrenalectomy",
    "Phaeo prep: **alpha-blockade ~10–14 days** BEFORE surgery; beta-blocker only AFTER alpha established"
   ],
   "discriminator": "- **Benign adenoma**: small, homogeneous, **≤10 HU**, rapid contrast washout\n- **Phaeo**: high metanephrines, often **>3 cm**, high non-contrast HU, avid enhancement/slow washout, classic episodic headache/palpitations/sweating + paroxysmal hypertension\n- **Adrenocortical carcinoma**: large (**>4 cm**), heterogeneous, high HU, poor washout\n- **Conn**: hypertension + hypokalaemia + **high ARR**",
   "redFlags": "- Paroxysmal severe hypertension + **headache/palpitations/diaphoresis** = phaeo crisis risk\n  - Never give **unopposed beta-blocker**, never **biopsy**\n- Rapidly enlarging or **>4 cm heterogeneous** mass → suspect adrenocortical carcinoma\n  - Refer for resection (**avoid biopsy** — seeding)",
   "mcqTrap": "- **'Start metoprolol/propranolol'** or 'commence beta-blocker for the tachycardia' in a phaeo patient before alpha-blockade — provokes hypertensive crisis\n- Also: **'CT-guided biopsy'** of an adrenal mass before excluding phaeo",
   "viva": "- Examiner: 'Adrenal incidentaloma — what first?'\n- Screen for function: **metanephrines, 1 mg DST, ARR** + characterise on CT\n- For phaeo: **'alpha before beta, fluid load, then operate'**\n- Consent: intraop **BP swings**; ISBAR to anaesthetics/endocrine for perioperative crisis plan",
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
   "id": "surg-breast-endocrine-7",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/2/22/CT_of_adrenal_adenoma.jpg",
     "caption": "Adrenal incidentaloma - CT abdomen showing adrenal mass",
     "alt": "Incidentally discovered adrenal mass on contrast-enhanced CT abdomen - the classic imaging finding prompting biochemical workup before any intervention",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Pheochromocytoma2.jpg",
     "caption": "Phaeochromocytoma - CT adrenal mass with heterogeneous enhancement",
     "alt": "Heterogeneously enhancing adrenal mass consistent with phaeochromocytoma - requires alpha-blockade before any beta-blocker or surgery",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Hypercalcaemia / primary hyperparathyroidism — the FHH discriminator (urine calcium) before you operate",
   "subarea": "Endocrine surgery",
   "trap": "- Most tempting wrong answer: refer for **parathyroidectomy** as soon as you see high calcium + inappropriately high/normal PTH\n- MUST first exclude **familial hypocalciuric hypercalcaemia (FHH)**\n  - Identical biochemistry (high Ca + high/normal PTH)\n  - But **benign**, autosomal dominant (**CaSR mutation**)\n  - Surgery does **nothing** for FHH\n- Discriminator: **24-h urine calcium / calcium-creatinine clearance ratio (CCCR)**\n  - **Low** in FHH, high/normal in primary HPT\n- Operating on FHH is a classic exam **'never event'**",
   "whatFirst": "- Confirm true hypercalcaemia (**corrected/ionised Ca**), then **PTH**\n- If PTH high/inappropriately normal → measure **24-h urine calcium + CCCR** to exclude FHH BEFORE imaging/surgery\n- PTH **low/suppressed** → hunt for malignancy (PTHrP, myeloma, bone mets) or vitamin D excess",
   "cutoffs": [
    "CCCR **<0.01** suggests FHH; **>0.02** favours primary HPT (0.01–0.02 = indeterminate → CaSR genetics)",
    "FHH: 24-h urine calcium typically low (**~<100 mg/day, <2.5 mmol/day**)",
    "Localisation (sestamibi +/- 4D-CT/USS) is to **plan surgery**, NOT to make the diagnosis — diagnosis is **biochemical**"
   ],
   "discriminator": "- **Primary HPT** (PTH-driven): high Ca, high/normal PTH, high/normal urine Ca, low phosphate → surgery candidate\n- **FHH**: high Ca, high/normal PTH, **LOW urine Ca** (CCCR <0.01), strong family history, lifelong → **no surgery**\n- **Malignancy hypercalcaemia**: high Ca, **SUPPRESSED PTH** (PTHrP-mediated)",
   "redFlags": "- Corrected Ca **>3.5 mmol/L**, or symptomatic (confusion, dehydration, arrhythmia, renal impairment) = **hypercalcaemic crisis**\n  - **IV 0.9% saline rehydration** first, then **IV bisphosphonate**\n  - This is the acute emergency, separate from surgical work-up",
   "mcqTrap": "- Sending high-Ca/high-PTH patient straight to **parathyroidectomy without urine calcium** → miss FHH\n- Or attributing high Ca + **SUPPRESSED PTH** to hyperparathyroidism\n  - That pattern = **malignancy**",
   "viva": "- Examiner: 'High calcium, high PTH — operate?'\n- Say: **not until I exclude FHH** with 24-h urine calcium/CCCR\n- Escalation: symptomatic crisis → ISBAR to medical/renal, **IV saline + bisphosphonate**\n- Consent point: parathyroidectomy risks **RLN injury + hypocalcaemia**",
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
   "id": "surg-breast-endocrine-8",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Non-contrast_CT_of_multiple_bilateral_renal_calculi.jpg/960px-Non-contrast_CT_of_multiple_bilateral_renal_calculi.jpg",
     "caption": "Renal calculi on CT KUB - hypercalcaemia complication",
     "alt": "Renal calculi visible on CT KUB, a key complication of chronic hypercalcaemia / primary hyperparathyroidism that raises surgical threshold",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Neck lump approach — triple assessment by age + the 3-week rule for malignant cervical node",
   "subarea": "Endocrine surgery",
   "trap": "- Tempting wrong move: **aspirate or excise** a persistent lateral neck lump in an adult as the first step\n- In an adult >40 with a persistent (>3 weeks) firm lateral neck mass, the overriding fear is **metastatic squamous cell carcinoma** from an occult head/neck mucosal primary\n- Correct pathway: **ENT panendoscopy + biopsy of the primary**, and node sampled by **FNA** (or core)\n- **NEVER open excisional biopsy first**\n  - Open biopsy of an SCC node **seeds the neck** and worsens prognosis\n- 'Persistent neck lump in an adult = **cancer until proven otherwise**'",
   "whatFirst": "- History/exam to localise: **midline vs lateral**, thyroid vs lymph node vs salivary\n- Adult persistent lump: **USS + FNA** (or core), and **ENT referral for panendoscopy** to find a mucosal primary\n- **NOT open excisional biopsy**",
   "cutoffs": [
    "Persistent neck lump **>3 weeks** in an adult (esp. >40, smoker/drinker) → urgent ENT/head&neck referral",
    "**Midline mass that moves with tongue protrusion** = thyroglossal cyst; moves with swallowing = thyroid",
    "**Lateral, pulsatile, splays carotid** on USS = carotid body tumour (paraganglioma) — do NOT biopsy"
   ],
   "discriminator": "- **Midline + elevates on tongue protrusion** = thyroglossal duct cyst\n- **Anterior triangle + moves with swallow** = thyroid\n- **Lateral upper neck cystic** in adult = assume **metastatic SCC** (cystic node), NOT branchial cyst, until proven\n- **Pulsatile at carotid bifurcation** = paraganglioma\n  - **No FNA/biopsy** — vascular",
   "redFlags": "- Unilateral persistent firm node + **hoarseness/odynophagia/otalgia/weight loss/smoking** → occult aerodigestive primary\n  - Do not delay with **antibiotics**\n- **Pulsatile lateral mass** → imaging before any needle",
   "mcqTrap": "- **'Excisional biopsy of the neck node'** as first step in suspected metastatic SCC\n  - Correct = **FNA + panendoscopy** first\n- Or labelling a **cystic lateral neck mass in a 55-yr-old** as a benign branchial cyst",
   "viva": "- Examiner: 'Adult with a 3-week lateral neck lump — what first and what must you NOT do?'\n- Say **FNA + ENT panendoscopy**\n- Must **NOT open-biopsy** (seeds SCC)\n- Discriminator probed: **thyroglossal vs thyroid vs metastatic node vs paraganglioma**",
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
   "id": "surg-breast-endocrine-9",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Cervical_lymphadenopathy_right_neck.png/960px-Cervical_lymphadenopathy_right_neck.png",
     "caption": "Lateral neck mass - enlarged cervical lymph node",
     "alt": "Firm lateral neck mass in an adult - the classic presentation requiring triple assessment and exclusion of metastatic squamous cell carcinoma before any biopsy",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Kone_med_stor_struma.jpg/960px-Kone_med_stor_struma.jpg",
     "caption": "Thyroid goitre - midline neck swelling moving with swallowing",
     "alt": "Midline anterior neck swelling (goitre) that rises on swallowing - distinguishing feature from lateral neck malignant nodes",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Post-thyroidectomy AIRWAY HAEMATOMA — the bedside open-the-wound emergency",
   "subarea": "Endocrine surgery",
   "trap": "- Most tempting wrong answer: **'rush the patient to theatre'** or 'call anaesthetics for intubation' as the FIRST action when post-thyroidectomy neck is swelling\n- Life-saving first move: **OPEN THE WOUND AT THE BEDSIDE**\n  - Cut the skin and strap/deep sutures\n  - Evacuate clot\n  - Relieve the compression\n  - THEN go to theatre\n- **Waiting for theatre kills**; obstruction is venous/laryngeal oedema from expanding haematoma — decompression must be immediate\n- **Emergency removal kit must be at the bedside**",
   "whatFirst": "- Recognise expanding neck swelling + respiratory distress/stridor/tight neck (usually **<6–24 h** post-op)\n- Sit up, **high-flow O2**, call for help/airway team\n- **IMMEDIATELY open the wound at the bedside**: remove skin sutures/clips, then deep/strap sutures, evacuate haematoma, finger-sweep\n- Then transfer to **theatre** for definitive haemostasis\n- **Anticipate difficult airway**",
   "cutoffs": [
    "Most haematomas present within the first **6 hours**; majority within **24 h** post-op (basis for bedside emergency-box / clip-remover)",
    "**SCOOP** at bedside: Skin exposure, Cut sutures, Open skin, Open straps, Pack/evacuate",
    "**Bedside emergency kit** (stitch cutter/clip remover) mandated at bedside after thyroid/parathyroid surgery"
   ],
   "discriminator": "- **Airway haematoma**: rapid neck swelling, tense wound, respiratory distress/stridor, often within hours\n  - A **MECHANICAL/venous-congestion emergency** relieved by decompression\n- **Hypocalcaemia** (other card): tingling, Chvostek/Trousseau, later (**24–72 h**), treated with calcium\n- **Recurrent laryngeal nerve injury**: hoarse voice (unilateral) or stridor/airway compromise (bilateral) at extubation — **not a swelling**\n  - Do not mix these up",
   "redFlags": "- Any **stridor, tracheal tug, falling SpO2, agitation**, or visibly tense/expanding neck post-thyroidectomy = **decompress NOW**\n  - Do not wait for imaging or theatre\n- Even after decompression, **laryngeal oedema** may persist → definitive airway in theatre",
   "mcqTrap": "- **'Transfer immediately to operating theatre'** or **'urgent CT neck'** chosen as the FIRST step\n  - Instead of **opening the wound at the bedside**",
   "viva": "- Examiner: 'PACU, neck swelling, can't breathe after thyroidectomy — what first?'\n- **Open the wound at the bedside**, evacuate clot, then theatre\n- Call **airway team** early\n- ISBAR escalation to anaesthetics/surgeon\n- Consent (pre-op) point: bleeding/airway haematoma is why patients are **observed** and not same-day discharged unsupervised",
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
   "trap": "- Tempting wrong answer: **reassure and discharge** the day-1 post-total-thyroidectomy patient with perioral/fingertip tingling as 'anxiety'\n- **Paraesthesia** (circumoral, fingers, toes) = EARLIEST sign of **hypoparathyroid hypocalcaemia** from devascularised/removed parathyroids\n- Typically appearing **24–72 h** post-op\n- Check **corrected calcium** (and many units check early post-op PTH at **~4 h** as a predictor)\n- A low PTH/Ca trajectory **predicts** symptomatic hypocalcaemia\n- **Do not dismiss tingling**",
   "whatFirst": "- Symptomatic tingling post-thyroidectomy → measure **corrected (or ionised) calcium + Mg** now\n- Many protocols use **early PTH** (1–6 h post-op, classically **~4 h**) to predict\n- Treat per severity:\n  - **Oral calcium +/- calcitriol** for mild\n  - **IV calcium gluconate** for severe/tetany/arrhythmia\n- Always correct **low magnesium** (refractory hypocalcaemia)",
   "cutoffs": [
    "Hypocalcaemia tends to nadir at **24–72 h** post-op; PTH at **~4–6 h <10 pg/mL** is highly predictive of postoperative hypocalcaemia (specificity ~100%)",
    "Treat asymptomatic patient if corrected Ca **≤1.9 mmol/L** (≤7.5 mg/dL), or any symptomatic/severe → IV",
    "IV: **~10 mL 10% calcium gluconate** (approx 2.2 mmol elemental Ca) slow IV for acute symptomatic; oral maintenance **~1500–2000 mg elemental Ca/day** +/- calcitriol",
    "Correct **hypomagnesaemia** — low Mg causes PTH resistance/refractory hypocalcaemia"
   ],
   "discriminator": "- **Hypocalcaemia** (this card): perioral/peripheral tingling, **Chvostek** (tap facial nerve → facial twitch), **Trousseau** (carpopedal spasm with BP cuff), prolonged QT, +/- stridor (laryngospasm)\n- **Airway haematoma** (other card): visible swelling/tight neck/respiratory distress within hours, NOT tingling\n  - Do **not confuse the two emergencies**",
   "redFlags": "- **Tetany, seizures, laryngospasm/stridor**, prolonged QT or arrhythmia, carpopedal spasm → **IV calcium gluconate + cardiac monitoring** immediately\n- Refractory despite calcium → check and replace **magnesium**",
   "mcqTrap": "- Attributing day-1 perioral tingling to **'anxiety/hyperventilation'** without checking calcium\n- Or giving IV calcium **without cardiac monitoring**\n- Or forgetting **magnesium** in refractory cases",
   "viva": "- Examiner: 'Day-1 post-total-thyroidectomy, tingling fingers — what first?'\n- **Corrected Ca + Mg** now, assess Chvostek/Trousseau/ECG, treat by severity\n- ISBAR escalation if **tetany/QT prolongation**\n- Consent (pre-op) discriminator: **permanent hypoparathyroidism** risk after total thyroidectomy",
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
   "id": "surg-breast-endocrine-11",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Trousseau%27s_Sign_of_Latent_Tetany.jpg/960px-Trousseau%27s_Sign_of_Latent_Tetany.jpg",
     "caption": "Trousseau sign - carpal spasm with blood pressure cuff inflation",
     "alt": "Carpal spasm (main d'accoucheur posture) elicited by inflating a BP cuff above systolic for 3 minutes - classic bedside sign of hypocalcaemia/tetany",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Segno_di_Chvostek_Punti.JPG",
     "caption": "Chvostek sign - facial twitch on tapping over facial nerve",
     "alt": "Ipsilateral facial muscle twitching on tapping the facial nerve anterior to the ear - early bedside sign of post-thyroidectomy hypocalcaemia",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Thyroid nodule work-up — the ORDER (TSH first, then USS; FNA is NOT the first test)",
   "subarea": "Endocrine surgery",
   "trap": "- The single most tempting wrong answer is to send the palpable thyroid nodule straight for **FNA** — this is the wrong sequence\n- The correct first investigations are **TSH + dedicated thyroid ultrasound**\n- The TSH result branches the pathway:\n  - A **suppressed/low TSH** means the nodule may be autonomously hyperfunctioning ('hot') — do a **Tc-99m pertechnetate (radionuclide) uptake scan**, NOT an FNA\n  - Hot nodules are almost **never malignant** and FNA is uninterpretable in this context\n  - Only if TSH is **normal/high** do you proceed to ultrasound risk-stratification (ACR TI-RADS) and FNA\n- Rule: **never FNA before you know the TSH**",
   "whatFirst": "- **TSH + dedicated thyroid USS** first\n- If TSH **suppressed** → Tc-99m uptake scan (look for hot nodule), do NOT FNA\n- If TSH **normal/high** → TI-RADS stratify → FNA per size threshold",
   "cutoffs": [
    "FNA size thresholds by ACR TI-RADS: **TR5** (high suspicion, >20% malignancy) ≥**1 cm**; **TR4** (moderate, 5–20%) ≥**1.5 cm**; **TR3** (mild, ~2–5%) ≥**2.5 cm**; TR1–2 no FNA",
    "**Suppressed TSH** → radionuclide scan first (hot nodule = ~no FNA)",
    "**Bethesda V–VI** (suspicious/malignant) → refer thyroid surgeon; **Bethesda III–IV** (indeterminate, ~10–40% risk) → repeat FNA / molecular / diagnostic lobectomy"
   ],
   "discriminator": "- **Hot (hyperfunctioning, suppressed TSH)** nodule = benign → scan not FNA\n- **Cold/normal-TSH solid hypoechoic** nodule = FNA\n- Molecular testing (**Afirma/ThyroSeq**) for Bethesda III/IV is routine in USA but NOT subsidised/routinely available in **Australia**",
   "redFlags": "- **Hard fixed nodule**, rapid growth → urgent surgical referral\n- **Hoarseness** (recurrent laryngeal nerve involvement)\n- **Dysphagia**\n- **Cervical lymphadenopathy**\n- Prior **head/neck irradiation**\n- Family history of **MEN2/medullary cancer**\n- Above findings trigger urgent surgical referral **regardless of size**",
   "mcqTrap": "- 'Next best step = **FNA**' chosen before TSH/USS\n- Doing FNA on a patient with **suppressed TSH** (should be uptake scan instead)",
   "viva": "- Examiner probes the **sequence**: 'You have a 2 cm thyroid nodule — what first?'\n  - Answer: **TSH + USS**, then explain the suppressed-TSH branch to scintigraphy\n- Discriminator probed: **hot vs cold nodule**",
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
   "id": "surg-breast-endocrine-12",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ultrasound_of_thyroid_showing_right_lower_pole_cyst_and_a_calcified_nodule.jpg/960px-Ultrasound_of_thyroid_showing_right_lower_pole_cyst_and_a_calcified_nodule.jpg",
     "caption": "Thyroid ultrasound - solitary hypoechoic nodule with microcalcifications",
     "alt": "Hypoechoic solitary thyroid nodule with microcalcifications on ultrasound - the second investigation after TSH, preceding FNA in the correct work-up sequence",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/5/5b/KalterKnoten002.jpg",
     "caption": "Thyroid radionuclide scan - cold (non-functioning) nodule",
     "alt": "Thyroid scintigraphy showing a cold (non-functioning) nodule - ordered when TSH is suppressed to assess for hot vs cold nodule before FNA",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Multidisciplinary team (MDT) — when discussion is mandated and the 'who decides surgery' trap",
   "subarea": "Surgical oncology principles",
   "trap": "- Australian standard: **EVERY breast cancer must be discussed at MDT** at least once, ideally BEFORE any treatment (including surgery)\n- This allows consideration of **neoadjuvant therapy** before committing to surgery\n- Exam trap: a patient 'keen for surgery next week' — booking definitive surgery **before MDT/biomarker results** can deny appropriate neoadjuvant therapy\n  - e.g. **HER2+ or TNBC** tumours where neoadjuvant therapy is standard — proceeding to surgery first is the wrong answer",
   "whatFirst": "- **Triple assessment complete** (clinical + imaging + core biopsy with ER/PR/HER2 and grade)\n- → **MDT discussion**\n- → THEN treatment sequencing decision (**neoadjuvant vs upfront surgery**)",
   "discriminator": "- **Core biopsy** is the diagnostic standard — gives histology + receptors, preserves architecture for grading\n- Distinguish from **FNA**, which gives cytology only:\n  - Cannot reliably **grade**\n  - Cannot assess **invasion vs in-situ**\n  - No receptor architecture\n- MCQ favourite: **FNA is NOT adequate** to plan definitive cancer management",
   "redFlags": "- Proceeding to **mastectomy/WLE without receptor status** or without MDT\n  - Patient may benefit from neoadjuvant systemic therapy that would be missed",
   "mcqTrap": "- '**Book WLE + SLNB now**' for a 3cm HER2+ or triple-negative tumour — wrong\n  - These should go to MDT for **neoadjuvant therapy** consideration first",
   "mnemonic": "MDT core members: 'SPRO-N-C' — Surgeon, Pathologist, Radiologist, Radiation + medical Oncologist, breast care Nurse, Coordinator (+ patient preferences).",
   "viva": "- **ISBAR a new biopsy-proven cancer** for MDT presentation:\n  - Situation: new T2 N0 grade-3 ER−/HER2+\n  - Background, Assessment (triple-assessment concordant)\n  - Recommendation: discuss **neoadjuvant**\n- Examiner discriminator: 'Why MDT before surgery?'\n  - Answer: to avoid committing to surgery in a tumour where **neoadjuvant therapy changes the operation/axilla** and improves outcomes",
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
   "trap": "- **Neoadjuvant** = systemic therapy BEFORE surgery; **adjuvant** = AFTER\n- High-yield gotcha: neoadjuvant chemo (± anti-HER2) is now **standard-of-care for HER2+ and TNBC** tumours >2cm and/or node-positive\n  - Not just 'inoperable/locally advanced' disease — this is a common misconception\n- Second gotcha: neoadjuvant does **NOT improve overall survival** vs adjuvant for the same regimen\n  - Wins are: **downstaging** (more BCS, more axillary de-escalation) + **in-vivo response/pCR** information",
   "whatFirst": "- If **HER2+ or TNBC** and >2cm or node-positive → neoadjuvant systemic therapy first, then surgery\n- If **hormone-receptor+/HER2−** low-risk early disease → usually surgery first, adjuvant therapy after",
   "discriminator": "- **pCR** (pathological complete response, no residual invasive disease) is prognostic and guides ESCALATION of adjuvant therapy if NOT achieved:\n  - **HER2+ with residual invasive disease** → switch to adjuvant **T-DM1** (KATHERINE trial)\n  - **TNBC with residual disease** → adjuvant **capecitabine** (CREATE-X trial)\n- Mimic to avoid: **pCR does not mean 'stop all therapy'**\n  - Anti-HER2 still completes ~**1 year**\n  - Endocrine therapy still given if **ER+**",
   "redFlags": "- **Inflammatory breast cancer** and locally advanced/inoperable disease = neoadjuvant FIRST, **never upfront surgery**",
   "mcqTrap": "- '**Neoadjuvant chemotherapy improves overall survival** compared with adjuvant' — FALSE for equivalent regimens\n  - Survival is **equivalent**; the benefit is downstaging + response information + response-adapted escalation",
   "mnemonic": "Neo for 'HOT' tumours that respond: Her2+, triple-neg, Operable-but-large/node+. Residual disease escalation: HER2 → T-DM1; TNBC → capecitabine.",
   "cutoffs": [
    "Neoadjuvant SOC threshold (HER2+/TNBC): **>2cm and/or node-positive**",
    "**KATHERINE**: HER2+ residual invasive disease → **14 cycles adjuvant T-DM1** (~50% lower recurrence/death vs trastuzumab)",
    "**CREATE-X**: HER2-negative (esp. TNBC) residual disease → ~**6–8 cycles adjuvant capecitabine**"
   ],
   "viva": "- Consent/escalation angle: counsel a HER2+ patient pre-neoadjuvant that surgery + pathology will determine whether they need a **switch of adjuvant drug (T-DM1)** if residual disease remains\n- Examiner discriminator: 'Survival benefit of neoadjuvant?'\n  - Answer: **equivalent OS** to adjuvant; benefit is BCS rate + de-escalated axilla + prognostic pCR guiding escalation",
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
   "trap": "- A positive sentinel node **no longer automatically means completion ALND**\n- **Z0011**: clinical T1–T2, cN0, having breast-conserving surgery + whole-breast radiotherapy + systemic therapy, with **1–2 positive sentinel nodes** → can OMIT completion ALND (no survival difference)\n- **AMAROS**: a positive sentinel node can be managed with **axillary radiotherapy instead of ALND** with equivalent control and less lymphoedema\n- Gotcha: these de-escalation criteria are **narrow** — they do NOT apply to:\n  - Mastectomy without RT\n  - ≥3 positive nodes\n  - Matted/clinically positive nodes",
   "whatFirst": "- Positive SLN → check **Z0011 eligibility** (BCS + planned whole-breast RT + cT1–2 + 1–2 +SLN + systemic therapy)\n  - If all criteria met → **omit ALND**\n  - If criteria not met → **ALND or axillary RT** (AMAROS) per MDT",
   "discriminator": "- **Z0011** = omit axillary treatment entirely in the eligible BCS group\n- **AMAROS** = substitute axillary RT for ALND when axillary treatment is still wanted (e.g. mastectomy or >2 nodes)\n- Node size distinctions:\n  - **Macrometastasis** = >2mm\n  - **Micrometastasis (pN1mi)** = >0.2–2mm\n  - **Isolated tumour cells (ITC) pN0(i+)** = ≤0.2mm — ITCs/micromets generally do **not mandate ALND**",
   "redFlags": "- **≥3 positive sentinel nodes**\n- Gross **extranodal extension**\n- **Matted/clinically positive nodes**\n- **No planned radiotherapy** → completion ALND / fuller axillary management",
   "mcqTrap": "- '**Completion ALND**' for a woman having lumpectomy + WBRT with 1 positive sentinel node — wrong in the **Z0011 era**; omit ALND",
   "mnemonic": "'1 or 2 + lumpectomy + radiation = leave the axilla (Z0011).' Need axillary control but want low morbidity → radiate it (AMAROS).",
   "cutoffs": [
    "**Z0011**: cT1–2, cN0, BCS+WBRT, **1–2 +SLN** → omit ALND",
    "**AMAROS**: +SLN → axillary RT non-inferior to ALND (lymphoedema **~11% RT vs ~23% ALND**)",
    "Micromet **pN1mi** >0.2–2mm; ITC **pN0(i+)** ≤0.2mm"
   ],
   "viva": "- Examiner discriminator: 'One sentinel node positive — what next?'\n  - Lead with whether **Z0011 criteria are met** (BCS + WBRT) → omit ALND\n  - If mastectomy or ineligible, offer **AMAROS-style axillary RT vs ALND**\n  - Frame the trade-off: equivalent control with markedly **less lymphoedema** from RT",
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
   "id": "surg-breast-endocrine-15",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Sentinel_lymph_node_%28axilla%29.jpg/960px-Sentinel_lymph_node_%28axilla%29.jpg",
     "caption": "Sentinel lymph node biopsy - blue dye and isotope mapping of axillary sentinel node",
     "alt": "Blue-stained sentinel lymph node identified at axillary dissection using blue dye mapping - illustrating the procedure whose positive result triggers the Z0011/AMAROS de-escalation decision",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Principles of oncological resection — R-status, en-bloc excision, and the 'debulk it' trap",
   "subarea": "Surgical oncology principles",
   "trap": "- Curative cancer surgery aims for **R0 resection** (microscopically clear margins)\n  - R1 = microscopic tumour at margin; R2 = macroscopic residual tumour\n- Gotcha: in curative-intent solid-tumour surgery you do **NOT 'debulk'**\n  - Incomplete (R2) resection of a potentially curable cancer is the wrong answer\n  - Either achieve **R0** or convert to a different strategy (neoadjuvant downsizing, or palliative intent)\n- Also: **never breach/incise the tumour** ('do not violate the tumour')\n  - Biopsy tracts and skin over the tumour are **excised en bloc**",
   "whatFirst": "- **Define intent (curative vs palliative) at MDT** before cutting\n- Curative → plan for **R0 with en-bloc excision** of biopsy tract\n- If R0 not achievable upfront → **neoadjuvant downstaging** rather than a planned incomplete operation",
   "discriminator": "- **R-status** (margin-based, applies to the resection) vs **T/N staging** (tumour burden) — these are different\n- Distinguish **curative debulking myth** (not done in most solid tumours) from genuine cytoreduction indications:\n  - e.g. **ovarian cancer**, some neuroendocrine — those are the exception\n  - Breast and most solid tumours are **not** debulked",
   "redFlags": "- **Tumour spillage / capsule breach intra-op**\n- **Positive R1 margins** on frozen/final path → re-excision or adjuvant escalation\n- **Macroscopic residual (R2)** means the curative plan has failed → re-stage and re-plan",
   "mcqTrap": "- '**Debulk the primary** to relieve burden' offered as curative management of an operable solid tumour — wrong\n  - Aim **R0 or neoadjuvant downstage**\n  - (Debulking is appropriate mainly in **ovarian cancer**)",
   "mnemonic": "R0 = Right (clear) · R1 = Residual microscopic · R2 = Really there (macroscopic). 'Don't cut into cancer, cut around it (en bloc).'",
   "cutoffs": [
    "**R0**: no residual tumour (margins clear)",
    "**R1**: microscopic residual (tumour at ink)",
    "**R2**: macroscopic residual tumour"
   ],
   "viva": "- Examiner discriminator: '**Margins come back R1** — implications?'\n  - Answer: microscopic residual → re-excision to R0 if feasible, otherwise **adjuvant radiotherapy/systemic escalation** per MDT\n  - Contrast with **R2** (macroscopic) which signals the curative resection was not achieved\n- Consent point: discuss possibility of **needing more surgery** once final margins known",
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
   "id": "surg-breast-endocrine-16",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Inked_Lumpectomy_Specimen_%286464023675%29.jpg",
     "caption": "R0 vs R1 margins - histopathology of tumour at surgical margin",
     "alt": "Histopathology slide showing tumour cells at (R1) vs clear of the inked surgical margin (R0) - the pathological definition underpinning oncological resection principles",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Sentinel lymph node biopsy (SLNB) — who gets it, who does NOT, and the 'palpable node' trap",
   "subarea": "Surgical oncology principles",
   "trap": "- **SLNB** is the axillary staging standard for clinically/radiologically **node-negative** early invasive breast cancer\n  - Replaces routine ALND and reduces lymphoedema\n- Gotcha: SLNB is **NOT** for a clinically/biopsy-positive axilla\n  - Those need **ALND or neoadjuvant pathway**\n- SLNB is generally **NOT done for pure DCIS** (no metastatic risk) — EXCEPT:\n  - When **mastectomy is planned** for DCIS\n  - High-grade extensive DCIS with suspicion of **occult invasion** (SLNB cannot be done later once the breast is removed)",
   "whatFirst": "- Confirm axilla is **clinically/US node-negative** (and FNA/core negative if a node was sampled)\n- → **SLNB at the time of breast surgery**\n- If node is **biopsy-proven positive** → ALND or neoadjuvant therapy pathway, NOT primary SLNB",
   "discriminator": "- **Dual-tracer SLNB** = blue dye + radioisotope (technetium-99m)\n  - Identify the sentinel node as the **first-draining node**\n- Distinguish **SLNB** (staging, low morbidity) from **ALND** (therapeutic clearance, high lymphoedema risk)\n- Contraindication trap: **clinically positive nodes**, inflammatory cancer",
   "redFlags": "- **Blue-dye anaphylaxis** risk — must consent\n- Avoid **blue dye in pregnancy** (use isotope alone)\n- **Radioisotope** is safe in pregnancy at low dose but discuss with patient",
   "mcqTrap": "- '**Perform ALND**' for a clinically node-negative T1 tumour — wrong; SLNB is correct and ALND over-treats\n- Also wrong: **routine SLNB for small low-grade DCIS** treated by WLE",
   "mnemonic": "SLNB = for the 'quiet axilla' (cN0). Positive axilla = no shortcut. DCIS-going-to-mastectomy → do SLNB now (can't go back).",
   "cutoffs": [
    "Indication: **clinically/US node-negative** early invasive breast cancer",
    "**DCIS**: SLNB if mastectomy planned or suspicion of invasion",
    "**Dual tracer**: blue dye + Tc-99m"
   ],
   "viva": "- Consent for SLNB: explain **blue dye** (transient blue urine/skin tattoo, rare anaphylaxis), small lymphoedema risk (lower than ALND), and that a **positive sentinel node may change management**\n- Examiner discriminator: 'Why SLNB not ALND?'\n  - Answer: equivalent staging/survival in cN0 with far **less lymphoedema/arm morbidity**",
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
   "id": "surg-breast-endocrine-17",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Lymphoscintigraphy_images_of_lympledema.png",
     "caption": "Sentinel lymph node biopsy - lymphoscintigraphy hot spot",
     "alt": "Lymphoscintigraphy image showing radiolabelled tracer uptake in the axillary sentinel node - preoperative mapping for SLNB in clinically node-negative early breast cancer",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "SLNB after neoadjuvant chemotherapy — timing and the false-negative-rate trap",
   "subarea": "Surgical oncology principles",
   "trap": "- For a patient who is **cN0 at presentation** and gets neoadjuvant chemo, SLNB is done **AFTER neoadjuvant therapy** (at surgery), not before\n  - Avoids two axillary operations and lets chemo clear the axilla\n- Gotcha: a patient who was **node-positive then converted to clinically negative** after chemo:\n  - SLNB has a **higher false-negative rate** in this setting\n  - Techniques to lower it are required: **dual tracer, ≥3 sentinel nodes, and targeted axillary dissection** (retrieving the originally-biopsied clipped node)",
   "whatFirst": "- **cN0 at baseline + neoadjuvant** → single SLNB after chemo at definitive surgery\n- **Biopsy-proven node-positive at baseline** → clip the positive node; after chemo, if clinically responding:\n  - Do **targeted axillary dissection** (SLNB + clipped node retrieval)\n  - If residual nodal disease → **ALND**",
   "discriminator": "- **Targeted axillary dissection (clip + retrieve)** vs plain SLNB\n  - TAD lowers the **false-negative rate** to acceptable levels in node-positive-converted-to-negative patients\n- Distinguish from **upfront-surgery SLNB** where false-negative concerns are lower",
   "redFlags": "- **Residual nodal disease after neoadjuvant** (non-pCR axilla) → completion ALND\n  - Also a trigger for **adjuvant escalation** (T-DM1 / capecitabine per receptor type)",
   "mcqTrap": "- '**Do SLNB before starting neoadjuvant chemotherapy**' in a cN0 patient — generally wrong\n  - Do it **after**, to avoid two operations and benefit from nodal downstaging",
   "mnemonic": "Node+ converting to node−: 'CLIP it, then grab ≥3' (TAD + dual tracer) to beat the false-negative rate.",
   "cutoffs": [
    "Acceptable SLNB FNR target: **<10%**",
    "Retrieve **≥3 sentinel nodes** + dual tracer in post-neoadjuvant node-positive→negative",
    "**Residual nodal disease** → ALND"
   ],
   "viva": "- Examiner discriminator: '**Node-positive at diagnosis, clinical CR after chemo** — how do you stage the axilla surgically?'\n  - Answer: **targeted axillary dissection** (retrieve clipped node + sentinel nodes, dual tracer, ≥3 nodes)\n  - **ALND if residual disease** found\n- Consent: explain higher uncertainty and possible **conversion to full clearance**",
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
   "trap": "- Two DIFFERENT margin rules — exams swap them:\n  - **Invasive cancer**: adequate margin = '**no ink on tumour**' (0mm clear is acceptable) — re-excision for tumour AT the inked margin\n  - **DCIS**: adequate margin = **2mm** (with whole-breast radiotherapy)\n- Gotcha trap: a **wider margin (e.g. 5mm/10mm) for invasive disease** does NOT reduce local recurrence over 'no ink on tumour'\n  - Demanding a bigger clear margin for invasive cancer = unnecessary tissue removal = **wrong answer**",
   "whatFirst": "- **Check histology type first**\n  - Invasive → '**no ink on tumour**' clear = adequate\n  - DCIS → need **≥2mm**\n- If margin involved (or DCIS <2mm) → offer **re-excision**\n  - Consider **mastectomy** if re-excision won't give acceptable cosmetic/oncological result",
   "discriminator": "- Cancer Australia practical thresholds (aligned NICE 2018):\n  - Invasive or DCIS **AT the radial margin** (tumour on ink, 0mm) → offer further surgery\n  - Invasive/DCIS within **>0 but <2mm** of radial margin → CONSIDER further surgery (MDT decision)\n- Distinguish **radial (true surgical) margins** from:\n  - **Anterior (skin)** and **posterior (pectoral fascia)** margins where 'no ink' may suffice",
   "redFlags": "- **Persistently positive margins** after re-excision, or extensive DCIS component → **mastectomy discussion** at MDT",
   "mcqTrap": "- Stating invasive breast cancer needs a '**2mm**' or '1cm' clear margin — wrong\n  - Invasive standard is **no ink on tumour**; the 2mm rule belongs to **DCIS**",
   "mnemonic": "'INk = INvasive (no ink on tumour); 2 for the 2 letters that aren't there yet — DCIS needs 2mm.'",
   "cutoffs": [
    "Invasive (with WBRT): **no ink on tumour** (0mm clear adequate)",
    "DCIS (with WBRT): **2mm**",
    "At margin (tumour on ink, **0mm**): offer further surgery",
    "**>0–<2mm** radial: consider further surgery (MDT)"
   ],
   "viva": "- Examiner discriminator: 'Your **invasive margin is clear by 1mm** — re-operate?'\n  - Answer: for invasive disease 'no ink on tumour' is adequate → **1mm clear does NOT mandate re-excision**\n  - For DCIS the same 1mm would be **inadequate (<2mm)**\n- Consent point: warn pre-op that a proportion of BCS may need **re-excision for margins**",
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
   "id": "surg-breast-endocrine-19",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Inked_Lumpectomy_Specimen_%286464023675%29.jpg",
     "caption": "Surgical margin assessment - ink on tumour (R1) vs clear 2mm margin (DCIS)",
     "alt": "Gross pathology specimen and inked margin showing the difference between no-ink-on-tumour (invasive) and 2mm clearance (DCIS) - illustrating the two different margin rules",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "TNM staging — the exact size cut-offs that get tested (T1 sub-stages, T2/T3, and the prognostic-stage trap)",
   "subarea": "Surgical oncology principles",
   "trap": "- MCQs love the borderline numbers:\n  - **T1** = ≤20mm; **T2** = >20–50mm; **T3** = >50mm\n  - T1 subdivides: **T1mi** ≤1mm (microinvasion), **T1a** >1–5mm, **T1b** >5–10mm, **T1c** >10–20mm\n- **T4 is NOT about size** — it is:\n  - **T4a**: chest-wall involvement\n  - **T4b**: skin ulceration/satellite nodules\n  - **T4c**: both\n  - **T4d**: inflammatory\n- Tempting wrong move: calling a **6cm tumour T4** — a huge mobile tumour with no skin/chest-wall involvement is still **T3**",
   "whatFirst": "- Decide stage from the **WORST feature**:\n  - Any **skin/chest-wall/inflammatory finding overrides size** → T4 regardless of cm\n  - Then **size** for T1–T3; then **nodes** (cN clinical vs pN pathological); then **M**",
   "discriminator": "- **T4b** (skin ulceration/satellite skin nodules/peau d'orange limited) vs **T4d inflammatory**:\n  - T4d = diffuse erythema + oedema over **≥1/3 of breast**, often no discrete mass\n  - Inflammatory is a **clinical diagnosis** and is always **at least stage III**\n- **Supraclavicular nodes = N3c**",
   "redFlags": "- **Peau d'orange / diffuse erythema** = inflammatory (T4d) = locally advanced → **straight to systemic therapy first**, NOT upfront surgery",
   "mcqTrap": "- Choosing **T4 for a large (e.g. 6cm) tumour** because it 'sounds advanced'\n  - **Size alone never makes T4** — 6cm with skin/chest-wall free is **T3**",
   "mnemonic": "T sizes: 'TWO–FIVE' → 2cm and 5cm are the only size lines (≤2 / 2–5 / >5). T4 = skin/chest/inflam, no cm.",
   "cutoffs": [
    "**T1mi**: ≤1mm",
    "**T1a**: >1–5mm",
    "**T1b**: >5–10mm",
    "**T1c**: >10–20mm",
    "**T2**: >20–50mm",
    "**T3**: >50mm",
    "**T4**: chest wall/skin/inflammatory (size-independent)"
   ],
   "viva": "- Examiner probe: 'Stage this clinically.'\n  - Lead with the discriminator: explicitly state you would **exclude skin/chest-wall involvement and inflammatory change FIRST** (overrides size)\n  - Then quote the **20mm/50mm** lines\n  - Mention **cTNM** (clinical/pre-treatment) vs **pTNM**\n  - Mention AJCC 8th adds a **prognostic stage** incorporating grade + ER/PR/HER2",
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
   "id": "surg-breast-endocrine-20",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/3D_medical_animation_TNM_Staging_System.jpg/960px-3D_medical_animation_TNM_Staging_System.jpg",
     "caption": "TNM breast cancer staging chart - T1/T2/T3/T4 size cut-offs",
     "alt": "Diagram illustrating T-stage size thresholds: T1 ≤20mm (with T1a/b/c subdivisions), T2 >20-50mm, T3 >50mm, T4 = chest-wall/skin involvement regardless of size",
     "credit": "Wikimedia Commons"
    }
   ]
  }
 ]
}
);
