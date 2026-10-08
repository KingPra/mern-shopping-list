# Credential cleanup

Server startup now fails with a clear error if MONGO_URI is absent. Owner must confirm whether this app is active, configure a replacement database credential securely, and validate startup before merging. A .env file is not loaded automatically.

This branch removes credential values from current files only. Existing Git history, forks, clones, cached views, and earlier deployments may still contain them. No credentials were tested or revoked, no history was rewritten, and no deployment was performed. The owner must revoke or replace exposed credentials through the provider's authenticated dashboard separately.

Do not merge or deploy this draft until its impact is reviewed. Do not commit replacement secrets, including in generated bundles or source maps.
