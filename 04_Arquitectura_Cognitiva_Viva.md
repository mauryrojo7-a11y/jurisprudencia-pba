# 04 - Arquitectura Cognitiva Viva: Estado del Arte en Razonamiento de LLMs, Test-Time Compute y Flujos Agénticos (arXiv cs.AI / cs.CL / cs.LG)

- **Repositorio**: `mauryrojo7-a11y/jurisprudencia-pba`
- **Fuente Científica en Tiempo Real**: API Oficial de arXiv (`https://export.arxiv.org/api/query` — Categorías `cs.AI`, `cs.CL`, `cs.LG`)
- **Última Actualización Automática**: 2026-10-24
- **Ejes Monitoreados Diariamente**:
  1. **Test-Time Compute & Inference-Time Scaling**
  2. **Process Reward Models (PRM) & Step-Level Verification**
  3. **Reasoning in LLMs (Deliberative Chain-of-Thought & Self-Correction)**
  4. **Prompt Engineering, Meta-Prompting & In-Context Optimization**
  5. **Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning**

---

## SÍNTESIS DE REGLAS OPERATIVAS DE ARQUITECTURA COGNITIVA (META-PROTOCOLO DE INFERENCIA)

Las siguientes reglas operativas sintetizan los hallazgos de frontera extraídos de los papers registrados en este documento y deben ser aplicadas como **arquitectura cognitiva de razonamiento** al analizar expedientes, jurisprudencia y proyectar resoluciones:

1. **Escalamiento Adaptativo en Tiempo de Inferencia (Test-Time Compute Allocation)**:
   - Antes de redactar una resolución, clasificar la complejidad del caso (estándar vs. controvertido/atípico). En casos complejos, expandir el cómputo de inferencia generando hipótesis alternativas de encuadre normativo y contrastándolas contra los precedentes del Juzgado N° 7 y de la Cámara Departamental.
2. **Verificación Paso a Paso tipo Process Reward Model (Step-Level PRM)**:
   - No validar únicamente el fallo final: auditar secuencialmente cada eslabón lógico del razonamiento: *(Paso 1: Legitimación y personería -> Paso 2: Trabado de la litis / rebeldía -> Paso 3: Hechos conducentes y carga probatoria art. 375 CPCCBA -> Paso 4: Subsunción en CCyCN / leyes especiales -> Paso 5: Tasa de interés, costas art. 68/556 CPCCBA y diferimiento/regulación de honorarios Ley 14.967)*. Si un paso carece de respaldo fáctico o normativo, corregir inmediatamente antes de avanzar al siguiente considerando.
3. **Anclaje Empírico Estricto y Cero Alucinación (Grounded In-Context Learning)**:
   - Toda cita de jurisprudencia debe provenir exclusivamente de registros verificados en el corpus (`01_Juzgado_Civ_Com_7_Avellaneda.md`, `02_Camara_Avellaneda_Lanus.md`, `03_Camaras_Civiles_PBA.md`). Queda prohibido extrapolar números de causa, fechas o carátulas por similitud estadística.
4. **Orquestación Agéntica en Tres Fases (Retrieve -> Verify & Reason -> Draft & Critique)**:
   - Separar cognitivamente la fase de **Recuperación** (búsqueda exhaustiva de precedentes aplicables), la fase de **Deliberación** (comparación entre el criterio propio del Juzgado N° 7 y el de la Alzada de Avellaneda-Lanús) y la fase de **Proyección y Crítica** (redacción bajo Ac. 3975/20 SCBA seguida de revisión formal de congruencia conforme arts. 34 inc. 4 y 163 CPCCBA).

---

## EJE: TEST-TIME COMPUTE & INFERENCE-TIME SCALING

