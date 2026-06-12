# Portfolio Update Guide

## Add a New Project

1. Open:

src/data/projects.js

2. Copy the project template from:

src/data/PROJECT_TEMPLATE.js

3. Paste the copied object inside the projects array in projects.js.

4. Update the following fields:

- id
- title
- category
- type
- status
- date
- featured
- priority
- technologies
- shortDescription
- fullDescription
- highlights
- metrics
- links

5. Save the file.

6. Test locally:

npm run dev

7. Build the project:

npm run build

8. Push the update:

git add .
git commit -m "Add new project"
git push

GitHub Actions will automatically deploy the updated website.

---

## Add a New Skill

Open:

src/data/skills.js

Add the skill inside the correct skill group.

---

## Add a New Certification

Open:

src/data/certifications.js

Add a new certification object.

---

## Replace the CV

Put the new PDF inside:

public/files/

Then open:

src/data/profile.js

Update the cvUrl value.

Example:

cvUrl: "/files/New_CV_File_Name.pdf"

---

## Replace the Profile Photo

Put the new image inside:

public/images/

Then open:

src/data/profile.js

Update the image value.

Example:

image: "/images/new-profile-photo.png"