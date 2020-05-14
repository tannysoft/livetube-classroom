<template>
  <div class="home">
    <Sidebar/>
    <!-- Page Content -->
      <div class="page-content">
      <Header/>
      <!-- Page Inner -->
      <div class="page-inner">
        <div class="page-title">
          <h3 class="breadcrumb-header">Room</h3>
        </div>
        <div id="main-wrapper">
          <div class="row">
            <div class="col-md-12">
              <div class="panel panel-white">
                <div class="panel-body">
                  <button type="button" class="btn btn-danger m-b-sm" data-toggle="modal" data-target="#myModal">Add New Room</button>
                  <!-- Modal -->
                  <form id="add-row-form" action="javascript:void(0);">
                    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                          </div>
                          <div class="modal-body">
                            <div class="form-group">
                              <input type="text" id="name-input" class="form-control" placeholder="Name" required>
                            </div>
                            <div class="form-group">
                              <input type="text" id="position-input" class="form-control" placeholder="Position" required>
                            </div>
                            <div class="form-group">
                              <input type="number" id="age-input" class="form-control" placeholder="Age" required>
                            </div>
                            <div class="form-group">
                              <input type="text" id="date-input" class="form-control date-picker" placeholder="Start Date" required>
                            </div>
                            <div class="form-group">
                              <input type="number" id="salary-input" class="form-control" placeholder="Salary" required>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                            <button type="submit" id="add-row" class="btn btn-success">Add</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div class="table-responsive">
                    <table id="example3" class="display table" style="width: 100%; cellspacing: 0;">
                      <thead>
                          <tr>
                            <th>UUID</th>
                            <th>Room Title</th>
                            <th>Create Date</th>
                            <th>Start Date</th>
                            <th>Status</th>
                          </tr>
                      </thead>
                      <tfoot>
                          <tr v-for="item in data" :key="item.id">
                            <th>{{ item.id }}</th>
                            <th>{{ item.name }}</th>
                            <th>{{ item.createtime }}</th>
                            <th>{{ item.starttime }}</th>
                            <th>{{ item.status }}</th>
                          </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div><!-- Row -->
        </div><!-- Main Wrapper -->
        <Footer/>
      </div><!-- /Page Inner -->
      <RightSidebar/>
    </div><!-- /Page Content -->
  </div>
</template>

<script>
// @ is an alias to /src
import axios from '@/axios'

import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import RightSidebar from '@/components/RightSidebar.vue'

export default {
  name: 'Home',
  components: {
    Sidebar,
    Header,
    Footer,
    RightSidebar
  },
  data () {
    return {
      data: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    const accessToken = localStorage.getItem('access_token')
    axios
      .get('meeting/list', { headers: { Authorization: `Bearer ${accessToken}` } })
      .then(response => {
        this.data = response.data.data
      })
      .catch(error => {
        localStorage.removeItem('access_token')
        console.log(error)
        this.errored = true
        this.$router.push('/login')
      })
      .finally(() => {
        this.loading = false
      })
  }
}
</script>

<style lang="scss">
  .home {
    min-width: 100vw;
    min-height: 100vh;
  }
</style>
