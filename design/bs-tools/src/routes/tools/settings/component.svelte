<script lang="ts">
	let { route } = $props();
  </script>
  

  <section class="page-layer nwp">
    <div class="container-fluid">
      <div class="p-5 mb-4 bg-bo py-5">
        <h1 class="display-5 fw-bold">{route.route.props?.title}</h1>
        <p class="col-md-8 fs-4">
          Using a series of utilities, you can create this jumbotron, just like
          the one in previous versions of Bootstrap. Check out the examples below
          for how you can remix and restyle it to your liking.
        </p>
        <button class="btn btn-primary btn-lg" type="button"
          >Example button</button>
      </div>
    </div>
  </section>
  