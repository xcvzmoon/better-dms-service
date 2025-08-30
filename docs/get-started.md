# Getting Started

Welcome to Better DMS Service! This guide will help you get up and running quickly with our modern document management system.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Bun** (latest version) - [Download here](https://bun.sh/)
- **PostgreSQL** (v13 or higher) - [Download here](https://www.postgresql.org/download/)
- **Node.js** (v18 or higher) - Only if you prefer npm/yarn over Bun

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/xcvzmoon/better-dms-service.git
cd better-dms-service
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Environment Setup

Copy the example environment file and configure your settings:

```bash
cp .env.example .env
```

Edit the `.env` file with your database configuration:

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=better_dms
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_SSL=false
```

### 4. Database Setup

Create your database and run migrations:

```bash
# Create database (using psql)
createdb better_dms

# Generate database schema
bun run db:generate

# Push schema to database
bun run db:push
```

### 5. Start the Development Server

```bash
bun run dev
```

The server will start at `http://localhost:3000`.

## Verify Installation

Test your installation by checking the health endpoints:

```bash
# Check application health
curl http://localhost:3000/health

# Check database health
curl http://localhost:3000/health/db
```

You should receive successful health check responses.

## Testing PDF Upload

### Using curl

Test the PDF upload functionality with a sample PDF:

```bash
curl -N -H "Accept: text/event-stream" \
  -F "files=@your-sample.pdf" \
  http://localhost:3000/api/files/upload
```

You'll see real-time progress updates as the PDF is processed.

### Using a Frontend Client

Create a simple HTML file to test the streaming upload:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>PDF Upload Test</title>
  </head>
  <body>
    <form id="uploadForm">
      <input type="file" id="fileInput" multiple accept=".pdf" />
      <button type="submit">Upload PDFs</button>
    </form>
    <div id="progress"></div>

    <script>
      document.getElementById('uploadForm').addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData();
        const files = document.getElementById('fileInput').files;

        for (let file of files) {
          formData.append('files', file);
        }

        const response = await fetch('/api/files/upload', {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'text/event-stream',
          },
        });

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split('\n');

          for (let line of lines) {
            if (line.startsWith('data: ')) {
              const progress = line.substring(6);
              document.getElementById('progress').textContent = `Progress: ${progress}%`;
            }
          }
        }
      });
    </script>
  </body>
</html>
```

## Development Commands

### Database Management

```bash
# Generate new migration
bun run db:generate

# Push schema changes
bun run db:push

# Pull schema from database
bun run db:pull

# Open database studio
bun run db:studio

# Check schema
bun run db:check
```

### Code Quality

```bash
# Format code
bun run format

# Lint code
bun run lint

# Build for production
bun run build
```

### Documentation

```bash
# Start documentation dev server
bun run docs:dev

# Build documentation
bun run docs:build

# Preview built documentation
bun run docs:preview
```

## Project Structure

```text
better-dms-service/
├── server/                # Server-side code
│   ├── config/            # Database and app configuration
│   ├── database/          # Database schemas and migrations
│   ├── routes/            # API endpoints
│   │   ├── api/           # API routes
│   │   └── health/        # Health check endpoints
│   └── utils/             # Utility functions
├── docs/                  # Documentation
├── .github/               # GitHub workflows
└── package.json           # Dependencies and scripts
```

## Configuration

### Database Configuration

The application uses environment variables for database configuration:

- `DB_HOST` - Database host (default: localhost)
- `DB_PORT` - Database port (default: 5432)
- `DB_DATABASE` - Database name
- `DB_USERNAME` - Database username
- `DB_PASSWORD` - Database password
- `DB_SSL` - Enable SSL (true/false)

### Server Configuration

The server is configured via `nitro.config.ts`:

```typescript
export default defineNitroConfig({
  compatibilityDate: 'latest',
  srcDir: 'server',
  imports: false,
});
```

## Troubleshooting

### Common Issues

**Database Connection Error**

```text
Error: Connection failed
```

- Verify PostgreSQL is running
- Check database credentials in `.env`
- Ensure database exists

**Port Already in Use**

```text
Error: Port 3000 is already in use
```

- Kill the process using port 3000: `lsof -ti:3000 | xargs kill`
- Or use a different port by setting `PORT` environment variable

**PDF Processing Fails**

```text
Error: Failed to process PDF
```

- Ensure the uploaded file is a valid PDF
- Check file size limits
- Verify sufficient memory is available

### Getting Help

- Check the [API Documentation](/api) for endpoint details
- Review the [Features](/features) page for functionality overview
- Open an issue on [GitHub](https://github.com/xcvzmoon/better-dms-service/issues)

## Next Steps

Once you have the service running:

1. **Explore the API** - Check out the [API Documentation](/api)
2. **Learn about Features** - Read the [Features Overview](/features)
3. **Build a Client** - Create a frontend application that consumes the API
4. **Deploy** - Set up production deployment with proper environment configuration

Happy coding! 🚀
