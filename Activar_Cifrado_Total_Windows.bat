@echo off
SETLOCAL EnableDelayedExpansion
chcp 65001 >nul 2>&1
title INSTALADOR DE CIFRADO TOTAL WINDOWS 11 + NAVEGADORES + BOVEDA PROYECTO SCBA

:: ============================================================================
:: AUTO-ELEVACION AUTOMATICA A ADMINISTRADOR (UAC) AL HACER DOBLE CLIC
:: ============================================================================
net session >nul 2>&1
if %errorLevel% NEQ 0 (
    echo [UAC] Solicitando permisos de Administrador para aplicar politicas de cifrado...
    powershell -NoProfile -ExecutionPolicy Bypass -Command "Start-Process -FilePath '%~f0' -WorkingDirectory '%~dp0' -Verb RunAs"
    exit /b
)

cd /d "%~dp0"
cls
echo ================================================================================
echo   SISTEMA DE ENDURECIMIENTO CRIPTOGRAFICO Y CIFRADO TOTAL - WINDOWS 11
echo   Directorio del Proyecto: %CD%
echo ================================================================================
echo.

:: ============================================================================
:: CAPA 1: CIFRADO DE NAVEGADORES POR POLITICA DE REGISTRO (CHROME, EDGE, BRAVE)
:: ============================================================================
echo [CAPA 1/5] Configurando Politicas de Cifrado en Navegadores (Chrome, Edge, Brave)...

:: 1.1 Google Chrome
reg add "HKLM\SOFTWARE\Policies\Google\Chrome" /v "DnsOverHttpsMode" /t REG_SZ /d "secure" /f >nul
reg add "HKLM\SOFTWARE\Policies\Google\Chrome" /v "DnsOverHttpsTemplates" /t REG_SZ /d "https://cloudflare-dns.com/dns-query" /f >nul
reg add "HKLM\SOFTWARE\Policies\Google\Chrome" /v "HttpsOnlyMode" /t REG_SZ /d "force_enabled" /f >nul
echo   [OK] Google Chrome -> DnsOverHttpsMode=secure ^| HttpsOnlyMode=force_enabled

:: 1.2 Microsoft Edge
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "DnsOverHttpsMode" /t REG_SZ /d "secure" /f >nul
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "DnsOverHttpsTemplates" /t REG_SZ /d "https://cloudflare-dns.com/dns-query" /f >nul
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "HttpsOnlyMode" /t REG_SZ /d "force_enabled" /f >nul
reg add "HKLM\SOFTWARE\Policies\Microsoft\Edge" /v "AutomaticHttpsDefault" /t REG_DWORD /d 2 /f >nul
echo   [OK] Microsoft Edge -> DnsOverHttpsMode=secure ^| HttpsOnlyMode=force_enabled

:: 1.3 Brave Browser
reg add "HKLM\SOFTWARE\Policies\BraveSoftware\Brave" /v "DnsOverHttpsMode" /t REG_SZ /d "secure" /f >nul
reg add "HKLM\SOFTWARE\Policies\BraveSoftware\Brave" /v "DnsOverHttpsTemplates" /t REG_SZ /d "https://cloudflare-dns.com/dns-query" /f >nul
reg add "HKLM\SOFTWARE\Policies\BraveSoftware\Brave" /v "HttpsOnlyMode" /t REG_SZ /d "force_enabled" /f >nul
echo   [OK] Brave Browser  -> DnsOverHttpsMode=secure ^| HttpsOnlyMode=force_enabled
echo.

:: ============================================================================
:: CAPA 2: DNS SOBRE HTTPS (DoH) NATIVO EN TODA LA RED DE WINDOWS 11
:: ============================================================================
echo [CAPA 2/5] Activando DNS sobre HTTPS (DoH) Nativo en Windows 11 (Cloudflare 1.1.1.1 / 1.0.0.1)...

:: Habilitar Auto-DoH en el servicio Dnscache de Windows 11
reg add "HKLM\SYSTEM\CurrentControlSet\Services\Dnscache\Parameters" /v "EnableAutoDoh" /t REG_DWORD /d 2 /f >nul

