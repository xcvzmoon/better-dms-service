# Better DMS Service

<div align="center">
  <img src="docs/public/logo.svg" alt="Better DMS Service Logo" width="120" height="120">
  
  <p><strong>New version of DMS Service using Bun, Nitro, and Drizzle</strong></p>
  
  [![CI](https://github.com/xcvzmoon/better-dms-service/actions/workflows/ci.yaml/badge.svg)](https://github.com/xcvzmoon/better-dms-service/actions/workflows/ci.yaml)
  [![Deploy](https://github.com/xcvzmoon/better-dms-service/actions/workflows/deploy.yml/badge.svg)](https://github.com/xcvzmoon/better-dms-service/actions/workflows/deploy.yml)
</div>

## 🚀 Features

- **⚡ Real-time PDF Processing** - Stream-based parsing with live progress updates
- **🏗️ Modern N-Tier Architecture** - Built with Nitro, Drizzle ORM, and PostgreSQL
- **🛡️ Fully Type-Safe** - End-to-end type safety with TypeScript and Zod
- **📄 Advanced PDF Analysis** - Extract text, metadata, and page counts
- **🔄 Health Monitoring** - Built-in health checks and system metrics
- **🚀 High Performance** - Powered by Bun runtime for lightning-fast execution

## 📖 Documentation

Visit our comprehensive documentation: **[https://xcvzmoon.github.io/better-dms-service/](https://xcvzmoon.github.io/better-dms-service/)**

## 🚦 Quick Start

```bash
# Clone the repository
git clone https://github.com/xcvzmoon/better-dms-service.git
cd better-dms-service

# Install dependencies
bun install

# Set up environment
cp .env.example .env
# Edit .env with your database configuration

# Set up database
bun run db:generate
bun run db:push

# Start development server
bun run dev
```

## 🔗 Links

- **[Get Started Guide](https://xcvzmoon.github.io/better-dms-service/get-started)** - Complete setup instructions
- **[API Documentation](https://xcvzmoon.github.io/better-dms-service/api)** - API reference and examples
- **[Features Overview](https://xcvzmoon.github.io/better-dms-service/features)** - Detailed feature descriptions
