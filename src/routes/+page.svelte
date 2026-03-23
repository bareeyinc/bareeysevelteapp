<script>
  import { 
    ShoppingBag, 
    ShieldCheck, 
    Users, 
    MessageSquare, 
    ArrowRight, 
    CheckCircle2, 
    Smartphone, 
    HelpCircle,
    Mail,
    Phone,
    MapPin,
    ExternalLink,
    ChevronDown,
    ChevronUp
  } from 'lucide-svelte';
  import { onMount } from 'svelte';

  let activeFaq = null;
  const toggleFaq = (i) => activeFaq = activeFaq === i ? null : i;

  const features = [
    {
      title: "Secure Buying",
      desc: "Browse thousands of products and services with built-in buyer protection.",
      icon: ShoppingBag
    },
    {
      title: "Easy Selling",
      desc: "List your items or professional services in minutes and reach your community.",
      icon: Users
    },
    {
      title: "Safe Transactions",
      desc: "Every payment is encrypted and held securely until the deal is done.",
      icon: ShieldCheck
    },
    {
      title: "Real-time Support",
      desc: "Access Bareey's dedicated support team for any assistance you need.",
      icon: MessageSquare
    }
  ];

  const faqs = [
    { q: "How do I start selling on Bareey?", a: "Simply download the Android app, create an account, and tap the 'List' button to start selling your products or services." },
    { q: "Is my payment secure?", a: "Yes, Bareey uses industry-standard encryption and a secure escrow-like system to ensure both buyers and sellers are protected." },
    { q: "What kind of services can I find?", a: "You can find everything from professional consulting and home repairs to creative services and local deliveries." },
    { q: "How does dispute resolution work?", a: "If there's an issue with a transaction, our dedicated support team steps in to mediate and ensure a fair outcome for both parties." }
  ];

  let visible = false;
  onMount(() => {
    visible = true;
  });
</script>

