<# EasyVideoDL installer (Windows)
   Run in PowerShell:  .\install-evd.ps1
#>

Write-Host "=== EasyVideoDL Installer (Windows) ===" -ForegroundColor Cyan
Write-Host ""

# Ensure winget exists
if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {
  Write-Warning "winget (App Installer) is not available. Please install it from the Microsoft Store first."
  exit 1
}

# --- Install yt-dlp and ffmpeg ---
Write-Host "Installing yt-dlp (this may also pull its ffmpeg dependency)..." -ForegroundColor Cyan
winget install --id yt-dlp.yt-dlp -e --accept-source-agreements --accept-package-agreements

# Check if ffmpeg is already present
$ffFound = (Get-Command ffmpeg -ErrorAction SilentlyContinue) -ne $null
if (-not $ffFound) {
  Write-Host ""
  Write-Host "Checking for ffmpeg..." -ForegroundColor Cyan
  $hasDep = winget list | Select-String -Pattern "yt-dlp\.FFmpeg|Gyan\.FFmpeg|BtbN\.ffmpeg"
  if (-not $hasDep) {
    Write-Host "Installing ffmpeg (yt-dlp.FFmpeg)..." -ForegroundColor Cyan
    winget install --id yt-dlp.FFmpeg -e --accept-source-agreements --accept-package-agreements -ErrorAction SilentlyContinue

    # Fallback if ffmpeg still not found
    if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
      Write-Host "Falling back to Gyan.FFmpeg..." -ForegroundColor Yellow
      winget install --id Gyan.FFmpeg -e --accept-source-agreements --accept-package-agreements
    }
  }
}

# --- Refresh PATH for this session (no need to restart terminal) ---
$machine = [System.Environment]::GetEnvironmentVariable("Path","Machine")
$user    = [System.Environment]::GetEnvironmentVariable("Path","User")
$session = "$machine;$user"
$links   = Join-Path $env:LOCALAPPDATA "Microsoft\WinGet\Links"
if (-not (($session -split ";") -contains $links)) {
  $session = "$session;$links"
}
[System.Environment]::SetEnvironmentVariable("Path", $session, "Process")

# --- Set Execution Policy safely ---
Write-Host ""
Write-Host "Setting ExecutionPolicy for CurrentUser to RemoteSigned (you may be prompted)..." -ForegroundColor Cyan
try {
  Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force -ErrorAction Stop
  Write-Host "ExecutionPolicy set to RemoteSigned at CurrentUser." -ForegroundColor Green
}
catch [System.Management.Automation.SecurityException] {
  $eff = Get-ExecutionPolicy
  Write-Warning "ExecutionPolicy is controlled by a higher-precedence scope. Effective policy: $eff. This is OK—scripts will still run."
}

# --- Unblock helper script ---
if (Test-Path ".\run-evd.ps1") {
  Write-Host ""
  Write-Host "Unblocking run-evd.ps1..." -ForegroundColor Cyan
  Unblock-File -Path .\run-evd.ps1 -ErrorAction SilentlyContinue
}

# --- Verify installation ---
Write-Host ""
Write-Host "Verifying installations..." -ForegroundColor Cyan
try { yt-dlp --version } catch { Write-Warning "yt-dlp not detected on PATH." }
try { ffmpeg -version } catch { Write-Warning "ffmpeg not detected on PATH." }

Write-Host ""
Write-Host "All set! You can now run:  .\run-evd.ps1" -ForegroundColor Green
