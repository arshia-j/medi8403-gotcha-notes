window.GOTCHA = window.GOTCHA || { modules: [] };
window.GOTCHA.modules.push(
{
 "id": "renal",
 "name": "Renal, GU & Electrolytes",
 "category": "Medicine",
 "blurb": "Written-exam + VIVA. AKI/CKD, the electrolyte and acid-base what-first sequences, glomerular disease and stones.",
 "cards": [
  {
   "topic": "AKI: pre-renal vs intrinsic (ATN) vs post-renal — the discriminator panel",
   "subarea": "AKI & CKD",
   "trap": "The classic catch is FeNa: pre-renal FeNa <1% and ATN FeNa >2% — BUT if the patient is on a loop/thiazide diuretic FeNa is FALSELY HIGH, so you MUST use FeUrea instead (pre-renal FeUrea <35%, ATN >50%). Other gotchas: bland urine + high specific gravity + high urine osmolality (>500) = pre-renal; muddy-brown granular/epithelial casts = ATN; raised urea:creatinine ratio only in pre-renal. Post-renal can have ANY urinalysis, so you can NOT exclude obstruction on bloods/urine — only a bladder scan/renal US does that.",
   "whatFirst": "Examine volume status + bladder scan/post-void residual + renal tract US BEFORE labelling intrinsic. Catheterise/scan to exclude retention; review the drug chart for nephrotoxins; only then send urine microscopy and biochemistry.",
   "discriminator": "Urine Na <20 mmol/L + FeNa <1% + osmolality >500 + bland urine = pre-renal. Urine Na >40 + FeNa >2% + iso-osmolar urine + muddy-brown granular casts = ATN. Normal/variable urine + hydronephrosis or high residual = post-renal.",
   "redFlags": "Anuria (suggests complete obstruction, bilateral vascular event or cortical necrosis); palpable bladder; new AKI + rash/eosinophilia/eosinophiluria (interstitial nephritis); AKI + haemoptysis/haematuria (pulmonary-renal syndrome); rapidly rising K+ or refractory acidosis.",
   "mcqTrap": "Choosing FeNa <1% to call pre-renal in a patient on frusemide. The loop diuretic invalidates FeNa — the examiner wants FeUrea. Also tempting: ordering a CT-IVP first for suspected obstruction when a bedside bladder scan + renal ultrasound is the correct, radiation- and contrast-free first step.",
   "viva": "Say out loud: 'I'd assess volume status and exclude obstruction with a bladder scan and renal ultrasound before committing to a cause; I'd review the drug chart for nephrotoxins and send urine microscopy.' Examiner probes how a diuretic confounds FeNa.",
   "source": "Therapeutic Guidelines (eTG) — Acute kidney injury, current 2024; KDIGO AKI Clinical Practice Guideline 2012",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Index</th><th>Pre-renal</th><th>ATN (intrinsic)</th></tr><tr><td>Urine Na (mmol/L)</td><td>&lt;20</td><td>&gt;40</td></tr><tr><td>FeNa</td><td>&lt;1%</td><td>&gt;2%</td></tr><tr><td>FeUrea (on diuretic)</td><td>&lt;35%</td><td>&gt;50%</td></tr><tr><td>Urine osmolality</td><td>&gt;500</td><td>&lt;350 (iso-osmolar)</td></tr><tr><td>Urine sediment</td><td>Bland / hyaline</td><td>Muddy-brown granular casts</td></tr></table>",
   "mnemonic": "Pre-renal = kidney is 'thirsty' so it hoards Na (low urine Na, low FeNa) and concentrates (high osmo). ATN = kidney is 'broken' so it leaks Na and can't concentrate.",
   "tags": [
    "AKI",
    "FeNa",
    "FeUrea",
    "ATN",
    "discriminator"
   ],
   "cutoffs": [
    "FeNa <1% pre-renal, >2% ATN",
    "FeUrea <35% pre-renal (use if on diuretic)",
    "Urine Na <20 pre-renal vs >40 ATN",
    "Urine osmolality >500 pre-renal",
    "BUN:Cr >20:1 pre-renal"
   ],
   "title": "AKI",
   "subtitle": "pre-renal vs intrinsic (ATN) vs post-renal — the discriminator panel",
   "id": "renal-1",
   "images": [
    {
     "src": "assets/img/gastrointestinal_kub_staghorn_calculus_01.jpg",
     "caption": "KUB plain radiograph — staghorn calculus causing post-renal obstruction",
     "alt": "Large branching staghorn calculus filling the renal pelvis as a cause of post-renal AKI",
     "credit": "Nevit Dilmen, Wikimedia Commons, CC BY-SA 3.0"
    }
   ]
  },
  {
   "topic": "AKI staging (KDIGO) — the exact creatinine / urine-output thresholds",
   "subarea": "AKI & CKD",
   "trap": "AKI is defined by ANY of: rise in creatinine >=26.5 micromol/L (>=0.3 mg/dL) within 48 h; OR >=1.5x baseline within 7 days; OR urine output <0.5 mL/kg/h for >=6 h. The easy-to-forget bit is the DUAL criteria and that you stage by the WORSE of creatinine or urine output. Stage 3 includes initiation of RRT regardless of numbers, and (for under-18s) eGFR <35. The 26.5 absolute rise can flag AKI even when the % rise looks trivial.",
   "whatFirst": "Establish a baseline creatinine (look back through old results) before staging — without a baseline you cannot distinguish AKI from CKD or stage it. Then chart hourly urine output.",
   "discriminator": "Stage 1 = 1.5–1.9x baseline or >=26.5 rise, or UO <0.5 mL/kg/h for 6–12 h. Stage 2 = 2.0–2.9x, or UO <0.5 for >=12 h. Stage 3 = >=3.0x or rise to >=353.6 micromol/L (>=4.0 mg/dL) or any RRT, or UO <0.3 for >=24 h or anuria >=12 h.",
   "redFlags": "Anuria; Stage 3; refractory hyperkalaemia/acidosis/overload (need RRT); rising creatinine despite resuscitation.",
   "mcqTrap": "Picking '50% rise in creatinine' as the threshold and ignoring the absolute >=26.5 micromol/L (0.3 mg/dL) rise within 48 h — a small absolute jump still = AKI Stage 1. Also tempting: forgetting urine-output criteria entirely and staging on creatinine alone.",
   "viva": "State the definition crisply: 'AKI is a creatinine rise of 26.5 or more within 48 hours, or 1.5 times baseline within 7 days, or oliguria under 0.5 mL/kg/h for 6 hours — I'd stage by whichever is worse.'",
   "source": "KDIGO Clinical Practice Guideline for AKI 2012 (adopted by eTG, current 2024)",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Stage</th><th>Creatinine</th><th>Urine output</th></tr><tr><td>1</td><td>1.5–1.9x baseline OR >=26.5 micromol/L rise</td><td>&lt;0.5 mL/kg/h for 6–12 h</td></tr><tr><td>2</td><td>2.0–2.9x baseline</td><td>&lt;0.5 mL/kg/h for >=12 h</td></tr><tr><td>3</td><td>>=3.0x OR >=353.6 micromol/L OR any RRT</td><td>&lt;0.3 mL/kg/h >=24 h OR anuria >=12 h</td></tr></table>",
   "mnemonic": "'1.5 in 7, 26.5 in 48' — the two creatinine triggers; stage 1-2-3 mirrors x1.5 / x2 / x3.",
   "tags": [
    "AKI",
    "KDIGO",
    "staging",
    "creatinine",
    "urine output"
   ],
   "cutoffs": [
    "Creatinine rise >=26.5 micromol/L (0.3 mg/dL) in 48 h",
    "≥1.5x baseline in 7 days",
    "UO <0.5 mL/kg/h ≥6 h",
    "Stage 3: ≥3x or ≥353.6 micromol/L (4.0 mg/dL) or any RRT"
   ],
   "title": "AKI staging (KDIGO)",
   "subtitle": "the exact creatinine / urine-output thresholds",
   "id": "renal-2"
  },
  {
   "topic": "CKD definition & staging — eGFR G-categories + ACR A-categories (the 2-axis grid)",
   "subarea": "AKI & CKD",
   "trap": "CKD = eGFR <60 OR markers of kidney damage (e.g. albuminuria, haematuria, structural) PRESENT FOR >=3 MONTHS. The >=3-month chronicity is the most-missed part — a single low eGFR is NOT CKD. Staging needs BOTH axes: G1–G5 (eGFR) AND A1–A3 (ACR). G1 (>=90) and G2 (60–89) are ONLY CKD if a damage marker is present. ACR cut-offs: A1 <3, A2 3–30, A3 >30 mg/mmol — and the sex-specific microalbuminuria threshold is higher in females (>=3.5) than males (>=2.5).",
   "whatFirst": "Confirm chronicity (>=3 months, repeat eGFR/ACR) and stage on BOTH eGFR and ACR before assigning risk colour — never on a single reading.",
   "discriminator": "eGFR 70 with ACR 1 and no damage marker = NOT CKD. eGFR 70 with ACR 5 (A2) for >3 months = CKD G2A2. eGFR 50 = CKD G3a regardless of ACR (eGFR <60 is itself diagnostic).",
   "redFlags": "G4–G5 (eGFR <30); A3 albuminuria (ACR >30); falling eGFR trajectory — these drive referral and the very-high-risk (red) zone.",
   "mcqTrap": "Diagnosing CKD on one isolated eGFR of 55 without confirming the >=3-month criterion — that could be AKI. Also tempting: calling an eGFR of 75 'CKD' when there is no albuminuria or other damage marker (it is not).",
   "viva": "Out loud: 'CKD needs eGFR under 60 or a damage marker like albuminuria, present at least 3 months — I'd repeat to confirm chronicity and stage on both eGFR and ACR.'",
   "source": "Kidney Health Australia — Chronic Kidney Disease Management in Primary Care (CARI), current edition",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>eGFR stage</th><th>mL/min/1.73m2</th></tr><tr><td>G1</td><td>>=90 (CKD only if damage)</td></tr><tr><td>G2</td><td>60–89 (CKD only if damage)</td></tr><tr><td>G3a</td><td>45–59</td></tr><tr><td>G3b</td><td>30–44</td></tr><tr><td>G4</td><td>15–29</td></tr><tr><td>G5</td><td>&lt;15 (kidney failure)</td></tr></table>",
   "mnemonic": "'90-60-45-30-15' marks G1→G5 boundaries; ACR '3 and 30' marks A1/A2/A3.",
   "tags": [
    "CKD",
    "staging",
    "eGFR",
    "ACR",
    "chronicity"
   ],
   "cutoffs": [
    "CKD = eGFR <60 or damage marker, >=3 months",
    "G3a 45–59, G3b 30–44, G4 15–29, G5 <15",
    "ACR A1 <3, A2 3–30, A3 >30 mg/mmol",
    "Microalbuminuria M >=2.5 / F >=3.5 mg/mmol"
   ],
   "title": "CKD definition & staging",
   "subtitle": "eGFR G-categories + ACR A-categories (the 2-axis grid)",
   "id": "renal-3"
  },
  {
   "topic": "CKD risk colours & monitoring frequency — the KHA action grid",
   "subarea": "AKI & CKD",
   "trap": "The KHA heat-map combines eGFR and ACR into Green/Yellow/Orange/Red risk. The forgotten detail is that albuminuria ALONE upgrades risk even with normal-ish eGFR: e.g. G1A3 or G2A3 is already HIGH risk. Monitoring frequency is tied to the colour: low risk = annually; the higher the risk colour, the more frequent (up to 3–4 times/year in the red zone). The eGFR must be reported by the lab whenever creatinine is requested.",
   "whatFirst": "Plot the patient on the eGFR x ACR grid to get the risk colour, then set review frequency and BP/albuminuria targets accordingly.",
   "discriminator": "Two patients with the same eGFR 70 can sit in different colours purely on ACR: A1 = green/low, A3 = high. Risk is NOT eGFR alone.",
   "redFlags": "Red (very high risk) zone — eGFR <30 and/or ACR >30 with low eGFR; rapid eGFR decline — escalate monitoring and refer.",
   "mcqTrap": "Calling a patient 'low risk, review yearly' based on eGFR 65 while ignoring an ACR of 40 (A3) that places them in the high-risk zone needing more frequent review and referral.",
   "viva": "Out loud: 'I'd use the Kidney Health Australia colour grid — albuminuria pushes risk up independently of eGFR, so I'd set review frequency and targets by the colour, not the eGFR alone.'",
   "source": "Kidney Health Australia — Chronic Kidney Disease Management in Primary Care (CARI), current edition",
   "verified": true,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Green = low (review yearly)</span><span class=\"gv-pill\">Yellow = moderate</span><span class=\"gv-pill\">Orange = high</span><span class=\"gv-pill\">Red = very high (3–4x/yr, refer)</span></div>",
   "mnemonic": "'Colour, not number' — albuminuria alone can turn green to orange.",
   "tags": [
    "CKD",
    "risk grid",
    "monitoring",
    "albuminuria",
    "KHA"
   ],
   "cutoffs": [
    "Low risk green → review annually",
    "Very high risk red → review 3–4x/year",
    "ACR >30 (A3) upgrades risk independent of eGFR"
   ],
   "title": "CKD risk colours & monitoring frequency",
   "subtitle": "the KHA action grid",
   "id": "renal-4"
  },
  {
   "topic": "Distinguishing AKI from CKD — the 'is it acute?' clues",
   "subarea": "AKI & CKD",
   "trap": "Without a baseline creatinine the catch is using surrogate clues: small kidneys on US (<9 cm) = chronic; normal/large kidneys = favour acute (exceptions: diabetic nephropathy, amyloid, polycystic, HIV — large kidneys despite chronic). Other CKD pointers: anaemia (normochromic normocytic), hyperphosphataemia with hypocalcaemia + raised PTH (renal bone disease), and a long-standing trend of mildly raised creatinine. Acute-on-chronic is common — a known CKD patient can still have a superimposed AKI.",
   "whatFirst": "Pull historical creatinine/eGFR results and order a renal tract ultrasound (kidney size + obstruction) to date the disease before committing to AKI vs CKD.",
   "discriminator": "Small echogenic kidneys + anaemia + renal bone disease (high PTH, high phosphate, low calcium) = CKD. Normal-size kidneys + no anaemia + acute oliguria = AKI. Big kidneys + 'chronic' picture = diabetes/amyloid/PCKD/HIV.",
   "redFlags": "Acute-on-chronic decompensation; obstruction on US (hydronephrosis); markedly small kidneys signalling irreversibility.",
   "mcqTrap": "Assuming anaemia + raised creatinine always means CKD — acute blood loss or haemolysis can co-exist; and big kidneys do NOT exclude chronic disease (diabetic nephropathy, amyloid, PCKD). Also: forgetting acute-on-chronic.",
   "viva": "Out loud: 'I'd look for old creatinine results and image the kidneys — small echogenic kidneys, anaemia and renal bone disease point to chronicity, but large kidneys can still be chronic in diabetes, amyloid or polycystic disease.'",
   "source": "Therapeutic Guidelines (eTG) — AKI vs CKD, current 2024; Kidney Health Australia CKD handbook",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Clue</th><th>CKD</th><th>AKI</th></tr><tr><td>Kidney size (US)</td><td>Small &lt;9 cm, echogenic</td><td>Normal / large</td></tr><tr><td>Anaemia</td><td>Yes (chronic)</td><td>Usually no</td></tr><tr><td>Ca / PO4 / PTH</td><td>Low Ca, high PO4, high PTH</td><td>Often normal</td></tr><tr><td>Prior creatinine</td><td>Long-standing raised</td><td>Recent rise</td></tr></table>",
   "mnemonic": "Big-kidney chronic causes 'DAPH': Diabetes, Amyloid, Polycystic, HIV.",
   "tags": [
    "AKI vs CKD",
    "kidney size",
    "anaemia",
    "renal bone disease",
    "discriminator"
   ],
   "cutoffs": [
    "Kidney <9 cm = chronic",
    "Big kidneys + chronic = diabetes/amyloid/PCKD/HIV",
    "CKD biochem: low Ca, high PO4, high PTH"
   ],
   "title": "Distinguishing AKI from CKD",
   "subtitle": "the 'is it acute?' clues",
   "id": "renal-5",
   "images": [
    {
     "src": "assets/img/renal_ct_adpkd_fresh.jpg",
     "caption": "CT — ADPKD (large kidneys despite CKD — exception to the small-kidney rule)",
     "alt": "Bilaterally massively enlarged kidneys replaced by innumerable cysts in ADPKD — a cause of CKD with normal or large kidneys",
     "credit": "Steven Fruitsmaak, Wikimedia Commons, CC BY-SA 3.0"
    }
   ]
  },
  {
   "topic": "Hyperkalaemia in AKI — the what-first management sequence (high-yield crossover)",
   "subarea": "AKI & CKD",
   "trap": "The sequence is the exam point, not the drugs: (1) STABILISE the myocardium with IV calcium gluconate 10% 10 mL (or calcium chloride) if ECG changes / K+ >=6.5 — works in minutes, does NOT lower K+; (2) SHIFT K+ intracellularly with insulin (10 units actrapid) + 50 mL 50% dextrose, AND/OR nebulised salbutamol 10–20 mg; (3) REMOVE K+ with dialysis (or resonium/SZC, slow). Sodium bicarbonate only if acidotic. The gotcha: calcium protects but does NOT reduce potassium — and resonium is slow and not for acute control.",
   "whatFirst": "Get an ECG immediately; if peaked T waves/widened QRS or K+ >=6.5, give IV calcium FIRST to stabilise the myocardium, then insulin-dextrose to shift.",
   "discriminator": "Calcium = membrane stabilisation (cardioprotection), no effect on serum K+. Insulin-dextrose / salbutamol = shift (temporary). Dialysis / cation exchangers = actual removal. Distinguish 'stabilise vs shift vs remove'.",
   "redFlags": "ECG changes (peaked T, loss of P, broad QRS, sine wave); K+ >6.5; rapidly rising K+ in oliguric AKI → urgent dialysis (the 'E' of AEIOU).",
   "mcqTrap": "Choosing 'give resonium / sodium polystyrene sulfonate' as the first step for K+ 7 with ECG changes — it is far too slow; IV calcium gluconate to protect the heart is first. Also tempting: insulin-dextrose first without calcium when ECG already shows changes.",
   "viva": "Out loud, ISBAR-style: 'K+ is 7 with peaked T waves — I'm giving 10 mL of 10% calcium gluconate now to stabilise the myocardium, then insulin-dextrose and salbutamol to shift, and I'm calling nephrology/ICU as this may need dialysis.'",
   "source": "Therapeutic Guidelines (eTG) — hyperkalaemia, current 2024",
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">1. STABILISE: IV calcium gluconate 10% 10 mL (ECG changes / K+ >=6.5)</div><div class=\"gv-step\">2. SHIFT: insulin 10 U + 50 mL 50% dextrose +/- salbutamol 10–20 mg neb</div><div class=\"gv-step\">3. REMOVE: dialysis (urgent) +/- SZC/resonium (slow)</div></div>",
   "mnemonic": "'Stabilise → Shift → Remove' (Calcium → Insulin/Salbutamol → Dialysis).",
   "tags": [
    "hyperkalaemia",
    "AKI",
    "what-first",
    "calcium gluconate",
    "insulin-dextrose"
   ],
   "cutoffs": [
    "Calcium if K+ >=6.5 or any ECG change",
    "Insulin 10 U + 50 mL 50% dextrose",
    "Salbutamol 10–20 mg nebulised",
    "Calcium stabilises but does NOT lower K+"
   ],
   "title": "Hyperkalaemia in AKI",
   "subtitle": "the what-first management sequence (high-yield crossover)",
   "id": "renal-6",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_hyperkalaemia.jpg",
     "caption": "ECG — hyperkalaemia (peaked T waves, wide QRS, sine wave)",
     "alt": "Progressive ECG changes of hyperkalaemia including peaked T waves and broadened QRS, indicating when calcium gluconate is urgently needed",
     "credit": "Dr Michael-Joseph F. Agbayani & Dr Eddieson Gonzales, Wikimedia Commons, CC BY 4.0"
    }
   ]
  },
  {
   "topic": "Indications for URGENT dialysis (AEIOU) — the trigger numbers",
   "subarea": "AKI & CKD",
   "trap": "AEIOU = Acidosis, Electrolytes, Intoxication, Overload, Uraemia. The gotcha is the thresholds and that these are REFRACTORY-to-medical-therapy indications: A = severe metabolic acidosis pH <7.1 (or <7.2) not correctable; E = hyperkalaemia K+ >6.5 (or refractory / with ECG changes) despite medical Rx; I = dialysable Intoxications — Salicylates, Lithium, alcohols (methanol/ethylene glycol), Metformin (lactic acidosis), Theophylline, Barbiturates; O = fluid Overload / pulmonary oedema unresponsive to diuretics; U = Uraemia with complications — pericarditis, encephalopathy, or unexplained bleeding (NOT the urea number alone).",
   "whatFirst": "Treat medically FIRST (e.g. for K+: calcium gluconate to protect myocardium, then insulin-dextrose/salbutamol to shift); escalate to RRT only when medical therapy fails or a hard indication is met. Call nephrology/ICU early.",
   "discriminator": "Uraemia indication = the COMPLICATIONS (pericarditis, encephalopathy, bleeding), not a urea threshold. Hyperkalaemia indication = refractory or ECG changes, not just a number. The 'dialysable' property is what distinguishes which intoxications qualify.",
   "redFlags": "Uraemic pericarditis (rub) — emergency dialysis indication; pericardial effusion/tamponade risk. Refractory K+ >6.5 with ECG changes; pH <7.1; flash pulmonary oedema not responding to diuretics.",
   "mcqTrap": "Choosing 'urea >30' or a specific BUN number as the dialysis trigger — uraemia indication is the clinical COMPLICATION (pericarditis/encephalopathy/bleeding), not the urea value. Also tempting: dialysing for hyperkalaemia before giving calcium + insulin-dextrose (medical therapy comes first unless truly refractory).",
   "viva": "Out loud: 'Urgent dialysis is for refractory Acidosis, Electrolytes (K+), Intoxications, fluid Overload, or Uraemic complications — I'd treat medically first and call nephrology; the uraemia trigger is pericarditis or encephalopathy, not the urea number.'",
   "source": "Therapeutic Guidelines (eTG) — AKI / indications for dialysis, current 2024; KDIGO AKI 2012",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>AEIOU</th><th>Refractory trigger</th></tr><tr><td>Acidosis</td><td>pH &lt;7.1–7.2, not correctable</td></tr><tr><td>Electrolytes</td><td>K+ &gt;6.5 refractory / ECG changes</td></tr><tr><td>Intoxication</td><td>Dialysable toxin (Li, salicylate, methanol, ethylene glycol, metformin)</td></tr><tr><td>Overload</td><td>Pulmonary oedema unresponsive to diuretics</td></tr><tr><td>Uraemia</td><td>Pericarditis, encephalopathy, bleeding</td></tr></table>",
   "mnemonic": "AEIOU (vowels). Dialysable toxins = 'I STUMBLED': Isopropanol, Salicylates, Theophylline, Uraemia, Methanol, Barbiturates, Lithium, Ethylene glycol, Depakote/metformin.",
   "tags": [
    "dialysis",
    "AEIOU",
    "hyperkalaemia",
    "uraemia",
    "RRT"
   ],
   "cutoffs": [
    "Acidosis pH <7.1–7.2 refractory",
    "K+ >6.5 refractory or ECG changes",
    "Uraemia = pericarditis/encephalopathy/bleeding (not urea number)",
    "Overload unresponsive to diuretics"
   ],
   "title": "Indications for URGENT dialysis (AEIOU)",
   "subtitle": "the trigger numbers",
   "id": "renal-7"
  },
  {
   "topic": "Iodinated contrast & the kidney — eGFR thresholds, hydration, metformin",
   "subarea": "AKI & CKD",
   "trap": "Contrast-associated AKI risk is now considered LOW and the eGFR fear-threshold has shifted: RANZCR considers risk negligible at eGFR >=45 and low even at 30–45. The action threshold is eGFR <30 (or AKI), where prophylactic IV isotonic fluids are warranted. Metformin: NO need to withhold if eGFR >=30 and no AKI (individualise 30–59); withhold if eGFR <30, AKI present, or intra-arterial contrast — and recheck renal function before restarting. N-acetylcysteine and sodium bicarbonate are NOT recommended (evidence does not support them).",
   "whatFirst": "Screen eGFR (or risk questionnaire) before contrast; if eGFR <30 or AKI, discuss risk/benefit, give IV isotonic saline hydration peri-procedure, and withhold metformin.",
   "discriminator": "eGFR >=45 = essentially no special precaution. eGFR 30–45 = low risk, consider hydration if other risks. eGFR <30 or AKI = highest risk, hydrate + hold metformin + recheck.",
   "redFlags": "Existing AKI (defer non-urgent contrast); eGFR <30; intra-arterial high-volume contrast; combine with other nephrotoxins.",
   "mcqTrap": "Choosing 'give N-acetylcysteine' or 'give sodium bicarbonate' for prophylaxis — both are now NOT recommended; the evidence-based answer is IV isotonic crystalloid hydration. Also tempting: withholding metformin at eGFR 40 with no AKI (unnecessary).",
   "viva": "Out loud: 'At eGFR under 30 I'd hydrate with isotonic saline and withhold metformin until renal function is rechecked; I wouldn't rely on N-acetylcysteine — IV fluids are the proven step.'",
   "source": "RANZCR Iodinated Contrast Media Guideline (v2.3); Therapeutic Guidelines (eTG), current 2024",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>eGFR</th><th>Action</th><th>Metformin</th></tr><tr><td>>=45</td><td>No special precaution</td><td>Continue</td></tr><tr><td>30–45</td><td>Low risk; hydrate if other risk factors</td><td>Continue (individualise)</td></tr><tr><td>&lt;30 or AKI</td><td>IV isotonic hydration; weigh risk/benefit</td><td>Withhold, recheck before restart</td></tr></table>",
   "mnemonic": "'Hydrate, don't NAC-ulate' — fluids work, N-acetylcysteine/bicarb do not.",
   "tags": [
    "contrast",
    "CI-AKI",
    "metformin",
    "RANZCR",
    "hydration"
   ],
   "cutoffs": [
    "eGFR >=45 negligible risk",
    "eGFR <30 or AKI = hydrate + hold metformin",
    "Hold metformin also for intra-arterial contrast",
    "NAC and bicarbonate NOT recommended"
   ],
   "title": "Iodinated contrast & the kidney",
   "subtitle": "eGFR thresholds, hydration, metformin",
   "id": "renal-8"
  },
  {
   "topic": "Nephrotoxins — the drugs to stop in AKI and the 'sick-day' rule",
   "subarea": "AKI & CKD",
   "trap": "The most-missed exam point is the 'sick-day' drug list to WITHHOLD during AKI or acute dehydrating illness: ACE inhibitors/ARBs, NSAIDs, diuretics, metformin and SGLT2 inhibitors. ACEi/ARB cause a PREDICTABLE creatinine rise — a rise up to ~30% from baseline is ACCEPTABLE and you do NOT stop the drug for that alone; review/stop if rise >30% (or eGFR falls >25%) or K+ >=6.0. The 'triple whammy' = ACEi/ARB + diuretic + NSAID is a classic precipitant. Aminoglycosides, vancomycin, amphotericin, calcineurin inhibitors and iodinated contrast are direct tubular toxins.",
   "whatFirst": "On diagnosing AKI, review the drug chart and STOP nephrotoxins and renally-cleared drugs that accumulate; hold metformin (lactic acidosis risk) and SGLT2i. Adjust doses for eGFR.",
   "discriminator": "Predictable <=30% creatinine rise after starting/uptitrating ACEi/ARB = expected haemodynamic effect (efferent dilation), continue + recheck. >30% rise or K+ >=6.0 = stop and investigate (e.g. bilateral renal artery stenosis).",
   "redFlags": "Creatinine rise >30% or K+ >=6.0 after ACEi/ARB; suspect bilateral renal artery stenosis if marked AKI on starting ACEi. Lactic acidosis in a metformin patient with AKI.",
   "mcqTrap": "Stopping the ACE inhibitor because creatinine rose 20% — the trap; up to ~30% is acceptable and expected, so the correct answer is continue and monitor. Also tempting: continuing metformin through an AKI/contrast study (lactic acidosis risk).",
   "viva": "Out loud: 'I'd apply sick-day rules and withhold the ACE inhibitor, NSAID, diuretic, metformin and SGLT2 inhibitor; an ACEi creatinine rise up to about 30% is acceptable so I wouldn't stop for a smaller bump.'",
   "source": "Therapeutic Guidelines (eTG) — drugs and the kidney / AKI, current 2024; Kidney Health Australia sick-day action plan",
   "verified": true,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">ACEi / ARB</span><span class=\"gv-pill\">Diuretics</span><span class=\"gv-pill\">Metformin</span><span class=\"gv-pill\">NSAIDs</span><span class=\"gv-pill\">SGLT2i</span></div>",
   "mnemonic": "Sick-day 'DAMN-S': Diuretics, ACEi/ARB, Metformin, NSAIDs, SGLT2 inhibitors — withhold during acute illness/AKI.",
   "tags": [
    "nephrotoxins",
    "sick-day rules",
    "ACEi",
    "triple whammy",
    "metformin"
   ],
   "cutoffs": [
    "ACEi/ARB: up to ~30% creatinine rise acceptable",
    "Stop ACEi/ARB if rise >30% or K+ >=6.0",
    "Triple whammy = ACEi/ARB + diuretic + NSAID"
   ],
   "title": "Nephrotoxins",
   "subtitle": "the drugs to stop in AKI and the 'sick-day' rule",
   "id": "renal-9"
  },
  {
   "topic": "Urinalysis in AKI — reading the sediment and dipstick",
   "subarea": "AKI & CKD",
   "trap": "Dipstick 'blood' positive but microscopy shows NO red cells = myoglobinuria (rhabdomyolysis) or haemoglobinuria, not haematuria — the gotcha that flags rhabdo. Dipstick is also falsely negative for albuminuria in tubular/overflow proteinuria (it detects albumin, not light chains — so a negative dipstick with heavy proteinuria on lab = myeloma cast nephropathy / Bence-Jones). Specific casts: RBC casts = glomerulonephritis; WBC casts = pyelonephritis or interstitial nephritis; muddy-brown granular casts = ATN; broad waxy casts = chronic disease.",
   "whatFirst": "Send a FRESH spun urine for microscopy yourself if cause is unclear — sediment degrades within ~1 h. If dipstick blood positive but no RBCs, send CK and check for rhabdomyolysis.",
   "discriminator": "RBC casts + dysmorphic RBCs + proteinuria = glomerular (nephritic). Heavy bland proteinuria + lipiduria/oval fat bodies = nephrotic. Sterile pyuria + WBC casts + eosinophiluria = acute interstitial nephritis. Dipstick-blood-positive but RBC-negative = myo/haemoglobinuria.",
   "redFlags": "RBC casts + AKI = rapidly progressive GN — urgent nephrology + likely biopsy. Anuria with bland urine = obstruction or vascular catastrophe.",
   "mcqTrap": "Interpreting positive dipstick blood as haematuria and ordering a cystoscopy, when absent RBCs on microscopy points to rhabdomyolysis (check CK). Equally tempting: trusting a negative albumin dipstick to exclude myeloma — it misses light chains.",
   "viva": "Out loud: 'A positive blood dipstick with no red cells on microscopy makes me think myoglobin — I'd send a CK and look for a crush/immobility history,' or 'red-cell casts mean glomerular bleeding and I'd escalate for biopsy.'",
   "source": "Therapeutic Guidelines (eTG) — investigation of AKI, current 2024; RACGP urinalysis guidance",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><tr><th>Cast / finding</th><th>Points to</th></tr><tr><td>RBC casts, dysmorphic RBCs</td><td>Glomerulonephritis (nephritic)</td></tr><tr><td>Muddy-brown granular casts</td><td>ATN</td></tr><tr><td>WBC casts + eosinophiluria</td><td>Acute interstitial nephritis</td></tr><tr><td>Oval fat bodies, lipiduria</td><td>Nephrotic syndrome</td></tr><tr><td>Dip blood +ve, microscopy RBC -ve</td><td>Myoglobin / haemoglobin</td></tr></table>",
   "mnemonic": "'Blood on dip, no cells on slide → think muscle (myoglobin), not bladder.'",
   "tags": [
    "urinalysis",
    "casts",
    "rhabdomyolysis",
    "dipstick",
    "AKI"
   ],
   "cutoffs": [
    "Spun urine within ~1 h (sediment degrades)",
    "Dip blood +ve / RBC -ve → check CK for rhabdo"
   ],
   "title": "Urinalysis in AKI",
   "subtitle": "reading the sediment and dipstick",
   "id": "renal-10",
   "images": [
    {
     "src": "assets/img/haematology_film_schistocytes_hus_fresh.jpg",
     "caption": "Blood film — schistocytes indicating microangiopathic haemolytic anaemia (HUS as cause of AKI)",
     "alt": "Red cell fragments (schistocytes/helmet cells) on blood film indicating TMA/HUS, a cause of AKI with abnormal urinary sediment",
     "credit": "Erhabor Osaro (Associate Professor), Wikimedia Commons, CC BY-SA 3.0"
    }
   ]
  },
  {
   "topic": "When to refer CKD to nephrology — the exact Australian triggers",
   "subarea": "AKI & CKD",
   "trap": "Memorise the KHA referral triggers as discrete numbers: (1) eGFR <30 (any cause); (2) persistent ACR >=30 mg/mmol (macroalbuminuria/A3) unexplained; (3) a sustained eGFR fall of >5 mL/min over 6 months (confirmed on >=3 readings) OR a deterioration of >25% (or >15 mL/min) over 12 months; (4) CKD + hypertension uncontrolled despite >=3 agents; (5) glomerular haematuria with macroalbuminuria; (6) suspected genetic/hereditary kidney disease. The single most-missed: refer at eGFR <30 even if stable and asymptomatic — to allow timely transplant/dialysis planning.",
   "whatFirst": "Confirm the trigger is sustained (repeat eGFR/ACR), exclude reversible/AKI causes, then refer with trend data — not a single value.",
   "discriminator": "Stable eGFR 35 with ACR 2 and controlled BP = manage in primary care with monitoring. eGFR 28, OR ACR 45, OR a >5 mL/min fall over 6 months = refer.",
   "redFlags": "eGFR <30; rapidly declining eGFR; resistant hypertension on >=3 drugs; haematuria + macroalbuminuria (GN) — urgent referral.",
   "mcqTrap": "Choosing 'refer all CKD stage 3' — too broad; stable G3a/G3b with low ACR and controlled BP stays in primary care. The trigger is <30, A3, fast decline, or resistant HTN. Conversely, not referring a stable eGFR 28 because the patient feels well.",
   "viva": "Out loud: 'I'd refer for eGFR under 30, unexplained macroalbuminuria, a sustained fall over 5 mL/min in 6 months, or resistant hypertension — referring stable eGFR under 30 early allows transplant and dialysis planning.'",
   "source": "Kidney Health Australia — Chronic Kidney Disease Management in Primary Care (CARI), current edition",
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">eGFR &lt;30</div><div class=\"gv-step\">ACR >=30 (A3) unexplained</div><div class=\"gv-step\">eGFR fall >5 in 6 mo or >25% in 12 mo</div><div class=\"gv-step\">HTN resistant to >=3 agents</div><div class=\"gv-step\">Haematuria + macroalbuminuria → refer</div></div>",
   "mnemonic": "'30, 30, 3' — eGFR <30, ACR >30, OR uncontrolled BP on 3 drugs.",
   "tags": [
    "CKD",
    "referral",
    "nephrology",
    "eGFR <30",
    "macroalbuminuria"
   ],
   "cutoffs": [
    "eGFR <30 → refer (even if stable)",
    "Persistent ACR >=30 mg/mmol",
    "eGFR fall >5 mL/min/6 mo or >25% in 12 mo",
    "HTN uncontrolled on >=3 agents"
   ],
   "title": "When to refer CKD to nephrology",
   "subtitle": "the exact Australian triggers",
   "id": "renal-11"
  },
  {
   "topic": "Anion gap & ABG/VBG: calculate the gap, then the DELTA RATIO to catch the hidden second disorder",
   "subarea": "Electrolytes & acid-base",
   "whatFirst": "On every metabolic acidosis: (1) calculate anion gap = Na - (Cl + HCO3); (2) CORRECT the gap for albumin (gap falls ~2.5 mmol/L per 10 g/L albumin below 40 - hypoalbuminaemia masks a raised gap); (3) check respiratory compensation with Winter's formula; (4) calculate the DELTA RATIO to unmask a coexisting metabolic disorder.",
   "trap": "Stopping at 'high anion gap metabolic acidosis' and missing a SECOND concurrent disorder. A normal albumin-corrected gap does not exclude a HAGMA in a hypoalbuminaemic patient. And inadequate or excessive respiratory compensation means a mixed picture - Winter's formula tells you if there is an additional respiratory acid-base problem.",
   "discriminator": "HAGMA causes: GOLD MARK (Glycols, Oxoproline/paracetamol, L-lactate, D-lactate, Methanol, Aspirin, Renal/uraemia, Ketoacidosis). NAGMA causes: diarrhoea, RTA, acetazolamide, ureteroenterostomy, pancreatic fistula. Delta ratio distinguishes pure vs mixed. VBG vs ABG: pH and HCO3 agree well; venous pCO2 runs ~5-6 mmHg higher with wide limits - unreliable for precise ventilation, but a venous pCO2 <45 reliably screens out hypercarbia.",
   "cutoffs": [
    "Normal anion gap 8-12 mmol/L (4-12 if K+ included); albumin-correct: add 2.5 per 10 g/L below 40",
    "Winter's: expected pCO2 (mmHg) = 1.5 x HCO3 + 8 (+/- 2)",
    "Delta ratio = (AG - 12) / (24 - HCO3): <0.4 pure NAGMA; 0.4-0.8 mixed NAGMA+HAGMA; 0.8-2.0 pure HAGMA; >2.0 HAGMA + metabolic alkalosis (or pre-existing high HCO3)",
    "Venous pCO2 ~5-6 mmHg > arterial; VBG HCO3/pH reliable, venous pCO2 <45 mmHg screens out hypercarbia"
   ],
   "redFlags": "Measured pCO2 HIGHER than Winter's predicts = concurrent respiratory acidosis (tiring/failing respiratory effort) -> consider ventilatory support. A 'normal' gap in a sick hypoalbuminaemic patient may hide a significant HAGMA. Raised osmolar gap + HAGMA = toxic alcohol (methanol/ethylene glycol) -> urgent.",
   "viva": "Out loud, narrate the system: 'pH, then is it respiratory or metabolic, then anion gap corrected for albumin, then Winter's formula for compensation, then the delta ratio to look for a second process.' Examiner probes GOLD MARK for HAGMA and why you'd albumin-correct the gap in an ICU patient.",
   "mcqTrap": "Labelling a DKA patient as 'pure HAGMA' when the delta ratio is >2 - that signals a coexisting metabolic alkalosis (e.g. from vomiting). Or trusting a venous pCO2 to exclude respiratory failure in a deteriorating asthmatic - an ABG is needed for accurate pCO2 when ventilation is the question.",
   "mnemonic": "HAGMA = GOLD MARK; NAGMA = USED CARP (Ureterostomy, Saline excess, Endocrine/Addison's, Diarrhoea, Carbonic anhydrase inhibitor, Ammonium chloride, RTA, Pancreatic fistula).",
   "visualHtml": "<table class=\"gv-table\"><tr><th>Delta ratio</th><th>Interpretation</th></tr><tr><td>&lt;0.4</td><td>Pure NAGMA</td></tr><tr><td>0.4-0.8</td><td>Mixed NAGMA + HAGMA</td></tr><tr><td>0.8-2.0</td><td>Pure HAGMA</td></tr><tr><td>&gt;2.0</td><td>HAGMA + metabolic alkalosis (or high baseline HCO3)</td></tr></table><div class=\"gv-pills\"><span class=\"gv-pill\">AG = Na - (Cl + HCO3), normal 8-12</span><span class=\"gv-pill\">Winter's: pCO2 = 1.5xHCO3 + 8</span><span class=\"gv-pill\">Albumin-correct the gap</span></div>",
   "source": "LITFL CCC Acid-Base & VBG vs ABG (current); Deranged Physiology (CICM) delta gap/ratio",
   "tags": [
    "anion-gap",
    "ABG",
    "VBG",
    "delta-ratio",
    "Winters-formula",
    "metabolic-acidosis",
    "HAGMA",
    "NAGMA"
   ],
   "verified": true,
   "title": "Anion gap & ABG/VBG",
   "subtitle": "calculate the gap, then the DELTA RATIO to catch the hidden second disorder",
   "id": "renal-12"
  },
  {
   "topic": "Hyperkalaemia: IV calcium FIRST, then shift, then remove (the sequence gotcha)",
   "subarea": "Electrolytes & acid-base",
   "whatFirst": "If ANY ECG change OR K+ >=6.5 mmol/L: give IV calcium FIRST to stabilise the myocardium (10 mL of 10% calcium gluconate over 2-5 min; or 10 mL of 10% calcium chloride via central line). THEN shift K+ intracellularly (insulin-dextrose +/- salbutamol). THEN remove K+ (dialysis, resonium, treat cause / stop ACEi-ARB-K-sparing diuretics). Calcium does NOT lower K+ - it buys 30-60 min.",
   "trap": "Reaching for insulin-dextrose or salbutamol first when the ECG is already abnormal. Shifting K+ does nothing to protect the heart in the first minutes - the patient can arrest while you wait for insulin to work. Calcium is the membrane stabiliser and must go in first.",
   "discriminator": "Calcium gluconate (peripheral-safe, 2.2 mmol Ca per 10 mL) vs calcium chloride (3x more elemental Ca, 6.8 mmol per 10 mL, but causes tissue necrosis if extravasated - central line only, reserve for arrest/peri-arrest). Repeat calcium dose if ECG changes persist after 5-10 min.",
   "cutoffs": [
    "Mild 5.5-5.9; moderate 6.0-6.4; severe >=6.5 mmol/L (no single agreed scheme; LITFL uses severe >=7.0)",
    "Give calcium if ANY ECG change OR K+ >=6.5 regardless of ECG",
    "Calcium gluconate 10%: 10 mL (2.2 mmol Ca) over 2-5 min, onset <3 min, lasts 30-60 min",
    "Calcium chloride 10%: 6.8 mmol Ca/10 mL (3x gluconate) - central line only",
    "Insulin-dextrose: 10 units Actrapid + 50 mL of 50% glucose, lowers K+ ~0.65-1 mmol/L/hr",
    "Salbutamol 10-20 mg nebulised (LITFL: 20 mg neb) or 0.5 mg IV"
   ],
   "redFlags": "Loss of P waves, widening QRS, sine-wave pattern = imminent VF/arrest - call for help, continuous cardiac monitoring, expedite calcium and dialysis referral. Recheck BSL hourly after insulin (hypoglycaemia is the most common iatrogenic harm - give ongoing dextrose if BSL trends down).",
   "viva": "Out loud: 'My immediate priority is a 12-lead ECG and cardiac monitoring; if there are any hyperkalaemic ECG changes I give IV calcium gluconate first to stabilise the membrane, then insulin-dextrose to shift potassium, then address removal and the underlying cause.' ISBAR escalation to renal/ICU for dialysis if anuric or refractory.",
   "mcqTrap": "'Give 10 units insulin with 50 mL 50% dextrose' offered as the single best FIRST step in a patient with peaked T waves and broad QRS. Tempting because it lowers the number - but it does not protect the heart. Calcium gluconate is the correct first action when ECG changes are present.",
   "mnemonic": "C BIG K Drop: Calcium, Bicarb (if acidotic), Insulin+Glucose, Kayexalate/dialysis - and Calcium is always step 1 when the ECG is abnormal.",
   "visualHtml": "<table class=\"gv-table\"><tr><th>Step</th><th>Drug</th><th>Effect</th><th>Onset/Duration</th></tr><tr><td>1. STABILISE</td><td>Ca gluconate 10% 10 mL</td><td>Protects myocardium (does NOT lower K)</td><td>&lt;3 min / 30-60 min</td></tr><tr><td>2. SHIFT</td><td>Insulin 10u + 50 mL 50% glucose</td><td>Drives K into cells</td><td>15-30 min / up to 6 hr</td></tr><tr><td>2. SHIFT</td><td>Salbutamol 10-20 mg neb</td><td>Drives K into cells</td><td>15-30 min</td></tr><tr><td>3. REMOVE</td><td>Resonium / dialysis / stop offending drugs</td><td>Lowers total body K</td><td>Hours</td></tr></table>",
   "source": "Therapeutic Guidelines (eTG, current) - Hyperkalaemia; LITFL CCC Hyperkalaemia Management (current)",
   "tags": [
    "hyperkalaemia",
    "ECG",
    "what-first",
    "emergency",
    "potassium"
   ],
   "verified": true,
   "title": "Hyperkalaemia",
   "subtitle": "IV calcium FIRST, then shift, then remove (the sequence gotcha)",
   "id": "renal-13",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_hyperkalaemia.jpg",
     "caption": "ECG — hyperkalaemia (peaked T waves, widened QRS — the indication for IV calcium first)",
     "alt": "ECG changes of hyperkalaemia demonstrating the cardiac emergency that mandates IV calcium gluconate before any potassium-shifting agent",
     "credit": "Dr Michael-Joseph F. Agbayani & Dr Eddieson Gonzales, Wikimedia Commons, CC BY 4.0"
    }
   ]
  },
  {
   "topic": "Hyperkalaemia: spot the SPURIOUS result before you treat (the pseudohyperkalaemia gotcha)",
   "subarea": "Electrolytes & acid-base",
   "whatFirst": "In a WELL patient with an unexpectedly high K+ and a NORMAL ECG, consider pseudohyperkalaemia and repeat the sample (free-flowing, minimal tourniquet, prompt analysis) before committing to treatment. But if the patient is unwell or the ECG is abnormal, treat first and ask questions later - never delay calcium for a recheck if the ECG is changing.",
   "trap": "Treating a haemolysed or delayed sample. Pseudohyperkalaemia from haemolysis, fist-clenching/prolonged tourniquet, marked thrombocytosis or leucocytosis, or delayed processing can give a high K+ with no ECG changes - aggressive treatment then causes iatrogenic HYPOkalaemia.",
   "discriminator": "Pseudohyperkalaemia: high K+, NORMAL ECG, lab notes haemolysis, well patient -> repeat. True hyperkalaemia: ECG changes, oliguria/AKI/CKD, relevant drugs (ACEi/ARB, spironolactone, trimethoprim, NSAIDs), acidosis, tumour lysis, rhabdomyolysis. A plasma (not serum) sample avoids the clot-related platelet release seen in thrombocytosis.",
   "cutoffs": [
    "Repeat if K+ raised but ECG normal and patient well, with no renal/drug cause",
    "Severe true hyperkalaemia >=6.5 mmol/L or any ECG change -> treat immediately",
    "Common culprit drugs: ACEi/ARB, K-sparing diuretics, trimethoprim, NSAIDs, heparin"
   ],
   "redFlags": "Do NOT use a normal ECG to reassure yourself in a patient with AKI/anuria and a high K+ - ECG changes correlate poorly with the level and arrest can occur with a 'normal' trace. When in doubt with a sick patient, treat. Recheck the K+ after treatment to avoid overshoot into hypokalaemia.",
   "viva": "Out loud: 'If the patient is well and the ECG is normal, I'd consider a spurious result from haemolysis or sample handling and repeat it, but I would never delay calcium in a patient with ECG changes or who looks unwell - the cost of treating a true hyperkalaemia I assumed was spurious is far higher.'",
   "mcqTrap": "'Immediately give calcium gluconate and insulin-dextrose' for a well outpatient with K+ 6.2, a normal ECG, a haemolysed sample flag, and no renal impairment - the trap is treating the number. The best answer is to repeat the sample correctly first.",
   "mnemonic": "Spurious K+ = the 3 H's of the sample: Haemolysis, Hand-clenching (tourniquet), and Hold-up (delayed processing) - plus high platelets/WCC.",
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">High K+ reported</div><div class=\"gv-step\">ECG changes OR patient unwell? -> TREAT NOW (Ca first)</div><div class=\"gv-step\">Well + normal ECG + no renal/drug cause + haemolysis flag -> repeat sample</div></div>",
   "source": "LITFL CCC Hyperkalaemia (current); eTG (current) - hyperkalaemia",
   "tags": [
    "hyperkalaemia",
    "pseudohyperkalaemia",
    "haemolysis",
    "spurious",
    "ECG"
   ],
   "verified": true,
   "title": "Hyperkalaemia",
   "subtitle": "spot the SPURIOUS result before you treat (the pseudohyperkalaemia gotcha)",
   "id": "renal-14"
  },
  {
   "topic": "Hypernatraemia: it is a WATER problem - correct the deficit slowly (mirror-image ODS trap)",
   "subarea": "Electrolytes & acid-base",
   "whatFirst": "FIRST restore circulating volume if shocked/hypovolaemic with 0.9% saline (relative to hypertonic plasma, normal saline is effectively hypotonic and won't worsen it). THEN, once perfused, replace the free water deficit with hypotonic fluid (5% dextrose, 0.45% saline, or enteral water). Always look for and treat the cause (diabetes insipidus, GI/renal losses, inadequate intake).",
   "trap": "Correcting too fast. In chronic hypernatraemia the brain has generated idiogenic osmoles; rapid lowering of sodium drives water INTO brain cells -> cerebral oedema, seizures, death. The mirror image of the hyponatraemia ODS trap. Cap the fall at ~10 mmol/L per 24 hr (0.5 mmol/L/hr).",
   "discriminator": "Hypovolaemic hypernatraemia (water loss > Na loss: vomiting, diarrhoea, osmotic diuresis) vs euvolaemic (pure water loss: diabetes insipidus, fever) vs hypervolaemic (Na gain: hypertonic saline, NaHCO3, Conn's). DI: large volumes of dilute urine (urine osm low) despite high serum Na -> water deprivation test / desmopressin response distinguishes central vs nephrogenic.",
   "cutoffs": [
    "Hypernatraemia Na >145 mmol/L (RCH paediatric threshold >=146)",
    "Max correction rate <=10-12 mmol/L per 24 hr (0.5 mmol/L/hr) - RCH",
    "Free water deficit (L) = TBW x (Na/140 - 1); TBW = 0.6 x kg (male) / 0.5 (female/elderly)",
    "0.45% saline = 50% free water; 0.9% saline = 0% free water; 5% dextrose = 100% free water",
    "Recheck Na 1-2 hr after starting, then 4-6 hourly"
   ],
   "redFlags": "Falling Na faster than 0.5 mmol/L/hr -> slow or stop the hypotonic fluid (cerebral oedema risk). Large dilute urine output not matching intake = ongoing DI losses; replace concurrently or the Na won't budge. New seizure during correction = over-rapid drop -> reassess fluid.",
   "viva": "Out loud: 'Hypernatraemia is almost always a water deficit. I'd resuscitate with normal saline if hypovolaemic, then calculate and replace the free water deficit with hypotonic fluid, aiming to drop the sodium no faster than about 10 mmol/L over 24 hours to avoid cerebral oedema, while treating the cause - and I'd consider diabetes insipidus if the urine is inappropriately dilute.'",
   "mcqTrap": "'Rapidly correct with 5% dextrose to normalise sodium quickly' - causes cerebral oedema in chronic hypernatraemia. Also tempting: withholding all fluids in a hypovolaemic shocked patient because 'their sodium is already high' - you still resuscitate with 0.9% saline first; perfusion before precision.",
   "mnemonic": "Free water deficit = TBW x (current Na / 140 - 1). And remember 0.9% saline provides ZERO free water - use hypotonic fluid for the deficit.",
   "visualHtml": "<table class=\"gv-table\"><tr><th>Fluid</th><th>% free water</th><th>Use</th></tr><tr><td>5% dextrose</td><td>100%</td><td>Replace water deficit (euvolaemic)</td></tr><tr><td>0.45% saline</td><td>50%</td><td>Deficit + some volume</td></tr><tr><td>0.9% saline</td><td>0%</td><td>Resuscitate hypovolaemia FIRST</td></tr></table><div class=\"gv-pills\"><span class=\"gv-pill\">Max fall <span class=\"gv-num\">~10 mmol/L/24h</span></span><span class=\"gv-pill\">Dilute urine + high Na = think DI</span></div>",
   "source": "RCH Clinical Practice Guidelines - Hypernatraemia (current); eTG (current) - fluid & electrolyte therapy",
   "tags": [
    "hypernatraemia",
    "free-water-deficit",
    "cerebral-oedema",
    "diabetes-insipidus",
    "rate-of-correction"
   ],
   "verified": true,
   "title": "Hypernatraemia",
   "subtitle": "it is a WATER problem - correct the deficit slowly (mirror-image ODS trap)",
   "id": "renal-15"
  },
  {
   "topic": "Hypocalcaemia: ALWAYS correct for albumin; IV calcium for tetany/seizure/long QT; rule out the magnesium",
   "subarea": "Electrolytes & acid-base",
   "whatFirst": "First confirm it is real: calculate CORRECTED calcium (or measure ionised Ca) - low albumin gives a falsely low total calcium with normal ionised calcium. If genuinely low AND symptomatic (tetany, seizures, laryngospasm, arrhythmia/long QT): IV calcium gluconate FIRST (10 mL of 10% over 10 min, then infusion). Check and replace magnesium - hypomagnesaemia causes refractory hypocalcaemia.",
   "trap": "Treating a low total calcium that is actually just hypoalbuminaemia (ionised Ca normal -> no treatment needed). Conversely, missing that alkalosis (e.g. hyperventilation) lowers IONISED calcium with a normal total - causing tetany despite a 'normal' calcium on the panel.",
   "discriminator": "Corrected Ca = measured Ca + 0.02 x (40 - albumin g/L). Use IONISED calcium when albumin is abnormal, in critical illness, or in acid-base disturbance (it is the physiologically active fraction). Post-thyroidectomy/parathyroidectomy hypocalcaemia (hungry bone) vs autoimmune hypoPTH vs vitamin D deficiency vs CKD - check PTH, phosphate, vitamin D, Mg.",
   "cutoffs": [
    "Corrected Ca normal ~2.2-2.6 mmol/L; ionised Ca normal ~1.15-1.30 mmol/L (lab-dependent)",
    "Correction: add 0.02 mmol/L Ca for every 1 g/L albumin below 40",
    "Severe/symptomatic: IV calcium gluconate 10% 10 mL (2.2 mmol) over 10 min",
    "QTc >0.44 s (440 ms) = at risk of torsades",
    "Always check Mg - replace if <0.7 mmol/L before expecting Ca to correct"
   ],
   "redFlags": "Stridor/laryngospasm, seizures, prolonged QT with arrhythmia = emergency IV calcium. Positive Chvostek (facial tap -> twitch) or Trousseau (BP cuff -> carpopedal spasm) sign = neuromuscular irritability. Use calcium gluconate peripherally; calcium chloride only centrally (necrotic if extravasated).",
   "viva": "Out loud: 'Before treating I correct the calcium for albumin or get an ionised level, because hypoalbuminaemia and alkalosis both confound the total calcium. If symptomatic I give IV calcium gluconate and crucially check magnesium, since hypomagnesaemia makes hypocalcaemia refractory to calcium replacement.' Examiner probes Chvostek/Trousseau and the QT.",
   "mcqTrap": "'Give IV calcium' for an asymptomatic patient whose LOW total calcium is fully explained by hypoalbuminaemia (normal corrected/ionised Ca) - no treatment needed. Other trap: giving calcium and stopping there in refractory hypocalcaemia without replacing the coexisting magnesium.",
   "mnemonic": "CATs go numb: Convulsions, Arrhythmias (long QT), Tetany, numbness/paraesthesia. And 'correct for albumin: 0.02 up per gram down from 40.'",
   "visualHtml": "<table class=\"gv-table\"><tr><th>Measure</th><th>Normal</th><th>Note</th></tr><tr><td>Corrected Ca</td><td>2.2-2.6 mmol/L</td><td>= Ca + 0.02 x (40 - albumin)</td></tr><tr><td>Ionised Ca</td><td>~1.15-1.30 mmol/L</td><td>True active fraction; use if albumin/pH abnormal</td></tr><tr><td>QTc</td><td>&lt;0.44 s</td><td>&gt;0.44 = torsades risk</td></tr></table><div class=\"gv-pills\"><span class=\"gv-pill\">Always check Mg</span><span class=\"gv-pill\">Alkalosis lowers ionised Ca</span></div>",
   "source": "eTG (current) - calcium disorders / hypocalcaemia; Australian Prescriber (PPI-associated hypomagnesaemia & hypocalcaemia)",
   "tags": [
    "hypocalcaemia",
    "corrected-calcium",
    "ionised-calcium",
    "QTc",
    "magnesium",
    "tetany"
   ],
   "verified": false,
   "title": "Hypocalcaemia",
   "subtitle": "ALWAYS correct for albumin; IV calcium for tetany/seizure/long QT; rule out the magnesium",
   "id": "renal-16"
  },
  {
   "topic": "Hypomagnesaemia: the HIDDEN cause of refractory hypokalaemia, hypocalcaemia and torsades",
   "subarea": "Electrolytes & acid-base",
   "whatFirst": "If you cannot correct a potassium or a calcium despite replacement -> check and replace MAGNESIUM first. Low Mg promotes renal K+ wasting (via ROMK channel disinhibition) and impairs PTH release/action -> both K+ and Ca2+ stay low until Mg is repleted. In torsades de pointes, give IV magnesium regardless of the level.",
   "trap": "Flogging potassium into a patient with refractory hypokalaemia while ignoring the magnesium - the K+ will not stay corrected. Mg deficiency can also exist with a 'normal-ish' serum Mg because most magnesium is intracellular; suspect it clinically in alcoholics, diarrhoea, PPI use, diuretics, and aminoglycosides.",
   "discriminator": "Hypomagnesaemia-driven hypokalaemia: K+ refractory to replacement until Mg given vs primary hypokalaemia which responds. Causes: GI (diarrhoea, PPI - long-term PPIs cause hypomagnesaemia), renal (loop/thiazide diuretics, alcohol, aminoglycosides, cisplatin, calcineurin inhibitors). Check a urinary Mg / fractional excretion to distinguish renal from GI loss if cause unclear.",
   "cutoffs": [
    "Normal Mg ~0.7-1.0 mmol/L; replace if <0.7 (treat if symptomatic even when borderline)",
    "Severe/symptomatic IV: ~5 g (20 mmol) MgSO4; mild 1-5 g (4-20 mmol) per level",
    "Torsades: 2 g (8 mmol) MgSO4 IV over a few minutes regardless of level",
    "Give Mg SLOWLY (rapid bolus -> flushing, hypotension, areflexia); reduce dose in renal impairment",
    "Recheck Mg, K+ and Ca after replacement"
   ],
   "redFlags": "Torsades de pointes / polymorphic VT -> IV magnesium is the antiarrhythmic of choice, give immediately. In renal impairment, magnesium accumulates -> monitor for loss of deep tendon reflexes (early sign of hypermagnesaemia toxicity) and respiratory depression. Long-term PPI users with cramps/arrhythmia: think drug-induced hypomagnesaemia.",
   "viva": "Out loud: 'When potassium or calcium won't correct, I always check magnesium, because hypomagnesaemia drives renal potassium wasting and impairs PTH, so both stay low until I replace the magnesium - and in torsades, magnesium is my first-line antiarrhythmic irrespective of the serum level.'",
   "mcqTrap": "'Give more IV potassium' for a hypokalaemia that won't correct - the trap; the answer is replace magnesium. In a torsades stem, 'give amiodarone/lignocaine' is tempting but IV magnesium is the correct first drug.",
   "mnemonic": "Low Mg = the 'silent partner': you can't fix the K or the Ca until you fix the Mg.",
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Refractory hypokalaemia OR hypocalcaemia?</div><div class=\"gv-step\">Check serum magnesium</div><div class=\"gv-step\">Low (or suspect intracellular depletion) -> replace Mg</div><div class=\"gv-step\">Now K+ and Ca2+ will correct</div></div><div class=\"gv-pills\"><span class=\"gv-pill\">Torsades -> IV Mg 2 g now</span><span class=\"gv-pill\">Long-term PPI = a cause</span></div>",
   "source": "eTG (current) - magnesium / electrolyte disorders; Australian Prescriber 'PPI-associated hypomagnesaemia and hypocalcaemia'; RCH CPG Hypomagnesaemia",
   "tags": [
    "hypomagnesaemia",
    "refractory-hypokalaemia",
    "torsades",
    "PPI",
    "magnesium"
   ],
   "verified": false,
   "title": "Hypomagnesaemia",
   "subtitle": "the HIDDEN cause of refractory hypokalaemia, hypocalcaemia and torsades",
   "id": "renal-17",
   "images": [
    {
     "src": "assets/img/cardiology_ecg_torsades_polymorphic_vt_01.jpg",
     "caption": "ECG — Torsades de pointes (polymorphic VT in hypomagnesaemia/long QT)",
     "alt": "Torsades de pointes — the polymorphic ventricular tachycardia triggered by hypomagnesaemia and prolonged QT, treated with IV magnesium",
     "credit": "CardioNetworks (ECGpedia), Wikimedia Commons, CC BY-SA 3.0"
    }
   ]
  },
  {
   "topic": "Hyponatraemia: SIADH is a diagnosis of EXCLUSION needing EUVOLAEMIA + the urine numbers",
   "subarea": "Electrolytes & acid-base",
   "whatFirst": "First confirm TRUE hypotonic hyponatraemia: check serum osmolality (must be LOW, <275 mOsm/kg) to exclude pseudohyponatraemia (hyperlipidaemia/paraproteins - normal osm) and hypertonic/translocational hyponatraemia (hyperglycaemia - high osm). THEN assess volume status. THEN urine osmolality and urine sodium.",
   "trap": "Calling it SIADH without first excluding hypothyroidism, adrenal insufficiency (cortisol), and diuretic use - all mimic SIADH. SIADH requires the patient be clinically EUVOLAEMIC with NO diuretics in the prior week and normal thyroid/adrenal function. It is a diagnosis of exclusion.",
   "discriminator": "SIADH: euvolaemic, urine osm >100 (inappropriately concentrated, usually >300), urine Na >30 mmol/L. Hypovolaemic hyponatraemia (e.g. diuretics, GI losses): urine Na <30, responds to saline. Primary polydipsia/low solute (tea-and-toast, beer potomania): urine osm <100 (maximally dilute). Cerebral salt wasting mimics SIADH but is hypovolaemic.",
   "cutoffs": [
    "Hyponatraemia Na <135; serum osm in SIADH <275 mOsm/kg",
    "SIADH urine osmolality >100 mOsm/kg (typically >300)",
    "SIADH urine sodium >30 mmol/L",
    "Hypovolaemic cause: urine Na <30 mmol/L",
    "Low-solute (beer potomania/psychogenic polydipsia): urine osm <100 mOsm/kg"
   ],
   "redFlags": "A 'saline challenge' that DROPS the sodium further is classic for SIADH (the kidney excretes the Na and retains the free water) - escalate to fluid restriction, not more saline. Falsely normal Na with hyperglycaemia: correct measured Na up by ~2.4 mmol/L per 5.5 mmol/L glucose above normal.",
   "viva": "Out loud, give the diagnostic algorithm: 'I'd exclude pseudo- and hypertonic hyponatraemia with a serum osmolality and glucose, assess volume status clinically, then send paired urine osmolality and sodium, plus TFTs and a 9am cortisol before diagnosing SIADH.' Examiner probes: why a saline challenge can worsen SIADH.",
   "mcqTrap": "'Give IV 0.9% sodium chloride' as the management of an asymptomatic euvolaemic patient with SIADH. Wrong - in SIADH isotonic saline can paradoxically lower the sodium further; first-line is fluid restriction (<1 L/day), with tolvaptan/urea second-line under specialist input.",
   "mnemonic": "SIADH = 'Salt In, Antidiuretic Hormone High': concentrated urine (high urine osm/Na) despite dilute, low-osmolality blood, in a euvolaemic patient.",
   "visualHtml": "<table class=\"gv-table\"><tr><th>Type</th><th>Volume</th><th>Urine Na</th><th>Urine osm</th><th>1st-line Rx</th></tr><tr><td>SIADH</td><td>Euvolaemic</td><td>&gt;30</td><td>&gt;100 (usu &gt;300)</td><td>Fluid restrict &lt;1 L/day</td></tr><tr><td>Hypovolaemic (GI/diuretic)</td><td>Low</td><td>&lt;30*</td><td>&gt;100</td><td>0.9% saline</td></tr><tr><td>Low solute (beer/tea-toast)</td><td>Euvolaemic</td><td>variable</td><td>&lt;100</td><td>Diet, gentle correction</td></tr><tr><td>Hypervolaemic (CCF/cirrhosis)</td><td>High</td><td>&lt;30</td><td>&gt;100</td><td>Treat cause, restrict fluid</td></tr></table><div class=\"gv-pills\"><span class=\"gv-pill\">*diuretic-induced urine Na may be &gt;30</span></div>",
   "source": "Australian Prescriber 'Severe hyponatraemia - recognition and management' (Therapeutic Guidelines); eTG (current) - Hyponatraemia",
   "tags": [
    "hyponatraemia",
    "SIADH",
    "euvolaemic",
    "diagnosis-of-exclusion",
    "urine-osmolality"
   ],
   "verified": false,
   "title": "Hyponatraemia",
   "subtitle": "SIADH is a diagnosis of EXCLUSION needing EUVOLAEMIA + the urine numbers",
   "id": "renal-18"
  },
  {
   "topic": "Hyponatraemia: rate of correction & osmotic demyelination syndrome (the over-correction gotcha)",
   "subarea": "Electrolytes & acid-base",
   "whatFirst": "Decide SYMPTOMS vs CHRONICITY, not the absolute number. Severe symptoms (seizures, GCS drop, coma, vomiting): give 100 mL of 3% hypertonic saline over 1 hour (Australian Prescriber); if symptomatic fitting persists, a further 200 mL over the next 2 hours - aiming to raise the serum Na into a safe range (>120 mmol/L) and abolish symptoms, NOT to normalise it.",
   "trap": "Over-correcting. The danger of CHRONIC hyponatraemia is fixing it too fast -> osmotic demyelination syndrome (central pontine myelinolysis), a delayed, often irreversible quadriparesis/locked-in syndrome appearing days later. The brain has adapted; rapid rise causes osmotic shrinkage and demyelination.",
   "discriminator": "Acute (<48 hr, e.g. marathon/MDMA/post-op) tolerates faster correction and the risk is cerebral oedema. Chronic (>48 hr or unknown) brain has adapted -> ODS risk dominates -> correct SLOWLY. If unknown duration, assume chronic. High-risk-for-ODS: Na <105, alcoholism, malnutrition, hypokalaemia, liver disease - aim even lower (<=8 mmol/L/24hr).",
   "cutoffs": [
    "Max correction <=10 mmol/L in first 24 hr (high-risk: <=8 mmol/L/24hr)",
    "Max <=18 mmol/L over 48 hr",
    "Severe hyponatraemia = Na <120 mmol/L (Australian Prescriber)",
    "3% saline: 100 mL over 1 hr, then 200 mL over 2 hr if fitting persists (Australian Prescriber)",
    "Target: raise Na into safe range >120 mmol/L and abolish symptoms",
    "Check Na every 2-4 hr during active correction"
   ],
   "redFlags": "If overcorrected (Na rising too fast): STOP hypertonic saline, give 5% dextrose IV +/- desmopressin (DDAVP) to deliberately re-LOWER the sodium and prevent ODS. Correcting hypokalaemia also raises Na (counts toward the daily limit). New neuro signs 2-6 days after correction = suspect ODS -> MRI.",
   "viva": "Out loud: 'Rate of correction matters more than the absolute sodium. In a fitting patient I give 100 mL of 3% saline to lift the sodium into a safe range and stop the seizure, but I cap total correction at 10 mmol/L in 24 hours and 18 in 48 to avoid osmotic demyelination - and I'd relower with dextrose and desmopressin if I overshot.'",
   "mcqTrap": "'Rapidly correct to normal (135) with 3% saline' in a chronic hyponatraemic alcoholic - the most dangerous wrong answer; this causes osmotic demyelination. Also tempting: choosing the absolute sodium value as the indication for hypertonic saline - it is SYMPTOMS (seizure/coma), not the number, that mandates 3% saline.",
   "mnemonic": "'From low to high, the pons will die; from high to low, the brain will blow.' Low Na corrected too fast -> ODS/CPM; high Na corrected too fast -> cerebral oedema.",
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Severe symptoms (seizure/coma)?</div><div class=\"gv-step\">YES -> 100 mL 3% saline over 1 hr (+200 mL over 2 hr if still fitting)</div><div class=\"gv-step\">NO -> treat by volume status / cause</div><div class=\"gv-step\">CAP: &le;10 mmol/L /24h (&le;8 if high-risk), &le;18 /48h</div><div class=\"gv-step\">Overshot? -> STOP saline, give 5% dextrose +/- DDAVP to re-lower</div></div>",
   "source": "Australian Prescriber 'Severe hyponatraemia - recognition and management' (Therapeutic Guidelines, current); eTG (current) - Hyponatraemia",
   "tags": [
    "hyponatraemia",
    "osmotic-demyelination",
    "CPM",
    "hypertonic-saline",
    "rate-of-correction",
    "DDAVP"
   ],
   "verified": true,
   "title": "Hyponatraemia",
   "subtitle": "rate of correction & osmotic demyelination syndrome (the over-correction gotcha)",
   "id": "renal-19"
  },
  {
   "topic": "Acute pyelonephritis — empirical IV therapy & the bladder-only-drug trap",
   "subarea": "Urology (medical) & stones",
   "trap": "Two traps. (1) Picking oral nitrofurantoin/fosfomycin — these do NOT achieve renal-parenchymal/blood levels and are WRONG for pyelonephritis (bladder-only). (2) Forgetting the gentamicin-based empirical regimen. eTG empirical for moderate-severe/admitted pyelonephritis = gentamicin IV (single/once-daily dose) PLUS amoxicillin (or ampicillin) IV 2 g 6-hourly; ceftriaxone 1 g IV daily is the alternative if gentamicin contraindicated. Mild outpatient pyelonephritis can be oral per susceptibility. ALWAYS send urine culture before starting (unlike cystitis). Total duration ~10-14 days, shortened if rapid response and susceptible.",
   "whatFirst": "Blood + urine cultures FIRST → empirical IV gentamicin + amoxicillin (or ceftriaxone) → image (CT) if not improving by 48-72h or septic, to exclude obstruction.",
   "discriminator": "Uncomplicated pyelonephritis improves within 48-72h on appropriate antibiotics. NO improvement / ongoing fever = obstruction, abscess, or emphysematous pyelonephritis → urgent CT. Pyelonephritis + obstructing stone = decompression emergency (separate card).",
   "redFlags": "Sepsis/septic shock, no improvement at 48-72h, single/transplant kidney, diabetic (emphysematous pyelonephritis), or known stone/obstruction → urgent imaging + urology/ICU.",
   "viva": "\"I'd take blood and urine cultures, start empirical IV gentamicin plus amoxicillin per eTG, give fluids and analgesia, and image with CT if there's no improvement at 48-72 hours or features of obstruction — an obstructed infected kidney needs emergency decompression.\"",
   "mnemonic": "Pyelo needs the kidney-TISSUE drug: Gentamicin + Amoxicillin (not bladder-only nitrofurantoin).",
   "mcqTrap": "\"Nitrofurantoin 100 mg orally\" — a deliberate trap: first-line for cystitis but useless for pyelonephritis because it doesn't reach renal parenchyma/blood.",
   "source": "Therapeutic Guidelines: Antibiotic — Acute pyelonephritis, current edition.",
   "verified": false,
   "tags": [
    "pyelonephritis",
    "eTG",
    "gentamicin",
    "sepsis",
    "antibiotics"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Suspect pyelonephritis (fever + loin pain + dysuria)</div><div class=\"gv-step\">Blood + urine cultures FIRST</div><div class=\"gv-step\">Empirical IV: gentamicin + amoxicillin 2 g q6h (or ceftriaxone 1 g daily)</div><div class=\"gv-step\">No improvement at 48-72h OR septic → CT to exclude obstruction/abscess</div><div class=\"gv-step\">Obstructed + infected = emergency decompression</div></div>",
   "title": "Acute pyelonephritis",
   "subtitle": "empirical IV therapy & the bladder-only-drug trap",
   "id": "renal-20"
  },
  {
   "topic": "Acute uncomplicated cystitis (non-pregnant women) — empirical regimen & the trimethoprim resistance caveat",
   "subarea": "Urology (medical) & stones",
   "trap": "Reflexively picking trimethoprim 300 mg daily as the only first-line. eTG lists co-equal empirical oral options: trimethoprim 300 mg orally daily for 3 days, OR nitrofurantoin 100 mg orally 6-hourly for 5 days, OR cefalexin 500 mg orally 12-hourly for 5 days. The catch: the 3-day course belongs to trimethoprim; nitrofurantoin and cefalexin need 5 days. Rising community E. coli trimethoprim resistance (Australian surveillance ~25-30%, well above the ~20% threshold at which empirical use becomes unreliable) means trimethoprim should not be used empirically if recently used or where local resistance is high. Do NOT send routine urine MC&S in a healthy non-pregnant woman with typical cystitis — treat empirically.",
   "whatFirst": "Empirical oral antibiotic on symptoms (dysuria + frequency, no vaginal discharge/systemic features); no routine culture if uncomplicated.",
   "discriminator": "Cystitis = no fever, no flank/loin pain, no systemic upset. ANY fever ≥38, rigors, loin pain, nausea/vomiting = pyelonephritis (different regimen). Vaginal discharge/dyspareunia points to vaginitis/STI not UTI.",
   "redFlags": "Fever, loin pain, rigors, vomiting, sepsis features → reclassify as pyelonephritis. Male, pregnant, catheter, recurrent, or treatment failure → send culture and treat as complicated.",
   "viva": "\"In a healthy non-pregnant woman with typical cystitis I'd treat empirically without a culture — nitrofurantoin 100 mg 6-hourly for 5 days, or trimethoprim 300 mg daily for 3 days if local resistance is low and it hasn't been used recently. I'd avoid trimethoprim empirically where E. coli resistance exceeds about 20%.\"",
   "mnemonic": "Nitro = FIVE days; Trimethoprim = THREE days.",
   "mcqTrap": "\"Trimethoprim 300 mg daily for 3 days\" is the classic distractor; in a stewardship/2025-aligned stem the safer empirical answer is nitrofurantoin 100 mg 6-hourly for 5 days because trimethoprim resistance exceeds the ~20% empirical-use threshold.",
   "source": "Therapeutic Guidelines: Antibiotic (eTG) — Acute cystitis, current edition.",
   "verified": false,
   "tags": [
    "UTI",
    "cystitis",
    "eTG",
    "antibiotics",
    "nitrofurantoin",
    "trimethoprim"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Agent</th><th>Dose</th><th>Duration</th><th>Caveat</th></tr><tr><td>Nitrofurantoin</td><td>100 mg q6h</td><td><span class=\"gv-num\">5 days</span></td><td>Avoid if eGFR &lt;45; not for pyelonephritis</td></tr><tr><td>Trimethoprim</td><td>300 mg daily</td><td><span class=\"gv-num\">3 days</span></td><td>Resistance &gt;20% — avoid empirically if recent use/high local resistance</td></tr><tr><td>Cefalexin</td><td>500 mg q12h</td><td><span class=\"gv-num\">5 days</span></td><td>Beta-lactam option</td></tr></table>",
   "title": "Acute uncomplicated cystitis (non-pregnant women)",
   "subtitle": "empirical regimen & the trimethoprim resistance caveat",
   "id": "renal-21"
  },
  {
   "topic": "BPH & acute urinary retention — catheterise first, alpha-blocker before TWOC, watch the residual volume",
   "subarea": "Urology (medical) & stones",
   "trap": "(1) In acute urinary retention the immediate management is IMMEDIATE urethral catheterisation for decompression — not imaging or bloods first. (2) Before trial without catheter (TWOC), start an alpha-blocker (tamsulosin 0.4 mg daily) for ~2-3 days — it significantly improves TWOC success (RR ~1.4). (3) Record the DRAINED VOLUME: >1000-1500 mL suggests a chronic/high-pressure component → admit and watch for post-obstructive diuresis + AKI. 5-alpha-reductase inhibitors (finasteride) shrink the prostate over MONTHS — useless acutely.",
   "whatFirst": "Catheterise to decompress FIRST → measure residual volume + check U&E/creatinine → start alpha-blocker → plan TWOC; if high residual or AKI, admit and monitor urine output.",
   "discriminator": "Acute retention = sudden, painful, can't void, palpable tender bladder. Chronic retention = painless, large (often >1 L), may be incontinent (overflow), often with renal impairment/hydronephrosis — high-pressure chronic retention is the one that gets post-obstructive diuresis. Don't confuse anuria (no urine made) with retention (urine made but can't be passed).",
   "redFlags": "AKI / bilateral hydronephrosis, drained volume >1 L, haematuria, neurological signs (cauda equina → urgent MRI), or features of cancer. Avoid starting alpha-blocker if hypotensive.",
   "viva": "\"My first action in acute retention is to relieve the obstruction with a urethral catheter and record the drained volume. I'd check renal function, start tamsulosin to improve the chance of a successful trial without catheter, and if the residual is over a litre I'd admit and watch for post-obstructive diuresis.\"",
   "mnemonic": "Retention 'CAR': Catheter → Alpha-blocker → Residual volume (>1 L = admit/watch).",
   "mcqTrap": "\"Start finasteride and arrange outpatient follow-up\" — wrong for ACUTE retention; finasteride takes months. The acute answer is catheterise now, then alpha-blocker before TWOC.",
   "source": "Therapeutic Guidelines / Australian urology practice; Cochrane (alpha-blocker before TWOC, RR ~1.39).",
   "verified": false,
   "tags": [
    "BPH",
    "urinary retention",
    "catheter",
    "tamsulosin",
    "TWOC",
    "finasteride"
   ],
   "title": "BPH & acute urinary retention",
   "subtitle": "catheterise first, alpha-blocker before TWOC, watch the residual volume",
   "id": "renal-22"
  },
  {
   "topic": "Obstructed + infected kidney — the true urological emergency (decompress, don't just give antibiotics)",
   "subarea": "Urology (medical) & stones",
   "trap": "Thinking IV antibiotics alone will fix an infected, obstructed system. They will NOT — pus above an obstruction is undrained and antibiotics can't penetrate; the patient progresses to septic shock and pyonephrosis. The mandatory action is URGENT DECOMPRESSION (percutaneous nephrostomy OR retrograde ureteric JJ stent) within hours, IN ADDITION to IV antibiotics + resuscitation. Definitive stone treatment is DEFERRED until sepsis settles — do NOT attempt to fragment/remove the stone acutely.",
   "whatFirst": "Resuscitate (sepsis pathway: cultures, IV antibiotics, fluids) AND call urology/IR for emergency decompression simultaneously — decompression is the definitive lifesaving step, not optional.",
   "discriminator": "Simple pyelonephritis improves on antibiotics in 48-72h; obstructed+infected does NOT improve and deteriorates — that failure to respond is the clue to look for obstruction on CT. Pyonephrosis = pus-filled obstructed kidney (frank surgical emergency).",
   "redFlags": "Fever/rigors + hydronephrosis + obstructing stone on CT = decompress NOW. Hypotension, lactataemia, AKI, single/transplant kidney = escalate to ICU + urology immediately.",
   "viva": "\"An obstructed, infected kidney is a urological emergency — antibiotics alone are inadequate because the infected urine is undrained. I'd resuscitate along the sepsis pathway and, in parallel, escalate to urology for emergency decompression by nephrostomy or JJ stent within hours, deferring stone treatment until the sepsis resolves.\"",
   "mnemonic": "Obstructed + Infected = DRAIN. \"You can't sterilise a blocked drain with antibiotics.\"",
   "mcqTrap": "\"Continue IV antibiotics and reassess in 24 hours\" — the dangerous trap; the correct answer is emergency decompression (nephrostomy/stent) now.",
   "source": "NSW ACI/Emergency Care Institute — Acute ureteric colic; USANZ/EAU urolithiasis guidance; Therapeutic Guidelines (sepsis).",
   "verified": true,
   "tags": [
    "urosepsis",
    "obstruction",
    "nephrostomy",
    "JJ stent",
    "emergency",
    "pyonephrosis"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Fever + obstructing stone + hydronephrosis</div><div class=\"gv-step\">Sepsis pathway: cultures + IV antibiotics + fluids</div><div class=\"gv-step\">SIMULTANEOUS urgent decompression: nephrostomy OR JJ stent (hours)</div><div class=\"gv-step\">Defer definitive stone treatment until sepsis resolved</div></div>",
   "title": "Obstructed + infected kidney",
   "subtitle": "the true urological emergency (decompress, don't just give antibiotics)",
   "id": "renal-23"
  },
  {
   "topic": "Painless visible (macroscopic) haematuria = urological cancer until proven otherwise",
   "subarea": "Urology (medical) & stones",
   "trap": "Attributing visible haematuria to a UTI, a stone, or anticoagulation and NOT referring. The rule: ANY single episode of painless visible haematuria warrants urgent urology referral regardless of age and regardless of anticoagulant/antiplatelet use (anticoagulation does not cause haematuria — it unmasks it). Standard work-up = upper-tract imaging (CT urogram preferred for sensitivity; ultrasound for low-risk/young/radiation-sensitive) PLUS flexible cystoscopy (the only reliable way to see the bladder). Urine cytology is adjunctive, not a rule-out.",
   "whatFirst": "Confirm true haematuria (not myoglobin/beetroot/menses) → exclude UTI with MSU → if no infection or haematuria persists after treatment, URGENT urology referral for cystoscopy + CT urogram. Don't 'watch and wait'.",
   "discriminator": "Painful visible haematuria with colic → think stone (but still needs work-up). Painless = cancer pathway. Haematuria with proteinuria + dysmorphic RBCs/casts + hypertension → glomerular (nephrology), not urological. Blood at start of stream = urethral; end of stream = bladder neck/prostate; total = bladder/upper tract.",
   "redFlags": "Painless visible haematuria, age >35-40, smoking, occupational dye/chemical exposure, weight loss — all raise urothelial-cancer probability; clots = lower-tract source needing urgent assessment.",
   "viva": "\"A single episode of painless visible haematuria is a urological cancer until proven otherwise — I'd refer urgently for flexible cystoscopy and CT urogram, even if the patient is anticoagulated, because anticoagulation unmasks rather than causes bleeding.\"",
   "mnemonic": "Painless visible haematuria → 'Cysto + CTU' for everyone; anticoagulation is never the explanation.",
   "mcqTrap": "\"Reassure — likely due to warfarin/aspirin, repeat dipstick in a few weeks.\" The most tempting wrong option: never blame anticoagulation; it mandates the same urgent cancer work-up.",
   "source": "RACGP — Macroscopic haematuria, a urological approach; consistent with USANZ referral practice.",
   "verified": false,
   "tags": [
    "haematuria",
    "bladder cancer",
    "cystoscopy",
    "CT urogram",
    "referral"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Haematuria type</th><th>Action</th></tr><tr><td>Painless VISIBLE (macroscopic)</td><td>Urgent urology: cystoscopy + CT urogram (any age)</td></tr><tr><td>Microscopic, asymptomatic</td><td>Confirm on repeat; risk-stratify; refer if persistent/high-risk</td></tr><tr><td>With colic / stone</td><td>CT-KUB; still investigate source</td></tr><tr><td>Glomerular (casts, protein, dysmorphic RBC)</td><td>Nephrology, not urology</td></tr></table>",
   "title": "Painless visible (macroscopic) haematuria = urological cancer…",
   "id": "renal-24"
  },
  {
   "topic": "Post-obstructive diuresis — recognise it, replace 50-75% (not 100%), watch electrolytes",
   "subarea": "Urology (medical) & stones",
   "trap": "After relieving chronic high-pressure retention (or bilateral obstruction) a physiological ± pathological diuresis follows. The trap is over-replacing fluid — matching urine output mL-for-mL PERPETUATES the diuresis (and over-driving risks overload; under-replacing risks hypovolaemia). Threshold: urine output >200 mL/hr for ≥2 consecutive hours (or >3 L/24h). Management: hourly urine output, serial U&E (Na, K, Mg, PO4), and replace at ~50-75% of urine output with isotonic crystalloid (e.g., 0.9% / 0.45% saline), NOT 100%. Usually self-limiting over 24-48h. Watch for hypokalaemia, hypo/hypernatraemia and dehydration.",
   "whatFirst": "Hourly urine output + serial U&E after decompression of chronic retention → if UO >200 mL/hr sustained, replace ~50-75% with IV crystalloid and treat electrolyte derangements.",
   "discriminator": "Physiological POD self-resolves as fluid/solute overload clears; PATHOLOGICAL POD continues despite euvolaemia (defective concentrating/Na handling) and risks profound volume/electrolyte loss. Distinguish from appropriate diuresis of a fluid-overloaded patient (don't aggressively replace that).",
   "redFlags": "Postural hypotension, rising creatinine, symptomatic hypokalaemia/hyponatraemia, ongoing high output beyond 48h → senior review; over-aggressive replacement is itself a red flag (iatrogenic perpetuation).",
   "viva": "\"After draining a chronically obstructed bladder I'd monitor hourly urine output and electrolytes. If output exceeds 200 mL/hour I'd replace about 50-75% with isotonic fluid — deliberately under-replacing so I don't perpetuate the diuresis — and correct any potassium or sodium derangement.\"",
   "mnemonic": "POD: '>200 mL/hr' triggers it; 'replace 50-75%, never 100%' treats it.",
   "mcqTrap": "\"Match urine output millilitre-for-millilitre with IV fluids\" — the seductive wrong answer; 100% replacement perpetuates the diuresis. Replace only 50-75%.",
   "source": "Standard Australian renal/urology teaching; LITFL / StatPearls post-obstructive diuresis.",
   "verified": false,
   "tags": [
    "post-obstructive diuresis",
    "fluids",
    "electrolytes",
    "retention",
    "AKI"
   ],
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Trigger: UO &gt;200 mL/hr ×2h or &gt;3 L/24h</span><span class=\"gv-pill\">Replace 50-75% of output</span><span class=\"gv-pill\">Isotonic fluid</span><span class=\"gv-pill\">Serial U&amp;E + hourly UO</span></div>",
   "title": "Post-obstructive diuresis",
   "subtitle": "recognise it, replace 50-75% (not 100%), watch electrolytes",
   "id": "renal-25"
  },
  {
   "topic": "Recurrent UTI in women — definition threshold & antibiotic-sparing prophylaxis ladder",
   "subarea": "Urology (medical) & stones",
   "trap": "Getting the numeric definition wrong and jumping straight to continuous antibiotics. Recurrent UTI = ≥2 in 6 months OR ≥3 in 12 months. The stewardship sequence is NON-antibiotic/behavioural FIRST: increase fluids (≥1.5 L/day, RCT-proven), post-coital voiding, topical vaginal oestrogen in postmenopausal women, and methenamine hippurate (non-antibiotic urinary antiseptic, evidence-supported as non-inferior). Only then continuous low-dose antibiotic prophylaxis (e.g., trimethoprim 150 mg, cefalexin 250 mg, or nitrofurantoin 50-100 mg nocte, typically up to 6 months) OR post-coital single dose if coitally related. Cranberry evidence is weak — not a strong answer.",
   "whatFirst": "Confirm recurrences on culture → exclude reversible cause → fluids/behavioural + topical oestrogen if postmenopausal → methenamine → continuous/post-coital antibiotic prophylaxis last.",
   "discriminator": "Relapse (same organism <2 weeks after treatment) suggests inadequately treated focus/stone/obstruction → image. Reinfection (different organism, later) = true recurrent UTI → prophylaxis pathway. Distinguish from chronic ASB (don't treat).",
   "redFlags": "Recurrent UTI in a MAN, visible haematuria between episodes, or persistent same-organism relapse → image (US/CT) and refer urology to exclude stone, obstruction, or tumour.",
   "viva": "\"Recurrent UTI is two infections in six months or three in a year. I'd first confirm them on culture, then start with antibiotic-sparing measures — fluids, post-coital voiding, vaginal oestrogen in postmenopausal women, and methenamine — reserving continuous low-dose prophylaxis for failures.\"",
   "mnemonic": "\"2-in-6 or 3-in-12.\" Ladder: Fluids → Oestrogen → Methenamine → Antibiotic (last resort).",
   "mcqTrap": "\"Start continuous trimethoprim prophylaxis\" as the FIRST step — a trap; stewardship-aligned answers favour fluids/behavioural + topical oestrogen/methenamine before long-term antibiotics.",
   "source": "Therapeutic Guidelines: Antibiotic — Recurrent UTI, current edition.",
   "verified": true,
   "tags": [
    "recurrent UTI",
    "prophylaxis",
    "methenamine",
    "oestrogen",
    "stewardship"
   ],
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">≥2 in 6 months</span><span class=\"gv-pill\">OR ≥3 in 12 months</span><span class=\"gv-pill\">Fluids ≥1.5 L/day</span></div>",
   "title": "Recurrent UTI in women",
   "subtitle": "definition threshold & antibiotic-sparing prophylaxis ladder",
   "id": "renal-26"
  },
  {
   "topic": "Renal/ureteric colic — CT-KUB first, NSAID analgesia first, size-based passage thresholds",
   "subarea": "Urology (medical) & stones",
   "trap": "Two catches. (1) Imaging: non-contrast CT-KUB is FIRST-LINE diagnostic (sensitivity ~95-100%) — NOT ultrasound (first-line only in pregnancy and children) and NOT plain KUB X-ray. (2) Analgesia: an NSAID (e.g., parenteral/PR diclofenac or indomethacin, or ketorolac) is FIRST-LINE — superior to opioids for renal colic; opioids are second-line/adjunct (and morphine raises ureteric pressure). Size thresholds: stones <5 mm usually pass spontaneously (~80%); 5-10 mm variable (~50%, offer medical expulsive therapy with tamsulosin, esp. distal ureteric); >10 mm unlikely to pass → urology for intervention.",
   "whatFirst": "Analgesia FIRST (NSAID) → non-contrast CT-KUB to confirm, locate and size the stone and detect hydronephrosis → assess for infection/obstruction (the emergency).",
   "discriminator": "Renal colic = colicky loin-to-groin pain, patient restless/writhing (vs peritonitis where they lie still). Mimics to exclude: ruptured AAA (older, hypotension — never miss in >50s with 'first stone'), ectopic pregnancy, appendicitis, pyelonephritis. New 'renal colic' in an older patient → consider AAA before anchoring.",
   "redFlags": "Fever/sepsis + obstructing stone, single/transplant kidney, bilateral obstruction, AKI, uncontrolled pain/vomiting → urology emergency. Always do a pregnancy test before CT in women of childbearing age.",
   "viva": "\"I'd give an NSAID for analgesia first as it's superior to opioids in renal colic, confirm with a non-contrast CT-KUB, and screen for fever and obstruction — an obstructed, infected kidney is a urological emergency needing decompression. In an older patient I'd actively exclude a leaking AAA.\"",
   "mnemonic": "Colic ABC: Analgesia (NSAID) → Bench imaging is CT-KUB → Check for infection. Sizes: <5 pass, 5-10 tamsulosin, >10 refer.",
   "mcqTrap": "\"IV morphine first-line analgesia\" or \"ultrasound first-line imaging\" — both tempting but wrong in the non-pregnant adult: NSAID beats opioid, and CT-KUB beats ultrasound.",
   "source": "NSW ACI/Emergency Care Institute — Acute ureteric colic; Therapeutic Guidelines (analgesia); USANZ stone guidance.",
   "verified": true,
   "tags": [
    "renal colic",
    "ureteric stone",
    "CT-KUB",
    "NSAID",
    "tamsulosin"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Stone size</th><th>Likely course</th><th>Action</th></tr><tr><td><span class=\"gv-num\">&lt;5 mm</span></td><td>~80% pass spontaneously</td><td>Analgesia + fluids, watchful waiting</td></tr><tr><td><span class=\"gv-num\">5-10 mm</span></td><td>~50% pass</td><td>Medical expulsive therapy (tamsulosin), esp. distal ureter</td></tr><tr><td><span class=\"gv-num\">&gt;10 mm</span></td><td>Unlikely to pass</td><td>Urology — ureteroscopy / ESWL / PCNL</td></tr></table>",
   "title": "Renal/ureteric colic",
   "subtitle": "CT-KUB first, NSAID analgesia first, size-based passage thresholds",
   "id": "renal-27",
   "images": [
    {
     "src": "assets/img/gastrointestinal_kub_staghorn_calculus_01.jpg",
     "caption": "Ureteric calculus — CT-KUB showing obstructing stone",
     "alt": "Non-contrast CT KUB demonstrating a hyperdense calculus in the right ureter with proximal hydronephrosis and perinephric fat stranding — first-line imaging for renal/ureteric colic",
     "credit": "Nevit Dilmen, Wikimedia Commons, CC BY-SA 3.0"
    }
   ]
  },
  {
   "topic": "UTI in pregnancy & asymptomatic bacteriuria — the screen-and-treat exception",
   "subarea": "Urology (medical) & stones",
   "trap": "Treating asymptomatic bacteriuria (ASB) is WRONG in almost everyone EXCEPT two groups: pregnant women and patients before a urological procedure with anticipated mucosal breach. In pregnancy ASB must be SCREENED (routine antenatal MSU) and TREATED because of high progression to pyelonephritis and preterm-birth/low-birthweight risk. Drug trap: nitrofurantoin is AVOIDED at term (≥36 weeks / near delivery) due to neonatal haemolysis risk, and trimethoprim is AVOIDED in the 1st trimester (folate antagonist → neural-tube-defect/structural-defect risk). Cefalexin 500 mg q12h is the pregnancy-safe workhorse across all trimesters (Australian pregnancy category A).",
   "whatFirst": "Pregnant + UTI symptoms OR positive screening MSU → send culture AND treat (do not wait for symptoms in ASB).",
   "discriminator": "ASB in a non-pregnant, non-pre-procedure patient = do NOT treat (overtreatment is the exam point). ASB in pregnancy = always treat. Elderly with cloudy/smelly urine but no systemic features = likely ASB, not infection — don't reflexively antibiotic.",
   "redFlags": "Pregnant + fever/loin pain = pyelonephritis → lower threshold to admit pregnant women.",
   "viva": "\"I'd screen all pregnant women for asymptomatic bacteriuria with an MSU and treat positives, because untreated bacteriuria carries a substantial pyelonephritis and preterm-birth risk. I'd choose cefalexin — avoiding trimethoprim in the first trimester and nitrofurantoin near term.\"",
   "mnemonic": "Pregnancy drug timing: Trimethoprim = Trouble in Trimester 1; Nitrofurantoin = No Near birth.",
   "mcqTrap": "\"Reassure, no treatment needed\" for ASB — correct in the general/elderly patient, but a TRAP when the stem says pregnant. \"Nitrofurantoin\" is the trap drug in a 38-week-pregnant stem.",
   "source": "Therapeutic Guidelines: Antibiotic — UTI in pregnancy & asymptomatic bacteriuria, current edition.",
   "verified": true,
   "tags": [
    "UTI",
    "pregnancy",
    "asymptomatic bacteriuria",
    "cefalexin",
    "eTG"
   ],
   "title": "UTI in pregnancy & asymptomatic bacteriuria",
   "subtitle": "the screen-and-treat exception",
   "id": "renal-28"
  },
  {
   "topic": "Diabetic nephropathy / diabetic kidney disease — the modern 4-pillar drug stack & SGLT2i eGFR floor",
   "subarea": "Glomerular & immune renal",
   "trap": "Outdated MCQ answer 'ACEi/ARB alone'. Current Australian DKD care is a STACK: (1) ACEi or ARB (first, titrated to max tolerated — never combine the two), (2) SGLT2 inhibitor for renoprotection, (3) consider finerenone (non-steroidal MRA) for residual albuminuria, plus GLP-1 RA / glycaemic + BP + lipid control. Key gotcha numbers: SGLT2 inhibitors can be STARTED for kidney protection down to eGFR ~25 mL/min/1.73m² (dapagliflozin, DAPA-CKD eGFR 25–75) or ~20 (empagliflozin, EMPA-KIDNEY eGFR 20–45) and continued below that once started; expect a benign initial eGFR 'dip' (commonly cited up to ~30%) — do NOT stop for that dip. Finerenone: start only if K+ ≤5.0 mmol/L, on max ACEi/ARB; start 20 mg if eGFR ≥60 or 10 mg if eGFR 25–59; NOT recommended if eGFR <25 or K+ >5.0; WITHHOLD if K+ >5.5. Another gotcha: classic DKD shows long-standing diabetes + retinopathy + bland sediment + slowly rising albuminuria — ABSENT retinopathy or ACTIVE sediment/rapid decline should make you doubt DKD and consider biopsy for another glomerulonephritis.",
   "discriminator": "DKD = long DM duration + retinopathy + albuminuria progressing slowly + bland urine. NO retinopathy, haematuria/RBC casts, rapid eGFR fall, or nephrotic onset <5 yrs of T1DM ⇒ atypical → biopsy for alternative GN.",
   "whatFirst": "Quantify ACR (first-morning), eGFR, K+, BP, HbA1c. Maximise ACEi or ARB → add SGLT2 inhibitor → reassess residual albuminuria/K+ for finerenone. Optimise BP and glycaemia.",
   "redFlags": "Rapidly rising creatinine, active sediment, or nephrotic syndrome without retinopathy = not simple DKD → refer/biopsy. Bilateral renal artery stenosis: big creatinine rise after starting ACEi/ARB.",
   "mcqTrap": "'Stop the SGLT2 inhibitor because eGFR dropped after starting it' — WRONG; an initial eGFR dip is expected and the drug is renoprotective long-term, continue it (and continue even when eGFR later falls below the initiation threshold). Also wrong: combining an ACEi WITH an ARB.",
   "viva": "Examiner: 'When would you doubt diabetic nephropathy and biopsy?' = absent retinopathy, haematuria/active sediment, rapid decline, or nephrotic onset too early in disease course. Counsel SGLT2i sick-day rules (euglycaemic DKA risk) at consent.",
   "mnemonic": "DKD stack 'AS-Fin-G': ACEi/ARB → SGLT2i → Finerenone → GLP-1/glycaemia. Finerenone 'start ≤5.0, withhold >5.5' for potassium.",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Drug</th><th>eGFR to START</th><th>Watch</th></tr></thead><tbody><tr><td>ACEi or ARB (max tolerated, not both)</td><td>Foundation</td><td>K+, creatinine; ~30% rise tolerated</td></tr><tr><td>SGLT2 inhibitor (dapa/empa)</td><td>≥~25 (empa ~20); continue below once started</td><td>Initial eGFR dip OK; euglycaemic DKA</td></tr><tr><td>Finerenone</td><td>20 mg if ≥60; 10 mg if 25–59; not &lt;25</td><td>Start K+ ≤5.0; withhold if &gt;5.5</td></tr></tbody></table>",
   "tags": [
    "diabetic nephropathy",
    "SGLT2 inhibitor",
    "finerenone",
    "ACEi/ARB",
    "retinopathy clue"
   ],
   "source": "Australian Prescriber (finerenone); DAPA-CKD; EMPA-KIDNEY; KDIGO 2022/2024 Diabetes in CKD; Kidney Health Australia; eTG current",
   "verified": true,
   "title": "Diabetic nephropathy / diabetic kidney disease",
   "subtitle": "the modern 4-pillar drug stack & SGLT2i eGFR floor",
   "id": "renal-29",
   "images": [
    {
     "src": "assets/img/ophthalmology_fundus_diabetic_retinopathy_01.jpg",
     "caption": "Diabetic retinopathy — fundus showing neovascularisation and exudates",
     "alt": "Fundus photograph showing proliferative diabetic retinopathy with neovascularisation, flame haemorrhages, and hard exudates — co-existing microvascular complication alongside diabetic nephropathy",
     "credit": "MarkPanin, Wikimedia Commons, CC BY-SA 4.0 (timestamp cropped)"
    }
   ]
  },
  {
   "topic": "Henoch-Schönlein purpura / IgA vasculitis — the tetrad, and the kidney is the prognosis",
   "subarea": "Glomerular & immune renal",
   "trap": "Two traps. (1) Calling the rash thrombocytopenic — HSP/IgA vasculitis purpura is PALPABLE and platelets are NORMAL (it is a vasculitis, not ITP/TTP); a low platelet count means look elsewhere. (2) Forgetting that the KIDNEY drives long-term prognosis: even after the rash settles, nephritis can appear or worsen, so you must monitor BP + urinalysis for proteinuria/haematuria for ~6 months. Same renal histology as IgA nephropathy (mesangial IgA). Trap: 'steroids prevent nephritis' — corticosteroids help arthralgia/abdominal pain but do NOT reliably prevent or treat the renal disease.",
   "discriminator": "Palpable purpura (buttocks/extensor lower limbs) + arthralgia + colicky abdominal pain + nephritis + NORMAL platelets/coags = IgA vasculitis. Same kidney biopsy as IgAN but with systemic small-vessel vasculitis features. TTP/HUS/ITP have LOW platelets.",
   "whatFirst": "Confirm normal platelets/coagulation, check BP + urinalysis (proteinuria/haematuria) + creatinine. Mostly supportive; analgesia/hydration. Serious abdominal pain → exclude intussusception (esp. children).",
   "redFlags": "Severe abdominal pain/PR bleeding (intussusception, GI ischaemia) and significant nephritis (heavy proteinuria, AKI, hypertension) → admit/refer; nephritic-nephrotic or crescentic HSP nephritis needs nephrology + biopsy.",
   "mcqTrap": "'Purpura + low platelets' as the expected finding — WRONG; IgA vasculitis purpura is NON-thrombocytopenic (normal platelets). Also wrong: 'give steroids to prevent renal involvement' — they don't reliably prevent nephritis.",
   "viva": "Examiner: 'Rash settled, when can you reassure?' = NOT until you have followed BP + urinalysis (e.g. ~6 months) because nephritis can be delayed; discriminator probe = why platelets are normal here.",
   "mnemonic": "HSP tetrad 'PAIR': Purpura (palpable), Arthralgia, Intestinal (abdominal pain/GI bleed), Renal (nephritis). Platelets Normal.",
   "tags": [
    "HSP",
    "IgA vasculitis",
    "palpable purpura",
    "normal platelets",
    "nephritis monitoring"
   ],
   "source": "eTG current; KDIGO 2025 IgAN/IgAV Guideline (IgA vasculitis nephritis); EULAR/PRINTO/PRES classification",
   "verified": true,
   "title": "Henoch-Schönlein purpura / IgA vasculitis",
   "subtitle": "the tetrad, and the kidney is the prognosis",
   "id": "renal-30",
   "images": [
    {
     "src": "assets/img/paediatrics_rash_palpable_purpura_lower_limbs_01.jpg",
     "caption": "HSP / IgA vasculitis — palpable purpura over buttocks and lower limbs",
     "alt": "Palpable purpuric rash in a dependent distribution over the buttocks and lower limbs — the cardinal dermatological feature of Henoch-Schonlein purpura (IgA vasculitis)",
     "credit": "Madhero88, Wikimedia Commons, CC BY-SA 3.0"
    }
   ]
  },
  {
   "topic": "IgA nephropathy (Berger) — synpharyngitic haematuria + supportive-care-first management",
   "subarea": "Glomerular & immune renal",
   "trap": "The tempting wrong answer is 'corticosteroids first'. NO — first-line for IgAN is maximal supportive care: ACEi or ARB titrated to maximum tolerated dose, BP control, sodium restriction, and an SGLT2 inhibitor (recommended for proteinuric IgAN with eGFR >20). Steroids are ONLY considered after a period (≈3–6 months) of optimised supportive care if proteinuria persists ≥1 g/day AND eGFR is preserved — and only after a careful infection/toxicity risk discussion (TESTING trial harms). The other classic trap is timing: IgAN causes VISIBLE (macroscopic) haematuria concurrently or 1–2 days AFTER an URTI ('synpharyngitic') — contrast with post-strep GN which is 1–3 weeks AFTER. Complement is NORMAL in IgAN (low complement points elsewhere).",
   "discriminator": "Synpharyngitic (concurrent/1–2 days post-URTI) visible haematuria + NORMAL complement = IgAN. Post-infectious GN = 1–3 week LATENCY + LOW C3. Same renal histology as HSP/IgA vasculitis but IgAN has no systemic purpura/arthralgia/GI features.",
   "whatFirst": "Quantify proteinuria (ACR/PCR), BP, eGFR. Start/maximise ACEi or ARB + add SGLT2 inhibitor; target proteinuria <1 g/day (ideally <0.5 g/day) and BP control. Diagnosis is by renal biopsy (mesangial IgA deposits).",
   "redFlags": "Sudden AKI + heavy active sediment in known IgAN = crescentic transformation (RPGN) → urgent biopsy + immunosuppression. Macroscopic haematuria with AKI can also be pigment/tubular injury — but exclude crescents.",
   "mcqTrap": "'Best initial treatment = oral prednisolone' — WRONG. Best initial = ACEi/ARB to max tolerated dose + SGLT2 inhibitor (supportive care) for a period before steroids are even considered, and only if proteinuria ≥1 g/day persists with preserved eGFR.",
   "viva": "Examiner probes the steroid decision: 'When would you add immunosuppression?' = persistent proteinuria ≥1 g/day despite optimised supportive care, preserved eGFR, after explicit consent re infection/diabetes/AVN risks.",
   "mnemonic": "IgA = 'I get Aggravated DURING a cold' (synpharyngitic, no delay) vs PSGN 'Post-Strep = Patience, weeks later'.",
   "tags": [
    "IgA nephropathy",
    "synpharyngitic",
    "ACEi",
    "SGLT2i",
    "proteinuria target"
   ],
   "source": "KDIGO 2025 IgAN/IgAV Guideline; eTG current; supported by DAPA-CKD IgAN sub-analysis & TESTING trial",
   "verified": true,
   "title": "IgA nephropathy (Berger)",
   "subtitle": "synpharyngitic haematuria + supportive-care-first management",
   "id": "renal-31"
  },
  {
   "topic": "Lupus nephritis — BIOPSY decides class & treatment; HCQ for everyone",
   "subarea": "Glomerular & immune renal",
   "trap": "The trap is treating from serology/urine alone. Any SLE patient with significant proteinuria (e.g. ACR/PCR rising, ~≥0.5 g/day), active sediment, or unexplained renal impairment needs a RENAL BIOPSY to assign ISN/RPS class — because class drives therapy. Class III/IV (focal/diffuse PROLIFERATIVE) = aggressive: induction with glucocorticoids PLUS either mycophenolate (MMF/MPAA) OR low-dose IV cyclophosphamide (Euro-Lupus), now often as TRIPLE therapy adding belimumab (if eGFR ≥30) or a calcineurin inhibitor/voclosporin (if eGFR >45). Class V (pure MEMBRANOUS) with sub-nephrotic protein may need only RAAS blockade; nephrotic-range needs immunosuppression. ALL lupus patients get hydroxychloroquine unless contraindicated. Trap: low C3/C4 + high anti-dsDNA tracks flares but does NOT replace the biopsy for classifying/staging.",
   "discriminator": "Proliferative (III/IV) = active sediment + AKI + hypocomplementaemia → immunosuppress. Pure membranous (V) = nephrotic-range protein, often bland sediment, less hypocomplementaemia. Biopsy class, not serology, decides.",
   "whatFirst": "Confirm activity (ACR/PCR, microscopy, eGFR, C3/C4, anti-dsDNA) then BIOPSY to class. Start hydroxychloroquine for all; for III/IV start glucocorticoids + MMF or low-dose IV cyclophosphamide, ± belimumab (eGFR ≥30) or CNI/voclosporin (eGFR >45).",
   "redFlags": "Rapidly rising creatinine + crescents on biopsy = crescentic lupus nephritis → treat as RPGN urgency. Nephrotic syndrome + lupus = thrombosis risk (esp. with antiphospholipid antibodies).",
   "mcqTrap": "'Start treatment based on high anti-dsDNA and low complement without biopsy' — WRONG; biopsy is required to assign ISN/RPS class because class III/IV vs V vs VI demand very different therapy. Also wrong: omitting hydroxychloroquine.",
   "viva": "Examiner: 'Why biopsy if you already know it's lupus?' = histological class (III/IV vs V vs VI sclerotic) and activity/chronicity indices determine immunosuppression intensity and prognosis. Consent station: biopsy bleeding risk, BP/coag check first.",
   "mnemonic": "ISN/RPS: I minimal, II mesangial, III focal proliferative, IV diffuse proliferative (worst/commonest tx), V membranous, VI sclerosed. 'Everyone gets Plaquenil (HCQ)'.",
   "tags": [
    "lupus nephritis",
    "ISN/RPS class",
    "biopsy",
    "mycophenolate",
    "hydroxychloroquine"
   ],
   "source": "KDIGO 2024 Lupus Nephritis Guideline; EULAR/ERA 2023/2024; eTG current",
   "verified": true,
   "title": "Lupus nephritis",
   "subtitle": "BIOPSY decides class & treatment; HCQ for everyone",
   "id": "renal-32"
  },
  {
   "topic": "Nephritic vs nephrotic syndrome — the discriminator that decides everything",
   "subarea": "Glomerular & immune renal",
   "trap": "The single most tempting wrong move is calling any heavy proteinuria 'nephrotic' and any haematuria 'nephritic'. The discriminator is the PATTERN, not one number. NEPHROTIC = bland sediment + proteinuria >3.5 g/24h (or spot PCR roughly >300–350 mg/mmol) + albumin <30 g/L + oedema + hyperlipidaemia (podocyte/GBM permeability problem). NEPHRITIC = ACTIVE sediment (dysmorphic RBCs, RBC casts) + haematuria + HTN + oedema + variable/sub-nephrotic proteinuria + often AKI/rising creatinine (inflammatory/proliferative). Gotcha: they OVERLAP — diffuse proliferative lupus (class IV) and MPGN give a mixed 'nephritic-nephrotic' picture, and that combination is the classic exam stem. A normal serum albumin with 'nephrotic-range' protein on dipstick should make you suspect the collection/ratio, not the diagnosis.",
   "discriminator": "RBC casts / dysmorphic RBCs = nephritic (glomerular inflammation). Frothy urine + oedema + bland sediment + albumin <30 = nephrotic. Mixed picture (active sediment AND >3.5 g protein) = think proliferative lupus or MPGN.",
   "whatFirst": "Confirm with FORMAL urine microscopy (phase-contrast for dysmorphic RBCs/casts) + a quantified protein (spot ACR or PCR, not just dipstick) + serum albumin + creatinine/eGFR. Dipstick first, microscopy + ratio to characterise.",
   "redFlags": "Rising creatinine + active sediment = possible RPGN → urgent nephrology (treatment within days preserves nephrons). Nephrotic syndrome + new unilateral leg swelling/pleuritic chest pain = renal vein thrombosis/PE (hypercoagulable from urinary antithrombin loss).",
   "mcqTrap": "'Proteinuria 4 g/day therefore nephrotic syndrome' — WRONG if albumin is normal and there is no oedema (that is nephrotic-range PROTEINURIA, not the syndrome). The syndrome needs the proteinuria + hypoalbuminaemia + oedema triad.",
   "viva": "Examiner probes: 'How do you tell nephritic from nephrotic at the bedside before any result?' Answer with sediment (casts) + BP + proteinuria magnitude + renal function trajectory, then escalation if creatinine rising.",
   "mnemonic": "NephrItic = Inflammation/RBC casts/hypertension; NephrOtic = lOts of prOtein/Oedema/lOw albumin/lipids. 'PHAROH' for nephrotic: Proteinuria>3.5, Hypoalbuminaemia, Hyperlipidaemia, Oedema (and Hypercoagulable).",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Feature</th><th>Nephritic</th><th>Nephrotic</th></tr></thead><tbody><tr><td>Sediment</td><td>Active: dysmorphic RBCs, RBC casts</td><td>Bland; fatty/oval fat bodies, lipiduria</td></tr><tr><td>Proteinuria</td><td>Sub-nephrotic (usually &lt;3.5 g/day)</td><td>&gt;3.5 g/24h (PCR &gt;300–350 mg/mmol)</td></tr><tr><td>Serum albumin</td><td>Usually preserved</td><td>&lt;30 g/L</td></tr><tr><td>BP / function</td><td>HTN, often rising creatinine/AKI</td><td>Often normal early; oedema dominant</td></tr><tr><td>Mechanism</td><td>Glomerular inflammation/proliferation</td><td>Podocyte/GBM permeability</td></tr></tbody></table>",
   "tags": [
    "nephritic",
    "nephrotic",
    "proteinuria",
    "RBC casts",
    "discriminator"
   ],
   "source": "KDIGO 2021 Glomerular Diseases; Kidney Health Australia CKD Management in Primary Care handbook (2020); eTG (Therapeutic Guidelines) current",
   "verified": true,
   "title": "Nephritic vs nephrotic syndrome",
   "subtitle": "the discriminator that decides everything",
   "id": "renal-33"
  },
  {
   "topic": "Post-streptococcal (post-infectious) glomerulonephritis — latency + LOW C3 that recovers",
   "subarea": "Glomerular & immune renal",
   "trap": "Two examiner traps. (1) Timing: PSGN follows pharyngitis by ~1–3 weeks and follows skin infection (impetigo/pyoderma) by ~3–6 weeks — if 'haematuria during the sore throat', that is IgAN, not PSGN. (2) Complement: C3 is LOW and should NORMALISE by 6–8 weeks; if C3 stays low beyond ~8 weeks, STOP calling it PSGN and think MPGN or lupus or C3 glomerulopathy. Another trap: management is SUPPORTIVE (BP/fluid/salt control, loop diuretic for oedema) — antibiotics treat the infection/transmission but do NOT change the established GN, and steroids are NOT routine.",
   "discriminator": "LOW C3 + recent strep (raised ASOT after pharyngitis; anti-DNase B more reliable after skin infection) + 1–3 (throat) or 3–6 (skin) week latency + self-limiting in children. Persistently low C3 >8 weeks ⇒ not PSGN.",
   "whatFirst": "Confirm strep evidence (ASOT and/or anti-DNase B), check C3/C4 (C3 low, C4 often normal), urine microscopy (RBC casts), BP and fluid status. Manage fluid overload/HTN with salt restriction and a loop diuretic.",
   "redFlags": "Hypertensive encephalopathy or pulmonary oedema from volume overload in a child = emergency. Failure to recover renal function / persistent low C3 / nephrotic-range protein = re-biopsy and reconsider (crescentic course).",
   "mcqTrap": "'Give antibiotics to treat the glomerulonephritis' — WRONG; antibiotics treat the streptococcal infection/limit spread but do not reverse established immune-complex GN. Best answer is supportive care (BP and fluid management).",
   "viva": "Examiner: 'Child with cola-coloured urine 2 weeks after tonsillitis — most useful confirmatory test?' = LOW C3 plus evidence of recent strep; and 'what would make you doubt PSGN?' = C3 still low at 8 weeks.",
   "mnemonic": "C3 down, ASOT up, kidneys recover. 'Throat 1–3, Skin 3–6'. Low complement GN: 'PSGN, MPGN, Lupus, Endocarditis, Cryoglobulin'.",
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">C3 LOW, recovers by 6–8 wks</span><span class=\"gv-pill\">Throat→GN: 1–3 wks</span><span class=\"gv-pill\">Skin→GN: 3–6 wks</span><span class=\"gv-pill\">Mx = supportive</span><span class=\"gv-pill\">Persistent low C3 ⇒ not PSGN</span></div>",
   "tags": [
    "post-streptococcal GN",
    "low complement",
    "latency",
    "ASOT",
    "anti-DNase B"
   ],
   "source": "Queensland Health/CARPA APSGN guidance; eTG current; KDIGO 2021 Glomerular Diseases",
   "verified": true,
   "title": "Post-streptococcal (post-infectious) glomerulonephritis",
   "subtitle": "latency + LOW C3 that recovers",
   "id": "renal-34"
  },
  {
   "topic": "Proteinuria & haematuria work-up — quantify with ACR/PCR, and split urology vs nephrology",
   "subarea": "Glomerular & immune renal",
   "trap": "Two traps. (1) Acting on dipstick alone — dipstick haematuria/protein must be CONFIRMED and QUANTIFIED: protein with a first-morning spot ACR (or PCR), haematuria with formal urine microscopy (phase-contrast). Dipstick detects albumin poorly at low levels and misses Bence-Jones; it gives false-positive blood with myoglobin/haemoglobin (heme-positive, NO RBCs on micro = rhabdo/haemolysis, not glomerular). (2) Sending everyone to urology — the FORK is glomerular vs urological: dysmorphic RBCs / RBC casts / proteinuria / raised creatinine = NEPHROLOGY (glomerular); monomorphic RBCs / clots / isolated urinary-tract bleeding = UROLOGY (malignancy work-up). KEY POINT: ALL visible (macroscopic) haematuria warrants urology referral at ANY age (once glomerular/synpharyngitic causes excluded); the age/smoking/exposure risk factors are used to RISK-STRATIFY NON-visible (microscopic) haematuria for cystoscopy + CT urogram.",
   "discriminator": "Dysmorphic RBCs + RBC casts + proteinuria = glomerular → nephrology. Monomorphic RBCs ± clots, isolated haematuria, older age/smoker = urological → urology. Visible haematuria → urology regardless of age. Heme-positive dipstick but NO RBCs on microscopy = myo/haemoglobinuria, not true haematuria.",
   "whatFirst": "Confirm + quantify: first-morning spot ACR (or PCR) for protein; formal urine microscopy for RBC morphology/casts; check eGFR/creatinine + BP. Then route to the correct specialty.",
   "redFlags": "Visible haematuria at ANY age → urology for malignancy exclusion. Non-visible haematuria with risk factors (older age, smoking, occupational exposure, irritative LUTS) → urology. Proteinuria + haematuria + AKI/HTN → urgent nephrology (possible GN/RPGN).",
   "mcqTrap": "'Refer all microscopic haematuria to urology for cystoscopy' — WRONG when there are dysmorphic RBCs, RBC casts or proteinuria (that is glomerular → nephrology); microscopic haematuria is risk-stratified. And 'positive dipstick for blood = haematuria' — WRONG if microscopy shows no RBCs (myoglobin/haemoglobin). Also wrong: withholding urology for visible haematuria because the patient is young.",
   "viva": "Examiner: 'Dipstick blood — your first three tests and how do you decide urology vs renal?' = microscopy (RBC morphology/casts), ACR/PCR, eGFR/BP; glomerular features→renal, otherwise→urology; visible haematuria→urology regardless of age.",
   "mnemonic": "'Casts & dysmorphic = Kidney clinic (nephro); Clots & clear-RBC = Cystoscopy (uro)'. Visible blood = urology, any age. ACR for albumin, micro for blood.",
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Dipstick positive (blood/protein)</div><div class=\"gv-step\">Confirm: micro (RBC morphology/casts) + spot ACR/PCR + eGFR/BP</div><div class=\"gv-step\">Glomerular (dysmorphic RBC, casts, proteinuria, ↑Cr) → NEPHROLOGY</div><div class=\"gv-step\">Visible OR risk-stratified non-visible (monomorphic RBC, clots, older/smoker) → UROLOGY (CT urogram + cystoscopy)</div></div>",
   "tags": [
    "haematuria",
    "proteinuria",
    "ACR",
    "urine microscopy",
    "urology vs nephrology"
   ],
   "source": "RACGP haematuria guidance (Australian); Kidney Health Australia CKD Management in Primary Care handbook (2020); eTG current",
   "verified": true,
   "title": "Proteinuria & haematuria work-up",
   "subtitle": "quantify with ACR/PCR, and split urology vs nephrology",
   "id": "renal-35"
  },
  {
   "topic": "Rapidly progressive GN (crescentic) — the nephrological emergency: treat WHILE biopsy pending",
   "subarea": "Glomerular & immune renal",
   "trap": "The killer trap is WAITING for the biopsy/serology before treating. RPGN = >50% loss of renal function over days–weeks with active sediment and crescents on biopsy; nephrons are lost irreversibly fast, so you escalate to nephrology TODAY and often start pulse IV methylprednisolone empirically while serology/biopsy are pending. Classify by immunofluorescence: (1) anti-GBM/linear (Goodpasture — lung + kidney); (2) immune-complex/granular (lupus, IgA, post-infectious); (3) pauci-immune (ANCA-associated — GPA/MPA, the commonest). Trap: 'do PLEX for all RPGN' — plasma exchange is for anti-GBM disease and for selected ANCA-GN (creatinine ≥300 µmol/L, dialysis-requiring/rapidly rising creatinine, or diffuse alveolar haemorrhage with hypoxaemia); it is NOT routine for every crescentic GN.",
   "discriminator": "Linear IF + anti-GBM Ab + lung haemorrhage = Goodpasture. Pauci-immune + ANCA (c-ANCA/PR3 = GPA; p-ANCA/MPO = MPA) = ANCA vasculitis. Granular IF + low complement = immune-complex (lupus/PIGN/cryo).",
   "whatFirst": "URGENT: bloods for ANCA + anti-GBM + ANA/dsDNA + complement, urgent renal biopsy, and discuss empirical pulse methylprednisolone (e.g. IV 500 mg–1 g daily x3) with nephrology while awaiting results. Induce with glucocorticoids + cyclophosphamide OR rituximab; PLEX for anti-GBM and severe ANCA-GN per PEXIVAS criteria.",
   "redFlags": "Haemoptysis + AKI + active sediment = pulmonary-renal syndrome → ICU/nephrology immediately (anti-GBM or ANCA vasculitis). Anti-GBM with dialysis-dependence and 100% crescents may be unsalvageable — speed matters.",
   "mcqTrap": "'Await biopsy result before any treatment' — WRONG in suspected RPGN; empirical high-dose steroids are started with nephrology because delay = permanent nephron loss. Also wrong: 'PLEX for all RPGN' (only anti-GBM and severe ANCA-GN: creatinine ≥300, dialysis/rising creatinine, or DAH).",
   "viva": "ISBAR escalation station: 'Creatinine 180→520 over 10 days, RBC casts, haemoptysis.' Examiner wants: recognise pulmonary-renal emergency, urgent nephrology referral, send ANCA/anti-GBM, empirical pulse steroids, consent for biopsy + PLEX.",
   "mnemonic": "RPGN IF: Linear=anti-GBM, Lumpy(granular)=immune-complex, Lacking(pauci-immune)=ANCA. 'Crescents = call now'.",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Type</th><th>Immunofluorescence</th><th>Serology</th><th>Clue</th></tr></thead><tbody><tr><td>Type I</td><td>Linear</td><td>anti-GBM Ab</td><td>Goodpasture: lung+kidney</td></tr><tr><td>Type II</td><td>Granular</td><td>↓complement, ANA/dsDNA, IgA</td><td>Lupus / PIGN / IgA / cryo</td></tr><tr><td>Type III</td><td>Pauci-immune</td><td>ANCA (PR3/MPO)</td><td>GPA/MPA (commonest)</td></tr></tbody></table>",
   "tags": [
    "RPGN",
    "crescentic",
    "ANCA",
    "anti-GBM",
    "pulse methylprednisolone",
    "emergency"
   ],
   "source": "KDIGO 2024 ANCA-Associated Vasculitis Guideline; KDIGO 2021 Glomerular Diseases (anti-GBM); eTG current",
   "verified": true,
   "title": "Rapidly progressive GN (crescentic)",
   "subtitle": "the nephrological emergency: treat WHILE biopsy pending",
   "id": "renal-36"
  },
  {
   "topic": "When to biopsy / when to refer — the Australian (KHA) thresholds & glomerular triggers",
   "subarea": "Glomerular & immune renal",
   "trap": "Mixing up the CKD referral thresholds and forgetting the 'rate of decline' and 'glomerular' triggers. Kidney Health Australia: refer to nephrology if eGFR <30 mL/min/1.73m², OR persistent macroalbuminuria ACR ≥30 mg/mmol (A3), OR a sustained decline in eGFR (e.g. ≥25% with a change in CKD stage, or sustained fall), OR glomerular haematuria with proteinuria, OR uncontrolled/resistant hypertension, OR unexplained AKI. Definition of CKD: eGFR <60 OR a marker of kidney damage (e.g. ACR ≥3 mg/mmol = A2/A3, haematuria) PERSISTING ≥3 months. Albuminuria categories: A1 <3, A2 3–30, A3 >30 mg/mmol. BIOPSY (after nephrology referral) is the answer when histology will change management: nephrotic syndrome in adults, suspected RPGN/crescentic GN (urgent), glomerular haematuria + proteinuria/rising creatinine, suspected lupus/vasculitis nephritis, unexplained AKI. Trap: biopsy is contraindicated/deferred if uncontrolled HTN, coagulopathy/antiplatelets, single kidney (relative), or small scarred kidneys (won't change management).",
   "discriminator": "Refer (KHA): eGFR <30, ACR ≥30 (A3 macroalbuminuria), rapid/sustained decline, glomerular haematuria+proteinuria, resistant HTN, unexplained AKI. Biopsy: when tissue changes management (adult nephrotic, RPGN, GN with rising Cr, lupus/vasculitis) AND it is safe (BP controlled, coags normal).",
   "whatFirst": "Establish persistence (repeat eGFR + ACR over ≥3 months unless acute), control BP, stop nephrotoxins. For acute/active pictures (RPGN, AKI, nephritic) escalate SAME DAY rather than waiting on persistence.",
   "redFlags": "Acute kidney injury + active sediment, oligo-anuria, pulmonary-renal syndrome, hyperkalaemia, refractory fluid overload, or eGFR crashing = urgent/emergent nephrology — bypass the 3-month rule.",
   "mcqTrap": "'Refer once eGFR <60' — WRONG as a blanket rule; KHA threshold for routine specialist referral is eGFR <30 (or A3 macroalbuminuria, sustained decline, glomerular features). Also wrong: biopsying a patient with uncontrolled BP or on antiplatelets without correcting first.",
   "viva": "Examiner: 'This patient with eGFR 45 and ACR 5 — refer or not, and would you biopsy?' = generally manage in primary care/GP-shared (A2, eGFR ≥30, stable) unless decline/glomerular features; biopsy only if histology changes management and bleeding risk addressed (consent: bleeding, need for post-procedure monitoring).",
   "mnemonic": "Refer 'RAP-AH': Rate of decline, ACR ≥30 (A3), Persistent eGFR <30, AKI unexplained, Haematuria glomerular (+ resistant HTN). Biopsy = 'tissue must change the plan, and it must be safe'.",
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Albuminuria (ACR)</th><th>Category</th><th>Action</th></tr></thead><tbody><tr><td>&lt;3 mg/mmol</td><td>A1 normal–mild</td><td>Routine monitoring</td></tr><tr><td>3–30 mg/mmol</td><td>A2 moderate</td><td>RAAS blockade; monitor; refer if other triggers</td></tr><tr><td>&gt;30 mg/mmol</td><td>A3 severe (macroalbuminuria)</td><td>Refer nephrology</td></tr></tbody></table>",
   "tags": [
    "referral",
    "biopsy",
    "Kidney Health Australia",
    "eGFR <30",
    "ACR A3"
   ],
   "source": "Kidney Health Australia CKD Management in Primary Care handbook (2020, current); KDIGO 2024 CKD; eTG current",
   "verified": true,
   "title": "When to biopsy / when to refer",
   "subtitle": "the Australian (KHA) thresholds & glomerular triggers",
   "id": "renal-37"
  }
 ]
}
);
