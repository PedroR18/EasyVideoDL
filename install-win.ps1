<# EasyVideoDL installer (Windows)
   Run in PowerShell:  .\install-win.ps1
#>

Write-Host "=== EasyVideoDL Installer (Windows) ===`n"

# 1) Ensure winget exists
if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {
  Write-Warning "winget (App Installer) is not available. Install from Microsoft Store first."
  exit 1
}

# 2) Install prerequisites
Write-Host "`nInstalling yt-dlp and ffmpeg via winget..."
winget install --id yt-dlp.yt-dlp -e --source winget
winget install --id Gyan.FFmpeg -e --source winget  # or BtbN.ffmpeg

# 3) Allow running local scripts (current user)
Write-Host "`nSetting ExecutionPolicy for CurrentUser to RemoteSigned (you may be prompted)..."
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force

# 4) Unblock your helper if present
if (Test-Path ".\hf-dl-win.ps1") {
  Write-Host "Unblocking hf-dl-win.ps1..."
  Unblock-File -Path .\hf-dl-win.ps1
}

Write-Host "`nAll set! Run:  .\hf-dl-win.ps1"