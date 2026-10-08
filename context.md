# Synergy Website — Project Context

## PURPOSE

This file is the source of truth for rebuilding the Team Synergy website from scratch.

IMPORTANT:
- We are NOT modifying the old Synergy website directly.
- `Synergy_New` is a completely new project.
- The old website is the visual/design reference and source of existing content/assets.
- Build incrementally and explain important architectural decisions in simple terms.
- Do not silently remove or change requirements.
- If a future conversation loses context, read this file first.

---

# 1. CURRENT PROJECT STATUS

Current project root:

Synergy_New/

Current structure:

Synergy_New/
├── backend/
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── middleware/
│       ├── models/
│       ├── routes/
│       └── services/
│
├── frontend/
│   ├── public/
│   │   └── assets/
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md

The folders were initially created as an empty architecture/skeleton.

Frontend technology:
- React
- Vite
- React Router
- CSS/custom styling
- Existing Synergy design should be recreated/preserved, not replaced by a generic template.

Backend technology planned:
- Node.js
- Express
- PostgreSQL (planned database)
- REST-style JSON APIs

CURRENTLY WORKING:
- React + Vite runs successfully at localhost:5173.
- The current React app only displays "Synergy".
- Backend has NOT been implemented yet.

DO NOT assume backend/database/API functionality already exists.

---

# 2. CORE WEBSITE REQUIREMENTS

The final website must include ALL of these requirements:

1. Team photos.
2. Team member positions/designations.
3. A better and clearer description of Team Synergy.
4. A chatbot for visitor queries.
   - Do NOT build an AI model/chatbot from scratch.
   - Use an available/free external AI API where practical.
   - API keys must remain on the backend, never exposed in React/frontend code.
5. "Apply Now" must open/use a custom HTML/React form instead of Microsoft Forms.
   - Form submissions must be sent to the backend.
   - Application data must be stored in the database.
6. "Sponsor Us" option for industries/sponsors.
   - Sponsor fills a dedicated form.
   - Submission reaches the backend.
   - Sponsor inquiry data must be stored in the database.
7. Separate webpage for every team member showing their portfolio.
   - These pages must NOT require an API/backend route.
   - They are static React pages/routes.
8. Separate webpage for Synchron.
   - Synchron is a competition.
   - Detailed design/content for this page will be worked on later.
9. Search toolbar for visitors.
   - Visitors can search current/ongoing projects.
   - Visitors can check/browse availability of new project ideas.
   - Project search should eventually use backend/database data.
10. No other requirements have been specified beyond the above.

---

# 3. OLD WEBSITE / DESIGN REFERENCE

The old Synergy website is the visual/content reference.

Important existing design characteristics:
- Dark background
- Purple/pink neon aesthetic
- Glassmorphism cards
- Neon/glow effects
- Plus Jakarta Sans
- Animated visual elements
- Responsive design
- Spline 3D hero element
- Scroll reveal animations
- Mobile navigation

Do NOT throw away the existing visual identity.

The old homepage contains:
- Navbar
- Hero
- About / Who We Are
- Vision
- Mission
- Synchron'25 section
- How We Work
- Industry-based projects
- Student projects
- Team
- Contact
- Footer

Existing homepage was a large static `index.html` (~716 lines) with inline CSS and JS. It is a REFERENCE, not the new implementation.

Existing hero currently used:
- Spline viewer
- Typing animation
- Apply Now CTA

Existing team members in the old homepage:
- Riddhiman Ganguly — Team Leader
- T Shrithan Reddy — Team Manager
- Ayush Prakash Thorat — Treasurer
- Sarayu Matam — Management Head
- Arnav Gupta — Electronics Head
- Mrinal — Software Head
- Samridhi — Manufacturing Head

Old image filenames included:
- ridhiman.png
- shrithan 1.png
- ayush 1.png
- sarayu 1.png
- arnav 1.png
- mrinal 1.png
- samridhi 1.png

These names/roles are existing reference data and may need confirmation/update when implementing the new site.

---

# 4. FRONTEND ARCHITECTURE

Use React for the frontend because the website will interact with APIs and backend/database systems.

IMPORTANT ARCHITECTURE CLARIFICATION:
- React is responsible for UI/frontend.
- Express/backend is responsible for APIs/business logic.
- PostgreSQL is responsible for persistent data.
- React does NOT directly connect to PostgreSQL.
- The normal flow is:

React frontend
    ↓ HTTP/JSON
Express backend
    ↓
PostgreSQL

For chatbot:

React
    ↓
Express backend
    ↓
External AI API

Never put secret API keys in frontend React code.

---