### [arXiv:2610.31667] Direct Pass@$k$ Optimization for Thought Pruning: Balancing Quality and Diversity in Test-Time Reasoning
- **arXiv ID**: `2610.31667` (2610.31667v1)
- **Fecha de Publicación**: 2026-10-22
- **Categorías arXiv**: `cs.AI`, `cs.CL`
- **Eje Cognitivo**: Test-Time Compute & Inference-Time Scaling
- **Autores**: Mahdi Salmani, Adel Javanmard, Devansh Gupta, Meisam Razaviyayn
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.31667)](https://arxiv.org/abs/2610.31667) | [PDF (https://arxiv.org/pdf/2610.31667.pdf)](https://arxiv.org/pdf/2610.31667.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Test-time scaling has emerged as a key inference strategy for reasoning models, where a model generates a large number of candidate solutions in the hope of finding at least one correct solution. Running all candidate solutions to completion can be computationally demanding, so recent work prunes the candidate pool after generating only a short prefix, committing further computation only to the surviving candidates. Existing pruning strategies divide broadly into two categories: Quality-based methods assign a score to each partial solution and discard those predicted to ultimately lead to an incorrect final solution, while diversity-based methods select partial solutions that follow different reasoning trajectories and are therefore likely to cover different final solutions. The tension between these two objectives is an instance of exploration versus exploitation, yet little to no prior work on pruning exposes this trade-off directly, let alone optimizes it. In this paper, we introduce a pruning procedure that addresses this trade-off directly by optimizing pass@$k$ over the selected solution pool. In particular, it chooses the pool to maximize the probability that at least one of its partial solutions, when continued to completion, yields a correct answer. Because this objective simultaneously rewards high-quality partial solutions and penalizes redundancy among them, quality and diversity are naturally balanced by the criterion itself rather than through separate ad-hoc design choices. On eight open-weight reasoning models, our method outperforms existing quality-based and diversity-based pruning strategies. The gains are particularly pronounced when the pruning procedure keeps a moderate number of partial solutions for continued generation, highlighting the value of directly balancing quality and diversity during pruning.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Test-Time Compute & Inference-Time Scaling]**: Asignar presupuesto computacional adaptativo en tiempo de inferencia según la complejidad del caso: descomponer cuestiones ambiguas en múltiples trayectorias de análisis, contrastar hipótesis rivales y aplicar verificación cruzada antes de emitir la conclusión.
  2. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  3. **[Trazabilidad y Explicabilidad Técnica]**: Explicitar los fundamentos y pasos de derivación desde los datos de entrada hasta la conclusión dispositiva, garantizando auditabilidad completa del razonamiento.

---

### [arXiv:2610.30980] Diagnostic Loss: Asymmetric Supervision for Radiology Report Generation
- **arXiv ID**: `2610.30980` (2610.30980v1)
- **Fecha de Publicación**: 2026-10-22
- **Categorías arXiv**: `cs.CV`, `cs.LG`
- **Eje Cognitivo**: Test-Time Compute & Inference-Time Scaling
- **Autores**: Ignacy Kolton, Wenxuan Li, Zongwei Zhou, Jarosław B. Ćwikła, Arkadiusz Sitek, Pedro R. A. S. Bassi et al.
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.30980)](https://arxiv.org/abs/2610.30980) | [PDF (https://arxiv.org/pdf/2610.30980.pdf)](https://arxiv.org/pdf/2610.30980.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Automated radiology report generation requires models to do more than produce fluent clinical narratives: they must explicitly state supported diagnoses while avoiding unsupported ones. However, existing medical vision-language models (MedVLMs) are typically trained with token-level maximum likelihood objectives, which prioritize text agreement over diagnostically critical terms. As a result, models can miss key diagnoses and introduce wrong ones. We identify this as an objective misalignment between conventional language modeling and the asymmetric diagnostic requirements of radiology reporting. To encode these requirements, we introduce Diagnostic Loss (DLoss), a differentiable, architecture-agnostic objective that operates directly on decoder token probabilities. DLoss separately aggregates probability mass over vocabularies associated with diagnoses supported by the reference report and with unsupported alternatives. Using asymmetric pooling across token positions in the report, it encourages supported diagnoses to receive sufficient probability in at least one position while suppressing spurious probability spikes for unsupported diagnoses across all positions during training. The loss can be applied to existing 3D MedVLMs without modifying their vision backbones, language decoders, or inference procedures, and introduces no additional inference-time computation. We train and evaluate DLoss on 50,000 abdominal CT scans across several 3D MedVLM architectures on both in-distribution and out-of-distribution report-generation benchmarks. Across these settings, DLoss improves diagnostic faithfulness while maintaining competitive performance on conventional language-generation metrics, showing the value of asymmetric sequence-level supervision for radiology report generation. The code for DLoss is available at https://github.com/gmum/DLoss.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Test-Time Compute & Inference-Time Scaling]**: Asignar presupuesto computacional adaptativo en tiempo de inferencia según la complejidad del caso: descomponer cuestiones ambiguas en múltiples trayectorias de análisis, contrastar hipótesis rivales y aplicar verificación cruzada antes de emitir la conclusión.
  2. **[Protocolo de Verificación Intrínseca]**: Implementar un paso de auditoría independiente sobre cada afirmación fáctica y cita normativa/jurisprudencial antes de consolidar la respuesta final, rechazando cualquier inferencia no respaldada por evidencia documental directa.
  3. **[Trazabilidad y Explicabilidad Técnica]**: Explicitar los fundamentos y pasos de derivación desde los datos de entrada hasta la conclusión dispositiva, garantizando auditabilidad completa del razonamiento.

---

### [arXiv:2610.30744] Random Remasking Scales Masked Diffusion Inference
- **arXiv ID**: `2610.30744` (2610.30744v1)
- **Fecha de Publicación**: 2026-10-22
- **Categorías arXiv**: `cs.LG`
- **Eje Cognitivo**: Test-Time Compute & Inference-Time Scaling
- **Autores**: Zhaoyi Zhou, Frank Wu, Andrea Zanette
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.30744)](https://arxiv.org/abs/2610.30744) | [PDF (https://arxiv.org/pdf/2610.30744.pdf)](https://arxiv.org/pdf/2610.30744.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Masked diffusion models (MDMs) generate sequences by progressively unmasking tokens, but errors introduced during decoding are typically irreversible. Recent work has shown that iterative correction can improve sample quality, yet existing theory fails to explain this given a learned, imperfect denoiser model. We re-formulate MDM inference as a Markov chain on the clean sequence space, defined by a remask-denoise kernel that randomly re-introduces masks and then denoises. This helps us analyze the actual denoising trajectory towards the data distribution. The analysis motivates Random Remask-Denoise (R$^2$D) inference, a purely test-time, finetuning-free, reward-free procedure. To further improve performance, we propose Trajectory Correction Training (TCT), a denoiser-training procedure that exposes the model to its own errors along the generation trajectory. On logical tasks, our approach exhibits a striking near-log-linear test-time scaling, achieving over 97% accuracy on hard Sudoku puzzles and over 99% accuracy on 3-SAT. Our approach also applies to pretrained models on actual language tasks, beating iterative correction baselines and the official Q-mode accuracy of LLaDA2.1-mini on HumanEval+.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Test-Time Compute & Inference-Time Scaling]**: Asignar presupuesto computacional adaptativo en tiempo de inferencia según la complejidad del caso: descomponer cuestiones ambiguas en múltiples trayectorias de análisis, contrastar hipótesis rivales y aplicar verificación cruzada antes de emitir la conclusión.
  2. **[Supervisión Granular por Pasos (Step-Level PRM)]**: Validar secuencialmente cada considerando o nodo de decisión. Si un paso intermedio presenta incertidumbre o ambigüedad, podar esa rama de razonamiento y recalcular desde el último antecedente verificado.
  3. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.

---

### [arXiv:2610.29029] Better Policies, Worse Verifier Audits
- **arXiv ID**: `2610.29029` (2610.29029v1)
- **Fecha de Publicación**: 2026-10-21
- **Categorías arXiv**: `cs.LG`
- **Eje Cognitivo**: Test-Time Compute & Inference-Time Scaling
- **Autores**: Daniel Cieślak, Jacek Łubiński
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.29029)](https://arxiv.org/abs/2610.29029) | [PDF (https://arxiv.org/pdf/2610.29029.pdf)](https://arxiv.org/pdf/2610.29029.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Verifier stacks increasingly sit inside post-training and test-time compute loops. We study a specific control loop: a component verifier is evaluated on fresh policy outputs against the full success label and refreshed when that aggregate score falls. For a conjunctive target $y = F \wedge M$, its on-policy AUC is $(1-q)A_{\mathrm{own}} + qA_{\mathrm{cross}}$, where $q = \Pr[F=1 \mid y=0]$. As the policy masters $F$, $q$ can rise toward one, removing weight from $F$-failures and rewarding information about $M$. We call this on-policy audit collapse. We derive a sharp identified set, a complete-erasure threshold, and the exact point at which the audit can prefer a worse component verifier; its population optimum is the full-outcome predictor, not the component oracle. An exact oracle exhibits the collapse, a natural multi-label text control shows inversion can select a head with lower canonical $F$-AUC at the observed failure mixture, and a prediction-registered ECG study shows that acting on the audit can reduce off-policy $F$-AUC, transfer the damage to an unseen generator, and increase downstream constraint violations. Preserving own-failure support prevents the damage. Matching label-complexity bounds and a controlled-mixture audit give the corresponding repair: audit the component on its own failures, and keep those failures in the refresh distribution.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Test-Time Compute & Inference-Time Scaling]**: Asignar presupuesto computacional adaptativo en tiempo de inferencia según la complejidad del caso: descomponer cuestiones ambiguas en múltiples trayectorias de análisis, contrastar hipótesis rivales y aplicar verificación cruzada antes de emitir la conclusión.
  2. **[Protocolo de Verificación Intrínseca]**: Implementar un paso de auditoría independiente sobre cada afirmación fáctica y cita normativa/jurisprudencial antes de consolidar la respuesta final, rechazando cualquier inferencia no respaldada por evidencia documental directa.
  3. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  4. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.

---

### [arXiv:2610.28834] Where Should a Stuck Agent Spend Its Next Tokens? Causal Attribution of Inference-Time Resources
- **arXiv ID**: `2610.28834` (2610.28834v1)
- **Fecha de Publicación**: 2026-10-20
- **Categorías arXiv**: `cs.SE`, `cs.AI`, `cs.CL`
- **Eje Cognitivo**: Test-Time Compute & Inference-Time Scaling
- **Autores**: Saiyue Lyu, Jerrold Huang, Yunbei Zhang, Janet Wang, Zhenting Wang, Yingqiang Ge et al.
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.28834)](https://arxiv.org/abs/2610.28834) | [PDF (https://arxiv.org/pdf/2610.28834.pdf)](https://arxiv.org/pdf/2610.28834.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Inference-time scaling is often treated as a token-budget problem, but a failed coding agent can seek qualitatively different resources: computation, information, or feedback. We introduce Banzhaf Resource Attribution (BRA), a controlled factorial framework that measures each resource's marginal contribution to repair and its interactions while holding the failed state and revision protocol fixed. We evaluate six models on 194 function-level failures from MBPP+ and HumanEval+ and 126 repository-level failures from SWE-bench Verified. Task-relevant specifications consistently improve repair, whereas public-test feedback provides small gains and retrieved code little to none. The value of additional computation declines with model capability, while information remains useful; resource channels largely exhibit diminishing returns, although complementary information can reinforce itself. Yet three of four frontier models select feedback in 95-100% of cases and obtain lower gains than uniform random resource selection. BRA thus exposes a gap between the resources agents prefer and those that measurably improve repair.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Test-Time Compute & Inference-Time Scaling]**: Asignar presupuesto computacional adaptativo en tiempo de inferencia según la complejidad del caso: descomponer cuestiones ambiguas en múltiples trayectorias de análisis, contrastar hipótesis rivales y aplicar verificación cruzada antes de emitir la conclusión.
  2. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  3. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.

---

### [arXiv:2610.28623] Planning under Noise with Neural Operators
- **arXiv ID**: `2610.28623` (2610.28623v2)
- **Fecha de Publicación**: 2026-10-20
- **Categorías arXiv**: `cs.LG`, `cs.RO`
- **Eje Cognitivo**: Test-Time Compute & Inference-Time Scaling
- **Autores**: Michael Chen, Hong Chul Nam, Xi Deng, Anima Anandkumar
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.28623)](https://arxiv.org/abs/2610.28623) | [PDF (https://arxiv.org/pdf/2610.28623.pdf)](https://arxiv.org/pdf/2610.28623.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Planning under uncertain control execution noise requires reliable feedback policies across diverse environments. We introduce Planning Under Noise (PUN), a neural operator that learns noise-aware value fields for planning in unseen geometries. Building on an established screened-Poisson formulation of stochastic optimal control, we address two challenges: specifying boundary conditions that support navigation across varying geometries and efficiently computing fields with reliable gradients. Zero-Dirichlet obstacle boundaries terminate sampled paths at walls, weakening the goal signal along long routes and making it harder to estimate reliably. We instead impose reflecting Neumann conditions on obstacles and a Dirichlet condition at the goal, allowing sampled paths to continue exploring free space until they reach the target. To solve the resulting PDE without a configuration-space mesh, we extend a Monte Carlo (MC) solver, Walk on Stars (WoSt), to higher dimensions. However, local MC fluctuations can reverse estimated gradient directions and cause planning failures, making direct planning require costly sampling. PUN amortizes this computation by learning geometry-to-field mappings from noisy, partially converged Monte Carlo labels, avoiding expensive convergence for every training example. At inference, test-time scaling uses bounded local search guided by the predicted global field. We evaluate PUN on planning tasks across dimensions. Across four noise levels, PUN matches or outperforms all compared planners, achieving 95-100% success on the 4D replanning benchmark while maintaining the lowest runtime. At the highest tested noise level in 4D, PUN achieves 10.7-60.6% relative gains in success rate over other methods while running 3.29-32.15 times faster.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Test-Time Compute & Inference-Time Scaling]**: Asignar presupuesto computacional adaptativo en tiempo de inferencia según la complejidad del caso: descomponer cuestiones ambiguas en múltiples trayectorias de análisis, contrastar hipótesis rivales y aplicar verificación cruzada antes de emitir la conclusión.
  2. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  3. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  4. **[Búsqueda Deliberativa y Consenso Interno]**: Generar y contrastar múltiples líneas argumentales (argumento principal, eventuales defensas y criterio de Alzada) seleccionando la solución que maximice la coherencia interna y la estabilidad frente a una eventual apelación.

---

### [arXiv:2610.28294] Adaptive Replay Refinement: Allocating Test-Time Compute Between Revision and Resampling
- **arXiv ID**: `2610.28294` (2610.28294v1)
- **Fecha de Publicación**: 2026-10-20
- **Categorías arXiv**: `cs.CL`, `cs.LG`
- **Eje Cognitivo**: Test-Time Compute & Inference-Time Scaling
- **Autores**: Ahsan Bilal, Muhammad Ahmed Mohsin, Muhammad Umer, Ayesha Mohsin, Sarmad Bilal, Dean F. Hougen
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.28294)](https://arxiv.org/abs/2610.28294) | [PDF (https://arxiv.org/pdf/2610.28294.pdf)](https://arxiv.org/pdf/2610.28294.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Test-time scaling allocates additional inference compute to refining existing solutions or generating new ones. This raises a fundamental question: Should I keep improving this solution, or stop working on it and try a completely new solution? Existing methods make this decision using fixed refinement schedules, self-verification judgments, or learned controllers, which can waste compute or rely on signals that may be incorrect or require additional training. We introduce Adaptive Replay Refinement (ARR), a training-free method that detects when a stationary revision reaches a fixed point and reallocates the released compute to a new independent sample; replay decoding treats the current solution as a draft and verifies unchanged tokens in parallel, enabling efficient fixed-point detection. Across seven models from five families and seven benchmarks, ARR matches majority voting on three of five mathematical reasoning benchmarks at equal compute, while reducing critical-path serial passes by up to 2.4 times. On MATH500, ARR achieves 84.6% accuracy with only 41% of the serial passes required by majority voting. These results demonstrate that detecting refinement exhaustion enables adaptive reallocation from revision to independent sampling, improving inference efficiency while highlighting the limits of self-revision. Code is available at https://github.com/AhsanBilal7/adaptive_refine.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Test-Time Compute & Inference-Time Scaling]**: Asignar presupuesto computacional adaptativo en tiempo de inferencia según la complejidad del caso: descomponer cuestiones ambiguas en múltiples trayectorias de análisis, contrastar hipótesis rivales y aplicar verificación cruzada antes de emitir la conclusión.
  2. **[Protocolo de Verificación Intrínseca]**: Implementar un paso de auditoría independiente sobre cada afirmación fáctica y cita normativa/jurisprudencial antes de consolidar la respuesta final, rechazando cualquier inferencia no respaldada por evidencia documental directa.
  3. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  4. **[Búsqueda Deliberativa y Consenso Interno]**: Generar y contrastar múltiples líneas argumentales (argumento principal, eventuales defensas y criterio de Alzada) seleccionando la solución que maximice la coherencia interna y la estabilidad frente a una eventual apelación.

---

### [arXiv:2610.27889] Elicitation or Expansion? Demystifying Gains from Agent Harness Optimization
- **arXiv ID**: `2610.27889` (2610.27889v1)
- **Fecha de Publicación**: 2026-10-20
- **Categorías arXiv**: `cs.LG`
- **Eje Cognitivo**: Test-Time Compute & Inference-Time Scaling
- **Autores**: Younghyun Kim, Wooseok Seo, Minseo Kim, Seunghyuk Oh, Minjae Lee, Donghoon Kim et al.
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.27889)](https://arxiv.org/abs/2610.27889) | [PDF (https://arxiv.org/pdf/2610.27889.pdf)](https://arxiv.org/pdf/2610.27889.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Recent studies in harness optimization have shown substantial performance gains in language model agents without updating model weights. A well-designed harness more effectively leverages the underlying model's capabilities by shaping context, tool use, and execution workflows. However, naïve success rates alone do not fully characterize whether optimized harness yields more reliable success on tasks already within reach (elicitation) or a broader range of solvable tasks (expansion). This distinction is crucial for recursive self-improvement and evolutionary search, as expansion may provide a broader range of successful experiences to push the capability boundaries. Despite the growing significance, this distinction remains underexplored in harness optimization. We conduct a systematic analysis to study the effect of gains from harness optimization. Building on pass@k analyses in the reinforcement learning (RL) literature that compare models before and after RL training, we compare optimized harnesses with their pre-optimization counterparts. Specifically, we assess changes in reachable task coverage, compare harness optimization with model scaling and increased inference-time compute, and examine how gains vary with task difficulty. Across static prediction and dynamic tasks, we find that pass@1 advantages of harness over stronger interventions can reverse at larger attempt budgets and aggregate gains conceal shortfalls on hard tasks, underscoring the need for a fine-grained diagnosis.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Test-Time Compute & Inference-Time Scaling]**: Asignar presupuesto computacional adaptativo en tiempo de inferencia según la complejidad del caso: descomponer cuestiones ambiguas en múltiples trayectorias de análisis, contrastar hipótesis rivales y aplicar verificación cruzada antes de emitir la conclusión.
  2. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  3. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  4. **[Búsqueda Deliberativa y Consenso Interno]**: Generar y contrastar múltiples líneas argumentales (argumento principal, eventuales defensas y criterio de Alzada) seleccionando la solución que maximice la coherencia interna y la estabilidad frente a una eventual apelación.

---

### [arXiv:2610.27789] Foundations of the Scaling Law
- **arXiv ID**: `2610.27789` (2610.27789v1)
- **Fecha de Publicación**: 2026-10-20
- **Categorías arXiv**: `cs.LG`
- **Eje Cognitivo**: Test-Time Compute & Inference-Time Scaling
- **Autores**: Tianyu Zhao, Zhixiang Ren
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.27789)](https://arxiv.org/abs/2610.27789) | [PDF (https://arxiv.org/pdf/2610.27789.pdf)](https://arxiv.org/pdf/2610.27789.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Empirical scaling laws relate validation loss to model size, training exposure and compute, providing a quantitative basis for allocating resources. This technical note explains these relationships through three linked analyses. Geometric approximation connects spatial resolution, intrinsic dimension and smoothness to function error; the loss function determines how that error transfers to task risk. Spectral analysis combines feature visibility, covariance eigenvalues and target alignment to describe how additional data reduce unresolved predictive mass. Constrained optimization then gives the parameter-data balance and the training-inference trade-off. We also examine emergence and grokking, separating scoring thresholds from learning dynamics, and test-time scaling, separating candidate coverage from selected-answer accuracy. Applications to vision and molecular prediction show how domain-specific coordinates change the resource comparison. An $\mathrm{SE}(3)$ case study quantifies the dimension dependence of quotient-space approximation gains and compares optimized compute frontiers, alongside separate analyses of conformational coverage and correlated-sample precision.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Test-Time Compute & Inference-Time Scaling]**: Asignar presupuesto computacional adaptativo en tiempo de inferencia según la complejidad del caso: descomponer cuestiones ambiguas en múltiples trayectorias de análisis, contrastar hipótesis rivales y aplicar verificación cruzada antes de emitir la conclusión.
  2. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  3. **[Trazabilidad y Explicabilidad Técnica]**: Explicitar los fundamentos y pasos de derivación desde los datos de entrada hasta la conclusión dispositiva, garantizando auditabilidad completa del razonamiento.

---

### [arXiv:2610.27290] TEX: Test-Time Scaling Testing Agents via Execution-based Cross-Validation
- **arXiv ID**: `2610.27290` (2610.27290v1)
- **Fecha de Publicación**: 2026-10-19
- **Categorías arXiv**: `cs.AI`, `cs.CL`, `cs.LG`
- **Eje Cognitivo**: Test-Time Compute & Inference-Time Scaling
- **Autores**: Akash Gokul, Srijan Bansal, Yingbo Zhou, Semih Yavuz
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.27290)](https://arxiv.org/abs/2610.27290) | [PDF (https://arxiv.org/pdf/2610.27290.pdf)](https://arxiv.org/pdf/2610.27290.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Test-case generation is critical but remains challenging for language models. Existing test-time scaling methods either isolate candidates or aggregate traces, which do not scale to long-horizon tasks. We present TEX, a collaborative test-time scaling framework based on execution-driven cross-validation. TEX parallelizes agents to generate tests and patches, cross-executing each test against every patch to form a $K \times K$ feedback matrix. Agents use their matrix slices for refinement, enabling objective validation without verbose trace sharing. On SWT-Bench Verified, TEX achieves 86.4%, establishing a new state-of-the-art and improving +9.0% over single-agent baselines. Moreover, even random selection from TEX outputs (84.4%) surpasses the previous SOTA (84.0%), showing collaborative execution feedback improves solution quality, not just best-case samples. Our results highlight execution-grounded feedback as an effective scaling mechanism for long-horizon agentic tasks.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Test-Time Compute & Inference-Time Scaling]**: Asignar presupuesto computacional adaptativo en tiempo de inferencia según la complejidad del caso: descomponer cuestiones ambiguas en múltiples trayectorias de análisis, contrastar hipótesis rivales y aplicar verificación cruzada antes de emitir la conclusión.
  2. **[Protocolo de Verificación Intrínseca]**: Implementar un paso de auditoría independiente sobre cada afirmación fáctica y cita normativa/jurisprudencial antes de consolidar la respuesta final, rechazando cualquier inferencia no respaldada por evidencia documental directa.
  3. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  4. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.

---

### [arXiv:2610.27280] VPFlow: Value-Predictive Planning with Imperfect World Models for Offline Goal Reaching
- **arXiv ID**: `2610.27280` (2610.27280v1)
- **Fecha de Publicación**: 2026-10-19
- **Categorías arXiv**: `cs.LG`, `cs.AI`
- **Eje Cognitivo**: Test-Time Compute & Inference-Time Scaling
- **Autores**: Yunzhe Hu, Dong Xu
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.27280)](https://arxiv.org/abs/2610.27280) | [PDF (https://arxiv.org/pdf/2610.27280.pdf)](https://arxiv.org/pdf/2610.27280.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Offline goal-conditioned reinforcement learning enables skill acquisition by reaching any goal from any state without dense rewards. Model-based methods allow for planning by scaling test-time compute to solve complex tasks. Combining both holds appealing promise for pre-training on suboptimal demonstrations and zero-shot adaptation via goal specification and planning. Yet existing methods assume effective planning requires accurate next-state prediction in pixel or latent space. In this work, we show that value prediction is more useful for planning, whereas accurate state prediction is often unnecessary. Our key insight is that offline goal reaching naturally admits a closed-form Monte Carlo return, enabling value regression to replace temporal-difference bootstrapping. We use this return as the sole supervision for latent world models: imagined latents are trained to predict goal-reaching value rather than match future states, implicitly preventing representation collapse. These planning-oriented representations let imperfect world models imagine on the level sets of value field beyond dataset transitions. We then present VPFlow, a value-predictive planner that pairs the world models with a one-step flow policy and plans in its noise space via evolutionary search. It enables policy improvement with imagined generalized advantage and reduces out-of-distribution queries common in action-space planning. On 30 state and pixel OGBench datasets, VPFlow surpasses model-free baselines by at least 30.3 and 10.1 percentage points in success rate, respectively, and outperforms latent planners LeWorldModel, PLDM, and TD-MPC2. It achieves this despite a latent prediction error orders of magnitude larger than with state prediction, while minimizing this error lowers success rate. This demonstrates that value-predictive representations, not exact state prediction, are what offline planning requires.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Test-Time Compute & Inference-Time Scaling]**: Asignar presupuesto computacional adaptativo en tiempo de inferencia según la complejidad del caso: descomponer cuestiones ambiguas en múltiples trayectorias de análisis, contrastar hipótesis rivales y aplicar verificación cruzada antes de emitir la conclusión.
  2. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  3. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  4. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.
  5. **[Búsqueda Deliberativa y Consenso Interno]**: Generar y contrastar múltiples líneas argumentales (argumento principal, eventuales defensas y criterio de Alzada) seleccionando la solución que maximice la coherencia interna y la estabilidad frente a una eventual apelación.

---

### [arXiv:2610.26747] recAMPLIFY: Large-Scale Pretraining of Recursive Protein Language Models
- **arXiv ID**: `2610.26747` (2610.26747v1)
- **Fecha de Publicación**: 2026-10-19
- **Categorías arXiv**: `cs.LG`, `cs.AI`, `cs.CL`
- **Eje Cognitivo**: Test-Time Compute & Inference-Time Scaling
- **Autores**: Saurav Jha, Qianli Liao, Robert Vernon, Sarath Chandar, Quentin Fournier
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.26747)](https://arxiv.org/abs/2610.26747) | [PDF (https://arxiv.org/pdf/2610.26747.pdf)](https://arxiv.org/pdf/2610.26747.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Protein language models (pLMs) are powerful tools for protein annotation and mutation-effect prediction, but progress has largely depended on scaling model size and data, making them expensive and prone to memorization. Test-time scaling offers a complementary path, but methods developed for autoregressive LLMs do not transfer directly: masked encoders lack a generation loop, and amino acids do not verbalize in a reasoning language. Instead, we adapt recursive pretraining to masked pLMs, where a weight-tied Transformer core refines residue-aligned hidden states over an adjustable number of cycles. We instantiate this recipe as recAMPLIFY, a pLM with 155M unique parameters trained on the same 2T tokens as AMPLIFY-350M. Despite 56% fewer parameters, it improves CASP contact recovery and three out of four supervised tasks, notably raising fold accuracy by 22.5%. Because optimal depth for recAMPLIFY varies across tasks and assays, we then introduce Gated Mixture Recurrence (GMR), a framework that decodes each protein from a probability-weighted mixture of hidden states visited during recursion. GMR employs a learned residual gate at scalar, low-rank, or per-dimension resolution to control how much of each cycle's proposed update is accepted into the state. This unifies halting and gating into a single adaptive computation objective while recovering PonderNet-style halting as a special case without gates. Layered on top of recAMPLIFY, GMR further reduces expected layer depth by up to 37%, although the accuracy trade-off varies by task. Mechanistic analyses show that residual gating controls recurrence stability beyond the trained depth and that halt depth tracks biological properties.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Test-Time Compute & Inference-Time Scaling]**: Asignar presupuesto computacional adaptativo en tiempo de inferencia según la complejidad del caso: descomponer cuestiones ambiguas en múltiples trayectorias de análisis, contrastar hipótesis rivales y aplicar verificación cruzada antes de emitir la conclusión.
  2. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  3. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.

---

## EJE: PROCESS REWARD MODELS (PRM) & VERIFICACIÓN PASO A PASO

### [arXiv:2610.29498] A Strong MoE Is All You Need for Process Supervision
- **arXiv ID**: `2610.29498` (2610.29498v1)
- **Fecha de Publicación**: 2026-10-21
- **Categorías arXiv**: `cs.CL`, `cs.AI`
- **Eje Cognitivo**: Process Reward Models (PRM) & Verificación Paso a Paso
- **Autores**: Guanzhi Deng, Zengyan Liu, Haibo Wang, Kuan Wu, Shing Yin Wong, Sichun Luo et al.
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.29498)](https://arxiv.org/abs/2610.29498) | [PDF (https://arxiv.org/pdf/2610.29498.pdf)](https://arxiv.org/pdf/2610.29498.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Process reward models (PRMs) provide fine-grained supervision for multi-step reasoning, yet obtaining reliable process labels remains a central bottleneck. Existing approaches typically rely on human annotation, rollout-based estimation, or auxiliary verification. In this work, we explore a different source of process supervision natively exposed by Mixture-of-Experts (MoE) models: expert routing. We show that simple routing statistics provide an intrinsic process-confidence signal that is competitive with conventional output-logit confidence. Building on this observation, we construct routing confidence by combining overall routing mass, head routing mass, and within-step routing variation, and introduce RoCo-Rethink, which identifies the least confident reasoning step and selectively regenerates the subsequent trajectory. We further introduce RoCo-PRM, which uses a strong MoE to automatically annotate reasoning trajectories with routing-derived step scores and distills them into a standalone PRM. Across multiple MoE architectures and diverse reasoning tasks, both RoCo-Rethink and RoCo-PRM consistently outperform strong baselines, while RoCo-PRM transfers effectively across both model architectures and tasks. Our findings suggest that expert routing is more than a computational dispatch mechanism: it provides an architecture-native source of process supervision for reasoning.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Process Reward Models (PRM) & Verificación Paso a Paso]**: Evaluar y puntuar la validez lógica y normativa de cada paso intermedio del razonamiento (encuadre procesal, legitimación, presupuestos fácticos, subsunción normativa, costas) en lugar de evaluar únicamente la conclusión final.
  2. **[Protocolo de Verificación Intrínseca]**: Implementar un paso de auditoría independiente sobre cada afirmación fáctica y cita normativa/jurisprudencial antes de consolidar la respuesta final, rechazando cualquier inferencia no respaldada por evidencia documental directa.
  3. **[Supervisión Granular por Pasos (Step-Level PRM)]**: Validar secuencialmente cada considerando o nodo de decisión. Si un paso intermedio presenta incertidumbre o ambigüedad, podar esa rama de razonamiento y recalcular desde el último antecedente verificado.

---

### [arXiv:2610.25932] Keep the Lineages Alive: Diversity-Preserving SMC for Diffusion LLM Decoding
- **arXiv ID**: `2610.25932` (2610.25932v1)
- **Fecha de Publicación**: 2026-10-19
- **Categorías arXiv**: `cs.LG`, `cs.AI`, `cs.CL`, `stat.AP`, `stat.ML`
- **Eje Cognitivo**: Process Reward Models (PRM) & Verificación Paso a Paso
- **Autores**: Minoo Ahmadi, Seyedarmin Azizi, Mehdi Kamal, Massoud Pedram
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.25932)](https://arxiv.org/abs/2610.25932) | [PDF (https://arxiv.org/pdf/2610.25932.pdf)](https://arxiv.org/pdf/2610.25932.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Inference-time sequential Monte Carlo (SMC) decoding can improve the reasoning accuracy of masked diffusion language models (diffusion LLMs) without post-training by resampling a population of partial generations according to a reward. Its effectiveness therefore depends on the resampling step, which must concentrate computation on promising candidates while retaining enough diversity to explore alternative reasoning paths. The reward can be internal, the decoder's own confidence on the committed prefix, or external, a process reward model scoring that prefix. Under either reward, multinomial resampling can disrupt this balance by duplicating high-weight particles and discarding lineages that may still reach a correct solution. The effective sample size (ESS) does not register this loss: multinomial resampling resets it to its maximum even as distinct lineages disappear. To retain such lineages, we introduce lineage-preserving SMC (LP-SMC), which combines Chopthin resampling with an input weight floor. Instead of equalizing weights, Chopthin bounds the ratio between the largest and smallest weights it returns and carries the unequal weights forward. The floor limits how far below the maximum a weight may fall before resampling so that lineages with low early weight keep a chance to recover. Across mathematical-reasoning and code-generation benchmarks on two base models, LP-SMC raises oracle coverage, the fraction of problems with at least one correct particle, in every setting, by 1.8 to 25.6 points, and raises end-to-end accuracy under a common reward-model selector in eleven of twelve settings, by up to 7.9 points on LLaDA-1.5 and 18.3 on Dream-7B. The coverage gain persists under the external reward model, which suggests that diversity-preserving resampling and the guidance signal contribute separately to inference-time search.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Process Reward Models (PRM) & Verificación Paso a Paso]**: Evaluar y puntuar la validez lógica y normativa de cada paso intermedio del razonamiento (encuadre procesal, legitimación, presupuestos fácticos, subsunción normativa, costas) en lugar de evaluar únicamente la conclusión final.
  2. **[Supervisión Granular por Pasos (Step-Level PRM)]**: Validar secuencialmente cada considerando o nodo de decisión. Si un paso intermedio presenta incertidumbre o ambigüedad, podar esa rama de razonamiento y recalcular desde el último antecedente verificado.
  3. **[Búsqueda Deliberativa y Consenso Interno]**: Generar y contrastar múltiples líneas argumentales (argumento principal, eventuales defensas y criterio de Alzada) seleccionando la solución que maximice la coherencia interna y la estabilidad frente a una eventual apelación.

---

### [arXiv:2610.25852] MASIF: Implicit Failures for Process Observability in Multi-Agent Systems
- **arXiv ID**: `2610.25852` (2610.25852v1)
- **Fecha de Publicación**: 2026-10-19
- **Categorías arXiv**: `cs.AI`
- **Eje Cognitivo**: Process Reward Models (PRM) & Verificación Paso a Paso
- **Autores**: Yanwei Huang, Arpit Narechania, Atanu Sinha
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.25852)](https://arxiv.org/abs/2610.25852) | [PDF (https://arxiv.org/pdf/2610.25852.pdf)](https://arxiv.org/pdf/2610.25852.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Multi-agent systems (MAS) can complete a task despite local execution errors that are corrected, bypassed, or carried forward without individually determining its outcome. We call these implicit failures (IFs) and study them as signals for process observability beyond final task outcome. Across 1,828 traces from nine MAS-benchmark configurations, IFs occur in 54.3% of successful and 75.2% of failed traces. We develop taxonomies of error types and subsequent absorption mechanisms, supported by human and cross-model annotation audits. Counterfactual replay further probes how repairing an IF changes the final outcome. To examine the practical value of IFs, we evaluate IF-based best-of-N trace selection against existing process reward models, and introduce a novel RL algorithm, IF-GRPO, that uses IF costs to refine preferences among successful trajectories in GRPO. Experiments show that IF-GRPO exhibits some gains in accuracy and process metrics. Importantly, it exposes trade-offs between task performance, IF count and cost, and token-normalized IF density. Overall, our results show that IFs provide complementary process observability into how MAS reach their outcomes, including error recovery, propagation, and IF-based process differences that final task success alone does not expose.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Process Reward Models (PRM) & Verificación Paso a Paso]**: Evaluar y puntuar la validez lógica y normativa de cada paso intermedio del razonamiento (encuadre procesal, legitimación, presupuestos fácticos, subsunción normativa, costas) en lugar de evaluar únicamente la conclusión final.
  2. **[Supervisión Granular por Pasos (Step-Level PRM)]**: Validar secuencialmente cada considerando o nodo de decisión. Si un paso intermedio presenta incertidumbre o ambigüedad, podar esa rama de razonamiento y recalcular desde el último antecedente verificado.
  3. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  4. **[Búsqueda Deliberativa y Consenso Interno]**: Generar y contrastar múltiples líneas argumentales (argumento principal, eventuales defensas y criterio de Alzada) seleccionando la solución que maximice la coherencia interna y la estabilidad frente a una eventual apelación.

---

### [arXiv:2610.25269] EG-GRPO: Evidence-Guided Step-level Credit Assignment for Deep Search Agents
- **arXiv ID**: `2610.25269` (2610.25269v1)
- **Fecha de Publicación**: 2026-10-18
- **Categorías arXiv**: `cs.LG`, `cs.AI`
- **Eje Cognitivo**: Process Reward Models (PRM) & Verificación Paso a Paso
- **Autores**: Sijia Luo, Mengjie Gao, Yuxiao He, Mengshu Sun, Cuiping Li, Hong Chen et al.
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.25269)](https://arxiv.org/abs/2610.25269) | [PDF (https://arxiv.org/pdf/2610.25269.pdf)](https://arxiv.org/pdf/2610.25269.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> LLM-based search agents demonstrate strong capabilities in long-horizon information seeking and reasoning, typically trained via reinforcement learning. However, existing approaches predominantly rely on trajectory-level outcome rewards, providing limited supervision for complex search and reasoning processes. Although step-level credit assignment offers a promising solution, obtaining reliable and task-grounded supervision for open-ended search remains challenging. In this paper, we propose Evidence-Guided Group Relative Policy Optimization (EG-GRPO), a framework that derives step-level supervision from the evidence annotations available in synthetic deep search data. EG-GRPO identifies the first supporting citation for each required evidence claim and uses the newly acquired evidence to construct step-level process rewards. By representing the accumulated evidence as an evolving knowledge state, EG-GRPO further performs state-conditioned relative advantage estimation and combines the resulting step-level signal with the standard trajectory-level outcome advantage. Experiments on five challenging deep search benchmarks show that EG-GRPO generally outperforms standard GRPO and existing reward-enhanced and step-level RL baselines across different model scales. These results demonstrate that task-grounded evidence annotations can provide effective process supervision for credit assignment in deep search RL.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Process Reward Models (PRM) & Verificación Paso a Paso]**: Evaluar y puntuar la validez lógica y normativa de cada paso intermedio del razonamiento (encuadre procesal, legitimación, presupuestos fácticos, subsunción normativa, costas) en lugar de evaluar únicamente la conclusión final.
  2. **[Supervisión Granular por Pasos (Step-Level PRM)]**: Validar secuencialmente cada considerando o nodo de decisión. Si un paso intermedio presenta incertidumbre o ambigüedad, podar esa rama de razonamiento y recalcular desde el último antecedente verificado.
  3. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  4. **[Búsqueda Deliberativa y Consenso Interno]**: Generar y contrastar múltiples líneas argumentales (argumento principal, eventuales defensas y criterio de Alzada) seleccionando la solución que maximice la coherencia interna y la estabilidad frente a una eventual apelación.

---

### [arXiv:2610.23234] MultiAgent-OPD: End-to-End Training of Hierarchical Multi-Agent Systems with On-Policy Distillation
- **arXiv ID**: `2610.23234` (2610.23234v2)
- **Fecha de Publicación**: 2026-10-16
- **Categorías arXiv**: `cs.CL`
- **Eje Cognitivo**: Process Reward Models (PRM) & Verificación Paso a Paso
- **Autores**: Yuhan Sun, Jiaxin Zhao, Yongdong Luo, Yibo Hu, Meiguang Jin, Junfeng Ma et al.
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.23234)](https://arxiv.org/abs/2610.23234) | [PDF (https://arxiv.org/pdf/2610.23234.pdf)](https://arxiv.org/pdf/2610.23234.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> In a hierarchical multi-agent system, a Leader assigns tasks and subagents carry them out. Jointly training the Leader and the subagents is difficult because a final answer gives only indirect feedback to the subagents. An LLM judge can score the performance of the subagents, but these scores depend on the judge's own assessment of the quality of subagents' responses. We present MultiAgent-OPD, which combines on-policy distillation with reinforcement learning to jointly train a shared-parameter Leader-Searcher-Answerer team end to end. We first train a Teacher in a Searcher-Answerer workflow using answer correctness. During team training, the frozen Teacher scores student-generated search and summary tokens to provide local process supervision for the Searchers, while the Leader learns from team success and the Answerer from candidate correctness. Across seven datasets, the trained system reaches 38.68% macro avg@4, exceeding Prompted Critic by 4.06 percentage points and C-MAS + RL, the trained cascaded multiagent system, by 2.61 percentage points. The team also solves more questions within four attempts.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Process Reward Models (PRM) & Verificación Paso a Paso]**: Evaluar y puntuar la validez lógica y normativa de cada paso intermedio del razonamiento (encuadre procesal, legitimación, presupuestos fácticos, subsunción normativa, costas) en lugar de evaluar únicamente la conclusión final.
  2. **[Protocolo de Verificación Intrínseca]**: Implementar un paso de auditoría independiente sobre cada afirmación fáctica y cita normativa/jurisprudencial antes de consolidar la respuesta final, rechazando cualquier inferencia no respaldada por evidencia documental directa.
  3. **[Supervisión Granular por Pasos (Step-Level PRM)]**: Validar secuencialmente cada considerando o nodo de decisión. Si un paso intermedio presenta incertidumbre o ambigüedad, podar esa rama de razonamiento y recalcular desde el último antecedente verificado.
  4. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  5. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.
  6. **[Búsqueda Deliberativa y Consenso Interno]**: Generar y contrastar múltiples líneas argumentales (argumento principal, eventuales defensas y criterio de Alzada) seleccionando la solución que maximice la coherencia interna y la estabilidad frente a una eventual apelación.

---

### [arXiv:2610.23223] Process Reward Modeling with Reliability- and Conservatism-Aware Bayesian Belief
- **arXiv ID**: `2610.23223` (2610.23223v1)
- **Fecha de Publicación**: 2026-10-16
- **Categorías arXiv**: `cs.LG`
- **Eje Cognitivo**: Process Reward Models (PRM) & Verificación Paso a Paso
- **Autores**: Zhongjian Qiao, Zhixiang Zhou, Jiafei Lyu, Peisong Wang, Qiaosheng Zhang, Siyang Gao et al.
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.23223)](https://arxiv.org/abs/2610.23223) | [PDF (https://arxiv.org/pdf/2610.23223.pdf)](https://arxiv.org/pdf/2610.23223.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Process Reward Models (PRMs) play a central role in test-time scaling for large language model (LLM) reasoning. However, PRMs may provide inaccurate process rewards for test-time scaling, which we identify as arising from two sources of uncertainty: (1) \textit{PRM uncertainty} that arises from insufficient supervision data and imperfect PRM training; and (2) \textit{policy uncertainty} that results from the mismatch between the policy to collect supervision data and the policy for test-time scaling, leading to systematic reward overestimation. Previous studies fail to jointly consider both uncertainties. To bridge this gap, we propose BayesianPRM, which treats the process reward as a random variable within a reward hypothesis space and maintains a Bayesian belief over it. Since exact Bayesian inference over the continuous hypothesis space is generally intractable, we discretize the reward hypothesis space with a reward ensemble and introduce two complementary belief updates, each targeting one source of uncertainty: (1) to address PRM uncertainty, we introduce \textit{reliability-aware belief updating} that measures how well each ensemble member explains the supervision data and updates the belief with an amortized belief network optimized by the evidence lower bound (ELBO); and (2) to tackle policy uncertainty, we propose \textit{conservatism-aware belief calibration} which further reweights the belief toward lower rewards to suppress overestimation. These two updates yield a reliability- and conservatism-aware Bayesian belief, whose expectation determines the process reward. Experiments on multimodal reasoning benchmarks indicate that BayesianPRM consistently yields more accurate process reward estimates while enhancing test-time scaling performance.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Process Reward Models (PRM) & Verificación Paso a Paso]**: Evaluar y puntuar la validez lógica y normativa de cada paso intermedio del razonamiento (encuadre procesal, legitimación, presupuestos fácticos, subsunción normativa, costas) en lugar de evaluar únicamente la conclusión final.
  2. **[Supervisión Granular por Pasos (Step-Level PRM)]**: Validar secuencialmente cada considerando o nodo de decisión. Si un paso intermedio presenta incertidumbre o ambigüedad, podar esa rama de razonamiento y recalcular desde el último antecedente verificado.
  3. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.

---

### [arXiv:2610.23181] Tree-Aware Posterior Distillation for Long-Horizon Agentic Reinforcement Learning
- **arXiv ID**: `2610.23181` (2610.23181v1)
- **Fecha de Publicación**: 2026-10-16
- **Categorías arXiv**: `cs.LG`, `cs.AI`, `cs.CL`
- **Eje Cognitivo**: Process Reward Models (PRM) & Verificación Paso a Paso
- **Autores**: Heming Zou, Qi Wang, Yixiu Mao, Yun Qu, Yuyi Guo, Zeyuan Liu et al.
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.23181)](https://arxiv.org/abs/2610.23181) | [PDF (https://arxiv.org/pdf/2610.23181.pdf)](https://arxiv.org/pdf/2610.23181.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Reinforcement learning with verifiable rewards has become a scalable post-training paradigm for large language models. However, training agents over long-horizon interactions presents two challenges: using only terminal rewards makes turn-level credit assignment sparse and high-variance, while sequential mini-batch updates on a fixed rollout batch introduce policy staleness as the current policy drifts from the behavior policy. Existing approaches obtain denser credit via learned critics, process reward models, or on-policy distillation, but they rely on a value network, step-level annotations, or a stronger external teacher that increase training complexity. Meanwhile, importance sampling and clipping mitigate policy drift, but they do not specify a finite target that stops sequential updates from overshooting. In this work, we introduce TreeOPSD, a critic-free, tree-aware posterior self-distillation framework for long-horizon agentic reinforcement learning. Treating each interaction turn as a tree node, TreeOPSD branches alternative continuations from shared prefixes and recursively backs up terminal rewards into implicit turn-level credit. It then maps each credit to a closed-form, bounded teacher distribution parameterized by the likelihood ratio relative to the frozen behavior policy. Minimizing the divergence between this teacher and the student policy recovers the policy-gradient direction as the tangent at the behavior policy while bounding updates toward a finite target across sequential mini-batches. Empirically, TreeOPSD improves agentic capabilities across several competitive benchmarks and model scales, especially for long-horizon tasks, e.g., raising the average accuracy of Qwen3-30B-A3B-Thinking-2507 by 4.97 points over GRPO on the Deep Research setting.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Process Reward Models (PRM) & Verificación Paso a Paso]**: Evaluar y puntuar la validez lógica y normativa de cada paso intermedio del razonamiento (encuadre procesal, legitimación, presupuestos fácticos, subsunción normativa, costas) en lugar de evaluar únicamente la conclusión final.
  2. **[Protocolo de Verificación Intrínseca]**: Implementar un paso de auditoría independiente sobre cada afirmación fáctica y cita normativa/jurisprudencial antes de consolidar la respuesta final, rechazando cualquier inferencia no respaldada por evidencia documental directa.
  3. **[Supervisión Granular por Pasos (Step-Level PRM)]**: Validar secuencialmente cada considerando o nodo de decisión. Si un paso intermedio presenta incertidumbre o ambigüedad, podar esa rama de razonamiento y recalcular desde el último antecedente verificado.
  4. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  5. **[Búsqueda Deliberativa y Consenso Interno]**: Generar y contrastar múltiples líneas argumentales (argumento principal, eventuales defensas y criterio de Alzada) seleccionando la solución que maximice la coherencia interna y la estabilidad frente a una eventual apelación.

---

### [arXiv:2610.23051] Agentic In-Context Learning: What Algorithms Can Transformers Learn in Closed-Loop Interaction?
- **arXiv ID**: `2610.23051` (2610.23051v1)
- **Fecha de Publicación**: 2026-10-16
- **Categorías arXiv**: `cs.AI`
- **Eje Cognitivo**: Process Reward Models (PRM) & Verificación Paso a Paso
- **Autores**: Shiguang Wu, Yaqing Wang, Quanming Yao
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.23051)](https://arxiv.org/abs/2610.23051) | [PDF (https://arxiv.org/pdf/2610.23051.pdf)](https://arxiv.org/pdf/2610.23051.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> The learning algorithm view of in-context learning (ICL) studies how fixed-parameter Transformers learn from supplied examples. Language model agents extend this setting through interaction: their actions determine what evidence enters context next. We call this regime Agentic In-Context Learning (Agentic ICL). Existing studies largely depend on externally supplied contexts or reward-bearing interaction histories, while work on general tool-using agents lacks a learning algorithm view. We represent an interactive learner by its state, update, and decision rule, covering active learning, bandits, and online reinforcement learning (RL). For expressivity, we construct causal Transformers that approximate these algorithms over a finite horizon, and bound the resulting loss in return. For training, we characterize when optimizing process rewards preserves behavior that maximizes the final outcome. Distillation experiments show that Transformers can learn to execute three representative recursions. We then train models from outcome or process rewards without oracle action or state targets, as in RL post-training. Different rewards yield distinct decision policies. Improving the alignment of process supervision with outcome-optimal action preferences shifts learned decisions accordingly. Such behavioral differences persist in a pretrained language model across textual paraphrases.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Process Reward Models (PRM) & Verificación Paso a Paso]**: Evaluar y puntuar la validez lógica y normativa de cada paso intermedio del razonamiento (encuadre procesal, legitimación, presupuestos fácticos, subsunción normativa, costas) en lugar de evaluar únicamente la conclusión final.
  2. **[Supervisión Granular por Pasos (Step-Level PRM)]**: Validar secuencialmente cada considerando o nodo de decisión. Si un paso intermedio presenta incertidumbre o ambigüedad, podar esa rama de razonamiento y recalcular desde el último antecedente verificado.
  3. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  4. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.

---

### [arXiv:2610.22331] KnowGPO: Knowledge-Grouped Policy Optimization for Search Agents
- **arXiv ID**: `2610.22331` (2610.22331v1)
- **Fecha de Publicación**: 2026-10-15
- **Categorías arXiv**: `cs.AI`
- **Eje Cognitivo**: Process Reward Models (PRM) & Verificación Paso a Paso
- **Autores**: Siqi Chen, Zhengxi Lu, Yuchen Yan, Xingyu Wu, Qipeng Chen, Xin Zhang et al.
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.22331)](https://arxiv.org/abs/2610.22331) | [PDF (https://arxiv.org/pdf/2610.22331.pdf)](https://arxiv.org/pdf/2610.22331.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Deep search agents solve knowledge-intensive tasks through long-horizon, multi-turn interactions, where assigning credit to individual search decisions is fundamentally difficult. Outcome-based reinforcement learning provides only a single terminal reward shared across an entire trajectory. Recent process-supervision methods aim to assign credit at finer granularity, but they typically anchor credit to either surface-level trajectory states or model-internal signals, both of which become unreliable in deep search where observations are heterogeneous and retrieved contexts are long and noisy. We propose KnowGPO, a reinforcement learning framework that aligns trajectories by the task-relevant knowledge they have acquired rather than by their surface observations. For each query, KnowGPO decomposes the information required to derive the answer into atomic knowledge conditions, and represents the state of a trajectory at each step by the subset of conditions it has satisfied. Trajectories sharing the same knowledge state are grouped for within-group comparison, and the incremental knowledge gain between consecutive steps serves as an environment-grounded process reward. Experiments on Xbench, BrowseComp-ZH, and GAIA show KnowGPO consistently outperforms outcome-only (GRPO) and process-supervision baselines (GiGPO, IGPO) by 3.8 to 4.2 points, with our 8B model rivaling or exceeding most 32B open-source systems.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Process Reward Models (PRM) & Verificación Paso a Paso]**: Evaluar y puntuar la validez lógica y normativa de cada paso intermedio del razonamiento (encuadre procesal, legitimación, presupuestos fácticos, subsunción normativa, costas) en lugar de evaluar únicamente la conclusión final.
  2. **[Supervisión Granular por Pasos (Step-Level PRM)]**: Validar secuencialmente cada considerando o nodo de decisión. Si un paso intermedio presenta incertidumbre o ambigüedad, podar esa rama de razonamiento y recalcular desde el último antecedente verificado.
  3. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  4. **[Búsqueda Deliberativa y Consenso Interno]**: Generar y contrastar múltiples líneas argumentales (argumento principal, eventuales defensas y criterio de Alzada) seleccionando la solución que maximice la coherencia interna y la estabilidad frente a una eventual apelación.

---

### [arXiv:2610.21496] OPRD: On-Policy Reminder Distillation for Long-Horizon Coding Agents
- **arXiv ID**: `2610.21496` (2610.21496v2)
- **Fecha de Publicación**: 2026-10-15
- **Categorías arXiv**: `cs.CL`
- **Eje Cognitivo**: Process Reward Models (PRM) & Verificación Paso a Paso
- **Autores**: Yuechen Luo, Zhiyi Lai, Miao Ziqi, Zihang Xu, Jingxuan Xu, Songwei Yu et al.
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.21496)](https://arxiv.org/abs/2610.21496) | [PDF (https://arxiv.org/pdf/2610.21496.pdf)](https://arxiv.org/pdf/2610.21496.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Reliable repository-level coding requires agents not only to generate correct code but also to preserve constraints and respond to tool feedback across long interactions. However, our diagnostic analysis shows that agents often fail to act on relevant information already available in context, while final Pass/Fail outcomes provide only sparse process supervision. We introduce On-Policy Reminder Distillation (OPRD), which combines Multi-Scope Reminder supervision with outcome-based routing on reminder-free student rollouts. Successful rollouts provide autoregressive self-imitation targets, whereas failed rollouts receive Reminder-conditioned reverse-KL supervision from a teacher that re-evaluates the same student-generated prefixes. A Global Reminder converts final-test diagnostics into trajectory-level guidance, while Turn-local Reminders apply only to the next decision following the relevant environment observation. The teacher and student share a two-stage initialization from Coding SFT and Instruction-Following (IF) SFT. At inference, the student operates without Reminders. On SWE-bench Verified, SWE-bench Pro, and SWE-bench Multilingual, OPRD improves the benchmark-averaged task resolution rate by 11.3 points over the open-source Qwen3.5-4B base model. Under the same diagnostic protocol, it reduces the aggregate error-event count from 446 to 222, a 50.2% reduction.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Process Reward Models (PRM) & Verificación Paso a Paso]**: Evaluar y puntuar la validez lógica y normativa de cada paso intermedio del razonamiento (encuadre procesal, legitimación, presupuestos fácticos, subsunción normativa, costas) en lugar de evaluar únicamente la conclusión final.
  2. **[Supervisión Granular por Pasos (Step-Level PRM)]**: Validar secuencialmente cada considerando o nodo de decisión. Si un paso intermedio presenta incertidumbre o ambigüedad, podar esa rama de razonamiento y recalcular desde el último antecedente verificado.
  3. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  4. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.

---

### [arXiv:2610.21362] LTM: Latent Transition Based In-Context Memory for Vision-Language-Action Models
- **arXiv ID**: `2610.21362` (2610.21362v1)
- **Fecha de Publicación**: 2026-10-15
- **Categorías arXiv**: `cs.RO`, `cs.AI`
- **Eje Cognitivo**: Process Reward Models (PRM) & Verificación Paso a Paso
- **Autores**: Qixin Sun, WenLong Gao, Xiansheng Chen, Zhongyuan Wang, Si Liu, Pengwei Wang
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.21362)](https://arxiv.org/abs/2610.21362) | [PDF (https://arxiv.org/pdf/2610.21362.pdf)](https://arxiv.org/pdf/2610.21362.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Robotic manipulation often requires remembering interactions that are no longer visible. We introduce Latent Transition Memory (LTM), which stores history as compact latent transitions between consecutive observations. Instantiated on $π_{0.5}$ as LTM-$π$, our method uses a frozen latent action encoder, a lightweight adapter, and causal KV caching for incremental inference without memory-specific semantic annotations or external reasoning-model calls. With DreamDojo transitions, LTM-$π$ achieves 58.54% success on RoboMME and 80.5% on LIBERO-Mem, performing best among baselines without external reasoning models or memory-specific annotations. Ablations support the contribution of transition content beyond temporal cues and the efficiency of delayed memory admission. Scaling RoboMME demonstrations tenfold improves success from 57.67% to 87.50%, while a Cup Swap diagnostic highlights the role of process supervision in temporal composition. Under a 200-token memory budget, success remains 84.00%, versus 87.50% without compression. Finally, real-robot counting success improves from 11.25% to 82.50%. Together, these results demonstrate the effectiveness, scalability, and efficiency of latent transition memory, highlighting its capacity for complex temporal information, bounded-context operation, and real-world robotic control.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Process Reward Models (PRM) & Verificación Paso a Paso]**: Evaluar y puntuar la validez lógica y normativa de cada paso intermedio del razonamiento (encuadre procesal, legitimación, presupuestos fácticos, subsunción normativa, costas) en lugar de evaluar únicamente la conclusión final.
  2. **[Supervisión Granular por Pasos (Step-Level PRM)]**: Validar secuencialmente cada considerando o nodo de decisión. Si un paso intermedio presenta incertidumbre o ambigüedad, podar esa rama de razonamiento y recalcular desde el último antecedente verificado.
  3. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  4. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.

---

### [arXiv:2610.21346] ARGUS: An Agenda-Driven Framework for Reliable User Simulation
- **arXiv ID**: `2610.21346` (2610.21346v1)
- **Fecha de Publicación**: 2026-10-15
- **Categorías arXiv**: `cs.AI`
- **Eje Cognitivo**: Process Reward Models (PRM) & Verificación Paso a Paso
- **Autores**: Hang Zheng, Nan Jiang, Zichen Zhu, Zixu Yang, Zhiyang Tang, Shuai Fan et al.
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.21346)](https://arxiv.org/abs/2610.21346) | [PDF (https://arxiv.org/pdf/2610.21346.pdf)](https://arxiv.org/pdf/2610.21346.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> High-fidelity user simulators are essential for evaluating and training agents in interactive environments. However, current LLM-based simulators struggle with reliability issues, such as goal omission and policy non-compliance. We propose ARGUS (Agenda-dRiven Goal-oriented User Simulator), a neuro-symbolic framework that maintains the user's goal state using a dynamic agenda stack manipulated via symbolic operations. By rigorously decoupling state tracking from natural language generation, ARGUS facilitates strict goal progression and constraint-aligned interactions. For cost-efficient deployment, we distill ARGUS into compact models using a unified pipeline: evaluator-guided SFT followed by online RL with dense step-level rewards. To rigorously evaluate behavioral fidelity, we introduce a rubric-based metric Composite Behavioral Score (CBS). Evaluations on $τ^3$-Bench and MultiWOZ demonstrate the significant superiority of the ARGUS architecture and the efficacy of our training pipeline. Code and data will be released soon.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Process Reward Models (PRM) & Verificación Paso a Paso]**: Evaluar y puntuar la validez lógica y normativa de cada paso intermedio del razonamiento (encuadre procesal, legitimación, presupuestos fácticos, subsunción normativa, costas) en lugar de evaluar únicamente la conclusión final.
  2. **[Supervisión Granular por Pasos (Step-Level PRM)]**: Validar secuencialmente cada considerando o nodo de decisión. Si un paso intermedio presenta incertidumbre o ambigüedad, podar esa rama de razonamiento y recalcular desde el último antecedente verificado.
  3. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  4. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  5. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.

---

## EJE: REASONING IN LLMS (DELIBERATIVE, CHAIN-OF-THOUGHT & SELF-VERIFICATION)

### [arXiv:2610.31376] Certified Execution Harness for Agentic AI: Safe and Least-Intrusive Petri-Net Supervisory Control Between Reasoning and Action
- **arXiv ID**: `2610.31376` (2610.31376v1)
- **Fecha de Publicación**: 2026-10-22
- **Categorías arXiv**: `cs.AI`, `eess.SY`
- **Eje Cognitivo**: Reasoning in LLMs (Deliberative, Chain-of-Thought & Self-Verification)
- **Autores**: Chao Gu, Quanyan Zhu
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.31376)](https://arxiv.org/abs/2610.31376) | [PDF (https://arxiv.org/pdf/2610.31376.pdf)](https://arxiv.org/pdf/2610.31376.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> This paper studies the problem of safe tool execution for large language model (LLM) agents under prompt injection. Using Petri nets, we formalize the execution harness between the LLM and its tools as a supervisory control problem, in which marks represent capabilities, approvals and budgets. Since a transition fires only if the marks it needs are present, an injected request whose preconditions are unmet or already spent is refused regardless of its wording. Treating tool outcomes as uncontrollable, we enforce safety by the conventional maximally permissive supervisor, and this safety transfers to the running system under four assumptions. Moreover, to capture an agent that may propose again after a refusal, we introduce the notion of a replanning closed loop, in which each retry costs an inference call. We show that, in this loop, the conventional supervisor can be arbitrarily more intrusive than a stricter safe one. Furthermore, for a given proposer model, the maximally permissive least-intrusive supervisor is characterized as a value-threshold refinement of the conventional one. Under precise conditions, this refinement orders two concurrent actions by at most one monitor place. On an autonomous release agent, we find by synthesis that safe deployment requires a step that the supervisor can refuse after a rollout starts.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Reasoning in LLMs (Deliberative, Chain-of-Thought & Self-Verification)]**: Estructurar cadenas de razonamiento explícitas (Chain-of-Thought deliberativo) separando estrictamente la premisa fáctica probada, la premisa normativa vigente y el juicio de subsunción, ejecutando un pase de autoverificación contra alucinaciones o saltos lógicos.
  2. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  3. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  4. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.

---

### [arXiv:2610.31119] Constraint Reasoning and Large Language Models Join Forces: Providing Contrastive Explanations for Real-World Optimisation-Based Applications
- **arXiv ID**: `2610.31119` (2610.31119v1)
- **Fecha de Publicación**: 2026-10-22
- **Categorías arXiv**: `cs.AI`
- **Eje Cognitivo**: Reasoning in LLMs (Deliberative, Chain-of-Thought & Self-Verification)
- **Autores**: Roger X. Lera-Leri, Filippo Bistaffa, Athina Georgara, Juan A. Rodríguez-Aguilar
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.31119)](https://arxiv.org/abs/2610.31119) | [PDF (https://arxiv.org/pdf/2610.31119.pdf)](https://arxiv.org/pdf/2610.31119.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> We focus on optimisation-based Decision Support Systems in real-world applications. In this context, we aim to provide contrastive explanations that answer users' questions about recommendations based on the solution of an optimisation problem, specifically a Mixed-Integer Program (MIP). Addressing this endeavour is crucial to ensure human oversight of the decisions implemented, as required by international guidelines on trustworthy and responsible automated decision-making systems. We propose a novel methodology that combines constraint reasoning techniques and Large Language Models (LLMs) to generate contrastive explanations for optimisation problems encoded as MIPs. Although LLMs have shown impressive capabilities in Natural Language processing, they can produce incorrect answers due to reasoning limitations. To overcome these limitations, we leverage constraint reasoning techniques to distil the information necessary to produce an explanation, which is then passed as input to an LLM as the so-called graph of reasons. Such a graph captures the semantics and the relationships among constraints of the optimisation problem. Results on real-world scheduling domains show that incorporating constraint reasoning improves explanations generated by the LLM. In particular, using the graph of reasons enables the LLM to produce natural-language explanations that include more relevant reasons while reducing errors compared to explanations generated without this structure.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Reasoning in LLMs (Deliberative, Chain-of-Thought & Self-Verification)]**: Estructurar cadenas de razonamiento explícitas (Chain-of-Thought deliberativo) separando estrictamente la premisa fáctica probada, la premisa normativa vigente y el juicio de subsunción, ejecutando un pase de autoverificación contra alucinaciones o saltos lógicos.
  2. **[Supervisión Granular por Pasos (Step-Level PRM)]**: Validar secuencialmente cada considerando o nodo de decisión. Si un paso intermedio presenta incertidumbre o ambigüedad, podar esa rama de razonamiento y recalcular desde el último antecedente verificado.
  3. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.

---

### [arXiv:2610.31000] SecLog-Bench: A Scalable Benchmark for Cybersecurity Log Reasoning with Scaffolded Evidence
- **arXiv ID**: `2610.31000` (2610.31000v1)
- **Fecha de Publicación**: 2026-10-22
- **Categorías arXiv**: `cs.CR`, `cs.AI`
- **Eje Cognitivo**: Reasoning in LLMs (Deliberative, Chain-of-Thought & Self-Verification)
- **Autores**: Yifan Wang, Dongliang Xu, Xiaoyong Li, Jing Li, Peter S. Pan, Yue Yao
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.31000)](https://arxiv.org/abs/2610.31000) | [PDF (https://arxiv.org/pdf/2610.31000.pdf)](https://arxiv.org/pdf/2610.31000.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Large language models (LLMs) have shown strong potential for cybersecurity, leading to growing interest in LLM-based automated cybersecurity log analysis. However, current datasets (1) are limited in scale; (2) rely mainly on single-source evidence; and (3) have only binary or multi-class attack labels, without dense annotations of the reasoning process. To address these limitations, SecLog-Bench has three key features. First, we build an extensible simulation platform that covers 29 attack scenarios, supports repeated execution and the integration of new scenarios, and enables scalable generation of cybersecurity logs with attack-stage labels. Second, we use multi-source logs, including audit logs, application logs, and network traffic, to jointly analyze cyber attacks. Third, we annotate each sample with the essential context for cybersecurity log reasoning and a structured step-by-step evidence chain. We evaluate eight mainstream LLMs on this benchmark for post-detection attack-progress reasoning. Results show that, when provided with scaffolded evidence, current LLMs exhibit modest capability in attack-progress reasoning, with the best model achieving only 44.44% accuracy and 45.07% Macro-F1. Their reasoning remains unreliable; i.e., the highest Stage Reasoning F1 (SRF1) score is only 54.87%. Moreover, even correct predictions may be accompanied by flawed reasoning, and reasoning quality is often misaligned with prediction accuracy.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Reasoning in LLMs (Deliberative, Chain-of-Thought & Self-Verification)]**: Estructurar cadenas de razonamiento explícitas (Chain-of-Thought deliberativo) separando estrictamente la premisa fáctica probada, la premisa normativa vigente y el juicio de subsunción, ejecutando un pase de autoverificación contra alucinaciones o saltos lógicos.
  2. **[Supervisión Granular por Pasos (Step-Level PRM)]**: Validar secuencialmente cada considerando o nodo de decisión. Si un paso intermedio presenta incertidumbre o ambigüedad, podar esa rama de razonamiento y recalcular desde el último antecedente verificado.
  3. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.

---

### [arXiv:2610.30953] Measuring the Reasoning-Action Coupling in Driving Vision-Language-Action Models through Counterfactuals
- **arXiv ID**: `2610.30953` (2610.30953v1)
- **Fecha de Publicación**: 2026-10-22
- **Categorías arXiv**: `cs.AI`
- **Eje Cognitivo**: Reasoning in LLMs (Deliberative, Chain-of-Thought & Self-Verification)
- **Autores**: Gabriel Manalu, Saad Wazir, Thao Do, Seongah Kim, Hyeontaek Hwang, Tolcha Yalew Kidane et al.
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.30953)](https://arxiv.org/abs/2610.30953) | [PDF (https://arxiv.org/pdf/2610.30953.pdf)](https://arxiv.org/pdf/2610.30953.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Driving vision-language-action (VLA) models bring an appealing form of explainability to a safety-critical domain, since a system that can state the reasons for its maneuvers offers the transparency that deployment and public trust in autonomous driving demand. These models read the world into language before they act on it, describing the scene and reasoning over it in text that ranges from chain-of-thought to multi-stage question answering on the way to a trajectory. That framing quietly assumes two separable properties, namely that the trajectory follows the generated reasoning and that the generated reasoning tracks the causes that actually produce the trajectory. To thoroughly investigate these properties, we apply causal, counterfactual interventions to four driving VLAs across different benchmarks. First, we perturb the models' own reasoning and show that altering its meaning produces small trajectory changes relative to blanking the same models' camera inputs, a pattern that persists across benchmarks and model architectures. We then construct scene-level counterfactuals through photorealistic removal of key objects named in the models' reasoning and analyze whether the generated reasoning and trajectories track these changes. Overall, our findings indicate that the reasoning these models present to account for their resulting driving behavior is weakly coupled to that behavior itself, pointing to limits on the explainability these systems are intended to provide.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Reasoning in LLMs (Deliberative, Chain-of-Thought & Self-Verification)]**: Estructurar cadenas de razonamiento explícitas (Chain-of-Thought deliberativo) separando estrictamente la premisa fáctica probada, la premisa normativa vigente y el juicio de subsunción, ejecutando un pase de autoverificación contra alucinaciones o saltos lógicos.
  2. **[Protocolo de Verificación Intrínseca]**: Implementar un paso de auditoría independiente sobre cada afirmación fáctica y cita normativa/jurisprudencial antes de consolidar la respuesta final, rechazando cualquier inferencia no respaldada por evidencia documental directa.
  3. **[Supervisión Granular por Pasos (Step-Level PRM)]**: Validar secuencialmente cada considerando o nodo de decisión. Si un paso intermedio presenta incertidumbre o ambigüedad, podar esa rama de razonamiento y recalcular desde el último antecedente verificado.

---

### [arXiv:2610.30946] Tracing Hallucinations in LLM Reasoning for UML Class Diagram Generation: An Empirical Taxonomy and Mitigation Study
- **arXiv ID**: `2610.30946` (2610.30946v1)
- **Fecha de Publicación**: 2026-10-22
- **Categorías arXiv**: `cs.SE`, `cs.CL`
- **Eje Cognitivo**: Reasoning in LLMs (Deliberative, Chain-of-Thought & Self-Verification)
- **Autores**: Mojdeh Rahmanian, Foutse Khomh, Ashkan Sami, Yanchao Yu
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.30946)](https://arxiv.org/abs/2610.30946) | [PDF (https://arxiv.org/pdf/2610.30946.pdf)](https://arxiv.org/pdf/2610.30946.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Large Language Models (LLMs) can generate UML class diagrams from natural language requirements, but hallucinations may compromise the correctness and completeness of the resulting diagrams. Existing evaluations mostly assess the final diagram, without examining the intermediate traces of reasoning-capable LLMs, which can reveal where these hallucinations arise. We develop an empirical taxonomy of eleven hallucination sub-types organised into three dimensions: Prompt Faithfulness (deviations between requirements and reasoning), Code Faithfulness (discrepancies between reasoning and generated PlantUML code), and Reasoning Quality (problems within the reasoning). The taxonomy was derived from 60 manually annotated DeepSeek-R1 traces, applied to 120 further DeepSeek-R1 traces through a dual-LLM annotation pipeline, and examined on 20 DeepSeek-V4-Pro traces. Code Faithfulness was the most frequent dimension for DeepSeek-R1 in both datasets, whereas Prompt Faithfulness dominated for DeepSeek-V4-Pro, suggesting model-dependent failure patterns. In the manually annotated traces, reasoning-trace length showed no significant monotonic association with hallucination frequency, whereas requirement complexity was negatively associated with it, particularly for Prompt Faithfulness errors. In a mitigation experiment on 13 Golden UML ModelSet cases with three Qwen3-based models, adding Prompt Faithfulness and Reasoning Quality constraints to the generation prompt raised the pooled mean F1 score by 4.0 percentage points, whereas a post-hoc Code Faithfulness review provided no consistent further benefit. Relationship modelling remained the lowest-scoring element throughout. These results suggest that localising hallucinations within the generation process can inform targeted, prompt-based mitigation. Whether these findings generalise beyond the DeepSeek and Qwen3 model families remains to be tested.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Reasoning in LLMs (Deliberative, Chain-of-Thought & Self-Verification)]**: Estructurar cadenas de razonamiento explícitas (Chain-of-Thought deliberativo) separando estrictamente la premisa fáctica probada, la premisa normativa vigente y el juicio de subsunción, ejecutando un pase de autoverificación contra alucinaciones o saltos lógicos.
  2. **[Protocolo de Verificación Intrínseca]**: Implementar un paso de auditoría independiente sobre cada afirmación fáctica y cita normativa/jurisprudencial antes de consolidar la respuesta final, rechazando cualquier inferencia no respaldada por evidencia documental directa.
  3. **[Supervisión Granular por Pasos (Step-Level PRM)]**: Validar secuencialmente cada considerando o nodo de decisión. Si un paso intermedio presenta incertidumbre o ambigüedad, podar esa rama de razonamiento y recalcular desde el último antecedente verificado.
  4. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.

---

### [arXiv:2610.30796] GIFT: Gradient Informed Filtering for Distillation Augmented Reasoning RL
- **arXiv ID**: `2610.30796` (2610.30796v1)
- **Fecha de Publicación**: 2026-10-22
- **Categorías arXiv**: `cs.LG`
- **Eje Cognitivo**: Reasoning in LLMs (Deliberative, Chain-of-Thought & Self-Verification)
- **Autores**: Shijie Li, Yilin Gao, Tieyuan Chen, Yun Luo, Weiyao Lin, Hang Yu
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.30796)](https://arxiv.org/abs/2610.30796) | [PDF (https://arxiv.org/pdf/2610.30796.pdf)](https://arxiv.org/pdf/2610.30796.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Training large language models for complex reasoning tasks relies on two complementary signals: sparse, outcome-grounded reinforcement learning (RL) for correctness, and dense, token-level distillation for guidance. However, complementarity in supervision does not guarantee compatibility in optimization; imitation-focused distillation can conflict with the outcome-driven RL objective, and existing hybrids lack a principled resolution. We propose \textbf{GIFT} (\textbf{G}radient-\textbf{I}nformed \textbf{F}il\textbf{T}ering for Distillation-Augmented Reasoning RL), a novel method that directly addresses the allocation problem of which teacher updates to apply. GIFT performs a token-level geometric analysis, decomposing the distillation gradient into a component \textbf{parallel} to the RL gradient, which measures first-order conflict and provides a \textbf{safety} filter, and a component \textbf{orthogonal} to it, which quantifies novel directional guidance and provides a measure of \textbf{value}. This decomposition yields a principled scoring rule to rank token-level guidance. We combine this with a progressive \textbf{coverage annealing} schedule that shrinks the budget of tokens receiving distillation, ensuring that the most conflicting updates are discarded first while the most complementary ones are retained at full strength. This facilitates a smooth transition from dense, geometrically-filtered guidance to a pure, outcome-grounded objective at convergence. Extensive experiments on mathematical and logical reasoning benchmarks show that GIFT consistently outperforms strong baselines across multiple model scales, achieving relative gains of up to 9.5\% on difficult mathematical reasoning tasks. Code: https://github.com/lilifree/GIFT

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Reasoning in LLMs (Deliberative, Chain-of-Thought & Self-Verification)]**: Estructurar cadenas de razonamiento explícitas (Chain-of-Thought deliberativo) separando estrictamente la premisa fáctica probada, la premisa normativa vigente y el juicio de subsunción, ejecutando un pase de autoverificación contra alucinaciones o saltos lógicos.
  2. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  3. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.

