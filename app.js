// ===== DATA =====

const hooksData = [
  {
    id: 1,
    category: "curiosity",
    text: "I was about to throw this serum away… then I saw my skin the next morning",
    platform: "Instagram Reels",
    engagement: "High curiosity gap"
  },
  {
    id: 2,
    category: "curiosity",
    text: "My dermatologist said I was wasting money on skincare — until I showed her this",
    platform: "YouTube Shorts",
    engagement: "Authority + curiosity"
  },
  {
    id: 3,
    category: "curiosity",
    text: "Why is nobody talking about this ₹599 serum that outperforms ₹3000 ones?",
    platform: "Instagram Reels",
    engagement: "Price comparison hook"
  },
  {
    id: 4,
    category: "pain",
    text: "If your skin looks dull even after a 10-step routine, watch this",
    platform: "All Platforms",
    engagement: "Addresses frustration"
  },
  {
    id: 5,
    category: "pain",
    text: "I spent ₹20,000 on skincare last year. Not one product worked. Then I found this",
    platform: "Instagram Ads",
    engagement: "Financial pain point"
  },
  {
    id: 6,
    category: "pain",
    text: "Stop putting chemicals on your face. Here's what I use instead",
    platform: "YouTube Shorts",
    engagement: "Fear-based + solution"
  },
  {
    id: 7,
    category: "social",
    text: "50,000 women switched to this serum this month. Here's why I did too",
    platform: "Paid Ads",
    engagement: "Social proof + bandwagon"
  },
  {
    id: 8,
    category: "social",
    text: "My best friend has the best skin I've ever seen. I finally asked her secret",
    platform: "Instagram Reels",
    engagement: "Story-driven social proof"
  },
  {
    id: 9,
    category: "social",
    text: "This serum has 4,000+ five-star reviews. I had to try it myself",
    platform: "YouTube Shorts",
    engagement: "Review-based proof"
  },
  {
    id: 10,
    category: "shock",
    text: "I read the ingredients on my old serum. I was literally putting PLASTIC on my face",
    platform: "Instagram Reels",
    engagement: "Shock + education"
  },
  {
    id: 11,
    category: "shock",
    text: "Your ₹2000 serum has the SAME ingredients as a ₹200 one. Let me prove it",
    platform: "YouTube Shorts",
    engagement: "Price shock + proof"
  },
  {
    id: 12,
    category: "shock",
    text: "The skincare industry is lying to you. Here's what actually works for glowing skin",
    platform: "All Platforms",
    engagement: "Industry expose"
  }
];

