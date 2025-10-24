'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Home, Building2, Phone, Mail, CheckCircle } from 'lucide-react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">RenService</span>
            </div>

            <div className="hidden md:flex gap-8">
              <a href="#hjem" className="text-gray-700 hover:text-blue-600 transition-colors">Hjem</a>
              <a href="#om-os" className="text-gray-700 hover:text-blue-600 transition-colors">Om os</a>
              <a href="#tjenester" className="text-gray-700 hover:text-blue-600 transition-colors">Tjenester</a>
              <a href="#kontakt" className="text-gray-700 hover:text-blue-600 transition-colors">Kontakt</a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#hjem" className="block text-gray-700 hover:text-blue-600">Hjem</a>
              <a href="#om-os" className="block text-gray-700 hover:text-blue-600">Om os</a>
              <a href="#tjenester" className="block text-gray-700 hover:text-blue-600">Tjenester</a>
              <a href="#kontakt" className="block text-gray-700 hover:text-blue-600">Kontakt</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hjem" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/6195516-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Professionel rengøring til dit hjem og kontor
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto drop-shadow-lg">
            Vi leverer pålidelige og grundige rengøringsløsninger tilpasset dine behov.
            Din tilfredshed er vores prioritet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-xl hover:shadow-2xl hover:scale-105 transform duration-200"
            >
              Få et tilbud
            </a>
            <a
              href="tel:50124422"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg font-semibold hover:bg-white/20 transition-colors shadow-xl"
            >
              Ring nu
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="om-os" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Om os</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi er et professionelt rengøringsfirma med fokus på kvalitet og kundetilfredshed.
              Vores erfarne team sikrer, at dit hjem eller kontor altid er rent og velholdt.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Professionel kvalitet</h3>
              <p className="text-gray-600">
                Vi bruger professionelt udstyr og miljøvenlige produkter for det bedste resultat.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pålidelig service</h3>
              <p className="text-gray-600">
                Vi kommer til tiden og leverer konsistent høj kvalitet ved hver rengøring.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fleksible løsninger</h3>
              <p className="text-gray-600">
                Vi tilpasser vores service efter dine specifikke behov og ønsker.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - See Us In Action */}
      <section className="relative py-20 px-4 bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white z-10 relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Se os i aktion
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Vi tager vores arbejde seriøst og leverer altid resultater af højeste kvalitet.
                Se hvordan vores professionelle team arbejder for at sikre dit hjem eller kontor er perfekt rent.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Erfarne medarbejdere</h4>
                    <p className="text-gray-400">Vores team er trænet i de nyeste rengøringsteknikker</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Professionelt udstyr</h4>
                    <p className="text-gray-400">Vi bruger de bedste værktøjer for optimale resultater</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Miljøvenlige produkter</h4>
                    <p className="text-gray-400">Sikre for dig, din familie og miljøet</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-2xl"
                >
                  <source src="/video/6195524-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                </video>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="tjenester" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vores tjenester</h2>
            <p className="text-xl text-gray-600">
              Vi tilbyder skræddersyede rengøringsløsninger til alle behov
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Home Cleaning */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/home-cleaning.jpg"
                  alt="Privat rengøring"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 -mt-16 relative z-10 shadow-lg">
                  <Home className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Privat rengøring</h3>
              <p className="text-gray-600 mb-6">
                Få dit hjem til at skinne med vores grundige hjemmerengøring.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Støvsugning og gulvvask</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Badeværelse og køkken</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Vinduespudsning</span>
                </li>
              </ul>
              </div>
            </div>

            {/* Office Cleaning */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/office-cleaning.jpg"
                  alt="Kontorrengøring"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 -mt-16 relative z-10 shadow-lg">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Kontorrengøring</h3>
              <p className="text-gray-600 mb-6">
                Professionel rengøring af kontorer og erhvervslokaler.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Daglig eller ugentlig rengøring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Sanitetsrum og køkkener</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Fleksible tidsplaner</span>
                </li>
              </ul>
              </div>
            </div>

            {/* Deep Cleaning */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/deep-cleaning.jpg"
                  alt="Hovedrengøring"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 -mt-16 relative z-10 shadow-lg">
                  <Sparkles className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Hovedrengøring</h3>
              <p className="text-gray-600 mb-6">
                Grundig gennemgående rengøring fra top til tå.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Alle overflader og hjørner</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Skabe og hylder</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Perfekt til flytning</span>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kontakt os</h2>
            <p className="text-xl text-gray-600">
              Vi står klar til at hjælpe dig. Kontakt os i dag for et uforpligtende tilbud.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Kontaktinformation</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Telefon</p>
                      <a href="tel:50124422" className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                        50 12 44 22
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <a href="mailto:milanjarysz@gmail.com" className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                        milanjarysz@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-semibold text-lg mb-3">Åbningstider</h4>
                <div className="space-y-2 text-gray-700">
                  <p>Mandag - Fredag: 08:00 - 18:00</p>
                  <p>Lørdag: 09:00 - 14:00</p>
                  <p>Søndag: Lukket</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send os en besked</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Navn
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="Dit navn"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="din@email.dk"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="Dit telefonnummer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Besked
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                    placeholder="Fortæl os om dine behov..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send besked
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold">RenService</span>
          </div>
          <p className="text-gray-400 mb-4">
            Professionel rengøring til dit hjem og kontor
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="tel:50124422" className="text-gray-400 hover:text-white transition-colors">
              Telefon: 50 12 44 22
            </a>
            <span className="text-gray-600">|</span>
            <a href="mailto:milanjarysz@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              milanjarysz@gmail.com
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} RenService. Alle rettigheder forbeholdes.
          </p>
        </div>
      </footer>
    </div>
  );
}