---

### [arXiv:2610.30630] Interpreting Model Reasoning through Behavioral Counterfactuals
- **arXiv ID**: `2610.30630` (2610.30630v1)
- **Fecha de Publicación**: 2026-10-22
- **Categorías arXiv**: `cs.LG`, `cs.AI`
- **Eje Cognitivo**: Reasoning in LLMs (Deliberative, Chain-of-Thought & Self-Verification)
- **Autores**: Shawn Im, James Oldfield, Adel Bibi, Sharon Li
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.30630)](https://arxiv.org/abs/2610.30630) | [PDF (https://arxiv.org/pdf/2610.30630.pdf)](https://arxiv.org/pdf/2610.30630.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Faithfully understanding the internal process that occurs as models form their chain of thought is an important problem with the rise in model capabilities. However, this remains challenging due to the variance in sampled responses, making it difficult to isolate the effects of interventions and compare model reasoning systematically. We propose a method for localizing and analyzing how a given intervention affects the model's reasoning through behavioral counterfactuals: given a fixed response, how does introducing an intervention to the prompt change the next-token distributions? We train a module to edit the residual stream such that it minimizes the KL divergence between the output distributions for a fixed response under a source prompt and its counterfactual target prompt. We find that matching the output distributions recovers the counterfactual behavior more effectively than standard activation reconstruction objectives and validate that attribution of the trained module outputs is effective for identifying causally important locations for counterfactual recovery. The attribution maps and visualizations of the downstream effects of model edits provide an interface for generating hypotheses about the original model's computation, which can then be tested with activation patching. In a case study on Gemma-4-E4B-it and DeepSeek-R1-0528-Qwen3-8B, we investigate how a suggestion influences model reasoning even when it is not verbally acknowledged. Our analysis identifies representations at the question statement and filler tokens that mediate a substantial part of the suggestion's influence, with downstream effects such as changing the framing of the justification or even the final answer.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Reasoning in LLMs (Deliberative, Chain-of-Thought & Self-Verification)]**: Estructurar cadenas de razonamiento explícitas (Chain-of-Thought deliberativo) separando estrictamente la premisa fáctica probada, la premisa normativa vigente y el juicio de subsunción, ejecutando un pase de autoverificación contra alucinaciones o saltos lógicos.
  2. **[Supervisión Granular por Pasos (Step-Level PRM)]**: Validar secuencialmente cada considerando o nodo de decisión. Si un paso intermedio presenta incertidumbre o ambigüedad, podar esa rama de razonamiento y recalcular desde el último antecedente verificado.
  3. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.

---

### [arXiv:2610.30611] Better Reasoning, Not Just Bigger Models: A Structure-Grounded Framework for Efficient and Reliable Inference
- **arXiv ID**: `2610.30611` (2610.30611v1)
- **Fecha de Publicación**: 2026-10-22
- **Categorías arXiv**: `cs.AI`, `cs.IR`
- **Eje Cognitivo**: Reasoning in LLMs (Deliberative, Chain-of-Thought & Self-Verification)
- **Autores**: Amirhossein Aghaei, Liangyan Li, Shiyi Yang, Shaohua Wang, Yan Wang
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.30611)](https://arxiv.org/abs/2610.30611) | [PDF (https://arxiv.org/pdf/2610.30611.pdf)](https://arxiv.org/pdf/2610.30611.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Scaling large language models has substantially improved linguistic fluency, yet reliable autonomous agents require more than fluent generation. In multi-turn inference, current agentic systems often produce semantically plausible but structurally ungrounded reasoning, especially under incomplete observations. We propose Structure-Grounded Uncertainty Reduction (SGUR), a training-free framework that complements token-level generation with active uncertainty reduction over structured hypothesis spaces. SGUR represents incomplete observations as a query graph and aligns them with candidate hypothesis graphs through a prior-weighted partial graph matching mechanism, where database-derived empirical priors assign greater importance to decision-relevant relations rather than treating all graph edges uniformly. The resulting inference state is iteratively refined by an active information-gain strategy that selects the next most informative node to query, systematically pruning the candidate space. We instantiate SGUR on a challenging PrimeKG-derived sequential medical diagnosis benchmark, demonstrating that structural grounding can partially substitute for model scale: starting from only two observed symptoms, SGUR achieves 92.5% Hit@3, outperforming the strongest Graph-RAG baseline by 9.4 percentage points while using approximately 5x fewer tokens. Notably, SGUR enables smaller backbone models to match or exceed the performance of models up to 10x larger, suggesting that structural grounding provides a more robust and efficient paradigm for scaling agent performance than relying exclusively on increasing model size.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Reasoning in LLMs (Deliberative, Chain-of-Thought & Self-Verification)]**: Estructurar cadenas de razonamiento explícitas (Chain-of-Thought deliberativo) separando estrictamente la premisa fáctica probada, la premisa normativa vigente y el juicio de subsunción, ejecutando un pase de autoverificación contra alucinaciones o saltos lógicos.
  2. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  3. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  4. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.

---

### [arXiv:2610.30351] Route-and-Generate: KL-Regularized Router Improvement for Reasoning Routing in LLMs
- **arXiv ID**: `2610.30351` (2610.30351v1)
- **Fecha de Publicación**: 2026-10-21
- **Categorías arXiv**: `cs.AI`, `cs.LG`
- **Eje Cognitivo**: Reasoning in LLMs (Deliberative, Chain-of-Thought & Self-Verification)
- **Autores**: Tien-Phat Nguyen, Truong Nguyen, Thanh-Thien Le, Hoang Phan, Thien Huu Nguyen, Linh Ngo Van et al.
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.30351)](https://arxiv.org/abs/2610.30351) | [PDF (https://arxiv.org/pdf/2610.30351.pdf)](https://arxiv.org/pdf/2610.30351.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Large language models often apply complex reasoning indiscriminately, leading to overthinking on simple tasks and underthinking on harder ones. We present Route-and-Generate (Rouge), a hierarchical training framework that enables LLMs to adaptively decide when and how much reasoning is required for each input. Our approach decouples reasoning effort allocation from answer generation by introducing a routing policy that allocates a fixed sampling budget across multiple reasoning formats, while the base model is optimized with GRPO using per-sample rewards. To promote efficient reasoning, we employ a rank-based reward that favors shorter correct solutions, and update the routing policy via a closed-form KL-regularized policy improvement step distilled into a neural router. This design encourages concise answers on easy problems while reserving longer reasoning for harder ones, achieving improved accuracy-efficiency trade-offs across multiple reasoning benchmarks.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Reasoning in LLMs (Deliberative, Chain-of-Thought & Self-Verification)]**: Estructurar cadenas de razonamiento explícitas (Chain-of-Thought deliberativo) separando estrictamente la premisa fáctica probada, la premisa normativa vigente y el juicio de subsunción, ejecutando un pase de autoverificación contra alucinaciones o saltos lógicos.
  2. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  3. **[Búsqueda Deliberativa y Consenso Interno]**: Generar y contrastar múltiples líneas argumentales (argumento principal, eventuales defensas y criterio de Alzada) seleccionando la solución que maximice la coherencia interna y la estabilidad frente a una eventual apelación.

---

### [arXiv:2610.30132] LongZero: Enhancing Long-Context Reasoning in LLMs from Zero Data
- **arXiv ID**: `2610.30132` (2610.30132v1)
- **Fecha de Publicación**: 2026-10-21
- **Categorías arXiv**: `cs.CL`, `cs.LG`
- **Eje Cognitivo**: Reasoning in LLMs (Deliberative, Chain-of-Thought & Self-Verification)
- **Autores**: Zhennan Wan, Jianfei Chen
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.30132)](https://arxiv.org/abs/2610.30132) | [PDF (https://arxiv.org/pdf/2610.30132.pdf)](https://arxiv.org/pdf/2610.30132.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Reinforcement learning (RL) is an effective way to strengthen the long-context reasoning of large language models (LLMs), but it needs training data that are long, diverse, challenging, and verifiable. Human annotation of such data is expensive, naturally occurring data are too scarce to sustain RL, and existing synthesis methods depend on external corpora or stronger teacher models, which become harder to obtain as the trained models get stronger. Recently, RL from zero data, in which a model learns from tasks it proposes itself, has achieved excellent performance, but existing methods target short-context tasks. Therefore, we propose $\textbf{LongZero}$, a method that lets an LLM improve its own long-context reasoning without any external data. Instead of writing questions and answers over existing documents, LongZero first has the model synthesize the question and answer with its supporting evidence in a compact structured form, and only then separately expands the evidence into a long multi-document context. LongZero combines these self-written multi-hop reasoning tasks with self-written multi-round retrieval tasks and trains the model with GRPO. We evaluate LongZero on two LLMs across five long-context reasoning benchmarks and compare it with RL on data synthesized from external corpora. Experimental results show that LongZero can generalize to real tasks, and outperforms both baselines, suggesting a viable and promising path to improving long-context reasoning of LLMs.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Reasoning in LLMs (Deliberative, Chain-of-Thought & Self-Verification)]**: Estructurar cadenas de razonamiento explícitas (Chain-of-Thought deliberativo) separando estrictamente la premisa fáctica probada, la premisa normativa vigente y el juicio de subsunción, ejecutando un pase de autoverificación contra alucinaciones o saltos lógicos.
  2. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.
  3. **[Trazabilidad y Explicabilidad Técnica]**: Explicitar los fundamentos y pasos de derivación desde los datos de entrada hasta la conclusión dispositiva, garantizando auditabilidad completa del razonamiento.

---

### [arXiv:2610.29792] MAPS: Macro-Adaptive Parallel Reasoning for Regulating Search Momentum in Retrieval-Augmented Generation
- **arXiv ID**: `2610.29792` (2610.29792v1)
- **Fecha de Publicación**: 2026-10-21
- **Categorías arXiv**: `cs.CL`
- **Eje Cognitivo**: Reasoning in LLMs (Deliberative, Chain-of-Thought & Self-Verification)
- **Autores**: Xinze Li, Dingwen Zhang, Zhenghao Liu, Yukun Yan, Shuo Wang, Yu Gu et al.
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.29792)](https://arxiv.org/abs/2610.29792) | [PDF (https://arxiv.org/pdf/2610.29792.pdf)](https://arxiv.org/pdf/2610.29792.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Retrieval-Augmented Generation (RAG) improves the performance of Large Language Models (LLMs) by retrieving external knowledge. Recently, some RAG methods interleave reasoning and retrieval, enabling LLMs to progressively generate sub-queries and retrieve external knowledge. However, these methods may suffer from redundant or ineffective sub-queries and insufficiently diverse query exploration. Moreover, due to the tightly interleaved nature of reasoning and retrieval, it remains unclear how the evolving reasoning process influences query intent. To characterize the evolution of query intent during reasoning, we introduce search momentum, which captures the accumulated retrieval tendency induced by historical changes in generated sub-queries along the reasoning trajectory. Through momentum-based analysis, we find that the query generation process tends to continuously evolve along existing retrieval trajectories. Based on this observation, we propose MAPS, a Macro-Adaptive Parallel Reasoning framework for regulating search momentum and mitigating query-intent drift. MAPS first retains the retrieved knowledge and a refined reasoning state, thereby reducing the influence of historical reasoning trajectories on subsequent sub-query generation. Subsequently, MAPS extends the conventional sequential reasoning process into a parallel reasoning paradigm. At each iteration, MAPS identifies complementary retrieval directions, generates corresponding sub-queries for parallel retrieval, and consolidates the retrieved evidence to update the knowledge and reasoning states. Experiments on six question-answering benchmarks demonstrate that MAPS consistently outperforms representative RAG methods across different backbone models. All code and resources are available at https://github.com/NEUIR/MAPS.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Reasoning in LLMs (Deliberative, Chain-of-Thought & Self-Verification)]**: Estructurar cadenas de razonamiento explícitas (Chain-of-Thought deliberativo) separando estrictamente la premisa fáctica probada, la premisa normativa vigente y el juicio de subsunción, ejecutando un pase de autoverificación contra alucinaciones o saltos lógicos.
  2. **[Supervisión Granular por Pasos (Step-Level PRM)]**: Validar secuencialmente cada considerando o nodo de decisión. Si un paso intermedio presenta incertidumbre o ambigüedad, podar esa rama de razonamiento y recalcular desde el último antecedente verificado.
  3. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  4. **[Búsqueda Deliberativa y Consenso Interno]**: Generar y contrastar múltiples líneas argumentales (argumento principal, eventuales defensas y criterio de Alzada) seleccionando la solución que maximice la coherencia interna y la estabilidad frente a una eventual apelación.

---

### [arXiv:2610.30202] MPIDetector: Detecting Multi-modal Prompt Injection via LLM-based Reasoning
- **arXiv ID**: `2610.30202` (2610.30202v1)
- **Fecha de Publicación**: 2026-10-21
- **Categorías arXiv**: `cs.CR`, `cs.AI`
- **Eje Cognitivo**: Reasoning in LLMs (Deliberative, Chain-of-Thought & Self-Verification)
- **Autores**: Yiheng Li, Jingyue Li
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.30202)](https://arxiv.org/abs/2610.30202) | [PDF (https://arxiv.org/pdf/2610.30202.pdf)](https://arxiv.org/pdf/2610.30202.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> With the rapid integration of Multi-modal Large Language Models (MLLMs) into real-world applications, Prompt Injection (PI) has emerged as a critical security threat. Attackers can conceal malicious instructions within textual narratives or visual inputs to bypass safety alignment. Existing approaches, such as signature- and perplexity-based methods, rely heavily on pattern matching, making them insufficient to detect sophisticated, cross-modal PI payloads. In this paper, we propose a novel detection framework, called MPIDetector, that leverages LLMs' intrinsic reasoning capabilities via few-shot In-Context Learning (ICL). Instead of fine-tuning, we provide the model with specific prompt templates and representative attack examples, enabling it to scrutinize the semantic intent of input across modalities. We constructed a comprehensive evaluation benchmark comprising eight textual and seven visual malicious categories, supplemented with benign datasets to rigorously test for false positives. Our evaluation across multiple leading LLMs, including Gemini-2.0-Flash, Qwen3-VL-32B-Instruct, and Doubao-seed-1.6-flash, demonstrates the efficacy and generalizability of this approach. The proposed method achieves up to 90.91% accuracy and 100% recall on textual tasks. In the visual domain, it achieves up to 99.28% accuracy while maintaining 100% precision across all evaluated models. Crucially, when evaluated against 500 highly obfuscated environmental web-agent injections (WebInject), MPIDetector achieved a detection rate up to 99.80%. Comparisons with two baseline approaches for detecting textual PI payloads, along with two additional methods for visual input detection, demonstrate MPIDetector's superior accuracy. These results show that LLM-driven reasoning provides a robust, cross-modal defense against advanced prompt injections.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Reasoning in LLMs (Deliberative, Chain-of-Thought & Self-Verification)]**: Estructurar cadenas de razonamiento explícitas (Chain-of-Thought deliberativo) separando estrictamente la premisa fáctica probada, la premisa normativa vigente y el juicio de subsunción, ejecutando un pase de autoverificación contra alucinaciones o saltos lógicos.
  2. **[Protocolo de Verificación Intrínseca]**: Implementar un paso de auditoría independiente sobre cada afirmación fáctica y cita normativa/jurisprudencial antes de consolidar la respuesta final, rechazando cualquier inferencia no respaldada por evidencia documental directa.
  3. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  4. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.

---

## EJE: PROMPT ENGINEERING, META-PROMPTING & IN-CONTEXT OPTIMIZATION

### [arXiv:2610.31062] SCOPE: Compiling Natural-Language Policies into Neurosymbolic Predicate Programs
- **arXiv ID**: `2610.31062` (2610.31062v1)
- **Fecha de Publicación**: 2026-10-22
- **Categorías arXiv**: `cs.AI`, `cs.CL`
- **Eje Cognitivo**: Prompt Engineering, Meta-Prompting & In-Context Optimization
- **Autores**: Arnon Mazza, Elad Levi
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.31062)](https://arxiv.org/abs/2610.31062) | [PDF (https://arxiv.org/pdf/2610.31062.pdf)](https://arxiv.org/pdf/2610.31062.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Policy enforcement for LLM agents has shifted from single-turn content moderation to compound, application-specific policies evaluated over multi-turn transcripts and tool-call trajectories. Fine-tuned guardrail models are efficient but degrade on compound policies, and while LLM-as-a-judge approaches achieve higher accuracy, they incur high inference cost and tend to produce unstable predictions. Neurosymbolic methods offer a natural alternative, decomposing the policy into narrow neural decisions composed under explicit logic. However, existing symbolic layers lack the required expressiveness and are optimized against fixed data rather than the policy itself. To address this, we introduce SCOPE, which compiles a policy into an executable program of neural predicates executed by small models, deterministic extractors, and code that composes their outputs. The program is optimized jointly with its training data, using adversarial generation of counterexamples that target where the program deviates from the policy. We evaluate SCOPE on a benchmark of real-world policy tasks against prompt optimization, task decomposition, and workflow generation methods, achieving the highest average accuracy across tasks and models. Programs optimized with the weakest executor transfer to other models without further optimization. This allows them to be deployed in production on inexpensive models, where they reach accuracy comparable to frontier reasoning models. Unlike these monolithic models, SCOPE produces substantially more stable predictions, and each verdict is interpretable through the predicate outputs that produced it. Additionally, we validate the key components of our method through an ablation study. SCOPE thus enables reliable, interpretable, and efficient policy enforcement at production scale.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Prompt Engineering, Meta-Prompting & In-Context Optimization]**: Anclar el contexto mediante restricciones explícitas de formato, ejemplos verificados en contexto (few-shot grounding), delimitación estricta de fuentes autorizadas y descomposición modular de instrucciones.
  2. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  3. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  4. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.

---

### [arXiv:2610.31060] Diagnosing the Explicit-to-Applied Theory of Mind Gap in LLMs
- **arXiv ID**: `2610.31060` (2610.31060v1)
- **Fecha de Publicación**: 2026-10-22
- **Categorías arXiv**: `cs.AI`
- **Eje Cognitivo**: Prompt Engineering, Meta-Prompting & In-Context Optimization
- **Autores**: Prajvi Saxena, Sabine Janzen, Wolfgang Maass
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.31060)](https://arxiv.org/abs/2610.31060) | [PDF (https://arxiv.org/pdf/2610.31060.pdf)](https://arxiv.org/pdf/2610.31060.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> As large language models are deployed in high-stakes roles such as therapy, education, and personal assistance, their social cognition must be assessed reliably. Current Theory of Mind (ToM) benchmarks report aggregate scores that conflate two distinct competencies: explicit ToM (recognizing what someone believes) and applied ToM (using that belief to predict behavior). Building on this distinction, we investigate the gap and its recoverability using four structurally diverse benchmarks. Aggregate reporting obscures uneven competence: on SimpleToM, Llama-3.1-8B scores 51.5 percent overall while recognizing mental states at 99.4 percent and predicting behavior at only 28.9 percent. To assess recovery, we compare structured prompting, matched in-context learning, and our proposed Belief-State Test-Time Training (BSTTT), which adapts lightweight parameters on answered support questions through action reconstruction. Across Qwen2.5-7B, Llama-3.1-8B, and GPT-oss-20B, recovery depends on the model, task, and intervention. On SimpleToM, reminders combined with BSTTT improve Llama's behavior prediction by 40.8 percentage points; reminders account for most of the overall improvement, with BSTTT adding 1.3 to 5.5 points beyond reminders across models. Contextual examples often outperform weight updates, while BSTTT remains stronger in specific model-benchmark settings. Temporal belief tracking remains difficult despite partial recovery. These findings show that aggregate ToM scores can overstate applied competence while hiding performance recoverable through targeted assistance. We recommend decomposed reporting of explicit and applied accuracy alongside intervention comparisons that establish which failures are recoverable and under what conditions.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Prompt Engineering, Meta-Prompting & In-Context Optimization]**: Anclar el contexto mediante restricciones explícitas de formato, ejemplos verificados en contexto (few-shot grounding), delimitación estricta de fuentes autorizadas y descomposición modular de instrucciones.
  2. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.
  3. **[Trazabilidad y Explicabilidad Técnica]**: Explicitar los fundamentos y pasos de derivación desde los datos de entrada hasta la conclusión dispositiva, garantizando auditabilidad completa del razonamiento.

---

### [arXiv:2610.30690] From Clinical Judgment to Checkable Rules: Clinician-Led Guardrails for Mental-Health Chatbots
- **arXiv ID**: `2610.30690` (2610.30690v1)
- **Fecha de Publicación**: 2026-10-22
- **Categorías arXiv**: `cs.CL`, `cs.AI`, `cs.CY`
- **Eje Cognitivo**: Prompt Engineering, Meta-Prompting & In-Context Optimization
- **Autores**: Chenhan Lyu, Kit Wislocki, Sarah Elizabeth Stoeckl, Maitreyi Sinha, Amir Rahmani
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.30690)](https://arxiv.org/abs/2610.30690) | [PDF (https://arxiv.org/pdf/2610.30690.pdf)](https://arxiv.org/pdf/2610.30690.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Large language models (LLMs) deployed in mental-health contexts can be evaluated for safety failures, but the resulting judgments are often difficult to inspect or explain. Common approaches to improving safety rely on prompt engineering, LLM-as-a-Judge, and Constitutional AI. In this work, we describe a clinician-led alternative in which two clinicians define, finalize, and adjudicate the four safety checks of a rule base, which is formally verified for internal consistency and applied as a guardrail over LLM outputs. Here and in the title, clinician-led refers to this rule base, not to the fact extractor or the uncertainty default, which are ours. Every verdict of the resulting verification layer is recomputable from a named rule and sixteen facts. Against an LLM judge matched in model, revision, quantization, rule text, and decoding but without the layer's computed 988/911 fact, the largest disagreement class, the satisfied-rule class, is structured: the Llama-3.3-70B judge, on its primary prompt, demands a crisis resource from 55 of the 65 replies (84.6%) that already contain one, while the same model, asked as a fact extractor, reports a recognized resource present on 54 of the 55. The verification layer never raises that demand, by construction. We report with equal prominence where this judge is stronger: fewer false crisis alarms on the one reference-scored check. We also report the measured cost (a specification revision raised block-class outcomes on held-out boundary prompts of an over-refusal benchmark from 6.0% to 16.0%, chiefly by changing fact extraction), the clinicians' decision to keep our uncertainty default, and the analysis of the result. The contribution is not a safer verdict. It is a guardrail whose disagreements with the judge localize to named rules and facts and whose measured costs trace to named facts and the uncertainty default.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Prompt Engineering, Meta-Prompting & In-Context Optimization]**: Anclar el contexto mediante restricciones explícitas de formato, ejemplos verificados en contexto (few-shot grounding), delimitación estricta de fuentes autorizadas y descomposición modular de instrucciones.
  2. **[Protocolo de Verificación Intrínseca]**: Implementar un paso de auditoría independiente sobre cada afirmación fáctica y cita normativa/jurisprudencial antes de consolidar la respuesta final, rechazando cualquier inferencia no respaldada por evidencia documental directa.
  3. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  4. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.

---

### [arXiv:2610.29669] Conflicted Records: Typed Adversarial Contracts for Auditable LLM Output Quality Enforcement
- **arXiv ID**: `2610.29669` (2610.29669v1)
- **Fecha de Publicación**: 2026-10-21
- **Categorías arXiv**: `cs.DB`, `cs.AI`, `cs.CL`, `cs.MA`
- **Eje Cognitivo**: Prompt Engineering, Meta-Prompting & In-Context Optimization
- **Autores**: Kardelen Subasi, Jarosław A. Chudziak
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.29669)](https://arxiv.org/abs/2610.29669) | [PDF (https://arxiv.org/pdf/2610.29669.pdf)](https://arxiv.org/pdf/2610.29669.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> LLM-generated records increasingly populate production information systems where they are treated as data assets subject to the same quality expectations as records from operational databases. A single such record can simultaneously satisfy and violate a quality rule: a grounded fact adjacent to a hallucination, a useful answer adjacent to a stereotype. Classical data cleaning cannot resolve this because the two judgments are incompatible over the same span; a single LLM judge cannot either, since it shares the training biases that produced the conflict. Existing interventions such as prompt engineering, chain-of-thought, and RLHF reduce surface error rates but provide no audit trail and cannot distinguish genuine remediation from blanket suppression. The question is whether a deterministic check over structured inter-agent records can catch the defects that referential checks alone miss. We present BiasGuard-D: two adversarial roles drawn from distinct model families exchange typed claim documents, a three-model quorum adjudicates by majority vote, and a combined referential-plus-semantic invariant validates the verdict. The semantic component fires on verdicts referential checks miss; removing the iterative loop drops invariant satisfaction sharply. The deliberation layer transfers from stereotype to hallucination remediation on HaluEval QA with only role-framing changes, raising right-answer recovery by 49 percentage points; the triage gate required a cross-family second auditor to maintain recall on objective hallucination. Every claim, vote, and instruction is stored as a typed record giving operators a provenance trail auditable under emerging AI regulations.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Prompt Engineering, Meta-Prompting & In-Context Optimization]**: Anclar el contexto mediante restricciones explícitas de formato, ejemplos verificados en contexto (few-shot grounding), delimitación estricta de fuentes autorizadas y descomposición modular de instrucciones.
  2. **[Protocolo de Verificación Intrínseca]**: Implementar un paso de auditoría independiente sobre cada afirmación fáctica y cita normativa/jurisprudencial antes de consolidar la respuesta final, rechazando cualquier inferencia no respaldada por evidencia documental directa.
  3. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  4. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.

---

### [arXiv:2610.28843] Beyond Correct Answers: How Compositional Cues Shape Visual Judgments
- **arXiv ID**: `2610.28843` (2610.28843v1)
- **Fecha de Publicación**: 2026-10-20
- **Categorías arXiv**: `cs.CV`, `cs.CL`
- **Eje Cognitivo**: Prompt Engineering, Meta-Prompting & In-Context Optimization
- **Autores**: Xiaoyu Ma, Zheyuan Zhang, Kaiwen Shi, Yanfang Ye
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.28843)](https://arxiv.org/abs/2610.28843) | [PDF (https://arxiv.org/pdf/2610.28843.pdf)](https://arxiv.org/pdf/2610.28843.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Visual question answering requires models to assign attributes and relations to the correct objects, a problem known as visual binding. Structured prompts make these assignments explicit through labeled fields. Yet an improvement from the full prompt does not reveal which labels help or how they interact. First, we isolate field-label effects across ten models and six tasks by holding the image and claim fixed. These comparisons reveal differences that overall accuracy can hide. With a relation label present, adding object-role labels helps Qwen3 but hurts Qwen2 on Spatial. Second, we compare auxiliary hints that preserve or swap the question's role assignments against a no-hint baseline. Across two image sets, Qwen3's advantage with preserving hints mainly reflects errors caused by swapped hints. Preserving hints remain near baseline. Field order further affects the harm. Third, we test clearer hint wording and direct selection of the relation shown in the image. Clearer hints improve text matching but do not consistently improve visual judgments. In contrast, relation selection partly reduces errors for some hints in Qwen3 and GPT-4.1-mini.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Prompt Engineering, Meta-Prompting & In-Context Optimization]**: Anclar el contexto mediante restricciones explícitas de formato, ejemplos verificados en contexto (few-shot grounding), delimitación estricta de fuentes autorizadas y descomposición modular de instrucciones.
  2. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.
  3. **[Trazabilidad y Explicabilidad Técnica]**: Explicitar los fundamentos y pasos de derivación desde los datos de entrada hasta la conclusión dispositiva, garantizando auditabilidad completa del razonamiento.

---

### [arXiv:2610.27473] Beyond the Prompt: Recovering Hidden Concepts in Text-to-Image Models
- **arXiv ID**: `2610.27473` (2610.27473v1)
- **Fecha de Publicación**: 2026-10-20
- **Categorías arXiv**: `cs.CR`, `cs.AI`, `cs.LG`
- **Eje Cognitivo**: Prompt Engineering, Meta-Prompting & In-Context Optimization
- **Autores**: Zhengfeng Zheng, Minghong Fang
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.27473)](https://arxiv.org/abs/2610.27473) | [PDF (https://arxiv.org/pdf/2610.27473.pdf)](https://arxiv.org/pdf/2610.27473.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Text-to-image models can generate visual concepts that their prompts never mention, and recent work shows that such associations can be implanted so that ordinary prompts trigger them. Auditing this behavior requires recovering the description that a prompt omits. Existing prompt optimizers are not well suited to this task. Gradient-based methods require backward access to the scoring encoder. Discrete evolutionary search treats semantically unrelated tokens as equally close. Language-model-guided search requires one inference call per candidate, which limits exploration. This paper presents EmbGA, an embedding-space genetic algorithm that recovers concepts present in a set of images but absent from the prompt that generated them. EmbGA keeps the population structure of genetic search but applies its operators in the token embedding space. Crossover interpolates between parent embeddings, and mutation moves an embedding toward a randomly drawn vocabulary embedding. Each offspring is then projected back to discrete tokens before scoring, so every evaluated candidate is a valid token sequence. We evaluate EmbGA on two benchmarks against six optimizers under two exploration budgets. EmbGA achieves the highest alignment when the exploration budget is large, recovers the most grounded tokens on natural images, and runs much faster than language-model-guided search.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Prompt Engineering, Meta-Prompting & In-Context Optimization]**: Anclar el contexto mediante restricciones explícitas de formato, ejemplos verificados en contexto (few-shot grounding), delimitación estricta de fuentes autorizadas y descomposición modular de instrucciones.
  2. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  3. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.
  4. **[Búsqueda Deliberativa y Consenso Interno]**: Generar y contrastar múltiples líneas argumentales (argumento principal, eventuales defensas y criterio de Alzada) seleccionando la solución que maximice la coherencia interna y la estabilidad frente a una eventual apelación.

---

### [arXiv:2610.27367] Explore More, Validate Less: Efficient Reflective Prompt Optimization
- **arXiv ID**: `2610.27367` (2610.27367v1)
- **Fecha de Publicación**: 2026-10-19
- **Categorías arXiv**: `cs.CL`
- **Eje Cognitivo**: Prompt Engineering, Meta-Prompting & In-Context Optimization
- **Autores**: Xiaofan Zhou, Lu Cheng
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.27367)](https://arxiv.org/abs/2610.27367) | [PDF (https://arxiv.org/pdf/2610.27367.pdf)](https://arxiv.org/pdf/2610.27367.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Reflective prompt optimization improves instructions using task feedback, but coupling candidate generation with full-validation-based selection can make search costly and sequential. We propose a two-stage framework that decouples reflective candidate-pool construction from validation allocation. During construction, we sample multiple parents and reuse each parent's training responses across parallel reflection branches. Each revision is screened against its parent on a small training minibatch, allowing locally improved candidates to support further revisions without full validation. After construction, an exploration policy selects candidates from the frozen pool under a fixed full-validation budget, and the prompt with the highest measured validation score is returned. This separation allows candidate-pool size and validation budget to be set independently. We evaluate random selection and learned score prediction with similarity-based exploration on five benchmarks using Qwen3.5-9B and Llama-3.1-8B-Instruct. With 100 retained candidates and 20 full validations, our framework improves over the initial solver by up to 11.22 percentage points. Learned selection improves over the initial solver in all ten comparisons, although neither selection policy consistently outperforms the other. These results support separating reflective search from budgeted validation while leaving room for stronger candidate-selection policies.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Prompt Engineering, Meta-Prompting & In-Context Optimization]**: Anclar el contexto mediante restricciones explícitas de formato, ejemplos verificados en contexto (few-shot grounding), delimitación estricta de fuentes autorizadas y descomposición modular de instrucciones.
  2. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  3. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.
  4. **[Búsqueda Deliberativa y Consenso Interno]**: Generar y contrastar múltiples líneas argumentales (argumento principal, eventuales defensas y criterio de Alzada) seleccionando la solución que maximice la coherencia interna y la estabilidad frente a una eventual apelación.

---

### [arXiv:2610.27208] Language Guidance for Supervised Vision Training: An Empirical Study of Generalization
- **arXiv ID**: `2610.27208` (2610.27208v1)
- **Fecha de Publicación**: 2026-10-19
- **Categorías arXiv**: `cs.CV`, `cs.AI`
- **Eje Cognitivo**: Prompt Engineering, Meta-Prompting & In-Context Optimization
- **Autores**: Shruthi Gowda, Nikita Jain, Elahe Arani, Bahram Zonooz
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.27208)](https://arxiv.org/abs/2610.27208) | [PDF (https://arxiv.org/pdf/2610.27208.pdf)](https://arxiv.org/pdf/2610.27208.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Deep neural networks have achieved remarkable success on vision benchmarks, yet they continue to struggle with many generalization challenges. Supervised vision training relies on one-hot labels, which provide limited information about semantic structure and shared attributes between classes. This limited supervision can leave visual representations vulnerable to distribution shifts, spurious correlations, texture bias, adversarial perturbations, and forgetting in sequential learning settings. We study whether pretrained language models can serve as lightweight auxiliary supervision for vision training without requiring paired image-text data, prompt engineering, or contrastive objectives. Specifically, we evaluate two forms of language guidance, Explicit Language Guidance (ExLG) and Implicit Language Guidance (ImLG). We conduct a comprehensive evaluation across six generalization regimes, including in-distribution, out-of-distribution generalization, shortcut and spurious correlation resistance, texture and shape bias, adversarial robustness, and continual learning. Our analyses show that the two mechanisms have complementary strengths, with explicit guidance consistently benefiting in-distribution, low-data performance, and continual learning retention, while implicit guidance is often more useful in shortcut-sensitive settings and under stronger adversarial perturbations. Importantly, both are lightweight and add minimal parameters and training overhead. The analyses characterize when language-derived structure helps supervised vision training and provides a practical roadmap for using off-the-shelf pretrained models from another modality as auxiliary supervision.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Prompt Engineering, Meta-Prompting & In-Context Optimization]**: Anclar el contexto mediante restricciones explícitas de formato, ejemplos verificados en contexto (few-shot grounding), delimitación estricta de fuentes autorizadas y descomposición modular de instrucciones.
  2. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.
  3. **[Trazabilidad y Explicabilidad Técnica]**: Explicitar los fundamentos y pasos de derivación desde los datos de entrada hasta la conclusión dispositiva, garantizando auditabilidad completa del razonamiento.

---

### [arXiv:2610.25700] From Black Box to Controller: Inference-Time Steering of LLM via Feature Amplification
- **arXiv ID**: `2610.25700` (2610.25700v1)
- **Fecha de Publicación**: 2026-10-19
- **Categorías arXiv**: `cs.AI`
- **Eje Cognitivo**: Prompt Engineering, Meta-Prompting & In-Context Optimization
- **Autores**: Keqi Chen, Zekai Sun, Yuhua Wen, Tianyi Tian, Xinyang Huang, Huijun Lian et al.
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.25700)](https://arxiv.org/abs/2610.25700) | [PDF (https://arxiv.org/pdf/2610.25700.pdf)](https://arxiv.org/pdf/2610.25700.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Inference-time steering is crucial for deploying Large Language Models (LLMs) in real-world applications, where they must flexibly adjust behavior preferences. For instance, a model should dynamically adjust its caution level based on the risk of the scenario. This requirement introduces a challenge: modulating the intensity of LLM preferences. Prompt engineering can require task-specific prompt design, while fine-tuning requires additional optimization and data. These requirements can make repeated behavioral adjustments costly. To address this, we introduce NeuroSteer, a plug-and-play framework that enables flexible, quantitative adjustment of LLM preferences at inference time. NeuroSteer employs a Sparse Autoencoder (SAE) as its controller. Comparing neuron activation frequencies between positive and negative examples isolates "feature neurons" that correspond to target preferences such as politeness and positive sentiment. During inference, the activations of selected SAE features are amplified in the latent representations to steer the output distribution. Users can adjust the strength of this steering on a per-scenario or per-user basis, granting the LLM fine-grained, quantifiable trait modulation. Our experiments show that NeuroSteer can alter sentiment, toxicity, stance, and politeness at inference time. It achieves higher target-direction steering scores than the compared baselines in several settings, with task- and strength-dependent trade-offs in generation quality.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Prompt Engineering, Meta-Prompting & In-Context Optimization]**: Anclar el contexto mediante restricciones explícitas de formato, ejemplos verificados en contexto (few-shot grounding), delimitación estricta de fuentes autorizadas y descomposición modular de instrucciones.
  2. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  3. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.

---

### [arXiv:2610.24957] Revealing what benchmark scores hide: Jointly measuring the breadth and reliability of LLM capabilities using accessibility profiles
- **arXiv ID**: `2610.24957` (2610.24957v1)
- **Fecha de Publicación**: 2026-10-18
- **Categorías arXiv**: `cs.AI`, `cs.CL`, `cs.LG`
- **Eje Cognitivo**: Prompt Engineering, Meta-Prompting & In-Context Optimization
- **Autores**: Kazem Faghih, Yize Cheng, Shoumik Saha, Mobina Pournemat, Armin Gerami, Soheil Feizi
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.24957)](https://arxiv.org/abs/2610.24957) | [PDF (https://arxiv.org/pdf/2610.24957.pdf)](https://arxiv.org/pdf/2610.24957.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Language model benchmarks assign each question a single outcome from one fixed wording, even though the same underlying request can be expressed in many equivalent ways. We argue that the quantity of interest should therefore not be correctness on one wording, but the accessibility of an inquiry, which we define as the probability that a model succeeds across meaning-preserving formulations. The distribution of accessibility across inquiries reveals a structure that accuracy and existing best-, worst-, or average-case prompt scores collapse: how broadly a model's capabilities extend across inquiries and how dependably those capabilities can be elicited. Two models can have the same average performance while one succeeds across more inquiries unreliably and the other succeeds across fewer inquiries but more consistently, leading to opposite preferences depending on whether the task allows multiple retries until one success or when repeated consistent success is required. Across six benchmarks and more than twenty models, this tradeoff is common: for about half of the model pairs with nearly equal mean accessibility, which model looks better depends on whether one success across five formulations is enough or all five must succeed, quantities we call Access@5 and Reliable@5, respectively. For some pairs the two measures diverge significantly, by up to 10 points in opposite directions. Accessibility also reveals that scaling, reasoning, and prompt optimization can redistribute capability across inquiries in ways aggregate accuracy obscures, sometimes broadening the set of inquiries a model can succeed on while making success on them less repeatable. Accessibility turns formulation sensitivity from a nuisance into a measurable property of capability, distinguishing what a model can sometimes succeed on from what users can actually depend on.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Prompt Engineering, Meta-Prompting & In-Context Optimization]**: Anclar el contexto mediante restricciones explícitas de formato, ejemplos verificados en contexto (few-shot grounding), delimitación estricta de fuentes autorizadas y descomposición modular de instrucciones.
  2. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  3. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.

---

### [arXiv:2610.24928] Means-Ends Analysis Helps LLMs Plan in Continuous-State Domains
- **arXiv ID**: `2610.24928` (2610.24928v1)
- **Fecha de Publicación**: 2026-10-18
- **Categorías arXiv**: `cs.AI`, `cs.LG`
- **Eje Cognitivo**: Prompt Engineering, Meta-Prompting & In-Context Optimization
- **Autores**: Jiayi Li, Carl Kingsford
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.24928)](https://arxiv.org/abs/2610.24928) | [PDF (https://arxiv.org/pdf/2610.24928.pdf)](https://arxiv.org/pdf/2610.24928.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> LLM planning research has traditionally focused on discrete-state domains, where actions form a finite, enumerable set. Existing LLM planning frameworks largely assume actions are enumerable, modeling planning as a search process over candidate actions. However, in continuous-state domains, where actions form a continuum and cannot be enumerated, this assumption breaks down. We find a remedy in Newell and Simon's Means-Ends Analysis (MEA), a general problem-solving technique rooted in heuristics from human psychology. We develop Medaka, an MEA-inspired structured prompting framework that encourages recursive goal decomposition, algebraic derivation, and per-step state tracking. To evaluate native LLM planning abilities in continuous-state domains, we develop Liquidworld, a systematic testbed on liquid mixing. On Liquidworld, Medaka can improve performance across model families, suggesting that classical means-ends analysis elicits LLM-native reasoning abilities that are helpful for continuous-state planning.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Prompt Engineering, Meta-Prompting & In-Context Optimization]**: Anclar el contexto mediante restricciones explícitas de formato, ejemplos verificados en contexto (few-shot grounding), delimitación estricta de fuentes autorizadas y descomposición modular de instrucciones.
  2. **[Supervisión Granular por Pasos (Step-Level PRM)]**: Validar secuencialmente cada considerando o nodo de decisión. Si un paso intermedio presenta incertidumbre o ambigüedad, podar esa rama de razonamiento y recalcular desde el último antecedente verificado.
  3. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  4. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.
  5. **[Búsqueda Deliberativa y Consenso Interno]**: Generar y contrastar múltiples líneas argumentales (argumento principal, eventuales defensas y criterio de Alzada) seleccionando la solución que maximice la coherencia interna y la estabilidad frente a una eventual apelación.

---

### [arXiv:2610.24913] A Cross-Domain Evaluation of Prompting Techniques for Large Language Models
- **arXiv ID**: `2610.24913` (2610.24913v1)
- **Fecha de Publicación**: 2026-10-17
- **Categorías arXiv**: `cs.AI`, `cs.CL`
- **Eje Cognitivo**: Prompt Engineering, Meta-Prompting & In-Context Optimization
- **Autores**: Kevin Krazius, Tim Schlippe, Paul Libbrecht
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.24913)](https://arxiv.org/abs/2610.24913) | [PDF (https://arxiv.org/pdf/2610.24913.pdf)](https://arxiv.org/pdf/2610.24913.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Prompt engineering has become a central mechanism for guiding the behavior of Large Language Models (LLMs) across a wide range of reasoning and language understanding tasks [1], [2]. However, existing studies frequently evaluate prompting techniques using different LLMs, datasets, or task settings, making direct comparisons across methods and domains difficult [3]. Consequently, in this paper we present a controlled cross-domain evaluation of Zero-Shot prompting, Few-Shot prompting, Retrieval-Augmented Generation (RAG), and automatic prompt optimization based on a PE2-inspired optimization pipeline [4]-[6]. All experiments were conducted with the same LLM and evaluated on six benchmark datasets covering arithmetic reasoning, logical reasoning, commonsense reasoning, and factual verification. The results show that no prompting strategy consistently outperforms the others across all domains, and pairwise statistical comparisons of the highest-performing configurations revealed no significant differences. RAG achieves the highest overall average accuracy of 78.33% when 300 examples are available for retrieval, while Few-Shot Prompting achieves comparatively high accuracies across several structured reasoning tasks. Zero-Shot Prompting remains competitive on tasks with self-contained inputs, whereas the PE2-inspired optimization approach produces stable but not systematically superior results compared to the other evaluated prompting techniques. Furthermore, increasing the number of task-specific examples does not consistently improve performance across prompting techniques, indicating strong domain and task dependency. These findings suggest that prompting techniques should be selected adaptively based on task characteristics rather than treated as universally applicable optimization strategies.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Prompt Engineering, Meta-Prompting & In-Context Optimization]**: Anclar el contexto mediante restricciones explícitas de formato, ejemplos verificados en contexto (few-shot grounding), delimitación estricta de fuentes autorizadas y descomposición modular de instrucciones.
  2. **[Protocolo de Verificación Intrínseca]**: Implementar un paso de auditoría independiente sobre cada afirmación fáctica y cita normativa/jurisprudencial antes de consolidar la respuesta final, rechazando cualquier inferencia no respaldada por evidencia documental directa.
  3. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  4. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.

---

## EJE: AGENTIC WORKFLOWS, MULTI-AGENT SYSTEMS & TOOL-AUGMENTED REASONING

### [arXiv:2610.31148] Prompt Sensitivity in Tool-Augmented Model Comparisons
- **arXiv ID**: `2610.31148` (2610.31148v1)
- **Fecha de Publicación**: 2026-10-22
- **Categorías arXiv**: `cs.CL`, `cs.AI`, `cs.LG`
- **Eje Cognitivo**: Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning
- **Autores**: Mateusz Modrzejewski, Tomasz Radzikowski
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.31148)](https://arxiv.org/abs/2610.31148) | [PDF (https://arxiv.org/pdf/2610.31148.pdf)](https://arxiv.org/pdf/2610.31148.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Language models are compared on question-answering benchmarks that pose each question in one wording, and a reworded question can change which of two models scores higher. We ask whether giving the models tools makes such comparisons more stable. An accuracy gain cannot answer this, because tools change several steps between the question and the scored answer at once. We propose a matched protocol that separates those steps: the answer readout, reasoning, the decision to call, the tool's answer, and the report supplied without a call. We apply it to six open models in five domains under five wordings. We find that tools raise accuracy where a program answers the question and widen the wording sensitivity of many pairwise comparisons. The widening follows how often a model calls, and call frequency follows the wording for some models and not others. It also depends on the interface and the instructions: a native tool-calling interface and a second tool description leave no detected widening in molecules, and sensitivity persists where tools return intermediate results. These findings show that deterministic reports do not guarantee stable comparisons. We recommend reporting call frequency and comparison stability under several wordings beside accuracy.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning]**: Orquestar flujos agénticos en etapas especializadas: (1) Agente Investigador/Recuperador (búsqueda documental exacta), (2) Agente Analista/Verificador (contraste de precedentes y normas), y (3) Agente Redactor/Crítico (proyección formal y auditoría de consistencia).
  2. **[Supervisión Granular por Pasos (Step-Level PRM)]**: Validar secuencialmente cada considerando o nodo de decisión. Si un paso intermedio presenta incertidumbre o ambigüedad, podar esa rama de razonamiento y recalcular desde el último antecedente verificado.
  3. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  4. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.

---

### [arXiv:2610.31113] Can AI Co-Design Structures? An AI Agent for Early-Stage Structural Design
- **arXiv ID**: `2610.31113` (2610.31113v1)
- **Fecha de Publicación**: 2026-10-22
- **Categorías arXiv**: `cs.AI`
- **Eje Cognitivo**: Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning
- **Autores**: Ricardo Maia Avelino, Mennatallah El-Assady, Tom Van Mele, Philippe Block
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.31113)](https://arxiv.org/abs/2610.31113) | [PDF (https://arxiv.org/pdf/2610.31113.pdf)](https://arxiv.org/pdf/2610.31113.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Recent advances in large language models and agentic workflows offer a new paradigm to early-stage structural design translating design intent into structural models. Although text-to-3D approaches have demonstrated that natural language can be used to produce visual, mesh-based geometric models, structural design requires domain-specific geometric arrangements and semantically rich data types. This paper introduces a proof-of-concept workflow for prompt-to-structure generation using an AI agent connected to a COMPAS-based structural modelling API through a Model Context Protocol (MCP) server. Through controlled modelling operations, the agent creates and modifies a graph-based structural data model composed of explicit building elements. The resulting artifacts can be inspected, modified, serialised, and further connected to downstream AEC workflows. The approach is demonstrated through selected prompt-to-structure examples and by progressive and editable design sequences that resemble typical iterative structural design workflows. The results are preliminary, but demonstrate the possibility of combining natural language, agentic workflows, and domain-specific structural data structures as a first step toward AI-assisted structural co-design.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning]**: Orquestar flujos agénticos en etapas especializadas: (1) Agente Investigador/Recuperador (búsqueda documental exacta), (2) Agente Analista/Verificador (contraste de precedentes y normas), y (3) Agente Redactor/Crítico (proyección formal y auditoría de consistencia).
  2. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  3. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.

---

### [arXiv:2610.30917] Harnessing Language Models as Optimization Modeling Agents
- **arXiv ID**: `2610.30917` (2610.30917v1)
- **Fecha de Publicación**: 2026-10-22
- **Categorías arXiv**: `cs.AI`
- **Eje Cognitivo**: Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning
- **Autores**: Yunxiang Luo, Xin Xu, Tianhao Chen, Zhixi Xiong, Peiqi Jiang, Fan Zhang et al.
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.30917)](https://arxiv.org/abs/2610.30917) | [PDF (https://arxiv.org/pdf/2610.30917.pdf)](https://arxiv.org/pdf/2610.30917.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Large language models (LLMs) can translate natural-language optimization problems into solver programs, but reliably producing correct formulations and implementations remains challenging. Existing approaches improve optimization modeling through agentic workflows or task-specific post-training. This raises a practical question: can a lightweight harness using a single model role achieve competitive performance without additional training? We introduce OPTICYCLE and OPTISTATE, two lightweight inference harnesses for optimization modeling, and evaluate them on nine benchmarks comprising 2,634 problems using 11 Qwen variants spanning 0.6B-27B parameters. Our results show that execution-guided revision consistently improves macro accuracy over direct generation for all evaluated models, with gains of up to 49.46 percentage points. Despite their simplicity, both harnesses outperform six adapted agentic workflows in same-model comparisons and four evaluated post-trained optimization models at comparable model sizes, without additional training. Explicit formulation state provides further but model-dependent improvements, suggesting that additional structure is not universally beneficial.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning]**: Orquestar flujos agénticos en etapas especializadas: (1) Agente Investigador/Recuperador (búsqueda documental exacta), (2) Agente Analista/Verificador (contraste de precedentes y normas), y (3) Agente Redactor/Crítico (proyección formal y auditoría de consistencia).
  2. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  3. **[Trazabilidad y Explicabilidad Técnica]**: Explicitar los fundamentos y pasos de derivación desde los datos de entrada hasta la conclusión dispositiva, garantizando auditabilidad completa del razonamiento.

---

### [arXiv:2610.30573] Diagnosing Personalization Failures in Mobile GUI Agents
- **arXiv ID**: `2610.30573` (2610.30573v1)
- **Fecha de Publicación**: 2026-10-22
- **Categorías arXiv**: `cs.AI`
- **Eje Cognitivo**: Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning
- **Autores**: Zhixin Lin, Dongliang Xu, Jungang Li, Shidong Pan, Jun Feng, Yanbin Sun et al.
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.30573)](https://arxiv.org/abs/2610.30573) | [PDF (https://arxiv.org/pdf/2610.30573.pdf)](https://arxiv.org/pdf/2610.30573.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Unlike conventional GUI agents, personalized GUI agents require user preferences to guide sequential execution over changing GUI states. This raises two challenges: determining HOW each preference should alter execution strategy and WHEN it should take effect along the interaction trajectory. Existing benchmarks primarily evaluate overall task success, offering limited insight into these questions. We introduce PrefDiag-Bench with two components: (1) a categorization of preferences into five types, characterizing HOW they affect execution; and (2) a stage-wise diagnostic framework with 1,664 probes, tracing WHEN preferences should take effect and where failures occur. We evaluate eleven GUI agent systems, including end-to-end agents and agentic workflows, under two forms of user context: explicit user profiles and behavioral memory logs. Although existing agents achieve relatively high completion rates on non-personalized tasks, performance is substantially lower on preference-personalized tasks. Even the best-performing model, Seed-2.0-Pro, achieves only 47.17% on Process preferences under explicit user profiles. Agents struggle particularly with Ranking and Process preferences. Further analysis reveals two key capability bottlenecks: selecting relevant evidence from user history and recognizing when preferences should take effect during execution. Controlled interventions that explicitly provide relevant evidence improve end-to-end task success by up to 7.06%. PrefDiag-Bench offers a more systematic evaluation of GUI agents' personalization capabilities beyond overall task success. Code and data are available at https://github.com/Zhixin-L/PrefDiag-Bench.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning]**: Orquestar flujos agénticos en etapas especializadas: (1) Agente Investigador/Recuperador (búsqueda documental exacta), (2) Agente Analista/Verificador (contraste de precedentes y normas), y (3) Agente Redactor/Crítico (proyección formal y auditoría de consistencia).
  2. **[Supervisión Granular por Pasos (Step-Level PRM)]**: Validar secuencialmente cada considerando o nodo de decisión. Si un paso intermedio presenta incertidumbre o ambigüedad, podar esa rama de razonamiento y recalcular desde el último antecedente verificado.
  3. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.

---

### [arXiv:2610.28282] ChartEvo: Self-Evolving Agent Harnesses for Long-Tail Chart Reasoning
- **arXiv ID**: `2610.28282` (2610.28282v1)
- **Fecha de Publicación**: 2026-10-20
- **Categorías arXiv**: `cs.AI`, `cs.CV`
- **Eje Cognitivo**: Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning
- **Autores**: Qi Wang, Peijie Wang, Jun Cao, Haoyang Tong, Xiao-Hui Li, Fei Yin et al.
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.28282)](https://arxiv.org/abs/2610.28282) | [PDF (https://arxiv.org/pdf/2610.28282.pdf)](https://arxiv.org/pdf/2610.28282.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Multimodal large language models (MLLMs) have substantially advanced chart understanding and reasoning, yet their performance remains highly uneven across chart types. While modern MLLMs perform well on common charts, their accuracy drops sharply on long-tail charts with diverse visual structures and reasoning requirements. Tool-augmented agents can improve complex chart reasoning by introducing specialized visual capabilities, but manually engineering strategies and tools for the heterogeneous and evolving long tail is difficult to scale. We introduce \textbf{ChartEvo}, a recursive self-improvement framework that enables chart agents to adapt to underperforming chart types through experience-driven harness-level self-improvement. ChartEvo jointly evolves reusable chart-specific Skills and executable Tools, while learning reusable local tool-call chains to compose evolved capabilities and control the inference overhead of tool-augmented reasoning. On long-tail charts from ChartBench and ChartX, ChartEvo improves accuracy over its base MLLM, Qwen3.7-Plus, by \textbf{45.6\%} and \textbf{32.5\%}, respectively, demonstrating the effectiveness of recursive self-improvement for long-tail chart adaptation.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning]**: Orquestar flujos agénticos en etapas especializadas: (1) Agente Investigador/Recuperador (búsqueda documental exacta), (2) Agente Analista/Verificador (contraste de precedentes y normas), y (3) Agente Redactor/Crítico (proyección formal y auditoría de consistencia).
  2. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  3. **[Trazabilidad y Explicabilidad Técnica]**: Explicitar los fundamentos y pasos de derivación desde los datos de entrada hasta la conclusión dispositiva, garantizando auditabilidad completa del razonamiento.

---

### [arXiv:2610.27797] Toward Agentic AI for the 6G Physical Layer: From Algorithm Discovery to Verified Baseband Silicon
- **arXiv ID**: `2610.27797` (2610.27797v1)
- **Fecha de Publicación**: 2026-10-20
- **Categorías arXiv**: `cs.AI`, `cs.NI`, `eess.SP`
- **Eje Cognitivo**: Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning
- **Autores**: Eric Mittag, Lukas Brechtel, Maximilian Stark, Hans D. Schotten
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.27797)](https://arxiv.org/abs/2610.27797) | [PDF (https://arxiv.org/pdf/2610.27797.pdf)](https://arxiv.org/pdf/2610.27797.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> 6G will be designed faster than it can be built: AI-driven search already proposes physical-layer algorithms at machine speed, while carrying a single one onto embedded baseband silicon remains specialist work. That silicon imposes hard memory and numeric limits, but also exposes cost structures a GPU lacks, and a design flow that never runs on the target sees neither. We present an agentic workflow in which an LLM coding agent implements algorithms on a commercial baseband SoC, optimizes them down to agent-written vector assembly, and validates them on silicon. The agent is guided by a knowledge base of measured platform facts, checked at every step against evaluators it is instructed never to edit, and metered per phase. We showcase the workflow on an AI-discovered orthogonal time frequency space (OTFS) detector portfolio on the open 6G4All platform. It yields twelve kernels that run cycle-exactly on silicon, their optimized versions at 18k-405k cycles (30-660 $μ$s) per frame. It also yields a new detector shaped by the chip's measured costs that needs 13.9% fewer cycles than the port of the discovered detector while matching its error rate, with a measured edge our evaluation cannot statistically resolve, a structure that a hardware-blind search objective had no reason to find. What is not specific to OTFS is the workflow: an LLM agent exploring an implementation space under real hardware limits, with the cost of every choice measured rather than assumed.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning]**: Orquestar flujos agénticos en etapas especializadas: (1) Agente Investigador/Recuperador (búsqueda documental exacta), (2) Agente Analista/Verificador (contraste de precedentes y normas), y (3) Agente Redactor/Crítico (proyección formal y auditoría de consistencia).
  2. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  3. **[Búsqueda Deliberativa y Consenso Interno]**: Generar y contrastar múltiples líneas argumentales (argumento principal, eventuales defensas y criterio de Alzada) seleccionando la solución que maximice la coherencia interna y la estabilidad frente a una eventual apelación.

---

### [arXiv:2610.27572] RaspAssistant as an Agentic Framework for Automating Adsorption Simulation Research in Porous Materials
- **arXiv ID**: `2610.27572` (2610.27572v1)
- **Fecha de Publicación**: 2026-10-20
- **Categorías arXiv**: `cs.AI`
- **Eje Cognitivo**: Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning
- **Autores**: Marko Petković, Susanne Gooijer, José Manuel Vicent-Luna, Vlado Menkovski, Sofía Calero
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.27572)](https://arxiv.org/abs/2610.27572) | [PDF (https://arxiv.org/pdf/2610.27572.pdf)](https://arxiv.org/pdf/2610.27572.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Porous-material adsorption studies require coordinated structure preparation, force-field selection, simulation, validation, and interpretation, making end-to-end automation difficult. We test whether RaspAssistant, a hierarchical multi-agent framework, can carry an adsorption study from force-field preparation through validation and downstream separation analysis. Across twelve multi-agent workflow-reproduction runs spanning four adsorption and separation benchmarks, overall scores ranged from 8.50 to 10.00 on a rubric evaluating workflow correctness, simulation validity, and analysis consistency. In a separate eight-case force-field extraction benchmark, the mean weighted score was 0.967, combining parameter agreement and RASPA readiness. In open-ended studies, the system diagnosed and refined an acetylene force field and, after validating a CO$_2$ force field against MFI experiments, screened 197 pure-silica zeolites that passed automated input checks. These results demonstrate autonomous workflow execution after task specification and input provision: RaspAssistant coordinates, validates, adapts, and documents extended adsorption-simulation workflows while exposing model sensitivity and methodological limitations for expert review.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning]**: Orquestar flujos agénticos en etapas especializadas: (1) Agente Investigador/Recuperador (búsqueda documental exacta), (2) Agente Analista/Verificador (contraste de precedentes y normas), y (3) Agente Redactor/Crítico (proyección formal y auditoría de consistencia).
  2. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  3. **[Búsqueda Deliberativa y Consenso Interno]**: Generar y contrastar múltiples líneas argumentales (argumento principal, eventuales defensas y criterio de Alzada) seleccionando la solución que maximice la coherencia interna y la estabilidad frente a una eventual apelación.

---

### [arXiv:2610.27234] EGI-BENCH: An Enterprise General Intelligence Benchmark Suite
- **arXiv ID**: `2610.27234` (2610.27234v1)
- **Fecha de Publicación**: 2026-10-19
- **Categorías arXiv**: `cs.AI`
- **Eje Cognitivo**: Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning
- **Autores**: Zhiwei Liu, Zhujun Lan, Jielin Qiu, Zixiang Chen, Liangwei Yang, Ming Zhu et al.
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.27234)](https://arxiv.org/abs/2610.27234) | [PDF (https://arxiv.org/pdf/2610.27234.pdf)](https://arxiv.org/pdf/2610.27234.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Enterprise adoption of LLMs in agentic workflows is gated by evaluations that span a wide arc of abilities: CRM operations, heterogeneous-document retrieval, personal data understanding, multi-turn planning, tool use, function calling, long-horizon research, and long-context software engineering. These evaluations live today in separate repositories with divergent runners, dependencies, and scoring conventions, which makes cross-benchmark comparison difficult and obscures what a single aggregate number actually represents. We release EGI-BENCH, a unified LLM agent benchmark suite that consolidates eight enterprise facing agent benchmarks (CRMARENA, HERB, PERSONABENCH, USERBENCH, MCP-UNIVERSE, MCPEVAL, BENCHFORCE, LOCOBENCH) behind a single command-line interface with two runtime-budgeted execution modes. On top of the suite we define the Enterprise General Intelligence (EGI) Score, a six-dimensional framework (M1-M6) whose buckets are populated by fine-grained sub-metrics routed from each benchmark rather than by benchmark-level averages. We describe the suite, the sub-metric routing, and the quick/deep budgets, and report results for fourteen frontier and cost-efficient LLMs spanning the GPT, Claude, and Gemini families under quick mode. Top-line EGI ranges from 39.6 (GPT-4o mini) to 65.6 (gpt-5.5), and no single model dominates every capability axis: gpt-5.5 leads task outcome, planning, and retrieval grounding; Claude Sonnet 4.5 leads tool actioning and safety/abstention; and Claude Haiku 4.5 leads engineering quality. Code is available at https://github.com/SalesforceAIResearch/egi-bench.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning]**: Orquestar flujos agénticos en etapas especializadas: (1) Agente Investigador/Recuperador (búsqueda documental exacta), (2) Agente Analista/Verificador (contraste de precedentes y normas), y (3) Agente Redactor/Crítico (proyección formal y auditoría de consistencia).
  2. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  3. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  4. **[Búsqueda Deliberativa y Consenso Interno]**: Generar y contrastar múltiples líneas argumentales (argumento principal, eventuales defensas y criterio de Alzada) seleccionando la solución que maximice la coherencia interna y la estabilidad frente a una eventual apelación.

---

### [arXiv:2610.26676] Which Model for Which Role? Cost-Efficient Pareto Recommendation for LLM Agentic Workflows
- **arXiv ID**: `2610.26676` (2610.26676v1)
- **Fecha de Publicación**: 2026-10-19
- **Categorías arXiv**: `cs.LG`, `cs.CL`, `stat.ML`
- **Eje Cognitivo**: Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning
- **Autores**: Qian Xie, Wenyue Hua, Yueli He, Sripad Karne, Armaan Agrawal, Nikos Pagonas et al.
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.26676)](https://arxiv.org/abs/2610.26676) | [PDF (https://arxiv.org/pdf/2610.26676.pdf)](https://arxiv.org/pdf/2610.26676.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> LLM agentic workflows increasingly employ different models for specialized roles. Users may prefer different trade-offs between task quality and deployment cost, sometimes also considering latency. Finding good assignments incurs a separate search cost from evaluating multiple candidates. We introduce Cost-Coupled Gittins (CC-Gittins), a multi-objective extension of single-objective cost-aware Gittins search for Pareto recommendation. It exploits the coupling between evaluation and deployment costs: assignments that cost more to deploy also cost more to evaluate. The search alternates between seeking higher quality and lower deployment cost, reusing each evaluation to inform both searches. After each batch, CC-Gittins recommends assignments that are nondominated under uncertainty-adjusted estimates of quality and deployment cost. We evaluate CC-Gittins on eight quality--cost matrices from workflows with two to five roles and up to 1,681 candidate assignments. We also evaluate the method with latency as a third objective. Across the eight benchmarks, CC-Gittins recovers a substantial fraction of the true Pareto frontier at roughly 10% of the exhaustive-evaluation cost, and recovers most of the frontier with few false positives by 30%.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning]**: Orquestar flujos agénticos en etapas especializadas: (1) Agente Investigador/Recuperador (búsqueda documental exacta), (2) Agente Analista/Verificador (contraste de precedentes y normas), y (3) Agente Redactor/Crítico (proyección formal y auditoría de consistencia).
  2. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  3. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  4. **[Búsqueda Deliberativa y Consenso Interno]**: Generar y contrastar múltiples líneas argumentales (argumento principal, eventuales defensas y criterio de Alzada) seleccionando la solución que maximice la coherencia interna y la estabilidad frente a una eventual apelación.

---

### [arXiv:2610.25919] LEAPS: Long-context Evaluation of Adaptive Pattern Learning and State Tracking
- **arXiv ID**: `2610.25919` (2610.25919v1)
- **Fecha de Publicación**: 2026-10-19
- **Categorías arXiv**: `cs.CL`
- **Eje Cognitivo**: Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning
- **Autores**: Howard Yen, Nitya Mani, Alex Renda, Christopher S. Hardin
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.25919)](https://arxiv.org/abs/2610.25919) | [PDF (https://arxiv.org/pdf/2610.25919.pdf)](https://arxiv.org/pdf/2610.25919.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Long-context language models (LCLMs) power agents that act over long trajectories, from improving a codebase to running research experiments to forecasters that condition on lengthy histories. These applications draw on three distinct long-context capabilities: recall, where the answer is a fact present in the context; state tracking, where the outcome can be computed by performing a series of transformations to a specified state; and pattern learning, where the goal is to make a prediction by sampling from a distribution inferred from many observations. Existing benchmarks primarily focus on the first capability. In this work, we introduce LEAPS (Long-context Evaluation of Adaptive Pattern learning and State tracking), a collection of 12 novel datasets, spanning agentic workflows, behavioral modeling, and forecasting of market and world events. By construction, LEAPS is resistant to data contamination, extends to millions of input tokens, and uses reliable metrics. We evaluate 30 API and open models from 8K to 512K input tokens. LEAPS distinguishes models that perform near perfectly on recall tasks, finding that such models' state tracking and pattern learning abilities can vary significantly and degrade much more dramatically with increasing input lengths--even for pattern learning, where more observations should make learning a theoretically easier task. Moreover, thinking models often underperform their base counterparts, exhausting their generation budget or oversimplifying the task. We hope LEAPS can guide the development of the next generation of LCLMs.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning]**: Orquestar flujos agénticos en etapas especializadas: (1) Agente Investigador/Recuperador (búsqueda documental exacta), (2) Agente Analista/Verificador (contraste de precedentes y normas), y (3) Agente Redactor/Crítico (proyección formal y auditoría de consistencia).
  2. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  3. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  4. **[Búsqueda Deliberativa y Consenso Interno]**: Generar y contrastar múltiples líneas argumentales (argumento principal, eventuales defensas y criterio de Alzada) seleccionando la solución que maximice la coherencia interna y la estabilidad frente a una eventual apelación.

---

### [arXiv:2610.25540] Auditing Tool Traces in Agentic LLMs: Source Localization and Counterfactual Dependence Testing
- **arXiv ID**: `2610.25540` (2610.25540v1)
- **Fecha de Publicación**: 2026-10-18
- **Categorías arXiv**: `cs.AI`, `cs.CL`
- **Eje Cognitivo**: Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning
- **Autores**: Junhao Liu, Tianxiao Li, Yongxian Wu, Ziheng Duan, Ren Li, Jing Zhang et al.
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.25540)](https://arxiv.org/abs/2610.25540) | [PDF (https://arxiv.org/pdf/2610.25540.pdf)](https://arxiv.org/pdf/2610.25540.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Agentic LLMs increasingly support scientific prediction by grounding decisions in external evidence. In biology, they promise accurate, interpretable predictions for important problems by integrating complex experimental and computational evidence. However, serialized tool results can contain hidden label shortcuts, such as dataset identifiers or template artifacts, that create apparent success without biological reasoning. To address this risk, we introduce a two-stage audit. Stage 1, Per-Tool TF-IDF Decomposition (PT2D), localizes label-predictive patterns to individual tool results while avoiding signal dilution in the concatenated tool trace. Stage 2, Token-Class Redaction, counterfactually tests whether the frozen LLM depends on the localized shortcut. We apply this audit to TCR-pMHC binding, where tool augmentation substantially outperforms a no-evidence baseline. At face value, this suggests that the LLM has learned to use scientific evidence. The audit overturns this interpretation: PT2D localizes the strongest signal to identifiers in one tool result, and redacting them reduces performance to chance. These findings show how hidden label shortcuts can masquerade as scientific reasoning or discovery, motivating source-level audits before benchmark gains are trusted.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning]**: Orquestar flujos agénticos en etapas especializadas: (1) Agente Investigador/Recuperador (búsqueda documental exacta), (2) Agente Analista/Verificador (contraste de precedentes y normas), y (3) Agente Redactor/Crítico (proyección formal y auditoría de consistencia).
  2. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  3. **[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.

---

### [arXiv:2610.25281] Bridging Concepts: Multi-Agent Reasoning over Scientific Concept Graphs for High-Impact Research Prediction
- **arXiv ID**: `2610.25281` (2610.25281v1)
- **Fecha de Publicación**: 2026-10-18
- **Categorías arXiv**: `cs.AI`, `cs.IR`, `cs.LG`
- **Eje Cognitivo**: Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning
- **Autores**: Donggyu Yoon, Minsung Hwang, Juneha Baek, Donghyuk Shin, Joyce Jiyoung Whang
- **Enlaces Oficiales**: [Abstract (https://arxiv.org/abs/2610.25281)](https://arxiv.org/abs/2610.25281) | [PDF (https://arxiv.org/pdf/2610.25281.pdf)](https://arxiv.org/pdf/2610.25281.pdf)

#### Resumen Técnico (Technical Abstract & Mechanism)
> Within a research community, new topics often emerge when previously unconnected concepts are first studied together. We construct scientific concept graphs (SCGs)--domain knowledge graphs whose nodes are fine-grained research concepts extracted from paper text by LLMs and whose edges capture their co-occurrence in papers--and study the task of forecasting high-impact concept pairs, i.e., discovering concept pairs that are currently unconnected but will have high impact when connected. To this end, we introduce new benchmark datasets constructed from CIKM, KDD, and SIGIR conference papers, with varied prediction settings, including impact forecasting for emerging concepts unseen during training. We propose MiroGraph, a Multi-agent reasoning framework with scientific concept Graphs, in which a feature designer agent designs predictive features for a given concept pair from structural, semantic, and trend perspectives, and then three LLM agents compute the actual feature values from the enclosing subgraph of the concept pair. Using these feature values, a classifier designer agent constructs a classifier that predicts the final impact labels. MiroGraph outperforms various impact forecasting and temporal link prediction methods.

#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)
  1. **[Directiva de Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning]**: Orquestar flujos agénticos en etapas especializadas: (1) Agente Investigador/Recuperador (búsqueda documental exacta), (2) Agente Analista/Verificador (contraste de precedentes y normas), y (3) Agente Redactor/Crítico (proyección formal y auditoría de consistencia).
  2. **[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.
  3. **[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.
  4. **[Búsqueda Deliberativa y Consenso Interno]**: Generar y contrastar múltiples líneas argumentales (argumento principal, eventuales defensas y criterio de Alzada) seleccionando la solución que maximice la coherencia interna y la estabilidad frente a una eventual apelación.

---
