window.GOTCHA = window.GOTCHA || { modules: [] };
window.GOTCHA.modules.push(
{
 "id": "haematology",
 "name": "Haematology",
 "category": "Medicine",
 "blurb": "Written-exam + VIVA. Blood-film interpretation, anticoagulation reversal and transfusion reactions.",
 "cards": [
  {
   "topic": "Anaemia of chronic disease vs iron deficiency (the iron-study fingerprint)",
   "subarea": "Anaemia & red cells",
   "trap": "- **ACD (anaemia of chronic disease/inflammation)** = usually normocytic-normochromic (can be mildly microcytic)\n- Mechanism: **hepcidin-driven iron sequestration**\n- Discriminating fingerprint vs true iron deficiency:\n  - **ACD**: ferritin **normal or HIGH** (acute-phase reactant), transferrin/TIBC **LOW**, transferrin saturation low-to-normal\n  - **Iron deficiency**: ferritin **LOW**, transferrin/TIBC **HIGH**\n- Trap — patient with **BOTH** (e.g. RA + GI blood loss):\n  - Ferritin may sit in the 'normal' range while **iron deficiency coexists**\n  - Use **transferrin saturation <20%** or **soluble transferrin receptor (sTfR)** to unmask it\n    - sTfR raised in iron deficiency; normal in pure ACD\n- Management of **pure ACD**: treat the underlying inflammatory disease\n  - **Do NOT give iron** — it is sequestered and oral iron is largely ineffective",
   "whatFirst": "- **Full iron studies + CRP**\n- If mixed picture suspected, add **transferrin saturation / soluble transferrin receptor**",
   "cutoffs": [
    "ACD: ferritin **normal/high**, TIBC/transferrin **low**, transferrin saturation low-normal",
    "Iron deficiency: ferritin **low**, TIBC/transferrin **high**",
    "Coexisting iron deficiency in inflammation: ferritin can be up to **~100**, transferrin sat **<20%**"
   ],
   "discriminator": "- **HIGH transferrin/TIBC + raised sTfR** = iron deficiency\n- **LOW transferrin/TIBC + normal sTfR** = pure ACD",
   "redFlags": "- Do **NOT** attribute all anaemia to 'chronic disease' and stop looking\n  - Coexisting **iron deficiency / malignancy / bleeding** can hide behind an ACD label",
   "mcqTrap": "- Labelling a normocytic anaemia with normal ferritin as '**ACD, no further action**' when transferrin saturation is **8%** — that is **masked iron deficiency** requiring iron + source hunt",
   "viva": "- Examiner probes: 'How do you tell ACD from iron deficiency when ferritin is normal?'\n- Answer: **transferrin/TIBC** and **transferrin saturation** (+/- **soluble transferrin receptor**)",
   "mnemonic": "ACD: ferritin UP, transferrin/TIBC DOWN. Iron deficiency: ferritin DOWN, transferrin/TIBC UP. Sat <20% unmasks hidden iron deficiency.",
   "source": "Australian Red Cross Lifeblood 'Diagnosis and investigation of iron deficiency anaemia' (current); eTG (current).",
   "verified": true,
   "tags": [
    "anaemia of chronic disease",
    "hepcidin",
    "TIBC",
    "soluble transferrin receptor",
    "MEDI8403",
    "MEDI8401"
   ],
   "title": "Anaemia of chronic disease vs iron deficiency…",
   "id": "haematology-1"
  },
  {
   "topic": "B12/folate: cut-offs, the grey zone, and treat B12 BEFORE folate",
   "subarea": "Anaemia & red cells",
   "trap": "- Killer gotcha 1: **NEVER give folate alone** to a macrocytic/megaloblastic patient before excluding/treating B12 deficiency\n  - Folate corrects the anaemia but lets **subacute combined degeneration** progress — sometimes irreversibly\n  - **Replace/cover B12 first or concurrently**\n- Killer gotcha 2: Serum B12 **grey zone** (Australian Prescriber thresholds — assay-dependent):\n  - Deficiency likely: **<133 pmol/L**\n  - **Indeterminate: 133–258 pmol/L**\n  - Deficiency unlikely: **>258 pmol/L**\n- When symptomatic in the **indeterminate zone**, confirm with:\n  - **Active B12 (holotranscobalamin)**: deficient <25, indeterminate 25–70 pmol/L\n  - **Methylmalonic acid (MMA)** and/or **homocysteine**\n  - Normal MMA + homocysteine essentially **excludes** B12 deficiency\n- **Red cell folate** reflects stores better than serum folate (serum swings with recent intake)\n- **Macrocytosis can be ABSENT** despite real B12/folate deficiency — neuro symptoms can precede anaemia",
   "whatFirst": "- Send **B12 AND folate together**\n- If B12 in the **indeterminate zone + symptomatic**: add active B12 / MMA / homocysteine before committing to folate alone",
   "cutoffs": [
    "Total serum B12: deficient **<133 pmol/L**; indeterminate **133–258**; unlikely >258 (assay-dependent)",
    "Active B12 (holoTC): deficient **<25**; indeterminate **25–70 pmol/L**",
    "Elevated **MMA + homocysteine** = B12 deficiency; normal both essentially excludes it",
    "Isolated elevated **homocysteine (normal MMA)** = folate (or B6) deficiency",
    "**Red cell folate** > serum folate for stores"
   ],
   "discriminator": "- **MMA distinguishes the two deficiencies**:\n  - B12 deficiency: raises **BOTH MMA and homocysteine**\n  - Folate deficiency: raises **homocysteine ONLY** (MMA normal)",
   "redFlags": "- **Neuro signs** (paraesthesiae, dorsal column loss, ataxia, dementia) → **urgent B12 replacement**\n  - Do NOT delay for folate result",
   "mcqTrap": "- Choosing '**start folic acid**' for a macrocytic anaemia before the B12 result is back\n  - Classic trap that **precipitates/worsens subacute combined degeneration**",
   "viva": "- Examiner probes: 'Macrocytic anaemia — what must you exclude before giving folate, and why?'\n- Answer: **B12 deficiency / subacute combined degeneration**",
   "mnemonic": "B12 before folate, or you fry the cord (SACD). MMA+Hcy = B12; Hcy-only = folate.",
   "source": "Australian Prescriber 'Vitamin B12 deficiency: testing and treatment' (current, Table 3 cut-offs); eTG (current).",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th></th><th>MMA</th><th>Homocysteine</th></tr></thead><tbody><tr><td>B12 deficiency</td><td>High</td><td>High</td></tr><tr><td>Folate deficiency</td><td>Normal</td><td>High</td></tr></tbody></table>",
   "tags": [
    "B12",
    "folate",
    "MMA",
    "homocysteine",
    "subacute combined degeneration",
    "MEDI8403",
    "MEDI8401"
   ],
   "title": "B12/folate",
   "subtitle": "cut-offs, the grey zone, and treat B12 BEFORE folate",
   "id": "haematology-2",
   "images": [
    {
     "src": "assets/img/haematology_film_hypersegmented_neutrophil_01.jpg",
     "caption": "Hypersegmented neutrophil on blood film (megaloblastic anaemia / B12 deficiency)",
     "alt": "Hypersegmented neutrophil (5+ lobes) - the hallmark peripheral film finding in B12 and folate deficiency / megaloblastic anaemia",
     "credit": "Ed Uthman (Houston TX USA) / Wikimedia Commons · CC BY 2.0"
    }
   ]
  },
  {
   "topic": "Blood-film pattern recognition: the spot diagnoses",
   "subarea": "Anaemia & red cells",
   "trap": "- Memorise the **film finding → diagnosis** pairings and their gotcha mimics:\n- **Spherocytes** = hereditary spherocytosis OR warm AIHA\n  - DAT separates them — do NOT call every spherocytosis 'hereditary'\n- **Schistocytes/fragments** = MAHA (TTP/HUS/DIC) — **emergency**\n- **Bite cells + Heinz bodies** (and 'blister' cells) = oxidative haemolysis\n  - Classically **G6PD deficiency** after oxidant trigger: fava beans, dapsone, primaquine, infection\n- **Target cells** = liver disease, thalassaemia, post-splenectomy, haemoglobinopathies\n- **Howell-Jolly bodies** = hyposplenism/asplenia (splenectomy, sickle cell, coeliac)\n- **Sickle cells** = sickle cell disease\n- **Tear-drop cells (dacrocytes) + leucoerythroblastic film** = marrow infiltration/myelofibrosis\n- **Hypersegmented neutrophils (>5 lobes) + oval macrocytes** = megaloblastic (B12/folate)\n- **Rouleaux** = myeloma/high ESR\n- **Basophilic stippling** = lead poisoning/thalassaemia",
   "whatFirst": "- **Read the film FIRST** in any unexplained anaemia/cytopenia\n  - One morphology often **redirects the entire work-up**",
   "discriminator": "- **Spherocytes**: hereditary spherocytosis (**DAT negative**, family history) vs warm AIHA (**DAT positive**)\n- **Bite cells = G6PD**: check after trigger\n  - Assay may be **falsely normal during acute haemolysis** — old deficient cells are lysed first",
   "redFlags": "- **Blasts** on film → acute leukaemia\n- **Tear-drops + leucoerythroblastic picture** → marrow infiltration\n- **Pancytopenia** on film\n  - All → **urgent haematology**",
   "mcqTrap": "- Calling spherocytes automatically '**hereditary spherocytosis**' and missing **warm AIHA**\n  - The **DAT** is what distinguishes them",
   "viva": "- Examiner shows a film: 'What is this and what one test next?'\n  - e.g. **bite cells** → **G6PD assay** (and identify the **oxidant trigger**)",
   "mnemonic": "Bite cells=G6PD; Spherocytes=HS/AIHA(DAT); Howell-Jolly=no spleen; Tear-drops=myelofibrosis; Hypersegmented=B12/folate; Targets=liver/thal.",
   "source": "RCPA / HSANZ-aligned morphology standard; eTG (current). G6PD assay can be falsely normal during acute haemolysis (retest when stable).",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Film finding</th><th>Spot diagnosis</th><th>Confirm/next</th></tr></thead><tbody><tr><td>Spherocytes</td><td>HS or warm AIHA</td><td>DAT</td></tr><tr><td>Schistocytes + low platelets</td><td>MAHA (TTP/HUS/DIC)</td><td>Coags, urgent haem</td></tr><tr><td>Bite cells + Heinz bodies</td><td>G6PD (oxidant trigger)</td><td>G6PD assay (when stable)</td></tr><tr><td>Howell-Jolly bodies</td><td>Hyposplenism</td><td>Vaccinate, penicillin</td></tr><tr><td>Hypersegmented neutrophils + oval macrocytes</td><td>Megaloblastic</td><td>B12/folate</td></tr><tr><td>Tear-drops + leucoerythroblastic</td><td>Myelofibrosis/infiltration</td><td>Marrow biopsy</td></tr><tr><td>Rouleaux</td><td>Myeloma</td><td>EPG/SFLC</td></tr></tbody></table>",
   "tags": [
    "blood film",
    "spherocytes",
    "schistocytes",
    "G6PD",
    "Howell-Jolly",
    "morphology",
    "MEDI8403",
    "MEDI8401"
   ],
   "title": "Blood-film pattern recognition",
   "subtitle": "the spot diagnoses",
   "id": "haematology-3",
   "images": [
    {
     "src": "assets/img/haematology_film_spherocytes_01.jpg",
     "caption": "Spherocytes on blood film (hereditary spherocytosis or warm AIHA)",
     "alt": "Numerous spherocytes - small dense round red cells lacking central pallor - the spot diagnosis for hereditary spherocytosis or warm AIHA",
     "credit": "Paulo Henrique Orlandi Mourao, Wikimedia Commons, CC BY-SA 3.0"
    },
    {
     "src": "assets/img/haematology_film_schistocytes_01.jpg",
     "caption": "Schistocytes / red cell fragments on blood film (MAHA - TTP, HUS, DIC)",
     "alt": "Schistocytes (helmet cells / red-cell fragments) indicating microangiopathic haemolytic anaemia - TTP, HUS, DIC",
     "credit": "Ed Uthman, MD, Wikimedia Commons, CC BY 2.0"
    },
    {
     "src": "assets/img/haematology_film_sickle_cells_01.jpg",
     "caption": "Sickle cells on blood film (sickle cell anaemia)",
     "alt": "Elongated crescent sickle cells with target cells - the spot diagnosis for sickle cell disease",
     "credit": "SpicyMilkBoy, Wikimedia Commons, CC BY-SA 4.0"
    },
    {
     "src": "assets/img/haematology_blood_film_acute_leukaemia_01.jpg",
     "caption": "Blast cells on blood film (acute leukaemia - AML or ALL)",
     "alt": "Numerous large blast cells with high nuclear:cytoplasmic ratio - acute leukaemia spot diagnosis",
     "credit": "Unknown photographer, Wikimedia Commons, public domain · Public domain"
    },
    {
     "src": "assets/img/haematology_film_hypersegmented_neutrophil_01.jpg",
     "caption": "Hypersegmented neutrophil on blood film (megaloblastic anaemia)",
     "alt": "Hypersegmented neutrophil (5+ lobes) with macro-ovalocytes in B12/folate deficiency",
     "credit": "Ed Uthman (Houston TX USA) / Wikimedia Commons · CC BY 2.0"
    }
   ]
  },
  {
   "topic": "Haemolysis: the lab triad + DAT directs the cause",
   "subarea": "Anaemia & red cells",
   "trap": "- Recognise haemolysis by the **triad**: high reticulocytes, high LDH, high unconjugated bilirubin + **low haptoglobin**\n- Decision gotcha: once haemolysis confirmed, the **DAT (direct antiglobulin/Coombs test)** is the pivotal next test\n  - Splits **IMMUNE** (DAT positive) from **NON-IMMUNE** (DAT negative) causes\n- DAT pattern sub-types:\n  - **IgG +/- C3** = warm AIHA → treat with **corticosteroids**; secondary to lymphoproliferative disease/SLE/drugs\n  - **C3d only** (IgM-driven) = **cold agglutinin disease** → keep warm, treat underlying; steroids/splenectomy less effective\n- Gotcha 1: **haptoglobin can be falsely normal** in inflammation (also an acute-phase reactant)\n- Gotcha 2: small % of true AIHA is **DAT-negative** — clinical picture still wins",
   "whatFirst": "- Confirm haemolysis: **retics, LDH, bilirubin, haptoglobin + film**\n- Then **DAT** to split immune vs non-immune",
   "cutoffs": [
    "Haemolysis screen: high **reticulocytes**, high **LDH**, high **unconjugated bilirubin**, low **haptoglobin**",
    "**DAT positive** = immune; **DAT negative** = non-immune"
   ],
   "discriminator": "- **Warm AIHA**: IgG +/- C3, spherocytes, **steroid-responsive**\n- **Cold agglutinin disease**: C3d only, agglutination/acral symptoms on cold exposure, **treat underlying + keep warm**",
   "redFlags": "- Brisk **intravascular haemolysis** with haemoglobinuria, AKI, or features of **MAHA** → urgent haematology\n  - Consider **TTP/HUS** (see schistocyte card)",
   "mcqTrap": "- Calling every haemolytic anaemia '**autoimmune, give steroids**' — wrong\n  - A **DAT-negative haemolysis** (e.g. hereditary spherocytosis, G6PD, mechanical) does **not respond to steroids**",
   "viva": "- Examiner probes: 'You have haemolysis — what one test tells you if it is immune?'\n- Answer: **DAT**, and interpret **IgG vs C3** patterns",
   "mnemonic": "Haemolysis = Retics up LDH up Bili up Haptoglobin down; DAT decides immune vs not.",
   "source": "eTG (current); Australian Red Cross Lifeblood transfusion.com.au (AIHA). Haptoglobin is also an acute-phase reactant (can be falsely normal).",
   "verified": true,
   "tags": [
    "haemolysis",
    "DAT",
    "Coombs",
    "warm AIHA",
    "cold agglutinin",
    "MEDI8403",
    "MEDI8401"
   ],
   "title": "Haemolysis",
   "subtitle": "the lab triad + DAT directs the cause",
   "id": "haematology-4",
   "images": [
    {
     "src": "assets/img/haematology_film_schistocytes_01.jpg",
     "caption": "Schistocytes on blood film (microangiopathic haemolytic anaemia - MAHA)",
     "alt": "Red-cell fragments (schistocytes / helmet cells) indicating intravascular mechanical haemolysis - TTP, HUS, DIC",
     "credit": "Ed Uthman, MD, Wikimedia Commons, CC BY 2.0"
    },
    {
     "src": "assets/img/haematology_film_spherocytes_hs_fresh.jpg",
     "caption": "Spherocytes on blood film (warm AIHA - autoimmune haemolytic anaemia)",
     "alt": "Spherocytes with polychromasia indicating warm AIHA (DAT-positive haemolysis)",
     "credit": "Paulo Henrique Orlandi Mourao, Wikimedia Commons, CC BY-SA 3.0"
    }
   ]
  },
  {
   "topic": "Iron deficiency: ferritin cut-offs and the inflammation trap",
   "subarea": "Anaemia & red cells",
   "trap": "- Serum ferritin **<30 microgram/L** (adult) / **<20** (children) = diagnostic of iron deficiency\n- Gotcha: **ferritin is an acute-phase reactant**\n  - Coexisting inflammation (also obesity, fatty liver, malignancy, chronic disease) → ferritin **falsely normal**\n  - Iron deficiency may still be present with ferritin up to **100 microgram/L** (adults) / **150** (children)\n  - **Always check a CRP**\n- When ferritin equivocal + inflammation present, use **transferrin saturation <20%** (or soluble transferrin receptor) to confirm low iron availability\n- **Serum iron alone is useless** for diagnosis\n  - Reflects only recent intake; fluctuates diurnally\n  - Do NOT diagnose or exclude iron deficiency on serum iron",
   "whatFirst": "- **FBC + ferritin**\n- If ferritin equivocal or inflammation suspected: add **CRP and transferrin saturation**",
   "cutoffs": [
    "Ferritin **<30 microgram/L** (adult) = iron deficiency",
    "Ferritin **<20** (children)",
    "With inflammation: iron deficiency still possible up to ferritin **100** (adult) / **150** (child)",
    "Transferrin saturation **<20%** = low iron availability"
   ],
   "discriminator": "- **Normal/high ferritin + low transferrin saturation + high transferrin** = iron deficiency masked by inflammation, NOT iron replete",
   "redFlags": "- Iron deficiency in a **man or post-menopausal woman** = **occult GI malignancy** until proven otherwise\n  - → **Endoscopy**",
   "mcqTrap": "- Excluding iron deficiency because **ferritin is 80** in a patient with active RA/IBD — wrong\n  - That ferritin can be a **falsely-normal value masking true deficiency**",
   "viva": "- Examiner probes: 'Ferritin is 60 with a CRP of 40 — is this patient iron deficient?'\n- Show you know **inflammation invalidates ferritin** and you would use **transferrin saturation**",
   "mnemonic": "Ferritin <30 = empty stores; CRP up = ferritin lies, trust the transferrin saturation.",
   "source": "Australian Red Cross Lifeblood 'Diagnosis and investigation of iron deficiency anaemia' (current); Zhang et al. MJA 2024;221(7); eTG (current).",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Test</th><th>Iron deficiency</th><th>ACD</th><th>Thalassaemia trait</th></tr></thead><tbody><tr><td>Ferritin</td><td>Low (&lt;30)</td><td>Normal/high</td><td>Normal/high</td></tr><tr><td>Transferrin saturation</td><td>Low (&lt;20%)</td><td>Low</td><td>Normal/high</td></tr><tr><td>Transferrin/TIBC</td><td>High</td><td>Low</td><td>Normal</td></tr><tr><td>RDW</td><td>High</td><td>Normal</td><td>Normal</td></tr></tbody></table>",
   "tags": [
    "iron deficiency",
    "ferritin",
    "CRP",
    "transferrin saturation",
    "MEDI8403",
    "MEDI8401"
   ],
   "title": "Iron deficiency",
   "subtitle": "ferritin cut-offs and the inflammation trap",
   "id": "haematology-5",
   "images": [
    {
     "src": "assets/img/dermatology_photo_koilonychia_iron_fresh.jpg",
     "caption": "Koilonychia (spoon nails) - iron deficiency",
     "alt": "Spoon-shaped concave nails with everted edges (koilonychia) - a clinical sign of severe/chronic iron deficiency",
     "credit": "CHeitz, Wikimedia Commons, CC BY 2.0"
    }
   ]
  },
  {
   "topic": "Iron deficiency: ALWAYS find the cause",
   "subarea": "Anaemia & red cells",
   "trap": "- Iron deficiency is a **symptom, not a diagnosis** — the obligation is to find WHY\n- **Adult male OR post-menopausal female** + unexplained iron deficiency = **GI blood loss / GI malignancy** until proven otherwise\n  - Mandates **upper AND lower endoscopy**\n- **Premenopausal women**: menorrhagia is commonest cause BUT:\n  - Still screen for **coeliac disease (anti-tTG)**\n  - Ask about GI symptoms — do **not anchor on periods** and miss bowel cancer\n- **Coeliac serology** should be checked in essentially **all unexplained iron deficiency**\n- Gotcha: **replacing iron and 'watching'** without investigating the source = wrong answer in any adult with no obvious cause",
   "whatFirst": "- Confirm iron deficiency\n- Take a **bleeding history** (GI, menstrual)\n- Check **coeliac serology**\n- Refer for **endoscopy** if no clear cause",
   "discriminator": "- Premenopausal woman with **menorrhagia** = obvious cause — but still **test coeliac serology**\n- **Man / post-menopausal woman** = **endoscopy regardless**",
   "redFlags": "- **Weight loss**, change in bowel habit, PR bleeding\n- Family history of **bowel/ovarian cancer**\n- Age **>50**\n  - All → **urgent endoscopy/colonoscopy**",
   "mcqTrap": "- 'Commence **oral iron and reassess in 3 months**' for a 68-year-old man with new iron-deficiency anaemia — wrong\n  - Correct answer: **investigate the GI tract**",
   "viva": "- Examiner probes: 'A 70-year-old man, Hb 95, ferritin 8 — what is your single biggest concern and next step?'\n- Answer: **colorectal/GI malignancy** → **endoscopy referral + ISBAR**",
   "mnemonic": "Iron deficiency in a man or post-menopausal woman = camera both ends.",
   "source": "Australian Red Cross Lifeblood 'Iron deficiency anaemia' (current); eTG (current); RACGP.",
   "verified": true,
   "tags": [
    "iron deficiency",
    "GI malignancy",
    "coeliac",
    "endoscopy",
    "MEDI8403",
    "MEDI8401"
   ],
   "title": "Iron deficiency",
   "subtitle": "ALWAYS find the cause",
   "id": "haematology-6"
  },
  {
   "topic": "Iron deficiency: oral vs IV iron (dose, alternate-day, when to switch)",
   "subarea": "Anaemia & red cells",
   "trap": "- **Oral iron** is first-line for most patients\n- Modern gotcha: **alternate-day single dosing (~60 mg elemental)** absorbs as well as or better than daily divided doses\n  - Frequent dosing raises **hepcidin** and blunts absorption\n  - So 'increase to three times daily' is often the **WRONG answer** for poor response/tolerance\n- Continue oral iron for **~3 months AFTER** haemoglobin normalises to replenish stores\n- Expected Hb response: rise of **~20 g/L over ~3-4 weeks**; a reticulocyte bump confirms response\n- **IV iron indications**: oral cannot be used/ineffective/not tolerated, malabsorption, ongoing losses exceeding oral replacement, CKD, IBD, CCF, or when rapid correction is needed to avoid transfusion\n- IV is **NOT** automatically better/faster for Hb correction in simple deficiency",
   "whatFirst": "- Start **oral elemental iron** first\n- If non-response at **2-4 weeks**, check adherence/absorption and ongoing loss before switching to IV",
   "cutoffs": [
    "Oral: **~100-200 mg** elemental/day; alternate-day **~60 mg** may absorb as well or better",
    "Children **3-6 mg/kg/day** elemental",
    "Continue **~3 months** after Hb normalises",
    "Expected Hb rise **~20 g/L** in ~3-4 weeks"
   ],
   "discriminator": "- Non-response to oral iron: think **non-adherence**, ongoing bleeding, malabsorption (coeliac/H. pylori/PPI), or wrong diagnosis (thalassaemia/ACD)\n  - NOT 'needs more frequent dosing'",
   "redFlags": "- IV iron: monitor for **hypersensitivity/anaphylaxis** (have resuscitation ready)\n- Persistent **brown skin staining** at extravasation site",
   "mcqTrap": "- Selecting '**IV iron is first-line** because it corrects Hb faster' is wrong\n  - In uncomplicated deficiency oral iron is first-line and equally effective for Hb recovery over weeks",
   "viva": "- Examiner probes **consent for IV iron**\n  - Discuss benefits, risk of hypersensitivity/**anaphylaxis**, skin staining\n  - State that **infusion-reaction monitoring** is required",
   "mnemonic": "Oral first, alternate-day beats daily (hepcidin), keep going 3 months past normal Hb.",
   "source": "Australian Red Cross Lifeblood 'Treating iron deficiency anaemia' (current); eTG (current).",
   "verified": true,
   "tags": [
    "iron deficiency",
    "oral iron",
    "IV iron",
    "hepcidin",
    "MEDI8403",
    "MEDI8401"
   ],
   "title": "Iron deficiency",
   "subtitle": "oral vs IV iron (dose, alternate-day, when to switch)",
   "id": "haematology-7"
  },
  {
   "topic": "Microcytic / normocytic / macrocytic work-up: MCV-driven sequence",
   "subarea": "Anaemia & red cells",
   "trap": "- The single most important first move is NOT to order a B12/folate/iron-studies shotgun panel\n- It is to **read the MCV and reticulocyte count** off the FBC you already have — they branch the entire work-up\n- **MICROCYTIC (MCV <80 fL)**: iron studies first (iron deficiency vs thalassaemia vs ACD)\n- **NORMOCYTIC (80-100 fL)**: reticulocyte count first\n  - HIGH retics = blood loss or haemolysis\n  - LOW retics = marrow problem or anaemia of chronic disease\n- **MACROCYTIC (MCV >100 fL)**: B12/folate, TFTs, LFTs, alcohol/drug history, reticulocytes\n  - High retics with macrocytosis = haemolysis, NOT B12 deficiency\n- Gotcha: a **NORMAL MCV does not exclude** mixed iron + B12 deficiency — the MCV averages out (e.g. coeliac, post-gastrectomy)\n- Look at the **RDW** (high = mixed/iron deficiency) and the blood film for a **dimorphic population**",
   "whatFirst": "- Read **MCV + reticulocyte count** off the existing FBC before ordering anything\n  - They dictate the branch",
   "discriminator": "- **Normal MCV with high RDW + dimorphic film** = mixed deficiency (iron + B12)\n  - Do not be reassured by a normal MCV",
   "redFlags": "- **Pancytopenia**, blasts on film, very high MCV (>115) -> urgent haem referral\n  - Consider myelodysplasia, B12, drugs",
   "mcqTrap": "- Choosing '**order B12, folate and iron studies**' as the first step in every anaemia is wrong\n  - The exam rewards using the **MCV/retic already in front of you** to direct testing",
   "viva": "- Examiner probes: 'You have the FBC — what **2 numbers** tell you where to go next?'\n  - Answer: **MCV** then **reticulocyte count**, and justify the branch",
   "mnemonic": "MCV branches: small=iron studies, normal=retics, big=B12/folate.",
   "source": "RACGP 'Anaemia in adults' diagnostic approach; eTG (current). General principle.",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>MCV</th><th>First test</th><th>Differential</th></tr></thead><tbody><tr><td>&lt;80 (micro)</td><td>Iron studies</td><td>Iron deficiency, thalassaemia, ACD, sideroblastic</td></tr><tr><td>80-100 (normo)</td><td>Reticulocytes</td><td>High retic: bleed/haemolysis. Low retic: ACD, marrow, renal</td></tr><tr><td>&gt;100 (macro)</td><td>B12/folate, retics, TFT, LFT</td><td>High retic: haemolysis. Low retic: B12/folate, MDS, alcohol, drugs, hypothyroid</td></tr></tbody></table>",
   "tags": [
    "work-up",
    "MCV",
    "reticulocytes",
    "RDW",
    "MEDI8403",
    "MEDI8401"
   ],
   "title": "Microcytic / normocytic / macrocytic work-up",
   "subtitle": "MCV-driven sequence",
   "id": "haematology-8",
   "images": [
    {
     "src": "assets/img/haematology_film_hypersegmented_neutrophil_01.jpg",
     "caption": "Hypersegmented neutrophil - macrocytic anaemia (B12/folate deficiency)",
     "alt": "Hypersegmented neutrophil with macro-ovalocytes - key film finding in macrocytic/megaloblastic anaemia prompting B12/folate workup",
     "credit": "Ed Uthman (Houston TX USA) / Wikimedia Commons · CC BY 2.0"
    }
   ]
  },
  {
   "topic": "Red cell transfusion threshold (restrictive) — the trigger numbers",
   "subarea": "Anaemia & red cells",
   "trap": "- Default to a **RESTRICTIVE strategy**: transfuse when Hb **<70 g/L** in a haemodynamically stable hospitalised adult\n- Exam-catching exceptions raise the trigger:\n  - **Acute coronary syndrome**: ~80 g/L\n  - Many **cardiac-surgery/cardiovascular-disease** patients: ~80 g/L\n- Gotcha: transfuse the symptomatic patient and use **SINGLE-UNIT transfusions** in stable non-bleeding adults, reassessing clinically and with a repeat Hb between units\n  - 'Give 2 units' reflexively is the **wrong answer**\n- Transfusion is **NOT** the treatment for iron/B12/folate deficiency anaemia that is correctable — replace the deficiency unless symptomatic/unstable\n- In **active major haemorrhage** the Hb number lags and should not delay resuscitation/transfusion",
   "whatFirst": "- Assess for **bleeding/symptoms/haemodynamics** first\n- In stable non-bleeding adults use Hb **<70 g/L** and **single-unit dosing** with reassessment",
   "cutoffs": [
    "Stable adult: transfuse Hb **<70 g/L**",
    "Acute coronary syndrome: **~80 g/L**",
    "Cardiac surgery / cardiovascular disease: **~80 g/L**",
    "**Single-unit** then reassess in stable patients"
   ],
   "discriminator": "- **Restrictive (<70)** for the stable patient\n- Raise the threshold **(~80)** for ACS and active cardiac comorbidity\n- **Ignore the number** and resuscitate in active major haemorrhage",
   "redFlags": "- **Active major haemorrhage / haemodynamic instability** -> activate massive transfusion protocol\n  - Do not wait for a Hb",
   "mcqTrap": "- Choosing '**transfuse 2 units now**' for a stable inpatient with Hb 78 and no symptoms is wrong\n  - Restrictive practice = no transfusion (or single unit if symptomatic); correct the underlying cause",
   "viva": "- Examiner probes **consent + ISBAR** for transfusion\n  - Indication, benefits/risks (**TACO, TRALI**, reactions)\n  - **Single-unit reassessment**\n  - State the threshold you would use for THIS patient",
   "mnemonic": "70 stable, 80 heart; one unit at a time, then reassess.",
   "source": "National Blood Authority Patient Blood Management Guidelines (Module 2/3); Choosing Wisely Australia (ANZSBT/ANZCA); Australian Red Cross Lifeblood.",
   "verified": true,
   "tags": [
    "transfusion",
    "haemoglobin threshold",
    "patient blood management",
    "single-unit",
    "MEDI8403",
    "MEDI8401"
   ],
   "title": "Red cell transfusion threshold (restrictive)",
   "subtitle": "the trigger numbers",
   "id": "haematology-9"
  },
  {
   "topic": "Schistocytes / MAHA: the emergency you cannot miss",
   "subarea": "Anaemia & red cells",
   "trap": "- **Schistocytes + thrombocytopenia** = microangiopathic haemolytic anaemia (MAHA) = a haematological EMERGENCY until proven otherwise\n- Single biggest gotcha: a **DAT-NEGATIVE** haemolytic anaemia with schistocytes and low platelets is NOT autoimmune\n- **Platelet transfusion is generally CONTRAINDICATED** if TTP is suspected — platelets can worsen microthrombi\n- Suspect TTP with the pentad (MAHA, thrombocytopenia, neuro signs, renal impairment, fever)\n  - But you only need **MAHA + thrombocytopenia** without another cause to act\n- TTP needs **URGENT plasma exchange** (start as soon as possible; do not wait for ADAMTS13)\n- Distinguish from **DIC** (deranged coagulation/low fibrinogen/high D-dimer — TTP coags are typically normal) and **HUS** (renal-dominant, often post-diarrhoeal/E. coli O157 in children)",
   "whatFirst": "- **Film + platelets + coags + renal function + LDH** immediately\n- If MAHA + thrombocytopenia and TTP plausible -> call **haematology NOW** for plasma exchange",
   "cutoffs": [
    "**MAHA** = schistocytes + thrombocytopenia + haemolysis markers",
    "TTP: coags typically **NORMAL**",
    "DIC: prolonged **PT/APTT**, low fibrinogen, high D-dimer"
   ],
   "discriminator": "- **TTP** = normal coags + neuro signs -> plasma exchange\n- **DIC** = abnormal coags + low fibrinogen -> treat cause\n- **HUS** = renal failure + diarrhoeal prodrome -> supportive",
   "redFlags": "- **Neuro changes + low platelets + schistocytes** = TTP -> emergency plasma exchange\n  - Do **NOT** give platelets unless life-threatening bleeding",
   "mcqTrap": "- Choosing '**transfuse platelets**' for a patient with TTP and platelets of 15 is wrong\n  - Platelet transfusion can precipitate **fatal thrombosis**; the answer is **plasma exchange**",
   "viva": "- Examiner probes **ISBAR escalation**: schistocytes + thrombocytopenia -> urgent haematology referral for ?TTP/plasma exchange\n  - State what you would **NOT** do (platelets)",
   "mnemonic": "Schistocytes + low platelets = think TTP first; normal coags -> plasma exchange, NO platelets.",
   "source": "Australian Red Cross Lifeblood transfusion.com.au 'Platelet disorders / TTP' (plasma exchange urgent; platelets generally contraindicated); eTG (current).",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th></th><th>Coags/fibrinogen</th><th>Clue</th><th>Action</th></tr></thead><tbody><tr><td>TTP</td><td>Normal</td><td>Neuro signs, low ADAMTS13</td><td>Plasma exchange urgently</td></tr><tr><td>DIC</td><td>Deranged, low fibrinogen, high D-dimer</td><td>Sepsis/obstetric/malignancy</td><td>Treat cause + support</td></tr><tr><td>HUS</td><td>Normal</td><td>Renal failure, diarrhoea (E. coli O157)</td><td>Supportive</td></tr></tbody></table>",
   "tags": [
    "schistocytes",
    "MAHA",
    "TTP",
    "DIC",
    "HUS",
    "plasma exchange",
    "emergency",
    "MEDI8403",
    "MEDI8401"
   ],
   "title": "Schistocytes / MAHA",
   "subtitle": "the emergency you cannot miss",
   "id": "haematology-10",
   "images": [
    {
     "src": "assets/img/haematology_film_schistocytes_01.jpg",
     "caption": "Schistocytes / MAHA - red cell fragments on peripheral blood film",
     "alt": "Red cell fragments (schistocytes/helmet cells) with thrombocytopenia indicating microangiopathic haemolytic anaemia",
     "credit": "Ed Uthman, MD, Wikimedia Commons, CC BY 2.0"
    }
   ]
  },
  {
   "topic": "Sickle cell disease: crisis management, hyposplenism, and the wrong drug",
   "subarea": "Anaemia & red cells",
   "trap": "- Acute painful vaso-occlusive crisis management is supportive and time-critical\n- Prompt **ANALGESIA** (often opioids — do NOT under-dose because of opioid-tolerance bias)\n- Plus **hydration**, oxygen if hypoxic, treat precipitant/infection, keep warm\n- Gotcha drug error: in a crisis the answer is **NOT routine transfusion**\n  - Top-up transfusion does not treat a simple painful crisis\n  - **EXCHANGE transfusion** is reserved for severe complications (acute chest syndrome, stroke, multi-organ failure)\n- All sickle cell patients are **functionally HYPOSPLENIC** -> lifelong penicillin prophylaxis + vaccination against encapsulated organisms (pneumococcus, meningococcus, Hib)\n  - **Fever is a medical emergency** (overwhelming sepsis)\n- **Hydroxyurea** (raises HbF) reduces crisis frequency, acute chest syndrome and transfusion need — it is disease-modifying prophylaxis, NOT acute crisis treatment\n- **Acute chest syndrome** (fever, chest pain, new infiltrate, hypoxia) is a leading cause of death and needs urgent exchange transfusion",
   "whatFirst": "- In crisis: **analgesia + fluids + oxygen** + look for and treat precipitant (sepsis)\n  - Escalate if chest/neuro features",
   "cutoffs": [
    "Hyposplenic -> **lifelong penicillin prophylaxis** + encapsulated-organism vaccines",
    "**Exchange transfusion** (not simple top-up) for acute chest syndrome / stroke",
    "**Hydroxyurea** = chronic crisis prophylaxis (raises HbF)"
   ],
   "discriminator": "- **Simple painful crisis** = supportive (no transfusion)\n- **Acute chest syndrome/stroke** = EXCHANGE transfusion emergency",
   "redFlags": "- **Fever in a hyposplenic sickle patient** = sepsis emergency (empirical antibiotics covering encapsulated organisms)\n- **New chest infiltrate + hypoxia** = acute chest syndrome",
   "mcqTrap": "- Choosing '**transfuse packed red cells**' as the management of an uncomplicated painful crisis is wrong\n  - **Analgesia/hydration** is correct; transfusion is for specific severe complications",
   "viva": "- Examiner probes: 'Sickle patient, fever 39 — why is this an emergency and what FIRST?'\n  - **Hyposplenism/encapsulated sepsis** -> urgent empirical antibiotics + cultures (ISBAR)",
   "mnemonic": "Crisis = pain relief + fluids + O2 + find the trigger; hyposplenic = penicillin + vaccines; chest syndrome = exchange.",
   "source": "eTG (current); RCH Melbourne Clinical Practice Guideline 'Sickle cell disease'; Australian Red Cross Lifeblood (transfusion in haemoglobinopathies).",
   "verified": true,
   "tags": [
    "sickle cell",
    "vaso-occlusive crisis",
    "hyposplenism",
    "acute chest syndrome",
    "hydroxyurea",
    "MEDI8403",
    "MEDI8401"
   ],
   "title": "Sickle cell disease",
   "subtitle": "crisis management, hyposplenism, and the wrong drug",
   "id": "haematology-11",
   "images": [
    {
     "src": "assets/img/haematology_film_sickle_cell_fresh.jpg",
     "caption": "Sickle cells - peripheral blood film with elongated crescent-shaped red cells",
     "alt": "Sickle cells (elongated crescent-shaped erythrocytes) and target cells on blood film in sickle cell anaemia",
     "credit": "SpicyMilkBoy, Wikimedia Commons, CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "Thalassaemia trait vs iron deficiency: discriminating two microcytic anaemias",
   "subarea": "Anaemia & red cells",
   "trap": "- Both give microcytosis, but the discriminator is the degree of microcytosis relative to the red cell count and Hb\n- **Thalassaemia trait**: very low MCV/MCH with a HIGH-NORMAL or RAISED red cell count, only mild anaemia, NORMAL RDW, and NORMAL/RAISED ferritin\n- **Iron deficiency**: low MCV with LOW red cell count, HIGH RDW, LOW ferritin\n- **Mentzer index (MCV / RBC count)** <13 suggests thalassaemia trait; >13 suggests iron deficiency\n- Confirm beta-thalassaemia trait with Hb electrophoresis/HPLC showing **HbA2 >3.5%**\n- Gotcha: do **NOT iron-load** a thalassaemia trait patient with empirical iron for 'microcytic anaemia' — they are not iron deficient and risk **iron overload**; check ferritin first\n- Also: coexisting iron deficiency can **falsely LOWER HbA2**, masking beta-thalassaemia trait until iron is replete",
   "whatFirst": "- Check **ferritin first**\n  - If normal/high with disproportionate microcytosis and high RBC count -> **Hb electrophoresis/HPLC**",
   "cutoffs": [
    "**Mentzer index (MCV/RBC) <13** = thalassaemia trait; **>13** = iron deficiency",
    "**HbA2 >3.5%** confirms beta-thalassaemia trait",
    "Thalassaemia: **normal RDW**, high-normal RBC count, normal ferritin"
   ],
   "discriminator": "- Disproportionately low MCV with mild anaemia, **raised RBC count** and **normal ferritin** = thalassaemia trait, not iron deficiency",
   "redFlags": "- **Both partners thalassaemia carriers** -> genetic counselling for offspring (homozygous beta-thalassaemia major)",
   "mcqTrap": "- Prescribing **oral iron** for a microcytic patient who actually has thalassaemia trait (normal ferritin, high RBC count) is wrong\n  - Risks **iron overload** and does not fix the MCV",
   "viva": "- Examiner probes: 'Microcytic, Hb 110, MCV 68, RBC 6.0, ferritin 120 — diagnosis and why NOT iron?'\n  - **Thalassaemia trait**; check electrophoresis, counsel re: partner testing",
   "mnemonic": "Thalassaemia: lots of small cells (high RBC, low MCV, normal RDW, normal ferritin). Mentzer <13 = thal.",
   "source": "RCPA / HSANZ-aligned electrophoresis criteria (HbA2 >3.5%); eTG (current). Iron deficiency lowers HbA2.",
   "verified": true,
   "tags": [
    "thalassaemia",
    "Mentzer index",
    "HbA2",
    "iron deficiency",
    "microcytic",
    "MEDI8403",
    "MEDI8401"
   ],
   "title": "Thalassaemia trait vs iron deficiency",
   "subtitle": "discriminating two microcytic anaemias",
   "id": "haematology-12"
  },
  {
   "topic": "Acute leukaemia — blast threshold, smear clues & what-first",
   "subarea": "White cells & haematological malignancy",
   "trap": "- Diagnosis = **≥20% blasts** in blood or marrow (WHO 2022)\n- Don't wait for the magic 20% if a defining cytogenetic abnormality is present\n  - **t(15;17) [APML], t(8;21), inv(16)** define AML at ANY blast %\n- **AML** = Auer rods (and myeloperoxidase+); **ALL** = TdT+, no Auer rods\n- Pancytopenia + circulating blasts + the patient is sick = treat as **emergency NOW**, don't 'repeat film in a week'",
   "whatFirst": "- Sick patient with suspected acute leukaemia: **FBC + film + coags/fibrinogen + LDH/urate/K/PO4/Ca** (tumour lysis screen) + group&hold\n- Then **URGENT haematology referral same-day**\n- Resuscitate (transfuse, treat hyperkalaemia/TLS) before transfer; **don't delay for marrow**",
   "discriminator": "- **AML vs ALL**: Auer rods + MPO = AML; TdT + lymphoblasts = ALL\n- **Acute vs chronic**: blasts ≥20% = acute; chronic phase CML has full myeloid spectrum (basophilia) not a blast excess\n- **Leukaemoid reaction** (infection) has a left shift + toxic granulation but NO blast excess and a HIGH LAP/NAP score",
   "redFlags": "- **Hyperleukocytosis (WCC >100)**: leukostasis → dyspnoea, confusion, priapism = **leukapheresis emergency**\n- **Bleeding + low fibrinogen** = APML/DIC\n- Confluent **gum infiltration / chloroma** = monocytic AML",
   "source": "WHO 2022 (5th ed) classification of haematolymphoid tumours — myeloid neoplasms & acute leukaemia; eTG (current) — Haematology.",
   "verified": true,
   "mcqTrap": "- Tempting wrong answer: '**wait for ≥20% blasts** to call it AML'\n  - WRONG when **t(15;17)/t(8;21)/inv(16)** is present — these define AML regardless of blast count and change urgency",
   "viva": "- Examiner probe: 'Pancytopenic febrile patient, blasts on film — your **first three actions**?'\n  - Answer: ISBAR escalation to haematology + tumour-lysis bloods + isolation/sepsis pathway\n  - Name the AML-vs-ALL discriminator (**Auer rods/MPO vs TdT**)",
   "mnemonic": "AML = 'Auer = Adult Myeloid'; APML defines itself by t(15;17).",
   "tags": [
    "acute leukaemia",
    "AML",
    "ALL",
    "blasts",
    "Auer rods",
    "WHO 2022"
   ],
   "cutoffs": [
    "Acute leukaemia: **≥20% blasts** (blood/marrow)",
    "AML defined at **ANY blast %** if t(15;17)/t(8;21)/inv(16)",
    "Hyperleukocytosis/leukostasis risk: WCC **>100 ×10⁹/L**"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Feature</th><th>AML</th><th>ALL</th></tr></thead><tbody><tr><td>Auer rods</td><td>Yes</td><td>No</td></tr><tr><td>Myeloperoxidase (MPO)</td><td>Positive</td><td>Negative</td></tr><tr><td>TdT</td><td>Usually neg</td><td>Positive</td></tr><tr><td>Peak age</td><td>Older adults</td><td>Children (peak ~2-5)</td></tr><tr><td>CNS/testicular sanctuary</td><td>Less common</td><td>Classic</td></tr></tbody></table>",
   "title": "Acute leukaemia",
   "subtitle": "blast threshold, smear clues & what-first",
   "id": "haematology-13",
   "images": [
    {
     "src": "assets/img/haematology_blood_film_acute_leukaemia_01.jpg",
     "caption": "Acute leukaemia - blast cells on peripheral blood film",
     "alt": "Numerous large blast cells with high nuclear-to-cytoplasmic ratio and prominent nucleoli representing acute leukaemia",
     "credit": "Unknown photographer, Wikimedia Commons, public domain · Public domain"
    }
   ]
  },
  {
   "topic": "APML + DIC — the ATRA emergency (do NOT wait for confirmation)",
   "subarea": "White cells & haematological malignancy",
   "trap": "- Suspected APML (t(15;17) / PML-RARA; bleeding + DIC + faggot cells/heavy Auer rods on film) = give **ATRA THE MOMENT it's suspected**, BEFORE genetic confirmation\n- The killer is **early haemorrhagic death from DIC**, not the leukaemia itself\n- ATRA differentiates the promyelocytes and **shuts down the coagulopathy**\n- Aggressively support coagulation:\n  - Keep **fibrinogen >1.5 g/L** (cryoprecipitate)\n  - **Platelets >30-50**\n  - Give **FFP** for INR",
   "whatFirst": "- Start **ATRA empirically on suspicion** + transfuse to coag targets + URGENT haematology\n- Do **NOT delay ATRA** for FISH/PCR result\n- Add **arsenic trioxide (ATO)** per ALLG APML4 protocol\n  - Idarubicin added for **high-risk (WCC >10)**",
   "discriminator": "- **Differentiation syndrome**: fever, dyspnoea, pulmonary infiltrates, oedema, hypotension, AKI within first ~weeks\n  - Higher risk if WCC rising/>5-10\n  - Treat = **dexamethasone** + hold ATRA if severe\n  - Don't mistake it for sepsis/fluid overload alone",
   "redFlags": "- **Active bleeding + fibrinogen <1.5 g/L** + schistocytes/raised D-dimer = DIC → transfuse to target\n- **Rising WCC on ATRA + dyspnoea/infiltrates** = differentiation syndrome → dexamethasone",
   "source": "ALLG APML4 protocol / eviQ (AU) — ATRA+ATO±idarubicin; eTG (current).",
   "verified": true,
   "mcqTrap": "- Tempting wrong answer: '**await cytogenetics/FISH before starting treatment**' is WRONG\n  - Empiric ATRA on suspicion saves lives; the delay kills via DIC\n  - Also wrong: 'start standard AML induction first'",
   "viva": "- Examiner probe: 'Why **ATRA before the genetics are back**?'\n  - Answer: prevents fatal DIC haemorrhage\n  - State coag targets (**fibrinogen >1.5, plt >30-50**) and recognise differentiation syndrome → dexamethasone",
   "mnemonic": "APML = 'A Promyelocyte Makes Lethal bleeding' → ATRA first, ask questions later.",
   "tags": [
    "APML",
    "APL",
    "ATRA",
    "arsenic trioxide",
    "DIC",
    "differentiation syndrome",
    "t(15;17)"
   ],
   "cutoffs": [
    "Fibrinogen target **>1.5 g/L** (cryoprecipitate)",
    "Platelet target **>30-50 ×10⁹/L** in active DIC",
    "High-risk APML: WCC **>10 ×10⁹/L** (add idarubicin)",
    "Differentiation syndrome risk rises with WCC **>5-10**"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Suspect APML (bleeding + DIC + faggot cells)</div><div class=\"gv-step\">START ATRA NOW + cryo/FFP/platelets to target</div><div class=\"gv-step\">Send PML-RARA FISH/PCR (do not wait for it)</div><div class=\"gv-step\">Add ATO ± idarubicin (ALLG APML4)</div><div class=\"gv-step\">Watch for differentiation syndrome → dexamethasone</div></div>",
   "title": "APML + DIC",
   "subtitle": "the ATRA emergency (do NOT wait for confirmation)",
   "id": "haematology-14"
  },
  {
   "topic": "CLL — the ≥5 lymphocyte rule, smudge cells & Richter",
   "subarea": "White cells & haematological malignancy",
   "trap": "- CLL diagnosis requires **≥5 ×10⁹/L clonal B-lymphocytes** in peripheral blood (sustained ≥3 months)\n  - Immunophenotype: **CD5+ CD19+ CD23+** (dim CD20/surface Ig)\n- If clonal B-cells are **<5 ×10⁹/L** with no cytopenias/lymphadenopathy = **monoclonal B-cell lymphocytosis (MBL)**, NOT CLL\n- Film: **smudge / smear (Gumprecht) cells**\n- **Don't treat early/asymptomatic CLL** — most are managed watch-and-wait; treat for symptoms, cytopenias, or bulky/progressive disease",
   "whatFirst": "- Confirm **clonality by flow cytometry** (not just a high lymphocyte count)\n- Before treatment, test **del(17p)/TP53** (drives drug choice — these resist chemoimmunotherapy, need BTK/BCL2 inhibitors)\n- **Vaccinate**; counsel infection risk (hypogammaglobulinaemia)",
   "discriminator": "- **CLL vs reactive lymphocytosis**: clonal flow phenotype CD5+CD23+ vs polyclonal reactive cells (e.g., EBV with atypical lymphocytes)\n- New **rapidly enlarging single node + B symptoms + high LDH** in known CLL = **Richter transformation** (to DLBCL) → biopsy, NOT just 'progression'",
   "redFlags": "- **Autoimmune haemolytic anaemia** (warm, DAT+) or ITP can complicate CLL — a falling Hb isn't always marrow failure\n- **Sudden localised nodal growth + LDH spike** = Richter → urgent biopsy",
   "source": "iwCLL 2018 diagnostic criteria; eviQ (AU); eTG (current).",
   "verified": true,
   "mcqTrap": "- Tempting wrong answer: '**start chemotherapy now**' for an asymptomatic Stage 0/A CLL found incidentally is WRONG\n  - **Watch-and-wait**; early treatment confers no survival benefit",
   "viva": "- Examiner probe: 'Incidental lymphocytosis of 30 — what confirms CLL and what must you check before any treatment?'\n  - Answer: **flow cytometry clonality (CD5/19/23)**; **del(17p)/TP53**; recognise **Richter** as the danger transformation",
   "mnemonic": "CLL flow = 'CD 5-19-23'; ≥5 = CLL, <5 = MBL. Smudge cells = fragile mature lymphocytes.",
   "tags": [
    "CLL",
    "monoclonal B-cell lymphocytosis",
    "smudge cells",
    "del(17p)",
    "TP53",
    "Richter",
    "iwCLL"
   ],
   "cutoffs": [
    "CLL: **≥5 ×10⁹/L** clonal B-lymphocytes in blood (sustained ≥3 months)",
    "**<5 ×10⁹/L** clonal B-cells + no disease = MBL",
    "Immunophenotype: **CD5+ CD19+ CD23+**",
    "Test **del(17p)/TP53** before treatment"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Clonal B-cells</th><th>Cytopenia/nodes?</th><th>Label</th></tr></thead><tbody><tr><td>≥5 ×10⁹/L</td><td>±</td><td>CLL</td></tr><tr><td>&lt;5 ×10⁹/L</td><td>No</td><td>MBL</td></tr><tr><td>Any (tissue, no blood)</td><td>Nodal/SLL</td><td>Small lymphocytic lymphoma</td></tr></tbody></table>",
   "title": "CLL",
   "subtitle": "the ≥5 lymphocyte rule, smudge cells & Richter",
   "id": "haematology-15",
   "images": [
    {
     "src": "assets/img/haematology_film_cll_smudge_fresh.jpg",
     "caption": "CLL - lymphocytosis with smudge cells on peripheral blood film",
     "alt": "Marked lymphocytosis of small mature lymphocytes with numerous smear (smudge) cells characteristic of chronic lymphocytic leukaemia",
     "credit": "Prof. Erhabor Osaro, Wikimedia Commons, CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "CML — Philadelphia chromosome, basophilia & blast crisis",
   "subarea": "White cells & haematological malignancy",
   "trap": "- CML = **t(9;22) Philadelphia chromosome** → BCR-ABL1 fusion → treat with a **tyrosine kinase inhibitor** (imatinib first-line; later-gen if resistance)\n- High-yield film clue: **basophilia + full spectrum of maturing myeloid cells** ('a left shift with all stages')\n  - Contrast with acute leukaemia (blast excess) and leukaemoid reaction\n- Classic distinguisher from reactive leukaemoid reaction:\n  - CML has a **LOW leukocyte alkaline phosphatase (LAP/NAP)** score\n  - Reactive leukocytosis has **HIGH LAP**",
   "whatFirst": "- Confirm with **BCR-ABL1 (PCR/FISH) + film**\n- Start **TKI** after diagnosis confirmed; monitor response by BCR-ABL1 transcript level\n- Watch the phase: WHO 2022 now uses **two phases**:\n  - **Chronic phase** (<20% blasts)\n  - **Blast phase** (≥20% blasts = behaves like acute leukaemia)\n  - The old 'accelerated phase' was dropped in favour of high-risk progression/resistance features",
   "discriminator": "- **CML vs leukaemoid reaction**: LOW LAP/NAP + basophilia + splenomegaly + Ph chromosome = CML; HIGH LAP + toxic granulation + identified infection = leukaemoid\n- **CML vs CLL**: CML is myeloid/neutrophilic with basophilia; CLL is mature lymphocytosis with smudge cells",
   "redFlags": "- **Rising blasts/basophils**, new anaemia/thrombocytopenia, increasing spleen size, marrow fibrosis = progression/blast phase → urgent re-stage\n- **Massive splenomegaly + hyperleukocytosis** = leukostasis risk",
   "source": "WHO 2022 (5th ed); eviQ (AU) CML pathways; eTG (current).",
   "verified": true,
   "mcqTrap": "- Tempting wrong answer: '**high LAP score supports CML**' is WRONG\n  - CML classically has a **LOW leukocyte alkaline phosphatase**; high LAP points to a reactive/leukaemoid picture",
   "viva": "- Examiner probe: 'Massive splenomegaly + WCC 200 + basophilia — diagnosis and the one confirmatory test?'\n  - Answer: CML; **BCR-ABL1/Philadelphia chromosome**; TKI; mention **blast crisis** as the feared transformation",
   "mnemonic": "CML = 'Cells Mature (whole spectrum) + Low LAP + baSophilia (S = Splenomegaly).'",
   "tags": [
    "CML",
    "Philadelphia",
    "BCR-ABL1",
    "imatinib",
    "TKI",
    "basophilia",
    "LAP score"
   ],
   "cutoffs": [
    "Blast phase: **≥20% blasts** (treat as acute leukaemia)",
    "Chronic phase: **<20% blasts**",
    "LAP/NAP score: **LOW** in CML (vs HIGH in leukaemoid reaction)"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Feature</th><th>CML</th><th>Leukaemoid reaction</th></tr></thead><tbody><tr><td>LAP/NAP score</td><td>LOW</td><td>HIGH</td></tr><tr><td>Basophilia</td><td>Yes</td><td>No</td></tr><tr><td>Philadelphia / BCR-ABL1</td><td>Present</td><td>Absent</td></tr><tr><td>Splenomegaly</td><td>Often massive</td><td>Absent/mild</td></tr><tr><td>Trigger</td><td>Clonal</td><td>Infection/inflammation</td></tr></tbody></table>",
   "title": "CML",
   "subtitle": "Philadelphia chromosome, basophilia & blast crisis",
   "id": "haematology-16",
   "images": [
    {
     "src": "assets/img/haematology_film_cml_fresh.jpg",
     "caption": "CML - leucocytosis with full granulocyte spectrum and basophilia on blood film",
     "alt": "Leucocytosis with myelocytes, metamyelocytes, basophilia and the full spectrum of maturing granulocytes in chronic myeloid leukaemia",
     "credit": "Paulo Henrique Orlandi Mourao, Wikimedia Commons, CC BY-SA 3.0"
    }
   ]
  },
  {
   "topic": "Febrile neutropenia — antibiotics within 1 hour (the door-to-needle rule)",
   "subarea": "White cells & haematological malignancy",
   "trap": "- Definition: fever **≥38.0°C** (or single ≥38.3°C) AND neutrophils **<0.5 ×10⁹/L** (or <1.0 and predicted to fall <0.5)\n- It is a **MEDICAL EMERGENCY**: broad-spectrum IV antibiotics within **1 HOUR** of presentation\n  - Take cultures but **NEVER delay** the first dose waiting for results\n- First-line per eTG = empiric anti-pseudomonal beta-lactam monotherapy: **piperacillin-tazobactam** (or cefepime)\n- Add **vancomycin only** for specific indications (line sepsis, MRSA risk, severe mucositis, haemodynamic instability) — NOT routinely\n- Classic trap: a neutropenic patient can be septic with a **soft/absent inflammatory response** — minimal signs do not reassure",
   "whatFirst": "- Resuscitate (sepsis pathway)\n- **Blood cultures** (peripheral + each lumen of any central line) + full septic screen\n- Then **IV pip-tazobactam within 1 hour**\n- Beta-lactam allergy: substitute per eTG (e.g., cefepime if non-severe; otherwise meropenem or aztreonam/ciprofloxacin combinations)\n- Do **NOT give G-CSF reflexively** for established uncomplicated FN",
   "discriminator": "- **FN vs ordinary sepsis**: the neutrophil count <0.5 changes urgency, empiric cover (must be **anti-pseudomonal**), and the muted physical signs\n- **MASCC score** risk-stratifies (≥21 = low risk, possible oral/ambulatory care in selected patients) — but the inpatient default is IV within 1 hour",
   "redFlags": "- **Hypotension/lactate/altered mental state** = septic shock → escalate, consider adding vancomycin + an aminoglycoside and ICU\n- **No defervescence after 48-72h** or persistent fever = re-image, consider invasive fungal infection (add antifungal), reassess lines",
   "source": "eTG (current) Therapeutic Guidelines — Febrile neutropenia; MASCC risk index.",
   "verified": true,
   "mcqTrap": "- Tempting wrong answer: '**wait for blood culture results / FBC before starting antibiotics**' or 'start with ceftriaxone' is WRONG\n  - Antibiotics within **1 hour** and the agent must be **ANTI-PSEUDOMONAL** (pip-tazobactam/cefepime), which ceftriaxone is not",
   "viva": "- Examiner probe (very common): 'Chemo patient, fever, neutrophils 0.3 — what is your **time target** and your **first-line drug**, and when do you add vancomycin?'\n  - Answer: **IV anti-pseudomonal beta-lactam within 1 hour** after cultures\n  - Vancomycin only for **line sepsis/MRSA/instability/severe mucositis**\n  - ISBAR to registrar",
   "mnemonic": "FN = '38 & 0.5 → antibiotics in 1 hour.' Pick the Pseudomonas-covering Penicillin (pip-taz).",
   "tags": [
    "febrile neutropenia",
    "neutropenic sepsis",
    "piperacillin-tazobactam",
    "within 1 hour",
    "eTG",
    "MASCC",
    "vancomycin"
   ],
   "cutoffs": [
    "Fever **≥38.0°C** sustained (or single ≥38.3°C)",
    "Neutrophils **<0.5 ×10⁹/L** (or <1.0 and falling)",
    "IV broad-spectrum antibiotics within **1 hour** of presentation",
    "MASCC **≥21** = low risk"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Fever ≥38 + neutrophils &lt;0.5</div><div class=\"gv-step\">Resuscitate + blood cultures (peripheral + line lumens)</div><div class=\"gv-step\">IV anti-pseudomonal beta-lactam (pip-tazobactam) within 1 HOUR</div><div class=\"gv-step\">Add vancomycin ONLY if line sepsis / MRSA / instability / severe mucositis</div><div class=\"gv-step\">No response 48-72h → re-image, consider antifungal</div></div>",
   "title": "Febrile neutropenia",
   "subtitle": "antibiotics within 1 hour (the door-to-needle rule)",
   "id": "haematology-17"
  },
  {
   "topic": "Hodgkin vs non-Hodgkin lymphoma — Reed-Sternberg & spread pattern",
   "subarea": "White cells & haematological malignancy",
   "trap": "- **Hodgkin lymphoma** = Reed-Sternberg cells (CD15+ CD30+, **CD45−**), bimodal age (young adults + >55), **CONTIGUOUS orderly nodal spread**, often early-stage and highly curable\n- **NHL** = no RS cells, CD45+, older, **NON-contiguous/extranodal spread**, frequently disseminated at diagnosis\n- Hallmark gotcha clues specific to Hodgkin:\n  - **Alcohol-induced nodal pain** — rare but specific\n  - **Pel-Ebstein fever** (cyclical) — rare but specific\n- **B symptoms** (fever >38°C, drenching night sweats, weight loss >10% in 6 months) upstage and worsen prognosis in **BOTH** HL and NHL",
   "whatFirst": "- **Excisional lymph node biopsy** (not core/FNA) is the diagnostic gold standard — architecture must be assessed\n- Stage with **PET-CT** (Lugano classification)\n- Do NOT diagnose lymphoma off an **FNA** — it misses architecture and RS cells",
   "discriminator": "- HL vs NHL: **RS cells CD15/CD30+** + contiguous spread + bimodal age = Hodgkin\n- Reactive/infective node vs lymphoma: biopsy if any of:\n  - **Persistent >2–4 weeks**\n  - **>2 cm**, hard/fixed, supraclavicular\n  - B symptoms or rising **LDH**\n- Aggressive (DLBCL/Burkitt) vs indolent (follicular):\n  - **Rapidly growing + high LDH + B symptoms** = aggressive\n  - Paradoxically **more curable** despite worse presentation",
   "redFlags": "- **Mediastinal mass + SVC obstruction** (facial swelling, distended neck veins) = oncologic emergency\n- **Rapidly enlarging mass + high LDH + high urate** = Burkitt/high-grade → start **TLS prophylaxis** before chemo\n- **Supraclavicular node** in an adult = biopsy",
   "source": "Lugano classification; WHO 2022 (5th ed) lymphoid neoplasms; eviQ (AU).",
   "verified": true,
   "mcqTrap": "- Tempting wrong answer: '**FNA** to diagnose the lymphoma' — WRONG\n  - Excisional biopsy required to assess nodal architecture and identify Reed-Sternberg cells\n  - FNA under-diagnoses lymphoma",
   "viva": "- Examiner probe: 'Young adult, painless cervical node, drenching night sweats — diagnostic step and how do you stage?'\n- Answer:\n  - **Excisional biopsy** (not FNA)\n  - **PET-CT** staging\n  - Define **B symptoms** (fever >38°C, drenching night sweats, weight loss >10% in 6 months)\n  - Name RS cell phenotype: **CD15/CD30+, CD45−**",
   "mnemonic": "Hodgkin = 'Reed-Sternberg = CD15 + CD30, Contiguous, Curable.' B symptoms = 'Fever, Night sweats, Weight loss.'",
   "tags": [
    "Hodgkin",
    "non-Hodgkin",
    "Reed-Sternberg",
    "CD15",
    "CD30",
    "B symptoms",
    "excisional biopsy",
    "Lugano"
   ],
   "cutoffs": [
    "B symptoms: fever **>38°C**, drenching night sweats, weight loss **>10%** over 6 months",
    "RS cells: **CD15+ CD30+ CD45−**",
    "Persistent node biopsy threshold: **>2 cm** and/or **>2–4 weeks**, hard/fixed/supraclavicular"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Feature</th><th>Hodgkin</th><th>Non-Hodgkin</th></tr></thead><tbody><tr><td>Hallmark cell</td><td>Reed-Sternberg (CD15+/CD30+)</td><td>None; CD45+</td></tr><tr><td>Spread</td><td>Contiguous, orderly</td><td>Non-contiguous, extranodal</td></tr><tr><td>Age</td><td>Bimodal (young + older)</td><td>Increases with age</td></tr><tr><td>Stage at dx</td><td>Often localised</td><td>Often disseminated</td></tr><tr><td>Specific clue</td><td>Alcohol-induced node pain</td><td>—</td></tr></tbody></table>",
   "title": "Hodgkin vs non-Hodgkin lymphoma",
   "subtitle": "Reed-Sternberg & spread pattern",
   "id": "haematology-18",
   "images": [
    {
     "src": "assets/img/haematology_histo_hodgkin_reed_sternberg_fresh.jpg",
     "caption": "Reed-Sternberg cells - histology of Hodgkin lymphoma with owl-eye cells",
     "alt": "Large binucleate Reed-Sternberg owl-eye cells in a reactive lymphoid background (classic Hodgkin lymphoma histology)",
     "credit": "Ed Uthman, MD, Wikimedia Commons, CC BY-SA 2.0"
    }
   ]
  },
  {
   "topic": "Myeloma (CRAB/SLiM) vs MGUS — the diagnostic thresholds",
   "subarea": "White cells & haematological malignancy",
   "trap": "- **Active multiple myeloma** = clonal plasma cells **≥10%** (or plasmacytoma) PLUS a myeloma-defining event: CRAB or SLiM biomarker\n- **CRAB**:\n  - **hyperCalcaemia** >2.75 mmol/L or >0.25 above ULN\n  - **Renal** creatinine >177 µmol/L or eGFR <40\n  - **Anaemia** Hb <100 or >20 g/L below normal\n  - **Bone** ≥1 lytic lesion on skeletal survey/CT/PET\n- **SLiM** (IMWG 2014):\n  - **≥60%** clonal plasma cells\n  - Involved:uninvolved serum free light chain ratio **≥100** (involved FLC ≥100 mg/L)\n  - **>1 focal lesion** on MRI\n- KEY trap: bone lesions are **lytic** — a **normal bone scan does NOT exclude myeloma**\n  - Use skeletal survey/whole-body low-dose CT/MRI/PET — **NOT isotope bone scan**",
   "whatFirst": "- Suspected myeloma: order **SPEP + serum free light chains + urine Bence-Jones (UPEP) + immunofixation**\n- Also: FBC/film (rouleaux), Ca, creatinine/eGFR\n- **Beta-2-microglobulin & albumin** for R-ISS staging\n- **Whole-body imaging** (NOT bone scan)\n- Treat **hypercalcaemia + AKI urgently**",
   "discriminator": "- **MGUS**: M-protein <30 g/L AND clonal plasma cells <10% AND **no CRAB/SLiM** (no end-organ damage)\n- **Smouldering**: M-protein ≥30 g/L and/or plasma cells 10–60%, still **no CRAB/SLiM**\n- **Myeloma**: plasma cells ≥10% + **a myeloma-defining event**\n- Myeloma vs **Waldenström**: Waldenström = IgM paraprotein + lymphoplasmacytic + hyperviscosity, classically **NO lytic bone lesions**",
   "redFlags": "- **Hypercalcaemia** (confusion, polyuria) + **AKI** = emergency → IV hydration, treat calcium\n- **Cord compression** from vertebral lesion (back pain + neurology) = urgent **MRI + dexamethasone + radiotherapy/surgery**\n- **Hyperviscosity** (more IgM/Waldenström) = **plasmapheresis**",
   "source": "IMWG 2014 updated diagnostic criteria (SLiM-CRAB); Myeloma Australia (MSAG) guidelines; eTG (current).",
   "verified": true,
   "mcqTrap": "- Tempting wrong answer: '**radioisotope bone scan** to find bone lesions' — WRONG\n  - Myeloma lesions are **lytic** and often photopenic/missed on bone scan\n  - Use **skeletal survey / whole-body low-dose CT / MRI / PET-CT**",
   "viva": "- Examiner probe: 'Older patient, back pain + anaemia + high calcium + AKI — what is your screening panel and how do you separate MGUS from myeloma?'\n- Answer:\n  - **SPEP/SFLC/UPEP** + Ca/Cr/Hb + whole-body imaging\n  - Apply **CRAB/SLiM thresholds**\n  - MGUS = **no end-organ damage**",
   "mnemonic": "CRAB = Calcium↑, Renal, Anaemia, Bones (lytic). SLiM = Sixty% plasma cells, Light-chain ratio ≥100, MRI >1 focal lesion.",
   "tags": [
    "myeloma",
    "MGUS",
    "CRAB",
    "SLiM",
    "free light chains",
    "IMWG 2014",
    "rouleaux"
   ],
   "cutoffs": [
    "Clonal plasma cells **≥10%** (or plasmacytoma) for myeloma",
    "Calcium **>2.75 mmol/L** (or >0.25 above ULN)",
    "Creatinine **>177 µmol/L** or eGFR **<40 mL/min**",
    "Hb **<100 g/L** (or >20 g/L below normal)",
    "**≥1** lytic bone lesion",
    "SLiM: **≥60%** plasma cells; sFLC ratio **≥100** (involved ≥100 mg/L); **>1** MRI focal lesion",
    "MGUS: M-protein **<30 g/L** AND plasma cells **<10%** AND no CRAB/SLiM"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th></th><th>M-protein</th><th>Clonal plasma cells</th><th>CRAB/SLiM</th></tr></thead><tbody><tr><td>MGUS</td><td>&lt;30 g/L</td><td>&lt;10%</td><td>None</td></tr><tr><td>Smouldering</td><td>≥30 g/L and/or</td><td>10-60%</td><td>None</td></tr><tr><td>Myeloma</td><td>Any</td><td>≥10% (or plasmacytoma)</td><td>≥1 present</td></tr></tbody></table>",
   "title": "Myeloma (CRAB/SLiM) vs MGUS",
   "subtitle": "the diagnostic thresholds",
   "id": "haematology-19",
   "images": [
    {
     "src": "assets/img/haematology_plasma_cell_film_01.jpg",
     "caption": "Myeloma - plasma cells on peripheral blood film / bone marrow",
     "alt": "Abnormal plasma cells with eccentric nuclei and clock-face chromatin (myeloma plasma cell infiltration)",
     "credit": "Vladareanu et al., Wikimedia Commons, CC BY 2.0"
    }
   ]
  },
  {
   "topic": "Tumour lysis syndrome — Cairo-Bishop, rasburicase & the G6PD trap",
   "subarea": "White cells & haematological malignancy",
   "trap": "- Highest risk = **bulky/high-turnover disease** (Burkitt/ALL, high WCC AML) at chemo initiation\n- Classic biochemistry of TLS: **high K, high phosphate, high urate, LOW calcium** (binds the phosphate)\n- Exam trap: treating the calcium — do **NOT give calcium for asymptomatic hypocalcaemia**\n  - Precipitates calcium-phosphate, worsens AKI\n  - Only treat **symptomatic** hypocalcaemia\n- **Rasburicase contraindicated in G6PD deficiency** — causes severe haemolysis + methaemoglobinaemia\n  - Screen first in at-risk ethnicities",
   "whatFirst": "- Prevent: **aggressive IV hydration** is the cornerstone\n- Low/moderate risk → **allopurinol** (start ~24–48h pre-chemo)\n- High risk / established TLS / high baseline urate → **rasburicase** (after G6PD check)\n- Treat **hyperkalaemia** as the immediate life threat:\n  - **ECG**\n  - **Calcium gluconate** for cardioprotection\n  - **Insulin-dextrose**",
   "discriminator": "- TLS hyperkalaemia + AKI vs other AKI: TLS has **urate + phosphate elevation** and characteristic timing\n  - Within **3 days before to 7 days after** cytotoxic therapy (Cairo-Bishop)\n- **Lab TLS** = ≥2 abnormal of urate/K/PO4/Ca\n- **Clinical TLS** adds creatinine rise/arrhythmia/seizure/death",
   "redFlags": "- **K >6 or rising + ECG changes** = emergency\n- Rising creatinine + oliguria + refractory hyperkalaemia/hyperphosphataemia = call renal for **dialysis**\n- Do NOT **'alkalinise urine'** routinely — no longer recommended (risks calcium-phosphate precipitation)",
   "source": "Cairo-Bishop classification; eTG (current) — TLS prophylaxis/management.",
   "verified": true,
   "mcqTrap": "- Tempting wrong answer: '**give IV calcium** to correct the low calcium' — WRONG if asymptomatic\n  - Precipitates **Ca-PO4** and worsens renal injury\n- Also wrong: **rasburicase** in a G6PD-deficient patient",
   "viva": "- Examiner probe: 'High-risk lymphoma starting chemo — how do you prevent TLS and what's the one drug you must screen for first?'\n- Answer:\n  - **Hydration** + risk-stratified **allopurinol** vs **rasburicase**\n  - Screen **G6PD** before rasburicase",
   "mnemonic": "TLS = high K, high PO4, high urate, LOW Ca ('3 ups, 1 down'). 'Rasburicase + G6PD = Red cells Gone'.",
   "tags": [
    "tumour lysis syndrome",
    "Cairo-Bishop",
    "rasburicase",
    "allopurinol",
    "G6PD",
    "hyperkalaemia"
   ],
   "cutoffs": [
    "Lab TLS: **≥2** of ↑urate, ↑K, ↑PO4, ↓Ca within **3 days pre** to **7 days post** chemo",
    "K **>6.0 mmol/L** = critical (or ≥25% rise)",
    "Allopurinol: start **~24–48h** before cytotoxic therapy",
    "**Rasburicase contraindicated** in G6PD deficiency"
   ],
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">↑ Potassium</span><span class=\"gv-pill\">↑ Phosphate</span><span class=\"gv-pill\">↑ Urate</span><span class=\"gv-pill\">↓ Calcium</span></div><table class=\"gv-table\"><thead><tr><th>Risk</th><th>Prophylaxis</th></tr></thead><tbody><tr><td>Low/moderate</td><td>Hydration + allopurinol</td></tr><tr><td>High / established / G6PD-normal</td><td>Hydration + rasburicase</td></tr><tr><td>G6PD deficient</td><td>Hydration + allopurinol (NOT rasburicase)</td></tr></tbody></table>",
   "title": "Tumour lysis syndrome",
   "subtitle": "Cairo-Bishop, rasburicase & the G6PD trap",
   "id": "haematology-20",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_hyperkalaemia.jpg",
     "caption": "Tumour lysis syndrome ECG - hyperkalaemia with peaked T waves",
     "alt": "ECG changes of hyperkalaemia (peaked T waves, widening QRS) as seen in tumour lysis syndrome",
     "credit": "Dr Michael-Joseph F. Agbayani & Dr Eddieson Gonzales, Wikimedia Commons, CC BY 4.0"
    }
   ]
  },
  {
   "topic": "DIC — recognising consumptive coagulopathy and treating the CAUSE",
   "subarea": "Haemostasis & anticoagulation",
   "trap": "- The tempting wrong MCQ: fixating on **correcting the numbers** (e.g. 'give FFP/platelets/cryo to normalise the coags') as primary management\n- The **single most important treatment in DIC** is treating the **underlying cause**:\n  - Sepsis → antibiotics + source control\n  - Obstetric → deliver/evacuate\n  - APML → **ATRA**\n  - Trauma → surgery\n- Blood products are **SUPPORTIVE** — given only if bleeding or pre-procedure\n  - **NOT** to chase lab values in a non-bleeding patient\n- Second trap: confusing DIC with **TTP**:\n  - Both have low platelets + fragmented film\n  - DIC: **prolonged PT/APTT, low fibrinogen, high D-dimer**\n  - TTP: **NORMAL coags**",
   "whatFirst": "- **Identify and treat the precipitant FIRST** (most commonly sepsis, malignancy esp. APML, obstetric catastrophe, trauma, severe liver disease)\n- THEN supportive blood products **only if bleeding or invasive procedure planned**",
   "discriminator": "- DIC = consumption + activation of fibrinolysis:\n  - **↓platelets, prolonged PT AND APTT, ↓fibrinogen, ↑↑D-dimer/FDPs**, schistocytes possible\n- Distinguish from **TTP**: normal PT/APTT/fibrinogen\n- Distinguish from **liver disease**:\n  - Factor VIII is **NORMAL/high** in liver failure\n  - Factor VIII is **LOW in DIC** (consumed) — classic discriminator",
   "cutoffs": [
    "ISTH overt-DIC score **≥5** = compatible with overt DIC (uses platelets, PT prolongation, fibrinogen, D-dimer/FDP); **repeat daily**",
    "Supportive triggers in BLEEDING DIC: platelets **<50 ×10⁹/L**; fibrinogen **<1.5–2.0 g/L** (give cryoprecipitate); prolonged PT/APTT **>1.5×** (give FFP)",
    "D-dimer markedly elevated; fibrinogen falls (acute-phase reactant, so '**normal**' fibrinogen can still be inappropriately low)",
    "Factor VIII **LOW** in DIC (consumed) vs **NORMAL/HIGH** in liver disease"
   ],
   "redFlags": "- **Bleeding from multiple/unrelated sites** (venepuncture, lines, mucosa) + sick patient = DIC until proven otherwise\n- **APML (AML-M3)** presenting with DIC = haematological emergency — start **ATRA on suspicion** before genetic confirmation\n- **Purpura fulminans / acral ischaemia** = severe DIC",
   "mnemonic": "DIC = 'Death Is Coming' if you don't fix the CAUSE. Everything bleeds AND clots; products are a bridge, not the cure.",
   "viva": "- ISBAR: name the **precipitant**, the coagulopathy pattern (**low plts, low fibrinogen, prolonged PT/APTT, high D-dimer**) and plan to treat cause + supportive products if bleeding\n- Examiner discriminator:\n  - 'DIC vs liver disease?' → factor VIII **low vs normal/high**\n  - 'DIC vs TTP?' → coags **deranged vs normal**",
   "mcqTrap": "- Choosing **'transfuse to normalise coags'** as primary therapy instead of 'treat the underlying cause'\n- Or mislabelling DIC as **TTP**",
   "source": "ISTH overt-DIC scoring system (Taylor et al. 2001); ASH 'How I treat DIC' (Levi & Scully, Blood 2018); the principle of treating the underlying cause is universal across Australian and international guidance.",
   "verified": false,
   "tags": [
    "DIC",
    "ISTH score",
    "fibrinogen",
    "D-dimer",
    "consumptive coagulopathy",
    "sepsis",
    "APML"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Test</th><th>DIC</th><th>TTP</th><th>Liver disease</th></tr></thead><tbody><tr><td>Platelets</td><td>Low</td><td>Low</td><td>Low (hypersplenism)</td></tr><tr><td>PT / APTT</td><td>Prolonged</td><td>Normal</td><td>Prolonged</td></tr><tr><td>Fibrinogen</td><td>Low</td><td>Normal</td><td>Low (late)</td></tr><tr><td>D-dimer</td><td>Very high</td><td>Normal/mild</td><td>Variable</td></tr><tr><td>Factor VIII</td><td class=\"gv-num\">LOW</td><td>Normal</td><td class=\"gv-num\">NORMAL/HIGH</td></tr></tbody></table>",
   "title": "DIC",
   "subtitle": "recognising consumptive coagulopathy and treating the CAUSE",
   "id": "haematology-21"
  },
  {
   "topic": "DOAC reversal — idarucizumab (dabigatran) vs 4F-PCC (apixaban/rivaroxaban); andexanet WITHDRAWN in Australia (May 2026)",
   "subarea": "Haemostasis & anticoagulation",
   "trap": "- Most tempting wrong MCQ: '**idarucizumab**' for ANY DOAC bleed\n  - Idarucizumab (Praxbind) **ONLY reverses dabigatran** (direct thrombin/IIa inhibitor)\n  - Does nothing for Xa inhibitors apixaban/rivaroxaban\n- **CURRENT AUSTRALIAN GOTCHA**: **andexanet alfa (Andexxa)** TGA provisional registration **LAPSED 20 May 2026** — removed from ARTG\n  - For apixaban/rivaroxaban bleed in Australia: answer is now **4F-PCC (Beriplex ~50 IU/kg)**, NOT andexanet\n  - Picking 'andexanet alfa' as the available specific antidote = stale/wrong answer in Australia\n- Further traps:\n  - Giving **vitamin K or FFP** for a DOAC bleed — useless (DOACs don't deplete vitamin-K-dependent factors)\n  - Forgetting **dabigatran is dialysable** (renally cleared); apixaban/rivaroxaban are NOT (highly protein-bound)",
   "whatFirst": "- Identify **WHICH DOAC** and when the **last dose** was\n- **Dabigatran** bleed → **idarucizumab 5 g IV** (2 × 2.5 g); if unavailable, consider haemodialysis\n- **Apixaban/rivaroxaban** bleed → **4F-PCC (Beriplex) ~50 IU/kg** (andexanet no longer available in Australia)\n- Always: stop the DOAC, local haemostasis, supportive care, check **renal function** and time since last dose",
   "discriminator": "- Drug-target mapping:\n  - **Dabigatran** = anti-IIa (thrombin) → specific antidote **idarucizumab**\n  - **Apixaban/rivaroxaban/edoxaban** = anti-Xa → **4F-PCC** in current Australian practice\n- **Andexanet** (decoy Xa): known internationally but **NOT TGA-registered** as of mid-2026\n  - Additional catch: binds tissue factor pathway inhibitor → **thrombosis risk** + anti-Xa assay interference",
   "cutoffs": [
    "Idarucizumab **5 g IV total** = two 2.5 g/50 mL vials (fixed dose, **dabigatran only**)",
    "Apixaban/rivaroxaban bleed (Australia, current): **4F-PCC (Beriplex) ~50 IU/kg** — andexanet not available",
    "Andexanet alfa (Andexxa) TGA provisional registration **LAPSED 20 May 2026**; removed from ARTG",
    "Dabigatran is **dialysable** (~60% removed); apixaban/rivaroxaban are **not** (high protein binding)",
    "**Vitamin K and FFP are ineffective** for DOAC reversal"
   ],
   "redFlags": "- **Intracranial DOAC bleed**: reverse immediately — do NOT wait for drug levels\n  - Dabigatran → idarucizumab\n  - Xa inhibitor → 4F-PCC\n- **Renal impairment** massively prolongs **dabigatran** effect (renally cleared) — consider dialysis",
   "mnemonic": "'IDA reverses DAbigatran' (IDArucizumab → DAbigatran). For Xa-inhibitor bleeds in Australia now: PCC (andexanet is gone). Everything else is supportive.",
   "viva": "- ISBAR to haematology/ICU: name the **exact DOAC**, last dose time, weight, renal function, and bleeding site\n- Examiner discriminators:\n  - 'Will vitamin K help?' → **no**\n  - 'Which DOAC can be dialysed?' → **dabigatran**\n  - 'What do you give for an apixaban bleed in Australia now?' → **4F-PCC** (andexanet withdrawn May 2026)",
   "mcqTrap": "- **Idarucizumab** for an apixaban/rivaroxaban bleed (wrong target)\n- **Andexanet alfa** as the available Australian antidote (withdrawn **20 May 2026**)\n- **Vitamin K / FFP** for any DOAC bleed",
   "source": "TGA news — Lapse of provisional registration for Andexxa (andexanet alfa), 20 May 2026; Australian Prescriber — Idarucizumab; Australian Prescriber — Andexanet alfa for reversal of direct factor Xa inhibitor anticoagulation (now historical); CEC NSW DOAC Guidelines v1.1.",
   "verified": true,
   "tags": [
    "DOAC",
    "dabigatran",
    "apixaban",
    "rivaroxaban",
    "idarucizumab",
    "andexanet",
    "4F-PCC",
    "reversal"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>DOAC</th><th>Target</th><th>Reversal (Australia, current)</th><th>Dialysable?</th></tr></thead><tbody><tr><td>Dabigatran</td><td>Thrombin (IIa)</td><td>Idarucizumab 5 g IV (± haemodialysis)</td><td>Yes</td></tr><tr><td>Apixaban / Rivaroxaban / Edoxaban</td><td>Factor Xa</td><td>4F-PCC (Beriplex) ~50 IU/kg — andexanet withdrawn May 2026</td><td>No</td></tr></tbody></table>",
   "title": "DOAC reversal",
   "subtitle": "idarucizumab (dabigatran) vs 4F-PCC (apixaban/rivaroxaban); andexanet WITHDRAWN in Australia (May 2026)",
   "id": "haematology-22"
  },
  {
   "topic": "Heparin & HIT — the 5–10 day platelet drop, the 4Ts score, and 'stop heparin, start a non-heparin anticoagulant'",
   "subarea": "Haemostasis & anticoagulation",
   "trap": "- Most dangerous wrong answer: **STOP heparin and do nothing else** (or give LMWH or warfarin)\n- In HIT: STOP all heparin AND **START a non-heparin anticoagulant** (danaparoid, fondaparinux, argatroban, or bivalirudin)\n  - HIT is a **PROTHROMBOTIC state**, not just a low-platelet state\n- Two further traps:\n  - **Transfusing platelets** in HIT — avoid unless life-threatening bleed (feeds thrombosis)\n  - **Starting warfarin while still thrombocytopenic** — risks **venous limb gangrene / skin necrosis**\n    - Warfarin only after platelets recover **>150** with overlap",
   "whatFirst": "- Calculate the **4Ts score**\n- If intermediate/high **(≥4)**:\n  - **STOP all heparin** sources (including flushes/LMWH)\n  - **Start non-heparin anticoagulant empirically** WHILE awaiting anti-PF4 immunoassay ± confirmatory functional assay\n  - Do **NOT wait** for the assay before acting",
   "discriminator": "- HIT timing is the giveaway: platelet fall **≥50%** and/or new thrombosis between **days 5–10** (up to day 14) after starting heparin\n  - Or rapid fall within hours if heparin exposure in the last **~100 days**\n- Nadir usually moderate (~50–80, rarely <20); **bleeding is uncommon** — it's a **CLOTTING disorder**\n- Distinguish from **DIC** (deranged coags) and from dilutional/sepsis thrombocytopenia",
   "cutoffs": [
    "4Ts: **≤3** = low (HIT unlikely, no testing needed); **4–5** = intermediate; **6–8** = high probability",
    "Timing: platelet fall **≥50%** and/or thrombosis between **days 5–14** of heparin",
    "Empirical treatment if **4Ts ≥4** while awaiting anti-PF4 immunoassay + functional (SRA/HIPA) assay",
    "Do NOT start warfarin until platelets recover to **>150 ×10⁹/L** (overlap with non-heparin agent to avoid limb gangrene)",
    "**Avoid platelet transfusion** unless life-threatening bleeding"
   ],
   "redFlags": "- **New thrombosis** (DVT/PE, limb/skin necrosis, arterial) on heparin with falling platelets = **HITT** (HIT with thrombosis) — emergency\n- **Necrotic skin lesions** at heparin injection sites\n- **Acute systemic reaction** (fever, rigors, dyspnoea) after IV heparin bolus",
   "mnemonic": "4 T's: Thrombocytopenia, Timing (5–10 days), Thrombosis, oTher cause absent. Treatment rule: 'Stop the heparin, START a non-heparin' — and 'No warfarin while the count is low.'",
   "viva": "- ISBAR: day of heparin, the **≥50% platelet drop**, any new thrombosis, the **4Ts score**, stopped ALL heparin and started **danaparoid/fondaparinux**\n- Examiner discriminators:\n  - 'Is stopping heparin enough?' → **NO** — must anticoagulate\n  - 'Why not warfarin now?' → **limb gangrene risk**\n  - 'Why not platelets?' → **prothrombotic**",
   "mcqTrap": "- '**Stop heparin and observe**' — missing the need for alternative anticoagulation\n- Switching to **LMWH** (still heparin-related)\n- Starting **warfarin** while platelets are low",
   "source": "THANZ HIT consensus statement (HIT Writing Group), MJA 2019;210(11); ASH 2018 HIT guidelines; 4Ts score (Lo et al.).",
   "verified": true,
   "tags": [
    "HIT",
    "heparin",
    "4Ts score",
    "danaparoid",
    "fondaparinux",
    "argatroban",
    "thrombosis",
    "PF4"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>4Ts score</th><th>Probability</th><th>Action</th></tr></thead><tbody><tr><td class=\"gv-num\">0–3</td><td>Low</td><td>HIT unlikely — continue, seek other cause</td></tr><tr><td class=\"gv-num\">4–5</td><td>Intermediate</td><td>Stop heparin + non-heparin AC + test</td></tr><tr><td class=\"gv-num\">6–8</td><td>High</td><td>Stop heparin + non-heparin AC + test</td></tr></tbody></table>",
   "title": "Heparin & HIT",
   "subtitle": "the 5–10 day platelet drop, the 4Ts score, and 'stop heparin, start a non-heparin anticoagulant'",
   "id": "haematology-23"
  },
  {
   "topic": "Massive haemorrhage / critical bleeding protocol — TXA timing, ratios and the physiological targets",
   "subarea": "Haemostasis & anticoagulation",
   "trap": "- Most tempting wrong answer: give **crystalloid/red cells alone** and chase the haemoglobin\n- In critical bleeding: give a **balanced ratio** (RBC:FFP:platelets **no lower than 2:1:1**) and treat the lethal triad\n- Highest-yield miss: **TRANEXAMIC ACID**\n  - In trauma and obstetric haemorrhage: give within **3 HOURS** of injury/bleed onset\n  - Given **later** it may **increase mortality** (CRASH-2)\n- Another trap: **ionised calcium falls** during massive transfusion (citrate chelation)\n  - Hypocalcaemia = treatable cause of ongoing coagulopathy and hypotension",
   "whatFirst": "- **Activate the Major Haemorrhage Protocol** (declare it)\n- **Control bleeding** (pressure/tourniquet/surgery/IR)\n- Give **TXA early** (within 3h in trauma/obstetric)\n- Transfuse in a **fixed ratio** (no fewer than 4 FFP and 1 adult platelet per 8 RBC ≈ 2:1:1)\n- Correct the **lethal triad** — keep warm, perfused, and **replace calcium**\n- Use **lab/viscoelastic results** to target fibrinogen",
   "discriminator": "- Critical-derangement triggers (treat if breached):\n  - Temperature **<35°C**\n  - pH **<7.2**\n  - Ionised calcium **<1.0 mmol/L**\n  - Fibrinogen **<1.5–2.0 g/L**\n  - Platelets **<50 ×10⁹/L** (<100 if CNS/eye bleed or ongoing)\n  - INR/APTT **>1.5×** normal\n- Give **cryoprecipitate/fibrinogen concentrate** to maintain fibrinogen",
   "cutoffs": [
    "TXA **1 g IV over 10 min then 1 g over 8h** — give **WITHIN 3 HOURS** of injury/bleed onset (trauma & obstetric)",
    "Transfusion ratio RBC:FFP:platelets **no lower than 2:1:1** (≈ 8 RBC : 4 FFP : 1 adult platelet)",
    "Fibrinogen target **≥2.0 g/L** in obstetric haemorrhage; replace with **cryoprecipitate**",
    "Platelets **≥50 ×10⁹/L** (≥100 if CNS/eye bleed or multiple/ongoing trauma)",
    "Temperature **≥35°C**; pH **≥7.2**; ionised calcium **≥1.0 mmol/L**; INR/APTT **<1.5×** normal",
    "Measure temperature, acid-base, ionised calcium, Hb, platelets, PT/INR, APTT and fibrinogen **early and frequently**"
   ],
   "redFlags": "- Ongoing bleeding despite products = need **surgical/IR source control**, not more blood\n- Persistent hypotension + bleeding = consider **hypocalcaemia** ('citrate toxicity') and hyperkalaemia\n- **Hyperfibrinolysis** on viscoelastic testing = repeat/continue **TXA**",
   "mnemonic": "Lethal triad = 'Cold, Acidotic, Coagulopathic' (hypothermia, acidosis, coagulopathy). 'TXA before the clock hits 3.' Targets: '35 / 7.2 / 1.0 / 2.0 / 50' (temp / pH / iCa / fibrinogen / platelets).",
   "viva": "- ISBAR: declare **major haemorrhage**, estimated loss, observations, TXA given, **MHP/ratio pack** running, latest fibrinogen/iCa/temp\n- Examiner discriminators:\n  - 'When is TXA harmful?' → **>3h after injury** in trauma\n  - 'Why is calcium low?' → **citrate** chelation\n  - 'What ratio?' → **≥2:1:1**",
   "mcqTrap": "- **Crystalloid/red-cells-only** resuscitation\n- Giving **TXA late** (>3h) and assuming benefit\n- Ignoring **ionised calcium**",
   "source": "Patient blood management guideline for adults with critical bleeding, Mitra et al., MJA 2024;220(4) (National Blood Authority); Australian Red Cross Lifeblood — Management of critical bleeding; CRASH-2 (Lancet 2010/2011) for the 3-hour TXA window.",
   "verified": true,
   "tags": [
    "massive transfusion",
    "critical bleeding",
    "tranexamic acid",
    "2:1:1",
    "fibrinogen",
    "cryoprecipitate",
    "lethal triad",
    "CRASH-2"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Parameter</th><th>Critical trigger (treat)</th><th>Target</th></tr></thead><tbody><tr><td>Temperature</td><td>&lt;35°C</td><td>≥35°C</td></tr><tr><td>pH</td><td>&lt;7.2</td><td>≥7.2</td></tr><tr><td>Ionised calcium</td><td>&lt;1.0 mmol/L</td><td>≥1.0 mmol/L</td></tr><tr><td>Fibrinogen</td><td>&lt;1.5–2.0 g/L</td><td>≥2.0 g/L (cryo)</td></tr><tr><td>Platelets</td><td>&lt;50 ×10⁹/L</td><td>≥50 (≥100 CNS)</td></tr><tr><td>INR / APTT</td><td>&gt;1.5×</td><td>&lt;1.5×</td></tr><tr><td>TXA</td><td>—</td><td>1 g + 1 g/8h, &lt;3h</td></tr></tbody></table>",
   "title": "Massive haemorrhage / critical bleeding protocol",
   "subtitle": "TXA timing, ratios and the physiological targets",
   "id": "haematology-24"
  },
  {
   "topic": "TTP vs ITP — the platelet transfusion trap and what to do FIRST",
   "subarea": "Haemostasis & anticoagulation",
   "trap": "- THE classic exam killer: **transfusing platelets in TTP**\n  - Platelet transfusion 'adds fuel to the fire' — feeds ongoing VWF-platelet microthrombosis\n  - Associated with **arterial thrombosis and increased mortality**\n  - **CONTRAINDICATED** in TTP except life-threatening haemorrhage or before a critical neurosurgical procedure\n- By contrast, in **ITP** first-line = corticosteroids ± IVIg (not platelet transfusion either — platelets consumed rapidly, reserved for life-threatening bleeding)\n- Tempting wrong MCQ: '**transfuse platelets**' for a patient with platelets of 8 and bruising who actually has TTP\n  - Look for the **MAHA + neuro/renal clues**",
   "whatFirst": "- Suspect TTP (MAHA + thrombocytopenia + no other cause) → **urgent plasma exchange (PEX)**\n  - Do NOT wait for **ADAMTS13 result**\n  - Start **high-dose steroids**\n  - Do **NOT transfuse platelets**\n- ITP (isolated thrombocytopenia, well patient, no schistocytes) → **corticosteroid** (prednis(ol)one taper or high-dose dexamethasone) ± **IVIg** if bleeding/very low count/urgent",
   "discriminator": "- **TTP**: microangiopathic haemolytic anaemia\n  - **SCHISTOCYTES** on film, raised LDH, raised bilirubin, low haptoglobin\n  - **ADAMTS13 activity <10%** with inhibitor\n- **ITP**: ISOLATED thrombocytopenia\n  - **NORMAL film** (no schistocytes), normal haemolysis markers, diagnosis of exclusion\n- The classic pentad (fever, MAHA, thrombocytopenia, renal, neuro) is classic but **INCOMPLETE** in most\n  - **MAHA + thrombocytopenia with no other explanation** = enough to start PEX",
   "cutoffs": [
    "TTP diagnostic: **ADAMTS13 activity <10%**",
    "ITP: bleeding uncommon until platelets **<30 ×10⁹/L**; treatment aims to achieve a safe count (**>20–30 ×10⁹/L**) and avoid severe bleeding",
    "ITP IVIg access (Australia): generally platelets **<30 ×10⁹/L** plus bleeding/bleeding risk, poor response to steroids, or special circumstances (pregnancy, periprocedural)",
    "TTP: start plasma exchange **within 4–8h** of presentation — before ADAMTS13 result returns",
    "Platelet transfusion in TTP: **CONTRAINDICATED** unless life-threatening haemorrhage"
   ],
   "redFlags": "- TTP with **neurological signs** (confusion, focal deficit, seizure) or cardiac involvement = emergency, escalate to **PEX immediately**\n- **New thrombocytopenia + schistocytes** = TTP until proven otherwise — never 'just transfuse platelets'\n- ITP with **intracranial bleed** = platelets + IVIg + high-dose steroids + tranexamic acid",
   "mnemonic": "'In TTP, Touching The Platelets is Terrible.' Pentad: FAT RN — Fever, microangiopathic Anaemia, Thrombocytopenia, Renal, Neuro.",
   "viva": "- ISBAR: 'thrombocytopenia + haemolysis + schistocytes, query TTP, requesting urgent **plasma exchange** and haematology review, **withholding platelet transfusion**'\n- Examiner discriminators:\n  - 'Would you transfuse platelets?' → **NO in TTP**\n  - 'What single test confirms TTP?' → **ADAMTS13 <10%**\n  - 'Schistocytes present or not?' → **present TTP**, absent ITP",
   "mcqTrap": "- **Transfusing platelets in TTP** (the trap)\n- Giving platelets as **first-line in ITP** instead of steroids ± IVIg",
   "source": "Consensus guidelines for management of adult ITP in Australia and New Zealand, Choi et al., MJA 2022;216(1); Consensus opinion on diagnosis and management of thrombotic microangiopathy in Australia and New Zealand (PEX within 4–8h); National Blood Authority ITP (adult) criteria for IVIg access; ADAMTS13 <10% diagnostic threshold (ISTH).",
   "verified": true,
   "tags": [
    "TTP",
    "ITP",
    "ADAMTS13",
    "plasma exchange",
    "platelet transfusion",
    "MAHA",
    "thrombocytopenia"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th></th><th>TTP</th><th>ITP</th></tr></thead><tbody><tr><td>Blood film</td><td>Schistocytes (MAHA)</td><td>Normal (isolated low plts)</td></tr><tr><td>Haemolysis (LDH↑, haptoglobin↓)</td><td>Yes</td><td>No</td></tr><tr><td>Key test</td><td>ADAMTS13 &lt;10%</td><td>Diagnosis of exclusion</td></tr><tr><td>FIRST treatment</td><td>Plasma exchange + steroids</td><td>Corticosteroid ± IVIg</td></tr><tr><td>Platelet transfusion</td><td class=\"gv-num\">CONTRAINDICATED</td><td>Only if life-threatening bleed</td></tr></tbody></table>",
   "title": "TTP vs ITP",
   "subtitle": "the platelet transfusion trap and what to do FIRST",
   "id": "haematology-25",
   "images": [
    {
     "src": "assets/img/haematology_film_schistocytes_hus_fresh.jpg",
     "caption": "TTP - schistocytes and thrombocytopenia on peripheral blood film",
     "alt": "Red cell fragments (schistocytes/helmet cells) with marked thrombocytopenia indicating thrombotic thrombocytopenic purpura",
     "credit": "Erhabor Osaro (Associate Professor), Wikimedia Commons, CC BY-SA 3.0"
    }
   ]
  },
  {
   "topic": "Von Willebrand disease vs Haemophilia A/B — the DDAVP and lab-pattern traps",
   "subarea": "Haemostasis & anticoagulation",
   "trap": "- Two big traps:\n- **(1) Giving DDAVP for haemophilia B or severe haemophilia A**\n  - DDAVP releases stored factor VIII and VWF — works for **mild haemophilia A**, type 1 VWD and carriers\n  - Does **NOTHING for factor IX** — useless in **haemophilia B**\n- **(2) Giving DDAVP in type 2B VWD** — can cause **paradoxical thrombocytopenia**\n- Lab trap: both haemophilia and VWD prolong **APTT with a NORMAL PT**\n  - Discriminator: platelet-type/mucocutaneous bleeding + abnormal VWF/ristocetin = **VWD** vs deep joint/muscle bleeds = **haemophilia**",
   "whatFirst": "- Mild bleeding in type 1 VWD or mild haemophilia A → **DDAVP** (with a documented test-dose response)\n- Haemophilia B, severe haemophilia A, or type 3 VWD → **factor replacement**:\n  - Recombinant FIX for B\n  - FVIII for A\n  - VWF-containing concentrate for VWD\n- Always add **tranexamic acid** for mucosal/dental bleeding",
   "discriminator": "- Bleeding phenotype:\n  - **VWD** = mucocutaneous (epistaxis, menorrhagia, bruising, post-dental bleeding), autosomal, both sexes\n  - **Haemophilia** = deep (haemarthrosis, muscle haematoma), X-linked recessive, males\n- Labs:\n  - VWD → **↓VWF antigen**, ↓ristocetin cofactor/GPIbM activity, often ↓FVIII, prolonged APTT, **normal PT**\n  - Haemophilia → ↓FVIII (A) or ↓FIX (B), prolonged APTT, **normal PT**, normal VWF\n- Note: **PT is NORMAL in all** — a prolonged PT points elsewhere",
   "cutoffs": [
    "Haemophilia severity by factor level: severe **<1%**, moderate **1–5%**, mild **>5–<40%**",
    "**DDAVP** works in mild haemophilia A and type 1 VWD if baseline FVIII/VWF adequate AND a **test infusion shows response**",
    "DDAVP: **ineffective in haemophilia B** (no effect on FIX); **avoid/caution in type 2B VWD** (causes thrombocytopenia) and type 3 (no stores to release)",
    "**Tranexamic acid** adjunct for all mucosal/dental bleeding (avoid in upper urinary tract bleeding — clot retention)"
   ],
   "redFlags": "- **Haemarthrosis or muscle bleed**: give factor FIRST before imaging\n  - **Iliopsoas, neck/airway or CNS bleeds** = emergencies\n- **Inhibitor development** (factor antibodies) = bleeding not responding to factor → needs **bypassing agents** (FEIBA/rFVIIa)\n- Manage all through a **Haemophilia Treatment Centre**",
   "mnemonic": "'DDAVP = Drains stored 8 & VWF' — so it helps mild Haem A & type 1 VWD, never Haem B (factor 9). 'B = Bypass DDAVP.'",
   "viva": "- ISBAR: bleeding type (mucosal vs deep), sex/inheritance, **APTT prolonged with normal PT**, whether DDAVP-responsive or needs factor\n- Examiner discriminators:\n  - 'Why won't DDAVP work here?' → **haemophilia B / type 3 / type 2B** caution\n  - 'Which test separates VWD from haemophilia A?' → **VWF antigen + ristocetin cofactor/VWF activity**",
   "mcqTrap": "- Choosing **DDAVP for haemophilia B** or severe haemophilia A\n- Expecting a **prolonged PT** (it is normal in both VWD and haemophilia)",
   "source": "ASH/ISTH/NHF/WFH VWD guidelines 2021; Haemophilia Foundation Australia / Australian Haemophilia Centre Directors' Organisation (AHCDO) treatment principles; DDAVP mechanism per WFH desmopressin guidance.",
   "verified": false,
   "tags": [
    "von Willebrand",
    "haemophilia A",
    "haemophilia B",
    "DDAVP",
    "desmopressin",
    "factor VIII",
    "factor IX",
    "APTT"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th></th><th>VWD</th><th>Haemophilia A</th><th>Haemophilia B</th></tr></thead><tbody><tr><td>Defect</td><td>VWF (± FVIII)</td><td>Factor VIII</td><td>Factor IX</td></tr><tr><td>Inheritance</td><td>Autosomal</td><td>X-linked</td><td>X-linked</td></tr><tr><td>Bleeding</td><td>Mucocutaneous</td><td>Joints/muscles</td><td>Joints/muscles</td></tr><tr><td>PT / APTT</td><td>Normal / ↑</td><td>Normal / ↑</td><td>Normal / ↑</td></tr><tr><td>DDAVP works?</td><td>Type 1 yes</td><td>Mild yes</td><td class=\"gv-num\">NO</td></tr></tbody></table>",
   "title": "Von Willebrand disease vs Haemophilia A/B",
   "subtitle": "the DDAVP and lab-pattern traps",
   "id": "haematology-26"
  },
  {
   "topic": "VTE anticoagulation duration — 3 months minimum, who gets extended, and the provoked/unprovoked/cancer split",
   "subarea": "Haemostasis & anticoagulation",
   "trap": "- Tempting wrong answers cluster around **duration**:\n  - Stopping at '**6 weeks**' for a proximal DVT (limited 6–12 week course is for **distal/calf DVT only**)\n  - Stopping at **3 months** for an UNPROVOKED proximal DVT/PE — these warrant assessment for **extended/indefinite** anticoagulation (recurrence risk is high)\n- Choosing **warfarin** for cancer-associated VTE — a **DOAC (or LMWH)** is now preferred\n- Forgetting: **GI/urothelial cancer** = relative reason to favour **LMWH** over a DOAC (DOAC GI bleed risk)",
   "whatFirst": "- Classify the VTE:\n  - **Distal vs proximal/PE**\n  - Provoked by a **MAJOR transient factor** (surgery/trauma/immobility) vs minor transient vs **unprovoked** vs cancer/persistent risk\n- This classification **sets the duration**\n- Minimum treatment for any proximal DVT/PE = **3 months**; then decide **stop vs extend** based on provoking factor and bleeding risk",
   "discriminator": "- **Provoked by a MAJOR transient factor that has resolved** → 3 months, stop\n- **Unprovoked or persistent risk factor** → at least 3 months, then assess for **extended/indefinite**\n  - Esp. second unprovoked event, male sex, or APS\n- **Cancer-associated VTE** = anticoagulate while cancer active\n- **Distal (calf) DVT** = **6–12 weeks**",
   "cutoffs": [
    "Proximal DVT/PE with MAJOR transient provoker (resolved): **3 months** then stop",
    "Unprovoked or minor-transient/persistent risk proximal DVT/PE: **≥3 months**, then assess for **EXTENDED/indefinite**",
    "Distal (calf) DVT: **6–12 weeks**",
    "Recurrent unprovoked VTE, antiphospholipid syndrome, or active cancer: **EXTENDED/indefinite** anticoagulation",
    "Most acute VTE: **factor Xa inhibitor (DOAC)** preferred; extended phase may use full or low/prophylactic dose",
    "**APS** (esp. triple-positive): use **WARFARIN** (target INR 2–3), NOT a DOAC (DOACs inferior — TRAPS trial)"
   ],
   "redFlags": "- Recurrent VTE while compliant on DOAC = check adherence, consider switch to **LMWH** and screen for **malignancy/APS**\n- **Massive/high-risk PE** (haemodynamic instability) = consider **thrombolysis**, not just anticoagulation\n- Cancer + **GI/urothelial tumour** = favour **LMWH** over DOAC (bleeding risk)",
   "mnemonic": "'3 months is the floor, not the ceiling.' Provoked-and-gone = stop at 3; Unprovoked = assess to extend; Cancer = keep going; Calf = 6–12 weeks; APS = Warfarin not DOAC.",
   "viva": "- ISBAR/GP-style: state **provoking factor**, clot site (proximal vs distal/PE), **bleeding risk**, and duration plan with explicit **stop-vs-extend reasoning** and a review date\n- Examiner discriminators:\n  - 'Provoked or unprovoked — and does it change the duration?' → yes\n  - 'Which patient gets indefinite therapy?' → **recurrent/unprovoked/cancer/APS**",
   "mcqTrap": "- Stopping an **unprovoked proximal DVT/PE at 3 months** without assessing for extended therapy\n- Using **6 weeks** for a proximal clot\n- A **DOAC for antiphospholipid syndrome** (APS requires warfarin)",
   "source": "New THANZ guidelines for diagnosis and management of VTE, Tran et al., MJA 2019;210(5); Australian Prescriber — Diagnosis and management of antiphospholipid syndrome (warfarin INR 2–3 first-line; DOAC inferior, TRAPS); eTG (current) Therapeutic Guidelines, VTE.",
   "verified": true,
   "tags": [
    "VTE",
    "DVT",
    "PE",
    "anticoagulation duration",
    "provoked",
    "unprovoked",
    "cancer-associated",
    "DOAC",
    "antiphospholipid"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>VTE scenario</th><th>Duration</th></tr></thead><tbody><tr><td>Distal (calf) DVT</td><td>6–12 weeks</td></tr><tr><td>Proximal DVT / PE, major transient provoker (resolved)</td><td>3 months, then stop</td></tr><tr><td>Unprovoked or minor/persistent risk proximal DVT/PE</td><td>≥3 months → assess for extended/indefinite</td></tr><tr><td>Recurrent unprovoked / APS / active cancer</td><td>Extended / indefinite</td></tr></tbody></table>",
   "title": "VTE anticoagulation duration",
   "subtitle": "3 months minimum, who gets extended, and the provoked/unprovoked/cancer split",
   "id": "haematology-27"
  },
  {
   "topic": "Warfarin reversal — INR thresholds, vitamin K dose & route, and when 4-factor PCC (Beriplex) is mandatory",
   "subarea": "Haemostasis & anticoagulation",
   "trap": "- Most tempting wrong MCQ answer: '**give FFP**' for major warfarin-associated bleeding — NOT the answer in Australia\n  - **Beriplex (4F-PCC)** contains all four vitamin-K-dependent factors; FFP is no longer needed to top up factor VII\n- Correct emergency reversal = **4-factor PCC (Beriplex)** (replaced Prothrombinex-VF in **June 2024**) **PLUS IV vitamin K**\n- Equally tempting wrong answers:\n  - '**Vitamin K alone**' for a life-threatening bleed — too slow (full effect **12–24h**)\n  - Giving **PCC WITHOUT vitamin K** — PCC factors wash out in hours, INR rebounds; **MUST co-give vit K 5–10 mg IV** to sustain reversal\n- Route trap: **high-dose ORAL vitamin K** is for non-bleeding high INR; **active bleeding = IV**",
   "whatFirst": "- **Bleeding present?**\n  - Cease warfarin + **IV vitamin K** + give **Beriplex (4F-PCC) NOW**\n  - Recheck INR at **~20 min** (NOT 24h)\n- **No bleeding?** — INR number drives it:\n  - **<4.5**: hold/lower dose\n  - **4.5–10** with low bleed risk: **cease warfarin only**\n  - **>10**: give vitamin K 3–5 mg PO/IV ± Beriplex only if high bleed risk",
   "discriminator": "- Critical-bleeding severity ladder:\n  - **(1) Life-threatening/critical-organ bleed** at INR ≥1.5 → **Beriplex 50 IU/kg + vit K 5–10 mg IV**\n  - **(2) Clinically significant non-life-threatening bleed** at INR ≥2.0 → **Beriplex 25–50 IU/kg + vit K 5–10 mg IV**\n  - **(3) No bleeding, INR 4.5–10, low risk** → **cease warfarin only**\n  - **(4) No bleeding, INR >10, high risk** → vit K 3–5 mg PO/IV ± **Beriplex 15–30 IU/kg**\n- PCC dose capped at **100 kg body weight**, max **50 IU/kg (~5000 IU)**",
   "cutoffs": [
    "Life-threatening / critical-organ bleed, INR ≥1.5: **Beriplex 50 IU/kg + vitamin K 5–10 mg IV**",
    "Significant non-life-threatening bleed, INR ≥2.0: **Beriplex 25–50 IU/kg + vitamin K 5–10 mg IV**",
    "No bleed, INR **4.5–10**, low bleed risk: **cease warfarin only** (vitamin K not routinely indicated); recheck INR within 24h",
    "No bleed, INR **>10**, high bleed risk: vitamin K **3–5 mg PO/IV**; consider Beriplex **15–30 IU/kg**",
    "PCC dose capped at **100 kg body weight**, max **50 IU/kg (~5000 IU)**; recheck INR at **20 min** after Beriplex",
    "Vitamin K full effect **~12–24h** — too slow alone for emergencies; **FFP NOT required** (Beriplex has all 4 factors)"
   ],
   "redFlags": "- **Intracranial haemorrhage** on warfarin = give **Beriplex + IV vitamin K immediately**; do not wait for INR; activate neurosurgery\n- High bleeding risk = recent major bleed, recent major surgery, thrombocytopenia, liver disease, or concurrent antiplatelet",
   "mnemonic": "'PCC + K, the Aussie way' — emergency = Prothrombin Complex Concentrate (Beriplex) AND vitamin K together (never PCC alone, never FFP).",
   "viva": "- ISBAR to haematology: state **INR**, bleeding site/severity, **weight** (for IU/kg dosing) and that you've given **IV vit K + Beriplex**\n- Examiner discriminators:\n  - 'Why not FFP?' → slow, volume overload, underdoses, and **Beriplex already has all 4 factors**\n  - 'Why add vitamin K to PCC?' → **PCC factors short-lived**, prevents INR rebound",
   "mcqTrap": "- **FFP** as the emergency reversal agent (wrong)\n- **PCC without vitamin K** (INR will rebound)\n- **Vitamin K alone** for an active life-threatening bleed",
   "source": "Australian Red Cross Lifeblood — Warfarin reversal (current, post-June 2024 Beriplex transition); THANZ updated 4F-PCC warfarin reversal recommendations, Robinson et al., MJA 2025;222(1); builds on 2013 consensus update (Tran et al., MJA 2013).",
   "verified": true,
   "tags": [
    "warfarin",
    "INR",
    "PCC",
    "Beriplex",
    "vitamin K",
    "reversal",
    "anticoagulation"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Scenario</th><th>INR</th><th>Vitamin K</th><th>4F-PCC (Beriplex)</th></tr></thead><tbody><tr><td>Life-threatening / critical-organ bleed</td><td>≥1.5</td><td>5–10 mg IV</td><td>50 IU/kg</td></tr><tr><td>Significant (non-life-threatening) bleed</td><td>≥2.0</td><td>5–10 mg IV</td><td>25–50 IU/kg</td></tr><tr><td>No bleed, low bleed risk</td><td>4.5–10</td><td>none</td><td>none (cease warfarin)</td></tr><tr><td>No bleed, high bleed risk</td><td>&gt;10</td><td>3–5 mg PO/IV</td><td>consider 15–30 IU/kg</td></tr></tbody></table>",
   "title": "Warfarin reversal",
   "subtitle": "INR thresholds, vitamin K dose & route, and when 4-factor PCC (Beriplex) is mandatory",
   "id": "haematology-28"
  },
  {
   "topic": "ABO-incompatible acute haemolytic transfusion reaction (AHTR) — the lethal one",
   "subarea": "Transfusion medicine",
   "trap": "- **ABO incompatibility** (AHTR) is IgM-mediated **intravascular haemolysis**\n  - Commonest preventable cause is **patient-ID checking failure**, not a lab antibody miss\n- Onset is within **minutes**, often after only a **few mL**\n- Gotcha features that distinguish ABO from a febrile reaction:\n  - **Fever PLUS pain** (loin/back/infusion-site/chest)\n  - **Sense of impending doom**\n  - **Hypotension**\n  - **Dark/red urine** (haemoglobinuria)\n  - **Oozing from puncture sites** (DIC)\n  - **AKI**",
   "source": "Australian Red Cross Lifeblood adverse events 'Acute haemolytic reactions' (current); eTG Transfusion reactions.",
   "cutoffs": [
    "Onset: **minutes** to <24 h; severe after as little as a **few mL**",
    "Most severe classic: **group A donor blood** into a **group O recipient**",
    "Triad to spot: **fever+pain+hypotension** → haemoglobinuria → DIC/AKI"
   ],
   "whatFirst": "- **STOP transfusion immediately**\n- Keep IV line open with **normal saline**\n- **Recheck patient ID** vs unit/compatibility label at the bedside\n- **ABC** and escalate\n- Maintain **renal perfusion** with aggressive IV fluids, aim good urine output\n- Treat **DIC/shock**",
   "discriminator": "- vs **Febrile non-haemolytic (FNHTR)**: both have fever, but AHTR adds:\n  - **Pain**, hypotension, haemoglobinuria, DIC, AKI\n  - Starts within **minutes**\n  - FNHTR = fever ± rigors ONLY, patient otherwise stable, **BP not low**\n- vs **Septic (bacterial-contaminated) unit**:\n  - High fever + rigors + hypotension/shock but **no immune haemolysis**\n  - Culture **patient AND unit**",
   "redFlags": "- **Hypotension**\n- **Haemoglobinuria** (dark/red urine)\n- **Bleeding from cannula site / DIC**\n- **Oliguria** (AKI)\n- All are life-threatening — activate emergency response\n- Notify **transfusion lab/haematologist**; return unit + post-transfusion sample",
   "mcqTrap": "- Most tempting wrong answer: **'give paracetamol and continue/slow the transfusion'**\n  - That is the FNHTR move and will **KILL** an ABO patient\n- Pain + hypotension + dark urine = **STOP and resuscitate**",
   "mnemonic": "ABO = 'Blood pressure DOWN, pain UP, urine DARK' — the unit is in the wrong vein because of a bedside ID error.",
   "viva": "- Examiner probes the **safety system**: 'What single step prevents this?'\n  - Answer: **positive patient ID / bedside two-person check**\n- Then: **ISBAR escalation** + samples to send:\n  - Repeat group/DAT/antibody screen on **pre- and post-transfusion samples**\n  - **Return the unit**",
   "visualHtml": "<table class='gv-table'><tr><th>Feature</th><th>ABO AHTR</th><th>FNHTR</th></tr><tr><td>Cause</td><td>ID error (IgM, intravascular)</td><td>Cytokines / leucocyte Abs</td></tr><tr><td>Onset</td><td>Minutes, few mL</td><td>During/soon after</td></tr><tr><td>BP</td><td>Hypotension</td><td>Normal</td></tr><tr><td>Pain</td><td>Loin/chest/site + doom</td><td>None</td></tr><tr><td>Urine</td><td>Dark (Hburia)</td><td>Normal</td></tr><tr><td>Action</td><td>STOP, resuscitate</td><td>Antipyretic ± restart slowly</td></tr></table>",
   "tags": [
    "ABO",
    "AHTR",
    "intravascular-haemolysis",
    "patient-ID-error",
    "DIC",
    "AKI"
   ],
   "verified": true,
   "title": "ABO-incompatible acute haemolytic transfusion reaction (AHTR)",
   "subtitle": "the lethal one",
   "id": "haematology-29",
   "images": [
    {
     "src": "assets/img/haematology_film_schistocytes_01.jpg",
     "caption": "Schistocytes / red-cell fragments — intravascular haemolysis",
     "alt": "Fragmented red cells (schistocytes/helmet cells) indicating intravascular haemolysis as seen in severe AHTR",
     "credit": "Ed Uthman, MD, Wikimedia Commons, CC BY 2.0"
    }
   ]
  },
  {
   "topic": "Allergic / anaphylactic transfusion reactions incl. IgA deficiency (completes the acute-reaction set)",
   "subarea": "Transfusion medicine",
   "trap": "- **Mild allergic** = urticaria/itch only (commonest, plasma-protein hypersensitivity)\n  - The ONLY reaction where you may **pause, give antihistamine, and cautiously restart**\n- **Anaphylaxis** = hypotension + bronchospasm/angioedema/stridor\n  - **STOP permanently** + IM adrenaline\n- Gotcha: severe/recurrent anaphylaxis should prompt testing for **IgA deficiency** with anti-IgA antibodies\n  - Needs **washed cells / IgA-deficient products**",
   "source": "Australian Red Cross Lifeblood adverse events (allergic/anaphylactic) (current); eTG; ANZCOR anaphylaxis guideline (adrenaline dose).",
   "cutoffs": [
    "Mild allergic (urticaria only): **pause**, antihistamine, **may restart slowly**",
    "Anaphylaxis: **STOP**, IM adrenaline **0.5 mg (0.5 mL of 1:1000)** adult, ABC, do NOT restart"
   ],
   "whatFirst": "- Mild urticaria only → **pause** + antihistamine + observe → **cautious restart**\n- Any airway/BP involvement → treat as **anaphylaxis**:\n  - **STOP** (never restart that unit)\n  - **IM adrenaline**\n  - ABC, escalate",
   "discriminator": "- **Allergic vs FNHTR**: allergic = urticaria/itch (**no fever**); FNHTR = fever (**no rash**)\n- **Allergic anaphylaxis vs ABO/septic**:\n  - ABO: fever + pain + **haemoglobinuria**\n  - Sepsis: shock + **rigors**\n  - Allergic: isolated **urticaria/bronchospasm** (no fever, no haemoglobinuria)",
   "redFlags": "- **Hypotension, stridor, wheeze, angioedema** = anaphylaxis → **adrenaline**\n- Recurrent severe reactions → investigate **IgA deficiency / anti-IgA**",
   "mcqTrap": "- Most tempting wrong answer: giving **antihistamine and continuing** in a patient who is actually anaphylactic (hypotensive/bronchospastic)\n  - Anaphylaxis needs **adrenaline** and **permanent cessation**, not an antihistamine",
   "mnemonic": "'Rash-only = pause & restart; airway/BP = adrenaline & stop'. Recurrent severe → think IgA.",
   "viva": "- Examiner: 'Hives 10 min in vs hives + wheeze + BP 80 — different actions?'\n  - Mild → **antihistamine + cautious restart**\n  - Anaphylaxis → **adrenaline + stop**\n  - Mention **IgA-deficiency workup** for recurrent severe reactions",
   "tags": [
    "allergic",
    "anaphylaxis",
    "urticaria",
    "IgA-deficiency",
    "adrenaline",
    "washed-cells"
   ],
   "verified": false,
   "title": "Allergic / anaphylactic transfusion reactions incl. IgA…",
   "id": "haematology-30"
  },
  {
   "topic": "CMV-negative components — narrowed indications in the leucodepletion era",
   "subarea": "Transfusion medicine",
   "trap": "- Australia uses **universal leucodepletion** → leucodepleted components are considered **CMV-safe**\n- Gotcha: do NOT order CMV-negative blood for **every immunocompromised patient** — leucodepletion covers most\n- **CMV-negative** is a separate modification from **irradiation** (different purpose)\n- The list of patients needing specifically **CMV-seronegative** components is now **SMALL**",
   "source": "Australian Red Cross Lifeblood (universal leucodepletion; CMV-negative indications) (current).",
   "cutoffs": [
    "Leucodepletion is **universal in Australia** → reduces CMV transmission risk (CMV-safe)",
    "CMV-seronegative components reserved for: **intrauterine transfusion**; and (per local protocol) CMV-seronegative pregnant women — **narrow list**"
   ],
   "whatFirst": "- Default **leucodepleted** is CMV-safe for most\n- Only specify **CMV-negative** for the defined high-risk groups per protocol\n- Confirm whether **irradiation** is ALSO required (e.g. intrauterine = **both**)",
   "discriminator": "- **CMV-negative**: donor CMV serology negative\n- **Leucodepleted CMV-safe**: filtered to remove CMV-harbouring leucocytes\n- **Irradiated**: prevents TA-GvHD (different purpose entirely)\n- **Intrauterine transfusion** is the overlap case: needs **CMV-negative AND irradiated AND fresh**",
   "redFlags": "- **Intrauterine transfusion** — order CMV-negative + irradiated\n- **CMV-seronegative pregnant recipients** per local policy",
   "mcqTrap": "- Most tempting wrong answer: 'give **CMV-negative blood**' as the routine modification for HSCT/immunosuppressed patients\n  - In Australia, universal leucodepletion already provides **CMV-safe blood**\n  - The modification those patients actually need is **irradiation**",
   "mnemonic": "'Leucodepleted = CMV-safe; CMV-negative only for the womb' (intrauterine ± seronegative pregnancy).",
   "viva": "- Examiner: 'Why don't we routinely give CMV-negative blood anymore?'\n  - Answer: **universal leucodepletion** makes components CMV-safe\n  - Reserve true **CMV-negative** for intrauterine/defined obstetric indications\n  - Don't confuse with **irradiation**",
   "tags": [
    "CMV-negative",
    "leucodepletion",
    "CMV-safe",
    "intrauterine",
    "modifications"
   ],
   "verified": true,
   "title": "CMV-negative components",
   "subtitle": "narrowed indications in the leucodepletion era",
   "id": "haematology-31"
  },
  {
   "topic": "Febrile non-haemolytic transfusion reaction (FNHTR) — the 'fever-only' reaction that must NOT be mistaken for ABO/sepsis",
   "subarea": "Transfusion medicine",
   "trap": "- **FNHTR** is a diagnosis of **exclusion** — fever (≥1°C rise) ± rigors with:\n  - **No haemolysis**, no hypotension, no respiratory distress\n- Caused by **accumulated cytokines** (especially in platelets) or recipient leucocyte antibodies\n  - Reduced by **universal leucodepletion**\n- Gotcha: can only call it FNHTR after **excluding the dangerous mimics**:\n  - ABO haemolysis\n  - Bacterial contamination/sepsis\n- The exam wants you to **STOP and assess first**, not pre-medicate and plough on",
   "source": "Australian Red Cross Lifeblood adverse-events 'Febrile non-haemolytic transfusion reactions (FNHTR)' (current); eTG Transfusion reactions.",
   "cutoffs": [
    "Temp rise **≥1°C** from baseline (to ≥38°C) ± rigors, otherwise well",
    "**No hypotension**, no haemoglobinuria, no dyspnoea = supports FNHTR"
   ],
   "whatFirst": "- **STOP/pause** the transfusion\n- Check obs and **patient ID**\n- Exclude **AHTR** and **septic reaction**\n- If isolated mild fever and patient otherwise well:\n  - Give **antipyretic (paracetamol)**\n  - Transfusion may be **cautiously recommenced** per local policy",
   "discriminator": "- vs **ABO AHTR**: AHTR has pain + hypotension + dark urine + **DIC**\n- vs **Bacterial contamination/sepsis**: high fever + rigors + **hypotension/shock**, often with a visibly abnormal unit\n  - Culture **patient AND unit**\n- vs **Allergic**: urticaria/itch ± wheeze/angioedema, **not fever-driven**",
   "redFlags": "- Fever accompanied by **hypotension**, rigors with collapse, pain, or breathlessness\n  - This is **NOT** simple FNHTR — treat as **AHTR/sepsis** and escalate",
   "mcqTrap": "- Most tempting wrong answer: labelling any peri-transfusion fever as FNHTR and giving **paracetamol without excluding ABO/sepsis**\n  - Examiner punishes failure to **STOP-and-exclude the killers first**",
   "mnemonic": "FNHTR = 'Fever, Nothing Horrible, Temperature Rises' — fever alone, patient otherwise stable.",
   "viva": "- Examiner: 'Fever 38.5°C 30 min into a platelet transfusion — is this FNHTR?'\n  - Only after excluding **AHTR** (pain/hypotension/Hburia) and **sepsis** (shock)\n  - State leucodepletion **reduces incidence**\n  - Pre-medication is **NOT routinely recommended** to prevent it",
   "tags": [
    "FNHTR",
    "febrile-reaction",
    "diagnosis-of-exclusion",
    "leucodepletion",
    "cytokines"
   ],
   "verified": true,
   "title": "Febrile non-haemolytic transfusion reaction (FNHTR)",
   "subtitle": "the 'fever-only' reaction that must NOT be mistaken for ABO/sepsis",
   "id": "haematology-32"
  },
  {
   "topic": "Irradiated cellular components — TA-GvHD prevention (who MUST get irradiated blood)",
   "subarea": "Transfusion medicine",
   "trap": "- **Irradiation** (min 25 Gy, no part >50 Gy) inactivates donor T-lymphocytes to prevent **TA-GvHD**\n  - TA-GvHD is rare but almost universally **FATAL**\n- Biggest gotcha: irradiation does **NOT prevent CMV** transmission and does **NOT reduce alloimmunisation**\n  - Those are **leucodepletion**\n- Another gotcha: it is the **specific drug** (purine analogues: fludarabine, cladribine, clofarabine, pentostatin; bendamustine) and specific recipients that mandate it\n  - Not simply 'any cancer patient'",
   "source": "Australian Red Cross Lifeblood 'Irradiated components' (current), based on ANZSBT Guidelines for prevention of TA-GvHD.",
   "cutoffs": [
    "Irradiation dose: minimum **25 Gy** to all parts, no part **>50 Gy**",
    "Allogeneic HSCT: from **conditioning**, indefinitely after therapy completion + confirmed remission (longer if GvHD/ongoing immunosuppression)",
    "Autologous HSCT: from **conditioning**, reviewed (**≈3–6 months**)",
    "CAR-T: irradiated components for **7 days before and during the lymphocyte harvest** (the CAR-T product itself must **NOT** be irradiated)"
   ],
   "whatFirst": "- **Identify the at-risk recipient** and FLAG the requirement on the request\n- Irradiation is a **special requirement that must be ordered**\n  - An un-irradiated unit to these patients is a **serious incident**",
   "discriminator": "- **Irradiation**: T-cell inactivation → prevents **TA-GvHD**\n- **Leucodepletion**: already universal in Australia → reduces **CMV, FNHTR, HLA alloimmunisation**\n- **CMV-negative**: narrow indication given universal leucodepletion\n- Do not conflate the **three modifications**",
   "redFlags": "- **Mandatory irradiation** for:\n  - Intrauterine transfusion\n  - Neonatal exchange\n  - Congenital severe **T-cell immunodeficiency**\n  - HLA-matched/compatible platelets\n  - Directed donation from a **blood relative**\n  - **Hodgkin lymphoma**\n  - **Purine-analogue / bendamustine** therapy (indefinite)",
   "mcqTrap": "- Most tempting wrong answer: 'order irradiated blood to **prevent CMV**' — wrong, that is leucodepleted/CMV-neg\n- Or: 'irradiate to prevent **alloimmunisation**' — wrong, that is leucodepletion\n- The unique reason for irradiation is **TA-GvHD**",
   "mnemonic": "Irradiate to kill the T-cells (TA-GvHD): 'HITCH-D' — Hodgkin, Intrauterine/neonatal, Transplant (HSCT/CAR-T harvest), Congenital T-cell immunodeficiency, HLA-matched platelets, Drugs (purine analogues/bendamustine) + Directed relative donations.",
   "viva": "- Examiner: 'Patient on fludarabine needs red cells — what special requirement and WHY?'\n  - Answer: **irradiated** to prevent fatal **TA-GvHD**\n  - Clarify it is **NOT for CMV**\n  - Note it **must be specified on the request**",
   "visualHtml": "<div class='gv-pills'><span class='gv-pill'>Dose: min <span class='gv-num'>25</span> Gy (max <span class='gv-num'>50</span>)</span><span class='gv-pill'>Prevents TA-GvHD (kills donor T-cells)</span><span class='gv-pill'>NOT for CMV</span><span class='gv-pill'>NOT for alloimmunisation</span></div>",
   "tags": [
    "irradiated",
    "TA-GvHD",
    "fludarabine",
    "HSCT",
    "intrauterine",
    "HLA-matched",
    "25Gy"
   ],
   "verified": true,
   "title": "Irradiated cellular components",
   "subtitle": "TA-GvHD prevention (who MUST get irradiated blood)",
   "id": "haematology-33"
  },
  {
   "topic": "Product & threshold selection — platelets, FFP, cryoprecipitate (when, not just what)",
   "subarea": "Transfusion medicine",
   "trap": "- Each product has its **own trigger** — match the defect to the product\n- Gotchas:\n  - **Cryoprecipitate** (not FFP) is the **fibrinogen replacement**\n  - **FFP** corrects multifactor coagulopathy but is **NOT** for isolated warfarin reversal\n    - Use **Prothrombinex-VF + vitamin K** for warfarin\n  - FFP is **NOT** for single-factor deficiencies\n  - Platelet thresholds **rise** with bleeding/procedure\n  - **RBC ≠ volume expander**",
   "source": "Australian Red Cross Lifeblood clinical indications (platelets/FFP/cryoprecipitate) + NBA Patient Blood Management Guidelines (current); eTG.",
   "cutoffs": [
    "Platelets — prophylactic (stable, no bleeding): **<10 ×10⁹/L**",
    "Platelets — pre-procedure/minor bleed: **<20 ×10⁹/L** (e.g. line, LP often **≥40–50**)",
    "Platelets — active bleeding/major surgery: maintain **>50 ×10⁹/L**",
    "Platelets — CNS/eye surgery or CNS bleed: maintain **>100 ×10⁹/L**",
    "Fibrinogen replacement (cryoprecipitate): fibrinogen **<1.0 g/L** (obstetric/major haemorrhage: **<2.0 g/L**)",
    "FFP: **~15 mL/kg** for multifactor coagulopathy with bleeding"
   ],
   "whatFirst": "- **Define the deficit first**: platelet count vs PT/APTT/fibrinogen vs single factor\n- Pick the **matching product** and the threshold appropriate to bleeding/procedure\n- Do not give **'shotgun' FFP+platelets reflexively**",
   "discriminator": "- **FFP vs cryoprecipitate**: low fibrinogen → **cryo**; global factor deficiency + bleeding → **FFP**\n- **Warfarin**: Prothrombinex-VF + IV vitamin K (FFP only if Prothrombinex unavailable/incomplete)\n- **Platelet count alone** never dictates transfusion in immune destruction (ITP) unless **life-threatening bleeding**",
   "redFlags": "- **Massive haemorrhage** → activate **MTP** (fixed RBC:FFP:platelet ratio + cryo guided by fibrinogen)\n  - Do not treat with single products in isolation",
   "mcqTrap": "- Most tempting wrong answer: 'give **FFP**' for an isolated low fibrinogen — correct = **cryoprecipitate**\n- Or: 'give FFP' for **warfarin reversal** — correct = **Prothrombinex-VF + vitamin K**\n- Also: transfusing platelets in **stable ITP** without major bleeding",
   "mnemonic": "Platelets: '10 stable / 20 procedure / 50 bleeding-surgery / 100 brain-or-eye'. 'Fibrinogen low → Cryo, not FFP'.",
   "viva": "- Examiner: 'Plt 18, no bleeding, needs a central line — transfuse?'\n  - Aim **~50 for the procedure**\n- 'Bleeding, fibrinogen 0.8 — which product?'\n  - **Cryoprecipitate**\n- Tie to **consent** + correct dose",
   "visualHtml": "<table class='gv-table'><tr><th>Setting</th><th>Platelet target</th></tr><tr><td>Stable, no bleeding (prophylaxis)</td><td><span class='gv-num'>&lt;10</span></td></tr><tr><td>Minor procedure / minor bleed</td><td><span class='gv-num'>&lt;20</span> (line/LP often 40-50)</td></tr><tr><td>Active bleed / major surgery</td><td>maintain <span class='gv-num'>&gt;50</span></td></tr><tr><td>CNS or ophthalmic surgery/bleed</td><td>maintain <span class='gv-num'>&gt;100</span></td></tr></table>",
   "tags": [
    "platelets",
    "FFP",
    "cryoprecipitate",
    "fibrinogen",
    "product-selection",
    "MTP"
   ],
   "verified": false,
   "title": "Product & threshold selection",
   "subtitle": "platelets, FFP, cryoprecipitate (when, not just what)",
   "id": "haematology-34"
  },
  {
   "topic": "Restrictive RBC transfusion threshold — the 70 g/L rule and its EXCEPTIONS",
   "subarea": "Transfusion medicine",
   "trap": "- Default restrictive trigger for haemodynamically stable hospitalised adults is **Hb <70 g/L**\n  - Post-transfusion target: **70–90 g/L**\n  - Transfuse **ONE unit at a time** then reassess — NOT a fixed 2-unit order\n- Gotcha exceptions where **70 is WRONG**:\n  - **Acute Coronary Syndrome / symptomatic cardiac disease** → higher threshold **~80 g/L**\n    - Restrictive strategy does NOT apply in ACS\n  - **Chronic transfusion-dependent anaemia** (thalassaemia, sickle cell, MDS) → individualised, **NOT 70**\n- Do not transfuse to a number in an **asymptomatic stable patient** with Hb 71–90",
   "source": "Australian Red Cross Lifeblood 'Use of red cells' (current); NBA Patient Blood Management Guidelines; aligns with 2023 AABB international RBC transfusion guideline.",
   "cutoffs": [
    "Stable adult inpatient (incl. stable haem/onc): consider transfuse if Hb **<70 g/L**; post-transfusion target **70–90 g/L**",
    "ACS / symptomatic cardiovascular disease: higher threshold **~80 g/L**",
    "Each unit RBC raises Hb **~10 g/L** in a 70–80 kg non-bleeding adult",
    "Transfuse **single-unit then reassess** (clinical + repeat Hb) — not reflex 2 units",
    "Active major haemorrhage: **Hb threshold does NOT apply** — resuscitate, don't wait for a number"
   ],
   "whatFirst": "- In a stable patient: assess **SYMPTOMS + Hb trend** before reaching for blood\n  - **Single-unit policy**, then reassess\n- In active bleeding: treat the bleeding/**MTP** — do not chase a threshold",
   "discriminator": "- **Restrictive (70) vs liberal**: restrictive is non-inferior/superior in:\n  - Stable inpatients, ICU, GI bleed, orthopaedic surgery\n- **Liberal (~80)** reserved for **ACS/active cardiac ischaemia**\n- A **bleeding patient** is NOT a 'threshold' patient",
   "redFlags": "- Active **ischaemic chest pain** + low Hb\n- Ongoing **uncontrolled haemorrhage**\n- **Haemodynamic instability**\n  - Escalate — do not apply the stable-patient **70 rule**",
   "mcqTrap": "- Most tempting wrong answer: '**transfuse 2 units now**' for a stable patient with Hb 68\n  - Australian PBM = **single-unit then reassess**\n- Also tempting-wrong: applying **70** to an ACS patient — should be **~80**",
   "mnemonic": "'70 for the stable, 80 for the heart, none for the bleeder' — and 'one and done, then reassess'.",
   "viva": "- Examiner: 'Hb 68, stable, no symptoms — what do you do?'\n  - **Single unit**, reassess, document indication and consent\n- 'Now they have crushing chest pain — does the number change?'\n  - Yes → **~80**",
   "visualHtml": "<div class='gv-pills'><span class='gv-pill'>Stable inpatient: <span class='gv-num'>&lt;70</span> g/L (target 70-90)</span><span class='gv-pill'>ACS / cardiac: <span class='gv-num'>&lt;80</span> g/L</span><span class='gv-pill'>1 unit then reassess</span><span class='gv-pill'>Active bleed: no threshold — resuscitate</span></div>",
   "tags": [
    "restrictive-transfusion",
    "Hb-70",
    "PBM",
    "single-unit",
    "ACS-80"
   ],
   "verified": true,
   "title": "Restrictive RBC transfusion threshold",
   "subtitle": "the 70 g/L rule and its EXCEPTIONS",
   "id": "haematology-35"
  },
  {
   "topic": "TACO vs TRALI — the two acute dyspnoea/hypoxia reactions (high-yield discriminator)",
   "subarea": "Transfusion medicine",
   "trap": "- Both **TACO** and **TRALI** cause acute hypoxaemia + bilateral pulmonary infiltrates during/after transfusion, but management **diverges**:\n  - **TACO** = volume overload → **diuresis** + sit up\n  - **TRALI** = immune capillary leak (non-cardiogenic) → supportive/ventilation; **diuretics DO NOT HELP**\n- Discriminating gotchas:\n  - TACO is **hypertensive** (hypertension is a constant feature) + raised BNP/JVP + responds to diuretics\n  - TRALI is more often **hypotensive** + fever + **normal BNP** + typically within **6 h**\n- Do NOT reflexively **diurese a TRALI patient**",
   "source": "Australian Red Cross Lifeblood adverse-events 'TACO' (during/up to 12 h) & 'TRALI' (during/within 6 h) pages (current); ISBT 2019 revised definitions.",
   "cutoffs": [
    "TACO timing: during or up to **12 h** post-transfusion",
    "TRALI timing: during or within **6 h**",
    "TACO BNP: **elevated**, >1.5x pre-transfusion baseline (and above age-specific range)",
    "TACO BP: **hypertension** is a constant feature"
   ],
   "whatFirst": "- Both: **STOP the transfusion**, give oxygen, ABC, escalate\n- Then split:\n  - **TACO** → sit upright + **IV furosemide** + cardiac-failure therapy\n  - **TRALI** → supportive O2/ventilation, fluid/pressor support if hypotensive; **do NOT give diuretics**",
   "discriminator": "- **BP**: TACO **high** vs TRALI **low**\n- **Fever**: absent in TACO vs often **present** in TRALI\n- **BNP**: raised in TACO vs **normal** in TRALI\n- **Diuretic response**: good in TACO vs **none** in TRALI\n- **Fluid balance**: positive in TACO; TACO risk if elderly, paediatric, severe anaemia, renal/cardiac disease, rapid/large volume\n- **TRALI mechanism**: donor **anti-HLA/HNA antibodies** → neutrophil activation in lung",
   "redFlags": "- Respiratory failure needing **ventilation**\n- **Refractory hypoxaemia**\n- **Hypotension**\n  - ICU + notify transfusion service\n  - TRALI triggers **donor investigation/lookback**",
   "mcqTrap": "- Most tempting wrong answer: giving **furosemide** for the breathless hypoxic patient who is actually TRALI (hypotensive, febrile, normal BNP)\n  - Diuretics are **useless/harmful** in TRALI\n- Reverse trap: **withholding diuretics** in a hypertensive, raised-JVP **TACO** patient",
   "mnemonic": "TACO = 'too much' (Circulatory Overload, hypertensive, BNP up, diurese). TRALI = 'leaky Lungs Immune' (hypotensive, febrile, BNP normal, no diuretics).",
   "viva": "- Examiner: 'SOB + sats 88% 2 h into a red cell unit — how do you tell TACO from TRALI and why does it matter?'\n  - Want: **BP/fever/BNP/JVP/fluid-balance** discriminators\n  - Opposite **diuretic answers**\n  - ISBAR escalation + **reporting to Lifeblood**",
   "visualHtml": "<table class='gv-table'><tr><th>Feature</th><th>TACO</th><th>TRALI</th></tr><tr><td>Mechanism</td><td>Cardiogenic / volume overload</td><td>Immune capillary leak (anti-HLA/HNA)</td></tr><tr><td>Timing</td><td>&le;12 h</td><td>&le;6 h</td></tr><tr><td>BP</td><td>Hypertension</td><td>Often hypotension</td></tr><tr><td>Fever</td><td>Absent</td><td>Often present</td></tr><tr><td>BNP</td><td>Elevated</td><td>Normal</td></tr><tr><td>JVP/oedema</td><td>Raised, +ve balance</td><td>Normal</td></tr><tr><td>Diuretics</td><td>Help</td><td>No benefit</td></tr></table>",
   "tags": [
    "TACO",
    "TRALI",
    "non-cardiogenic-oedema",
    "BNP",
    "diuretics",
    "discriminator"
   ],
   "verified": true,
   "title": "TACO vs TRALI",
   "subtitle": "the two acute dyspnoea/hypoxia reactions (high-yield discriminator)",
   "id": "haematology-36",
   "images": [
    {
     "src": "assets/img/cardiology_cxr_pulmonary_oedema_01.jpg",
     "caption": "TACO — bilateral pulmonary oedema on CXR (cardiogenic/volume overload pattern)",
     "alt": "Bilateral perihilar bat-wing infiltrates with cardiomegaly, upper-lobe diversion and Kerley B lines — the CXR appearance of transfusion-associated circulatory overload",
     "credit": "Hellerhoff / Wikimedia Commons · CC BY-SA 4.0"
    },
    {
     "src": "assets/img/respiratory_cxr_pcp_bilateral_01.jpg",
     "caption": "TRALI — bilateral non-cardiogenic pulmonary infiltrates on CXR",
     "alt": "Bilateral perihilar/diffuse alveolar infiltrates without cardiomegaly or pleural effusions — the CXR pattern of TRALI (immune capillary leak, ARDS-like)",
     "credit": "Samir (User:Samir धर्म), Wikimedia Commons, CC BY-SA 3.0"
    }
   ]
  }
 ]
}
);
