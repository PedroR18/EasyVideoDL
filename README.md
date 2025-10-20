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

3. ⚙️ Basic Installation  
   - 3.1 💡 Automatic Installation (Recommended)  
   - 3.2 🧰 Manual Installation (Alternative)  

4. 🍪 Installation Required for Login-Protected Sites: Browser Cookie Extension  

5. ▶️ Running EasyVideoDL  

6. 🧹 Uninstalling EasyVideoDL (Optional)  

7. 🎓 Example Commands (for Advanced Users)  

8. 🧩 Troubleshooting & Common Issues  

9. 📚 Official Resources  

10. 🧾 License  

    

---

### **1. 🎬 What Is EasyVideoDL?**

**EasyVideoDL** is a simple, cross-platform tool (for **macOS** and **Windows**) that helps you download videos — even from **login-protected websites** — using the powerful open-source engine [yt-dlp](https://github.com/yt-dlp/yt-dlp).  The name EasyVideoDL is a shorter version of Easy Video Downloader.

It automates complex terminal commands into an easy guided process. Whether you're downloading a single lecture or an entire online course, EasyVideoDL ensures high-quality audio + video merging with minimal effort.

> ⚠️ Always use this tool responsibly and only for videos you are legally authorized to access.



---

### **2. ⚡ Quick Start Summary (for Experienced Users)**

Once you installed **EasyVideoDL**, you run it using the commands in your computer's terminal: 

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

### **3. ⚙️ Basic Installation**

Installation described in this section is mandatory. Choose **only one** of the following two installation options — either *Automatic* or *Manual*.  
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

> ⚠️ **Do this only if you skipped Automatic Installation** or prefer to install tools manually.

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

Once installed, you can verify the tools with:

```bash
# macOS or Linux terminal
yt-dlp --version
ffmpeg -version
```

```powershell
# Windows PowerShell
yt-dlp --version
ffmpeg -version
```

If both commands print version numbers, your setup is correct.



---

### **4. 🍪 Installation Required for Login-Protected Sites: Browser Cookie Extension**

Many platforms protect their videos behind a login. Since **yt-dlp** (the tool that EasyVideoDL uses for downloads) needs your **session cookies** to access those videos on your behalf, you need a tool that will keep track of your session cookies and make them available to yt-dlp. This is why you need to install a relevant extension in your web browser.

**Recommended browser extension:** **Get cookies.txt LOCALLY**  

- **Why this one?** It exports cookies **directly from your browser**, locally, without cloud syncing or third-party servers.  

- **Where to get it:**  
  - For Chrome / Edge → Chrome Web Store (search for “Get cookies.txt LOCALLY”)  
  - For Firefox → Add-ons site (same name)  
  
- **How to use it:**  
  1. **Log in** to the site and open the video page (ensure it plays in browser).  
  2. Click the 🍪 extension icon → **Export/Download cookies for this site**.  
  3. Save the file as `cookies.txt` (typically in your **Downloads** folder).  
  
- **Keep it private:** `cookies.txt` contains your login tokens — never share it or upload it to GitHub.

  

---

### **5. ▶️ Running EasyVideoDL**

##### macOS

You run EasyVideoDL by starting the helper script *run-evd.sh*, but sometimes you will need to run the command *chmod* first, this way:

```bash
chmod +x ./run-evd.sh
./run-evd.sh
```

##### Windows (PowerShell)

Run the helper script:

```powershell
.\run-evd.ps1
```

After you started the helper script, it will prompt for:

1. **Video or Playlist URL**: mandatory.
2. **Cookies file**: mandatory. This is a file which contains your cookies that you exported/downloaded with the browser extension. If you haven't downloaded it yet, now is the time to do it, and provide the file name to the helper script. You can name this file cookies.txt or anything you want.
3. **Output folder**: optional. If you just press enter, a default folder will be used
4. **Playlist or single video**: answer accordingly with yes or no (y/n).

The helpers download the video(s), merge audio + video via `ffmpeg`, and organize files neatly under:

```
~/Downloads/EasyVideoDL/
  ├─ <Course Title>/
  │   ├─ 001 – Intro.mp4
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

Each uninstaller can optionally remove tools (Homebrew / winget installs), local project files, and the `~/Downloads/EasyVideoDL` folder.



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

#### ⚠️ Two separate files (video-only and audio-only)

**Symptom:** You find two MP4 files with the same name — one plays video with no sound, the other has audio only.  

**Cause:** `ffmpeg` was missing or not detected, so yt-dlp could not merge the streams.  

**Fix:** Install or re-install `ffmpeg` and rerun the download.  
You can also force merge manually:

```bash
yt-dlp -f "bestvideo+bestaudio/best" --merge-output-format mp4 "URL"
```

---

#### 🔐 PowerShell warning: “script is not digitally signed”

**Symptom:** When running a `.ps1` file, PowerShell refuses to execute it and shows a red error.  
**Cause:** Windows marks downloaded `.ps1` files as untrusted by default.  
**Fix:** Unblock the file once — this marks it as safe for future runs.

```powershell
Unblock-File -Path .\run-evd.ps1
```

---

#### 🔄 Cookies expired or login required

Re-export `cookies.txt` after logging in again (use **Get cookies.txt LOCALLY**).

---

#### 🟨 Yellow ExecutionPolicy message (“controlled by a higher-precedence scope”)

This is **normal and safe**. It means your system already has a policy (e.g. `Bypass`) set at a higher scope.  
EasyVideoDL still runs without issues.

---

#### 🧩 ffmpeg not recognized (Windows)

If `ffmpeg -version` fails after install, your PATH might not have refreshed.  
Try this in PowerShell:

```powershell
# Refresh PATH for current session
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

> The Windows helper (`run-evd.ps1`) automatically detects ffmpeg and adds `--ffmpeg-location` when needed.



---

### **9. 📚 Official Resources**

- yt-dlp GitHub repo → <https://github.com/yt-dlp/yt-dlp>  

- ffmpeg Documentation → <https://ffmpeg.org/documentation.html>

  

---

### **10. 🧾 License**

Released under the **MIT License**.  
**Created by Aco Vidovic with AI assistance from ChatGPT.**