<template>
    <div class="modals">
        <h1>Modals</h1>
        <div>
            <label> show dark modal
                <input type="checkbox"
                       v-model="showDarkModals">
            </label>
        </div>
        <button @click="showModal = true">show modal</button>
        <component v-model="showModal"
                   :is="showDarkModals ? ModalDark : Modal"
                   title="my modal title (via props)">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laudantium est dignissimos incidunt ratione aspernatur autem eveniet atque ut quasi saepe illum quam rerum ex ipsa voluptatum, sit repellat! Maxime?</p>
        </component>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
import ModalDark from '@/components/ModalDark.vue'

const showDarkModals = ref(false)
const showModal = ref(false)
</script>

