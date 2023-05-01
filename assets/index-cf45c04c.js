(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const r=document.querySelector("form"),l=r.querySelector("input"),v=document.querySelector(".pokemon_error"),f=document.querySelector(".pokemon_info"),_=document.querySelector(".loading"),u="https://pokeapi.co/api/v2/pokemon/",p="https://pokeapi.co/api/v2/ability/",m=()=>{r.addEventListener("submit",async e=>{e.preventDefault(),h();const i=l.value;if(i.length>=1){const o=u+i,t=await fetch(o).then(s=>s.json());y(t),console.log(t),n(),d()}else n(),d();r.reset()})},d=()=>{v.innerHTML=""},h=()=>{v.innerHTML=` 
        <div class="pokemon_error_container">
                <h1>No se ha encontrado el pokemon "${l.value}"</h1>
        </div>`},y=e=>{f.innerHTML=`
        <div class="container_poke">
                <div class="container_info">

                        <div class="line"></div>

                        <div class="poke_info_datos">
                                <h3>${e.name}</h3>
                                <h4>EXP: ${e.base_experience}</h4>
                                <h4>Tipo: ${e.types[0].type.name}</h4>
                                <h4>Peso: ${e.weight}</h4>
                        </div>

                        <div class="poke_varios"> 
                                <div class="poke_info_abilities">
                                        <div class="poke_info_ability">Habilidades</div>
                                        ${e.abilities.reduce((i,a)=>i+`
                                        <div class="poke_info_ability">${a.ability.name}</div>
                                        `,"")}
                                </div>

                                <div class="poke_info_stats">
                                        <div class="poke_info_stat">Stats</div>
                                        <div class="poke_info_stat">${e.stats[0].stat.name} : ${e.stats[0].base_stat}</div>
                                        <div class="poke_info_stat">${e.stats[1].stat.name} : ${e.stats[1].base_stat}</div>
                                        <div class="poke_info_stat">${e.stats[2].stat.name} : ${e.stats[2].base_stat}</div>
                                        <div class="poke_info_stat">${e.stats[3].stat.name} : ${e.stats[3].base_stat}</div>
                                        <div class="poke_info_stat">${e.stats[4].stat.name} : ${e.stats[4].base_stat}</div>
                                        <div class="poke_info_stat">${e.stats[5].stat.name} : ${e.stats[5].base_stat}</div>
                                </div>

                                <div class="poke_info_moves">
                                        <div class="poke_info_move">Moves</div>
                                        <div class="poke_info_move">${e.moves[0].move.name}</div>
                                        <div class="poke_info_move">${e.moves[1].move.name}</div>
                                        <div class="poke_info_move">${e.moves[2].move.name}</div>
                                        <div class="poke_info_move">${e.moves[3].move.name}</div>
                                        <div class="poke_info_move">${e.moves[4].move.name}</div>
                                </div>
                        </div>
                </div>

                <div class="poke_info_picture">
                        <img src="${e.sprites.other.home.front_default} "alt="${e.species.name}">
                        <div class="poke_number">#${e.id}</div>
                        <div class="img_container"></div>
                        <div class="img_container_2"></div>
                </div>
        </div>
        `,b(),$(),n()},$=()=>{f.querySelector("img").addEventListener("load",()=>{console.log("imagen cargada")})},b=()=>{document.querySelectorAll(".poke_info_ability").forEach(i=>{i.addEventListener("click",async a=>{g();const o=i.innerHTML,t=await fetch(p+o).then(s=>s.json());console.log(t),n()})})},g=()=>{_.classList.add("opened")},n=()=>{_.classList.remove("opened")};window.addEventListener("load",()=>{m()});
