# Dhruv Dixit | Personal Research Website

A responsive research portfolio for Dhruv Dixit. Its visual direction and section-based layout are adapted from [Brittany Chiang's v3 portfolio](https://github.com/bchiang7/bchiang7.github.io). This version uses simple HTML, CSS, and JavaScript, so it can be published on GitHub Pages without installing Jekyll, Gulp, Node, or any other build tool.

## What's included

- A landing section with research focus and contact links
- About, selected research, publications, experience, education, awards, and contact sections
- A dark/light theme switch with a saved preference
- Responsive mobile navigation and keyboard-accessible links
- Metadata, SVG favicon, and social preview image
- A public CV PDF with the personal phone number removed
- A `.nojekyll` file for direct GitHub Pages publishing

The PhD Statement of Purpose is used to write the research summaries. The original statement is **not** published with the site. Paper statuses were chosen using the more detailed descriptions in the statement. Check them before launch because submissions and decisions may change.

## Publish at `https://YOUR_USERNAME.github.io/`

### 1. Create the repository

1. Sign in to [GitHub](https://github.com).
2. Click **+** and select **New repository**.
3. Give it the exact name `YOUR_USERNAME.github.io`, replacing `YOUR_USERNAME` with **your actual GitHub username**. Use the exact spelling and capitalization of your GitHub username.
4. Select **Public** and create the empty repository. Do not initialize it with a README or other files.

### 2. Upload the website

Unzip the downloaded website ZIP, open a terminal in the extracted `dhruv-dixit-website` folder, then run:

```bash
git init
git branch -M main
git add .
git commit -m "Launch personal research website"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

Replace `YOUR_USERNAME` in the remote URL before running the `git remote add` command. If GitHub asks for authentication, use a supported GitHub sign-in method, such as Git Credential Manager or GitHub CLI. Your usual GitHub account password may not work for command-line Git operations.

You can also upload the extracted **files and folders** on GitHub via **Add file > Upload files**. Do not upload the ZIP itself as one file. Keep `assets/` intact and include the hidden `.nojekyll` file.

### 3. Enable GitHub Pages

1. Open the new repository on GitHub.
2. Click **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose the **main** branch and the **/(root)** folder, then click **Save**.
5. After GitHub finishes deployment, open `https://YOUR_USERNAME.github.io/`.

GitHub Pages documentation: [Quickstart](https://docs.github.com/en/pages/quickstart) and [Publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Preview locally

In the website folder, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000> in your browser. Stop the server with `Ctrl+C`.

## Edit your content

| What to change | File |
| --- | --- |
| Name, introduction, research, experience, awards, paper list | `index.html` |
| Website styling and colors | `assets/styles.css` |
| Theme and mobile menu behavior | `assets/site.js` |
| Public academic CV | `assets/Dhruv_Dixit_Public_CV.pdf` |
| Browser tab icon | `assets/favicon.svg` |
| Sharing preview | `assets/og-cover.svg` |

### Important final checks

- **Your GitHub URL is unknown.** When you choose it, add a GitHub profile link to the footer or contact section if desired.
- **Google Scholar is linked** using the profile URL embedded in the supplied CV. Confirm it is the profile you want to show.
- **Paper links are included** where the supplied CV provides a link, including arXiv and publisher URLs. Add a verified TASP link if one becomes available.
- **Verify publication status.** The statement describes the NAACL 2027 work as submitted and the FAccT 2027 manuscript as prepared for submission. The website uses those descriptions. Update them when outcomes change.
- **Verify the public CV.** It is copied from the supplied CV with the phone number removed. It still contains the original document's wording, including its research status descriptions. Consider updating it before publication.
- **Optional:** Add a headshot under `assets/` and place an `<img>` where you want it. No photograph was supplied, so this version uses a text-led layout.

## Updating the live site

Edit your files locally, then run:

```bash
git add .
git commit -m "Update research website"
git push
```

The published website will update after GitHub Pages processes the new commit.

## Credits

Site content is based on Dhruv Dixit's CV and Statement of Purpose. The page structure and visual styling draw inspiration from [Brittany Chiang's open-source v3 portfolio](https://github.com/bchiang7/bchiang7.github.io). Attribution is also present in the website footer, as the template author requests.

This package is a lightweight, hand-written static adaptation. It does not contain copies of the original Jekyll repository's source files or assets.
