# API Documentation

## Base URL
```
http://localhost:3000
```

## Endpoints

### File Upload and Processing

#### Upload PDF Files with Real-time Processing
**POST** `/api/files/upload`

Upload one or more PDF files and receive real-time processing updates via Server-Sent Events.

**Request:**
- **Content-Type:** `multipart/form-data`
- **Body:** Form data with `files` field containing PDF files

**Response:**
- **Content-Type:** `text/event-stream`
- **Body:** Server-Sent Events stream with progress updates

**Example Request:**
```bash
curl -N -H "Accept: text/event-stream" \
  -F "files=@document1.pdf" \
  -F "files=@document2.pdf" \
  http://localhost:3000/api/files/upload
```

**Example Response Stream:**
```
data: 0

data: 50

data: 100
```

**Error Responses:**
- `400 Bad Request` - Invalid form data or file format
- `500 Internal Server Error` - Processing error

---

### Health Checks

#### Application Health Status
**GET** `/health`

Get comprehensive application health information including uptime and memory usage.

**Response:**
```json
{
  "success": true,
  "data": {
    "status": "healthy",
    "timestamp": "2025-08-30T12:00:00.000Z",
    "uptime": "2d 14h 30m 45s",
    "memory": {
      "rss": "150.25MB",
      "heapTotal": "120.80MB",
      "heapUsed": "95.40MB",
      "external": "45.60MB",
      "arrayBuffers": "12.30MB"
    }
  }
}
```

#### Database Health Check
**GET** `/health/db`

Verify database connectivity and health status.

**Response:**
```json
{
  "success": true,
  "data": {
    "status": "healthy",
    "timestamp": "2025-08-30T12:00:00.000Z"
  }
}
```

---

### Home Page
**GET** `/`

Returns a simple HTML welcome page for the service.

**Response:**
```html
<meta charset="utf-8">
<h1>This is your brand new Nitro project 🚀 </h1>
<p>Get started by editing the <code>server/routes/index.ts</code> file.</p>
<p>Learn more from 📖 <a href="https://nitro.build/guide" target="_blank">Nitro Documentation</a></p>
```

## Error Handling

All endpoints return standardized error responses:

```json
{
  "statusCode": 400,
  "statusMessage": "Error description",
  "data": {} // Additional error details if available
}
```

## Rate Limiting

Currently no rate limiting is implemented. Consider implementing rate limiting for production deployments.

## Authentication

Currently no authentication is required. Consider implementing authentication for production use.