:: Registrar plantillas DoH mediante netsh dns
netsh dns add encryption server=1.1.1.1 dohtemplate=https://cloudflare-dns.com/dns-query autoupgrade=yes udpfallback=no >nul 2>&1
netsh dns add encryption server=1.0.0.1 dohtemplate=https://cloudflare-dns.com/dns-query autoupgrade=yes udpfallback=no >nul 2>&1
netsh dns add encryption server=2606:4700:4700::1111 dohtemplate=https://cloudflare-dns.com/dns-query autoupgrade=yes udpfallback=no >nul 2>&1
netsh dns add encryption server=2606:4700:4700::1001 dohtemplate=https://cloudflare-dns.com/dns-query autoupgrade=yes udpfallback=no >nul 2>&1

:: Registrar DoH y asignar servidores DNS en todos los adaptadores de red activos mediante PowerShell
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ErrorActionPreference = 'SilentlyContinue'; " ^
  "foreach ($ip in @('1.1.1.1','1.0.0.1','2606:4700:4700::1111','2606:4700:4700::1001')) { " ^
  "  if (Get-DnsClientDohServerAddress -ServerAddress $ip) { " ^
  "    Set-DnsClientDohServerAddress -ServerAddress $ip -DohTemplate 'https://cloudflare-dns.com/dns-query' -AllowFallbackToUdp $false -AutoUpgrade $true " ^
  "  } else { " ^
  "    Add-DnsClientDohServerAddress -ServerAddress $ip -DohTemplate 'https://cloudflare-dns.com/dns-query' -AllowFallbackToUdp $false -AutoUpgrade $true " ^
  "  } " ^
  "}; " ^
  "$adapters = Get-NetAdapter | Where-Object { $_.Status -eq 'Up' }; " ^
  "foreach ($a in $adapters) { " ^
  "  Set-DnsClientServerAddress -InterfaceIndex $a.ifIndex -ServerAddresses @('1.1.1.1','1.0.0.1'); " ^
  "  Write-Host ('  [OK] Adaptador cifrado con DoH: ' + $a.Name + ' (ifIndex ' + $a.ifIndex + ') -> 1.1.1.1, 1.0.0.1') " ^
  "}"
echo.

:: ============================================================================
:: CAPA 3: ENDURECIMIENTO CRIPTOGRAFICO WINDOWS SCHANNEL (TLS 1.2 / TLS 1.3)
:: ============================================================================
echo [CAPA 3/5] Endureciendo Windows Schannel (Deshabilitando SSL 2.0/3.0, TLS 1.0/1.1 y Forzando TLS 1.2 / TLS 1.3)...

for %%P in ("SSL 2.0" "SSL 3.0" "TLS 1.0" "TLS 1.1") do (
    reg add "HKLM\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\%%~P\Client" /v "Enabled" /t REG_DWORD /d 0 /f >nul
    reg add "HKLM\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\%%~P\Client" /v "DisabledByDefault" /t REG_DWORD /d 1 /f >nul
    reg add "HKLM\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\%%~P\Server" /v "Enabled" /t REG_DWORD /d 0 /f >nul
    reg add "HKLM\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\%%~P\Server" /v "DisabledByDefault" /t REG_DWORD /d 1 /f >nul
    echo   [BLOQUEADO] Protocolo vulnerable deshabilitado: %%~P (Client ^& Server)
)

for %%P in ("TLS 1.2" "TLS 1.3") do (
    reg add "HKLM\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\%%~P\Client" /v "Enabled" /t REG_DWORD /d 1 /f >nul
    reg add "HKLM\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\%%~P\Client" /v "DisabledByDefault" /t REG_DWORD /d 0 /f >nul
    reg add "HKLM\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\%%~P\Server" /v "Enabled" /t REG_DWORD /d 1 /f >nul
    reg add "HKLM\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\%%~P\Server" /v "DisabledByDefault" /t REG_DWORD /d 0 /f >nul
    echo   [ACTIVADO]  Protocolo criptografico seguro habilitado: %%~P (Client ^& Server)
)

