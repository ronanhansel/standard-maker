# Temporary Subscriber CSV Feature

This feature allows adding new subscribers to a CSV file stored in a Cloudflare R2 bucket. It was designed to be easily disposable when no longer needed.

## Implementation Details

- The Subscribe component in `/components/product-component/subscribe.tsx` has been modified to send form data to the `/api/subscribers` endpoint
- The API endpoint in `/app/api/subscribers/route.ts` handles validation and processing
- The R2 service in `/app/api/subscribers/r2-service.ts` contains the CSV handling logic

## CSV Format

The CSV file has the following structure:

```
email,name,attributes
user1@mail.com,"User One","{\"age\": 42, \"planet\": \"Mars\"}"
user2@mail.com,"User Two","{\"age\": 24, \"job\": \"Time Traveller\"}"
```

New subscribers are added with an empty attributes object (`{}`), as requested.

## How to Remove This Feature

When this feature is no longer needed, follow these steps to remove it:

1. Revert the changes in `/components/product-component/subscribe.tsx`:

   - Replace the API call with the original simulation code

2. Delete the following files:
   - `/app/api/subscribers/route.ts`
   - `/app/api/subscribers/r2-service.ts`
   - `/app/api/subscribers/README.md`

## Production Considerations

For a production implementation, you would need to:

1. Set up proper Cloudflare R2 credentials
2. Use the official Cloudflare R2 SDK
3. Implement proper error handling and retries
4. Add rate limiting to prevent abuse

This implementation is intentionally simplified for temporary use.
