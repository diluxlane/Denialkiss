# Daniel Kiss portfolio recreation

Independent static implementation based on the publicly visible site at https://danielkiss.hu/. It recreates the visible layout, content structure, responsive behavior, menu, copy-email control, cursor telemetry, scroll progress, parallax, section tracking, reveal effects, horizontal awards strip, and motion treatment. Publicly served fonts and imagery from the reference site are included locally for fidelity; their rights remain with their original owner.

## Run

Open `index.html` directly, or serve the folder locally:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080.

## Files

- `index.html` — semantic one-page content
- `style.css` — responsive design and animations
- `script.js` — interaction and scroll behavior
- `assets/` — public reference assets, stored locally

## Notes

This is original frontend code, not the site's private repository or server-side source. External social and portfolio links point to their public destinations. The email button copies `info@danielkiss.hu` to the clipboard.