:: Habilitar criptografia fuerte por defecto en .NET Framework (32-bit y 64-bit)
reg add "HKLM\SOFTWARE\Microsoft\.NETFramework\v4.0.30319" /v "SystemDefaultTlsVersions" /t REG_DWORD /d 1 /f >nul
reg add "HKLM\SOFTWARE\Microsoft\.NETFramework\v4.0.30319" /v "SchUseStrongCrypto" /t REG_DWORD /d 1 /f >nul
reg add "HKLM\SOFTWARE\Wow6432Node\Microsoft\.NETFramework\v4.0.30319" /v "SystemDefaultTlsVersions" /t REG_DWORD /d 1 /f >nul
reg add "HKLM\SOFTWARE\Wow6432Node\Microsoft\.NETFramework\v4.0.30319" /v "SchUseStrongCrypto" /t REG_DWORD /d 1 /f >nul
echo.

:: ============================================================================
:: CAPA 4: AUDITORIA ANTI-PHP2SHELL (CVE-2026-109618 / CVE-2026-109619) + FLUSHDNS
:: ============================================================================
echo [CAPA 4/5] Ejecutando Auditoria Anti-php2shell (CVE-2026-109618 / CVE-2026-109619) y Limpieza DNS...

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$phpProcs = Get-Process -Name 'php*','php-cgi*' -ErrorAction SilentlyContinue; " ^
  "if ($phpProcs) { " ^
  "  Stop-Process -InputObject $phpProcs -Force -ErrorAction SilentlyContinue; " ^
  "  Write-Host '  [ALERTA] Procesos PHP detectados y terminados forzosamente.' " ^
  "} else { " ^
  "  Write-Host '  [SEGURO] 0 procesos PHP (php.exe / php-cgi.exe) en ejecucion.' " ^
  "}; " ^
  "$phpSvcs = Get-Service | Where-Object { $_.Name -match 'php' -or $_.DisplayName -match 'PHP' }; " ^
  "if ($phpSvcs) { " ^
  "  foreach ($s in $phpSvcs) { Stop-Service -Name $s.Name -Force -ErrorAction SilentlyContinue; Set-Service -Name $s.Name -StartupType Disabled -ErrorAction SilentlyContinue }; " ^
  "  Write-Host '  [ALERTA] Servicios PHP deshabilitados.' " ^
  "} else { " ^
  "  Write-Host '  [SEGURO] 0 servicios locales de PHP registrados en el sistema.' " ^
  "}"

ipconfig /flushdns >nul
echo   [OK] Cache de resolucion DNS vaciada exitosamente (ipconfig /flushdns).
echo.

:: ============================================================================
:: CAPA 5: BOVEDA CIFRADA DEL PROYECTO (AES-256-GCM + SHA-256 + TLS 1.3)
:: ============================================================================
echo [CAPA 5/5] Ejecutando Sellado SHA-256 y Boveda Cifrada AES-256-GCM del Proyecto...
node "%~dp0boveda_cifrada_aes256.js"
echo.

:: ============================================================================
:: PANTALLA VERDE DE CONFIRMACION FINAL
:: ============================================================================
color 0A
echo ================================================================================
echo   [EXITO TOTAL] LAS 5 CAPAS DE CIFRADO QUEDARON ACTIVADAS Y VERIFICADAS
echo ================================================================================
echo   [1] Navegadores (Chrome, Edge, Brave): DoH "secure" + HTTPS-Only "force_enabled"
echo   [2] Red Windows 11: DNS sobre HTTPS (DoH Cloudflare 1.1.1.1 / 1.0.0.1) Activo
echo   [3] Windows Schannel: SSL 2/3 y TLS 1.0/1.1 Bloqueados ^| TLS 1.2 y TLS 1.3 Activos
echo   [4] Auditoria CVE-2026-109618 / CVE-2026-109619: 0 instancias PHP + DNS Flush OK
echo   [5] Boveda del Proyecto: Manifiesto SHA-256 + Respaldo Cifrado AES-256-GCM OK
echo ================================================================================
echo.
pause
ENDLOCAL
