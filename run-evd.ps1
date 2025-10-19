<# EasyVideoDL Windows Helper (auto-detect ffmpeg) #>

$URL = Read-Host "Video or playlist URL"

$DefaultCookies = Join-Path $HOME "Downloads\cookies.txt"
$Cookies = Read-Host "Path to cookies.txt [$DefaultCookies]"
if ([string]::IsNullOrWhiteSpace($Cookies)) { $Cookies = $DefaultCookies }

$DefaultOut = Join-Path $HOME "Downloads"
$OutDir = Read-Host "Output folder [$DefaultOut]"
if ([string]::IsNullOrWhiteSpace($OutDir)) { $OutDir = $DefaultOut }

$IsPl = Read-Host "Is this a playlist (course with multiple videos)? (y/n)"

# --- ffmpeg auto-detect ---
$ffmpegCmd = Get-Command ffmpeg -ErrorAction SilentlyContinue
$ffmpegFlag = ""
if (-not $ffmpegCmd) {
  $ffexe = Get-ChildItem "$env:LOCALAPPDATA\Microsoft\WinGet\Packages" -Recurse -Filter ffmpeg.exe -ErrorAction SilentlyContinue |
    Select-Object -First 1 -Expand FullName
  if ($ffexe) {
    $ffbin = Split-Path -Parent $ffexe
    $ffmpegFlag = "--ffmpeg-location `"$ffbin`""
    Write-Host "Using ffmpeg at: $ffbin"
  } else {
    Write-Warning "ffmpeg not found. yt-dlp may fail to merge audio+video."
  }
}

Write-Host "`nStarting download...`n"

if ($IsPl -match '^[yY]$') {
  Write-Host "Mode: Playlist download"
  iex "yt-dlp $ffmpegFlag --cookies `"$Cookies`" --yes-playlist -f `"bestvideo+bestaudio/best`" -o `"$OutDir/EasyVideoDL/%(playlist_title)s/%(playlist_index)03d - %(title)s.%(ext)s`" `"$URL`""
} else {
  Write-Host "Mode: Single video download"
  iex "yt-dlp $ffmpegFlag --cookies `"$Cookies`" -f `"bestvideo+bestaudio/best`" -o `"$OutDir/EasyVideoDL/%(title)s.%(ext)s`" `"$URL`""
}

Write-Host "`nDone. Files saved to: $OutDir\EasyVideoDL`n"
