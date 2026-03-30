<script>
  import { Download, TrendingUp, Users, Shield, MessageCircle, Star, ArrowRight, CheckCircle } from 'lucide-svelte';
  import { onMount } from 'svelte';

  let scrollY = 0;
  let testimonials = [
    { name: "Chioma O.", role: "Seller", text: "Made ₦50k in my first month. Bareey made it so easy!", rating: 5 },
    { name: "Tunde A.", role: "Buyer", text: "Found exactly what I needed in minutes. Safe and reliable.", rating: 5 },
    { name: "Zainab M.", role: "Service Provider", text: "Best platform for my cleaning business. Customers trust Bareey.", rating: 5 }
  ];

  let currentTestimonial = 0;

  onMount(() => {
    const interval = setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    }, 5000);
    return () => clearInterval(interval);
  });
</script>

<svelte:window bind:scrollY />

<div class="bg-white overflow-hidden">
  <!-- HERO: Simple, Direct, Powerful -->
  <section class="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
    <div class="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 -z-10"></div>
    
    <div class="max-w-4xl mx-auto text-center space-y-8">
      <!-- Headline: Psychological Trigger - Belonging + Opportunity -->
      <h1 class="text-5xl md:text-7xl font-black tracking-tight text-gray-900 leading-tight">
        Your Community. <br><span class="text-blue-600">Your Marketplace.</span>
      </h1>

      <!-- Subheading: Clear Value Proposition -->
      <p class="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Buy from neighbors. Sell to friends. Get paid instantly. <br><span class="font-semibold text-gray-900">No middlemen. Just trust.</span>
      </p>

      <!-- Social Proof: Psychological Trigger - FOMO + Credibility -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-8 py-8">
        <div class="text-center">
          <div class="text-4xl font-black text-blue-600">50K+</div>
          <div class="text-sm text-gray-600">Active Users</div>
        </div>
        <div class="hidden sm:block w-px h-12 bg-gray-200"></div>
        <div class="text-center">
          <div class="text-4xl font-black text-blue-600">₦2B+</div>
          <div class="text-sm text-gray-600">Transactions</div>
        </div>
        <div class="hidden sm:block w-px h-12 bg-gray-200"></div>
        <div class="text-center">
          <div class="text-4xl font-black text-blue-600">4.9★</div>
          <div class="text-sm text-gray-600">App Rating</div>
        </div>
      </div>

      <!-- CTA: Primary Action - Urgency + Clear Benefit -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center pt-8">
        <a href="https://play.google.com/store/apps/details?id=com.bareeyinc.bareey" target="_blank" class="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2">
          <Download class="w-5 h-5" /> Download Now
        </a>
        <a href="/#how-it-works" class="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
          Learn More <ArrowRight class="w-5 h-5" />
        </a>
      </div>

      <!-- Trust Badge: Psychological Trigger - Safety -->
      <div class="flex items-center justify-center gap-2 text-sm text-gray-600 pt-4">
        <Shield class="w-5 h-5 text-green-600" />
        <span>Secure payments • Verified sellers • Buyer protection</span>
      </div>
    </div>
  </section>

  <!-- THREE SIMPLE PATHS: Clear Value for Each User Type -->
  <section class="py-24 px-4 bg-white">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-black text-center mb-20 text-gray-900">
        What will you do on Bareey?
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Path 1: Buyers -->
        <div class="group p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-600 hover:shadow-xl transition-all duration-300 bg-white">
          <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
            <Users class="w-8 h-8" />
          </div>
          <h3 class="text-2xl font-black mb-3 text-gray-900">For Buyers</h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            Find everything you need from trusted sellers in your community. Safe, fast, and transparent.
          </p>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <CheckCircle class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <span class="text-gray-700">Browse thousands of listings</span>
            </li>
            <li class="flex items-start gap-3">
              <CheckCircle class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <span class="text-gray-700">Chat with sellers in real-time</span>
            </li>
            <li class="flex items-start gap-3">
              <CheckCircle class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <span class="text-gray-700">Protected payments</span>
            </li>
          </ul>
        </div>

        <!-- Path 2: Sellers -->
        <div class="group p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-600 hover:shadow-xl transition-all duration-300 bg-white">
          <div class="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-all">
            <TrendingUp class="w-8 h-8" />
          </div>
          <h3 class="text-2xl font-black mb-3 text-gray-900">For Sellers</h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            Turn your items into cash. Reach thousands of buyers without any hassle.
          </p>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <CheckCircle class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <span class="text-gray-700">List items in seconds</span>
            </li>
            <li class="flex items-start gap-3">
              <CheckCircle class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <span class="text-gray-700">Get paid instantly</span>
            </li>
            <li class="flex items-start gap-3">
              <CheckCircle class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <span class="text-gray-700">No hidden fees</span>
            </li>
          </ul>
        </div>

        <!-- Path 3: Service Providers -->
        <div class="group p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-600 hover:shadow-xl transition-all duration-300 bg-white">
          <div class="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
            <MessageCircle class="w-8 h-8" />
          </div>
          <h3 class="text-2xl font-black mb-3 text-gray-900">For Service Providers</h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            Grow your business. Connect with customers who need your skills.
          </p>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <CheckCircle class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <span class="text-gray-700">Build your professional profile</span>
            </li>
            <li class="flex items-start gap-3">
              <CheckCircle class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <span class="text-gray-700">Receive regular bookings</span>
            </li>
            <li class="flex items-start gap-3">
              <CheckCircle class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <span class="text-gray-700">5-star rating system</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- HOW IT WORKS: Super Simple 3 Steps -->
  <section id="how-it-works" class="py-24 px-4 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-black text-center mb-20 text-gray-900">
        Get started in 3 minutes
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        {#each [
          { step: 1, title: 'Download', desc: 'Get the app from Google Play Store' },
          { step: 2, title: 'Sign Up', desc: 'Create your account with your phone number' },
          { step: 3, title: 'Start Trading', desc: 'Buy, sell, or offer services immediately' }
        ] as item}
          <div class="text-center">
            <div class="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-4xl font-black mx-auto mb-6">
              {item.step}
            </div>
            <h3 class="text-2xl font-black mb-3 text-gray-900">{item.title}</h3>
            <p class="text-gray-600 text-lg">{item.desc}</p>
          </div>
        {/each}
      </div>

      <div class="text-center mt-16">
        <a href="https://play.google.com/store/apps/details?id=com.bareeyinc.bareey" target="_blank" class="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
          Download Now
        </a>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS: Social Proof - Psychological Trigger -->
  <section class="py-24 px-4 bg-white">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
        Real people. Real success.
      </h2>

      <div class="relative">
        <!-- Testimonial Card -->
        <div class="bg-gradient-to-br from-blue-50 to-white p-12 rounded-2xl border-2 border-gray-100 min-h-64 flex flex-col justify-between">
          <div>
            <div class="flex gap-1 mb-6">
              {#each Array(testimonials[currentTestimonial].rating) as _}
                <Star class="w-6 h-6 fill-yellow-400 text-yellow-400" />
              {/each}
            </div>
            <p class="text-2xl font-semibold text-gray-900 mb-6 leading-relaxed">
              "{testimonials[currentTestimonial].text}"
            </p>
          </div>
          <div>
            <p class="text-lg font-black text-gray-900">{testimonials[currentTestimonial].name}</p>
            <p class="text-blue-600 font-semibold">{testimonials[currentTestimonial].role}</p>
          </div>
        </div>

        <!-- Dots Navigation -->
        <div class="flex justify-center gap-3 mt-8">
          {#each testimonials as _, i}
            <button 
              on:click={() => currentTestimonial = i}
              class="w-3 h-3 rounded-full transition-all {currentTestimonial === i ? 'bg-blue-600 w-8' : 'bg-gray-300'}"
            />
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- WHY BAREEY: Trust & Security -->
  <section class="py-24 px-4 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-black text-center mb-20 text-gray-900">
        Why Bareey?
      </h2>

      <div class="grid md:grid-cols-2 gap-12">
        <div class="space-y-8">
          <div class="flex gap-4">
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 shrink-0">
              <Shield class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-xl font-black mb-2 text-gray-900">100% Secure Payments</h3>
              <p class="text-gray-600">Your money is protected until you confirm the transaction.</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
              <Users class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-xl font-black mb-2 text-gray-900">Verified Community</h3>
              <p class="text-gray-600">Every user is verified. Real people, real trust.</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
              <MessageCircle class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-xl font-black mb-2 text-gray-900">24/7 Support</h3>
              <p class="text-gray-600">Our team is always here to help you succeed.</p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 text-white flex flex-col justify-center">
          <h3 class="text-3xl font-black mb-6">Join thousands earning on Bareey</h3>
          <p class="text-blue-100 text-lg mb-8 leading-relaxed">
            Whether you're buying, selling, or offering services, Bareey is the safest, fastest way to grow your income.
          </p>
          <a href="https://play.google.com/store/apps/details?id=com.bareeyinc.bareey" target="_blank" class="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all w-fit">
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- FINAL CTA: Urgency + Benefit -->
  <section class="py-24 px-4 bg-white">
    <div class="max-w-4xl mx-auto text-center space-y-8">
      <h2 class="text-4xl md:text-5xl font-black text-gray-900">
        Ready to join your community?
      </h2>
      <p class="text-xl text-gray-600">
        Download Bareey now and start buying, selling, or growing your business.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <a href="https://play.google.com/store/apps/details?id=com.bareeyinc.bareey" target="_blank" class="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
          Download on Play Store
        </a>
      </div>
    </div>
  </section>

  <!-- Contact Info Footer -->
  <section class="py-16 px-4 bg-gray-900 text-white">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <h4 class="font-black text-lg mb-4">Contact Us</h4>
          <p class="text-gray-400 flex items-center gap-2 mb-2">
            <MessageCircle class="w-5 h-5" /> support@bareey.com
          </p>
          <p class="text-gray-400 flex items-center gap-2">
            <Download class="w-5 h-5" /> +234 902 138 8401
          </p>
        </div>
        <div>
          <h4 class="font-black text-lg mb-4">Location</h4>
          <p class="text-gray-400">Nda Oldsite, Kawo<br>Kaduna State, Nigeria</p>
        </div>
        <div>
          <h4 class="font-black text-lg mb-4">Legal</h4>
          <a href="/privacy" class="text-gray-400 hover:text-white block mb-2">Privacy Policy</a>
          <a href="/terms" class="text-gray-400 hover:text-white block">Terms of Service</a>
        </div>
      </div>
      <div class="border-t border-gray-700 pt-8 text-center text-gray-400">
        <p>&copy; 2026 Bareey Inc. All rights reserved.</p>
      </div>
    </div>
  </section>
</div>

<style>
  :global(body) {
    font-family: 'Inter', sans-serif;
  }
</style>
