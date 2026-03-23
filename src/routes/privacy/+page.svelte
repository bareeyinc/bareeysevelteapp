<script>
  import { Shield, ArrowLeft } from 'lucide-svelte';
</script>

<div class="bg-gray-50 min-h-screen py-20">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <a href="/" class="inline-flex items-center text-blue-600 font-semibold mb-8 hover:text-blue-700 transition-colors">
      <ArrowLeft class="mr-2 w-5 h-5" /> Back to Home
    </a>
    
    <div class="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
      <div class="flex items-center gap-4 mb-8">
        <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
          <Shield />
        </div>
        <h1 class="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
      </div>

      <div class="prose prose-blue max-w-none space-y-8 text-gray-600">
        <section>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
          <p>Welcome to Bareey. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at support@bareey.com.</p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
          <p>We collect personal information that you voluntarily provide to us when registering at the Bareey App, expressing an interest in obtaining information about us or our products and services, when participating in activities on the App or otherwise contacting us.</p>
          <ul class="list-disc pl-6 space-y-2 mt-4">
            <li>Name and Contact Data (Email, Phone Number)</li>
            <li>Credentials (Passwords, Security Information)</li>
            <li>Payment Data (Processed by secure third-party providers)</li>
            <li>Social Media Login Data (Google Sign-In)</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
          <p>We use personal information collected via our App for a variety of business purposes described below:</p>
          <ul class="list-disc pl-6 space-y-2 mt-4">
            <li>To facilitate account creation and logon process.</li>
            <li>To send administrative information to you.</li>
            <li>To fulfill and manage your orders.</li>
            <li>To post testimonials with your consent.</li>
            <li>To deliver targeted advertising to you.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">4. Data Deletion</h2>
          <p>You have the right to request the deletion of your personal data. You can do this directly within the App settings or by contacting our support team. Once requested, your data will be removed from our active databases within 30 days.</p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">5. Contact Us</h2>
          <p>If you have questions or comments about this policy, you may email us at support@bareey.com or by post to our physical address provided in the contact section.</p>
        </section>
      </div>
    </div>
  </div>
</div>
