<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="max-w-4xl mx-auto bg-white shadow-md container">
      <header class="bg-purple-200 p-6 flex flex-col md:flex-row justify-around items-center">
        <a href="/" class="text-2xl font-bold text-purple-700 mb-4 md:mb-0">
          {{ $t('title') }}
        </a>
        <div class="text-center md:text-left">
          <p>{{ $t('tel') }}: +420725543082</p>
          <p>{{ $t('addr') }}: Grohova 28, 60200</p>
          <p class="font-semibold">{{ $t('opening_hours') }}</p>
        </div>
      </header>

      <nav class="bg-orange-100 flex flex-col md:flex-row justify-around p-6">
        <a href="#prices" class="font-bold text-lg text-gray-700 px-4 py-2 border-b-2 border-transparent hover:border-gray-700">{{ $t('prices') }}</a>
        <a href="#ebikes" class="font-bold text-lg text-gray-700 px-4 py-2 border-b-2 border-transparent hover:border-gray-700">{{ $t('our_ebikes') }}</a>
        <a href="#rules" class="font-bold text-lg text-gray-700 px-4 py-2 border-b-2 border-transparent hover:border-gray-700">{{ $t('rules') }}</a>
        <div class="flex space-x-4">
          <button @click="switchLocale('en')" class="font-bold text-lg text-gray-700 px-4 py-2 border-b-2 border-transparent hover:border-gray-700">EN</button>
          <button @click="switchLocale('cs')" class="font-bold text-lg text-gray-700 px-4 py-2 border-b-2 border-transparent hover:border-gray-700">CS</button>
        </div>
      </nav>

      <main>
        <section id="prices" class="bg-green-100 p-6">
          <div class="mb-6">
            <h2 class="text-xl font-bold mb-2">{{ $t('prices') }}</h2>
            <p class="font-bold">{{ $t('deposit') }}</p>
          </div>
          <div class="flex flex-col md:flex-row md:justify-around">
            <div class="mb-4 md:mb-0">
              <table class="table-fixed border-collapse border border-green-400 w-full md:w-auto">
                <thead>
                  <tr>
                    <th class="border border-green-400 px-4 py-2">{{ $t('days') }}</th>
                    <th class="border border-green-400 px-4 py-2">{{ $t('price_czk') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-green-400 px-4 py-2">1</td>
                    <td class="border border-green-400 px-4 py-2">700</td>
                  </tr>
                  <tr>
                    <td class="border border-green-400 px-4 py-2">3</td>
                    <td class="border border-green-400 px-4 py-2">2000</td>
                  </tr>
                  <tr>
                    <td class="border border-green-400 px-4 py-2">7</td>
                    <td class="border border-green-400 px-4 py-2">4000</td>
                  </tr>
                  <tr>
                    <td class="border border-green-400 px-4 py-2">> 7</td>
                    <td class="border border-green-400 px-4 py-2">500</td>
                  </tr>
                  <tr>
                    <td class="border border-green-400 px-4 py-2">> 14</td>
                    <td class="border border-green-400 px-4 py-2">400</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <table class="table-fixed border-collapse border border-green-400 w-full md:w-auto">
                <thead>
                  <tr>
                    <th class="border border-green-400 px-4 py-2">{{ $t('additions') }}</th>
                    <th class="border border-green-400 px-4 py-2">{{ $t('price') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-green-400 px-4 py-2">{{ $t('helms') }}</td>
                    <td class="border border-green-400 px-4 py-2">{{ $t('free') }}</td>
                  </tr>
                  <tr>
                    <td class="border border-green-400 px-4 py-2">{{ $t('phone_mounts') }}</td>
                    <td class="border border-green-400 px-4 py-2">{{ $t('free') }}</td>
                  </tr>
                  <tr>
                    <td class="border border-green-400 px-4 py-2">{{ $t('bags') }}</td>
                    <td class="border border-green-400 px-4 py-2">{{ $t('free') }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="ebikes" class="bg-blue-50 p-6">
          <h2 class="text-xl font-bold mb-2">{{ $t('our_ebikes') }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-gray-200 p-4 rounded-lg">
              <img src="assets/img/1_2118.jpg" alt="Crussis e-Atland 5.8 2023" class="w-full h-48 object-cover rounded-lg mb-2">
              <h3 class="font-bold">Crussis e-Atland 5.8 2023</h3>
              <p>Dojedz: 115 km</p>
              <p>Velikost rámu: 18", 20"</p>
              <p>Průměr kol: 27.5"</p>
            </div>
            <div class="bg-gray-200 p-4 rounded-lg">
              <img src="assets/img/1_2051.jpg" alt="Crussis e-Cross 7.8 2023" class="w-full h-48 object-cover rounded-lg mb-2">
              <h3 class="font-bold">Crussis e-Cross 7.8 2023</h3>
              <p>Dojedz: 130 km</p>
              <p>Velikost rámu: 18", 20"</p>
              <p>Průměr kol: 28"</p>
            </div>
            <div class="bg-gray-200 p-4 rounded-lg">
              <img src="assets/img/1_2101.jpg" alt="Crussis e-Atland 5.8 2023" class="w-full h-48 object-cover rounded-lg mb-2">
              <h3 class="font-bold">Crussis e-Atland 5.8 2023</h3>
              <p>Dojedz: 50 km</p>
              <p>Velikost rámu: 15", 17"</p>
              <p>Průměr kol: 28"</p>
            </div>
          </div>
        </section>

        <section id="rules" class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-bold mb-2">{{ $t('rules') }}</h2>
          <ul class="list-disc list-inside">
            <li>{{ $t('rental_terms') }}</li>
            <li>{{ $t('deposit_requirement') }}</li>
            <li>{{ $t('rental_agreement') }}:
              <a href='/agreement-example-en.pdf' class="text-blue-500 hover:underline">{{ $t('english_lang') }}</a>,
              <a href='/agreement-example-cz.pdf' class="text-blue-500 hover:underline">{{ $t('czech_lang') }}</a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    switchLocale(locale) {
      this.$i18n.setLocale(locale);
    }
  }
}
</script>
