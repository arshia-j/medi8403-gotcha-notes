window.GOTCHA = window.GOTCHA || { modules: [] };
window.GOTCHA.modules.push(
{
 "id": "gastroenterology",
 "name": "GI & Hepatobiliary",
 "category": "Medicine",
 "blurb": "Written-exam + VIVA. Resuscitate-then-scope GI bleeding, LFT-pattern liver reasoning, pancreatitis and biliary sepsis.",
 "cards": [
  {
   "topic": "Antiplatelet/anticoagulant management around an upper GI bleed (resume aspirin early)",
   "subarea": "Upper GI & GI bleeding",
   "trap": "- Counterintuitive exam point: in a patient on aspirin for **SECONDARY cardiovascular prevention** who has a peptic ulcer bleed, you should **resume aspirin early** (typically within **3-5 days**, once haemostasis achieved)\n  - Stopping it permanently increases **cardiovascular death** more than the rebleed risk it prevents\n  - Hold it only **transiently**\n- Aspirin for **PRIMARY prevention** can often just be stopped\n- Always **co-prescribe a PPI** when restarting\n- **Reverse/withhold anticoagulants** acutely but plan reintroduction",
   "whatFirst": "- During active bleed: **hold antiplatelet/anticoagulant**, correct coagulopathy, achieve **endoscopic haemostasis**\n- Then:\n  - Resume **secondary-prevention aspirin** early (within ~3-5 days) with **PPI cover**\n  - Reassess **primary-prevention aspirin** (often cease)\n  - Restart **anticoagulation** per thrombotic risk once haemostasis secure",
   "discriminator": "- **Secondary prevention** (post-MI, stent, stroke, PAD): resume early — risk of stopping **outweighs** rebleed\n- **Primary prevention**: often discontinue\n- **Dual antiplatelet post-stent**: discuss with cardiology; generally continue at least **aspirin**",
   "redFlags": "- **Recent coronary stent** (stent thrombosis risk if antiplatelets stopped)\n- **Mechanical valve** / high CHA2DS2-VASc on anticoagulant\n  - Urgent **cardiology/haematology input** on timing of reintroduction",
   "viva": "- Once haemostasis achieved: restart **secondary-prevention aspirin** early, within a few days, under **PPI cover**\n  - Permanently stopping it raises **cardiovascular mortality**\n- **Primary-prevention aspirin**: usually stop\n- **Anticoagulation**: reintroduce based on thrombotic risk after source controlled, with specialist input for stents or mechanical valves",
   "mcqTrap": "- **'Permanently cease aspirin'** after a bleeding ulcer in a patient with a recent coronary stent — wrong; risks fatal **stent thrombosis**\n  - Resume early with **PPI cover**",
   "mnemonic": "Secondary prevention = resume Soon (with PPI); Primary prevention = Probably stop.",
   "source": "ACG UGIB guideline 2021 (early aspirin resumption for secondary prevention); Sung JJ et al. Ann Intern Med 2010; Therapeutic Guidelines (eTG) current.",
   "verified": true,
   "tags": [
    "aspirin",
    "antiplatelet",
    "anticoagulation",
    "secondary-prevention",
    "rebleed",
    "PPI-cover"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Drug / indication</th><th>After haemostasis</th></tr><tr><td>Aspirin — secondary prevention</td><td>Resume early (~<span class=\"gv-num\">3-5 days</span>) + PPI</td></tr><tr><td>Aspirin — primary prevention</td><td>Usually cease</td></tr><tr><td>DAPT post recent stent</td><td>Continue — cardiology input (stent thrombosis risk)</td></tr><tr><td>Anticoagulant</td><td>Reverse/hold acutely; restart per thrombotic risk</td></tr></table>",
   "title": "Antiplatelet/anticoagulant management around an upper GI bleed…",
   "id": "gastroenterology-1"
  },
  {
   "topic": "Dyspepsia red flags (ALARMS) & who skips test-and-treat for endoscopy",
   "subarea": "Upper GI & GI bleeding",
   "trap": "- The decision hinges on **alarm features and age**\n- ANY alarm feature, OR **new-onset dyspepsia at/after ~50-55** (Aus practice) / **≥60** (international guidelines), mandates **endoscopy first** — not empirical PPI, not test-and-treat\n- Empirical acid suppression **masking an early gastric cancer** is the catch\n- **New dysphagia** and **unintentional weight loss** are the highest-yield red flags",
   "whatFirst": "- Take history for **alarm features**\n  - Present: **urgent endoscopy** referral\n  - Absent + young: lifestyle advice, **H. pylori test-and-treat** or empirical PPI trial, review",
   "discriminator": "- **Functional/uninvestigated dyspepsia** (young, no alarms): manage without scope\n- **Alarm features or older new-onset**: organic pathology must be excluded by **gastroscopy**\n- **Iron-deficiency anaemia** in a man or postmenopausal woman: GI-malignancy red flag warranting **endoscopic work-up**",
   "redFlags": "- **ALARMS mnemonic:**\n  - **A**naemia (iron deficiency)\n  - **L**oss of weight (unintentional)\n  - **A**norexia\n  - **R**ecent-onset progressive/persistent symptoms or melaena\n  - **M**ass\n  - **S**wallowing difficulty (dysphagia/odynophagia)\n- Also: recurrent vomiting, family history of GI cancer, **age ≥50-55** new onset",
   "viva": "- Screen every dyspeptic for alarm features: dysphagia, weight loss, GI bleeding, anaemia, vomiting, a mass\n- Any alarm features, or new dyspepsia over about **50**: **endoscopy** rather than empirical treatment\n  - Must not mask a **gastric or oesophageal cancer**\n- Examiner probe: name the alarm features — run **ALARMS**",
   "mcqTrap": "- **'Empirical PPI / H. pylori test-and-treat'** for a 58-year-old with new dyspepsia and weight loss — wrong; alarm features + age demand **prompt endoscopy first**",
   "mnemonic": "ALARMS: Anaemia, Loss of weight, Anorexia, Recent-onset/melaena, Mass, Swallowing difficulty.",
   "source": "GESA / RACGP dyspepsia guidance; Therapeutic Guidelines (eTG) current; ACG-CAG dyspepsia 2017 (age ≥60 internationally).",
   "verified": false,
   "cutoffs": [
    "Alarm features present → **endoscopy**",
    "New-onset dyspepsia age **~50-55** (Aus) / **≥60** (intl) → endoscopy",
    "Young + no alarms → **test-and-treat** or empirical PPI"
   ],
   "tags": [
    "dyspepsia",
    "alarm-features",
    "ALARMS",
    "endoscopy-referral",
    "gastric-cancer"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Feature</th><th>Action</th></tr><tr><td>Any alarm feature (ALARMS)</td><td>Urgent endoscopy</td></tr><tr><td>New-onset dyspepsia, age ~50-55+ (Aus)</td><td>Endoscopy</td></tr><tr><td>Iron-deficiency anaemia (man / postmenopausal)</td><td>Endoscopy ± colonoscopy</td></tr><tr><td>Young, no alarms</td><td>Test-and-treat / empirical PPI trial</td></tr></table>",
   "title": "Dyspepsia red flags (ALARMS) & who skips…",
   "id": "gastroenterology-2",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Adenocarcinoma_of_the_stomach.jpg/640px-Adenocarcinoma_of_the_stomach.jpg",
     "caption": "Gastric adenocarcinoma - endoscopic appearance (red-flag dyspepsia)",
     "alt": "Upper GI endoscopy showing an ulcerated/fungating gastric adenocarcinoma - the end-point of urgent endoscopy triggered by alarm/ALARMS features in dyspepsia",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Glasgow-Blatchford score (GBS) — the pre-endoscopy, pre-treatment risk tool",
   "subarea": "Upper GI & GI bleeding",
   "trap": "- **GBS uses ONLY admission clinical + lab data**: urea, Hb, systolic BP, pulse, melaena, syncope, hepatic/cardiac disease\n  - **NO endoscopy** and crucially **NO age**\n- The 'discharge' answer is a **GBS of 0** (some guidelines extend to **≤1**): very low risk, consider outpatient management\n- Do not confuse with the **Rockall score** (needs endoscopic findings and includes age) — used for rebleeding/mortality **after** the scope",
   "whatFirst": "- Calculate **GBS at presentation** to decide admission vs safe discharge and urgency\n- **GBS 0** (or **≤1**) = very low risk, candidate for **outpatient endoscopy**",
   "discriminator": "- **GBS** = pre-endoscopy; predicts need for intervention/transfusion; **no age, no endoscopy**\n- **Full Rockall** = post-endoscopy; predicts rebleeding/mortality; includes **age (≥60, ≥80)** and endoscopic stigmata\n- **AIMS65** = mortality (Albumin, INR, Mental status, SBP, **age >65**)",
   "redFlags": "- Any **non-zero GBS** in an unwell patient\n- **Melaena**\n- **Syncope**\n- **Raised urea** (sign of significant bleed/protein load)\n  - All: admit; high GBS → **expedite endoscopy** and senior review",
   "viva": "- Use **Glasgow-Blatchford score** before endoscopy to decide who can be safely managed as an outpatient\n  - Score of **zero** = very low risk\n  - **Deliberately excludes age** and endoscopic findings, unlike the Rockall score used after the scope\n- Examiner probe — which parameters?: **urea, Hb, SBP, pulse, melaena, syncope, liver/cardiac disease**",
   "mcqTrap": "- Choosing **Rockall** (or 'patient too young, discharge regardless of score') for the **pre-endoscopy** outpatient-discharge decision\n  - The question wants **GBS**; GBS has **no age term** so young age alone is not reassurance",
   "mnemonic": "Blatchford = Before the scope (no age); Rockall = Risk after the scope (has age).",
   "source": "Blatchford O, Lancet 2000; NSW ACI ECI Upper GI bleeding tool; ACG UGIB guideline 2021 (GBS ≤1 outpatient).",
   "verified": true,
   "tags": [
    "Glasgow-Blatchford",
    "risk-score",
    "Rockall",
    "discharge",
    "no-age"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th></th><th>Glasgow-Blatchford</th><th>Rockall (full)</th></tr><tr><td>Timing</td><td>Pre-endoscopy</td><td>Post-endoscopy</td></tr><tr><td>Includes age?</td><td>No</td><td>Yes</td></tr><tr><td>Includes endoscopic findings?</td><td>No</td><td>Yes</td></tr><tr><td>Predicts</td><td>Need for intervention/transfusion</td><td>Rebleeding & mortality</td></tr><tr><td>Discharge cut-off</td><td><span class=\"gv-num\">0</span> (or ≤1)</td><td>n/a</td></tr></table>",
   "title": "Glasgow-Blatchford score (GBS)",
   "subtitle": "the pre-endoscopy, pre-treatment risk tool",
   "id": "gastroenterology-3"
  },
  {
   "topic": "GORD — PPI step-down, the no-improvement-needs-scope rule, and Barrett's surveillance",
   "subarea": "Upper GI & GI bleeding",
   "trap": "- GORD without alarm features is a **clinical diagnosis treated empirically** — endoscopy is NOT needed to diagnose typical GORD\n- Two catches:\n  - **(1)** Failure to respond to an adequate **PPI trial (4-8 weeks)** is itself an indication for endoscopy (and to reconsider the diagnosis / non-acid causes / malignancy)\n  - **(2)** Long-term PPI should be **stepped DOWN** to lowest effective dose / on-demand once controlled — don't leave patients on indefinite high-dose without review\n- Take PPIs **30-60 min before food**\n- **Barrett's oesophagus** needs **surveillance endoscopy**, not a cure with acid suppression",
   "whatFirst": "- Typical GORD, no alarms: **lifestyle measures + empirical PPI trial** (standard dose, **4-8 weeks**)\n  - If controlled: **step down/stop**\n  - If no response or alarm features: **endoscopy**",
   "discriminator": "- **Uncomplicated GORD**: treat empirically\n- **Refractory GORD** (failed PPI) or alarms: **endoscopy**\n- **Barrett's** (intestinal metaplasia): periodic **surveillance** for dysplasia; PPI controls reflux but **doesn't remove cancer risk**\n- **Distinguish cardiac chest pain** before attributing to reflux",
   "redFlags": "- **Dysphagia**\n- **Odynophagia**\n- **Weight loss**\n- GI bleeding\n- Anaemia\n- Vomiting\n- **PPI-refractory symptoms**\n  - All: endoscopy\n- **Long-segment Barrett's / dysplasia**: specialist surveillance/therapy",
   "viva": "- Typical reflux without alarm features: empirical **PPI for 4-8 weeks**, taken **before food**, then step down to lowest effective dose\n- Failure to respond or any alarm feature: **gastroscopy** — do not just escalate the dose blindly",
   "mcqTrap": "- **'Double the PPI dose indefinitely'** for a patient whose reflux hasn't responded to 8 weeks of standard PPI — wrong\n  - Non-response is an indication to **investigate (endoscopy)**, not to keep escalating empirically",
   "mnemonic": "PPI = Pre-meal, Period (4-8 wk trial), then Pare down (step-down).",
   "source": "GESA / RACGP GORD guidance; Therapeutic Guidelines (eTG) current.",
   "verified": true,
   "tags": [
    "GORD",
    "PPI",
    "step-down",
    "Barretts",
    "refractory",
    "endoscopy"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Typical GORD, no alarms</div><div class=\"gv-step\">Lifestyle + empirical PPI <span class=\"gv-num\">4-8 wk</span> (before food)</div><div class=\"gv-step\">Controlled → step down to lowest effective / on-demand</div><div class=\"gv-step\">No response OR alarm feature → endoscopy</div></div>",
   "title": "GORD",
   "subtitle": "PPI step-down, the no-improvement-needs-scope rule, and Barrett's surveillance",
   "id": "gastroenterology-4",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Barretts_esophagus.jpg/640px-Barretts_esophagus.jpg",
     "caption": "Barrett's oesophagus - salmon-coloured columnar metaplasia at the GOJ",
     "alt": "Upper GI endoscopy showing the characteristic salmon-pink tongues of columnar metaplasia extending proximally from the gastro-oesophageal junction, replacing normal white squamous mucosa (Barrett's oesophagus)",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "H. pylori eradication regimen — Australian doses, duration, and the resistance shift",
   "subarea": "Upper GI & GI bleeding",
   "trap": "- Australian first-line is **triple therapy**: PPI + **amoxicillin 1 g** + **clarithromycin 500 mg**, all BD\n- Catch is **DURATION**: classic eTG/PBS Nexium HP7 pack is **7 days**, but current Australian guidance (RACGP AJGP Oct 2025) favours **14 days** with rising clarithromycin resistance\n- **NEVER reuse clarithromycin** if first-line fails\n- Penicillin allergy: swap amoxicillin for **metronidazole 400 mg BD**\n- Failure: **bismuth-based quadruple** or **levofloxacin-based salvage** + specialist/gastroscopy",
   "whatFirst": "- First-line: **esomeprazole 20 mg BD + amoxicillin 1 g BD + clarithromycin 500 mg BD** for **7-14 days** (favour 14)\n- Penicillin allergy: substitute **metronidazole 400 mg BD**\n- Confirm cure with **UBT ≥4 weeks** later",
   "discriminator": "- First-line clarithromycin triple fails: do **NOT** repeat clarithromycin (resistance)\n  - Move to **bismuth-based quadruple** (PPI + bismuth + tetracycline + metronidazole)\n  - Or **levofloxacin-based**; rifabutin/moxifloxacin are later options\n  - Ideally with **susceptibility testing** and specialist input",
   "redFlags": "- **Two eradication failures**, ongoing symptoms, or red-flag features\n  - Gastroscopy + **culture/susceptibility**, specialist referral",
   "viva": "- First-line: PPI + amoxicillin + clarithromycin BD for **14 days** (given rising clarithromycin resistance)\n- Swap to **metronidazole** if penicillin-allergic\n- **Never reuse clarithromycin** after failure\n- Confirm cure with a **breath test four weeks on**",
   "mcqTrap": "- **'Re-treat with the same clarithromycin-based triple therapy'** after a documented eradication failure — wrong\n  - Acquired **clarithromycin resistance**; switch antibiotic class (**bismuth quadruple or levofloxacin**)",
   "mnemonic": "PAC for first-line (PPI, Amoxicillin, Clarithromycin); allergic = PMC (Metronidazole replaces amoxicillin); fail = don't re-CLAR.",
   "source": "RACGP AJGP October 2025 (Helicobacter pylori — Rise of the resistance, case study); Therapeutic Guidelines (eTG) current; PBS Nexium HP7 7-day pack.",
   "verified": false,
   "tags": [
    "H-pylori",
    "eradication",
    "triple-therapy",
    "clarithromycin-resistance",
    "penicillin-allergy"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Line</th><th>Regimen (all BD)</th><th>Duration</th></tr><tr><td>First-line</td><td>Esomeprazole 20 mg + amoxicillin 1 g + clarithromycin 500 mg</td><td><span class=\"gv-num\">7-14 days</span> (favour 14)</td></tr><tr><td>Penicillin allergy</td><td>Esomeprazole + clarithromycin + metronidazole 400 mg</td><td>14 days</td></tr><tr><td>After failure</td><td>Bismuth quadruple or levofloxacin-based (no repeat clarithromycin)</td><td>14 days</td></tr></table>",
   "title": "H. pylori eradication regimen",
   "subtitle": "Australian doses, duration, and the resistance shift",
   "id": "gastroenterology-5"
  },
  {
   "topic": "H. pylori test-and-treat — when, the washout traps, and test of cure",
   "subarea": "Upper GI & GI bleeding",
   "trap": "- Two washout traps cost marks:\n  - **(1) Before testing:** stop **PPI for 2 weeks** and **antibiotics/bismuth for 4 weeks** — testing on a PPI gives **FALSE NEGATIVES** (urea breath test, stool antigen, rapid urease)\n  - **(2) Test of cure:** repeat **urea breath test at least 4 weeks AFTER** finishing eradication therapy — testing too soon is unreliable\n- **Serology cannot confirm eradication** (stays positive)\n- Test-and-treat (without endoscopy) is for uninvestigated dyspepsia in patients **UNDER ~50-55 with NO alarm features**",
   "whatFirst": "- Uninvestigated dyspepsia, young (<50-55), no alarm features: **non-invasive H. pylori test** (urea breath test or stool antigen) after appropriate washout\n  - Eradicate if positive\n  - Confirm cure with **UBT ≥4 weeks later**",
   "discriminator": "- **UBT/stool antigen/rapid urease** = active infection; PPI- and antibiotic-sensitive (**need washout**)\n- **Serology** = past or present exposure; **NOT for test of cure**\n- Always confirm eradication after: **bleeding ulcer, MALT lymphoma**, or persistent symptoms",
   "redFlags": "- **Alarm features** (see dyspepsia card) or age **≥50-55**: endoscopy first, NOT test-and-treat\n- **Bleeding peptic ulcer**: always test for H. pylori\n  - Test during admission can be **falsely negative on PPI** — repeat as outpatient if negative",
   "viva": "- Young patient, uninvestigated dyspepsia, no alarm features: **test and treat**\n  - Ensure off **PPIs for 2 weeks** first or will get a false negative\n  - Confirm cure with **urea breath test at least 4 weeks** after therapy\n- **Serology can't confirm eradication**",
   "mcqTrap": "- **'UBT is negative on a patient currently taking esomeprazole — H. pylori excluded'** — false\n  - PPIs suppress the organism and cause **false-negative UBT/stool/biopsy** tests\n- Also: using **serology as test of cure**",
   "mnemonic": "PPI off 2 weeks, Antibiotics off 4 weeks; test of cure 4 weeks After — '2 before, 4 before, 4 after'.",
   "source": "RACGP AJGP Oct 2025 (Helicobacter pylori — Rise of the resistance); Therapeutic Guidelines (eTG) current; GESA.",
   "verified": true,
   "tags": [
    "H-pylori",
    "test-and-treat",
    "washout",
    "urea-breath-test",
    "test-of-cure"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Step</th><th>Rule</th></tr><tr><td>Stop PPI before testing</td><td><span class=\"gv-num\">2 weeks</span></td></tr><tr><td>Stop antibiotics/bismuth before testing</td><td><span class=\"gv-num\">4 weeks</span></td></tr><tr><td>Test of cure (UBT) after therapy</td><td>≥<span class=\"gv-num\">4 weeks</span></td></tr><tr><td>Serology for test of cure?</td><td>No (stays positive)</td></tr></table>",
   "title": "H. pylori test-and-treat",
   "subtitle": "when, the washout traps, and test of cure",
   "id": "gastroenterology-6",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Urea_breath_test_kit.jpg/960px-Urea_breath_test_kit.jpg",
     "caption": "Urea breath test - H. pylori non-invasive diagnostic test",
     "alt": "Diagram or photo of the 13C urea breath test procedure, illustrating the non-invasive gold-standard H. pylori test-of-cure requiring 2-week PPI washout",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Rapid_urease_test.JPG/640px-Rapid_urease_test.JPG",
     "caption": "CLO (rapid urease) test - antral biopsy in H. pylori",
     "alt": "Rapid urease (CLO) test vial showing colour change from yellow to pink/red indicating H. pylori urease activity in a gastric biopsy specimen",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Non-variceal (peptic ulcer) bleed — PPI timing & Forrest-guided therapy",
   "subarea": "Upper GI & GI bleeding",
   "trap": "- **Pre-endoscopy IV PPI is OPTIONAL** — may downstage lesions/reduce need for endoscopic therapy but does NOT improve mortality, rebleeding, or transfusion\n  - Must **never delay the scope**\n- **High-dose IV PPI** (80 mg bolus then 8 mg/h for 72 h, or equivalent intermittent dosing) is reserved for AFTER endoscopy in **high-risk stigmata**\n- **Low-risk lesions** (clean base) get oral PPI and early discharge\n- PPI strategy is **endoscopy-driven**, not blanket",
   "whatFirst": "- **Resuscitate** first\n- **Endoscopy with haemostasis** (clip/thermal/adrenaline as dual therapy) for active bleeding/high-risk stigmata\n- THEN **high-dose IV PPI 72 h** post-endoscopy\n- Do not withhold endoscopy for a **PPI drip**",
   "discriminator": "- **Forrest classification** predicts rebleeding and directs endoscopic therapy + PPI\n  - **Ia** spurting / **Ib** oozing / **IIa** visible vessel / **IIb** adherent clot = HIGH risk → endoscopic haemostasis + IV PPI 72 h\n  - **IIc** flat pigmented spot / **III** clean base = LOW risk → no endoscopic therapy, oral PPI, consider discharge\n- Always **test and treat H. pylori**\n- **Biopsy/repeat scope** a gastric ulcer to exclude malignancy",
   "redFlags": "- Rebleeding after initial haemostasis → **repeat endoscopy first**; failure → interventional radiology embolisation or surgery\n- Do not restart **NSAIDs** without gastroprotection\n- **Resume essential antiplatelet early** (see aspirin card)",
   "viva": "- Resuscitate first; **pre-endoscopy PPI is optional** and must not delay the scope\n- After endoscopic haemostasis of a **high-risk ulcer (Forrest Ia to IIb)** → high-dose IV PPI for **72 hours**\n- Arrange **H. pylori testing**\n- **Clean-based ulcer** is low risk → oral PPI + early discharge",
   "mcqTrap": "- 'Start high-dose IV PPI infusion and admit for 72 h' for a **Forrest III clean-based ulcer** — over-treatment; clean base is low risk, gets oral PPI\n- Conversely, choosing **'oral PPI only'** after a spurting vessel — under-treatment",
   "mnemonic": "Forrest I-II = Intervene + IV PPI; Forrest III = It's clean, oral & home.",
   "source": "ACG UGIB guideline 2021; Therapeutic Guidelines (eTG) current; NSW ACI ECI Upper GI bleeding tool.",
   "verified": true,
   "tags": [
    "peptic-ulcer",
    "Forrest",
    "PPI",
    "post-endoscopy",
    "H-pylori"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Forrest class</th><th>Finding</th><th>Rebleed risk / action</th></tr><tr><td>Ia / Ib</td><td>Spurting / oozing</td><td>High → endoscopic haemostasis + IV PPI 72 h</td></tr><tr><td>IIa</td><td>Non-bleeding visible vessel</td><td>High → treat + IV PPI</td></tr><tr><td>IIb</td><td>Adherent clot</td><td>High-ish → consider removal/treat + IV PPI</td></tr><tr><td>IIc</td><td>Flat pigmented spot</td><td>Low → oral PPI</td></tr><tr><td>III</td><td>Clean base</td><td>Lowest → oral PPI, early discharge</td></tr></table>",
   "title": "Non-variceal (peptic ulcer) bleed",
   "subtitle": "PPI timing & Forrest-guided therapy",
   "id": "gastroenterology-7",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/GU_with_clip.jpg/640px-GU_with_clip.jpg",
     "caption": "Forrest IIa - non-bleeding visible vessel in peptic ulcer (endoscopy)",
     "alt": "Endoscopic image of Forrest IIa classification: a non-bleeding visible vessel (pigmented protuberance) in a peptic ulcer base - high re-bleed risk requiring endoscopic therapy",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "NSAID ulcer — who needs gastroprotection and the aspirin/SSRI multiplier",
   "subarea": "Upper GI & GI bleeding",
   "trap": "- Do NOT co-prescribe a PPI with every NSAID — gastroprotection is for **HIGH-RISK patients** only\n- Risk factors: **age >65**, prior peptic ulcer/GI bleed (biggest), high-dose/multiple NSAIDs, AND co-prescribed anticoagulant, antiplatelet, corticosteroid, or SSRI\n- Sneaky exam multipliers: **aspirin + NSAID** and **SSRI + NSAID** — markedly raise bleed risk\n- **PPI is first-line** prophylaxis; misoprostol works but is later-line (diarrhoea/cramps)\n- **H2RAs at standard dose are inadequate**\n- **Test-and-eradicate H. pylori** before starting long-term NSAID/aspirin in those with ulcer history",
   "whatFirst": "- Assess **GI risk before/at NSAID start**\n- If high-risk → add a **PPI** (or use a COX-2 selective agent)\n  - COX-2 plus aspirin loses the GI advantage — aspirin still mandates a PPI\n- **Eradicate H. pylori first** if ulcer history",
   "discriminator": "- **Selective COX-2 inhibitor** = lower GI risk but higher cardiovascular risk\n  - GI benefit is **abolished by concurrent aspirin**\n- Non-selective NSAID + high risk = **add PPI**\n- The combination **NSAID + aspirin/anticoagulant/steroid/SSRI** tips a patient into 'needs PPI'",
   "redFlags": "- Melaena, anaemia, epigastric pain on an NSAID → **stop NSAID**, start PPI, investigate\n  - Endoscopy if alarm features or age\n- **Active GI bleed** on NSAID → cease NSAID, review all offending drugs",
   "viva": "- Only add a PPI when the patient is **high-risk** — over 65, prior ulcer or bleed, or on aspirin, anticoagulant, steroid, or SSRI alongside the NSAID\n- **Eradicate H. pylori** before long-term NSAIDs if they've had an ulcer\n- A **COX-2 plus aspirin still needs a PPI**",
   "mcqTrap": "- 'Add an **H2-receptor antagonist** for NSAID ulcer prophylaxis' — H2RAs are inadequate\n- 'Switch to a **COX-2 inhibitor**' in a patient also on low-dose aspirin — COX-2 GI advantage is cancelled by aspirin\n  - The answer is a **PPI**",
   "mnemonic": "Gastroprotect if 'A-CASS': Age>65, Co-anticoagulant, Aspirin/antiplatelet, Steroid, SSRI (or prior ulcer).",
   "source": "Australian Prescriber (NSAIDs and gastroprotection); Therapeutic Guidelines (eTG) current.",
   "verified": true,
   "tags": [
    "NSAID",
    "ulcer-prophylaxis",
    "PPI",
    "aspirin",
    "SSRI",
    "COX-2"
   ],
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Age >65</span><span class=\"gv-pill\">Prior ulcer/GI bleed</span><span class=\"gv-pill\">High-dose/2+ NSAIDs</span><span class=\"gv-pill\">+ anticoagulant</span><span class=\"gv-pill\">+ aspirin/antiplatelet</span><span class=\"gv-pill\">+ corticosteroid</span><span class=\"gv-pill\">+ SSRI</span></div>",
   "title": "NSAID ulcer",
   "subtitle": "who needs gastroprotection and the aspirin/SSRI multiplier",
   "id": "gastroenterology-8"
  },
  {
   "topic": "Restrictive transfusion threshold in upper GI bleeding (70 g/L)",
   "subarea": "Upper GI & GI bleeding",
   "trap": "- Default transfusion trigger is a **restrictive haemoglobin of 70 g/L** (target 70-90 g/L), NOT 80 or 100\n- **Restrictive strategy improved survival** vs liberal (Villanueva NEJM 2013)\n- Over-transfusing a variceal bleeder **raises portal pressure** and precipitates rebleeding\n- Exception: **active major haemorrhage with haemodynamic instability** — transfuse to clinical endpoints regardless of the number\n  - Higher threshold (**~80 g/L**) applies if acute coronary syndrome/cardiovascular compromise",
   "whatFirst": "- Use **70 g/L** as the trigger and **70-90 g/L** as target in the haemodynamically stable bleeder\n- In the **exsanguinating/unstable patient** → transfuse early to clinical endpoints\n  - Do not wait for an Hb",
   "discriminator": "- **Stable, controlled bleed** → wait for Hb to fall to **70** before transfusing (avoid over-transfusion, especially in cirrhosis)\n- **Active uncontrolled major haemorrhage** → transfuse now, activate MTP\n  - Do not be reassured by an early near-normal Hb — it **lags acute blood loss**",
   "redFlags": "- Massive bleeding, ongoing instability, rising lactate → **massive transfusion protocol** (balanced RBC:FFP:platelets)\n- **Tranexamic acid is NOT routinely recommended** for GI bleed\n  - HALT-IT showed no mortality benefit and more VTE/seizures",
   "viva": "- Use a restrictive threshold of **70 g/L** with a target of **70 to 90**\n- Liberal transfusion **worsens outcomes and raises portal pressure** in cirrhotics\n- In active uncontrolled haemorrhage → transfuse to clinical endpoints and activate **massive transfusion protocol**\n- If asked about TXA → state **HALT-IT means not routine**",
   "mcqTrap": "- 'Transfuse to keep Hb above **100 g/L**' or 'above 90' — over-treatment; evidence-based restrictive trigger is **70 g/L**\n- Also a trap: **not transfusing an unstable patient** because the first Hb is 'normal'",
   "mnemonic": "Seven-Zero to go (70 g/L trigger); cardiac gets a bit more (~80).",
   "source": "Villanueva C et al., NEJM 2013 (restrictive transfusion in acute UGIB); NSW ACI ECI Upper GI bleeding tool; National Blood Authority Patient Blood Management Guidelines (Australia) — Critical Bleeding/Massive Transfusion.",
   "verified": true,
   "tags": [
    "transfusion",
    "threshold",
    "70-g/L",
    "restrictive",
    "cirrhosis"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Scenario</th><th>Hb trigger / target</th></tr><tr><td>Stable haemodynamics</td><td>Transfuse at <span class=\"gv-num\">70 g/L</span>, target 70-90</td></tr><tr><td>Active major haemorrhage / unstable</td><td>Transfuse to clinical endpoints (don't wait for Hb); MTP</td></tr><tr><td>ACS / cardiovascular compromise</td><td>Higher trigger ~<span class=\"gv-num\">80 g/L</span></td></tr></table>",
   "title": "Restrictive transfusion threshold in upper GI bleeding…",
   "id": "gastroenterology-9"
  },
  {
   "topic": "Variceal bleed — terlipressin/octreotide + antibiotics started BEFORE endoscopy",
   "subarea": "Upper GI & GI bleeding",
   "trap": "- In suspected variceal bleeding: **vasoactive drug AND prophylactic antibiotics** are started EMPIRICALLY at presentation\n  - Do NOT wait for endoscopic confirmation\n- **Antibiotics are not optional** — they independently reduce infection, rebleeding, AND mortality in cirrhotic GI bleeders\n- **Forgetting antibiotics is the classic dropped mark**\n- Vasoactive therapy continues **2-5 days**",
   "whatFirst": "- On suspicion of varices: **terlipressin** (or octreotide infusion) + **IV ceftriaxone 1 g daily** simultaneously with resuscitation\n- Then **band ligation at endoscopy** (within 12 h)\n- Continue vasoactive **2-5 days**; antibiotics up to **7 days**",
   "discriminator": "- **Ceftriaxone** preferred over oral norfloxacin in advanced cirrhosis/high quinolone-resistance/where oral not feasible\n- **Terlipressin** (vasopressin analogue, splanchnic vasoconstrictor) preferred where available\n  - Caution in **ischaemic heart disease/hyponatraemia**\n- **Octreotide** (somatostatin analogue) is the alternative",
   "redFlags": "- Uncontrolled variceal bleeding despite drugs + banding → **balloon tamponade** (Sengstaken-Blakemore/Minnesota) as a bridge\n  - **Intubate** to protect airway first\n  - Then urgent **TIPS**/interventional radiology",
   "viva": "- Give **terlipressin** and **IV ceftriaxone** immediately — the antibiotic reduces rebleeding and mortality, not just infection\n- Alongside resuscitation, then **band ligation within 12 hours**\n- If bleeding is uncontrolled → **balloon tamponade** as a bridge to TIPS\n- Examiner loves: 'why antibiotics?' and 'what if banding fails?'",
   "mcqTrap": "- 'Give terlipressin and proceed to endoscopy' while **omitting antibiotics** — incomplete\n  - Antibiotic prophylaxis is a **mortality-reducing, must-give** intervention in cirrhotic upper GI bleed regardless of ascites",
   "mnemonic": "Varices = Terli + Ceftri + Tie (terlipressin, ceftriaxone, band ligation).",
   "source": "Therapeutic Guidelines (eTG) current — variceal haemorrhage; Baveno VII consensus 2022; NSW ACI ECI Upper GI bleeding tool.",
   "verified": true,
   "tags": [
    "variceal",
    "terlipressin",
    "octreotide",
    "ceftriaxone",
    "antibiotics",
    "band-ligation"
   ],
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Terlipressin (or octreotide) 2-5 days</span><span class=\"gv-pill\">IV ceftriaxone 1 g/day up to 7 days</span><span class=\"gv-pill\">Band ligation within 12 h</span><span class=\"gv-pill\">Resuscitate, restrictive Hb 70</span><span class=\"gv-pill\">Failure → balloon tamponade → TIPS</span></div>",
   "title": "Variceal bleed",
   "subtitle": "terlipressin/octreotide + antibiotics started BEFORE endoscopy",
   "id": "gastroenterology-10",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Esophageal_varices_-_wale.jpg/640px-Esophageal_varices_-_wale.jpg",
     "caption": "Oesophageal varices - endoscopic appearance (active or high-risk)",
     "alt": "Upper GI endoscopy showing large tortuous oesophageal varices (Grade 2-3) with red wale signs or active haemorrhage, in the context of portal hypertension/cirrhosis",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Variceal vs non-variceal upper GI bleed — the resuscitate-FIRST sequence (what you do before the scope)",
   "subarea": "Upper GI & GI bleeding",
   "trap": "- The exam answer to 'next best step' in a shocked GI bleeder is almost never 'urgent endoscopy' — it is **RESUSCITATE FIRST**\n- **Two large-bore IVs (14-16G)**, crossmatch, restore haemodynamics, then endoscopy\n- Endoscopy within **24 h** (within **12 h** if variceal/unstable)\n- Endoscoping a **hypovolaemic, unprotected-airway, haematemesis** patient is the wrong move\n- Vasoactive drug + antibiotics in suspected variceal bleed do NOT wait for the scope — **start empirically on presentation**",
   "whatFirst": "- **ABC** + 2 large-bore cannulas + bloods (FBC, UEC, LFT, coags, crossmatch, VBG/lactate) + fluids/blood to restore perfusion\n- Risk-stratify with **GBS**\n- In suspected variceal: **terlipressin/octreotide + IV ceftriaxone NOW**\n- Endoscopy within **24 h** (within **12 h** if variceal or ongoing instability) once resuscitated\n- **Protect airway** if active haematemesis/encephalopathy before scope",
   "discriminator": "- Clues to **VARICEAL** (add vasoactive + antibiotics + aim earlier scope):\n  - Known cirrhosis/chronic liver disease\n  - Stigmata of portal hypertension (ascites, splenomegaly, caput, spider naevi)\n  - Thrombocytopenia\n  - Large-volume **painless** haematemesis\n- **NON-variceal** (peptic ulcer most common):\n  - Epigastric pain, NSAID/aspirin use, prior dyspepsia, no liver disease",
   "redFlags": "- Persistent shock despite resuscitation, ongoing haematemesis, fresh PR blood with haemodynamic instability, high GBS, suspected variceal source\n  - Activate **massive transfusion protocol**\n  - Call GI/interventional radiology/surgery, **ICU**",
   "viva": "- First priority is **resuscitation, not the camera**\n- Assess airway and circulation, get **two large-bore cannulas**, send crossmatch and VBG, start fluids/blood while risk-stratifying\n- If varices suspected → **terlipressin and ceftriaxone immediately**\n- Aim for endoscopy **within 12 hours** once stable\n- Examiner probes: why antibiotics? — **reduce infection, rebleeding, mortality in cirrhosis**",
   "mcqTrap": "- 'Proceed to **immediate endoscopy**' in a hypotensive, actively vomiting blood patient — endoscopy is definitive but **unstable/unresuscitated patients must be resuscitated and airway-protected first**",
   "mnemonic": "Resuscitate, Risk-stratify, Restrictive transfusion, Reach for drugs+abx (if variceal), then Reach for the scope — the 5 Rs.",
   "source": "NSW ACI Emergency Care Institute — Upper GI bleeding clinical tool (current); Therapeutic Guidelines (eTG, Gastrointestinal) current.",
   "verified": true,
   "tags": [
    "upper-GI-bleed",
    "resuscitation",
    "sequence",
    "variceal",
    "viva"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">ABC + 2 large-bore IV + crossmatch/VBG</div><div class=\"gv-step\">Resuscitate to perfusion (restrictive Hb target <span class=\"gv-num\">70 g/L</span>)</div><div class=\"gv-step\">Risk-stratify (Glasgow-Blatchford)</div><div class=\"gv-step\">If variceal suspected: terlipressin/octreotide + IV ceftriaxone NOW</div><div class=\"gv-step\">Endoscopy within <span class=\"gv-num\">24 h</span> (within 12 h if variceal/unstable)</div></div>",
   "title": "Variceal vs non-variceal upper GI bleed",
   "subtitle": "the resuscitate-FIRST sequence (what you do before the scope)",
   "id": "gastroenterology-11",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Bleeding_esophageal_varices.png",
     "caption": "Oesophageal varices - endoscopic appearance (variceal upper GI bleed)",
     "alt": "Endoscopy showing actively bleeding or large oesophageal varices in a patient with cirrhosis - the variceal upper GI bleed requiring vasoactive drugs and antibiotics pre-scope",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Duodenal_ulcer01.jpg/640px-Duodenal_ulcer01.jpg",
     "caption": "Peptic ulcer - endoscopic appearance (non-variceal upper GI bleed)",
     "alt": "Upper GI endoscopy showing a peptic ulcer with stigmata of recent haemorrhage (visible vessel or adherent clot) - the commonest cause of non-variceal upper GI bleeding",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Acute severe UC — Truelove-Witts on admission; the day-3 Oxford rule; toxic megacolon is SURGICAL",
   "subarea": "Lower GI & IBD",
   "whatFirst": "- **ADMIT**\n- **IV hydrocortisone 100 mg QID** (or methylprednisolone)\n- **VTE prophylaxis** even though bleeding\n- **AXR** for colonic dilatation/toxic megacolon\n- Stool MCS + **C. difficile** (co-infection drives flare)\n- CRP/FBC/albumin\n- **EARLY surgical + IBD-team referral on day 1**, not day 3\n- **Stop opioids/antimotility/anticholinergics** (precipitate megacolon)",
   "trap": "- Most tempting wrong answer: 'continue IV steroids and review in a **week**'\n- The decision point is **DAY 3**\n  - Re-assess with **Oxford/Travis criteria**: stool frequency >8/day, OR 3-8/day with CRP >45 mg/L → predicts ~85% colectomy risk\n  - Mandates **rescue therapy** (infliximab or ciclosporin) or **colectomy NOW**\n- Giving **antidiarrhoeals/opioids** to a distended colitic → precipitates **toxic megacolon**\n- **Toxic megacolon** (colon >6 cm on AXR + systemic toxicity) = SURGICAL emergency → colectomy, not 'more steroids'",
   "discriminator": "- **Truelove-Witts severe** = ≥**6 bloody stools/day** PLUS ≥1 systemic marker:\n  - HR >90, temp >37.8°C, Hb <105 g/L, ESR >30 mm/h\n  - CRP >30 mg/L is the commonly-used modern surrogate for ESR\n- Acute SEVERE colitis ≠ ordinary flare: it is an **inpatient emergency**\n- **Day-3 non-responder** ≠ keep waiting → escalate",
   "redFlags": "- Colon **>6 cm** (or caecum >9 cm) on AXR\n- Systemic toxicity, rising CRP/falling albumin, free air, worsening tenderness\n- **Sudden drop in stool frequency with rising distension** (ominous = impending perforation) → **theatre**",
   "viva": "- ISBAR the surgeon on **day 1**, not day 3\n- State **Oxford criteria** out loud: stool >8/day OR 3-8/day with CRP >45 mg/L\n- Name **infliximab/ciclosporin** as the two rescue options\n- Colectomy if rescue fails at **~day 7**",
   "mnemonic": "Truelove-Witts severe = '6 + 1': 6 bloody stools + 1 systemic flag. Day-3 Oxford = 'over 8, or 3-to-8 with CRP over 45.'",
   "mcqTrap": "- Selecting '**loperamide/codeine** to reduce stool frequency' — antimotility agents precipitate **toxic megacolon** and are contraindicated",
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Day 0: Admit, IV hydrocortisone 100 mg QID, VTE prophylaxis, AXR, stool C. diff, early surgical referral</div><div class=\"gv-step\">Day 3: Apply Oxford — stool <span class=\"gv-num\">&gt;8/day</span> OR <span class=\"gv-num\">3-8/day</span> + CRP <span class=\"gv-num\">&gt;45 mg/L</span></div><div class=\"gv-step\">If criteria met: rescue infliximab OR ciclosporin (or colectomy)</div><div class=\"gv-step\">No response by ~day 7 OR toxic megacolon (colon <span class=\"gv-num\">&gt;6 cm</span>) → colectomy</div></div>",
   "source": "Truelove & Witts criteria; Oxford/Travis day-3 criteria (Gut 1996); GESA / eTG Gastrointestinal — acute severe UC, current 2026",
   "verified": true,
   "tags": [
    "ASUC",
    "Truelove-Witts",
    "Oxford-criteria",
    "toxic-megacolon",
    "surgical-emergency"
   ],
   "title": "Acute severe UC",
   "subtitle": "Truelove-Witts on admission; the day-3 Oxford rule; toxic megacolon is SURGICAL",
   "id": "gastroenterology-12",
   "images": [
    {
     "src": "assets/img/gastrointestinal_axr_toxic_megacolon_01.jpg",
     "caption": "Toxic megacolon on AXR — grossly dilated transverse colon with mucosal islands",
     "alt": "Toxic megacolon complicating acute severe UC — transverse colon >6 cm with thumbprinting/mucosal islands on plain abdominal radiograph",
     "credit": "Hellerhoff, Wikimedia Commons, CC BY-SA 3.0"
    }
   ]
  },
  {
   "topic": "Clostridioides difficile — 2025 Australasian shift: metronidazole is NO LONGER first-line",
   "subarea": "Lower GI & IBD",
   "whatFirst": "- **STOP the offending antibiotic** if possible\n- **Stop PPI** if not needed\n- Isolate with **contact precautions**; use **soap-and-water hand hygiene** (alcohol gel does not kill spores)\n- First-line initial episode: **oral vancomycin 125 mg QID for 10 days** OR **fidaxomicin 200 mg BD for 10 days**\n  - Fidaxomicin preferred for **lower recurrence**; vancomycin an acceptable alternative",
   "trap": "- Most tempting wrong answer: '**oral metronidazole**' — outdated 2016 answer\n  - Under **2025 ASID/Australasian guideline**, metronidazole is NO LONGER first-line\n  - Reserved only when vancomycin/fidaxomicin are unavailable, or as IV adjunct in fulminant disease\n- '**IV vancomycin**' does NOT treat CDI — it doesn't reach the gut lumen; must be **oral or per-rectum vancomycin**\n- '**Alcohol hand rub**' is ineffective against spores — use **soap and water**",
   "discriminator": "- **Severe CDI** = WCC >15 x10^9/L OR creatinine rise >50% above baseline (also temp >38.5, albumin <25)\n- **Fulminant/severe-complicated** = hypotension/shock, ileus, or toxic megacolon\n  - Needs **oral vancomycin (high dose, +/- per-rectum) PLUS IV metronidazole** and urgent surgical review\n- **Recurrence** → fidaxomicin or vancomycin taper-pulse; consider **FMT** for multiply-recurrent",
   "redFlags": "- Rising WCC (can be very high), rising lactate, ileus/abdominal distension, hypotension, **toxic megacolon**\n  - Fulminant CDI → **surgical (colectomy) referral**",
   "viva": "- Initial episode of C. diff colitis: prescribe **oral vancomycin or fidaxomicin for 10 days**\n- **Metronidazole is no longer first-line**\n- Stop the **inciting antibiotic** and the **PPI**\n- Use **soap-and-water hygiene** and contact isolation\n- '**IV vancomycin would NOT work** — it must be enteral'",
   "mnemonic": "'Vanc or Fidax, ditch the Flagyl' for first-line. And 'oral or rectal vanc, never IV' (IV vanc can't reach the gut).",
   "mcqTrap": "- Choosing '**oral metronidazole 400 mg TDS**' as first-line\n  - Correct in 2016, **WRONG under the 2025 Australasian guideline**\n  - Vancomycin or fidaxomicin now",
   "visualHtml": "<table class=\"gv-table\"><tr><th>Scenario</th><th>Treatment</th></tr><tr><td>Initial episode</td><td>PO vancomycin 125 mg QID OR fidaxomicin 200 mg BD, 10 days</td></tr><tr><td>First recurrence</td><td>Fidaxomicin, or vancomycin taper-pulse</td></tr><tr><td>Multiply recurrent</td><td>FMT; consider bezlotoxumab</td></tr><tr><td>Fulminant (ileus/megacolon/shock)</td><td>High-dose PO/PR vancomycin + IV metronidazole + surgery</td></tr></table>",
   "source": "ASID/Australasian Society of Infectious Diseases updated CDI guidelines (Longhitano et al., Intern Med J 2025); Therapeutic Guidelines (eTG) Antibiotic, current 2026",
   "verified": true,
   "tags": [
    "C-difficile",
    "vancomycin",
    "fidaxomicin",
    "metronidazole-not-first-line",
    "2025-guideline"
   ],
   "title": "Clostridioides difficile",
   "subtitle": "2025 Australasian shift: metronidazole is NO LONGER first-line",
   "id": "gastroenterology-13",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Clostridioides_%28pseudomembranous%29_colitis.jpg/960px-Clostridioides_%28pseudomembranous%29_colitis.jpg",
     "caption": "C. difficile — pseudomembranous colitis on colonoscopy",
     "alt": "Colonoscopy showing classic yellow-white pseudomembranes studding the colonic mucosa in Clostridioides difficile colitis",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Pseudomembranoese_Colitis_coronar.jpg/640px-Pseudomembranoese_Colitis_coronar.jpg",
     "caption": "C. difficile — CT abdomen showing pancolitis and colonic wall thickening",
     "alt": "CT abdomen showing marked colonic wall thickening (accordion sign) and pericolonic fat stranding in severe Clostridioides difficile colitis",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Coeliac disease — serology BEFORE biopsy, and never start a gluten-free diet first",
   "subarea": "Lower GI & IBD",
   "whatFirst": "- Confirm patient is **eating gluten**, then order **tTG-IgA AND total IgA** together\n- If **IgA deficient** (3-5% of coeliacs) → use **DGP-IgG** (or tTG-IgG)\n- Positive serology → refer for **duodenal biopsy** (multiple biopsies, including the bulb) on a **gluten-containing diet**",
   "trap": "- Most tempting wrong answer: 'advise a **gluten-free diet trial** and see if symptoms improve' (or 'start GF diet then test')\n  - Starting GF before serology + biopsy **normalises antibodies and mucosa**, making the diagnosis impossible without a burdensome gluten challenge later\n- 'Order **tTG-IgA alone**' — misses **IgA deficiency** → false negative; must order **total IgA alongside**\n- '**Positive serology is enough to diagnose**' — in adults you still need **biopsy confirmation** (non-biopsy pathways are paediatric/specialist)",
   "discriminator": "- **Coeliac vs IBS/wheat sensitivity**: only coeliac has positive tTG-IgA + **villous atrophy (Marsh 3)** on biopsy\n- **HLA DQ2/DQ8** useful only to **EXCLUDE** (negative predictive value >99%)\n  - A positive HLA does NOT diagnose — 30-50% of the population carry it",
   "redFlags": "- Iron-deficiency anaemia **unresponsive to oral iron**\n- Osteoporosis at young age\n- Dermatitis herpetiformis\n- Refractory symptoms despite adherence\n- Unexplained transaminitis\n  - Confirm/recheck coeliac; consider complications (**EATL lymphoma**)",
   "viva": "- tTG-IgA came back negative but coeliac still suspected → **check the total IgA** ordered alongside\n  - If IgA deficient, tTG-IgA is unreliable → switch to **DGP-IgG/tTG-IgG**\n- Always confirm the patient **hadn't already cut gluten**\n- 'I would not commit anyone to **lifelong gluten-free without biopsy confirmation**'",
   "mnemonic": "'Test on toast' — keep eating gluten before you test. Gluten challenge = at least 4 slices of bread/day for at least 4 weeks.",
   "mcqTrap": "- Choosing '**recommend gluten-free diet trial**' as the next step\n  - Sabotages all subsequent testing; **serology + biopsy ON gluten come first**",
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Confirm eating gluten (else challenge: <span class=\"gv-num\">≥4 slices/day</span> for <span class=\"gv-num\">≥4 weeks</span>)</div><div class=\"gv-step\">tTG-IgA + TOTAL IgA together</div><div class=\"gv-step\">IgA deficient? → DGP-IgG / tTG-IgG</div><div class=\"gv-step\">Serology positive → duodenal biopsy (Marsh 3) on gluten</div><div class=\"gv-step\">Only THEN commence lifelong gluten-free diet</div></div>",
   "source": "Coeliac Australia 'Diagnosis'; Australian Prescriber 'Testing for coeliac disease' (Therapeutic Guidelines), current; GESA",
   "verified": true,
   "tags": [
    "coeliac",
    "serology",
    "tTG-IgA",
    "gluten-challenge",
    "biopsy",
    "sequence"
   ],
   "title": "Coeliac disease",
   "subtitle": "serology BEFORE biopsy, and never start a gluten-free diet first",
   "id": "gastroenterology-14",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/1/17/Villous_atrophy_duodenum.jpg",
     "caption": "Coeliac disease — duodenal biopsy showing villous atrophy (Marsh 3)",
     "alt": "Histology of small bowel biopsy in coeliac disease: subtotal/total villous atrophy, crypt hyperplasia, and increased intraepithelial lymphocytes (Marsh grade 3)",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Colorectal cancer & NBCSP — the 45-74 / 2-yearly iFOBT rule + family-risk categories",
   "subarea": "Lower GI & IBD",
   "whatFirst": "- Asymptomatic average-risk adult: **iFOBT every 2 years** from age **45 to 74**\n  - Ages 50-74: **auto-mailed** the kit\n  - Ages 45-49: must **REQUEST** their first kit\n- A **positive iFOBT** → **colonoscopy** (do not repeat the FOBT)\n- Any **red-flag symptoms** → **colonoscopy** regardless of screening status",
   "trap": "- Most tempting wrong answer: 'screening starts at **50**' — outdated\n  - Since **1 July 2024**, National Bowel Cancer Screening Program starts at **age 45**\n  - Ages 45-49: **opt-in/request**; ages 50-74: **automatic**; iFOBT **2-yearly**\n- Repeating the FOBT after a positive result — a **positive iFOBT mandates COLONOSCOPY**, never a repeat test\n- Using iFOBT to 'investigate' a **SYMPTOMATIC** patient (rectal bleeding, IDA, change in bowel habit) — screening tools are for the **ASYMPTOMATIC**\n  - Symptomatic patients go **straight to colonoscopy**\n- A **negative FOBT does NOT exclude cancer** in a symptomatic patient",
   "discriminator": "- **Average risk** (no/weak family history) → iFOBT 2-yearly **45-74**\n- **Moderately increased risk** (e.g., one first-degree relative <55, or two FDRs any age) → colonoscopy **~5-yearly from 50**, or 10 years before youngest relative's diagnosis\n- **High risk / suspected Lynch or FAP** → genetics referral, colonoscopy from young age\n  - Lynch: 1-2 yearly from **~25**; FAP: annual sigmoidoscopy from **teens**\n- **Iron-deficiency anaemia** in a man or post-menopausal woman = colon cancer until proven otherwise",
   "redFlags": "- Rectal bleeding, iron-deficiency anaemia, unexplained weight loss, persistent change in bowel habit, abdominal/rectal mass\n  - **Urgent colonoscopy** (NOT FOBT)",
   "viva": "- 47-year-old asymptomatic: eligible from **45**; must **REQUEST** her first kit (auto-mail only from 50)\n- iFOBT every **2 years**; a positive test means **colonoscopy**\n- Probe family history to **reclassify risk**\n- 'FOBT is for the **asymptomatic** — any alarm symptom goes straight to colonoscopy'",
   "mnemonic": "'45 to 74, every 2 — 45 you ask, 50 it comes to you.' Positive iFOBT = the C-word: Colonoscopy.",
   "mcqTrap": "- Choosing '**repeat the FOBT in 12 months**' after a positive iFOBT\n  - A positive screen always triggers **colonoscopy**, never a repeat FOBT",
   "visualHtml": "<table class=\"gv-table\"><tr><th>Risk category</th><th>Test & interval</th></tr><tr><td>Average risk</td><td>iFOBT every 2 yrs, age <span class=\"gv-num\">45-74</span> (45-49 request; 50-74 auto)</td></tr><tr><td>Moderately increased (1 FDR &lt;55, or 2 FDRs)</td><td>Colonoscopy ~5-yearly from <span class=\"gv-num\">50</span>, or 10 yrs before youngest case</td></tr><tr><td>High risk / Lynch</td><td>Genetics referral; colonoscopy 1-2 yrly from ~<span class=\"gv-num\">25</span></td></tr><tr><td>FAP</td><td>Annual sigmoidoscopy from teens; consider colectomy</td></tr></table>",
   "source": "National Bowel Cancer Screening Program (Dept of Health) — age lowered to 45 from 1 July 2024; Cancer Council Australia / NHMRC-endorsed CRC guidelines (2023 update); RACGP Red Book",
   "verified": true,
   "tags": [
    "colorectal-cancer",
    "NBCSP",
    "iFOBT",
    "screening",
    "family-history",
    "Lynch",
    "FAP"
   ],
   "title": "Colorectal cancer & NBCSP",
   "subtitle": "the 45-74 / 2-yearly iFOBT rule + family-risk categories",
   "id": "gastroenterology-15"
  },
  {
   "topic": "IBD: UC vs Crohn — the discriminators MCQs hinge on (not the textbook list)",
   "subarea": "Lower GI & IBD",
   "whatFirst": "- **Faecal calprotectin** to separate IBD from IBS\n- Then **colonoscopy + ileoscopy with multiple biopsies** to characterise\n- Always document **smoking status** and check for **perianal disease** on exam",
   "trap": "- Do NOT choose UC just because of bloody diarrhoea, or Crohn just because of weight loss — these overlap\n- **SMOKING** is the single most exam-favoured trick:\n  - **Protective/improves UC**; **HARMFUL and a relapse driver in Crohn** (reverse of intuition)\n  - If a smoker's IBD improves on quitting → think **Crohn**; if it flares on quitting → think **UC**\n- **p-ANCA positive** favours UC; **ASCA positive** favours Crohn\n- **Continuous mucosal disease from the rectum upwards** = UC\n- **Skip lesions + terminal ileum + perianal fistulae/granulomas** = Crohn\n- **Transmural** (Crohn) vs **mucosa/submucosa-only** (UC)\n- Crohn gets **strictures/fistulae/perianal disease**; UC gets **toxic megacolon** and higher CRC surveillance burden",
   "discriminator": "- **Crohn**: rectal sparing + skip lesions + terminal ileal involvement + perianal fistula + non-caseating granuloma + transmural cobblestoning\n- **UC**: continuous from rectum, mucosal only, p-ANCA, backwash ileitis, lead-pipe colon, pseudopolyps\n- **Smoking**: protective in UC, **harmful in Crohn**",
   "redFlags": "- New anaemia/iron deficiency, nocturnal/large-volume bloody diarrhoea, fevers, weight loss, perianal sepsis\n  - **Urgent scope**; never label as IBS",
   "viva": "- Lead with **smoking history** and **perianal exam**\n- Then **p-ANCA/ASCA**\n- Then **endoscopic distribution** (continuous vs skip + ileal)\n- Then **histology** (granuloma/transmural)\n- Do NOT diagnose on **one feature alone**",
   "mnemonic": "Crohn = 'CrohN' for Non-caseating granuloma, Need the whole gut (mouth to anus), skip lesioNs, smokiNg worseNs. UC = Ulcer Continuous, Cigarettes Calm it.",
   "mcqTrap": "- Picking 'smoking **improves Crohn disease**' — it improves **UC**; smoking WORSENS Crohn",
   "visualHtml": "<table class=\"gv-table\"><tr><th>Feature</th><th>UC</th><th>Crohn</th></tr><tr><td>Smoking</td><td>Protective (worsens on cessation)</td><td>Harmful (driver of relapse)</td></tr><tr><td>Distribution</td><td>Continuous, rectum upward</td><td>Skip lesions, ileum, perianal</td></tr><tr><td>Depth</td><td>Mucosa/submucosa</td><td>Transmural</td></tr><tr><td>Histology</td><td>Crypt abscess, no granuloma</td><td>Non-caseating granuloma</td></tr><tr><td>Serology</td><td>p-ANCA +</td><td>ASCA +</td></tr><tr><td>Hallmark complications</td><td>Toxic megacolon</td><td>Fistula, stricture, perianal</td></tr></table>",
   "source": "GESA IBD resources; Therapeutic Guidelines (eTG) Gastrointestinal — IBD, current 2026",
   "verified": true,
   "tags": [
    "IBD",
    "UC",
    "Crohn",
    "discriminator",
    "smoking"
   ],
   "title": "IBD",
   "subtitle": "UC vs Crohn — the discriminators MCQs hinge on (not the textbook list)",
   "id": "gastroenterology-16",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Fistula_%26_Abscss_diag_01.png/960px-Fistula_%26_Abscss_diag_01.png",
     "caption": "Crohn's disease — perianal fistula/skin tags",
     "alt": "Perianal Crohn's disease with skin tags and external fistula openings — a classic exam-discriminating clinical sign not seen in UC",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/d/d8/CD_colitis_2.jpg",
     "caption": "Crohn's disease — colonoscopy with skip lesions and cobblestoning",
     "alt": "Crohn's disease — colonoscopy with skip lesions and cobblestoning",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "IBD complication & surveillance gotchas — colorectal cancer surveillance, PSC, and the flare mimic",
   "subarea": "Lower GI & IBD",
   "whatFirst": "- In any IBD patient presenting with a 'flare', send stool for **C. difficile and culture FIRST**\n  - Consider **CMV** in steroid-refractory disease (check on biopsy)\n  - An infection, not the IBD itself, may be driving symptoms and **changes management**\n- For long-standing colitis → enrol in **surveillance colonoscopy with chromoendoscopy**",
   "trap": "- Most tempting wrong answer: 'escalate immunosuppression for the flare' **WITHOUT excluding superimposed C. difficile/CMV**\n  - Escalating steroids/biologics into an **untreated infection is harmful**\n- Forgetting that colitis (UC or Crohn colitis) carries increased CRC risk → needs **surveillance colonoscopy** starting **~8 years** after symptom onset\n  - Earlier/more often if concurrent **PSC** — surveillance begins at PSC diagnosis, usually **annual**\n- **PSC + UC**: IBD patient with cholestatic LFTs → MRCP → PSC dramatically raises **CRC AND cholangiocarcinoma** risk",
   "discriminator": "- **IBD flare vs infection**: a colitic with worsening symptoms could be C. difficile or CMV, not just disease activity\n  - Stool/biopsy distinguishes\n- **PSC**: ALP-predominant cholestatic LFTs in a UC patient → **MRCP showing beaded ducts**",
   "redFlags": "- **Cholestatic LFTs** in IBD → think PSC\n- **Dysplasia/mass** on surveillance\n- New **stricture**\n- Rising inflammatory markers despite escalation → consider **infection/CMV**\n  - Specialist review",
   "viva": "- Before escalating steroids: exclude **C. difficile** and other enteric infection (stool MCS + C. diff toxin)\n- In refractory cases: **CMV on biopsy**\n- Mention **surveillance colonoscopy from ~8 years**, sooner with **PSC**",
   "mnemonic": "Before you escalate, 'rule out the bug' — C. diff/CMV. UC + cholestatic LFTs = think PSC (and double the cancer worry: colon AND bile duct).",
   "mcqTrap": "- Picking '**increase steroid/biologic dose**' for a UC flare without first sending stool for **C. difficile**\n  - Superimposed infection must be **excluded first**",
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Flare? Exclude C. diff + CMV first</span><span class=\"gv-pill\">Colitis surveillance from ~8 yrs</span><span class=\"gv-pill\">PSC: annual surveillance from diagnosis; MRCP; higher CRC/cholangio risk</span></div>",
   "source": "GESA IBD surveillance recommendations; Cancer Council Australia CRC surveillance guidance; Therapeutic Guidelines (eTG) Gastrointestinal — IBD, current 2026",
   "verified": false,
   "tags": [
    "IBD",
    "surveillance",
    "C-difficile",
    "CMV",
    "PSC",
    "colorectal-cancer",
    "flare-mimic"
   ],
   "title": "IBD complication & surveillance gotchas",
   "subtitle": "colorectal cancer surveillance, PSC, and the flare mimic",
   "id": "gastroenterology-17",
   "images": [
    {
     "src": "assets/img/gastrointestinal_axr_toxic_megacolon_01.jpg",
     "caption": "Toxic megacolon — AXR showing dilated transverse colon >6 cm with mucosal islands",
     "alt": "Plain abdominal radiograph in toxic megacolon complicating IBD: grossly dilated transverse colon with thumbprinting/mucosal islands indicating mucosal necrosis",
     "credit": "Hellerhoff, Wikimedia Commons, CC BY-SA 3.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/3/37/Cholangiogram_of_primary_sclerosing_cholangitis.jpg",
     "caption": "Primary sclerosing cholangitis — MRCP beading of bile ducts",
     "alt": "MRCP showing multifocal strictures and dilatations of intrahepatic and extrahepatic bile ducts producing the classic 'beaded' appearance of primary sclerosing cholangitis",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "IBS — a POSITIVE diagnosis (Rome IV) with limited testing, not a diagnosis of exclusion",
   "subarea": "Lower GI & IBD",
   "whatFirst": "- Make a **positive Rome IV diagnosis**: recurrent abdominal pain >=1 day/week in the last 3 months, related to defecation and/or change in stool frequency/form\n- Add a **focused screen**:\n  - **FBC, CRP**\n  - **Coeliac serology** (tTG-IgA + total IgA)\n  - **Faecal calprotectin** to exclude IBD\n- In the absence of red flags, normal calprotectin, and negative coeliac serology: **colonoscopy is NOT required**\n  - Risk of missed organic disease is low",
   "trap": "- Most tempting wrong answer: **'colonoscopy to exclude organic disease'** before diagnosing IBS in a young patient with classic symptoms and no alarm features\n  - IBS is a **POSITIVE clinical diagnosis** (Rome IV), not an exhaustive exclusion work-up\n  - Over-investigating reinforces illness behaviour\n- Flip-side trap: **labelling IBS while ignoring red flags** or a raised calprotectin\n  - That is a missed IBD/cancer",
   "discriminator": "- Key gate: **faecal calprotectin**\n  - Normal calprotectin + negative coeliac serology + no red flags -> strongly favours **IBS**\n  - Raised calprotectin -> **scope for IBD**\n- IBS pain is **relieved by defecation**; no nocturnal symptoms\n- IBD/cancer features: **nocturnal diarrhoea**, bleeding, weight loss, anaemia, raised inflammatory markers",
   "redFlags": "- **Age >50** with new symptoms\n- **Rectal bleeding**\n- **Iron-deficiency anaemia**\n- **Unexplained weight loss**\n- Nocturnal or progressive symptoms\n- **Family history** of CRC/IBD/coeliac\n- Abdominal mass\n- -> Investigate (colonoscopy); do **not** label IBS",
   "viva": "- State it is a **positive Rome IV diagnosis**\n  - Confirm symptom criteria\n  - Screen for red flags\n  - Do **FBC/CRP/coeliac serology/faecal calprotectin**\n- If all reassuring: give a confident positive diagnosis and start management\n- Say out loud: **'I reserve colonoscopy for alarm features or a raised calprotectin'**",
   "mnemonic": "Rome IV 'ABC': Abdominal pain, related to Bowel motions (defecation), with Change in stool frequency/form — ≥1 day/week for 3 months.",
   "mcqTrap": "- Choosing **'colonoscopy for all'** or **'IBS is a diagnosis of exclusion'**\n  - Current Australian practice: positive Rome IV diagnosis with limited investigations\n  - Scope only for **red flags** or **abnormal calprotectin**",
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Rome IV met + NO red flags</div><div class=\"gv-step\">Limited screen: FBC, CRP, coeliac serology, faecal calprotectin</div><div class=\"gv-step\">All normal → confident POSITIVE IBS diagnosis, start treatment (no colonoscopy)</div><div class=\"gv-step\">Red flag OR raised calprotectin → colonoscopy</div></div>",
   "source": "Rome IV criteria; Australian Prescriber 'Irritable bowel syndrome' (Therapeutic Guidelines); GESA; RACGP guidance, current 2026",
   "verified": true,
   "tags": [
    "IBS",
    "Rome-IV",
    "positive-diagnosis",
    "faecal-calprotectin",
    "red-flags"
   ],
   "title": "IBS",
   "subtitle": "a POSITIVE diagnosis (Rome IV) with limited testing, not a diagnosis of exclusion",
   "id": "gastroenterology-18"
  },
  {
   "topic": "Acute cholangitis - Charcot/Reynolds, antibiotics, and the cardinal lesson: SOURCE CONTROL via ERCP",
   "subarea": "Pancreas & biliary (medical)",
   "whatFirst": "- **Resuscitate** (sepsis pathway: cultures, IV balanced crystalloid, empirical antibiotics early)\n- Then achieve **SOURCE CONTROL** by biliary **DRAINAGE**\n  - **ERCP is first-line**\n- Antibiotics alone do NOT treat cholangitis; the obstructed infected bile must be **decompressed**",
   "trap": "- Most tempting wrong answer: **'continue IV antibiotics and observe'**\n  - Antibiotics buy time but are NOT definitive\n  - An obstructed infected biliary tree needs **DRAINAGE**\n- Timing gotcha (TG18 grades):\n  - **Grade III** (severe, organ dysfunction): drainage as soon as patient is stabilised\n  - **Grade II** (moderate): early drainage within **24h** reduces mortality/length of stay\n  - **Grade I** (mild): drainage if fails to settle on antibiotics\n- Second trap: choosing **'urgent cholecystectomy'** as source control\n  - The source is the **CBD**, so the answer is **ERCP** (or PTC if ERCP fails/unavailable)\n  - Cholecystectomy comes later",
   "discriminator": "- **Charcot's Triad** (fever, RUQ pain, jaundice) = cholangitis\n- Add **hypotension + confusion** = **Reynolds' Pentad** = suppurative cholangitis\n  - A peri-arrest emergency demanding **immediate drainage**\n- Distinguish from **acute cholecystitis**: Charcot absent, no jaundice, LFTs near-normal\n- Distinguish from **acute pancreatitis**: lipase >3x ULN dominates",
   "redFlags": "- **Reynolds' pentad** (hypotension + altered mental state)\n- **Organ dysfunction** (TG18 grade III)\n- **Lactate rise**\n- No response to antibiotics within hours\n- -> Emergency **biliary drainage** + ICU",
   "viva": "- Say (ISBAR): 'I have a septic patient with **Charcot's triad** — treating as acute cholangitis'\n- Taken cultures, started balanced fluids and empirical antibiotics\n- Escalating urgently for **ERCP for source control**\n  - Antibiotics alone will not fix an obstructed infected duct\n- If they have the **pentad**: suppurative cholangitis, needs drainage **NOW**",
   "mnemonic": "Charcot = 3 (fever, pain, jaundice). Reynolds = 5 (+ hypotension + confusion = 'pre-death pentad').",
   "mcqTrap": "- **'Treat with IV antibiotics and observe'**\n- **'Urgent cholecystectomy for source control'**\n  - The source control is **ERCP biliary drainage**",
   "source": "Tokyo Guidelines 2018 (TG18, Miura et al, J Hepatobiliary Pancreat Sci 2018) acute cholangitis flowchart; Therapeutic Guidelines (eTG, current); Surviving Sepsis Campaign",
   "verified": true,
   "tags": [
    "cholangitis",
    "Charcot",
    "Reynolds",
    "ERCP",
    "source-control",
    "sepsis",
    "TG18"
   ],
   "cutoffs": [
    "**Empirical antibiotics** as soon as possible / within **1h** for shock (Surviving Sepsis)",
    "**Grade II/III**: early/urgent ERCP drainage (benefit if within **24h**)",
    "**Grade I**: drainage if no response to antibiotics",
    "**PTC** if ERCP fails/unavailable"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Recognise: Charcot triad (fever + RUQ pain + jaundice)</div><div class=\"gv-step\">Resuscitate: cultures, fluids, early antibiotics</div><div class=\"gv-step\">Grade severity (TG18 I/II/III)</div><div class=\"gv-step\">SOURCE CONTROL: ERCP biliary drainage (urgent if II/III)</div><div class=\"gv-step\">Interval cholecystectomy later</div></div><div class=\"gv-pills\"><span class=\"gv-pill\">Antibiotics alone NEVER enough</span><span class=\"gv-pill\">Reynolds pentad = drain NOW</span></div>",
   "title": "Acute cholangitis",
   "subtitle": "Charcot/Reynolds, antibiotics, and the cardinal lesson: SOURCE CONTROL via ERCP",
   "id": "gastroenterology-19",
   "images": [
    {
     "src": "assets/img/gastrointestinal_photo_scleral_icterus_fresh.jpg",
     "caption": "Scleral icterus in cholangitis/obstructive jaundice",
     "alt": "Yellow discolouration of the sclera representing conjugated hyperbilirubinaemia as part of Charcot's triad in acute cholangitis",
     "credit": "Bobjgalindo, Wikimedia Commons, CC BY-SA 4.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Ultrasound_of_stone_within_the_distal_common_bile_duct.jpg/960px-Ultrasound_of_stone_within_the_distal_common_bile_duct.jpg",
     "caption": "Acute cholangitis — dilated common bile duct with stone on ultrasound",
     "alt": "Right upper quadrant ultrasound showing dilated common bile duct (>6 mm) with echogenic shadowing calculus at the distal CBD — the obstructing lesion driving cholangitis",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/0/09/ERCP_stone.jpg",
     "caption": "ERCP — bile duct stone extraction (source control for cholangitis)",
     "alt": "Fluoroscopic image during ERCP showing a filling defect in the common bile duct (choledocholithiasis) and sphincterotomy/stone extraction — the definitive source control for acute cholangitis",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Acute cholangitis - the exact Australian (eTG) empirical antibiotic regimen",
   "subarea": "Pancreas & biliary (medical)",
   "whatFirst": "- Cover **gram-negative enteric organisms** (E. coli, Klebsiella, Enterobacter), enterococci/streptococci\n- And anaerobes if biliary-enteric anastomosis or recent instrumentation\n- eTG empirical regimen (sepsis from biliary/GI source):\n  - **Amoxicillin (or ampicillin) IV + gentamicin IV**\n  - Add **metronidazole IV** if biliary-enteric anastomosis/anaerobes suspected\n- If gentamicin contraindicated:\n  - Substitute with **ceftriaxone** (+/- metronidazole if anaerobic cover needed)",
   "trap": "- Most tempting wrong answer (Australian exam): jumping straight to **carbapenem (meropenem)** or **piperacillin-tazobactam** for a community-acquired first presentation\n  - eTG stewardship reserves these for severe sepsis, immediate penicillin hypersensitivity with resistance risk, or healthcare-associated/instrumented biliary infection\n- Trap: forgetting to add **metronidazole** when there is a **biliary-enteric anastomosis** (e.g. hepaticojejunostomy/Whipple)\n  - That is the specific anaerobic-cover indication\n  - Do NOT reflexively add metronidazole to every case\n- Also: **aminoglycoside (gentamicin)** needs renal-function/duration limits — check and **review at 48h**",
   "discriminator": "- **Community-acquired, non-instrumented** cholangitis: amox/ampicillin + gentamicin (**no metronidazole**)\n- **Biliary-enteric anastomosis / post-ERCP / healthcare-associated**: add anaerobic + broader gram-negative cover\n- The discriminator is **presence of anastomosis or prior instrumentation**, not severity alone",
   "redFlags": "- **Septic shock**, failure to improve, resistant organisms on culture\n- -> Escalate per eTG to **piperacillin-tazobactam** or **carbapenem**\n- Discuss with **ID**\n- Always **de-escalate** on culture results",
   "viva": "- 'In Australia my empirical regimen for community-acquired cholangitis is **IV amoxicillin (or ampicillin) plus gentamicin**'\n- Adding **metronidazole only** if there is a biliary-enteric anastomosis or anaerobic risk\n- Reserve **pip-taz or meropenem** for severe sepsis or healthcare-associated infection\n- **De-escalate on cultures**",
   "mnemonic": "'A-G-M': Amoxicillin + Gentamicin, add Metronidazole for anastomosis.",
   "mcqTrap": "- **'Commence meropenem'** or **'piperacillin-tazobactam'** as first-line for an otherwise well community-acquired cholangitis",
   "source": "Therapeutic Guidelines (eTG, Antibiotic - sepsis from biliary/GI source, current); supported by Australian population-based study (ampicillin/gentamicin/metronidazole highest empiric adequacy ~96%)",
   "verified": true,
   "tags": [
    "cholangitis",
    "antibiotics",
    "eTG",
    "gentamicin",
    "metronidazole",
    "stewardship"
   ],
   "cutoffs": [
    "**1st line (community)**: amoxicillin/ampicillin IV + gentamicin IV",
    "Add **metronidazole IV** if biliary-enteric anastomosis/anaerobes",
    "Reserve **pip-taz / meropenem** for severe sepsis or healthcare-associated",
    "Review gentamicin and **de-escalate at 48h**"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Scenario</th><th>eTG empirical regimen</th></tr><tr><td>Community-acquired, no anastomosis</td><td>Amoxicillin (ampicillin) IV + gentamicin IV</td></tr><tr><td>Biliary-enteric anastomosis / anaerobic risk</td><td>Add metronidazole IV</td></tr><tr><td>Gentamicin contraindicated</td><td>Ceftriaxone-based regimen</td></tr><tr><td>Severe sepsis / healthcare-associated</td><td>Piperacillin-tazobactam or carbapenem (+ ID)</td></tr></table>",
   "title": "Acute cholangitis",
   "subtitle": "the exact Australian (eTG) empirical antibiotic regimen",
   "id": "gastroenterology-20"
  },
  {
   "topic": "Acute pancreatitis - diagnosis: lipase, NOT amylase; and the trap of 'normal' enzymes",
   "subarea": "Pancreas & biliary (medical)",
   "whatFirst": "- Diagnose on **2 of 3 (Revised Atlanta)**:\n  - **(1)** Characteristic epigastric pain radiating to back\n  - **(2)** Lipase (or amylase) **>3x upper limit of normal**\n  - **(3)** Characteristic imaging (CT/MRI/US)\n- If 2 of 3 criteria met: **CT is NOT needed to diagnose**",
   "trap": "- Most tempting wrong answer: ordering/relying on **serum amylase**, or ordering **CT abdomen to 'confirm' the diagnosis** at presentation\n- **Lipase** is the test of choice in Australia\n  - More sensitive and specific\n  - Stays elevated longer: **~8-14 days** vs amylase which normalises by **3-5 days**\n- Gotcha (a): enzyme **magnitude does NOT predict severity or prognosis**\n  - Lipase of 3000 is no worse than 800\n- Gotcha (b): lipase can be **NORMAL** in alcoholic and hypertriglyceridaemic pancreatitis\n  - Due to acinar burnout / assay interference\n  - Normal lipase does **NOT exclude pancreatitis** if pain + imaging fit\n- **Early CT (<72h) understages necrosis** and is reserved for diagnostic doubt or deterioration",
   "discriminator": "- vs **perforated peptic ulcer / mesenteric ischaemia / ruptured AAA**: all give epigastric pain + can mildly raise lipase\n- Lipase **>3x ULN** with consistent pain favours pancreatitis\n- Always keep **AAA and mesenteric ischaemia** on the list in the older arteriopath\n  - Mild lipase rise is non-specific\n- **Macroamylasaemia** raises amylase but NOT lipase",
   "redFlags": "- Deterioration, haemodynamic instability, or diagnostic uncertainty\n- -> **CT with contrast at 72-96h** (not earlier) to stage necrosis\n- Severe ongoing pain with rising inflammatory markers after a week\n- -> **Reimage** for necrosis/collection",
   "viva": "- Say out loud: 'I would confirm with **serum LIPASE, not amylase**'\n- 'I do not need a CT to make the diagnosis if pain and lipase fit'\n- '**The enzyme level does not grade severity** — I grade severity clinically and with serial obs'",
   "mnemonic": "Lipase = Lingers, Likely (more sens/spec). Amylase = Away quickly.",
   "mcqTrap": "- **'Order serum amylase'** — wrong\n- **'CT abdomen to confirm diagnosis'** — wrong",
   "source": "Australian Prescriber 'Blood tests for acute pancreatitis' (australianprescriber.tg.org.au); Therapeutic Guidelines (eTG, Gastrointestinal, current); Revised Atlanta Classification 2012",
   "verified": true,
   "tags": [
    "pancreatitis",
    "lipase",
    "diagnosis",
    "high-yield"
   ],
   "cutoffs": [
    "Lipase or amylase **>3x upper limit of normal**",
    "**2 of 3** Revised Atlanta criteria required",
    "CT for staging **deferred to 72-96h**"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Feature</th><th>Lipase (preferred)</th><th>Amylase</th></tr><tr><td>Diagnostic cut-off</td><td>&gt;3x ULN</td><td>&gt;3x ULN</td></tr><tr><td>Sensitivity/specificity</td><td>Higher</td><td>Lower</td></tr><tr><td>Stays elevated</td><td>8-14 days</td><td>3-5 days</td></tr><tr><td>Predicts severity?</td><td>No</td><td>No</td></tr><tr><td>Can be normal in</td><td colspan=\"2\">Alcohol &amp; hypertriglyceridaemic pancreatitis</td></tr></table>",
   "title": "Acute pancreatitis",
   "subtitle": "diagnosis: lipase, NOT amylase; and the trap of 'normal' enzymes",
   "id": "gastroenterology-21",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Akute_exsudative_Pankreatitis_-_CT_axial.jpg/960px-Akute_exsudative_Pankreatitis_-_CT_axial.jpg",
     "caption": "Acute pancreatitis — CT abdomen showing pancreatic oedema and peripancreatic fat stranding",
     "alt": "Contrast-enhanced CT abdomen in acute pancreatitis showing enlarged oedematous pancreas with peripancreatic fat stranding and fluid — Balthazar grade C/D",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Acute pancreatitis - severity scoring & the prognostic markers that actually matter",
   "subarea": "Pancreas & biliary (medical)",
   "whatFirst": "- Severity classified by **Revised Atlanta** (clinical, retrospective):\n  - **MILD**: no organ failure, no local/systemic complication\n  - **MODERATELY SEVERE**: transient organ failure <48h OR local complication\n  - **SEVERE**: persistent organ failure **>48h**\n- Organ failure graded by **modified Marshall score** (resp/renal/cardiovascular)\n- **Persistent organ failure** is the dominant driver of mortality",
   "trap": "- Most tempting wrong answer: quoting a **single admission score** (Ranson, Glasgow-Imrie, APACHE II) as THE determinant of severity\n- **Ranson score needs 48h to complete** — cannot be calculated on arrival\n- None of these scores outperform **persistent organ failure** for predicting death\n- Gotcha (1): **CRP most useful at 48h** — CRP **>150 mg/L at 48h** suggests severe/necrotising disease\n  - NOT useful on day 0\n- Gotcha (2): **rising urea (BUN) and haematocrit at 24-48h** are the best simple bedside markers of under-resuscitation and predict mortality better than any single score\n- Gotcha (3): **raised haematocrit = haemoconcentration = needs MORE fluid**, not less",
   "discriminator": "- Moderately severe vs severe hinges on **transient (<48h) vs persistent (>48h) organ failure**\n  - The **48h line** is the examiner's favourite discriminator\n- A patient with a peripancreatic fluid collection but **no organ failure** = moderately severe, not severe",
   "redFlags": "- **Persistent organ failure >48h**\n- Rising urea/creatinine, falling urine output\n- **Rising haematocrit** despite fluids\n- **CRP >150** at 48h\n- High BMI, **age >55**\n- -> ICU/HDU referral",
   "viva": "- 'I don't rely on a single score on arrival — **Ranson takes 48 hours**'\n- 'I track **persistent organ failure beyond 48h**, urea and haematocrit trends as my best simple prognostic markers'\n- '**CRP at 48 hours**'\n- '**Persistent organ failure is what kills**'",
   "mnemonic": "PANCREAS (Glasgow-Imrie): Po2<8kPa(60mmHg), Age>55, Neutrophils(WCC>15), Calcium<2, uRaemia urea>16, Enzymes LDH>600/AST>200, Albumin<32, Sugar glucose>10.",
   "mcqTrap": "- **'Calculate Ranson score on admission to grade severity'** — Ranson takes 48 hours\n- **'CRP on day 0 confirms severe pancreatitis'** — wrong, CRP meaningful only at 48h",
   "source": "Revised Atlanta Classification 2012; modified Marshall score; Therapeutic Guidelines (eTG, current)",
   "verified": true,
   "tags": [
    "pancreatitis",
    "severity",
    "Atlanta",
    "Glasgow-Imrie",
    "organ-failure"
   ],
   "cutoffs": [
    "**Persistent organ failure >48h** = SEVERE",
    "**Transient organ failure <48h** = MODERATELY SEVERE",
    "**CRP >150 mg/L at 48h** = severe/necrotising",
    "**Glasgow-Imrie >=3** = severe",
    "Age **>55**, WCC **>15**, glucose **>10**, calcium **<2**, urea **>16**, albumin **<32**"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Revised Atlanta grade</th><th>Definition</th></tr><tr><td>Mild</td><td>No organ failure; no local/systemic complication</td></tr><tr><td>Moderately severe</td><td>Transient organ failure (&lt;48h) OR local/systemic complication</td></tr><tr><td>Severe</td><td>PERSISTENT organ failure (&gt;48h)</td></tr></table><div class=\"gv-pills\"><span class=\"gv-pill\">Best simple markers: urea/HCT trend</span><span class=\"gv-pill\">CRP useful at 48h not day 0</span><span class=\"gv-pill\">Rising HCT = give MORE fluid</span></div>",
   "title": "Acute pancreatitis",
   "subtitle": "severity scoring & the prognostic markers that actually matter",
   "id": "gastroenterology-22",
   "images": [
    {
     "src": "assets/img/gastrointestinal_ct_pancreatic_pseudocyst_fresh.jpg",
     "caption": "Pancreatic pseudocyst — CT showing peripancreatic walled-off fluid collection",
     "alt": "CT abdomen showing a large rounded peripancreatic fluid collection with a defined wall (pseudocyst) — a late complication of acute pancreatitis relevant to severity assessment",
     "credit": "Hellerhoff, Wikimedia Commons, CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "Acute pancreatitis - aetiology: gallstones vs alcohol, and the work-up everyone forgets",
   "subarea": "Pancreas & biliary (medical)",
   "whatFirst": "- In Australia: top two causes are **GALLSTONES (~40-50%)** and **ALCOHOL (~20-30%)**\n- EVERY patient with acute pancreatitis needs:\n  - **(1)** RUQ **ultrasound within 24-48h** — gallstones/CBD dilatation (changes management: drives chole/ERCP)\n  - **(2)** Serum **triglycerides** and **calcium**\n  - **(3)** **Alcohol history**\n  - **(4)** **Medication review**",
   "trap": "- Most tempting wrong answer: attributing pancreatitis to **alcohol and stopping the work-up** without a US to exclude gallstones — or never measuring triglycerides\n- Gotcha (a): **hypertriglyceridaemia** causes pancreatitis at TG **>11.3 mmol/L** (>1000 mg/dL)\n  - Crucially, **lipase may be falsely NORMAL/low** because lipid interferes with the assay\n  - Normal lipase does not exclude it\n- Gotcha (b): a deranged **ALT >3x ULN** has high positive predictive value for **gallstone pancreatitis**\n- Gotcha (c): **hypercalcaemia** (think primary hyperparathyroidism) is a cause\n  - AND pancreatitis itself can **drop calcium** (saponification)\n  - Do not confuse cause with effect",
   "discriminator": "- **Gallstone** pancreatitis: female, older, raised **ALT/bilirubin/ALP**, dilated CBD on US, first episode\n- **Alcoholic** pancreatitis: male, heavy intake, recurrent episodes, **AST:ALT >2**, often near-normal lipase\n- **ALT >3x ULN -> think gallstones**",
   "redFlags": "- **Idiopathic pancreatitis in patient >40-50** with weight loss\n- -> Consider **pancreatic malignancy** obstructing the duct\n- Arrange follow-up imaging (**CT/MRCP/EUS**) after recovery",
   "viva": "- 'I do an **early RUQ ultrasound on everyone** to look for stones because it changes management'\n- 'I check **triglycerides and calcium**'\n- 'A raised **ALT points me to a gallstone cause**'\n- 'In an older patient with idiopathic pancreatitis I think about an **obstructing malignancy**'",
   "mnemonic": "I GET SMASHED: Idiopathic, Gallstones, Ethanol, Trauma, Steroids, Mumps, Autoimmune, Scorpion, Hyper-Ca/Hyper-TG/Hypothermia, ERCP, Drugs.",
   "mcqTrap": "- **'Diagnose alcoholic pancreatitis on history alone and discharge without imaging'**\n- **'Normal lipase excludes hypertriglyceridaemic pancreatitis'**",
   "source": "Therapeutic Guidelines (eTG, Gastrointestinal, current); GESA clinician resources; UpToDate/Endotext on hypertriglyceridaemia-induced pancreatitis",
   "verified": true,
   "tags": [
    "pancreatitis",
    "aetiology",
    "gallstones",
    "alcohol",
    "triglycerides",
    "ALT"
   ],
   "cutoffs": [
    "Triglycerides **>11.3 mmol/L** (>1000 mg/dL) cause pancreatitis",
    "**ALT >3x ULN** -> gallstone aetiology (high PPV)",
    "**RUQ US within 24-48h** in ALL patients",
    "Consider **malignancy** if idiopathic and age **>40-50**"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th></th><th>Gallstone</th><th>Alcoholic</th></tr><tr><td>Typical patient</td><td>Older, female</td><td>Younger, male</td></tr><tr><td>LFTs</td><td>ALT/ALP/bili up</td><td>AST:ALT &gt;2</td></tr><tr><td>US</td><td>Stones, dilated CBD</td><td>Often normal</td></tr><tr><td>Lipase</td><td>High</td><td>May be near-normal</td></tr><tr><td>Recurrence</td><td>Until cholecystectomy</td><td>Recurrent if drinking</td></tr></table>",
   "title": "Acute pancreatitis",
   "subtitle": "aetiology: gallstones vs alcohol, and the work-up everyone forgets",
   "id": "gastroenterology-23",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Ultrasound_image_of_gallbladder_stone_Gallstone_091937515.jpg",
     "caption": "Gallstones on right upper quadrant ultrasound — echogenic foci with posterior acoustic shadowing",
     "alt": "Abdominal ultrasound showing multiple echogenic gallstones within the gallbladder with characteristic posterior acoustic shadowing — the leading cause of acute pancreatitis",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Acute pancreatitis - fluid resuscitation: 'aggressive' has been redefined; balanced crystalloid; nutrition; NO prophylactic antibiotics",
   "subarea": "Pancreas & biliary (medical)",
   "whatFirst": "- Resuscitate with **balanced/buffered crystalloid**: **Hartmann's / lactated Ringer's PREFERRED** over 0.9% saline\n  - Saline causes hyperchloraemic acidosis and may worsen inflammation\n- Titrate to goals with **frequent reassessment**, not a fixed high rate:\n  - **HR <120**, MAP >65, **urine output 0.5-1 mL/kg/h**, falling urea/HCT\n- Use **moderate goal-directed** resuscitation (WATERFALL): bolus only if hypovolaemic, then **~1.5 mL/kg/h**",
   "trap": "- Big recently-changed gotcha: **'aggressive' fluids no longer means dump litres**\n  - **WATERFALL RCT (2022)**: aggressive resuscitation (20 mL/kg bolus then 3 mL/kg/h) caused MORE fluid overload without benefit vs moderate resuscitation\n- Most tempting wrong MCQ answers:\n  - **(1)** **'0.9% normal saline'** — should be Hartmann's/LR\n  - **(2)** **'Prophylactic IV antibiotics'** — NOT indicated even in necrotising pancreatitis unless proven infected necrosis/cholangitis\n  - **(3)** **'Keep nil by mouth / TPN'** — wrong; early enteral/oral feeding within **24-72h** as tolerated; enteral preferred over parenteral; do NOT routinely wait for pain/lipase to settle",
   "discriminator": "- **Under-resuscitation**: rising urea + rising HCT + oliguria -> give more\n- **Overload**: rising JVP, crackles, worsening oxygenation, abdominal compartment pressure -> stop/slow\n- Reassess every few hours — the discriminator is the **TREND**, not a single number",
   "redFlags": "- Persistent oliguria, rising creatinine, hypoxia, lactate rise, **abdominal compartment syndrome** -> ICU\n- **Infected necrosis** (gas on CT, clinical sepsis after **~7-10 days**)\n  - -> Antibiotics + **delayed (>4 weeks) minimally-invasive 'step-up' drainage**\n  - NOT early open necrosectomy",
   "viva": "- 'I resuscitate with a **balanced crystalloid like Hartmann's**, moderate and goal-directed with frequent reassessment'\n- '**WATERFALL** showed aggressive fluids harm'\n- 'I start **enteral feeding early**'\n- 'I do **NOT give prophylactic antibiotics** — only for proven infected necrosis or cholangitis'",
   "mnemonic": "Fluids = Hartmann's, not Hosing (moderate, goal-directed). Antibiotics = only for INFECTION, not prophylaxis.",
   "mcqTrap": "- **'Commence prophylactic broad-spectrum IV antibiotics'** in uncomplicated/necrotising pancreatitis\n- **'0.9% saline at high fixed rate'**\n- **'Keep NBM with TPN'**",
   "source": "WATERFALL RCT (de-Madaria et al, NEJM 2022;387:989-1000); Therapeutic Guidelines (eTG, current) - antibiotics only for infected necrosis/cholangitis; ACG guideline (moderate goal-directed resuscitation, LR preferred)",
   "verified": true,
   "tags": [
    "pancreatitis",
    "fluids",
    "WATERFALL",
    "antibiotics",
    "nutrition",
    "step-up"
   ],
   "cutoffs": [
    "**Hartmann's/LR preferred** over 0.9% saline",
    "Moderate resuscitation: bolus only if hypovolaemic, then **~1.5 mL/kg/h** (WATERFALL)",
    "Urine output target: **0.5-1 mL/kg/h**",
    "**Early enteral/oral feeding within 24-72h**",
    "**No prophylactic antibiotics**",
    "Step-up drainage **delayed >4 weeks** for infected necrosis"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Diagnose (lipase >3x ULN + pain)</div><div class=\"gv-step\">Resuscitate: Hartmann's/LR, MODERATE goal-directed</div><div class=\"gv-step\">Reassess trend: urea/HCT/UO/MAP</div><div class=\"gv-step\">Early enteral feeding 24-72h</div><div class=\"gv-step\">Antibiotics ONLY if infected necrosis/cholangitis</div><div class=\"gv-step\">Infected necrosis: delayed step-up >4 wk</div></div>",
   "title": "Acute pancreatitis",
   "subtitle": "fluid resuscitation: 'aggressive' has been redefined; balanced crystalloid; nutrition; NO prophylactic antibiotics",
   "id": "gastroenterology-24"
  },
  {
   "topic": "Gallstone disease spectrum - which presentation gets which intervention (the discriminator chain)",
   "subarea": "Pancreas & biliary (medical)",
   "whatFirst": "- Decide **WHERE the stone is** and whether there is infection:\n  - **Biliary colic** (transient cystic-duct obstruction, no inflammation): -> elective **lap chole**\n  - **Acute cholecystitis** (persistent obstruction + inflammation, fever, Murphy's, raised WCC/CRP, US wall >3mm/pericholecystic fluid): -> antibiotics + **early lap chole within ~7 days / same admission**\n  - **Choledocholithiasis** (CBD stone): -> **ERCP + clearance** then chole\n  - **Cholangitis** (infected obstructed CBD): -> **urgent drainage**",
   "trap": "- Most tempting wrong answer: treating **asymptomatic gallstones** (found incidentally) with cholecystectomy\n  - Asymptomatic gallstones are **NOT routinely operated on** in Australia\n  - Exceptions: **porcelain gallbladder, stones >3 cm, GB polyps, high cancer risk** (certain populations), pre-transplant\n- Second gotcha: **'wait 6 weeks'** for inflammation to settle in acute cholecystitis\n  - Current evidence favours **EARLY (same-admission, ideally <7 days)** laparoscopic cholecystectomy\n  - NOT delayed interval surgery\n- Third: confusing **biliary colic** (normal LFTs) with **choledocholithiasis** (raised bilirubin/ALP/GGT, dilated CBD)",
   "discriminator": "- **Biliary colic vs cholecystitis**:\n  - Colic: pain resolves **<6h**, afebrile, normal WCC/CRP, **negative Murphy's**\n  - Cholecystitis: pain **>6h**, fever, **positive Murphy's**, raised inflammatory markers\n- **Cholecystitis vs cholangitis**:\n  - Cholecystitis: local RUQ signs, normal/mildly deranged LFTs, **no jaundice**\n  - Cholangitis: **jaundice + obstructive LFTs + systemic sepsis** (Charcot)",
   "redFlags": "- **Jaundice + fever + RUQ pain** (Charcot) -> cholangitis -> urgent drainage\n- Rising bilirubin/ALP with **dilated CBD** -> retained stone needs **ERCP**\n- **Gallstone ileus** (pneumobilia + SBO + ectopic stone) -> surgical",
   "viva": "- 'I **localise the problem along the biliary tree**'\n- '**Asymptomatic stones I leave alone**'\n- 'For acute cholecystitis I give antibiotics and arrange **early — same-admission — lap chole**, not a 6-week interval'\n- 'I escalate the moment **jaundice and sepsis** appear, because that is cholangitis'",
   "mnemonic": "The 5 F's of cholelithiasis risk: Female, Fat, Fertile, Forty, Family history.",
   "mcqTrap": "- **'Refer asymptomatic incidental gallstones for cholecystectomy'**\n- **'Delay cholecystectomy 6 weeks for acute cholecystitis'**",
   "source": "GESA clinical guidance; Therapeutic Guidelines (eTG, current); Tokyo Guidelines 2018 (TG18) acute cholecystitis (early lap chole, time-limit removed); World Society of Emergency Surgery acute cholecystitis guidelines",
   "verified": true,
   "tags": [
    "gallstones",
    "cholecystitis",
    "choledocholithiasis",
    "biliary-colic",
    "cholecystectomy"
   ],
   "cutoffs": [
    "**Asymptomatic stones: no surgery** (except >3cm, porcelain GB, polyps, high cancer risk)",
    "Acute cholecystitis: **early lap chole same admission / <7 days**",
    "GB wall **>3mm** on US supports cholecystitis",
    "Mild gallstone pancreatitis: **chole same admission**"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Entity</th><th>Pain</th><th>Fever/WCC</th><th>LFTs/jaundice</th><th>Action</th></tr><tr><td>Biliary colic</td><td>&lt;6h, self-limiting</td><td>No</td><td>Normal</td><td>Elective lap chole</td></tr><tr><td>Acute cholecystitis</td><td>&gt;6h, Murphy +</td><td>Yes</td><td>Normal/mild</td><td>Abx + EARLY lap chole</td></tr><tr><td>Choledocholithiasis</td><td>RUQ</td><td>+/-</td><td>Bili/ALP up, CBD dilated</td><td>ERCP then chole</td></tr><tr><td>Cholangitis</td><td>RUQ</td><td>Yes (sepsis)</td><td>Jaundice + obstructive</td><td>Urgent drainage</td></tr></table>",
   "title": "Gallstone disease spectrum",
   "subtitle": "which presentation gets which intervention (the discriminator chain)",
   "id": "gastroenterology-25",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Ultrasonography_of_sludge_and_gallstones.jpg",
     "caption": "Gallstones — ultrasound showing echogenic calculi with posterior acoustic shadowing",
     "alt": "Right upper quadrant ultrasound demonstrating multiple echogenic gallstones within the gallbladder lumen with posterior acoustic shadowing — the imaging finding in uncomplicated cholelithiasis",
     "credit": "Wikimedia Commons"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Acute_cholecystitis_as_seen_on_ultrasound_axial_view.jpg/960px-Acute_cholecystitis_as_seen_on_ultrasound_axial_view.jpg",
     "caption": "Acute cholecystitis — ultrasound showing gallbladder wall thickening and pericholecystic fluid",
     "alt": "Ultrasound of acute cholecystitis showing distended gallbladder with thickened wall (>3 mm), pericholecystic fluid, and positive sonographic Murphy's sign — distinguishing it from uncomplicated gallstones",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Jaundice work-up - the LFT-pattern algorithm and the conjugated/unconjugated fork",
   "subarea": "Pancreas & biliary (medical)",
   "whatFirst": "- **Step 1: split the bilirubin**\n  - **Unconjugated (indirect)** with otherwise normal LFTs -> haemolysis or **Gilbert's** (pre-hepatic)\n    - Do NOT image the biliary tree\n  - **Conjugated (direct)** -> read the ALT/ALP ratio:\n    - **ALT-dominant** = hepatocellular (hepatitis/toxin/ischaemia)\n    - **ALP & GGT-dominant** = cholestatic/obstructive\n- **Step 2 (for cholestatic)**: **ULTRASOUND first** — are the ducts dilated?\n  - **Dilated** = extrahepatic obstruction (stone/stricture/tumour) -> **MRCP/ERCP**\n  - **Not dilated** = intrahepatic cholestasis (drugs, PBC, hepatitis)",
   "trap": "- Most tempting wrong answer: ordering **CT or MRCP as FIRST imaging** in obstructive jaundice\n  - **Ultrasound** is the correct first test (cheap, no radiation, dilated-vs-not, detects stones/mass)\n- Gotcha (a): a raised **ALP must be confirmed as biliary, not bony**\n  - Check **GGT**: raised GGT confirms hepatobiliary source\n  - Isolated ALP with **normal GGT** = think bone/pregnancy\n- Gotcha (b): **Gilbert's** = isolated unconjugated rise worsening with fasting/illness\n  - It is **benign and needs NO work-up**\n  - Classic distractor wanting you to scan a well patient\n- Gotcha (c): **painless jaundice + palpable non-tender gallbladder** (Courvoisier's law) = **malignant obstruction** until proven otherwise\n  - NOT gallstones",
   "discriminator": "- **Hepatocellular**: ALT >> ALP, ALT-dominant ratio = hepatitis/toxin/ischaemia\n- **Cholestatic**: ALP & GGT >> ALT = obstruction or intrahepatic cholestasis\n- **Pre-hepatic**: isolated unconjugated bilirubin, normal ALT/ALP = haemolysis/Gilbert's\n- Stone obstruction: tends to be **painful with fluctuating LFTs**\n- Malignant obstruction: tends to be **painless and progressive**",
   "redFlags": "- **Painless progressive jaundice + weight loss + palpable gallbladder** (Courvoisier) -> malignancy\n  - Urgent **CT pancreas** + referral\n- **Jaundice + fever + RUQ pain** -> cholangitis -> drainage\n- **Encephalopathy/coagulopathy** with jaundice -> **acute liver failure** -> escalate",
   "viva": "- 'I first **split the bilirubin into conjugated and unconjugated**'\n- 'Conjugated with ALP/GGT-dominant pattern is cholestatic, so my **FIRST imaging is an ultrasound** to see if ducts are dilated'\n- 'Dilated -> **MRCP**'\n- '**Painless jaundice with a palpable gallbladder is malignancy — Courvoisier — until proven otherwise**'",
   "mnemonic": "'Split, ratio, ultrasound': split bilirubin -> ALT/ALP ratio -> US for duct dilatation.",
   "mcqTrap": "- **'Order CT abdomen as first-line imaging'** — US first\n- **'Investigate the well patient with isolated unconjugated bilirubinaemia'** — Gilbert's, reassure",
   "source": "GESA clinical guidance; Therapeutic Guidelines (eTG, current); RACGP guidance on abnormal LFT / jaundice interpretation",
   "verified": false,
   "tags": [
    "jaundice",
    "LFTs",
    "cholestasis",
    "ultrasound",
    "Courvoisier",
    "Gilbert",
    "MRCP"
   ],
   "cutoffs": [
    "**Unconjugated isolated rise + normal LFTs** -> Gilbert's/haemolysis (no imaging)",
    "**ALP & GGT dominant** -> cholestatic pattern",
    "**ALT dominant** -> hepatocellular pattern",
    "**Ultrasound = FIRST imaging** in cholestatic jaundice",
    "**Dilated ducts** -> MRCP/ERCP"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Jaundice -> split bilirubin</div><div class=\"gv-step\">Unconjugated + normal LFTs -> haemolysis / Gilbert (no scan)</div><div class=\"gv-step\">Conjugated -> ALT/ALP ratio</div><div class=\"gv-step\">Cholestatic (ALP/GGT up) -> ULTRASOUND first</div><div class=\"gv-step\">Ducts dilated -> MRCP/ERCP (obstruction); not dilated -> intrahepatic cause</div></div><div class=\"gv-pills\"><span class=\"gv-pill\">Confirm raised ALP with GGT</span><span class=\"gv-pill\">Painless + palpable GB = Courvoisier = cancer</span></div>",
   "title": "Jaundice work-up",
   "subtitle": "the LFT-pattern algorithm and the conjugated/unconjugated fork",
   "id": "gastroenterology-26",
   "images": [
    {
     "src": "assets/img/gastrointestinal_photo_scleral_icterus_fresh.jpg",
     "caption": "Scleral icterus — yellow discolouration of the sclera",
     "alt": "Clinical sign of jaundice: deep yellow-orange discolouration of the sclera indicating conjugated or mixed hyperbilirubinaemia, the first visible sign of jaundice",
     "credit": "Bobjgalindo, Wikimedia Commons, CC BY-SA 4.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Ultrasound_of_diated_common_bile_duct_and_intrahepatic_ducts_due_to_gallstone_obstruction.png/960px-Ultrasound_of_diated_common_bile_duct_and_intrahepatic_ducts_due_to_gallstone_obstruction.png",
     "caption": "Obstructive jaundice — dilated intrahepatic bile ducts on ultrasound",
     "alt": "Abdominal ultrasound showing dilated intrahepatic bile ducts (parallel channel sign) indicating biliary obstruction — the key first-line imaging finding in obstructive jaundice work-up",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Alcoholic hepatitis - Maddrey's score, steroids vs sepsis, and the AST:ALT discriminator",
   "subarea": "Liver",
   "trap": "- Gotcha (1): Transaminases are only **MODESTLY elevated** in alcoholic hepatitis\n  - AST and ALT usually **<300-400**\n  - If **>500-1000** think another cause (viral/ischaemic/paracetamol)\n  - **AST:ALT ratio classically >2:1**\n- Gotcha (2): **Maddrey's Discriminant Function (DF) >=32** OR hepatic encephalopathy identifies severe disease that MAY benefit from corticosteroids\n  - BUT must **EXCLUDE/TREAT INFECTION** and active GI bleeding FIRST\n  - **Steroids into untreated sepsis is the killer error**\n- Response assessed at **day 7 with the Lille score**",
   "whatFirst": "- **Resuscitate**\n- Screen and treat **infection** (steroids contraindicated until sepsis controlled)\n- Address **GI bleed**, **AKI**\n- **Thiamine** (Wernicke prophylaxis **BEFORE glucose**)\n- Nutrition; manage **withdrawal** (diazepam, caution in liver failure)\n- **Calculate Maddrey DF**:\n  - If **>=32** or encephalopathy AND infection excluded -> consider **prednisolone 40 mg/day**\n  - Reassess with **Lille score at day 7** (stop if non-responder)",
   "discriminator": "- **Alcoholic hepatitis**: AST:ALT **>2**, AST **<~300**, neutrophilia, bilirubin up, fever\n- **Acute viral/ischaemic/paracetamol hepatitis**: ALT>AST, transaminases **in the thousands**\n- Maddrey DF uses **bilirubin + prolongation of PT/INR**",
   "redFlags": "- **DF >=32**, encephalopathy, AKI/HRS, GI bleed, sepsis\n- **Lille >=0.45 at day 7** = steroid non-response, poor prognosis\n- **MELD** also prognosticates",
   "mcqTrap": "- Most tempting wrong answer: **'give corticosteroids now'** to severe alcoholic hepatitis with fever/positive cultures\n  - WRONG — **control infection first**\n- Second trap: **AST/ALT in the thousands** labelled as alcoholic hepatitis\n  - That pattern **argues AGAINST it** — look for viral/ischaemic/toxic cause",
   "viva": "- 'Steroids are appropriate in **severe disease (DF >=32 or HE) AFTER excluding/treating infection and bleeding**'\n- 'Reassess **Lille at day 7**'\n- 'Don't forget **thiamine before dextrose**'",
   "mnemonic": "'AST > ALT in Alcohol' (A before L, ratio >2). DF >=32 = severe. Lille at day 7 = 'Look if Lille is Lousy (>=0.45) -> stop steroids'.",
   "source": "GESA; Therapeutic Guidelines (eTG, current); EASL/AASLD alcohol-related liver disease",
   "tags": [
    "alcoholic hepatitis",
    "Maddrey",
    "Lille",
    "corticosteroids",
    "AST:ALT",
    "thiamine"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Suspected severe alcoholic hepatitis (AST:ALT&gt;2, bili up)</div><div class=\"gv-step\">Thiamine; treat/exclude infection + GI bleed; manage AKI</div><div class=\"gv-step\">Maddrey DF &gt;=32 OR encephalopathy = severe</div><div class=\"gv-step\">Infection controlled -> prednisolone 40 mg/day</div><div class=\"gv-step\">Day 7 Lille &gt;=0.45 = non-responder -> stop steroids</div></div>",
   "cutoffs": [
    "**AST:ALT ratio classically >2:1**",
    "AST/ALT usually **<300-400** (>500 suggests another cause)",
    "**Maddrey DF >=32** = severe (steroid consideration)",
    "**Prednisolone 40 mg/day** in severe disease",
    "**Lille >=0.45 at day 7** = steroid non-response"
   ],
   "title": "Alcoholic hepatitis",
   "subtitle": "Maddrey's score, steroids vs sepsis, and the AST:ALT discriminator",
   "id": "gastroenterology-27",
   "images": [
    {
     "src": "assets/img/gastroenterology_scleral_icterus_01.jpg",
     "caption": "Alcoholic hepatitis — jaundice and scleral icterus",
     "alt": "Scleral icterus in alcoholic hepatitis reflecting conjugated hyperbilirubinaemia — used in Maddrey's discriminant function (bilirubin component)",
     "credit": "Bobjgalindo, Wikimedia Commons, CC BY-SA 4.0 (cropped)"
    }
   ]
  },
  {
   "topic": "Decompensated cirrhosis - recognising the tipping point and what to do first",
   "subarea": "Liver",
   "trap": "- Most tempting wrong move: chasing the new sign (jaundice, confusion, big belly) and **missing the precipitant**\n- **Decompensation = a trigger event**: compensated cirrhosis becomes decompensated when ONE cardinal event appears:\n  - **Ascites, variceal bleed, hepatic encephalopathy, or jaundice**\n- Each decompensation mandates a hunt for a **PRECIPITANT**:\n  - Infection (esp. **SBP**), GI bleed, dehydration/diuretics, constipation, alcohol, hepatotoxic drugs, portal vein thrombosis, **HCC**\n- **MELD/MELD-Na** (not Child-Pugh) drives prognosis and Australian transplant listing priority",
   "whatFirst": "- **ABC** + look for the **precipitant** in parallel:\n  - Cultures (**blood + ascitic tap is mandatory** in any decompensated cirrhotic admission, even without abdominal signs)\n  - **FBC/UEC/LFT/coags/lactate**, septic screen, glucose\n- **Diagnostic paracentesis BEFORE antibiotics** where feasible\n- Stop **nephrotoxins/diuretics** if AKI; avoid sedatives",
   "discriminator": "- **Compensated vs decompensated** = presence of ascites/bleed/encephalopathy/jaundice\n- **Acute-on-chronic liver failure (ACLF)** = decompensation PLUS **organ failure(s)** + high short-term mortality\n  - It is NOT just 'bad decompensation'",
   "redFlags": "- **AKI / rising creatinine**\n- **HE grade 3-4**\n- **Variceal bleed**\n- Lactate up, **MELD climbing**\n- **HRS-AKI**\n- -> Escalate to ICU/hepatology/transplant unit",
   "mcqTrap": "- MCQ shows a decompensated cirrhotic with new ascites and tempts you to **start spironolactone first**\n  - WRONG — first step is **diagnostic ascitic tap** to exclude SBP and confirm SAAG\n  - Treating ascites medically before excluding infection is the **classic trap**",
   "viva": "- 'Why must EVERY admitted decompensated cirrhotic get an **ascitic tap**?'\n  - **SBP is present in ~10-25%** and is often asymptomatic\n  - Missing it is **lethal**\n- Frame escalation via ISBAR to hepatology",
   "mnemonic": "Decompensation = 'A BE J': Ascites, Bleed (variceal), Encephalopathy, Jaundice. Precipitants = 'HEPATIC': Haemorrhage(GI), Electrolytes/dehydration, Protein load/Portal vein thrombosis, Alcohol, Toxins/drugs, Infection(SBP), Constipation.",
   "source": "GESA; Therapeutic Guidelines (eTG, current); International Club of Ascites / EASL cirrhosis decompensation framework",
   "tags": [
    "cirrhosis",
    "decompensation",
    "MELD",
    "ascitic tap",
    "ACLF"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>State</th><th>Definition</th><th>Action</th></tr></thead><tbody><tr><td>Compensated</td><td>No ascites/bleed/HE/jaundice</td><td>Surveillance (HCC US +/- AFP 6-monthly, gastroscopy for varices)</td></tr><tr><td>Decompensated</td><td>Any of: ascites, variceal bleed, HE, jaundice</td><td>Find precipitant; ascitic tap; treat trigger</td></tr><tr><td>ACLF</td><td>Decompensation + organ failure(s)</td><td>ICU; transplant assessment</td></tr></tbody></table>",
   "cutoffs": [
    "Decompensation = **>=1 of ascites / variceal bleed / hepatic encephalopathy / jaundice**",
    "HCC surveillance: **ultrasound +/- AFP every 6 months**",
    "Transplant priority: **MELD-Na score**"
   ],
   "title": "Decompensated cirrhosis",
   "subtitle": "recognising the tipping point and what to do first",
   "id": "gastroenterology-28",
   "images": [
    {
     "src": "assets/img/gastrointestinal_photo_scleral_icterus_fresh.jpg",
     "caption": "Scleral icterus — jaundice as a sign of hepatic decompensation",
     "alt": "Yellow sclera indicating hyperbilirubinaemia in decompensated cirrhosis — one of the four cardinal decompensation events (jaundice, ascites, encephalopathy, variceal bleed)",
     "credit": "Bobjgalindo, Wikimedia Commons, CC BY-SA 4.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/4/4c/CirrhosisWithAscites.png",
     "caption": "Decompensated cirrhosis — massive ascites on clinical examination",
     "alt": "Grossly distended abdomen from tense ascites in decompensated cirrhosis, with visible flanks bulging and umbilical eversion — a cardinal sign of hepatic decompensation",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Haemochromatosis - C282Y, the transferrin saturation >45% screen, and ferritin pitfalls",
   "subarea": "Liver",
   "trap": "- **Ferritin** is an acute-phase reactant — a high ferritin alone does NOT diagnose iron overload\n  - Raised in inflammation, NAFLD/MASLD, alcohol, malignancy\n- The screening test is **fasting transferrin saturation (>45%)** — this is the trigger, not ferritin\n- Confirm with **HFE genotyping** (C282Y homozygosity is the classic genotype)\n- Most **C282Y homozygotes** never develop clinical disease (incomplete penetrance) — genotype alone is not the disease",
   "whatFirst": "- **Fasting transferrin saturation + ferritin** as first-line screening\n- If Tsat **>45%** (and/or ferritin raised) → HFE genotype\n- If C282Y homozygous with iron overload → treat with **venesection**\n  - Target ferritin **~50–100 mcg/L** initially, then maintenance\n- Ferritin **>1000 mcg/L** flags higher cirrhosis risk → consider liver assessment/biopsy/elastography + HCC surveillance",
   "discriminator": "- **Hereditary haemochromatosis**: Tsat HIGH >45% + ferritin high + C282Y homozygous\n- **Secondary iron overload / MASLD-dysmetabolic hyperferritinaemia**: ferritin high but Tsat NORMAL\n- **Transferrin saturation** separates true iron loading from reactive hyperferritinaemia",
   "redFlags": "- Ferritin **>1000 mcg/L** → cirrhosis risk (consider biopsy/elastography)\n- **Diabetes**\n- **Cardiomyopathy/arrhythmia**\n- **Hypogonadism**\n- **Arthropathy** (2nd/3rd MCP joints)\n- Cirrhosis → **HCC surveillance**\n- Screen **first-degree relatives**",
   "mcqTrap": "- Most tempting wrong answer: diagnosing haemochromatosis on an **isolated high ferritin** — WRONG without an elevated transferrin saturation\n- Isolated high ferritin with **normal Tsat** is usually dysmetabolic/inflammatory, not HFE haemochromatosis",
   "viva": "- Examiner: 'Best initial test and why not ferritin alone?'\n- Answer: **Fasting transferrin saturation** — ferritin is an acute-phase reactant\n- Discuss **family screening** (autosomal recessive) and venesection target",
   "mnemonic": "'Saturation Screens, Genes Confirm, Venesection Treats.' Bronze diabetes triad = skin + diabetes + liver.",
   "source": "Australian Prescriber 'Testing for HFE-related haemochromatosis'; Therapeutic Guidelines (eTG, current); GESA",
   "tags": [
    "haemochromatosis",
    "C282Y",
    "transferrin saturation",
    "ferritin",
    "venesection",
    "HFE"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Test</th><th>HFE haemochromatosis</th><th>Dysmetabolic/inflammatory</th></tr></thead><tbody><tr><td>Transferrin saturation</td><td>High (&gt;45%)</td><td>Normal</td></tr><tr><td>Ferritin</td><td>High</td><td>High</td></tr><tr><td>Genotype</td><td>C282Y homozygous</td><td>Negative</td></tr></tbody></table>",
   "cutoffs": [
    "Fasting transferrin saturation **>45%** = screen positive (genotype next)",
    "**C282Y homozygosity** = classic genotype",
    "Ferritin **>1000 mcg/L** = higher cirrhosis risk → consider biopsy/elastography",
    "Venesection target ferritin **~50–100 mcg/L**"
   ],
   "title": "Haemochromatosis",
   "subtitle": "C282Y, the transferrin saturation >45% screen, and ferritin pitfalls",
   "id": "gastroenterology-29",
   "images": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/0/0b/HemochromatosisSkin.jpg",
     "caption": "Haemochromatosis — bronze skin discolouration (bronzed diabetes)",
     "alt": "Characteristic bronze-grey hyperpigmentation of the skin in hereditary haemochromatosis due to iron and melanin deposition — the 'bronzed diabetes' classic clinical finding",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Hepatic encephalopathy - precipitants, lactulose dosing endpoint, and the ammonia trap",
   "subarea": "Liver",
   "trap": "- **HE is a clinical diagnosis** — ammonia is unreliable\n  - A NORMAL ammonia does NOT exclude HE\n  - A HIGH ammonia does NOT confirm HE\n  - Do not order ammonia to diagnose or to titrate therapy\n- **First-line treatment = treat the precipitant**, not just give lactulose\n- Common precipitants: **infection**, GI bleed, constipation, dehydration from over-diuresis, sedatives, electrolyte disturbance (esp. hypokalaemia/alkalosis)\n- Most precipitated HE is reversible once the trigger is corrected",
   "whatFirst": "- **Identify and treat the precipitant** first\n  - Septic screen including ascitic tap\n  - Exclude GI bleed\n  - Review meds/sedatives\n  - Correct electrolytes/hypokalaemia\n  - Treat constipation\n- Then **lactulose** titrated to 2–3 soft bowel motions/day (NOT to ammonia)\n- Add **rifaximin 550 mg BD** for secondary prophylaxis of recurrent overt HE\n  - Typically after a second episode within 6 months",
   "discriminator": "- Exclude other causes of altered conscious state in cirrhosis:\n  - **Hypoglycaemia**\n  - **Intracranial bleed** (coagulopathy — low threshold for CT head)\n  - **Wernicke's** (give thiamine)\n  - **Sepsis**\n  - **Drug effect**\n- Asterixis + reversal with lactulose supports HE but is non-specific",
   "redFlags": "- Grade **3–4 HE** (marked confusion to coma) = airway risk → ICU\n- HE with **GI bleed** or worsening despite therapy = escalate",
   "mcqTrap": "- Stem: confused cirrhotic with 'normal serum ammonia' — tempting answer 'HE unlikely' is **WRONG**\n  - Ammonia neither rules in nor out; treat clinically\n- Also trap: **restricting dietary protein** — current practice does NOT restrict protein (maintain normal protein intake)",
   "viva": "- Examiner: 'What is your FIRST step in a cirrhotic who becomes confused overnight?'\n- Lead with **precipitant search** (esp. infection/bleed/constipation/sedatives) and safety (glucose, airway)\n- Do NOT lead with 'give lactulose'",
   "mnemonic": "Precipitants 'INFECTION & co': INfection, Excess diuresis/dehydration, Constipation, Bleed(GI), TIPS/shunt, sedatIves, electrOlytes(low K)/alkalosis, Non-compliance with lactulose.",
   "source": "Therapeutic Guidelines (eTG, current); Australian Prescriber (rifaximin for recurrent HE); GESA",
   "tags": [
    "hepatic encephalopathy",
    "lactulose",
    "rifaximin",
    "ammonia",
    "precipitants"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Confused cirrhotic</div><div class=\"gv-step\">Exclude hypoglycaemia / CT head if focal or coagulopathic / thiamine</div><div class=\"gv-step\">Find + treat precipitant (infection, bleed, constipation, sedatives, low K)</div><div class=\"gv-step\">Lactulose -> 2-3 soft stools/day</div><div class=\"gv-step\">Recurrent? add rifaximin 550 mg BD</div></div>",
   "cutoffs": [
    "Lactulose endpoint: **2–3 soft bowel motions** per day",
    "**Ammonia**: NOT used to diagnose or titrate",
    "**Protein**: normal intake (no restriction)",
    "**Rifaximin 550 mg BD**: add-on for recurrent overt HE (secondary prophylaxis)"
   ],
   "title": "Hepatic encephalopathy",
   "subtitle": "precipitants, lactulose dosing endpoint, and the ammonia trap",
   "id": "gastroenterology-30",
   "images": [
    {
     "src": "assets/img/gastrointestinal_photo_scleral_icterus_fresh.jpg",
     "caption": "Scleral icterus — jaundice in liver failure",
     "alt": "Deep yellow scleral discolouration signalling hyperbilirubinaemia — typical of the decompensated cirrhosis that underlies hepatic encephalopathy",
     "credit": "Bobjgalindo, Wikimedia Commons, CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "Hepatitis B - serology interpretation grid and who needs antiviral therapy",
   "subarea": "Liver",
   "trap": "- **Isolated anti-HBc** (HBsAg neg, anti-HBs neg, anti-HBc pos) is the trap pattern\n  - Can mean resolved infection with waned anti-HBs, occult HBV, OR a false positive\n  - These patients can **REACTIVATE if immunosuppressed** (e.g. rituximab, chemo) → need prophylaxis\n- Serology key:\n  - Surface **antigen (HBsAg)** = infection\n  - Surface **antibody (anti-HBs)** = immunity\n  - **Core antibody (anti-HBc)** = exposure (NEVER produced by vaccine)",
   "whatFirst": "- HBsAg >6 months = **chronic HBV**\n- Determine phase with **HBeAg/anti-HBe, HBV DNA, ALT**, +/− fibrosis (elastography)\n- Screen ALL before immunosuppression: **HBsAg + anti-HBc**\n- Start antiviral **prophylaxis (entecavir/tenofovir)** if HBsAg+ OR isolated anti-HBc+ before rituximab/chemo\n  - Prevents fatal reactivation",
   "discriminator": "- **Vaccinated**: anti-HBs ONLY (no anti-HBc)\n- **Resolved infection**: anti-HBs + anti-HBc — anti-HBc presence separates natural infection from vaccination\n- **Acute**: IgM anti-HBc positive\n- **Chronic**: IgM anti-HBc negative + HBsAg >6 months",
   "redFlags": "- **HBV + new immunosuppression** without prophylaxis\n- **Cirrhosis** (treat regardless of DNA/ALT)\n- Coinfection **HCV/HDV/HIV**\n- **HCC surveillance** needed in cirrhosis and high-risk groups",
   "mcqTrap": "- Most tempting wrong answer: anti-HBc positive interpreted as **'immune, no action' before chemo** — WRONG\n  - Isolated anti-HBc carries reactivation risk and needs antiviral prophylaxis\n- Also: confusing **anti-HBs** (immunity) with **HBsAg** (infection)",
   "viva": "- Examiner: 'Patient HBsAg neg, anti-HBc pos, due for rituximab — safe?'\n- Answer: **No** — reactivation risk; give entecavir/tenofovir prophylaxis\n- Note: HBV is **notifiable**; consider contacts/vaccination",
   "mnemonic": "'s = surface = Saviour(immunity) if Antibody, Sick if Antigen; c = core = Contact/exposure, never from vaccine'. IgM core = recent.",
   "source": "ASHM (Australasian Society HIV, Viral Hepatitis & Sexual Health) HBV guidance / B Positive; GESA; Therapeutic Guidelines (eTG, current)",
   "tags": [
    "hepatitis B",
    "serology",
    "HBsAg",
    "anti-HBc",
    "reactivation",
    "antiviral prophylaxis"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>HBsAg</th><th>anti-HBs</th><th>anti-HBc</th><th>Interpretation</th></tr></thead><tbody><tr><td>-</td><td>+</td><td>-</td><td>Vaccinated</td></tr><tr><td>-</td><td>+</td><td>+</td><td>Resolved infection (immune)</td></tr><tr><td>+</td><td>-</td><td>+ (IgM+)</td><td>Acute infection</td></tr><tr><td>+</td><td>-</td><td>+ (IgM-)</td><td>Chronic infection</td></tr><tr><td>-</td><td>-</td><td>+</td><td>Isolated anti-HBc: occult/resolved/false+ - REACTIVATION RISK</td></tr></tbody></table>",
   "cutoffs": [
    "Chronic HBV = HBsAg positive **>6 months**",
    "Treat cirrhosis **regardless of HBV DNA/ALT**",
    "Antiviral prophylaxis before immunosuppression if **HBsAg+ OR isolated anti-HBc+**",
    "**Entecavir or tenofovir** = first-line"
   ],
   "title": "Hepatitis B",
   "subtitle": "serology interpretation grid and who needs antiviral therapy",
   "id": "gastroenterology-31",
   "images": [
    {
     "src": "assets/img/gastrointestinal_photo_scleral_icterus_fresh.jpg",
     "caption": "Scleral icterus — acute hepatitis B jaundice",
     "alt": "Yellow scleral discolouration as the visible clinical correlate of the hyperbilirubinaemia seen in acute/chronic hepatitis B",
     "credit": "Bobjgalindo, Wikimedia Commons, CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "Hepatitis C - cure-era management, who treats, and the 'genotype-free' DAA gotcha",
   "subarea": "Liver",
   "trap": "- HCV is now **CURABLE** (SVR >95%) with all-oral pangenotypic direct-acting antivirals (DAAs)\n  - 8–12 weeks, prescribable in Australian **primary care** on the PBS\n  - Genotyping is largely no longer required for pangenotypic regimens\n- Selecting **interferon** or insisting on genotype before treatment = the dated wrong answer\n- Diagnosis = **anti-HCV antibody** (exposure) THEN **HCV RNA** (confirms current infection)\n  - Antibody alone does NOT mean active infection",
   "whatFirst": "- Anti-HCV positive → **HCV RNA** to confirm active infection\n- Assess **fibrosis** (APRI/FIB-4 or elastography); check for cirrhosis\n  - Cirrhosis changes duration/surveillance + refer to specialist\n- Treat with **pangenotypic DAA**\n  - Sofosbuvir/velpatasvir OR glecaprevir/pibrentasvir (two first-line regimens)\n- Test for cure: **HCV RNA at ≥12 weeks post-treatment** (SVR12)",
   "discriminator": "- Anti-HCV positive + **RNA negative** = past/cleared infection or post-cure — NOT active, do NOT treat\n- Anti-HCV positive + **RNA positive** = active infection (treat)\n- **Cirrhosis present** = continue 6-monthly HCC surveillance EVEN AFTER cure + treat in tertiary centre",
   "redFlags": "- **Cirrhosis** (decompensation/HCC risk — refer to specialist)\n- **HBV co-infection** — reactivation risk during DAA; screen HBsAg first\n- **Ongoing injecting** — reinfection risk (harm reduction)\n- **Decompensated cirrhosis** avoids protease-inhibitor ('-previr') regimens",
   "mcqTrap": "- Most tempting wrong answer: treating a patient who is **anti-HCV positive but HCV-RNA negative** (cleared/cured) — WRONG, no active virus to treat\n- Second trap: ordering **genotype as the mandatory next step** — pangenotypic DAAs make routine genotyping unnecessary",
   "viva": "- Examiner: 'Anti-HCV positive — have they got hepatitis C?'\n- Answer: **Not necessarily** — need HCV RNA to confirm current infection\n- Mention: pangenotypic DAA, **SVR12** test-of-cure, HCC surveillance persists if cirrhotic, screen HBV before DAA",
   "mnemonic": "'Antibody = met it, RNA = got it.' Cure confirmed by SVR12 (RNA-neg 12 weeks after finishing).",
   "source": "Australian recommendations for the management of hepatitis C virus infection: a consensus statement (GESA/ASHM 2022); PBS pangenotypic DAA listings",
   "tags": [
    "hepatitis C",
    "DAA",
    "HCV RNA",
    "pangenotypic",
    "SVR12",
    "cirrhosis surveillance"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Anti-HCV positive</div><div class=\"gv-step\">HCV RNA: negative = cleared/cured (no Rx); positive = active</div><div class=\"gv-step\">Assess fibrosis (FIB-4/elastography); screen HBV</div><div class=\"gv-step\">Pangenotypic DAA 8-12 wks</div><div class=\"gv-step\">SVR12 = cure; if cirrhotic continue 6-monthly HCC US</div></div>",
   "cutoffs": [
    "Confirm active infection with **HCV RNA** (not antibody alone)",
    "DAA duration typically **8–12 weeks**",
    "Cure = **SVR12** (RNA negative ≥12 weeks post-treatment)",
    "Cure rates **>95%**",
    "**HCC surveillance continues lifelong** if cirrhosis present"
   ],
   "title": "Hepatitis C",
   "subtitle": "cure-era management, who treats, and the 'genotype-free' DAA gotcha",
   "id": "gastroenterology-32",
   "images": [
    {
     "src": "assets/img/gastrointestinal_photo_scleral_icterus_fresh.jpg",
     "caption": "Scleral icterus — chronic hepatitis C with jaundice",
     "alt": "Yellow scleral discolouration in a patient with advanced hepatitis C — contextualises the hepatocellular damage that DAA therapy aims to prevent",
     "credit": "Bobjgalindo, Wikimedia Commons, CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "Hepatorenal syndrome (HRS-AKI) - diagnosis of exclusion, the 2-day albumin challenge, and terlipressin",
   "subarea": "Liver",
   "trap": "- **HRS-AKI is a diagnosis of exclusion**\n  - Modern ICA criteria DROPPED the old fixed creatinine cutoff; use ICA-AKI dynamics\n- Must first:\n  - **Stop diuretics** and withdraw nephrotoxins\n  - Exclude shock and structural/intrinsic renal disease (no significant proteinuria/haematuria, normal renal US)\n  - Give a **2-day albumin volume challenge** (1 g/kg/day, max 100 g) — failure to respond confirms HRS\n- HRS is **functional** — kidneys are structurally normal; urine is bland with low sodium",
   "whatFirst": "- Identify AKI in cirrhotic; **stop diuretics + nephrotoxins** (NSAIDs, aminoglycosides, contrast)\n- Exclude/treat **sepsis** (incl. SBP) and hypovolaemia\n- **Albumin challenge**: 1 g/kg/day (max 100 g) × 2 days\n- If no response + criteria met → HRS-AKI:\n  - **Terlipressin** (first-line where available) PLUS albumin 20–40 g/day\n  - Noradrenaline in ICU as alternative\n- Definitive treatment = **liver transplant**",
   "discriminator": "- **HRS** (functional): bland urine, urine Na low <20, no response to volume, structurally normal kidneys\n- **Pre-renal/hypovolaemia**: RESPONDS to fluid/albumin\n- **ATN**: granular casts, urine Na high, FeNa high, structural\n- **Albumin challenge** separates pre-renal from HRS",
   "redFlags": "- Rapidly progressive HRS-AKI (e.g. **doubling of creatinine**) = ICU/transplant urgency\n- **Terlipressin** can cause ischaemia (digital, cardiac, mesenteric) — monitor\n- Worsening despite vasoconstrictor + albumin → escalate (RRT bridge to transplant)",
   "mcqTrap": "- Most tempting wrong answer: giving more aggressive **crystalloid/loop diuretic** for the oliguria — WRONG\n  - Diuretics worsen HRS\n  - The test is an ALBUMIN challenge, not crystalloid loading\n- Also: do not assign the diagnosis until **pre-renal and ATN are excluded**",
   "viva": "- Examiner: 'Cirrhotic, creatinine doubled, oliguric — how do you confirm HRS and treat?'\n- Answer: Exclude shock/nephrotoxins/structural disease, withdraw diuretics, **2-day albumin challenge**\n- If no response → **terlipressin + albumin**; consider transplant\n- Consent/risk: **terlipressin ischaemia**",
   "mnemonic": "'HRS = Hold diuretics, Replace with albumin, Squeeze with terlipressin.' Functional = 'kidneys are fine, the liver is the problem.'",
   "source": "International Club of Ascites (ICA) HRS-AKI criteria; EASL ascites/SBP/HRS guidance; GESA; Therapeutic Guidelines (eTG, current)",
   "tags": [
    "hepatorenal syndrome",
    "HRS-AKI",
    "terlipressin",
    "albumin",
    "AKI in cirrhosis",
    "ICA criteria"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">AKI in cirrhotic with ascites</div><div class=\"gv-step\">Stop diuretics + nephrotoxins; exclude shock, sepsis, structural renal disease</div><div class=\"gv-step\">Albumin challenge 1 g/kg/day (max 100 g) x2 days</div><div class=\"gv-step\">No response + criteria met = HRS-AKI</div><div class=\"gv-step\">Terlipressin + albumin 20-40 g/day; transplant assessment</div></div>",
   "cutoffs": [
    "Albumin challenge: **1 g/kg/day (max 100 g)** for 2 days",
    "**No fixed creatinine cutoff** (ICA-AKI dynamic criteria)",
    "Maintenance albumin **20–40 g/day** with vasoconstrictor",
    "Response = **≥25% reduction** in serum creatinine",
    "Urine Na typically **<20**; bland sediment (functional)"
   ],
   "title": "Hepatorenal syndrome (HRS-AKI)",
   "subtitle": "diagnosis of exclusion, the 2-day albumin challenge, and terlipressin",
   "id": "gastroenterology-33",
   "images": [
    {
     "src": "assets/img/gastrointestinal_photo_scleral_icterus_fresh.jpg",
     "caption": "Scleral icterus — jaundice in end-stage liver disease",
     "alt": "Icteric sclerae indicating significant hyperbilirubinaemia in the context of decompensated liver disease preceding HRS-AKI",
     "credit": "Bobjgalindo, Wikimedia Commons, CC BY-SA 4.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/8/89/CirrhosisWithAscitesMark.png",
     "caption": "Tense ascites — decompensated cirrhosis (HRS context)",
     "alt": "Grossly distended abdomen with tense ascites and visible abdominal wall veins — the typical clinical setting in which hepatorenal syndrome develops",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "LFT pattern - hepatocellular vs cholestatic, the GGT/ALP rule, and isolated bilirubin",
   "subarea": "Liver",
   "trap": "- **ALP is NOT liver-specific** (also from bone, placenta, gut)\n  - Confirm hepatic origin with a raised **GGT**\n  - Isolated raised ALP with NORMAL GGT → **BONE**, not liver\n- Pattern (not absolute number) directs work-up:\n  - **Hepatocellular** = ALT/AST predominate\n  - **Cholestatic** = ALP/GGT predominate (R-factor formalises this)\n- Isolated **unconjugated hyperbilirubinaemia** with normal enzymes = Gilbert's/haemolysis, NOT liver injury",
   "whatFirst": "- Define the **pattern**:\n  - **Hepatocellular** (ALT/AST up) → viral serology, autoimmune, iron studies, alcohol, drugs, MASLD\n  - **Cholestatic** (ALP+GGT up) → **ultrasound first** for biliary obstruction/dilatation, then AMA (PBC), MRCP/ERCP (PSC, stones, tumour)\n- Always check **synthetic function** (INR, albumin, bilirubin)\n  - Synthetic function, NOT transaminases, reflects severity",
   "discriminator": "- **Hepatocellular vs cholestatic**: AST/ALT-dominant vs ALP/GGT-dominant\n- Cholestasis:\n  - **Intra-hepatic**: PBC (AMA+), drugs\n  - **Extra-hepatic/obstructive**: dilated ducts on US — stones, stricture, tumour\n- Isolated ALP + **normal GGT** = bone\n- **AST:ALT >2** with modest rise = alcohol",
   "redFlags": "- Rising bilirubin + prolonged INR + falling albumin = **synthetic failure**\n- Cholestasis + fever + RUQ pain (Charcot's triad) = **ascending cholangitis** → urgent biliary drainage\n- Painless jaundice + weight loss = **malignancy**",
   "mcqTrap": "- Most tempting wrong answer: isolated high ALP labelled as liver/biliary disease — **WRONG** if GGT is normal (think bone/physiological)\n- Also: assuming a sky-high transaminase = worst prognosis — **synthetic function** (INR/albumin/bilirubin) determines severity, not the transaminase peak",
   "viva": "- Examiner: 'ALP high, GGT normal — is this the liver?'\n- Answer: **No** — likely bone; GGT confirms hepatic ALP\n- First test in cholestatic jaundice = **ultrasound** to see if ducts are dilated",
   "mnemonic": "'GGT Guards the Gallbladder/liver origin of ALP.' Pattern: AL-T = hepaTocellular; AL-P = cholestatic/Plumbing.",
   "source": "GESA; Therapeutic Guidelines (eTG, current); standard LFT interpretation (R-factor)",
   "tags": [
    "LFT",
    "hepatocellular",
    "cholestatic",
    "GGT",
    "ALP",
    "bilirubin",
    "synthetic function"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Pattern</th><th>Dominant enzymes</th><th>First steps</th></tr></thead><tbody><tr><td>Hepatocellular</td><td>ALT/AST</td><td>Viral serology, autoimmune, iron, alcohol, MASLD</td></tr><tr><td>Cholestatic</td><td>ALP + GGT</td><td>Ultrasound; AMA (PBC); MRCP/ERCP</td></tr><tr><td>Isolated bilirubin (unconjugated)</td><td>Enzymes normal</td><td>Gilbert's / haemolysis screen</td></tr><tr><td>Isolated ALP, normal GGT</td><td>ALP only</td><td>Bone source (not liver)</td></tr></tbody></table>",
   "cutoffs": [
    "Confirm hepatic ALP with a raised **GGT** (isolated ALP + normal GGT = bone)",
    "Hepatocellular: **ALT/AST dominant**",
    "Cholestatic: **ALP/GGT dominant** → ultrasound first",
    "Severity = **INR + albumin + bilirubin** (synthetic function), not transaminase peak",
    "**AST:ALT >2** = alcohol pattern"
   ],
   "title": "LFT pattern",
   "subtitle": "hepatocellular vs cholestatic, the GGT/ALP rule, and isolated bilirubin",
   "id": "gastroenterology-34",
   "images": [
    {
     "src": "assets/img/gastrointestinal_photo_scleral_icterus_fresh.jpg",
     "caption": "Scleral icterus — visible jaundice (cholestatic pattern)",
     "alt": "Yellow scleral discolouration indicating raised bilirubin — the clinical manifestation of the cholestatic LFT pattern (raised ALP + GGT + bilirubin)",
     "credit": "Bobjgalindo, Wikimedia Commons, CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "NAFLD / MASLD - diagnosis of exclusion, FIB-4 risk stratification, and the 'just fatty liver' trap",
   "subarea": "Liver",
   "trap": "- **NAFLD/MASLD is a diagnosis of exclusion**\n  - Must exclude significant alcohol — threshold separating ALD from MASLD:\n    - Women: **≥20 g/day**\n    - Men: **≥30 g/day**\n  - Also exclude: hepatitis B/C, haemochromatosis, autoimmune, drugs\n- The danger is **fibrosis**, not the fat\n  - Non-invasive **FIB-4** (uses age, AST, ALT, platelets) triages who needs specialist referral\n- The lazy wrong answer: reassure 'benign fatty liver' and do nothing",
   "whatFirst": "- Confirm steatosis (ultrasound) + metabolic risk; **exclude other causes** (alcohol Hx, viral serology, iron studies, autoimmune screen)\n- **Risk-stratify fibrosis with FIB-4**:\n  - **<1.3** = low risk → manage in primary care, lifestyle\n  - **1.3–2.67** = indeterminate → second-line test (e.g. elastography) or intensify cardiometabolic management and re-test in 1 year\n  - **>2.67** = high risk → specialist referral\n- Treat metabolic drivers: **weight loss ~7–10%** reduces steatohepatitis, diabetes, lipids, BP, alcohol cessation",
   "discriminator": "- **MASLD**: metabolic, alcohol below threshold\n- **ALD**: alcohol above threshold; AST:ALT often **>2**\n- **MASH/NASH** (steatohepatitis + inflammation) vs simple steatosis — the inflammatory form progresses to fibrosis/cirrhosis/HCC",
   "redFlags": "- **FIB-4 high**, signs of advanced fibrosis/cirrhosis\n- **T2DM** accelerates fibrosis\n- Cirrhotic MASLD needs **HCC surveillance**\n- HCC can occur in MASLD even **WITHOUT cirrhosis**",
   "mcqTrap": "- Most tempting wrong answer: **'reassure, fatty liver is benign, no follow-up'** — WRONG; must exclude mimics and risk-stratify fibrosis (FIB-4)\n- Also trap: starting a **drug as first-line** — lifestyle/weight loss is first-line; no drug is universally first-line",
   "viva": "- Examiner: 'How do you decide this fatty liver needs a hepatologist?'\n- Answer: Use **FIB-4** (<1.3 low; 1.3–2.67 indeterminate → second-line/elastography; >2.67 high → referral)\n- Discriminator: confirm it isn't alcohol-related by **quantifying intake**",
   "mnemonic": "FIB-4 = 'Find Increasing Brokenness' (age, AST, ALT, plts). 'Fat is the symptom; fibrosis is the disease.'",
   "source": "GESA MAFLD/MASLD consensus statement; Assessment of MASLD in primary care: a consensus statement (MJA 2025;223(5)); Liver Foundation FIB-4 calculator",
   "tags": [
    "NAFLD",
    "MASLD",
    "NASH",
    "FIB-4",
    "fibrosis",
    "metabolic syndrome"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>FIB-4</th><th>Fibrosis risk</th><th>Action</th></tr></thead><tbody><tr><td>&lt;1.3</td><td>Low</td><td>Primary care, lifestyle, recheck</td></tr><tr><td>1.3-2.67</td><td>Indeterminate</td><td>Second-line test (elastography) +/- re-test in 1 year</td></tr><tr><td>&gt;2.67</td><td>High</td><td>Specialist referral</td></tr></tbody></table>",
   "cutoffs": [
    "FIB-4 **<1.3** = low fibrosis risk",
    "FIB-4 **1.3–2.67** = indeterminate (second-line testing / elastography)",
    "FIB-4 **>2.67** = high fibrosis risk (refer)",
    "Weight loss **~7–10%** body weight improves steatohepatitis",
    "Alcohol threshold separating MASLD from ALD: **~20 g/day (women), ~30 g/day (men)**"
   ],
   "title": "NAFLD / MASLD",
   "subtitle": "diagnosis of exclusion, FIB-4 risk stratification, and the 'just fatty liver' trap",
   "id": "gastroenterology-35",
   "images": [
    {
     "src": "assets/img/endocrine_acanthosis_nigricans_axilla_01.jpg",
     "caption": "Acanthosis nigricans — insulin resistance / metabolic syndrome",
     "alt": "Velvety hyperpigmented plaques in the axilla — a visible skin marker of insulin resistance that co-exists with NAFLD/MASLD in metabolic syndrome",
     "credit": "Mark F. Brady; Prashanth Rawla, CC BY-SA 4.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Steatosis_hepatis_mit_Zirrhosezeichen_39M_-_CT_axial_und_coronar_KM_pv_-_001.jpg/960px-Steatosis_hepatis_mit_Zirrhosezeichen_39M_-_CT_axial_und_coronar_KM_pv_-_001.jpg",
     "caption": "CT abdomen — hepatic steatosis (fatty liver)",
     "alt": "CT abdomen — hepatic steatosis (fatty liver)",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Paracetamol overdose - 4-hour nomogram, 2-bag NAC, and the 'staggered/late' traps",
   "subarea": "Liver",
   "trap": "- The current **Australian/NZ nomogram** has a single treatment line passing through **1000 micromol/L (~150 mg/L) at 4 hours**\n  - Laboratory result must be read against matching units\n- Earliest interpretable level is at **4 hours** post-ingestion\n  - A level before 4h cannot be plotted\n- The **2020 ANZ guideline** (and 2024 NSW update) use a **TWO-BAG NAC regimen**\n  - 200 mg/kg over 4h, then 100 mg/kg over 16h\n  - Fewer anaphylactoid reactions than the old 3-bag regimen",
   "whatFirst": "- Risk-assess time + dose\n- **Activated charcoal** if presenting ≤2h (or massive ingestion) and airway safe\n- Take **paracetamol level at 4h** (or on arrival if >4h) AND ALT/INR\n- Plot on nomogram; start **NAC** if:\n  - Level above the line, OR\n  - Staggered/unknown-time ingestion, OR\n  - Presenting **>8h** with significant ingestion\n- **ALWAYS phone Poisons Information 13 11 26**",
   "discriminator": "- **Single acute** (timed, <8h) ingestion → use nomogram\n- **Staggered or unknown time** → do NOT use the nomogram; treat based on dose/ALT/level\n- **>8h or massive** (>30 g / levels more than DOUBLE the nomogram line) → start NAC empirically, do not wait\n  - Massive overdose needs **increased NAC**: double the second bag to 200 mg/kg over 16h",
   "redFlags": "- Rising **INR/ALT**, acidosis, hypoglycaemia, encephalopathy = fulminant failure\n  - Apply **King's College criteria**, contact transplant unit\n- **Lactate and pH** are escalation markers",
   "mcqTrap": "- Tempting wrong answer: a 6-hour level just below the line → 'no NAC needed'\n  - WRONG if ingestion was **staggered or time uncertain** — nomogram does not apply; treat\n- Also tempting: **delaying NAC** for the level in a patient presenting at >8–10h — WRONG\n  - Start NAC empirically; NAC benefit falls sharply **after 8h**",
   "viva": "- Examiner: 'Patient took 25 g over the evening, unsure exactly when — do you plot the level?'\n- Answer: **No** — staggered/uncertain timing invalidates the nomogram; treat on dose/ALT/level and call Poisons\n- Consent point: **NAC anaphylactoid reactions**",
   "mnemonic": "'4-16-150': read at 4h, finish second bag by ~20h; 150 mg/L (1000 micromol/L) line at 4h. Late/staggered = 'when in doubt, NAC it out'.",
   "source": "Updated guidelines for management of paracetamol poisoning in Australia & New Zealand (Chiew et al., MJA 2020;212(4)); NSW Health/Poisons Information Centre paracetamol guidance (2024); Poisons Information 13 11 26",
   "tags": [
    "paracetamol",
    "NAC",
    "nomogram",
    "toxicology",
    "staggered overdose"
   ],
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Presents &lt;=2h: consider charcoal</div><div class=\"gv-step\">Level at 4h (or on arrival if &gt;4h) + ALT/INR</div><div class=\"gv-step\">Single timed &lt;8h: plot nomogram (150 mg/L / 1000 micromol/L @4h line)</div><div class=\"gv-step\">Above line OR staggered OR &gt;8h/massive: NAC 2-bag (200 mg/kg/4h then 100 mg/kg/16h)</div><div class=\"gv-step\">Always phone 13 11 26</div></div>",
   "cutoffs": [
    "Earliest plottable level: **4 hours** post-ingestion",
    "Treatment line **~150 mg/L (1000 micromol/L)** at 4h",
    "NAC 2-bag: **200 mg/kg over 4h** then **100 mg/kg over 16h**",
    "Charcoal generally if presenting **≤2h**",
    "Massive (levels >double the nomogram line) = **double the second bag to 200 mg/kg over 16h**"
   ],
   "title": "Paracetamol overdose",
   "subtitle": "4-hour nomogram, 2-bag NAC, and the 'staggered/late' traps",
   "id": "gastroenterology-36",
   "images": [
    {
     "src": "assets/img/gastrointestinal_photo_scleral_icterus_fresh.jpg",
     "caption": "Scleral icterus — acute liver failure (late paracetamol toxicity)",
     "alt": "Deep jaundice as a sign of hepatocellular necrosis — the consequence of untreated paracetamol overdose when NAC is delayed or missed",
     "credit": "Bobjgalindo, Wikimedia Commons, CC BY-SA 4.0"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Rumack_Matthew_nomogram_with_treatment_%28study%29_line-vi.png/960px-Rumack_Matthew_nomogram_with_treatment_%28study%29_line-vi.png",
     "caption": "Paracetamol overdose treatment nomogram",
     "alt": "The Australian/NZ single-line nomogram with the 1000 micromol/L (150 mg/L) at 4-hour treatment threshold — used to determine NAC need after paracetamol ingestion",
     "credit": "Wikimedia Commons"
    }
   ]
  },
  {
   "topic": "Spontaneous bacterial peritonitis - the 250 rule, cefotaxime + albumin, and the secondary-peritonitis discriminator",
   "subarea": "Liver",
   "trap": "- Ascitic fluid **PMN ≥250 cells/mm3** = SBP — treat IMMEDIATELY\n  - Do NOT wait for the culture\n  - Culture is often negative — **'culture-negative neutrocytic ascites'** still = SBP and is treated\n- Tempting error: demanding a positive culture before starting antibiotics",
   "whatFirst": "- **Diagnostic paracentesis** (cell count + culture in blood-culture bottles at bedside) BEFORE antibiotics\n- Then empirical IV **third-generation cephalosporin** (cefotaxime or ceftriaxone)\n- ADD **IV albumin** (1.5 g/kg day 1, 1 g/kg day 3) to prevent HRS and reduce mortality\n  - This albumin step is high-yield and frequently forgotten",
   "discriminator": "- **SBP**: single organism, PMN ≥250, total protein usually low\n- **Secondary bacterial peritonitis** (perforation/abscess) — suspect if:\n  - Polymicrobial\n  - Very high PMN\n  - Ascitic glucose **<2.8 mmol/L**\n  - Ascitic LDH > serum LDH\n  - Total protein high\n  - → needs imaging + surgical review, not just cephalosporin",
   "redFlags": "- **AKI/rising creatinine** after SBP = developing HRS (albumin reduces this)\n- Failure of PMN to fall by **>25% at 48h** repeat tap = wrong bug/secondary peritonitis — escalate + reimage",
   "mcqTrap": "- Most tempting wrong option: **'await ascitic culture before treating'** — WRONG; PMN ≥250 alone mandates immediate antibiotics\n- Second trap: **forgetting albumin** — the option without albumin looks complete but misses the mortality/HRS benefit",
   "viva": "- Examiner: 'Ascitic neutrophils 320, culture pending — what now and why albumin?'\n- Start **cefotaxime/ceftriaxone** now\n- **Albumin** (1.5 g/kg day 1, 1 g/kg day 3) prevents HRS-AKI and lowers mortality\n- Mention **SBP prophylaxis** (norfloxacin) post-recovery",
   "mnemonic": "'250 = treat, don't wait to eat (culture)'. Albumin days 1 & 3 = '1.5 then 1'.",
   "source": "GESA; Therapeutic Guidelines (eTG, current); EASL ascites/SBP guidance",
   "tags": [
    "SBP",
    "ascites",
    "cefotaxime",
    "albumin",
    "secondary peritonitis",
    "HRS prevention"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Feature</th><th>SBP (primary)</th><th>Secondary peritonitis</th></tr></thead><tbody><tr><td>Organisms</td><td>Single</td><td>Polymicrobial</td></tr><tr><td>Ascitic glucose</td><td>Normal</td><td>Low (&lt;2.8 mmol/L)</td></tr><tr><td>Ascitic protein/LDH</td><td>Low protein</td><td>High protein, LDH&gt;serum</td></tr><tr><td>Action</td><td>Cefotaxime + albumin</td><td>+ Imaging + surgery</td></tr></tbody></table>",
   "cutoffs": [
    "Ascitic PMN **≥250 cells/mm3** = SBP (treat regardless of culture)",
    "Albumin: **1.5 g/kg day 1** + **1 g/kg day 3**",
    "Repeat tap at 48h: expect **>25% fall** in PMN",
    "Secondary peritonitis clue: ascitic glucose **<2.8 mmol/L**"
   ],
   "title": "Spontaneous bacterial peritonitis",
   "subtitle": "the 250 rule, cefotaxime + albumin, and the secondary-peritonitis discriminator",
   "id": "gastroenterology-37"
  },
  {
   "topic": "Wilson disease - low caeruloplasmin, the young-patient liver+neuro+eye clue, and the ALP trap",
   "subarea": "Liver",
   "trap": "- Think **Wilson's** in any liver disease in a YOUNG person (<40–45) — the classic 'don't miss in the young' cause\n- Dramatic presentation = **fulminant Wilson**: acute liver failure with:\n  - **Coombs-negative haemolysis**\n  - **LOW or NORMAL alkaline phosphatase**\n  - **Low ALP:bilirubin ratio** — a deceptively normal-looking ALP in fulminant failure is the buzz clue\n- Diagnostic triad: low serum **caeruloplasmin** + high **24h urinary copper** + **Kayser-Fleischer rings** (slit lamp)",
   "whatFirst": "- Serum **caeruloplasmin** (low)\n- **24h urinary copper** (high)\n- **Slit-lamp** for Kayser-Fleischer rings\n- LFTs; in fulminant disease look for **Coombs-negative haemolytic anaemia + low ALP:bilirubin ratio**\n- Treat with copper chelation: **penicillamine or trientine** + zinc\n- Fulminant Wilson = **urgent transplant assessment**",
   "discriminator": "- **Wilson's**: young, low caeruloplasmin, KF rings, neuropsychiatric features, Coombs-negative haemolysis\n- vs autoimmune hepatitis / viral / MASLD in young\n- **Caeruloplasmin** is also an acute-phase reactant — can be falsely normal; **urinary copper** helps confirm",
   "redFlags": "- **Fulminant Wilson** (acute liver failure + haemolysis + AKI) = rapidly fatal → urgent transplant referral\n- **Neuropsychiatric deterioration**",
   "mcqTrap": "- Most tempting wrong answer: in a young patient with acute liver failure + haemolysis, missing Wilson because the ALP is **'normal/low'**\n  - That **low ALP (and low ALP:bilirubin ratio)** is actually a Wilson clue, not reassurance",
   "viva": "- Examiner: 'Young patient, acute liver failure, anaemia — what one diagnosis must you exclude and how?'\n- Answer: **Wilson's disease** — caeruloplasmin, urinary copper, KF rings\n- Flag **transplant** if fulminant",
   "mnemonic": "Wilson = 'Copper in the Liver, Brain (basal ganglia) and Eye (KF rings)'; fulminant clue = 'low ALP + Coombs-neg haemolysis in the young'.",
   "source": "GESA; EASL Wilson disease guidance; Therapeutic Guidelines (eTG, current)",
   "tags": [
    "Wilson disease",
    "caeruloplasmin",
    "Kayser-Fleischer",
    "copper",
    "young liver disease",
    "fulminant"
   ],
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Clue</th><th>Wilson finding</th></tr></thead><tbody><tr><td>Age</td><td>Young (&lt;40-45) liver disease</td></tr><tr><td>Caeruloplasmin</td><td>Low (acute-phase: can be falsely normal)</td></tr><tr><td>24h urinary copper</td><td>High</td></tr><tr><td>Eye (slit lamp)</td><td>Kayser-Fleischer rings</td></tr><tr><td>Fulminant clue</td><td>Coombs-neg haemolysis + low ALP:bilirubin ratio</td></tr></tbody></table>",
   "cutoffs": [
    "Suspect in liver disease **age <40–45**",
    "**Low serum caeruloplasmin**",
    "**High 24h urinary copper**",
    "**Kayser-Fleischer rings** on slit lamp",
    "Fulminant clue: **Coombs-negative haemolysis + low ALP:bilirubin ratio**"
   ],
   "title": "Wilson disease",
   "subtitle": "low caeruloplasmin, the young-patient liver+neuro+eye clue, and the ALP trap",
   "id": "gastroenterology-38",
   "images": [
    {
     "src": "assets/img/ophthalmology_photo_kayser_fleischer_ring_fresh.jpg",
     "caption": "Kayser-Fleischer ring — copper deposition at corneal limbus",
     "alt": "Golden-brown ring of copper pigment at the peripheral corneal margin (Descemet membrane) — pathognomonic of Wilson disease when present with neurological or hepatic features",
     "credit": "Herbert L. Fred, MD, Hendrik A. van Dijk, Wikimedia Commons, CC BY 3.0"
    },
    {
     "src": "assets/img/gastrointestinal_photo_scleral_icterus_fresh.jpg",
     "caption": "Scleral icterus — jaundice in fulminant Wilson disease",
     "alt": "Deep jaundice as part of the acute liver failure presentation of fulminant Wilson disease — the dramatic presentation where ALP is paradoxically LOW",
     "credit": "Bobjgalindo, Wikimedia Commons, CC BY-SA 4.0"
    }
   ]
  }
 ]
}
);
