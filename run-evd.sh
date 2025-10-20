#!/usr/bin/env bash
# =============================================================================
# EasyVideoDL Helper Script (macOS / Linux)
# =============================================================================
# Purpose:
#   This script guides the user through downloading a video or playlist
#   using yt-dlp. It handles user input (URL, cookies, output folder) and 
#   constructs the correct yt-dlp command automatically.
#
# What it does:
#   1) Prompts the user for:
#        - Video or playlist URL
#        - Path to cookies.txt (for login-protected sites)
#        - Output folder for downloaded videos
#        - Whether the link is a single video or a playlist
#   2) Runs yt-dlp with appropriate options to download and merge video + audio.
#   3) Saves the resulting files inside ~/Downloads/EasyVideoDL.
#
# Safety / Transparency:
#   - No external downloads or network actions other than the video URLs you provide.
#   - All commands (yt-dlp) are open-source and run locally on your system.
#   - You can review, modify, or audit every line of this script.
#
# Usage:
#   chmod +x ./run-evd.sh
#   ./run-evd.sh
# =============================================================================

# -----------------------------------------------------------------------------
# 1) Enable strict mode:
#    -e : exit immediately if any command fails
#    -u : treat unset variables as errors
#    -o pipefail : ensure pipeline errors are caught
# -----------------------------------------------------------------------------
set -euo pipefail

# -----------------------------------------------------------------------------
# 2) Ask the user for the video or playlist URL.
# -----------------------------------------------------------------------------
read -r -p "Video or playlist URL: " URL

# -----------------------------------------------------------------------------
# 3) Ask for the path to cookies.txt (used for login-protected sites).
#    Default location is ~/Downloads/cookies.txt.
# -----------------------------------------------------------------------------
DEFAULT_COOKIES="$HOME/Downloads/cookies.txt"
read -r -p "Path to cookies.txt [${DEFAULT_COOKIES}]: " COOKIES
COOKIES="${COOKIES:-$DEFAULT_COOKIES}"

# -----------------------------------------------------------------------------
# 4) Ask for the output folder (where files will be saved).
#    Default is ~/Downloads.
# -----------------------------------------------------------------------------
DEFAULT_OUT="$HOME/Downloads"
read -r -p "Output folder [${DEFAULT_OUT}]: " OUTDIR
OUTDIR="${OUTDIR:-$DEFAULT_OUT}"

# -----------------------------------------------------------------------------
# 5) Ask whether this is a playlist (multiple videos) or a single video.
# -----------------------------------------------------------------------------
echo "Is this a playlist (course with multiple videos)? (y/n)"
read -r IS_PL

# -----------------------------------------------------------------------------
# 6) Based on the answer, run yt-dlp with appropriate options.
#    - "--cookies" : uses exported browser cookies
#    - "-f bestvideo+bestaudio/best" : ensures highest available quality
#    - "-o ..." : defines structured output folder naming
# -----------------------------------------------------------------------------
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

# -----------------------------------------------------------------------------
# 7) Print success message with download location.
# -----------------------------------------------------------------------------
echo "Download completed successfully."
echo "Files saved to: $OUTDIR/EasyVideoDL"