# EasyVideoDL

![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Tool](https://img.shields.io/badge/tool-yt--dlp-orange)
![Language](https://img.shields.io/badge/scripts-Bash%20%7C%20PowerShell-yellow)

**Created by Aco Vidovic with AI assistance from ChatGPT**  
**License:** MIT

---

## 🎬 What Is EasyVideoDL?

**EasyVideoDL** is a simple, cross‑platform tool (for **macOS** and **Windows**) that helps you download videos — even from **login‑protected websites** — using the powerful open‑source engine [yt‑dlp](https://github.com/yt-dlp/yt-dlp).  

It automates complex terminal commands into an easy guided process. Whether you're downloading a single lecture or an entire online course, EasyVideoDL ensures high‑quality audio + video merging with minimal effort.

> ⚠️ Always use this tool responsibly and only for videos you are legally authorized to access.

---

## ⚡ Quick Start Summary (for Experienced Users)

```bash
# macOS
chmod +x ./install-mac.sh && ./install-mac.sh
./hf-dl.sh

# Windows (PowerShell)
.\install-win.ps1
.\hf-dl-win.ps1
```

> 💡 Full, detailed installation and usage instructions follow below.

---

## 🪄 Step  1  –  Automatic Installation  (Recommended)

If you’re new to command‑line tools, this is the **easiest** way to set up EasyVideoDL.  
The provided install scripts will automatically install all required tools (yt‑dlp + ffmpeg), set permissions, and prepare the environment.

### 🧩 macOS Installation

Run these commands from the EasyVideoDL folder:

```bash
chmod +x ./install-mac.sh
./install-mac.sh
```

This script will:

1. Install **Homebrew** if it’s not already on your system.  
2. Use Homebrew to install **yt‑dlp** (video downloader) and **ffmpeg** (for merging audio + video).  
3. Make the EasyVideoDL helper script (`hf-dl.sh`) executable.  

> ⏳ Installation may take a few minutes the first time you run it.

![Installer running on macOS](images/mac-installer.png)

---

### 🪟 Windows Installation

Run this in **PowerShell** (right‑click your folder → *Open in Terminal* → PowerShell tab):

```powershell
.\install-win.ps1
```

This script will:

1. Use **winget** (Windows Package Manager) to install `yt‑dlp` and `ffmpeg`.  
2. Set PowerShell’s execution policy to allow trusted local scripts.  
3. Automatically unblock your helper script (`hf-dl-win.ps1`) if it was downloaded from the Internet.

![Installer running on Windows](images/windows-installer.png)

> ✅ When complete, you’ll be ready to run EasyVideoDL immediately.

---

## 🧰 Step  2  –  Manual Installation  (Alternative)

> ⚠️ **Do this only if you skipped Step  1** or prefer to install tools manually.

If you’re comfortable with the command line or already have the prerequisites, you can install them manually instead of using the automatic installer.

### macOS (using Homebrew)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install yt-dlp ffmpeg
```

### Windows (using winget)

```powershell
winget install yt-dlp.yt-dlp
winget install Gyan.FFmpeg
```

> Once yt‑dlp and ffmpeg are installed, you can skip directly to **Step 3**.

![Manual install example](images/manual-install.png)

---

## ▶️ Step  3  –  Running  EasyVideoDL

After installation (automatic or manual), you can start downloading videos immediately.

### macOS

```bash
./hf-dl.sh
```

### Windows

```powershell
.\hf-dl-win.ps1
```

When you run the helper script, it will guide you through a few simple prompts:

1. **Video or Playlist URL** – Paste the video or course URL.  
2. **Cookies file** – Path to your exported `cookies.txt` (usually from Chrome extension *Get cookies.txt LOCALLY*).  
3. **Output folder** – Where you’d like your videos saved (default is your Downloads folder).  
4. **Playlist question** – Choose whether it’s a single video or an entire playlist/course.

![Running EasyVideoDL helper script](images/run-helper.png)

The script will then automatically download the video(s), merge audio and video, and organize them neatly into folders.

**Default folder structure:**  
```
Downloads/
└── EasyVideoDL/
    ├── My Course Title/
    │   ├── 001 – Introduction.mp4
    │   ├── 002 – Lesson 1.mp4
    │   └── ...
    └── SingleVideoExample.mp4
```

---

## 🧹 Step  4  –  Uninstalling  EasyVideoDL  (Optional)

If you ever want to remove the tools or cleanup the helper scripts, use the provided uninstallers.

### macOS

```bash
chmod +x ./uninstall-mac.sh
./uninstall-mac.sh
```

This script removes yt‑dlp and ffmpeg (if installed via Homebrew) and offers to delete local EasyVideoDL files.

### Windows

```powershell
.\uninstall-win.ps1
```

This script uninstalls yt‑dlp and ffmpeg (via winget) and optionally removes local EasyVideoDL scripts.

![Uninstaller example](images/uninstall.png)

---

## 🎓 Step  5  –  Example  Commands  (for  Advanced  Users)

Even though the helper scripts handle everything, you can also use yt‑dlp manually.

### Single video  (Highest  Quality)

```bash
yt-dlp --cookies cookies.txt -f "bestvideo+bestaudio/best" \
  -o "EasyVideoDL/%(title)s.%(ext)s" \
  "https://example.com/video-url"
```

### Entire playlist  (with  auto  folders  +  numbering)

```bash
yt-dlp --cookies cookies.txt --yes-playlist -f "bestvideo+bestaudio/best" \
  -o "EasyVideoDL/%(playlist_title)s/%(playlist_index)03d - %(title)s.%(ext)s" \
  "https://example.com/course-url"
```

![Playlist download example](images/playlist-download.png)

---

## 🧩 Troubleshooting  &  Common  Issues

### ⚠️ Two separate files (video + audio)
If you see one MP4 file with no sound and another with only audio, ffmpeg wasn’t detected.  
➡ Install ffmpeg using the installer scripts or the manual method, then re‑run EasyVideoDL.

### 🔐 PowerShell says “script is not digitally signed”
If you see this message, run:
```powershell
Unblock-File -Path .\hf-dl-win.ps1
```
You’ll only need to do this once.

### 🔄 Cookies expired or login required
Re‑export your `cookies.txt` from Chrome after logging in again.  
Be sure to use the extension **Get cookies.txt  LOCALLY**, not “Clean” or other variants.

![Chrome cookies export example](images/cookies-export.png)

---

## 📚 Official  Resources

- yt‑dlp GitHub repo: [https://github.com/yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp)  
- yt‑dlp Wiki & Command Reference: available on the same page.  
- ffmpeg Documentation: [https://ffmpeg.org/documentation.html](https://ffmpeg.org/documentation.html)

---

## 🧾 License

Released under the **MIT License**.  
**Created  by  Aco  Vidovic  with  AI  assistance  from  ChatGPT.**
