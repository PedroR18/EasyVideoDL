<# EasyVideoDL uninstaller (Windows)
   Run in PowerShell:  .\uninstall-win.ps1
#>

Write-Host "=== EasyVideoDL Uninstaller (Windows) ===`n"

# 1) Try to uninstall tools installed via winget
if (Get-Command winget -ErrorAction SilentlyContinue) {
  Write-Host "Uninstalling yt-dlp and ffmpeg (winget)..."
  winget uninstall --id yt-dlp.yt-dlp -e
  winget uninstall --id Gyan.FFmpeg -e
} else {
  Write-Warning "winget is not available; skipping tool uninstall."
}

# 2) Ask to remove local files
$cleanup = Read-Host "`nDelete local EasyVideoDL scripts in the current folder? (y/n)"
if ($cleanup -match '^[yY]$') {
  Remove-Item -Recurse -Force .\hf-dl-win.ps1 -ErrorAction SilentlyContinue
  Write-Host "Removed hf-dl-win.ps1 (if present)."
}

Write-Host "`nDone."