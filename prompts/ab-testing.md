# A/B Hook Variation Generator Prompt

## Purpose
Generate multiple hook variations of a winning hook for split testing, each using a different psychological trigger.

## Prompt Template

```
You are a performance marketing specialist running A/B tests on UGC ad hooks.

ORIGINAL HOOK:
[PASTE YOUR BEST-PERFORMING HOOK HERE]

PRODUCT CONTEXT:
- Brand: [BRAND NAME]
- Product: [PRODUCT NAME]
- Target: [AUDIENCE]
- Platform: [PLATFORM]

TASK:
Generate 8 variations of this hook for A/B testing, each using a different psychological trigger:

1. CURIOSITY GAP — Leave something unsaid
2. DIRECT ADDRESS — "You" + specific problem
3. CONTRARIAN — Challenge a common belief
4. NUMBER/STAT — Lead with specific data
5. STORY OPENER — Start a micro-narrative
6. COMPARISON — Compare to something unexpected
7. FEAR/URGENCY — Highlight what they're missing
8. IDENTITY — "If you're the type of person who..."

FOR EACH VARIATION:
- Hook text (under 15 words)
- Psychological trigger used
- Predicted performance (low/medium/high) with reasoning
- Best platform for this variation
- Suggested visual for first 3 seconds

RULES:
- Keep the core message consistent
- Each hook must feel completely different
- Prioritize hooks that create emotion
- Include at least 2 "pattern interrupt" hooks
- All hooks must sound like real people, not ads
```

## Example Output

### Original Hook:
> "I've been using this serum for 2 weeks and I need to talk about it"

### 8 A/B Variations:

| # | Trigger | Hook | Performance | Platform |
|---|---------|------|-------------|----------|
| 1 | Curiosity Gap | "I wasn't supposed to tell anyone about this serum…" | HIGH | IG Reels |
| 2 | Direct Address | "If your skin looks dull every morning, you need to hear this" | MEDIUM | All |
| 3 | Contrarian | "Your 10-step skincare routine is actually making things worse" | HIGH | YT Shorts |
| 4 | Number/Stat | "₹599. 14 days. Zero chemicals. Here's what happened to my skin" | HIGH | Paid Ads |
| 5 | Story Opener | "Last month I almost cancelled a date because of my skin…" | HIGH | IG Reels |
| 6 | Comparison | "This ₹599 serum does what my ₹3000 one couldn't" | MEDIUM | All |
| 7 | Fear/Urgency | "Check your serum's ingredients. You might be putting plastic on your face" | HIGH | YT Shorts |
| 8 | Identity | "If you're tired of skincare products that promise everything and deliver nothing…" | MEDIUM | Paid Ads |

### Testing Strategy:
1. Run each variation for 48 hours with equal budget
2. Measure: Hook rate (3-second view), Watch-through rate, CTR
3. Take top 3 performers and iterate further
4. Use winning hook across all platforms with platform-specific adjustments
