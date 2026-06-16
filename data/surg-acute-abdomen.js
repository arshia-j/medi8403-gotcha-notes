window.GOTCHA = window.GOTCHA || { modules: [] };
window.GOTCHA.modules.push(
{
 "id": "surg-acute-abdomen",
 "name": "Acute Abdomen & Colorectal",
 "category": "Surgery",
 "blurb": "Written-exam + VIVA. Resuscitate-then-decide acute abdomen, obstruction/perforation, colorectal & anorectal.",
 "cards": [
  {
   "topic": "Caecal diameter & perforation risk (Laplace's law)",
   "subarea": "Perforation & obstruction",
   "discriminator": "- By **Laplace's law** (wall tension proportional to radius x pressure): the widest part of the colon — the **CAECUM** — has the highest wall tension\n- Commonest site of perforation in **distal LBO**, EVEN when the obstructing lesion is elsewhere (e.g. sigmoid cancer)\n- This occurs when the **ileocaecal valve is COMPETENT** (~10-30% of people) = a **closed loop** (colon can't decompress retrograde into small bowel)\n- An **incompetent valve** vents into small bowel (vomiting, lower perforation risk)",
   "whatFirst": "- In **LBO with a distended caecum**: assess valve competence and **caecal diameter on CT**\n- **Resuscitate** and escalate to surgery as the caecal diameter approaches the danger zone\n- **Do not simply observe** a tense closed-loop caecum",
   "redFlags": "- Caecal diameter **approaching/over 12 cm**\n- **Pericaecal free fluid**\n- **Caecal pneumatosis**\n- **Focal RIF tenderness**\n- Any of above = impending/actual caecal perforation -> **urgent decompression/surgery**",
   "trap": "- Most tempting WRONG answer: **perforation occurs at the site of the obstructing tumour** — wrong\n- By **Laplace's law** the **CAECUM** (largest radius) blows first\n- Second trap: quoting a single magic number\n  - Classic teaching cut-off is **~12 cm** for impending perforation\n  - Risk begins **~9 cm**\n  - **Duration/rapidity of distension** matters as much as absolute diameter (chronic distension may tolerate >10 cm)",
   "source": "Laplace's law; colorectal surgical literature; CT predictors (caecal diameter, pericaecal fluid, pneumatosis). Cut-offs vary 9-12 cm in literature.",
   "tags": [
    "caecum",
    "Laplace",
    "perforation",
    "LBO",
    "closed loop",
    "ileocaecal valve"
   ],
   "mnemonic": "'Biggest balloon bursts first' — Laplace: largest radius = highest tension = caecum perforates. ~9 cm worry, ~12 cm danger.",
   "viva": "- Examiner: **'Sigmoid cancer obstruction — where will it perforate and why?'**\n  - Answer: the **caecum**, by Laplace's law, if the ileocaecal valve is competent (closed loop)\n- Then **'at what diameter?'** — ~12 cm classically, risk from **~9 cm**, but **duration matters**",
   "mcqTrap": "- **'Perforation occurs at the site of the obstructing sigmoid tumour'** — wrong\n- The **caecum** (largest radius) is the commonest site by Laplace's law",
   "verified": true,
   "cutoffs": [
    "**Caecum** = commonest perforation site (Laplace) in distal LBO + competent valve",
    "**~12 cm** = classic danger threshold",
    "Risk begins **~9 cm** (literature range 9-15 cm)",
    "**Duration/rapidity of distension** matters as much as diameter"
   ],
   "title": "Caecal diameter & perforation risk (Laplace's law)",
   "id": "surg-acute-abdomen-1",
   "images": [
    {
     "src": "assets/img/gastrointestinal_axr_large_bowel_obstruction_01.jpg",
     "caption": "Large bowel obstruction — AXR showing caecal dilatation",
     "alt": "Plain abdominal radiograph demonstrating grossly dilated large bowel including a massively dilated caecum — illustrating Laplace's law and why the caecum is at greatest perforation risk",
     "credit": "James Heilman, MD (Jmh649), Wikimedia Commons, CC BY-SA 3.0 (edge arrow & text cropped)"
    }
   ]
  },
  {
   "topic": "Closed-loop / strangulation -> OPERATE (don't drip & suck)",
   "subarea": "Perforation & obstruction",
   "discriminator": "- **Closed loop**: bowel obstructed at TWO points (volvulus, hernia, adhesive band, or LBO with competent ileocaecal valve) -> rapidly rising intraluminal pressure -> ischaemia/perforation\n- **Strangulation**: compromised blood supply\n- CT signs: **whirl sign** / mesenteric vessel swirl, C- or U-shaped fluid-filled loop, beak sign, bowel wall thickening, **reduced/absent wall enhancement**, 'target' sign, mesenteric fat stranding, free fluid, **pneumatosis**\n- Clinical signs: pain **out of proportion**, **constant** (not colicky) pain, localised tenderness, fever, tachycardia, raised lactate/WCC",
   "whatFirst": "- These are **SURGICAL emergencies** — resuscitate and go to **THEATRE**\n- **Do NOT trial conservative 'drip and suck'**\n- Indications to operate: **closed loop / strangulation / ischaemia / perforation**",
   "redFlags": "- **Lactataemia**\n- **Peritonism**\n- **Tachycardia + pain out of proportion** = ischaemic bowel\n- Escalate immediately — **do not wait** for a trial of non-op management",
   "trap": "- Most tempting WRONG answer: **'admit for conservative drip-and-suck and reassess in 48 h'**\n  - Conservative management is for **SIMPLE uncomplicated adhesional SBO only**\n- A **closed loop or strangulation** needs operative intervention **NOW**\n- Choosing **'repeat AXR in 24 h'** while the patient has rising lactate is the classic exam trap",
   "source": "WSES adhesive SBO (Bologna) guidance; standard Australian general surgical practice; CT strangulation signs (radiology literature).",
   "tags": [
    "closed loop",
    "strangulation",
    "ischaemia",
    "operate",
    "SBO",
    "volvulus"
   ],
   "mnemonic": "Closed loop / Strangulation / Ischaemia / Perforation = the 4 reasons to CUT (not drip & suck). 'Pain out of proportion + lactate = theatre.'",
   "viva": "- Examiner: **'Which obstructed patients must NOT be managed conservatively?'**\n  - Answer: **closed loop, strangulation, ischaemia, perforation, peritonitis** — all operate\n- Discriminator probed: **colicky vs constant pain**, the role of **lactate**, and **CT whirl sign**",
   "mcqTrap": "- **'Trial conservative management and repeat imaging at 48h'** in a patient with strangulation signs — delay risks **dead bowel**",
   "verified": true,
   "cutoffs": [
    "**Constant (not colicky) pain** + pain out of proportion = ischaemia",
    "**Raised lactate / peritonism** = operate now",
    "**CT whirl sign / non-enhancing wall** = strangulation"
   ],
   "title": "Closed-loop / strangulation -> OPERATE (don't drip…",
   "id": "surg-acute-abdomen-2",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/PSBOCT.png/960px-PSBOCT.png",
     "caption": "Closed-loop small bowel obstruction — CT abdomen showing strangulation",
     "alt": "CT abdomen with contrast showing a closed-loop small bowel obstruction with a whirl sign, bowel wall thickening and reduced enhancement — indicating strangulation requiring urgent surgery",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Empirical IV antibiotics for perforation / faecal peritonitis (eTG)",
   "subarea": "Perforation & obstruction",
   "discriminator": "- This is **THERAPY for established intra-abdominal sepsis** (perforation, secondary peritonitis), NOT single-dose surgical prophylaxis\n- Must cover **Gram-negatives + anaerobes** (gut flora)\n- Classic Australian **eTG regimen** for moderate-severe intra-abdominal infection:\n  - **Amoxicillin (or ampicillin) + gentamicin + metronidazole** IV\n- Where gentamicin is contraindicated, substitute per eTG:\n  - **Ceftriaxone + metronidazole**, or piperacillin-tazobactam as a single agent",
   "whatFirst": "- Give antibiotics **EARLY (within 1 hour)** of recognising sepsis\n  - AFTER taking blood cultures, but do not delay for them\n- **Source control (surgery/drainage)** is the definitive treatment\n  - Antibiotics alone do not fix a hole in the gut",
   "redFlags": "- **Septic shock** → escalate cover and resuscitate aggressively\n- Check **renal function** before/around gentamicin dosing\n- **Review and rationalise** antibiotics with culture results and surgical findings",
   "trap": "- Most tempting WRONG answer: prescribing a **single narrow agent** (e.g. metronidazole alone, or a cephalosporin with no anaerobic cover)\n  - Faecal peritonitis needs BOTH **Gram-negative AND anaerobic** cover\n- Also wrong: **'antibiotics instead of surgery'** for a frank perforation\n  - Antibiotics are an adjunct to source control, not a substitute",
   "source": "Therapeutic Guidelines (eTG, current) — Antibiotic: gastrointestinal/intra-abdominal infections.",
   "tags": [
    "antibiotics",
    "eTG",
    "peritonitis",
    "perforation",
    "sepsis"
   ],
   "mnemonic": "Gut bugs = Gram-neg + anaerobes -> 'Amp + Gent + Met' covers both arms.",
   "viva": "- Examiner: 'What antibiotic and why, and is that enough?'\n- Name an **eTG-consistent regimen** covering Gram-negatives AND anaerobes\n- Explicitly state **source control is the priority** — antibiotics are adjunctive",
   "mcqTrap": "- **Metronidazole monotherapy** or a cephalosporin alone for faecal peritonitis\n  - Misses one arm of cover",
   "verified": false,
   "cutoffs": [
    "Cover **Gram-negative + anaerobe** (dual mechanism)",
    "Antibiotics within **1 hr** of sepsis recognition",
    "Take **cultures first** but do not delay dosing"
   ],
   "title": "Empirical IV antibiotics for perforation / faecal…",
   "id": "surg-acute-abdomen-3"
  },
  {
   "topic": "Pneumoperitoneum (free gas) -> resuscitate + IV antibiotics + theatre",
   "subarea": "Perforation & obstruction",
   "discriminator": "- Erect CXR **free gas under the diaphragm** = perforated viscus until proven otherwise\n- Erect CXR detects free air in only **~80%** of cases (PA film)\n- **CT abdo/pelvis is the gold standard** — detects tiny gas volumes CXR misses\n- A **NORMAL erect CXR does NOT exclude** perforation — if clinically suspicious, get a CT\n- Distinguish true free gas from:\n  - **Chilaiditi sign**: colon interposed between liver and diaphragm — haustral markings visible within the lucency\n  - Basal lung/subdiaphragmatic fat",
   "whatFirst": "- **Resuscitate FIRST**, image/operate SECOND\n- Sequence:\n  - **A-B-C**, large-bore IV access, fluid resuscitation\n  - Analgesia + antiemetic, NG tube, IDC + hourly urine output\n  - Bloods incl **venous gas/lactate** + group & hold\n  - **EARLY broad-spectrum IV antibiotics**\n  - Then **CT** to confirm source\n  - Then **theatre**\n- Do not delay resuscitation or antibiotics waiting for imaging",
   "redFlags": "- **Generalised peritonitis** (board-like rigid abdomen), septic shock/rising lactate, free gas + free fluid on CT = urgent source control surgery\n- **'Silent' rigid abdomen** on steroids/elderly/diabetic can hide a perforation\n  - Maintain high index of suspicion",
   "trap": "- Most tempting WRONG answer: **'normal erect CXR excludes perforation — discharge/observe'**\n  - It does NOT — erect CXR misses ~20% (sensitivity ~**80%** PA film)\n  - Proceed to CT if suspicion remains\n- Second trap: **'rush straight to theatre'** without resuscitating/giving antibiotics first",
   "source": "Therapeutic Guidelines (eTG, current) — intra-abdominal infections; standard Australian surgical practice. Erect CXR PA sensitivity ~80%, CT gold standard for small-volume pneumoperitoneum (radiology literature, confirmed 2026).",
   "tags": [
    "perforation",
    "pneumoperitoneum",
    "free gas",
    "peritonitis",
    "sepsis"
   ],
   "mnemonic": "Resuscitate -> Antibiotics -> Theatre = 'RAT' (the rat eats the free gas). Free gas + sick patient = source control.",
   "viva": "- Examiner probes the **SEQUENCE**: 'CXR shows free gas — what do you do FIRST?'\n  - Answer: **resuscitation + IV antibiotics + theatre referral**, not 'order a CT' in isolation\n- Be ready to give an **ISBAR call** to the on-call surgical reg\n- Be ready to discuss **consent for laparotomy**",
   "mcqTrap": "- **'Normal erect CXR rules out a perforated viscus'** — false\n  - CT is gold standard; erect CXR misses ~1 in 5",
   "verified": true,
   "visualHtml": "<div class='gv-flow'><div class='gv-step'>Free gas on erect CXR / CT</div><div class='gv-step'>RESUSCITATE: IVF, NG, IDC, analgesia, lactate</div><div class='gv-step'>EARLY broad-spectrum IV antibiotics</div><div class='gv-step'>CT to localise source</div><div class='gv-step'>THEATRE for source control</div></div>",
   "cutoffs": [
    "Erect CXR sensitivity for free gas **~80%** (PA film)",
    "**CT = gold standard** (detects small-volume free air)",
    "Free gas best seen **>2 hrs** after sitting upright"
   ],
   "title": "Pneumoperitoneum (free gas) -> resuscitate + IV…",
   "id": "surg-acute-abdomen-4",
   "images": [
    {
     "src": "assets/img/gastrointestinal_axr_pneumoperitoneum_01.jpg",
     "caption": "Pneumoperitoneum — AXR/erect CXR free gas under right hemidiaphragm",
     "alt": "Free intraperitoneal gas visible under the right hemidiaphragm on erect CXR / Rigler's sign on supine AXR — the radiological hallmark of visceral perforation",
     "credit": "Hellerhoff / Wikimedia Commons · CC BY-SA 4.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/FreeairCT.png/960px-FreeairCT.png",
     "caption": "CT abdomen — pneumoperitoneum and perforated viscus",
     "alt": "CT abdomen showing free intraperitoneal gas (pneumoperitoneum) and free fluid — the gold standard investigation when erect CXR is equivocal or non-diagnostic for perforation",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "SBO vs LBO — how to tell them apart",
   "subarea": "Perforation & obstruction",
   "discriminator": "- **SBO**: central dilated loops, **valvulae conniventes** (cross the FULL bowel width), early profuse vomiting\n  - Diameter cut-off **>3 cm**\n  - Most common cause = **adhesions** (prior surgery), then hernia\n- **LBO**: peripheral dilated loops, **haustra** (partial, do NOT cross full width), late vomiting, marked distension\n  - Normal limits: colon **>6 cm** / caecum **>9 cm**\n  - Most common cause = **colorectal cancer**, then diverticular stricture, then volvulus\n- Always examine the **hernial orifices** and do a **PR** in any bowel obstruction",
   "whatFirst": "- **Resuscitate + 'drip and suck'** (IV fluids + NG decompression) + analgesia + IDC\n- Then **CT abdo/pelvis with contrast** to confirm level, cause, and look for closed-loop/strangulation/perforation\n- In LBO, CT also **stages a likely cancer** and assesses ileocaecal valve competence",
   "redFlags": "- Localised tenderness, fever, tachycardia, rising lactate, peritonism = **strangulation/perforation** → operate\n- LBO with a **competent ileocaecal valve** = closed loop → high perforation risk, do not just observe",
   "trap": "- Most tempting WRONG answer: **'plain AXR is sufficient to confirm and manage'**\n  - AXR can suggest the level but **CT is the investigation of choice**\n  - CT gives the cause (cancer vs adhesion vs volvulus), the transition point, and complications (closed loop/ischaemia)\n- Also a trap: assuming **adhesions** in a patient with NO prior surgery\n  - In a virgin abdomen with SBO, think **hernia or malignancy**, and image",
   "source": "CSSANZ / standard Australian colorectal & general surgical practice; radiology diameter thresholds (3/6/9 cm rule).",
   "tags": [
    "SBO",
    "LBO",
    "bowel obstruction",
    "adhesions",
    "colorectal cancer"
   ],
   "mnemonic": "'3-6-9' rule: small bowel >3 cm, colon >6 cm, caecum >9 cm. valvulae = full width (small bowel); haustra = partial (large bowel). 'aDheSiOns' for SBO, 'CanCer' for LBO.",
   "viva": "- Examiner: 'On the AXR, how do you know it is small vs large bowel, and what is the likeliest cause for each?'\n- Then: **'what is your first management step?'** (drip & suck + CT)\n- Be ready to interpret **valvulae vs haustra** and quote the **3/6/9 cut-offs**",
   "mcqTrap": "- **'Plain AXR confirms the diagnosis and level — no further imaging needed'** — wrong\n  - CT is the investigation of choice for cause and complications",
   "verified": true,
   "visualHtml": "<table class='gv-table'><tr><th></th><th>SBO</th><th>LBO</th></tr><tr><td>Loops</td><td>Central</td><td>Peripheral</td></tr><tr><td>Folds</td><td>Valvulae conniventes (full width)</td><td>Haustra (partial)</td></tr><tr><td>Diameter limit</td><td>&gt;3 cm</td><td>colon &gt;6 cm / caecum &gt;9 cm</td></tr><tr><td>Vomiting</td><td>Early, profuse</td><td>Late</td></tr><tr><td>Distension</td><td>Less</td><td>Marked</td></tr><tr><td>Commonest cause</td><td>Adhesions, hernia</td><td>Cancer, diverticular, volvulus</td></tr></table>",
   "cutoffs": [
    "Small bowel **>3 cm**",
    "Colon **>6 cm**",
    "Caecum **>9 cm**",
    "**CT = investigation of choice** for cause + complications"
   ],
   "title": "SBO vs LBO",
   "subtitle": "how to tell them apart",
   "id": "surg-acute-abdomen-5",
   "images": [
    {
     "src": "assets/img/gastrointestinal_axr_small_bowel_obstruction_01.jpg",
     "caption": "Small bowel obstruction — central ladder-pattern dilated loops on AXR",
     "alt": "Centrally placed dilated small bowel loops with valvulae conniventes (plicae circulares) crossing the full width of the lumen — classic SBO pattern",
     "credit": "James Heilman MD (Jmh649), Wikimedia Commons, CC BY-SA 3.0 (edges cropped to remove side markers)"
    },
    {
     "src": "assets/img/gastrointestinal_axr_large_bowel_obstruction_01.jpg",
     "caption": "Large bowel obstruction — peripheral haustral distension on AXR",
     "alt": "Peripherally distributed dilated large bowel with haustra that do NOT cross the full lumen width, +/- caecal distension — classic LBO pattern",
     "credit": "James Heilman, MD (Jmh649), Wikimedia Commons, CC BY-SA 3.0 (edge arrow & text cropped)"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Bridenileus_mit_Hungerdarm_75M_-_CT_axial_und_coronar_KM_pv_-_001_-_Annotation.jpg/960px-Bridenileus_mit_Hungerdarm_75M_-_CT_axial_und_coronar_KM_pv_-_001_-_Annotation.jpg",
     "caption": "CT abdomen — transition point in small bowel obstruction",
     "alt": "Axial CT showing dilated proximal small bowel collapsing to a transition point (adhesion band), with collapsed distal bowel",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Sigmoid vs caecal volvulus",
   "subarea": "Perforation & obstruction",
   "discriminator": "- **SIGMOID volvulus** (commoner, elderly/comorbid/constipated/institutionalised, neuropsychiatric meds):\n  - 'Coffee bean'/'inverted-U' arising from the **PELVIS**, pointing to the **RUQ**\n  - Managed FIRST with **flexible sigmoidoscopy + flatus tube decompression**\n- **CAECAL volvulus** (younger patients):\n  - Dilated caecum displaced to the **LUQ** ('embryo'/'comma'/'coffee bean' pointing the other way), collapsed distal colon\n  - Endoscopic decompression usually FAILS → needs **surgery (right hemicolectomy, or caecopexy)**",
   "whatFirst": "- **Sigmoid**: resuscitate → flexible sigmoidoscopic decompression + flatus tube\n  - Avoids emergency resection in the unfit\n  - Then **elective sigmoid colectomy** (recurrence is high)\n- **Caecal**: resuscitate → **theatre (right hemicolectomy)** as primary treatment\n  - Endoscopy is NOT the answer",
   "redFlags": "- Blood/dusky/**necrotic mucosa** at sigmoidoscopy, peritonism, perforation, or failed endoscopic detorsion\n  - Stop scoping and **operate**\n- **Recurrence after sigmoid detorsion is high** — that's why definitive elective surgery is planned",
   "trap": "- Most tempting WRONG answer: **'flexible sigmoidoscopy/endoscopic decompression'** for a CAECAL volvulus\n  - It typically fails; the answer is **surgery**\n- Reverse trap: rushing a **SIGMOID volvulus** straight to laparotomy\n  - Endoscopic decompression is the correct FIRST step (if no ischaemia/perforation)",
   "source": "WSES consensus guidelines on sigmoid volvulus management (2023); CSSANZ / Australian colorectal surgical practice; radiographic 'coffee bean' sign and recurrence figures (surgical literature).",
   "tags": [
    "volvulus",
    "sigmoid",
    "caecal",
    "coffee bean",
    "decompression",
    "colorectal"
   ],
   "mnemonic": "Sigmoid = Scope first (from pelvis, points to RUQ). Caecal = Cut first (to LUQ, surgery). 'S for Scope, C for Cut.'",
   "viva": "- Examiner shows a coffee-bean AXR: **'Which volvulus, and how do you treat it?'**\n  - Sigmoid → sigmoidoscopic decompression then elective resection (high recurrence)\n  - Caecal → right hemicolectomy\n- Probe: **'Why not just scope the caecal one?'**\n  - Decompression fails, and viability/right colon mobility need surgery",
   "mcqTrap": "- **'Endoscopic decompression'** offered for a caecal volvulus — wrong\n  - Caecal volvulus is primarily surgical **(right hemicolectomy)**",
   "verified": true,
   "visualHtml": "<table class='gv-table'><tr><th></th><th>Sigmoid volvulus</th><th>Caecal volvulus</th></tr><tr><td>Frequency</td><td>Commoner</td><td>Less common</td></tr><tr><td>Patient</td><td>Elderly, constipated, institutionalised</td><td>Younger</td></tr><tr><td>X-ray</td><td>Coffee bean from pelvis -> RUQ</td><td>Dilated caecum -> LUQ ('embryo')</td></tr><tr><td>First-line Rx</td><td>Flexible sigmoidoscopy + flatus tube</td><td>Surgery (right hemicolectomy)</td></tr><tr><td>Definitive</td><td>Elective sigmoid colectomy (high recurrence)</td><td>Resection / caecopexy</td></tr></table>",
   "cutoffs": [
    "Sigmoid: **endoscopic decompression first**, then elective resection",
    "Sigmoid recurrence after detorsion **~40-70%** (ranges reported 30→80%)",
    "Caecal: **primary surgery** (right hemicolectomy)",
    "**Ischaemia/perforation/failed scope → operate** either type"
   ],
   "title": "Sigmoid vs caecal volvulus",
   "id": "surg-acute-abdomen-6",
   "images": [
    {
     "src": "assets/img/gastrointestinal_axr_sigmoid_volvulus_01.jpg",
     "caption": "Sigmoid volvulus — coffee-bean sign on AXR",
     "alt": "Massively dilated inverted-U sigmoid loop (coffee-bean / northern exposure sign) arising from the pelvis, pointing toward the right upper quadrant",
     "credit": "Hellerhoff, Wikimedia Commons, CC BY-SA 3.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/CecalVolvulusXray.png/960px-CecalVolvulusXray.png",
     "caption": "Caecal volvulus — dilated caecum displaced to left upper quadrant on AXR",
     "alt": "Dilated caecum displaced to the left upper quadrant or mid-abdomen with a kidney-bean or comma shape; paucity of gas in the right lower quadrant",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/1/11/Sigmavolvulus_-_91w_-_CT_cor_-_001_-_Annotation.gif",
     "caption": "Sigmoid volvulus — CT coronal showing twisted mesenteric pedicle (whirl sign)",
     "alt": "CT coronal view of sigmoid volvulus demonstrating the whirl sign of twisted mesentery and the massively dilated sigmoid loop",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/d/d9/CecalVolvulus.png",
     "caption": "Caecal volvulus — CT showing caecum displaced to left upper quadrant",
     "alt": "CT demonstrating caecal volvulus with the caecum displaced to the left upper quadrant and a whirl sign at the site of torsion",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Simple adhesive SBO -> 'drip & suck' + Gastrografin challenge",
   "subarea": "Perforation & obstruction",
   "discriminator": "- For uncomplicated adhesional SBO (no strangulation/closed loop/peritonitis), a **trial of non-operative management** is appropriate\n  - Succeeds in **~60-80%**\n- **Water-soluble contrast (Gastrografin)** is both diagnostic AND therapeutic:\n  - Contrast reaching the colon on abdominal film within **~24 h** predicts resolution\n  - Pooled sensitivity **~96-97%**, specificity **~96-98%**\n  - Shortens hospital stay\n  - Failure of contrast to reach colon = **predicts need for surgery**",
   "whatFirst": "- **'Drip and suck'**: IV fluids + electrolyte correction + NG tube decompression + IDC + analgesia + nil by mouth\n- Give the **Gastrografin challenge** and reassess\n- If no resolution within **~48-72 h**, or earlier deterioration → **surgery**",
   "redFlags": "- Develops fever, peritonism, rising lactate, or **contrast fails to reach colon** = stop conservative management and operate\n- Surgery should NOT be delayed beyond **~48 h** once strangulation is suspected\n  - Strangulation risk rises with delay",
   "trap": "- Most tempting WRONG answer: **'continue conservative management indefinitely'** or 'NBM + IV fluids forever'\n  - There is a clock — maximum non-op trial **~72 h**\n  - Persistent obstruction or any deterioration mandates surgery\n- Opposite trap: **operating immediately** on a simple first-presentation adhesional SBO that would likely settle",
   "source": "WSES (Bologna) guidelines for adhesive SBO (latest revision); Cochrane/water-soluble contrast meta-analyses; Australian general surgical practice.",
   "tags": [
    "SBO",
    "adhesions",
    "Gastrografin",
    "drip and suck",
    "conservative management"
   ],
   "mnemonic": "'Drip & Suck' = Fluids + NG. Gastrografin to colon in 24 h = will settle; no colon = cut. The 72-hour clock.",
   "viva": "- Examiner: **'When is it safe to manage SBO non-operatively and for how long?'**\n  - Quote ~60-80% success, the Gastrografin challenge (colon by 24 h predicts resolution), and the **~48-72 h ceiling**\n- Mention you would NOT trial conservative management if:\n  - No prior surgery, strangulation, or a **closed loop**",
   "mcqTrap": "- **'Proceed straight to laparotomy'** for a stable, uncomplicated first adhesive SBO — wrong\n  - Should trial drip & suck + contrast first",
   "verified": true,
   "visualHtml": "<div class='gv-flow'><div class='gv-step'>Uncomplicated adhesive SBO</div><div class='gv-step'>Drip &amp; suck (IVF + NG + IDC + NBM)</div><div class='gv-step'>Gastrografin challenge</div><div class='gv-step'>Contrast in colon by 24 h -> resolving, continue</div><div class='gv-step'>No colon by 24 h OR deteriorating / 48-72 h -> THEATRE</div></div>",
   "cutoffs": [
    "Non-op success **~60-80%**",
    "Max conservative trial **~72 h**",
    "Contrast to colon by **24 h** = will resolve (sens ~96-97% / spec ~96-98%)",
    "**Strangulation risk rises** if surgery delayed"
   ],
   "title": "Simple adhesive SBO -> 'drip & suck'…",
   "id": "surg-acute-abdomen-7",
   "images": [
    {
     "src": "assets/img/gastrointestinal_axr_small_bowel_obstruction_01.jpg",
     "caption": "Small bowel obstruction — AXR showing dilated central loops (drip-and-suck scenario)",
     "alt": "Dilated central small bowel loops with air-fluid levels indicating SBO amenable to initial conservative (drip and suck) management",
     "credit": "James Heilman MD (Jmh649), Wikimedia Commons, CC BY-SA 3.0 (edges cropped to remove side markers)"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Bridenileus_mit_Hungerdarm_75M_-_CT_axial_und_coronar_KM_pv_-_001.jpg/960px-Bridenileus_mit_Hungerdarm_75M_-_CT_axial_und_coronar_KM_pv_-_001.jpg",
     "caption": "CT abdomen — adhesive SBO with closed-loop obstruction (surgical emergency)",
     "alt": "CT showing a closed-loop small bowel obstruction with C-shaped dilated loop and mesenteric twisting — indicates surgical rather than conservative management",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Acute appendicitis — pregnancy test FIRST, then imaging vs straight to theatre",
   "subarea": "Appendicitis, biliary & pancreatitis (surgical)",
   "whatFirst": "- In ANY woman of reproductive age with RIF pain: **urine/serum bhCG FIRST** before imaging or theatre\n  - To exclude **ectopic** (the killer mimic)\n  - And because pregnancy changes the imaging pathway (US/MRI, not CT)",
   "trap": "- Single most tempting wrong MCQ answer: **'CT abdomen/pelvis'** as the first imaging in a young woman or pregnant patient\n  - In pregnancy: first-line is **graded-compression US**, then MRI if non-diagnostic (avoid CT radiation)\n- In a classic young male with **high clinical probability** (Alvarado/AIR high), the gotcha is that imaging is NOT mandatory — proceed to **appendicectomy**; over-imaging delays theatre\n- Equivocal/female/elderly = **CT** (in non-pregnant)\n- Other trap: choosing **'antibiotics alone'** as definitive\n  - Non-operative management is an option for uncomplicated appendicitis but recurrence **~30-40% at 1 yr**\n  - NOT the default exam answer; appendicectomy remains standard\n  - Especially avoid if **appendicolith** present (high failure of antibiotics)",
   "discriminator": "- **Ectopic**: bhCG positive, adnexal mass/free fluid on US\n- **Ovarian torsion**: sudden severe pain, whirlpool/absent flow on Doppler — surgical emergency, don't anchor on appendix\n- **Mesenteric adenitis/PID**: cervical motion tenderness, discharge\n- **Right ureteric colic**: loin-to-groin, haematuria\n- **Mittelschmerz**: mid-cycle, self-limiting",
   "redFlags": "- Generalised peritonitis/guarding = **perforation** → resuscitate + urgent theatre, don't wait for imaging\n- Diffuse sepsis, rising lactate, free gas on imaging\n- In **pregnancy**: appendix is displaced upward (RUQ in 3rd trimester)\n  - High index of suspicion; **perforation risk to fetus** is the concern\n  - Err toward earlier surgery",
   "cutoffs": [
    "**bhCG: do FIRST** in all reproductive-age women",
    "Appendix diameter on US/CT **>6 mm** (non-compressible) = positive",
    "Alvarado: 0-3 low, 4-6 equivocal (image), **7-10 high** (probable, → surgery)",
    "Pregnancy imaging order: **graded-compression US → MRI**; CT avoided",
    "Antibiotic-only Rx: recurrence **~30-40% at 1 yr**; avoid if appendicolith present"
   ],
   "mcqTrap": "- **'Order CT abdomen/pelvis'** as first step in a pregnant or young female patient — wrong\n  - bhCG comes first\n  - US/MRI is the pregnancy-safe pathway\n  - CT is reserved for equivocal non-pregnant cases",
   "mnemonic": "Alvarado = MANTRELS: Migration, Anorexia, Nausea, Tenderness RIF, Rebound, Elevated temp, Leucocytosis, Shift to left. RIF pain in a woman → 'bhCG before the knife and before the scanner.'",
   "viva": "- Examiner probe: **'Young woman, RIF pain — what's your FIRST investigation?'**\n  - Expected: **bhCG** to exclude ectopic\n- Then: who needs imaging vs straight to theatre, and why CT is wrong in pregnancy\n- **ISBAR escalation** if peritonitic\n- Consent for appendicectomy: bleeding, infection, conversion to open, negative appendicectomy rate, stump leak",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Patient</th><th>First step</th><th>Imaging</th><th>Pathway</th></tr></thead><tbody><tr><td>Young male, high Alvarado</td><td>Resus + analgesia</td><td>Often none</td><td>Straight to appendicectomy</td></tr><tr><td>Female reproductive age</td><td>bhCG FIRST</td><td>US, then CT if equivocal & non-pregnant</td><td>Exclude ectopic/torsion first</td></tr><tr><td>Pregnant</td><td>bhCG (confirms), no CT</td><td>Graded-compression US → MRI</td><td>Lower threshold for surgery</td></tr><tr><td>Equivocal/elderly</td><td>Resus</td><td>CT A/P</td><td>Image to confirm/exclude</td></tr></tbody></table>",
   "source": "IDSA 2024 imaging guideline for suspected appendicitis (US→MRI in pregnancy; CT for equivocal non-pregnant); CODA/APPAC trials (antibiotic-only); Australian surgical practice (eTG/RACS).",
   "verified": true,
   "tags": [
    "appendicitis",
    "pregnancy",
    "imaging",
    "bhCG",
    "Alvarado",
    "MEDI8403",
    "MEDI8401"
   ],
   "title": "Acute appendicitis",
   "subtitle": "pregnancy test FIRST, then imaging vs straight to theatre",
   "id": "surg-acute-abdomen-8",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Appendicitis_ultrasound.png/960px-Appendicitis_ultrasound.png",
     "caption": "Acute appendicitis — ultrasound showing non-compressible aperistaltic appendix >6 mm",
     "alt": "Graded-compression ultrasound showing a thick-walled non-compressible blind-ending tubular structure >6 mm diameter with surrounding echogenic fat (first-line in young women and pregnancy)",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/1/10/CT_scan_of_the_abdomen_showing_acute_appendicitis.jpg",
     "caption": "Acute appendicitis — CT showing periappendiceal fat stranding and thick-walled appendix",
     "alt": "Axial CT abdomen/pelvis showing a distended thick-walled appendix with periappendiceal fat stranding and possible appendicolith — CT is NOT first-line in young women/pregnancy",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Acute cholangitis — source-control TIMING & urgent biliary decompression",
   "subarea": "Appendicitis, biliary & pancreatitis (surgical)",
   "whatFirst": "- **Resuscitate aggressively** (sepsis: fluids, blood cultures, IV antibiotics within 1 h)\n- Then arrange **URGENT biliary decompression — ERCP is first-line**\n- Antibiotics alone do NOT treat an obstructed infected duct; the **obstruction must be relieved**",
   "trap": "- Most tempting wrong answer: **'IV antibiotics and observe'** / 'antibiotics will fix it'\n  - WRONG — cholangitis is obstruction + infection; without DRAINAGE it can progress to **suppurative cholangitis** and death\n- Exam point is **timing by severity**:\n  - **Severe (grade III, organ dysfunction)** → emergency drainage ASAP, within **24 h**\n  - **Moderate (grade II)** → early drainage within **~24-48 h**\n  - **Mild (grade I)** → ERCP timed/elective; biliary drainage if no response to antibiotics within **24 h**",
   "discriminator": "- **TG18 diagnosis** = (A) systemic inflammation (fever/rigors or labs) + (B) cholestasis (jaundice/abnormal LFTs) + (C) imaging (biliary dilatation/stricture/stone)\n- **Grade III** = organ dysfunction (cardiovascular/renal/hepatic/haem/CNS/resp)\n- Distinguish from:\n  - **Cholecystitis**: no obstructive LFTs/duct dilatation\n  - **Mirizzi**: extrinsic CBD compression by impacted cystic-duct stone",
   "redFlags": "- **Reynolds' pentad** (hypotension + confusion added to Charcot's) = grade III suppurative cholangitis\n  - → ICU + **emergency decompression**\n- If **ERCP unavailable/fails**: percutaneous transhepatic biliary drainage (PTBD) or surgical decompression\n- Lactate rise, vasopressor need = **septic shock**",
   "cutoffs": [
    "Severe (TG18 grade III, organ dysfunction): **emergency drainage ASAP** once resuscitated (≤24 h)",
    "Moderate (grade II): **early drainage** as soon as possible (~24-48 h)",
    "Mild (grade I): drainage if **no response to antibiotics within 24 h** / timed",
    "**Antibiotics within 1 h** (sepsis); eTG: amoxicillin/ampicillin + gentamicin ± metronidazole",
    "**Drainage within 24 h** reduces length of stay / morbidity"
   ],
   "mcqTrap": "- **'Treat with IV antibiotics alone and monitor'** for cholangitis — wrong\n  - The obstructed infected duct MUST be decompressed (ERCP)\n  - Antibiotics without drainage are inadequate",
   "mnemonic": "'Cholangitis = pus under pressure → DRAIN it.' Sicker = sooner: Grade III ASAP, Grade I only if no response in 24 h.",
   "viva": "- Examiner probe: **'Septic, jaundiced, hypotensive — what now?'**\n  - Expected: ABCDE/sepsis resus + ISBAR to GI/surgery for **EMERGENCY decompression (grade III)**, ICU referral, PTBD if ERCP fails\n- Discriminator probed: **why antibiotics alone are insufficient**",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>TG18 grade</th><th>Definition</th><th>Drainage timing</th></tr></thead><tbody><tr><td>III (severe)</td><td>Organ dysfunction (CVS/renal/hepatic/CNS/resp/haem)</td><td>Emergency, ASAP once resuscitated (≤24 h)</td></tr><tr><td>II (moderate)</td><td>WCC abnormal, high fever ≥39, age ≥75, high bili, hypoalbuminaemia</td><td>Early, as soon as possible (~24-48 h)</td></tr><tr><td>I (mild)</td><td>Neither II nor III</td><td>If no response to antibiotics in 24 h / timed</td></tr></tbody></table>",
   "source": "Tokyo Guidelines 2018 (TG18) severity grading & drainage timing; GESA; Therapeutic Guidelines (eTG, current) biliary sepsis; Surviving Sepsis (antibiotics within 1 h).",
   "verified": true,
   "tags": [
    "cholangitis",
    "ERCP",
    "source control",
    "TG18",
    "sepsis",
    "decompression",
    "MEDI8403",
    "MEDI8401"
   ],
   "title": "Acute cholangitis",
   "subtitle": "source-control TIMING & urgent biliary decompression",
   "id": "surg-acute-abdomen-9",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Ultrasound_of_diated_common_bile_duct_and_intrahepatic_ducts_due_to_gallstone_obstruction.png/960px-Ultrasound_of_diated_common_bile_duct_and_intrahepatic_ducts_due_to_gallstone_obstruction.png",
     "caption": "Acute cholangitis — CT showing dilated CBD with stone and biliary gas",
     "alt": "CT axial view demonstrating dilated common bile duct with a hyperdense choledocholithiasis and/or pneumobilia — biliary obstruction requiring urgent decompression",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/0/09/ERCP_stone.jpg",
     "caption": "ERCP — CBD stone extraction in acute cholangitis",
     "alt": "ERCP fluoroscopy image showing a filling defect (CBD stone) in the common bile duct and biliary decompression via sphincterotomy — the definitive source-control procedure",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Ultrasound_of_stone_within_the_distal_common_bile_duct.jpg/960px-Ultrasound_of_stone_within_the_distal_common_bile_duct.jpg",
     "caption": "Ultrasound — dilated common bile duct in biliary obstruction",
     "alt": "Abdominal ultrasound showing a dilated CBD (>6 mm) with acoustic shadowing from a CBD stone — initial imaging for suspected cholangitis",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Acute cholecystitis — early cholecystectomy timing & antibiotic choice (source control)",
   "subarea": "Appendicitis, biliary & pancreatitis (surgical)",
   "whatFirst": "- Resuscitate (IV fluids, analgesia, antiemetics, NBM), start antibiotics\n- Then book **EARLY laparoscopic cholecystectomy**\n  - Same admission, ideally **within 72 h** of symptom onset\n  - Don't wait 6 weeks for an interval procedure",
   "trap": "- Most tempting wrong answer: **'antibiotics and interval cholecystectomy in 6 weeks'**\n  - Current evidence (TG18/WSES) favours **EARLY/index-admission lap chole within ~72 h**\n  - Up to 7 days from symptom onset is still acceptable/safe\n  - Delayed surgery = more readmissions, more emergency presentations, higher conversion rate\n- **Interval cholecystectomy is now the inferior default**, not the gold standard",
   "discriminator": "- Distinguish from **biliary colic**: pain <6 h, no fever, no leucocytosis, Murphy's negative, normal inflammatory markers → outpatient elective chole\n- Distinguish from **cholangitis**: jaundice + obstructive LFTs → ERCP first\n- **Acalculous cholecystitis**: critically ill/ICU/fasting/TPN patient, no stones\n  - Consider **percutaneous cholecystostomy** if unfit for surgery",
   "redFlags": "- **Gangrenous/emphysematous cholecystitis**: gas in GB wall on imaging, diabetic, septic\n- **Perforation**, or failure to improve = urgent surgery/cholecystostomy\n- **High-risk/unfit-for-surgery** patient → percutaneous cholecystostomy as temporising source control",
   "cutoffs": [
    "Early lap chole: **within 72 h** of symptom onset ideal; up to **7 days** still safe",
    "**Same (index) admission preferred** over interval (6-week) surgery",
    "eTG empirical biliary sepsis: **amoxicillin (or ampicillin) + gentamicin** IV",
    "Add **metronidazole** if biliary-enteric anastomosis / gangrenous / severe",
    "**Percutaneous cholecystostomy** if unfit for surgery (e.g., acalculous in ICU)"
   ],
   "mcqTrap": "- **'Discharge on oral antibiotics and arrange interval cholecystectomy in 6 weeks'** — wrong\n  - Index-admission early lap chole (within 72 h) is now standard\n  - Reduces readmissions/complications",
   "mnemonic": "'Hot gallbladder, hot knife' — operate early, don't cool off for 6 weeks. Antibiotics = 'Amp + Gent (+ Metro if it's been plumbed to bowel or gangrenous).'",
   "viva": "- Examiner probe: **'When would you operate?'**\n  - Expected: index admission, within **72 h**\n- Consent for lap chole: bleeding, infection, **bile duct/vascular injury**, bile leak, retained stone, conversion to open, need for intra-op cholangiogram\n- ISBAR if deteriorating/gangrenous",
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Resus: IVF, analgesia, NBM, antiemetic</div><div class=\"gv-step\">Antibiotics: amoxicillin + gentamicin (eTG) ± metronidazole</div><div class=\"gv-step\">US confirms (thick wall, pericholecystic fluid, sonographic Murphy's)</div><div class=\"gv-step\">EARLY lap chole — index admission, ideally &lt;72 h</div><div class=\"gv-step\">If unfit: percutaneous cholecystostomy</div></div>",
   "source": "Tokyo Guidelines 2018; WSES acute calculous cholecystitis 2020; Therapeutic Guidelines (eTG, current) — biliary tract infection; Australian surgical practice.",
   "verified": true,
   "tags": [
    "cholecystitis",
    "cholecystectomy",
    "timing",
    "antibiotics",
    "eTG",
    "source control",
    "MEDI8403",
    "MEDI8401"
   ],
   "title": "Acute cholecystitis",
   "subtitle": "early cholecystectomy timing & antibiotic choice (source control)",
   "id": "surg-acute-abdomen-10",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Acute_cholecystitis_as_seen_on_ultrasound_axial_view.jpg/960px-Acute_cholecystitis_as_seen_on_ultrasound_axial_view.jpg",
     "caption": "Acute cholecystitis — ultrasound showing gallstones, wall thickening and pericholecystic fluid",
     "alt": "Ultrasound demonstrating echogenic gallstones with posterior acoustic shadowing, >3 mm gallbladder wall thickening, pericholecystic fluid and a positive sonographic Murphy sign",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Acute mesenteric ischaemia — pain out of proportion, lactate, AF",
   "subarea": "Appendicitis, biliary & pancreatitis (surgical)",
   "whatFirst": "- **SUSPECT it** on the story: severe pain out of proportion to a soft/benign abdomen in an arteriopath/AF patient\n- Resuscitate, then get **URGENT CT angiography (arterial phase)**\n- Do NOT wait for peritonitis or a high lactate — by then the bowel is dead\n- **Early surgical/vascular referral in parallel**",
   "trap": "- Classic and most tempting wrong answer: **'normal lactate or soft abdomen excludes it — reassure and observe'**\n  - WRONG — lactate rises **LATE** (after transmural infarction)\n  - A normal lactate does NOT exclude early mesenteric ischaemia\n- Diagnosis is made on **suspicion + CT angiography**, not on waiting for lactate or peritonism\n- Other trap: ordering a **plain AXR or US first** — wrong\n  - CT angiography is the investigation; delay = dead bowel\n- **Anchoring on a 'benign exam' is the killer**",
   "discriminator": "- **Embolic** (commonest): sudden onset, AF/recent MI, SMA territory, sparing proximal jejunum\n- **Thrombotic**: gradual, prior 'intestinal angina'/postprandial pain + weight loss, diffuse atherosclerosis\n- **Non-occlusive (NOMI)**: shock/low-flow, vasopressors, dialysis\n- **Venous**: younger, hypercoagulable/portal hypertension, subacute\n- Distinguish from: **pancreatitis** (lipase), **AAA rupture** (pulsatile mass, hypotension), **obstruction**\n- **AF + sudden severe out-of-proportion pain = embolic SMA** until proven otherwise",
   "redFlags": "- Peritonitis, rising lactate, haemodynamic instability, AF/recent MI with acute abdomen = **LATE/established infarction** → emergency laparotomy\n  - Resection ± revascularisation\n- Bloody diarrhoea, **metabolic acidosis**\n- Mortality very high once bowel is necrotic\n  - Red flag is to act on suspicion **BEFORE** these appear",
   "cutoffs": [
    "**CT ANGIOGRAPHY (arterial phase) = first-line diagnostic** (sens ~92%, spec ~99%) — do urgently",
    "**Lactate rises LATE**; normal lactate does NOT exclude early AMI",
    "**AF / recent MI** = embolic SMA occlusion risk (commonest cause)",
    "'**Intestinal angina**' (postprandial pain + weight loss) precedes thrombotic AMI",
    "**Peritonitis/instability → emergency laparotomy**"
   ],
   "mcqTrap": "- **'Normal lactate / soft non-tender abdomen rules out mesenteric ischaemia'** — wrong\n  - Pain is out of proportion to exam\n  - Lactate rises late\n  - Suspicion mandates **urgent CT angiography**",
   "mnemonic": "'Pain out of proportion + AF + (deceptively) soft belly = SMA embolus until proven otherwise.' Lactate is a LATE liar — don't wait for it.",
   "viva": "- Examiner probe: **'Why is this patient's abdomen soft but you're worried?'**\n  - Expected: pain out of proportion + AF → embolic AMI\n  - Urgent CT angiography, NBM, fluids, broad-spectrum antibiotics, ISBAR to surgery/vascular, anticoagulation, theatre if infarcted\n- Discriminator probed: **embolic vs thrombotic vs NOMI vs venous**; why a normal lactate is falsely reassuring",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Type</th><th>Clue</th><th>Onset</th></tr></thead><tbody><tr><td>Embolic (commonest)</td><td>AF / recent MI; SMA territory</td><td>Sudden</td></tr><tr><td>Thrombotic</td><td>'Intestinal angina', weight loss, atherosclerosis</td><td>Gradual on chronic</td></tr><tr><td>NOMI (non-occlusive)</td><td>Shock, vasopressors, dialysis, low-flow</td><td>Insidious</td></tr><tr><td>Venous (mesenteric vein)</td><td>Young, hypercoagulable, portal HTN</td><td>Subacute</td></tr></tbody></table><div class=\"gv-pills\"><span class=\"gv-pill\">First test: CT angiography</span><span class=\"gv-pill\">Lactate = LATE</span><span class=\"gv-pill\">AF → embolic SMA</span></div>",
   "source": "WSES acute mesenteric ischaemia guidelines; current vascular/acute-abdomen literature (multidetector CT angiography first-line, sens ~92% / spec ~99%); Australian surgical practice.",
   "verified": true,
   "tags": [
    "mesenteric ischaemia",
    "CT angiography",
    "lactate",
    "atrial fibrillation",
    "pain out of proportion",
    "embolic",
    "MEDI8403",
    "MEDI8401"
   ],
   "title": "Acute mesenteric ischaemia",
   "subtitle": "pain out of proportion, lactate, AF",
   "id": "surg-acute-abdomen-11",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_atrial_fibrillation.jpg",
     "caption": "Atrial fibrillation — ECG (embolic source for mesenteric ischaemia)",
     "alt": "Irregularly irregular rhythm with absent P waves — the commonest cardiac source of arterial embolus causing acute mesenteric ischaemia",
     "credit": "Ewingdo, Wikimedia Commons, CC BY-SA 4.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Pneumatosis_Intestinalis_CT.JPG/960px-Pneumatosis_Intestinalis_CT.JPG",
     "caption": "Acute mesenteric ischaemia — CT angiography showing superior mesenteric artery occlusion",
     "alt": "CT angiography with filling defect/occlusion of the superior mesenteric artery (SMA) or its branches, with small bowel wall thickening, pneumatosis intestinalis or portal venous gas in advanced cases",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Acute pancreatitis — diagnosis, severity scoring & fluid/feeding gotchas",
   "subarea": "Appendicitis, biliary & pancreatitis (surgical)",
   "whatFirst": "- **Diagnose** (2 of 3: typical pain + lipase ≥3× ULN + imaging)\n- **Assess severity** and resuscitate with goal-directed IV fluids\n- **Identify aetiology**: US for stones, LFTs, triglycerides, calcium\n- CT is NOT for diagnosis early — reserve for **severity/complications at ~72 h+**",
   "trap": "- (1) **'Order CT to diagnose'** — WRONG: diagnosis is clinical + lipase; early CT under-stages necrosis and delays care; CT is for severity/complications later\n- (2) **'Keep NBM until pain-free'** — WRONG: early enteral feeding (oral/NG as tolerated, within **~24-72 h**) is now preferred over prolonged fasting/TPN\n- (3) **'Prophylactic antibiotics for severe/necrotising pancreatitis'** — WRONG: NOT routinely indicated; antibiotics only for **proven infected necrosis/cholangitis**\n- (4) **Amylase 'normal'** falsely reassuring — **lipase is more sensitive/specific** and stays elevated longer",
   "discriminator": "- **Gallstone vs alcohol vs other**:\n  - ALT **>150 (3× ULN)** favours gallstones\n  - Triglycerides **>11 mmol/L** = hypertriglyceridaemic cause\n  - High calcium = hyperparathyroid\n  - Recent ERCP, drugs\n- **Severity tools — Revised Atlanta** (organ failure-based):\n  - Mild: no organ failure/complications\n  - Moderately severe: transient OF **<48 h** or local complications\n  - Severe: persistent OF **>48 h**\n- **Glasgow-Imrie (PANCREAS)** and APACHE II predict severity\n- **CRP >150 at 48 h** = severe\n- Rising urea/haematocrit = under-resuscitation",
   "redFlags": "- **Persistent organ failure >48 h** (severe), SIRS/septic shock, falling urine output, rising lactate/urea\n- **Cullen's/Grey-Turner's signs** (haemorrhagic)\n- **Infected necrosis** (clinical deterioration ~2-4 weeks, gas in collection) → ICU\n  - Step-up drainage: **percutaneous/endoscopic before open necrosectomy**\n  - NOT early open surgery",
   "cutoffs": [
    "Diagnosis = 2 of 3: pain + **lipase/amylase ≥3× ULN** + imaging (Revised Atlanta)",
    "**Severe = persistent organ failure >48 h**; moderately severe = transient OF <48 h or local complications",
    "**Glasgow-Imrie ≥3** = severe; APACHE II ≥8 = severe",
    "**CRP >150 mg/L at 48 h** = predictor of severe disease",
    "**ALT >150** → gallstone aetiology; triglycerides **>11 mmol/L** → HTG cause",
    "**NO prophylactic antibiotics**; early enteral feeding"
   ],
   "mcqTrap": "- **'Start prophylactic IV antibiotics in severe/necrotising pancreatitis'** — wrong: not indicated without proven infection\n- Runner-up trap: **'CT abdomen to confirm the diagnosis'** — wrong: diagnosis is clinical + lipase; CT is for severity/complications, best after **72 h**",
   "mnemonic": "Glasgow-Imrie = PANCREAS: PaO2 <8, Age >55, Neutrophils (WCC >15), Calcium <2, Renal (urea >16), Enzymes (LDH/AST high), Albumin <32, Sugar (glucose >10). 'Lipase, not amylase; fluids and feed, not antibiotics.'",
   "viva": "- Examiner probe: **'How do you score severity and what fluids?'**\n  - Expected: Revised Atlanta + Glasgow/APACHE/CRP\n  - Goal-directed **crystalloid (Hartmann's/balanced preferred)**\n  - **Early enteral feeding**, no prophylactic antibiotics\n- ISBAR/ICU referral for **persistent organ failure**\n- Discriminator probed: why early CT and antibiotics are wrong",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Revised Atlanta</th><th>Definition</th></tr></thead><tbody><tr><td>Mild</td><td>No organ failure, no local/systemic complications</td></tr><tr><td>Moderately severe</td><td>Transient organ failure &lt;48 h OR local/systemic complications</td></tr><tr><td>Severe</td><td>Persistent organ failure &gt;48 h</td></tr></tbody></table><div class=\"gv-pills\"><span class=\"gv-pill\">Lipase ≥3× ULN</span><span class=\"gv-pill\">Glasgow ≥3 = severe</span><span class=\"gv-pill\">CRP &gt;150 at 48h</span><span class=\"gv-pill\">No prophylactic abx</span><span class=\"gv-pill\">Early enteral feed</span></div>",
   "source": "Revised Atlanta Classification 2012; MJA 'Acute pancreatitis: update on management' (2015); WSES severe acute pancreatitis 2019; GESA; Therapeutic Guidelines (eTG, current).",
   "verified": true,
   "tags": [
    "acute pancreatitis",
    "Revised Atlanta",
    "Glasgow-Imrie",
    "severity",
    "lipase",
    "fluids",
    "MEDI8403",
    "MEDI8401"
   ],
   "title": "Acute pancreatitis",
   "subtitle": "diagnosis, severity scoring & fluid/feeding gotchas",
   "id": "surg-acute-abdomen-12",
   "images": [
    {
     "src": "assets/img/gastrointestinal_ct_pancreatic_pseudocyst_fresh.jpg",
     "caption": "Acute pancreatitis — CT showing pseudocyst complication",
     "alt": "CT showing a large rounded peripancreatic fluid collection with a defined wall — pancreatic pseudocyst as a complication of acute pancreatitis",
     "credit": "Hellerhoff, Wikimedia Commons, CC BY-SA 4.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Pankreatitis_exsudativ_CT_axial.jpg/960px-Pankreatitis_exsudativ_CT_axial.jpg",
     "caption": "Acute pancreatitis — CT showing peripancreatic fluid and pancreatic necrosis (Balthazar grade)",
     "alt": "Contrast-enhanced CT abdomen demonstrating pancreatic parenchymal necrosis (non-enhancing areas) with peripancreatic fat stranding and fluid collections — NOT used to diagnose but to stage severity and complications",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Cholecystitis vs cholangitis vs gallstone pancreatitis — the three-way discriminator",
   "subarea": "Appendicitis, biliary & pancreatitis (surgical)",
   "whatFirst": "- Resuscitate, then **DECIDE which of the three biliary emergencies** it is — because the destination differs:\n  - **Cholecystitis** → cholecystectomy\n  - **Cholangitis** → urgent ERCP/drainage\n  - **Gallstone pancreatitis** → supportive + index cholecystectomy (ERCP only if obstruction/cholangitis)\n- Check **LFTs, lipase, FBC, and US**",
   "trap": "- Most tempting wrong answer: treating **ALL THREE the same way**\n  - e.g. urgent ERCP for cholecystitis, or cholecystectomy first in cholangitis\n- Killer discriminator: **Charcot's triad** — fever + RUQ pain + JAUNDICE = **cholangitis** (infected obstructed duct, needs DRAINAGE)\n  - NOT simple cholecystitis (RUQ pain + fever + Murphy's, usually NOT jaundiced, normal-ish bilirubin)\n- Adding hypotension + confusion = **Reynolds' pentad** = suppurative cholangitis → emergency decompression",
   "discriminator": "- **Cholecystitis**: Murphy's positive, fever, leucocytosis\n  - US: thick-walled (**>4-5 mm**) GB, pericholecystic fluid, sonographic Murphy's\n  - Bilirubin/LFTs usually **normal or mildly up**\n- **Cholangitis**: jaundice + obstructive LFT picture (**high bili, high ALP/GGT**) + dilated CBD on US/duct stone; systemically septic\n- **Gallstone pancreatitis**: epigastric pain to back, lipase **≥3× ULN**, often transient ALT rise\n  - ALT **>150** strongly suggests gallstone aetiology",
   "redFlags": "- **Reynolds' pentad** (Charcot's triad + hypotension + altered mental state) = acute suppurative/obstructive cholangitis\n  - Resuscitate + **emergency biliary decompression** (ERCP; PTC/surgery if ERCP fails)\n- **Severe sepsis/septic shock** from any biliary source = ICU + source control",
   "cutoffs": [
    "**Charcot's triad** (fever + RUQ pain + jaundice) = cholangitis; **Reynolds' pentad** adds hypotension + confusion",
    "**Lipase ≥3× ULN** = pancreatitis (Revised Atlanta)",
    "**ALT >150 U/L** (or 3× ULN) → favours gallstone cause of pancreatitis",
    "GB wall **>4-5 mm** + pericholecystic fluid + sonographic Murphy's = cholecystitis",
    "Dilated CBD **>6-7 mm** (>10 post-cholecystectomy) suggests obstruction"
   ],
   "mcqTrap": "- Choosing **'urgent cholecystectomy'** for acute cholangitis — wrong: cholangitis needs biliary DRAINAGE first (ERCP), cholecystectomy comes later\n- Conversely: choosing **'urgent ERCP'** for uncomplicated cholecystitis — wrong: cholecystitis needs cholecystectomy, not ERCP",
   "mnemonic": "Charcot = 3 (fever, pain, jaundice). Reynolds = 5 (add Pressure-down + Pixie-confused). 'Jaundice tips cholecystitis into cholangitis — and cholangitis means DRAIN, don't cut first.'",
   "viva": "- Examiner probe: **'How do you tell cholangitis from cholecystitis at the bedside?'**\n  - Expected: jaundice + obstructive LFTs + sepsis = cholangitis → ISBAR to surgical/GI reg for ERCP\n- Discriminator probed: **which gets a knife first (cholecystitis) vs a drain first (cholangitis)**",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Feature</th><th>Cholecystitis</th><th>Cholangitis</th><th>Gallstone pancreatitis</th></tr></thead><tbody><tr><td>Hallmark</td><td>Murphy's +ve</td><td>Charcot's triad (+jaundice)</td><td>Epigastric→back pain</td></tr><tr><td>Bilirubin/ALP</td><td>Normal/mild</td><td>High (obstructive)</td><td>ALT >150 hints gallstone</td></tr><tr><td>Lipase</td><td>Normal</td><td>Normal</td><td>≥3× ULN</td></tr><tr><td>US</td><td>Thick GB wall, pericholecystic fluid</td><td>Dilated CBD ± duct stone</td><td>Gallstones ± duct stone</td></tr><tr><td>Definitive Rx</td><td>Cholecystectomy (early)</td><td>ERCP/drainage FIRST</td><td>Supportive + index cholecystectomy</td></tr></tbody></table>",
   "source": "Tokyo Guidelines 2018 (TG18) diagnostic criteria; Revised Atlanta 2012 (pancreatitis); GESA; Therapeutic Guidelines (eTG, current) biliary sepsis.",
   "verified": true,
   "tags": [
    "cholecystitis",
    "cholangitis",
    "gallstone pancreatitis",
    "Charcot",
    "Reynolds",
    "discriminator",
    "MEDI8403",
    "MEDI8401"
   ],
   "title": "Cholecystitis vs cholangitis vs gallstone pancreatitis",
   "subtitle": "the three-way discriminator",
   "id": "surg-acute-abdomen-13",
   "images": [
    {
     "src": "assets/img/gastrointestinal_photo_scleral_icterus_fresh.jpg",
     "caption": "Scleral icterus — jaundice as discriminator for cholangitis vs cholecystitis",
     "alt": "Yellow discolouration of the sclera indicating hyperbilirubinaemia — jaundice is the key feature distinguishing cholangitis (CBD obstructed) from simple cholecystitis (cystic duct only)",
     "credit": "Bobjgalindo, Wikimedia Commons, CC BY-SA 4.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/7/76/Ultrasonography_of_cholecystitis.jpg",
     "caption": "Acute cholecystitis — ultrasound with gallstones and wall thickening (RUQ pain, no jaundice)",
     "alt": "Ultrasound showing gallstones with acoustic shadow, thickened gallbladder wall and pericholecystic fluid — cholecystitis (cystic duct obstruction, no CBD involvement, no jaundice)",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/0/09/ERCP_stone.jpg",
     "caption": "Acute cholangitis — ERCP/CT showing CBD stone and biliary dilatation (Charcot's triad)",
     "alt": "CT or ERCP demonstrating dilated CBD with choledocholithiasis — cholangitis (CBD obstruction, Charcot's triad: RUQ pain + fever + jaundice; requires urgent decompression)",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Pankreatitis_exsudativ_CT_axial.jpg/960px-Pankreatitis_exsudativ_CT_axial.jpg",
     "caption": "Gallstone pancreatitis — CT showing pancreatic inflammation with gallstones (epigastric pain, elevated lipase)",
     "alt": "CT abdomen showing pancreatic oedema, peripancreatic fat stranding and gallstones/CBD stone — gallstone pancreatitis (ampullary obstruction causing pancreatic autodigestion)",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Gallstone pancreatitis — ERCP indication & timing of cholecystectomy",
   "subarea": "Appendicitis, biliary & pancreatitis (surgical)",
   "whatFirst": "- Confirm **gallstone aetiology** (US for stones, ALT >150)\n- Start **supportive Rx**\n- Decide: does this patient need ERCP?\n  - ERCP is NOT for all gallstone pancreatitis — it is for concurrent **CHOLANGITIS** or persisting biliary **OBSTRUCTION**\n- Plan **index-admission cholecystectomy** for mild disease",
   "trap": "- Most tempting wrong answer: **'urgent ERCP for all (or all severe) gallstone pancreatitis'** — WRONG\n  - Old teaching that severe gallstone pancreatitis needs early ERCP has been superseded\n- Current indication: **ERCP within 24 h ONLY** if concurrent acute cholangitis\n  - Also consider if ongoing **biliary obstruction**\n- **Severity alone**, without cholangitis/obstruction, is NOT an ERCP indication\n  - APEC trial: no benefit of urgent ERCP in predicted-severe biliary pancreatitis without cholangitis\n- Second trap: **'delay cholecystectomy 6 weeks'** — wrong for MILD disease\n  - Mild disease: same-admission (index) cholecystectomy is standard to prevent recurrence",
   "discriminator": "- Cholangitis present (jaundice + obstructive LFTs + sepsis + dilated duct) → **urgent ERCP within 24 h**\n- Pancreatitis alone without obstruction → **no ERCP**, treat supportively\n- **MRCP/EUS** to clarify retained CBD stone in equivocal cases before committing to ERCP\n- **Mild vs severe** (Revised Atlanta) determines cholecystectomy timing",
   "redFlags": "- Concurrent **cholangitis** (Charcot/Reynolds) = urgent ERCP + drainage\n- **Severe pancreatitis** with persistent organ failure = ICU\n  - Defer cholecystectomy until recovery/resolution of collections (interval, after ~6 weeks for severe/necrotising disease)",
   "cutoffs": [
    "**ERCP within 24 h** ONLY if concurrent acute cholangitis (± persisting obstruction)",
    "**Severity alone** is NOT an ERCP indication (APEC trial)",
    "Mild gallstone pancreatitis: cholecystectomy **SAME (index) admission**",
    "Severe/necrotising: delay cholecystectomy **~6 weeks** (until collections settle)",
    "**ALT >150** (3× ULN) supports gallstone cause"
   ],
   "mcqTrap": "- **'Urgent ERCP for all severe gallstone pancreatitis'** — WRONG\n  - ERCP is indicated for concurrent cholangitis (or ongoing obstruction), not for severity per se (APEC)\n- Runner-up: **'interval cholecystectomy at 6 weeks for mild disease'** — WRONG\n  - Index-admission chole is standard for mild",
   "mnemonic": "'ERCP earns its place only when the duct is BLOCKED-and-INFECTED (cholangitis) — not because the pancreas is angry.' Mild = chole this admission; Severe = chole later.",
   "viva": "- Examiner probe: **'Does this gallstone pancreatitis need an ERCP?'**\n  - Expected: only if cholangitis/obstruction\n- Then: **when do you take out the gallbladder?**\n  - Mild → index admission; severe → interval\n- **ISBAR** for the jaundiced septic patient\n- Consent: ERCP risks — post-ERCP pancreatitis, bleeding, perforation, cholangitis",
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Gallstone pancreatitis confirmed (US stones, ALT &gt;150)</div><div class=\"gv-step\">Cholangitis OR persisting obstruction? → YES: urgent ERCP &lt;24 h</div><div class=\"gv-step\">NO cholangitis/obstruction → supportive only, NO ERCP</div><div class=\"gv-step\">Mild → cholecystectomy SAME admission</div><div class=\"gv-step\">Severe/necrotising → interval cholecystectomy (~6 wk)</div></div>",
   "source": "APEC trial (Lancet 2020 — urgent ERCP in predicted-severe biliary pancreatitis); Revised Atlanta 2012; GESA; Tokyo Guidelines 2018; Australian surgical practice (index-admission cholecystectomy for mild disease).",
   "verified": true,
   "tags": [
    "gallstone pancreatitis",
    "ERCP",
    "indication",
    "cholecystectomy timing",
    "index admission",
    "APEC",
    "MEDI8403",
    "MEDI8401"
   ],
   "title": "Gallstone pancreatitis",
   "subtitle": "ERCP indication & timing of cholecystectomy",
   "id": "surg-acute-abdomen-14",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Pankreatitis_exsudativ_CT_axial.jpg/960px-Pankreatitis_exsudativ_CT_axial.jpg",
     "caption": "Gallstone pancreatitis — CT showing pancreatic oedema and peripancreatic fat stranding",
     "alt": "Contrast-enhanced CT demonstrating oedematous pancreas with peripancreatic fat stranding confirming acute pancreatitis from gallstone aetiology — CT for severity, NOT diagnosis",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/0/09/ERCP_stone.jpg",
     "caption": "ERCP — stone extraction from CBD in gallstone pancreatitis with concurrent cholangitis",
     "alt": "ERCP fluoroscopy showing choledocholithiasis (filling defect in CBD) and biliary decompression — ERCP is indicated in gallstone pancreatitis ONLY when concurrent cholangitis or persistent biliary obstruction is present",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Acute diverticulitis: antibiotics-or-not & outpatient criteria",
   "subarea": "Colorectal & anorectal",
   "trap": "- Modern Australian practice (eTG): **uncomplicated diverticulitis** in a well, immunocompetent patient may NOT need antibiotics\n  - Antibiotics = selective, not routine use\n  - Antibiotics don't shorten the illness or prevent recurrence\n- This catches students who **reflexively prescribe**\n- Antibiotics ARE indicated if:\n  - **Immunocompromised**\n  - **Sepsis**/systemically unwell\n  - **Complicated disease** (abscess/perforation/obstruction)\n  - Significant **comorbidity**\n  - Failure to improve at **72 h**\n- Do NOT do a **colonoscopy in the acute phase** (perforation risk)\n  - Arrange interval colonoscopy **~6 weeks** after the acute episode settles to exclude malignancy",
   "whatFirst": "- Confirm **uncomplicated on CT** + assess host\n- Well + uncomplicated + immunocompetent → consider **no antibiotics**, oral intake, outpatient with safety-net\n- Complicated/septic/immunocompromised → **admit + antibiotics +/- drainage**\n- Start antibiotics if **no improvement at 72 h**",
   "discriminator": "- **Uncomplicated + well + immunocompetent** (and not right-sided) = antibiotic-sparing\n- Any of: immunocompromise, sepsis, complicated CT findings, comorbidity = **give antibiotics**\n- **Acute = no scope**; interval colonoscopy at ~6 weeks",
   "redFlags": "- **Immunosuppression**, signs of perforation/abscess, ongoing fever/pain at 72 h, inability to tolerate oral intake → admit/escalate",
   "mcqTrap": "- **'Urgent colonoscopy now'** in acute diverticulitis — WRONG (perforation risk)\n  - Scope is done as interval colonoscopy **~6 weeks** later\n- Also tempting-wrong: **mandatory antibiotics** for every uncomplicated case",
   "source": "eTG (Therapeutic Guidelines Gastrointestinal, current) - selective antibiotics in uncomplicated diverticulitis; MJA diverticulitis review",
   "viva": "- Examiner: 'Well 55-yo, CT confirms uncomplicated sigmoid diverticulitis — do they need antibiotics?'\n  - Show the **antibiotic-sparing approach**\n  - Show the immunocompromise/sepsis/right-sided **exceptions**\n  - Show **interval scope**",
   "mnemonic": "'Well + uncomplicated = watch (no abx); Sick/immunosuppressed/complicated = treat. Scope LATER, not now.'",
   "tags": [
    "diverticulitis",
    "antibiotics",
    "eTG",
    "colonoscopy"
   ],
   "verified": true,
   "cutoffs": [
    "Start antibiotics if **no improvement at 72 h** (when initially withheld)",
    "Interval colonoscopy **~6 weeks** after acute episode"
   ],
   "title": "Acute diverticulitis",
   "subtitle": "antibiotics-or-not & outpatient criteria",
   "id": "surg-acute-abdomen-15",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/02-Sigmadivertikulitis_CT_ax_001_Umgebung.png/960px-02-Sigmadivertikulitis_CT_ax_001_Umgebung.png",
     "caption": "Acute diverticulitis — CT showing pericolic fat stranding and diverticula (uncomplicated)",
     "alt": "CT abdomen/pelvis showing sigmoid diverticula with focal pericolic fat stranding — uncomplicated (Hinchey Ia) diverticulitis; CT is gold-standard for diagnosis and classification",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/03-Sigmadivertikulitis_CT_ax_001_Kleiner_Abszess.png/960px-03-Sigmadivertikulitis_CT_ax_001_Kleiner_Abszess.png",
     "caption": "Complicated diverticulitis — CT showing pericolic abscess (Hinchey II)",
     "alt": "CT showing a walled-off pericolic or pelvic abscess complicating sigmoid diverticulitis — Hinchey II disease requiring percutaneous drainage rather than antibiotics alone",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Anal fissure: site, first-line chemical sphincterotomy & the LIS gotcha",
   "subarea": "Colorectal & anorectal",
   "trap": "- **Site is the discriminator**\n- Fissure in the **POSTERIOR MIDLINE** = typical/benign (ischaemia of the posterior anoderm)\n- Fissure that is **LATERAL, multiple, or atypical** = think secondary cause\n  - Crohn's disease, TB, HIV, syphilis, malignancy — investigate, don't just give cream\n- First-line for chronic fissure = **topical GTN 0.2% or diltiazem 2%** (chemical sphincterotomy) BD for ~6–8 weeks + stool softeners/fibre\n  - **Diltiazem preferred** over GTN if headaches (equally effective, fewer adverse effects)\n- Surgery = **LATERAL internal sphincterotomy** (gold standard)\n  - NEVER do a **midline/posterior sphincterotomy** (keyhole deformity)\n  - Risk to counsel: **faecal/flatus incontinence**",
   "whatFirst": "- Chronic fissure → fibre + softeners + **topical GTN or diltiazem** 6–8 weeks first\n- Failure → refer for **lateral internal sphincterotomy** (or botulinum toxin)",
   "discriminator": "- **Posterior midline** = primary/benign\n- **Lateral/atypical/multiple** = secondary (Crohn's etc) → investigate\n- GTN vs diltiazem: equally effective; **diltiazem fewer headaches**",
   "redFlags": "- **Atypical/lateral fissure**, induration, undermined edges, associated perianal disease → exclude IBD/malignancy/infection",
   "mcqTrap": "- **'Proceed to lateral internal sphincterotomy'** as first-line for a fresh chronic fissure WITHOUT a trial of topical therapy — WRONG\n  - Medical (chemical sphincterotomy) first for **6–8 weeks**\n- Also tempting-wrong: **dismissing a lateral fissure** as benign",
   "source": "Australian Prescriber 'Anal fissure'; RACGP 'Anal fissures: an update on treatment options'; CSSANZ",
   "viva": "- Examiner: **'Where are most fissures and why does location matter?'**\n  - Posterior midline, ischaemic; lateral = suspect secondary cause\n- Consent for LIS: bleeding, infection, recurrence, and crucially **incontinence** (esp. to flatus)",
   "mnemonic": "'Posterior = primary; Lateral = look for a cause. Cream 6-8 weeks before the knife - and the knife goes LATERAL, never midline.'",
   "tags": [
    "anal fissure",
    "GTN",
    "diltiazem",
    "sphincterotomy"
   ],
   "verified": true,
   "cutoffs": [
    "Topical **GTN 0.2% or diltiazem 2%** BD x 6–8 weeks",
    "Surgery (**lateral internal sphincterotomy**) after failed conservative therapy"
   ],
   "title": "Anal fissure",
   "subtitle": "site, first-line chemical sphincterotomy & the LIS gotcha",
   "id": "surg-acute-abdomen-16",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Anal_fissure.JPG/960px-Anal_fissure.JPG",
     "caption": "Posterior midline anal fissure — classic linear tear at 6 o'clock",
     "alt": "Clinical close-up showing a linear posterior midline anal fissure — the typical benign ischaemic fissure at the 6 o'clock position; contrast with atypical lateral fissure",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Colorectal cancer: TNM staging traps & treatment-deciding thresholds",
   "subarea": "Colorectal & anorectal",
   "trap": "- Single biggest staging gotcha: **Stage III (any node-positive, N1/N2)** = adjuvant chemotherapy regardless of T stage\n  - **Nodes, not depth**, trigger chemo\n- **RECTAL vs COLON** cancer differ fundamentally:\n  - Locally advanced rectal cancer (T3/T4 or node+) → **NEOADJUVANT (pre-op) chemoradiotherapy** then TME surgery\n  - Colon cancer → **surgery-first** then adjuvant chemo if node+\n- Staging needs **CT chest/abdo/pelvis** + (for rectum) **pelvic MRI**\n- **CEA** is a baseline/surveillance marker — NOT a diagnostic or screening test",
   "whatFirst": "- Confirmed CRC → full staging (**CT C/A/P**; pelvic MRI if rectal) + baseline **CEA**\n- Then **MDT** to decide neoadjuvant vs surgery-first",
   "discriminator": "- **Node-positive = Stage III** = adjuvant chemo\n- **Rectal cancer** = MRI + consider neoadjuvant chemoRT\n- **Colon cancer** = surgery first\n- **T4/obstruction/perforation** escalates urgency",
   "redFlags": "- **Obstruction, perforation, or near-obstructing tumour** → emergency\n- Large-bowel obstruction with competent ileocaecal valve risks **closed-loop perforation**\n  - Caecum **>9–12 cm** on imaging = imminent rupture",
   "mcqTrap": "- **'Use CEA to screen/diagnose'** — WRONG\n  - CEA lacks sensitivity/specificity for screening; it is for **baseline and post-treatment surveillance** only\n- Also tempting-wrong: giving adjuvant chemo based on **T-stage alone** when node-negative",
   "source": "Cancer Council Australia / NHMRC CRC clinical practice guidelines; CSSANZ; AJCC TNM 8th ed",
   "viva": "- Examiner: **'Rectal vs sigmoid cancer — does management differ?'**\n  - Rectal → MRI + neoadjuvant chemoRT + TME\n  - Colon → resection first\n- Then: **'When does this patient get chemo?'** = node-positive (Stage III)",
   "mnemonic": "'Nodes -> chemo; Rectum -> radiate (neoadjuvant) first.'",
   "tags": [
    "CRC",
    "staging",
    "TNM",
    "treatment",
    "high-yield"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Feature</th><th>Colon cancer</th><th>Rectal cancer</th></tr><tr><td>Staging imaging</td><td>CT C/A/P</td><td>CT C/A/P + pelvic MRI</td></tr><tr><td>Sequence</td><td>Surgery first</td><td>Neoadjuvant chemoRT if T3/T4 or N+, then TME</td></tr><tr><td>Chemo trigger</td><td>Node+ (Stage III)</td><td>Node+ / locally advanced</td></tr></table>",
   "title": "Colorectal cancer",
   "subtitle": "TNM staging traps & treatment-deciding thresholds",
   "id": "surg-acute-abdomen-17"
  },
  {
   "topic": "Diverticulitis: Hinchey classification & operate-or-not thresholds",
   "subarea": "Colorectal & anorectal",
   "trap": "- **Hinchey drives the decision**\n- **Ia/Ib** = phlegmon / small pericolic abscess (<4–5 cm) → medical management +/- antibiotics\n- **II** = larger walled-off pelvic abscess (≥4–5 cm) → **percutaneous (CT-guided) drainage**, NOT straight to theatre\n- **III** = generalised PURULENT peritonitis\n- **IV** = FECULENT (faecal) peritonitis\n- **III/IV** = emergency surgery\n- Classic operative gotcha:\n  - Stable patient with purulent peritonitis (Hinchey III) → may have **laparoscopic lavage or primary resection ± anastomosis**\n  - **Unstable/feculent (IV)** patient → **Hartmann's** (resection + end colostomy)\n  - Don't anastomose in **contaminated/unstable** settings",
   "whatFirst": "- **Resuscitate** → CT abdo/pelvis to assign **Hinchey**\n- Small abscess → medical\n- Large abscess → **percutaneous drain**\n- Purulent/feculent peritonitis or failed source control → **theatre**",
   "discriminator": "- Abscess size **~4–5 cm** separates antibiotics (Hinchey I) from percutaneous drainage (Hinchey II)\n- **Purulent (III)** vs **feculent (IV)** peritonitis separates lavage/primary resection from **Hartmann's**",
   "redFlags": "- Free gas/peritonism, sepsis, **feculent contamination**, failure of percutaneous drainage, immunosuppressed → emergency operation\n- Recurrent/complicated or stricturing disease → elective resection discussion",
   "mcqTrap": "- **'Take the Hinchey II pelvic abscess straight to laparotomy'** — WRONG\n  - First-line for a drainable walled-off abscess (≥4–5 cm) is **CT-guided percutaneous drainage + antibiotics**\n  - Surgery reserved for III/IV or drainage failure",
   "source": "Hinchey classification; CSSANZ / WSES diverticulitis principles; MJA review 'Management of diverticulitis' (Australian)",
   "viva": "- Examiner: **'CT shows a 6 cm pelvic collection — next step?'**\n  - = percutaneous drainage, not theatre\n- Then: **'Now free faeces in the abdomen, BP 80 systolic'**\n  - = resuscitate + emergency **Hartmann's**",
   "mnemonic": "Hinchey: I phlegmon/small abscess, II big abscess (Drain), III Pus, IV Poo. 'Pus or Poo in the belly -> theatre.'",
   "tags": [
    "diverticulitis",
    "Hinchey",
    "surgery",
    "high-yield"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Hinchey</th><th>Finding</th><th>Management</th></tr><tr><td>I</td><td>Phlegmon / small pericolic abscess (<4-5 cm)</td><td>Medical +/- antibiotics</td></tr><tr><td>II</td><td>Walled-off pelvic abscess (>=4-5 cm)</td><td>Percutaneous (CT-guided) drainage</td></tr><tr><td>III</td><td>Generalised purulent peritonitis</td><td>Surgery (lavage / resection +/- primary anastomosis)</td></tr><tr><td>IV</td><td>Generalised feculent peritonitis</td><td>Emergency Hartmann's (resection + end colostomy)</td></tr></table>",
   "title": "Diverticulitis",
   "subtitle": "Hinchey classification & operate-or-not thresholds",
   "id": "surg-acute-abdomen-18",
   "images": [
    {
     "src": "assets/img/gastrointestinal_axr_pneumoperitoneum_01.jpg",
     "caption": "AXR — pneumoperitoneum in perforated diverticulitis (Rigler's sign / free gas under diaphragm)",
     "alt": "Plain AXR showing free intraperitoneal gas under the right hemidiaphragm — pneumoperitoneum from perforated diverticulitis (Hinchey III/IV); erect CXR is more sensitive",
     "credit": "Hellerhoff / Wikimedia Commons · CC BY-SA 4.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/01-Sigmadivertikulitis_CT_ax_001_Perforation.png/960px-01-Sigmadivertikulitis_CT_ax_001_Perforation.png",
     "caption": "Complicated diverticulitis — CT showing free air (Hinchey III/IV perforated diverticulitis)",
     "alt": "CT abdomen showing free intraperitoneal gas and/or purulent/faeculent fluid — perforated diverticulitis (Hinchey III/IV) requiring emergency surgery (Hartmann's or primary anastomosis)",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/03-Sigmadivertikulitis_CT_ax_001_Kleiner_Abszess.png/960px-03-Sigmadivertikulitis_CT_ax_001_Kleiner_Abszess.png",
     "caption": "Diverticulitis — CT pericolic abscess Hinchey II suitable for percutaneous drainage",
     "alt": "CT showing a large pericolic or pelvic abscess (>4-5 cm) in diverticulitis — Hinchey II disease managed by CT-guided percutaneous drainage rather than immediate surgery",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Fistula-in-ano: Goodsall's rule, seton vs fistulotomy & Crohn's link",
   "subarea": "Colorectal & anorectal",
   "trap": "- **~25–40%** of drained anorectal abscesses develop a **fistula-in-ano**\n- **Goodsall's rule** (exam favourite):\n  - External opening **ANTERIOR** to transverse anal line → straight/radial tract to internal opening\n  - External opening **POSTERIOR** → curved tract opening into the **posterior midline**\n- Surgical gotcha: **fistulotomy** is curative for LOW/SIMPLE fistulas but risks **INCONTINENCE** if it divides significant sphincter\n- **HIGH/complex or anterior-in-women or Crohn's fistulas** → **SETON** (preserve continence), not blind fistulotomy\n- Recurrent/multiple/complex perianal fistulas → think **CROHN'S DISEASE**\n  - Optimise medical/biologic therapy alongside seton",
   "whatFirst": "- Define anatomy (**EUA ± MRI pelvis** for complex)\n- Low simple fistula → **fistulotomy**\n- High/complex/Crohn's → **seton** + treat underlying disease",
   "discriminator": "- **Low/simple** (minimal sphincter) = fistulotomy\n- **High/complex/anterior-in-female/Crohn's** = seton (continence-preserving)\n- **Recurrent complex fistulae** = screen for Crohn's",
   "redFlags": "- **Multiple/recurrent/branching fistulae**, diarrhoea, perianal Crohn's features → investigate for IBD\n- Complex tracts → **MRI before surgery**",
   "mcqTrap": "- **'Lay open (fistulotomy) a high trans-sphincteric fistula'** — WRONG\n  - Dividing significant sphincter risks **faecal incontinence**\n  - Correct answer is a **seton**",
   "source": "CSSANZ fistula-in-ano guidance; Goodsall's rule (classic); Australian colorectal practice",
   "viva": "- Examiner: **'External opening 3 cm posterior to anus — where's the internal opening?'**\n  - = posterior midline (curved tract)\n- Then: **'When would you NOT lay it open?'**\n  - = high/complex/Crohn's → seton\n- Consent: **incontinence risk**, recurrence",
   "mnemonic": "Goodsall: 'Anterior = straight; Posterior = curved to the posterior midline.' 'High tract = seton, not the knife.'",
   "tags": [
    "fistula-in-ano",
    "Goodsall",
    "seton",
    "Crohn"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>External opening</th><th>Tract (Goodsall)</th><th>Internal opening</th></tr><tr><td>Anterior to transverse line</td><td>Straight / radial</td><td>Directly inward (radial)</td></tr><tr><td>Posterior to transverse line</td><td>Curved</td><td>Posterior midline</td></tr></table>",
   "title": "Fistula-in-ano",
   "subtitle": "Goodsall's rule, seton vs fistulotomy & Crohn's link",
   "id": "surg-acute-abdomen-19",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Fistula_diag_01-ca.svg/960px-Fistula_diag_01-ca.svg.png",
     "caption": "Fistula-in-ano — clinical photo showing external opening with granulation tissue",
     "alt": "Perianal clinical photograph showing an external fistulous opening with granulation tissue adjacent to the anal margin — fistula-in-ano complicating prior anorectal abscess",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Haemorrhoids: grading, treatment ladder & the thrombosed gotcha",
   "subarea": "Colorectal & anorectal",
   "trap": "- **Internal haemorrhoid grading drives treatment**:\n  - Grade **I** (bleed, no prolapse) and **II** (prolapse, spontaneously reduces) → conservative (fibre, fluids, topical) ± rubber-band ligation\n  - Grade **III** (prolapse, manual reduction) → banding or surgery\n  - Grade **IV** (irreducible) → surgery (haemorrhoidectomy)\n- Classic trap: acutely **THROMBOSED EXTERNAL haemorrhoid** presenting within **~72 h** of severe pain → **excision** gives rapid relief\n  - After 72 h pain is settling → **conservative management**\n- Biggest safety gotcha: **NEVER attribute rectal bleeding to haemorrhoids** without excluding colorectal cancer\n  - Examine + scope appropriately in at-risk/older patients",
   "whatFirst": "- **Bleeding PR** → assess for red flags + age/risk\n- If any concern → **colonoscopy to exclude malignancy** BEFORE labelling 'just haemorrhoids'\n- Then **grade and treat** by ladder",
   "discriminator": "- **Internal** (above dentate line, painless bleeding, graded I–IV) vs **external/thrombosed** (below dentate, painful)\n- **Thrombosed external <72 h** = excise; **>72 h** = conservative\n- **Painless bright bleeding** does NOT equal benign until cancer excluded",
   "redFlags": "- Change in bowel habit, weight loss, anaemia, **age ≥45–50**, FHx, mass → colonoscopy\n- Don't band an **undiagnosed rectal tumour**",
   "mcqTrap": "- **'Diagnose haemorrhoids and reassure'** in an older patient with new PR bleeding without examination/scope — WRONG\n  - This misses **colorectal cancer**\n  - Exam-favourite correct answer: **exclude malignancy first**",
   "source": "CSSANZ haemorrhoid management; Australian Prescriber / RACGP anorectal guidance",
   "viva": "- Examiner: **'62-yo, painless PR bleeding — is it haemorrhoids?'**\n  - Trap is to agree\n  - Correct: examine + **colonoscopy to exclude cancer** first, then treat\n- Consent point for banding/haemorrhoidectomy: pain, bleeding, recurrence, **rare incontinence**",
   "mnemonic": "Grades: I bleed, II reduce-spontaneous, III reduce-by-hand, IV stuck. 'Thrombosed external: cut within 3 days, or comfort care after.'",
   "tags": [
    "haemorrhoids",
    "anorectal",
    "grading",
    "cancer-exclusion"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Grade</th><th>Behaviour</th><th>Treatment</th></tr><tr><td>I</td><td>Bleed, no prolapse</td><td>Conservative</td></tr><tr><td>II</td><td>Prolapse, reduce spontaneously</td><td>Conservative / banding</td></tr><tr><td>III</td><td>Prolapse, manual reduction</td><td>Banding / surgery</td></tr><tr><td>IV</td><td>Irreducible</td><td>Haemorrhoidectomy</td></tr></table>",
   "title": "Haemorrhoids",
   "subtitle": "grading, treatment ladder & the thrombosed gotcha",
   "id": "surg-acute-abdomen-20",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Anorectal_mucosa_with_hemorrhoid.jpg/960px-Anorectal_mucosa_with_hemorrhoid.jpg",
     "caption": "Internal haemorrhoids grading I-IV — proctoscopy / clinical diagram",
     "alt": "Proctoscopy image or diagram showing internal haemorrhoid grades: I (bleed, no prolapse), II (prolapse, spontaneous reduction), III (prolapse, manual reduction), IV (irreducible) — drives treatment decision",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Perianalthrombose.jpg/960px-Perianalthrombose.jpg",
     "caption": "Thrombosed external haemorrhoid — clinical photo showing tense painful perianal lump",
     "alt": "Clinical perianal photograph showing a tense, purple, acutely painful thrombosed external haemorrhoid — the exam gotcha: manage with excision (not incision) within 72 hours for best results",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "NBCSP screening: ages, interval & the 2024 age-drop gotcha",
   "subarea": "Colorectal & anorectal",
   "trap": "- MCQ tempts with the OLD **'50–74' start age**\n- Since **1 JUL 2024**: National Bowel Cancer Screening Program (NBCSP) lowered eligible start age to **45**\n- Test = **immunochemical FOBT (iFOBT/FIT)**, 2-yearly, ages 45–74\n- KEY nuance:\n  - **50–74** are automatically mailed a kit\n  - **45–49** must **REQUEST** their first kit (not auto-mailed)\n- iFOBT is for **ASYMPTOMATIC, average-risk** people only\n  - A symptomatic patient (PR bleeding, change in bowel habit, anaemia) does NOT get an iFOBT → goes straight to **colonoscopy**",
   "whatFirst": "- Asymptomatic + average risk + **45–74** → iFOBT 2-yearly\n- **Symptomatic** OR strong family history → bypass screening, refer for **colonoscopy**",
   "discriminator": "- **iFOBT = screening** (asymptomatic)\n- **Symptoms or FHx** = diagnostic pathway = colonoscopy, NOT a stool test\n- Don't **'screen' a bleeding patient**",
   "redFlags": "- PR bleeding, change in bowel habit >6 wk, **iron-deficiency anaemia** (esp. men/postmenopausal women), abdominal/rectal mass, unexplained weight loss → colonoscopy regardless of recent **negative iFOBT**",
   "mcqTrap": "- **'Recommend iFOBT'** for a patient already reporting rectal bleeding — WRONG\n  - A negative iFOBT cannot reassure a symptomatic patient\n  - Symptoms mandate **colonoscopy**",
   "source": "Dept of Health, Disability & Ageing - NBCSP lowered eligible age (effective 1 Jul 2024); Cancer Council Australia bowel screening FAQ 2025; AIHW NBCSP monitoring report 2025",
   "viva": "- Examiner: **'Healthy 47-year-old asks about bowel screening — what do you offer and how often?'**\n  - Answer: iFOBT every 2 yrs; note they must **request the first kit** at 45–49\n- Then pivot: **'Now they report blood'**\n  - Must escalate to **colonoscopy**",
   "mnemonic": "'45 to 74, every 2 - but 45s must ASK, 50s get it through the mail.'",
   "tags": [
    "screening",
    "NBCSP",
    "iFOBT",
    "high-yield"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Age</th><th>What happens</th><th>Test/interval</th></tr><tr><td>45-49</td><td>Must REQUEST first kit</td><td>iFOBT, 2-yearly</td></tr><tr><td>50-74</td><td>Kit auto-mailed</td><td>iFOBT, 2-yearly</td></tr><tr><td>Any age + symptoms or strong FHx</td><td>NOT screening</td><td>Colonoscopy</td></tr></table>",
   "title": "NBCSP screening",
   "subtitle": "ages, interval & the 2024 age-drop gotcha",
   "id": "surg-acute-abdomen-21"
  },
  {
   "topic": "Perianal/anorectal abscess: drain first, antibiotics are NOT the treatment",
   "subarea": "Colorectal & anorectal",
   "trap": "- Cardinal gotcha: anorectal abscess is treated by **INCISION AND DRAINAGE**, not antibiotics\n  - Antibiotics alone do not treat an abscess\n  - Antibiotics are only **ADJUNCTS** in specific cases:\n    - Overlying **cellulitis**\n    - **Systemic sepsis**\n    - **Immunocompromise/diabetes**\n    - **Valvular heart disease/prosthesis**\n- Don't wait for **'fluctuance'** or fever — perianal sepsis can be deep with minimal external signs\n- CRITICAL escalation: severe pain out of proportion, systemic toxicity, **crepitus**, immunocompromised/diabetic → think **NECROTISING perianal infection (Fournier's gangrene)**\n  - Surgical emergency: urgent EUA + debridement + broad-spectrum antibiotics",
   "whatFirst": "- Suspected anorectal abscess → urgent **surgical incision & drainage** (often EUA)\n- Add antibiotics only for the **specific adjunct indications**\n- Suspect **Fournier's** → resuscitate + emergency theatre",
   "discriminator": "- **Abscess** (treat by drainage) vs **cellulitis** (antibiotics)\n- **Simple perianal** vs **deep** (ischiorectal/supralevator) — the latter needs EUA/imaging\n- **Diabetic with severe pain** = Fournier's until proven otherwise",
   "redFlags": "- Severe pain out of proportion, systemic toxicity/sepsis, **crepitus**, skin necrosis, immunocompromise/diabetes → suspect **Fournier's gangrene**\n- Failure to drain a **deep/supralevator collection**",
   "mcqTrap": "- **'Treat the perianal abscess with oral antibiotics and review'** — WRONG\n  - Definitive treatment is **surgical drainage**\n  - Antibiotics alone risk progression to **deep/necrotising infection**",
   "source": "CSSANZ / eTG anorectal sepsis principles; Australian surgical practice",
   "viva": "- Examiner: **'Diabetic, severe perianal pain, looks toxic — what's your fear and action?'**\n  - = Fournier's; resuscitate, broad-spectrum antibiotics, urgent **surgical debridement** (ISBAR to on-call surgeon)\n- Consent for I&D: bleeding, recurrence, **fistula formation**",
   "mnemonic": "'Pus = drainage, not pills. Diabetic + disproportionate pain = Fournier's, to theatre.'",
   "tags": [
    "perianal abscess",
    "incision and drainage",
    "Fournier",
    "emergency"
   ],
   "verified": true,
   "title": "Perianal/anorectal abscess",
   "subtitle": "drain first, antibiotics are NOT the treatment",
   "id": "surg-acute-abdomen-22",
   "images": [
    {
     "src": "assets/img/gastrointestinal_derm_perianal_abscess_01.jpg",
     "caption": "Perianal abscess — tense fluctuant erythematous swelling requiring incision and drainage",
     "alt": "Clinical close-up of a perianal abscess — tender erythematous fluctuant swelling at the anal margin requiring I&D (not antibiotics alone) as primary treatment",
     "credit": "Jump3now, Wikimedia Commons, CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "Pilonidal disease: midline natal cleft, NOT a perianal abscess",
   "subarea": "Colorectal & anorectal",
   "trap": "- **Location is everything**: pilonidal abscess/sinus sits in the **MIDLINE of the natal cleft** (sacrococcygeal), several cm posterior to the anus\n  - It is NOT anorectal\n  - It has **NO communication with the anal canal**\n- Don't confuse with a **perianal abscess/fistula**\n- Typical patient: **young, male, hirsute, sedentary**\n- Acute pilonidal abscess → **incision and drainage** (off-midline incision preferred)\n- Chronic disease → **elective excision** (definitive surgery)\n  - High recurrence with simple midline closure\n  - **Off-midline/flap techniques** (e.g. Karydakis, Limberg/cleft-lift) are favoured",
   "whatFirst": "- Acute abscess → **incision & drainage** (off-midline)\n- Chronic/recurrent sinus → **elective definitive excision** with off-midline/flap closure + hair control",
   "discriminator": "- **Pilonidal** = midline natal cleft, contains hair, no anal communication, young hirsute male\n- **Perianal/anorectal abscess** = at anal verge, related to anal glands/dentate line",
   "redFlags": "- Spreading **cellulitis**, systemic sepsis, or immunocompromise with a natal-cleft abscess → escalate\n- **Recurrent/non-healing midline wound** → definitive flap surgery rather than repeated midline procedures",
   "mcqTrap": "- **Labelling a natal-cleft midline abscess as a 'perianal abscess'** and looking for a fistula to the anal canal — WRONG\n  - Pilonidal disease has **no anal communication**\n  - Management/anatomy differ entirely",
   "source": "CSSANZ / Australian surgical guidance on pilonidal disease",
   "viva": "- Examiner: **'Young hirsute man, painful midline lump above the anus — diagnosis and where exactly?'**\n  - = pilonidal abscess in the **natal cleft**\n- Then: **'Why do midline closures recur?'**\n  - = midline wounds heal poorly; use **off-midline/flap**\n- Consent: recurrence, wound breakdown, **prolonged healing**",
   "mnemonic": "'Pilonidal = pit of hair in the MIDLINE cleft - keep the scar OFF the midline.'",
   "tags": [
    "pilonidal",
    "natal cleft",
    "abscess",
    "discriminator"
   ],
   "verified": true,
   "title": "Pilonidal disease",
   "subtitle": "midline natal cleft, NOT a perianal abscess",
   "id": "surg-acute-abdomen-23",
   "images": [
    {
     "src": "assets/img/gastrointestinal_derm_perianal_abscess_01.jpg",
     "caption": "Perianal abscess — at the anal margin (contrast with pilonidal location)",
     "alt": "Perianal abscess — tender fluctuant swelling at the anal margin, NOT midline natal cleft, for anatomical contrast with pilonidal disease",
     "credit": "Jump3now, Wikimedia Commons, CC BY-SA 4.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Two_pilonidal_cysts_in_the_natal_cleft.jpg/960px-Two_pilonidal_cysts_in_the_natal_cleft.jpg",
     "caption": "Pilonidal sinus/abscess — midline natal cleft location",
     "alt": "Pilonidal abscess or sinus opening in the midline of the natal cleft, sacrococcygeal region, several cm posterior to the anus",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Positive iFOBT -> colonoscopy: the 30-day target (NOT 120 days)",
   "subarea": "Colorectal & anorectal",
   "trap": "- The CORRECTION gotcha: recommended Australian benchmark is colonoscopy **within 30 days** of a positive iFOBT\n  - Cancer Council Australia / clinical-care-standard target\n  - NBCSP Quality Framework cites a **44-day benchmark**\n- **'120 days'** is NOT the benchmark — it is only the evidence-based ceiling\n  - CRC guidelines: no prognostic detriment if colonoscopy occurs within 120 days\n  - **Quoting 120 days as 'the standard'** is the trap\n- A positive iFOBT does **NOT mean cancer**; it mandates complete colonic examination\n- **Do not repeat the iFOBT** to 'confirm' — one positive test mandates colonoscopy",
   "whatFirst": "- Positive iFOBT → **GP review + urgent referral for colonoscopy**, ideally within **30 days**\n  - Do not let it drift toward the 120-day prognostic ceiling\n- **Symptomatic/red-flag patients** are prioritised faster",
   "discriminator": "- **30-day target** = the recommended benchmark after a positive iFOBT\n- **120 days** = the evidence ceiling (no prognostic harm), NOT a target\n- Don't conflate the two; in practice median waits exceed both",
   "redFlags": "- **Positive iFOBT PLUS symptoms** (bleeding, weight loss, anaemia) → upgrade urgency\n  - Expedite well within the **30-day target**",
   "mcqTrap": "- **'Repeat the iFOBT in 12 months'** after a positive result — WRONG\n  - A single positive iFOBT requires **diagnostic colonoscopy**, never a repeat stool test\n- Also tempting-wrong: **'120 days is the benchmark'** (it is the prognostic ceiling, not the target)",
   "source": "Cancer Council Australia bowel cancer screening policy; ACSQHC Colonoscopy Clinical Care Standard; AIHW/NCCI NBCSP colonoscopy follow-up indicators 2025",
   "viva": "- **ISBAR a positive-iFOBT referral**: state the positive screen, any symptoms, and request colonoscopy aiming for the **30-day standard**\n- Examiner checks you don't downgrade, **repeat the test**, or wrongly cite **120 days** as the target",
   "mnemonic": "'One positive iFOBT = one colonoscopy - aim 30 days, 120 is the danger line not the deadline.'",
   "tags": [
    "screening",
    "iFOBT",
    "colonoscopy",
    "timing"
   ],
   "verified": false,
   "cutoffs": [
    "Recommended target: colonoscopy within **~30 days** of positive iFOBT (NBCSP Quality Framework: **44 days**)",
    "**120 days** = evidence ceiling (no prognostic detriment), NOT the benchmark"
   ],
   "title": "Positive iFOBT -> colonoscopy",
   "subtitle": "the 30-day target (NOT 120 days)",
   "id": "surg-acute-abdomen-24"
  },
  {
   "topic": "Stoma complications: ischaemia, retraction, prolapse, parastomal hernia & the high-output gotcha",
   "subarea": "Colorectal & anorectal",
   "trap": "- Know the **early-vs-late split** and which is an emergency\n- **EARLY** complications:\n  - **Ischaemia/necrosis** (dusky/black stoma — assess depth with a tube/scope)\n  - Necrosis **below fascia** = return to theatre\n  - **Retraction**, mucocutaneous separation\n  - **High output**\n- **LATE** complications:\n  - **Parastomal hernia** (most common late complication)\n  - Prolapse, stenosis, skin excoriation\n- The metabolic gotcha: a **high-output stoma** (especially a high/proximal ileostomy, commonly defined as output **>1500–2000 mL/day**) causes:\n  - **Dehydration**, hypokalaemia, hypomagnesaemia, and **acute kidney injury**\n  - Manage with **oral rehydration solution**, loperamide, restrict hypotonic fluids, replace Mg/K\n- An end ileostomy should **SPOUT** (protruding) to protect skin; a colostomy is flush",
   "whatFirst": "- Dusky stoma → **assess viability depth**\n  - Above fascia = observe\n  - **Below fascia** = theatre\n- High-output ileostomy → **correct fluid/electrolytes** (K, Mg)\n  - ORS, loperamide, reduce hypotonic intake\n  - Find/treat the **cause** (sepsis, obstruction, drugs)",
   "discriminator": "- Early necrosis/retraction = **surgical concern**\n- Late parastomal hernia/prolapse = often **elective**\n- **High-output** = the proximal small-bowel (ileostomy) problem\n  - Carries **electrolyte/AKI risk**; not usually a colostomy problem",
   "redFlags": "- Stoma necrosis **extending below the fascia** → urgent surgical escalation\n- **Obstructed/incarcerated** parastomal hernia → urgent escalation\n- **Ischaemic prolapse** → urgent escalation\n- Output causing **AKI/severe hypokalaemia** → urgent medical escalation",
   "mcqTrap": "- 'Reassure and give **IV hypotonic fluids**' for a high-output ileostomy = **WRONG**\n  - Hypotonic fluids **worsen** sodium/water losses\n  - Correct answer: **ORS + antimotility + electrolyte (Mg/K) replacement** + restrict hypotonic oral fluids",
   "source": "CSSANZ / Australian stoma care guidance; standard colorectal surgical teaching",
   "viva": "- Examiner: 'POD2 ileostomy is dusky — what do you do?'\n  - **Assess viability depth** at bedside; escalate if below fascia\n- Then: 'Day 5, output 2.5 L — why is the K low and how do you manage?'\n  - Show **electrolyte/AKI reasoning** + ORS/loperamide\n- **ISBAR** the deteriorating stoma to the registrar",
   "mnemonic": "Early = 'Ischaemia, Retraction, Separation'; Late = 'Hernia, Prolapse, Stenosis'. 'Ileostomy SPOUTS, colostomy is FLUSH; high output -> ORS not water.'",
   "tags": [
    "stoma",
    "ileostomy",
    "high-output",
    "parastomal hernia",
    "complications"
   ],
   "verified": true,
   "cutoffs": [
    "High-output stoma commonly **>1500–2000 mL/day** (definitions vary)",
    "Replace **K and Mg**; restrict hypotonic fluids; use ORS"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Timing</th><th>Complication</th><th>Action</th></tr><tr><td>Early</td><td>Ischaemia / necrosis</td><td>Assess depth; below fascia -> theatre</td></tr><tr><td>Early</td><td>Retraction / mucocutaneous separation</td><td>Wound care; revise if severe</td></tr><tr><td>Early</td><td>High output (ileostomy)</td><td>ORS, loperamide, replace Mg/K, restrict hypotonic fluids</td></tr><tr><td>Late</td><td>Parastomal hernia (commonest)</td><td>Support/elective repair; urgent if obstructed</td></tr><tr><td>Late</td><td>Prolapse / stenosis</td><td>Conservative vs surgical revision</td></tr></table>",
   "title": "Stoma complications",
   "subtitle": "ischaemia, retraction, prolapse, parastomal hernia & the high-output gotcha",
   "id": "surg-acute-abdomen-25"
  },
  {
   "topic": "Femoral & Richter's hernia traps — the ones that strangulate silently",
   "subarea": "GI bleeding & hernia (surgical)",
   "whatFirst": "- Groin lump **below and lateral** to the pubic tubercle = **FEMORAL**\n  - Inguinal = above and medial\n- Femoral hernias have a **high strangulation risk**\n  - **Almost always repair**, even if asymptomatic\n  - **Urgently** if symptomatic",
   "trap": "- **Richter's hernia**: only part of the bowel circumference (antimesenteric wall) is trapped\n- It can **strangulate and necrose WITHOUT causing bowel obstruction**\n  - Viable lumen remains; NO vomiting/distension\n  - Progresses to **perforation** — easily missed\n- **Femoral hernias** are the classic site for Richter's",
   "mcqTrap": "- 'Femoral hernia is above and medial to the pubic tubercle' — **WRONG**: that's inguinal\n  - **Femoral = below and lateral** to the pubic tubercle\n- 'Absence of obstruction excludes strangulation' — **WRONG**\n  - **Richter's strangulates without obstruction**",
   "discriminator": "- **Femoral**: more common in women, older, thin\n  - **Bounded by rigid structures**: inguinal ligament, lacunar ligament, pectineal ligament, femoral vein\n  - **Highest strangulation rate** of all hernias (~15–20%)\n- **Inguinal**: more common overall, men\n  - **Indirect**: lateral to inferior epigastric vessels, through deep ring\n  - **Direct**: medial, through Hesselbach's triangle",
   "redFlags": "- **SBO with no obvious cause** → examine BOTH groins for an occult femoral hernia\n- Strangulated **Richter's** = localised tenderness/sepsis **without classic obstruction**",
   "cutoffs": [
    "Femoral: **below & lateral** to pubic tubercle",
    "Inguinal: **above & medial** to pubic tubercle",
    "Femoral hernia: **repair even if asymptomatic**",
    "Femoral strangulation rate **~15–20%** (highest)",
    "**Richter's** strangulates without obstruction"
   ],
   "viva": "- Examiner: 'How do you clinically distinguish femoral from inguinal?'\n  - **Relation to pubic tubercle**\n- 'Why can a strangulated hernia have no vomiting?'\n  - **Richter's** (partial-circumference)\n- Probe **femoral canal boundaries**",
   "mnemonic": "Femoral = 'low and lateral, ladies, lethal' (repair always). Richter's = 'a Rim of bowel, no obstruction, still dies'. Inguinal = 'above & medial' (AM = Above Medial).",
   "source": "RACS/CSSANZ; Australian surgical anatomy teaching; eTG complete (current).",
   "verified": true,
   "tags": [
    "femoral hernia",
    "Richter's hernia",
    "pubic tubercle",
    "strangulation",
    "anatomy"
   ],
   "title": "Femoral & Richter's hernia traps",
   "subtitle": "the ones that strangulate silently",
   "id": "surg-acute-abdomen-26",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Large_femoral_hernia_Wellcome_L0061768.jpg/960px-Large_femoral_hernia_Wellcome_L0061768.jpg",
     "caption": "Femoral hernia — medial upper thigh bulge below inguinal ligament",
     "alt": "Femoral hernia presenting as a small bulge in the upper medial thigh below and lateral to the pubic tubercle, below the inguinal ligament",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Richter-Hernie_82W_-_CT_paraaxial_KM_pv_-_001.jpg/960px-Richter-Hernie_82W_-_CT_paraaxial_KM_pv_-_001.jpg",
     "caption": "Richter's hernia — antimesenteric bowel wall trapped (diagram/anatomy)",
     "alt": "Anatomical diagram showing only the antimesenteric border of the bowel wall trapped in a hernia sac — can strangulate without bowel obstruction",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Forrest classification — who gets endoscopic therapy + rebleed risk (and the adherent-clot trap)",
   "subarea": "GI bleeding & hernia (surgical)",
   "whatFirst": "- At endoscopy, **classify the ulcer base (Forrest)** → drives therapy AND PPI decisions\n- **HIGH-RISK stigmata** (Ia spurting, Ib oozing, IIa visible vessel) get **dual endoscopic therapy**",
   "trap": "- **Adherent clot (Forrest IIb)**: irrigate/remove the clot to reveal the underlying lesion\n  - Then **treat if high-risk stigmata** found; do NOT leave a clot un-investigated\n- **Clean base (III)** and **flat pigmented spot (IIc)** = LOW risk\n  - No endoscopic therapy needed\n  - Can usually **feed early** and step down to oral PPI",
   "mcqTrap": "- 'Inject **adrenaline alone**' for a high-risk ulcer — **WRONG**\n  - Adrenaline monotherapy is **inadequate**\n  - Must combine with a **second modality** (thermal coagulation OR clip OR sclerosant)\n  - Adrenaline is for **initial control only**",
   "discriminator": "- Rebleed risk by Forrest (untreated):\n  - **Ia/Ib** active: ~spurting up to **~55%**\n  - **IIa** visible vessel: **~43–50%**\n  - **IIb** clot: **~22–33%**\n  - **IIc** spot: **~10%**\n  - **III** clean base: **<5%**\n- High-risk (Ia–IIa, treated IIb) → **72h IV PPI infusion** + admit\n- Low-risk (IIc/III) → **oral PPI**, early discharge",
   "cutoffs": [
    "Forrest **Ia/Ib/IIa** = high risk → dual endoscopic therapy + **IV PPI infusion**",
    "Forrest **IIb** = remove clot, treat if needed",
    "Forrest **IIc/III** = low risk → oral PPI, early feed/discharge",
    "Clean base rebleed **<5%**; visible vessel **~43–50%**"
   ],
   "viva": "- Examiner shows image of a visible vessel: 'Forrest grade? Treatment? Rebleed risk?'\n  - **IIa**, dual therapy (adrenaline + thermal/clip)\n  - **High rebleed risk**\n  - **72h IV PPI**",
   "mnemonic": "Forrest I = It's bleeding now (a spurt, b ooze); II = Stigmata (a Vessel, b Clot, c Spot); III = clean (free). High risk = Vessel-or-worse.",
   "source": "ESGE NVUGIH 2021 (dual therapy for high-risk stigmata; remove clot in IIb); ACG NVUGIB 2021; Forrest 1974 classification.",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Forrest</th><th>Appearance</th><th>Rebleed risk</th><th>Action</th></tr></thead><tbody><tr><td>Ia</td><td>Spurting</td><td>High (~55%)</td><td>Dual therapy + IV PPI</td></tr><tr><td>Ib</td><td>Oozing</td><td>High</td><td>Dual therapy + IV PPI</td></tr><tr><td>IIa</td><td>Visible vessel</td><td>~43–50%</td><td>Dual therapy + IV PPI</td></tr><tr><td>IIb</td><td>Adherent clot</td><td>~22–33%</td><td>Remove clot, treat if high-risk</td></tr><tr><td>IIc</td><td>Flat pigmented spot</td><td>~10%</td><td>Oral PPI, no Rx</td></tr><tr><td>III</td><td>Clean base</td><td>&lt;5%</td><td>Oral PPI, early discharge</td></tr></tbody></table>",
   "tags": [
    "Forrest classification",
    "peptic ulcer",
    "endoscopic therapy",
    "rebleeding risk"
   ],
   "title": "Forrest classification",
   "subtitle": "who gets endoscopic therapy + rebleed risk (and the adherent-clot trap)",
   "id": "surg-acute-abdomen-27",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Deep_gastric_ulcer.png",
     "caption": "Forrest Ia — actively spurting arterial bleed (endoscopy)",
     "alt": "Endoscopic view of a peptic ulcer with active spurting arterial haemorrhage (Forrest Ia) — highest rebleed risk, requires immediate endoscopic therapy",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Glasgow-Blatchford vs Rockall — which score, when, and the discharge cutoff",
   "subarea": "GI bleeding & hernia (surgical)",
   "whatFirst": "- Use the **Glasgow-Blatchford Score (GBS)** at presentation/pre-endoscopy\n  - Decides who is **safe for outpatient management**\n  - Uses urea, Hb, SBP, HR, melaena, syncope, hepatic/cardiac disease\n  - **No endoscopy needed** to calculate",
   "trap": "- **GBS = 0** (some accept ≤1) identifies very-low-risk patients safe for **outpatient management** without inpatient endoscopy\n- **Rockall is the trap**: the full Rockall needs **endoscopic findings** → CANNOT be used for pre-endoscopy triage\n  - Pre-endoscopy triage = **GBS**\n  - Post-endoscopy prognosis/rebleed/mortality = **full Rockall**",
   "mcqTrap": "- 'Use **Rockall score** to decide on safe discharge before endoscopy' — **WRONG**\n  - Full Rockall **requires endoscopic data**\n  - Pre-endoscopy clinical Rockall exists but **GBS outperforms** it for predicting need for intervention",
   "discriminator": "- **GBS** predicts **need for intervention** (transfusion/endoscopic therapy/surgery)\n- **Rockall** predicts **rebleeding and mortality** (needs scope to complete)\n- GBS counts a **raised urea** (urea up disproportionate to creatinine = true upper GI source — digested blood protein load)\n  - **GBS 0** ≈ 0.5% intervention/death risk\n  - **GBS ≤1** ≈ 3.4%",
   "cutoffs": [
    "**GBS 0** (or ≤1): very low risk → consider **outpatient**",
    "**GBS ≥7**: higher likelihood needing endoscopic intervention",
    "**Full Rockall ≥3**: higher risk; needs endoscopy data"
   ],
   "viva": "- Examiner: 'Well 30yo, single small haematemesis, normal obs, normal bloods — admit or discharge?'\n  - Calculate **GBS**; if 0 → safe for **early outpatient endoscopy**\n  - Demonstrates you don't reflexively admit everyone",
   "mnemonic": "Blatchford = Before the scope (Bedside). Rockall = Results of the scope (needs Report).",
   "source": "GESA-aligned Australian ED practice; ACG NVUGIB 2021 (GBS 0–1 outpatient); NICE/ESGE pre-endoscopy risk stratification.",
   "verified": true,
   "tags": [
    "Glasgow-Blatchford",
    "Rockall",
    "risk stratification",
    "discharge cutoff"
   ],
   "title": "Glasgow-Blatchford vs Rockall",
   "subtitle": "which score, when, and the discharge cutoff",
   "id": "surg-acute-abdomen-28"
  },
  {
   "topic": "Hernia danger spectrum — reducible vs incarcerated vs strangulated (when it becomes an emergency)",
   "subarea": "GI bleeding & hernia (surgical)",
   "whatFirst": "- Examine: is it **reducible**?\n- Tense, tender, irreducible hernia + overlying skin changes + systemic signs = **STRANGULATION**\n  - **Emergency theatre** — do NOT keep trying to reduce\n  - **NBM**, IV fluids, analgesia, bloods (lactate), surgical referral",
   "trap": "- **Strangulation** (ischaemic bowel) is the surgical emergency — can occur **WITHOUT obstruction** (Richter's)\n- Signs: **irreducible + tender** + erythema/skin discoloration + systemic upset\n  - Tachycardia, fever, raised lactate/WCC ± peritonism\n- **Incarcerated** = irreducible but not yet ischaemic (still urgent referral — risk of progressing)",
   "mcqTrap": "- 'Vigorously attempt manual reduction of a tender, erythematous, irreducible hernia' — **WRONG**\n  - Risk of **reduction en masse** (reducing dead bowel into abdomen)\n  - → Missed perforation/peritonitis\n  - **Gentle reduction only** if NO signs of strangulation",
   "discriminator": "- **Reducible** (observe/elective repair)\n- → **Incarcerated** (irreducible, not ischaemic, urgent)\n- → **Obstructed** (incarcerated + obstruction: colicky pain, vomiting, distension)\n- → **Strangulated** (ischaemic: constant pain, tenderness, skin change, systemic = **EMERGENCY**)\n- **Femoral hernia** = far higher strangulation risk (tight, rigid neck)\n  - **Repair even if asymptomatic**",
   "redFlags": "- Tender irreducible hernia + **skin erythema** + tachycardia/fever + **raised lactate** = strangulated bowel → straight to **theatre**\n- **Bowel obstruction** in a patient with a known hernia = the hernia until proven otherwise",
   "cutoffs": [
    "**Strangulation** = surgical emergency (within hours)",
    "**Incarcerated/obstructed** = urgent referral",
    "Femoral hernia: **repair even if asymptomatic** (high strangulation risk)",
    "**No reduction** if any strangulation sign"
   ],
   "viva": "- Examiner: 'Groin lump, irreducible, tender, patient vomiting — what now, and what will you NOT do?'\n  - **Resuscitate + NBM + urgent surgical referral/theatre**\n  - Will **NOT force reduction**\n- Probe: how do you tell **incarcerated from strangulated**?",
   "mnemonic": "Strangulation = the 4 T's gone wrong: Tense, Tender, Toxic (systemic), Tissue-colour change. Femoral = Fatal Friend (repair always).",
   "source": "RACS/CSSANZ surgical principles; eTG complete (current); Australian general surgery practice.",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Stage</th><th>Reducible?</th><th>Ischaemia?</th><th>Urgency</th></tr></thead><tbody><tr><td>Reducible</td><td>Yes</td><td>No</td><td>Elective repair</td></tr><tr><td>Incarcerated</td><td>No</td><td>No (yet)</td><td>Urgent referral</td></tr><tr><td>Obstructed</td><td>No</td><td>No (bowel blocked)</td><td>Urgent surgery</td></tr><tr><td>Strangulated</td><td>No</td><td>YES (ischaemic)</td><td>EMERGENCY theatre</td></tr></tbody></table>",
   "tags": [
    "hernia",
    "strangulation",
    "incarceration",
    "surgical emergency",
    "femoral hernia"
   ],
   "title": "Hernia danger spectrum",
   "subtitle": "reducible vs incarcerated vs strangulated (when it becomes an emergency)",
   "id": "surg-acute-abdomen-29"
  },
  {
   "topic": "High-dose IV PPI infusion — only after the scope, dose & duration",
   "subarea": "GI bleeding & hernia (surgical)",
   "whatFirst": "- **Pre-endoscopy IV PPI** is acceptable (downstages high-risk stigmata at scope)\n  - Must **NOT delay endoscopy**\n- AFTER successful endoscopic haemostasis of a **high-risk ulcer**: **high-dose IV PPI**",
   "trap": "- Classic regimen: **80 mg IV bolus then 8 mg/hr infusion for 72 hours**\n  - 72 hours = period of highest rebleed risk\n  - Give to **high-risk ulcers** (Forrest Ia–IIa, and adherent clot IIb not treated endoscopically)\n  - Given **AFTER** endoscopic therapy\n- **Low-risk lesions (IIc/III)** do NOT need the infusion\n  - **Oral PPI suffices**",
   "mcqTrap": "- 'IV PPI infusion replaces the need for **endoscopy**' — **WRONG**\n  - PPI does **not stop active bleeding** from a vessel\n  - **Endoscopic haemostasis** is the definitive control\n  - PPI is **adjunctive** (raises gastric pH to stabilise clot)",
   "discriminator": "- Intermittent high-dose PPI (IV or oral, twice-daily) is an **ESGE-accepted alternative** to continuous infusion\n  - But exam-default for a high-risk treated ulcer = **80mg bolus + 8mg/hr x72h**\n- **ALWAYS test for H. pylori** (and treat) + **stop NSAIDs**\n  - This is what prevents **long-term recurrence**",
   "cutoffs": [
    "IV PPI: **80 mg bolus + 8 mg/hr infusion x 72h** (high-risk, post-endoscopy)",
    "Then **oral PPI**",
    "**72h** = highest rebleed window",
    "**H. pylori eradication** reduces recurrence"
   ],
   "viva": "- Examiner: 'Ulcer with visible vessel, treated endoscopically — what drug, dose, how long, and what one test must you not forget?'\n  - **IV PPI 80 mg bolus + 8 mg/hr x 72h**\n  - Plus **H. pylori testing** + stop NSAIDs",
   "mnemonic": "80 then 8 for 72 — 'eighty, eight, seventy-two'.",
   "source": "ESGE NVUGIH 2021 (80mg + 8mg/hr x72h; intermittent high-dose acceptable alternative); ACG NVUGIB 2021; eTG complete (current, peptic ulcer bleeding).",
   "verified": true,
   "tags": [
    "PPI infusion",
    "peptic ulcer bleed",
    "H. pylori",
    "dose"
   ],
   "title": "High-dose IV PPI infusion",
   "subtitle": "only after the scope, dose & duration",
   "id": "surg-acute-abdomen-30"
  },
  {
   "topic": "Meckel's diverticulum — painless GI bleed, rule of 2s, and the right scan",
   "subarea": "GI bleeding & hernia (surgical)",
   "whatFirst": "- Child/young adult with **painless, brisk lower GI bleeding** + unremarkable colonoscopy/OGD → think **Meckel's**\n- Investigation of choice in a stable bleeder = **99mTc-pertechnetate scan** ('Meckel scan')\n  - Detects **ectopic gastric mucosa**",
   "trap": "- Bleeding is from **ectopic gastric mucosa** secreting acid → ulcerates adjacent ileal mucosa → **painless bleed**\n- **Meckel scan** only lights up if **gastric (acid-secreting) mucosa** is present\n  - A **negative scan does NOT exclude** a Meckel's lacking gastric mucosa\n- **Ranitidine/H2-blocker** (or pentagastrin) can **enhance uptake**",
   "mcqTrap": "- '**Colonoscopy** will diagnose it' — usually **NOT**\n  - Located in distal ileum (~60cm/2ft proximal to ileocaecal valve), **out of colonoscope reach**\n  - Classic answer = **technetium-99m pertechnetate scan**, not colonoscopy/CT",
   "discriminator": "- Meckel's = **commonest congenital GI anomaly**\n  - A **true diverticulum** (all layers)\n  - On the **antimesenteric border** (vs acquired diverticula)\n- Presentations:\n  - **Painless bleed** (kids, gastric mucosa)\n  - **Obstruction** (intussusception lead-point/volvulus)\n  - **Diverticulitis** mimicking appendicitis\n- **Rule of 2s**\n- Treatment = **surgical resection** (diverticulectomy or small-bowel resection)",
   "cutoffs": [
    "Rule of 2s: **~2% of population**, 2 feet (≈60cm) from ileocaecal valve, ~2 inches long, **2:1 male**, often presents <2 years, 2 mucosa types",
    "**99mTc-pertechnetate scan** true-positive ~**84%** (up to ~87% with H2-blocker enhancement)",
    "Lifetime symptomatic in **a minority**"
   ],
   "viva": "- Examiner: '4yo, painless large-volume PR bleed, normal scopes — diagnosis and next investigation?'\n  - **Meckel's**; **99mTc-pertechnetate scan**\n- Probe: why painless?\n  - **Ectopic gastric mucosa acid ulceration**\n- Why not colonoscopy?\n  - **Distal ileum, out of reach**",
   "mnemonic": "Rule of 2s: 2%, 2 feet, 2 inches, 2:1 male, 2 years, 2 tissue types. 'Meckel = Mucosa (gastric) Makes it bleed, Marked by Technetium.'",
   "source": "RACS/Australian paediatric surgery; StatPearls Meckel Scan (current). 99mTc scan true-positive ~84% (≈87% with H2-blocker).",
   "verified": true,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">2% population</span><span class=\"gv-pill\">2 ft from IC valve</span><span class=\"gv-pill\">2 inches long</span><span class=\"gv-pill\">2:1 male</span><span class=\"gv-pill\">&lt;2 years</span><span class=\"gv-pill\">2 mucosa types</span><span class=\"gv-pill\">99mTc scan</span></div>",
   "tags": [
    "Meckel's diverticulum",
    "painless GI bleed",
    "rule of 2s",
    "technetium scan",
    "paediatric"
   ],
   "title": "Meckel's diverticulum",
   "subtitle": "painless GI bleed, rule of 2s, and the right scan",
   "id": "surg-acute-abdomen-31",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Meckel%27s_Diverticulum_by_Technetium-99m_Pertechnetate_Scan.jpg",
     "caption": "Meckel's scan (Tc-99m pertechnetate) — ectopic gastric mucosa uptake",
     "alt": "Nuclear medicine Meckel's scan showing focal Tc-99m pertechnetate uptake in the right lower quadrant corresponding to ectopic gastric mucosa in a Meckel's diverticulum",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Rebleeding after endoscopy — the escalation ladder (scope → embolize → operate)",
   "subarea": "GI bleeding & hernia (surgical)",
   "whatFirst": "- Clinical rebleed (fresh haematemesis/melaena, drop in Hb, haemodynamic instability) → **repeat endoscopy with re-treatment FIRST**\n  - A **second endoscopic attempt succeeds in the majority**\n  - Preferred over straight-to-surgery",
   "trap": "- **Routine 'second-look' endoscopy** (scheduled re-scope in everyone) is **NOT recommended**\n  - Only re-scope for **clinical rebleeding**\n- After a **second failed endoscopic attempt** → **TAE/angioembolization OR surgery**\n- **TAE increasingly preferred** over surgery\n  - No GA, lower morbidity, especially in comorbid/elderly",
   "mcqTrap": "- 'Proceed directly to **laparotomy** after first rebleed' — **WRONG**\n  - Default = **repeat endoscopy first**\n  - Surgery/IR only after **endoscopy fails** (or exsanguinating bleed)",
   "discriminator": "- **TAE vs surgery**:\n  - **TAE preferred** if available (no GA, comorbid patients, similar haemostasis, trend to lower 30-day mortality)\n  - **Surgery** (oversew vessel ± ulcer excision; duodenal ulcer = **ligate gastroduodenal artery**) reserved for failed TAE, perforation, or massive uncontrollable bleed\n- Predictors of **rebleed**:\n  - **High-risk Forrest**, large ulcer (>2cm)\n  - **Posterior duodenal/lesser-curve gastric** (big arteries)\n  - Shock at presentation",
   "redFlags": "- **Exsanguinating bleed** not controllable at endoscopy\n- Transfusing **>6 units** rapidly\n- **Recurrent rebleed** despite 2 endoscopic attempts\n  - → IR/surgery NOW; involve consultant + **activate MTP**",
   "cutoffs": [
    "Rebleed: **repeat endoscopy first**",
    "After **2nd endoscopic failure** → TAE or surgery",
    "**No routine second-look** endoscopy",
    "Ulcer **>2cm**, posterior DU, lesser curve = high rebleed/surgical risk"
   ],
   "viva": "- Examiner: 'Treated ulcer, rebleeding 12h later, HR 110 — next step?'\n  - **Resuscitate + repeat endoscopy**\n- 'Fails again?' → **TAE or surgery**\n  - They want **the ladder**, not a jump to laparotomy",
   "mnemonic": "Rebleed ladder: Scope → Scope again → Squirt (embolize) → Surgery.",
   "source": "ESGE NVUGIH 2021 (no routine second-look; TAE before surgery after failed re-endoscopy); ACG NVUGIB 2021.",
   "verified": true,
   "tags": [
    "rebleeding",
    "second-look endoscopy",
    "TAE embolization",
    "surgery indications",
    "escalation"
   ],
   "title": "Rebleeding after endoscopy",
   "subtitle": "the escalation ladder (scope → embolize → operate)",
   "id": "surg-acute-abdomen-32"
  },
  {
   "topic": "Upper GI bleed — resuscitate-then-scope sequence + transfusion threshold (the order MUST be right)",
   "subarea": "GI bleeding & hernia (surgical)",
   "whatFirst": "- **ABC + two large-bore IV cannulae (14–16G)** + fluids/blood FIRST\n- Group & hold/crossmatch\n- Risk-stratify (**Glasgow-Blatchford**)\n- PPI\n- **Endoscopy within 24h**\n- Resuscitate to enable safe endoscopy — **do NOT scope a shocked, unresuscitated patient**",
   "trap": "- **Restrictive transfusion**: transfuse RBC at **Hb <70 g/L** (target 70–90), NOT <80–100\n- **Over-transfusing is harmful**\n  - In variceal bleeding: raises portal pressure → **increases rebleeding/mortality**\n- Exceptions:\n  - Active brisk haemorrhage with **haemodynamic instability** (transfuse regardless of Hb)\n  - Significant **cardiovascular disease** (threshold ~**80 g/L**)",
   "mcqTrap": "- 'Transfuse to keep **Hb >100 g/L**' — classic distractor\n  - **Liberal transfusion increased mortality** (Villanueva NEJM 2013: restrictive 6-week mortality **5%** vs liberal **9%**)\n  - Australian/ANZSBT practice = **restrictive (Hb <70)**",
   "discriminator": "- Endoscopy timing:\n  - Most **NVUGIB**: within **24h** of presentation\n  - Suspected **variceal or ongoing brisk bleed**: urgent, within **~12h** once resuscitated\n- Do **NOT delay resuscitation** to scope\n- Do **NOT scope an unstable** unresuscitated patient",
   "redFlags": "- Ongoing haematemesis, **HR >100**, **SBP <100**/postural drop\n- Lactate up, requiring ongoing transfusion = **unstable**\n  - Call for help, **activate massive transfusion protocol**\n  - Urgent endoscopy + IR/surgery on standby",
   "cutoffs": [
    "RBC transfusion threshold: **Hb <70 g/L** (target 70–90)",
    "CVD threshold: **Hb <80 g/L**",
    "Endoscopy: within **24h** (NVUGIB); **~12h** if variceal/unstable",
    "**2x large-bore IV: 14–16G**"
   ],
   "viva": "- Examiner: 'A 60yo vomits 500mL fresh blood, HR 120, SBP 85 — what first?'\n  - **Resuscitate** (IV access, fluids/blood, MTP if needed) — NOT 'urgent endoscopy'\n  - **ISBAR** to GI/surgical reg early",
   "mnemonic": "Resuscitate → Risk-stratify → PPI → Pipe (endoscopy). 'Seven-Oh' = transfuse below 70.",
   "source": "ANZSBT/Lifeblood Patient Blood Management (restrictive Hb <70); GESA-aligned Australian practice; eTG complete (current); Villanueva NEJM 2013.",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Parameter</th><th>Australian/restrictive threshold</th></tr></thead><tbody><tr><td>RBC transfusion (no CVD)</td><td>Hb &lt;70 g/L (target 70–90)</td></tr><tr><td>RBC transfusion (significant CVD)</td><td>Hb &lt;80 g/L</td></tr><tr><td>Active brisk bleed + shock</td><td>Transfuse regardless of Hb; activate MTP</td></tr><tr><td>Endoscopy (non-variceal)</td><td>Within 24h</td></tr><tr><td>Endoscopy (variceal/unstable)</td><td>~12h, once resuscitated</td></tr><tr><td>Platelets</td><td>If &lt;50 with active bleed</td></tr></tbody></table>",
   "tags": [
    "upper GI bleed",
    "transfusion threshold",
    "resuscitation",
    "endoscopy timing",
    "high-yield"
   ],
   "title": "Upper GI bleed",
   "subtitle": "resuscitate-then-scope sequence + transfusion threshold (the order MUST be right)",
   "id": "surg-acute-abdomen-33"
  },
  {
   "topic": "Upper vs lower GI bleed localisation — melaena vs haematochezia + the urea clue",
   "subarea": "GI bleeding & hernia (surgical)",
   "whatFirst": "- **Characterise the bleed**:\n  - Haematemesis/coffee-ground + melaena → **UPPER** (proximal to ligament of Treitz)\n  - Bright red PR (haematochezia) → usually **LOWER**\n  - BUT a **brisk upper GI bleed** can present as haematochezia if transit is fast\n    - In an unstable 'lower' bleed, **do OGD first** to exclude a brisk upper source",
   "trap": "- **Raised urea with normal creatinine** in a GI bleeder → points to an **UPPER source**\n  - Digested blood = protein meal absorbed in small bowel + prerenal\n- **Melaena** needs only **~50mL** of upper GI blood\n  - Means the source is **upper/proximal** until proven otherwise",
   "mcqTrap": "- 'Massive bright-red rectal bleeding = always lower GI, go straight to **colonoscopy**' — **WRONG**\n  - In a haemodynamically **unstable** 'lower' bleed, **exclude brisk upper source with OGD first**\n  - NG aspirate/urea help localise\n  - **Unprepped urgent colonoscopy** in active bleeding gives poor views",
   "discriminator": "- **Stable lower GI bleed** → CT angiography (if active bleed) and/or colonoscopy after prep\n- **Brisk/unstable** → CT angiogram then mesenteric angiography ± embolization\n- **Most lower GI bleeds** (diverticular, angiodysplasia) **settle spontaneously**\n- **Melaena** = upper/small bowel\n- **Fresh blood PR** = colorectal/anal (or massive upper)",
   "redFlags": "- **Unstable + ongoing bleeding** → resuscitate, CT angiogram to localise\n  - **IR embolization**; surgery (segmental/subtotal colectomy) only if localised + uncontrolled or unlocalised exsanguinating",
   "cutoffs": [
    "Upper GI = **proximal to ligament of Treitz**",
    "Melaena needs **~50mL** blood",
    "**Raised urea:creatinine ratio** → upper source",
    "**Unstable haematochezia → OGD first** to exclude brisk upper bleed",
    "CT angiography detects bleeding **≥0.3–0.5 mL/min**"
   ],
   "viva": "- Examiner: 'Massive PR bleed, hypotensive — first scope?'\n  - **OGD** (exclude brisk upper bleed) before colonoscopy\n- Probe the **urea clue** and **ligament of Treitz** definition",
   "mnemonic": "Upper = 'Urea Up, melaena, above Treitz'. Brisk Upper can masquerade as a Lower bleed.",
   "source": "ACG lower GI bleed guideline (AAFP 2024 summary); Australian ED/surgical practice; eTG complete (current).",
   "verified": true,
   "tags": [
    "melaena",
    "haematochezia",
    "localisation",
    "urea",
    "ligament of Treitz",
    "CT angiography"
   ],
   "title": "Upper vs lower GI bleed localisation",
   "subtitle": "melaena vs haematochezia + the urea clue",
   "id": "surg-acute-abdomen-34",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Bloody_stool-1.jpg/960px-Bloody_stool-1.jpg",
     "caption": "Melaena — black tarry stool indicating upper GI bleed",
     "alt": "Melaena — black, tarry, offensive-smelling stool consistent with digested blood from an upper GI haemorrhage source",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/H%C3%A4matochezie_Dezember_2021.jpg/960px-H%C3%A4matochezie_Dezember_2021.jpg",
     "caption": "Haematochezia — bright red blood per rectum",
     "alt": "Haematochezia — passage of bright red or maroon blood per rectum, usually indicating a lower GI source (or massive upper GI bleed with rapid transit)",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Variceal bleed — the bundle (drug + scope + antibiotics) and what differs from non-variceal",
   "subarea": "GI bleeding & hernia (surgical)",
   "whatFirst": "- Suspect varices (known cirrhosis/portal HTN, stigmata of chronic liver disease)?\n  - Start **vasoactive drug** (octreotide or terlipressin) + **IV antibiotics** immediately, **before endoscopy**\n- Then **urgent endoscopy within ~12h** for:\n  - **Band ligation** (oesophageal varices)\n  - **Glue/cyanoacrylate** (gastric varices)",
   "trap": "- **Antibiotics** (e.g. ceftriaxone IV) are **mandatory** in any cirrhotic with GI bleed\n  - Reduce infection, rebleeding, and **improve survival** (Cochrane RR **0.79** for mortality)\n  - **Most-forgotten step**\n- Give the **vasoactive drug EARLY** — don't wait for the scope to confirm varices",
   "mcqTrap": "- 'Transfuse to **Hb >90–100** to optimise the cirrhotic' — **WRONG and dangerous**\n  - Over-transfusion raises **portal pressure** → rebleeding\n  - **Restrictive (Hb <70)** is even more important in varices",
   "discriminator": "- **Variceal**: vasoactive drug + antibiotics + band ligation\n- **Non-variceal** (ulcer): PPI + endoscopic dual therapy\n- **Band ligation > sclerotherapy** for oesophageal varices\n- Refractory → **balloon tamponade** (Sengstaken-Blakemore, max ~**24h**, bridge only)\n  - Then → **TIPS** (salvage)",
   "redFlags": "- Failed endoscopic control / massive ongoing bleed → **balloon tamponade as bridge**\n  - **Intubate/airway-protect first**\n  - Urgent IR for **TIPS**\n- **Recurrent variceal bleed despite banding** = TIPS",
   "cutoffs": [
    "**Octreotide**: 50 mcg IV bolus then 50 mcg/hr (or **terlipressin** 2mg IV then 1–2mg q4–6h) x 3–5 days",
    "**Ceftriaxone IV 1g daily x ~7d** (or norfloxacin) — antibiotics mandatory",
    "Transfuse **Hb <70 g/L** (even stricter in varices)",
    "**Band ligation** within ~12h",
    "**Balloon tamponade max ~24h** as bridge"
   ],
   "viva": "- Examiner: 'Cirrhotic, haematemesis — name the **3 things you start before the scope**'\n  - **Vasoactive drug** (octreotide/terlipressin)\n  - **IV antibiotics**\n  - **Resuscitation**\n  - Forgetting antibiotics **loses marks**",
   "mnemonic": "Variceal bundle = 'BAT': Banding (endoscopy), Antibiotics, Terlipressin/octreotide (vasoactive). Plus restrictive transfusion.",
   "source": "Baveno VII 2022; ESGE oesophagogastric varices 2022; GESA-aligned; eTG complete (current, variceal haemorrhage); Cochrane antibiotic prophylaxis (mortality RR 0.79).",
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Resuscitate (restrictive, Hb &lt;70)</div><div class=\"gv-step\">Vasoactive: octreotide/terlipressin</div><div class=\"gv-step\">IV antibiotics (ceftriaxone)</div><div class=\"gv-step\">Endoscopy ~12h: band ligation</div><div class=\"gv-step\">Fail → balloon tamponade (bridge) → TIPS</div></div>",
   "tags": [
    "variceal bleed",
    "octreotide",
    "terlipressin",
    "antibiotics",
    "TIPS",
    "band ligation"
   ],
   "title": "Variceal bleed",
   "subtitle": "the bundle (drug + scope + antibiotics) and what differs from non-variceal",
   "id": "surg-acute-abdomen-35",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Oesophagusvarizen_01.jpg/960px-Oesophagusvarizen_01.jpg",
     "caption": "Oesophageal varices — endoscopic appearance",
     "alt": "Endoscopic view of large tortuous oesophageal varices — blue-purple submucosal columns in the lower oesophagus at risk of catastrophic haemorrhage in portal hypertension",
     "credit": "Wikimedia Commons"
    }
   ]
  }
 ]
}
);
