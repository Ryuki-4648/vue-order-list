<script setup>
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }

const form = {
  status: '0',
  day: '2023-12-09 12:42',
  id: '1234567',
  name: '',
  name_kana: '',
  tel: '0123456789',
  mail_address: '',
  postal_code_1: '530',
  postal_code_2: '0001',
  prefecture: '東京都',
  address_1: '',
  address_2: '',
  belong_to_work_reunion: true,
  company_tel: '0600000000',
  company_postal_code_1: '550',
  company_postal_code_2: '0012',
  company_prefecture: '大阪府',
  company_address_1: '',
  company_address_2: '',
  total_sum_including_tax: '',
  item_total_sum: '',
  postage: '600',
  optional_fee: '0',
  order_point: '0',
  destination: ['1'],
  item_box: [
    {
      number: 1,
      delivery_list: [
        {
          name: '山田　花子',
          postal_code_1: '',
          postal_code_2: '',
          prefecture: '',
          company_address_1: '',
          company_address_2: '',
          company_name: '',
          department_name: '',
          specified_day: '1',
          deliverly_day: '2023-08-09 16:23',
          specified_time: '1',
          time: ['2'],
          note: '',
        }
      ],
      items: [
        {
          product_name: '',
          fee_including_tax: '10000',
          quantity: '1',
          img_path: 'https://placehold.jp/100x100.png',
          detail: [
            { item_name: '', select_box: '', },
            { item_name: '', select_box: '', },
            { item_name: '', select_box: '', },
          ],
        },
        {
          product_name: '',
          fee_including_tax: '7980',
          quantity: '3',
          img_path: 'https://placehold.jp/100x100.png',
          detail: [
            { item_name: '', select_box: '', },
            { item_name: '', select_box: '', },
            { item_name: '', select_box: '', },
          ],
        },
      ],
    },
    {
      number: 2,
      delivery_list: [
        {
          name: '田中　一郎',
          postal_code_1: '',
          postal_code_2: '',
          prefecture: '',
          company_address_1: '',
          company_address_2: '',
          company_name: '',
          department_name: '営業部',
          specified_day: '1',
          deliverly_day: '2023-01-30 10:34',
          specified_time: '1',
          time: ['4'],
          note: '',
        },
      ],
      items: [
        {
          product_name: '',
          fee_including_tax: '10000',
          quantity: '2',
          img_path: 'https://placehold.jp/100x100.png',
          detail: [
            { item_name: '', select_box: '', },
            { item_name: '', select_box: '', },
            { item_name: '', select_box: '', },
            { item_name: '', select_box: '', },
          ],
        },
      ],
    }
  ],
  payment_method: '0',
  use_point: '2',
  user_hold_point: '530',
  point_note: '100',
  note: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。',
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <p>{{ form.name }}</p>
  <ul>
    <li v-for="(item, index) in form.item_box" :key="index">
      {{ form.item_box[0].items[0].product_name }}
      {{ item }}
    </li>
  </ul>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
