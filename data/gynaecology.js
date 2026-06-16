window.GOTCHA = window.GOTCHA || { modules: [] };
window.GOTCHA.modules.push(
{
 "id": "gynaecology",
 "name": "Gynaecology",
 "category": "Gynaecology",
 "blurb": "Written-exam (MCQ) only. Contraception, screening, menstrual & PCOS, acute pelvic pain, early-pregnancy emergencies, menopause, gynae-oncology and NSW law — the Australian cut-offs and the “pregnancy test first” reflexes.",
 "cards": [
  {
   "topic": "COC absolute contraindications (UKMEC category 4 = do NOT use)",
   "subarea": "Contraception & EC",
   "trap": "- The exam loves a vignette with ONE oestrogen contraindication — the answer is always a **progestogen-only method or LARC**\n- MEC 4 conditions (oestrogen banned):\n  - **Migraine with aura** at ANY age — the classic single best distractor\n    - Even a healthy 19-year-old with aura cannot have the COC\n  - **Breastfeeding AND <6 weeks postpartum**\n  - **Smoker aged ≥35** smoking **≥15 cigarettes/day**\n  - Current/past **VTE**, known thrombogenic mutation, current stroke/IHD\n  - BP **≥160 systolic OR ≥100 diastolic**\n  - Current **breast cancer**\n  - **<3 weeks postpartum** (non-breastfeeding) with VTE risk factors\n  - Major surgery with **prolonged immobility**\n  - **Complicated valvular/cardiac disease**\n  - **Severe cirrhosis/liver tumour**\n  - **SLE with positive antiphospholipid antibodies**\n  - **Diabetes with vascular complications**",
   "whatFirst": "- Screen for **migraine with aura FIRST** in any COC request\n  - Commonest MEC 4 trap\n  - Independent of age or other health factors",
   "discriminator": "- **Migraine WITHOUT aura** = MEC 2 (initiation) — COC usually OK if no other risk\n- **Migraine WITH aura** = MEC 4 = ABSOLUTE contraindication\n- Aura = **visual/sensory/speech neurological symptoms** preceding headache\n  - NOT just severe pain or nausea",
   "redFlags": "- **New aura**, focal neurology, or migraine developing ON the COC = **stop oestrogen immediately** (stroke risk)",
   "mcqTrap": "- 'Migraine without aura is a contraindication to the COC' — **FALSE**\n  - That is only MEC 2\n  - It is the **aura** that makes it absolute (MEC 4)",
   "cutoffs": [
    "**Migraine WITH aura** = MEC 4 at ANY age",
    "**Breastfeeding + <6 wks postpartum** = MEC 4",
    "**Smoker ≥35 AND ≥15 cigs/day** = MEC 4",
    "**BP ≥160/100** = MEC 4",
    "**Past/current VTE** = MEC 4",
    "**Current breast cancer** = MEC 4"
   ],
   "mnemonic": "'A SMASH BV' bans oestrogen: Aura, Smoking(>=35 & >=15/day), Migraine, Arterial/VTE, Surgery(immobile), Hypertension(>=160/100), Breast cancer, postpartum (<6wk Breastfeeding).",
   "source": "UKMEC 2016 (amended 2019), FSRH - adopted by RANZCOG/FPA for Australian practice; RANZCOG C-Gyn 3 Contraception Guideline",
   "tags": [
    "MEC4",
    "absolute-contraindication",
    "COC",
    "migraine-aura",
    "VTE"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Condition</th><th>COC category</th></tr></thead><tbody><tr><td>Migraine WITH aura (any age)</td><td>MEC 4 (avoid)</td></tr><tr><td>Migraine WITHOUT aura</td><td>MEC 2 (initiation)</td></tr><tr><td>Breastfeeding &lt;6 wks postpartum</td><td>MEC 4</td></tr><tr><td>Smoker &gt;=35 &amp; &gt;=15/day</td><td>MEC 4</td></tr><tr><td>Smoker &gt;=35 &amp; &lt;15/day</td><td>MEC 3</td></tr><tr><td>BP &gt;=160/100</td><td>MEC 4</td></tr><tr><td>BP 140-159/90-99</td><td>MEC 3</td></tr><tr><td>Current/past VTE</td><td>MEC 4</td></tr><tr><td>Current breast cancer</td><td>MEC 4</td></tr></tbody></table>",
   "id": "gyn-2",
   "title": "COC Absolute Contraindications (MEC 4)",
   "subtitle": "Migraine with aura at any age bans oestrogen"
  },
  {
   "topic": "COC non-contraceptive benefits vs risks (cancer numbers)",
   "subarea": "Contraception & EC",
   "trap": "- Believing the **COC raises ALL cancer risks**\n  - It actually REDUCES ovarian and endometrial (and colorectal) cancer\n  - The small breast/cervical increases are **reversible after stopping**",
   "whatFirst": "- When counselling, **separate protective effects from risks**\n  - A 'which statement is correct' item hinges on getting the **direction** right",
   "discriminator": "- **PROTECTIVE**: ovarian + endometrial (and colorectal) cancer\n  - Substantial benefit, persists for **years after stopping**\n- **SLIGHT INCREASE**: breast + cervical cancer\n  - Small increase, largely reverses **~10 years after cessation**\n- **VTE risk** is increased while taking the COC",
   "redFlags": "- These risk/benefit figures are the **counselling content**\n- Contraindications (migraine with aura, VTE) are **separate**",
   "cutoffs": [
    "Ovarian/endometrial cancer: **REDUCED** (protective)",
    "Breast/cervical cancer: small **INCREASE**, reverses after stopping"
   ],
   "mcqTrap": "- '**The COC increases ovarian cancer risk**' — wrong, it is PROTECTIVE\n  - Also protective against endometrial cancer\n- The tempting symmetry of **'increases all cancers'** is the trap",
   "mnemonic": "COC: down with Ovary & Endometrium (protective), up a touch with Breast & Cervix (reversible).",
   "source": "Family Planning Australia / RANZCOG COC counselling, 2024",
   "tags": [
    "COC",
    "contraception",
    "cancer-risk",
    "counselling",
    "which-statement"
   ],
   "verified": true,
   "visualHtml": "<table class='gv-table'><tr><th>Cancer</th><th>COC effect</th></tr><tr><td>Ovarian</td><td>↓ protective</td></tr><tr><td>Endometrial</td><td>↓ protective</td></tr><tr><td>Colorectal</td><td>↓ protective</td></tr><tr><td>Breast</td><td>↑ small, reversible</td></tr><tr><td>Cervical</td><td>↑ small, reversible</td></tr></table>",
   "id": "gyn-12",
   "title": "COC Cancer Risks and Benefits",
   "subtitle": "Lowers ovarian and endometrial cancer risk"
  },
  {
   "topic": "Contraception + enzyme-inducing drugs (which methods are UNAFFECTED)",
   "subarea": "Contraception & EC",
   "trap": "- Assuming **all hormonal methods fail** with enzyme inducers, or forgetting which ones are safe\n- Enzyme inducers increase metabolism of steroid hormones, reducing efficacy of:\n  - **COC**, patch, ring\n  - ALL **progestogen-only pills**\n  - The **etonogestrel implant**\n  - **Oral EC** (both LNG and UPA)\n- Enzyme inducers include: **rifampicin, rifabutin, carbamazepine, phenytoin, phenobarbital, oxcarbazepine, topiramate, primidone, perampanel, St John's wort**, some HIV antiretrovirals\n- Methods **NOT affected** (the exam answer):\n  - **Copper IUD** (local action)\n  - **LNG-IUD** (local action)\n  - **DMPA injection**\n- For a woman on an anticonvulsant or rifampicin: recommend **Cu-IUD, LNG-IUD, or DMPA**\n- For **oral EC** needed despite an enzyme inducer:\n  - First choice: **Cu-IUD**\n  - Alternative: **double-dose (3mg) LNG-EC**\n  - **UPA is not recommended** with enzyme inducers",
   "whatFirst": "- If the patient takes an enzyme inducer, **switch to/recommend an IUD (either type) or DMPA**\n  - These bypass the **hepatic-enzyme problem**",
   "discriminator": "- It is the **route/site of action** that matters\n  - IUDs act **locally** → enzyme induction doesn't reduce them\n  - DMPA is **largely unaffected** systemically\n- The **implant looks like a LARC but IS affected** (systemic, low-dose) — key distractor",
   "redFlags": "- **Non-enzyme-inducing antibiotics** (e.g. amoxicillin, doxycycline) do NOT reduce hormonal contraceptive efficacy\n  - Extra precautions are **NOT routinely needed** — a common false belief",
   "mcqTrap": "- '**The etonogestrel implant is unaffected by carbamazepine because it is a LARC**' — false\n  - The implant **IS affected**\n  - Only the **IUDs and DMPA** are safe",
   "cutoffs": [
    "Unaffected: **Cu-IUD, LNG-IUD, DMPA injection**",
    "Affected: **COC, patch, ring, POP, implant, oral EC**",
    "Use alternative during inducer + **28 days after stopping**",
    "**Cu-IUD** or **3mg LNG-EC** if EC needed on an inducer",
    "**UPA-EC not recommended** with enzyme inducers",
    "Ordinary **antibiotics do NOT reduce efficacy**"
   ],
   "mnemonic": "Inducers spare the 'local + injected': IUDs and the Injection are immune; the Implant is NOT.",
   "source": "RANZCOG C-Gyn 3 Contraception Guideline; FSRH/CEU Drug Interactions with Hormonal Contraception (Australian-adopted)",
   "tags": [
    "enzyme-inducers",
    "drug-interaction",
    "DMPA",
    "IUD",
    "implant",
    "rifampicin"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Method</th><th>Affected by enzyme inducers?</th></tr></thead><tbody><tr><td>Copper IUD</td><td>NO (safe)</td></tr><tr><td>LNG-IUD (Mirena/Kyleena)</td><td>NO (local)</td></tr><tr><td>DMPA injection</td><td>NO</td></tr><tr><td>Etonogestrel implant</td><td>YES (trap)</td></tr><tr><td>COC / patch / ring</td><td>YES</td></tr><tr><td>All POPs</td><td>YES</td></tr><tr><td>Oral EC (LNG / UPA)</td><td>YES</td></tr></tbody></table>",
   "id": "gyn-10",
   "title": "Contraception and Enzyme Inducers",
   "subtitle": "Cu-IUD, LNG-IUD and DMPA are unaffected"
  },
  {
   "topic": "Contraception in specific conditions — UKMEC/MEC vignettes",
   "subarea": "Contraception & EC",
   "trap": "- Giving **combined hormonal contraception to a woman with migraine WITH AURA** — absolute contraindication\n- Starting **COC too early postpartum** — high-category risk\n  - Both are **MEC 4** / high-category situations",
   "whatFirst": "- Apply the **MEC category** to the patient\n  - Migraine WITH aura = COC **absolutely contraindicated** (stroke risk)\n  - Use **progestogen-only or IUD** instead",
   "discriminator": "- **Migraine WITHOUT aura**: generally acceptable (category **2–3** depending on age)\n- **Migraine WITH aura**: MEC **4** — do not use COC\n- Postpartum timing:\n  - Avoid COC **<21 days** for all (VTE risk)\n  - If **breastfeeding**, avoid COC **<6 weeks**",
   "redFlags": "- History of **VTE** → COC contraindicated\n- Known **thrombophilia** → COC contraindicated\n- **Migraine with aura** → COC contraindicated\n- **<3 weeks postpartum** → COC contraindicated\n- **Smoker ≥35yo with ≥15/day** → COC contraindicated\n  - Choose **progestogen-only or IUD** in all above",
   "cutoffs": [
    "Migraine with aura = **MEC 4** for COC (absolute)",
    "Postpartum: no COC **<21 days** (VTE); if breastfeeding, no COC **<6 weeks**",
    "Smoker **≥35 yrs, ≥15 cigarettes/day** = MEC 4"
   ],
   "mcqTrap": "- '**Prescribe the COC for a 30-year-old with migraine with aura**' — wrong (stroke risk, MEC 4)\n- '**Start COC day 5 postpartum in a breastfeeding mother**' — wrong (VTE + breastfeeding timing)",
   "mnemonic": "Aura = Avoid combined. Postpartum: 21 days (VTE) / 6 weeks if breastfeeding.",
   "source": "UKMEC / Family Planning Australia contraceptive eligibility, 2024",
   "tags": [
    "MEC",
    "migraine-aura",
    "postpartum",
    "VTE",
    "contraindication"
   ],
   "verified": true,
   "visualHtml": "<table class='gv-table'><tr><th>Situation</th><th>COC</th></tr><tr><td>Migraine WITH aura</td><td>MEC 4 (avoid)</td></tr><tr><td>Migraine without aura</td><td>usually OK (2–3)</td></tr><tr><td>&lt;21 days postpartum</td><td>avoid (VTE)</td></tr><tr><td>Breastfeeding &lt;6 wks</td><td>avoid</td></tr><tr><td>Smoker ≥35, ≥15/day</td><td>MEC 4</td></tr></table>",
   "id": "gyn-14",
   "title": "Contraception in Specific Conditions",
   "subtitle": "Never combined hormones with migraine plus aura"
  },
  {
   "topic": "DMPA (depot medroxyprogesterone) — specific gotchas",
   "subarea": "Contraception & EC",
   "trap": "- Choosing **DMPA for a woman planning pregnancy 'soon'** — wrong method\n  - Return to fertility is **delayed up to ~12 months**\n- Assuming **BMD loss is permanent** — it is reversible",
   "whatFirst": "- **Match method to reproductive plan**\n  - If pregnancy wanted in the near term, **DMPA is the wrong choice**\n- Counsel adolescents and long-term users about **BMD loss**",
   "discriminator": "- DMPA is **distinct from other progestogen-only methods** in three ways:\n  1. **Delayed return of fertility** — up to ~12 months after last injection\n  2. **Reversible BMD loss** — caution in adolescents and >2 yrs use\n  3. **NOT affected by enzyme-inducing drugs** — making it the POP-class option of choice with enzyme inducers",
   "redFlags": "- **Adolescents** (peak bone mass accrual) and **long-term users** → review BMD/risk\n  - Ensure adequate **calcium/vitamin D**\n  - Review **continuation** regularly",
   "cutoffs": [
    "Delayed return of fertility: up to **~12 months** (median conception ~10 months after last dose)",
    "BMD loss **reversible** after stopping"
   ],
   "mcqTrap": "- '**DMPA is ideal for a woman wanting to conceive within a few months**' — wrong; pick a rapidly reversible method (e.g. condoms/POP/implant removal)\n- '**DMPA efficacy is reduced by enzyme inducers**' — wrong; it is **unaffected**",
   "mnemonic": "Depo = Delayed fertility, Decreased BMD (reversible), Drug-inducer proof.",
   "source": "Family Planning Australia DMPA counselling, 2024",
   "tags": [
    "DMPA",
    "contraception",
    "fertility-delay",
    "BMD",
    "enzyme-inducers"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-pills'><span class='gv-pill'>Fertility delay up to ~12mo</span><span class='gv-pill'>reversible BMD loss</span><span class='gv-pill'>unaffected by enzyme inducers</span></div>",
   "id": "gyn-13",
   "title": "Depot Medroxyprogesterone (DMPA)",
   "subtitle": "Delayed fertility return; reversible bone loss"
  },
  {
   "topic": "Emergency contraception: copper IUD is the MOST effective",
   "subarea": "Contraception & EC",
   "trap": "- The reflex wrong answer is **levonorgestrel ('the morning-after pill')** as best EC — wrong\n- The **copper IUD** is the most effective emergency contraception\n  - Failure **<1%**\n  - Can be inserted up to **5 days (120h)** after unprotected sex\n  - Or up to **5 days after the earliest estimated ovulation**\n- Its efficacy is **NOT reduced by BMI/weight**, unlike oral EC\n- Provides **ongoing contraception for years**\n- Should be **offered first** to anyone presenting for EC, especially if:\n  - **Late (>72–96h)**\n  - **High BMI**\n  - Wanting **ongoing LARC**\n- **LNG-IUD (Mirena) is NOT licensed** for emergency contraception in Australia — only the copper IUD is",
   "whatFirst": "- **Offer/mention the copper IUD before any oral EC**\n  - It is both the **most effective EC** and the best ongoing method",
   "discriminator": "- **Copper IUD** = most effective EC and **weight-independent**\n- The **LNG-IUD is NOT EC**\n- Among **oral EC**: **ulipristal > levonorgestrel**",
   "redFlags": "- **Active pelvic infection/PID** or **established pregnancy** = Cu-IUD not appropriate\n  - Exclude pregnancy and current **STI risk** before insertion",
   "mcqTrap": "- '**Levonorgestrel 1.5mg is the most effective emergency contraception**' — false\n  - The **copper IUD** is, by a wide margin",
   "cutoffs": [
    "**Cu-IUD** = most effective EC",
    "Insert within **5 days (120h)** of UPSI",
    "Or within **5 days of earliest estimated ovulation**",
    "Failure **<1%**",
    "Efficacy **NOT affected by BMI**",
    "**LNG-IUD is NOT EC**"
   ],
   "mnemonic": "Copper is King of EC (and stays for years).",
   "source": "RANZCOG C-Gyn 3 Contraception Guideline; Family Planning Australia / Sexual Health Infolink NSW EC resources 2024",
   "tags": [
    "emergency-contraception",
    "copper-IUD",
    "most-effective",
    "5-days"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>EC method</th><th>Window</th><th>Effectiveness</th><th>BMI effect</th></tr></thead><tbody><tr><td>Copper IUD</td><td><span class=\"gv-num\">5 days</span></td><td>Most effective (&lt;1% fail)</td><td>None</td></tr><tr><td>Ulipristal 30mg</td><td><span class=\"gv-num\">120h</span></td><td>Better than LNG near ovulation</td><td>Less effective BMI&gt;30</td></tr><tr><td>Levonorgestrel 1.5mg</td><td><span class=\"gv-num\">72h</span> (ineffective &gt;96h)</td><td>Least effective</td><td>Less effective BMI&gt;26</td></tr></tbody></table>",
   "id": "gyn-6",
   "title": "Emergency Contraception",
   "subtitle": "Copper IUD is most effective, up to 5 days"
  },
  {
   "topic": "LARC is most effective + first-line (implant / LNG-IUD / Cu-IUD)",
   "subarea": "Contraception & EC",
   "trap": "- The most tempting wrong answer for the young/forgetful/teenage patient is **COC pill or condoms as 'best'** — wrong\n- **LARC** (etonogestrel implant, LNG-IUD, copper IUD) are the MOST effective reversible methods\n  - Remove **user error** — typical-use failure **<1%/yr**\n  - vs. **~7–9% typical-use** failure for the COC\n- Australian guidance (RANZCOG, FPA) positions **LARC as first-line for ALL ages** including nulliparous adolescents\n  - **'Too young / never had a baby'** is NOT a contraindication to an IUD\n- Durations:\n  - **Etonogestrel implant (Implanon NXT)**: 3 years\n  - **LNG-IUD 52mg (Mirena)**: up to **8 years** for contraception (TGA-extended June 2024)\n  - **Copper IUD**: up to **5–10 years** (device-dependent)",
   "whatFirst": "- When the stem says **'most effective'** or **'best for a forgetful 19-year-old'**, pick a **LARC** over any user-dependent method",
   "discriminator": "- Effectiveness is about **typical use** (real-world error), not perfect use\n  - COC **perfect-use ~0.3%** but **typical-use ~7%**\n  - LARC closes that gap",
   "mcqTrap": "- '**COC is the most effective reversible method**' — false\n  - It is the most **popular**, not the most **effective**",
   "cutoffs": [
    "Implant/IUD typical-use failure **<1%/yr**",
    "COC typical-use failure **~7–9%/yr**",
    "Implanon NXT **3 yrs**",
    "Mirena 52mg up to **8 yrs** contraception (2024)",
    "Cu-IUD up to **5–10 yrs** (device-dependent)",
    "**Nulliparity/adolescence NOT a contraindication**"
   ],
   "mnemonic": "LARC = Low Annual Risk of Conception.",
   "source": "RANZCOG C-Gyn 3 Contraception Clinical Guideline (current); Family Planning Australia 2024; TGA Mirena 8-year extension (June 2024); Australian Prescriber, Update on long- and short-acting contraceptive methods",
   "tags": [
    "LARC",
    "first-line",
    "effectiveness",
    "IUD",
    "implant"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Method</th><th>Typical-use failure / yr</th><th>Duration</th></tr></thead><tbody><tr><td>Etonogestrel implant</td><td><span class=\"gv-num\">&lt;0.1%</span></td><td>3 yrs</td></tr><tr><td>LNG-IUD 52mg (Mirena)</td><td><span class=\"gv-num\">&lt;0.2%</span></td><td>up to 8 yrs</td></tr><tr><td>Copper IUD</td><td><span class=\"gv-num\">&lt;0.8%</span></td><td>5-10 yrs</td></tr><tr><td>DMPA injection</td><td>~6%</td><td>12 wks</td></tr><tr><td>COC pill</td><td><span class=\"gv-num\">~7-9%</span></td><td>daily</td></tr><tr><td>Condoms</td><td>~13%</td><td>per act</td></tr></tbody></table>",
   "id": "gyn-1",
   "title": "LARC as First-Line Contraception",
   "subtitle": "LARC beats the pill; no user error"
  },
  {
   "topic": "MEC 4 vs MEC 3 thinking (and risk-factor stacking)",
   "subarea": "Contraception & EC",
   "trap": "- Students treat **MEC 3 as 'allowed'** — it is NOT a green light\n  - **MEC 3** = risks usually **outweigh benefits**; use only if no better option and with caution\n  - **MEC 4** = unacceptable risk; **never use**\n- Hidden gotcha: **two MEC 3 conditions together** can effectively make oestrogen unacceptable\n  - Multiple cardiovascular risk factors (e.g. older age + smoking + obesity) = higher **composite risk**\n- Classic **MEC 3 (not 4)** items:\n  - Smoker **≥35 smoking <15/day**\n  - BP **140–159/90–99**\n  - BMI **≥35**\n  - Breastfeeding **6 weeks–6 months**\n  - **<21 days postpartum** (non-breastfeeding) without VTE risk\n  - Known **hyperlipidaemia**\n  - **Immobility**",
   "whatFirst": "- Distinguish the threshold:\n  - Is the smoker **≥15/day (MEC 4)** or **<15/day (MEC 3)**?\n  - Is BP **≥160/100 (MEC 4)** or **140–159/90–99 (MEC 3)**?",
   "discriminator": "- **MEC 1** = no restriction\n- **MEC 2** = benefits outweigh risks\n- **MEC 3** = risks usually outweigh benefits (caution/avoid)\n- **MEC 4** = unacceptable (prohibited)\n- Progestogen-only pill, implant, DMPA, and both IUDs are **MEC 1–2** for almost all conditions that make the COC MEC 3–4",
   "mcqTrap": "- '**BP 150/95 in a 30-year-old means the COC is absolutely contraindicated**' — false\n  - That is **MEC 3** (caution), not MEC 4",
   "cutoffs": [
    "**MEC 3** = caution/avoid",
    "**MEC 4** = prohibited",
    "Smoker **<15/day at ≥35** = MEC 3",
    "BP **140–159/90–99** = MEC 3",
    "BMI **≥35** = MEC 3",
    "**Stacking MEC 3 risks** → treat as unacceptable"
   ],
   "mnemonic": "3 = Think twice; 4 = Forget it.",
   "source": "UKMEC 2016 (amended 2019), FSRH - Australian-adopted; RANZCOG C-Gyn 3 Contraception Guideline",
   "tags": [
    "MEC",
    "category-3-vs-4",
    "risk-stacking",
    "COC"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">MEC 1 = no restriction</span><span class=\"gv-pill\">MEC 2 = benefits &gt; risks</span><span class=\"gv-pill\">MEC 3 = risks &gt; benefits (avoid)</span><span class=\"gv-pill\">MEC 4 = unacceptable (banned)</span></div>",
   "id": "gyn-3",
   "title": "MEC 3 vs MEC 4 Categories",
   "subtitle": "MEC 3 is not a green light; risks stack"
  },
  {
   "topic": "Missed COC pill rules (Australian)",
   "subarea": "Contraception & EC",
   "trap": "- The COC is only 'missed' (pregnancy risk) when an active pill is **>24 hours late**, i.e. **≥2 active pills missed**\n- **1 late/missed active pill** (≤48h since last pill): just take it, **no backup needed**\n- **≥2 missed active pills**: take the most recent missed pill, **use condoms/backup for 7 days**\n- Position-in-pack gotcha:\n  - If ≥2 missed pills are in **week 3** (last week of active pills): **skip the hormone-free/sugar-pill interval** and go straight to the next pack\n  - If missed in **week 1** and unprotected sex occurred in the hormone-free interval: consider **emergency contraception**",
   "whatFirst": "- Count how many **active pills were missed** and **which week** — that drives whether backup, pack-skipping, or EC is needed",
   "discriminator": "- COC tolerates **one missed active pill** (7 active pills protect the hormone-free week)\n- The **traditional POP does NOT** — it has only a **3-hour window**\n  - Do not apply COC rules to a POP",
   "redFlags": "- **≥2 missed pills + unprotected sex** in the preceding 7 days = offer **emergency contraception**",
   "mcqTrap": "- '**One missed COC pill requires 7 days of condoms**' — over-cautious and wrong\n  - One missed active pill just needs to be **taken**",
   "cutoffs": [
    "**≥2 active pills missed** = 7 days backup",
    "**1 missed active pill** = take it, no backup",
    "Missed in **week 3** = skip the hormone-free interval",
    "**EC** if ≥2 missed + UPSI in last 7 days"
   ],
   "mnemonic": "Two-or-more = Seven (days backup); week Three = Skip the break.",
   "source": "Family Planning Australia COC troubleshooting; RANZCOG C-Gyn 3 Contraception Guideline; FSRH CHC guidance (Australian-adopted)",
   "tags": [
    "missed-pill",
    "COC",
    "backup",
    "emergency-contraception"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">1 active pill missed -> take it, no backup</div><div class=\"gv-step\">&gt;=2 missed -> take latest + 7 days condoms</div><div class=\"gv-step\">If missed in week 3 -> skip hormone-free break</div><div class=\"gv-step\">UPSI in last 7 days -> consider EC</div></div>",
   "id": "gyn-4",
   "title": "Missed COC Pill Rules",
   "subtitle": "Risk only when 2+ active pills missed"
  },
  {
   "topic": "Missed POP rules: 3-hour (traditional) vs 12-hour (desogestrel) vs 24h (drospirenone)",
   "subarea": "Contraception & EC",
   "trap": "- Three different windows — examiners pick the wrong one as a distractor:\n  1. **Traditional POP (levonorgestrel, norethisterone)**: only a **3-hour window** — >3 hours late = missed\n  2. **Desogestrel POP**: **12-hour window** (suppresses ovulation) — NOT marketed in Australia, it is the **New Zealand POP**\n  3. **Drospirenone POP (Slinda — the Australian POP)**: **24-hour 'missed pill' window** — 'missed' only if >24h late\n- After a missed POP:\n  - Take it **ASAP**\n  - Backup contraception for **2 days** (traditional/DSG)\n  - Or until **7 active pills taken** (drospirenone)",
   "whatFirst": "- Identify **which POP the stem names** — the window is **3h, 12h, or 24h** depending on the progestogen",
   "discriminator": "- **Traditional POP** = **3h** (narrowest, easy to miss)\n- **Drospirenone (Australian POP)** = **24h** forgiveness\n- Don't quote the UK/NZ **desogestrel 12h** figure for an Australian patient — the Australian POP is **drospirenone**",
   "mcqTrap": "- '**All progestogen-only pills have a 3-hour window**' — false\n  - Only traditional **LNG/norethisterone** POPs do\n  - **Drospirenone (the Australian POP) gives 24h**",
   "cutoffs": [
    "Traditional POP (LNG/norethisterone) = **3-hour window**",
    "Desogestrel POP = **12-hour window** (NZ, not AU)",
    "Drospirenone POP (AU) = **24-hour window**",
    "Backup **2 days** after a missed traditional/DSG POP",
    "Drospirenone: **7 active pills** to regain protection"
   ],
   "mnemonic": "Old POP = 3, Deso = 12, Drospirenone = a Day (24).",
   "source": "RANZCOG C-Gyn 3 Contraception Guideline; Family Planning NSW Drospirenone POP factsheet 2023; Australian Prescriber (POP windows); FSRH Progestogen-only Pills guideline 2022",
   "tags": [
    "POP",
    "missed-pill",
    "drospirenone",
    "desogestrel",
    "window"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>POP type</th><th>Late if &gt;</th><th>Available in AU?</th></tr></thead><tbody><tr><td>Traditional (LNG / norethisterone)</td><td><span class=\"gv-num\">3 hours</span></td><td>Yes</td></tr><tr><td>Desogestrel</td><td><span class=\"gv-num\">12 hours</span></td><td>No (NZ)</td></tr><tr><td>Drospirenone (Slinda)</td><td><span class=\"gv-num\">24 hours</span></td><td>Yes</td></tr></tbody></table>",
   "id": "gyn-5",
   "title": "Missed POP Rules",
   "subtitle": "3h, 12h or 24h window by progestogen"
  },
  {
   "topic": "Oral EC: ulipristal (120h) vs levonorgestrel (72h) + BMI thresholds",
   "subarea": "Contraception & EC",
   "trap": "- Picking **levonorgestrel** for a late or high-BMI presentation — wrong\n- **LNG-EC 1.5mg**: licensed only up to **72h** (considered ineffective >96h)\n  - Loses efficacy at **BMI >26 / weight >70kg**\n- **Ulipristal acetate (UPA) 30mg**: works up to **120h (5 days)**\n  - MORE effective than LNG especially **near ovulation**\n  - Preferred oral option above **BMI 26 / 70kg**\n  - Effectiveness **uncertain above BMI >30 / weight >85kg**\n- For **LNG in patient with BMI >26 / >70kg**: double dose (**3mg LNG**) may be offered\n  - Added effectiveness is **unproven** (2022 evidence: double-dosing does not reliably improve outcomes)\n- **Double-dose UPA is NOT recommended**\n- For late presenter or higher BMI: choose **UPA or copper IUD**",
   "whatFirst": "- Check **time since UPSI and BMI**:\n  - **>72h or high BMI** → UPA (or Cu-IUD), not LNG",
   "discriminator": "- UPA is a **progesterone-receptor MODULATOR** that delays ovulation even at the **LH surge**\n- LNG only delays ovulation if given **before the surge** — that is why UPA wins close to ovulation\n- Both fail if **ovulation has already occurred** → hence Cu-IUD if certain post-ovulation",
   "redFlags": "- **Severe asthma controlled by oral steroids** = caution with UPA\n- **Pregnancy must be reasonably excluded** before either oral EC",
   "mcqTrap": "- '**Give levonorgestrel — she presented at 100 hours**' — wrong on two counts:\n  - LNG is **unlicensed beyond 72h** and **ineffective beyond 96h**\n  - Use **UPA (≤120h) or copper IUD**",
   "cutoffs": [
    "LNG-EC **≤72h** (ineffective >96h), **1.5mg**",
    "UPA-EC **≤120h**, **30mg**",
    "LNG less effective **BMI >26 / >70kg** → consider **3mg** (unproven)",
    "UPA preferred **>BMI26/>70kg**; effectiveness unknown **>BMI30/>85kg**",
    "**Double-dose UPA NOT recommended**"
   ],
   "mnemonic": "Ulipristal = Up to 5 days, Up to BMI 30; Levonorgestrel = Less time (72h), Lower BMI ceiling (26).",
   "source": "RANZCOG C-Gyn 3 Contraception Guideline; APF/Australian Pharmacist EC weight guidance 2024; FSRH EC guideline 2017 (amended) - Australian-adopted",
   "tags": [
    "ulipristal",
    "levonorgestrel",
    "BMI",
    "120h",
    "72h",
    "double-dose"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">UPSI -> exclude existing pregnancy</div><div class=\"gv-step\">Offer Cu-IUD first (most effective, &lt;=5 days)</div><div class=\"gv-step\">If oral: &lt;=120h or BMI&gt;26 -> ulipristal 30mg</div><div class=\"gv-step\">LNG 1.5mg only &lt;=72h, low BMI; 3mg if BMI&gt;26 (unproven)</div></div>",
   "id": "gyn-7",
   "title": "Oral Emergency Contraception",
   "subtitle": "Ulipristal to 120h; LNG fails late and high BMI"
  },
  {
   "topic": "Progestogen-only methods are the safe fallback when oestrogen is contraindicated",
   "subarea": "Contraception & EC",
   "trap": "- Knowing the COC is banned (MEC 4) but **not knowing the right alternative**\n- For migraine with aura, VTE history, smoker ≥35, breastfeeding, BP ≥160/100, or oestrogen-related contraindications:\n  - **Progestogen-only options (POP, implant, DMPA, LNG-IUD) and the copper IUD are MEC 1–2**\n- Caveat gotchas:\n  1. **DMPA is MEC 3** for current/high cardiovascular risk; reduces BMD (caution in adolescents and fracture risk — but reversible)\n  2. **Progestogen-only methods are generally SAFE in migraine with aura** — do not also withhold them\n  3. **Copper IUD is hormone-free** and suits anyone who must avoid ALL hormones\n  4. **Current breast cancer is MEC 4 for ALL hormonal methods** — choose the copper IUD",
   "whatFirst": "- Once **oestrogen is contraindicated**, default to a **progestogen-only method or the copper IUD**\n  - Confirm none of the few progestogen cautions apply",
   "discriminator": "- **Migraine with aura bans oestrogen but NOT progestogen**\n  - Implant/POP/LNG-IUD/DMPA are all fine\n- **Current breast cancer** is the exception that **bans hormones entirely** (copper IUD only)",
   "redFlags": "- **Current breast cancer** = no hormonal contraception at all (MEC 4 for all hormones)\n  - **Copper IUD only**",
   "mcqTrap": "- '**Migraine with aura — so avoid the implant too**' — false\n  - Only **oestrogen is contraindicated**; **progestogen-only methods are fine**",
   "cutoffs": [
    "**POP/implant/DMPA/LNG-IUD safe** in migraine with aura",
    "DMPA **MEC 3** for high CV risk; reduces BMD (reversible)",
    "**Current breast cancer** = MEC 4 for ALL hormones → **Cu-IUD**",
    "**Copper IUD** = hormone-free fallback"
   ],
   "mnemonic": "Oestrogen out, Progestogen in (except current breast cancer = copper only).",
   "source": "UKMEC 2016 (amended 2019), FSRH - Australian-adopted; RANZCOG C-Gyn 3 Contraception Guideline",
   "tags": [
    "progestogen-only",
    "fallback",
    "migraine-aura",
    "DMPA",
    "breast-cancer"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Oestrogen banned -> POP / implant / DMPA / LNG-IUD / Cu-IUD</span><span class=\"gv-pill\">Migraine+aura: progestogen OK</span><span class=\"gv-pill\">Current breast Ca: Cu-IUD only</span></div>",
   "id": "gyn-11",
   "title": "Progestogen-Only Fallback Methods",
   "subtitle": "Safe when oestrogen is contraindicated"
  },
  {
   "topic": "Quick-start: when backup contraception is (and isn't) needed",
   "subarea": "Contraception & EC",
   "trap": "- Forgetting backup, or quoting the **wrong number of backup days** for the method\n- If started within the **first 5 days** of the menstrual cycle, NO backup is needed (already protected)\n- Started any other time ('quick-start', once pregnancy reasonably excluded), backup days vary by method:\n  - **COC/patch/ring** = 7 days\n  - **Etonogestrel implant** = 7 days\n  - **DMPA injection** = 7 days\n  - **Copper IUD** = effective immediately (0 days)\n  - **LNG-IUD** = 7 days\n  - **Traditional + desogestrel POP** = 2 days\n  - **Drospirenone POP** = 7 days\n- A **follow-up pregnancy test at 3 weeks** is advised when quick-starting (may not yet detect a pregnancy from the cycle of insertion)",
   "whatFirst": "- Ask: was it started **day 1–5 of the cycle**?\n  - If yes → **no backup** needed\n  - If no → apply the **method-specific backup window**",
   "discriminator": "- POPs split on backup duration:\n  - **Traditional/desogestrel POP = 2 days** only (acts fast on cervical mucus)\n  - **Drospirenone POP = 7 days** (acts by ovulation suppression)\n- **Copper IUD** alone needs **zero** backup days",
   "mcqTrap": "- 'All quick-started methods need **7 days** of backup' — **false**\n  - Traditional/DSG POP needs only **2 days**\n  - Copper IUD needs **none**",
   "cutoffs": [
    "**Day 1–5** of cycle = no backup",
    "**COC/ring/patch/implant/DMPA/LNG-IUD** = 7 days backup",
    "**Traditional + desogestrel POP** = 2 days backup",
    "**Drospirenone POP** = 7 days backup",
    "**Copper IUD** = effective immediately (0 days)",
    "**Pregnancy test at 3 weeks**"
   ],
   "mnemonic": "Day-5 = no delay; otherwise Seven for most, Two for the old POP, Zero for copper.",
   "source": "RANZCOG C-Gyn 3 Contraception Guideline (Quick starting); Family Planning NSW factsheets; FSRH Quick Starting Contraception guideline (Australian-adopted)",
   "tags": [
    "quick-start",
    "backup",
    "POP",
    "day-5",
    "copper-IUD"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Quick-started method</th><th>Backup days</th></tr></thead><tbody><tr><td>COC / patch / ring</td><td><span class=\"gv-num\">7</span></td></tr><tr><td>Implant / DMPA / LNG-IUD</td><td><span class=\"gv-num\">7</span></td></tr><tr><td>Drospirenone POP</td><td><span class=\"gv-num\">7</span></td></tr><tr><td>Traditional / desogestrel POP</td><td><span class=\"gv-num\">2</span></td></tr><tr><td>Copper IUD</td><td><span class=\"gv-num\">0</span> (immediate)</td></tr></tbody></table>",
   "id": "gyn-9",
   "title": "Quick-Start Contraception Backup",
   "subtitle": "No backup only if started in first 5 days"
  },
  {
   "topic": "EC + restarting hormonal contraception (the ulipristal 5-day rule)",
   "subarea": "Contraception & EC",
   "trap": "- The drug-interaction gotcha that goes **both ways**\n- After **ulipristal acetate (UPA)**: must wait **5 days** before starting/quick-starting any progestogen-containing contraception\n  - Progestogen reduces UPA's efficacy\n  - Recent progestogen in the prior **7 days** also reduces UPA\n- After **levonorgestrel EC (LNG)**: CAN quick-start hormonal contraception **immediately**\n- During the wait + start-up, **condoms** are needed:\n  - After UPA: abstain/condoms for the **5 waiting days** PLUS the method's backup days\n    - e.g. +2 days for traditional/DSG POP\n    - e.g. +7 days for COC/DRSP POP/implant\n- A **pregnancy test at 3 weeks** is advised if no/abnormal period",
   "whatFirst": "- If **UPA** was given → do NOT start the pill/implant for **5 days**\n- If **LNG** was given → **quick-start now** with backup",
   "discriminator": "- **UPA = wait 5 days** (progestogen antagonises it)\n- **LNG = start immediately**\n- This is the **opposite-handling pair** examiners love",
   "redFlags": "- Inserting an **etonogestrel implant within 5 days of UPA** can blunt UPA's ovulation-delaying effect\n  - Delay the implant, or use **Cu-IUD instead**",
   "mcqTrap": "- 'Quick-start the COC today immediately after giving **ulipristal**' — **wrong**\n  - That progestogen exposure undermines the UPA\n  - Must **wait 5 days**",
   "cutoffs": [
    "Wait **5 days** after UPA before progestogen",
    "**LNG-EC** = quick-start immediately",
    "Backup = **5-day wait** + method backup days",
    "COC/DRSP POP/implant backup **7 days**; traditional/DSG POP **2 days**",
    "**Pregnancy test at 3 weeks** if no period"
   ],
   "mnemonic": "Ulipristal: Unwind for 5; LNG: Launch now.",
   "source": "RANZCOG C-Gyn 3 Contraception Guideline; Sexual Health Victoria UPA + current hormonal contraception (2020); FSRH EC guideline (Australian-adopted)",
   "tags": [
    "emergency-contraception",
    "ulipristal",
    "quick-start",
    "drug-interaction",
    "backup"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>EC given</th><th>When can you start regular hormonal method?</th></tr></thead><tbody><tr><td>Levonorgestrel (LNG-EC)</td><td>Immediately (quick-start) + backup</td></tr><tr><td>Ulipristal (UPA-EC)</td><td>WAIT <span class=\"gv-num\">5 days</span>, then start + backup</td></tr></tbody></table>",
   "id": "gyn-8",
   "title": "Restarting Hormones After Ulipristal",
   "subtitle": "Wait 5 days before any progestogen"
  },
  {
   "topic": "Breast imaging choice by AGE (USS first if young)",
   "subarea": "Screening & HPV",
   "trap": "- Tempting wrong answer: 'order a **mammogram**' in a 25-year-old with a lump\n- In young/dense breasts, **ultrasound** is first-line imaging\n  - Mammogram has poor sensitivity in dense tissue\n- Cancer Australia draws the line at **age 35**:\n  - Under 35 → **ultrasound first**\n  - 35 or older → **mammogram AND ultrasound**",
   "whatFirst": "- Under **35** with a lump → **ultrasound first**\n  - Add mammogram only if more information is needed\n- **35 or older** → **mammogram + ultrasound**\n- Either way the lump still completes the **triple test** (clinical exam + imaging + biopsy as indicated)",
   "discriminator": "- **Dense breast tissue** (younger women, pregnancy/lactation) is radiodense and obscures lesions on mammogram\n- **USS** distinguishes solid vs cystic and sees through density\n- From ~**35**, fat replacement makes mammography sensitive",
   "cutoffs": [
    "**USS** first-line if <35",
    "**Mammogram AND USS** if ≥35",
    "**Pregnant/lactating** with lump: USS first regardless of age"
   ],
   "redFlags": "- A **solid lump on USS** at any age still needs **core biopsy**\n  - Do not stop at 'cyst-looking' without confirmation if features are atypical",
   "mnemonic": "Young = sound (ultrasound); 35+ = mammogram too. Dense breasts beat X-rays.",
   "source": "Cancer Australia 'Investigation of a new breast symptom' (triple test guidance); RACGP breast imaging",
   "verified": true,
   "tags": [
    "breast",
    "imaging",
    "ultrasound",
    "age-threshold"
   ],
   "id": "gyn-25",
   "title": "Breast Imaging by Age",
   "subtitle": "Under 35 with a lump: ultrasound first, not mammogram"
  },
  {
   "topic": "BreastScreen Australia: TARGET 50-74, eligible from 40",
   "subarea": "Screening & HPV",
   "trap": "- Tempting wrong answer: 'screen all women from **40**' as the program default, or 'stop at **50/69**'\n- BreastScreen **actively invites** women aged **50–74** (free 2-yearly mammogram)\n- Women **40–49** and **75+** are **eligible** for free mammograms but are **NOT invited** (they self-refer)\n- Know the difference between **'invited target'** and **'eligible'**",
   "whatFirst": "- Asymptomatic woman **50–74** → BreastScreen **2-yearly mammogram** (no GP referral needed)\n- **40–49** wanting screening → eligible, self-books, but discuss limited benefit (denser breasts, lower incidence)\n- **High-risk/strong family history** → separate surveillance pathway (e.g. via family cancer clinic), not routine BreastScreen",
   "discriminator": "- **Population screening** (asymptomatic) = BreastScreen\n- A **symptom** (lump, nipple change, focal pain) = **diagnostic triple test**, NOT BreastScreen",
   "cutoffs": [
    "**Target/invited**: 50–74",
    "**Eligible** (free, uninvited): from 40 and 75+",
    "Every **2 years**",
    "**Free**, no referral needed"
   ],
   "redFlags": "- Family history meeting **high-risk criteria** needs earlier/MRI-based surveillance\n  - Do not just send to routine BreastScreen",
   "mnemonic": "Invite 50, see them out at 74; the 40s can come but won't get a letter.",
   "source": "BreastScreen Australia (Dept of Health); AIHW BreastScreen Australia monitoring report 2024",
   "verified": true,
   "tags": [
    "breast",
    "BreastScreen",
    "screening-age",
    "high-yield"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Age</th><th>Status</th></tr></thead><tbody><tr><td>&lt;40</td><td>Not eligible (routine)</td></tr><tr><td><span class=\"gv-num\">40-49</span></td><td>Eligible, free, NOT invited</td></tr><tr><td><span class=\"gv-num\">50-74</span></td><td>TARGET - actively invited</td></tr><tr><td>75+</td><td>Eligible, free, NOT invited</td></tr></tbody></table>",
   "id": "gyn-23",
   "title": "BreastScreen Australia Age Targets",
   "subtitle": "Actively invites 50-74; 40-49 eligible but not invited"
  },
  {
   "topic": "Exit (cease) testing 70-74 and post-hysterectomy",
   "subarea": "Screening & HPV",
   "trap": "- Tempting wrong answer: 'stop screening automatically at **70**' OR 'keep screening past **74**'\n- Cessation requires a **negative exit HPV test** taken between **70 and 74**\n- A woman who had a **total hysterectomy** (cervix removed) with no high-grade history can stop\n  - **Subtotal hysterectomy** (cervix retained) → keep screening",
   "whatFirst": "- At **70–74**, offer the **exit Cervical Screening Test** (clinician- or self-collected)\n  - **HPV not detected** → may safely cease\n  - **HPV detected** → follow the standard 16/18 vs other-oncogenic pathway\n    - Do NOT just cease because of age",
   "discriminator": "- **Total hysterectomy + no cervix + no high-grade history** = cease\n- **Subtotal** (cervix in situ) = continue\n- **Hysterectomy WITH prior high-grade abnormality** may need vault sampling — don't reflexively stop",
   "cutoffs": [
    "Exit test offered at **70–74**",
    "Cease if exit **HPV negative**",
    "**Total hysterectomy** (no cervix, no high-grade hx) = cease"
   ],
   "redFlags": "- A **positive exit test at 70–74** must be **worked up**, not dismissed as 'too old'",
   "mnemonic": "One last HPV check between 70 and 74 before you retire from screening.",
   "source": "NCSP Guidelines (Cancer Council Australia, updated Jan 2025); Dept of Health Summary Guide (Feb 2025)",
   "verified": true,
   "tags": [
    "cervical",
    "exit-test",
    "hysterectomy",
    "cease"
   ],
   "id": "gyn-21",
   "title": "Ceasing Cervical Screening",
   "subtitle": "Needs a negative exit HPV test at 70-74"
  },
  {
   "topic": "Cervical ectropion — benign cause of post-coital bleeding",
   "subarea": "Screening & HPV",
   "trap": "- Calling post-coital bleeding (PCB) 'just an **ectropion**' without first checking cervical screening status and doing speculum exam\n- **Ectropion is a diagnosis of exclusion**",
   "whatFirst": "- PCB → check **cervical screening (HPV) status** + **speculum** to inspect cervix\n- **Exclude malignancy** (and chlamydia/cervicitis) BEFORE attributing bleeding to ectropion",
   "discriminator": "- **Ectropion** = benign columnar epithelium everted onto ectocervix; common in COC users/pregnancy; looks red/friable\n- Must distinguish from **cervical cancer/polyp/cervicitis**\n- Only call it ectropion after **malignancy excluded** (colposcopy if screening abnormal)",
   "redFlags": "- **Abnormal/overdue screening**, visible lesion, irregular friable mass → **colposcopy/biopsy**\n  - Do NOT reassure",
   "cutoffs": [
    "Always confirm **up-to-date cervical screening** before attributing PCB to benign ectropion"
   ],
   "mcqTrap": "- 'Reassure — PCB in a young woman on the pill is **ectropion**, no further action' — **wrong**\n  - Must check **screening status** and examine to exclude cancer/infection first",
   "mnemonic": "Ectropion = Exclude cancer first; it's a diagnosis of Exclusion.",
   "source": "National Cervical Screening Program / RANZCOG PCB pathway, 2024",
   "tags": [
    "ectropion",
    "post-coital-bleeding",
    "cervical",
    "exclusion",
    "screening"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-flow'><div class='gv-step'>PCB → check HPV screening status</div><div class='gv-step'>Speculum ± colposcopy to exclude cancer/cervicitis</div><div class='gv-step'>Only then: benign ectropion</div></div>",
   "id": "gyn-28",
   "title": "Cervical Ectropion",
   "subtitle": "Diagnosis of exclusion; check screening and speculum first"
  },
  {
   "topic": "Cervical screening after hysterectomy — the residual-cervix trap",
   "subarea": "Screening & HPV",
   "trap": "- Stopping all cervical screening after **any hysterectomy**\n- Cessation only applies to **total hysterectomy** with NO history of HSIL/cancer\n- **Subtotal** (cervix retained) still needs screening",
   "whatFirst": "- Before ceasing, confirm **both**:\n  - (1) Was the **cervix removed** (total vs subtotal)?\n  - (2) Any history of **HSIL/cervical cancer**?\n- Both must be favourable to stop",
   "discriminator": "- **Total hysterectomy + no HSIL/cancer history** → cease (no cervix)\n- **Subtotal hysterectomy** (cervix RETAINED) → **CONTINUE** routine screening\n- **History of HSIL** → ongoing vault/test-of-cure surveillance even after total hysterectomy",
   "redFlags": "- **Prior HSIL or cervical cancer** → vault sampling/surveillance continues\n  - Do not discharge from screening",
   "cutoffs": [
    "Cease only if: **total hysterectomy** AND no HSIL/cancer history",
    "**Subtotal** (cervix retained) → keep screening per program"
   ],
   "mcqTrap": "- 'No further cervical screening needed after **hysterectomy**' — **wrong** if:\n  - It was **subtotal** (cervix remains), OR\n  - There was **prior HSIL/cancer** (vault surveillance continues)",
   "mnemonic": "No cervix + no HSIL = no screening. Cervix kept OR HSIL history = keep screening.",
   "source": "National Cervical Screening Program guidelines, 2024–25",
   "tags": [
    "cervical-screening",
    "hysterectomy",
    "exit",
    "HSIL",
    "trap"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-flow'><div class='gv-step'>Total hysterectomy + no HSIL/cancer → cease</div><div class='gv-step'>Subtotal (cervix kept) → continue screening</div><div class='gv-step'>HSIL/cancer history → vault surveillance continues</div></div>",
   "id": "gyn-30",
   "title": "Cervical Screening After Hysterectomy",
   "subtitle": "Subtotal (cervix retained) or prior HSIL still needs screening"
  },
  {
   "topic": "Cervical screening in pregnancy",
   "subarea": "Screening & HPV",
   "trap": "- Tempting wrong answer: '**pregnancy contraindicates** cervical screening — defer everything to postpartum'\n- The CST (including self-collection) can be done **at any time in pregnancy** if due\n- A speculum/clinician sample is safe\n- Do not decline a due screen purely because she is **pregnant**\n- Do not ignore symptoms because she is pregnant",
   "whatFirst": "- If a routine CST is **due and she's pregnant** → offer it (**self-collection acceptable** at any gestation)\n- If she has **abnormal bleeding** → investigate\n  - Do not attribute all bleeding in pregnancy to obstetric causes without considering the **cervix**",
   "discriminator": "- **Screening itself is not contraindicated** in pregnancy\n- Endocervical sampling/colposcopy timing may be **modified** in pregnancy\n- **Treatment of high-grade lesions** is usually **deferred to postpartum** unless invasion is suspected",
   "cutoffs": [
    "CST can be done **at any time in pregnancy**",
    "**Self-collection** offered at any gestation",
    "High-grade lesion treatment usually deferred to **~6+ weeks postpartum** unless cancer suspected"
   ],
   "redFlags": "- **Suspected invasive cancer** in pregnancy is referred to **gynae-oncology** — not deferred",
   "mnemonic": "Pregnant + due = still screen; pregnant + bleeding = still look at the cervix.",
   "source": "NCSP Guidelines (Cancer Council Australia, updated Jan 2025); RANZCOG",
   "verified": true,
   "tags": [
    "cervical",
    "pregnancy",
    "screening"
   ],
   "id": "gyn-22",
   "title": "Cervical Screening in Pregnancy",
   "subtitle": "Safe and done if due; don't defer to postpartum"
  },
  {
   "topic": "Colposcopy & CIN management — LLETZ + preterm-birth caveat",
   "subarea": "Screening & HPV",
   "trap": "- Treating **all CIN** with excision\n- **CIN1 (LSIL)** is often **observed**; treatment is for CIN2/3 (HSIL)\n- Excision is not **consequence-free**",
   "whatFirst": "- At colposcopy:\n  - Biopsy-confirmed **CIN1/LSIL** → usually **observe/repeat** (often regresses)\n  - **CIN2–3/HSIL** → **excisional treatment (LLETZ)** or ablation",
   "discriminator": "- **Low-grade (CIN1/LSIL)** = watch\n- **High-grade (CIN2/3/HSIL)** = treat with **LLETZ**\n- Counsel that excisional treatment increases future **preterm birth risk** (and cervical stenosis)\n  - Relevant for young women planning pregnancy",
   "redFlags": "- Suspected **invasive cancer** or **glandular abnormality (AIS)** → cone biopsy / gynae-oncology\n  - Not simple LLETZ",
   "cutoffs": [
    "**CIN1** → observe; **CIN2/3** → treat (LLETZ)",
    "Excision (esp. repeat/large/deep) → increased **preterm birth risk**"
   ],
   "mcqTrap": "- '**LLETZ for CIN1**' — usually **wrong**; observe low-grade\n- 'Reassure that LLETZ has **no obstetric consequences**' — **wrong**; raises **preterm birth risk**",
   "mnemonic": "1 = watch, 2/3 = LLETZ. LLETZ Lengthens the risk of preterm birth.",
   "source": "National Cervical Screening Program management guidelines, 2024–25",
   "tags": [
    "CIN",
    "colposcopy",
    "LLETZ",
    "preterm-birth",
    "cervical"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-pills'><span class='gv-pill'>CIN1 → observe</span><span class='gv-pill'>CIN2/3 (HSIL) → LLETZ</span><span class='gv-pill'>excision → preterm birth risk</span></div>",
   "id": "gyn-29",
   "title": "Colposcopy and CIN Management",
   "subtitle": "CIN1 often observed; treat CIN2/3; LLETZ raises preterm-birth risk"
  },
  {
   "topic": "HPV 16/18 positive -> DIRECT colposcopy (skip the wait)",
   "subarea": "Screening & HPV",
   "trap": "- Tempting wrong answer: 'repeat **HPV test in 12 months**'\n  - That is the pathway for OTHER oncogenic types with low-grade/normal cytology — NOT for 16/18\n- **HPV 16 or 18** = direct referral to **colposcopy** regardless of the reflex cytology result\n  - Even if cytology is **normal**",
   "whatFirst": "- **Type-specific result** drives the branch FIRST: is it **16/18** or 'other'?\n  - **16/18** → **colposcopy now**\n- Reflex cytology is still reported but does **not change** the colposcopy referral for 16/18",
   "discriminator": "- **16/18** are the highest-risk genotypes (cause ~**70–80%** of cervical cancer) — hence no 'watchful waiting'\n- **'Other oncogenic'** (31, 33, 45, 52, 58 etc.) carry lower immediate risk, so **cytology triages** them",
   "cutoffs": [
    "**HPV 16/18 detected** = colposcopy regardless of cytology",
    "Self-collected **16/18 positive**: still straight to colposcopy (LBC taken AT colposcopy, no return visit needed)"
   ],
   "redFlags": "- Do not 'reassure and rescreen in **5 years**' on a 16/18 positive even with normal cytology\n  - That **misses high-grade disease**",
   "mnemonic": "16/18 = 'straight to the scope' (the two worst types get fast-tracked).",
   "source": "NCSP Guidelines (Cancer Council Australia, updated Jan 2025); Dept of Health Summary Guide (Feb 2025)",
   "verified": true,
   "tags": [
    "cervical",
    "HPV1618",
    "colposcopy",
    "high-yield"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">CST result</div><div class=\"gv-step\">HPV 16/18 detected</div><div class=\"gv-step\">Colposcopy NOW (any cytology)</div></div>",
   "id": "gyn-17",
   "title": "HPV 16/18 Positive Pathway",
   "subtitle": "Direct colposcopy regardless of cytology; never a 12-month repeat"
  },
  {
   "topic": "HPV non-16/18 (other oncogenic) -> reflex LBC decides",
   "subarea": "Screening & HPV",
   "trap": "- Two opposite traps:\n  - (1) 'Refer **all HPV-positive** women to colposcopy' — **wrong**; only 16/18 and high-grade cytology go straight there\n  - (2) 'Rescreen in **5 years**' — **wrong**; other-oncogenic positive needs a **12-month repeat** (or colposcopy if cytology high-grade)",
   "whatFirst": "- **Other oncogenic HPV detected** → look at the **reflex cytology**:\n  - **High-grade** (pHSIL/HSIL or worse) → **colposcopy**\n  - **Low-grade or negative cytology** → repeat HPV test in **12 months** (NOT 5 years)",
   "discriminator": "- Branch is decided by **cytology grade**\n- The **12-month repeat** is the 'intermediate risk' pathway\n  - Persistence of HPV at 12 months then triggers **colposcopy**",
   "cutoffs": [
    "Other oncogenic + **high-grade cytology** = colposcopy",
    "Other oncogenic + **low-grade/negative cytology** = repeat HPV in **12 months**",
    "**Persistent** other-oncogenic at 12 months = colposcopy"
   ],
   "redFlags": "- **Self-collected sample** positive for 'other oncogenic' types CANNOT be reflexed (no cervical cells)\n  - The woman must return for a **clinician-collected LBC** sample",
   "mnemonic": "'Other = re-check in a year' unless cytology is already high-grade.",
   "source": "NCSP Guidelines (Cancer Council Australia, updated Jan 2025); RACGP screening flowcharts",
   "verified": true,
   "tags": [
    "cervical",
    "HPV-other",
    "reflex-LBC",
    "12-month-repeat"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>HPV result</th><th>Reflex cytology</th><th>Action</th></tr></thead><tbody><tr><td>16/18</td><td>any</td><td>Colposcopy now</td></tr><tr><td>Other oncogenic</td><td>High-grade</td><td>Colposcopy now</td></tr><tr><td>Other oncogenic</td><td>Low-grade / negative</td><td>Repeat HPV in <span class=\"gv-num\">12 mo</span></td></tr><tr><td>Not detected</td><td>—</td><td>Rescreen in <span class=\"gv-num\">5 yr</span></td></tr></tbody></table>",
   "id": "gyn-18",
   "title": "HPV Non-16/18 Positive Pathway",
   "subtitle": "Reflex cytology decides: repeat at 12 months vs colposcopy"
  },
  {
   "topic": "HPV vaccine: Gardasil 9, SINGLE dose (2023), school ~12-13",
   "subarea": "Screening & HPV",
   "trap": "- Tempting wrong answer: **'two/three doses'** — that is the OLD schedule\n  - Since **6 Feb 2023** the NIP gives a **single dose** of Gardasil 9 to immunocompetent people\n  - Delivered school-based at **~12–13 years**\n- Quoting the **2-dose** (or old 3-dose) schedule for a healthy adolescent is the classic outdated trap",
   "whatFirst": "- Healthy adolescent ~12–13 → **single dose Gardasil 9** (school program)\n- Catch-up funded up to and **including age 25**\n- Immunocompromised → **3 doses** (still funded)",
   "discriminator": "- **Single dose** applies only to the immunocompetent\n- Immunocompromised (e.g. HIV, transplant, significant immunodeficiency) still need **3 doses (0, 2, 6 months)**\n- **Gardasil 9** covers 9 types (6, 11, 16, 18, 31, 33, 45, 52, 58)\n  - Protects against ~**90%** of cervical cancers but NOT all\n  - Vaccinated women still require **cervical screening**",
   "cutoffs": [
    "**1 dose** (immunocompetent), from **6 Feb 2023**",
    "Age **~12–13** school-based",
    "Funded catch-up to and including **age 25** (was 19)",
    "Immunocompromised: **3 doses**"
   ],
   "redFlags": "- Do NOT tell a vaccinated woman she can **skip cervical screening**\n  - The vaccine does not cover every oncogenic type",
   "mnemonic": "9-valent, 1 dose, ~13 years - 'one and done at thirteen' (unless immunocompromised = three).",
   "source": "Australian Immunisation Handbook (HPV); Dept of Health 'Changes to HPV vaccine dose schedule' (6 Feb 2023)",
   "verified": true,
   "tags": [
    "HPV-vaccine",
    "Gardasil9",
    "single-dose",
    "2023-change",
    "high-yield"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Group</th><th>Doses</th></tr></thead><tbody><tr><td>Immunocompetent (school ~12-13, or catch-up to 25)</td><td><span class=\"gv-num\">1</span> dose</td></tr><tr><td>Immunocompromised</td><td><span class=\"gv-num\">3</span> doses</td></tr></tbody></table>",
   "id": "gyn-26",
   "title": "HPV Vaccine (Gardasil 9)",
   "subtitle": "Single dose since Feb 2023, school-based at age 12-13"
  },
  {
   "topic": "Postmenopausal bleeding is NEVER reassured by a normal cervical screen",
   "subarea": "Screening & HPV",
   "trap": "- Flagship gotcha — tempting wrong answer: **'normal cervical screen / normal Pap, reassure'**\n- **PMB = endometrial cancer until proven otherwise**\n- The cervical screen tests the **CERVIX** (and only HPV-related disease) — it says nothing about the **ENDOMETRIUM**\n- Always investigate the endometrium with **TVUS +/- endometrial sampling**",
   "whatFirst": "- Any postmenopausal bleeding → **transvaginal ultrasound** for endometrial thickness\n- Endometrial thickness **>4 mm** (or persistent/recurrent bleeding regardless of thickness) → **endometrial biopsy/hysteroscopy**\n- Do NOT route a PMB patient to **'cervical screening'**",
   "discriminator": "- **Cervical screen = cervix/HPV**; PMB work-up = **endometrium**\n- Different organs, different tests\n- A reassuringly normal CST does **not lower the probability of endometrial cancer** at all",
   "cutoffs": [
    "Endometrial thickness **≤4 mm** on TVUS = low risk (but persistent bleeding still needs sampling)",
    "**>4 mm** or recurrent PMB = endometrial sampling/hysteroscopy",
    "**~10%** of PMB is endometrial cancer"
   ],
   "redFlags": "- Recurrent PMB after a normal initial work-up → **hysteroscopy + biopsy**\n- Thickened/irregular endometrium → **hysteroscopy + biopsy**\n- Never **'watch and wait'**",
   "mnemonic": "PMB = think endoMetrium, not the Pap. The screen checks the neck, the cancer's in the body.",
   "source": "RANZCOG / RACGP 'The woman with postmenopausal bleeding'; eTG; Cancer Australia",
   "verified": true,
   "tags": [
    "gynae-oncology",
    "PMB",
    "endometrial",
    "red-flag",
    "cross-topic",
    "high-yield"
   ],
   "id": "gyn-27",
   "title": "Postmenopausal Bleeding",
   "subtitle": "Endometrial cancer until proven otherwise; screen tests cervix only"
  },
  {
   "topic": "Renewed NCSP: primary HPV test, not Pap, age 25-74, 5-yearly",
   "subarea": "Screening & HPV",
   "trap": "- Tempting wrong answer: **'Pap smear / LBC every 2 years from 18'**\n- Since **Dec 2017** the program is a **PRIMARY HPV test** (5-yearly, age 25–74)\n- Cytology is only a **REFLEX test** on HPV-positive samples\n- Don't pick **'start at 18'**, **'every 2 years'**, or **'cytology first'**",
   "whatFirst": "- For an asymptomatic woman, the test ordered is the **Cervical Screening Test (HPV PCR)**\n- Cytology is **automatic (reflex) only if HPV is detected** on a clinician-collected sample\n  - You do not order it separately",
   "discriminator": "- **Pap (cytology) = old program** (looks for abnormal cells)\n- **CST = HPV test** (looks for the causative virus)\n- HPV testing detects risk earlier → interval safely lengthened to **5 years**",
   "cutoffs": [
    "Start age **25**",
    "Continue to **74**",
    "Every **5 years** (if HPV not detected)",
    "Changed **Dec 2017** from 2-yearly Pap age 18–69"
   ],
   "redFlags": "- **Symptomatic women** (any abnormal bleeding, discharge, visible lesion) are NOT screened\n  - They are **investigated** regardless of screening status",
   "mnemonic": "25-74, every 5: 'quarter-century to retirement, high-five'.",
   "source": "National Cervical Screening Program Guidelines (Cancer Council Australia, updated Jan 2025, effective Apr 2025); Dept of Health Summary Guide for Healthcare Providers (Feb 2025)",
   "verified": true,
   "tags": [
    "screening",
    "cervical",
    "HPV",
    "NCSP",
    "high-yield"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Feature</th><th>OLD (pre-2017)</th><th>NEW (renewed NCSP)</th></tr></thead><tbody><tr><td>Test</td><td>Pap (cytology) primary</td><td>HPV primary, cytology reflex</td></tr><tr><td>Start age</td><td><span class=\"gv-num\">18</span> (or 2y after first sex)</td><td><span class=\"gv-num\">25</span></td></tr><tr><td>Interval</td><td>Every <span class=\"gv-num\">2</span> years</td><td>Every <span class=\"gv-num\">5</span> years</td></tr><tr><td>Cease</td><td>69</td><td><span class=\"gv-num\">70-74</span> exit test</td></tr></tbody></table>",
   "id": "gyn-15",
   "title": "Renewed National Cervical Screening Program",
   "subtitle": "Primary HPV test 5-yearly, age 25-74; not 2-yearly Pap"
  },
  {
   "topic": "Universal self-collection (all eligible since July 2022)",
   "subarea": "Screening & HPV",
   "trap": "- Tempting wrong answer: **'self-collection is only for under-screened / never-screened women'**\n  - Since **1 July 2022** it is offered to **ALL** screening-eligible people as an equally valid choice\n- Second trap: thinking self-collection gives a **cytology result**\n  - It tests **HPV ONLY** (no cervical cells), so positives have specific follow-up pathways",
   "whatFirst": "- Offer **self-collection (vaginal swab)** as a routine option for the 5-yearly CST\n- If HPV detected on self-collection:\n  - **16/18** → colposcopy (LBC taken there)\n  - **Other oncogenic** → recall for clinician-collected LBC",
   "discriminator": "- **Clinician-collected** sample can be reflexed straight to LBC\n- **Self-collected swab cannot** (no cervical epithelial cells)\n  - 'Other oncogenic' self-collect positives need a **return visit for cytology**",
   "cutoffs": [
    "Available to **ALL eligible** since **1 July 2022**",
    "Same **5-year** interval",
    "Can be offered at any time **in pregnancy**"
   ],
   "redFlags": "- Self-collection is a **SCREENING test only**\n  - Never use it to **'investigate' a symptomatic woman**",
   "mnemonic": "Self-collect = HPV only; if it's positive for 'other', she still has to come back for the cells.",
   "source": "NCSP (Cancer Council Australia / Dept of Health, 'Self-collection now available', 1 July 2022); Dept of Health Summary Guide (Feb 2025)",
   "verified": true,
   "tags": [
    "cervical",
    "self-collection",
    "2022-change",
    "high-yield"
   ],
   "id": "gyn-19",
   "title": "Self-Collection for Cervical Screening",
   "subtitle": "Offered to ALL eligible since July 2022, not just under-screened"
  },
  {
   "topic": "When to START cervical screening (age 25, not 'after first sex')",
   "subarea": "Screening & HPV",
   "trap": "- Tempting wrong answer: **'start screening 2 years after first sexual activity'** (the OLD rule)\n- In the renewed program, **age 25** is the universal start\n  - Regardless of sexual debut, HPV vaccination status, or number of partners\n- Vaccinated women **still screen** (Gardasil 9 doesn't cover all oncogenic types)",
   "whatFirst": "- Asymptomatic and **≥25** with a cervix → offer **CST**\n- **Under 25** and asymptomatic → do **NOT screen**\n  - Even if sexually active\n  - Even if previously screened under the old program\n  - Unless on a specific **surveillance pathway**",
   "discriminator": "- Old program tied first test to **sexual debut / age 18**\n- New program is purely **age 25** because screening under 25 causes net harm\n  - Overtreatment of transient HPV/lesions that **regress**",
   "cutoffs": [
    "Start at **25** regardless of sexual history",
    "First Nations and non-First Nations: same **age 25**",
    "**HPV-vaccinated** women still screen"
   ],
   "redFlags": "- A **symptomatic woman under 25** (e.g. persistent abnormal bleeding) is **investigated clinically**\n  - She is not 'too young to worry about'",
   "mnemonic": "Screening starts at 25 - full stop; sex life is irrelevant to the start date now.",
   "source": "NCSP Guidelines (Cancer Council Australia, updated Jan 2025); Dept of Health Summary Guide (Feb 2025)",
   "verified": true,
   "tags": [
    "screening",
    "cervical",
    "start-age",
    "vaccinated-still-screen"
   ],
   "mcqTrap": "- **'2 years after first intercourse'** — obsolete pre-2017 rule",
   "id": "gyn-16",
   "title": "Starting Cervical Screening",
   "subtitle": "Age 25 universally, not 2 years after first sex"
  },
  {
   "topic": "Symptomatic breast lump = TRIPLE TEST (not a mammogram alone)",
   "subarea": "Screening & HPV",
   "trap": "- Tempting wrong answer: **'normal mammogram, reassure / send to BreastScreen'**\n- A palpable lump is a **DIAGNOSTIC** problem, not a screening one\n  - Needs the **triple test** (clinical exam + imaging + biopsy/FNA core)\n- A normal mammogram does **NOT exclude cancer**\n  - **10–15% mammographically occult**, worse in dense breasts",
   "whatFirst": "- Palpable/symptomatic lump → **diagnostic pathway via GP/breast clinic (triple test)**\n  - NOT BreastScreen\n- BreastScreen explicitly **excludes symptomatic women**",
   "discriminator": "- **Screening** = asymptomatic, mammogram only\n- **Diagnostic** = symptomatic, full triple test\n- Triple test is positive if **ANY component is suspicious** → proceed to biopsy/excision",
   "cutoffs": [
    "**Triple test** = clinical exam + imaging (USS +/- mammogram) + needle biopsy (core preferred)",
    "Triple test sensitivity **>99.6%** when all three done",
    "Any **discordant or positive** component → biopsy/excise"
   ],
   "redFlags": "- **Discrete lump**, skin/nipple changes, bloody single-duct discharge, axillary node\n  - All bypass screening and go to **triple test**",
   "mnemonic": "Lump = triple test (feel it, image it, stick a needle in it).",
   "source": "Cancer Australia 'Investigation of a new breast symptom: a guide for GPs'; RACGP",
   "verified": true,
   "tags": [
    "breast",
    "triple-test",
    "symptomatic",
    "high-yield"
   ],
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Clinical exam</span><span class=\"gv-pill\">Imaging</span><span class=\"gv-pill\">Biopsy/FNA</span></div>",
   "id": "gyn-24",
   "title": "Symptomatic Breast Lump",
   "subtitle": "Triple test; a normal mammogram does NOT exclude cancer",
   "images": [
    {
     "src": "assets/img/dermatology_derm_paget_nipple_01.jpg",
     "caption": "Paget disease of nipple - eczematous nipple change",
     "alt": "Unilateral eczematous eroded scaly change of the nipple-areola (important differential for breast lump workup)",
     "credit": "Lily Chu, National Naval Medical Center Bethesda, Wikimedia Commons, Public domain (PD US Navy)"
    }
   ]
  },
  {
   "topic": "Symptomatic patient OVERRIDES a normal screen",
   "subarea": "Screening & HPV",
   "trap": "- Tempting wrong answer: **'recent normal cervical screen, reassure'**\n- A normal CST applies only to **asymptomatic women**\n- Any **abnormal vaginal bleeding** (intermenstrual, postcoital, postmenopausal), persistent discharge, or visible/suspicious cervix demands **investigation**\n  - Irrespective of screening result",
   "whatFirst": "- Identify if the patient is **SYMPTOMATIC first**\n  - Symptomatic → **diagnostic work-up** (examine, co-test, refer/biopsy)\n  - Asymptomatic → **screen on schedule**\n- Never apply a **screening interval** to a symptomatic woman",
   "discriminator": "- Screening tests are for **asymptomatic populations** and have a false-negative rate\n- A **visible lesion is biopsied** even if the CST is HPV-negative",
   "cutoffs": [
    "**Symptoms = investigate** (not screen)",
    "A normal CST **never excludes** a symptomatic cancer"
   ],
   "redFlags": "- **Postcoital bleeding**, persistent intermenstrual bleeding, or a suspicious-looking cervix\n  - Refer for **colposcopy/biopsy** regardless of CST",
   "mnemonic": "Screen the well, investigate the unwell.",
   "source": "NCSP Guidelines (Cancer Council Australia, updated Jan 2025); RANZCOG",
   "verified": true,
   "tags": [
    "cervical",
    "symptomatic-override",
    "red-flag",
    "high-yield"
   ],
   "mcqTrap": "- **'Normal Pap 6 months ago, reassure'** in a woman with postcoital bleeding — always wrong",
   "id": "gyn-20",
   "title": "Symptomatic Patient vs Normal Screen",
   "subtitle": "Symptoms override a normal screen; investigate, don't reassure"
  },
  {
   "topic": "Abnormal uterine bleeding - PALM-COEIN: 'dysfunctional' is a banned word, and who gets the endometrium sampled",
   "subarea": "Menstrual & PCOS",
   "trap": "- Tempting MCQ answer: label heavy/irregular bleeding **'dysfunctional uterine bleeding' and reassure** — WRONG\n  - The term **DUB is obsolete**; FIGO replaced it with **PALM-COEIN**\n- Exam-catching layer: must actively assess the **endometrium** (biopsy +/- TVUS/hysteroscopy) in:\n  - Any woman with AUB who is **≥45**, OR\n  - **<45 WITH risk factors**: persistent/unresponsive bleeding, unopposed-oestrogen exposure (obesity, PCOS, anovulation, tamoxifen, nulliparity, type 2 diabetes, Lynch)\n- **Intermenstrual or postcoital bleeding** is its own red flag\n  - Think cervix — screen/refer, not 'hormonal'",
   "whatFirst": "- Reproductive-age woman with AUB: do **beta-hCG FIRST** (pregnancy/ectopic)\n- Then **speculum + cervical screen** if due\n- Then decide on **endometrial assessment** by age/risk",
   "mcqTrap": "- **'Reassure — dysfunctional uterine bleeding'** in a 47-year-old with new heavy bleeding — wrong\n  - Age **≥45** mandates **endometrial sampling** to exclude hyperplasia/cancer",
   "discriminator": "- **PALM (structural)** is found on imaging/biopsy\n- **COEIN (non-structural)** is a diagnosis of exclusion after structure is cleared",
   "redFlags": "- Postcoital/intermenstrual bleeding\n- **Postmenopausal bleeding**\n- **Age ≥45**\n- Failed medical therapy\n- **Unopposed-oestrogen risk factors**",
   "cutoffs": [
    "Sample endometrium if age **≥45**",
    "or **<45 with risk factors** / persistent unresponsive bleeding"
   ],
   "mnemonic": "PALM-COEIN: PALM you can Picture/biopsy (structural: Polyp, Adenomyosis, Leiomyoma, Malignancy/hyperplasia), COEIN you Cannot (non-structural: Coagulopathy, Ovulatory, Endometrial, Iatrogenic, Not-classified).",
   "source": "FIGO PALM-COEIN classification (AUB); eTG (Therapeutic Guidelines) Abnormal uterine bleeding, current; RANZCOG.",
   "verified": true,
   "tags": [
    "AUB",
    "PALM-COEIN",
    "endometrial sampling"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>PALM (structural)</th><th>COEIN (non-structural)</th></tr></thead><tbody><tr><td>Polyp</td><td>Coagulopathy</td></tr><tr><td>Adenomyosis</td><td>Ovulatory dysfunction</td></tr><tr><td>Leiomyoma (fibroid)</td><td>Endometrial</td></tr><tr><td>Malignancy / hyperplasia</td><td>Iatrogenic</td></tr><tr><td></td><td>Not yet classified</td></tr></tbody></table>",
   "id": "gyn-31",
   "title": "Abnormal Uterine Bleeding (PALM-COEIN)",
   "subtitle": "DUB is obsolete; you must sample the endometrium"
  },
  {
   "topic": "Amenorrhoea - the answer is ALWAYS pregnancy test first (every time)",
   "subarea": "Menstrual & PCOS",
   "trap": "- Whatever the vignette (teenager, athlete, woman on the pill, recent stress, suspected PCOS) — the **FIRST investigation** in any amenorrhoea is **beta-hCG**\n- The exam loves to bury a **pregnancy** in a 'classic PCOS' or 'hypothalamic' stem\n  - Offers FSH/LH/prolactin/USS as the tempting 'workup' answer\n  - Those come **SECOND**\n- Only after hCG is negative do you order **FSH/LH, prolactin, TSH, oestradiol** (+/- androgens, pelvic USS)",
   "whatFirst": "- **beta-hCG FIRST**, always\n- Then **FSH/LH + prolactin + TSH + oestradiol**\n- Add **testosterone/SHBG** if hyperandrogenic features",
   "mcqTrap": "- Choosing **'measure FSH and LH'** as the first step in a 19-year-old with 4 months of no periods — wrong\n  - **Pregnancy test precedes all hormonal workup**",
   "discriminator": "- **High FSH** = ovarian failure (POI/Turner)\n- **Low/normal FSH** = central (hypothalamic/pituitary, e.g. functional hypothalamic amenorrhoea, hyperprolactinaemia)\n- Very high prolactin + visual symptoms → **macroprolactinoma needing MRI**",
   "redFlags": "- **Galactorrhoea + headache/visual field loss** (prolactinoma)\n- **Virilisation** (androgen-secreting tumour/CAH)\n- Very low BMI/athlete (**functional hypothalamic**)",
   "mnemonic": "'No period? Pee on a stick before you draw blood.'",
   "source": "eTG / Jean Hailes amenorrhoea pathways; four commonest causes (Aus): PCOS, functional hypothalamic, hyperprolactinaemia, POI.",
   "verified": true,
   "tags": [
    "amenorrhoea",
    "beta-hCG",
    "workup-sequence"
   ],
   "id": "gyn-33",
   "title": "Amenorrhoea Workup",
   "subtitle": "Beta-hCG is always the first investigation"
  },
  {
   "topic": "Androgen insensitivity syndrome (AIS) — absent uterus vignette",
   "subarea": "Menstrual & PCOS",
   "trap": "- Diagnosing **'Müllerian agenesis' (MRKH) without checking karyotype**\n- Or **removing testes too early**\n- AIS is **46,XY** with intra-abdominal testes",
   "whatFirst": "- Primary amenorrhoea + NORMAL breast development + ABSENT uterus/short blind vagina + **scant/absent pubic & axillary hair**\n  - → karyotype **46,XY** + testes → **AIS**",
   "discriminator": "- **AIS (46,XY)** vs **MRKH/Müllerian agenesis (46,XX)**: both have absent uterus + normal breasts, but:\n  - AIS: **46,XY karyotype**, testes, **SCANT pubic/axillary hair**\n  - MRKH: normal female karyotype, ovaries, **normal pubic hair**",
   "redFlags": "- Intra-abdominal testes carry **malignancy (germ cell tumour) risk**\n  - → **gonadectomy**, but typically TIMED after puberty completes\n  - Testes drive feminisation via **aromatised oestrogen**",
   "cutoffs": [
    "Karyotype **46,XY**",
    "Gonadectomy usually deferred until **after pubertal feminisation**"
   ],
   "mcqTrap": "- **'Remove the gonads immediately at diagnosis'** in an adolescent with complete AIS — usually wrong\n  - Defer until **after puberty** so endogenous oestrogen completes development\n- **'MRKH' without karyotype** — misses the 46,XY clue (scant pubic hair)",
   "mnemonic": "AIS = XY but looks female; testes In Situ; scant hair, no uterus.",
   "source": "RANZCOG primary amenorrhoea / disorders of sex development, 2024",
   "tags": [
    "AIS",
    "primary-amenorrhoea",
    "karyotype",
    "absent-uterus",
    "gonadectomy"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-pills'><span class='gv-pill'>46,XY</span><span class='gv-pill'>normal breasts</span><span class='gv-pill'>absent uterus</span><span class='gv-pill'>scant pubic hair</span><span class='gv-pill'>gonadectomy after puberty</span></div>",
   "id": "gyn-49",
   "title": "Androgen Insensitivity Syndrome",
   "subtitle": "46,XY with absent uterus; karyotype before MRKH"
  },
  {
   "topic": "Asherman syndrome — secondary amenorrhoea post-instrumentation",
   "subarea": "Menstrual & PCOS",
   "trap": "- Attributing post-D&C/ERPC amenorrhoea to a **hormonal cause**\n- Asherman is a **STRUCTURAL (outflow) cause** — hormones are NORMAL\n  - The **progestogen challenge is NEGATIVE**",
   "whatFirst": "- Recognise the history: amenorrhoea/hypomenorrhoea **AFTER uterine instrumentation** (often postpartum/post-evacuation)\n- Normal hormonal profile\n- **Hysteroscopy** is diagnostic AND therapeutic (adhesiolysis)",
   "discriminator": "- Asherman = **normal FSH/LH/oestrogen/prolactin**\n- **NEGATIVE progestogen** (and even oestrogen-progestogen) withdrawal bleed = **end-organ/outflow problem**\n- Endocrine causes (POI, hyperprolactinaemia, hypothalamic) have **abnormal hormones**",
   "redFlags": "- Recent **D&C, ERPC, retained products evacuation, or endometritis** preceding the amenorrhoea = the clue",
   "cutoffs": [
    "**Negative progestogen challenge + normal hormones** = structural (Asherman / outflow)"
   ],
   "mcqTrap": "- **'Hypothalamic amenorrhoea' or 'PCOS'** for a woman amenorrhoeic since her postpartum D&C with normal bloods — wrong\n  - The **instrumentation history + negative challenge** points to intrauterine adhesions",
   "mnemonic": "Asherman = Adhesions After a scrape; hormones normal, challenge fails.",
   "source": "RANZCOG amenorrhoea pathways, 2024",
   "tags": [
    "amenorrhoea",
    "Asherman",
    "structural",
    "hysteroscopy",
    "discriminator"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-flow'><div class='gv-step'>Amenorrhoea after D&C/ERPC</div><div class='gv-step'>Normal hormones + NEGATIVE progestogen challenge</div><div class='gv-step'>Hysteroscopy = diagnose + treat adhesions</div></div>",
   "id": "gyn-44",
   "title": "Asherman Syndrome",
   "subtitle": "Structural outflow cause; hormones normal, progestogen challenge negative"
  },
  {
   "topic": "Endometrial ablation — contraindications & contraception caveat",
   "subarea": "Menstrual & PCOS",
   "trap": "- Offering **ablation** to a woman who may want future fertility — wrong\n- Assuming ablation **= sterilisation** so no contraception needed — also wrong",
   "whatFirst": "- Offer ablation only when **childbearing is COMPLETE**\n- **Endometrial pathology must be excluded** before ablation\n- Still advise **reliable contraception** afterwards",
   "discriminator": "- Ablation is **not for women wanting future fertility**\n- Ablation is **NOT sterilising** — pregnancy can still occur\n  - Any subsequent pregnancy is **high-risk** (abnormal placentation, scarring)\n  - Therefore **contraception still required** post-ablation\n- **Contraindicated** if endometrial pathology not excluded or uterus too large/distorted",
   "redFlags": "- **Postmenopausal bleeding** / suspected hyperplasia or malignancy → sample/exclude before considering ablation\n- Do **not ablate undiagnosed pathology**",
   "cutoffs": [
    "Pre-requisite: **completed childbearing** + pathology excluded",
    "Post-ablation pregnancy = **high-risk** → contraception still needed"
   ],
   "mcqTrap": "- '**No contraception needed** after endometrial ablation' — wrong; pregnancy can still occur and is dangerous\n- '**Ablation for a 32-year-old** who may want children' — wrong",
   "mnemonic": "Ablation: family Complete, pathology Cleared, Contraception still required.",
   "source": "RANZCOG endometrial ablation / HMB, 2024",
   "tags": [
    "ablation",
    "HMB",
    "contraception",
    "contraindication",
    "surgery"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-pills'><span class='gv-pill'>Childbearing complete</span><span class='gv-pill'>pathology excluded</span><span class='gv-pill'>NOT sterilising → still contracept</span></div>",
   "id": "gyn-52",
   "title": "Endometrial Ablation",
   "subtitle": "Not if future fertility wanted; still needs contraception"
  },
  {
   "topic": "Endometriosis - empirical treatment FIRST; laparoscopy is the diagnostic reference standard; a normal scan does NOT exclude it",
   "subarea": "Menstrual & PCOS",
   "trap": "- **(1)** Laparoscopy with histology is the **diagnostic reference standard**, but current Australian practice is to start **empirical medical therapy BEFORE laparoscopy**\n  - No surgical confirmation needed to begin treatment\n- **(2)** A **normal pelvic USS (or MRI) does NOT exclude endometriosis**\n  - Superficial peritoneal disease is not seen on imaging\n  - USS mainly detects **endometriomas and deep disease**\n  - 'Normal scan → not endometriosis' is **wrong**",
   "whatFirst": "- Suspected endometriosis: trial **empirical medical therapy first** (NSAIDs + hormonal suppression)\n  - Hormonal options: **COC continuous/cyclical** or progestogen, +/- LNG-IUS\n- Reserve **laparoscopy** for failed therapy, diagnostic uncertainty, or fertility planning — via shared decision-making",
   "mcqTrap": "- '**Pelvic ultrasound normal → endometriosis excluded**' — wrong: normal USS doesn't exclude it\n- '**Must do laparoscopy before any treatment**' — wrong: empirical treatment precedes surgery",
   "discriminator": "- **Adenomyosis** (uterus) vs **endometriosis** (ectopic implants): both cause secondary dysmenorrhoea\n- Adenomyosis: classically **diffusely bulky, tender, 'boggy' uterus** with heavy bleeding\n- Endometriosis: **nodularity/tenderness in the pouch of Douglas**, deep dyspareunia, may have a normal-sized uterus",
   "redFlags": "- **Cyclical bowel/bladder symptoms**\n- **Deep dyspareunia**\n- **Infertility**\n- Severe pain **unresponsive to first-line therapy**",
   "cutoffs": [
    "**Empirical medical Rx** before laparoscopy",
    "**Normal TVUS/MRI does NOT exclude** endometriosis"
   ],
   "mnemonic": "'Treat first, laparoscope later; a clear scan clears nothing.'",
   "source": "Australian Living Evidence Guideline: Endometriosis (RANZCOG, 2025, replacing 2021 CPG); eTG.",
   "verified": true,
   "tags": [
    "endometriosis",
    "laparoscopy",
    "empirical treatment",
    "ultrasound"
   ],
   "id": "gyn-41",
   "title": "Endometriosis",
   "subtitle": "Treat empirically first; normal scan does NOT exclude it"
  },
  {
   "topic": "Fibroids vs adenomyosis - the discriminators that decide the MCQ",
   "subarea": "Menstrual & PCOS",
   "trap": "- Both cause **heavy menstrual bleeding** +/- bulk symptoms; the stem overlaps deliberately\n- **Fibroid (leiomyoma):** uterus enlarged and **IRREGULAR/lumpy/firm**\n  - HMB +/- pressure symptoms\n  - Imaging: **discrete well-defined masses**\n  - Usually **non-tender** unless degenerating/torsing\n- **Adenomyosis:** classically multiparous woman ~**40s**\n  - Uterus **diffusely enlarged, GLOBULAR, soft/'boggy' and TENDER**\n  - HMB **WITH significant dysmenorrhoea**\n  - MRI/USS: **diffuse myometrial thickening / junctional-zone widening**, no discrete mass\n- Discriminating words: **'irregular/lumpy firm uterus + pressure'** = fibroids; **'globular boggy tender uterus + painful heavy periods'** = adenomyosis",
   "whatFirst": "- **TVUS** first-line imaging for both\n- **MRI** if diagnosis unclear, for adenomyosis, or for surgical planning\n- Exclude **pregnancy** and assess endometrium per age/risk",
   "mcqTrap": "- Calling a **uniformly enlarged tender uterus with painful heavy periods 'fibroids'** — wrong\n  - Globular + boggy + tender + dysmenorrhoea = **adenomyosis**\n  - Fibroids give an **irregular, usually non-tender, lumpy** uterus",
   "discriminator": "- **Fibroid** = irregular/lumpy, firm, discrete mass, pressure symptoms\n- **Adenomyosis** = globular, boggy, tender, diffuse, painful heavy periods",
   "cutoffs": [
    "**TVUS** first-line for both",
    "**MRI** for adenomyosis / surgical planning"
   ],
   "mnemonic": "Adenomyosis = 'A' for Achy/boggy (tender, painful). Fibroid = Firm & irregular.",
   "source": "RANZCOG; eTG; Australian Living Evidence Guideline: Endometriosis (2025, covers adenomyosis).",
   "verified": true,
   "tags": [
    "fibroids",
    "adenomyosis",
    "discriminator",
    "HMB"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Feature</th><th>Fibroid (leiomyoma)</th><th>Adenomyosis</th></tr></thead><tbody><tr><td>Uterus</td><td>Irregular, lumpy, firm</td><td>Globular, boggy, soft</td></tr><tr><td>Tenderness</td><td>Usually non-tender</td><td>Tender</td></tr><tr><td>Hallmark symptom</td><td>HMB + pressure/bulk</td><td>HMB + dysmenorrhoea</td></tr><tr><td>Imaging</td><td>Discrete mass</td><td>Diffuse myometrial thickening / wide junctional zone</td></tr></tbody></table>",
   "id": "gyn-42",
   "title": "Fibroids vs Adenomyosis",
   "subtitle": "Irregular lumpy uterus vs globular tender uterus"
  },
  {
   "topic": "Heavy menstrual bleeding - first-line is the LNG-IUS (Mirena), NOT hysterectomy or COC",
   "subarea": "Menstrual & PCOS",
   "trap": "- In a woman with HMB, no structural cause, not wanting pregnancy, single-best first-line is the **LNG-IUS (Mirena)**\n- Tempting wrong options:\n  - **COC** 'because it's easy' — not first-line\n  - **Hysterectomy** 'because she's finished her family' — not first-line\n  - **Endometrial ablation** — not first-line\n- LNG-IUS reduces menstrual blood loss most (**~70–95%**), beats all oral options\n- **Tranexamic acid** = best NON-hormonal / on-demand option if she wants to conceive or declines hormones\n  - Taken **only on bleeding days**, NOT continuously\n- **Hysterectomy** is definitive but **last-line**",
   "whatFirst": "- Exclude **pregnancy** and structural cause (TVUS)\n- Assess **endometrium** if >=45 or risk factors\n- Treat **iron deficiency**\n- THEN offer **LNG-IUS first-line**",
   "mcqTrap": "- '**Refer for hysterectomy**' as first-line for idiopathic HMB — wrong\n- '**Commence COC**' as first-line — wrong\n  - LNG-IUS is first-line; surgery reserved for failed/declined medical therapy",
   "discriminator": "- **LNG-IUS** = best ongoing/contraceptive option\n- **Tranexamic acid** = best on-demand non-hormonal option (wants fertility)\n- Both **beat COC** for blood-loss reduction",
   "cutoffs": [
    "**LNG-IUS** first-line",
    "**Tranexamic acid ~1–1.5 g, 2–4x daily** on bleeding days only",
    "**Max ~4 g/day**, max **4–5 days** per cycle"
   ],
   "mnemonic": "'Mirena first, knife last' for HMB.",
   "source": "RANZCOG HMB guidance; eTG Heavy menstrual bleeding (current); aligned with NICE NG88.",
   "verified": true,
   "tags": [
    "HMB",
    "LNG-IUS",
    "tranexamic acid"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Exclude pregnancy + structural cause + treat iron deficiency</div><div class=\"gv-step\">LNG-IUS first-line (no fertility wish)</div><div class=\"gv-step\">Tranexamic acid / NSAID / COC if declines IUS or wants fertility</div><div class=\"gv-step\">Surgery (ablation / hysterectomy) last-line</div></div>",
   "id": "gyn-32",
   "title": "Heavy Menstrual Bleeding",
   "subtitle": "LNG-IUS is first-line, not COC or hysterectomy"
  },
  {
   "topic": "Hyperprolactinaemia / prolactinoma in amenorrhoea-galactorrhoea",
   "subarea": "Menstrual & PCOS",
   "trap": "- Sending a **macroprolactinoma straight to surgery** — wrong\n- Forgetting to check **TSH** (hypothyroidism raises prolactin)\n- Forgetting to **exclude drug causes** before imaging/treatment",
   "whatFirst": "- Amenorrhoea ± galactorrhoea → check **PROLACTIN and TSH** (and pregnancy test)\n- **Review drugs**\n- Markedly raised prolactin → **MRI pituitary**",
   "discriminator": "- **Drug-induced** (antipsychotics, metoclopramide, SSRIs, opioids) and **primary hypothyroidism** raise prolactin and mimic prolactinoma\n  - Exclude these **before imaging/treatment**\n- Prolactinoma treatment is **MEDICAL first**",
   "redFlags": "- **Bitemporal hemianopia / headache** = macroadenoma compressing the optic chiasm\n- Very high prolactin (e.g. **>5000 mIU/L**) suggests **macroprolactinoma**",
   "cutoffs": [
    "First-line treatment = **dopamine agonist (cabergoline)**, even for macroprolactinoma — NOT surgery first",
    "**MRI** when prolactin markedly elevated / mass suspected"
   ],
   "mcqTrap": "- '**Trans-sphenoidal surgery is first-line** for macroprolactinoma' — wrong; **dopamine agonist (cabergoline)** shrinks most and is first-line\n- '**Don't bother checking TSH**' — wrong; hypothyroidism is a reversible cause",
   "mnemonic": "Prolactin up → Cabergoline (Crush it medically), not the knife. Always check TSH + drugs.",
   "source": "RANZCOG / Endocrine Society of Australia; eTG, 2024",
   "tags": [
    "prolactinoma",
    "amenorrhoea",
    "galactorrhoea",
    "cabergoline",
    "drug-cause"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-pills'><span class='gv-pill'>Check prolactin + TSH</span><span class='gv-pill'>Cabergoline first (not surgery)</span><span class='gv-pill'>bitemporal hemianopia = macroadenoma</span></div>",
   "id": "gyn-45",
   "title": "Hyperprolactinaemia and Prolactinoma",
   "subtitle": "Check TSH and drugs; macroprolactinoma is medically treated"
  },
  {
   "topic": "Non-hormonal HMB options when fertility wanted (TXA / mefenamic acid)",
   "subarea": "Menstrual & PCOS",
   "trap": "- Recommending **LNG-IUS (Mirena)** to a woman with HMB who is **trying to conceive** — contraceptive, inappropriate\n- Recommending **COC** to a woman with HMB who is trying to conceive — contraceptive, inappropriate",
   "whatFirst": "- If the woman **wants to conceive**, switch to **NON-HORMONAL, non-contraceptive options** taken during menses\n  - **Tranexamic acid** and/or **mefenamic acid** (an NSAID)",
   "discriminator": "- The **'wants to conceive' modifier flips the answer**\n- **LNG-IUS** = first-line for HMB generally, but **contraceptive**\n- **TXA (antifibrinolytic)** and **mefenamic acid** (reduces flow + dysmenorrhoea) don't impair fertility\n  - Taken **only on bleeding days**",
   "redFlags": "- **TXA contraindicated** with active VTE/thromboembolic disease\n- Always **exclude structural causes/endometrial pathology** in the HMB workup",
   "cutoffs": [
    "**TXA + NSAID** taken only during menstruation",
    "Both are **fertility-preserving** (non-contraceptive)"
   ],
   "mcqTrap": "- '**Insert a Mirena (LNG-IUS)**' for a woman with HMB who wants pregnancy this year — wrong; it **prevents conception**\n  - Choose **tranexamic acid ± mefenamic acid**",
   "mnemonic": "Wants a baby? → TXA + NSAID (no hormones, no Mirena).",
   "source": "RANZCOG / eTG heavy menstrual bleeding, 2024",
   "tags": [
    "HMB",
    "tranexamic-acid",
    "mefenamic-acid",
    "fertility",
    "fork"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-flow'><div class='gv-step'>HMB + wants to conceive</div><div class='gv-step'>NOT Mirena/COC (contraceptive)</div><div class='gv-step'>Tranexamic acid ± mefenamic acid during menses</div></div>",
   "id": "gyn-51",
   "title": "Non-Hormonal HMB Options",
   "subtitle": "Tranexamic acid or mefenamic acid when fertility is wanted"
  },
  {
   "topic": "Ovarian hyperstimulation syndrome (OHSS) recognition",
   "subarea": "Menstrual & PCOS",
   "trap": "- Missing the **recent IVF link** and treating abdominal distension + ascites as primary GI pathology\n- Giving **diuretics** — worsens haemoconcentration",
   "whatFirst": "- Recognise the **'recent ovulation induction / IVF' clue**\n- Assess for **haemoconcentration, ascites, hypovolaemia**\n- **Supportive care + VTE prophylaxis**\n- Severe → **admit**",
   "discriminator": "- Post-IVF/ovulation-induction woman with **abdominal distension, ascites, nausea, oliguria, raised haematocrit**\n- The **fertility-treatment history** distinguishes it from ovarian torsion/ascites of other cause",
   "redFlags": "- **Haemoconcentration (high Hct)**\n- **Oliguria/renal impairment**\n- **Pleural effusion / dyspnoea**\n- **VTE** (hypercoagulable + haemoconcentration) → severe/critical OHSS → admit + **thromboprophylaxis**",
   "cutoffs": [
    "Highest risk: within **~1–2 weeks** of hCG trigger / oocyte retrieval",
    "**VTE prophylaxis** indicated due to haemoconcentration + oestrogen"
   ],
   "mcqTrap": "- '**Give a diuretic** for the ascites/oliguria' — wrong\n  - Patient is **intravascularly DEPLETED** (third-spacing) — diuresis worsens it and **VTE risk**\n  - Manage fluids carefully, give **thromboprophylaxis**",
   "mnemonic": "OHSS = recent IVF + ascites + thick blood (haemoconcentration) + clot risk.",
   "source": "RANZCOG / Fertility Society of Australia OHSS, 2024",
   "tags": [
    "OHSS",
    "IVF",
    "acute",
    "VTE",
    "haemoconcentration"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-pills'><span class='gv-pill'>Recent IVF/trigger</span><span class='gv-pill'>ascites + high Hct</span><span class='gv-pill'>VTE risk</span><span class='gv-pill'>no diuretics</span></div>",
   "id": "gyn-50",
   "title": "Ovarian Hyperstimulation Syndrome",
   "subtitle": "Recent IVF with ascites; never give diuretics"
  },
  {
   "topic": "PCOS - letrozole is FIRST-LINE ovulation induction (not clomiphene, not metformin)",
   "subarea": "Menstrual & PCOS",
   "trap": "- For anovulatory infertility in PCOS, **letrozole (aromatase inhibitor) is first-line** ovulation induction\n- Trap: choosing **clomiphene** 'because that's the classic answer' — now **second-line**\n- Trap: choosing **metformin** as the ovulation answer — metformin is an **ADJUNCT** (useful for metabolic features, not primary ovulation agent)\n- **Weight loss / lifestyle** is first if overweight — even **5–10% loss** can restore ovulation\n- Letrozole is used **off-label** in Australia but is **guideline-recommended first-line**",
   "whatFirst": "- **Lifestyle/weight optimisation first** if overweight\n- Then **letrozole** for ovulation induction",
   "mcqTrap": "- '**Clomiphene citrate**' or '**metformin**' as first-line ovulation induction in PCOS — wrong\n  - **Letrozole** is first-line\n  - Clomiphene (+/- metformin) is **second-line**\n  - Metformin alone is **adjunct**",
   "discriminator": "- **Ovulation/fertility** answer = **letrozole**\n- **Metabolic/insulin-resistance** + adjunct answer = **metformin**\n- **Menstrual regulation/contraception** (no fertility wish) = **COC**",
   "cutoffs": [
    "**Letrozole** first-line",
    "**Clomiphene (+/- metformin)** second-line",
    "**Metformin** = adjunct / metabolic"
   ],
   "mnemonic": "'Let-rozole lets you ovulate' - first-line.",
   "source": "2023 International PCOS Guideline (Teede/Monash) - 'letrozole should be first-line pharmacological treatment for ovulation induction'.",
   "verified": true,
   "tags": [
    "PCOS",
    "letrozole",
    "ovulation induction",
    "metformin"
   ],
   "id": "gyn-39",
   "title": "Ovulation Induction in PCOS",
   "subtitle": "Letrozole is first-line, not clomiphene or metformin"
  },
  {
   "topic": "PCOS in ADOLESCENTS - ultrasound and AMH are NOT used (the big gotcha)",
   "subarea": "Menstrual & PCOS",
   "trap": "- In **adolescents**, the **Rotterdam 2-of-3 rule does NOT apply**\n- Need **BOTH** irregular cycles (ovulatory dysfunction) AND **hyperandrogenism**\n- **Ultrasound morphology and AMH are NOT used** to diagnose PCOS in adolescents\n  - Poor specificity; polycystic-appearing ovaries are **physiologically common** after menarche → overdiagnosis\n- Where features are present but incomplete, label **'at risk'** and review — do not apply a **lifelong PCOS label** prematurely",
   "whatFirst": "- Need **BOTH ovulatory dysfunction AND hyperandrogenism**\n- Do **NOT order/interpret ovarian ultrasound or AMH** for the diagnosis in adolescents",
   "mcqTrap": "- Diagnosing PCOS in a **15-year-old** (2 years post-menarche) on basis of **irregular cycles + polycystic ovaries on USS** — wrong\n  - USS morphology and AMH are **not valid** for adolescent diagnosis\n  - She needs **hyperandrogenism too**",
   "discriminator": "- **Adult** = 2 of 3 (USS/AMH allowed)\n- **Adolescent** = must have **BOTH** cycle irregularity AND hyperandrogenism; **no USS/AMH**",
   "cutoffs": [
    "Adolescent: **BOTH** irregular cycles + hyperandrogenism required",
    "**USS morphology / AMH not used** for adolescent diagnosis",
    "PCOM only assessable **>=8 yrs post-menarche**"
   ],
   "mnemonic": "Teens need 'two real features, no pictures' (clinical only).",
   "source": "2023 International Evidence-based PCOS Guideline (Teede/Monash); MJA 2024.",
   "verified": true,
   "tags": [
    "PCOS",
    "adolescent",
    "AMH",
    "ultrasound"
   ],
   "id": "gyn-37",
   "title": "PCOS in Adolescents",
   "subtitle": "Ultrasound and AMH are NOT used to diagnose"
  },
  {
   "topic": "PCOS - Rotterdam 2-of-3, what you must EXCLUDE first, and the AMH update",
   "subarea": "Menstrual & PCOS",
   "trap": "- PCOS needs **2 of 3 (Rotterdam)**: (1) oligo/anovulation, (2) clinical or biochemical hyperandrogenism, (3) **PCOM**\n- BUT it is a **diagnosis of EXCLUSION** — before diagnosing, exclude mimics:\n  - **Thyroid disease** (TSH)\n  - **Hyperprolactinaemia** (prolactin)\n  - **Non-classical CAH** (17-hydroxyprogesterone)\n  - **Cushing's syndrome / androgen-secreting tumour** (especially with rapid virilisation or very high testosterone)\n- UPDATE **(2023 international guideline, Australian-led — Teede/Monash):** serum **AMH** (above assay reference interval) can now be used as an **alternative to ultrasound for PCOM** in **ADULTS ONLY**\n- On TVUS, **PCOM = >=20 follicles (2–9 mm) per ovary** OR **ovarian volume >=10 mL** (using >=8 MHz transducer)",
   "whatFirst": "- Confirm **2 of 3**, then **EXCLUDE thyroid/prolactin/CAH/Cushing** (and pregnancy) before labelling PCOS",
   "mcqTrap": "- Diagnosing PCOS straight off an **ultrasound showing polycystic ovaries** — wrong\n  - PCOM alone (**1 of 3**) is not PCOS\n  - **Mimics (thyroid, prolactin, CAH, Cushing)** must be excluded first",
   "discriminator": "- **Rapid-onset virilisation**, very high testosterone, or signs of **Cushing's** point AWAY from PCOS\n  - Investigate for **androgen-secreting tumour or CAH** — do not diagnose PCOS",
   "cutoffs": [
    "**2 of 3** Rotterdam features required",
    "PCOM = **>=20 follicles/ovary** OR **ovarian volume >=10 mL**",
    "**AMH** (above reference interval) may replace USS in adults **(2023)**"
   ],
   "mnemonic": "Exclude 'CPR-T': Cushing, Prolactin, congenital adrenal hyperplasia (Raised 17-OHP), Thyroid.",
   "source": "2023 International Evidence-based PCOS Guideline (Teede/Monash; Jean Hailes); MJA 2024 Australian perspective (Teede).",
   "verified": true,
   "tags": [
    "PCOS",
    "Rotterdam",
    "AMH",
    "exclusion"
   ],
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Oligo/anovulation</span><span class=\"gv-pill\">Hyperandrogenism</span><span class=\"gv-pill\">PCOM (USS or AMH, adults)</span></div>",
   "id": "gyn-36",
   "title": "Polycystic Ovary Syndrome",
   "subtitle": "Rotterdam 2-of-3, but a diagnosis of exclusion",
   "images": [
    {
     "src": "assets/img/endocrine_acanthosis_nigricans_axilla_01.jpg",
     "alt": "Acanthosis nigricans in the axilla, a sign of insulin resistance in PCOS",
     "credit": "Mark F. Brady; Prashanth Rawla, CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "Postmenopausal bleeding - never 'reassure'; TVUS endometrial thickness and the 4 mm rule (now combined with biopsy)",
   "subarea": "Menstrual & PCOS",
   "trap": "- Any **postmenopausal bleeding (PMB)** = endometrial cancer until proven otherwise — the answer is **never 'reassure' or 'observe'**\n- Investigate with **TVUS for endometrial thickness PLUS endometrial assessment**\n- **Endometrial thickness <=4 mm** has a high negative predictive value, BUT the thin-scan-only exception is **NARROW**:\n  - TVUS alone (no biopsy) acceptable **only for a SINGLE PMB episode** with a fully-visualised endometrium <=4 mm, **no high-risk factors**, AND counselling that recurrence needs re-evaluation\n  - Otherwise **combine TVUS with endometrial sampling**\n- **Thickness >4 mm** (or thickened/irregular/non-visualised) **mandates sampling** (Pipelle / hysteroscopy + biopsy)\n- **PERSISTENT or RECURRENT PMB requires histology** regardless of a thin endometrium — a single thin scan does not clear recurrent bleeding",
   "whatFirst": "- PMB: **TVUS for endometrial thickness**; in most patients **combine with endometrial sampling**\n- **Thin (<=4 mm), single episode, low-risk, fully visualised** = TVUS may suffice with safety-netting\n- **>4 mm or persistent/recurrent** = **biopsy/hysteroscopy**",
   "mcqTrap": "- '**Reassure — likely atrophic vaginitis**' for new PMB without investigation — wrong\n  - PMB must be investigated to exclude **endometrial cancer** even though atrophy is the commonest cause",
   "discriminator": "- Pre-menopausal AUB: stratifies sampling by **age >=45/risk**\n- **ANY postmenopausal bleeding** is investigated regardless of age",
   "redFlags": "- **Recurrent/persistent PMB**\n- Endometrial thickness **>4 mm**\n- **Non-visualised endometrium**\n- **Tamoxifen use**\n- **Obesity** → go to biopsy/hysteroscopy",
   "cutoffs": [
    "Endometrial thickness **<=4 mm** = reassuring ONLY for a **single, low-risk, fully-visualised** episode",
    "**>4 mm** (or non-visualised) = **sample endometrium**",
    "**Recurrent/persistent PMB** = sample regardless"
   ],
   "mnemonic": "'PMB = Probably Malignancy until Biopsied; thin scan only excuses a single low-risk episode.'",
   "source": "RANZCOG / Australasian Menopause Society PMB guidance; eTG; ACOG Clinical Practice Update (Apr 2026).",
   "verified": true,
   "tags": [
    "postmenopausal bleeding",
    "endometrial cancer",
    "TVUS",
    "4mm"
   ],
   "id": "gyn-43",
   "title": "Postmenopausal Bleeding",
   "subtitle": "Endometrial cancer until proven otherwise; TVUS plus biopsy"
  },
  {
   "topic": "Premenstrual dysphoric disorder (PMDD) diagnosis + first-line SSRI",
   "subarea": "Menstrual & PCOS",
   "trap": "- Diagnosing PMDD on **history alone** without confirming cyclicity\n- Treating as straightforward **major depression** with a standard daily antidepressant only",
   "whatFirst": "- Confirm cyclical timing with a **prospective symptom diary** over ≥2 cycles\n  - Symptoms must occur in the **luteal phase** and resolve with menses\n- First-line = **SSRI** (continuous OR luteal-phase only) and/or a **COC**",
   "discriminator": "- **PMDD vs major depression**: PMDD symptoms are CYCLICAL and remit in the follicular phase; depression is continuous\n- The **symptom-free week after menses** is the key clue",
   "redFlags": "- Symptoms **NOT confined to the luteal phase** / no symptom-free interval → reconsider a primary mood disorder",
   "cutoffs": [
    "**Diary ≥2 cycles** to confirm cyclicity",
    "SSRI can be given **luteal-phase only** (unique to PMDD) — a fast response feature"
   ],
   "mcqTrap": "- 'Cyclical premenstrual low mood is best treated with **long-term lithium** / it is just depression' — wrong\n  - PMDD is a **distinct diagnosis**; first-line SSRI (often luteal) ± COC after diary confirmation",
   "mnemonic": "PMDD = Prove it (diary), then SSRI (even just luteal).",
   "source": "RANZCOG / Jean Hailes PMS-PMDD, 2024",
   "tags": [
    "PMDD",
    "PMS",
    "SSRI",
    "cyclical-mood",
    "discriminator"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-flow'><div class='gv-step'>Prospective symptom diary ≥2 cycles</div><div class='gv-step'>Luteal symptoms, symptom-free after menses</div><div class='gv-step'>SSRI (continuous or luteal) ± COC</div></div>",
   "id": "gyn-46",
   "title": "Premenstrual Dysphoric Disorder",
   "subtitle": "Confirm cyclicity prospectively; SSRI is first-line"
  },
  {
   "topic": "Primary amenorrhoea - the two age cut-offs (15 vs 13) and don't forget anatomy",
   "subarea": "Menstrual & PCOS",
   "trap": "- Investigate primary amenorrhoea when: **no menarche by age 15** WITH normal secondary sexual characteristics\n- OR **no breast development by age 13** (i.e. no pubertal onset) — the breast/pubertal timeline triggers earlier action\n- Trap: waiting until **age 16** (old threshold)\n- Trap: applying age 15 to a girl with no breast development — she should already be worked up **at age 13**\n- After negative hCG, the discriminator is whether **secondary sexual characteristics** are present and whether the **uterus is present on USS**\n- Classic catches:\n  - **Imperforate hymen / transverse vaginal septum**: cyclical pain, haematocolpos, bulging membrane — NORMAL hormones, outflow obstruction\n  - **Turner syndrome**: short stature, high FSH\n  - **Androgen insensitivity syndrome (AIS)**: 46,XY, female phenotype, absent uterus, normal/high testosterone, breast development but scant pubic hair\n  - **Mullerian agenesis (MRKH)**: absent uterus, NORMAL androgens/ovaries",
   "whatFirst": "- **beta-hCG** first\n- Then examine for **secondary sexual characteristics** + USS for uterus\n- Then **FSH/LH**\n- Then **karyotype** if FSH high or anatomy abnormal",
   "mcqTrap": "- 'Reassure and review at 16' for a **15-year-old with normal breast/pubic development** but no periods — wrong\n  - Age 15 with normal secondary characteristics is **already the trigger** to investigate",
   "discriminator": "- **AIS vs MRKH**: both have absent uterus + primary amenorrhoea, but:\n  - **AIS** = 46,XY with high/normal male-range testosterone and scant pubic/axillary hair\n  - **MRKH** = 46,XX with normal female androgens and normal pubic hair",
   "redFlags": "- Cyclical lower abdominal pain + amenorrhoea + **bulging bluish membrane** = imperforate hymen → relieve obstruction",
   "cutoffs": [
    "Investigate: **no menarche by age 15** (normal secondary sexual characteristics)",
    "or **no breast development by age 13** (no pubertal onset)",
    "Investigate by **age 14** if hirsutism/eating-disorder/outflow-obstruction concern"
   ],
   "mnemonic": "'15 if developed, 13 if no breasts.'",
   "source": "RANZCOG / O&G Magazine 'Primary amenorrhoea'; consistent with international (ASRM) thresholds.",
   "verified": true,
   "tags": [
    "primary amenorrhoea",
    "Turner",
    "AIS",
    "MRKH",
    "imperforate hymen"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Trigger to investigate primary amenorrhoea</th></tr></thead><tbody><tr><td>No menarche by 15 + normal secondary sexual characteristics</td></tr><tr><td>No breast development by 13 (no pubertal onset)</td></tr><tr><td>Cyclical pain + amenorrhoea at any age (outflow obstruction)</td></tr></tbody></table>",
   "id": "gyn-34",
   "title": "Primary Amenorrhoea",
   "subtitle": "Investigate by 15, or 13 if no breast development"
  },
  {
   "topic": "Primary vs secondary dysmenorrhoea - and the trap of treating before discriminating",
   "subarea": "Menstrual & PCOS",
   "trap": "- **Primary dysmenorrhoea** = pain WITHOUT pelvic pathology\n  - Starts within ~6–12 months of menarche, crampy, begins with/just before menses, normal exam\n  - Treat **empirically with NSAIDs** ± COC; no imaging needed if classic\n- **Secondary dysmenorrhoea** = pain DUE to pathology (endometriosis, adenomyosis, fibroids, PID, IUD)\n  - Clues: **LATER onset** (years after menarche / new pain in someone previously pain-free)\n  - Pain that **worsens over time**, deep dyspareunia, abnormal bleeding, or abnormal exam\n- Catch: don't reflexively investigate classic **teenage primary dysmenorrhoea**\n- Catch: don't dismiss **new-onset adult pain** as 'just period pain'",
   "whatFirst": "- Classic primary dysmenorrhoea (teen, since menarche, normal exam): trial **NSAIDs ± COC empirically**\n- Atypical/secondary features: **examine + TVUS** + consider referral",
   "mcqTrap": "- Ordering **laparoscopy** for a 15-year-old with classic crampy pain since menarche and a normal exam — wrong\n  - That is primary dysmenorrhoea — treat **empirically with NSAIDs first**",
   "discriminator": "- **Onset timing** is key:\n  - Primary = pain starts **with menarche**\n  - Secondary = **appears/worsens years later** or with new symptoms (dyspareunia, menorrhagia, abnormal exam)",
   "redFlags": "- **New-onset pain in adulthood**, progressively worsening pain, deep dyspareunia, abnormal exam/mass → investigate for secondary cause",
   "cutoffs": [
    "Primary onset within **~6–12 months post-menarche**",
    "**NSAIDs** = first-line analgesia"
   ],
   "mnemonic": "'Pain from the start = primary; pain that starts later = secondary.'",
   "source": "eTG dysmenorrhoea; RANZCOG; Australian Living Evidence Guideline: Endometriosis (2025).",
   "verified": true,
   "tags": [
    "dysmenorrhoea",
    "primary vs secondary",
    "NSAID"
   ],
   "id": "gyn-40",
   "title": "Primary vs Secondary Dysmenorrhoea",
   "subtitle": "Discriminate before treating; classic primary needs no imaging"
  },
  {
   "topic": "Secondary amenorrhoea - the time definition and the 'four causes' workup",
   "subarea": "Menstrual & PCOS",
   "trap": "- Secondary amenorrhoea = absent periods for **≥3 months** in a previously regularly menstruating woman\n  - OR **≥6 months** if she had irregular/oligomenorrhoeic cycles\n- After mandatory hCG, the four commonest Australian causes:\n  - **PCOS**\n  - **Functional hypothalamic amenorrhoea** (low BMI / overexercise / stress → low FSH/LH)\n  - **Hyperprolactinaemia**\n  - **Primary ovarian insufficiency (POI)** — FSH in menopausal range before age 40\n- Trap: jumping to PCOS without **excluding prolactin and thyroid**\n- Trap: missing **POI** in a woman <40 with menopausal symptoms\n  - She needs **FSH x2 ~1 month apart** and oestrogen replacement for bone/cardiovascular protection — not just 'reassurance'",
   "whatFirst": "- **beta-hCG** first\n- Then **FSH/LH, prolactin, TSH, oestradiol** (± androgens)\n- Progestogen challenge / imaging are later steps",
   "mcqTrap": "- Diagnosing PCOS in a woman with amenorrhoea + **galactorrhoea** without checking prolactin — wrong\n  - **Hyperprolactinaemia** must be excluded — it is a separate, treatable cause",
   "discriminator": "- **High FSH** (<40 yrs) = POI\n- **Low/normal FSH+LH with low BMI** = functional hypothalamic amenorrhoea\n- **Raised prolactin** = pituitary cause\n- **Normal/high androgens + irregular cycles** = PCOS",
   "cutoffs": [
    "**≥3 months** absent (or ≥6 months if prior oligomenorrhoea/irregular)",
    "**POI** = FSH menopausal range on two occasions ~1 month apart, age <40"
   ],
   "mnemonic": "Causes = 'POP-H': PCOS, Ovarian insufficiency, Pituitary/prolactin, Hypothalamic.",
   "source": "Endocrinology Today (Australia) amenorrhoea review; eTG; Jean Hailes.",
   "verified": true,
   "tags": [
    "secondary amenorrhoea",
    "POI",
    "prolactin",
    "hypothalamic"
   ],
   "id": "gyn-35",
   "title": "Secondary Amenorrhoea",
   "subtitle": "Absent 3 months (or 6 if oligomenorrhoeic); hCG first"
  },
  {
   "topic": "Subfertility initial workup — semen analysis first-step",
   "subarea": "Menstrual & PCOS",
   "trap": "- Jumping a couple straight to **laparoscopy/IVF** before basic workup\n- Or investigating **only the woman** — male factor is ~40%\n  - **Semen analysis** is cheap and non-invasive; do it early",
   "whatFirst": "- Confirm the definition is met, then baseline triad:\n  - (1) **Semen analysis** (the man)\n  - (2) **Mid-luteal/day-21 progesterone** (confirms ovulation)\n  - (3) **Tubal patency** (HSG/HyCoSy)\n- No invasive surgery first",
   "discriminator": "- Define infertility correctly: **12 months** of regular unprotected intercourse\n  - OR investigate at **6 months** if the woman is >35 (or known risk factor)\n  - Don't make a **>35yo wait a full year**",
   "redFlags": "- Amenorrhoea/oligomenorrhoea, prior **PID/ectopic/pelvic surgery**, or known **azoospermia** → expedite and tailor investigations",
   "cutoffs": [
    "Investigate at **12 months** (or **6 months** if female age >35)",
    "**Male factor** accounts for ~40%"
   ],
   "mcqTrap": "- 'Refer for **IVF**' or 'diagnostic laparoscopy' as the first step — wrong\n  - Do the cheap non-invasive workup including **semen analysis** first\n  - **Forgetting the man** = the classic trap",
   "mnemonic": "Investigate the man too: Semen, day-21 Progesterone, Tubes. 35+ = start at 6 months.",
   "source": "RANZCOG subfertility / Fertility Society of Australia, 2024",
   "tags": [
    "subfertility",
    "semen-analysis",
    "workup",
    "what-first",
    "age-cutoff"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-pills'><span class='gv-pill'>12 mo (6 mo if &gt;35)</span><span class='gv-pill'>Semen analysis</span><span class='gv-pill'>Day-21 progesterone</span><span class='gv-pill'>Tubal patency</span></div>",
   "id": "gyn-47",
   "title": "Subfertility Initial Workup",
   "subtitle": "Semen analysis early; male factor is ~40%"
  },
  {
   "topic": "Turner syndrome / gonadal dysgenesis — primary amenorrhoea",
   "subarea": "Menstrual & PCOS",
   "trap": "- Failing to **karyotype** primary amenorrhoea with absent puberty\n- Confusing **Turner** with androgen insensitivity / imperforate hymen",
   "whatFirst": "- Primary amenorrhoea → assess **breast development** (oestrogen) + presence of **uterus** + FSH ± karyotype\n- High FSH + short stature/webbed neck = streak gonads → **karyotype 45,X**",
   "discriminator": "- **Turner (45,X)**: short stature, webbed neck, streak gonads, HIGH FSH, NO/poor secondary sexual characteristics, uterus PRESENT\n- **AIS (46,XY)**: normal breasts, ABSENT uterus, testes\n- **Imperforate hymen**: normal development + CYCLICAL pelvic pain + haematocolpos (**bulging blue membrane**)",
   "redFlags": "- **Hypergonadotropic (high FSH) hypogonadism** in a short girl = gonadal dysgenesis → karyotype\n- Turner needs **cardiac** (coarctation/bicuspid) and **renal** screening",
   "cutoffs": [
    "Turner = **45,X**, high FSH (hypergonadotropic)",
    "Primary amenorrhoea worked up by **age 15** (or age 13 with no secondary sexual characteristics)"
   ],
   "mcqTrap": "- 'Androgen insensitivity' for a **SHORT girl with webbed neck and high FSH** — wrong; that's **Turner**\n  - AIS patients have normal breasts and are 46,XY with absent uterus",
   "mnemonic": "Turner = Tall she is NOT (short), webbed neck, streak gonads, high FSH.",
   "source": "RANZCOG primary amenorrhoea, 2024",
   "tags": [
    "Turner",
    "primary-amenorrhoea",
    "karyotype",
    "discriminator",
    "FSH"
   ],
   "verified": true,
   "visualHtml": "<table class='gv-table'><tr><th></th><th>Turner</th><th>AIS</th><th>Imperforate hymen</th></tr><tr><td>Karyotype</td><td>45,X</td><td>46,XY</td><td>46,XX</td></tr><tr><td>Breasts</td><td>poor</td><td>normal</td><td>normal</td></tr><tr><td>Uterus</td><td>present</td><td>absent</td><td>present</td></tr><tr><td>FSH</td><td>HIGH</td><td>high/normal</td><td>normal</td></tr><tr><td>Clue</td><td>short, webbed neck</td><td>blind vagina, testes</td><td>cyclical pain, haematocolpos</td></tr></table>",
   "id": "gyn-48",
   "title": "Turner Syndrome",
   "subtitle": "Karyotype primary amenorrhoea with absent puberty"
  },
  {
   "topic": "PCOS - unopposed oestrogen = endometrial cancer risk; avoid prolonged amenorrhoea",
   "subarea": "Menstrual & PCOS",
   "trap": "- Chronic anovulation/amenorrhoea in PCOS → endometrium sees **unopposed oestrogen** → hyperplasia and cancer risk\n- Tempting wrong answer: 'reassure, no treatment needed if she's not trying to conceive' — wrong\n- Must **protect the endometrium**: avoid prolonged amenorrhoea\n  - Options: **cyclical progestogen**, the **COC**, or an **LNG-IUS**\n  - Aim for a withdrawal bleed at least roughly every **~3 months**\n- New or persistent abnormal bleeding, or prolonged amenorrhoea with risk factors (obesity) → **endometrial assessment** (TVUS ± biopsy)",
   "whatFirst": "- If amenorrhoeic/oligomenorrhoeic and not on cyclical hormones: ensure **endometrial protection** (avoid prolonged unopposed-oestrogen amenorrhoea)\n- Investigate endometrium if **abnormal bleeding** or high-risk features",
   "mcqTrap": "- 'No treatment needed — amenorrhoea in PCOS is harmless' — wrong\n  - **Unopposed oestrogen** risks hyperplasia/cancer; protect the endometrium",
   "discriminator": "- **PCOS amenorrhoea is NOT benign** like functional hypothalamic amenorrhoea\n  - Functional hypothalamic = low-oestrogen, **bone risk**\n  - PCOS = high-oestrogen, **endometrial risk**",
   "cutoffs": [
    "Endometrial protection: avoid prolonged amenorrhoea (aim for a withdrawal bleed roughly every **~3 months**)"
   ],
   "mnemonic": "'Don't let PCOS periods vanish - unopposed oestrogen feeds the endometrium.'",
   "source": "2023 International PCOS Guideline (Teede/Monash); Jean Hailes; RANZCOG.",
   "verified": true,
   "tags": [
    "PCOS",
    "endometrial protection",
    "hyperplasia"
   ],
   "id": "gyn-38",
   "title": "Unopposed Oestrogen in PCOS",
   "subtitle": "Prolonged amenorrhoea risks endometrial cancer; never just reassure"
  },
  {
   "topic": "PID - the exact Australian empirical regimen (covers GC + chlamydia + anaerobes)",
   "subarea": "Acute pelvic pain & PID",
   "trap": "- Mild-moderate outpatient PID needs **triple cover**: gonorrhoea + chlamydia + anaerobes\n- Most tempting wrong option: **'doxycycline alone'** (or 'azithromycin alone') — only covers chlamydia, misses GC + anaerobes\n- Exact regimen:\n  - **Ceftriaxone 500 mg** in 2 mL 1% lignocaine IM (or 500 mg IV) STAT\n  - **Doxycycline 100 mg PO BD** x 14 days\n  - **Metronidazole 400 mg PO BD** x 14 days",
   "whatFirst": "- Give the **ceftriaxone STAT dose** at the visit\n- Send home on **doxycycline + metronidazole** for 14 days",
   "discriminator": "- **Doxycycline-only** = chlamydia cover only (the distractor)\n- **Azithromycin** 1 g now + 1 g in 1 week can REPLACE doxycycline if breastfeeding/pregnant or adherence concerns\n  - But you **still need ceftriaxone + metronidazole**",
   "redFlags": "- Severe/inpatient PID (sepsis, unable to tolerate orals, TOA, pregnancy, no response in 48–72 h):\n  - **IV ceftriaxone 2 g daily** + IV azithromycin 500 mg daily + IV metronidazole 500 mg BD",
   "mcqTrap": "- 'Doxycycline 100 mg BD for **7 days**' (or 'azithromycin 1 g single dose') as sole therapy — wrong\n  - Misses **GC + anaerobes** and the duration is **14 days** not 7",
   "mnemonic": "PID = 'Cef-Doxy-Met' (covers GC, Chlamydia, anaerobes).",
   "source": "Australian STI Management Guidelines (ASHM) PID 2024; eTG Antibiotic - Pelvic inflammatory disease",
   "tags": [
    "PID",
    "antibiotics",
    "ceftriaxone",
    "doxycycline",
    "metronidazole",
    "dose"
   ],
   "verified": true,
   "cutoffs": [
    "**Ceftriaxone 500 mg** IM/IV stat",
    "**Doxycycline 100 mg** PO BD x 14 days",
    "**Metronidazole 400 mg** PO BD x 14 days",
    "Severe/IV: **ceftriaxone 2 g** daily + azithromycin 500 mg daily + metronidazole 500 mg BD"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Target</th><th>Drug</th><th>Dose</th></tr></thead><tbody><tr><td>Gonorrhoea</td><td>Ceftriaxone</td><td><span class=\"gv-num\">500 mg</span> IM (in 1% lignocaine) stat</td></tr><tr><td>Chlamydia</td><td>Doxycycline</td><td><span class=\"gv-num\">100 mg</span> PO BD x 14 days</td></tr><tr><td>Anaerobes</td><td>Metronidazole</td><td><span class=\"gv-num\">400 mg</span> PO BD x 14 days</td></tr></tbody></table>",
   "id": "gyn-56",
   "title": "Australian Empirical PID Regimen",
   "subtitle": "Triple cover: ceftriaxone + doxycycline + metronidazole"
  },
  {
   "topic": "Chlamydia/gonorrhoea: contact tracing, test-of-cure & re-testing intervals",
   "subarea": "Acute pelvic pain & PID",
   "trap": "- Ordering a chlamydia **'test of cure' at 2 weeks** for every patient — wrong\n  - Chlamydia does NOT need **routine TOC**\n  - NAAT done too early gives a **false positive** from residual dead DNA",
   "whatFirst": "- Treat + notify/trace **ALL recent partners** (contact tracing is mandatory for both)\n- Then set the correct **follow-up clock** by organism",
   "discriminator": "- **Gonorrhoea** = ALWAYS test-of-cure (TOC)\n- **Chlamydia** = NO routine TOC\n- **Both** = re-test at **3 months** for re-infection (that is screening, not cure-checking)",
   "redFlags": "- Persistent symptoms after treatment, treatment failure, or **pregnancy** → these are the only times chlamydia gets a TOC",
   "cutoffs": [
    "**Gonorrhoea TOC**: ≥2 weeks after treatment (culture) — always",
    "**Chlamydia TOC**: only if pregnant / persistent symptoms / poor compliance / rectal infection — and then by NAAT no earlier than **4 weeks** post-treatment (avoid false-positive dead DNA)",
    "Re-test for **re-infection**: 3 months for BOTH",
    "Partner window: trace contacts of last **~6 months** (chlamydia) / **~2 months** (gonorrhoea)"
   ],
   "mcqTrap": "- 'Repeat chlamydia NAAT at **2 weeks** to confirm cure' — wrong\n  - No routine TOC, and 2 weeks is too early (**residual DNA = false positive**)\n  - 3 months is for **re-infection**, not cure",
   "mnemonic": "Gono = Go check (TOC at 2wk). Chlamydia = Cure-check NOT needed. Both = re-test at 3 months.",
   "source": "Australian STI Management Guidelines (ASHM) — Gonorrhoea & Chlamydia pages, 2024",
   "tags": [
    "STI",
    "contact-tracing",
    "test-of-cure",
    "discriminator",
    "high-yield"
   ],
   "verified": true,
   "visualHtml": "<table class='gv-table'><tr><th></th><th>Chlamydia</th><th>Gonorrhoea</th></tr><tr><td>Contact trace</td><td>Yes (last ~6mo)</td><td>Yes (last ~2mo)</td></tr><tr><td>Routine TOC</td><td>NO</td><td>YES (≥2wk)</td></tr><tr><td>TOC if indicated</td><td>NAAT ≥4wk</td><td>culture ≥2wk</td></tr><tr><td>Re-test re-infection</td><td>3 months</td><td>3 months</td></tr></table>",
   "id": "gyn-63",
   "title": "Chlamydia and Gonorrhoea Follow-Up",
   "subtitle": "No routine chlamydia test-of-cure; early NAAT gives false positive"
  },
  {
   "topic": "Discriminating ectopic vs ruptured/haemorrhagic cyst vs torsion (positive vs negative hCG)",
   "subarea": "Acute pelvic pain & PID",
   "trap": "- **Positive hCG** + pain/bleeding = ectopic until proven otherwise\n  - Empty uterus on TVUS + adnexal mass/free fluid → ectopic\n- CAUTION (Australian/RANZCOG): a single **discriminatory-zone hCG (~1500–2000 IU/L)** must NOT be used to MAKE a presumptive diagnosis of ectopic, and must NOT be used to time the scan\n  - Most ectopics are seen at **hCG <1000 IU/L**\n- If empty uterus + no clear ectopic + hCG below zone = **pregnancy of unknown location (PUL)**\n  - → serial hCG/repeat TVUS; do NOT reassure or discharge\n- **Negative hCG** points to torsion, ruptured/haemorrhagic cyst, PID, or appendicitis",
   "whatFirst": "- **hCG** first\n- If positive → **TVUS** for IUP vs ectopic\n  - Empty uterus with adnexal findings = treat as ectopic\n  - No adnexal findings + hCG below zone = **PUL** → serial hCG ± repeat scan",
   "discriminator": "- **Ectopic**: +hCG, empty uterus, adnexal mass ± free fluid\n- **Ruptured haemorrhagic cyst**: –hCG, sudden pain (often mid/late cycle, post-coital), free fluid, usually settles\n- **Torsion**: –hCG, severe colicky pain + vomiting + tender adnexal mass, may have **normal Doppler**\n- **Mittelschmerz**: –hCG, mid-cycle (**day ~14**), brief, afebrile, self-limiting",
   "redFlags": "- **Unstable + positive hCG** = ruptured ectopic = **theatre now**\n- Unstable + negative hCG = ruptured haemorrhagic cyst with haemoperitoneum can also **bleed enough to need surgery**",
   "mcqTrap": "- Labelling adnexal pain as 'PID' or 'cyst' without first checking **hCG** — wrong\n- OR calling a high hCG with empty uterus '**definite ectopic**' on the number alone — wrong\n  - The discriminatory zone **supports, not proves**, ectopic",
   "mnemonic": "hCG splits the tree: positive -> think tube; negative -> think ovary (torsion/cyst).",
   "source": "RANZCOG / O&G Magazine - PUL & discriminatory zone; eTG 2024",
   "tags": [
    "ectopic",
    "haemorrhagic-cyst",
    "torsion",
    "discriminator",
    "beta-hCG",
    "discriminatory-zone"
   ],
   "verified": true,
   "cutoffs": [
    "Discriminatory zone **~1500–2000 IU/L** (supportive, NOT diagnostic of ectopic)",
    "Most ectopics seen at **hCG <1000 IU/L**",
    "Empty uterus + no IUP + hCG below zone = **PUL** → serial hCG",
    "Mittelschmerz = **mid-cycle day ~14**, self-limiting"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Feature</th><th>Ectopic</th><th>Ruptured/haem. cyst</th><th>Torsion</th></tr></thead><tbody><tr><td>beta-hCG</td><td>Positive</td><td>Negative</td><td>Negative</td></tr><tr><td>Pain</td><td>Unilateral + bleeding/amenorrhoea</td><td>Sudden, often post-coital, settles</td><td>Severe colicky + vomiting</td></tr><tr><td>Mass</td><td>Adnexal +/- free fluid</td><td>Free fluid, collapsed cyst</td><td>Tender enlarged ovary/lead-point</td></tr><tr><td>USS</td><td>Empty uterus + adnexal mass</td><td>Haemorrhagic cyst, fluid</td><td>Whirlpool / normal Doppler possible</td></tr></tbody></table>",
   "id": "gyn-60",
   "title": "Ectopic vs Cyst vs Torsion",
   "subtitle": "Positive hCG plus empty uterus equals ectopic until proven otherwise"
  },
  {
   "topic": "PID - treat EMPIRICALLY on minimum clinical criteria (don't wait for swabs)",
   "subarea": "Acute pelvic pain & PID",
   "trap": "- The threshold to treat is deliberately **LOW**\n- Start antibiotics on **minimum clinical criteria** — do not wait for swab/NAAT results or imaging\n  - Criteria: pelvic/lower-abdominal pain + **cervical motion tenderness** OR adnexal tenderness OR uterine tenderness in a sexually active young person\n- Trap answer: '**await endocervical swab/PCR results** before treating' — wrong\n- Trap answer: '**do a pelvic USS first**' — wrong\n- Take swabs (and bloods/hCG) but **START treatment the same visit**",
   "whatFirst": "- Take **swabs + hCG**, then START **empirical antibiotics immediately** on clinical criteria\n- Do not wait for results",
   "discriminator": "- **Negative swabs** do NOT exclude PID (organisms often not isolated)\n- A **normal USS** does NOT exclude PID\n  - USS is for **complications (TOA)**, not to rule PID in/out",
   "redFlags": "- Always do a **pregnancy test** (exclude ectopic, which mimics PID)\n- **Sexual-contact tracing** + STI screen + safety-net required",
   "mcqTrap": "- 'Await **chlamydia/gonorrhoea NAAT** before commencing antibiotics' — wrong\n  - Low threshold; **treat empirically now**",
   "mnemonic": "When in doubt, treat PID out - the cost of waiting is a blocked tube.",
   "source": "Australian STI Management Guidelines (ASHM, sti.guidelines.org.au) - PID 2024",
   "tags": [
    "PID",
    "empirical-treatment",
    "what-first",
    "minimum-criteria"
   ],
   "verified": true,
   "cutoffs": [
    "Treat on **CMT OR adnexal OR uterine tenderness** in sexually active person",
    "Highly predictive if **<30 and sexually active**"
   ],
   "id": "gyn-55",
   "title": "Empirical Treatment of PID",
   "subtitle": "Treat on minimum clinical criteria; don't wait for swabs"
  },
  {
   "topic": "Acute pelvic pain - the FIRST move is always beta-hCG",
   "subarea": "Acute pelvic pain & PID",
   "trap": "- **ANY woman of reproductive age** with acute abdominal/pelvic pain or abnormal bleeding gets a urine/serum **beta-hCG BEFORE** imaging, analgesia decisions, or disposition\n- The single most tempting wrong answer is jumping straight to **'CT abdomen/pelvis'**, 'pelvic USS', or 'discharge with analgesia'\n  - All wrong until pregnancy (ectopic) is excluded\n- A **negative urine hCG** is reassuring but if clinical suspicion is high (e.g. shock), resuscitation comes first\n- A **serum quantitative hCG** should not delay theatre",
   "whatFirst": "- **Pregnancy test** (urine/serum beta-hCG) before imaging, before opioids, before disposition",
   "discriminator": "- The **hCG result reframes the entire differential**\n- **Positive hCG** → ectopic/miscarriage pathway\n- **Negative hCG** → torsion, ruptured/haemorrhagic cyst, PID, appendicitis, mittelschmerz",
   "redFlags": "- **Haemodynamic instability + positive hCG** = resuscitate and theatre now (ruptured ectopic)\n- Do NOT wait for confirmatory USS or quantitative hCG",
   "mcqTrap": "- **'Order CT abdomen/pelvis'** or 'pelvic ultrasound' as the immediate next step — both wrong\n- The immediate next step is a **pregnancy test**",
   "mnemonic": "Reproductive-age + pain = hCG before everything (the 'P before everything' rule).",
   "source": "RANZCOG; eTG (Therapeutic Guidelines) acute pelvic pain assessment; standard Australian ED/gynae practice 2024",
   "tags": [
    "acute-pelvic-pain",
    "what-first",
    "beta-hCG",
    "ectopic"
   ],
   "verified": true,
   "cutoffs": [
    "**Reproductive age** + pelvic pain/abnormal bleeding → **hCG FIRST**"
   ],
   "id": "gyn-53",
   "title": "First Move in Acute Pelvic Pain",
   "subtitle": "Beta-hCG before imaging, analgesia or disposition"
  },
  {
   "topic": "Genital herpes (HSV) first episode + painful vs painless ulcer",
   "subarea": "Acute pelvic pain & PID",
   "trap": "- Withholding **aciclovir** because swab/serology isn't back\n- Confusing the **painful** HSV ulcer with the **painLESS** syphilitic chancre",
   "whatFirst": "- First-episode genital HSV → start **aciclovir** (valaciclovir/famciclovir) **EMPIRICALLY**\n- Ideally within **72 h of onset** or while new lesions still forming\n- Do **not wait for PCR**",
   "discriminator": "- **PAINFUL** multiple vesicles/ulcers + tender lymphadenopathy = **HSV**\n- **PAINLESS** solitary indurated ulcer = **primary syphilis chancre**\n- Mnemonic: Painful = HSV; painLESS = syphilis",
   "redFlags": "- Primary HSV in **THIRD TRIMESTER** → high **vertical-transmission risk**\n  - Aciclovir suppression + plan **Caesarean** if active lesions/prodrome at delivery\n  - This is the obstetric overlap, not pure gynae",
   "cutoffs": [
    "Aciclovir ideally within **72 h** (or while new lesions appearing)",
    "**Suppressive aciclovir** from ~**36 weeks** if recurrent HSV in pregnancy"
   ],
   "mcqTrap": "- **'Painful genital ulcer is most likely primary syphilis'** — wrong; syphilis chancre is classically painless; painful = HSV\n- **'Await PCR before treating'** — wrong; treat empirically",
   "mnemonic": "HSV HurtS. Syphilis is Silent (painless chancre).",
   "source": "Australian STI Management Guidelines (ASHM) Genital Herpes; RANZCOG HSV in pregnancy, 2024",
   "tags": [
    "HSV",
    "ulcer",
    "syphilis",
    "pregnancy",
    "discriminator"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-pills'><span class='gv-pill'>Painful = HSV</span><span class='gv-pill'>Painless = syphilis chancre</span></div>",
   "id": "gyn-66",
   "title": "First-Episode Genital Herpes",
   "subtitle": "Painful HSV ulcer vs painless syphilitic chancre; don't withhold aciclovir"
  },
  {
   "topic": "Fitz-Hugh-Curtis syndrome - RUQ pain in PID is perihepatitis, not gallbladder",
   "subarea": "Acute pelvic pain & PID",
   "trap": "- A young sexually active woman with PID who develops **RIGHT UPPER QUADRANT pain** (pleuritic, radiating to shoulder) has **Fitz-Hugh-Curtis** (perihepatitis), NOT cholecystitis\n- The trap answer is **'cholecystitis — order biliary USS / surgical cholecystectomy'**\n- LFTs are usually **normal or only mildly deranged** and a biliary USS is normal",
   "whatFirst": "- **Recognise it as a PID complication** — treat the PID\n- Regimen: **ceftriaxone + doxycycline + metronidazole**\n- Do not chase a biliary cause",
   "discriminator": "- vs cholecystitis: Fitz-Hugh-Curtis = **normal/near-normal LFTs**, normal gallbladder on USS\n- Coexisting **pelvic tenderness/CMT** and STI risk\n- **No Murphy's sign**, no gallstones",
   "redFlags": "- **Concurrent pelvic signs + STI risk + normal biliary imaging** should redirect you from the biliary tree to the pelvis",
   "mcqTrap": "- **'Acute cholecystitis — arrange cholecystectomy'** in a young woman with RUQ pain + cervicitis — wrong\n- It's **perihepatitis** (treat the PID)",
   "mnemonic": "Fitz-Hugh-Curtis = 'violin strings on the liver' - the cause is in the pelvis.",
   "source": "Australian STI Management Guidelines (ASHM); RANZCOG - PID complications 2024",
   "tags": [
    "Fitz-Hugh-Curtis",
    "perihepatitis",
    "PID-complication",
    "mimic"
   ],
   "verified": false,
   "cutoffs": [
    "**RUQ pain + PID + normal LFTs/biliary USS** = perihepatitis"
   ],
   "id": "gyn-59",
   "title": "Fitz-Hugh-Curtis Syndrome",
   "subtitle": "RUQ pain in PID is perihepatitis, not cholecystitis"
  },
  {
   "topic": "Mittelschmerz - the physiological mimic you must NOT over-investigate",
   "subarea": "Acute pelvic pain & PID",
   "trap": "- **Mid-cycle** (around day 14), brief, self-limiting unilateral pain in a haemodynamically stable, afebrile woman with a **NEGATIVE pregnancy test** = physiological **ovulation pain (mittelschmerz)**\n- The trap is **over-investigating** (CT, urgent laparoscopy) or over-treating\n- BUT this is a **diagnosis of exclusion**: you still do the hCG\n- Red flags (fever, instability, persistent/worsening pain, peritonism, vomiting) move you toward **torsion, ruptured cyst, ectopic, PID, or appendicitis**",
   "whatFirst": "- Confirm **negative hCG**, confirm **stable/afebrile**, confirm **mid-cycle timing**\n- Then: **reassure + simple analgesia**",
   "discriminator": "- vs torsion/ectopic: mittelschmerz is **SHORT-lived** (hours to a couple of days), mild-moderate, no systemic features, no mass\n- **Persistent severe pain + vomiting + mass** = think torsion\n- **Positive hCG** = think ectopic",
   "redFlags": "- **Fever**, haemodynamic instability, peritonism, vomiting, or pain that is **escalating/not resolving** = NOT mittelschmerz — investigate",
   "mcqTrap": "- Choosing **'urgent diagnostic laparoscopy'** or **'CT abdomen'** for a classic mid-cycle self-limiting pain with negative hCG and normal obs — over-investigation is the trap",
   "mnemonic": "'Middle of the cycle, middle of the road' - day 14, mild, melts away.",
   "source": "Jean Hailes for Women's Health; RANZCOG acute pelvic pain assessment 2024",
   "tags": [
    "mittelschmerz",
    "physiological",
    "mimic",
    "avoid-over-investigation"
   ],
   "verified": false,
   "cutoffs": [
    "Cycle day **~14**",
    "Self-limiting (**hours to ~48 h**)",
    "**Afebrile + stable + negative hCG**"
   ],
   "id": "gyn-61",
   "title": "Mittelschmerz",
   "subtitle": "Mid-cycle physiological pain; don't over-investigate or over-treat"
  },
  {
   "topic": "Ovarian cyst characterisation — when to observe vs operate",
   "subarea": "Acute pelvic pain & PID",
   "trap": "- **Operating on a simple physiological cyst** in a young woman — over-operating\n- **Conserving a complex/solid/postmenopausal high-CA125 mass** — under-investigating\n- Don't over-operate AND don't under-investigate",
   "whatFirst": "- **Characterise**: simple vs complex on USS + menopausal status + CA125/RMI\n- **Simple unilocular cyst <5 cm premenopausal** = observe (repeat scan; usually physiological/resolves)",
   "discriminator": "- **Reassuring** = simple, unilocular, thin-walled, **<5 cm**, no solid/septae, **normal CA125**\n- **Refer/operate** = complex, septated, solid components, large, **raised CA125**, ascites\n- **Postmenopausal SIMPLE cyst <5 cm + normal CA125** can also be **CONSERVED** with surveillance",
   "redFlags": "- **Solid/papillary projections**, thick septa, ascites, rising CA125, postmenopausal complex mass → **gynae-oncology referral** (high RMI)",
   "cutoffs": [
    "**Premenopausal simple cyst <5 cm** → observe/repeat USS (no CA125 routinely needed)",
    "**Postmenopausal simple cyst <5 cm + normal CA125** → conservative surveillance",
    "Repeat USS **~4–6 months** when monitoring"
   ],
   "mcqTrap": "- **'Proceed to oophorectomy'** for a 25-year-old with a 4 cm simple cyst — wrong; observe\n- **'Reassure and discharge'** a postmenopausal woman with a 7 cm complex cyst + high CA125 — wrong; refer",
   "mnemonic": "Simple + Small (<5cm) + Settled CA125 = Surveillance. Solid/Septated/big = Send to surgery.",
   "source": "RANZCOG / RCOG adnexal mass management; IOTA, 2024",
   "tags": [
    "ovarian-cyst",
    "adnexal",
    "management",
    "CA125",
    "discriminator"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-flow'><div class='gv-step'>Simple, unilocular, &lt;5cm, normal CA125 → OBSERVE</div><div class='gv-step'>Complex / solid / septated / large / high CA125 → REFER</div></div>",
   "id": "gyn-68",
   "title": "Ovarian Cyst Characterisation",
   "subtitle": "Observe simple cysts; investigate complex or postmenopausal masses"
  },
  {
   "topic": "Ovarian torsion - normal Doppler flow does NOT exclude it",
   "subarea": "Acute pelvic pain & PID",
   "trap": "- **'Doppler shows normal flow, therefore not torsion — discharge / observe'** — this is the classic wrong answer\n- **Present arterial AND venous Doppler flow** on TVUS does **NOT exclude torsion**\n  - Dual blood supply; intermittent torsion; collateral flow\n- Up to **~60% of surgically confirmed torsions** have normal Doppler\n- If the story fits (sudden severe unilateral pain, nausea/vomiting, adnexal mass/enlarged ovary), the answer is **urgent diagnostic laparoscopy** to detorse and preserve the ovary",
   "whatFirst": "- If clinical picture fits torsion → **urgent gynae referral + diagnostic laparoscopy** (detorsion/ovarian conservation)\n- Regardless of **Doppler result**",
   "discriminator": "- vs ruptured haemorrhagic cyst: **torsion** = severe colicky pain + persistent vomiting + tender adnexal mass, often a **lead point** (dermoid/cyst >5 cm)\n- **Cyst rupture** = sudden pain often post-coital/exercise, free fluid, may settle\n- USS **whirlpool sign** / oedematous enlarged ovary / cyst lead-point supports torsion\n- But their **ABSENCE does not exclude it**",
   "redFlags": "- Sudden severe unilateral pain + vomiting + adnexal mass = **theatre**\n- Ovary is **time-critical** (necrosis risk)\n- Do **not 'observe overnight'** or 'repeat scan in the morning'",
   "mcqTrap": "- **'Normal Doppler arterial flow excludes torsion'** / 'reassure and discharge' — the classic trap\n- Flow does **not exclude torsion**",
   "mnemonic": "Doppler can lie - trust the story, take it to theatre.",
   "source": "RANZCOG; JOGC 2018 'Is it time to forget about Doppler?'; Australian surgical-diagnosis teaching 2024",
   "tags": [
    "ovarian-torsion",
    "Doppler",
    "surgical-diagnosis",
    "what-first"
   ],
   "verified": true,
   "cutoffs": [
    "**~60%** of confirmed torsions have **NORMAL Doppler flow**",
    "Lead-point cyst often **>5 cm**"
   ],
   "id": "gyn-54",
   "title": "Ovarian Torsion",
   "subtitle": "Normal Doppler flow does NOT exclude torsion"
  },
  {
   "topic": "PID empirical treatment - threshold and Australian regimen",
   "subarea": "Acute pelvic pain & PID",
   "trap": "- Treat PID **EMPIRICALLY** on minimum clinical criteria — do **NOT wait** for swab results or imaging\n  - Pelvic/lower-abdominal pain with **adnexal tenderness OR cervical motion tenderness** in a sexually active woman\n  - A low threshold prevents **tubal damage/infertility**\n- Australian regimen covers gonorrhoea + chlamydia + anaerobes: **ceftriaxone 500 mg IM stat + doxycycline 100 mg BD x 14 days + metronidazole 400 mg BD x 14 days**\n- Classic trap distractor: **doxycycline alone** (chlamydia cover only — omits gonorrhoea + anaerobe cover)\n- In **pregnancy/breastfeeding** or doxycycline non-adherence, replace doxycycline with **azithromycin**\n- **ALWAYS exclude pregnancy/ectopic first** with a beta-hCG",
   "cutoffs": [
    "**Ceftriaxone 500 mg IM** stat",
    "**Doxycycline 100 mg PO BD x 14 days**",
    "**Metronidazole 400 mg PO BD x 14 days**",
    "Treat on **clinical criteria** — don't wait for swabs",
    "Reassess at **48–72 h**"
   ],
   "whatFirst": "- **Exclude pregnancy** (beta-hCG) and surgical emergency\n- Then treat **empirically on clinical criteria** without waiting for microbiology",
   "discriminator": "- Looks like it can wait for swab results — but **empirical treatment on clinical CMT/adnexal tenderness prevents infertility**\n- **Doxycycline alone is wrong**: omits gonorrhoea + anaerobe cover",
   "mcqTrap": "- **'Doxycycline 100 mg BD alone'** or **'await swab results before treating'** — wrong\n- Need **triple cover** (ceftriaxone + doxycycline + metronidazole) and treat empirically now",
   "mnemonic": "PID cover = 'Ceft, Doxy, Metro' (gono, chlamydia, anaerobes).",
   "source": "Australian STI Management Guidelines (STI Guidelines Australia / ASHM) - PID syndrome page (current 2025)",
   "tags": [
    "PID",
    "regimen",
    "empirical",
    "what-first"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Ceftriaxone 500 mg IM stat</span><span class=\"gv-pill\">Doxycycline 100 mg BD x14d</span><span class=\"gv-pill\">Metronidazole 400 mg BD x14d</span></div>",
   "id": "gyn-62",
   "title": "PID Treatment Threshold and Regimen",
   "subtitle": "Empirical on clinical criteria; don't await swabs"
  },
  {
   "topic": "PID with an IUD in situ - do NOT reflexively remove it",
   "subarea": "Acute pelvic pain & PID",
   "trap": "- Having an **IUD is NOT a reason to remove it** at diagnosis\n- Start antibiotics with the **IUD in place**\n- Only **CONSIDER removal** if there is no clinical response within **48–72 hours**\n  - First weigh the **pregnancy risk**: recent intercourse + IUD removal = consider emergency contraception\n- The trap answer is **'remove the IUD immediately'** as a first step",
   "whatFirst": "- Treat PID with the **IUD in situ**\n- Reassess at **48–72 h** before considering removal",
   "discriminator": "- Immediate removal is only forced by **frank tubo-ovarian abscess** or **actinomyces-related sepsis** not responding\n- Otherwise **leave it and treat**",
   "redFlags": "- If you do remove the IUD and there was **recent unprotected intercourse**, offer **oral emergency contraception**",
   "mcqTrap": "- **'Remove the IUD now'** as the immediate management step — wrong\n- Treat first, reconsider at **48–72 h**",
   "mnemonic": "IUD + PID: antibiotics in, device stays - reassess at 72.",
   "source": "Australian STI Management Guidelines (ASHM) PID 2024",
   "tags": [
    "PID",
    "IUD",
    "what-first"
   ],
   "verified": true,
   "cutoffs": [
    "Reassess IUD removal only at **48–72 h non-response**"
   ],
   "id": "gyn-57",
   "title": "PID with IUD In Situ",
   "subtitle": "Don't reflexively remove the IUD; treat first"
  },
  {
   "topic": "Toxic shock syndrome from retained tampon/foreign body",
   "subarea": "Acute pelvic pain & PID",
   "trap": "- Working up the fever/rash/hypotension as **'sepsis of unknown source'** while leaving the tampon in\n- The **retained foreign body is the source** — remove it",
   "whatFirst": "- **REMOVE the retained tampon/foreign body IMMEDIATELY** + aggressive fluid resuscitation\n- Then: **blood cultures** + broad-spectrum antibiotics\n  - **Anti-staphylococcal/anti-streptococcal** cover\n  - **Clindamycin** for toxin suppression",
   "discriminator": "- Fever + diffuse **macular (sunburn-like) erythroderma** + hypotension + multi-organ involvement + a retained tampon = **staphylococcal TSS**\n- **Desquamation of palms/soles** follows ~1–2 weeks later",
   "redFlags": "- **Hypotension, oliguria, deranged LFTs/renal function, altered conscious state** = septic shock → **ICU-level resuscitation**\n- High-consequence and easily missed",
   "cutoffs": [
    "**Source control = remove foreign body first**, do not delay",
    "Add **clindamycin/lincomycin** for toxin (exotoxin) suppression"
   ],
   "mcqTrap": "- **'Start antibiotics and await response'** without removing the tampon — wrong\n- **Source control (foreign body removal)** is the immediate priority alongside resuscitation",
   "mnemonic": "TSS = Take the tampon out, Saline (fluids), Suppress toxin (clindamycin).",
   "source": "eTG / RANZCOG; Therapeutic Guidelines sepsis & TSS, 2024",
   "tags": [
    "TSS",
    "emergency",
    "what-first",
    "foreign-body",
    "resuscitation"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-flow'><div class='gv-step'>Remove tampon NOW</div><div class='gv-step'>IV fluids resuscitate</div><div class='gv-step'>Cultures + antibiotics + clindamycin</div></div>",
   "id": "gyn-67",
   "title": "Toxic Shock Syndrome",
   "subtitle": "Find and remove the retained tampon; it's the source"
  },
  {
   "topic": "Tubo-ovarian abscess - failed antibiotics + adnexal mass = drain/operate",
   "subarea": "Acute pelvic pain & PID",
   "trap": "- PID **NOT improving** on appropriate IV antibiotics + a complex adnexal/cystic mass on imaging = **tubo-ovarian abscess (TOA)**\n- Needs **admission for IV antibiotics AND source control** — image-guided drainage or surgery if no response\n- The trap is **'continue oral antibiotics and review'** or 'just keep the same antibiotics going' when there is a drainable collection or ongoing sepsis",
   "whatFirst": "- **Admit**, IV antibiotics, and arrange **drainage/surgery** if not responding (or if large/ruptured/septic)",
   "discriminator": "- Distinguish from uncomplicated PID by: **palpable/sonographic adnexal mass**, failure to **defervesce on IV antibiotics**, and systemic sepsis\n- **Ruptured TOA** = surgical emergency (peritonitis, septic shock)",
   "redFlags": "- **Ruptured TOA** = peritonitis + septic shock = resuscitate + **emergency laparotomy/laparoscopy**\n- Larger abscesses (often cited **~>=7 cm**) or no response in **48–72 h** favour intervention",
   "mcqTrap": "- **'Continue current oral antibiotics and review in a week'** for a non-responding PID with adnexal mass — wrong\n- Needs **admission +/- drainage**",
   "mnemonic": "TOA = 'Treat, then drain Or Operate' if it won't settle.",
   "source": "Australian STI Management Guidelines (ASHM) - admission for pelvic abscess; eTG; surgical consensus 2024",
   "tags": [
    "tubo-ovarian-abscess",
    "PID-complication",
    "source-control",
    "escalation"
   ],
   "verified": true,
   "cutoffs": [
    "Non-response at **48–72 h** + mass → **drain/operate**",
    "Larger abscesses (**~>=7 cm**) more likely to need drainage (literature, not ASHM)"
   ],
   "id": "gyn-58",
   "title": "Tubo-Ovarian Abscess",
   "subtitle": "Failed antibiotics plus adnexal mass needs source control"
  },
  {
   "topic": "Uncomplicated gonorrhoea: ceftriaxone + azithromycin dual therapy",
   "subarea": "Acute pelvic pain & PID",
   "trap": "- Picking **single-dose ORAL cefixime**, or **ceftriaxone monotherapy**\n- **Cefixime is NO LONGER first-line** in Australia (resistance >5%)\n- Monotherapy drives resistance",
   "whatFirst": "- **Ceftriaxone 500 mg IM single dose** PLUS **azithromycin 1 g oral single dose**\n- For uncomplicated anogenital/pharyngeal gonorrhoea",
   "discriminator": "- This is the **STANDALONE gonorrhoea regimen** — distinct from the PID regimen (ceftriaxone + doxycycline + metronidazole)\n- Two reasons for dual therapy:\n  - (1) **Slow ceftriaxone resistance**\n  - (2) **Co-treat likely concurrent chlamydia**",
   "redFlags": "- **Pharyngeal infection** harder to cure → always **test of cure (TOC)**\n- **Treatment failure / persistent symptoms** → swab for culture + susceptibilities, refer sexual health",
   "cutoffs": [
    "**Ceftriaxone 500 mg IM** single dose",
    "**Azithromycin 1 g PO** single dose",
    "**Cefixime: NOT first-line** in Australia (cefixime resistance **6.3%** in Melbourne 2021–22, > WHO **5%** threshold)"
   ],
   "mcqTrap": "- **'Cefixime 400 mg orally single dose'** — classic trap; abandoned as first-line due to resistance\n- Also wrong: **'azithromycin alone'** or **'ceftriaxone alone'**",
   "mnemonic": "Gono needs the needle (IM ceftriaxone) + a partner drug (azithro). Oral cefixime = old answer.",
   "source": "Therapeutic Guidelines (eTG) / Australian STI Management Guidelines (ASHM), Gonorrhoea, 2024",
   "tags": [
    "STI",
    "gonorrhoea",
    "antibiotics",
    "resistance",
    "dual-therapy"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-pills'><span class='gv-pill'>Ceftriaxone 500mg IM</span><span class='gv-pill'>+ Azithromycin 1g PO</span><span class='gv-pill'>single doses</span></div>",
   "id": "gyn-64",
   "title": "Uncomplicated Gonorrhoea Therapy",
   "subtitle": "Dual ceftriaxone plus azithromycin; cefixime no longer first-line"
  },
  {
   "topic": "Vaginitis discriminator: BV vs candida vs trichomonas",
   "subarea": "Acute pelvic pain & PID",
   "trap": "- Treating **asymptomatic bacterial vaginosis** — wrong unless pregnant or pre-procedure\n- Calling **BV or candida an STI** — they are NOT; only trichomonas is\n- Offering **partner treatment** for BV or candida — wrong; only trichomonas requires it",
   "whatFirst": "- Check **vaginal pH + wet prep / whiff test** first\n  - Sorts all three diagnoses at the bedside before reaching for a drug",
   "discriminator": "- **BV**: pH >4.5, clue cells, positive whiff (fishy/amine), thin grey discharge, NO inflammation → **metronidazole**\n- **Candida**: pH **normal** (<4.5), itch, thick white 'cottage cheese', hyphae/spores → **azole**\n- **Trichomonas**: pH >4.5, frothy yellow-green, **'strawberry cervix'**, motile flagellates → **metronidazole + treat partner** (it IS an STI)",
   "redFlags": "- **Symptomatic BV in pregnancy** or before gynaecological procedure (TOP, IUD insertion) → DO treat\n- **Trichomonas** → STI screen + partner notification",
   "cutoffs": [
    "BV / trichomonas pH **> 4.5**",
    "Candida pH **normal (~3.8–4.5)**",
    "Treat asymptomatic BV only in: **pregnancy (symptomatic)** or **pre-procedure**"
   ],
   "mcqTrap": "- 'Treat the asymptomatic woman with BV on a routine swab' — **wrong** unless pregnant or pre-procedure\n- 'Treat the partner of a woman with candida/BV' — **wrong**; only trichomonas needs partner treatment",
   "mnemonic": "BV = Bad smell, Basic pH, clue cells. Candida = Cottage cheese, Correct pH. Trich = Travels (STI), sTRAwberry cervix.",
   "source": "Therapeutic Guidelines (eTG), Vaginitis; ASHM Trichomoniasis, 2024",
   "tags": [
    "vaginitis",
    "discharge",
    "discriminator",
    "high-yield",
    "STI"
   ],
   "verified": true,
   "visualHtml": "<table class='gv-table'><tr><th></th><th>BV</th><th>Candida</th><th>Trichomonas</th></tr><tr><td>pH</td><td>&gt;4.5</td><td>normal</td><td>&gt;4.5</td></tr><tr><td>Discharge</td><td>thin grey, fishy</td><td>thick white</td><td>frothy green</td></tr><tr><td>Micro</td><td>clue cells</td><td>hyphae</td><td>motile flagellates</td></tr><tr><td>STI?</td><td>No</td><td>No</td><td>YES</td></tr><tr><td>Rx</td><td>metronidazole</td><td>azole</td><td>metronidazole + partner</td></tr></table>",
   "id": "gyn-65",
   "title": "Vaginitis Discriminator",
   "subtitle": "BV and candida aren't STIs; trichomonas is"
  },
  {
   "topic": "Anti-D dosing in early pregnancy & Kleihauer timing",
   "subarea": "Early pregnancy",
   "trap": "- Giving the **wrong dose for gestation**\n- Ordering a **Kleihauer for a first-trimester** sensitising event — not needed then\n- Missing that anti-D is for **Rh-NEGATIVE women only**",
   "whatFirst": "- Sensitising event in an **Rh(D)-negative** woman: give **250 IU before 12 weeks**; **625 IU at/after 12 weeks**\n- **Kleihauer NOT needed** for a first-trimester event\n  - IS needed at ≥20 weeks/delivery to quantify large feto-maternal haemorrhage",
   "discriminator": "- Dose by gestation: **<12 weeks = 250 IU**; **≥12 weeks = 625 IU**\n- **Kleihauer**: skip in first trimester (small fetal blood volume covered by 250 IU)\n  - Perform for later events/birth to determine if extra anti-D is needed",
   "redFlags": "- **Already-sensitised woman** (anti-D antibodies present) → anti-D prophylaxis no longer helps; refer for monitoring\n- Give within **72 h** of the sensitising event",
   "cutoffs": [
    "**250 IU** before 12 weeks",
    "**625 IU** at/after 12 weeks",
    "Routine antenatal anti-D: **625 IU at 28 and 34 weeks**",
    "Give within **72 h** of sensitising event"
   ],
   "mcqTrap": "- 'Order a Kleihauer before giving anti-D for a 9-week miscarriage' — **unnecessary** in the first trimester; just give 250 IU\n- Giving **250 IU after 12 weeks** is the dose trap — correct dose is 625 IU",
   "mnemonic": "Before 12 weeks = 250; after = 625. Kleihauer only later.",
   "source": "RANZCOG / Australian Red Cross Lifeblood anti-D guidelines, 2021 (current)",
   "tags": [
    "anti-D",
    "Rhesus",
    "dose",
    "Kleihauer",
    "exact-figure"
   ],
   "verified": true,
   "visualHtml": "<table class='gv-table'><tr><th>Timing</th><th>Anti-D dose</th><th>Kleihauer?</th></tr><tr><td>&lt;12 weeks</td><td>250 IU</td><td>No</td></tr><tr><td>≥12 weeks</td><td>625 IU</td><td>Yes (later events)</td></tr><tr><td>Routine antenatal</td><td>625 IU at 28 & 34 wk</td><td>—</td></tr></table>",
   "id": "gyn-84",
   "title": "Anti-D Dosing and Kleihauer",
   "subtitle": "No Kleihauer in first trimester; anti-D for Rh-negative only"
  },
  {
   "topic": "Anti-D in early pregnancy sensitising events",
   "subarea": "Early pregnancy",
   "trap": "- **Forgetting anti-D** in an RhD-negative woman with a sensitising event in early pregnancy\n- Definite indications: **ectopic**, any miscarriage with **instrumentation** (surgical evacuation), **termination**, chorionic villus sampling, **molar pregnancy**, bleeding that is heavy/repeated/with abdominal pain\n- **Dose error**: giving ≥13-week dose (625 IU) for a first-trimester event, or vice versa\n- Give within **72 hours** of the event",
   "cutoffs": [
    "**250 IU** (50 microgram) if <13+0 weeks gestation",
    "**625 IU** if ≥13 weeks gestation",
    "Give within **72 hours** of the sensitising event (still give up to ~10 days if missed)",
    "Only if **RhD-negative** and **no preformed anti-D antibodies**"
   ],
   "whatFirst": "- Check **Rh group/antibody status**\n- If RhD-negative + sensitising event → give **anti-D within 72 h**",
   "discriminator": "- **Uncomplicated light threatened miscarriage <12 weeks** (no instrumentation) is the one early situation where anti-D is NOT mandated\n- **Ectopic, termination, surgical evacuation, molar pregnancy**, and **heavy/painful bleeding** all DO require anti-D",
   "mcqTrap": "- Omitting anti-D after **surgical evacuation or ectopic** in an RhD-negative woman\n- Giving the **≥13-week dose (625 IU) for a 9-week** miscarriage — correct first-trimester dose is **250 IU**",
   "mnemonic": "First trimester anti-D = '250 before 13' (weeks); 625 after.",
   "source": "National Blood Authority / RANZCOG 'Guideline for the prophylactic use of Rh D immunoglobulin in pregnancy care' (NBA, 2024)",
   "tags": [
    "anti-D",
    "RhD",
    "dose",
    "miscarriage",
    "ectopic"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Gestation</th><th>Anti-D dose</th></tr></thead><tbody><tr><td><span class=\"gv-num\">&lt;13 weeks</span></td><td>250 IU (50 microgram)</td></tr><tr><td><span class=\"gv-num\">>=13 weeks</span></td><td>625 IU</td></tr></tbody></table>",
   "id": "gyn-74",
   "title": "Anti-D Sensitising Events",
   "subtitle": "RhD-negative woman: don't forget anti-D after the event"
  },
  {
   "topic": "beta-hCG 48-hour trend - the ~53-66% rule",
   "subarea": "Early pregnancy",
   "trap": "- A viable IUP beta-hCG should rise by **at least ~53%** over 48 hours (older teaching: ~66%)\n- A **suboptimal rise, plateau, or fall** points to a failing pregnancy or ectopic — never reassuring\n- A **falling** beta-hCG suggests resolving/failing pregnancy but could still be a resolving ectopic → must track to **zero**\n- Treating **any rise** as reassuring, or a small fall as 'completed miscarriage, discharge' without confirming zero, are both traps",
   "cutoffs": [
    "Minimum normal rise **~53% in 48 h** (Barnhart); higher initial levels rise more slowly",
    "Older teaching: viable IUP roughly doubles (**~66%**) every 48 h",
    "Rise **<53%** / plateau / inappropriate fall = **abnormal** (ectopic or failing)"
   ],
   "whatFirst": "- Suboptimal rise or plateau → **do NOT reassure**\n  - Investigate for ectopic/failing pregnancy (repeat TVUS, senior review)",
   "discriminator": "- A 'rising' beta-hCG **looks reassuring** — but a rise of only **20–40% in 48 h** is abnormal and suspicious for ectopic",
   "mcqTrap": "- 'beta-hCG rose from 1000 to 1300 over 48 h — reassure as normal pregnancy' — **wrong**\n  - That **30% rise** is below the ~53% minimum; suspicious for ectopic/failing pregnancy",
   "mnemonic": "Viable IUP: 'rises by half-again-plus in two days' (>=~53% in 48h).",
   "source": "Barnhart minimal-rise criteria (53%); Kadar/older 66% doubling rule; used in Australian EPAU protocols and RANZCOG ectopic guidance",
   "tags": [
    "beta-hCG",
    "trend",
    "ectopic",
    "PUL"
   ],
   "verified": true,
   "id": "gyn-71",
   "title": "beta-hCG 48-Hour Trend",
   "subtitle": "Viable IUP rises at least about 53% in 48 hours"
  },
  {
   "topic": "Ectopic - beta-hCG discriminatory zone + empty uterus on TVUS",
   "subarea": "Early pregnancy",
   "trap": "- **Above discriminatory zone (~1500–2000 IU/L) + empty uterus** on TVUS: gestational sac should be visible — its absence = **ectopic until proven otherwise** (NOT 'too early to see')\n- **Below zone + empty uterus** = **Pregnancy of Unknown Location (PUL)**: do NOT reassure, do NOT diagnose ectopic — repeat beta-hCG in 48 h and re-scan\n- Reassuring the below-zone patient ('probably just early') OR calling the above-zone patient an early viable IUP are both traps",
   "cutoffs": [
    "Discriminatory zone **~1500–2000 IU/L**",
    "**Above zone + empty uterus** = ectopic until excluded",
    "**Below zone + empty uterus** = PUL, repeat in 48 h"
   ],
   "whatFirst": "- **Above zone + empty uterus** → treat as ectopic / escalate (do not call it 'early IUP')\n- **Below zone + empty uterus** → **PUL pathway**: repeat beta-hCG in 48 h",
   "discriminator": "- Looks like 'too early to see a pregnancy' — is actually an **ectopic** if beta-hCG is above the discriminatory zone with an empty uterus\n  - Caveat: a **single hCG is unreliable**; never exclude ectopic on one below-zone value",
   "mcqTrap": "- 'Reassure, likely early IUP, rescan in 2 weeks' when beta-hCG is **>1500–2000 with an empty uterus** — wrong\n  - Above the zone an IUP should be visible; empty uterus = **ectopic until excluded**",
   "redFlags": "- **Empty uterus + free fluid in pouch of Douglas + above-zone beta-hCG + pain** = high suspicion **ruptured/leaking ectopic**",
   "source": "RANZCOG 'Miscarriage, Recurrent Miscarriage and Ectopic Pregnancy' guideline (2020); ASUM First Trimester Ultrasound guidance (2018)",
   "tags": [
    "ectopic",
    "beta-hCG",
    "discriminatory-zone",
    "TVUS"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>beta-hCG vs discriminatory zone</th><th>Empty uterus on TVUS means</th><th>Action</th></tr></thead><tbody><tr><td>Above zone (<span class=\"gv-num\">~1500-2000 IU/L</span>)</td><td>Ectopic until proven otherwise</td><td>Escalate / treat as ectopic</td></tr><tr><td>Below zone</td><td>Pregnancy of unknown location</td><td>Repeat beta-hCG in 48h, rescan</td></tr></tbody></table>",
   "id": "gyn-70",
   "title": "Ectopic Discriminatory Zone",
   "subtitle": "hCG above zone + empty uterus = ectopic, not 'too early'"
  },
  {
   "topic": "Heterotopic pregnancy — IUP does not exclude ectopic (post-IVF)",
   "subarea": "Early pregnancy",
   "trap": "- Reassuring an **IVF patient** with a confirmed IUP + ongoing pain that 'the ultrasound confirms it's in the uterus, so no ectopic'\n  - After assisted reproduction, a **coexisting ectopic (heterotopic)** is possible",
   "whatFirst": "- In an **IVF/ART patient** with a confirmed IUP but ongoing pain/free fluid → actively look for a **coexisting ectopic**\n  - Do not be falsely reassured by the IUP",
   "discriminator": "- In **spontaneous conception**, a visible IUP makes ectopic very unlikely\n- After **ART/ovulation induction**, heterotopic incidence rises markedly → an IUP does **NOT exclude** a simultaneous ectopic",
   "redFlags": "- **IVF patient + IUP + persistent/worsening pain**, adnexal mass, or free fluid → **heterotopic until excluded**\n  - Can present with collapse",
   "cutoffs": [
    "Heterotopic risk **substantially increased** after **IVF/ART** vs spontaneous"
   ],
   "mcqTrap": "- 'Intrauterine pregnancy seen, therefore ectopic excluded' in a **recent-IVF patient** with ongoing pain — **wrong**\n  - Heterotopic pregnancy must be considered",
   "mnemonic": "IVF + IUP + pain = look for the second (ectopic) pregnancy too.",
   "source": "RANZCOG ectopic/early pregnancy, 2024",
   "tags": [
    "heterotopic",
    "IVF",
    "ectopic",
    "trap",
    "early-pregnancy"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-pills'><span class='gv-pill'>Recent IVF</span><span class='gv-pill'>IUP seen</span><span class='gv-pill'>ongoing pain → still rule out ectopic</span></div>",
   "id": "gyn-82",
   "title": "Heterotopic Pregnancy",
   "subtitle": "Post-IVF: an IUP does not exclude a coexisting ectopic"
  },
  {
   "topic": "Hyperemesis gravidarum vs molar / multiple pregnancy + thiamine",
   "subarea": "Early pregnancy",
   "trap": "- Treating refractory vomiting as 'just bad morning sickness' without scanning for **molar or multiple pregnancy**\n  - Severe/early/atypical hyperemesis is **hCG-driven** → USS is mandatory\n- Giving **glucose/dextrose before thiamine** → risk of **Wernicke encephalopathy**\n- Starting **antithyroid drugs** for a suppressed TSH — hCG-mediated gestational thyrotoxicosis is **transient, self-resolving**, not Graves'",
   "cutoffs": [
    "Weight loss **>5%** of pre-pregnancy weight + ketonuria + dehydration = hyperemesis",
    "Severe/early hyperemesis → **USS** to exclude molar/multiple pregnancy",
    "**Thiamine BEFORE dextrose** to prevent Wernicke encephalopathy"
   ],
   "whatFirst": "- Confirm severity (ketones, electrolytes, weight) and arrange **USS** to exclude molar/multiple pregnancy\n- Rehydrate IV + give **thiamine before glucose**",
   "discriminator": "- Looks like severe morning sickness — but disproportionately **high hCG** suggests molar or multiple pregnancy\n- **Transient suppressed TSH** is hCG-driven, NOT Graves' disease",
   "mcqTrap": "- 'Start **carbimazole**' for the suppressed TSH in hyperemesis — **wrong**\n  - hCG-mediated gestational thyrotoxicosis is transient and self-resolving; no antithyroid drug needed",
   "mnemonic": "Big sickness -> scan for 'mole or more' (molar or multiple); thiamine before the drip sugar.",
   "source": "RANZCOG / Australian early-pregnancy practice; eTG (Therapeutic Guidelines) nausea & vomiting of pregnancy",
   "tags": [
    "hyperemesis",
    "molar",
    "multiple-pregnancy",
    "thyroid",
    "thiamine"
   ],
   "verified": true,
   "id": "gyn-80",
   "title": "Hyperemesis Gravidarum",
   "subtitle": "Severe cases: scan for mole/multiple and give thiamine",
   "images": [
    {
     "src": "assets/img/obstetrics_us_hydatidiform_mole_01.jpg",
     "caption": "Complete hydatidiform mole - snowstorm appearance on ultrasound",
     "alt": "Transvaginal ultrasound showing heterogeneous echogenic intrauterine mass with multiple anechoic spaces (snowstorm/Swiss-cheese appearance) - complete molar pregnancy",
     "credit": "Mikael Häggström, Wikimedia Commons, CC0 (public domain dedication)"
    }
   ]
  },
  {
   "topic": "Methotrexate eligibility for ectopic - the cut-offs",
   "subarea": "Early pregnancy",
   "trap": "- Single-dose IM methotrexate is only for the **stable, unruptured, low-hCG ectopic** — ALL criteria must be met\n  - Haemodynamically **stable**; no **fetal cardiac activity**; adnexal mass **<35 mm**; beta-hCG ideally **<5000 IU/L**; minimal/no free fluid; **reliable for follow-up**\n- Any breach (rupture, instability, FHR present, hCG ≥5000, large mass, unable to follow up) = **surgery**, NOT methotrexate\n- Offering MTX when **fetal cardiac activity is present**, hCG is high, or patient **cannot return for monitoring** are all traps",
   "cutoffs": [
    "beta-hCG **≥1500 and <5000 IU/L** (RANZCOG offers MTX in this range)",
    "Adnexal mass **<35 mm**, no **fetal cardiac activity**",
    "Haemodynamically **stable**, minimal free fluid, **reliable follow-up**",
    "MTX dose **50 mg/m² IM**",
    "Recheck hCG **day 4 & day 7**: expect **≥15% fall day 4→7**",
    "RANZCOG: **1 dose** if hCG ≤3000 or mass <20 mm; **2 doses** if hCG 3000–5000 or mass 20–35 mm"
   ],
   "whatFirst": "- Confirm **ALL eligibility criteria + reliable follow-up** before MTX; otherwise **theatre**\n- After MTX: beta-hCG **day 4 and day 7** (not daily)",
   "discriminator": "- Looks like a methotrexate candidate (small ectopic) — but **fetal cardiac activity**, hCG **≥5000**, mass **≥35 mm**, instability, or unreliable follow-up all mandate **surgery**",
   "mcqTrap": "- 'Give IM methotrexate' for an ectopic with **fetal cardiac activity** or beta-hCG of **8000** — **wrong**\n  - FHR present and high hCG predict MTX failure; these need **laparoscopic surgery**",
   "redFlags": "- Increasing pain, instability, or beta-hCG that does **not fall ≥15% by day 7** = **MTX failure** → surgery",
   "mnemonic": "MTX needs 'S-U-N': Stable, Unruptured, No heartbeat (+ small mass, low hCG, reliable follow-up).",
   "source": "RANZCOG Miscarriage/Ectopic guideline (2020) - hCG 1500-5000, mass <35mm; KEMH/WNHS WA Methotrexate guideline - 50 mg/m2, day 4 & 7, >=15% fall",
   "tags": [
    "ectopic",
    "methotrexate",
    "thresholds"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Stable</span><span class=\"gv-pill\">Unruptured</span><span class=\"gv-pill\">No fetal heart</span><span class=\"gv-pill\">Mass &lt;35 mm</span><span class=\"gv-pill\">hCG 1500-5000</span><span class=\"gv-pill\">Reliable follow-up</span></div>",
   "id": "gyn-72",
   "title": "Methotrexate Eligibility for Ectopic",
   "subtitle": "Stable, unruptured, no FHR, mass <35mm, hCG <5000"
  },
  {
   "topic": "Miscarriage types + expectant vs medical vs surgical management",
   "subarea": "Early pregnancy",
   "trap": "- Matching management to the **wrong miscarriage type** is the core trap\n  - **Threatened** (os closed, viable) = watch\n  - **Inevitable** (os open) = loss imminent\n  - **Incomplete** (os open, retained products) = needs evacuation\n  - **Complete** (empty uterus, os closed) = **NO intervention**\n  - **Missed** (non-viable, os closed, often asymptomatic) = offer all three options\n- Choosing **surgery for a stable woman** who prefers expectant management\n- Choosing **expectant management for an unstable or septic** woman",
   "cutoffs": [
    "Medical management: **misoprostol 800 microgram**",
    "**Mifepristone 200 mg** priming 24–48 h before misoprostol (especially for missed miscarriage)",
    "Surgical mandatory if: **unstable / heavy bleeding / infection**"
   ],
   "whatFirst": "- Assess **stability + signs of infection** first\n  - Unstable or septic → **surgical evacuation**\n  - Otherwise → offer expectant/medical/surgical per **patient preference**",
   "discriminator": "- **Complete miscarriage** (empty uterus, closed os, settling bleeding) needs **NO intervention** — don't evacuate\n- **Missed miscarriage** (closed os, non-viable, minimal symptoms) 'looks like a viable pregnancy' but isn't",
   "mcqTrap": "- 'Surgical evacuation' for a stable woman with a **complete miscarriage** and **empty uterus on scan** — **wrong**; completed loss needs no procedure",
   "mnemonic": "Os OPEN = inevitable/incomplete; os CLOSED + viable = threatened; os CLOSED + non-viable = missed; os CLOSED + empty = complete.",
   "source": "RANZCOG Miscarriage guideline (2020); Australian Prescriber (mifepristone/misoprostol for early pregnancy loss)",
   "tags": [
    "miscarriage",
    "management",
    "misoprostol"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Type</th><th>Cervical os</th><th>Key feature</th></tr></thead><tbody><tr><td>Threatened</td><td>Closed</td><td>Viable, bleeding</td></tr><tr><td>Inevitable</td><td>Open</td><td>Loss imminent</td></tr><tr><td>Incomplete</td><td>Open</td><td>Retained products</td></tr><tr><td>Complete</td><td>Closed</td><td>Empty uterus</td></tr><tr><td>Missed</td><td>Closed</td><td>Non-viable, asymptomatic</td></tr></tbody></table>",
   "id": "gyn-76",
   "title": "Miscarriage Types and Management",
   "subtitle": "Match to the os; complete miscarriage needs no intervention"
  },
  {
   "topic": "Miscarriage USS diagnostic criteria - when to diagnose vs rescan",
   "subarea": "Early pregnancy",
   "trap": "- Definitively diagnosing miscarriage requires: **CRL ≥7 mm with NO heartbeat** (observe ≥30 seconds), OR **MSD ≥25 mm with NO embryo**\n- **Below these thresholds** (CRL <7 mm or MSD <25 mm) → **rescan in 7–14 days** before diagnosing loss\n- Acting too early risks **evacuating a viable pregnancy**\n- Diagnosing miscarriage on an **MSD 18 mm** empty sac or a **5 mm fetal pole** with no FHR — both need repeat scan, not intervention",
   "cutoffs": [
    "**CRL ≥7 mm** with no fetal heartbeat = miscarriage",
    "**MSD ≥25 mm** with no embryo = anembryonic miscarriage",
    "Below thresholds → **rescan in 7–14 days**",
    "Observe for cardiac activity **≥30 seconds** before declaring absent"
   ],
   "whatFirst": "- If below the diagnostic cut-offs → **repeat scan in 7–14 days**\n  - Do not diagnose loss or evacuate on a borderline first scan",
   "discriminator": "- An empty/small sac **looks like a miscarriage** — but if **MSD <25 mm** (or CRL <7 mm), may be a viable early pregnancy\n  - Needs a **repeat scan**, not curettage",
   "mcqTrap": "- 'Proceed to surgical evacuation' for an **MSD of 20 mm** with no yolk sac — **wrong**\n  - Below **25 mm** you must rescan in 7–14 days first",
   "mnemonic": "'7 and 25' - CRL 7 mm no FHR, or sac 25 mm no embryo = loss; otherwise rescan.",
   "source": "RANZCOG Miscarriage guideline (adopting NICE, 2020); ASUM First Trimester Ultrasound guidelines (2018)",
   "tags": [
    "miscarriage",
    "TVUS",
    "diagnostic-criteria"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>TVUS finding</th><th>Interpretation</th></tr></thead><tbody><tr><td>CRL <span class=\"gv-num\">>=7 mm</span>, no heartbeat</td><td>Miscarriage confirmed</td></tr><tr><td>MSD <span class=\"gv-num\">>=25 mm</span>, no embryo</td><td>Anembryonic miscarriage</td></tr><tr><td>CRL &lt;7 mm OR MSD &lt;25 mm</td><td>Rescan in 7-14 days</td></tr></tbody></table>",
   "id": "gyn-75",
   "title": "Miscarriage Ultrasound Criteria",
   "subtitle": "CRL >=7mm no heartbeat, or MSD >=25mm empty"
  },
  {
   "topic": "Molar pregnancy / GTD - follow-up and avoiding pregnancy",
   "subarea": "Early pregnancy",
   "trap": "- After molar evacuation: **serial beta-hCG monitoring is mandatory** (weekly until 3 consecutive normal, then monthly for 6 further months for complete mole)\n- Patient must **avoid pregnancy** until hCG normalised and follow-up complete\n  - A new pregnancy's rising hCG would **mask a rise from persistent GTD/choriocarcinoma**\n- A **plateau or rise** in hCG = persistent trophoblastic neoplasia → **chemotherapy**\n- Advising **immediate conception** or **stopping monitoring early** are the traps",
   "cutoffs": [
    "Serial beta-hCG: **weekly until 3 consecutive normal**, then monthly (**6 months** for complete mole)",
    "**Avoid pregnancy** until hCG normalised + follow-up complete (commonly ~6–12 months)",
    "Persistent/rising hCG → **single-agent methotrexate** (low-risk, WHO score <7)",
    "Reliable contraception (**COC or IUD**) — neither increases GTN risk"
   ],
   "whatFirst": "- **Serial hCG** to confirm resolution + **reliable contraception** (NOT pregnancy) until hCG normal and follow-up complete\n- **Plateauing or rising hCG** → refer for **chemotherapy**",
   "discriminator": "- Looks 'cured' once evacuated — but a **plateauing or rising hCG** means persistent GTD/choriocarcinoma needing **chemo**, not reassurance",
   "mcqTrap": "- 'Advise she may try to conceive now' immediately after molar evacuation — **wrong**\n  - Pregnancy masks hCG surveillance; defer conception until **hCG normalised + follow-up complete**",
   "mnemonic": "Post-mole: 'Track the hCG, block the bump' (serial hCG, avoid pregnancy).",
   "source": "RANZCOG 'Management of Gestational Trophoblastic Disease' statement (2019)",
   "tags": [
    "molar",
    "GTD",
    "follow-up",
    "contraception",
    "chemotherapy"
   ],
   "verified": true,
   "id": "gyn-79",
   "title": "Molar Pregnancy Follow-Up",
   "subtitle": "Serial hCG monitoring and avoid pregnancy until normalised",
   "images": [
    {
     "src": "assets/img/obstetrics_us_hydatidiform_mole_01.jpg",
     "caption": "Complete hydatidiform mole - snowstorm ultrasound appearance (pre-evacuation)",
     "alt": "Transvaginal ultrasound showing heterogeneous multicystic intrauterine mass (snowstorm appearance) of complete hydatidiform mole requiring evacuation and serial hCG follow-up",
     "credit": "Mikael Häggström, Wikimedia Commons, CC0 (public domain dedication)"
    }
   ]
  },
  {
   "topic": "Molar pregnancy / GTD - recognition clues",
   "subarea": "Early pregnancy",
   "trap": "- Suspect **molar pregnancy (GTD)** when beta-hCG is markedly elevated (often >100,000 IU/L)\n- Uterus is **large-for-dates** with hyperemesis and hyperthyroid features\n  - hCG cross-stimulates the **TSH receptor** causing hyperthyroid signs\n- **Pre-eclampsia/hypertension before 20 weeks** is a key flag for molar pregnancy\n- Management = **suction curettage** (not misoprostol/medical management) + histology\n- Trap 1: treating vomiting as **simple hyperemesis** and missing the mole\n- Trap 2: treating hypertension as **essential hypertension** and missing the mole\n- Trap 3: offering **medical/misoprostol management** instead of suction evacuation",
   "cutoffs": [
    "beta-hCG often markedly elevated (**>100,000 IU/L** raises post-molar GTN risk)",
    "**Pre-eclampsia/hypertension <20 weeks** gestation = suspect mole",
    "Treatment: **suction curettage** (cannula up to 12 mm), send tissue for histology"
   ],
   "whatFirst": "- **Suction evacuation + histology** (NOT medical/misoprostol management)\n- Send products for **histopathology** to confirm diagnosis",
   "discriminator": "- Looks like **hyperemesis gravidarum** or early essential hypertension\n- Actually molar pregnancy if:\n  - **hCG grossly elevated**\n  - Uterus **large-for-dates**\n  - **Snowstorm USS** appearance\n  - **Pre-eclampsia before 20 weeks**",
   "mcqTrap": "- 'Manage with **misoprostol**' or 'treat as severe hyperemesis' for large-for-dates uterus with beta-hCG of 250,000 and snowstorm scan = WRONG\n- This is a **mole** requiring suction evacuation + histology",
   "mnemonic": "Mole = 'Massive hCG, snowstorm USS, Large uterus, Early pre-eclampsia, Sickness (hyperemesis)'.",
   "source": "RANZCOG 'Management of Gestational Trophoblastic Disease' statement (2019)",
   "tags": [
    "molar",
    "GTD",
    "beta-hCG",
    "pre-eclampsia"
   ],
   "verified": true,
   "id": "gyn-78",
   "title": "Molar Pregnancy Recognition",
   "subtitle": "Pre-eclampsia before 20 weeks should ring the molar alarm",
   "images": [
    {
     "src": "assets/img/obstetrics_us_hydatidiform_mole_01.jpg",
     "alt": "Transvaginal ultrasound showing a heterogeneous intrauterine snowstorm mass with no fetal parts (complete hydatidiform mole)",
     "credit": "Mikael Häggström, Wikimedia Commons, CC0 (public domain dedication)"
    }
   ]
  },
  {
   "topic": "High-risk non-tubal ectopics — cervical / Caesarean-scar / interstitial",
   "subarea": "Early pregnancy",
   "trap": "- Managing a **cervical, Caesarean-scar, or interstitial (cornual) ectopic** like a routine tubal ectopic\n- These are **high-risk** implantation sites that present later and bleed catastrophically\n- They are **NOT** straightforward methotrexate or standard-surgery cases",
   "whatFirst": "- **Recognise the dangerous implantation site** on imaging\n- Urgent referral to a **unit experienced in complex ectopics**\n- Do NOT attempt standard tubal-ectopic management",
   "discriminator": "- **Tubal** = common; manage with methotrexate/salpingectomy\n- **Interstitial/cornual** = implants in the intramural tube → ruptures late with **massive haemorrhage**\n- **Caesarean-scar** = implants in previous CS scar → risk of **placenta accreta/uterine rupture**\n- **Cervical** = implants in cervix → **torrential bleeding**, risk of hysterectomy",
   "redFlags": "- **Late presentation**, large haemoperitoneum risk\n- Implantation in **scar/cervix/cornu** = catastrophic potential\n- Manage in a **specialist centre**",
   "cutoffs": [
    "**Interstitial/cornual** ruptures later (often **7–12 weeks**) with severe haemorrhage",
    "**Cervical/scar ectopics** → high bleeding risk, may need specialist/embolisation"
   ],
   "mcqTrap": "- '**Salpingectomy**' or 'standard methotrexate' for a Caesarean-scar or cervical ectopic = WRONG\n- These need **specialist tailored management**, not routine tubal approaches",
   "mnemonic": "Cervical, Caesarean-scar, Cornual = the 'catastrophic C' ectopics — refer to specialists.",
   "source": "RANZCOG ectopic pregnancy, 2024",
   "tags": [
    "ectopic",
    "Caesarean-scar",
    "interstitial",
    "cervical",
    "high-risk"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-pills'><span class='gv-pill'>Cervical</span><span class='gv-pill'>Caesarean-scar</span><span class='gv-pill'>Interstitial/cornual</span><span class='gv-pill'>= high-risk, specialist mgmt</span></div>",
   "id": "gyn-83",
   "title": "Non-Tubal Ectopic Pregnancy",
   "subtitle": "Cervical, scar, interstitial ectopics bleed catastrophically; not routine"
  },
  {
   "topic": "Pregnancy of unknown location (PUL) — surveillance algorithm",
   "subarea": "Early pregnancy",
   "trap": "- Forcing a diagnosis of ectopic (or treating) when scan shows **empty uterus with positive hCG**\n- **PUL** (pregnancy of unknown location) = location not yet known — it is a surveillance classification, not a diagnosis\n- Trap: **premature methotrexate or surgery** before location/trend declares",
   "whatFirst": "- Positive hCG + empty uterus on TVUS (no IUP, no adnexal mass) = **PUL**\n- Manage with **serial hCG at 48 hours** + clear safety-netting\n- Await declaration as: failing PUL, early IUP, or ectopic",
   "discriminator": "- PUL is a **transient classification**, not a final diagnosis\n- Interpret **48-hour hCG trend**:\n  - **Appropriate rise** → likely IUP (rescan when above discriminatory zone)\n  - **Fall** → likely failing PUL\n  - **Suboptimal rise/plateau** → suspicious for ectopic",
   "redFlags": "- **Pain, haemodynamic instability**, or hCG behaviour suggesting ectopic → treat as ectopic\n- **Safety-net every PUL**: instruct patient to return if pain/bleeding/collapse",
   "cutoffs": [
    "**Serial hCG at 48 hours**",
    "**Discriminatory zone (~1500–2000 IU/L)** — empty uterus above this is concerning for ectopic"
   ],
   "mcqTrap": "- '**Give methotrexate now**' for a PUL with no confirmed ectopic and no concerning trend = WRONG\n- Surveil with **serial hCG first**; treating before location/trend declares is the trap",
   "mnemonic": "PUL = Positive hCG, Uterus empty, Location unknown → serial hCG + safety-net.",
   "source": "RANZCOG early pregnancy / PUL, 2024",
   "tags": [
    "PUL",
    "ectopic",
    "hCG",
    "surveillance",
    "early-pregnancy"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-flow'><div class='gv-step'>+hCG + empty uterus = PUL</div><div class='gv-step'>Serial hCG 48h + safety-net</div><div class='gv-step'>Trend declares: IUP / failing PUL / ectopic</div></div>",
   "id": "gyn-81",
   "title": "Pregnancy of Unknown Location",
   "subtitle": "A location not yet known, not an ectopic to treat"
  },
  {
   "topic": "Pregnancy test FIRST in any reproductive-age woman with pain or bleeding",
   "subarea": "Early pregnancy",
   "trap": "- Most common written-paper trap: reproductive-age woman with abdominal/pelvic pain or abnormal bleeding\n- Tempting answers: CT abdomen, analgesia, laparoscopy, or discharge\n- **Correct FIRST step: urine/serum beta-hCG** — always, before anything else\n- **Pregnancy must be excluded** before any imaging, drug, or disposition decision",
   "whatFirst": "- **Urine (or serum) beta-hCG FIRST** — before imaging, analgesia choice, or discharge\n- Applies to **every reproductive-age woman** with pelvic/abdominal pain or abnormal bleeding",
   "mcqTrap": "- '**Arrange CT abdomen/pelvis**' or 'discharge with simple analgesia' before a pregnancy test = WRONG\n  - Unrecognised ectopic can **rupture and kill**\n  - CT **irradiates a possible pregnancy**",
   "redFlags": "- **Positive beta-hCG + haemodynamic instability** = treat as ruptured ectopic until proven otherwise",
   "mnemonic": "'No woman of childbearing age has a normal abdomen until the pregnancy test is back.'",
   "source": "RANZCOG / standard Australian emergency O&G practice (standard of care)",
   "tags": [
    "what-first",
    "ectopic",
    "beta-hCG"
   ],
   "verified": true,
   "id": "gyn-69",
   "title": "Pregnancy Test First",
   "subtitle": "Reproductive-age pain or bleeding: urine beta-hCG before anything"
  },
  {
   "topic": "Recurrent miscarriage — definition & APS investigation",
   "subarea": "Early pregnancy",
   "trap": "- Trap 1: **Full work-up after a single miscarriage** — very common, usually sporadic aneuploidy; work-up not indicated\n- Trap 2: **Forgetting antiphospholipid syndrome (APS)** in recurrent loss — it is treatable and must not be missed",
   "whatFirst": "- Reach the **recurrent-loss threshold first**, THEN investigate\n- Investigations:\n  - **Antiphospholipid antibodies** (lupus anticoagulant, anticardiolipin, anti-β2-glycoprotein)\n  - **Parental karyotype**\n  - **Pelvic USS** for uterine anomaly\n  - ± thyroid/glucose",
   "discriminator": "- **Single sporadic miscarriage** = reassure, no work-up\n- **Recurrent (≥3 consecutive, or ≥2 by some current definitions)** = investigate\n- **APS** is the key TREATABLE cause → **low-dose aspirin + LMWH** improves live-birth rate",
   "redFlags": "- **Confirmed APS in pregnancy** → aspirin + heparin\n- **Balanced parental translocation** on karyotype → genetic counselling",
   "cutoffs": [
    "Recurrent miscarriage: **≥3 consecutive** (≥2 in some current definitions)",
    "APS treatment: **low-dose aspirin + LMWH**"
   ],
   "mcqTrap": "- '**Full recurrent-loss work-up after one miscarriage**' = WRONG; investigate only after recurrent loss\n- **Forgetting to test for APS** in recurrent loss = misses a treatable cause",
   "mnemonic": "Recurrent loss → think APS (treat with Aspirin + heParin), karyotype, uterine anomaly.",
   "source": "RANZCOG recurrent miscarriage, 2024",
   "tags": [
    "recurrent-miscarriage",
    "APS",
    "aspirin-heparin",
    "karyotype",
    "definition"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-flow'><div class='gv-step'>≥3 (or ≥2) losses = recurrent</div><div class='gv-step'>Test APS + parental karyotype + uterine US</div><div class='gv-step'>APS → aspirin + LMWH</div></div>",
   "id": "gyn-85",
   "title": "Recurrent Miscarriage Workup",
   "subtitle": "Don't investigate one loss; never miss antiphospholipid syndrome"
  },
  {
   "topic": "Ruptured / unstable ectopic - resuscitate and theatre, no delay",
   "subarea": "Early pregnancy",
   "trap": "- **Shock + positive pregnancy test** = ruptured ectopic until proven otherwise\n  - Signs: tachycardia, hypotension, peritonism, shoulder-tip pain, collapse\n- **Resuscitate and go straight to theatre** — do NOT delay for formal beta-hCG or confirmatory CT/MRI\n- **Surgery, not methotrexate**\n- Trap: 'wait for imaging' or 'send bloods and review' in an unstable patient",
   "cutoffs": [
    "**Unstable + positive beta-hCG = theatre NOW**",
    "**Salpingectomy** if healthy contralateral tube",
    "**Salpingotomy** considered if contralateral tube damaged + fertility desired"
   ],
   "whatFirst": "- **Resuscitate (ABC, large-bore IV x2, crossmatch, fluids/blood)** AND activate theatre/senior O&G simultaneously\n- Do not wait for **hCG result or advanced imaging**",
   "discriminator": "- Looks like it needs '**confirmatory imaging first**'\n- Actually: **positive pregnancy test + shock is sufficient** to proceed to theatre",
   "mcqTrap": "- '**Administer methotrexate**' or 'arrange CT to confirm' in a hypotensive woman with positive pregnancy test = WRONG\n  - Instability/rupture = **absolute contraindication to MTX**\n  - Mandate = **immediate surgery**",
   "redFlags": "- **Shoulder-tip pain** = diaphragmatic irritation from haemoperitoneum\n- **Syncope, peritonism, hypotension** = intraperitoneal haemorrhage",
   "source": "RANZCOG Miscarriage/Ectopic guideline (2020); standard Australian emergency O&G",
   "tags": [
    "ectopic",
    "what-first",
    "surgery",
    "rupture"
   ],
   "verified": true,
   "id": "gyn-73",
   "title": "Ruptured Ectopic Pregnancy",
   "subtitle": "Shock plus positive test: resuscitate and straight to theatre"
  },
  {
   "topic": "Septic miscarriage - antibiotics AND evacuation",
   "subarea": "Early pregnancy",
   "trap": "- **Retained products of conception + fever/offensive discharge/uterine tenderness/sepsis** = septic miscarriage, a surgical emergency\n- Management = **IV broad-spectrum antibiotics AND urgent uterine evacuation**\n- Trap: '**IV antibiotics alone and observe**' — fails because infected products remain as the nidus\n- Must **resuscitate, give IV antibiotics, AND evacuate promptly**",
   "whatFirst": "- **IV antibiotics PLUS urgent surgical evacuation** — antibiotics alone is insufficient",
   "discriminator": "- Looks like simple endometritis treatable with antibiotics alone\n- Actually needs **evacuation** because the **infected retained products are the nidus**",
   "mcqTrap": "- '**Commence IV antibiotics and review in 24–48 hours**' = WRONG in septic miscarriage\n- Retained products **must be evacuated**, not just covered with antibiotics",
   "redFlags": "- **Fever + offensive discharge + retained products + tachycardia/hypotension** = septic shock risk\n- Escalate to **senior + theatre**",
   "source": "RANZCOG Miscarriage guideline (2020); eTG (Therapeutic Guidelines) sepsis principles",
   "tags": [
    "miscarriage",
    "sepsis",
    "what-first",
    "surgery"
   ],
   "verified": true,
   "id": "gyn-77",
   "title": "Septic Miscarriage",
   "subtitle": "IV antibiotics AND urgent evacuation, not antibiotics alone"
  },
  {
   "topic": "When MHT is CONTRAINDICATED",
   "subarea": "Menopause, prolapse & incontinence",
   "trap": "- Big exam trap: woman with **history of breast cancer** asking for systemic MHT for severe flushes\n  - Answer = **non-hormonal therapy** (SSRI/SNRI e.g. venlafaxine, gabapentin), NOT systemic MHT\n- Second trap: **undiagnosed PV bleeding** = contraindication — investigate first\n- Note: **low-dose vaginal oestrogen** for genitourinary syndrome (GSM) is generally acceptable even in many breast cancer survivors after specialist discussion\n  - Minimal systemic absorption; it is **systemic MHT** that is contraindicated",
   "whatFirst": "- **Screen for contraindications** before prescribing\n- Breast cancer history + vasomotor symptoms → offer **non-hormonal therapy first** (SSRI/SNRI, gabapentin, CBT)",
   "discriminator": "- **Systemic MHT** = contraindicated post-breast cancer\n- **Low-dose vaginal oestrogen for GSM** = often acceptable, minimal absorption\n- **Non-hormonal flush therapy**: venlafaxine, escitalopram, gabapentin\n- **Oral vs transdermal MHT** matters for VTE risk (see separate card)",
   "redFlags": "- **Active/recent VTE**\n- **Recent MI/stroke**\n- **Current or past breast (or other oestrogen-dependent) cancer**\n- **Active liver disease**\n- **Undiagnosed PV bleeding**\n- **Pregnancy**",
   "cutoffs": [
    "**Breast cancer (current/past) = no systemic MHT**",
    "**Undiagnosed PV bleed** = investigate first"
   ],
   "mnemonic": "'BLUSH' contraindications: Breast cancer, Liver disease (active), Undiagnosed bleeding, Stroke/MI, Hypercoagulable/VTE.",
   "source": "Australasian Menopause Society MHT information sheets (2024); Jean Hailes menopause management; eTG 2024",
   "tags": [
    "MHT",
    "contraindications",
    "breast cancer",
    "VTE"
   ],
   "verified": true,
   "mcqTrap": "- '**Start oral MHT** for a woman with prior breast cancer and disabling flushes' = WRONG\n- Use a **non-hormonal agent** (venlafaxine/SSRI, gabapentin)",
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Breast cancer (current/past)</span><span class=\"gv-pill\">Active/recent VTE</span><span class=\"gv-pill\">Recent MI/stroke</span><span class=\"gv-pill\">Active liver disease</span><span class=\"gv-pill\">Undiagnosed PV bleeding</span><span class=\"gv-pill\">Pregnancy</span></div>",
   "id": "gyn-89",
   "title": "Contraindications To MHT",
   "subtitle": "Breast cancer history means non-hormonal therapy, not MHT"
  },
  {
   "topic": "DEXA T-scores & when to treat without a scan",
   "subarea": "Menopause, prolapse & incontinence",
   "trap": "- Trap: **withholding osteoporosis treatment** because T-score is 'not bad enough' in someone who has ALREADY had a minimal-trauma fracture\n- **Hip/vertebral fragility fracture = treat regardless of T-score**",
   "whatFirst": "- **Minimal-trauma (fragility) fracture**, esp. hip or vertebra → **treat (bisphosphonate) regardless of DEXA result**\n- Otherwise: scan and use T-score to guide treatment",
   "discriminator": "- **T-score ≤ −2.5** = osteoporosis → treat\n- **T-score −1.0 to −2.5** = osteopenia\n- **Minimal-trauma fracture overrides the number** — treat even if DEXA is 'normal' or osteopenic",
   "redFlags": "- **Minimal-trauma hip or vertebral fracture** = treat now\n- **Multiple/recurrent fragility fractures** → ensure adherence + specialist input",
   "cutoffs": [
    "Osteoporosis: **T-score ≤ −2.5**",
    "Osteopenia: **T-score −1.0 to −2.5**",
    "First-line: **bisphosphonate** + calcium/vitamin D adjunct",
    "**Fragility fracture (hip/vertebra) → treat regardless of T-score**"
   ],
   "mcqTrap": "- '**DEXA only shows osteopenia (T −1.8) so no treatment needed**' in a woman with a recent minimal-trauma vertebral fracture = WRONG\n- The **fracture mandates treatment**",
   "mnemonic": "Fracture means treat — even if the scan looks fine. T ≤ −2.5 = osteoporosis.",
   "source": "RACGP/Osteoporosis Australia; eTG, 2024",
   "tags": [
    "osteoporosis",
    "DEXA",
    "T-score",
    "bisphosphonate",
    "fragility-fracture"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-flow'><div class='gv-step'>Minimal-trauma hip/vertebral fracture → TREAT (any T-score)</div><div class='gv-step'>Else: T ≤ −2.5 = osteoporosis → bisphosphonate + Ca/vit D</div></div>",
   "id": "gyn-102",
   "title": "DEXA T-Scores And Treatment",
   "subtitle": "Hip or vertebral fragility fracture: treat regardless of score"
  },
  {
   "topic": "Endometrial hyperplasia management (atypical vs non-atypical)",
   "subarea": "Menopause, prolapse & incontinence",
   "trap": "- Management of hyperplasia hinges on **atypia**\n- **Hyperplasia WITHOUT atypia** → low progression risk → treat medically with **progestogen** (LNG-IUS/Mirena first-line, superior to oral) + re-biopsy\n- **Hyperplasia WITH atypia (EIN)** → high risk of coexisting/progression to cancer (~30–45% have concurrent carcinoma at hysterectomy) → **hysterectomy** is treatment of choice\n- Trap 1: offering **progestogen for atypical hyperplasia** in a postmenopausal woman\n- Trap 2: **jumping to hysterectomy** for simple non-atypical hyperplasia",
   "whatFirst": "- **Determine atypia first**\n  - Non-atypical → **LNG-IUS + surveillance biopsy**\n  - Atypical (postmenopausal/completed family) → **total hysterectomy ± BSO**",
   "discriminator": "- **Non-atypical hyperplasia** = reversible, treat with progestogen\n- **Atypical hyperplasia/EIN** = premalignant, treat with hysterectomy\n- **LNG-IUS** is the preferred progestogen for non-atypical disease",
   "redFlags": "- **Atypia on biopsy**\n- **Persistent hyperplasia despite progestogen**\n- **Postmenopausal status** with atypia",
   "cutoffs": [
    "**Non-atypical = LNG-IUS/progestogen**",
    "**Atypical = hysterectomy**",
    "**~30–45%** of atypical hyperplasia cases have concurrent cancer at hysterectomy"
   ],
   "mnemonic": "'Atypia -> take it out; no atypia -> Mirena out the risk.'",
   "source": "RANZCOG; RCOG/BSGE-aligned hyperplasia guidance; eTG 2024 (endometrial hyperplasia)",
   "tags": [
    "endometrial hyperplasia",
    "atypia",
    "Mirena",
    "hysterectomy"
   ],
   "verified": true,
   "mcqTrap": "- '**Treat postmenopausal atypical hyperplasia with oral progestogen**' = WRONG\n- High concurrent cancer risk → **hysterectomy is preferred**",
   "id": "gyn-97",
   "title": "Endometrial Hyperplasia",
   "subtitle": "Atypia changes everything; non-atypical gets Mirena"
  },
  {
   "topic": "TVUS endometrial thickness threshold in PMB (<=4 mm reassuring)",
   "subarea": "Menopause, prolapse & incontinence",
   "trap": "- Australian cut-off: **endometrial thickness ≤4 mm** = reassuring (>99% NPV for endometrial cancer)\n  - No sampling needed if: single episode + endometrium fully visualised and uniform\n- **ET >4 mm** requires endometrial sampling\n- Trap 1: quoting **5 mm threshold** (older/US figure)\n- Trap 2: applying the 4 mm rule to a woman on **sequential MHT**\n  - Validated reassurance cut-off on sequential MHT is higher (**~7 mm**)\n  - Bleeding **outside expected withdrawal time** triggers work-up regardless\n- Trap 3: 'normal' thin endometrium does **NOT close the case** if bleeding is persistent/recurrent\n  - ET measurement can miss **focal lesions** → proceed to hysteroscopy",
   "whatFirst": "- Measure **double-layer endometrial thickness on TVUS**\n  - **≤4 mm + single episode** = reassure\n  - **>4 mm OR recurrent bleeding** = Pipelle ± hysteroscopy",
   "discriminator": "- **ET measurement** = screening triage\n- **Hysteroscopy + directed biopsy** = gold standard for focal pathology\n- Thin uniform endometrium argues against **diffuse type-1 cancer** but does NOT exclude polyps or focal type-2 cancers",
   "redFlags": "- **Persistent bleeding with thin endometrium** → proceed to hysteroscopy\n- **Inability to fully visualise endometrium** on TVUS → proceed to hysteroscopy\n- **Tamoxifen** → TVUS unreliable, go straight to hysteroscopy",
   "cutoffs": [
    "**≤4 mm** = reassuring (single episode, not on MHT)",
    "**>4 mm** = sample",
    "**NPV >99%** at ≤4 mm",
    "**~7 mm** cut-off applies on sequential MHT"
   ],
   "mnemonic": "'Four or less, no distress' (single episode, off MHT).",
   "source": "Australasian Menopause Society PMB/MHT bleeding information sheet (2024); RANZCOG / O&G Magazine 'Postmenopausal bleeding'; eTG 2024",
   "tags": [
    "TVUS",
    "endometrial thickness",
    "4mm",
    "cut-off"
   ],
   "verified": true,
   "mcqTrap": "- '**ET 5 mm is the threshold for sampling**' = WRONG in Australian practice; cut-off is **>4 mm**\n- '**Thin endometrium = no further action**' when bleeding is recurrent = WRONG",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Endometrial thickness</th><th>Action (single PMB episode, not on MHT)</th></tr></thead><tbody><tr><td><span class=\"gv-num\">&le;4 mm</span></td><td>Reassure (NPV &gt;99%)</td></tr><tr><td><span class=\"gv-num\">&gt;4 mm</span></td><td>Pipelle &plusmn; hysteroscopy</td></tr><tr><td>Recurrent bleed, any thickness</td><td>Hysteroscopy regardless</td></tr></tbody></table>",
   "id": "gyn-87",
   "title": "Endometrial Thickness Threshold In PMB",
   "subtitle": "4 mm or less is reassuring; over 4 mm needs sampling"
  },
  {
   "topic": "Genitourinary syndrome of menopause (GSM) - vaginal oestrogen",
   "subarea": "Menopause, prolapse & incontinence",
   "trap": "- Two distinct traps exist:\n  - **Trap 1**: prescribing **systemic MHT** for isolated vaginal symptoms — overkill; vaginal symptoms often still need topical even when already on systemic MHT\n  - **Trap 2**: thinking **topical low-dose vaginal oestrogen requires a progestogen** for endometrial protection — it does NOT at standard low doses\n    - Systemic absorption is **minimal**\n    - No progestogen needed even in a woman **with a uterus**\n    - Generally considered acceptable in many **breast cancer survivors** after discussion\n- **Non-hormonal** vaginal moisturisers/lubricants are the option for those who decline or cannot use oestrogen",
   "whatFirst": "- **Isolated vaginal/urogenital symptoms** → low-dose vaginal oestrogen (or moisturiser/lubricant) first\n- **Systemic vasomotor symptoms** → systemic MHT\n  - Note: systemic MHT may still need **added vaginal oestrogen** for GSM",
   "discriminator": "- **Topical low-dose vaginal oestrogen**: local effect, no progestogen needed\n- **Systemic MHT**: needs progestogen if uterus is present\n- **GSM** also drives recurrent **UTIs** in postmenopausal women\n  - Vaginal oestrogen **reduces recurrence**",
   "redFlags": "- Any **PMB** still needs full work-up before attributing to atrophy",
   "cutoffs": [
    "Low-dose vaginal oestrogen = **no progestogen** needed"
   ],
   "mnemonic": "'Local stays local' - vaginal oestrogen, no progestogen.",
   "source": "Australasian Menopause Society (vaginal/GSM information sheets, 2024); Jean Hailes GSM; eTG 2024",
   "tags": [
    "GSM",
    "vaginal oestrogen",
    "atrophic vaginitis",
    "recurrent UTI"
   ],
   "verified": true,
   "mcqTrap": "- 'Add a **progestogen** to low-dose vaginal oestrogen in a woman with a uterus' — **wrong**\n  - Minimal systemic absorption means no endometrial protection is needed",
   "id": "gyn-98",
   "title": "Genitourinary Syndrome Of Menopause",
   "subtitle": "Topical vaginal oestrogen needs no added progestogen"
  },
  {
   "topic": "MHT regimen choice — cyclical vs continuous-combined; uterus or not",
   "subarea": "Menopause, prolapse & incontinence",
   "trap": "- **Oestrogen-only MHT in a woman WITH a uterus** → endometrial cancer risk — never do this\n- **Continuous-combined MHT in a perimenopausal woman still having periods** → causes irregular bleeding — wrong regimen choice",
   "whatFirst": "- Determine **uterine status** first\n- Determine **how postmenopausal** she is (timing relative to LMP)\n- Then select the regimen",
   "discriminator": "- **Uterus PRESENT** → must add progestogen:\n  - **Cyclical (sequential)** if perimenopausal, still bleeding, or **<12 months** since LMP\n  - **Continuous-combined** if **>12 months** postmenopausal — gives no bleed\n- **Uterus ABSENT** (hysterectomy) → **oestrogen-only**",
   "redFlags": "- **Unscheduled bleeding** on continuous-combined MHT, especially after the first **3–6 months** → investigate endometrium",
   "cutoffs": [
    "Cyclical/sequential progestogen: perimenopause or **<12 months** postmenopause",
    "Continuous-combined: **>12 months** postmenopause",
    "No uterus → **oestrogen-only**"
   ],
   "mcqTrap": "- 'Prescribe **oestrogen-only** MHT for a 52-year-old with an **intact uterus**' — wrong; unopposed oestrogen → endometrial hyperplasia/cancer\n- '**Continuous-combined** for a perimenopausal woman still menstruating' — wrong; use **cyclical**",
   "mnemonic": "Uterus = add progestogen (Peri = cyclical, Post-12mo = continuous). No uterus = oestrogen only.",
   "source": "RANZCOG / Jean Hailes MHT, 2024",
   "tags": [
    "MHT",
    "regimen",
    "progestogen",
    "endometrial-protection",
    "menopause"
   ],
   "verified": true,
   "visualHtml": "<table class='gv-table'><tr><th>Patient</th><th>Regimen</th></tr><tr><td>No uterus</td><td>oestrogen-only</td></tr><tr><td>Uterus + perimenopausal/still bleeding</td><td>cyclical (sequential)</td></tr><tr><td>Uterus + &gt;12mo postmenopause</td><td>continuous-combined</td></tr></table>",
   "id": "gyn-103",
   "title": "MHT Regimen Choice",
   "subtitle": "Continuous-combined causes bleeding if still menstruating"
  },
  {
   "topic": "MHT benefits/risks + oral vs transdermal (VTE)",
   "subarea": "Menopause, prolapse & incontinence",
   "trap": "- **MHT is first-line** for symptomatic women <60 yrs or within 10 years of menopause ('timing/window hypothesis')\n- **Oral oestrogen** roughly **doubles baseline VTE risk** and raises stroke risk\n- **Transdermal oestrogen** (patch/gel) does **NOT increase VTE** above baseline at standard doses\n  - Avoids **hepatic first-pass** effect — key mechanism\n  - Women with VTE risk factors (obesity, prior VTE, migraine, age) should get **transdermal**, not oral\n- **Breast-cancer risk** is driven mainly by the **progestogen** component and rises with duration\n  - **Micronised progesterone** has a more favourable breast/VTE profile than older synthetic progestins\n- **Oestrogen-only MHT** (post-hysterectomy) carries **little/no increased breast-cancer risk**",
   "whatFirst": "- If **VTE risk factors** present → choose **transdermal** oestrogen over oral\n- If **uterus present** → add progestogen (**micronised progesterone** preferred) or Mirena",
   "discriminator": "- **Oral oestrogen**: increased VTE and stroke risk\n- **Transdermal oestrogen**: VTE-neutral, preferred in higher-risk women\n- **Combined MHT**: increased breast cancer risk with duration\n- **Oestrogen-only** post-hysterectomy: minimal/no breast-cancer increase",
   "redFlags": "- New **leg swelling/chest pain** on MHT → VTE\n- New **focal neurology** → stroke\n- **Breast lump**",
   "cutoffs": [
    "First-line if **<60 yr** or **<10 yr** since menopause",
    "**Transdermal** = VTE-neutral",
    "**Oral** = ~doubles VTE; increased stroke"
   ],
   "mnemonic": "'Patch beats pill for clots' - transdermal spares the liver first-pass.",
   "source": "Australasian Menopause Society 'VTE risk and MHT' and 'Risks and Benefits of MHT' information sheets (2024); Jean Hailes; IMS White Paper",
   "tags": [
    "MHT",
    "VTE",
    "transdermal",
    "timing hypothesis"
   ],
   "verified": true,
   "mcqTrap": "- '**Oral oestradiol** is the safest MHT route in a woman with prior VTE' — wrong; **transdermal** is preferred as it is VTE-neutral",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Route</th><th>VTE/stroke risk</th><th>Use when</th></tr></thead><tbody><tr><td>Oral oestrogen</td><td>Increased (~doubles VTE)</td><td>Low VTE risk</td></tr><tr><td>Transdermal (patch/gel)</td><td>Neutral</td><td>VTE risk factors, obesity, migraine, &gt;60</td></tr></tbody></table>",
   "id": "gyn-90",
   "title": "MHT Risks: Oral Versus Transdermal",
   "subtitle": "Oral oestrogen raises VTE risk; transdermal does not"
  },
  {
   "topic": "Vasomotor symptoms when MHT contraindicated - non-hormonal first-line",
   "subarea": "Menopause, prolapse & incontinence",
   "trap": "- When MHT is **contraindicated** (especially breast cancer survivors) but flushes are disabling, evidence-based non-hormonal options include:\n  - **SSRIs/SNRIs**: venlafaxine, escitalopram\n  - **Gabapentin/pregabalin**\n  - **Clonidine**\n  - **CBT**\n- Critical interaction gotcha: **paroxetine** and **fluoxetine** are potent **CYP2D6 inhibitors**\n  - They **reduce conversion of tamoxifen** to its active metabolite (**endoxifen**)\n  - **Avoid** in women on tamoxifen\n  - Prefer **venlafaxine/desvenlafaxine/escitalopram** instead\n- Trap MCQ options:\n  - Offering MHT 'at the lowest dose' to a breast-cancer survivor — still **contraindicated**\n  - Choosing **paroxetine** for a woman on tamoxifen",
   "whatFirst": "- Confirm **MHT contraindication** first\n- Offer **non-hormonal pharmacotherapy** (venlafaxine/escitalopram) + lifestyle/CBT\n- **Vaginal oestrogen** only for GSM after specialist discussion",
   "discriminator": "- **Systemic MHT**: contraindicated in these patients\n- **Non-hormonal agents**: first-line alternative\n- Among antidepressants:\n  - **Avoid paroxetine/fluoxetine** with tamoxifen (CYP2D6 inhibition)\n  - **Venlafaxine/desvenlafaxine/escitalopram**: safer choices",
   "redFlags": "- New **breast lump**\n- **Mood disorder** needing review",
   "cutoffs": [
    "Avoid **paroxetine/fluoxetine** with tamoxifen (CYP2D6)"
   ],
   "mnemonic": "'Tamoxifen + Paroxetine = Poor pair' (CYP2D6).",
   "source": "Jean Hailes; Australasian Menopause Society non-hormonal therapies; eTG 2024",
   "tags": [
    "non-hormonal",
    "vasomotor",
    "tamoxifen",
    "CYP2D6",
    "venlafaxine"
   ],
   "verified": true,
   "mcqTrap": "- '**Paroxetine** for hot flushes in a woman on tamoxifen' — wrong; it inhibits **CYP2D6** and reduces tamoxifen efficacy\n  - Use **venlafaxine/escitalopram** instead",
   "id": "gyn-95",
   "title": "Non-Hormonal Vasomotor Therapy",
   "subtitle": "Avoid potent SSRIs that block tamoxifen activation"
  },
  {
   "topic": "Overactive bladder pharmacotherapy — antimuscarinic vs mirabegron",
   "subarea": "Menopause, prolapse & incontinence",
   "trap": "- Reaching for an **antimuscarinic first** before bladder training — wrong sequence\n- Giving **oxybutynin** to a frail elderly or cognitively impaired patient\n  - **Anticholinergic load** → falls, confusion\n- Giving an **antimuscarinic for stress incontinence** — wrong diagnosis target",
   "whatFirst": "- **Urge incontinence/OAB** → **bladder training** (+ lifestyle) first\n- Then pharmacotherapy: antimuscarinic (e.g. oxybutynin) OR **mirabegron**",
   "discriminator": "- **Urge/OAB**: bladder training → antimuscarinic/mirabegron\n- **Stress incontinence**: **pelvic floor muscle training** first — NOT antimuscarinics\n- In **elderly/cognitive impairment**: prefer **mirabegron** (β3-agonist)\n  - Avoids **anticholinergic** cognitive/falls burden\n  - Caution: mirabegron contraindicated in **uncontrolled hypertension**",
   "redFlags": "- **Cognitive impairment**, frailty, falls risk, high existing anticholinergic burden\n  - Avoid **oxybutynin**; use **mirabegron**\n  - Check for **uncontrolled hypertension** before mirabegron",
   "cutoffs": [
    "OAB: **behavioural (bladder training) first**, then drug",
    "Stress incontinence: **pelvic floor exercises** first"
   ],
   "mcqTrap": "- 'Start **oxybutynin** as first step for OAB in an 82-year-old with mild dementia' — wrong; **bladder training first**, and prefer mirabegron\n- '**Antimuscarinic for stress incontinence**' — wrong target",
   "mnemonic": "Urge: train then antimuscarinic/mirabegron. Elderly brain → Mirabegron, not oxybutynin.",
   "source": "RANZCOG / eTG urinary incontinence, 2024",
   "tags": [
    "OAB",
    "urge-incontinence",
    "antimuscarinic",
    "mirabegron",
    "elderly"
   ],
   "verified": true,
   "visualHtml": "<table class='gv-table'><tr><th>Type</th><th>First step</th></tr><tr><td>Urge / OAB</td><td>bladder training → antimuscarinic OR mirabegron</td></tr><tr><td>Stress</td><td>pelvic floor exercises</td></tr><tr><td>Elderly / cognitive</td><td>prefer mirabegron (avoid oxybutynin)</td></tr></table>",
   "id": "gyn-101",
   "title": "Overactive Bladder Pharmacotherapy",
   "subtitle": "Avoid oxybutynin in the frail elderly; train bladder first"
  },
  {
   "topic": "Pelvic organ prolapse: conservative before surgery",
   "subarea": "Menopause, prolapse & incontinence",
   "trap": "- The trap is recommending **surgery** (or worse, **vaginal mesh**) as the first answer\n- **Conservative management** is first-line before surgery:\n  - **PFMT** for mild prolapse\n  - **Vaginal pessary** for symptomatic prolapse\n  - Especially in women who have not completed childbearing, are poor surgical candidates, or prefer non-surgical options\n- Post-2017 TGA context:\n  - **Transvaginal mesh** for POP was **removed from the ARTG** on **28 Nov 2017**\n  - **MBS rebates** now only payable for **non-mesh** POP procedures\n  - Mesh is NOT a routine first-line surgical answer; **native-tissue repair** preferred\n- **Asymptomatic prolapse** generally needs no treatment — observe\n- **Topical vaginal oestrogen**: useful adjunct (improves tissue quality and pessary tolerance)",
   "whatFirst": "- Confirm symptomatic and exclude red flags first\n- Offer **conservative management**:\n  - Lifestyle: weight, constipation, heavy lifting\n  - **PFMT** for mild prolapse\n  - **Pessary**\n- **Surgery** reserved for failed/declined conservative care or severe prolapse",
   "discriminator": "- **POP-Q staging** guides severity but treatment is driven by **symptoms**, not stage alone\n- Compartment guides the repair (not the conservative step):\n  - **Cystocele** (anterior) = bladder\n  - **Rectocele** (posterior) = bowel\n  - **Uterine/vault** = apical",
   "redFlags": "- **Ulceration** of prolapsed tissue\n- **Urinary retention**/obstructed voiding\n- **Hydronephrosis** from procidentia\n- **Vaginal bleeding** → exclude malignancy",
   "cutoffs": [
    "Conservative (pessary/PFMT) **first-line** for symptomatic prolapse",
    "Transvaginal mesh for POP removed from ARTG **28 Nov 2017**"
   ],
   "mnemonic": "'Pessary precedes the scalpel.'",
   "source": "RANZCOG Pelvic Floor Health / POP statements; TGA urogynaecological mesh decision (28 Nov 2017); MBS mesh-restriction changes (1 Jul 2018)",
   "tags": [
    "prolapse",
    "pessary",
    "conservative",
    "what-first",
    "mesh"
   ],
   "verified": true,
   "mcqTrap": "- 'Refer for **transvaginal mesh repair**' — wrong; mesh for prolapse was removed from the ARTG in Australia and conservative options (pessary, PFMT) come first",
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Symptomatic prolapse (no red flags)</div><div class=\"gv-step\">Lifestyle + PFMT + pessary (&plusmn; vaginal oestrogen)</div><div class=\"gv-step\">Surgery only if conservative fails/declined</div></div>",
   "id": "gyn-92",
   "title": "Pelvic Organ Prolapse Management",
   "subtitle": "Pessary and pelvic floor training before any surgery"
  },
  {
   "topic": "Pelvic organ prolapse — pessary types & complications",
   "subarea": "Menopause, prolapse & incontinence",
   "trap": "- Going straight to **surgery** — wrong; conservative is first-line\n- Fitting a pessary and **not reviewing it** — neglected pessaries cause **erosion/fistula**",
   "whatFirst": "- Offer **conservative management** first: pelvic floor physiotherapy, then a pessary\n- **Surgery** only if pessary fails or is declined",
   "discriminator": "- **Ring pessary**: first-line; easy; can stay in for intercourse\n- **Gellhorn** (space-occupying): for more advanced/vault prolapse; must be **removed** for intercourse\n- All pessaries need **regular review/removal-and-clean** to prevent:\n  - Vaginal **erosion**, ulceration, discharge, bleeding\n  - Rarely: **fistula**",
   "redFlags": "- **Neglected pessary** → erosion/ulceration, offensive discharge, bleeding, fistula\n- New **bleeding** in a pessary user → examine for erosion AND **exclude malignancy**",
   "cutoffs": [
    "First-line = **conservative** (physio → pessary)",
    "Pessary review typically every **~3–6 months**"
   ],
   "mcqTrap": "- 'Offer **surgical repair as first-line**' for symptomatic prolapse — usually wrong; conservative options first\n- 'Fit a pessary and review in **2 years**' — wrong; neglected pessaries erode",
   "mnemonic": "Ring first, Gellhorn for big ones; review Regularly or it eRodes.",
   "source": "RANZCOG pelvic organ prolapse, 2024",
   "tags": [
    "prolapse",
    "pessary",
    "conservative",
    "complications",
    "urogynae"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-pills'><span class='gv-pill'>Physio → pessary first</span><span class='gv-pill'>Ring (simple) vs Gellhorn (advanced)</span><span class='gv-pill'>regular review → avoid erosion/fistula</span></div>",
   "id": "gyn-99",
   "title": "Pelvic Organ Prolapse Pessaries",
   "subtitle": "Neglected unreviewed pessaries cause erosion and fistula"
  },
  {
   "topic": "Postmenopausal bleeding (PMB) = endometrial cancer until excluded",
   "subarea": "Menopause, prolapse & incontinence",
   "trap": "- The answer to PMB is **NEVER 'reassure', 'observe', or 'treat empirically as atrophic vaginitis'**\n- **Every episode of PMB** mandates investigation: TVUS + endometrial assessment\n- Most tempting wrong MCQ option: 'prescribe **topical oestrogen** for presumed atrophic vaginitis and review' BEFORE excluding cancer\n  - Atrophy is the commonest cause but is a **diagnosis of exclusion**\n- Second trap: a woman on **sequential MHT** has expected withdrawal bleeds — BUT:\n  - **Unscheduled bleeding** on MHT, OR\n  - Any bleeding on **continuous-combined/oestrogen-only** once amenorrhoea is established or after the first 6 months\n  - → still needs **work-up**",
   "whatFirst": "- **TVUS** to measure endometrial thickness — first triage test\n- If **ET >4 mm** OR recurrent/persistent bleeding regardless of thickness → **endometrial sampling** (Pipelle) +/- hysteroscopy",
   "discriminator": "- **Atrophic vaginitis** (commonest cause) vs **endometrial cancer**: cannot distinguish clinically — imaging/sampling required\n- **Recurrent PMB** despite thin endometrium still needs **hysteroscopy**\n  - Focal lesions (polyp, type-2 cancer) can be missed by ET measurement alone",
   "redFlags": "- **Recurrent/persistent bleeding**\n- **ET >4 mm**\n- **Tamoxifen use**\n- **Obesity/diabetes/PCOS**\n- **Lynch syndrome**\n- **Age >60**",
   "cutoffs": [
    "Any PMB = **investigate**",
    "Endometrial cancer in **~10%** of PMB",
    "ET **>4 mm** = sample"
   ],
   "mnemonic": "PMB = Probably Malignant (until) Biopsy says otherwise.",
   "source": "Australasian Menopause Society 'Bleeding - perimenopausal, postmenopausal and breakthrough on MHT' (2024); RANZCOG / O&G Magazine 'Postmenopausal bleeding'; eTG 2024",
   "tags": [
    "PMB",
    "endometrial cancer",
    "red flag",
    "what-first"
   ],
   "verified": true,
   "mcqTrap": "- 'Prescribe **vaginal oestrogen** for atrophic vaginitis and review in 3 months' — wrong; malignancy must be excluded first by **TVUS + sampling**",
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">PMB (any episode)</div><div class=\"gv-step\">TVUS endometrial thickness</div><div class=\"gv-step\">ET >4 mm OR recurrent &rarr; Pipelle &plusmn; hysteroscopy</div></div>",
   "id": "gyn-86",
   "title": "Postmenopausal Bleeding",
   "subtitle": "Never reassure; always investigate for endometrial cancer"
  },
  {
   "topic": "Osteoporosis post-menopause: who to scan & when to treat",
   "subarea": "Menopause, prolapse & incontinence",
   "trap": "- The trap is **mis-quoting the numbers** — get these exact:\n  - **T-score ≤-2.5** = osteoporosis\n  - **T-score -1.0 to -2.5** = osteopenia\n- **Treat regardless of BMD** if:\n  - Any **minimal-trauma (fragility) fracture**, especially hip/vertebral\n  - **Long-term glucocorticoids**\n  - No T-score cut-off required in these cases\n- For the **osteopenic grey zone** → use **FRAX/Garvan** absolute fracture risk:\n  - Treat if 10-yr **major osteoporotic fracture (MOF) risk ≥20%** and/or **hip fracture risk ≥3%**\n  - Refer for DXA once FRAX MOF reaches **≥10%**\n- PBS subsidy considerations:\n  - **Very-high-risk** PBS subsidy requires T-score **≤-2.5** PLUS hip/spine fracture (or 2 minimal-trauma fractures)\n  - Minimal-trauma fracture alone (or **age ≥70 with T≤-2.5**) supports first-line PBS antiresorptive therapy\n- Big trap: 'a vertebral/hip fragility fracture needs **DXA confirming T≤-2.5** before treating' — **WRONG**; minimal-trauma fracture is itself the indication",
   "whatFirst": "- **First-line therapy**: oral bisphosphonate (alendronate/risedronate) + calcium/vitamin D + weight-bearing exercise\n- If bisphosphonate not tolerated/contraindicated → **denosumab** or **zoledronic acid**\n- Always correct **vitamin D and calcium** and exclude secondary causes first",
   "discriminator": "- **T-score** (vs young adult): defines osteoporosis\n- **Z-score** (vs age-matched): if low → think **secondary osteoporosis**, investigate\n- **FRAX** (absolute risk): drives treatment in osteopenia\n- **Raw BMD**: diagnosis only\n- **Denosumab**: NEVER stop abruptly\n  - Rebound **vertebral fractures** on cessation\n  - Must **transition to a bisphosphonate** when stopping",
   "redFlags": "- **Minimal-trauma vertebral/hip fracture** → treat now\n- **Glucocorticoid use**\n- Height loss/**kyphosis**\n- Very high **FRAX** → treat now",
   "cutoffs": [
    "T-score **≤-2.5** = osteoporosis",
    "**Fragility fracture** = treat (any BMD)",
    "FRAX MOF **≥20%** and/or hip **≥3%** (treat); MOF **≥10%** (refer for DXA)",
    "Age **≥70** + T**≤-2.5** also diagnostic"
   ],
   "mnemonic": "'Fracture trumps the number' - a fragility fracture mandates treatment whatever the DXA says.",
   "source": "2024 RACGP / Healthy Bones Australia osteoporosis guideline (MJA 2025; 222:9); PBS criteria; eTG 2024",
   "tags": [
    "osteoporosis",
    "T-score",
    "FRAX",
    "PBS",
    "denosumab"
   ],
   "verified": true,
   "mcqTrap": "- 'Wait for **DXA confirming T-score ≤-2.5** before treating a woman with a minimal-trauma vertebral fracture' — wrong; the **fragility fracture itself** is the treatment indication",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Scenario</th><th>Action</th></tr></thead><tbody><tr><td>Minimal-trauma (hip/vertebral) fracture</td><td>Treat (any BMD)</td></tr><tr><td>Age &ge;70 + T-score <span class=\"gv-num\">&le;&minus;2.5</span></td><td>Treat</td></tr><tr><td>Osteopenia + high FRAX (MOF &ge;20% / hip &ge;3%)</td><td>Treat</td></tr><tr><td>Osteopenia, low FRAX</td><td>Lifestyle, Ca/vit D, monitor</td></tr></tbody></table>",
   "id": "gyn-93",
   "title": "Postmenopausal Osteoporosis",
   "subtitle": "Any fragility fracture means treat regardless of T-score"
  },
  {
   "topic": "Premature ovarian insufficiency (POI) - treat, don't withhold MHT",
   "subarea": "Menopause, prolapse & incontinence",
   "trap": "- Counter-intuitive gotcha: women with POI **SHOULD be offered MHT** (or COC) until at least the **average age of natural menopause (~51)**\n  - Purpose: protect **bone** and **cardiovascular** health\n  - Withholding MHT 'because of breast-cancer fears from the WHI' — **WRONG**\n  - WHI risk data apply to **older postmenopausal women**, NOT to replacing physiological hormones in a young woman\n- Also: **POI does not equal infertility**\n  - Spontaneous ovulation can still occur\n  - **Contraception still needed** if pregnancy is not desired",
   "whatFirst": "- Confirm with **repeat FSH** on two occasions (~4–6 weeks apart) with amenorrhoea/oligomenorrhoea **<40 yrs**\n- Investigate cause:\n  - **Karyotype/fragile-X**\n  - **Autoimmune** screen\n  - **Iatrogenic** causes\n- Start **MHT/COC** for symptom control AND bone/CV protection until **~age 51**",
   "discriminator": "- **POI**: FSH high, age <40 → treat to protect **bone/CV**\n- **Natural menopause**: ~age 51 → individualised MHT\n- MHT in POI is **REPLACEMENT**, not the WHI risk-benefit scenario",
   "redFlags": "- Associated **autoimmune disease** (thyroid, adrenal)\n- **Turner mosaicism**\n- Family history **fragile-X**",
   "cutoffs": [
    "Menopause **<40** = POI",
    "Raised FSH **x2** (4–6 weeks apart)",
    "Treat to **~age 51**"
   ],
   "mnemonic": "'POI = Protect Organs (bone+heart) - give back the hormones.'",
   "source": "RANZCOG; Australasian Menopause Society POI position statement (ESHRE-aligned); Jean Hailes; eTG 2024",
   "tags": [
    "POI",
    "premature menopause",
    "MHT",
    "bone protection"
   ],
   "verified": true,
   "mcqTrap": "- 'Avoid MHT in a **35-year-old with POI** due to breast cancer risk' — wrong; she needs hormone replacement to **~age 51** for bone/CV protection",
   "id": "gyn-96",
   "title": "Premature Ovarian Insufficiency",
   "subtitle": "Offer MHT until age 51; do not withhold it"
  },
  {
   "topic": "Tamoxifen and the endometrium (PMB gotcha)",
   "subarea": "Menopause, prolapse & incontinence",
   "trap": "- **TVUS endometrial thickness is UNRELIABLE in tamoxifen users**\n  - Subendometrial cysts/oedema **falsely thicken** the endometrium\n  - A woman on tamoxifen with PMB goes **straight to hysteroscopy + biopsy**\n  - Do **NOT** apply the standard **4 mm TVUS rule** to tamoxifen users\n- **Asymptomatic tamoxifen users** do NOT need routine endometrial surveillance\n  - Only investigate if they **bleed**",
   "whatFirst": "- **Tamoxifen user with abnormal/PMB bleeding** → **hysteroscopy + endometrial biopsy** directly\n  - Do not rely on TVUS thickness",
   "discriminator": "- **Standard PMB**: TVUS triage with **4 mm rule**\n- **Tamoxifen-associated PMB**: TVUS unreliable → **hysteroscopy regardless of measured thickness**",
   "redFlags": "- Any **bleeding** in a tamoxifen user = investigate fully",
   "cutoffs": [
    "Tamoxifen + bleeding = **hysteroscopy** (skip 4 mm rule)",
    "**No routine surveillance** if asymptomatic"
   ],
   "mnemonic": "'Tamoxifen tricks the TVUS' - go to hysteroscopy.",
   "source": "Australasian Menopause Society PMB information sheet (2024, tamoxifen exception); RANZCOG / O&G Magazine; Cancer Australia; eTG 2024",
   "tags": [
    "tamoxifen",
    "endometrial cancer",
    "PMB",
    "hysteroscopy"
   ],
   "verified": true,
   "mcqTrap": "- 'Reassure the tamoxifen user with PMB because **ET is 3 mm** on TVUS' — wrong; TVUS thickness is **unreliable on tamoxifen**, do **hysteroscopy**",
   "id": "gyn-94",
   "title": "Tamoxifen And The Endometrium",
   "subtitle": "Tamoxifen PMB goes straight to hysteroscopy, ignore the 4 mm rule"
  },
  {
   "topic": "Testosterone for menopausal HSDD — limits of MHT for libido",
   "subarea": "Menopause, prolapse & incontinence",
   "trap": "- Expecting **standard MHT** (oestrogen ± progestogen) to fix low libido\n  - MHT alone does **NOT** reliably improve hypoactive sexual desire disorder",
   "whatFirst": "- **Exclude other contributors first**: relationship issues, mood disorders, dyspareunia/GSM, medications\n- Then consider **testosterone** for postmenopausal HSDD",
   "discriminator": "- The only evidence-based indication for **testosterone in women** is postmenopausal HSDD after other causes are excluded\n- **MHT** treats vasomotor/GSM symptoms but is not a reliable libido treatment",
   "redFlags": "- Monitor for **androgenic side-effects**: acne, hirsutism\n- Avoid **supraphysiological testosterone levels**\n- Treat coexisting **GSM with vaginal oestrogen** for dyspareunia-driven low desire",
   "cutoffs": [
    "**Testosterone** indication: postmenopausal HSDD, other causes excluded",
    "**MHT alone** = unreliable for libido"
   ],
   "mcqTrap": "- 'Increase the **oestrogen dose** to improve libido' — wrong; MHT doesn't reliably fix HSDD\n- Correct 'which statement is true' answer: **testosterone is indicated for postmenopausal HSDD**",
   "mnemonic": "Libido low after menopause? Testosterone (once other causes excluded), not more oestrogen.",
   "source": "RANZCOG / International testosterone consensus; Jean Hailes, 2024",
   "tags": [
    "testosterone",
    "HSDD",
    "MHT",
    "libido",
    "which-statement"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-pills'><span class='gv-pill'>HSDD postmenopausal</span><span class='gv-pill'>exclude other causes</span><span class='gv-pill'>testosterone (not more oestrogen)</span></div>",
   "id": "gyn-104",
   "title": "Testosterone For Menopausal HSDD",
   "subtitle": "Standard MHT does not reliably restore low libido"
  },
  {
   "topic": "Transvaginal mesh — Australian ban & complications",
   "subarea": "Menopause, prolapse & incontinence",
   "trap": "- Recommending **transvaginal mesh** for prolapse\n- Failing to recognise **mesh erosion** — both are exam-relevant\n- TGA banned/restricted transvaginal mesh for prolapse; complications are high-yield",
   "whatFirst": "- Know the **Australian TGA landscape**: transvaginal mesh devices for prolapse repair removed in **2017** due to harm\n- **Mid-urethral slings** for stress incontinence remain available but with strict informed consent and restrictions",
   "discriminator": "- **Mesh erosion/exposure** presents with:\n  - Persistent **vaginal discharge**\n  - **Dyspareunia** (and partner discomfort — 'hispareunia')\n  - **Recurrent UTIs**\n  - Vaginal **bleeding**\n  - **Chronic pain**\n- Recognise these features in a woman with **prior mesh surgery**",
   "redFlags": "- Chronic pelvic pain, dyspareunia, recurrent UTI, vaginal discharge/bleeding **after mesh surgery**\n  - → suspect **mesh complication** → refer to specialist mesh service",
   "cutoffs": [
    "Transvaginal mesh for prolapse: **banned/withdrawn by TGA (2017)**",
    "Mid-urethral sling for SUI: **available but restricted** + enhanced consent required"
   ],
   "mcqTrap": "- '**Transvaginal mesh** is first-line for vaginal prolapse repair' — wrong; withdrawn in Australia\n- Mistaking **mesh-erosion discharge/dyspareunia** for simple vaginitis",
   "mnemonic": "Mesh erosion = Discharge, Dyspareunia, recurrent UTI; TGA pulled vaginal prolapse mesh.",
   "source": "TGA transvaginal mesh action (2017); RANZCOG, 2024",
   "tags": [
    "mesh",
    "TGA-ban",
    "complications",
    "Australian-specific",
    "incontinence"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-pills'><span class='gv-pill'>TGA pulled prolapse mesh (2017)</span><span class='gv-pill'>erosion: discharge, dyspareunia, recurrent UTI</span></div>",
   "id": "gyn-100",
   "title": "Transvaginal Mesh",
   "subtitle": "TGA banned it for prolapse; recognise mesh erosion"
  },
  {
   "topic": "Unopposed oestrogen CONTRAINDICATED with an intact uterus",
   "subarea": "Menopause, prolapse & incontinence",
   "trap": "- Classic MCQ: 52-year-old with hot flushes + **intact uterus** prescribed 'oestradiol patch alone' — **wrong**\n  - She MUST also receive a **progestogen** (or Mirena LNG-IUS) for endometrial protection\n- **Oestrogen-only** is ONLY appropriate **after hysterectomy**\n- Reverse trap: giving **combined MHT post-hysterectomy** needlessly adds breast-cancer/VTE risk from the progestogen\n  - Post-hysterectomy = **oestrogen-only**",
   "whatFirst": "- Determine **uterus present or absent**\n  - Uterus **present** = combined (continuous-combined or sequential) or oestrogen + Mirena\n  - Uterus **absent** = oestrogen-only",
   "discriminator": "- **Sequential combined MHT**: cyclical progestogen, perimenopause, planned withdrawal bleed\n- **Continuous-combined MHT**: daily progestogen, postmenopause, aims for no bleed\n- Use **sequential** if still perimenopausal / within ~12 months of LMP\n- Use **continuous-combined** once clearly postmenopausal",
   "redFlags": "- **Unscheduled bleeding** on continuous-combined MHT after 6 months (or once amenorrhoea established)\n  - → **investigate**",
   "cutoffs": [
    "Uterus present = **progestogen mandatory**",
    "Post-hysterectomy = **oestrogen-only**"
   ],
   "mnemonic": "'No uterus, no progestogen; uterus = you must oppose.'",
   "source": "Australasian Menopause Society (combined MHT / oestrogen-only MHT information sheets, 2024); Cancer Australia endometrial cancer risk factors; Jean Hailes",
   "tags": [
    "MHT",
    "unopposed oestrogen",
    "endometrial protection",
    "contraindication"
   ],
   "verified": true,
   "mcqTrap": "- 'Oestradiol patch alone for a **52yo with an intact uterus**' — wrong\n  - Needs a **progestogen** (or Mirena) to prevent endometrial hyperplasia/cancer",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Uterus</th><th>MHT regimen</th></tr></thead><tbody><tr><td>Present</td><td>Oestrogen + progestogen (combined) OR oestrogen + Mirena</td></tr><tr><td>Absent (hysterectomy)</td><td>Oestrogen-only</td></tr></tbody></table>",
   "id": "gyn-88",
   "title": "Unopposed Oestrogen With Intact Uterus",
   "subtitle": "Intact uterus always needs a progestogen for protection"
  },
  {
   "topic": "Urinary incontinence: stress vs urge vs overflow - what-first",
   "subarea": "Menopause, prolapse & incontinence",
   "trap": "- **Conservative measures are first-line** for both stress and urge incontinence\n- Very first step is **urinalysis** (exclude UTI) + bladder diary — NOT urodynamics or surgery\n- Stress UI → **supervised PFMT ~3 months** first-line; surgery (mid-urethral sling/colposuspension) only after conservative failure\n- Urge UI/OAB → **bladder training + lifestyle** (reduce caffeine) first-line, THEN antimuscarinic or topical vaginal oestrogen\n  - **Oxybutynin** = PBS-listed antimuscarinic; mind anticholinergic load in elderly\n  - Consider **mirabegron** (beta-3 agonist) as alternative\n- Classic traps:\n  - Jumping to **urodynamics or surgery** before conservative therapy\n  - Giving **anticholinergic to a frail elderly woman** first\n  - Giving anticholinergic to a woman with **overflow incontinence**",
   "whatFirst": "- **Urinalysis** (exclude UTI/haematuria) + post-void residual + bladder diary\n- Then **PFMT** (stress) or **bladder training** (urge)\n- **Urodynamics** only before surgery or when the diagnosis is unclear",
   "discriminator": "- **Stress**: leak with raised intra-abdominal pressure, no urge\n- **Urge/OAB**: sudden urgency ± leak, frequency, nocturia\n- **Overflow**: continuous dribble, palpable bladder, high post-void residual\n  - Cause: obstruction or neurogenic/diabetic atonic bladder\n  - An **anticholinergic would WORSEN** overflow\n- **Mixed** = treat the **predominant symptom** first",
   "redFlags": "- **Haematuria**, recurrent UTI, palpable bladder/high PVR (overflow), neurological signs, pelvic mass\n  - → **refer/investigate** before labelling 'simple' incontinence",
   "cutoffs": [
    "**PFMT ~3 months** before surgery (stress)",
    "**Bladder training** first-line (urge)",
    "**Oxybutynin** = PBS-listed antimuscarinic"
   ],
   "mnemonic": "'SUO': Stress = Squeeze (PFMT); Urge = Untrain the bladder (bladder training); Overflow = Obstruction/atony (don't anticholinergic).",
   "source": "RACGP HANDI 'Pelvic floor muscle training: urinary incontinence'; RANZCOG Pelvic Floor Health; eTG 2024",
   "tags": [
    "incontinence",
    "stress",
    "urge",
    "overflow",
    "what-first"
   ],
   "verified": true,
   "mcqTrap": "- 'Refer for **urodynamics / mid-urethral sling**' as the first step for stress UI — wrong\n  - **Supervised PFMT ~3 months** comes first\n- Prescribing **oxybutynin for overflow incontinence** — wrong; worsens retention",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Type</th><th>Clue</th><th>First-line</th></tr></thead><tbody><tr><td>Stress</td><td>Leak on cough/exertion</td><td>PFMT ~3 months</td></tr><tr><td>Urge / OAB</td><td>Urgency, frequency, nocturia</td><td>Bladder training, &darr;caffeine, then oxybutynin/mirabegron</td></tr><tr><td>Overflow</td><td>Dribble, palpable bladder, high PVR</td><td>Relieve obstruction; catheter; NO anticholinergic</td></tr></tbody></table>",
   "id": "gyn-91",
   "title": "Urinary Incontinence Initial Workup",
   "subtitle": "Urinalysis and bladder diary first, never urodynamics"
  },
  {
   "topic": "Sexual assault acute management — forensic/EC/PEP windows",
   "subarea": "Gynae-onc & NSW law",
   "trap": "- Examining or letting the patient **wash before forensic care** (if she wishes to report)\n- Missing the time-critical **HIV PEP window** (≤72 h)\n- **Overriding her autonomy** about reporting",
   "whatFirst": "- Ensure **safety + consent + autonomy** → refer to a **Sexual Assault Service**\n- If reporting is being considered, **preserve forensic evidence**: don't wash/change/examine prematurely\n- Offer:\n  - **Emergency contraception**\n  - **STI prophylaxis**\n  - **HIV PEP** (within 72 h)\n  - **Hepatitis B** prophylaxis",
   "discriminator": "- **Reporting is the patient's CHOICE** — medical care + EC + PEP is offered regardless of whether she reports\n- **Forensic evidence collection has time limits** and should precede washing/examination if she may report",
   "redFlags": "- **HIV PEP must start within 72 h** (sooner is better)\n- Acute injuries / **suicidality** / ongoing danger → manage first\n- **Document carefully**; obtain consent for each step",
   "cutoffs": [
    "**HIV PEP: within 72 hours**",
    "**Emergency contraception**: ASAP (ulipristal up to 120 h / Cu-IUD up to 5 days)",
    "Offer **hepatitis B prophylaxis** + STI testing/prophylaxis + follow-up"
   ],
   "mcqTrap": "- 'Examine and **clean the patient immediately**, then decide about forensics' — wrong\n  - If she may report, **preserve evidence first**\n- '**PEP can wait** until the STI results return' — wrong; PEP is time-critical (≤72 h)",
   "mnemonic": "Consent first; preserve forensics; EC + PEP (≤72h) + HepB; refer to Sexual Assault Service.",
   "source": "NSW Health Sexual Assault Services; ASHM PEP guidelines, 2024",
   "tags": [
    "sexual-assault",
    "forensic",
    "PEP",
    "emergency-contraception",
    "ethics"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-flow'><div class='gv-step'>Safety + consent + her choice re reporting</div><div class='gv-step'>If reporting: preserve forensics (no washing/exam first)</div><div class='gv-step'>EC + STI prophylaxis + HIV PEP ≤72h + HepB → Sexual Assault Service</div></div>",
   "id": "gyn-127",
   "title": "Acute Sexual Assault Management",
   "subtitle": "Forensic before washing; mind the HIV PEP window"
  },
  {
   "topic": "Bartholin cyst vs abscess management (Word catheter / marsupialisation)",
   "subarea": "Gynae-onc & NSW law",
   "trap": "- Performing simple **incision and drainage** of a Bartholin abscess — it **RECURS** because the cavity reseals\n- In **women >40**: don't just drain without considering **biopsy**",
   "whatFirst": "- **Asymptomatic simple cyst** → no treatment\n- **Abscess** (or symptomatic cyst) → drainage that keeps a tract open:\n  - **Word catheter insertion** OR\n  - **Marsupialisation**\n  - NOT simple I&D",
   "discriminator": "- **Simple I&D**: immediate relief but **high recurrence** (no epithelialised tract)\n- **Word catheter** (4–6 weeks) or **marsupialisation**: create a permanent drainage tract → **low recurrence**",
   "redFlags": "- **Age >40** (especially solid/irregular/persistent gland) → **biopsy/excise** to exclude Bartholin gland carcinoma\n- Surrounding **cellulitis/sepsis** → antibiotics",
   "cutoffs": [
    "**Word catheter** left in situ ~**4–6 weeks** to epithelialise tract",
    "Biopsy threshold: **age > 40** or atypical features"
   ],
   "mcqTrap": "- '**Incise and drain**' for a recurrent Bartholin abscess — wrong, high recurrence\n  - Choose **Word catheter / marsupialisation**\n- In **>40s**, 'reassure and discharge' is wrong — consider **biopsy**",
   "mnemonic": "Word catheter = keep the Word (tract) open. Over-40 = think carcinoma.",
   "source": "RANZCOG / eTG vulval conditions, 2024",
   "tags": [
    "Bartholin",
    "abscess",
    "surgery",
    "vulval",
    "over-40"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-flow'><div class='gv-step'>Asymptomatic cyst → observe</div><div class='gv-step'>Abscess → Word catheter / marsupialisation (not simple I&D)</div><div class='gv-step'>Age &gt;40 → biopsy to exclude carcinoma</div></div>",
   "id": "gyn-117",
   "title": "Bartholin Cyst and Abscess",
   "subtitle": "Simple I&D recurs; use Word catheter or marsupialisation"
  },
  {
   "topic": "BRCA — risk-reducing bilateral salpingo-oophorectomy timing",
   "subarea": "Gynae-onc & NSW law",
   "trap": "- Failing to recognise the **hereditary breast + ovarian** cancer pattern\n- **Mistiming** risk-reducing BSO — there is a recommended age window after childbearing",
   "whatFirst": "- Strong family history of **breast + ovarian cancer at young age** → **BRCA testing**\n- Discuss **risk-reducing BSO** after childbearing, in the recommended age window",
   "discriminator": "- **BRCA** = breast + ovarian/tubal cancer\n  - vs **Lynch syndrome** = colorectal/endometrial cancer\n- **Risk-reducing BSO** substantially reduces:\n  - **Ovarian cancer mortality**\n  - **Breast cancer risk** (if premenopausal)\n- Timing differs:\n  - **BRCA1**: ~35–40 years\n  - **BRCA2**: ~40–45 years",
   "redFlags": "- Multiple **young relatives** with breast/ovarian cancer\n- **Ashkenazi Jewish ancestry**\n- Bilateral/early breast cancer\n  - → **genetic referral**",
   "cutoffs": [
    "Risk-reducing BSO: **BRCA1 ~age 35–40**, BRCA2 ~age 40–45 (after childbearing)",
    "**BSO** markedly cuts ovarian cancer mortality"
   ],
   "mcqTrap": "- '**Annual CA125 + ultrasound** is adequate ovarian cancer prevention in BRCA carriers' — wrong\n  - Screening is **unreliable** for ovarian cancer\n  - **Risk-reducing BSO** is the effective intervention",
   "mnemonic": "BRCA = Breast + ovaRy; BSO by ~35–40 (BRCA1) / 40–45 (BRCA2) after kids.",
   "source": "Cancer Australia / eviQ BRCA risk management, 2024",
   "tags": [
    "BRCA",
    "ovarian-cancer",
    "risk-reducing-BSO",
    "hereditary",
    "timing"
   ],
   "verified": true,
   "visualHtml": "<table class='gv-table'><tr><th></th><th>RR-BSO age</th></tr><tr><td>BRCA1</td><td>~35–40</td></tr><tr><td>BRCA2</td><td>~40–45</td></tr></table>",
   "id": "gyn-120",
   "title": "BRCA Risk-Reducing Salpingo-Oophorectomy",
   "subtitle": "Time BSO to a recommended age window after childbearing"
  },
  {
   "topic": "Adult capacity, refusal of treatment & emergency doctrine",
   "subarea": "Gynae-onc & NSW law",
   "trap": "- **Overriding a competent adult woman's refusal** of life-saving treatment (e.g. blood products) 'in her best interests'\n  - A **competent adult can refuse**, even if it leads to death",
   "whatFirst": "- **Presume capacity** in adults\n- Assess it as **decision-specific**: can she understand, retain, weigh, and communicate?\n- If she has capacity, her **informed refusal must be respected**",
   "discriminator": "- **Capacity is decision-specific and time-specific**, not global\n- A **competent refusal of blood products** (e.g. Jehovah's Witness) is **binding**\n- **Emergency doctrine**: if the patient lacks capacity AND no valid advance directive/substitute decision-maker is available → may give **necessary emergency treatment to preserve life**",
   "redFlags": "- **Unconscious/incapacitated + no advance directive** → treat under **emergency doctrine**\n- **Valid advance care directive** refusing treatment → must be followed even in emergency",
   "cutoffs": [
    "**Capacity** = decision-specific (understand/retain/weigh/communicate)",
    "**Competent adult refusal** is binding; emergency doctrine only when no capacity + no directive"
   ],
   "mcqTrap": "- 'Transfuse the **competent adult Jehovah's Witness** against her wishes to save her life' — wrong; her **competent refusal is binding**\n- 'Withhold emergency treatment from an **unconscious patient with no directive**' — wrong; treat under **emergency doctrine**",
   "mnemonic": "Competent adult can refuse anything. No capacity + no directive = treat (emergency doctrine).",
   "source": "NSW Guardianship Act / common law consent; RACGP ethics, 2024",
   "tags": [
    "capacity",
    "consent",
    "refusal",
    "emergency-doctrine",
    "ethics"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-flow'><div class='gv-step'>Adult presumed to have capacity (decision-specific)</div><div class='gv-step'>Competent refusal = binding (even if life-saving)</div><div class='gv-step'>No capacity + no directive → emergency treatment allowed</div></div>",
   "id": "gyn-123",
   "title": "Capacity and Refusal of Treatment",
   "subtitle": "A competent adult may refuse even life-saving care"
  },
  {
   "topic": "Cervical cancer - presentation & the HPV link (screen vs symptoms)",
   "subarea": "Gynae-onc & NSW law",
   "trap": "- The **killer trap**: woman with abnormal bleeding (postcoital, intermenstrual) or visible cervical lesion who had a **'normal HPV screen last year'** — do NOT reassure\n- **Screening tests are for ASYMPTOMATIC women only**\n- Symptomatic / visible lesion = **biopsy / refer** regardless of screening history\n- A **negative co-test does NOT exclude cancer** in a symptomatic woman",
   "whatFirst": "- Postcoital or intermenstrual bleeding, or visible suspicious cervix → **speculum exam + biopsy** of the lesion (or refer for colposcopy)\n- Symptomatic women are eligible for **diagnostic co-test** (HPV + LBC) at any time\n  - But a **visible lesion still needs biopsy/colposcopy** — a screening test cannot exclude an invasive cancer you can see",
   "discriminator": "- **HPV 16/18** cause ~70% of cervical cancer\n- A cytology/co-test sample from a **visibly abnormal cervix may be falsely negative**\n  - Necrotic tumour sheds non-diagnostic cells\n  - **Biopsy**, don't cytology-screen, a visible lesion",
   "redFlags": "- **Postcoital bleeding**\n- Offensive **watery/blood-stained discharge**\n- **Deep dyspareunia**\n- **Friable/visible cervical mass** in any age woman",
   "mcqTrap": "- '**Repeat HPV cervical screening test**' for a woman with a visible cervical lesion — wrong\n  - A visible lesion needs **biopsy/colposcopy**, not a screening test",
   "cutoffs": [
    "**HPV 16/18** cause ~70% of cervical cancer",
    "**Symptomatic** = investigate (diagnostic co-test + colposcopy/biopsy), NOT routine screen"
   ],
   "mnemonic": "See a lesion -> Slice it (biopsy), don't Swab-screen it.",
   "source": "National Cervical Screening Program Guidelines (Cancer Council / NCSP, 2022 update on managing symptomatic women, current 2026); Cancer Australia.",
   "verified": true,
   "tags": [
    "cervical-cancer",
    "HPV",
    "symptoms-override-screening",
    "biopsy"
   ],
   "id": "gyn-108",
   "title": "Cervical Cancer",
   "subtitle": "Symptoms or visible lesion override a normal screen"
  },
  {
   "topic": "Confidentiality of the under-16 — when you CANNOT keep it",
   "subarea": "Gynae-onc & NSW law",
   "trap": "- Treating **confidentiality as absolute** for a Gillick-competent minor\n- OR **breaching it unnecessarily**\n- The boundary is **child-protection**: abuse/serious-harm concerns OVERRIDE confidentiality",
   "whatFirst": "- **Assess Gillick competence** for the specific decision (e.g. contraception)\n- If **competent + no safety concern** → may keep confidentiality\n- If **abuse/serious-harm concern** → child-protection duty overrides → **must report**",
   "discriminator": "- **Gillick competence** (can the minor consent?) is separate from **confidentiality** (can you keep it?)\n- Confidentiality holds for a competent minor on contraception **UNLESS** there is a child-protection/abuse concern\n  - Child-protection concern **mandates disclosure/notification**",
   "redFlags": "- Disclosed/suspected **abuse**\n- **Much older partner**, coercion\n- **Very young age**\n- **Sexual assault**\n  - → mandatory reporting overrides confidentiality",
   "cutoffs": [
    "Competent minor + no safety concern → **confidentiality may be kept**",
    "**Child-protection/abuse concern** → confidentiality overridden (mandatory report)"
   ],
   "mcqTrap": "- 'You **must always inform the parents** of a 15-year-old requesting contraception' — wrong if she is Gillick-competent and there's no safety concern\n- '**Maintain confidentiality** despite disclosed abuse' — wrong; **child protection overrides**",
   "mnemonic": "Competent + safe = keep it. Abuse/harm = child protection trumps confidentiality.",
   "source": "NSW Children and Young Persons (Care and Protection) Act 1998; RACGP ethics, 2024",
   "tags": [
    "confidentiality",
    "Gillick",
    "under-16",
    "child-protection",
    "ethics"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-flow'><div class='gv-step'>Gillick-competent + no safety concern → confidential</div><div class='gv-step'>Abuse/serious-harm concern → child protection overrides → report</div></div>",
   "id": "gyn-122",
   "title": "Confidentiality of the Under-16",
   "subtitle": "Child-protection concerns override confidentiality"
  },
  {
   "topic": "Conscientious objection under NSW Abortion Law Reform Act 2019",
   "subarea": "Gynae-onc & NSW law",
   "trap": "- Thinking a conscientious objector can simply **decline and walk away**\n- The Act imposes a **POSITIVE DUTY**: disclose the objection AND refer/transfer to a practitioner without an objection",
   "whatFirst": "- A practitioner with a conscientious objection must, as soon as practicable:\n  - **DISCLOSE the objection** to the woman\n  - AND either give information on how to find / or **transfer care to a non-objecting practitioner**",
   "discriminator": "- Conscientious objection is permitted, but is **NOT a right to abandon the patient**\n  - Statutory duty to **disclose + refer/transfer** applies\n- **Emergency exception**: if the woman's life is at risk → must provide/assist care **regardless of objection**",
   "redFlags": "- Failure to **disclose/refer** can be a **professional-conduct matter** (HCCC/Medical Council)\n- **Emergency to save the woman's life** → must perform/assist regardless of objection",
   "cutoffs": [
    "Duty: **disclose objection** + refer/transfer to a non-objecting practitioner",
    "**Emergency exception**: must provide care to save life regardless of objection"
   ],
   "mcqTrap": "- 'A doctor with a conscientious objection can **refuse and is not obliged to do anything further**' — wrong\n  - The Act requires **disclosure and referral/transfer** to a non-objecting practitioner",
   "mnemonic": "Object? You must Disclose + Refer (the 'D&R' duty).",
   "source": "NSW Abortion Law Reform Act 2019, s9, 2024",
   "tags": [
    "conscientious-objection",
    "abortion-law",
    "NSW",
    "duty-to-refer",
    "law"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-flow'><div class='gv-step'>Disclose objection (as soon as practicable)</div><div class='gv-step'>Refer/transfer to non-objecting practitioner</div><div class='gv-step'>Emergency to save life → must provide care</div></div>",
   "id": "gyn-124",
   "title": "Conscientious Objection in Abortion",
   "subtitle": "Positive duty to disclose and refer on"
  },
  {
   "topic": "Prescribing contraception to under-16 - Gillick / mature minor",
   "subarea": "Gynae-onc & NSW law",
   "trap": "- You **CAN** prescribe contraception to a competent under-16 without parental consent if she is a **'mature minor' (Gillick competent)**\n- The trap is the reflex **'must have parental consent / must tell parents'**\n- Assess competence per presentation; **Gillick competence for one decision does not auto-apply to all decisions**\n  - Assess: does she understand the treatment, risks, alternatives, and can she retain/use that information?",
   "whatFirst": "- **Assess Gillick competence**: does she understand the nature, purpose, risks/benefits and alternatives, and can she retain/use that information?\n- **Encourage** (but do not require) parental involvement\n- **Document** the assessment",
   "discriminator": "- **Gillick/mature-minor** = the minor consents for herself (common law)\n- vs **parental consent** = required only if minor lacks competence\n- **Fraser criteria** are the practical checklist specifically for contraception",
   "redFlags": "- Competence does **NOT remove safeguarding duties**\n- If there is exploitation, grooming, a large age gap, or risk of significant harm → **mandatory reporting overrides confidentiality**",
   "mcqTrap": "- '**Refuse and insist on parental consent** for a competent 15-year-old requesting the pill' — wrong\n  - A Gillick-competent minor can consent herself",
   "cutoffs": [
    "**Gillick competence** assessed per decision",
    "**Fraser criteria** for contraception"
   ],
   "mnemonic": "FRASER: Fully understands; Refuses to tell parents (can't be persuaded); Acts (will have sex anyway); Suffers without it; bEst interests served - Encourage parental involvement.",
   "source": "NSW Health Consent to Medical and Healthcare Treatment Manual; RACGP / MDA National mature-minor guidance; Family Planning Australia.",
   "verified": true,
   "tags": [
    "NSW-law",
    "Gillick",
    "Fraser",
    "mature-minor",
    "contraception"
   ],
   "id": "gyn-112",
   "title": "Contraception for Under-16s",
   "subtitle": "Gillick-competent minor needs no parental consent"
  },
  {
   "topic": "Endometrial cancer - risk factors & the 'young PCOS bleeder' trap",
   "subarea": "Gynae-onc & NSW law",
   "trap": "- Endometrial cancer is **not just a postmenopausal disease**\n- The trap is dismissing AUB in an **obese young woman with PCOS** as 'just anovulation'\n- Chronic **unopposed oestrogen** drives hyperplasia/cancer at any age\n  - Risk factors: PCOS, obesity, nulliparity, tamoxifen, late menopause, oestrogen-only HRT",
   "whatFirst": "- **Sample the endometrium** in any woman with abnormal bleeding who is:\n  - **>45** with AUB, OR\n  - **<45 with risk factors** (obesity, PCOS, unopposed oestrogen, persistent bleeding, Lynch syndrome)\n- Do **not** just give the OCP and review",
   "discriminator": "- **Type 1** (endometrioid): oestrogen-driven, obese/PCOS patient\n- **Type 2** (serous/clear cell): oestrogen-independent, older, aggressive\n- MCQ clue: a **thin endometrium in PMB does NOT exclude** aggressive type 2 serous cancer",
   "redFlags": "- **Lynch syndrome (HNPCC)**: lifetime endometrial cancer risk **~40–60%**\n  - Offer **risk-reducing hysterectomy** + consider colorectal surveillance\n  - Endometrial cancer is often the **sentinel Lynch cancer** in women",
   "mcqTrap": "- '**Commence COC and review in 6 months**' in a 40-yr-old obese PCOS woman with prolonged bleeding — wrong\n  - **Endometrial sampling** is needed first to exclude hyperplasia/cancer",
   "cutoffs": [
    "**Sample** if >45 with AUB, or <45 + risk factors",
    "Lynch endometrial Ca risk **~40–60%**"
   ],
   "mnemonic": "Unopposed Oestrogen = Overgrowth: Obesity, Ovary (PCOS), Oestrogen-only HRT, Old (late menopause), nulliparOus, tamOxifen.",
   "source": "Cancer Australia endometrial cancer; RANZCOG; eTG.",
   "verified": true,
   "tags": [
    "endometrial-cancer",
    "PCOS",
    "Lynch",
    "risk-factors"
   ],
   "id": "gyn-106",
   "title": "Endometrial Cancer Risk Factors",
   "subtitle": "Unopposed oestrogen; suspect in young obese PCOS bleeder",
   "images": [
    {
     "src": "assets/img/endocrine_acanthosis_nigricans_axilla_01.jpg",
     "caption": "Acanthosis nigricans - marker of insulin resistance in PCOS/obesity",
     "alt": "Acanthosis nigricans in the axilla as a visible sign of insulin resistance associated with PCOS and obesity (endometrial cancer risk)",
     "credit": "Mark F. Brady; Prashanth Rawla, CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "Female genital mutilation — legal status & clinical duties",
   "subarea": "Gynae-onc & NSW law",
   "trap": "- Do not treat FGM purely as a clinical/cultural matter\n- In Australia **FGM is ILLEGAL** — including **taking (or arranging to take) a child overseas** for it\n- Raises **child-protection duties**",
   "whatFirst": "- **Recognise FGM** → if a child is at risk or has undergone it, this triggers **child-protection reporting**\n- Clinically, manage sensitively\n- For obstructive infibulation, discuss **deinfibulation** (ideally antenatally or before/early in labour)\n  - **Not re-infibulation** — also illegal",
   "discriminator": "- FGM is a **criminal offence**: performing it AND removing a child from Australia to have it performed\n- **Re-infibulation** after birth is also illegal\n- Adult management = **deinfibulation counselling** + psychological support\n- Child = **child-protection pathway**",
   "redFlags": "- Girl at risk of being taken overseas → **urgent child-protection referral**\n- Request to **re-suture (re-infibulate)** after birth → must decline (illegal)",
   "cutoffs": [
    "FGM **illegal in Australia** incl. taking a child overseas for it",
    "**Re-infibulation** also illegal; offer deinfibulation instead"
   ],
   "mcqTrap": "- '**Re-infibulate** at the patient's request after delivery' — wrong; illegal\n- '**No reporting needed** if it happened overseas' — wrong if a child remains at risk\n  - Arranging overseas FGM is itself an offence",
   "mnemonic": "FGM = illegal (here AND taking a child away for it); offer Deinfibulation, never Re-infibulation.",
   "source": "NSW Crimes Act 1900 (FGM offences); RANZCOG FGM, 2024",
   "tags": [
    "FGM",
    "law",
    "child-protection",
    "deinfibulation",
    "culture"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-pills'><span class='gv-pill'>FGM illegal (incl. overseas)</span><span class='gv-pill'>child at risk → child protection</span><span class='gv-pill'>deinfibulation, NOT re-infibulation</span></div>",
   "id": "gyn-126",
   "title": "Female Genital Mutilation",
   "subtitle": "Illegal in Australia, including taking a child overseas"
  },
  {
   "topic": "Gestational trophoblastic neoplasia after molar pregnancy",
   "subarea": "Gynae-onc & NSW law",
   "trap": "- Do not reassure that hCG 'will come down' if it is **plateauing or rising** after molar evacuation\n- **Persistent/rising hCG = GTN until proven otherwise** → needs treatment",
   "whatFirst": "- **Serial hCG** after molar evacuation\n- If hCG plateaus or rises (or persists) → **refer to a trophoblast/GTN service**\n- First-line treatment: **methotrexate** (for low-risk GTN)",
   "discriminator": "- **Falling hCG to normal** = resolving mole\n- **Plateau** (≥3 values over 2 weeks) / **rise** (≥2 values over 1 week) / persistence = **GTN/persistent trophoblast** → not just observation\n- **Choriocarcinoma** can metastasise to lung (haemoptysis/SOB)",
   "redFlags": "- Rising hCG, new **respiratory symptoms** (lung mets), heavy bleeding post-evacuation\n- → **Urgent GTN referral**; avoid pregnancy until hCG normalised and surveillance complete",
   "cutoffs": [
    "Low-risk GTN first-line: **single-agent methotrexate**",
    "**Plateau/rise** in hCG → GTN diagnosis"
   ],
   "mcqTrap": "- '**Repeat the evacuation**' or '**observe**' for rising hCG weeks after molar evacuation — wrong\n  - This is GTN requiring **chemotherapy (methotrexate)**, not repeat curettage",
   "mnemonic": "Molar hCG that won't fall = GTN → Methotrexate.",
   "source": "RANZCOG gestational trophoblastic disease, 2024",
   "tags": [
    "GTN",
    "molar",
    "hCG",
    "methotrexate",
    "choriocarcinoma"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-flow'><div class='gv-step'>Molar evacuation → serial hCG</div><div class='gv-step'>hCG plateaus/rises = GTN</div><div class='gv-step'>Methotrexate (low-risk) at GTN service</div></div>",
   "id": "gyn-121",
   "title": "Gestational Trophoblastic Neoplasia",
   "subtitle": "Plateauing or rising hCG after evacuation is GTN",
   "images": [
    {
     "src": "assets/img/obstetrics_us_hydatidiform_mole_01.jpg",
     "alt": "Transvaginal ultrasound showing a heterogeneous multicystic snowstorm intrauterine mass of a complete hydatidiform mole",
     "credit": "Mikael Häggström, Wikimedia Commons, CC0 (public domain dedication)"
    }
   ]
  },
  {
   "topic": "Legal status of the fetus vs the mother",
   "subarea": "Gynae-onc & NSW law",
   "trap": "- In Australian (NSW) law the **fetus has NO independent legal personhood**\n- Acquires no legal rights until **born alive**\n- The trap is treating the fetus as a patient with rights equal to the mother\n- A **competent pregnant woman's autonomous refusal** of treatment must be respected even if it risks the fetus\n  - You cannot compel treatment 'for the baby's sake'",
   "whatFirst": "- **Confirm maternal capacity**\n- A competent adult may **refuse any treatment** for any/no reason\n- The fetus's interests do **not override her autonomy**\n- **Document**, offer support; do not coerce or seek a court order to force treatment on a competent woman",
   "discriminator": "- This is the **opposite** of 'best interests of the child' that applies after birth\n- **Born-alive rule**: rights begin at live birth\n- Harm to a fetus is addressed via offences against the **pregnant woman**, not via fetal 'rights'",
   "redFlags": "- **Maternal incapacity** changes the analysis (then act in her best interests, involve substitute decision-maker)\n  - But lack of capacity must be **established**, not assumed because her decision seems unwise",
   "mcqTrap": "- '**Obtain a court order** to perform a caesarean against a competent woman's wishes to save the fetus' — wrong\n  - A competent woman's refusal is **binding**; the fetus has no overriding legal rights",
   "cutoffs": [
    "Legal personhood begins at **live birth** (born-alive rule)",
    "**Competent maternal refusal** is binding"
   ],
   "mnemonic": "No rights till born alive - Mum's autonomy wins.",
   "source": "Common law (born-alive rule); NSW medico-legal consensus; Crimes Act 1900 (NSW).",
   "verified": true,
   "tags": [
    "NSW-law",
    "fetus-vs-mother",
    "autonomy",
    "born-alive-rule",
    "ethics"
   ],
   "id": "gyn-114",
   "title": "Legal Status of the Fetus",
   "subtitle": "No legal personhood until born alive"
  },
  {
   "topic": "Lichen sclerosus management (ultrapotent topical steroid)",
   "subarea": "Gynae-onc & NSW law",
   "trap": "- Do not treat lichen sclerosus with **emollient alone**, low-potency steroid, or jump to surgery\n- First-line is an **ultrapotent topical corticosteroid (clobetasol propionate 0.05%)**",
   "whatFirst": "- **Ultrapotent topical corticosteroid (clobetasol)** induction, then maintenance\n- Plus **lifelong surveillance** for malignant change",
   "discriminator": "- **Lichen sclerosus**: steroid-responsive; surveillance for SCC\n- vs **lichen planus** vs **simple lichenification**\n- **Surgery is NOT first-line**; reserved for malignancy or fusion/architectural complications",
   "redFlags": "- Any non-responding, ulcerated, fissured, thickened or persistent lesion → **BIOPSY**\n  - To exclude vulval intraepithelial neoplasia / **squamous cell carcinoma** (~4–5% lifetime risk)",
   "cutoffs": [
    "First-line: **clobetasol propionate 0.05%** (ultrapotent)",
    "Malignant transformation risk **~4–5%**",
    "**Lifelong follow-up**; biopsy any non-responder"
   ],
   "mcqTrap": "- '**Bland emollients alone**' — wrong; potency matters\n- '**Topical hydrocortisone** (mild steroid)' — wrong; use ultrapotent clobetasol\n- '**Surgical excision first-line**' — wrong",
   "mnemonic": "Lichen Sclerosus = Strong Steroid (clobetasol), Surveillance for SCC.",
   "source": "RANZCOG / eTG dermatology — vulval lichen sclerosus, 2024",
   "tags": [
    "lichen-sclerosus",
    "vulval",
    "steroid",
    "malignancy",
    "surveillance"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-pills'><span class='gv-pill'>Clobetasol (ultrapotent)</span><span class='gv-pill'>NOT emollient/surgery first</span><span class='gv-pill'>biopsy non-responders</span><span class='gv-pill'>~4–5% SCC risk</span></div>",
   "id": "gyn-118",
   "title": "Lichen Sclerosus",
   "subtitle": "First-line is ultrapotent clobetasol, not emollient"
  },
  {
   "topic": "Lynch syndrome — endometrial & ovarian cancer risk/prophylaxis",
   "subarea": "Gynae-onc & NSW law",
   "trap": "- Do not forget that **Lynch raises ENDOMETRIAL (and ovarian) cancer**, not just colorectal\n- Missing the chance to offer **risk-reducing surgery**",
   "whatFirst": "- Recognise the **Lynch family pattern** (early-onset colorectal + endometrial cancers across generations)\n- → **Genetic referral**\n- → Discuss surveillance and **risk-reducing hysterectomy + BSO** once childbearing complete",
   "discriminator": "- **Lynch** = colorectal + **endometrial** + ovarian (and others); endometrial cancer is often the **sentinel cancer in women**\n- **BRCA** = breast + ovarian (tubal)\n  - Different gene, different organs, different surgery",
   "redFlags": "- Endometrial cancer at a **young age**, or strong personal/family colorectal + endometrial history\n- → Test tumour for **mismatch-repair deficiency (MMR/MSI)**\n- → Lynch referral",
   "cutoffs": [
    "Lynch: consider **risk-reducing hysterectomy + BSO** after childbearing complete",
    "**Endometrial cancer** can be the sentinel Lynch cancer in women"
   ],
   "mcqTrap": "- '**Lynch only increases colorectal cancer risk**' — wrong\n  - It markedly raises **endometrial and ovarian** risk too, which changes gynae management",
   "mnemonic": "Lynch = colon + ENDOMETRIUM (+ ovary); offer hyst + BSO when family complete.",
   "source": "Cancer Australia / eviQ Lynch syndrome, 2024",
   "tags": [
    "Lynch",
    "endometrial-cancer",
    "ovarian-cancer",
    "hereditary",
    "prophylaxis"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-pills'><span class='gv-pill'>Lynch: colon + endometrium + ovary</span><span class='gv-pill'>risk-reducing hyst+BSO after childbearing</span></div>",
   "id": "gyn-119",
   "title": "Lynch Syndrome",
   "subtitle": "Raises endometrial and ovarian cancer, not just colorectal"
  },
  {
   "topic": "Mandatory reporting in adolescent sexual health (NSW)",
   "subarea": "Gynae-onc & NSW law",
   "trap": "- Not every sexually active teenager triggers a report\n- Avoid both extremes:\n  - (a) **Reporting all under-16 sexual activity automatically** — wrong\n  - (b) **Never reporting** — wrong\n- The threshold is **'Risk of Significant Harm' (ROSH)** under the Children and Young Persons (Care and Protection) Act 1998\n- **Consensual sex between similar-aged peers** without exploitation is generally NOT reportable\n- **Abuse, large age gap, coercion, grooming or other harm IS** reportable",
   "whatFirst": "- Assess for **ROSH** using the Mandatory Reporter Guide:\n  - Age gap, power imbalance, exploitation, coercion\n  - Presence of STIs/pregnancy in a young child\n  - Drugs/alcohol involvement\n- If ROSH → **report to the Child Protection Helpline**\n- If uncertain → **consult/seek advice**",
   "discriminator": "- **Confidentiality vs mandatory reporting**: offer confidential sexual-health care to adolescents\n- BUT confidentiality is **overridden when there is ROSH**\n- **Doctors are mandatory reporters** in NSW",
   "redFlags": "- **Pregnancy or STI in a young child**\n- Much older partner\n- Person in **position of authority**\n- Coercion/grooming\n- **Intellectual disability** affecting capacity",
   "mcqTrap": "- '**You must report all sexual activity** in anyone under 16' — wrong\n  - Only when there is **Risk of Significant Harm**",
   "cutoffs": [
    "Threshold = **Risk of Significant Harm (ROSH)**",
    "Doctors are **mandatory reporters**"
   ],
   "mnemonic": "Report on RISK (ROSH), not on age alone.",
   "source": "Children and Young Persons (Care and Protection) Act 1998 (NSW) s23; NSW Mandatory Reporter Guide.",
   "verified": true,
   "tags": [
    "NSW-law",
    "mandatory-reporting",
    "ROSH",
    "adolescent",
    "safeguarding"
   ],
   "id": "gyn-113",
   "title": "Mandatory Reporting in Adolescent Sexual Health",
   "subtitle": "Threshold is Risk of Significant Harm, not age alone"
  },
  {
   "topic": "Medical record retention - HRIP Act 2002 (NSW)",
   "subarea": "Gynae-onc & NSW law",
   "trap": "- Two different retention clocks — the **paediatric one** is the trap\n- **Adults**: keep records **7 years from the LAST** occasion a health service was provided\n- **Children/under-18**: keep until the person turns **25** (NOT 7 years from last visit)\n- MCQs love to apply the adult '7 years' rule to a child",
   "whatFirst": "- Identify whether information was collected while the patient was an **adult or a minor**\n- Adult → **7 years from last service**\n- Under-18 → **until age 25**\n- On disposal, keep a record of: name, period covered, and **date of deletion/transfer**",
   "discriminator": "- **7 years** runs from the **LAST service**, not from creation of the note\n- For a minor it is **age-based (25)**, which for a young child is far longer than 7 years from the last visit",
   "redFlags": "- Improper destruction or failure to keep a **disposal record** breaches the **Health Privacy Principles (HPP 5 / s25 HRIP Act)**",
   "mcqTrap": "- '**Destroy a 10-year-old's GP record 7 years** after their last visit' — wrong\n  - Must keep until the patient turns **25**",
   "cutoffs": [
    "Adult: **7 years** from last service",
    "Under-18: until **age 25**"
   ],
   "mnemonic": "Adults: 7 from last visit. Kids: keep till 25.",
   "source": "Health Records and Information Privacy Act 2002 (NSW) s25 / HPP 5.",
   "verified": true,
   "tags": [
    "NSW-law",
    "record-retention",
    "HRIP-Act",
    "privacy"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Patient at time of record</th><th>Retain</th></tr></thead><tbody><tr><td>Adult</td><td><span class=\"gv-num\">7 years</span> from last service</td></tr><tr><td>Under 18</td><td>until age <span class=\"gv-num\">25</span></td></tr></tbody></table>",
   "id": "gyn-116",
   "title": "Medical Record Retention",
   "subtitle": "Children: keep until age 25, not 7 years"
  },
  {
   "topic": "Notifiable STI/HIV reporting vs privacy & partner notification",
   "subarea": "Gynae-onc & NSW law",
   "trap": "- Do not confuse **mandatory notifiable-disease reporting** (to public health) with **breaching confidentiality to a partner**\n- They are **different duties**",
   "whatFirst": "- **Notify** the notifiable condition to public health as **legally required** (HIV, syphilis, gonorrhoea, chlamydia etc.)\n- Support **patient-led partner notification** — not unilateral disclosure to partners",
   "discriminator": "- **Mandatory notification** to the public-health authority is a legal duty and does **NOT breach** the patient relationship\n- **Partner notification** is normally **patient-led** (or provider-assisted with consent)\n- **Breaching confidentiality to directly inform a partner** is a last resort with safeguards, not the default",
   "redFlags": "- Ongoing **serious risk to an identifiable third party** despite counselling\n- → Public-health legislation may permit limited disclosure\n  - Involve the **public-health unit**; do not act unilaterally",
   "cutoffs": [
    "Notifiable STIs/HIV → **notify public health** (legal duty)",
    "Partner notification → **patient-led / provider-assisted**, not unilateral breach"
   ],
   "mcqTrap": "- '**You may phone the patient's partner** to tell them about the STI diagnosis' — usually wrong\n  - Partner notification is **patient-led/assisted**; direct breach is a last resort via public-health channels",
   "mnemonic": "Notify the disease (to public health); the patient notifies the partner.",
   "source": "NSW Public Health Act; Health Records and Information Privacy Act 2002; ASHM, 2024",
   "tags": [
    "notifiable-disease",
    "partner-notification",
    "privacy",
    "public-health",
    "law"
   ],
   "verified": true,
   "visualHtml": "<div class='gv-pills'><span class='gv-pill'>Notifiable STI → notify public health</span><span class='gv-pill'>partner notification = patient-led/assisted</span><span class='gv-pill'>direct breach = last resort</span></div>",
   "id": "gyn-125",
   "title": "Notifiable STI and HIV Reporting",
   "subtitle": "Public-health notification is not partner disclosure"
  },
  {
   "topic": "NSW age of consent (16) + the close-in-age defence",
   "subarea": "Gynae-onc & NSW law",
   "trap": "- **Age of consent for sex in NSW is 16** (Crimes Act 1900)\n- Gotcha: the **close-in-age nuance** and the higher age for special-care relationships\n  - NSW **similar-age defence** (s80AG): complainant **14+ AND age gap ≤2 years**\n  - A person in **authority/care** (teacher, foster carer, health practitioner) commits an offence (s73) with a **16–17 year old** under their special care\n  - → Age of consent is effectively **18** in a special-care relationship",
   "whatFirst": "- Establish the partner's **age AND the relationship/age gap**\n- Consensual sex between two people both **≥16** is lawful\n- A **'special care' relationship** (teacher, carer, doctor) makes sex with a **16–17 year old an offence**",
   "discriminator": "- **Age of consent (16)** for sexual activity is **DIFFERENT** from capacity to consent to **medical treatment** (Gillick/mature minor — can be <16)\n  - A 15-year-old can be **Gillick-competent** to consent to contraception even though she is below the age of sexual consent",
   "redFlags": "- Sex with a child **<16** by an adult — criminal offence\n- Any **'special care' relationship (s73)** with a **16–17 yr old** — criminal offence regardless of apparent consent",
   "mcqTrap": "- '**A 15-year-old cannot consent to contraception** because she is under the age of consent' — wrong\n  - Age of **sexual consent** does not bar a **Gillick-competent** minor from consenting to contraceptive treatment",
   "cutoffs": [
    "Age of consent = **16**",
    "**Special-care relationship (s73)** = effectively 18",
    "Similar-age defence **(s80AG)**: complainant 14+ AND gap ≤2 years"
   ],
   "mnemonic": "16 to have sex, but Gillick (not age) decides who can consent to care.",
   "source": "Crimes Act 1900 (NSW) ss 66C, 73, 80AG; NSW Health Consent to Medical and Healthcare Treatment Manual.",
   "verified": true,
   "tags": [
    "NSW-law",
    "age-of-consent",
    "special-care",
    "crimes-act"
   ],
   "id": "gyn-111",
   "title": "NSW Age of Consent",
   "subtitle": "16; similar-age defence and special-care exceptions apply"
  },
  {
   "topic": "NSW termination of pregnancy - Abortion Law Reform Act 2019",
   "subarea": "Gynae-onc & NSW law",
   "trap": "- Abortion is **decriminalised** in NSW (removed from the Crimes Act 1900)\n- **On request up to and including 22 weeks** with informed consent\n- **After 22 weeks**: a specialist may perform it only after consulting a second specialist who also agrees there are sufficient grounds\n  - Both must be **specialist** medical practitioners (not just any two doctors)\n  - Must be performed in a **hospital or approved facility**\n- **Emergency exception**: the two-doctor, approved-facility rule does NOT apply when required to save life or prevent serious injury",
   "whatFirst": "- **Determine gestation** first\n- **<=22 weeks**: medical practitioner + informed consent sufficient\n- **>22 weeks**: two specialist medical practitioners must agree + approved facility required\n- **Emergency**: single doctor, no consultation needed",
   "discriminator": "- **Conscientious objection** is permitted BUT has mandatory obligations\n  - Must **disclose** the objection to the patient\n  - Must **transfer or refer** to another provider who does not object\n- 'I object so I will not help at all' is **unlawful**\n- **Emergency**: must provide care regardless of objection",
   "redFlags": "- **Emergency to save life or prevent serious injury** overrides the post-22-week two-specialist requirement",
   "mcqTrap": "- '**Abortion remains a crime in NSW**' — wrong: decriminalised in **2019**\n- 'Requires court approval' — wrong: on request to 22 weeks, no court involvement",
   "cutoffs": [
    "On request **<= 22 weeks** (informed consent)",
    ">**22 weeks** = 2 specialist doctors + approved facility",
    "**Emergency** = single doctor, no second opinion"
   ],
   "mnemonic": "22 is the line: under it = on request; over it = a second specialist's sign-off.",
   "source": "Abortion Law Reform Act 2019 (NSW) ss 5-6; Family Planning NSW.",
   "verified": true,
   "tags": [
    "NSW-law",
    "termination",
    "abortion-law-reform-2019",
    "conscientious-objection"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Gestation</th><th>Requirement</th></tr></thead><tbody><tr><td>&le; <span class=\"gv-num\">22 weeks</span></td><td>1 medical practitioner + informed consent</td></tr><tr><td>&gt; 22 weeks</td><td>2 specialists agree + approved facility</td></tr><tr><td>Emergency</td><td>1 doctor; no second opinion</td></tr></tbody></table>",
   "id": "gyn-110",
   "title": "NSW Termination Law",
   "subtitle": "On request to 22 weeks; specialist rules after"
  },
  {
   "topic": "Ovarian cancer - vague symptoms, NO screening, CA125 + RMI",
   "subarea": "Gynae-onc & NSW law",
   "trap": "- **No effective population screening** exists for ovarian cancer\n  - Cancer Australia advises **against** screening at average risk by any test\n  - Annual CA125 + TVUS for a well woman = **wrong** (high false-positive harm)\n- **CA125 is not a diagnostic test** — use it to assess a known mass or monitor treatment\n  - Normal in **~50% of early-stage** disease\n  - Falsely raised by: **endometriosis**, fibroids, menstruation, PID, ascites, pregnancy",
   "whatFirst": "- Persistent (**>1 month**) NEW symptoms: bloating, early satiety, abdominal/pelvic pain, urinary urgency — especially age **>50**\n- Initial workup: **pelvic exam + TVUS + CA125**\n- Then **calculate RMI** to triage referral to a gynaecological oncologist",
   "discriminator": "- Ovarian cancer mimics **IBS / 'menopause' / functional bloating**\n- Key rule: **NEW persistent bloating in a woman >50** is ovarian cancer until excluded\n  - IBS rarely starts after **50** — do not anchor on IBS in this age group",
   "redFlags": "- **RMI = CA125 x U x M**\n  - **U score**: 0 (no features) / 1 (one feature) / 3 (two or more features: multilocular, solid areas, bilateral, ascites, mets)\n  - **M score**: premenopausal = **1**; postmenopausal = **3**\n- **RMI >200** = high risk → refer to **gynaecological oncologist** for surgery",
   "mcqTrap": "- '**Annual CA125 and TVUS to screen**' — wrong\n  - No proven **mortality benefit** (UKCTOCS/PLCO trials negative)\n  - High **false-positive harm**\n  - Ovarian cancer is explicitly **NOT** a screening target",
   "cutoffs": [
    "**RMI >200** -> gynae-oncology referral",
    "CA125 normal in **~50%** early-stage",
    "Menopausal multiplier: pre=**1**, post=**3**",
    "New persistent symptoms **>1 month**, age >50"
   ],
   "mnemonic": "RMI = U x M x CA125 ('You + Me + the marker').",
   "source": "Cancer Australia position statement on testing for ovarian cancer in asymptomatic women (2021); RANZCOG; RMI-1 (Jacobs 1990).",
   "verified": true,
   "tags": [
    "ovarian-cancer",
    "CA125",
    "RMI",
    "no-screening",
    "late-presentation"
   ],
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>RMI component</th><th>Value</th></tr></thead><tbody><tr><td>Ultrasound (U)</td><td>0, 1, or 3</td></tr><tr><td>Menopause (M)</td><td>pre = 1, post = 3</td></tr><tr><td>CA125</td><td>actual U/mL</td></tr><tr><td>RMI = U x M x CA125</td><td>&gt;<span class=\"gv-num\">200</span> = refer</td></tr></tbody></table>",
   "id": "gyn-107",
   "title": "Ovarian Cancer",
   "subtitle": "No screening at average risk; use CA125 plus RMI"
  },
  {
   "topic": "Postmenopausal bleeding (PMB) - the cardinal red flag",
   "subarea": "Gynae-onc & NSW law",
   "trap": "- **ANY postmenopausal bleeding (PMB)** = endometrial cancer until excluded\n- Most tempting wrong answer: **'reassure — likely atrophic vaginitis'** or 'trial of topical oestrogen and review'\n  - Wrong: **~10% of PMB** is endometrial cancer\n- **Atrophy is a diagnosis of exclusion** — never the first answer in a vignette\n- First move is always **TVUS + endometrial assessment**",
   "whatFirst": "- **TVUS first** to measure endometrial thickness\n- If **endometrial thickness >4 mm** (postmenopausal, not on HRT): proceed to endometrial sampling\n- **Endometrial sampling (Pipelle) +/- hysteroscopy** also indicated if:\n  - Bleeding recurs despite initial normal scan\n  - Risk factors present\n- **Thin stripe <=4 mm**: >99% NPV — BUT does NOT apply to recurrent/persistent PMB\n  - **Persistent PMB needs tissue regardless** of stripe thickness",
   "discriminator": "- **Cannot clinically distinguish** endometrial cancer from atrophic vaginitis — tissue/imaging decides\n- **Tamoxifen users**: endometrial thickness threshold is **unreliable** (subendometrial cysts)\n  - Go straight to **hysteroscopy + biopsy** if they bleed",
   "redFlags": "- **Recurrent PMB despite normal initial TVUS** = persist with hysteroscopy/biopsy\n  - Do NOT be falsely reassured by a **thin stripe on one scan**",
   "mcqTrap": "- '**Reassure and treat as atrophic vaginitis**' — wrong\n  - Cancer must be excluded with **TVUS + sampling** first",
   "cutoffs": [
    "Endometrial thickness **>4 mm** (no HRT) -> biopsy",
    "**~10%** of PMB = endometrial cancer",
    "Thin stripe **<=4 mm**: >99% NPV but recurrent PMB still needs tissue"
   ],
   "mnemonic": "PMB = Probably Malignant until Biopsied.",
   "source": "RANZCOG / O&G Magazine 'Postmenopausal bleeding'; 4 mm threshold per ACOG (2018) / BGCS (2021), adopted in Australian practice.",
   "verified": true,
   "tags": [
    "endometrial-cancer",
    "PMB",
    "what-first",
    "red-flag"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Postmenopausal bleeding</div><div class=\"gv-step\">TVUS endometrial thickness</div><div class=\"gv-step\">&gt;4 mm OR recurrent OR risk factors</div><div class=\"gv-step\">Pipelle &plusmn; hysteroscopy</div></div>",
   "id": "gyn-105",
   "title": "Postmenopausal Bleeding",
   "subtitle": "Any PMB is endometrial cancer until excluded"
  },
  {
   "topic": "Surrogacy & donor law in NSW",
   "subarea": "Gynae-onc & NSW law",
   "trap": "- NSW permits **altruistic surrogacy only**\n- **Commercial surrogacy = criminal offence** (Surrogacy Act 2010 s8)\n- Killer gotcha: the offence is **extraterritorial (s11)**\n  - Illegal for an **ordinarily-NSW-resident** to enter a commercial surrogacy arrangement even **overseas**\n  - The fact it is legal abroad is **not a defence**\n- Surrogate may be reimbursed **reasonable expenses only** — not paid a fee",
   "whatFirst": "- Distinguish **reasonable reimbursement** (lawful) from a **fee/payment** (unlawful, commercial)\n  - Lawful: medical costs, lost earnings, legal fees\n- Counsel that **overseas commercial arrangements are still an offence** for NSW residents",
   "discriminator": "- Surrogacy arrangements are **NOT legally enforceable**\n  - **Birth mother = legal mother** at birth\n  - Intended parents must apply for a **court Parentage Order** afterwards\n- Donor-conceived: NSW maintains a **Central Register** (ART Act 2007)\n  - Donor-conceived people can access **identifying donor information**\n  - **No fully anonymous donation** in regulated NSW practice",
   "redFlags": "- **Advertising for a surrogate** or offering payment beyond reasonable expenses = offence",
   "mcqTrap": "- '**A NSW couple can legally pay a surrogate overseas**' — wrong\n  - Commercial surrogacy is an offence for NSW residents even when arranged abroad (**s11** geographical nexus)",
   "cutoffs": [
    "**Altruistic ONLY**; commercial = criminal (individual: up to **2 yrs / 1,000 penalty units**; corporation: **2,500 penalty units**)",
    "Offence applies **extraterritorially** to NSW residents (s11)",
    "**Parentage Order** needed post-birth"
   ],
   "mnemonic": "Altruistic ok, Abroad-for-cash NOT ok (still illegal for NSW residents).",
   "source": "Surrogacy Act 2010 (NSW) ss 8, 11; Assisted Reproductive Technology Act 2007 (NSW) Central Register.",
   "verified": true,
   "tags": [
    "NSW-law",
    "surrogacy",
    "donor-law",
    "commercial-illegal",
    "extraterritorial"
   ],
   "id": "gyn-115",
   "title": "Surrogacy and Donor Law in NSW",
   "subtitle": "Commercial surrogacy is a crime, and extraterritorial"
  },
  {
   "topic": "Vulval cancer - red flags & the lichen sclerosus link",
   "subarea": "Gynae-onc & NSW law",
   "trap": "- Classic trap: elderly woman with chronic vulval itch given repeated **topical steroid / antifungal** for 'thrush' or 'eczema' without examination\n- A **non-healing vulval lesion/ulcer/plaque** must be **biopsied**, not treated empirically\n- Persistent localised pruritus + a lump/ulcer in a postmenopausal woman = **vulval SCC until proven otherwise**",
   "whatFirst": "- **Examine and BIOPSY** any persistent vulval lesion (ulcer, plaque, lump, leukoplakia, pigmented or non-healing area)\n- Do **NOT** give another empirical cream for chronic vulval symptoms without:\n  - Inspecting the area\n  - **Biopsying** if abnormal",
   "discriminator": "- Two distinct pathways to **vulval SCC**:\n  - **HPV-related**: younger women, usual-type VIN\n  - **Non-HPV via lichen sclerosus / differentiated VIN**: older women\n- **Lichen sclerosus** carries **~4–6% lifetime SCC risk**\n  - 'Just LS' still needs surveillance\n  - **Biopsy any changing/thickened/ulcerated area**",
   "redFlags": "- **Non-healing ulcer**\n- Raised **fleshy/warty/leukoplakic lesion** on labia majora\n- Palpable **inguinal lymphadenopathy**\n- **Bleeding lesion**",
   "mcqTrap": "- '**Prescribe topical clotrimazole and review**' for a chronic non-healing vulval lesion — wrong\n  - Any persistent/suspicious vulval lesion must be **biopsied** to exclude SCC",
   "cutoffs": [
    "Lichen sclerosus -> **~4–6%** lifetime vulval SCC risk",
    "**>90%** of vulval cancers are SCC"
   ],
   "mnemonic": "Itch that won't quit + a lump that won't heal = biopsy, not another cream.",
   "source": "Cancer Australia vulval cancer; FIGO vulva staging; dermatology/RACGP lichen sclerosus guidance.",
   "verified": true,
   "tags": [
    "vulval-cancer",
    "lichen-sclerosus",
    "biopsy",
    "red-flag"
   ],
   "id": "gyn-109",
   "title": "Vulval Cancer",
   "subtitle": "Biopsy any non-healing vulval lesion, never treat blind"
  }
 ]
}
);
