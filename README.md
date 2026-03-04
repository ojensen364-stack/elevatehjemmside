# Elevate Roleplay - FiveM Server Website

En moderne, premium hjemmeside til Elevate Roleplay FiveM server med Discord OAuth login, ansøgningssystem og admin panel.

## Features

- 🔐 Discord OAuth2 Login
- 📊 Live FiveM Server Status
- 📝 Ansøgningssystem med Discord Webhook
- 📜 Regler med Accept-funktion
- 👥 Ejer-team visning
- 🖼️ Galleri
- ⚙️ Admin Panel
- 🗄️ SQLite Database
- 📱 Responsivt Design
- 🎨 Mørkt Tema

## Installation

### 1. Installer dependencies

```bash
npm install
```

### 2. Konfigurer miljøvariabler

```bash
cp .env.example .env.local
```

Rediger `.env.local` med dine værdier.

### 3. Start udviklingsserver

```bash
npm run dev
```

Hjemmesiden kører på `http://localhost:3000`

## Discord App Konfiguration

1. Gå til https://discord.com/developers/applications
2. Opret ny application
3. Gå til OAuth2 → General
4. Tilføj redirect URI: `http://localhost:3000/api/auth/callback/discord`
5. Kopier Client ID og Client Secret

## Deployment

### Vercel

1. Push til GitHub
2. Forbind på Vercel
3. Tilføj environment variables
4. Deploy

## Sider

- `/` - Forside
- `/om-os` - Om serveren
- `/regler` - Server regler
- `/ansoegninger` - Ansøgninger (kræver login)
- `/admin` - Admin panel (kun admins)
