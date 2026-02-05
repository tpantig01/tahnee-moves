# Setting Up Decap CMS for Tahnee Moves

Decap CMS gives you a user-friendly admin panel to edit your website content without touching code!

## What You'll Be Able to Edit:

- **Hero tagline** and intro text
- **Approach cards** (the 6 pillars)
- **Classes** (add/edit/remove classes)
- **Qualifications** (your credentials)
- **FAQ** (add/edit/remove questions)

## Setup Steps (Only Do Once)

### Step 1: Enable Netlify Identity

1. Go to your Netlify dashboard
2. Click on your site
3. Go to **Site settings** > **Identity**
4. Click **Enable Identity**

### Step 2: Configure Identity Settings

Still in Identity settings:

1. Scroll to **Registration preferences**
   - Select **Invite only** (so random people can't sign up)
   
2. Scroll to **External providers**
   - Enable **Git Gateway**

3. Scroll to **Services**
   - Click **Enable Git Gateway**

### Step 3: Add the Identity Widget to Your Site

Update your `src/_layouts/base.njk` file. Add this just before the closing `</head>` tag:

```html
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
```

And add this just before the closing `</body>` tag:

```html
<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>
```

### Step 4: Deploy Your Changes

```bash
git add .
git commit -m "Add Decap CMS"
git push
```

Wait for Netlify to rebuild (2-3 minutes)

### Step 5: Invite Yourself as a User

1. In Netlify dashboard, go to **Identity** tab
2. Click **Invite users**
3. Enter your email address
4. Check your email and click the invitation link
5. Set a password

## How to Use the CMS

### Access Your Admin Panel

Go to: `https://your-site.netlify.app/admin`

Or click the "Identity" button that appears on your site, then click "Log in"

### Edit Content

1. Log in with your email and password
2. Click on what you want to edit:
   - **Pages** → Edit hero tagline
   - **Approach Cards** → Edit your 6 pillars
   - **Classes** → Add/edit classes
   - **Qualifications** → Edit credentials
   - **FAQ** → Add/edit questions

3. Make your changes
4. Click **Save** (top right)
5. Click **Publish** → **Publish now**

Your site will automatically rebuild with the new content!

## Alternative CMS Options

### Option 2: Contentful (More Features, Paid Plans)

**Pros:**
- More powerful
- Better for multiple content types
- Nice media management
- Free tier available

**Cons:**
- More complex setup
- Free tier limits (25k records, 2 locales)
- Requires API keys

If you want Contentful instead, let me know and I'll set it up!

### Option 3: Sanity (Developer-Friendly)

**Pros:**
- Real-time collaboration
- Excellent media handling
- Free tier is generous

**Cons:**
- Requires more setup
- Need to learn their query language (GROQ)

## Recommendation

Start with **Decap CMS** because:
- ✅ Completely free
- ✅ No external dependencies
- ✅ Works directly with your GitHub repo
- ✅ Simple to use
- ✅ Perfect for your needs

You can always switch to Contentful or Sanity later if you need more features!

## Need Help?

- Decap CMS Docs: https://decapcms.org/docs/intro/
- Netlify Identity: https://docs.netlify.com/visitor-access/identity/
