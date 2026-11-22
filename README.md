# Dhruv Dixit | Research Portfolio

A static personal research website for GitHub Pages. The design uses a dark navy palette, blue accents, an original green-dot favicon, and a responsive layout. All files needed to publish the website are included in this repository.

## Site sections

- Background, with links to research advisors
- Research, including papers grouped by domain and sorted newest first within each category
- Experience
- Education
- Recognition
- Contact

## Preview locally

Open `index.html` in a browser or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish on GitHub Pages

### New website

1. Create a **public** repository named `YOUR_USERNAME.github.io` in your GitHub account.
2. Upload the contents of the `dhruv-dixit-website` folder to the repository root. You can drag and drop all files, including the `assets` folder, through GitHub's **Add file > Upload files** option.
3. Open **Settings > Pages** in the repository.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose **main** and **/(root)**, then save.
6. Open `https://YOUR_USERNAME.github.io/` when publication completes.

Alternatively, from the website folder, run:

```bash
git init
git branch -M main
git add .
git commit -m "Publish research website"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

Replace every instance of `YOUR_USERNAME` with your GitHub username.

### Update an existing website

Replace the files in your existing GitHub Pages repository with those from this folder and commit the changes. If you already use Git locally, from your repository run:

```bash
git add .
git commit -m "Refine site design and research pages"
git push
```

GitHub Pages will republish the updated site after the push.

## Edit site content

- `index.html`: text, research cards, links, experience, education, recognition
- `assets/styles.css`: colors, layout, header, cards, responsive styling
- `assets/site.js`: theme toggle and mobile navigation
- `assets/profile.jpg`: profile portrait
- `assets/Dhruv_Dixit_Public_CV.pdf`: public CV
- `assets/favicon.svg`: original logo with green dot
- `assets/og-cover.svg`: social sharing preview artwork

Use the same filenames when replacing assets so existing links keep working.

## Notes

This site does not require a Jekyll theme, Node.js, or a build process. It is built with HTML, CSS, and a small JavaScript file. Publication records reflect the author-provided CV and requested labels. Keep submission and publication statuses current when new decisions arrive.