# 5. FRONTEND FOLDER RESPONSIBILITIES

frontend/src/components/
- Reusable UI components.
- Examples: Navbar, Footer, TeamCard, ProjectCard, Button, SearchBar, etc.

frontend/src/pages/
- Actual pages/routes.
- Examples: Home, Apply, Sponsor, Projects, Synchron, Team portfolio pages.

frontend/src/layouts/
- Shared page-level layouts.

frontend/src/data/
- Static data that does not need the backend.
- Team member static information can live here.

frontend/src/services/
- Frontend API functions.
- Example: applicationsService, projectsService, chatbotService.

frontend/src/hooks/
- Reusable React hooks and UI logic.

frontend/src/styles/
- Global CSS, variables, theme, reusable styles.

---

# 6. PLANNED ROUTES

Main routes should eventually include:

/
  Home

/domains
  Existing domains page / domains information

/projects
  Project search/browse page

/apply
  Application form

/sponsor
  Sponsor/industry outreach form

/synchron
  Synchron competition page

/team/riddhiman
/team/shrithan
/team/ayush
/team/sarayu
/team/arnav
/team/mrinal
/team/samridhi

  Static team portfolio pages.

IMPORTANT:
Team portfolio pages are intentionally STATIC.
Do not create API routes such as `/api/team/:id` just for these pages.

---

# 7. HOMEPAGE COMPONENT PLAN

The homepage should be decomposed into React components rather than becoming another giant file.

Conceptually:

App
├── Navbar
├── HeroSection
├── AboutSection
├── SynchronPreview
├── HowWeWork
├── ProjectsPreview
├── TeamSection
├── ContactSection
└── Footer

Use reusable components where repetition exists.

Example:
- One TeamCard component can render multiple team members.
- One ProjectCard component can render multiple projects.

Preserve existing visual behavior such as:
- Spline hero
- typing animation
- scroll reveal
- mobile menu
- responsive behavior
- neon/glass styling

---

# 8. APPLY NOW FLOW

Old behavior:
- Apply Now pointed to Microsoft Forms.

NEW behavior:

User clicks Apply Now
    ↓
React /apply page
    ↓
Custom application form
    ↓
POST /api/applications
    ↓
Backend validation/business logic
    ↓
Database
    ↓
Success/error response
    ↓
React displays result

Application data should be designed appropriately once backend/database work begins.

Do not expose database credentials in frontend.

---

# 9. SPONSOR US FLOW

New feature.

User clicks Sponsor Us
    ↓
React /sponsor page
    ↓
Sponsor/industry inquiry form
    ↓
POST /api/sponsors
    ↓
Backend
    ↓
Database
    ↓
React confirmation/error state

The form should collect useful sponsor/industry contact information, but do not invent excessive fields without discussing the design first.

---

# 10. PROJECT SEARCH

This is a core feature.

Visitors should be able to:
- Search current/ongoing projects.
- Browse project information.
- Check whether new project ideas/opportunities are available.

Planned flow:

Search UI
    ↓
GET /api/projects?search=<query>
    ↓
Backend
    ↓
Database
    ↓
Matching projects
    ↓
React project cards/results

Build the frontend/search UX with mock/static data first if necessary.
Then connect it to the backend/database.

Do not make the project search dependent on hardcoded frontend data in the final implementation.

---

# 11. CHATBOT

Requirement:
- Visitor-facing chatbot for queries.
- Do NOT build an AI model from scratch.
- Use an external/free/available AI API.

Architecture:

React Chatbot UI
    ↓
POST /api/chat
    ↓
Backend
    ↓
External AI API
    ↓
Backend
    ↓
React

Security:
- External AI API key belongs in backend `.env`.
- Never put secret keys in React/Vite client-side environment variables.
- Never commit real secrets to GitHub.
- Use `.env.example` for documentation.

The exact AI provider will be chosen later based on availability, cost/free tier, API quality, and suitability.

---

# 12. BACKEND ARCHITECTURE

Planned backend:

backend/
└── src/
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── services/
    └── app.js

Responsibilities:

config/
- Environment variables
- Database connection/configuration

routes/
- Define API endpoints and HTTP methods.

controllers/
- Receive requests, validate/request handling, call services, return responses.

services/
- Business logic.
- External API integration.
- Database-related operations where appropriate.

models/
- Database schemas/models/data definitions.

middleware/
- Validation
- Error handling
- Authentication/authorization if needed later
- Other cross-cutting request processing

app.js
- Create/configure Express application.
- Register middleware.
- Register routes.

---

# 13. PLANNED BACKEND API AREAS

Expected API endpoints:

Applications:
POST /api/applications