<div class="overflow-hidden">
  <!-- 1. Hero Section -->
  <section class="relative bg-white pt-20 pb-32 overflow-hidden">
    <div class="section-container">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="text-left space-y-8">
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
            <span class="mr-2">🚀</span> Now available on Android
          </div>
          <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            The Trusted Marketplace for <span class="text-blue-600">Your Community.</span>
          </h1>
          <p class="text-xl text-gray-600 max-w-lg">
            Buy, sell, and access professional services with confidence. Bareey connects you to what you need, securely and simply.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="https://play.google.com/store/apps/details?id=com.bareeyinc.bareey" target="_blank" class="btn-primary">
              <Smartphone class="mr-2 w-5 h-5" /> Download on Play Store
            </a>
            <a href="/market" class="btn-secondary">
              Explore Marketplace <ArrowRight class="ml-2 w-5 h-5" />
            </a>
          </div>
          <div class="flex items-center gap-4 text-sm text-gray-500">
            <div class="flex -space-x-2">
              {#each Array(4) as _}
                <div class="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold">B</div>
              {/each}
            </div>
            <span>Joined by 1,000+ community members</span>
          </div>
        </div>
        <div class="relative">
          <div class="absolute -top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          <div class="relative z-10 flex justify-center">
            <img src="/assets/android-mockup.png" alt="Bareey App" class="w-full max-w-[320px] drop-shadow-2xl transform hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. Features Section -->
  <section id="features" class="bg-gray-50 py-24">
    <div class="section-container">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="section-title">Everything you need in one platform</h2>
        <p class="text-gray-600 text-lg">Bareey is designed to make local commerce safe, fast, and reliable for everyone.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each features as feature}
          <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <svelte:component this={feature.icon} />
            </div>
            <h3 class="text-xl font-bold mb-3">{feature.title}</h3>
            <p class="text-gray-600 leading-relaxed">{feature.desc}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- 3. How It Works -->
  <section id="how-it-works" class="py-24">
    <div class="section-container">
      <h2 class="section-title">How Bareey Works</h2>
      <div class="grid lg:grid-cols-2 gap-16">
        <!-- For Buyers -->
        <div class="space-y-8">
          <h3 class="text-2xl font-bold flex items-center gap-2">
            <span class="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm">1</span>
            For Buyers
          </h3>
          <div class="space-y-6">
            {#each ['Search for products or services', 'Chat directly with sellers', 'Pay securely through the app', 'Receive and confirm your order'] as step, i}
              <div class="flex gap-4">
                <CheckCircle2 class="text-green-500 shrink-0" />
                <p class="text-gray-700 font-medium">{step}</p>
              </div>
            {/each}
          </div>
        </div>
        <!-- For Sellers -->
        <div class="space-y-8">
          <h3 class="text-2xl font-bold flex items-center gap-2">
            <span class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
            For Sellers
          </h3>
          <div class="space-y-6">
            {#each ['List your items or services', 'Manage inquiries in real-time', 'Complete the sale securely', 'Get paid directly to your account'] as step, i}
              <div class="flex gap-4">
                <CheckCircle2 class="text-blue-500 shrink-0" />
                <p class="text-gray-700 font-medium">{step}</p>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 4. Android App Showcase -->
  <section class="bg-black text-white py-24 overflow-hidden">
    <div class="section-container">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="order-2 lg:order-1">
          <img src="/assets/android-mockup.png" alt="App Interface" class="w-full max-w-[400px] mx-auto opacity-90" />
        </div>
        <div class="order-1 lg:order-2 space-y-8">
          <h2 class="text-4xl font-bold">Built for the modern mobile experience</h2>
          <p class="text-gray-400 text-lg leading-relaxed">
            Our Android app is optimized for speed and ease of use. Manage your marketplace activity on the go with instant notifications and a seamless interface.
          </p>
          <ul class="space-y-4">
            {#each ['Instant Push Notifications', 'Secure In-app Messaging', 'Easy Listing Management', 'Integrated Payment Tracking'] as item}
              <li class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span>{item}</span>
              </li>
            {/each}
          </ul>
          <a href="https://play.google.com/store/apps/details?id=com.bareeyinc.bareey" target="_blank" class="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-colors">
            Get the App Now
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. Trust & Credibility -->
  <section class="py-24 bg-white">
    <div class="section-container">
      <div class="bg-blue-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div class="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div class="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full"></div>
        </div>
        <div class="relative z-10 max-w-3xl mx-auto space-y-6">
          <ShieldCheck class="w-16 h-16 mx-auto mb-4" />
          <h2 class="text-3xl md:text-4xl font-bold">Your safety is our priority</h2>
          <p class="text-xl text-blue-100">
            We've built Bareey with multiple layers of protection to ensure every transaction is professional, transparent, and secure.
          </p>
          <div class="grid sm:grid-cols-3 gap-8 pt-8">
            <div>
              <div class="text-3xl font-bold mb-1">100%</div>
              <div class="text-blue-200 text-sm">Secure Payments</div>
            </div>
            <div>
              <div class="text-3xl font-bold mb-1">24/7</div>
              <div class="text-blue-200 text-sm">Support Access</div>
            </div>
            <div>
              <div class="text-3xl font-bold mb-1">Verified</div>
              <div class="text-blue-200 text-sm">Community Members</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. FAQ Section -->
  <section id="faq" class="py-24 bg-gray-50">
    <div class="section-container max-w-4xl">
      <h2 class="section-title">Frequently Asked Questions</h2>
      <div class="space-y-4">
        {#each faqs as faq, i}
          <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <button 
              class="w-full px-6 py-4 text-left flex justify-between items-center font-semibold hover:bg-gray-50 transition-colors"
              on:click={() => toggleFaq(i)}
            >
              <span>{faq.q}</span>
              {#if activeFaq === i}
                <ChevronUp class="w-5 h-5 text-gray-400" />
              {:else}
                <ChevronDown class="w-5 h-5 text-gray-400" />
              {/if}
            </button>
            {#if activeFaq === i}
              <div class="px-6 py-4 text-gray-600 border-t border-gray-100 bg-gray-50/50">
                {faq.a}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- 7. About Section -->
  <section id="about" class="py-24">
    <div class="section-container">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-6">
          <h2 class="text-4xl font-bold">Empowering local commerce through technology</h2>
          <p class="text-gray-600 text-lg leading-relaxed">
            Bareey was founded with a simple mission: to create a marketplace where trust is the foundation. We believe that by connecting communities through a secure and professional platform, we can empower individuals and small businesses to thrive.
          </p>
          <p class="text-gray-600 text-lg leading-relaxed">
            Our team is dedicated to building tools that make buying and selling as easy as sending a message, while maintaining the highest standards of security and professionalism.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-blue-50 p-8 rounded-2xl text-center">
            <div class="text-4xl font-bold text-blue-600 mb-2">2024</div>
            <div class="text-gray-600 font-medium">Founded</div>
          </div>
          <div class="bg-gray-50 p-8 rounded-2xl text-center">
            <div class="text-4xl font-bold text-gray-900 mb-2">1k+</div>
            <div class="text-gray-600 font-medium">Users</div>
          </div>
          <div class="bg-gray-50 p-8 rounded-2xl text-center">
            <div class="text-4xl font-bold text-gray-900 mb-2">5k+</div>
            <div class="text-gray-600 font-medium">Listings</div>
          </div>
          <div class="bg-blue-50 p-8 rounded-2xl text-center">
            <div class="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div class="text-gray-600 font-medium">Support</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 8. Contact/Support Section -->
  <section id="contact" class="py-24 bg-gray-900 text-white">
    <div class="section-container">
      <div class="grid lg:grid-cols-2 gap-16">
        <div class="space-y-8">
          <h2 class="text-4xl font-bold">Get in touch</h2>
          <p class="text-gray-400 text-lg">Have questions or need assistance? Our team is here to help you get the most out of Bareey.</p>
          <div class="space-y-6">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-blue-400">
                <Mail />
              </div>
              <div>
                <div class="text-sm text-gray-400">Email us at</div>
                <div class="text-lg font-semibold">support@bareey.com</div>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-blue-400">
                <Phone />
              </div>
              <div>
                <div class="text-sm text-gray-400">Call us</div>
                <div class="text-lg font-semibold">+1 (555) 000-0000</div>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-blue-400">
                <MapPin />
              </div>
              <div>
                <div class="text-sm text-gray-400">Visit us</div>
                <div class="text-lg font-semibold">123 Marketplace Ave, Tech City</div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white text-gray-900 p-8 rounded-3xl shadow-xl">
          <form class="space-y-4">
            <div class="grid sm:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="text-sm font-semibold">Name</label>
                <input type="text" placeholder="Your name" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-semibold">Email</label>
                <input type="email" placeholder="Your email" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-semibold">Subject</label>
              <input type="text" placeholder="How can we help?" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-semibold">Message</label>
              <textarea rows="4" placeholder="Your message..." class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
            </div>
            <button type="submit" class="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