const scriptsData = [
  {
    id: 0,
    title: "The Honest Review",
    subtitle: "Authentic, camera-facing review that feels like a friend's recommendation",
    duration: "30 seconds",
    platform: "Instagram Reels",
    tone: "Friendly & Casual",
    blocks: [
      {
        label: "HOOK",
        time: "0-3s",
        text: "Okay so I've been using this serum for 2 weeks and I need to talk about it…",
        visual: "Close-up selfie, natural lighting, speaking directly to camera"
      },
      {
        label: "PROBLEM",
        time: "3-8s",
        text: "So my skin has been SO dull lately. Like, I tried everything — expensive brands, DIY masks, even drinking more water. Nothing was working.",
        visual: "Casual setting, bedroom or bathroom mirror"
      },
      {
        label: "SOLUTION",
        time: "8-18s",
        text: "Then my friend told me about GlowNaturals Vitamin C Serum. It's all natural — no parabens, no chemicals — and it's only ₹599. I was skeptical but I tried it anyway.",
        visual: "Show the product, applying it, close-up of the bottle label"
      },
      {
        label: "PROOF",
        time: "18-25s",
        text: "Look at my skin right now. No filter, no editing. This is literally 14 days of using it every night. My dark spots are fading and my skin just… glows.",
        visual: "Close-up of glowing skin, turn head to show different angles, no filter"
      },
      {
        label: "CTA",
        time: "25-30s",
        text: "Link in bio — they have 20% off right now. Honestly at ₹599 it's already a steal. Try it. Your skin will thank you 💛",
        visual: "Point down to the bio, smile, tap the link gesture"
      }
    ]
  },
  {
    id: 1,
    title: "The Before/After Transformation",
    subtitle: "Visual-first script showcasing dramatic skin transformation over 14 days",
    duration: "25 seconds",
    platform: "Instagram Reels + Ads",
    tone: "Excited & Genuine",
    blocks: [
      {
        label: "HOOK",
        time: "0-3s",
        text: "This is my skin 14 days ago. And THIS is my skin now. Same camera, same lighting, no filter.",
        visual: "Split screen or quick cut — dull skin 'before' vs glowing skin 'after'"
      },
      {
        label: "PROBLEM",
        time: "3-8s",
        text: "I had the worst hyperpigmentation. Dark patches everywhere, uneven tone — I wouldn't even leave the house without foundation.",
        visual: "Show old photos/videos of skin struggling, applying heavy makeup"
      },
      {
        label: "SOLUTION",
        time: "8-16s",
        text: "All I did was add ONE product to my routine — GlowNaturals Vitamin C Serum. Every night, 3 drops, massage it in. That's IT. No complicated routine.",
        visual: "Demonstrate the simple application — 3 drops on fingers, apply to face"
      },
      {
        label: "PROOF",
        time: "16-20s",
        text: "14 days later and my skin is literally transforming. My dark spots are half as visible. My friends keep asking me what I'm doing differently.",
        visual: "Close-up of clear, glowing skin, touching face, smiling"
      },
      {
        label: "CTA",
        time: "20-25s",
        text: "Use code GLOW20 for 20% off. Link in bio. Don't sleep on this one 🌿",
        visual: "Hold up product, text overlay with discount code"
      }
    ]
  },
  {
    id: 2,
    title: "The Myth Buster",
    subtitle: "Educational format that debunks skincare myths while positioning the product",
    duration: "30 seconds",
    platform: "YouTube Shorts",
    tone: "Informative & Bold",
    blocks: [
      {
        label: "HOOK",
        time: "0-3s",
        text: "Stop putting chemicals on your face. Seriously. Let me show you what I mean.",
        visual: "Hold up a popular chemical-laden product, look concerned, turn label to camera"
      },
      {
        label: "PROBLEM",
        time: "3-10s",
        text: "I flipped my old serum around and read the ingredients. Parabens, sulfates, synthetic fragrances — stuff that your skin ABSORBS. And we wonder why we're breaking out?",
        visual: "Point at ingredients, zoom in on bad chemicals, text overlay highlighting them"
      },
      {
        label: "SOLUTION",
        time: "10-20s",
        text: "That's why I switched to GlowNaturals. Look at these ingredients — Vitamin C, Hyaluronic Acid, Aloe Vera, Niacinamide. All natural. Dermatologist tested. And zero harmful chemicals.",
        visual: "Show GlowNaturals label, point at each ingredient, compare side by side"
      },
      {
        label: "PROOF",
        time: "20-25s",
        text: "And the best part? It ACTUALLY works. My skin has never been clearer. Plus they have a 30-day money-back guarantee — so literally zero risk.",
        visual: "Show bare face close-up, confident expression"
      },
      {
        label: "CTA",
        time: "25-30s",
        text: "Check link in description. Start treating your skin better — it's the only skin you've got.",
        visual: "Point down, encouraging expression, logo overlay"
      }
    ]
  },
  {
    id: 3,
    title: "The GRWM (Get Ready With Me)",
    subtitle: "Morning/night routine format showing product in real daily use",
    duration: "35 seconds",
    platform: "Instagram Reels",
    tone: "Warm & Relatable",
    blocks: [
      {
        label: "HOOK",
        time: "0-3s",
        text: "Night skincare routine that actually gave me results 🌙✨ Get ready for bed with me!",
        visual: "Bathroom mirror, cozy lighting, fresh-faced, about to start routine"
      },
      {
        label: "ROUTINE START",
        time: "3-10s",
        text: "First, I cleanse — nothing fancy. Just a gentle face wash. Pat dry. Then THIS is the game changer…",
        visual: "Show cleansing process, sped up slightly, satisfying ASMR-like shots"
      },
      {
        label: "PRODUCT INTRO",
        time: "10-22s",
        text: "GlowNaturals Vitamin C Serum. I do 3 drops — one here, here, and here — and just massage it in. It absorbs SO fast, not sticky at all. And it smells like actual oranges, not chemicals.",
        visual: "Close-up application, satisfying skin shots, happy expression"
      },
      {
        label: "RESULTS",
        time: "22-30s",
        text: "I've been doing this every night for 3 weeks and my skin literally looks different. Brighter, smoother, my dark spots are fading — and I'm spending less than I used to.",
        visual: "Morning after shot — fresh glowing skin, natural light"
      },
      {
        label: "CTA",
        time: "30-35s",
        text: "Everything I use is linked in bio 💛 The serum is only ₹599 and honestly it's the best skincare investment I've made.",
        visual: "Final mirror shot, smile, point to bio"
      }
    ]
  },
  {
    id: 4,
    title: "The Story Arc",
    subtitle: "Narrative-driven script with emotional journey from struggle to confidence",
    duration: "40 seconds",
    platform: "Paid Ads (Meta)",
    tone: "Storytelling & Emotional",
    blocks: [
      {
        label: "HOOK",
        time: "0-3s",
        text: "6 months ago, I cancelled plans because I didn't want anyone to see my skin.",
        visual: "Sit on bed, looking at phone, worried expression, muted colors"
      },
      {
        label: "STRUGGLE",
        time: "3-12s",
        text: "I tried everything. Expensive dermatologist visits, trending products, home remedies — my bathroom looked like a pharmacy. Nothing worked. I was spending money I didn't have on products that made things worse.",
        visual: "Show cluttered bathroom shelf, throwing away products, frustrated expressions"
      },
      {
        label: "TURNING POINT",
        time: "12-22s",
        text: "Then one day, a girl at work complimented my friend's skin. I asked her what she uses. She pulled out this little bottle of GlowNaturals Vitamin C Serum. She said 'Just try it for 2 weeks.' So I did.",
        visual: "Show the bottle reveal moment, first application, hopeful but skeptical"
      },
      {
        label: "TRANSFORMATION",
        time: "22-32s",
        text: "Day 7, I noticed my skin felt softer. Day 10, my dark patches started fading. By day 14… I went out without foundation for the first time in MONTHS. No filter needed anymore.",
        visual: "Day-by-day progression, building to confident mirror moment, warm colors"
      },
      {
        label: "CTA",
        time: "32-40s",
        text: "If you're where I was — spending too much on skincare that doesn't work — try GlowNaturals. ₹599. 30-day money-back guarantee. What do you have to lose? Link below.",
        visual: "Direct to camera, genuine smile, product in hand, link overlay"
      }
    ]
  },
  {
    id: 5,
    title: "The Quick Tips",
    subtitle: "Fast-paced, high-value format with 3 quick tips ending with product recommendation",
    duration: "20 seconds",
    platform: "YouTube Shorts + Reels",
    tone: "Energetic & Educational",
    blocks: [
      {
        label: "HOOK",
        time: "0-2s",
        text: "3 reasons your skin looks dull — and how to fix it FAST ⚡",
        visual: "Direct to camera, hold up 3 fingers, quick zoom-in"
      },
      {
        label: "TIP 1",
        time: "2-6s",
        text: "One — you're using products with harsh chemicals. Check your labels. If it has parabens or sulfates, throw it out.",
        visual: "Quick cut, hold up product label, X mark overlay"
      },
      {
        label: "TIP 2",
        time: "6-10s",
        text: "Two — you're skipping Vitamin C. It's the #1 ingredient for brightness and evening out skin tone.",
        visual: "Text overlay: 'VITAMIN C = GLOW', hold up orange, educational tone"
      },
      {
        label: "TIP 3 + SOLUTION",
        time: "10-16s",
        text: "Three — you need a serum that's actually clean. This is what I use — GlowNaturals Vitamin C Serum. Natural ingredients, ₹599, and it works in 14 days.",
        visual: "Reveal the product, quick application shots, before/after flash"
      },
      {
        label: "CTA",
        time: "16-20s",
        text: "Save this video. Link in bio. Your glow-up starts today 🌟",
        visual: "Point to save button, wink, product close-up"
      }
    ]
  }
];

