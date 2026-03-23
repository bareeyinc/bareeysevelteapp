<script>
  import { Smartphone, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-svelte';
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-white border-t border-gray-100 pt-20 pb-10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <!-- Brand & Description -->
      <div class="space-y-6">
        <a href="/" class="text-4xl font-logo text-blue-600">Bareey</a>
        <p class="text-gray-500 leading-relaxed">
          The trusted marketplace platform for buying, selling, and accessing professional services within your community.
        </p>
        <div class="flex gap-4">
          <a href="/" class="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-all"><Facebook class="w-5 h-5" /></a>
          <a href="/" class="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-all"><Twitter class="w-5 h-5" /></a>
          <a href="/" class="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-all"><Instagram class="w-5 h-5" /></a>
          <a href="/" class="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-all"><Linkedin class="w-5 h-5" /></a>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="text-lg font-bold mb-6">Quick Links</h4>
        <ul class="space-y-4">
          <li><a href="/#features" class="text-gray-500 hover:text-blue-600 transition-colors">Features</a></li>
          <li><a href="/#how-it-works" class="text-gray-500 hover:text-blue-600 transition-colors">How it Works</a></li>
          <li><a href="/#faq" class="text-gray-500 hover:text-blue-600 transition-colors">FAQ</a></li>
          <li><a href="/#about" class="text-gray-500 hover:text-blue-600 transition-colors">About Us</a></li>
          <li><a href="/#contact" class="text-gray-500 hover:text-blue-600 transition-colors">Contact</a></li>
        </ul>
      </div>

      <!-- Legal -->
      <div>
        <h4 class="text-lg font-bold mb-6">Legal</h4>
        <ul class="space-y-4">
          <li><a href="/privacy" class="text-gray-500 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
          <li><a href="/terms" class="text-gray-500 hover:text-blue-600 transition-colors">Terms of Service</a></li>
          <li><a href="/privacy#refund" class="text-gray-500 hover:text-blue-600 transition-colors">Refund Policy</a></li>
          <li><a href="/privacy#data" class="text-gray-500 hover:text-blue-600 transition-colors">Data Deletion</a></li>
        </ul>
      </div>

      <!-- Download -->
      <div>
        <h4 class="text-lg font-bold mb-6">Get the App</h4>
        <p class="text-gray-500 mb-6">Download our Android app for the best experience.</p>
        <a href="https://play.google.com/store/apps/details?id=com.bareeyinc.bareey" target="_blank" class="inline-flex items-center px-6 py-3 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-all w-full justify-center gap-2">
          <Smartphone class="w-5 h-5" /> Play Store
        </a>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
      <p>© {currentYear} Bareey Inc. All rights reserved.</p>
      <div class="flex gap-8">
        <a href="/privacy" class="hover:text-blue-600 transition-colors">Privacy</a>
        <a href="/terms" class="hover:text-blue-600 transition-colors">Terms</a>
        <a href="/#contact" class="hover:text-blue-600 transition-colors">Support</a>
      </div>
    </div>
  </div>
</footer>

<style>
  .font-logo {
    font-family: 'Norican', cursive;
  }
</style>
