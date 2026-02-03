# DNS Configuration for Bing Webmaster Tools

## CNAME Record Required

To complete Bing webmaster verification, you need to add the following CNAME record in your DNS settings:

- **Record Type:** CNAME (alias)
- **Name/Host:** `e938ffb97cbcde0177fb685f63cd4819`
- **Value/Points to:** `verify.bing.com`
- **TTL:** Default (or 3600)

## How to Add the CNAME Record

### If using a DNS provider (e.g., Cloudflare, Namecheap, GoDaddy):

1. Log into your DNS provider's control panel
2. Navigate to DNS settings for your domain
3. Add a new CNAME record with the details above
4. Save the changes

### Example Configuration:

```
Type: CNAME
Name: e938ffb97cbcde0177fb685f63cd4819
Target: verify.bing.com
```

## Verification

After adding both the meta tag (already added to the code) and the CNAME record (to be added in DNS), Bing will be able to verify your site ownership.

**Note:** DNS changes can take up to 24-48 hours to propagate, though they usually take effect within a few minutes to hours.
