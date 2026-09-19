// lib/data/judging.ts
// Judging criteria weights — exactly as published in the Challenge Book.

export const judgingCriteria = [
  {
    id: 'problem-understanding',
    name: 'Problem Understanding & Relevance',
    weight: 10,
    description:
      'Does the team clearly articulate the problem domain and why their solution addresses it?',
  },
  {
    id: 'agentic-reasoning',
    name: 'Agentic Reasoning & Planning',
    weight: 20,
    description:
      'Does the system demonstrate autonomous multi-step reasoning, decomposition and planning — not just prompt-response?',
  },
  {
    id: 'tool-integration',
    name: 'Tool / API / System Integration',
    weight: 15,
    description:
      'Does the agent call real tools, APIs or systems and act on the results?',
  },
  {
    id: 'autonomous-completion',
    name: 'Autonomous Task Completion',
    weight: 20,
    description:
      'Does the system complete meaningful end-to-end tasks without constant human prompting?',
  },
  {
    id: 'reliability',
    name: 'Reliability & Handling Failure Cases',
    weight: 15,
    description:
      'How well does the system handle unexpected inputs, API failures, ambiguous data and edge cases?',
  },
  {
    id: 'innovation',
    name: 'Innovation',
    weight: 10,
    description:
      'Does the solution introduce a novel approach, architecture or application of AI/agentic systems?',
  },
  {
    id: 'ux-demo',
    name: 'UX / Demonstration',
    weight: 10,
    description:
      'Is the demonstration clear, compelling and does it show the system working end-to-end?',
  },
]

// Sanity check: weights must sum to 100
const totalWeight = judgingCriteria.reduce((sum, c) => sum + c.weight, 0)
if (totalWeight !== 100) {
  throw new Error(`Judging weights must sum to 100, got ${totalWeight}`)
}

export const demoTrace = [
  { step: 'INPUT', label: 'Input received', description: 'System receives a realistic real-world input' },
  { step: 'PLAN', label: 'Agent plans', description: 'Agent decomposes the task and selects tools' },
  { step: 'TOOL USE', label: 'Tools called', description: 'APIs, databases or systems are queried' },
  { step: 'DECISION', label: 'Decision made', description: 'Agent reasons over results and decides next action' },
  { step: 'ACTION', label: 'Action taken', description: 'Agent executes or proposes a real-world action' },
  { step: 'VERIFICATION', label: 'Verified', description: 'Outcome is checked, failures handled, human alerted if needed' },
]
