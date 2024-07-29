<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="max-w-4xl mx-auto bg-white shadow-md container">
      <header class="bg-purple-200 p-6 flex flex-col md:flex-row justify-around items-center">
        <a href="/" class="text-2xl font-bold text-purple-700 mb-4 md:mb-0">
          eBikes Rental Brno
        </a>
        <div class="text-center md:text-left">
          <p>Tel: +420725543082</p>
          <p>Addr: Grohova 28, 60200</p>
          <p class="font-semibold">Opening hours: Only up to prior agreement</p>
        </div>
      </header>
      <nav class="bg-orange-100 flex flex-col md:flex-row justify-around p-6">
        <a href="#prices" class="font-bold text-lg text-gray-700 px-4 py-2 border-b-2 border-transparent hover:border-gray-700">Prices</a>
        <a href="#ebikes" class="font-bold text-lg text-gray-700 px-4 py-2 border-b-2 border-transparent hover:border-gray-700">Our eBikes</a>
        <a href="#rules" class="font-bold text-lg text-gray-700 px-4 py-2 border-b-2 border-transparent hover:border-gray-700">Rules</a>
      </nav>

      <main>
        <section id="prices" class="bg-green-100 p-6">
          <div class="mb-6">
            <h2 class="text-xl font-bold mb-2">Prices</h2>
            <p class="font-bold">Deposit: 5000 per 1 eBike</p>
          </div>
          <div class="flex flex-col md:flex-row md:justify-around">
            <div class="mb-4 md:mb-0">
              <table class="table-fixed border-collapse border border-green-400 w-full md:w-auto">
                <thead>
                  <tr>
                    <th class="border border-green-400 px-4 py-2">Days</th>
                    <th class="border border-green-400 px-4 py-2">Price (CZK)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-green-400 px-4 py-2">1 day</td>
                    <td class="border border-green-400 px-4 py-2">700</td>
                  </tr>
                  <tr>
                    <td class="border border-green-400 px-4 py-2">3 days</td>
                    <td class="border border-green-400 px-4 py-2">2000</td>
                  </tr>
                  <tr>
                    <td class="border border-green-400 px-4 py-2">7 days</td>
                    <td class="border border-green-400 px-4 py-2">4000</td>
                  </tr>
                  <tr>
                    <td class="border border-green-400 px-4 py-2">> 7 days</td>
                    <td class="border border-green-400 px-4 py-2">500 per day</td>
                  </tr>
                  <tr>
                    <td class="border border-green-400 px-4 py-2">> 14 days</td>
                    <td class="border border-green-400 px-4 py-2">400 per day</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <table class="table-fixed border-collapse border border-green-400 w-full md:w-auto">
                <thead>
                  <tr>
                    <th class="border border-green-400 px-4 py-2">Additions</th>
                    <th class="border border-green-400 px-4 py-2">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-green-400 px-4 py-2">Helms</td>
                    <td class="border border-green-400 px-4 py-2">Free</td>
                  </tr>
                  <tr>
                    <td class="border border-green-400 px-4 py-2">Phone mounts</td>
                    <td class="border border-green-400 px-4 py-2">Free</td>
                  </tr>
                  <tr>
                    <td class="border border-green-400 px-4 py-2">Bags</td>
                    <td class="border border-green-400 px-4 py-2">Free</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="ebikes" class="bg-blue-50 p-6">
          <h2 class="text-xl font-bold mb-2">Our eBikes</h2>
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
          <h2 class="text-xl font-bold mb-2">Rules</h2>
          <ul class="list-disc list-inside">
            <li>
              Termín zápůjčky (vyzvednutí/vrácení) je nutné domluvit předem na telefonním čísle
              <a href="tel:+420725543082" class="text-blue-500 hover:underline">+420 725 543 082</a>
              nebo e-mailem na adrese
              <a href="mailto:brno.ebike.rent@gmail.com" class="text-blue-500 hover:underline">brno.ebike.rent@gmail.com</a>.
            </li>
            <li>
              Při převzetí elektrokola je nutné složit v hotovosti vratnou kauci <b>10 000 korun</b>. Nutné jsou dva doklady totožnosti s fotografií (OP, ŘP, pas, ...)
            </li>
          </ul>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'eBikes Rental Brno',
      meta: [
        { hid: 'og:image', property: 'og:image', content: '/download.jpeg' },
      ]
    }
  }
}
</script>
