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
   "discriminator": "By Laplace's law (wall tension ∝ radius × pressure), the widest part of the colon — the CAECUM — has the highest wall tension and is the commonest site of perforation in distal LBO, EVEN when the obstructing lesion is elsewhere (e.g. sigmoid cancer). This happens when the ileocaecal valve is COMPETENT (only ~10-30% of people) = a closed loop (colon can't decompress retrograde into small bowel). An incompetent valve vents into small bowel (vomiting, lower perforation risk).",
   "whatFirst": "In LBO with a distended caecum, assess valve competence and caecal diameter on CT, resuscitate, and escalate to surgery as the caecal diameter approaches the danger zone — do not simply observe a tense closed-loop caecum.",
   "redFlags": "Caecal diameter approaching/over 12 cm, pericaecal free fluid, caecal pneumatosis, focal RIF tenderness = impending/actual caecal perforation -> urgent decompression/surgery.",
   "trap": "Most tempting WRONG answer: thinking the perforation occurs at the site of the obstructing tumour. By Laplace the CAECUM (largest radius) blows first. Second trap: quoting a single magic number — the classic teaching cut-off is ~12 cm for impending perforation, but risk begins around ~9 cm and DURATION/rapidity of distension matters as much as absolute diameter (chronic distension may tolerate >10 cm).",
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
   "viva": "Examiner: 'Sigmoid cancer obstruction — where will it perforate and why?' Answer: the caecum, by Laplace's law, if the ileocaecal valve is competent (closed loop). Then 'at what diameter?' — ~12 cm classically, risk from ~9 cm, but duration matters.",
   "mcqTrap": "'Perforation occurs at the site of the obstructing sigmoid tumour' — wrong; the caecum (largest radius) is the commonest site by Laplace.",
   "verified": true,
   "cutoffs": [
    "Caecum = commonest perforation site (Laplace) in distal LBO + competent valve",
    "~12 cm = classic danger threshold",
    "Risk begins ~9 cm (literature range 9-15 cm)",
    "Duration/rapidity of distension matters as much as diameter"
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
   "discriminator": "Closed loop = bowel obstructed at TWO points (e.g. volvulus, hernia, adhesive band, or LBO with competent ileocaecal valve) -> rapidly rising intraluminal pressure -> ischaemia/perforation. Strangulation = compromised blood supply. CT signs: whirl sign / mesenteric vessel swirl, C- or U-shaped fluid-filled loop, beak sign, bowel wall thickening, reduced/absent wall enhancement, 'target' sign, mesenteric fat stranding, free fluid, pneumatosis. Clinically: pain OUT OF PROPORTION, constant (not colicky) pain, localised tenderness, fever, tachycardia, raised lactate/WCC.",
   "whatFirst": "These are SURGICAL emergencies — resuscitate and go to THEATRE; do NOT trial conservative 'drip and suck'. Closed loop/strangulation/ischaemia/perforation = the four indications to operate in obstruction.",
   "redFlags": "Lactataemia, peritonism, tachycardia + pain out of proportion = ischaemic bowel — escalate immediately, do not wait for a trial of non-op management.",
   "trap": "Most tempting WRONG answer: 'admit for conservative drip-and-suck and reassess in 48 h.' Conservative management is for SIMPLE uncomplicated adhesional SBO only — a closed loop or strangulation needs operative intervention NOW. Choosing 'repeat AXR in 24h' while the patient has rising lactate is the classic exam trap.",
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
   "viva": "Examiner: 'Which obstructed patients must NOT be managed conservatively?' Answer: closed loop, strangulation, ischaemia, perforation, peritonitis — all operate. Discriminator probed: colicky vs constant pain, the role of lactate, and CT whirl sign.",
   "mcqTrap": "'Trial conservative management and repeat imaging at 48h' in a patient with strangulation signs — delay risks dead bowel.",
   "verified": true,
   "cutoffs": [
    "Constant (not colicky) pain + pain out of proportion = ischaemia",
    "Raised lactate / peritonism = operate now",
    "CT whirl sign / non-enhancing wall = strangulation"
   ],
   "title": "Closed-loop / strangulation -> OPERATE (don't drip…",
   "id": "surg-acute-abdomen-2"
  },
  {
   "topic": "Empirical IV antibiotics for perforation / faecal peritonitis (eTG)",
   "subarea": "Perforation & obstruction",
   "discriminator": "This is THERAPY for established intra-abdominal sepsis (perforation, secondary peritonitis), NOT single-dose surgical prophylaxis. Must cover Gram-negatives + anaerobes (gut flora). The classic Australian eTG regimen for moderate-severe intra-abdominal infection: amoxicillin (or ampicillin) + gentamicin + metronidazole IV. Where gentamicin is contraindicated, a substitute such as ceftriaxone + metronidazole (or piperacillin-tazobactam as a single agent) is used per eTG.",
   "whatFirst": "Give antibiotics EARLY (within 1 hour of recognising sepsis), AFTER taking blood cultures but do not delay for them. Source control (surgery/drainage) is the definitive treatment — antibiotics alone do not fix a hole in the gut.",
   "redFlags": "Septic shock -> escalate cover and resuscitate aggressively; check renal function before/around gentamicin dosing; review and rationalise antibiotics with culture results and surgical findings.",
   "trap": "Most tempting WRONG answer: prescribing a single narrow agent (e.g. metronidazole alone, or a cephalosporin with no anaerobic cover). Faecal peritonitis needs BOTH Gram-negative AND anaerobic cover. Also wrong: 'antibiotics instead of surgery' for a frank perforation — antibiotics are an adjunct to source control, not a substitute.",
   "source": "Therapeutic Guidelines (eTG, current) — Antibiotic: gastrointestinal/intra-abdominal infections.",
   "tags": [
    "antibiotics",
    "eTG",
    "peritonitis",
    "perforation",
    "sepsis"
   ],
   "mnemonic": "Gut bugs = Gram-neg + anaerobes -> 'Amp + Gent + Met' covers both arms.",
   "viva": "Examiner: 'What antibiotic and why, and is that enough?' Name an eTG-consistent regimen, state it must cover Gram-negatives AND anaerobes, and explicitly say source control is the priority — antibiotics are adjunctive.",
   "mcqTrap": "Metronidazole monotherapy or a cephalosporin alone for faecal peritonitis — misses one arm of cover.",
   "verified": false,
   "cutoffs": [
    "Cover Gram-negative + anaerobe (dual mechanism)",
    "Antibiotics within 1 hr of sepsis recognition",
    "Take cultures first but do not delay dosing"
   ],
   "title": "Empirical IV antibiotics for perforation / faecal…",
   "id": "surg-acute-abdomen-3"
  },
  {
   "topic": "Pneumoperitoneum (free gas) -> resuscitate + IV antibiotics + theatre",
   "subarea": "Perforation & obstruction",
   "discriminator": "Erect CXR free gas under the diaphragm = perforated viscus until proven otherwise. Erect CXR detects free air in only ~80% of cases (PA film); CT abdo/pelvis is the gold standard and detects tiny gas volumes the CXR misses. So a NORMAL erect CXR does NOT exclude perforation — if clinically suspicious, get a CT. Distinguish true free gas from Chilaiditi sign (colon interposed between liver and diaphragm — haustral markings visible within the lucency) and from basal lung/subdiaphragmatic fat.",
   "whatFirst": "Resuscitate FIRST, image/operate SECOND. Sequence: A-B-C, large-bore IV access, fluid resuscitation, analgesia + antiemetic, NG tube, IDC + hourly urine output, bloods incl venous gas/lactate + group & hold, EARLY broad-spectrum IV antibiotics, then CT to confirm source, then to theatre. Do not delay resuscitation or antibiotics waiting for imaging.",
   "redFlags": "Generalised peritonitis (board-like rigid abdomen), septic shock/rising lactate, free gas + free fluid on CT = source control surgery needed urgently. A 'silent' rigid abdomen on steroids/elderly/diabetic can hide a perforation — high index of suspicion.",
   "trap": "The most tempting WRONG MCQ answer is 'normal erect CXR excludes perforation, discharge / observe.' It does NOT — erect CXR misses ~20% (sensitivity ~80% PA film); proceed to CT if suspicion remains. Second trap: 'rush straight to theatre' without resuscitating/antibiotics first.",
   "source": "Therapeutic Guidelines (eTG, current) — intra-abdominal infections; standard Australian surgical practice. Erect CXR PA sensitivity ~80%, CT gold standard for small-volume pneumoperitoneum (radiology literature, confirmed 2026).",
   "tags": [
    "perforation",
    "pneumoperitoneum",
    "free gas",
    "peritonitis",
    "sepsis"
   ],
   "mnemonic": "Resuscitate -> Antibiotics -> Theatre = 'RAT' (the rat eats the free gas). Free gas + sick patient = source control.",
   "viva": "Examiner probes the SEQUENCE: 'CXR shows free gas — what do you do FIRST?' Answer resuscitation + IV antibiotics + theatre referral, not 'order a CT' in isolation. Be ready to give an ISBAR call to the on-call surgical reg and to discuss consent for laparotomy.",
   "mcqTrap": "'Normal erect CXR rules out a perforated viscus' — false; CT is gold standard and erect CXR misses ~1 in 5.",
   "verified": true,
   "visualHtml": "<div class='gv-flow'><div class='gv-step'>Free gas on erect CXR / CT</div><div class='gv-step'>RESUSCITATE: IVF, NG, IDC, analgesia, lactate</div><div class='gv-step'>EARLY broad-spectrum IV antibiotics</div><div class='gv-step'>CT to localise source</div><div class='gv-step'>THEATRE for source control</div></div>",
   "cutoffs": [
    "Erect CXR sensitivity for free gas ~80% (PA film)",
    "CT = gold standard (detects small-volume free air)",
    "Free gas best seen >2 hrs after sitting upright"
   ],
   "title": "Pneumoperitoneum (free gas) -> resuscitate + IV…",
   "id": "surg-acute-abdomen-4",
   "images": [
    {
     "src": "assets/img/gastrointestinal_axr_pneumoperitoneum_01.jpg",
     "caption": "Pneumoperitoneum — AXR/erect CXR free gas under right hemidiaphragm",
     "alt": "Free intraperitoneal gas visible under the right hemidiaphragm on erect CXR / Rigler's sign on supine AXR — the radiological hallmark of visceral perforation",
     "credit": "Hellerhoff / Wikimedia Commons · CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "SBO vs LBO — how to tell them apart",
   "subarea": "Perforation & obstruction",
   "discriminator": "SBO: central dilated loops, valvulae conniventes (cross the FULL bowel width), early profuse vomiting, diameter cut-off >3 cm. Most common cause = adhesions (prior surgery), then hernia. LBO: peripheral dilated loops, haustra (partial, do NOT cross full width), late vomiting, marked distension, normal limit colon >6 cm / caecum >9 cm. Most common cause = colorectal cancer, then diverticular stricture, then volvulus. Always examine the hernial orifices and do a PR in any bowel obstruction.",
   "whatFirst": "Resuscitate + 'drip and suck' (IV fluids + NG decompression) + analgesia + IDC, then CT abdo/pelvis with contrast to confirm level, cause, and look for closed-loop/strangulation/perforation. In LBO, CT also stages a likely cancer and assesses ileocaecal valve competence.",
   "redFlags": "Localised tenderness, fever, tachycardia, rising lactate, peritonism = strangulation/perforation -> operate. In LBO with a competent ileocaecal valve = closed loop -> high perforation risk, do not just observe.",
   "trap": "Most tempting WRONG answer: 'plain AXR is sufficient to confirm and manage.' AXR can suggest the level but CT is the investigation of choice — it gives the cause (cancer vs adhesion vs volvulus), the transition point, and the complication (closed loop/ischaemia). Also a trap: assuming adhesions in a patient with NO prior surgery — in a virgin abdomen with SBO think hernia or malignancy, and image.",
   "source": "CSSANZ / standard Australian colorectal & general surgical practice; radiology diameter thresholds (3/6/9 cm rule).",
   "tags": [
    "SBO",
    "LBO",
    "bowel obstruction",
    "adhesions",
    "colorectal cancer"
   ],
   "mnemonic": "'3-6-9' rule: small bowel >3 cm, colon >6 cm, caecum >9 cm. valvulae = full width (small bowel); haustra = partial (large bowel). 'aDheSiOns' for SBO, 'CanCer' for LBO.",
   "viva": "Examiner: 'On the AXR, how do you know it is small vs large bowel, and what is the likeliest cause for each?' Then 'what is your first management step?' (drip & suck + CT). Be ready to interpret valvulae vs haustra and quote the 3/6/9 cut-offs.",
   "mcqTrap": "'Plain AXR confirms the diagnosis and level — no further imaging needed' — CT is the investigation of choice for cause and complications.",
   "verified": true,
   "visualHtml": "<table class='gv-table'><tr><th></th><th>SBO</th><th>LBO</th></tr><tr><td>Loops</td><td>Central</td><td>Peripheral</td></tr><tr><td>Folds</td><td>Valvulae conniventes (full width)</td><td>Haustra (partial)</td></tr><tr><td>Diameter limit</td><td>&gt;3 cm</td><td>colon &gt;6 cm / caecum &gt;9 cm</td></tr><tr><td>Vomiting</td><td>Early, profuse</td><td>Late</td></tr><tr><td>Distension</td><td>Less</td><td>Marked</td></tr><tr><td>Commonest cause</td><td>Adhesions, hernia</td><td>Cancer, diverticular, volvulus</td></tr></table>",
   "cutoffs": [
    "Small bowel >3 cm",
    "Colon >6 cm",
    "Caecum >9 cm",
    "CT = investigation of choice for cause + complications"
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
    }
   ]
  },
  {
   "topic": "Sigmoid vs caecal volvulus",
   "subarea": "Perforation & obstruction",
   "discriminator": "SIGMOID volvulus (commoner, elderly/comorbid/constipated/institutionalised, neuropsychiatric meds): 'coffee bean'/'inverted-U' arising from the PELVIS, pointing to the RUQ; managed FIRST endoscopically by flexible sigmoidoscopy + flatus tube decompression. CAECAL volvulus (younger patients): dilated caecum displaced to the LUQ ('embryo'/'comma' / 'coffee bean' pointing the other way), with collapsed distal colon; endoscopic decompression usually FAILS — needs SURGERY (right hemicolectomy, or caecopexy).",
   "whatFirst": "Sigmoid: resuscitate -> flexible sigmoidoscopic decompression + flatus tube (avoids emergency resection in the unfit) -> then elective sigmoid colectomy because recurrence is high. Caecal: resuscitate -> theatre (right hemicolectomy) as primary treatment — endoscopy is not the answer.",
   "redFlags": "Blood/dusky/necrotic mucosa at sigmoidoscopy, peritonism, perforation, or failed endoscopic detorsion = stop scoping and operate. Recurrence after sigmoid detorsion is high — that's why definitive elective surgery is planned.",
   "trap": "Most tempting WRONG answer: 'flexible sigmoidoscopy / endoscopic decompression' for a CAECAL volvulus — it typically fails and the answer is surgery. Reverse trap: rushing a SIGMOID volvulus straight to laparotomy when endoscopic decompression is the correct first step (if no ischaemia/perforation).",
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
   "viva": "Examiner shows a coffee-bean AXR: 'Which volvulus, and how do you treat it?' Sigmoid -> sigmoidoscopic decompression then elective resection (high recurrence); Caecal -> right hemicolectomy. Probe: 'why not just scope the caecal one?' (decompression fails, and viability/right colon mobility need surgery).",
   "mcqTrap": "'Endoscopic decompression' offered for a caecal volvulus — wrong; caecal volvulus is primarily surgical (right hemicolectomy).",
   "verified": true,
   "visualHtml": "<table class='gv-table'><tr><th></th><th>Sigmoid volvulus</th><th>Caecal volvulus</th></tr><tr><td>Frequency</td><td>Commoner</td><td>Less common</td></tr><tr><td>Patient</td><td>Elderly, constipated, institutionalised</td><td>Younger</td></tr><tr><td>X-ray</td><td>Coffee bean from pelvis -> RUQ</td><td>Dilated caecum -> LUQ ('embryo')</td></tr><tr><td>First-line Rx</td><td>Flexible sigmoidoscopy + flatus tube</td><td>Surgery (right hemicolectomy)</td></tr><tr><td>Definitive</td><td>Elective sigmoid colectomy (high recurrence)</td><td>Resection / caecopexy</td></tr></table>",
   "cutoffs": [
    "Sigmoid: endoscopic decompression first, then elective resection",
    "Sigmoid recurrence after detorsion high (~40-70%, ranges reported 30->80%)",
    "Caecal: primary surgery (right hemicolectomy)",
    "Ischaemia/perforation/failed scope -> operate either type"
   ],
   "title": "Sigmoid vs caecal volvulus",
   "id": "surg-acute-abdomen-6",
   "images": [
    {
     "src": "assets/img/gastrointestinal_axr_sigmoid_volvulus_01.jpg",
     "caption": "Sigmoid volvulus — coffee-bean sign on AXR",
     "alt": "Massively dilated inverted-U sigmoid loop (coffee-bean / northern exposure sign) arising from the pelvis, pointing toward the right upper quadrant",
     "credit": "Hellerhoff, Wikimedia Commons, CC BY-SA 3.0"
    }
   ]
  },
  {
   "topic": "Simple adhesive SBO -> 'drip & suck' + Gastrografin challenge",
   "subarea": "Perforation & obstruction",
   "discriminator": "For uncomplicated adhesional SBO (no strangulation/closed loop/peritonitis), a TRIAL of non-operative management is appropriate — succeeds in ~60-80%. Water-soluble contrast (Gastrografin) is both diagnostic and therapeutic: contrast reaching the colon on an abdominal film within ~24 h predicts resolution (pooled sensitivity ~96-97%, specificity ~96-98%) and shortens hospital stay; failure of contrast to reach colon predicts the need for surgery.",
   "whatFirst": "'Drip and suck': IV fluids + electrolyte correction + NG tube decompression + IDC + analgesia + nil by mouth. Then give the Gastrografin challenge and reassess. If no resolution within ~48-72 h, or earlier deterioration -> surgery.",
   "redFlags": "Develops fever, peritonism, rising lactate, or contrast fails to reach colon = stop conservative management and operate. Surgery should NOT be delayed beyond ~48 h once strangulation is suspected — strangulation risk rises with delay.",
   "trap": "Most tempting WRONG answer: 'continue conservative management indefinitely' or 'NBM + IV fluids forever.' There is a clock — maximum non-op trial ~72 h; persistent obstruction or any deterioration mandates surgery. Opposite trap: operating immediately on a simple first-presentation adhesional SBO that would likely settle.",
   "source": "WSES (Bologna) guidelines for adhesive SBO (latest revision); Cochrane/water-soluble contrast meta-analyses; Australian general surgical practice.",
   "tags": [
    "SBO",
    "adhesions",
    "Gastrografin",
    "drip and suck",
    "conservative management"
   ],
   "mnemonic": "'Drip & Suck' = Fluids + NG. Gastrografin to colon in 24 h = will settle; no colon = cut. The 72-hour clock.",
   "viva": "Examiner: 'When is it safe to manage SBO non-operatively and for how long?' Quote ~60-80% success, the Gastrografin challenge (colon by 24 h predicts resolution), and the ~48-72 h ceiling. Mention you would NOT trial conservative management if there is no prior surgery, strangulation, or a closed loop.",
   "mcqTrap": "'Proceed straight to laparotomy' for a stable, uncomplicated first adhesive SBO — should trial drip & suck + contrast first.",
   "verified": true,
   "visualHtml": "<div class='gv-flow'><div class='gv-step'>Uncomplicated adhesive SBO</div><div class='gv-step'>Drip &amp; suck (IVF + NG + IDC + NBM)</div><div class='gv-step'>Gastrografin challenge</div><div class='gv-step'>Contrast in colon by 24 h -> resolving, continue</div><div class='gv-step'>No colon by 24 h OR deteriorating / 48-72 h -> THEATRE</div></div>",
   "cutoffs": [
    "Non-op success ~60-80%",
    "Max conservative trial ~72 h",
    "Contrast to colon by 24 h = will resolve (sens ~96-97% / spec ~96-98%)",
    "Strangulation risk rises if surgery delayed"
   ],
   "title": "Simple adhesive SBO -> 'drip & suck'…",
   "id": "surg-acute-abdomen-7",
   "images": [
    {
     "src": "assets/img/gastrointestinal_axr_small_bowel_obstruction_01.jpg",
     "caption": "Small bowel obstruction — AXR showing dilated central loops (drip-and-suck scenario)",
     "alt": "Dilated central small bowel loops with air-fluid levels indicating SBO amenable to initial conservative (drip and suck) management",
     "credit": "James Heilman MD (Jmh649), Wikimedia Commons, CC BY-SA 3.0 (edges cropped to remove side markers)"
    }
   ]
  },
  {
   "topic": "Acute appendicitis — pregnancy test FIRST, then imaging vs straight to theatre",
   "subarea": "Appendicitis, biliary & pancreatitis (surgical)",
   "whatFirst": "In ANY woman of reproductive age with RIF pain: urine/serum bhCG BEFORE imaging or theatre — both to exclude ectopic (the killer mimic) and because pregnancy changes the imaging pathway (US/MRI, not CT).",
   "trap": "The single most tempting wrong MCQ answer is 'CT abdomen/pelvis' as the first imaging in a young woman or pregnant patient. WRONG: in pregnancy first-line is graded-compression US, then MRI if non-diagnostic (avoid CT radiation). In a classic young male with high clinical probability (Alvarado/AIR high), the gotcha is that imaging is NOT mandatory — proceed to appendicectomy; over-imaging delays theatre. Equivocal/female/elderly = CT (in non-pregnant). Other trap: choosing 'antibiotics alone' as definitive — non-operative management is an option for uncomplicated appendicitis but recurrence ~30-40% at 1yr and it's NOT the default exam answer; appendicectomy remains standard, especially if appendicolith (high failure of antibiotics).",
   "discriminator": "Discriminate from ectopic (bhCG+, adnexal mass/free fluid on US), ovarian torsion (sudden severe pain, whirlpool/absent flow on Doppler — surgical emergency, don't anchor on appendix), mesenteric adenitis/PID (cervical motion tenderness, discharge), and right ureteric colic (loin-to-groin, haematuria). Mittelschmerz = mid-cycle, self-limiting.",
   "redFlags": "Generalised peritonitis / guarding = perforation → resuscitate + urgent theatre, don't wait for imaging. Diffuse sepsis, rising lactate, free gas on imaging. In pregnancy, appendix is displaced upward (RUQ in 3rd trimester) — high index of suspicion; perforation risk to fetus is the concern, so err toward earlier surgery.",
   "cutoffs": [
    "bhCG: do FIRST in all reproductive-age women",
    "Appendix diameter on US/CT >6 mm (non-compressible) = positive",
    "Alvarado: 0-3 low, 4-6 equivocal (image), 7-10 high (probable, → surgery)",
    "Pregnancy imaging order: graded-compression US → MRI; CT avoided",
    "Antibiotic-only Rx: recurrence ~30-40% at 1 yr; avoid if appendicolith present"
   ],
   "mcqTrap": "'Order CT abdomen/pelvis' as first step in a pregnant or young female patient — wrong because bhCG comes first and US/MRI is the pregnancy-safe pathway; CT is reserved for equivocal non-pregnant cases.",
   "mnemonic": "Alvarado = MANTRELS: Migration, Anorexia, Nausea, Tenderness RIF, Rebound, Elevated temp, Leucocytosis, Shift to left. RIF pain in a woman → 'bhCG before the knife and before the scanner.'",
   "viva": "Examiner probe: 'Young woman, RIF pain — what's your FIRST investigation?' Expected: bhCG to exclude ectopic. Then: who needs imaging vs straight to theatre, and why CT is wrong in pregnancy. ISBAR escalation if peritonitic. Consent point for appendicectomy: bleeding, infection, conversion to open, negative appendicectomy rate, stump leak.",
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
   "id": "surg-acute-abdomen-8"
  },
  {
   "topic": "Acute cholangitis — source-control TIMING & urgent biliary decompression",
   "subarea": "Appendicitis, biliary & pancreatitis (surgical)",
   "whatFirst": "Resuscitate aggressively (sepsis: fluids, blood cultures, IV antibiotics within 1 h), then arrange URGENT biliary decompression — ERCP is first-line drainage. Antibiotics alone do NOT treat an obstructed infected duct; the obstruction must be relieved.",
   "trap": "Most tempting wrong answer: 'IV antibiotics and observe' / 'antibiotics will fix it.' WRONG — cholangitis is obstruction + infection; without DRAINAGE it can progress to suppurative cholangitis and death. The exam point is timing by severity: severe (grade III, organ dysfunction) → emergency drainage as soon as resuscitated (essentially ASAP, within 24 h); moderate (grade II) → early drainage as soon as possible (within ~24-48 h); mild (grade I) → ERCP can be timed/elective, with biliary drainage if no response to antibiotics within 24 h.",
   "discriminator": "TG18 diagnosis = (A) systemic inflammation (fever/rigors or labs) + (B) cholestasis (jaundice/abnormal LFTs) + (C) imaging (biliary dilatation/stricture/stone). Grade III = organ dysfunction (cardiovascular/renal/hepatic/haem/CNS/resp). Distinguish from cholecystitis (no obstructive LFTs/duct dilatation) and from Mirizzi (extrinsic CBD compression by impacted cystic-duct stone).",
   "redFlags": "Reynolds' pentad (hypotension + confusion added to Charcot's) = grade III suppurative cholangitis → ICU, emergency decompression. If ERCP unavailable/fails: percutaneous transhepatic biliary drainage (PTBD) or surgical decompression. Lactate rise, vasopressor need = septic shock.",
   "cutoffs": [
    "Severe (TG18 grade III, organ dysfunction): emergency drainage ASAP once resuscitated (≤24 h)",
    "Moderate (grade II): early drainage as soon as possible (~24-48 h)",
    "Mild (grade I): drainage if no response to antibiotics within 24 h / timed",
    "Antibiotics within 1 h (sepsis); eTG: amoxicillin/ampicillin + gentamicin ± metronidazole",
    "Drainage within 24 h reduces length of stay / morbidity"
   ],
   "mcqTrap": "'Treat with IV antibiotics alone and monitor' for cholangitis — wrong because the obstructed infected duct MUST be decompressed (ERCP); antibiotics without drainage are inadequate.",
   "mnemonic": "'Cholangitis = pus under pressure → DRAIN it.' Sicker = sooner: Grade III ASAP, Grade I only if no response in 24 h.",
   "viva": "Examiner probe: 'Septic, jaundiced, hypotensive — what now?' Expected: ABCDE/sepsis resus + ISBAR to GI/surgery for EMERGENCY decompression (grade III), ICU referral, PTBD if ERCP fails. Discriminator probed: why antibiotics alone are insufficient.",
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
   "id": "surg-acute-abdomen-9"
  },
  {
   "topic": "Acute cholecystitis — early cholecystectomy timing & antibiotic choice (source control)",
   "subarea": "Appendicitis, biliary & pancreatitis (surgical)",
   "whatFirst": "Resuscitate (IV fluids, analgesia, antiemetics, NBM), start antibiotics, then book EARLY laparoscopic cholecystectomy — same admission, ideally within 72 h of symptom onset (don't wait 6 weeks for an interval procedure).",
   "trap": "Most tempting wrong answer: 'treat with antibiotics and bring back in 6 weeks for interval cholecystectomy.' Current evidence (and TG18/WSES) favours EARLY/index-admission lap chole within ~72 h (up to 7 days from symptom onset is still acceptable/safe) — delayed surgery means more readmissions, more emergency presentations and higher conversion. Interval cholecystectomy is now the inferior default, not the gold standard.",
   "discriminator": "Distinguish from biliary colic (pain <6 h, no fever, no leucocytosis, Murphy's negative, normal inflammatory markers — outpatient elective chole) and from cholangitis (jaundice + obstructive LFTs → ERCP first). Acalculous cholecystitis: critically ill/ICU/fasting/TPN patient, no stones — consider percutaneous cholecystostomy if unfit for surgery.",
   "redFlags": "Gangrenous/emphysematous cholecystitis (gas in GB wall on imaging, diabetic, septic), perforation, or failure to improve = urgent surgery/cholecystostomy. High-risk/unfit-for-surgery patient → percutaneous cholecystostomy as temporising source control.",
   "cutoffs": [
    "Early lap chole: within 72 h of symptom onset ideal; up to 7 days still safe",
    "Same (index) admission preferred over interval (6-week) surgery",
    "eTG empirical biliary sepsis: amoxicillin (or ampicillin) + gentamicin IV",
    "Add metronidazole if biliary-enteric anastomosis / gangrenous / severe",
    "Percutaneous cholecystostomy if unfit for surgery (e.g., acalculous in ICU)"
   ],
   "mcqTrap": "'Discharge on oral antibiotics and arrange interval cholecystectomy in 6 weeks' — wrong because index-admission early lap chole (within 72 h) is now standard and reduces readmissions/complications.",
   "mnemonic": "'Hot gallbladder, hot knife' — operate early, don't cool off for 6 weeks. Antibiotics = 'Amp + Gent (+ Metro if it's been plumbed to bowel or gangrenous).'",
   "viva": "Examiner probe: 'When would you operate?' Expected: index admission, within 72 h. Consent for lap chole: bleeding, infection, bile duct/vascular injury, bile leak, retained stone, conversion to open, need for intra-op cholangiogram. ISBAR if deteriorating/gangrenous.",
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
   "id": "surg-acute-abdomen-10"
  },
  {
   "topic": "Acute mesenteric ischaemia — pain out of proportion, lactate, AF",
   "subarea": "Appendicitis, biliary & pancreatitis (surgical)",
   "whatFirst": "SUSPECT it on the story (severe pain out of proportion to a soft/benign abdomen in an arteriopath/AF patient), resuscitate, and get URGENT CT angiography (arterial phase) — do NOT wait for peritonitis or a high lactate, because by then the bowel is dead. Early surgical/vascular referral in parallel.",
   "trap": "The classic and most tempting wrong answer: 'a normal lactate or soft abdomen excludes it / reassure and observe.' WRONG — lactate rises LATE (after transmural infarction); a normal lactate does NOT exclude early mesenteric ischaemia. The diagnosis is made on suspicion + CT angiography, not on waiting for lactate or peritonism. Other trap: ordering a plain AXR or US first — wrong, CT angiography is the investigation; delay = dead bowel. Anchoring on a 'benign exam' is the killer.",
   "discriminator": "Embolic (commonest, sudden onset, AF/recent MI, SMA territory, sparing proximal jejunum) vs thrombotic (gradual, prior 'intestinal angina'/postprandial pain + weight loss, diffuse atherosclerosis) vs non-occlusive (NOMI — shock/low-flow, vasopressors, dialysis) vs venous (younger, hypercoagulable/portal hypertension, subacute). Distinguish from pancreatitis (lipase), AAA rupture (pulsatile mass, hypotension), and obstruction. The AF + sudden severe out-of-proportion pain = embolic SMA until proven otherwise.",
   "redFlags": "Peritonitis, rising lactate, haemodynamic instability, AF/recent MI with acute abdomen = LATE/established infarction → emergency laparotomy (resection ± revascularisation). Bloody diarrhoea, metabolic acidosis. Mortality very high once bowel is necrotic — the red flag is to act on suspicion BEFORE these appear.",
   "cutoffs": [
    "CT ANGIOGRAPHY (arterial phase) = first-line diagnostic (sens ~92%, spec ~99%) — do urgently",
    "Lactate rises LATE; normal lactate does NOT exclude early AMI",
    "AF / recent MI = embolic SMA occlusion risk (commonest cause)",
    "'Intestinal angina' (postprandial pain + weight loss) precedes thrombotic AMI",
    "Peritonitis/instability → emergency laparotomy"
   ],
   "mcqTrap": "'Normal lactate / soft non-tender abdomen rules out mesenteric ischaemia — reassure and observe' — wrong: pain is out of proportion to exam and lactate rises late; suspicion mandates urgent CT angiography.",
   "mnemonic": "'Pain out of proportion + AF + (deceptively) soft belly = SMA embolus until proven otherwise.' Lactate is a LATE liar — don't wait for it.",
   "viva": "Examiner probe: 'Why is this patient's abdomen soft but you're worried?' Expected: pain out of proportion + AF → embolic AMI; urgent CT angiography, NBM, fluids, broad-spectrum antibiotics, ISBAR to surgery/vascular, anticoagulation, theatre if infarcted. Discriminator probed: embolic vs thrombotic vs NOMI vs venous; why a normal lactate is falsely reassuring.",
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
    }
   ]
  },
  {
   "topic": "Acute pancreatitis — diagnosis, severity scoring & fluid/feeding gotchas",
   "subarea": "Appendicitis, biliary & pancreatitis (surgical)",
   "whatFirst": "Diagnose (2 of 3: typical pain + lipase ≥3× ULN + imaging), then ASSESS SEVERITY and resuscitate with goal-directed IV fluids; identify aetiology (gallstones vs alcohol — US for stones, LFTs, triglycerides, calcium). CT is NOT for diagnosis early — reserve for severity/complications at ~72 h+.",
   "trap": "Several tempting wrong answers: (1) 'Order CT to diagnose' — WRONG, diagnosis is clinical + lipase; early CT under-stages necrosis and delays care; CT is for severity/complications later. (2) 'Keep NBM until pain-free' — WRONG, early ENTERAL feeding (oral/NG as tolerated, within ~24-72 h) is now preferred over prolonged fasting/TPN. (3) 'Prophylactic antibiotics for severe/necrotising pancreatitis' — WRONG, NOT routinely indicated; antibiotics only for proven infected necrosis/cholangitis. (4) Amylase 'normal' falsely reassuring — lipase is more sensitive/specific and stays elevated longer.",
   "discriminator": "Gallstone vs alcohol vs other: ALT >150 (3× ULN) favours gallstones; markedly high triglycerides (>11 mmol/L) = hypertriglyceridaemic cause; high calcium = hyperparathyroid; recent ERCP, drugs. Severity tools: Revised Atlanta (organ failure-based) — mild (no organ failure/complications), moderately severe (transient OF <48 h or local complications), severe (persistent OF >48 h). Glasgow-Imrie (PANCREAS) and APACHE II predict severity; CRP >150 at 48 h = severe; rising urea/haematocrit = under-resuscitation.",
   "redFlags": "Persistent organ failure >48 h (severe), SIRS/septic shock, falling urine output, rising lactate/urea, Cullen's/Grey-Turner's signs (haemorrhagic), infected necrosis (clinical deterioration ~2-4 weeks, gas in collection) → ICU; infected necrosis → step-up drainage (percutaneous/endoscopic before open necrosectomy), not early open surgery.",
   "cutoffs": [
    "Diagnosis = 2 of 3: pain + lipase/amylase ≥3× ULN + imaging (Revised Atlanta)",
    "Severe = persistent organ failure >48 h; moderately severe = transient OF <48 h or local complications",
    "Glasgow-Imrie ≥3 = severe; APACHE II ≥8 = severe",
    "CRP >150 mg/L at 48 h = predictor of severe disease",
    "ALT >150 → gallstone aetiology; triglycerides >11 mmol/L → HTG cause",
    "NO prophylactic antibiotics; early enteral feeding"
   ],
   "mcqTrap": "'Start prophylactic IV antibiotics in severe/necrotising pancreatitis' — wrong: not indicated without proven infection. Runner-up trap: 'CT abdomen to confirm the diagnosis' — wrong: diagnosis is clinical + lipase; CT is for severity/complications, best after 72 h.",
   "mnemonic": "Glasgow-Imrie = PANCREAS: PaO2 <8, Age >55, Neutrophils (WCC >15), Calcium <2, Renal (urea >16), Enzymes (LDH/AST high), Albumin <32, Sugar (glucose >10). 'Lipase, not amylase; fluids and feed, not antibiotics.'",
   "viva": "Examiner probe: 'How do you score severity and what fluids?' Expected: Revised Atlanta + Glasgow/APACHE/CRP, goal-directed crystalloid (Hartmann's/balanced preferred), early enteral feeding, no prophylactic antibiotics. ISBAR/ICU referral for persistent organ failure. Discriminator probed: why early CT and antibiotics are wrong.",
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
    }
   ]
  },
  {
   "topic": "Cholecystitis vs cholangitis vs gallstone pancreatitis — the three-way discriminator",
   "subarea": "Appendicitis, biliary & pancreatitis (surgical)",
   "whatFirst": "Resuscitate, then DECIDE which of the three biliary emergencies it is — because the destination differs: cholecystitis → cholecystectomy; cholangitis → urgent ERCP/drainage; gallstone pancreatitis → supportive + index cholecystectomy (ERCP only if obstruction/cholangitis). Check LFTs, lipase, FBC, and US.",
   "trap": "Most tempting wrong answer: treating ALL three the same way (e.g., urgent ERCP for cholecystitis, or cholecystectomy first in cholangitis). The killer discriminator is Charcot's triad — fever + RUQ pain + JAUNDICE = cholangitis (infected obstructed duct, needs DRAINAGE), not simple cholecystitis (RUQ pain + fever + Murphy's, usually NOT jaundiced, normal-ish bilirubin). Adding hypotension + confusion = Reynolds' pentad = suppurative cholangitis → emergency decompression.",
   "discriminator": "Cholecystitis: Murphy's positive, fever, leucocytosis, US shows thick-walled (>4-5 mm) GB, pericholecystic fluid, sonographic Murphy's; bilirubin/LFTs usually normal or mildly up. Cholangitis: jaundice + obstructive LFT picture (high bili, high ALP/GGT) + dilated CBD on US/duct stone; systemically septic. Gallstone pancreatitis: epigastric pain to back, lipase ≥3× ULN, often transient ALT rise (ALT >150 strongly suggests gallstone aetiology).",
   "redFlags": "Reynolds' pentad (Charcot's triad + hypotension + altered mental state) = acute suppurative/obstructive cholangitis → resuscitate + emergency biliary decompression (ERCP; PTC/surgery if ERCP fails). Severe sepsis/septic shock from any biliary source = ICU + source control.",
   "cutoffs": [
    "Cholangitis = Charcot's triad (fever + RUQ pain + jaundice); Reynolds' pentad adds hypotension + confusion",
    "Lipase ≥3× ULN = pancreatitis (Revised Atlanta)",
    "ALT >150 U/L (or 3× ULN) → favours gallstone cause of pancreatitis",
    "GB wall >4-5 mm + pericholecystic fluid + sonographic Murphy's = cholecystitis",
    "Dilated CBD >6-7 mm (>10 post-cholecystectomy) suggests obstruction"
   ],
   "mcqTrap": "Choosing 'urgent cholecystectomy' for acute cholangitis — wrong: cholangitis needs biliary DRAINAGE/decompression first (ERCP), cholecystectomy comes later. Conversely choosing 'urgent ERCP' for uncomplicated cholecystitis — wrong: cholecystitis needs cholecystectomy, not ERCP.",
   "mnemonic": "Charcot = 3 (fever, pain, jaundice). Reynolds = 5 (add Pressure-down + Pixie-confused). 'Jaundice tips cholecystitis into cholangitis — and cholangitis means DRAIN, don't cut first.'",
   "viva": "Examiner probe: 'How do you tell cholangitis from cholecystitis at the bedside?' Expected: jaundice + obstructive LFTs + sepsis = cholangitis → ISBAR to surgical/GI reg for ERCP. Discriminator probed: which gets a knife first (cholecystitis) vs a drain first (cholangitis).",
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
    }
   ]
  },
  {
   "topic": "Gallstone pancreatitis — ERCP indication & timing of cholecystectomy",
   "subarea": "Appendicitis, biliary & pancreatitis (surgical)",
   "whatFirst": "Confirm gallstone aetiology (US for stones, ALT >150), supportive Rx, then decide: does this patient need ERCP? ERCP is NOT for all gallstone pancreatitis — it is for concurrent CHOLANGITIS or persisting biliary OBSTRUCTION. Then plan index-admission cholecystectomy for mild disease.",
   "trap": "The single most tempting wrong answer: 'urgent ERCP for all (or all severe) gallstone pancreatitis.' WRONG — the old teaching that severe gallstone pancreatitis needs early ERCP has been superseded. Current indication = ERCP within 24 h ONLY if concurrent acute cholangitis (and consider if ongoing biliary obstruction). Severity alone, without cholangitis/obstruction, is NOT an ERCP indication (APEC trial: no benefit of urgent ERCP in predicted-severe biliary pancreatitis without cholangitis). Second trap: 'delay cholecystectomy 6 weeks' — wrong for MILD disease, where same-admission (index) cholecystectomy is standard to prevent recurrence.",
   "discriminator": "Cholangitis present (jaundice + obstructive LFTs + sepsis + dilated duct) → urgent ERCP within 24 h. Pancreatitis alone without obstruction → no ERCP, treat supportively. MRCP/EUS to clarify retained CBD stone in equivocal cases before committing to ERCP. Mild vs severe (Revised Atlanta) determines cholecystectomy timing.",
   "redFlags": "Concurrent cholangitis (Charcot/Reynolds) = urgent ERCP + drainage. Severe pancreatitis with persistent organ failure = ICU; defer cholecystectomy until recovery/resolution of collections (interval, after ~6 weeks for severe/necrotising disease).",
   "cutoffs": [
    "ERCP within 24 h ONLY if concurrent acute cholangitis (± persisting obstruction)",
    "Severity alone is NOT an ERCP indication (APEC trial)",
    "Mild gallstone pancreatitis: cholecystectomy SAME (index) admission",
    "Severe/necrotising: delay cholecystectomy ~6 weeks (until collections settle)",
    "ALT >150 (3× ULN) supports gallstone cause"
   ],
   "mcqTrap": "'Urgent ERCP for all severe gallstone pancreatitis' — wrong: ERCP is indicated for concurrent cholangitis (or ongoing obstruction), not for severity per se (APEC). Runner-up: 'interval cholecystectomy at 6 weeks for mild disease' — wrong, index-admission chole is standard for mild.",
   "mnemonic": "'ERCP earns its place only when the duct is BLOCKED-and-INFECTED (cholangitis) — not because the pancreas is angry.' Mild = chole this admission; Severe = chole later.",
   "viva": "Examiner probe: 'Does this gallstone pancreatitis need an ERCP?' Expected: only if cholangitis/obstruction. Then: when do you take out the gallbladder? Mild → index admission; severe → interval. ISBAR for the jaundiced septic patient. Consent: ERCP risks (post-ERCP pancreatitis, bleeding, perforation, cholangitis).",
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
   "id": "surg-acute-abdomen-14"
  },
  {
   "topic": "Acute diverticulitis: antibiotics-or-not & outpatient criteria",
   "subarea": "Colorectal & anorectal",
   "trap": "Modern Australian practice (eTG): UNCOMPLICATED diverticulitis in a well, immunocompetent patient (without right-sided disease) may NOT need antibiotics (selective, not routine, use) - antibiotics don't shorten the illness or prevent recurrence. This catches students who reflexively prescribe. Antibiotics ARE indicated if: immunocompromised, sepsis/systemically unwell, complicated disease (abscess/perforation/obstruction), significant comorbidity, or failure to improve at 72 h. Don't forget: do NOT do a colonoscopy in the acute phase (perforation risk) - arrange interval colonoscopy ~6 weeks after the acute episode settles to exclude malignancy.",
   "whatFirst": "Confirm uncomplicated on CT + assess host. Well + uncomplicated + immunocompetent -> consider no antibiotics, oral intake, outpatient with safety-net. Complicated/septic/immunocompromised -> admit + antibiotics +/- drainage. Start antibiotics if no improvement at 72 h.",
   "discriminator": "Uncomplicated + well + immunocompetent (and not right-sided) = antibiotic-sparing. Any of: immunocompromise, sepsis, complicated CT findings, comorbidity = give antibiotics. Acute = no scope; interval colonoscopy at ~6 weeks.",
   "redFlags": "Immunosuppression, signs of perforation/abscess, ongoing fever/pain at 72 h, inability to tolerate oral intake -> admit/escalate.",
   "mcqTrap": "'Urgent colonoscopy now' in acute diverticulitis - WRONG (perforation risk); the scope is done as INTERVAL colonoscopy ~6 weeks later. Also tempting-wrong: mandatory antibiotics for every uncomplicated case.",
   "source": "eTG (Therapeutic Guidelines Gastrointestinal, current) - selective antibiotics in uncomplicated diverticulitis; MJA diverticulitis review",
   "viva": "Examiner: 'Well 55-yo, CT confirms uncomplicated sigmoid diverticulitis - do they need antibiotics?' Show the antibiotic-sparing approach + the immunocompromise/sepsis/right-sided exceptions + interval scope.",
   "mnemonic": "'Well + uncomplicated = watch (no abx); Sick/immunosuppressed/complicated = treat. Scope LATER, not now.'",
   "tags": [
    "diverticulitis",
    "antibiotics",
    "eTG",
    "colonoscopy"
   ],
   "verified": true,
   "cutoffs": [
    "Start antibiotics if no improvement at 72 h (when initially withheld)",
    "Interval colonoscopy ~6 weeks after acute episode"
   ],
   "title": "Acute diverticulitis",
   "subtitle": "antibiotics-or-not & outpatient criteria",
   "id": "surg-acute-abdomen-15"
  },
  {
   "topic": "Anal fissure: site, first-line chemical sphincterotomy & the LIS gotcha",
   "subarea": "Colorectal & anorectal",
   "trap": "Site is the discriminator: a fissure in the POSTERIOR MIDLINE is typical/benign (ischaemia of the posterior anoderm). A fissure that is LATERAL, multiple, or atypical = think secondary cause: Crohn's disease, TB, HIV, syphilis, malignancy - investigate, don't just give cream. First-line for chronic fissure = topical GTN 0.2% or diltiazem 2% (chemical sphincterotomy) BD for ~6-8 weeks + stool softeners/fibre; diltiazem preferred over GTN if headaches (equally effective, fewer adverse effects). Surgery = LATERAL internal sphincterotomy (gold standard), and the gotcha is you NEVER do a midline/posterior sphincterotomy (keyhole deformity); the risk to counsel is faecal/flatus incontinence.",
   "whatFirst": "Chronic fissure -> fibre + softeners + topical GTN or diltiazem 6-8 wk first. Failure -> refer for lateral internal sphincterotomy (or botulinum toxin).",
   "discriminator": "Posterior midline = primary/benign. Lateral/atypical/multiple = secondary (Crohn's etc) -> investigate. GTN vs diltiazem: equally effective, diltiazem fewer headaches.",
   "redFlags": "Atypical/lateral fissure, induration, undermined edges, associated perianal disease -> exclude IBD/malignancy/infection.",
   "mcqTrap": "'Proceed to lateral internal sphincterotomy' as first-line for a fresh chronic fissure WITHOUT a trial of topical therapy - WRONG: medical (chemical sphincterotomy) first for 6-8 weeks. Also tempting-wrong: dismissing a lateral fissure as benign.",
   "source": "Australian Prescriber 'Anal fissure'; RACGP 'Anal fissures: an update on treatment options'; CSSANZ",
   "viva": "Examiner: 'Where are most fissures and why does location matter?' = posterior midline, ischaemic; lateral = suspect secondary cause. Consent for LIS: bleeding, infection, recurrence, and crucially incontinence (esp. to flatus).",
   "mnemonic": "'Posterior = primary; Lateral = look for a cause. Cream 6-8 weeks before the knife - and the knife goes LATERAL, never midline.'",
   "tags": [
    "anal fissure",
    "GTN",
    "diltiazem",
    "sphincterotomy"
   ],
   "verified": true,
   "cutoffs": [
    "Topical GTN 0.2% or diltiazem 2% BD x 6-8 weeks",
    "Surgery (lateral internal sphincterotomy) after failed conservative therapy"
   ],
   "title": "Anal fissure",
   "subtitle": "site, first-line chemical sphincterotomy & the LIS gotcha",
   "id": "surg-acute-abdomen-16"
  },
  {
   "topic": "Colorectal cancer: TNM staging traps & treatment-deciding thresholds",
   "subarea": "Colorectal & anorectal",
   "trap": "The single biggest staging gotcha: Stage III (any node-positive, N1/N2) = adjuvant chemotherapy regardless of T stage. Nodes, not depth, trigger chemo. RECTAL vs COLON cancer differ fundamentally: locally advanced rectal cancer (T3/T4 or node+) gets NEOADJUVANT (pre-op) chemoradiotherapy then TME surgery; colon cancer is surgery-first then adjuvant chemo if node+. Staging needs CT chest/abdo/pelvis + (for rectum) pelvic MRI; CEA is a baseline/surveillance marker, NOT a diagnostic or screening test.",
   "whatFirst": "Confirmed CRC -> full staging (CT C/A/P; pelvic MRI if rectal) + baseline CEA, then MDT to decide neoadjuvant vs surgery-first.",
   "discriminator": "Node-positive = Stage III = adjuvant chemo. Rectal cancer = MRI + consider neoadjuvant chemoRT; colon cancer = surgery first. T4/obstruction/perforation escalates urgency.",
   "redFlags": "Obstruction, perforation, or near-obstructing tumour -> emergency; large-bowel obstruction with competent ileocaecal valve risks closed-loop perforation (caecum >9-12 cm on imaging = imminent rupture).",
   "mcqTrap": "'Use CEA to screen/diagnose' - WRONG: CEA lacks sensitivity/specificity for screening; it is for baseline and post-treatment surveillance only. Also tempting-wrong: giving adjuvant chemo based on T-stage alone when node-negative.",
   "source": "Cancer Council Australia / NHMRC CRC clinical practice guidelines; CSSANZ; AJCC TNM 8th ed",
   "viva": "Examiner: 'Rectal vs sigmoid cancer - does management differ?' Show you know rectal -> MRI + neoadjuvant chemoRT + TME; colon -> resection first. Then 'When does this patient get chemo?' = node-positive (Stage III).",
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
   "trap": "Hinchey drives the decision. Ia/Ib = phlegmon / small pericolic abscess (<4-5 cm) -> medical management +/- antibiotics. II = larger walled-off pelvic abscess (>=4-5 cm) -> percutaneous (CT-guided) drainage, NOT straight to theatre. III = generalised PURULENT peritonitis. IV = FECULENT (faecal) peritonitis. III/IV = emergency surgery. The classic operative gotcha: a stable patient with purulent peritonitis (Hinchey III) may have laparoscopic lavage or primary resection +/- anastomosis; the UNSTABLE/feculent (IV) patient gets a Hartmann's (resection + end colostomy). Don't anastomose in contaminated/unstable settings.",
   "whatFirst": "Resuscitate -> CT abdo/pelvis to assign Hinchey -> small abscess medical; large abscess percutaneous drain; purulent/feculent peritonitis or failed source control -> theatre.",
   "discriminator": "Abscess size ~4-5 cm separates antibiotics (Hinchey I) from percutaneous drainage (Hinchey II). Purulent (III) vs feculent (IV) peritonitis separates lavage/primary resection from Hartmann's.",
   "redFlags": "Free gas/peritonism, sepsis, feculent contamination, failure of percutaneous drainage, immunosuppressed -> emergency operation. Recurrent/complicated or stricturing disease -> elective resection discussion.",
   "mcqTrap": "'Take the Hinchey II pelvic abscess straight to laparotomy' - WRONG: first-line for a drainable walled-off abscess (>=4-5 cm) is CT-guided percutaneous drainage + antibiotics. Surgery is reserved for III/IV or drainage failure.",
   "source": "Hinchey classification; CSSANZ / WSES diverticulitis principles; MJA review 'Management of diverticulitis' (Australian)",
   "viva": "Examiner: 'CT shows a 6 cm pelvic collection - next step?' = percutaneous drainage, not theatre. Then 'Now free faeces in the abdomen, BP 80 systolic' = resuscitate + emergency Hartmann's.",
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
    }
   ]
  },
  {
   "topic": "Fistula-in-ano: Goodsall's rule, seton vs fistulotomy & Crohn's link",
   "subarea": "Colorectal & anorectal",
   "trap": "~25-40% of drained anorectal abscesses develop a fistula-in-ano. Goodsall's rule (exam favourite): external opening ANTERIOR to the transverse anal line -> straight/radial tract to internal opening; opening POSTERIOR -> curved tract opening into the posterior midline. Surgical gotcha: fistulotomy is curative for LOW/SIMPLE fistulas but risks INCONTINENCE if it divides significant sphincter; HIGH/complex or anterior-in-women or Crohn's fistulas -> SETON (preserve continence), not blind fistulotomy. Recurrent/multiple/complex perianal fistulas -> think CROHN'S DISEASE; optimise medical/biologic therapy alongside seton.",
   "whatFirst": "Define anatomy (EUA +/- MRI pelvis for complex) -> low simple fistula: fistulotomy; high/complex/Crohn's: seton + treat underlying disease.",
   "discriminator": "Low/simple (minimal sphincter) = fistulotomy. High/complex/anterior-in-female/Crohn's = seton (continence-preserving). Recurrent complex fistulae = screen for Crohn's.",
   "redFlags": "Multiple/recurrent/branching fistulae, diarrhoea, perianal Crohn's features -> investigate for IBD; complex tracts -> MRI before surgery.",
   "mcqTrap": "'Lay open (fistulotomy) a high trans-sphincteric fistula' - WRONG: dividing significant sphincter risks faecal incontinence; the correct answer is a seton.",
   "source": "CSSANZ fistula-in-ano guidance; Goodsall's rule (classic); Australian colorectal practice",
   "viva": "Examiner: 'External opening 3 cm posterior to anus - where's the internal opening?' = posterior midline (curved tract). Then 'When would you NOT lay it open?' = high/complex/Crohn's -> seton. Consent: incontinence risk, recurrence.",
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
   "id": "surg-acute-abdomen-19"
  },
  {
   "topic": "Haemorrhoids: grading, treatment ladder & the thrombosed gotcha",
   "subarea": "Colorectal & anorectal",
   "trap": "Internal haemorrhoid grading drives treatment: I (bleed, no prolapse) and II (prolapse, spontaneously reduce) -> conservative (fibre, fluids, topical) +/- rubber-band ligation; III (prolapse, manual reduction) -> banding or surgery; IV (irreducible) -> surgery (haemorrhoidectomy). The classic trap: an acutely THROMBOSED EXTERNAL haemorrhoid presenting within ~72 h of severe pain -> excision gives rapid relief; after 72 h pain is settling -> conservative management. Biggest safety gotcha: NEVER attribute rectal bleeding to haemorrhoids without excluding colorectal cancer - examine + scope appropriately in at-risk/older patients.",
   "whatFirst": "Bleeding PR -> assess for red flags + age/risk -> if any concern, colonoscopy to exclude malignancy BEFORE labelling 'just haemorrhoids'. Then grade and treat by ladder.",
   "discriminator": "Internal (above dentate line, painless bleeding, graded I-IV) vs external/thrombosed (below dentate, painful). Thrombosed external <72 h = excise; >72 h = conservative. Painless bright bleeding does NOT equal benign until cancer excluded.",
   "redFlags": "Change in bowel habit, weight loss, anaemia, age >=45-50, FHx, mass -> colonoscopy. Don't band an undiagnosed rectal tumour.",
   "mcqTrap": "'Diagnose haemorrhoids and reassure' in an older patient with new PR bleeding without examination/scope - WRONG: this misses colorectal cancer. The exam-favourite correct answer is to exclude malignancy first.",
   "source": "CSSANZ haemorrhoid management; Australian Prescriber / RACGP anorectal guidance",
   "viva": "Examiner: '62-yo, painless PR bleeding - is it haemorrhoids?' Trap is to agree. Correct: examine + colonoscopy to exclude cancer first, then treat. Consent point for banding/haemorrhoidectomy: pain, bleeding, recurrence, rare incontinence.",
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
   "id": "surg-acute-abdomen-20"
  },
  {
   "topic": "NBCSP screening: ages, interval & the 2024 age-drop gotcha",
   "subarea": "Colorectal & anorectal",
   "trap": "MCQ tempts you with the OLD '50-74' start age. Since 1 JUL 2024 the National Bowel Cancer Screening Program (NBCSP) lowered the eligible start age to 45. Test = immunochemical FOBT (iFOBT/FIT), 2-yearly, ages 45-74. KEY nuance: 50-74 are AUTOMATICALLY mailed a kit; 45-49 must REQUEST their first kit (not auto-mailed). It is a screening test for ASYMPTOMATIC, average-risk people only - a symptomatic patient (PR bleeding, change in bowel habit, anaemia) does NOT get an iFOBT, they go straight to colonoscopy.",
   "whatFirst": "Asymptomatic + average risk + 45-74 -> iFOBT 2-yearly. Symptomatic OR strong family history -> bypass screening, refer for colonoscopy.",
   "discriminator": "iFOBT is screening (asymptomatic). Symptoms or FHx = diagnostic pathway = colonoscopy, NOT a stool test. Don't 'screen' a bleeding patient.",
   "redFlags": "PR bleeding, change in bowel habit >6 wk, iron-deficiency anaemia (esp. men/postmenopausal women), abdominal/rectal mass, unexplained weight loss -> colonoscopy regardless of recent negative iFOBT.",
   "mcqTrap": "'Recommend iFOBT' for a patient already reporting rectal bleeding - WRONG: a negative iFOBT cannot reassure a symptomatic patient; symptoms mandate colonoscopy.",
   "source": "Dept of Health, Disability & Ageing - NBCSP lowered eligible age (effective 1 Jul 2024); Cancer Council Australia bowel screening FAQ 2025; AIHW NBCSP monitoring report 2025",
   "viva": "Examiner probes: 'Healthy 47-year-old asks about bowel screening - what do you offer and how often?' Answer iFOBT every 2 yrs, note they must request the first kit at 45-49. Then they pivot: 'Now they report blood' - you must escalate to colonoscopy.",
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
   "trap": "The cardinal gotcha: an anorectal abscess is treated by INCISION AND DRAINAGE, not antibiotics. Antibiotics alone do not treat an abscess and are only ADJUNCTS in specific cases (overlying cellulitis, systemic sepsis, immunocompromise/diabetes, valvular heart disease/prosthesis). Don't wait for 'fluctuance' or fever - perianal sepsis can be deep with minimal external signs. CRITICAL escalation: severe pain out of proportion, systemic toxicity, crepitus, immunocompromised/diabetic -> think NECROTISING perianal infection (Fournier's gangrene) = surgical emergency, urgent EUA + debridement + broad-spectrum antibiotics.",
   "whatFirst": "Suspected anorectal abscess -> urgent surgical incision & drainage (often EUA). Add antibiotics only for the specific adjunct indications. Suspect Fournier's -> resuscitate + emergency theatre.",
   "discriminator": "Abscess (treat by drainage) vs cellulitis (antibiotics). Simple perianal vs deep (ischiorectal/supralevator) - the latter needs EUA/imaging. Watch the diabetic with severe pain = Fournier's until proven otherwise.",
   "redFlags": "Severe pain out of proportion, systemic toxicity/sepsis, crepitus, skin necrosis, immunocompromise/diabetes -> suspect Fournier's gangrene; failure to drain a deep/supralevator collection.",
   "mcqTrap": "'Treat the perianal abscess with oral antibiotics and review' - WRONG: definitive treatment is surgical drainage; antibiotics alone risk progression to deep/necrotising infection.",
   "source": "CSSANZ / eTG anorectal sepsis principles; Australian surgical practice",
   "viva": "Examiner: 'Diabetic, severe perianal pain, looks toxic - what's your fear and action?' = Fournier's; resuscitate, broad-spectrum antibiotics, urgent surgical debridement (ISBAR to on-call surgeon). Consent for I&D: bleeding, recurrence, fistula formation.",
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
   "trap": "Location is everything: a pilonidal abscess/sinus sits in the MIDLINE of the natal cleft (sacrococcygeal), several cm posterior to the anus - it is NOT anorectal and has NO communication with the anal canal. Don't confuse it with a perianal abscess/fistula. Typical patient: young, male, hirsute, sedentary. Acute pilonidal abscess -> incision and drainage (off-midline incision preferred). Chronic disease -> elective excision (definitive surgery); high recurrence with simple midline closure, so off-midline/flap techniques (e.g. Karydakis, Limberg/cleft-lift) are favoured.",
   "whatFirst": "Acute abscess -> incision & drainage (off-midline). Chronic/recurrent sinus -> elective definitive excision with off-midline/flap closure + hair control.",
   "discriminator": "Pilonidal = midline natal cleft, contains hair, no anal communication, young hirsute male. Perianal/anorectal abscess = at anal verge, related to anal glands/dentate line.",
   "redFlags": "Spreading cellulitis, systemic sepsis, or immunocompromise with a natal-cleft abscess -> escalate; recurrent/non-healing midline wound -> definitive flap surgery rather than repeated midline procedures.",
   "mcqTrap": "Labelling a natal-cleft midline abscess as a 'perianal abscess' and looking for a fistula to the anal canal - WRONG: pilonidal disease has no anal communication; management/anatomy differ entirely.",
   "source": "CSSANZ / Australian surgical guidance on pilonidal disease",
   "viva": "Examiner: 'Young hirsute man, painful midline lump above the anus - diagnosis and where exactly?' = pilonidal abscess in the natal cleft. Then 'Why do midline closures recur?' = midline wounds heal poorly; use off-midline/flap. Consent: recurrence, wound breakdown, prolonged healing.",
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
    }
   ]
  },
  {
   "topic": "Positive iFOBT -> colonoscopy: the 30-day target (NOT 120 days)",
   "subarea": "Colorectal & anorectal",
   "trap": "The CORRECTION gotcha: the recommended Australian benchmark is colonoscopy WITHIN 30 DAYS of a positive iFOBT (Cancer Council Australia / clinical-care-standard target; the NBCSP Quality Framework cites a 44-day benchmark). The '120 days' figure is NOT the benchmark - it is only the evidence-based ceiling beyond which cancer prognosis may worsen (the CRC guidelines state there is no prognostic detriment if colonoscopy occurs within 120 days). Quoting 120 days as 'the standard' is the trap. A positive iFOBT does NOT mean cancer; it mandates complete colonic examination. Do not repeat the iFOBT to 'confirm' - one positive test mandates colonoscopy.",
   "whatFirst": "Positive iFOBT -> GP review + urgent referral for colonoscopy, ideally within 30 days (do not let it drift toward the 120-day prognostic ceiling). Symptomatic/red-flag patients are prioritised faster.",
   "discriminator": "30-day target = the recommended benchmark after a positive iFOBT. 120 days = the evidence ceiling (no prognostic harm), NOT a target. Don't conflate the two; in practice median waits exceed both.",
   "redFlags": "Positive iFOBT PLUS symptoms (bleeding, weight loss, anaemia) -> upgrade urgency; expedite well within the 30-day target.",
   "mcqTrap": "'Repeat the iFOBT in 12 months' after a positive result - WRONG: a single positive iFOBT requires diagnostic colonoscopy, never a repeat stool test. Also tempting-wrong: '120 days is the benchmark' (it is the prognostic ceiling, not the target).",
   "source": "Cancer Council Australia bowel cancer screening policy; ACSQHC Colonoscopy Clinical Care Standard; AIHW/NCCI NBCSP colonoscopy follow-up indicators 2025",
   "viva": "ISBAR a positive-iFOBT referral: state the positive screen, any symptoms, and request colonoscopy aiming for the 30-day standard; examiner checks you don't downgrade, repeat the test, or wrongly cite 120 days as the target.",
   "mnemonic": "'One positive iFOBT = one colonoscopy - aim 30 days, 120 is the danger line not the deadline.'",
   "tags": [
    "screening",
    "iFOBT",
    "colonoscopy",
    "timing"
   ],
   "verified": false,
   "cutoffs": [
    "Recommended target: colonoscopy within ~30 days of positive iFOBT (NBCSP Quality Framework: 44 days)",
    "120 days = evidence ceiling (no prognostic detriment), NOT the benchmark"
   ],
   "title": "Positive iFOBT -> colonoscopy",
   "subtitle": "the 30-day target (NOT 120 days)",
   "id": "surg-acute-abdomen-24"
  },
  {
   "topic": "Stoma complications: ischaemia, retraction, prolapse, parastomal hernia & the high-output gotcha",
   "subarea": "Colorectal & anorectal",
   "trap": "Know the early-vs-late split and which is an emergency. EARLY: ischaemia/necrosis (dusky/black stoma - assess depth with a tube/scope; necrosis below fascia = return to theatre), retraction, mucocutaneous separation, high output. LATE: parastomal hernia (most common late complication), prolapse, stenosis, skin excoriation. The metabolic gotcha: a HIGH-OUTPUT stoma (especially a high/proximal ileostomy, commonly defined as output >1500-2000 mL/day) causes dehydration, hypokalaemia, hypomagnesaemia and acute kidney injury - manage with oral rehydration solution, loperamide, restrict hypotonic fluids, replace Mg/K. An end ileostomy should SPOUT (protruding) to protect skin; a colostomy is flush.",
   "whatFirst": "Dusky stoma -> assess viability depth (above fascia = observe; below = theatre). High-output ileostomy -> correct fluid/electrolytes (K, Mg), ORS, loperamide, reduce hypotonic intake, find/treat the cause (sepsis, obstruction, drugs).",
   "discriminator": "Early necrosis/retraction = surgical concern; late parastomal hernia/prolapse = often elective. High-output = the proximal small-bowel (ileostomy) problem with electrolyte/AKI risk, not usually a colostomy.",
   "redFlags": "Stoma necrosis extending below the fascia, obstructed/incarcerated parastomal hernia, ischaemic prolapse, output causing AKI/severe hypokalaemia -> urgent surgical/medical escalation.",
   "mcqTrap": "'Reassure and give IV hypotonic fluids' for a high-output ileostomy - WRONG: hypotonic fluids worsen sodium/water losses; the answer is ORS + antimotility + electrolyte (Mg/K) replacement and restricting hypotonic oral fluids.",
   "source": "CSSANZ / Australian stoma care guidance; standard colorectal surgical teaching",
   "viva": "Examiner: 'POD2 ileostomy is dusky - what do you do?' = assess viability depth at the bedside, escalate if below fascia. Then 'Day 5, output 2.5 L - why is the K low and how do you manage?' Show electrolyte/AKI reasoning + ORS/loperamide. ISBAR the deteriorating stoma to the registrar.",
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
    "High-output stoma commonly >1500-2000 mL/day (definitions vary)",
    "Replace K and Mg; restrict hypotonic fluids; use ORS"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Timing</th><th>Complication</th><th>Action</th></tr><tr><td>Early</td><td>Ischaemia / necrosis</td><td>Assess depth; below fascia -> theatre</td></tr><tr><td>Early</td><td>Retraction / mucocutaneous separation</td><td>Wound care; revise if severe</td></tr><tr><td>Early</td><td>High output (ileostomy)</td><td>ORS, loperamide, replace Mg/K, restrict hypotonic fluids</td></tr><tr><td>Late</td><td>Parastomal hernia (commonest)</td><td>Support/elective repair; urgent if obstructed</td></tr><tr><td>Late</td><td>Prolapse / stenosis</td><td>Conservative vs surgical revision</td></tr></table>",
   "title": "Stoma complications",
   "subtitle": "ischaemia, retraction, prolapse, parastomal hernia & the high-output gotcha",
   "id": "surg-acute-abdomen-25"
  },
  {
   "topic": "Femoral & Richter's hernia traps — the ones that strangulate silently",
   "subarea": "GI bleeding & hernia (surgical)",
   "whatFirst": "A groin lump BELOW and LATERAL to the pubic tubercle = FEMORAL (inguinal is above and medial). Femoral hernias have a high strangulation risk → almost always repair, even if asymptomatic, and urgently if symptomatic.",
   "trap": "RICHTER'S hernia: only part of the bowel circumference (antimesenteric wall) is trapped → it can STRANGULATE and necrose WITHOUT causing bowel obstruction. So a patient can have a strangulated Richter's with a viable lumen, NO vomiting/distension, but progressing to perforation — easily missed. Femoral hernias are the classic site for Richter's.",
   "mcqTrap": "'Femoral hernia is above and medial to the pubic tubercle' — that's inguinal. Femoral = below and lateral to the pubic tubercle. Also: 'absence of obstruction excludes strangulation' — false (Richter's strangulates without obstruction).",
   "discriminator": "Femoral (more common in women, older, thin) vs inguinal (more common overall, men). Femoral neck is rigid (bounded by inguinal ligament, lacunar ligament, pectineal ligament, femoral vein) → easily strangulates (highest strangulation rate of all hernias, ~15–20%). Inguinal: indirect (lateral to inferior epigastric vessels, through deep ring) vs direct (medial, through Hesselbach's triangle).",
   "redFlags": "Small bowel obstruction with no obvious cause → examine BOTH groins for an occult femoral hernia. Strangulated Richter's = localised tenderness/sepsis without classic obstruction.",
   "cutoffs": [
    "Femoral: below & lateral to pubic tubercle",
    "Inguinal: above & medial to pubic tubercle",
    "Femoral hernia: repair even if asymptomatic",
    "Femoral strangulation rate ~15–20% (highest)",
    "Richter's strangulates without obstruction"
   ],
   "viva": "Examiner: 'How do you clinically distinguish femoral from inguinal?' = relation to pubic tubercle. 'Why can a strangulated hernia have no vomiting?' = Richter's (partial-circumference). Probe femoral canal boundaries.",
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
   "id": "surg-acute-abdomen-26"
  },
  {
   "topic": "Forrest classification — who gets endoscopic therapy + rebleed risk (and the adherent-clot trap)",
   "subarea": "GI bleeding & hernia (surgical)",
   "whatFirst": "At endoscopy, classify the ulcer base (Forrest) → this drives therapy AND who needs IV PPI infusion. HIGH-RISK stigmata (Ia spurting, Ib oozing, IIa visible vessel) get DUAL endoscopic therapy.",
   "trap": "Adherent clot (Forrest IIb): irrigate/remove the clot to reveal the underlying lesion, then treat if high-risk stigmata found. Don't leave a clot un-investigated. Clean base (III) and flat pigmented spot (IIc) = LOW risk → no endoscopic therapy, can usually feed early and step down to oral PPI.",
   "mcqTrap": "'Inject adrenaline alone' for a high-risk ulcer — WRONG. Adrenaline monotherapy is inadequate; combine with a SECOND modality (thermal coagulation OR clip OR sclerosant). Adrenaline is for initial control only.",
   "discriminator": "Rebleed risk by Forrest (untreated): Ia/Ib active ~spurting up to ~55%; IIa visible vessel ~43–50%; IIb clot ~22–33%; IIc spot ~10%; III clean base <5%. High-risk (Ia–IIa, treated IIb) → 72h IV PPI infusion + admit; low-risk (IIc/III) → oral PPI, early discharge.",
   "cutoffs": [
    "Forrest Ia/Ib/IIa = high risk → dual endoscopic therapy + IV PPI infusion",
    "Forrest IIb = remove clot, treat if needed",
    "Forrest IIc/III = low risk → oral PPI, early feed/discharge",
    "Clean base rebleed <5%; visible vessel ~43–50%"
   ],
   "viva": "Examiner shows endoscopy image of a visible vessel: 'Forrest grade? Treatment? Rebleed risk?' Want IIa, dual therapy (adrenaline + thermal/clip), high rebleed risk, 72h IV PPI.",
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
   "id": "surg-acute-abdomen-27"
  },
  {
   "topic": "Glasgow-Blatchford vs Rockall — which score, when, and the discharge cutoff",
   "subarea": "GI bleeding & hernia (surgical)",
   "whatFirst": "Use the GLASGOW-BLATCHFORD SCORE (GBS) at presentation/pre-endoscopy to decide who is safe for outpatient management. It uses urea, Hb, SBP, HR, melaena, syncope, hepatic/cardiac disease — NO endoscopy needed.",
   "trap": "GBS = 0 (some accept ≤1) identifies very-low-risk patients who can be considered for OUTPATIENT management without inpatient endoscopy. Rockall is the trap: the FULL Rockall needs endoscopic findings, so it CANNOT be your pre-endoscopy triage tool. Pre-endoscopy = GBS; post-endoscopy prognosis/rebleed/mortality = full Rockall.",
   "mcqTrap": "'Use Rockall score to decide on safe discharge before endoscopy' — wrong, full Rockall requires endoscopic data. The pre-endoscopy (clinical) Rockall exists but GBS outperforms it for predicting need for intervention.",
   "discriminator": "GBS predicts NEED FOR INTERVENTION (transfusion/endoscopic therapy/surgery). Rockall predicts REBLEEDING and MORTALITY (and needs the scope to complete). Note: GBS counts a RAISED urea (urea up disproportionate to creatinine suggests a true upper GI source — digested blood protein load). GBS 0 ≈ 0.5% intervention/death risk; ≤1 ≈ 3.4%.",
   "cutoffs": [
    "GBS 0 (or ≤1): very low risk → consider outpatient",
    "GBS ≥7: higher likelihood needing endoscopic intervention",
    "Full Rockall ≥3: higher risk; needs endoscopy data"
   ],
   "viva": "Examiner: 'Well 30yo, single small haematemesis, normal obs, normal bloods — admit or discharge?' Answer = calculate GBS; if 0 → safe for early outpatient endoscopy. Demonstrates you don't reflexively admit everyone.",
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
   "whatFirst": "Examine: is it reducible? A tense, tender, irreducible hernia with overlying skin changes + systemic signs = STRANGULATION → emergency theatre, do NOT keep trying to reduce. NBM, IV fluids, analgesia, bloods (lactate), surgical referral.",
   "trap": "STRANGULATION (ischaemic bowel) is the surgical emergency — it can occur WITHOUT obstruction (Richter's). Signs: irreducible + tender + erythema/skin discoloration + systemic upset (tachycardia, fever, raised lactate/WCC) ± peritonism. Incarcerated = irreducible but not yet ischaemic (still an urgent referral, risk of progressing).",
   "mcqTrap": "'Vigorously attempt manual reduction of a tender, erythematous, irreducible hernia' — WRONG: risk of reducing dead bowel into the abdomen ('reduction en masse') → missed perforation/peritonitis. Gentle reduction only if NO signs of strangulation.",
   "discriminator": "Reducible (goes back, observe/elective repair) → Incarcerated (irreducible, not ischaemic, urgent) → Obstructed (incarcerated bowel + obstruction: colicky pain, vomiting, distension) → Strangulated (ischaemic: constant pain, tenderness, skin change, systemic = EMERGENCY). Femoral hernia = far higher strangulation risk (tight, rigid neck) → repair even if asymptomatic.",
   "redFlags": "Tender irreducible hernia + skin erythema + tachycardia/fever + raised lactate = strangulated bowel → straight to theatre. Bowel obstruction features in a patient with a known hernia = the hernia until proven otherwise.",
   "cutoffs": [
    "Strangulation = surgical emergency (within hours)",
    "Incarcerated/obstructed = urgent referral",
    "Femoral hernia: repair even if asymptomatic (high strangulation risk)",
    "No reduction if any strangulation sign"
   ],
   "viva": "Examiner: 'Groin lump, irreducible, tender, patient vomiting — what now, and what will you NOT do?' = resuscitate + NBM + urgent surgical referral/theatre; will NOT force reduction. Probe: how do you tell incarcerated from strangulated?",
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
   "whatFirst": "Before endoscopy: pre-endoscopy IV PPI is acceptable (downstages high-risk stigmata at scope) but must NOT delay endoscopy. AFTER successful endoscopic haemostasis of a HIGH-RISK ulcer: high-dose IV PPI.",
   "trap": "The classic regimen is 80 mg IV bolus then 8 mg/hr infusion for 72 hours (the period of highest rebleed risk) — give to high-risk ulcers (Forrest Ia–IIa, and the adherent clot IIb not treated endoscopically) AFTER endoscopic therapy. Low-risk lesions (IIc/III) do NOT need the infusion — oral PPI suffices.",
   "mcqTrap": "'IV PPI infusion replaces the need for endoscopy' — WRONG. PPI does not stop active bleeding from a vessel; endoscopic haemostasis is the definitive control. PPI is adjunctive, raising gastric pH to stabilise clot.",
   "discriminator": "Intermittent high-dose PPI (IV or oral, twice-daily) is now an ESGE-accepted alternative to continuous infusion, but the exam-default for a high-risk treated ulcer is 80mg bolus + 8mg/hr x72h. Also: ALWAYS test for H. pylori (and treat) + stop NSAIDs — this is what prevents recurrence long-term.",
   "cutoffs": [
    "IV PPI: 80 mg bolus + 8 mg/hr infusion x 72h (high-risk, post-endoscopy)",
    "Then oral PPI",
    "72h = highest rebleed window",
    "H. pylori eradication reduces recurrence"
   ],
   "viva": "Examiner: 'Ulcer with visible vessel, treated endoscopically — what drug, dose, how long, and what one test must you not forget?' = IV PPI 80+8/72h, plus H. pylori testing + stop NSAIDs.",
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
   "whatFirst": "Child/young adult with PAINLESS, brisk lower GI bleeding (and unremarkable colonoscopy/OGD) → think Meckel's. Investigation of choice in a stable bleeder = 99mTc-pertechnetate scan ('Meckel scan') — detects ectopic GASTRIC mucosa.",
   "trap": "The bleeding is from ECTOPIC GASTRIC mucosa secreting acid → ulcerates adjacent ileal mucosa → painless bleed. The Meckel scan only lights up if gastric (acid-secreting) mucosa is present; a negative scan does NOT exclude a Meckel's that lacks gastric mucosa. Ranitidine/H2-blocker (or pentagastrin) can enhance uptake.",
   "mcqTrap": "'Colonoscopy will diagnose it' — usually NOT: it's in the distal ileum (~60cm/2ft proximal to ileocaecal valve), out of colonoscope reach. The classic answer is the technetium-99m pertechnetate scan, not colonoscopy/CT.",
   "discriminator": "Meckel's = the commonest congenital GI anomaly, a true diverticulum (all layers), on the ANTIMESENTERIC border (vs acquired diverticula). Presentations: painless bleed (kids, gastric mucosa), obstruction (intussusception lead-point/volvulus), or diverticulitis mimicking appendicitis. Rule of 2s. Treatment = surgical resection (diverticulectomy or small-bowel resection).",
   "cutoffs": [
    "Rule of 2s: ~2% of population, 2 feet (≈60cm) from ileocaecal valve, ~2 inches long, 2:1 male, often presents <2 years, 2 mucosa types",
    "99mTc-pertechnetate scan true-positive ~84% (up to ~87% with H2-blocker enhancement)",
    "Lifetime symptomatic in a minority"
   ],
   "viva": "Examiner: '4yo, painless large-volume PR bleed, normal scopes — diagnosis and next investigation?' = Meckel's; 99mTc-pertechnetate scan. Probe: why painless? (ectopic gastric mucosa acid ulceration). Why not colonoscopy? (distal ileum, out of reach).",
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
   "id": "surg-acute-abdomen-31"
  },
  {
   "topic": "Rebleeding after endoscopy — the escalation ladder (scope → embolize → operate)",
   "subarea": "GI bleeding & hernia (surgical)",
   "whatFirst": "Clinical rebleed (fresh haematemesis/melaena, drop in Hb, haemodynamic instability after initial control) → REPEAT ENDOSCOPY with re-treatment FIRST. A second endoscopic attempt succeeds in the majority and is preferred over straight-to-surgery.",
   "trap": "Routine 'second-look' endoscopy (scheduled re-scope in everyone) is NOT recommended. Only re-scope for CLINICAL rebleeding. After a SECOND failed endoscopic attempt → transcatheter arterial embolization (TAE/angioembolization) OR surgery. TAE is increasingly preferred over surgery (no GA, lower morbidity, especially in comorbid/elderly).",
   "mcqTrap": "'Proceed directly to laparotomy after first rebleed' — WRONG. Default is repeat endoscopy first; surgery/IR only after endoscopy fails (or for exsanguinating bleed not controllable endoscopically).",
   "discriminator": "TAE vs surgery: TAE preferred if available (no GA, comorbid patients, similar haemostasis, trend to lower 30-day mortality). Surgery (oversew the vessel ± ulcer excision; for duodenal ulcer = ligate gastroduodenal artery) reserved for failed TAE, perforation, or massive uncontrollable bleed. Predictors of rebleed: high-risk Forrest, large ulcer (>2cm), posterior duodenal/lesser-curve gastric (big arteries), shock at presentation.",
   "redFlags": "Exsanguinating bleed not controllable at endoscopy, transfusing >6 units rapidly, recurrent rebleed despite 2 endoscopic attempts → IR/surgery NOW; involve consultant + activate MTP.",
   "cutoffs": [
    "Rebleed: repeat endoscopy first",
    "After 2nd endoscopic failure → TAE or surgery",
    "No routine second-look endoscopy",
    "Ulcer >2cm, posterior DU, lesser curve = high rebleed/surgical risk"
   ],
   "viva": "Examiner: 'Treated ulcer, now rebleeding 12h later, HR 110 — next step?' = resuscitate + REPEAT endoscopy. 'Fails again?' = TAE or surgery. They want the ladder, not a jump to laparotomy.",
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
   "whatFirst": "ABC + two large-bore IV cannulae (14–16G) + fluids/blood FIRST, group & hold/crossmatch, then risk-stratify (Glasgow-Blatchford), then PPI, then ENDOSCOPY within 24h. You resuscitate to enable safe endoscopy — you do NOT scope a shocked, unresuscitated patient.",
   "trap": "RESTRICTIVE transfusion: transfuse RBC at Hb <70 g/L (target 70–90), NOT <80–100. Over-transfusing is harmful — in variceal bleeding it raises portal pressure and INCREASES rebleeding/mortality. The exception is active brisk haemorrhage with haemodynamic instability (transfuse regardless of Hb) or significant cardiovascular disease (threshold ~80 g/L).",
   "mcqTrap": "'Transfuse to keep Hb >100 g/L' — classic distractor. Liberal transfusion increased mortality (Villanueva NEJM 2013; restrictive 6-week mortality 5% vs liberal 9%). Australian/ANZSBT practice = restrictive (Hb <70).",
   "discriminator": "Endoscopy timing: most NVUGIB within 24h of presentation; suspected VARICEAL or ongoing brisk bleed = urgent, within ~12h once resuscitated. Do NOT delay resuscitation to scope, and do NOT scope an unstable patient who hasn't been resuscitated.",
   "redFlags": "Ongoing haematemesis, HR >100, SBP <100/postural drop, lactate up, requiring ongoing transfusion = unstable → call for help, activate massive transfusion protocol, urgent endoscopy + IR/surgery on standby.",
   "cutoffs": [
    "RBC transfusion threshold: Hb <70 g/L (target 70–90)",
    "CVD threshold: Hb <80 g/L",
    "Endoscopy: within 24h (NVUGIB); ~12h if variceal/unstable",
    "2x large-bore IV: 14–16G"
   ],
   "viva": "Examiner probes the ORDER: 'A 60yo vomits 500mL fresh blood, HR 120, SBP 85 — what first?' Answer = resuscitate (IV access, fluids/blood, MTP if needed), NOT 'urgent endoscopy'. ISBAR to GI/surgical reg early.",
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
   "whatFirst": "Characterise the bleed: haematemesis/coffee-ground + melaena → UPPER (proximal to ligament of Treitz). Bright red PR (haematochezia) → usually LOWER, BUT a brisk UPPER GI bleed can present as haematochezia if transit is fast — so in an unstable 'lower' bleed, do an OGD first to exclude a brisk upper source.",
   "trap": "A RAISED UREA with normal creatinine in a GI bleeder points to an UPPER source (digested blood = protein meal absorbed in the small bowel + prerenal). Also: melaena needs only ~50mL of upper GI blood and means the source is upper/proximal until proven otherwise.",
   "mcqTrap": "'Massive bright-red rectal bleeding = always lower GI, go straight to colonoscopy' — WRONG. In a haemodynamically UNSTABLE 'lower' bleed, exclude a brisk upper source with OGD first (NG aspirate/urea help). Unprepped urgent colonoscopy in active bleeding gives poor views.",
   "discriminator": "Stable lower GI bleed → CT angiography (if active bleed) and/or colonoscopy after prep. Brisk/unstable → CT angiogram then mesenteric angiography ± embolization. Most lower GI bleeds (diverticular, angiodysplasia) settle spontaneously. Melaena = upper/small bowel; fresh blood per rectum = colorectal/anal (or massive upper).",
   "redFlags": "Unstable + ongoing bleeding → resuscitate, CT angiogram to localise, IR embolization; surgery (segmental/subtotal colectomy) only if localised + uncontrolled or unlocalised exsanguinating.",
   "cutoffs": [
    "Upper GI = proximal to ligament of Treitz",
    "Melaena needs ~50mL blood",
    "Raised urea:creatinine ratio → upper source",
    "Unstable haematochezia → OGD first to exclude brisk upper bleed",
    "CT angiography detects bleeding ≥0.3–0.5 mL/min"
   ],
   "viva": "Examiner: 'Massive PR bleed, hypotensive — first scope?' = OGD (exclude brisk upper bleed) before colonoscopy. Probe the urea clue and ligament of Treitz definition.",
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
   "id": "surg-acute-abdomen-34"
  },
  {
   "topic": "Variceal bleed — the bundle (drug + scope + antibiotics) and what differs from non-variceal",
   "subarea": "GI bleeding & hernia (surgical)",
   "whatFirst": "Suspect varices (known cirrhosis/portal HTN, stigmata of chronic liver disease)? Start a VASOACTIVE drug (octreotide or terlipressin) + IV ANTIBIOTICS immediately, BEFORE endoscopy. Then urgent endoscopy (within ~12h) for band ligation (oesophageal) or glue/cyanoacrylate (gastric).",
   "trap": "ANTIBIOTICS (e.g. ceftriaxone IV) are mandatory in any cirrhotic with GI bleed — they reduce infection and rebleeding and improve survival (Cochrane RR 0.79 for mortality). This is the most-forgotten step. Also give the vasoactive drug EARLY (don't wait for the scope to confirm varices).",
   "mcqTrap": "'Transfuse to Hb >90–100 to optimise the cirrhotic' — WRONG and dangerous: over-transfusion raises portal pressure → rebleeding. Restrictive (Hb <70) is even more important in varices.",
   "discriminator": "Variceal vs non-variceal: varices get vasoactive drug + antibiotics + band ligation; non-variceal (ulcer) gets PPI + endoscopic dual therapy. Band ligation > sclerotherapy for oesophageal. Refractory → balloon tamponade (Sengstaken-Blakemore, max ~24h, bridge only) → TIPS (salvage).",
   "redFlags": "Failed endoscopic control / massive ongoing bleed → balloon tamponade as a BRIDGE (airway-protect/intubate first), urgent IR for TIPS. Recurrent variceal bleed despite banding = TIPS.",
   "cutoffs": [
    "Octreotide: 50 mcg IV bolus then 50 mcg/hr (or terlipressin 2mg IV then 1–2mg q4–6h) x 3–5 days",
    "Ceftriaxone IV 1g daily x ~7d (or norfloxacin) — antibiotics mandatory",
    "Transfuse Hb <70 g/L (even stricter in varices)",
    "Band ligation within ~12h",
    "Balloon tamponade max ~24h as bridge"
   ],
   "viva": "Examiner: 'Cirrhotic, haematemesis — name the 3 things you start before the scope.' = vasoactive drug (octreotide/terlipressin) + IV antibiotics + resuscitation. Forgetting antibiotics loses marks.",
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
   "id": "surg-acute-abdomen-35"
  }
 ]
}
);