const promptsData = [
  {
    id: 1,
    title: "UGC Hook Generator",
    subtitle: "Generate multiple scroll-stopping hooks for any product",
    prompt: `You are a UGC ad copywriter specializing in short-form video hooks.

CONTEXT:
- Brand: [BRAND NAME]
- Product: [PRODUCT NAME]  
- Price: [PRICE]
- Target Audience: [AUDIENCE DESCRIPTION]
- Main Pain Point: [PAIN POINT]
- Key USP: [UNIQUE SELLING PROPOSITION]

TASK:
Generate 12 unique hooks (first 3 seconds of a UGC video ad) organized into these categories:

1. CURIOSITY HOOKS (3) — Create information gaps that make viewers NEED to keep watching
2. PAIN POINT HOOKS (3) — Address the viewer's frustration directly
3. SOCIAL PROOF HOOKS (3) — Leverage authority, numbers, or peer experiences
4. SHOCK VALUE HOOKS (3) — Use surprising facts, comparisons, or revelations

RULES:
- Each hook must be under 15 words
- Write in first person, casual tone
- Sound like a real person, NOT a brand
- Never use marketing jargon
- Make each hook feel like the start of a conversation
- Include emotional triggers (frustration, curiosity, FOMO, surprise)

OUTPUT FORMAT:
For each hook, provide:
- The hook text
- Category
- Best platform (Instagram Reels / YouTube Shorts / Paid Ads)
- Why it works (1 sentence)`
  },
  {
    id: 2,
    title: "Full UGC Ad Script Generator",
    subtitle: "Generate complete, ready-to-shoot ad scripts with timing and visual cues",
    prompt: `You are a senior UGC content strategist at a performance marketing agency.

CONTEXT:
- Brand: [BRAND NAME]
- Product: [PRODUCT NAME]
- Price: [PRICE]
- Target Audience: [AUDIENCE DESCRIPTION]
- Main Pain Point: [PAIN POINT]
- Key USP: [UNIQUE SELLING PROPOSITION]
- Platform: [PLATFORM - Instagram Reels / YouTube Shorts / Paid Ads]
- Script Format: [FORMAT - Honest Review / Before-After / Myth Buster / GRWM / Story Arc / Quick Tips]
- Tone: [TONE - Friendly / Excited / Calm / Bold / Storytelling]

TASK:
Generate a complete UGC video ad script following the PASC framework:
P - Problem (agitate the pain)
A - Agitation (make it worse)
S - Solution (introduce product naturally)
C - Call to Action (single clear action)

STRUCTURE (include for each section):
1. HOOK (0-3 seconds) — The scroll-stopper
2. PROBLEM (3-8 seconds) — Describe the pain in viewer's own words
3. SOLUTION (8-20 seconds) — Introduce product like telling a friend
4. PROOF (20-25 seconds) — Show results, social proof
5. CTA (25-30 seconds) — Single, clear action with urgency

FOR EACH SECTION INCLUDE:
- Exact dialogue (spoken text)
- Visual direction (what to show on screen)
- Timing (seconds)
- Tone notes

RULES:
- Total length: 25-40 seconds
- Write like a real person sharing with friends
- NO marketing speak. NO "revolutionary". NO "game-changer"
- Include sensory details (how it feels, smells, looks)
- One clear CTA only — don't overwhelm
- Include 1-2 text overlays per script`
  },
  {
    id: 3,
    title: "Platform-Specific CTA Generator",
    subtitle: "Generate CTAs and captions optimized for each platform's unique requirements",
    prompt: `You are a social media strategist specializing in performance marketing CTAs.

CONTEXT:
- Brand: [BRAND NAME]
- Product: [PRODUCT NAME]
- Price: [PRICE]
- Key Offer: [DISCOUNT/GUARANTEE/FREE SHIPPING]
- Platform: [PLATFORM]

TASK:
Generate platform-specific CTAs and captions.

FOR INSTAGRAM REELS:
- 3 verbal CTAs (to say in video)
- 2 full captions (with hashtags, 150-200 words max)
- Caption should include: hook line, value proposition, social proof element, CTA, 8-12 hashtags

FOR YOUTUBE SHORTS:
- 3 verbal CTAs
- 1 video description
- Include subscriber CTA

FOR PAID ADS (META):
- 3 primary text options (above the video)
- 3 headline options
- 3 CTA button text options
- Keep primary text under 125 characters for mobile

RULES:
- Each CTA must be ONE clear action
- Create urgency without being fake
- Use emojis strategically (not excessively)
- Sound human, not corporate
- Test different urgency levels: soft, medium, strong`
  },
  {
    id: 4,
    title: "Brand Tone Adapter",
    subtitle: "Adapt any UGC script to match a specific brand's voice and audience",
    prompt: `You are a brand voice consultant specializing in UGC content.

ORIGINAL SCRIPT:
[PASTE YOUR EXISTING UGC SCRIPT HERE]

NEW BRAND DETAILS:
- Brand Name: [NEW BRAND]
- Industry: [INDUSTRY]
- Target Audience: [AUDIENCE]
- Brand Voice: [VOICE DESCRIPTION - e.g., "luxury and sophisticated" or "fun and youthful"]
- Product: [PRODUCT]
- Price Point: [PRICE]
- Key Differentiator: [WHAT MAKES IT UNIQUE]

TASK:
Adapt the script to match the new brand while keeping the UGC authenticity. 

ADAPT THESE ELEMENTS:
1. Vocabulary (match the audience's language)
2. Energy level (calm for luxury, energetic for Gen-Z)
3. Pain points (specific to this product/audience)
4. Social proof references (relevant to this industry)
5. CTA style (match the platform and brand)

PRESERVE:
- First-person perspective
- Natural, unscripted feel
- Problem-solution-CTA structure
- Real human emotion
- Specific details (not vague claims)

OUTPUT:
- Adapted full script with timing
- 3 alternative hooks
- 2 CTA options
- Visual direction notes`
  },
  {
    id: 5,
    title: "A/B Hook Variation Generator",
    subtitle: "Generate multiple hook variations for split testing",
    prompt: `You are a performance marketing specialist running A/B tests on UGC ad hooks.

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
- All hooks must sound like real people, not ads`
  }
];

