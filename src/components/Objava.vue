<template>
            <div class="card mb-3">
        <div class="card-body p-3" style="display:block; margin-left:auto; margin-right:auto;">
        <img :src="info.slika" />
        </div>
        <div class="card-body">
            <h5 class="card-title">{{info.naslov}}</h5>
            <p class="card-text" style="text-align: justify" >{{info.tekst}}</p>
            <hr>
            <p class="card-text"><small class="text-muted">Objavljeno : {{info.datum}}</small></p>
        </div>
        </div>
</template>

<script>


export default {
    props:["info"],
}


</script>

<style>
.card{
    padding:0px;
    box-shadow: 4px 4px 4px rgb(187, 187, 187);
}

.card-title{
    background-color: rgb(128, 194, 52);
    padding:10px;
    
}

</style>