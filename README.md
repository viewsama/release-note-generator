# Amity-Release-Notes-Generator
<!---
please add short description
-->

## How
**Running on local**
* Run following command in terminal.
```bash
# for OPENAI_API_KEY, please ask for the key from admin :)
OPENAI_API_KEY="OPENAI_API_KEY" ./build.sh
```

**Deploy to preview**
* Every commits push to branches except `main` will be deployed to preview environment on Cloudflare Pages.

**Deploy to Production**
* Perform PR and merge to `main` will deployed to Production environment on Cloudflare Pages.
:)
T-T
