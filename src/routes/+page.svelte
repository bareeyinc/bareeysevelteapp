<script>
  import {
    Download,
    Shield,
    MessageCircle,
    ArrowRight,
    CheckCircle,
    Store,
    ShoppingBag,
    Briefcase,
    Smartphone,
    MapPin,
    BadgeCheck,
    Wallet,
    Star
  } from 'lucide-svelte';

  const trustItems = [
    {
      icon: Shield,
      title: 'Protected Payments',
      text: 'Your money stays protected until the transaction is completed.'
    },
    {
      icon: BadgeCheck,
      title: 'Verified Users',
      text: 'Buy from trusted sellers and connect with reliable service providers.'
    },
    {
      icon: MessageCircle,
      title: 'Real-Time Chat',
      text: 'Chat directly with buyers, sellers and service providers when it matters.'
    },
    {
      icon: Wallet,
      title: 'Fast Payouts',
      text: 'Sellers and service providers get paid quickly after successful delivery.'
    }
  ];

  const categories = [
    {
      icon: ShoppingBag,
      title: 'Marketplace',
      text: 'Shop phones, electronics, fashion, furniture and thousands of everyday products.'
    },
    {
      icon: Store,
      title: 'Local Market',
      text: 'Buy beans, maize, dry fish and local essentials from trusted sellers near you.'
    },
    {
      icon: Briefcase,
      title: 'Services',
      text: 'Book trusted printers, tailors, designers, repairers and other professionals.'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Create an account',
      text: 'Join Bareey in seconds and start exploring products and services.'
    },
    {
      step: '02',
      title: 'Buy, sell or book',
      text: 'Find what you need, post your products or book a trusted provider.'
    },
    {
      step: '03',
      title: 'Pay securely',
      text: 'Bareey helps protect payments while transactions are being completed.'
    }
  ];

  const testimonials = [
    {
      name: 'Ibrahim',
      role: 'Seller',
      location: 'Kaduna',
      text: 'I sold my first phone in 2 days and the process felt simple and secure.'
    },
    {
      name: 'Amina',
      role: 'Buyer',
      location: 'Abuja',
      text: 'Bareey feels more organized than random social media selling. I can actually trust the process.'
    },
    {
      name: 'Usman',
      role: 'Printing Service Provider',
      location: 'Kaduna',
      text: 'It gives my business a more professional way to get customer requests and bookings.'
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
          Trusted marketplace experience for products, local goods and services
        </div>

        <div class="space-y-5">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.98] text-gray-950">
            Buy, sell and book trusted services across Nigeria
          </h1>
          <p class="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            Bareey brings products, local market goods and trusted service providers together in one secure app. Buy safely, sell confidently and grow faster.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.bareeyinc.bareey"
            target="_blank"
            class="px-8 py-4 bg-gray-950 text-white rounded-2xl font-semibold text-lg hover:-translate-y-0.5 transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <Download class="w-5 h-5" /> Download the App
          </a>
          <a
            href="#how-it-works"
            class="px-8 py-4 bg-white border border-gray-300 text-gray-900 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
          >
            How Bareey Works <ArrowRight class="w-5 h-5" />
          </a>
        </div>

        <div class="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-600 pt-1">
          <span class="flex items-center gap-2"><Shield class="w-4 h-4 text-green-600" /> Protected payments</span>
          <span class="flex items-center gap-2"><BadgeCheck class="w-4 h-4 text-green-600" /> Verified users</span>
          <span class="flex items-center gap-2"><MessageCircle class="w-4 h-4 text-green-600" /> Real-time chat</span>
          <span class="flex items-center gap-2"><Wallet class="w-4 h-4 text-green-600" /> Fast payouts</span>
        </div>
      </div>

      <div class="relative">
        <div class="rounded-[2rem] border border-gray-200 bg-white shadow-2xl p-4 md:p-5">
          <div class="rounded-[1.6rem] bg-gray-950 p-5 md:p-6 text-white space-y-5 min-h-[520px]">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-400">Bareey App Preview</p>
                <h2 class="text-2xl font-bold">Everything in one place</h2>
              </div>
              <Smartphone class="w-8 h-8 text-green-400" />
            </div>

            <div class="grid gap-4">
              <div class="rounded-2xl bg-white/10 border border-white/10 p-4">
                <div class="flex items-start justify-between gap-3">
                  <div>
                    <p class="text-sm text-gray-300">Marketplace</p>
                    <p class="text-lg font-semibold">Shop products with confidence</p>
                  </div>
                  <ShoppingBag class="w-5 h-5 text-green-400" />
                </div>
                <p class="text-sm text-gray-400 mt-2">Phones, fashion, electronics, furniture and more.</p>
              </div>

              <div class="rounded-2xl bg-white/10 border border-white/10 p-4">
                <div class="flex items-start justify-between gap-3">
                  <div>
                    <p class="text-sm text-gray-300">Local Market</p>
                    <p class="text-lg font-semibold">Find everyday essentials</p>
                  </div>
                  <Store class="w-5 h-5 text-green-400" />
                </div>
                <p class="text-sm text-gray-400 mt-2">Local foods and market items from trusted sellers near you.</p>
              </div>

              <div class="rounded-2xl bg-white/10 border border-white/10 p-4">
                <div class="flex items-start justify-between gap-3">
                  <div>
                    <p class="text-sm text-gray-300">Services</p>
                    <p class="text-lg font-semibold">Book verified professionals</p>
                  </div>
                  <Briefcase class="w-5 h-5 text-green-400" />
                </div>
                <p class="text-sm text-gray-400 mt-2">Printers, tailors, repairers, designers and more.</p>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div class="rounded-2xl bg-green-500/10 border border-green-400/20 p-4">
                  <p class="text-sm text-green-300">Trust signal</p>
                  <p class="font-semibold mt-1">Protected payment flow</p>
                </div>
                <div class="rounded-2xl bg-white/10 border border-white/10 p-4">
                  <p class="text-sm text-gray-300">Communication</p>
                  <p class="font-semibold mt-1">Real-time chat & order updates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="px-4 py-8 md:py-10 bg-white">
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

  <section class="px-4 py-20 md:py-24 bg-gray-50">
    <div class="max-w-6xl mx-auto space-y-14">
      <div class="max-w-3xl">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-green-700 mb-4">Explore Bareey</p>
        <h2 class="text-4xl md:text-5xl font-black tracking-tight mb-4">Everything you need, all in one place</h2>
        <p class="text-lg text-gray-600 leading-relaxed">
          Whether you want to buy products, shop local goods or book trusted services, Bareey gives you one clear platform to do it all.
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
              Explore <ArrowRight class="w-4 h-4" />
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section id="how-it-works" class="px-4 py-20 md:py-24 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="max-w-3xl mb-14">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-green-700 mb-4">How it works</p>
        <h2 class="text-4xl md:text-5xl font-black tracking-tight mb-4">A simpler and safer way to trade</h2>
        <p class="text-lg text-gray-600 leading-relaxed">
          Bareey is designed to make buying, selling and booking services feel more trustworthy, more organized and more professional.
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
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-green-400 mb-4">Why people choose Bareey</p>
        <h2 class="text-4xl md:text-5xl font-black tracking-tight mb-4">Built for trust, clarity and growth</h2>
        <p class="text-lg text-gray-300 leading-relaxed">
          People do not just want another listing site. They want a platform that feels safer, clearer and more serious.
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
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-green-300 mb-4">Start with Bareey</p>
      <h2 class="text-4xl md:text-5xl font-black tracking-tight mb-5">Ready to buy, sell or grow your business?</h2>
      <p class="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
        Join Bareey today and discover a more trusted way to trade products, local market items and services across Nigeria.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://play.google.com/store/apps/details?id=com.bareeyinc.bareey"
          target="_blank"
          class="px-8 py-4 bg-white text-gray-950 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all"
        >
          Download on Google Play
        </a>
        <a
          href="mailto:support@bareey.com"
          class="px-8 py-4 border border-white/20 text-white rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all"
        >
          Contact Us
        </a>
      </div>
    </div>
  </section>

  <footer class="px-4 py-14 bg-gray-950 text-white">
    <div class="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
      <div class="md:col-span-2">
        <h3 class="text-2xl font-black mb-4">Bareey</h3>
        <p class="text-gray-400 max-w-lg leading-relaxed">
          Bareey is building a more trusted commerce experience where people can buy products, sell confidently and book reliable services in one place.
        </p>
      </div>

      <div>
        <h4 class="font-bold mb-4">Company</h4>
        <div class="space-y-3 text-gray-400">
          <a href="#how-it-works" class="block hover:text-white transition-colors">How it works</a>
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