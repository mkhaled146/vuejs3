import { createApp } from 'vue'
import { createRouter,createwebhistor } from 'vue-router'
import App from './App.vue'
import index from './components/index'
import about from './components/index'

const router = createRouter({
    history:createwebhistor(),
    router:[
        {path:'/index',coponents:index},
        {path:'/about',coponents:about}

    ]
})

const app = createApp(app)

app.use(router)

router.isReady().then(() => {
    app.mount('#app')

})


