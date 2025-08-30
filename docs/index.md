---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Better DMS Service'
  text: 'New version of DMS Service'
  tagline: Uses Bun, Nitro, and Drizzle
  image:
    src: /.vitepress/logo.svg
    alt: Better DMS Service Logo
  actions:
    - theme: brand
      text: Get Started
      link: /get-started
    - theme: alt
      text: Github
      link: https://github.com/xcvzmoon/better-dms-service

features:
  - title: 🚀 High Performance
    details: Powered by Bun runtime and Nitro framework for lightning-fast execution. Optimized for handling large file uploads and concurrent processing tasks.
  - title: 🏗️ Modern N-Tier Architecture
    details: Built with Nitro framework, Drizzle ORM, and PostgreSQL. Clean separation of concerns with dedicated layers for routes, services, repositories, and database operations.
  - title: 🛡️ Fully Type-Safe
    details: End-to-end type safety with TypeScript, Zod validation schemas, and Drizzle ORM. Runtime validation ensures data integrity and prevents type-related errors.
  - title: 🔄 Health Monitoring
    details: Built-in health check endpoints for application and database status monitoring. Real-time metrics including uptime, memory usage, and system performance.
  - title: ⚡ Real-time PDF Processing
    details: Stream-based PDF parsing with live progress updates using Server-Sent Events (SSE). Process multiple PDFs asynchronously with real-time feedback to users.
  - title: 📄 Advanced PDF Analysis
    details: Extract text content, metadata, and page counts from PDF files using the unpdf library. Support for complex PDF structures with comprehensive data extraction.
---