Sponsors:
POST /api/sponsors

Projects:
GET /api/projects
GET /api/projects/:id

Chat:
POST /api/chat

These are architectural plans, not implemented endpoints yet.

Team portfolio pages intentionally do NOT need backend endpoints.

---

# 14. DATABASE

Planned database:
- PostgreSQL

Expected dynamic data categories include:
- Applications
- Sponsor/industry inquiries
- Projects
- Potentially other dynamic data discovered later

Static team portfolio information does NOT need to be stored in PostgreSQL unless the requirement changes.

Do not design the database prematurely without first defining the actual fields and relationships.

---

# 15. SYNCHRON

Synchron must have a dedicated page:

/synchron

Important:
- Synchron is a competition.
- Detailed design/content/functionality will be worked on later.
- Do not block the rest of the website waiting for Synchron.

---

# 16. DEVELOPMENT ORDER

Build incrementally in this order:

PHASE 1 — Frontend foundation
- React/Vite setup
- React Router
- Global CSS/theme
- Basic architecture

PHASE 2 — Rebuild homepage
- Navbar
- Hero
- About
- Vision/Mission
- Synchron preview
- How We Work
- Projects preview
- Team
- Contact
- Footer
- Preserve old visual style/animations

PHASE 3 — Static pages/routes
- Domains
- Projects
- Apply
- Sponsor
- Synchron
- Team portfolio pages

PHASE 4 — Project search UX
- Search toolbar
- Project cards
- Filters/details if useful
- Initially mock/static data if needed

PHASE 5 — Backend skeleton
- Express setup
- Config
- Routes
- Controllers
- Services
- Models
- Error handling
- Environment variables

PHASE 6 — Database
- PostgreSQL
- Define schemas
- Connect backend
- Store applications
- Store sponsor inquiries
- Store projects

PHASE 7 — Connect frontend to backend
- Application submission
- Sponsor submission
- Project search
- Error/loading/success states

PHASE 8 — Chatbot
- Select external AI API
- Backend integration
- React chat UI
- Secure API key handling

PHASE 9 — Final polish
- Responsive behavior
- Accessibility
- Validation
- Error handling
- Loading states
- SEO/meta
- Performance
- Security
- Deployment preparation

---

# 17. DEVELOPMENT RULES / WORKING STYLE

The user prefers:
- Practical, step-by-step guidance.
- Simple explanations of why architectural decisions are made.
- Do not dump the entire project/codebase at once.
- Build and test one logical step at a time.
- When a command is needed, give the exact command.
- When code is needed, clearly say which file it belongs in.
- Avoid unnecessary abstraction.
- Explain important concepts because the user has frontend experience but is less experienced with backend architecture.

IMPORTANT:
- Do not recreate the old 700+ line monolithic HTML file inside one React component.
- Break the site into sensible components.
- Avoid premature backend/database complexity.
- Do not implement requirements that have not been requested.
- Do not remove requirements for convenience.
- If an architectural choice conflicts with an explicit user requirement, prioritize the user's requirement and explain the tradeoff.

---

# 18. CURRENT CHECKPOINT

As of this context:

Frontend:
- React installed.
- React DOM installed.
- React Router installed.
- Vite installed.
- Vite React plugin installed.
- Vite configuration exists.
- `npm run dev` works.
- Browser displays "Synergy".

Current frontend is essentially a minimal React app.

Next planned task:
- Set up the frontend's global styling/theme and begin the React component architecture.
- Then build the Navbar and proceed section-by-section.

Backend:
- Skeleton folders exist.
- No backend logic has been implemented.
- No database has been connected.
- No API endpoints have been implemented.

---

# 19. NON-NEGOTIABLE REQUIREMENTS CHECKLIST

Before considering the project complete, verify ALL:

[ ] React-based frontend
[ ] Existing Synergy visual identity preserved/recreated
[ ] Responsive website
[ ] Team photos
[ ] Team positions
[ ] Improved Team Synergy description
[ ] Individual static team portfolio pages
[ ] Apply Now custom form
[ ] Applications stored in backend/database
[ ] Sponsor Us option
[ ] Sponsor submissions stored in backend/database
[ ] Dedicated Synchron competition page
[ ] Project search toolbar
[ ] Search/browse ongoing projects
[ ] Ability to show/check available new project ideas
[ ] Backend API architecture
[ ] PostgreSQL database
[ ] Visitor chatbot
[ ] External AI API used for chatbot
[ ] AI secret key protected on backend
[ ] Proper loading/error/success handling
[ ] Mobile responsiveness
[ ] No unnecessary backend API for static team portfolio pages

END OF CONTEXT
