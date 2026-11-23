# TikTok extraction 5: The CRAFT setup for AI websites that don't look AI-generated

Source: https://www.tiktok.com/t/ZPNrJgt3N/
Video ID: 7711058116485451021
Author: Nate Herk (@nateherkai)
Bio: "IG @nateherkai. nate@smoothmedia.co. ChatGPT: http://chatgpt.com/download"
Video: 34 seconds, 1080x1920, original sound
Stats at extraction (2026-11-22): 17,000 plays, 1,143 likes, 82 comments, 151 shares, 1,186 saves
Description: "Go to my Instagram, DM me 'CRAFT' and I'll send it over. Link's in bio."

Method: description + the video's own caption track (eng-US subtitles) + OCR of frames sampled every 2 seconds (read from the actual video file).

## Narration (from the caption track, cleaned of obvious speech-recognition errors)

"Claude Opus 5.5 just made AI websites way better. But if you just tell it to build me a website, you're still probably gonna get something that looks very AI generated. So here's the setup that I would use.

First, give it taste. So Claude has actual design references and knows what good websites should look like.

Then install Emil Kowalski's design skill and Impeccable, that understand things like spacing, typography, hierarchy, motion and interaction design.

Next, connect Figma through MCP. Claude can work directly from your actual designs and your references.

And finally, you have to give it Playwright. This lets Opus 5.5 visually inspect everything, test it, fix it and keep testing until everything's actually polished.

So just comment CRAFT and I'll send you that full setup."

Caption-track quirks: the raw captions render the model name as "Claud, oops, 5.5" in the first line and "Opus 5.5" later, "play write" for Playwright, and "cloud" for Claude once. The name "Opus 5.5" is what the video itself shows on screen (see OCR); no Anthropic model with that exact name is in the public Claude lineup as of this extraction, so treat it as the creator's label.

## On-screen text (OCR)

**Opening card:** the Claude asterisk logo, "Claude" / "opus 5.5". Burned-in caption: "CLAUDE OPUS 5.5". Later caption fragments: "PROBABLY GOING TO", "AND YOUR references".

**Step 1 - Taste Skill (README screenshot)**
- "#1"
- "Taste Skill"
- Badge: "OFFICIAL WEBSITE - TASTESKILL.DEV"
- "A collection of skills that improve how AI tools write fr[ontend code, so] the AI builds modern, premium designs with proper a[nimation]..." (right edge cut off in frame)
- Badges: "Agent Skills - Compatible", "stars 7.2k", "AI Supported - Cursor | Clau[de]..." (cut off)

**Step 2 - Emil Kowalski's skills (GitHub screenshot)**
- "#2"
- "emilkowalski/skills"
- "Skills for Designers and Engineers."
- 5 Contributors, 2 Issues, 57k Stars, 3k Forks

**Design example shown while he lists spacing, typography, hierarchy, motion**
- A finished site headed "Building the future with AI and strategy"
- Subtext: "We help organizations unlock growth and efficiency through data-driven consulting and intelligent automation."
- Buttons: "VIEW DEMO", "GET STARTED"
- Floating cards include "$2,670 / $1,200", "Intelligence in Every Decision" with a chart, "Expertise that Combines Strategy, Data, and Artificial Intelligence", "Data training", "520K+", "87%"
- "Rated 4.9/5 by 4,900+ clients", a Logoipsum logo strip, an "ABOUT US" section marker, and the burned-in caption word "SPACING"

**Step 3 - Figma MCP**
- "#3"
- Figma logo card labelled "Figma MCP"

**Step 4 - Playwright (Claude session screenshot)**
- A diff adding to ".claude/settings.local.json": "+ # Playwright traces" and "+ playwright-traces/"
- Bash block: IN "npm run test - Run all tests"; OUT "Test completed - 26 successes - 0 failures"
- Line below: "Slack integration feature is complete and te[sted]"
- A second demo screenshot: a site builder (Chat / Preview tabs, "Load existing Project", "DeepSite Gallery") showing an "Astronaut Registration" page: "Complete this form to apply for Martian citizenship", "opportunity to be among the pioneers establishing humanity's first permanent settlement on Mars", a "Begin Registration" button, and First Name / Last Name / Email Address fields. Burned-in caption word: "everything"

**Ending frame**
- A comment box being typed with "CRAF[T]" next to his profile photo, matching the call to action: DM or comment "CRAFT" on Instagram for the full setup.

## The setup, structured

1. **Taste** - install Taste Skill (tasteskill.dev) so the model has real design references and knows what good websites look like.
2. **Design skills** - install Emil Kowalski's design skills (github.com/emilkowalski/skills) and Impeccable, covering spacing, typography, hierarchy, motion and interaction design.
3. **Figma through MCP** - connect Figma so Claude works directly from your actual designs and references.
4. **Playwright** - give it Playwright so the model can visually inspect the result, test it, fix it, and keep testing until it is polished.

## What this is
A 34-second talking-head video by Nate Herk (AI automation creator, Smooth Media) giving away a four-part Claude Code setup for better-looking AI-built websites, gated behind an Instagram DM ("CRAFT"). The pieces he names are real, findable projects: Taste Skill, emilkowalski/skills, the Figma MCP server, and Playwright.
