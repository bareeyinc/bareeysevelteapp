<script>
  import { FileText, ArrowLeft } from 'lucide-svelte';
</script>

<div class="bg-gray-50 min-h-screen py-20">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <a href="/" class="inline-flex items-center text-blue-600 font-semibold mb-8 hover:text-blue-700 transition-colors">
      <ArrowLeft class="mr-2 w-5 h-5" /> Back to Home
    </a>
    
    <div class="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
      <div class="flex items-center gap-4 mb-8">
        <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
          <FileText />
        </div>
        <h1 class="text-3xl md:text-4xl font-bold">Terms of Service</h1>
      </div>

      <div class="prose prose-blue max-w-none space-y-8 text-gray-600">
        <section>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing or using the Bareey App, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on Bareey's website for personal, non-commercial transitory viewing only.</p>
          <p class="mt-4">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul class="list-disc pl-6 space-y-2 mt-4">
            <li>Modify or copy the materials.</li>
            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial).</li>
            <li>Attempt to decompile or reverse engineer any software contained on Bareey's website.</li>
            <li>Remove any copyright or other proprietary notations from the materials.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">3. Marketplace Rules</h2>
          <p>Bareey provides a platform for users to buy and sell products and services. We do not own or sell the items listed by users. Users are responsible for the accuracy of their listings and the fulfillment of their transactions.</p>
          <ul class="list-disc pl-6 space-y-2 mt-4">
            <li>Prohibited Items: Users may not list illegal, stolen, or harmful items.</li>
            <li>Professionalism: All users must interact with respect and professionalism.</li>
            <li>Fees: Bareey may charge service fees for certain transactions, which will be clearly disclosed.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">4. Disclaimer</h2>
          <p>The materials on Bareey's website are provided on an 'as is' basis. Bareey makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">5. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Bareey operates and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
        </section>
      </div>
    </div>
  </div>
</div>
