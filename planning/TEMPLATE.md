# Portfolio Website Template - Scrapbook Graphic Designer Portfolio

Bold deep-red scrapbook-style one-page portfolio for a graphic designer (Maya Ortiz) with a spiral-notebook dotted top edge, cream paper cards, a red halftone portrait and handmade collage details. Includes a scrolling marquee of disciplines, a 'table of contents' page-jump menu, About Me with focus tags, Skills (hard skills, soft skills, tool icons), an Experience timeline, a Collection of Art gallery with a client testimonial, a UI Design showcase and a 'say hello' contact ending. Fully phone responsive.

> Generated from this template's own files. Read THIS instead of exploring the tree — it already says where everything is.

## Where the copy lives

This template has **no content module** — the copy is inline in the section components below. Read the sections you will rewrite in **one parallel batch** (several `Read` calls in the same turn cost one round trip), then edit them. Do not read them one per turn, and skip any section the brief does not change.

## Imagery — 8 file(s) shipped

### Photos of a person — ASK before you do anything with these

These show the template's sample model, not the user. "Reuse the imagery" does NOT apply to a face: a portfolio or personal brand site showing someone else is the one place silent reuse fails them. Ask **once** (AskUser) whether to:

1. use their own photo — they can attach it in the chat (recommended)
2. generate a portrait for them
3. keep the template's photo

Do not silently keep someone else's face, and do not silently generate one.

- `public/img/about-photo.png`
- `public/img/hero-portrait.png`

### All other imagery

These ARE the design the user picked. **Reuse them.** Generating a replacement set is the most expensive thing in this workflow and makes the result look nothing like the preview they chose. Generate at most 2, only when the brief names a subject the existing art plainly cannot show, and keep the filename.

Never `Read` an image: it returns base64 and tells you nothing the filename does not.

| file | bytes |
| --- | ---: |
| `public/img/about-photo.png` | 1,015,575 |
| `public/img/camera-mockup.png` | 298,731 |
| `public/img/hero-portrait.png` | 917,165 |
| `public/img/phone-mockups.png` | 242,331 |
| `public/img/project-1.png` | 229,792 |
| `public/img/project-2.png` | 293,456 |
| `public/img/project-3.png` | 797,124 |
| `public/img/skills-photo.png` | 369,451 |

## Sections (10)

Open only what you change.

- `src/sections/About.tsx` (3,526 B)
- `src/sections/Contact.tsx` (2,158 B)
- `src/sections/ContactSheet.tsx` (1,043 B)
- `src/sections/Design.tsx` (1,948 B)
- `src/sections/Experience.tsx` (2,785 B)
- `src/sections/Hero.tsx` (1,234 B)
- `src/sections/Nav.tsx` (1,027 B)
- `src/sections/Projects.tsx` (3,332 B)
- `src/sections/Skills.tsx` (4,223 B)
- `src/sections/TableOfContents.tsx` (2,151 B)

## Placeholder brand: "Maya Ortiz" — 10 occurrence(s) in 5 file(s)

It is hardcoded outside the content module too, in several spellings:

- `Maya Ortiz` ×3
- `MAYA ORTIZ` ×2
- `mayaortiz` ×1
- `MAYA` ×1
- `Maya` ×2
- `maya` ×1

Replace **every spelling in ONE command** (fill each `<…>`; order matters — longest first), then confirm with the grep, which must print nothing:

```
grep -rlE 'MAYA ORTIZ|Maya Ortiz|mayaortiz|maya|Maya|MAYA' src index.html | xargs sed -i -e 's/Maya Ortiz/<Full Name>/g' -e 's/MAYA ORTIZ/<FULL NAME>/g' -e 's/mayaortiz/<fullname, lowercase, no spaces>/g' -e 's/MAYA/<FIRST NAME, UPPERCASE>/g' -e 's/Maya/<First name>/g' -e 's/maya/<first name, lowercase>/g'
grep -rniE 'maya|ortiz' src index.html
```

Never replace it occurrence by occurrence, or one spelling per turn — that is a tool call each.

- `src/sections/Contact.tsx` ×5
- `src/sections/Hero.tsx` ×4
- `src/sections/About.tsx` ×3
- `src/sections/Projects.tsx` ×2
- `src/sections/Nav.tsx` ×2

## How to edit

- **One change per file per turn.** Rewrite a section with ONE Edit covering all its copy, or `Write` the whole file — these are small.
- Several Edits to the **same** file in one turn conflict: the first lands, the rest fail as "modified since last read" and must be retried.
- Editing **different** files in parallel is fine, and the fast way.

## Keep

- The palette, type scale, spacing and layout — that is what was chosen.
- The shipped imagery and its framing.

## Replace

- Every visible string: names, headings, body copy, stats, contact details.
- The placeholder brand this template was built around — a site still carrying it has failed.
- `index.html` title/description and `public/og-image.*` so the page does not advertise the template's own subject.
