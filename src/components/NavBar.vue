<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <figure class="image is-48x24 p-2">
          <img
            class="is-rounded"
            src="../../public/icons/icon.png"
          />
        </figure>
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start"></div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <!-- <a class="button is-primary">
              <strong>Create</strong>
            </a> -->
            <a class="button is-danger"> Log Out </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
