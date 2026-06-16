window.GOTCHA = window.GOTCHA || { modules: [] };
window.GOTCHA.modules.push(
{
 "id": "dermatology",
 "name": "Dermatology",
 "category": "Medicine",
 "blurb": "Written-exam + VIVA. Skin-cancer discrimination and the dermatological emergencies (SJS/TEN, nec fasc).",
 "cards": [
  {
   "topic": "Erythema multiforme vs SJS/TEN: target morphology + the % BSA detachment spectrum",
   "subarea": "Skin signs & dermatological emergencies",
   "trap": "- EM and SJS/TEN are **DIFFERENT diseases**, not a continuum\n- **EM** features:\n  - TRUE target lesions (**3 zones**), acral/extremity predominant\n  - Usually post-**INFECTION** (HSV commonest trigger; Mycoplasma in children)\n  - Minimal/no skin detachment, low mortality\n- **SJS/TEN** features:\n  - Atypical **FLAT targets** + dusky macules\n  - **TRUNK/face** predominant\n  - Almost always **DRUG-induced**\n  - Epidermal **DETACHMENT** classified by % BSA\n- The term **'EM major' is largely abandoned** — do NOT equate EM major with SJS",
   "whatFirst": "- Decide **target type + distribution + trigger**\n- If dusky/flat targets, mucosal involvement, positive Nikolsky, skin pain, or any detachment → treat as **SJS/TEN**:\n  - **STOP the culprit drug immediately**\n  - Calculate **SCORTEN**\n  - Escalate to **burns/ICU + dermatology**",
   "discriminator": "- **EM** = raised typical 3-zone targets, acral, infection-driven, recurs with HSV\n- **SJS/TEN** = atypical flat targets/dusky macules, central/truncal, drug-driven (allopurinol, anticonvulsants, sulfonamides, NSAIDs), >=2 mucosal sites, Nikolsky+, skin pain\n- **% detachment** defines SJS vs overlap vs TEN",
   "redFlags": "- **Skin PAIN out of proportion**, dusky/grey skin, positive **Nikolsky**\n- **>=2 mucosae involved**, fever\n- Target evolving to **bullae/sloughing**\n  - Dermatological emergency",
   "mcqTrap": "- Tempting wrong answer: calling extensive EM **'EM major = SJS'** or giving systemic steroids/IVIG as first action\n- WRONG first action — the single most important step in suspected SJS/TEN is **STOPPING the offending drug**\n  - Immunomodulation is contested/secondary",
   "source": "DermNet NZ (SJS/TEN; Erythema multiforme); Bastuji-Garin et al consensus classification of SJS/TEN (BSA detachment); eTG complete (severe cutaneous adverse drug reactions)",
   "viva": "- Say: '**Dusky atypical targets on the trunk** with mucosal erosions and skin pain points to SJS/TEN, not EM'\n- '**My very first action** is to cease the likely drug'\n- 'Then I classify by percent detachment (**<10 SJS**, **10–30 overlap**, **>30 TEN**) and calculate **SCORTEN** for prognosis while escalating to a burns unit'\n- Examiner probes the % cut-offs and 'stop the drug first'",
   "mnemonic": "Detachment ladder: <10 -> 10-30 -> >30 = SJS -> Overlap -> TEN. 'TEN is over 30.'",
   "tags": [
    "erythema multiforme",
    "SJS",
    "TEN",
    "BSA",
    "drug reaction"
   ],
   "verified": true,
   "cutoffs": [
    "SJS **<10%** BSA detachment",
    "SJS/TEN overlap **10–30%**",
    "TEN **>30%**"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Targets: raised, typical 3-zone, acral + infection trigger -> ERYTHEMA MULTIFORME</div><div class=\"gv-step\">Targets: flat/atypical, dusky, trunk + drug + Nikolsky+ + mucosae -> SJS/TEN</div><div class=\"gv-step\">Detachment <span class=\"gv-num\">&lt;10%</span> = SJS &middot; <span class=\"gv-num\">10-30%</span> = overlap &middot; <span class=\"gv-num\">&gt;30%</span> = TEN</div></div>",
   "title": "Erythema multiforme vs SJS/TEN",
   "subtitle": "target morphology + the % BSA detachment spectrum",
   "id": "dermatology-1",
   "images": [
    {
     "src": "assets/img/dermatology_derm_target_lesions_em_01.jpg",
     "caption": "Erythema multiforme — classic target (iris) lesions",
     "alt": "Erythema multiforme: multiple discrete three-zone target lesions with dark dusky centre, pale intermediate ring, and erythematous outer rim — acral distribution",
     "credit": "Grook Da Oger, Wikimedia Commons, CC BY-SA 3.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Toxic-epidermal-necrolysis.jpg",
     "caption": "Stevens-Johnson syndrome — mucosal involvement and epidermal detachment",
     "alt": "SJS: confluent blistering with mucosal erosions (lips/eyes), atypical flat targets and epidermal detachment <10% BSA — drug-triggered",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Erythema nodosum: it's a SEPTAL panniculitis, NOT vasculitis - and the 'workup' is the gotcha",
   "subarea": "Skin signs & dermatological emergencies",
   "trap": "- EN **never ulcerates** and **never scars**\n  - Deep fat inflammation — bruise-like colour evolution, resolves like a contusion over ~**6 weeks**\n- Histology = **SEPTAL panniculitis WITHOUT vasculitis** (the classic exam phrase)\n- Biopsy is **rarely needed**; real work is finding the **CAUSE**\n- Must-not-miss baseline workup in Australia:\n  - **Throat swab/ASOT** (strep)\n  - **CXR** (sarcoidosis bilateral hilar lymphadenopathy + TB)\n  - Ask about **IBD**, drugs (OCP, sulfonamides), and pregnancy\n- ~**50% are idiopathic**",
   "whatFirst": "- Recognise **tender erythematous nodules over the SHINS** (pretibial, bilateral)\n- Search for cause:\n  - **Streptococcal serology/throat swab**\n  - **CXR** (sarcoid vs TB)\n  - FBC/CRP\n  - Consider IBD and drug/pregnancy history\n- Manage: **NSAIDs + leg elevation** + treat underlying cause",
   "discriminator": "- **EN** = SEPTAL panniculitis, NO vasculitis, NO ulceration, shins, resolves like a bruise\n- **Erythema induratum** (nodular vasculitis, TB-associated) = LOBULAR panniculitis WITH vasculitis, on the **CALVES (posterior)**, and DOES ulcerate\n- **Cellulitis** = unilateral, hot, spreading, febrile",
   "redFlags": "- **Bilateral hilar lymphadenopathy** on CXR (sarcoid or lymphoma)\n- **Weight loss/night sweats** (TB, lymphoma)\n- **GI symptoms** (IBD/Behcet)\n  - Directed workup required",
   "mcqTrap": "- Tempting wrong answer: **'leukocytoclastic vasculitis on biopsy'**\n  - WRONG for EN — defining histology is **septal panniculitis WITHOUT vasculitis**\n  - Vasculitis on biopsy points to erythema induratum or a true vasculitic process",
   "source": "DermNet NZ (Erythema nodosum); eTG complete (reactive erythemas); Australian dermatology teaching",
   "viva": "- Say: '**Tender pretibial nodules that bruise and never ulcerate** — this is septal panniculitis'\n- 'My job is to find the trigger: I'd do a **CXR for hilar nodes**, **strep serology**, and ask about IBD, drugs and pregnancy'\n- Examiner probes **'septal without vasculitis'** and the CXR",
   "mnemonic": "Causes = 'NODOSUM': NO cause (idiopathic ~50%), Drugs (OCP/sulfa), Oral contraceptive, Sarcoidosis, Other infections, Streptococcus, Ulcerative colitis/IBD, Microbiology (TB).",
   "tags": [
    "erythema nodosum",
    "panniculitis",
    "sarcoidosis",
    "streptococcus",
    "discriminator"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th></th><th>Erythema nodosum</th><th>Erythema induratum (Bazin)</th></tr><tr><td>Panniculitis</td><td>Septal, NO vasculitis</td><td>Lobular, WITH vasculitis</td></tr><tr><td>Site</td><td>Shins (anterior)</td><td>Calves (posterior)</td></tr><tr><td>Ulcerates?</td><td>Never</td><td>Yes</td></tr><tr><td>Association</td><td>Strep, sarcoid, IBD, drugs</td><td>TB</td></tr></table>",
   "title": "Erythema nodosum",
   "subtitle": "it's a SEPTAL panniculitis, NOT vasculitis - and the 'workup' is the gotcha",
   "id": "dermatology-2",
   "images": [
    {
     "src": "assets/img/dermatology_derm_erythema_nodosum_01.jpg",
     "caption": "Erythema nodosum - tender erythematous/violaceous nodules on anterior shins",
     "alt": "Multiple tender, bruise-like erythematous and violaceous subcutaneous nodules over the anterior shins — the classic appearance of septal panniculitis",
     "credit": "Doc James, Wikimedia Commons, CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "Erythroderma (>=90% BSA): the dermatological emergency of 'acute skin failure'",
   "subarea": "Skin signs & dermatological emergencies",
   "trap": "- Definition cut-off = erythema affecting **>=90% of body surface area**\n  - 70–90% = 'sub-erythroderma'\n- This is a **true emergency** — skin barrier fails:\n  - **HYPOTHERMIA** (heat loss through dilated vessels)\n  - **High-output cardiac failure**\n  - Fluid/electrolyte loss\n  - Hypoalbuminaemia\n  - Secondary sepsis\n- Causes: pre-existing dermatoses (**psoriasis, eczema**) most common; drugs; cutaneous T-cell lymphoma (Sezary syndrome); idiopathic\n- Do NOT anchor on **'it's just bad eczema'**",
   "whatFirst": "- **ABC + thermoregulation** (warm the patient — they lose heat)\n- **Fluid/electrolyte balance + albumin**\n- **Stop any culprit drug**\n- Emollients/wet dressings; NOT immediate potent systemic immunosuppression until cause clarified\n  - **Systemic steroids can flare psoriasis** → pustular/erythrodermic rebound\n- Admit + dermatology + **skin biopsy** to find cause",
   "discriminator": "- **Erythroderma** = redness/scaling with intact skin, gradual\n- **TEN** = skin DETACHMENT/sloughing, Nikolsky+, drug-triggered, mucosal\n- Clues to cause:\n  - Islands of sparing + orange tinge = **pityriasis rubra pilaris**\n  - Lymphadenopathy + Sezary cells = **CTCL**",
   "redFlags": "- **Hypothermia**, hypotension/high-output failure, tachycardia, hypoalbuminaemia, signs of **sepsis**\n  - Admit, often HDU\n- New erythroderma in elderly → exclude **CTCL/Sezary** and drug cause",
   "mcqTrap": "- Tempting wrong answer: **'give high-dose systemic corticosteroids first'**\n  - WRONG in undifferentiated erythroderma — if cause is psoriasis, steroids can precipitate **erythrodermic/pustular rebound**\n  - First priorities: **thermoregulation**, fluids, finding the cause",
   "source": "DermNet NZ (Erythroderma); eTG complete (erythroderma); Australasian College of Dermatologists",
   "viva": "- Say: '**Confluent erythema over 90% or more** of the body is acute skin failure'\n- 'My priorities are **warming the patient** because they lose heat, correcting fluids and electrolytes, stopping any new drug, and admitting for biopsy to find the cause'\n- 'I'd **avoid blind systemic steroids** in case this is psoriasis'\n- Examiner probes the **hypothermia/high-output-failure** complications",
   "mnemonic": "Causes: Idiopathic, Drugs, Sezary/CTCL, pre-existing dermatoses (psoriasis/eczema) - but the killers are temperature, fluids, heart. Think 'red all over = cold inside'.",
   "tags": [
    "erythroderma",
    "exfoliative dermatitis",
    "skin failure",
    "Sezary",
    "psoriasis"
   ],
   "verified": true,
   "cutoffs": [
    "**>=90%** BSA erythema = erythroderma",
    "**70–90%** BSA = sub-erythroderma"
   ],
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Hypothermia (heat loss)</span><span class=\"gv-pill\">High-output cardiac failure</span><span class=\"gv-pill\">Fluid/electrolyte loss</span><span class=\"gv-pill\">Hypoalbuminaemia</span><span class=\"gv-pill\">Secondary sepsis</span></div>",
   "title": "Erythroderma (>=90% BSA)",
   "subtitle": "the dermatological emergency of 'acute skin failure'",
   "id": "dermatology-3",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Dermatitis_exfoliativa.jpg/960px-Dermatitis_exfoliativa.jpg",
     "caption": "Erythroderma - generalised confluent erythema covering >90% BSA",
     "alt": "Erythroderma - generalised confluent erythema covering >90% BSA",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "IgA vasculitis (HSP): classification criteria & the renal follow-up timeline",
   "subarea": "Skin signs & dermatological emergencies",
   "trap": "- EULAR/PRINTO/PRES (Ankara 2010) criteria: **MANDATORY palpable purpura/petechiae with LOWER-LIMB PREDOMINANCE** (buttocks/legs, not trunk)\n- PLUS **>=1** of:\n  - Diffuse **abdominal pain**\n  - Biopsy showing **IgA deposition**\n  - **Arthritis/arthralgia**\n  - **Renal involvement** (haematuria/proteinuria)\n- Most kids do **NOT need a biopsy** — it's a clinical diagnosis\n- The killer is **nephritis**, which can appear **WEEKS to MONTHS LATER**\n  - Urinalysis + BP monitoring continues for at least **6 months** (some protocols 12 months) even after the rash clears",
   "whatFirst": "- Confirm **purpura distribution** (buttocks + extensor legs)\n- **Urinalysis + BP**\n- If normal: supportive care + scheduled **urine/BP surveillance for at least 6 months**\n- If **proteinuria/HTN/abnormal renal function** → refer nephrology",
   "discriminator": "- **HSP purpura** = buttock/lower-limb predominant in a child after URTI; platelets normal\n- Adults with IgA vasculitis have **higher rates of severe nephritis**\n- **Meningococcaemia** = unwell, fever, hypotension, spreading rash — differentiate\n- Non-palpable thrombocytopenic purpura: **platelets low** (normal in HSP)",
   "redFlags": "- **Severe abdominal pain** (intussusception — ileoileal)\n- GI bleeding\n- **Scrotal pain** (torsion mimic)\n- Nephrotic-range **proteinuria**, hypertension, rising creatinine\n  - Escalate",
   "mcqTrap": "- Tempting wrong answer: **'reassure and discharge with no follow-up once the rash resolves'**\n  - WRONG — nephritis can develop **weeks to months after the rash**\n  - Ongoing **urinalysis/BP surveillance is mandatory**",
   "source": "EULAR/PRINTO/PRES (Ankara) classification criteria 2010; RCH Melbourne Clinical Practice Guideline (Henoch-Schonlein purpura); DermNet NZ (IgA vasculitis)",
   "viva": "- Say: '**Palpable purpura over buttocks and extensor legs** in a well child post-URTI'\n- 'I'd confirm normal platelets, dip the urine and check BP'\n- 'Then arrange **repeat urinalysis and BP for at least 6 months** because HSP nephritis is the complication that can present late'\n- Examiner probes the **prolonged renal surveillance**",
   "mnemonic": "HSP tetrad = 'PAIR': Purpura (lower limb), Abdominal pain, Inflamed joints (arthritis), Renal. Need Purpura + 1 of the other three.",
   "tags": [
    "IgA vasculitis",
    "HSP",
    "renal",
    "criteria",
    "paediatric"
   ],
   "verified": false,
   "cutoffs": [
    "Renal surveillance: urinalysis + BP for at least **6 months** (some protocols 12 months)",
    "Purpura distribution: **lower-limb/buttock predominant**"
   ],
   "title": "IgA vasculitis (HSP)",
   "subtitle": "classification criteria & the renal follow-up timeline",
   "id": "dermatology-4",
   "images": [
    {
     "src": "assets/img/paediatrics_rash_palpable_purpura_lower_limbs_01.jpg",
     "caption": "IgA vasculitis (HSP) - palpable purpura over buttocks and lower limbs",
     "alt": "Palpable purpuric lesions concentrated on the buttocks and extensor surfaces of the lower limbs — the mandatory criterion for HSP/IgA vasculitis",
     "credit": "Madhero88, Wikimedia Commons, CC BY-SA 3.0"
    }
   ]
  },
  {
   "topic": "Meningococcaemia / acute meningococcal septicaemia: the non-blanching rash that cannot wait",
   "subarea": "Skin signs & dermatological emergencies",
   "trap": "- A petechial/purpuric **non-blanching rash** in a febrile, unwell patient = **meningococcaemia until proven otherwise**\n- Give **empirical IV ceftriaxone IMMEDIATELY** (or IM/IV benzylpenicillin if pre-hospital/no ceftriaxone available)\n  - **Before LP**, blood cultures or transfer\n  - Do NOT delay antibiotics for investigations\n- The rash can start blanching/maculopapular and evolve\n- **Purpura fulminans** (retiform purpura + DIC) = late and ominous\n- This is the dermatological-emergency overlap the written paper loves to slip into a 'fever + rash' stem",
   "whatFirst": "- Recognise **febrile + non-blanching rash + toxic** → IMMEDIATE **empirical IV ceftriaxone**\n  - Do not wait for LP\n  - IM/IV **benzylpenicillin** pre-hospital if ceftriaxone unavailable\n- **Resuscitate** (fluids +/- vasopressors)\n- Blood cultures/PCR\n- **Notify public health** + arrange clearance prophylaxis for **close contacts**",
   "discriminator": "- **Meningococcal purpura** = systemically unwell, fever, rapidly spreading non-blanching rash +/- meningism\n- **HSP** = well child, lower-limb purpura, post-URTI\n- **Simple vasculitis** = afebrile, normal obs\n- **Tumbler test**: does not blanch = non-blanching",
   "redFlags": "- **Hypotension**, altered conscious state\n- **Rapidly spreading purpura**, cold peripheries, leg pain\n- **DIC** → septic shock → ICU\n- **Purpura fulminans** = emergency",
   "mcqTrap": "- Tempting wrong answer: **'perform LP / await blood culture results before antibiotics'**\n  - WRONG — antibiotics must **NEVER be delayed** for the LP in suspected meningococcal sepsis\n  - Give **ceftriaxone first**",
   "source": "eTG complete (Meningococcal disease / acute bacterial meningitis & sepsis); Australian Immunisation Handbook (contact clearance/prophylaxis); RCH / Australian sepsis pathways",
   "viva": "- Say (ISBAR): '**Febrile, hypotensive patient** with a spreading non-blanching purpuric rash — I'm treating this as meningococcaemia'\n- '**I've given IV ceftriaxone immediately** without waiting for the LP'\n- 'Started fluid resuscitation, taken cultures, and I'll notify public health for **contact prophylaxis**'\n- Examiner probes **'antibiotics before LP'** and contact prophylaxis",
   "mnemonic": "Non-blanching + fever = 'needle first' (ceftriaxone before everything). Tumbler test = treat.",
   "tags": [
    "meningococcaemia",
    "purpura",
    "sepsis",
    "ceftriaxone",
    "emergency"
   ],
   "verified": true,
   "cutoffs": [
    "Empirical **IV ceftriaxone** (adult typically 2 g) immediately; do NOT delay for LP",
    "Pre-hospital alternative: **IM/IV benzylpenicillin**"
   ],
   "title": "Meningococcaemia / acute meningococcal septicaemia",
   "subtitle": "the non-blanching rash that cannot wait",
   "id": "dermatology-5",
   "images": [
    {
     "src": "assets/img/dermatology_purpura_nonblanching_01.jpg",
     "caption": "Meningococcaemia - non-blanching petechial and purpuric rash",
     "alt": "Widespread non-blanching petechiae and purpuric macules on the skin, the hallmark of meningococcal septicaemia requiring immediate IV ceftriaxone",
     "credit": "DrFO.Jr.Tn, Wikimedia Commons, CC BY-SA 3.0"
    }
   ]
  },
  {
   "topic": "Necrotising fasciitis: the 'pain out of proportion' clinical diagnosis + LRINEC limits",
   "subarea": "Skin signs & dermatological emergencies",
   "trap": "- This is a **SURGICAL, CLINICAL diagnosis** — do NOT wait for imaging or the LRINEC score to operate\n- Earliest sign: **PAIN OUT OF PROPORTION** to skin findings, often with deceptively normal-looking skin early\n- **LRINEC** (>=6 suggestive, >=8 high risk; from CRP, WCC, Hb, Na, creatinine, glucose) is an **ADJUNCT only**\n  - A **LOW LRINEC does NOT exclude** necrotising fasciitis\n- Late signs (**bullae, crepitus, skin necrosis, anaesthesia** over the area) = advanced disease\n- **Mortality rises with every hour of delay** to debridement",
   "whatFirst": "- **Resuscitate** (sepsis: IV fluids, blood cultures)\n- Start **broad-spectrum IV antibiotics immediately**\n- **URGENT surgical consult** for exploration/debridement — do NOT delay surgery for imaging\n- eTG empirical regimen: **meropenem PLUS vancomycin PLUS clindamycin or lincomycin**\n  - Clindamycin/lincomycin added for **anti-toxin/anti-exotoxin effect** in GAS",
   "discriminator": "- **NF vs cellulitis**:\n  - NF: pain OUT OF PROPORTION, systemic toxicity, rapid spread, skin anaesthesia, dusky/bullous skin, crepitus, poor antibiotic response\n  - Cellulitis: well-demarcated, less toxic, responds to antibiotics\n- **'Dishwater-grey' fluid + non-bleeding fascia** at operation = confirms NF",
   "redFlags": "- **Pain out of proportion**, anaesthesia of overlying skin, **crepitus**, haemorrhagic bullae, rapidly advancing margin, **septic shock** → theatre NOW\n- Add **clindamycin/lincomycin** for toxin suppression\n- Consider **IVIG** in streptococcal toxic shock",
   "mcqTrap": "- Tempting wrong answer: **'order urgent MRI/CT to confirm before surgery'** or 'LRINEC is low so observe'\n  - WRONG — NF is a clinical/surgical emergency\n  - **Imaging must not delay debridement**\n  - A **low LRINEC does not rule it out**",
   "source": "eTG complete (Necrotising skin and soft tissue infections); Wong et al, LRINEC score (Crit Care Med 2004); LITFL / Australian surgical practice",
   "viva": "- Say (ISBAR): 'I am calling about a **septic patient with pain wildly out of proportion** to the skin and a rapidly spreading margin — I'm concerned about necrotising fasciitis'\n- 'I've started fluids, taken cultures and given **meropenem, vancomycin and clindamycin**'\n- 'I need an **urgent surgical review for theatre**'\n- Examiner probes **'don't wait for imaging'** + clindamycin's anti-toxin role",
   "mnemonic": "LRINEC labs = CRP, Hb, WCC, Na, Creatinine, Glucose. But remember: 'Cut, don't count' - the score never replaces the scalpel.",
   "tags": [
    "necrotising fasciitis",
    "LRINEC",
    "surgical emergency",
    "sepsis",
    "antibiotics"
   ],
   "verified": true,
   "cutoffs": [
    "LRINEC **>=6** = suggestive",
    "LRINEC **>=8** = high risk",
    "LRINEC **<=5** does NOT exclude NF"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Pain out of proportion + systemic toxicity -> suspect NF</div><div class=\"gv-step\">Resuscitate + cultures + IV meropenem + vancomycin + clindamycin/lincomycin</div><div class=\"gv-step\">URGENT surgical exploration & debridement - do NOT delay for imaging or LRINEC</div><div class=\"gv-step\">Re-look in theatre every 24-36 h until no further necrosis</div></div>",
   "title": "Necrotising fasciitis",
   "subtitle": "the 'pain out of proportion' clinical diagnosis + LRINEC limits",
   "id": "dermatology-6",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Necrotising_fascitis_producing_gas_in_soft_tissues.jpg/960px-Necrotising_fascitis_producing_gas_in_soft_tissues.jpg",
     "caption": "Necrotising fasciitis - CT showing gas in soft tissue planes",
     "alt": "Axial CT demonstrating gas tracking along fascial planes — the radiological sign of necrotising fasciitis (not needed to operate but confirms diagnosis)",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Necrotizing_fasciitis_left_leg.JPEG/960px-Necrotizing_fasciitis_left_leg.JPEG",
     "caption": "Necrotising fasciitis - deceptively normal overlying skin with underlying necrosis",
     "alt": "Necrotising fasciitis - deceptively normal overlying skin with underlying necrosis",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Palpable purpura = small-vessel vasculitis until proven otherwise (vs flat, non-palpable petechiae)",
   "subarea": "Skin signs & dermatological emergencies",
   "trap": "- The discriminator: **PALPABLE vs flat**\n  - Flat, non-blanching macules <=few mm = **petechiae** → think thrombocytopenia/platelet problem\n  - **Raised, palpable, non-blanching** = leukocytoclastic (small-vessel) vasculitis → **platelets are NORMAL**\n  - The reflex 'low platelets' answer is wrong for **palpable purpura**\n- Purpura that does **NOT blanch under glass** (tumbler/diascopy test) = extravasated blood, not erythema\n- Always do **urinalysis on ANY purpura** — occult renal vasculitis is the silent killer",
   "whatFirst": "- **Diascopy** (press glass) to confirm non-blanching\n- **Palpate** to classify palpable vs flat\n- **Urinalysis** (blood + protein) + BP + FBC/platelets/coags in EVERY case\n- If palpable + normal platelets: work up **small-vessel vasculitis**\n  - ANCA, complement, cryoglobulins, hepatitis serology\n  - Consider skin biopsy with **DIF**",
   "discriminator": "- **Palpable + normal platelets** = vasculitis\n- **Non-palpable + low platelets** = thrombocytopenic purpura\n- **Retiform/branching purpura with necrosis** = occlusive/embolic (e.g. cholesterol emboli, DIC, calciphylaxis)\n  - NOT inflammatory vasculitis",
   "redFlags": "- **Renal involvement** (haematuria/proteinuria), fever\n- **Retiform necrotic purpura**, mucosal bleeding, or rapidly progressive → admit\n- **Purpura + fever + hypotension** → treat as meningococcaemia\n  - **IV ceftriaxone NOW**, do not wait for LP",
   "mcqTrap": "- Tempting wrong answer: **'check/replace platelets'** for a palpable purpuric rash\n  - WRONG — palpable purpura implies **inflammatory vessel-wall damage with normal platelets**\n  - Right move: **urinalysis + vasculitis workup**, not platelet transfusion",
   "source": "DermNet NZ (Cutaneous vasculitis; Purpura); eTG complete (Vasculitis); Australian general dermatology practice",
   "viva": "- Say: 'I'd **press a glass slide over it** to confirm it's non-blanching, then palpate'\n- '**Palpable purpura** means small-vessel vasculitis with **normal platelets**'\n- 'My first investigation is a **urinalysis** to exclude renal involvement'\n- Examiner probes the **palpable-vs-flat split** and the mandatory urine dip",
   "mnemonic": "PALPABLE = vessel wall (vasculitis); FLAT = platelets. 'Feel it = vasculitis.'",
   "tags": [
    "purpura",
    "vasculitis",
    "discriminator",
    "urinalysis"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Feature</th><th>Petechiae / thrombocytopenic</th><th>Palpable purpura (vasculitis)</th><th>Retiform purpura</th></tr><tr><td>Palpable?</td><td>No (flat)</td><td>Yes (raised)</td><td>Yes, branching/necrotic</td></tr><tr><td>Platelets</td><td>Low</td><td>Normal</td><td>Normal</td></tr><tr><td>Mechanism</td><td>Platelet defect</td><td>Inflammatory vessel damage</td><td>Vessel occlusion/embolus</td></tr><tr><td>First test</td><td>FBC/platelets</td><td>Urinalysis + vasculitis screen</td><td>Coags, emboli source, biopsy</td></tr></table>",
   "title": "Palpable purpura = small-vessel vasculitis until proven…",
   "id": "dermatology-7",
   "images": [
    {
     "src": "assets/img/dermatology_purpura_nonblanching_01.jpg",
     "caption": "Palpable purpura - raised non-blanching lesions of small-vessel vasculitis",
     "alt": "Raised, palpable, non-blanching purpuric papules indicating leukocytoclastic vasculitis — the key discriminator from flat petechiae",
     "credit": "DrFO.Jr.Tn, Wikimedia Commons, CC BY-SA 3.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Petechia_lower_leg.jpg/960px-Petechia_lower_leg.jpg",
     "caption": "Flat petechiae - non-blanching macules from thrombocytopenia",
     "alt": "Flat, non-palpable, non-blanching petechial macules characteristic of a platelet/thrombocytopenic cause",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Pemphigus vulgaris vs bullous pemphigoid: the split level, Nikolsky, mucosa, age & DIF pattern",
   "subarea": "Skin signs & dermatological emergencies",
   "trap": "- One word decides it on DIF: **INTRAepidermal** vs **SUBepidermal**\n  - **Pemphigus** = desmoglein 1/3, fish-net/'chicken-wire' **INTERCELLULAR IgG** (intraepidermal)\n  - **Pemphigoid** = BP180/BP230, **LINEAR IgG/C3 along the basement membrane** (subepidermal)\n- **Pemphigus** clinical features:\n  - **FLACCID blisters** that rupture to painful erosions\n  - **MUCOSA almost always involved** (often the presenting sign)\n  - **Nikolsky POSITIVE**\n  - Younger/middle-aged\n  - Potentially fatal\n- **Pemphigoid** clinical features:\n  - **TENSE blisters** on erythematous/urticarial base\n  - **ELDERLY, ITCHY**\n  - Mucosa usually **SPARED**\n  - **Nikolsky NEGATIVE**",
   "whatFirst": "- Take **TWO biopsies**:\n  - Lesional for **H&E**\n  - **PERILESIONAL** (adjacent normal skin) for **DIF** — gold standard\n- Send serum **indirect IF / ELISA** for desmoglein or BP180 antibodies\n- Then specialist-led **immunosuppression**",
   "discriminator": "- Flaccid + mucosal + Nikolsky+ + younger + **intraepidermal/intercellular IgG** = **pemphigus**\n- Tense + itchy + elderly + mucosa spared + Nikolsky- + **subepidermal/linear IgG-C3** = **pemphigoid**\n  - Exception: **Mucous membrane pemphigoid** scars mucosae",
   "redFlags": "- **Pemphigus** is potentially fatal (fluid loss, sepsis through eroded skin)\n  - Widespread erosions warrant **admission**\n- **Extensive pemphigoid** in frail elderly also needs admission",
   "mcqTrap": "- Tempting wrong answer: biopsying **the blister itself (intra-lesional) for DIF**\n  - WRONG — DIF must be on **PERILESIONAL normal-appearing skin**\n  - A fully blistered specimen loses the diagnostic immunoreactant pattern",
   "source": "DermNet NZ (Pemphigus vulgaris; Bullous pemphigoid); eTG complete (immunobullous disease); Australasian College of Dermatologists guidance",
   "viva": "- Say: '**Elderly, itchy, tense bullae** with mucosa spared and a negative Nikolsky points to pemphigoid'\n- '**Subepidermal split**, linear IgG/C3 on DIF'\n- 'I'd biopsy **perilesional skin** for DIF and send serum for **BP180 antibodies**'\n- Examiner probes the **intra- vs sub-epidermal split** and perilesional DIF",
   "mnemonic": "'PemphiGUS = Goes Up Superficial' (intraepidermal, flaccid, Nikolsky+, mucosa). 'PemphiGOID = deep/below, tense, elderly.'",
   "tags": [
    "pemphigus",
    "pemphigoid",
    "immunobullous",
    "DIF",
    "Nikolsky",
    "discriminator"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Feature</th><th>Pemphigus vulgaris</th><th>Bullous pemphigoid</th></tr><tr><td>Split level</td><td>Intraepidermal</td><td>Subepidermal</td></tr><tr><td>Blister</td><td>Flaccid, ruptures</td><td>Tense, intact</td></tr><tr><td>Mucosa</td><td>Involved (often first)</td><td>Usually spared</td></tr><tr><td>Nikolsky</td><td>Positive</td><td>Negative</td></tr><tr><td>Age</td><td>Middle-aged</td><td>Elderly</td></tr><tr><td>Antigen</td><td>Desmoglein 1/3</td><td>BP180 / BP230</td></tr><tr><td>DIF</td><td>Intercellular IgG (net)</td><td>Linear IgG/C3 at BMZ</td></tr></table>",
   "title": "Pemphigus vulgaris vs bullous pemphigoid",
   "subtitle": "the split level, Nikolsky, mucosa, age & DIF pattern",
   "id": "dermatology-8",
   "images": [
    {
     "src": "assets/img/dermatology_derm_tense_bullae_pemphigoid_01.jpg",
     "caption": "Bullous pemphigoid - tense subepidermal bullae on erythematous base, mucosa spared",
     "alt": "Large, tense, intact bullae on an urticarial/erythematous base — subepidermal split; mucosa typically spared; negative Nikolsky sign",
     "credit": "Mohammad2018, Wikimedia Commons, CC BY-SA 4.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Pemphigus_new_photo_due_to_antihypertensive_drug.jpg",
     "caption": "Pemphigus vulgaris - flaccid blisters and erosions with mucosal involvement",
     "alt": "Flaccid, easily ruptured blisters and widespread erosions — intraepidermal split; mucosa involved; positive Nikolsky sign",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Pressure injuries: the international staging system & the 'unstageable / deep tissue' traps",
   "subarea": "Skin signs & dermatological emergencies",
   "trap": "- Australia uses the international **NPIAP/EPUAP/PPPIA classification (2019)**\n- **Stage 1** = NON-BLANCHABLE erythema of **INTACT skin** (intact + non-blanchable; differs from blanchable transient redness)\n- **Stage 2** = partial-thickness loss, exposed **DERMIS** (may look like an intact/ruptured serous blister — NOT slough)\n- **Stage 3** = full-thickness, **fat visible** (no bone/tendon/muscle)\n- **Stage 4** = exposed **bone/tendon/muscle**\n- The two exam-catchers:\n  - **UNSTAGEABLE** = base obscured by slough/eschar (can't see depth — it's at least a stage 3/4)\n  - **DEEP TISSUE INJURY** = persistent non-blanchable **DEEP RED/MAROON/PURPLE discolouration** or blood-filled blister over intact/non-intact skin\n- **Stable dry eschar on a heel** = leave it (do NOT debride)",
   "whatFirst": "- Identify stage\n- **Offload/reposition** (the single most important intervention) + pressure-redistributing surface\n- Wound care appropriate to stage\n- Nutrition + treat infection\n- **Risk-assess all at-risk patients** (e.g. Waterlow/Braden) on admission",
   "discriminator": "- **Stage 1** = intact non-blanchable erythema (not Stage 2)\n- **Stage 2** = exposed pink/red dermis, moist, NO slough/granulation (slough = deeper)\n- **UNSTAGEABLE** = cannot see the base (slough/eschar covers it)\n- **DEEP TISSUE INJURY** = purple/maroon intact skin (NOT Stage 1)",
   "redFlags": "- Spreading erythema, malodour, purulence, **systemic sepsis** → treat infection/osteomyelitis (stage 4 over bony prominence)\n- **Rapidly evolving deep tissue injury** may declare as a full-thickness wound despite intact skin",
   "mcqTrap": "- Tempting wrong answer: staging an eschar-covered wound as **'Stage 4'** or calling purple intact skin **'Stage 1'**\n  - WRONG — an obscured base is **UNSTAGEABLE** (depth unknown)\n  - Intact maroon/purple discolouration is a **DEEP TISSUE PRESSURE INJURY**, not Stage 1",
   "source": "NPIAP/EPUAP/PPPIA International Pressure Injury Classification (2019, current); NSW Agency for Clinical Innovation Pressure Injury resources; Wounds Australia",
   "viva": "- Say: '**Non-blanchable erythema over intact skin** is Stage 1; once I can see dermis it's Stage 2'\n- 'If slough or eschar hides the base I can't stage it — it's **UNSTAGEABLE** and at least Stage 3'\n- '**Purple intact skin** is a deep tissue injury'\n- 'My priority for all of them is **offloading** and a pressure-redistributing surface'\n- Examiner probes **unstageable vs deep tissue injury** and 'don't debride stable heel eschar'",
   "mnemonic": "Stages 1-4 = 'Red -> Dermis -> Fat -> Bone.' Two wildcards: Unstageable (covered) and Deep Tissue Injury (purple/maroon, intact).",
   "tags": [
    "pressure injury",
    "staging",
    "NPIAP",
    "unstageable",
    "deep tissue injury"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Stage</th><th>Defining feature</th></tr><tr><td>Stage 1</td><td>Intact skin, non-blanchable erythema</td></tr><tr><td>Stage 2</td><td>Partial thickness, exposed dermis (no slough)</td></tr><tr><td>Stage 3</td><td>Full thickness, fat visible; no bone/tendon/muscle</td></tr><tr><td>Stage 4</td><td>Exposed bone, tendon or muscle</td></tr><tr><td>Unstageable</td><td>Base obscured by slough/eschar (depth unknown)</td></tr><tr><td>Deep tissue injury</td><td>Persistent purple/maroon, intact or blood blister</td></tr></table>",
   "title": "Pressure injuries",
   "subtitle": "the international staging system & the 'unstageable / deep tissue' traps",
   "id": "dermatology-9",
   "images": [
    {
     "src": "assets/img/dermatology_derm_pressure_injury_sacral_01.jpg",
     "caption": "Pressure injury staging - sacral full-thickness ulcer (Stage 3/4)",
     "alt": "Stage 3/4 pressure injury over the sacrum with full-thickness skin loss, slough and exposed subcutaneous tissue — demonstrating the NPIAP staging system",
     "credit": "AfroBrazilian, Wikimedia Commons, CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "SCORTEN: the 7 parameters, when to score, and what each point predicts",
   "subarea": "Skin signs & dermatological emergencies",
   "trap": "- **SCORTEN has 7 variables**, each = 1 point\n- Ideally scored at **24h AND day 3** (day 3 is more predictive)\n- Variables:\n  - **Age >40**\n  - **Malignancy** present\n  - **HR >120**\n  - Initial **BSA detachment >10%**\n  - **Urea >10 mmol/L** (BUN ~28 mg/dL)\n  - **Bicarbonate <20 mmol/L**\n  - **Glucose >14 mmol/L** (~252 mg/dL)\n- Exam trap: people misremember cut-offs in mg/dL — **use Australian SI units**\n- Mortality climbs steeply: **0–1 ~3%**, 2 ~12%, 3 ~35%, 4 ~58%, **>=5 >90%**",
   "whatFirst": "- **Stop culprit drug** first\n- **Calculate SCORTEN** on admission and repeat at day 3\n- **Transfer to burns/ICU** if high score\n- Supportive care:\n  - **Fluids**, thermoregulation\n  - **Eye/mucosal care**\n  - **Wound care**",
   "discriminator": "- **SCORTEN is for SJS/TEN prognosis**, NOT diagnosis and NOT for EM\n- Do not confuse with **LRINEC** (necrotising fasciitis) or other scores",
   "redFlags": "- **SCORTEN >=3** = high mortality → ICU/burns unit\n- **Ocular involvement** → urgent ophthalmology to prevent scarring/blindness",
   "mcqTrap": "- Most tempting wrong answer: including **'fever' or 'neutropenia'** as SCORTEN variables\n- **WRONG** — they are not part of SCORTEN\n- The 7 correct variables: age, malignancy, tachycardia, BSA, urea, bicarbonate, glucose",
   "source": "Bastuji-Garin et al, SCORTEN (J Invest Dermatol 2000); DermNet NZ (SJS/TEN); eTG complete (severe cutaneous adverse reactions)",
   "viva": "- Say: 'I'd calculate **SCORTEN at admission and again at day 3**'\n- Each of the seven variables scores one point\n- A score of **three or more** means roughly a third or higher mortality → needs a burns unit\n- Examiner probes: naming all **7 variables** and the **SI cut-offs**",
   "mnemonic": "'SCORTEN' -> 7 'M' enemies: Malignancy, Mature age >40, Mad HR >120, Massive detachment >10%, Markedly high urea >10, low Bicarb <20, Mega glucose >14.",
   "tags": [
    "SCORTEN",
    "TEN",
    "SJS",
    "prognosis",
    "scores"
   ],
   "verified": true,
   "cutoffs": [
    "**Age >40**",
    "**HR >120**",
    "**BSA detachment >10%**",
    "**Urea >10 mmol/L**",
    "**Bicarbonate <20 mmol/L**",
    "**Glucose >14 mmol/L**",
    "**Malignancy** present",
    "Score **>=3** ~35% mortality; **>=5** >90%"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>SCORTEN (1 pt each)</th><th>Cut-off</th></tr><tr><td>Age</td><td>&gt;40 yr</td></tr><tr><td>Malignancy</td><td>Present</td></tr><tr><td>Heart rate</td><td>&gt;120 bpm</td></tr><tr><td>Initial detachment</td><td>&gt;10% BSA</td></tr><tr><td>Serum urea</td><td>&gt;10 mmol/L</td></tr><tr><td>Bicarbonate</td><td>&lt;20 mmol/L</td></tr><tr><td>Glucose</td><td>&gt;14 mmol/L</td></tr></table>",
   "title": "SCORTEN",
   "subtitle": "the 7 parameters, when to score, and what each point predicts",
   "id": "dermatology-10",
   "images": [
    {
     "src": "assets/img/dermatology_derm_target_lesions_em_01.jpg",
     "caption": "Target lesions of erythema multiforme / early SJS - atypical targetoid lesions",
     "alt": "Classic and atypical target lesions on the skin representing the early SJS/EM spectrum — the histological precursor to TEN, scored by SCORTEN",
     "credit": "Grook Da Oger, Wikimedia Commons, CC BY-SA 3.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Necrolysis_epidermalis_toxica_01.JPG/960px-Necrolysis_epidermalis_toxica_01.JPG",
     "caption": "Stevens-Johnson syndrome / TEN - epidermal detachment and mucositis",
     "alt": "Widespread full-thickness epidermal detachment with raw denuded areas, mucosal erosions, and target/atypical lesions — the SJS/TEN spectrum requiring SCORTEN scoring",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Venous vs arterial leg ulcers: site, ABPI thresholds & the compression-safety gotcha",
   "subarea": "Skin signs & dermatological emergencies",
   "trap": "- **ABPI is the gatekeeper for compression** — must be measured before applying any compression\n- Normal ABPI: **~0.9–1.3**\n- Full (high) compression safe only if **ABPI >=0.8**\n- **ABPI <0.8** = significant arterial disease → vascular referral / reduced (modified) compression only\n- **ABPI <0.5** = severe → critical limb ischaemia, compression **contraindicated**\n- **ABPI >1.3** = falsely high (non-compressible calcified vessels in diabetes/CKD)\n  - Do NOT be reassured — **use toe pressures**\n- Classic killer answer: putting full compression on an arterial ulcer → **necrosis/amputation**",
   "whatFirst": "- **Examine + measure ABPI before ANY compression**\n- If ABPI **0.8–1.3** and venous features → compression therapy + leg elevation\n- If ABPI **<0.8** → vascular referral, no or modified compression\n- If ABPI **<0.5** → **urgent vascular** (critical ischaemia)",
   "discriminator": "- **VENOUS**: medial malleolus ('gaiter' area), shallow/sloping, exudative\n  - Painful but **relieved by elevation**; surrounded by haemosiderin/lipodermatosclerosis/varicose eczema; warm foot with pulses\n- **ARTERIAL**: distal/lateral/pressure points/toes, **'punched-out' deep**, dry\n  - **PAINFUL especially at night/elevation**, relieved by dependency; cold pale leg, absent pulses, hairless shiny skin\n- **NEUROPATHIC** (diabetic): over pressure points (sole/metatarsal heads)\n  - **Painless**, surrounding callus",
   "redFlags": "- **Rest pain**, night pain relieved by hanging the leg down\n- **Gangrene**, absent pulses, **ABPI <0.5** → critical limb ischaemia, urgent vascular\n- Any non-healing ulcer **>3 months** or atypical edge → **biopsy** to exclude SCC (Marjolin ulcer)",
   "mcqTrap": "- Most tempting wrong answer: **'apply high compression bandaging'** without checking ABPI or when ABPI <0.8\n- **WRONG and dangerous** — compression on undiagnosed arterial disease causes ischaemic necrosis\n- **Always document ABPI** before compressing",
   "source": "Wounds Australia / Australian and New Zealand venous leg ulcer guidelines; DermNet NZ (leg ulcers); eTG complete (leg ulcers)",
   "viva": "- Say: 'Before I compress any venous-looking ulcer I must **document the ABPI** to exclude arterial disease'\n- Compressing an ischaemic limb can cause **necrosis** — full compression only safe with ABPI **~0.8 or above**\n- A punched-out painful ulcer with absent pulses is **arterial** → vascular referral, not compression\n- Examiner probes: the **~0.8 compression threshold** and the **site map**",
   "mnemonic": "'VENous = gaiter/Medial, Moist, eased by Elevation' vs 'ARterial = Apex/toes, Agony at night, Absent pulses'. Full compression only if ABPI ~>=0.8.",
   "tags": [
    "leg ulcers",
    "venous",
    "arterial",
    "ABPI",
    "compression",
    "discriminator"
   ],
   "verified": false,
   "cutoffs": [
    "Normal ABPI **~0.9–1.3**",
    "Full compression generally safe if ABPI **>=0.8**",
    "ABPI **<0.8** = arterial disease, vascular referral / modified compression",
    "ABPI **<0.5** = critical ischaemia, compression contraindicated",
    "ABPI **>1.3** = falsely high (calcified, diabetes/CKD) — use toe pressures"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Feature</th><th>Venous</th><th>Arterial</th></tr><tr><td>Site</td><td>Medial malleolus (gaiter)</td><td>Toes/lateral/pressure points</td></tr><tr><td>Edge/base</td><td>Shallow, sloping, exudative</td><td>Punched-out, deep, dry</td></tr><tr><td>Pain</td><td>Relieved by elevation</td><td>Worse on elevation / at night</td></tr><tr><td>Pulses/skin</td><td>Present; haemosiderin, eczema</td><td>Absent; cold, pale, hairless</td></tr><tr><td>ABPI</td><td>&gt;=0.8 -> compress</td><td>&lt;0.8 -> vascular, no full compression</td></tr></table>",
   "title": "Venous vs arterial leg ulcers",
   "subtitle": "site, ABPI thresholds & the compression-safety gotcha",
   "id": "dermatology-11",
   "images": [
    {
     "src": "assets/img/dermatology_venous_leg_ulcer_01.jpg",
     "caption": "Venous leg ulcer - shallow, irregular, gaiter-zone ulcer with lipodermatosclerosis",
     "alt": "Shallow, irregularly shaped ulcer at the medial gaiter zone (above medial malleolus) with surrounding lipodermatosclerosis, haemosiderin staining and varicosities",
     "credit": "Ashashyou, Wikimedia Commons, CC BY-SA 4.0 (gauze edge cropped)"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/3/30/Arterial_ulcer_peripheral_vascular_disease.jpg",
     "caption": "Arterial leg ulcer - deep, punched-out ulcer over pressure point with pale base",
     "alt": "Deep, punched-out, well-demarcated ulcer over the dorsum of the foot or pressure point with a pale/necrotic base — arterial/ischaemic ulcer",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Actinic (solar) keratosis vs Bowen disease (SCC in situ) — the precursor spectrum",
   "subarea": "Skin cancer & lesions",
   "trap": "- **Actinic keratosis (AK/solar keratosis)** = dysplastic keratinocytes, **PRE-malignant**\n  - Rough 'sandpaper' scaly macule/papule on sun-exposed skin — often better **FELT than seen**\n  - Small but real risk: **~0.1–1%/lesion/yr** of progressing to invasive SCC\n- **Bowen disease** = **SCC IN SITU** (full-thickness epidermal dysplasia, intact basement membrane)\n  - Well-demarcated erythematous **SCALY PLAQUE**, often on lower legs of older women\n  - **~3–5%** progress to invasive SCC\n- Spectrum: **AK → Bowen (SCC in situ) → invasive SCC**\n- Key escalation trigger: a **painful/tender, indurated, thickened or ULCERATED** area within AK or Bowen = suspect invasion → **BIOPSY** (not field treatment)",
   "discriminator": "- **AK**: small (<1 cm), gritty/sandpaper scale, ill-defined, on face/scalp/dorsal hands\n- **Bowen**: larger well-demarcated erythematous scaly/crusted plaque, classically lower leg, slow\n  - Mimics psoriasis/eczema/superficial BCC\n  - 'Patch of eczema' that **won't respond to steroid** and is solitary/fixed → **biopsy for Bowen**\n- **Induration/nodularity/pain** = invasive SCC (no longer in situ)",
   "whatFirst": "- Isolated AK → **cryotherapy** (liquid nitrogen)\n- Multiple AKs/field change → **field therapy**: topical 5-fluorouracil, imiquimod, or PDT\n- Bowen disease → cryotherapy, **5-FU, imiquimod, PDT, curettage**, OR excision (esp. if diagnosis uncertain)\n- ANY suspicion of invasion (induration/pain/ulcer/nodule) → **biopsy FIRST**, don't field-treat",
   "redFlags": "- **Tender/indurated/thickened/ulcerated/rapidly enlarging** area within AK or Bowen → suspect invasive SCC → biopsy + manage as SCC\n- **Immunosuppressed** patient with multiple AKs → low threshold for biopsy/specialist referral",
   "source": "eTG complete — Dermatology (solar keratoses; intraepidermal carcinoma / Bowen disease); Cancer Council Australia Keratinocyte Cancer Guideline.",
   "tags": [
    "actinic keratosis",
    "solar keratosis",
    "Bowen disease",
    "SCC in situ",
    "field treatment",
    "5-FU",
    "high-yield"
   ],
   "mnemonic": "AK → Bowen (in situ) → invasive SCC. 'Sandpaper macule = AK; well-demarcated scaly plaque on the shin = Bowen; tender indurated lump = it's invaded — biopsy.'",
   "viva": "- Examiner probes: **'When would you biopsy rather than freeze?'** → any induration/tenderness/ulceration suggesting invasion\n- Discriminator: Bowen vs psoriasis/eczema (**solitary, fixed, fails steroid → biopsy**)\n- Choice between **field vs lesion-directed therapy**",
   "mcqTrap": "- Most tempting wrong answer: **field-treats a lesion with signs of invasion** (e.g. 'apply topical 5-FU to an indurated tender plaque')\n  - Induration/pain/ulcer requires **biopsy to exclude invasive SCC FIRST**\n- Also wrong: **'AKs never progress, no follow-up'** — small but real SCC risk; field change needs monitoring",
   "cutoffs": [
    "AK → invasive SCC: **~0.1–1% per lesion per year** (literature range)",
    "Bowen → invasive SCC: **~3–5%**",
    "Isolated AK: **cryotherapy**",
    "Field change: topical **5-FU / imiquimod / PDT**"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Actinic keratosis (dysplasia, pre-malignant) — cryo / field Rx</div><div class=\"gv-step\">Bowen disease = SCC in situ (full-thickness, BM intact)</div><div class=\"gv-step\">Invasive SCC (induration/pain/ulcer) → BIOPSY + excise</div></div>",
   "title": "Actinic (solar) keratosis vs Bowen disease (SCC in situ)",
   "subtitle": "the precursor spectrum",
   "id": "dermatology-12",
   "images": [
    {
     "src": "assets/img/dermatology_photo_actinic_keratosis_fresh.jpg",
     "caption": "Actinic keratosis - rough erythematous scaly patch on sun-damaged skin",
     "alt": "Multiple erythematous, scaly, sandpaper-textured keratotic patches on sun-exposed skin (scalp/forehead) — the pre-malignant lesion better felt than seen",
     "credit": "Future FamDoc, Wikimedia Commons, CC BY-SA 4.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/1/17/Bowen%27s_disease_plaque.jpg",
     "caption": "Bowen disease (SCC in situ) - well-demarcated erythematous scaly plaque",
     "alt": "Well-demarcated, persistent, erythematous, scaly plaque on sun-exposed or non-sun-exposed skin — SCC in situ (full-thickness epidermal dysplasia)",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "BCC vs SCC — discriminate the two keratinocyte cancers + metastatic risk",
   "subarea": "Skin cancer & lesions",
   "trap": "- **BCC** = MOST COMMON skin cancer; locally invasive, **almost NEVER metastasises**\n  - Classic: pearly/translucent papule with **rolled telangiectatic edge** ± central ulcer ('rodent ulcer'), sun-exposed (face)\n- **SCC** = second most common; **CAN metastasise**\n  - Especially: lip, ear, immunosuppressed, >2 mm thick, >20 mm wide, perineural invasion, poorly differentiated\n  - Classic: firm, scaly/keratotic/crusted, tender, **fast-growing** nodule; may arise from actinic keratosis\n- GOTCHA: **metastatic-risk distinction** is the most examined point\n  - BCC = essentially never metastasises (death is from local destruction)\n  - SCC = does metastasise (regional nodes)\n- **Rapidly growing keratotic nodule = keratoacanthoma** → treat as well-differentiated SCC variant (**excise**, do NOT 'watch and wait')",
   "discriminator": "- **BCC**: pearly, rolled border, telangiectasia, slow, bleeds with minor trauma, **NON-tender**\n- **SCC**: keratotic/ulcerated, indurated, faster, **tender**, may have surrounding actinic damage\n- **Amelanotic melanoma** mimics both — if a 'BCC/SCC' looks atypical, biopsy and consider melanoma\n- SCC **high-risk sites**: lip, ear, scalp (the **H-zone** of the face)",
   "whatFirst": "- Suspected keratinocyte cancer → **biopsy to confirm** (punch/shave acceptable here, UNLIKE melanoma)\n- Then **excise**\n- Low-risk BCC/SCC → elliptical excision with **3–4 mm margin** (SCC low-risk ≈4 mm)\n- High-risk/poorly defined → **wider margin** (high-risk SCC ≈6 mm) or **Mohs micrographic surgery** (esp. face/recurrent/morphoeic BCC)",
   "redFlags": "- **SCC on lip/ear**, >2 mm thick, immunosuppressed (**transplant patient** — aggressive multiple SCCs)\n- Perineural invasion, **palpable nodes**, recurrent lesion → refer for staging/MDT/Mohs",
   "source": "Cancer Council Australia, Clinical Practice Guideline for Keratinocyte Cancer (BCC/SCC) Working Party 2019; Optimal Care Pathway for People with Keratinocyte Cancer (2nd ed, 2020). eTG complete — Dermatology.",
   "tags": [
    "BCC",
    "SCC",
    "keratinocyte cancer",
    "metastasis",
    "keratoacanthoma",
    "high-yield"
   ],
   "mnemonic": "'BCC Borrows (locally), SCC Spreads (metastasises).' Pearly+rolled+telangiectasia=BCC; keratotic+tender+fast=SCC.",
   "viva": "- Examiner probes: **'Which can metastasise?'** → SCC, esp. lip/ear/immunosuppressed\n- Discriminator: **pearly vs keratotic**\n- Escalation: high-risk SCC → ISBAR to surgical/MDT for staging\n- Consent point: scar/recurrence/need for re-excision",
   "mcqTrap": "- Most tempting wrong answer: **'BCC commonly metastasises to regional nodes'** — essentially never\n- OR calling **keratoacanthoma benign** and recommending observation — treat as low-risk SCC variant, **excise**",
   "cutoffs": [
    "Low-risk BCC/SCC excision: **3–4 mm margin** (low-risk SCC ≈4 mm)",
    "High-risk SCC excision: **≈6 mm margin**",
    "SCC high-risk features: **>2 mm thick**, >20 mm diameter, lip/ear, immunosuppressed, perineural invasion, poor differentiation",
    "Mohs: **facial/recurrent/morphoeic BCC**, ill-defined high-risk lesions"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Feature</th><th>BCC</th><th>SCC</th></tr></thead><tbody><tr><td>Frequency</td><td>Most common</td><td>2nd most common</td></tr><tr><td>Appearance</td><td>Pearly, rolled edge, telangiectasia, ± ulcer</td><td>Keratotic/scaly/crusted, indurated</td></tr><tr><td>Growth</td><td>Slow</td><td>Faster</td></tr><tr><td>Tender?</td><td>No</td><td>Often</td></tr><tr><td>Metastasis</td><td><strong>Almost never</strong></td><td><strong>Yes — nodes</strong></td></tr><tr><td>Precursor</td><td>—</td><td>Actinic keratosis / Bowen</td></tr></tbody></table>",
   "title": "BCC vs SCC",
   "subtitle": "discriminate the two keratinocyte cancers + metastatic risk",
   "id": "dermatology-13",
   "images": [
    {
     "src": "assets/img/dermatology_bcc_nodular_nose_01.jpg",
     "caption": "Nodular BCC - pearly papule with rolled telangiectatic edge, central ulceration",
     "alt": "Classic nodular basal cell carcinoma on the face — pearly/translucent papule with rolled border, surface telangiectasia and central ulceration ('rodent ulcer')",
     "credit": "M. Sand, D. Sand, C. Thrandorf et al., Wikimedia Commons, CC BY 2.0 (cropped to lesion)"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Squamous_cell_carcinoma_%282%29.jpg/960px-Squamous_cell_carcinoma_%282%29.jpg",
     "caption": "Cutaneous SCC - indurated keratotic nodule with ulceration on sun-damaged skin",
     "alt": "Squamous cell carcinoma — indurated, keratotic, sometimes ulcerated nodule or plaque on sun-damaged skin, with potential for metastasis unlike BCC",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Dermoscopy & the changing/atypical lesion — what the exam wants",
   "subarea": "Skin cancer & lesions",
   "trap": "- **Dermoscopy improves diagnostic accuracy** over naked-eye exam and reduces unnecessary excisions in trained hands\n- Does **NOT replace histology** — a clinically suspicious or CHANGING lesion must be excised even if dermoscopy looks reassuring\n- Benign dermoscopic clues:\n  - **Seborrhoeic keratosis**: milia-like cysts + comedo-like openings ('brain-like'/cerebriform)\n  - **Haemangioma**: red/purple lacunae\n  - **Dermatofibroma**: central white scar-like patch + peripheral pigment network\n  - **Benign naevus**: symmetric uniform pigment network\n- Melanoma clues: **atypical/broadened pigment network, blue-white veil**, irregular streaks/pseudopods, regression, multiple colours, asymmetry of structures\n- Screening algorithms: **Chaos & Clues / 3-point checklist** (asymmetry, atypical network, blue-white structures)",
   "discriminator": "- **Seborrhoeic keratosis**: milia-like cysts, comedo openings (benign) — can look alarming clinically but dermoscopy reveals **brain-like pattern**\n- **Melanoma**: atypical network, **blue-white veil**\n- Trap: a 'simple SK' that is **changing/atypical** → still **excise**\n- **Sequential digital dermoscopy monitoring**: for borderline-atypical-but-not-clearly-malignant lesions only\n  - **NOT** for a clinically suspicious lesion — that gets excised now",
   "whatFirst": "- Use dermoscopy to triage:\n  - Clearly benign pattern (SK/haemangioma/dermatofibroma) → reassure\n  - Any malignant clue OR clinical suspicion OR change → **EXCISIONAL biopsy**\n- Do **NOT monitor** a lesion you already suspect is melanoma — **excise it**",
   "redFlags": "- **Blue-white veil**, regression, atypical vessels, **change on serial dermoscopy**, ugly duckling → excise\n- Multiple atypical naevi / dysplastic naevus syndrome / FH melanoma → **specialist surveillance**",
   "source": "Australasian College of Dermatologists; Cancer Council Australia / Melanoma Institute Australia melanoma guidelines (diagnosis/dermoscopy section). Chaos & Clues (Rosendahl — Australian-developed dermoscopy algorithm).",
   "tags": [
    "dermoscopy",
    "melanoma",
    "seborrhoeic keratosis",
    "monitoring",
    "atypical lesion",
    "high-yield"
   ],
   "mnemonic": "Benign dermoscopy: 'SK = brain (cerebriform) + cysts/comedones; haemangioma = lacunae; dermatofibroma = central white patch.' Melanoma: 'blue-white veil + chaos + atypical network.'",
   "viva": "- Examiner probes: **'If dermoscopy looks benign but the patient reports it's changing, what do you do?'**\n  - → **Excise** (clinical suspicion/change overrides reassuring dermoscopy)\n- Discriminator: **SK vs melanoma** dermoscopic features",
   "mcqTrap": "- Most tempting wrong answer: using reassuring dermoscopy to **justify NOT excising** a clinically suspicious or changing lesion\n- OR recommending **'monitor'** for a lesion already clinically suspicious\n- **Dermoscopy never overrides clinical suspicion** — excise",
   "cutoffs": [
    "Dermoscopy: **adjunct, never replaces histology**",
    "Sequential digital dermoscopy: for **borderline-atypical** lesions only, NOT clinically suspicious ones",
    "3-point checklist: **asymmetry + atypical network + blue-white structures**"
   ],
   "verified": true,
   "title": "Dermoscopy & the changing/atypical lesion",
   "subtitle": "what the exam wants",
   "id": "dermatology-14",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Superficial_spreading_melanoma_in_situ_on_dermoscopy%2C_reflectance_confocal_microscopy_and_histopathology_1.jpg/960px-Superficial_spreading_melanoma_in_situ_on_dermoscopy%2C_reflectance_confocal_microscopy_and_histopathology_1.jpg",
     "caption": "Dermoscopy of melanoma - atypical pigment network, regression and irregular streaks",
     "alt": "Dermoscopic image of melanoma showing irregular pigment network, multiple colours, atypical vascular structures and regression structures — features not visible to the naked eye",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Melanoma — ABCDE & the changing lesion: which features actually trigger biopsy",
   "subarea": "Skin cancer & lesions",
   "trap": "- ABCDE: **Asymmetry**, Border irregular, Colour variegated, Diameter >6mm, **Evolving**\n- **'E for Evolving/changing'** is the single most powerful clinical sign\n  - A CHANGING lesion (size, shape, colour, new itch/bleed) warrants biopsy **even if it fails the other ABCD criteria**\n- **'Ugly duckling' sign** (one naevus that looks different from patient's other naevi) — independently predictive\n- **Nodular and amelanotic melanomas frequently DON'T fit ABCDE** at all\n  - Use **EFG rule** for nodular melanoma: **Elevated, Firm, Growing** (>1 month)\n- **Diameter >6mm is the WEAKEST criterion**\n  - Early/thin melanomas can be <6mm — **never reassure on small size alone**",
   "discriminator": "- **Benign naevus**: symmetric, sharp uniform border, single/uniform colour, stable, looks like patient's other moles\n- **Melanoma**: asymmetric, notched/blurred border, multiple colours (brown/black/red/white/blue), changing, **'ugly duckling'**\n- **Amelanotic/nodular melanoma** mimics pyogenic granuloma, BCC, or dermatofibroma — pink/red, symmetric-looking nodule that **GROWS and is FIRM**\n- **Seborrhoeic keratosis**: 'stuck-on', waxy, well-demarcated, keratin plugs/comedo-like openings on dermoscopy (benign)",
   "whatFirst": "- ANY suspicious pigmented lesion → **EXCISIONAL biopsy with 2mm margin** + cuff of subcutaneous fat\n  - **NOT** shave, NOT incisional/partial punch (destroys Breslow measurement)\n- Do **NOT** do wide excision upfront — definitive margins decided **AFTER histology gives Breslow**",
   "redFlags": "- **Changing/evolving lesion**, ugly duckling, new firm growing nodule\n- **Bleeding/ulceration**, regression areas, satellite lesions\n- **Palpable regional nodes** → stage, urgent referral",
   "source": "Cancer Council Australia / Melanoma Institute Australia, Clinical Practice Guidelines for the Diagnosis and Management of Melanoma (definitive-margins update MJA 2018; living guidelines wiki, current). EFG rule for nodular melanoma — Australasian College of Dermatologists / Victorian Melanoma Service.",
   "tags": [
    "melanoma",
    "ABCDE",
    "EFG nodular",
    "ugly duckling",
    "excisional biopsy",
    "high-yield"
   ],
   "mnemonic": "ABCDE (E=Evolving is king) + EFG (Elevated, Firm, Growing) for the nodular/amelanotic melanoma that breaks the ABCDE rule.",
   "viva": "- Examiner probes: **'How would you biopsy this?'**\n  - Answer: **EXCISIONAL biopsy with 2mm margin + subcutaneous fat**\n  - Name WHY: **Breslow drives everything**\n- Do NOT say shave biopsy — partial/shave sampling underestimates Breslow = classic VIVA trap",
   "mcqTrap": "- Most tempting wrong answer: **'reassure — lesion is <6mm so cannot be melanoma'**\n  - Small size does NOT exclude melanoma\n- OR recommending **shave/punch biopsy** of part of the lesion\n  - Partial/shave sampling **destroys accurate Breslow measurement** — complete excisional biopsy required",
   "cutoffs": [
    "Excisional biopsy margin: **2 mm** + subcutaneous fat",
    "Diameter criterion: **>6 mm** (weakest — early melanoma can be smaller)",
    "Nodular melanoma growth: **>1 month** (EFG)"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Sign</th><th>What it means</th><th>Action</th></tr></thead><tbody><tr><td>A — Asymmetry</td><td>One half ≠ other</td><td>Suspicious</td></tr><tr><td>B — Border</td><td>Irregular/notched/blurred</td><td>Suspicious</td></tr><tr><td>C — Colour</td><td>≥2 colours / variegated</td><td>Suspicious</td></tr><tr><td>D — Diameter</td><td>&gt;6 mm (weak criterion)</td><td>Note only</td></tr><tr><td>E — Evolving</td><td>Changing size/shape/colour/symptom</td><td><strong>Biopsy — strongest sign</strong></td></tr><tr><td>EFG (nodular)</td><td>Elevated, Firm, Growing &gt;1mo</td><td>Excise — ABCDE fails here</td></tr></tbody></table>",
   "title": "Melanoma",
   "subtitle": "ABCDE & the changing lesion: which features actually trigger biopsy",
   "id": "dermatology-15",
   "images": [
    {
     "src": "assets/img/dermatology_pigmented_lesion_melanoma_01.jpg",
     "caption": "Melanoma - asymmetric pigmented lesion with irregular border and colour variation",
     "alt": "Malignant melanoma demonstrating ABCDE features: asymmetry, irregular border, variegated colour (brown, black, red), and large diameter",
     "credit": "Dermanonymous, Wikimedia Commons, CC BY-SA 4.0 (cropped to centre on the lesion, removing margin-marker dots)"
    }
   ]
  },
  {
   "topic": "Melanoma — Breslow thickness drives EVERYTHING: definitive excision margins (AUST)",
   "subarea": "Skin cancer & lesions",
   "trap": "- **Breslow thickness** (mm from granular layer to deepest tumour cell) = **SINGLE most important prognostic factor**\n- Dictates definitive **wide local excision (WLE) margins**\n- Australian guideline clinical margins:\n  - **In situ**: 5–10 mm\n  - **≤1.0 mm (pT1)**: 1 cm\n  - **1.01–2.0 mm (pT2)**: 1–2 cm\n  - **2.01–4.0 mm (pT3)**: 1–2 cm\n  - **>4.0 mm (pT4)**: 2 cm\n- GOTCHA: margins **NEVER exceed 2 cm** in current Australian guidelines\n  - Historical wider margins (3–5 cm) do **NOT improve survival**\n- Margin decided **ONLY after excisional biopsy** gives Breslow — cannot pick WLE margin before histology",
   "discriminator": "- **Breslow** (mm depth — prognostic, **drives margins**) vs **Clark level** (anatomical layer — now largely abandoned, **NOT used for margins**)\n- **Ulceration** upstages within T category and worsens prognosis\n- **Mitotic rate** matters for thin melanomas\n- **AJCC8 T-stage** uses **0.8mm and 1.0/2.0/4.0mm** thresholds",
   "whatFirst": "- After excisional biopsy confirms melanoma + gives Breslow → plan **definitive WLE** to Breslow-appropriate margin\n- Arrange **sentinel lymph node biopsy (SLNB) BEFORE the WLE** if indicated\n  - WLE disrupts lymphatic drainage and **invalidates later SLNB**\n- Sequence: **excisional biopsy → Breslow → SLNB + WLE together**",
   "redFlags": "- **Breslow >4mm**, ulceration, high mitotic rate\n- **Positive sentinel node**, in-transit/satellite metastases, palpable nodes → urgent **melanoma MDT referral**",
   "source": "Cancer Council Australia / Melanoma Institute Australia, Clinical Practice Guidelines: definitive excision margins for primary cutaneous melanoma (MJA 2018; living guidelines wiki, current — invasive margins unchanged from 2008).",
   "tags": [
    "melanoma",
    "Breslow",
    "excision margins",
    "wide local excision",
    "staging",
    "high-yield"
   ],
   "mnemonic": "Margins climb with depth but CAP at 2 cm: in situ 5–10mm → ≤1mm 1cm → 1–4mm 1–2cm → >4mm 2cm. 'Never exceed 2 cm.'",
   "viva": "- Examiner asks: **'What determines your excision margin?'**\n  - → Say: **Breslow thickness**, only known AFTER the excisional biopsy\n- Discriminator probed: **Breslow vs Clark level**\n- Escalation: melanoma **>1mm or node-positive** → melanoma MDT / surgical oncology referral",
   "mcqTrap": "- Most tempting wrong answer: gives margin **>2 cm** for thick melanoma (e.g. '5 cm for a 5mm melanoma' — historical, now wrong)\n- OR **'choose WLE margin at the first excision'** — current Australian guidelines cap definitive margins at **2 cm** and margin is set only **after Breslow is known**",
   "cutoffs": [
    "In situ: **5–10 mm**",
    "≤1.0 mm: **1 cm**",
    "1.01–2.0 mm: **1–2 cm**",
    "2.01–4.0 mm: **1–2 cm**",
    ">4.0 mm: **2 cm (max)**"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Breslow (mm)</th><th>T stage</th><th>Definitive WLE margin</th></tr></thead><tbody><tr><td>In situ</td><td>Tis</td><td>5–10 mm</td></tr><tr><td>≤1.0</td><td>pT1</td><td>1 cm</td></tr><tr><td>1.01–2.0</td><td>pT2</td><td>1–2 cm</td></tr><tr><td>2.01–4.0</td><td>pT3</td><td>1–2 cm</td></tr><tr><td>&gt;4.0</td><td>pT4</td><td>2 cm (cap)</td></tr></tbody></table>",
   "title": "Melanoma",
   "subtitle": "Breslow thickness drives EVERYTHING: definitive excision margins (AUST)",
   "id": "dermatology-16",
   "images": [
    {
     "src": "assets/img/dermatology_pigmented_lesion_melanoma_01.jpg",
     "caption": "Melanoma - clinical appearance driving WLE decision",
     "alt": "Invasive melanoma requiring wide local excision — the clinical correlate of the Breslow measurement that dictates surgical margins",
     "credit": "Dermanonymous, Wikimedia Commons, CC BY-SA 4.0 (cropped to centre on the lesion, removing margin-marker dots)"
    }
   ]
  },
  {
   "topic": "Sentinel lymph node biopsy in melanoma — the 0.8mm / 1.0mm threshold",
   "subarea": "Skin cancer & lesions",
   "trap": "- **SLNB is a STAGING tool (prognostic)**, NOT a therapeutic procedure that improves overall survival\n- Australian thresholds:\n  - **Discuss/offer SLNB**: melanoma >1.0 mm Breslow\n  - **Consider for 0.8–1.0 mm (T1b)** OR <0.8 mm if high-risk features (ulceration, high mitotic rate)\n- GOTCHA: **SLNB MUST be done at the time of (or before) definitive WLE**\n  - Wide excision disrupts lymphatics → lymphoscintigraphy/SLNB becomes **unreliable**\n  - **Lymphoscintigraphy** is performed before WLE\n- Positive sentinel node → consider **adjuvant systemic therapy** (immunotherapy/targeted) and nodal ultrasound surveillance\n  - **NOT routine completion lymphadenectomy** — no survival benefit (MSLT-II)",
   "discriminator": "- **SLNB**: staging, prognostic, guides adjuvant-therapy eligibility\n- **Completion lymph node dissection**: no longer routine after positive SLNB\n  - Replaced by **nodal ultrasound surveillance ± adjuvant therapy**\n- SLNB **not indicated** for melanoma in situ or keratinocyte cancers routinely",
   "whatFirst": "- Melanoma >1mm (or 0.8–1.0mm, or <0.8mm + high-risk features) → refer for SLNB discussion\n- Arrange **lymphoscintigraphy BEFORE definitive WLE**\n- Sequence: **excisional biopsy → Breslow → SLNB + WLE together**",
   "redFlags": "- **Positive sentinel node**\n- **Clinically palpable nodes** → skip SLNB → therapeutic node dissection / staging imaging\n- **In-transit disease** → melanoma MDT",
   "source": "Cancer Council Australia / Melanoma Institute Australia melanoma living guidelines (SLNB recommendations, current); MSLT-II informing post-positive-SLNB management.",
   "tags": [
    "melanoma",
    "sentinel node",
    "SLNB",
    "staging",
    "lymphoscintigraphy",
    "high-yield"
   ],
   "mnemonic": "'0.8 to consider, 1.0+ to offer' — and do SLNB BEFORE or WITH the wide excision, never after.",
   "viva": "- Examiner probes sequencing: **'Why arrange SLNB before wide excision?'**\n  - → WLE **disrupts lymphatic drainage**\n- Discriminator: SLNB is **prognostic/staging, not curative**\n- Escalation: positive node → MDT, **adjuvant therapy discussion**",
   "mcqTrap": "- Most tempting wrong answer: states **SLNB itself improves survival** — it is staging/prognostic only\n- OR mandates **completion lymphadenectomy for every positive sentinel node**\n  - Completion dissection is **no longer routine** — surveillance/adjuvant therapy instead",
   "cutoffs": [
    "Offer SLNB: **>1.0 mm Breslow** (T2/T3 intermediate-thickness)",
    "Consider SLNB: **0.8–1.0 mm (T1b)**, or <0.8 mm + high-risk features (ulceration/high mitoses)",
    "Lymphoscintigraphy: **before definitive WLE**"
   ],
   "verified": true,
   "title": "Sentinel lymph node biopsy in melanoma",
   "subtitle": "the 0.8mm / 1.0mm threshold",
   "id": "dermatology-17",
   "images": [
    {
     "src": "assets/img/dermatology_pigmented_lesion_melanoma_01.jpg",
     "caption": "Melanoma >1 mm Breslow - the threshold for SLNB discussion",
     "alt": "Intermediate/thick invasive melanoma at the thickness threshold where sentinel lymph node biopsy staging is offered — a staging rather than therapeutic procedure",
     "credit": "Dermanonymous, Wikimedia Commons, CC BY-SA 4.0 (cropped to centre on the lesion, removing margin-marker dots)"
    }
   ]
  },
  {
   "topic": "When to refer / urgent escalation triggers in pigmented & non-pigmented lesions",
   "subarea": "Skin cancer & lesions",
   "trap": "- Know the **SPECIFIC referral/urgency triggers** the exam tests\n- **URGENT** (do not delay):\n  - Confirmed or strongly suspected **melanoma**\n  - SCC in **high-risk site** (lip, ear) or with palpable nodes\n  - Any lesion with **palpable regional lymphadenopathy**\n  - Rapidly growing/ulcerating/bleeding lesion\n  - Suspected melanoma **in pregnancy** (excise — don't defer)\n- Refer for **Mohs micrographic surgery**: recurrent BCC/SCC, morphoeic/infiltrative BCC, ill-defined margins, **high-risk facial 'H-zone'** (eyes/nose/lips/ears), tissue-sparing-critical sites\n- Refer to **melanoma MDT**: melanoma >1mm, node-positive, in-transit/metastatic\n- GOTCHA timing: no **'routine 6-month review'** for a lesion you suspect is melanoma — excise promptly",
   "discriminator": "- **GP-managed**: clearly benign naevi/SK, isolated AK, small well-defined low-risk BCC/SCC on trunk/limb\n- **Specialist/Mohs**: face H-zone, recurrent, **morphoeic BCC**, large/ill-defined\n- **MDT**: invasive melanoma >1mm, nodal/metastatic disease, **high-risk SCC**",
   "whatFirst": "- Strongly suspected melanoma → **EXCISIONAL biopsy now** (don't refer for 'observation')\n- Confirmed melanoma **>1mm or node-positive** → urgent MDT/surgical oncology referral\n- High-risk/recurrent/facial keratinocyte cancer → **dermatology/plastics ± Mohs**",
   "redFlags": "- **Palpable nodes**, in-transit/satellite lesions, rapidly growing nodule\n- **Ulceration/bleeding**, immunosuppressed patient with aggressive SCCs, recurrent lesion\n- **Perineural symptoms** (numbness/pain — perineural SCC invasion) → urgent referral",
   "source": "Cancer Council Australia / Melanoma Institute Australia melanoma & keratinocyte cancer guidelines; Optimal Care Pathways (melanoma; keratinocyte cancer, 2nd ed). eTG complete — Dermatology.",
   "tags": [
    "referral",
    "Mohs",
    "MDT",
    "escalation",
    "ISBAR",
    "high-yield"
   ],
   "mnemonic": "'Mohs for the FACE & the FAILED' (H-zone, recurrent, morphoeic). 'MDT for melanoma >1mm or nodes.' 'Suspect melanoma = excise now, never observe.'",
   "viva": "- Classic VIVA: **'You suspect melanoma — what now and how do you escalate?'**\n  - → Excisional biopsy, then if invasive/node-positive: **ISBAR handover** to melanoma MDT/surgical oncology\n  - Consent: scar + possible need for **wider re-excision and SLNB**",
   "mcqTrap": "- Most tempting wrong answer: schedules **observation/routine follow-up** for a lesion already suspected to be melanoma\n  - e.g. 'review the suspicious pigmented lesion in 6 months' / 'refer for routine outpatient appointment'\n- Should be **excised promptly via excisional biopsy**",
   "cutoffs": [
    "Melanoma MDT: **invasive >1mm**, node-positive, metastatic",
    "Mohs: **recurrent/morphoeic/ill-defined BCC-SCC**, facial H-zone",
    "**Perineural invasion / lip-ear SCC**: high-risk → specialist",
    "Suspected melanoma: **excise promptly** (no observation)"
   ],
   "verified": true,
   "title": "When to refer / urgent escalation triggers…",
   "id": "dermatology-18",
   "images": [
    {
     "src": "assets/img/dermatology_pigmented_lesion_melanoma_01.jpg",
     "caption": "Melanoma - urgent referral trigger: changing/evolving pigmented lesion",
     "alt": "Melanoma with features mandating urgent referral — asymmetry, irregular border, colour variation and evolution, the key red-flag trigger",
     "credit": "Dermanonymous, Wikimedia Commons, CC BY-SA 4.0 (cropped to centre on the lesion, removing margin-marker dots)"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lower_lip_cancer.jpg/960px-Lower_lip_cancer.jpg",
     "caption": "High-risk SCC - indurated SCC on the lip, an urgent referral site",
     "alt": "Squamous cell carcinoma on the lip — a high-risk anatomical site requiring urgent specialist referral due to elevated metastatic potential",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Acne: severity-based treatment ladder and the antibiotic/isotretinoin rules",
   "subarea": "Inflammatory & infective skin",
   "trap": "- **Topical retinoid** is the BACKBONE of comedonal/inflammatory acne, NOT antibiotics alone\n- **NEVER** use topical OR oral antibiotic as **monotherapy** (drives resistance)\n  - Always pair with **benzoyl peroxide** +/- retinoid\n  - Limit oral antibiotic courses: review by **~3 months**, generally not beyond **~6 months**\n- Oral antibiotic of choice: **doxycycline** (tetracyclines contraindicated <8yrs and in pregnancy)\n- Severe nodulocystic/scarring/treatment-resistant acne OR failure after **~12 weeks** of oral antibiotic → **oral isotretinoin** (specialist/dermatologist)\n- **Hormonal options** (COCP, spironolactone) for women",
   "whatFirst": "- **Grade severity** first\n- Mild comedonal: **topical retinoid** +/- BPO\n- Mild-moderate inflammatory: **topical retinoid + BPO** +/- topical antibiotic (never antibiotic alone)\n- Moderate-severe: add **oral doxycycline** (with topicals) or hormonal therapy\n- Severe/scarring/refractory: **refer for isotretinoin**",
   "discriminator": "- **Acne**: has **COMEDONES** (blackheads/whiteheads), occurs in teens/younger, varied sites\n- **Rosacea**: **NO comedones**, central-face flushing/telangiectasia/papulopustules in 30–50yr adults\n- **No comedones is the key discriminator**",
   "redFlags": "- **Acne fulminans**: sudden severe ulcerated/haemorrhagic acne + fever/arthralgia = **emergency**\n  - Needs **oral steroids before/with isotretinoin**\n- **Isotretinoin**: potent **teratogen (TGA category X)** — any pregnancy exposure = teratogen emergency",
   "mcqTrap": "- Choosing **'oral antibiotic monotherapy'** or 'long-term oral antibiotics'\n  - Always **combine with BPO/retinoid** and cap duration\n- Another trap: starting **isotretinoin** in a female **without contraception/pregnancy exclusion**",
   "mnemonic": "Acne ladder = 'Retinoid + BPO first, Antibiotic never alone, Isotretinoin for scars/severe'.",
   "viva": "- Examiner: **'Before this woman starts isotretinoin, what must you do?'**\n  - → **Pregnancy exclusion + reliable contraception** + counselling on teratogenicity/mood/bloods\n  - Consent angle",
   "source": "eTG Dermatology - acne (current); Australian Prescriber 'Drug treatment of acne'",
   "verified": true,
   "tags": [
    "acne",
    "isotretinoin",
    "antibiotic stewardship",
    "retinoid",
    "treatment ladder"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Mild comedonal: topical retinoid +/- BPO</div><div class=\"gv-step\">Mild-mod inflammatory: retinoid + BPO +/- topical abx (never abx alone)</div><div class=\"gv-step\">Mod-severe: + oral doxycycline (with topicals) or hormonal (COCP/spironolactone)</div><div class=\"gv-step\">Severe/nodulocystic/scarring/refractory: refer -> oral isotretinoin</div></div>",
   "title": "Acne",
   "subtitle": "severity-based treatment ladder and the antibiotic/isotretinoin rules",
   "id": "dermatology-19",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Acne_Vulgaris_x%C9%99st%C9%99liyi.jpg/960px-Acne_Vulgaris_x%C9%99st%C9%99liyi.jpg",
     "caption": "Moderate-to-severe acne - mixed comedones, inflammatory papules, pustules and nodules",
     "alt": "Moderate-to-severe acne vulgaris with open/closed comedones, erythematous papules, pustules and nodular lesions on the face — demonstrating severity requiring topical retinoid backbone therapy",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Angioedema: histamine- vs bradykinin-mediated (antihistamine WON'T work for the latter)",
   "subarea": "Inflammatory & infective skin",
   "trap": "- **ACE-inhibitor angioedema** and **hereditary angioedema (C1-esterase inhibitor deficiency)** are **BRADYKININ-mediated**\n  - Do **NOT respond** to adrenaline, antihistamines or steroids\n- Classic MCQ trap: **'give antihistamine/steroid'** for ACEi or hereditary angioedema — WRONG\n- **ACEi angioedema**: NO urticaria/itch\n  - Can occur **YEARS after starting the drug** (not just at initiation)\n  - Typically face/lips/tongue\n  - **STOP the ACEi permanently** (use ARBs cautiously)\n- **Hereditary angioedema**: recurrent angioedema WITHOUT urticaria + abdominal pain attacks + family history\n  - **Low C4** is the screening clue\n  - Treat with **C1-INH concentrate / icatibant / FFP**\n- **Histamine/allergic angioedema** (with urticaria/itch) **DOES respond** to adrenaline/antihistamine/steroid",
   "whatFirst": "- **Assess AIRWAY first** (this is the killer)\n- If **allergic/anaphylactic** (urticaria, itch, rapid): **IM adrenaline**\n- If **ACEi/hereditary** (no urticaria, bradykinin):\n  - **Secure airway**\n  - **STOP ACEi**\n  - Give **C1-INH concentrate / icatibant**; consider FFP/tranexamic acid\n  - Adrenaline/antihistamine/steroid **largely ineffective** but often given empirically while diagnosis uncertain",
   "discriminator": "- **URTICARIA/ITCH present** = histaminergic (allergic) → **adrenaline/antihistamine works**\n- **NO urticaria + ACEi or family history + abdominal attacks** = bradykinin → **C1-INH/icatibant, antihistamine useless**\n- **Low C4** screens for HAE",
   "redFlags": "- **Tongue/laryngeal swelling, voice change, stridor, drooling** = imminent airway obstruction\n  - → Early senior **anaesthetic/ENT**, prepare for intubation/**front-of-neck access**\n- Do **NOT be reassured** by lack of urticaria",
   "mcqTrap": "- Giving **antihistamines/steroids** and expecting resolution in ACEi or hereditary angioedema\n  - These are **bradykinin-mediated and won't respond**\n  - Correct answer: **stop ACEi + C1-INH/icatibant + airway**",
   "mnemonic": "'Itch = histamine (adrenaline works); No itch + ACEi/family = bradykinin (C1-INH/icatibant).'",
   "viva": "- ISBAR escalation: **'Patient on ramipril, tongue swelling, no rash'**\n  - → Escalate **airway team**, stop ACEi, request **icatibant/C1-INH**\n  - Examiner tests that you do **not rely on adrenaline alone**",
   "source": "ASCIA (angioedema / hereditary angioedema) & eTG (anaphylaxis); ACEi angioedema bradykinin pathway",
   "verified": true,
   "tags": [
    "angioedema",
    "ACE inhibitor",
    "hereditary angioedema",
    "bradykinin",
    "airway"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th></th><th>Histaminergic (allergic)</th><th>Bradykinin (ACEi / hereditary)</th></tr></thead><tbody><tr><td>Urticaria/itch</td><td>YES</td><td>NO</td></tr><tr><td>Onset</td><td>Minutes, after trigger</td><td>ACEi: any time (even years); HAE: recurrent</td></tr><tr><td>Clue</td><td>Allergen exposure</td><td>ACEi use / FHx + abdo pain / low C4</td></tr><tr><td>Treatment</td><td>Adrenaline, antihistamine, steroid</td><td>Stop ACEi; C1-INH concentrate, icatibant, FFP</td></tr><tr><td>Antihistamine works?</td><td>Yes</td><td>NO</td></tr></tbody></table>",
   "title": "Angioedema",
   "subtitle": "histamine- vs bradykinin-mediated (antihistamine WON'T work for the latter)",
   "id": "dermatology-20",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/3/37/Angioedema_of_the_face.jpg",
     "caption": "Histamine-mediated angioedema - lip and facial swelling (allergic)",
     "alt": "Marked soft-tissue swelling of the lips and perioral area typical of histamine-mediated (IgE/allergic) angioedema",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Swollen_hand_during_a_hereditary_angioedema_attack..jpg/960px-Swollen_hand_during_a_hereditary_angioedema_attack..jpg",
     "caption": "Hereditary angioedema (HAE) - non-pitting limb/abdominal swelling, bradykinin-mediated",
     "alt": "Non-pitting, non-urticarial swelling of the forearm or abdomen characteristic of C1-esterase inhibitor deficiency (HAE), bradykinin-mediated - does NOT respond to adrenaline/antihistamines",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Cellulitis: Australian first-line antibiotics, dose, and the big mimic",
   "subarea": "Inflammatory & infective skin",
   "trap": "- Cellulitis is almost always **UNILATERAL** — bilateral lower-leg erythema is almost never cellulitis\n  - Think **venous stasis dermatitis / lipodermatosclerosis** — do NOT give antibiotics\n- **Non-purulent** cellulitis/erysipelas = usually *Streptococcus*\n- **Purulent** (abscess/furuncle) = usually *S. aureus*\n- eTG first-line for mild cellulitis: **flucloxacillin 500 mg** orally 6-hourly\n  - Alternatives: dicloxacillin or cephalexin\n- Erysipelas / non-purulent erythema without wound = **phenoxymethylpenicillin 500 mg** orally 6-hourly\n- Cephalexin/flucloxacillin do **NOT cover MRSA**\n  - Add MRSA-active cover (e.g. trimethoprim-sulfamethoxazole, clindamycin, doxycycline) only if risk factors or purulence",
   "whatFirst": "- **Confirm it is cellulitis**: unilateral, warm, tender, spreading\n  - Mark the border; check for portal of entry (e.g. tinea between toes)\n- Mild and systemically well: **oral flucloxacillin 500 mg q6h**\n- Systemically unwell / rapid spread / sepsis / large area: **IV antibiotics + admit**\n- Treat the **entry point** (e.g. tinea pedis)",
   "discriminator": "- **DVT**: calf swelling/pain, less sharply demarcated erythema, risk factors — consider Wells score/Doppler\n- **Bilateral chronic**: venous stasis — not infection\n- Rapidly spreading + **pain out of proportion** + systemic toxicity + crepitus = **NECROTISING FASCIITIS**",
   "redFlags": "- **Pain out of proportion**, rapidly advancing margin, crepitus, bullae/skin necrosis, systemic toxicity/septic shock = **NECROTISING FASCIITIS**\n- Surgical emergency: **urgent debridement + broad-spectrum IV antibiotics**\n- Do **NOT** wait for imaging",
   "mcqTrap": "- Diagnosing **'bilateral cellulitis'** and prescribing antibiotics for bilateral leg erythema — almost always venous/stasis\n- Using **cephalexin** and expecting MRSA cover",
   "mnemonic": "'Cellulitis is UNIlateral; BIlateral = think venous, not bugs.' Drug: 'Flucloxacillin Fights the Flesh.'",
   "viva": "- Trigger: erythema spreading up the leg with pain out of proportion and **crepitus**\n- Action: **ISBAR to surgery** for ?nec fasc, IV antibiotics, NBM, urgent OT\n- Examiner tests the **nec-fasc red flags**",
   "source": "eTG Antibiotic - cellulitis/erysipelas (current); Australian Prescriber bacterial SSTI",
   "verified": true,
   "cutoffs": [
    "**Flucloxacillin 500 mg** PO q6h — mild cellulitis",
    "**Phenoxymethylpenicillin 500 mg** PO q6h — erysipelas (no wound)"
   ],
   "tags": [
    "cellulitis",
    "erysipelas",
    "flucloxacillin",
    "necrotising fasciitis",
    "MRSA",
    "discriminator"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Type</th><th>Likely organism</th><th>eTG oral first-line</th></tr></thead><tbody><tr><td>Non-purulent cellulitis (mild)</td><td>Streptococcus / S. aureus</td><td>Flucloxacillin 500 mg q6h (or dicloxacillin/cephalexin)</td></tr><tr><td>Erysipelas (no wound)</td><td>Streptococcus</td><td>Phenoxymethylpenicillin 500 mg q6h</td></tr><tr><td>Purulent / abscess</td><td>S. aureus (?MRSA)</td><td>Incise &amp; drain; add MRSA cover if risk (TMP-SMX/clinda/doxy)</td></tr></tbody></table>",
   "title": "Cellulitis",
   "subtitle": "Australian first-line antibiotics, dose, and the big mimic",
   "id": "dermatology-21",
   "images": [
    {
     "src": "assets/img/dermatology_cellulitis_erysipelas_leg_01.jpg",
     "caption": "Unilateral leg cellulitis - erythema, warmth, swelling",
     "alt": "Unilateral lower leg erythema with poorly demarcated borders, swelling and warmth consistent with bacterial cellulitis",
     "credit": "Poupou l'quourouce, Wikimedia Commons, CC BY-SA 3.0 (cropped)"
    }
   ]
  },
  {
   "topic": "DRESS: the LATE, multi-organ drug reaction with eosinophilia",
   "subarea": "Inflammatory & infective skin",
   "trap": "- DRESS appears **LATE — 2–8 weeks** after starting the culprit (much later than SJS/TEN's days-to-weeks)\n- Classic **tetrad**:\n  - **Fever** + widespread morbilliform rash (often with **facial oedema**)\n  - **Lymphadenopathy**\n  - **Eosinophilia** (and/or atypical lymphocytes)\n  - **Internal organ involvement** — liver most common (hepatitis); also kidney, lungs, heart/myocarditis, thyroid\n- Classic culprits: aromatic anticonvulsants (**carbamazepine, lamotrigine, phenytoin**), **allopurinol**, sulfonamides, vancomycin, minocycline, dapsone\n- **HHV-6 reactivation** is associated\n- Can **RELAPSE** and cause delayed autoimmune sequelae (e.g. thyroiditis, T1DM) months later — long follow-up needed",
   "whatFirst": "- **STOP the culprit drug** immediately\n- Assess **organ involvement**: FBC for eosinophils, LFTs, renal function, TFTs, troponin/ECG if cardiac concern\n- **Admit**; systemic **corticosteroids** for significant organ involvement\n- Monitor for **relapse** and delayed thyroid/glucose sequelae",
   "discriminator": "- **DRESS vs SJS/TEN**: DRESS is LATE (2–8 wks), morbilliform + facial oedema + eosinophilia + hepatitis, NO/minimal skin detachment\n  - SJS/TEN is earlier, painful detaching skin + heavy mucosal sloughing + Nikolsky+, eosinophilia not the feature\n- **DRESS vs simple morbilliform drug rash**: the latter has NO fever, NO eosinophilia, NO organ involvement",
   "redFlags": "- Facial oedema + fever + transaminitis + eosinophilia **weeks after a new drug** = DRESS emergency\n- **Fulminant hepatitis or myocarditis** = high mortality (~10%)\n- Eosinophilia **>1.5 x10^9/L** supports the diagnosis",
   "mcqTrap": "- Choosing **SJS/TEN** because of 'drug + rash + unwell'\n- Attributing the picture to **infection**\n- The eosinophilia + LFT derangement + facial oedema + **2–8 week latency** point to DRESS, not SJS/TEN or a benign exanthem",
   "mnemonic": "DRESS = Drug Rash Eosinophilia Systemic Symptoms; remember 'FLEE': Fever, Lymphadenopathy/Liver, Eosinophilia, Edema (facial). Latency 2-8 weeks.",
   "viva": "- Scenario: fever + facial swelling + deranged LFTs + eosinophilia **4 weeks after allopurinol**\n- Action: **stop drug**, organ screen, steroids, warn re relapse/late thyroid disease\n- Examiner probes **discriminator from SJS/TEN**",
   "source": "eTG (severe cutaneous adverse drug reactions); RegiSCAR criteria; ACD/DermNet DRESS",
   "verified": true,
   "tags": [
    "DRESS",
    "drug eruption",
    "eosinophilia",
    "emergency",
    "allopurinol",
    "hepatitis"
   ],
   "title": "DRESS",
   "subtitle": "the LATE, multi-organ drug reaction with eosinophilia",
   "id": "dermatology-22"
  },
  {
   "topic": "Eczema vs psoriasis: the discriminating exam features",
   "subarea": "Inflammatory & infective skin",
   "trap": "- Classic MCQ trap: picking **'extensor surfaces' for eczema** and 'flexures' for psoriasis — it is the **REVERSE**\n- **Atopic eczema = FLEXURAL**: antecubital/popliteal fossae, neck, wrists\n  - Ill-defined, intensely itchy, weepy/lichenified\n  - Personal/family atopy (asthma, hayfever)\n- **Plaque psoriasis = EXTENSOR**: elbows, knees, scalp, sacrum/natal cleft\n  - Well-demarcated salmon-pink plaques with **SILVERY scale**\n  - **Auspitz sign** (pinpoint bleed on scale removal)\n  - Nail changes, Koebner phenomenon\n- **Itch** is prominent in eczema; often modest in psoriasis\n- Distribution + scale quality + demarcation is what the examiner wants",
   "whatFirst": "- Examine: define **lesion borders**\n  - Well-demarcated salmon plaque with silvery scale = **psoriasis**\n  - Ill-defined erythema/excoriation/lichenification = **eczema**\n- Check **NAILS**: pitting/onycholysis = psoriasis\n- Check **scalp and natal cleft**\n- Ask about **atopy history**",
   "discriminator": "- **Psoriasis**: well-demarcated + silvery micaceous scale + extensor/scalp/nails/Koebner\n- **Eczema**: ill-defined + flexural + intensely itchy + atopy history + lichenification\n- **Auspitz sign** and **nail pitting** are psoriasis-specific",
   "redFlags": "- **Erythroderma (>90% BSA)** in either disease = emergency (fluid/temp loss, high-output failure, sepsis)\n- **Generalised pustular psoriasis (von Zumbusch)** with fever = admit\n- **Eczema herpeticum**: monomorphic punched-out erosions + unwell = **aciclovir** emergency",
   "mcqTrap": "- Choosing **'extensor distribution'** as the eczema answer\n  - Extensor = psoriasis; flexural = atopic eczema (adults/older children)\n  - Infantile eczema favours cheeks/extensors, but the adult/teen stem they test is **flexural**",
   "mnemonic": "Psoriasis = 'Pointy Edges, Silver, Scalp/Sacrum, Nails, extensor' (well-defined). Eczema = 'fuzzy, flexural, itchy, atopy'.",
   "viva": "- Examiner probes: 'Describe this plaque — what makes you say psoriasis not eczema?'\n- Want: **demarcation**, scale colour, nails, **Koebner**, atopy history",
   "source": "eTG Dermatology - psoriasis & atopic dermatitis (current); Australasian College of Dermatologists patient resources",
   "verified": true,
   "tags": [
    "eczema",
    "psoriasis",
    "discriminator",
    "rash"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Feature</th><th>Atopic eczema</th><th>Plaque psoriasis</th></tr></thead><tbody><tr><td>Distribution</td><td>FLEXURAL (antecubital/popliteal), neck, wrists</td><td>EXTENSOR (elbows/knees), scalp, sacrum/natal cleft</td></tr><tr><td>Border</td><td>Ill-defined</td><td>Well-demarcated</td></tr><tr><td>Scale</td><td>Fine/weepy, lichenified</td><td>Thick SILVERY (micaceous)</td></tr><tr><td>Itch</td><td>Intense</td><td>Variable/modest</td></tr><tr><td>Signs</td><td>Atopy hx, Dennie-Morgan folds</td><td>Auspitz, Koebner, nail pitting/onycholysis</td></tr></tbody></table>",
   "title": "Eczema vs psoriasis",
   "subtitle": "the discriminating exam features",
   "id": "dermatology-23",
   "images": [
    {
     "src": "assets/img/paediatrics_atopic_eczema_flexural_01.jpg",
     "caption": "Atopic eczema - flexural involvement (antecubital fossa)",
     "alt": "Atopic eczema in the antecubital fossa with ill-defined, lichenified, excoriated plaques in the flexural distribution - the classic location",
     "credit": "Gzzz, Wikimedia Commons, CC BY-SA 4.0 (cropped)"
    },
    {
     "src": "assets/img/dermatology_psoriasis_plaques_01.jpg",
     "caption": "Chronic plaque psoriasis - extensor surfaces (elbows/knees), well-defined silvery scale",
     "alt": "Well-demarcated erythematous plaques with silvery-white scale on the extensor surface of the elbow - the classic psoriasis distribution, opposite to eczema",
     "credit": "Juan Ignacio Castells, Wikimedia Commons, CC BY-SA 3.0 (cropped to back)"
    }
   ]
  },
  {
   "topic": "HLA pre-prescription screening: the drug-genotype pairs to know",
   "subarea": "Inflammatory & infective skin",
   "trap": "- High-yield pairings:\n  - **HLA-B*15:02** → carbamazepine SJS/TEN in **Han Chinese / Southeast Asian** ancestry\n    - Screen BEFORE prescribing in these groups\n  - **HLA-B*58:01** → allopurinol SCAR (SJS/TEN & DRESS) in Han Chinese, Korean, Thai, and Australian populations\n  - **HLA-B*57:01** → abacavir hypersensitivity (MBS-rebated testing in Australia)\n- Trap: matching the **wrong allele to the wrong drug**\n- Trap: thinking screening applies to **all ethnicities equally** — carbamazepine HLA-B*15:02 recommendation is **ancestry-specific**",
   "whatFirst": "- Before starting **carbamazepine** in Southeast Asian / Han Chinese patient: test **HLA-B*15:02**\n  - If positive, **avoid carbamazepine** (consider cross-risk with phenytoin/oxcarbazepine)\n- Consider **HLA-B*58:01** before **allopurinol** in higher-risk ancestries",
   "discriminator": "- **Carbamazepine + Asian ancestry** = HLA-B*15:02 (SJS/TEN)\n- **Allopurinol** = HLA-B*58:01 (SJS/TEN + DRESS)\n- **Abacavir** = HLA-B*57:01\n- Do not **cross the wires**",
   "redFlags": "- Prescribing **carbamazepine to an untested high-risk-ancestry patient** who then blisters = preventable SJS/TEN\n- Examiners flag **failure to screen** as the critical error",
   "mcqTrap": "- Pairing **allopurinol with HLA-B*15:02** (that is carbamazepine)\n- Pairing **carbamazepine with HLA-B*58:01** (that is allopurinol)",
   "mnemonic": "'15 for the anticonvulsant (carbamazepine); 58 for the gout drug (allopurinol); 57 for abacavir.'",
   "viva": "- Scenario: Han Chinese patient, new epilepsy\n- Answer: test **HLA-B*15:02** before carbamazepine",
   "source": "eTG / TGA carbamazepine PI (HLA-B*15:02 ancestry-specific); HLA-B*58:01 allopurinol; MJA 2023 (HLA genotyping for at-risk patients)",
   "verified": true,
   "cutoffs": [
    "**HLA-B*15:02** — carbamazepine SJS/TEN (Han Chinese/SE Asian)",
    "**HLA-B*58:01** — allopurinol SCAR",
    "**HLA-B*57:01** — abacavir hypersensitivity (MBS-rebated in Australia)"
   ],
   "tags": [
    "HLA-B*15:02",
    "HLA-B*58:01",
    "carbamazepine",
    "allopurinol",
    "pharmacogenomics",
    "SJS"
   ],
   "title": "HLA pre-prescription screening",
   "subtitle": "the drug-genotype pairs to know",
   "id": "dermatology-24"
  },
  {
   "topic": "Isotretinoin: Australia does NOT use iPLEDGE - the safety gotchas",
   "subarea": "Inflammatory & infective skin",
   "trap": "- MCQ trap: assuming the US **'iPLEDGE' program** applies in Australia — it does **NOT**\n  - Australia has no single mandated computerised program, but prescribing rules still apply\n- Rules: confirm **NOT pregnant** (negative test), **effective contraception** from before, during, and ~1 month after; monthly review and pregnancy testing\n- Isotretinoin = **potent teratogen** (CNS, cardiac, craniofacial)\n- Do **NOT co-prescribe a TETRACYCLINE** (e.g. doxycycline) with isotretinoin\n  - Combined risk of **idiopathic intracranial hypertension** (pseudotumour cerebri)\n- Check **fasting lipids + LFTs** at baseline and during treatment\n- Monitor **mood** (counsel re depression/suicidality, though causality debated)",
   "whatFirst": "- Baseline: **pregnancy test** + contraception plan, LFTs, fasting lipids\n- Counsel: **teratogenicity**, dryness, photosensitivity, mood\n- Counsel: **no tetracyclines**, no blood donation, avoid waxing/cosmetic procedures",
   "discriminator": "- Key drug interaction: **isotretinoin + tetracycline** → raised intracranial pressure\n  - Presents as headache, visual disturbance, papilloedema\n  - **Stop drug** and exclude IIH",
   "redFlags": "- New severe **headache + visual changes** on isotretinoin (especially if also on a tetracycline) = ?intracranial hypertension\n  - Stop drug, urgent assessment\n- **Pregnancy on isotretinoin** = teratogenic emergency",
   "mcqTrap": "- Selecting **'enrol in iPLEDGE'** (US-only) as the Australian answer\n- **Co-prescribing doxycycline** with isotretinoin",
   "mnemonic": "Isotretinoin 'NO': NO pregnancy, NO tetracyclines, NO blood donation, NO unmonitored lipids/LFTs.",
   "viva": "- Consent station: examiner probes **teratogenicity counselling + contraception** + lipid/LFT/mood monitoring + the **tetracycline interaction**",
   "source": "Australasian College of Dermatologists isotretinoin prescribing; TGA PI (category X). iPLEDGE is a US FDA REMS, not used in Australia",
   "verified": true,
   "tags": [
    "isotretinoin",
    "teratogen",
    "iPLEDGE",
    "intracranial hypertension",
    "drug interaction"
   ],
   "title": "Isotretinoin",
   "subtitle": "Australia does NOT use iPLEDGE - the safety gotchas",
   "id": "dermatology-25"
  },
  {
   "topic": "Psoriatic arthritis: don't miss it - screen every psoriasis patient",
   "subarea": "Inflammatory & infective skin",
   "trap": "- Up to **~10–30%** of psoriasis patients develop psoriatic arthritis (higher in tertiary care)\n- **Skin disease USUALLY PRECEDES joint disease** — the rash is the warning\n- PsA is **SERONEGATIVE** (RF/anti-CCP negative)\n  - Trap MCQ option: 'positive RF' or 'symmetrical small-joint = RA'\n- PsA hallmarks:\n  - **DACTYLITIS** ('sausage digit')\n  - **ENTHESITIS** (Achilles/plantar fascia heel pain)\n  - **NAIL disease** (pitting/onycholysis — strongest skin predictor of PsA)\n  - **DIP-joint involvement**\n  - Asymmetrical oligoarthritis\n  - Deforming **'arthritis mutilans'** / pencil-in-cup on X-ray\n- Nail psoriasis + scalp/intergluteal psoriasis raise PsA risk",
   "whatFirst": "- In any psoriasis patient, **ASK about joint pain/stiffness**\n- Screen with **PEST questionnaire** (score >=3 prompts rheumatology referral)\n- Examine for **dactylitis**, enthesitis (squeeze Achilles), DIP swelling, nails\n- **Early referral** prevents irreversible joint damage",
   "discriminator": "- **PsA**: asymmetrical, RF-NEGATIVE, involves DIPs, dactylitis + enthesitis + nail disease + skin psoriasis\n- **RA**: symmetrical small joints (MCP/PIP), RF/anti-CCP positive, **spares DIPs**",
   "redFlags": "- New **back pain/stiffness** (axial/spondylitis pattern): urgent rheumatology + likely biologic\n- **Rapidly destructive arthritis mutilans** or functional decline: urgent rheumatology\n- Joint damage from delayed treatment is **irreversible**",
   "mcqTrap": "- Selecting **'positive rheumatoid factor confirms the diagnosis'** — PsA is seronegative\n  - A positive RF actually **argues against PsA** and points to RA",
   "mnemonic": "PsA = 'SPINE-DACT-NAIL': Seronegative, asymmetrical, DACTylitis, Enthesitis, DIPs, NAILs, pencil-in-cup.",
   "viva": "- Scenario: psoriasis patient has a swollen finger\n- Answer: **dactylitis** → screen/examine → early **rheumatology referral**; mention irreversibility",
   "source": "Australasian College of Dermatologists & eTG (psoriasis); PEST screening tool (Ibrahim 2009), referral cut-off >=3",
   "verified": true,
   "tags": [
    "psoriatic arthritis",
    "psoriasis",
    "dactylitis",
    "seronegative",
    "referral"
   ],
   "title": "Psoriatic arthritis",
   "subtitle": "don't miss it - screen every psoriasis patient",
   "id": "dermatology-26",
   "images": [
    {
     "src": "assets/img/dermatology_psoriasis_plaques_01.jpg",
     "caption": "Plaque psoriasis on skin - the preceding rash that warns of psoriatic arthritis",
     "alt": "Chronic plaque psoriasis - the skin manifestation that precedes joint disease in psoriatic arthritis; up to 30% of psoriasis patients develop PsA",
     "credit": "Juan Ignacio Castells, Wikimedia Commons, CC BY-SA 3.0 (cropped to back)"
    }
   ]
  },
  {
   "topic": "Scabies: permethrin protocol, the itch lag, and crusted scabies escalation",
   "subarea": "Inflammatory & infective skin",
   "trap": "- First-line: **permethrin 5% cream** applied to the WHOLE BODY (neck down in adults; include scalp/face in infants & elderly)\n- Left on **8–12 hours (overnight)**, washed off, and **REPEATED IN 1 WEEK**\n  - A single application is the common wrong answer\n- **Treat ALL close contacts/household simultaneously** even if asymptomatic\n- Decontaminate bedding/clothing (**hot wash/seal**)\n- Big gotcha: itch can **PERSIST 2–4 weeks AFTER successful treatment** (post-scabetic hypersensitivity)\n  - Do NOT re-treat repeatedly for ongoing itch alone; treat symptomatically\n- **CRUSTED (Norwegian) scabies**: hyperkeratotic, highly contagious, in immunocompromised/elderly\n  - Needs oral **IVERMECTIN** (often multiple doses) + topical, plus isolation",
   "whatFirst": "- **Confirm** (burrows, finger-webs/wrists/genitals, nocturnal itch, contacts itching)\n- Apply **permethrin 5%** whole body overnight, **repeat in 1 week**\n- Treat **all contacts simultaneously** + decontaminate linen\n- Counsel that **itch lasts weeks** despite cure",
   "discriminator": "- **Scabies vs eczema**: scabies = nocturnal itch + multiple household members itching + burrows in finger webs/wrists/genitals/areolae\n  - Eczema = chronic, atopy, flexural, no contacts affected\n- **Crusted scabies** can look like psoriasis/eczema but is hyperkeratotic + in an immunosuppressed host",
   "redFlags": "- **Crusted scabies** (immunocompromised, institutional outbreaks) = enormous mite burden, highly contagious\n  - Oral **ivermectin** + topical, contact precautions, public-health involvement\n- **Secondary bacterial infection** (impetigo, post-strep GN risk) needs antibiotics",
   "mcqTrap": "- Choosing **'single permethrin application'** — must repeat at 1 week\n- **'Re-treat because still itchy at 2 weeks'** — post-scabetic itch is expected, not treatment failure\n- Forgetting to **treat contacts**",
   "mnemonic": "Permethrin: 'whole body, overnight, repeat in 1 week, treat the WHOLE house.' Crusted = ivermectin.",
   "viva": "- Scenario: treated scabies, still itchy at 3 weeks — re-treat?\n- Answer: **expected post-scabetic itch**, treat symptomatically; only re-treat if active burrows/new lesions\n- Examiner probes consent/public-health angle for **crusted scabies**",
   "source": "eTG (scabies); MJA 'Scabies: a clinical update' 2024 (permethrin repeat at 1 week; ivermectin PBS streamlined for crusted/failed topical)",
   "verified": true,
   "tags": [
    "scabies",
    "permethrin",
    "ivermectin",
    "crusted scabies",
    "post-scabetic itch"
   ],
   "title": "Scabies",
   "subtitle": "permethrin protocol, the itch lag, and crusted scabies escalation",
   "id": "dermatology-27",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Norwegian_Scabies_in_Homeless_AIDS_Patient.jpg/960px-Norwegian_Scabies_in_Homeless_AIDS_Patient.jpg",
     "caption": "Crusted (Norwegian) scabies - hyperkeratotic plaques, highly infectious",
     "alt": "Thick hyperkeratotic crusted plaques of Norwegian/crusted scabies - the severe immunocompromised variant harbouring thousands of mites, requiring escalation beyond permethrin alone",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "SJS/TEN: BSA cut-offs, the offending-drug timing, and Nikolsky",
   "subarea": "Inflammatory & infective skin",
   "trap": "- Memorise the **BSA epidermal-detachment cut-offs**: SJS <10%, SJS/TEN overlap 10–30%, TEN >30%\n  - It is a spectrum of the SAME disease, defined by **detachment area** — NOT severity of rash redness\n- Onset: typically **4 days–4 weeks** (often 1–3 weeks) after the culprit drug\n- Top culprits: **carbamazepine, lamotrigine, phenytoin**, allopurinol, sulfonamides (incl. cotrimoxazole), NSAIDs (oxicams), nevirapine\n- Hallmarks:\n  - **Painful skin** (pain out of proportion)\n  - Dusky targetoid macules\n  - **Mucosal involvement** (>=2 sites — eyes/mouth/genitals)\n  - Positive **NIKOLSKY sign** (lateral pressure shears epidermis)\n  - Skin sloughing\n- **SCORTEN** (7 variables in first 24h) predicts mortality",
   "whatFirst": "- **STOP the suspected drug IMMEDIATELY** — single most important intervention; early withdrawal reduces mortality\n- Resuscitate like a **burns patient**: fluids, temperature, analgesia\n- Transfer to **BURNS/ICU unit**\n- **Ophthalmology + urology** for mucosal involvement\n- Calculate **SCORTEN**",
   "discriminator": "- **SJS/TEN vs erythema multiforme**: EM = typical 3-zone target lesions, acral, usually post-infection (HSV/mycoplasma), minimal/no mucosal sloughing, benign\n  - SJS/TEN = drug-induced, atypical dusky macules, prominent painful mucosa, skin detachment, Nikolsky+\n- **vs SSSS (staph)**: SSSS **spares mucosa** and splits superficially (children)",
   "redFlags": "- Mucosal involvement + skin pain + Nikolsky + dusky/sloughing skin **after a new drug** = dermatological emergency\n- **>30% detachment (TEN)** and high SCORTEN = high mortality → ICU/burns transfer",
   "mcqTrap": "- Choosing **'continue the drug and add corticosteroids'** or 'systemic steroids are first-line'\n  - Priority is **immediate drug cessation** + supportive burns-level care\n  - Steroids/IVIG/ciclosporin are adjuncts and debated — not the first move\n- Defining the spectrum by **rash colour rather than % detachment**",
   "mnemonic": "Culprit drugs 'SATAN': Sulfonamides, Allopurinol, anti-convulsanTs, Antibiotics/NSAIDs, Nevirapine. BSA: <10 SJS, 10-30 overlap, >30 TEN.",
   "viva": "- Scenario: painful blistering rash + mouth ulcers **10 days after starting carbamazepine**\n- Action: **stop drug**, ISBAR to ICU/burns + ophthalmology\n- Examiner probes the **BSA cut-offs** and Nikolsky",
   "source": "eTG (severe cutaneous adverse drug reactions); DermNet/ACD; SCORTEN (Bastuji-Garin)",
   "verified": true,
   "tags": [
    "SJS",
    "TEN",
    "drug eruption",
    "Nikolsky",
    "emergency",
    "SCORTEN"
   ],
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">SJS &lt;<span class=\"gv-num\">10%</span> BSA</span><span class=\"gv-pill\">Overlap <span class=\"gv-num\">10-30%</span></span><span class=\"gv-pill\">TEN &gt;<span class=\"gv-num\">30%</span></span></div><div class=\"gv-flow\"><div class=\"gv-step\">New drug 4d-4wk ago + painful dusky rash + mucosa + Nikolsky+</div><div class=\"gv-step\">STOP drug immediately</div><div class=\"gv-step\">Burns/ICU transfer, fluids/analgesia, ophthal + urology, SCORTEN</div></div>",
   "title": "SJS/TEN",
   "subtitle": "BSA cut-offs, the offending-drug timing, and Nikolsky",
   "id": "dermatology-28",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Mucosal_desquamation_in_a_person_with_Stevens%E2%80%93Johnson_syndrome.jpg/960px-Mucosal_desquamation_in_a_person_with_Stevens%E2%80%93Johnson_syndrome.jpg",
     "caption": "Stevens-Johnson Syndrome (SJS) - mucosal erosions and epidermal detachment <10% BSA",
     "alt": "Erosive mucositis (lips, oral mucosa) and early epidermal detachment with dusky erythema of SJS; Nikolsky sign positive",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Necrolysis_epidermalis_toxica_01.JPG/960px-Necrolysis_epidermalis_toxica_01.JPG",
     "caption": "Toxic Epidermal Necrolysis (TEN) - widespread epidermal detachment >30% BSA",
     "alt": "Extensive full-thickness epidermal sheet detachment exposing a raw dermis (>30% BSA) in TEN - the most severe end of the SJS/TEN spectrum",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Superficial fungal infections: KOH/diagnosis, topical-first, and the steroid trap",
   "subarea": "Inflammatory & infective skin",
   "trap": "- Tinea = annular, scaly, **RAISED ACTIVE EDGE** with central clearing, often itchy and asymmetrical\n- Classic gotcha — **tinea incognito**: topical corticosteroid (or combination steroid-antifungal) applied to undiagnosed tinea\n  - Blunts inflammation, loses the classic ring, and the fungus **SPREADS**\n  - Do not reflexively steroid an 'eczema' ring\n- Confirm with **skin scraping for KOH microscopy / fungal culture** before oral therapy\n- Most tinea (corporis/cruris/pedis) = **TOPICAL antifungal** (terbinafine/azole)\n- **Tinea CAPITIS** (scalp) and **ONYCHOMYCOSIS** (nails) need **ORAL antifungals** (terbinafine; griseofulvin for some scalp/kerion)\n  - Topical alone fails — drug cannot penetrate hair follicle/nail\n- Confirm nail fungus by **clipping/culture** before committing to months of oral terbinafine (check LFTs)",
   "whatFirst": "- Scrape the **active edge** → KOH/culture to confirm (especially before oral agents)\n- Skin tinea: **topical antifungal** 2–4 weeks\n- Scalp/nails: **oral terbinafine** — confirm diagnosis + baseline LFTs first",
   "discriminator": "- **Tinea vs eczema/psoriasis**: tinea is asymmetrical with a leading scaly edge + central clearing + KOH-positive\n  - Nummular eczema is symmetrical-ish, no central clearing, KOH-negative\n- **Pityriasis versicolor**: hypo/hyperpigmented macules on trunk, **'spaghetti & meatballs'** on KOH",
   "redFlags": "- Tinea capitis with a boggy, pustular, tender mass = **KERION** (inflammatory)\n  - Needs **oral antifungal +/- steroid** to prevent scarring alopecia\n  - Do not mistake for bacterial abscess and incise",
   "mcqTrap": "- Treating **scalp tinea or onychomycosis with TOPICAL antifungal only** — needs oral\n- Applying a **topical steroid/combination cream** to a ring = tinea incognito\n- Starting oral terbinafine for nails **without confirming the diagnosis**",
   "mnemonic": "'Scalp & nails = swallow (oral); skin = smear (topical). Steroid on tinea = incognito disaster.'",
   "viva": "- Scenario: expanding itchy ring half-treated with hydrocortisone\n- Recognise **tinea incognito**, scrape for KOH, stop steroid, use antifungal\n- For nails: examiner probes **why oral not topical**",
   "source": "eTG Dermatology - dermatophytoses (current); ACD fungal infection resources",
   "verified": true,
   "tags": [
    "tinea",
    "dermatophyte",
    "onychomycosis",
    "tinea capitis",
    "tinea incognito",
    "terbinafine"
   ],
   "title": "Superficial fungal infections",
   "subtitle": "KOH/diagnosis, topical-first, and the steroid trap",
   "id": "dermatology-29",
   "images": [
    {
     "src": "assets/img/dermatology_tinea_corporis_annular_01.jpg",
     "caption": "Tinea corporis - annular lesion with raised active scaly edge and central clearing",
     "alt": "Classic ringworm: annular erythematous plaque with a raised, scaly, active leading edge and central clearing - asymmetrical and itchy",
     "credit": "ProjectManhattan, Wikimedia Commons, CC BY-SA 3.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Tinea_incognito.jpg/960px-Tinea_incognito.jpg",
     "caption": "Tinea incognito - modified/masked tinea after topical steroid application",
     "alt": "Tinea incognito: atypical tinea with loss of active border and spread after inappropriate topical corticosteroid use - the classic steroid trap",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Urticaria: high-dose non-sedating antihistamine, NOT steroids/sedating antihistamines",
   "subarea": "Inflammatory & infective skin",
   "trap": "- First-line for chronic spontaneous urticaria: regular (not PRN) **SECOND-GENERATION non-sedating H1-antihistamine** (cetirizine, loratadine, fexofenadine)\n- If uncontrolled: **UP-TITRATE to up to 4x the standard dose** BEFORE adding anything else\n- Trap options:\n  - Jumping to **oral corticosteroids** (only short rescue, not maintenance)\n  - Using **first-generation SEDATING antihistamines** (avoid — impairment)\n  - Adding **omalizumab** before maximising antihistamine dose\n- Individual urticarial weals last **<24h** and resolve **WITHOUT bruising/scarring**\n  - Lesions lasting >24h or leaving bruising = **urticarial VASCULITIS** (biopsy)",
   "whatFirst": "- Step 1: **Regular 2nd-gen non-sedating antihistamine**\n- Step 2: If inadequate after 2–4 weeks, **titrate up to 4x standard dose**\n- Step 3: Still uncontrolled → add **omalizumab** (anti-IgE) / refer\n- Reserve **short oral steroid** for severe flares only",
   "discriminator": "- **Urticaria vs urticarial vasculitis**: ordinary weals are migratory, last <24h, leave NO mark\n  - If individual lesions **persist >24h**, are painful/burning, or leave bruising/pigmentation → **urticarial vasculitis** → biopsy + workup",
   "redFlags": "- Urticaria + angioedema + **airway/throat tightness, stridor, wheeze, hypotension** = ANAPHYLAXIS\n  - **IM adrenaline (1:1000)** into the anterolateral thigh immediately\n    - Adult: **0.5 mg**; child: **0.01 mg/kg** up to 0.5 mg\n  - Do NOT give antihistamine first",
   "mcqTrap": "- Choosing **'oral prednisolone as maintenance'** — steroids are short rescue only\n- Choosing **'first-generation sedating antihistamine'** — guideline answer is regular high-dose 2nd-gen non-sedating antihistamine",
   "mnemonic": "Urticaria steps: 'Standard -> 4x -> omalizumab' (up-dose before stepping up).",
   "viva": "- Scenario: weals come and go in <24h — first-line and escalation?\n- Answer: **regular non-sedating antihistamine then 4x dose**\n- Then: **anaphylaxis pivot** if airway is involved",
   "source": "ASCIA Treatment Guideline for Chronic Spontaneous Urticaria (2020); eTG (urticaria); ASCIA Acute Management of Anaphylaxis (2024)",
   "verified": true,
   "tags": [
    "urticaria",
    "antihistamine",
    "omalizumab",
    "anaphylaxis",
    "up-dosing"
   ],
   "title": "Urticaria",
   "subtitle": "high-dose non-sedating antihistamine, NOT steroids/sedating antihistamines",
   "id": "dermatology-30",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/6/64/Hives_urticaria.jpg",
     "caption": "Chronic spontaneous urticaria - wheals/hives on trunk",
     "alt": "Multiple erythematous, pruritic, transient wheals (hives) of varying sizes on the trunk in chronic spontaneous urticaria - each lesion resolves within 24 hours",
     "credit": "Wikimedia Commons"
    }
   ]
  }
 ]
}
);
