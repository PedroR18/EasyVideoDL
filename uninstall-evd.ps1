<# EasyVideoDL uninstaller (Windows)
   Run in PowerShell:  .\uninstall-evd.ps1
#>

Write-Host "=== EasyVideoDL Uninstaller (Windows) ===`n" -ForegroundColor Cyan

# 1) Offer to uninstall tools
$ansTools = Read-Host "Uninstall yt-dlp and ffmpeg installed via winget? (y/n)"
if ($ansTools -match '^[yY]$') {
  winget uninstall --id yt-dlp.yt-dlp -e
  winget uninstall --id yt-dlp.FFmpeg -e
  winget uninstall --id Gyan.FFmpeg -e
  winget uninstall --id BtbN.ffmpeg -e
} else {
  Write-Host "Keeping yt-dlp/ffmpeg." -ForegroundColor Yellow
}

# 2) Offer to remove local EasyVideoDL project files
$ansFiles = Read-Host "Remove local EasyVideoDL scripts and docs in the current folder (install/uninstall scripts, helpers, README, LICENSE)? (y/n)"
if ($ansFiles -match '^[yY]$') {
  $paths = @(
    ".\run-evd.ps1", ".\run-evd.sh",
    ".\install-evd.ps1", ".\install-evd.sh",
    ".\uninstall-evd.ps1", ".\uninstall-evd.sh",
    ".\README.md", ".\LICENSE", ".\images"
  )
  foreach ($p in $paths) {
    if (Test-Path $p) {
      if ((Get-Item $p).PSIsContainer) { Remove-Item $p -Recurse -Force -ErrorAction SilentlyContinue }
      else { Remove-Item $p -Force -ErrorAction SilentlyContinue }
    }
  }
  Write-Host "Removed EasyVideoDL scripts and docs in the current folder (if present)."
} else {
  Write-Host "Keeping local scripts/docs." -ForegroundColor Yellow
}

# 3) Offer to remove the downloads folder
$downloadDir = Join-Path $HOME "Downloads\EasyVideoDL"
if (Test-Path $downloadDir) {
  $ansDl = Read-Host "Delete downloaded videos folder at '$downloadDir'? (y/n)"
  if ($ansDl -match '^[yY]$') {
    Remove-Item $downloadDir -Recurse -Force
    Write-Host "Removed $downloadDir"
  } else {
    Write-Host "Kept $downloadDir"
  }
}

Write-Host "`nUninstall complete." -ForegroundColor Green
