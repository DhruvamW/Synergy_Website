# Team Synergy — Remaining Development Roadmap

> **Purpose:** Track what remains to be built for the new Team Synergy website.
>
> **Important:** This is a living roadmap. The initial requirements are not permanently locked. When a specific element is picked up for development, the user may provide new content, design material, or requirement changes. The latest decision should take precedence.

---

## Current Status

### Completed

- [x] React + Vite setup
- [x] React Router setup
- [x] Basic project structure
- [x] Global CSS/theme
- [x] Navbar
- [x] Home route
- [x] Domains route placeholder
- [x] Projects route placeholder
- [x] Apply route placeholder
- [x] Sponsor route placeholder
- [x] Synchron route placeholder
- [x] Hero section
- [x] About section
- [x] Vision & Mission section
- [x] Synchron preview section
- [x] How We Work section
- [x] Projects section with mock project data
- [x] Basic responsive styling

The current visual styling is a temporary baseline. It can be redesigned later without changing the underlying application architecture, routes, APIs, or database logic.

---

# Remaining Development Checklist

## 1. Homepage

### Team Section

- [ ] Team member cards
- [ ] Team member photos
- [ ] Team member positions/designations
- [ ] Links from team cards to individual portfolio pages
- [ ] Final Team Synergy description

Current known team members:

1. Riddhiman Ganguly — Team Leader
2. T Shrithan Reddy — Team Manager
3. Ayush Prakash Thorat — Treasurer
4. Sarayu Matam — Management Head
5. Arnav Gupta — Electronics Head
6. Mrinal — Software Head
7. Samridhi — Manufacturing Head

**Note:** Team content may change when this section is developed.

### Contact Section

- [ ] Contact information
- [ ] Social/contact links
- [ ] CTA for students and/or industries
- [ ] Final content/design

### Footer

- [ ] Footer navigation
- [ ] Social links
- [ ] Copyright
- [ ] Apply/Sponsor CTAs
- [ ] Final design

### Homepage Polish

- [ ] Reliable navbar → Team scrolling
- [ ] Add Spline 3D scene to Hero
- [ ] Mobile responsiveness check
- [ ] Section spacing cleanup
- [ ] Scroll/reveal animations if required
- [ ] Final visual design later

---

# 2. Individual Team Portfolio Pages

Planned static React routes:

- [ ] `/team/riddhiman`
- [ ] `/team/shrithan`
- [ ] `/team/ayush`
- [ ] `/team/sarayu`
- [ ] `/team/arnav`
- [ ] `/team/mrinal`
- [ ] `/team/samridhi`

Potential page content:

- [ ] Photo
- [ ] Name
- [ ] Position
- [ ] About
- [ ] Skills
- [ ] Projects
- [ ] Achievements
- [ ] Social/contact links
- [ ] Back to Team

**Architecture requirement:** These should remain static React pages/routes. No API/database is required for team portfolios unless the requirements are later changed.

---

# 3. Domains Page

Current status: placeholder.

- [ ] Decide final domains/categories
- [ ] Design domain cards
- [ ] Add descriptions
- [ ] Add relevant projects/skills
- [ ] Responsive layout
- [ ] Final content/design

**Note:** Domain structure is subject to change.

---

# 4. Projects System

A basic mock-data version has already been started.

## Frontend

- [x] Project cards
- [x] Mock project data
- [ ] Project search bar
- [ ] Search by project name
- [ ] Filter by domain
- [ ] Filter by status
- [ ] Filter by project type
- [ ] Project details page/view
- [ ] "Available/Open" indication
- [ ] Final project information
- [ ] Final search UX

## Backend

Planned APIs:

- [ ] `GET /api/projects`
- [ ] `GET /api/projects/:id`

Database:

- [ ] PostgreSQL projects table
- [ ] Replace mock project data with database data
- [ ] Backend-driven project search/filtering

Intended functionality: visitors should be able to browse current/ongoing projects and discover available project opportunities/ideas.

**Note:** Exact project fields and behavior may change.

---

# 5. Apply Now

The old Microsoft Forms approach is not intended for the new website.

## Frontend

- [ ] Final Apply page design
- [ ] Custom React/HTML form
- [ ] Name
- [ ] Email
- [ ] Phone/contact
- [ ] College/course/year
- [ ] Areas/domains of interest
- [ ] Skills
- [ ] Why join Synergy?
- [ ] Other required fields
- [ ] Form validation
- [ ] Loading state
- [ ] Success/error messages

## Backend

Planned API:

- [ ] `POST /api/applications`

Database:

- [ ] PostgreSQL applications table
- [ ] Store submitted applications
- [ ] Server-side validation
- [ ] Error handling

**Note:** Exact fields will be decided when the Apply page is developed.

---

# 6. Sponsor Us

Dedicated sponsor/industry inquiry flow.

## Frontend

- [ ] Sponsor page design
- [ ] Company/organization name
- [ ] Contact person
- [ ] Email
- [ ] Phone
- [ ] Industry
- [ ] Sponsorship interest
- [ ] Message
- [ ] Form validation
- [ ] Success/error states

## Backend

Planned API:

- [ ] `POST /api/sponsors`

Database:

- [ ] PostgreSQL sponsors table
- [ ] Store sponsor inquiries
- [ ] Server-side validation
- [ ] Security/error handling

