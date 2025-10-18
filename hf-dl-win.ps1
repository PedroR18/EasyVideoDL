<# 
yt-dlp Windows Helper Script
Author: Aco Vidovic
License: MIT
#>

$URL = Read-Host "Video or playlist URL"

$DefaultCookies = Join-Path $HOME "Downloads\cookies.txt"
$Cookies = Read-Host "Path to cookies.txt [$DefaultCookies]"
if ([string]::IsNullOrWhiteSpace($Cookies)) { $Cookies = $DefaultCookies }

$DefaultOut = Join-Path $HOME "Downloads"
$OutDir = Read-Host "Output folder [$DefaultOut]"
if ([string]::IsNullOrWhiteSpace($OutDir)) { $OutDir = $DefaultOut }

$IsPl = Read-Host "Is this a playlist (course with multiple videos)? (y/n)"

Write-Host "`nStarting download...`n"

if ($IsPl -match '^[yY]$') {
    Write-Host "Mode: Playlist download"
    yt-dlp --cookies "$Cookies" --yes-playlist -f "bestvideo+bestaudio/best" `
        -o "$OutDir/EasyVideoDL/%(playlist_title)s/%(playlist_index)03d - %(title)s.%(ext)s" `
        "$URL"
}
else {
    Write-Host "Mode: Single video download"
    yt-dlp --cookies "$Cookies" -f "bestvideo+bestaudio/best" `
        -o "$OutDir/EasyVideoDL/%(title)s.%(ext)s" `
        "$URL"
}

Write-Host "`nDownload completed successfully.`nFiles saved to: $OutDir\EasyVideoDL`n"
