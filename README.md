# RenService - Strona Firmy Sprzątającej

Profesjonalna strona one-page dla firmy sprzątającej w języku duńskim, stworzona w Next.js.

## Funkcje

- **Hero Section z wideo w tle** - Pełnoekranowa sekcja z profesjonalnym wideo sprzątania jako tło
  - Automatyczne odtwarzanie w pętli
  - Ciemna nakładka dla lepszej czytelności tekstu
  - Animowany wskaźnik przewijania
- **O nas** - Sekcja przedstawiająca firmę i wartości
- **Se os i aktion (Zobacz nas w akcji)** - Druga sekcja wideo z ciemnym tłem
  - Grid layout z tekstem i wideo
  - Pokazuje profesjonalizm i proces sprzątania
  - Dekoracyjne elementy gradient w tle
- **Usługi** - Trzy główne kategorie z własnymi zdjęciami:
  - Privat rengøring (sprzątanie domów)
  - Kontorrengøring (sprzątanie biur)
  - Hovedrengøring (głębokie czyszczenie)
- **Kontakt** - Formularz kontaktowy z danymi:
  - Telefon: 50 12 44 22
  - Email: milanjarysz@gmail.com
- **Responsywna nawigacja** - Działa na wszystkich urządzeniach
- **Nowoczesny design** - Tailwind CSS z gradient, cieniami i płynnymi animacjami
- **Wysokiej jakości multimedia** - 2x UHD wideo (3840x2160) + obrazy dla kart usług
  - Wideo tło w Hero Section
  - Wideo w sekcji "Se os i aktion"

## Uruchomienie

```bash
# Instalacja zależności
npm install

# Uruchomienie serwera deweloperskiego
npm run dev

# Build produkcyjny
npm run build

# Start produkcyjny
npm start
```

Strona będzie dostępna pod adresem: http://localhost:3000

## Technologie

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (ikony)

## Struktura projektu

```
cleaning-service/
├── app/
│   ├── page.tsx          # Główna strona one-page
│   ├── layout.tsx        # Layout aplikacji
│   └── globals.css       # Style globalne
├── public/               # Pliki statyczne
└── package.json
```

## Dodanie prawdziwych zdjęć

Obecnie strona używa placeholder obrazów SVG. Aby dodać prawdziwe zdjęcia:

1. Pobierz **DARMOWE** wysokiej jakości zdjęcia z:
   - **Unsplash** (https://unsplash.com) - wyszukaj "cleaning", "house cleaning"
   - **Pexels** (https://www.pexels.com) - wyszukaj "cleaning service"
   - **Pixabay** (https://pixabay.com) - wyszukaj "housekeeping"

2. Potrzebne pliki (zapisz w `/public/images/`):
   - `hero-cleaning.jpg` - Główne zdjęcie sprzątania (1200x800px+)
   - `home-cleaning.jpg` - Sprzątanie domu (800x600px+)
   - `office-cleaning.jpg` - Sprzątanie biura (800x600px+)
   - `deep-cleaning.jpg` - Głębokie czyszczenie (800x600px+)

3. Po dodaniu zdjęć, odśwież stronę - będą automatycznie załadowane!

📖 Szczegółowe instrukcje: `/public/images/README.md`

## Customizacja

Możesz łatwo dostosować:
- Kolory - zmień `blue-600` na inny kolor w `page.tsx`
- Treść - edytuj teksty w sekcjach
- Logo - zamień nazwę "RenService" na swoją
- Dane kontaktowe - zaktualizuj telefon i email
- Zdjęcia - zamień placeholdery na prawdziwe zdjęcia (patrz wyżej)

## Deploy

Strona jest gotowa do wdrożenia na:
- Vercel (rekomendowane dla Next.js)
- Netlify
- Dowolny hosting Node.js

## Kontakt

Milan Jarysz
- Telefon: 50 12 44 22
- Email: milanjarysz@gmail.com
