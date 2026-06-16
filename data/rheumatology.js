window.GOTCHA = window.GOTCHA || { modules: [] };
window.GOTCHA.modules.push(
{
 "id": "rheumatology",
 "name": "Rheumatology & MSK",
 "category": "Medicine",
 "blurb": "Written-exam + VIVA. The hot joint, crystal arthritis, inflammatory disease and the red-flag back.",
 "cards": [
  {
   "topic": "ANCA-associated vasculitis — rituximab OR cyclophosphamide induction; plasma exchange niche",
   "subarea": "Inflammatory & connective-tissue disease",
   "trap": "For organ/life-threatening GPA or MPA, induce remission with high-dose glucocorticoids PLUS either RITUXIMAB or CYCLOPHOSPHAMIDE — KDIGO 2024 treats these as EQUIVALENT first-line options (not one mandated over the other). Rituximab is FAVOURED for relapsing disease, in younger patients/fertility concerns, and to avoid cyclophosphamide toxicity. The serology gotcha: GPA = c-ANCA/anti-PR3; MPA & eGPA = p-ANCA/anti-MPO (but ANCA can be negative — don't exclude on a negative ANCA). Plasma exchange is NOT routine — reserved for severe rapidly progressive GN (e.g. high creatinine/dialysis-requiring) or diffuse alveolar haemorrhage.",
   "whatFirst": "RPGN + haemoptysis + sinusitis/saddle nose + raised inflammatory markers → urgent ANCA, anti-GBM, urine sediment, renal biopsy; start pulse steroids and arrange induction immunosuppression; treat as a pulmonary-renal emergency.",
   "discriminator": "GPA (PR3/c-ANCA, granulomatous URT/lung + kidney, saddle nose) vs MPA (MPO/p-ANCA, no granulomas, renal+pulmonary) vs eGPA (asthma + eosinophilia + MPO). Distinguish from anti-GBM (Goodpasture) — anti-GBM antibody, linear IF; pauci-immune in AAV.",
   "redFlags": "Diffuse alveolar haemorrhage (haemoptysis + falling Hb + diffuse infiltrates), rapidly rising creatinine/RPGN, mononeuritis multiplex — escalate for plasma exchange consideration and ICU.",
   "mcqTrap": "Tempting wrong answer: 'cyclophosphamide is the single first-choice induction agent for all new AAV' OR 'rituximab is now mandated over cyclophosphamide'. Both overstate it — KDIGO 2024 lists them as equivalent options, with rituximab favoured for relapse, fertility and toxicity concerns.",
   "viva": "ISBAR: 'I have a pulmonary-renal syndrome — haemoptysis, AKI with active sediment, p-ANCA positive; I've started pulse methylprednisolone, sent anti-GBM, and am referring to nephrology/rheumatology for rituximab- or cyclophosphamide-based induction, considering plasma exchange given the alveolar haemorrhage.'",
   "mnemonic": "'PR3 = c (GPA); MPO = p (MPA/eGPA)'. Induction = rituximab OR cyclophosphamide.",
   "source": "eTG Rheumatology (current); KDIGO 2024 Clinical Practice Guideline for ANCA-Associated Vasculitis; ACR/Vasculitis Foundation 2021",
   "verified": true,
   "tags": [
    "ANCA vasculitis",
    "GPA",
    "MPA",
    "rituximab",
    "cyclophosphamide",
    "MEDI8403",
    "MEDI8401"
   ],
   "cutoffs": [
    "Induction: glucocorticoid + rituximab OR cyclophosphamide (equivalent)",
    "Rituximab favoured: relapsing disease, fertility, toxicity concerns",
    "PR3/c-ANCA = GPA; MPO/p-ANCA = MPA/eGPA",
    "Plasma exchange: severe RPGN or diffuse alveolar haemorrhage only"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th></th><th>GPA</th><th>MPA</th><th>eGPA</th></tr><tr><td>ANCA</td><td>c-ANCA / PR3</td><td>p-ANCA / MPO</td><td>p-ANCA / MPO (~40%)</td></tr><tr><td>Hallmark</td><td>Granulomas, saddle nose, URT</td><td>RPGN, alveolar haemorrhage</td><td>Asthma, eosinophilia</td></tr><tr><td>Induction</td><td colspan=\"3\">High-dose steroid + rituximab OR cyclophosphamide (equivalent)</td></tr></table>",
   "title": "ANCA-associated vasculitis",
   "subtitle": "rituximab OR cyclophosphamide induction; plasma exchange niche",
   "id": "rheumatology-1"
  },
  {
   "topic": "Antiphospholipid syndrome — warfarin not DOAC; INR target; obstetric aspirin+heparin",
   "subarea": "Inflammatory & connective-tissue disease",
   "trap": "After a thrombotic event in APS, lifelong WARFARIN (target INR 2.0-3.0 for venous; higher intensity or warfarin + aspirin for arterial/recurrent) — DOACs are AVOIDED, especially in TRIPLE-POSITIVE (lupus anticoagulant + anticardiolipin + anti-β2-glycoprotein-I) and arterial disease (DOACs had higher arterial event rates in trials). Diagnosis requires a POSITIVE TEST on TWO occasions ≥12 WEEKS apart (transient positives don't count). Obstetric APS = LOW-DOSE ASPIRIN + prophylactic LMWH heparin (NOT warfarin, which is teratogenic). Lupus anticoagulant paradoxically PROLONGS the aPTT in vitro but causes THROMBOSIS in vivo.",
   "whatFirst": "Unprovoked VTE/arterial event or recurrent miscarriage + prolonged aPTT not correcting on mixing → test antiphospholipid antibodies (and repeat at ≥12 weeks); anticoagulate with warfarin, not a DOAC.",
   "discriminator": "APS vs other thrombophilias: APS can affect arteries AND veins and causes pregnancy morbidity; lupus anticoagulant prolongs aPTT (doesn't correct on 1:1 mix). Catastrophic APS (CAPS) = multi-organ thrombosis over days — needs anticoagulation + steroids + plasma exchange/IVIG.",
   "redFlags": "Multi-site thrombosis with organ failure (CAPS), arterial events on a DOAC, thrombocytopenia, livedo; pregnancy loss in known APS.",
   "mcqTrap": "Tempting wrong answer: 'switch to apixaban/rivaroxaban for convenience'. Wrong — in APS (particularly triple-positive/arterial) DOACs are inferior to warfarin with higher thrombotic recurrence; stay on warfarin. Obstetric trap: using warfarin in pregnancy instead of aspirin + LMWH.",
   "viva": "Out loud: 'In antiphospholipid syndrome I anticoagulate with warfarin to an INR of 2 to 3 rather than a DOAC, confirm the antibodies are persistent on a repeat at twelve weeks, and in pregnancy I'd use low-dose aspirin plus heparin instead.'",
   "mnemonic": "APS = 'No DOAC, two times twelve' (avoid DOACs; confirm antibodies ≥12 weeks apart). Pregnancy = Aspirin + Heparin.",
   "source": "eTG (current); Australian Prescriber; EULAR 2019 APS recommendations; ISTH guidance; TRAPS rivaroxaban-vs-warfarin trial",
   "verified": true,
   "tags": [
    "antiphospholipid syndrome",
    "warfarin",
    "DOAC",
    "lupus anticoagulant",
    "pregnancy",
    "MEDI8403",
    "MEDI8401"
   ],
   "cutoffs": [
    "Warfarin target INR 2.0-3.0 (venous); higher/+aspirin for arterial",
    "DOACs avoided (esp. triple-positive/arterial)",
    "Antibody positive on TWO occasions ≥12 weeks apart",
    "Obstetric APS: low-dose aspirin + prophylactic LMWH"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Scenario</th><th>Anticoagulation</th></tr><tr><td>Venous thrombosis</td><td>Warfarin, INR 2.0-3.0</td></tr><tr><td>Arterial / recurrent</td><td>Higher-intensity warfarin (± aspirin)</td></tr><tr><td>Triple-positive</td><td>Warfarin — AVOID DOAC</td></tr><tr><td>Pregnancy</td><td>Low-dose aspirin + LMWH (NOT warfarin)</td></tr></table>",
   "title": "Antiphospholipid syndrome",
   "subtitle": "warfarin not DOAC; INR target; obstetric aspirin+heparin",
   "id": "rheumatology-2"
  },
  {
   "topic": "Giant cell arteritis — treat BEFORE biopsy; steroid dose by visual status; biopsy timing",
   "subarea": "Inflammatory & connective-tissue disease",
   "trap": "GCA is a SIGHT-THREATENING emergency: START high-dose glucocorticoid IMMEDIATELY on clinical suspicion — do NOT wait for the temporal artery biopsy or ESR result. Dose by visual status: NO visual symptoms → prednis(ol)one ~40-60 mg/day oral; VISUAL loss/amaurosis/diplopia → IV methylprednisolone 500-1000 mg daily for 3 days then oral. Temporal artery biopsy should still be done, ideally within ~1-2 WEEKS of starting steroid (yield is highest in the first week but persists). Add low-dose aspirin and bone/GI protection; consider tocilizumab (IL-6) as a steroid-sparing agent.",
   "whatFirst": "New headache/jaw claudication/scalp tenderness/visual symptoms in age >50 with high ESR/CRP → give high-dose steroid NOW, then arrange biopsy and ophthalmology — protecting the SECOND eye is the priority.",
   "discriminator": "GCA vs tension/migraine: GCA has jaw claudication (most specific), scalp tenderness, polymyalgic symptoms, raised ESR/CRP, age >50. Visual loss in GCA = anterior ischaemic optic neuropathy (pale swollen disc) — distinguish from central retinal artery occlusion.",
   "redFlags": "Any visual symptom (amaurosis fugax, diplopia) = immediate IV pulse steroid; jaw claudication; new severe headache >50 yrs with raised inflammatory markers.",
   "mcqTrap": "Tempting wrong answer: 'arrange urgent temporal artery biopsy before starting steroids to avoid masking the diagnosis'. Wrong — never delay steroids; biopsy remains informative for ~1-2 weeks and blindness is irreversible. Also wrong: low-dose oral steroid for GCA with visual loss.",
   "viva": "ISBAR escalation: 'I have a 72-year-old with new temporal headache, jaw claudication and transient visual loss, ESR 90 — I'm treating presumed GCA with IV methylprednisolone now, have referred to ophthalmology, and will arrange a temporal artery biopsy within a week or two.'",
   "mnemonic": "GCA = 'See first, biopsy later' — steroids first to save sight.",
   "source": "eTG Rheumatology (current); Medicine Today GCA review (2025); BSR/EULAR GCA guidance",
   "verified": true,
   "tags": [
    "giant cell arteritis",
    "vasculitis",
    "steroids",
    "emergency",
    "MEDI8403",
    "MEDI8401"
   ],
   "cutoffs": [
    "Age >50",
    "Prednis(ol)one 40-60 mg/day if no visual loss",
    "IV methylprednisolone 500-1000 mg/day x3 if visual loss",
    "Biopsy ideally within ~1-2 weeks (highest yield in first week)"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Suspect GCA (age &gt;50, headache, jaw claudication, ↑ESR/CRP)</div><div class=\"gv-step\">No visual loss → prednisolone <span class=\"gv-num\">40-60 mg/day</span> NOW</div><div class=\"gv-step\">Visual loss/diplopia → IV methylpred <span class=\"gv-num\">500-1000 mg/day x3</span></div><div class=\"gv-step\">Biopsy ideally within <span class=\"gv-num\">1-2 weeks</span>; aspirin + bone/GI protection; consider tocilizumab</div></div>",
   "title": "Giant cell arteritis",
   "subtitle": "treat BEFORE biopsy; steroid dose by visual status; biopsy timing",
   "id": "rheumatology-3"
  },
  {
   "topic": "Idiopathic inflammatory myopathy — high CK, the anti-Jo1/ILD link & malignancy screen",
   "subarea": "Inflammatory & connective-tissue disease",
   "trap": "Polymyositis/dermatomyositis = PROXIMAL symmetrical WEAKNESS (not pain) with markedly RAISED CK; confirm with EMG + muscle (or skin) biopsy ± MRI; treat with high-dose corticosteroids + an early steroid-sparing immunosuppressant. Exam gotchas: (1) ANTI-SYNTHETASE (anti-Jo-1) antibodies = high risk of interstitial lung disease + mechanic's hands + arthritis — get baseline PFTs/HRCT and don't miss respiratory failure; (2) DERMATOMYOSITIS (Gottron papules, heliotrope rash) carries a strong association with OCCULT MALIGNANCY in adults → do an age/sex-appropriate cancer screen (esp. ovarian, lung, GI, nasopharyngeal); (3) anti-MDA5 dermatomyositis → rapidly progressive ILD with often near-normal CK.",
   "whatFirst": "New proximal weakness + high CK → confirm myositis (EMG/biopsy/MRI), screen lungs (PFT/HRCT) and, if dermatomyositis, perform an occult-malignancy screen.",
   "discriminator": "Inflammatory myopathy (high CK, proximal weakness) vs PMR (normal CK, stiffness not weakness) vs statin myopathy (drug history; can be immune-mediated necrotising with anti-HMGCR). Inclusion body myositis = older men, distal + finger flexor/quadriceps weakness, poor steroid response.",
   "redFlags": "Dysphagia/aspiration, respiratory muscle weakness, rapidly progressive ILD (anti-MDA5/Jo-1), new malignancy symptoms; rising troponin (cardiac involvement).",
   "mcqTrap": "Tempting wrong answer: 'the proximal weakness and raised inflammatory markers are polymyalgia rheumatica'. Wrong — PMR has a NORMAL CK and causes stiffness, not true weakness; a high CK with weakness is myositis, and dermatomyositis mandates a malignancy hunt.",
   "viva": "Discriminator probed: 'Patient with proximal weakness — what's your one key blood test and why does the rash matter?' — CK (high in myositis, normal in PMR); the dermatomyositis rash flags occult malignancy and anti-Jo-1 flags ILD.",
   "mnemonic": "DM = 'Detect Malignancy'; anti-Jo-1 = 'Just lungs' (ILD); anti-MDA5 = rapidly progressive ILD.",
   "source": "eTG Rheumatology (current); Australian Prescriber; international myositis guidance",
   "verified": true,
   "tags": [
    "myositis",
    "dermatomyositis",
    "polymyositis",
    "anti-Jo1",
    "malignancy",
    "ILD",
    "MEDI8403",
    "MEDI8401"
   ],
   "cutoffs": [
    "CK markedly elevated (proximal weakness)",
    "Anti-Jo-1/antisynthetase → ILD + mechanic's hands",
    "Dermatomyositis → occult malignancy screen",
    "Anti-MDA5 → rapidly progressive ILD (CK may be near-normal)"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Proximal symmetrical WEAKNESS + ↑↑CK</div><div class=\"gv-step\">EMG + muscle/skin biopsy ± MRI</div><div class=\"gv-step\">Antibodies: anti-Jo-1 (ILD), anti-MDA5 (rapid ILD)</div><div class=\"gv-step\">Dermatomyositis → age-appropriate malignancy screen</div><div class=\"gv-step\">High-dose steroid + early steroid-sparing agent</div></div>",
   "title": "Idiopathic inflammatory myopathy",
   "subtitle": "high CK, the anti-Jo1/ILD link & malignancy screen",
   "id": "rheumatology-4",
   "images": [
    {
     "src": "assets/img/dermatology_derm_gottron_papules_01.jpg",
     "caption": "Dermatomyositis — Gottron papules over MCP and IP joints",
     "alt": "Violaceous scaly plaques over the knuckles (Gottron papules) — pathognomonic of dermatomyositis",
     "credit": "Mohammad2018, Wikimedia Commons, CC BY-SA 4.0"
    }
   ]
  },
  {
   "topic": "Lupus nephritis & SLE drugs in pregnancy — mycophenolate vs azathioprine switch",
   "subarea": "Inflammatory & connective-tissue disease",
   "trap": "Proliferative lupus nephritis (ISN/RPS class III/IV) needs INDUCTION with high-dose glucocorticoids PLUS either mycophenolate or IV cyclophosphamide, then MAINTENANCE with mycophenolate (superior to azathioprine when tolerated). The pregnancy gotcha: MYCOPHENOLATE, METHOTREXATE and CYCLOPHOSPHAMIDE are CONTRAINDICATED in pregnancy — switch to AZATHIOPRINE (compatible) and defer conception ~3-6 months. Anti-Ro/SSA-positive mothers risk congenital heart block + neonatal lupus — needs fetal cardiac monitoring.",
   "whatFirst": "SLE woman planning pregnancy → review every drug, switch mycophenolate→azathioprine pre-conception, continue hydroxychloroquine, check anti-Ro/La and antiphospholipid antibodies.",
   "discriminator": "Maintenance agent choice: mycophenolate > azathioprine outside pregnancy; azathioprine is the pregnancy-compatible swap. Cyclophosphamide reserved for severe/rapidly progressive or refractory disease (counsel re infertility/gonadotoxicity).",
   "redFlags": "Rising creatinine, nephrotic-range proteinuria, active sediment, anti-Ro positive with fetal bradycardia (congenital heart block), antiphospholipid antibodies (pregnancy loss/thrombosis).",
   "mcqTrap": "Tempting wrong answer: 'continue mycophenolate through pregnancy as it controls her nephritis'. Wrong — mycophenolate is teratogenic (facial/ear/limb malformations, miscarriage); switch to azathioprine before conception.",
   "viva": "Consent line: 'Before you try for a baby we need to swap one of your kidney medications, because mycophenolate can harm the baby — we'll change it to azathioprine, keep your hydroxychloroquine, and check antibodies that can affect the baby's heart.'",
   "mnemonic": "Pregnancy swap = 'Mum's AZA' — switch Mycophenolate → AZAthioprine.",
   "source": "Australian Prescriber SLE & 'Immunomodulatory drugs in pregnancy and lactation'; eTG Rheumatology (current)",
   "verified": true,
   "tags": [
    "SLE",
    "lupus nephritis",
    "mycophenolate",
    "azathioprine",
    "pregnancy",
    "MEDI8403",
    "MEDI8401"
   ],
   "cutoffs": [
    "Maintenance: mycophenolate > azathioprine (non-pregnant)",
    "Pregnancy: switch to azathioprine, defer conception ~3-6 months",
    "Anti-Ro/SSA → congenital heart block risk"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Proliferative lupus nephritis (class III/IV)</div><div class=\"gv-step\">Induction: high-dose steroid + mycophenolate OR IV cyclophosphamide</div><div class=\"gv-step\">Maintenance: mycophenolate (or azathioprine)</div><div class=\"gv-step\">Planning pregnancy → switch to azathioprine; continue hydroxychloroquine</div></div>",
   "title": "Lupus nephritis & SLE drugs in pregnancy",
   "subtitle": "mycophenolate vs azathioprine switch",
   "id": "rheumatology-5"
  },
  {
   "topic": "Methotrexate — monitoring, folate, pneumonitis & the alcohol/co-trimoxazole trap",
   "subarea": "Inflammatory & connective-tissue disease",
   "trap": "MTX is WEEKLY oral (not daily — accidental daily dosing = fatal pancytopenia/mucositis, a classic exam catastrophe). Co-prescribe FOLIC ACID (at least 5 mg weekly per ARA) on a DIFFERENT day to the MTX. Monitoring: FBC, LFTs, U&E/creatinine at baseline, then ~every 2-4 weeks until stable, then every ~3 months. Baseline CXR ± pulmonary function before starting (pneumonitis risk). AVOID trimethoprim/co-trimoxazole (additive antifolate → marrow suppression) and high alcohol intake.",
   "whatFirst": "New dyspnoea/dry cough/fever on MTX = STOP MTX, exclude MTX pneumonitis (and infection) — do not attribute to a chest infection and continue.",
   "discriminator": "MTX pneumonitis vs RA-ILD vs infection: pneumonitis is subacute, often with fever, improves on cessation; RA-ILD is chronic UIP/NSIP pattern. Pancytopenia + mucositis after a dosing error or renal impairment = MTX toxicity → high-dose folinic acid (leucovorin) rescue, NOT just folic acid.",
   "redFlags": "Rising transaminases >3x ULN, new pancytopenia, breathlessness, oral ulceration; renal impairment (MTX is renally cleared — dose-reduce/withhold).",
   "mcqTrap": "Tempting wrong answer: 'give folinic acid routinely with every weekly dose' or 'prescribe co-trimoxazole for the UTI'. Routine adjunct is FOLIC acid (folinic/leucovorin is the rescue for toxicity); co-trimoxazole is the danger drug. Another trap: continuing MTX through acute infection/sepsis (should withhold).",
   "viva": "Consent line: 'It's a weekly tablet, not daily — taking it daily can be dangerous; you'll take folic acid on a separate day, have regular blood tests, avoid much alcohol, and it must be stopped well before pregnancy.'",
   "mnemonic": "MTX dangers = 'M-T-X': Marrow suppression, Teratogen, lung toXicity (pneumonitis). Weekly + folate + avoid trimethoprim.",
   "source": "Australian Rheumatology Association methotrexate patient/prescriber information (rev. April 2017); Australian Prescriber RA drug treatment; eTG (current)",
   "verified": true,
   "tags": [
    "methotrexate",
    "monitoring",
    "pneumonitis",
    "folate",
    "MEDI8403",
    "MEDI8401"
   ],
   "cutoffs": [
    "MTX dosing: WEEKLY (never daily)",
    "Folic acid ≥5 mg weekly, different day",
    "Bloods 2-4 weekly until stable, then ~3-monthly",
    "Transaminases >3x ULN = action"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Pitfall</th><th>Correct action</th></tr><tr><td>Daily dosing</td><td>WEEKLY only</td></tr><tr><td>Routine adjunct</td><td>Folic acid ≥5 mg/wk (different day)</td></tr><tr><td>Toxic overdose/pancytopenia</td><td>Folinic acid (leucovorin) rescue</td></tr><tr><td>Antibiotic for UTI</td><td>Avoid trimethoprim/co-trimoxazole</td></tr><tr><td>New dyspnoea/cough</td><td>Stop, exclude pneumonitis</td></tr></table>",
   "title": "Methotrexate",
   "subtitle": "monitoring, folate, pneumonitis & the alcohol/co-trimoxazole trap",
   "id": "rheumatology-6"
  },
  {
   "topic": "Methotrexate & leflunomide — teratogenicity and pre-conception washout",
   "subarea": "Inflammatory & connective-tissue disease",
   "trap": "MTX is a TERATOGEN and ABORTIFACIENT — stop with effective contraception, deferring conception at least 3 months (some sources quote 3-6 months) after stopping in women planning pregnancy. LEFLUNOMIDE is the bigger trap: very long half-life (active metabolite persists up to ~2 years) → if pregnancy planned/occurs, give CHOLESTYRAMINE washout and confirm undetectable plasma levels — cessation alone is NOT enough. The pregnancy-COMPATIBLE DMARDs to switch to are HYDROXYCHLOROQUINE, SULFASALAZINE (+ folate) and AZATHIOPRINE.",
   "whatFirst": "Woman of childbearing age started on MTX/leflunomide = document contraception counselling and the washout interval BEFORE first script; if she wants to conceive, switch to a pregnancy-compatible agent first.",
   "discriminator": "Teratogen DMARDs (stop pre-pregnancy): methotrexate, leflunomide, mycophenolate, cyclophosphamide. Compatible/continue: hydroxychloroquine, sulfasalazine, azathioprine, and (where needed) low-dose prednisolone and TNF inhibitors per specialist advice.",
   "redFlags": "Unplanned pregnancy on MTX/leflunomide/mycophenolate = urgent specialist + obstetric referral and (for leflunomide) immediate cholestyramine washout.",
   "mcqTrap": "Tempting wrong answer: 'leflunomide is safe to simply stop 1 month before conception'. Wrong — its active metabolite persists up to ~2 years; an active cholestyramine washout with level confirmation is required, not just cessation.",
   "viva": "Consent/counsel line: 'This medication can seriously harm a pregnancy, so you need reliable contraception, and if you want to have a baby we'll need to stop it and wait — for leflunomide we actively wash it out of your system first because it lingers for up to two years.'",
   "mnemonic": "Stop-for-pregnancy = 'My Little Cyclo Mycophenolate' (Methotrexate, Leflunomide, Cyclophosphamide, Mycophenolate). Safe = 'HAS' (Hydroxychloroquine, Azathioprine, Sulfasalazine).",
   "source": "Australian Rheumatology Association methotrexate/leflunomide information; Australian Prescriber 'Immunomodulatory drugs in pregnancy and lactation'; eTG (current)",
   "verified": true,
   "tags": [
    "methotrexate",
    "leflunomide",
    "teratogenicity",
    "pregnancy",
    "MEDI8403",
    "MEDI8401"
   ],
   "cutoffs": [
    "MTX: stop ≥3 months pre-conception",
    "Leflunomide: cholestyramine washout, t½ active metabolite up to ~2 years",
    "Compatible in pregnancy: HCQ, sulfasalazine, azathioprine"
   ],
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">STOP: methotrexate</span><span class=\"gv-pill\">STOP+washout: leflunomide</span><span class=\"gv-pill\">STOP: mycophenolate</span><span class=\"gv-pill\">STOP: cyclophosphamide</span><span class=\"gv-pill\">SAFE: hydroxychloroquine</span><span class=\"gv-pill\">SAFE: sulfasalazine</span><span class=\"gv-pill\">SAFE: azathioprine</span></div>",
   "title": "Methotrexate & leflunomide",
   "subtitle": "teratogenicity and pre-conception washout",
   "id": "rheumatology-7"
  },
  {
   "topic": "Polymyalgia rheumatica — 15 mg start, dramatic response as a diagnostic test, slow taper",
   "subarea": "Inflammatory & connective-tissue disease",
   "trap": "PMR starting prednis(ol)one is LOW dose (~15 mg/day; a few need up to 25 mg) — NOT the 40-60 mg of GCA. A DRAMATIC response within days is part of the diagnosis; if there's NO clear response, doubt PMR and look for a mimic. Taper is SLOW (BSR-style: 15 mg for 3 wks → 12.5 mg → 10 mg, then reduce by 1 mg every 4-8 weeks; most need steroids for ~2 years) — relapse is common. ALWAYS screen for coexisting GCA symptoms at every visit (overlap). CK is NORMAL in PMR — it's pain/stiffness, not weakness.",
   "whatFirst": "Age >50 with new bilateral shoulder/hip girdle pain + stiffness + raised ESR/CRP → trial prednisolone ~15 mg and review response within days to a week; screen for GCA red flags first.",
   "discriminator": "PMR (normal CK, no true weakness, pain/stiffness) vs polymyositis (high CK, proximal WEAKNESS). PMR vs RA (RA has small-joint synovitis, RF/anti-CCP, erosions). Poor steroid response or weight loss/atypical features → reconsider malignancy, late-onset RA, or inflammatory myopathy.",
   "redFlags": "Any GCA feature (headache, jaw claudication, visual symptoms) = escalate to GCA-dose steroids immediately; lack of steroid response; high CK (myositis).",
   "mcqTrap": "Tempting wrong answer: 'start prednisolone 50 mg/day'. That's the GCA dose, not PMR — PMR responds to ~15 mg, and high doses cause unnecessary steroid harm. Another trap: expecting an elevated CK (it's normal in PMR).",
   "viva": "Discriminator probed: 'How do you separate PMR from polymyositis?' — PMR = stiffness/pain with NORMAL CK and no true weakness; polymyositis = proximal WEAKNESS with HIGH CK.",
   "mnemonic": "PMR = 'fifteen for the girdle' (15 mg); GCA = 'sixty for the sight' (60 mg).",
   "source": "Australian Prescriber 'Prescribing for polymyalgia rheumatica'; eTG Rheumatology (current)",
   "verified": true,
   "tags": [
    "polymyalgia rheumatica",
    "steroids",
    "GCA overlap",
    "CK",
    "MEDI8403",
    "MEDI8401"
   ],
   "cutoffs": [
    "Prednisolone start ~15 mg/day (up to 25 mg)",
    "Rapid response within days (supports diagnosis)",
    "CK NORMAL in PMR",
    "Slow taper: 15→12.5→10 mg, then 1 mg every 4-8 wk; ~2 years"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th></th><th>PMR</th><th>GCA</th><th>Polymyositis</th></tr><tr><td>Steroid start</td><td>~15 mg</td><td>40-60 mg (IV if visual)</td><td>High-dose +/- IS</td></tr><tr><td>CK</td><td>Normal</td><td>Normal</td><td>High</td></tr><tr><td>Weakness</td><td>No (stiffness)</td><td>No</td><td>Yes (proximal)</td></tr></table>",
   "title": "Polymyalgia rheumatica",
   "subtitle": "15 mg start, dramatic response as a diagnostic test, slow taper",
   "id": "rheumatology-8"
  },
  {
   "topic": "Rheumatoid arthritis — early DMARD: methotrexate first-line, treat-to-target",
   "subarea": "Inflammatory & connective-tissue disease",
   "trap": "The gotcha is timing and sequence, not the drug name. Start a conventional synthetic DMARD (METHOTREXATE first-line) EARLY at diagnosis of persistent synovitis (the 'window of opportunity', commonly cited as within ~3 months of onset) — do NOT wait for erosions, do NOT trial NSAIDs/analgesia alone, and do NOT 'refer and review in 6 months'. Target is remission (or low disease activity) reviewed every 1-3 months while active, escalating if target not met. Glucocorticoid is only a short bridge while the DMARD takes effect (MTX takes ~6-12 weeks), NOT monotherapy.",
   "whatFirst": "Suspected inflammatory polyarthritis (>6 weeks, MCP/PIP/wrist, EMS >30-60 min) = URGENT rheumatology referral; start the DMARD early rather than escalating symptomatic treatment.",
   "discriminator": "RA mimic = viral polyarthritis (parvovirus B19, hepatitis, rubella) — self-limiting, recent contact/rash, check serology before committing to lifelong DMARD. Also distinguish from psoriatic/seronegative disease (DIP involvement, dactylitis, nail changes, RF/anti-CCP negative).",
   "redFlags": "Cervical spine involvement (atlanto-axial subluxation) — flag before any intubation/GA; Felty syndrome (RA + splenomegaly + neutropenia); new ILD/breathlessness on MTX (pneumonitis).",
   "mcqTrap": "Tempting wrong answer: 'commence NSAID and review in 3 months' or 'await radiographic erosions before starting a DMARD'. Wrong because erosive damage in the first 1-2 years is irreversible — early DMARD changes long-term outcome.",
   "viva": "Out loud: 'This is persistent symmetrical small-joint synovitis — I'm worried about early RA, so I'd refer urgently and aim to start a disease-modifying agent, usually methotrexate, within weeks, treating to a target of remission rather than just controlling pain.'",
   "mnemonic": "Treat-to-target = 'TIGHT control': review every 1-3 months, escalate until remission.",
   "source": "Australian Prescriber 'Managing the drug treatment of rheumatoid arthritis'; Australian Rheumatology Association; eTG Rheumatology (current)",
   "verified": true,
   "tags": [
    "rheumatoid arthritis",
    "DMARD",
    "treat-to-target",
    "MEDI8403",
    "MEDI8401"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Persistent synovitis &gt;6 wk + ↑EMS</div><div class=\"gv-step\">URGENT rheum referral; serology (RF, anti-CCP), exclude viral</div><div class=\"gv-step\">Start csDMARD (methotrexate) <span class=\"gv-num\">early (~within 3 months)</span></div><div class=\"gv-step\">Short prednisolone bridge while MTX works (~6-12 wk)</div><div class=\"gv-step\">Treat-to-target: review every <span class=\"gv-num\">1-3 months</span>, escalate to target</div></div>",
   "title": "Rheumatoid arthritis",
   "subtitle": "early DMARD: methotrexate first-line, treat-to-target",
   "id": "rheumatology-9",
   "images": [
    {
     "src": "assets/img/msk_derm_rheumatoid_hands_01.jpg",
     "caption": "Rheumatoid arthritis — hands showing MCP/PIP swelling and ulnar deviation",
     "alt": "Symmetric MCP and PIP joint swelling with ulnar deviation, swan-neck and boutonniere deformities in established RA",
     "credit": "Prashanthns, Wikimedia Commons, CC BY-SA 3.0"
    }
   ]
  },
  {
   "topic": "Sjögren syndrome — anti-Ro/La, the pregnancy heart-block link, and the lymphoma red flag",
   "subarea": "Inflammatory & connective-tissue disease",
   "trap": "Sjögren's gotchas live in serology and complications, not the dry eyes/mouth. Antibodies = anti-Ro (SSA) ± anti-La (SSB); confirm sicca objectively (Schirmer test, salivary flow, lip/minor salivary gland biopsy showing focal lymphocytic sialadenitis). Two exam-critical associations: (1) anti-Ro/La in PREGNANCY → fetal congenital heart block + neonatal lupus (continue hydroxychloroquine, fetal echo monitoring); (2) a NEW persistent unilateral parotid/lymph node swelling → suspect MALT/non-Hodgkin LYMPHOMA (markedly increased risk). Watch for type 1 (distal) renal tubular acidosis and associated other CTDs (secondary Sjögren's).",
   "whatFirst": "Persistent unilateral parotid swelling in known Sjögren's → image and biopsy to exclude lymphoma — do not assume benign sialadenitis.",
   "discriminator": "Primary vs secondary Sjögren's (secondary accompanies RA, SLE, scleroderma). Sicca mimics: anticholinergic drugs, IgG4 disease, sarcoidosis, HIV/HCV. RTA-type 1 (non-anion-gap metabolic acidosis + hypokalaemia + alkaline urine) is a Sjögren clue.",
   "redFlags": "New/persistent unilateral parotid or nodal swelling, low C4, cryoglobulins, persistent monoclonal band (lymphoma predictors); fetal bradycardia in an anti-Ro mother.",
   "mcqTrap": "Tempting wrong answer: 'reassure and treat the parotid swelling as recurrent sialadenitis'. Wrong — Sjögren's carries a substantially raised lymphoma risk; new persistent glandular swelling needs exclusion of lymphoma.",
   "viva": "Discriminator probed: 'Why does the antibody matter in a pregnant woman?' — anti-Ro/La cross the placenta and can cause congenital complete heart block and neonatal lupus, needing fetal cardiac monitoring.",
   "mnemonic": "Sjögren's 'RoLa': Ro/La antibodies → Risk of fetal heart block + Lymphoma later.",
   "source": "eTG Rheumatology (current); Australian Prescriber; EULAR Sjögren recommendations",
   "verified": true,
   "tags": [
    "Sjogren",
    "anti-Ro",
    "anti-La",
    "lymphoma",
    "neonatal lupus",
    "MEDI8403",
    "MEDI8401"
   ],
   "cutoffs": [
    "Antibodies: anti-Ro (SSA) ± anti-La (SSB)",
    "Anti-Ro in pregnancy → congenital heart block risk",
    "New unilateral parotid swelling → exclude MALT lymphoma",
    "Associated: type 1 (distal) RTA"
   ],
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">Anti-Ro/La</span><span class=\"gv-pill\">Schirmer + lip biopsy</span><span class=\"gv-pill\">Pregnancy: fetal heart block</span><span class=\"gv-pill\">Red flag: parotid swelling = lymphoma</span><span class=\"gv-pill\">Type 1 RTA</span></div>",
   "title": "Sjögren syndrome",
   "subtitle": "anti-Ro/La, the pregnancy heart-block link, and the lymphoma red flag",
   "id": "rheumatology-10"
  },
  {
   "topic": "SLE — hydroxychloroquine for all, dose cap, retinal screening & flare vs infection",
   "subarea": "Inflammatory & connective-tissue disease",
   "trap": "HYDROXYCHLOROQUINE is the backbone for essentially ALL SLE patients (reduces flares, organ damage, thrombosis, mortality) and is CONTINUED in pregnancy. The dosing gotcha: cap at ≤5 mg/kg ACTUAL body weight/day to minimise retinopathy; baseline ophthalmology exam, then annual screening (OCT ± visual fields) usually from ~5 years (earlier if risk factors). Distinguishing a lupus FLARE from INFECTION: in flare, complement (C3/C4) is LOW and anti-dsDNA RISES with a normal/low CRP; a HIGH CRP points to infection (CRP tends to stay low in pure lupus flares — except serositis).",
   "whatFirst": "Unwell SLE patient on immunosuppression → treat as possible infection AND flare simultaneously: cultures + CRP + complement + dsDNA + urinalysis (always screen urine for active nephritis).",
   "discriminator": "Flare (ESR up, CRP normal/low, C3/C4 low, dsDNA high) vs infection (CRP markedly high). Drug-induced lupus (hydralazine, procainamide, isoniazid, anti-TNF) = anti-HISTONE antibodies, spares kidneys/CNS, resolves on stopping the drug.",
   "redFlags": "Active urinary sediment/proteinuria (lupus nephritis — needs urgent biopsy + induction immunosuppression), neuropsychiatric features, rapidly falling complement, cytopenias, serositis with effusion.",
   "mcqTrap": "Tempting wrong answer: 'a high CRP confirms a lupus flare'. Wrong — CRP is characteristically NORMAL/low in active SLE; a high CRP should make you hunt for infection (or serositis). Also wrong: stopping hydroxychloroquine in pregnancy.",
   "viva": "Out loud: 'Every SLE patient should be on hydroxychloroquine unless contraindicated, including in pregnancy; I always dip the urine for nephritis and use complement, dsDNA and CRP to separate a flare from infection.'",
   "mnemonic": "Flare = 'dsDNA up, Complement Consumed (down), CRP calm'.",
   "source": "Australian Prescriber 'Treatment of systemic lupus erythematosus'; eTG Rheumatology (current); AAO hydroxychloroquine retinopathy screening (2016 revision)",
   "verified": true,
   "tags": [
    "SLE",
    "hydroxychloroquine",
    "lupus nephritis",
    "complement",
    "MEDI8403",
    "MEDI8401"
   ],
   "cutoffs": [
    "HCQ ≤5 mg/kg actual body weight/day",
    "Retinal screen: baseline then annually (typically intensified from ~5 yrs)",
    "Flare = ↓C3/C4, ↑dsDNA, CRP normal/low",
    "Infection = ↑↑CRP"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Marker</th><th>Lupus flare</th><th>Infection</th></tr><tr><td>CRP</td><td>Normal/low</td><td>High</td></tr><tr><td>C3/C4</td><td>Low (consumed)</td><td>Normal</td></tr><tr><td>Anti-dsDNA</td><td>Rising</td><td>Stable</td></tr><tr><td>ESR</td><td>High</td><td>High</td></tr></table>",
   "title": "SLE",
   "subtitle": "hydroxychloroquine for all, dose cap, retinal screening & flare vs infection",
   "id": "rheumatology-11"
  },
  {
   "topic": "Spondyloarthropathies — NSAID first-line, MRI sacroiliitis, and the biologic threshold",
   "subarea": "Inflammatory & connective-tissue disease",
   "trap": "Inflammatory back pain is the entry gotcha: onset <45 yrs, insidious, >3 months, IMPROVES with exercise / WORSENS with rest, night pain + prolonged morning stiffness (>30 min). First-line treatment is REGULAR (not prn) NSAIDs + physiotherapy — methotrexate/other csDMARDs do NOT work for AXIAL disease (only peripheral). Escalate to a TNF inhibitor or IL-17 inhibitor only AFTER failure of NSAIDs with persistent high disease activity (PBS uses BASDAI ≥4 as the activity threshold). Early sacroiliitis is seen on MRI (bone marrow oedema) BEFORE plain X-ray changes.",
   "whatFirst": "Young adult with inflammatory back pain → exam for enthesitis/limited chest & lumbar expansion, check HLA-B27 + CRP, image SI joints (MRI if X-ray normal), and start regular NSAIDs + physio.",
   "discriminator": "Inflammatory vs mechanical back pain: inflammatory improves with activity and worsens with rest and wakes the patient in the 2nd half of the night; mechanical worsens with activity and improves with rest. Reactive arthritis = post-GI/GU infection, 'can't see/pee/climb a tree'. Don't over-rely on HLA-B27 (common in healthy people — supports, not diagnoses).",
   "redFlags": "Acute anterior uveitis (painful red eye — same-day ophthalmology), aortic regurgitation/conduction block, cauda equina, fracture through a fused/osteoporotic spine after minor trauma.",
   "mcqTrap": "Tempting wrong answer: 'start methotrexate for the back pain' or 'order a plain pelvic X-ray and reassure if normal'. MTX doesn't treat axial disease; a normal X-ray does NOT exclude early axial SpA — MRI detects active sacroiliitis first.",
   "viva": "Discriminator the examiner probes: 'How do you tell inflammatory from mechanical back pain?' — answer with the age <45, insidious, >3 month, exercise-improves/rest-worsens, night pain, morning stiffness >30 min quintet.",
   "mnemonic": "Inflammatory back pain (IPAIN): Insidious, Pain at night, Age <45, Improves with exercise, Numerous months (>3).",
   "source": "eTG Rheumatology (current); ASAS classification criteria; PBS Schedule biologic criteria for ankylosing spondylitis/axial SpA",
   "verified": false,
   "tags": [
    "spondyloarthropathy",
    "ankylosing spondylitis",
    "axial SpA",
    "HLA-B27",
    "MEDI8403",
    "MEDI8401"
   ],
   "cutoffs": [
    "Inflammatory back pain onset <45 yrs, >3 months",
    "Morning stiffness >30 min",
    "PBS biologic activity threshold: BASDAI ≥4 after NSAID failure",
    "MRI sacroiliitis precedes X-ray change"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th></th><th>Inflammatory</th><th>Mechanical</th></tr><tr><td>Age onset</td><td>&lt;45 yrs</td><td>Any</td></tr><tr><td>With exercise</td><td>Better</td><td>Worse</td></tr><tr><td>With rest</td><td>Worse</td><td>Better</td></tr><tr><td>Night pain</td><td>Yes (2nd half)</td><td>Less</td></tr><tr><td>AM stiffness</td><td>&gt;30 min</td><td>&lt;30 min</td></tr></table>",
   "title": "Spondyloarthropathies",
   "subtitle": "NSAID first-line, MRI sacroiliitis, and the biologic threshold",
   "id": "rheumatology-12"
  },
  {
   "topic": "Systemic sclerosis — scleroderma renal crisis: ACE inhibitor on, steroids OFF",
   "subarea": "Inflammatory & connective-tissue disease",
   "trap": "The lethal gotcha: in SCLERODERMA RENAL CRISIS (acute severe hypertension + AKI ± microangiopathic haemolysis, usually diffuse cutaneous disease, anti-RNA-polymerase-III positive) treat with a SHORT-ACTING ACE INHIBITOR (e.g. captopril), titrated aggressively — even as creatinine rises, you DO NOT stop the ACE inhibitor. The flip side: HIGH-DOSE CORTICOSTEROIDS PRECIPITATE renal crisis — keep prednisolone <15 mg/day and avoid steroids where possible in systemic sclerosis. ACE inhibitors are NOT used to PREVENT crisis (no prophylactic role). Pulmonary arterial hypertension and ILD are the leading causes of death — screen annually with echo + PFTs.",
   "whatFirst": "Diffuse scleroderma with new severe hypertension + rising creatinine → start (don't withhold) an ACE inhibitor immediately and admit; this is renal crisis until proven otherwise.",
   "discriminator": "SRC vs other AKI/TTP: SRC has accelerated HTN + MAHA + AKI in a scleroderma patient (anti-RNA-pol-III, recent steroid exposure). Limited (CREST, anti-centromere → PAH) vs diffuse (anti-Scl-70/topoisomerase → ILD; anti-RNA-pol-III → renal crisis) cutaneous SSc.",
   "redFlags": "New malignant hypertension, rising creatinine, haemolysis/thrombocytopenia (MAHA), recent moderate/high-dose steroid; exertional dyspnoea (PAH/ILD).",
   "mcqTrap": "Tempting wrong answer: 'stop the ACE inhibitor because the creatinine is climbing' or 'give high-dose prednisolone for the renal crisis'. Both are dangerous — the ACE inhibitor is continued/up-titrated, and steroids PROVOKE crisis rather than treat it.",
   "viva": "Out loud: 'In a scleroderma patient with accelerated hypertension and AKI I'd think renal crisis, start an ACE inhibitor and keep it going despite a creatinine rise, and I'd avoid steroids because they precipitate it.'",
   "mnemonic": "SRC = 'ACE in, steroids out'. Antibodies: 'Pol-3 → Pee (renal), Scl-70 → Sclerosis of Lungs (ILD), Centromere → Crest/PAH'.",
   "source": "eTG Rheumatology (current); EUSTAR consensus on scleroderma renal crisis; Australian Prescriber",
   "verified": true,
   "tags": [
    "systemic sclerosis",
    "scleroderma renal crisis",
    "ACE inhibitor",
    "steroids",
    "PAH",
    "MEDI8403",
    "MEDI8401"
   ],
   "cutoffs": [
    "SRC treatment: short-acting ACE inhibitor (continue despite ↑Cr)",
    "Prednisolone <15 mg/day (steroids precipitate SRC)",
    "Anti-RNA-pol-III → renal crisis",
    "Anti-Scl-70 → ILD; anti-centromere → PAH/limited"
   ],
   "visualHtml": "<table class=\"gv-table\"><tr><th>Antibody</th><th>Subtype</th><th>Key risk</th></tr><tr><td>Anti-centromere</td><td>Limited (CREST)</td><td>Pulmonary HTN</td></tr><tr><td>Anti-Scl-70 (topoisomerase)</td><td>Diffuse</td><td>ILD</td></tr><tr><td>Anti-RNA-pol-III</td><td>Diffuse</td><td>Renal crisis</td></tr></table>",
   "title": "Systemic sclerosis",
   "subtitle": "scleroderma renal crisis: ACE inhibitor on, steroids OFF",
   "id": "rheumatology-13"
  },
  {
   "topic": "The hot joint — septic arthritis takes priority over any flare (aspirate first)",
   "subarea": "Inflammatory & connective-tissue disease",
   "trap": "Any acutely hot, swollen, painful joint is SEPTIC ARTHRITIS until proven otherwise — even in a patient with known gout/RA, and even if afebrile with normal WCC. The mandatory FIRST step is JOINT ASPIRATION (synovial fluid for urgent Gram stain, culture, cell count, crystals) BEFORE antibiotics where feasible, then empirical IV antibiotics (cover Staph aureus; in young/sexually active consider gonococcal). DON'T anchor on 'it's just a gout flare' — gout and infection can coexist; crystals on microscopy do NOT exclude concurrent sepsis. Never inject corticosteroid into a possibly septic joint.",
   "whatFirst": "Hot joint → ASPIRATE FIRST (urgent microscopy/culture/crystals), then empirical IV antibiotics + orthopaedic referral for washout; analgesia after.",
   "discriminator": "Septic (single hot joint, very high synovial WCC predominantly neutrophils, positive Gram/culture, systemically unwell) vs crystal (gout = negatively birefringent needles/monosodium urate; pseudogout = positively birefringent rhomboids/CPPD) vs reactive/inflammatory flare. Synovial WCC and Gram stain are the arbiters.",
   "redFlags": "Prosthetic joint, immunosuppression/biologics, rapidly destructive joint, systemic sepsis, overlying cellulitis — escalate urgently for aspiration/washout.",
   "mcqTrap": "Tempting wrong answer: 'start NSAIDs/colchicine for a presumed gout flare and review'. Wrong — failing to aspirate and exclude sepsis risks rapid joint destruction and death; aspirate and cover with antibiotics first.",
   "viva": "ISBAR: 'I have a single acutely hot, swollen knee in an unwell patient — I'm treating this as septic arthritis: I've aspirated for urgent Gram stain, culture, cell count and crystals, started empirical IV flucloxacillin, and referred orthopaedics for washout.'",
   "mnemonic": "Hot joint = 'TAP before you treat' — Tap (aspirate), Antibiotics, then Plan washout.",
   "source": "eTG Antibiotic / Rheumatology (current); Australian guidance on acute monoarthritis",
   "verified": true,
   "tags": [
    "septic arthritis",
    "hot joint",
    "monoarthritis",
    "gout",
    "emergency",
    "MEDI8403",
    "MEDI8401"
   ],
   "cutoffs": [
    "First step: joint aspiration (microscopy/culture/crystals)",
    "Antibiotics ASAP after aspirate (cover S. aureus)",
    "Crystals present do NOT exclude infection",
    "Never inject steroid into a possibly septic joint"
   ],
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Acute hot, swollen, painful joint</div><div class=\"gv-step\">ASPIRATE: Gram stain, culture, cell count, crystals</div><div class=\"gv-step\">Empirical IV antibiotics (cover S. aureus)</div><div class=\"gv-step\">Orthopaedic referral for washout; do NOT inject steroid</div></div>",
   "title": "The hot joint",
   "subtitle": "septic arthritis takes priority over any flare (aspirate first)",
   "id": "rheumatology-14"
  },
  {
   "topic": "Acute gout flare — treat the FLARE, don't touch urate-lowering therapy",
   "subarea": "Acute arthritis & emergencies",
   "whatFirst": "Treat the acute flare promptly with ONE first-line anti-inflammatory: an NSAID (full dose, short course 3–5 days), OR low-dose colchicine, OR a corticosteroid (oral prednis(ol)one 15–20 mg daily for 3–5 days, or intra-articular steroid if monoarticular). Choose based on comorbidity: avoid NSAIDs in CKD/PUD/heart failure; avoid/reduce colchicine in significant renal/hepatic impairment + interacting drugs; steroids are the safe-in-CKD option.",
   "trap": "The classic exam trap: a patient on regular allopurinol presents with an acute flare — the tempting wrong move is to STOP allopurinol. NEVER stop established allopurinol during a flare; continue it unchanged. (Note the Australian Prescriber update: allopurinol can also be safely STARTED during an acute attack if covered by prophylaxis — so 'must wait until the flare resolves to start' is now a softer recommendation, not an absolute.) Any swing in urate (up OR down) from changing the dose can prolong/worsen the attack.",
   "discriminator": "Acute monoarticular gout (classically 1st MTP = podagra) vs septic arthritis: both hot/red/swollen. Crystals (negatively birefringent, needle-shaped, yellow when parallel to the compensator) confirm gout, BUT a normal serum urate during an attack does NOT exclude gout (urate often falls acutely) and crystals do not exclude co-existing sepsis. If in doubt → aspirate and culture.",
   "redFlags": "Polyarticular/systemic features, fever, or doubt about infection → aspirate to exclude septic arthritis. Recurrent flares, tophi, urate stones, or CKD stage ≥2 → indication to commence urate-lowering therapy (with flare prophylaxis).",
   "cutoffs": [
    "Prednis(ol)one 15–20 mg daily, 3–5 days (Australian Prescriber notes 35 mg daily is also evidence-based)",
    "Colchicine acute (Australian Prescriber): 1 mg as soon as possible, then 500 mcg 1 hour later, MAX 1.5 mg per course; do NOT repeat the course within 3 days",
    "Colchicine in renal impairment: reduce dose (e.g. 500 mcg daily) and consider alternatives",
    "Do NOT stop allopurinol during a flare; allopurinol CAN be safely started during a flare with prophylaxis cover"
   ],
   "source": "Australian Prescriber 'The management of gout' (australianprescriber.tg.org.au); Australian Prescriber 'Management of acute gout'; eTG (current)",
   "mnemonic": "Flare rules — 'Don't rock the urate boat': never STOP allopurinol while the joint is on fire (and you may even start it, with prophylaxis).",
   "viva": "Examiner: 'Man on allopurinol gets acute gout — do you stop the allopurinol?' Correct: NO — continue it, treat the flare with NSAID/colchicine/steroid, and pick the agent based on renal function/comorbidity. Discriminator they probe: how would you exclude septic arthritis?",
   "tags": [
    "gout",
    "acute flare",
    "colchicine",
    "NSAID",
    "prednisolone",
    "allopurinol"
   ],
   "mcqTrap": "'Cease allopurinol and treat the flare' or 'increase allopurinol to abort the attack' — both wrong; allopurinol dose is held constant during an acute flare.",
   "verified": true,
   "visualHtml": "<div class=\"gv-pills\"><span class=\"gv-pill\">NSAID (short course)</span><span class=\"gv-pill\">Colchicine (low dose)</span><span class=\"gv-pill\">Prednisolone 15–20 mg</span><span class=\"gv-pill\">Intra-articular steroid</span></div><table class=\"gv-table\"><thead><tr><th>Comorbidity</th><th>Avoid</th><th>Prefer</th></tr></thead><tbody><tr><td>CKD</td><td>NSAID; full-dose colchicine</td><td>Corticosteroid</td></tr><tr><td>Peptic ulcer / on anticoagulant</td><td>NSAID</td><td>Colchicine / steroid</td></tr><tr><td>Poorly controlled diabetes</td><td>Systemic steroid</td><td>NSAID / colchicine</td></tr></tbody></table>",
   "title": "Acute gout flare",
   "subtitle": "treat the FLARE, don't touch urate-lowering therapy",
   "id": "rheumatology-15"
  },
  {
   "topic": "Pseudogout (CPPD / calcium pyrophosphate deposition) — the gout mimic",
   "subarea": "Acute arthritis & emergencies",
   "whatFirst": "Acute CPPD flare is managed the same as acute gout — there is NO urate-lowering equivalent. Aspirate to confirm crystals AND exclude sepsis, then treat with intra-articular corticosteroid (ideal for the typical large single joint), NSAID, low-dose colchicine, or oral steroid. No specific crystal-dissolving therapy; management is symptomatic + treat any underlying metabolic cause.",
   "trap": "The crystal-microscopy trap (very common MCQ): pseudogout crystals are POSITIVELY birefringent and RHOMBOID (rod/brick-shaped), whereas gout crystals are NEGATIVELY birefringent and NEEDLE-shaped. Students reliably swap these. Also tempting-but-wrong: 'start allopurinol' for pseudogout — allopurinol does nothing for calcium pyrophosphate.",
   "discriminator": "Pseudogout favours the KNEE and WRIST (and large joints) in OLDER patients; gout favours the 1st MTP/podagra. Chondrocalcinosis (linear calcification of cartilage/menisci) on X-ray supports CPPD but its ABSENCE does NOT exclude it (and its presence doesn't prove the acute attack is CPPD). As always, crystals don't exclude co-existing infection.",
   "redFlags": "Acute CPPD can perfectly mimic septic arthritis (hot, swollen, febrile, raised inflammatory markers) — aspirate and culture. New/younger CPPD or polyarticular/florid disease → screen for underlying metabolic cause: HAEMOCHROMATOSIS, hyperparathyroidism, hypomagnesaemia, hypophosphatasia (the 'metabolic mimics').",
   "cutoffs": [
    "Crystals: POSITIVELY birefringent, rhomboid/rod-shaped (gout = NEGATIVELY birefringent, needle-shaped)",
    "Typical joints: knee, wrist (older patient)",
    "X-ray: chondrocalcinosis supports but does not confirm/exclude",
    "No urate-lowering therapy — treat acute flare like gout"
   ],
   "source": "eTG (current) Crystal arthropathies; standard Australian rheumatology teaching (RACGP)",
   "mnemonic": "'P's go together': Pseudogout = Positive birefringence, oblong/rhomboiD. Gout = Needle + Negative ('N's together).",
   "viva": "Examiner shows polarised microscopy or a knee X-ray with chondrocalcinosis: 'What crystal? Which direction of birefringence? Treatment?' Wants the positive/rhomboid call, same-as-gout management, NO allopurinol, and the secondary-cause screen (haemochromatosis, hyperPTH, low Mg).",
   "tags": [
    "pseudogout",
    "CPPD",
    "chondrocalcinosis",
    "crystals",
    "birefringence",
    "haemochromatosis"
   ],
   "mcqTrap": "Labelling pseudogout crystals as 'negatively birefringent needles' (that's gout), OR 'commence allopurinol' for a CPPD flare — allopurinol has no role in calcium pyrophosphate disease.",
   "verified": false,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th></th><th>Gout (urate)</th><th>Pseudogout (CPPD)</th></tr></thead><tbody><tr><td>Crystal shape</td><td>Needle</td><td>Rhomboid / rod</td></tr><tr><td>Birefringence</td><td>Negative</td><td>Positive</td></tr><tr><td>Classic joint</td><td>1st MTP (podagra)</td><td>Knee, wrist</td></tr><tr><td>X-ray</td><td>Erosions (overhanging edge)</td><td>Chondrocalcinosis</td></tr><tr><td>Specific Rx</td><td>Allopurinol (lower urate)</td><td>None — treat flare only</td></tr></tbody></table>",
   "title": "Pseudogout (CPPD / calcium pyrophosphate deposition)",
   "subtitle": "the gout mimic",
   "id": "rheumatology-16"
  },
  {
   "topic": "Septic arthritis — ASPIRATE and culture BEFORE antibiotics (the sequencing gotcha)",
   "subarea": "Acute arthritis & emergencies",
   "whatFirst": "Joint aspiration (arthrocentesis) + send synovial fluid for urgent Gram stain, MC&S and crystals, AND take blood cultures — ideally BEFORE the first dose of antibiotics — then start empirical IV antibiotics. The critical caveat per Australian practice: aspiration and cultures must NOT delay antibiotics in a septic/unstable patient. So: in a STABLE patient, aspirate and culture first (it takes minutes and protects the diagnosis); if unstable or aspiration is not promptly achievable, take blood cultures and give antibiotics without waiting.",
   "trap": "The single most tempting WRONG MCQ option in a STABLE patient is 'give IV flucloxacillin immediately' (or 'start antibiotics then aspirate'). It feels right because you must not delay treating a limb/life-threatening infection — but in a stable patient, giving antibiotics first sabotages the diagnosis: prior antibiotics reduce synovial Gram-stain and culture yield, so you lose the organism and can't tailor therapy. Aspirate-and-culture-first is the exam answer in a STABLE patient; the inverse trap (delaying antibiotics to chase an aspirate in a SEPTIC patient) is also wrong.",
   "discriminator": "A hot, swollen, exquisitely tender joint that the patient REFUSES to move (vs gout/pseudogout where some movement is tolerated) + fever + raised WCC/CRP = treat as septic until proven otherwise. Synovial WCC: >50,000/mm3 (predominantly neutrophils, >90%) strongly suggests septic; gout/inflammatory usually 2,000–50,000. Crystals and infection CAN coexist — finding urate crystals does NOT exclude sepsis, so still culture.",
   "redFlags": "Refusal to weight-bear/move joint, systemic sepsis features, prosthetic joint (call ortho — needs surgical washout ± revision), immunosuppression/IVDU, rapidly spreading erythema. Septic arthritis is an orthopaedic emergency — urgent aspiration ± surgical washout/lavage (arthroscopic or open); serial aspiration or operative drainage prevents cartilage destruction.",
   "cutoffs": [
    "Synovial WCC >50,000/mm3 (esp >90% neutrophils) → septic likely",
    "STABLE patient: aspirate + blood cultures BEFORE antibiotics; UNSTABLE: do not delay antibiotics",
    "Most common organism: Staphylococcus aureus (then streptococci); young sexually active → consider gonococcal",
    "Empirical IV (adult eTG, native joint): flucloxacillin 2 g IV 6-hourly (cefazolin 2 g IV 8-hourly if non-severe penicillin allergy); ADD vancomycin if MRSA risk"
   ],
   "source": "Therapeutic Guidelines (eTG, Antibiotic, current); Royal Children's Hospital Melbourne CPG 'Bone and joint infection' (aspiration/cultures should not delay antibiotics)",
   "mnemonic": "TAP before you ZAP — Tap (aspirate) before you Zap with antibiotics — UNLESS the patient is septic, then don't let tapping delay the zap.",
   "viva": "Examiner probes the sequence: 'Stable patient, hot knee — what's your FIRST step?' Answer aspiration + blood cultures before antibiotics, then empirical IV antibiotics, then escalate via ISBAR to orthopaedics for washout. Name the organism (S. aureus) and the synovial WCC cut-off (>50,000). Be ready for the twist: 'and if they're septic/shocked?' → don't delay antibiotics.",
   "tags": [
    "septic arthritis",
    "arthrocentesis",
    "emergency",
    "antibiotics",
    "synovial fluid"
   ],
   "mcqTrap": "'Start IV antibiotics immediately' chosen over 'aspirate the joint first' in a haemodynamically STABLE patient — wrong because it reduces diagnostic yield without a survival benefit at that point.",
   "verified": true,
   "visualHtml": "<table class=\"gv-table\"><thead><tr><th>Synovial fluid</th><th>Normal</th><th>Non-inflammatory (OA)</th><th>Inflammatory (gout/RA)</th><th>Septic</th></tr></thead><tbody><tr><td>WCC /mm3</td><td>&lt;200</td><td>200–2,000</td><td>2,000–50,000</td><td><span class=\"gv-num\">&gt;50,000</span> (&gt;90% PMN)</td></tr><tr><td>Appearance</td><td>Clear</td><td>Clear/straw</td><td>Cloudy</td><td>Turbid/purulent</td></tr><tr><td>Crystals</td><td>Nil</td><td>Nil</td><td>Often present</td><td>Crystals don't exclude sepsis</td></tr></tbody></table><div class=\"gv-flow\"><div class=\"gv-step\">Hot joint</div><div class=\"gv-step\">Aspirate + blood cultures (don't delay if septic)</div><div class=\"gv-step\">Empirical IV antibiotics</div><div class=\"gv-step\">Refer ortho for washout</div></div>",
   "title": "Septic arthritis",
   "subtitle": "ASPIRATE and culture BEFORE antibiotics (the sequencing gotcha)",
   "id": "rheumatology-17"
  },
  {
   "topic": "The acute monoarthritis approach — ASPIRATE every undiagnosed hot joint",
   "subarea": "Acute arthritis & emergencies",
   "whatFirst": "Any acute monoarthritis (single hot, swollen joint) is septic arthritis until proven otherwise → joint aspiration is the FIRST and pivotal investigation. Send synovial fluid for: (1) Gram stain + culture, (2) cell count + differential, (3) polarised microscopy for crystals. Take blood cultures + FBC/CRP/urate. Don't anchor on a prior gout diagnosis — known gout patients still get septic joints.",
   "trap": "The big trap: a known gout patient presents with a hot joint and the tempting answer is 'treat as gout flare, no need to aspirate'. WRONG — you cannot exclude sepsis clinically, urate can be normal in an attack, and crystals + infection can coexist. Also a trap: 'serum urate is normal therefore not gout' — serum urate frequently drops during an acute flare. Aspirate decides it.",
   "discriminator": "Septic = can't move/won't weight-bear, fever, very high synovial WCC (>50,000); Gout/CPPD = crystals on microscopy; Haemarthrosis = bloody aspirate (think trauma, anticoagulation, haemophilia); Reactive/gonococcal = recent GI/GU infection, young sexually active, tenosynovitis + pustular rash + migratory arthritis. Inflammatory vs non-inflammatory is decided by synovial WCC (cut-off ~2,000).",
   "redFlags": "Fever + single hot joint, prosthetic joint, immunosuppression, refusal to weight-bear → emergency aspiration ± ortho referral for washout. Migratory polyarthralgia + rash + new murmur → consider gonococcal/endocarditis. Always exclude sepsis before reaching for crystal-arthropathy treatment.",
   "cutoffs": [
    "Synovial WCC cut-offs: <2,000 non-inflammatory; 2,000–50,000 inflammatory; >50,000 septic",
    "3 essential synovial tests: Gram+culture, cell count+diff, crystals",
    "Normal serum urate does NOT exclude gout",
    "Crystals do NOT exclude septic arthritis (can coexist)"
   ],
   "source": "eTG (current); standard Australian rheumatology approach to the acute hot joint",
   "mnemonic": "Hot single joint? 'When in doubt, tap it out.' Three tubes: Bugs (Gram/culture), Cells (WCC), Crystals.",
   "viva": "Examiner: 'Known gout, now febrile with a hot knee — manage.' They want you NOT to anchor on gout: aspirate first, three synovial tests + blood cultures, exclude sepsis, ISBAR to ortho if septic. Discriminator probed: how synovial WCC and crystals each change your plan, and why a normal urate doesn't reassure you.",
   "tags": [
    "monoarthritis",
    "hot joint",
    "arthrocentesis",
    "approach",
    "synovial fluid",
    "differential"
   ],
   "mcqTrap": "'Known gout — treat empirically as a flare without aspiration' is the seductive wrong answer; you must aspirate to exclude septic arthritis even in established gout.",
   "verified": false,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Acute single hot joint</div><div class=\"gv-step\">ASPIRATE + blood cultures</div><div class=\"gv-step\">3 tests: Gram/culture · WCC+diff · crystals</div><div class=\"gv-step\">WCC &gt;50k or organisms → septic → ortho</div><div class=\"gv-step\">Crystals + WCC 2k–50k → gout/CPPD (still exclude sepsis)</div></div><div class=\"gv-pills\"><span class=\"gv-pill\">Won't move = think SEPTIC</span><span class=\"gv-pill\">Normal urate ≠ not gout</span><span class=\"gv-pill\">Crystals ≠ no infection</span></div>",
   "title": "The acute monoarthritis approach",
   "subtitle": "ASPIRATE every undiagnosed hot joint",
   "id": "rheumatology-18"
  },
  {
   "topic": "Urate-lowering therapy (allopurinol) — start after flare, titrate-to-target, HLA-B*5801 risk",
   "subarea": "Acute arthritis & emergencies",
   "whatFirst": "Usually start ULT AFTER the acute flare has settled, and ALWAYS with flare prophylaxis (low-dose colchicine 500 mcg BD, or low-dose NSAID) for a minimum of 6 months. Allopurinol: start 100 mg daily (lower/slower in CKD, e.g. 50 mg every second day if eGFR <30), then titrate up by 50 mg every 2–4 weeks, monitoring serum urate, until target reached — treat-to-target, NOT a fixed dose.",
   "trap": "The tempting wrong MCQ answer is 'allopurinol 300 mg daily' as a set-and-forget dose. Many patients are NOT at target on 300 mg — you must titrate to the urate target (can require 600–900 mg). The other trap: starting allopurinol without prophylaxis cover (precipitates/prolongs flares and harms adherence).",
   "discriminator": "Indication to commit to ongoing ULT (not just treat one attack): ≥2 flares per year, tophi, urate (uric acid) renal stones (urolithiasis), or CKD stage ≥2. A single uncomplicated first attack usually does NOT mandate ULT. Febuxostat is the alternative if allopurinol intolerant/ineffective (40 mg ≈ allopurinol 300 mg).",
   "redFlags": "Allopurinol hypersensitivity syndrome / SCAR (DRESS/SJS/TEN) — rash, fever, eosinophilia, hepatitis, AKI: STOP immediately, do not rechallenge. Higher risk in CKD and in those carrying HLA-B*5801 (highest-prevalence groups: Han Chinese, Korean, Thai). HLA-B*5801 testing before allopurinol in these groups is recommended by international/ARA-aligned guidance and is available in Australia — but note the Australian Prescriber gout article flags it as a risk factor rather than mandating universal screening.",
   "cutoffs": [
    "Urate target <0.36 mmol/L (no tophi)",
    "Urate target <0.30 mmol/L (tophi / severe gout)",
    "Allopurinol start 100 mg/day (50 mg every 2nd day if eGFR <30); +50 mg every 2–4 weeks",
    "Flare prophylaxis with ULT: ≥6 months",
    "ULT indicated: ≥2 attacks/yr, tophi, urolithiasis, CKD stage ≥2",
    "Febuxostat 40 mg ≈ allopurinol 300 mg",
    "HLA-B*5801 a risk factor for hypersensitivity (highest in Han Chinese); consider testing in at-risk ancestry"
   ],
   "source": "Australian Prescriber 'The management of gout' (australianprescriber.tg.org.au); Australian Rheumatology Association allopurinol patient info; eTG (current)",
   "mnemonic": "Target 0.36 (think '3-6 = dissolve the crystals'); 0.30 if tophi. Start low, go slow, titrate-to-target.",
   "viva": "Examiner: 'When do you start allopurinol and to what target?' Wants: usually after flare settles, with 6 months prophylaxis; treat-to-target <0.36 (<0.30 with tophi), titrate not fix-dose; consider HLA-B*5801 in at-risk ancestry; recognise allopurinol hypersensitivity as a stop trigger.",
   "tags": [
    "gout",
    "allopurinol",
    "urate target",
    "febuxostat",
    "HLA-B5801",
    "prophylaxis"
   ],
   "mcqTrap": "'Prescribe allopurinol 300 mg daily and review in a year' — wrong: it's treat-to-target with titration; 300 mg fails to reach target in many patients.",
   "verified": true,
   "visualHtml": "<div class=\"gv-flow\"><div class=\"gv-step\">Flare settles</div><div class=\"gv-step\">Start allopurinol 100 mg + prophylaxis (≥6 mo)</div><div class=\"gv-step\">Titrate +50 mg q2–4wk</div><div class=\"gv-step\">Urate &lt;0.36 (&lt;0.30 if tophi)</div></div><table class=\"gv-table\"><thead><tr><th>Urate target</th><th>Value</th></tr></thead><tbody><tr><td>No tophi</td><td><span class=\"gv-num\">&lt;0.36 mmol/L</span></td></tr><tr><td>Tophi / severe</td><td><span class=\"gv-num\">&lt;0.30 mmol/L</span></td></tr></tbody></table>",
   "title": "Urate-lowering therapy (allopurinol)",
   "subtitle": "start after flare, titrate-to-target, HLA-B*5801 risk",
   "id": "rheumatology-19"
  },
  {
   "topic": "Acute compartment syndrome — pain out of proportion, normal pulse",
   "subarea": "Bone, soft tissue & spine",
   "trap": "ACS is a CLINICAL diagnosis and a surgical emergency — do NOT wait for the classic '5 Ps.' The earliest and most reliable sign is pain out of proportion to the injury, worsened by PASSIVE stretch of the affected compartment muscles. Pulselessness, pallor and paralysis are LATE — by then the limb may be lost. Pulses are usually PRESENT (compartment pressure rarely exceeds arterial systolic). Most common after tibial/forearm fractures, crush, reperfusion, or a tight cast. Treatment is emergency fasciotomy.",
   "whatFirst": "Suspected ACS: REMOVE all circumferential casts/dressings/bandages down to skin immediately, keep limb at heart level (not elevated), give analgesia/oxygen, and call orthopaedics NOW for emergency fasciotomy — do not elevate the limb (reduces perfusion).",
   "discriminator": "Compartment syndrome (pain out of proportion, pain on passive stretch, tense compartment, pulses PRESENT) vs arterial occlusion (pulseless, cold, demarcated early) vs simple fracture pain (relieved by analgesia/rest, no passive-stretch pain). Delta pressure (diastolic BP minus compartment pressure) <= 30 mmHg supports diagnosis if measured.",
   "redFlags": "Escalating opioid requirement, paraesthesia, tense/woody compartment, pain on passive stretch — escalate regardless of pulses. Crush injury/reperfusion -> watch for rhabdomyolysis (CK, myoglobinuria, hyperkalaemia, AKI).",
   "mcqTrap": "Tempting wrong answer: 'absent pulse is required' or 'elevate the limb.' Wrong — pulses are typically present and elevation worsens ischaemia (keep at heart level). Another trap: 'wait and remeasure pressure' — clinical suspicion alone warrants fasciotomy.",
   "source": "eTG / standard Australian surgical practice; delta pressure <=30 mmHg threshold (orthopaedic consensus)",
   "tags": [
    "compartment syndrome",
    "fasciotomy",
    "delta pressure",
    "orthopaedic emergency"
   ],
   "viva": "Examiner probes: 'Pulse is present — does that reassure you?' (No). ISBAR to ortho registrar: tense compartment + pain on passive stretch + rising analgesia -> needs urgent fasciotomy.",
   "mnemonic": "Pain on Passive stretch = earliest; 5 Ps (Pain, Paraesthesia, Pallor, Pulseless, Paralysis) — last 3 are too late.",
   "verified": false,
   "cutoffs": [
    "Delta pressure (diastolic BP - compartment pressure) <= 30 mmHg = fasciotomy",
    "Fasciotomy ideally within 4-6 h of onset",
    "Keep limb at heart level (do NOT elevate); remove casts to skin"
   ],
   "title": "Acute compartment syndrome",
   "subtitle": "pain out of proportion, normal pulse",
   "id": "rheumatology-20"
  },
  {
   "topic": "Back pain red flags — malignancy & spinal infection (and what each triggers)",
   "subarea": "Bone, soft tissue & spine",
   "trap": "Most low back pain is benign and mechanical — imaging is NOT indicated without red flags. The gotcha is matching the red flag to the right pathology and action: night pain / unremitting rest pain / >50 yr / known cancer / weight loss / progressive -> MALIGNANCY (think metastasis, myeloma) -> MRI. Fever / IVDU / recent bacteraemia/procedure / immunosuppression + back pain -> DISCITIS/OSTEOMYELITIS/EPIDURAL ABSCESS -> bloods (FBC, CRP/ESR, blood cultures) + urgent MRI. Thoracic back pain in an older patient is a red flag in itself.",
   "whatFirst": "Screen every back pain for red flags before imaging. If infection suspected: blood cultures BEFORE antibiotics + urgent MRI; do not start empirical antibiotics first (loses the organism) unless the patient is septic.",
   "discriminator": "Mechanical (worse with movement, eased by rest, no red flags -> no imaging) vs malignant (rest/night pain, systemic features) vs infective (fever, raised inflammatory markers, risk factors) vs inflammatory/axial spondyloarthritis (age <40, insidious, morning stiffness >30 min, BETTER with exercise, worse at rest).",
   "redFlags": "Saddle/sphincter (CES), fever+IVDU/immunosuppression (infection), age>50+weight loss+night pain+cancer history (malignancy), trauma/steroids/osteoporosis (fracture), progressive neuro deficit.",
   "mcqTrap": "Tempting wrong answer in an inflammatory-back-pain stem: 'order an MRI/X-ray for mechanical back pain with no red flags.' Wrong — imaging without red flags is not indicated. Conversely the febrile IVDU answer 'give analgesia and review' misses epidural abscess.",
   "source": "eTG current (low back pain); NSW ACI Emergency Care Institute acute low back pain",
   "tags": [
    "back pain",
    "red flags",
    "malignancy",
    "spinal infection",
    "discitis"
   ],
   "viva": "Examiner probes the discriminator: 'How do you tell inflammatory from mechanical back pain?' (age<40, morning stiffness >30 min, improves with activity, night pain second half of night).",
   "mnemonic": "TUNA FISH: Trauma, Unexplained weight loss, Neuro deficit, Age>50, Fever, IVDU, Steroids/immunosuppression, History of cancer.",
   "verified": true,
   "visualHtml": "<table class='gv-table'><tr><th>Red flag pattern</th><th>Think</th><th>Action</th></tr><tr><td>Saddle anaesthesia, retention, bilateral sciatica</td><td>Cauda equina</td><td>Emergency MRI + surgery</td></tr><tr><td>Night/rest pain, >50, weight loss, cancer Hx</td><td>Malignancy/myeloma</td><td>MRI + bloods</td></tr><tr><td>Fever, IVDU, immunosuppression</td><td>Discitis/abscess</td><td>Cultures BEFORE Abx + urgent MRI</td></tr><tr><td>Age<40, AM stiffness >30 min, better w/ exercise</td><td>Axial spondyloarthritis</td><td>Inflammatory markers, HLA-B27, MRI SIJ</td></tr></table>",
   "cutoffs": [
    "No imaging for mechanical LBP without red flags",
    "Infection: blood cultures BEFORE antibiotics + urgent MRI",
    "Inflammatory: age<40, morning stiffness >30 min"
   ],
   "title": "Back pain red flags",
   "subtitle": "malignancy & spinal infection (and what each triggers)",
   "id": "rheumatology-21"
  },
  {
   "topic": "Carpal tunnel syndrome — median nerve & the discriminators",
   "subarea": "Bone, soft tissue & spine",
   "trap": "CTS = median nerve compression at the wrist: paraesthesia/pain in the radial 3.5 digits (thumb, index, middle, radial half of ring), classically worse at night and relieved by shaking the hand (flick sign). KEY exam gotcha: the palm is SPARED because the palmar cutaneous branch arises proximal to the carpal tunnel — sensory loss confined to fingers, not palm. Thenar wasting and weak thumb abduction (abductor pollicis brevis) are late motor signs. Diagnosis is clinical; nerve conduction studies confirm/grade.",
   "whatFirst": "Confirm distribution and look for a secondary cause before labelling idiopathic: pregnancy, hypothyroidism, diabetes, rheumatoid arthritis, acromegaly. First-line management is nocturnal wrist splinting (neutral position); corticosteroid injection or surgical carpal tunnel release for severe/refractory or motor involvement.",
   "discriminator": "CTS (median, radial 3.5 digits, palm spared, nocturnal, Phalen/Tinel +ve) vs C6/C7 radiculopathy (neck pain, dermatomal, reflex change) vs ulnar neuropathy (little + ulnar ring finger, hypothenar/interosseous wasting) vs thoracic outlet (whole-limb, positional).",
   "redFlags": "Thenar wasting or persistent weakness of thumb abduction = motor axonal loss -> urgent referral for surgical release (don't keep splinting). Acute CTS after trauma/fracture -> consider as emergency.",
   "mcqTrap": "Tempting wrong answer: sensory loss 'including the palm' or involving the little finger. Palm is SPARED (palmar cutaneous branch) and little finger is ulnar — picking those is the classic trap.",
   "source": "eTG current; standard Australian rheumatology/neurology teaching",
   "tags": [
    "carpal tunnel",
    "median nerve",
    "soft tissue",
    "entrapment neuropathy"
   ],
   "viva": "Examiner probes: 'Why is the palm spared?' (palmar cutaneous branch arises proximal to the tunnel) and demonstration of Phalen/Tinel and APB testing; ask for secondary causes.",
   "mnemonic": "Median = radial 3.5 fingers, PALM Preserved; thenar wasting = too late for splints.",
   "verified": true,
   "cutoffs": [
    "Sensory: radial 3.5 digits, palm spared",
    "1st line: nocturnal neutral wrist splint",
    "Thenar wasting/motor loss -> surgical carpal tunnel release"
   ],
   "title": "Carpal tunnel syndrome",
   "subtitle": "median nerve & the discriminators",
   "id": "rheumatology-22"
  },
  {
   "topic": "Cauda equina syndrome — the surgical emergency among back pain red flags",
   "subarea": "Bone, soft tissue & spine",
   "trap": "Cauda equina is a time-critical surgical emergency. The earliest reliable warning is bilateral sciatica + saddle (perineal) anaesthesia; urinary retention with overflow incontinence and reduced anal tone are LATE signs (waiting for them means waiting too long). What examiners want: suspect it -> IMMEDIATE (emergency, out-of-hours) MRI of the whole lumbosacral spine + urgent spinal surgical referral for decompression — make the surgical referral WITHOUT delay and before investigations are complete; do NOT wait for a routine scan, and do NOT order plain X-ray.",
   "whatFirst": "Suspected CES -> emergency MRI lumbosacral spine NOW + phone the on-call spinal/neurosurgical team (refer before imaging is completed). Check post-void residual bladder volume and document perineal sensation/anal tone at presentation.",
   "discriminator": "CES (bilateral leg symptoms, saddle anaesthesia, bladder/bowel dysfunction, decompress urgently) vs simple unilateral radiculopathy (single dermatome, no sphincter/saddle involvement) vs conus medullaris (mixed UMN+LMN, more symmetrical). MRI is the investigation; CT/X-ray do not exclude it.",
   "redFlags": "Saddle anaesthesia, urinary retention/incontinence, faecal incontinence/loss of anal tone, bilateral sciatica, new sexual dysfunction — ANY of these with back pain = emergency MRI.",
   "mcqTrap": "Tempting wrong answer: 'arrange outpatient MRI' or 'plain lumbar X-ray' or 'reassure and review.' Wrong — emergency MRI + immediate surgical referral; delay risks permanent paralysis and incontinence.",
   "source": "NSW ACI Emergency Care Institute (acute low back pain — urgent MRI is investigation of choice, refer to spinal surgery before investigations complete); eTG current",
   "tags": [
    "cauda equina",
    "red flags",
    "back pain",
    "emergency MRI"
   ],
   "viva": "ISBAR phone the spinal registrar: Situation 'suspected cauda equina', Background, Assessment (saddle anaesthesia, retention, reduced anal tone), Recommendation 'urgent MRI + review for decompression'.",
   "mnemonic": "Saddle, Sphincters, Sciatica (bilateral), Sexual dysfunction -> Scan Stat (MRI).",
   "verified": true,
   "cutoffs": [
    "Emergency (not routine) MRI lumbosacral spine — investigation of choice",
    "Urgent surgical decompression — ideally within ~48 h of onset",
    "Check post-void residual + document saddle sensation/anal tone"
   ],
   "title": "Cauda equina syndrome",
   "subtitle": "the surgical emergency among back pain red flags",
   "id": "rheumatology-23"
  },
  {
   "topic": "Denosumab — the rebound-fracture gotcha (cannot just stop)",
   "subarea": "Bone, soft tissue & spine",
   "trap": "Denosumab (Prolia, 60 mg sc every 6 months) must be given on time and NEVER stopped without transitioning to a bisphosphonate — stopping (or a delayed dose >4 months) causes a rebound surge in bone turnover with multiple spontaneous vertebral fractures, on average ~4-5 months after the last dose, especially after >2.5-3 years of use. If ceasing, give a bisphosphonate promptly (within ~4 weeks of when the next dose was due — e.g. 12 months oral or one+ zoledronate infusion) and involve a bone specialist. Unlike bisphosphonates, denosumab has NO drug holiday and is not retained in bone.",
   "whatFirst": "If a patient on denosumab presents having missed/wanting to stop a dose: do NOT simply observe — arrange timely re-dosing or bridging bisphosphonate to prevent rebound vertebral fractures.",
   "discriminator": "Denosumab (reversible, no skeletal retention -> rebound on cessation, safe in renal impairment) vs bisphosphonate (retained in bone -> safe to take drug holiday, needs eGFR>=35).",
   "redFlags": "New back pain / multiple vertebral fractures in someone who recently stopped or delayed denosumab = rebound phenomenon until proven otherwise. Check calcium before each dose (hypocalcaemia risk, worse in renal impairment).",
   "mcqTrap": "Tempting wrong answer: 'patient finished planned denosumab course, no further therapy needed / give a drug holiday.' Wrong — denosumab cessation requires bisphosphonate cover; a drug holiday applies to bisphosphonates, not denosumab.",
   "source": "2024 RACGP/Healthy Bones Australia guideline (MJA 2025; transition within ~4 weeks of next due dose); TGA strengthened-warning safety update; eTG current",
   "tags": [
    "denosumab",
    "rebound fracture",
    "osteoporosis",
    "vertebral fracture"
   ],
   "viva": "Examiner probes: 'Why can you give a bisphosphonate a holiday but not denosumab?' (no skeletal retention -> rebound turnover).",
   "mnemonic": "Denosumab = Don't stop Dead — bridge with a bisphosphonate.",
   "verified": true,
   "cutoffs": [
    "Denosumab 60 mg sc every 6 months",
    "On cessation -> bisphosphonate within ~4 weeks of next due dose (e.g. 12 mo oral or zoledronate)",
    "Rebound vertebral # peak ~4-5 months post-cessation; higher risk if used >2.5-3 yr"
   ],
   "title": "Denosumab",
   "subtitle": "the rebound-fracture gotcha (cannot just stop)",
   "id": "rheumatology-24"
  },
  {
   "topic": "First-line osteoporosis pharmacotherapy & PBS criteria",
   "subarea": "Bone, soft tissue & spine",
   "trap": "First-line is an oral bisphosphonate (alendronate/risedronate) with the absolute essentials examiners test: take on an empty stomach with a full glass of water, remain upright for 30 minutes, nil food/other meds for 30 min (oesophagitis risk). Ensure vitamin D and calcium replete BEFORE/with therapy and check eGFR — bisphosphonates contraindicated if eGFR < 35 mL/min. PBS subsidy needs T-score <= -2.5 OR a documented minimal-trauma fracture (age >=70 with T <= -2.5 has BMD-based pathways too).",
   "whatFirst": "Before any anti-resorptive: correct vitamin D deficiency and ensure adequate calcium, and check renal function and dental status (jaw osteonecrosis risk before invasive dental work).",
   "discriminator": "Bisphosphonate (eGFR>=35, GI/upright caveats, drug holiday after 5-10 yr) vs denosumab (sc 6-monthly, OK in renal impairment but NEVER skip/stop without bisphosphonate cover — rebound) vs teriparatide/romosozumab (very-high-risk/anabolic, specialist).",
   "redFlags": "Hypocalcaemia before starting (correct first), recent/planned invasive dental surgery (MRONJ), atypical femoral/subtrochanteric thigh pain on long-term therapy.",
   "mcqTrap": "Tempting wrong answer: start a bisphosphonate as the 'safe' default in a patient with eGFR 25 or uncorrected hypocalcaemia. Both are wrong — bisphosphonates need eGFR >= 35 and corrected calcium first.",
   "source": "2024 RACGP/Healthy Bones Australia guideline (MJA 2025); Australian Prescriber (TG) 'treating osteoporosis'; Therapeutic Guidelines (eTG current); PBS criteria",
   "tags": [
    "osteoporosis",
    "bisphosphonate",
    "denosumab",
    "PBS"
   ],
   "viva": "Examiner probes correct counselling on oral bisphosphonate administration (upright 30 min, empty stomach) and 'what do you check before the first dose?' (Ca, vit D, eGFR, dental).",
   "mnemonic": "Bisphosphonate before breakfast: Upright, Water, Wait 30, eGFR>=35, Calcium/D replete.",
   "verified": true,
   "cutoffs": [
    "Oral bisphosphonate: upright 30 min, empty stomach",
    "Contraindicated/avoid if eGFR < 35 mL/min",
    "Reassess/drug holiday after 5-10 years if T >= -2.5 and no new #"
   ],
   "title": "First-line osteoporosis pharmacotherapy & PBS criteria",
   "id": "rheumatology-25"
  },
  {
   "topic": "Fragility (minimal-trauma) fracture — definition & the must-not-miss action",
   "subarea": "Bone, soft tissue & spine",
   "trap": "A minimal-trauma (fragility) fracture = a fracture from a fall at standing height or less (or no identifiable trauma). It clinically diagnoses osteoporosis on its own and is itself a PBS-qualifying criterion for anti-resorptive therapy WITHOUT needing a DXA T-score <= -2.5. The single biggest gotcha: a vertebral fragility fracture is often painless/incidental on imaging and is the strongest predictor of further fractures — do not dismiss the 'loss of height' or wedge vertebra.",
   "whatFirst": "Any patient >50 with a low-trauma fracture: start (or arrange) anti-resorptive therapy AND investigate for secondary causes — do not just fix the bone and discharge. This is the 'capture the fracture'/fracture liaison principle.",
   "discriminator": "Fragility fracture (fall from standing height or less) vs traumatic fracture (high-energy: MVA, fall from height) — only the former diagnoses osteoporosis. Pathological fracture from malignancy/myeloma is the mimic to exclude.",
   "redFlags": "Multiple vertebral fractures, fracture on treatment, or fracture with B-symptoms/anaemia/hypercalcaemia/high ESR -> exclude myeloma/metastasis before attributing to osteoporosis.",
   "mcqTrap": "Tempting wrong option: 'order DXA first, treat only if T <= -2.5.' Wrong — a fragility fracture alone qualifies for treatment and DXA should not delay it (DXA is for baseline/monitoring, not a gate).",
   "source": "2024 RACGP/Healthy Bones Australia guideline (MJA 2025); PBS anti-resorptive criteria (minimal-trauma fracture OR T<=-2.5)",
   "tags": [
    "fragility fracture",
    "minimal trauma",
    "osteoporosis",
    "secondary fracture prevention"
   ],
   "viva": "Examiner probes: 'Hip fracture in an 80-year-old — what 2 things before discharge?' (anti-resorptive + falls/secondary-cause workup; vitamin D + calcium repletion).",
   "mnemonic": "Fall from standing or less = Fragility = osteoporosis Confirmed (no DXA gate).",
   "verified": true,
   "cutoffs": [
    "Minimal trauma = fall from standing height or less",
    "Qualifies for PBS anti-resorptive WITHOUT DXA threshold"
   ],
   "title": "Fragility (minimal-trauma) fracture",
   "subtitle": "definition & the must-not-miss action",
   "id": "rheumatology-26"
  },
  {
   "topic": "Osteoporosis diagnosis: DXA T-score vs Z-score & site",
   "subarea": "Bone, soft tissue & spine",
   "trap": "Densitometric osteoporosis = T-score <= -2.5 (lowest of lumbar spine L1-L4, total hip, or femoral neck) in a postmenopausal woman or man >50. T-score -1.0 to -2.5 = osteopenia (low bone mass), NOT osteoporosis. Use Z-score (age/sex-matched), NOT T-score, in premenopausal women, men <50, and children. A minimal-trauma (fragility) fracture clinically diagnoses osteoporosis REGARDLESS of T-score, so a normal DXA does not exclude it.",
   "whatFirst": "Classify the patient first: postmenopausal/men>50 -> read T-score; young/premenopausal -> read Z-score (a low Z-score <= -2.0 flags 'below expected for age' and mandates a secondary-cause workup).",
   "discriminator": "Osteopenia (T -1 to -2.5) vs osteoporosis (T <= -2.5) vs established/severe osteoporosis (low BMD + a fragility fracture). T uses young-adult reference; Z uses age-matched.",
   "redFlags": "Z-score <= -2.0 or osteoporosis in a young/premenopausal patient -> hunt secondary cause (hyperthyroidism, hyperparathyroidism, coeliac, hypogonadism, myeloma, glucocorticoids, alcohol).",
   "mcqTrap": "The tempting wrong answer is calling a T-score of -2.0 'osteoporosis' or treating it as benign. -2.0 is osteopenia; treat based on absolute fracture risk/fracture history, not the label.",
   "source": "2024 RACGP/Healthy Bones Australia osteoporosis guideline (MJA 2025;222:9); WHO densitometric criteria",
   "tags": [
    "osteoporosis",
    "DXA",
    "T-score",
    "Z-score"
   ],
   "viva": "Examiner probes: 'Why T-score here but Z-score there?' and 'Patient has a fragility fracture but normal DXA — do you treat?' (Yes — fracture trumps BMD).",
   "mnemonic": "T = Twenty-something reference (young adult); Z = your-own-Zage-matched.",
   "verified": true,
   "visualHtml": "<table class='gv-table'><tr><th>T-score</th><th>Category</th></tr><tr><td>>= -1.0</td><td>Normal</td></tr><tr><td>-1.0 to -2.5</td><td>Osteopenia (low bone mass)</td></tr><tr><td><= -2.5</td><td>Osteoporosis</td></tr><tr><td><= -2.5 + fragility #</td><td>Established/severe osteoporosis</td></tr></table>",
   "cutoffs": [
    "Osteoporosis: T-score <= -2.5",
    "Osteopenia: T -1.0 to -2.5",
    "Use Z-score if premenopausal/men<50; Z <= -2.0 = below expected for age"
   ],
   "title": "Osteoporosis diagnosis",
   "subtitle": "DXA T-score vs Z-score & site",
   "id": "rheumatology-27"
  },
  {
   "topic": "Rotator cuff disease — impingement vs tear vs frozen shoulder vs the can't-miss",
   "subarea": "Bone, soft tissue & spine",
   "trap": "Rotator cuff pathology = subacromial pain, painful arc 60-120 degrees, weakness on resisted testing. Discriminate the four big shoulder mimics by the pattern of PASSIVE vs ACTIVE range: rotator cuff tear/tendinopathy = active range limited/painful but PASSIVE range preserved; adhesive capsulitis (frozen shoulder) = BOTH active AND passive range globally restricted (esp. external rotation), strongly linked to diabetes. SUPRASPINATUS = empty can/Jobe test + painful arc; subscapularis = lift-off/belly-press; infraspinatus/teres minor = resisted external rotation.",
   "whatFirst": "Examine active then passive range to separate cuff (passive preserved) from frozen shoulder (passive lost). Most cuff tendinopathy is managed conservatively first (analgesia, physiotherapy, +/- subacromial corticosteroid injection); X-ray then ultrasound/MRI to characterise; refer acute traumatic full-thickness tears in younger/active patients early.",
   "discriminator": "Cuff tear (active>passive deficit, weakness) vs frozen shoulder (global passive loss, diabetic) vs OA (crepitus, X-ray changes) vs referred (cervical/cardiac/diaphragmatic — always consider). Acute traumatic tear in a young patient = early surgical referral; degenerative tear in elderly = often conservative.",
   "redFlags": "Trauma + true weakness (drop-arm test positive) = full-thickness tear, refer. Fever/red hot shoulder = septic arthritis. Mass/constitutional symptoms = consider tumour; left shoulder tip pain = cardiac/diaphragmatic referral.",
   "mcqTrap": "Tempting wrong answer: attributing globally restricted PASSIVE range to a 'rotator cuff tear.' Restricted passive external rotation = adhesive capsulitis (or glenohumeral OA), NOT a cuff tear (cuff tears preserve passive range).",
   "source": "eTG current; standard Australian musculoskeletal teaching",
   "tags": [
    "rotator cuff",
    "frozen shoulder",
    "impingement",
    "soft tissue",
    "shoulder"
   ],
   "viva": "Examiner probes: 'Active range poor but passive normal — what does that tell you?' (cuff/tendon problem, not capsular) and asks to name the specific test per cuff muscle.",
   "mnemonic": "Cuff = active loss, Passive Preserved. Frozen = both gone (ext rotation worst), think Diabetes.",
   "verified": true,
   "visualHtml": "<table class='gv-table'><tr><th>Test</th><th>Muscle/structure</th></tr><tr><td>Empty can / Jobe</td><td>Supraspinatus</td></tr><tr><td>Resisted external rotation</td><td>Infraspinatus / teres minor</td></tr><tr><td>Lift-off / belly-press</td><td>Subscapularis</td></tr><tr><td>Painful arc 60-120 deg</td><td>Subacromial impingement</td></tr><tr><td>Global passive loss (esp ER)</td><td>Adhesive capsulitis (frozen)</td></tr></table>",
   "cutoffs": [
    "Painful arc 60-120 degrees = subacromial impingement",
    "Cuff tear: active range limited, PASSIVE preserved",
    "Frozen shoulder: passive AND active globally lost (ext rotation worst)"
   ],
   "title": "Rotator cuff disease",
   "subtitle": "impingement vs tear vs frozen shoulder vs the can't-miss",
   "id": "rheumatology-28"
  }
 ]
}
);
