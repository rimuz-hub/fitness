Param()

# Creates sleeper-build-pwa.zip from the www directory
$zipPath = Join-Path $PSScriptRoot '..\sleeper-build-pwa.zip' | Resolve-Path -Relative
$wwwPath = Join-Path $PSScriptRoot '..\www'

if (Test-Path $zipPath) { Remove-Item $zipPath -Force }

Write-Host "Creating ZIP: $zipPath from $wwwPath"
Compress-Archive -Path (Join-Path $wwwPath '*') -DestinationPath $zipPath -Force
Write-Host "Done. Created $zipPath"
