# EasyVideoDL

**Platform:** macOS | Windows 
**License:** MIT 
**Tool:** yt-dlp 
**Scripts:** Bash | PowerShell 

**Created by Aco Vidovic with AI assistance from ChatGPT**  

---

## 📖 **Table of Contents**
1. 🎬 What Is EasyVideoDL?  
2. ⚡ Quick Start Summary (for Experienced Users)  
3. ⚙️ Installation  
   - 3.1 💡 Automatic Installation (Recommended)  
   - 3.2 🧰 Manual Installation (Alternative)  
4. 🍪 Browser Cookie Extension (Required for Login-Protected Sites)  
5. ▶️ Running EasyVideoDL  
6. 🧹 Uninstalling EasyVideoDL (Optional)  
7. 🎓 Example Commands (for Advanced Users)  
8. 🧩 Troubleshooting & Common Issues  
9. 📚 Official Resources  
10. 🧾 License  

---

### **1. 🎬 What Is EasyVideoDL?**

**EasyVideoDL** is a simple, cross-platform tool (for **macOS** and **Windows**) that helps you download videos — even from **login-protected websites** — using the powerful open-source engine [yt-dlp](https://github.com/yt-dlp/yt-dlp).  

It automates complex terminal commands into an easy guided process. Whether you're downloading a single lecture or an entire online course, EasyVideoDL ensures high-quality audio + video merging with minimal effort.

> ⚠️ Always use this tool responsibly and only for videos you are legally authorized to access.

---

### **2. ⚡ Quick Start Summary (for Experienced Users)**

```bash
# macOS
chmod +x ./install-evd.sh && ./install-evd.sh
./run-evd.sh

# Windows (PowerShell)
.\install-evd.ps1
.\run-evd.ps1
```

> 💡 Full, detailed installation and usage instructions follow below.

---

### **3. ⚙️ Installation**

Choose **only one** of the following two options — either *Automatic* or *Manual*.  
Do **not** install both ways on the same system.

---

#### **3.1 💡 Automatic Installation (Recommended)**

If you’re new to command-line tools, this is the **easiest** way to set up EasyVideoDL.  
The provided install scripts will automatically install all required tools (yt-dlp + ffmpeg), set permissions, and prepare the environment.

##### 🍎 macOS Installation

```bash
chmod +x ./install-evd.sh
./install-evd.sh
```

This installs **Homebrew**, then **yt-dlp** and **ffmpeg**, and makes the helper script executable (`run-evd.sh`).

##### 💻 Windows Installation

```powershell
.\install-evd.ps1
```

This installs **yt-dlp** and **ffmpeg** via `winget`, sets PowerShell execution policy (with a friendly fallback if a higher-precedence policy is present), unblocks the helper script (`run-evd.ps1`), and refreshes PATH immediately so you don’t have to restart the terminal.

> ✅ When complete, you’ll be ready to run EasyVideoDL immediately.  
> 💡 **Note:** If `yt-dlp` works but PowerShell says `ffmpeg` is not recognized, see Troubleshooting.

---

#### **3.2 🧰 Manual Installation (Alternative)**

> ⚠️ **Do this only if you skipped the Automatic Installation** or prefer to install tools manually.

##### macOS

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install yt-dlp ffmpeg
```

##### Windows

```powershell
winget install yt-dlp.yt-dlp
winget install Gyan.FFmpeg
```

---

### **4. 🍪 Browser Cookie Extension (Required for Login-Protected Sites)**

Many course platforms protect videos behind a login. **yt-dlp** needs your **session cookies** to access those videos on your behalf.

**Recommended extension:** **Get cookies.txt LOCALLY**  
- **Why this one?** It exports cookies **from your browser profile**, locally, without cloud syncing.  
- **Where to get it:**  
  - Chrome / Edge: Chrome Web Store (search for “Get cookies.txt LOCALLY”).  
  - Firefox: Add-ons site (same name).  
- **How to use it:**  
  1. **Log in** to the site and open the page with the video (make sure you can play it in the browser).  
  2. Click the 🍪 extension and choose **Export/Download** for the current site.  
  3. Save as `cookies.txt` (for example, in your **Downloads** folder).  
- **Keep it private:** `cookies.txt` contains session tokens. Do **not** share it or commit it to Git.

---

### **5. ▶️ Running EasyVideoDL**

```bash
# macOS
./run-evd.sh

# Windows (PowerShell)
.\run-evd.ps1
```

When you run the helper, it prompts for:

1. **Video or Playlist URL**  
2. **Cookies file** (`cookies.txt`)  
3. **Output folder**  
4. **Playlist or single video**  

The helpers will download the video(s), merge audio + video via `ffmpeg`, and organize files under:

```
~/Downloads/EasyVideoDL/
  ├─ <Course Title>/
  │   ├─ 001 - Intro.mp4
  │   └─ ...
  └─ Single Video.mp4
```

---

### **6. 🧹 Uninstalling EasyVideoDL (Optional)**

##### macOS

```bash
chmod +x ./uninstall-evd.sh
./uninstall-evd.sh
```

##### Windows

```powershell
.\uninstall-evd.ps1
```

Each uninstaller can optionally remove tools (Homebrew/winget installs), local project files, and the `~/Downloads/EasyVideoDL` folder.

---

### **7. 🎓 Example Commands (for Advanced Users)**

```bash
# Single video
yt-dlp --cookies cookies.txt -f "bestvideo+bestaudio/best" \
  -o "EasyVideoDL/%(title)s.%(ext)s" "https://example.com/video-url"

# Playlist
yt-dlp --cookies cookies.txt --yes-playlist -f "bestvideo+bestaudio/best" \
  -o "EasyVideoDL/%(playlist_title)s/%(playlist_index)03d - %(title)s.%(ext)s" \
  "https://example.com/course-url"
```

---

### **8. 🧩 Troubleshooting & Common Issues**

#### ⚠️ Two files (video-only and audio-only)
Install `ffmpeg` and re-run. You can also force merge:
```bash
yt-dlp -f "bestvideo+bestaudio/best" --merge-output-format mp4 "URL"
```

#### 🔐 PowerShell: “script is not digitally signed”
```powershell
Unblock-File -Path .\run-evd.ps1
```

#### 🔄 Cookies expired or login required
Re-export `cookies.txt` after logging in again (use **Get cookies.txt LOCALLY**).

#### 🟨 Yellow ExecutionPolicy message (“controlled by a higher-precedence scope”)
This is **normal and safe**. It simply means another policy is already in effect (often `Bypass`). EasyVideoDL will still run.

#### 🧩 ffmpeg not recognized (Windows)
Windows PATH may not have refreshed. Try:

```powershell
# Refresh PATH in current window
$env:Path = [System.Environment]::GetEnvironmentVariable('Path','Machine') + ';' +
            [System.Environment]::GetEnvironmentVariable('Path','User')
$wingetLinks = Join-Path $env:LOCALAPPDATA 'Microsoft\WinGet\Links'
if (-not ( ($env:Path -split ';') -contains $wingetLinks )) { $env:Path = "$env:Path;$wingetLinks" }
ffmpeg -version
```

Or add the folder permanently:
```powershell
$ffbin = Split-Path -Parent (Get-Command ffmpeg).Source
$u = [System.Environment]::GetEnvironmentVariable('Path','User')
setx PATH "$u;$ffbin"
```

> The Windows helper (`run-evd.ps1`) will auto-detect `ffmpeg` and pass `--ffmpeg-location` when needed.

---

### **9. 📚 Official Resources**

- yt-dlp GitHub repo: https://github.com/yt-dlp/yt-dlp  
- ffmpeg Docs: https://ffmpeg.org/documentation.html

---

### **10. 🧾 License**

Released under the **MIT License**.  
**Created by Aco Vidovic with AI assistance from ChatGPT.**
