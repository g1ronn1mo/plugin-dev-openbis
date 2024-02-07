<script setup lang="ts">


var v3 = new openbis.openbis();

v3.login("admin", "admin").done(function() {

// invoke other API methods, for instance search for spaces
v3.searchSpaces(new openbis.SpaceSearchCriteria(), new openbis.SpaceFetchOptions()).done(function(result) {

    alert("Number of spaces: " + result.getObjects().length);

    // logout to release the resources related with the session
    v3.logout();
});


});

</script>

<template>
  
</template>

<style scoped lang="css">

</style>
