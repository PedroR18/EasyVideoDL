#!/usr/bin/env bash
set -euo pipefail
echo "=== EasyVideoDL Installer (macOS) ==="

if ! command -v brew >/dev/null 2>&1; then
  echo "Homebrew not found. Installing..."
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  if [[ -x /opt/homebrew/bin/brew ]]; then
    echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> "$HOME/.zprofile"
    eval "$(/opt/homebrew/bin/brew shellenv)"
  elif [[ -x /usr/local/bin/brew ]]; then
    echo 'eval "$(/usr/local/bin/brew shellenv)"' >> "$HOME/.zprofile"
    eval "$(/usr/local/bin/brew shellenv)"
  fi
fi

echo "Installing yt-dlp and ffmpeg..."
brew install yt-dlp ffmpeg

if [[ -f "./hf-dl.sh" ]]; then
  chmod +x ./hf-dl.sh
  echo "Made hf-dl.sh executable."
fi

echo "Done. Run: ./hf-dl.sh"