// ===== RENDER HOOKS =====
function renderHooks(filter = 'all') {
  const grid = document.getElementById('hooksGrid');
  const filtered = filter === 'all' ? hooksData : hooksData.filter(h => h.category === filter);
  
  grid.innerHTML = filtered.map((hook, i) => {
    const tagClass = {
      curiosity: '',
      pain: 'hook-card__tag--pain',
      social: 'hook-card__tag--social',
      shock: 'hook-card__tag--shock'
    }[hook.category];

    const categoryLabel = {
      curiosity: 'Curiosity',
      pain: 'Pain Point',
      social: 'Social Proof',
      shock: 'Shock Value'
    }[hook.category];

    return `
      <div class="hook-card reveal" style="transition-delay: ${i * 0.05}s">
        <div class="hook-card__header">
          <span class="hook-card__number">#${String(hook.id).padStart(2, '0')}</span>
          <span class="hook-card__tag ${tagClass}">${categoryLabel}</span>
        </div>
        <p class="hook-card__text">${hook.text}</p>
        <div class="hook-card__meta">
          <span class="hook-card__platform">📱 ${hook.platform}</span>
          <span>•</span>
          <span>${hook.engagement}</span>
        </div>
      </div>
    `;
  }).join('');

  // Re-observe new elements
  observeRevealElements();
}

