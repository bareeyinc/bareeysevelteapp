<script>
  import {
    Download,
    Shield,
    MessageCircle,
    ArrowRight,
    Store,
    ShoppingBag,
    Briefcase,
    Smartphone,
    MapPin,
    BadgeCheck,
    Wallet,
    Star,
    Lightbulb,
    Rocket,
    Layers,
    CheckCircle2,
    Target
  } from 'lucide-svelte';

  const progressItems = [
    {
      icon: Lightbulb,
      title: 'Problem',
      text: 'Buying and selling through informal channels is often fragmented, risky and difficult to manage.'
    },
    {
      icon: Layers,
      title: 'Solution',
      text: 'Bareey combines products, local market trade and service discovery in one growing platform.'
    },
    {
      icon: Rocket,
      title: 'MVP Stage',
      text: 'We have built a working MVP and are refining it toward stronger validation, adoption and readiness for growth.'
    }
  ];

  const builtSoFar = [
    'A live MVP available on Google Play',
    'Core marketplace flow for buying and selling products',
    'A local market concept for everyday goods often underserved online',
    'A service discovery layer for trusted providers',
    'Trust-focused product direction around communication and transaction flow'
  ];

  const nextSteps = [
    'Deeper user testing and validation across target communities',
    'Better onboarding, trust and transaction experience',
    'Stronger service-booking and local market usability',
    'Improved product polish, reliability and retention',
    'Readiness for broader market rollout and partnerships'
  ];

  const trustItems = [
    {
      icon: Shield,
      title: 'Protected Transactions',
      text: 'Bareey is building a safer way for users to buy, sell and complete transactions with more confidence.'
    },
    {
      icon: BadgeCheck,
      title: 'Structured Commerce Flow',
      text: 'We are moving trade away from scattered chats into a clearer and more organized experience.'
    },
    {
      icon: MessageCircle,
      title: 'Real-Time Communication',
      text: 'Users can interact directly with sellers and service providers when decisions need to happen fast.'
    },
    {
      icon: Wallet,
      title: 'Built for Trust and Growth',
      text: 'Our MVP focuses on solving trust, clarity and payment coordination for Nigerian commerce.'
    }
  ];

  const categories = [
    {
      icon: ShoppingBag,
      title: 'Marketplace',
      text: 'A structured place to buy and sell products such as phones, electronics, fashion, furniture and everyday items.'
    },
    {
      icon: Store,
      title: 'Local Market',
      text: 'A dedicated space for local goods such as beans, maize, dry fish and other market essentials often ignored by modern platforms.'
    },
    {
      icon: Briefcase,
      title: 'Services',
      text: 'A service layer where users can discover and book trusted providers such as printers, tailors, designers and repairers.'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Explore the product',
      text: 'Understand how Bareey brings marketplace listings, local trade and services into one product experience.'
    },
    {
      step: '02',
      title: 'See the MVP in action',
      text: 'The MVP is already live and demonstrates the core experience we are building for Nigerian users.'
    },
    {
      step: '03',
      title: 'Grow with support',
      text: 'With the right backing, Bareey can deepen validation, improve usability and prepare for stronger growth readiness.'
    }
  ];

  const testimonials = [
    {
      name: 'Ibrahim',
      role: 'Seller',
      location: 'Kaduna',
      text: 'Bareey feels more organized than selling through random chats. It gives the process more structure.'
    },
    {
      name: 'Amina',
      role: 'Buyer',
      location: 'Abuja',
      text: 'What stood out to me is that it is trying to make local buying and selling feel more trustworthy.'
    },
    {
      name: 'Usman',
      role: 'Service Provider',
      location: 'Kaduna',
      text: 'It gives service providers a more professional way to be seen and contacted by customers.'
    }
  ];
</script>

