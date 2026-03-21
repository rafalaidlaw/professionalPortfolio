# Mobile App Changes

Documentation of all changes made to the mobile layout (< 768px / `md:` breakpoint) relative to the original repo. Desktop remains unchanged from the committed state.

## Architecture Pattern

Every component now uses conditional rendering to serve different layouts per breakpoint:
- **Mobile** (`md:hidden`): New mobile-optimized layout
- **Desktop** (`hidden md:block`): Original repo layout preserved as-is

---

## Navbar (`src/Navbar.tsx`)

**Before:** Static nav using shadcn `NavigationMenu` — same layout for all screen sizes, no hamburger menu.

**Mobile changes:**
- **Fixed position** navbar that sticks to the top of the viewport (`fixed top-0 left-0 right-0 z-30`)
- **Scroll-based hide/show**: Navbar slides up (`-translate-y-full`) when scrolling down past 80px, slides back on scroll up. Uses `useEffect` + `IntersectionObserver` on scroll events with `lastScrollY` ref.
- **Hamburger menu** (`<Menu>` icon) replaces the horizontal nav links
- **Slide-in panel** from the right (`.mobile-menu-panel` in CSS): 280px max-width, white background, shadow
- **Overlay backdrop** (`.mobile-menu-overlay`): semi-transparent black overlay behind panel
- Menu items: Resumé (download link), About, Projects, Contact, Games (with gamepad icon), GitHub, LinkedIn
- **Escape key** closes the menu
- **Body scroll lock** when menu is open (`document.body.style.overflow = 'hidden'`)
- **Subtitle "Web Developer"** hidden on mobile (only shows on desktop)
- `scrollToSection()` updated to accept a `closeMenu` callback with 150ms delay for smooth UX

---

## App Layout (`src/App.tsx`)

**Before:** No top padding, content started immediately below the static navbar.

**Mobile changes:**
- Added `pt-[72px] md:pt-0` wrapper div to offset content below the fixed mobile navbar (72px matches navbar height)
- Removed unused `InternetBanner` import

---

## About (`src/About.tsx`)

**Before:** Single horizontal flex row layout (avatar | name/title | vertical divider | bio text) for all screen sizes.

**Mobile changes:**
- **Centered vertical stack** instead of horizontal row
- Smaller avatar: `h-20 w-16` (vs desktop `h-24 w-20`)
- Name: `text-3xl` centered (vs desktop `text-4xl` left-aligned)
- Subtitle: `text-lg` (vs desktop `text-xl`)
- Bio text: centered (`text-center`) with `px-1` padding
- Tagline box: full width (`w-full` vs desktop `md:w-4/5`)
- Vertical divider between name and bio removed
- Section padding: `px-6 pt-10` (vs desktop `px-4 pt-6`)

---

## Featured Projects (`src/FeaturedProjects.tsx`)

**Before:** Single 2-column grid (`grid-cols-2`) for all screen sizes.

**Mobile changes:**
- **Single-column stack** (`flex flex-col gap-4`) instead of 2-column grid
- All 7 project cards rendered in a vertical list: ECommerceFeature, BannerAdsCard, PixiSlotsCard, OpenSourceCard, OutlierAICard, MotionGraphicsCard, ThreeJSProjectCard

---

## Games (`src/Games.tsx`)

**Before:** Iframe embeds of itch.io games with skewed selection buttons — same for all screen sizes.

**Mobile changes:**
- **No iframes** — replaced with **itch.io link cards** since iframes are impractical on small screens
- Each game rendered as a tappable `<a>` card linking to the itch.io page:
  - White background, rounded corners, gray border
  - Game title (bold, `ubuntu-font`) + short mobile-specific description
  - External link icon (`<ExternalLink>`) on the right
  - Hover: darker border + subtle shadow
- Header text: "Play these games on itch.io — desktop recommended for the best experience."
- Game data enhanced with `description` and `mobileDescription` fields (replaces the original conditional ternary chain for descriptions)
- `Boy With Stick` link fixed: changed from iframe embed URL to actual itch.io page URL (`https://retromodgod.itch.io/boy-with-a-stick`)

---

## Contact (`src/Contact.tsx`)

**Before:** Form grid was always 2-column (`grid-cols-2`).

**Mobile change:**
- Form fields stack to **single column** on mobile: `grid-cols-1 md:grid-cols-2` (Name and Email fields stack vertically instead of side-by-side)

---

## Footer (`src/Footer.tsx`)

**Before:** Centered copyright text only, no social links.

**Mobile changes:**
- Added **GitHub and LinkedIn icons** below the copyright text (hidden on desktop via `md:hidden`)
- Icons use `text-muted-foreground` with `hover:text-foreground` transition
- Copyright year now uses `new Date().getFullYear()` (dynamic instead of hardcoded "2025")

---

## CSS (`src/index.css`)

**Mobile-specific additions:**
- `.mobile-menu-overlay`: Fixed full-screen overlay with `rgba(0,0,0,0.4)` background, `z-index: 40`
- `.mobile-menu-panel`: Fixed right-side slide-in panel, `min(280px, 85vw)` width, white background, `z-index: 50`, flexbox column layout, `-4px 0 24px` shadow
- Updated Google Fonts import to include Ubuntu italic and additional weights (300, 500, 700)
