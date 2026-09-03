$git = "C:\Users\haide\AppData\Local\Programs\Git\cmd\git.exe"

& $git config --global user.name "Haider Ali"
& $git config --global user.email "haideralimangwal786@gmail.com"
& $git config --global init.defaultBranch main

if (-not (Test-Path ".git")) {
    Write-Host "Initializing git repository..."
    & $git init
}

Write-Host "Setting remote origin..."
$remotes = & $git remote
if ($remotes -contains "origin") {
    & $git remote set-url origin https://github.com/haideralimangwal786-ctrl/Haider-portfolio.git
} else {
    & $git remote add origin https://github.com/haideralimangwal786-ctrl/Haider-portfolio.git
}

Write-Host "Staging files..."
& $git add .

Write-Host "Checking git status..."
& $git status --short

Write-Host "Committing files..."
& $git commit -m "feat: complete luxury developer portfolio with authentic projects and credentials"
& $git branch -M main

Write-Host "Local repository ready!"
