<# EasyVideoDL installer (Windows)
   Run in PowerShell:  .\install-win.ps1
#>

Write-Host "=== EasyVideoDL Installer (Windows) ===`n"

if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {
  Write-Warning "winget (App Installer) is not available. Install it from Microsoft Store first."
  exit 1
}

Write-Host "`nInstalling yt-dlp and ffmpeg via winget..."
winget install --id yt-dlp.yt-dlp -e --source winget
winget install --id Gyan.FFmpeg -e --source winget  # or BtbN.ffmpeg

Write-Host "`nSetting ExecutionPolicy for CurrentUser to RemoteSigned (you may be prompted)..."
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force

if (Test-Path ".\hf-dl-win.ps1") {
  Write-Host "Unblocking hf-dl-win.ps1..."
  Unblock-File -Path .\hf-dl-win.ps1
}

Write-Host "`nAll set! Run:  .\hf-dl-win.ps1"
