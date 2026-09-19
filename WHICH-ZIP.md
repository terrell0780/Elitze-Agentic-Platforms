# Which zip do I upload?

You have two builds. They are identical except for how internal links and
asset paths are written. Pick based on the address the site must answer on.

| I want the site at... | Use | Upload into |
| --- | --- | --- |
| `https://elitze.ca` | **elitze-ca-ROOT.zip** | the folder the domain points to |
| `https://elitze.ca/elitze` | **elitze-ca-SUBFOLDER.zip** | a folder literally named `elitze` in the web root |

**Almost everyone wants ROOT.** A business homepage should live at
`elitze.ca`, not `elitze.ca/elitze`.

---

## The `/elitze` question, answered

IONOS uses the word "directory" for two different settings. Which one you're
looking at decides the answer.

### Case 1 — "Destination directory" when assigning the domain

This maps the **domain's root** to a folder on disk. Visitors still reach the
site at `https://elitze.ca`; the folder name is invisible to them.

Here `/elitze` is perfectly fine. Just be consistent:

- Domain destination: `/elitze`
- Upload **elitze-ca-ROOT.zip** into `/elitze`
- Site answers at `https://elitze.ca`

### Case 2 — A folder inside the web root

If the domain root stays at `htdocs` and you drop the files into
`htdocs/elitze`, the site is reachable only at `https://elitze.ca/elitze`.

If that is genuinely what you want, use **elitze-ca-SUBFOLDER.zip**. If not,
put the ROOT build directly in `htdocs`.

### How to tell which one you have

After uploading, visit `https://elitze.ca`.

- Styled site loads → Case 1, you're done.
- Blank page, directory listing, or 404 → the files are in a subfolder the
  domain doesn't point at. Either move them up to the root, or repoint the
  domain's destination directory at that folder.
- Page loads but looks like raw unstyled text → **wrong zip.** You used the
  ROOT build in a subfolder, or the SUBFOLDER build at the root. Swap it.

That last symptom is the giveaway: the HTML is found but the CSS is being
requested from the wrong path.

---

## Rebuilding

```bash
# root of the domain (default)
./scripts/build-static.sh

# served from a subfolder
BASE_PATH=/elitze ./scripts/build-static.sh
```

Then zip the contents of `out/` and upload. Always include the hidden
`.htaccess` and `.well-known/` — extracting a zip server-side is the reliable
way to keep them.
