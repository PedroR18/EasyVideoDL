#!/usr/bin/env bash
set -euo pipefail

read -r -p "Video or playlist URL: " URL

DEFAULT_COOKIES="$HOME/Downloads/cookies.txt"
read -r -p "Path to cookies.txt [${DEFAULT_COOKIES}]: " COOKIES
COOKIES="${COOKIES:-$DEFAULT_COOKIES}"

DEFAULT_OUT="$HOME/Downloads"
read -r -p "Output folder [${DEFAULT_OUT}]: " OUTDIR
OUTDIR="${OUTDIR:-$DEFAULT_OUT}"

echo "Is this a playlist (course with multiple videos)? (y/n)"
read -r IS_PL

if [[ "${IS_PL}" == "y" || "${IS_PL}" == "Y" ]]; then
  echo "Downloading playlist..."
  yt-dlp --cookies "$COOKIES" --yes-playlist -f "bestvideo+bestaudio/best" \
    -o "${OUTDIR}/EasyVideoDL/%(playlist_title)s/%(playlist_index)03d - %(title)s.%(ext)s" \
    "$URL"
else
  echo "Downloading single video..."
  yt-dlp --cookies "$COOKIES" -f "bestvideo+bestaudio/best" \
    -o "${OUTDIR}/EasyVideoDL/%(title)s.%(ext)s" \
    "$URL"
fi

echo "Download completed successfully."
echo "Files saved to: $OUTDIR/EasyVideoDL"
