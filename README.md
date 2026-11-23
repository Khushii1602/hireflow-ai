# HireFlow AI

An applicant tracking workspace for organising candidates and making recruitment workflows easier to manage.

> **Status:** Early development

## Overview

HireFlow AI is a recruitment management application focused on the journey from job creation to candidate review. The first milestone is a reliable applicant tracking system; AI-assisted resume insights will be added as a separate, clearly evaluated module.

## Planned features

- Recruiter registration and sign-in
- Create and manage job openings
- Candidate profiles and resume uploads
- Application status pipeline
- Recruiter notes and evaluation
- Search and filter candidates
- Basic hiring analytics
- Later: resume parsing and skill-to-job matching

## Technology

- **Frontend:** React, Vite, JavaScript, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose
- **AI module (planned):** Python-based resume parsing and matching service

The AI component is a planned extension and is not yet implemented.

## Repository layout

```text
hireflow-ai/
├── client/                 # React application
│   └── src/
│       ├── components/
│       ├── features/
│       ├── pages/
│       ├── services/
│       └── App.jsx
├── server/                 # Express API
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── middleware/
│       ├── models/
│       ├── routes/
│       └── app.js
├── ai-service/             # Future Python service
├── docs/
├── .gitignore
└── README.md
```

## Getting started

The repository is currently being scaffolded. Installation, configuration, and run commands will be added as the frontend and backend are implemented.

## Development milestones

- [ ] Set up the React client and Express server
- [ ] Configure MongoDB and environment variables
- [ ] Implement recruiter authentication
- [ ] Add job posting and candidate APIs
- [ ] Implement resume upload and application pipeline
- [ ] Build candidate search and recruiter dashboard
- [ ] Explore resume parsing and skill matching
- [ ] Add tests and deployment documentation

## Engineering notes

- Treat uploaded resumes as untrusted files and validate type and size.
- Enforce role-based access on recruiter and candidate resources.
- Keep AI-generated matches explainable and subject to recruiter review.
- Avoid using sensitive candidate attributes in automated ranking.

---

This repository is an independent learning and development project. Features listed above are planned and are not represented as completed until implemented and tested.
