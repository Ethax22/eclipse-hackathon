// lib/data/challenges.ts
// Source of truth for all challenge content.
// Derived from the PROJECT: ECLIPSE Challenge Book.
// Do NOT alter official titles or mandatory capabilities.

export type Challenge = {
  id: string
  slug: string
  number: string
  title: string
  category: string
  categorySlug: string
  oneLiner: string
  problemContext: string
  challenge: string
  illustrativeScenario: string
  safetyGovernance?: string
  whatToDemo: string
  capabilities: string[]
  executionTrace: string[]
  isOpenX?: boolean
}

export const challenges: Challenge[] = [
  {
    id: 'c01',
    slug: 'production-incident-investigation',
    number: '01',
    title: 'AI Agent for Production Incident Investigation & Recovery',
    category: 'Operations',
    categorySlug: 'operations',
    oneLiner: 'Autonomously investigate production incidents across multiple data sources and orchestrate recovery.',
    problemContext:
      'Production incidents cost organisations millions in downtime and engineering hours. Traditional runbooks are manual, slow and rely on institutional knowledge. An AI agent that can span monitoring dashboards, logs, traces and alert histories to pinpoint root causes — and safely act on them — transforms incident response.',
    challenge:
      'Build an AI agent that autonomously investigates a production incident from initial alert through to a structured post-incident report, with human approval gates for high-impact remediation actions.',
    illustrativeScenario:
      'A spike in payment failures triggers a PagerDuty alert. The agent correlates Datadog metrics, Elasticsearch logs and a recent deployment event, hypothesises a database connection-pool exhaustion caused by the new release, presents a confidence-annotated root-cause summary to the on-call engineer, and — upon approval — rolls back the deployment and restarts the affected services.',
    safetyGovernance:
      'All high-impact remediation actions (restarts, rollbacks, configuration changes) must require explicit human approval before execution. The agent must record a complete audit trail.',
    whatToDemo:
      'Demonstrate an end-to-end working system that ingests a realistic incident scenario, reasons across multiple data sources, proposes a root cause with confidence estimate, plans remediation steps, requests human approval, executes approved actions, and generates a structured post-incident report.',
    capabilities: [
      'Multi-source investigation (logs, metrics, traces, alerts)',
      'Tool / API calling',
      'Reasoning over temporal events',
      'Root-cause hypothesis generation',
      'Confidence estimation',
      'Remediation planning',
      'Human approval for high-impact actions',
      'Post-incident report generation',
    ],
    executionTrace: ['Input alert received', 'Plan investigation strategy', 'Query logs & metrics APIs', 'Correlate events across sources', 'Generate root-cause hypothesis', 'Request human approval', 'Execute approved remediation', 'Verify resolution & generate report'],
  },
  {
    id: 'c02',
    slug: 'transaction-mismatch-resolution',
    number: '02',
    title: 'Autonomous Resolution of Cross-System Transaction Mismatches',
    category: 'Finance',
    categorySlug: 'finance',
    oneLiner: 'Match and resolve transaction discrepancies across financial systems with an auditable AI agent.',
    problemContext:
      'Financial reconciliation teams spend enormous effort manually matching transactions across payment processors, ERP systems and bank statements. Duplicate payments, partial settlements and missing references create costly exceptions that require expert investigation.',
    challenge:
      'Build an AI agent that ingests transaction data from multiple systems, detects mismatches, retrieves supporting evidence, classifies discrepancy types, recommends resolution actions, and produces an auditable action trail — with human approval for consequential financial updates.',
    illustrativeScenario:
      'A mid-month reconciliation reveals 47 unmatched transactions between the payment gateway and the ERP. The agent cross-references order IDs, timestamps and amounts, identifies three categories — duplicate retry charges, currency rounding errors and missing settlement references — and proposes automated write-offs for sub-threshold differences while escalating consequential corrections for finance team approval.',
    safetyGovernance:
      'Consequential financial updates must be gated by human approval. The system must maintain an immutable audit log of all classification decisions and actions taken.',
    whatToDemo:
      'Demonstrate an end-to-end reconciliation flow: ingest mismatched transaction data, classify each discrepancy, retrieve evidence, recommend actions, obtain human approval for consequential updates, and produce an auditable action trail.',
    capabilities: [
      'Cross-system data ingestion',
      'Transaction / entity matching',
      'Evidence retrieval',
      'Context-aware classification',
      'Partial / duplicate / missing payment detection',
      'Action recommendation',
      'Auditable action trail',
      'Human approval for consequential updates',
    ],
    executionTrace: ['Ingest multi-system transaction data', 'Plan matching strategy', 'Execute entity-matching tools', 'Classify discrepancy types', 'Retrieve supporting evidence', 'Generate action recommendations', 'Request human approval for consequential items', 'Log all decisions & actions'],
  },
  {
    id: 'c03',
    slug: 'contract-to-business-actions',
    number: '03',
    title: 'From Contract Language to Executable Business Actions',
    category: 'Legal / Compliance',
    categorySlug: 'legal-compliance',
    oneLiner: 'Extract obligations from contracts and automatically generate actionable business workflows.',
    problemContext:
      'Enterprises manage thousands of contracts containing obligations, deadlines and conditional clauses buried in dense legal language. Missing a compliance deadline or failing to act on a contractual obligation can result in penalties, disputes and reputational damage.',
    challenge:
      'Build an AI agent that parses contract documents, extracts obligations with responsible parties and deadlines, handles conditional clauses and document hierarchies, generates executable task workflows, and manages reminders and escalations — maintaining a compliance record throughout.',
    illustrativeScenario:
      'A supplier contract contains a base agreement, two amendments and a pricing schedule. Amendment 2 supersedes a clause in the original. The agent resolves the conflict correctly, extracts 14 obligations, assigns them to three departments, generates calendar reminders and creates a compliance checklist. When a deadline is missed, it escalates automatically.',
    safetyGovernance:
      'Conflict resolution across amendments must be documented. All extracted obligations must be traceable to the source clause in the original document.',
    whatToDemo:
      'Demonstrate extraction from a multi-document contract set (including amendment conflict resolution), workflow generation, reminder/escalation logic, and compliance record creation.',
    capabilities: [
      'Obligation extraction',
      'Responsible-party and deadline identification',
      'Conditional clause reasoning',
      'Task / workflow generation',
      'Reminders and escalations',
      'Compliance record creation',
      'Document hierarchy handling',
      'Conflict resolution across amendments',
    ],
    executionTrace: ['Ingest contract documents & amendments', 'Parse and understand document hierarchy', 'Extract obligations and conditions', 'Resolve conflicts across versions', 'Identify responsible parties & deadlines', 'Generate task workflows', 'Set reminders & escalation triggers', 'Create compliance record'],
  },
  {
    id: 'c04',
    slug: 'autonomous-procurement',
    number: '04',
    title: 'Autonomous Requirement-to-Quotation Procurement System',
    category: 'Procurement',
    categorySlug: 'procurement',
    oneLiner: 'Transform procurement requests into evaluated quotations with an autonomous AI agent.',
    problemContext:
      'Procurement teams process hundreds of requests manually — extracting requirements from emails and documents, normalising specifications, soliciting vendor quotes and evaluating trade-offs under cost and compliance constraints. This is repetitive, time-consuming and error-prone.',
    challenge:
      'Build an AI agent that extracts requirements from unstructured requests, normalises specifications, checks constraints, analyses costs and trade-offs, detects anomalies, simulates vendor clarification and negotiation, and routes for approval.',
    illustrativeScenario:
      'A facilities request arrives as a loosely formatted email. The agent extracts 12 specifications, normalises units, identifies a non-compliant cheaper vendor (missing required certification), flags the anomaly, simulates a clarification exchange to request compliance documentation, and presents an evaluated shortlist to the procurement manager for approval.',
    safetyGovernance:
      'Vendor selection decisions must include an explicit compliance check. Any non-compliant vendor recommendation must be clearly flagged with the specific failed criterion.',
    whatToDemo:
      'Demonstrate requirement extraction from unstructured input, specification normalisation, vendor evaluation with anomaly detection, simulated negotiation, and approval workflow.',
    capabilities: [
      'Requirement extraction',
      'Document / email parsing',
      'Specification normalisation',
      'Constraint checking',
      'Cost and trade-off analysis',
      'Anomaly detection',
      'Simulated vendor clarification / negotiation',
      'Approval workflow',
    ],
    executionTrace: ['Parse procurement request', 'Extract and normalise specifications', 'Check compliance constraints', 'Evaluate vendors & costs', 'Detect anomalies & non-compliance', 'Simulate vendor clarification', 'Generate evaluated shortlist', 'Route for approval'],
  },
  {
    id: 'c05',
    slug: 'issue-to-pull-request',
    number: '05',
    title: 'Issue-to-Pull-Request AI Engineering Agent',
    category: 'Software Engineering',
    categorySlug: 'software-engineering',
    oneLiner: 'Autonomously resolve GitHub issues and generate review-ready pull requests.',
    problemContext:
      'Software engineering teams face growing backlogs of issues — bugs, feature requests, and technical debt. An AI agent that can understand an issue, explore the codebase, form a hypothesis, implement a fix, run tests and generate a pull request — while remaining reviewable by a human — dramatically accelerates delivery.',
    challenge:
      'Build an AI agent that takes a GitHub issue, explores the relevant codebase, forms a technical hypothesis, implements code modifications, executes tests, analyses failures, iterates, and produces a patch or pull request ready for human review before deployment.',
    illustrativeScenario:
      'Issue #247 reports a duplicate-order bug triggered by a retry mechanism. The agent explores the order service, identifies the missing idempotency key, implements the fix, runs the test suite (3 failures → 2 iterations → all passing), and opens a PR with a structured description referencing the issue, the root cause, the fix and the test results.',
    safetyGovernance:
      'No code may be merged or deployed without explicit human review and approval of the pull request. The agent must not have write access beyond creating draft PRs.',
    whatToDemo:
      'Demonstrate issue understanding, codebase exploration, hypothesis formation, iterative code modification, test execution and failure analysis, and pull request generation.',
    capabilities: [
      'Repository exploration',
      'Issue / acceptance-criteria understanding',
      'Technical hypothesis formation',
      'Code modification',
      'Test execution',
      'Failure analysis and iteration',
      'Patch / PR generation',
      'Human review before deployment',
    ],
    executionTrace: ['Parse issue & acceptance criteria', 'Explore repository structure', 'Form technical hypothesis', 'Implement code changes', 'Execute test suite', 'Analyse failures & iterate', 'Generate patch / PR', 'Request human review'],
  },
  {
    id: 'open-x',
    slug: 'open-x',
    number: 'X',
    title: 'OPEN-X — Open Innovation — Build Beyond the Brief',
    category: 'Open Innovation',
    categorySlug: 'open-innovation',
    oneLiner: 'Define your own real-world problem and build a GenAI, Agentic AI or intelligent automation solution.',
    problemContext:
      'Not every problem fits a predefined category. OPEN-X invites teams to identify a genuine real-world challenge and demonstrate that an agentic or AI-powered system can meaningfully address it.',
    challenge:
      'Teams may define their own real-world problem using GenAI, Agentic AI or intelligent automation. The solution must demonstrate a meaningful AI or agent component — not merely a UI wrapper around a foundation model.',
    illustrativeScenario:
      'Examples could include: an autonomous research agent that synthesises academic literature, an AI system that monitors supply-chain anomalies in real time, or an agent that assists humanitarian organisations in coordinating resources. The scope is yours — the bar is agency, reasoning and real-world impact.',
    whatToDemo:
      'A complete, end-to-end working system demonstrating genuine agentic reasoning and real-world applicability. Judges will evaluate using the same seven criteria as curated challenges.',
    capabilities: [
      'Problem definition and framing',
      'Target user identification',
      'Existing gap / opportunity analysis',
      'Proposed solution design',
      'AI / Agent component design',
      'Working demonstration',
      'Impact articulation',
    ],
    executionTrace: ['Define problem & target users', 'Identify existing gap', 'Design solution architecture', 'Build AI / agent component', 'Demonstrate end-to-end workflow', 'Measure / estimate impact', 'Present findings'],
    isOpenX: true,
  },
]

export const getChallengeBySlug = (slug: string): Challenge | undefined =>
  challenges.find((c) => c.slug === slug)

export const curatedChallenges = challenges.filter((c) => !c.isOpenX)
export const openXChallenge = challenges.find((c) => c.isOpenX)!
