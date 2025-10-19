#!/usr/bin/env bash
set -euo pipefail
echo "=== EasyVideoDL Uninstaller (macOS) ==="

# 1) Ask to remove tools installed via Homebrew
read -r -p "Remove yt-dlp and ffmpeg if installed via Homebrew? (y/n) " ans_tools
if [[ "$ans_tools" =~ ^[yY]$ ]]; then
  if command -v brew >/dev/null 2>&1; then
    echo "Uninstalling yt-dlp and ffmpeg via Homebrew..."
    brew uninstall yt-dlp || true
    brew uninstall ffmpeg || true
  else
    echo "Homebrew not found; skipping Homebrew uninstalls."
  fi
else
  echo "Keeping yt-dlp and ffmpeg."
fi

# 2) Ask to remove local EasyVideoDL project scripts and docs
read -r -p "Remove local EasyVideoDL scripts and docs in the current folder (README, LICENSE, install/uninstall scripts, helpers)? (y/n) " ans_files
if [[ "$ans_files" =~ ^[yY]$ ]]; then
  rm -f ./run-evd.sh ./run-evd.ps1 || true
  rm -f ./install-evd.sh ./uninstall-evd.sh || true
  rm -f ./install-evd.ps1 ./uninstall-evd.ps1 || true
  rm -f ./README.md ./LICENSE || true
  rm -rf ./images || true
  echo "Removed EasyVideoDL scripts and documentation files in the current folder (if present)."
else
  echo "Keeping local scripts and documentation."
fi

# 3) Ask to remove downloaded videos folder in ~/Downloads/EasyVideoDL
download_dir="$HOME/Downloads/EasyVideoDL"
if [[ -d "$download_dir" ]]; then
  read -r -p "Delete downloaded videos folder at '$download_dir'? (y/n) " ans_dl
  if [[ "$ans_dl" =~ ^[yY]$ ]]; then
    rm -rf "$download_dir"
    echo "Removed $download_dir"
  else
    echo "Kept $download_dir"
  fi
fi

echo "Uninstall complete."
