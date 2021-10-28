
const vm = Vue.createApp({
    data() {
        return {
            name: 'Darec McDaniel',
            greeting: 'Hello World',
            title: 'City Search',
            text: '',
            size: 250
        }
    },
    template:`
        <h4 class="m-3">{{ title }}</h4>        
        <form action="http://google.com/search" target="_blank">
        <input name="q">
        <button class="btn btn-outline-info" type="submit">Search</button>
    </form>
        <hr/>
        <div class="box-container">
        <div class="box1" :style="[{width: size + 'px', height: size + 'px'}]"></div>
        <div class="box2" :style="[{width: size + 'px', height: size + 'px'}]"></div>
        <button type="button" id="biggerBtn" @click="boxGrow">Bigger</button>
        <button type="button" id="smallerBtn" @click="boxShrink">Smaller</button>
        </div>
    `,
    methods:{
    boxShrink(){
        this.size--
        console.log("shrinking the box")
        },
    boxGrow(){
        this.size++
        console.log("growing the box")
    }
    }        
}).mount('#app')