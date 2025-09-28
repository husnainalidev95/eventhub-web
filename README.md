# 🎟️ EventHub Web (Frontend)

**EventHub Web** is the frontend for the Event Booking & Management Platform.  
Built with **Next.js 14 (App Router)**, **React 18**, **TailwindCSS**, and **NextAuth.js**.

Users can browse and book events, while organizers manage events and view analytics.

---

## 🚀 Features

- **Browse/Search Events** by category, date, location, and price.
- **Event Details Page** with gallery, ticket types, organizer info, and live seat counts.
- **Booking Flow**: hold seats → pay via Stripe Checkout → confirmation.
- **Organizer Dashboard**: create/edit events, upload images (S3), manage tickets, view revenue.
- **User Bookings**: view booking history, statuses, and export CSV.
- **Admin Tools**: basic role management and SES template previews.
- **Responsive Design**: mobile-first, Tailwind-powered.
- **Accessibility & SEO**: WCAG 2.1 AA compliance and schema.org Event data.

---

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/docs/app) (App Router, Server Components)
- [React 18](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) (validation)
- [NextAuth.js](https://next-auth.js.org/) (JWT sessions, Google + credentials login)
- [React Query](https://tanstack.com/query/latest) (data fetching/caching)
- [Stripe Checkout](https://stripe.com/docs/payments/checkout)
- [Playwright](https://playwright.dev/) + [Vitest](https://vitest.dev/) (testing)

---

## 📂 Project Structure

app/ # App Router routes
layout.tsx
page.tsx # Home
events/ # Events list + details
bookings/ # User bookings
checkout/ # Checkout flow
organizer/ # Organizer dashboard
admin/ # Admin utilities
components/ # Reusable UI + domain components
hooks/ # Custom hooks (auth, websockets, etc.)
lib/ # API client, helpers, auth utils
schemas/ # Zod schemas for forms
styles/ # Tailwind + global styles

yaml
Copy code

---

## ⚙️ Setup

### Prerequisites
- Node.js 20+
- pnpm (recommended) or npm
- Backend API (`eventhub-api`) running locally or remote

### Environment Variables

Create `.env.local`:

```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=replace-me
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
NEXT_PUBLIC_STRIPE_PK=pk_test_...
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
Install & Run
bash
Copy code
pnpm install
pnpm dev
Open 👉 http://localhost:3000

📜 Scripts
bash
Copy code
pnpm dev        # start dev server
pnpm build      # production build
pnpm start      # start prod server
pnpm lint       # run eslint
pnpm typecheck  # run TypeScript
pnpm test       # run unit tests (Vitest)
pnpm e2e        # run Playwright e2e tests
🧪 Testing
Unit tests: pnpm test

E2E tests: pnpm e2e

Accessibility: axe checks in Playwright flows

🚀 Deployment
Static Assets: Deploy via Vercel, AWS S3 + CloudFront, or similar.

Env Vars: Provide via hosting platform or GitHub Actions.

CI/CD: GitHub Actions (lint, test on PR; build & deploy on tag).

📖 Documentation
Figma Designs

OpenAPI Spec for API integration

Architecture Docs

📌 Roadmap
 Dark mode theme

 Event reviews & ratings

 Multi-language support (i18n)

🧑‍💻 Author
Built by Husnain Ali.
Frontend for EventHub — an open-source event booking platform.
