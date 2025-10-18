#!/usr/bin/env bash
set -euo pipefail
echo "=== EasyVideoDL Installer (macOS) ==="

# 1) Homebrew
if ! command -v brew >/dev/null 2>&1; then
  echo "Homebrew not found. Installing..."
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> "$HOME/.zprofile" || true
  eval "$(/opt/homebrew/bin/brew shellenv)" || true
fi

# 2) Prereqs
echo "Installing yt-dlp and ffmpeg..."
brew install yt-dlp ffmpeg

# 3) Make helper executable
if [[ -f "./hf-dl.sh" ]]; then
  chmod +x ./hf-dl.sh
  echo "Made hf-dl.sh executable."
fi

echo "Done. Run: ./hf-dl.sh"