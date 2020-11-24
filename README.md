# IT Fundamentals Handbook website

This repository hosts an online textbook written in house for [Gunnar Aas](https://gunnaraas.com)'s [MNCFS](https://mncfs.org/) CompTIA ITF+ classes.

This website is built using [Docusaurus 2](https://v2.docusaurus.io/) and is compiled and hosted by [Netlify](https://netlify.com).

[![Netlify Status](https://api.netlify.com/api/v1/badges/41f7b618-855e-4cc5-ab91-ba422d39aded/deploy-status)](https://app.netlify.com/sites/comptia-itf-handbook/deploys)

Except where otherwise noted, content on this site is licensed under a [Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/).

### Local Development

To develop this website locally on your machine, make sure you have [node.js](https://nodejs.org/en/), [yarn](https://yarnpkg.com/), and a text editor of your choice ([Atom](https://atom.io/), [Visual Code Studio](https://code.visualstudio.com/)) installed. I recommend Windows users use [Chocolatey](https://chocolatey.org) to install node.js and yarn.

Open a terminal (e.g. PowerShell, [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab)) in the location you'd like to save the development files (In Windows Explorer: Shift + Right-Click).

Clone and enter the repository using:
```
git clone https://github.com/gunnaraas/fundamentals-handbook.git && cd fundamentals-handbook
```

To start up the local development server and launch a preview window in your default browser, run the command:
```
yarn start
```

Most changes are reflected live without having to restart the server.

### Outside Contributions

Students and other users are invited to make changes and edits to the website as needed. You can do this by setting up a Local Development environment on your computer, or editing the files in the `/docs/` directory inside your browser. All pages are written in Markdown ([Markdown Guide](https://www.markdownguide.org/tools/docusaurus/)), and a Github account is required to submit contributions. Please create a pull request to submit any changes for approval. To submit edits or new content in plaintext, email to: gunnar (at) gunnaraas.com

### Netlify Build Settings

Build command: `yarn run build`

Publish directory: `/build`