// ===== RENDER SCRIPTS =====
function renderScripts() {
  const container = document.getElementById('scriptsContent');
  
  container.innerHTML = scriptsData.map((script, i) => `
    <div class="script-panel ${i === 0 ? 'active' : ''}" data-panel="${i}">
      <div class="script-panel__header">
        <div class="script-panel__info">
          <h3>${script.title}</h3>
          <p>${script.subtitle}</p>
        </div>
        <div class="script-panel__badges">
          <span class="script-panel__badge">⏱ ${script.duration}</span>
          <span class="script-panel__badge">📱 ${script.platform}</span>
          <span class="script-panel__badge">🎭 ${script.tone}</span>
        </div>
      </div>
      <div class="script-panel__body">
        ${script.blocks.map(block => `
          <div class="script-block">
            <div class="script-block__label">
              ${block.label}
              <span class="script-block__time">${block.time}</span>
            </div>
            <p class="script-block__text">${block.text}</p>
            <p class="script-block__visual">📹 ${block.visual}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// ===== RENDER PROMPTS =====
function renderPrompts() {
  const container = document.getElementById('promptsGrid');
  
  container.innerHTML = promptsData.map((prompt, i) => `
    <div class="prompt-card reveal" style="transition-delay: ${i * 0.08}s">
      <div class="prompt-card__header" onclick="togglePrompt(this)">
        <div class="prompt-card__header-left">
          <span class="prompt-card__number">${String(prompt.id).padStart(2, '0')}</span>
          <div>
            <div class="prompt-card__title">${prompt.title}</div>
            <div class="prompt-card__subtitle">${prompt.subtitle}</div>
          </div>
        </div>
        <div class="prompt-card__toggle">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </div>
      <div class="prompt-card__body">
        <div class="prompt-card__code">
          <div class="prompt-card__code-header">
            <span class="prompt-card__code-lang">Prompt Template</span>
            <button class="prompt-card__copy-btn" onclick="copyPrompt(${i})">Copy</button>
          </div>
          <pre>${escapeHtml(prompt.prompt)}</pre>
        </div>
      </div>
    </div>
  `).join('');

  observeRevealElements();
}

// ===== GENERATOR =====
function generateAdScript() {
  const brand = document.getElementById('genBrand').value || 'GlowNaturals';
  const product = document.getElementById('genProduct').value || 'Vitamin C Glow Serum';
  const price = document.getElementById('genPrice').value || '₹599';
  const pain = document.getElementById('genPain').value || 'Dull, uneven skin tone';
  const usp = document.getElementById('genUSP').value || '100% natural, visible results in 14 days';
  const platform = document.getElementById('genPlatform').value;
  const tone = document.getElementById('genTone').value;
  const format = document.getElementById('genFormat').value;

  const platformNames = { instagram: 'Instagram Reels', youtube: 'YouTube Shorts', paid: 'Paid Ads (Meta)' };
  const toneNames = { friendly: 'Friendly & Relatable', excited: 'Excited & Energetic', calm: 'Calm & Informative', bold: 'Bold & Confident', storytelling: 'Storytelling' };
  const formatNames = { 'honest-review': 'Honest Review', 'before-after': 'Before/After', 'myth-buster': 'Myth Buster', 'grwm': 'GRWM', 'story': 'Story Arc', 'tips': 'Quick Tips' };

  // Hook templates by format and tone
  const hooks = {
    'honest-review': {
      friendly: `Okay honestly? I wasn't gonna post this but I HAVE to tell you about this ${product}…`,
      excited: `OMG you guys — ${product} literally changed my WHOLE skincare game in 2 weeks!`,
      calm: `I've been quietly using ${product} for 2 weeks. Here's my honest take.`,
      bold: `Every skincare product has failed me. Except this one. Let me explain.`,
      storytelling: `I was scrolling through Instagram at 2am when an ad for ${product} caught my eye. I almost didn't click…`
    },
    'before-after': {
      friendly: `This is my skin 2 weeks ago vs today. Same phone, same lighting, zero filter.`,
      excited: `LOOK at this transformation!! 14 days of ${product} — I can't believe this is MY skin!`,
      calm: `I documented my skin for 14 days using ${product}. Here are the results.`,
      bold: `People keep asking what I did to my skin. It wasn't a facial. It wasn't a filter. It was this.`,
      storytelling: `14 days ago, I took this photo of my skin. I almost deleted it. But today…`
    },
    'myth-buster': {
      friendly: `Girl, PLEASE stop putting chemicals on your face. Let me show you what I use instead.`,
      excited: `Your expensive serum has THE SAME ingredients as a ₹200 one — let me PROVE it!`,
      calm: `I checked the ingredients on 5 popular serums. What I found was concerning.`,
      bold: `The skincare industry is lying to you. Here's what actually works.`,
      storytelling: `I was studying chemistry when I realized something disturbing about most skincare products…`
    },
    'grwm': {
      friendly: `Night skincare routine that actually gave me results 🌙 Get ready for bed with me!`,
      excited: `This 2-minute night routine literally TRANSFORMED my skin! Let me show you!`,
      calm: `Simple night routine. One product. Real results. Here's what I do.`,
      bold: `I ditched my entire skincare routine for ONE product. Best decision ever.`,
      storytelling: `Every night before bed, I do this one thing that completely changed my skin…`
    },
    'story': {
      friendly: `3 months ago I wouldn't even leave the house without foundation. Here's what changed…`,
      excited: `You won't BELIEVE what happened to my skin in just 14 days!!`,
      calm: `Let me tell you the story of how one product rebuilt my skincare confidence.`,
      bold: `I spent ₹50,000 on skincare last year. NOT ONE product worked. Until this.`,
      storytelling: `It started when I cancelled plans with friends because I didn't want anyone to see my skin…`
    },
    'tips': {
      friendly: `3 reasons your skin looks dull — and the easy fix nobody talks about!`,
      excited: `STOP doing these 3 things to your skin!! Here's what to do instead ⚡`,
      calm: `The 3 most common skincare mistakes — and how to fix them with one product.`,
      bold: `Your skincare routine is WRONG. Here's proof. And here's how to fix it.`,
      storytelling: `A dermatologist told me 3 things I was doing wrong. The fix was simpler than I thought.`
    }
  };

  const problems = {
    'honest-review': `So my skin has been dealing with ${pain} for months. I tried everything — expensive products, home remedies, even changing my diet. Nothing was giving me the results I wanted.`,
    'before-after': `Look at this photo — ${pain}. That was me every single day. I was embarrassed to go out without makeup. I'd spend 30 minutes just on concealer.`,
    'myth-buster': `Here's the thing — most products claim to fix ${pain}, but then you read the ingredients and they're FULL of parabens and sulfates. That's like trying to fix your skin with more problems.`,
    'grwm': `For the longest time, my ${pain.toLowerCase()} was ruining my confidence. I'd wake up and the first thing I'd see in the mirror was everything wrong with my skin.`,
    'story': `Every morning I'd look in the mirror and see the same thing — ${pain.toLowerCase()}. I'd spend money I didn't have on products that promised the world and delivered nothing.`,
    'tips': `Reason #1: You're using products with harsh chemicals that actually DAMAGE your skin barrier. Reason #2: You're missing Vitamin C — the #1 ingredient for brightness. And Reason #3…`
  };

  const solutions = {
    'honest-review': `Then someone told me about ${brand}'s ${product}. It's ${usp}. I was skeptical — I mean, aren't we all at this point? — but at ${price} I figured why not try it.`,
    'before-after': `All I changed was adding ${brand}'s ${product} to my routine. Every night, 3 drops, massage it in. That's it. ${usp}. And it costs just ${price}.`,
    'myth-buster': `That's why I switched to ${brand}'s ${product}. Clean ingredients, ${usp.toLowerCase()}, and just ${price}. No harmful chemicals. Just stuff that actually works.`,
    'grwm': `This is ${brand}'s ${product}. I do 3 drops every night — it absorbs super fast, doesn't feel sticky. And it's ${usp.toLowerCase()}. All for ${price}.`,
    'story': `Then a friend pulled out this little bottle — ${brand}'s ${product}. She said "just try it for 2 weeks." ${usp}. I figured, what's one more try at ${price}?`,
    'tips': `Reason #3: You need ONE good, clean serum. This is ${brand}'s ${product}. It's ${usp.toLowerCase()} — and it's only ${price}. This is the fix.`
  };

  const proofs = [
    `Look at my skin right now. No filter, no editing. This is the real deal. My ${pain.toLowerCase()} is visibly better and people keep asking what I'm doing differently.`,
    `After just 2 weeks, the difference is undeniable. My skin feels softer, looks brighter, and my confidence is through the roof. ${brand} earned a permanent spot in my routine.`,
    `The results speak for themselves. Plus, they offer a 30-day money-back guarantee — which tells you how confident THEY are that it works.`
  ];

  const ctas = {
    instagram: `Link in bio — they have a special discount running right now. At ${price}, it's honestly a no-brainer. Try it. Your skin will thank you 💛`,
    youtube: `I'll drop the link in the description. Subscribe for more skincare finds that actually work! Comment GLOW if you want to see my full routine 🌟`,
    paid: `Shop now at ${brand}. ${price} with a 30-day money-back guarantee. Zero risk, all glow. Tap below 👇`
  };

  const hookText = hooks[format]?.[tone] || hooks['honest-review'].friendly;
  const problemText = problems[format] || problems['honest-review'];
  const solutionText = solutions[format] || solutions['honest-review'];
  const proofText = proofs[Math.floor(Math.random() * proofs.length)];
  const ctaText = ctas[platform] || ctas.instagram;

  const output = document.getElementById('outputContent');
  output.innerHTML = `
    <div class="gen-output">
      <div class="gen-output__section">
        <div class="gen-output__label">
          Configuration
          <span>${platformNames[platform]}</span>
          <span>${formatNames[format]}</span>
          <span>${toneNames[tone]}</span>
        </div>
        <div class="gen-output__text" style="font-size: 0.85rem; color: var(--text-tertiary);">
          Brand: ${brand} • Product: ${product} • Price: ${price}<br>
          Pain: ${pain} • USP: ${usp}
        </div>
      </div>

      <div class="gen-output__section">
        <div class="gen-output__label">🪝 Hook <span>0-3s</span></div>
        <div class="gen-output__text">${hookText}</div>
        <p class="gen-output__visual">📹 Close-up, direct to camera, natural lighting. Make eye contact.</p>
      </div>

      <div class="gen-output__section">
        <div class="gen-output__label">😤 Problem <span>3-8s</span></div>
        <div class="gen-output__text">${problemText}</div>
        <p class="gen-output__visual">📹 Frustrated expression, relatable setting (bathroom/bedroom), show failed products.</p>
      </div>

      <div class="gen-output__section">
        <div class="gen-output__label">✨ Solution <span>8-20s</span></div>
        <div class="gen-output__text">${solutionText}</div>
        <p class="gen-output__visual">📹 Show product reveal, apply to skin, read label close-up, genuine smile.</p>
      </div>

      <div class="gen-output__section">
        <div class="gen-output__label">📸 Proof <span>20-25s</span></div>
        <div class="gen-output__text">${proofText}</div>
        <p class="gen-output__visual">📹 Bare face close-up, natural light, touch skin, show texture, no filter overlay.</p>
      </div>

      <div class="gen-output__section">
        <div class="gen-output__label">🎯 CTA <span>25-30s</span></div>
        <div class="gen-output__text">${ctaText}</div>
        <p class="gen-output__visual">📹 Point to link/bio, encouraging expression, product close-up, logo overlay.</p>
      </div>
    </div>
  `;
}

// ===== UTILITIES =====
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function togglePrompt(header) {
  const card = header.closest('.prompt-card');
  card.classList.toggle('open');
}

function copyPrompt(index) {
  const text = promptsData[index].prompt;
  navigator.clipboard.writeText(text).then(() => {
    const btns = document.querySelectorAll('.prompt-card__copy-btn');
    if (btns[index]) {
      btns[index].textContent = 'Copied!';
      setTimeout(() => btns[index].textContent = 'Copy', 2000);
    }
  });
}

function copyOutput() {
  const content = document.getElementById('outputContent').innerText;
  navigator.clipboard.writeText(content).then(() => {
    const btn = document.getElementById('copyBtn');
    btn.querySelector('span').textContent = 'Copied!';
    setTimeout(() => btn.querySelector('span').textContent = 'Copy', 2000);
  });
}

// ===== INTERSECTION OBSERVER =====
function observeRevealElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
  // Initial renders
  renderHooks();
  renderScripts();
  renderPrompts();

  // Nav scroll
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile menu
  document.getElementById('mobileToggle').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('active');
  });

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-menu__link').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.remove('active');
    });
  });

  // Hook filters
  document.querySelectorAll('.hooks__filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.hooks__filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderHooks(btn.dataset.filter);
    });
  });

  // Script tabs
  document.querySelectorAll('.scripts__tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.scripts__tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      document.querySelectorAll('.script-panel').forEach(p => p.classList.remove('active'));
      const panel = document.querySelector(`.script-panel[data-panel="${tab.dataset.tab}"]`);
      if (panel) panel.classList.add('active');
    });
  });

  // Generator
  document.getElementById('generateBtn').addEventListener('click', generateAdScript);

  // Copy output
  document.getElementById('copyBtn').addEventListener('click', copyOutput);

  // Observe reveal elements
  observeRevealElements();

  // Add reveal class to major sections
  document.querySelectorAll('.brand__card, .ctas__platform, .framework__step').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.08}s`;
  });
  observeRevealElements();
});