<div class="bg-white text-gray-900 overflow-hidden">
  <section class="relative isolate px-4 pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-b from-white via-gray-50 to-white">
    <div class="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.12),transparent_45%),radial-gradient(circle_at_right,rgba(0,0,0,0.06),transparent_35%)]"></div>

    <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
      <div class="space-y-8">
        <div class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
          <BadgeCheck class="w-4 h-4 text-green-600" />
          Working MVP for products, local market trade and trusted services
        </div>

        <div class="space-y-5">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.98] text-gray-950">
            Building a simpler and safer way to trade across Nigeria
          </h1>
          <p class="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            Bareey is a growing commerce platform that combines products, local market goods and service providers in one experience. Our MVP is already live, and we are refining it for stronger validation, trust and readiness for growth.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4">
          <a href="#product-overview" class="px-8 py-4 bg-gray-950 text-white rounded-2xl font-semibold text-lg hover:-translate-y-0.5 transition-all shadow-lg flex items-center justify-center gap-2">
            View Product Overview <ArrowRight class="w-5 h-5" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.bareeyinc.bareey" target="_blank" class="px-8 py-4 bg-white border border-gray-300 text-gray-900 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
            <Download class="w-5 h-5" /> Try the MVP
          </a>
        </div>

        <div class="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-600 pt-1">
          <span class="flex items-center gap-2"><BadgeCheck class="w-4 h-4 text-green-600" /> Working MVP</span>
          <span class="flex items-center gap-2"><Shield class="w-4 h-4 text-green-600" /> Trust-focused flows</span>
          <span class="flex items-center gap-2"><MessageCircle class="w-4 h-4 text-green-600" /> Products and services</span>
          <span class="flex items-center gap-2"><Wallet class="w-4 h-4 text-green-600" /> Built for validation and growth</span>
        </div>
      </div>

      <div class="relative">
        <div class="rounded-[2rem] border border-gray-200 bg-white shadow-2xl p-4 md:p-5">
          <div class="rounded-[1.6rem] bg-gray-950 p-5 md:p-6 text-white space-y-5 min-h-[520px]">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-400">Bareey MVP</p>
                <h2 class="text-2xl font-bold">From idea to usable product</h2>
              </div>
              <Smartphone class="w-8 h-8 text-green-400" />
            </div>

            <div class="grid gap-4">
              <div class="rounded-2xl bg-white/10 border border-white/10 p-4">
                <p class="text-sm text-gray-300">What we are building</p>
                <p class="text-lg font-semibold">One platform, multiple commerce layers</p>
                <p class="text-sm text-gray-400 mt-2">Marketplace listings, local market items and trusted service discovery in one flow.</p>
              </div>

              <div class="rounded-2xl bg-white/10 border border-white/10 p-4">
                <p class="text-sm text-gray-300">Why it matters</p>
                <p class="text-lg font-semibold">Commerce still lacks structure and trust</p>
                <p class="text-sm text-gray-400 mt-2">Bareey focuses on making buying, selling and service booking feel safer and more organized.</p>
              </div>

              <div class="rounded-2xl bg-white/10 border border-white/10 p-4">
                <p class="text-sm text-gray-300">Current stage</p>
                <p class="text-lg font-semibold">Working MVP, improving toward stronger validation</p>
                <p class="text-sm text-gray-400 mt-2">The product is live today and ready for refinement, validation and broader market learning.</p>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div class="rounded-2xl bg-green-500/10 border border-green-400/20 p-4">
                  <p class="text-sm text-green-300">Focus</p>
                  <p class="font-semibold mt-1">Trust, usability and adoption</p>
                </div>
                <div class="rounded-2xl bg-white/10 border border-white/10 p-4">
                  <p class="text-sm text-gray-300">Proof</p>
                  <p class="font-semibold mt-1">MVP available on Google Play</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="product-overview" class="px-4 py-8 md:py-10 bg-white">
    <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
      {#each progressItems as item}
        <div class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <svelte:component this={item.icon} class="w-7 h-7 text-green-600 mb-4" />
          <h3 class="text-lg font-bold mb-2">{item.title}</h3>
          <p class="text-gray-600 leading-relaxed">{item.text}</p>
        </div>
      {/each}
    </div>
  </section>

  <section class="px-4 py-10 md:py-12 bg-white">
    <div class="max-w-6xl mx-auto rounded-[2.5rem] border border-gray-200 bg-gray-50 p-8 md:p-10 lg:p-12">
      <div class="max-w-3xl mb-10">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-green-700 mb-4">Progress and next steps</p>
        <h2 class="text-4xl md:text-5xl font-black tracking-tight mb-4">What we have built so far, and what support unlocks next</h2>
        <p class="text-lg text-gray-600 leading-relaxed">
          Bareey has already moved from concept to usable product. The next phase is about sharpening the experience, validating it more deeply and preparing it for stronger market traction.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-6">
        <div class="rounded-[2rem] bg-white border border-gray-200 p-8 shadow-sm">
          <div class="flex items-center gap-3 mb-6">
            <CheckCircle2 class="w-6 h-6 text-green-600" />
            <h3 class="text-2xl font-black">Built so far</h3>
          </div>
          <div class="space-y-4">
            {#each builtSoFar as item}
              <div class="flex items-start gap-3 text-gray-700">
                <CheckCircle2 class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <p class="leading-relaxed">{item}</p>
              </div>
            {/each}
          </div>
        </div>

        <div class="rounded-[2rem] bg-gray-950 text-white border border-gray-900 p-8 shadow-sm">
          <div class="flex items-center gap-3 mb-6">
            <Target class="w-6 h-6 text-green-400" />
            <h3 class="text-2xl font-black">Support unlocks next</h3>
          </div>
          <div class="space-y-4">
            {#each nextSteps as item}
              <div class="flex items-start gap-3 text-gray-200">
                <ArrowRight class="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <p class="leading-relaxed">{item}</p>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="px-4 py-20 md:py-24 bg-gray-50">
    <div class="max-w-6xl mx-auto space-y-14">
      <div class="max-w-3xl">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-green-700 mb-4">Platform overview</p>
        <h2 class="text-4xl md:text-5xl font-black tracking-tight mb-4">A broader commerce model than a typical marketplace</h2>
        <p class="text-lg text-gray-600 leading-relaxed">
          Bareey is not only about product listings. It is designed to support formal and informal trade across multiple categories that matter in everyday Nigerian commerce.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-6">
        {#each categories as item}
          <div class="rounded-[2rem] bg-white border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all group">
            <div class="w-14 h-14 rounded-2xl bg-gray-950 text-white flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
              <svelte:component this={item.icon} class="w-7 h-7" />
            </div>
            <h3 class="text-2xl font-black mb-3">{item.title}</h3>
            <p class="text-gray-600 leading-relaxed mb-8">{item.text}</p>
            <div class="flex items-center gap-2 text-green-700 font-semibold">
              Learn more <ArrowRight class="w-4 h-4" />
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="px-4 py-10 md:py-12 bg-white">
    <div class="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {#each trustItems as item}
        <div class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <svelte:component this={item.icon} class="w-7 h-7 text-green-600 mb-4" />
          <h3 class="text-lg font-bold mb-2">{item.title}</h3>
          <p class="text-gray-600 leading-relaxed">{item.text}</p>
        </div>
      {/each}
    </div>
  </section>

  <section id="how-it-works" class="px-4 py-20 md:py-24 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="max-w-3xl mb-14">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-green-700 mb-4">Why now</p>
        <h2 class="text-4xl md:text-5xl font-black tracking-tight mb-4">A product with a clear next step</h2>
        <p class="text-lg text-gray-600 leading-relaxed">
          Bareey has moved beyond idea stage. The goal now is to strengthen the product, validate usage more deeply and prepare for a more scalable rollout.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        {#each howItWorks as item}
          <div class="rounded-[2rem] border border-gray-200 p-8 bg-gray-50">
            <div class="text-5xl font-black text-gray-200 mb-5">{item.step}</div>
            <h3 class="text-2xl font-black mb-3">{item.title}</h3>
            <p class="text-gray-600 leading-relaxed">{item.text}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="px-4 py-20 md:py-24 bg-gray-950 text-white">
    <div class="max-w-6xl mx-auto">
      <div class="max-w-3xl mb-14">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-green-400 mb-4">Early validation</p>
        <h2 class="text-4xl md:text-5xl font-black tracking-tight mb-4">Early reactions point to a real need</h2>
        <p class="text-lg text-gray-300 leading-relaxed">
          These early impressions reflect why Bareey matters: people want a better structure for everyday trade and trusted service discovery.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        {#each testimonials as item}
          <div class="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div class="flex gap-1 mb-5">
              {#each Array(5) as _}
                <Star class="w-4 h-4 fill-green-400 text-green-400" />
              {/each}
            </div>
            <p class="text-lg leading-relaxed text-gray-100 mb-8">“{item.text}”</p>
            <div class="space-y-1">
              <p class="font-bold text-white">{item.name}</p>
              <p class="text-sm text-green-300">{item.role}</p>
              <p class="text-sm text-gray-400 flex items-center gap-2"><MapPin class="w-4 h-4" /> {item.location}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="px-4 py-20 md:py-24 bg-white">
    <div class="max-w-5xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-gray-950 via-gray-900 to-green-950 px-8 py-14 md:px-14 md:py-16 text-white text-center shadow-2xl">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-green-300 mb-4">Working MVP</p>
      <h2 class="text-4xl md:text-5xl font-black tracking-tight mb-5">See where Bareey is today</h2>
      <p class="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
        Bareey is already live as an MVP. Explore the product direction, understand the model and, if needed, try the current version on Google Play.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#product-overview" class="px-8 py-4 bg-white text-gray-950 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all">
          Review Product Overview
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.bareeyinc.bareey" target="_blank" class="px-8 py-4 border border-white/20 text-white rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all">
          Try the MVP on Google Play
        </a>
      </div>
    </div>
  </section>

  <footer class="px-4 py-14 bg-gray-950 text-white">
    <div class="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
      <div class="md:col-span-2">
        <h3 class="text-2xl font-black mb-4">Bareey</h3>
        <p class="text-gray-400 max-w-lg leading-relaxed">
          Bareey is building a more trusted commerce experience where people can buy products, trade local goods and connect with reliable service providers in one growing platform.
        </p>
      </div>

      <div>
        <h4 class="font-bold mb-4">Company</h4>
        <div class="space-y-3 text-gray-400">
          <a href="#product-overview" class="block hover:text-white transition-colors">Product overview</a>
          <a href="#how-it-works" class="block hover:text-white transition-colors">Why now</a>
          <a href="/privacy" class="block hover:text-white transition-colors">Privacy Policy</a>
          <a href="/terms" class="block hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>

      <div>
        <h4 class="font-bold mb-4">Contact</h4>
        <div class="space-y-3 text-gray-400">
          <a href="mailto:support@bareey.com" class="block hover:text-white transition-colors">support@bareey.com</a>
          <p>+234 902 138 8401</p>
          <p>Kaduna State, Nigeria</p>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto border-t border-white/10 mt-10 pt-8 text-sm text-gray-500">
      © 2026 Bareey Inc. All rights reserved.
    </div>
  </footer>
</div>

<style>
  :global(body) {
    font-family: 'Inter', sans-serif;
    background: #ffffff;
  }
</style>