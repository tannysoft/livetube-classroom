<template>
  <div id="app" class="page-container">
    <Sidebar/>
    <!-- Page Content -->
    <div class="page-content">
      <Header/>

      <!-- Page Inner -->
      <div class="page-inner">
          <div class="page-title">
            <h3 class="breadcrumb-header">Blank Page</h3>
          </div>
        <div id="main-wrapper">
          <div class="row">
              Test
          </div><!-- Row -->
        </div><!-- Main Wrapper -->
        <Footer/>
      </div><!-- /Page Inner -->
      <RightSidebar/>
    </div><!-- /Page Content -->
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import RightSidebar from './components/RightSidebar.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Header,
    Footer,
    RightSidebar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Ubuntu');
</style>
