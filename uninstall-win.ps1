<# EasyVideoDL Uninstaller (Windows) - with optional full cleanup

Run in PowerShell:
  .\uninstall-win.ps1

This script can:
  1) Uninstall yt-dlp and ffmpeg (if installed via winget)
  2) Optionally delete local EasyVideoDL project files (scripts & docs) in the current folder
  3) Optionally delete the downloaded videos at $HOME\Downloads\EasyVideoDL
#>

Write-Host "=== EasyVideoDL Uninstaller (Windows) ===`n"

# 1) Ask to remove tools installed via winget
$ansTools = Read-Host "Remove yt-dlp and ffmpeg if installed via winget? (y/n)"
if ($ansTools -match '^[yY]$') {
  if (Get-Command winget -ErrorAction SilentlyContinue) {
    Write-Host "Uninstalling yt-dlp and ffmpeg via winget..."
    winget uninstall --id yt-dlp.yt-dlp -e | Out-Null
    winget uninstall --id Gyan.FFmpeg -e | Out-Null
    winget uninstall --id BtbN.ffmpeg -e | Out-Null
  } else {
    Write-Warning "winget not found; skipping tool uninstalls."
  }
} else {
  Write-Host "Keeping yt-dlp and ffmpeg."
}

# 2) Ask to remove local EasyVideoDL project scripts (both macOS & Windows scripts) and docs
$ansFiles = Read-Host "Remove local EasyVideoDL scripts and docs in the current folder (README, LICENSE, install/uninstall scripts, helpers)? (y/n)"
if ($ansFiles -match '^[yY]$') {
  $paths = @(
    ".\hf-dl-win.ps1", ".\hf-dl.sh",
    ".\install-win.ps1", ".\uninstall-win.ps1",
    ".\install-mac.sh", ".\uninstall-mac.sh",
    ".\README.md", ".\LICENSE",
    ".\images"
  )
  foreach ($p in $paths) {
    try {
      if (Test-Path $p) {
        Remove-Item -Recurse -Force $p -ErrorAction SilentlyContinue
      }
    } catch {}
  }
  Write-Host "Removed EasyVideoDL scripts and documentation files in the current folder (if present)."
} else {
  Write-Host "Keeping local scripts and documentation."
}

# 3) Ask to remove downloaded videos folder in $HOME\Downloads\EasyVideoDL
$downloadDir = Join-Path $HOME "Downloads\EasyVideoDL"
if (Test-Path $downloadDir) {
  $ansDl = Read-Host "Delete downloaded videos folder at '$downloadDir'? (y/n)"
  if ($ansDl -match '^[yY]$') {
    try {
      Remove-Item -Recurse -Force $downloadDir -ErrorAction SilentlyContinue
      Write-Host "Removed $downloadDir"
    } catch {
      Write-Warning "Could not remove $downloadDir. Try closing any apps using files in that folder."
    }
  } else {
    Write-Host "Kept $downloadDir"
  }
}

Write-Host "`nUninstall complete."
