<# EasyVideoDL installer (Windows)
   Run in PowerShell:  .\install-win.ps1
#>

Write-Host "=== EasyVideoDL Installer (Windows) ===`n" -ForegroundColor Cyan

# Ensure winget exists
if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {
  Write-Warning "winget (App Installer) is not available. Please install it from the Microsoft Store first."
  exit 1
}

# --- Install yt-dlp and ffmpeg ---
Write-Host "`nInstalling yt-dlp (this will also include its matching ffmpeg)..." -ForegroundColor Cyan
winget install --id yt-dlp.yt-dlp -e --accept-source-agreements --accept-package-agreements

# Check if ffmpeg is already present
$ffFound = (Get-Command ffmpeg -ErrorAction SilentlyContinue) -ne $null
if (-not $ffFound) {
  Write-Host "`nChecking for ffmpeg..." -ForegroundColor Cyan
  $hasDep = winget list | Select-String -Pattern 'yt-dlp\.FFmpeg|Gyan\.FFmpeg|BtbN\.ffmpeg'
  if (-not $hasDep) {
    Write-Host "Installing ffmpeg (yt-dlp.FFmpeg)..." -ForegroundColor Cyan
    winget install --id yt-dlp.FFmpeg -e --accept-source-agreements --accept-package-agreements `
      -ErrorAction SilentlyContinue
    # fallback to Gyan if missing
    if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
      Write-Host "Falling back to Gyan.FFmpeg..." -ForegroundColor Yellow
      winget install --id Gyan.FFmpeg -e --accept-source-agreements --accept-package-agreements
    }
  }
}

# --- Refresh PATH for this session ---
$machine = [System.Environment]::GetEnvironmentVariable('Path','Machine')
$user    = [System.Environment]::GetEnvironmentVariable('Path','User')
$session = "$machine;$user"
$links   = Join-Path $env:LOCALAPPDATA 'Microsoft\WinGet\Links'
if (-not (($session -split ';') -contains $links)) { $session = "$session;$links" }
[System.Environment]::SetEnvironmentVariable('Path', $session, 'Process')

# --- Set Execution Policy safely ---
Write-Host "`nSetting ExecutionPolicy for CurrentUser to RemoteSigned (you may be prompted)..." -ForegroundColor Cyan
try {
  Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force -ErrorAction Stop
  Write-Host "ExecutionPolicy successfully set to RemoteSigned for CurrentUser." -ForegroundColor Green
}
catch [System.Management.Automation.SecurityException] {
  Write-Warning "ExecutionPolicy is controlled by a higher-precedence scope. Effective policy: $(Get-ExecutionPolicy). This is fine—scripts will still run."
}

# --- Unblock helper script ---
if (Test-Path ".\hf-dl-win.ps1") {
  Write-Host "`nUnblocking hf-dl-win.ps1..." -ForegroundColor Cyan
  Unblock-File -Path .\hf-dl-win.ps1 -ErrorAction SilentlyContinue
}

# --- Verify installation ---
Write-Host "`nVerifying installations..." -ForegroundColor Cyan
yt-dlp --version
ffmpeg -version

Write-Host "`nAll set! You can now run:  .\hf-dl-win.ps1" -ForegroundColor Green
