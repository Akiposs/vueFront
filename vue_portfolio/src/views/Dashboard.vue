<template>
  <v-app>
    <main>
      <section>
        <FirstHeader/>
        <SecondHeader/>
      </section>
      <section>
        <Dashboard/>
      </section>
      <section>
        <Footer/>
      </section>
    </main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import FirstHeader from '@/components/Header/DashboardFirstHeader.vue'
import SecondHeader from '@/components/Header/DashboardSecondHeader.vue'
import Footer from '@/components/Footer.vue'
import Dashboard from '@/components/Dashboard.vue'

export default {
  components: {
    FirstHeader,
    SecondHeader,
    Dashboard,
    Footer
  }
}
</script>