**Note:** Exact fields and sponsorship flow may change.

---

# 7. Synchron Page

Current status: placeholder.

Potential work:

- [ ] Final Synchron branding
- [ ] Hero
- [ ] About Synchron
- [ ] Competition details
- [ ] Themes/categories
- [ ] Timeline
- [ ] Rules
- [ ] Prizes
- [ ] Registration/CTA
- [ ] FAQ if required
- [ ] Responsive design

**Important:** Synchron is a competition. Detailed content/design will be decided later.

---

# 8. Backend Setup

Current status: not implemented yet.

## Node.js + Express

- [ ] Initialize backend
- [ ] Install Express and required dependencies
- [ ] Server setup
- [ ] Environment variables
- [ ] CORS configuration
- [ ] Error handling
- [ ] API structure

Planned structure:

```text
backend/src/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
└── services/
```

---

# 9. PostgreSQL Database

- [ ] Set up PostgreSQL
- [ ] Create database
- [ ] Configure database connection
- [ ] Applications table
- [ ] Sponsors table
- [ ] Projects table
- [ ] Additional tables only if later requirements justify them
- [ ] Test database queries/operations

---

# 10. Connect Frontend ↔ Backend

- [ ] Create frontend API service layer
- [ ] Connect Apply form
- [ ] Connect Sponsor form
- [ ] Connect Projects
- [ ] Handle loading states
- [ ] Handle API errors
- [ ] Test end-to-end submissions
- [ ] Verify production communication

Basic architecture:

```text
React Frontend
      ↓
Express REST API
      ↓
PostgreSQL
```

---

# 11. Chatbot

Requirement:

> Use an available external AI API rather than building an AI model from scratch.

## Frontend

- [ ] Chatbot UI
- [ ] Message bubbles
- [ ] Input
- [ ] Loading state
- [ ] Error handling
- [ ] Final UX/design

## Backend

Planned API:

- [ ] `POST /api/chat`
- [ ] Connect backend to external AI API
- [ ] Store AI API key in `.env`
- [ ] Never expose API key to frontend
- [ ] Return AI response to frontend
- [ ] Add appropriate validation/rate protection

Architecture:

```text
Visitor
   ↓
React Chatbot
   ↓
Express /api/chat
   ↓
External AI API
   ↓
Express
   ↓
React
```

**Note:** Exact AI provider and chatbot behavior will be decided later.

---

# 12. Security

Before production:

- [ ] Configure `.env`
- [ ] Configure `.gitignore`
- [ ] Never expose API keys
- [ ] Validate forms server-side
- [ ] Sanitize/validate user input
- [ ] Configure CORS properly
- [ ] Add rate limiting where appropriate
- [ ] Basic API abuse protection
- [ ] Secure PostgreSQL credentials
- [ ] Review backend error responses

---

# 13. Final Design / UX Pass

The current visual design is only a temporary starting point.

When final design material is available:

- [ ] Final typography
- [ ] Final colors
- [ ] Final layouts
- [ ] Navbar
- [ ] Hero
- [ ] Sections
- [ ] Cards
- [ ] Buttons
- [ ] Forms
- [ ] Animations
- [ ] Hover effects
- [ ] Mobile design
- [ ] Loading states
- [ ] Empty states
- [ ] Error states
- [ ] Accessibility/UX improvements

A future screenshot, Figma design, reference website, or other visual direction can be implemented without rewriting the backend/database architecture.

---

# 14. Testing

- [ ] Desktop testing
- [ ] Mobile testing
- [ ] Tablet testing
- [ ] Test every route
- [ ] Test navbar navigation
- [ ] Test team portfolio navigation
- [ ] Test forms
- [ ] Test API requests
- [ ] Test database writes
- [ ] Test project search/filtering
- [ ] Test chatbot
- [ ] Check broken links
- [ ] Check browser console
- [ ] Check backend errors
- [ ] Check edge cases

---

# 15. Deployment

- [ ] Build frontend
- [ ] Deploy frontend
- [ ] Deploy backend
- [ ] Deploy PostgreSQL/database
- [ ] Configure production environment variables
- [ ] Configure production CORS
- [ ] Connect production frontend/backend
- [ ] Configure custom domain
- [ ] Configure HTTPS
- [ ] Final production test

---

# Recommended Development Order

```text
Current State
     ↓
Finish Projects
     ↓
Team Section
     ↓
Contact + Footer
     ↓
Spline Hero
     ↓
Individual Team Pages
     ↓
Domains Page
     ↓
Project Search UX
     ↓
Backend Setup
     ↓
PostgreSQL
     ↓
Apply + Sponsor APIs
     ↓
Projects API
     ↓
Chatbot API
     ↓
Synchron Page
     ↓
Final Design / UX
     ↓
Testing
     ↓
Deployment
```

---

# Important Project Rule

This checklist is a **living roadmap**, not a fixed specification.

Whenever we start a particular element:

1. Review the original requirement.
2. Review any new changes the user provides.
3. Update the plan for that element.
4. Do not assume the old plan is still correct if the user has changed it.
5. Build only what is currently required.
6. Keep the architecture flexible enough for future design/content changes.

The user currently does not have all the content/material needed to build every page, so pages should be developed incrementally as the required material becomes available.
