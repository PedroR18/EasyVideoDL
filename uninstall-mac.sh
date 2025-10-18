#!/usr/bin/env bash
set -euo pipefail
echo "=== EasyVideoDL Uninstaller (macOS) ==="

if command -v brew >/dev/null 2>&1; then
  echo "Uninstalling yt-dlp and ffmpeg (brew)..."
  brew uninstall yt-dlp || true
  brew uninstall ffmpeg || true
else
  echo "Homebrew not found; skipping brew uninstalls."
fi

read -r -p "Delete local EasyVideoDL script(s) in this folder? (y/n) " ans
if [[ "$ans" =~ ^[yY]$ ]]; then
  rm -f ./hf-dl.sh ./install-mac.sh ./uninstall-mac.sh
  echo "Removed EasyVideoDL scripts (if present)."
fi

echo "Done."
